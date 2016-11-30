/**
* quiz Module
*
* Description
*/
var myApp =angular.module('quiz', ['ngRoute']);
					
    myApp.config(function($routeProvider, $locationProvider) {
	    $routeProvider
	        .when('/home', {
	            templateUrl: 'view/home.html',
	            controller: 'homeController'
	        })
	        .when('/game', {
	            templateUrl: 'view/quiz.html',
	            controller: 'quizController'
	        }) 
	        .when('/game/:id', {
	        	templateUrl: 'view/quiz-single.html',
	        	controller: 'sigleQuizController'
	        })	        
	        .otherwise({
	            redirectTo: '/home'
	        });

	    $locationProvider.html5Mode(true)

    });
