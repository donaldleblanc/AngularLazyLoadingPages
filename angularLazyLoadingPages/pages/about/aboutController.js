var lazyLoadingPagesApp = angular.module('lazyLoadingPagesApp',[]);

lazyLoadingPagesApp.controller('aboutController', ['$scope', function($scope) {
  $scope.aboutMessage = 'about partial page';
}]);
