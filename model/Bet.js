const mongoose = require('mongoose');

const BetSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
paymentStatus: { type: mongoose.Schema.Types.ObjectId, ref: 'PaymentStatus', required: true },
status: { type: mongoose.Schema.Types.ObjectId, ref: 'BetStatus', required: true },
value: { type: Number, required: true },
date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bet', BetSchema);