const { request, response } = require('express')
const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
    //response.send('Hello World')
    response.render('index/index')

})

module.exports = router