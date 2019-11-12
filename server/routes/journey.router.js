const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const userId = req.user.id;
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

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;