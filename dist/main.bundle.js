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
___CSS_LOADER_EXPORT___.push([module.id, "body,\nh1,\nh2,\np,\nul,\nli {\n    margin: 0;\n    padding: 0;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    font-family: 'Inter', sans-serif;\n    background: var(--light-color);\n    display: grid;\n    grid-template-rows: 6rem 1fr;\n    grid-template-columns: 18rem 1fr;\n}\n\n:root {\n    --dark-color: #002447;\n    --light-color: #FFFFFF;\n    --main-color: #FEB249;\n    --light-grey: #EEEEEE;\n    --medium-grey: #BBBBBB;\n    --dark-grey: #888888;\n}\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 1.5rem;\n    background: var(--dark-color);\n    color: white;\n    padding: 0 20px;\n    grid-column: 1/-1;\n    grid-row: 1/2;\n}\n\n.material-icons-round.md-36 {\n    font-size: 36px;\n}\n\nh1 {\n    padding: 10px;\n}\n\nnav {\n    background-color: var(--light-grey);\n    grid-row: 2/-1;\n    grid-column: 1/2;\n    padding: 25px;\n}\n\n/* Tab Pages */\nmain {\n    background: var(--light-color);\n    grid-row: 2/-1;\n    grid-column: 2/-1;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    padding: 40px;\n}\n\nmain h2 {\n    padding: 10px;\n    border-radius: 0.5rem;\n    font-size: 2.5rem;\n    background-color: var(--light-grey);\n}\n\n.task-container {\n    margin-top: 15px;\n}\n\n\nbody.collapse nav {\n    transform: translateX(-100%);\n}\n\nbody.collapse main {\n    grid-column: 1/-1;\n}\n\n#home h2,\n#projects h2 {\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n    border-bottom: 2px solid var(--dark-grey);\n}\n\n.tab {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 8px 5px;\n}\n\n.option {\n    margin-left: auto;\n}\n\n#projects {\n    margin-top: 40px;\n}\n\n.tab:hover,\n.selected {\n    background: var(--medium-grey);\n    border-radius: 10px;\n}\n\nul {\n    list-style: none;\n}\n\n.material-icons-round.md-36,\n.tab,\nbutton,\n.close-button {\n    cursor: pointer;\n}\n\n/* MODALS */\n.modal {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    opacity: 0;\n    visibility: hidden;\n    transform: scale(1.1);\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.modal-content {\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    color: var(--dark-color);\n    padding: 1rem 1.5rem;\n    width: 24rem;\n    border-radius: 0.5rem;\n    margin: 0 auto;\n}\n\n.close-button {\n    float: right;\n    font-size: 1.5rem;\n    line-height: 1.5rem;\n    text-align: center;\n}\n\n.close-button:hover {\n    color: black;\n}\n\n.show-modal {\n    opacity: 1;\n    visibility: visible;\n    transform: scale(1.0);\n    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n/* Modal Form */\n\ninput, select, textarea {\n    /* -webkit-transition: all 0.30s ease-in-out;\n    -moz-transition: all 0.30s ease-in-out;\n    -ms-transition: all 0.30s ease-in-out;\n    -o-transition: all 0.30s ease-in-out; */\n    transition: all 0.30s ease-in-out;\n    outline: none;\n    padding: 3px 0px 3px 3px;\n    margin: 5px 1px 3px 0px;\n    border-radius: 0.5rem;\n\n    width: 100%;\n    border: 1px solid var(--medium-grey);\n    font-size: inherit;\n}\n   \ninput:focus, select:focus, textarea:focus {\n    box-shadow: 0 0 5px rgba(81, 203, 238, 1);\n    border: 1px solid rgba(81, 203, 238, 1);\n}\n\ninput, textarea, select, button {\n    font-family: inherit;\n}\n\nselect {\n    background: none;\n}\n\nform div {\n    margin: 10px 0;\n}\n\nform h2 {\n    padding-bottom: 1rem;\n    margin-bottom: 1rem;\n    border-bottom: 1px solid var(--dark-grey);\n}\n\n.buttons {\n    display: flex;\n    justify-content: flex-end;\n    gap: 10px;\n}\n\nbutton {\n    background: none;\n    border: none;\n    padding: 0;\n    font-size: 1rem;\n    padding: 10px 10px;\n    border-radius: 0.5rem;\n}\n\nbutton[type='submit'] {\n    background-color: var(--dark-color);\n    color: white;\n    border: 1px solid var(--dark-color);\n}\n\nbutton[type='button'] {\n    border: 1px solid black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;;;;IAMI,SAAS;IACT,UAAU;AACd;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,8BAA8B;IAC9B,aAAa;IACb,4BAA4B;IAC5B,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;IACrB,sBAAsB;IACtB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,6BAA6B;IAC7B,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mCAAmC;IACnC,cAAc;IACd,gBAAgB;IAChB,aAAa;AACjB;;AAEA,cAAc;AACd;IACI,8BAA8B;IAC9B,cAAc;IACd,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,iBAAiB;IACjB,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;AACpB;;;AAGA;IACI,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,oBAAoB;IACpB,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;;;IAII,eAAe;AACnB;;AAEA,WAAW;AACX;IACI,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,UAAU;IACV,kBAAkB;IAClB,qBAAqB;IACrB,yEAAyE;AAC7E;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,wBAAwB;IACxB,oBAAoB;IACpB,YAAY;IACZ,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,qBAAqB;IACrB,sEAAsE;AAC1E;;AAEA,eAAe;;AAEf;IACI;;;2CAGuC;IACvC,iCAAiC;IACjC,aAAa;IACb,wBAAwB;IACxB,uBAAuB;IACvB,qBAAqB;;IAErB,WAAW;IACX,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,yCAAyC;IACzC,uCAAuC;AAC3C;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,UAAU;IACV,eAAe;IACf,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,mCAAmC;IACnC,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');\n\nbody,\nh1,\nh2,\np,\nul,\nli {\n    margin: 0;\n    padding: 0;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    font-family: 'Inter', sans-serif;\n    background: var(--light-color);\n    display: grid;\n    grid-template-rows: 6rem 1fr;\n    grid-template-columns: 18rem 1fr;\n}\n\n:root {\n    --dark-color: #002447;\n    --light-color: #FFFFFF;\n    --main-color: #FEB249;\n    --light-grey: #EEEEEE;\n    --medium-grey: #BBBBBB;\n    --dark-grey: #888888;\n}\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 1.5rem;\n    background: var(--dark-color);\n    color: white;\n    padding: 0 20px;\n    grid-column: 1/-1;\n    grid-row: 1/2;\n}\n\n.material-icons-round.md-36 {\n    font-size: 36px;\n}\n\nh1 {\n    padding: 10px;\n}\n\nnav {\n    background-color: var(--light-grey);\n    grid-row: 2/-1;\n    grid-column: 1/2;\n    padding: 25px;\n}\n\n/* Tab Pages */\nmain {\n    background: var(--light-color);\n    grid-row: 2/-1;\n    grid-column: 2/-1;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    padding: 40px;\n}\n\nmain h2 {\n    padding: 10px;\n    border-radius: 0.5rem;\n    font-size: 2.5rem;\n    background-color: var(--light-grey);\n}\n\n.task-container {\n    margin-top: 15px;\n}\n\n\nbody.collapse nav {\n    transform: translateX(-100%);\n}\n\nbody.collapse main {\n    grid-column: 1/-1;\n}\n\n#home h2,\n#projects h2 {\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n    border-bottom: 2px solid var(--dark-grey);\n}\n\n.tab {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 8px 5px;\n}\n\n.option {\n    margin-left: auto;\n}\n\n#projects {\n    margin-top: 40px;\n}\n\n.tab:hover,\n.selected {\n    background: var(--medium-grey);\n    border-radius: 10px;\n}\n\nul {\n    list-style: none;\n}\n\n.material-icons-round.md-36,\n.tab,\nbutton,\n.close-button {\n    cursor: pointer;\n}\n\n/* MODALS */\n.modal {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    opacity: 0;\n    visibility: hidden;\n    transform: scale(1.1);\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.modal-content {\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    color: var(--dark-color);\n    padding: 1rem 1.5rem;\n    width: 24rem;\n    border-radius: 0.5rem;\n    margin: 0 auto;\n}\n\n.close-button {\n    float: right;\n    font-size: 1.5rem;\n    line-height: 1.5rem;\n    text-align: center;\n}\n\n.close-button:hover {\n    color: black;\n}\n\n.show-modal {\n    opacity: 1;\n    visibility: visible;\n    transform: scale(1.0);\n    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n/* Modal Form */\n\ninput, select, textarea {\n    /* -webkit-transition: all 0.30s ease-in-out;\n    -moz-transition: all 0.30s ease-in-out;\n    -ms-transition: all 0.30s ease-in-out;\n    -o-transition: all 0.30s ease-in-out; */\n    transition: all 0.30s ease-in-out;\n    outline: none;\n    padding: 3px 0px 3px 3px;\n    margin: 5px 1px 3px 0px;\n    border-radius: 0.5rem;\n\n    width: 100%;\n    border: 1px solid var(--medium-grey);\n    font-size: inherit;\n}\n   \ninput:focus, select:focus, textarea:focus {\n    box-shadow: 0 0 5px rgba(81, 203, 238, 1);\n    border: 1px solid rgba(81, 203, 238, 1);\n}\n\ninput, textarea, select, button {\n    font-family: inherit;\n}\n\nselect {\n    background: none;\n}\n\nform div {\n    margin: 10px 0;\n}\n\nform h2 {\n    padding-bottom: 1rem;\n    margin-bottom: 1rem;\n    border-bottom: 1px solid var(--dark-grey);\n}\n\n.buttons {\n    display: flex;\n    justify-content: flex-end;\n    gap: 10px;\n}\n\nbutton {\n    background: none;\n    border: none;\n    padding: 0;\n    font-size: 1rem;\n    padding: 10px 10px;\n    border-radius: 0.5rem;\n}\n\nbutton[type='submit'] {\n    background-color: var(--dark-color);\n    color: white;\n    border: 1px solid var(--dark-color);\n}\n\nbutton[type='button'] {\n    border: 1px solid black;\n}"],"sourceRoot":""}]);
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

    // Generate Tab Page
    function generateTab() {
        document.querySelector('main').textContent = '';
        const tabContainer = document.createElement('div');
        const tabTitle = document.createElement('h2');
        tabTitle.textContent = this.title;
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        if (taskContainer.textContent == '') {taskChecker(taskContainer)};
        tabContainer.append(tabTitle, taskContainer);
        document.querySelector('main').appendChild(tabContainer);
    }

    function taskChecker(element) {
        element.textContent = "You do not have any task.";
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
        let projectName = document.getElementsByName("projectName")[0].value;
        _logic__WEBPACK_IMPORTED_MODULE_1__.projectsArray.push(projectName); //Push to Project Array
        const newProject = pages(projectName, 'list', generateTab); //Creates Tab Object
        projectsPagesArray.splice(-1, 0, newProject); //Appends it to Projects Category

        document.querySelectorAll('#projects > .tab').forEach((node) => node.remove()); //Refreshes Projects Category

        const nodeProject = document.getElementById('projects');
        displayTabs(nodeProject, projectsPagesArray); //Re-displays all project tabs

        // Generate More Options Icon/Function
        const projectsList = document.querySelectorAll('#projects > .tab');
        for (let i = 0; i < projectsList.length - 1; i++) {
            const options = document.createElement('span');
            options.classList.add('material-icons-round', 'option');
            options.textContent = 'more_vert';
            options.onclick = function() {console.log(`Remove ${projectsList[i].firstChild.nextSibling.textContent}`)};
            projectsList[i].appendChild(options);
        }
    }

    // Add New Task Button Function
    function addNewTask() {
        const title = document.getElementsByName("taskTitle")[0].value;
        const description = document.getElementsByName("taskDescription")[0].value;
        const dueDate = document.getElementsByName("dueDate")[0].value;
        const priority = document.getElementsByName("priority")[0].value;
        const project = document.getElementsByName("project")[0].value;

        _logic__WEBPACK_IMPORTED_MODULE_1__.taskArray.push((0,_logic__WEBPACK_IMPORTED_MODULE_1__.taskObject)(title, description, dueDate, priority, project));
    }

    // Arrays
    const homePagesArray = [pages('Inbox', 'inbox', generateTab), pages('Today', 'today', generateTab), pages('Upcoming', 'date_range', generateTab)];
    let projectsPagesArray = [pages('Add Project', 'add', generateForm)];
    const CATEGORY = [{category: 'Home', subcategory: homePagesArray}, {category: 'Projects', subcategory: projectsPagesArray}];
    const headerArray = [pages('', 'menu', toggleNav), pages('Add New Task', 'add', generateForm)];

    // Modal Form Arrays
    const priorityArray = ['Low', 'Medium', 'High'];

    const newTaskArray = [formElements('taskTitle', 'Title', 'input', 'text'), formElements('taskDescription', 'Description', 'textarea', ''), formElements('dueDate', 'Due Date', 'input', 'datetime-local'), formElements('priority', 'Priority', 'select', priorityArray), formElements('project', 'Project', 'select', _logic__WEBPACK_IMPORTED_MODULE_1__.projectsArray)];
    const newProject = [formElements('projectName', 'Name', 'input', 'text')];

    // Generate Header
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = document.title;
    header.append(h1);

    // Generate Header Icons
    for (let item of headerArray) {
        const headerIcon = document.createElement('span');
        headerIcon.classList.add('material-icons-round', 'md-36');
        headerIcon.id = headerIcon.textContent = item.icon;
        headerIcon.onclick = item.link.bind(item);
        (item.icon == 'menu') ? header.insertBefore(headerIcon, h1) : header.append(headerIcon);
    }

    const main = document.createElement('main');
    const menu = document.createElement('nav');

    // Generate Nav/Sidebar Content
    CATEGORY.forEach((cat) => {
        const catContainer = document.createElement('ul');
        catContainer.id = cat.category.toLowerCase();
        menu.appendChild(catContainer);

        const catName = document.createElement('h2');
        catName.textContent = cat.category;
        catContainer.appendChild(catName);

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

            tabKey.append(tabIcon, tabName);
            nodeContainer.appendChild(tabKey);
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

    // Generate Selected Tab Effect

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixtSEFBbUg7QUFDbkg7QUFDQSx3RUFBd0UsZ0JBQWdCLGlCQUFpQixHQUFHLGlCQUFpQixtQkFBbUIsR0FBRyxVQUFVLHVDQUF1QyxxQ0FBcUMsb0JBQW9CLG1DQUFtQyx1Q0FBdUMsR0FBRyxXQUFXLDRCQUE0Qiw2QkFBNkIsNEJBQTRCLDRCQUE0Qiw2QkFBNkIsMkJBQTJCLEdBQUcsVUFBVSxvQkFBb0IscUNBQXFDLDBCQUEwQix3QkFBd0Isb0NBQW9DLG1CQUFtQixzQkFBc0Isd0JBQXdCLG9CQUFvQixHQUFHLGlDQUFpQyxzQkFBc0IsR0FBRyxRQUFRLG9CQUFvQixHQUFHLFNBQVMsMENBQTBDLHFCQUFxQix1QkFBdUIsb0JBQW9CLEdBQUcsMkJBQTJCLHFDQUFxQyxxQkFBcUIsd0JBQXdCLG9CQUFvQiw2QkFBNkIseUJBQXlCLG9CQUFvQixHQUFHLGFBQWEsb0JBQW9CLDRCQUE0Qix3QkFBd0IsMENBQTBDLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLHlCQUF5QixtQ0FBbUMsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsNkJBQTZCLDJCQUEyQiwwQkFBMEIsZ0RBQWdELEdBQUcsVUFBVSxvQkFBb0IsMEJBQTBCLGVBQWUsdUJBQXVCLEdBQUcsYUFBYSx3QkFBd0IsR0FBRyxlQUFlLHVCQUF1QixHQUFHLDRCQUE0QixxQ0FBcUMsMEJBQTBCLEdBQUcsUUFBUSx1QkFBdUIsR0FBRyxpRUFBaUUsc0JBQXNCLEdBQUcsMEJBQTBCLHNCQUFzQixpQkFBaUIsY0FBYyxhQUFhLGtCQUFrQixtQkFBbUIsMkNBQTJDLGlCQUFpQix5QkFBeUIsNEJBQTRCLGdGQUFnRixHQUFHLG9CQUFvQix5QkFBeUIseUJBQXlCLGVBQWUsZ0JBQWdCLHVDQUF1Qyw4QkFBOEIsK0JBQStCLDJCQUEyQixtQkFBbUIsNEJBQTRCLHFCQUFxQixHQUFHLG1CQUFtQixtQkFBbUIsd0JBQXdCLDBCQUEwQix5QkFBeUIsR0FBRyx5QkFBeUIsbUJBQW1CLEdBQUcsaUJBQWlCLGlCQUFpQiwwQkFBMEIsNEJBQTRCLDZFQUE2RSxHQUFHLGlEQUFpRCxtREFBbUQsNkNBQTZDLDRDQUE0Qyw0Q0FBNEMsMENBQTBDLG9CQUFvQiwrQkFBK0IsOEJBQThCLDRCQUE0QixvQkFBb0IsMkNBQTJDLHlCQUF5QixHQUFHLGtEQUFrRCxnREFBZ0QsOENBQThDLEdBQUcscUNBQXFDLDJCQUEyQixHQUFHLFlBQVksdUJBQXVCLEdBQUcsY0FBYyxxQkFBcUIsR0FBRyxhQUFhLDJCQUEyQiwwQkFBMEIsZ0RBQWdELEdBQUcsY0FBYyxvQkFBb0IsZ0NBQWdDLGdCQUFnQixHQUFHLFlBQVksdUJBQXVCLG1CQUFtQixpQkFBaUIsc0JBQXNCLHlCQUF5Qiw0QkFBNEIsR0FBRywyQkFBMkIsMENBQTBDLG1CQUFtQiwwQ0FBMEMsR0FBRywyQkFBMkIsOEJBQThCLEdBQUcsT0FBTyxxRkFBcUYsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sUUFBUSxVQUFVLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLE9BQU8sT0FBTyxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVkscUdBQXFHLGtDQUFrQyxnQkFBZ0IsaUJBQWlCLEdBQUcsaUJBQWlCLG1CQUFtQixHQUFHLFVBQVUsdUNBQXVDLHFDQUFxQyxvQkFBb0IsbUNBQW1DLHVDQUF1QyxHQUFHLFdBQVcsNEJBQTRCLDZCQUE2Qiw0QkFBNEIsNEJBQTRCLDZCQUE2QiwyQkFBMkIsR0FBRyxVQUFVLG9CQUFvQixxQ0FBcUMsMEJBQTBCLHdCQUF3QixvQ0FBb0MsbUJBQW1CLHNCQUFzQix3QkFBd0Isb0JBQW9CLEdBQUcsaUNBQWlDLHNCQUFzQixHQUFHLFFBQVEsb0JBQW9CLEdBQUcsU0FBUywwQ0FBMEMscUJBQXFCLHVCQUF1QixvQkFBb0IsR0FBRywyQkFBMkIscUNBQXFDLHFCQUFxQix3QkFBd0Isb0JBQW9CLDZCQUE2Qix5QkFBeUIsb0JBQW9CLEdBQUcsYUFBYSxvQkFBb0IsNEJBQTRCLHdCQUF3QiwwQ0FBMEMsR0FBRyxxQkFBcUIsdUJBQXVCLEdBQUcseUJBQXlCLG1DQUFtQyxHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsMkJBQTJCLDBCQUEwQixnREFBZ0QsR0FBRyxVQUFVLG9CQUFvQiwwQkFBMEIsZUFBZSx1QkFBdUIsR0FBRyxhQUFhLHdCQUF3QixHQUFHLGVBQWUsdUJBQXVCLEdBQUcsNEJBQTRCLHFDQUFxQywwQkFBMEIsR0FBRyxRQUFRLHVCQUF1QixHQUFHLGlFQUFpRSxzQkFBc0IsR0FBRywwQkFBMEIsc0JBQXNCLGlCQUFpQixjQUFjLGFBQWEsa0JBQWtCLG1CQUFtQiwyQ0FBMkMsaUJBQWlCLHlCQUF5Qiw0QkFBNEIsZ0ZBQWdGLEdBQUcsb0JBQW9CLHlCQUF5Qix5QkFBeUIsZUFBZSxnQkFBZ0IsdUNBQXVDLDhCQUE4QiwrQkFBK0IsMkJBQTJCLG1CQUFtQiw0QkFBNEIscUJBQXFCLEdBQUcsbUJBQW1CLG1CQUFtQix3QkFBd0IsMEJBQTBCLHlCQUF5QixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRyxpQkFBaUIsaUJBQWlCLDBCQUEwQiw0QkFBNEIsNkVBQTZFLEdBQUcsaURBQWlELG1EQUFtRCw2Q0FBNkMsNENBQTRDLDRDQUE0QywwQ0FBMEMsb0JBQW9CLCtCQUErQiw4QkFBOEIsNEJBQTRCLG9CQUFvQiwyQ0FBMkMseUJBQXlCLEdBQUcsa0RBQWtELGdEQUFnRCw4Q0FBOEMsR0FBRyxxQ0FBcUMsMkJBQTJCLEdBQUcsWUFBWSx1QkFBdUIsR0FBRyxjQUFjLHFCQUFxQixHQUFHLGFBQWEsMkJBQTJCLDBCQUEwQixnREFBZ0QsR0FBRyxjQUFjLG9CQUFvQixnQ0FBZ0MsZ0JBQWdCLEdBQUcsWUFBWSx1QkFBdUIsbUJBQW1CLGlCQUFpQixzQkFBc0IseUJBQXlCLDRCQUE0QixHQUFHLDJCQUEyQiwwQ0FBMEMsbUJBQW1CLDBDQUEwQyxHQUFHLDJCQUEyQiw4QkFBOEIsR0FBRyxtQkFBbUI7QUFDOXZVO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDd0M7O0FBRTlDO0FBQ2Y7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFzRCxtQkFBbUI7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLCtCQUErQixHQUFHLHlCQUF5QixXQUFXLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBa0IsZUFBZTtBQUN6QyxvRUFBb0U7QUFDcEUsc0RBQXNEOztBQUV0RCx3RkFBd0Y7O0FBRXhGO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0Esd0JBQXdCLDZCQUE2QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsc0JBQXNCLG1EQUFtRDtBQUNuSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxrREFBYyxDQUFDLGtEQUFVO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4Q0FBOEMsR0FBRyxzREFBc0Q7QUFDOUg7O0FBRUE7QUFDQTs7QUFFQSwyVEFBMlQsaURBQWE7QUFDeFU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRCxxQ0FBcUM7QUFDdkYsMkJBQTJCOztBQUUzQjs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM05BOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBOzs7Ozs7OztVQ05BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBc0I7O0FBRXRCLHFDQUFxQywyQ0FBRSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXImZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSxcXG5oMSxcXG5oMixcXG5wLFxcbnVsLFxcbmxpIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDZyZW0gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE4cmVtIDFmcjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWRhcmstY29sb3I6ICMwMDI0NDc7XFxuICAgIC0tbGlnaHQtY29sb3I6ICNGRkZGRkY7XFxuICAgIC0tbWFpbi1jb2xvcjogI0ZFQjI0OTtcXG4gICAgLS1saWdodC1ncmV5OiAjRUVFRUVFO1xcbiAgICAtLW1lZGl1bS1ncmV5OiAjQkJCQkJCO1xcbiAgICAtLWRhcmstZ3JleTogIzg4ODg4ODtcXG59XFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zLXJvdW5kLm1kLTM2IHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG5oMSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbm5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBncmlkLXJvdzogMi8tMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgcGFkZGluZzogMjVweDtcXG59XFxuXFxuLyogVGFiIFBhZ2VzICovXFxubWFpbiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgZ3JpZC1yb3c6IDIvLTE7XFxuICAgIGdyaWQtY29sdW1uOiAyLy0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbm1haW4gaDIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuXFxuYm9keS5jb2xsYXBzZSBuYXYge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG5cXG5ib2R5LmNvbGxhcHNlIG1haW4ge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuXFxuI2hvbWUgaDIsXFxuI3Byb2plY3RzIGgyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kYXJrLWdyZXkpO1xcbn1cXG5cXG4udGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDhweCA1cHg7XFxufVxcblxcbi5vcHRpb24ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLnRhYjpob3ZlcixcXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zLXJvdW5kLm1kLTM2LFxcbi50YWIsXFxuYnV0dG9uLFxcbi5jbG9zZS1idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1PREFMUyAqL1xcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjI1cywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIHdpZHRoOiAyNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNob3ctbW9kYWwge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XFxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDBzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxufVxcblxcbi8qIE1vZGFsIEZvcm0gKi9cXG5cXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XFxuICAgIC8qIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzBzIGVhc2UtaW4tb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjMwcyBlYXNlLWluLW91dDtcXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjMwcyBlYXNlLWluLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMzBzIGVhc2UtaW4tb3V0OyAqL1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zMHMgZWFzZS1pbi1vdXQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDNweCAwcHggM3B4IDNweDtcXG4gICAgbWFyZ2luOiA1cHggMXB4IDNweCAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG4gICBcXG5pbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSg4MSwgMjAzLCAyMzgsIDEpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBidXR0b24ge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuZm9ybSBkaXYge1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuZm9ybSBoMiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuYnV0dG9uW3R5cGU9J3N1Ym1pdCddIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1jb2xvcik7XFxufVxcblxcbmJ1dHRvblt0eXBlPSdidXR0b24nXSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7Ozs7SUFNSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOzs7O0lBSUksZUFBZTtBQUNuQjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUVBQXlFO0FBQzdFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsc0VBQXNFO0FBQzFFOztBQUVBLGVBQWU7O0FBRWY7SUFDSTs7OzJDQUd1QztJQUN2QyxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIscUJBQXFCOztJQUVyQixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6Qyx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXImZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSxcXG5oMSxcXG5oMixcXG5wLFxcbnVsLFxcbmxpIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDZyZW0gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE4cmVtIDFmcjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWRhcmstY29sb3I6ICMwMDI0NDc7XFxuICAgIC0tbGlnaHQtY29sb3I6ICNGRkZGRkY7XFxuICAgIC0tbWFpbi1jb2xvcjogI0ZFQjI0OTtcXG4gICAgLS1saWdodC1ncmV5OiAjRUVFRUVFO1xcbiAgICAtLW1lZGl1bS1ncmV5OiAjQkJCQkJCO1xcbiAgICAtLWRhcmstZ3JleTogIzg4ODg4ODtcXG59XFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zLXJvdW5kLm1kLTM2IHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG5oMSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbm5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBncmlkLXJvdzogMi8tMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgcGFkZGluZzogMjVweDtcXG59XFxuXFxuLyogVGFiIFBhZ2VzICovXFxubWFpbiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgZ3JpZC1yb3c6IDIvLTE7XFxuICAgIGdyaWQtY29sdW1uOiAyLy0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbm1haW4gaDIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuXFxuYm9keS5jb2xsYXBzZSBuYXYge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG5cXG5ib2R5LmNvbGxhcHNlIG1haW4ge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuXFxuI2hvbWUgaDIsXFxuI3Byb2plY3RzIGgyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kYXJrLWdyZXkpO1xcbn1cXG5cXG4udGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDhweCA1cHg7XFxufVxcblxcbi5vcHRpb24ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLnRhYjpob3ZlcixcXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zLXJvdW5kLm1kLTM2LFxcbi50YWIsXFxuYnV0dG9uLFxcbi5jbG9zZS1idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1PREFMUyAqL1xcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjI1cywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIHdpZHRoOiAyNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNob3ctbW9kYWwge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XFxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDBzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxufVxcblxcbi8qIE1vZGFsIEZvcm0gKi9cXG5cXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XFxuICAgIC8qIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzBzIGVhc2UtaW4tb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjMwcyBlYXNlLWluLW91dDtcXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjMwcyBlYXNlLWluLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMzBzIGVhc2UtaW4tb3V0OyAqL1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zMHMgZWFzZS1pbi1vdXQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDNweCAwcHggM3B4IDNweDtcXG4gICAgbWFyZ2luOiA1cHggMXB4IDNweCAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG4gICBcXG5pbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSg4MSwgMjAzLCAyMzgsIDEpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBidXR0b24ge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuZm9ybSBkaXYge1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuZm9ybSBoMiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuYnV0dG9uW3R5cGU9J3N1Ym1pdCddIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1jb2xvcik7XFxufVxcblxcbmJ1dHRvblt0eXBlPSdidXR0b24nXSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtwcm9qZWN0c0FycmF5LCB0YXNrT2JqZWN0LCB0YXNrQXJyYXl9IGZyb20gJy4vbG9naWMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVVJKCkge1xuICAgIC8vIEZhY3RvcnkgRnVuY3Rpb24gZm9yIFRhYiBDcmVhdGlvblxuICAgIGNvbnN0IHBhZ2VzID0gKHRpdGxlLCBpY29uLCBsaW5rKSA9PiB7XG4gICAgICAgIHJldHVybiB7dGl0bGUsIGljb24sIGxpbmt9O1xuICAgIH1cblxuICAgIC8vIEZhY3RvcnkgRnVuY3Rpb24gZm9yIEZvcm0gRWxlbWVudHNcbiAgICBjb25zdCBmb3JtRWxlbWVudHMgPSAoY2FtZWxDYXNlLCBzdHJpbmdMYWJlbCwgZWxlbWVudCwgbWlzYykgPT4ge1xuICAgICAgICByZXR1cm4ge2NhbWVsQ2FzZSwgc3RyaW5nTGFiZWwsIGVsZW1lbnQsIG1pc2N9XG4gICAgfVxuICAgIC8vIEZ1bmN0aW9uIGZvciBUb2dnbGUgTWVudVxuICAgIGZ1bmN0aW9uIHRvZ2dsZU5hdigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZScpO1xuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIFRhYiBQYWdlXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVUYWIoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBjb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFiVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICB0YWJUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICBpZiAodGFza0NvbnRhaW5lci50ZXh0Q29udGVudCA9PSAnJykge3Rhc2tDaGVja2VyKHRhc2tDb250YWluZXIpfTtcbiAgICAgICAgdGFiQ29udGFpbmVyLmFwcGVuZCh0YWJUaXRsZSwgdGFza0NvbnRhaW5lcik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5hcHBlbmRDaGlsZCh0YWJDb250YWluZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRhc2tDaGVja2VyKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiWW91IGRvIG5vdCBoYXZlIGFueSB0YXNrLlwiO1xuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIEZvcm1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgICAgIGlmIChtb2RhbENvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudCA9PSAyKSB7KG1vZGFsQ29udGFpbmVyLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpLnJlbW92ZSgpfTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuY2xhc3NMaXN0LmFkZCgnc2hvdy1tb2RhbCcpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgRm9ybVxuICAgICAgICBjb25zdCBtb2RhbEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIG1vZGFsRm9ybS5hY3Rpb24gPSAnIyc7XG4gICAgICAgIG1vZGFsRm9ybS5tZXRob2QgPSAncG9zdCc7XG4gICAgICAgIG1vZGFsRm9ybS5pZCA9ICh0aGlzLnRpdGxlLnJlcGxhY2UoL1xccy9nLCAnJykpLnRvTG93ZXJDYXNlKCkgKyAnRm9ybSc7XG4gICAgICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgICAgIG1vZGFsRm9ybS5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gICAgICAgICh0aGlzLnRpdGxlID09ICdBZGQgUHJvamVjdCcpID8gdGhpcy5hcnJheSA9IG5ld1Byb2plY3QgOiB0aGlzLmFycmF5ID0gbmV3VGFza0FycmF5O1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIEZvcm0gRWxlbWVudHNcbiAgICAgICAgZm9yIChsZXQgZGl2RWxlbWVudCBvZiB0aGlzLmFycmF5KSB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gZGl2RWxlbWVudC5zdHJpbmdMYWJlbDtcblxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZGl2RWxlbWVudC5lbGVtZW50fWApO1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgICAgICAgICAgZWxlbWVudC5uYW1lID0gZGl2RWxlbWVudC5jYW1lbENhc2U7XG5cbiAgICAgICAgICAgIGlmIChkaXZFbGVtZW50LmVsZW1lbnQgPT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudHlwZSA9IGRpdkVsZW1lbnQubWlzYztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGl2RWxlbWVudC5lbGVtZW50ID09ICdzZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgZGl2RWxlbWVudC5taXNjKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgbW9kYWxGb3JtLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZW5lcmF0ZSBCdXR0b25zXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7XG5cbiAgICAgICAgW3t0eXBlOiAnYnV0dG9uJywgdGV4dDogJ0NhbmNlbCd9LCB7dHlwZTogJ3N1Ym1pdCcsIHRleHQ6IGAke3RoaXMudGl0bGV9YH1dLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24udHlwZSA9IGJ0bi50eXBlO1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gYnRuLnRleHQ7XG4gICAgICAgICAgICBpZiAoYnRuLnR5cGUgPT0gJ2J1dHRvbicpIHtidXR0b24ub25jbGljayA9IGNsb3NlTW9kYWx9O1xuICAgICAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTdWJtaXQgQnV0dG9uIEZ1bmN0aW9uXG4gICAgICAgIG1vZGFsRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAoZS50YXJnZXQuaWQgPT0gJ2FkZHByb2plY3RGb3JtJykgPyBhZGRQcm9qZWN0KCkgOiBhZGROZXdUYXNrKCk7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1vZGFsRm9ybS5hcHBlbmRDaGlsZChidXR0b25zKTtcbiAgICAgICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxGb3JtKTtcbiAgICB9O1xuXG4gICAgLy8gQWRkIFByb2plY3QgQnV0dG9uIEZ1bmN0aW9uXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJwcm9qZWN0TmFtZVwiKVswXS52YWx1ZTtcbiAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKHByb2plY3ROYW1lKTsgLy9QdXNoIHRvIFByb2plY3QgQXJyYXlcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHBhZ2VzKHByb2plY3ROYW1lLCAnbGlzdCcsIGdlbmVyYXRlVGFiKTsgLy9DcmVhdGVzIFRhYiBPYmplY3RcbiAgICAgICAgcHJvamVjdHNQYWdlc0FycmF5LnNwbGljZSgtMSwgMCwgbmV3UHJvamVjdCk7IC8vQXBwZW5kcyBpdCB0byBQcm9qZWN0cyBDYXRlZ29yeVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9qZWN0cyA+IC50YWInKS5mb3JFYWNoKChub2RlKSA9PiBub2RlLnJlbW92ZSgpKTsgLy9SZWZyZXNoZXMgUHJvamVjdHMgQ2F0ZWdvcnlcblxuICAgICAgICBjb25zdCBub2RlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuICAgICAgICBkaXNwbGF5VGFicyhub2RlUHJvamVjdCwgcHJvamVjdHNQYWdlc0FycmF5KTsgLy9SZS1kaXNwbGF5cyBhbGwgcHJvamVjdCB0YWJzXG5cbiAgICAgICAgLy8gR2VuZXJhdGUgTW9yZSBPcHRpb25zIEljb24vRnVuY3Rpb25cbiAgICAgICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2plY3RzID4gLnRhYicpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzTGlzdC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zLXJvdW5kJywgJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9ucy50ZXh0Q29udGVudCA9ICdtb3JlX3ZlcnQnO1xuICAgICAgICAgICAgb3B0aW9ucy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7Y29uc29sZS5sb2coYFJlbW92ZSAke3Byb2plY3RzTGlzdFtpXS5maXJzdENoaWxkLm5leHRTaWJsaW5nLnRleHRDb250ZW50fWApfTtcbiAgICAgICAgICAgIHByb2plY3RzTGlzdFtpXS5hcHBlbmRDaGlsZChvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBOZXcgVGFzayBCdXR0b24gRnVuY3Rpb25cbiAgICBmdW5jdGlvbiBhZGROZXdUYXNrKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwidGFza1RpdGxlXCIpWzBdLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwidGFza0Rlc2NyaXB0aW9uXCIpWzBdLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkdWVEYXRlXCIpWzBdLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwicHJpb3JpdHlcIilbMF0udmFsdWU7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInByb2plY3RcIilbMF0udmFsdWU7XG5cbiAgICAgICAgdGFza0FycmF5LnB1c2godGFza09iamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSk7XG4gICAgfVxuXG4gICAgLy8gQXJyYXlzXG4gICAgY29uc3QgaG9tZVBhZ2VzQXJyYXkgPSBbcGFnZXMoJ0luYm94JywgJ2luYm94JywgZ2VuZXJhdGVUYWIpLCBwYWdlcygnVG9kYXknLCAndG9kYXknLCBnZW5lcmF0ZVRhYiksIHBhZ2VzKCdVcGNvbWluZycsICdkYXRlX3JhbmdlJywgZ2VuZXJhdGVUYWIpXTtcbiAgICBsZXQgcHJvamVjdHNQYWdlc0FycmF5ID0gW3BhZ2VzKCdBZGQgUHJvamVjdCcsICdhZGQnLCBnZW5lcmF0ZUZvcm0pXTtcbiAgICBjb25zdCBDQVRFR09SWSA9IFt7Y2F0ZWdvcnk6ICdIb21lJywgc3ViY2F0ZWdvcnk6IGhvbWVQYWdlc0FycmF5fSwge2NhdGVnb3J5OiAnUHJvamVjdHMnLCBzdWJjYXRlZ29yeTogcHJvamVjdHNQYWdlc0FycmF5fV07XG4gICAgY29uc3QgaGVhZGVyQXJyYXkgPSBbcGFnZXMoJycsICdtZW51JywgdG9nZ2xlTmF2KSwgcGFnZXMoJ0FkZCBOZXcgVGFzaycsICdhZGQnLCBnZW5lcmF0ZUZvcm0pXTtcblxuICAgIC8vIE1vZGFsIEZvcm0gQXJyYXlzXG4gICAgY29uc3QgcHJpb3JpdHlBcnJheSA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ107XG5cbiAgICBjb25zdCBuZXdUYXNrQXJyYXkgPSBbZm9ybUVsZW1lbnRzKCd0YXNrVGl0bGUnLCAnVGl0bGUnLCAnaW5wdXQnLCAndGV4dCcpLCBmb3JtRWxlbWVudHMoJ3Rhc2tEZXNjcmlwdGlvbicsICdEZXNjcmlwdGlvbicsICd0ZXh0YXJlYScsICcnKSwgZm9ybUVsZW1lbnRzKCdkdWVEYXRlJywgJ0R1ZSBEYXRlJywgJ2lucHV0JywgJ2RhdGV0aW1lLWxvY2FsJyksIGZvcm1FbGVtZW50cygncHJpb3JpdHknLCAnUHJpb3JpdHknLCAnc2VsZWN0JywgcHJpb3JpdHlBcnJheSksIGZvcm1FbGVtZW50cygncHJvamVjdCcsICdQcm9qZWN0JywgJ3NlbGVjdCcsIHByb2plY3RzQXJyYXkpXTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gW2Zvcm1FbGVtZW50cygncHJvamVjdE5hbWUnLCAnTmFtZScsICdpbnB1dCcsICd0ZXh0JyldO1xuXG4gICAgLy8gR2VuZXJhdGUgSGVhZGVyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gZG9jdW1lbnQudGl0bGU7XG4gICAgaGVhZGVyLmFwcGVuZChoMSk7XG5cbiAgICAvLyBHZW5lcmF0ZSBIZWFkZXIgSWNvbnNcbiAgICBmb3IgKGxldCBpdGVtIG9mIGhlYWRlckFycmF5KSB7XG4gICAgICAgIGNvbnN0IGhlYWRlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGhlYWRlckljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMtcm91bmQnLCAnbWQtMzYnKTtcbiAgICAgICAgaGVhZGVySWNvbi5pZCA9IGhlYWRlckljb24udGV4dENvbnRlbnQgPSBpdGVtLmljb247XG4gICAgICAgIGhlYWRlckljb24ub25jbGljayA9IGl0ZW0ubGluay5iaW5kKGl0ZW0pO1xuICAgICAgICAoaXRlbS5pY29uID09ICdtZW51JykgPyBoZWFkZXIuaW5zZXJ0QmVmb3JlKGhlYWRlckljb24sIGgxKSA6IGhlYWRlci5hcHBlbmQoaGVhZGVySWNvbik7XG4gICAgfVxuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgICAvLyBHZW5lcmF0ZSBOYXYvU2lkZWJhciBDb250ZW50XG4gICAgQ0FURUdPUlkuZm9yRWFjaCgoY2F0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGNhdENvbnRhaW5lci5pZCA9IGNhdC5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKGNhdENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgY2F0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNhdE5hbWUudGV4dENvbnRlbnQgPSBjYXQuY2F0ZWdvcnk7XG4gICAgICAgIGNhdENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXROYW1lKTtcblxuICAgICAgICBkaXNwbGF5VGFicyhjYXRDb250YWluZXIsIGNhdC5zdWJjYXRlZ29yeSk7XG4gICAgfSlcblxuICAgIC8vIEdlbmVyYXRlIFRhYnNcbiAgICBmdW5jdGlvbiBkaXNwbGF5VGFicyhub2RlQ29udGFpbmVyLCBhcnJheSkge1xuICAgICAgICBmb3IgKGxldCB0YWIgb2YgYXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYktleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICB0YWJLZXkuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhYk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICB0YWJOYW1lLnRleHRDb250ZW50ID0gdGFiLnRpdGxlO1xuXG4gICAgICAgICAgICBjb25zdCB0YWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGFiSWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucy1yb3VuZCcpO1xuICAgICAgICAgICAgdGFiSWNvbi50ZXh0Q29udGVudCA9IHRhYi5pY29uO1xuXG4gICAgICAgICAgICB0YWJLZXkub25jbGljayA9IHRhYi5saW5rLmJpbmQodGFiKTtcblxuICAgICAgICAgICAgdGFiS2V5LmFwcGVuZCh0YWJJY29uLCB0YWJOYW1lKTtcbiAgICAgICAgICAgIG5vZGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFiS2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIE1vZGFsXG4gICAgY29uc3QgbW9kYWxCZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsQmcuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcblxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuXG4gICAgY29uc3QgZXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBleGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ1dHRvbicpO1xuICAgIGV4aXRCdG4udGV4dENvbnRlbnQgPSAnw5cnO1xuXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kKGV4aXRCdG4pO1xuICAgIG1vZGFsQmcuYXBwZW5kKG1vZGFsQ29udGFpbmVyKTtcblxuICAgIC8vIEV4aXQgTW9kYWwgRnVuY3Rpb25cbiAgICBleGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtpZihlLnRhcmdldCA9PSBtb2RhbEJnKSBjbG9zZU1vZGFsKCl9KVxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7bW9kYWxCZy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1tb2RhbFwiKX07XG5cbiAgICAvLyBHZW5lcmF0ZSBTZWxlY3RlZCBUYWIgRWZmZWN0XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIsIG1lbnUsIG1haW4sIG1vZGFsQmcpO1xufTsiLCJsZXQgcHJvamVjdHNBcnJheSA9IFsnSW5ib3gnXTtcblxuY29uc3QgdGFza09iamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0fTtcbn1cblxubGV0IHRhc2tBcnJheSA9IFtdO1xuXG5leHBvcnQge3Byb2plY3RzQXJyYXksIHRhc2tPYmplY3QsIHRhc2tBcnJheX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFVJIGZyb20gJy4vVUknO1xuXG5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==