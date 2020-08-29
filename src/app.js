const express = require('express');
const app = express();

const recordController = require('./controllers/recordController');

app.use(express.json());
app.use(express.text());

app.use(express.urlencoded({extended: false}));

// Main controller for the endpoint
app.use('/records', recordController);

app.use((req, res, next) => {
    res.status(404).json(
        {
            "code": 2,
            "msg": "End-point not found."
        }
    );
});

module.exports = app;
