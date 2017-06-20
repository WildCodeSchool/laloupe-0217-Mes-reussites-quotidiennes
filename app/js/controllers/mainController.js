angular.module('app')
    .controller('MainController', function($scope, $mdDialog, CurrentUser, BadgeService, $state, PostService, Mood, UserService, LocalService, Badges) {

        $scope.user = CurrentUser.user();

        console.log($scope.user);
        console.log($scope.badges);

        $scope.moods = Mood;
        $scope.badges = [];
        BadgeService.getAll().then(function(res) {
          $scope.badges = res.data;
        });

        PostService.getUserPost(CurrentUser.user()._id).then(function(res) {
          $scope.totalPosts = res.data.length;
        });

        //add color emoji on click
        $scope.changeMood = function(newMood) {
          UserService.update($scope.user._id, {mood : newMood}).then(function(res) {
            $scope.user.mood = newMood;
            LocalService.set("user", JSON.stringify($scope.user));
          });
        };

        //initialisation demand badges
        $scope.newDemand = "";

        $scope.showModal = function(badge) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Demande de Badge')
                .textContent(badge.name)
                // .targetEvent(ev)
                .ok('Confirmer')
                .cancel('Pas maintenant')
                .openFrom(angular.element(document.querySelector('#badges')))
                .closeTo(angular.element(document.querySelector('#badger')));
            $mdDialog.show(confirm).then(function() {
                //send the demand on confirm
                sendDemand(badge._id);
                //show modal de confirmation
                $mdDialog.show(
                    $mdDialog.alert({
                        template:
                            '<md-dialog>' +
                            '<md-title class="Modal2">' +
                            'Demande envoyée' +
                            '<md-icon md-svg-src="img/checkmark.svg" class="s24" aria-label="checkmark">'+
                            '</md-icon>' +
                            '</md-title>' +
                            '</md-dialog>',
                    })
                    .clickOutsideToClose(true)
                    .title('Demande envoyée')
                );

            }, function() {
                console.log('demande annulée');
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

        //modal pour tous les badges
        $scope.showBadges = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                // .ariaLabel('Lucky day')
                // .targetEvent(ev)
                // .ok('Confirmer')
                // .cancel('Pas maintenant')
                // .openFrom(angular.element(document.querySelector('#badges')))
                // .closeTo(angular.element(document.querySelector('#badger')));
            $mdDialog.show(confirm).then(function() {
                //send the demand on confirm
                sendDemand();
                //show modal de confirmation
                $mdDialog.show(
                    $mdDialog.alert({
                        templateUrl: ''

                    })
                    .clickOutsideToClose(true)
                    .title('Demande envoyée')
                );

            }, function() {
                console.log('demande annulée');
            });
        };
    });
