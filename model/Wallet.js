const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const WalletSchema = new mongoose.Schema({
balance: { type: Number, default: 0 },
password: { type: String, required: true }
});

// Middleware para encriptar senha
WalletSchema.pre('save', async function(next) {
if (!this.isModified('password')) return next();
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt);
next();
});

module.exports = mongoose.model('Wallet', WalletSchema);