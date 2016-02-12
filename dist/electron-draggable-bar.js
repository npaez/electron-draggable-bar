angular.module('electron-draggable-bar', [])
.directive('electronContent', function() {
   return {
      restrict: 'E',
      transclude: true,
      template: '<div class="main-content">'
               +   '<div ng-transclude></div>'
               +'</div>'
   }
})
.directive('electronNav', function($window) {
   return {
      restrict: 'E',
      transclude: true,
      scope: {
         title: '@',
         minIcon: '@',
         maxIcon: '@',
         closeIcon: '@'
      },
      controller: function($scope) {
         var remote        = require('remote'),
             BrowserWindow = remote.require('browser-window'),
             window        = BrowserWindow.getFocusedWindow(),
             mainContent, viewportheight;

         function init() {
            $scope.minimizeWindow = function() { window.minimize(); };
            $scope.maximizeWindow = function() {
               window.isMaximized() ? window.unmaximize() : window.maximize();
            };
            $scope.closeWindow = function() { window.close(); };
            resizeWin();
            $window.onresize = resizeWin;

            if (/*@cc_on!@*/false) { 
               document.onfocusin = onFocus;
               document.onfocusout = onBlur;
            } else {
               window.onfocus = onFocus;
               window.onblur = onBlur;
            };
         };
         
         function resizeWin() {
            mainContent    = document.getElementsByTagName('electron-content')[0];
            viewportheight = document.documentElement.clientHeight - mainContent.offsetTop - 3;
            mainContent    = angular.element(mainContent);
            mainContent    = angular.element(mainContent[0].lastChild);
            mainContent.css('height', viewportheight + 'px');
         };

         function onBlur() { innerBlur.classList.add('blurred'); };
         function onFocus() { innerBlur.classList.remove('blurred'); };

         document.onreadystatechange = function () {
            if (document.readyState == "complete") init();
         };
      },
      link: function(scope, element, attrs, ctrl) {
         if(attrs.doubleTool == 'true') {
            scope.hasDoubleTool = true;
         } else {
            scope.hasDoubleTool = false;
         };
      },
      template:'<div class="navigation-tool">'
              +   '<div class="background-simple">'
              +      '<div class="background">'
              +         '<span class="windows-title">{{title}}</span>'
              +      '</div>'
              +      '<div class="windows-buttons">'
              +         '<span class="btn-header" ng-click="minimizeWindow()">'
              +            '<i class="{{ minIcon }}"></i>'
              +         '</span>'
              +         '<span class="btn-header" ng-click="maximizeWindow()">'
              +            '<i class="{{ maxIcon }}"></i>'
              +         '</span>'
              +         '<span class="btn-header" ng-click="closeWindow()">'
              +            '<i class="{{ closeIcon }}"></i>'
              +         '</span>'
              +      '</div>'
              +   '</div>'
              +   '<div class="background-double" ng-if="hasDoubleTool">'
              +      '<div ng-transclude></div>'
              +   '</div>'
              +'</div>'
   }
});