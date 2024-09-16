const express = require('express');
const mongoose = require('mongoose');
const betRoutes = require('./routes/betRoutes');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/bets', {
useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => {
console.log('MongoDB conectado');
}).catch((error) => {
console.log('Erro ao conectar MongoDB', error);
});

app.use('/bets', betRoutes);

app.listen(3000, () => {
console.log('Servidor rodando na porta 3000');
});