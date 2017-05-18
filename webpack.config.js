const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

const PATHS = {
    app: "./src/jsx/App.jsx",
    html: "./src/index.html",
    dist: path.resolve(__dirname, "build")
};

const loaders = [
    "react-hot-loader",
    "babel-loader",
];

const plugins = [
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
    }),
    new HtmlWebpackPlugin({
        template: PATHS.html,
        filename: "index.html", // path in build folder
        inject: "body",
    }),
    new ExtractTextPlugin("/css/bundle.css"),
]

const config = {
    entry: PATHS.app,
    output: {
        path: PATHS.dist,
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        open: true, // open local server in browser
        contentBase: PATHS.dist
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: "pre",
                loader: "eslint-loader",
                exclude: /node_modules/,
                options: {
                    emitWarning: true
                }
            },
      	    {
		test: /\.css$/,
      		loader: ExtractTextPlugin.extract({
        	    fallback: "style-loader",
        	    use: "css-loader",
      		})
	    },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: loaders
            }
        ]
    },
    plugins: plugins,
    resolve: {
        extensions: [".js", ".jsx"],
        modules: [
            path.resolve("./src/jsx"),
            path.resolve("./node_modules"),
        ]
    }
};

module.exports = config
