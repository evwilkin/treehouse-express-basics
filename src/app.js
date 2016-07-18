'use strict';

var express = require('express');
var app = express();

app.get("/", function(req, res) {
  res.send("Yep!");
});

app.listen(3000);