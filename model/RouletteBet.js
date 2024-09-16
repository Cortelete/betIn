const mongoose = require('mongoose');

const RouletteBetSchema = new mongoose.Schema({
bet: { type: mongoose.Schema.Types.ObjectId, ref: 'Bet', required: true },
betNumber: { type: Number, required: true },
drawnNumber: { type: Number, required: true }
});

module.exports = mongoose.model('RouletteBet', RouletteBetSchema);