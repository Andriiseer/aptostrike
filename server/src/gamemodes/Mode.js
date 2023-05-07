const signalR = require("@microsoft/signalr");
const axios = require("axios");

class Mode {
    constructor() {
        this.ID = -1;
        this.name = "Blank";
        this.decayMod = 1.0; // Modifier for decay rate (Multiplier)
        this.packetLB = 49; // Packet id for leaderboard packet (48 = Text List, 49 = List, 50 = Pie chart)
        this.haveTeams = false; // True = gamemode uses teams, false = gamemode doesnt use teams
        this.specByLeaderboard = false; // false = spectate from player list instead of leaderboard
        this.IsTournament = false;
        this.playersInRoom = [];
        this.endBlock = 0;
    }
    // Override these
    onServerInit(server) {
        // Called when the server starts
        server.run = true;
    }

    killPlayer(socket, server) {
        const { player } = socket;
        if (!player || !player.cells) return;

        while (player.cells.length) server.removeNode(player.cells[0]);

        if (player.isBot) {
            socket.close();
            return;
        };
    };

    killAll(server) {
        // Check if server is empty.
        if (!server.clients.length) {
            console.log("The server is empty.");
        }
        for (const socket of server.clients) {
            this.killPlayer(socket, server);
        }
        console.log("Removed all players.");
    }

    onTick(server) {
        if (process.env.STAGE === "local") return;
        
        const allowedPlayersSet = new Set(this.playersInRoom);
        const encounteredPlayers = new Map();
        const serverPlayers = new Set(server.clients.map((socket) => socket.player._name));
        const alivePlayers = server.clients.flatMap((socket) => {
            const { player } = socket;

            if (!player || !player.cells || player.cells.length === 0) return [];

            return [ player._name ];
        });

        // Killing of not allowed players

        // Kill everyone, when the game is not running and there are alive players / bots
        if (alivePlayers.length !== 0 && allowedPlayersSet.size === 0) {
            this.killAll(server);
            return;
        };
        
        // When the game is running
        for (const socket of server.clients) {
            const client = socket.player;
            const name = client._name.match(/(?:<.*>)?([\w\d]+)/)?.[1];
            // Kill users whos names aren't in the storage
            if (!allowedPlayersSet.has(name)) {
                this.killPlayer(client, server);
            } else {
                // Kill users who are present two or more times in the game
                if (encounteredPlayers.has(name)) {
                    const dupeClient = encounteredPlayers.get(name);
                    this.killPlayer(client, server);
                    this.killPlayer(dupeClient, server);
                }
                encounteredPlayers.set(name, client);
            }
        }
    }

    onPlayerInit(player) {
        // Called after a player object is constructed
    }
    onPlayerSpawn(server, player) {
        // Called when a player is spawned
        player.color = server.getRandomColor(); // Random color
        server.spawnPlayer(player, server.randomPos());
    }
    onCellAdd(cell) {
        // Called when a player cell is added
    }
    onCellRemove(cell) {
        // Called when a player cell is removed
    }
    updateLB(server) {
        // Called when the leaderboard update function is called
        server.leaderboardType = this.packetLB;
    }
}

module.exports = Mode;
