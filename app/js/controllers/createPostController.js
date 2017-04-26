angular.module('app')
  .controller('CreatePostController', function($scope, PostService) {

    function load() {
      PostService.getAll().then(function(res) {
        $scope.posts = res.data;
      });
    }

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
