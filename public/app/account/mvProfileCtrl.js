angular.module('app').controller('mvProfileCtrl', function($scope, mvAuth, mvIdentity, mvNotifier) {
    
    $scope.email = mvIdentity.currentUser.userName;
    $scope.FName = mvIdentity.currentUser.firstName;
    $scope.LName = mvIdentity.currentUser.lastName;
    
    $scope.update = function() {
        var newUserData = {
            
            userName: $scope.email,
            firstName: $scope.FName,
            lastName: $scope.LName
            
        }
        
        if($scope.password && $scope.password.length > 0) {
            
            newUserData.password = $scope.password;
        }
        
        mvAuth.updateCurrentUser(newUserData).then(function() {
            
            mvNotifier.notify('Your user account has been updated');
            
        }, function(reason) {
            
            mvNotifier.error(reason);
            
        })
    }
})