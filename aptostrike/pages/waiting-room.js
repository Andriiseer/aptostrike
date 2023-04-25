import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Planet } from "@components/Planet/Planet";
import { Header } from "@components/Header/Header";
import usePlanet from "@hooks/usePlanet";
import { PlanetScripts } from "@components/PlanetScripts/PlanetScripts";
import { useServerContext } from '@context/ServerContext';

export default function WaitingRoom() {
    const [waitRoom, setWaitRoom] = useState([]);
    const [roomSize, setRoomSize] = useState(-1);
    const [mintHash, setMintHash] = useState("");
    const router = useRouter();

    const {
        isPlanetInitialized,
        setArePlanetScriptsReady
    } = usePlanet(mintHash);

    const { serverName } = useServerContext();

    const refund = async () => {
        // Refund contract logic
        router.push("/dashboard");
    };

    return (
        <div className='background'>
            <Head>
                <title>Waiting room - AptoStrike.space</title>
            </Head>
            <PlanetScripts onScriptsReady={() => setArePlanetScriptsReady(true)} />

            <Header />

            <main className='page container'>
                <div className='page__left'>
                    <div className='listBlock'>
                        <h2 className='listBlock__title blockTitle'>
                            {roomSize !== -1
                                ? `Waiting for players ${waitRoom.length} / ${roomSize}`
                                : "Loading players list..."}
                        </h2>
                        <ul className='listBlock__list'>
                            {waitRoom.map((player) =>
                                player.name === 'address' ? (
                                    <li
                                        key={player.name}
                                        style={{
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            wordWrap: "nowrap",
                                        }}
                                        className='listBlock__item listBlock__item--active'
                                    >
                                        {player.name}
                                    </li>
                                ) : (
                                    <li
                                        key={player.name}
                                        style={{ overflow: "hidden" }}
                                        className='listBlock__item'
                                    >
                                        {player.name}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>

                <div className='page__center'>
                    <div className='planet__wrapper--flex-gap'>
                        <Planet isPlanetReady={isPlanetInitialized} />

                        <a className='btn btn--center' onClick={() => refund()}>
                            Leave room
                        </a>
                    </div>
                </div>

                <div className='page__right'></div>
            </main>
        </div>
    );
}
