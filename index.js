const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk membaca format JSON
app.use(express.json());

// Endpoint POST untuk menerima data dari ESP32
app.post('/api/sensor', (req, res) => {
  const { suhu, kelembaban } = req.body;
  console.log(`[DATA MASUK] Suhu: ${suhu} °C | Kelembaban: ${kelembaban} %`);

  res.status(200).json({
    status: 'success',
    message: 'Data berhasil diterima'
  });
});

app.listen(port, () => {
  console.log(`API Sensor berjalan di http://localhost:${port}`);
});