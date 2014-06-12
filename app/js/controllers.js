'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('BenCtrl', ['$scope', function($scope) {
  }])
  .controller('CraigCtrl', ['$scope', function($scope) {
    $scope.variable1 = Math.floor(Math.random() * 100);
    $scope.variable2 = Math.floor(Math.random() * 100);
    $scope.answer = $scope.variable1 + $scope.variable2;
    $scope.validateAnswer =function(){
      if(parseInt($scope.childAnswer) === $scope.answer){
        $scope.answerResult = "You're Correct!";
      } else {
        $scope.answerResult = "Sorry, try again.";
      }
    };
  }])
  .controller('JasonCtrl', ['$scope', function($scope) {
  }])
  .controller('KeithCtrl', ['$scope', function($scope) {
  }]);
