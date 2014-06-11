var tsession        = require("temboo/core/temboosession"),
    TembooGoogle    = require("temboo/Library/Google/Geocoding"),
    TembooLabs      = require("temboo/Library/Labs/GoodCitizen"),
    q               = require('q');


// var session = new tsession.TembooSession("ACCOUNT_NAME", "APP_NAME", "APP_KEY");
var session = new tsession.TembooSession("nikmeiser", "myFirstApp", "8532f0f8eaaf4e829e7a1c9b4f786cbd")
var geocodeByAddressChoreo = new TembooGoogle.GeocodeByAddress(session);
var geocodeByAddressInputs = geocodeByAddressChoreo.newInputSet();
var civicChoreo = new TembooLabs.Civic(session);
var civicInputs = civicChoreo.newInputSet();
var defaultAddrString = "104 Franklin St., New York NY 10013";


var instance;
var Requestor = function(){};

/**
 * Calls Temboo API to return co-ordinates based on address
 * @param {addrString} Optional. The address to fetch the geocode for
 * Defaults to Temboo HQ address if no address is provided
 **/
Requestor.prototype.getGeocodeByAddress = function (addrString) {
    var deferred = q.defer();
    
    var addr = addrString;
    if( addrString === "undefined" || typeof addrString === "undefined"){
        addr = defaultAddrString;
    }
    
    // Set inputs
    geocodeByAddressInputs.set_Address(addr);
    geocodeByAddressInputs.set_ResponseFormat("json");
    
    // Run the choreo, specifying success and error callback handlers
    geocodeByAddressChoreo.execute(geocodeByAddressInputs, deferred.resolve, deferred.reject);
    
    return deferred.promise;
} //getGeocodeByAddress


/**
 * Calls Temboo API to return civic data based on geocodes
 * @param {results} The result object from the geocode call
 * Defaults to Temboo HQ address if no address is provided
 **/
Requestor.prototype.getCivicData = function (result) {
    var deferred = q.defer();

    // Set inputs
    civicInputs.set_Latitude(result.get_Latitude());
    civicInputs.set_Longitude(result.get_Longitude());
    civicInputs.set_APICredentials(JSON.stringify({"SunlightLabs":{"APIKey": "4b9e4206a2804fe7ad7f33dfad4735c7"}}));
    
    civicChoreo.execute(civicInputs, deferred.resolve, deferred.reject);
    
    return deferred.promise;
} //getCivicData



/**
 * Singleton
 * @type {{getInstance: Function}}
 */
module.exports = {
    getInstance: function() {
        return instance || (instance = new Requestor());
    }
};