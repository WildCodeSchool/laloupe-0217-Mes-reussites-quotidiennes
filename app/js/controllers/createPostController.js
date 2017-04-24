angular.module('app')
  .controller('CreatePostController', function($scope) {

    if (localStorage.getItem('posts')) {
      $scope.posts = JSON.parse(localStorage.getItem('posts'));
    } else {
      $scope.posts = [];
    }
$scope.test= 'test';
    $scope.newPost = '';

    $scope.sendPost = function() {
      $scope.posts.push({
        content: $scope.newPost
      });
      localStorage.setItem("posts", JSON.stringify($scope.posts));
      $scope.newPost = '';
    };
    //
    $scope.removePost = function(index) {
      $scope.posts.splice(index, 1);
      localStorage.setItem("posts", JSON.stringify($scope.posts));
    };
    //
    // $scope.check = function (newVal, oldVal) {
    //   localStorage.setItem("posts", JSON.stringify($scope.posts));
    //   console.log('cc');
    // };
  });
