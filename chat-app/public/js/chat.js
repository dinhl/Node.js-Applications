const socket = io()

// listen to the event
socket.on('countUpdated', (count) => {
    console.log('The count has been updated!', count)
})

document.querySelector('#increment').addEventListener('click', () => {
    console.log('Clicked!')

    // emit an event to the socket
    socket.emit('increment')
})