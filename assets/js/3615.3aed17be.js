"use strict";
exports.id = 3615;
exports.ids = [3615];
exports.modules = {

/***/ 423615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_participant_tile: () => (/* binding */ DyteParticipantTile)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572944);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26468);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(817073);
/* harmony import */ var _index_7b89c939_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(374157);
/* harmony import */ var _flags_f14ed3df_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(764383);
/* harmony import */ var _breakout_rooms_manager_7dc0174a_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(760064);
/* harmony import */ var _default_ui_config_f87e0ba7_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(993514);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(294370);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(455055);
/* harmony import */ var _index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(517213);
/* harmony import */ var _breakout_rooms_dea0806e_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70694);












const dyteParticipantTileCss = ":host {\n  line-height: initial;\n  font-family: var(--dyte-font-family, sans-serif);\n\n  font-feature-settings: normal;\n  font-variation-settings: normal;\n}\n\np {\n  margin: var(--dyte-space-0, 0px);\n  padding: var(--dyte-space-0, 0px);\n}\n\n\n:host {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  aspect-ratio: 16 / 9;\n  height: var(--dyte-space-56, 224px);\n  overflow: hidden;\n  border-radius: var(--dyte-border-radius-lg, 12px);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-video-bg, 24 24 24) / var(--tw-bg-opacity));\n\n  transition-property: var(--dyte-transition-property, all);\n  transition-duration: 150ms;\n  container-type: inline-size;\n  container-name: participanttile;\n}\n\n@media (prefers-reduced-motion) {\n  /* No transitions when disabled */\n  :host {\n    --dyte-transition-property: none;\n  }\n}\n\n/**\n  NOTE: provided :slotted(dyte-name-tag) & dyte-name-tag separately\n  because ::slotted isn't applied on default slots.\n*/\n\n::slotted(dyte-name-tag), \ndyte-name-tag {\n  position: absolute;\n  left: var(--dyte-space-3, 12px);\n  bottom: var(--dyte-space-3, 12px);\n}\n\n:host([size='sm'][variant='solid']) ::slotted(dyte-name-tag), \n  :host([size='sm'][variant='solid']) dyte-name-tag {\n  left: var(--dyte-space-2, 8px);\n  bottom: var(--dyte-space-2, 8px);\n  height: var(--dyte-space-4, 16px);\n}\n\n::slotted(dyte-network-indicator), \ndyte-network-indicator {\n  position: absolute;\n  right: var(--dyte-space-3, 12px);\n  bottom: var(--dyte-space-3, 12px);\n}\n\n:host([size='sm']) ::slotted(dyte-network-indicator), \n  :host([size='sm']) dyte-network-indicator {\n  right: var(--dyte-space-2, 8px);\n  bottom: var(--dyte-space-2, 8px);\n}\n\nvideo {\n  display: none;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: var(--dyte-border-radius-lg, 12px);\n}\n\nvideo.contain {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\nvideo.cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nvideo.visible {\n  display: block;\n}\n\nvideo::-webkit-media-controls {\n  display: none !important;\n}\n\n.pinned-icon {\n  position: absolute;\n  left: var(--dyte-space-3, 12px);\n  top: var(--dyte-space-3, 12px);\n  height: var(--dyte-space-5, 20px);\n  width: var(--dyte-space-5, 20px);\n  padding: var(--dyte-space-1, 4px);\n  border-radius: var(--dyte-border-radius-md, 8px);\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));\n}\n\n:host([size='sm']) .pinned-icon {\n  top: var(--dyte-space-2, 8px);\n  left: var(--dyte-space-2, 8px);\n}\n\n:host([variant='gradient']) ::slotted(dyte-audio-visualizer), \n  :host([variant='gradient']) dyte-audio-visualizer {\n  position: absolute;\n  top: var(--dyte-space-2, 8px);\n  right: var(--dyte-space-2, 8px);\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));\n  padding: var(--dyte-space-2, 8px);\n}\n\n:host([variant='gradient']) ::slotted(dyte-name-tag), \n  :host([variant='gradient']) dyte-name-tag {\n  bottom: var(--dyte-space-0, 0px);\n  left: var(--dyte-space-0, 0px);\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: transparent;\n  background-image: linear-gradient(to top, var(--tw-gradient-stops));\n  --tw-gradient-from: rgb(var(--dyte-colors-background-1000, 8 8 8));\n  --tw-gradient-to: rgba(var(--dyte-colors-background-1000, 8 8 8) / 0);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  --tw-gradient-to: transparent;\n}\n\nvideo.mirror {\n  transform: scaleX(-1);\n}\n\n/** Name tag positions */\n\n:host([name-tag-position='bottom-right']) ::slotted(dyte-name-tag), \n  :host([name-tag-position='bottom-right']) dyte-name-tag {\n  left: auto;\n  right: var(--dyte-space-3, 12px);\n}\n\n:host([name-tag-position='bottom-center']) ::slotted(dyte-name-tag), \n  :host([name-tag-position='bottom-center']) dyte-name-tag {\n  left: auto;\n  right: auto;\n}\n\n:host([name-tag-position='top-left']) ::slotted(dyte-name-tag), \n  :host([name-tag-position='top-left']) dyte-name-tag {\n  top: var(--dyte-space-3, 12px);\n  bottom: auto;\n}\n\n:host([name-tag-position='top-right']) ::slotted(dyte-name-tag), \n  :host([name-tag-position='top-right']) dyte-name-tag {\n  top: var(--dyte-space-3, 12px);\n  right: var(--dyte-space-3, 12px);\n  left: auto;\n  bottom: auto;\n}\n\n:host([name-tag-position='top-center']) ::slotted(dyte-name-tag), \n  :host([name-tag-position='top-center']) dyte-name-tag {\n  left: auto;\n  right: auto;\n  bottom: auto;\n  top: var(--dyte-space-3, 12px);\n}\n\n:host(.hideAvatar) ::slotted(dyte-avatar),\n:host(.hideAvatar) dyte-avatar {\n  display: none;\n}\n\n@media only screen and (max-height: 480px) and (orientation: landscape) {\n  :host([size='sm']) {\n    border-radius: var(--dyte-border-radius-sm, 4px);\n  }\n\n  :host([size='sm']) > video {\n    border-radius: var(--dyte-border-radius-sm, 4px);\n  }\n\n  ::slotted(dyte-avatar),\n  dyte-avatar {\n    transform: scale(0.6);\n    min-width: var(--dyte-space-14, 56px);\n  }\n    :host([size='sm'][variant='solid']) ::slotted(dyte-name-tag),\n    :host([size='sm'][variant='solid']) dyte-name-tag {\n      transform-origin: -2% 100%;\n      transform: scale(0.6);\n      z-index: 10;\n      left: var(--dyte-space-0, 0px);\n      bottom: var(--dyte-space-0, 0px);\n      border-radius: var(--dyte-border-radius-none, 0);\n    }\n}\n\n@media only screen and (max-width: 480px) and (orientation: portrait) {\n  :host([size='sm']) {\n    border-radius: var(--dyte-border-radius-sm, 4px);\n  }\n\n  :host([size='sm']) > video {\n    border-radius: var(--dyte-border-radius-sm, 4px);\n  }\n\n  ::slotted(dyte-avatar),\n  dyte-avatar {\n    transform: scale(0.6);\n    min-width: var(--dyte-space-14, 56px);\n  }\n    :host([size='sm'][variant='solid']) ::slotted(dyte-name-tag),\n    :host([size='sm'][variant='solid']) dyte-name-tag {\n      transform-origin: -5% 110%;\n      transform: scale(0.6);\n      z-index: 10;\n      left: var(--dyte-space-0, 0px);\n      bottom: var(--dyte-space-0, 0px);\n      border-radius: var(--dyte-border-radius-none, 0);\n    }\n}\n\n@container participanttile (max-width: 300px) {\n  ::slotted(dyte-name-tag),\n  dyte-name-tag {\n    transform-origin: 0 100%;\n    transform: scale(0.8);\n  }\n\n  ::slotted(dyte-avatar),\n  dyte-avatar {\n    transform: scale(0.8);\n  }\n}\n\n@container participanttile (max-width: 150px) {\n  ::slotted(dyte-name-tag),\n  dyte-name-tag[variant='solid'] {\n    transform-origin: -10% 130%;\n    transform: scale(0.6);\n    z-index: 10;\n    border-radius: 9999px;\n  }\n\n  ::slotted(dyte-avatar),\n  dyte-avatar {\n    transform: scale(0.6);\n  }\n}\n";

const DyteParticipantTile = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.tileLoad = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "tileLoad", 7);
    this.tileUnload = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "tileUnload", 7);
    this.onVideoUpdate = (videoState) => {
      this.videoState = videoState;
    };
    this.onPinned = ({ isPinned }) => {
      this.isPinned = isPinned;
    };
    this.isSelf = () => { var _a; return this.isPreview || this.participant.id === ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.id); };
    this.onPause = (event) => {
      var _a, _b;
      if (this.isSelf() &&
        ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__.features.hasFeature(_flags_f14ed3df_js__WEBPACK_IMPORTED_MODULE_4__.F.PLAY_PARTICIPANT_TILE_VIDEO_ON_PAUSE))) {
        this.meeting.__internals__.logger.warn(`Video player paused for ${this.participant.id} isSelf: ${this.isSelf()}`);
        // @ts-ignore
        (_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.play();
      }
    };
    this.onPlaying = () => {
      if (this.playTimeout)
        clearTimeout(this.playTimeout);
    };
    this.videoState = undefined;
    this.isPinned = false;
    this.nameTagPosition = 'bottom-left';
    this.isPreview = false;
    this.participant = undefined;
    this.meeting = undefined;
    this.states = undefined;
    this.config = _default_ui_config_f87e0ba7_js__WEBPACK_IMPORTED_MODULE_6__.d;
    this.variant = 'solid';
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_7b89c939_js__WEBPACK_IMPORTED_MODULE_3__.u)();
  }
  onVideoRef(el) {
    this.videoEl = el;
    if (this.isPreview || this.participant == null || this.meeting == null) {
      return;
    }
    this.tileLoad.emit({ participant: this.participant, videoElement: this.videoEl });
  }
  connectedCallback() {
    // set videoState before initial render and initialize listeners
    if (this.meeting)
      this.meetingChanged(this.meeting);
    else
      this.participantsChanged(this.participant);
  }
  componentDidLoad() {
    // load videoState into video element after first render
    this.videoStateChanged(this.videoState);
  }
  disconnectedCallback() {
    if (this.playTimeout)
      clearTimeout(this.playTimeout);
    if (this.participant == null)
      return;
    this.participant.removeListener('videoUpdate', this.onVideoUpdate);
    this.participant.removeListener('pinned', this.onPinned);
    this.participant.removeListener('unpinned', this.onPinned);
    this.tileUnload.emit(this.participant);
  }
  meetingChanged(meeting) {
    if (meeting == undefined)
      return;
    this.participantsChanged(this.participant);
  }
  participantsChanged(participant) {
    if (participant == undefined)
      return;
    this.videoState = {
      videoEnabled: participant.videoEnabled,
      videoTrack: participant.videoTrack,
    };
    if (this.meeting === undefined) {
      if (this.isPreview) {
        participant.addListener('videoUpdate', this.onVideoUpdate);
      }
      return;
    }
    this.isPinned = participant.isPinned;
    participant.addListener('videoUpdate', this.onVideoUpdate);
    participant.addListener('pinned', this.onPinned);
    participant.addListener('unpinned', this.onPinned);
  }
  videoStateChanged(videoState) {
    var _a;
    if (videoState != null && this.videoEl != null) {
      if (videoState.videoEnabled) {
        if ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__.features.hasFeature(_flags_f14ed3df_js__WEBPACK_IMPORTED_MODULE_4__.F.LOG_PLAYING_FAILURES)) {
          if (this.playTimeout)
            clearTimeout(this.playTimeout);
          this.playTimeout = setTimeout(() => {
            var _a;
            (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__.logger.log('dyte-participant-tile::playing_timeout');
          }, 6000);
        }
        const stream = new MediaStream();
        if (videoState.videoTrack == null)
          return;
        stream.addTrack(videoState.videoTrack);
        this.videoEl.srcObject = stream;
      }
      else {
        if (this.playTimeout)
          clearTimeout(this.playTimeout);
        this.videoEl.srcObject = undefined;
      }
    }
  }
  isMirrored() {
    var _a;
    if (this.participant != null) {
      if (this.isSelf()) {
        const states = this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s;
        const mirrorVideo = (_a = states === null || states === void 0 ? void 0 : states.prefs) === null || _a === void 0 ? void 0 : _a.mirrorVideo;
        if (typeof mirrorVideo === 'boolean') {
          return mirrorVideo;
        }
      }
    }
    return false;
  }
  render() {
    var _a, _b, _c, _d;
    const defaults = {
      meeting: this.meeting,
      size: this.size,
      states: this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s,
      config: this.config,
      iconPack: this.iconPack,
      t: this.t,
    };
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { class: { hideAvatar: this.videoState.videoEnabled } }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("video", { ref: (el) => this.onVideoRef(el), class: {
        visible: (_a = this.videoState) === null || _a === void 0 ? void 0 : _a.videoEnabled,
        mirror: this.isMirrored(),
        [(_d = (_c = (_b = this.config) === null || _b === void 0 ? void 0 : _b.config) === null || _c === void 0 ? void 0 : _c.videoFit) !== null && _d !== void 0 ? _d : 'cover']: true,
      }, onPlaying: this.onPlaying, onPause: this.onPause, autoPlay: true, playsInline: true, muted: true, part: "video" }), this.isPinned && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "pinned-icon", icon: this.iconPack.pin, "aria-label": this.t('pinned'), iconPack: this.iconPack, t: this.t, part: "pinned-icon" })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_9__.R, { element: "dyte-participant-tile", defaults: defaults, childProps: {
        participant: this.participant,
      }, deepProps: true, onlyChildren: true }))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "participant": ["participantsChanged"],
    "videoState": ["videoStateChanged"]
  }; }
};
DyteParticipantTile.style = dyteParticipantTileCss;




/***/ }),

/***/ 517213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ Render),
/* harmony export */   l: () => (/* binding */ lenChildren)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572944);


/**
 * Computes selectors and returns them based on their priority.
 */
const computeSelectors = ({ element, size, states = {}, config = {}, }) => {
  let selectors = [];
  const data = config === null || config === void 0 ? void 0 : config.root[element];
  const add = (selector) => {
    selectors.push(selector);
    if (typeof size === 'string') {
      selectors.push(`${selector}.${size}`);
    }
  };
  add(element);
  if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
    // check if the data variable is an object, strictly and not an array or just null
    const { state, states: elementStates } = data;
    let selector = element;
    let activeStates = [];
    if (Array.isArray(elementStates)) {
      activeStates = elementStates.filter((state) => states[state]);
      activeStates.sort();
      for (const state of activeStates) {
        add(`${selector}.${state}`);
      }
      if (activeStates.length > 1) {
        const booleanStateSelector = [selector, ...activeStates].join('.');
        add(booleanStateSelector);
      }
    }
    if (typeof state === 'string') {
      // dyte-meeting[meeting=joined]
      const keyValueSelector = `${element}[${state}=${states[state]}]`;
      add(keyValueSelector);
      for (const state of activeStates) {
        add(`${keyValueSelector}.${state}`);
      }
      if (activeStates.length > 1) {
        const withBooleanStateSelector = [keyValueSelector, ...activeStates].join('.');
        add(withBooleanStateSelector);
      }
    }
  }
  return selectors;
};
/**
 * Returns the computed styles - styles obtained from combining styles from all computed selectors
 * on the basis of their priorities.
 */
const getComputedStyles = ({ selectors, styles }) => {
  if (!Array.isArray(selectors) || styles == null)
    return {};
  const computedStyles = {};
  for (const selector of selectors) {
    const style = styles[selector];
    if (style != null) {
      Object.assign(computedStyles, style);
    }
  }
  return computedStyles;
};
/**
 * Returns the computed children which are to be rendered inside an element
 */
const getComputedChildren = ({ selectors, root }) => {
  if (!root || !Array.isArray(selectors))
    return [];
  let children = [];
  for (const selector of selectors) {
    const el = root[selector];
    if (Array.isArray(el)) {
      children = [...el];
    }
    else if (el) {
      if (el.children) {
        children = [...el.children];
      }
      if (Array.isArray(el.remove)) {
        for (const toRemove of el.remove) {
          children = children.filter((child) => {
            if (typeof child === 'string') {
              return child !== toRemove;
            }
            else if (Array.isArray(child)) {
              return child[0] !== toRemove;
            }
            return true;
          });
        }
      }
      if (el.addBefore) {
        for (const [beforeEl, toAdd] of Object.entries(el.addBefore)) {
          const idx = children.findIndex((child) => {
            if (typeof child === 'string') {
              return child === beforeEl;
            }
            else if (Array.isArray(child)) {
              return child[0] === beforeEl;
            }
            return false;
          });
          if (idx >= 0) {
            children.splice(idx, 0, ...toAdd);
          }
        }
      }
      if (Array.isArray(el.add)) {
        children = children.concat(el.add);
      }
      if (Array.isArray(el.prepend)) {
        children = el.prepend.concat(children);
      }
    }
  }
  return children;
};

/**
 * Renders the children of an element.
 */
const RenderChildren = ({ elements, defaults, props = {}, deepProps = false, elementProps = {}, }) => {
  if (!Array.isArray(elements) || elements.length === 0)
    return null;
  return elements.map((element) => {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Render, { element: element, defaults: defaults, props: props, childProps: deepProps && props, elementProps: elementProps }));
  });
};
const lenChildren = ({ element, defaults, props = {}, elementProps = {} }) => {
  var _a;
  const { config, size, states } = defaults;
  let Tag, configProps = {}, configChildren = [];
  if (Array.isArray(element)) {
    // get props if element is passed in array form:
    // ['dyte-participant-tile', { variant: 'gradient' }]
    [Tag, configProps, ...configChildren] = element;
  }
  else {
    Tag = element;
  }
  const elemData = (_a = config === null || config === void 0 ? void 0 : config.root) === null || _a === void 0 ? void 0 : _a[Tag];
  if (elemData != null && 'props' in elemData) {
    props = Object.assign(Object.assign({}, elemData['props']), props);
  }
  props = Object.assign(Object.assign({}, props), configProps);
  if (Tag in elementProps) {
    props = Object.assign(Object.assign({}, props), elementProps[Tag]);
  }
  const selectors = computeSelectors({ element: Tag, size, states, config });
  const computedChildren = getComputedChildren({ selectors, root: config.root });
  return computedChildren.length;
};
/**
 * Renders an element from UI Config
 */
const Render = ({ element, defaults, childProps = {}, props = {}, onlyChildren = false, asHost = false, deepProps = false, elementProps = {}, }, children) => {
  var _a;
  const { config, size, states } = defaults;
  let Tag, configProps = {}, configChildren = [];
  if (Array.isArray(element)) {
    // get props if element is passed in array form:
    // ['dyte-participant-tile', { variant: 'gradient' }]
    [Tag, configProps, ...configChildren] = element;
  }
  else {
    Tag = element;
  }
  const elemData = (_a = config === null || config === void 0 ? void 0 : config.root) === null || _a === void 0 ? void 0 : _a[Tag];
  if (elemData != null && 'props' in elemData) {
    props = Object.assign(Object.assign({}, elemData['props']), props);
  }
  props = Object.assign(Object.assign({}, props), configProps);
  if (Tag in elementProps) {
    props = Object.assign(Object.assign({}, props), elementProps[Tag]);
  }
  const selectors = computeSelectors({ element: Tag, size, states, config });
  const computedChildren = getComputedChildren({ selectors, root: config.root });
  if (onlyChildren) {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }));
  }
  const styles = getComputedStyles({ selectors, styles: config.styles });
  if (asHost) {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, Object.assign({}, defaults, { style: styles }, props),
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children,
      configChildren.map((child) => {
        if (Array.isArray(child)) {
          const [Tag, props] = child;
          return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, props));
        }
        return child;
      })));
  }
  if (['dyte-header', 'dyte-controlbar'].includes(Tag)) {
    props['disableRender'] = true;
  }
  if (Tag.startsWith('dyte-')) {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, { style: styles }, props),
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children,
      configChildren.map((child) => {
        if (Array.isArray(child)) {
          const [Tag, props] = child;
          return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, props));
        }
        return child;
      })));
  }
  else {
    const [HTMLTag, id] = Tag.split('#');
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(HTMLTag, Object.assign({ id: id, style: styles }, props),
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children,
      configChildren.map((child) => {
        if (Array.isArray(child)) {
          const [Tag, props] = child;
          return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, props));
        }
        return child;
      })));
  }
};




/***/ })

};
;