const express = require('express')
const mongoose = require('mongoose')
const beerRouter = require('./routes/beerRouter')
const app = express()

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// middleware code between request and response

// Catch all route

app.use('/beers', beerRouter)

app.use('/',(req, res) => {
    res.send('Welcome to the Beer API!')
})

mongoose.connect('mongodb://localhost:27017/beers', { useNewUrlParser: true })
mongoose.connection.on('connected', () => {
    console.log('Connected to beers DB')
})
mongoose.connection.on('error', (err) => {
    console.log(err)
})


const port = process.env.PORT || 4444
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})