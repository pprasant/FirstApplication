angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, $location, mvNotifier, mvIdentity, mvAuth) {
    $scope.identity = mvIdentity;
    $scope.signIn = function(username, password) {
        
        mvAuth.authenticateUser(username, password).then(function(success) {
            if(success) {
                mvNotifier.notify('You have successfully signed in !');
            } else {
                 mvNotifier.notify('Username/Password combination incorrect !'); 
            }
        });
    
    }
   
   $scope.signOut = function() {
       mvAuth.logOutUser().then(function() {
           $scope.username = "";
           $scope.password = "";
           mvNotifier.notify('You have successfully signed out !');
           $location.path('/');
       })
   } 
   
});