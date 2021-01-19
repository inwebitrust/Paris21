<template>
    <div class="selector" data-selector="geography" :data-state="state" :data-modaled="modaled" :data-multiple="isMultipleSelection" :data-maincolor="mainColor" :data-mapcolor="mapColor">

        <div class="selector_homecontent" :class="((state == 'home') || (state == 'shrinked')) ? 'displayed' : ''" @click="expandSelector()">
            <div class="homecontent_picto"></div>
            <div class="homecontent_title">
                Statistics on your <span class="bolder">region, country or subregion</span>
            </div>
            
            <button class="homecontent_expandbt isdesktop">FIND</button>
            <nuxt-link to="/country/" class="homecontent_expandbt ismobile" >FIND</nuxt-link>
            <!--
            <div class="homecontent_disclaimer" v-if="(state != 'shrinked')">
                <span class="disclaimer_title">Example : </span><br />
                <div class="disclaimer_text">
                    <a href="country/2">Africa</a>, <a href="country/142">Asia</a>, <a href="country/155">Western Europe</a>, <a href="country/419">Latin America and Caribeean</a>, etc...
                </div>
            </div>
            -->
        </div>

        <div class="selector_expandedcontent" :class="(state == 'expanded' || state == 'soloregion' || state == 'multiregion') ? 'displayed' : ''">
            <div class="expandedcontent_main">
                <div class="expandedcontent_title" v-if="!modaled && hasMap">
                    <span class="smaller">Statistics on your</span><br />
                    region, country or subregion
                    <div class="title_disclaimer">Click a country on the map</div>
                </div>
                <div class="geomap_modaled_title" v-if="modaled && hasMap">Click a country on the map</div>
                <div class="geography_mapcontainer" :class="(state == 'expanded') ? 'displayed' : ''" v-if="hasMap">
                    <highmapsChoropleth :mapID="mapID" :mapColor="mapColor" :modaled="modaled" :geojsonID="'custom/world-robinson'" :areasData="computedAreasData" :hoveredArea="hoveredGeo" :selectedAreas="modalSelectedGeographies" :selectedCountryInput="modaledCountryInput" @selectGeoFromMap="updateGeoSelectedFromMap()" :mapZoomFactor="mapZoomFactor" :mapZoom="mapZoom" :mapZoomDefault="mapZoomDefault" :hasTooltipValues="hasTooltipValues"></highmapsChoropleth>
                </div>
                <div class="geography_map_legend" v-if="hasMap">
                    <div class="legend_zoomblock">
                        <a class="zoomblock_bt zoomblock_resetbt" @click="zoomZeroMap()"></a>
                        <a class="zoomblock_bt zoomblock_zoominbt" @click="zoomInMap()"></a>
                        <a class="zoomblock_bt zoomblock_zoomoutbt" @click="zoomOutMap()"></a>
                    </div>
                    <div class="legend_item" data-legend="available">Available countries</div>
                    <div class="legend_item" data-legend="nonavailable">Non-available countries</div>
                </div>
            </div>
            <div class="geography_sidebar">
                <div class="sidebar_input">
                    <div class="input_disclaimer">Country classifications follow the <a href="https://unstats.un.org/unsd/methodology/m49/" target="_blank">UN M49 classification</a></div>
                    <div class="input_label">Search a region, country, subregion...</div>
                    <a class="input_icon" :data-search="userKeyboardInput !== ''" @click="closeSearch()"></a>
                    <input type="text" id="GeographyInput" placeholder="Ex : Colombia, Africa, Fragile…" @keyup="keyboardInput($event.target.value)" />
                    <v-select class="mobile_selectbox" v-model="mobileSelectBoxSelected" return-object :items="mobileSelectBoxClassifs" solo>
                        <template slot="selection" slot-scope="data">
                            {{ data.item.value }}
                        </template>
                        <template slot="item" slot-scope="data">
                            {{ data.item.value }}
                        </template>
                    </v-select>
                </div>


                <div class="geography_items">
                    <div v-for="(geoType, indexType) in typedGeographies" :data-type="indexType" :key="indexType" class="geography_type" v-if="(mobileSelectBoxSelected.id == 'all' || mobileSelectBoxSelected.id == indexType) && ((indicatorType == 'ordinal' && (indexType == '3-countries')) || (indicatorType !== 'ordinal'))">
                        <div class="geography_items_title">
                            <span v-if="geoType.name == 'Regions'">Regions & groups</span>
                            <span v-if="geoType.name != 'Regions'">{{ geoType.name }}</span>
                            ({{ geoTypeKeyboardLength(geoType.listGeos) }})
                        </div>
                        <div v-for="(geoItem, index) in geoType.listGeos" :key="index" class="geography_item" @mouseenter="hoveredGeo = geoItem.iso" @mouseleave="hoveredGeo = ''" :data-geoISO="geoItem.iso" :data-geoM="geoItem.m49" v-if="geoItem.keyboard" :class="(modaledCountryInput.m49 == geoItem.m49) ? 'selected' : ''">
                            <nuxt-link :to="'/country/'+geoItem.m49" class="menu_link" :data-M="geoItem.m49" v-if="!modaled || parentSelected == ''">{{ geoItem.name }}</nuxt-link>
                            <a class="item_countrylabel" @click="selectCountry(geoItem)" v-if="modaled && !isMultipleSelection && parentSelected != ''">{{ geoItem.name }}</a>
                            <div class="item_checkable" v-if="modaled && isMultipleSelection && parentSelected != ''" @click="toggleCheckCountry(geoItem)">
                                <div class="item_checkbox" :data-selected="isGeographySelected(geoItem)"></div>
                                <div class="item_countrylabel">{{ geoItem.name }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="selector_bucket" v-if="modaled && isMultipleSelection">
            <div class="bucket_title">
                My selection <span class="bucket_nb">- {{modalSelectedGeographies.length}}</span>
                <a class="bucket_removeallbt" @click="removeAllSelected()">Remove all</a>
            </div>
            <div class="bucket_list">
                <div v-for="(geoID, index) in modalSelectedGeographies" :key="index" class="list_item" @click="removeBucketGeography(geoID)">
                    {{$store.DBGeographyObj[geoID].name}}
                </div>
            </div>
            <a class="bucket_validbt" @click="validateBucket()">OK</a>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import * as UTILS from '~/commons/utils/index.js'
    import {_} from 'underscore'

    import highmapsChoropleth from '~/components/highmapsChoropleth.vue'

    import Vuetify from 'vuetify'
    Vue.use(Vuetify)
    import 'vuetify/dist/vuetify.min.css'

    export default {
        components: {
            'highmapsChoropleth': highmapsChoropleth
        },
        props: {
            state: {
                type: String,
                default: function () {
                    return 'home'
                }
            },
            mapID: {
                type: String,
                default: function () {
                    return 'GeographyMap'
                }
            },
            modaled: {
                type: Boolean,
                default: function () {
                    return false
                }
            },
            parentSelected: {
                type: String,
                default: function () {
                    return ''
                }
            },
            isMultipleSelection: {
                type: Boolean,
                default: function () {
                    return false
                }
            },
            selectedGeographies: {
                type: Array,
                default: function () {
                    return []
                }
            },
            modaledCountryInput: {
                type: Object,
                default: function () {
                    return {}
                }
            },
            mainColor:{
                type:String,
                default: function () {
                    return 'green'
                }
            },
            mapColor:{
                type:String,
                default: function (){
                    return 'green'
                }
            },
            hasTooltipValues:{
                type:Boolean, 
                default: function (){
                    return true
                }
            },
            hasMap:{
                type:Boolean, 
                default: function (){
                    return true
                }
            },
            indicatorType:{
                type:String,
                default: function () {
                    return ''
                }
            },
            indicatorID:{
                type:String,
                default: function () {
                    return ''
                }
            }
        },
        data: function () {
            return {
                dataLoaded: false,
                computedAreasData: null,
                DBGeography: [],
                typedGeographies: {},
                hoveredGeo: '',
                modalSelectedGeographies: [],
                userKeyboardInput: '',
                selectedGeoFromMap: '',
                mapZoom: 50,
                mapZoomFactor: 1,
                mapZoomDefault: true,
                mobileSelectBoxClassifs: [
                    {value:'All', id:'all'}, {value:'Regions & Groups', id:'1-regions'}, {value:'Subregions', id:'2-subregions'}, {value:'Countries', id:'3-countries'}
                ],
                mobileSelectBoxSelected: {value:'All', id:'all'},
            }
        },
        mounted: function () {
            var self = this

            this.loadGeography();
        },
        methods: {
            loadGeography: function () {
                var self = this;
                if(this.$store.csvDataPromiseGeographyInComponent === undefined || this.DBGeography.length == 0) {
                    this.$store.csvDataPromiseGeographyInComponent = UTILS.getAPIGeography(this.$store)
                    this.$store.csvDataPromiseGeographyInComponent.then( function(promiseCallback) {
                        self.DBGeography = self.$store.DBGeography
                        self.initAfterDataLoaded()
                    })
                } else {
                    this.initAfterDataLoaded()
                }
            },

            initAfterDataLoaded: function () {
                var self = this
                
                var tmpTypedGeographies = _.groupBy(this.DBGeography, function(geo){
                    return geo.type
                })

                this.tmpTypedGeographiesObj = {}
                _.each(tmpTypedGeographies, function (typedObj, index) {
                    var typeName = 'Countries'
                    var indexAlpha = '3-countries'
                    if(index == 'region'){
                        typeName = 'Regions'
                        indexAlpha = '1-regions'
                    }
                    else if (index == 'subregion'){
                        indexAlpha = '2-subregions'
                        typeName = 'subregions'
                    }

                    var tmpGeos = typedObj
                    _.each(tmpGeos, function(geoItem){
                        geoItem.keyboard = true
                    })

                    self.tmpTypedGeographiesObj[indexAlpha] = {
                        id: index,
                        name: typeName,
                        listGeos: tmpGeos
                    }
                })

                this.typedGeographies = {}
                this.typedGeographies['1-regions'] = this.tmpTypedGeographiesObj['1-regions']
                this.typedGeographies['2-subregions'] = this.tmpTypedGeographiesObj['2-subregions']
                if(this.state != "soloregion" && this.state != "multiregion") this.typedGeographies['3-countries'] = this.tmpTypedGeographiesObj['3-countries']

                if(this.indicatorID == "39") {
                    delete this.typedGeographies['1-regions'];
                    delete this.typedGeographies['2-subregions'];
                    this.typedGeographies['3-countries'].listGeos = _.filter(this.typedGeographies['3-countries'].listGeos, function (geo){
                        return geo.region == "Africa";
                    })
                }

                this.modalSelectedGeographies = this.selectedGeographies
                this.dataLoaded = true

                self.updateMapAreas()
            },

            updateMapAreas: function () {
                var self = this
                var tmpAreas = []

                _.each(this.DBGeography, function(geoItem) {
                    if(UTILS.countryISOMapping3To2[geoItem.iso] !== undefined) {
                        var fillColor = '#149E9D'
                        if(self.modaled) fillColor = '#B8B8B8'
                        if(geoItem.m49 == self.modaledCountryInput.m49) fillColor = '#EA6550'
                        tmpAreas.push({
                            dbISO: geoItem.iso,
                            code: UTILS.countryISOMapping3To2[geoItem.iso],
                            name: geoItem.name,
                            m49: geoItem.m49,
                            value: 1,
                            color: fillColor
                        })
                    } else {
                        //console.log('NOT FOUND 3 DIGITS COUNTRY', geoItem)
                    }
                })

                this.computedAreasData = tmpAreas
            },

            expandSelector: function () {
                this.$parent.selectorExpanded = 'geography'
            },

            selectCountry: function (geoItem) {
                if(this.state == "soloregion") {
                    this.$parent.selectedOrdinalRegionSolo = geoItem.m49
                    this.$emit('selectOrdinalSoloGeoFromModal')
                } else {
                    this.$parent.modaledCountry = geoItem
                    this.$emit('selectCountryFromModal')
                }
            },

            isGeographySelected: function(geoItem) {
                if(_.indexOf(this.modalSelectedGeographies, geoItem.m49) > -1) return true
                else return false
            },

            toggleCheckCountry: function(geoItem) {
                if(_.indexOf(this.modalSelectedGeographies, geoItem.m49) > -1) {
                    this.modalSelectedGeographies = _.without(this.modalSelectedGeographies, geoItem.m49)
                } else {
                    this.modalSelectedGeographies.push(geoItem.m49)
                }
            },

            removeBucketGeography: function(geoM49){
                this.modalSelectedGeographies = _.without(this.modalSelectedGeographies, geoM49)
            },

            removeAllSelected: function () {
                this.modalSelectedGeographies = []
            },

            validateBucket: function () {
                if(this.state == 'multiregion') {
                    this.$parent.selectedOrdinalRegions = this.modalSelectedGeographies
                    this.$emit('selectOrdinalGeoFromModal')
                } else {
                    this.$parent.selectedGeographies = this.modalSelectedGeographies
                    this.$emit('selectGeographiesFromModal')
                }
            },

            keyboardInput: function (keybaordValue) {
                var self = this
                this.userKeyboardInput = keybaordValue

                var tmpTypedGeographies = JSON.parse(JSON.stringify(this.typedGeographies))
                
                _.each(tmpTypedGeographies, function(typeGeo){
                    _.each(typeGeo.listGeos, function(geoItem){
                        if(self.userKeyboardInput == ''){
                            geoItem.keyboard = true
                        } else {
                            var nameIndex = geoItem.name.toLowerCase().indexOf(self.userKeyboardInput.toLowerCase());
                            if(nameIndex > -1) {
                                geoItem.keyboard = true
                            } else {
                                geoItem.keyboard = false
                            }
                        }
                    })
                })

                this.typedGeographies = JSON.parse(JSON.stringify(tmpTypedGeographies))
            },

            geoTypeKeyboardLength: function (list) {
                return _.filter(list, function(geo){ return geo.keyboard}).length
            },

            updateGeoSelectedFromMap: function () {
                var self = this

                var geoSelected = _.find(this.DBGeography, function (geo) {
                    return geo.iso.toLowerCase() == self.selectedGeoFromMap.toLowerCase()
                })

                if(this.modaled && !this.isMultipleSelection && this.parentSelected != '') {
                    this.selectCountry(geoSelected)
                } else if(this.isMultipleSelection) {
                    this.toggleCheckCountry(geoSelected)
                } else {
                    var dataPage = document.querySelector('.page').getAttribute('data-page')
                    if(dataPage == 'country') this.$router.push(geoSelected.m49)
                    else this.$router.push('country/' + geoSelected.m49)
                }
            },

            closeSearch: function () {
                if(this.userKeyboardInput !== '') {
                    this.userKeyboardInput = ''
                    document.querySelector('#GeographyInput').value = ''
                    this.keyboardInput(this.userKeyboardInput)   
                }
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
            }
        },

        watch: {
            state: function () {
                var self = this
                /*console.log('watch state', this.state)
                if(this.state == 'expanded') {
                    setTimeout(function(){
                        self.updateMapAreas()
                    }, 600)
                }*/
            },
            mobileSelectBoxSelected: function () {
                var self = this;
            },
            selectedGeographies: function () {
                this.loadGeography();
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~assets/scss/_variables.scss";
    @import "~assets/scss/_browsers.scss";

    .selector[data-selector="geography"]{
        .expandedcontent_main{
            width: 610px;
            margin-left: -20px;
            .geomap_modaled_title{
                color: #8C8C8C;
                font-family: "montserratitalic";
                font-size: 12px;
                border-bottom: 4px solid #EDEDED;
                padding: 0px 0 8px;
                margin: 0 20px;
            }
            .expandedcontent_title{
                margin: 0 20px;
            }
        }
    }

    .selector[data-state="soloregion"][data-modaled="true"], .selector[data-state="multiregion"][data-modaled="true"]{
        width: 100%;
        .geography_sidebar{
            position: relative;
            width: 100%;
            padding: 10px 20px 30px !important;
            .sidebar_input{
                #GeographyInput{
                    width: 100%;
                }
            }
        }
    }

    .selector[data-state="soloregion"][data-modaled="true"]{
        .selector_bucket{
            display: none;
        }
    }

    .geography_mapcontainer{
        width: 100%;
        height: 400px;
        z-index: 1;
        position: relative;
    }

    .geography_map_legend{
        width: 100%;
        text-align: left;
        margin: 0 20px;
        .legend_zoomblock{
            display: inline-block;
            vertical-align: top;
            border-top: 3px solid #EDEDED;
            margin-right: 20px;
            padding-top: 4px;
            position: relative;
            .zoomblock_bt{
                width: 30px;
                height: 30px;
                border-radius: 3px;
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
                        background: url("~/static/images/global/icon-map_center.svg") no-repeat 0 0;
                        background-size: 100% 100%;
                    }
                }
                &.zoomblock_zoominbt{
                    &:after{
                        background: url("~/static/images/global/icon-map_zoomin.svg") no-repeat 0 0;
                        background-size: 100% 100%;
                    }
                }
                &.zoomblock_zoomoutbt{
                    &:after{
                        background: url("~/static/images/global/icon-map_zoomout.svg") no-repeat 0 0;
                        background-size: 100% 100%;
                    }
                }
            }
        }
        .legend_item{
            display: inline-block;
            vertical-align: top;
            color: #8C8C8C;
            font-family: "montserratitalic";
            font-size: 12px;
            border-top: 3px solid #EDEDED;
            padding-top: 10px;
            padding-left: 26px;
            position: relative;
            height: 30px;
            &:before{
                content:"";
                position: absolute;
                left: 10px;
                top: 18px;
                @include transform(translate(0, -50%));
                width: 10px;
                height: 10px;
                border-radius: 10px;
            }
            &[data-legend="available"]{
                &:before{
                    background: #149E9D;
                }
            }
            &[data-legend="nonavailable"]{
                &:before{
                    background: #A1D8D8;
                }
            }
        }
    }

    .geography_sidebar{
        position: absolute;
        right: 0px;
        top: 0px;
        height: 100%;
        width: 360px;
        background: $colorGreen;
        color: #fff;
        padding: 30px 20px 40px;
        text-align: left;
        &:after{
            content:"";
            position: absolute;
            left: 0px;
            bottom: 0px;
            width:100%;
            height: 80px;
            pointer-events:none;
            /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#036463+0,036463+100&0+0,1+100 */
            background: -moz-linear-gradient(top, rgba(3,100,99,0) 0%, rgba(3,100,99,1) 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(top, rgba(3,100,99,0) 0%,rgba(3,100,99,1) 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to bottom, rgba(3,100,99,0) 0%,rgba(3,100,99,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00036463', endColorstr='#036463',GradientType=0 ); /* IE6-9 */
        }
        .sidebar_input{
            position: relative;
            .input_disclaimer{
                font-size: 11px;
                a{
                    color: #fff;
                }
            }
            .input_label{
                font-size: 13px;
                height: 16px;
                margin-top: 10px;
                line-height: 12px;
                font-family: "montserratitalic";
            }
            #GeographyInput{
                width: 310px;
                height: 35px;
                border-radius: 5px;
                border:0px solid;
                margin-top: 2px;
                font-size: 14px;
                padding: 0 10px;
                background: #EDEDED;
                color: #333;
                outline: none;
                &:focus{
                    border:1px solid $colorDarkGreen;
                }
            }
            .input_icon{
                background:url("~/static/images/global/icon-input_search.svg") no-repeat 0 0;
                background-size: 100% 100%;
                width: 35px;
                height: 35px;
                position: absolute;
                right: 12px;
                top: 40px;
                z-index: 10;
                cursor: pointer;
                &[data-search="true"]{
                    background:url("~/static/images/global/icon-input_closesearch.svg") no-repeat 0 0;
                    background-size: 100% 100%;
                }
            }
        }

        .mobile_selectbox{
            display: none;
        }

        .geography_items_title{
            color: $colorDarkGreen;
            font-size: 16px;
            font-family: 'montserratbold';
            text-transform: capitalize;
            margin-top: 10px;
        }
        .geography_items{
            overflow: auto;
            height: 400px;
            margin-top: 10px;
            .geography_item{
                height: 28px;
                line-height: 28px;
                padding: 0 10px;
                position: relative;
                cursor: pointer;
                overflow: hidden;
                a.menu_link{
                    color: #fff;
                    text-decoration: none;
                    display: inline-block;
                    width: 100%;
                }
                &:hover{
                    background: #2F2F2F;
                }
                &.selected{
                    background: $colorRed;
                    .item_countrylabel{
                        color: #fff !important;
                    }
                }
            }
        }
    }

    .selector[data-selector="geography"][data-modaled="true"]{
        .geography_sidebar{
            background: #EDEDED;
            padding: 10px 20px;
            &:after{
                /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#b8b8b8+0,b8b8b8+100&0+0,1+100 */
                background: -moz-linear-gradient(top, rgba(184,184,184,0) 0%, rgba(184,184,184,1) 100%); /* FF3.6-15 */
                background: -webkit-linear-gradient(top, rgba(184,184,184,0) 0%,rgba(184,184,184,1) 100%); /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(to bottom, rgba(184,184,184,0) 0%,rgba(184,184,184,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00b8b8b8', endColorstr='#b8b8b8',GradientType=0 ); /* IE6-9 */
            }
            .sidebar_input .input_label, .sidebar_input .input_disclaimer{
                color: #2F2F2F;
                a{
                    color: #2F2F2F;
                }
            }
            .geography_items_title{
                color: #8C8C8C;
            }
            .geography_items .geography_item{
                color: #2F2F2F;
                a{
                    color: #2F2F2F;
                }
            }
            .geography_items .geography_item{
                &:hover{
                    background: $colorRed;
                    color: #fff;
                }
            }
            .item_checkbox{
                width: 15px;
                height: 15px;
                border-radius: 2px;
                border:2px solid #2F2F2F;
                display: inline-block;
                vertical-align: middle;
                margin-right: 10px;
                position: relative;
                &[data-selected="true"]{
                    background: #2F2F2F;
                    &:after{
                        content:"";
                        position:absolute;
                        background:url("~/static/images/global/selectbox-tick.svg") no-repeat 0 0;
                        background-size: 100% 100%;
                        width: 15px;
                        height: 15px;
                        left: -2px;
                        top: -2px;
                    }
                }
            }
            .item_countrylabel{
                display: inline-block;
                vertical-align: top;
                width: 90%;
                height: 100%;
            }
        }
    }

    .selector_bucket{
        width: 100%;
        position: relative;
        left: 0px;
        height: 165px;
        background: $colorDarkRed;
        z-index: 10;
        padding: 14px 30px;
        .bucket_title{
            font-size: 22px;
            font-family: "montserratbold";
            text-align: left;
            color: #fff;
            position: relative;
            .bucket_nb{
                font-family: "montserratregular";
            }
            .bucket_removeallbt{
                right: 30px;
                top: 50%;
                @include transform(translate(0, -50%));
                position: absolute;
                font-family: "montserratitalic";
                font-size: 12px;
                color: #fff;
                cursor: pointer;
            }
        }
        .bucket_list{
            margin-top: 10px;
            text-align: left;
            width: 80%;
            height: 95px;
            overflow: auto;
            .list_item{
                background: #fff;
                padding: 4px;
                display: inline-block;
                vertical-align: top;
                border-radius: 5px;
                height: 20px;
                line-height: 18px;
                color: #2F2F2F;
                margin: 2px;
                padding: 0 10px 0 20px;
                position: relative;
                cursor: pointer;
                &:before{
                    content:"";
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    background: url("~/static/images/global/icon-close_box-red.svg") no-repeat 0 0;
                    left: -4px;
                    top: 50%;
                    @include transform(translate(0, -50%));
                }
                &:hover{
                    background:$colorRed;
                    color: #fff;
                    &:before{
                        background: url("~/static/images/global/icon-close_box-white.svg") no-repeat 0 0;
                    }
                }
            }
        }
        .bucket_validbt{
            position: absolute;
            right: 20px;
            bottom: 20px;
            background: $colorRed;
            border-radius: 20px;
            width: 90px;
            height: 40px;
            color: #fff;
            font-family: "montserratbold";
            line-height: 40px;
            font-size: 16px;
            cursor: pointer;
            &:hover{
                background: $textColor;
            }
        }
    }

    .selector[data-selector="geography"][data-multiple="true"]{
        .geography_sidebar .geography_items{
            //height: 290px !important;
        }
    }

    .selector[data-selector="geography"][data-maincolor="red"]{
        .selector_bucket .bucket_title{
            border-color: $colorRed;
        }
    }

    .selector[data-selector="geography"][data-mapcolor="grey"]{
        .geography_map_legend .legend_item{
            &[data-legend="available"]{
                &:before{ background: #8c8c8c; }
            }
            &[data-legend="nonavailable"]{
                &:before{ background: #e3e3e3; }
            }
        }
    }

    .selector[data-selector="geography"]{
        .selector_expandedcontent{
            display: none;
            &.displayed{
                display: block;
            }
        }
    }
</style>
