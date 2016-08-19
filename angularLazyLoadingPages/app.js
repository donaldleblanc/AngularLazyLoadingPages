	// create the module and name it scotchApp
	var lazyLoadingPagesApp = angular.module('lazyLoadingPagesApp', ['oc.lazyLoad','ngRoute','httpModule']);

	// configure our routes
	lazyLoadingPagesApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				controller: 'homeController',
        templateUrl: 'pages/home/home.html',
        access: { requiredLogin: false },
        resolve: {
            lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    name: 'lazyLoadingPagesApp',
                    files: ['pages/home/homeController.js']
                }]);
            }]
		    }
			})

			// route for the about page
			.when('/about', {
				controller: 'aboutController',
				templateUrl : 'pages/about/about.html',
				access: { requiredLogin: false },
        resolve: {
            lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    name: 'lazyLoadingPagesApp',
                    files: ['pages/about/aboutController.js']
                }]);
            }]
		    }
			})

			// route for the contact page
			.when('/contact', {
				controller: 'contactController',
				templateUrl : 'pages/contact/contact.html',
				resolve: {
            lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    name: 'lazyLoadingPagesApp',
                    files: ['pages/contact/contactController.js']
                }]);
            }]
		    }
			})

			.otherwise({
				redirectTo: '/'
		  });
	});
	// create the controller and inject Angular's $scope
		lazyLoadingPagesApp.controller('mainController', function($scope) {
			// create a message to display in our view
			$scope.message = 'Main Controller message!';
		});
