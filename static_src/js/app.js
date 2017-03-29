var Highcharts = require('highcharts');
var $ = require('jquery');
var _ = require('lodash');

const CURRENCY_KEYS = {
    'BRL': {name: 'Brazilian Reais', quote_name: "brl"},
    'EUR': {name: 'Euros', quote_name: "eur"},
    'ARS': {name: 'Pesos Argentinos', quote_name: "ars"}
};


function ChartView(){
    var self = this;
    self.setButtonActions();
    self.fetchAPIData();
}

ChartView.prototype.getData = function(){
    var self = this;
    return _.mapValues(CURRENCY_KEYS, function(o){
        return {
            name: o.name,
            data: _.map(self.apiData, function(n) {
                return [ n.timestamp * 1000, n[o.quote_name] ]
            })
        }
    });
}

ChartView.prototype.setButtonActions = function(){
    var self = this;
    $('#chartContainer button').click(function(e){
        e.preventDefault();
        if (!!self.chart){
            self.chart.destroy();
        }
        var id = $(this).attr('id');
        self.plotChart(id)
    });
}

ChartView.prototype.onSuccess = function(){
    var self = this;
    return function(data){
        self.apiData = _.sortBy(data, function(o){return o.timestamp});
        self.data = self.getData();
        self.plotChart();
    }
}

ChartView.prototype.fetchAPIData = function(){
    var self = this;
    $.ajax({
        url: '/api/',
        dataType: 'json',
        success: self.onSuccess(),
    });
};

ChartView.prototype.plotChart = function (currency_key){
    var self = this;
    currency_key = currency_key || "BRL";
    var currency = self.data[currency_key];
    self.chart = Highcharts.chart(chart, {
        chart: {
        },
        title: {
            text: 'USD to ' + currency.name + ' exchange rate over time'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Exchange rate'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'USD to ' + currency.name,
            data: currency.data
        }]
    });
}

chartView = new ChartView();
