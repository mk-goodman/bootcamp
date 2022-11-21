const express = require('express');
const app = express();

// const cors = require('cors')
// app.use(cors());

// *** new path to the results file just to tidy a bit. Add path module to help create path to static
const jokes = require('./data/jokes.json'); //include jokes data in json file
const path = require('path'); // Used for concatenation to create a path
// Point to static pages
app.use(express.static(path.join(__dirname, '/public/html')));  // Client requests files relative to here - i.e. no path needed
app.use(express.static(path.join(__dirname, '/public/img')));   // e.g. in index.html, <img src="http://localhost:3000/xx.jpg"> 
app.use(express.static(path.join(__dirname, '/public/css')));
app.use(express.static(path.join(__dirname, '/public/js')));

// Home GET now returns the index.html instead of just a message. Note array for multiple paths
app.get(['/', '/index.html'], (req, res) => {
  res.sendFile('./public/html/index.html', { root: __dirname }); // path is relative to the execution path __dirname
});

// *** 


// get returning a string or json. .json will convert the object using stringify
app.get("/time", (req, res) => {
  let today = new Date();
  let hours = today.getHours().toString();
  let minutes = today.getMinutes().toString();
  let seconds = today.getSeconds().toString();

  switch (req.query.format) {
    case 'string': res.send(`${hours}:${minutes}:${seconds}`); break;
    case 'json': res.json(
      {
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      });
      break;
    default: res.sendStatus(400); // bad request
  }
});

// get some data from an object file based on the query string: ?lName=
app.get("/result", (req, res) => {
  let score = [];
  let lName = req.query.lName;
  if (lName == undefined) return res.sendStatus(400); // bad request

  //score = results.filter(element => element.lName === lName);
  for (let i = 0; i < results.length; i++) {
    if (lName !== '' && results[i].lName.indexOf(lName) >= 0) {
      score.push(results[i]);
    }
  }

  if (score.length == 0) return res.json({}); // not found return blank
  else
    res.json(score)
});


// get some data from the jokes file based on the query string: ?type=
app.get("/jokes", (req, res) => {

  let type = req.query.type
  let count = 1
  let jokeResults = []
  let jokeReturns = []

  if (!req.query.count) count = 1
  else count = req.query.count
  
  if (!req.query || !req.query.type)
    res.sendStatus(400)

  if (req.query.type === "any") res.json(jokes)
  else

    jokeResults = jokes.filter(typeFilter => typeFilter.type === type) //get all jokes of one type

  for (let i=0;i<count;i++) {

    jokeReturns[i]=jokeResults[i]

  }

  res.json(jokeReturns)
});


// app.get('/jokes/:type/random', (req, res) => {
//   res.json(getJokeByType(req.params.type, 1));
// });


// get some data from an object file based on the student ID param
app.get("/result/student/:id", (req, res) => {
  let score = -1;
  let id = Number(req.params.id); // Use param instead of query string
  if (isNaN(id))
    return res.sendStatus(400); // bad request

  score = results.filter(element => element.id === id);
  if (score.length == 0) return res.sendStatus(404); // not found
  else
    res.send(score)
});

// Get all results
app.get("/results", (req, res) => {
  res.json(results);
});


// Get Jokes

app.get("/alljokes", (req, res) => {
  res.json(jokes);
})


// *****
// You can provide a catch-all to respond with your response rather 
// than node's standard response. However, it will find the page so
// return 200 so we need to override with 404
// Because these functions return an object, we can chain them
// get /* at end means everything. If valid, it would have already 
// been processed as this is at the end so if it makes it here then
// the route or page hasn't been found
app.get('/*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/public/html/404.html'));
})

// ****

app.listen(3000, () => console.log(`Listening on port 3000`));

