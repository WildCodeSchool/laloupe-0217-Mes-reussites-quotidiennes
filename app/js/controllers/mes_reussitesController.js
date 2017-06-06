angular.module('app')
    .controller('mes_reussitesController', function($scope, $mdDialog, CurrentUser, PostService, UserService, LocalService) {
      $scope.user = CurrentUser.user();

      function load() {
        PostService.getUserPost(CurrentUser.user()._id).then(function(res) {
          $scope.posts = res.data;
        });
      }

      $(function(){
       $("textarea").prop('required',true);
});

      load();
      $scope.test = 'test';
      $scope.newPost = '';

      $scope.sendPost = function() {
        PostService.create({
          content: $scope.newPost,
          student: $scope.user._id
        }).then(function(res) {
          load();
          $scope.newPost = '';
        });
      };
      $scope.removePost = function(id) {
        PostService.delete(id).then(function() {
          load();
        });
      };

      $scope.update = function () {
        delete $scope.user.password;
        UserService.update($scope.user._id, $scope.user).then(function(res) {
          $mdDialog.show(
              $mdDialog.alert({
                  template:
                      '<md-dialog>' +
                      '<md-title class="Modal2">' +
                      'Mise à jour effectuée' +
                      '<md-icon md-svg-src="img/checkmark.svg" class="s24" aria-label="checkmark">'+
                      '</md-icon>' +
                      '</md-title>' +
                      '</md-dialog>',
              })
              .clickOutsideToClose(true)
              .title('Demande envoyée')
          );
        }, function(err) {
          $mdDialog.show(
              $mdDialog.alert({
                  template:
                      '<md-dialog>' +
                      '<md-title class="Modal2">' +
                      'Une erreur est survenue' +
                      '<md-icon md-svg-src="img/deletemark.svg" class="s24" aria-label="deletemark">'+
                      '</md-icon>' +
                      '</md-title>' +
                      '</md-dialog>',
              })
              .clickOutsideToClose(true)
              .title('Demande envoyée')
          );
        });
        LocalService.set('user', JSON.stringify($scope.user));
        $scope.user = CurrentService.user();
      };
});
