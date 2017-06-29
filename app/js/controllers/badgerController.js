angular.module('app')
    .controller('BadgerController', function($scope, CurrentUser, BadgeService) {


        $scope.user = CurrentUser.user();
        // $scope.demandBadges = [];
        var numberVote = [];

        function load() {
            BadgeService.getAllDemands().then(function(res) {
                $scope.demandBadges = res.data;
                $scope.demandBadges.forEach(function(demand) {
                    demand.hasVoted = demand.vote.indexOf($scope.user._id) == -1;
                });

            BadgeService.getCompleted(CurrentUser.user()).then(function(res) {
              console.log('coucou',CurrentUser.user()._id);
              console.log(res.data);


            });

                console.log('demands', $scope.demandBadges, $scope.vote);
            });
        }
        load();

        //voter pour un badge
        $scope.hasVoted = function(demandeId) {
            BadgeService.vote($scope.user._id, demandeId).then(function(res) {
                load();
            });
        };
    });
