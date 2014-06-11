'use strict';

/**
 * @ngdoc function
 * @name omphaloskepsis.controller:MainCtrl
 * @description
 * # MainCtrl
 * Services for the omphaloskepsis app
 */

var navelServices = angular.module('navelServices', ['ngResource']);

  
  navelServices.factory('svcCivic', ['$resource',
  function($resource){
    return $resource('https://omphaloskepsis-c9-nikmeiser.c9.io/api/civic/:address', {}, {
      query: {method:'GET', params:{address:'@address'}, isArray:false, cache: true}
    });
  }]);