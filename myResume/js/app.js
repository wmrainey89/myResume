angular.module("app", ["ngRoute", "ui.bootstrap"])

.config(["$routeProvider", function($routeProvider) {
    
    $routeProvider
    
    .when("/", {
        templateUrl: "myResume/views/home.html",
        controller: "homeCtrl"
    })
    
    .when("/workHistory", {
        templateUrl: "myResume/views/workHistory.html",
        controller: "workHistoryCtrl"
    })
    
    .when("/education", {
        templateUrl: "myResume/views/eduHistory.html",
        controller: "eduHistoryCtrl"
    })
    
    .when("/portfolio", {
        templateUrl: "myResume/views/portfolio.html",
        controller: "portfolioCtrl"
    })
    
    .when("/contact", {
        templateUrl: "myResume/views/contact.html",
        controller: "contactCtrl"
    })
    
    .otherwise({
        redirectTo: "/"
    });
}]);