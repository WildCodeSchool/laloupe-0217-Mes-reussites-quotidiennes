angular.module('app')
    .controller('mes_reussitesController', function($scope, CurrentUser, PostService) {
      $scope.user = CurrentUser.user();
      function load() {
        PostService.getAll().then(function(res) {
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
          content: $scope.newPost
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
});
