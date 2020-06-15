const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')
const Filter = require('bad-words')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    // emit an event to the socket
    socket.emit('message', 'Welcome!')
    
    // emit an event to everybody except itself
    socket.broadcast.emit('message', 'A new user has joined!')

    // listen to the event
    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()

        // server filter the bad words
        if(filter.isProfane(message)){
            return callback('Profanity is not allowed!')
        }

        io.emit('message', message)
        callback()
    })

    socket.on('sendLocation', (coords, callback) => {
        io.emit('message', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left')
    })
} )

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)    
})
