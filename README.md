# react-server-rendering-with-react-router
test app for learning node server rendering and react routing

# source
Following tutorial from:
* https://www.youtube.com/watch?v=mZEv4mHsU5E

Tyler Mc Ginnis santo subito :-)

# Packages

## start script 
Run webpack & nodemon, so:
* webpack -w 
* nodemon server.js

## Dev Dependencies
Listing all dependencies reported in package.json

Here's the conf:

babel: {
    "presets": ["env, react"],
    "plugins": ["transform-object-rest-spread"]
}

### Babel
...of course babel for transpiling to js
* npm install --save-dev babel-core babel-loader babel-plugin-transform-object-rest
-spread babel-preset-env babel-preset-react

## webpack
For packaging
* npm install --save-dev webpack webpack-node-externals

## nodemon 
For hot deployments
* npm install --save-dev nodemon

## cors && express
Node stuff
* npm install --save cors express

## isomorphic stuff
For isomorphic js code: fetchs js from the browser as well as from the server
* npm install --save isomorphic-fetch

## react
React packages, including router
* npm install --save react react-dom react-router-dom

## serializing 
Serialize response from the server
* npm install --save  serialize-javascript

