let HTMLWebpackPlugin = require('html-webpack-plugin');
let StylableWebpackPlugin = require('@stylable/webpack-plugin');

const styleableProduction = {
    outputCSS: true,
    includeCSSInJS: true,
    optimize: {
      removeUnusedComponents: true,
      removeComments: true,
      removeStylableDirectives: true,
      classNameOptimizations: false,
      shortNamespaces: false,
      minify: true
    }
};

module.exports = {
    mode: 'development',
    entry: __dirname + '/app/index.js',
    devServer: {
        contentBase: __dirname + '/app',
        compress: true,
        port: 8080,
        host: '0.0.0.0',
        disableHostCheck: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/app'
    },
    plugins: [new StylableWebpackPlugin(styleableProduction)],
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".jsx", ".json"]
    }
};
