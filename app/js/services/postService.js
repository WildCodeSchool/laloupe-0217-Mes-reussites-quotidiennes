angular.module('app')
    .service("PostService", function($http) {
        return {
            getAll: function() {
                return $http.get("/posts");
            },
            getUserPost: function(userID) {
                return $http.get("/users/" + userID + "/posts/");
            },
            getOne: function(id) {
                return $http.get('/posts/' + id);
            },
            create: function(post) {
                return $http.post("/posts", post);
            },
            update: function(id, post) {
                return $http.put('/posts/' + id, post);
            },
            delete: function(id) {
                return $http.delete("/posts/" + id);
            },
            like: function(id, like) {
                return $http.put("/posts/" + id + '/like', like);
            }
        };
    });
