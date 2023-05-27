export const IS_STAGING = process.env.NEXT_PUBLIC_IS_STAGING === "true";
export const STAGING_SERVERS = [ "AptoStrike-staging-FRA" ];

export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";
export const DEVELOPMENT_SERVERS = [ "AptoStrike-test1-FRA", "AptoStrike-test2-FRA" ];

export const DEMO_PLANET = {
    tokenId: "demo",
    genHash: "ooKg2zuJ5913iAZBRKQaBgEDvjeYZjDPmKRgpwPM4ZHLkoSFK3ejN",
    name: "demo planet"
};

export const SHOULD_USE_LOCAL_DEV_SERVER = process.env.NEXT_PUBLIC_STAGE === "local";
export const LOCAL_DEV_SERVER = {
    data: {
        isFull: false,
        isGameRunning: false,
        name: "Local-dev-server",
        server_url: "localhost:8080"
    },
    statsServerUrl: "localhost:88",
};

// Google Analytics
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
