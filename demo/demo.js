angular.module('demoApp', [
   "electron-draggable-bar"
])
.controller('demoCtrl', function($scope) {
   $scope.showAlert = function() {
      alert('Soy un alert!');
   };
});