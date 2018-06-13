(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueLaravelPagination"] = factory();
	else
		root["VueLaravelPagination"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VueLaravelPagination = __webpack_require__(1);

var _VueLaravelPagination2 = _interopRequireDefault(_VueLaravelPagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _VueLaravelPagination2.default;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_VueLaravelPagination_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_VueLaravelPagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_VueLaravelPagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4362b346_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_VueLaravelPagination_vue__ = __webpack_require__(4);
var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_VueLaravelPagination_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4362b346_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_VueLaravelPagination_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/VueLaravelPagination.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4362b346", Component.options)
  } else {
    hotAPI.reload("data-v-4362b346", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        resourceUrl: {
            type: String,
            required: true
        },
        options: {
            type: Object,
            required: false,
            default: function _default() {
                return {};
            }
        },
        axios: {
            required: false,
            default: function _default() {
                return window.axios;
            }
        },
        bus: {
            type: Object,
            default: function _default() {
                return VueBus || {
                    $on: function $on() {}
                };
            }
        }
    },
    created: function created() {
        var _this = this;

        this.updateConfig(true);

        this.bus.$on('update-pagination-items', function (page) {
            page = page || _this.current_page;
            _this.fetchData(_this.resourceUrl + '?page=' + page);
        });

        if (this.historyModeEnabled) {
            window.onpopstate = this.handleBrowserBackButton;

            var query = [];

            Object.keys(this.$route.query).forEach(function (key) {
                query.push(key + '=' + _this.convertBooleanToInteger(_this.$route.query[key]));
            });

            this.fetchData(this.resourceUrl + '?' + query.join('&'));
        } else {
            this.fetchData();
        }
    },
    data: function data() {
        return {
            current_page: '',
            last_page: '',
            next_page_url: '',
            prev_page_url: '',
            config: {
                remote_data: 'data',
                remote_current_page: 'current_page',
                remote_last_page: 'last_page',
                remote_next_page_url: 'next_page_url',
                remote_prev_page_url: 'prev_page_url',
                previous_button_text: '&laquo;',
                next_button_text: '&raquo;',
                onEachSide: 3,
                historyMode: false,
                divider: '...',
                hideIfEmpty: true,
                params: {},
                headers: {},
                convertBooleanToInteger: false
            }
        };
    },

    methods: {
        fetchData: function fetchData(pageUrl) {
            var _this2 = this;

            var _transformPageUrl = this.transformPageUrl(pageUrl),
                url = _transformPageUrl.url,
                params = _transformPageUrl.params;

            params = Object.assign({}, this.config.params, params);

            var queryParams = {};

            Object.keys(params).forEach(function (key) {
                if (params[key] !== undefined && typeof params[key] !== 'undefined' && params[key] !== null) {
                    queryParams[key] = _this2.convertBooleanToInteger(params[key]);
                }
            });

            this.$emit('beforeRequest');

            this.axios.get(url, { headers: this.config.headers, params: queryParams }).then(function (_ref) {
                var data = _ref.data;

                _this2.handleResponseData(data);
                _this2.pushHistory(queryParams);
            }).catch(function (response) {
                _this2.$emit('failed', response);
            });
        },
        handleResponseData: function handleResponseData(response) {
            this.makePagination(response);
            var data = this.getNestedValue(response, this.config.remote_data);
            this.$emit('update', data);
        },
        pushHistory: function pushHistory(query) {
            if (this.historyModeEnabled) {
                this.$router.push({ query: query });
            }
        },
        makePagination: function makePagination(data) {
            this.current_page = this.getNestedValue(data, this.config.remote_current_page);
            this.last_page = this.getNestedValue(data, this.config.remote_last_page);

            this.next_page_url = this.current_page === this.last_page ? null : this.getNestedValue(data, this.config.remote_next_page_url);

            this.prev_page_url = this.current_page === 1 ? null : this.getNestedValue(data, this.config.remote_prev_page_url);
        },
        updateConfig: function updateConfig() {
            var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            this.config = Object.assign({}, this.config, this.$options.config || {}, this.options);

            if (this.historyModeEnabled) {
                if (initial) {
                    this.config.params = Object.assign({}, this.config.params, this.$route.query);
                } else {
                    this.config.params = Object.assign({}, this.$route.query, this.config.params);
                }
            }
        },
        transformPageUrl: function transformPageUrl(pageUrl) {
            pageUrl = pageUrl || this.resourceUrl;
            var splitUrl = pageUrl.split('?');

            if (splitUrl.length === 2) {
                var queries = splitUrl[1].split('&');
                var params = {};

                queries.forEach(function (query) {
                    query = query.split('=');
                    params[query[0]] = query[1];
                });

                return {
                    url: splitUrl[0],
                    params: params
                };
            }

            return { url: splitUrl[0], params: {} };
        },
        getNestedValue: function getNestedValue(object, path) {
            if (!path) {
                return object;
            }

            var originalPath = path;
            path = path.split('.');
            var response = object;

            for (var i = 0; i < path.length; i++) {
                response = response[path[i]];
            }

            if (typeof response === 'undefined') {
                console.log('[VueJsLaravelPagination] Response doesn\'t contain key ' + originalPath + '!');
            }

            return response;
        },
        convertBooleanToInteger: function convertBooleanToInteger(value) {
            if (!this.config.convertBooleanToInteger || typeof value !== 'boolean') {
                return value;
            }

            return +value;
        },
        handleBrowserBackButton: function handleBrowserBackButton(event) {
            if (this.$route.path === event.target.location.pathname) {
                var path = this.$route.fullPath.split('?');

                if (path.length < 2) {
                    this.fetchData();
                } else {
                    this.fetchData(this.resourceUrl + '?' + path.pop());
                }
            }
        }
    },
    computed: {
        elements: function elements() {
            var onEachSide = this.config.onEachSide;
            var divider = this.config.divider;
            var elements = [];

            // First case.
            if (this.last_page < onEachSide * 2 + 6) {
                for (var i = 1; i <= this.last_page; i++) {
                    elements.push({
                        key: i,
                        item: this.resourceUrl + '?page=' + i
                    });
                }

                return elements;
            }

            var onSides = onEachSide * 2;

            // Second case.
            if (this.current_page <= onSides) {
                for (var _i = 1; _i <= onSides + 2; _i++) {
                    elements.push({
                        key: _i,
                        item: this.resourceUrl + '?page=' + _i
                    });
                }

                elements.push({ key: 'divider', item: divider });

                for (var _i2 = this.last_page - 1; _i2 <= this.last_page; _i2++) {
                    elements.push({
                        key: _i2,
                        item: this.resourceUrl + '?page=' + _i2
                    });
                }

                return elements;
            }

            // Third case.
            if (this.current_page > this.last_page - onSides) {
                for (var _i3 = 1; _i3 <= 2; _i3++) {
                    elements.push({
                        key: _i3,
                        item: this.resourceUrl + '?page=' + _i3
                    });
                }

                elements.push({ key: 'divider', item: divider });

                for (var _i4 = this.last_page - (onSides + 2); _i4 <= this.last_page; _i4++) {
                    elements.push({
                        key: _i4,
                        item: this.resourceUrl + '?page=' + _i4
                    });
                }

                return elements;
            }

            // Fourth case.
            for (var _i5 = 1; _i5 <= 2; _i5++) {
                elements.push({
                    key: _i5,
                    item: this.resourceUrl + '?page=' + _i5
                });
            }

            elements.push({ key: 'divider', item: divider });

            for (var _i6 = this.current_page - onEachSide; _i6 <= this.current_page + onEachSide; _i6++) {
                elements.push({
                    key: _i6,
                    item: this.resourceUrl + '?page=' + _i6
                });
            }

            elements.push({ key: 'divider', item: divider });

            for (var _i7 = this.last_page - 1; _i7 <= this.last_page; _i7++) {
                elements.push({
                    key: _i7,
                    item: this.resourceUrl + '?page=' + _i7
                });
            }

            return elements;
        },
        historyModeEnabled: function historyModeEnabled() {
            return !!(this.config.historyMode && this.$router);
        }
    },
    watch: {
        resourceUrl: function resourceUrl() {
            this.fetchData();
        },


        options: {
            handler: function handler() {
                this.updateConfig();
            },

            deep: true
        }
    }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value:
            !_vm.config.hideIfEmpty ||
            !(
              _vm.config.hideIfEmpty &&
              !_vm.next_page_url &&
              !_vm.prev_page_url
            ),
          expression:
            "!config.hideIfEmpty || !(config.hideIfEmpty && !next_page_url && !prev_page_url)"
        }
      ],
      staticClass: "pagination vl-pagination"
    },
    [
      _c("li", { class: { disabled: _vm.current_page == 1 } }, [
        _vm.current_page == 1
          ? _c("span", {
              domProps: { innerHTML: _vm._s(_vm.config.previous_button_text) }
            })
          : _c("a", {
              attrs: { href: "#", rel: "prev" },
              domProps: { innerHTML: _vm._s(_vm.config.previous_button_text) },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.fetchData(_vm.prev_page_url)
                }
              }
            })
      ]),
      _vm._v(" "),
      _vm._l(_vm.elements, function(el) {
        return _c(
          "li",
          {
            class: {
              disabled: el.key == "divider",
              active: el.key == _vm.current_page
            }
          },
          [
            el.key == _vm.current_page
              ? _c("span", [_vm._v(_vm._s(el.key))])
              : el.key === "divider"
                ? _c("span", [_vm._v(_vm._s(el.item))])
                : _c(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.fetchData(el.item)
                        }
                      }
                    },
                    [_vm._v(_vm._s(el.key))]
                  )
          ]
        )
      }),
      _vm._v(" "),
      _c("li", { class: { disabled: _vm.current_page == _vm.last_page } }, [
        _vm.current_page < _vm.last_page
          ? _c("a", {
              attrs: { href: "#", rel: "next" },
              domProps: { innerHTML: _vm._s(_vm.config.next_button_text) },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.fetchData(_vm.next_page_url)
                }
              }
            })
          : _c("span", {
              domProps: { innerHTML: _vm._s(_vm.config.next_button_text) }
            })
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4362b346", esExports)
  }
}

/***/ })
/******/ ]);
});