const webpack = require('webpack');

module.exports = {
    entry: {
        'vuejs-laravel-pagination': './src/index.js',
    },
    output: {
        filename: './dist/[name].js',
        library: 'VueLaravelPagination',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    cacheDirectory: true,
                },
            },
        ],
    },
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
    ]);

    module.exports.output.filename = module.exports.output.filename.replace(/\.js$/, '.min.js');
}
