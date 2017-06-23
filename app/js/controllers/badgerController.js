angular.module('app')
    .controller('BadgerController', function($scope, CurrentUser, BadgeService) {


      $scope.user = CurrentUser.user();
      $scope.badge = "";
      $scope.demandBadges = [];

      //add color smiley on click
      var countSmiley = 0;
      $scope.actived = function() {
          $scope.smiley_color = true;
          countSmiley += 1;
      };
      console.log(countSmiley);

      function load() {
        BadgeService.getAllDemands().then(function(res) {
          $scope.demandBadges = res.data;
          // $scope.badge = res.data[0].badge_id;
          console.log('demands', $scope.demandBadges);
        });
      }
      load();
    });
