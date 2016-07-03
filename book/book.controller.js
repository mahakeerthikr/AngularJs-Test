(function () {
	"use strict";
	angular.module("app")
			.controller("movieController", function($scope, $http, movieFact,UserService, $rootScope){

				movieFact.movieData().then(function(movie){
					$scope.movies = movie.data;
				// console.log(data);
				}, function(data){
					console.log("some data went wrong");
				});
				$scope.saveMovie = function(book){
					if(book){
					$scope.movies.unshift(book);
					$scope.book = {};
					$("#addMovie").modal("hide");
				} else{
					alert("enter Details please shit fellow")
				}
				}
				$scope.editContent = function(movie){
					$scope.editMovie = true;
					$("#addMovie").modal("show");
					$scope.book = movie;

				}
				$scope.saveEdit =  function(){
					$scope.book = {};
					$("#addMovie").modal("hide");
					$scope.showAdmin = false;

				}
				$scope.deletePost = function(movie){
					var index = $scope.movies.indexOf(movie);
					$scope.movies.splice(index,1);
				}
				$scope.addClass = function(){
						$(".thumbnail").mouseenter(function(){
						$(this).addClass("thumbnail-shadow");
						});
				}
				$scope.removeClass = function(){
					$(".thumbnail").mouseleave(function(){
						$(this).removeClass("thumbnail-shadow");
						});
				}
				// var vm = this;

				// vm.user = null;
				// vm.allUsers = [];
				// vm.deleteUser = deleteUser;

				// initController();

				// function initController() {
				//     loadCurrentUser();
				//     loadAllUsers();
				// }

				// function loadCurrentUser() {
				//     UserService.GetByUsername($rootScope.globals.currentUser.username)
				//         .then(function (user) {
				//             vm.user = user;
				//         });
				// }

				// function loadAllUsers() {
				//     UserService.GetAll()
				//         .then(function (users) {
				//             vm.allUsers = users;
				//         });
				// }

				// function deleteUser(id) {
				//     UserService.Delete(id)
				//     .then(function () {
				//         loadAllUsers();
				//     });
				// }

			});
})();