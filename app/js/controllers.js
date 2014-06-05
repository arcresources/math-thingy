'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
        $scope.variable1 = 2;
        $scope.variable2 = 2;
        $scope.answer = $scope.variable1 + $scope.variable2;
        $scope.validateAnswer =function(){
            if(parseInt($scope.childAnswer) === $scope.answer){
                $scope.answerResult = "You're Correct!";
            }else{
                $scope.answerResult = "Sorry, try again.";
            }
        };

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
