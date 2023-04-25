import { useState, useEffect, useCallback } from "react";
import { BigNumber } from "bignumber.js";
import { useServerContext } from '@context/ServerContext';

const useContractServers = () => {
    const [contractServers, setContractServers] = useState([]);
    const [selectedServerIndex, setSelectedServerIndex] = useState(null);


    const {
        serverUrl: savedServerUrl,
        setServerName,
        setServerUrl,
        setStatsUrl
    } = useServerContext();

    const calculateServerState = useCallback((serverData) => {
        const {
            name: serverName,
            rooms: serverRooms,
            players: serverPlayers
        } = serverData;
        const mainRoom = serverRooms.get(serverName);

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
    }, []);

    useEffect(() => {
        const fetchServerList = async () => {
            // fetching servers logic

            if (!savedServerUrl) {
                setSelectedServerIndex(0);
                return;
            }

            setSelectedServerIndex(0);
        };

        fetchServerList();
    }, []);

    // Setting selected server to context & localStorage
    useEffect(() => {
        if (selectedServerIndex == null || !contractServers.length) return;

        const selectedServerUrl =
            contractServers[selectedServerIndex].server_url;
        const selectedServerName = contractServers[selectedServerIndex].name;
        const sanitizedSelectedServerName = selectedServerName.replaceAll('"', "");
        const baseServerUrl = selectedServerUrl.match(/^(?:server.)(.*)/)?.[1];
        const selectedServerStatsUrl = `stats.${baseServerUrl}`;

        setServerName(sanitizedSelectedServerName);
        setServerUrl(selectedServerUrl);
        setStatsUrl(selectedServerStatsUrl);
    }, [contractServers, selectedServerIndex]);

    return {
        contractServers,
        selectedServerIndex
    }
};

export default useContractServers;
