const express = require('express');
const app = express()
var cors = require('cors')
const bodyParser = require('body-parser')
const apilist = require('./routes/apilist')

require('./database')

app.set('port', process.env.PORT || 8000);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// parse application/json
app.use(bodyParser.json())
app.use('/', apilist);

module.exports = app