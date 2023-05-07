import { useState, useEffect, useCallback, useMemo } from "react";
import { BigNumber } from "bignumber.js";
import { useSelectedServerContext } from '@context/SelectedServerContext';

const useContractServers = () => {
    const [contractServers, setContractServers] = useState([]);
    const [selectedServerIndex, setSelectedServerIndex] = useState(null);

    const {
        serverUrl: savedServerUrl,
        setServerName,
        setServerUrl,
        setStatsUrl
    } = useSelectedServerContext();

    const calculateServerState = useCallback((serverData) => {
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
    }, []);

    useEffect(() => {
        const fetchServerList = async () => {
            // fetching servers logic

            if (!savedServerUrl) {
                setSelectedServerIndex(0);
                return;
            }
            
            setSelectedServerIndex(0);

        if (SHOULD_USE_DEV_SERVER) {
            setContractServers([DEV_SERVER.data]);
            setSelectedServerIndex(0);
            sessionStorage.setItem("SHOULD_USE_DEV_SERVER", "true");
            return;
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
        const selectedServerStatsUrl = SHOULD_USE_DEV_SERVER
            ? DEV_SERVER.statsServerUrl
            : `stats.${baseServerUrl}`;

        setServerName(sanitizedSelectedServerName);
        setServerUrl(selectedServerUrl);
        setStatsUrl(selectedServerStatsUrl);
    }, [contractServers, selectedServerIndex]);

    // Setting env variable SHOULD_USE_DEV_SERVER for access from public/main_out.js file
    useEffect(() => {
        localStorage.setItem("SHOULD_USE_DEV_SERVER", SHOULD_USE_DEV_SERVER);
    }, []);

    const selectNextServer = useCallback(() => {
        if (contractServers.length === selectedServerIndex + 1) {
            setSelectedServerIndex(0);
            return;
        };

        setSelectedServerIndex(selectedServerIndex + 1);
    }, [contractServers, selectedServerIndex]);

    const selectPreviousServer = useCallback(() => {
        if (selectedServerIndex === 0) {
            setSelectedServerIndex(contractServers.length - 1);
            return;
        };

        setSelectedServerIndex(selectedServerIndex - 1);
    }, [contractServers, selectedServerIndex]);

    const isLoading = useMemo(
        () => contractServers.length === 0 || selectedServerIndex === null,
        [contractServers, selectedServerIndex]
    );

    return {
        isLoading,
        contractServers,
        selectedServerIndex,
        selectNextServer,
        selectPreviousServer
    }
};

export default useContractServers;
