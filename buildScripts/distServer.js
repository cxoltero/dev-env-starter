import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 8080;
const app = express();
app.use(express.static('dist'));
app.use(compression);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
  if(err) {
    console.log(err); // eslint-disable-line no-console
  } else {
    open('http://localhost:' + port);
  }
});
