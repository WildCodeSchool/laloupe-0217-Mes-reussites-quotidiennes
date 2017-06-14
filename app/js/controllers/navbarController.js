angular.module('app')
  .controller('NavbarController', function($scope, Auth, UserService, CurrentUser, $state) {
    $scope.isCollapsed = true;
    $scope.auth = Auth;
    $scope.user = CurrentUser.user();

    $scope.logout = function() {
      Auth.logout();
    };

    function loadPlayers() {
      UserService.getAll().then(function(res) {
        $scope.users = res.data;
      });

    }
    loadPlayers();

    $scope.searchUser = function(searchText) {
      searchText = searchText.toLowerCase().trim();
      var filteredArray = $scope.users.filter(function(user) {
        return user.firstname.toLowerCase().indexOf(searchText) !== -1 ||
               user.lastname.toLowerCase().indexOf(searchText) !== -1;
      });

      return filteredArray;
    };

    $scope.fullName = function(user) {
      return user.firstname + ' ' + user.lastname;
    };

    $scope.goToUser = function (user) {
      console.log('coucou');
      $state.go('user.mes_reussites', {id: user._id});
    };
  });

