# boot-build
A Bootstrap, Bootswatch, Gulp, less, and html app builder.

Includes [*Bootswatch*](http://bootswatch.com) themes and [*Font-Awesome*](https://fortawesome.github.io/Font-Awesome/).

## THIS IS A W.I.P.

## What is it?

boot-build compiles, auto-prefixes, and sourcemaps the less into minified css. Uglifies, sourcemaps, and concats the javascript. Minifies the html. Runs imagemin on the images.

Serves it up on browser-sync. Reloads on changes. The server runs out of '/.tmp'. All files in '/.tmp' except vendor files are un-minified for development needs.

The /public directory contains the minified production version files.

## How to use it?

Clone the repo: git clone 'git clone https://github.com/swamper/boot-build.git'

Run 'npm install' and 'bower install' in the project root directory.

Run 'gulp' or 'gulp build'. Running 'gulp' cleans out .tmp and /public before building. Running 'gulp build' just overwrites.

Run 'gulp serve' and it will open a browser window on 'http://localhost:3000/'.

Changes to anything in the /app folder reload the browser when running 'gulp serve'. It will not rebuild on changes unless you are running 'gulp serve'.

To change Bootswatch themes change the '/app/styles/main.less' entry. The '/app/styles/theme' directory is a place to add custom .less files to be linked into 'main.less' for custom elements.

## Testing

Karma on phantomjs, mocha, chai, and jasmine set up for future use. Not anything really to test here currently. Intention was just to add the backend for it. Uh huh... I'll cross testing when I have to and not a moment sooner.

## Motivation

Complete rewrite of 'boot-build'. 'boot-build' was originally put together out of another generator.

No generator used here now.

95-99% of the code in here I typed by hand. I leaned on community resources but pretty well laid out all the gulp files in a pattern that made sense to me. It puts it all out in a format I can work with. I kept it as basic and modular as I could.

Thought is to use this a base to build various different apps off of, this is just the starter template.

This is a learning experience/experiment.

## Bugs and Issues

## To Do

## Copyright and License

[*GPL V3*](//gnu.org/copyleft/gpl.html)
