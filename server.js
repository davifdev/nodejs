import { fastify } from 'fastify';

const app = fastify();

app.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

app.get('/videos', (req, res) => {
  res.send({
    videos: [
      { id: 1, title: 'Video 1' },
      { id: 2, title: 'Video 2' },
      { id: 3, title: 'Video 3' },
    ],
  });
});

app.post('/videos', (req, res) => {
  res.send({ video: 'created' });
});

app.put('/videos/:id', (req, res) => {
  res.send({ video: 'updated' });
});

app.delete('/videos/:id', (req, res) => {
  res.send({ video: 'deleted' });
});

app.listen({
  port: 3000,
});
