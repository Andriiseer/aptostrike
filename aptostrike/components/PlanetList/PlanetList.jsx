import { useState } from "react"

export function PlanetList({ setPlanetSelected, planetsAvailable, planetSelected }) {
    return (
        <div className="planetsList">
            <h2 className="planetsList__title">YOUR <b>PLANETS:</b></h2>
            <ol className="planetsList__list">
            {planetsAvailable.length > 0 && 
                planetsAvailable.map((planet, index) => 
                    <li 
                        key={'planet' + planet.tokenId}
                        onClick={() => setPlanetSelected(index)} 
                        className={`planetsList__item ${index === planetSelected ? 'planetsList__item--active' : ''}`} 
                    >
                        { planet.name }
                    </li>)
            }
            {!planetsAvailable.length && 
                <li className="planetsList__text">
                    Mint new planet or  buy it <br />
                    onMarketplace
                </li>
            }
            </ol>
        </div>
    )
}