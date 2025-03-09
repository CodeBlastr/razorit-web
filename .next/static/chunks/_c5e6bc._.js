(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_c5e6bc._.js", {

"[project]/utlis/parallax.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "parallaxMouseMovement": (()=>parallaxMouseMovement),
    "parallaxScroll": (()=>parallaxScroll)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rellax$2f$rellax$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rellax/rellax.js [app-client] (ecmascript)");
;
const parallaxMouseMovement = ()=>{
    document.querySelectorAll(".parallax-mousemove-scene").forEach((scene)=>{
        scene.addEventListener("mousemove", function(e) {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const offsetX = 0.5 - (e.pageX - this.offsetLeft) / w;
            const offsetY = 0.5 - (e.pageY - this.offsetTop) / h;
            this.querySelectorAll(".parallax-mousemove").forEach((el)=>{
                const offset = parseInt(el.getAttribute("data-offset"));
                const translate = `translate3d(${Math.round(offsetX * offset)}px, ${Math.round(offsetY * offset)}px, 0px)`;
                el.style.transform = translate;
            });
            let sceneOffsetX = e.pageX - this.offsetLeft;
            let sceneOffsetY = e.pageY - this.offsetTop;
            this.querySelectorAll(".parallax-mousemove-follow").forEach((el)=>{
                el.style.left = `${sceneOffsetX}px`;
                el.style.top = `${31}px`;
            });
        // document.querySelectorAll(".parallax-mousemove-follow").forEach((el) => {
        //   el.style.left = `${sceneOffsetX}px`;
        // });
        });
        scene.addEventListener("mouseenter", function(e) {
            this.querySelectorAll(".parallax-mousemove-follow").forEach((el)=>{
                setTimeout(()=>{
                    el.style.transition = "all .27s var(--ease-out-short)";
                    el.style.willChange = "transform";
                }, 27);
            });
        });
        scene.addEventListener("mouseout", function(e) {
            this.querySelectorAll(".parallax-mousemove-follow").forEach((el)=>{
                el.style.transition = "none";
            });
        });
    });
};
function parallaxScroll() {
    const mobileTest = false; // Assuming mobileTest is defined elsewhere
    if (document.querySelectorAll("[data-rellax-y]").length) {
        if (window.innerWidth >= 1280 && !mobileTest) {
            const rellax_y = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rellax$2f$rellax$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]("[data-rellax-y]", {
                vertical: true,
                horizontal: false
            });
            function addScrollParallax() {
                document.querySelectorAll("[data-rellax-y]").forEach((element)=>{
                    if (element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom > 0) {
                        if (!element.classList.contains("js-in-viewport")) {
                            element.classList.add("js-in-viewport");
                            rellax_y.refresh();
                        }
                    } else {
                        if (element.classList.contains("js-in-viewport")) {
                            element.classList.remove("js-in-viewport");
                        }
                    }
                });
            }
            window.addEventListener("scroll", addScrollParallax);
        // window.removeEventListener("scroll", addScrollParallax);
        // rellax_y.destroy();
        }
    }
    if (document.querySelectorAll("[data-rellax-x]").length) {
        if (window.innerWidth >= 1280 && !mobileTest) {
            const rellax_x = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rellax$2f$rellax$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]("[data-rellax-x]", {
                horizontal: true
            });
            function addParallaxX() {
                document.querySelectorAll("[data-rellax-x]").forEach((element)=>{
                    if (element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom > 0) {
                        if (!element.classList.contains("js-in-viewport")) {
                            element.classList.add("js-in-viewport");
                            rellax_x.refresh();
                        }
                    } else {
                        if (element.classList.contains("js-in-viewport")) {
                            element.classList.remove("js-in-viewport");
                        }
                    }
                });
            }
            window.addEventListener("scroll", addParallaxX);
        // window.removeEventListener("scroll", addParallaxX);
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utlis/initWowjs.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "init_wow": (()=>init_wow)
});
function init_wow() {
    const { WOW } = __turbopack_require__("[project]/node_modules/wowjs/dist/wow.js [app-client] (ecmascript)");
    setTimeout(()=>{
        /* Wow init */ if (document.body.classList.contains("appear-animate")) {
            document.querySelectorAll(".wow").forEach((el)=>el.classList.add("no-animate"));
        }
        var wow = new WOW({
            boxClass: "wow",
            animateClass: "animatedfgfg",
            offset: 100,
            live: false,
            callback: function(box) {
                box.classList.add("animated");
            }
        });
        if (document.body.classList.contains("appear-animate")) {
            wow.init();
        } else {
            document.querySelectorAll(".wow").forEach((el)=>el.style.opacity = "1");
        }
        /* Wow for portfolio init */ if (document.body.classList.contains("appear-animate")) {
            document.querySelectorAll(".wow-p").forEach((el)=>el.classList.add("no-animate"));
        }
        var wow_p = new WOW({
            boxClass: "wow-p",
            animateClass: "animatedfgfg",
            offset: 100,
            live: false,
            callback: function(box) {
                box.classList.add("animated");
            }
        });
        if (document.body.classList.contains("appear-animate")) {
            wow_p.init();
        } else {
            document.querySelectorAll(".wow-p").forEach((el)=>el.style.opacity = "1");
        }
        /* Wow for menu bar init */ if (document.body.classList.contains("appear-animate") && window.innerWidth >= 1024 && document.documentElement.classList.contains("no-mobile")) {
            document.querySelectorAll(".wow-menubar").forEach((el)=>{
                el.classList.add("no-animate", "fadeInDown", "animated");
                setInterval(()=>{
                    el.classList.remove("no-animate");
                }, 1500);
            });
        } else {
            document.querySelectorAll(".wow-menubar").forEach((el)=>el.style.opacity = "1");
        }
    }, 400);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utlis/changeHeaderOnScroll.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "headerChangeOnScroll": (()=>headerChangeOnScroll)
});
const headerChangeOnScroll = ()=>{
    var mainNav = document.querySelector(".main-nav");
    var navLogoWrapLogo = document.querySelector(".nav-logo-wrap .logo");
    var lightAfterScroll = document.querySelector(".light-after-scroll");
    if (window.scrollY > 0) {
        mainNav.classList.remove("transparent");
        mainNav.classList.add("small-height", "body-scrolled");
        if (navLogoWrapLogo) navLogoWrapLogo.classList.add("small-height");
        if (lightAfterScroll) lightAfterScroll.classList.remove("dark");
    } else if (window.scrollY === 0) {
        mainNav.classList.add("transparent");
        mainNav.classList.remove("small-height", "body-scrolled");
        if (navLogoWrapLogo) navLogoWrapLogo.classList.remove("small-height");
        if (lightAfterScroll) lightAfterScroll.classList.add("dark");
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/layout.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RootLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$parallax$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utlis/parallax.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$initWowjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utlis/initWowjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$changeHeaderOnScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utlis/changeHeaderOnScroll.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function RootLayout({ children }) {
    _s();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RootLayout.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$initWowjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["init_wow"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$parallax$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parallaxMouseMovement"])();
            var mainNav = document.querySelector(".main-nav");
            if (mainNav?.classList.contains("transparent")) {
                mainNav.classList.add("js-transparent");
            } else if (!mainNav?.classList?.contains("dark")) {
                mainNav?.classList.add("js-no-transparent-white");
            }
            window.addEventListener("scroll", __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$changeHeaderOnScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerChangeOnScroll"]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$parallax$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parallaxScroll"])();
            return ({
                "RootLayout.useEffect": ()=>{
                    window.removeEventListener("scroll", __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$changeHeaderOnScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerChangeOnScroll"]);
                }
            })["RootLayout.useEffect"];
        }
    }["RootLayout.useEffect"], [
        path
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RootLayout.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                // Import the script only on the client side
                __turbopack_require__("[project]/node_modules/bootstrap/dist/js/bootstrap.esm.js [app-client] (ecmascript, async loader)")(__turbopack_import__).then({
                    "RootLayout.useEffect": ()=>{
                    // Module is imported, you can access any exported functionality if
                    }
                }["RootLayout.useEffect"]);
            }
        }
    }["RootLayout.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        className: "no-mobile no-touch ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/layout.js",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "appear-animate body",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/layout.js",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/layout.js",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(RootLayout, "vyLIifkh3dZYK578H6VFi94Ep/0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = RootLayout;
var _c;
__turbopack_refresh__.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function disabledLog() {}
    function disableLogs() {
        if (0 === disabledDepth) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
                configurable: !0,
                enumerable: !0,
                value: disabledLog,
                writable: !0
            };
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
            var props = {
                configurable: !0,
                enumerable: !0,
                writable: !0
            };
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        }
        0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix) try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = !0;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
            var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (construct) {
                            var Fake = function() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function() {
                                    throw Error();
                                }
                            });
                            if ("object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    var control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x$0) {
                                    control = x$0;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x$1) {
                                control = x$1;
                            }
                            (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
                        }
                    } catch (sample) {
                        if (sample && control && "string" === typeof sample.stack) return [
                            sample.stack,
                            control.stack
                        ];
                    }
                    return [
                        null,
                        null
                    ];
                }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
                var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
                for(_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");)namePropDescriptor++;
                for(; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");)_RunInRootFrame$Deter++;
                if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for(namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];)_RunInRootFrame$Deter--;
                for(; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                        do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                            var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                            fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                            "function" === typeof fn && componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                        while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter)
                    }
                    break;
                }
            }
        } finally{
            reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
        if (null == type) return "";
        if ("function" === typeof type) {
            var prototype = type.prototype;
            return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
        }
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if ("object" === typeof type) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return type = describeNativeComponentFrame(type.render, !1), type;
            case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type);
            case REACT_LAZY_TYPE:
                prototype = type._payload;
                type = type._init;
                try {
                    return describeUnknownElementTypeFrameInDEV(type(prototype));
                } catch (x) {}
        }
        return "";
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
        if ("string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId)) {
            var children = config.children;
            if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
                for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren], type);
                Object.freeze && Object.freeze(children);
            } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else validateChildKeys(children, type);
        } else {
            children = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length) children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            null === type ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = typeof type;
            console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", isStaticChildren, children);
        }
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey);
    }
    function validateChildKeys(node, parentType) {
        if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
            if (isArrayImpl(node)) for(var i = 0; i < node.length; i++){
                var child = node[i];
                isValidElement(child) && validateExplicitKey(child, parentType);
            }
            else if (isValidElement(node)) node._store && (node._store.validated = 1);
            else if (null === node || "object" !== typeof node ? i = null : (i = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i = "function" === typeof i ? i : null), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node)) for(; !(node = i.next()).done;)isValidElement(node.value) && validateExplicitKey(node.value, parentType);
        }
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function validateExplicitKey(element, parentType) {
        if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
            ownerHasKeyUseWarning[parentType] = !0;
            var childOwner = "";
            element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
            var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = function() {
                var stack = describeUnknownElementTypeFrameInDEV(element.type);
                prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
                return stack;
            };
            console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
            ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
    }
    function getCurrentComponentErrorInfo(parentType) {
        var info = "", owner = getOwner();
        owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
        info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
        return info;
    }
    var React = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), isArrayImpl = Array.isArray, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix, suffix, reentry = !1;
    var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {}, ownerHasKeyUseWarning = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
module.exports = __turbopack_require__("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/rellax/rellax.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// ------------------------------------------
// Rellax.js
// Buttery smooth parallax library
// Copyright (c) 2016 Moe Amaya (@moeamaya)
// MIT license
//
// Thanks to Paraxify.js and Jaime Cabllero
// for parallax concepts
// ------------------------------------------
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        ((r)=>r !== undefined && __turbopack_export_value__(r))(factory());
    } else if (("TURBOPACK compile-time value", "object") === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.Rellax = factory();
    }
})(typeof window !== "undefined" ? window : global, function() {
    var Rellax = function(el, options) {
        "use strict";
        var self = Object.create(Rellax.prototype);
        var posY = 0;
        var screenY = 0;
        var posX = 0;
        var screenX = 0;
        var blocks = [];
        var pause = true;
        // check what requestAnimationFrame to use, and if
        // it's not supported, use the onscroll event
        var loop = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(callback) {
            return setTimeout(callback, 1000 / 60);
        };
        // store the id for later use
        var loopId = null;
        // Test via a getter in the options object to see if the passive property is accessed
        var supportsPassive = false;
        try {
            var opts = Object.defineProperty({}, 'passive', {
                get: function() {
                    supportsPassive = true;
                }
            });
            window.addEventListener("testPassive", null, opts);
            window.removeEventListener("testPassive", null, opts);
        } catch (e) {}
        // check what cancelAnimation method to use
        var clearLoop = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout;
        // check which transform property to use
        var transformProp = window.transformProp || function() {
            var testEl = document.createElement('div');
            if (testEl.style.transform === null) {
                var vendors = [
                    'Webkit',
                    'Moz',
                    'ms'
                ];
                for(var vendor in vendors){
                    if (testEl.style[vendors[vendor] + 'Transform'] !== undefined) {
                        return vendors[vendor] + 'Transform';
                    }
                }
            }
            return 'transform';
        }();
        // Default Settings
        self.options = {
            speed: -2,
            verticalSpeed: null,
            horizontalSpeed: null,
            breakpoints: [
                576,
                768,
                1201
            ],
            center: false,
            wrapper: null,
            relativeToWrapper: false,
            round: true,
            vertical: true,
            horizontal: false,
            verticalScrollAxis: "y",
            horizontalScrollAxis: "x",
            callback: function() {}
        };
        // User defined options (might have more in the future)
        if (options) {
            Object.keys(options).forEach(function(key) {
                self.options[key] = options[key];
            });
        }
        function validateCustomBreakpoints() {
            if (self.options.breakpoints.length === 3 && Array.isArray(self.options.breakpoints)) {
                var isAscending = true;
                var isNumerical = true;
                var lastVal;
                self.options.breakpoints.forEach(function(i) {
                    if (typeof i !== 'number') isNumerical = false;
                    if (lastVal !== null) {
                        if (i < lastVal) isAscending = false;
                    }
                    lastVal = i;
                });
                if (isAscending && isNumerical) return;
            }
            // revert defaults if set incorrectly
            self.options.breakpoints = [
                576,
                768,
                1201
            ];
            console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted");
        }
        if (options && options.breakpoints) {
            validateCustomBreakpoints();
        }
        // By default, rellax class
        if (!el) {
            el = '.rellax';
        }
        // check if el is a className or a node
        var elements = typeof el === 'string' ? document.querySelectorAll(el) : [
            el
        ];
        // Now query selector
        if (elements.length > 0) {
            self.elems = elements;
        } else {
            console.warn("Rellax: The elements you're trying to select don't exist.");
            return;
        }
        // Has a wrapper and it exists
        if (self.options.wrapper) {
            if (!self.options.wrapper.nodeType) {
                var wrapper = document.querySelector(self.options.wrapper);
                if (wrapper) {
                    self.options.wrapper = wrapper;
                } else {
                    console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
                    return;
                }
            }
        }
        // set a placeholder for the current breakpoint
        var currentBreakpoint;
        // helper to determine current breakpoint
        var getCurrentBreakpoint = function(w) {
            var bp = self.options.breakpoints;
            if (w < bp[0]) return 'xs';
            if (w >= bp[0] && w < bp[1]) return 'sm';
            if (w >= bp[1] && w < bp[2]) return 'md';
            return 'lg';
        };
        // Get and cache initial position of all elements
        var cacheBlocks = function() {
            for(var i = 0; i < self.elems.length; i++){
                var block = createBlock(self.elems[i]);
                blocks.push(block);
            }
        };
        // Let's kick this script off
        // Build array for cached element values
        var init = function() {
            for(var i = 0; i < blocks.length; i++){
                self.elems[i].style.cssText = blocks[i].style;
            }
            blocks = [];
            screenY = window.innerHeight;
            screenX = window.innerWidth;
            currentBreakpoint = getCurrentBreakpoint(screenX);
            setPosition();
            cacheBlocks();
            animate();
            // If paused, unpause and set listener for window resizing events
            if (pause) {
                window.addEventListener('resize', init);
                pause = false;
                // Start the loop
                update();
            }
        };
        // We want to cache the parallax blocks'
        // values: base, top, height, speed
        // el: is dom object, return: el cache values
        var createBlock = function(el) {
            var dataPercentage = el.getAttribute('data-rellax-percentage');
            var dataSpeed = el.getAttribute('data-rellax-speed');
            var dataXsSpeed = el.getAttribute('data-rellax-xs-speed');
            var dataMobileSpeed = el.getAttribute('data-rellax-mobile-speed');
            var dataTabletSpeed = el.getAttribute('data-rellax-tablet-speed');
            var dataDesktopSpeed = el.getAttribute('data-rellax-desktop-speed');
            var dataVerticalSpeed = el.getAttribute('data-rellax-vertical-speed');
            var dataHorizontalSpeed = el.getAttribute('data-rellax-horizontal-speed');
            var dataVericalScrollAxis = el.getAttribute('data-rellax-vertical-scroll-axis');
            var dataHorizontalScrollAxis = el.getAttribute('data-rellax-horizontal-scroll-axis');
            var dataZindex = el.getAttribute('data-rellax-zindex') || 0;
            var dataMin = el.getAttribute('data-rellax-min');
            var dataMax = el.getAttribute('data-rellax-max');
            var dataMinX = el.getAttribute('data-rellax-min-x');
            var dataMaxX = el.getAttribute('data-rellax-max-x');
            var dataMinY = el.getAttribute('data-rellax-min-y');
            var dataMaxY = el.getAttribute('data-rellax-max-y');
            var mapBreakpoints;
            var breakpoints = true;
            if (!dataXsSpeed && !dataMobileSpeed && !dataTabletSpeed && !dataDesktopSpeed) {
                breakpoints = false;
            } else {
                mapBreakpoints = {
                    'xs': dataXsSpeed,
                    'sm': dataMobileSpeed,
                    'md': dataTabletSpeed,
                    'lg': dataDesktopSpeed
                };
            }
            // initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)
            // ensures elements are positioned based on HTML layout.
            //
            // If the element has the percentage attribute, the posY and posX needs to be
            // the current scroll position's value, so that the elements are still positioned based on HTML layout
            var wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // If the option relativeToWrapper is true, use the wrappers offset to top, subtracted from the current page scroll.
            if (self.options.relativeToWrapper) {
                var scrollPosY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                wrapperPosY = scrollPosY - self.options.wrapper.offsetTop;
            }
            var posY = self.options.vertical ? dataPercentage || self.options.center ? wrapperPosY : 0 : 0;
            var posX = self.options.horizontal ? dataPercentage || self.options.center ? self.options.wrapper ? self.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;
            var blockTop = posY + el.getBoundingClientRect().top;
            var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;
            var blockLeft = posX + el.getBoundingClientRect().left;
            var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;
            // apparently parallax equation everyone uses
            var percentageY = dataPercentage ? dataPercentage : (posY - blockTop + screenY) / (blockHeight + screenY);
            var percentageX = dataPercentage ? dataPercentage : (posX - blockLeft + screenX) / (blockWidth + screenX);
            if (self.options.center) {
                percentageX = 0.5;
                percentageY = 0.5;
            }
            // Optional individual block speed as data attr, otherwise global speed
            var speed = breakpoints && mapBreakpoints[currentBreakpoint] !== null ? Number(mapBreakpoints[currentBreakpoint]) : dataSpeed ? dataSpeed : self.options.speed;
            var verticalSpeed = dataVerticalSpeed ? dataVerticalSpeed : self.options.verticalSpeed;
            var horizontalSpeed = dataHorizontalSpeed ? dataHorizontalSpeed : self.options.horizontalSpeed;
            // Optional individual block movement axis direction as data attr, otherwise gobal movement direction
            var verticalScrollAxis = dataVericalScrollAxis ? dataVericalScrollAxis : self.options.verticalScrollAxis;
            var horizontalScrollAxis = dataHorizontalScrollAxis ? dataHorizontalScrollAxis : self.options.horizontalScrollAxis;
            var bases = updatePosition(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed);
            // ~~Store non-translate3d transforms~~
            // Store inline styles and extract transforms
            var style = el.style.cssText;
            var transform = '';
            // Check if there's an inline styled transform
            var searchResult = /transform\s*:/i.exec(style);
            if (searchResult) {
                // Get the index of the transform
                var index = searchResult.index;
                // Trim the style to the transform point and get the following semi-colon index
                var trimmedStyle = style.slice(index);
                var delimiter = trimmedStyle.indexOf(';');
                // Remove "transform" string and save the attribute
                if (delimiter) {
                    transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g, '');
                } else {
                    transform = " " + trimmedStyle.slice(11).replace(/\s/g, '');
                }
            }
            return {
                baseX: bases.x,
                baseY: bases.y,
                top: blockTop,
                left: blockLeft,
                height: blockHeight,
                width: blockWidth,
                speed: speed,
                verticalSpeed: verticalSpeed,
                horizontalSpeed: horizontalSpeed,
                verticalScrollAxis: verticalScrollAxis,
                horizontalScrollAxis: horizontalScrollAxis,
                style: style,
                transform: transform,
                zindex: dataZindex,
                min: dataMin,
                max: dataMax,
                minX: dataMinX,
                maxX: dataMaxX,
                minY: dataMinY,
                maxY: dataMaxY
            };
        };
        // set scroll position (posY, posX)
        // side effect method is not ideal, but okay for now
        // returns true if the scroll changed, false if nothing happened
        var setPosition = function() {
            var oldY = posY;
            var oldX = posX;
            posY = self.options.wrapper ? self.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
            posX = self.options.wrapper ? self.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
            // If option relativeToWrapper is true, use relative wrapper value instead.
            if (self.options.relativeToWrapper) {
                var scrollPosY = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
                posY = scrollPosY - self.options.wrapper.offsetTop;
            }
            if (oldY != posY && self.options.vertical) {
                // scroll changed, return true
                return true;
            }
            if (oldX != posX && self.options.horizontal) {
                // scroll changed, return true
                return true;
            }
            // scroll did not change
            return false;
        };
        // Ahh a pure function, gets new transform value
        // based on scrollPosition and speed
        // Allow for decimal pixel values
        var updatePosition = function(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed) {
            var result = {};
            var valueX = (horizontalSpeed ? horizontalSpeed : speed) * (100 * (1 - percentageX));
            var valueY = (verticalSpeed ? verticalSpeed : speed) * (100 * (1 - percentageY));
            result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;
            result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;
            return result;
        };
        // Remove event listeners and loop again
        var deferredUpdate = function() {
            window.removeEventListener('resize', deferredUpdate);
            window.removeEventListener('orientationchange', deferredUpdate);
            (self.options.wrapper ? self.options.wrapper : window).removeEventListener('scroll', deferredUpdate);
            (self.options.wrapper ? self.options.wrapper : document).removeEventListener('touchmove', deferredUpdate);
            // loop again
            loopId = loop(update);
        };
        // Loop
        var update = function() {
            if (setPosition() && pause === false) {
                animate();
                // loop again
                loopId = loop(update);
            } else {
                loopId = null;
                // Don't animate until we get a position updating event
                window.addEventListener('resize', deferredUpdate);
                window.addEventListener('orientationchange', deferredUpdate);
                (self.options.wrapper ? self.options.wrapper : window).addEventListener('scroll', deferredUpdate, supportsPassive ? {
                    passive: true
                } : false);
                (self.options.wrapper ? self.options.wrapper : document).addEventListener('touchmove', deferredUpdate, supportsPassive ? {
                    passive: true
                } : false);
            }
        };
        // Transform3d on parallax element
        var animate = function() {
            var positions;
            for(var i = 0; i < self.elems.length; i++){
                // Determine relevant movement directions
                var verticalScrollAxis = blocks[i].verticalScrollAxis.toLowerCase();
                var horizontalScrollAxis = blocks[i].horizontalScrollAxis.toLowerCase();
                var verticalScrollX = verticalScrollAxis.indexOf("x") != -1 ? posY : 0;
                var verticalScrollY = verticalScrollAxis.indexOf("y") != -1 ? posY : 0;
                var horizontalScrollX = horizontalScrollAxis.indexOf("x") != -1 ? posX : 0;
                var horizontalScrollY = horizontalScrollAxis.indexOf("y") != -1 ? posX : 0;
                var percentageY = (verticalScrollY + horizontalScrollY - blocks[i].top + screenY) / (blocks[i].height + screenY);
                var percentageX = (verticalScrollX + horizontalScrollX - blocks[i].left + screenX) / (blocks[i].width + screenX);
                // Subtracting initialize value, so element stays in same spot as HTML
                positions = updatePosition(percentageX, percentageY, blocks[i].speed, blocks[i].verticalSpeed, blocks[i].horizontalSpeed);
                var positionY = positions.y - blocks[i].baseY;
                var positionX = positions.x - blocks[i].baseX;
                // The next two "if" blocks go like this:
                // Check if a limit is defined (first "min", then "max");
                // Check if we need to change the Y or the X
                // (Currently working only if just one of the axes is enabled)
                // Then, check if the new position is inside the allowed limit
                // If so, use new position. If not, set position to limit.
                // Check if a min limit is defined
                if (blocks[i].min !== null) {
                    if (self.options.vertical && !self.options.horizontal) {
                        positionY = positionY <= blocks[i].min ? blocks[i].min : positionY;
                    }
                    if (self.options.horizontal && !self.options.vertical) {
                        positionX = positionX <= blocks[i].min ? blocks[i].min : positionX;
                    }
                }
                // Check if directional min limits are defined
                if (blocks[i].minY != null) {
                    positionY = positionY <= blocks[i].minY ? blocks[i].minY : positionY;
                }
                if (blocks[i].minX != null) {
                    positionX = positionX <= blocks[i].minX ? blocks[i].minX : positionX;
                }
                // Check if a max limit is defined
                if (blocks[i].max !== null) {
                    if (self.options.vertical && !self.options.horizontal) {
                        positionY = positionY >= blocks[i].max ? blocks[i].max : positionY;
                    }
                    if (self.options.horizontal && !self.options.vertical) {
                        positionX = positionX >= blocks[i].max ? blocks[i].max : positionX;
                    }
                }
                // Check if directional max limits are defined
                if (blocks[i].maxY != null) {
                    positionY = positionY >= blocks[i].maxY ? blocks[i].maxY : positionY;
                }
                if (blocks[i].maxX != null) {
                    positionX = positionX >= blocks[i].maxX ? blocks[i].maxX : positionX;
                }
                var zindex = blocks[i].zindex;
                // Move that element
                // (Set the new translation and append initial inline transforms.)
                var translate = 'translate3d(' + (self.options.horizontal ? positionX : '0') + 'px,' + (self.options.vertical ? positionY : '0') + 'px,' + zindex + 'px) ' + blocks[i].transform;
                self.elems[i].style[transformProp] = translate;
            }
            self.options.callback(positions);
        };
        self.destroy = function() {
            for(var i = 0; i < self.elems.length; i++){
                self.elems[i].style.cssText = blocks[i].style;
            }
            // Remove resize event listener if not pause, and pause
            if (!pause) {
                window.removeEventListener('resize', init);
                pause = true;
            }
            // Clear the animation loop to prevent possible memory leak
            clearLoop(loopId);
            loopId = null;
        };
        // Init
        init();
        // Allow to recalculate the initial values whenever we want
        self.refresh = init;
        return self;
    };
    return Rellax;
});
}}),
"[project]/node_modules/wowjs/dist/wow.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
(function() {
    var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    }, indexOf = [].indexOf || function(item) {
        for(var i = 0, l = this.length; i < l; i++){
            if (i in this && this[i] === item) return i;
        }
        return -1;
    };
    Util = function() {
        function Util() {}
        Util.prototype.extend = function(custom, defaults) {
            var key, value;
            for(key in defaults){
                value = defaults[key];
                if (custom[key] == null) {
                    custom[key] = value;
                }
            }
            return custom;
        };
        Util.prototype.isMobile = function(agent) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
        };
        Util.prototype.createEvent = function(event, bubble, cancel, detail) {
            var customEvent;
            if (bubble == null) {
                bubble = false;
            }
            if (cancel == null) {
                cancel = false;
            }
            if (detail == null) {
                detail = null;
            }
            if (document.createEvent != null) {
                customEvent = document.createEvent('CustomEvent');
                customEvent.initCustomEvent(event, bubble, cancel, detail);
            } else if (document.createEventObject != null) {
                customEvent = document.createEventObject();
                customEvent.eventType = event;
            } else {
                customEvent.eventName = event;
            }
            return customEvent;
        };
        Util.prototype.emitEvent = function(elem, event) {
            if (elem.dispatchEvent != null) {
                return elem.dispatchEvent(event);
            } else if (event in (elem != null)) {
                return elem[event]();
            } else if ("on" + event in (elem != null)) {
                return elem["on" + event]();
            }
        };
        Util.prototype.addEvent = function(elem, event, fn) {
            if (elem.addEventListener != null) {
                return elem.addEventListener(event, fn, false);
            } else if (elem.attachEvent != null) {
                return elem.attachEvent("on" + event, fn);
            } else {
                return elem[event] = fn;
            }
        };
        Util.prototype.removeEvent = function(elem, event, fn) {
            if (elem.removeEventListener != null) {
                return elem.removeEventListener(event, fn, false);
            } else if (elem.detachEvent != null) {
                return elem.detachEvent("on" + event, fn);
            } else {
                return delete elem[event];
            }
        };
        Util.prototype.innerHeight = function() {
            if ('innerHeight' in window) {
                return window.innerHeight;
            } else {
                return document.documentElement.clientHeight;
            }
        };
        return Util;
    }();
    WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = function() {
        function WeakMap() {
            this.keys = [];
            this.values = [];
        }
        WeakMap.prototype.get = function(key) {
            var i, item, j, len, ref;
            ref = this.keys;
            for(i = j = 0, len = ref.length; j < len; i = ++j){
                item = ref[i];
                if (item === key) {
                    return this.values[i];
                }
            }
        };
        WeakMap.prototype.set = function(key, value) {
            var i, item, j, len, ref;
            ref = this.keys;
            for(i = j = 0, len = ref.length; j < len; i = ++j){
                item = ref[i];
                if (item === key) {
                    this.values[i] = value;
                    return;
                }
            }
            this.keys.push(key);
            return this.values.push(value);
        };
        return WeakMap;
    }());
    MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = function() {
        function MutationObserver() {
            if (typeof console !== "undefined" && console !== null) {
                console.warn('MutationObserver is not supported by your browser.');
            }
            if (typeof console !== "undefined" && console !== null) {
                console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
            }
        }
        MutationObserver.notSupported = true;
        MutationObserver.prototype.observe = function() {};
        return MutationObserver;
    }());
    getComputedStyle = this.getComputedStyle || function(el, pseudo) {
        this.getPropertyValue = function(prop) {
            var ref;
            if (prop === 'float') {
                prop = 'styleFloat';
            }
            if (getComputedStyleRX.test(prop)) {
                prop.replace(getComputedStyleRX, function(_, _char) {
                    return _char.toUpperCase();
                });
            }
            return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
        };
        return this;
    };
    getComputedStyleRX = /(\-([a-z]){1})/g;
    this.WOW = function() {
        WOW.prototype.defaults = {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            callback: null,
            scrollContainer: null
        };
        function WOW(options) {
            if (options == null) {
                options = {};
            }
            this.scrollCallback = bind(this.scrollCallback, this);
            this.scrollHandler = bind(this.scrollHandler, this);
            this.resetAnimation = bind(this.resetAnimation, this);
            this.start = bind(this.start, this);
            this.scrolled = true;
            this.config = this.util().extend(options, this.defaults);
            if (options.scrollContainer != null) {
                this.config.scrollContainer = document.querySelector(options.scrollContainer);
            }
            this.animationNameCache = new WeakMap();
            this.wowEvent = this.util().createEvent(this.config.boxClass);
        }
        WOW.prototype.init = function() {
            var ref;
            this.element = window.document.documentElement;
            if ((ref = document.readyState) === "interactive" || ref === "complete") {
                this.start();
            } else {
                this.util().addEvent(document, 'DOMContentLoaded', this.start);
            }
            return this.finished = [];
        };
        WOW.prototype.start = function() {
            var box, j, len, ref;
            this.stopped = false;
            this.boxes = (function() {
                var j, len, ref, results;
                ref = this.element.querySelectorAll("." + this.config.boxClass);
                results = [];
                for(j = 0, len = ref.length; j < len; j++){
                    box = ref[j];
                    results.push(box);
                }
                return results;
            }).call(this);
            this.all = (function() {
                var j, len, ref, results;
                ref = this.boxes;
                results = [];
                for(j = 0, len = ref.length; j < len; j++){
                    box = ref[j];
                    results.push(box);
                }
                return results;
            }).call(this);
            if (this.boxes.length) {
                if (this.disabled()) {
                    this.resetStyle();
                } else {
                    ref = this.boxes;
                    for(j = 0, len = ref.length; j < len; j++){
                        box = ref[j];
                        this.applyStyle(box, true);
                    }
                }
            }
            if (!this.disabled()) {
                this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
                this.util().addEvent(window, 'resize', this.scrollHandler);
                this.interval = setInterval(this.scrollCallback, 50);
            }
            if (this.config.live) {
                return new MutationObserver(function(_this) {
                    return function(records) {
                        var k, len1, node, record, results;
                        results = [];
                        for(k = 0, len1 = records.length; k < len1; k++){
                            record = records[k];
                            results.push((function() {
                                var l, len2, ref1, results1;
                                ref1 = record.addedNodes || [];
                                results1 = [];
                                for(l = 0, len2 = ref1.length; l < len2; l++){
                                    node = ref1[l];
                                    results1.push(this.doSync(node));
                                }
                                return results1;
                            }).call(_this));
                        }
                        return results;
                    };
                }(this)).observe(document.body, {
                    childList: true,
                    subtree: true
                });
            }
        };
        WOW.prototype.stop = function() {
            this.stopped = true;
            this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
            this.util().removeEvent(window, 'resize', this.scrollHandler);
            if (this.interval != null) {
                return clearInterval(this.interval);
            }
        };
        WOW.prototype.sync = function(element) {
            if (MutationObserver.notSupported) {
                return this.doSync(this.element);
            }
        };
        WOW.prototype.doSync = function(element) {
            var box, j, len, ref, results;
            if (element == null) {
                element = this.element;
            }
            if (element.nodeType !== 1) {
                return;
            }
            element = element.parentNode || element;
            ref = element.querySelectorAll("." + this.config.boxClass);
            results = [];
            for(j = 0, len = ref.length; j < len; j++){
                box = ref[j];
                if (indexOf.call(this.all, box) < 0) {
                    this.boxes.push(box);
                    this.all.push(box);
                    if (this.stopped || this.disabled()) {
                        this.resetStyle();
                    } else {
                        this.applyStyle(box, true);
                    }
                    results.push(this.scrolled = true);
                } else {
                    results.push(void 0);
                }
            }
            return results;
        };
        WOW.prototype.show = function(box) {
            this.applyStyle(box);
            box.className = box.className + " " + this.config.animateClass;
            if (this.config.callback != null) {
                this.config.callback(box);
            }
            this.util().emitEvent(box, this.wowEvent);
            this.util().addEvent(box, 'animationend', this.resetAnimation);
            this.util().addEvent(box, 'oanimationend', this.resetAnimation);
            this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
            this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);
            return box;
        };
        WOW.prototype.applyStyle = function(box, hidden) {
            var delay, duration, iteration;
            duration = box.getAttribute('data-wow-duration');
            delay = box.getAttribute('data-wow-delay');
            iteration = box.getAttribute('data-wow-iteration');
            return this.animate(function(_this) {
                return function() {
                    return _this.customStyle(box, hidden, duration, delay, iteration);
                };
            }(this));
        };
        WOW.prototype.animate = function() {
            if ('requestAnimationFrame' in window) {
                return function(callback) {
                    return window.requestAnimationFrame(callback);
                };
            } else {
                return function(callback) {
                    return callback();
                };
            }
        }();
        WOW.prototype.resetStyle = function() {
            var box, j, len, ref, results;
            ref = this.boxes;
            results = [];
            for(j = 0, len = ref.length; j < len; j++){
                box = ref[j];
                results.push(box.style.visibility = 'visible');
            }
            return results;
        };
        WOW.prototype.resetAnimation = function(event) {
            var target;
            if (event.type.toLowerCase().indexOf('animationend') >= 0) {
                target = event.target || event.srcElement;
                return target.className = target.className.replace(this.config.animateClass, '').trim();
            }
        };
        WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
            if (hidden) {
                this.cacheAnimationName(box);
            }
            box.style.visibility = hidden ? 'hidden' : 'visible';
            if (duration) {
                this.vendorSet(box.style, {
                    animationDuration: duration
                });
            }
            if (delay) {
                this.vendorSet(box.style, {
                    animationDelay: delay
                });
            }
            if (iteration) {
                this.vendorSet(box.style, {
                    animationIterationCount: iteration
                });
            }
            this.vendorSet(box.style, {
                animationName: hidden ? 'none' : this.cachedAnimationName(box)
            });
            return box;
        };
        WOW.prototype.vendors = [
            "moz",
            "webkit"
        ];
        WOW.prototype.vendorSet = function(elem, properties) {
            var name, results, value, vendor;
            results = [];
            for(name in properties){
                value = properties[name];
                elem["" + name] = value;
                results.push((function() {
                    var j, len, ref, results1;
                    ref = this.vendors;
                    results1 = [];
                    for(j = 0, len = ref.length; j < len; j++){
                        vendor = ref[j];
                        results1.push(elem["" + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value);
                    }
                    return results1;
                }).call(this));
            }
            return results;
        };
        WOW.prototype.vendorCSS = function(elem, property) {
            var j, len, ref, result, style, vendor;
            style = getComputedStyle(elem);
            result = style.getPropertyCSSValue(property);
            ref = this.vendors;
            for(j = 0, len = ref.length; j < len; j++){
                vendor = ref[j];
                result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
            }
            return result;
        };
        WOW.prototype.animationName = function(box) {
            var animationName, error;
            try {
                animationName = this.vendorCSS(box, 'animation-name').cssText;
            } catch (error) {
                animationName = getComputedStyle(box).getPropertyValue('animation-name');
            }
            if (animationName === 'none') {
                return '';
            } else {
                return animationName;
            }
        };
        WOW.prototype.cacheAnimationName = function(box) {
            return this.animationNameCache.set(box, this.animationName(box));
        };
        WOW.prototype.cachedAnimationName = function(box) {
            return this.animationNameCache.get(box);
        };
        WOW.prototype.scrollHandler = function() {
            return this.scrolled = true;
        };
        WOW.prototype.scrollCallback = function() {
            var box;
            if (this.scrolled) {
                this.scrolled = false;
                this.boxes = (function() {
                    var j, len, ref, results;
                    ref = this.boxes;
                    results = [];
                    for(j = 0, len = ref.length; j < len; j++){
                        box = ref[j];
                        if (!box) {
                            continue;
                        }
                        if (this.isVisible(box)) {
                            this.show(box);
                            continue;
                        }
                        results.push(box);
                    }
                    return results;
                }).call(this);
                if (!(this.boxes.length || this.config.live)) {
                    return this.stop();
                }
            }
        };
        WOW.prototype.offsetTop = function(element) {
            var top;
            while(element.offsetTop === void 0){
                element = element.parentNode;
            }
            top = element.offsetTop;
            while(element = element.offsetParent){
                top += element.offsetTop;
            }
            return top;
        };
        WOW.prototype.isVisible = function(box) {
            var bottom, offset, top, viewBottom, viewTop;
            offset = box.getAttribute('data-wow-offset') || this.config.offset;
            viewTop = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;
            viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
            top = this.offsetTop(box);
            bottom = top + box.clientHeight;
            return top <= viewBottom && bottom >= viewTop;
        };
        WOW.prototype.util = function() {
            return this._util != null ? this._util : this._util = new Util();
        };
        WOW.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        };
        return WOW;
    }();
}).call(this);
}}),
}]);

//# sourceMappingURL=_c5e6bc._.js.map