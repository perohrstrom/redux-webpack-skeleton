# redux-webpack-skeleton

### This skeleton's server and webpack configuration are based off of Urbanvikingr's [.babelrc](https://gist.github.com/urbanvikingr/942cc9e0d331331a9dcebd5a6be99c6e) gist.

In addition to the modules installed in that gist, you will also need to perform the following command line entries.
```npm i --save redux react-redux redux-thunk```
```npm i --save babel-polyfill```
```webpack```
```npm start```
```
This app has the very basic rending of a redux app. It has 3 Action Creators:

"addFriend" and "removeFriend", and "handleChange" for when you key in a new Friend's name.

Customizing the folder hierarchy is fair game, but be sure to update your directory locations on JS files where you are importing them from.

Don't worry - your browser console will also do a decent job providing error messaging.
