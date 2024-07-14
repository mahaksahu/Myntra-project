// actual-backend/index.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5000;

app.use(cors());

app.get('/api/cards', (req, res) => {
  res.sendFile(path.join(__dirname, 'cardsData.json'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
