"use strict";
exports.id = 863;
exports.ids = [863];
exports.modules = {

/***/ 810863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_ui_provider: () => (/* binding */ DyteUiProvider)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572944);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_7dc0174a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(760064);
/* harmony import */ var _config_5075148d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968759);
/* harmony import */ var _default_ui_config_f87e0ba7_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(993514);
/* harmony import */ var _size_d48d31c8_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(520037);
/* harmony import */ var _index_7b89c939_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(374157);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(294370);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(455055);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(817073);
/* harmony import */ var _breakout_rooms_dea0806e_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70694);
/* harmony import */ var _flags_f14ed3df_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(764383);
/* harmony import */ var _keysIn_8bf552ee_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(984898);
/* harmony import */ var _isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(849583);















const DyteUiProvider = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.meeting = undefined;
    this.size = undefined;
    this.config = _default_ui_config_f87e0ba7_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_7b89c939_js__WEBPACK_IMPORTED_MODULE_6__.u)();
    this.iconPackUrl = undefined;
    this.loadConfigFromPreset = true;
    this.applyDesignSystem = true;
    this.joinRoom = true;
    this.isReady = false;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_9__.d;
  }
  async iconPackUrlChanged(url) {
    this.iconPack = await (0,_size_d48d31c8_js__WEBPACK_IMPORTED_MODULE_5__.g)(url);
  }
  async meetingChanged(meeting) {
    var _a;
    if (!meeting)
      return;
    if (!meeting.self.roomJoined && this.joinRoom) {
      this.isReady = false;
      await meeting.joinRoom();
      this.isReady = true;
    }
    if (this.loadConfigFromPreset && meeting.self.config != null) {
      const theme = meeting.self.config;
      const { config } = (0,_config_5075148d_js__WEBPACK_IMPORTED_MODULE_3__.g)(theme, meeting);
      if (this.config === _default_ui_config_f87e0ba7_js__WEBPACK_IMPORTED_MODULE_4__.d) {
        // only override the config if the object is same as defaultConfig
        // which means it's a different object passed via prop
        this.config = Object.assign(Object.assign(Object.assign({}, _default_ui_config_f87e0ba7_js__WEBPACK_IMPORTED_MODULE_4__.d), config), { designTokens: Object.assign(Object.assign({}, _default_ui_config_f87e0ba7_js__WEBPACK_IMPORTED_MODULE_4__.d.designTokens), config.designTokens) });
      }
    }
    if (this.applyDesignSystem &&
      ((_a = this.config) === null || _a === void 0 ? void 0 : _a.designTokens) != null &&
      typeof document !== 'undefined') {
      (0,_config_5075148d_js__WEBPACK_IMPORTED_MODULE_3__.p)(document.documentElement, this.config.designTokens);
    }
    Array.from(this.hostEl.children)
      .filter((element) => element.tagName.startsWith('DYTE-'))
      .forEach((element) => {
      element['meeting'] = meeting;
      element['config'] = this.config;
      element['size'] = this.size;
      element['iconPack'] = this.iconPack;
      element['t'] = this.t;
    });
  }
  connectedCallback() {
    this.resizeObserver = new ResizeObserver(() => this.handleResize());
    this.resizeObserver.observe(this.hostEl);
    this.meetingChanged(this.meeting);
    this.iconPackUrlChanged(this.iconPackUrl);
  }
  handleResize() {
    this.size = (0,_size_d48d31c8_js__WEBPACK_IMPORTED_MODULE_5__.a)(this.hostEl.clientWidth);
  }
  render() {
    if (!this.isReady)
      return null;
    return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null);
  }
  get hostEl() { return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "iconPackUrl": ["iconPackUrlChanged"],
    "meeting": ["meetingChanged"]
  }; }
};




/***/ }),

/***/ 520037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getSize),
/* harmony export */   g: () => (/* binding */ getIconPack)
/* harmony export */ });
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(817073);


const getIconPack = async (url) => {
  // check for both null/undefined
  if (url == null) {
    return _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_0__.d;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_0__.d;
    }
    // merge defaultIconPack with the received iconPack so as to
    // fill the missing icons with default ones
    return Object.assign({}, _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_0__.d, await res.json());
  }
  catch (_) {
    return _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_0__.d;
  }
};

const sm = 640;
const md = 768;
const lg = 1080;
const xl = 2160;
const breakpoints = {
	sm: sm,
	md: md,
	lg: lg,
	xl: xl
};

/**
 * Get the screen breakpoint from a given width
 * @param width The width of the container
 * @returns The screen breakpoint value
 */
const getSize = (width) => {
  if (width >= breakpoints.lg)
    return 'lg';
  else if (width >= breakpoints.md)
    return 'md';
  else
    return 'sm';
};




/***/ })

};
;