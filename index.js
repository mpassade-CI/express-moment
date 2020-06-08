const express = require('express')
const app = express()
const moment = require('moment')

app.get('/', (req, res) => {
    res.send(moment().format('LLL'))
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})