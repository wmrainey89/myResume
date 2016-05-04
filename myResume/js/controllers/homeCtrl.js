angular.module("app")

.controller("homeCtrl", homeController);

homeController.$inject = ["$scope", "$location", "$anchorScroll"];

function homeController($scope, $location, $anchorScroll) {
    $scope.gotoAboutMe = function() {
        $location.hash("aboutMe");
        
        $anchorScroll();
        
    }
    
    $scope.gotoWorkExperience = function() {
        $location.hash("workExperience");
        
        $anchorScroll();
    } 
    
    $scope.gotoKnowledge = function() {
        $location.hash("knowledge");
        
        $anchorScroll();
    }
    
    $scope.gotoContactMe = function() {
        $location.hash("contactMe");
        
        $anchorScroll();
    }
    
    $scope.gotoSchool = function() {
        $location.path("/education");
        
        
    }
    
    $scope.gotoWorkHist = function() {
        $location.path("/workHistory")
    }
}