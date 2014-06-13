'use strict';

/**
 * @ngdoc function
 * @name omphaloskepsis.controller:MainCtrl
 * @description
 * # CivicCtrl
 * Controller of the omphaloskepsis app
 */
 
 var navelControllers = angular.module('navelControllers', []);
 
 
  navelControllers.controller('CivicCtrl', ['$scope', 'svcCivic', 'svcGeocode',
  function($scope, svcCivic, svcGeocode) {
      $scope.data = {};
      $scope.mapdata = {};
      $scope.mapdata.address = "104 Franklin St., New York NY 10013";
      $scope.mapdata.map = {
          center:{
              latitude:  40.71863,
              longitude: -74.005584
          },
          zoom: 14,
          markers:[{
            icon: '/app/images/blue_marker.png',
            coords: {
              latitude:  40.71863,
              longitude: -74.005584
            }
          }],
          polygon: {
              "type": "Polygon",
              "coordinates": 
            [ 
                [ 
                    [ -74.006432, 40.719082 ], 
                    [ -74.006134, 40.719445 ], 
                    [ -74.005174, 40.719005 ], 
                    [ -74.005323, 40.718274 ], 
                    [ -74.006593, 40.718862 ], 
                    [ -74.006432, 40.719082 ] 
                ] 
            ] 
          }
        
      };
      

      $scope.getCivicDetails = function(){
          // show spinner on button click
          $("#spinner").show(); 
          
          // fetch demographic/civic data
          $scope.data = svcCivic.query({address:$scope.mapdata.address}, function(){
              // hide spinner once data has returned
              $("#spinner").hide(); 
          });
          
          // fetch geoccodes for map
          svcGeocode.query({address:$scope.mapdata.address}, function(data){
              // update the mapdata model with the new lat/lng values 
              $scope.mapdata.map.center.latitude = data.results[0].geometry.location.lat;
              $scope.mapdata.map.center.longitude = data.results[0].geometry.location.lng;
              $scope.mapdata.map.markers[0].coords.latitude = data.results[0].geometry.location.lat;
              $scope.mapdata.map.markers[0].coords.longitude = data.results[0].geometry.location.lng;
          });
    };
    
  }]);
 
  // part of the yeoman example
  navelControllers.controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
