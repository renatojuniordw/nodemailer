const bodyParser = require("body-parser");
const express = require('express');
const app = express();

const environments = require('./src/environments/environments');
const sendEmail = require('./src/routes/sendEmail');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello Nodemailer!');
});

app.use('/email', sendEmail);

app.use((req, res, next) => {
    next();
});

app.listen(environments.port, () => {
    console.log(`Api rodando no http://localhost:${environments.port}/`);
});