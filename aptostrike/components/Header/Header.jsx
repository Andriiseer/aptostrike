import React from 'react';
import Link             from 'next/link';
import Image            from "next/legacy/image";
import { useRouter }    from 'next/router';
import useBalance from "@hooks/useBalance";
import { WalletConnector } from "@aptos-labs/wallet-adapter-mui-design";

export function Header() {
    const { data: balance = 0 } = useBalance();
    const router = useRouter();
    
    let link = '/leaderboard';
    let linkText = 'LeaderBoard';
    let linkIcon = '/img/icon-leaderboard.png';

    if (router.pathname === "/leaderboard") {
        link = "/dashboard"
        linkText = "Back";
        linkIcon = '/img/icon-back.png';
    };

    return (
        <header className="header container">
            <div className="header__linkBlock">
                <Image
                    className="header__icon"
                    src={linkIcon}
                    layout="fixed"
                    width={21}
                    height={31}
                    alt=""
                />
                <Link href={link} className="header__link" legacyBehavior>
                    {linkText}
                </Link>
            </div>

            <div className="header__money money">
                <div className="money__item">
                    <p className="money__name">APT</p>
                    <p className="money__num">
                        {balance.toFixed(2)}
                    </p>
                </div>
            </div>

            <div className="header__linkBlock">
                <WalletConnector />
            </div>
        </header>
    );
}

