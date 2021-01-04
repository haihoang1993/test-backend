const axios = require('axios');

function apiGet(url){
    return axios.get(url);
}

//Circulating Market Cap
export async function circulatingMarketCap() {
    try {
        const res = await axios.get('https://axionstats.info/stats/market-cap');
        const { data } = res;
        return [null, data];
    } catch (error) {
        return [error, null];
    }
}

export async function getEcoTotals() {
    try {
        const res = await axios.get('https://axionstats.info/eco/totals');
        const { data } = res;
        return [null, data];
    } catch (error) {
        return [error, null];
    }
}


//Circulating Supply
export async function circulatingSupply() {
    try {
        const res = await apiGet('https://axionstats.info/stats/total-supply')
        const { data } = res;
        return [null, data];
    } catch (error) {
        return [error, null];
    }
}

///https://axionstats.info/staking/totals
// Staking Stats
export async function stakingStats() {
    try {
        const res = await apiGet('https://axionstats.info/staking/totals')
        const { data } = res;
        return [null, data];
    } catch (error) {
        return [error, null];
    }
}


