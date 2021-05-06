const path = require('path'); 
// const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // doubt i will need this... 
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin'); // ditto

module.exports = {
    target: 'node', 
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'), 
        filename: 'bundle.js',
    },
    mode: process.env.NODE_ENV || 'development',
    module: {
        rules: [
            {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader', 
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    
                    // plugins: [
                    //     '@babel/plugin-transform-runtime',
                    // ]
                }}
            },
            {
            test: /\.s[ac]ss$/i,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader',]
            },
        ]  
    },
    devServer: {
        port: 8080,
        publicPath: '/build',
        proxy: {
            '/api/**': 'http://localhost:3000',
        },
        hot: true,
    },
};