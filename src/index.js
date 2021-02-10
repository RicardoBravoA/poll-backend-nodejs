const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')

const app = express()

var port = 3000

app.set('views', path.join(__dirname, 'views'))

// show views in api response
app.engine('.hbs', handlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))

app.set('view engine', '.hbs')

app.use(require('./routes/index.controller'))

app.listen(port, () => {
    console.log('Server is running at http://localhost:3000')
})