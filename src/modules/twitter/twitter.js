const Twit = require('twit');

const apikey = 'jPPkcOUtZ7lU8fmsBneZTZ8Tj'
const apiSecretKey = 'yO1HpIVDagGt4feCxTyLWc3s1mfrRs8iGhMdlJz2ryzZ1nwvGj'
const accessToken = '1048596044559216640-GIjqfdgNomUQIVuP0JhFlNPjtAEML0'
const accessTokenSecret = 'IQtbT2tWL3uAmLsnemNmh5sD8WlapjzKowIUI1TvrCDJ5'

const KeyConfig = {
    consumer_key: apikey,
    consumer_secret: apiSecretKey,
    access_token: accessToken,
    access_token_secret: accessTokenSecret,
}

class Twitter {

    constructor() {
        this.Twit = new Twit(KeyConfig);
    }

    setTWid(id) {
        this.TWId = id;
    }

    setListener(call) {
        this.callback = call;
    }

    start() {
        // console.log('start:', { id: this.TWId, callback:this.callback})
        if (this.callback) {
            const callback = this.callback;
            // const data = this.TWId.get()
            const stream = this.Twit.stream('statuses/filter', {
                follow: this.TWId
            });
            stream.on('tweet', function (tweet) {
                console.log(tweet);
                callback(tweet);
            });
        }
    }
    //https://twitter.com/axion_network
    getPostlast() {
        console.log('getPostlast')
        if (this.callback) {
            const callback = this.callback;
            this.Twit.get('statuses/user_timeline', { screen_name: 'axion_network', count: 1 }, function (err, data, response) {
                console.log('get last:',data);
                if (data.length > 0) {
                    callback(data[0]);
                }
            })
        }
    }
}

export {
    Twitter
};
