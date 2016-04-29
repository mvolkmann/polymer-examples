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

app.post('/login', (req, res) => {
  const {userName, password} = req.body;
  const user = userMap[userName];

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

app.post('/logout', (req, res) => {
  res.send();
});

app.listen(8081, () => console.log('ready'));
