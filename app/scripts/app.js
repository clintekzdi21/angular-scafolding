(function() {
    'use strict';


    angular.module('myApp', [
        'ui.router',
        'ngSanitize',
        'ui.bootstrap',
        'ngAnimate'
    ])

    .config(['$qProvider', '$stateProvider', '$httpProvider', '$urlRouterProvider',

        function($qProvider, $stateProvider, $httpProvider, $urlRouterProvider) {

            $stateProvider
                .state('main', {
                    url: '/main',
                    templateUrl: 'app/views/main.html',
                    //controller: 'loginCtrl'
                })
                .state('main.dashboard', {
                    url: '/dashboard',
                    templateUrl: 'app/views/dashboard.html',
                    controller: 'dashboardCtrl'
                })
                .state('main.table', {
                    url: '/table',
                    templateUrl: 'app/views/table.html',
                    //controller: 'loginCtrl'
                })
                .state('main.sample', {
                    url: '/sample',
                    templateUrl: 'app/views/sample.html',
                    //controller: 'loginCtrl'
                })
                .state('sample1', {
                    url: '/sample',
                    templateUrl: 'app/views/sample.html',
                    //controller: 'loginCtrl'
                })
                .state('sample1.main', {
                    url: '/sample1',
                    templateUrl: 'app/views/sample.html',
                    //controller: 'loginCtrl'
                })



            $urlRouterProvider.otherwise('/main/dashboard');


        }
    ]);

})();
