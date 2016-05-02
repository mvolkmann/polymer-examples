'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const app = express();
app.use(bodyParser.json()); // handle Content-Type 'application/json' requests
app.use(bodyParser.text()); // handle Content-Type 'text/plain' requests
app.use(express.static(__dirname));
app.use(cors());

const userMap = {
  amurdock: {
    password: 'am1'
  },
  dweir: {
    password: 'dw1'
  },
  mvolkmann: {
    locked: true,
    password: 'mv1'
  }
};

function getToken() {
  return 'some-token';
}

const GOOD_STATUS = 200;
const BAD_STATUS = 422;

app.post('/rest/login', (req, res) => {
  const {username, password} = req.body;
  const user = userMap[username];

  let payload, status;

  if (!user) {
    status = BAD_STATUS;
    payload = 'invalid user name or password';
  } else if (user.locked) {
    status = BAD_STATUS;
    payload = 'account is locked';
  } else if (user.password === password) {
    status = GOOD_STATUS;
    payload = getToken();
  } else {
    status = BAD_STATUS;
    payload = 'invalid user name or password';
  }

  res.status(status).send(payload);
});

app.post('/rest/logout', (req, res) => {
  const username = req.query.username;
  console.log('got logout of', username);
  res.send();
  //res.status(BAD_STATUS).send(); // for testing errors
});

app.listen(8081, () => console.log('ready'));
