angular.module('app')
    .controller('MainController', function($scope, CurrentUser, BadgeService, $state) {

      $scope.user = CurrentUser.user();

      //add color emoji on click
      $scope.changeColor = function(id){
        $scope.color = id;
      };

      //initialisation demand badges
      $scope.newDemand = "";
      $scope.sendDemand = function(badgeId) {
        BadgeService.create(badgeId,$scope.user._id).then(function(res){
          $state.go('user.badger');
        }, function(err) {
          console.log('error when creating a demand', err);
        });
      };
});
