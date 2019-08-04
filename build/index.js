/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls,
    ColorPalette = _wp$editor.ColorPalette,
    MediaUpload = _wp$editor.MediaUpload;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    IconButton = _wp$components.IconButton;
registerBlockType('alecaddd/custom-cta', {
  title: 'Call to Action',
  description: 'Block to generate a custom Call to Action',
  icon: 'format-image',
  category: 'layout',
  // custom attributes
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    titleColor: {
      type: 'string',
      default: 'black'
    },
    body: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    backgroundImage: {
      type: 'string',
      default: null
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var title = attributes.title,
        body = attributes.body,
        titleColor = attributes.titleColor,
        backgroundImage = attributes.backgroundImage; // custom functions

    function onChangeTitle(newTitle) {
      setAttributes({
        title: newTitle
      });
    }

    function onChangeBody(newBody) {
      setAttributes({
        body: newBody
      });
    }

    function onTitleColorChange(newColor) {
      setAttributes({
        titleColor: newColor
      });
    }

    function onSelectImage(newImage) {
      setAttributes({
        backgroundImage: newImage.sizes.full.url
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Font Color Settings'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Select a Title color:")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: titleColor,
      onChange: onTitleColorChange
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Background Image Settings'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Select a Background Image:")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: backgroundImage,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "editor-media-placeholder__button is-button is-default is-large",
          icon: "upload",
          onClick: open
        }, "Background Image");
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "cta-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "h2",
      placeholder: "Your CTA Title",
      value: title,
      onChange: onChangeTitle,
      style: {
        color: titleColor
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "p",
      placeholder: "Your CTA Description",
      value: body,
      onChange: onChangeBody
    }))];
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var title = attributes.title,
        body = attributes.body,
        titleColor = attributes.titleColor;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "cta-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      style: {
        color: titleColor
      }
    }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "p",
      value: body
    }));
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map