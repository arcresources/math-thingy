angular.module('myApp.controllers')
    .controller('CraigCtrl', ['$scope', function($scope) {
        $scope.shouldShowCorrectAnswer = false;
        newQuestion($scope);
        $scope.newQuestion = function(){
            newQuestion();
            $scope.$apply();
        };
        $scope.validateAnswer =function(){
            if(parseInt($scope.childAnswer) === $scope.answer){
                $scope.answerResult = "You're Correct!";
                $scope.displayShowCorrectAnswerButton = false;
            } else {
                $scope.answerResult = "Sorry, try again.";
                $scope.displayShowCorrectAnswerButton = true;
            }
        };
        function newQuestion(){
            $scope.variable1 = Math.floor(Math.random() * 100);
            $scope.variable2 = Math.floor(Math.random() * 100);
            $scope.answer = $scope.variable1 + $scope.variable2;
            $scope.answerResult = "";
            $scope.childAnswer = "";
        };
        $scope.displayCorrectAnswer = function(){
            $scope.shouldShowCorrectAnswer = true;
        };
    }]);
