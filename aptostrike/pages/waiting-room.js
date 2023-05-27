import React, { useEffect, useState, useMemo } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Planet } from "@components/Planet/Planet";
import { Header } from "@components/Header/Header";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

export default function WaitingRoom() {
    const { account } = useWallet();
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const router = useRouter();

    const waitRoom = useMemo(() => [
        {
            address: account?.address,
        },
        {
            address: "jigglypuff.apt",
        },
        {
            address: "lone-wanderer.apt",
        },
    ], [account?.address]);

    const refund = async () => {
        // Refund contract logic
        router.push("/dashboard");
    };

    useEffect(() => {
        setSelectedPlanet(JSON.parse(localStorage.getItem("selectedPlanet")));
    }, []);

    return (
        <>
            <Head>
                <title>Waiting room - AptoStrike.space</title>
            </Head>

            <Header />

            <main className='page container'>
                <div className='page__left'>
                    <div className='listBlock'>
                        <h2 className='listBlock__title blockTitle'>
                            {account?.address
                                ? `Waiting for players 3 / 5`
                                : "Loading players list..."}
                        </h2>
                        <ul className='listBlock__list'>
                            {account?.address && waitRoom.map((player) =>
                                player.address === account?.address ? (
                                    <li
                                        key={player.address}
                                        style={{
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            wordWrap: "nowrap",
                                        }}
                                        className='listBlock__item listBlock__item--active'
                                    >
                                        {player.address}
                                    </li>
                                ) : (
                                    <li
                                        key={player.address}
                                        style={{ overflow: "hidden" }}
                                        className='listBlock__item'
                                    >
                                        {player.address}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>

                <div className='page__center'>
                    <div className='planet__wrapper--flex-gap'>
                        <Planet mintHash={selectedPlanet?.genHash} />

                        <a className='btn btn--center' onClick={() => refund()}>
                            Leave room
                        </a>
                    </div>
                </div>

                <div className='page__right'></div>
            </main>
        </>
    );
}
