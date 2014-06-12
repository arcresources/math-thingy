'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ben', {templateUrl: 'partials/ben.html', controller: 'BenCtrl'});
  $routeProvider.when('/craig', {templateUrl: 'partials/craig.html', controller: 'CraigCtrl'});
  $routeProvider.when('/james', {templateUrl: 'partials/james.html', controller: 'JamesCtrl'});
  $routeProvider.when('/jason', {templateUrl: 'partials/jason.html', controller: 'JasonCtrl'});
  $routeProvider.when('/keith', {templateUrl: 'partials/keith.html', controller: 'KeithCtrl'});
  $routeProvider.otherwise({redirectTo: '/craig'});
}]);

angular.module('myApp.controllers', []);

