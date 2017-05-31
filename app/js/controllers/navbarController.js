angular.module('app')
    .controller('NavbarController', function($scope, Auth, CurrentUser, UserService) {
        $scope.isCollapsed = true;
        $scope.auth = Auth;
        $scope.user = CurrentUser.user();

        $scope.logout = function() {
            Auth.logout();
            console.log('user deco');
        };

    });
