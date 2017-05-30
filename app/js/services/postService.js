angular.module('app')
  .service("PostService", function($http) {
    return {
      getAll: function() {
        return $http.get("/posts");
      },
      getUserPost: function(userID) {
        return $http.get("/users/"+userID+"/posts/");
      },
      create: function(post) {
        return $http.post("/posts", post);
      },
      delete: function(id) {
        return $http.delete("/posts/" + id);
      }
    };
  });
