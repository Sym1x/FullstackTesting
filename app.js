const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Livre = require('./models/Livre');
require('./database'); // Connect to MongoDB

const app = express();
const port = 3000;

// Parse JSON from the request body
app.use(bodyParser.json());

// Add a new book
app.post('/livres', async (req, res) => {
  try {
    const { titre, auteur, date_publication, genre, disponible } = req.body;

    const livre = new Livre({
      titre,
      auteur,
      date_publication,
      genre,
      disponible,
    });

    await livre.save();
    res.status(201).json({ message: 'Livre ajouté avec succès', livre });
  } catch (err) {
    res.status(500).json({
      message: "Impossible d'ajouter le livre",
      error: err.message,
    });
  }
});

// Get all books
app.get('/livres', async (req, res) => {
  try {
    const livres = await Livre.find();
    res.status(200).json(livres);
  } catch (err) {
    res.status(500).json({
      message: 'Impossible de récupérer les livres',
      error: err.message,
    });
  }
});

// Update a book by its ID
app.put('/livres/:id', async (req, res) => {
  try {
    const { titre, auteur, date_publication, genre, disponible } = req.body;

    const livre = await Livre.findByIdAndUpdate(
      req.params.id,
      { titre, auteur, date_publication, genre, disponible },
      { new: true }
    );

    if (!livre) {
      return res.status(404).json({ message: 'Livre non trouvé' });
    }

    res.status(200).json({ message: 'Livre mis à jour', livre });
  } catch (err) {
    res.status(500).json({
      message: 'Impossible de mettre à jour ce livre',
      error: err.message,
    });
  }
});

// Delete a book by its ID
app.delete('/livres/:id', async (req, res) => {
  try {
    const livre = await Livre.findByIdAndDelete(req.params.id);

    if (!livre) {
      return res.status(404).json({ message: 'Livre non trouvé' });
    }

    res.status(200).json({ message: 'Livre supprimé' });
  } catch (err) {
    res.status(500).json({
      message: 'Impossible de supprimer ce livre',
      error: err.message,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
