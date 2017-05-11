angular.module('app')
    .controller('MainController', function($scope, CurrentUser) {

      $scope.user = CurrentUser.user();
      $scope.changeColor = function(id){
        $scope.color = id;
      };

    });
