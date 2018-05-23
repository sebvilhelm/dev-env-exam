const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

const videos = [
  {
    id: '1',
    title: 'Skam',
    description: "Det' Skam Godt!",
    thumbnail:
      'https://www.visitoslo.com/PageFiles/467808/SKAM-season2-copyright-NRK-limited-use.png?t=ScaleToFill%7C725x360&ts=z%2FbK8pdvX%2BBZpURD0Y09%2FaXUkhw%3D&pr=1',
    video:
      'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent',
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
