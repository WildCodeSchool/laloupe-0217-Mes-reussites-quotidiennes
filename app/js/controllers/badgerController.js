angular.module('app')
    .controller('BadgerController', function($scope, CurrentUser, BadgeService) {


        $scope.user = CurrentUser.user();

        function load() {
            BadgeService.getAllDemands().then(function(res) {
                $scope.demandBadges = res.data;
                $scope.demandBadges.forEach(function(demand) {
                    demand.hasVoted = demand.vote.indexOf($scope.user._id) === -1;
                });
                console.log('demands', $scope.demandBadges);
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
