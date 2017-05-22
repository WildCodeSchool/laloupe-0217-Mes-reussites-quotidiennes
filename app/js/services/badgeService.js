angular.module('app')
  .service("BadgeService", function($http) {
    return {
      getAll: function() {
        return $http.get("/badges");
      },
      getAllDemands: function () {
        return $http.get("/demandBadges");
      },
      create: function(badgeId, userId) {
        return $http.post("/demandBadges", {student:userId, badge:badgeId});
      },
    };
  });
