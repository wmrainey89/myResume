angular.module("app")

.controller("workHistoryCtrl", workHistoryController);

workHistoryController.$inject = ["$scope", "$location"];

function workHistoryController($scope, $location) {
    $scope.gotoHome = function() {
        $location.path("/home");
    }
    
    
}