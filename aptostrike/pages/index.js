import React            from 'react';
import Head             from 'next/head'
import Image            from "next/image";
import Link             from 'next/link';
import logoBig from '../public/img/logo-big.png';

export default function Landing() {

    return <>
        <Head>
            <title>AptoStrike.space</title>
        </Head>
        
        <main className='lp container container--small'>
            <div className='lp__content'>
                <Image 
                    className="lp__logo"
                    priority
                    src={logoBig}
                    width={500}
                    height={350}
                    alt="Logo" 
                />
                <p className="lp__text">
                    Revolutionary play and earn space adventure game with NFT planets and DeFi mechanics built on Aptos blockchain.
                </p>
                <Link href="/dashboard" className="lp__btn btn btn--center">
                    Join the game
                </Link>
            </div>
            <div className='lp__bg'>
                <video className="lp__video" loop muted autoPlay poster={"/img/lp-bg-poster.png"}>
                    <source src="/video/lp-bg-video-6.mp4" type="video/mp4" />
                    <source src="video/lp-bg-video-8.webm" type="video/webm" />
                </video>
                <div className="lp__overlay"></div>
            </div>
        </main>
    </>;
}

