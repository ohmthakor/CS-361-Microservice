// server.js
const express = require('express');
const app = express();
const port = 3000;

// Import the brawlers JSON file
const brawlers = require('./brawlers.json');

// GET /brawlers?type=Tank&rarity=Legendary&search=Shelly
app.get('/brawlers', (req, res) => {
  const { type, rarity, search } = req.query;
  let results = brawlers;

  // Filter by type (brawler "class")
  if (type) {
    results = results.filter(brawler => 
      brawler.class.toLowerCase() === type.toLowerCase()
    );
  }

  // Filter by rarity
  if (rarity) {
    results = results.filter(brawler =>
      brawler.rarity.toLowerCase() === rarity.toLowerCase()
    );
  }

  // Search by name (partial match)
  if (search) {
    results = results.filter(brawler =>
      brawler.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.json(results);
});

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});