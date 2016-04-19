'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json()); // handle Content-Type 'application/json' requests
app.use(bodyParser.text()); // handle Content-Type 'text/plain' requests
// Static middleware is not needed when using webpack-dev-server (npm start).
app.use(express.static(__dirname));

const PORT = 8081;
app.listen(PORT, () => console.log('browse http://localhost:' + PORT));
