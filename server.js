const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.get('/api/users', (req, res) => {
  res.json({ response: 'hello' });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(port, err => {
  if (err) {
    console.log('Express cannot run 😢');
    return;
  }
  console.log(`Express running at http://localhost:${port}`);
});
