angular.module("app")

.controller("portfolioCtrl", portfolioController);

portfolioController.$inject=["$scope", "$location"];

function portfolioController ($scope, $location) {
    $scope.gotoHome= function() {
        $location.path("/home");
    }
};
