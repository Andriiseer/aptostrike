import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import PlanetGenerator from '../components/PlanetGenerator/PlanetGenerator';

const DEFAULT_PLANET_FEATURES = {
    habitability: 0,
    size: 0,
    age: 0,
    gravity: 0,
    exoplanet: false
};

const PLANETS_AVAILABLE = [
    {
        img_link: 'https://cloudflare-ipfs.com/ipfs/Qmb7BimAtVKmizWzzsdTR6rYWNivuga3y3kzU7cs7KC95m',
        gen_hash: 'ooTkvMhZ2rL9cpWvcfnimrNCjbBkU3PtM3KQSHoNDt33cR3QmkM',
        token_id: 574081
    },
    {
        img_link: 'https://cloudflare-ipfs.com/ipfs/QmaNLKDPbncvmQQrVfgJokz5s4FgwPqQHeDT4Gzt8Si15e',
        gen_hash: 'oo7yqeXEqYWE7JvvapbhcWcnQGrMvy7veXJHYHjqyxtnN8TZkgd',
        token_id: 580756
    }
]

export default function Dashboard() {
    const [mintHash, setMintHash] = useState('');
    const [planetSelected, setPlanetSelected] = useState(0)
    const [planetFeatures, setPlanetFeatures] = useState(DEFAULT_PLANET_FEATURES)

    useEffect(() => {
        if (PLANETS_AVAILABLE?.[planetSelected]) {
            const selected = PLANETS_AVAILABLE[planetSelected]
            console.log(selected)
            setMintHash(selected.gen_hash);
            localStorage.setItem('skinLink', selected.img_link)
        }
    }, [planetSelected])

    useEffect(() => {
        window.$hashFeatures && setPlanetFeatures(window.$hashFeatures)
    }, [mintHash])
    
    const enterRoom = async () => {
        // Enter Room Contract Logic
    }

    return (
        <div className="background">
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Dashboard - AptoStrike.io</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <header className="header container">
                <Link href="/leaderboard">
                    <a className="header__linkLeft link">LEADERBOARD</a>
                </Link>
                <h1 className="header__title">Dashboard</h1>
                <div className="header__dashboard dashboard">
                    <div className="dashboard__icon">
                        <a className="dashboard__link">
                            <img className="dashboard__img" src="/img/icon-exite.png" alt="Home icon" />
                        </a>
                    </div>
                    <div className="dashboard__info">
                        <p className="dashboard__text">CONNECT WALLET</p>
                        <p className="dashboard__num"><span className='dashboard__symbol'>APT</span>150.146</p>
                    </div>
                </div>
            </header>
            
            <main className='page container'>
                <div className="page__left">
                    <div className="listBlock">
                        <h2 className="listBlock__title">Select Planet</h2>
                            <ul className="listBlock__list">
                                {
                                    PLANETS_AVAILABLE.map((planet, index) => 
                                        <li 
                                            key={'planet' + planet.token_id}
                                            onClick={() => setPlanetSelected(index)} 
                                            className={`listBlock__item ${index === planetSelected ? 'listBlock__item--active' : ''}`}
                                            >
                                            { planet.token_id }
                                        </li> 
                                    )
                                }
                            </ul>
                        {
                            !PLANETS_AVAILABLE.length && <p className="listBlock__text">{`Uh oh, Looks like you haven't minted any planet NFTs...`}</p>
                        }
                    </div>
                    <a className="btn btn--wide">MINT NEW NFT</a>

                    <div className="payMethod">
                        <h3 className="payMethod__title">Payment method</h3>
                        <div className="payMethod__switcher">
                            <img className="payMethod__prev" src='/img/icon-prev.png'></img>
                            <p className="payMethod__item">LP Token</p>
                            <img className="payMethod__next" src='/img/icon-prev.png'></img>
                        </div>
                    </div>
                </div>

                <div className="page__center">
                    <div className="planet planet--bgCircle">
                        <PlanetGenerator mint_hash={mintHash} />
                        {/* {imgLink !== '' && <img className="planet__img " src={imgLink} alt="planet background" />} */}
                        <a className="planet__btn btn btn--center btn--neon">Connect wallet</a>
                    </div>
                </div>

                <div className="page__right">
                    <div className="listBlock">
                        <h2 className="listBlock__title">Statistics</h2>
                        <ul className="listBlock__list">
                            {
                                Object.keys(planetFeatures).map(
                                    key => <li key={'features-'+key} className="listBlock__item">{key.toUpperCase()} <span>{planetFeatures[key]}</span></li>
                                )
                            }
                        </ul>
                    </div>
                    {/* <a className="btn btn--wide" href="/waiting-room">PLAY 1 APT</a>
                    <a className="btn btn--wide btn--second" href="/waiting-room">PLAY 10 APT</a> */}
                </div>
            </main>
        </div>
    )
}

