'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', function($scope, flats, addres) {
   $scope.alladdres = addres.query();
   $scope.allflat = flats.query();
  })
  .controller('MyCtrl2', [function() {

  }]);
