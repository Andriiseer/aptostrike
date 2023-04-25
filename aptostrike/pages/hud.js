import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useRouter } from "next/router";

import { renderInner } from "@components/agar-client/agar-client-html";
import InGameLeaderboard from "@components/InGameLeaderboard/InGameLeaderboard";
import GameProgressTimer from "@components/GameProgressTimer/GameProgressTimer";
import useVirusAnimation from "@hooks/useVirusAnimation";

import { useServerContext } from "@context/ServerContext";
import RouteGuard from "@components/RouteGuard/RouteGuard";

function Hud() {
    const [endBlock, setEndBlock] = useState(0);
    const [currentBlock, setCurrentBlock] = useState(0);
    const [shouldRenderMain, setShouldRenderMain] = useState(false);
    const router = useRouter();

    const { serverName, serverUrl, statsUrl } = useServerContext();

    useEffect(() => {
        const gateway =
            localStorage.getItem("ipfs-gateway") || "gateway.ipfs.io";
        if (!localStorage.getItem("skinLink")) {
            localStorage.setItem(
                "skinLink",
                `https://${gateway}/ipfs/QmaXjh2fxGMN4LmzmHMWcjF8jFzT7yajhbHn7yBN7miFGi`
            );
            router.reload();
        }
    }, []);

    const isGameFinished = useMemo(
        () => !!(currentBlock && endBlock && currentBlock >= endBlock),
        [currentBlock, endBlock]
    );

    const isGameLive = useMemo(
        () => !!(currentBlock && endBlock && endBlock - currentBlock >= 0),
        [endBlock, currentBlock]
    );

    const blocksRemaining = useMemo(
        () => (isGameLive ? endBlock - currentBlock : null),
        [isGameLive, currentBlock, endBlock]
    );

    useEffect(() => {
        let isMounted = true;

        const renderMain = () => {
            const shouldRenderTimeout = setTimeout(() => {
                setShouldRenderMain(true);
            }, 800);

            return { shouldRenderTimeout };
        };

        const windowInitTimeout = setTimeout(() => {
            window.init();
        }, 900);
        const { shouldRenderTimeout } = renderMain();

        return () => {
            isMounted = false;
            clearTimeout(windowInitTimeout);
            clearTimeout(shouldRenderTimeout);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Hud - AptoStrike.space</title>
            </Head>

            <div className='hud-wrapper'>
                <header className='header header--hud container'>
                    <div className='ingame-leaderboard-wrapper'>
                        <InGameLeaderboard />
                    </div>

                    <div>
                        <div className='header__mass mass'>2.560 * 1022 kg</div>
                    </div>

                    <div className='linkBlock-wrapper'>
                        <div className='header__linkBlock'>
                            <Image
                                className='header__icon'
                                src='/img/icon-home.png'
                                layout='fixed'
                                width={43}
                                height={34}
                                alt=''
                            />
                            <Link href='/dashboard'>
                                <a className='header__link'>Home</a>
                            </Link>
                        </div>
                    </div>
                </header>

                {shouldRenderMain && (
                    <main
                        className='hud'
                        dangerouslySetInnerHTML={renderInner(serverUrl)}></main>
                )}

                <footer>
                    <GameProgressTimer blocksRemaining={blocksRemaining} />
                </footer>
            </div>
        </>
    );
};

export default function ProtectedHud() {
    const { serverUrl } = useServerContext();
    const [walletAddress, setWalletAddress] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useVirusAnimation();

    useEffect(() => {
        const localStorageWalletAddress = localStorage.getItem("aptAddress");
        setWalletAddress(localStorageWalletAddress);
        setIsLoading(false);
    }, []);

    return (
        <>
            <Script
                src='/assets/js/quadtree.js'
                strategy='beforeInteractive'>
            </Script>
            <Script
                src='/assets/js/main_out.js'
                strategy='afterInteractive'>
            </Script>
            <RouteGuard
                isAllowed={serverUrl && walletAddress}
                redirectUrl="/dashboard"
                isLoading={isLoading}
            >
                <Hud />
            </RouteGuard>
        </>
    );
}
