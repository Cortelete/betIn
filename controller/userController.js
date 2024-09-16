/*
#### Explicação:
- **Registro**: Cria um novo usuário, criptografando a senha com `bcryptjs`.
- **Login**: Verifica as credenciais e retorna um token JWT para autenticação.
- **Get, Update e Delete**: Operações básicas de CRUD para o usuário.

#### Instalações necessárias:
- npm install bcryptjs jsonwebtoken
*/

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registro de novo usuário
exports.registerUser = async (req, res) => {
try {
const { email, cpf, nickname, password, acceptedTerms } = req.body;

// Verificar se usuário já existe
let user = await User.findOne({ email });
if (user) return res.status(400).json({ msg: 'Usuário já existe' });

// Criptografar senha
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

// Criar novo usuário
user = new User({
email,
cpf,
nickname,
password: hashedPassword,
acceptedTerms
});

await user.save();
res.status(201).json({ msg: 'Usuário registrado com sucesso' });
} catch (error) {
res.status(500).json({ error: error.message });
}
};

// Login de usuário
exports.loginUser = async (req, res) => {
try {
const { email, password } = req.body;

// Verificar se o usuário existe
const user = await User.findOne({ email });
if (!user) return res.status(400).json({ msg: 'Usuário não encontrado' });

// Verificar senha
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) return res.status(400).json({ msg: 'Credenciais inválidas' });

// Gerar token JWT
const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
res.json({ token });
} catch (error) {
res.status(500).json({ error: error.message });
}
};

// Obter usuário por ID
exports.getUser = async (req, res) => {
try {
const user = await User.findById(req.params.id);
if (!user) return res.status(404).json({ msg: 'Usuário não encontrado' });
res.json(user);
} catch (error) {
res.status(500).json({ error: error.message });
}
};

// Atualizar usuário
exports.updateUser = async (req, res) => {
try {
const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!user) return res.status(404).json({ msg: 'Usuário não encontrado' });
res.json(user);
} catch (error) {
res.status(500).json({ error: error.message });
}
};

// Deletar usuário
exports.deleteUser = async (req, res) => {
try {
const user = await User.findByIdAndDelete(req.params.id);
if (!user) return res.status(404).json({ msg: 'Usuário não encontrado' });
res.json({ msg: 'Usuário deletado com sucesso' });
} catch (error) {
res.status(500).json({ error: error.message });
}
};