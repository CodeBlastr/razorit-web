(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_d01ffd._.js", {

"[project]/components/common/Parallax.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ParallaxContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jarallax$2f$dist$2f$jarallax$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jarallax/dist/jarallax.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function ParallaxContainer(props) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParallaxContainer.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jarallax$2f$dist$2f$jarallax$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jarallax"])(document.querySelectorAll(".parallax-5"), {
                speed: 0.5
            });
        }
    }["ParallaxContainer.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props,
        children: props.children
    }, void 0, false, {
        fileName: "[project]/components/common/Parallax.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(ParallaxContainer, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ParallaxContainer;
var _c;
__turbopack_refresh__.register(_c, "ParallaxContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/jarallax/dist/jarallax.esm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*!
 * Jarallax v2.2.1 (https://github.com/nk-o/jarallax)
 * Copyright 2024 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
 */ __turbopack_esm__({
    "jarallax": (()=>jarallax),
    "jarallaxElement": (()=>jarallaxElement),
    "jarallaxVideo": (()=>jarallaxVideo)
});
var defaults$1 = {
    // Base parallax options.
    type: 'scroll',
    speed: 0.5,
    containerClass: 'jarallax-container',
    imgSrc: null,
    imgElement: '.jarallax-img',
    imgSize: 'cover',
    imgPosition: '50% 50%',
    imgRepeat: 'no-repeat',
    keepImg: false,
    elementInViewport: null,
    zIndex: -100,
    disableParallax: false,
    // Callbacks.
    onScroll: null,
    onInit: null,
    onDestroy: null,
    onCoverImage: null,
    // Video options.
    videoClass: 'jarallax-video',
    videoSrc: null,
    videoStartTime: 0,
    videoEndTime: 0,
    videoVolume: 0,
    videoLoop: true,
    videoPlayOnlyVisible: true,
    videoLazyLoading: true,
    disableVideo: false,
    // Video callbacks.
    onVideoInsert: null,
    onVideoWorkerInit: null
};
/* eslint-disable import/no-mutable-exports */ /* eslint-disable no-restricted-globals */ let win$1;
if (typeof window !== 'undefined') {
    win$1 = window;
} else if (typeof global !== 'undefined') {
    win$1 = global;
} else if (typeof self !== 'undefined') {
    win$1 = self;
} else {
    win$1 = {};
}
var global$2 = win$1;
/**
 * Add styles to element.
 *
 * @param {Element} el - element.
 * @param {String|Object} styles - styles list.
 *
 * @returns {Element}
 */ function css(el, styles) {
    if (typeof styles === 'string') {
        return global$2.getComputedStyle(el).getPropertyValue(styles);
    }
    Object.keys(styles).forEach((key)=>{
        el.style[key] = styles[key];
    });
    return el;
}
/**
 * Extend like jQuery.extend
 *
 * @param {Object} out - output object.
 * @param {...any} args - additional objects to extend.
 *
 * @returns {Object}
 */ function extend$1(out, ...args) {
    out = out || {};
    Object.keys(args).forEach((i)=>{
        if (!args[i]) {
            return;
        }
        Object.keys(args[i]).forEach((key)=>{
            out[key] = args[i][key];
        });
    });
    return out;
}
/**
 * Get all parents of the element.
 *
 * @param {Element} elem - DOM element.
 *
 * @returns {Array}
 */ function getParents(elem) {
    const parents = [];
    while(elem.parentElement !== null){
        elem = elem.parentElement;
        if (elem.nodeType === 1) {
            parents.push(elem);
        }
    }
    return parents;
}
/**
 * Document ready callback.
 * @param {Function} callback - callback will be fired once Document ready.
 */ function ready(callback) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        // Already ready or interactive, execute callback
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback, {
            capture: true,
            once: true,
            passive: true
        });
    }
}
const { navigator: navigator$1 } = global$2;
const mobileAgent = /*#__PURE__*/ /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator$1.userAgent);
function isMobile() {
    return mobileAgent;
}
let wndW;
let wndH;
let $deviceHelper;
/**
 * The most popular mobile browsers changes height after page scroll and this generates image jumping.
 * We can fix it using this workaround with vh units.
 */ function getDeviceHeight() {
    if (!$deviceHelper && document.body) {
        $deviceHelper = document.createElement('div');
        $deviceHelper.style.cssText = 'position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;';
        document.body.appendChild($deviceHelper);
    }
    return ($deviceHelper ? $deviceHelper.clientHeight : 0) || global$2.innerHeight || document.documentElement.clientHeight;
}
function updateWindowHeight() {
    wndW = global$2.innerWidth || document.documentElement.clientWidth;
    if (isMobile()) {
        wndH = getDeviceHeight();
    } else {
        wndH = global$2.innerHeight || document.documentElement.clientHeight;
    }
}
updateWindowHeight();
global$2.addEventListener('resize', updateWindowHeight);
global$2.addEventListener('orientationchange', updateWindowHeight);
global$2.addEventListener('load', updateWindowHeight);
ready(()=>{
    updateWindowHeight();
});
function getWindowSize() {
    return {
        width: wndW,
        height: wndH
    };
}
// List with all jarallax instances
// need to render all in one scroll/resize event.
const jarallaxList = [];
function updateParallax() {
    if (!jarallaxList.length) {
        return;
    }
    const { width: wndW, height: wndH } = getWindowSize();
    jarallaxList.forEach((data, k)=>{
        const { instance, oldData } = data;
        if (!instance.isVisible()) {
            return;
        }
        const clientRect = instance.$item.getBoundingClientRect();
        const newData = {
            width: clientRect.width,
            height: clientRect.height,
            top: clientRect.top,
            bottom: clientRect.bottom,
            wndW,
            wndH
        };
        const isResized = !oldData || oldData.wndW !== newData.wndW || oldData.wndH !== newData.wndH || oldData.width !== newData.width || oldData.height !== newData.height;
        const isScrolled = isResized || !oldData || oldData.top !== newData.top || oldData.bottom !== newData.bottom;
        jarallaxList[k].oldData = newData;
        if (isResized) {
            instance.onResize();
        }
        if (isScrolled) {
            instance.onScroll();
        }
    });
    global$2.requestAnimationFrame(updateParallax);
}
const visibilityObserver = /*#__PURE__*/ new global$2.IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.jarallax.isElementInViewport = entry.isIntersecting;
    });
}, {
    // We have to start parallax calculation before the block is in view
    // to prevent possible parallax jumping.
    rootMargin: '50px'
});
function addObserver(instance) {
    jarallaxList.push({
        instance
    });
    if (jarallaxList.length === 1) {
        global$2.requestAnimationFrame(updateParallax);
    }
    visibilityObserver.observe(instance.options.elementInViewport || instance.$item);
}
function removeObserver(instance) {
    jarallaxList.forEach((data, key)=>{
        if (data.instance.instanceID === instance.instanceID) {
            jarallaxList.splice(key, 1);
        }
    });
    visibilityObserver.unobserve(instance.options.elementInViewport || instance.$item);
}
/* eslint-disable class-methods-use-this */ const { navigator } = global$2;
let instanceID = 0;
// Jarallax class
class Jarallax {
    constructor(item, userOptions){
        const self1 = this;
        self1.instanceID = instanceID;
        instanceID += 1;
        self1.$item = item;
        self1.defaults = {
            ...defaults$1
        };
        // prepare data-options
        const dataOptions = self1.$item.dataset || {};
        const pureDataOptions = {};
        Object.keys(dataOptions).forEach((key)=>{
            const lowerCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);
            if (lowerCaseOption && typeof self1.defaults[lowerCaseOption] !== 'undefined') {
                pureDataOptions[lowerCaseOption] = dataOptions[key];
            }
        });
        self1.options = self1.extend({}, self1.defaults, pureDataOptions, userOptions);
        self1.pureOptions = self1.extend({}, self1.options);
        // prepare 'true' and 'false' strings to boolean
        Object.keys(self1.options).forEach((key)=>{
            if (self1.options[key] === 'true') {
                self1.options[key] = true;
            } else if (self1.options[key] === 'false') {
                self1.options[key] = false;
            }
        });
        // fix speed option [-1.0, 2.0]
        self1.options.speed = Math.min(2, Math.max(-1, parseFloat(self1.options.speed)));
        // prepare disableParallax callback
        if (typeof self1.options.disableParallax === 'string') {
            self1.options.disableParallax = new RegExp(self1.options.disableParallax);
        }
        if (self1.options.disableParallax instanceof RegExp) {
            const disableParallaxRegexp = self1.options.disableParallax;
            self1.options.disableParallax = ()=>disableParallaxRegexp.test(navigator.userAgent);
        }
        if (typeof self1.options.disableParallax !== 'function') {
            // Support for `true` option value.
            const disableParallaxDefault = self1.options.disableParallax;
            self1.options.disableParallax = ()=>disableParallaxDefault === true;
        }
        // prepare disableVideo callback
        if (typeof self1.options.disableVideo === 'string') {
            self1.options.disableVideo = new RegExp(self1.options.disableVideo);
        }
        if (self1.options.disableVideo instanceof RegExp) {
            const disableVideoRegexp = self1.options.disableVideo;
            self1.options.disableVideo = ()=>disableVideoRegexp.test(navigator.userAgent);
        }
        if (typeof self1.options.disableVideo !== 'function') {
            // Support for `true` option value.
            const disableVideoDefault = self1.options.disableVideo;
            self1.options.disableVideo = ()=>disableVideoDefault === true;
        }
        // custom element to check if parallax in viewport
        let elementInVP = self1.options.elementInViewport;
        // get first item from array
        if (elementInVP && typeof elementInVP === 'object' && typeof elementInVP.length !== 'undefined') {
            [elementInVP] = elementInVP;
        }
        // check if dom element
        if (!(elementInVP instanceof Element)) {
            elementInVP = null;
        }
        self1.options.elementInViewport = elementInVP;
        self1.image = {
            src: self1.options.imgSrc || null,
            $container: null,
            useImgTag: false,
            // 1. Position fixed is needed for the most of browsers because absolute position have glitches
            // 2. On MacOS with smooth scroll there is a huge lags with absolute position - https://github.com/nk-o/jarallax/issues/75
            // 3. Previously used 'absolute' for mobile devices. But we re-tested on iPhone 12 and 'fixed' position is working better, then 'absolute', so for now position is always 'fixed'
            position: 'fixed'
        };
        if (self1.initImg() && self1.canInitParallax()) {
            self1.init();
        }
    }
    css(el, styles) {
        return css(el, styles);
    }
    extend(out, ...args) {
        return extend$1(out, ...args);
    }
    // get window size and scroll position. Useful for extensions
    getWindowData() {
        const { width, height } = getWindowSize();
        return {
            width,
            height,
            y: document.documentElement.scrollTop
        };
    }
    // Jarallax functions
    initImg() {
        const self1 = this;
        // find image element
        let $imgElement = self1.options.imgElement;
        if ($imgElement && typeof $imgElement === 'string') {
            $imgElement = self1.$item.querySelector($imgElement);
        }
        // check if dom element
        if (!($imgElement instanceof Element)) {
            if (self1.options.imgSrc) {
                $imgElement = new Image();
                $imgElement.src = self1.options.imgSrc;
            } else {
                $imgElement = null;
            }
        }
        if ($imgElement) {
            if (self1.options.keepImg) {
                self1.image.$item = $imgElement.cloneNode(true);
            } else {
                self1.image.$item = $imgElement;
                self1.image.$itemParent = $imgElement.parentNode;
            }
            self1.image.useImgTag = true;
        }
        // true if there is img tag
        if (self1.image.$item) {
            return true;
        }
        // get image src
        if (self1.image.src === null) {
            self1.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
            self1.image.bgImage = self1.css(self1.$item, 'background-image');
        }
        return !(!self1.image.bgImage || self1.image.bgImage === 'none');
    }
    canInitParallax() {
        return !this.options.disableParallax();
    }
    init() {
        const self1 = this;
        const containerStyles = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden'
        };
        let imageStyles = {
            pointerEvents: 'none',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
        };
        if (!self1.options.keepImg) {
            // save default user styles
            const curStyle = self1.$item.getAttribute('style');
            if (curStyle) {
                self1.$item.setAttribute('data-jarallax-original-styles', curStyle);
            }
            if (self1.image.useImgTag) {
                const curImgStyle = self1.image.$item.getAttribute('style');
                if (curImgStyle) {
                    self1.image.$item.setAttribute('data-jarallax-original-styles', curImgStyle);
                }
            }
        }
        // set relative position and z-index to the parent
        if (self1.css(self1.$item, 'position') === 'static') {
            self1.css(self1.$item, {
                position: 'relative'
            });
        }
        if (self1.css(self1.$item, 'z-index') === 'auto') {
            self1.css(self1.$item, {
                zIndex: 0
            });
        }
        // container for parallax image
        self1.image.$container = document.createElement('div');
        self1.css(self1.image.$container, containerStyles);
        self1.css(self1.image.$container, {
            'z-index': self1.options.zIndex
        });
        // it will remove some image overlapping
        // overlapping occur due to an image position fixed inside absolute position element
        // needed only when background in fixed position
        if (this.image.position === 'fixed') {
            self1.css(self1.image.$container, {
                '-webkit-clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
            });
        }
        // Add container unique ID.
        self1.image.$container.setAttribute('id', `jarallax-container-${self1.instanceID}`);
        // Add container class.
        if (self1.options.containerClass) {
            self1.image.$container.setAttribute('class', self1.options.containerClass);
        }
        self1.$item.appendChild(self1.image.$container);
        // use img tag
        if (self1.image.useImgTag) {
            imageStyles = self1.extend({
                'object-fit': self1.options.imgSize,
                'object-position': self1.options.imgPosition,
                'max-width': 'none'
            }, containerStyles, imageStyles);
        // use div with background image
        } else {
            self1.image.$item = document.createElement('div');
            if (self1.image.src) {
                imageStyles = self1.extend({
                    'background-position': self1.options.imgPosition,
                    'background-size': self1.options.imgSize,
                    'background-repeat': self1.options.imgRepeat,
                    'background-image': self1.image.bgImage || `url("${self1.image.src}")`
                }, containerStyles, imageStyles);
            }
        }
        if (self1.options.type === 'opacity' || self1.options.type === 'scale' || self1.options.type === 'scale-opacity' || self1.options.speed === 1) {
            self1.image.position = 'absolute';
        }
        // 1. Check if one of parents have transform style (without this check, scroll transform will be inverted if used parallax with position fixed)
        //    discussion - https://github.com/nk-o/jarallax/issues/9
        // 2. Check if parents have overflow scroll
        if (self1.image.position === 'fixed') {
            const $parents = getParents(self1.$item).filter((el)=>{
                const styles = global$2.getComputedStyle(el);
                const parentTransform = styles['-webkit-transform'] || styles['-moz-transform'] || styles.transform;
                const overflowRegex = /(auto|scroll)/;
                return parentTransform && parentTransform !== 'none' || overflowRegex.test(styles.overflow + styles['overflow-y'] + styles['overflow-x']);
            });
            self1.image.position = $parents.length ? 'absolute' : 'fixed';
        }
        // add position to parallax block
        imageStyles.position = self1.image.position;
        // insert parallax image
        self1.css(self1.image.$item, imageStyles);
        self1.image.$container.appendChild(self1.image.$item);
        // set initial position and size
        self1.onResize();
        self1.onScroll(true);
        // call onInit event
        if (self1.options.onInit) {
            self1.options.onInit.call(self1);
        }
        // remove default user background
        if (self1.css(self1.$item, 'background-image') !== 'none') {
            self1.css(self1.$item, {
                'background-image': 'none'
            });
        }
        addObserver(self1);
    }
    destroy() {
        const self1 = this;
        removeObserver(self1);
        // return styles on container as before jarallax init
        const originalStylesTag = self1.$item.getAttribute('data-jarallax-original-styles');
        self1.$item.removeAttribute('data-jarallax-original-styles');
        // null occurs if there is no style tag before jarallax init
        if (!originalStylesTag) {
            self1.$item.removeAttribute('style');
        } else {
            self1.$item.setAttribute('style', originalStylesTag);
        }
        if (self1.image.useImgTag) {
            // return styles on img tag as before jarallax init
            const originalStylesImgTag = self1.image.$item.getAttribute('data-jarallax-original-styles');
            self1.image.$item.removeAttribute('data-jarallax-original-styles');
            // null occurs if there is no style tag before jarallax init
            if (!originalStylesImgTag) {
                self1.image.$item.removeAttribute('style');
            } else {
                self1.image.$item.setAttribute('style', originalStylesTag);
            }
            // move img tag to its default position
            if (self1.image.$itemParent) {
                self1.image.$itemParent.appendChild(self1.image.$item);
            }
        }
        // remove additional dom elements
        if (self1.image.$container) {
            self1.image.$container.parentNode.removeChild(self1.image.$container);
        }
        // call onDestroy event
        if (self1.options.onDestroy) {
            self1.options.onDestroy.call(self1);
        }
        // delete jarallax from item
        delete self1.$item.jarallax;
    }
    coverImage() {
        const self1 = this;
        const { height: wndH } = getWindowSize();
        const rect = self1.image.$container.getBoundingClientRect();
        const contH = rect.height;
        const { speed } = self1.options;
        const isScroll = self1.options.type === 'scroll' || self1.options.type === 'scroll-opacity';
        let scrollDist = 0;
        let resultH = contH;
        let resultMT = 0;
        // scroll parallax
        if (isScroll) {
            // scroll distance and height for image
            if (speed < 0) {
                scrollDist = speed * Math.max(contH, wndH);
                if (wndH < contH) {
                    scrollDist -= speed * (contH - wndH);
                }
            } else {
                scrollDist = speed * (contH + wndH);
            }
            // size for scroll parallax
            if (speed > 1) {
                resultH = Math.abs(scrollDist - wndH);
            } else if (speed < 0) {
                resultH = scrollDist / speed + Math.abs(scrollDist);
            } else {
                resultH += (wndH - contH) * (1 - speed);
            }
            scrollDist /= 2;
        }
        // store scroll distance
        self1.parallaxScrollDistance = scrollDist;
        // vertical center
        if (isScroll) {
            resultMT = (wndH - resultH) / 2;
        } else {
            resultMT = (contH - resultH) / 2;
        }
        // apply result to item
        self1.css(self1.image.$item, {
            height: `${resultH}px`,
            marginTop: `${resultMT}px`,
            left: self1.image.position === 'fixed' ? `${rect.left}px` : '0',
            width: `${rect.width}px`
        });
        // call onCoverImage event
        if (self1.options.onCoverImage) {
            self1.options.onCoverImage.call(self1);
        }
        // return some useful data. Used in the video cover function
        return {
            image: {
                height: resultH,
                marginTop: resultMT
            },
            container: rect
        };
    }
    isVisible() {
        return this.isElementInViewport || false;
    }
    onScroll(force) {
        const self1 = this;
        // stop calculations if item is not in viewport
        if (!force && !self1.isVisible()) {
            return;
        }
        const { height: wndH } = getWindowSize();
        const rect = self1.$item.getBoundingClientRect();
        const contT = rect.top;
        const contH = rect.height;
        const styles = {};
        // calculate parallax helping variables
        const beforeTop = Math.max(0, contT);
        const beforeTopEnd = Math.max(0, contH + contT);
        const afterTop = Math.max(0, -contT);
        const beforeBottom = Math.max(0, contT + contH - wndH);
        const beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH));
        const afterBottom = Math.max(0, -contT + wndH - contH);
        const fromViewportCenter = 1 - 2 * ((wndH - contT) / (wndH + contH));
        // calculate on how percent of section is visible
        let visiblePercent = 1;
        if (contH < wndH) {
            visiblePercent = 1 - (afterTop || beforeBottom) / contH;
        } else if (beforeTopEnd <= wndH) {
            visiblePercent = beforeTopEnd / wndH;
        } else if (beforeBottomEnd <= wndH) {
            visiblePercent = beforeBottomEnd / wndH;
        }
        // opacity
        if (self1.options.type === 'opacity' || self1.options.type === 'scale-opacity' || self1.options.type === 'scroll-opacity') {
            styles.transform = 'translate3d(0,0,0)';
            styles.opacity = visiblePercent;
        }
        // scale
        if (self1.options.type === 'scale' || self1.options.type === 'scale-opacity') {
            let scale = 1;
            if (self1.options.speed < 0) {
                scale -= self1.options.speed * visiblePercent;
            } else {
                scale += self1.options.speed * (1 - visiblePercent);
            }
            styles.transform = `scale(${scale}) translate3d(0,0,0)`;
        }
        // scroll
        if (self1.options.type === 'scroll' || self1.options.type === 'scroll-opacity') {
            let positionY = self1.parallaxScrollDistance * fromViewportCenter;
            // fix if parallax block in absolute position
            if (self1.image.position === 'absolute') {
                positionY -= contT;
            }
            styles.transform = `translate3d(0,${positionY}px,0)`;
        }
        self1.css(self1.image.$item, styles);
        // call onScroll event
        if (self1.options.onScroll) {
            self1.options.onScroll.call(self1, {
                section: rect,
                beforeTop,
                beforeTopEnd,
                afterTop,
                beforeBottom,
                beforeBottomEnd,
                afterBottom,
                visiblePercent,
                fromViewportCenter
            });
        }
    }
    onResize() {
        this.coverImage();
    }
}
// global definition
const jarallax$1 = function(items, options, ...args) {
    // check for dom element
    // thanks: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
    if (typeof HTMLElement === 'object' ? items instanceof HTMLElement : items && typeof items === 'object' && items !== null && items.nodeType === 1 && typeof items.nodeName === 'string') {
        items = [
            items
        ];
    }
    const len = items.length;
    let k = 0;
    let ret;
    for(k; k < len; k += 1){
        if (typeof options === 'object' || typeof options === 'undefined') {
            if (!items[k].jarallax) {
                items[k].jarallax = new Jarallax(items[k], options);
            }
        } else if (items[k].jarallax) {
            // eslint-disable-next-line prefer-spread
            ret = items[k].jarallax[options].apply(items[k].jarallax, args);
        }
        if (typeof ret !== 'undefined') {
            return ret;
        }
    }
    return items;
};
jarallax$1.constructor = Jarallax;
/*!
 * Video Worker v2.2.0 (https://github.com/nk-o/video-worker)
 * Copyright 2024 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/video-worker/blob/master/LICENSE)
 */ var defaults = {
    autoplay: false,
    loop: false,
    mute: false,
    volume: 100,
    showControls: true,
    accessibilityHidden: false,
    // start / end video time in seconds
    startTime: 0,
    endTime: 0
};
/**
 * Extend like jQuery.extend
 *
 * @param {Object} out - output object.
 * @param {...any} args - additional objects to extend.
 *
 * @returns {Object}
 */ function extend(out, ...args) {
    out = out || {};
    Object.keys(args).forEach((i)=>{
        if (!args[i]) {
            return;
        }
        Object.keys(args[i]).forEach((key)=>{
            out[key] = args[i][key];
        });
    });
    return out;
}
let ID = 0;
class VideoWorkerBase {
    type = 'none';
    constructor(url, options){
        const self1 = this;
        self1.url = url;
        self1.options_default = {
            ...defaults
        };
        self1.options = extend({}, self1.options_default, options);
        // check URL
        self1.videoID = self1.constructor.parseURL(url);
        // init
        if (self1.videoID) {
            self1.init();
        }
    }
    isValid() {
        return !!this.videoID;
    }
    init() {
        const self1 = this;
        self1.ID = ID;
        ID += 1;
        self1.playerID = `VideoWorker-${self1.ID}`;
    }
    // events
    on(name, callback) {
        this.userEventsList = this.userEventsList || [];
        // add new callback in events list
        (this.userEventsList[name] || (this.userEventsList[name] = [])).push(callback);
    }
    off(name, callback) {
        if (!this.userEventsList || !this.userEventsList[name]) {
            return;
        }
        if (!callback) {
            delete this.userEventsList[name];
        } else {
            this.userEventsList[name].forEach((val, key)=>{
                if (val === callback) {
                    this.userEventsList[name][key] = false;
                }
            });
        }
    }
    fire(name, ...args) {
        if (this.userEventsList && typeof this.userEventsList[name] !== 'undefined') {
            this.userEventsList[name].forEach((val)=>{
                // call with all arguments
                if (val) {
                    val.apply(this, args);
                }
            });
        }
    }
    /**
   * Methods used in providers.
   */ /* eslint-disable */ static parseURL(url) {
        return false;
    }
    play(start) {}
    pause() {}
    mute() {}
    unmute() {}
    setVolume(volume = false) {}
    getVolume(callback) {}
    getMuted(callback) {}
    setCurrentTime(currentTime = false) {}
    getCurrentTime(callback) {}
    getImageURL(callback) {}
    getVideo(callback) {}
}
/* eslint-disable import/no-mutable-exports */ /* eslint-disable no-restricted-globals */ let win;
if (typeof window !== 'undefined') {
    win = window;
} else if (typeof global !== 'undefined') {
    win = global;
} else if (typeof self !== 'undefined') {
    win = self;
} else {
    win = {};
}
var global$1 = win;
// Deferred
// thanks http://stackoverflow.com/questions/18096715/implement-deferred-object-without-using-jquery
function Deferred() {
    this.doneCallbacks = [];
    this.failCallbacks = [];
}
Deferred.prototype = {
    execute (list, args) {
        let i = list.length;
        // eslint-disable-next-line no-param-reassign
        args = Array.prototype.slice.call(args);
        while(i){
            i -= 1;
            list[i].apply(null, args);
        }
    },
    resolve (...args) {
        this.execute(this.doneCallbacks, args);
    },
    reject (...args) {
        this.execute(this.failCallbacks, args);
    },
    done (callback) {
        this.doneCallbacks.push(callback);
    },
    fail (callback) {
        this.failCallbacks.push(callback);
    }
};
let YoutubeAPIadded = 0;
let loadingYoutubePlayer = 0;
const loadingYoutubeDefer = /*#__PURE__*/ new Deferred();
function loadAPI$1() {
    if (YoutubeAPIadded) {
        return;
    }
    YoutubeAPIadded = true;
    const src = 'https://www.youtube.com/iframe_api';
    // add script in head section
    let tag = document.createElement('script');
    let head = document.getElementsByTagName('head')[0];
    tag.src = src;
    head.appendChild(tag);
    head = null;
    tag = null;
}
function onAPIready$1(callback) {
    // Listen for global YT player callback
    if ((typeof global$1.YT === 'undefined' || global$1.YT.loaded === 0) && !loadingYoutubePlayer) {
        // Prevents Ready event from being called twice
        loadingYoutubePlayer = 1;
        // Creates deferred so, other players know when to wait.
        global$1.onYouTubeIframeAPIReady = function() {
            global$1.onYouTubeIframeAPIReady = null;
            loadingYoutubeDefer.resolve('done');
            callback();
        };
    } else if (typeof global$1.YT === 'object' && global$1.YT.loaded === 1) {
        callback();
    } else {
        loadingYoutubeDefer.done(()=>{
            callback();
        });
    }
}
class VideoWorkerYoutube extends VideoWorkerBase {
    type = 'youtube';
    static parseURL(url) {
        // eslint-disable-next-line no-useless-escape
        const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return match && match[1].length === 11 ? match[1] : false;
    }
    init() {
        super.init();
        loadAPI$1();
    }
    play(start) {
        const self1 = this;
        if (!self1.player || !self1.player.playVideo) {
            return;
        }
        if (typeof start !== 'undefined') {
            self1.player.seekTo(start || 0);
        }
        if (global$1.YT.PlayerState.PLAYING !== self1.player.getPlayerState()) {
            // Don't play if video is already ended and with no loop.
            if (self1.options.endTime && !self1.options.loop) {
                self1.getCurrentTime((seconds)=>{
                    if (seconds < self1.options.endTime) {
                        self1.player.playVideo();
                    }
                });
            } else {
                self1.player.playVideo();
            }
        }
    }
    pause() {
        const self1 = this;
        if (!self1.player || !self1.player.pauseVideo) {
            return;
        }
        if (global$1.YT.PlayerState.PLAYING === self1.player.getPlayerState()) {
            self1.player.pauseVideo();
        }
    }
    mute() {
        const self1 = this;
        if (!self1.player || !self1.player.mute) {
            return;
        }
        self1.player.mute();
    }
    unmute() {
        const self1 = this;
        if (!self1.player || !self1.player.unMute) {
            return;
        }
        self1.player.unMute();
    }
    setVolume(volume = false) {
        const self1 = this;
        if (!self1.player || typeof volume !== 'number' || !self1.player.setVolume) {
            return;
        }
        self1.player.setVolume(volume);
    }
    getVolume(callback) {
        const self1 = this;
        if (!self1.player) {
            callback(false);
            return;
        }
        if (self1.player.getVolume) {
            callback(self1.player.getVolume());
        }
    }
    getMuted(callback) {
        const self1 = this;
        if (!self1.player) {
            callback(null);
            return;
        }
        if (self1.player.isMuted) {
            callback(self1.player.isMuted());
        }
    }
    setCurrentTime(currentTime = false) {
        const self1 = this;
        if (!self1.player || typeof currentTime !== 'number' || !self1.player.seekTo) {
            return;
        }
        self1.player.seekTo(currentTime);
    }
    getCurrentTime(callback) {
        const self1 = this;
        if (!self1.player || !self1.player.getCurrentTime) {
            return;
        }
        callback(self1.player.getCurrentTime());
    }
    getImageURL(callback) {
        const self1 = this;
        if (self1.videoImage) {
            callback(self1.videoImage);
            return;
        }
        const availableSizes = [
            'maxresdefault',
            'sddefault',
            'hqdefault',
            '0'
        ];
        let step = 0;
        const tempImg = new Image();
        tempImg.onload = function() {
            // if no thumbnail, youtube add their own image with width = 120px
            if ((this.naturalWidth || this.width) !== 120 || step === availableSizes.length - 1) {
                // ok
                self1.videoImage = `https://img.youtube.com/vi/${self1.videoID}/${availableSizes[step]}.jpg`;
                callback(self1.videoImage);
            } else {
                // try another size
                step += 1;
                this.src = `https://img.youtube.com/vi/${self1.videoID}/${availableSizes[step]}.jpg`;
            }
        };
        tempImg.src = `https://img.youtube.com/vi/${self1.videoID}/${availableSizes[step]}.jpg`;
    }
    getVideo(callback) {
        const self1 = this;
        // return generated video block
        if (self1.$video) {
            callback(self1.$video);
            return;
        }
        // generate new video block
        onAPIready$1(()=>{
            let hiddenDiv;
            if (!self1.$video) {
                hiddenDiv = document.createElement('div');
                hiddenDiv.style.display = 'none';
            }
            self1.playerOptions = {
                // GDPR Compliance.
                host: 'https://www.youtube-nocookie.com',
                videoId: self1.videoID,
                playerVars: {
                    autohide: 1,
                    rel: 0,
                    autoplay: 0,
                    // autoplay enable on mobile devices
                    playsinline: 1
                }
            };
            // hide controls
            if (!self1.options.showControls) {
                self1.playerOptions.playerVars.iv_load_policy = 3;
                self1.playerOptions.playerVars.modestbranding = 1;
                self1.playerOptions.playerVars.controls = 0;
                self1.playerOptions.playerVars.showinfo = 0;
                self1.playerOptions.playerVars.disablekb = 1;
            }
            // events
            let ytStarted;
            let ytProgressInterval;
            self1.playerOptions.events = {
                onReady (e) {
                    // mute
                    if (self1.options.mute) {
                        e.target.mute();
                    } else if (typeof self1.options.volume === 'number') {
                        e.target.setVolume(self1.options.volume);
                    }
                    // autoplay
                    if (self1.options.autoplay) {
                        self1.play(self1.options.startTime);
                    }
                    self1.fire('ready', e);
                    // For seamless loops, set the endTime to 0.1 seconds less than the video's duration
                    // https://github.com/nk-o/video-worker/issues/2
                    if (self1.options.loop && !self1.options.endTime) {
                        const secondsOffset = 0.1;
                        self1.options.endTime = self1.player.getDuration() - secondsOffset;
                    }
                    // volumechange
                    setInterval(()=>{
                        self1.getVolume((volume)=>{
                            if (self1.options.volume !== volume) {
                                self1.options.volume = volume;
                                self1.fire('volumechange', e);
                            }
                        });
                    }, 150);
                },
                onStateChange (e) {
                    // loop
                    if (self1.options.loop && e.data === global$1.YT.PlayerState.ENDED) {
                        self1.play(self1.options.startTime);
                    }
                    if (!ytStarted && e.data === global$1.YT.PlayerState.PLAYING) {
                        ytStarted = 1;
                        self1.fire('started', e);
                    }
                    if (e.data === global$1.YT.PlayerState.PLAYING) {
                        self1.fire('play', e);
                    }
                    if (e.data === global$1.YT.PlayerState.PAUSED) {
                        self1.fire('pause', e);
                    }
                    if (e.data === global$1.YT.PlayerState.ENDED) {
                        self1.fire('ended', e);
                    }
                    // progress check
                    if (e.data === global$1.YT.PlayerState.PLAYING) {
                        ytProgressInterval = setInterval(()=>{
                            self1.fire('timeupdate', e);
                            // check for end of video and play again or stop
                            if (self1.options.endTime && self1.player.getCurrentTime() >= self1.options.endTime) {
                                if (self1.options.loop) {
                                    self1.play(self1.options.startTime);
                                } else {
                                    self1.pause();
                                }
                            }
                        }, 150);
                    } else {
                        clearInterval(ytProgressInterval);
                    }
                },
                onError (e) {
                    self1.fire('error', e);
                }
            };
            const firstInit = !self1.$video;
            if (firstInit) {
                const div = document.createElement('div');
                div.setAttribute('id', self1.playerID);
                hiddenDiv.appendChild(div);
                document.body.appendChild(hiddenDiv);
            }
            self1.player = self1.player || new global$1.YT.Player(self1.playerID, self1.playerOptions);
            if (firstInit) {
                self1.$video = document.getElementById(self1.playerID);
                // add accessibility attributes
                if (self1.options.accessibilityHidden) {
                    self1.$video.setAttribute('tabindex', '-1');
                    self1.$video.setAttribute('aria-hidden', 'true');
                }
                // get video width and height
                self1.videoWidth = parseInt(self1.$video.getAttribute('width'), 10) || 1280;
                self1.videoHeight = parseInt(self1.$video.getAttribute('height'), 10) || 720;
            }
            callback(self1.$video);
        });
    }
}
let VimeoAPIadded = 0;
let loadingVimeoPlayer = 0;
const loadingVimeoDefer = /*#__PURE__*/ new Deferred();
function loadAPI() {
    if (VimeoAPIadded) {
        return;
    }
    VimeoAPIadded = true;
    // Useful when Vimeo API added using RequireJS https://github.com/nk-o/video-worker/pull/7
    if (typeof global$1.Vimeo !== 'undefined') {
        return;
    }
    const src = 'https://player.vimeo.com/api/player.js';
    // add script in head section
    let tag = document.createElement('script');
    let head = document.getElementsByTagName('head')[0];
    tag.src = src;
    head.appendChild(tag);
    head = null;
    tag = null;
}
function onAPIready(callback) {
    if (typeof global$1.Vimeo === 'undefined' && !loadingVimeoPlayer) {
        loadingVimeoPlayer = 1;
        const vimeoInterval = setInterval(()=>{
            if (typeof global$1.Vimeo !== 'undefined') {
                clearInterval(vimeoInterval);
                loadingVimeoDefer.resolve('done');
                callback();
            }
        }, 20);
    } else if (typeof global$1.Vimeo !== 'undefined') {
        callback();
    } else {
        loadingVimeoDefer.done(()=>{
            callback();
        });
    }
}
class VideoWorkerVimeo extends VideoWorkerBase {
    type = 'vimeo';
    static parseURL(url) {
        // eslint-disable-next-line no-useless-escape
        const regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
        const match = url.match(regExp);
        return match && match[3] ? match[3] : false;
    }
    // Try to extract a hash for private videos from the URL.
    // Thanks to https://github.com/sampotts/plyr
    static parseURLHash(url) {
        /* This regex matches a hexadecimal hash if given in any of these forms:
     *  - [https://player.]vimeo.com/video/{id}/{hash}[?params]
     *  - [https://player.]vimeo.com/video/{id}?h={hash}[&params]
     *  - [https://player.]vimeo.com/video/{id}?[params]&h={hash}
     *  - video/{id}/{hash}
     * If matched, the hash is available in capture group 4
     */ const regex = /^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/;
        const found = url.match(regex);
        return found && found.length === 5 ? found[4] : null;
    }
    init() {
        super.init();
        loadAPI();
    }
    play(start) {
        const self1 = this;
        if (!self1.player) {
            return;
        }
        if (typeof start !== 'undefined') {
            self1.player.setCurrentTime(start);
        }
        self1.player.getPaused().then((paused)=>{
            if (paused) {
                // Don't play if video is already ended and with no loop.
                if (self1.options.endTime && !self1.options.loop) {
                    self1.getCurrentTime((seconds)=>{
                        if (seconds < self1.options.endTime) {
                            self1.player.play();
                        }
                    });
                } else {
                    self1.player.play();
                }
            }
        });
    }
    pause() {
        const self1 = this;
        if (!self1.player) {
            return;
        }
        self1.player.getPaused().then((paused)=>{
            if (!paused) {
                self1.player.pause();
            }
        });
    }
    mute() {
        const self1 = this;
        if (!self1.player || !self1.player.setVolume) {
            return;
        }
        self1.setVolume(0);
    }
    unmute() {
        const self1 = this;
        if (!self1.player || !self1.player.setVolume) {
            return;
        }
        // In case the default volume is 0, we have to set 100 when unmute.
        self1.setVolume(self1.options.volume || 100);
    }
    setVolume(volume = false) {
        const self1 = this;
        if (!self1.player || typeof volume !== 'number' || !self1.player.setVolume) {
            return;
        }
        self1.player.setVolume(volume / 100);
    }
    getVolume(callback) {
        const self1 = this;
        if (!self1.player) {
            callback(false);
            return;
        }
        if (self1.player.getVolume) {
            self1.player.getVolume().then((volume)=>{
                callback(volume * 100);
            });
        }
    }
    getMuted(callback) {
        const self1 = this;
        if (!self1.player) {
            callback(null);
            return;
        }
        if (self1.player.getVolume) {
            self1.player.getVolume().then((volume)=>{
                callback(!!volume);
            });
        }
    }
    setCurrentTime(currentTime = false) {
        const self1 = this;
        if (!self1.player || typeof currentTime !== 'number' || !self1.player.setCurrentTime) {
            return;
        }
        self1.player.setCurrentTime(currentTime);
    }
    getCurrentTime(callback) {
        const self1 = this;
        if (!self1.player || !self1.player.getCurrentTime) {
            return;
        }
        self1.player.getCurrentTime().then((currentTime)=>{
            callback(currentTime);
        });
    }
    getImageURL(callback) {
        const self1 = this;
        if (self1.videoImage) {
            callback(self1.videoImage);
            return;
        }
        // We should provide width to get HQ thumbnail URL.
        let width = global$1.innerWidth || 1920;
        if (global$1.devicePixelRatio) {
            width *= global$1.devicePixelRatio;
        }
        width = Math.min(width, 1920);
        let request = new XMLHttpRequest();
        // https://vimeo.com/api/oembed.json?url=https://vimeo.com/235212527
        request.open('GET', `https://vimeo.com/api/oembed.json?url=${self1.url}&width=${width}`, true);
        request.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status >= 200 && this.status < 400) {
                    // Success!
                    const response = JSON.parse(this.responseText);
                    if (response.thumbnail_url) {
                        self1.videoImage = response.thumbnail_url;
                        callback(self1.videoImage);
                    }
                }
            }
        };
        request.send();
        request = null;
    }
    getVideo(callback) {
        const self1 = this;
        // return generated video block
        if (self1.$video) {
            callback(self1.$video);
            return;
        }
        // generate new video block
        onAPIready(()=>{
            let hiddenDiv;
            if (!self1.$video) {
                hiddenDiv = document.createElement('div');
                hiddenDiv.style.display = 'none';
            }
            self1.playerOptions = {
                // GDPR Compliance.
                dnt: 1,
                id: self1.videoID,
                autopause: 0,
                transparent: 0,
                autoplay: self1.options.autoplay ? 1 : 0,
                loop: self1.options.loop ? 1 : 0,
                muted: self1.options.mute || self1.options.volume === 0 ? 1 : 0
            };
            // private video hash
            const urlHash = self1.constructor.parseURLHash(self1.url);
            if (urlHash) {
                self1.playerOptions.h = urlHash;
            }
            // hide controls
            if (!self1.options.showControls) {
                self1.playerOptions.controls = 0;
            }
            // enable background option
            if (!self1.options.showControls && self1.options.loop && self1.options.autoplay) {
                self1.playerOptions.background = 1;
            }
            if (!self1.$video) {
                let playerOptionsString = '';
                Object.keys(self1.playerOptions).forEach((key)=>{
                    if (playerOptionsString !== '') {
                        playerOptionsString += '&';
                    }
                    playerOptionsString += `${key}=${encodeURIComponent(self1.playerOptions[key])}`;
                });
                // we need to create iframe manually because when we create it using API
                // js events won't triggers after iframe moved to another place
                self1.$video = document.createElement('iframe');
                self1.$video.setAttribute('id', self1.playerID);
                self1.$video.setAttribute('src', `https://player.vimeo.com/video/${self1.videoID}?${playerOptionsString}`);
                self1.$video.setAttribute('frameborder', '0');
                self1.$video.setAttribute('mozallowfullscreen', '');
                self1.$video.setAttribute('allowfullscreen', '');
                self1.$video.setAttribute('title', 'Vimeo video player');
                // add accessibility attributes
                if (self1.options.accessibilityHidden) {
                    self1.$video.setAttribute('tabindex', '-1');
                    self1.$video.setAttribute('aria-hidden', 'true');
                }
                hiddenDiv.appendChild(self1.$video);
                document.body.appendChild(hiddenDiv);
            }
            self1.player = self1.player || new global$1.Vimeo.Player(self1.$video, self1.playerOptions);
            // Since Vimeo removed the `volume` parameter, we have to set it manually.
            if (!self1.options.mute && typeof self1.options.volume === 'number') {
                self1.setVolume(self1.options.volume);
            }
            // set current time for autoplay
            if (self1.options.startTime && self1.options.autoplay) {
                self1.player.setCurrentTime(self1.options.startTime);
            }
            // get video width and height
            self1.player.getVideoWidth().then((width)=>{
                self1.videoWidth = width || 1280;
            });
            self1.player.getVideoHeight().then((height)=>{
                self1.videoHeight = height || 720;
            });
            // events
            let vmStarted;
            self1.player.on('timeupdate', (e)=>{
                if (!vmStarted) {
                    self1.fire('started', e);
                    vmStarted = 1;
                }
                self1.fire('timeupdate', e);
                // check for end of video and play again or stop
                if (self1.options.endTime && e.seconds >= self1.options.endTime) {
                    if (self1.options.loop) {
                        self1.play(self1.options.startTime);
                    } else {
                        self1.pause();
                    }
                }
            });
            self1.player.on('play', (e)=>{
                self1.fire('play', e);
                // check for the start time and start with it
                if (self1.options.startTime && e.seconds === 0) {
                    self1.play(self1.options.startTime);
                }
            });
            self1.player.on('pause', (e)=>{
                self1.fire('pause', e);
            });
            self1.player.on('ended', (e)=>{
                self1.fire('ended', e);
            });
            self1.player.on('loaded', (e)=>{
                self1.fire('ready', e);
            });
            self1.player.on('volumechange', (e)=>{
                self1.getVolume((volume)=>{
                    self1.options.volume = volume;
                });
                self1.fire('volumechange', e);
            });
            self1.player.on('error', (e)=>{
                self1.fire('error', e);
            });
            callback(self1.$video);
        });
    }
}
class VideoWorkerLocal extends VideoWorkerBase {
    type = 'local';
    static parseURL(url) {
        // eslint-disable-next-line no-useless-escape
        const videoFormats = url.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/);
        const result = {};
        let ready = 0;
        videoFormats.forEach((val)=>{
            // eslint-disable-next-line no-useless-escape
            const match = val.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
            if (match && match[1] && match[2]) {
                // eslint-disable-next-line prefer-destructuring
                result[match[1] === 'ogv' ? 'ogg' : match[1]] = match[2];
                ready = 1;
            }
        });
        return ready ? result : false;
    }
    play(start) {
        const self1 = this;
        if (!self1.player) {
            return;
        }
        if (typeof start !== 'undefined') {
            self1.player.currentTime = start;
        }
        if (self1.player.paused) {
            // Don't play if video is already ended and with no loop.
            if (self1.options.endTime && !self1.options.loop) {
                self1.getCurrentTime((seconds)=>{
                    if (seconds < self1.options.endTime) {
                        self1.player.play();
                    }
                });
            } else {
                self1.player.play();
            }
        }
    }
    pause() {
        const self1 = this;
        if (!self1.player || self1.player.paused) {
            return;
        }
        self1.player.pause();
    }
    mute() {
        const self1 = this;
        if (!self1.player) {
            return;
        }
        self1.$video.muted = true;
    }
    unmute() {
        const self1 = this;
        if (!self1.player) {
            return;
        }
        self1.$video.muted = false;
    }
    setVolume(volume = false) {
        const self1 = this;
        if (!self1.player || typeof volume !== 'number') {
            return;
        }
        self1.$video.volume = volume / 100;
    }
    getVolume(callback) {
        const self1 = this;
        if (!self1.player) {
            callback(false);
            return;
        }
        callback(self1.$video.volume * 100);
    }
    getMuted(callback) {
        const self1 = this;
        if (!self1.player) {
            callback(null);
            return;
        }
        callback(self1.$video.muted);
    }
    setCurrentTime(currentTime = false) {
        const self1 = this;
        if (!self1.player || typeof currentTime !== 'number') {
            return;
        }
        self1.$video.currentTime = currentTime;
    }
    getCurrentTime(callback) {
        const self1 = this;
        if (!self1.player) {
            return;
        }
        callback(self1.player.currentTime);
    }
    getImageURL(callback) {
        const self1 = this;
        if (self1.videoImage) {
            callback(self1.videoImage);
        }
    }
    getVideo(callback) {
        const self1 = this;
        // return generated video block
        if (self1.$video) {
            callback(self1.$video);
            return;
        }
        // generate new video block
        let hiddenDiv;
        if (!self1.$video) {
            hiddenDiv = document.createElement('div');
            hiddenDiv.style.display = 'none';
        }
        function addSourceElement(element, src, type) {
            const source = document.createElement('source');
            source.src = src;
            source.type = type;
            element.appendChild(source);
        }
        if (!self1.$video) {
            self1.$video = document.createElement('video');
            self1.player = self1.$video;
            // show controls
            if (self1.options.showControls) {
                self1.$video.controls = true;
            }
            // set volume
            if (typeof self1.options.volume === 'number') {
                self1.setVolume(self1.options.volume);
            }
            // mute (it is required to mute after the volume set)
            if (self1.options.mute) {
                self1.mute();
            }
            // loop
            if (self1.options.loop) {
                self1.$video.loop = true;
            }
            // autoplay enable on mobile devices
            self1.$video.setAttribute('playsinline', '');
            self1.$video.setAttribute('webkit-playsinline', '');
            // add accessibility attributes
            if (self1.options.accessibilityHidden) {
                self1.$video.setAttribute('tabindex', '-1');
                self1.$video.setAttribute('aria-hidden', 'true');
            }
            self1.$video.setAttribute('id', self1.playerID);
            hiddenDiv.appendChild(self1.$video);
            document.body.appendChild(hiddenDiv);
            Object.keys(self1.videoID).forEach((key)=>{
                addSourceElement(self1.$video, self1.videoID[key], `video/${key}`);
            });
        }
        let locStarted;
        self1.player.addEventListener('playing', (e)=>{
            if (!locStarted) {
                self1.fire('started', e);
            }
            locStarted = 1;
        });
        self1.player.addEventListener('timeupdate', function(e) {
            self1.fire('timeupdate', e);
            // check for end of video and play again or stop
            if (self1.options.endTime && this.currentTime >= self1.options.endTime) {
                if (self1.options.loop) {
                    self1.play(self1.options.startTime);
                } else {
                    self1.pause();
                }
            }
        });
        self1.player.addEventListener('play', (e)=>{
            self1.fire('play', e);
        });
        self1.player.addEventListener('pause', (e)=>{
            self1.fire('pause', e);
        });
        self1.player.addEventListener('ended', (e)=>{
            self1.fire('ended', e);
        });
        self1.player.addEventListener('loadedmetadata', function() {
            // get video width and height
            self1.videoWidth = this.videoWidth || 1280;
            self1.videoHeight = this.videoHeight || 720;
            self1.fire('ready');
            // autoplay
            if (self1.options.autoplay) {
                self1.play(self1.options.startTime);
            }
        });
        self1.player.addEventListener('volumechange', (e)=>{
            self1.getVolume((volume)=>{
                self1.options.volume = volume;
            });
            self1.fire('volumechange', e);
        });
        self1.player.addEventListener('error', (e)=>{
            self1.fire('error', e);
        });
        callback(self1.$video);
    }
}
function VideoWorker(url, options) {
    let result = false;
    Object.keys(VideoWorker.providers).forEach((key)=>{
        if (!result && VideoWorker.providers[key].parseURL(url)) {
            result = new VideoWorker.providers[key](url, options);
        }
    });
    return result || new VideoWorkerBase(url, options);
}
VideoWorker.BaseClass = VideoWorkerBase;
VideoWorker.providers = {
    Youtube: VideoWorkerYoutube,
    Vimeo: VideoWorkerVimeo,
    Local: VideoWorkerLocal
};
function jarallaxVideo$1(jarallax = global$2.jarallax) {
    if (typeof jarallax === 'undefined') {
        return;
    }
    const Jarallax = jarallax.constructor;
    // append video after when block will be visible.
    const defOnScroll = Jarallax.prototype.onScroll;
    Jarallax.prototype.onScroll = function() {
        const self1 = this;
        defOnScroll.apply(self1);
        const isReady = !self1.isVideoInserted && self1.video && (!self1.options.videoLazyLoading || self1.isElementInViewport) && !self1.options.disableVideo();
        if (isReady) {
            self1.isVideoInserted = true;
            self1.video.getVideo((video)=>{
                const $parent = video.parentNode;
                self1.css(video, {
                    position: self1.image.position,
                    top: '0px',
                    left: '0px',
                    right: '0px',
                    bottom: '0px',
                    width: '100%',
                    height: '100%',
                    maxWidth: 'none',
                    maxHeight: 'none',
                    pointerEvents: 'none',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    margin: 0,
                    zIndex: -1
                });
                self1.$video = video;
                // add Poster attribute to self-hosted video
                if (self1.video.type === 'local') {
                    if (self1.image.src) {
                        self1.$video.setAttribute('poster', self1.image.src);
                    } else if (self1.image.$item && self1.image.$item.tagName === 'IMG' && self1.image.$item.src) {
                        self1.$video.setAttribute('poster', self1.image.$item.src);
                    }
                }
                // add classname to video element
                if (self1.options.videoClass) {
                    self1.$video.setAttribute('class', `${self1.options.videoClass} ${self1.options.videoClass}-${self1.video.type}`);
                }
                // insert video tag
                self1.image.$container.appendChild(video);
                // remove parent video element (created by VideoWorker)
                $parent.parentNode.removeChild($parent);
                // call onVideoInsert event
                if (self1.options.onVideoInsert) {
                    self1.options.onVideoInsert.call(self1);
                }
            });
        }
    };
    // cover video
    const defCoverImage = Jarallax.prototype.coverImage;
    Jarallax.prototype.coverImage = function() {
        const self1 = this;
        const imageData = defCoverImage.apply(self1);
        const node = self1.image.$item ? self1.image.$item.nodeName : false;
        if (imageData && self1.video && node && (node === 'IFRAME' || node === 'VIDEO')) {
            let h = imageData.image.height;
            let w = h * self1.image.width / self1.image.height;
            let ml = (imageData.container.width - w) / 2;
            let mt = imageData.image.marginTop;
            if (imageData.container.width > w) {
                w = imageData.container.width;
                h = w * self1.image.height / self1.image.width;
                ml = 0;
                mt += (imageData.image.height - h) / 2;
            }
            // add video height over than need to hide controls
            if (node === 'IFRAME') {
                h += 400;
                mt -= 200;
            }
            self1.css(self1.$video, {
                width: `${w}px`,
                marginLeft: `${ml}px`,
                height: `${h}px`,
                marginTop: `${mt}px`
            });
        }
        return imageData;
    };
    // init video
    const defInitImg = Jarallax.prototype.initImg;
    Jarallax.prototype.initImg = function() {
        const self1 = this;
        const defaultResult = defInitImg.apply(self1);
        if (!self1.options.videoSrc) {
            self1.options.videoSrc = self1.$item.getAttribute('data-jarallax-video') || null;
        }
        if (self1.options.videoSrc) {
            self1.defaultInitImgResult = defaultResult;
            return true;
        }
        return defaultResult;
    };
    const defCanInitParallax = Jarallax.prototype.canInitParallax;
    Jarallax.prototype.canInitParallax = function() {
        const self1 = this;
        let defaultResult = defCanInitParallax.apply(self1);
        if (!self1.options.videoSrc) {
            return defaultResult;
        }
        // Init video api
        const video = new VideoWorker(self1.options.videoSrc, {
            autoplay: true,
            loop: self1.options.videoLoop,
            showControls: false,
            accessibilityHidden: true,
            startTime: self1.options.videoStartTime || 0,
            endTime: self1.options.videoEndTime || 0,
            mute: !self1.options.videoVolume,
            volume: self1.options.videoVolume || 0
        });
        // call onVideoWorkerInit event
        if (self1.options.onVideoWorkerInit) {
            self1.options.onVideoWorkerInit.call(self1, video);
        }
        function resetDefaultImage() {
            if (self1.image.$default_item) {
                self1.image.$item = self1.image.$default_item;
                self1.image.$item.style.display = 'block';
                // set image width and height
                self1.coverImage();
                self1.onScroll();
            }
        }
        if (video.isValid()) {
            // Force enable parallax.
            // When the parallax disabled on mobile devices, we still need to display videos.
            // https://github.com/nk-o/jarallax/issues/159
            if (this.options.disableParallax()) {
                defaultResult = true;
                self1.image.position = 'absolute';
                self1.options.type = 'scroll';
                self1.options.speed = 1;
            }
            // if parallax will not be inited, we can add thumbnail on background.
            if (!defaultResult) {
                if (!self1.defaultInitImgResult) {
                    video.getImageURL((url)=>{
                        // save default user styles
                        const curStyle = self1.$item.getAttribute('style');
                        if (curStyle) {
                            self1.$item.setAttribute('data-jarallax-original-styles', curStyle);
                        }
                        // set new background
                        self1.css(self1.$item, {
                            'background-image': `url("${url}")`,
                            'background-position': 'center',
                            'background-size': 'cover'
                        });
                    });
                }
            // init video
            } else {
                video.on('ready', ()=>{
                    if (self1.options.videoPlayOnlyVisible) {
                        const oldOnScroll = self1.onScroll;
                        self1.onScroll = function() {
                            oldOnScroll.apply(self1);
                            if (!self1.videoError && (self1.options.videoLoop || !self1.options.videoLoop && !self1.videoEnded)) {
                                if (self1.isVisible()) {
                                    video.play();
                                } else {
                                    video.pause();
                                }
                            }
                        };
                    } else {
                        video.play();
                    }
                });
                video.on('started', ()=>{
                    self1.image.$default_item = self1.image.$item;
                    self1.image.$item = self1.$video;
                    // set video width and height
                    self1.image.width = self1.video.videoWidth || 1280;
                    self1.image.height = self1.video.videoHeight || 720;
                    self1.coverImage();
                    self1.onScroll();
                    // hide image
                    if (self1.image.$default_item) {
                        self1.image.$default_item.style.display = 'none';
                    }
                });
                video.on('ended', ()=>{
                    self1.videoEnded = true;
                    if (!self1.options.videoLoop) {
                        // show default image if Loop disabled.
                        resetDefaultImage();
                    }
                });
                video.on('error', ()=>{
                    self1.videoError = true;
                    // show default image if video loading error.
                    resetDefaultImage();
                });
                self1.video = video;
                // set image if not exists
                if (!self1.defaultInitImgResult) {
                    // set empty image on self-hosted video if not defined
                    self1.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                    if (video.type !== 'local') {
                        video.getImageURL((url)=>{
                            self1.image.bgImage = `url("${url}")`;
                            self1.init();
                        });
                        return false;
                    }
                }
            }
        }
        return defaultResult;
    };
    // Destroy video parallax
    const defDestroy = Jarallax.prototype.destroy;
    Jarallax.prototype.destroy = function() {
        const self1 = this;
        if (self1.image.$default_item) {
            self1.image.$item = self1.image.$default_item;
            delete self1.image.$default_item;
        }
        defDestroy.apply(self1);
    };
}
function jarallaxElement$1(jarallax = global$2.jarallax) {
    // eslint-disable-next-line no-console
    console.warn("Jarallax Element extension is DEPRECATED, please, avoid using it. We recommend you look at something like `lax.js` library <https://github.com/alexfoxy/lax.js>. It is much more powerful and has a less code (in cases when you don't want to add parallax backgrounds).");
    if (typeof jarallax === 'undefined') {
        return;
    }
    const Jarallax = jarallax.constructor;
    // redefine default methods
    [
        'initImg',
        'canInitParallax',
        'init',
        'destroy',
        'coverImage',
        'isVisible',
        'onScroll',
        'onResize'
    ].forEach((key)=>{
        const def = Jarallax.prototype[key];
        Jarallax.prototype[key] = function(...args) {
            const self1 = this;
            if (key === 'initImg' && self1.$item.getAttribute('data-jarallax-element') !== null) {
                self1.options.type = 'element';
                self1.pureOptions.speed = self1.$item.getAttribute('data-jarallax-element') || '100';
            }
            if (self1.options.type !== 'element') {
                return def.apply(self1, args);
            }
            self1.pureOptions.threshold = self1.$item.getAttribute('data-threshold') || '';
            switch(key){
                case 'init':
                    {
                        const speedArr = `${self1.pureOptions.speed}`.split(' ');
                        self1.options.speed = self1.pureOptions.speed || 0;
                        self1.options.speedY = speedArr[0] ? parseFloat(speedArr[0]) : 0;
                        self1.options.speedX = speedArr[1] ? parseFloat(speedArr[1]) : 0;
                        const thresholdArr = self1.pureOptions.threshold.split(' ');
                        self1.options.thresholdY = thresholdArr[0] ? parseFloat(thresholdArr[0]) : null;
                        self1.options.thresholdX = thresholdArr[1] ? parseFloat(thresholdArr[1]) : null;
                        def.apply(self1, args);
                        // restore background image if available.
                        const originalStylesTag = self1.$item.getAttribute('data-jarallax-original-styles');
                        if (originalStylesTag) {
                            self1.$item.setAttribute('style', originalStylesTag);
                        }
                        return true;
                    }
                case 'onResize':
                    {
                        const defTransform = self1.css(self1.$item, 'transform');
                        self1.css(self1.$item, {
                            transform: ''
                        });
                        const rect = self1.$item.getBoundingClientRect();
                        self1.itemData = {
                            width: rect.width,
                            height: rect.height,
                            y: rect.top + self1.getWindowData().y,
                            x: rect.left
                        };
                        self1.css(self1.$item, {
                            transform: defTransform
                        });
                        break;
                    }
                case 'onScroll':
                    {
                        const wnd = self1.getWindowData();
                        const centerPercent = (wnd.y + wnd.height / 2 - self1.itemData.y - self1.itemData.height / 2) / (wnd.height / 2);
                        const moveY = centerPercent * self1.options.speedY;
                        const moveX = centerPercent * self1.options.speedX;
                        let my = moveY;
                        let mx = moveX;
                        if (self1.options.thresholdY !== null && moveY > self1.options.thresholdY) my = 0;
                        if (self1.options.thresholdX !== null && moveX > self1.options.thresholdX) mx = 0;
                        self1.css(self1.$item, {
                            transform: `translate3d(${mx}px,${my}px,0)`
                        });
                        break;
                    }
                case 'initImg':
                case 'isVisible':
                case 'coverImage':
                    return true;
            }
            return def.apply(self1, args);
        };
    });
}
const jarallax = jarallax$1;
const jarallaxVideo = function jarallaxVideo() {
    return jarallaxVideo$1(jarallax);
};
const jarallaxElement = function jarallaxElement() {
    return jarallaxElement$1(jarallax);
};
;
 //# sourceMappingURL=jarallax.esm.js.map
}}),
}]);

//# sourceMappingURL=_d01ffd._.js.map