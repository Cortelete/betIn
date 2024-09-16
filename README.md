# betIn
Resumo: 
Sistema de apostas desenvolvido com Node.js, Express e MongoDB. Gerencia usuários, carteiras e tipos de apostas (esportiva, roleta, caça-níquel). Implementa regras de jogo, criptografia de senhas e operações CRUD. Código modular e assíncrono com tratamento de erros robusto. Usa Mongoose para modelagem de dados e JWT para autenticação.

### Sistema de Apostas com MongoDB e Express

Este projeto é um sistema completo de gestão de apostas, desenvolvido utilizando **Node.js**, **Express** e **MongoDB**. Ele inclui operações de CRUD para várias entidades relacionadas a apostas, como usuários, carteiras (wallets), apostas esportivas, roleta e caça-níquel. O sistema foi projetado para ser escalável, modular e de fácil manutenção, com código organizado em pastas para **models**, **controllers** e **routes**, garantindo uma separação clara de responsabilidades.

#### Funcionalidades principais:
- **Usuários**: Cadastro, autenticação e criptografia de senhas com **Bcrypt.js**, garantindo a segurança dos dados.
- **Carteiras**: Cada usuário possui uma carteira com saldo atualizado dinamicamente, permitindo realizar transações associadas às apostas.
- **Apostas**: Suporte a diferentes tipos de apostas, como esportivas, roleta e caça-níquel.
- **Roleta**: O usuário aposta em um número e o sistema gera aleatoriamente outro número entre 1 e 100. Se o número apostado coincidir com o sorteado, o usuário ganha.
- **Caça-Níquel**: Três números aleatórios são gerados entre 1 e 9. Se os três números forem iguais, o usuário vence.
- **Apostas Esportivas**: O usuário escolhe um evento esportivo e aposta no competidor vencedor. Se a aposta estiver correta após o término do evento, o usuário ganha.
- **Gestão de Partidas**: Gerenciamento de competidores e status de eventos esportivos.

Todas as operações do sistema são assíncronas e implementadas com tratamento de erros robusto usando `try/catch`. O sistema utiliza **MongoDB** como banco de dados, com o **Mongoose** para definição dos esquemas e relacionamento entre entidades.

### Tecnologias utilizadas:
- **Node.js**
- **Express**
- **MongoDB** com **Mongoose**
- **Bcrypt.js** para criptografia de dados sensíveis
- **JWT** para autenticação e segurança

**D42**
