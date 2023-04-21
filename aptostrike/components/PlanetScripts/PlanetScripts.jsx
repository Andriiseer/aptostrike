import React, { memo } from "react";
import Script from "next/script";

function PlanetScriptsComponent({ onScriptsReady }) {
    return (
        <>
            <Script src="/assets/js/jquery-3.2.0.min.js" />
            <Script src="/assets/js/seedrandom.js" />
            <Script src="/assets/js/webgl/hash.js" />
            <Script src="/assets/js/webgl/main.js" onReady={onScriptsReady} />
        </>
    );
}

export const PlanetScripts = memo(PlanetScriptsComponent);
