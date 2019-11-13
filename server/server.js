
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const journeyRouter = require('./routes/journey.router');
const step3Router = require('./routes/step3.router');
const step4Router = require('./routes/step4.router');
const vendorRouter = require('./routes/vendors.router');
const clientRouter = require('./routes/client.router');
const adminRouter = require('./routes/administrator.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/journey', journeyRouter);
app.use('/api/step3', step3Router);
app.use('/api/step4', step4Router);
app.use('/api/vendor', vendorRouter);
app.use('/api/client', clientRouter);
app.use('/api/administrators', adminRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
