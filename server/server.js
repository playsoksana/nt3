const express = require('express');
const morgan = require('morgan');
const got = require('got');


require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8081;


const {router} = require('../Weather/weatherRouter');


app.use(morgan('tiny'));
app.use('/api', router);

app.get('/', function (req, res) {
  res.json({a: 6})
//   res.send('text')
})

app.listen(PORT);