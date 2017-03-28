var path = require('path');

module.exports = function(env) {
    return {
        entry: {
            main: path.resolve(__dirname, 'static_src/js/app.js'),
            vendor: 'highcharts'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'project/static/js')
        }
    }
}