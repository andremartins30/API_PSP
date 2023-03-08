const express = require('express');
const { showTransaction, createTransaction, getBalance } = require('../controllers/transactionController');
const router = express.Router();


router.get('/transactions', showTransaction);
router.post('/transactions', createTransaction);
// router.get('/balance', getBalance);


// Server
module.exports = router;