<template>
    <div class="selector" data-selector="indicator" :data-state="state" :data-modaled="modaled" :data-maincolor="mainColor">

        <div class="selector_homecontent" :class="((state == 'home') || (state == 'shrinked')) ? 'displayed' : ''" @click="expandSelector()">
            <div class="homecontent_picto"></div>
            <div class="homecontent_title">
                <span class="bolder">All indicators</span><br />
                on statistical capacity
            </div>
            <button class="homecontent_expandbt isdesktop">BROWSE</button>
            <nuxt-link to="/indicator/" class="homecontent_expandbt ismobile" >BROWSE</nuxt-link>
        </div>

        <div class="selector_expandedcontent" v-if="(state == 'expanded')">

            <div class="expandedcontent_main">
                <div class="expandedcontent_title">
                    Browse indicators
                    <a class="indicators_resetbt" v-if="modaled && parentSelected !== ''" @click="resetIndicators()">Reset</a>
                </div>
                <div class="indicator_input">
                    <div class="input_searchlabel">Search an indicator...</div>
                    <a class="input_closebt" v-if="isSearching" @click="closeSearching()"></a>
                    <div class="input_icon" v-if="!isSearching"></div>
                    <input id="IndicatorInput" type="text" v-on:keyup="searchIndicatorTerm($event)" placeholder="Ex : Data dissemination policy">
                </div>

                <div class="indicators_classifs">
                    <div class="indicators_classif" :data-classif="classifObj.key" :class="(classifObj.key == selectedClassif.key) ? 'selected' : ''" v-for="(classifObj, index) in displayedClassifIndicators" @click="selectClassif(classifObj)" :data-items-nb="classifObj.items.length">
                        <div class="classif_arrow"></div>
                        <div class="classif_label" :data-classif="classifObj.key">{{classifObj.key}}</div>
                        <div class="classif_cardinality">{{classifObj.items.length}} indicators</div>
                    </div>

                    <v-select class="mobile_selectbox" v-model="mobileSelectBoxSelected" :return-object="true" :items="mobileSelectBoxClassifs" solo label="" :menu-props="{contentClass:'copyboxItems'}" :hide-details="true"></v-select>
                </div>

                <a class="indicators_aboutbt" @click="emitAboutIndicatorsModal()">About these indicators</a>
            </div>

            <div class="indicator_sidebar" :data-iskey="(selectedClassif == '' ? 'true' : 'false')">

                <div class="sidebar_panel" data-panel="keys" :class="(selectedClassif == '' && !isSearching) ? 'displayed' : ''">
                    <div class="sidebar_title">
                        Key indicators
                        <div class="sidebar_actions" v-if="isMultipleSelection">
                            <a class="addall_fromdisplayed_bt" @click="addAllIndicatorsFromDisplayed()">Add all</a>
                            <a class="removeall_fromdisplayed_bt" @click="removeAllIndicatorsFromDisplayed()">Remove all</a>
                        </div>
                    </div>
                    <div class="indicators_list">
                        <div v-for="(item, index) in DBKeyIndicators" :key="index" class="indicator_item" :class="(!modaled || parentSelected == '') ? 'ext_link' : ''">
                            <div class="item_wrapper" v-if="modaled && parentSelected !== ''" @click="toggleBucketIndicator(item.id)">
                                <div class="item_checkbox" :data-selected="isIndicatorSelected(item)"></div>
                                <div class="item_name">{{item.name}}</div>
                            </div>
                            <nuxt-link :to="'/indicator/'+item.id" class="item_wrapper" v-if="!modaled || parentSelected == ''">
                                <div class="item_name">{{item.name}}</div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                

                <div class="sidebar_panel" v-for="(classifObj, index) in displayedClassifIndicators" data-panel="classif" :class="(selectedClassif !== '' && !isSearching && selectedClassif.key == classifObj.key) ? 'displayed' : ''">
                    <div class="sidebar_title paneled" :data-classif="classifObj.key" v-if="selectedClassif !== ''">
                        {{selectedClassif.key}} indicators - {{selectedClassif.items.length}}
                        <!--<a class="closepanel_bt" @click="deselectClassif()"></a>-->
                        <div class="sidebar_actions" v-if="isMultipleSelection">
                            <a class="addall_fromdisplayed_bt" @click="addAllIndicatorsFromDisplayed()">Add all</a>
                            <a class="removeall_fromdisplayed_bt" @click="removeAllIndicatorsFromDisplayed()">Remove all</a>
                        </div>
                    </div>
                    <div class="indicators_list" v-if="selectedClassif !== ''">
                        <div v-for="(item, index) in selectedClassif.items" :key="index" class="indicator_item" v-if="(selectedClassif !== '' && !isSearching)" :class="(!modaled || parentSelected == '') ? 'ext_link' : ''">
                            <div class="item_wrapper" v-if="modaled && parentSelected !== ''" @click="toggleBucketIndicator(item.id)">
                                <div class="item_checkbox" v-if="modaled" :data-selected="isIndicatorSelected(item)"></div>
                                <div class="item_name">{{item.name}}</div>
                            </div>
                            <nuxt-link :to="'/indicator/'+item.id" class="item_wrapper" v-if="!modaled || parentSelected == ''">
                                <div class="item_name">{{item.name}}</div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>

                <div class="sidebar_panel" data-panel="searching" :class="(isSearching) ? 'displayed' : ''">
                    <div class="sidebar_title" v-if="isSearching">{{displayedSearchingClassifItemsNb}} results for <span class="bolder">{{searchedIndicatorTerm}}</span></div>
                    <div class="indicators_list" v-if="isSearching">
                        <div v-for="(classif, classifIndex) in displayedClassifIndicators" :key="classifIndex" class="classif_item" :class="(!modaled || parentSelected == '') ? 'ext_link' : ''">
                            <div class="classif_item_hasdata" v-if="(selectedClassif == '' && classif.items.length > 0) || (selectedClassif !== '' && classif.key == selectedClassif.key)">
                                <div class="classif_label" :data-classif="classif.key">{{classif.key}} ({{classif.items.length}})</div>
                            
                                <div v-for="(indicator, indicatorIndex) in classif.items" :key="indicatorIndex" class="indicator_item">
                                    <div class="item_wrapper" v-if="modaled && parentSelected !== ''" @click="toggleBucketIndicator(indicator.id)">
                                        <div class="item_checkbox" v-if="modaled" :data-selected="isIndicatorSelected(indicator)"></div>
                                        <div class="item_name"  v-html="highlightSearchedTerm(indicator.name)"></div>
                                    </div>
                                    <nuxt-link :to="'/indicator/'+indicator.id" class="item_wrapper" v-if="!modaled || parentSelected == ''">
                                        <div class="item_name"  v-html="highlightSearchedTerm(indicator.name)"></div>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="selector_bucket" v-if="modaled && isMultipleSelection">
            <div class="bucket_title">
                My selection <span class="bucket_nb">- {{modalSelectedIndicators.length}}</span>
                <a class="bucket_removeallbt" @click="removeAllIndicators()">Remove all</a>
            </div>
            <div class="bucket_list">
                <div v-for="(indicatorID, index) in modalSelectedIndicators" :key="index" class="list_item" @click="removeBucketIndicator(indicatorID)">
                    {{$store.DBIndicatorsObj[indicatorID].name}}
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

    import Vuetify from 'vuetify'
    Vue.use(Vuetify)
    import 'vuetify/dist/vuetify.min.css'

    export default {
        props: {
            state: {
                type: String,
                default: function () {
                    return 'home'
                }
            },
            selectedIndicators: {
                type: Array,
                default: function () {
                    return []
                }
            },
            modaled: {
                type: Boolean,
                default: function () {
                    return false
                }
            },
            parentSelected: {
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
            mainColor: {
                type: String,
                default: function () {
                    return 'red'
                }
            }
        },
        data: function () {
            return {
                DBIndicators: [],
                DBKeyIndicators: [],
                DBClassifIndicators: [],
                selectedClassif: '',
                searchedIndicatorTerm: '',
                searchedIndicatorsArray: [],
                searchedClassifIndicators: [],
                initialIndicators: [],
                modalSelectedIndicators: [],
                displayedClassifIndicators: [],
                mobileSelectBoxClassifs: ['Key indicators', 'Production', 'Dissemination', 'Use', 'Investment', 'Planning'],
                mobileSelectBoxSelected: 'Key indicators',
                isSearching: false
            }
        },
        mounted: function () {
            var self = this

            if(this.$store.csvDataPromiseIndicators === undefined) {
                this.$store.csvDataPromiseIndicators = UTILS.getAPIIndicators(this.$store)
                this.$store.csvDataPromiseIndicators.then( function(promiseCallback) {
                    self.initAfterDataLoaded()
                })
            } else {
                this.initAfterDataLoaded()
            }
        },
        methods: {
            initAfterDataLoaded: function () {
                var self = this
                this.initialIndicators = JSON.parse(JSON.stringify(this.selectedIndicators))
                this.modalSelectedIndicators = this.selectedIndicators
                this.DBIndicators = this.$store.DBIndicators
                this.DBIndicators = _.filter(this.DBIndicators, function (indic){
                    return (indic.id !== "94" && indic.id !== "35" && indic.id !== "77")
                })
                this.DBKeyIndicators = this.$store.DBKeyIndicators
                this.DBClassifIndicators = this.$store.DBClassifIndicators
                this.reinitDisplayedClassifIndicators()
            },

            expandSelector: function () {
                this.$parent.selectorExpanded = 'indicator'
            },

            selectClassif: function(classifObj) {
                if(this.selectedClassif.key == classifObj.key) {
                    this.selectedClassif = ''
                } else {
                    this.selectedClassif = classifObj
                }
            },

            deselectClassif: function (){
                this.selectedClassif = ''
            },

            searchIndicatorTerm:function ($event) {
                var self = this

                this.searchedIndicatorsArray = []
                this.displayedClassifIndicators = this.emptyDisplayedClassifIndicators()
                this.searchedIndicatorTerm = $event.target.value.toLowerCase()

                if(this.searchedIndicatorTerm != '') {
                    this.isSearching = true
                    _.each(this.DBIndicators, function(indicator) {
                        var indicatorText = indicator.text.toLowerCase()

                        if(indicatorText.split(self.searchedIndicatorTerm).length > 1) {
                          self.searchedIndicatorsArray.push(indicator)
                          var foundClassif = _.find(self.displayedClassifIndicators, function(classif){
                            return classif.key == indicator.classif
                        })
                        foundClassif.items.push(indicator)
                      } 
                    })
                }
                else {
                    this.isSearching = false
                    this.reinitDisplayedClassifIndicators()
                }
            },

            highlightSearchedTerm: function (term) {
                var re = new RegExp(this.searchedIndicatorTerm, 'ig')
                var termBolded = term.replace(re, '<b>'+this.searchedIndicatorTerm+'</b>')
                return termBolded
            },

            emptyDisplayedClassifIndicators: function () {
                var self = this

                var displayedClassifIndicators = []
                _.each(this.DBClassifIndicators, function(indicator){
                    displayedClassifIndicators.push({
                      key: indicator.key,
                      items: []
                  })
                })

                return displayedClassifIndicators
            },

            reinitDisplayedClassifIndicators: function () {
                var self = this
                this.displayedClassifIndicators = []
                _.each(this.DBClassifIndicators, function(indicator){
                    var goodIndicators = _.filter(indicator.items, function (item){
                        return item.id !== "77";
                    })
                    self.displayedClassifIndicators.push({
                      key: indicator.key,
                      items: goodIndicators
                  })
                })
            },

            closeSearching:function () {
                this.isSearching = false
                document.querySelector('#IndicatorInput').value = ''
                this.reinitDisplayedClassifIndicators()
            },

            isIndicatorSelected: function (indicator) {
                if(_.indexOf(this.modalSelectedIndicators, indicator.id) > -1) return true
                else return false
            },

            removeBucketIndicator: function (indicatorID) {
                this.modalSelectedIndicators = _.without(this.modalSelectedIndicators, indicatorID)
            },

            toggleBucketIndicator: function (indicatorID) {
                if(_.indexOf(this.modalSelectedIndicators, indicatorID) > -1){
                    this.modalSelectedIndicators = _.without(this.modalSelectedIndicators, indicatorID)
                } else {
                    this.modalSelectedIndicators.push(indicatorID)
                }
            },

            emitAboutIndicatorsModal: function () {
                this.$emit('aboutIndicatorsModal')
            },

            validateBucket: function () {
                this.$parent.selectedIndicators = this.modalSelectedIndicators
                this.$emit('selectIndicatorsFromModal')
            },

            resetIndicators: function () {
                this.modalSelectedIndicators = JSON.parse(JSON.stringify(this.initialIndicators))
            },

            removeAllIndicators: function () {
                this.modalSelectedIndicators = []
            },

            addAllIndicatorsFromDisplayed: function () {
                var self = this
                //add from classif
                if(this.selectedClassif) {
                    _.each(this.selectedClassif.items, function (item) {
                        self.modalSelectedIndicators.push(item.id)
                    })
                    self.modalSelectedIndicators = _.uniq(self.modalSelectedIndicators)
                } else { // add from keys
                    _.each(this.DBKeyIndicators, function (item) {
                        self.modalSelectedIndicators.push(item.id)
                    })
                    self.modalSelectedIndicators = _.uniq(self.modalSelectedIndicators)
                }
            },

            removeAllIndicatorsFromDisplayed: function () {
                var self = this
                //remove from classif
                if(this.selectedClassif) {
                    _.each(this.selectedClassif.items, function (item) {
                        self.modalSelectedIndicators = _.without(self.modalSelectedIndicators, item.id)
                    })
                } else { //remove from keys
                    _.each(this.DBKeyIndicators, function (item) {
                        self.modalSelectedIndicators = _.without(self.modalSelectedIndicators, item.id)
                    })
                }
            }
        },

        computed: {
            displayedSearchingClassifItemsNb: function () {
                if(this.isSearching) {
                    var nbItems = 0
                    _.each(this.displayedClassifIndicators, function(classifIndicator) {
                      nbItems += classifIndicator.items.length
                  })
                    return nbItems
                } else {
                    return 0
                }
            }
        },

        watch: {
            mobileSelectBoxSelected: function () {
                var self = this;

                var foundClassif = _.find(this.displayedClassifIndicators, function(ind) {
                    return ind.key == self.mobileSelectBoxSelected
                })

                if(foundClassif == undefined) {
                    this.selectedClassif = ''
                } else {
                    this.selectedClassif = foundClassif
                }
            },

            selectedIndicators: function () {
                this.modalSelectedIndicators = this.selectedIndicators
            }
        }
    }
</script>

<style lang="scss">
    @import "~assets/scss/_variables.scss";
    @import "~assets/scss/_browsers.scss";

    .indicator_input{
        text-align: left;
        position: relative;
        margin-top: 14px;
        #IndicatorInput{
            width: 310px;
            height: 35px;
            background: #EDEDED;
            border-radius: 5px;
            border:0px solid;
            margin-top: 5px;
            font-size: 14px;
            padding: 0 10px;
            color: #333;
            outline: none;
            &:focus{
                border:1px solid $colorDarkRed;
            }
        }
        .input_closebt, .input_icon{
            position: absolute;
            right: 10px;
            top: 22px;
            font-size: 20px;
            cursor: pointer;
            background: url("~/static/images/global/icon-close_box.svg") no-repeat 0 0;
            background-size: 100% 100%;
            width: 40px;
            height: 40px;
        }

        .input_icon{
            background:url("~/static/images/global/icon-input_search.svg") no-repeat 0 0;
            background-size: 100% 100%;
            width: 35px;
            height: 35px;
            top: 24px;
            margin-left: 110px;
            left: 50%;
        }
    }

    .indicators_classifs{
        margin-top: 20px;
        .mobile_selectbox{
            display: none;
        }
        .indicators_classif{
            height: 30px;
            border-bottom: 1px solid #B8B8B8;
            height: 40px;
            line-height: 40px;
            text-align: left;
            position: relative;
            cursor: pointer;
            &:hover, &.selected{
                background: $colorGreen;
                .classif_label{
                    color: #fff;
                }
                .classif_cardinality{
                    color: #fff;
                }
                .classif_arrow{
                    display: block;
                }
                &:after{
                    background: url("~/static/images/global/indicators-arrow-white.svg") no-repeat 0 0;
                    background-size: 100% 100%;
                }
            }
            &[data-items-nb="0"]{
                .classif_label, .classif_cardinality{
                    opacity: .3;
                }
                &:after{
                    display: none;
                }
                &[data-classif="Production"]{
                    &:before{
                        background:url("~/static/images/indicators/icon-production-grey.svg") no-repeat 0 0 !important;
                        background-size: 100% 100%;
                    }
                }
                &[data-classif="Dissemination"]{
                    &:before{
                        background:url("~/static/images/indicators/icon-dissemination-grey.svg") no-repeat 0 0 !important;
                        background-size: 100% 100%;
                    }
                }
                &[data-classif="Use"]{
                    &:before{
                        background:url("~/static/images/indicators/icon-valuation-grey.svg") no-repeat 0 0 !important;
                        background-size: 100% 100%;
                    }
                }
                &[data-classif="Investment"]{
                    &:before{
                        background:url("~/static/images/indicators/icon-investment-grey.svg") no-repeat 0 0 !important;
                        background-size: 100% 100%;
                    }
                }
                &[data-classif="Planning"]{
                    &:before{
                        background:url("~/static/images/indicators/icon-planning-grey.svg") no-repeat 0 0 !important;
                        background-size: 100% 100%;
                    }
                }
            }
            &:before{
                content: "";
                position: absolute;
                left: -5px;
                top: 50%;
                @include transform(translate(0, -50%));
                width: 40px;
                height: 40px;
            }
            &:after{
                content: "";
                position: absolute;
                right: 10px;
                top: 50%;
                @include transform(translate(0, -50%));
                width: 5px;
                height: 10px;
                background: url("~/static/images/global/indicators-arrow.svg") no-repeat 0 0;
                background-size: 100% 100%;
            }
            &[data-classif="Production"]{
                &:before{
                    background:url("~/static/images/indicators/icon-production-green.svg") no-repeat 0 0;
                    background-size: 100% 100%;
                }
                &.selected, &:hover{
                    &:before{
                        background:url("~/static/images/indicators/icon-production-white.svg") no-repeat 0 0 !important;
                        background-size: 100% 100%;
                    }
                }
            }
            &[data-classif="Dissemination"]{
                &:before{
                    background:url("~/static/images/indicators/icon-dissemination-green.svg") no-repeat 0 0;
                    background-size: 100% 100%;
                }
                &.selected, &:hover{
                    &:before{
                        background:url("~/static/images/indicators/icon-dissemination-white.svg") no-repeat 0 0 !important;
                        background-size: 100% 100%;
                    }
                }
            }
            &[data-classif="Use"]{
                &:before{
                    background:url("~/static/images/indicators/icon-valuation-green.svg") no-repeat 0 0;
                    background-size: 100% 100%;
                }
                &.selected, &:hover{
                    &:before{
                        background:url("~/static/images/indicators/icon-valuation-white.svg") no-repeat 0 0 !important;
                        background-size: 100% 100%;
                    }
                }
            }
            &[data-classif="Investment"]{
                &:before{
                    background:url("~/static/images/indicators/icon-investment-green.svg") no-repeat 0 0;
                    background-size: 100% 100%;
                }
                &.selected, &:hover{
                    &:before{
                        background:url("~/static/images/indicators/icon-investment-white.svg") no-repeat 0 0 !important;
                        background-size: 100% 100%;
                    }
                }
            }
            &[data-classif="Planning"]{
                &:before{
                    background:url("~/static/images/indicators/icon-planning-green.svg") no-repeat 0 0;
                    background-size: 100% 100%;
                }
                &.selected, &:hover{
                    &:before{
                        background:url("~/static/images/indicators/icon-planning-white.svg") no-repeat 0 0 !important;
                        background-size: 100% 100%;
                    }
                }
            }
            .classif_label{
                display: inline-block;
                vertical-align: top;
                color: #2F2F2F;
                font-family: "montserratbold";
                font-size: 16px;
                padding-left: 36px;
            }
            .classif_cardinality{
                position: absolute;
                right: 26px;
                top: 50%;
                @include transform(translate(0, -50%));
                color: #8C8C8C;
                font-size: 10px;
                font-family: "montserratitalic";
            }
            .classif_arrow{
                position: absolute;
                left: 100%;
                top: 0px;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 20px 0 20px 10px;
                border-color: transparent transparent transparent $colorGreen;
                display: none;
            }
        }
    }

    .indicator_sidebar{
        position: absolute;
        right: 0px;
        top: 0px;
        height: 100%;
        width: 610px;
        color: #fff;
        text-align: left;
        &:after{
            content:"";
            position: absolute;
            left: 0px;
            bottom: 0px;
            width:100%;
            height: 60px;
            pointer-events:none;
            /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#b45747+0,b45747+100&0+0,1+100 */
            background: -moz-linear-gradient(top, rgba(180,87,71,0) 0%, rgba(180,87,71,1) 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(top, rgba(180,87,71,0) 0%,rgba(180,87,71,1) 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to bottom, rgba(180,87,71,0) 0%,rgba(180,87,71,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00b45747', endColorstr='#b45747',GradientType=0 ); /* IE6-9 */
        }

        .sidebar_panel{
            position: absolute;
            left: 0px;
            top: 0px;
            width:100%;
            height: 100%;
            padding: 30px 20px 140px;
            @include transform(translate(-100%, 0));
            @include transition((all), 0.3s, ease-in-out);
            background: $colorRed;
            &.displayed{
                @include transform(translate(0%, 0));
            }
            &[data-panel="classif"], &[data-panel="searching"]{
                background: $colorDarkRed;
            }
        }

        .sidebar_actions{
            position: absolute;
            right: 24px;
            top: 2px;
            .addall_fromdisplayed_bt{
                display: inline-block;
                vertical-align: top;
                font-family: "montserratitalic";
                font-size: 12px;
                color: #2F2F2F;
                cursor: pointer;
                position: relative;
                margin-right: 34px;
                &:after{
                    content:"";
                    position: absolute;
                    left: 100%;
                    margin-left: 4px;
                    top: 50%;
                    @include transform(translate(0, -50%));
                    width: 20px;
                    height: 20px;
                    border-radius: 20px;
                    background: url("~/static/images/global/icon-btn_add_all-white.svg") no-repeat center center $colorRed;
                    background-size: 100% 100%;
                }
                &:hover{
                    &:after{
                        background: url("~/static/images/global/icon-btn_add_all-white.svg") no-repeat center center $textColor;
                        background-size: 100% 100%;
                    }
                }
            }
            .removeall_fromdisplayed_bt{
                display: inline-block;
                vertical-align: top;
                font-family: "montserratitalic";
                font-size: 12px;
                color: #2F2F2F;
                cursor: pointer;
                position: relative;
                &:after{
                    content:"";
                    position: absolute;
                    left: 100%;
                    margin-left: 4px;
                    top: 50%;
                    @include transform(translate(0, -50%));
                    width: 20px;
                    height: 20px;
                    border-radius: 20px;
                    background: url("~/static/images/global/icon-close_box-white.svg") no-repeat center center $colorRed;
                    background-size: 100% 100%;
                }
                &:hover{
                    &:after{
                        background: url("~/static/images/global/icon-close_box-white.svg") no-repeat center center $textColor;
                        background-size: 100% 100%;
                    }
                }
            }
        }
        &[data-iskey="false"]{
            background: $colorDarkRed;
            .indicators_list{
                .indicator_item{
                    border-color: $colorRed;
                    &:hover{
                      background: $colorRed;
                    }
                }
            }
        }
        .sidebar_title{
            font-size: 22px;
            line-height: 26px;
            font-weight: 700;
            text-align: left;
            border-bottom:4px solid;
            padding-bottom: 6px;
            border-color: $colorGreen;
            font-family: "montserratregular";
            position: relative;
            &:before{
                content: "";
                position: absolute;
                left: -12px;
                top: 14px;
                @include transform(translate(0, -50%));
                width: 50px;
                height: 50px;
            }
            &.paneled{
                padding-left: 34px;
            }
            &[data-classif="Production"]{
                &:before{
                    background:url("~/static/images/indicators/icon-production-white.svg") no-repeat 0 0 !important;
                    background-size: 100% 100%;
                }
            }
            &[data-classif="Dissemination"]{
                &:before{
                    background:url("~/static/images/indicators/icon-dissemination-white.svg") no-repeat 0 0 !important;
                    background-size: 100% 100%;
                }
            }
            &[data-classif="Use"]{
                &:before{
                    background:url("~/static/images/indicators/icon-valuation-white.svg") no-repeat 0 0 !important;
                    background-size: 100% 100%;
                }
            }
            &[data-classif="Investment"]{
                &:before{
                    background:url("~/static/images/indicators/icon-investment-white.svg") no-repeat 0 0 !important;
                    background-size: 100% 100%;
                }
            }
            &[data-classif="Planning"]{
                &:before{
                    background:url("~/static/images/indicators/icon-planning-white.svg") no-repeat 0 0 !important;
                    background-size: 100% 100%;
                }
            }
            .closepanel_bt{
                background: url("~/static/images/global/icon-close_box-white.svg") no-repeat 0 0 !important;
                background-size: 100% 100%;
                width: 50px;
                height: 50px;
                position: absolute;
                right: -10px;
                top: -10px;
                cursor: pointer;
            }
            .bolder{
                font-family: "montserratbold";
            }
        }
        .indicators_list{
            margin-top: 20px;
            height: 400px;
            overflow: auto;
            .classif_item{
                margin-bottom: 10px;
                .classif_label{
                    border-bottom:2px solid $colorDarkGreen;
                    height: 30px;
                    line-height: 30px;
                    position: relative;
                    padding-left: 24px;
                    color: #F9D1CB;
                    font-family: "montserratbold";
                    &:before{
                        content: "";
                        position: absolute;
                        left: -6px;
                        top: 0px;
                        width: 32px;
                        height: 32px;
                    }
                    &[data-classif="Production"]{
                        &:before{
                            background:url("~/static/images/indicators/icon-production-white.svg") no-repeat 0 0 !important;
                            background-size: 100% 100%;
                        }
                    }
                    &[data-classif="Dissemination"]{
                        &:before{
                            background:url("~/static/images/indicators/icon-dissemination-white.svg") no-repeat 0 0 !important;
                            background-size: 100% 100%;
                        }
                    }
                    &[data-classif="Use"]{
                        &:before{
                            background:url("~/static/images/indicators/icon-valuation-white.svg") no-repeat 0 0 !important;
                            background-size: 100% 100%;
                        }
                    }
                    &[data-classif="Investment"]{
                        &:before{
                            background:url("~/static/images/indicators/icon-investment-white.svg") no-repeat 0 0 !important;
                            background-size: 100% 100%;
                        }
                    }
                    &[data-classif="Planning"]{
                        &:before{
                            background:url("~/static/images/indicators/icon-planning-white.svg") no-repeat 0 0 !important;
                            background-size: 100% 100%;
                        }
                    }
                }
            }
            .indicator_item{
                border-bottom:2px solid $colorDarkRed;
                height: 30px;
                line-height: 30px;
                font-size: 12px;
                padding-left: 10px;
                cursor: pointer;
                &.ext_link{
                    position: relative;
                    &:after{
                        content:"";
                        position: absolute;
                        right: 10px;
                        top: 50%;
                        @include transform(translate(0, -50%));
                        width: 30px;
                        height: 30px;
                        background: url("~/static/images/global/icon-chevron-white.svg") no-repeat 0 0;
                        background-size: 100% 100%;
                    }
                }
                &:hover{
                    background: $colorDarkRed;
                }
                .item_checkbox{
                    width: 15px;
                    height: 15px;
                    border-radius: 2px;
                    border:2px solid #2F2F2F;
                    display: inline-block;
                    vertical-align: middle;
                    position: relative;
                    &:after{
                        content:"";
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        @include transform(translate(-50%, -50%));
                        background: url("~/static/images/global/selectbox-tick.svg") no-repeat 0 0 #2F2F2F;
                        background-size: 100% 100%;
                        width: 15px;
                        height: 15px;
                        display: none;
                        border-radius: 2px;
                    }
                    &[data-selected="true"]{
                        &:after{
                            display: block;
                        }
                    }
                }
                .item_name{
                    padding-left: 10px;
                    display: inline-block;
                    vertical-align: top;
                    color: #fff;
                    width: 90%;
                    height: 30px;
                    overflow: hidden;
                }
            }
        }
    }

.selector_bucket{
    width: 100%;
    position: relative;
    left: 0px;
    bottom: 0px;
    height: 165px;
    background: $colorDarkGreen;
    z-index: 10;
    padding: 14px 30px;
    .bucket_title{
        font-size: 22px;
        font-family: "montserratbold";
        text-align: left;
        color: #fff;
        position: relative;
        border-bottom: 3px solid $colorGreen;
        padding-bottom: 4px;
        .bucket_nb{
            font-family: "montserratregular";
        }
        .bucket_removeallbt{
            right: 24px;
            top: 50%;
            @include transform(translate(0, -50%));
            position: absolute;
            font-family: "montserratitalic";
            font-size: 12px;
            color: #fff;
            cursor: pointer;
            &:after{
                content:"";
                position: absolute;
                left: 100%;
                margin-left: 6px;
                top: 50%;
                @include transform(translate(0, -50%));
                width: 20px;
                height: 20px;
                border-radius: 20px;
                background: url("~/static/images/global/icon-close_box-white.svg") no-repeat center center $colorRed;
                background-size: 100% 100%;
            }
            &:hover{
                &:after{
                    background: url("~/static/images/global/icon-close_box-white.svg") no-repeat center center $textColor;
                    background-size: 100% 100%;
                }
            }
        }
    }
    .bucket_list{
        margin-top: 10px;
        text-align: left;
        width: 80%;
        height: 70px;
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
                background: url("~/static/images/global/icon-close_box-red.svg") no-repeat center center;
                left: -4px;
                top: 50%;
                @include transform(translate(0, -50%));
            }
            &:hover{
                background: $colorRed;
                color: #fff;
                &:before{
                    background: url("~/static/images/global/icon-close_box-white.svg") no-repeat center center;
                }
            }
        }
    }
    .bucket_validbt{
        position: absolute;
        right: 20px;
        bottom: 30px;
        background: $colorRed;
        border-radius: 20px;
        width: 90px;
        height: 40px;
        color: #fff;
        font-family: "roboto_condensedbold";
        line-height: 40px;
        font-size: 16px;
        cursor: pointer;
        &:hover{
            background: $textColor;
        }
    }
}

.selector[data-selector="indicator"]{
    .selector_expandedcontent{
        height: 527px;
        background: #fff;
        position: relative;
        .expandedcontent_main{
            width: 360px;
            height: 100%;
            position: relative;
            z-index: 1000;
            background: #fff;
            padding: 20px;
            .indicators_aboutbt{
                position: absolute;
                right: 60px;
                bottom: 20px;
                color: $textColor;
                font-family: "montserratbold";
                font-size: 13px;
                cursor: pointer;
                &:before{
                    content:"";
                    position: absolute;
                    left: 100%;
                    margin-left: 6px;
                    top: -1px;
                    background: url("~/static/images/global/icon-info.svg") $colorRed no-repeat 0 0;
                    background-size: 100% 100%;
                    width: 30px;
                    height: 20px;
                    border-radius: 20px;
                }
            }
        }
    }
}

.selector[data-selector="indicator"]{
    .selector_expandedcontent{
        padding: 0px !important;
        .expandedcontent_main{
            height: 100%;
        }
    }
    &[data-modaled="true"]{
        .selector_expandedcontent{
            padding: 30px 20px 100px;
            .expandedcontent_title{
                color: #2F2F2F;
                position: relative;
                border-color: $colorGreen;
                font-family: "montserratbold";
                .indicators_resetbt{
                    position: absolute;
                    right: 0px;
                    top: 50%;
                    padding-right: 24px;
                    cursor: pointer;
                    @include transform(translate(0, -50%));
                    color: #2F2F2F;
                    font-size: 12px;
                    font-family: "montserratitalic";
                    &:after{
                        content: "";
                        position: absolute;
                        right: 0px;
                        top: 50%;
                        @include transform(translate(0, -50%));
                        background:url("~/static/images/global/icon-btn_reset-white.svg") no-repeat center center $colorRed;
                        background-size: 100% 100%;
                        width: 20px;
                        height: 20px;
                        border-radius: 24px;
                    }
                    &:hover{
                        &:after{
                            background:url("~/static/images/global/icon-btn_reset-white.svg") no-repeat center center $textColor;
                            background-size: 100% 100%;
                        }
                    }
                }
            }
        }
        .indicator_input{
            .input_searchlabel{
                color: #2F2F2F;
                font-family: "montserratitalic";
            }
        }
        .indicators_classifs{
            margin-top: 10px;
        }
        .indicator_sidebar{
            background: #EDEDED;
            color: #2F2F2F;
            .indicators_list{
                height: 330px;
                .indicator_item{
                    border-bottom: 2px solid #fff;
                    .item_name{
                        color: #2F2F2F;
                    }
                    &:hover{
                        background: $colorGreen;
                    }
                }
            }
            &:after{
                content:"";
                position: absolute;
                left: 0px;
                bottom: 0px;
                width:100%;
                height: 60px;
                pointer-events:none;
                /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#b8b8b8+0,b8b8b8+100&0+0,1+100 */
                background: -moz-linear-gradient(top, rgba(184,184,184,0) 0%, rgba(184,184,184,1) 100%); /* FF3.6-15 */
                background: -webkit-linear-gradient(top, rgba(184,184,184,0) 0%,rgba(184,184,184,1) 100%); /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(to bottom, rgba(184,184,184,0) 0%,rgba(184,184,184,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00b8b8b8', endColorstr='#b8b8b8',GradientType=0 ); /* IE6-9 */
            }
        }
    }
}

.selector[data-selector="indicator"][data-maincolor="red"]{

    .indicator_sidebar{
        background: $colorRed !important;
        .sidebar_title{
            color: #fff !important;
            border-color:#fff !important;
        }
        .indicators_list .classif_item .classif_label{
            border-color: $colorDarkRed !important;
        }
        .indicators_list .indicator_item{
            color: #fff;
            border-color:$colorDarkRed !important;
            &:hover{
                background: $colorDarkRed !important;
            }
            .item_name{
                color: #fff !important;
            }
        }
        &[data-iskey="false"]{
            background: $colorDarkRed !important;
            .indicators_list .indicator_item{
                border-color:$colorRed !important;
                &:hover{
                    background: $colorRed !important;
                }
            }
        }
    }

    .selector_expandedcontent .expandedcontent_title{
        border-color:$colorRed !important;
        color: $colorRed !important;
    }

    .indicators_classifs .indicators_classif[data-classif="Production"]:before{
        background: url("~/static/images/indicators/icon-production.svg") no-repeat 0 0;
    }
    .indicators_classifs .indicators_classif[data-classif="Dissemination"]:before{
        background: url("~/static/images/indicators/icon-dissemination.svg") no-repeat 0 0;
    }
    .indicators_classifs .indicators_classif[data-classif="Use"]:before{
        background: url("~/static/images/indicators/icon-valuation.svg") no-repeat 0 0;
    }
    .indicators_classifs .indicators_classif[data-classif="Investment"]:before{
        background: url("~/static/images/indicators/icon-investment.svg") no-repeat 0 0;
    }
    .indicators_classifs .indicators_classif[data-classif="Planning"]:before{
        background: url("~/static/images/indicators/icon-planning.svg") no-repeat 0 0;
    }
    .indicators_classif{
        &:hover, &.selected{
            background: $colorRed;
            &:before{

            }
        }
    }

    .classif_arrow{
        border-color: transparent transparent transparent $colorRed;
    }
}

#Country{
    #IndicatorSelectorModal .selector_expandedcontent{
        height: 457px !important;
    }

    .sidebar_title{
        &[data-classif="Production"]{
            &:before{
                background:url("~/static/images/indicators/icon-production-black.svg") no-repeat 0 0 !important;
                background-size: 100% 100%;
            }
        }
        &[data-classif="Dissemination"]{
            &:before{
                background:url("~/static/images/indicators/icon-dissemination-black.svg") no-repeat 0 0 !important;
                background-size: 100% 100%;
            }
        }
        &[data-classif="Use"]{
            &:before{
                background:url("~/static/images/indicators/icon-valuation-black.svg") no-repeat 0 0 !important;
                background-size: 100% 100%;
            }
        }
        &[data-classif="Investment"]{
            &:before{
                background:url("~/static/images/indicators/icon-investment-black.svg") no-repeat 0 0 !important;
                background-size: 100% 100%;
            }
        }
        &[data-classif="Planning"]{
            &:before{
                background:url("~/static/images/indicators/icon-planning-black.svg") no-repeat 0 0 !important;
                background-size: 100% 100%;
            }
        }
    }
}
</style>
