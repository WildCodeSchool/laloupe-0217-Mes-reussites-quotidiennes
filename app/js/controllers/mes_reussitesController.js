angular.module('app')
    .controller('mes_reussitesController', function($scope, $state, $mdDialog, CurrentUser, PostService, UserService, LocalService) {
      $scope.currentUser = CurrentUser.user();

      UserService.getOne($state.params.id).then(function (res) {
        $scope.user = res.data;
        load(res.data._id);
      }, function (err) {
        $state.go('user.mes_reussites', {id: $scope.CurrentUser._id});
      });

      function load(id) {
        PostService.getUserPost(id).then(function(res) {
          $scope.posts = res.data;
        });
      }

      $(function(){
       $("textarea").prop('required',true);
      });

      $scope.test = 'test';
      $scope.newPost = '';

      $scope.sendPost = function() {
        PostService.create({
          content: $scope.newPost,
          student: $scope.user._id,
          mood: CurrentUser.user().mood
        }).then(function(res) {
          load(CurrentUser.user()._id);
          $scope.newPost = '';
        });
      };
      $scope.removePost = function(id) {
        PostService.delete(id).then(function() {
          load($scope.user._id);
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
