var webpack = require("webpack");
var path = require("path");

var PATHS = {
    "app": "./src/jsx/App.jsx",
    "html": "/src/index.html",
    "css": "/src/css/",
    "dist": path.join(__dirname, "build")
};

var loaders = [
    "react-hot-loader",
    "babel-loader",
];

var config = {
    "entry": {
        "javascript": PATHS.app
    },
    "output": {
        "path": PATHS.dist,
        "publicPath": "/",
        "filename": "bundle.js"
    },
    "devServer": {
        "open": true, // open local server in browser
        "contentBase": PATHS.dist
    },
    "module": {
        "rules": [
            {
                "enforce": "pre",
                "test": /\.(js|jsx)$/,
                "loader": "eslint-loader",
                "exclude": /(node_modules)/,
                "options": {
                    "emitWarning": true
                }
            },
            {
                "test": /\.html$/,
                "loader": "file?name=[name].[ext]"
            },
            {
                "test": /\.css$/,
                "loader": "file?name=[name].[ext]"
            },
            {
                "test": /\.(js|jsx)$/,
                "exclude": /(node_modules)/,
                "loaders": loaders
            }
        ]
    },
    "resolve": {
        "extensions": [".js", ".jsx"]
    }
};

module.exports = config
