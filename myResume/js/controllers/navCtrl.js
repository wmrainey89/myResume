angular.module("app")

.controller("navCtrl", navigationController);

navigationController.$inject = ["$scope", "$location"];

function navigationController($scope, $location) {
    $scope.gotoAboutMe = function() {
        $location.path("aboutMe");
    }
    $scope.gotoContactMe = function() {
        $location.path("/contact");
        
    }
    
    $scope.gotoKnowledge = function() {
        $location.path("/education");
    }
    
    $scope.gotoWorkExperience = function() {
        $location.path("/workHistory")
    }
    
    $scope.gotoPortfolio = function() {
        $location.path("/portfolio")
    }
    
}
