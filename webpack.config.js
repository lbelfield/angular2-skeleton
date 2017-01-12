//var webpack = require('webpack');

module.exports = {
    entry: {
        "main": "./js/main.js",
        "vendor": "./js/vendor.js"
    },
    output: {
        path: "./dist",
        filename: "[name]-bundle.js"
    },
    module: {
        loaders: [
        {
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["es2015"]
            }
        },
        {
            test: /\.html$/,
            loader: 'html?minimize=false'
        }
        ]
    }
}
        
    //     ,{
    //         test: /\.css$/,
    //         loader: 'style-loader'
    //     }, 
    //     {
    //         test: /\.css$/,
    //         loader: 'css-loader',
    //         query: {
    //             modules: true,
    //             localIdentName: '[name]__[local]___[hash:base64:5]'
    //         }
    //     },
    //     {
    //         test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
    //         loader: 'url-loader?limit=10000',
    //     }, 
    //     {
    //         test: /\.(eot|ttf|wav|mp3)$/,
    //         loader: 'file-loader',
    //     }
    //     ]
    // },
    // plugins: [
    //     new webpack.ProvidePlugin({   
    //         jQuery: 'jquery',
    //         $: 'jquery',
    //         jquery: 'jquery'
    //     })
    // ]
