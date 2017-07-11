angular.module('app')
    .controller('ProfileController', function($scope, CurrentUser, UserService, $routeParams) {

      UserService.getOne($state.params.id).success(function(res) {
        $scope.user = res.data[$routeParams.id];
});

    });
