angular.module('app')
    .controller('BadgerController', function($scope, CurrentUser, BadgeService) {


      $scope.user = CurrentUser.user();
      $scope.demandBadges = [];
      // $scope.vote = res.data[0].vote;
      // console.log($scope.vote);

      //add color smiley on click
      var countVotes = 0;
      // $scope.hasVoted = function() {
      //     $scope.smiley_color = true;
      //     countVotes += 1;
      //     BadgeService.create().then(function(res) {
      //       $scope.vote = countVotes;
      //
      //
      //     });
      // };

      function load() {
        BadgeService.getAllDemands().then(function(res) {
          $scope.demandBadges = res.data;
          // $scope.badge = res.data[0].badge_id;
          console.log('demands', $scope.demandBadges);
        });
      }
      load();
    });
