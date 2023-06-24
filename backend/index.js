const { default: mongoose } = require("mongoose");
const mongoURL = 'mongodb://localhost:27017';
const express = require('express')
const app = express()
const port = 3000

mongoose
    .connect(mongoURL)
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => { console.log("err") });


app.get('/', (req, res) => res.send('Hello World!'))

















app.listen(port, () => console.log(`Example app listening on port ${port}!`))


