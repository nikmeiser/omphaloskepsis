
var geocode    = require("./geocode").getInstance(),
    util = require('util');

/**
 * Construct REST API paths
 * @param (rest) binds REST paths to middleware 
 **/
 function buildUpRestApi(rest) {
     
     // Return gecodes for any address. If no address is provided, defaults to Temboo HQ
     rest.get('/geocode/?address', function(request, content, callback) {
         //console.log(util.inspect(request, false, null));
         geocode.getGeocodeByAddress(decodeURIComponent(request.query.address)).then(function(result) {
             return callback(null, JSON.parse(result.get_Response()));
         },
         function(err) {return callback(err.message);});
         });
     
     // Return legislative info for any address. If no address is provided, defaults to Temboo HQ
     rest.get('/civic/?address', function(request, content, callback) {
         //console.log(util.inspect(request, false, null));
         return geocode.getGeocodeByAddress(decodeURIComponent(request.query.address))
         .then(geocode.getCivicData)
         .then(function(result) {
             return callback(null, JSON.parse(result.get_Response()));
         },
         function(err){console.log;});
         });
     
     
 } //buildUpRestApi

exports.buildUpRestApi = buildUpRestApi;
