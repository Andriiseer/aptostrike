import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';

import { Header } from '@components/Header/Header';

export default function LastGameStats() {
    const router = useRouter()

    const payDividends = () => {
      // Pay Dividends Contract Logic
    }

    return (
        <div className="background">
            <Head>
                <title>Game Winners - AptoStrike.space</title>
            </Head>
            <Header />
            <main className='container container--small'>

                <div className="statList statList--wide">
                    <ul className="statList__list">
                      {
                        router.query.leaderboard && JSON.parse(router.query.leaderboard).map((player, index) => (
                          <li key={'player-' + index} className={`statList__item ${index === 3 ? 'statList__item--active' : ''}`}>
                            <p className="statList__rank">{index + 1}</p>
                            <p className="statList__nft">{player.address}</p> 
                            <p className="statList__score">{player.amount}</p>
                          </li>
                        ))
                      }
                    </ul>
                </div>
                <a onClick={() => payDividends()} className="btn btn--center" >
                    Claim Rewards
                </a>
                <a onClick={() => {router.push('/dashboard')}} className="btn btn--center" style={{ marginTop: '2rem' }}>
                    Dashboard
                </a>

            </main>
        </div>
    )
}