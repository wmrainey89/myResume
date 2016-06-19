angular.module("app")

.controller("homeCtrl", homeController);

homeController.$inject = ["$scope", "$location"];

function homeController($scope, $location) {
    $scope.gotoAboutMe = function() {
        $location.path("aboutMe");
        
       
        
    }
    
    // $scope.gotoWorkExperience = function() {
    //     $location.hash("workExperience");
        
    //     $anchorScroll();
    // } 
    
    // $scope.gotoKnowledge = function() {
    //     $location.hash("knowledge");
        
    //     $anchorScroll();
    // }
    
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
    
    // function myFunction(){
    // var str = "does it work?";
    // var result = str.link("https://form.jotform.com/jsform/61225573203144");
    // document.getElementById("demo").innerHTML = result;
    // }     
}
