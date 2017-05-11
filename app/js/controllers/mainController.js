angular.module('app')
    .controller('MainController', function($scope, CurrentUser) {
      /* Here is your main controller */
      
      $scope.changeColor = function(id){
        $scope.color = id;
      };

    });
