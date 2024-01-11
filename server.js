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

app.post('/contact', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    
    const mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL,
        subject: `Message from ${req.body.email}:`,
        text: `Hello, my name is ${req.body.name} from ${req.body.company}. My phone number is ${req.body.phone}. ${req.body.message}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    })
});


// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })