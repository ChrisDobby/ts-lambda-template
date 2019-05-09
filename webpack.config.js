const path = require("path");
const webpack = require("webpack");

const GLOBALS = {
    "process.env": {
        NODE_ENV: JSON.stringify("production"),
    },
};

module.exports = {
    mode: "production",
    entry: "./src/index",
    target: "node",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.js",
        libraryTarget: "commonjs",
    },
    plugins: [new webpack.DefinePlugin(GLOBALS)],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: "babel-loader",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".ts"],
    },
};
