import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from 'next/router'
import { useQuery } from "@tanstack/react-query";
import { useSelectedServerContext } from '@context/SelectedServerContext';
import {
    SHOULD_USE_LOCAL_DEV_SERVER,
    LOCAL_DEV_SERVER
} from "../constants";
import fetchContractServers from "@services/contractServers/fetchContractServers";

const useContractServers = () => {
    const [
        selectedServerIndex,
        setSelectedServerIndex
    ] = useState(null);

    const router = useRouter();

    const { data: contractServers } = useQuery({
        queryKey: [ "contractServers" ],
        queryFn: () => fetchContractServers(),
        // New data on key change will be swapped without the loading state
        keepPreviousData: true,
        // Refetching only when on /dashboard page
        refetchInterval: () => router.pathname === "/dashboard" ? 5000 : false,
    });

    const {
        serverUrl: savedServerUrl,
        setServerName,
        setServerUrl,
        setStatsUrl
    } = useSelectedServerContext();

    // Handling selectedServerIndex
    useEffect(() => {
        if (SHOULD_USE_LOCAL_DEV_SERVER || !savedServerUrl) {
            setSelectedServerIndex(0);
            return;
        };

        if (!contractServers) return;

        const savedServerIndex = contractServers.findIndex(
            (contractServer) => contractServer.server_url === savedServerUrl
        );

        if (savedServerIndex === -1) {
            setSelectedServerIndex(0);
            return;
        }

        setSelectedServerIndex(savedServerIndex);
    }, [ contractServers ]);

    // Setting selected server to context & localStorage
    useEffect(() => {
        if (selectedServerIndex == null || !contractServers) return;

        const selectedServerUrl =
            contractServers[selectedServerIndex].server_url;
        const selectedServerName = contractServers[selectedServerIndex].name;
        const sanitizedSelectedServerName = selectedServerName.replaceAll('"', "");
        const baseServerUrl = selectedServerUrl.match(/^(?:server.)(.*)/)?.[1];
        const selectedServerStatsUrl = SHOULD_USE_LOCAL_DEV_SERVER
            ? LOCAL_DEV_SERVER.statsServerUrl
            : `stats.${baseServerUrl}`;

        setServerName(sanitizedSelectedServerName);
        setServerUrl(selectedServerUrl);
        setStatsUrl(selectedServerStatsUrl);
    }, [contractServers, selectedServerIndex]);

    // Setting env variable SHOULD_USE_LOCAL_DEV_SERVER for access from public/main_out.js file
    useEffect(() => {
        localStorage.setItem("SHOULD_USE_LOCAL_DEV_SERVER", SHOULD_USE_LOCAL_DEV_SERVER);
    }, [ SHOULD_USE_LOCAL_DEV_SERVER ]);

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
        () => !contractServers || selectedServerIndex === null,
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
