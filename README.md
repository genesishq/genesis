Genesis
=================
![genesis](https://magnus.sexy/genesis/assets/images/banner.png)

> Powerful boilerplate for building advanced web apps. Special thanks to [Vincent Klaiber](https://github.com/vinkla/) for the amazing artwork.
>
> An example of the generated output can be viewed [here](https://magnus.sexy/genesis).

#### Includes the following tools, tasks, and workflows:

- Full asset pipeline and static html compilation using [Webpack](http://webpack.github.io/) module bundler.
- Compiling [SASS](http://sass-lang.com/) using [sass-loader](https://github.com/jtangelder/sass-loader). Additionaly it runs [autoprefixer](https://github.com/postcss/autoprefixer) and [CSSWring](https://github.com/hail2u/node-csswring) with [postcss](https://github.com/postcss/gulp-postcss).
- Transipiling ES6 to ES5 using [Babel](https://babeljs.io/).
- Testing with [Karma](http://karma-runner.github.io/) with [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/).
- Development environment using [webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html) with hot mode.
- Assets filename revision for cache busting.
- Travis CI integration that runs karma tests and production build.

#### Also includes a foundation of frontend tools that consists of:

- [React](https://facebook.github.io/react/) Javascript library for building user interfaces.
- [react-router](https://github.com/rackt/react-router) A complete routing library for React.
- [Flux](https://facebook.github.io/flux/) Application architecture for building user interfaces.
- [sanitize.css](https://github.com/jonathantneal/sanitize.css/) Render elements consistently across browsers.

#### And last but not least I've added a sample todo application built with react.

## Installation
If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:

```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install dependencies
```
npm install
```

This downloads all dependencies listed in `package.json`.

### Running build scripts
```
npm run dev
```

This will compile your assets and start a webpack dev server with hot mode and react hot module replacement. Read [this](http://webpack.github.io/docs/webpack-dev-server.html) for more info.

### Preview production environment
```
npm run build
npm start
```

### Testing with Karma
This repo includes a basic js testing setup with the following: [Karma](http://karma-runner.github.io/0.12/index.html), [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), and [Sinon](http://sinonjs.org/).

To run the tests simply do:
```
npm test
```

### Code style
This repo follows the [standard](https://github.com/feross/standard) javascript coding style guide. It also includes some default editor settings using [editor config](https://github.com/sindresorhus/editorconfig-sublime).

## License
Genesis is licensed under [The MIT License (MIT)](LICENSE).
