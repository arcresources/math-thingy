'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {
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
  }]);
