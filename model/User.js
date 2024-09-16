const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
email: { type: String, required: true, unique: true },
cpf: { type: String, required: true },
nickname: { type: String, required: true },
password: { type: String, required: true },
wallet: { type: mongoose.Schema.Types.ObjectId, ref: 'Wallet' },
acceptedTerms: { type: Boolean, default: false }
});

// Middleware para encriptar senha
UserSchema.pre('save', async function(next) {
if (!this.isModified('password')) return next();
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt);
next();
});

module.exports = mongoose.model('User', UserSchema);