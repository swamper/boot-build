# boot-build
A Bootstrap, Bootswatch, Gulp, less, and html app builder.

Includes [*Bootswatch*](http://bootswatch.com) themes and [*Font-Awesome*](https://fortawesome.github.io/Font-Awesome/).

## THIS IS A W.I.P

There should be no more base code rewrites however.

## What is it?

In a nutshell...

package.json :

- browser-sync
- del
- gulp
- gulp-autoprefixer
- gulp-concat
- gulp-filter
- gulp-imagemin
- gulp-jshint
- gulp-karma
- gulp-less
- gulp-load-plugins
- gulp-minify-css
- gulp-minify-html
- gulp-size
- gulp-sourcemaps
- gulp-uglify
- gulp-watch
- imagemin-pngquant
- jshint-stylish
- main-bower-files
- require-dir
- uglify-save-license
- wiredep

bower.json :

- jquery
- bootstrap
- bootswatch
- fontawesome

Compiles, auto-prefixes, concats, and sourcemaps the less into minified css. Uglifies, sourcemaps, and concats the javascript, and minifies the html. Runs imagemin on the images.

Serves it up on browser-sync. Reloads on changes. The server runs out of .tmp. All files in temp are un-minified for development needs.

The /public directory contains the production versions files.

## How to use it?

Clone the repo: git clone 'git clone https://github.com/swamper/boot-build.git'

Run 'npm install' and 'bower install' in the project root directory.

Run 'gulp' or 'gulp build'. Running 'gulp' cleans out .tmp and /public before building. Running 'gulp build' just overwrites.

Run gulp serve and it will open a browser window on 'http://localhost:3000/'.

Changes to anything in the /app folder reload the browser when running 'gulp serve'.

## Testing

Not wired up yet.

## Motivation

Complete rewrite of 'boot-build'. 'boot-build' was originally put together out of another generator.

No generator used here now.

95-99% of the code in here I typed by hand. I leaned on community resources but pretty well laid out all the gulp files in a pattern that made sense to me. It puts it all out in a format I can work with. I kept it modular as I could.

This is a learning experience/experiment.

## Bugs and Issues

## To Do

- Add testing

- Wire in bower

## Copyright and License

[*GPL V3*](//gnu.org/copyleft/gpl.html)
