angular.module('app')
    .controller('BadgerController', function($scope, CurrentUser, BadgeService) {


      $scope.user = CurrentUser.user();
      $scope.badge = "";

      $scope.demandBadges = [];
      $scope.newDemand = "";

      function load() {
        BadgeService.getAllDemands().then(function(res) {
          $scope.demandBadges = res.data;
          $scope.badge = res.data[0].badge;
          console.log('demands', $scope.demandBadges, $scope.badge);
        });
      }
      load();
    });
