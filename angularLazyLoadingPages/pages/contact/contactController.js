var lazyLoadingPagesApp = angular.module('lazyLoadingPagesApp',[]);

lazyLoadingPagesApp.controller('contactController', ['$scope','httpCalls', function($scope, httpCalls) {
  $scope.contactMessage = 'Contact partial page';
  $scope.users = httpCalls.getAllUsers();

  $scope.changeFirstUsersFirstName = function() {
    $scope.users[0].firstName = 'Jill'
  };
}]);
