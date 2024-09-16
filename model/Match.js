const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
competitors: {
a: {
ref: { type: mongoose.Schema.Types.ObjectId, ref: 'Competitor' },
status: { type: mongoose.Schema.Types.ObjectId, ref: 'BetStatus' }
},
b: {
ref: { type: mongoose.Schema.Types.ObjectId, ref: 'Competitor' },
status: { type: mongoose.Schema.Types.ObjectId, ref: 'BetStatus' }
}
},
start: { type: Date, required: true }
});

module.exports = mongoose.model('Match', MatchSchema);