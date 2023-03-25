import axios from "axios";
import { useState, useEffect } from "react";

import Head from "next/head";

import { Header } from "@components/Header/Header";
import { Planet } from "@components/Planet/Planet";
import { PlanetList } from "@components/PlanetList/PlanetList";
import { PlanetDataList } from "@components/PlanetDataList/PlanetDataList";
import { PayMethod } from "@components/PayMethod/PayMethod";

export default function Dashboard() {
    const [mintHash, setMintHash] = useState("");
    const [planetsAvailable, setPlanetsAvailable] = useState([]);
    const [planetSelected, setPlanetSelected] = useState(0);
    const [selectedServerIndex, setSelectedServerIndex] = useState(undefined);
    const [serverList, setServerList] = useState([]);

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
        const ipfsGateways = [
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
            "gateway.pinata.cloud",
        ];

        const promiseList = [];

        for (let gateway of ipfsGateways) {
            promiseList.push(promisify(gateway));
        }

        const winner = await Promise.race(promiseList);
        localStorage.setItem("ipfs-gateway", winner);
    };

    useEffect(async () => {
        ipfsRace();

        let ls_server = localStorage.getItem("APTOSTRIKE_SERVER_URL");
            setSelectedServerIndex(0);
    }, []);

    setTimeout(async () => {
        let gateway;
        if (typeof window !== "undefined")
            gateway = localStorage.getItem("ipfs-gateway") || "gateway.ipfs.io";
        else {
            gateway = "gateway.ipfs.io";
        }
        const planets = [{
            gen_hash:
                "ooKg2zuJu9XhZBRKQaBrEDvpeYZjDPmKREp3PMSZHLkoSFK3ejN",
            img_link: `https://${gateway}/ipfs/QmaXjh2fxGMN4LmzmHMWcjF8jFzT7yajhbHn7yBN7miFGi`,
            token_id: "DEMO PLANET",
        }];

        setPlanetsAvailable(planets);
    }, 2000);

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
        if (planetsAvailable?.[planetSelected]) {
            const selected = planetsAvailable[planetSelected];
            if (selected.token_id === "DEMO PLANET") {
                setIsDemoMode(true);
            } else {
                setIsDemoMode(false);
            }
            setMintHash(selected.gen_hash);
            localStorage.setItem("mintHash", selected.gen_hash);
            localStorage.setItem("skinLink", selected.img_link);
        }
    }, [planetSelected, planetsAvailable]);

    return (
        <>
            <Head>
                <title>Dashboard - AptoStrike.io</title>
            </Head>

            <Header />

            <main className='dashboard container'>
                <div className='dashboard__left'>
                    <PlanetList
                        planetsAvailable={planetsAvailable}
                        setPlanetSelected={setPlanetSelected}
                        planetSelected={planetSelected}
                    />
                </div>

                <div className='dashboard__center'>
                    <img src='/img/bg-planet.png' className='planet_outline' />
                    <Planet mintHash={mintHash} />
                    <PayMethod />
                </div>

                <div className='dashboard__right'>
                    <PlanetDataList mintHash={mintHash} />
                </div>

                <a className='btn btn--center btn--wide'>
                    <span className='btn__iconPlus'></span> MINT NEW PLANET
                </a>

                <a className=' btn btn--center'>PLAY</a>
            </main>
        </>
    );
}
