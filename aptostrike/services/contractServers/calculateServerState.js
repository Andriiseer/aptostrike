const calculateServerState = (serverData) => {
    const {
        name: serverName,
        rooms: serverRooms,
        players: serverPlayers
    } = serverData;
    const mainRoom = serverRooms.get(`"${serverName}"`);

    // Checking if the server is full
    let isFull = false;

    const maxPlayers = mainRoom.size.toNumber();
    const currentNumberOfPlayers = serverPlayers.length;

    if (maxPlayers === currentNumberOfPlayers) {
        isFull = true;
    }

    // Checking if the game is currently running
    let isGameRunning = false;

    const isFinishBlockPresent = !mainRoom.finish_block.isZero();

    if (isFinishBlockPresent) {
        isGameRunning = true;
    }

    return {
        isFull,
        isGameRunning
    };
};

export default calculateServerState;
