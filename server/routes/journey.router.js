const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
    const userId = req.user.id;
    console.log(userId)
    const queryText = `SELECT "userStep".id, "order", "completed", "name", "description"
                        FROM "userStep"
                        JOIN "journeyStep"
                            ON "journeyStep".id = "userStep"."journeyStep_id"
                        WHERE "user_id" = $1
                        ORDER BY "order";`;
    pool.query(queryText, [userId])
    .then((result)=>{
        res.send(result.rows);
    }).catch((error)=>{
        console.log('error getting user journey data', error);
        res.sendStatus(500);
    })
});
//this route will be hit by an admin account. The axios request sent
// will have to include the client's id
router.get('/admin/:id', rejectUnauthenticated, (req, res) => {
    const userId = req.params.id;
    const queryText = `SELECT "userStep".id, "order", "completed", "name", "description"
                        FROM "userStep"
                        JOIN "journeyStep"
                            ON "journeyStep".id = "userStep"."journeyStep_id"
                        WHERE "user_id" = $1
                        ORDER BY "order";`;
    pool.query(queryText, [userId])
    .then((result)=>{
        res.send(result.rows);
    }).catch((error)=>{
        console.log('error getting client journey data', error);
        res.sendStatus(500);
    })
});

//route will be hit by admin account. The axios request sent will have to
// include the client's id
router.post('/:id', rejectUnauthenticated, (req, res) => {
    const userId = req.params.id;
    const queryText = `INSERT INTO "userStep"
	                    ("journeyStep_id", "user_id", "completed" )
                        VALUES 
                        (1, $1, true),
                        (2, $1, false),
                        (3, $1, false),
                        (4, $1, false),
                        (5, $1, false),
                        (6, $1, false),
                        (7, $1, false),
                        (8, $1, false),
                        (9, $1, false),
                        (10, $1, false),
                        (11, $1, false);`;
    pool.query(queryText, [userId])
    .then((result)=>{
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('error creating client journey', error);
        res.sendStatus(500);
    })
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
    //updates a user's journey step complete or not complete
    const userId = req.params.id;
    const completed = req.body.complete;
    const queryText = `UPDATE "userStep"
	                    SET "completed" = $2
                        WHERE id = $1;`;
    pool.query(queryText, [userId, completed])
    .then((result)=>{
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('error creating client journey', error);
        res.sendStatus(500);
    })
});




module.exports = router;