const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

let count = 0

// server (emit) -> client (receive) - countUpdated
// client (emit) -> server (receive) - increment

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    // emit an event to the socket
    socket.emit('countUpdated', count)

    // listen to the event
    socket.on('increment', () => {
        count++
        
        // emilt an event to a specific connection
        // socket.emit('countUpdated', count)
        
        // emit an event to all connected sockets
        io.emit('countUpdated', count)
    })
} )

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)    
})
