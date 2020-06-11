const express = require('express')
const path = require('path')
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup an Express server
const app = express()
const port = process.env.PORT

// Create index.html and render the content to the screen
app.get('/index', (req, res) => {
    res.sendFile(publicDirectoryPath + '/index.html')    
})

// Server listen on port 3000
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)    
})
