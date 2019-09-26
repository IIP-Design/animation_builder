# Animation Builder

This repo provides a tool with which you can develop, test, and export animated JavaScript modules. It includes an example module which we will use to illustrate how to configure your module.

## Add a New Module

To add a module, create a directory for it in the `src` directory. A typical module will include an HTML snippet, a JavaScript file, and a stylesheet. For example our example module contains three files: `example.html`, `example.js`, and `example.scss`.

```bash
└── src
    │
    └── example # Module directory
        │
        ├── example.html # Module HTML partial
        ├── example.js # Module JavaScript
        └── example.scss # Module stylesheet
```

In order to test out the module out (or run a production build for export) you must import your module's JavaScript into the into the `index.js` file and its HTML snippet into the `partials.js` file (more on that below).

Once this is done, the command `npm run dev` will open up a development server at `localhost:4321` where you can test your module.

The command `npm run build` will run a production build, which outputs a JavaScript bundle (`gcx-animations.js`) and combined CSS file (`main.css`) in the `dist` directory.

## Module Files in Detail

### JavaScript

Put all JavaScript for your module into a JS file (or files) in your module's directory. Then import the module JavaScript into the `index.js` file as such:

```js
/*    src/index.js    */

import './example/example';
```

### CSS

To include a module-specific stylesheet, create a CSS file and import it at the top of your module's JavaScript file as such:

```js
/*    src/example/example.js    */

import './example.scss';
```

CSS, SASS, and SCSS stylesheets are all accepted formats.

### HTML

You module will likely require some HTML to attach itself to. You can write the required HTML in your module directory and then inject it into the `index.html` for the dev server, by adding it to the to exports in the `partials.js` file as such:

```js
/*    src/partials.js    */

module.exports = {
  example: '/src/example/example.html'
};
```

### Images

To use an image or other static asset in your module, save the asset file to the `static/assets` directory. Thereafter you can import the asset into your HTML partial from the `assets` directory as such:

```html
<!--    src/examples/example.html   -->

<img src='assets/example.png' />
```

## Animation Libraries

This tool comes with the [Scrollmagic](https://github.com/janpaepke/ScrollMagic) and [GreenSock](https://github.com/greensock/GreenSock-JS) animation libraries bundled.

To utilize them, simply import the required parts of the libraries into the module's JavaScript file, such as:

```js
/*    src/example/example.js    */

import ScrollMagic from 'scrollmagic'; // ScrollMagic
import { TweenMax } from "gsap/TweenMax"; // GreenSock
```