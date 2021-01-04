const axios = require('axios');
const HttpsProxyAgent = require("https-proxy-agent");

const listProxyIP = [
    'http://XZZLxh28213:XZZLxh28213pass@38.135.233.13:4074',
    'http://XZZLxh28213:XZZLxh28213pass@84.201.29.106:9261',
    'http://XZZLxh28213:XZZLxh28213pass@84.201.29.72:6121',
    'http://XZZLxh28213:XZZLxh28213pass@45.58.59.205:6367',
    'http://XZZLxh28213:XZZLxh28213pass@181.214.128.172:7186',
]

function getProxy() {
    const ran = getRndInteger(0, listProxyIP.length - 1);
    const proxy = listProxyIP[ran];
    const httpsAgent = new HttpsProxyAgent(proxy);
    return httpsAgent;
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export {
    getProxy
}