angular
	.module('quiz', ['ngRoute'])  // for reference


    .config(function($routeProvider, $locationProvider) {
	    $routeProvider
	        .when('/home', {
	            templateUrl: 'template/home.html',
	            controller: 'homeController'
	        })
	        .when('/game', {
	            templateUrl: 'template/quiz.html',
	            controller: 'quizController'
	        }) 
	        // .when('/shop/:id', {
	        // 	templateUrl: 'template/shop-single.html',
	        // 	controller: 'sigleProductController'
	        // })	        
	        .otherwise({
	            redirectTo: '/home'
	        });

	    $locationProvider.html5Mode(true)

    })

    // Home Controller
    .controller("homeController", function($scope) {
        console.log('home');

    })

    // Shop archive Controller
    .controller('quizController', function($scope, quizFactory){
		$scope.questions;
		quizFactory.getQuestions().success(function(data){
			$scope.questions = data;
		}).error(function(error) {
			console.log(error);
		});
    })


    .controller('ExampleController', ['$scope', function($scope) {
      $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
    }])


    // Shop Single Controller 
	// .controller('sigleProductController', function($scope, $routeParams, $http) {  
	//         $scope.search = function() {
	//             var url = 'data/data.json';
	//             $http.get(url).success(httpSuccess).error(function() {
	//                 alert('Unable to get back informations');
	//             });
	//         }
	//         httpSuccess = function(response) {
	//             $scope.products = angular.fromJson(response);
	           
	//             $scope.product = $scope.products.filter(function(item){
	//              return item.id==$routeParams.id; // example with id 1, or routeParams.id
	//             });
	//         } 
 
	//         $scope.search(); 
 //    })


    // Active Menu Controller
	.controller('HeaderCtrl', function ($scope, $location) { 
		$scope.isActive = function (viewLocation) { 
		  return viewLocation === $location.path();
		};
	});    