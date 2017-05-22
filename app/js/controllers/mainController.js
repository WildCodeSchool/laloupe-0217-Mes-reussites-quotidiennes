angular.module('app')
    .controller('MainController', function($scope, CurrentUser, BadgeService, $state) {

      $scope.user = CurrentUser.user();

      //add color emoji on click
      $scope.changeColor = function(id){
        $scope.color = id;
      };

      //initialisation demand badges
      $scope.newDemand = "";
      $scope.sendDemand = function() {
        BadgeService.create().then(function(res){
          $state.go('user.badger');
      });
    };
});
