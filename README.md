# electron-draggable-bar
Draggable windows for Electron applications

> **Note:** This extension was only tested on Linux and it's possible to work on Windows (not tested yet).
            For OSX users, please use [kapetan's electron-drag](https://github.com/kapetan/electron-drag).

## News

- 11/02: Fix scrollbar (See screenshots).


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
   <div class="background-simple">
      <div class="background">
         <span class="windows-title">
         	electron-draggable-bar v.0.0.1
         </span>
      </div>
      <div class="windows-buttons">
         <span id="minimizeBtn"
               class="btn-header">
            <i class="ion-android-remove"></i>
         </span>
         <span id="maximizeBtn"
               class="btn-header">
            <i class="ion-android-checkbox-outline-blank"></i>
         </span>
         <span id="closeBtn"
               class="btn-header">
            <i class="ion-android-close"></i>
         </span>
      </div>
   </div>
</nav>
```
> **Note:** 
> - This example is using Ionicons. But it can work with other icon libraries.
> - **Do not** modify the IDs. This will be improved in future releases.


Result:

![electron-draggable-bar](/image/screen4.jpg)

## Adding a menu bar.

Basic structure:

```html
<nav class="navigation-tool doble-tool">
   <div id="innerBlur"></div>
   <!-- main-bar -->
   <div class="background-simple">
      <div class="background">
         <span class="windows-title">
         	<!-- title -->
         </span>
      </div>
      <div class="windows-buttons">
         <span id="minimizeBtn"
               class="btn-header">
            <!-- icons -->
         </span>
         <span id="maximizeBtn"
               class="btn-header">
            <!-- icons -->
         </span>
         <span id="closeBtn"
               class="btn-header">
            <!-- icons -->
         </span>
      </div>
   </div>
   <!-- menu-bar -->
   <div class="background-doble">
      <ul class="windows-menu">
         <li class="dropdown">
            <a href="#"
               data-toggle="dropdown"
               class="dropdown-toggle">
            	<!-- menu name -->
             </a>
            <ul class="dropdown-menu">
               <li>
               	<a href="#">
               		<!-- action -->
               	</a>
               </li>
            </ul>
         </li>
      </ul>
   </div>
</nav>
```
> **Note:** 
> - **Don't forget** to include the `<div id="innerBlur"></div>`. This prevent the display in the dropdown-menus when the windows is not the main focus
> - **Do not** modify the IDs. This will be improved in future releases.
> - To separate a group of links from others, use `<li class="separator"></li>`


Example:

```html
<nav class="navigation-tool doble-tool">
   <div id="innerBlur"></div>
   <!-- main-bar -->
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
   <!-- menu-bar -->
   <div class="background-doble">
      <ul class="windows-menu">
         <li class="dropdown">
            <a href="#" data-toggle="dropdown" class="dropdown-toggle">First Menu</a>
            <ul class="dropdown-menu">
               <li><a href="#">Action</a></li>
               <li><a href="#">Another action</a></li>
               <li><a href="#">Something else here</a></li>
               <li class="separator"></li>
               <li><a href="#">Separated link</a></li>
               <li><a href="#">Another separated link</a></li>
            </ul>
         </li>
         <li class="dropdown">
            <a href="#" data-toggle="dropdown" class="dropdown-toggle">Second Menu</a>
            <ul class="dropdown-menu">
               <li><a href="#">Action</a></li>
               <li><a href="#">Another action</a></li>
               <li><a href="#">Something else here</a></li>
               <li class="separator"></li>
               <li><a href="#">Separated link</a></li>
               <li><a href="#">Another separated link</a></li>
            </ul>
         </li>
         <li class="dropdown">
            <a href="#" data-toggle="dropdown" class="dropdown-toggle">Menu</a>
            <ul class="dropdown-menu">
               <li><a href="#">Action</a></li>
               <li><a href="#">Another action</a></li>
               <li><a href="#">Something else here</a></li>
            </ul>
         </li>
      </ul>
   </div>
</nav>
```

## Screenshots

![electron-draggable-bar](/image/screen.jpg)

![electron-draggable-bar](/image/screen2.jpg)

![electron-draggable-bar](/image/screen3.jpg)

![electron-draggable-bar](/image/screen5.jpg)

![electron-draggable-bar](/image/screen6.jpg)

## TODO (future releases)

- An Angular implementation.
- Display the dropdown-menu on click.
- More Themes. (Dark, Ubuntu/Mint looks, etc).

## License
This seed is released under permissive MIT License.