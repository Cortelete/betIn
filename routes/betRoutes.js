const express = require('express');
const { rouletteBet, jackpotBet, matchBet } = require('../controllers/betController');

const router = express.Router();

router.post('/roulette', rouletteBet);
router.post('/jackpot', jackpotBet);
router.post('/match', matchBet);

module.exports = router;