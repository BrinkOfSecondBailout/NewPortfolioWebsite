const nodemailer = require('nodemailer');
require('dotenv').config();

exports.handler = async function (event, context) {
    try {
        const requestBody = JSON.parse(event.body);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: requestBody.email,
            to: process.env.EMAIL,
            subject: `Message from ${requestBody.email}:`,
            text: `Full Name: ${requestBody.name}.\nPhone Number: ${requestBody.phone}.\nEmail: ${requestBody.email}.\nCompany: ${requestBody.company}.\n${requestBody.message}`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'success' }),
        };
    } catch (error) {
        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'error' }),
        };
    }
}