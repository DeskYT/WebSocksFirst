const {testHandler, messageHandler} = require("./eventHandler");
module.exports = function myConnection(socket) {
    socket.on('test', testHandler);
    socket.on('message', messageHandler);
};