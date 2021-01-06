import model from './model';

const IDS = 'tokeninfo';

export async function updateInfoToken(vaule) {
    const q = await model.findOne({ ids: IDS });
    // console.log('token db', q);
    if (q) {
        q.priceCurent = vaule.priceCurent ? vaule.priceCurent : q.priceCurent;
        q.price1h = vaule.price1h ? vaule.price1h : q.price1h;
        q.price1days = vaule.price1days ? vaule.price1days : q.price1days;
        q.price7days = vaule.price7days ? vaule.price7days : q.price7days;
        q.priceAll = vaule.priceAll ? vaule.priceAll : q.priceAll;
        q.price14days = vaule.price14days ? vaule.price14days : q.price14days;
        q.price1moth = vaule.price1moth ? vaule.price1moth : q.price1moth;
        q.priceYear = vaule.priceYear ? vaule.priceYear : q.priceYear;
        q.circulatingMarketCap = vaule.circulatingMarketCap ? vaule.circulatingMarketCap : q.circulatingMarketCap;
        q.ecoTotals = vaule.ecoTotals ? vaule.ecoTotals : q.ecoTotals;
        q.circulatingSupply = vaule.circulatingSupply ? vaule.circulatingSupply : q.circulatingSupply;
        q.stakingStats = vaule.stakingStats ? vaule.stakingStats : q.stakingStats;
        q.updated_at = new Date().getTime();
        await q.save();
    } else {
        model.create({ ...{ ids: IDS }, ...vaule })
    }
}

export async function getInfoToken() {
    const q = await model.findOne({ ids: IDS });
    return await q.toObject();
}