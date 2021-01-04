
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

async function run() {
    // let zrx = '0x71f85b2e46976bd21302b64329868fd15eb0d127';
    // let data = await CoinGeckoClient.coins.fetchCoinContractMarketChart(zrx);
    // // let data = await CoinGeckoClient.coins.f(zrx);
    // // let data = await CoinGeckoClient.coins.fetchCoinContractInfo(zrx);
    // console.log(data);

    // 0x contract address (as a test)
    var zrx = '0x71f85b2e46976bd21302b64329868fd15eb0d127';
    // let data = await CoinGeckoClient.simple.fetchTokenPrice({
    //     contract_addresses: zrx,
    //     vs_currencies: 'usd',
    // });

    let data = await CoinGeckoClient.coins.fetchCoinContractMarketChartRange(zrx, 'ethereum', {
        from: 1608873297978,
        to: 1608874730000,
      });
    console.log(data);
}

run()