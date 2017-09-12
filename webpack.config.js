let webpack = require('webpack'),
    path    = require('path'),
    isDev   = process.env['NODE_ENV'] !== 'production';

let config = {
    entry  : {
        main: './js/entry/main.js'
    },
    output : {
        path         : path.join(__dirname, '/js/bundle'),
        filename     : '[name].js',
        publicPath   : '/js/bundle/',
        chunkFilename: '[id].[name].js',
    },
    resolve: {
        modules: [
            path.join(__dirname, '/modules'),
            'node_modules'
        ]
    },
    module : {
        rules: [
            {
                test: /\.(jade|pug)$/,
                use : ['pug-loader']
            },
            {
                test: /\.(html|svg)$/,
                use : ['html-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use : [
                    {
                        loader : 'url-loader',
                        options: {
                            name: '[name]-[hash:6].[ext]',
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test   : /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use    : ['babel-loader'],
            },
            {
                test: /\.scss$/,
                use : [
                    'style-loader',
                    {
                        loader : 'css-loader',
                        options: {
                            sourceMap    : isDev && true,
                            importLoaders: 2
                        }
                    },
                    {
                        loader : 'postcss-loader',
                        options: {
                            sourceMap: isDev && true
                        }
                    },
                    {
                        loader : 'sass-loader',
                        options: {
                            sourceMap: isDev && true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use : [
                    'style-loader',
                    {
                        loader : 'css-loader',
                        options: {
                            sourceMap: isDev && true
                        }
                    },
                ]
            }
        ]
    }
};

if(isDev){
    config.watch   = true;
    config.devtool = 'inline-source-map'; // inline-source-map // eval-inline-source-map
}

module.exports = config;