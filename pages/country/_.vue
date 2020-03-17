<template>
    <div id="Country" class="page" :class="(displayGeoModal || displayIndicatorModal || selectedCountry == '') ? 'fixed' : ''" data-page="country">
        <div class="appmodal_cache" :class="(displayGeoModal || displayIndicatorModal) ? 'displayed': ''" @click="displayGeoModal = false; displayIndicatorModal = false"></div>
        <paris21Header :page="'country'" @aboutModal="displayAboutModal = true" @downloadModal="displayDownloadModal = true"></paris21Header>

        <div class="page_main" v-if="selectedCountry !== ''">
            <div class="main_head">
                <div class="head_title"><span class="bolder">{{ countryName }}</span></div>
                <div class="head_cartridge">
                    <div class="cartridge_col">
                        <div class="cartridge_pib" v-if="lastGDPAvailable != ''  && (countryObj.subregion !== '' && countryObj.region !== '')">GDP per capita : {{lastGDPAvailable}} $</div>
                        <div class="cartridge_pop" v-if="lastPopAvailable != ''  && (countryObj.subregion !== '' && countryObj.region !== '')">Population : {{lastPopAvailable}}</div>
                        <a class="cartridge_website_link" v-if="NSOWebsite != ''  && (countryObj.subregion !== '' && countryObj.region !== '')" :href="NSOWebsite" target="_blank">NSO Website</a>
                    </div>
                    <div class="cartridge_col" data-col="2" v-if="dataLoaded && (countryObj.subregion !== '' && countryObj.region !== '')">
                        <div class="cartridge_incgroup">Income group : {{lastIncomeGroup}} </div>
                        <div class="cartridge_subregion">Subregion : {{countryObj.subregion}} </div>
                    </div>
                </div>
                <nuxt-link :to="'/country/'" class="head_backbt">Back</nuxt-link>
                <a class="head_link" @click="downloadAllCountryData('head')">Download country dataset</a>
                <a id="HeadLinkFake" class="head_link_fake" download="Statistical Capacity Monitor data download.xls"></a>
                <a class="head_link2" @click="downloadAllCountryData('content')" v-if="selectedIndicators.length > 0" >Download your selection</a>
                <a id="ContentLinkFake" :href="xlsLinkAttr" download="Statistical Capacity Monitor data download.xls"></a>
            </div>
            <div class="main_content" v-if="dataLoaded">
                <div class="content_head">
                    <div class="head_menus">
                        <a class="indlist_bt" @click="displayIndicatorModal = true">Indicators list</a>
                        <!--<a class="dataset_link" v-if="selectedIndicators.length > 0" @click="downloadAllCountryData('content')">Download this dataset .xls</a>-->
                    </div>
                    <div class="head_geos">
                        <div class="geos_col geos_col_country">{{ $store.DBGeographyObj[selectedCountry].name }}</div>
                        <div class="geos_col" @click="comparedGeoColSelected = 0; displayGeoModal = true; modaledCountryInput = comparedCountries[0];" v-if="comparedCountries[0] !== undefined" v-html="prunify(comparedCountries[0].name)">
                        </div>
                        <div class="geos_col" @click="comparedGeoColSelected = 1; displayGeoModal = true; modaledCountryInput = comparedCountries[1];" v-if="comparedCountries[1] !== undefined" v-html="prunify(comparedCountries[1].name)">
                        </div>
                        <div class="geos_col" @click="comparedGeoColSelected = 2; displayGeoModal = true; modaledCountryInput = comparedCountries[2];" v-if="comparedCountries[2] !== undefined" v-html="prunify(comparedCountries[2].name)">
                        </div>
                    </div>
                </div>
                
                <div class="content_nodata" v-if="selectedIndicators.length == 0">
                    <div class="nodata_wrapper">
                        <div class="nodata_title">You have no indicators selected</div>
                        <a class="nodata_bt" @click="displayIndicatorModal = true">Add Indicators</a>
                    </div>
                </div>

                <div class="content_main">
                    <div v-for="(classifItem, classifIndex) in DBClassifIndicators" :key="classifIndex" class="classif_item" v-if="hasSelectedIndicators(classifItem.items)">
                        <div class="classif_col" data-col="1">
                            <div class="classif_key" :data-classif="classifItem.key">{{classifItem.key}}</div>
                        </div>
                        <div class="classif_col" data-col="2" :data-classif="classifItem.key">
                            <div v-for="(indicatorItem, indicatorIndex) in classifItem.items" :key="indicatorIndex" class="indicator_item" v-if="isIndicatorSelected(indicatorItem)" :data-id="indicatorItem.id" :class="(indicatorItem.key_indicator == '1') ? 'iskey' : ''">
                                <div class="indicator_desc">
                                    <div class="indicator_keytag" v-if="indicatorItem.key_indicator == '1'">Key indicator</div>
                                    <nuxt-link :to="'/indicator/'+indicatorItem.id" class="indicator_name">
                                        {{indicatorItem.name}}
                                    </nuxt-link>
                                    <div class="indicator_unit">{{indicatorItem.tag}}</div>
                                    <div class="indicator_tooltip">
                                        Click to view indicator page
                                    </div>
                                </div>
                                <div class="indicator_geovalues">
                                    <div class="geovalues_col">
                                        <div class="geovalues_col_content">
                                            <geovaluesTableCell :refYear="computeRefYear(indicatorItem.id)" :indicatorData="$store.DBGeoItems[selectedCountry].indicators[indicatorItem.id]" :indicatorID="indicatorItem.id" :comparedCountries="dynamicComparedCountries" :dataType="indicatorItem.dataviz_type" :isReferring="true" :geoType="countryObj.type" :geoID="selectedCountry" :geoLabel="countryName" :geoGroups="$store.DBGeoGroups"></geovaluesTableCell>
                                        </div>
                                    </div>
                                    <div class="geovalues_col" v-if="comparedCountries[0] !== undefined">
                                        <div class="geovalues_col_content" v-if="$store.DBGeoItems[comparedCountries[0].m49] !== undefined">
                                            <geovaluesTableCell :refYear="computeRefYear(indicatorItem.id)" :indicatorData="$store.DBGeoItems[comparedCountries[0].m49].indicators[indicatorItem.id]" :indicatorID="indicatorItem.id" :comparedCountries="dynamicComparedCountries" :dataType="indicatorItem.dataviz_type" :isReferring="false" :geoType="comparedCountries[0].type" :geoID="comparedCountries[0].m49" :geoLabel="comparedCountries[0].name" :geoGroups="$store.DBGeoGroups"></geovaluesTableCell>
                                        </div>
                                        <div class="geovalues_col_content" v-if="$store.DBGeoItems[comparedCountries[0].m49] == undefined">
                                            <div class="geovaluestable_cell">
                                                <div class="cell_value">
                                                    <div class="cell_value_nodata">no data</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="geovalues_col" v-if="comparedCountries[1] !== undefined">
                                        <div class="geovalues_col_content" v-if="$store.DBGeoItems[comparedCountries[1].m49] !== undefined">
                                            <geovaluesTableCell :refYear="computeRefYear(indicatorItem.id)" :indicatorData="$store.DBGeoItems[comparedCountries[1].m49].indicators[indicatorItem.id]" :indicatorID="indicatorItem.id" :comparedCountries="dynamicComparedCountries" :dataType="indicatorItem.dataviz_type" :isReferring="false" :geoType="comparedCountries[1].type" :geoID="comparedCountries[1].m49" :geoLabel="comparedCountries[1].name" :geoGroups="$store.DBGeoGroups"></geovaluesTableCell>
                                        </div>
                                        <div class="geovalues_col_content" v-if="$store.DBGeoItems[comparedCountries[1].m49] == undefined">
                                            <div class="geovaluestable_cell">
                                                <div class="cell_value">
                                                    <div class="cell_value_nodata">no data</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="geovalues_col" v-if="comparedCountries[2] !== undefined">
                                        <div class="geovalues_col_content" v-if="$store.DBGeoItems[comparedCountries[2].m49] !== undefined">
                                            <geovaluesTableCell :refYear="computeRefYear(indicatorItem.id)" :indicatorData="$store.DBGeoItems[comparedCountries[2].m49].indicators[indicatorItem.id]" :indicatorID="indicatorItem.id" :comparedCountries="dynamicComparedCountries" :dataType="indicatorItem.dataviz_type" :isReferring="false" :geoType="comparedCountries[2].type" :geoID="comparedCountries[2].m49" :geoLabel="comparedCountries[2].name" :geoGroups="$store.DBGeoGroups"></geovaluesTableCell>
                                        </div>
                                        <div class="geovalues_col_content" v-if="$store.DBGeoItems[comparedCountries[2].m49] == undefined">
                                            <div class="geovaluestable_cell">
                                                <div class="cell_value">
                                                    <div class="cell_value_nodata">no data</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="GeographySelectorModal" class="appmodal" :class="[(selectedCountry == '') ? 'nomodal' : '', (displayGeoModal || selectedCountry == '') ? 'displayed': '']">
            <div class="appmodal_head" v-if="displayGeoModal">
                Change a country region or subregion
                <a class="appmodal_closebt" v-if="selectedCountry != ''" @click="displayGeoModal = !displayGeoModal"></a>
            </div>
            <div class="appmodal_content">
                <geographySelector :state="'expanded'" :modaled="(displayGeoModal) ? true : false" :parentSelected="selectedCountry" @selectCountryFromModal="updateModaledCountry()" :modaledCountryInput="modaledCountryInput" :mapColor="(selectedCountry == '') ? 'green' : 'grey'" :hasTooltipValues="false"></geographySelector>
            </div>
        </div>

        <div id="IndicatorSelectorModal" class="appmodal" :class="(displayIndicatorModal) ? 'displayed' : ''">
            <div class="appmodal_head">
                Edit and filter the indicators list
                <a class="appmodal_closebt" @click="displayIndicatorModal = !displayIndicatorModal"></a>
            </div>
            <div class="appmodal_content">
                <indicatorSelector :mainColor="'green'" :parentSelected="'default'" :state="'expanded'" :modaled="true" :selectedIndicators="selectedIndicators" :isMultipleSelection="true" @selectIndicatorsFromModal="updateModaledIndicators()" @aboutIndicatorsModal="displayIndicatorsModal = true"></indicatorSelector>
            </div>
        </div>

        <paris21Modal type="indicators" :displayed="displayIndicatorsModal" @closeModal="displayIndicatorsModal = false"></paris21Modal>

        <paris21Modal type="about" :displayed="displayAboutModal" @closeModal="displayAboutModal = false"></paris21Modal>

        <paris21Modal type="download" :displayed="displayDownloadModal" @closeModal="displayDownloadModal = false"></paris21Modal>

        <paris21Footer @aboutModal="displayAboutModal = true"></paris21Footer>
    </div>
</template>

<script>
import * as UTILS from '~/commons/utils/index.js'
import {_} from 'underscore'
import paris21Header from '~/components/paris21Header.vue'
import paris21Footer from '~/components/paris21Footer.vue'
import paris21Modal from '~/components/paris21Modal.vue'
import geographySelector from '~/components/geographySelector.vue'
import indicatorSelector from '~/components/indicatorSelector.vue'
import geovaluesTableCell from '~/components/geovaluesTableCell.vue'

var prune = require("underscore.string/prune")
var numberFormat = require('underscore.string/numberFormat')

export default {
    components: {
        'paris21Header': paris21Header,
        'paris21Footer': paris21Footer,
        'paris21Modal': paris21Modal,
        'geographySelector': geographySelector,
        'geovaluesTableCell': geovaluesTableCell,
        'indicatorSelector': indicatorSelector
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
            defaultCountry: '250',
            routedCountry: '',
            selectedCountry: '',
            comparedCountries: [{name:'Subregion', m49: 'SUB'}, {name:'Region', m49: 'REG'}, {name:'World', m49: '1'}],
            selectedIndicators: [],
            DBIndicatorsObj: '',
            DBClassifIndicators: '',
            countryObj: {},
            countryName: '',
            displayGeoModal: false,
            modaledCountry: '',
            modaledCountryInput: {},
            comparedGeoColSelected: 0,
            displayIndicatorModal: false,
            xlsLinkAttr: '',
            lastPopAvailable: '',
            lastGDPAvailable: '',
            NSOWebsite: '',
            lastIncomeGroup: '',
            displayIndicatorsModal: false,
            displayAboutModal: false,
            displayDownloadModal: false
        }
    },

    mounted: function () {
        var self = this

        this.selectedCountry = this.routeParams.pathMatch.replace('/','')
        this.loadAPIIndicators()

        window.addEventListener('scroll', this.handleScroll)
    },

    methods: {
        loadAPIIndicators: function () {
            var self = this

            if(this.$store.csvDataPromiseIndicators === undefined) {
                this.$store.csvDataPromiseIndicators = UTILS.getAPIIndicators(this.$store)
                this.$store.csvDataPromiseIndicators.then( function(promiseCallback) {
                    self.loadGeoGroups()
                })
            } else {
                this.loadGeoGroups()
            }
        },

        loadGeoGroups: function () {
            var self = this

            if(this.$store.geoGroupsPromise === undefined) {
                this.$store.geoGroupsPromise = UTILS.getGeoGroups(this.$store)
                this.$store.geoGroupsPromise.then( function(promiseCallback) {
                    self.loadAPIGeography();
                })
            } else {
                this.loadAPIGeography();
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
            if(this.selectedCountry !== ''){
                this.comparedCountries = []

                if(this.$store.DBGeographyObj[this.selectedCountry].subregion !== '' && this.$store.DBGeographyObj[this.selectedCountry].type !== 'subregion') {
                    this.comparedCountries.push({
                        name: this.$store.DBGeographyObj[this.selectedCountry].subregion,
                        m49: this.$store.DBGeographyObj[this.selectedCountry].subregion_code,
                        type: 'subregion'
                    })
                }

                if(this.$store.DBGeographyObj[this.selectedCountry].region !== '' && this.$store.DBGeographyObj[this.selectedCountry].type !== 'region') {
                    this.comparedCountries.push({
                        name: this.$store.DBGeographyObj[this.selectedCountry].region,
                        m49: this.$store.DBGeographyObj[this.selectedCountry].region_code,
                        type: 'region'
                    })
                }

                this.comparedCountries.push({
                    name: 'World',
                    m49: '1',
                    type: 'world'
                })
                this.loadGeoItemData(this.selectedCountry)
            } else {
                this.updatePage()
            }
        },

        loadGeoItemData: function (geoID, modaled) {
            var self = this
            //geoID = geoID.toLowerCase()
            if(this.$store.csvDataPromiseGeoItemData === undefined) {
                this.$store.csvDataPromiseGeoItemData = UTILS.getAPIGeoItemData(this.$store, geoID)
                this.$store.csvDataPromiseGeoItemData.then( function(promiseCallback) {
                    self.$store.csvDataPromiseGeoItemData = undefined
                    if(modaled !== undefined && modaled){
                        self.updateComparisonGeos()
                    } else {
                        self.updatePage()
                    }
                })
            } else {
                if(modaled !== undefined && modaled){
                    self.updateComparisonGeos()
                } else {
                    self.updatePage()
                }
            }
        },

        updatePage: function () {
            console.log("DBGeoItems", this.$store.DBGeoItems);
            if(this.selectedCountry !== ''){
                this.dataLoaded = true
                this.DBClassifIndicators = this.$store.DBClassifIndicators
                this.countryObj = this.$store.DBGeographyObj[this.selectedCountry]
                this.countryName = this.countryObj.name
                if(this.selectedIndicators.length === 0) {
                    this.selectedIndicators = _.map(this.$store.DBDefaultCPage, function(indicator){
                        return indicator.id
                    })
                }

                console.log("ici", this.selectedCountry, this.$store.DBGeoItems);

                var allPopulations = this.$store.DBGeoItems[this.selectedCountry].indicators[94]
                if(allPopulations !== undefined) {
                    var yearsValues = _.without(allPopulations.years, "");
                    var tmpPop = yearsValues[yearsValues.length - 1]
                    this.lastPopAvailable = numberFormat(parseInt(tmpPop, 10), 0, '', ' ')
                }

                console.log("after")

                var allGDPS = this.$store.DBGeoItems[this.selectedCountry].indicators[35]
                if(allGDPS !== undefined) {
                    var gdpValues = _.without(allGDPS.years, "");
                    var tmpGDP = gdpValues[gdpValues.length-1]
                    this.lastGDPAvailable = numberFormat(parseInt(tmpGDP, 10), 0, '', ' ')
                }

                var allIncGroups = this.$store.DBGeoItems[this.selectedCountry].indicators[150]
                if(allIncGroups !== undefined) {
                    var tmpIncGroup = _.values(allIncGroups.years)[_.size(allIncGroups.years)-1]
                    this.lastIncomeGroup = tmpIncGroup
                }

                var allWebsiteLinks = this.$store.DBGeoItems[this.selectedCountry].indicators[77]
                if(allWebsiteLinks !== undefined) {
                    var tmpLink = _.values(allWebsiteLinks.years)[_.size(allWebsiteLinks.years)-1]
                    this.NSOWebsite = tmpLink
                }
            }
        },

        displayYearValue:function(geoIndicator){
            var dataValue = '';

            if(geoIndicator !== undefined && geoIndicator.years !== undefined){
                var sizeValues = _.size(geoIndicator.years)
                dataValue = _.values(geoIndicator.years)[sizeValues-1]
            }
            else dataValue = 'No Data';

            return dataValue
        },

        updateModaledCountry:function(){
            this.displayGeoModal = false
            this.loadGeoItemData(this.modaledCountry.m49, true)
        },

        updateComparisonGeos: function () {
            this.comparedCountries[this.comparedGeoColSelected] = this.modaledCountry
            this.comparedCountries = JSON.parse(JSON.stringify(this.comparedCountries))
        },

        computeRefYear: function (indicatorID) {
            if(this.$store.DBGeoItems[this.selectedCountry] !== undefined && this.$store.DBGeoItems[this.selectedCountry].indicators[indicatorID] !== undefined) {
                var lastValue = UTILS.getLastKeyFromObj(this.$store.DBGeoItems[this.selectedCountry].indicators[indicatorID], 'years', 'float')
                if (lastValue == undefined) return null
                return lastValue
            } else {
                return null
            }
        },

        hasSelectedIndicators: function (classifItems) {
            var itemsIDS = _.map(classifItems, function(item){ return item.id; })
            var selectedFromList = _.intersection(itemsIDS, this.selectedIndicators)
            if(selectedFromList.length > 0) return true
            return false
        },

        isIndicatorSelected: function (indicator) {
            if(_.indexOf(this.selectedIndicators, indicator.id) > -1) {
                return true
            }
            return false
        },

        updateModaledIndicators: function () {
            this.displayIndicatorModal = false
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

            tab_text += '<tr><th>Country</th><th>Indicator</th><th>Year</th><th>Data Value</th><th>Data Aggregate</th></tr>'

            if(contentType == 'head') {
                _.each(this.$store.DBGeoItems[this.selectedCountry].indicators, function (ind){
                    var indKeys = _.keys(ind.years)
                    var indValue = _.values(ind.years)[indKeys.length - 1]
                    if(self.$store.DBIndicatorsObj[ind.id] !== undefined) {
                        if(self.$store.DBIndicatorsObj[ind.id].dataviz_type == 'ordinal') {
                            var foundSpecificIndicator = _.find(UTILS.specificIndicators, function (indic) {
                              return ind.id == indic.id;
                            })
                            if(foundSpecificIndicator !== undefined) {
                                var specificLabelsObj = {}
                                _.each(foundSpecificIndicator.labels, function(indicLabel){
                                    specificLabelsObj[indicLabel.value] = indicLabel;
                                })
                            }
                            //if is country
                            if(self.$store.DBGeographyObj[self.selectedCountry].country != '') {
                                var countryValue = (parseFloat(indValue)).toFixed(1)
                                indValue = countryValue
                                if(indValue == undefined || indValue == "") indValue = "no data"
                                tab_text += '<tr><td>'+self.$store.DBGeographyObj[self.selectedCountry].name+'<td>'+self.$store.DBIndicatorsObj[ind.id].name+'</td><td>'+indKeys[indKeys.length-1]+'</td><td>'+indValue+'</td><td></td></tr>'
                            } else {
                                var JSONYearData = JSON.parse(indValue.replace('"."', '","'));
                                var labelizedObj = {};
                                _.each(JSONYearData, function (objData){
                                    var countryValue = (parseFloat(objData.value)).toFixed(1)
                                    labelizedObj[specificLabelsObj[countryValue].label] = {
                                        "nb": objData.nb
                                    }
                                });

                                _.each(labelizedObj, function (objData, objIndex){
                                    tab_text += '<tr><td>'+self.$store.DBGeographyObj[self.selectedCountry].name+'<td>'+self.$store.DBIndicatorsObj[ind.id].name+'</td><td>'+indKeys[indKeys.length-1]+'</td><td>'+objIndex+'</td><td>'+objData.nb+'</td></tr>'
                                })
                            } 
                        } else {
                            if(indValue == undefined || indValue == "") indValue = "no data"
                            tab_text += '<tr><td>'+self.$store.DBGeographyObj[self.selectedCountry].name+'<td>'+self.$store.DBIndicatorsObj[ind.id].name+'</td><td>'+indKeys[indKeys.length-1]+'</td><td>'+indValue+'</td><td></td></tr>'
                        }  
                    }
                })
            } else {
                var allCountriesM49 = _.union([this.selectedCountry], _.map(this.comparedCountries, function(cc){ return cc.m49;}) )
                _.each(this.selectedIndicators, function (selInd) {

                    var inc = 0;
                    console.log("selInd", selInd)
                    
                    var refYear = null
                    var selectedCountryIndicatorData = self.$store.DBGeoItems[self.selectedCountry].indicators[selInd]
                    if (selectedCountryIndicatorData !== undefined && selectedCountryIndicatorData.years !== undefined) {
                        refYear = UTILS.getLastKeyFromObj(self.$store.DBGeoItems[self.selectedCountry].indicators[selInd], 'years', 'float');
                    }

                    _.each(allCountriesM49, function(countryM49){
                        var indValue = ''

                        if(self.$store.DBGeoItems[countryM49] !== undefined) {
                            var indicatorData = self.$store.DBGeoItems[countryM49].indicators[selInd]
                            
                            if (indicatorData !== undefined && indicatorData.years !== undefined) {

                                if(refYear == null) refYear = _.keys(indicatorData.years)[_.size(indicatorData.years)-1]
                                indValue = indicatorData.years[refYear]
                                console.log("indicatorData", indicatorData, indValue)

                                if(indValue == undefined || indValue == ""){
                                    indValue = "no data";
                                    tab_text += '<tr><td>'+self.$store.DBGeographyObj[countryM49].name+'</td><td>'+self.$store.DBIndicatorsObj[selInd].name+'</td><td>'+refYear+'</td><td>'+indValue+'</td><td></td></tr>'
                                } else if(self.$store.DBIndicatorsObj[indicatorData.id].dataviz_type == 'ordinal') {
                                    var foundSpecificIndicator = _.find(UTILS.specificIndicators, function (indic) {
                                      return indicatorData.id == indic.id;
                                    })
                                    if(foundSpecificIndicator !== undefined) {
                                        var specificLabelsObj = {}
                                        _.each(foundSpecificIndicator.labels, function(indicLabel){
                                            specificLabelsObj[indicLabel.value] = indicLabel;
                                        })
                                    }
                                    //if is country
                                    if(self.$store.DBGeographyObj[countryM49].country != '') {
                                        var countryValue = (parseFloat(indValue)).toFixed(1)
                                        indValue = specificLabelsObj[countryValue].label
                                    } else {
                                        var JSONYearData = JSON.parse(indValue.replace('"."', '","'));
                                        var labelizedObj = {};
                                        _.each(JSONYearData, function (objData){
                                            var countryValue = (parseFloat(objData.value)).toFixed(1)
                                            labelizedObj[specificLabelsObj[countryValue].label] = {
                                                "nb": objData.nb
                                            }
                                        });
                                        indValue = JSON.stringify(labelizedObj)
                                    } 
                                    //End Specific ordinal
                                    _.each(labelizedObj, function (objData, objIndex){
                                        tab_text += '<tr><td>'+self.$store.DBGeographyObj[countryM49].name+'</td><td>'+self.$store.DBIndicatorsObj[selInd].name+'</td><td>'+refYear+'</td><td>'+objIndex+'</td><td>'+objData.nb+'</td></tr>'
                                    })
                                    
                                } else {
                                    tab_text += '<tr><td>'+self.$store.DBGeographyObj[countryM49].name+'</td><td>'+self.$store.DBIndicatorsObj[selInd].name+'</td><td>'+refYear+'</td><td>'+indValue+'</td><td></td></tr>'
                                }
                                
                                
                            }        
                        }

                        inc += 1
                    })
                })
            }

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
                if(contentType == 'head'){
                    document.querySelector('#HeadLinkFake').setAttribute('href', this.xlsLinkAttr)
                    document.querySelector('#HeadLinkFake').click()
                }
                else{
                    document.querySelector('#ContentLinkFake').setAttribute('href', this.xlsLinkAttr)
                    document.querySelector('#ContentLinkFake').click()
                }
            }
        },

        handleScroll: function () {
            if(window.innerWidth < 800) return false
                
            var $contentHead = document.querySelector('.main_content .content_head')
            if($contentHead === null) return true

            var viewportOffset = $contentHead.getBoundingClientRect()
            if (window.scrollY > 190) {
                $contentHead.setAttribute('data-fixed', 'true')
            } else {
                $contentHead.setAttribute('data-fixed', 'false')
            }

            var classifKeys = document.querySelectorAll('.classif_key')
            for (var i = classifKeys.length - 1; i >= 0; i--) {
                classifKeys[i].setAttribute('data-fixed', 'false')
            }

            var classifCols = document.querySelectorAll('.classif_col[data-col="2"]')
            var viewportOffset = ''
            for (var k = classifCols.length - 1; k >= 0; k--) {
                var el = classifCols[k]
                var dataClassif = el.getAttribute('data-classif')
                viewportOffset = el.getBoundingClientRect()

                if (viewportOffset.top < 150 && (viewportOffset.top + (viewportOffset.height - 20)) > 150) {
                    var classifKeyAssociated = document.querySelector('.classif_key[data-classif="'+dataClassif+'"]')
                    classifKeyAssociated.setAttribute('data-fixed', 'true')
                    break;
                }
            }
        },

        prunify: function (value) {
            return prune(value, 16, '')
        },
    },

    computed: {
        dynamicComparedCountries: function () {
            var m49Array = [this.selectedCountry]
            if(this.comparedCountries[0] !== undefined) m49Array.push(this.comparedCountries[0].m49)
            if(this.comparedCountries[1] !== undefined) m49Array.push(this.comparedCountries[1].m49)
            if(this.comparedCountries[2] !== undefined) m49Array.push(this.comparedCountries[2].m49)
            return m49Array
        },
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



#Country{
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#159e9d+0,e5eff6+100 */
    background: rgb(21,158,157); /* Old browsers */
    background: -moz-linear-gradient(top, rgba(21,158,157,1) 0%, rgba(229,239,246,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(21,158,157,1) 0%,rgba(229,239,246,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(21,158,157,1) 0%,rgba(229,239,246,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#159e9d', endColorstr='#e5eff6',GradientType=0 ); /* IE6-9 */
    height: auto;
    min-height: 100%;

    #IndicatorSelectorModal{
        z-index: 10000;
        -webkit-box-shadow: 0 20px 120px 0 rgba(3,100,99,0.8);
        box-shadow: 0 20px 120px 0 rgba(3,100,99,0.8);
        .sidebar_panel{
            background: #ededed !important;
        }
    }

    #GeographySelectorModal, #IndicatorSelectorModal{
        -webkit-box-shadow: 0 20px 120px 0 rgba(3,100,99,0.8);
        box-shadow: 0 20px 120px 0 rgba(3,100,99,0.8);
        opacity: 0;
        z-index: -1;
        @include transition((opacity), 0.6s, ease-in-out);
        &.displayed{
            opacity: 1;
            z-index: 10000;
        }
        &.nomodal{
            position: relative;
            box-shadow: none;
            @include transform(translate(0,0));
            left: 0;
            top: 0;
            display: inline-block;
            margin-top: 140px;
            margin-bottom: 80px;
        }

        .selector[data-modaled="true"]{
            #GeographyInput{
                background: #fff !important;
            }
        }
    }



    &.fixed{
        overflow: hidden;
    }
    .page_main{
        .main_head{
            text-align: left;
            padding-left: 160px;
            position: relative;
            font-size: 12px;
            font-family: "montserratbold";
            margin-top: 80px;
            .head_title{
                color: #fff;
                font-size: 22px;
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
                    &:nth-child(2){
                        &:before{
                            content:"";
                            width: 2px;
                            height: 100%;
                            background: $colorDarkGreen;
                            position: absolute;
                            right: 100%;
                            top: 0px;
                        }
                    }
                    &:nth-child(2){
                        padding-left: 20px;
                        width: 300px;
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
            margin-bottom: 140px;
            min-height: 400px;
            position: relative;
            .content_nodata{
                text-align: center;
                margin-top: 100px;
                .nodata_wrapper{
                    .nodata_title{
                        font-family: "montserratbold";
                        font-size: 14px;
                        color: $textColor;
                    }
                    .nodata_bt{
                        background: $colorRed;
                        color:#fff;
                        padding:10px 20px;
                        text-transform: uppercase;
                        font-size: 18px;
                        cursor: pointer;
                        margin-top: 10px;
                        border-radius: 20px;
                        display: inline-block;
                        font-family: "roboto_condensedbold";
                    }
                }
            }
            .content_head{
                text-align: left;
                position: absolute;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 100px;
                z-index: 5;
                background: #fff;
                &[data-fixed="true"]{
                    position: fixed;
                    left: 50%;
                    top: 50px;
                    width: 1000px;
                    z-index: 1000000;
                    @include transform(translate(-50%, 0));
                }
                .head_menus{
                    display: inline-block;
                    vertical-align: top;
                    margin-left: 172px;
                    width: $indicatorColWidth;
                    border-bottom: 2px solid #2F2F2F;
                    color: #2F2F2F;
                    padding: 10px 0;
                    margin-top: 20px;
                    .indlist_bt{
                        font-family: "montserratitalic";
                        font-size: 20px;
                        color: #2F2F2F;
                        display: block;
                        position: relative;
                        padding-left: 40px;
                        cursor: pointer;
                        &:after{
                            content: "";
                            position: absolute;
                            left: 0px;
                            top: 50%;
                            @include transform(translate(0, -50%));
                            width: 32px;
                            height: 24px;
                            border-radius: 12px;
                            background: url("~/static/images/global/icon-btn_edit-white.svg") no-repeat center center $colorRed;
                        }
                        &:hover{
                            &:after{
                                background-color: #2F2F2F;
                            }
                        }
                    }
                    .dataset_link{
                        color: #2F2F2F;
                        display: block;
                        position: relative;
                        margin-top: 10px;
                        padding-left: 40px;
                        cursor: pointer;
                        &:after{
                            content: "";
                            position: absolute;
                            left: 0%;
                            top: 50%;
                            @include transform(translate(0, -50%));
                            width: 32px;
                            height: 24px;
                            border-radius: 12px;
                            background: url("~/static/images/global/icon-btn_download_data-white.svg") no-repeat center center $colorRed;
                        }
                        &:hover{
                            &:after{
                                background-color: #2F2F2F;
                            }
                        }
                    }
                }
                .head_geos{
                    display: inline-block;
                    vertical-align: top;
                    width: $geosColWidth;
                    padding-top: 16px;
                    margin-top: 20px;
                    .geos_col{
                        font-size: 14px;
                        line-height: 18px;
                        padding-top: 5px;
                        color: #8C8C8C;
                        display: inline-block;
                        vertical-align: top;
                        width: $geosSingleColWidth;
                        text-align: center;
                        margin: 0 $geosSingleColMargin;
                        cursor: pointer;
                        position: relative;
                        &:before{
                            content: "";
                            position: absolute;
                            left: 50%;
                            bottom: 100%;
                            width: 32px;
                            height: 24px;
                            border-radius: 12px;
                            @include transform(translate(-50%, 0));
                            background: url("~/static/images/global/icon-btn_edit-white.svg") no-repeat center center $colorRed;
                        }
                        &.geos_col_country{
                            font-size: 14px;
                            color: $colorDarkGreen;
                            font-family: "montserratbold";
                            &:before{
                                width: 0;
                                height: 0;
                                border-style: solid;
                                border-width: 10px 10px 0 10px;
                                border-color: $colorDarkGreen transparent transparent transparent;
                                background: transparent;
                                border-radius: 0;
                                margin-bottom: 26px;
                            }
                            &:hover{
                                &:before{
                                    background-color: transparent;
                                }
                            }
                        }
                        &:hover{
                            &:before{
                                background-color: #2F2F2F;
                            }
                        }
                    }
                }
            }
            .content_main{
                margin-top: 100px;
            }
            .classif_item{
                margin-bottom: 40px;
                text-align: left;
                .classif_col{
                    display: inline-block;
                    vertical-align: top;
                    position: relative;
                    &[data-col="1"]{
                        width: 15%;
                    }
                    &[data-col="2"]{
                        width: 80%;
                        &:before{
                            content:"";
                            width: 2px;
                            height: 100%;
                            background: $colorDarkGreen;
                            position: absolute;
                            right: 100%;
                            top: 0px;
                        }
                    }
                }
                .classif_key{
                    font-size: 14px;
                    color: #2F2F2F;
                    font-family: "montserratbold";
                    text-align: right;
                    padding: 28px 14px 0 0;
                    position: relative;
                    &:before{
                        content:"";
                        position: absolute;
                        right: 0px;
                        bottom: 4px;
                        width: 60px;
                        height: 60px;
                    }
                    &[data-fixed="true"]{
                        position: fixed;
                        right: 50%;
                        top: 150px;
                        @include transform(translate(-336px, 0));
                        z-index: 10;
                    }
                    &[data-classif="Production"]{
                        &:before{
                            background: url("~/static/images/indicators/icon-production-green.svg") no-repeat 0 0;
                        }
                    }
                    &[data-classif="Dissemination"]{
                        &:before{
                            background: url("~/static/images/indicators/icon-dissemination-green.svg") no-repeat 0 0;
                        }
                    }
                    &[data-classif="Use"]{
                        &:before{
                            background: url("~/static/images/indicators/icon-valuation-green.svg") no-repeat 0 0;
                        }
                    }
                    &[data-classif="Investment"]{
                        &:before{
                            background: url("~/static/images/indicators/icon-investment-green.svg") no-repeat 0 0;
                        }
                    }
                    &[data-classif="Planning"]{
                        &:before{
                            background: url("~/static/images/indicators/icon-planning-green.svg") no-repeat 0 0;
                        }
                    }
                }
                .indicator_item{
                    height: 120px;
                    padding: 0px;
                    margin: 0 10px;
                    background: #fff;
                    border-bottom: 1px dotted #b8b8b8;
                    &.iskey:nth-child(even){
                        background: #f6fdfd;
                    }
                    &.iskey:nth-child(odd){
                        background: #E8FAFA;
                    }
                    .indicator_desc{
                        width: $indicatorColWidth;
                        display: inline-block;
                        vertical-align: top;
                        margin-top: 10px;
                        padding: 0 10px;
                        position: relative;
                        .indicator_tooltip{
                            position: absolute;
                            right: 100%;
                            top: 50%;
                            @include transform(translate(0, -50%));
                            background: $textColor;
                            width: 140px;
                            padding: 10px;
                            color: #fff;
                            font-size: 12px;
                            display: none;
                            text-align: center;
                            font-family: "montserratitalic";
                        }
                        &:hover{
                            .indicator_tooltip{
                                display: block;
                            }
                        }
                    }
                    .indicator_geovalues{
                        width: $geosColWidth;
                        display: inline-block;
                        vertical-align: top;
                        height: 100%;
                        .geovalues_col{
                            text-align: center;
                            width: $geosSingleColWidth;
                            margin: 0 $geosSingleColMargin;
                            display: inline-block;
                            vertical-align: top;
                            line-height: 50px;
                            height: 100%;
                            position: relative;
                            &:hover{
                                z-index: 100000;
                            }
                            .geovalues_col_content{
                                width: 100%;
                                height: 70%;
                            }
                        }
                    }
                    .indicator_keytag{
                        color: $colorGreen;
                        font-family: "montserratitalic";
                        font-size: 10px;
                        position: relative;
                        padding-left: 13px;
                        &:before{
                            content: "";
                            position: absolute;
                            background: url("~/static/images/global/icon-key_indicator.svg") no-repeat 0 0;
                            background-size: 100% 100%;
                            width: 9px;
                            height: 9px;
                            left: 0px;
                            top: 50%;
                            @include transform(translate(0, -50%));
                        }
                    }
                    .indicator_name{
                        font-size: 14px;
                        color: #2F2F2F;
                        font-family: "montserratbold";
                        text-decoration: none;
                    }
                    .indicator_unit{
                        font-size: 12px;
                        color: #8C8C8C;
                    }
                }
            }
        }
    }
}
</style>
