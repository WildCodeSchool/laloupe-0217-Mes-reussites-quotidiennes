angular.module('app')
  .controller('ReussitesController', function($scope, $state, UserService, CurrentUser, PostService, SmileyService, $mdDialog, $interval) {
    $scope.user = CurrentUser.user();

    function loadPlayers() {
      UserService.getAll().then(function(res) {
        $scope.users = res.data;
      });
    }

    loadPlayers();

        $scope.goToUser = function (user) {
          $scope.currentNavItem = 'page2';
            $state.go('user.mes_reussites', {id: user._id});
            };

    function load() {
      PostService.getAll().then(function(res) {
        $scope.posts = res.data;
      });
    }
    
    // Begin Sab
    $scope.liked = function(id) {
      for (var i = 0; i < $scope.posts.length; i++) {
        if ($scope.posts[i]._id === id) {
          if ($scope.posts[i].likers.indexOf(CurrentUser.user()._id) !== -1 || undefined) {
            return false;
          } else {
            return true;
          }
        }

      }
    };

    function load2() {

      PostService.getAll().then(function(res) {
        for (var i = 0; i < res.data.length; i++) {
          $scope.posts[i].smileyBis = res.data[i].smileyBis;
          $scope.posts[i].likers = res.data[i].likers;
          $scope.liked(i);
        }
      });
    }

    function callAtInterval() {
      load2();
    }
    $interval(callAtInterval, 2000);
    // end Sab

    function loadSmileys() {
      SmileyService.getAll().then(function(res) {
        $scope.smileys = res.data;
      });
    }

    loadSmileys();


    $(function() {
      $("textarea").prop('required', true);
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

    $scope.addLike = function(idPost, idSmiley) {
      var like = {
        student: CurrentUser.user()._id,
        smiley: idSmiley
      };
      PostService.like(idPost, like);
    };

    // Begin Sab


    $scope.showAdvanced = function(ev, id) {
      $mdDialog.show({
        controller:     function DialogController($scope, $mdDialog, CurrentUser, postid) {
              $scope.hide = function() {
                $mdDialog.hide();
              };
              $scope.cancel = function() {
                $mdDialog.cancel();
              };
              $scope.smileys = [{
                name: 'blush'
              },
              {
                name: 'grinning'
              },
              {
                name: 'heart'
              },
              {
                name: 'wink'
              },
              {
                name: 'cool'
              }
            ];


              $scope.addSmiley = function(name) {
                PostService.getOne(postid).then(function(res) {
                  $scope.post = res.data;
                  console.log($scope.post);
                  $scope.post.likers.push(CurrentUser.user()._id);
                  $scope.post.likeNumber++;
                  $scope.post.smileyBis.push(name);
                  PostService.update(postid, {
                    likers: $scope.post.likers,
                    likeNumber: $scope.post.likeNumber,
                    smileyBis: $scope.post.smileyBis
                  });
                });
                $scope.hide();

              };
            },
        templateUrl: 'dialog1.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: false,
        locals: {
          postid: id
        }
      });
    };
 //End Sab

  });
