const mongoose = require('mongoose');

const BetStatusSchema = new mongoose.Schema({
name: { type: String, required: true }
});

module.exports = mongoose.model('BetStatus', BetStatusSchema);