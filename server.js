const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.get('/api/users', (req, res) => {
  res.json({ response: 'hello' });
});
const videos = [
  {
    id: '1',
    title: 'Skam',
    description: "Det' Skam Godt!",
    thumbnail:
      'https://www.visitoslo.com/PageFiles/467808/SKAM-season2-copyright-NRK-limited-use.png?t=ScaleToFill%7C725x360&ts=z%2FbK8pdvX%2BBZpURD0Y09%2FaXUkhw%3D&pr=1',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
];

app.get('/api/videos', (req, res) => {
  res.json(videos);
});

app.get('/api/videos/:id', (req, res) => {
  const video = videos.find(vid => vid.id === req.params.id);
  res.json(video);
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
