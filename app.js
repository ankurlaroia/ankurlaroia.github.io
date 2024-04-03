const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the current directory
app.use(express.static(__dirname));

// POST endpoint to send email
app.post('/send-email', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Create a string containing name, email, and message
    const emailContent = `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`;

    // Create a Nodemailer transporter using Ethereal email service
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'virginia1@ethereal.email', // Your Ethereal email address
            pass: 'rF576Fua5gEtae1Yb8' // Your Ethereal email password
        }
    });

    // Set up email data
    const mailOptions = {
        from: email, // Sender's email address
        to: 'ankurlaroia1@gmail.com', // Receiver's email address
        subject: 'New message from portfolio website',
        text: emailContent // Use the created string as the email body
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Route handler for serving resume.html
app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, 'resume.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
