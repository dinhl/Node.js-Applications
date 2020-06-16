const socket = io()

// The elements to render the template
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationButton = document.querySelector('#send-location')
const $messages = document.querySelector('#messages')

// Select the templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML

socket.on('message', (message) => {
    console.log(message)

    // Render the template with the message data
    const html = Mustache.render(messageTemplate, {
        mustacheMessage: message.text,
        createAt: moment(message.createAt).format('h:mm a')
    })

    // Insert the template into DOM
    $messages.insertAdjacentHTML('beforeend', html)
})

// Render new template for location messages
socket.on('locationMessage', (message) => {
    
    const html = Mustache.render(locationMessageTemplate, {
        mustacheUrl: message.url,
        createAt: moment(message.createAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

// Submit a form to server
$messageForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // disable the form button once it has been submit
    $messageFormButton.setAttribute('disabled', 'disabled')
        
    const message = e.target.elements.message.value
   
    socket.emit('sendMessage', message, (error) => {
        // Enable the button 
        $messageFormButton.removeAttribute('disabled')
        
        // Clear the text from the input
        $messageFormInput.value = ''

        // Shift focus back to the input
        $messageFormInput.focus()

        if(error){
            return console.log(error)
        }
        console.log('Message delivered')
    })
})

// Share location with other users
$sendLocationButton.addEventListener('click', () => {
    if(!navigator){
        return alert('Geolocation is not supported by your browser.')
    }

    // Disable the send location button before getting the current position
    $sendLocationButton.setAttribute('disabled', 'disabled')

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {          
            // Enable the button in the acknowledgment callback
            $sendLocationButton.removeAttribute('disabled')

            console.log('Location shared!')
        })
    })
})
