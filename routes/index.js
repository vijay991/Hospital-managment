const express = require('express');
const router = express.Router();
const patientsRouter = require('./patients');
const psychiatristsRouter = require('./psychiatrists');

const api = express.Router()

api.use(patientsRouter)
api.use(psychiatristsRouter)

router.use('/api', api)
module.exports = router