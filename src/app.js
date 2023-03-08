const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const router = require('./routes/transaction.routes')
const database = require('./config/db.config')


mongoose.connect(database.local.localDatabaseUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('Mongoose conectado...'))
    .catch((err => console.log(err)))

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use(router)


module.exports = app;