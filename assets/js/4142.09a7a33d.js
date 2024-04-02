"use strict";
exports.id = 4142;
exports.ids = [4142];
exports.modules = {

/***/ 514142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_audio_grid: () => (/* binding */ DyteAudioGrid)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572944);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_7dc0174a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(760064);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(294370);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(817073);
/* harmony import */ var _index_7b89c939_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(374157);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(455055);
/* harmony import */ var _index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(517213);
/* harmony import */ var _breakout_rooms_dea0806e_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70694);
/* harmony import */ var _flags_f14ed3df_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(764383);











const dyteAudioGridCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{position:relative;height:100%;width:100%;box-sizing:border-box}.content{position:relative;display:flex;height:100%;width:100%;flex-direction:column;overflow-y:auto}.waitlist-area{display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.listening-title{text-align:center;margin-top:var(--dyte-space-5, 20px);margin-bottom:var(--dyte-space-4, 16px)}.waitlist-grid{flex:1 1 0%}.grid{box-sizing:border-box;flex:1 1 0%;gap:var(--dyte-space-6, 24px);display:flex;align-content:center;justify-content:center;flex-wrap:wrap}:host([size='md']) .grid{gap:var(--dyte-space-4, 16px)}:host([size='sm']) .grid{gap:var(--dyte-space-3, 12px)}dyte-audio-tile{aspect-ratio:1 / 1;flex:none;width:calc(20%);max-width:var(--dyte-space-48, 192px);transition:all 0.3s}dyte-audio-tile[size='md']{width:100%;max-width:var(--dyte-space-36, 144px)}dyte-audio-tile[size='sm']{width:100%;max-width:var(--dyte-space-24, 96px)}";

const DyteAudioGrid = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onParticipantListUpdate = () => {
      if (!this.meeting) {
        return;
      }
      let activeParticipants = this.meeting.participants.active.toArray();
      if (!this.hideSelf) {
        activeParticipants = [...activeParticipants, this.meeting.self];
      }
      let onStageParticipants = this.meeting.participants.joined
        .toArray()
        .filter((p) => !activeParticipants.some((a) => a.id === p.id));
      this.activeParticipants = activeParticipants;
      this.onStageParticipants = onStageParticipants;
    };
    this.meeting = undefined;
    this.config = undefined;
    this.states = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.size = undefined;
    this.t = (0,_index_7b89c939_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.hideSelf = false;
    this.activeParticipants = [];
    this.onStageParticipants = [];
    this.offStageParticipants = [];
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  meetingChanged(meeting) {
    if (!meeting || meeting.self.config.viewType !== 'AUDIO_ROOM') {
      return;
    }
    this.onParticipantListUpdate();
    // listeners
    meeting.participants.active.addListener('participantJoined', this.onParticipantListUpdate);
    meeting.participants.active.addListener('participantLeft', this.onParticipantListUpdate);
    meeting.participants.joined.addListener('participantJoined', this.onParticipantListUpdate);
    meeting.participants.joined.addListener('participantLeft', this.onParticipantListUpdate);
  }
  disconnectedCallback() {
    this.resizeObserver.disconnect();
    this.resizeObserver = undefined;
    this.meeting.participants.active.removeListener('participantJoined', this.onParticipantListUpdate);
    this.meeting.participants.active.removeListener('participantLeft', this.onParticipantListUpdate);
    this.meeting.participants.joined.removeListener('participantJoined', this.onParticipantListUpdate);
    this.meeting.participants.joined.removeListener('participantLeft', this.onParticipantListUpdate);
  }
  renderGrid(participants = []) {
    const defaults = {
      meeting: this.meeting,
      size: this.size,
      config: this.config,
      t: this.t,
      iconPack: this.iconPack,
      states: this.states,
    };
    return participants.map((participant) => {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9bb85c23_js__WEBPACK_IMPORTED_MODULE_7__.R, { element: "dyte-audio-tile", defaults: defaults, props: {
          key: participant.id,
          participant,
        }, childProps: {
          participant,
        }, deepProps: true }));
    });
  }
  render() {
    const onStage = this.activeParticipants.concat(this.onStageParticipants);
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "content scrollbar" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "stage grid" }, this.renderGrid(onStage)), this.offStageParticipants.length > 0 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "waitlist-area" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "listening-title" }, this.offStageParticipants.length, " ", this.t('grid.listening')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "waitlist-grid grid" }, this.renderGrid(this.offStageParticipants))))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  get host() { return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteAudioGrid.style = dyteAudioGridCss;




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