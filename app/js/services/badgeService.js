angular.module('app')
  .service("BadgeService", function($http) {
    return {
      getAll: function() {
        return $http.get("/badges");
      },
      getAllDemands: function () {
        return $http.get("/demandBadges");
      },
      getCompleted: function (user) {
        return $http.get("/demandBadges/" + user);
      },
      create: function(badgeId, userId) {
        return $http.post("/demandBadges", {student:userId, badge:badgeId});
      },
      vote: function(user, demandId) {
        return $http.put("/demandBadges/" + demandId, {user: user});
      }
    };
  });
