// Home Controller
myApp.controller("homeController", function($scope) {
    console.log('home');

})

// questions archive Controller
myApp.controller('quizController', function($scope, quizFactory, $filter, $http){
	// $scope.questions;
	// quizFactory.getQuestions().success(function(data){
	// 	$scope.questions = data;
	// 	$scope.firstdata = data[0]; 
	// }).error(function(error) {
	// 	console.log(error);
 //    alert(error);
	// });

  $http.get('dataa/data.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
      alert('not found');
    });

})


// questions Single Controller 
myApp.controller('sigleQuizController', function($scope, $routeParams, $http) {  
  $scope.search = function() {
    var url = 'data/data.json';
    $http.get(url).success(httpSuccess).error(function() {
        alert('Unable to get back informations');
    });
  }
  httpSuccess = function(response) {
    $scope.questions = angular.fromJson(response); 
    $scope.sigleQtn = $scope.questions.filter(function(item){
     return item.id==$routeParams.id; // example with id 1, or routeParams.id
    });
  }  
  $scope.search(); 
})


myApp.controller('ExampleController', ['$scope', function($scope) {
  $scope.master = {}; 
  $scope.update = function(user) {
    $scope.master = angular.copy(user);
  }; 
  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  }; 
  $scope.reset();
}])

// Active Menu Controller
myApp.controller('HeaderCtrl', function ($scope, $location) { 
	$scope.isActive = function (viewLocation) { 
	  return viewLocation === $location.path();
	};
});    

