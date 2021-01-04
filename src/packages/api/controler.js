import { pushDataDunny } from '../../modules'
import responseBuilder from "../../utils/response-builder";
import * as TokenService from '../../modules/blockchain/token.service';
export function pushTest(req, res) {
    pushDataDunny();
    res.jsonp(responseBuilder.build(true, null, {
        code: 2000,
        message: 'Push data success!'
    }));
}

export async function getTokenDB(req,res) {
    const [data, err] = await TokenService.getDataDB();
    if (err) {
        res.status(4001).jsonp(responseBuilder.build(false, null, {
            code: 4001,
            message: 'error data'
        }))
        return;
    }
    res.jsonp(responseBuilder.build(true, data, {
        code: 2000,
        message: 'Push data success!'
    }));
}

export async function getToken(req,res) {
    const [data, err] = await TokenService.getInfoToken();
    if (err) {
        res.status(4001).jsonp(responseBuilder.build(false, null, {
            code: 4001,
            message: 'error data'
        }))
        return;
    }
    res.jsonp(responseBuilder.build(true, data, {
        code: 2000,
        message: 'Push data success!'
    }));
}

export async function getMakertCharToken(req,res) {
    // const [data, err] = await TokenService.getMarketChart();
    const [data, err] = await TokenService.getDataExchange();
    if (err) {
        res.status(4001).jsonp(responseBuilder.build(false, null, {
            code: 4001,
            message: 'error data'
        }))
        return;
    }
    res.jsonp(responseBuilder.build(true, data, {
        code: 2000,
        message: 'Push data success!'
    }));
}

export async function getListPriceHour(req,res) {
    // const [data, err] = await TokenService.getMarketChart();
    const [data, err] = await TokenService.priceHours()
    if (err) {
        res.status(4001).jsonp(responseBuilder.build(false, null, {
            code: 4001,
            message: 'error data'
        }))
        return;
    }
    res.jsonp(responseBuilder.build(true, data, {
        code: 2000,
        message: 'Push data success!'
    }));
}

export async function getData(req,res) {
    // const [data, err] = await TokenService.getMarketChart();
    const [ err,data] = await TokenService.getData();
    if (err) {
        res.status(4001).jsonp(responseBuilder.build(false, null, {
            code: 4001,
            message: 'error data'
        }))
        return;
    }
    res.jsonp(responseBuilder.build(true, data, {
        code: 2000,
        message: 'Push data success!'
    }));
}
