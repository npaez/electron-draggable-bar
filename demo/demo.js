angular.module('demoApp', [
   "electron-draggable-bar"
])
.controller('demoCtrl', function($scope, $window) {
   $scope.showAlert = function() {
      alert('Soy un alert!');
   };

   $scope.exitWindow = function() {
      $window.close();
   }
});