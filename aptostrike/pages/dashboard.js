import React, { useState, useEffect, useCallback, useMemo } from "react";

import Head from "next/head";

import { Header } from "@components/Header/Header";
import { Planet } from "@components/Planet/Planet";
import { PlanetList } from "@components/PlanetList/PlanetList";
import { PlanetDataList } from "@components/PlanetDataList/PlanetDataList";
import { PayMethod } from "@components/PayMethod/PayMethod";
import ServerSelector from "@components/ServerSelector/ServerSelector";
import { useSelectedServerContext } from "@context/SelectedServerContext";
import { useContractServersContext } from "@context/ContractServersContext";

export default function Dashboard() {
    const [mintHash, setMintHash] = useState("");
    const [planetsAvailable, setPlanetsAvailable] = useState([]);
    const [planetSelected, setPlanetSelected] = useState(0);

    const { serverName: selectedServerName } = useSelectedServerContext();
    const { contractServers, selectedServerIndex } = useContractServersContext();

    const isSelectedServerAvailable = useMemo(() => {
        const selectedServer = contractServers[selectedServerIndex];

        if (!selectedServer) return false;

        if (selectedServer.isFull || selectedServer.isGameRunning) {
            return false
        } else {
            return true;
        };
    }, [contractServers, selectedServerIndex]);

    const getDemoPlanet = useCallback(() => {
        return {
            gen_hash: "ooKg2zuJu9XhZBRKQaBrEDvpeYZjDPmKREp3PMSZHLkoSFK3ejN",
            token_id: "DEMO PLANET"
        };
    }, []);

    useEffect(() => {
        // If not logged in
        // if (!address) {
        //     const demoPlanet = getDemoPlanet();

        //     setPlanetsAvailable([demoPlanet]);
        //     return;
        // }

        const fetchPlanets = () => {
            // Fetching planets logic
    };

        fetchPlanets();
    }, []);

    useEffect(() => {
        if (planetsAvailable.length === 0) return;

        const selected = planetsAvailable[planetSelected];
        setMintHash(selected.gen_hash);
        localStorage.setItem("mintHash", selected.gen_hash);
    }, [planetSelected, planetsAvailable]);

    return (
        <>
            <Head>
                <title>Dashboard - AptoStrike.space</title>
            </Head>

            <Header />

            <main className="dashboard container">
                <div className="dashboard__left">
                    <PlanetList
                        planetsAvailable={planetsAvailable}
                        setPlanetSelected={setPlanetSelected}
                        planetSelected={planetSelected}
                    />
                    <ServerSelector />
                </div>

                <div className="dashboard__center">
                    <img src="/img/bg-planet.png" className="planet_outline" />
                    <Planet mintHash={mintHash} />
                    <PayMethod />
                </div>

                <div className="dashboard__right">
                    <PlanetDataList mintHash={mintHash} />
                </div>

                <button className='btn btn--center btn--wide'>
                    <span className='btn__iconPlus'></span> MINT NEW PLANET
                </button>

                <button className=' btn btn--center'>PLAY</button>
            </main>
        </>
    );
}
