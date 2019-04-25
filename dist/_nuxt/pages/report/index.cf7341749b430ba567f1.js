webpackJsonp([3],{

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
      _vm.type == "about"
        ? _c("div", { staticClass: "paris21_modal" }, [
            _c("div", { staticClass: "modal_title" }, [
              _vm._v("\n      About "),
              _c("span", { staticClass: "bolder" }, [
                _vm._v("the Statistical Capacity Monitor")
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
            _vm._m(1)
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
          "\n        The implementation of the 2030 Agenda has brought attention to the new skills and practices that national statistical systems (NSS) will need to develop to meet the unprecedented demand for data and statistics.  \n      "
        )
      ]),
      _c("p", [
        _vm._v(
          "\n        As a recognised priority for most actors in the development and data community, understanding the needs and progress in statistical capacity through more accessible information remains a pending task. \n      "
        )
      ]),
      _c("p", [
        _vm._v(
          "\n        The PARIS21 Statistical Capacity Monitor features existing and innovative indicators on statistical capacity and capacity development to support countries, donors and service providers to tailor capacity development programmes in statistics.\n      "
        )
      ]),
      _c("p", [
        _vm._v(
          "\n        The Monitor provides access to an extensive, and evolving, battery of indicators on statistical capacity that will offer a clearer landscape of where countries stand in different areas of capacity. It facilitates country and regional comparisons across multiple dimensions of statistical capacity, presenting trends in key drivers (including funding and legislation) and periodically proposing new indicators that can inform our understanding of capacity.\n      "
        )
      ]),
      _c("p", [
        _vm._v(
          "\n        The Monitor aims to contribute to better match the supply and demand of programmes, enhance donors’ coordination in the provision of capacity development and build on our collective knowledge of what capacity means. The platform will support the PARIS21 "
        ),
        _c("span", { staticClass: "bolder" }, [
          _vm._v("Statistical Capacity Development Outlook")
        ]),
        _vm._v(" (forthcoming).\n      ")
      ]),
      _c("p", [
        _c(
          "span",
          { staticClass: "bolder", staticStyle: { color: "#4ba4a1" } },
          [_vm._v("The PARIS21 team")]
        )
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

/***/ "334W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page", attrs: { id: "Flagship", "data-page": "flagship" } },
    [
      _c("paris21Header", { attrs: { page: "report" } }),
      _vm._m(0),
      _c("paris21Modal", {
        attrs: { type: "about", displayed: _vm.displayAboutModal },
        on: {
          closeModal: function($event) {
            _vm.displayAboutModal = false
          }
        }
      }),
      _c("paris21Footer", {
        on: {
          aboutModal: function($event) {
            _vm.displayAboutModal = true
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
        _c("div", { staticClass: "flagship_cover" }),
        _c(
          "a",
          {
            staticClass: "flagship_bt",
            attrs: {
              href: "/pdf/Statistical Capacity Development Outlook 2019.pdf",
              target: "_blank"
            }
          },
          [_vm._v("DOWNLOAD (.PDF)")]
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-4e24a4a0", esExports)
  }
}

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

/***/ "MDBb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-wedodata.a24baa6.svg";

/***/ }),

/***/ "PW3F":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("gAP1");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("e4079478", content, false, {"sourceMap":false});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":true,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Applications/MAMP/htdocs/OCDE_Paris21/assets\",\"/static\":\"/Applications/MAMP/htdocs/OCDE_Paris21/static\"}}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4e24a4a0\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"minimize\":true,\"importLoaders\":1,\"alias\":{\"/assets\":\"/Applications/MAMP/htdocs/OCDE_Paris21/assets\",\"/static\":\"/Applications/MAMP/htdocs/OCDE_Paris21/static\"}}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4e24a4a0\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

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
exports.push([module.i, "@font-face{font-family:montserratbold;src:url(" + escape(__webpack_require__("KoCO")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("cqiT")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratitalic;src:url(" + escape(__webpack_require__("hPgA")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("hnDx")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratregular;src:url(" + escape(__webpack_require__("UBI+")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("dL9s")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:roboto_condensedbold;src:url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff\");font-weight:400;font-style:normal}.paris21_modalwrapper[data-v-7675ee04]{position:fixed;left:0;top:0;bottom:0;width:100%;display:none;z-index:1000000}.paris21_modalwrapper.displayed[data-v-7675ee04]{display:block}.paris21_modalwrapper .paris21_modalbg[data-v-7675ee04]{background:rgba(0,0,0,.6);position:absolute;left:0;top:0;width:100%;height:100%}.paris21_modalwrapper .paris21_modal[data-v-7675ee04]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:#fff;width:800px;height:500px;text-align:left}.paris21_modalwrapper .paris21_modal .modal_title[data-v-7675ee04]{color:#ea6550;font-size:22px;margin-top:40px;border-bottom:2px solid #ea6550;padding:0 50px 10px;position:relative}.paris21_modalwrapper .paris21_modal .modal_title .modal_closebt[data-v-7675ee04]{position:absolute;right:30px;bottom:-5px;cursor:pointer;background:url(" + escape(__webpack_require__("Ehvn")) + ") no-repeat 0 0;width:60px;height:60px}.paris21_modalwrapper .paris21_modal .modal_content[data-v-7675ee04]{color:#2f2f2f;text-align:left;margin:20px 50px;padding-right:10px;height:370px;overflow:auto;font-family:montserratregular;font-size:14px;line-height:20px;text-align:center}.paris21_modalwrapper .paris21_modal .modal_content a[data-v-7675ee04]{color:#ea6550;text-decoration:none;font-family:montserratbold;display:inline-block;border-bottom:2px solid #ea6550;line-height:16px}.paris21_modalwrapper .paris21_modal .modal_content p[data-v-7675ee04]{margin:40px 0;text-align:left}.paris21_modalwrapper .paris21_modal .modal_content .content_image[data-v-7675ee04]{background:url(" + escape(__webpack_require__("uv/c")) + ") no-repeat 0 0;background-size:100% 100%;width:350px;height:350px;display:inline-block}.paris21_modalwrapper .paris21_modal .modal_content .bolder[data-v-7675ee04]{font-family:montserratbold}", ""]);

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
          attrs: { "data-item": "about" },
          on: {
            click: function($event) {
              _vm.emitAboutModal()
            }
          }
        },
        [_c("span", { staticClass: "item_label" }, [_vm._v("About")])]
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
        return 'about';
      }
    }
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
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

/***/ "gAP1":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("kxFB");
exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:montserratbold;src:url(" + escape(__webpack_require__("KoCO")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("cqiT")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratitalic;src:url(" + escape(__webpack_require__("hPgA")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("hnDx")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratregular;src:url(" + escape(__webpack_require__("UBI+")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("dL9s")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:roboto_condensedbold;src:url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff\");font-weight:400;font-style:normal}#Flagship{background:#ededed;background:-webkit-gradient(linear,left top,left bottom,from(#ededed),to(#dedede));background:linear-gradient(180deg,#ededed 0,#dedede);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#ededed\",endColorstr=\"#dedede\",GradientType=0)}#Flagship .page_main{min-height:400px}#Flagship .page_main .main_wrapper{display:inline-block;vertical-align:top;width:300px;margin:60px 0}#Flagship .flagship_cover{background:url(" + escape(__webpack_require__("pMKF")) + ") no-repeat 0 0;background-size:100% 100%;width:300px;height:429px;cursor:pointer;display:inline-block;-webkit-box-shadow:0 0 100px 0 #8c8c8c;box-shadow:0 0 100px 0 #8c8c8c}#Flagship .flagship_disclaimer{color:#2f2f2f;margin:14px 0}#Flagship .flagship_bt{background:#ea6550;text-transform:uppercase;color:#fff;border-radius:20px;display:inline-block;padding:10px 20px;cursor:pointer;font-family:roboto_condensedbold;text-decoration:none;margin-top:14px}#Flagship .flagship_bt:hover{background:#2f2f2f}", ""]);

// exports


/***/ }),

/***/ "gNV7":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1mYWNlYm9vayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzAgMzAiPgogIDx0aXRsZT5pY29uLWZhY2Vib29rPC90aXRsZT4KICA8cGF0aCBkPSJNMTUuNTc4LDIxLjk3VjE1LjEyNzRoMi4yOTY3bC4zNDM4LTIuNjY2NUgxNS41NzhWMTAuNzU4NGMwLS43NzIuMjE0NC0xLjI5ODIsMS4zMjE1LTEuMjk4MmwxLjQxMi0uMDAwNlY3LjA3NDdBMTguODkzMiwxOC44OTMyLDAsMCwwLDE2LjI1MzksNi45N2EzLjIxMjksMy4yMTI5LDAsMCwwLTMuNDMsMy41MjQ4djEuOTY2NUgxMC41MjE4djIuNjY2NWgyLjMwMjVWMjEuOTdaIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "jx3d":
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
      displayAboutModal: false
    };
  },
  mounted: function mounted() {},
  methods: {}
});

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
    }
  }
});

/***/ }),

/***/ "np6M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_false_presets_env_modules_false_targets_browsers_1_last_2_versions_not_ie_8_stage_2_plugins_transform_vue_jsx_transform_runtime_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("jx3d");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e24a4a0_hasScoped_false_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("334W");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("PW3F")
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e24a4a0_hasScoped_false_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "pages/report/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e24a4a0", Component.options)
  } else {
    hotAPI.reload("data-v-4e24a4a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "oYva":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZHJvcGRvd24tYXJyb3ciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwIDUiPgogIDx0aXRsZT5kcm9wZG93bi1hcnJvdzwvdGl0bGU+CiAgPHBvbHlnb24gcG9pbnRzPSIwIDAgNSA1IDEwIDAgMCAwIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "pMKF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/flagship_report-cover2@2x.1daf645.png";

/***/ }),

/***/ "r09Y":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("kxFB");
exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:montserratbold;src:url(" + escape(__webpack_require__("KoCO")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("cqiT")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratitalic;src:url(" + escape(__webpack_require__("hPgA")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("hnDx")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:montserratregular;src:url(" + escape(__webpack_require__("UBI+")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("dL9s")) + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:roboto_condensedbold;src:url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff2\"),url(" + escape(__webpack_require__("CCFM")) + ") format(\"woff\");font-weight:400;font-style:normal}.paris21_header[data-v-bb0958e8]{position:fixed;left:0;width:100%;top:0;height:50px;background:#fff;z-index:10000;text-align:center;-webkit-box-shadow:0 10px 60px 0 rgba(47,47,47,.4);box-shadow:0 10px 60px 0 rgba(47,47,47,.4)}.paris21_header .header_wrapper[data-v-bb0958e8]{width:100%;height:100%;max-width:1000px;display:inline-block;vertical-align:top;position:relative}.paris21_header .menu_desktop[data-v-bb0958e8]{display:inline-block}.paris21_header .header_logo[data-v-bb0958e8]{position:absolute;left:10px;top:10px;background:url(" + escape(__webpack_require__("awZ5")) + ") no-repeat 0 0;width:65px;height:75px;cursor:pointer}.paris21_header .header_logo[data-v-bb0958e8]:after{position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);top:0;content:\"\";background:url(" + escape(__webpack_require__("Ptdr")) + ") no-repeat 0 0;background-size:100% 100%;width:80px;height:52px;margin-left:-8px}.paris21_header .header_logo .logo_text[data-v-bb0958e8]{font-family:montserratitalic;font-size:13px;color:#81b1b1;line-height:14px;position:absolute;top:12px;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:80px;text-align:left;width:140px}.paris21_header .header_menu[data-v-bb0958e8]{position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:100%;line-height:46px}.paris21_header .header_menu .menu_mobile[data-v-bb0958e8]{display:none;position:relative}.paris21_header .header_menu .menu_mobile .mobile_submenu[data-v-bb0958e8]{position:fixed;right:0;top:50px;background:#2f2f2f;height:100vh;text-align:left;display:none;width:148px}.paris21_header .header_menu .menu_mobile .mobile_submenu.displayed[data-v-bb0958e8]{display:block}.paris21_header .header_menu .menu_mobile .mobile_submenu .menu_link[data-v-bb0958e8]{color:#fff;margin:0 14px;font-size:12px}.paris21_header .header_menu .menu_mobile .mobile_submenu .menu_link[data-v-bb0958e8]:after,.paris21_header .header_menu .menu_mobile .mobile_submenu .menu_link[data-v-bb0958e8]:before{display:none}.paris21_header .header_menu .menu_link[data-v-bb0958e8]{display:inline-block;vertical-align:top;margin:0 25px;color:#222;text-decoration:none;text-transform:uppercase;font-family:roboto_condensedbold;font-size:16px;position:relative}.paris21_header .header_menu .menu_link[data-v-bb0958e8]:after{content:\"\";position:absolute;left:50%;top:41px;-webkit-transform:translate(-50%);transform:translate(-50%);width:0;height:9px;background-color:#ea6550;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.paris21_header .header_menu .menu_link.selected[data-v-bb0958e8]{color:#ea6550}.paris21_header .header_menu .menu_link.selected[data-v-bb0958e8]:after{width:120%}.paris21_header .header_menu .menu_link.chipped[data-v-bb0958e8]:before{content:\"\";position:absolute;left:-25px;width:4px;height:4px;border-radius:4px;background:#ea6550;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.paris21_header .header_menu .menu_link[data-v-bb0958e8]:hover{color:#ea6550}.paris21_header .header_menu .menu_link[data-v-bb0958e8]:hover:after{width:120%}.paris21_header .header_menu .menu_langblock[data-v-bb0958e8]{background:#ea6550;font-family:roboto_condensedbold;width:50px;border-radius:20px;color:#fff;display:inline-block;vertical-align:top;margin-right:30px;margin-left:40px;padding-left:10px;position:relative;top:10px;height:24px;cursor:pointer;text-align:left;display:none}.paris21_header .header_menu .menu_langblock .langblock_head[data-v-bb0958e8]{display:block;float:left;vertical-align:top;height:24px;line-height:24px;position:relative;width:100%}.paris21_header .header_menu .menu_langblock .langblock_head[data-v-bb0958e8]:after{content:\"\";position:absolute;right:9px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:url(" + escape(__webpack_require__("oYva")) + ") no-repeat 0 0;background-size:100% 100%;width:10px;height:5px}.paris21_header .header_menu .menu_langblock .langblock_items[data-v-bb0958e8]{padding:0 0 5px;display:block;float:left;vertical-align:top;width:100%;line-height:24px}.paris21_header .header_menu .menu_langblock .langblock_items .langblock_item[data-v-bb0958e8]{color:#ea6550;width:100%;float:left;height:24px;line-height:24px;display:inline-block;vertical-align:top}.paris21_header .header_menu .menu_langblock .langblock_items .langblock_item[data-v-bb0958e8]:hover{color:#fff}.paris21_header .header_menu .menu_langblock[data-selected=true][data-v-bb0958e8]{background:#2f2f2f;height:auto;border-radius:10px}", ""]);

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
    emitAboutModal: function emitAboutModal() {
      this.$emit('aboutModal');
    }
  }
});

/***/ })

});