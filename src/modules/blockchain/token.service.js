import Api from './api.service';
import * as EcoService from './ecosytem.service';
import * as DBService from './service';
const BaseCrawlerHandler = require("../../crawler/BaseCrawlerHandler");
const queryString = require('query-string');

export async function getDataDB() {
    try {
        const res = await DBService.getInfoToken();
        const { circulatingSupply, priceCurent: { priceBTC }, stakingStats: { total_axn_staked }, ecoTotals: { combined_ecosystem: { totals: { held_axn } } } } = res;
        const percentageStaked = total_axn_staked / held_axn * 100;
        res.stakingStats.percentageStaked = percentageStaked;
        res.totalSupply = circulatingSupply;
        res.axionBicoinRatio = 1 / priceBTC;
        return [res, null]
    } catch (error) {
        return [null, error]
    }
}

export async function getData() {
    const [error, priceCurent] = await getPriceTokenCoinCap();
    const [price1h, err2] = await priceHours()
    const [price1days, err3] = await getDataExchange();
    const [price7days, err4] = await getDataExchange(7);
    const [price14days, err11] = await getDataExchange(14);
    const [priceAll, err12] = await getDataExchange('max');
    const [price1moth, err8] = await getDataExchange(30);
    const [priceYear, err9] = await getDataExchange(365);
    const [err, circulatingMarketCap] = await EcoService.circulatingMarketCap();
    const [err5, ecoTotals] = await EcoService.getEcoTotals();
    // console.log('eco total:', ecoTotals);
    const [err6, circulatingSupply] = await EcoService.circulatingSupply();
    const [err7, stakingStats] = await EcoService.stakingStats();
    let result = {
        priceCurent,
        price1h,
        price1days,
        price14days,
        priceAll,
        price7days,
        price1moth,
        priceYear,
    }
    if (circulatingMarketCap != null || !err) {
        result = {
            ...result,
            circulatingMarketCap
        }
    }
    if (ecoTotals != null || !err5) {
        result = {
            ...result,
            ecoTotals
        }
    }
    if (circulatingSupply != null || !err6) {
        result = {
            ...result,
            ...{ circulatingSupply: circulatingSupply.total_supply }
        }
    }
    if (stakingStats != null || !err7) {
        result = {
            ...result,
            stakingStats
        }
    }
    await DBService.updateInfoToken(result);
    const [dbData, e] = await getDataDB();
    return [null, dbData];
}

export async function getPriceTokenCoinCap() {
    console.log('getPriceTokenCoinCap')
    try {
        const base = new BaseCrawlerHandler({ url: 'https://coinmarketcap.com/currencies/axion/', });
        // base.setUrl(link);
        base.setProxy(true);
        await base.startGetData();
        const price = (await base.getObjElement('.priceTitle___1cXUG .priceValue___11gHJ')).text();
        const priceChange = (await base.getObjElement('.priceTitle___1cXUG .qe1dn9-0')).text();
        const exChangeClss = (await base.getObjElement('.priceTitle___1cXUG .qe1dn9-0 span')).attr('class');
        const ls = (await base.getListObjElements('.kXPxnI .bspaAT', function ($, item) {
            const temp = $(item).text();
            return temp;
        }));
        const find = ls.findIndex(e => {
            return e.includes('ETH')
        })
        let priceEthSt = ls[find];
        priceEthSt = priceEthSt.replace('ETH', '');
        priceEthSt = priceEthSt.replace(' ', '');
        let priceChaneTemp = priceChange.replace('(', '');
        const change = exChangeClss.includes('up') ? '+' : '-';
        priceChaneTemp = change + priceChaneTemp;


        const findBtc = ls.findIndex(e => {
            return e.includes('BTC')
        })
        let priceBtcSt = ls[findBtc];
        priceBtcSt = priceBtcSt.replace('BTC', '');
        priceBtcSt = priceBtcSt.replace(' ', '');
        let priceChaneTempBTC = priceBtcSt.replace('(', '');
        priceChaneTempBTC = priceBtcSt.replace('<', '');
        // priceChaneTempBTC = change + priceChaneTempBTC;

        const data = {
            price: parseFloat(price.replace('$', '')),
            exchange: parseFloat(priceChaneTemp),
            priceEth: parseFloat(priceEthSt),
            priceBTC: parseFloat(priceChaneTempBTC)
        }
        // console.log(data);
        return [null, data];
    } catch (error) {
        return [error, null];
    }
}

export async function getInfoToken() {
    try {
        const data = await Api.get('coins/ethereum/contract/0x71f85b2e46976bd21302b64329868fd15eb0d127')
        return [data, null]
    } catch (error) {
        return [null, error];
    }
}

//https://api.coingecko.com/api/v3/coins/ethereum/contract/0x71f85b2e46976bd21302b64329868fd15eb0d127/market_chart/?vs_currency=usd&days=1
export async function getMarketChart() {
    try {
        const data = await Api.get('coins/ethereum/contract/0x71f85b2e46976bd21302b64329868fd15eb0d127/market_chart/?vs_currency=usd&days=1', null, true)
        return [data, null]
    } catch (error) {
        return [null, error];
    }
}

export async function getDataExchange(days = 1) {
    try {
        const data = await Api.get('coins/ethereum/contract/0x71f85b2e46976bd21302b64329868fd15eb0d127/market_chart/?vs_currency=usd&days=' + days)
        const { prices, total_volumes } = data;
        const exchange = handleExchangePriceFromList(prices);
        const result = {
            exchange: exchange,
        }

        if (days == 1) {
            const temp = total_volumes[total_volumes.length - 1];
            const vol24 = temp[1];
            result.vol24 = vol24;
        }
        // if (days == 7) {
        result.listPrices = prices;
        // }

        return [result, null]
    } catch (error) {
        console.log('err:', error)
        return [null, error];
    }
}

export async function priceHours(hour = 1) {
    // https://api.coingecko.com/api/v3/coins/ethereum/contract/0x71f85b2e46976bd21302b64329868fd15eb0d127/market_chart/range?
    const to = Math.floor(Date.now() / 1000);
    const from = to - 60 * 60;
    const vs_currency = 'usd';
    try {
        const data = await Api.get('coins/ethereum/contract/0x71f85b2e46976bd21302b64329868fd15eb0d127/market_chart/range', {
            vs_currency,
            to,
            from,
        }, true)
        const { prices } = data;
        const exchange = handleExchangePriceFromList(prices)
        return [{ ...{ exchange, listPrices: prices } }, null]
    } catch (error) {
        return [null, error];
    }
}

function stringHandle(st = '') {
    if (st.length > 10) {
        const rs = parseFloat(st.substring(0, 10));
        console.log(rs);
        return rs;
    }
    return parseFloat(st);
}

function ratePrice(end, start) {
    const exchange = stringHandle(end + '') - stringHandle(start + '');
    // console.log('exchange:', exchange);
    const rate = exchange / start * 100;
    return rate;
}

function handleExchangePriceFromList(list) {
    const prices = list;
    const fristObj = prices[0];
    const lastObj = prices[prices.length - 1];
    const fristPrice = fristObj[1];
    const lastPrice = lastObj[1];
    const exchange = ratePrice(lastPrice, fristPrice);
    return exchange;
}

