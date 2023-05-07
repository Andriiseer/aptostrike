export const IS_STAGING = process.env.NEXT_PUBLIC_IS_STAGING === "true";
export const STAGING_SERVERS = [ "AptoStrike-staging-FRA" ];

export const SHOULD_USE_DEV_SERVER = process.env.NEXT_PUBLIC_STAGE === "local";
export const DEV_SERVER = {
    data: {
        isFull: false,
        isGameRunning: false,
        name: "Local-dev-server",
        server_url: "localhost:8080"
    },
    statsServerUrl: "localhost:88",
};
