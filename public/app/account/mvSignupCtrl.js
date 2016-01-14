angular.module('app').controller('mvSignupCtrl', function($scope, $location, mvUser, mvNotifier, mvAuth) {
    
    $scope.signUp = function() {
        
        console.log($scope.email + ' ' + $scope.password + ' ' + $scope.FName + ' ' + $scope.LName);
        
        var newUserData = {
            
            userName: $scope.email,
            password: $scope.password,
            firstName: $scope.FName,
            lastName: $scope.LName
            
        };
        
        mvAuth.createUser(newUserData).then(function() {
            
            mvNotifier.notify('User account created !');
            $location.path('/');
            
        }, function(reason) {
            
            mvNotifier.error(reason);
        }
        
        )
    }
    
})