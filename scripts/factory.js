angular
	.module('quiz')
	.factory('quizFactory', function($http){ 
		function getQuestions(){
			return $http.get('data/data.json');
		}
		return{
			getQuestions: getQuestions
		}
	});