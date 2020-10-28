var express = require('express');
var app = express();
const { exec } = require('child_process');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile('index2.html', { root: __dirname });
});

app.post('/exec', function (req, res) {
    var command = req.body.comm +' &'


exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
});
    res.send(command + ' executed Successfully!');
});

var server = app.listen(80, function () {
    console.log('Node server is running..');
});
