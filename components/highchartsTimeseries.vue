<template>
  <div class="highcharts_timeseries">
    <div class="highcharts_container" :id="chartID" ></div>
  </div>
</template>

<script>
import axios from 'axios'
import {_} from 'underscore'
import * as UTILS from '~/commons/utils/index.js'

export default {
  props: {
    chartID: {
      type: String,
      default: function () {
        return 'Timeseries'
      }
    },
    indicatorID: {
      type:String,
      default: function () {
        return ''
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
      chartColors:['#307ABF', '#036463', '#149E9D', '#19A5CC', '#585CA3', "#B55CA3", "#BD7E4D", "F5992B", "#D9AD48", "#EA6651"],
      foundSpecificIndicator: '',
      specificLabelsObj: {}
    }
  },
  mounted () {
    var self = this

    this.foundSpecificIndicator = _.find(UTILS.specificIndicators, function (indic) {
      return self.indicatorID == indic.id;
    })
    if(this.foundSpecificIndicator !== undefined) {
      _.each(this.foundSpecificIndicator.labels, function(indicLabel){
        self.specificLabelsObj[indicLabel.value] = indicLabel;
      })
    }

    this.generateChart()
  },
  methods: {
    generateChart: function () {
      var self = this
    },

    updateTimeseries: function () {
      var self = this

      var isShared = true
      var yAxisCategories = undefined

      if(this.datavizType == 'binary'){
        this.seriesParams.max = 100
        this.seriesParams.min = 0
        this.seriesParams.suffixY = '%'
      } else if(this.datavizType == 'ordinal') {
        console.log("timeseriesData", this.timeseriesData)
        if(this.foundSpecificIndicator == undefined) {
          yAxisCategories = [0,1];
        } else {
          yAxisCategories = _.map(this.foundSpecificIndicator.labels, function (lbl){
            return parseFloat(lbl.value)
          })
        }
        this.seriesParams.min = yAxisCategories[0];
        this.seriesParams.max = yAxisCategories[yAxisCategories.length-1];
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
          tickPositions:yAxisCategories,
          labels: {
            style: {
              color: this.seriesParams.axisColor,
              fontSize: "10px",
            },
            useHTML: true,
            formatter:function(){
              if(self.datavizType == 'ordinal'){
                var yAxisValue = this.value;
                if(self.specificLabelsObj[this.value.toFixed(1)] !== undefined) yAxisValue = self.specificLabelsObj[this.value.toFixed(1)].label
                return "<span class='yaxis_value'>" + yAxisValue + "</span>"
              }
              else if(self.datavizType == 'binary'){
                return ''
              } 
              return "<span class='yaxis_value'>" + this.value + "" + self.seriesParams.suffixY + "</span>"
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
              if(self.datavizType == 'ordinal') {
                var fixedOrdinalIndex = parseFloat(p.y).toFixed(1);
                if(self.specificLabelsObj[fixedOrdinalIndex] !== undefined) {
                  tooltipY = self.specificLabelsObj[fixedOrdinalIndex].label
                }
              }
              
              tooltipHTML += '<div class="tooltip_geo"><span class="geo_name" style="color:'+self.chartColors[p.colorIndex]+'">'+p.series.name+':</span> <span class="geo_value">'+tooltipY+'</span></div>'
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
                enabled: false,
                symbol: 'circle'
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

  .yaxis_value{
    color: #8C8C8C;
    font-weight: 700;
  }
}

.highcharts-axis-labels{
  position: relative;
  text{
    font-family: "montserratbold";
  }
}

.highcharts_timeseries{
  .highcharts-tooltip{
    text-align: left;
    .tooltip_content{
      text-align: left;
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
          padding: 0 !important;
        }
        .geo_value{
          display: inline-block;
          vertical-align: top;
          background: transparent;
          border-radius: 0;
          box-shadow: none;
          padding: 0 !important;
        }
      }
    }
  }
}
</style>
