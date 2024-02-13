const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const VISITS_FILE = 'visits.txt';

app.use(express.static('public'));

app.get('/visits', (req, res) => {
    let visits = 0;
    try {
        visits = parseInt(fs.readFileSync(VISITS_FILE, 'utf8'));
    } catch (err) {
        console.error(err);
    }

    visits++;
    fs.writeFileSync(VISITS_FILE, visits.toString());

    res.send(`${visits}`);
});

app.listen(PORT, () => {
  console.log(`L'application est disponible sur http://localhost:${PORT}`);
});
