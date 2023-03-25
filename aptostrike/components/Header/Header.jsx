import Link             from 'next/link';
import Image            from 'next/image';
import { useRouter }    from 'next/router';


export function Header() {
    const router = useRouter();
    
    let link = '/leaderboard';
    let linkText = 'LeaderBoard';
    let linkIcon = '/img/icon-leaderboard.png';

    if (router.pathname === "/leaderboard") {
        link = "/dashboard"
        linkText = "Back";
        linkIcon = '/img/icon-back.png';
    }

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
                <Link href={link}>
                    <a className="header__link">
                        {linkText}
                    </a>
                </Link>
            </div>

            <div className="header__money money">
                <div className="money__item">
                    <p className="money__name">APT</p>
                    <p className="money__num">165.52</p>
                </div>
                <div className="money__item">
                    <div className="money__name">LP</div>
                    <div className="money__num">0</div>
                </div>
            </div>

            <div className="header__linkBlock">
                <Image 
                    className="header__icon" 
                    src="/img/icon-log-out.png" 
                    layout="fixed" 
                    width={43} 
                    height={34}
                    alt=""
                />
                <a className="header__link">Connect wallet</a>
            </div>
        </header>
    )
}
