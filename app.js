var express = require('express');
var bodyParser = require('body-parser');
var cfenv = require("cfenv");
var path = require('path');
var cors = require('cors');

//Setup middleware.
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'www')));
//Setup Cloudant Service.
var appEnv = cfenv.getAppEnv();
cloudantService = appEnv.getService("MedKartDB");
var catalog = require('./routes/catalog');
//REST HTTP Methods
app.get('/items', catalog.list);
app.post('/items', catalog.create);


var host = (process.env.VCAP_APP_HOST || "localhost" );
var port = 8080;
// Start server
app.listen(port);