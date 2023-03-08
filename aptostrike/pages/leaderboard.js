import React from 'react';
import Head from 'next/head'
import Link from 'next/link';

export default function Leaderboard() {
    return (
        <div className="background">
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Leaderboard - AptoStrike.io</title>
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
                <h1 className="header__title">Leaderboard</h1>
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
                        <p className="dashboard__num"><span className='dashboard__symbol'>APT</span>847.176</p>
                    </div>
                </div>
            </header>
            
            <main className='page container container--small'>

                <div className="listBlock listBlock--wide">
                    <ul className="listBlock__list">
                        <li className="listBlock__item">
                            <p className="listBlock__rank">1</p>
                            <p className="listBlock__nft">NFT #456677 </p> 
                            <p className="listBlock__score">45667374647</p>
                            <a className="listBlock__link" href=""></a>
                        </li>
                        <li className="listBlock__item listBlock__item--active">
                            <p className="listBlock__rank">2</p>
                            <p className="listBlock__nft">NFT #686890090876</p>  
                            <p className="listBlock__score">6868937</p>
                            <a className="listBlock__link" href=""></a>
                        </li>
                        <li className="listBlock__item">
                            <p className="listBlock__rank">3</p>
                            <p className="listBlock__nft">NFT #678978787 </p> 
                            <p className="listBlock__score">45667374647</p>
                            <a className="listBlock__link" href=""></a>
                        </li>
                        <li className="listBlock__item">
                            <p className="listBlock__rank">4</p>
                            <p className="listBlock__nft">NFT #87879 </p> 
                            <p className="listBlock__score">45667374647</p>
                            <a className="listBlock__link" href=""></a>
                        </li>
                        <li className="listBlock__item">
                            <p className="listBlock__rank">5</p>
                            <p className="listBlock__nft">NFT #878665 </p> 
                            <p className="listBlock__score">45667374647</p>
                            <a className="listBlock__link" href=""></a>
                        </li>
                        <li className="listBlock__item">
                            <p className="listBlock__rank">6</p>
                            <p className="listBlock__nft">NFT #456677 </p> 
                            <p className="listBlock__score">4566737464</p>
                            <a className="listBlock__link" href=""></a>
                        </li>
                        <li className="listBlock__item">
                            <p className="listBlock__rank">7</p>
                            <p className="listBlock__nft">NFT #456677 </p> 
                            <p className="listBlock__score">4566737464</p>
                            <a className="listBlock__link" href=""></a>
                        </li>
                        <li className="listBlock__item">
                            <p className="listBlock__rank">8</p>
                            <p className="listBlock__nft">NFT #456677 </p> 
                            <p className="listBlock__score">456673746</p>
                            <a className="listBlock__link" href=""></a>
                        </li>
                        <li className="listBlock__item">
                            <p className="listBlock__rank">9</p>
                            <p className="listBlock__nft">NFT #456677 </p> 
                            <p className="listBlock__score">37117374</p>
                            <a className="listBlock__link" href=""></a>
                        </li>
                        <li className="listBlock__item">
                            <p className="listBlock__rank">10</p>
                            <p className="listBlock__nft">NFT #456677 </p> 
                            <p className="listBlock__score">3566737</p>
                            <a className="listBlock__link" href=""></a>
                        </li>
                    </ul>
                </div>

            </main>
        </div>
    )
}