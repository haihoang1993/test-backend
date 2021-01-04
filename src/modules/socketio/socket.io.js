import io from 'socket.io';
let SocketIO = null;
export function initSocketIO(sv) {
    // SocketIO = io(sv, {
    //     cors: {
    //         origin: "http://localhost:3100",
    //         methods: ["GET", "POST"],
    //         allowedHeaders: ["my-custom-header"],
    //         credentials: true
    //     }
    // });
    SocketIO = io(sv, {
        cors: {
            origin: '*',
        }
    });
    // io.set('origins', '*:*');
    // SocketIO.origins('*');

}

export function socketIO() {
    if (SocketIO) {
        return SocketIO
    }
    throw Error('socket io throw')
}