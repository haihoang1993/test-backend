const BaseCrawlerHandler = require("../../crawler/BaseCrawlerHandler");
const queryString = require('query-string');

async function getDetail(link) {
    try {
        const base = new BaseCrawlerHandler({ url: 'https://coinmarketcap.com/currencies/axion/', });
        base.setUrl(link);
        await base.startGetData();
        const price = (await base.getObjElement('.cmc-details-panel-price .cmc-details-panel-price__price')).text();
        const priceChange = (await base.getObjElement('.cmc-details-panel-price .cmc-details-panel-price__price-change')).text();
        // console.log('price:', da)
        let priceChaneTemp = priceChange.replace('(', '');
        priceChaneTemp = priceChaneTemp.replace(')', '');
        const data = {
            price: price.replace('$', ''),
            priceChange: priceChaneTemp,
        }
        console.log(data);
        return [null, data];
    } catch (error) {
        return [error, null];
    }
}

getDetail('https://coinmarketcap.com/currencies/axion/')

// const timeCurent = Math.floor(Date.now() / 1000);

// console.log('time:', queryString.stringify({ time: timeCurent, timea: timeCurent }))