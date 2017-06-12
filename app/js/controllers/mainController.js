angular.module('app')
    .controller('MainController', function($scope, $mdDialog, CurrentUser, BadgeService, $state) {

        $scope.user = CurrentUser.user();

        //add color emoji on click
        $scope.changeColor = function(id) {
            $scope.color = id;
        };

        //initialisation demand badges
        $scope.newDemand = "";

        $scope.showModal = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Demande de Badge')
                .textContent('Ici votre badge.')
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .ok('Confirmer')
                .cancel('Pas maintenant')
                .openFrom(angular.element(document.querySelector('#badges')))
                .closeTo(angular.element(document.querySelector('#badger')));
            $mdDialog.show(confirm).then(function() {
                //send the demand on confirm
                $scope.sendDemand = function(badgeId) {
                    BadgeService.create(badgeId, $scope.user._id).then(function(res) {}, function(err) {
                        console.log('error when creating a demand', err);
                    });
                };
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
    });
