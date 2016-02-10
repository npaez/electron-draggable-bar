(function () {
   var remote        = require('remote'); 
   var BrowserWindow = remote.require('browser-window'); 
   var innerBlur = document.getElementById("innerBlur");


   function init() { 
      var closeBtn    = document.getElementById("closeBtn"),
          minimizeBtn = document.getElementById("minimzeBtn"),
          maximizeBtn = document.getElementById("maximazeBtn"),
          window      = BrowserWindow.getFocusedWindow();
      
      minimzeBtn.addEventListener("click", function(e) {
         window.minimize();
      });

      maximizeBtn.addEventListener("click", function(e) {
         window.isMaximized() ? window.unmaximize() : window.maximize();
      });

      closeBtn.addEventListener("click", function(e) {
         window.close();
      }); 
   }; 

   document.onreadystatechange = function () {
      if (document.readyState == "complete") {
         init(); 
      };
   };

   // Disabled windows when is not been focused
   function onBlur() {
      innerBlur.classList.add('blurred');
   };
   function onFocus(){
      innerBlur.classList.remove('blurred');
   };

   if (/*@cc_on!@*/false) { // check for Internet Explorer
      document.onfocusin = onFocus;
      document.onfocusout = onBlur;
   } else {
      window.onfocus = onFocus;
      window.onblur = onBlur;
   };
})();