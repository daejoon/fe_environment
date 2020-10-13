const path = require("path")

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
                use: ["css-loader"]
            }
        ]
    }
}
