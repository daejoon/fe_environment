const path = require("path")
const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        main: "./src/app.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve("./dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [path.resolve('./myloader.js')]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        publicPath: './dist',
                        name: "[name].[ext]?[hash]",
                        limit: 5000
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}
