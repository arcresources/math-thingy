angular.module('myApp.controllers')
    .controller('CraigCtrl', ['$scope', function($scope) {
        newQuestion($scope);
        $scope.newQuestion = newQuestion($scope);
        $scope.validateAnswer =function(){
            if(parseInt($scope.childAnswer) === $scope.answer){
                $scope.answerResult = "You're Correct!";
            } else {
                $scope.answerResult = "Sorry, try again.";
            }
        };
        function newQuestion($scope){
            $scope.variable1 = Math.floor(Math.random() * 100);
            $scope.variable2 = Math.floor(Math.random() * 100);
            $scope.answer = $scope.variable1 + $scope.variable2;
        };
    }]);
