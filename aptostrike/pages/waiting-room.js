import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { PlanetGenerator } from "@components/PlanetGenerator/PlanetGenerator";
import { Header } from "@components/Header/Header";

export default function WaitingRoom() {
    const [waitRoom, setWaitRoom] = useState([]);
    const [roomSize, setRoomSize] = useState(-1);
    const [mintHash, setMintHash] = useState("");
    const router = useRouter();

    const refund = async () => {
        // Refund contract logic
        router.push("/dashboard");
    };

    return (
        <div className='background'>
            <Head>
                <title>Waiting room - AptoStrike.io</title>
            </Head>

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
                            {waitRoom.map((el) =>
                                el === 'address' ? (
                                    <li
                                        style={{
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            wordWrap: "nowrap",
                                        }}
                                        className='listBlock__item listBlock__item--active'>
                                        {el}
                                    </li>
                                ) : (
                                    <li
                                        style={{ overflow: "hidden" }}
                                        className='listBlock__item'>
                                        {el}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>

                <div className='page__center'>
                    <div
                        style={{
                            position: "relative",
                            width: "23%",
                            margin: "0 auto",
                        }}>
                        <PlanetGenerator mint_hash={mintHash} />

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
