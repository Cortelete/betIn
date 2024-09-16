const mongoose = require('mongoose');

const MatchBetSchema = new mongoose.Schema({
bet: { type: mongoose.Schema.Types.ObjectId, ref: 'Bet', required: true },
match: { type: mongoose.Schema.Types.ObjectId, ref: 'Match', required: true },
odd: { type: Number, required: true },
competitor: { type: mongoose.Schema.Types.ObjectId, ref: 'Competitor', required: true }
});

module.exports = mongoose.model('MatchBet', MatchBetSchema);