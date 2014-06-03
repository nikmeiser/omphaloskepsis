'use strict';

var connect     = require('connect'),
    rest        = require('connect-rest'),
    routes      = require("./routes"),
    logger      = require("./common/log");

// Configure the connect-rest middleware
var options = {
    logger:{ file: 'test.log', level: 'info' }
    };

// Build the REST routes
routes.buildUpRestApi(rest);

// Configure and launch the Connect server
var server = connect()
    .use(connect.favicon('public/favicon.ico'))
    .use(connect.query())
    .use(connect.json())
    .use(connect.urlencoded())
    .use( rest.rester(options))
    .listen(process.env.PORT);



