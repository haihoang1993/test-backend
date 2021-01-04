import io from 'socket.io';

import { Twitter } from '../twitter';

const tw = new Twitter();

function connectIO(sever) {

    const socketIO = io(sever);
    tw.setTWid('1048596044559216640');

    tw.setListener(function (data) {
        console.log('change:', data);
        socketIO.emit('twitter',data);
    })

    socketIO.on('connection', (socket) => {
        console.log('a user connected:', socket.id);
    });
    tw.start();
}

module.exports = {
    connectIO
}