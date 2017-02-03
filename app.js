//dependencies
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//routes

const app = express();

app.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port 3000!');
})
