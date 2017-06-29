angular.module('app')
    .controller('MainController', function($scope, $mdDialog, CurrentUser, BadgeService, $state, PostService, Mood, UserService, LocalService, Badges) {

        $scope.user = CurrentUser.user();

        if($state.params.id) {
          UserService.getOne($state.params.id).then(function (res) {
            $scope.user = res.data;
            // load(res.data._id);
          });
        }

        // function load(id) {
        //   PostService.getUserPost(id).then(function(res) {
        //     $scope.posts = res.data;
        //   });
        // }

        $scope.moods = Mood;
        $scope.badges = [];
        $scope.Selectbadge = null;

        BadgeService.getAll().then(function(res) {
            $scope.badges = res.data;
        });

        PostService.getUserPost(CurrentUser.user()._id).then(function(res) {
            $scope.totalPosts = res.data.length;
        });

        //add color emoji on click
        $scope.changeMood = function(newMood) {
            UserService.update($scope.user._id, {
                mood: newMood
            }).then(function(res) {
                $scope.user.mood = newMood;
                LocalService.set("user", JSON.stringify($scope.user));
            });
        };

        $scope.user.session = moment($scope.user.session).format("DD/MM/YYYY");

        //initialisation demand badges
        // $scope.showModal = function(badge) {
        //     $scope.badge = badge;
            // Appending dialog to document.body to cover sidenav in docs app
            // $mdDialog.show({
            //     template: '<md-dialog aria-label="List dialog">' +
            //         '<md-title class="Modal">' +
            //         'Demande du badge' +
            //         '</md-title>' +
            //         '<md-dialog-content>' +
            //         '<img class="modal1_img" src="' + badge.url + '" alt="badge">' +
            //         '</md-dialog-content>' +
            //         '<md-dialog-actions>' +
            //         '<md-button ng-click="close()" class="name_button">' +
            //         'Pas maintenant' +
            //         '</md-button>' +
            //         '<md-button ng-click="confirmer(\''+badge._id+'\')" class="name_button">' +
            //         'Confirmer' +
            //         '</md-button>' +
            //         '</md-dialog-actions>' +
            //         '</md-dialog>',
        //         locals: {
        //             badge: badge
        //         },
        //         bindToController: true,
        //         scope: $scope,
        //         preserveScope: true,
        //         controller: 'MainController'
        //     });
        // };

        $scope.showModal = function(badge) {
          $scope.Selectbadge = badge;
          $mdDialog.show({
                  contentElement: '#modalBadge',
                  controller: 'MainController',
                  bindToController: true,
                  multiple: true,
                  scope: $scope,
                  preserveScope:true,
                  fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
               });
             };

        $scope.showBadges = function(badge) {
          console.log('hello');
            $mdDialog.show({
                    contentElement: '#modalBadges',
                    controller: 'MainController',
                    // parent: angular.element(document.body),
                    scope: $scope,
                    bindToController: true,
                    clickOutsideToClose: true,
                    preserveScope:true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
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
          console.log(res.data);
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
