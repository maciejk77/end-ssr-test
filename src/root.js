import express from 'express';
import renderer from './helpers/renderer';

const app = express();
const content = renderer();

app.use(express.static('public'));

app.use('/', (req, res) => {
  res.send(content);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
