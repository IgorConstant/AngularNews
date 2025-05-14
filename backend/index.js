// index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const newsService = require('./services/newsService');

dotenv.config();

const app = express();
app.use(cors());

app.get('/api/v1/news', async (req, res) => {
  try {
    const news = await newsService.getIGNNews(); 
    res.json(news);
  } catch (err) {
    console.error('Erro ao buscar notícias:', err.message);
    res.status(500).json({ error: 'Erro ao buscar notícias' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`API rodando em http://localhost:${process.env.PORT}`);
});
