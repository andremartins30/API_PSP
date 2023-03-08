const express = require('express');
const { showTransaction, createTransaction } = require('../controllers/transactionController');
const router = express.Router();


router.get('/transactions', showTransaction);
router.post('/transactions', createTransaction);


// Server
module.exports = router;