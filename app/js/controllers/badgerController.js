angular.module('app')
    .controller('BadgerController', function($scope, CurrentUser) {
      $scope.user = CurrentUser.user();

    });
