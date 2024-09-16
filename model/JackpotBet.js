const mongoose = require('mongoose');

const JackpotBetSchema = new mongoose.Schema({
bet: { type: mongoose.Schema.Types.ObjectId, ref: 'Bet', required: true },
numbers: [{ type: Number, required: true }]
});

module.exports = mongoose.model('JackpotBet', JackpotBetSchema);