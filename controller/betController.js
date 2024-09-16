const Bet = require('../models/Bet');
const MatchBet = require('../models/MatchBet');
const RouletteBet = require('../models/RouletteBet');
const JackpotBet = require('../models/JackpotBet');

const generateRandomNumber = (min, max) => {
return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Roleta: Enviar um número e gerar um aleatório (1-100)
exports.rouletteBet = async (req, res) => {
try {
const { betNumber } = req.body;
const drawnNumber = generateRandomNumber(1, 100);

const result = betNumber === drawnNumber;
res.json({ success: result, betNumber, drawnNumber });
} catch (error) {
res.status(500).json({ message: 'Erro na aposta de roleta', error });
}
};

// Caça-Níquel: Gerar três números aleatórios (1-9)
exports.jackpotBet = async (req, res) => {
try {
const numbers = Array.from({ length: 3 }, () => generateRandomNumber(1, 9));
const success = numbers.every((num, _, arr) => num === arr[0]);

res.json({ success, numbers });
} catch (error) {
res.status(500).json({ message: 'Erro na aposta de caça-níquel', error });
}
};

// Aposta Esportiva: Verifica o vencedor
exports.matchBet = async (req, res) => {
try {
const { matchId, competitorId } = req.body;
// Lógica para verificar se o competidor venceu a partida
// (a lógica completa dependerá de como os resultados são atualizados)

res.json({ message: 'Verificação de aposta esportiva', success: true });
} catch (error) {
res.status(500).json({ message: 'Erro na aposta esportiva', error });
}
};