## Synopsis

A gulp webapp for Bootstrap with Less.

This app was originally built from the Yeoman generator ['gulp-webapp'](https://github.com/yeoman/generator-gulp-webapp) built by the Yeoman Team.

It includes:

['Bootswatch'] (https://github.com/thomaspark/bootswatch)

['Font-Awesome'] (https://github.com/FortAwesome/Font-Awesome)

['h5bp apache-server-configs'] (https://github.com/h5bp/server-configs-apache)

## Themes

The main less file 'src/styles/main.less' imports all other styles. Add a Bootswatch theme from the example provided inside this file.

## Motivation

The sole purpose of this app is for Bootstrap development. It is the starter base for building custom webapps with Bootstrap.

- Designed to be as modular as possible.
- Designed to incorporate Bootswatch themes.
- Designed for the 'public' folder to be run on an existing apache server.
- Designed to be a foundation and added to/expanded. I.E. add angular.js, express, etc...

## Installation

- Clone the repo on Github: 'git clone https://github.com/swamper/boot-build.git'
- Install dependencies: 'npm install'
- Install Bower dependencies: 'bower install'
- Anything you want to install extra for npm run 'npm install --save-dev <package>'
- Anything you want to install extra for Bower run 'bower install --save-dev <package>'
- Run 'gulp' to build. This outputs to the 'public' directory.
- Run 'gulp serve' to preview and watch for changes. This outputs to the '.tmp' directory.

## To Do

## Contributors

## License

Licensing follows the original Yeoman generator licensing.

[BSD license](http://opensource.org/licenses/bsd-license.php)
