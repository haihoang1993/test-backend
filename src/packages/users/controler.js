import service from './service';
import to from '../../utils/to'
import { Trace } from "../../helpers/Log";
import responseBuilder from "../../utils/response-builder";
import errorUtil from "../../utils/error";
import { sessionLocale, userLocale } from "../../locales";


async function getEld(req, res) {
    res.jsonp(responseBuilder.build(true, { value: 0 }, userLocale.getDataSuccess));
}

async function registerUser(req, res) {
    const reg = await service.registerUser(req);
    let [err, data] = reg
    if (err) {
        Trace(err);
        return res.status(errorUtil.parseStatusCode(err)).jsonp(
            responseBuilder.build(false, {}, errorUtil.parseError(err))
        )
    }
    res.jsonp(responseBuilder.build(true, data, sessionLocale.registerSuccess));
}

async function loginUser(req, res) {
    const login = await service.loginUser(req);
    let [err, data] = login
    if (err) {
        Trace(err);
        return res.status(errorUtil.parseStatusCode(err)).jsonp(
            responseBuilder.build(false, {}, errorUtil.parseError(err))
        )
    }
    res.jsonp(responseBuilder.build(true, data, sessionLocale.loginSuccess));
}

async function getOneUser(req, res) {
    const user = await service.getOneUser(req);
    let [err, data] = user
    if (err) {
        Trace(err);
        return res.status(errorUtil.parseStatusCode(err)).jsonp(
            responseBuilder.build(false, {}, errorUtil.parseError(err))
        )
    }
    res.jsonp(responseBuilder.build(true, data, userLocale.getDataSuccess));
}

async function updateOneUser(req, res) {
    const user = await service.updateOneUser(req);
    let [err, data] = user
    if (err) {
        Trace(err);
        return res.status(errorUtil.parseStatusCode(err)).jsonp(
            responseBuilder.build(false, {}, errorUtil.parseError(err))
        )
    }
    res.jsonp(responseBuilder.build(true, data, userLocale.updateUserSuccess));
}


export default {
    registerUser,
    loginUser,
    getOneUser,
    updateOneUser,
    getEld
}
