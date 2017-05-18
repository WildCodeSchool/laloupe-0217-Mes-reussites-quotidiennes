angular.module('app')
  .service("BadgeService", function($http) {
    return {
      getAll: function() {
        return $http.get("/badges");
      },
      create: function(badge) {
        return $http.post("/badges", badge);
      },
    };
  });
