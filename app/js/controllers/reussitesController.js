angular.module('app')
  .controller('ReussitesController', function($scope, UserService, CurrentUser, PostService, SmileyService, $mdDialog) {
    $scope.user = CurrentUser.user();
    function load() {
      PostService.getAll().then(function(res) {
        $scope.posts = res.data;
      });
    }

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

    $scope.showAlert = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        // Modal dialogs should fully cover application
        // to prevent interaction outside of dialog
        $mdDialog.show(
          $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Choisis ton smiley !')
            .textContent('Liste des smileys ici.')
            .ariaLabel('Alert Dialog Demo')
            .ok('Got it!')
            .targetEvent(ev)
        );
      };

  });
