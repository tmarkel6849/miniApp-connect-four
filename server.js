const express = require('express');
const fs = require('fs');
const path = require('path');

const port = 3000;
const app = express();

app.listen(port, (err) => {
  if (err) {
    return console.error(err.messae);
  }
  console.log(`Express listening on port${port}`);
});

app.use(static, '/public');

app.get('/', (req, res) => {
  res.sendStatus(200);
})

app.post('/game', (req, res) => {
  res.sendStatus(200);
})
