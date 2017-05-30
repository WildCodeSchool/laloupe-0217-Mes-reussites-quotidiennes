angular.module('app')
  .service("PostService", function($http) {
    return {
      getAll: function() {
        return $http.get("/posts");
      },
<<<<<<< 2e0ef6bf5e8a420a5996311165b51244c29a3f9e
      getUserPost: function(userID) {
        return $http.get("/users/"+userID+"/posts/");
      },
=======
>>>>>>> Now we can delete a post from the DB
      create: function(post) {
        return $http.post("/posts", post);
      },
      delete: function(id) {
        return $http.delete("/posts/" + id);
      }
    };
  });
