angular.module('app')
  .controller('ReussitesController', function($scope, UserService, CurrentUser, PostService, SmileyService) {
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

    $(document).ready(function() {
      $(".reaction").on("click", function() { // like click
        var data_reaction = $(this).attr("data-reaction");
        $(".like-details").html("You, Arkaprava Majumder and 1k others");
        $(".like-btn-emo").removeClass().addClass('like-btn-emo').addClass('like-btn-' + data_reaction.toLowerCase());
        $(".like-btn-text").text(data_reaction).removeClass().addClass('like-btn-text').addClass('like-btn-text-' + data_reaction.toLowerCase()).addClass("active");

        if (data_reaction === "Like") {
          $(".like-emo").html('<span class="like-btn-like"></span>');
        } else {
          $(".like-emo").html('<span class="like-btn-like"></span><span class="like-btn-' + data_reaction.toLowerCase() + '"></span>');
        }
      });

      $(".like-btn-text").on("click", function() { // undo like click
        if ($(this).hasClass("active")) {
          $(".like-btn-text").text("Like").removeClass().addClass('like-btn-text');
          $(".like-btn-emo").removeClass().addClass('like-btn-emo').addClass("like-btn-default");
          $(".like-emo").html('<span class="like-btn-like"></span>');
          $(".like-details").html("Arkaprava Majumder and 1k others");
        }
      });
    });



  });
