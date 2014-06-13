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
  

