Genesis
=================
![genesis](https://cloud.githubusercontent.com/assets/1064654/7274248/84c60792-e8fb-11e4-8626-4e709f901e7f.png)

> Powerful boilerplate for building advanced web apps, inspired by [gulp-starter](https://github.com/greypants/gulp-starter/tree/2.0).
Special thanks to [Vincent Klaiber](https://github.com/vinkla/) for the amazing artwork.

#### Includes the following tools, tasks, and workflows:

- Full asset pipeline and static html compilation.
- [Code style](https://github.com/airbnb/javascript) linting with [ESLint](http://eslint.org/) and helpers using [editor configuration](http://editorconfig.org/).
- [Webpack](http://webpack.github.io/) module bundler.
- [SASS](http://sass-lang.com/) (super fast [libsass](https://github.com/dlmanning/gulp-sass) with [source maps](https://github.com/floridoo/gulp-sourcemaps), [autoprefixer](https://github.com/postcss/autoprefixer-core), and [MQPacker](https://github.com/hail2u/node-css-mqpacker) using [postcss](https://github.com/postcss/gulp-postcss)).
- [Babel](https://babeljs.io/) transforms ES6 and JSX to ES5 (with source maps!).
- [Karma](http://karma-runner.github.io/) for running tests with [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/).
- [BrowserSync](http://browsersync.io) for live reloading.
- [Image optimization](https://www.npmjs.com/package/gulp-imagemin).
- Error handling in the console [and in Notification Center](https://github.com/mikaelbr/gulp-notify).
- Automatically deploy public directory to gh-pages.
- Assets filename revision for cache busting.
- Travis CI integration that runs karma tests and production build.

#### Also includes a foundation of frontend tools that consists of:

- [React](https://facebook.github.io/react/) Javascript library for building user interfaces.
- [react-router](https://github.com/rackt/react-router) A complete routing library for React.
- [Flux](https://facebook.github.io/flux/) Application architecture for building user interfaces.
- [Normalize.css](http://necolas.github.io/normalize.css/) Render elements consistently across browsers.
- [Susy](http://susy.oddbird.net/) Amazing grid tools.

#### And last but not least I've added a sample todo application built with react.

## Installation
If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:

```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install npm dependencies
```
npm install
```

This runs through all dependencies listed in `package.json` and downloads them to a `node_modules` folder in your project directory.

### The `gulp` command
To run the version of gulp installed local to the project, in the root of your this project, you'd run

```
./node_modules/.bin/gulp
```

**WAT.** Why can't I just run `gulp`? Well, you could install gulp globally with `npm install -g gulp`, which will add the gulp script to your global bin folder, but it's always better to use the version that's specified in your project's package.json.  My solution to this is to simply alias `./node_modules/.bin/gulp` to `gulp`. Open up `~/.zshrc` or `~./bashrc` and add the following line:

```
alias gulp='node_modules/.bin/gulp'
```
Now, running `gulp` in the project directory will use the version specified and installed from the `package.json` file.

### Run gulp and be amazed.
```
gulp
```

This will run the `default` gulp task defined in `gulp/tasks/default.js`.

### Preview production environment
```
gulp build:production
gulp server
```

### Deploy to GitHub pages
```
gulp deploy
```
This will run karma, build your files, revision and compress them, and copy the contents of the public folder to a `gh-pages` branch, and push it up to GitHub. Make sure you've added your project specific configurations to gulp/config/deploy.js before doing this.

### Testing with Karma
This repo includes a basic js testing setup with the following: [Karma](http://karma-runner.github.io/0.12/index.html), [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), and [Sinon](http://sinonjs.org/). There is `karma` gulp task, which the `production` task uses to run the tests before compiling. If any tests fail, the `production` task will abort.

To run the tests and start monitoring files:
```
./node_modules/karma/bin/karma start
```

Want to just run `karma start`? Either add `alias karma="./node_modules/karma/bin/karma"` to your shell config or install the karma command line interface globally with `npm install -g karma-cli`.

### Code style
Depending on which editor you're using this may vary. For sublime, follow the instructions for ESLint [here](https://github.com/roadhump/SublimeLinter-eslint) and for editor config [here](https://github.com/sindresorhus/editorconfig-sublime).

## Configuration
All paths and plugin settings have been abstracted into separate config files in `gulp/config`. Adapt the paths and settings to the structure and needs of your project.

## License
Genesis is licensed under [The MIT License (MIT)](LICENSE).
