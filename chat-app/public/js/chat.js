const socket = io()

socket.on('message', (message) => {
    console.log(message)
})

// Submit a form to server
document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const message = e.target.elements.message.value
   
    socket.emit('sendMessage', message, (error) => {
        if(error){
            return console.log(error)
        }
        console.log('Message delivered')
    })
})

// Share location with other users
document.querySelector('#send-location').addEventListener('click', () => {
    if(!navigator){
        return alert('Geolocation is not supported by your browser.')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {          
            console.log('Location shared!')
        })
    })
})
