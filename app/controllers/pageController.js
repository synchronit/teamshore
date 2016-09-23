var app = require('../config');

app.controller('pageController', function ($scope, $route, pageService) {

    switch ($route.current.originalPath) {
        case '/':
            $scope.pageClass = 'home';
            break;

        case '/feedback':
            $scope.pageClass = 'page feedback';
            break;

        case '/contact':
            $scope.pageClass = 'page contact';
            break;

        default:
            $scope.pageClass = 'page';
    }

    pageService.getPageData(function (data) {
        $scope.page = data;
    });

});
