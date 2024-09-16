const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

// Rotas para Wallet
router.post('/', walletController.createWallet); // Criar Wallet
router.get('/:id', walletController.getWallet); // Obter Wallet por ID
router.put('/:id', walletController.updateWallet); // Atualizar Wallet
router.delete('/:id', walletController.deleteWallet); // Deletar Wallet

module.exports = router;