var lazyLoadingPagesApp = angular.module('lazyLoadingPagesApp',[]);

lazyLoadingPagesApp.controller('homeController', ['$scope', function($scope) {
  $scope.message2 = 'Home partial page';
}]);
