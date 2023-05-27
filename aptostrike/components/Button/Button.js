import React, { useState, useEffect, useMemo } from "react";

const Button = ({ className, onClick, disabled, loading, label }) => {
    const [ dotCount, setDotCount ] = useState(1);

    useEffect(() => {
        const updateDotCount = () => {
            setDotCount((currentDotCount) => {
                if (currentDotCount === 3) {
                    return 1;
                } else {
                    return currentDotCount + 1;
                }
            });
        };

        let dotsUpdateInterval;

        if (loading) {
            dotsUpdateInterval = setInterval(updateDotCount, 500);
        };

        return () => clearInterval(dotsUpdateInterval);
    }, [ loading ]);

    const labelToDisplay = useMemo(() => {
        if (!loading) return label;

        return label + ".".repeat(dotCount);
    }, [loading, label, dotCount]);

    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {labelToDisplay}
        </button>
    );
};

export default Button;
