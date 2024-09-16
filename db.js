/*

#### Explicação:
- Utilizamos `mongoose` para realizar a conexão com o MongoDB.
- As variáveis de ambiente (como a URI do MongoDB) são carregadas com `dotenv`.
- Caso a conexão falhe, o sistema encerra o processo.

#### Instalação necessária:
- npm install mongoose dotenv
*/

const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
try {
await mongoose.connect(process.env.MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
});
console.log('MongoDB connected');
} catch (error) {
console.error('Error connecting to MongoDB:', error.message);
process.exit(1);
}
};

module.exports = connectDB;