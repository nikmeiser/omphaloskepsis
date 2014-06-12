'use strict';

/**
 * @ngdoc function
 * @name omphaloskepsis.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the omphaloskepsis app
 */
 
 var navelControllers = angular.module('navelControllers', []);
 
 
  navelControllers.controller('CivicCtrl', ['$scope', 'svcCivic', 'svcGeocode',
  function($scope, svcCivic, svcGeocode) {
      $scope.model = {};
      $scope.data = {};
      $scope.mapdata = {};
      $scope.mapdata.address = "104 Franklin St., New York NY 10013";
      //$scope.mapdata.latitude = 40.71863;
      //$scope.mapdata.longitude = -74.005584;
      $scope.mapdata.map = {
          center:{
              latitude:  40.71863,
              longitude: -74.005584
          },
          zoom: 14,
          markers:[{
            icon: 'images/blue_marker.png',
            coords: {
              latitude:  40.71863,
              longitude: -74.005584
          }
        }]
      };
      

      $scope.getCivicDetails = function(){
          $scope.data = svcCivic.query({address:$scope.mapdata.address});
          svcGeocode.query({address:$scope.mapdata.address}, function(data){
              $scope.mapdata.map.center.latitude = data.results[0].geometry.location.lat;
              $scope.mapdata.map.center.longitude = data.results[0].geometry.location.lng;
              
              $scope.mapdata.map.markers[0].coords.latitude = data.results[0].geometry.location.lat;
              $scope.mapdata.map.markers[0].coords.longitude = data.results[0].geometry.location.lng;
          });
    };
    
  }]);
 
  
  navelControllers.controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
