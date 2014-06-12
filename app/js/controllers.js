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
  .controller('JamesCtrl', ['$scope', function($scope) {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    $scope.operand1 = getRandomInt(0, 100);
    $scope.operand2 = getRandomInt(0, 100);
    $scope.answerStatus = "unanswered";

    $scope.checkResult = function() {
      var correctAnswer = ($scope.operand1 + $scope.operand2 == $scope.result);
      $scope.answerStatus = correctAnswer ? "correct" : "incorrect";
    };
  }])
  .controller('KeithCtrl', ['$scope', function($scope) {
  }]);
