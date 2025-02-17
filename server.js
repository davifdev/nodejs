import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const app = fastify();

const database = new DatabaseMemory();

app.get('/', () => {
  res.send({ hello: 'world' });
});

app.get('/videos', () => {
  const videos = database.list();

  return videos;
});

app.post('/videos', (req, res) => {
  const { title, description, duration } = req.body;

  database.create({
    title,
    description,
    duration,
  });

  return res.status(201).send();
});

app.put('/videos/:id', (req, res) => {
  const videoId = req.params.id;

  const { title, description, duration } = req.body;

  database.update(videoId, {
    title,
    description,
    duration,
  });

  return res.status(204).send();
});

app.delete('/videos/:id', (req, res) => {
  const videoId = req.params.id;

  database.delete(videoId);

  return res.status(204).send();
});

app.listen({
  port: 3000,
});
