const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Définition du dossier contenant les ressources statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`L'application est disponible sur http://localhost:${port}`);
});
