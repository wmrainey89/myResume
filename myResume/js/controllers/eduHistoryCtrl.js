angular.module("app")

.controller("eduHistoryCtrl", educationHistoryController);

educationHistoryController.$inject = ["$scope", "$location"];

function educationHistoryController($scope, $location) {
    $scope.gotoHome = function() {
        $location.path("/home");
        
       
    }
}