import React, { useCallback, useMemo } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Header } from "@components/Header/Header";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

export default function LastGameStats() {
    const { account } = useWallet();

    const router = useRouter();

    const leaderboard = useMemo(() => [
        {
            address: account?.address,
            amount: 1523,
        },
        {
            address: "jigglypuff.apt",
            amount: 853,
        },
        {
            address: "lone-wanderer.apt",
            amount: 536,
        },
    ], [account?.address]);

    const payDividends = useCallback(() => {
        // Pay Dividends Contract Logic
    }, []);

    return (
        <div className="background">
            <Head>
                <title>Game Winners - AptoStrike.space</title>
            </Head>
            <Header />
            <main className="container container--small">
                <div className="statList statList--wide">
                    <ul className="statList__list">
                        {account?.address ? (leaderboard.map((player, index) => (
                                <li
                                    key={player.address}
                                    className={`statList__item ${
                                        account?.address === player.address
                                            ? "statList__item--active"
                                            : ""
                                    }`}
                                >
                                    <p className="statList__rank">
                                        {index + 1}
                                    </p>
                                    <p className="statList__nft">
                                        {player.address}
                                    </p>
                                    <p className="statList__score">
                                        {player.amount}
                                    </p>
                                </li>
                            ))
                        ) : (
                            <li className="statList__loading">Loading...</li>
                        )}
                    </ul>
                </div>
                <a onClick={payDividends} className="btn btn--center">
                    Claim Rewards
                </a>
                <a
                    onClick={() => router.push("/dashboard")}
                    className="btn btn--center"
                    style={{ marginTop: "2rem" }}
                >
                    Dashboard
                </a>
            </main>
        </div>
    );
}
