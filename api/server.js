'use-strict'

const mongoose = require('mongoose');
const express = require('express');
const http = require('http');
const { URL, PORT } = require('./utils/constants');
const { applyMiddleware } = require('./utils'); 
const middleware = require('./middleware');
const { router: userRouter } = require('./routes/users/userRoutes');
const { router: drugRouter } = require('./routes/drugs/drugRoutes');
const { router: interactionRouter } = require('./routes/interactions/interactionRoutes');

const router = express();

applyMiddleware(middleware, router);

router.use('/api/users', userRouter);
router.use('/api/drugs', drugRouter);
router.use('/api/interactions', interactionRouter);

const server = http.createServer(router);

mongoose.connect(URL, { useNewUrlParser: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch(err => console.log(err));