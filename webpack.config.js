var path = require('path');
var webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env) {
    return {
        entry: {
            main: path.resolve(__dirname, 'static_src/js/app.js'),
            highcharts: 'highcharts',
            jquery: 'jquery',
            lodash: 'lodash',
            moment: 'moment'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'project/static/js')
        },
        plugins: [
            new UglifyJSPlugin(),
            new webpack.optimize.CommonsChunkPlugin(
                {names: ["highcharts", "jquery", "lodash", "moment"]}
            )
          ]
    }
}
