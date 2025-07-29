require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const PORT = process.env.PORT || 5000;

// Configuración de PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/api', (req, res) => {
  res.json({ message: 'Backend funcionando!' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});