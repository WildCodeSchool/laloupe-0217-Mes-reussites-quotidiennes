angular.module('app')
    .service('SmileyService', function($http) {
        return {
            getAll: function() {
                return $http.get('/smileys');
            }
        };
    });
