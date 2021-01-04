const Twit = require('twit')
const notifier = require('node-notifier');
// const franc = require('franc')

const apikey = 'jPPkcOUtZ7lU8fmsBneZTZ8Tj'
const apiSecretKey = 'yO1HpIVDagGt4feCxTyLWc3s1mfrRs8iGhMdlJz2ryzZ1nwvGj'
const accessToken = '1048596044559216640-GIjqfdgNomUQIVuP0JhFlNPjtAEML0'
const accessTokenSecret = 'IQtbT2tWL3uAmLsnemNmh5sD8WlapjzKowIUI1TvrCDJ5'

const T = new Twit({
    consumer_key: apikey,
    consumer_secret: apiSecretKey,
    access_token: accessToken,
    access_token_secret: accessTokenSecret,
});

const TWId = '1048596044559216640'; // string

// const stream = T.stream('statuses/filter', {
//     follow: TWId
// });

// console.log('Waiting for tweets, Id:  ' + TWId);

// stream.on('tweet', function (tweet) {
//     console.log(tweet);
// });

// const data = T.get('statuses/filter', {
//     follow: TWId
// }, function (err, data, res) {
//     console.log(data);
// })

//
//  get the list of user id's that follow @tolga_tezel
//
T.get('statuses/user_timeline', { screen_name: 'OziNetworkVN',count:1 }, function (err, data, response) {
    console.log(data)
})