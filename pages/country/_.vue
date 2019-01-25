<template>
    <div id="Country" class="page" :class="(displayGeoModal || displayIndicatorModal || selectedCountry == '') ? 'fixed' : ''" data-page="country">
        <div class="appmodal_cache" :class="(displayGeoModal || displayIndicatorModal) ? 'displayed': ''" @click="displayGeoModal = false; displayIndicatorModal = false"></div>
        <paris21Header :page="'country'"></paris21Header>

        <div class="page_main">
            <div class="main_head">
                <div class="head_title">Statistics for <span class="bolder">{{ countryName }}</span></div>
                <div class="head_cartridge">
                    <div class="cartridge_col">
                        <div class="cartridge_pop">Population : </div>
                        <div class="cartridge_hdi">HDI : </div>
                        <a class="cartridge_website_link" href="" target="_blank">Website</a>
                    </div>
                    <div class="cartridge_col">
                        <div class="cartridge_member">OECD member : </div>
                        <div class="cartridge_pib">PIB : </div>
                    </div>
                </div>
                <nuxt-link :to="'/'" class="head_backbt">Back</nuxt-link>
                <a class="head_link" @click="downloadAllCountryData('head')">Download all country dataset .xls</a>
                <a id="HeadLinkFake" class="head_link_fake" download="country_dataset.xls"></a>
            </div>
            <div class="main_content" v-if="dataLoaded">
                <div class="content_head">
                    <div class="head_menus">
                        <a class="indlist_bt" @click="displayIndicatorModal = true">Indicators list</a>
                        <a class="dataset_link" @click="downloadAllCountryData('content')">Download this dataset .xls</a>
                        <a id="ContentLinkFake" :href="xlsLinkAttr" download="country_dataset.xls"></a>
                    </div>
                    <div class="head_geos">
                        <div class="geos_col geos_col_country">{{ $store.DBGeographyObj[selectedCountry].name }}</div>
                        <div class="geos_col" @click="comparedGeoColSelected = 0; displayGeoModal = true; modaledCountryInput = comparedCountries[0];">
                            {{comparedCountries[0].name}}
                        </div>
                        <div class="geos_col" @click="comparedGeoColSelected = 1; displayGeoModal = true; modaledCountryInput = comparedCountries[1];">
                            {{comparedCountries[1].name}}
                        </div>
                        <div class="geos_col" @click="comparedGeoColSelected = 2; displayGeoModal = true; modaledCountryInput = comparedCountries[2];">
                            {{comparedCountries[2].name}}
                        </div>
                    </div>
                </div>
                <div v-for="(classifItem, classifIndex) in DBClassifIndicators" :key="classifIndex" class="classif_item" v-if="hasSelectedIndicators(classifItem.items)">
                    <div class="classif_col" data-col="1">
                        <div class="classif_key" :data-classif="classifItem.key">{{classifItem.key}}</div>
                    </div>
                    <div class="classif_col" data-col="2">
                        <div v-for="(indicatorItem, indicatorIndex) in classifItem.items" :key="indicatorIndex" class="indicator_item" v-if="isIndicatorSelected(indicatorItem)" :data-id="indicatorItem.id">
                            <div class="indicator_desc">
                                <div class="indicator_keytag" v-if="indicatorItem.key_indicator == '1'">Key indicator</div>
                                <div class="indicator_name">{{indicatorItem.name}}</div>
                                <div class="indicator_unit">{{indicatorItem.dataviz_type}}</div>
                            </div>
                            <div class="indicator_geovalues">
                                <div class="geovalues_col">
                                    <div class="geovalues_col_content">
                                        <geovaluesTableCell :refYear="computeRefYear(indicatorItem.id)" :indicatorData="$store.DBGeoItems[selectedCountry].indicators[indicatorItem.id]" :indicatorID="indicatorItem.id" :comparedCountries="[selectedCountry, comparedCountries[0].m49, comparedCountries[1].m49, comparedCountries[2].m49]" :dataType="indicatorItem.dataviz_type" :isReferring="true"></geovaluesTableCell>
                                    </div>
                                </div>
                                <div class="geovalues_col">
                                    <div class="geovalues_col_content" v-if="$store.DBGeoItems[comparedCountries[0].m49] !== undefined">
                                        <geovaluesTableCell :refYear="computeRefYear(indicatorItem.id)" :indicatorData="$store.DBGeoItems[comparedCountries[0].m49].indicators[indicatorItem.id]" :indicatorID="indicatorItem.id" :comparedCountries="[selectedCountry, comparedCountries[0].m49, comparedCountries[1].m49, comparedCountries[2].m49]" :dataType="indicatorItem.dataviz_type" :isReferring="false"></geovaluesTableCell>
                                    </div>
                                </div>
                                <div class="geovalues_col">
                                    <div class="geovalues_col_content" v-if="$store.DBGeoItems[comparedCountries[1].m49] !== undefined">
                                        <geovaluesTableCell :refYear="computeRefYear(indicatorItem.id)" :indicatorData="$store.DBGeoItems[comparedCountries[1].m49].indicators[indicatorItem.id]" :indicatorID="indicatorItem.id" :comparedCountries="[selectedCountry, comparedCountries[0].m49, comparedCountries[1].m49, comparedCountries[2].m49]" :dataType="indicatorItem.dataviz_type" :isReferring="false"></geovaluesTableCell>
                                    </div>
                                </div>
                                <div class="geovalues_col">
                                    <div class="geovalues_col_content" v-if="$store.DBGeoItems[comparedCountries[2].m49] !== undefined">
                                        <geovaluesTableCell :refYear="computeRefYear(indicatorItem.id)" :indicatorData="$store.DBGeoItems[comparedCountries[2].m49].indicators[indicatorItem.id]" :indicatorID="indicatorItem.id" :comparedCountries="[selectedCountry, comparedCountries[0].m49, comparedCountries[1].m49, comparedCountries[2].m49]" :dataType="indicatorItem.dataviz_type" :isReferring="false"></geovaluesTableCell>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="GeographySelectorModal" class="appmodal" v-if="displayGeoModal || selectedCountry == ''">
            <div class="appmodal_head">
                Change a country region or suberegion
                <a class="appmodal_closebt" v-if="selectedCountry != ''" @click="displayGeoModal = !displayGeoModal"></a>
            </div>
            <div class="appmodal_content">
                <geographySelector :state="'expanded'" :modaled="true" :parentSelected="selectedCountry" @selectCountryFromModal="updateModaledCountry()" :modaledCountryInput="modaledCountryInput"></geographySelector>
            </div>
        </div>

        <div id="IndicatorSelectorModal" class="appmodal" v-if="displayIndicatorModal">
            <div class="appmodal_head">
                Edit and filter the indicators list
                <a class="appmodal_closebt" @click="displayIndicatorModal = !displayIndicatorModal"></a>
            </div>
            <div class="appmodal_content">
                <indicatorSelector :mainColor="'green'" :parentSelected="'default'" :state="'expanded'" :modaled="true" :selectedIndicators="selectedIndicators" :isMultipleSelection="true" @selectIndicatorsFromModal="updateModaledIndicators()"></indicatorSelector>
            </div>
        </div>

        <paris21Footer></paris21Footer>
    </div>
</template>

<script>
import * as UTILS from '~/commons/utils/index.js'
import {_} from 'underscore'
import paris21Header from '~/components/paris21Header.vue'
import paris21Footer from '~/components/paris21Footer.vue'
import geographySelector from '~/components/geographySelector.vue'
import indicatorSelector from '~/components/indicatorSelector.vue'
import geovaluesTableCell from '~/components/geovaluesTableCell.vue'

export default {
    components: {
        'paris21Header': paris21Header,
        'paris21Footer': paris21Footer,
        'geographySelector': geographySelector,
        'geovaluesTableCell': geovaluesTableCell,
        'indicatorSelector': indicatorSelector
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
            comparedCountries: [{name:'Subregion', m49: 'SUB'}, {name:'Region', m49: 'REG'}, {name:'World', m49: 'WOR'}],
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
        }
    },

    mounted: function () {
        var self = this
        console.log('routeParams', this.routeParams)

        this.selectedCountry = this.routeParams.pathMatch.toLowerCase()

        console.log('selectedCountry', this.selectedCountry)
        this.loadAPIIndicators()
    },

    methods: {
        loadAPIIndicators: function () {
            var self = this

            console.log('loadAPIIndicators', this.$store.csvDataPromiseIndicators)
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

            console.log('loadAPIGeography', this.$store.csvDataPromiseGeography)
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
                console.log('DBGeographyObj')
                console.log(this.$store.DBGeographyObj)

                if(this.$store.DBGeographyObj[this.selectedCountry].subregion !== '') {
                    this.comparedCountries.push({
                        name: this.$store.DBGeographyObj[this.selectedCountry].subregion,
                        m49: this.$store.DBGeographyObj[this.selectedCountry].subregion_code,
                    })
                }

                if(this.$store.DBGeographyObj[this.selectedCountry].region !== '') {
                    this.comparedCountries.push({
                        name: this.$store.DBGeographyObj[this.selectedCountry].region,
                        m49: this.$store.DBGeographyObj[this.selectedCountry].region_code,
                    })
                }

                this.comparedCountries.push({
                    name: 'World',
                    m49: '1'
                })

                this.loadGeoItemData(this.selectedCountry)
            } else {
                this.updatePage()
            }
        },

        loadGeoItemData: function (geoID, modaled) {
            var self = this

            geoID = geoID.toLowerCase()
            if(this.$store.csvDataPromiseGeoItemData === undefined) {
                this.$store.csvDataPromiseGeoItemData = UTILS.getAPIGeoItemData(this.$store, geoID)
                this.$store.csvDataPromiseGeoItemData.then( function(promiseCallback) {
                    //console.log('in store loaded', self.$store.DBGeography)
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
            if(this.selectedCountry !== ''){
                this.dataLoaded = true
                this.DBClassifIndicators = this.$store.DBClassifIndicators
                this.countryObj = this.$store.DBGeographyObj[this.selectedCountry]
                this.countryName = this.countryObj.name

                if(this.selectedIndicators.length === 0) {
                    this.selectedIndicators = _.map(this.$store.DBKeyIndicators, function(indicator){
                        return indicator.id
                    })
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
            if(this.$store.DBGeoItems[this.selectedCountry].indicators[indicatorID] !== undefined) {
                var lastValue = UTILS.getLastKeyFromObj(this.$store.DBGeoItems[this.selectedCountry].indicators[indicatorID], 'years', 'float')
                if (lastValue == undefined) return '2017'
                return lastValue
            } else {
                return '2017'
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
            console.log('updateModaledIndicators')
        },

        downloadAllCountryData: function (contentType) {
            var self = this;

            var tab_text = ''
            var data_type = 'data:application/vnd.ms-excel'

            tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">'
            tab_text += '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>'

            tab_text += '<x:Name>Error Messages</x:Name>'

            tab_text += '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>'
            tab_text += '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>'

            tab_text += "<table border='1px'>"

            tab_text += '<tr><th>Country</th><th>Indicator</th><th>Year</th><th>Data Value</th></tr>'

            if(contentType == 'head') {
                _.each(this.$store.DBGeoItems[this.selectedCountry].indicators, function (ind){
                    var indKeys = _.keys(ind.years)
                    var indValue = _.values(ind.years)[indKeys.length - 1]

                    tab_text += '<tr><td>'+this.$store.DBGeographyObj[this.selectedCountry].name+'<td>'+self.$store.DBIndicatorsObj[ind.id].name+'</td><td>'+indKeys[indKeys.length-1]+'</td><td>'+indValue+'</td></tr>'
                })
            } else {
                var allCountriesM49 = _.union([this.selectedCountry], _.map(this.comparedCountries, function(cc){ return cc.m49;}) )
                _.each(this.selectedIndicators, function (selInd) {
                    console.log('selInd', selInd)

                    var inc = 0;
                    var refYear = '';
                    _.each(allCountriesM49, function(countryM49){
                        console.log('countryM49', countryM49)
                        var indValue = ''

                        if(self.$store.DBGeoItems[countryM49] !== undefined) {
                            var indicatorData = self.$store.DBGeoItems[countryM49].indicators[selInd]
                            
                            if (indicatorData !== undefined && indicatorData.years !== undefined) {
                                if(inc == 0) {
                                    var indKeys = _.keys(indicatorData.years)
                                    indValue = _.values(indicatorData.years)[indKeys.length - 1]
                                    refYear = indKeys[indKeys.length-1]
                                } else {
                                    indValue = indicatorData.years[refYear]
                                }
                            }        
                        }

                        tab_text += '<tr><td>'+self.$store.DBGeographyObj[countryM49].name+'</td><td>'+self.$store.DBIndicatorsObj[selInd].name+'</td><td>'+refYear+'</td><td>'+indValue+'</td></tr>'

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
                    navigator.msSaveBlob(blob, 'Test file.xls');
                }
            } else {
                console.log(data_type);
                console.log(tab_text);
                if(contentType == 'head'){
                    document.querySelector('#HeadLinkFake').setAttribute('href', this.xlsLinkAttr)
                    document.querySelector('#HeadLinkFake').click()
                }
                else{
                    document.querySelector('#ContentLinkFake').setAttribute('href', this.xlsLinkAttr)
                    document.querySelector('#ContentLinkFake').click()
                }
            }
        }
    },

    computed: {

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
            margin-bottom: 140px;
            .content_head{
                text-align: left;
                margin-bottom: 10px;
                .head_menus{
                    display: inline-block;
                    vertical-align: top;
                    margin-left: 156px;
                    width: $indicatorColWidth;
                    border-bottom: 2px solid #2F2F2F;
                    color: #2F2F2F;
                    padding: 10px 0;
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
                            border-radius: 10px;
                            background: url("/images/global/icon-btn_edit-white.svg") no-repeat center center $colorRed;
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
                            border-radius: 10px;
                            background: url("/images/global/icon-btn_download_data-white.svg") no-repeat center center $colorRed;
                        }
                    }
                }
                .head_geos{
                    display: inline-block;
                    vertical-align: top;
                    width: $geosColWidth;
                    padding-top: 16px;
                    .geos_col{
                        font-size: 14px;
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
                            border-radius: 10px;
                            @include transform(translate(-50%, 0));
                            background: url("/images/global/icon-btn_edit-white.svg") no-repeat center center $colorRed;
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
                        }
                    }
                }
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
                    &[data-classif="Production"]{
                        &:before{
                            background: url("/images/indicators/icon-production-green.svg") no-repeat 0 0;
                        }
                    }
                    &[data-classif="Dissemination"]{
                        &:before{
                            background: url("/images/indicators/icon-dissemination-green.svg") no-repeat 0 0;
                        }
                    }
                    &[data-classif="Valuation"]{
                        &:before{
                            background: url("/images/indicators/icon-valuation-green.svg") no-repeat 0 0;
                        }
                    }
                    &[data-classif="Investment"]{
                        &:before{
                            background: url("/images/indicators/icon-investment-green.svg") no-repeat 0 0;
                        }
                    }
                    &[data-classif="Planning"]{
                        &:before{
                            background: url("/images/indicators/icon-planning-green.svg") no-repeat 0 0;
                        }
                    }
                }
                .indicator_item{
                    height: 80px;
                    padding: 0px;
                    margin: 0 10px;
                    &:nth-child(odd){
                        background: #E8FAFA;
                    }
                    .indicator_desc{
                        width: $indicatorColWidth;
                        display: inline-block;
                        vertical-align: top;
                        margin-top: 10px;
                        padding: 0 10px;
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
                            .geovalues_col_content{
                                width: 100%;
                                height: 100%;
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
                            background: url("/images/global/icon-key_indicator.svg") no-repeat 0 0;
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
