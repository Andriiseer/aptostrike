import { Provider, Network } from "aptos";
import { useQuery } from "@tanstack/react-query";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

const getBalance = async (address) => {
    const provider = new Provider(Network.TESTNET);

    const coins = await provider.getAccountCoinsData(address);

    const aptCoin = coins.current_coin_balances.find((coin) => coin.coin_type === '0x1::aptos_coin::AptosCoin');

    if (!aptCoin) return 0;

    return aptCoin.amount / Math.pow(10, aptCoin.coin_info.decimals);
};

const useBalance = () => {
    const { account } = useWallet();

    const address = account?.address;

    return useQuery({
        queryKey: [ "balance", address ],
        queryFn: () => getBalance(address),
        // The query will not execute until the `address` is initialized
        enabled: !!address,
        // New data on key change will be swapped without the loading state
        keepPreviousData: true
    });
};

export default useBalance;
