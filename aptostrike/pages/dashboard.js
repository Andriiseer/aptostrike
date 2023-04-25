import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";

import Head from "next/head";
import { useRouter } from "next/router";
import usePlanet from "@hooks/usePlanet";

import { Header } from "@components/Header/Header";
import { Planet } from "@components/Planet/Planet";
import { PlanetList } from "@components/PlanetList/PlanetList";
import { PlanetDataList } from "@components/PlanetDataList/PlanetDataList";
import { PayMethod } from "@components/PayMethod/PayMethod";
import { PlanetScripts } from "@components/PlanetScripts/PlanetScripts";
import useContractServers from "@hooks/useContractServers";

const DEFAULT_GATEWAY = "gateway.ipfs.io";

const IPFS_GATEWAYS = [
    "gateway.ipfs.io",
    "ipfs.io",
    "infura-ipfs.io",
    "cloudflare-ipfs.com",
    "dweb.link",
    "ipfs.fleek.co",
    "ipfs.lain.la",
    "nftstorage.link",
    "ipfs.infura.io",
    "ipfs.telos.miami",
    "ipfs.eth.aragon.network",
    "via0.com",
    "gateway.pinata.cloud"
];

export default function Dashboard() {
    const router = useRouter();
    const [mintHash, setMintHash] = useState("");
    const [planetsAvailable, setPlanetsAvailable] = useState([]);
    const [planetSelected, setPlanetSelected] = useState(0);

    const { contractServers, selectedServerIndex } = useContractServers();

    const { isPlanetInitialized, setArePlanetScriptsReady } =
        usePlanet(mintHash);

    useEffect(() => {
    const promisify = (gateway) => {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .get(
                        `https://${gateway}/ipfs/QmaXjh2fxGMN4LmzmHMWcjF8jFzT7yajhbHn7yBN7miFGi`
                    )
                    .then((res) => {
                        console.log(res.status);
                        resolve(gateway);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            } catch (e) {
                reject();
            }
        });
    };

    const ipfsRace = async () => {
        const promiseList = [];

            for (let gateway of IPFS_GATEWAYS) {
            promiseList.push(promisify(gateway));
        }

        const winner = await Promise.race(promiseList);
        localStorage.setItem("ipfs-gateway", winner);
    };

        ipfsRace();
    }, []);

    const getGateway = useCallback(() => {
        if (typeof window === "undefined") {
            return DEFAULT_GATEWAY;
        }

        const localStorageGateway = localStorage.getItem("ipfs-gateway");

        if (!localStorageGateway) {
            return DEFAULT_GATEWAY;
        };

        return localStorageGateway;
    }, []);

    const getDemoPlanet = useCallback((gateway) => {
        return {
            gen_hash: "ooKg2zuJu9XhZBRKQaBrEDvpeYZjDPmKREp3PMSZHLkoSFK3ejN",
            img_link: `https://${gateway}/ipfs/QmaXjh2fxGMN4LmzmHMWcjF8jFzT7yajhbHn7yBN7miFGi`,
            token_id: "DEMO PLANET"
        };
    }, []);

    useEffect(() => {
        const fetchPlanets = () => {
            const gateway = getGateway();
            setPlanetsAvailable([ getDemoPlanet(gateway) ]);
        };

        fetchPlanets();
    }, []);

    useEffect(() => {
        if (typeof selectedServerIndex == "undefined" || !serverList.length)
            return;
        localStorage.setItem(
            "APTOSTRIKE_SERVER_URL",
            serverList[selectedServerIndex].server_url
        );
        localStorage.setItem(
            "APTOSTRIKE_SERVER_NAME",
            serverList[selectedServerIndex].name
        );
    }, [selectedServerIndex]);

    useEffect(() => {
        if (planetsAvailable.length === 0) return;

            const selected = planetsAvailable[planetSelected];
            setMintHash(selected.gen_hash);
            localStorage.setItem("mintHash", selected.gen_hash);
            localStorage.setItem("skinLink", selected.img_link);
    }, [planetSelected, planetsAvailable]);

    return (
        <>
            <Head>
                <title>Dashboard - AptoStrike.space</title>
            </Head>
            <PlanetScripts
                onScriptsReady={() => setArePlanetScriptsReady(true)}
            />

            <Header />

            <main className="dashboard container">
                <div className="dashboard__left">
                    <PlanetList
                        planetsAvailable={planetsAvailable}
                        setPlanetSelected={setPlanetSelected}
                        planetSelected={planetSelected}
                    />
                </div>

                <div className="dashboard__center">
                    <img src="/img/bg-planet.png" className="planet_outline" />
                    <Planet isPlanetReady={isPlanetInitialized} />
                    <PayMethod />
                </div>

                <div className="dashboard__right">
                    <PlanetDataList
                        isPlanetReady={isPlanetInitialized}
                        mintHash={mintHash}
                    />
                </div>

                <a className='btn btn--center btn--wide'>
                    <span className='btn__iconPlus'></span> MINT NEW PLANET
                </a>

                <a className=' btn btn--center'>PLAY</a>
            </main>
        </>
    );
}
