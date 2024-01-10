const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const axios = require('axios'); 

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
})

