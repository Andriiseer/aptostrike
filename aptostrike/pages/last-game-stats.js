import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import axios from 'axios';

export default function LastGameStats() {
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
      const getLeaderboard = async () => {
        const res = await axios.get('https://stats.aptostrike.io')
        setLeaderboard(res.data.leaderboard)
      }

      getLeaderboard()
    }, [])

    const payDividends = () => {
      // Pay Dividends Contract Logic
    }

    return (
        <div className="background">
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Game Winners - AptoStrike.io</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <header className="header container container--big">
                <Link href={'/'}>
                    <a className="header__logo logo">
                        <img className="header__logoImg" src='/img/logo-2x.png' ></img>
                    </a>
                </Link>
                <h1 className="header__title">Last Game Winners</h1>
                <div className="header__dashboard dashboard">
                    <div className="dashboard__icon">
                        <Link href="/dashboard">
                            <a className="dashboard__link" >
                                <img className="dashboard__img" src="/img/icon-home.png" alt="Home icon" />
                            </a>
                        </Link>
                        
                    </div>
                    <div className="dashboard__info">
                        <p className="dashboard__text">CONNECT WALLET</p>
                        <p className="dashboard__num"><span className='dashboard__symbol'>APT</span>359.478</p>
                    </div>
                </div>
            </header>
            
            <main className='container container--small'>

                <div className="listBlock listBlock--wide">
                    <ul className="listBlock__list">
                      {
                        leaderboard.map((player, index) => (
                          <li key={'player-' + index} className={`listBlock__item ${index === 3 ? 'listBlock__item--active' : ''}`}>
                            <p className="listBlock__rank">{index + 1}</p>
                            <p className="listBlock__nft">{player.name}</p> 
                            <p className="listBlock__score">{player.score}</p>
                          </li>
                        ))
                      }
                    </ul>
                </div>
                <a onClick={() => payDividends()} className="btn btn--center btn--neon" >
                    Claim Rewards
                </a>

            </main>
        </div>
    )
}