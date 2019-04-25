webpackJsonp([6],{

/***/ "024/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/illu-arbor.cab1745.svg";

/***/ }),

/***/ "0F0d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
** From https://github.com/egoist/vue-no-ssr
** With the authorization of @egoist
*/
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'no-ssr',
  props: ['placeholder'],
  data: function data() {
    return {
      canRender: false
    };
  },
  mounted: function mounted() {
    this.canRender = true;
  },
  render: function render(h) {
    if (this.canRender) {
      if (false) {
        throw new Error('<no-ssr> You cannot use multiple child components');
      }
      return this.$slots.default && this.$slots.default[0];
    }

    return h('div', {
      class: ['no-ssr-placeholder']
    }, this.$slots.placeholder || this.placeholder);
  }
});

/***/ }),

/***/ "2zKC":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWxsdS1pbmRpY2F0b3JzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMzUgMTcwIj4KICA8dGl0bGU+aWxsdS1pbmRpY2F0b3JzPC90aXRsZT4KICA8Zz4KICAgIDxyZWN0IHg9IjIwIiB5PSIxMTIiIHdpZHRoPSIxNSIgaGVpZ2h0PSI1OCIgZmlsbD0iI2Q3MjkxOSIvPgogICAgPHJlY3QgeT0iMTM5IiB3aWR0aD0iMTUiIGhlaWdodD0iMzEiIGZpbGw9IiNlMzRlM2IiLz4KICAgIDxyZWN0IHg9IjQwIiB5PSI1MSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjExOSIgZmlsbD0iI2RlNDEyZiIvPgogICAgPHJlY3QgeD0iNjAiIHk9Ijc1IiB3aWR0aD0iMTUiIGhlaWdodD0iOTUiIGZpbGw9IiNlMzRlM2IiLz4KICAgIDxyZWN0IHg9IjgwIiB5PSI4OCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjgyIiBmaWxsPSIjZGU0MTJmIi8+CiAgICA8cmVjdCB4PSIxMDAiIHk9IjMxIiB3aWR0aD0iMTUiIGhlaWdodD0iMTM5IiBmaWxsPSIjZTM0ZTNiIi8+CiAgICA8cmVjdCB4PSIxMjAiIHk9Ijc2IiB3aWR0aD0iMTUiIGhlaWdodD0iOTQiIGZpbGw9IiNkZTQxMmYiLz4KICAgIDxyZWN0IHg9IjE0MCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE3MCIgZmlsbD0iI2Q3MjkxOSIvPgogICAgPHJlY3QgeD0iMTYwIiB5PSI5NCIgd2lkdGg9IjE1IiBoZWlnaHQ9Ijc2IiBmaWxsPSIjZTM0ZTNiIi8+CiAgICA8cmVjdCB4PSIxODAiIHk9IjQ2IiB3aWR0aD0iMTUiIGhlaWdodD0iMTI0IiBmaWxsPSIjZDcyOTE5Ii8+CiAgICA8cmVjdCB4PSIyMDAiIHk9Ijc5Ljk5NzciIHdpZHRoPSIxNSIgaGVpZ2h0PSI5MC4wMDIzIiBmaWxsPSIjZTM0ZTNiIi8+CiAgICA8cmVjdCB4PSIyMjAiIHk9IjEzMCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjQwIiBmaWxsPSIjZGU0MTJmIi8+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "406k":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/illu-indicators-blur.64bcc5a.svg";

/***/ }),

/***/ "6gZw":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("kxFB");
exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:montserratbold;src:url(" + escape(__webpack_require__("KoCO")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("cqiT")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratitalic;src:url(" + escape(__webpack_require__("hPgA")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("hnDx")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratregular;src:url(" + escape(__webpack_require__("UBI+")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("dL9s")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:roboto_condensedbold;src:url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff\");font-weight:400;font-style:normal}@media screen and (max-width:980px){.ismobile{display:inline-block!important}.isdesktop{display:none!important}.selector[data-state=expanded]{max-height:none;overflow:auto}.page .page_main .main_head .head_link2{display:none!important}#Indicator .page_main .main_content .content_map_exporter{height:370px!important}#Indicator .page_main .main_content .content_map .map_title{width:90%;position:relative;left:5%;line-height:18px!important}#Indicator .page_main .main_content.content_timeseries_wrapper .timeseries_legend .legend_items .legend_item{white-space:nowrap;width:auto!important;max-width:none!important}.selector[data-selector=indicator] .selector_expandedcontent .expandedcontent_main .indicators_aboutbt{left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);top:200px;color:#fff;width:160px;bottom:auto!important;right:auto!important;margin-left:-10px!important;color:#fff!important}.selector[data-selector=indicator] .selector_expandedcontent .expandedcontent_main .indicators_aboutbt:before{border-radius:20px;background:url(" + escape(__webpack_require__("N3sw")) + ") #fff no-repeat center 0!important;background-size:100% 100%}.paris21_modalwrapper .paris21_modal{width:100%!important;height:100%!important;overflow:auto!important}.paris21_modalwrapper .paris21_modal .modal_title{padding-top:30px!important;margin-top:0!important}.paris21_modalwrapper .paris21_modal .modal_title .modal_closebt{top:0!important;right:0!important}.paris21_modalwrapper .paris21_modal .modal_content{height:auto!important;margin:20px!important}.paris21_modalwrapper .paris21_modal .modal_content .content_image{width:300px!important;height:300px!important}#Home .selector{height:238px!important}#Home .selector[data-state=expanded][data-selector=indicator],#Home .selector[data-state=expanded][data-selector=indicator] .indicator_sidebar{min-height:auto!important}#Home .selector[data-selector=geography] .selector_expandedcontent,#Home .selector[data-selector=indicator] .selector_expandedcontent{display:none!important}#Home .selector[data-selector=geography],#Home .selector[data-selector=indicator]{width:318px!important;color:#fff!important}#Home .selector[data-selector=geography] .selector_homecontent,#Home .selector[data-selector=indicator] .selector_homecontent{display:inline-block!important;position:relative!important;width:100%!important;height:100%!important;z-index:5!important;overflow:hidden!important}#Home .selector[data-selector=geography] .selector_homecontent .homecontent_picto,#Home .selector[data-selector=indicator] .selector_homecontent .homecontent_picto{position:absolute!important;left:50%!important}#Home .selector[data-selector=geography] .selector_homecontent .homecontent_title,#Home .selector[data-selector=indicator] .selector_homecontent .homecontent_title{position:absolute!important;font-size:22px!important;line-height:26px!important;width:90%!important;left:50%!important;-webkit-transform:translate(-50%);transform:translate(-50%)}#Home .selector[data-selector=geography] .selector_homecontent .homecontent_expandbt,#Home .selector[data-selector=indicator] .selector_homecontent .homecontent_expandbt{width:140px;height:40px;font-size:16px;line-height:30px;border:2px solid #fff;border-radius:20px;background:transparent;color:#fff;position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);top:73%;font-family:roboto_condensedbold;text-decoration:none}#Home .selector[data-selector=geography]{background:#159e9d!important}#Home .selector[data-selector=indicator]{background:#ea6550!important}.paris21_header .header_logo{background:none!important}.paris21_header .header_logo:after{width:60px!important;height:32px!important}.paris21_header .header_logo .logo_text{left:58px!important;font-size:12px!important;line-height:12px!important;top:16px!important;width:97px!important}.paris21_header .header_menu .menu_mobile{display:inline-block!important}.paris21_header .header_menu .menu_desktop{display:none!important}.paris21_header .header_menu .menu_langblock{margin-left:10px!important;margin-right:20px!important}.paris21_footer{height:260px!important;z-index:1000}.paris21_footer .footer_content{top:0!important;-webkit-transform:translate(0)!important;transform:translate(0)!important}.paris21_footer .footer_content .footer_item{width:100%;text-align:center!important;margin:10px 0!important}.paris21_footer .footer_content .footer_item .item_label:after{content:\"\";position:absolute;left:100%;top:50%;margin-left:6px;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:4px;height:4px;background:#ea6550;border-radius:6px}.paris21_footer .footer_content .footer_item .sharebt_wrapper{display:block!important;margin-top:10px}.paris21_footer .footer_content .footer_item[data-item=download_all]{display:none!important}.paris21_footer .footer_content .footer_item[data-item=contactus],.paris21_footer .footer_content .footer_item[data-item=findus],.paris21_footer .footer_content .footer_item[data-item=website]{position:relative}.paris21_footer .footer_logo{position:relative!important;right:0!important;top:20px!important;-webkit-transform:translate(0)!important;transform:translate(0)!important;display:inline-block!important}#Home .page_main .main_title{max-width:80%!important;display:inline-block!important}#Home .selector{position:relative!important;left:0!important;top:0!important;height:238px;margin:0 0 20px}#Home .selector:hover[data-state=home]{color:#fff!important;height:238px!important;top:0!important}#Home .selector:hover[data-state=home]:before{display:none!important}#Home .selector .homecontent_picto{top:50%!important;-webkit-transform:translate(-50%,-50%)!important;transform:translate(-50%,-50%)!important}#Home .selector .homecontent_title{top:25%!important}#Home .selector .homecontent_expandbt{top:65%!important;background:transparent!important;border-color:#fff!important;color:#fff!important}#Home .selector .homecontent_disclaimer{display:none!important}#Home .selector[data-selector=geography] .homecontent_picto{background:url(" + escape(__webpack_require__("hJhA")) + ") no-repeat 0 0;background-size:100% 100%;width:400px;height:400px}#Home .selector[data-selector=indicator] .homecontent_picto{background:url(" + escape(__webpack_require__("406k")) + ") no-repeat 0 0;background-size:100% 100%;width:400px;height:400px}#Home .selector[data-selector=network]{display:none}#Home .page_main{min-height:auto!important}#Home .page_main .main_blocks{height:auto!important}#Country.fixed{overflow:unset!important}#Country .paris21_footer{display:none!important}#Country #GeographySelectorModal{width:100%;background:#159e9d!important;margin-bottom:0!important;top:50px!important;bottom:0!important;left:0!important;overflow:auto;-webkit-transform:translate(0)!important;transform:translate(0)!important}#Country #GeographySelectorModal.nomodal{margin-top:0!important;z-index:1000!important}#Country #GeographySelectorModal.nomodal .selector_expandedcontent{padding:20px!important}#Country #GeographySelectorModal.nomodal .selector_expandedcontent .expandedcontent_main{display:block!important}#Country #GeographySelectorModal .appmodal_content{display:inline-block;max-width:400px}#Country #GeographySelectorModal .selector{background:#159e9d!important;width:100%!important}#Country #GeographySelectorModal .selector .selector_expandedcontent{background:#159e9d!important;padding:0}#Country #GeographySelectorModal .selector .selector_expandedcontent .expandedcontent_main{margin:0!important;width:auto!important;display:none}#Country #GeographySelectorModal .selector .selector_expandedcontent .expandedcontent_main .expandedcontent_title{color:#fff!important;font-size:18px;line-height:20px;text-align:center;border:0 solid;position:relative;margin-top:150px}#Country #GeographySelectorModal .selector .selector_expandedcontent .expandedcontent_main .expandedcontent_title:before{content:\"\";position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);bottom:100%;margin-bottom:10px;background:url(" + escape(__webpack_require__("tRjS")) + ") no-repeat 0 0;background-size:100% 100%;width:230px;height:150px}#Country #GeographySelectorModal .selector .selector_expandedcontent .expandedcontent_main .expandedcontent_title .smaller{font-size:14px}#Country #GeographySelectorModal .selector .selector_expandedcontent .expandedcontent_main .expandedcontent_title .title_disclaimer{display:none}#Country #GeographySelectorModal .geography_map_legend,#Country #GeographySelectorModal .geography_mapcontainer{display:none!important}#Country #GeographySelectorModal .geography_sidebar{position:relative;width:100%!important;padding:20px 10px 40px!important}#Country #GeographySelectorModal .geography_sidebar:after{display:none}#Country #GeographySelectorModal .geography_sidebar .geography_items{height:auto!important}#Country #GeographySelectorModal .geography_sidebar .sidebar_input #GeographyInput{width:100%!important}#Country #GeographySelectorModal .geography_sidebar .sidebar_input .input_icon{right:0}#Country #GeographySelectorModal .geography_sidebar .mobile_selectbox{display:inline-block!important;width:100%;height:40px;border-radius:10px;margin-top:10px}#Country #GeographySelectorModal .geography_sidebar .mobile_selectbox .v-input__control{min-height:auto!important;border-radius:10px!important}#Country #GeographySelectorModal .geography_sidebar .mobile_selectbox .v-input__control .v-input__slot{border-radius:10px!important}#Country .page_main .main_head{padding-left:80px!important;margin-top:10px!important}#Country .page_main .main_head .head_backbt{left:30px!important}#Country .page_main .main_head .head_link{display:none!important}#Country .page_main .main_head .head_title{font-size:14px!important;font-family:montserratregular!important}#Country .page_main .main_head .head_title .bolder{font-size:18px!important;font-family:montserratbold!important;display:block}#Country .page_main .main_head .head_cartridge{display:none}#Country .page_main .main_content{background:transparent!important}#Country .page_main .main_content .content_head{position:fixed!important;bottom:0!important;left:0!important;top:auto!important;-webkit-box-shadow:0 0 40px 0 rgba(0,0,0,.5);box-shadow:0 0 40px 0 rgba(0,0,0,.5)}#Country .page_main .main_content .content_head .head_geos{width:100%!important;padding:4px 20px 0!important;margin-top:0!important}#Country .page_main .main_content .content_head .head_geos .geos_col{width:21%!important;margin:0 2%!important;font-size:12px!important;line-height:14px!important}#Country .page_main .main_content .content_head .head_geos .geos_col.geos_col_country:before{display:none}#Country .page_main .main_content .content_head .head_geos .geos_col:before{top:44px!important}#Country .page_main .main_content .content_head .head_geos .geos_col:after{content:\"\";position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);top:-18px;width:0;height:0;border-style:solid;border-width:0 15px 15px;border-color:transparent transparent #fff}#Country .page_main .main_content .content_head .head_menus{display:none!important}#Country .page_main .main_content .content_main{margin-top:0!important}#Country .page_main .main_content .classif_item{margin-bottom:30px!important}#Country .page_main .main_content .classif_item .classif_col[data-col=\"1\"]{width:100%!important;height:50px;background:#036463;border-radius:20px 20px 0 0;position:relative}#Country .page_main .main_content .classif_item .classif_col[data-col=\"1\"] .classif_key{color:#fff;width:100%;text-align:center;padding:10px}#Country .page_main .main_content .classif_item .classif_col[data-col=\"1\"] .classif_key,#Country .page_main .main_content .classif_item .classif_col[data-col=\"1\"] .classif_key:before{position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}#Country .page_main .main_content .classif_item .classif_col[data-col=\"2\"]{width:100%!important}#Country .page_main .main_content .classif_item .classif_col[data-col=\"2\"]:before{display:none}#Country .page_main .main_content .classif_item .classif_col[data-col=\"2\"] .indicator_item{margin:0!important;height:auto!important}#Country .page_main .main_content .classif_item .classif_col[data-col=\"2\"] .indicator_item .indicator_desc,#Country .page_main .main_content .classif_item .classif_col[data-col=\"2\"] .indicator_item .indicator_geovalues{width:100%!important}#Country .page_main .main_content .classif_item .classif_col[data-col=\"2\"] .indicator_item .indicator_geovalues .geovalues_col{width:21%;margin:0 2%;height:70px!important}#Indicator .paris21_footer{position:relative!important}#Indicator #IndicatorSelectorModal{width:100%;background:#ea6550!important;margin-bottom:0!important;position:relative!important;left:0!important;top:0!important;width:100%!important;-webkit-transform:translate(0)!important;transform:translate(0)!important;padding-top:30px}#Indicator #IndicatorSelectorModal.nomodal{margin-top:50px!important}#Indicator #IndicatorSelectorModal .selector{background:#ea6550!important;width:100%!important;overflow:unset!important}#Indicator #IndicatorSelectorModal .selector .selector_expandedcontent{background:#ea6550!important;height:auto!important}#Indicator #IndicatorSelectorModal .selector .selector_expandedcontent .expandedcontent_main{margin:0!important;padding:20px 20px 0!important;width:auto!important;background:#ea6550!important}#Indicator #IndicatorSelectorModal .selector .selector_expandedcontent .expandedcontent_main .expandedcontent_title{color:#fff!important;font-size:18px;line-height:20px;text-align:center;border:0 solid;position:relative;margin-top:150px}#Indicator #IndicatorSelectorModal .selector .selector_expandedcontent .expandedcontent_main .expandedcontent_title:before{content:\"\";position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);bottom:100%;margin-bottom:0;background:url(" + escape(__webpack_require__("8832")) + ") no-repeat 0 0;background-size:100% 100%;width:230px;height:150px}#Indicator #IndicatorSelectorModal .selector .selector_expandedcontent .expandedcontent_main .expandedcontent_title .smaller{font-size:14px}#Indicator #IndicatorSelectorModal .selector .selector_expandedcontent .expandedcontent_main .expandedcontent_title .title_disclaimer{display:none}#Indicator #IndicatorSelectorModal .selector .indicator_input{text-align:center;margin-top:40px}#Indicator #IndicatorSelectorModal .selector .indicator_input .input_icon{left:auto!important;right:0}#Indicator #IndicatorSelectorModal .selector .indicator_input .input_searchlabel{color:#fff}#Indicator #IndicatorSelectorModal .selector .indicator_input #IndicatorInput{width:100%}#Indicator #IndicatorSelectorModal .selector .indicators_classifs .indicators_classif{display:none}#Indicator #IndicatorSelectorModal .selector .indicators_classifs .mobile_selectbox{display:inline-block!important;width:100%;height:40px;border-radius:10px;margin-top:10px}#Indicator #IndicatorSelectorModal .selector .indicators_classifs .mobile_selectbox .v-input__control{min-height:auto!important;border-radius:10px!important}#Indicator #IndicatorSelectorModal .selector .indicators_classifs .mobile_selectbox .v-input__control .v-input__slot{border-radius:10px!important}#Indicator #IndicatorSelectorModal .indicator_sidebar{position:relative;width:100%!important;padding:0 20px 20px!important;margin-top:10px}#Indicator #IndicatorSelectorModal .indicator_sidebar:after{display:none}#Indicator #IndicatorSelectorModal .indicator_sidebar .sidebar_panel{padding:0 20px 30px;position:relative;display:none}#Indicator #IndicatorSelectorModal .indicator_sidebar .sidebar_panel.displayed{display:inline-block}#Indicator #IndicatorSelectorModal .indicator_sidebar .sidebar_panel .sidebar_title{display:none}#Indicator #IndicatorSelectorModal .indicator_sidebar .indicators_list{height:auto!important;overflow:unset!important;margin-top:10px}#Indicator .page_main .main_head{margin-top:20px!important;padding-left:90px!important;margin-bottom:20px!important}#Indicator .page_main .main_head .head_title{font-size:18px!important;line-height:22px!important}#Indicator .page_main .main_head .head_title .smaller{display:block;font-size:14px;font-family:montserratregular}#Indicator .page_main .main_head .head_link{display:none}#Indicator .main_content{margin:0 20px!important}#Indicator .main_content .content_disclaimer{margin:0 auto!important}#Indicator .main_content .content_map{height:287px!important}#Indicator .main_content .content_map .map_title{top:10px!important}#Indicator .main_content .content_legend .legend_row .legend_zoomblock{display:none!important}#Indicator .main_content .content_legend .legend_row .legend_items{margin-left:-20px!important}#Indicator .main_content .content_legend .legend_row .legend_exportblock,#Indicator .main_content .content_legend .legend_row[data-row=\"2\"]{display:none!important}#Indicator .main_content.content_timeseries_wrapper{padding:10px!important}#Indicator .main_content.content_timeseries_wrapper .timeseries_legend{height:auto!important}#Indicator .main_content.content_timeseries_wrapper .timeseries_legend .timeseries_addcountrybt{position:relative!important;display:inline-block;-webkit-transform:translate(0)!important;transform:translate(0)!important}#Indicator .main_content.content_timeseries_wrapper .timeseries_legend .timeseries_addcountrybt .addcountrybt_label{display:none}#Indicator .main_content.content_timeseries_wrapper .timeseries_legend .legend_items{position:relative!important;margin-left:60px!important;padding-left:10px!important;-webkit-transform:translate(0)!important;transform:translate(0)!important;max-width:240px}#Indicator .main_content.content_timeseries_wrapper .timeseries_legend .legend_items .legend_item{max-width:100px}#Indicator .main_content.content_timeseries_wrapper .timeseries_legend .legend_exportblock{display:none!important}#Indicator .main_content.last{text-align:left!important;padding:0!important}#Indicator .main_content.last .content_sources{margin:20px 0 0!important;width:100%!important}#Indicator .main_content.last .content_related{margin:20px 0 40px!important;width:100%!important}#Indicator #GeographySelectorModal{width:100%;background:#ededed!important;margin-bottom:0!important;position:fixed!important;left:0!important;top:50px!important;overflow:hidden!important;bottom:0!important;-webkit-transform:translate(0)!important;transform:translate(0)!important}#Indicator #GeographySelectorModal.nomodal{margin-top:50px!important;z-index:1000!important}#Indicator #GeographySelectorModal .appmodal_head{background:none;height:40px;line-height:40px;color:#2f2f2f}#Indicator #GeographySelectorModal .appmodal_head .appmodal_closebt{background:url(" + escape(__webpack_require__("Ehvn")) + ")!important}#Indicator #GeographySelectorModal .appmodal_content{position:absolute!important;left:0;top:40px;bottom:0;width:100%}#Indicator #GeographySelectorModal .selector{background:#ededed!important;width:100%!important;height:100%!important}#Indicator #GeographySelectorModal .selector .selector_expandedcontent{height:100%!important;padding:0!important}#Indicator #GeographySelectorModal .selector .selector_expandedcontent .expandedcontent_main{margin:0!important;width:auto!important;display:none!important}#Indicator #GeographySelectorModal .selector .selector_expandedcontent .expandedcontent_main .expandedcontent_title{color:#fff!important;font-size:18px;line-height:20px;text-align:center;border:0 solid;position:relative;margin-top:150px}#Indicator #GeographySelectorModal .selector .selector_expandedcontent .expandedcontent_main .expandedcontent_title:before{content:\"\";position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);bottom:100%;margin-bottom:10px;background:url(" + escape(__webpack_require__("tRjS")) + ") no-repeat 0 0;background-size:100% 100%;width:230px;height:150px}#Indicator #GeographySelectorModal .selector .selector_expandedcontent .expandedcontent_main .expandedcontent_title .smaller{font-size:14px}#Indicator #GeographySelectorModal .selector .selector_expandedcontent .expandedcontent_main .expandedcontent_title .title_disclaimer{display:none}#Indicator #GeographySelectorModal .geography_map_legend,#Indicator #GeographySelectorModal .geography_mapcontainer{display:none!important}#Indicator #GeographySelectorModal .geography_sidebar{position:absolute!important;top:0;overflow:auto!important;bottom:160px!important;height:auto!important;width:100%!important;padding:10px 20px 20px!important}#Indicator #GeographySelectorModal .geography_sidebar:after{display:none}#Indicator #GeographySelectorModal .geography_sidebar .geography_items{height:auto!important}#Indicator #GeographySelectorModal .geography_sidebar .sidebar_input #GeographyInput{width:285px!important}#Indicator #GeographySelectorModal .selector_bucket{position:fixed!important;bottom:0;left:0}}", ""]);

// exports


/***/ }),

/***/ "8832":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/illu-indicators-mob.e28ffb5.svg";

/***/ }),

/***/ "ATE4":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "body[data-v-d5ea9138]{background-color:#fff}", ""]);

// exports


/***/ }),

/***/ "CCFM":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/robotocondensed-bold-webfont.1711be4.woff";

/***/ }),

/***/ "CZJM":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1jaGV2cm9uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+CiAgPHRpdGxlPmljb24tYnRuLWJhY2s8L3RpdGxlPgogIDxwb2x5bGluZSBwb2ludHM9IjE3LjI1IDE5LjUgMTIuNzUgMTUgMTcuMjUgMTAuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K"

/***/ }),

/***/ "Dhuc":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1pbnB1dF9jbG9zZXNlYXJjaCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzUgMzUiPgogIDx0aXRsZT5pY29uLWlucHV0X2Nsb3Nlc2VhcmNoPC90aXRsZT4KICA8Zz4KICAgIDxwb2x5bGluZSBwb2ludHM9IjEzIDEzIDE3LjUgMTcuNSAxMyAyMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cG9seWxpbmUgcG9pbnRzPSIyMiAxMyAxNy41IDE3LjUgMjIgMjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "Ehvn":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1pbnB1dF9jbG9zZXNlYXJjaCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzUgMzUiPgogIDx0aXRsZT5pY29uLWlucHV0X2Nsb3Nlc2VhcmNoPC90aXRsZT4KICA8Zz4KICAgIDxwb2x5bGluZSBwb2ludHM9IjEzIDEzIDE3LjUgMTcuNSAxMyAyMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMmYyZjJmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cG9seWxpbmUgcG9pbnRzPSIyMiAxMyAxNy41IDE3LjUgMjIgMjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJmMmYyZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "HBB+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'nuxt-child',
  functional: true,
  props: ['keepAlive'],
  render: function render(h, _ref) {
    var parent = _ref.parent,
        data = _ref.data,
        props = _ref.props;

    data.nuxtChild = true;
    var _parent = parent;
    var transitions = parent.$nuxt.nuxt.transitions;
    var defaultTransition = parent.$nuxt.nuxt.defaultTransition;

    var depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    var transition = transitions[depth] || defaultTransition;
    var transitionProps = {};
    transitionsKeys.forEach(function (key) {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    var listeners = {};
    listenersKeys.forEach(function (key) {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    // Add triggerScroll event on beforeEnter (fix #1376)
    var beforeEnter = listeners.beforeEnter;
    listeners.beforeEnter = function (el) {
      window.$nuxt.$emit('triggerScroll');
      if (beforeEnter) return beforeEnter.call(_parent, el);
    };

    var routerView = [h('router-view', data)];
    if (typeof props.keepAlive !== 'undefined') {
      routerView = [h('keep-alive', routerView)];
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, routerView);
  }
});

var transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];

var listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];

/***/ }),

/***/ "Hot+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuxt_child__ = __webpack_require__("HBB+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_error_vue__ = __webpack_require__("To1F");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("YLfZ");





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'nuxt',
  props: ['nuxtChildKey', 'keepAlive'],
  render: function render(h) {
    // If there is some error
    if (this.nuxt.err) {
      return h('nuxt-error', {
        props: {
          error: this.nuxt.err
        }
      });
    }
    // Directly return nuxt child
    return h('nuxt-child', {
      key: this.routerViewKey,
      props: this.$props
    });
  },
  beforeCreate: function beforeCreate() {
    __WEBPACK_IMPORTED_MODULE_0_vue__["default"].util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  computed: {
    routerViewKey: function routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* compile */])(this.$route.matched[0].path)(this.$route.params);
      }
      var Component = this.$route.matched[0] && this.$route.matched[0].components.default;
      if (Component && Component.options && Component.options.key) {
        return typeof Component.options.key === 'function' ? Component.options.key(this.$route) : Component.options.key;
      }
      return this.$route.path;
    }
  },
  components: {
    NuxtChild: __WEBPACK_IMPORTED_MODULE_1__nuxt_child__["a" /* default */],
    NuxtError: __WEBPACK_IMPORTED_MODULE_2__layouts_error_vue__["a" /* default */]
  }
});

/***/ }),

/***/ "J1QK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _vm._v(_vm._s(_vm.error) + "\n  "),
      _vm.error.statusCode === 404
        ? _c("h1", [_vm._v("Page not found")])
        : _c("h1", [_vm._v("An error occurred")]),
      _c("nuxt-link", { attrs: { to: "/" } }, [_vm._v("Home page")])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d5ea9138", esExports)
  }
}

/***/ }),

/***/ "J2Ti":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("woOf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__("BO1k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__("NYxO");





__WEBPACK_IMPORTED_MODULE_2_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vuex__["default"]);

// Recursive find files in {srcDir}/{dir.store}
var files = __webpack_require__("QA5y");
var filenames = files.keys();

// Store
var storeData = {};

// Check if {dir.store}/index.js exists
var indexFilename = void 0;
filenames.forEach(function (filename) {
  if (filename.indexOf('./index.') !== -1) {
    indexFilename = filename;
  }
});
if (indexFilename) {
  storeData = getModule(indexFilename);
}

// If store is not an exported method = modules store
if (typeof storeData !== 'function') {

  // Store modules
  if (!storeData.modules) {
    storeData.modules = {};
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(filenames), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var filename = _step.value;

      var name = filename.replace(/^\.\//, '').replace(/\.(js)$/, '');
      if (name === 'index') continue;

      var namePath = name.split(/\//);
      var module = getModuleNamespace(storeData, namePath);

      name = namePath.pop();
      module[name] = getModule(filename);
      module[name].namespaced = true;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

// createStore
var createStore = storeData instanceof Function ? storeData : function () {
  return new __WEBPACK_IMPORTED_MODULE_3_vuex__["default"].Store(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({
    strict: "production" !== 'production'
  }, storeData, {
    state: storeData.state instanceof Function ? storeData.state() : {}
  }));
};

// Dynamically require module
function getModule(filename) {
  var file = files(filename);
  var module = file.default || file;
  if (module.commit) {
    throw new Error('[nuxt] store/' + filename.replace('./', '') + ' should export a method which returns a Vuex instance.');
  }
  if (module.state && typeof module.state !== 'function') {
    throw new Error('[nuxt] state should be a function in store/' + filename.replace('./', ''));
  }
  return module;
}

function getModuleNamespace(storeData, namePath) {
  if (namePath.length === 1) {
    return storeData.modules;
  }
  var namespace = namePath.shift();
  storeData.modules[namespace] = storeData.modules[namespace] || {};
  storeData.modules[namespace].namespaced = true;
  storeData.modules[namespace].modules = storeData.modules[namespace].modules || {};
  return getModuleNamespace(storeData.modules[namespace], namePath);
}

/***/ }),

/***/ "KoCO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat-bold-webfont.3e24c08.woff2";

/***/ }),

/***/ "LI9e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_velocity_animate__ = __webpack_require__("9qgI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_velocity_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_velocity_animate__);


/* harmony default export */ __webpack_exports__["a"] = (function (ctx, inject) {
  inject('velocity', __WEBPACK_IMPORTED_MODULE_0_velocity_animate___default.a);
});

/***/ }),

/***/ "N3sw":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-info-red.a2ce938.svg";

/***/ }),

/***/ "QA5y":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": "vdRI"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "QA5y";

/***/ }),

/***/ "RAUZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    error: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  layout: 'blog' // you can set a custom layout for the error page
});

/***/ }),

/***/ "SyWC":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("wbPw");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7e4dea34", content, false, {"sourceMap":false});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js??ref--5-1!../../node_modules/postcss-loader/lib/index.js??ref--5-2!../../node_modules/sass-loader/lib/loader.js??ref--5-3!./main.scss", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js??ref--5-1!../../node_modules/postcss-loader/lib/index.js??ref--5-2!../../node_modules/sass-loader/lib/loader.js??ref--5-3!./main.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "T23V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("pFYg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__ = __webpack_require__("fZjL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_object_assign__ = __webpack_require__("woOf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__middleware__ = __webpack_require__("unZF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index__ = __webpack_require__("qcny");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__("YLfZ");








var loadAsyncComponents = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee(to, from, next) {
    var Components, statusCode;
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Check if route path changed (this._pathChanged), only if the page is not an error (for validate())
            this._pathChanged = !!app.nuxt.err || from.path !== to.path;
            this._queryChanged = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(to.query) !== __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(from.query);
            this._diffQuery = this._queryChanged ? Object(__WEBPACK_IMPORTED_MODULE_10__utils__["g" /* getQueryDiff */])(to.query, from.query) : [];

            _context.prev = 3;
            _context.next = 6;
            return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["k" /* resolveRouteComponents */])(to);

          case 6:
            Components = _context.sent;


            // Call next()
            next();
            _context.next = 17;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context['catch'](3);

            _context.t0 = _context.t0 || {};
            statusCode = _context.t0.statusCode || _context.t0.status || _context.t0.response && _context.t0.response.status || 500;

            this.error({ statusCode: statusCode, message: _context.t0.message });
            this.$nuxt.$emit('routeChanged', to, from, _context.t0);
            next(false);

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 10]]);
  }));

  return function loadAsyncComponents(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var render = function () {
  var _ref3 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee3(to, from, next) {
    var _this3 = this;

    var nextCalled, _next, matches, Components, layout, _layout, isValid, _layout2;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(this._pathChanged === false && this._queryChanged === false)) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt('return', next());

          case 2:

            // nextCalled is true when redirected
            nextCalled = false;

            _next = function _next(path) {

              if (nextCalled) return;
              nextCalled = true;
              var matches = [];
              _lastPaths = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["e" /* getMatchedComponents */])(from, matches).map(function (Component, i) {
                return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["b" /* compile */])(from.matched[matches[i]].path)(from.params);
              });
              next(path);
            };

            // Update context


            _context3.next = 6;
            return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["m" /* setContext */])(app, {
              route: to,
              from: from,
              next: _next.bind(this)
            });

          case 6:
            this._dateLastError = app.nuxt.dateErr;
            this._hadError = !!app.nuxt.err;

            // Get route's matched components
            matches = [];
            Components = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["e" /* getMatchedComponents */])(to, matches);

            // If no Components matched, generate 404

            if (Components.length) {
              _context3.next = 24;
              break;
            }

            _context3.next = 13;
            return callMiddleware.call(this, Components, app.context);

          case 13:
            if (!nextCalled) {
              _context3.next = 15;
              break;
            }

            return _context3.abrupt('return');

          case 15:
            _context3.next = 17;
            return this.loadLayout(typeof __WEBPACK_IMPORTED_MODULE_9__index__["a" /* NuxtError */].layout === 'function' ? __WEBPACK_IMPORTED_MODULE_9__index__["a" /* NuxtError */].layout(app.context) : __WEBPACK_IMPORTED_MODULE_9__index__["a" /* NuxtError */].layout);

          case 17:
            layout = _context3.sent;
            _context3.next = 20;
            return callMiddleware.call(this, Components, app.context, layout);

          case 20:
            if (!nextCalled) {
              _context3.next = 22;
              break;
            }

            return _context3.abrupt('return');

          case 22:
            // Show error page
            app.context.error({ statusCode: 404, message: 'This page could not be found' });
            return _context3.abrupt('return', next());

          case 24:

            // Update ._data and other properties if hot reloaded
            Components.forEach(function (Component) {
              if (Component._Ctor && Component._Ctor.options) {
                Component.options.asyncData = Component._Ctor.options.asyncData;
                Component.options.fetch = Component._Ctor.options.fetch;
              }
            });

            // Apply transitions
            this.setTransitions(mapTransitions(Components, to, from));

            _context3.prev = 26;
            _context3.next = 29;
            return callMiddleware.call(this, Components, app.context);

          case 29:
            if (!nextCalled) {
              _context3.next = 31;
              break;
            }

            return _context3.abrupt('return');

          case 31:
            if (!app.context._errored) {
              _context3.next = 33;
              break;
            }

            return _context3.abrupt('return', next());

          case 33:

            // Set layout
            _layout = Components[0].options.layout;

            if (typeof _layout === 'function') {
              _layout = _layout(app.context);
            }
            _context3.next = 37;
            return this.loadLayout(_layout);

          case 37:
            _layout = _context3.sent;
            _context3.next = 40;
            return callMiddleware.call(this, Components, app.context, _layout);

          case 40:
            if (!nextCalled) {
              _context3.next = 42;
              break;
            }

            return _context3.abrupt('return');

          case 42:
            if (!app.context._errored) {
              _context3.next = 44;
              break;
            }

            return _context3.abrupt('return', next());

          case 44:

            // Call .validate()
            isValid = true;

            Components.forEach(function (Component) {
              if (!isValid) return;
              if (typeof Component.options.validate !== 'function') return;
              isValid = Component.options.validate({
                params: to.params || {},
                query: to.query || {},
                store: store
              });
            });
            // ...If .validate() returned false

            if (isValid) {
              _context3.next = 49;
              break;
            }

            this.error({ statusCode: 404, message: 'This page could not be found' });
            return _context3.abrupt('return', next());

          case 49:
            _context3.next = 51;
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all(Components.map(function (Component, i) {
              // Check if only children route changed
              Component._path = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["b" /* compile */])(to.matched[matches[i]].path)(to.params);
              Component._dataRefresh = false;
              // Check if Component need to be refreshed (call asyncData & fetch)
              // Only if its slug has changed or is watch query changes
              if (_this3._pathChanged && Component._path !== _lastPaths[i]) {
                Component._dataRefresh = true;
              } else if (!_this3._pathChanged && _this3._queryChanged) {
                var watchQuery = Component.options.watchQuery;
                if (watchQuery === true) {
                  Component._dataRefresh = true;
                } else if (Array.isArray(watchQuery)) {
                  Component._dataRefresh = watchQuery.some(function (key) {
                    return _this3._diffQuery[key];
                  });
                }
              }
              if (!_this3._hadError && _this3._isMounted && !Component._dataRefresh) {
                return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve();
              }

              var promises = [];

              var hasAsyncData = Component.options.asyncData && typeof Component.options.asyncData === 'function';
              var hasFetch = !!Component.options.fetch;

              // Call asyncData(context)
              if (hasAsyncData) {
                var promise = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["j" /* promisify */])(Component.options.asyncData, app.context).then(function (asyncDataResult) {
                  Object(__WEBPACK_IMPORTED_MODULE_10__utils__["a" /* applyAsyncData */])(Component, asyncDataResult);
                });
                promises.push(promise);
              }

              // Call fetch(context)
              if (hasFetch) {
                var p = Component.options.fetch(app.context);
                if (!p || !(p instanceof __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a) && typeof p.then !== 'function') {
                  p = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve(p);
                }
                p.then(function (fetchResult) {});
                promises.push(p);
              }

              return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all(promises);
            }));

          case 51:

            // If not redirected
            if (!nextCalled) {

              _lastPaths = Components.map(function (Component, i) {
                return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["b" /* compile */])(to.matched[matches[i]].path)(to.params);
              });
              next();
            }

            _context3.next = 66;
            break;

          case 54:
            _context3.prev = 54;
            _context3.t0 = _context3['catch'](26);

            if (!_context3.t0) _context3.t0 = {};
            _lastPaths = [];
            _context3.t0.statusCode = _context3.t0.statusCode || _context3.t0.status || _context3.t0.response && _context3.t0.response.status || 500;

            // Load error layout
            _layout2 = __WEBPACK_IMPORTED_MODULE_9__index__["a" /* NuxtError */].layout;

            if (typeof _layout2 === 'function') {
              _layout2 = _layout2(app.context);
            }
            _context3.next = 63;
            return this.loadLayout(_layout2);

          case 63:

            this.error(_context3.t0);
            this.$nuxt.$emit('routeChanged', to, from, _context3.t0);
            next(false);

          case 66:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[26, 54]]);
  }));

  return function render(_x9, _x10, _x11) {
    return _ref3.apply(this, arguments);
  };
}();

// Fix components format in matched, it's due to code-splitting of vue-router


var mountApp = function () {
  var _ref4 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee4(__app) {
    var Components, _app, mount;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // Set global variables
            app = __app.app;
            router = __app.router;
            store = __app.store;

            // Resolve route components
            _context4.next = 5;
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all(resolveComponents(router));

          case 5:
            Components = _context4.sent;


            // Create Vue instance
            _app = new __WEBPACK_IMPORTED_MODULE_7_vue__["default"](app);

            // Mounts Vue app to DOM element

            mount = function mount() {
              _app.$mount('#__nuxt');

              // Listen for first Vue update
              __WEBPACK_IMPORTED_MODULE_7_vue__["default"].nextTick(function () {
                // Call window.onNuxtReady callbacks
                nuxtReady(_app);
              });
            };

            // Enable transitions


            _app.setTransitions = _app.$options.nuxt.setTransitions.bind(_app);
            if (Components.length) {
              _app.setTransitions(mapTransitions(Components, router.currentRoute));
              _lastPaths = router.currentRoute.matched.map(function (route) {
                return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["b" /* compile */])(route.path)(router.currentRoute.params);
              });
            }

            // Initialize error handler
            _app.$loading = {}; // To avoid error while _app.$nuxt does not exist
            if (NUXT.error) _app.error(NUXT.error);

            // Add router hooks
            router.beforeEach(loadAsyncComponents.bind(_app));
            router.beforeEach(render.bind(_app));
            router.afterEach(normalizeComponents);
            router.afterEach(fixPrepatch.bind(_app));

            // If page already is server rendered

            if (!NUXT.serverRendered) {
              _context4.next = 19;
              break;
            }

            mount();
            return _context4.abrupt('return');

          case 19:

            // First render on client-side
            render.call(_app, router.currentRoute, router.currentRoute, function (path) {
              // If not redirected
              if (!path) {
                normalizeComponents(router.currentRoute, router.currentRoute);
                showNextPage.call(_app, router.currentRoute);
                // Dont call fixPrepatch.call(_app, router.currentRoute, router.currentRoute) since it's first render
                mount();
                return;
              }

              // Push the path and then mount app
              router.push(path, function () {
                return mount();
              }, function (err) {
                if (!err) return mount();
                console.error(err);
              });
            });

          case 20:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function mountApp(_x12) {
    return _ref4.apply(this, arguments);
  };
}();






var noopData = function noopData() {
  return {};
};
var noopFetch = function noopFetch() {};

// Global shared references
var _lastPaths = [];
var app = void 0;
var router = void 0;
var store = void 0;

// Try to rehydrate SSR data from window
var NUXT = window.__NUXT__ || {};

// Setup global Vue error handler
var defaultErrorHandler = __WEBPACK_IMPORTED_MODULE_7_vue__["default"].config.errorHandler;
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].config.errorHandler = function (err, vm, info) {
  var nuxtError = {
    statusCode: err.statusCode || err.name || 'Whoops!',
    message: err.message || err.toString()

    // Show Nuxt Error Page
  };if (vm && vm.$root && vm.$root.$nuxt && vm.$root.$nuxt.error && info !== 'render function') {
    vm.$root.$nuxt.error(nuxtError);
  }

  // Call other handler if exist
  if (typeof defaultErrorHandler === 'function') {
    return defaultErrorHandler.apply(undefined, arguments);
  }

  // Log to console
  if (false) {
    console.error(err);
  } else {
    console.error(err.message || nuxtError.message);
  }
};

// Create and mount App
Object(__WEBPACK_IMPORTED_MODULE_9__index__["b" /* createApp */])().then(mountApp).catch(function (err) {
  if (err.message === 'ERR_REDIRECT') {
    return; // Wait for browser to redirect...
  }
  console.error('[nuxt] Error while initializing app', err);
});

function componentOption(component, key) {
  if (!component || !component.options || !component.options[key]) {
    return {};
  }
  var option = component.options[key];
  if (typeof option === 'function') {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return option.apply(undefined, args);
  }
  return option;
}

function mapTransitions(Components, to, from) {
  var componentTransitions = function componentTransitions(component) {
    var transition = componentOption(component, 'transition', to, from) || {};
    return typeof transition === 'string' ? { name: transition } : transition;
  };

  return Components.map(function (Component) {
    // Clone original object to prevent overrides
    var transitions = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_object_assign___default()({}, componentTransitions(Component));

    // Combine transitions & prefer `leave` transitions of 'from' route
    if (from && from.matched.length && from.matched[0].components.default) {
      var from_transitions = componentTransitions(from.matched[0].components.default);
      __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(from_transitions).filter(function (key) {
        return from_transitions[key] && key.toLowerCase().indexOf('leave') !== -1;
      }).forEach(function (key) {
        transitions[key] = from_transitions[key];
      });
    }

    return transitions;
  });
}

function applySSRData(Component, ssrData) {
  if (NUXT.serverRendered && ssrData) {
    Object(__WEBPACK_IMPORTED_MODULE_10__utils__["a" /* applyAsyncData */])(Component, ssrData);
  }
  Component._Ctor = Component;
  return Component;
}

// Get matched components
function resolveComponents(router) {
  var _this = this;

  var path = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["d" /* getLocation */])(router.options.base, router.options.mode);

  return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["c" /* flatMapComponents */])(router.match(path), function () {
    var _ref2 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee2(Component, _, match, key, index) {
      var _Component;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(typeof Component === 'function' && !Component.options)) {
                _context2.next = 4;
                break;
              }

              _context2.next = 3;
              return Component();

            case 3:
              Component = _context2.sent;

            case 4:
              // Sanitize it and save it
              _Component = applySSRData(Object(__WEBPACK_IMPORTED_MODULE_10__utils__["l" /* sanitizeComponent */])(Component), NUXT.data ? NUXT.data[index] : null);

              match.components[key] = _Component;
              return _context2.abrupt('return', _Component);

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x4, _x5, _x6, _x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }());
}

function callMiddleware(Components, context, layout) {
  var _this2 = this;

  var midd = [];
  var unknownMiddleware = false;

  // If layout is undefined, only call global middleware
  if (typeof layout !== 'undefined') {
    midd = []; // Exclude global middleware if layout defined (already called before)
    if (layout.middleware) {
      midd = midd.concat(layout.middleware);
    }
    Components.forEach(function (Component) {
      if (Component.options.middleware) {
        midd = midd.concat(Component.options.middleware);
      }
    });
  }

  midd = midd.map(function (name) {
    if (typeof name === 'function') return name;
    if (typeof __WEBPACK_IMPORTED_MODULE_8__middleware__["a" /* default */][name] !== 'function') {
      unknownMiddleware = true;
      _this2.error({ statusCode: 500, message: 'Unknown middleware ' + name });
    }
    return __WEBPACK_IMPORTED_MODULE_8__middleware__["a" /* default */][name];
  });

  if (unknownMiddleware) return;
  return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["i" /* middlewareSeries */])(midd, context);
}

function normalizeComponents(to, ___) {
  Object(__WEBPACK_IMPORTED_MODULE_10__utils__["c" /* flatMapComponents */])(to, function (Component, _, match, key) {
    if ((typeof Component === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(Component)) === 'object' && !Component.options) {
      // Updated via vue-router resolveAsyncComponents()
      Component = __WEBPACK_IMPORTED_MODULE_7_vue__["default"].extend(Component);
      Component._Ctor = Component;
      match.components[key] = Component;
    }
    return Component;
  });
}

function showNextPage(to) {
  // Hide error component if no error
  if (this._hadError && this._dateLastError === this.$options.nuxt.dateErr) {
    this.error();
  }

  // Set layout
  var layout = this.$options.nuxt.err ? __WEBPACK_IMPORTED_MODULE_9__index__["a" /* NuxtError */].layout : to.matched[0].components.default.options.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  this.setLayout(layout);
}

// When navigating on a different route but the same component is used, Vue.js
// Will not update the instance data, so we have to update $data ourselves
function fixPrepatch(to, ___) {
  var _this4 = this;

  if (this._pathChanged === false && this._queryChanged === false) return;

  __WEBPACK_IMPORTED_MODULE_7_vue__["default"].nextTick(function () {
    var matches = [];
    var instances = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["f" /* getMatchedComponentsInstances */])(to, matches);

    instances.forEach(function (instance, i) {
      if (!instance) return;
      // if (!this._queryChanged && to.matched[matches[i]].path.indexOf(':') === -1 && to.matched[matches[i]].path.indexOf('*') === -1) return // If not a dynamic route, skip
      if (instance.constructor._dataRefresh && _lastPaths[i] === instance.constructor._path && typeof instance.constructor.options.data === 'function') {
        var newData = instance.constructor.options.data.call(instance);
        for (var key in newData) {
          __WEBPACK_IMPORTED_MODULE_7_vue__["default"].set(instance.$data, key, newData[key]);
        }
      }
    });
    showNextPage.call(_this4, to);
  });
}

function nuxtReady(_app) {
  window._nuxtReadyCbs.forEach(function (cb) {
    if (typeof cb === 'function') {
      cb(_app);
    }
  });
  // Special JSDOM
  if (typeof window._onNuxtLoaded === 'function') {
    window._onNuxtLoaded(_app);
  }
  // Add router hooks
  router.afterEach(function (to, from) {
    // Wait for fixPrepatch + $data updates
    __WEBPACK_IMPORTED_MODULE_7_vue__["default"].nextTick(function () {
      return _app.$nuxt.$emit('routeChanged', to, from);
    });
  });
}

/***/ }),

/***/ "To1F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_false_presets_env_modules_false_targets_browsers_1_last_2_versions_not_ie_8_stage_2_plugins_transform_vue_jsx_transform_runtime_node_modules_vue_loader_lib_selector_type_script_index_0_error_vue__ = __webpack_require__("RAUZ");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d5ea9138_hasScoped_true_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_error_vue__ = __webpack_require__("J1QK");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("Zlwr")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d5ea9138"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_false_presets_env_modules_false_targets_browsers_1_last_2_versions_not_ie_8_stage_2_plugins_transform_vue_jsx_transform_runtime_node_modules_vue_loader_lib_selector_type_script_index_0_error_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d5ea9138_hasScoped_true_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_error_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "layouts/error.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d5ea9138", Component.options)
  } else {
    hotAPI.reload("data-v-d5ea9138", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "UBI+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat-regular-webfont.80af501.woff2";

/***/ }),

/***/ "WRRc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'nuxt-link',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    return h('router-link', data, children);
  }
});

/***/ }),

/***/ "YLfZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyAsyncData;
/* harmony export (immutable) */ __webpack_exports__["l"] = sanitizeComponent;
/* harmony export (immutable) */ __webpack_exports__["e"] = getMatchedComponents;
/* harmony export (immutable) */ __webpack_exports__["f"] = getMatchedComponentsInstances;
/* harmony export (immutable) */ __webpack_exports__["c"] = flatMapComponents;
/* harmony export (immutable) */ __webpack_exports__["k"] = resolveRouteComponents;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getRouteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return setContext; });
/* harmony export (immutable) */ __webpack_exports__["i"] = middlewareSeries;
/* harmony export (immutable) */ __webpack_exports__["j"] = promisify;
/* harmony export (immutable) */ __webpack_exports__["d"] = getLocation;
/* unused harmony export urlJoin */
/* harmony export (immutable) */ __webpack_exports__["b"] = compile;
/* harmony export (immutable) */ __webpack_exports__["g"] = getQueryDiff;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__("pFYg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__ = __webpack_require__("fZjL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__("/5sW");









var noopData = function noopData() {
  return {};
};

// window.onNuxtReady(() => console.log('Ready')) hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (true) {
  window._nuxtReadyCbs = [];
  window.onNuxtReady = function (cb) {
    window._nuxtReadyCbs.push(cb);
  };
}

function applyAsyncData(Component, asyncData) {
  var ComponentData = Component.options.data || noopData;
  // Prevent calling this method for each request on SSR context
  if (!asyncData && Component.options.hasAsyncData) {
    return;
  }
  Component.options.hasAsyncData = true;
  Component.options.data = function () {
    var data = ComponentData.call(this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_extends___default()({}, data, asyncData);
  };
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}

function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = __WEBPACK_IMPORTED_MODULE_7_vue__["default"].extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // For debugging purpose
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}

function getMatchedComponents(route) {
  var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return [].concat.apply([], route.matched.map(function (m, index) {
    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      matches && matches.push(index);
      return m.components[key];
    });
  }));
}

function getMatchedComponentsInstances(route) {
  var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return [].concat.apply([], route.matched.map(function (m, index) {
    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(m.instances).map(function (key) {
      matches && matches.push(index);
      return m.instances[key];
    });
  }));
}

function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key, index);
    });
  }));
}

function resolveRouteComponents(route) {
  var _this = this;

  return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a.all(flatMapComponents(route, function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee(Component, _, match, key) {
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof Component === 'function' && !Component.options)) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return Component();

            case 3:
              Component = _context.sent;

            case 4:
              return _context.abrupt('return', match.components[key] = sanitizeComponent(Component));

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x3, _x4, _x5, _x6) {
      return _ref.apply(this, arguments);
    };
  }()));
}

var getRouteData = function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee2(route) {
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return resolveRouteComponents(route);

          case 2:
            return _context2.abrupt('return', __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_extends___default()({}, route, {
              meta: getMatchedComponents(route).map(function (Component) {
                return Component.options.meta || {};
              })
            }));

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getRouteData(_x7) {
    return _ref2.apply(this, arguments);
  };
}();

var setContext = function () {
  var _ref3 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee3(app, context) {
    var route;
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            route = context.to ? context.to : context.route;
            // If context not defined, create it

            if (app.context) {
              _context3.next = 14;
              break;
            }

            _context3.t0 = true;
            _context3.t1 = app;
            _context3.t2 = app.store;
            _context3.t3 = context.payload;
            _context3.t4 = context.error;
            _context3.t5 = { "title": "NUxtjs template" };
            app.context = {
              get isServer() {
                console.warn('context.isServer has been deprecated, please use process.server instead.');
                return false;
              },
              get isClient() {
                console.warn('context.isClient has been deprecated, please use process.client instead.');
                return true;
              },
              isStatic: _context3.t0,
              isDev: false,
              isHMR: false,
              app: _context3.t1,
              store: _context3.t2,
              payload: _context3.t3,
              error: _context3.t4,
              base: '/',
              env: _context3.t5
            };

            if (context.req) app.context.req = context.req;
            if (context.res) app.context.res = context.res;
            app.context.redirect = function (status, path, query) {
              if (!status) return;
              app.context._redirected = true; // Used in middleware
              // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
              var pathType = typeof path === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(path);
              if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
                query = path || {};
                path = status;
                pathType = typeof path === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(path);
                status = 302;
              }
              if (pathType === 'object') {
                path = app.router.resolve(path).href;
              }
              // "/absolute/route", "./relative/route" or "../relative/route"
              if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
                app.context.next({
                  path: path,
                  query: query,
                  status: status
                });
              } else {
                path = formatUrl(path, query);
                if (false) {
                  app.context.next({
                    path: path,
                    status: status
                  });
                }
                if (true) {
                  // https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
                  window.location.replace(path);

                  // Throw a redirect error
                  throw new Error('ERR_REDIRECT');
                }
              }
            };
            if (false) app.context.beforeNuxtRender = function (fn) {
              return context.beforeRenderFns.push(fn);
            };
            if (true) app.context.nuxtState = window.__NUXT__;

          case 14:
            // Dynamic keys
            app.context.next = context.next;
            app.context._redirected = false;
            app.context._errored = false;
            app.context.isHMR = !!context.isHMR;

            if (!context.route) {
              _context3.next = 22;
              break;
            }

            _context3.next = 21;
            return getRouteData(context.route);

          case 21:
            app.context.route = _context3.sent;

          case 22:
            app.context.params = app.context.route.params || {};
            app.context.query = app.context.route.query || {};

            if (!context.from) {
              _context3.next = 28;
              break;
            }

            _context3.next = 27;
            return getRouteData(context.from);

          case 27:
            app.context.from = _context3.sent;

          case 28:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function setContext(_x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a.resolve();
  }
  return promisify(promises[0], appContext).then(function () {
    return middlewareSeries(promises.slice(1), appContext);
  });
}

function promisify(fn, context) {
  var promise = void 0;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a(function (resolve) {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (!promise || !(promise instanceof __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a) && typeof promise.then !== 'function') {
    promise = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a.resolve(promise);
  }
  return promise;
}

// Imported from vue-router
function getLocation(base, mode) {
  var path = window.location.pathname;
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/');
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

function getQueryDiff(toQuery, fromQuery) {
  var diff = {};
  var queries = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_extends___default()({}, toQuery, fromQuery);
  for (var k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name || 'pathMatch'];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */
function formatUrl(url, query) {
  var protocol = void 0;
  var index = url.indexOf('://');
  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.indexOf('//') === 0) {
    url = url.substring(2);
  }

  var parts = url.split('/');
  var result = (protocol ? protocol + '://' : '//') + parts.shift();

  var path = parts.filter(Boolean).join('/');
  var hash = void 0;
  parts = path.split('#');
  if (parts.length === 2) {
    path = parts[0];
    hash = parts[1];
  }

  result += path ? '/' + path : '';

  if (query && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }
  result += hash ? '#' + hash : '';

  return result;
}

/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */
function formatQuery(query) {
  return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(query).sort().map(function (key) {
    var val = query[key];
    if (val == null) {
      return '';
    }
    if (Array.isArray(val)) {
      return val.slice().map(function (val2) {
        return [key, '=', val2].join('');
      }).join('&');
    }
    return key + '=' + val;
  }).filter(Boolean).join('&');
}

/***/ }),

/***/ "Zlwr":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ATE4");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("e6f2c788", content, false, {"sourceMap":false});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":true,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Applications/MAMP/htdocs/OCDE_Paris21/assets\",\"/static\":\"/Applications/MAMP/htdocs/OCDE_Paris21/static\"}}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d5ea9138\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./error.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":true,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Applications/MAMP/htdocs/OCDE_Paris21/assets\",\"/static\":\"/Applications/MAMP/htdocs/OCDE_Paris21/static\"}}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d5ea9138\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./error.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "cqiT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat-bold-webfont.88d70d7.woff";

/***/ }),

/***/ "dL9s":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat-regular-webfont.5352acf.woff";

/***/ }),

/***/ "fUGn":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1idG5fZG93bmxvYWRfZGF0YSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogIDx0aXRsZT5pY29uLWJ0bl9kb3dubG9hZF9kYXRhPC90aXRsZT4KICA8cGF0aCBkPSJNMTcuNjg3NSw1Ljg3NUExLjMwNywxLjMwNywwLDAsMSwxOSw3LjE4NzV2OS42MjVhMS4zMDcsMS4zMDcsMCwwLDEtMS4zMTI1LDEuMzEyNUg2LjMxMjVBMS4zMDcsMS4zMDcsMCwwLDEsNSwxNi44MTI1VjcuMTg3NUExLjMwNywxLjMwNywwLDAsMSw2LjMxMjUsNS44NzVaTTExLjEyNSwxMlY5LjM3NUg2Ljc1VjEyWm0wLDQuMzc1VjEzLjc1SDYuNzV2Mi42MjVaTTE3LjI1LDEyVjkuMzc1SDEyLjg3NVYxMlptMCw0LjM3NVYxMy43NUgxMi44NzV2Mi42MjVaIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "hJhA":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/illu-countries-blur.d8494b5.svg";

/***/ }),

/***/ "hKcL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/illu-countries.d497957.svg";

/***/ }),

/***/ "hPgA":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat-italic-webfont.73b0fcb.woff2";

/***/ }),

/***/ "hnDx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat-italic-webfont.502abf6.woff";

/***/ }),

/***/ "l9HN":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6gZw");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("57d65f84", content, false, {"sourceMap":false});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js??ref--5-1!../../node_modules/postcss-loader/lib/index.js??ref--5-2!../../node_modules/sass-loader/lib/loader.js??ref--5-3!./responsive.scss", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js??ref--5-1!../../node_modules/postcss-loader/lib/index.js??ref--5-2!../../node_modules/sass-loader/lib/loader.js??ref--5-3!./responsive.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "lHfH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/illu-arbor-blur.f7a4af3.svg";

/***/ }),

/***/ "mtxM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRouter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__("/ocq");




__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["default"]);

var _52e1e5e6 = function _52e1e5e6() {
  return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, "np6M")).then(function (m) {
    return m.default || m;
  });
};
var _356c4487 = function _356c4487() {
  return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "zeuv")).then(function (m) {
    return m.default || m;
  });
};
var _a857c400 = function _a857c400() {
  return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "Ymyu")).then(function (m) {
    return m.default || m;
  });
};
var _3c3f33b3 = function _3c3f33b3() {
  return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "/TYz")).then(function (m) {
    return m.default || m;
  });
};

if (true) {
  window.history.scrollRestoration = 'manual';
}
var scrollBehavior = function scrollBehavior(to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  var position = false;

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 };
  } else if (to.matched.some(function (r) {
    return r.components.default.options.scrollToTop;
  })) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 };
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  }

  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve) {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', function () {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        var hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
};

function createRouter() {
  return new __WEBPACK_IMPORTED_MODULE_2_vue_router__["default"]({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior: scrollBehavior,
    routes: [{
      path: "/report",
      component: _52e1e5e6,
      name: "report"
    }, {
      path: "/country/*",
      component: _356c4487,
      name: "country-all"
    }, {
      path: "/indicator/*",
      component: _a857c400,
      name: "indicator-all"
    }, {
      path: "/",
      component: _3c3f33b3,
      name: "index"
    }],

    fallback: false
  });
}

/***/ }),

/***/ "q99a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("/5sW");

// import * as _ from 'lodash'
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].mixin({
  methods: {
    getColor: function getColor(colorRef) {
      return this.$store.state.colorPalettes[this.$store.state.colorPaletteIndex].colors[colorRef];
    }
  }
});

/***/ }),

/***/ "qcny":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_define_property__ = __webpack_require__("C4MV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__ = __webpack_require__("woOf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_es6_promise_auto__ = __webpack_require__("MU8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_es6_promise_auto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_es6_promise_auto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_meta__ = __webpack_require__("p3jY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_meta___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vue_meta__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_js__ = __webpack_require__("mtxM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_no_ssr_js__ = __webpack_require__("0F0d");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_nuxt_child_js__ = __webpack_require__("HBB+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_nuxt_link_js__ = __webpack_require__("WRRc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layouts_error_vue__ = __webpack_require__("To1F");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_nuxt_js__ = __webpack_require__("Hot+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__App_js__ = __webpack_require__("yTq1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils__ = __webpack_require__("YLfZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__store_js__ = __webpack_require__("J2Ti");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_nuxt_plugin_velocity_724d8253__ = __webpack_require__("LI9e");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_nuxt_plugin_mixinCommonMethods_51a9ce3b__ = __webpack_require__("q99a");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_13__layouts_error_vue__["a"]; });







var createApp = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(ssrContext) {
    var _this = this;

    var router, store, app, next, route, path, inject;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            router = Object(__WEBPACK_IMPORTED_MODULE_9__router_js__["a" /* createRouter */])(ssrContext);
            store = Object(__WEBPACK_IMPORTED_MODULE_17__store_js__["a" /* createStore */])(ssrContext);
            // Add this.$router into store actions/mutations

            store.$router = router;

            // Create Root instance
            // here we inject the router and store to all child components,
            // making them available everywhere as `this.$router` and `this.$store`.
            app = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({
              router: router,
              store: store,
              nuxt: {
                defaultTransition: defaultTransition,
                transitions: [defaultTransition],
                setTransitions: function setTransitions(transitions) {
                  if (!Array.isArray(transitions)) {
                    transitions = [transitions];
                  }
                  transitions = transitions.map(function (transition) {
                    if (!transition) {
                      transition = defaultTransition;
                    } else if (typeof transition === 'string') {
                      transition = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()({}, defaultTransition, { name: transition });
                    } else {
                      transition = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()({}, defaultTransition, transition);
                    }
                    return transition;
                  });
                  this.$options.nuxt.transitions = transitions;
                  return transitions;
                },

                err: null,
                dateErr: null,
                error: function error(err) {
                  err = err || null;
                  app.context._errored = !!err;
                  if (typeof err === 'string') err = { statusCode: 500, message: err };
                  var nuxt = this.nuxt || this.$options.nuxt;
                  nuxt.dateErr = Date.now();
                  nuxt.err = err;
                  // Used in lib/server.js
                  if (ssrContext) ssrContext.nuxt.error = err;
                  return err;
                }
              }
            }, __WEBPACK_IMPORTED_MODULE_15__App_js__["a" /* default */]);

            // Make app available into store via this.app

            store.app = app;

            next = ssrContext ? ssrContext.next : function (location) {
              return app.router.push(location);
            };
            // Resolve route

            route = void 0;

            if (ssrContext) {
              route = router.resolve(ssrContext.url).route;
            } else {
              path = Object(__WEBPACK_IMPORTED_MODULE_16__utils__["d" /* getLocation */])(router.options.base);

              route = router.resolve(path).route;
            }

            // Set context to app.context
            _context2.next = 10;
            return Object(__WEBPACK_IMPORTED_MODULE_16__utils__["m" /* setContext */])(app, {
              route: route,
              next: next,
              error: app.nuxt.error.bind(app),
              store: store,
              payload: ssrContext ? ssrContext.payload : undefined,
              req: ssrContext ? ssrContext.req : undefined,
              res: ssrContext ? ssrContext.res : undefined,
              beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined
            });

          case 10:
            inject = function inject(key, value) {
              if (!key) throw new Error('inject(key, value) has no key provided');
              if (!value) throw new Error('inject(key, value) has no value provided');
              key = '$' + key;
              // Add into app
              app[key] = value;

              // Add into store
              store[key] = app[key];

              // Check if plugin not already installed
              var installKey = '__nuxt_' + key + '_installed__';
              if (__WEBPACK_IMPORTED_MODULE_7_vue__["default"][installKey]) return;
              __WEBPACK_IMPORTED_MODULE_7_vue__["default"][installKey] = true;
              // Call Vue.use() to install the plugin into vm
              __WEBPACK_IMPORTED_MODULE_7_vue__["default"].use(function () {
                if (!__WEBPACK_IMPORTED_MODULE_7_vue__["default"].prototype.hasOwnProperty(key)) {
                  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_define_property___default()(__WEBPACK_IMPORTED_MODULE_7_vue__["default"].prototype, key, {
                    get: function get() {
                      return this.$root.$options[key];
                    }
                  });
                }
              });
            };

            if (true) {
              // Replace store state before plugins execution
              if (window.__NUXT__ && window.__NUXT__.state) {
                store.replaceState(window.__NUXT__.state);
              }
            }

            // Plugin execution

            if (!(typeof __WEBPACK_IMPORTED_MODULE_19_nuxt_plugin_mixinCommonMethods_51a9ce3b__["default"] === 'function')) {
              _context2.next = 15;
              break;
            }

            _context2.next = 15;
            return Object(__WEBPACK_IMPORTED_MODULE_19_nuxt_plugin_mixinCommonMethods_51a9ce3b__["default"])(app.context, inject);

          case 15:
            if (false) {
              _context2.next = 19;
              break;
            }

            if (!(typeof __WEBPACK_IMPORTED_MODULE_18_nuxt_plugin_velocity_724d8253__["a" /* default */] === 'function')) {
              _context2.next = 19;
              break;
            }

            _context2.next = 19;
            return Object(__WEBPACK_IMPORTED_MODULE_18_nuxt_plugin_velocity_724d8253__["a" /* default */])(app.context, inject);

          case 19:
            if (true) {
              _context2.next = 22;
              break;
            }

            _context2.next = 22;
            return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
              router.push(ssrContext.url, resolve, function () {
                // navigated to a different route in router guard
                var unregister = router.afterEach(function () {
                  var _ref2 = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(to, from, next) {
                    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            ssrContext.url = to.fullPath;
                            _context.next = 3;
                            return Object(__WEBPACK_IMPORTED_MODULE_16__utils__["h" /* getRouteData */])(to);

                          case 3:
                            app.context.route = _context.sent;

                            app.context.params = to.params || {};
                            app.context.query = to.query || {};
                            unregister();
                            resolve();

                          case 8:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this);
                  }));

                  return function (_x2, _x3, _x4) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              });
            });

          case 22:
            return _context2.abrupt('return', {
              app: app,
              router: router,
              store: store
            });

          case 23:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function createApp(_x) {
    return _ref.apply(this, arguments);
  };
}();














/* Plugins */
 // Source: ../plugins/velocity (ssr: false)
 // Source: ../plugins/mixinCommonMethods.js


// Component: <no-ssr>
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_10__components_no_ssr_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_10__components_no_ssr_js__["a" /* default */]);

// Component: <nuxt-child>
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_11__components_nuxt_child_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_11__components_nuxt_child_js__["a" /* default */]);

// Component: <nuxt-link>
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_12__components_nuxt_link_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_12__components_nuxt_link_js__["a" /* default */]);

// Component: <nuxt>`
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_14__components_nuxt_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_14__components_nuxt_js__["a" /* default */]);

// vue-meta configuration
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_8_vue_meta___default.a, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-n-head', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-n-head-ssr', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

var defaultTransition = { "name": "page", "mode": "out-in", "appear": true, "appearClass": "appear", "appearActiveClass": "appear-active", "appearToClass": "appear-to" };



/***/ }),

/***/ "tRjS":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/illu-countries-mob.31630b3.svg";

/***/ }),

/***/ "unZF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ "vdRI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("NYxO");


var createStore = function createStore() {
  return new __WEBPACK_IMPORTED_MODULE_0_vuex__["default"].Store({
    state: {
      firstPage: true,
      locales: ['en', 'fr'],
      colorPaletteIndex: 0,
      colorPalettes: [{
        label: 'dark',
        colors: {
          backgroundColor: '2b3434',
          headColor: 'e7e7e0',
          domainLabelsColor: 'fffcf7',
          domainLabelsOpacity: 0.5,
          cadranLabelsColor: 'b7b5b1',
          cadranLabelsOpacity: 0.2,
          arccadranColor: 'FFFFFF',
          arccadranOpacity: 0.04,
          backgroundcomposantBox: '283434',
          colorTextComposantBox: 'FFF',
          opacityTextComposantBox: 0.6,
          backgroundFiltersBox: '252b2b',
          filterstitleColor: 'e7e7e0'
        }
      }]
    },
    actions: {},
    mutations: {
      SET_FIRST_PAGE: function SET_FIRST_PAGE(state, firstPage) {
        state.firstPage = firstPage || false;
      }
    },
    getters: {
      firstPage: function firstPage(state) {
        return state.firstPage;
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createStore);

/***/ }),

/***/ "wbPw":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("kxFB");
exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:montserratbold;src:url(" + escape(__webpack_require__("KoCO")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("cqiT")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratitalic;src:url(" + escape(__webpack_require__("hPgA")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("hnDx")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratregular;src:url(" + escape(__webpack_require__("UBI+")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("dL9s")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:roboto_condensedbold;src:url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff\");font-weight:400;font-style:normal}.page-enter-active,.page-leave-active{-webkit-transition:opacity .5s;transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}*{-webkit-box-sizing:border-box;box-sizing:border-box}body,html{width:100%;height:100%;background:#dedede}body{background:#ededed;background:-webkit-gradient(linear,left top,left bottom,from(#ededed),to(#dedede));background:linear-gradient(180deg,#ededed 0,#dedede);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#ededed\",endColorstr=\"#dedede\",GradientType=0);color:#008dd2;margin:0;font-family:montserratregular}.bolder{font-family:montserratbold}a{color:#0043cc}#__nuxt,#__nuxt #__layout,#__nuxt #__layout #app{width:100%;height:100%}.ismobile{display:none}.page{width:100%;height:100%;position:relative;text-align:center}.page .page_main{display:inline-block;vertical-align:top;width:100%;max-width:1000px;padding-top:50px}.page .page_main .main_head .head_backbt{position:absolute;left:40px;top:10px;font-size:12px;font-family:montserratitalic;text-decoration:none;color:#fff}.page .page_main .main_head .head_backbt:after{content:\"\";position:absolute;right:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);margin-right:0;width:30px;height:30px;background:url(" + escape(__webpack_require__("CZJM")) + ") no-repeat 50%}.page .page_main .main_head .head_link,.page .page_main .main_head .head_link2{position:absolute;right:56px;top:10px;color:#fff;cursor:pointer}.page .page_main .main_head .head_link2:after,.page .page_main .main_head .head_link:after{content:\"\";position:absolute;left:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);margin-left:6px;width:32px;height:24px;border-radius:10px;background:url(" + escape(__webpack_require__("fUGn")) + ") no-repeat 50% #ea6550}.page .page_main .main_head .head_link2:hover:after,.page .page_main .main_head .head_link:hover:after{background-color:#2f2f2f}.page .page_main .main_head .head_link2{top:38px}.appmodal_cache{position:fixed;left:0;top:0;width:100%;height:100%;z-index:100;background:rgba(20,158,157,.7);display:none}.appmodal_cache.displayed{display:block}.appmodal{position:fixed;left:50%;top:50%;width:90%;max-width:970px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:#fff;z-index:200}.appmodal .appmodal_head{height:60px;width:100%;background:#2f2f2f;color:#fff;line-height:60px;font-size:16px;font-family:montserratbold;text-align:left;padding:0 20px;position:relative}.appmodal .appmodal_head .appmodal_closebt{position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:24px;color:#fff;cursor:pointer;background:url(" + escape(__webpack_require__("Dhuc")) + ") no-repeat 0 0;background-size:100% 100%;width:60px;height:60px}.appmodal .appmodal_content{width:100%}.appmodal .appmodal_content .selector{position:relative!important;left:0!important}.selector{display:inline-block;vertical-align:top;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.selector,.selector:before{position:absolute;-webkit-transition-property:all;transition-property:all}.selector:before{content:\"\";z-index:1;left:50%;top:408px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:0;border-radius:10000px;height:0;background:#fff;-webkit-transition-duration:0s;transition-duration:0s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.selector .selector_homecontent{display:none}.selector .selector_homecontent.displayed{display:inline-block}.selector[data-state=home]{-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.selector[data-state=home],.selector[data-state=shrinked]{width:318px;height:526px;z-index:5;color:#fff;overflow:hidden}.selector[data-state=home][data-selector=geography],.selector[data-state=shrinked][data-selector=geography]{background:#159e9d;left:10px;top:0}.selector[data-state=home][data-selector=geography] .homecontent_picto,.selector[data-state=shrinked][data-selector=geography] .homecontent_picto{background:url(" + escape(__webpack_require__("hKcL")) + ") no-repeat 0 0;background-size:100% 100%;width:190px;height:190px}.selector[data-state=home][data-selector=indicator],.selector[data-state=shrinked][data-selector=indicator]{background:#ea6550;left:340px;top:0}.selector[data-state=home][data-selector=indicator] .homecontent_picto,.selector[data-state=shrinked][data-selector=indicator] .homecontent_picto{background:url(" + escape(__webpack_require__("2zKC")) + ") no-repeat 0 0;background-size:100% 100%;width:190px;height:190px}.selector[data-state=home][data-selector=network],.selector[data-state=shrinked][data-selector=network]{background:#ec9a3a;left:670px;top:0}.selector[data-state=home][data-selector=network] .homecontent_picto,.selector[data-state=shrinked][data-selector=network] .homecontent_picto{background:url(" + escape(__webpack_require__("024/")) + ") no-repeat 0 0;background-size:100% 100%;width:190px;height:190px}.selector[data-state=home]:hover,.selector[data-state=shrinked]:hover{z-index:6}.selector[data-state=home]:hover[data-state=home],.selector[data-state=shrinked]:hover[data-state=home]{height:556px;top:-15px}.selector[data-state=home]:hover[data-state=home]:before,.selector[data-state=shrinked]:hover[data-state=home]:before{width:1200px;height:1200px;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.selector[data-state=home]:hover[data-selector=geography],.selector[data-state=shrinked]:hover[data-selector=geography]{color:#159e9d}.selector[data-state=home]:hover[data-selector=geography] .selector_homecontent .homecontent_expandbt,.selector[data-state=shrinked]:hover[data-selector=geography] .selector_homecontent .homecontent_expandbt{color:#159e9d;border-color:#159e9d}.selector[data-state=home]:hover[data-selector=geography][data-state=shrinked],.selector[data-state=shrinked]:hover[data-selector=geography][data-state=shrinked]{background:#159e9d!important;color:#fff!important}.selector[data-state=home]:hover[data-selector=geography][data-state=shrinked] .homecontent_expandbt,.selector[data-state=shrinked]:hover[data-selector=geography][data-state=shrinked] .homecontent_expandbt{color:#fff!important;border-color:#fff!important}.selector[data-state=home]:hover[data-selector=geography][data-state=shrinked] .homecontent_expandbt:hover,.selector[data-state=shrinked]:hover[data-selector=geography][data-state=shrinked] .homecontent_expandbt:hover{border-color:#2f2f2f!important}.selector[data-state=home]:hover[data-selector=indicator],.selector[data-state=shrinked]:hover[data-selector=indicator]{color:#ea6550}.selector[data-state=home]:hover[data-selector=indicator] .selector_homecontent .homecontent_expandbt,.selector[data-state=shrinked]:hover[data-selector=indicator] .selector_homecontent .homecontent_expandbt{color:#ea6550;border-color:#ea6550}.selector[data-state=home]:hover[data-selector=indicator][data-state=shrinked],.selector[data-state=shrinked]:hover[data-selector=indicator][data-state=shrinked]{background:#ea6550!important;color:#fff!important}.selector[data-state=home]:hover[data-selector=indicator][data-state=shrinked] .homecontent_expandbt,.selector[data-state=shrinked]:hover[data-selector=indicator][data-state=shrinked] .homecontent_expandbt{color:#fff!important;border-color:#fff!important}.selector[data-state=home]:hover[data-selector=indicator][data-state=shrinked] .homecontent_expandbt:hover,.selector[data-state=shrinked]:hover[data-selector=indicator][data-state=shrinked] .homecontent_expandbt:hover{border-color:#2f2f2f!important}.selector[data-state=home]:hover[data-selector=network],.selector[data-state=shrinked]:hover[data-selector=network]{color:#ec9a3a}.selector[data-state=home]:hover[data-selector=network] .selector_homecontent .homecontent_expandbt,.selector[data-state=shrinked]:hover[data-selector=network] .selector_homecontent .homecontent_expandbt{color:#ec9a3a;border-color:#ec9a3a}.selector[data-state=home]:hover[data-selector=network][data-state=shrinked],.selector[data-state=shrinked]:hover[data-selector=network][data-state=shrinked]{background:#ec9a3a!important;color:#fff!important}.selector[data-state=home]:hover[data-selector=network][data-state=shrinked] .homecontent_expandbt,.selector[data-state=shrinked]:hover[data-selector=network][data-state=shrinked] .homecontent_expandbt{color:#fff!important;border-color:#fff!important}.selector[data-state=home]:hover[data-selector=network][data-state=shrinked] .homecontent_expandbt:hover,.selector[data-state=shrinked]:hover[data-selector=network][data-state=shrinked] .homecontent_expandbt:hover{border-color:#2f2f2f!important}.selector[data-state=home]:hover .disclaimer_text a,.selector[data-state=shrinked]:hover .disclaimer_text a{color:#159e9d!important}.selector[data-state=home] .selector_homecontent,.selector[data-state=shrinked] .selector_homecontent{position:relative;width:100%;height:100%;z-index:5;display:none}.selector[data-state=home] .selector_homecontent.displayed,.selector[data-state=shrinked] .selector_homecontent.displayed{display:block}.selector[data-state=home] .selector_homecontent .homecontent_picto,.selector[data-state=shrinked] .selector_homecontent .homecontent_picto{position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);top:30px}.selector[data-state=home] .selector_homecontent .homecontent_title,.selector[data-state=shrinked] .selector_homecontent .homecontent_title{font-size:22px;line-height:26px;position:absolute;top:45%;left:50%;width:90%;-webkit-transform:translate(-50%);transform:translate(-50%)}.selector[data-state=home] .selector_homecontent .homecontent_expandbt,.selector[data-state=shrinked] .selector_homecontent .homecontent_expandbt{width:140px;height:40px;font-size:16px;line-height:30px;border:2px solid #fff;border-radius:20px;background:transparent;color:#fff;position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);top:73%;font-family:roboto_condensedbold;text-decoration:none}.selector[data-state=home] .selector_homecontent .homecontent_expandbt:hover,.selector[data-state=shrinked] .selector_homecontent .homecontent_expandbt:hover{background:#2f2f2f!important;border-color:#2f2f2f!important;color:#fff!important}.selector[data-state=home] .selector_homecontent .homecontent_expandbt.ismobile,.selector[data-state=shrinked] .selector_homecontent .homecontent_expandbt.ismobile{line-height:36px}.selector[data-state=home] .selector_homecontent .homecontent_disclaimer,.selector[data-state=shrinked] .selector_homecontent .homecontent_disclaimer{position:absolute;left:50%;top:83%;-webkit-transform:translate(-50%);transform:translate(-50%);width:90%}.selector[data-state=home] .selector_homecontent .homecontent_disclaimer .disclaimer_title,.selector[data-state=shrinked] .selector_homecontent .homecontent_disclaimer .disclaimer_title{font-family:montserratbold}.selector[data-state=home] .selector_homecontent .homecontent_disclaimer .disclaimer_text,.selector[data-state=shrinked] .selector_homecontent .homecontent_disclaimer .disclaimer_text{font-family:montserratitalic;font-size:13px}.selector[data-state=home] .selector_homecontent .homecontent_disclaimer .disclaimer_text a,.selector[data-state=shrinked] .selector_homecontent .homecontent_disclaimer .disclaimer_text a{color:#fff}.selector[data-state=shrinked]{width:481px;height:240px;color:#fff}.selector[data-state=shrinked][data-selector=geography]{left:10px;top:537px}.selector[data-state=shrinked][data-selector=geography] .homecontent_picto{background:url(" + escape(__webpack_require__("hJhA")) + ") no-repeat 0 0;background-size:100% 100%;width:481px;height:238px;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.selector[data-state=shrinked][data-selector=indicator]{top:537px}.selector[data-state=shrinked][data-selector=indicator] .homecontent_picto{background:url(" + escape(__webpack_require__("406k")) + ") no-repeat 0 0;background-size:100% 100%;width:481px;height:238px;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.selector[data-state=shrinked][data-selector=network]{left:500px;top:537px}.selector[data-state=shrinked][data-selector=network] .homecontent_picto{background:url(" + escape(__webpack_require__("lHfH")) + ") no-repeat 0 0;background-size:100% 100%;width:481px;height:238px;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.selector[data-state=shrinked] .selector_homecontent{display:none}.selector[data-state=shrinked] .selector_homecontent.displayed{display:inline-block}.selector[data-state=shrinked] .selector_homecontent .homecontent_title{position:absolute;left:50%;top:40%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.selector[data-state=shrinked] .selector_homecontent .homecontent_expandbt{top:60%}.selector[data-state=expanded]{width:970px;max-height:527px;left:10px;top:0;background:#fff;overflow:hidden}.selector[data-state=expanded][data-modaled=true]{max-height:unset}.selector[data-state=expanded][data-selector=geography]{color:#159e9d}.selector[data-state=expanded][data-selector=geography] .expandedcontent_title{border-color:#159e9d}.selector[data-state=expanded][data-selector=indicator]{color:#ea6550}.selector[data-state=expanded][data-selector=indicator] .expandedcontent_title{border-color:#ea6550}.selector[data-state=expanded][data-selector=network]{color:#ec9a3a}.selector[data-state=expanded][data-selector=network] .expandedcontent_title{border-color:#ec9a3a}.selector[data-state=expanded] .selector_expandedcontent{padding:20px;background:#fff;position:relative}.selector[data-state=expanded] .selector_expandedcontent .expandedcontent_title{font-size:22px;line-height:26px;font-weight:700;text-align:left;border-bottom:4px solid;padding-bottom:6px;font-family:montserratbold;position:relative}.selector[data-state=expanded] .selector_expandedcontent .expandedcontent_title .smaller{font-size:18px;font-family:montserratregular}.selector[data-state=expanded] .selector_expandedcontent .expandedcontent_title .title_disclaimer{position:absolute;right:0;bottom:3px;font-size:12px;color:#8c8c8c;font-family:montserratitalic}.highcharts-tooltip{z-index:1000;background:#fff;border-radius:10px;width:200px}.highcharts-tooltip path{display:none}.highcharts-tooltip span{background:#fff;display:block;padding:4px 10px;border-radius:0;-webkit-box-shadow:0 0 60px 0 rgba(0,0,0,.55);box-shadow:0 0 60px 0 rgba(0,0,0,.55)}", ""]);

// exports


/***/ }),

/***/ "yTq1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_scss_main_scss__ = __webpack_require__("SyWC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_scss_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_scss_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_scss_responsive_scss__ = __webpack_require__("l9HN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_scss_responsive_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_scss_responsive_scss__);







var layouts = {

  "_default": function _default() {
    return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, "Ma2J")).then(function (m) {
      return m.default || m;
    });
  }

};

var resolvedLayouts = {};

/* harmony default export */ __webpack_exports__["a"] = ({
  head: { "meta": [{ "charset": "utf-8", "title": "Test" }, { "name": "viewport", "content": "width=device-width, initial-scale=1" }], "link": [{ "rel": "stylesheet", "href": 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' }], "style": [], "script": [] },
  render: function render(h, props) {

    var layoutEl = h(this.layout || 'nuxt');
    var templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);

    var transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [templateEl]);

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [transitionEl]);
  },

  data: function data() {
    return {
      layout: null,
      layoutName: ''
    };
  },
  beforeCreate: function beforeCreate() {
    __WEBPACK_IMPORTED_MODULE_1_vue__["default"].util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created: function created() {
    // Add this.$nuxt in child instances
    __WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.$nuxt = this;
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this;
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error;
  },


  methods: {
    setLayout: function setLayout(layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default';
      this.layoutName = layout;
      var _layout = '_' + layout;
      this.layout = resolvedLayouts[_layout];
      return this.layout;
    },
    loadLayout: function loadLayout(layout) {
      var _this = this;

      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default';
      var _layout = '_' + layout;
      if (resolvedLayouts[_layout]) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(resolvedLayouts[_layout]);
      }
      return layouts[_layout]().then(function (Component) {
        resolvedLayouts[_layout] = Component;
        delete layouts[_layout];
        return resolvedLayouts[_layout];
      }).catch(function (e) {
        if (_this.$nuxt) {
          return _this.$nuxt.error({ statusCode: 500, message: e.message });
        }
      });
    }
  },
  components: {}
});

/***/ })

},["T23V"]);