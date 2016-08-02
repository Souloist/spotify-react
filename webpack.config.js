var webpack = require("webpack");
var path = require("path");

var PATHS = {
    "app": "./src/index.js",
    "dist": path.join(__dirname, "build")
};

module.exports = {
    "entry": {
        "javascript": PATHS.app
    },
    "output": {
        "path": PATHS.dist,
        "publicPath": "/",
        "filename": "bundle.js"
    },
    "devServer": {
        "contentBase": PATHS.dist
    }
};
