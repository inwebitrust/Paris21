<template>
  <div class="highcharts_timeseries">
    <div class="highcharts_container" :id="chartID" ></div>
  </div>
</template>

<script>
import axios from 'axios'
import {_} from 'underscore'

export default {
  props: {
    chartID: {
      type: String,
      default: function () {
        return 'Timeseries'
      }
    },
    timeseriesData: {
      type: Array,
      default: function () {
        return []
      }
    },
    timeseriesCategories: {
      type: Array,
      default: function () {
        return []
      }
    },
    datavizType: {
      type: String,
      default: function () {
        return ''
      }
    },
    seriesParams: {
      type: Object,
      default: function () {
        return {
          color: '#8C8C8C',
          axisColor: '#8C8C8C',
          min:undefined,
          max:undefined,
          suffixY:''
        }
      }
    }
  },
  data: function () {
    return {
      timeseriesHigcharts: '',
      chartColors:['#307ABF', '#036463', '#149E9D', '#19A5CC', '#585CA3', "#B55CA3", "#BD7E4D", "F5992B", "#D9AD48", "#EA6651"]
    }
  },
  mounted () {
    var self = this
    this.generateChart()
  },
  methods: {
    generateChart: function () {
      var self = this
    },

    updateTimeseries: function () {
      var self = this

      var isShared = true

      if(this.datavizType == 'binary' || this.datavizType == 'ordinal'){
        this.seriesParams.max = 100
        this.seriesParams.suffixY = '%'
      }

      this.timeseriesHigcharts = new Highcharts.chart({
        chart: { renderTo: self.chartID, backgroundColor:'transparent', type: 'spline'},
        title: { text: '' },
        subtitle: { text: '', enabled: false },
        colors: this.chartColors,
        xAxis: {
          lineColor: this.seriesParams.axisColor,
          gridLineColor: this.seriesParams.axisColor,
          tickColor: this.seriesParams.axisColor,
          tickWidth: 0,
          categories: this.timeseriesCategories,
          labels: {
            style: {
              color: this.seriesParams.axisColor,
              fontSize: "12px"
            }
          }
        },
        yAxis: {
          title: { enabled: false },
          lineColor: this.seriesParams.axisColor,
          gridLineColor: this.seriesParams.axisColor,
          tickColor: this.seriesParams.axisColor,
          min:this.seriesParams.min,
          max:this.seriesParams.max,
          labels: {
            style: {
              color: this.seriesParams.axisColor,
              fontSize: "12px"
            },
            formatter:function(){
              return this.value + '' + self.seriesParams.suffixY
            }
          }
        },
        tooltip: {
          useHTML: true,
          enabled: true,
          shared:isShared,
          backgroundColor: 'transparent',
          borderWidth: 0,
          borderColor: 'transparent',
          padding: 0,
          style: {
            width: '200px'
          },
          formatter: function() {
            var tooltipHTML = '<div class="tooltip_content"><div class="tooltip_year">'+this.x+'</div>'
            _.each(this.points, function(p) {
              var tooltipY = p.y.toFixed(1) + ' ' + self.seriesParams.suffixY
              tooltipHTML += '<div class="tooltip_geo"><span class="geo_name" style="color:'+self.chartColors[p.colorIndex]+'">'+p.series.name+' :</span><span class="geo_value">'+tooltipY+'</span></div>'
            })
            tooltipHTML += '</div>'
            return tooltipHTML
          }
        },
        credits: { enabled: false },
        legend: { enabled: false },
        plotOptions: {
            series: {
              lineWidth: 3,
              connectNulls: true,
              label: {
                  connectorAllowed: false
              },
              marker: {
                enabled: false
              },
            }
        },
        series: this.timeseriesData

      });
    }
  },
  watch: {
    timeseriesData: function(obj){
      this.updateTimeseries()
    }
  }
}
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";
@import "~assets/scss/_browsers.scss";

.highcharts_timeseries{
  .highcharts_container{
    width: 90%;
    height: 350px;
    position: relative;
    left: 50%;
    @include transform(translate(-50%, 0));

    .highcharts-yaxis-grid{
      stroke-dasharray:3px;
    }
  }
}

.highcharts-axis-labels{
  position: relative;
  text{
    font-family: "montserratbold";
  }
}

.highcharts-tooltip{
  text-align: center;
  .tooltip_content{
    text-align: center;
    .tooltip_year{
      font-size: 12px;
      color: #2F2F2F;
      font-family: "montserratitalic";
    }
    .tooltip_geo{
      font-size: 12px;
      color: #2F2F2F;
      font-family: "montserratbold";
      background: transparent;
      margin: 2px 0;
      border-radius: 0;
      box-shadow: none;
      .geo_name{
        display: inline-block;
        vertical-align: top;
        background: transparent;
        border-radius: 0;
        box-shadow: none;
      }
      .geo_value{
        display: inline-block;
        vertical-align: top;
        background: transparent;
        border-radius: 0;
        box-shadow: none;
      }
    }
  }
}
</style>
