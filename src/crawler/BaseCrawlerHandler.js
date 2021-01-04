const axios = require("axios");
const BaseRequest = require("./BaseDataCrawler");
const cheerio = require("cheerio");
import { getProxy } from '../proxy';
class DataCrawlerHandler {
  constructor({ url = '' }) {
    // if (url)
    this.url = url;
    this.isProxy = false;
  }
  setProxy(v) {
    this.isProxy = v;
  }
  setUrl(url) {
    this.url = url;
  }

  async startGetData() {
    console.log("url:", this.url);
    const ops = {

    }
    if (this.isProxy) {
      ops.httpsAgent = getProxy();
    }
    const request = BaseRequest.createRequestUrl(this.url, ops);
    // console.log('request:', request);
    this.dataResult = await request.get();
    const { data } = this.dataResult;
    if (!this.$)
      this.$ = cheerio.load(data);
  }

  async getListObjElements(namesElement, callback) {
    const { data } = this.dataResult;
    // console.log("data:",data);
    const $ = cheerio.load(data);
    const d = await Promise.all($(namesElement)
      .map(async (i, item) => {
        // return await callback($, item);
        return await (!callback ? item : callback($, item))
      })
      .get());
    return await d;
  }

  async getObjByElement(name, callback) {
    const { data } = this.dataResult;
    // console.log("data:",data);
    if (!this.$)
      this.$ = cheerio.load(data);
    return callback(this.$)
  }

  async getObjElement(namesElement) {
    const { data } = this.dataResult;
    // console.log("data:",data);
    const $ = cheerio.load(data);
    return $(namesElement);
  }
}

module.exports = DataCrawlerHandler;
