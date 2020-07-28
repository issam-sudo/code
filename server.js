const express = require('express');
const app = express()
const port = 8000

const cors = require('cors')
const bodyParser = require('body-parser')
const routge = require('./routes/route')
require('./sgbd')
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', routge);

app.listen(port, () => {
    console.log(`Server started on port`);
});