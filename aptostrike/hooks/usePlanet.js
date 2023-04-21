import { useState, useEffect } from "react";

const usePlanet = (mintHash) => {
    const [arePlanetScriptsReady, setArePlanetScriptsReady] = useState(false);
    const [isPlanetInitialized, setIsPlanetInitialized] = useState(false);

    useEffect(() => {
        if (!mintHash || !arePlanetScriptsReady) return;

        const loadPlanet = () => {
            localStorage.setItem("hash", mintHash);
            window.hashGen();
            window.main();
            window.initPlanet(mintHash).then(() => {
                setIsPlanetInitialized(true);
            });
        };

        setIsPlanetInitialized(false);
        loadPlanet();
    }, [mintHash, arePlanetScriptsReady]);

    return {
        isPlanetInitialized,
        setArePlanetScriptsReady
    };
};

export default usePlanet;
