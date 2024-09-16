const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rotas para User
router.post('/register', userController.registerUser); // Registro de novo usuário
router.post('/login', userController.loginUser); // Login de usuário
router.get('/:id', userController.getUser); // Obter usuário por ID
router.put('/:id', userController.updateUser); // Atualizar usuário
router.delete('/:id', userController.deleteUser); // Deletar usuário

module.exports = router;