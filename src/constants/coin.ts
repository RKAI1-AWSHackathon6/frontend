import { ICoin } from "@/redux/interface";

export const CURRENCY_LIST: ICoin[] = [
    {
        id: "bitcoin",
        symbol: "btc",
        name: "Bitcoin",
        image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        price: 10
    },
    {
        id:"ethereum",
        symbol:"eth",
        name:"Ethereum",
        image:"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        price:1859.19
    },
    {
        id:"tether",
        symbol:"usdt",
        name:"Tether",
        image:"https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
        price:0.999867
    }
];