import React, { useState, useEffect, useCallback, useMemo } from "react";

import Head from "next/head";
import { useRouter } from "next/router";
import usePlanets from "@hooks/usePlanets";

import { Header } from "@components/Header/Header";
import { Planet } from "@components/Planet/Planet";
import { PlanetList } from "@components/PlanetList/PlanetList";
import { PlanetDataList } from "@components/PlanetDataList/PlanetDataList";
import { PayMethod } from "@components/PayMethod/PayMethod";
import ServerSelector from "@components/ServerSelector/ServerSelector";
import Button from "@components/Button/Button";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

export default function Dashboard() {
    const { connected, account } = useWallet();
    const router = useRouter();
    const [planetSelected, setPlanetSelected] = useState(0);

    const { data: planetsAvailable = [] } = usePlanets();

    const selectedPlanet = useMemo(() => {
        if (planetsAvailable.length === 0) {
            return null;
        };

        const selected = planetsAvailable[planetSelected];

        localStorage.setItem("selectedPlanet", JSON.stringify(selected));

        return selected;
    }, [ planetsAvailable, planetSelected ]);

    useEffect(() => {
        if (account?.address) localStorage.setItem('aptAddress', account.address)
    }, [ account?.address ])

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
                    <Planet
                        mintHash={selectedPlanet?.genHash}
                    />
                    <PayMethod />
                </div>

                <div className="dashboard__right">
                    <PlanetDataList
                        mintHash={selectedPlanet?.genHash}
                    />
                </div>

                <button className="btn btn--center btn--wide dashboard__area-mint">
                    <span className="btn__iconPlus"></span> MINT NEW PLANET
                </button>

                <span className="dashboard__area-play">
                    <Button
                        className="btn btn--center"
                        onClick={() => router.push("/hud")}
                        disabled={!connected}
                        label="PLAY"
                    />
                </span>
            </main>
        </>
    );
}
