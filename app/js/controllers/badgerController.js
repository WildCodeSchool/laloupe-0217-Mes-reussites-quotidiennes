angular.module('app')
    .controller('BadgerController', function($scope, CurrentUser, BadgeService) {
      $scope.user = CurrentUser.user();
      $scope.newBadge = '';

      function load() {
        BadgeService.getAll().then(function(res) {
          $scope.badges = res.data;
        });
      }

      $scope.sendBadge = function() {
        BadgeService.create({
          name: $scope.newBadge
        }).then(function(res) {
          load();
          $scope.newBadge = '';
        });
      };

    });
