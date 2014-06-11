'use strict';

var connect         = require('connect'),
    rest            = require('connect-rest'),
    routes          = require("./routes"),
    logger          = require("./common/log");

var root = __dirname + '/public';

// Configure the rest middleware
var options = {
    logger:{ file: 'rest.log', level: 'info' },
    context: '/api',
    discoverPath: 'discover',
    protoPath: 'proto'
    };


// Configure and launch the Connect server
var server = connect()
    .use(connect.favicon('public/app/favicon.ico')) // if you don't have this and you use a web browser, your request will execute twice
    .use(connect.static(root))
    .use(connect.directory(root))
    .use(connect.query())
    .use(connect.json())
    .use(connect.urlencoded())
    .use(rest.rester(options));
    
    routes.buildUpRestApi(rest); // if the routes are built before options are set, some of them don't work
    server.listen(process.env.PORT);



