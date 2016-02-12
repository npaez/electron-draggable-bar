# electron-draggable-bar

![electron-draggable-bar](/image/image.jpg)

> **Note:** This extension was only tested on Linux and it's possible to work on Windows (not tested yet).
            For OSX users, please use [kapetan's electron-drag](https://github.com/kapetan/electron-drag).
> **Note2:** The current version is based on Angular directives. For a pure javascript implementation check the [old-dist folder](https://github.com/npaez/electron-draggable-bar/tree/master/old-dist)


## News
- 12/02: Angular implementation.
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

And specify angular-cards as a dependency of your Angular module
```js
angular.module('demoApp', [
   "electron-draggable-bar"
]);
```

## Usage
### Basic bar.
This is the most basic structure:

```html
<electron-nav title
              min-icon
              max-icon
              close-icon
</electron-nav>
```
- title: Sets the title of the windows.
- *-icon: Sets the windows action buttons. (min: minimize, max: maximize). This attrs receive the icon's class name. i.e. `close-icon="ion-android-close"`

### Adding a menu bar.
Basic structure:
```html
<electron-nav title="electron-draggable-bar"
              min-icon="ion-android-remove"
              max-icon="ion-android-checkbox-outline-blank"
              close-icon="ion-android-close"
              double-tool="true">
   <ul class="windows-menu">
      <li class="dropdown">
         <a href="#" class="dropdown-toggle"><!-- Menu title goes here --></a>
         <ul class="dropdown-menu">
            <li><a href="#"><!-- Submenu title goes here --></a></li>
            <li class="separator"></li> <!-- Use this to make a separator -->
            <li><a href="#"><!-- Another submenu title --></a></li>
         </ul>
      </li>
   </ul>
</electron-nav>
</nav>
```
> **Note:** 
> - For add a double-nav you need to set `true` the `double-tool` attribute on `<electron-nav>` tag.
> - Multilevel dropdown menus *not supported*.

### Fixing scroll-bar

**Important:** To make the scrollbar works properly you need wrap your main content in a `<electron-content>` tag . Otherwise, the scroll would be next to the bar.

```html
<electron-nav title="electron-draggable-bar"
              min-icon="ion-android-remove"
              max-icon="ion-android-checkbox-outline-blank"
              close-icon="ion-android-close"
</electron-nav>
<electron-content>
   <!-- main content goes here -->
</electron-content>
```


## Screenshots

![electron-draggable-bar](/image/screen.jpg)

![electron-draggable-bar](/image/screen2.jpg)

![electron-draggable-bar](/image/screen3.jpg)

![electron-draggable-bar](/image/screen5.jpg)

![electron-draggable-bar](/image/screen6.jpg)

## Demo
Clone this repo, and run `electro .` or `npm start` in the /demo folder for run demo.

## ToDo (future releases)
- Display the dropdown-menu on click.
- Support multilevel dropdowns.
- More Themes. (Dark, Ubuntu/Mint looks, etc).

## License
This seed is released under permissive MIT License.