"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_pages_Profile_Profile_js"],{

/***/ "./src/pages/Profile/Profile.js":
/*!**************************************!*\
  !*** ./src/pages/Profile/Profile.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Loader */ \"./src/components/Loader.js\");\n/* harmony import */ var _services_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/profile */ \"./src/services/profile.js\");\n/* harmony import */ var _components_UpdateProfileModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/UpdateProfileModal */ \"./src/pages/Profile/components/UpdateProfileModal.js\");\nvar _this = undefined;\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar Profile = function Profile() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      dataLoaded = _useState2[0],\n      setDataLoaded = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      _useState4 = _slicedToArray(_useState3, 2),\n      profile = _useState4[0],\n      setProfile = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      _useState6 = _slicedToArray(_useState5, 2),\n      name = _useState6[0],\n      setName = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      _useState8 = _slicedToArray(_useState7, 2),\n      email = _useState8[0],\n      setEmail = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      _useState10 = _slicedToArray(_useState9, 2),\n      profileInfo = _useState10[0],\n      setProfileInfo = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      _useState12 = _slicedToArray(_useState11, 2),\n      profileBanner = _useState12[0],\n      setProfileBanner = _useState12[1];\n\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      _useState14 = _slicedToArray(_useState13, 2),\n      profilePicture = _useState14[0],\n      setProfilePicture = _useState14[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    (0,_services_profile__WEBPACK_IMPORTED_MODULE_2__.getProfileData)().then(function (response) {\n      setProfile(response);\n      setDataLoaded(true);\n    });\n  }, []);\n\n  var handleUpdateProfile = function handleUpdateProfile(e) {\n    e.preventDefault();\n    (0,_services_profile__WEBPACK_IMPORTED_MODULE_2__.updateProfileData)(name, email, profileInfo, profilePicture, profileBanner).then(function (response) {\n      setProfile(response);\n    });\n    modalClose(\"update-profile-modal\");\n  };\n\n  var modalTrigger = function modalTrigger(parameter, category_id) {\n    var modal = document.getElementById(parameter);\n    modal.style.display = \"block\";\n  };\n\n  var modalClose = function modalClose(parameter) {\n    var modal = document.getElementById(parameter);\n    modal.style.display = \"none\";\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, dataLoaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_UpdateProfileModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    modalClose: modalClose,\n    handleUpdateProfile: handleUpdateProfile,\n    profile: profile,\n    setName: setName,\n    setEmail: setEmail,\n    setProfileInfo: setProfileInfo,\n    setProfileBanner: setProfileBanner,\n    setProfilePicture: setProfilePicture,\n    profileBanner: profileBanner,\n    profilePicture: profilePicture\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"columns\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"column is-half is-offset-one-quarter\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"card-image\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"image\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figure\", {\n    className: \"image\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: profile.banner,\n    key: profile.banner\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"card-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"media\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"media-left\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figure\", {\n    className: \"image is-64x64 mx-auto\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: profile.picture,\n    key: profile.picture\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"media-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"title is-4\"\n  }, profile.user.first_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"subtitle is-6\"\n  }, \"@\", profile.user.username))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"content\"\n  }, profile.profile_info)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"card-footer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    onClick: modalTrigger.bind(_this, \"update-profile-modal\"),\n    className: \"card-footer-item\"\n  }, \"Update Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    className: \"card-footer-item\"\n  })))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\n\n//# sourceURL=webpack://frontend/./src/pages/Profile/Profile.js?");

/***/ }),

/***/ "./src/pages/Profile/components/UpdateProfileModal.js":
/*!************************************************************!*\
  !*** ./src/pages/Profile/components/UpdateProfileModal.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar _this = undefined;\n\n\n\nvar UpdateProfileModal = function UpdateProfileModal(_ref) {\n  var modalClose = _ref.modalClose,\n      handleUpdateProfile = _ref.handleUpdateProfile,\n      setName = _ref.setName,\n      profile = _ref.profile,\n      setEmail = _ref.setEmail,\n      setProfileInfo = _ref.setProfileInfo,\n      setProfileBanner = _ref.setProfileBanner,\n      setProfilePicture = _ref.setProfilePicture,\n      profileBanner = _ref.profileBanner,\n      profilePicture = _ref.profilePicture;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"modal\",\n    id: \"update-profile-modal\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"modal-background\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"modal-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n    onSubmit: handleUpdateProfile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"header\", {\n    className: \"modal-card-head\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"modal-card-title\"\n  }, \"Update Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    onClick: modalClose.bind(_this, \"update-profile-modal\"),\n    className: \"delete\",\n    \"aria-label\": \"close\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    className: \"modal-card-body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: \"label\"\n  }, \"Your Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    value: profile.user.first_name,\n    className: \"input\",\n    onChange: function onChange(e) {\n      return setName(e.target.value);\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: \"label\"\n  }, \"Your Email\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    value: profile.user.email,\n    className: \"input\",\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: \"label\"\n  }, \"Profile Info\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"textarea\", {\n    className: \"textarea\",\n    onChange: function onChange(e) {\n      return setProfileInfo(e.target.value);\n    },\n    value: profile.profile_info\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: \"label\"\n  }, \"Change Profile Banner\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"level-right\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"level-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"file is-right is-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: \"file-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    className: \"file-input\",\n    type: \"file\",\n    name: \"resume\",\n    onChange: function onChange(e) {\n      return setProfileBanner(e.target.files[0]);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"file-cta\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"file-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"material-icons\"\n  }, \"file_upload\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"file-name\"\n  }, profileBanner ? profileBanner === null || profileBanner === void 0 ? void 0 : profileBanner.name : \"Add a File...\"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: \"label\"\n  }, \"Change Profile Picture\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"level-right\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"level-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"file is-right is-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: \"file-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    className: \"file-input\",\n    type: \"file\",\n    name: \"resume\",\n    onChange: function onChange(e) {\n      return setProfilePicture(e.target.files[0]);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"file-cta\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"file-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"material-icons\"\n  }, \"file_upload\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"file-name\"\n  }, profilePicture ? profilePicture === null || profilePicture === void 0 ? void 0 : profilePicture.name : \"Add a File...\")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"footer\", {\n    className: \"modal-card-foot\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    type: \"submit\",\n    className: \"button is-success\"\n  }, \"Save changes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    onClick: modalClose.bind(_this, \"add-category-modal\"),\n    className: \"button\"\n  }, \"Cancel\")))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateProfileModal);\n\n//# sourceURL=webpack://frontend/./src/pages/Profile/components/UpdateProfileModal.js?");

/***/ }),

/***/ "./src/services/profile.js":
/*!*********************************!*\
  !*** ./src/services/profile.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProfileData\": () => (/* binding */ getProfileData),\n/* harmony export */   \"updateProfileData\": () => (/* binding */ updateProfileData)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar getProfileData = function getProfileData() {\n  var promise = axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"api/profile/getprofile/\");\n  var dataPromise = promise.then(function (response) {\n    return response.data;\n  });\n  return dataPromise;\n};\nvar updateProfileData = function updateProfileData(name, email, profile_info, picture, banner) {\n  var formData = new FormData();\n\n  if (name) {\n    formData.append(\"first_name\", name);\n  } else if (email) {\n    formData.append(\"email\", email);\n  } else if (profile_info) {\n    formData.append(\"profile_info\", profile_info);\n  } else if (picture) {\n    formData.append(\"picture\", picture);\n  } else if (banner) {\n    formData.append(\"banner\", banner);\n  }\n\n  var promise = axios__WEBPACK_IMPORTED_MODULE_0___default().patch(\"api/profile/updateprofile/\", formData);\n  var dataPromise = promise.then(function (response) {\n    return response.data;\n  });\n  return dataPromise;\n};\n\n//# sourceURL=webpack://frontend/./src/services/profile.js?");

/***/ })

}]);