import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { renderInner } from '../components/agar-client/agar-client-html';
import Script from 'next/script'

export default function Hud() {
    const [endBlock, setEndBlock] = useState(null)
    const [currentBlock, setCurrentBlock] = useState(0)
    const router = useRouter()

    const isGameLive = true// endBlock === null || currentBlock <= Number(endBlock)

    useEffect(() => {
        if (!isGameLive) {
            // router.push('/last-game-stats')
        }
    }, [isGameLive])

    useEffect(() => {
        setTimeout(() => {
            window.init()
        }, 100);
    }, [])

    return (
        <div>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Hud - AptoStrike.io</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#1a113c" />
            </Head>
            <Script src="/assets/js/quadtree.js" strategy="beforeInteractive"></Script>
            <Script src="/assets/js/main_out.js" strategy="beforeInteractive"></Script>

            <header className="header header--hud">
                <div className="blocksTimer">
                    <div className='blocksTimer__num'>{currentBlock >= endBlock ? endBlock - currentBlock : 0}</div>
                    <div className='blocksTimer__text'>BLOCKS</div>
                </div>

                <div className="dashboard dashboard--hud">
                    <div className="dashboard__icon">
                        <Link href="/dashboard">
                            <a className="dashboard__link" >
                                <img className="dashboard__img" src="/img/icon-home.png" alt="Home icon" />
                            </a>
                        </Link>
                    </div>
                    <div className="dashboard__info">
                        <p className="dashboard__text">SCORE</p>
                        <p className="dashboard__num">35000</p>
                    </div>
                </div>
            </header>
            
            <main dangerouslySetInnerHTML={ isGameLive ? renderInner() : null } ></main>
        </div>
    )
}
