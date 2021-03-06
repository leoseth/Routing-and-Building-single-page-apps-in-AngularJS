﻿
var app = angular.module('FullflashApp', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
         when('/',      { templateUrl: 'home.html', controller: 'HomeController',   controllerAs:'home' }).
         when('/about', { templateUrl: 'about.html', controller: 'AboutController', controllerAs:'about'}).
         otherwise({ redirecTo: '' });
         console.log("successfully routed");
}]);

app.controller('HomeController', ['$location', function ($location) {
    console.log("HomeController");
    var ctr  = this;
    ctr.text = "Home Text";

    ctr.gotoPage = function (page) {
        $location.path(page);
    }
}]);

app.controller("AboutController",['$location', function ($location) {
    var ctr  = this;
    ctr.text = "About Text";

    ctr.gotoPage = function (page) {
        $location.path(page);
    }
}]);

