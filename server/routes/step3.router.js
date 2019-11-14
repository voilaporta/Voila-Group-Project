const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');


router.get('/criteria/:id', rejectUnauthenticated, (req, res) => {
    //user/client's userStep_id must be passed through url when request is made
    const userStep = req.params.id;
    const queryText = `SELECT *
                        FROM "searchCriteria"
                        WHERE "userStep_id" = $1;`;
    pool.query(queryText, [userStep])
    .then((result)=>{
        res.send(result.rows);
    }).catch((error)=>{
        console.log('error getting user criteria data', error);
        res.sendStatus(500);
    })
});

router.get('/showing/:id', rejectUnauthenticated, (req, res) => {
    //user/client's userStep_id must be passed through url when request is made
    const userStep = req.params.id;
    const queryText = `SELECT *
                        FROM "house"
                        WHERE "userStep_id" = $1
                        ORDER BY "date_time_created" DESC;`;
    pool.query(queryText, [userStep])
    .then((result)=>{
        res.send(result.rows);
    }).catch((error)=>{
        console.log('error getting user showings requested data', error);
        res.sendStatus(500);
    })
});

router.get('/offer/:id', rejectUnauthenticated, (req, res) => {
    //user/client's userStep_id must be passed through url when request is made
    const userStep = req.params.id;
    const queryText = `SELECT *
                        FROM "offerMade"
                        WHERE "userStep_id" = $1
                        ORDER BY "date_time_created" DESC;`;
    pool.query(queryText, [userStep])
    .then((result)=>{
        res.send(result.rows);
    }).catch((error)=>{
        console.log('error getting user offer data', error);
        res.sendStatus(500);
    })
});


router.post('/criteria', rejectUnauthenticated, (req, res) => {
    const userStep = req.body.user_step_id;
    const rooms = req.body.bedroom_count;
    const bath = req.body.bathroom_count;
    const sf = req.body.square_feet;
    const location = req.body.location;
    const notes = req.body.notes;
    const queryText = `INSERT INTO "searchCriteria"
	                    ("userStep_id", "numRooms", "numBath", "numSF", "location", "notes" )
                    VALUES 
                        ($1, $2, $3, $4, $5, $6);`;
    pool.query(queryText, [userStep, rooms, bath, sf, location, notes])
    .then((result)=>{
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('error creating search criteria', error);
        res.sendStatus(500);
    })
});

router.post('/showing', rejectUnauthenticated, (req, res) => {
    const userStep = req.body.user_step_id;
    const address = req.body.address;
    const mls = req.body.mls_number;
    const queryText = `INSERT INTO "house"
	                    ("userStep_id", "address", "MLS_number")
                        VALUES
	                    ($1, $2, $3);`;
    pool.query(queryText, [userStep, address, mls])
    .then((result)=>{
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('error creating showing requested', error);
        res.sendStatus(500);
    })
});

router.post('/offer', rejectUnauthenticated, (req, res) => {
    const userStep = req.body.user_step_id;
    const name = req.body.name;
    const address = req.body.address;
    const price = req.body.price;
    const closing = req.body.closing_date;
    const earnestMoney = req.body.earnest_money;
    const downPayment = req.body.down_payment;
    const sellerPaidClosing = req.body.seller_closing_costs;
    const queryText = `INSERT INTO "offerMade"
                        ("userStep_id", "name", "address", "price", "closingDate", "earnestMoney", "downPayment", "sellerPaidClosingCosts" )
                        VALUES
                        ($1, $2, $3, $4, $5, $6, $7, $8);`;
    pool.query(queryText, [userStep, name, address, price, closing, earnestMoney, downPayment, sellerPaidClosing])
    .then((result)=>{
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('error creating offer', error);
        res.sendStatus(500);
    })
});

router.put('/criteria', rejectUnauthenticated, (req, res) => {
    const userStep = req.body.user_step_id;
    const rooms = req.body.rooms;
    const bath = req.body.bath;
    const sf = req.body.sf;
    const location = req.body.location;
    const notes = req.body.notes;
    const queryText = `UPDATE "searchCriteria"
	                    SET "numRooms" = $2, "numBath" = $3, "numSF" = $4, "location" = $5, "notes" = $6
                        WHERE "userStep_id" = $1;`;
    pool.query(queryText, [userStep, rooms, bath, sf, location, notes])
    .then((result)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('error updating search criteria', error);
        res.sendStatus(500);
    })
});

module.exports = router;