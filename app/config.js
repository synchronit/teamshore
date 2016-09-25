var app = angular.module('teamshore', ['ngRoute', 'ngSanitize', 'ngAnimate']);

app.config(['$routeProvider', '$sceDelegateProvider', '$locationProvider',
    function ($routeProvider, $sceDelegateProvider, $locationProvider) {
        $routeProvider
                .when('/', {
                    controller: 'pageController',
                    templateUrl: 'app/views/home.html'
                })
                .when('/knowledge', {
                    controller: 'pageController',
                    templateUrl: 'app/views/page.html'
                })
                .when('/done', {
                    controller: 'pageController',
                    templateUrl: 'app/views/page.html'
                })
                .when('/feedback', {
                    controller: 'pageController',
                    templateUrl: 'app/views/feedback.html'
                })
                .when('/people', {
                    controller: 'pageController',
                    templateUrl: 'app/views/page.html'
                })
                .when('/culture', {
                    controller: 'pageController',
                    templateUrl: 'app/views/page.html'
                })
                .when('/spoc', {
                    controller: 'pageController',
                    templateUrl: 'app/views/page.html'
                })
                .when('/lean', {
                    controller: 'pageController',
                    templateUrl: 'app/views/page.html'
                })
                .when('/contact', {
                    controller: 'pageController',
                    templateUrl: 'app/views/contact.html'
                })
                .otherwise({redirectTo: '/'});


        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            '*://www.youtube.com/**']);

        //$locationProvider.html5Mode(true);
    }]);

module.exports = app;