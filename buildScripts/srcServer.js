import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

const port = 8080;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if(err) {
    console.log(err); // eslint-disable-line no-console
  } else {
    open('http://localhost:' + port);
  }
});

app.get('/users', (req, res) => {

  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@email.com"},
    {"id": 2, "firstName": "Samuel", "lastName": "James", "email": "samuel@email.com"},
    {"id": 3, "firstName": "Hanna", "lastName": "Brown", "email": "hbrown@email.com"}
  ]);
});

app.delete('/users/:id', function (req, res) {
  res.send('DELETE request to homepage');
});
