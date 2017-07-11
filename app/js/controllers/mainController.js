angular.module('app')
    .controller('MainController', function($scope, $mdDialog, CurrentUser, BadgeService, $state, PostService, Mood, UserService, LocalService) {

        $scope.user = CurrentUser.user();

        if($state.params.id) {
          UserService.getOne($state.params.id).then(function (res) {
            $scope.user = res.data;
          });
        }

        $scope.moods = Mood;
        $scope.badges = [];
        $scope.Selectbadge = null;

        BadgeService.getAll().then(function(res) {
            $scope.badges = res.data;
        });

        PostService.getUserPost($state.params.id).then(function(res) {
            $scope.totalPosts = res.data.length;
        });

        $scope.changeMood = function(newMood) {
            UserService.update($scope.user._id, {
                mood: newMood
            }).then(function(res) {
                $scope.user.mood = newMood;
                LocalService.set("user", JSON.stringify($scope.user));
            });
        };

        $scope.showModal = function(badge) {
          $scope.Selectbadge = badge;
          $mdDialog.show({
                  contentElement: '#modalBadge',
                  controller: 'MainController',
                  bindToController: true,
                  multiple: true,
                  scope: $scope,
                  preserveScope:true,
                  fullscreen: $scope.customFullscreen 
               });
             };

        $scope.showBadges = function(badge) {
          console.log('hello');
            $mdDialog.show({
                    contentElement: '#modalBadges',
                    controller: 'MainController',
                    scope: $scope,
                    bindToController: true,
                    clickOutsideToClose: true,
                    preserveScope:true,
                    fullscreen: $scope.customFullscreen 
                 });
         };

         var sendDemand = function(badgeId) {
             console.log('sendDemand executed');
             BadgeService.create(badgeId, $scope.user._id).then(function(res) {
                 console.log('demande envoyée');
             }, function(err) {
                 console.log('error when creating a demand', err);
             });
         };
         //show confirmation modal on click
        $scope.confirmer = function(badge) {
            sendDemand(badge);
            $mdDialog.show(
                $mdDialog.alert({
                    template: '<md-dialog>' +
                        '<md-title class="Modal">' +
                        'Demande envoyée' +
                        '<md-icon md-svg-src="img/checkmark.svg" class="s24" aria-label="checkmark">' +
                        '</md-icon>' +
                        '</md-title>' +
                        '</md-dialog>',
                })
                .clickOutsideToClose(true)
                .openFrom(angular.element(document.querySelector('#badges')))
                .closeTo(angular.element(document.querySelector('#badger')))
                .title('Demande envoyée')
            );
        };

        //close Modal
        $scope.close = function() {
            $mdDialog.cancel();
        };

        BadgeService.getCompleted(CurrentUser.user()._id).then(function(res) {
          $scope.badgesCompleted = res.data.length;
          console.log($scope.badgesCompleted);
          for(var i = 0; i < $scope.badges.length; i++){
            $scope.badges[i].completed = false;
            for(var j = 0; j < res.data.length; j++){
              if(($scope.badges[i]._id)===(res.data[j].badge._id)){
                $scope.badges[i].completed = true;
                console.log(res.data[j].badge._id);
                console.log($scope.badges[i]._id);
              }
            }
          }
          console.log($scope.badges);
        });
    });
