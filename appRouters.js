var app = angular.module('customersApp', ['ngRoute','ngAnimate']);

app.config(function ($routeProvider,$locationProvider){ 
    $routeProvider
    .when('/',
          {
        controller: 'CustomerController',
        templateUrl: 'views/customers.html'
    })
    .when('/login',
          {
        controller: 'loginController',
        templateUrl: 'views/login.html'
    })
    .when('/order',
          {
        controller: 'orderController',
        templateUrl: 'views/order.html'
    })
    .when('/students',
          {
        controller: 'studentController',
        templateUrl: 'views/student.html'
    })
    .when('/student/:name',
          {
        controller: 'studentController',
        templateUrl: 'views/student.html'
    })
    .when('/user',
          {
        controller: 'userController',
        templateUrl: 'views/user.html'
    })
    .otherwise({redirectTo: '/'}); 
    $locationProvider.html5Mode(true);
    
});