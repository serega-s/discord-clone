"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_pages_Server_CreateServer_js"],{

/***/ "./src/pages/Server/CreateServer.js":
/*!******************************************!*\
  !*** ./src/pages/Server/CreateServer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _services_servers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/servers */ \"./src/services/servers.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar CreateServer = function CreateServer() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _useState2 = _slicedToArray(_useState, 2),\n      picture = _useState2[0],\n      setPicture = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _useState4 = _slicedToArray(_useState3, 2),\n      banner = _useState4[0],\n      setBanner = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _useState6 = _slicedToArray(_useState5, 2),\n      title = _useState6[0],\n      setTitle = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _useState8 = _slicedToArray(_useState7, 2),\n      description = _useState8[0],\n      setDescription = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _useState10 = _slicedToArray(_useState9, 2),\n      formCategory = _useState10[0],\n      setFormCategory = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState12 = _slicedToArray(_useState11, 2),\n      serverCategory = _useState12[0],\n      setServerCategory = _useState12[1];\n\n  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    (0,_services_servers__WEBPACK_IMPORTED_MODULE_1__.getServerCategories)().then(function (response) {\n      setServerCategory(response);\n    });\n  }, []);\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    var serverCreated = (0,_services_servers__WEBPACK_IMPORTED_MODULE_1__.createNewServer)(picture, banner, title, description, formCategory);\n\n    if (serverCreated) {\n      history.push(\"/\");\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"main\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"container pt-6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"columns is-centered\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"column is-10\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"card-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"title is-3\"\n  }, \"Discord - Create New Server\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"picture-file\",\n    className: \"file has-name is-medium\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: \"file-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    className: \"file-input\",\n    type: \"file\",\n    name: \"resume\",\n    onChange: function onChange(e) {\n      return setPicture(e.target.files[0]);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"file-cta\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"file-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"material-icons\"\n  }, \"file_upload\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"file-label\"\n  }, \"Choose a Picture\\u2026\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"file-name\"\n  }, picture === null || picture === void 0 ? void 0 : picture.name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"banner-file\",\n    className: \"file has-name is-medium\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: \"file-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    className: \"file-input\",\n    type: \"file\",\n    name: \"resume\",\n    onChange: function onChange(e) {\n      return setBanner(e.target.files[0]);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"file-cta\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"file-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"material-icons\"\n  }, \"file_upload\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"file-label\"\n  }, \"Choose a Banner\\u2026\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"file-name\"\n  }, banner === null || banner === void 0 ? void 0 : banner.name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: \"label\"\n  }, \"Title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    className: \"input\",\n    placeholder: \"Title\",\n    onChange: function onChange(e) {\n      return setTitle(e.target.value);\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: \"label\"\n  }, \"Description\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"textarea\", {\n    type: \"text\",\n    className: \"textarea\",\n    placeholder: \"Description\",\n    onChange: function onChange(e) {\n      return setDescription(e.target.value);\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: \"label\"\n  }, \"Category\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"select\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n    defaultValue: \"DEFAULT\",\n    onChange: function onChange(e) {\n      return setFormCategory(e.target.value);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n    value: \"DEFAULT\",\n    disabled: true\n  }, \"Choose a category...\"), serverCategory.map(function (category) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      key: category.id,\n      value: category.id\n    }, category.title);\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"field is-grouped\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    type: \"submit\",\n    className: \"button is-link\"\n  }, \"Submit\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    onClick: function onClick() {\n      return history.push(\"/\");\n    },\n    className: \"button is-link\"\n  }, \"Cancel\"))))))))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateServer);\n\n//# sourceURL=webpack://frontend/./src/pages/Server/CreateServer.js?");

/***/ }),

/***/ "./src/services/servers.js":
/*!*********************************!*\
  !*** ./src/services/servers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServersInCategory\": () => (/* binding */ getServersInCategory),\n/* harmony export */   \"getServerCategories\": () => (/* binding */ getServerCategories),\n/* harmony export */   \"getServersInSearch\": () => (/* binding */ getServersInSearch),\n/* harmony export */   \"createNewServer\": () => (/* binding */ createNewServer),\n/* harmony export */   \"getSideNavServers\": () => (/* binding */ getSideNavServers),\n/* harmony export */   \"getServerData\": () => (/* binding */ getServerData),\n/* harmony export */   \"createNewCategory\": () => (/* binding */ createNewCategory),\n/* harmony export */   \"createNewChannel\": () => (/* binding */ createNewChannel)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar getServersInCategory = function getServersInCategory(id) {\n  var promise = axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"api/server/getserverscategory/\".concat(id, \"/\"));\n  var dataPromise = promise.then(function (response) {\n    return response.data;\n  });\n  return dataPromise;\n};\nvar getServerCategories = function getServerCategories() {\n  var promise = axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"api/server/getcategories/\");\n  var dataPromise = promise.then(function (response) {\n    return response.data;\n  });\n  return dataPromise;\n};\nvar getServersInSearch = function getServersInSearch(title) {\n  var promise = axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"api/server/searchserver?search=\" + title);\n  var dataPromise = promise.then(function (response) {\n    return response.data;\n  });\n  return dataPromise;\n};\nvar createNewServer = function createNewServer(picture, banner, title, description, category) {\n  var formData = new FormData();\n  formData.append(\"picture\", picture);\n  formData.append(\"banner\", banner);\n  formData.append(\"title\", title);\n  formData.append(\"description\", description);\n  formData.append(\"category\", category);\n  axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"api/server/createserver/\", formData).then(function (response) {\n    console.log(formData);\n    console.log(response);\n  })[\"catch\"](function (error) {\n    console.log(error);\n  });\n  return true;\n};\nvar getSideNavServers = function getSideNavServers() {\n  var promise = axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"api/server/getservers/\");\n  var dataPromise = promise.then(function (response) {\n    return response.data;\n  });\n  return dataPromise;\n};\nvar getServerData = function getServerData(id) {\n  var promise = axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"api/server/getserverdetail/\".concat(id, \"/\"));\n  var dataPromise = promise.then(function (response) {\n    return response.data;\n  });\n  return dataPromise;\n};\nvar createNewCategory = function createNewCategory(server_id, title) {\n  var post_body = {\n    server_id: server_id,\n    title: title\n  };\n  var promise = axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"api/server/createcategorychannel/\", post_body);\n  var dataPromise = promise.then(function (response) {\n    return response.data;\n  });\n  return dataPromise;\n};\nvar createNewChannel = function createNewChannel(server_id, category_id, title, topic) {\n  var post_body = {\n    server_id: server_id,\n    title: title,\n    category_id: category_id,\n    topic: topic\n  };\n  var promise = axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"api/server/createtextchannel/\", post_body);\n  var dataPromise = promise.then(function (response) {\n    return response.data;\n  });\n  return dataPromise;\n};\n\n//# sourceURL=webpack://frontend/./src/services/servers.js?");

/***/ })

}]);