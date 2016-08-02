var webpack = require("webpack");
var path = require("path");

var PATHS = {
    "app": "./src/index.js",
    "dist": path.join(__dirname, "build")
};

var plugins = []

plugins.push(new webpack.HotModuleReplacementPlugin());

var loaders = ["react-hot"]

loaders.push("babel-loader")

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
    },
    "module": {
        "loaders": [
            {
                "test": /\.html$/,
                "loader": "file?name=[name].[ext]"
            },
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "loaders": loaders
            }
        ]
    }
};
