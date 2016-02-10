# electron-draggable-bar
Draggable windows for Electron applications


## Getting Started
Include both `electron-draggable-bar.js` and `electron-draggable-bar.css` in your project.
Comming soon npm & bower packages.

```html
<link href="path/to/electron-draggable-bar.css" rel="stylesheet">

<script src="path/to/electron-draggable-bar.js"></script>
<!-- or -->
<script>require('path/to/electron-draggable-bar.js')</script>
```

This is the most basic structure:

```html
<nav class="navigation-tool">
   <div id="innerBlur"></div>
   <div class="background-simple">
      <div class="background">
         <span class="windows-title">
         	electron-draggable-bar v.0.0.1
         </span>
      </div>
      <div class="windows-buttons">
         <span id="minimzeBtn" class="btn-header">
            <i class="ion-android-remove"></i>
         </span>
         <span id="maximazeBtn" class="btn-header">
            <i class="ion-android-checkbox-outline-blank"></i>
         </span>
         <span id="closeBtn" class="btn-header">
            <i class="ion-android-close"></i>
         </span>
      </div>
   </div>
</nav>
```
> **Note:** This example is using Ionicons. But it can work with other icon libraries.


Result:

![electron-draggable-bar](/image/screen4.jpg)


