angular.module('app')
    .controller('mes_reussitesController', function($scope, CurrentUser) {
      $scope.user = CurrentUser.user();
});
