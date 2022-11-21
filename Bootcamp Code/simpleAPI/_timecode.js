<script>

const express = require('express');

const app = express();

const cors = require('cors')
app.use(cors());

app.get('/', (req, res) => res.send('We have an API!'));

app.get('/time', (req, res) => {
    let today = new Date();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    res.send(time);
  });


  app.listen(3000, () => console.log('Listening on port 3000'));

  app.get("/timeswitch", (req, res) => {
    let today = new Date();
    let hours = today.getHours().toString();
    let minutes = today.getMinutes().toString();
    let seconds = today.getSeconds().toString();
    switch (req.query.format) {
    case 'string': res.send(`${hours}:${minutes}:${seconds}`); break;
    case 'json': res.send(
    {
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
    }); break; }
  });

  </script>