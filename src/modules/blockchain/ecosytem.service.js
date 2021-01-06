const axios = require('axios');

function apiGet(url) {
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
        const res = await apiGet('https://axionstats.info/eco/totals');
        const { data } = res;
        console.log('getEcoTotals:', data);
        const { combined_ecosystem: combined, staking_ecosystem: staking, liquid_ecosystem: liquid } = data;
        const combined_ecosystem = dataParse(combined);
        const staking_ecosystem = dataParse(staking);
        const liquid_ecosystem = dataParse(liquid);

        function dataParse(obj) {
            const { totals: { holders } } = obj;
            const arr = Object.keys(obj);
            // console.log('keys:', arr);
            const newArr = arr.forEach(e => {
                const value = obj[e];
                const { count } = value;
                const percentage = count / holders * 100;
                obj[e]['percentage'] = percentage;
            })
            return obj;
        }

        return [null, { combined_ecosystem, staking_ecosystem, liquid_ecosystem }];
        // return [null, data];
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


