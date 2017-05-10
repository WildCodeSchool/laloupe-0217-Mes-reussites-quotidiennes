angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, AccessLevels) {
        $stateProvider
            .state('anon', {
                abstract: true,
                data: {
                    access: AccessLevels.anon
                },
                views: {
                    'navbar@': {
                        templateUrl: 'anon/navbar.html',
                        controller: 'NavbarController'
                    }
                }
            })
            .state('anon.home', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'anon/home.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('anon.login', {
                url: '/login',
                views: {
                    'content@': {
                        templateUrl: 'anon/login.html',
                        controller: 'LoginController'
                    }
                }
            })
            .state('anon.createpost', {
                url: '/createpost',
                views: {
                    'content@': {
                        templateUrl: 'anon/createpost.html',
                        controller: 'CreatePostController'
                    }
                }
            })
            .state('anon.register', {
                url: '/register',
                views: {
                    'content@': {
                        templateUrl: 'anon/register.html',
                        controller: 'RegisterController'
                    }
                }
            });
        $stateProvider
            .state('user', {
                abstract: true,
                url: '/user',
                views: {
                    'navbar@': {
                        templateUrl: 'user/navbar.html',
                        controller: 'NavbarController'
                    }
                },
                data: {
                    access: AccessLevels.user
                }
            })
            .state('user.home', {
                url: '/home',
                views: {
                    'content@': {
                        templateUrl: 'user/home.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('user.badger', {
                url: '/badger',
                views: {
                    'content@': {
                        templateUrl: 'user/badger.html',
                        controller: 'BadgerController'
                    }
                }
            })
            .state('user.dashboard', {
                url: '/dashboard',
                views: {
                    'content@': {
                        templateUrl: 'user/dashboard.html',
                        controller: 'DashboardController'
                    }
                }
            })
            .state('user.profile', {
                url: '/profile',
                views: {
                    'content@': {
                        templateUrl: 'user/profile.html',
                        controller: 'ProfileController'
                    }
                }
            })
            .state('user.mes_reussites', {
                url: '/mes_reussites',
                views: {
                    'content@': {
                        templateUrl: 'user/mes_reussites.html',
                        controller: 'mes_reussitesController'
                    }
                }
            })
            ;
        $urlRouterProvider.otherwise('/');
    });
