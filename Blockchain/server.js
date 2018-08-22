var express = require('express');
var app = express();
var net = require('./Network/net');

app.use(net.a);
app.use(net.b);

app.listen(5000);