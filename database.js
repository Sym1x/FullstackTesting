const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/bibliotheque';
// Connexion à MongoDB (local)
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.error('Erreur de connexion à MongoDB :', err));

module.exports = mongoose;
