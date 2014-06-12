angular.module('myApp.controllers').controller('BenCtrl', ['$scope', '$http', function($scope, $http){
	$scope.GenerateRandomMathProblem = function(){
		var operandList = ['+','-','/','*'];
		var operand = operandList[Math.floor(Math.random() * operandList.length)]
		var number =  $scope.GenerateNumberBetweenMinAndMax();
		$scope.Question = number+" "+operand;
	};

	$scope.GenerateNumberBetweenMinAndMax = function(){
		return Math.floor(Math.random() * (this.Parameters.MaxNumber - this.Parameters.MinNumber + 1) + this.Parameters.MinNumber)
	}
}]);