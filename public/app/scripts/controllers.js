'use strict';

/**
 * @ngdoc function
 * @name omphaloskepsis.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the omphaloskepsis app
 */
 
 var navelControllers = angular.module('navelControllers', []);
 
 
  navelControllers.controller('CivicCtrl', ['$scope', 'svcCivic',
  function($scope, svcCivic) {
      $scope.model = {};
      $scope.data = {};
      $scope.model.address = "104 Franklin St., New York NY 10013";

      $scope.getCivicDetails = function(){
          $scope.data = svcCivic.query({address:$scope.model.address});
    }
    
  }]);
  
  navelControllers.controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
