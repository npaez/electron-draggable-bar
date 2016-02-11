(function () {
   var remote        = require('remote'),
       BrowserWindow = remote.require('browser-window'),
       innerBlur     = document.getElementById("innerBlur");

   function init() { 
      var closeBtn    = document.getElementById("closeBtn"),
          minimizeBtn = document.getElementById("minimizeBtn"),
          maximizeBtn = document.getElementById("maximizeBtn"),
          window      = BrowserWindow.getFocusedWindow();
      minimizeBtn.addEventListener("click", function(e) { window.minimize(); });
      maximizeBtn.addEventListener("click", function(e) {
         window.isMaximized() ? window.unmaximize() : window.maximize();
      });
      closeBtn.addEventListener("click", function(e) { window.close(); }); 
   }; 
   
   document.onreadystatechange = function () {
      if (document.readyState == "complete") init();
   };

   /*!
    * Resizesable windows overflow
    */
   resizeWin();
   window.onresize = resizeWin;
   function resizeWin() {
      var mainContent    = document.getElementById("mainContent");
      var nav            = document.getElementsByClassName('doble-tool');
      var viewportheight = null;
      if(nav.length) {
         viewportheight = document.documentElement.clientHeight - 65;
      } else {
         viewportheight = document.documentElement.clientHeight - 35;
      };      
      mainContent.style.height = viewportheight + 'px';
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