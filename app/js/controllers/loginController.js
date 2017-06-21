angular.module('app')
    .controller('LoginController', function($scope, $state, Auth, Mood, UserService, LocalService) {
        $scope.errors = [];

        $scope.moods = Mood;
        $scope.user = {};

        $scope.login = function() {
            if ($scope.userForm.$valid) {
                $scope.errors = [];
                Auth.login($scope.user).then(function(result) {
                    $state.go('user.mes_reussites');
                }).catch(function(err) {
                    $scope.errors.push(err);
                });
            }
        };

        $scope.changeMood = function(newMood) {
          $scope.user.mood = newMood;
        };
    });
