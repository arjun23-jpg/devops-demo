const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('DevOps Pipeline Working 🚀 - Arjun Project');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});