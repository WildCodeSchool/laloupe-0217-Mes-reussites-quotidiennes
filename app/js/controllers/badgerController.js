angular.module('app')
    .controller('BadgerController', function($scope, CurrentUser, BadgeService) {


      $scope.user = CurrentUser.user();
      $scope.badge = "";

      $scope.demandBadges = [];
      $scope.newDemand = "";

      $scope.grey_heart = false;
      $scope.actived = function() {
        $scope.grey_heart = true;
      };

      function load() {
        BadgeService.getAllDemands().then(function(res) {
          $scope.demandBadges = res.data;
          $scope.badge = res.data[0].badge;
          console.log('demands', $scope.demandBadges, $scope.badge);
        });
      }
      load();
    });
