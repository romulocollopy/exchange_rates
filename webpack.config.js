var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env) {
    return {
        entry: {
            main: path.resolve(__dirname, 'static_src/js/app.js'),
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'project/static/js')
        },
        plugins: [
            new UglifyJSPlugin()
          ]
    }
}
