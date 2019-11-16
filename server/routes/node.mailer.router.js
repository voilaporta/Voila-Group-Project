const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

require('dotenv').config();

router.post('/', (req, res) => {

    const rooms = req.body.bedroom_count;
    const bath = req.body.bathroom_count;
    const sf = req.body.square_feet;
    const location = req.body.location;
    const notes = req.body.notes;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    
    let mailOptions = {
        from: 'voilatest4@gmail.com',
        to: 'ryanjmccartan@gmail.com',
        subject: 'User has added new criteria',
        text: `Bedroom count: ${rooms}
            Bathroom count: ${bath}
            Square feet: ${sf}
            Location: ${location}
            Notes: ${notes}`
    };
    
    transporter.sendMail(mailOptions, (error) => {
        if(error) {
            res.sendStatus(500);
            console.log('error with sending email', error)
        } else {
            console.log('email sent');
            res.send('email sent');
        }
    });
});

module.exports = router;