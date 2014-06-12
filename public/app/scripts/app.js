'use strict';

/**
 * @ngdoc overview
 * @name omphaloskepsis
 * @description
 * # omphaloskepsis
 *
 * Main module of the application.
 */
var omphaloskepsis = angular
  .module('omphaloskepsis', [
    'ngResource',
    'ngRoute',
    'google-maps',
    
    'navelControllers',
    'navelServices'
  ]);
  
  omphaloskepsis.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/civic.html',
        controller: 'CivicCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
  //spinner
  omphaloskepsis.config(function ($httpProvider) {
  $httpProvider.responseInterceptors.push('myHttpInterceptor');

  var spinnerFunction = function spinnerFunction(data, headersGetter) {
    $("#spinner").show();
    return data;
  };

  $httpProvider.defaults.transformRequest.push(spinnerFunction);
});


omphaloskepsis.factory('myHttpInterceptor', function ($q, $window) {
  return function (promise) {
    return promise.then(function (response) {
      $("#spinner").hide();
      return response;
    }, function (response) {
      $("#spinner").hide();
      return $q.reject(response);
    });
  };
});