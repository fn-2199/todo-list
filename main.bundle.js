/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body,\nh1,\nh2,\np,\nul,\nli {\n    margin: 0;\n    padding: 0;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    font-family: 'Inter', sans-serif;\n    background: var(--light-color);\n    display: grid;\n    grid-template-rows: 6rem 1fr;\n    grid-template-columns: 18rem 1fr;\n}\n\n:root {\n    --dark-color: #002447;\n    --light-color: #FFFFFF;\n    --main-color: #FEB249;\n    --light-grey: #EEEEEE;\n    --medium-grey: #BBBBBB;\n    --dark-grey: #888888;\n}\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 1.5rem;\n    background: var(--dark-color);\n    color: white;\n    padding: 0 20px;\n    grid-column: 1/-1;\n    grid-row: 1/2;\n}\n\n.material-icons-round.md-36 {\n    font-size: 36px;\n}\n\nh1 {\n    padding: 10px;\n}\n\nnav {\n    background-color: var(--light-grey);\n    grid-row: 2/-1;\n    grid-column: 1/2;\n    padding: 25px;\n}\n\n/* Tab Pages */\nmain {\n    background: var(--light-color);\n    grid-row: 2/-1;\n    grid-column: 2/-1;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    padding: 40px;\n}\n\nmain h2 {\n    padding: 10px;\n    border-radius: 0.5rem;\n    font-size: 2.5rem;\n    background-color: var(--light-grey);\n}\n\n.task-container {\n    margin-top: 15px;\n}\n\n\nbody.collapse nav {\n    transform: translateX(-100%);\n}\n\nbody.collapse main {\n    grid-column: 1/-1;\n}\n\n#home h2,\n#projects h2 {\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n    border-bottom: 2px solid var(--dark-grey);\n}\n\n.tab {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 8px 5px;\n}\n\n/* Project Tab */\n\n.delete{\n    margin-left: auto;\n    \n}\n\n.delete span {\n    visibility: hidden;\n}\n\n.delete:hover span {\n    visibility: visible;\n}\n\n#projects {\n    margin-top: 40px;\n}\n\n.tab:hover,\n.selected {\n    background: var(--medium-grey);\n    border-radius: 10px;\n}\n\nul {\n    list-style: none;\n}\n\n.material-icons-round.md-36,\n.tab,\nbutton,\n.close-button {\n    cursor: pointer;\n}\n\n/* MODALS */\n.modal {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    opacity: 0;\n    visibility: hidden;\n    transform: scale(1.1);\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.modal-content {\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    color: var(--dark-color);\n    padding: 1rem 1.5rem;\n    width: 24rem;\n    border-radius: 0.5rem;\n    margin: 0 auto;\n}\n\n.close-button {\n    float: right;\n    font-size: 1.5rem;\n    line-height: 1.5rem;\n    text-align: center;\n}\n\n.close-button:hover {\n    color: black;\n}\n\n.show-modal {\n    opacity: 1;\n    visibility: visible;\n    transform: scale(1.0);\n    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n/* Modal Form */\n\ninput, select, textarea {\n    /* -webkit-transition: all 0.30s ease-in-out;\n    -moz-transition: all 0.30s ease-in-out;\n    -ms-transition: all 0.30s ease-in-out;\n    -o-transition: all 0.30s ease-in-out; */\n    transition: all 0.30s ease-in-out;\n    outline: none;\n    padding: 3px 0px 3px 3px;\n    margin: 5px 1px 3px 0px;\n    border-radius: 0.5rem;\n\n    width: 100%;\n    border: 1px solid var(--medium-grey);\n    font-size: inherit;\n}\n   \ninput:focus, select:focus, textarea:focus {\n    box-shadow: 0 0 5px rgba(81, 203, 238, 1);\n    border: 1px solid rgba(81, 203, 238, 1);\n}\n\ninput, textarea, select, button {\n    font-family: inherit;\n}\n\nselect {\n    background: none;\n}\n\nform div {\n    margin: 10px 0;\n}\n\nform h2 {\n    padding-bottom: 1rem;\n    margin-bottom: 1rem;\n    border-bottom: 1px solid var(--dark-grey);\n}\n\n.buttons {\n    display: flex;\n    justify-content: flex-end;\n    gap: 10px;\n}\n\nbutton {\n    background: none;\n    border: none;\n    padding: 0;\n    font-size: 1rem;\n    padding: 10px 10px;\n    border-radius: 0.5rem;\n}\n\nbutton[type='submit'] {\n    background-color: var(--dark-color);\n    color: white;\n    border: 1px solid var(--dark-color);\n}\n\nbutton[type='button'] {\n    border: 1px solid black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;;;;IAMI,SAAS;IACT,UAAU;AACd;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,8BAA8B;IAC9B,aAAa;IACb,4BAA4B;IAC5B,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;IACrB,sBAAsB;IACtB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,6BAA6B;IAC7B,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mCAAmC;IACnC,cAAc;IACd,gBAAgB;IAChB,aAAa;AACjB;;AAEA,cAAc;AACd;IACI,8BAA8B;IAC9B,cAAc;IACd,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,iBAAiB;IACjB,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;AACpB;;;AAGA;IACI,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,oBAAoB;IACpB,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,gBAAgB;AACpB;;AAEA,gBAAgB;;AAEhB;IACI,iBAAiB;;AAErB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;;;IAII,eAAe;AACnB;;AAEA,WAAW;AACX;IACI,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,UAAU;IACV,kBAAkB;IAClB,qBAAqB;IACrB,yEAAyE;AAC7E;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,wBAAwB;IACxB,oBAAoB;IACpB,YAAY;IACZ,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,qBAAqB;IACrB,sEAAsE;AAC1E;;AAEA,eAAe;;AAEf;IACI;;;2CAGuC;IACvC,iCAAiC;IACjC,aAAa;IACb,wBAAwB;IACxB,uBAAuB;IACvB,qBAAqB;;IAErB,WAAW;IACX,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,yCAAyC;IACzC,uCAAuC;AAC3C;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,UAAU;IACV,eAAe;IACf,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,mCAAmC;IACnC,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');\n\nbody,\nh1,\nh2,\np,\nul,\nli {\n    margin: 0;\n    padding: 0;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    font-family: 'Inter', sans-serif;\n    background: var(--light-color);\n    display: grid;\n    grid-template-rows: 6rem 1fr;\n    grid-template-columns: 18rem 1fr;\n}\n\n:root {\n    --dark-color: #002447;\n    --light-color: #FFFFFF;\n    --main-color: #FEB249;\n    --light-grey: #EEEEEE;\n    --medium-grey: #BBBBBB;\n    --dark-grey: #888888;\n}\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 1.5rem;\n    background: var(--dark-color);\n    color: white;\n    padding: 0 20px;\n    grid-column: 1/-1;\n    grid-row: 1/2;\n}\n\n.material-icons-round.md-36 {\n    font-size: 36px;\n}\n\nh1 {\n    padding: 10px;\n}\n\nnav {\n    background-color: var(--light-grey);\n    grid-row: 2/-1;\n    grid-column: 1/2;\n    padding: 25px;\n}\n\n/* Tab Pages */\nmain {\n    background: var(--light-color);\n    grid-row: 2/-1;\n    grid-column: 2/-1;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    padding: 40px;\n}\n\nmain h2 {\n    padding: 10px;\n    border-radius: 0.5rem;\n    font-size: 2.5rem;\n    background-color: var(--light-grey);\n}\n\n.task-container {\n    margin-top: 15px;\n}\n\n\nbody.collapse nav {\n    transform: translateX(-100%);\n}\n\nbody.collapse main {\n    grid-column: 1/-1;\n}\n\n#home h2,\n#projects h2 {\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n    border-bottom: 2px solid var(--dark-grey);\n}\n\n.tab {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 8px 5px;\n}\n\n/* Project Tab */\n\n.delete{\n    margin-left: auto;\n    \n}\n\n.delete span {\n    visibility: hidden;\n}\n\n.delete:hover span {\n    visibility: visible;\n}\n\n#projects {\n    margin-top: 40px;\n}\n\n.tab:hover,\n.selected {\n    background: var(--medium-grey);\n    border-radius: 10px;\n}\n\nul {\n    list-style: none;\n}\n\n.material-icons-round.md-36,\n.tab,\nbutton,\n.close-button {\n    cursor: pointer;\n}\n\n/* MODALS */\n.modal {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    opacity: 0;\n    visibility: hidden;\n    transform: scale(1.1);\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.modal-content {\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    color: var(--dark-color);\n    padding: 1rem 1.5rem;\n    width: 24rem;\n    border-radius: 0.5rem;\n    margin: 0 auto;\n}\n\n.close-button {\n    float: right;\n    font-size: 1.5rem;\n    line-height: 1.5rem;\n    text-align: center;\n}\n\n.close-button:hover {\n    color: black;\n}\n\n.show-modal {\n    opacity: 1;\n    visibility: visible;\n    transform: scale(1.0);\n    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n/* Modal Form */\n\ninput, select, textarea {\n    /* -webkit-transition: all 0.30s ease-in-out;\n    -moz-transition: all 0.30s ease-in-out;\n    -ms-transition: all 0.30s ease-in-out;\n    -o-transition: all 0.30s ease-in-out; */\n    transition: all 0.30s ease-in-out;\n    outline: none;\n    padding: 3px 0px 3px 3px;\n    margin: 5px 1px 3px 0px;\n    border-radius: 0.5rem;\n\n    width: 100%;\n    border: 1px solid var(--medium-grey);\n    font-size: inherit;\n}\n   \ninput:focus, select:focus, textarea:focus {\n    box-shadow: 0 0 5px rgba(81, 203, 238, 1);\n    border: 1px solid rgba(81, 203, 238, 1);\n}\n\ninput, textarea, select, button {\n    font-family: inherit;\n}\n\nselect {\n    background: none;\n}\n\nform div {\n    margin: 10px 0;\n}\n\nform h2 {\n    padding-bottom: 1rem;\n    margin-bottom: 1rem;\n    border-bottom: 1px solid var(--dark-grey);\n}\n\n.buttons {\n    display: flex;\n    justify-content: flex-end;\n    gap: 10px;\n}\n\nbutton {\n    background: none;\n    border: none;\n    padding: 0;\n    font-size: 1rem;\n    padding: 10px 10px;\n    border-radius: 0.5rem;\n}\n\nbutton[type='submit'] {\n    background-color: var(--dark-color);\n    color: white;\n    border: 1px solid var(--dark-color);\n}\n\nbutton[type='button'] {\n    border: 1px solid black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateUI)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");



function generateUI() {
    // Factory Function for Tab Creation
    const pages = (title, icon, link) => {
        return {title, icon, link};
    }

    // Factory Function for Form Elements
    const formElements = (camelCase, stringLabel, element, misc) => {
        return {camelCase, stringLabel, element, misc}
    }
    // Function for Toggle Menu
    function toggleNav() {
        document.body.classList.toggle('collapse');
    }

    // Generate Form
    function generateForm() {
        if (modalContainer.childElementCount == 2) {(modalContainer.firstChild.nextSibling).remove()};
        document.querySelector('.modal').classList.add('show-modal');

        // Initialize Form
        const modalForm = document.createElement('form');
        modalForm.action = '#';
        modalForm.method = 'post';
        modalForm.id = (this.title.replace(/\s/g, '')).toLowerCase() + 'Form';
        const formTitle = document.createElement('h2');
        formTitle.textContent = this.title;
        modalForm.appendChild(formTitle);

        (this.title == 'Add Project') ? this.array = newProject : this.array = newTaskArray;

        // Generate Form Elements
        for (let divElement of this.array) {
            const div = document.createElement('div');
            const label = document.createElement('label');
            label.textContent = divElement.stringLabel;

            const element = document.createElement(`${divElement.element}`);
            element.setAttribute('required', '');
            element.name = divElement.camelCase;

            if (divElement.element == 'input') {
                element.type = divElement.misc;
            } else if (divElement.element == 'select') {
                for (let value of divElement.misc) {
                    const option = document.createElement('option');
                    option.value = value.toLowerCase();
                    option.textContent = value;
                    element.appendChild(option);
                }
            }

            label.appendChild(element);
            div.appendChild(label);
            modalForm.appendChild(div);
        }

        // Generate Buttons
        const buttons = document.createElement('div');
        buttons.classList.add('buttons');

        [{type: 'button', text: 'Cancel'}, {type: 'submit', text: `${this.title}`}].forEach((btn) => {
            const button = document.createElement('button');
            button.type = btn.type;
            button.textContent = btn.text;
            if (btn.type == 'button') {button.onclick = closeModal};
            buttons.appendChild(button);
        });

        // Submit Button Function
        modalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            (e.target.id == 'addprojectForm') ? addProject() : addNewTask();
            closeModal();
        });

        modalForm.appendChild(buttons);
        modalContainer.appendChild(modalForm);
    };

    // Add Project Button Function
    function addProject() {
        let projectName = document.getElementsByName("projectName")[0].value; //Grabs value from Form
        _logic__WEBPACK_IMPORTED_MODULE_1__.projectsArray.push(projectName); //Push to Project Array
        const newProject = pages(projectName, 'list', generateTab); //Creates Tab Object
        projectsPagesArray.splice(-1, 0, newProject); //Appends it to Projects Category
        displayTabs(categoryNodeList[1], [newProject]);
    }

    // Add New Task Button Function
    function addNewTask() {
        const title = document.getElementsByName("taskTitle")[0].value;
        const description = document.getElementsByName("taskDescription")[0].value;
        const dueDate = document.getElementsByName("dueDate")[0].value;
        const priority = document.getElementsByName("priority")[0].value;
        const project = document.getElementsByName("project")[0].value;

        _logic__WEBPACK_IMPORTED_MODULE_1__.taskArray.push((0,_logic__WEBPACK_IMPORTED_MODULE_1__.taskObject)(title, description, dueDate, priority, project));
        console.log(_logic__WEBPACK_IMPORTED_MODULE_1__.taskArray);
    }

    // Generate Tab Page
    function generateTab() {
        activateEffect.call(this);

        main.textContent = '';
        const tabContainer = document.createElement('div');
        const tabTitle = document.createElement('h2');
        tabTitle.textContent = this.title;
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        if (taskContainer.textContent == '') {taskChecker(taskContainer)};
        tabContainer.append(tabTitle, taskContainer);
        main.appendChild(tabContainer);
    }

    function activateEffect() {
        for (let tab of tabsNodeList) (this.title == tab.firstChild.nextSibling.textContent) ? tab.classList.add('selected') : tab.classList.remove('selected');
    }

    function taskChecker(element) {
        element.textContent = "You do not have any task.";
    }

    // Arrays
    const homePagesArray = [pages('Inbox', 'inbox', generateTab), pages('Today', 'today', generateTab), pages('Upcoming', 'date_range', generateTab)];
    let projectsPagesArray = [pages('Add Project', 'add', generateForm)];
    const CATEGORY = [{category: 'Home', subcategory: homePagesArray}, {category: 'Projects', subcategory: projectsPagesArray}];
    const headerArray = [pages('Menu', 'menu', toggleNav), pages('Add New Task', 'add', generateForm)];

    // Modal Form Arrays
    const priorityArray = ['Low', 'Medium', 'High'];

    const newTaskArray = [formElements('taskTitle', 'Title', 'input', 'text'), formElements('taskDescription', 'Description', 'textarea', ''), formElements('dueDate', 'Due Date', 'input', 'datetime-local'), formElements('priority', 'Priority', 'select', priorityArray), formElements('project', 'Project', 'select', _logic__WEBPACK_IMPORTED_MODULE_1__.projectsArray)];
    const newProject = [formElements('projectName', 'Name', 'input', 'text')];

    // Generate Main Layout Components
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = document.title;
    header.append(h1);
    const main = document.createElement('main');
    const menu = document.createElement('nav');

    // Generate Header Icons
    for (let item of headerArray) {
        const headerIcon = document.createElement('span');
        headerIcon.classList.add('material-icons-round', 'md-36');
        headerIcon.id = headerIcon.textContent = item.icon;
        headerIcon.onclick = item.link.bind(item);
        (item.icon == 'menu') ? header.insertBefore(headerIcon, h1) : header.append(headerIcon);
    }

    // Node References
    let tabsNodeList = [];
    let categoryNodeList = [];
    let addProjectNode;

    // Generate Nav/Sidebar Content
    CATEGORY.forEach((cat) => {
        const catContainer = document.createElement('ul');
        catContainer.id = cat.category.toLowerCase();
        menu.appendChild(catContainer);

        const catName = document.createElement('h2');
        catName.textContent = cat.category;
        catContainer.appendChild(catName);

        categoryNodeList.push(catContainer);
        displayTabs(catContainer, cat.subcategory);
    })

    // Generate Tabs
    function displayTabs(nodeContainer, array) {
        for (let tab of array) {
            const tabKey = document.createElement('li');
            tabKey.classList.add('tab');

            const tabName = document.createElement('p');
            tabName.textContent = tab.title;

            const tabIcon = document.createElement('span');
            tabIcon.classList.add('material-icons-round');
            tabIcon.textContent = tab.icon;

            tabKey.onclick = tab.link.bind(tab);
            (tab.title == 'Add Project') ? addProjectNode = tabKey : tabsNodeList.push(tabKey);

            tabKey.append(tabIcon, tabName);

            if (nodeContainer.contains(addProjectNode)) {
                generateDelete(tabKey); 
                nodeContainer.insertBefore(tabKey, addProjectNode);
            } else {nodeContainer.appendChild(tabKey)};
        }
    }

    // Generate Tab's Delete Button
    function generateDelete(tabKey) {
        const deleteContainer = document.createElement('span');
        deleteContainer.classList.add('delete');
        const deleteBtn = document.createElement('span');
        deleteBtn.classList.add('material-icons-round');
        deleteBtn.textContent = 'close';
        deleteBtn.onclick = deleteFunc;
        deleteContainer.appendChild(deleteBtn);
        tabKey.appendChild(deleteContainer);
    }

    // Delete Function
    function deleteFunc(e) {
        e.stopPropagation();
        for (let i = 3; i < tabsNodeList.length; i++) {
            if (e.target.parentNode.parentNode == tabsNodeList[i]) {
                (e.target.parentNode.parentNode).remove();
                break;
            }
        }
        
    }

    // Generate Modal
    const modalBg = document.createElement('div');
    modalBg.classList.add('modal');

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-content');

    const exitBtn = document.createElement('span');
    exitBtn.classList.add('close-button');
    exitBtn.textContent = '×';

    modalContainer.append(exitBtn);
    modalBg.append(modalContainer);

    // Exit Modal Function
    exitBtn.addEventListener("click", closeModal);
    window.addEventListener("click", function(e) {if(e.target == modalBg) closeModal()})
    function closeModal() {modalBg.classList.remove("show-modal")};

    // Generate Main Tab
    generateTab.call(homePagesArray[0]);
    
    document.body.append(header, menu, main, modalBg);
};

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray),
/* harmony export */   "taskArray": () => (/* binding */ taskArray),
/* harmony export */   "taskObject": () => (/* binding */ taskObject)
/* harmony export */ });
let projectsArray = ['Inbox'];

const taskObject = (title, description, dueDate, priority, project) => {
    return {title, description, dueDate, priority, project};
}

let taskArray = [];



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");


addEventListener('DOMContentLoaded', _UI__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRCxxQ0FBcUM7QUFDdkYsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdlBBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBOzs7Ozs7OztVQ05BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBc0I7O0FBRXRCLHFDQUFxQywyQ0FBRSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXImZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSxcXG5oMSxcXG5oMixcXG5wLFxcbnVsLFxcbmxpIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDZyZW0gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE4cmVtIDFmcjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWRhcmstY29sb3I6ICMwMDI0NDc7XFxuICAgIC0tbGlnaHQtY29sb3I6ICNGRkZGRkY7XFxuICAgIC0tbWFpbi1jb2xvcjogI0ZFQjI0OTtcXG4gICAgLS1saWdodC1ncmV5OiAjRUVFRUVFO1xcbiAgICAtLW1lZGl1bS1ncmV5OiAjQkJCQkJCO1xcbiAgICAtLWRhcmstZ3JleTogIzg4ODg4ODtcXG59XFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zLXJvdW5kLm1kLTM2IHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG5oMSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbm5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBncmlkLXJvdzogMi8tMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgcGFkZGluZzogMjVweDtcXG59XFxuXFxuLyogVGFiIFBhZ2VzICovXFxubWFpbiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgZ3JpZC1yb3c6IDIvLTE7XFxuICAgIGdyaWQtY29sdW1uOiAyLy0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbm1haW4gaDIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuXFxuYm9keS5jb2xsYXBzZSBuYXYge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG5cXG5ib2R5LmNvbGxhcHNlIG1haW4ge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuXFxuI2hvbWUgaDIsXFxuI3Byb2plY3RzIGgyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kYXJrLWdyZXkpO1xcbn1cXG5cXG4udGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDhweCA1cHg7XFxufVxcblxcbi8qIFByb2plY3QgVGFiICovXFxuXFxuLmRlbGV0ZXtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIFxcbn1cXG5cXG4uZGVsZXRlIHNwYW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5kZWxldGU6aG92ZXIgc3BhbiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbi50YWI6aG92ZXIsXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucy1yb3VuZC5tZC0zNixcXG4udGFiLFxcbmJ1dHRvbixcXG4uY2xvc2UtYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBNT0RBTFMgKi9cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4yNXMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICB3aWR0aDogMjRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZS1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaG93LW1vZGFsIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwcywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcbn1cXG5cXG4vKiBNb2RhbCBGb3JtICovXFxuXFxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xcbiAgICAvKiAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMwcyBlYXNlLWluLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zMHMgZWFzZS1pbi1vdXQ7XFxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zMHMgZWFzZS1pbi1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjMwcyBlYXNlLWluLW91dDsgKi9cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMzBzIGVhc2UtaW4tb3V0O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAzcHggMHB4IDNweCAzcHg7XFxuICAgIG1hcmdpbjogNXB4IDFweCAzcHggMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuICAgXFxuaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoODEsIDIwMywgMjM4LCAxKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg4MSwgMjAzLCAyMzgsIDEpO1xcbn1cXG5cXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbnNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbmZvcm0gZGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbmZvcm0gaDIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JleSk7XFxufVxcblxcbi5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbmJ1dHRvblt0eXBlPSdzdWJtaXQnXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstY29sb3IpO1xcbn1cXG5cXG5idXR0b25bdHlwZT0nYnV0dG9uJ10ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7Ozs7O0lBTUksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUEsY0FBYztBQUNkO0lBQ0ksOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUEsZ0JBQWdCOztBQUVoQjtJQUNJLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7OztJQUlJLGVBQWU7QUFDbkI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHlFQUF5RTtBQUM3RTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHNFQUFzRTtBQUMxRTs7QUFFQSxlQUFlOztBQUVmO0lBQ0k7OzsyQ0FHdUM7SUFDdkMsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjs7SUFFckIsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxucCxcXG51bCxcXG5saSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2cmVtIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOHJlbSAxZnI7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1kYXJrLWNvbG9yOiAjMDAyNDQ3O1xcbiAgICAtLWxpZ2h0LWNvbG9yOiAjRkZGRkZGO1xcbiAgICAtLW1haW4tY29sb3I6ICNGRUIyNDk7XFxuICAgIC0tbGlnaHQtZ3JleTogI0VFRUVFRTtcXG4gICAgLS1tZWRpdW0tZ3JleTogI0JCQkJCQjtcXG4gICAgLS1kYXJrLWdyZXk6ICM4ODg4ODg7XFxufVxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucy1yb3VuZC5tZC0zNiB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG59XFxuXFxuaDEge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgZ3JpZC1yb3c6IDIvLTE7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbi8qIFRhYiBQYWdlcyAqL1xcbm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGdyaWQtcm93OiAyLy0xO1xcbiAgICBncmlkLWNvbHVtbjogMi8tMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbn1cXG5cXG5tYWluIGgyIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcblxcbmJvZHkuY29sbGFwc2UgbmF2IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxuYm9keS5jb2xsYXBzZSBtYWluIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcblxcbiNob21lIGgyLFxcbiNwcm9qZWN0cyBoMiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXG59XFxuXFxuLnRhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiA4cHggNXB4O1xcbn1cXG5cXG4vKiBQcm9qZWN0IFRhYiAqL1xcblxcbi5kZWxldGV7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBcXG59XFxuXFxuLmRlbGV0ZSBzcGFuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uZGVsZXRlOmhvdmVyIHNwYW4ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4udGFiOmhvdmVyLFxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMtcm91bmQubWQtMzYsXFxuLnRhYixcXG5idXR0b24sXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTU9EQUxTICovXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMjVzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgd2lkdGg6IDI0cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2hvdy1tb2RhbCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMHMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXG59XFxuXFxuLyogTW9kYWwgRm9ybSAqL1xcblxcbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcXG4gICAgLyogLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zMHMgZWFzZS1pbi1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMzBzIGVhc2UtaW4tb3V0O1xcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMzBzIGVhc2UtaW4tb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zMHMgZWFzZS1pbi1vdXQ7ICovXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjMwcyBlYXNlLWluLW91dDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogM3B4IDBweCAzcHggM3B4O1xcbiAgICBtYXJnaW46IDVweCAxcHggM3B4IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcbiAgIFxcbmlucHV0OmZvY3VzLCBzZWxlY3Q6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoODEsIDIwMywgMjM4LCAxKTtcXG59XFxuXFxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG5mb3JtIGRpdiB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG5mb3JtIGgyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyZXkpO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG5idXR0b25bdHlwZT0nc3VibWl0J10ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uW3R5cGU9J2J1dHRvbiddIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge3Byb2plY3RzQXJyYXksIHRhc2tPYmplY3QsIHRhc2tBcnJheX0gZnJvbSAnLi9sb2dpYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVUkoKSB7XG4gICAgLy8gRmFjdG9yeSBGdW5jdGlvbiBmb3IgVGFiIENyZWF0aW9uXG4gICAgY29uc3QgcGFnZXMgPSAodGl0bGUsIGljb24sIGxpbmspID0+IHtcbiAgICAgICAgcmV0dXJuIHt0aXRsZSwgaWNvbiwgbGlua307XG4gICAgfVxuXG4gICAgLy8gRmFjdG9yeSBGdW5jdGlvbiBmb3IgRm9ybSBFbGVtZW50c1xuICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IChjYW1lbENhc2UsIHN0cmluZ0xhYmVsLCBlbGVtZW50LCBtaXNjKSA9PiB7XG4gICAgICAgIHJldHVybiB7Y2FtZWxDYXNlLCBzdHJpbmdMYWJlbCwgZWxlbWVudCwgbWlzY31cbiAgICB9XG4gICAgLy8gRnVuY3Rpb24gZm9yIFRvZ2dsZSBNZW51XG4gICAgZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNlJyk7XG4gICAgfVxuXG4gICAgLy8gR2VuZXJhdGUgRm9ybVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlRm9ybSgpIHtcbiAgICAgICAgaWYgKG1vZGFsQ29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50ID09IDIpIHsobW9kYWxDb250YWluZXIuZmlyc3RDaGlsZC5uZXh0U2libGluZykucmVtb3ZlKCl9O1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5jbGFzc0xpc3QuYWRkKCdzaG93LW1vZGFsJyk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBGb3JtXG4gICAgICAgIGNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgbW9kYWxGb3JtLmFjdGlvbiA9ICcjJztcbiAgICAgICAgbW9kYWxGb3JtLm1ldGhvZCA9ICdwb3N0JztcbiAgICAgICAgbW9kYWxGb3JtLmlkID0gKHRoaXMudGl0bGUucmVwbGFjZSgvXFxzL2csICcnKSkudG9Mb3dlckNhc2UoKSArICdGb3JtJztcbiAgICAgICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcbiAgICAgICAgbW9kYWxGb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG5cbiAgICAgICAgKHRoaXMudGl0bGUgPT0gJ0FkZCBQcm9qZWN0JykgPyB0aGlzLmFycmF5ID0gbmV3UHJvamVjdCA6IHRoaXMuYXJyYXkgPSBuZXdUYXNrQXJyYXk7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgRm9ybSBFbGVtZW50c1xuICAgICAgICBmb3IgKGxldCBkaXZFbGVtZW50IG9mIHRoaXMuYXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBkaXZFbGVtZW50LnN0cmluZ0xhYmVsO1xuXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtkaXZFbGVtZW50LmVsZW1lbnR9YCk7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgICAgICAgICBlbGVtZW50Lm5hbWUgPSBkaXZFbGVtZW50LmNhbWVsQ2FzZTtcblxuICAgICAgICAgICAgaWYgKGRpdkVsZW1lbnQuZWxlbWVudCA9PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC50eXBlID0gZGl2RWxlbWVudC5taXNjO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXZFbGVtZW50LmVsZW1lbnQgPT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiBkaXZFbGVtZW50Lm1pc2MpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBtb2RhbEZvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdlbmVyYXRlIEJ1dHRvbnNcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcblxuICAgICAgICBbe3R5cGU6ICdidXR0b24nLCB0ZXh0OiAnQ2FuY2VsJ30sIHt0eXBlOiAnc3VibWl0JywgdGV4dDogYCR7dGhpcy50aXRsZX1gfV0uZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi50eXBlID0gYnRuLnR5cGU7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBidG4udGV4dDtcbiAgICAgICAgICAgIGlmIChidG4udHlwZSA9PSAnYnV0dG9uJykge2J1dHRvbi5vbmNsaWNrID0gY2xvc2VNb2RhbH07XG4gICAgICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFN1Ym1pdCBCdXR0b24gRnVuY3Rpb25cbiAgICAgICAgbW9kYWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIChlLnRhcmdldC5pZCA9PSAnYWRkcHJvamVjdEZvcm0nKSA/IGFkZFByb2plY3QoKSA6IGFkZE5ld1Rhc2soKTtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9kYWxGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuICAgICAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbEZvcm0pO1xuICAgIH07XG5cbiAgICAvLyBBZGQgUHJvamVjdCBCdXR0b24gRnVuY3Rpb25cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInByb2plY3ROYW1lXCIpWzBdLnZhbHVlOyAvL0dyYWJzIHZhbHVlIGZyb20gRm9ybVxuICAgICAgICBwcm9qZWN0c0FycmF5LnB1c2gocHJvamVjdE5hbWUpOyAvL1B1c2ggdG8gUHJvamVjdCBBcnJheVxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcGFnZXMocHJvamVjdE5hbWUsICdsaXN0JywgZ2VuZXJhdGVUYWIpOyAvL0NyZWF0ZXMgVGFiIE9iamVjdFxuICAgICAgICBwcm9qZWN0c1BhZ2VzQXJyYXkuc3BsaWNlKC0xLCAwLCBuZXdQcm9qZWN0KTsgLy9BcHBlbmRzIGl0IHRvIFByb2plY3RzIENhdGVnb3J5XG4gICAgICAgIGRpc3BsYXlUYWJzKGNhdGVnb3J5Tm9kZUxpc3RbMV0sIFtuZXdQcm9qZWN0XSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIE5ldyBUYXNrIEJ1dHRvbiBGdW5jdGlvblxuICAgIGZ1bmN0aW9uIGFkZE5ld1Rhc2soKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJ0YXNrVGl0bGVcIilbMF0udmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJ0YXNrRGVzY3JpcHRpb25cIilbMF0udmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImR1ZURhdGVcIilbMF0udmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJwcmlvcml0eVwiKVswXS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwicHJvamVjdFwiKVswXS52YWx1ZTtcblxuICAgICAgICB0YXNrQXJyYXkucHVzaCh0YXNrT2JqZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpKTtcbiAgICAgICAgY29uc29sZS5sb2codGFza0FycmF5KTtcbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZSBUYWIgUGFnZVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGFiKCkge1xuICAgICAgICBhY3RpdmF0ZUVmZmVjdC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgY29uc3QgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhYlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgdGFiVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKTtcbiAgICAgICAgaWYgKHRhc2tDb250YWluZXIudGV4dENvbnRlbnQgPT0gJycpIHt0YXNrQ2hlY2tlcih0YXNrQ29udGFpbmVyKX07XG4gICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmQodGFiVGl0bGUsIHRhc2tDb250YWluZXIpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRhYkNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVFZmZlY3QoKSB7XG4gICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzTm9kZUxpc3QpICh0aGlzLnRpdGxlID09IHRhYi5maXJzdENoaWxkLm5leHRTaWJsaW5nLnRleHRDb250ZW50KSA/IHRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpIDogdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGFza0NoZWNrZXIoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gXCJZb3UgZG8gbm90IGhhdmUgYW55IHRhc2suXCI7XG4gICAgfVxuXG4gICAgLy8gQXJyYXlzXG4gICAgY29uc3QgaG9tZVBhZ2VzQXJyYXkgPSBbcGFnZXMoJ0luYm94JywgJ2luYm94JywgZ2VuZXJhdGVUYWIpLCBwYWdlcygnVG9kYXknLCAndG9kYXknLCBnZW5lcmF0ZVRhYiksIHBhZ2VzKCdVcGNvbWluZycsICdkYXRlX3JhbmdlJywgZ2VuZXJhdGVUYWIpXTtcbiAgICBsZXQgcHJvamVjdHNQYWdlc0FycmF5ID0gW3BhZ2VzKCdBZGQgUHJvamVjdCcsICdhZGQnLCBnZW5lcmF0ZUZvcm0pXTtcbiAgICBjb25zdCBDQVRFR09SWSA9IFt7Y2F0ZWdvcnk6ICdIb21lJywgc3ViY2F0ZWdvcnk6IGhvbWVQYWdlc0FycmF5fSwge2NhdGVnb3J5OiAnUHJvamVjdHMnLCBzdWJjYXRlZ29yeTogcHJvamVjdHNQYWdlc0FycmF5fV07XG4gICAgY29uc3QgaGVhZGVyQXJyYXkgPSBbcGFnZXMoJ01lbnUnLCAnbWVudScsIHRvZ2dsZU5hdiksIHBhZ2VzKCdBZGQgTmV3IFRhc2snLCAnYWRkJywgZ2VuZXJhdGVGb3JtKV07XG5cbiAgICAvLyBNb2RhbCBGb3JtIEFycmF5c1xuICAgIGNvbnN0IHByaW9yaXR5QXJyYXkgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXG4gICAgY29uc3QgbmV3VGFza0FycmF5ID0gW2Zvcm1FbGVtZW50cygndGFza1RpdGxlJywgJ1RpdGxlJywgJ2lucHV0JywgJ3RleHQnKSwgZm9ybUVsZW1lbnRzKCd0YXNrRGVzY3JpcHRpb24nLCAnRGVzY3JpcHRpb24nLCAndGV4dGFyZWEnLCAnJyksIGZvcm1FbGVtZW50cygnZHVlRGF0ZScsICdEdWUgRGF0ZScsICdpbnB1dCcsICdkYXRldGltZS1sb2NhbCcpLCBmb3JtRWxlbWVudHMoJ3ByaW9yaXR5JywgJ1ByaW9yaXR5JywgJ3NlbGVjdCcsIHByaW9yaXR5QXJyYXkpLCBmb3JtRWxlbWVudHMoJ3Byb2plY3QnLCAnUHJvamVjdCcsICdzZWxlY3QnLCBwcm9qZWN0c0FycmF5KV07XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IFtmb3JtRWxlbWVudHMoJ3Byb2plY3ROYW1lJywgJ05hbWUnLCAnaW5wdXQnLCAndGV4dCcpXTtcblxuICAgIC8vIEdlbmVyYXRlIE1haW4gTGF5b3V0IENvbXBvbmVudHNcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSBkb2N1bWVudC50aXRsZTtcbiAgICBoZWFkZXIuYXBwZW5kKGgxKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgIC8vIEdlbmVyYXRlIEhlYWRlciBJY29uc1xuICAgIGZvciAobGV0IGl0ZW0gb2YgaGVhZGVyQXJyYXkpIHtcbiAgICAgICAgY29uc3QgaGVhZGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaGVhZGVySWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucy1yb3VuZCcsICdtZC0zNicpO1xuICAgICAgICBoZWFkZXJJY29uLmlkID0gaGVhZGVySWNvbi50ZXh0Q29udGVudCA9IGl0ZW0uaWNvbjtcbiAgICAgICAgaGVhZGVySWNvbi5vbmNsaWNrID0gaXRlbS5saW5rLmJpbmQoaXRlbSk7XG4gICAgICAgIChpdGVtLmljb24gPT0gJ21lbnUnKSA/IGhlYWRlci5pbnNlcnRCZWZvcmUoaGVhZGVySWNvbiwgaDEpIDogaGVhZGVyLmFwcGVuZChoZWFkZXJJY29uKTtcbiAgICB9XG5cbiAgICAvLyBOb2RlIFJlZmVyZW5jZXNcbiAgICBsZXQgdGFic05vZGVMaXN0ID0gW107XG4gICAgbGV0IGNhdGVnb3J5Tm9kZUxpc3QgPSBbXTtcbiAgICBsZXQgYWRkUHJvamVjdE5vZGU7XG5cbiAgICAvLyBHZW5lcmF0ZSBOYXYvU2lkZWJhciBDb250ZW50XG4gICAgQ0FURUdPUlkuZm9yRWFjaCgoY2F0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGNhdENvbnRhaW5lci5pZCA9IGNhdC5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKGNhdENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgY2F0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNhdE5hbWUudGV4dENvbnRlbnQgPSBjYXQuY2F0ZWdvcnk7XG4gICAgICAgIGNhdENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXROYW1lKTtcblxuICAgICAgICBjYXRlZ29yeU5vZGVMaXN0LnB1c2goY2F0Q29udGFpbmVyKTtcbiAgICAgICAgZGlzcGxheVRhYnMoY2F0Q29udGFpbmVyLCBjYXQuc3ViY2F0ZWdvcnkpO1xuICAgIH0pXG5cbiAgICAvLyBHZW5lcmF0ZSBUYWJzXG4gICAgZnVuY3Rpb24gZGlzcGxheVRhYnMobm9kZUNvbnRhaW5lciwgYXJyYXkpIHtcbiAgICAgICAgZm9yIChsZXQgdGFiIG9mIGFycmF5KSB7XG4gICAgICAgICAgICBjb25zdCB0YWJLZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgdGFiS2V5LmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXG4gICAgICAgICAgICBjb25zdCB0YWJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgdGFiTmFtZS50ZXh0Q29udGVudCA9IHRhYi50aXRsZTtcblxuICAgICAgICAgICAgY29uc3QgdGFiSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRhYkljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMtcm91bmQnKTtcbiAgICAgICAgICAgIHRhYkljb24udGV4dENvbnRlbnQgPSB0YWIuaWNvbjtcblxuICAgICAgICAgICAgdGFiS2V5Lm9uY2xpY2sgPSB0YWIubGluay5iaW5kKHRhYik7XG4gICAgICAgICAgICAodGFiLnRpdGxlID09ICdBZGQgUHJvamVjdCcpID8gYWRkUHJvamVjdE5vZGUgPSB0YWJLZXkgOiB0YWJzTm9kZUxpc3QucHVzaCh0YWJLZXkpO1xuXG4gICAgICAgICAgICB0YWJLZXkuYXBwZW5kKHRhYkljb24sIHRhYk5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobm9kZUNvbnRhaW5lci5jb250YWlucyhhZGRQcm9qZWN0Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZURlbGV0ZSh0YWJLZXkpOyBcbiAgICAgICAgICAgICAgICBub2RlQ29udGFpbmVyLmluc2VydEJlZm9yZSh0YWJLZXksIGFkZFByb2plY3ROb2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7bm9kZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJLZXkpfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIFRhYidzIERlbGV0ZSBCdXR0b25cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZURlbGV0ZSh0YWJLZXkpIHtcbiAgICAgICAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZWxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zLXJvdW5kJyk7XG4gICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdjbG9zZSc7XG4gICAgICAgIGRlbGV0ZUJ0bi5vbmNsaWNrID0gZGVsZXRlRnVuYztcbiAgICAgICAgZGVsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIHRhYktleS5hcHBlbmRDaGlsZChkZWxldGVDb250YWluZXIpO1xuICAgIH1cblxuICAgIC8vIERlbGV0ZSBGdW5jdGlvblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUZ1bmMoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA8IHRhYnNOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSA9PSB0YWJzTm9kZUxpc3RbaV0pIHtcbiAgICAgICAgICAgICAgICAoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZSBNb2RhbFxuICAgIGNvbnN0IG1vZGFsQmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbEJnLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IGV4aXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZXhpdEJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idXR0b24nKTtcbiAgICBleGl0QnRuLnRleHRDb250ZW50ID0gJ8OXJztcblxuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZChleGl0QnRuKTtcbiAgICBtb2RhbEJnLmFwcGVuZChtb2RhbENvbnRhaW5lcik7XG5cbiAgICAvLyBFeGl0IE1vZGFsIEZ1bmN0aW9uXG4gICAgZXhpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7aWYoZS50YXJnZXQgPT0gbW9kYWxCZykgY2xvc2VNb2RhbCgpfSlcbiAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge21vZGFsQmcuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctbW9kYWxcIil9O1xuXG4gICAgLy8gR2VuZXJhdGUgTWFpbiBUYWJcbiAgICBnZW5lcmF0ZVRhYi5jYWxsKGhvbWVQYWdlc0FycmF5WzBdKTtcbiAgICBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIsIG1lbnUsIG1haW4sIG1vZGFsQmcpO1xufTsiLCJsZXQgcHJvamVjdHNBcnJheSA9IFsnSW5ib3gnXTtcblxuY29uc3QgdGFza09iamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0fTtcbn1cblxubGV0IHRhc2tBcnJheSA9IFtdO1xuXG5leHBvcnQge3Byb2plY3RzQXJyYXksIHRhc2tPYmplY3QsIHRhc2tBcnJheX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFVJIGZyb20gJy4vVUknO1xuXG5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==