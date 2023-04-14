import { useState, useEffect } from "react";
import axios from "axios";

const PROGRESS_TIMER_LENGTH = 30;

const useGameProgressTimer = (blocksRemaining) => {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [gameDuration, setGameDuration] = useState(null); // in blocks
    const [blockDuration, setBlockDuration] = useState(null); // in seconds
    const [
        optimisticGameRemainingPercentage,
        setOptimisticGameRemainingPercentage
    ] = useState(null);

    // Setting optimistic game remaining percentage
    useEffect(() => {
        if (!isDataLoaded) return;

        let interval;

        // If zero blocks are left for play:
        // - clearing interval
        // - setting the game remaining percentage directly without setInterval
        if (blocksRemaining === 0) {
            clearInterval(interval);
            setOptimisticGameRemainingPercentage(0);
            return;
        };

        // Real game remaining percentage value, based on block updates data
        const realGameRemainingPercentage =
            (blocksRemaining / gameDuration) * 100;
        const percentagePerUpdate = 100 / PROGRESS_TIMER_LENGTH;
        const percentagePerBlock = Number.parseFloat(
            (100 / (PROGRESS_TIMER_LENGTH / gameDuration)).toFixed(2)
        );

        const gameDurationInSeconds = blockDuration * gameDuration;
        const intervalDelay =
            (gameDurationInSeconds / PROGRESS_TIMER_LENGTH) * 1000;

        const isInitialBlock = blocksRemaining === gameDuration;

        const handleOptimisticUpdates = () => {
            setOptimisticGameRemainingPercentage((prevOptimisticPercentage) => {
                // Difference between real and optimistic percentages
                const optimisticDiff = Number.parseFloat((realGameRemainingPercentage - prevOptimisticPercentage).toFixed(2));

                // Keeping the same percentage value, when all midpoint ...
                // .. updates per block were done 
                if (optimisticDiff >= percentagePerBlock) {
                    return prevOptimisticPercentage;
                };

                // Returning new optimistic percentage value
                return prevOptimisticPercentage - percentagePerUpdate;
            });
        };

        // Setting initial percentage value and initial interval when the game starts
        if (isInitialBlock) {
            setOptimisticGameRemainingPercentage(realGameRemainingPercentage);
            interval = setInterval(handleOptimisticUpdates, intervalDelay);
        }

        // Running on block updates
        if (!isInitialBlock) {
            setOptimisticGameRemainingPercentage(realGameRemainingPercentage);
            clearInterval(interval);
            interval = setInterval(handleOptimisticUpdates, intervalDelay);
        }

        return () => clearInterval(interval);
    }, [isDataLoaded, blocksRemaining]);

    // Fetching game duration for current room (in blocks)
    useEffect(() => {
        const serverName = localStorage.getItem("APTOSTRIKE_SERVER_NAME");
        const sanitizedServerName = serverName.replaceAll('"', "");

        const controller = new AbortController();

        const fetchGameDuration = () => {
            // Fetching game duration for current room (in blocks)
        };

        fetchGameDuration();

        return () => controller.abort();
    }, []);

    // Fetching average block duration (in seconds) in current cycle
    useEffect(() => {
        const controller = new AbortController();

        const fetchBlockDuration = () => {
            // Fetching average block duration (in seconds) in current cycle
        };

        fetchBlockDuration();

        return () => controller.abort();
    }, []);

    // Handling the setting of isDataLoaded state variable
    useEffect(() => {
        if (!gameDuration || !blockDuration || blocksRemaining == null || blocksRemaining > gameDuration) {
            setIsDataLoaded(false);
            return;
        };

        setIsDataLoaded(true);
    }, [gameDuration, blockDuration, blocksRemaining]);

    // If optimistically calculated game remaining percentage is not yet known
    // This is the main value on the basis of which the displayed ...
    // .. GameProgressTimer is calculated
    if (optimisticGameRemainingPercentage == null || !isDataLoaded) {
        return {
            isLoading: true,
            activeTimerPiecesCount: null,
            inactiveTimerPiecesCount: null,
        };
    };

    const activeTimerPiecesCount = Math.round(
        PROGRESS_TIMER_LENGTH * (optimisticGameRemainingPercentage / 100)
    );

    const inactiveTimerPiecesCount =
        PROGRESS_TIMER_LENGTH - activeTimerPiecesCount;

    return {
        isLoading: false,
        activeTimerPiecesCount,
        inactiveTimerPiecesCount
    };
};

export default useGameProgressTimer;
