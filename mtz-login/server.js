'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const app = express();
app.use(bodyParser.json()); // for Content-Type 'application/json'
app.use(bodyParser.text()); // for Content-Type 'text/plain'
// for Content-Type 'application/x-www-form-urlencoded'
app.use(bodyParser.urlencoded({extended: true}));
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
const UNAUTHORIZED = 401;

app.post('/rest/login', (req, res) => {
  const {username, password} = req.body;
  const user = userMap[username];

  let payload, status;

  if (!user) {
    status = UNAUTHORIZED;
    payload = 'invalid user name or password';
  } else if (user.locked) {
    status = BAD_STATUS;
    payload = {
      locked: true
    };
  } else if (user.password === password) {
    status = GOOD_STATUS;
    payload = {
      attributes: {
        authToken: getToken()
      },
      events: [],
      impersonated: false,
      locked: false,
      pax: {
        paxId: 1
      },
      roles: [],
      userName: 'TID:000000'
    };
  } else {
    status = UNAUTHORIZED;
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
