angular.module('app')
    .controller('mes_reussitesController', function($scope, CurrentUser, PostService, UserService) {
      $scope.user = CurrentUser.user();
      delete $scope.user.password;

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
        UserService.update($scope.user._id, $scope.user).then(function(res) {

          console.log('user updated');
        }, function(err) {

          console.log('error update user', err);
        });
      };
});
