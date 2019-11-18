const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

require('dotenv').config();

router.post('/criteria', (req, res) => {

    const firstName = req.body.buyer_first_name;
    const lastName = req.body.buyer_last_name;
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
        to: 'voilatest4@gmail.com',
        subject: `${firstName} ${lastName} has added new criteria`,
        text: `
            Bedroom count: ${rooms}
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

router.post('/showing', (req, res) => {

    const firstName = req.body.buyer_first_name;
    const lastName = req.body.buyer_last_name;
    const address = req.body.address;
    const mlsNumber = req.body.mls_number;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    
    let mailOptions = {
        from: 'voilatest4@gmail.com',
        to: 'voilatest4@gmail.com',
        subject: `${firstName} ${lastName} has requested a showing`,
        text: `
            Address: ${address}
            MLS Number: ${mlsNumber}`
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

router.post('/offer', (req, res) => {

    const firstName = req.body.buyer_first_name;
    const lastName = req.body.buyer_last_name;
    const address = req.body.address;
    const price = req.body.price;
    const closingDate = req.body.closing_date;
    const earnestMoney = req.body.earnest_money;
    const downPayment = req.body.down_payment;
    const sellerClosingCosts = req.body.seller_closing_costs;


    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    
    let mailOptions = {
        from: 'voilatest4@gmail.com',
        to: 'voilatest4@gmail.com',
        subject: `${firstName} ${lastName} has made an offer`,
        text: `
            Name: ${firstName}
            Address: ${address}
            Price: ${price}
            Closing Date: ${closingDate}
            Earnest Money: ${earnestMoney}
            Down Payment: ${downPayment}
            Seller Closing Costs: ${sellerClosingCosts}`
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