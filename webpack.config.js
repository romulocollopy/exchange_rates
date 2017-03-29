var path = require('path');
var webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env) {
    return {
        entry: {
            main: path.resolve(__dirname, 'static_src/js/app.js'),
            vendor: ['highcharts', 'jquery', 'moment', 'lodash']
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'project/static/js')
        },
        plugins: [
            new UglifyJSPlugin(),
            new webpack.optimize.CommonsChunkPlugin(
                {name: "vendor", filename:"vendor.bundle.js",
                    minChunk: "infinity"})
          ]
    }
}
