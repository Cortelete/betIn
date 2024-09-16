const Wallet = require('../models/Wallet');

// Criar uma nova Wallet
exports.createWallet = async (req, res) => {
try {
const { password } = req.body;

// Criptografar senha da Wallet
const hashedPassword = await bcrypt.hash(password, 10);

const newWallet = new Wallet({
balance: 0, // Inicialmente com saldo zero
password: hashedPassword
});

await newWallet.save();
res.status(201).json(newWallet);
} catch (error) {
res.status(500).json({ error: error.message });
}
};

// Obter uma Wallet por ID
exports.getWallet = async (req, res) => {
try {
const wallet = await Wallet.findById(req.params.id);
if (!wallet) return res.status(404).json({ msg: 'Wallet não encontrada' });
res.json(wallet);
} catch (error) {
res.status(500).json({ error: error.message });
}
};

// Atualizar uma Wallet
exports.updateWallet = async (req, res) => {
try {
const wallet = await Wallet.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!wallet) return res.status(404).json({ msg: 'Wallet não encontrada' });
res.json(wallet);
} catch (error) {
res.status(500).json({ error: error.message });
}
};

// Deletar uma Wallet
exports.deleteWallet = async (req, res) => {
try {
const wallet = await Wallet.findByIdAndDelete(req.params.id);
if (!wallet) return res.status(404).json({ msg: 'Wallet não encontrada' });
res.json({ msg: 'Wallet deletada com sucesso' });
} catch (error) {
res.status(500).json({ error: error.message });
}
};