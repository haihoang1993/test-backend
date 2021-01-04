import model from './model';

const IDS = 'tokeninfo';

export async function updateInfoToken(vaule) {
    const q = await model.findOne({ ids: IDS });
    console.log('token db', q);
    if (q) {
        q.priceCurent = vaule.priceCurent ? vaule.priceCurent : q.priceCurent;
        q.price1h = vaule.price1h ? vaule.price1h : q.price1h;
        q.price1days = vaule.price1days ? vaule.price1days : q.price1days;
        q.price7days = vaule.price7days ? vaule.price7days : q.price7days;
        q.marketCap = vaule.marketCap ? vaule.marketCap : q.marketCap;
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