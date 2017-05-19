angular.module('app')
    .controller('BadgerController', function($scope, CurrentUser, BadgeService) {


      $scope.user = CurrentUser.user();
      $scope.demandBadges = [];
      $scope.newDemand = "";

      function load() {
        BadgeService.getAll().then(function(res) {
          $scope.badges = res.data;
        });
      }

      $scope.sendDemand = function() {
        BadgeService.create().then(function(res){
          $scope.demandBadges.push($scope.newDemand);
          $scope.newDemand = "";
      });

    };
});
