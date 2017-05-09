var myApp = angular.module('myModule', []);

myApp.controller("myController", myController);
myApp.controller("studentController", studentController);
//myController.$inject = ['$scope'];

//declare
function myController($rootScope,$scope) {
    $rootScope.message = "This is my message from Controller"
}

//declare
function studentController($rootScope, $scope) {
    $scope.message = "This is my message from Student"
}