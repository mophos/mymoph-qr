const express = require('express');
const app = express();
bodyParser = require('body-parser');
var path = require('path');
const http = require('http');
const request = require('request');
const server = http.createServer(app);

var cors = require('cors')
app.use(cors())
app.set('view engine', 'ejs');
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/:clientId/:sessionId', (req, res) => {
  const clientId = req.params.clientId;
  const sessionId = req.params.sessionId;
  res.render('ios', {
    clientId,
    sessionId
  })
});

app.get('/q/:clientId/:sessionId', (req, res) => {
  const clientId = req.params.clientId;
  const sessionId = req.params.sessionId;
  res.render('ios-q', {
    clientId,
    sessionId
  })
});

// app.get('/:clientId/:sessionId', (req, res) => {
//   app.use(express.static(path.join(__dirname, 'dist')));
//   res.sendFile(path.join(__dirname, './dist/index.html'));
// });


server.listen(3004, () => {
  console.log('listening on *:3004');
});
