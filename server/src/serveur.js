const config = require("../config.json");
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const name = 'tchat.burane'

let messages

http.listen(config.port, () => {
    console.log(`listennig on ${config.port}`)
});

io.on('connection', (socket) => {
    console.log('utilisateur connecter')
    socket.emit('conn',{
        serverName: name
    } )

    socket.on('disconnect', () => {
        console.log('utilisateur deconnecter')
    })

    socket.on('message', msg => {
        console.log(msg)
        socket.broadcast.emit('message', {
            pseudo: `pseudo : ${msg.pseudo}`,
            content: `message : ${msg.content}`
        }) // renvoie le msg a tous sauf l'emmeteur
    })

    // for (let i = 0; i < 1000; i++) {
    //     setTimeout(() => {
    //         socket.emit('message', {
    //             pseudo: `SERVER`,
    //             content: `message : ${i}`
    //         })
    //     }, i * 1000)
    // }

});