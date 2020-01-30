<template>
    <div id="Indicator" class="page" :class="(displayGeoModal) ? 'fixed' : ''" data-page="indicator">
        <div :class="(displayGeoModal) ? 'displayed': ''" class="appmodal_cache" @click="displayGeoModal = false"></div>
        <paris21Header :page="'indicator'"></paris21Header>

        <div class="page_main" v-if="dataLoaded">
            <div class="main_head">
                <div class="head_title"><span class="smaller">About</span> {{ selectedIndicatorObj.name }}</div>
                <nuxt-link :to="'/indicator/'" class="head_backbt">Back</nuxt-link>
                <!--<a class="head_link" @click="downloadAllCountryData('head')">Download all indicator dataset .xls</a>-->
                <a id="HeadLinkFake" class="head_link_fake" download="Statistical Capacity Monitor data download.xls"></a>
            </div>
            <div class="main_content content_map_wrapper">
                <div class="content_disclaimer">
                    {{selectedIndicatorObj.definition}}
                </div>
                <div class="content_map_exporter">
                    <div class="content_map">
                        <div class="map_title"><span class="bolder">{{ selectedIndicatorObj.name }} in {{ this.indicatorLastYear }}</span><br /><span class="smaller">{{selectedIndicatorObj.tag}}</span></div>
                        <div class="geography_mapcontainer">
                            <highmapsChoropleth :mapID="'GeographyMap'" :mapYear="indicatorLastYear" :mapColor="'darkgrey'" :geojsonID="'custom/world-robinson'" :areasData="computedAreasData" :mapZoomFactor="mapZoomFactor" :mapZoom="mapZoom" :mapZoomDefault="mapZoomDefault" :categoriesNb="categoriesNb" :indicatorType="selectedIndicatorObj.dataviz_type" :indicatorID="selectedIndicatorObj.id" :dataClasses="dataClasses"></highmapsChoropleth>
                        </div>
                    </div>
                    <!--
                    <div class="map_legend">
                        PARIS21 Statistical Capacity Monitor based on {{ selectedIndicatorObj.source }}<br />
                        {{ selectedIndicatorObj.definition }}
                    </div>
                    -->
                </div>
                <div class="content_legend">
                    <div class="legend_row">
                        <div class="legend_zoomblock">
                            <a class="zoomblock_bt zoomblock_resetbt" @click="zoomZeroMap()"></a>
                            <a class="zoomblock_bt zoomblock_zoominbt" @click="zoomInMap()"></a>
                            <a class="zoomblock_bt zoomblock_zoomoutbt" @click="zoomOutMap()"></a>
                        </div>
                        <div class="legend_items">
                            <div v-for="(categ, index) in categoriesData" :key="index" class="legend_item" :data-item="index">
                                <span class="item_text">
                                    {{categ.label}}
                                </span>
                            </div>
                            <!--<div class="legend_item" data-item="0">
                                <span class="item_text">0</span>
                            </div>
                            <div class="legend_item" data-item="1">
                                <span class="item_text">1</span>
                            </div>
                            <div class="legend_item" data-item="2">
                                <span class="item_text">2</span>
                            </div>
                            <div class="legend_item" data-item="3">
                                <span class="item_text">3</span>
                            </div>
                            <div class="legend_item" data-item="4">
                                <span class="item_text">4</span>
                            </div>-->
                            <div class="legend_item" data-item="nodata">
                                <span class="item_text">No data</span>
                            </div>
                        </div>
                        <div class="legend_exportblock">
                            <a class="export_bt" data-export="jpg" @click="exportMap()">.pdf</a>
                            <a class="export_bt" data-export="xls" @click="downloadAllCountryData('head')">.xls</a>
                        </div>
                    </div>
                    <!--
                    <div class="legend_row" data-row="2">
                        <div class="legend_disclaimer">
                            <span class="bolder">About this map</span> consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </div>
                    </div>
                    -->
                </div>
            </div>

            <div class="main_content content_timeseries_wrapper">
                <div class="timeseries_graph_wrapper">
                    <div class="timeseries_title" v-if="timeseriesDisplayed">Time trends: <span class="bolder">{{ selectedIndicatorObj.name }}</span></div>
                    <div class="timeseries_title" v-if="!timeseriesDisplayed"><span class="bolder">{{ selectedIndicatorObj.name }}</span> in {{timeseriesCategories[timeseriesCategories.length-1]}}</div>
                    <div class="timeseries_unit">Unit: {{selectedIndicatorObj.tag}}</div>
                    <highchartsTimeseries :chartID="'IndicatorTimeseries'" :timeseriesData="timeseriesGeographiesData" :timeseriesCategories="timeseriesCategories" :class="(timeseriesDisplayed) ? 'displayed':''" :datavizType="selectedIndicatorObj.dataviz_type"></highchartsTimeseries>
                    <highchartsBarchart :chartID="'IndicatorBarchart'" :class="(!timeseriesDisplayed) ? 'displayed':''" :timeseriesData="timeseriesGeographiesData" :datavizType="selectedIndicatorObj.dataviz_type"></highchartsBarchart>
                </div>
                <div class="timeseries_legend">
                    <a class="timeseries_addcountrybt" @click="displayGeoModal = true;">
                        <span class="addcountrybt_label">Add country</span>
                    </a>
                    <div class="legend_items">
                        <div v-for="(geoObj, index) in timeseriesGeographiesData" :key="index" class="legend_item" @click="removeSelectedGeography(geoObj.m49)" :data-inc="index">
                            {{ $store.DBGeographyObj[geoObj.m49].name }}
                        </div>
                    </div>
                    <div class="legend_exportblock">
                        <a class="export_bt" data-export="jpg" @click="exportTimeseries()">.jpg</a>
                        <a class="export_bt" data-export="xls" @click="downloadAllCountryData('chart')">.xls</a>
                    </div>
                </div>
            </div>

            <div class="main_content last">
                <div class="content_sources">
                    <div class="content_title">Indicator's source</div>
                    <div class="sources_text" v-html="computedSource"></div>
                </div>
                <div class="content_related">
                    <div class="content_title">Related indicators</div>
                    <div class="related_links">
                        <div v-for="(relIndicator, index) in relatedIndicators" :key="index" class="relindicator_item">
                            <nuxt-link :to="'/indicator/'+relIndicator.id" class="related_link">{{ relIndicator.name }}</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="IndicatorSelectorModal" class="appmodal" v-if="selectedIndicator == ''">
            <div class="appmodal_head" v-if="selectedIndicator !== ''">
                Edit and filter the indicators list
                <a class="appmodal_closebt" v-if="selectedIndicator !== ''" @click="displayIndicatorModal = !displayIndicatorModal"></a>
            </div>
            <div class="appmodal_content">
                <indicatorSelector :mainColor="'red'" :state="'expanded'" :modaled="true" :parentSelected="selectedIndicator" @selectIndicatorsFromModal="updateModaledIndicators()" @aboutIndicatorsModal="displayIndicatorsModal = true"></indicatorSelector>
            </div>
        </div>

        <div id="GeographySelectorModal" class="appmodal" :class="(displayGeoModal) ? 'displayed' : ''">
            <div class="appmodal_head">
                Add a country, region or subregion
                <a class="appmodal_closebt" @click="displayGeoModal = !displayGeoModal"></a>
            </div>
            <div class="appmodal_content">
                <geographySelector :mainColor="'red'" :mapColor="'grey'" :mapID="'ModaledGeographyMap'" :state="'expanded'" :modaled="true" :parentSelected="'default'" :selectedGeographies="selectedGeographies" :isMultipleSelection="true" @selectGeographiesFromModal="updateModaledGeographies()" :hasTooltipValues="false"></geographySelector>
            </div>
        </div>

        <paris21Modal type="indicators" :displayed="displayIndicatorsModal" @closeModal="displayIndicatorsModal = false"></paris21Modal>

        <paris21Modal type="about" :displayed="displayAboutModal" @closeModal="displayAboutModal = false"></paris21Modal>

        <paris21Footer :class="(selectedIndicator == '') ? 'fixed' : ''" @aboutModal="displayAboutModal = true"></paris21Footer>
    </div>
</template>

<script>
import * as UTILS from '~/commons/utils/index.js'
import {_} from 'underscore'
import * as jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

import paris21Header from '~/components/paris21Header.vue'
import paris21Footer from '~/components/paris21Footer.vue'
import paris21Modal from '~/components/paris21Modal.vue'
import geographySelector from '~/components/geographySelector.vue'
import indicatorSelector from '~/components/indicatorSelector.vue'
import highmapsChoropleth from '~/components/highmapsChoropleth.vue'
import highchartsTimeseries from '~/components/highchartsTimeseries.vue'
import highchartsBarchart from '~/components/highchartsBarchart.vue'

export default {
    components: {
        'paris21Header': paris21Header,
        'paris21Footer': paris21Footer,
        'paris21Modal': paris21Modal,
        'geographySelector': geographySelector,
        'indicatorSelector': indicatorSelector,
        'highmapsChoropleth': highmapsChoropleth,
        'highchartsTimeseries': highchartsTimeseries,
        'highchartsBarchart': highchartsBarchart,
    },
    head () {
        return {
          title: 'Statistical Capacity Monito',
          meta: [
            { hid: 'description', name: 'description', content: 'Find and explore indicators on statistical capacity' },
            { hid: 'og:image', name: 'og:image', content: 'http://statisticalcapacitymonitor.org/images/share-img.png' }
          ]
        }
      },
    asyncData: async ({ app, params, payload }) => ({
        routeParams: params
    }),
    data: function () {
        return {
            routeParams: '',
            dataLoaded: false,
            selectedIndicator: '',
            selectedIndicatorObj: {},
            selectedGeographies: ['2', '19', '142', '150', '9'],
            displayGeoModal: false,
            indicatorGeographiesData: [],
            computedAreasData: [],
            allAreasData: [],
            defaultYear: '2017',
            indicatorLastYear: '',
            timeseriesGeographiesData: [],
            timeseriesCategories: [],
            timeseriesDisplayed: true,
            timeseriesMinimalYears: 3,
            relatedIndicators: [],
            mapZoom: 50,
            mapZoomFactor: 1,
            mapZoomDefault: true,
            defaultCategoriesNb: 5,
            categoriesNb: 5,
            categoriesData: [],
            dataClasses: [],
            mapColors: ['#F7CC3D', '#EC9A3A', '#E87D00', '#EA6651', '#B45747'],
            displayIndicatorsModal: false,
            displayAboutModal: false,
        }
    },

    mounted: function () {
        var self = this
        this.selectedIndicator = this.routeParams.pathMatch.toLowerCase().replace('/','')
        this.loadAPIIndicators()
    },

    methods: {
        loadAPIIndicators: function () {
            var self = this

            if(this.$store.csvDataPromiseIndicators === undefined) {
                this.$store.csvDataPromiseIndicators = UTILS.getAPIIndicators(this.$store)
                this.$store.csvDataPromiseIndicators.then( function(promiseCallback) {
                    self.loadAPIGeography()
                })
            } else {
                this.loadAPIGeography()
            }
        },

        loadAPIGeography: function () {
            var self = this

            if(this.$store.csvDataPromiseGeography === undefined) {
                this.$store.csvDataPromiseGeography = UTILS.getAPIGeography(this.$store)
                this.$store.csvDataPromiseGeography.then( function(promiseCallback) {
                    self.loadAPIGeoItems()
                })
            } else {
                this.loadAPIGeoItems()
            }
        },

        loadAPIGeoItems: function () {      
            if(this.selectedIndicator !== ''){
                this.loadIndicatorItemData(this.selectedIndicator)
            } else {
                this.updatePage()
            }
        },

        loadIndicatorItemData: function (indicatorID, modaled) {
            var self = this
            this.dataLoaded = true

            if(this.$store.csvDataPromiseIndicatorItemData === undefined) {
                this.$store.csvDataPromiseIndicatorItemData = UTILS.getAPIIndicatorItemData(this.$store, indicatorID)
                this.$store.csvDataPromiseIndicatorItemData.then( function(promiseCallback) {
                    //console.log('in store loaded', self.$store.DBGeography)
                    self.$store.csvDataPromiseIndicatorItemData = undefined
                    if(modaled !== undefined && modaled){
                        //self.updateComparisonGeos()
                    } else {
                        self.updatePage()
                    }
                })
            } else {
                if(modaled !== undefined && modaled){
                    //self.updateComparisonGeos()
                } else {
                    self.updatePage()
                }
            }
        },

        updatePage: function () {
            var self = this

            if(this.selectedIndicator != ''){
                this.indicatorGeographiesData = this.$store.DBIndicatorItems[this.selectedIndicator].geographies
                this.selectedIndicatorObj = this.$store.DBIndicatorsObj[this.selectedIndicator]

                if(this.selectedIndicatorObj.datasource == "worldbank") {
                    this.selectedGeographies = ['76', '643', '840', '156', '250']
                }

                this.relatedIndicators = _.filter(this.$store.DBIndicators, function(ind){
                    return ind.area == self.selectedIndicatorObj.area && ind.level == self.selectedIndicatorObj.level && ind.name !== self.selectedIndicatorObj.name
                })
                this.relatedIndicators = _.sample(this.relatedIndicators, 5)

                var allIndicatorsYears = _.map(this.indicatorGeographiesData, function(indicGeo) {
                    var years =  []
                    _.each(indicGeo.years, function (yearValue, yearIndex) {
                        if(yearValue !== "") {
                            years.push(yearIndex)
                        }
                    });
                    return years
                });

                allIndicatorsYears = _.flatten(allIndicatorsYears)
                allIndicatorsYears = _.uniq(allIndicatorsYears)
                allIndicatorsYears = _.sortBy(allIndicatorsYears, function (y){ return y;})
                this.timeseriesCategories = allIndicatorsYears

                this.indicatorLastYear = _.sortBy(allIndicatorsYears, function(indYear) {return indYear } )[allIndicatorsYears.length-1]
                
                this.updateComputedAreasData()
                this.updateTimeseriesGeographiesData()
            }
        },

        updateComputedAreasData: function () {
            var self = this
            this.computedAreasData = []

            _.each(this.$store.DBGeography, function(geoObj){
                var geoValue = 'no data'
                var geoColor = '#8C8C8C'
                var countryCode = UTILS.countryISOMapping3To2[geoObj.iso]

                if(self.indicatorGeographiesData[geoObj.m49] !== undefined) {
                    var geoData = self.indicatorGeographiesData[geoObj.m49]
                    if(geoData.years[self.indicatorLastYear] !== undefined) {
                        if(geoData.years[self.indicatorLastYear] !== 'Not Available') {
                            if(self.selectedIndicatorObj.dataviz_type == 'binary') {
                                geoValue = geoData.years[self.indicatorLastYear]
                                if(geoValue == 'Yes' || geoValue == '1') geoColor = '#F7CC3D'
                                else geoColor = '#EC9A3A'
                            } else{
                                geoValue = parseFloat(geoData.years[self.indicatorLastYear])
                                geoColor = undefined
                            }
                        }
                    }
                }

                if(geoObj.type == 'country'){
                    self.computedAreasData.push({
                        code: countryCode,
                        m49: geoObj.m49,
                        value: geoValue,
                        color: geoColor
                    })
                }

                self.allAreasData.push({
                    code: countryCode,
                    m49: geoObj.m49,
                    value: geoValue,
                    color: geoColor
                })
            })

            this.computeDataClasses()
        },

        computeDataClasses: function () {
            var self = this;

            var areasWithData = _.filter(this.computedAreasData, function (ad) {
                var bool = (!isNaN(ad.value) && ad.value !== null && ad.value !== 'no data')
                return bool
            });

            var uniqValuesNb = _.uniq(_.map(areasWithData, function(ad){return ad.value; }));
            console.log("uniqValuesNb", uniqValuesNb)

            if(uniqValuesNb < this.defaultCategoriesNb) {
                this.categoriesNb = uniqValuesNb
            } else {
                this.categoriesNb = this.defaultCategoriesNb
            }

            this.categoriesData = []

            var foundSpecificIndicator = _.find(UTILS.specificIndicators, function (indic) {
                return self.selectedIndicatorObj.id == indic.id;
            })

            console.log("foundSpecificIndicator", foundSpecificIndicator)

            if(this.selectedIndicatorObj.dataviz_type !== 'binary') {

                console.log("areasWithData", areasWithData)

                var sortedAreas = _.sortBy(areasWithData, function (ad) {
                    return ad.value
                });

                console.log("sortedAreas", sortedAreas)

                var maxValue = sortedAreas[sortedAreas.length-1].value

                var realMax = 1

                while(maxValue > realMax) {
                    if(maxValue < realMax*2) {
                        realMax = realMax*2; 
                        break;
                    } else if(maxValue < realMax*5) {
                        realMax = realMax*5; 
                        break;
                    } else if(maxValue < realMax*10) {
                        realMax = realMax*10; 
                        break;
                    } else{
                        realMax = realMax*10;
                    }
                }

                console.log("max value and real max", maxValue, realMax)

                var deciamlDisplayed = 1;
                if(realMax >= 10) deciamlDisplayed = 0;
                var splitLevel = realMax / this.categoriesNb
                //var splitLevel =  Math.ceil(maxValue/this.categoriesNb)*this.categoriesNb;

                this.dataClasses = []
                var minCalc = 0
                var maxCalc = 0
                for(var i= 0 ; i<this.categoriesNb ; i++) {
                    maxCalc = minCalc + splitLevel
                    if(i == this.categoriesNb - 1) maxCalc = Math.ceil(maxCalc)
                    if(i == 0) minCalc = Math.floor(minCalc)
                    this.dataClasses.push({
                        from: minCalc,
                        to: maxCalc,
                        color: this.mapColors[i]
                    })

                    this.categoriesData.push({
                        label: minCalc.toFixed(deciamlDisplayed) + ' - ' + maxCalc.toFixed(deciamlDisplayed)
                    })
                    minCalc = maxCalc
                }

                if(foundSpecificIndicator !== undefined) {
                    this.categoriesData = foundSpecificIndicator.labels;
                }
            } else {
                this.categoriesData = [
                    { label: 'Yes' }, { label: 'No' }
                ]
            }

            console.log("categoriesData", this.categoriesData)
        },

        updateTimeseriesGeographiesData: function () {
            var self = this

            this.timeseriesGeographiesData = []
            this.timeseriesDisplayed = true

            _.each(this.selectedGeographies, function(geoM49){
                var timeseriesGeoObj = {
                    m49:geoM49,
                    name: self.$store.DBGeographyObj[geoM49].name,
                    fullName: self.$store.DBGeographyObj[geoM49].name,
                    data: []
                }

                var geoData = _.find(self.indicatorGeographiesData, function(geoData){
                    return geoData.m49 == geoM49
                });

                if(geoData !== undefined) {
                    var nbYearsWithData = 0
                    _.each(self.timeseriesCategories, function (xYearCategory) {
                        if(geoData.years[xYearCategory] !== undefined) {
                            var yearValue = parseFloat(geoData.years[xYearCategory])
                            if(self.selectedIndicatorObj.dataviz_type == 'binary' || self.selectedIndicatorObj.dataviz_type == 'ordinal'){
                              yearValue = Math.round(yearValue*100)  
                            } 
                            timeseriesGeoObj.data.push(yearValue)
                            nbYearsWithData += 1
                        } else {
                            timeseriesGeoObj.data.push(null)
                        }
                    })
                }

                if(nbYearsWithData < self.timeseriesMinimalYears) self.timeseriesDisplayed = false
                self.timeseriesGeographiesData.push(timeseriesGeoObj)
            })

            /*
            _.each(this.indicatorGeographiesData, function(geoData){
                var geoM49 = geoData.m49
                if(_.indexOf(self.selectedGeographies, geoM49) > -1){
                    var timeseriesGeoObj = {
                        m49:geoM49,
                        name: self.$store.DBGeographyObj[geoM49].name,
                        fullName: self.$store.DBGeographyObj[geoM49].name,
                        data: []
                    }

                    var nbYearsWithData = 0
                    _.each(self.timeseriesCategories, function (xYearCategory) {
                        if(geoData.years[xYearCategory] !== undefined) {
                            timeseriesGeoObj.data.push(parseFloat(geoData.years[xYearCategory]))
                            nbYearsWithData += 1
                        } else {
                            timeseriesGeoObj.data.push(null)
                        }
                    })

                    if(nbYearsWithData < self.timeseriesMinimalYears) self.timeseriesDisplayed = false

                    self.timeseriesGeographiesData.push(timeseriesGeoObj)
                }
            })
            */
        },

        removeSelectedGeography: function (geoID) {
            this.selectedGeographies = _.without(this.selectedGeographies, geoID)
            this.updateTimeseriesGeographiesData()
        },

        updateModaledGeographies: function () {
            this.displayGeoModal = false
            this.updateTimeseriesGeographiesData()
        },

        zoomInMap: function () {
            this.mapZoom += 10;
            this.mapZoomFactor = 0.75;
            this.mapZoomDefault = false;
        },

        zoomOutMap: function () {
            this.mapZoom -= 10;
            this.mapZoomFactor = 1.3333333;
            this.mapZoomDefault = false;
        },

        zoomZeroMap: function () {
            this.mapZoom = 50;
            this.mapZoomFactor = 0;
            this.mapZoomDefault = true;
        },

        exportMap: function () {
            var self = this

          this.isLoading = true

          if(document.querySelector(".highcharts-map-navigation") !== undefined){
            document.querySelector(".highcharts-map-navigation").remove()
            document.querySelector(".highcharts-map-navigation").remove()
          }

          var pdf = new jsPDF()
          this.dlElement = document.querySelector('.content_map_exporter');
          this.dlElement.setAttribute("data-downloading", "true");
          var width = this.dlElement.offsetWidth;
          var height = this.dlElement.offsetHeight;
          html2canvas(this.dlElement).then(canvas => {
              var image = canvas.toDataURL('image/png');

              var rapport = width/height
              var newWidth = width/3
              if(newWidth > 220) newWidth = 220
              var newHeight = newWidth/rapport

              pdf.addImage(image, 'JPEG', 0, 0, newWidth, newHeight);
              pdf.save('export.pdf');
              self.isLoading = false
          });

          setTimeout(function(){
            self.dlElement.setAttribute("data-downloading", "false");
          }, 0)
        },

        exportTimeseries: function () {
          var self = this

          var pdf = new jsPDF()
          this.isLoading = true
          this.dlElement = document.querySelector('.timeseries_graph_wrapper');
          this.dlElement.setAttribute("data-downloading", "true");

          var width = this.dlElement.offsetWidth;
          var height = this.dlElement.offsetHeight;

          html2canvas(this.dlElement).then(canvas => {
              var image = canvas.toDataURL('image/png');
              var rapport = width/height

              var newWidth = width/2.5
              if(newWidth > 220) newWidth = 220
              var newHeight = newWidth/rapport

              pdf.addImage(image, 'JPEG', 0, 10, newWidth, newHeight);
              pdf.save('export.pdf');
              self.isLoading = false
          });

          setTimeout(function(){
            self.dlElement.setAttribute("data-downloading", "false");
          }, 0)
        },

        downloadAllCountryData: function (contentType) {
            var self = this;

            var tab_text = ''
            var data_type = 'data:application/vnd.ms-excel'

            tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">'
            tab_text += '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>'

            tab_text += '<x:Name>Data</x:Name>'

            tab_text += '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>'
            tab_text += '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>'

            tab_text += "<table border='1px'>"

            tab_text += '<tr><th>Indicator</th><th>Country</th><th>Year</th><th>Data Value</th></tr>'

            var lastYear = self.timeseriesCategories[self.timeseriesCategories.length-1]
            //var tmpDatas = this.allAreasData.slice(150, 500);
            _.each(this.allAreasData, function (countryObj){
                var toAppend = false
                if(contentType == 'chart') {
                    if(_.indexOf(self.selectedGeographies, countryObj.m49) > -1) toAppend = true
                } else {
                    toAppend = true
                }

                if(toAppend) {
                    /*if(self.timeseriesDisplayed) {
                        _.each(self.timeseriesCategories, function(categYear, indexYear){
                            _.each(self.timeseriesGeographiesData, function(geoObj){
                                tab_text += '<tr><td>'+self.$store.DBIndicatorsObj[self.selectedIndicator].name+'</td><td>'+geoObj.name+'</td><td>'+categYear+'</td><td>'+geoObj.data[lastYear]+'</td></tr>'
                            })
                        })
                    } else {
                        tab_text += '<tr><td>'+self.$store.DBIndicatorsObj[self.selectedIndicator].name+'</td><td>'+self.$store.DBGeographyObj[countryObj.m49].name+'</td><td>'+self.indicatorLastYear+'</td><td>'+countryObj.value+'</td></tr>'
                    }*/
                    tab_text += '<tr><td>'+self.$store.DBIndicatorsObj[self.selectedIndicator].name+'</td><td>'+self.$store.DBGeographyObj[countryObj.m49].name+'</td><td>'+self.indicatorLastYear+'</td><td>'+countryObj.value+'</td></tr>'
                }
            })

            tab_text += '<tr></tr><tr></tr><tr></tr>';
            tab_text += '<tr><td>PARIS21 Statistical Capacity Monitor based on ' + this.selectedIndicatorObj.source + '</td></tr>';
            tab_text += '<tr><td>' + this.selectedIndicatorObj.definition + '</td></tr>';
            tab_text = tab_text + '</table></body></html>';

            tab_text = tab_text.replace(/[é]/g,"&eacute;")
                                .replace(/[É]/g,"&Eacute;")
                                .replace(/[à]/g,"&agrave;")
                                .replace(/[è]/g,"&egrave;")
                                .replace(/[â]/g,"&acirc;")
                                .replace(/[Â]/g,"&Acirc;");


            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");

            this.xlsLinkAttr = data_type + ', ' + encodeURIComponent(tab_text)

            if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                if (window.navigator.msSaveBlob) {
                    var blob = new Blob([tab_text], {
                        type: "application/csv;charset=utf-8;"
                    });
                    navigator.msSaveBlob(blob, 'Statistical Capacity Monitor data download.xls');
                }
            } else {
                document.querySelector('#HeadLinkFake').setAttribute('href', this.xlsLinkAttr)
                document.querySelector('#HeadLinkFake').click()
            }
        },

        replaceLinksSO: function(text) {
            if(text !== undefined) {
                var rex = /(<a href=")?(?:https?:\/\/)?(?:(?:www)[-A-Za-z0-9+&@#\/%?=~_|$!:,.;]+\.)+[-A-Za-z0-9+&@#\/%?=~_|$!:,.;]+/ig;   
                return text.replace(rex, function ( $0, $1 ) {
                    if(/^https?:\/\/.+/i.test($0)) {
                        return $1 ? $0: '<a href="'+$0+'">'+$0+'</a>';
                    }
                    else {
                        return $1 ? $0: '<a href="http://'+$0+'">'+$0+'</a>';
                    }
                });
            } else {
                return ""
            }            
        }
    },

    computed: {
        computedSource: function (text){
            return this.replaceLinksSO(this.selectedIndicatorObj.source)
        }
    }
}

</script>

<style lang="scss">
    @import "~assets/scss/_variables.scss";
    @import "~assets/scss/_browsers.scss";

$indicatorColWidth: 327px;
$geosColWidth: 400px;
$geosSingleColWidth: 80px;
$geosSingleColMargin: 10px;

#Indicator{
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ea6550+0,ea6550+34,e5eff6+100 */
    background: rgb(234,101,80); /* Old browsers */
    background: -moz-linear-gradient(top, rgba(234,101,80,1) 0%, rgba(234,101,80,1) 30%, rgba(237,237,237,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(234,101,80,1) 0%,rgba(237,237,237,1) 30%,rgba(237,237,237,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(234,101,80,1) 0%,rgba(237,237,237,1) 30%,rgba(237,237,237,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ea6550', endColorstr='#e5eff6',GradientType=0 ); /* IE6-9 */
    height: auto;
    min-height: 100%;
    &.fixed{
        overflow: hidden;
    }

    #GeographyInput{
        background: #fff !important;
    }

    #GeographySelectorModal{
        -webkit-box-shadow: 0 20px 120px 0 rgba(180,87,91,0.8);
        box-shadow: 0 20px 120px 0 rgba(180,87,91,0.8);
        opacity: 0;
        z-index: -1;
        @include transition((opacity), 0.6s, ease-in-out);
        &.displayed{
            opacity: 1;
            z-index: 10000;
        }
    }

    .selector[data-selector="indicator"][data-modaled="true"] .indicator_sidebar:after{
         /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#b45747+0,b45747+100&0+0,1+100 */
        background: -moz-linear-gradient(top, rgba(180,87,71,0) 0%, rgba(180,87,71,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(180,87,71,0) 0%,rgba(180,87,71,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(180,87,71,0) 0%,rgba(180,87,71,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00b45747', endColorstr='#b45747',GradientType=0 ); /* IE6-9 */
    }

    .appmodal_cache{
        background: rgba(234, 120, 80, 0.7);
    }
    .page_main{
        position: relative;
        z-index: 1;
        .main_head{
            text-align: left;
            margin-top: 20px;
            padding-left: 120px;
            position: relative;
            font-size: 12px;
            font-family: "montserratbold";
            margin-top: 80px;
            .head_title{
                color: #fff;
                font-size: 22px;
                line-height: 28px;
                width: 80%;
                max-width: 600px;
            }
            .head_cartridge{
                color: $colorDarkGreen;
                font-family: "montserratbold";
                font-size: 12px;
                line-height: 18px;
                .cartridge_col{
                    display: inline-block;
                    vertical-align: top;
                    width: 188px;
                    height: 56px;
                    position: relative;
                    margin-top: 10px;
                    &:nth-child(1){
                        &:after{
                            content:"";
                            width: 2px;
                            height: 100%;
                            background: $colorDarkGreen;
                            position: absolute;
                            left: 100%;
                            top: 0px;
                        }
                    }
                    &:nth-child(2){
                        padding-left: 20px;
                    }
                }
                .cartridge_website_link{
                    color: #fff;
                }
            }
        }
        .main_content{
            background: #fff;
            padding: 20px;
            margin-top: 20px;
            margin-bottom: 0px;
            text-align: left;
            &.content_map_wrapper{
                padding: 20px 0;
            }
            .content_disclaimer{
                color: #3A3A3A;
                font-size: 14px;
                line-height: 24px;
                width: 80%;
                margin: 10px auto;
            }
            .content_map_exporter{
                width: 100%;
                position: relative;
                height: 600px;
                .map_legend{
                    font-size: 13px;
                    color: $textColor;
                    line-height: 16px;
                    position: absolute;
                    top: 548px;
                    width: 100%;
                    padding-left: 20px;
                    width: 80%;
                }
            }
            .content_map{
                background: #E8FAFA;
                width: 100%;
                height: 527px;
                margin-top: 20px;
                position: relative;
                text-align: center;
                .map_title{
                    color: #2F2F2F;
                    font-size: 18px;
                    line-height: 15px;
                    position: relative;
                    top: 5px;
                    z-index: 10000;
                    font-family: "montserratregular";
                    .bolder{
                        font-family: "montserratbold";
                    }
                    .smaller{
                        font-size: 13px;
                    }
                }
                .geography_mapcontainer{
                    position: absolute;
                    display: inline-block;
                    width: 100%;
                    left: 0px;
                    top: 30px;
                    bottom: 0px;
                }
            }
            &.content_timeseries_wrapper{
                .timeseries_unit{
                    font-size: 13px;
                    color: #3A3A3A;
                }
                .timeseries_title{
                    font-size: 18px;
                    color: #3A3A3A;
                    font-family: "montserratregular";
                    .bolder{
                        font-family: "montserratbold";
                    }
                }
                .highcharts_timeseries{
                    margin-top:20px;
                }
                .timeseries_legend{
                    margin-top: 14px;
                    position: relative;
                    height: 50px;
                    .timeseries_addcountrybt{
                        position: absolute !important;
                        left: 50px;
                        top: 50%;
                        font-size: 12px;
                        font-family: "montserratbold";
                        color: #2F2F2F;
                        cursor: pointer;
                        position: relative;
                        @include transform(translate(0, -50%));
                        &:before{
                            content: "";
                            position: absolute;
                            right: 100%;
                            top: 50%;
                            @include transform(translate(0, -50%));
                            width: 32px;
                            height: 24px;
                            background: url("~/static/images/global/icon-map_zoomin-white.svg") no-repeat center center $colorRed;
                            border-radius: 20px;
                            margin-right: 8px;
                        }
                        &:hover{
                            &:before{
                                background: url("~/static/images/global/icon-map_zoomin-white.svg") no-repeat center center $textColor;
                            }
                        }
                    }
                    .legend_items{
                        margin-left: 180px;
                        padding-left: 20px;
                        border-left: 1px solid #B8B8B8;
                        width: 600px;
                        position: relative;
                        top: 50%;
                        @include transform(translate(0, -50%));
                        .legend_item{
                            display: inline-block;
                            vertical-align: top;
                            margin: 3px;
                            padding: 4px 6px 4px 20px;
                            color: #fff;
                            border-radius: 4px;
                            font-size: 12px;
                            font-family: "montserratregular";
                            position: relative;
                            cursor: pointer;
                            &:before{
                                content:"x";
                                position: absolute;
                                left: 8px;
                                top: 50%;
                                font-family: "montserratbold";
                                @include transform(translate(0, -50%));
                            }
                            &[data-inc="0"], &[data-inc="10"]{
                                background: #307ABF;
                            }
                            &[data-inc="1"], &[data-inc="11"]{
                                background: #036463;
                            }
                            &[data-inc="2"], &[data-inc="12"]{
                                background: #149E9D;
                            }
                            &[data-inc="3"], &[data-inc="13"]{
                                background: #19A5CC;
                            }
                            &[data-inc="4"], &[data-inc="14"]{
                                background: #585CA3;
                            }
                            &[data-inc="5"], &[data-inc="15"]{
                                background: #B55CA3;
                            }
                            &[data-inc="6"], &[data-inc="16"]{
                                background: #BD7E4D;
                            }
                            &[data-inc="7"], &[data-inc="17"]{
                                background: #F5992B;
                            }
                            &[data-inc="8"], &[data-inc="18"]{
                                background: #D9AD48;
                            }
                            &[data-inc="9"], &[data-inc="19"]{
                                background: #EA6651;
                            }
                        }
                    }
                    .legend_exportblock{
                        top: 50%;
                        @include transform(translate(0, -50%));
                    }
                }
            }
            .content_legend{
                text-align: left;
                color: #3A3A3A;
                margin: -80px 20px 0;
                background: #fff;
                position: relative;
                .legend_row{
                    position: relative;
                    margin-top: 20px;
                    &[data-row="2"]{
                        text-align: left;
                    }
                    .legend_zoomblock{
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        .zoomblock_bt{
                            width: 30px;
                            height: 30px;
                            border-radius: 3px;
                            background: #2F2F2F;
                            display: inline-block;
                            vertical-align: top;
                            margin: 0 3px;
                            color: #fff;
                            line-height: 30px;
                            text-align: center;
                            font-size: 20px;
                            cursor: pointer;
                            position: relative;
                            &:after{
                                position: absolute;
                                left: 50%;
                                top: 50%;
                                @include transform(translate(-50%, -50%));
                                content: "";
                                width: 30px;
                                height: 30px;
                            }
                            &.zoomblock_resetbt{
                                &:after{
                                    background: url("~/static/images/global/icon-map_center-white.svg") no-repeat 0 0;
                                    background-size: 100% 100%;
                                }
                            }
                            &.zoomblock_zoominbt{
                                &:after{
                                    background: url("~/static/images/global/icon-map_zoomin-white.svg") no-repeat 0 0;
                                    background-size: 100% 100%;
                                }
                            }
                            &.zoomblock_zoomoutbt{
                                &:after{
                                    background: url("~/static/images/global/icon-map_zoomout-white.svg") no-repeat 0 0;
                                    background-size: 100% 100%;
                                }
                            }
                        }
                    }
                    .legend_items{
                        margin-left: 140px;
                        text-align: left;
                        max-width: 600px;
                        line-height: 26px;
                        .legend_item{
                            display: inline-block;
                            vertical-align: top;
                            position: relative;
                            margin: 0 10px;
                            color: #2F2F2F;
                            font-size: 12px;
                            font-family: "montserratbold";
                            padding-left: 23px;
                            line-height: 20px;
                            &:before{
                                content:"";
                                position: absolute;
                                left: 0px;
                                top: 0px;
                                width: 20px;
                                height: 20px;
                                border-radius: 20px;
                            }
                            &[data-item="0"]{ &:before{ background: #F7CC3D;} }
                            &[data-item="1"]{ &:before{ background: #EC9A3A;} }
                            &[data-item="2"]{ &:before{ background: #E87D00;} }
                            &[data-item="3"]{ &:before{ background: #EA6651;} }
                            &[data-item="4"]{ &:before{ background: #B45747;} }
                            &[data-item="nodata"]{ width: 80px; &:before{ background: #8C8C8C;} }
                        }
                    }
                    .legend_disclaimer{
                        width: 500px;
                        text-align: left;
                        display: inline-block;
                        margin-left: 150px;
                        font-size: 14px;
                        line-height: 22px;
                        .bolder{
                            font-family: "montserratbold";
                        }
                    }
                }
            }

            &.last{
                margin-bottom: 100px;
                background: none;
                text-align: center;
                .content_sources, .content_related{
                    display: inline-block;
                    vertical-align: top;
                    margin: 0 40px;
                    width: 300px;
                    .content_title{
                        color: $colorRed;
                        font-family: "montserratbold";
                        font-size: 18px;
                        text-align: left;
                    }
                    .sources_text{
                        font-size: 14px;
                        text-align: left;
                        color: #3A3A3A;
                        margin-top: 10px;
                    }
                    .related_links{
                        background: $colorRed;
                        padding: 20px;
                        color: #fff;
                        text-align: left;
                        margin-top: 14px;
                        .relindicator_item{
                            height: 40px;
                            line-height: 36px;
                            border-bottom: 2px solid $colorDarkRed;
                            position: relative;
                            padding-left: 10px;
                            overflow: hidden;
                            &:after{
                                content: "";
                                position: absolute;
                                right: 0px;
                                top: 50%;
                                @include transform(translate(0, -50%));
                                background: url("~/static/images/global/icon-chevron-white.svg") no-repeat 0 0;
                                background-size: 100% 100%;
                                width: 30px;
                                height: 30px;
                            }
                            &:hover{
                                background: $colorDarkRed;
                            }
                        }
                        .related_link{
                            color: #fff;
                            text-decoration: none;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
}

.legend_exportblock{
    position: absolute;
    right: -10px;
    top: 0px;
    .export_bt{
        cursor: pointer;
        color: #3A3A3A;
        position: relative;
        margin: 0 50px 0 0;
        font-family: "montserratbold";
        font-size: 12px;
        position: relative;
        &:after{
            content:"";
            position: absolute;
            left: 100%;
            top: 50%;
            margin-left: 5px;
            @include transform(translate(0, -50%));
            width: 32px;
            height: 24px;
            border-radius: 20px;
        }
        &[data-export="jpg"]{
            &:after{
                background: url("~/static/images/global/icon-btn_download_image-white.svg") no-repeat center center $colorRed;
            }
            &:hover{
                &:after{
                    background: url("~/static/images/global/icon-btn_download_image-white.svg") no-repeat center center $textColor;
                }
            }
        }
        &[data-export="xls"]{
            &:after{
                background: url("~/static/images/global/icon-btn_download_data-white.svg") no-repeat center center $colorRed;
            }
            &:hover{
                &:after{
                    background: url("~/static/images/global/icon-btn_download_data-white.svg") no-repeat center center $textColor;
                }
            }
        }
    }
}

.highcharts_timeseries, .highcharts_barchart{
    display: none;
    &.displayed{
        display: block;
    }
}
</style>
