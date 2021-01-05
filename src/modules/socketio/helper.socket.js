import { socketIO } from './socket.io';
import { TokenSevices } from '../blockchain';
import { startTwitter, getLastPost } from '../twitter';
var schedule = require('node-schedule');
var cronExpress = "*/2 * * * *";
var j = schedule.scheduleJob(cronExpress, function (fireDate) {
    console.log('running job!');
    console.log(fireDate)
    getDataToken();
});
export async function helperSocketIO() {
    const socket = socketIO();
    socket.on('connection', async (sockett) => {
        console.log('a user connected:', socket.id);
        getLastPost();
        // getDataToken();
        const [data, err] = await TokenSevices.getDataDB();
        const { priceCurent, price1h, price1days, price7days, circulatingMarketCap } = data;
        socket.emit('token', { priceCurent, price1h, price1days, price7days, circulatingMarketCap });
        socket.emit('page-price', data);
        // sockett.emit('token', data);
    });
    startTwitter((data) => {
        const { text, created_at: time, user: { profile_image_url, name } } = data;
        socket.emit('twitter', { text, time, impage: profile_image_url, name });
    })
}

async function getDataToken() {
    const socket = socketIO();
    const [err, data] = await TokenSevices.getData();
    const { priceCurent, price1h, price1days, price7days, circulatingMarketCap } = data;
    socket.emit('token', { priceCurent, price1h, price1days, price7days, circulatingMarketCap });
    socket.emit('page-price', data);
}

function randomString() {
    var greetings = [
        "hello"
        , "ciao"
        , "welcome"
        , "howdy"
        , "greetings"
        , "salut"
        , "hallo"
        , "hola"
        , "Gday"
        , "Hey"
    ];
    var greeting_id = Math.floor(Math.random() * greetings.length);
    return greetings[greeting_id];
}

export async function pushDataDunny() {
    console.log('push data')
    const socket = socketIO();
    let text = randomString();
    socket.emit('twitter', {
        text
    })
    socket.emit('discord', {
        countMembers: Math.floor(Math.random() * 101),
        usersOnline: Math.floor(Math.random() * 101)
    })
    // socket.emit('')
}
