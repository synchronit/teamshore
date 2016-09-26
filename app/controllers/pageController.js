var app = require('../config');

app.controller('pageController', ['$scope', '$route', 'pageService', 'NgMap',
    function ($scope, $route, pageService, NgMap) {

        switch ($route.current.originalPath) {
            case '/':
                $scope.pageClass = 'home';
                break;

            case '/feedback':
                $scope.pageClass = 'page feedback';
                break;

            case '/contact':
                $scope.pageClass = 'page contact';

                NgMap.getMap().then(function (map) {
                    $scope.map = map;
                });

                $scope.reLocate = function (country) {
                    $scope.page.location = country.location;
                    var element = document.getElementsByClassName('country active')[0];
                    element.className = 'country';
                    document.getElementById(country.country).className = 'country active';
                };

                break;

            default:
                $scope.pageClass = 'page';
        }

        pageService.getPageData(function (data) {
            $scope.page = data;
        });
    }]);
