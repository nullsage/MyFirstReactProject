let HTMLWebpackPlugin = require('html-webpack-plugin');
let HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: '/index.html'
});

module.exports = {
    mode: 'development',
    entry: __dirname + '/app/index.js',
    devServer: {
        contentBase: __dirname + '/app',
        compress: true,
        port: 9000
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
    plugins: [HTMLWebpackPluginConfig]
};
