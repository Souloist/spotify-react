var webpack = require("webpack");
var path = require("path");

var PATHS = {
    "app": "./src/index.js",
    "dist": path.join(__dirname, "build")
};

var plugins = []

plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = {
    "entry": {
        "javascript": PATHS.app
    },
    "output": {
        "path": PATHS.dist,
        "publicPath": "/",
        "filename": "bundle.js"
    },
    "plugins": plugins,
    "devServer": {
        "contentBase": PATHS.dist
    }
};
