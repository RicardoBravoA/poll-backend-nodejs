const express = require('express')

const app = express()

var port = 3000

app.listen(port, () => {
    console.log('Server is running at http://localhost:3000')
})