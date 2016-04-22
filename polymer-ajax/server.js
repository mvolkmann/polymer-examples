'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json()); // handle Content-Type 'application/json' requests
app.use(bodyParser.text()); // handle Content-Type 'text/plain' requests
app.use(express.static(__dirname));

const names = ['Mark', 'Tami', 'Amanda', 'Jeremy'];
let index = 0;
app.get('/name', (req, res) => {
  const prefix = req.query.prefix;
  const obj = {name: prefix + ' ' + names[index]};

  // Move index to the next name.
  index++;
  if (index === names.length) index = 0;

  res.send(obj);
  //res.status(500).send(obj);
});

const PORT = 8081;
app.listen(PORT, () => console.log('browse http://localhost:' + PORT));
