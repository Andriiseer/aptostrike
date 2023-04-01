import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useRouter } from "next/router";

import { renderInner } from "@components/agar-client/agar-client-html";
import InGameLeaderboard from "@components/InGameLeaderboard/InGameLeaderboard";

export default function Hud() {
    const [endBlock, setEndBlock] = useState(0);
    const [server, setServer] = useState("ws.aptostrike.space");
    const [currentBlock, setCurrentBlock] = useState(0);
    const [shouldRenderMain, setShouldRenderMain] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const ls_server = "localhost:443"; // localStorage.getItem('APTOSTRIKE_SERVER_URL') || 'ws.aptostrike.space'
        const gateway =
            localStorage.getItem("ipfs-gateway") || "gateway.ipfs.io";
        setServer(ls_server);
        if (!localStorage.getItem("skinLink")) {
            localStorage.setItem(
                "skinLink",
                `https://${gateway}/ipfs/QmaXjh2fxGMN4LmzmHMWcjF8jFzT7yajhbHn7yBN7miFGi`
            );
            router.reload();
        }
    }, []);

    const isGameLive = useMemo(
        () => endBlock && currentBlock && currentBlock > Number(endBlock),
        [endBlock, currentBlock]
    );

    useEffect(() => {
        let shouldRedirect = true;
        setTimeout(() => {
            window.init();
        }, 900);
        renderMain();
    }, []);

    const renderMain = () => {
        setTimeout(() => {
            setShouldRenderMain(true);
        }, 800);
    };

    return (
        <>
            <Head>
                <title>Hud - AptoStrike.io</title>
            </Head>
            <Script
                src='/assets/js/quadtree.js'
                strategy='beforeInteractive'></Script>
            <Script
                src='/assets/js/main_out.js'
                strategy='beforeInteractive'></Script>

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
                    dangerouslySetInnerHTML={renderInner(server)}></main>
            )}

            <footer>
                <div className='gameTimer'>
                    <div className='gameTimer__num'>
                        {endBlock - currentBlock}
                    </div>
                    <div className='gameTimer__list'>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item gameTimer__item--active'></div>
                        <div className='gameTimer__item'></div>
                        <div className='gameTimer__item'></div>
                        <div className='gameTimer__item'></div>
                        <div className='gameTimer__item'></div>
                        <div className='gameTimer__item'></div>
                        <div className='gameTimer__item'></div>
                        <div className='gameTimer__item'></div>
                        <div className='gameTimer__item'></div>
                        <div className='gameTimer__item'></div>
                    </div>
                </div>
            </footer>
        </>
    );
}
