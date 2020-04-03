<template>
  <div class="highmaps_areas" :data-mapcolor="mapColor">
    <div class="highmaps_container" :id="mapID" style="z-index:100;"></div>
  </div>
</template>

<script>
import axios from 'axios'
import {_} from 'underscore'
import * as UTILS from '~/commons/utils/index.js'

export default {
  props: {
    mapID: {
      type: String,
      default: function () {
        return 'MapContainer'
      }
    },
    geojsonID: {
      type: String,
      default: function () {
        return ''
      }
    },
    areasData: {
      type: Array,
      default: function () {
        return []
      }
    },
    hoveredArea: {
      type: String,
      default: function() {
        return ''
      }
    },
    mapYear: {
      type: String,
      default: function () {
        return '2017'
      }
    },
    mapZoomFactor: {
      type: Number,
      default: function () {
        return 1
      }
    },
    mapZoom: {
      type: Number,
      default: function () {
        return 50
      }
    },
    mapZoomDefault: {
      type: Boolean,
      default: function () {
        return true
      }
    },
    specificWidth: {
      type:Number,
      default:function () {
        return undefined
      }
    },
    modaled: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    selectedAreas: {
      type: Array,
      default: function () {
        return []
      }
    },
    categoriesNb: {
      type: Number,
      default: function () {
        return 5
      }
    },
    mapColor: {
      type: String,
      default: function () {
        return 'green'
      }
    },
    indicatorType: {
      type: String,
      default: function () {
        return ''
      }
    },
    indicatorID: {
      type: String,
      default: function () {
        return ''
      }
    },
    dataClasses: {
      type:Array,
      default: function () {
        return []
      }
    },
    hasTooltipValues: {
      type: Boolean,
      default: function () {
        return true
      }
    }
  },
  data: function () {
    return {
      mapHighmaps: '',
      mapHighmapsBg: '',
    }
  },
  mounted () {
    var self = this
    this.generateMap()
  },
  methods: {

    generateMap: function () {
      var self = this

      var nullColor = '#ededed'
      if(this.mapColor == 'green') nullColor = '#a1d8d8'
      else if(this.mapColor == 'darkgrey') nullColor = '#8c8c8c'

      this.mapHighmaps = new Highcharts.mapChart({
        chart: { 
          renderTo: self.mapID,
          spacing: [0, 0, 0, 0],
          backgroundColor: 'transparent',
          animation: false,
          map: self.geojsonID,
          width: self.specificWidth
        },
        colorAxis: {
          dataClasses: this.dataClasses
        },
        colors:['#F7CC3D', '#EC9A3A', '#E87D00', '#EA6651', '#B45747'],
        mapNavigation: { enabled: true },
        title: { text: '' },
        legend: { enabled: false },
        credits: {enabled: false},
        tooltip: {
          useHTML: true,
          backgroundColor: 'transparent',
          borderWidth: 0,
          borderColor: 'transparent',
          padding: 0,
          style: {
            width: '200px'
          },
          formatter: function () { 
            var that = this
            var pointValue = 'no data'
            if(this.point.value !== 'no data') {
              if(self.indicatorType == 'binary') {
                pointValue = this.point.value
                if(pointValue == '1' || pointValue == 1) pointValue = 'Yes'
                else pointValue = 'No'
              } else if(self.indicatorType == 'text'){
                pointValue = this.point.value
                var foundSpecificIndicator = _.find(UTILS.specificIndicators, function (indic) {
                  return self.indicatorID == indic.id;
                })
                if(foundSpecificIndicator !== undefined) {
                  var foundValue = _.find(foundSpecificIndicator.labels, function (lb) {
                    return lb.value == that.point.value;
                  });
                  if(foundValue !== undefined) {
                    pointValue = foundValue.label
                  }
                }
              } else {
                var foundSpecificIndicator = _.find(UTILS.specificIndicators, function (indic) {
                  return self.indicatorID == indic.id;
                })
                if(foundSpecificIndicator !== undefined) {
                  var foundValue = _.find(foundSpecificIndicator.labels, function (lb) {
                    return lb.value == that.point.value.toFixed(1);
                  });

                  if(foundValue !== undefined) {
                    pointValue = foundValue.label
                  } else {
                    pointValue = this.point.value.toFixed(1)
                  }
                } else {
                  pointValue = this.point.value.toFixed(1)
                }
              }
            }

            var tooltipHTML = '<div class="tooltip_geo">'+this.point.name+'</div>'

            if(self.hasTooltipValues) {
              tooltipHTML = '<div class="tooltip_content"><div class="tooltip_year">'+self.mapYear+'</div>' + tooltipHTML
              tooltipHTML += '<div class="tooltip_value" style="color:'+this.color+';">'+pointValue+'</div>'
            } else {
              tooltipHTML = '<div class="tooltip_content">' + tooltipHTML
            }

            tooltipHTML += '</div>'
            return tooltipHTML
          }
        },
        series: [{
          name: 'Basemap',
          joinBy: ['iso-a2', 'code'],
          keys: ['name', 'code'],
          data: [],
          borderColor: '#fff',
          borderWidth: 0.5,
          nullColor: nullColor,
          point: {
            events: {
              click: function (e) {
                self.selectGeo(e.point.dbISO)
              }
            }
          }
        }]
      })
    },

    updateMapAreas: function () {
      var areasDataCopy = JSON.parse(JSON.stringify(this.areasData))
      var dataClassesCopy = JSON.parse(JSON.stringify(this.dataClasses))

      console.log("dataClasses", this.dataClasses)

      if(this.indicatorType !== 'binary') {
        this.mapHighmaps.axes[2].update({
            dataClasses: dataClassesCopy
        })
      }

      this.mapHighmaps.series[0].update({
        data: areasDataCopy
      })

      this.mapHighmaps.mapZoom()
    },

    exportMap:function(filetype){
      var mapTitle = 'title';
      var mapSubtitle = 'subtitle';
      this.mapHighmaps.update({
          exporting: {
              chartOptions: {
                  title: {
                      text: mapTitle,
                  },
                  subtitle:{
                      text: mapSubtitle
                  }
              }
          }
      });
      if(filetype == "pdf"){
          this.mapChart.exportChart({
              type:"application/pdf",
              filename:'map'
          });
      }else{
          this.mapChart.exportChart({
              type:"image/png",
              filename:'map'
          });
      } 
    },

    selectGeo: function (dbISO) {
      this.$parent.selectedGeoFromMap = dbISO
      this.$emit('selectGeoFromMap')
    }
  },

  watch: {
    areasData: function(obj){
      this.updateMapAreas()
    },

    dataClasses: function (obj) {
      this.updateMapAreas()
    },

    hoveredArea: function () {
      var allPaths = document.querySelectorAll('#'+this.mapID+' path')
      for (var i = 0; i < allPaths.length; i++) {
        allPaths[i].setAttribute('data-hovered', 'false');
      }

      var geoIso2 = UTILS.countryISOMapping3To2[this.hoveredArea]
      if(geoIso2 !== undefined) {
        var svgGeoPath = document.querySelector('#'+this.mapID+' path.highcharts-key-' + geoIso2.toLowerCase())
        if(svgGeoPath !== null) svgGeoPath.setAttribute("data-hovered", "true")
      }
    },

    selectedAreas: function () {
      var self = this

      var allPaths = document.querySelectorAll('#'+this.mapID+' path')
      for (var i = 0; i < allPaths.length; i++) {
        allPaths[i].setAttribute('data-selected', 'false');
      }

      _.each(this.selectedAreas, function(areaM49){
        if(self.$store.DBGeographyObj[areaM49].iso !== undefined) {
          var geoIso = self.$store.DBGeographyObj[areaM49].iso
          var geoIso2 = UTILS.countryISOMapping3To2[geoIso]
          if(geoIso2 !== undefined) {
            var svgGeoPath = document.querySelector('#'+self.mapID+' path.highcharts-key-' + geoIso2.toLowerCase())
            if(svgGeoPath !== null) svgGeoPath.setAttribute("data-selected", "true")
          }
        }
      })
      /*
      var geoIso2 = UTILS.countryISOMapping3To2[this.hoveredArea]
      if(geoIso2 !== undefined) {
        var svgGeoPath = document.querySelector('#'+this.mapID+' path.highcharts-key-' + geoIso2.toLowerCase())
        console.log('svgGeoPath', svgGeoPath)
        if(svgGeoPath !== null) svgGeoPath.setAttribute("data-selected", "true")
      }
      */
    },

    mapZoom: function () {
      var self = this

      if(!this.mapZoomDefault) {
        setTimeout(function () {
          self.mapHighmaps.mapZoom(self.mapZoomFactor)
        }, 5)
      }
    },

    mapZoomDefault: function () {
      var self = this
      if(this.mapZoomDefault) {
        setTimeout(function () {
          self.mapHighmaps.mapZoom()
        }, 5)
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";
@import "~assets/scss/_browsers.scss";

.highmaps_areas{
  position: relative;
  width: 100%;
  height: 100%;
  .highmaps_container{
    position: absolute;
    left: 50%;
    @include transform(translate(-50%, 0));
    top: 0px;
    width: 100%;
    height: 100%;
    path{
      &[data-hovered="true"], &[data-selected="true"], &:hover{
        fill:#333 !important;
      }
    }
    .highcharts-map-navigation{
      display: none;
    }
  }

  &[data-mapcolor="grey"]{
    .highmaps_container{
      path{
        &[data-hovered="true"], &[data-selected="true"], &:hover{
          fill:$colorRed !important;
        }
      }
    }
  }
}

.highcharts-tooltip{
  text-align: center;
  width: 120px;
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
    }
    .tooltip_value{
      font-size: 12px;
      font-family: "montserratbold";
    }
  }
}
</style>
