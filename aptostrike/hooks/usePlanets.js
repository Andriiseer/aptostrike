import { useQuery } from "@tanstack/react-query";
import { DEMO_PLANET } from "../constants";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

const fetchPlanets = async (connected) => {
    if (!connected) return [ DEMO_PLANET ];

    return [
        {
            tokenId: "0x01",
            genHash: "opJenwdsSy9fbY1VntMi4eiDUd4GsyiscPzrNEUF4646D8vkmmP",
            name: "aptoPlanet #13",
        },
        {
            tokenId: "0x02",
            genHash: "oocM7xJXbinznBf6ZxfYVVDPbx5TEXEEV32HTKaBSM3s5GtBJFx",
            name: "aptoPlanet  #12",
        },
    ]
};

const usePlanets = () => {
    const { connected } = useWallet();

    return useQuery({
        queryKey: [ "planets", connected ],
        queryFn: () => fetchPlanets(connected),
        // New data on key change will be swapped without the loading state
        keepPreviousData: true
    });
};

export default usePlanets;
