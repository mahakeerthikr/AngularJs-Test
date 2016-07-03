(function(){
	"use strict";
	angular.module("app")
			.factory("movieFact", function($http){

				function movieData(){
					return $http.get("data/movie.txt");
				}

				return{
					movieData: movieData
				}

			});
})();