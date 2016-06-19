angular.module("app")

.controller("contactCtrl", contactController);

contactController.$inject = ["$scope", "$location"];

function contactController($scope, $location) {
    $scope.gotoHome = function() {
        $location.path("/home");
    }
}