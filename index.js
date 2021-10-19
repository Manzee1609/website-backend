var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000
const { events } = require('./handlers/events')
const { teams } = require('./handlers/teams')

app.get('/events', events);
app.get('/teams', teams);

app.get('/', (req, res) => {
    res.send('Hello to the CSI Backend!')
  })
  
app.listen(PORT, function () {
    console.log(`CSI Backend app is listening on port: ${PORT}!`); });