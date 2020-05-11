webpackJsonp([4],{

/***/ "/9xw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "paris21_modalwrapper",
      class: _vm.displayed ? "displayed" : ""
    },
    [
      _c("div", {
        staticClass: "paris21_modalbg",
        on: {
          click: function($event) {
            _vm.closeModal()
          }
        }
      }),
      _vm.type == "indicators"
        ? _c("div", { staticClass: "paris21_modal" }, [
            _c("div", { staticClass: "modal_title" }, [
              _vm._v("\n      Brief note on the "),
              _c("span", { staticClass: "bolder" }, [
                _vm._v("classification of indicators")
              ]),
              _c("a", {
                staticClass: "modal_closebt",
                on: {
                  click: function($event) {
                    _vm.closeModal()
                  }
                }
              })
            ]),
            _vm._m(0)
          ])
        : _vm._e(),
      _vm.type == "privacy"
        ? _c("div", { staticClass: "paris21_modal" }, [
            _c("div", { staticClass: "modal_title" }, [
              _vm._v("\n      Privacy Statement"),
              _c("a", {
                staticClass: "modal_closebt",
                on: {
                  click: function($event) {
                    _vm.closeModal()
                  }
                }
              })
            ]),
            _vm._m(1)
          ])
        : _vm._e(),
      _vm.type == "download"
        ? _c("div", { staticClass: "paris21_modal" }, [
            _c("div", { staticClass: "modal_title" }, [
              _c("span", { staticClass: "bolder" }, [_vm._v("Download")]),
              _c("a", {
                staticClass: "modal_closebt",
                on: {
                  click: function($event) {
                    _vm.closeModal()
                  }
                }
              })
            ]),
            _c(
              "div",
              {
                staticClass: "modal_content",
                attrs: { "data-type": "download" }
              },
              [
                _c("div", { staticClass: "download_item" }, [
                  _c("div", { staticClass: "item_title" }, [_vm._v("DATASET")]),
                  _c("div", { staticClass: "item_text" }, [
                    _vm._v(
                      "\n          Here you can dowload the full dataset for all indicators included in the Statistical Capacity Monitor.\n        "
                    )
                  ]),
                  _c(
                    "a",
                    {
                      staticClass: "download_bt",
                      attrs: { href: _vm.datafileURL, target: "_blank" }
                    },
                    [_vm._v("Download (.csv)")]
                  )
                ]),
                _vm._m(2),
                _vm._m(3)
              ]
            )
          ])
        : _vm._e(),
      _vm.type == "moreinfo"
        ? _c("div", { staticClass: "paris21_modal" }, [
            _c("div", { staticClass: "modal_title" }, [
              _c("span", { staticClass: "bolder" }, [
                _vm._v(_vm._s(_vm.indicatorLabel))
              ]),
              _c("a", {
                staticClass: "modal_closebt",
                on: {
                  click: function($event) {
                    _vm.closeModal()
                  }
                }
              })
            ]),
            _c(
              "div",
              {
                staticClass: "modal_content",
                attrs: { "data-type": "moreinfo" }
              },
              [
                _vm.methodoInfos.interpretation !== undefined &&
                _vm.methodoInfos.interpretation !== ""
                  ? _c("div", { staticClass: "content_block" }, [
                      _c("div", { staticClass: "block_title" }, [
                        _vm._v("Interpretation")
                      ]),
                      _c("div", {
                        staticClass: "block_text",
                        domProps: {
                          innerHTML: _vm._s(_vm.methodoInfos.interpretation)
                        }
                      })
                    ])
                  : _vm._e(),
                _vm.methodoInfos.collection !== undefined &&
                _vm.methodoInfos.collection !== ""
                  ? _c("div", { staticClass: "content_block" }, [
                      _c("div", { staticClass: "block_title" }, [
                        _vm._v("Collection method")
                      ]),
                      _c("div", {
                        staticClass: "block_text",
                        domProps: {
                          innerHTML: _vm._s(_vm.methodoInfos.collection)
                        }
                      })
                    ])
                  : _vm._e(),
                _vm.methodoInfos.calculation !== undefined &&
                _vm.methodoInfos.calculation !== ""
                  ? _c("div", { staticClass: "content_block" }, [
                      _c("div", { staticClass: "block_title" }, [
                        _vm._v("Calculation method")
                      ]),
                      _c("div", {
                        staticClass: "block_text",
                        domProps: {
                          innerHTML: _vm._s(_vm.methodoInfos.calculation)
                        }
                      })
                    ])
                  : _vm._e(),
                _vm.methodoInfos.aggregation !== undefined &&
                _vm.methodoInfos.aggregation !== ""
                  ? _c("div", { staticClass: "content_block" }, [
                      _c("div", { staticClass: "block_title" }, [
                        _vm._v("Aggregation rule")
                      ]),
                      _c("div", {
                        staticClass: "block_text",
                        domProps: {
                          innerHTML: _vm._s(_vm.methodoInfos.aggregation)
                        }
                      })
                    ])
                  : _vm._e(),
                _vm.methodoInfos.data !== undefined &&
                _vm.methodoInfos.data !== ""
                  ? _c("div", { staticClass: "content_block" }, [
                      _c("div", { staticClass: "block_title" }, [
                        _vm._v("Limitations")
                      ]),
                      _c("div", {
                        staticClass: "block_text",
                        domProps: { innerHTML: _vm._s(_vm.methodoInfos.data) }
                      })
                    ])
                  : _vm._e(),
                _vm.methodoInfos.references !== undefined &&
                _vm.methodoInfos.references != ""
                  ? _c("div", { staticClass: "content_block" }, [
                      _c("div", { staticClass: "block_title" }, [
                        _vm._v("References")
                      ]),
                      _c("div", {
                        staticClass: "block_text",
                        domProps: {
                          innerHTML: _vm._s(_vm.methodoInfos.references)
                        }
                      })
                    ])
                  : _vm._e()
              ]
            )
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal_content" }, [
      _c(
        "p",
        { staticClass: "bolder", staticStyle: { "margin-top": "10px" } },
        [
          _vm._v(
            "\n        In order to present these indicators in a user-friendly format for exploration and analysis, it was necessary to group them with an intuitive and straightforward taxonomy.\n      "
          )
        ]
      ),
      _c("p", [
        _vm._v(
          "\n        We proceeded from several existing ideas in the statistical literature. The Generic Activity Model for Statistical Organizations ("
        ),
        _c(
          "a",
          {
            attrs: {
              href: "https://statswiki.unece.org/display/GAMSO",
              target: "_blank"
            }
          },
          [_vm._v("GAMSO")]
        ),
        _vm._v(
          ") provides a framework to conceptualise processes and activities in official statistical production and management—from strategy/leadership to capability development to corporate support to overall production.  Within the latter production theme is another international standard, the Generic Statistical Business Process Model ("
        ),
        _c(
          "a",
          {
            attrs: {
              href: "https://statswiki.unece.org/display/GSBPM",
              target: "_blank"
            }
          },
          [_vm._v("GSBPM")]
        ),
        _vm._v(
          "), which highlights the business processes of statistical production—from needs assessment/planning to data collection/cleaning to dissemination and evaluation. Both of these master tools succinctly summarize statistical production processes, but they do not always map onto the outcome indicators by which we are monitoring statistical capacity. We moved to a third option.\n      "
        )
      ]),
      _c("p", [
        _vm._v(
          "\n        Considering the breadth, depth, and relation of the indicators in the Statistical Capacity Monitor, we arrived at the following five families by which to classify the indicators:\n        "
        ),
        _c("ul", [
          _c("li", [
            _c("b", [_vm._v("Planning:")]),
            _vm._v(
              " the process of making arrangements for statistical production\n          "
            )
          ]),
          _c("li", [
            _c("b", [_vm._v("Production:")]),
            _vm._v(" the process of constructing statistics\n          ")
          ]),
          _c("li", [
            _c("b", [_vm._v("Dissemination:")]),
            _vm._v(
              " the action of spreading statistical information widely\n          "
            )
          ]),
          _c("li", [
            _c("b", [_vm._v("Use:")]),
            _vm._v(
              " statistical literacy, use and esteem of statistics\n          "
            )
          ]),
          _c("li", [
            _c("b", [_vm._v("Investment:")]),
            _vm._v(
              " devotion of resources to the statistical system\n          "
            )
          ])
        ])
      ]),
      _c("p", [
        _vm._v(
          "\n        This taxonomy is similar to what is known in statistical circles as the Statistics Value Cycle, or the "
        ),
        _c(
          "a",
          {
            attrs: {
              href:
                "https://www.oecd-ilibrary.org/sites/dcr-2017-en/1/2/2/index.html?itemId=/content/publication/dcr-2017-en&_csp_=fbe5c4b8752a4197425bcc9e4401a633&itemIGO=oecd&itemContentType=book#ID56f1e126-b7a1-4716-9c39-7b10e9ec9293",
              target: "_blank"
            }
          },
          [_vm._v("virtuous data cycle")]
        ),
        _vm._v(
          ". (OECD Development Co-operation Report 2017: Data for Development) \n      "
        )
      ]),
      _c("div", { staticClass: "content_image" }),
      _c("p", [
        _vm._v(
          "\n        In the 2017 OECD report, this conceptual framework highlights the virtuous cycle of statistical capacity development: an improvement in one aspect of the system complements its other parts. In our revised framework, we have made two revisions: (i) we have separated planning and production into two distinct categories; and (ii) we have combined literacy and use/value into one category: use. From the indicators we have gathered in this platform, it seems that while the former can be measured apart, the latter must often be measured together. As we monitor national statistical capacity, the idea of a virtuous cycle remains.\n      "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal_content" }, [
      _c("p", { staticStyle: { "margin-top": "10px" } }, [
        _vm._v(
          "\n        PARIS21 is committed to protecting the privacy and accuracy of confidential information to the extent possible, subject to provisions of state and federal law. \n      "
        )
      ]),
      _c("p", [
        _c("span", { staticClass: "bolder" }, [
          _vm._v("Concerned about privacy? We are too.")
        ]),
        _c("br"),
        _vm._v(
          "\n        Although there are many applications and websites that collect information and other statistics about their users,  we do not collect any personal information about you when you visit this web site. \n      "
        )
      ]),
      _c("p", [
        _c("span", { staticClass: "bolder" }, [
          _vm._v("What happens if the privacy statement changes?")
        ]),
        _c("br"),
        _vm._v(
          "\n        This Privacy Statement was last revised on 20.02.2020. We may change this Privacy Statement at any time and for any reason. We encourage you to review this Privacy Statement each time you visit the web site."
        ),
        _c("br"),
        _vm._v(
          "\n        If we decide to make a significant change to our Privacy Statement, we will post a notice on the homepage of our web site for a period of time after the change is made. \n      "
        )
      ]),
      _c("p", [
        _c("span", { staticClass: "bolder" }, [
          _vm._v("What about privacy on other web sites?")
        ]),
        _c("br"),
        _vm._v(
          "\n        This web site may contain links to other web sites. Some of those web sites may be operated by by third parties. We provide the links for your convenience, but we do not review, control, or monitor the privacy practices of web sites operated by others. "
        ),
        _c("br"),
        _vm._v(
          "\n        We are not responsible for the performance of web sites operated by third parties or for your business dealings with them. Therefore, whenever you leave this web site we recommend that you review each web site's privacy practices and make your own conclusions regarding the adequacy of these practices.\n      "
        )
      ]),
      _c("p", [
        _c("span", { staticClass: "bolder" }, [_vm._v("How to contact us")]),
        _c("br"),
        _vm._v(
          "\n        If you have questions or comments about this Privacy Statement, "
        ),
        _c(
          "a",
          {
            attrs: {
              href: "https://paris21.org/about-paris-21/contact",
              target: "_blank"
            }
          },
          [_vm._v("contact us")]
        ),
        _vm._v(".\n      ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "download_item" }, [
      _c("div", { staticClass: "item_title" }, [_vm._v("CODEBOOK")]),
      _c("div", { staticClass: "item_text" }, [
        _vm._v(
          "\n          Here you can download the codebook for all indicators included in the Statistical Capacity Monitor.\n        "
        )
      ]),
      _c(
        "a",
        {
          staticClass: "download_bt",
          attrs: { href: "/data/codebook.xlsx", target: "_blank" }
        },
        [_vm._v("Download (.xls)")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "download_item" }, [
      _c("div", { staticClass: "item_title" }, [_vm._v("METHODOLOGY")]),
      _c("div", { staticClass: "item_text" }, [
        _vm._v(
          "\n          Here you can download the extended methodology for PARIS21 indicators.\n        "
        )
      ]),
      _c(
        "a",
        {
          staticClass: "download_bt",
          attrs: {
            href: "/data/PARIS21_Indicators_Methodological_Notes.xlsx",
            target: "_blank"
          }
        },
        [_vm._v("Download (.xls)")]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7675ee04", esExports)
  }
}

/***/ }),

/***/ "/Wdd":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("kxFB");
exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:montserratbold;src:url(" + escape(__webpack_require__("KoCO")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("cqiT")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratitalic;src:url(" + escape(__webpack_require__("hPgA")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("hnDx")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratregular;src:url(" + escape(__webpack_require__("UBI+")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("dL9s")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:roboto_condensedbold;src:url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff\");font-weight:400;font-style:normal}.paris21_footer[data-v-fd6e20cc]{position:relative;left:0;width:100%;bottom:0;height:70px;background:#fff;z-index:10;text-align:center}.paris21_footer.fixed[data-v-fd6e20cc]{position:fixed}.paris21_footer .footer_content[data-v-fd6e20cc]{position:relative;text-align:center;display:inline-block;vertical-align:top;top:50%;margin-top:5px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.paris21_footer .footer_content .footer_item[data-v-fd6e20cc]{display:inline-block;vertical-align:top;margin:0 20px;color:#3a3a3a;font-family:roboto_condensedbold;text-transform:uppercase;text-align:left;position:relative;cursor:pointer}.paris21_footer .footer_content .footer_item[data-v-fd6e20cc]:hover{color:#ea6550}.paris21_footer .footer_content .footer_item .sharebt_wrapper[data-v-fd6e20cc]{display:inline-block}.paris21_footer .footer_content .footer_item .item_label[data-v-fd6e20cc]{display:inline-block;vertical-align:top;position:relative}.paris21_footer .footer_content .footer_item .item_label[data-v-fd6e20cc]:before{content:\"\";position:absolute;right:100%;top:50%;margin-right:6px;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:4px;height:4px;background:#ea6550;border-radius:6px}.paris21_footer .footer_content .footer_item[data-item=download_all][data-v-fd6e20cc],.paris21_footer .footer_content .footer_item[data-item=findus][data-v-fd6e20cc]{color:#aaa}.paris21_footer .footer_content .footer_item[data-item=download_all][data-v-fd6e20cc]:before,.paris21_footer .footer_content .footer_item[data-item=findus][data-v-fd6e20cc]:before{background-color:#aaa}.paris21_footer .footer_content .footer_item .item_sharebt[data-v-fd6e20cc]{width:30px;height:30px;border-radius:30px;background:#b45747;display:inline-block;vertical-align:top;margin:0 3px;position:relative;top:-6px}.paris21_footer .footer_content .footer_item .item_sharebt[data-v-fd6e20cc]:after{content:\"\";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:30px;height:30px}.paris21_footer .footer_content .footer_item .item_sharebt[data-item=twitter][data-v-fd6e20cc]:after{background:url(" + escape(__webpack_require__("WCgK")) + ") no-repeat 0 0}.paris21_footer .footer_content .footer_item .item_sharebt[data-item=facebook][data-v-fd6e20cc]:after{background:url(" + escape(__webpack_require__("gNV7")) + ") no-repeat 0 0}.paris21_footer .footer_content .footer_item .item_sharebt[data-item=vimeo][data-v-fd6e20cc]:after{background:url(" + escape(__webpack_require__("x59e")) + ") no-repeat 0 0}.paris21_footer .footer_content .footer_item .item_sharebt[data-item=youtube][data-v-fd6e20cc]:after{background:url(" + escape(__webpack_require__("kSSK")) + ") no-repeat 0 0}.paris21_footer .footer_content .footer_item .item_sharebt[data-item=soundcloud][data-v-fd6e20cc]:after{background:url(" + escape(__webpack_require__("53Sa")) + ") no-repeat 0 0}.paris21_footer .footer_content .footer_item .item_sharebt[data-v-fd6e20cc]:hover{background:#2f2f2f}.paris21_footer .footer_logo[data-v-fd6e20cc]{position:absolute;right:40px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:url(" + escape(__webpack_require__("MDBb")) + ") no-repeat 0 0;background-size:100% 100%;width:100px;height:25px;cursor:pointer}.paris21_footer .footer_logo[data-v-fd6e20cc]:hover{background:url(" + escape(__webpack_require__("f2df")) + ") no-repeat 0 0;background-size:100% 100%}", ""]);

// exports


/***/ }),

/***/ "2LCr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_paris21Header_vue__ = __webpack_require__("mvsm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_paris21Footer_vue__ = __webpack_require__("3wr8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_paris21Modal_vue__ = __webpack_require__("cU99");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    'paris21Header': __WEBPACK_IMPORTED_MODULE_0__components_paris21Header_vue__["a" /* default */],
    'paris21Footer': __WEBPACK_IMPORTED_MODULE_1__components_paris21Footer_vue__["a" /* default */],
    'paris21Modal': __WEBPACK_IMPORTED_MODULE_2__components_paris21Modal_vue__["a" /* default */]
  },
  head: function head() {
    return {
      title: 'Statistical Capacity Monito',
      meta: [{ hid: 'description', name: 'description', content: 'Find and explore indicators on statistical capacity' }, { hid: 'og:image', name: 'og:image', content: 'http://statisticalcapacitymonitor.org/images/share-img.png' }]
    };
  },

  data: function data() {
    return {
      selectorExpanded: '',
      displayDownloadModal: false,
      displayPrivacyModal: false
    };
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "3wr8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_false_presets_env_modules_false_targets_browsers_1_last_2_versions_not_ie_8_stage_2_plugins_transform_vue_jsx_transform_runtime_node_modules_vue_loader_lib_selector_type_script_index_0_paris21Footer_vue__ = __webpack_require__("yfqo");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fd6e20cc_hasScoped_true_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_paris21Footer_vue__ = __webpack_require__("SHlP");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("akPR")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fd6e20cc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_false_presets_env_modules_false_targets_browsers_1_last_2_versions_not_ie_8_stage_2_plugins_transform_vue_jsx_transform_runtime_node_modules_vue_loader_lib_selector_type_script_index_0_paris21Footer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fd6e20cc_hasScoped_true_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_paris21Footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/paris21Footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fd6e20cc", Component.options)
  } else {
    hotAPI.reload("data-v-fd6e20cc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "53Sa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-soundcloud.e9f8b6b.svg";

/***/ }),

/***/ "DxZI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page", attrs: { id: "AboutPage", "data-page": "about" } },
    [
      _c("paris21Header", {
        attrs: { page: "about" },
        on: {
          downloadModal: function($event) {
            _vm.displayDownloadModal = true
          }
        }
      }),
      _vm._m(0),
      _c("paris21Modal", {
        attrs: { type: "download", displayed: _vm.displayDownloadModal },
        on: {
          closeModal: function($event) {
            _vm.displayDownloadModal = false
          }
        }
      }),
      _c("paris21Modal", {
        attrs: { type: "privacy", displayed: _vm.displayPrivacyModal },
        on: {
          closeModal: function($event) {
            _vm.displayPrivacyModal = false
          }
        }
      }),
      _c("paris21Footer", {
        on: {
          privacyModal: function($event) {
            _vm.displayPrivacyModal = true
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page_main" }, [
      _c("div", { staticClass: "main_wrapper" }, [
        _c("div", { staticClass: "page_title" }, [
          _vm._v("About Statistical Capacity Monitor")
        ]),
        _c("div", { staticClass: "page_content" }, [
          _c("p", [
            _c("span", { staticClass: "bolder" }, [
              _vm._v("1. Why a Statistical Capacity Monitor? ")
            ])
          ]),
          _c("p", [
            _vm._v(
              "National statistics are an essential component of policy making. They provide the evidence required to improve the lives of citizens, monitor results and hold governments accountable. Recent international agreements such as the 2030 Agenda for Sustainable Development and Agenda 2063 for Africa recognise the central role of strong statistics and place a significant emphasis on goals, indicators and national reporting. "
            )
          ]),
          _c("p", [
            _vm._v(
              "At the same time, technological advances create a wealth of new data sources, some of which have the potential to enrich national statistical systems and enable more effective and responsive policy making. Although some countries have seen improvements in statistical capacity in recent decades, the results have not been universal. Today, a third of national statistical offices feel that statistical capacity development programmes are not meeting their needs."
            )
          ]),
          _c("p", [
            _vm._v(
              "There is an urgent need to empower countries to track their progress towards more advanced statistical capacities, and to enable donors to invest in more and better data for development. Moreover, countries should use common benchmarks to evaluate their past, ongoing or planned NSDS processes, and thus improve their data planning processes."
            )
          ]),
          _c("p", [
            _vm._v(
              "PARIS21’s Statistical Capacity Monitor was launched in April 2019 to describe global, regional and national statistical capacity trends. The Monitor features around 100 indicators on statistical capacity, and an intuitive interactive interface makes geographic and sectoral comparison, benchmarking and analysis quick and simple."
            )
          ]),
          _c("p", [_vm._v("The value-added of the platform is threefold:")]),
          _c("ul", [
            _c("li", [
              _c("span", { staticClass: "bolder" }, [_vm._v("Analysis:")]),
              _vm._v(
                " Quick understanding of regional and periodic trends in capacity development"
              )
            ]),
            _c("li", [
              _c("span", { staticClass: "bolder" }, [_vm._v("Transparency:")]),
              _vm._v(
                " Comprehensive overview over a variety of statistical capacity measurements "
              )
            ]),
            _c("li", [
              _c("span", { staticClass: "bolder" }, [_vm._v("Coordination:")]),
              _vm._v(
                "  Effective allocation of funds based on scientifically validated indicators"
              )
            ])
          ]),
          _c("br"),
          _c("p", [
            _c("span", { staticClass: "bolder" }, [_vm._v("2. How it works")])
          ]),
          _c("p", [
            _vm._v(
              "Considering the breadth, depth, and relation of the indicators in the Statistical Capacity Monitor, the data is classified according to five families:"
            )
          ]),
          _c("ul", [
            _c("li", [
              _c("span", { staticClass: "bolder" }, [_vm._v("Planning:")]),
              _vm._v(
                " the process of making arrangements for statistical production"
              )
            ]),
            _c("li", [
              _c("span", { staticClass: "bolder" }, [_vm._v("Production:")]),
              _vm._v(" the process of constructing statistics")
            ]),
            _c("li", [
              _c("span", { staticClass: "bolder" }, [_vm._v("Dissemination:")]),
              _vm._v(" the action of spreading statistical information widely")
            ]),
            _c("li", [
              _c("span", { staticClass: "bolder" }, [_vm._v("Use:")]),
              _vm._v(" statistical literacy, use and esteem of statistics")
            ]),
            _c("li", [
              _c("span", { staticClass: "bolder" }, [_vm._v("Investment:")]),
              _vm._v(" devotion of resources to the statistical system")
            ])
          ]),
          _c("p", [
            _vm._v(
              "Most of the indicators have an annual periodicity. Users can visualise the data and cross-tabulate different types of indicators."
            )
          ]),
          _c("br"),
          _c("p", [
            _c("span", { staticClass: "bolder" }, [_vm._v("3. Who is it for?")])
          ]),
          _c("p", [
            _vm._v(
              "Anybody interested in understanding and analysing how statistical capacity changes over time, and why. "
            )
          ]),
          _c("p", [_vm._v("Specific user groups include:")]),
          _c(
            "table",
            {
              staticClass: "about_table",
              attrs: { cellpadding: "0", cellspacing: "0" }
            },
            [
              _c("tr", [
                _c("td", [
                  _c("span", { staticClass: "bigger" }, [
                    _vm._v("National Statistical Offices")
                  ]),
                  _c("br"),
                  _vm._v(
                    "\n              Statistical Authorities\n            "
                  )
                ]),
                _c("td", [
                  _c("span", { staticClass: "bigger" }, [
                    _vm._v("Government (agencies)")
                  ]),
                  _c("br"),
                  _vm._v("\n              Ministries of Planning"),
                  _c("br"),
                  _vm._v("\n              Ministries of Finance"),
                  _c("br"),
                  _vm._v(
                    "\n              Line ministries or public agencies\n            "
                  )
                ]),
                _c("td", [
                  _c("span", { staticClass: "bigger" }, [_vm._v("Academia")]),
                  _c("br"),
                  _vm._v("\n              Universities"),
                  _c("br"),
                  _vm._v("\n              Research institutes"),
                  _c("br"),
                  _vm._v(
                    "\n              Statistical training institutes\n            "
                  )
                ])
              ]),
              _c("tr", [
                _c("td", [
                  _c("span", { staticClass: "bigger" }, [
                    _vm._v("Donor community")
                  ]),
                  _c("br"),
                  _vm._v("\n              Multilateral organisations"),
                  _c("br"),
                  _vm._v("\n              Regional banks"),
                  _c("br"),
                  _vm._v(
                    "\n              National Development cooperation agencies"
                  ),
                  _c("br"),
                  _vm._v("\n              Private foundations\n            ")
                ]),
                _c("td", [
                  _c("span", { staticClass: "bigger" }, [
                    _vm._v("Civil Society")
                  ]),
                  _vm._v("\n              NGOs"),
                  _c("br"),
                  _vm._v("\n              Think Tanks"),
                  _c("br"),
                  _vm._v(
                    "\n              Civil Society Organisations\n            "
                  )
                ]),
                _c("td", [
                  _c("span", { staticClass: "bigger" }, [_vm._v("Media")]),
                  _c("br"),
                  _vm._v("\n              Journalists\n            ")
                ])
              ]),
              _c("tr", [
                _c("td", { staticClass: "centered", attrs: { colspan: "3" } }, [
                  _c("span", { staticClass: "bigger" }, [_vm._v("Citizens")])
                ])
              ])
            ]
          ),
          _c("br"),
          _c("p", [
            _c("span", { staticClass: "bolder" }, [
              _vm._v("4. Links to other platforms ")
            ])
          ]),
          _c("ul", [
            _c("li", [
              _c(
                "a",
                { attrs: { href: "https://data.oecd.org/", target: "_blank" } },
                [_vm._v("OECD Data")]
              )
            ]),
            _c("li", [
              _c(
                "a",
                {
                  attrs: {
                    href: "www.fao.org/faostat/en/#home",
                    target: "_blank"
                  }
                },
                [_vm._v("FAOSTAT")]
              )
            ]),
            _c("li", [
              _c(
                "a",
                {
                  attrs: {
                    href: "http://www.fao.org/food-agriculture-microdata/en/",
                    target: "_blank"
                  }
                },
                [_vm._v("Food and Agriculture Microdata Catalogue")]
              )
            ]),
            _c("li", [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://mo.ibrahim.foundation",
                    target: "_blank"
                  }
                },
                [_vm._v("Ibrahim Index of African Governance")]
              )
            ]),
            _c("li", [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://sdmxcentral.imf.org/overview.html",
                    target: "_blank"
                  }
                },
                [_vm._v("IMF SDMX Central")]
              )
            ]),
            _c("li", [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://unstats.un.org/home/nso_sites/",
                    target: "_blank"
                  }
                },
                [_vm._v("NSO websites")]
              )
            ]),
            _c("li", [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://opendatawatch.com/monitoring/",
                    target: "_blank"
                  }
                },
                [_vm._v("Open Data Inventory (ODIN)")]
              )
            ]),
            _c("li", [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://unstats.un.org/sdgs/indicators/database/",
                    target: "_blank"
                  }
                },
                [_vm._v("SDG Global Database")]
              )
            ]),
            _c("li", [
              _c(
                "a",
                {
                  attrs: {
                    href:
                      "https://datatopics.worldbank.org/statisticalcapacity/SCIdashboard.aspx",
                    target: "_blank"
                  }
                },
                [_vm._v("World Bank Statistical Capacity Dashboard")]
              )
            ]),
            _c("li", [
              _c(
                "a",
                {
                  attrs: {
                    href:
                      "https://datatopics.worldbank.org/world-development-indicators/",
                    target: "_blank"
                  }
                },
                [_vm._v("World Bank Development Indicators")]
              )
            ]),
            _c("li", [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://info.worldbank.org/governance/wgi/",
                    target: "_blank"
                  }
                },
                [_vm._v("Worldwide Governance Indicators")]
              )
            ])
          ]),
          _c("br"),
          _c("p", [_c("span", { staticClass: "bolder" }, [_vm._v("Updates")])]),
          _c("p", [
            _vm._v(
              "New indicators will be added and existing ones updated on an annual basis. For a detailed dissemination calendar, please click "
            ),
            _c(
              "a",
              {
                attrs: {
                  href: "/pdf/DisseminationCalendar.pdf",
                  target: "_blank"
                }
              },
              [_vm._v("here")]
            ),
            _vm._v(".")
          ]),
          _c("p", [
            _c("span", { staticClass: "bolder" }, [
              _vm._v("Proposals of new indicators")
            ])
          ]),
          _c("p", [
            _vm._v(
              "PARIS21 welcomes proposals of new indicators throughout the year. The proposals can be submitted via "
            ),
            _c(
              "a",
              {
                attrs: {
                  href: "mailto:contact@statisticalcapacitymonitor.org",
                  target: "_blank"
                }
              },
              [_vm._v("contact@statisticalcapacitymonitor.org")]
            ),
            _vm._v(
              ". Submitted indicators will be reviewed and validated every month by the PARIS21 team. In case of approval, you will be contacted for further information. To be included in the Statistical Capacity Monitor, the indicator will need to pass a validation process by our team and relevant experts."
            )
          ]),
          _c("p", [
            _c("span", { staticClass: "bolder" }, [
              _vm._v("Content support/ Data requests")
            ])
          ]),
          _c("p", [
            _vm._v(
              "For any request regarding specific indicators, statistical capacity trends or content-related enquiries, please contact:"
            ),
            _c("br"),
            _c(
              "a",
              {
                attrs: { href: "mailto:contact@statisticalcapacitymonitor.org" }
              },
              [_vm._v("contact@statisticalcapacitymonitor.org")]
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5357e832", esExports)
  }
}

/***/ }),

/***/ "MDBb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-wedodata.a24baa6.svg";

/***/ }),

/***/ "Nlsq":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("PZhA");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("44a3a6e0", content, false, {"sourceMap":false});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":true,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Applications/MAMP/htdocs/OCDE_Paris21/assets\",\"/static\":\"/Applications/MAMP/htdocs/OCDE_Paris21/static\"}}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5357e832\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":true,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Applications/MAMP/htdocs/OCDE_Paris21/assets\",\"/static\":\"/Applications/MAMP/htdocs/OCDE_Paris21/static\"}}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5357e832\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "PZhA":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("kxFB");
exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:montserratbold;src:url(" + escape(__webpack_require__("KoCO")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("cqiT")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratitalic;src:url(" + escape(__webpack_require__("hPgA")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("hnDx")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratregular;src:url(" + escape(__webpack_require__("UBI+")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("dL9s")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:roboto_condensedbold;src:url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff\");font-weight:400;font-style:normal}#AboutPage .page_main{background:#fff;margin-bottom:60px}.page_title{color:#ea6550;font-size:22px;margin-top:40px;border-bottom:2px solid #ea6550;padding:0 50px 10px;position:relative}.page_content{color:#2f2f2f;margin:20px 50px;padding-right:10px;overflow:auto;font-family:montserratregular;font-size:14px;text-align:left;line-height:20px;text-align:center}.page_content a{color:#ea6550;text-decoration:none;font-family:montserratbold;display:inline-block;border-bottom:2px solid #ea6550;line-height:16px}.page_content p{margin:20px 0;text-align:left}.page_content ul{text-align:left}.page_content .content_image{background:url(" + escape(__webpack_require__("uv/c")) + ") no-repeat 0 0;background-size:100% 100%;width:350px;height:350px;display:inline-block}.page_content .bolder{font-family:montserratbold}.about_table,.about_table td{border:1px solid;text-align:left;border-collapse:collapse}.about_table td{padding:10px}.about_table td.centered{text-align:center}.about_table .bigger{font-weight:700;font-size:14px}", ""]);

// exports


/***/ }),

/***/ "Ptdr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-paris21.3030c1a.svg";

/***/ }),

/***/ "R7n6":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("kxFB");
exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:montserratbold;src:url(" + escape(__webpack_require__("KoCO")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("cqiT")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratitalic;src:url(" + escape(__webpack_require__("hPgA")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("hnDx")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratregular;src:url(" + escape(__webpack_require__("UBI+")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("dL9s")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:roboto_condensedbold;src:url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff\");font-weight:400;font-style:normal}.paris21_modalwrapper[data-v-7675ee04]{position:fixed;left:0;top:0;bottom:0;width:100%;display:none;z-index:1000000}.paris21_modalwrapper.displayed[data-v-7675ee04]{display:block}.paris21_modalwrapper .paris21_modalbg[data-v-7675ee04]{background:rgba(0,0,0,.6);position:absolute;left:0;top:0;width:100%;height:100%}.paris21_modalwrapper .paris21_modal[data-v-7675ee04]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:#fff;width:800px;height:500px;text-align:left}.paris21_modalwrapper .paris21_modal .modal_title[data-v-7675ee04]{color:#ea6550;font-size:22px;margin-top:40px;border-bottom:2px solid #ea6550;padding:0 50px 10px;position:relative}.paris21_modalwrapper .paris21_modal .modal_title .modal_closebt[data-v-7675ee04]{position:absolute;right:30px;bottom:-5px;cursor:pointer;background:url(" + escape(__webpack_require__("Ehvn")) + ") no-repeat 0 0;width:60px;height:60px}.paris21_modalwrapper .paris21_modal .modal_content[data-v-7675ee04]{color:#2f2f2f;text-align:left;margin:20px 50px;padding-right:10px;height:370px;overflow:auto;font-family:montserratregular;font-size:14px;line-height:20px;text-align:center}.paris21_modalwrapper .paris21_modal .modal_content a[data-v-7675ee04]{color:#ea6550;text-decoration:none;font-family:montserratbold;display:inline-block;border-bottom:2px solid #ea6550;line-height:16px}.paris21_modalwrapper .paris21_modal .modal_content p[data-v-7675ee04]{margin:40px 0;text-align:left}.paris21_modalwrapper .paris21_modal .modal_content .content_image[data-v-7675ee04]{background:url(" + escape(__webpack_require__("uv/c")) + ") no-repeat 0 0;background-size:100% 100%;width:350px;height:350px;display:inline-block}.paris21_modalwrapper .paris21_modal .modal_content .bolder[data-v-7675ee04]{font-family:montserratbold}.paris21_modalwrapper .paris21_modal .modal_content .content_block[data-v-7675ee04]{text-align:left}.paris21_modalwrapper .paris21_modal .modal_content .content_block .block_title[data-v-7675ee04]{font-weight:700;font-size:18px;line-height:24px}.paris21_modalwrapper .paris21_modal .modal_content .content_block .block_text[data-v-7675ee04] table{border:1px solid;border-collapse:collapse}.paris21_modalwrapper .paris21_modal .modal_content .content_block .block_text[data-v-7675ee04] td,.paris21_modalwrapper .paris21_modal .modal_content .content_block .block_text[data-v-7675ee04] th{border:1px solid;border-collapse:collapse;padding:10px}.paris21_modalwrapper .paris21_modal .modal_content[data-type=download][data-v-7675ee04]{text-align:left}.paris21_modalwrapper .paris21_modal .modal_content[data-type=download] .download_item[data-v-7675ee04]{margin-bottom:30px}.paris21_modalwrapper .paris21_modal .modal_content[data-type=download] .download_item .item_title[data-v-7675ee04]{color:#ea6550;font-size:20px}.paris21_modalwrapper .paris21_modal .modal_content[data-type=download] .download_item .item_text[data-v-7675ee04]{font-family:montserratbold;font-size:12px;margin-top:4px;line-height:14px}.paris21_modalwrapper .paris21_modal .modal_content[data-type=download] .download_item .download_bt[data-v-7675ee04]{margin-top:8px;background:#ea6550;display:inline-block;vertical-align:top;width:150px;height:24px;line-height:24px;border-radius:24px;font-family:roboto_condensedbold;color:#fff;text-align:center;text-decoration:none;text-transform:uppercase}", ""]);

// exports


/***/ }),

/***/ "SHlP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "paris21_footer" }, [
    _c("div", { staticClass: "footer_content" }, [
      _vm._m(0),
      _vm._m(1),
      _c(
        "a",
        {
          staticClass: "footer_item",
          attrs: { "data-item": "privacy" },
          on: {
            click: function($event) {
              _vm.emitPrivacyModal()
            }
          }
        },
        [_c("span", { staticClass: "item_label" }, [_vm._v("Privacy")])]
      ),
      _vm._m(2)
    ]),
    _c("a", {
      staticClass: "footer_logo",
      attrs: { target: "_blank", href: "http://wedodata.fr" }
    })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "footer_item",
        attrs: {
          "data-item": "website",
          href: "https://paris21.org/",
          target: "_blank"
        }
      },
      [_c("span", { staticClass: "item_label" }, [_vm._v("Paris21 Website")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "footer_item",
        attrs: {
          "data-item": "contactus",
          href: "https://paris21.org/about-paris-21/contact",
          target: "_blank"
        }
      },
      [_c("span", { staticClass: "item_label" }, [_vm._v("Contact Us")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "footer_item", attrs: { "data-item": "findus" } },
      [
        _c(
          "span",
          { staticClass: "item_label", staticStyle: { "margin-right": "4px" } },
          [_vm._v("Find us on")]
        ),
        _c("div", { staticClass: "sharebt_wrapper" }, [
          _c("a", {
            staticClass: "item_sharebt",
            attrs: {
              href: "https://twitter.com/ContactPARIS21",
              target: "_blank",
              "data-item": "twitter"
            }
          }),
          _c("a", {
            staticClass: "item_sharebt",
            attrs: {
              href: "https://vimeo.com/paris21secretariat",
              target: "_blank",
              "data-item": "vimeo"
            }
          }),
          _c("a", {
            staticClass: "item_sharebt",
            attrs: {
              href: "https://www.youtube.com/user/PARIS21OECD",
              target: "_blank",
              "data-item": "youtube"
            }
          }),
          _c("a", {
            staticClass: "item_sharebt",
            attrs: {
              href: "https://soundcloud.com/paris21-datatalk/",
              target: "_blank",
              "data-item": "soundcloud"
            }
          })
        ])
      ]
    )
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fd6e20cc", esExports)
  }
}

/***/ }),

/***/ "TaeK":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("r09Y");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("4472c3da", content, false, {"sourceMap":false});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":true,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Applications/MAMP/htdocs/OCDE_Paris21/assets\",\"/static\":\"/Applications/MAMP/htdocs/OCDE_Paris21/static\"}}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bb0958e8\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./paris21Header.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":true,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Applications/MAMP/htdocs/OCDE_Paris21/assets\",\"/static\":\"/Applications/MAMP/htdocs/OCDE_Paris21/static\"}}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bb0958e8\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./paris21Header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "UjnL":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    displayed: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    type: {
      type: String,
      default: function _default() {
        return 'privacy';
      }
    },
    indicatorLabel: {
      type: String,
      default: function _default() {
        return '';
      }
    },
    methodoInfos: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      datafileURL: ""
    };
  },
  mounted: function mounted() {
    this.datafileURL = {"api_url":"https://ocde.wedodata.fr/paris21_api/","datafile_url":"https://ocde.wedodata.fr/paris21_admin/API/file.csv"}.datafile_url;
  },
  methods: {
    closeModal: function closeModal() {
      this.$emit('closeModal');
    }
  }
});

/***/ }),

/***/ "Uu38":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "paris21_header" }, [
    _c(
      "div",
      { staticClass: "header_wrapper" },
      [
        _vm.page == "home"
          ? _c(
              "a",
              {
                staticClass: "header_logo",
                on: {
                  click: function($event) {
                    _vm.clickLogo()
                  }
                }
              },
              [
                _c("span", { staticClass: "logo_text" }, [
                  _vm._v("Statistical Capacity Monitor")
                ])
              ]
            )
          : _vm._e(),
        _vm.page != "home"
          ? _c(
              "nuxt-link",
              { staticClass: "header_logo", attrs: { to: "/" } },
              [
                _c("span", { staticClass: "logo_text" }, [
                  _vm._v("Statistical"),
                  _c("br"),
                  _vm._v("Capacity Monitor")
                ])
              ]
            )
          : _vm._e(),
        _c("div", { staticClass: "header_menu" }, [
          _c(
            "div",
            { staticClass: "menu_desktop" },
            [
              _c(
                "nuxt-link",
                {
                  staticClass: "menu_link",
                  class: _vm.page == "country" ? "selected" : "",
                  attrs: { to: "/country/" }
                },
                [_vm._v("Countries")]
              ),
              _c(
                "nuxt-link",
                {
                  staticClass: "menu_link chipped",
                  class: _vm.page == "indicator" ? "selected" : "",
                  attrs: { to: "/indicator/" }
                },
                [_vm._v("Indicators")]
              ),
              _c(
                "nuxt-link",
                {
                  staticClass: "menu_link chipped",
                  class: _vm.page == "report" ? "selected" : "",
                  attrs: { to: "/report" }
                },
                [_vm._v("Outlook")]
              ),
              _c(
                "nuxt-link",
                {
                  staticClass: "menu_link chipped",
                  class: _vm.page == "about" ? "selected" : "",
                  attrs: { to: "/about" }
                },
                [_vm._v("About")]
              ),
              _c(
                "a",
                {
                  staticClass: "menu_link chipped",
                  on: {
                    click: function($event) {
                      _vm.emitDownloadModal()
                    }
                  }
                },
                [_vm._v("Download")]
              )
            ],
            1
          ),
          _c("div", { staticClass: "menu_mobile" }, [
            _c(
              "div",
              {
                staticClass: "menu_link",
                on: {
                  click: function($event) {
                    _vm.mobileMenuActivated = !_vm.mobileMenuActivated
                  }
                }
              },
              [_vm._v("Menu")]
            ),
            _c(
              "div",
              {
                staticClass: "mobile_submenu",
                class: _vm.mobileMenuActivated ? "displayed" : ""
              },
              [
                _c(
                  "nuxt-link",
                  {
                    staticClass: "menu_link",
                    class: _vm.page == "country" ? "selected" : "",
                    attrs: { to: "/country/" }
                  },
                  [_vm._v("Countries")]
                ),
                _c(
                  "nuxt-link",
                  {
                    staticClass: "menu_link chipped",
                    class: _vm.page == "indicator" ? "selected" : "",
                    attrs: { to: "/indicator/" }
                  },
                  [_vm._v("Indicators")]
                ),
                _c(
                  "nuxt-link",
                  {
                    staticClass: "menu_link chipped",
                    class: _vm.page == "report" ? "selected" : "",
                    attrs: { to: "/report" }
                  },
                  [_vm._v("Outlook")]
                )
              ],
              1
            )
          ]),
          _c(
            "div",
            {
              staticClass: "menu_langblock",
              attrs: { "data-selected": _vm.langsBlockSelected },
              on: {
                click: function($event) {
                  _vm.langsBlockSelected = !_vm.langsBlockSelected
                }
              }
            },
            [
              _c("div", { staticClass: "langblock_head" }, [_vm._v("EN")]),
              _vm.langsBlockSelected
                ? _c("div", { staticClass: "langblock_items" }, [
                    _c("div", { staticClass: "langblock_item" }, [
                      _vm._v("FR")
                    ]),
                    _c("div", { staticClass: "langblock_item" }, [
                      _vm._v("IT")
                    ]),
                    _c("div", { staticClass: "langblock_item" }, [_vm._v("ES")])
                  ])
                : _vm._e()
            ]
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bb0958e8", esExports)
  }
}

/***/ }),

/***/ "Vajp":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("R7n6");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("c8082d80", content, false, {"sourceMap":false});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":true,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Applications/MAMP/htdocs/OCDE_Paris21/assets\",\"/static\":\"/Applications/MAMP/htdocs/OCDE_Paris21/static\"}}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7675ee04\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./paris21Modal.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":true,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Applications/MAMP/htdocs/OCDE_Paris21/assets\",\"/static\":\"/Applications/MAMP/htdocs/OCDE_Paris21/static\"}}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7675ee04\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./paris21Modal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "WCgK":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi10d2l0dGVyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+CiAgPHRpdGxlPmljb24tdHdpdHRlcjwvdGl0bGU+CiAgPHBhdGggZD0iTTIxLjg1NDgsMTAuODAzOGE1LjU1LDUuNTUsMCwwLDEtMS41OTQ1LjQzNzIsMi43ODUzLDIuNzg1MywwLDAsMCwxLjIyMDctMS41MzYyLDUuNTYyMyw1LjU2MjMsMCwwLDEtMS43NjMyLjY3MzcsMi43NzkxLDIuNzc5MSwwLDAsMC00LjczMDgsMi41MzI5QTcuODgxNiw3Ljg4MTYsMCwwLDEsOS4yNjQ3LDEwLjAxYTIuNzgsMi43OCwwLDAsMCwuODU5LDMuNzA3NUEyLjc2MSwyLjc2MSwwLDAsMSw4Ljg2NjQsMTMuMzdsMCwuMDM0OWEyLjc3ODYsMi43Nzg2LDAsMCwwLDIuMjI3MiwyLjcyMjksMi43ODI4LDIuNzgyOCwwLDAsMS0xLjI1MzguMDQ3NywyLjc3OTIsMi43NzkyLDAsMCwwLDIuNTkzNSwxLjkyODQsNS42MDA4LDUuNjAwOCwwLDAsMS00LjExLDEuMTVBNy44OTUxLDcuODk1MSwwLDAsMCwyMC40Nzc2LDEyLjZxMC0uMTgwNi0uMDA4MS0uMzU5MkE1LjYzOTMsNS42MzkzLDAsMCwwLDIxLjg1NDgsMTAuODAzOFoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "akPR":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("/Wdd");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("88424a74", content, false, {"sourceMap":false});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":true,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Applications/MAMP/htdocs/OCDE_Paris21/assets\",\"/static\":\"/Applications/MAMP/htdocs/OCDE_Paris21/static\"}}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fd6e20cc\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./paris21Footer.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":true,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Applications/MAMP/htdocs/OCDE_Paris21/assets\",\"/static\":\"/Applications/MAMP/htdocs/OCDE_Paris21/static\"}}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fd6e20cc\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./paris21Footer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "awZ5":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaGVhZGVyLXNoYXBlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NSA3NSI+CiAgPHRpdGxlPlBsYW4gZGUgdHJhdmFpbCAxPC90aXRsZT4KICA8cG9seWdvbiBwb2ludHM9IjY1IDU2LjI1IDMyLjUgNzUgMCA1Ni4yNSAwIDE4Ljc1IDMyLjUgMCA2NSAxOC43NSA2NSA1Ni4yNSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K"

/***/ }),

/***/ "cU99":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_false_presets_env_modules_false_targets_browsers_1_last_2_versions_not_ie_8_stage_2_plugins_transform_vue_jsx_transform_runtime_node_modules_vue_loader_lib_selector_type_script_index_0_paris21Modal_vue__ = __webpack_require__("UjnL");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7675ee04_hasScoped_true_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_paris21Modal_vue__ = __webpack_require__("/9xw");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("Vajp")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7675ee04"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_false_presets_env_modules_false_targets_browsers_1_last_2_versions_not_ie_8_stage_2_plugins_transform_vue_jsx_transform_runtime_node_modules_vue_loader_lib_selector_type_script_index_0_paris21Modal_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7675ee04_hasScoped_true_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_paris21Modal_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/paris21Modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7675ee04", Component.options)
  } else {
    hotAPI.reload("data-v-7675ee04", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "f2df":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-wedodata-black.3907ced.svg";

/***/ }),

/***/ "gNV7":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1mYWNlYm9vayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzAgMzAiPgogIDx0aXRsZT5pY29uLWZhY2Vib29rPC90aXRsZT4KICA8cGF0aCBkPSJNMTUuNTc4LDIxLjk3VjE1LjEyNzRoMi4yOTY3bC4zNDM4LTIuNjY2NUgxNS41NzhWMTAuNzU4NGMwLS43NzIuMjE0NC0xLjI5ODIsMS4zMjE1LTEuMjk4MmwxLjQxMi0uMDAwNlY3LjA3NDdBMTguODkzMiwxOC44OTMyLDAsMCwwLDE2LjI1MzksNi45N2EzLjIxMjksMy4yMTI5LDAsMCwwLTMuNDMsMy41MjQ4djEuOTY2NUgxMC41MjE4djIuNjY2NWgyLjMwMjVWMjEuOTdaIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "kSSK":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi15b3V0dWJlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+CiAgPHRpdGxlPmljb24teW91dHViZTwvdGl0bGU+CiAgPHBhdGggZD0iTTIyLjMyMjMsMTAuNDk1MWMtLjQ0MTQtLjc4MDctLjkxMzEtLjkyNzctMS44Ny0uOTg2OVMxNy4wODk0LDkuNDIsMTUsOS40MmgwYy0yLjA4OTMsMC00LjQ5NDEuMDI5My01LjQ1MjEuMDg4NHMtMS40Mjg3LjIwNjEtMS44Ny45ODY5UzcsMTIuNjI5NCw3LDE0Ljk5NzZIN3YuMDA0OUg3YzAsMi4zNjgyLjIzNjMsMy43MjIyLjY3NzcsNC41MDI0cy45MTMxLjkyNzgsMS44Ny45ODY4UzEyLjkxMDcsMjAuNTgsMTUsMjAuNThoMGMyLjA4OTMsMCw0LjQ5NDctLjAzLDUuNDUyMS0uMDg4NHMxLjQyODctLjIwNjEsMS44Ny0uOTg2OFMyMywxNy4zNzA2LDIzLDE1LjAwMjR2LS4wMDQ5QzIzLDEyLjYyOTQsMjIuNzYzNiwxMS4yNzU0LDIyLjMyMjMsMTAuNDk1MVptLTguOTE1LDcuNDM3NVYxMi4wNjc0TDE3Ljk1LDE1WiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "mvsm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_false_presets_env_modules_false_targets_browsers_1_last_2_versions_not_ie_8_stage_2_plugins_transform_vue_jsx_transform_runtime_node_modules_vue_loader_lib_selector_type_script_index_0_paris21Header_vue__ = __webpack_require__("njiv");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bb0958e8_hasScoped_true_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_paris21Header_vue__ = __webpack_require__("Uu38");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("TaeK")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bb0958e8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_false_presets_env_modules_false_targets_browsers_1_last_2_versions_not_ie_8_stage_2_plugins_transform_vue_jsx_transform_runtime_node_modules_vue_loader_lib_selector_type_script_index_0_paris21Header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bb0958e8_hasScoped_true_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_paris21Header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/paris21Header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bb0958e8", Component.options)
  } else {
    hotAPI.reload("data-v-bb0958e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "njiv":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    page: {
      default: function _default() {
        return 'home';
      }
    }
  },
  data: function data() {
    return {
      langsBlockSelected: false,
      mobileMenuActivated: false
    };
  },
  mounted: function mounted() {},
  methods: {
    clickLogo: function clickLogo() {
      if (this.page == 'home') location.reload();
    },

    emitAboutModal: function emitAboutModal() {
      this.$emit('aboutModal');
    },

    emitDownloadModal: function emitDownloadModal() {
      this.$emit('downloadModal');
    }
  }
});

/***/ }),

/***/ "oYva":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZHJvcGRvd24tYXJyb3ciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwIDUiPgogIDx0aXRsZT5kcm9wZG93bi1hcnJvdzwvdGl0bGU+CiAgPHBvbHlnb24gcG9pbnRzPSIwIDAgNSA1IDEwIDAgMCAwIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "r09Y":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("kxFB");
exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:montserratbold;src:url(" + escape(__webpack_require__("KoCO")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("cqiT")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratitalic;src:url(" + escape(__webpack_require__("hPgA")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("hnDx")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratregular;src:url(" + escape(__webpack_require__("UBI+")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("dL9s")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:roboto_condensedbold;src:url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff\");font-weight:400;font-style:normal}.paris21_header[data-v-bb0958e8]{position:fixed;left:0;width:100%;top:0;height:50px;background:#fff;z-index:10000;text-align:center;-webkit-box-shadow:0 10px 60px 0 rgba(47,47,47,.4);box-shadow:0 10px 60px 0 rgba(47,47,47,.4)}.paris21_header .header_wrapper[data-v-bb0958e8]{width:100%;height:100%;max-width:1000px;display:inline-block;vertical-align:top;position:relative}.paris21_header .menu_desktop[data-v-bb0958e8]{display:inline-block}.paris21_header .header_logo[data-v-bb0958e8]{position:absolute;left:10px;top:10px;background:url(" + escape(__webpack_require__("awZ5")) + ") no-repeat 0 0;width:65px;height:75px;cursor:pointer}.paris21_header .header_logo[data-v-bb0958e8]:after{position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);top:0;content:\"\";background:url(" + escape(__webpack_require__("Ptdr")) + ") no-repeat 0 0;background-size:100% 100%;width:80px;height:52px;margin-left:-8px}.paris21_header .header_logo .logo_text[data-v-bb0958e8]{font-family:montserratitalic;font-size:13px;color:#81b1b1;line-height:14px;position:absolute;top:12px;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:80px;text-align:left;width:140px}.paris21_header .header_menu[data-v-bb0958e8]{position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:100%;line-height:46px}.paris21_header .header_menu .menu_mobile[data-v-bb0958e8]{display:none;position:relative}.paris21_header .header_menu .menu_mobile .mobile_submenu[data-v-bb0958e8]{position:fixed;right:0;top:50px;background:#2f2f2f;height:100vh;text-align:left;display:none;width:148px}.paris21_header .header_menu .menu_mobile .mobile_submenu.displayed[data-v-bb0958e8]{display:block}.paris21_header .header_menu .menu_mobile .mobile_submenu .menu_link[data-v-bb0958e8]{color:#fff;margin:0 14px;font-size:12px;cursor:pointer}.paris21_header .header_menu .menu_mobile .mobile_submenu .menu_link[data-v-bb0958e8]:after,.paris21_header .header_menu .menu_mobile .mobile_submenu .menu_link[data-v-bb0958e8]:before{display:none}.paris21_header .header_menu .menu_link[data-v-bb0958e8]{display:inline-block;vertical-align:top;margin:0 25px;color:#222;cursor:pointer;text-decoration:none;text-transform:uppercase;font-family:roboto_condensedbold;font-size:16px;position:relative}.paris21_header .header_menu .menu_link[data-v-bb0958e8]:after{content:\"\";position:absolute;left:50%;top:41px;-webkit-transform:translate(-50%);transform:translate(-50%);width:0;height:9px;background-color:#ea6550;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.paris21_header .header_menu .menu_link.selected[data-v-bb0958e8]{color:#ea6550}.paris21_header .header_menu .menu_link.selected[data-v-bb0958e8]:after{width:120%}.paris21_header .header_menu .menu_link.chipped[data-v-bb0958e8]:before{content:\"\";position:absolute;left:-25px;width:4px;height:4px;border-radius:4px;background:#ea6550;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.paris21_header .header_menu .menu_link[data-v-bb0958e8]:hover{color:#ea6550}.paris21_header .header_menu .menu_link[data-v-bb0958e8]:hover:after{width:120%}.paris21_header .header_menu .menu_langblock[data-v-bb0958e8]{background:#ea6550;font-family:roboto_condensedbold;width:50px;border-radius:20px;color:#fff;display:inline-block;vertical-align:top;margin-right:30px;margin-left:40px;padding-left:10px;position:relative;top:10px;height:24px;cursor:pointer;text-align:left;display:none}.paris21_header .header_menu .menu_langblock .langblock_head[data-v-bb0958e8]{display:block;float:left;vertical-align:top;height:24px;line-height:24px;position:relative;width:100%}.paris21_header .header_menu .menu_langblock .langblock_head[data-v-bb0958e8]:after{content:\"\";position:absolute;right:9px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:url(" + escape(__webpack_require__("oYva")) + ") no-repeat 0 0;background-size:100% 100%;width:10px;height:5px}.paris21_header .header_menu .menu_langblock .langblock_items[data-v-bb0958e8]{padding:0 0 5px;display:block;float:left;vertical-align:top;width:100%;line-height:24px}.paris21_header .header_menu .menu_langblock .langblock_items .langblock_item[data-v-bb0958e8]{color:#ea6550;width:100%;float:left;height:24px;line-height:24px;display:inline-block;vertical-align:top}.paris21_header .header_menu .menu_langblock .langblock_items .langblock_item[data-v-bb0958e8]:hover{color:#fff}.paris21_header .header_menu .menu_langblock[data-selected=true][data-v-bb0958e8]{background:#2f2f2f;height:auto;border-radius:10px}", ""]);

// exports


/***/ }),

/***/ "uv/c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/schema-virtuous_data_cycle-2@2x.981f9c5.png";

/***/ }),

/***/ "x59e":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi12aW1lbyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzAgMzAiPgogIDx0aXRsZT5pY29uLXZpbWVvPC90aXRsZT4KICA8cGF0aCBkPSJNNy45MTM1LDEyLjM1MzhsLjU1ODYuNzMyNHMxLjE1MTktLjkwNzgsMS41MzU5LS40NTQyLDEuODUsNS45MzYsMi4zMzkzLDYuOTQ3MWMuNDI3MS44ODY5LDEuNjA1MiwyLjA2LDIuODk3MywxLjIyMjJzNS41ODQ5LTQuNTAzMSw2LjM1MzYtOC44MzI0Yy43Njc5LTQuMzI3Ny01LjE2NzEtMy40MjExLTUuNzk1OC4zNDkyLDEuNTcxMi0uOTQzMSwyLjQxLjM4MzIsMS42MDU4LDEuODg1My0uODAyNSwxLjUtMS41MzU5LDIuNDc5Mi0xLjkyLDIuNDc5MnMtLjY3ODMtMS4wMDM5LTEuMTE3NS0yLjc1OTJjLS40NTM5LTEuODE0OS0uNDUxLTUuMDgzMS0yLjMzODQtNC43MTI1QzEwLjI1MjgsOS41Niw3LjkxMzUsMTIuMzUzOCw3LjkxMzUsMTIuMzUzOFoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "yPeL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_false_presets_env_modules_false_targets_browsers_1_last_2_versions_not_ie_8_stage_2_plugins_transform_vue_jsx_transform_runtime_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("2LCr");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5357e832_hasScoped_false_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("DxZI");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("Nlsq")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_false_presets_env_modules_false_targets_browsers_1_last_2_versions_not_ie_8_stage_2_plugins_transform_vue_jsx_transform_runtime_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5357e832_hasScoped_false_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "pages/about/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5357e832", Component.options)
  } else {
    hotAPI.reload("data-v-5357e832", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "yfqo":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  props: {},
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  methods: {
    emitPrivacyModal: function emitPrivacyModal() {
      this.$emit('privacyModal');
    }
  }
});

/***/ })

});