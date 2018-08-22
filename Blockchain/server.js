var express = require('express');
var app = express();
var net = require('./Network/net');

var db = require('./Database/DataChain');

app.use(net.a);

app.listen(5000);