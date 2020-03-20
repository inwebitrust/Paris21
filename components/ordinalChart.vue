<template>
  <div>
    <div class="highcharts_ordinal" :class="(hasData) ? 'displayed': ''">
      <div class="highcharts_container" :id="chartID"></div>
    </div>

    <div class="ordinal_nodata" :class="(!hasData) ? 'displayed': ''">
      No data for this group of countries
    </div>
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
        return 'OrdinalChart'
      }
    },
    indicatorID: {
      type: String, 
      default: function () {
        return ''
      }
    },
    geoID: {
      type: String, 
      default: function () {
        return ''
      }
    },
    ordinalData: {
      type: Array,
      default: function () {
        return []
      }
    },
    geoGroups: {
      type: Array,
      default: function () {
        return []
      }
    },
    chartType: {
      type: String,
      default: function () {
        return 'areachart'
      }
    }
  },
  data: function () {
    return {
      timeseriesHigcharts: '',
      areaChart: '',
      ordinalColors: ['#F7CC3D', '#EC9A3A', '#E87D00', '#EA6651', '#B45747'],
      foundSpecificIndicator: '',
      specificLabelsObj: {},
      totalGeo: 0,
      hasData: true,
    }
  },
  mounted () {
    var self = this
    
    this.foundSpecificIndicator = _.find(UTILS.specificIndicators, function (indic) {
      return self.indicatorID == indic.id;
    })
    console.log("foundSpecificIndicator", this.foundSpecificIndicator)
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
      
      if(this.ordinalData.length > 0) {
        if(this.chartType == "areachart") {
          this.generateAreaChart();
        } else {
          this.generateBarsChart();
        }
      }
    },

    generateAreaChart: function (){
      var self = this;
      var areaCategories = _.keys(this.ordinalData[0].years)
      var geoGroup = _.find(this.geoGroups, function (geoGroup){
        return geoGroup["1"] == self.geoID;
      })
      
      //self.totalGeo = 100;
      self.totalGeo = parseInt(geoGroup.count, 10);

      var areaSeriesObj = {"nodata":{name:"No data", data:[], color:"#8C8C8C"}};
      var incYear = 0;
      _.each(this.ordinalData[0].years, function (yearStringData, year){
        var dataObj = JSON.parse(yearStringData.replace('"."', '","'));
        var totalValuesPerYear = 0;
        _.each(dataObj, function (ordinalData){
          var fixedValue = parseFloat(ordinalData.value).toFixed(1)

          var areaName = ordinalData.value;
          if(self.specificLabelsObj[fixedValue] !== undefined) areaName = self.specificLabelsObj[fixedValue].label
          if(areaSeriesObj[fixedValue] == undefined) {
            areaSeriesObj[fixedValue] = {
              name: areaName,
              data: []
            }
          }
          areaSeriesObj[fixedValue].data[incYear] = ordinalData.nb;
          totalValuesPerYear += ordinalData.nb
        })
        areaSeriesObj["nodata"].data[incYear] = self.totalGeo - totalValuesPerYear;
        incYear += 1;
      });

      _.each(areaSeriesObj, function (serieObj){
        serieObj.data = _.map(serieObj.data, function (dateValue){
          if(dateValue == undefined) return 0;
          return dateValue;
        })
      })

      var areaSeries = [];
      var incLabel = 0;
      console.log("areaSeriesObj", areaSeriesObj)
      _.each(this.specificLabelsObj, function (labelObj){
        console.log("labelObj", labelObj)
        var seriesItem = areaSeriesObj[labelObj.value];
        if(seriesItem !== undefined) {
          console.log("incLabel", incLabel, self.ordinalColors)
          seriesItem.color = self.ordinalColors[incLabel];
          areaSeries.push(seriesItem);
        }
        incLabel += 1;
      });
      areaSeries.push(areaSeriesObj["nodata"]);


      this.areaChart = Highcharts.chart({
          chart: {
              renderTo: self.chartID,
              type: 'area'
          },
          title: {
              text: ''
          },
          xAxis: {
              categories: areaCategories,
              tickmarkPlacement: 'on',
              title: {
                  enabled: false
              }
          },
          yAxis: {
              min:0,
              max:100,
              labels: {
                  format: '{value}%'
              },
              title: {
                  enabled: false
              }
          },
          credits:{ enabled: false},
          tooltip: {
              useHTML:true,
              shared: true,
              formatter: function (){
                var htmlItems = '';
                var totalWithData = 0;
                var totalData = 0;
                _.each(this.points, function (pointData, inc){
                  if(pointData.series.name !== "No data")totalWithData += pointData.y;
                  var pointPct = ((pointData.y/pointData.total) * 100).toFixed(1);
                  totalData = pointData.total;
                  htmlItems += '<div class="tooltip_item"><span class="item_chip" style="background-color:'+pointData.color+';"></span>'+pointData.series.name+' <span class="item_value">'+pointPct+'%</span></div>'
                });

                var html = '<div class="tooltip_year">'+this.x+'</div><div class="tooltip_geo">'+self.ordinalData[0].name+'</div><div class="tooltip_available">'+totalWithData+' countries out of '+totalData+'</div>';

                html = '<div class="ordinal_tooltip">' + html + htmlItems + '</div>';
                return html;
              }
          },
          plotOptions: {
              area: {
                  stacking: 'percent',
                  lineWidth: 0,
                  marker: {
                      enabled: false,
                      symbol: "circle",
                  },
              }
          },
          series: areaSeries
      });
    },

    generateBarsChart: function () {
      var self = this
      var yearKeys = _.keys(this.ordinalData[0].years);
      this.lastYear = yearKeys[yearKeys.length - 1];

      this.barsCategories = _.map(this.ordinalData, function (geoData){
        return geoData.name;
      });

      var barsSeriesObj = {"nodata":{name:"No data", data:[], color:"#8C8C8C"}};
      var incCateg = 0;
      _.each(this.ordinalData, function (geoData){

        var geoGroup = _.find(self.geoGroups, function (geoGroup){
          return geoGroup["1"] == geoData.m49;
        })
        //var totalGeo = 100;
        var totalGeo = parseInt(geoGroup.count, 10);

        var dataObj = JSON.parse(geoData.years[self.lastYear].replace('"."', '","'));
        var totalValuesPerYear = 0;
        _.each(dataObj, function (ordinalData){
          var fixedValue = parseFloat(ordinalData.value).toFixed(1)
          var areaName = ordinalData.value;
          if(self.specificLabelsObj[fixedValue] !== undefined) areaName = self.specificLabelsObj[fixedValue].label

          if(barsSeriesObj[fixedValue] == undefined) {
            barsSeriesObj[fixedValue] = {
              name: areaName,
              data: []
            }
          }
          barsSeriesObj[fixedValue].data[incCateg] = ordinalData.nb;
          totalValuesPerYear += ordinalData.nb
        })
        barsSeriesObj["nodata"].data[incCateg] = totalGeo - totalValuesPerYear;
        incCateg += 1;
      });

      _.each(barsSeriesObj, function (serieObj){
        serieObj.data = _.map(serieObj.data, function (dateValue){
          if(dateValue == undefined) return 0;
          return dateValue;
        })
      })

      var barsSeries = [];
      var incLabel = 0;
      console.log("specificLabelsObj", this.specificLabelsObj)
      console.log("barsSeriesObj", barsSeriesObj)
      _.each(this.specificLabelsObj, function (labelObj){
        console.log("labelObj", labelObj)
        var seriesItem = barsSeriesObj[labelObj.value];
        if(seriesItem !== undefined) {
          seriesItem.color = self.ordinalColors[incLabel];
          barsSeries.push(seriesItem);
        }
        incLabel += 1;
      });
      barsSeries.push(barsSeriesObj["nodata"]);

      this.barsChart = Highcharts.chart({
        chart: {
          renderTo: self.chartID,
          type: 'column'
        },
        title: {
            text: ''
        },
        credits:{enabled: false},
        xAxis: {
            categories: self.barsCategories
        },
        yAxis: {
            min: 0,
            labels: {
                format: '{value}%'
            },
            title: {
                enabled: false
            }
        },
        tooltip: {
            useHTML:true,
            shared: true,
            formatter: function (){
              var htmlItems = '';
              var totalWithData = 0;
              var totalData = 0;
              _.each(this.points, function (pointData, inc){
                if(pointData.series.name !== "No data")totalWithData += pointData.y;
                var pointPct = ((pointData.y/pointData.total) * 100).toFixed(1);
                totalData = pointData.total;
                htmlItems += '<div class="tooltip_item"><span class="item_chip" style="background-color:'+pointData.color+';"></span>'+pointData.series.name+' <span class="item_value">'+pointPct+'%</span></div>'
              });

              var html = '<div class="tooltip_year">'+self.lastYear+'</div><div class="tooltip_geo">'+this.x+'</div><div class="tooltip_available">'+totalWithData+' countries out of '+totalData+'</div>';

              html = '<div class="ordinal_tooltip">' + html + htmlItems + '</div>';
              return html;
            }
        },
        plotOptions: {
            column: {
                stacking: 'percent',
            }
        },
        series: barsSeries
      })
    },

    updateOrdinalChart: function () {
      var self = this
    }
  },
  watch: {
    ordinalData: function(obj){
      console.log("watch ordinalData", this.ordinalData);
      if(this.ordinalData.length == 0) {
        this.hasData = false
      } else {
        this.hasData = true
        this.generateChart();
      }
    },

    selectedOrdinalRegionSolo: function(){
      console.log("watch selectedOrdinalRegionSolo", this.selectedOrdinalRegionSolo)
    }
  }
}
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";
@import "~assets/scss/_browsers.scss";

.highcharts_ordinal{
  display: none;
  &.displayed{
    display: block;
  }
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

.ordinal_nodata{
  color: #aaa;
  font-size: 20px;
  line-height: 140px;
  height: 140px;
  width: 100%;
  color: $colorRed;
  text-align: center;
  display: none;
  &.displayed{
    display: block;
  }
}

.ordinal_tooltip{
  background: #fff;
  text-align: left;
  padding: 10px;
  .tooltip_year{
    font-family: 'montserratitalic';
    font-size: 12px;
  }
  .tooltip_geo{
    font-family: 'montserratbold';
    font-size: 12px;
  }
  .tooltip_available{
    font-family: 'montserratbold';
    color: #8C8C8C;
    font-size: 10px;
  }
  .tooltip_item{
    display: block;
    font-size: 12px;
    position: relative;
    padding-left: 20px;
    .item_chip{
      width: 14px;
      height: 14px;
      border-radius: 14px;
      display: inline-block;
      position: absolute;
      left: 0px;
      padding: 0px;
      top: 50%;
      background: #8C8C8C;
      @include transform(translate(0, -50%));
    }
    .item_wdata:first-letter{
      text-transform: capitalize;
    }
    .item_value{
      background: none;
      display: inline;
      padding: 0px;
      box-shadow: 0px 0px 0px 0px;
      font-family: 'montserratbold';
    }
  }
}
</style>
