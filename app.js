var App = angular.module('FreeSpace', [
  'ngRoute'
]);

angular.module('FreeSpace').controller('MainController', function ($scope, $http, $window) {
  $scope.test = "hello";
});