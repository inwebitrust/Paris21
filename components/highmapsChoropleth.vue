<template>
  <div class="highmaps_areas">
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
    selectedCountryInput: {
      type: Object,
      default: function () {
        return {}
      }
    },
    categoriesNb: {
      type: Number,
      default: function () {
        return 5
      }
    }
  },
  data: function () {
    return {
      mapHighmaps: '',
      mapHighmapsBg: '',
      mapColors: ['#F7CC3D', '#EC9A3A', '#E87D00', '#EA6651', '#B45747'],
      dataClasses: [],
    }
  },
  mounted () {
    var self = this
    this.generateMap()
  },
  methods: {

    generateMap: function () {
      var self = this

      this.mapHighmaps = new Highcharts.mapChart({
        chart: { 
          renderTo: self.mapID,
          spacing: [10, 10, 10, 10],
          backgroundColor: 'transparent',
          animation: false,
          map: self.geojsonID,
          width: self.specificWidth
        },
        colorAxis: {
          dataClasses: this.dataClasses
        },
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
            return '<div class="tooltip_content"><div class="tooltip_year">'+self.mapYear+'</div><div class="tooltip_geo">'+this.point.name+'</div><div class="tooltip_value" style="color:'+this.color+';">'+this.point.value.toFixed(1)+'</div></div>'
          }
        },
        series: [{
          name: 'Basemap',
          joinBy: ['iso-a2', 'code'],
          keys: ['name', 'code'],
          data: [],
          borderColor: '#fff',
          borderWidth: 0.5,
          nullColor: '#8C8C8C',
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

      this.maxValue = _.max(areasDataCopy, function(ad){ if(ad.value !== null) return ad.value }).value
      this.minValue = _.min(areasDataCopy, function(ad){ if(ad.value !== null) return ad.value }).value

      var splitLevel = (this.maxValue - this.minValue) / this.categoriesNb

      this.dataClasses = []
      var minCalc = this.minValue
      var maxCalc = 0
      for(var i= 0 ; i<this.categoriesNb ; i++) {
        maxCalc = minCalc + splitLevel
        this.dataClasses.push({
          from: minCalc,
          to: maxCalc,
          color: this.mapColors[i]
        })
        minCalc = maxCalc
      }

      this.mapHighmaps.axes[2].update({
        dataClasses: this.dataClasses
      })

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
      console.log('areasData updated ???', this.areasData)
      this.updateMapAreas()
    },

    hoveredArea: function () {
      var allPaths = document.querySelectorAll('#GeographyMap path')
      for (var i = 0; i < allPaths.length; i++) {
        allPaths[i].setAttribute('data-hovered', 'false');
      }

      var geoIso2 = UTILS.countryISOMapping3To2[this.hoveredArea]
      if(geoIso2 !== undefined) {
        var svgGeoPath = document.querySelector('#GeographyMap path.highcharts-key-' + geoIso2.toLowerCase())
        if(svgGeoPath !== null) svgGeoPath.setAttribute("data-hovered", "true")
      }
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
    path{
      &[data-hovered="true"], &:hover{
        fill:#333 !important;
      }
    }
    .highcharts-map-navigation{
      display: none;
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
