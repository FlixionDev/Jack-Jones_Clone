import {
  CSSVars,
  ColorModeContext,
  ColorModeProvider,
  ColorModeScript,
  DarkMode,
  Global,
  GlobalStyle,
  Icon,
  LightMode,
  PanSession,
  StylesProvider,
  ThemeProvider,
  addPrefix,
  ariaAttr,
  background,
  baseTheme,
  border,
  calc,
  callAll,
  callAllHandlers,
  callAllHandlers2,
  cancelSync,
  chakra,
  color,
  compact,
  contains,
  cookieStorageManager,
  cookieStorageManagerSSR,
  createCookieStorageManager,
  createIcon,
  createLocalStorageManager,
  createMultiStyleConfigHelpers,
  createStylesContext,
  css,
  cssVar,
  cx,
  dataAttr,
  defineCssVars,
  defineStyle,
  defineStyleConfig,
  detectBrowser,
  effect,
  es_default,
  extendBaseTheme,
  extendTheme,
  filter,
  flatten,
  flattenTokens,
  flexbox,
  focus,
  forwardRef,
  getActiveElement,
  getAllFocusable,
  getBox,
  getCSSVar,
  getCss,
  getFrameData,
  getOwnerDocument,
  getOwnerWindow,
  getPointerEventName,
  getScriptSrc,
  getToken,
  grid,
  hasFocusWithin,
  interactivity,
  isActiveElement,
  isBrowser,
  isChakraTheme,
  isObject,
  isRefObject,
  isStyleProp,
  isTabbable,
  keyframes,
  layout,
  layoutPropNames,
  list,
  localStorageManager,
  mergeThemeOverride,
  noop,
  omitThemingProps,
  others,
  position,
  propNames,
  pseudoPropNames,
  pseudoSelectors,
  require_jsx_runtime,
  requiredChakraThemeKeys,
  resolveStyleConfig,
  ring,
  runIfFn,
  runIfFn2,
  scroll,
  shouldForwardProp,
  space,
  src_default,
  styled,
  systemProps,
  textDecoration,
  theme,
  toCSSObject,
  toCSSVar,
  toVarDefinition,
  toVarReference,
  tokenToCSSVar,
  transform,
  transition,
  typography,
  useChakra,
  useColorMode,
  useColorModeValue,
  useComponentStyles__unstable,
  useMultiStyleConfig,
  useSafeLayoutEffect,
  useStyleConfig,
  useStyles,
  useTheme,
  useToken,
  warn,
  withDefaultColorScheme,
  withDefaultProps,
  withDefaultSize,
  withDefaultVariant,
  wrapPointerEventHandler
} from "./chunk-7KLM4IWL.js";
import {
  require_prop_types
} from "./chunk-UABGX2OL.js";
import "./chunk-SLR7NUMX.js";
import {
  _objectWithoutPropertiesLoose
} from "./chunk-PSGUSLG5.js";
import {
  _extends
} from "./chunk-EXGOL6Q7.js";
import {
  require_react_dom
} from "./chunk-PRK46SJB.js";
import "./chunk-XYLSUGT6.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  _defineProperty
} from "./chunk-FRNXG5VO.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/framer-motion/node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn2) {
  var cache = {};
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn2(arg);
    return cache[arg];
  };
}
var memoize_browser_esm_default;
var init_memoize_browser_esm = __esm({
  "node_modules/framer-motion/node_modules/@emotion/memoize/dist/memoize.browser.esm.js"() {
    memoize_browser_esm_default = memoize;
  }
});

// node_modules/framer-motion/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
var is_prop_valid_browser_esm_exports = {};
__export(is_prop_valid_browser_esm_exports, {
  default: () => is_prop_valid_browser_esm_default
});
var reactPropsRegex, index, is_prop_valid_browser_esm_default;
var init_is_prop_valid_browser_esm = __esm({
  "node_modules/framer-motion/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"() {
    init_memoize_browser_esm();
    reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    index = memoize_browser_esm_default(
      function(prop) {
        return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
      }
      /* Z+1 */
    );
    is_prop_valid_browser_esm_default = index;
  }
});

// node_modules/toggle-selection/index.js
var require_toggle_selection = __commonJS({
  "node_modules/toggle-selection/index.js"(exports, module) {
    module.exports = function() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function() {
        };
      }
      var active = document.activeElement;
      var ranges = [];
      for (var i = 0; i < selection.rangeCount; i++) {
        ranges.push(selection.getRangeAt(i));
      }
      switch (active.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      selection.removeAllRanges();
      return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) {
          ranges.forEach(function(range2) {
            selection.addRange(range2);
          });
        }
        active && active.focus();
      };
    };
  }
});

// node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS({
  "node_modules/copy-to-clipboard/index.js"(exports, module) {
    "use strict";
    var deselectCurrent = require_toggle_selection();
    var clipboardToIE11Formatting = {
      "text/plain": "Text",
      "text/html": "Url",
      "default": "Text"
    };
    var defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format2(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy2(text, options) {
      var debug, message, reselectPrevious, range2, selection, mark, success = false;
      if (!options) {
        options = {};
      }
      debug = options.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range2 = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        mark.ariaHidden = "true";
        mark.style.all = "unset";
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        mark.style.whiteSpace = "pre";
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e) {
          e.stopPropagation();
          if (options.format) {
            e.preventDefault();
            if (typeof e.clipboardData === "undefined") {
              debug && console.warn("unable to use e.clipboardData");
              debug && console.warn("trying IE specific stuff");
              window.clipboardData.clearData();
              var format3 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
              window.clipboardData.setData(format3, text);
            } else {
              e.clipboardData.clearData();
              e.clipboardData.setData(options.format, text);
            }
          }
          if (options.onCopy) {
            e.preventDefault();
            options.onCopy(e.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range2.selectNodeContents(mark);
        selection.addRange(range2);
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success = true;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options.format || "text", text);
          options.onCopy && options.onCopy(window.clipboardData);
          success = true;
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2);
          debug && console.error("falling back to prompt");
          message = format2("message" in options ? options.message : defaultMessage);
          window.prompt(message, text);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == "function") {
            selection.removeRange(range2);
          } else {
            selection.removeAllRanges();
          }
        }
        if (mark) {
          document.body.removeChild(mark);
        }
        reselectPrevious();
      }
      return success;
    }
    module.exports = copy2;
  }
});

// node_modules/@chakra-ui/css-reset/dist/chunk-ZGCVOC2V.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var css2 = String.raw;
var vhPolyfill = css2`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`;
var CSSPolyfill = () => (0, import_jsx_runtime.jsx)(Global, { styles: vhPolyfill });
var CSSReset = ({ scope = "" }) => (0, import_jsx_runtime.jsx)(
  Global,
  {
    styles: css2`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${scope} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${scope} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${scope} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${scope} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${scope} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${scope} :where(b, strong) {
        font-weight: bold;
      }

      ${scope} small {
        font-size: 80%;
      }

      ${scope} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${scope} sub {
        bottom: -0.25em;
      }

      ${scope} sup {
        top: -0.5em;
      }

      ${scope} img {
        border-style: none;
      }

      ${scope} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${scope} :where(button, input) {
        overflow: visible;
      }

      ${scope} :where(button, select) {
        text-transform: none;
      }

      ${scope} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${scope} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${scope} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${scope} progress {
        vertical-align: baseline;
      }

      ${scope} textarea {
        overflow: auto;
      }

      ${scope} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${scope} input[type="number"]::-webkit-inner-spin-button,
      ${scope} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${scope} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${scope} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${scope} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${scope} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${scope} details {
        display: block;
      }

      ${scope} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${scope} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${scope} button {
        background: transparent;
        padding: 0;
      }

      ${scope} fieldset {
        margin: 0;
        padding: 0;
      }

      ${scope} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${scope} textarea {
        resize: vertical;
      }

      ${scope} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${scope} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${scope} table {
        border-collapse: collapse;
      }

      ${scope} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${scope} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${scope} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${scope} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${scope} select::-ms-expand {
        display: none;
      }

      ${vhPolyfill}
    `
  }
);

// node_modules/@chakra-ui/react-context/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
function getErrorMessage(hook, provider) {
  return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}
function createContext(options = {}) {
  const {
    name,
    strict = true,
    hookName = "useContext",
    providerName = "Provider",
    errorMessage,
    defaultValue
  } = options;
  const Context = (0, import_react2.createContext)(defaultValue);
  Context.displayName = name;
  function useContext17() {
    var _a2;
    const context = (0, import_react2.useContext)(Context);
    if (!context && strict) {
      const error = new Error(
        errorMessage != null ? errorMessage : getErrorMessage(hookName, providerName)
      );
      error.name = "ContextError";
      (_a2 = Error.captureStackTrace) == null ? void 0 : _a2.call(Error, error, useContext17);
      throw error;
    }
    return context;
  }
  return [Context.Provider, useContext17, Context];
}

// node_modules/@chakra-ui/portal/dist/chunk-EJ37EVSP.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var [PortalManagerContextProvider, usePortalManager] = createContext({
  strict: false,
  name: "PortalManagerContext"
});
function PortalManager(props) {
  const { children, zIndex } = props;
  return (0, import_jsx_runtime2.jsx)(PortalManagerContextProvider, { value: { zIndex }, children });
}
PortalManager.displayName = "PortalManager";

// node_modules/@chakra-ui/portal/dist/chunk-YLCZP3C4.mjs
var import_react_dom = __toESM(require_react_dom(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var [PortalContextProvider, usePortalContext] = createContext({
  strict: false,
  name: "PortalContext"
});
var PORTAL_CLASSNAME = "chakra-portal";
var PORTAL_SELECTOR = `.chakra-portal`;
var Container = (props) => (0, import_jsx_runtime3.jsx)(
  "div",
  {
    className: "chakra-portal-zIndex",
    style: {
      position: "absolute",
      zIndex: props.zIndex,
      top: 0,
      left: 0,
      right: 0
    },
    children: props.children
  }
);
var DefaultPortal = (props) => {
  const { appendToParentPortal, children } = props;
  const [tempNode, setTempNode] = (0, import_react3.useState)(null);
  const portal = (0, import_react3.useRef)(null);
  const [, forceUpdate] = (0, import_react3.useState)({});
  (0, import_react3.useEffect)(() => forceUpdate({}), []);
  const parentPortal = usePortalContext();
  const manager2 = usePortalManager();
  useSafeLayoutEffect(() => {
    if (!tempNode)
      return;
    const doc = tempNode.ownerDocument;
    const host = appendToParentPortal ? parentPortal != null ? parentPortal : doc.body : doc.body;
    if (!host)
      return;
    portal.current = doc.createElement("div");
    portal.current.className = PORTAL_CLASSNAME;
    host.appendChild(portal.current);
    forceUpdate({});
    const portalNode = portal.current;
    return () => {
      if (host.contains(portalNode)) {
        host.removeChild(portalNode);
      }
    };
  }, [tempNode]);
  const _children = (manager2 == null ? void 0 : manager2.zIndex) ? (0, import_jsx_runtime3.jsx)(Container, { zIndex: manager2 == null ? void 0 : manager2.zIndex, children }) : children;
  return portal.current ? (0, import_react_dom.createPortal)(
    (0, import_jsx_runtime3.jsx)(PortalContextProvider, { value: portal.current, children: _children }),
    portal.current
  ) : (0, import_jsx_runtime3.jsx)(
    "span",
    {
      ref: (el) => {
        if (el)
          setTempNode(el);
      }
    }
  );
};
var ContainerPortal = (props) => {
  const { children, containerRef, appendToParentPortal } = props;
  const containerEl = containerRef.current;
  const host = containerEl != null ? containerEl : typeof window !== "undefined" ? document.body : void 0;
  const portal = (0, import_react3.useMemo)(() => {
    const node2 = containerEl == null ? void 0 : containerEl.ownerDocument.createElement("div");
    if (node2)
      node2.className = PORTAL_CLASSNAME;
    return node2;
  }, [containerEl]);
  const [, forceUpdate] = (0, import_react3.useState)({});
  useSafeLayoutEffect(() => forceUpdate({}), []);
  useSafeLayoutEffect(() => {
    if (!portal || !host)
      return;
    host.appendChild(portal);
    return () => {
      host.removeChild(portal);
    };
  }, [portal, host]);
  if (host && portal) {
    return (0, import_react_dom.createPortal)(
      (0, import_jsx_runtime3.jsx)(PortalContextProvider, { value: appendToParentPortal ? portal : null, children }),
      portal
    );
  }
  return null;
};
function Portal(props) {
  const portalProps = {
    appendToParentPortal: true,
    ...props
  };
  const { containerRef, ...rest } = portalProps;
  return containerRef ? (0, import_jsx_runtime3.jsx)(ContainerPortal, { containerRef, ...rest }) : (0, import_jsx_runtime3.jsx)(DefaultPortal, { ...rest });
}
Portal.className = PORTAL_CLASSNAME;
Portal.selector = PORTAL_SELECTOR;
Portal.displayName = "Portal";

// node_modules/@chakra-ui/react-env/dist/chunk-23XYWYLU.mjs
var import_react4 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var EnvironmentContext = (0, import_react4.createContext)({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
EnvironmentContext.displayName = "EnvironmentContext";
function useEnvironment({ defer } = {}) {
  const [, forceUpdate] = (0, import_react4.useReducer)((c) => c + 1, 0);
  useSafeLayoutEffect(() => {
    if (!defer)
      return;
    forceUpdate();
  }, [defer]);
  return (0, import_react4.useContext)(EnvironmentContext);
}
function EnvironmentProvider(props) {
  const { children, environment: environmentProp, disabled } = props;
  const ref = (0, import_react4.useRef)(null);
  const context = (0, import_react4.useMemo)(() => {
    if (environmentProp)
      return environmentProp;
    return {
      getDocument: () => {
        var _a2, _b;
        return (_b = (_a2 = ref.current) == null ? void 0 : _a2.ownerDocument) != null ? _b : document;
      },
      getWindow: () => {
        var _a2, _b;
        return (_b = (_a2 = ref.current) == null ? void 0 : _a2.ownerDocument.defaultView) != null ? _b : window;
      }
    };
  }, [environmentProp]);
  const showSpan = !disabled || !environmentProp;
  return (0, import_jsx_runtime4.jsxs)(EnvironmentContext.Provider, { value: context, children: [
    children,
    showSpan && (0, import_jsx_runtime4.jsx)("span", { id: "__chakra_env", hidden: true, ref })
  ] });
}
EnvironmentProvider.displayName = "EnvironmentProvider";

// node_modules/@chakra-ui/provider/dist/chunk-5PBJXT35.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var ChakraProvider = (props) => {
  const {
    children,
    colorModeManager,
    portalZIndex,
    resetScope,
    resetCSS = true,
    theme: theme2 = {},
    environment,
    cssVarsRoot,
    disableEnvironment
  } = props;
  const _children = (0, import_jsx_runtime5.jsx)(
    EnvironmentProvider,
    {
      environment,
      disabled: disableEnvironment,
      children
    }
  );
  return (0, import_jsx_runtime5.jsx)(ThemeProvider, { theme: theme2, cssVarsRoot, children: (0, import_jsx_runtime5.jsxs)(
    ColorModeProvider,
    {
      colorModeManager,
      options: theme2.config,
      children: [
        resetCSS ? (0, import_jsx_runtime5.jsx)(CSSReset, { scope: resetScope }) : (0, import_jsx_runtime5.jsx)(CSSPolyfill, {}),
        (0, import_jsx_runtime5.jsx)(GlobalStyle, {}),
        portalZIndex ? (0, import_jsx_runtime5.jsx)(PortalManager, { zIndex: portalZIndex, children: _children }) : _children
      ]
    }
  ) });
};

// node_modules/@chakra-ui/toast/dist/chunk-LQP773TK.mjs
var findById = (arr, id4) => arr.find((toast) => toast.id === id4);
function findToast(toasts, id4) {
  const position2 = getToastPosition(toasts, id4);
  const index2 = position2 ? toasts[position2].findIndex((toast) => toast.id === id4) : -1;
  return {
    position: position2,
    index: index2
  };
}
function getToastPosition(toasts, id4) {
  for (const [position2, values] of Object.entries(toasts)) {
    if (findById(values, id4)) {
      return position2;
    }
  }
}
function getToastStyle(position2) {
  const isRighty = position2.includes("right");
  const isLefty = position2.includes("left");
  let alignItems = "center";
  if (isRighty)
    alignItems = "flex-end";
  if (isLefty)
    alignItems = "flex-start";
  return {
    display: "flex",
    flexDirection: "column",
    alignItems
  };
}
function getToastListStyle(position2) {
  const isTopOrBottom = position2 === "top" || position2 === "bottom";
  const margin = isTopOrBottom ? "0 auto" : void 0;
  const top2 = position2.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0;
  const bottom2 = position2.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0;
  const right2 = !position2.includes("left") ? "env(safe-area-inset-right, 0px)" : void 0;
  const left2 = !position2.includes("right") ? "env(safe-area-inset-left, 0px)" : void 0;
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin,
    top: top2,
    bottom: bottom2,
    right: right2,
    left: left2
  };
}

// node_modules/@chakra-ui/react-use-timeout/dist/index.mjs
var import_react6 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react-use-callback-ref/dist/index.mjs
var import_react5 = __toESM(require_react(), 1);
function useCallbackRef(callback, deps = []) {
  const callbackRef = (0, import_react5.useRef)(callback);
  (0, import_react5.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react5.useCallback)((...args) => {
    var _a2;
    return (_a2 = callbackRef.current) == null ? void 0 : _a2.call(callbackRef, ...args);
  }, deps);
}

// node_modules/@chakra-ui/react-use-timeout/dist/index.mjs
function useTimeout(callback, delay2) {
  const fn2 = useCallbackRef(callback);
  (0, import_react6.useEffect)(() => {
    if (delay2 == null)
      return void 0;
    let timeoutId = null;
    timeoutId = window.setTimeout(() => {
      fn2();
    }, delay2);
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delay2, fn2]);
}

// node_modules/@chakra-ui/react-use-update-effect/dist/index.mjs
var import_react7 = __toESM(require_react(), 1);
function useUpdateEffect(callback, deps) {
  const renderCycleRef = (0, import_react7.useRef)(false);
  const effectCycleRef = (0, import_react7.useRef)(false);
  (0, import_react7.useEffect)(() => {
    const mounted = renderCycleRef.current;
    const run = mounted && effectCycleRef.current;
    if (run) {
      return callback();
    }
    effectCycleRef.current = true;
  }, deps);
  (0, import_react7.useEffect)(() => {
    renderCycleRef.current = true;
    return () => {
      renderCycleRef.current = false;
    };
  }, []);
}

// node_modules/framer-motion/dist/es/motion/index.mjs
var React = __toESM(require_react(), 1);
var import_react19 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var import_react8 = __toESM(require_react(), 1);
var MotionConfigContext = (0, import_react8.createContext)({
  transformPagePoint: (p) => p,
  isStatic: false,
  reducedMotion: "never"
});

// node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var import_react9 = __toESM(require_react(), 1);
var MotionContext = (0, import_react9.createContext)({});

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
var import_react13 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var import_react10 = __toESM(require_react(), 1);
var PresenceContext = (0, import_react10.createContext)(null);

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var import_react11 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser2 = typeof document !== "undefined";

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect = isBrowser2 ? import_react11.useLayoutEffect : import_react11.useEffect;

// node_modules/framer-motion/dist/es/context/LazyContext.mjs
var import_react12 = __toESM(require_react(), 1);
var LazyContext = (0, import_react12.createContext)({ strict: false });

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component2, visualState, props, createVisualElement2) {
  const { visualElement: parent } = (0, import_react13.useContext)(MotionContext);
  const lazyContext = (0, import_react13.useContext)(LazyContext);
  const presenceContext = (0, import_react13.useContext)(PresenceContext);
  const reducedMotionConfig = (0, import_react13.useContext)(MotionConfigContext).reducedMotion;
  const visualElementRef = (0, import_react13.useRef)();
  createVisualElement2 = createVisualElement2 || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement2) {
    visualElementRef.current = createVisualElement2(Component2, {
      visualState,
      parent,
      props,
      presenceContext,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig
    });
  }
  const visualElement = visualElementRef.current;
  (0, import_react13.useInsertionEffect)(() => {
    visualElement && visualElement.update(props, presenceContext);
  });
  useIsomorphicLayoutEffect(() => {
    visualElement && visualElement.render();
  });
  (0, import_react13.useEffect)(() => {
    visualElement && visualElement.updateFeatures();
  });
  const useAnimateChangesEffect = window.HandoffAppearAnimations ? useIsomorphicLayoutEffect : import_react13.useEffect;
  useAnimateChangesEffect(() => {
    if (visualElement && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  return visualElement;
}

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
var import_react14 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject2(ref) {
  return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function useMotionRef(visualState, visualElement, externalRef) {
  return (0, import_react14.useCallback)(
    (instance) => {
      instance && visualState.mount && visualState.mount(instance);
      if (visualElement) {
        instance ? visualElement.mount(instance) : visualElement.unmount();
      }
      if (externalRef) {
        if (typeof externalRef === "function") {
          externalRef(instance);
        } else if (isRefObject2(externalRef)) {
          externalRef.current = instance;
        }
      }
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]
  );
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
var import_react15 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
function isVariantLabel(v) {
  return typeof v === "string" || Array.isArray(v);
}

// node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function isAnimationControls(v) {
  return typeof v === "object" && typeof v.start === "function";
}

// node_modules/framer-motion/dist/es/render/utils/variant-props.mjs
var variantPriorityOrder = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
];
var variantProps = ["initial", ...variantPriorityOrder];

// node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
  return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}

// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const { initial, animate: animate2 } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate2) ? animate2 : void 0
    };
  }
  return props.inherit !== false ? context : {};
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
  const { initial, animate: animate2 } = getCurrentTreeVariants(props, (0, import_react15.useContext)(MotionContext));
  return (0, import_react15.useMemo)(() => ({ initial, animate: animate2 }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate2)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

// node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var featureProps = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
var featureDefinitions = {};
for (const key in featureProps) {
  featureDefinitions[key] = {
    isEnabled: (props) => featureProps[key].some((name) => !!props[name])
  };
}

// node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
  for (const key in features) {
    featureDefinitions[key] = {
      ...featureDefinitions[key],
      ...features[key]
    };
  }
}

// node_modules/framer-motion/dist/es/utils/use-constant.mjs
var import_react16 = __toESM(require_react(), 1);
function useConstant(init) {
  const ref = (0, import_react16.useRef)(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// node_modules/framer-motion/dist/es/projection/node/state.mjs
var globalProjectionState = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: true,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: false
};

// node_modules/framer-motion/dist/es/projection/node/id.mjs
var id = 1;
function useProjectionId() {
  return useConstant(() => {
    if (globalProjectionState.hasEverUpdated) {
      return id++;
    }
  });
}

// node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var import_react17 = __toESM(require_react(), 1);
var LayoutGroupContext = (0, import_react17.createContext)({});

// node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var import_react18 = __toESM(require_react(), 1);
var SwitchLayoutGroupContext = (0, import_react18.createContext)({});

// node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = Symbol.for("motionComponentSymbol");

// node_modules/framer-motion/dist/es/motion/index.mjs
function createMotionComponent({ preloadedFeatures: preloadedFeatures2, createVisualElement: createVisualElement2, useRender, useVisualState: useVisualState2, Component: Component2 }) {
  preloadedFeatures2 && loadFeatures(preloadedFeatures2);
  function MotionComponent(props, externalRef) {
    let MeasureLayout2;
    const configAndProps = {
      ...(0, import_react19.useContext)(MotionConfigContext),
      ...props,
      layoutId: useLayoutId(props)
    };
    const { isStatic } = configAndProps;
    const context = useCreateMotionContext(props);
    const projectionId = isStatic ? void 0 : useProjectionId();
    const visualState = useVisualState2(props, isStatic);
    if (!isStatic && isBrowser2) {
      context.visualElement = useVisualElement(Component2, visualState, configAndProps, createVisualElement2);
      const initialLayoutGroupConfig = (0, import_react19.useContext)(SwitchLayoutGroupContext);
      const isStrict = (0, import_react19.useContext)(LazyContext).strict;
      if (context.visualElement) {
        MeasureLayout2 = context.visualElement.loadFeatures(
          // Note: Pass the full new combined props to correctly re-render dynamic feature components.
          configAndProps,
          isStrict,
          preloadedFeatures2,
          projectionId,
          initialLayoutGroupConfig
        );
      }
    }
    return React.createElement(
      MotionContext.Provider,
      { value: context },
      MeasureLayout2 && context.visualElement ? React.createElement(MeasureLayout2, { visualElement: context.visualElement, ...configAndProps }) : null,
      useRender(Component2, props, projectionId, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement)
    );
  }
  const ForwardRefComponent = (0, import_react19.forwardRef)(MotionComponent);
  ForwardRefComponent[motionComponentSymbol] = Component2;
  return ForwardRefComponent;
}
function useLayoutId({ layoutId }) {
  const layoutGroupId = (0, import_react19.useContext)(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}

// node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs
function createMotionProxy(createConfig) {
  function custom(Component2, customMotionComponentConfig = {}) {
    return createMotionComponent(createConfig(Component2, customMotionComponentConfig));
  }
  if (typeof Proxy === "undefined") {
    return custom;
  }
  const componentCache = /* @__PURE__ */ new Map();
  return new Proxy(custom, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (_target, key) => {
      if (!componentCache.has(key)) {
        componentCache.set(key, custom(key));
      }
      return componentCache.get(key);
    }
  });
}

// node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component2) {
  if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component2 !== "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    Component2.includes("-")
  ) {
    return false;
  } else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component2) > -1 || /**
     * If it contains a capital letter, it's an SVG component
     */
    /[A-Z]/.test(Component2)
  ) {
    return true;
  }
  return false;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
var import_react22 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
var import_react20 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}

// node_modules/framer-motion/dist/es/render/html/utils/transform.mjs
var transformPropOrder = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
var transformProps = new Set(transformPropOrder);

// node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, { layout: layout3, layoutId }) {
  return transformProps.has(key) || key.startsWith("origin") || (layout3 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

// node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = (value) => Boolean(value && value.getVelocity);

// node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
function buildTransform(transform3, { enableHardwareAcceleration = true, allowTransformNone = true }, transformIsDefault, transformTemplate) {
  let transformString = "";
  for (let i = 0; i < numTransforms; i++) {
    const key = transformPropOrder[i];
    if (transform3[key] !== void 0) {
      const transformName = translateAlias[key] || key;
      transformString += `${transformName}(${transform3[key]}) `;
    }
  }
  if (enableHardwareAcceleration && !transform3.z) {
    transformString += "translateZ(0)";
  }
  transformString = transformString.trim();
  if (transformTemplate) {
    transformString = transformTemplate(transform3, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}

// node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
var checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
var isCSSVariableName = checkStringStartsWith("--");
var isCSSVariableToken = checkStringStartsWith("var(--");

// node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
var getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};

// node_modules/framer-motion/dist/es/utils/clamp.mjs
var clamp = (min2, max2, v) => Math.min(Math.max(v, min2), max2);

// node_modules/framer-motion/dist/es/value/types/numbers/index.mjs
var number = {
  test: (v) => typeof v === "number",
  parse: parseFloat,
  transform: (v) => v
};
var alpha = {
  ...number,
  transform: (v) => clamp(0, 1, v)
};
var scale = {
  ...number,
  default: 1
};

// node_modules/framer-motion/dist/es/value/types/utils.mjs
var sanitize = (v) => Math.round(v * 1e5) / 1e5;
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
  return typeof v === "string";
}

// node_modules/framer-motion/dist/es/value/types/numbers/units.mjs
var createUnitType = (unit) => ({
  test: (v) => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: (v) => `${v}${unit}`
});
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = {
  ...percent,
  parse: (v) => percent.parse(v) / 100,
  transform: (v) => percent.transform(v * 100)
};

// node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs
var int = {
  ...number,
  transform: Math.round
};

// node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
var numberValueTypes = {
  // Border props
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  // Positioning props
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  // Spacing props
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  // Transform props
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  // Misc
  zIndex: int,
  // SVG
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, options, transformTemplate) {
  const { style, vars, transform: transform3, transformOrigin: transformOrigin2 } = state;
  let hasTransform2 = false;
  let hasTransformOrigin = false;
  let transformIsNone = true;
  for (const key in latestValues) {
    const value = latestValues[key];
    if (isCSSVariableName(key)) {
      vars[key] = value;
      continue;
    }
    const valueType = numberValueTypes[key];
    const valueAsType = getValueAsType(value, valueType);
    if (transformProps.has(key)) {
      hasTransform2 = true;
      transform3[key] = valueAsType;
      if (!transformIsNone)
        continue;
      if (value !== (valueType.default || 0))
        transformIsNone = false;
    } else if (key.startsWith("origin")) {
      hasTransformOrigin = true;
      transformOrigin2[key] = valueAsType;
    } else {
      style[key] = valueAsType;
    }
  }
  if (!latestValues.transform) {
    if (hasTransform2 || transformTemplate) {
      style.transform = buildTransform(state.transform, options, transformIsNone, transformTemplate);
    } else if (style.transform) {
      style.transform = "none";
    }
  }
  if (hasTransformOrigin) {
    const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin2;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}

// node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({ transformTemplate }, visualState, isStatic) {
  return (0, import_react20.useMemo)(() => {
    const state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
  return props.transformValues ? props.transformValues(style) : style;
}
function useHTMLProps(props, visualState, isStatic) {
  const htmlProps = {};
  const style = useStyle(props, visualState, isStatic);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}

// node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var validMotionProps = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport"
]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || validMotionProps.has(key);
}

// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp)
    return;
  shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
try {
  loadExternalIsValidProp((init_is_prop_valid_browser_esm(), __toCommonJS(is_prop_valid_browser_esm_exports)).default);
} catch (_a2) {
}
function filterProps(props, isDom2, forwardMotionProps) {
  const filteredProps = {};
  for (const key in props) {
    if (key === "values" && typeof props.values === "object")
      continue;
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom2 && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
    props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
var import_react21 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
function calcOrigin(origin, offset2, size) {
  return typeof origin === "string" ? origin : px.transform(offset2 + size * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return `${pxOriginX} ${pxOriginY}`;
}

// node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset2 = 0, useDashCase = true) {
  attrs.pathLength = 1;
  const keys = useDashCase ? dashKeys : camelKeys;
  attrs[keys.offset] = px.transform(-offset2);
  const pathLength = px.transform(length);
  const pathSpacing = px.transform(spacing);
  attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}

// node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function buildSVGAttrs(state, {
  attrX,
  attrY,
  originX,
  originY,
  pathLength,
  pathSpacing = 1,
  pathOffset = 0,
  // This is object creation, which we try to avoid per-frame.
  ...latest
}, options, isSVGTag2, transformTemplate) {
  buildHTMLStyles(state, latest, options, transformTemplate);
  if (isSVGTag2) {
    if (state.style.viewBox) {
      state.attrs.viewBox = state.style.viewBox;
    }
    return;
  }
  state.attrs = state.style;
  state.style = {};
  const { attrs, style, dimensions } = state;
  if (attrs.transform) {
    if (dimensions)
      style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});

// node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function useSVGProps(props, visualState, _isStatic, Component2) {
  const visualProps = (0, import_react21.useMemo)(() => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, { enableHardwareAcceleration: false }, isSVGTag(Component2), props.transformTemplate);
    return {
      ...state.attrs,
      style: { ...state.style }
    };
  }, [visualState]);
  if (props.style) {
    const rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = { ...rawStyles, ...visualProps.style };
  }
  return visualProps;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function createUseRender(forwardMotionProps = false) {
  const useRender = (Component2, props, projectionId, ref, { latestValues }, isStatic) => {
    const useVisualProps = isSVGComponent(Component2) ? useSVGProps : useHTMLProps;
    const visualProps = useVisualProps(props, latestValues, isStatic, Component2);
    const filteredProps = filterProps(props, typeof Component2 === "string", forwardMotionProps);
    const elementProps = {
      ...filteredProps,
      ...visualProps,
      ref
    };
    const { children } = props;
    const renderedChildren = (0, import_react22.useMemo)(() => isMotionValue(children) ? children.get() : children, [children]);
    if (projectionId) {
      elementProps["data-projection-id"] = projectionId;
    }
    return (0, import_react22.createElement)(Component2, {
      ...elementProps,
      children: renderedChildren
    });
  };
  return useRender;
}

// node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var camelToDash = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

// node_modules/framer-motion/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
  for (const key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);

// node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (const key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

// node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps) {
  const { style } = props;
  const newValues = {};
  for (const key in style) {
    if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props)) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props, prevProps) {
  const newValues = scrapeMotionValuesFromProps(props, prevProps);
  for (const key in props) {
    if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
      const targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
var import_react23 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
function resolveVariantFromProps(props, definition, custom, currentValues = {}, currentVelocity = {}) {
  if (typeof definition === "function") {
    definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  if (typeof definition === "function") {
    definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  return definition;
}

// node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var isKeyframesTarget = (v) => {
  return Array.isArray(v);
};

// node_modules/framer-motion/dist/es/utils/resolve-value.mjs
var isCustomValue = (v) => {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = (v) => {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

// node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function resolveMotionValue(value) {
  const unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3, createRenderState, onMount }, props, context, presenceContext) {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  if (onMount) {
    state.mount = (instance) => onMount(props, instance, state);
  }
  return state;
}
var makeUseVisualState = (config) => (props, isStatic) => {
  const context = (0, import_react23.useContext)(MotionContext);
  const presenceContext = (0, import_react23.useContext)(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let { initial, animate: animate2 } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0)
      initial = context.initial;
    if (animate2 === void 0)
      animate2 = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate2 : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list2 = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list2.forEach((definition) => {
      const resolved = resolveVariantFromProps(props, definition);
      if (!resolved)
        return;
      const { transitionEnd, transition: transition2, ...target } = resolved;
      for (const key in target) {
        let valueTarget = target[key];
        if (Array.isArray(valueTarget)) {
          const index2 = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
          valueTarget = valueTarget[index2];
        }
        if (valueTarget !== null) {
          values[key] = valueTarget;
        }
      }
      for (const key in transitionEnd)
        values[key] = transitionEnd[key];
    });
  }
  return values;
}

// node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState,
    onMount: (props, instance, { renderState, latestValues }) => {
      try {
        renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
      } catch (e) {
        renderState.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: false }, isSVGTag(instance.tagName), props.transformTemplate);
      renderSVG(instance, renderState);
    }
  })
};

// node_modules/framer-motion/dist/es/render/html/config-motion.mjs
var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  })
};

// node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs
function createDomMotionConfig(Component2, { forwardMotionProps = false }, preloadedFeatures2, createVisualElement2) {
  const baseConfig = isSVGComponent(Component2) ? svgMotionConfig : htmlMotionConfig;
  return {
    ...baseConfig,
    preloadedFeatures: preloadedFeatures2,
    useRender: createUseRender(forwardMotionProps),
    createVisualElement: createVisualElement2,
    Component: Component2
  };
}

// node_modules/framer-motion/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = { passive: true }) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler);
}

// node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs
var isPrimaryPointer = (event) => {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    return event.isPrimary !== false;
  }
};

// node_modules/framer-motion/dist/es/events/event-info.mjs
function extractEventInfo(event, pointType = "page") {
  return {
    point: {
      x: event[pointType + "X"],
      y: event[pointType + "Y"]
    }
  };
}
var addPointerInfo = (handler) => {
  return (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};

// node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}

// node_modules/framer-motion/dist/es/utils/pipe.mjs
var combineFunctions = (a, b) => (v) => b(a(v));
var pipe = (...transformers) => transformers.reduce(combineFunctions);

// node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs
function createLock(name) {
  let lock = null;
  return () => {
    const openLock = () => {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag2) {
  let lock = false;
  if (drag2 === "y") {
    lock = globalVerticalLock();
  } else if (drag2 === "x") {
    lock = globalHorizontalLock();
  } else {
    const openHorizontal = globalHorizontalLock();
    const openVertical = globalVerticalLock();
    if (openHorizontal && openVertical) {
      lock = () => {
        openHorizontal();
        openVertical();
      };
    } else {
      if (openHorizontal)
        openHorizontal();
      if (openVertical)
        openVertical();
    }
  }
  return lock;
}
function isDragActive() {
  const openGestureLock = getGlobalLock(true);
  if (!openGestureLock)
    return true;
  openGestureLock();
  return false;
}

// node_modules/framer-motion/dist/es/motion/features/Feature.mjs
var Feature = class {
  constructor(node2) {
    this.isMounted = false;
    this.node = node2;
  }
  update() {
  }
};

// node_modules/framer-motion/dist/es/frameloop/create-render-step.mjs
function createRenderStep(runNextFrame2) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing)
          numToRun = toRun.length;
      }
      return callback;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (callback) => {
      const index2 = toRunNextFrame.indexOf(callback);
      if (index2 !== -1)
        toRunNextFrame.splice(index2, 1);
      toKeepAlive.delete(callback);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (frameData2) => {
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }
      isProcessing = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = toRun[i];
          callback(frameData2);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame2();
          }
        }
      }
      isProcessing = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData2);
      }
    }
  };
  return step;
}

// node_modules/framer-motion/dist/es/frameloop/data.mjs
var frameData = {
  delta: 0,
  timestamp: 0,
  isProcessing: false
};

// node_modules/framer-motion/dist/es/frameloop/index.mjs
var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var stepsOrder = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
var steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
var sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];
  acc[key] = (process2, keepAlive = false, immediate = false) => {
    if (!runNextFrame)
      startLoop();
    return step.schedule(process2, keepAlive, immediate);
  };
  return acc;
}, {});
var cancelSync2 = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
var flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frameData);
  return acc;
}, {});
var processStep = (stepId) => steps[stepId].process(frameData);
var processFrame = (timestamp) => {
  runNextFrame = false;
  frameData.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - frameData.timestamp, maxElapsed), 1);
  frameData.timestamp = timestamp;
  frameData.isProcessing = true;
  stepsOrder.forEach(processStep);
  frameData.isProcessing = false;
  if (runNextFrame) {
    useDefaultElapsed = false;
    requestAnimationFrame(processFrame);
  }
};
var startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!frameData.isProcessing)
    requestAnimationFrame(processFrame);
};

// node_modules/framer-motion/dist/es/gestures/hover.mjs
function addHoverEvent(node2, isActive) {
  const eventName = "pointer" + (isActive ? "enter" : "leave");
  const callbackName = "onHover" + (isActive ? "Start" : "End");
  const handleEvent = (event, info) => {
    if (event.type === "touch" || isDragActive())
      return;
    const props = node2.getProps();
    if (node2.animationState && props.whileHover) {
      node2.animationState.setActive("whileHover", isActive);
    }
    if (props[callbackName]) {
      sync.update(() => props[callbackName](event, info));
    }
  };
  return addPointerEvent(node2.current, eventName, handleEvent, {
    passive: !node2.getProps()[callbackName]
  });
}
var HoverGesture = class extends Feature {
  mount() {
    this.unmount = pipe(addHoverEvent(this.node, true), addHoverEvent(this.node, false));
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/gestures/focus.mjs
var FocusGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let isFocusVisible2 = false;
    try {
      isFocusVisible2 = this.node.current.matches(":focus-visible");
    } catch (e) {
      isFocusVisible2 = true;
    }
    if (!isFocusVisible2 || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", true);
    this.isActive = true;
  }
  onBlur() {
    if (!this.isActive || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", false);
    this.isActive = false;
  }
  mount() {
    this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs
var isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

// node_modules/framer-motion/dist/es/utils/noop.mjs
var noop2 = (any2) => any2;

// node_modules/framer-motion/dist/es/gestures/press.mjs
function fireSyntheticPointerEvent(name, handler) {
  if (!handler)
    return;
  const syntheticPointerEvent = new PointerEvent("pointer" + name);
  handler(syntheticPointerEvent, extractEventInfo(syntheticPointerEvent));
}
var PressGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.removeStartListeners = noop2;
    this.removeEndListeners = noop2;
    this.removeAccessibleListeners = noop2;
    this.startPointerPress = (startEvent, startInfo) => {
      this.removeEndListeners();
      if (this.isPressing)
        return;
      const props = this.node.getProps();
      const endPointerPress = (endEvent, endInfo) => {
        if (!this.checkPressEnd())
          return;
        const { onTap, onTapCancel } = this.node.getProps();
        sync.update(() => {
          !isNodeOrChild(this.node.current, endEvent.target) ? onTapCancel && onTapCancel(endEvent, endInfo) : onTap && onTap(endEvent, endInfo);
        });
      };
      const removePointerUpListener = addPointerEvent(window, "pointerup", endPointerPress, { passive: !(props.onTap || props["onPointerUp"]) });
      const removePointerCancelListener = addPointerEvent(window, "pointercancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo), { passive: !(props.onTapCancel || props["onPointerCancel"]) });
      this.removeEndListeners = pipe(removePointerUpListener, removePointerCancelListener);
      this.startPress(startEvent, startInfo);
    };
    this.startAccessiblePress = () => {
      const handleKeydown = (keydownEvent) => {
        if (keydownEvent.key !== "Enter" || this.isPressing)
          return;
        const handleKeyup = (keyupEvent) => {
          if (keyupEvent.key !== "Enter" || !this.checkPressEnd())
            return;
          fireSyntheticPointerEvent("up", (event, info) => {
            const { onTap } = this.node.getProps();
            if (onTap) {
              sync.update(() => onTap(event, info));
            }
          });
        };
        this.removeEndListeners();
        this.removeEndListeners = addDomEvent(this.node.current, "keyup", handleKeyup);
        fireSyntheticPointerEvent("down", (event, info) => {
          this.startPress(event, info);
        });
      };
      const removeKeydownListener = addDomEvent(this.node.current, "keydown", handleKeydown);
      const handleBlur = () => {
        if (!this.isPressing)
          return;
        fireSyntheticPointerEvent("cancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo));
      };
      const removeBlurListener = addDomEvent(this.node.current, "blur", handleBlur);
      this.removeAccessibleListeners = pipe(removeKeydownListener, removeBlurListener);
    };
  }
  startPress(event, info) {
    this.isPressing = true;
    const { onTapStart, whileTap } = this.node.getProps();
    if (whileTap && this.node.animationState) {
      this.node.animationState.setActive("whileTap", true);
    }
    if (onTapStart) {
      sync.update(() => onTapStart(event, info));
    }
  }
  checkPressEnd() {
    this.removeEndListeners();
    this.isPressing = false;
    const props = this.node.getProps();
    if (props.whileTap && this.node.animationState) {
      this.node.animationState.setActive("whileTap", false);
    }
    return !isDragActive();
  }
  cancelPress(event, info) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel } = this.node.getProps();
    if (onTapCancel) {
      sync.update(() => onTapCancel(event, info));
    }
  }
  mount() {
    const props = this.node.getProps();
    const removePointerListener = addPointerEvent(this.node.current, "pointerdown", this.startPointerPress, { passive: !(props.onTapStart || props["onPointerStart"]) });
    const removeFocusListener = addDomEvent(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = pipe(removePointerListener, removeFocusListener);
  }
  unmount() {
    this.removeStartListeners();
    this.removeEndListeners();
    this.removeAccessibleListeners();
  }
};

// node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
var observerCallbacks = /* @__PURE__ */ new WeakMap();
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = (entry) => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
var fireAllObserverCallbacks = (entries) => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

// node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var thresholdNames = {
  some: 0,
  all: 1
};
var InViewFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.unmount();
    const { viewport: viewport2 = {} } = this.node.getProps();
    const { root, margin: rootMargin, amount = "some", once } = viewport2;
    const options = {
      root: root ? root.current : void 0,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const onIntersectionUpdate = (entry) => {
      const { isIntersecting } = entry;
      if (this.isInView === isIntersecting)
        return;
      this.isInView = isIntersecting;
      if (once && !isIntersecting && this.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", isIntersecting);
      }
      const { onViewportEnter, onViewportLeave } = this.node.getProps();
      const callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry);
    };
    return observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined")
      return;
    const { props, prevProps } = this.node;
    const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
    if (hasOptionsChanged) {
      this.startObserver();
    }
  }
  unmount() {
  }
};
function hasViewportOptionChanged({ viewport: viewport2 = {} }, { viewport: prevViewport = {} } = {}) {
  return (name) => viewport2[name] !== prevViewport[name];
}

// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};

// node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  const prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (let i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}

// node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function getCurrent(visualElement) {
  const current = {};
  visualElement.values.forEach((value, key) => current[key] = value.get());
  return current;
}
function getVelocity(visualElement) {
  const velocity = {};
  visualElement.values.forEach((value, key) => velocity[key] = value.getVelocity());
  return velocity;
}
function resolveVariant(visualElement, definition, custom) {
  const props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}

// node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs
var optimizedAppearDataId = "framerAppearId";
var optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

// node_modules/framer-motion/dist/es/utils/errors.mjs
var warning = noop2;
var invariant = noop2;
if (true) {
  warning = (check, message) => {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = (check, message) => {
    if (!check) {
      throw new Error(message);
    }
  };
}

// node_modules/framer-motion/dist/es/utils/time-conversion.mjs
var secondsToMilliseconds = (seconds) => seconds * 1e3;
var millisecondsToSeconds = (milliseconds) => milliseconds / 1e3;

// node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
var instantAnimationState = {
  current: false
};

// node_modules/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs
var isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";

// node_modules/framer-motion/dist/es/animation/animators/waapi/easing.mjs
function isWaapiSupportedEasing(easing) {
  return Boolean(!easing || typeof easing === "string" && supportedWaapiEasing[easing] || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
var supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};
function mapEasingToNativeEasing(easing) {
  if (!easing)
    return void 0;
  return isBezierDefinition(easing) ? cubicBezierAsString(easing) : Array.isArray(easing) ? easing.map(mapEasingToNativeEasing) : supportedWaapiEasing[easing];
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs
function animateStyle(element, valueName, keyframes3, { delay: delay2 = 0, duration, repeat = 0, repeatType = "loop", ease: ease2, times } = {}) {
  const keyframeOptions = { [valueName]: keyframes3 };
  if (times)
    keyframeOptions.offset = times;
  const easing = mapEasingToNativeEasing(ease2);
  if (Array.isArray(easing))
    keyframeOptions.easing = easing;
  return element.animate(keyframeOptions, {
    delay: delay2,
    duration,
    easing: !Array.isArray(easing) ? easing : "linear",
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  });
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/supports.mjs
var featureTests = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
};
var results = {};
var supports = {};
for (const key in featureTests) {
  supports[key] = () => {
    if (results[key] === void 0)
      results[key] = featureTests[key]();
    return results[key];
  };
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
function getFinalKeyframe(keyframes3, { repeat, repeatType = "loop" }) {
  const index2 = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : keyframes3.length - 1;
  return keyframes3[index2];
}

// node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs
var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return noop2;
  const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
  return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

// node_modules/framer-motion/dist/es/easing/ease.mjs
var easeIn = cubicBezier(0.42, 0, 1, 1);
var easeOut = cubicBezier(0, 0, 0.58, 1);
var easeInOut = cubicBezier(0.42, 0, 0.58, 1);

// node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = (ease2) => {
  return Array.isArray(ease2) && typeof ease2[0] !== "number";
};

// node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

// node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = (easing) => (p) => 1 - easing(1 - p);

// node_modules/framer-motion/dist/es/easing/circ.mjs
var circIn = (p) => 1 - Math.sin(Math.acos(p));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circOut);

// node_modules/framer-motion/dist/es/easing/back.mjs
var backOut = cubicBezier(0.33, 1.53, 0.69, 0.99);
var backIn = reverseEasing(backOut);
var backInOut = mirrorEasing(backIn);

// node_modules/framer-motion/dist/es/easing/anticipate.mjs
var anticipate = (p) => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

// node_modules/framer-motion/dist/es/easing/utils/map.mjs
var easingLookup = {
  linear: noop2,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate
};
var easingDefinitionToFunction = (definition) => {
  if (Array.isArray(definition)) {
    invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`);
    return easingLookup[definition];
  }
  return definition;
};

// node_modules/framer-motion/dist/es/value/types/color/utils.mjs
var isColorString = (type, testProp) => (v) => {
  return Boolean(isString(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
  if (!isString(v))
    return v;
  const [a, b, c, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// node_modules/framer-motion/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = (v) => clamp(0, 255, v);
var rgbUnit = {
  ...number,
  transform: (v) => Math.round(clampRgbUnit(v))
};
var rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// node_modules/framer-motion/dist/es/value/types/color/hex.mjs
function parseHex(v) {
  let r = "";
  let g = "";
  let b = "";
  let a = "";
  if (v.length > 5) {
    r = v.substring(1, 3);
    g = v.substring(3, 5);
    b = v.substring(5, 7);
    a = v.substring(7, 9);
  } else {
    r = v.substring(1, 2);
    g = v.substring(2, 3);
    b = v.substring(3, 4);
    a = v.substring(4, 5);
    r += r;
    g += g;
    b += b;
    a += a;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
var hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// node_modules/framer-motion/dist/es/value/types/color/hsla.mjs
var hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// node_modules/framer-motion/dist/es/value/types/color/index.mjs
var color2 = {
  test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: (v) => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: (v) => {
    return isString(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};

// node_modules/framer-motion/dist/es/utils/mix.mjs
var mix = (from, to, progress3) => -progress3 * from + progress3 * to + from;

// node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// node_modules/framer-motion/dist/es/utils/mix-color.mjs
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  return Math.sqrt(Math.max(0, v * (to * to - fromExpo) + fromExpo));
};
var colorTypes = [hex, rgba, hsla];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color3) {
  const type = getColorType(color3);
  invariant(Boolean(type), `'${color3}' is not an animatable color. Use the equivalent color code instead.`);
  let model = type.parse(color3);
  if (type === hsla) {
    model = hslaToRgba(model);
  }
  return model;
}
var mixColor = (from, to) => {
  const fromRGBA = asRGBA(from);
  const toRGBA = asRGBA(to);
  const blended = { ...fromRGBA };
  return (v) => {
    blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
    blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
    blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
    blended.alpha = mix(fromRGBA.alpha, toRGBA.alpha, v);
    return rgba.transform(blended);
  };
};

// node_modules/framer-motion/dist/es/value/types/complex/index.mjs
var colorToken = "${c}";
var numberToken = "${n}";
function test(v) {
  var _a2, _b;
  return isNaN(v) && isString(v) && (((_a2 = v.match(floatRegex)) === null || _a2 === void 0 ? void 0 : _a2.length) || 0) + (((_b = v.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
function analyseComplexValue(v) {
  if (typeof v === "number")
    v = `${v}`;
  const values = [];
  let numColors = 0;
  let numNumbers = 0;
  const colors = v.match(colorRegex);
  if (colors) {
    numColors = colors.length;
    v = v.replace(colorRegex, colorToken);
    values.push(...colors.map(color2.parse));
  }
  const numbers = v.match(floatRegex);
  if (numbers) {
    numNumbers = numbers.length;
    v = v.replace(floatRegex, numberToken);
    values.push(...numbers.map(number.parse));
  }
  return { values, numColors, numNumbers, tokenised: v };
}
function parse(v) {
  return analyseComplexValue(v).values;
}
function createTransformer(source) {
  const { values, numColors, tokenised } = analyseComplexValue(source);
  const numValues = values.length;
  return (v) => {
    let output = tokenised;
    for (let i = 0; i < numValues; i++) {
      output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color2.transform(v[i]) : sanitize(v[i]));
    }
    return output;
  };
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
  const parsed = parse(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = { test, parse, createTransformer, getAnimatableNone };

// node_modules/framer-motion/dist/es/utils/mix-complex.mjs
function getMixer(origin, target) {
  if (typeof origin === "number") {
    return (v) => mix(origin, target, v);
  } else if (color2.test(origin)) {
    return mixColor(origin, target);
  } else {
    return mixComplex(origin, target);
  }
}
var mixArray = (from, to) => {
  const output = [...from];
  const numValues = output.length;
  const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
  return (v) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }
    return output;
  };
};
var mixObject = (origin, target) => {
  const output = { ...origin, ...target };
  const blendValue = {};
  for (const key in output) {
    if (origin[key] !== void 0 && target[key] !== void 0) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }
  return (v) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
};
var mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyseComplexValue(origin);
  const targetStats = analyseComplexValue(target);
  const canInterpolate = originStats.numColors === targetStats.numColors && originStats.numNumbers >= targetStats.numNumbers;
  if (canInterpolate) {
    return pipe(mixArray(originStats.values, targetStats.values), template);
  } else {
    warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return (p) => `${p > 0 ? target : origin}`;
  }
};

// node_modules/framer-motion/dist/es/utils/progress.mjs
var progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

// node_modules/framer-motion/dist/es/utils/interpolate.mjs
var mixNumber = (from, to) => (p) => mix(from, to, p);
function detectMixerFactory(v) {
  if (typeof v === "number") {
    return mixNumber;
  } else if (typeof v === "string") {
    if (color2.test(v)) {
      return mixColor;
    } else {
      return mixComplex;
    }
  } else if (Array.isArray(v)) {
    return mixArray;
  } else if (typeof v === "object") {
    return mixObject;
  }
  return mixNumber;
}
function createMixers(output, ease2, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease2) {
      const easingFunction = Array.isArray(ease2) ? ease2[i] || noop2 : ease2;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function interpolate(input, output, { clamp: isClamp = true, ease: ease2, mixer } = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length, "Both input and output ranges must be the same length");
  if (inputLength === 1)
    return () => output[0];
  if (input[0] > input[inputLength - 1]) {
    input = [...input].reverse();
    output = [...output].reverse();
  }
  const mixers = createMixers(output, ease2, mixer);
  const numMixers = mixers.length;
  const interpolator = (v) => {
    let i = 0;
    if (numMixers > 1) {
      for (; i < input.length - 2; i++) {
        if (v < input[i + 1])
          break;
      }
    }
    const progressInRange = progress(input[i], input[i + 1], v);
    return mixers[i](progressInRange);
  };
  return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

// node_modules/framer-motion/dist/es/utils/offsets/fill.mjs
function fillOffset(offset2, remaining) {
  const min2 = offset2[offset2.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = progress(0, remaining, i);
    offset2.push(mix(min2, 1, offsetProgress));
  }
}

// node_modules/framer-motion/dist/es/utils/offsets/default.mjs
function defaultOffset(arr) {
  const offset2 = [0];
  fillOffset(offset2, arr.length - 1);
  return offset2;
}

// node_modules/framer-motion/dist/es/utils/offsets/time.mjs
function convertOffsetToTimes(offset2, duration) {
  return offset2.map((o) => o * duration);
}

// node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes2({ duration = 300, keyframes: keyframeValues, times, ease: ease2 = "easeInOut" }) {
  const easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2);
  const state = {
    done: false,
    value: keyframeValues[0]
  };
  const absoluteTimes = convertOffsetToTimes(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues),
    duration
  );
  const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
    ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
  });
  return {
    calculatedDuration: duration,
    next: (t) => {
      state.value = mapTimeToKeyframe(t);
      state.done = t >= duration;
      return state;
    }
  };
}

// node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function calcGeneratorVelocity(resolveValue, t, current) {
  const prevT = Math.max(t - velocitySampleDuration, 0);
  return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}

// node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs
var safeMin = 1e-3;
var minDuration = 0.01;
var maxDuration = 10;
var minDamping = 0.05;
var maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
  let envelope;
  let derivative;
  warning(duration <= secondsToMilliseconds(maxDuration), "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
  duration = clamp(minDuration, maxDuration, millisecondsToSeconds(duration));
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a = exponentialDecay - velocity;
      const b = calcAngularFreq(undampedFreq2, dampingRatio);
      const c = Math.exp(-delta);
      return safeMin - a / b * c;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a * b;
    };
    derivative = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (velocity - undampedFreq2) * (duration * duration);
      return a * b;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = secondsToMilliseconds(duration);
  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

// node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
  return keys.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: false,
    ...options
  };
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = {
      ...springOptions,
      ...derived,
      velocity: 0,
      mass: 1
    };
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring({ keyframes: keyframes3, restDelta, restSpeed, ...options }) {
  const origin = keyframes3[0];
  const target = keyframes3[keyframes3.length - 1];
  const state = { done: false, value: origin };
  const { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } = getSpringOptions(options);
  const initialVelocity = velocity ? -millisecondsToSeconds(velocity) : 0;
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  const initialDelta = target - origin;
  const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
  const isGranularScale = Math.abs(initialDelta) < 5;
  restSpeed || (restSpeed = isGranularScale ? 0.01 : 2);
  restDelta || (restDelta = isGranularScale ? 5e-3 : 0.5);
  let resolveSpring;
  if (dampingRatio < 1) {
    const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
    resolveSpring = (t) => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
    };
  } else if (dampingRatio === 1) {
    resolveSpring = (t) => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
  } else {
    const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
    resolveSpring = (t) => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      const freqForT = Math.min(dampedAngularFreq * t, 300);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
    };
  }
  return {
    calculatedDuration: isResolvedFromDuration ? duration || null : null,
    next: (t) => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        let currentVelocity = initialVelocity;
        if (t !== 0) {
          if (dampingRatio < 1) {
            currentVelocity = calcGeneratorVelocity(resolveSpring, t, current);
          } else {
            currentVelocity = 0;
          }
        }
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? target : current;
      return state;
    }
  };
}

// node_modules/framer-motion/dist/es/animation/generators/inertia.mjs
function inertia({ keyframes: keyframes3, velocity = 0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min: min2, max: max2, restDelta = 0.5, restSpeed }) {
  const origin = keyframes3[0];
  const state = {
    done: false,
    value: origin
  };
  const isOutOfBounds = (v) => min2 !== void 0 && v < min2 || max2 !== void 0 && v > max2;
  const nearestBoundary = (v) => {
    if (min2 === void 0)
      return max2;
    if (max2 === void 0)
      return min2;
    return Math.abs(min2 - v) < Math.abs(max2 - v) ? min2 : max2;
  };
  let amplitude = power * velocity;
  const ideal = origin + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - origin;
  const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
  const calcLatest = (t) => target + calcDelta(t);
  const applyFriction = (t) => {
    const delta = calcDelta(t);
    const latest = calcLatest(t);
    state.done = Math.abs(delta) <= restDelta;
    state.value = state.done ? target : latest;
  };
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = (t) => {
    if (!isOutOfBounds(state.value))
      return;
    timeReachedBoundary = t;
    spring$1 = spring({
      keyframes: [state.value, nearestBoundary(state.value)],
      velocity: calcGeneratorVelocity(calcLatest, t, state.value),
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDelta,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return {
    calculatedDuration: null,
    next: (t) => {
      let hasUpdatedFrame = false;
      if (!spring$1 && timeReachedBoundary === void 0) {
        hasUpdatedFrame = true;
        applyFriction(t);
        checkCatchBoundary(t);
      }
      if (timeReachedBoundary !== void 0 && t > timeReachedBoundary) {
        return spring$1.next(t - timeReachedBoundary);
      } else {
        !hasUpdatedFrame && applyFriction(t);
        return state;
      }
    }
  };
}

// node_modules/framer-motion/dist/es/animation/animators/js/driver-frameloop.mjs
var frameloopDriver = (update) => {
  const passTimestamp = ({ timestamp }) => update(timestamp);
  return {
    start: () => sync.update(passTimestamp, true),
    stop: () => cancelSync2.update(passTimestamp),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => frameData.isProcessing ? frameData.timestamp : performance.now()
  };
};

// node_modules/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
  let duration = 0;
  const timeStep = 50;
  let state = generator.next(duration);
  while (!state.done && duration < maxGeneratorDuration) {
    duration += timeStep;
    state = generator.next(duration);
  }
  return duration >= maxGeneratorDuration ? Infinity : duration;
}

// node_modules/framer-motion/dist/es/animation/animators/js/index.mjs
var types = {
  decay: inertia,
  inertia,
  tween: keyframes2,
  keyframes: keyframes2,
  spring
};
function animateValue({ autoplay = true, delay: delay2 = 0, driver = frameloopDriver, keyframes: keyframes$1, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", onPlay, onStop, onComplete, onUpdate, ...options }) {
  let speed = 1;
  let hasStopped = false;
  let resolveFinishedPromise;
  let currentFinishedPromise;
  const updateFinishedPromise = () => {
    resolveFinishedPromise && resolveFinishedPromise();
    currentFinishedPromise = new Promise((resolve) => {
      resolveFinishedPromise = resolve;
    });
  };
  updateFinishedPromise();
  let animationDriver;
  const generatorFactory = types[type] || keyframes2;
  let mapNumbersToKeyframes;
  if (generatorFactory !== keyframes2 && typeof keyframes$1[0] !== "number") {
    mapNumbersToKeyframes = interpolate([0, 100], keyframes$1, {
      clamp: false
    });
    keyframes$1 = [0, 100];
  }
  const generator = generatorFactory({ ...options, keyframes: keyframes$1 });
  let mirroredGenerator;
  if (repeatType === "mirror") {
    mirroredGenerator = generatorFactory({
      ...options,
      keyframes: [...keyframes$1].reverse(),
      velocity: -(options.velocity || 0)
    });
  }
  let playState = "idle";
  let holdTime = null;
  let startTime = null;
  let cancelTime = null;
  if (generator.calculatedDuration === null && repeat) {
    generator.calculatedDuration = calcGeneratorDuration(generator);
  }
  const { calculatedDuration } = generator;
  let resolvedDuration = Infinity;
  let totalDuration = Infinity;
  if (calculatedDuration !== null) {
    resolvedDuration = calculatedDuration + repeatDelay;
    totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
  }
  let currentTime = 0;
  const tick = (timestamp) => {
    if (startTime === null)
      return;
    if (speed > 0)
      startTime = Math.min(startTime, timestamp);
    if (holdTime !== null) {
      currentTime = holdTime;
    } else {
      currentTime = (timestamp - startTime) * speed;
    }
    const timeWithoutDelay = currentTime - delay2;
    const isInDelayPhase = timeWithoutDelay < 0;
    currentTime = Math.max(timeWithoutDelay, 0);
    if (playState === "finished" && holdTime === null) {
      currentTime = totalDuration;
    }
    let elapsed = currentTime;
    let frameGenerator = generator;
    if (repeat) {
      const progress3 = currentTime / resolvedDuration;
      let currentIteration = Math.floor(progress3);
      let iterationProgress = progress3 % 1;
      if (!iterationProgress && progress3 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      currentIteration = Math.min(currentIteration, repeat + 1);
      const iterationIsOdd = Boolean(currentIteration % 2);
      if (iterationIsOdd) {
        if (repeatType === "reverse") {
          iterationProgress = 1 - iterationProgress;
          if (repeatDelay) {
            iterationProgress -= repeatDelay / resolvedDuration;
          }
        } else if (repeatType === "mirror") {
          frameGenerator = mirroredGenerator;
        }
      }
      let p = clamp(0, 1, iterationProgress);
      if (currentTime > totalDuration) {
        p = repeatType === "reverse" && iterationIsOdd ? 1 : 0;
      }
      elapsed = p * resolvedDuration;
    }
    const state = isInDelayPhase ? { done: false, value: keyframes$1[0] } : frameGenerator.next(elapsed);
    if (mapNumbersToKeyframes) {
      state.value = mapNumbersToKeyframes(state.value);
    }
    let { done } = state;
    if (!isInDelayPhase && calculatedDuration !== null) {
      done = currentTime >= totalDuration;
    }
    const isAnimationFinished = holdTime === null && (playState === "finished" || playState === "running" && done || speed < 0 && currentTime <= 0);
    if (onUpdate) {
      onUpdate(state.value);
    }
    if (isAnimationFinished) {
      finish();
    }
    return state;
  };
  const stopAnimationDriver = () => {
    animationDriver && animationDriver.stop();
    animationDriver = void 0;
  };
  const cancel = () => {
    playState = "idle";
    stopAnimationDriver();
    updateFinishedPromise();
    startTime = cancelTime = null;
  };
  const finish = () => {
    playState = "finished";
    onComplete && onComplete();
    stopAnimationDriver();
    updateFinishedPromise();
  };
  const play = () => {
    if (hasStopped)
      return;
    if (!animationDriver)
      animationDriver = driver(tick);
    const now = animationDriver.now();
    onPlay && onPlay();
    playState = "running";
    if (holdTime !== null) {
      startTime = now - holdTime;
    } else if (!startTime) {
      startTime = now;
    }
    cancelTime = startTime;
    holdTime = null;
    animationDriver.start();
  };
  if (autoplay) {
    play();
  }
  const controls = {
    then(resolve, reject) {
      return currentFinishedPromise.then(resolve, reject);
    },
    get time() {
      return millisecondsToSeconds(currentTime);
    },
    set time(newTime) {
      newTime = secondsToMilliseconds(newTime);
      currentTime = newTime;
      if (holdTime !== null || !animationDriver || speed === 0) {
        holdTime = newTime;
      } else {
        startTime = animationDriver.now() - newTime / speed;
      }
    },
    get duration() {
      const duration = generator.calculatedDuration === null ? calcGeneratorDuration(generator) : generator.calculatedDuration;
      return millisecondsToSeconds(duration);
    },
    get speed() {
      return speed;
    },
    set speed(newSpeed) {
      if (newSpeed === speed || !animationDriver)
        return;
      speed = newSpeed;
      controls.time = millisecondsToSeconds(currentTime);
    },
    get state() {
      return playState;
    },
    play,
    pause: () => {
      playState = "paused";
      holdTime = currentTime;
    },
    stop: () => {
      hasStopped = true;
      if (playState === "idle")
        return;
      playState = "idle";
      onStop && onStop();
      cancel();
    },
    cancel: () => {
      if (cancelTime !== null)
        tick(cancelTime);
      cancel();
    },
    complete: () => {
      playState = "finished";
    },
    sample: (elapsed) => {
      startTime = 0;
      return tick(elapsed);
    }
  };
  return controls;
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/create-accelerated-animation.mjs
var acceleratedValues = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]);
var sampleDelta = 10;
var maxDuration2 = 2e4;
var requiresPregeneratedKeyframes = (valueName, options) => options.type === "spring" || valueName === "backgroundColor" || !isWaapiSupportedEasing(options.ease);
function createAcceleratedAnimation(value, valueName, { onUpdate, onComplete, ...options }) {
  const canAccelerateAnimation = supports.waapi() && acceleratedValues.has(valueName) && !options.repeatDelay && options.repeatType !== "mirror" && options.damping !== 0 && options.type !== "inertia";
  if (!canAccelerateAnimation)
    return false;
  let hasStopped = false;
  let resolveFinishedPromise;
  let currentFinishedPromise;
  const updateFinishedPromise = () => {
    currentFinishedPromise = new Promise((resolve) => {
      resolveFinishedPromise = resolve;
    });
  };
  updateFinishedPromise();
  let { keyframes: keyframes3, duration = 300, ease: ease2, times } = options;
  if (requiresPregeneratedKeyframes(valueName, options)) {
    const sampleAnimation = animateValue({
      ...options,
      repeat: 0,
      delay: 0
    });
    let state = { done: false, value: keyframes3[0] };
    const pregeneratedKeyframes = [];
    let t = 0;
    while (!state.done && t < maxDuration2) {
      state = sampleAnimation.sample(t);
      pregeneratedKeyframes.push(state.value);
      t += sampleDelta;
    }
    times = void 0;
    keyframes3 = pregeneratedKeyframes;
    duration = t - sampleDelta;
    ease2 = "linear";
  }
  const animation = animateStyle(value.owner.current, valueName, keyframes3, {
    ...options,
    duration,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: ease2,
    times
  });
  const safeCancel = () => {
    sync.update(() => animation.cancel());
    resolveFinishedPromise();
    updateFinishedPromise();
  };
  animation.onfinish = () => {
    value.set(getFinalKeyframe(keyframes3, options));
    onComplete && onComplete();
    safeCancel();
  };
  return {
    then(resolve, reject) {
      return currentFinishedPromise.then(resolve, reject);
    },
    get time() {
      return millisecondsToSeconds(animation.currentTime || 0);
    },
    set time(newTime) {
      animation.currentTime = secondsToMilliseconds(newTime);
    },
    get speed() {
      return animation.playbackRate;
    },
    set speed(newSpeed) {
      animation.playbackRate = newSpeed;
    },
    get duration() {
      return millisecondsToSeconds(duration);
    },
    play: () => {
      if (hasStopped)
        return;
      animation.play();
    },
    pause: () => animation.pause(),
    stop: () => {
      hasStopped = true;
      if (animation.playState === "idle")
        return;
      const { currentTime } = animation;
      if (currentTime) {
        const sampleAnimation = animateValue({
          ...options,
          autoplay: false
        });
        value.setWithVelocity(sampleAnimation.sample(currentTime - sampleDelta).value, sampleAnimation.sample(currentTime).value, sampleDelta);
      }
      safeCancel();
    },
    complete: () => animation.finish(),
    cancel: safeCancel
  };
}

// node_modules/framer-motion/dist/es/animation/animators/instant.mjs
function createInstantAnimation({ keyframes: keyframes3, delay: delay2, onUpdate, onComplete }) {
  const setValue = () => {
    onUpdate && onUpdate(keyframes3[keyframes3.length - 1]);
    onComplete && onComplete();
    return {
      time: 0,
      speed: 1,
      duration: 0,
      play: noop2,
      pause: noop2,
      stop: noop2,
      then: (resolve) => {
        resolve();
        return Promise.resolve();
      },
      cancel: noop2,
      complete: noop2
    };
  };
  return delay2 ? animateValue({
    keyframes: [0, 1],
    duration: 0,
    delay: delay2,
    onComplete: setValue
  }) : setValue();
}

// node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
var criticallyDampedSpring = (target) => ({
  type: "spring",
  stiffness: 550,
  damping: target === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
var keyframesTransition = {
  type: "keyframes",
  duration: 0.8
};
var ease = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
var getDefaultTransition = (valueKey, { keyframes: keyframes3 }) => {
  if (keyframes3.length > 2) {
    return keyframesTransition;
  } else if (transformProps.has(valueKey)) {
    return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes3[1]) : underDampedSpring;
  }
  return ease;
};

// node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs
var isAnimatable = (key, value) => {
  if (key === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && // It's animatable if we have a string
  complex.test(value) && // And it contains numbers and/or colors
  !value.startsWith("url(")) {
    return true;
  }
  return false;
};

// node_modules/framer-motion/dist/es/value/types/complex/filter.mjs
var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  const [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /([a-z-]*)\(.*?\)/g;
var filter2 = {
  ...complex,
  getAnimatableNone: (v) => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  }
};

// node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
var defaultValueTypes = {
  ...numberValueTypes,
  // Color props
  color: color2,
  backgroundColor: color2,
  outlineColor: color2,
  fill: color2,
  stroke: color2,
  // Border props
  borderColor: color2,
  borderTopColor: color2,
  borderRightColor: color2,
  borderBottomColor: color2,
  borderLeftColor: color2,
  filter: filter2,
  WebkitFilter: filter2
};
var getDefaultValueType = (key) => defaultValueTypes[key];

// node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function getAnimatableNone2(key, value) {
  let defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter2)
    defaultValueType = complex;
  return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}

// node_modules/framer-motion/dist/es/animation/utils/transitions.mjs
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition2 }) {
  return !!Object.keys(transition2).length;
}
function isZero(value) {
  return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
}
function getZeroUnit(potentialUnitType) {
  return typeof potentialUnitType === "number" ? 0 : getAnimatableNone2("", potentialUnitType);
}
function getValueTransition(transition2, key) {
  return transition2[key] || transition2["default"] || transition2;
}

// node_modules/framer-motion/dist/es/animation/utils/wildcards.mjs
function fillWildcardKeyframes(origin, [...keyframes3]) {
  for (let i = 0; i < keyframes3.length; i++) {
    if (keyframes3[i] === null) {
      keyframes3[i] = i === 0 ? origin : keyframes3[i - 1];
    }
  }
  return keyframes3;
}

// node_modules/framer-motion/dist/es/animation/utils/keyframes.mjs
function getKeyframes(value, valueName, target, transition2) {
  const isTargetAnimatable = isAnimatable(valueName, target);
  let origin = transition2.from !== void 0 ? transition2.from : value.get();
  if (origin === "none" && isTargetAnimatable && typeof target === "string") {
    origin = getAnimatableNone2(valueName, target);
  } else if (isZero(origin) && typeof target === "string") {
    origin = getZeroUnit(target);
  } else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") {
    target = getZeroUnit(origin);
  }
  if (Array.isArray(target)) {
    return fillWildcardKeyframes(origin, target);
  } else {
    return [origin, target];
  }
}

// node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs
var animateMotionValue = (valueName, value, target, transition2 = {}) => {
  return (onComplete) => {
    const valueTransition = getValueTransition(transition2, valueName) || {};
    const delay2 = valueTransition.delay || transition2.delay || 0;
    let { elapsed = 0 } = transition2;
    elapsed = elapsed - secondsToMilliseconds(delay2);
    const keyframes3 = getKeyframes(value, valueName, target, valueTransition);
    const originKeyframe = keyframes3[0];
    const targetKeyframe = keyframes3[keyframes3.length - 1];
    const isOriginAnimatable = isAnimatable(valueName, originKeyframe);
    const isTargetAnimatable = isAnimatable(valueName, targetKeyframe);
    warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${valueName} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
    let options = {
      keyframes: keyframes3,
      velocity: value.getVelocity(),
      ease: "easeOut",
      ...valueTransition,
      delay: -elapsed,
      onUpdate: (v) => {
        value.set(v);
        valueTransition.onUpdate && valueTransition.onUpdate(v);
      },
      onComplete: () => {
        onComplete();
        valueTransition.onComplete && valueTransition.onComplete();
      }
    };
    if (!isTransitionDefined(valueTransition)) {
      options = {
        ...options,
        ...getDefaultTransition(valueName, options)
      };
    }
    if (options.duration) {
      options.duration = secondsToMilliseconds(options.duration);
    }
    if (options.repeatDelay) {
      options.repeatDelay = secondsToMilliseconds(options.repeatDelay);
    }
    if (!isOriginAnimatable || !isTargetAnimatable || instantAnimationState.current || valueTransition.type === false) {
      return createInstantAnimation(options);
    }
    if (value.owner && value.owner.current instanceof HTMLElement && !value.owner.getProps().onUpdate) {
      const acceleratedAnimation = createAcceleratedAnimation(value, valueName, options);
      if (acceleratedAnimation)
        return acceleratedAnimation;
    }
    return animateValue(options);
  };
};

// node_modules/framer-motion/dist/es/value/use-will-change/is.mjs
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}

// node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
var isNumericalString = (v) => /^\-?\d*\.?\d+$/.test(v);

// node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
var isZeroValueString = (v) => /^0[^.\s]+$/.test(v);

// node_modules/framer-motion/dist/es/utils/array.mjs
function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1)
    arr.push(item);
}
function removeItem(arr, item) {
  const index2 = arr.indexOf(item);
  if (index2 > -1)
    arr.splice(index2, 1);
}
function moveItem([...arr], fromIndex, toIndex) {
  const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
  if (startIndex >= 0 && startIndex < arr.length) {
    const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
    const [item] = arr.splice(fromIndex, 1);
    arr.splice(endIndex, 0, item);
  }
  return arr;
}

// node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
var SubscriptionManager = class {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => removeItem(this.subscriptions, handler);
  }
  notify(a, b, c) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a, b, c);
    } else {
      for (let i = 0; i < numSubscriptions; i++) {
        const handler = this.subscriptions[i];
        handler && handler(a, b, c);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};

// node_modules/framer-motion/dist/es/utils/warn-once.mjs
var warned = /* @__PURE__ */ new Set();
function warnOnce(condition, message, element) {
  if (condition || warned.has(message))
    return;
  console.warn(message);
  if (element)
    console.warn(element);
  warned.add(message);
}

// node_modules/framer-motion/dist/es/value/index.mjs
var isFloat = (value) => {
  return !isNaN(parseFloat(value));
};
var MotionValue = class {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(init, options = {}) {
    this.version = "10.11.2";
    this.timeDelta = 0;
    this.lastUpdated = 0;
    this.canTrackVelocity = false;
    this.events = {};
    this.updateAndNotify = (v, render = true) => {
      this.prev = this.current;
      this.current = v;
      const { delta, timestamp } = frameData;
      if (this.lastUpdated !== timestamp) {
        this.timeDelta = delta;
        this.lastUpdated = timestamp;
        sync.postRender(this.scheduleVelocityCheck);
      }
      if (this.prev !== this.current && this.events.change) {
        this.events.change.notify(this.current);
      }
      if (this.events.velocityChange) {
        this.events.velocityChange.notify(this.getVelocity());
      }
      if (render && this.events.renderRequest) {
        this.events.renderRequest.notify(this.current);
      }
    };
    this.scheduleVelocityCheck = () => sync.postRender(this.velocityCheck);
    this.velocityCheck = ({ timestamp }) => {
      if (timestamp !== this.lastUpdated) {
        this.prev = this.current;
        if (this.events.velocityChange) {
          this.events.velocityChange.notify(this.getVelocity());
        }
      }
    };
    this.hasAnimated = false;
    this.prev = this.current = init;
    this.canTrackVelocity = isFloat(this.current);
    this.owner = options.owner;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(subscription) {
    if (true) {
      warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
    }
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    const unsubscribe = this.events[eventName].add(callback);
    if (eventName === "change") {
      return () => {
        unsubscribe();
        sync.read(() => {
          if (!this.events.change.getSize()) {
            this.stop();
          }
        });
      };
    }
    return unsubscribe;
  }
  clearListeners() {
    for (const eventManagers in this.events) {
      this.events[eventManagers].clear();
    }
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(v, render = true) {
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  }
  setWithVelocity(prev, current, delta) {
    this.set(current);
    this.prev = prev;
    this.timeDelta = delta;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(v) {
    this.updateAndNotify(v);
    this.prev = v;
    this.stop();
    if (this.stopPassiveEffect)
      this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ? (
      // These casts could be avoided if parseFloat would be typed better
      velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
    ) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(startAnimation) {
    this.stop();
    return new Promise((resolve) => {
      this.hasAnimated = true;
      this.animation = startAnimation(resolve);
      if (this.events.animationStart) {
        this.events.animationStart.notify();
      }
    }).then(() => {
      if (this.events.animationComplete) {
        this.events.animationComplete.notify();
      }
      this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    if (this.animation) {
      this.animation.stop();
      if (this.events.animationCancel) {
        this.events.animationCancel.notify();
      }
    }
    this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners();
    this.stop();
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
};
function motionValue(init, options) {
  return new MotionValue(init, options);
}

// node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
var testValueType = (v) => (type) => type.test(v);

// node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
var auto = {
  test: (v) => v === "auto",
  parse: (v) => v
};

// node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

// node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
var valueTypes = [...dimensionValueTypes, color2, complex];
var findValueType = (v) => valueTypes.find(testValueType(v));

// node_modules/framer-motion/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement, definition) {
  const resolved = resolveVariant(visualElement, definition);
  let { transitionEnd = {}, transition: transition2 = {}, ...target } = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {};
  target = { ...target, ...transitionEnd };
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}
function checkTargetForNewValues(visualElement, target, origin) {
  var _a2, _b;
  const newValueKeys = Object.keys(target).filter((key) => !visualElement.hasValue(key));
  const numNewValues = newValueKeys.length;
  if (!numNewValues)
    return;
  for (let i = 0; i < numNewValues; i++) {
    const key = newValueKeys[i];
    const targetValue = target[key];
    let value = null;
    if (Array.isArray(targetValue)) {
      value = targetValue[0];
    }
    if (value === null) {
      value = (_b = (_a2 = origin[key]) !== null && _a2 !== void 0 ? _a2 : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
    }
    if (value === void 0 || value === null)
      continue;
    if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
      value = parseFloat(value);
    } else if (!findValueType(value) && complex.test(targetValue)) {
      value = getAnimatableNone2(key, targetValue);
    }
    visualElement.addValue(key, motionValue(value, { owner: visualElement }));
    if (origin[key] === void 0) {
      origin[key] = value;
    }
    if (value !== null)
      visualElement.setBaseTarget(key, value);
  }
}
function getOriginFromTransition(key, transition2) {
  if (!transition2)
    return;
  const valueTransition = transition2[key] || transition2["default"] || transition2;
  return valueTransition.from;
}
function getOrigin(target, transition2, visualElement) {
  const origin = {};
  for (const key in target) {
    const transitionOrigin = getOriginFromTransition(key, transition2);
    if (transitionOrigin !== void 0) {
      origin[key] = transitionOrigin;
    } else {
      const value = visualElement.getValue(key);
      if (value) {
        origin[key] = value.get();
      }
    }
  }
  return origin;
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
  const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}
function animateTarget(visualElement, definition, { delay: delay2 = 0, transitionOverride, type } = {}) {
  let { transition: transition2 = visualElement.getDefaultTransition(), transitionEnd, ...target } = visualElement.makeTargetAnimatable(definition);
  const willChange = visualElement.getValue("willChange");
  if (transitionOverride)
    transition2 = transitionOverride;
  const animations2 = [];
  const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
  for (const key in target) {
    const value = visualElement.getValue(key);
    const valueTarget = target[key];
    if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    const valueTransition = { delay: delay2, elapsed: 0, ...transition2 };
    if (window.HandoffAppearAnimations && !value.hasAnimated) {
      const appearId = visualElement.getProps()[optimizedAppearDataAttribute];
      if (appearId) {
        valueTransition.elapsed = window.HandoffAppearAnimations(appearId, key, value, sync);
      }
    }
    value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && transformProps.has(key) ? { type: false } : valueTransition));
    const animation = value.animation;
    if (isWillChangeMotionValue(willChange)) {
      willChange.add(key);
      animation.then(() => willChange.remove(key));
    }
    animations2.push(animation);
  }
  if (transitionEnd) {
    Promise.all(animations2).then(() => {
      transitionEnd && setTarget(visualElement, transitionEnd);
    });
  }
  return animations2;
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant, options = {}) {
  const resolved = resolveVariant(visualElement, variant, options.custom);
  let { transition: transition2 = visualElement.getDefaultTransition() || {} } = resolved || {};
  if (options.transitionOverride) {
    transition2 = options.transitionOverride;
  }
  const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
  const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
    const { delayChildren = 0, staggerChildren, staggerDirection } = transition2;
    return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : () => Promise.resolve();
  const { when } = transition2;
  if (when) {
    const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
    return first().then(() => last());
  } else {
    return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
  }
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
  const animations2 = [];
  const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
  const generateStaggerDuration = staggerDirection === 1 ? (i = 0) => i * staggerChildren : (i = 0) => maxStaggerDuration - i * staggerChildren;
  Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((child, i) => {
    child.notify("AnimationStart", variant);
    animations2.push(animateVariant(child, variant, {
      ...options,
      delay: delayChildren + generateStaggerDuration(i)
    }).then(() => child.notify("AnimationComplete", variant)));
  });
  return Promise.all(animations2);
}
function sortByTreeOrder(a, b) {
  return a.sortNodePosition(b);
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  let animation;
  if (Array.isArray(definition)) {
    const animations2 = definition.map((variant) => animateVariant(visualElement, variant, options));
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement, definition, options);
  } else {
    const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
    animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
  }
  return animation.then(() => visualElement.notify("AnimationComplete", definition));
}

// node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
  return (animations2) => Promise.all(animations2.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
  let animate2 = animateList(visualElement);
  const state = createState();
  let isInitialRender = true;
  const buildResolvedTypeValues = (acc, definition) => {
    const resolved = resolveVariant(visualElement, definition);
    if (resolved) {
      const { transition: transition2, transitionEnd, ...target } = resolved;
      acc = { ...acc, ...target, ...transitionEnd };
    }
    return acc;
  };
  function setAnimateFunction(makeAnimator) {
    animate2 = makeAnimator(visualElement);
  }
  function animateChanges(options, changedActiveType) {
    const props = visualElement.getProps();
    const context = visualElement.getVariantContext(true) || {};
    const animations2 = [];
    const removedKeys = /* @__PURE__ */ new Set();
    let encounteredKeys = {};
    let removedVariantIndex = Infinity;
    for (let i = 0; i < numAnimationTypes; i++) {
      const type = reversePriorityOrder[i];
      const typeState = state[type];
      const prop = props[type] !== void 0 ? props[type] : context[type];
      const propIsVariant = isVariantLabel(prop);
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false)
        removedVariantIndex = i;
      let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = { ...encounteredKeys };
      if (
        // If it isn't active and hasn't *just* been set as inactive
        !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
        !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
        isAnimationControls(prop) || typeof prop === "boolean"
      ) {
        continue;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange || // If we're making this variant active, we want to always make it active
      type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
      i > removedVariantIndex && propIsVariant;
      const definitionList = Array.isArray(prop) ? prop : [prop];
      let resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      if (activeDelta === false)
        resolvedValues = {};
      const { prevResolvedValues = {} } = typeState;
      const allKeys = {
        ...prevResolvedValues,
        ...resolvedValues
      };
      const markToAnimate = (key) => {
        shouldAnimateType = true;
        removedKeys.delete(key);
        typeState.needsAnimating[key] = true;
      };
      for (const key in allKeys) {
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        if (next !== prev) {
          if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
            if (!shallowCompare(next, prev) || variantDidChange) {
              markToAnimate(key);
            } else {
              typeState.protectedKeys[key] = true;
            }
          } else if (next !== void 0) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = { ...encounteredKeys, ...resolvedValues };
      }
      if (isInitialRender && visualElement.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      if (shouldAnimateType && !isInherited) {
        animations2.push(...definitionList.map((animation) => ({
          animation,
          options: { type, ...options }
        })));
      }
    }
    if (removedKeys.size) {
      const fallbackAnimation = {};
      removedKeys.forEach((key) => {
        const fallbackTarget = visualElement.getBaseTarget(key);
        if (fallbackTarget !== void 0) {
          fallbackAnimation[key] = fallbackTarget;
        }
      });
      animations2.push({ animation: fallbackAnimation });
    }
    let shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && props.initial === false && !visualElement.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate2(animations2) : Promise.resolve();
  }
  function setActive(type, isActive, options) {
    var _a2;
    if (state[type].isActive === isActive)
      return Promise.resolve();
    (_a2 = visualElement.variantChildren) === null || _a2 === void 0 ? void 0 : _a2.forEach((child) => {
      var _a3;
      return (_a3 = child.animationState) === null || _a3 === void 0 ? void 0 : _a3.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    const animations2 = animateChanges(options, type);
    for (const key in state) {
      state[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: () => state
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive = false) {
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  return {
    animate: createTypeState(true),
    whileInView: createTypeState(),
    whileHover: createTypeState(),
    whileTap: createTypeState(),
    whileDrag: createTypeState(),
    whileFocus: createTypeState(),
    exit: createTypeState()
  };
}

// node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
var AnimationFeature = class extends Feature {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(node2) {
    super(node2);
    node2.animationState || (node2.animationState = createAnimationState(node2));
  }
  updateAnimationControlsSubscription() {
    const { animate: animate2 } = this.node.getProps();
    this.unmount();
    if (isAnimationControls(animate2)) {
      this.unmount = animate2.subscribe(this.node);
    }
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: animate2 } = this.node.getProps();
    const { animate: prevAnimate } = this.node.prevProps || {};
    if (animate2 !== prevAnimate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
var id2 = 0;
var ExitAnimationFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.id = id2++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: isPresent2, onExitComplete, custom } = this.node.presenceContext;
    const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || isPresent2 === prevIsPresent) {
      return;
    }
    const exitAnimation = this.node.animationState.setActive("exit", !isPresent2, { custom: custom !== null && custom !== void 0 ? custom : this.node.getProps().custom });
    if (onExitComplete && !isPresent2) {
      exitAnimation.then(() => onExitComplete(this.id));
    }
  }
  mount() {
    const { register } = this.node.presenceContext || {};
    if (register) {
      this.unmount = register(this.id);
    }
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};

// node_modules/framer-motion/dist/es/utils/distance.mjs
var distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
  const xDelta = distance(a.x, b.x);
  const yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

// node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var PanSession2 = class {
  constructor(event, handlers2, { transformPagePoint } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { point: point2 } = info2;
      const { timestamp: timestamp2 } = frameData;
      this.history.push({ ...point2, timestamp: timestamp2 });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart && onStart(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove && onMove(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.lastMoveEvent = event2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      sync.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.end();
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd, onSessionEnd } = this.handlers;
      const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      if (this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (!isPrimaryPointer(event))
      return;
    this.handlers = handlers2;
    this.transformPagePoint = transformPagePoint;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const { point } = initialInfo;
    const { timestamp } = frameData;
    this.history = [{ ...point, timestamp }];
    const { onSessionStart } = handlers2;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(handlers2) {
    this.handlers = handlers2;
  }
  end() {
    this.removeListeners && this.removeListeners();
    cancelSync2.update(this.updatePoint);
  }
};
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo({ point }, history) {
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity2(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity2(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  const time = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target = 0, maxDistance = 0.01) {
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mix(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  if (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale))
    delta.scale = 1;
  delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint;
  if (isNear(delta.translate) || isNaN(delta.translate))
    delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
  calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout3, parent) {
  target.min = layout3.min - parent.min;
  target.max = target.min + calcLength(layout3);
}
function calcRelativePosition(target, layout3, parent) {
  calcRelativeAxisPosition(target.x, layout3.x, parent.x);
  calcRelativeAxisPosition(target.y, layout3.y, parent.y);
}

// node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function applyConstraints(point, { min: min2, max: max2 }, elastic) {
  if (min2 !== void 0 && point < min2) {
    point = elastic ? mix(min2, point, elastic.min) : Math.max(point, min2);
  } else if (max2 !== void 0 && point > max2) {
    point = elastic ? mix(max2, point, elastic.max) : Math.min(point, max2);
  }
  return point;
}
function calcRelativeAxisConstraints(axis, min2, max2) {
  return {
    min: min2 !== void 0 ? axis.min + min2 : void 0,
    max: max2 !== void 0 ? axis.max + max2 - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, { top: top2, left: left2, bottom: bottom2, right: right2 }) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left2, right2),
    y: calcRelativeAxisConstraints(layoutBox.y, top2, bottom2)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min2 = constraintsAxis.min - layoutAxis.min;
  let max2 = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min2, max2] = [max2, min2];
  }
  return { min: min2, max: max2 };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin2(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout3, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout3.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout3.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}

// node_modules/framer-motion/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
var createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
});
var createAxis = () => ({ min: 0, max: 0 });
var createBox = () => ({
  x: createAxis(),
  y: createAxis()
});

// node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
function convertBoundingBoxToBox({ top: top2, left: left2, right: right2, bottom: bottom2 }) {
  return {
    x: { min: left2, max: right2 },
    y: { min: top2, max: bottom2 }
  };
}
function convertBoxToBoundingBox({ x, y }) {
  return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
function transformBoxPoints(point, transformPoint2) {
  if (!transformPoint2)
    return point;
  const topLeft = transformPoint2({ x: point.left, y: point.top });
  const bottomRight = transformPoint2({ x: point.right, y: point.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale3) {
  return scale3 === void 0 || scale3 === 1;
}
function hasScale({ scale: scale3, scaleX, scaleY }) {
  return !isIdentityScale(scale3) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point, scale3, originPoint) {
  const distanceFromOrigin = point - originPoint;
  const scaled = scale3 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point, translate, scale3, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point = scalePoint(point, boxScale, originPoint);
  }
  return scalePoint(point, scale3, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale3 = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale3, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale3, originPoint, boxScale);
}
function applyBoxDelta(box, { x, y }) {
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
  const treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  let node2;
  let delta;
  for (let i = 0; i < treeLength; i++) {
    node2 = treePath[i];
    delta = node2.projectionDelta;
    const instance = node2.instance;
    if (instance && instance.style && instance.style.display === "contents") {
      continue;
    }
    if (isSharedTransition && node2.options.layoutScroll && node2.scroll && node2 !== node2.root) {
      transformBox(box, {
        x: -node2.scroll.offset.x,
        y: -node2.scroll.offset.y
      });
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node2.latestValues)) {
      transformBox(box, node2.latestValues);
    }
  }
  treeScale.x = snapToDefault(treeScale.x);
  treeScale.y = snapToDefault(treeScale.y);
}
function snapToDefault(scale3) {
  if (Number.isInteger(scale3))
    return scale3;
  return scale3 > 1.0000000000001 || scale3 < 0.999999999999 ? scale3 : 1;
}
function translateAxis(axis, distance3) {
  axis.min = axis.min + distance3;
  axis.max = axis.max + distance3;
}
function transformAxis(axis, transforms2, [key, scaleKey, originKey]) {
  const axisOrigin = transforms2[originKey] !== void 0 ? transforms2[originKey] : 0.5;
  const originPoint = mix(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, transforms2[key], transforms2[scaleKey], originPoint, transforms2.scale);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function transformBox(box, transform3) {
  transformAxis(box.x, transform3, xKeys);
  transformAxis(box.y, transform3, yKeys);
}

// node_modules/framer-motion/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  const viewportBox = measureViewportBox(element, transformPagePoint);
  const { scroll: scroll3 } = rootProjectionNode2;
  if (scroll3) {
    translateAxis(viewportBox.x, scroll3.offset.x);
    translateAxis(viewportBox.y, scroll3.offset.y);
  }
  return viewportBox;
}

// node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = class {
  constructor(visualElement) {
    this.openGlobalLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.visualElement = visualElement;
  }
  start(originEvent, { snapToCursor = false } = {}) {
    const { presenceContext } = this.visualElement;
    if (presenceContext && presenceContext.isPresent === false)
      return;
    const onSessionStart = (event) => {
      this.stopAnimation();
      if (snapToCursor) {
        this.snapToCursor(extractEventInfo(event, "page").point);
      }
    };
    const onStart = (event, info) => {
      const { drag: drag2, dragPropagation, onDragStart } = this.getProps();
      if (drag2 && !dragPropagation) {
        if (this.openGlobalLock)
          this.openGlobalLock();
        this.openGlobalLock = getGlobalLock(drag2);
        if (!this.openGlobalLock)
          return;
      }
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = void 0;
      }
      eachAxis((axis) => {
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          const { projection } = this.visualElement;
          if (projection && projection.layout) {
            const measuredAxis = projection.layout.layoutBox[axis];
            if (measuredAxis) {
              const length = calcLength(measuredAxis);
              current = length * (parseFloat(current) / 100);
            }
          }
        }
        this.originPoint[axis] = current;
      });
      if (onDragStart) {
        sync.update(() => onDragStart(event, info));
      }
      const { animationState } = this.visualElement;
      animationState && animationState.setActive("whileDrag", true);
    };
    const onMove = (event, info) => {
      const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
      if (!dragPropagation && !this.openGlobalLock)
        return;
      const { offset: offset2 } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset2);
        if (this.currentDirection !== null) {
          onDirectionLock && onDirectionLock(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", info.point, offset2);
      this.updateAxis("y", info.point, offset2);
      this.visualElement.render();
      onDrag && onDrag(event, info);
    };
    const onSessionEnd = (event, info) => this.stop(event, info);
    this.panSession = new PanSession2(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(event, info) {
    const isDragging = this.isDragging;
    this.cancel();
    if (!isDragging)
      return;
    const { velocity } = info;
    this.startAnimation(velocity);
    const { onDragEnd } = this.getProps();
    if (onDragEnd) {
      sync.update(() => onDragEnd(event, info));
    }
  }
  cancel() {
    this.isDragging = false;
    const { projection, animationState } = this.visualElement;
    if (projection) {
      projection.isAnimationBlocked = false;
    }
    this.panSession && this.panSession.end();
    this.panSession = void 0;
    const { dragPropagation } = this.getProps();
    if (!dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }
    animationState && animationState.setActive("whileDrag", false);
  }
  updateAxis(axis, _point, offset2) {
    const { drag: drag2 } = this.getProps();
    if (!offset2 || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset2[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  }
  resolveConstraints() {
    const { dragConstraints, dragElastic } = this.getProps();
    const { layout: layout3 } = this.visualElement.projection || {};
    const prevConstraints = this.constraints;
    if (dragConstraints && isRefObject2(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout3) {
        this.constraints = calcRelativeConstraints(layout3.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && layout3 && this.constraints && !this.hasMutatedConstraints) {
      eachAxis((axis) => {
        if (this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout3.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
    if (!constraints || !isRefObject2(constraints))
      return false;
    const constraintsElement = constraints.current;
    invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection } = this.visualElement;
    if (!projection || !projection.layout)
      return false;
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, this.currentDirection)) {
        return;
      }
      let transition2 = constraints && constraints[axis] || {};
      if (dragSnapToOrigin)
        transition2 = { min: 0, max: 0 };
      const bounceStiffness = dragElastic ? 200 : 1e6;
      const bounceDamping = dragElastic ? 40 : 1e7;
      const inertia2 = {
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...dragTransition,
        ...transition2
      };
      return this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition2) {
    const axisValue = this.getAxisMotionValue(axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition2));
  }
  stopAnimation() {
    eachAxis((axis) => this.getAxisMotionValue(axis).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(axis) {
    const dragKey = "_drag" + axis.toUpperCase();
    const props = this.visualElement.getProps();
    const externalMotionValue = props[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : void 0) || 0);
  }
  snapToCursor(point) {
    eachAxis((axis) => {
      const { drag: drag2 } = this.getProps();
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      const { projection } = this.visualElement;
      const axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        const { min: min2, max: max2 } = projection.layout.layoutBox[axis];
        axisValue.set(point[axis] - mix(min2, max2, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: drag2, dragConstraints } = this.getProps();
    const { projection } = this.visualElement;
    if (!isRefObject2(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    const boxProgress = { x: 0, y: 0 };
    eachAxis((axis) => {
      const axisValue = this.getAxisMotionValue(axis);
      if (axisValue) {
        const latest = axisValue.get();
        boxProgress[axis] = calcOrigin2({ min: latest, max: latest }, this.constraints[axis]);
      }
    });
    const { transformTemplate } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root && projection.root.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, null))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      const { min: min2, max: max2 } = this.constraints[axis];
      axisValue.set(mix(min2, max2, boxProgress[axis]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
      const { drag: drag2, dragListener = true } = this.getProps();
      drag2 && dragListener && this.start(event);
    });
    const measureDragConstraints = () => {
      const { dragConstraints } = this.getProps();
      if (isRefObject2(dragConstraints)) {
        this.constraints = this.resolveRefConstraints();
      }
    };
    const { projection } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
    }
    measureDragConstraints();
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({ delta, hasLayoutChanged }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis((axis) => {
          const motionValue2 = this.getAxisMotionValue(axis);
          if (!motionValue2)
            return;
          this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    });
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener && stopLayoutUpdateListener();
    };
  }
  getProps() {
    const props = this.visualElement.getProps();
    const { drag: drag2 = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
    return {
      ...props,
      drag: drag2,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    };
  }
};
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset2, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset2.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset2.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

// node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var DragGesture = class extends Feature {
  constructor(node2) {
    super(node2);
    this.removeGroupControls = noop2;
    this.removeListeners = noop2;
    this.controls = new VisualElementDragControls(node2);
  }
  mount() {
    const { dragControls } = this.node.getProps();
    if (dragControls) {
      this.removeGroupControls = dragControls.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || noop2;
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
  }
};

// node_modules/framer-motion/dist/es/gestures/pan/index.mjs
var asyncHandler = (handler) => (event, info) => {
  if (handler) {
    sync.update(() => handler(event, info));
  }
};
var PanGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = noop2;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession2(pointerDownEvent, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: onPan,
      onEnd: (event, info) => {
        delete this.session;
        if (onPanEnd) {
          sync.update(() => onPanEnd(event, info));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session && this.session.end();
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var import_react25 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
var import_react24 = __toESM(require_react(), 1);
function usePresence() {
  const context = (0, import_react24.useContext)(PresenceContext);
  if (context === null)
    return [true, null];
  const { isPresent: isPresent2, onExitComplete, register } = context;
  const id4 = (0, import_react24.useId)();
  (0, import_react24.useEffect)(() => register(id4), []);
  const safeToRemove = () => onExitComplete && onExitComplete(id4);
  return !isPresent2 && onExitComplete ? [false, safeToRemove] : [true];
}
function useIsPresent() {
  return isPresent((0, import_react24.useContext)(PresenceContext));
}
function isPresent(context) {
  return context === null ? true : context.isPresent;
}

// node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min)
    return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: (latest, node2) => {
    if (!node2.target)
      return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    const x = pixelsToPercent(latest, node2.target.x);
    const y = pixelsToPercent(latest, node2.target.y);
    return `${x}% ${y}%`;
  }
};

// node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  const match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token, fallback] = match;
  return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
  invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
  const [token, fallback] = parseCSSVariable(current);
  if (!token)
    return;
  const resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    return resolved.trim();
  } else if (isCSSVariableToken(fallback)) {
    return getVariableValue(fallback, element, depth + 1);
  } else {
    return fallback;
  }
}
function resolveCSSVariables(visualElement, { ...target }, transitionEnd) {
  const element = visualElement.current;
  if (!(element instanceof Element))
    return { target, transitionEnd };
  if (transitionEnd) {
    transitionEnd = { ...transitionEnd };
  }
  visualElement.values.forEach((value) => {
    const current = value.get();
    if (!isCSSVariableToken(current))
      return;
    const resolved = getVariableValue(current, element);
    if (resolved)
      value.set(resolved);
  });
  for (const key in target) {
    const current = target[key];
    if (!isCSSVariableToken(current))
      continue;
    const resolved = getVariableValue(current, element);
    if (!resolved)
      continue;
    target[key] = resolved;
    if (!transitionEnd)
      transitionEnd = {};
    if (transitionEnd[key] === void 0) {
      transitionEnd[key] = current;
    }
  }
  return { target, transitionEnd };
}

// node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
var varToken = "_$css";
var correctBoxShadow = {
  correct: (latest, { treeScale, projectionDelta }) => {
    const original = latest;
    const containsCSSVariables = latest.includes("var(");
    const cssVariables = [];
    if (containsCSSVariables) {
      latest = latest.replace(cssVariableRegex, (match) => {
        cssVariables.push(match);
        return varToken;
      });
    }
    const shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    const template = complex.createTransformer(latest);
    const offset2 = typeof shadow[0] !== "number" ? 1 : 0;
    const xScale = projectionDelta.x.scale * treeScale.x;
    const yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset2] /= xScale;
    shadow[1 + offset2] /= yScale;
    const averageScale = mix(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset2] === "number")
      shadow[2 + offset2] /= averageScale;
    if (typeof shadow[3 + offset2] === "number")
      shadow[3 + offset2] /= averageScale;
    let output = template(shadow);
    if (containsCSSVariables) {
      let i = 0;
      output = output.replace(varToken, () => {
        const cssVariable = cssVariables[i];
        i++;
        return cssVariable;
      });
    }
    return output;
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var MeasureLayoutWithContext = class extends import_react25.default.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
    const { projection } = visualElement;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup.group)
        layoutGroup.group.add(projection);
      if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
        switchLayoutGroup.register(projection);
      }
      projection.root.didUpdate();
      projection.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      projection.setOptions({
        ...projection.options,
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const { layoutDependency, visualElement, drag: drag2, isPresent: isPresent2 } = this.props;
    const projection = visualElement.projection;
    if (!projection)
      return null;
    projection.isPresent = isPresent2;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent2) {
      if (isPresent2) {
        projection.promote();
      } else if (!projection.relegate()) {
        sync.postRender(() => {
          const stack = projection.getStack();
          if (!stack || !stack.members.length) {
            this.safeToRemove();
          }
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const { projection } = this.props.visualElement;
    if (projection) {
      projection.root.didUpdate();
      if (!projection.currentAnimation && projection.isLead()) {
        this.safeToRemove();
      }
    }
  }
  componentWillUnmount() {
    const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
    const { projection } = visualElement;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup && layoutGroup.group)
        layoutGroup.group.remove(projection);
      if (promoteContext && promoteContext.deregister)
        promoteContext.deregister(projection);
    }
  }
  safeToRemove() {
    const { safeToRemove } = this.props;
    safeToRemove && safeToRemove();
  }
  render() {
    return null;
  }
};
function MeasureLayout(props) {
  const [isPresent2, safeToRemove] = usePresence();
  const layoutGroup = (0, import_react25.useContext)(LayoutGroupContext);
  return import_react25.default.createElement(MeasureLayoutWithContext, { ...props, layoutGroup, switchLayoutGroup: (0, import_react25.useContext)(SwitchLayoutGroupContext), isPresent: isPresent2, safeToRemove });
}
var defaultScaleCorrectors = {
  borderRadius: {
    ...correctBorderRadius,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
var asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
var isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress3, shouldCrossfadeOpacity, isOnlyMember) {
  if (shouldCrossfadeOpacity) {
    target.opacity = mix(
      0,
      // TODO Reinstate this if only child
      lead.opacity !== void 0 ? lead.opacity : 1,
      easeCrossfadeIn(progress3)
    );
    target.opacityExit = mix(follow.opacity !== void 0 ? follow.opacity : 1, 0, easeCrossfadeOut(progress3));
  } else if (isOnlyMember) {
    target.opacity = mix(follow.opacity !== void 0 ? follow.opacity : 1, lead.opacity !== void 0 ? lead.opacity : 1, progress3);
  }
  for (let i = 0; i < numBorders; i++) {
    const borderLabel = `border${borders[i]}Radius`;
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress3), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress3);
  }
}
function getRadius(values, radiusName) {
  return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = compress(0, 0.5, circOut);
var easeCrossfadeOut = compress(0.5, 0.95, noop2);
function compress(min2, max2, easing) {
  return (p) => {
    if (p < min2)
      return 0;
    if (p > max2)
      return 1;
    return easing(progress(min2, max2, p));
  };
}

// node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function removePointDelta(point, translate, scale3, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale3, originPoint);
  if (boxScale !== void 0) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }
  return point;
}
function removeAxisDelta(axis, translate = 0, scale3 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mix(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  let originPoint = mix(originAxis.min, originAxis.max, origin);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale3, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale3, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms2, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms2[key], transforms2[scaleKey], transforms2[originKey], transforms2.scale, origin, sourceAxis);
}
var xKeys2 = ["x", "scaleX", "originX"];
var yKeys2 = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms2, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms2, xKeys2, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
  removeAxisTransforms(box.y, transforms2, yKeys2, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}

// node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a, b) {
  return a.x.min === b.x.min && a.x.max === b.x.max && a.y.min === b.y.min && a.y.max === b.y.max;
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}

// node_modules/framer-motion/dist/es/projection/shared/stack.mjs
var NodeStack = class {
  constructor() {
    this.members = [];
  }
  add(node2) {
    addUniqueItem(this.members, node2);
    node2.scheduleRender();
  }
  remove(node2) {
    removeItem(this.members, node2);
    if (node2 === this.prevLead) {
      this.prevLead = void 0;
    }
    if (node2 === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  }
  relegate(node2) {
    const indexOfNode = this.members.findIndex((member) => node2 === member);
    if (indexOfNode === 0)
      return false;
    let prevLead;
    for (let i = indexOfNode; i >= 0; i--) {
      const member = this.members[i];
      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }
    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  }
  promote(node2, preserveFollowOpacity) {
    const prevLead = this.lead;
    if (node2 === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node2;
    node2.show();
    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node2.scheduleRender();
      node2.resumeFrom = prevLead;
      if (preserveFollowOpacity) {
        node2.resumeFrom.preserveOpacity = true;
      }
      if (prevLead.snapshot) {
        node2.snapshot = prevLead.snapshot;
        node2.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
      }
      if (node2.root && node2.root.isUpdating) {
        node2.isLayoutDirty = true;
      }
      const { crossfade } = node2.options;
      if (crossfade === false) {
        prevLead.hide();
      }
    }
  }
  exitAnimationComplete() {
    this.members.forEach((node2) => {
      const { options, resumingFrom } = node2;
      options.onExitComplete && options.onExitComplete();
      if (resumingFrom) {
        resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
      }
    });
  }
  scheduleRender() {
    this.members.forEach((node2) => {
      node2.instance && node2.scheduleRender(false);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = void 0;
    }
  }
};

// node_modules/framer-motion/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
  let transform3 = "";
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  if (xTranslate || yTranslate) {
    transform3 = `translate3d(${xTranslate}px, ${yTranslate}px, 0) `;
  }
  if (treeScale.x !== 1 || treeScale.y !== 1) {
    transform3 += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
  }
  if (latestTransform) {
    const { rotate: rotate2, rotateX, rotateY } = latestTransform;
    if (rotate2)
      transform3 += `rotate(${rotate2}deg) `;
    if (rotateX)
      transform3 += `rotateX(${rotateX}deg) `;
    if (rotateY)
      transform3 += `rotateY(${rotateY}deg) `;
  }
  const elementScaleX = delta.x.scale * treeScale.x;
  const elementScaleY = delta.y.scale * treeScale.y;
  if (elementScaleX !== 1 || elementScaleY !== 1) {
    transform3 += `scale(${elementScaleX}, ${elementScaleY})`;
  }
  return transform3 || "none";
}

// node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var compareByDepth = (a, b) => a.depth - b.depth;

// node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
var FlatTree = class {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
};

// node_modules/framer-motion/dist/es/utils/delay.mjs
function delay(callback, timeout) {
  const start2 = performance.now();
  const checkElapsed = ({ timestamp }) => {
    const elapsed = timestamp - start2;
    if (elapsed >= timeout) {
      cancelSync2.read(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  sync.read(checkElapsed, true);
  return () => cancelSync2.read(checkElapsed);
}

// node_modules/framer-motion/dist/es/debug/record.mjs
function record(data) {
  if (window.MotionDebug) {
    window.MotionDebug.record(data);
  }
}

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs
function isSVGElement(element) {
  return element instanceof SVGElement && element.tagName !== "svg";
}

// node_modules/framer-motion/dist/es/animation/interfaces/single-value.mjs
function animateSingleValue(value, keyframes3, options) {
  const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
  motionValue$1.start(animateMotionValue("", motionValue$1, keyframes3, options));
  return motionValue$1.animation;
}

// node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
var transformAxes = ["", "X", "Y", "Z"];
var animationTarget = 1e3;
var id3 = 0;
var projectionFrameData = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
  return class ProjectionNode {
    constructor(elementId, latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
      this.id = id3++;
      this.animationId = 0;
      this.children = /* @__PURE__ */ new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isProjectionDirty = false;
      this.isSharedProjectionDirty = false;
      this.isTransformDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = /* @__PURE__ */ new Map();
      this.potentialNodes = /* @__PURE__ */ new Map();
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        projectionFrameData.totalNodes = projectionFrameData.resolvedTargetDeltas = projectionFrameData.recalculatedProjection = 0;
        this.nodes.forEach(propagateDirtyNodes);
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
        this.nodes.forEach(cleanDirtyNodes);
        record(projectionFrameData);
      };
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */ new Map();
      this.elementId = elementId;
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      elementId && this.root.registerPotentialNode(elementId, this);
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree();
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      const subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager && subscriptionManager.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    registerPotentialNode(elementId, node2) {
      this.potentialNodes.set(elementId, node2);
    }
    /**
     * Lifecycles
     */
    mount(instance, isLayoutDirty = false) {
      if (this.instance)
        return;
      this.isSVG = isSVGElement(instance);
      this.instance = instance;
      const { layoutId, layout: layout3, visualElement } = this.options;
      if (visualElement && !visualElement.current) {
        visualElement.mount(instance);
      }
      this.root.nodes.add(this);
      this.parent && this.parent.children.add(this);
      this.elementId && this.root.potentialNodes.delete(this.elementId);
      if (isLayoutDirty && (layout3 || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        attachResizeListener(instance, () => {
          this.root.updateBlockedByResize = true;
          cancelDelay && cancelDelay();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement && (layoutId || layout3)) {
        this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeTargetChanged, layout: newLayout }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0;
            this.relativeTarget = void 0;
            return;
          }
          const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
          const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
          const targetChanged = !this.targetLayout || !boxEquals(this.targetLayout, newLayout) || hasRelativeTargetChanged;
          const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = void 0;
            }
            this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            const animationOptions = {
              ...getValueTransition(layoutTransition, "layout"),
              onPlay: onLayoutAnimationStart,
              onComplete: onLayoutAnimationComplete
            };
            if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            this.startAnimation(animationOptions);
          } else {
            if (!hasLayoutChanged && this.animationProgress === 0) {
              finishAnimation(this);
            }
            if (this.isLead() && this.options.onExitComplete) {
              this.options.onExitComplete();
            }
          }
          this.targetLayout = newLayout;
        });
      }
    }
    unmount() {
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      const stack = this.getStack();
      stack && stack.remove(this);
      this.parent && this.parent.children.delete(this);
      this.instance = void 0;
      cancelSync2.preRender(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    // Note: currently only running on root node
    startUpdate() {
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      this.nodes && this.nodes.forEach(resetRotation);
      this.animationId++;
    }
    getTransformTemplate() {
      const { visualElement } = this.options;
      return visualElement && visualElement.getProps().transformTemplate;
    }
    willUpdate(shouldNotifyListeners = true) {
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      this.isLayoutDirty = true;
      for (let i = 0; i < this.path.length; i++) {
        const node2 = this.path[i];
        node2.shouldResetTransform = true;
        node2.updateScroll("snapshot");
        if (node2.options.layoutRoot) {
          node2.willUpdate(false);
        }
      }
      const { layoutId, layout: layout3 } = this.options;
      if (layoutId === void 0 && !layout3)
        return;
      const transformTemplate = this.getTransformTemplate();
      this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    // Note: Currently only running on root node
    didUpdate() {
      const updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (!this.isUpdating)
        return;
      this.isUpdating = false;
      if (this.potentialNodes.size) {
        this.potentialNodes.forEach(mountNodeEarly);
        this.potentialNodes.clear();
      }
      this.nodes.forEach(resetTransformStyle);
      this.nodes.forEach(updateLayout);
      this.nodes.forEach(notifyLayoutUpdate);
      this.clearAllSnapshots();
      flushSync.update();
      flushSync.preRender();
      flushSync.render();
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    }
    scheduleUpdateProjection() {
      sync.preRender(this.updateProjection, false, true);
    }
    scheduleCheckAfterUnmount() {
      sync.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      if (this.snapshot || !this.instance)
        return;
      this.snapshot = this.measure();
    }
    updateLayout() {
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let i = 0; i < this.path.length; i++) {
          const node2 = this.path[i];
          node2.updateScroll();
        }
      }
      const prevLayout = this.layout;
      this.layout = this.measure(false);
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement } = this.options;
      visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
    }
    updateScroll(phase = "measure") {
      let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
        needsMeasurement = false;
      }
      if (needsMeasurement) {
        this.scroll = {
          animationId: this.root.animationId,
          phase,
          isRoot: checkIsScrollRoot(this.instance),
          offset: measureScroll(this.instance)
        };
      }
    }
    resetTransform() {
      if (!resetTransform)
        return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplate = this.getTransformTemplate();
      const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(removeTransform = true) {
      const pageBox = this.measurePageBox();
      let layoutBox = this.removeElementScroll(pageBox);
      if (removeTransform) {
        layoutBox = this.removeTransform(layoutBox);
      }
      roundBox(layoutBox);
      return {
        animationId: this.root.animationId,
        measuredBox: pageBox,
        layoutBox,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement } = this.options;
      if (!visualElement)
        return createBox();
      const box = visualElement.measureViewportBox();
      const { scroll: scroll3 } = this.root;
      if (scroll3) {
        translateAxis(box.x, scroll3.offset.x);
        translateAxis(box.y, scroll3.offset.y);
      }
      return box;
    }
    removeElementScroll(box) {
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      for (let i = 0; i < this.path.length; i++) {
        const node2 = this.path[i];
        const { scroll: scroll3, options } = node2;
        if (node2 !== this.root && scroll3 && options.layoutScroll) {
          if (scroll3.isRoot) {
            copyBoxInto(boxWithoutScroll, box);
            const { scroll: rootScroll } = this.root;
            if (rootScroll) {
              translateAxis(boxWithoutScroll.x, -rootScroll.offset.x);
              translateAxis(boxWithoutScroll.y, -rootScroll.offset.y);
            }
          }
          translateAxis(boxWithoutScroll.x, scroll3.offset.x);
          translateAxis(boxWithoutScroll.y, scroll3.offset.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false) {
      const withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (let i = 0; i < this.path.length; i++) {
        const node2 = this.path[i];
        if (!transformOnly && node2.options.layoutScroll && node2.scroll && node2 !== node2.root) {
          transformBox(withTransforms, {
            x: -node2.scroll.offset.x,
            y: -node2.scroll.offset.y
          });
        }
        if (!hasTransform(node2.latestValues))
          continue;
        transformBox(withTransforms, node2.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    }
    removeTransform(box) {
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0; i < this.path.length; i++) {
        const node2 = this.path[i];
        if (!node2.instance)
          continue;
        if (!hasTransform(node2.latestValues))
          continue;
        hasScale(node2.latestValues) && node2.updateSnapshot();
        const sourceBox = createBox();
        const nodeBox = node2.measurePageBox();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node2.latestValues, node2.snapshot ? node2.snapshot.layoutBox : void 0, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(options) {
      this.options = {
        ...this.options,
        ...options,
        crossfade: options.crossfade !== void 0 ? options.crossfade : true
      };
    }
    clearMeasurements() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    }
    resolveTargetDelta(forceRecalculation = false) {
      var _a2;
      const lead = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
      this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
      this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isProjectionDirty) || this.attemptToResolveRelativeTarget);
      if (canSkip)
        return;
      const { layout: layout3, layoutId } = this.options;
      if (!this.layout || !(layout3 || layoutId))
        return;
      this.resolvedRelativeTargetAt = frameData.timestamp;
      if (!this.targetDelta && !this.relativeTarget) {
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && relativeParent.layout) {
          this.relativeParent = relativeParent;
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
        if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
          this.relativeParent.resolveTargetDelta(true);
        }
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.layoutBox);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.layoutBox);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target) {
          this.relativeParent = relativeParent;
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      projectionFrameData.resolvedTargetDeltas++;
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
        return void 0;
      }
      if (this.parent.isProjecting()) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var _a2;
      const lead = this.getLead();
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      let canSkip = true;
      if (this.isProjectionDirty || ((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isProjectionDirty)) {
        canSkip = false;
      }
      if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        canSkip = false;
      }
      if (this.resolvedRelativeTargetAt === frameData.timestamp) {
        canSkip = false;
      }
      if (canSkip)
        return;
      const { layout: layout3, layoutId } = this.options;
      this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout3 || layoutId))
        return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
      const { target } = lead;
      if (!target)
        return;
      if (!this.projectionDelta) {
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      const prevProjectionTransform = this.projectionTransform;
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
      if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
      projectionFrameData.recalculatedProjection++;
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(notifyAll = true) {
      this.options.scheduleRender && this.options.scheduleRender();
      if (notifyAll) {
        const stack = this.getStack();
        stack && stack.scheduleRender();
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
      const snapshot = this.snapshot;
      const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
      const mixedValues = { ...this.latestValues };
      const targetDelta = createDelta();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = void 0;
      }
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const snapshotSource = snapshot ? snapshot.source : void 0;
      const layoutSource = this.layout ? this.layout.source : void 0;
      const isSharedLayoutAnimation = snapshotSource !== layoutSource;
      const stack = this.getStack();
      const isOnlyMember = !stack || stack.members.length <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      let prevRelativeTarget;
      this.mixTargetDelta = (latest) => {
        const progress3 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress3);
        mixAxisDelta(targetDelta.y, delta.y, progress3);
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
          mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress3);
          if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
            this.isProjectionDirty = false;
          }
          if (!prevRelativeTarget)
            prevRelativeTarget = createBox();
          copyBoxInto(prevRelativeTarget, this.relativeTarget);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress3, shouldCrossfadeOpacity, isOnlyMember);
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress3;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(options) {
      this.notifyListeners("animationStart");
      this.currentAnimation && this.currentAnimation.stop();
      if (this.resumingFrom && this.resumingFrom.currentAnimation) {
        this.resumingFrom.currentAnimation.stop();
      }
      if (this.pendingAnimation) {
        cancelSync2.update(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = sync.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        this.currentAnimation = animateSingleValue(0, animationTarget, {
          ...options,
          // keyframes: [0, animationTarget],÷
          onUpdate: (latest) => {
            this.mixTargetDelta(latest);
            options.onUpdate && options.onUpdate(latest);
          },
          onComplete: () => {
            options.onComplete && options.onComplete();
            this.completeAnimation();
          }
        });
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      const stack = this.getStack();
      stack && stack.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      if (this.currentAnimation) {
        this.mixTargetDelta && this.mixTargetDelta(animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      let { targetWithTransforms, target, layout: layout3, latestValues } = lead;
      if (!targetWithTransforms || !target || !layout3)
        return;
      if (this !== lead && this.layout && layout3 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout3.layoutBox)) {
        target = this.target || createBox();
        const xLength = calcLength(this.layout.layoutBox.x);
        target.x.min = lead.target.x.min;
        target.x.max = target.x.min + xLength;
        const yLength = calcLength(this.layout.layoutBox.y);
        target.y.min = lead.target.y.min;
        target.y.max = target.y.min + yLength;
      }
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node2) {
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node2);
      const config = node2.options.initialPromotionConfig;
      node2.promote({
        transition: config ? config.transition : void 0,
        preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node2) : void 0
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      var _a2;
      const { layoutId } = this.options;
      return layoutId ? ((_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.lead) || this : this;
    }
    getPrevLead() {
      var _a2;
      const { layoutId } = this.options;
      return layoutId ? (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.prevLead : void 0;
    }
    getStack() {
      const { layoutId } = this.options;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    }
    promote({ needsReset, transition: transition2, preserveFollowOpacity } = {}) {
      const stack = this.getStack();
      if (stack)
        stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition2)
        this.setOptions({ transition: transition2 });
    }
    relegate() {
      const stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    }
    resetRotation() {
      const { visualElement } = this.options;
      if (!visualElement)
        return;
      let hasRotate = false;
      const { latestValues } = visualElement;
      if (latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ) {
        hasRotate = true;
      }
      if (!hasRotate)
        return;
      const resetValues = {};
      for (let i = 0; i < transformAxes.length; i++) {
        const key = "rotate" + transformAxes[i];
        if (latestValues[key]) {
          resetValues[key] = latestValues[key];
          visualElement.setStaticValue(key, 0);
        }
      }
      visualElement.render();
      for (const key in resetValues) {
        visualElement.setStaticValue(key, resetValues[key]);
      }
      visualElement.scheduleRender();
    }
    getProjectionStyles(styleProp = {}) {
      var _a2, _b;
      const styles = {};
      if (!this.instance || this.isSVG)
        return styles;
      if (!this.isVisible) {
        return { visibility: "hidden" };
      } else {
        styles.visibility = "";
      }
      const transformTemplate = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        styles.opacity = "";
        styles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return styles;
      }
      const lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        const emptyStyles = {};
        if (this.options.layoutId) {
          emptyStyles.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return emptyStyles;
      }
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        styles.transform = transformTemplate(valuesToRender, styles.transform);
      }
      const { x, y } = this.projectionDelta;
      styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
      if (lead.animationValues) {
        styles.opacity = lead === this ? (_b = (_a2 = valuesToRender.opacity) !== null && _a2 !== void 0 ? _a2 : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        styles.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
      }
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        const { correct, applyTo } = scaleCorrectors[key];
        const corrected = styles.transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i = 0; i < num; i++) {
            styles[applyTo[i]] = corrected;
          }
        } else {
          styles[key] = corrected;
        }
      }
      if (this.options.layoutId) {
        styles.pointerEvents = lead === this ? resolveMotionValue(styleProp.pointerEvents) || "" : "none";
      }
      return styles;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((node2) => {
        var _a2;
        return (_a2 = node2.currentAnimation) === null || _a2 === void 0 ? void 0 : _a2.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node2) {
  node2.updateLayout();
}
function notifyLayoutUpdate(node2) {
  var _a2;
  const snapshot = ((_a2 = node2.resumeFrom) === null || _a2 === void 0 ? void 0 : _a2.snapshot) || node2.snapshot;
  if (node2.isLead() && node2.layout && snapshot && node2.hasListeners("didUpdate")) {
    const { layoutBox: layout3, measuredBox: measuredLayout } = node2.layout;
    const { animationType } = node2.options;
    const isShared = snapshot.source !== node2.layout.source;
    if (animationType === "size") {
      eachAxis((axis) => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(axisSnapshot);
        axisSnapshot.min = layout3[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout3)) {
      eachAxis((axis) => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(layout3[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
        if (node2.relativeTarget && !node2.currentAnimation) {
          node2.isProjectionDirty = true;
          node2.relativeTarget[axis].max = node2.relativeTarget[axis].min + length;
        }
      });
    }
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout3, snapshot.layoutBox);
    const visualDelta = createDelta();
    if (isShared) {
      calcBoxDelta(visualDelta, node2.applyTransform(measuredLayout, true), snapshot.measuredBox);
    } else {
      calcBoxDelta(visualDelta, layout3, snapshot.layoutBox);
    }
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeTargetChanged = false;
    if (!node2.resumeFrom) {
      const relativeParent = node2.getClosestProjectingParent();
      if (relativeParent && !relativeParent.resumeFrom) {
        const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
        if (parentSnapshot && parentLayout) {
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout3, parentLayout.layoutBox);
          if (!boxEquals(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
          if (relativeParent.options.layoutRoot) {
            node2.relativeTarget = relativeLayout;
            node2.relativeTargetOrigin = relativeSnapshot;
            node2.relativeParent = relativeParent;
          }
        }
      }
    }
    node2.notifyListeners("didUpdate", {
      layout: layout3,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node2.isLead()) {
    const { onExitComplete } = node2.options;
    onExitComplete && onExitComplete();
  }
  node2.options.transition = void 0;
}
function propagateDirtyNodes(node2) {
  projectionFrameData.totalNodes++;
  if (!node2.parent)
    return;
  if (!node2.isProjecting()) {
    node2.isProjectionDirty = node2.parent.isProjectionDirty;
  }
  node2.isSharedProjectionDirty || (node2.isSharedProjectionDirty = Boolean(node2.isProjectionDirty || node2.parent.isProjectionDirty || node2.parent.isSharedProjectionDirty));
  node2.isTransformDirty || (node2.isTransformDirty = node2.parent.isTransformDirty);
}
function cleanDirtyNodes(node2) {
  node2.isProjectionDirty = node2.isSharedProjectionDirty = node2.isTransformDirty = false;
}
function clearSnapshot(node2) {
  node2.clearSnapshot();
}
function clearMeasurements(node2) {
  node2.clearMeasurements();
}
function resetTransformStyle(node2) {
  const { visualElement } = node2.options;
  if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node2.resetTransform();
}
function finishAnimation(node2) {
  node2.finishAnimation();
  node2.targetDelta = node2.relativeTarget = node2.target = void 0;
}
function resolveTargetDelta(node2) {
  node2.resolveTargetDelta();
}
function calcProjection(node2) {
  node2.calcProjection();
}
function resetRotation(node2) {
  node2.resetRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
  output.translate = mix(delta.translate, 0, p);
  output.scale = mix(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
  output.min = mix(from.min, to.min, p);
  output.max = mix(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
  mixAxis(output.x, from.x, to.x, p);
  mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node2) {
  return node2.animationValues && node2.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function mountNodeEarly(node2, elementId) {
  let searchNode = node2.root;
  for (let i = node2.path.length - 1; i >= 0; i--) {
    if (Boolean(node2.path[i].instance)) {
      searchNode = node2.path[i];
      break;
    }
  }
  const searchElement = searchNode && searchNode !== node2.root ? searchNode.instance : document;
  const element = searchElement.querySelector(`[data-projection-id="${elementId}"]`);
  if (element)
    node2.mount(element, true);
}
function roundAxis(axis) {
  axis.min = Math.round(axis.min);
  axis.max = Math.round(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout3) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout3), 0.2);
}

// node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = createProjectionNode({
  attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => true
});

// node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = {
  current: void 0
};
var HTMLProjectionNode = createProjectionNode({
  measureScroll: (instance) => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode(0, {});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
});

// node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]);
var isPositionalKey = (key) => positionalKeys.has(key);
var hasPositionalKey = (target) => {
  return Object.keys(target).some(isPositionalKey);
};
var isNumOrPxType = (v) => v === number || v === px;
var getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
var getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform: transform3 }) => {
  if (transform3 === "none" || !transform3)
    return 0;
  const matrix3d = transform3.match(/^matrix3d\((.+)\)$/);
  if (matrix3d) {
    return getPosFromMatrix(matrix3d[1], pos3);
  } else {
    const matrix = transform3.match(/^matrix\((.+)\)$/);
    if (matrix) {
      return getPosFromMatrix(matrix[1], pos2);
    } else {
      return 0;
    }
  }
};
var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  if (removedTransforms.length)
    visualElement.render();
  return removedTransforms;
}
var positionalValues = {
  // Dimensions
  width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
  height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
  top: (_bbox, { top: top2 }) => parseFloat(top2),
  left: (_bbox, { left: left2 }) => parseFloat(left2),
  bottom: ({ y }, { top: top2 }) => parseFloat(top2) + (y.max - y.min),
  right: ({ x }, { left: left2 }) => parseFloat(left2) + (x.max - x.min),
  // Transform
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
var convertChangedValueTypes = (target, visualElement, changedKeys) => {
  const originBbox = visualElement.measureViewportBox();
  const element = visualElement.current;
  const elementComputedStyle = getComputedStyle(element);
  const { display } = elementComputedStyle;
  const origin = {};
  if (display === "none") {
    visualElement.setStaticValue("display", target.display || "block");
  }
  changedKeys.forEach((key) => {
    origin[key] = positionalValues[key](originBbox, elementComputedStyle);
  });
  visualElement.render();
  const targetBbox = visualElement.measureViewportBox();
  changedKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    value && value.jump(origin[key]);
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};
var checkAndConvertChangedValueTypes = (visualElement, target, origin = {}, transitionEnd = {}) => {
  target = { ...target };
  transitionEnd = { ...transitionEnd };
  const targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  let removedTransformValues = [];
  let hasAttemptedToRemoveTransformValues = false;
  const changedValueTypeKeys = [];
  targetPositionalKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    if (!visualElement.hasValue(key))
      return;
    let from = origin[key];
    let fromType = findDimensionValueType(from);
    const to = target[key];
    let toType;
    if (isKeyframesTarget(to)) {
      const numKeyframes = to.length;
      const fromIndex = to[0] === null ? 1 : 0;
      from = to[fromIndex];
      fromType = findDimensionValueType(from);
      for (let i = fromIndex; i < numKeyframes; i++) {
        if (to[i] === null)
          break;
        if (!toType) {
          toType = findDimensionValueType(to[i]);
          invariant(toType === fromType || isNumOrPxType(fromType) && isNumOrPxType(toType), "Keyframes must be of the same dimension as the current value");
        } else {
          invariant(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
        }
      }
    } else {
      toType = findDimensionValueType(to);
    }
    if (fromType !== toType) {
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        const current = value.get();
        if (typeof current === "string") {
          value.set(parseFloat(current));
        }
        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === px) {
          target[key] = to.map(parseFloat);
        }
      } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
        if (from === 0) {
          value.set(toType.transform(from));
        } else {
          target[key] = fromType.transform(to);
        }
      } else {
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(visualElement);
          hasAttemptedToRemoveTransformValues = true;
        }
        changedValueTypeKeys.push(key);
        transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
        value.jump(to);
      }
    }
  });
  if (changedValueTypeKeys.length) {
    const scrollY = changedValueTypeKeys.indexOf("height") >= 0 ? window.pageYOffset : null;
    const convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
    if (removedTransformValues.length) {
      removedTransformValues.forEach(([key, value]) => {
        visualElement.getValue(key).set(value);
      });
    }
    visualElement.render();
    if (isBrowser2 && scrollY !== null) {
      window.scrollTo({ top: scrollY });
    }
    return { target: convertedTarget, transitionEnd };
  } else {
    return { target, transitionEnd };
  }
};
function unitConversion(visualElement, target, origin, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd) : { target, transitionEnd };
}

// node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs
var parseDomVariant = (visualElement, target, origin, transitionEnd) => {
  const resolved = resolveCSSVariables(visualElement, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return unitConversion(visualElement, target, origin, transitionEnd);
};

// node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
var prefersReducedMotion = { current: null };
var hasReducedMotionListener = { current: false };

// node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser2)
    return;
  if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
    motionMediaQuery.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}

// node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
  const { willChange } = next;
  for (const key in next) {
    const nextValue = next[key];
    const prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
      if (isWillChangeMotionValue(willChange)) {
        willChange.add(key);
      }
      if (true) {
        warnOnce(nextValue.version === "10.11.2", `Attempting to mix Framer Motion versions ${nextValue.version} with 10.11.2 may not work as expected.`);
      }
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue, { owner: element }));
      if (isWillChangeMotionValue(willChange)) {
        willChange.remove(key);
      }
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        const existingValue = element.getValue(key);
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        const latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
      }
    }
  }
  for (const key in prev) {
    if (next[key] === void 0)
      element.removeValue(key);
  }
  return next;
}

// node_modules/framer-motion/dist/es/render/store.mjs
var visualElementStore = /* @__PURE__ */ new WeakMap();

// node_modules/framer-motion/dist/es/render/VisualElement.mjs
var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;
var propEventHandlers = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
var numVariantProps = variantProps.length;
var VisualElement = class {
  constructor({ parent, props, presenceContext, reducedMotionConfig, visualState }, options = {}) {
    this.current = null;
    this.children = /* @__PURE__ */ new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.values = /* @__PURE__ */ new Map();
    this.features = {};
    this.valueSubscriptions = /* @__PURE__ */ new Map();
    this.prevMotionValues = {};
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (!this.current)
        return;
      this.triggerBuild();
      this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
    };
    this.scheduleRender = () => sync.render(this.render, false, true);
    const { latestValues, renderState } = visualState;
    this.latestValues = latestValues;
    this.baseTarget = { ...latestValues };
    this.initialValues = props.initial ? { ...latestValues } : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.presenceContext = presenceContext;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.options = options;
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = /* @__PURE__ */ new Set();
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {});
    for (const key in initialMotionValues) {
      const value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
        if (isWillChangeMotionValue(willChange)) {
          willChange.add(key);
        }
      }
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(_props, _prevProps) {
    return {};
  }
  mount(instance) {
    this.current = instance;
    visualElementStore.set(instance, this);
    if (this.projection) {
      this.projection.mount(instance);
    }
    if (this.parent && this.isVariantNode && !this.isControllingVariants) {
      this.removeFromVariantTree = this.parent.addVariantChild(this);
    }
    this.values.forEach((value, key) => this.bindToMotionValue(key, value));
    if (!hasReducedMotionListener.current) {
      initPrefersReducedMotion();
    }
    this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
    if (true) {
      warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
    }
    if (this.parent)
      this.parent.children.add(this);
    this.update(this.props, this.presenceContext);
  }
  unmount() {
    visualElementStore.delete(this.current);
    this.projection && this.projection.unmount();
    cancelSync2.update(this.notifyUpdate);
    cancelSync2.render(this.render);
    this.valueSubscriptions.forEach((remove) => remove());
    this.removeFromVariantTree && this.removeFromVariantTree();
    this.parent && this.parent.children.delete(this);
    for (const key in this.events) {
      this.events[key].clear();
    }
    for (const key in this.features) {
      this.features[key].unmount();
    }
    this.current = null;
  }
  bindToMotionValue(key, value) {
    const valueIsTransform = transformProps.has(key);
    const removeOnChange = value.on("change", (latestValue) => {
      this.latestValues[key] = latestValue;
      this.props.onUpdate && sync.update(this.notifyUpdate, false, true);
      if (valueIsTransform && this.projection) {
        this.projection.isTransformDirty = true;
      }
    });
    const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(key, () => {
      removeOnChange();
      removeOnRenderRequest();
    });
  }
  sortNodePosition(other) {
    if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
      return 0;
    }
    return this.sortInstanceNodePosition(this.current, other.current);
  }
  loadFeatures({ children, ...renderedProps }, isStrict, preloadedFeatures2, projectionId, initialLayoutGroupConfig) {
    let ProjectionNodeConstructor;
    let MeasureLayout2;
    if (preloadedFeatures2 && isStrict) {
      const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      renderedProps.ignoreStrict ? warning(false, strictMessage) : invariant(false, strictMessage);
    }
    for (let i = 0; i < numFeatures; i++) {
      const name = featureNames[i];
      const { isEnabled, Feature: FeatureConstructor, ProjectionNode, MeasureLayout: MeasureLayoutComponent } = featureDefinitions[name];
      if (ProjectionNode)
        ProjectionNodeConstructor = ProjectionNode;
      if (isEnabled(renderedProps)) {
        if (!this.features[name] && FeatureConstructor) {
          this.features[name] = new FeatureConstructor(this);
        }
        if (MeasureLayoutComponent) {
          MeasureLayout2 = MeasureLayoutComponent;
        }
      }
    }
    if (!this.projection && ProjectionNodeConstructor) {
      this.projection = new ProjectionNodeConstructor(projectionId, this.latestValues, this.parent && this.parent.projection);
      const { layoutId, layout: layout3, drag: drag2, dragConstraints, layoutScroll, layoutRoot } = renderedProps;
      this.projection.setOptions({
        layoutId,
        layout: layout3,
        alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject2(dragConstraints),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof layout3 === "string" ? layout3 : "both",
        initialPromotionConfig: initialLayoutGroupConfig,
        layoutScroll,
        layoutRoot
      });
    }
    return MeasureLayout2;
  }
  updateFeatures() {
    for (const key in this.features) {
      const feature = this.features[key];
      if (feature.isMounted) {
        feature.update(this.props, this.prevProps);
      } else {
        feature.mount();
        feature.isMounted = true;
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(target, canMutate = true) {
    return this.makeTargetAnimatableFromInstance(target, this.props, canMutate);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(props, presenceContext) {
    if (props.transformTemplate || this.props.transformTemplate) {
      this.scheduleRender();
    }
    this.prevProps = this.props;
    this.props = props;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = presenceContext;
    for (let i = 0; i < propEventHandlers.length; i++) {
      const key = propEventHandlers[i];
      if (this.propEventSubscriptions[key]) {
        this.propEventSubscriptions[key]();
        delete this.propEventSubscriptions[key];
      }
      const listener = props["on" + key];
      if (listener) {
        this.propEventSubscriptions[key] = this.on(key, listener);
      }
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps), this.prevMotionValues);
    if (this.handleChildMotionValue) {
      this.handleChildMotionValue();
    }
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(name) {
    return this.props.variants ? this.props.variants[name] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(startAtParent = false) {
    if (startAtParent) {
      return this.parent ? this.parent.getVariantContext() : void 0;
    }
    if (!this.isControllingVariants) {
      const context2 = this.parent ? this.parent.getVariantContext() || {} : {};
      if (this.props.initial !== void 0) {
        context2.initial = this.props.initial;
      }
      return context2;
    }
    const context = {};
    for (let i = 0; i < numVariantProps; i++) {
      const name = variantProps[i];
      const prop = this.props[name];
      if (isVariantLabel(prop) || prop === false) {
        context[name] = prop;
      }
    }
    return context;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(child) {
    const closestVariantNode = this.getClosestVariantNode();
    if (closestVariantNode) {
      closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
      return () => closestVariantNode.variantChildren.delete(child);
    }
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(key, value) {
    if (value !== this.values.get(key)) {
      this.removeValue(key);
      this.bindToMotionValue(key, value);
    }
    this.values.set(key, value);
    this.latestValues[key] = value.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(key) {
    this.values.delete(key);
    const unsubscribe = this.valueSubscriptions.get(key);
    if (unsubscribe) {
      unsubscribe();
      this.valueSubscriptions.delete(key);
    }
    delete this.latestValues[key];
    this.removeValueFromRenderState(key, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    if (this.props.values && this.props.values[key]) {
      return this.props.values[key];
    }
    let value = this.values.get(key);
    if (value === void 0 && defaultValue !== void 0) {
      value = motionValue(defaultValue, { owner: this });
      this.addValue(key, value);
    }
    return value;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(key) {
    return this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : this.readValueFromInstance(this.current, key, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(key) {
    var _a2;
    const { initial } = this.props;
    const valueFromInitial = typeof initial === "string" || typeof initial === "object" ? (_a2 = resolveVariantFromProps(this.props, initial)) === null || _a2 === void 0 ? void 0 : _a2[key] : void 0;
    if (initial && valueFromInitial !== void 0) {
      return valueFromInitial;
    }
    const target = this.getBaseTargetFromProps(this.props, key);
    if (target !== void 0 && !isMotionValue(target))
      return target;
    return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    return this.events[eventName].add(callback);
  }
  notify(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].notify(...args);
    }
  }
};

// node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
  sortInstanceNodePosition(a, b) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(props, key) {
    return props.style ? props.style[key] : void 0;
  }
  removeValueFromRenderState(key, { vars, style }) {
    delete vars[key];
    delete style[key];
  }
  makeTargetAnimatableFromInstance({ transition: transition2, transitionEnd, ...target }, { transformValues }, isMounted) {
    let origin = getOrigin(target, transition2 || {}, this);
    if (transformValues) {
      if (transitionEnd)
        transitionEnd = transformValues(transitionEnd);
      if (target)
        target = transformValues(target);
      if (origin)
        origin = transformValues(origin);
    }
    if (isMounted) {
      checkTargetForNewValues(this, target, origin);
      const parsed = parseDomVariant(this, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }
    return {
      transition: transition2,
      transitionEnd,
      ...target
    };
  }
};

// node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      const computedStyle = getComputedStyle2(instance);
      const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value === "string" ? value.trim() : value;
    }
  }
  measureInstanceViewportBox(instance, { transformPagePoint }) {
    return measureViewportBox(instance, transformPagePoint);
  }
  build(renderState, latestValues, options, props) {
    buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
  }
  scrapeMotionValuesFromProps(props, prevProps) {
    return scrapeMotionValuesFromProps(props, prevProps);
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    const { children } = this.props;
    if (isMotionValue(children)) {
      this.childSubscription = children.on("change", (latest) => {
        if (this.current)
          this.current.textContent = `${latest}`;
      });
    }
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderHTML(instance, renderState, styleProp, projection);
  }
};

// node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.isSVGTag = false;
  }
  getBaseTargetFromProps(props, key) {
    return props[key];
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return instance.getAttribute(key);
  }
  measureInstanceViewportBox() {
    return createBox();
  }
  scrapeMotionValuesFromProps(props, prevProps) {
    return scrapeMotionValuesFromProps2(props, prevProps);
  }
  build(renderState, latestValues, options, props) {
    buildSVGAttrs(renderState, latestValues, options, this.isSVGTag, props.transformTemplate);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderSVG(instance, renderState, styleProp, projection);
  }
  mount(instance) {
    this.isSVGTag = isSVGTag(instance.tagName);
    super.mount(instance);
  }
};

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = (Component2, options) => {
  return isSVGComponent(Component2) ? new SVGVisualElement(options, { enableHardwareAcceleration: false }) : new HTMLVisualElement(options, { enableHardwareAcceleration: true });
};

// node_modules/framer-motion/dist/es/motion/features/layout.mjs
var layout2 = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/render/dom/motion.mjs
var preloadedFeatures = {
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layout2
};
var motion = createMotionProxy((Component2, config) => createDomMotionConfig(Component2, config, preloadedFeatures, createDomVisualElement));

// node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs
var m = createMotionProxy(createDomMotionConfig);

// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var React4 = __toESM(require_react(), 1);
var import_react31 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/use-force-update.mjs
var import_react27 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs
var import_react26 = __toESM(require_react(), 1);
function useIsMounted() {
  const isMounted = (0, import_react26.useRef)(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

// node_modules/framer-motion/dist/es/utils/use-force-update.mjs
function useForceUpdate() {
  const isMounted = useIsMounted();
  const [forcedRenderCount, setForcedRenderCount] = (0, import_react27.useState)(0);
  const forceRender = (0, import_react27.useCallback)(() => {
    isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
  const deferredForceRender = (0, import_react27.useCallback)(() => sync.postRender(forceRender), [forceRender]);
  return [deferredForceRender, forcedRenderCount];
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var React3 = __toESM(require_react(), 1);
var import_react29 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var React2 = __toESM(require_react(), 1);
var import_react28 = __toESM(require_react(), 1);
var PopChildMeasure = class extends React2.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent) {
      const size = this.props.sizeRef.current;
      size.height = element.offsetHeight || 0;
      size.width = element.offsetWidth || 0;
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
};
function PopChild({ children, isPresent: isPresent2 }) {
  const id4 = (0, import_react28.useId)();
  const ref = (0, import_react28.useRef)(null);
  const size = (0, import_react28.useRef)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  (0, import_react28.useInsertionEffect)(() => {
    const { width, height, top: top2, left: left2 } = size.current;
    if (isPresent2 || !ref.current || !width || !height)
      return;
    ref.current.dataset.motionPopId = id4;
    const style = document.createElement("style");
    document.head.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id4}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top2}px !important;
            left: ${left2}px !important;
          }
        `);
    }
    return () => {
      document.head.removeChild(style);
    };
  }, [isPresent2]);
  return React2.createElement(PopChildMeasure, { isPresent: isPresent2, childRef: ref, sizeRef: size }, React2.cloneElement(children, { ref }));
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var PresenceChild = ({ children, initial, isPresent: isPresent2, onExitComplete, custom, presenceAffectsLayout, mode }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id4 = (0, import_react29.useId)();
  const context = (0, import_react29.useMemo)(
    () => ({
      id: id4,
      initial,
      isPresent: isPresent2,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
          if (!isComplete)
            return;
        }
        onExitComplete && onExitComplete();
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? void 0 : [isPresent2]
  );
  (0, import_react29.useMemo)(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent2]);
  React3.useEffect(() => {
    !isPresent2 && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent2]);
  if (mode === "popLayout") {
    children = React3.createElement(PopChild, { isPresent: isPresent2 }, children);
  }
  return React3.createElement(PresenceContext.Provider, { value: context }, children);
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}

// node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs
var import_react30 = __toESM(require_react(), 1);
function useUnmountEffect(callback) {
  return (0, import_react30.useEffect)(() => () => callback(), []);
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var getChildKey = (child) => child.key || "";
function updateChildLookup(children, allChildren) {
  children.forEach((child) => {
    const key = getChildKey(child);
    allChildren.set(key, child);
  });
}
function onlyElements(children) {
  const filtered = [];
  import_react31.Children.forEach(children, (child) => {
    if ((0, import_react31.isValidElement)(child))
      filtered.push(child);
  });
  return filtered;
}
var AnimatePresence = ({ children, custom, initial = true, onExitComplete, exitBeforeEnter, presenceAffectsLayout = true, mode = "sync" }) => {
  invariant(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
  let [forceRender] = useForceUpdate();
  const forceRenderLayoutGroup = (0, import_react31.useContext)(LayoutGroupContext).forceRender;
  if (forceRenderLayoutGroup)
    forceRender = forceRenderLayoutGroup;
  const isMounted = useIsMounted();
  const filteredChildren = onlyElements(children);
  let childrenToRender = filteredChildren;
  const exiting = /* @__PURE__ */ new Set();
  const presentChildren = (0, import_react31.useRef)(childrenToRender);
  const allChildren = (0, import_react31.useRef)(/* @__PURE__ */ new Map()).current;
  const isInitialRender = (0, import_react31.useRef)(true);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    updateChildLookup(filteredChildren, allChildren);
    presentChildren.current = childrenToRender;
  });
  useUnmountEffect(() => {
    isInitialRender.current = true;
    allChildren.clear();
    exiting.clear();
  });
  if (isInitialRender.current) {
    return React4.createElement(React4.Fragment, null, childrenToRender.map((child) => React4.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? void 0 : false, presenceAffectsLayout, mode }, child)));
  }
  childrenToRender = [...childrenToRender];
  const presentKeys = presentChildren.current.map(getChildKey);
  const targetKeys = filteredChildren.map(getChildKey);
  const numPresent = presentKeys.length;
  for (let i = 0; i < numPresent; i++) {
    const key = presentKeys[i];
    if (targetKeys.indexOf(key) === -1) {
      exiting.add(key);
    }
  }
  if (mode === "wait" && exiting.size) {
    childrenToRender = [];
  }
  exiting.forEach((key) => {
    if (targetKeys.indexOf(key) !== -1)
      return;
    const child = allChildren.get(key);
    if (!child)
      return;
    const insertionIndex = presentKeys.indexOf(key);
    const onExit = () => {
      allChildren.delete(key);
      exiting.delete(key);
      const removeIndex = presentChildren.current.findIndex((presentChild) => presentChild.key === key);
      presentChildren.current.splice(removeIndex, 1);
      if (!exiting.size) {
        presentChildren.current = filteredChildren;
        if (isMounted.current === false)
          return;
        forceRender();
        onExitComplete && onExitComplete();
      }
    };
    childrenToRender.splice(insertionIndex, 0, React4.createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom, presenceAffectsLayout, mode }, child));
  });
  childrenToRender = childrenToRender.map((child) => {
    const key = child.key;
    return exiting.has(key) ? child : React4.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout, mode }, child);
  });
  if (mode === "wait" && childrenToRender.length > 1) {
    console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  }
  return React4.createElement(React4.Fragment, null, exiting.size ? childrenToRender : childrenToRender.map((child) => (0, import_react31.cloneElement)(child)));
};

// node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs
var React5 = __toESM(require_react(), 1);
var import_react32 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs
var React6 = __toESM(require_react(), 1);
var import_react33 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs
var React7 = __toESM(require_react(), 1);
var import_react35 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs
var import_react34 = __toESM(require_react(), 1);
var DeprecatedLayoutGroupContext = (0, import_react34.createContext)(null);

// node_modules/framer-motion/dist/es/components/Reorder/Group.mjs
var React8 = __toESM(require_react(), 1);
var import_react37 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/context/ReorderContext.mjs
var import_react36 = __toESM(require_react(), 1);
var ReorderContext = (0, import_react36.createContext)(null);

// node_modules/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs
function checkReorder(order2, value, offset2, velocity) {
  if (!velocity)
    return order2;
  const index2 = order2.findIndex((item2) => item2.value === value);
  if (index2 === -1)
    return order2;
  const nextOffset = velocity > 0 ? 1 : -1;
  const nextItem = order2[index2 + nextOffset];
  if (!nextItem)
    return order2;
  const item = order2[index2];
  const nextLayout = nextItem.layout;
  const nextItemCenter = mix(nextLayout.min, nextLayout.max, 0.5);
  if (nextOffset === 1 && item.layout.max + offset2 > nextItemCenter || nextOffset === -1 && item.layout.min + offset2 < nextItemCenter) {
    return moveItem(order2, index2, index2 + nextOffset);
  }
  return order2;
}

// node_modules/framer-motion/dist/es/components/Reorder/Group.mjs
function ReorderGroup({ children, as = "ul", axis = "y", onReorder, values, ...props }, externalRef) {
  const Component2 = useConstant(() => motion(as));
  const order2 = [];
  const isReordering = (0, import_react37.useRef)(false);
  invariant(Boolean(values), "Reorder.Group must be provided a values prop");
  const context = {
    axis,
    registerItem: (value, layout3) => {
      if (layout3 && order2.findIndex((entry) => value === entry.value) === -1) {
        order2.push({ value, layout: layout3[axis] });
        order2.sort(compareMin);
      }
    },
    updateOrder: (id4, offset2, velocity) => {
      if (isReordering.current)
        return;
      const newOrder = checkReorder(order2, id4, offset2, velocity);
      if (order2 !== newOrder) {
        isReordering.current = true;
        onReorder(newOrder.map(getValue).filter((value) => values.indexOf(value) !== -1));
      }
    }
  };
  (0, import_react37.useEffect)(() => {
    isReordering.current = false;
  });
  return React8.createElement(
    Component2,
    { ...props, ref: externalRef, ignoreStrict: true },
    React8.createElement(ReorderContext.Provider, { value: context }, children)
  );
}
var Group = (0, import_react37.forwardRef)(ReorderGroup);
function getValue(item) {
  return item.value;
}
function compareMin(a, b) {
  return a.layout.min - b.layout.min;
}

// node_modules/framer-motion/dist/es/components/Reorder/Item.mjs
var React9 = __toESM(require_react(), 1);
var import_react39 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/value/use-motion-value.mjs
var import_react38 = __toESM(require_react(), 1);
function useMotionValue(initial) {
  const value = useConstant(() => motionValue(initial));
  const { isStatic } = (0, import_react38.useContext)(MotionConfigContext);
  if (isStatic) {
    const [, setLatest] = (0, import_react38.useState)(initial);
    (0, import_react38.useEffect)(() => value.on("change", setLatest), []);
  }
  return value;
}

// node_modules/framer-motion/dist/es/utils/transform.mjs
var isCustomValueType = (v) => {
  return typeof v === "object" && v.mix;
};
var getMixer2 = (v) => isCustomValueType(v) ? v.mix : void 0;
function transform2(...args) {
  const useImmediate = !Array.isArray(args[0]);
  const argOffset = useImmediate ? 0 : -1;
  const inputValue = args[0 + argOffset];
  const inputRange = args[1 + argOffset];
  const outputRange = args[2 + argOffset];
  const options = args[3 + argOffset];
  const interpolator = interpolate(inputRange, outputRange, {
    mixer: getMixer2(outputRange[0]),
    ...options
  });
  return useImmediate ? interpolator(inputValue) : interpolator;
}

// node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function useCombineMotionValues(values, combineValues) {
  const value = useMotionValue(combineValues());
  const updateValue = () => value.set(combineValues());
  updateValue();
  useIsomorphicLayoutEffect(() => {
    const scheduleUpdate = () => sync.update(updateValue, false, true);
    const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
    return () => {
      subscriptions.forEach((unsubscribe) => unsubscribe());
      cancelSync2.update(updateValue);
    };
  });
  return value;
}

// node_modules/framer-motion/dist/es/value/use-transform.mjs
function useTransform(input, inputRangeOrTransformer, outputRange, options) {
  const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform2(inputRangeOrTransformer, outputRange, options);
  return Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
}
function useListTransform(values, transformer) {
  const latest = useConstant(() => []);
  return useCombineMotionValues(values, () => {
    latest.length = 0;
    const numValues = values.length;
    for (let i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }
    return transformer(latest);
  });
}

// node_modules/framer-motion/dist/es/components/Reorder/Item.mjs
function useDefaultMotionValue(value, defaultValue = 0) {
  return isMotionValue(value) ? value : useMotionValue(defaultValue);
}
function ReorderItem({ children, style = {}, value, as = "li", onDrag, layout: layout3 = true, ...props }, externalRef) {
  const Component2 = useConstant(() => motion(as));
  const context = (0, import_react39.useContext)(ReorderContext);
  const point = {
    x: useDefaultMotionValue(style.x),
    y: useDefaultMotionValue(style.y)
  };
  const zIndex = useTransform([point.x, point.y], ([latestX, latestY]) => latestX || latestY ? 1 : "unset");
  const measuredLayout = (0, import_react39.useRef)(null);
  invariant(Boolean(context), "Reorder.Item must be a child of Reorder.Group");
  const { axis, registerItem, updateOrder } = context;
  (0, import_react39.useEffect)(() => {
    registerItem(value, measuredLayout.current);
  }, [context]);
  return React9.createElement(Component2, { drag: axis, ...props, dragSnapToOrigin: true, style: { ...style, x: point.x, y: point.y, zIndex }, layout: layout3, onDrag: (event, gesturePoint) => {
    const { velocity } = gesturePoint;
    velocity[axis] && updateOrder(value, point[axis].get(), velocity[axis]);
    onDrag && onDrag(event, gesturePoint);
  }, onLayoutMeasure: (measured) => {
    measuredLayout.current = measured;
  }, ref: externalRef, ignoreStrict: true }, children);
}
var Item = (0, import_react39.forwardRef)(ReorderItem);

// node_modules/framer-motion/dist/es/render/dom/features-animation.mjs
var domAnimation = {
  renderer: createDomVisualElement,
  ...animations,
  ...gestureAnimations
};

// node_modules/framer-motion/dist/es/render/dom/features-max.mjs
var domMax = {
  ...domAnimation,
  ...drag,
  ...layout2
};

// node_modules/framer-motion/dist/es/value/use-spring.mjs
var import_react40 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs
var import_react41 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/value/use-scroll.mjs
var import_react42 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs
function resolveElements(elements, scope, selectorCache) {
  var _a2;
  if (typeof elements === "string") {
    let root = document;
    if (scope) {
      invariant(Boolean(scope.current), "Scope provided, but no element detected.");
      root = scope.current;
    }
    if (selectorCache) {
      (_a2 = selectorCache[elements]) !== null && _a2 !== void 0 ? _a2 : selectorCache[elements] = root.querySelectorAll(elements);
      elements = selectorCache[elements];
    } else {
      elements = root.querySelectorAll(elements);
    }
  } else if (elements instanceof Element) {
    elements = [elements];
  }
  return Array.from(elements || []);
}

// node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs
var import_react43 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
var import_react44 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion-config.mjs
var import_react45 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/animation/GroupPlaybackControls.mjs
var GroupPlaybackControls = class {
  constructor(animations2) {
    this.animations = animations2.filter(Boolean);
  }
  then(onResolve, onReject) {
    return Promise.all(this.animations).then(onResolve).catch(onReject);
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(propName) {
    return this.animations[0][propName];
  }
  setAll(propName, newValue) {
    for (let i = 0; i < this.animations.length; i++) {
      this.animations[i][propName] = newValue;
    }
  }
  get time() {
    return this.getAll("time");
  }
  set time(time) {
    this.setAll("time", time);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(speed) {
    this.setAll("speed", speed);
  }
  get duration() {
    let max2 = 0;
    for (let i = 0; i < this.animations.length; i++) {
      max2 = Math.max(max2, this.animations[i].duration);
    }
    return max2;
  }
  runAll(methodName) {
    this.animations.forEach((controls) => controls[methodName]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  stop() {
    this.runAll("stop");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
};

// node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function isDOMKeyframes(keyframes3) {
  return typeof keyframes3 === "object" && !Array.isArray(keyframes3);
}

// node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs
function createVisualElement(element) {
  const options = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {},
        attrs: {}
      },
      latestValues: {}
    }
  };
  const node2 = isSVGElement(element) ? new SVGVisualElement(options, {
    enableHardwareAcceleration: false
  }) : new HTMLVisualElement(options, {
    enableHardwareAcceleration: true
  });
  node2.mount(element);
  visualElementStore.set(element, node2);
}

// node_modules/framer-motion/dist/es/easing/utils/create-generator-easing.mjs
function createGeneratorEasing(options, scale3 = 100) {
  const generator = spring({ keyframes: [0, scale3], ...options });
  const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
  return {
    type: "keyframes",
    ease: (progress3) => generator.next(duration * progress3).value / scale3,
    duration: millisecondsToSeconds(duration)
  };
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
function calcNextTime(current, next, prev, labels) {
  var _a2;
  if (typeof next === "number") {
    return next;
  } else if (next.startsWith("-") || next.startsWith("+")) {
    return Math.max(0, current + parseFloat(next));
  } else if (next === "<") {
    return prev;
  } else {
    return (_a2 = labels.get(next)) !== null && _a2 !== void 0 ? _a2 : current;
  }
}

// node_modules/framer-motion/dist/es/utils/wrap.mjs
var wrap = (min2, max2, v) => {
  const rangeSize = max2 - min2;
  return ((v - min2) % rangeSize + rangeSize) % rangeSize + min2;
};

// node_modules/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs
function getEasingForSegment(easing, i) {
  return isEasingArray(easing) ? easing[wrap(0, easing.length, i)] : easing;
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function eraseKeyframes(sequence, startTime, endTime) {
  for (let i = 0; i < sequence.length; i++) {
    const keyframe = sequence[i];
    if (keyframe.at > startTime && keyframe.at < endTime) {
      removeItem(sequence, keyframe);
      i--;
    }
  }
}
function addKeyframes(sequence, keyframes3, easing, offset2, startTime, endTime) {
  eraseKeyframes(sequence, startTime, endTime);
  for (let i = 0; i < keyframes3.length; i++) {
    sequence.push({
      value: keyframes3[i],
      at: mix(startTime, endTime, offset2[i]),
      easing: getEasingForSegment(easing, i)
    });
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function compareByTime(a, b) {
  if (a.at === b.at) {
    if (a.value === null)
      return 1;
    if (b.value === null)
      return -1;
    return 0;
  } else {
    return a.at - b.at;
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/create.mjs
var defaultSegmentEasing = "easeInOut";
function createAnimationsFromSequence(sequence, { defaultTransition: defaultTransition2 = {}, ...sequenceTransition } = {}, scope) {
  const defaultDuration = defaultTransition2.duration || 0.3;
  const animationDefinitions = /* @__PURE__ */ new Map();
  const sequences = /* @__PURE__ */ new Map();
  const elementCache = {};
  const timeLabels = /* @__PURE__ */ new Map();
  let prevTime = 0;
  let currentTime = 0;
  let totalDuration = 0;
  for (let i = 0; i < sequence.length; i++) {
    const segment = sequence[i];
    if (typeof segment === "string") {
      timeLabels.set(segment, currentTime);
      continue;
    } else if (!Array.isArray(segment)) {
      timeLabels.set(segment.name, calcNextTime(currentTime, segment.at, prevTime, timeLabels));
      continue;
    }
    let [subject, keyframes3, transition2 = {}] = segment;
    if (transition2.at !== void 0) {
      currentTime = calcNextTime(currentTime, transition2.at, prevTime, timeLabels);
    }
    let maxDuration3 = 0;
    const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numElements = 0) => {
      const valueKeyframesAsList = keyframesAsList(valueKeyframes);
      const { delay: delay2 = 0, times = defaultOffset(valueKeyframesAsList), type = "keyframes", ...remainingTransition } = valueTransition;
      let { ease: ease2 = defaultTransition2.ease || "easeOut", duration } = valueTransition;
      const calculatedDelay = typeof delay2 === "function" ? delay2(elementIndex, numElements) : delay2;
      const numKeyframes = valueKeyframesAsList.length;
      if (numKeyframes <= 2 && type === "spring") {
        let absoluteDelta = 100;
        if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
          const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
          absoluteDelta = Math.abs(delta);
        }
        const springTransition = { ...remainingTransition };
        if (duration !== void 0) {
          springTransition.duration = secondsToMilliseconds(duration);
        }
        const springEasing = createGeneratorEasing(springTransition, absoluteDelta);
        ease2 = springEasing.ease;
        duration = springEasing.duration;
      }
      duration !== null && duration !== void 0 ? duration : duration = defaultDuration;
      const startTime = currentTime + calculatedDelay;
      const targetTime = startTime + duration;
      if (times.length === 1 && times[0] === 0) {
        times[1] = 1;
      }
      const remainder = times.length - valueKeyframesAsList.length;
      remainder > 0 && fillOffset(times, remainder);
      valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
      addKeyframes(valueSequence, valueKeyframesAsList, ease2, times, startTime, targetTime);
      maxDuration3 = Math.max(calculatedDelay + duration, maxDuration3);
      totalDuration = Math.max(targetTime, totalDuration);
    };
    if (isMotionValue(subject)) {
      const subjectSequence = getSubjectSequence(subject, sequences);
      resolveValueSequence(keyframes3, transition2, getValueSequence("default", subjectSequence));
    } else {
      const elements = resolveElements(subject, scope, elementCache);
      const numElements = elements.length;
      for (let elementIndex = 0; elementIndex < numElements; elementIndex++) {
        keyframes3 = keyframes3;
        transition2 = transition2;
        const element = elements[elementIndex];
        const subjectSequence = getSubjectSequence(element, sequences);
        for (const key in keyframes3) {
          resolveValueSequence(keyframes3[key], getValueTransition2(transition2, key), getValueSequence(key, subjectSequence), elementIndex, numElements);
        }
      }
      prevTime = currentTime;
      currentTime += maxDuration3;
    }
  }
  sequences.forEach((valueSequences, element) => {
    for (const key in valueSequences) {
      const valueSequence = valueSequences[key];
      valueSequence.sort(compareByTime);
      const keyframes3 = [];
      const valueOffset = [];
      const valueEasing = [];
      for (let i = 0; i < valueSequence.length; i++) {
        const { at, value, easing } = valueSequence[i];
        keyframes3.push(value);
        valueOffset.push(progress(0, totalDuration, at));
        valueEasing.push(easing || "easeOut");
      }
      if (valueOffset[0] !== 0) {
        valueOffset.unshift(0);
        keyframes3.unshift(keyframes3[0]);
        valueEasing.unshift(defaultSegmentEasing);
      }
      if (valueOffset[valueOffset.length - 1] !== 1) {
        valueOffset.push(1);
        keyframes3.push(null);
      }
      if (!animationDefinitions.has(element)) {
        animationDefinitions.set(element, {
          keyframes: {},
          transition: {}
        });
      }
      const definition = animationDefinitions.get(element);
      definition.keyframes[key] = keyframes3;
      definition.transition[key] = {
        ...defaultTransition2,
        duration: totalDuration,
        ease: valueEasing,
        times: valueOffset,
        ...sequenceTransition
      };
    }
  });
  return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
  !sequences.has(subject) && sequences.set(subject, {});
  return sequences.get(subject);
}
function getValueSequence(name, sequences) {
  if (!sequences[name])
    sequences[name] = [];
  return sequences[name];
}
function keyframesAsList(keyframes3) {
  return Array.isArray(keyframes3) ? keyframes3 : [keyframes3];
}
function getValueTransition2(transition2, key) {
  return transition2[key] ? { ...transition2, ...transition2[key] } : { ...transition2 };
}
var isNumber = (keyframe) => typeof keyframe === "number";
var isNumberKeyframesArray = (keyframes3) => keyframes3.every(isNumber);

// node_modules/framer-motion/dist/es/animation/animate.mjs
function animateElements(elementOrSelector, keyframes3, options, scope) {
  const elements = resolveElements(elementOrSelector, scope);
  const numElements = elements.length;
  invariant(Boolean(numElements), "No valid element provided.");
  const animations2 = [];
  for (let i = 0; i < numElements; i++) {
    const element = elements[i];
    if (!visualElementStore.has(element)) {
      createVisualElement(element);
    }
    const visualElement = visualElementStore.get(element);
    const transition2 = { ...options };
    if (typeof transition2.delay === "function") {
      transition2.delay = transition2.delay(i, numElements);
    }
    animations2.push(...animateTarget(visualElement, { ...keyframes3, transition: transition2 }, {}));
  }
  return new GroupPlaybackControls(animations2);
}
var isSequence = (value) => Array.isArray(value) && Array.isArray(value[0]);
function animateSequence(sequence, options, scope) {
  const animations2 = [];
  const animationDefinitions = createAnimationsFromSequence(sequence, options, scope);
  animationDefinitions.forEach(({ keyframes: keyframes3, transition: transition2 }, subject) => {
    let animation;
    if (isMotionValue(subject)) {
      animation = animateSingleValue(subject, keyframes3.default, transition2.default);
    } else {
      animation = animateElements(subject, keyframes3, transition2);
    }
    animations2.push(animation);
  });
  return new GroupPlaybackControls(animations2);
}
var createScopedAnimate = (scope) => {
  function scopedAnimate(valueOrElementOrSequence, keyframes3, options) {
    let animation;
    if (isSequence(valueOrElementOrSequence)) {
      animation = animateSequence(valueOrElementOrSequence, keyframes3, scope);
    } else if (isDOMKeyframes(keyframes3)) {
      animation = animateElements(valueOrElementOrSequence, keyframes3, options, scope);
    } else {
      animation = animateSingleValue(valueOrElementOrSequence, keyframes3, options);
    }
    if (scope) {
      scope.animations.push(animation);
    }
    return animation;
  }
  return scopedAnimate;
};
var animate = createScopedAnimate();

// node_modules/framer-motion/dist/es/utils/use-cycle.mjs
var import_react46 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/use-in-view.mjs
var import_react47 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/events/use-dom-event.mjs
var import_react48 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/use-instant-transition.mjs
var import_react49 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/projection/use-reset-projection.mjs
var React10 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/animation/hooks/use-animated-state.mjs
var import_react50 = __toESM(require_react(), 1);
var createObject = () => ({});
var useVisualState = makeUseVisualState({
  scrapeMotionValuesFromProps: createObject,
  createRenderState: createObject
});

// node_modules/framer-motion/dist/es/value/use-inverted-scale.mjs
var import_react51 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/components/AnimateSharedLayout.mjs
var React11 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/toast/dist/chunk-GQXYYJJJ.mjs
var import_react52 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var toastMotionVariants = {
  initial: (props) => {
    const { position: position2 } = props;
    const dir = ["top", "bottom"].includes(position2) ? "y" : "x";
    let factor = ["top-right", "bottom-right"].includes(position2) ? 1 : -1;
    if (position2 === "bottom")
      factor = 1;
    return {
      opacity: 0,
      [dir]: factor * 24
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
};
var ToastComponent = (0, import_react52.memo)((props) => {
  const {
    id: id4,
    message,
    onCloseComplete,
    onRequestRemove,
    requestClose = false,
    position: position2 = "bottom",
    duration = 5e3,
    containerStyle,
    motionVariants: motionVariants2 = toastMotionVariants,
    toastSpacing = "0.5rem"
  } = props;
  const [delay2, setDelay] = (0, import_react52.useState)(duration);
  const isPresent2 = useIsPresent();
  useUpdateEffect(() => {
    if (!isPresent2) {
      onCloseComplete == null ? void 0 : onCloseComplete();
    }
  }, [isPresent2]);
  useUpdateEffect(() => {
    setDelay(duration);
  }, [duration]);
  const onMouseEnter = () => setDelay(null);
  const onMouseLeave = () => setDelay(duration);
  const close = () => {
    if (isPresent2)
      onRequestRemove();
  };
  (0, import_react52.useEffect)(() => {
    if (isPresent2 && requestClose) {
      onRequestRemove();
    }
  }, [isPresent2, requestClose, onRequestRemove]);
  useTimeout(close, delay2);
  const containerStyles = (0, import_react52.useMemo)(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: toastSpacing,
      ...containerStyle
    }),
    [containerStyle, toastSpacing]
  );
  const toastStyle = (0, import_react52.useMemo)(() => getToastStyle(position2), [position2]);
  return (0, import_jsx_runtime6.jsx)(
    motion.li,
    {
      layout: true,
      className: "chakra-toast",
      variants: motionVariants2,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: onMouseEnter,
      onHoverEnd: onMouseLeave,
      custom: { position: position2 },
      style: toastStyle,
      children: (0, import_jsx_runtime6.jsx)(
        chakra.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: containerStyles,
          children: runIfFn(message, { id: id4, onClose: close })
        }
      )
    }
  );
});
ToastComponent.displayName = "ToastComponent";

// node_modules/@chakra-ui/toast/dist/chunk-F6QD4NSP.mjs
function getToastPlacement(position2, dir) {
  var _a2;
  const computedPosition = position2 != null ? position2 : "bottom";
  const logicals2 = {
    "top-start": { ltr: "top-left", rtl: "top-right" },
    "top-end": { ltr: "top-right", rtl: "top-left" },
    "bottom-start": { ltr: "bottom-left", rtl: "bottom-right" },
    "bottom-end": { ltr: "bottom-right", rtl: "bottom-left" }
  };
  const logical = logicals2[computedPosition];
  return (_a2 = logical == null ? void 0 : logical[dir]) != null ? _a2 : computedPosition;
}

// node_modules/@chakra-ui/alert/dist/chunk-R7JICMEA.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
function CheckIcon(props) {
  return (0, import_jsx_runtime7.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime7.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function InfoIcon(props) {
  return (0, import_jsx_runtime7.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime7.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function WarningIcon(props) {
  return (0, import_jsx_runtime7.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime7.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}

// node_modules/@chakra-ui/spinner/dist/chunk-NO6MRLPK.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var spin = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var Spinner = forwardRef((props, ref) => {
  const styles = useStyleConfig("Spinner", props);
  const {
    label = "Loading...",
    thickness = "2px",
    speed = "0.45s",
    emptyColor = "transparent",
    className,
    ...rest
  } = omitThemingProps(props);
  const _className = cx("chakra-spinner", className);
  const spinnerStyles = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: thickness,
    borderBottomColor: emptyColor,
    borderLeftColor: emptyColor,
    animation: `${spin} ${speed} linear infinite`,
    ...styles
  };
  return (0, import_jsx_runtime8.jsx)(
    chakra.div,
    {
      ref,
      __css: spinnerStyles,
      className: _className,
      ...rest,
      children: label && (0, import_jsx_runtime8.jsx)(chakra.span, { srOnly: true, children: label })
    }
  );
});
Spinner.displayName = "Spinner";

// node_modules/@chakra-ui/alert/dist/chunk-FZCW3KO4.mjs
var [AlertProvider, useAlertContext] = createContext({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
});
var [AlertStylesProvider, useAlertStyles] = createContext({
  name: `AlertStylesContext`,
  hookName: `useAlertStyles`,
  providerName: "<Alert />"
});
var STATUSES = {
  info: { icon: InfoIcon, colorScheme: "blue" },
  warning: { icon: WarningIcon, colorScheme: "orange" },
  success: { icon: CheckIcon, colorScheme: "green" },
  error: { icon: WarningIcon, colorScheme: "red" },
  loading: { icon: Spinner, colorScheme: "blue" }
};
function getStatusColorScheme(status) {
  return STATUSES[status].colorScheme;
}
function getStatusIcon(status) {
  return STATUSES[status].icon;
}

// node_modules/@chakra-ui/alert/dist/chunk-FBQ6TKVQ.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var AlertDescription = forwardRef(
  function AlertDescription2(props, ref) {
    const styles = useAlertStyles();
    const { status } = useAlertContext();
    const descriptionStyles = {
      display: "inline",
      ...styles.description
    };
    return (0, import_jsx_runtime9.jsx)(
      chakra.div,
      {
        ref,
        "data-status": status,
        ...props,
        className: cx("chakra-alert__desc", props.className),
        __css: descriptionStyles
      }
    );
  }
);
AlertDescription.displayName = "AlertDescription";

// node_modules/@chakra-ui/alert/dist/chunk-TEHNKISS.mjs
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
function AlertIcon(props) {
  const { status } = useAlertContext();
  const BaseIcon = getStatusIcon(status);
  const styles = useAlertStyles();
  const css3 = status === "loading" ? styles.spinner : styles.icon;
  return (0, import_jsx_runtime10.jsx)(
    chakra.span,
    {
      display: "inherit",
      "data-status": status,
      ...props,
      className: cx("chakra-alert__icon", props.className),
      __css: css3,
      children: props.children || (0, import_jsx_runtime10.jsx)(BaseIcon, { h: "100%", w: "100%" })
    }
  );
}
AlertIcon.displayName = "AlertIcon";

// node_modules/@chakra-ui/alert/dist/chunk-FRKYNQ2N.mjs
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var AlertTitle = forwardRef(
  function AlertTitle2(props, ref) {
    const styles = useAlertStyles();
    const { status } = useAlertContext();
    return (0, import_jsx_runtime11.jsx)(
      chakra.div,
      {
        ref,
        "data-status": status,
        ...props,
        className: cx("chakra-alert__title", props.className),
        __css: styles.title
      }
    );
  }
);
AlertTitle.displayName = "AlertTitle";

// node_modules/@chakra-ui/alert/dist/chunk-RWQIUCJP.mjs
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var Alert = forwardRef(function Alert2(props, ref) {
  var _a2;
  const { status = "info", addRole = true, ...rest } = omitThemingProps(props);
  const colorScheme = (_a2 = props.colorScheme) != null ? _a2 : getStatusColorScheme(status);
  const styles = useMultiStyleConfig("Alert", { ...props, colorScheme });
  const alertStyles = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...styles.container
  };
  return (0, import_jsx_runtime12.jsx)(AlertProvider, { value: { status }, children: (0, import_jsx_runtime12.jsx)(AlertStylesProvider, { value: styles, children: (0, import_jsx_runtime12.jsx)(
    chakra.div,
    {
      "data-status": status,
      role: addRole ? "alert" : void 0,
      ref,
      ...rest,
      className: cx("chakra-alert", props.className),
      __css: alertStyles
    }
  ) }) });
});
Alert.displayName = "Alert";

// node_modules/@chakra-ui/close-button/dist/chunk-DUEJD2BE.mjs
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
function CloseIcon(props) {
  return (0, import_jsx_runtime13.jsx)(Icon, { focusable: "false", "aria-hidden": true, ...props, children: (0, import_jsx_runtime13.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var CloseButton = forwardRef(
  function CloseButton2(props, ref) {
    const styles = useStyleConfig("CloseButton", props);
    const { children, isDisabled: isDisabled2, __css, ...rest } = omitThemingProps(props);
    const baseStyle2 = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return (0, import_jsx_runtime13.jsx)(
      chakra.button,
      {
        type: "button",
        "aria-label": "Close",
        ref,
        disabled: isDisabled2,
        __css: {
          ...baseStyle2,
          ...styles,
          ...__css
        },
        ...rest,
        children: children || (0, import_jsx_runtime13.jsx)(CloseIcon, { width: "1em", height: "1em" })
      }
    );
  }
);
CloseButton.displayName = "CloseButton";

// node_modules/@chakra-ui/toast/dist/chunk-PE6CKLNB.mjs
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var initialState = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
};
var toastStore = createStore(initialState);
function createStore(initialState2) {
  let state = initialState2;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (setStateFn) => {
    state = setStateFn(state);
    listeners.forEach((l) => l());
  };
  return {
    getState: () => state,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        setState(() => initialState2);
        listeners.delete(listener);
      };
    },
    removeToast: (id4, position2) => {
      setState((prevState) => ({
        ...prevState,
        [position2]: prevState[position2].filter((toast) => toast.id != id4)
      }));
    },
    notify: (message, options) => {
      const toast = createToast(message, options);
      const { position: position2, id: id4 } = toast;
      setState((prevToasts) => {
        var _a2, _b;
        const isTop = position2.includes("top");
        const toasts = isTop ? [toast, ...(_a2 = prevToasts[position2]) != null ? _a2 : []] : [...(_b = prevToasts[position2]) != null ? _b : [], toast];
        return {
          ...prevToasts,
          [position2]: toasts
        };
      });
      return id4;
    },
    update: (id4, options) => {
      if (!id4)
        return;
      setState((prevState) => {
        const nextState = { ...prevState };
        const { position: position2, index: index2 } = findToast(nextState, id4);
        if (position2 && index2 !== -1) {
          nextState[position2][index2] = {
            ...nextState[position2][index2],
            ...options,
            message: createRenderToast(options)
          };
        }
        return nextState;
      });
    },
    closeAll: ({ positions } = {}) => {
      setState((prev) => {
        const allPositions = [
          "bottom",
          "bottom-right",
          "bottom-left",
          "top",
          "top-left",
          "top-right"
        ];
        const positionsToClose = positions != null ? positions : allPositions;
        return positionsToClose.reduce(
          (acc, position2) => {
            acc[position2] = prev[position2].map((toast) => ({
              ...toast,
              requestClose: true
            }));
            return acc;
          },
          { ...prev }
        );
      });
    },
    close: (id4) => {
      setState((prevState) => {
        const position2 = getToastPosition(prevState, id4);
        if (!position2)
          return prevState;
        return {
          ...prevState,
          [position2]: prevState[position2].map((toast) => {
            if (toast.id == id4) {
              return {
                ...toast,
                requestClose: true
              };
            }
            return toast;
          })
        };
      });
    },
    isActive: (id4) => Boolean(findToast(toastStore.getState(), id4).position)
  };
}
var counter = 0;
function createToast(message, options = {}) {
  var _a2, _b;
  counter += 1;
  const id4 = (_a2 = options.id) != null ? _a2 : counter;
  const position2 = (_b = options.position) != null ? _b : "bottom";
  return {
    id: id4,
    message,
    position: position2,
    duration: options.duration,
    onCloseComplete: options.onCloseComplete,
    onRequestRemove: () => toastStore.removeToast(String(id4), position2),
    status: options.status,
    requestClose: false,
    containerStyle: options.containerStyle
  };
}
var Toast = (props) => {
  const {
    status,
    variant = "solid",
    id: id4,
    title,
    isClosable,
    onClose,
    description,
    colorScheme,
    icon
  } = props;
  const ids = id4 ? {
    root: `toast-${id4}`,
    title: `toast-${id4}-title`,
    description: `toast-${id4}-description`
  } : void 0;
  return (0, import_jsx_runtime14.jsxs)(
    Alert,
    {
      addRole: false,
      status,
      variant,
      id: ids == null ? void 0 : ids.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme,
      children: [
        (0, import_jsx_runtime14.jsx)(AlertIcon, { children: icon }),
        (0, import_jsx_runtime14.jsxs)(chakra.div, { flex: "1", maxWidth: "100%", children: [
          title && (0, import_jsx_runtime14.jsx)(AlertTitle, { id: ids == null ? void 0 : ids.title, children: title }),
          description && (0, import_jsx_runtime14.jsx)(AlertDescription, { id: ids == null ? void 0 : ids.description, display: "block", children: description })
        ] }),
        isClosable && (0, import_jsx_runtime14.jsx)(
          CloseButton,
          {
            size: "sm",
            onClick: onClose,
            position: "absolute",
            insetEnd: 1,
            top: 1
          }
        )
      ]
    }
  );
};
function createRenderToast(options = {}) {
  const { render, toastComponent: ToastComponent2 = Toast } = options;
  const renderToast = (props) => {
    if (typeof render === "function") {
      return render({ ...props, ...options });
    }
    return (0, import_jsx_runtime14.jsx)(ToastComponent2, { ...props, ...options });
  };
  return renderToast;
}
function createToastFn(dir, defaultOptions3) {
  const normalizeToastOptions = (options) => {
    var _a2;
    return {
      ...defaultOptions3,
      ...options,
      position: getToastPlacement(
        (_a2 = options == null ? void 0 : options.position) != null ? _a2 : defaultOptions3 == null ? void 0 : defaultOptions3.position,
        dir
      )
    };
  };
  const toast = (options) => {
    const normalizedToastOptions = normalizeToastOptions(options);
    const Message = createRenderToast(normalizedToastOptions);
    return toastStore.notify(Message, normalizedToastOptions);
  };
  toast.update = (id4, options) => {
    toastStore.update(id4, normalizeToastOptions(options));
  };
  toast.promise = (promise, options) => {
    const id4 = toast({
      ...options.loading,
      status: "loading",
      duration: null
    });
    promise.then(
      (data) => toast.update(id4, {
        status: "success",
        duration: 5e3,
        ...runIfFn(options.success, data)
      })
    ).catch(
      (error) => toast.update(id4, {
        status: "error",
        duration: 5e3,
        ...runIfFn(options.error, error)
      })
    );
  };
  toast.closeAll = toastStore.closeAll;
  toast.close = toastStore.close;
  toast.isActive = toastStore.isActive;
  return toast;
}

// node_modules/@chakra-ui/toast/dist/chunk-D3Z6CXO7.mjs
var import_react53 = __toESM(require_react(), 1);
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var [ToastOptionProvider, useToastOptionContext] = createContext({
  name: `ToastOptionsContext`,
  strict: false
});
var ToastProvider = (props) => {
  const state = (0, import_react53.useSyncExternalStore)(
    toastStore.subscribe,
    toastStore.getState,
    toastStore.getState
  );
  const {
    motionVariants: motionVariants2,
    component: Component2 = ToastComponent,
    portalProps
  } = props;
  const stateKeys = Object.keys(state);
  const toastList = stateKeys.map((position2) => {
    const toasts = state[position2];
    return (0, import_jsx_runtime15.jsx)(
      "ul",
      {
        role: "region",
        "aria-live": "polite",
        id: `chakra-toast-manager-${position2}`,
        style: getToastListStyle(position2),
        children: (0, import_jsx_runtime15.jsx)(AnimatePresence, { initial: false, children: toasts.map((toast) => (0, import_jsx_runtime15.jsx)(
          Component2,
          {
            motionVariants: motionVariants2,
            ...toast
          },
          toast.id
        )) })
      },
      position2
    );
  });
  return (0, import_jsx_runtime15.jsx)(Portal, { ...portalProps, children: toastList });
};

// node_modules/@chakra-ui/toast/dist/chunk-7FYWZXXG.mjs
var import_react54 = __toESM(require_react(), 1);
function useToast(options) {
  const { theme: theme2 } = useChakra();
  const defaultOptions3 = useToastOptionContext();
  return (0, import_react54.useMemo)(
    () => createToastFn(theme2.direction, {
      ...defaultOptions3,
      ...options
    }),
    [options, theme2.direction, defaultOptions3]
  );
}

// node_modules/@chakra-ui/toast/dist/chunk-F5UHYQF6.mjs
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var defaults = {
  duration: 5e3,
  variant: "solid"
};
var defaultStandaloneParam = {
  theme: src_default,
  colorMode: "light",
  toggleColorMode: () => {
  },
  setColorMode: () => {
  },
  defaultOptions: defaults,
  forced: false
};
function createStandaloneToast({
  theme: theme2 = defaultStandaloneParam.theme,
  colorMode = defaultStandaloneParam.colorMode,
  toggleColorMode = defaultStandaloneParam.toggleColorMode,
  setColorMode = defaultStandaloneParam.setColorMode,
  defaultOptions: defaultOptions3 = defaultStandaloneParam.defaultOptions,
  motionVariants: motionVariants2,
  toastSpacing,
  component,
  forced
} = defaultStandaloneParam) {
  const colorModeContextValue = {
    colorMode,
    setColorMode,
    toggleColorMode,
    forced
  };
  const ToastContainer = () => (0, import_jsx_runtime16.jsx)(ThemeProvider, { theme: theme2, children: (0, import_jsx_runtime16.jsx)(ColorModeContext.Provider, { value: colorModeContextValue, children: (0, import_jsx_runtime16.jsx)(
    ToastProvider,
    {
      defaultOptions: defaultOptions3,
      motionVariants: motionVariants2,
      toastSpacing,
      component
    }
  ) }) });
  return {
    ToastContainer,
    toast: createToastFn(theme2.direction, defaultOptions3)
  };
}

// node_modules/@chakra-ui/react/dist/chunk-DGNA6VRZ.mjs
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var createChakraProvider = (providerTheme) => {
  return function ChakraProvider22({
    children,
    theme: theme2 = providerTheme,
    toastOptions,
    ...restProps
  }) {
    return (0, import_jsx_runtime17.jsxs)(ChakraProvider, { theme: theme2, ...restProps, children: [
      (0, import_jsx_runtime17.jsx)(ToastOptionProvider, { value: toastOptions == null ? void 0 : toastOptions.defaultOptions, children }),
      (0, import_jsx_runtime17.jsx)(ToastProvider, { ...toastOptions })
    ] });
  };
};
var ChakraProvider2 = createChakraProvider(theme);
var ChakraBaseProvider = createChakraProvider(baseTheme);

// node_modules/@chakra-ui/descendant/dist/chunk-N7WDF4QK.mjs
var import_react55 = __toESM(require_react(), 1);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
function sortNodes(nodes) {
  return nodes.sort((a, b) => {
    const compare = a.compareDocumentPosition(b);
    if (compare & Node.DOCUMENT_POSITION_FOLLOWING || compare & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      return -1;
    }
    if (compare & Node.DOCUMENT_POSITION_PRECEDING || compare & Node.DOCUMENT_POSITION_CONTAINS) {
      return 1;
    }
    if (compare & Node.DOCUMENT_POSITION_DISCONNECTED || compare & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC) {
      throw Error("Cannot sort the given nodes.");
    } else {
      return 0;
    }
  });
}
var isElement = (el) => typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
function getNextIndex(current, max2, loop) {
  let next = current + 1;
  if (loop && next >= max2)
    next = 0;
  return next;
}
function getPrevIndex(current, max2, loop) {
  let next = current - 1;
  if (loop && next < 0)
    next = max2;
  return next;
}
var useSafeLayoutEffect2 = typeof window !== "undefined" ? import_react55.useLayoutEffect : import_react55.useEffect;
var cast = (value) => value;

// node_modules/@chakra-ui/descendant/dist/chunk-P6SLLHUK.mjs
var DescendantsManager = class {
  constructor() {
    __publicField(this, "descendants", /* @__PURE__ */ new Map());
    __publicField(this, "register", (nodeOrOptions) => {
      if (nodeOrOptions == null)
        return;
      if (isElement(nodeOrOptions)) {
        return this.registerNode(nodeOrOptions);
      }
      return (node2) => {
        this.registerNode(node2, nodeOrOptions);
      };
    });
    __publicField(this, "unregister", (node2) => {
      this.descendants.delete(node2);
      const sorted = sortNodes(Array.from(this.descendants.keys()));
      this.assignIndex(sorted);
    });
    __publicField(this, "destroy", () => {
      this.descendants.clear();
    });
    __publicField(this, "assignIndex", (descendants) => {
      this.descendants.forEach((descendant) => {
        const index2 = descendants.indexOf(descendant.node);
        descendant.index = index2;
        descendant.node.dataset["index"] = descendant.index.toString();
      });
    });
    __publicField(this, "count", () => this.descendants.size);
    __publicField(this, "enabledCount", () => this.enabledValues().length);
    __publicField(this, "values", () => {
      const values = Array.from(this.descendants.values());
      return values.sort((a, b) => a.index - b.index);
    });
    __publicField(this, "enabledValues", () => {
      return this.values().filter((descendant) => !descendant.disabled);
    });
    __publicField(this, "item", (index2) => {
      if (this.count() === 0)
        return void 0;
      return this.values()[index2];
    });
    __publicField(this, "enabledItem", (index2) => {
      if (this.enabledCount() === 0)
        return void 0;
      return this.enabledValues()[index2];
    });
    __publicField(this, "first", () => this.item(0));
    __publicField(this, "firstEnabled", () => this.enabledItem(0));
    __publicField(this, "last", () => this.item(this.descendants.size - 1));
    __publicField(this, "lastEnabled", () => {
      const lastIndex = this.enabledValues().length - 1;
      return this.enabledItem(lastIndex);
    });
    __publicField(this, "indexOf", (node2) => {
      var _a2, _b;
      if (!node2)
        return -1;
      return (_b = (_a2 = this.descendants.get(node2)) == null ? void 0 : _a2.index) != null ? _b : -1;
    });
    __publicField(this, "enabledIndexOf", (node2) => {
      if (node2 == null)
        return -1;
      return this.enabledValues().findIndex((i) => i.node.isSameNode(node2));
    });
    __publicField(this, "next", (index2, loop = true) => {
      const next = getNextIndex(index2, this.count(), loop);
      return this.item(next);
    });
    __publicField(this, "nextEnabled", (index2, loop = true) => {
      const item = this.item(index2);
      if (!item)
        return;
      const enabledIndex = this.enabledIndexOf(item.node);
      const nextEnabledIndex = getNextIndex(
        enabledIndex,
        this.enabledCount(),
        loop
      );
      return this.enabledItem(nextEnabledIndex);
    });
    __publicField(this, "prev", (index2, loop = true) => {
      const prev = getPrevIndex(index2, this.count() - 1, loop);
      return this.item(prev);
    });
    __publicField(this, "prevEnabled", (index2, loop = true) => {
      const item = this.item(index2);
      if (!item)
        return;
      const enabledIndex = this.enabledIndexOf(item.node);
      const prevEnabledIndex = getPrevIndex(
        enabledIndex,
        this.enabledCount() - 1,
        loop
      );
      return this.enabledItem(prevEnabledIndex);
    });
    __publicField(this, "registerNode", (node2, options) => {
      if (!node2 || this.descendants.has(node2))
        return;
      const keys = Array.from(this.descendants.keys()).concat(node2);
      const sorted = sortNodes(keys);
      if (options == null ? void 0 : options.disabled) {
        options.disabled = !!options.disabled;
      }
      const descendant = { node: node2, index: -1, ...options };
      this.descendants.set(node2, descendant);
      this.assignIndex(sorted);
    });
  }
};

// node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs
var import_react56 = __toESM(require_react(), 1);
function assignRef(ref, value) {
  if (ref == null)
    return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
function mergeRefs(...refs) {
  return (node2) => {
    refs.forEach((ref) => {
      assignRef(ref, node2);
    });
  };
}
function useMergeRefs(...refs) {
  return (0, import_react56.useMemo)(() => mergeRefs(...refs), refs);
}

// node_modules/@chakra-ui/descendant/dist/chunk-D5UZ3RNN.mjs
var import_react57 = __toESM(require_react(), 1);
function useDescendants() {
  const descendants = (0, import_react57.useRef)(new DescendantsManager());
  useSafeLayoutEffect2(() => {
    return () => descendants.current.destroy();
  });
  return descendants.current;
}
var [DescendantsContextProvider, useDescendantsContext] = createContext({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function useDescendant(options) {
  const descendants = useDescendantsContext();
  const [index2, setIndex] = (0, import_react57.useState)(-1);
  const ref = (0, import_react57.useRef)(null);
  useSafeLayoutEffect2(() => {
    return () => {
      if (!ref.current)
        return;
      descendants.unregister(ref.current);
    };
  }, []);
  useSafeLayoutEffect2(() => {
    if (!ref.current)
      return;
    const dataIndex = Number(ref.current.dataset["index"]);
    if (index2 != dataIndex && !Number.isNaN(dataIndex)) {
      setIndex(dataIndex);
    }
  });
  const refCallback = options ? cast(descendants.register(options)) : cast(descendants.register);
  return {
    descendants,
    index: index2,
    enabledIndex: descendants.enabledIndexOf(ref.current),
    register: mergeRefs(refCallback, ref)
  };
}
function createDescendantContext() {
  const ContextProvider = cast(DescendantsContextProvider);
  const _useDescendantsContext = () => cast(useDescendantsContext());
  const _useDescendant = (options) => useDescendant(options);
  const _useDescendants = () => useDescendants();
  return [
    ContextProvider,
    _useDescendantsContext,
    _useDescendants,
    _useDescendant
  ];
}

// node_modules/@chakra-ui/accordion/dist/chunk-JST25EWU.mjs
var [AccordionStylesProvider, useAccordionStyles] = createContext({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
});
var [AccordionItemProvider, useAccordionItemContext] = createContext({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
});
var [
  AccordionDescendantsProvider,
  useAccordionDescendantsContext,
  useAccordionDescendants,
  useAccordionDescendant
] = createDescendantContext();

// node_modules/@chakra-ui/accordion/dist/chunk-APVWO53B.mjs
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var AccordionButton = forwardRef(
  function AccordionButton2(props, ref) {
    const { getButtonProps } = useAccordionItemContext();
    const buttonProps = getButtonProps(props, ref);
    const styles = useAccordionStyles();
    const buttonStyles = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...styles.button
    };
    return (0, import_jsx_runtime18.jsx)(
      chakra.button,
      {
        ...buttonProps,
        className: cx("chakra-accordion__button", props.className),
        __css: buttonStyles
      }
    );
  }
);
AccordionButton.displayName = "AccordionButton";

// node_modules/@chakra-ui/react-use-controllable-state/dist/index.mjs
var import_react58 = __toESM(require_react(), 1);
function useControllableState(props) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    shouldUpdate = (prev, next) => prev !== next
  } = props;
  const onChangeProp = useCallbackRef(onChange);
  const shouldUpdateProp = useCallbackRef(shouldUpdate);
  const [uncontrolledState, setUncontrolledState] = (0, import_react58.useState)(defaultValue);
  const controlled = valueProp !== void 0;
  const value = controlled ? valueProp : uncontrolledState;
  const setValue = useCallbackRef(
    (next) => {
      const setter = next;
      const nextValue = typeof next === "function" ? setter(value) : next;
      if (!shouldUpdateProp(value, nextValue)) {
        return;
      }
      if (!controlled) {
        setUncontrolledState(nextValue);
      }
      onChangeProp(nextValue);
    },
    [controlled, onChangeProp, value, shouldUpdateProp]
  );
  return [value, setValue];
}

// node_modules/@chakra-ui/accordion/dist/chunk-JDQBKIKM.mjs
var import_react59 = __toESM(require_react(), 1);
function useAccordion(props) {
  const {
    onChange,
    defaultIndex,
    index: indexProp,
    allowMultiple,
    allowToggle,
    ...htmlProps
  } = props;
  allowMultipleWarning(props);
  allowMultipleAndAllowToggleWarning(props);
  const descendants = useAccordionDescendants();
  const [focusedIndex, setFocusedIndex] = (0, import_react59.useState)(-1);
  (0, import_react59.useEffect)(() => {
    return () => {
      setFocusedIndex(-1);
    };
  }, []);
  const [index2, setIndex] = useControllableState({
    value: indexProp,
    defaultValue() {
      if (allowMultiple)
        return defaultIndex != null ? defaultIndex : [];
      return defaultIndex != null ? defaultIndex : -1;
    },
    onChange
  });
  const getAccordionItemProps = (idx) => {
    let isOpen = false;
    if (idx !== null) {
      isOpen = Array.isArray(index2) ? index2.includes(idx) : index2 === idx;
    }
    const onChange2 = (isOpen2) => {
      if (idx === null)
        return;
      if (allowMultiple && Array.isArray(index2)) {
        const nextState = isOpen2 ? index2.concat(idx) : index2.filter((i) => i !== idx);
        setIndex(nextState);
      } else if (isOpen2) {
        setIndex(idx);
      } else if (allowToggle) {
        setIndex(-1);
      }
    };
    return { isOpen, onChange: onChange2 };
  };
  return {
    index: index2,
    setIndex,
    htmlProps,
    getAccordionItemProps,
    focusedIndex,
    setFocusedIndex,
    descendants
  };
}
var [AccordionProvider, useAccordionContext] = createContext({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "Accordion"
});
function useAccordionItem(props) {
  const { isDisabled: isDisabled2, isFocusable: isFocusable2, id: id4, ...htmlProps } = props;
  const { getAccordionItemProps, setFocusedIndex } = useAccordionContext();
  const buttonRef = (0, import_react59.useRef)(null);
  const reactId = (0, import_react59.useId)();
  const uid = id4 != null ? id4 : reactId;
  const buttonId = `accordion-button-${uid}`;
  const panelId = `accordion-panel-${uid}`;
  focusableNotDisabledWarning(props);
  const { register, index: index2, descendants } = useAccordionDescendant({
    disabled: isDisabled2 && !isFocusable2
  });
  const { isOpen, onChange } = getAccordionItemProps(
    index2 === -1 ? null : index2
  );
  warnIfOpenAndDisabled({ isOpen, isDisabled: isDisabled2 });
  const onOpen = () => {
    onChange == null ? void 0 : onChange(true);
  };
  const onClose = () => {
    onChange == null ? void 0 : onChange(false);
  };
  const onClick = (0, import_react59.useCallback)(() => {
    onChange == null ? void 0 : onChange(!isOpen);
    setFocusedIndex(index2);
  }, [index2, setFocusedIndex, isOpen, onChange]);
  const onKeyDown = (0, import_react59.useCallback)(
    (event) => {
      const keyMap = {
        ArrowDown: () => {
          const next = descendants.nextEnabled(index2);
          next == null ? void 0 : next.node.focus();
        },
        ArrowUp: () => {
          const prev = descendants.prevEnabled(index2);
          prev == null ? void 0 : prev.node.focus();
        },
        Home: () => {
          const first = descendants.firstEnabled();
          first == null ? void 0 : first.node.focus();
        },
        End: () => {
          const last = descendants.lastEnabled();
          last == null ? void 0 : last.node.focus();
        }
      };
      const action = keyMap[event.key];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [descendants, index2]
  );
  const onFocus3 = (0, import_react59.useCallback)(() => {
    setFocusedIndex(index2);
  }, [setFocusedIndex, index2]);
  const getButtonProps = (0, import_react59.useCallback)(
    function getButtonProps2(props2 = {}, ref = null) {
      return {
        ...props2,
        type: "button",
        ref: mergeRefs(register, buttonRef, ref),
        id: buttonId,
        disabled: !!isDisabled2,
        "aria-expanded": !!isOpen,
        "aria-controls": panelId,
        onClick: callAllHandlers(props2.onClick, onClick),
        onFocus: callAllHandlers(props2.onFocus, onFocus3),
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown)
      };
    },
    [
      buttonId,
      isDisabled2,
      isOpen,
      onClick,
      onFocus3,
      onKeyDown,
      panelId,
      register
    ]
  );
  const getPanelProps = (0, import_react59.useCallback)(
    function getPanelProps2(props2 = {}, ref = null) {
      return {
        ...props2,
        ref,
        role: "region",
        id: panelId,
        "aria-labelledby": buttonId,
        hidden: !isOpen
      };
    },
    [buttonId, isOpen, panelId]
  );
  return {
    isOpen,
    isDisabled: isDisabled2,
    isFocusable: isFocusable2,
    onOpen,
    onClose,
    getButtonProps,
    getPanelProps,
    htmlProps
  };
}
function allowMultipleWarning(props) {
  const index2 = props.index || props.defaultIndex;
  const condition = index2 != null && !Array.isArray(index2) && props.allowMultiple;
  warn({
    condition: !!condition,
    message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof index2},`
  });
}
function allowMultipleAndAllowToggleWarning(props) {
  warn({
    condition: !!(props.allowMultiple && props.allowToggle),
    message: `If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not`
  });
}
function focusableNotDisabledWarning(props) {
  warn({
    condition: !!(props.isFocusable && !props.isDisabled),
    message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
  });
}
function warnIfOpenAndDisabled(props) {
  warn({
    condition: props.isOpen && !!props.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}

// node_modules/@chakra-ui/accordion/dist/chunk-IXS34X2E.mjs
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
function AccordionIcon(props) {
  const { isOpen, isDisabled: isDisabled2 } = useAccordionItemContext();
  const { reduceMotion } = useAccordionContext();
  const _className = cx("chakra-accordion__icon", props.className);
  const styles = useAccordionStyles();
  const iconStyles = {
    opacity: isDisabled2 ? 0.4 : 1,
    transform: isOpen ? "rotate(-180deg)" : void 0,
    transition: reduceMotion ? void 0 : "transform 0.2s",
    transformOrigin: "center",
    ...styles.icon
  };
  return (0, import_jsx_runtime19.jsx)(
    Icon,
    {
      viewBox: "0 0 24 24",
      "aria-hidden": true,
      className: _className,
      __css: iconStyles,
      ...props,
      children: (0, import_jsx_runtime19.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        }
      )
    }
  );
}
AccordionIcon.displayName = "AccordionIcon";

// node_modules/@chakra-ui/accordion/dist/chunk-I3JYRBXX.mjs
var import_react60 = __toESM(require_react(), 1);
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var AccordionItem = forwardRef(
  function AccordionItem2(props, ref) {
    const { children, className } = props;
    const { htmlProps, ...context } = useAccordionItem(props);
    const styles = useAccordionStyles();
    const containerStyles = {
      ...styles.container,
      overflowAnchor: "none"
    };
    const ctx = (0, import_react60.useMemo)(() => context, [context]);
    return (0, import_jsx_runtime20.jsx)(AccordionItemProvider, { value: ctx, children: (0, import_jsx_runtime20.jsx)(
      chakra.div,
      {
        ref,
        ...htmlProps,
        className: cx("chakra-accordion__item", className),
        __css: containerStyles,
        children: typeof children === "function" ? children({
          isExpanded: !!context.isOpen,
          isDisabled: !!context.isDisabled
        }) : children
      }
    ) });
  }
);
AccordionItem.displayName = "AccordionItem";

// node_modules/@chakra-ui/transition/dist/chunk-LB6CWFOC.mjs
var TRANSITION_EASINGS = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
};
var TRANSITION_VARIANTS = {
  scale: {
    enter: { scale: 1 },
    exit: { scale: 0.95 }
  },
  fade: {
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  },
  pushLeft: {
    enter: { x: "100%" },
    exit: { x: "-30%" }
  },
  pushRight: {
    enter: { x: "-100%" },
    exit: { x: "30%" }
  },
  pushUp: {
    enter: { y: "100%" },
    exit: { y: "-30%" }
  },
  pushDown: {
    enter: { y: "-100%" },
    exit: { y: "30%" }
  },
  slideLeft: {
    position: { left: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "-100%", y: 0 }
  },
  slideRight: {
    position: { right: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "100%", y: 0 }
  },
  slideUp: {
    position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "-100%" }
  },
  slideDown: {
    position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "100%" }
  }
};
function getSlideTransition(options) {
  var _a2;
  const side = (_a2 = options == null ? void 0 : options.direction) != null ? _a2 : "right";
  switch (side) {
    case "right":
      return TRANSITION_VARIANTS.slideRight;
    case "left":
      return TRANSITION_VARIANTS.slideLeft;
    case "bottom":
      return TRANSITION_VARIANTS.slideDown;
    case "top":
      return TRANSITION_VARIANTS.slideUp;
    default:
      return TRANSITION_VARIANTS.slideRight;
  }
}
var TRANSITION_DEFAULTS = {
  enter: {
    duration: 0.2,
    ease: TRANSITION_EASINGS.easeOut
  },
  exit: {
    duration: 0.1,
    ease: TRANSITION_EASINGS.easeIn
  }
};
var withDelay = {
  enter: (transition2, delay2) => ({
    ...transition2,
    delay: typeof delay2 === "number" ? delay2 : delay2 == null ? void 0 : delay2["enter"]
  }),
  exit: (transition2, delay2) => ({
    ...transition2,
    delay: typeof delay2 === "number" ? delay2 : delay2 == null ? void 0 : delay2["exit"]
  })
};

// node_modules/@chakra-ui/transition/dist/chunk-LRMLOJAR.mjs
var import_react61 = __toESM(require_react(), 1);
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var isNumeric = (value) => value != null && parseInt(value.toString(), 10) > 0;
var defaultTransitions = {
  exit: {
    height: { duration: 0.2, ease: TRANSITION_EASINGS.ease },
    opacity: { duration: 0.3, ease: TRANSITION_EASINGS.ease }
  },
  enter: {
    height: { duration: 0.3, ease: TRANSITION_EASINGS.ease },
    opacity: { duration: 0.4, ease: TRANSITION_EASINGS.ease }
  }
};
var variants = {
  exit: ({
    animateOpacity,
    startingHeight,
    transition: transition2,
    transitionEnd,
    delay: delay2
  }) => {
    var _a2;
    return {
      ...animateOpacity && { opacity: isNumeric(startingHeight) ? 1 : 0 },
      height: startingHeight,
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit,
      transition: (_a2 = transition2 == null ? void 0 : transition2.exit) != null ? _a2 : withDelay.exit(defaultTransitions.exit, delay2)
    };
  },
  enter: ({
    animateOpacity,
    endingHeight,
    transition: transition2,
    transitionEnd,
    delay: delay2
  }) => {
    var _a2;
    return {
      ...animateOpacity && { opacity: 1 },
      height: endingHeight,
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter,
      transition: (_a2 = transition2 == null ? void 0 : transition2.enter) != null ? _a2 : withDelay.enter(defaultTransitions.enter, delay2)
    };
  }
};
var Collapse = (0, import_react61.forwardRef)(
  (props, ref) => {
    const {
      in: isOpen,
      unmountOnExit,
      animateOpacity = true,
      startingHeight = 0,
      endingHeight = "auto",
      style,
      className,
      transition: transition2,
      transitionEnd,
      ...rest
    } = props;
    const [mounted, setMounted] = (0, import_react61.useState)(false);
    (0, import_react61.useEffect)(() => {
      const timeout = setTimeout(() => {
        setMounted(true);
      });
      return () => clearTimeout(timeout);
    }, []);
    warn({
      condition: Number(startingHeight) > 0 && !!unmountOnExit,
      message: `startingHeight and unmountOnExit are mutually exclusive. You can't use them together`
    });
    const hasStartingHeight = parseFloat(startingHeight.toString()) > 0;
    const custom = {
      startingHeight,
      endingHeight,
      animateOpacity,
      transition: !mounted ? { enter: { duration: 0 } } : transition2,
      transitionEnd: {
        enter: transitionEnd == null ? void 0 : transitionEnd.enter,
        exit: unmountOnExit ? transitionEnd == null ? void 0 : transitionEnd.exit : {
          ...transitionEnd == null ? void 0 : transitionEnd.exit,
          display: hasStartingHeight ? "block" : "none"
        }
      }
    };
    const show = unmountOnExit ? isOpen : true;
    const animate2 = isOpen || unmountOnExit ? "enter" : "exit";
    return (0, import_jsx_runtime21.jsx)(AnimatePresence, { initial: false, custom, children: show && (0, import_jsx_runtime21.jsx)(
      motion.div,
      {
        ref,
        ...rest,
        className: cx("chakra-collapse", className),
        style: {
          overflow: "hidden",
          display: "block",
          ...style
        },
        custom,
        variants,
        initial: unmountOnExit ? "exit" : false,
        animate: animate2,
        exit: "exit"
      }
    ) });
  }
);
Collapse.displayName = "Collapse";

// node_modules/@chakra-ui/transition/dist/chunk-NBEP2PWU.mjs
var import_react62 = __toESM(require_react(), 1);
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var variants2 = {
  enter: ({ transition: transition2, transitionEnd, delay: delay2 } = {}) => {
    var _a2;
    return {
      opacity: 1,
      transition: (_a2 = transition2 == null ? void 0 : transition2.enter) != null ? _a2 : withDelay.enter(TRANSITION_DEFAULTS.enter, delay2),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  },
  exit: ({ transition: transition2, transitionEnd, delay: delay2 } = {}) => {
    var _a2;
    return {
      opacity: 0,
      transition: (_a2 = transition2 == null ? void 0 : transition2.exit) != null ? _a2 : withDelay.exit(TRANSITION_DEFAULTS.exit, delay2),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    };
  }
};
var fadeConfig = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: variants2
};
var Fade = (0, import_react62.forwardRef)(function Fade2(props, ref) {
  const {
    unmountOnExit,
    in: isOpen,
    className,
    transition: transition2,
    transitionEnd,
    delay: delay2,
    ...rest
  } = props;
  const animate2 = isOpen || unmountOnExit ? "enter" : "exit";
  const show = unmountOnExit ? isOpen && unmountOnExit : true;
  const custom = { transition: transition2, transitionEnd, delay: delay2 };
  return (0, import_jsx_runtime22.jsx)(AnimatePresence, { custom, children: show && (0, import_jsx_runtime22.jsx)(
    motion.div,
    {
      ref,
      className: cx("chakra-fade", className),
      custom,
      ...fadeConfig,
      animate: animate2,
      ...rest
    }
  ) });
});
Fade.displayName = "Fade";

// node_modules/@chakra-ui/transition/dist/chunk-462CPKWM.mjs
var import_react63 = __toESM(require_react(), 1);
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var variants3 = {
  exit: ({ reverse, initialScale, transition: transition2, transitionEnd, delay: delay2 }) => {
    var _a2;
    return {
      opacity: 0,
      ...reverse ? { scale: initialScale, transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit } : { transitionEnd: { scale: initialScale, ...transitionEnd == null ? void 0 : transitionEnd.exit } },
      transition: (_a2 = transition2 == null ? void 0 : transition2.exit) != null ? _a2 : withDelay.exit(TRANSITION_DEFAULTS.exit, delay2)
    };
  },
  enter: ({ transitionEnd, transition: transition2, delay: delay2 }) => {
    var _a2;
    return {
      opacity: 1,
      scale: 1,
      transition: (_a2 = transition2 == null ? void 0 : transition2.enter) != null ? _a2 : withDelay.enter(TRANSITION_DEFAULTS.enter, delay2),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  }
};
var scaleFadeConfig = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: variants3
};
var ScaleFade = (0, import_react63.forwardRef)(
  function ScaleFade2(props, ref) {
    const {
      unmountOnExit,
      in: isOpen,
      reverse = true,
      initialScale = 0.95,
      className,
      transition: transition2,
      transitionEnd,
      delay: delay2,
      ...rest
    } = props;
    const show = unmountOnExit ? isOpen && unmountOnExit : true;
    const animate2 = isOpen || unmountOnExit ? "enter" : "exit";
    const custom = { initialScale, reverse, transition: transition2, transitionEnd, delay: delay2 };
    return (0, import_jsx_runtime23.jsx)(AnimatePresence, { custom, children: show && (0, import_jsx_runtime23.jsx)(
      motion.div,
      {
        ref,
        className: cx("chakra-offset-slide", className),
        ...scaleFadeConfig,
        animate: animate2,
        custom,
        ...rest
      }
    ) });
  }
);
ScaleFade.displayName = "ScaleFade";

// node_modules/@chakra-ui/transition/dist/chunk-Z2TCYYTS.mjs
var import_react64 = __toESM(require_react(), 1);
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var variants4 = {
  initial: ({ offsetX, offsetY, transition: transition2, transitionEnd, delay: delay2 }) => {
    var _a2;
    return {
      opacity: 0,
      x: offsetX,
      y: offsetY,
      transition: (_a2 = transition2 == null ? void 0 : transition2.exit) != null ? _a2 : withDelay.exit(TRANSITION_DEFAULTS.exit, delay2),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    };
  },
  enter: ({ transition: transition2, transitionEnd, delay: delay2 }) => {
    var _a2;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (_a2 = transition2 == null ? void 0 : transition2.enter) != null ? _a2 : withDelay.enter(TRANSITION_DEFAULTS.enter, delay2),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  },
  exit: ({ offsetY, offsetX, transition: transition2, transitionEnd, reverse, delay: delay2 }) => {
    var _a2;
    const offset2 = { x: offsetX, y: offsetY };
    return {
      opacity: 0,
      transition: (_a2 = transition2 == null ? void 0 : transition2.exit) != null ? _a2 : withDelay.exit(TRANSITION_DEFAULTS.exit, delay2),
      ...reverse ? { ...offset2, transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit } : { transitionEnd: { ...offset2, ...transitionEnd == null ? void 0 : transitionEnd.exit } }
    };
  }
};
var slideFadeConfig = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: variants4
};
var SlideFade = (0, import_react64.forwardRef)(
  function SlideFade2(props, ref) {
    const {
      unmountOnExit,
      in: isOpen,
      reverse = true,
      className,
      offsetX = 0,
      offsetY = 8,
      transition: transition2,
      transitionEnd,
      delay: delay2,
      ...rest
    } = props;
    const show = unmountOnExit ? isOpen && unmountOnExit : true;
    const animate2 = isOpen || unmountOnExit ? "enter" : "exit";
    const custom = {
      offsetX,
      offsetY,
      reverse,
      transition: transition2,
      transitionEnd,
      delay: delay2
    };
    return (0, import_jsx_runtime24.jsx)(AnimatePresence, { custom, children: show && (0, import_jsx_runtime24.jsx)(
      motion.div,
      {
        ref,
        className: cx("chakra-offset-slide", className),
        custom,
        ...slideFadeConfig,
        animate: animate2,
        ...rest
      }
    ) });
  }
);
SlideFade.displayName = "SlideFade";

// node_modules/@chakra-ui/transition/dist/chunk-D35G6FNO.mjs
var import_react65 = __toESM(require_react(), 1);
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
var defaultTransition = {
  exit: {
    duration: 0.15,
    ease: TRANSITION_EASINGS.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
};
var variants5 = {
  exit: ({ direction, transition: transition2, transitionEnd, delay: delay2 }) => {
    var _a2;
    const { exit: exitStyles } = getSlideTransition({ direction });
    return {
      ...exitStyles,
      transition: (_a2 = transition2 == null ? void 0 : transition2.exit) != null ? _a2 : withDelay.exit(defaultTransition.exit, delay2),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    };
  },
  enter: ({ direction, transitionEnd, transition: transition2, delay: delay2 }) => {
    var _a2;
    const { enter: enterStyles } = getSlideTransition({ direction });
    return {
      ...enterStyles,
      transition: (_a2 = transition2 == null ? void 0 : transition2.enter) != null ? _a2 : withDelay.enter(defaultTransition.enter, delay2),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  }
};
var Slide = (0, import_react65.forwardRef)(function Slide2(props, ref) {
  const {
    direction = "right",
    style,
    unmountOnExit,
    in: isOpen,
    className,
    transition: transition2,
    transitionEnd,
    delay: delay2,
    motionProps,
    ...rest
  } = props;
  const transitionStyles = getSlideTransition({ direction });
  const computedStyle = Object.assign(
    { position: "fixed" },
    transitionStyles.position,
    style
  );
  const show = unmountOnExit ? isOpen && unmountOnExit : true;
  const animate2 = isOpen || unmountOnExit ? "enter" : "exit";
  const custom = { transitionEnd, transition: transition2, direction, delay: delay2 };
  return (0, import_jsx_runtime25.jsx)(AnimatePresence, { custom, children: show && (0, import_jsx_runtime25.jsx)(
    motion.div,
    {
      ...rest,
      ref,
      initial: "exit",
      className: cx("chakra-slide", className),
      animate: animate2,
      exit: "exit",
      custom,
      variants: variants5,
      style: computedStyle,
      ...motionProps
    }
  ) });
});
Slide.displayName = "Slide";

// node_modules/@chakra-ui/accordion/dist/chunk-WA4Q3J7T.mjs
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var AccordionPanel = forwardRef(
  function AccordionPanel2(props, ref) {
    const { className, motionProps, ...rest } = props;
    const { reduceMotion } = useAccordionContext();
    const { getPanelProps, isOpen } = useAccordionItemContext();
    const panelProps = getPanelProps(rest, ref);
    const _className = cx("chakra-accordion__panel", className);
    const styles = useAccordionStyles();
    if (!reduceMotion) {
      delete panelProps.hidden;
    }
    const child = (0, import_jsx_runtime26.jsx)(chakra.div, { ...panelProps, __css: styles.panel, className: _className });
    if (!reduceMotion) {
      return (0, import_jsx_runtime26.jsx)(Collapse, { in: isOpen, ...motionProps, children: child });
    }
    return child;
  }
);
AccordionPanel.displayName = "AccordionPanel";

// node_modules/@chakra-ui/accordion/dist/chunk-3VH7AMBV.mjs
var import_react66 = __toESM(require_react(), 1);
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var Accordion = forwardRef(function Accordion2({ children, reduceMotion, ...props }, ref) {
  const styles = useMultiStyleConfig("Accordion", props);
  const ownProps = omitThemingProps(props);
  const { htmlProps, descendants, ...context } = useAccordion(ownProps);
  const ctx = (0, import_react66.useMemo)(
    () => ({ ...context, reduceMotion: !!reduceMotion }),
    [context, reduceMotion]
  );
  return (0, import_jsx_runtime27.jsx)(AccordionDescendantsProvider, { value: descendants, children: (0, import_jsx_runtime27.jsx)(AccordionProvider, { value: ctx, children: (0, import_jsx_runtime27.jsx)(AccordionStylesProvider, { value: styles, children: (0, import_jsx_runtime27.jsx)(
    chakra.div,
    {
      ref,
      ...htmlProps,
      className: cx("chakra-accordion", props.className),
      __css: styles.root,
      children
    }
  ) }) }) });
});
Accordion.displayName = "Accordion";

// node_modules/@chakra-ui/accordion/dist/chunk-UN5JZMTF.mjs
function useAccordionItemState() {
  const { isOpen, isDisabled: isDisabled2, onClose, onOpen } = useAccordionItemContext();
  return { isOpen, onClose, isDisabled: isDisabled2, onOpen };
}

// node_modules/@chakra-ui/avatar/dist/chunk-QVBG3QXJ.mjs
var [AvatarStylesProvider, useAvatarStyles] = createContext({
  name: `AvatarStylesContext`,
  hookName: `useAvatarStyles`,
  providerName: "<Avatar/>"
});

// node_modules/@chakra-ui/avatar/dist/chunk-2RQKHYD2.mjs
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var placementMap = {
  "top-start": {
    top: "0",
    insetStart: "0",
    transform: "translate(-25%, -25%)"
  },
  "top-end": {
    top: "0",
    insetEnd: "0",
    transform: "translate(25%, -25%)"
  },
  "bottom-start": {
    bottom: "0",
    insetStart: "0",
    transform: "translate(-25%, 25%)"
  },
  "bottom-end": {
    bottom: "0",
    insetEnd: "0",
    transform: "translate(25%, 25%)"
  }
};
var AvatarBadge = forwardRef(
  function AvatarBadge2(props, ref) {
    const { placement = "bottom-end", className, ...rest } = props;
    const styles = useAvatarStyles();
    const placementStyles = placementMap[placement];
    const badgeStyles = {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...placementStyles,
      ...styles.badge
    };
    return (0, import_jsx_runtime28.jsx)(
      chakra.div,
      {
        ref,
        ...rest,
        className: cx("chakra-avatar__badge", className),
        __css: badgeStyles
      }
    );
  }
);
AvatarBadge.displayName = "AvatarBadge";

// node_modules/@chakra-ui/avatar/dist/chunk-XLTSJSZV.mjs
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
function initials(name) {
  const [firstName, lastName] = name.split(" ");
  return firstName && lastName ? `${firstName.charAt(0)}${lastName.charAt(0)}` : firstName.charAt(0);
}
function AvatarName(props) {
  const { name, getInitials, ...rest } = props;
  const styles = useAvatarStyles();
  return (0, import_jsx_runtime29.jsx)(chakra.div, { role: "img", "aria-label": name, ...rest, __css: styles.label, children: name ? getInitials == null ? void 0 : getInitials(name) : null });
}
AvatarName.displayName = "AvatarName";

// node_modules/@chakra-ui/avatar/dist/chunk-ZXZNYCCD.mjs
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var GenericAvatarIcon = (props) => (0, import_jsx_runtime30.jsxs)(
  chakra.svg,
  {
    viewBox: "0 0 128 128",
    color: "#fff",
    width: "100%",
    height: "100%",
    className: "chakra-avatar__svg",
    ...props,
    children: [
      (0, import_jsx_runtime30.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
        }
      ),
      (0, import_jsx_runtime30.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
        }
      )
    ]
  }
);

// node_modules/@chakra-ui/image/dist/chunk-QBIO4VEB.mjs
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var NativeImage = forwardRef(function NativeImage2(props, ref) {
  const { htmlWidth, htmlHeight, alt, ...rest } = props;
  return (0, import_jsx_runtime31.jsx)("img", { width: htmlWidth, height: htmlHeight, ref, alt, ...rest });
});
NativeImage.displayName = "NativeImage";

// node_modules/@chakra-ui/image/dist/chunk-HR33I6FK.mjs
var import_react67 = __toESM(require_react(), 1);
function useImage(props) {
  const {
    loading,
    src,
    srcSet,
    onLoad,
    onError,
    crossOrigin,
    sizes,
    ignoreFallback
  } = props;
  const [status, setStatus] = (0, import_react67.useState)("pending");
  (0, import_react67.useEffect)(() => {
    setStatus(src ? "loading" : "pending");
  }, [src]);
  const imageRef = (0, import_react67.useRef)();
  const load = (0, import_react67.useCallback)(() => {
    if (!src)
      return;
    flush();
    const img = new Image();
    img.src = src;
    if (crossOrigin)
      img.crossOrigin = crossOrigin;
    if (srcSet)
      img.srcset = srcSet;
    if (sizes)
      img.sizes = sizes;
    if (loading)
      img.loading = loading;
    img.onload = (event) => {
      flush();
      setStatus("loaded");
      onLoad == null ? void 0 : onLoad(event);
    };
    img.onerror = (error) => {
      flush();
      setStatus("failed");
      onError == null ? void 0 : onError(error);
    };
    imageRef.current = img;
  }, [src, crossOrigin, srcSet, sizes, onLoad, onError, loading]);
  const flush = () => {
    if (imageRef.current) {
      imageRef.current.onload = null;
      imageRef.current.onerror = null;
      imageRef.current = null;
    }
  };
  useSafeLayoutEffect(() => {
    if (ignoreFallback)
      return void 0;
    if (status === "loading") {
      load();
    }
    return () => {
      flush();
    };
  }, [status, load, ignoreFallback]);
  return ignoreFallback ? "loaded" : status;
}
var shouldShowFallbackImage = (status, fallbackStrategy) => status !== "loaded" && fallbackStrategy === "beforeLoadOrError" || status === "failed" && fallbackStrategy === "onError";

// node_modules/@chakra-ui/image/dist/chunk-E77276RR.mjs
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
function omit(object2, keysToOmit = []) {
  const clone = Object.assign({}, object2);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}
var Image2 = forwardRef(function Image22(props, ref) {
  const {
    fallbackSrc,
    fallback,
    src,
    srcSet,
    align,
    fit,
    loading,
    ignoreFallback,
    crossOrigin,
    fallbackStrategy = "beforeLoadOrError",
    referrerPolicy,
    ...rest
  } = props;
  const providedFallback = fallbackSrc !== void 0 || fallback !== void 0;
  const shouldIgnoreFallbackImage = loading != null || ignoreFallback || !providedFallback;
  const status = useImage({
    ...props,
    ignoreFallback: shouldIgnoreFallbackImage
  });
  const showFallbackImage = shouldShowFallbackImage(status, fallbackStrategy);
  const shared = {
    ref,
    objectFit: fit,
    objectPosition: align,
    ...shouldIgnoreFallbackImage ? rest : omit(rest, ["onError", "onLoad"])
  };
  if (showFallbackImage) {
    if (fallback)
      return fallback;
    return (0, import_jsx_runtime32.jsx)(
      chakra.img,
      {
        as: NativeImage,
        className: "chakra-image__placeholder",
        src: fallbackSrc,
        ...shared
      }
    );
  }
  return (0, import_jsx_runtime32.jsx)(
    chakra.img,
    {
      as: NativeImage,
      src,
      srcSet,
      crossOrigin,
      loading,
      referrerPolicy,
      className: "chakra-image",
      ...shared
    }
  );
});
Image2.displayName = "Image";

// node_modules/@chakra-ui/image/dist/chunk-E3YVMML4.mjs
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var Img = forwardRef((props, ref) => (0, import_jsx_runtime33.jsx)(chakra.img, { ref, as: NativeImage, className: "chakra-image", ...props }));

// node_modules/@chakra-ui/avatar/dist/chunk-TLFCZAEL.mjs
var import_react68 = __toESM(require_react(), 1);
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
function AvatarImage(props) {
  const {
    src,
    srcSet,
    onError,
    onLoad,
    getInitials,
    name,
    borderRadius,
    loading,
    iconLabel,
    icon = (0, import_jsx_runtime34.jsx)(GenericAvatarIcon, {}),
    ignoreFallback,
    referrerPolicy,
    crossOrigin
  } = props;
  const status = useImage({ src, onError, ignoreFallback });
  const hasLoaded = status === "loaded";
  const showFallback = !src || !hasLoaded;
  if (showFallback) {
    return name ? (0, import_jsx_runtime34.jsx)(
      AvatarName,
      {
        className: "chakra-avatar__initials",
        getInitials,
        name
      }
    ) : (0, import_react68.cloneElement)(icon, {
      role: "img",
      "aria-label": iconLabel
    });
  }
  return (0, import_jsx_runtime34.jsx)(
    chakra.img,
    {
      src,
      srcSet,
      alt: name,
      onLoad,
      referrerPolicy,
      crossOrigin: crossOrigin != null ? crossOrigin : void 0,
      className: "chakra-avatar__img",
      loading,
      __css: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius
      }
    }
  );
}
AvatarImage.displayName = "AvatarImage";

// node_modules/@chakra-ui/avatar/dist/chunk-YYQ66DB3.mjs
var import_react69 = __toESM(require_react(), 1);
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var baseStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: "medium",
  position: "relative",
  flexShrink: 0
};
var Avatar = forwardRef((props, ref) => {
  const styles = useMultiStyleConfig("Avatar", props);
  const [isLoaded, setIsLoaded] = (0, import_react69.useState)(false);
  const {
    src,
    srcSet,
    name,
    showBorder,
    borderRadius = "full",
    onError,
    onLoad: onLoadProp,
    getInitials = initials,
    icon = (0, import_jsx_runtime35.jsx)(GenericAvatarIcon, {}),
    iconLabel = " avatar",
    loading,
    children,
    borderColor,
    ignoreFallback,
    crossOrigin,
    ...rest
  } = omitThemingProps(props);
  const avatarStyles = {
    borderRadius,
    borderWidth: showBorder ? "2px" : void 0,
    ...baseStyle,
    ...styles.container
  };
  if (borderColor) {
    avatarStyles.borderColor = borderColor;
  }
  return (0, import_jsx_runtime35.jsx)(
    chakra.span,
    {
      ref,
      ...rest,
      className: cx("chakra-avatar", props.className),
      "data-loaded": dataAttr(isLoaded),
      __css: avatarStyles,
      children: (0, import_jsx_runtime35.jsxs)(AvatarStylesProvider, { value: styles, children: [
        (0, import_jsx_runtime35.jsx)(
          AvatarImage,
          {
            src,
            srcSet,
            loading,
            onLoad: callAllHandlers(onLoadProp, () => {
              setIsLoaded(true);
            }),
            onError,
            getInitials,
            name,
            borderRadius,
            icon,
            iconLabel,
            ignoreFallback,
            crossOrigin
          }
        ),
        children
      ] })
    }
  );
});
Avatar.displayName = "Avatar";

// node_modules/@chakra-ui/react-children-utils/dist/index.mjs
var import_react70 = __toESM(require_react(), 1);
function getValidChildren(children) {
  return import_react70.Children.toArray(children).filter(
    (child) => (0, import_react70.isValidElement)(child)
  );
}

// node_modules/@chakra-ui/avatar/dist/chunk-3DMB23BS.mjs
var import_react71 = __toESM(require_react(), 1);
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
function compact2(object2) {
  const clone = Object.assign({}, object2);
  for (let key in clone) {
    if (clone[key] === void 0)
      delete clone[key];
  }
  return clone;
}
var AvatarGroup = forwardRef(
  function AvatarGroup2(props, ref) {
    const styles = useMultiStyleConfig("Avatar", props);
    const {
      children,
      borderColor,
      max: max2,
      spacing = "-0.75rem",
      borderRadius = "full",
      ...rest
    } = omitThemingProps(props);
    const validChildren = getValidChildren(children);
    const childrenWithinMax = max2 != null ? validChildren.slice(0, max2) : validChildren;
    const excess = max2 != null ? validChildren.length - max2 : 0;
    const reversedChildren = childrenWithinMax.reverse();
    const clones = reversedChildren.map((child, index2) => {
      var _a2;
      const isFirstAvatar = index2 === 0;
      const childProps = {
        marginEnd: isFirstAvatar ? 0 : spacing,
        size: props.size,
        borderColor: (_a2 = child.props.borderColor) != null ? _a2 : borderColor,
        showBorder: true
      };
      return (0, import_react71.cloneElement)(child, compact2(childProps));
    });
    const groupStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "row-reverse",
      ...styles.group
    };
    const excessStyles = {
      borderRadius,
      marginStart: spacing,
      ...baseStyle,
      ...styles.excessLabel
    };
    return (0, import_jsx_runtime36.jsxs)(
      chakra.div,
      {
        ref,
        role: "group",
        __css: groupStyles,
        ...rest,
        className: cx("chakra-avatar__group", props.className),
        children: [
          excess > 0 && (0, import_jsx_runtime36.jsx)(chakra.span, { className: "chakra-avatar__excess", __css: excessStyles, children: `+${excess}` }),
          clones
        ]
      }
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";

// node_modules/@chakra-ui/breadcrumb/dist/chunk-OLDTR4XF.mjs
var [BreadcrumbStylesProvider, useBreadcrumbStyles] = createContext({
  name: `BreadcrumbStylesContext`,
  errorMessage: `useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `
});

// node_modules/@chakra-ui/breadcrumb/dist/chunk-GCVB4LG4.mjs
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var BreadcrumbLink = forwardRef(
  function BreadcrumbLink2(props, ref) {
    const { isCurrentPage, as, className, href, ...rest } = props;
    const styles = useBreadcrumbStyles();
    const sharedProps = {
      ref,
      as,
      className: cx("chakra-breadcrumb__link", className),
      ...rest
    };
    if (isCurrentPage) {
      return (0, import_jsx_runtime37.jsx)(chakra.span, { "aria-current": "page", __css: styles.link, ...sharedProps });
    }
    return (0, import_jsx_runtime37.jsx)(chakra.a, { __css: styles.link, href, ...sharedProps });
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

// node_modules/@chakra-ui/breadcrumb/dist/chunk-XCVTFTPE.mjs
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var BreadcrumbSeparator = forwardRef(
  function BreadcrumbSeparator2(props, ref) {
    const { spacing, ...rest } = props;
    const styles = useBreadcrumbStyles();
    const separatorStyles = {
      mx: spacing,
      ...styles.separator
    };
    return (0, import_jsx_runtime38.jsx)(
      chakra.span,
      {
        ref,
        role: "presentation",
        ...rest,
        __css: separatorStyles
      }
    );
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

// node_modules/@chakra-ui/breadcrumb/dist/chunk-5BPFTGUI.mjs
var import_react72 = __toESM(require_react(), 1);
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
var BreadcrumbItem = forwardRef(
  function BreadcrumbItem2(props, ref) {
    const {
      isCurrentPage,
      separator,
      isLastChild,
      spacing,
      children,
      className,
      ...rest
    } = props;
    const validChildren = getValidChildren(children);
    const clones = validChildren.map((child) => {
      if (child.type === BreadcrumbLink) {
        return (0, import_react72.cloneElement)(child, {
          isCurrentPage
        });
      }
      if (child.type === BreadcrumbSeparator) {
        return (0, import_react72.cloneElement)(child, {
          spacing,
          children: child.props.children || separator
        });
      }
      return child;
    });
    const styles = useBreadcrumbStyles();
    const itemStyles = {
      display: "inline-flex",
      alignItems: "center",
      ...styles.item
    };
    const _className = cx("chakra-breadcrumb__list-item", className);
    return (0, import_jsx_runtime39.jsxs)(chakra.li, { ref, className: _className, ...rest, __css: itemStyles, children: [
      clones,
      !isLastChild && (0, import_jsx_runtime39.jsx)(BreadcrumbSeparator, { spacing, children: separator })
    ] });
  }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

// node_modules/@chakra-ui/breadcrumb/dist/chunk-RDQRB6BQ.mjs
var import_react73 = __toESM(require_react(), 1);
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
var Breadcrumb = forwardRef(
  function Breadcrumb2(props, ref) {
    const styles = useMultiStyleConfig("Breadcrumb", props);
    const ownProps = omitThemingProps(props);
    const {
      children,
      spacing = "0.5rem",
      separator = "/",
      className,
      listProps,
      ...rest
    } = ownProps;
    const validChildren = getValidChildren(children);
    const count = validChildren.length;
    const clones = validChildren.map(
      (child, index2) => (0, import_react73.cloneElement)(child, {
        separator,
        spacing,
        isLastChild: count === index2 + 1
      })
    );
    const _className = cx("chakra-breadcrumb", className);
    return (0, import_jsx_runtime40.jsx)(
      chakra.nav,
      {
        ref,
        "aria-label": "breadcrumb",
        className: _className,
        __css: styles.container,
        ...rest,
        children: (0, import_jsx_runtime40.jsx)(BreadcrumbStylesProvider, { value: styles, children: (0, import_jsx_runtime40.jsx)(
          chakra.ol,
          {
            className: "chakra-breadcrumb__list",
            ...listProps,
            __css: {
              display: "flex",
              alignItems: "center",
              ...styles.list
            },
            children: clones
          }
        ) })
      }
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";

// node_modules/@chakra-ui/button/dist/chunk-DGWZA2DU.mjs
var [ButtonGroupProvider, useButtonGroup] = createContext({
  strict: false,
  name: "ButtonGroupContext"
});

// node_modules/@chakra-ui/button/dist/chunk-PEYICJIL.mjs
var import_react74 = __toESM(require_react(), 1);
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
var attachedStyles = {
  horizontal: {
    "> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 }
  },
  vertical: {
    "> *:first-of-type:not(:last-of-type)": { borderBottomRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderTopRadius: 0 }
  }
};
var gapStyles = {
  horizontal: (spacing) => ({
    "& > *:not(style) ~ *:not(style)": { marginStart: spacing }
  }),
  vertical: (spacing) => ({
    "& > *:not(style) ~ *:not(style)": { marginTop: spacing }
  })
};
var ButtonGroup = forwardRef(
  function ButtonGroup2(props, ref) {
    const {
      size,
      colorScheme,
      variant,
      className,
      spacing = "0.5rem",
      isAttached,
      isDisabled: isDisabled2,
      orientation = "horizontal",
      ...rest
    } = props;
    const _className = cx("chakra-button__group", className);
    const context = (0, import_react74.useMemo)(
      () => ({ size, colorScheme, variant, isDisabled: isDisabled2 }),
      [size, colorScheme, variant, isDisabled2]
    );
    let groupStyles = {
      display: "inline-flex",
      ...isAttached ? attachedStyles[orientation] : gapStyles[orientation](spacing)
    };
    const isVertical = orientation === "vertical";
    return (0, import_jsx_runtime41.jsx)(ButtonGroupProvider, { value: context, children: (0, import_jsx_runtime41.jsx)(
      chakra.div,
      {
        ref,
        role: "group",
        __css: groupStyles,
        className: _className,
        "data-attached": isAttached ? "" : void 0,
        "data-orientation": orientation,
        flexDir: isVertical ? "column" : void 0,
        ...rest
      }
    ) });
  }
);
ButtonGroup.displayName = "ButtonGroup";

// node_modules/@chakra-ui/button/dist/chunk-FRFD4OXU.mjs
var import_react75 = __toESM(require_react(), 1);
function useButtonType(value) {
  const [isButton, setIsButton] = (0, import_react75.useState)(!value);
  const refCallback = (0, import_react75.useCallback)((node2) => {
    if (!node2)
      return;
    setIsButton(node2.tagName === "BUTTON");
  }, []);
  const type = isButton ? "button" : void 0;
  return { ref: refCallback, type };
}

// node_modules/@chakra-ui/button/dist/chunk-HCASMTTF.mjs
var import_react76 = __toESM(require_react(), 1);
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
function ButtonIcon(props) {
  const { children, className, ...rest } = props;
  const _children = (0, import_react76.isValidElement)(children) ? (0, import_react76.cloneElement)(children, {
    "aria-hidden": true,
    focusable: false
  }) : children;
  const _className = cx("chakra-button__icon", className);
  return (0, import_jsx_runtime42.jsx)(
    chakra.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...rest,
      className: _className,
      children: _children
    }
  );
}
ButtonIcon.displayName = "ButtonIcon";

// node_modules/@chakra-ui/button/dist/chunk-HNNHG6RU.mjs
var import_react77 = __toESM(require_react(), 1);
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
function ButtonSpinner(props) {
  const {
    label,
    placement,
    spacing = "0.5rem",
    children = (0, import_jsx_runtime43.jsx)(Spinner, { color: "currentColor", width: "1em", height: "1em" }),
    className,
    __css,
    ...rest
  } = props;
  const _className = cx("chakra-button__spinner", className);
  const marginProp = placement === "start" ? "marginEnd" : "marginStart";
  const spinnerStyles = (0, import_react77.useMemo)(
    () => ({
      display: "flex",
      alignItems: "center",
      position: label ? "relative" : "absolute",
      [marginProp]: label ? spacing : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...__css
    }),
    [__css, label, marginProp, spacing]
  );
  return (0, import_jsx_runtime43.jsx)(chakra.div, { className: _className, ...rest, __css: spinnerStyles, children });
}
ButtonSpinner.displayName = "ButtonSpinner";

// node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs
var import_react78 = __toESM(require_react(), 1);
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var Button = forwardRef((props, ref) => {
  const group = useButtonGroup();
  const styles = useStyleConfig("Button", { ...group, ...props });
  const {
    isDisabled: isDisabled2 = group == null ? void 0 : group.isDisabled,
    isLoading,
    isActive,
    children,
    leftIcon,
    rightIcon,
    loadingText,
    iconSpacing = "0.5rem",
    type,
    spinner,
    spinnerPlacement = "start",
    className,
    as,
    ...rest
  } = omitThemingProps(props);
  const buttonStyles = (0, import_react78.useMemo)(() => {
    const _focus = { ...styles == null ? void 0 : styles["_focus"], zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...styles,
      ...!!group && { _focus }
    };
  }, [styles, group]);
  const { ref: _ref2, type: defaultType } = useButtonType(as);
  const contentProps = { rightIcon, leftIcon, iconSpacing, children };
  return (0, import_jsx_runtime44.jsxs)(
    chakra.button,
    {
      ref: useMergeRefs(ref, _ref2),
      as,
      type: type != null ? type : defaultType,
      "data-active": dataAttr(isActive),
      "data-loading": dataAttr(isLoading),
      __css: buttonStyles,
      className: cx("chakra-button", className),
      ...rest,
      disabled: isDisabled2 || isLoading,
      children: [
        isLoading && spinnerPlacement === "start" && (0, import_jsx_runtime44.jsx)(
          ButtonSpinner,
          {
            className: "chakra-button__spinner--start",
            label: loadingText,
            placement: "start",
            spacing: iconSpacing,
            children: spinner
          }
        ),
        isLoading ? loadingText || (0, import_jsx_runtime44.jsx)(chakra.span, { opacity: 0, children: (0, import_jsx_runtime44.jsx)(ButtonContent, { ...contentProps }) }) : (0, import_jsx_runtime44.jsx)(ButtonContent, { ...contentProps }),
        isLoading && spinnerPlacement === "end" && (0, import_jsx_runtime44.jsx)(
          ButtonSpinner,
          {
            className: "chakra-button__spinner--end",
            label: loadingText,
            placement: "end",
            spacing: iconSpacing,
            children: spinner
          }
        )
      ]
    }
  );
});
Button.displayName = "Button";
function ButtonContent(props) {
  const { leftIcon, rightIcon, children, iconSpacing } = props;
  return (0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, { children: [
    leftIcon && (0, import_jsx_runtime44.jsx)(ButtonIcon, { marginEnd: iconSpacing, children: leftIcon }),
    children,
    rightIcon && (0, import_jsx_runtime44.jsx)(ButtonIcon, { marginStart: iconSpacing, children: rightIcon })
  ] });
}

// node_modules/@chakra-ui/button/dist/chunk-3HSDMH4Y.mjs
var import_react79 = __toESM(require_react(), 1);
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
var IconButton = forwardRef(
  (props, ref) => {
    const { icon, children, isRound, "aria-label": ariaLabel, ...rest } = props;
    const element = icon || children;
    const _children = (0, import_react79.isValidElement)(element) ? (0, import_react79.cloneElement)(element, {
      "aria-hidden": true,
      focusable: false
    }) : null;
    return (0, import_jsx_runtime45.jsx)(
      Button,
      {
        padding: "0",
        borderRadius: isRound ? "full" : void 0,
        ref,
        "aria-label": ariaLabel,
        ...rest,
        children: _children
      }
    );
  }
);
IconButton.displayName = "IconButton";

// node_modules/@chakra-ui/card/dist/chunk-4DHADF5X.mjs
var [CardStylesProvider, useCardStyles] = createStylesContext("Card");

// node_modules/@chakra-ui/card/dist/chunk-KKEJMMX3.mjs
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var CardBody = forwardRef(function CardBody2(props, ref) {
  const { className, ...rest } = props;
  const styles = useCardStyles();
  return (0, import_jsx_runtime46.jsx)(
    chakra.div,
    {
      ref,
      className: cx("chakra-card__body", className),
      __css: styles.body,
      ...rest
    }
  );
});

// node_modules/@chakra-ui/card/dist/chunk-V3HPETQ4.mjs
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
var CardFooter = forwardRef(
  function CardFooter2(props, ref) {
    const { className, justify, ...rest } = props;
    const styles = useCardStyles();
    return (0, import_jsx_runtime47.jsx)(
      chakra.div,
      {
        ref,
        className: cx("chakra-card__footer", className),
        __css: {
          display: "flex",
          justifyContent: justify,
          ...styles.footer
        },
        ...rest
      }
    );
  }
);

// node_modules/@chakra-ui/card/dist/chunk-W3H6TFKV.mjs
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
var CardHeader = forwardRef(
  function CardHeader2(props, ref) {
    const { className, ...rest } = props;
    const styles = useCardStyles();
    return (0, import_jsx_runtime48.jsx)(
      chakra.div,
      {
        ref,
        className: cx("chakra-card__header", className),
        __css: styles.header,
        ...rest
      }
    );
  }
);

// node_modules/@chakra-ui/card/dist/chunk-S432VF2S.mjs
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var Card = forwardRef(function Card2(props, ref) {
  const {
    className,
    children,
    direction = "column",
    justify,
    align,
    ...rest
  } = omitThemingProps(props);
  const styles = useMultiStyleConfig("Card", props);
  return (0, import_jsx_runtime49.jsx)(
    chakra.div,
    {
      ref,
      className: cx("chakra-card", className),
      __css: {
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        ...styles.container
      },
      ...rest,
      children: (0, import_jsx_runtime49.jsx)(CardStylesProvider, { value: styles, children })
    }
  );
});

// node_modules/@chakra-ui/checkbox/dist/chunk-6XFPBTDN.mjs
var [CheckboxGroupProvider, useCheckboxGroupContext] = createContext({
  name: "CheckboxGroupContext",
  strict: false
});

// node_modules/@chakra-ui/checkbox/dist/chunk-5F7ST2TT.mjs
var import_react80 = __toESM(require_react(), 1);
function isInputEvent(value) {
  return value && isObject(value) && isObject(value.target);
}
function useCheckboxGroup(props = {}) {
  const {
    defaultValue,
    value: valueProp,
    onChange,
    isDisabled: isDisabled2,
    isNative
  } = props;
  const onChangeProp = useCallbackRef(onChange);
  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue || [],
    onChange: onChangeProp
  });
  const handleChange = (0, import_react80.useCallback)(
    (eventOrValue) => {
      if (!value)
        return;
      const isChecked = isInputEvent(eventOrValue) ? eventOrValue.target.checked : !value.includes(eventOrValue);
      const selectedValue = isInputEvent(eventOrValue) ? eventOrValue.target.value : eventOrValue;
      const nextValue = isChecked ? [...value, selectedValue] : value.filter((v) => String(v) !== String(selectedValue));
      setValue(nextValue);
    },
    [setValue, value]
  );
  const getCheckboxProps = (0, import_react80.useCallback)(
    (props2 = {}) => {
      const checkedKey = isNative ? "checked" : "isChecked";
      return {
        ...props2,
        [checkedKey]: value.some((val) => String(props2.value) === String(val)),
        onChange: handleChange
      };
    },
    [handleChange, isNative, value]
  );
  return {
    value,
    isDisabled: isDisabled2,
    onChange: handleChange,
    setValue,
    getCheckboxProps
  };
}

// node_modules/@chakra-ui/checkbox/dist/chunk-Y65KPFRX.mjs
var import_react81 = __toESM(require_react(), 1);
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
function CheckboxGroup(props) {
  const { colorScheme, size, variant, children, isDisabled: isDisabled2 } = props;
  const { value, onChange } = useCheckboxGroup(props);
  const group = (0, import_react81.useMemo)(
    () => ({
      size,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled: isDisabled2
    }),
    [size, onChange, colorScheme, value, variant, isDisabled2]
  );
  return (0, import_jsx_runtime50.jsx)(CheckboxGroupProvider, { value: group, children });
}
CheckboxGroup.displayName = "CheckboxGroup";

// node_modules/@chakra-ui/checkbox/dist/chunk-DFEUIRKX.mjs
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
function CheckIcon2(props) {
  return (0, import_jsx_runtime51.jsx)(
    chakra.svg,
    {
      width: "1.2em",
      viewBox: "0 0 12 10",
      style: {
        fill: "none",
        strokeWidth: 2,
        stroke: "currentColor",
        strokeDasharray: 16
      },
      ...props,
      children: (0, import_jsx_runtime51.jsx)("polyline", { points: "1.5 6 4.5 9 10.5 1" })
    }
  );
}
function IndeterminateIcon(props) {
  return (0, import_jsx_runtime51.jsx)(
    chakra.svg,
    {
      width: "1.2em",
      viewBox: "0 0 24 24",
      style: { stroke: "currentColor", strokeWidth: 4 },
      ...props,
      children: (0, import_jsx_runtime51.jsx)("line", { x1: "21", x2: "3", y1: "12", y2: "12" })
    }
  );
}
function CheckboxIcon(props) {
  const { isIndeterminate, isChecked, ...rest } = props;
  const BaseIcon = isIndeterminate ? IndeterminateIcon : CheckIcon2;
  return isChecked || isIndeterminate ? (0, import_jsx_runtime51.jsx)(
    chakra.div,
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      },
      children: (0, import_jsx_runtime51.jsx)(BaseIcon, { ...rest })
    }
  ) : null;
}

// node_modules/@chakra-ui/form-control/dist/chunk-6ZNYZUDD.mjs
var import_react82 = __toESM(require_react(), 1);
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
var [FormControlStylesProvider, useFormControlStyles] = createContext({
  name: `FormControlStylesContext`,
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
});
var [FormControlProvider, useFormControlContext] = createContext({
  strict: false,
  name: "FormControlContext"
});
function useFormControlProvider(props) {
  const {
    id: idProp,
    isRequired,
    isInvalid,
    isDisabled: isDisabled2,
    isReadOnly,
    ...htmlProps
  } = props;
  const uuid = (0, import_react82.useId)();
  const id4 = idProp || `field-${uuid}`;
  const labelId = `${id4}-label`;
  const feedbackId = `${id4}-feedback`;
  const helpTextId = `${id4}-helptext`;
  const [hasFeedbackText, setHasFeedbackText] = (0, import_react82.useState)(false);
  const [hasHelpText, setHasHelpText] = (0, import_react82.useState)(false);
  const [isFocused, setFocus2] = (0, import_react82.useState)(false);
  const getHelpTextProps = (0, import_react82.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      id: helpTextId,
      ...props2,
      ref: mergeRefs(forwardedRef, (node2) => {
        if (!node2)
          return;
        setHasHelpText(true);
      })
    }),
    [helpTextId]
  );
  const getLabelProps = (0, import_react82.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      "data-focus": dataAttr(isFocused),
      "data-disabled": dataAttr(isDisabled2),
      "data-invalid": dataAttr(isInvalid),
      "data-readonly": dataAttr(isReadOnly),
      id: props2.id !== void 0 ? props2.id : labelId,
      htmlFor: props2.htmlFor !== void 0 ? props2.htmlFor : id4
    }),
    [id4, isDisabled2, isFocused, isInvalid, isReadOnly, labelId]
  );
  const getErrorMessageProps = (0, import_react82.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      id: feedbackId,
      ...props2,
      ref: mergeRefs(forwardedRef, (node2) => {
        if (!node2)
          return;
        setHasFeedbackText(true);
      }),
      "aria-live": "polite"
    }),
    [feedbackId]
  );
  const getRootProps = (0, import_react82.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ...htmlProps,
      ref: forwardedRef,
      role: "group"
    }),
    [htmlProps]
  );
  const getRequiredIndicatorProps = (0, import_react82.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      role: "presentation",
      "aria-hidden": true,
      children: props2.children || "*"
    }),
    []
  );
  return {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled2,
    isFocused: !!isFocused,
    onFocus: () => setFocus2(true),
    onBlur: () => setFocus2(false),
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    id: id4,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps,
    getHelpTextProps,
    getErrorMessageProps,
    getRootProps,
    getLabelProps,
    getRequiredIndicatorProps
  };
}
var FormControl = forwardRef(
  function FormControl2(props, ref) {
    const styles = useMultiStyleConfig("Form", props);
    const ownProps = omitThemingProps(props);
    const {
      getRootProps,
      htmlProps: _,
      ...context
    } = useFormControlProvider(ownProps);
    const className = cx("chakra-form-control", props.className);
    return (0, import_jsx_runtime52.jsx)(FormControlProvider, { value: context, children: (0, import_jsx_runtime52.jsx)(FormControlStylesProvider, { value: styles, children: (0, import_jsx_runtime52.jsx)(
      chakra.div,
      {
        ...getRootProps({}, ref),
        className,
        __css: styles["container"]
      }
    ) }) });
  }
);
FormControl.displayName = "FormControl";
var FormHelperText = forwardRef(
  function FormHelperText2(props, ref) {
    const field = useFormControlContext();
    const styles = useFormControlStyles();
    const className = cx("chakra-form__helper-text", props.className);
    return (0, import_jsx_runtime52.jsx)(
      chakra.div,
      {
        ...field == null ? void 0 : field.getHelpTextProps(props, ref),
        __css: styles.helperText,
        className
      }
    );
  }
);
FormHelperText.displayName = "FormHelperText";

// node_modules/@chakra-ui/form-control/dist/chunk-3GP7MWMA.mjs
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var [FormErrorStylesProvider, useFormErrorStyles] = createContext({
  name: `FormErrorStylesContext`,
  errorMessage: `useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `
});
var FormErrorMessage = forwardRef(
  (props, ref) => {
    const styles = useMultiStyleConfig("FormError", props);
    const ownProps = omitThemingProps(props);
    const field = useFormControlContext();
    if (!(field == null ? void 0 : field.isInvalid))
      return null;
    return (0, import_jsx_runtime53.jsx)(FormErrorStylesProvider, { value: styles, children: (0, import_jsx_runtime53.jsx)(
      chakra.div,
      {
        ...field == null ? void 0 : field.getErrorMessageProps(ownProps, ref),
        className: cx("chakra-form__error-message", props.className),
        __css: {
          display: "flex",
          alignItems: "center",
          ...styles.text
        }
      }
    ) });
  }
);
FormErrorMessage.displayName = "FormErrorMessage";
var FormErrorIcon = forwardRef((props, ref) => {
  const styles = useFormErrorStyles();
  const field = useFormControlContext();
  if (!(field == null ? void 0 : field.isInvalid))
    return null;
  const _className = cx("chakra-form__error-icon", props.className);
  return (0, import_jsx_runtime53.jsx)(
    Icon,
    {
      ref,
      "aria-hidden": true,
      ...props,
      __css: styles.icon,
      className: _className,
      children: (0, import_jsx_runtime53.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
        }
      )
    }
  );
});
FormErrorIcon.displayName = "FormErrorIcon";

// node_modules/@chakra-ui/form-control/dist/chunk-RN6VKE3K.mjs
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
var FormLabel = forwardRef(function FormLabel2(passedProps, ref) {
  var _a2;
  const styles = useStyleConfig("FormLabel", passedProps);
  const props = omitThemingProps(passedProps);
  const {
    className,
    children,
    requiredIndicator = (0, import_jsx_runtime54.jsx)(RequiredIndicator, {}),
    optionalIndicator = null,
    ...rest
  } = props;
  const field = useFormControlContext();
  const ownProps = (_a2 = field == null ? void 0 : field.getLabelProps(rest, ref)) != null ? _a2 : { ref, ...rest };
  return (0, import_jsx_runtime54.jsxs)(
    chakra.label,
    {
      ...ownProps,
      className: cx("chakra-form__label", props.className),
      __css: {
        display: "block",
        textAlign: "start",
        ...styles
      },
      children: [
        children,
        (field == null ? void 0 : field.isRequired) ? requiredIndicator : optionalIndicator
      ]
    }
  );
});
FormLabel.displayName = "FormLabel";
var RequiredIndicator = forwardRef(
  function RequiredIndicator2(props, ref) {
    const field = useFormControlContext();
    const styles = useFormControlStyles();
    if (!(field == null ? void 0 : field.isRequired))
      return null;
    const className = cx("chakra-form__required-indicator", props.className);
    return (0, import_jsx_runtime54.jsx)(
      chakra.span,
      {
        ...field == null ? void 0 : field.getRequiredIndicatorProps(props, ref),
        __css: styles.requiredIndicator,
        className
      }
    );
  }
);
RequiredIndicator.displayName = "RequiredIndicator";

// node_modules/@chakra-ui/form-control/dist/chunk-IJBC3YLI.mjs
function useFormControl(props) {
  const { isDisabled: isDisabled2, isInvalid, isReadOnly, isRequired, ...rest } = useFormControlProps(props);
  return {
    ...rest,
    disabled: isDisabled2,
    readOnly: isReadOnly,
    required: isRequired,
    "aria-invalid": ariaAttr(isInvalid),
    "aria-required": ariaAttr(isRequired),
    "aria-readonly": ariaAttr(isReadOnly)
  };
}
function useFormControlProps(props) {
  var _a2, _b, _c;
  const field = useFormControlContext();
  const {
    id: id4,
    disabled,
    readOnly,
    required,
    isRequired,
    isInvalid,
    isReadOnly,
    isDisabled: isDisabled2,
    onFocus: onFocus3,
    onBlur: onBlur3,
    ...rest
  } = props;
  const labelIds = props["aria-describedby"] ? [props["aria-describedby"]] : [];
  if ((field == null ? void 0 : field.hasFeedbackText) && (field == null ? void 0 : field.isInvalid)) {
    labelIds.push(field.feedbackId);
  }
  if (field == null ? void 0 : field.hasHelpText) {
    labelIds.push(field.helpTextId);
  }
  return {
    ...rest,
    "aria-describedby": labelIds.join(" ") || void 0,
    id: id4 != null ? id4 : field == null ? void 0 : field.id,
    isDisabled: (_a2 = disabled != null ? disabled : isDisabled2) != null ? _a2 : field == null ? void 0 : field.isDisabled,
    isReadOnly: (_b = readOnly != null ? readOnly : isReadOnly) != null ? _b : field == null ? void 0 : field.isReadOnly,
    isRequired: (_c = required != null ? required : isRequired) != null ? _c : field == null ? void 0 : field.isRequired,
    isInvalid: isInvalid != null ? isInvalid : field == null ? void 0 : field.isInvalid,
    onFocus: callAllHandlers(field == null ? void 0 : field.onFocus, onFocus3),
    onBlur: callAllHandlers(field == null ? void 0 : field.onBlur, onBlur3)
  };
}

// node_modules/@chakra-ui/visually-hidden/dist/chunk-RSUMUOHR.mjs
var visuallyHiddenStyle = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};

// node_modules/@chakra-ui/visually-hidden/dist/chunk-74U3PXFJ.mjs
var VisuallyHidden = chakra("span", {
  baseStyle: visuallyHiddenStyle
});
VisuallyHidden.displayName = "VisuallyHidden";
var VisuallyHiddenInput = chakra("input", {
  baseStyle: visuallyHiddenStyle
});
VisuallyHiddenInput.displayName = "VisuallyHiddenInput";

// node_modules/@zag-js/focus-visible/dist/index.mjs
var hasSetup = false;
var modality = null;
var hasEventBeforeFocus = false;
var hasBlurredWindowRecently = false;
var handlers = /* @__PURE__ */ new Set();
function trigger(modality2, event) {
  handlers.forEach((handler) => handler(modality2, event));
}
var isMac = typeof window !== "undefined" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : false;
function isValidKey(e) {
  return !(e.metaKey || !isMac && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function onKeyboardEvent(event) {
  hasEventBeforeFocus = true;
  if (isValidKey(event)) {
    modality = "keyboard";
    trigger("keyboard", event);
  }
}
function onPointerEvent(event) {
  modality = "pointer";
  if (event.type === "mousedown" || event.type === "pointerdown") {
    hasEventBeforeFocus = true;
    const target = event.composedPath ? event.composedPath()[0] : event.target;
    let matches = false;
    try {
      matches = target.matches(":focus-visible");
    } catch {
    }
    if (matches)
      return;
    trigger("pointer", event);
  }
}
function isVirtualClick(event) {
  if (event.mozInputSource === 0 && event.isTrusted)
    return true;
  return event.detail === 0 && !event.pointerType;
}
function onClickEvent(e) {
  if (isVirtualClick(e)) {
    hasEventBeforeFocus = true;
    modality = "virtual";
  }
}
function onWindowFocus(event) {
  if (event.target === window || event.target === document) {
    return;
  }
  if (!hasEventBeforeFocus && !hasBlurredWindowRecently) {
    modality = "virtual";
    trigger("virtual", event);
  }
  hasEventBeforeFocus = false;
  hasBlurredWindowRecently = false;
}
function onWindowBlur() {
  hasEventBeforeFocus = false;
  hasBlurredWindowRecently = true;
}
function isFocusVisible() {
  return modality !== "pointer";
}
function setupGlobalFocusEvents() {
  if (typeof window === "undefined" || hasSetup) {
    return;
  }
  const { focus: focus2 } = HTMLElement.prototype;
  HTMLElement.prototype.focus = function focusElement(...args) {
    hasEventBeforeFocus = true;
    focus2.apply(this, args);
  };
  document.addEventListener("keydown", onKeyboardEvent, true);
  document.addEventListener("keyup", onKeyboardEvent, true);
  document.addEventListener("click", onClickEvent, true);
  window.addEventListener("focus", onWindowFocus, true);
  window.addEventListener("blur", onWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    document.addEventListener("pointerdown", onPointerEvent, true);
    document.addEventListener("pointermove", onPointerEvent, true);
    document.addEventListener("pointerup", onPointerEvent, true);
  } else {
    document.addEventListener("mousedown", onPointerEvent, true);
    document.addEventListener("mousemove", onPointerEvent, true);
    document.addEventListener("mouseup", onPointerEvent, true);
  }
  hasSetup = true;
}
function trackFocusVisible(fn2) {
  setupGlobalFocusEvents();
  fn2(isFocusVisible());
  const handler = () => fn2(isFocusVisible());
  handlers.add(handler);
  return () => {
    handlers.delete(handler);
  };
}

// node_modules/@chakra-ui/checkbox/dist/chunk-H6UVDIE7.mjs
var import_react83 = __toESM(require_react(), 1);
function omit2(object2, keysToOmit = []) {
  const clone = Object.assign({}, object2);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}
function useCheckbox(props = {}) {
  const formControlProps = useFormControlProps(props);
  const {
    isDisabled: isDisabled2,
    isReadOnly,
    isRequired,
    isInvalid,
    id: id4,
    onBlur: onBlur3,
    onFocus: onFocus3,
    "aria-describedby": ariaDescribedBy
  } = formControlProps;
  const {
    defaultChecked,
    isChecked: checkedProp,
    isFocusable: isFocusable2,
    onChange,
    isIndeterminate,
    name,
    value,
    tabIndex = void 0,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-invalid": ariaInvalid,
    ...rest
  } = props;
  const htmlProps = omit2(rest, [
    "isDisabled",
    "isReadOnly",
    "isRequired",
    "isInvalid",
    "id",
    "onBlur",
    "onFocus",
    "aria-describedby"
  ]);
  const onChangeProp = useCallbackRef(onChange);
  const onBlurProp = useCallbackRef(onBlur3);
  const onFocusProp = useCallbackRef(onFocus3);
  const [isFocusVisible2, setIsFocusVisible] = (0, import_react83.useState)(false);
  const [isFocused, setFocused] = (0, import_react83.useState)(false);
  const [isHovered, setHovered] = (0, import_react83.useState)(false);
  const [isActive, setActive] = (0, import_react83.useState)(false);
  (0, import_react83.useEffect)(() => {
    return trackFocusVisible(setIsFocusVisible);
  }, []);
  const inputRef = (0, import_react83.useRef)(null);
  const [rootIsLabelElement, setRootIsLabelElement] = (0, import_react83.useState)(true);
  const [checkedState, setCheckedState] = (0, import_react83.useState)(!!defaultChecked);
  const isControlled = checkedProp !== void 0;
  const isChecked = isControlled ? checkedProp : checkedState;
  const handleChange = (0, import_react83.useCallback)(
    (event) => {
      if (isReadOnly || isDisabled2) {
        event.preventDefault();
        return;
      }
      if (!isControlled) {
        if (isChecked) {
          setCheckedState(event.target.checked);
        } else {
          setCheckedState(isIndeterminate ? true : event.target.checked);
        }
      }
      onChangeProp == null ? void 0 : onChangeProp(event);
    },
    [
      isReadOnly,
      isDisabled2,
      isChecked,
      isControlled,
      isIndeterminate,
      onChangeProp
    ]
  );
  useSafeLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(isIndeterminate);
    }
  }, [isIndeterminate]);
  useUpdateEffect(() => {
    if (isDisabled2) {
      setFocused(false);
    }
  }, [isDisabled2, setFocused]);
  useSafeLayoutEffect(() => {
    const el = inputRef.current;
    if (!(el == null ? void 0 : el.form))
      return;
    el.form.onreset = () => {
      setCheckedState(!!defaultChecked);
    };
  }, []);
  const trulyDisabled = isDisabled2 && !isFocusable2;
  const onKeyDown = (0, import_react83.useCallback)(
    (event) => {
      if (event.key === " ") {
        setActive(true);
      }
    },
    [setActive]
  );
  const onKeyUp = (0, import_react83.useCallback)(
    (event) => {
      if (event.key === " ") {
        setActive(false);
      }
    },
    [setActive]
  );
  useSafeLayoutEffect(() => {
    if (!inputRef.current)
      return;
    const notInSync = inputRef.current.checked !== isChecked;
    if (notInSync) {
      setCheckedState(inputRef.current.checked);
    }
  }, [inputRef.current]);
  const getCheckboxProps = (0, import_react83.useCallback)(
    (props2 = {}, forwardedRef = null) => {
      const onPressDown = (event) => {
        if (isFocused) {
          event.preventDefault();
        }
        setActive(true);
      };
      return {
        ...props2,
        ref: forwardedRef,
        "data-active": dataAttr(isActive),
        "data-hover": dataAttr(isHovered),
        "data-checked": dataAttr(isChecked),
        "data-focus": dataAttr(isFocused),
        "data-focus-visible": dataAttr(isFocused && isFocusVisible2),
        "data-indeterminate": dataAttr(isIndeterminate),
        "data-disabled": dataAttr(isDisabled2),
        "data-invalid": dataAttr(isInvalid),
        "data-readonly": dataAttr(isReadOnly),
        "aria-hidden": true,
        onMouseDown: callAllHandlers(props2.onMouseDown, onPressDown),
        onMouseUp: callAllHandlers(props2.onMouseUp, () => setActive(false)),
        onMouseEnter: callAllHandlers(
          props2.onMouseEnter,
          () => setHovered(true)
        ),
        onMouseLeave: callAllHandlers(
          props2.onMouseLeave,
          () => setHovered(false)
        )
      };
    },
    [
      isActive,
      isChecked,
      isDisabled2,
      isFocused,
      isFocusVisible2,
      isHovered,
      isIndeterminate,
      isInvalid,
      isReadOnly
    ]
  );
  const getRootProps = (0, import_react83.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...htmlProps,
      ...props2,
      ref: mergeRefs(forwardedRef, (node2) => {
        if (!node2)
          return;
        setRootIsLabelElement(node2.tagName === "LABEL");
      }),
      onClick: callAllHandlers(props2.onClick, () => {
        var _a2;
        if (!rootIsLabelElement) {
          (_a2 = inputRef.current) == null ? void 0 : _a2.click();
          requestAnimationFrame(() => {
            var _a22;
            (_a22 = inputRef.current) == null ? void 0 : _a22.focus();
          });
        }
      }),
      "data-disabled": dataAttr(isDisabled2),
      "data-checked": dataAttr(isChecked),
      "data-invalid": dataAttr(isInvalid)
    }),
    [htmlProps, isDisabled2, isChecked, isInvalid, rootIsLabelElement]
  );
  const getInputProps = (0, import_react83.useCallback)(
    (props2 = {}, forwardedRef = null) => {
      return {
        ...props2,
        ref: mergeRefs(inputRef, forwardedRef),
        type: "checkbox",
        name,
        value,
        id: id4,
        tabIndex,
        onChange: callAllHandlers(props2.onChange, handleChange),
        onBlur: callAllHandlers(
          props2.onBlur,
          onBlurProp,
          () => setFocused(false)
        ),
        onFocus: callAllHandlers(
          props2.onFocus,
          onFocusProp,
          () => setFocused(true)
        ),
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
        onKeyUp: callAllHandlers(props2.onKeyUp, onKeyUp),
        required: isRequired,
        checked: isChecked,
        disabled: trulyDisabled,
        readOnly: isReadOnly,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-invalid": ariaInvalid ? Boolean(ariaInvalid) : isInvalid,
        "aria-describedby": ariaDescribedBy,
        "aria-disabled": isDisabled2,
        style: visuallyHiddenStyle
      };
    },
    [
      name,
      value,
      id4,
      handleChange,
      onBlurProp,
      onFocusProp,
      onKeyDown,
      onKeyUp,
      isRequired,
      isChecked,
      trulyDisabled,
      isReadOnly,
      ariaLabel,
      ariaLabelledBy,
      ariaInvalid,
      isInvalid,
      ariaDescribedBy,
      isDisabled2,
      tabIndex
    ]
  );
  const getLabelProps = (0, import_react83.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      onMouseDown: callAllHandlers(props2.onMouseDown, stopEvent),
      "data-disabled": dataAttr(isDisabled2),
      "data-checked": dataAttr(isChecked),
      "data-invalid": dataAttr(isInvalid)
    }),
    [isChecked, isDisabled2, isInvalid]
  );
  const state = {
    isInvalid,
    isFocused,
    isChecked,
    isActive,
    isHovered,
    isIndeterminate,
    isDisabled: isDisabled2,
    isReadOnly,
    isRequired
  };
  return {
    state,
    getRootProps,
    getCheckboxProps,
    getInputProps,
    getLabelProps,
    htmlProps
  };
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

// node_modules/@chakra-ui/checkbox/dist/chunk-RVJOM3YK.mjs
var import_react84 = __toESM(require_react(), 1);
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
var controlStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "top",
  userSelect: "none",
  flexShrink: 0
};
var rootStyles = {
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  verticalAlign: "top",
  position: "relative"
};
var checkAnim = keyframes({
  from: {
    opacity: 0,
    strokeDashoffset: 16,
    transform: "scale(0.95)"
  },
  to: {
    opacity: 1,
    strokeDashoffset: 0,
    transform: "scale(1)"
  }
});
var indeterminateOpacityAnim = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});
var indeterminateScaleAnim = keyframes({
  from: {
    transform: "scaleX(0.65)"
  },
  to: {
    transform: "scaleX(1)"
  }
});
var Checkbox = forwardRef(function Checkbox2(props, ref) {
  const group = useCheckboxGroupContext();
  const mergedProps = { ...group, ...props };
  const styles = useMultiStyleConfig("Checkbox", mergedProps);
  const ownProps = omitThemingProps(props);
  const {
    spacing = "0.5rem",
    className,
    children,
    iconColor,
    iconSize,
    icon = (0, import_jsx_runtime55.jsx)(CheckboxIcon, {}),
    isChecked: isCheckedProp,
    isDisabled: isDisabled2 = group == null ? void 0 : group.isDisabled,
    onChange: onChangeProp,
    inputProps,
    ...rest
  } = ownProps;
  let isChecked = isCheckedProp;
  if ((group == null ? void 0 : group.value) && ownProps.value) {
    isChecked = group.value.includes(ownProps.value);
  }
  let onChange = onChangeProp;
  if ((group == null ? void 0 : group.onChange) && ownProps.value) {
    onChange = callAll(group.onChange, onChangeProp);
  }
  const {
    state,
    getInputProps,
    getCheckboxProps,
    getLabelProps,
    getRootProps
  } = useCheckbox({
    ...rest,
    isDisabled: isDisabled2,
    isChecked,
    onChange
  });
  const iconStyles = (0, import_react84.useMemo)(
    () => ({
      animation: state.isIndeterminate ? `${indeterminateOpacityAnim} 20ms linear, ${indeterminateScaleAnim} 200ms linear` : `${checkAnim} 200ms linear`,
      fontSize: iconSize,
      color: iconColor,
      ...styles.icon
    }),
    [iconColor, iconSize, state.isIndeterminate, styles.icon]
  );
  const clonedIcon = (0, import_react84.cloneElement)(icon, {
    __css: iconStyles,
    isIndeterminate: state.isIndeterminate,
    isChecked: state.isChecked
  });
  return (0, import_jsx_runtime55.jsxs)(
    chakra.label,
    {
      __css: { ...rootStyles, ...styles.container },
      className: cx("chakra-checkbox", className),
      ...getRootProps(),
      children: [
        (0, import_jsx_runtime55.jsx)(
          "input",
          {
            className: "chakra-checkbox__input",
            ...getInputProps(inputProps, ref)
          }
        ),
        (0, import_jsx_runtime55.jsx)(
          chakra.span,
          {
            __css: { ...controlStyles, ...styles.control },
            className: "chakra-checkbox__control",
            ...getCheckboxProps(),
            children: clonedIcon
          }
        ),
        children && (0, import_jsx_runtime55.jsx)(
          chakra.span,
          {
            className: "chakra-checkbox__label",
            ...getLabelProps(),
            __css: {
              marginStart: spacing,
              ...styles.label
            },
            children
          }
        )
      ]
    }
  );
});
Checkbox.displayName = "Checkbox";

// node_modules/@chakra-ui/control-box/dist/chunk-POK5SEAG.mjs
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
var ControlBox = (props) => {
  const {
    type = "checkbox",
    _hover,
    _invalid,
    _disabled,
    _focus,
    _checked,
    _child = { opacity: 0 },
    _checkedAndChild = { opacity: 1 },
    _checkedAndDisabled,
    _checkedAndFocus,
    _checkedAndHover,
    children,
    ...rest
  } = props;
  const checkedAndDisabled = `input[type=${type}]:checked:disabled + &`;
  const checkedAndHover = `input[type=${type}]:checked:hover:not(:disabled) + &`;
  const checkedAndFocus = `input[type=${type}]:checked:focus + &`;
  const disabled = `input[type=${type}]:disabled + &`;
  const focus2 = `input[type=${type}]:focus + &`;
  const hover = `input[type=${type}]:hover:not(:disabled):not(:checked) + &`;
  const checked = `input[type=${type}]:checked + &, input[type=${type}][aria-checked=mixed] + &`;
  const invalid = `input[type=${type}][aria-invalid=true] + &`;
  const child = `& > *`;
  return (0, import_jsx_runtime56.jsx)(
    chakra.div,
    {
      ...rest,
      "aria-hidden": true,
      __css: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transitionProperty: "common",
        transitionDuration: "fast",
        flexShrink: 0,
        [focus2]: _focus,
        [hover]: _hover,
        [disabled]: _disabled,
        [invalid]: _invalid,
        [checkedAndDisabled]: _checkedAndDisabled,
        [checkedAndFocus]: _checkedAndFocus,
        [checkedAndHover]: _checkedAndHover,
        [child]: _child,
        [checked]: {
          ..._checked,
          [child]: _checkedAndChild
        }
      },
      children
    }
  );
};
ControlBox.displayName = "ControlBox";

// node_modules/@chakra-ui/number-utils/dist/index.mjs
function toNumber(value) {
  const num = parseFloat(value);
  return typeof num !== "number" || Number.isNaN(num) ? 0 : num;
}
function toPrecision(value, precision) {
  let nextValue = toNumber(value);
  const scaleFactor = 10 ** (precision != null ? precision : 10);
  nextValue = Math.round(nextValue * scaleFactor) / scaleFactor;
  return precision ? nextValue.toFixed(precision) : nextValue.toString();
}
function countDecimalPlaces(value) {
  if (!Number.isFinite(value))
    return 0;
  let e = 1;
  let p = 0;
  while (Math.round(value * e) / e !== value) {
    e *= 10;
    p += 1;
  }
  return p;
}
function valueToPercent(value, min2, max2) {
  return (value - min2) * 100 / (max2 - min2);
}
function percentToValue(percent2, min2, max2) {
  return (max2 - min2) * percent2 + min2;
}
function roundValueToStep(value, from, step) {
  const nextValue = Math.round((value - from) / step) * step + from;
  const precision = countDecimalPlaces(step);
  return toPrecision(nextValue, precision);
}
function clampValue(value, min2, max2) {
  if (value == null)
    return value;
  if (max2 < min2) {
    console.warn("clamp: max cannot be less than min");
  }
  return Math.min(Math.max(value, min2), max2);
}

// node_modules/@chakra-ui/counter/dist/chunk-O3YOOUZ7.mjs
var import_react85 = __toESM(require_react(), 1);
function useCounter(props = {}) {
  const {
    onChange,
    precision: precisionProp,
    defaultValue,
    value: valueProp,
    step: stepProp = 1,
    min: min2 = Number.MIN_SAFE_INTEGER,
    max: max2 = Number.MAX_SAFE_INTEGER,
    keepWithinRange = true
  } = props;
  const onChangeProp = useCallbackRef(onChange);
  const [valueState, setValue] = (0, import_react85.useState)(() => {
    var _a2;
    if (defaultValue == null)
      return "";
    return (_a2 = cast2(defaultValue, stepProp, precisionProp)) != null ? _a2 : "";
  });
  const isControlled = typeof valueProp !== "undefined";
  const value = isControlled ? valueProp : valueState;
  const decimalPlaces = getDecimalPlaces(parse2(value), stepProp);
  const precision = precisionProp != null ? precisionProp : decimalPlaces;
  const update = (0, import_react85.useCallback)(
    (next) => {
      if (next === value)
        return;
      if (!isControlled) {
        setValue(next.toString());
      }
      onChangeProp == null ? void 0 : onChangeProp(next.toString(), parse2(next));
    },
    [onChangeProp, isControlled, value]
  );
  const clamp2 = (0, import_react85.useCallback)(
    (value2) => {
      let nextValue = value2;
      if (keepWithinRange) {
        nextValue = clampValue(nextValue, min2, max2);
      }
      return toPrecision(nextValue, precision);
    },
    [precision, keepWithinRange, max2, min2]
  );
  const increment = (0, import_react85.useCallback)(
    (step = stepProp) => {
      let next;
      if (value === "") {
        next = parse2(step);
      } else {
        next = parse2(value) + step;
      }
      next = clamp2(next);
      update(next);
    },
    [clamp2, stepProp, update, value]
  );
  const decrement = (0, import_react85.useCallback)(
    (step = stepProp) => {
      let next;
      if (value === "") {
        next = parse2(-step);
      } else {
        next = parse2(value) - step;
      }
      next = clamp2(next);
      update(next);
    },
    [clamp2, stepProp, update, value]
  );
  const reset = (0, import_react85.useCallback)(() => {
    var _a2;
    let next;
    if (defaultValue == null) {
      next = "";
    } else {
      next = (_a2 = cast2(defaultValue, stepProp, precisionProp)) != null ? _a2 : min2;
    }
    update(next);
  }, [defaultValue, precisionProp, stepProp, update, min2]);
  const castValue = (0, import_react85.useCallback)(
    (value2) => {
      var _a2;
      const nextValue = (_a2 = cast2(value2, stepProp, precision)) != null ? _a2 : min2;
      update(nextValue);
    },
    [precision, stepProp, update, min2]
  );
  const valueAsNumber = parse2(value);
  const isOutOfRange = valueAsNumber > max2 || valueAsNumber < min2;
  const isAtMax = valueAsNumber === max2;
  const isAtMin = valueAsNumber === min2;
  return {
    isOutOfRange,
    isAtMax,
    isAtMin,
    precision,
    value,
    valueAsNumber,
    update,
    reset,
    increment,
    decrement,
    clamp: clamp2,
    cast: castValue,
    setValue
  };
}
function parse2(value) {
  return parseFloat(value.toString().replace(/[^\w.-]+/g, ""));
}
function getDecimalPlaces(value, step) {
  return Math.max(countDecimalPlaces(step), countDecimalPlaces(value));
}
function cast2(value, step, precision) {
  const parsedValue = parse2(value);
  if (Number.isNaN(parsedValue))
    return void 0;
  const decimalPlaces = getDecimalPlaces(parsedValue, step);
  return toPrecision(parsedValue, precision != null ? precision : decimalPlaces);
}

// node_modules/@chakra-ui/editable/dist/chunk-WADSSRGF.mjs
var [EditableStylesProvider, useEditableStyles] = createContext({
  name: `EditableStylesContext`,
  errorMessage: `useEditableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Editable />" `
});
var [EditableProvider, useEditableContext] = createContext({
  name: "EditableContext",
  errorMessage: "useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"
});

// node_modules/@chakra-ui/editable/dist/chunk-ZPXE4ZLM.mjs
function useEditableState() {
  const { isEditing, onSubmit, onCancel, onEdit, isDisabled: isDisabled2 } = useEditableContext();
  return {
    isEditing,
    onSubmit,
    onCancel,
    onEdit,
    isDisabled: isDisabled2
  };
}

// node_modules/@chakra-ui/editable/dist/chunk-LA6GBQAD.mjs
var commonStyles = {
  fontSize: "inherit",
  fontWeight: "inherit",
  textAlign: "inherit",
  bg: "transparent"
};

// node_modules/@chakra-ui/editable/dist/chunk-6EW6LXRD.mjs
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
var EditableInput = forwardRef(
  function EditableInput2(props, ref) {
    const { getInputProps } = useEditableContext();
    const styles = useEditableStyles();
    const inputProps = getInputProps(props, ref);
    const _className = cx("chakra-editable__input", props.className);
    return (0, import_jsx_runtime57.jsx)(
      chakra.input,
      {
        ...inputProps,
        __css: {
          outline: 0,
          ...commonStyles,
          ...styles.input
        },
        className: _className
      }
    );
  }
);
EditableInput.displayName = "EditableInput";

// node_modules/@chakra-ui/editable/dist/chunk-E6ECLSN7.mjs
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
var EditablePreview = forwardRef(
  function EditablePreview2(props, ref) {
    const { getPreviewProps } = useEditableContext();
    const styles = useEditableStyles();
    const previewProps = getPreviewProps(props, ref);
    const _className = cx("chakra-editable__preview", props.className);
    return (0, import_jsx_runtime58.jsx)(
      chakra.span,
      {
        ...previewProps,
        __css: {
          cursor: "text",
          display: "inline-block",
          ...commonStyles,
          ...styles.preview
        },
        className: _className
      }
    );
  }
);
EditablePreview.displayName = "EditablePreview";

// node_modules/@chakra-ui/editable/dist/chunk-J2WJP66L.mjs
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
var EditableTextarea = forwardRef(
  function EditableTextarea2(props, ref) {
    const { getTextareaProps } = useEditableContext();
    const styles = useEditableStyles();
    const textareaProps = getTextareaProps(props, ref);
    const _className = cx("chakra-editable__textarea", props.className);
    return (0, import_jsx_runtime59.jsx)(
      chakra.textarea,
      {
        ...textareaProps,
        __css: {
          outline: 0,
          ...commonStyles,
          ...styles.textarea
        },
        className: _className
      }
    );
  }
);
EditableTextarea.displayName = "EditableTextarea";

// node_modules/@chakra-ui/react-use-event-listener/dist/index.mjs
var import_react86 = __toESM(require_react(), 1);
function useEventListener(target, event, handler, options) {
  const listener = useCallbackRef(handler);
  (0, import_react86.useEffect)(() => {
    const node2 = typeof target === "function" ? target() : target != null ? target : document;
    if (!handler || !node2)
      return;
    node2.addEventListener(event, listener, options);
    return () => {
      node2.removeEventListener(event, listener, options);
    };
  }, [event, target, options, listener, handler]);
  return () => {
    const node2 = typeof target === "function" ? target() : target != null ? target : document;
    node2 == null ? void 0 : node2.removeEventListener(event, listener, options);
  };
}

// node_modules/@chakra-ui/react-use-focus-on-pointer-down/dist/index.mjs
function isRefObject3(val) {
  return "current" in val;
}
var isDom = () => typeof window !== "undefined";
function getPlatform() {
  var _a2;
  const agent = navigator.userAgentData;
  return (_a2 = agent == null ? void 0 : agent.platform) != null ? _a2 : navigator.platform;
}
var vn = (v) => isDom() && v.test(navigator.vendor);
var pt = (v) => isDom() && v.test(getPlatform());
var isApple = () => pt(/mac|iphone|ipad|ipod/i);
var isSafari = () => isApple() && vn(/apple/i);
function useFocusOnPointerDown(props) {
  const { ref, elements, enabled } = props;
  const doc = () => {
    var _a2, _b;
    return (_b = (_a2 = ref.current) == null ? void 0 : _a2.ownerDocument) != null ? _b : document;
  };
  useEventListener(doc, "pointerdown", (event) => {
    if (!isSafari() || !enabled)
      return;
    const target = event.target;
    const els = elements != null ? elements : [ref];
    const isValidTarget = els.some((elementOrRef) => {
      const el = isRefObject3(elementOrRef) ? elementOrRef.current : elementOrRef;
      return (el == null ? void 0 : el.contains(target)) || el === target;
    });
    if (doc().activeElement !== target && isValidTarget) {
      event.preventDefault();
      target.focus();
    }
  });
}

// node_modules/@chakra-ui/editable/dist/chunk-DFL5UVBL.mjs
var import_react87 = __toESM(require_react(), 1);
function contains2(parent, child) {
  if (!parent)
    return false;
  return parent === child || parent.contains(child);
}
function useEditable(props = {}) {
  const {
    onChange: onChangeProp,
    onCancel: onCancelProp,
    onSubmit: onSubmitProp,
    value: valueProp,
    isDisabled: isDisabled2,
    defaultValue,
    startWithEditView,
    isPreviewFocusable = true,
    submitOnBlur = true,
    selectAllOnFocus = true,
    placeholder,
    onEdit: onEditCallback,
    ...htmlProps
  } = props;
  const onEditProp = useCallbackRef(onEditCallback);
  const defaultIsEditing = Boolean(startWithEditView && !isDisabled2);
  const [isEditing, setIsEditing] = (0, import_react87.useState)(defaultIsEditing);
  const [value, setValue] = useControllableState({
    defaultValue: defaultValue || "",
    value: valueProp,
    onChange: onChangeProp
  });
  const [prevValue, setPrevValue] = (0, import_react87.useState)(value);
  const inputRef = (0, import_react87.useRef)(null);
  const previewRef = (0, import_react87.useRef)(null);
  const editButtonRef = (0, import_react87.useRef)(null);
  const cancelButtonRef = (0, import_react87.useRef)(null);
  const submitButtonRef = (0, import_react87.useRef)(null);
  useFocusOnPointerDown({
    ref: inputRef,
    enabled: isEditing,
    elements: [cancelButtonRef, submitButtonRef]
  });
  const isInteractive = !isEditing && !isDisabled2;
  useSafeLayoutEffect(() => {
    var _a2, _b;
    if (isEditing) {
      (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
      if (selectAllOnFocus)
        (_b = inputRef.current) == null ? void 0 : _b.select();
    }
  }, []);
  useUpdateEffect(() => {
    var _a2, _b, _c;
    if (!isEditing) {
      (_a2 = editButtonRef.current) == null ? void 0 : _a2.focus();
      return;
    }
    (_b = inputRef.current) == null ? void 0 : _b.focus();
    if (selectAllOnFocus) {
      (_c = inputRef.current) == null ? void 0 : _c.select();
    }
    onEditProp == null ? void 0 : onEditProp();
  }, [isEditing, onEditProp, selectAllOnFocus]);
  const onEdit = (0, import_react87.useCallback)(() => {
    if (isInteractive) {
      setIsEditing(true);
    }
  }, [isInteractive]);
  const onUpdatePrevValue = (0, import_react87.useCallback)(() => {
    setPrevValue(value);
  }, [value]);
  const onCancel = (0, import_react87.useCallback)(() => {
    setIsEditing(false);
    setValue(prevValue);
    onCancelProp == null ? void 0 : onCancelProp(prevValue);
  }, [onCancelProp, setValue, prevValue]);
  const onSubmit = (0, import_react87.useCallback)(() => {
    setIsEditing(false);
    setPrevValue(value);
    onSubmitProp == null ? void 0 : onSubmitProp(value);
  }, [value, onSubmitProp]);
  (0, import_react87.useEffect)(() => {
    if (isEditing)
      return;
    const inputEl = inputRef.current;
    if ((inputEl == null ? void 0 : inputEl.ownerDocument.activeElement) === inputEl) {
      inputEl == null ? void 0 : inputEl.blur();
    }
  }, [isEditing]);
  const onChange = (0, import_react87.useCallback)(
    (event) => {
      setValue(event.currentTarget.value);
    },
    [setValue]
  );
  const onKeyDown = (0, import_react87.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        Escape: onCancel,
        Enter: (event2) => {
          if (!event2.shiftKey && !event2.metaKey) {
            onSubmit();
          }
        }
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [onCancel, onSubmit]
  );
  const onKeyDownWithoutSubmit = (0, import_react87.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        Escape: onCancel
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [onCancel]
  );
  const isValueEmpty = value.length === 0;
  const onBlur3 = (0, import_react87.useCallback)(
    (event) => {
      var _a2;
      if (!isEditing)
        return;
      const doc = event.currentTarget.ownerDocument;
      const relatedTarget = (_a2 = event.relatedTarget) != null ? _a2 : doc.activeElement;
      const targetIsCancel = contains2(cancelButtonRef.current, relatedTarget);
      const targetIsSubmit = contains2(submitButtonRef.current, relatedTarget);
      const isValidBlur = !targetIsCancel && !targetIsSubmit;
      if (isValidBlur) {
        if (submitOnBlur) {
          onSubmit();
        } else {
          onCancel();
        }
      }
    },
    [submitOnBlur, onSubmit, onCancel, isEditing]
  );
  const getPreviewProps = (0, import_react87.useCallback)(
    (props2 = {}, ref = null) => {
      const tabIndex = isInteractive && isPreviewFocusable ? 0 : void 0;
      return {
        ...props2,
        ref: mergeRefs(ref, previewRef),
        children: isValueEmpty ? placeholder : value,
        hidden: isEditing,
        "aria-disabled": ariaAttr(isDisabled2),
        tabIndex,
        onFocus: callAllHandlers(props2.onFocus, onEdit, onUpdatePrevValue)
      };
    },
    [
      isDisabled2,
      isEditing,
      isInteractive,
      isPreviewFocusable,
      isValueEmpty,
      onEdit,
      onUpdatePrevValue,
      placeholder,
      value
    ]
  );
  const getInputProps = (0, import_react87.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      hidden: !isEditing,
      placeholder,
      ref: mergeRefs(ref, inputRef),
      disabled: isDisabled2,
      "aria-disabled": ariaAttr(isDisabled2),
      value,
      onBlur: callAllHandlers(props2.onBlur, onBlur3),
      onChange: callAllHandlers(props2.onChange, onChange),
      onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
      onFocus: callAllHandlers(props2.onFocus, onUpdatePrevValue)
    }),
    [
      isDisabled2,
      isEditing,
      onBlur3,
      onChange,
      onKeyDown,
      onUpdatePrevValue,
      placeholder,
      value
    ]
  );
  const getTextareaProps = (0, import_react87.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      hidden: !isEditing,
      placeholder,
      ref: mergeRefs(ref, inputRef),
      disabled: isDisabled2,
      "aria-disabled": ariaAttr(isDisabled2),
      value,
      onBlur: callAllHandlers(props2.onBlur, onBlur3),
      onChange: callAllHandlers(props2.onChange, onChange),
      onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDownWithoutSubmit),
      onFocus: callAllHandlers(props2.onFocus, onUpdatePrevValue)
    }),
    [
      isDisabled2,
      isEditing,
      onBlur3,
      onChange,
      onKeyDownWithoutSubmit,
      onUpdatePrevValue,
      placeholder,
      value
    ]
  );
  const getEditButtonProps = (0, import_react87.useCallback)(
    (props2 = {}, ref = null) => ({
      "aria-label": "Edit",
      ...props2,
      type: "button",
      onClick: callAllHandlers(props2.onClick, onEdit),
      ref: mergeRefs(ref, editButtonRef),
      disabled: isDisabled2
    }),
    [onEdit, isDisabled2]
  );
  const getSubmitButtonProps = (0, import_react87.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      "aria-label": "Submit",
      ref: mergeRefs(submitButtonRef, ref),
      type: "button",
      onClick: callAllHandlers(props2.onClick, onSubmit),
      disabled: isDisabled2
    }),
    [onSubmit, isDisabled2]
  );
  const getCancelButtonProps = (0, import_react87.useCallback)(
    (props2 = {}, ref = null) => ({
      "aria-label": "Cancel",
      id: "cancel",
      ...props2,
      ref: mergeRefs(cancelButtonRef, ref),
      type: "button",
      onClick: callAllHandlers(props2.onClick, onCancel),
      disabled: isDisabled2
    }),
    [onCancel, isDisabled2]
  );
  return {
    isEditing,
    isDisabled: isDisabled2,
    isValueEmpty,
    value,
    onEdit,
    onCancel,
    onSubmit,
    getPreviewProps,
    getInputProps,
    getTextareaProps,
    getEditButtonProps,
    getSubmitButtonProps,
    getCancelButtonProps,
    htmlProps
  };
}

// node_modules/@chakra-ui/editable/dist/chunk-QPHHI44J.mjs
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
var Editable = forwardRef(function Editable2(props, ref) {
  const styles = useMultiStyleConfig("Editable", props);
  const ownProps = omitThemingProps(props);
  const { htmlProps, ...context } = useEditable(ownProps);
  const { isEditing, onSubmit, onCancel, onEdit } = context;
  const _className = cx("chakra-editable", props.className);
  const children = runIfFn(props.children, {
    isEditing,
    onSubmit,
    onCancel,
    onEdit
  });
  return (0, import_jsx_runtime60.jsx)(EditableProvider, { value: context, children: (0, import_jsx_runtime60.jsx)(EditableStylesProvider, { value: styles, children: (0, import_jsx_runtime60.jsx)(
    chakra.div,
    {
      ref,
      ...htmlProps,
      className: _className,
      children
    }
  ) }) });
});
Editable.displayName = "Editable";

// node_modules/@chakra-ui/editable/dist/chunk-CPGHDSNL.mjs
function useEditableControls() {
  const {
    isEditing,
    getEditButtonProps,
    getCancelButtonProps,
    getSubmitButtonProps
  } = useEditableContext();
  return {
    isEditing,
    getEditButtonProps,
    getCancelButtonProps,
    getSubmitButtonProps
  };
}

// node_modules/react-focus-lock/dist/es2015/Combination.js
var React19 = __toESM(require_react());

// node_modules/react-focus-lock/dist/es2015/Lock.js
var React16 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/focus-lock/dist/es2015/constants.js
var FOCUS_GROUP = "data-focus-lock";
var FOCUS_DISABLED = "data-focus-lock-disabled";
var FOCUS_ALLOW = "data-no-focus-lock";
var FOCUS_AUTO = "data-autofocus-inside";
var FOCUS_NO_AUTOFOCUS = "data-no-autofocus";

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef2(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react88 = __toESM(require_react());
function useCallbackRef2(initialValue, callback) {
  var ref = (0, import_react88.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
function useMergeRefs2(refs, defaultValue) {
  return useCallbackRef2(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef2(ref, newValue);
    });
  });
}

// node_modules/react-focus-lock/dist/es2015/Lock.js
var import_react91 = __toESM(require_react());

// node_modules/react-focus-lock/dist/es2015/FocusGuard.js
var React12 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var hiddenGuard = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
var InFocusGuard = function InFocusGuard2(_ref2) {
  var children = _ref2.children;
  return React12.createElement(React12.Fragment, null, React12.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }), children, children && React12.createElement("div", {
    key: "guard-last",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }));
};
InFocusGuard.propTypes = true ? {
  children: import_prop_types.default.node
} : {};
InFocusGuard.defaultProps = {
  children: null
};

// node_modules/tslib/tslib.es6.js
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/use-sidecar/dist/es2015/hoc.js
var React13 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/hook.js
var import_react89 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults2, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults2;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter4) {
          pendingQueue = pendingQueue.filter(filter4);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createMedium(defaults2, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  return innerCreateMedium(defaults2, middleware);
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/renderProp.js
var React14 = __toESM(require_react());
var import_react90 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/exports.js
var React15 = __toESM(require_react());
var SideCar = function(_a2) {
  var sideCar2 = _a2.sideCar, rest = __rest(_a2, ["sideCar"]);
  if (!sideCar2) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar2.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React15.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-focus-lock/dist/es2015/medium.js
var mediumFocus = createMedium({}, function(_ref2) {
  var target = _ref2.target, currentTarget = _ref2.currentTarget;
  return {
    target,
    currentTarget
  };
});
var mediumBlur = createMedium();
var mediumEffect = createMedium();
var mediumSidecar = createSidecarMedium({
  async: true
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
});

// node_modules/react-focus-lock/dist/es2015/Lock.js
var emptyArray = [];
var FocusLock = React16.forwardRef(function FocusLockUI(props, parentRef) {
  var _extends2;
  var _React$useState = React16.useState(), realObserved = _React$useState[0], setObserved = _React$useState[1];
  var observed = React16.useRef();
  var isActive = React16.useRef(false);
  var originalFocusedElement = React16.useRef(null);
  var children = props.children, disabled = props.disabled, noFocusGuards = props.noFocusGuards, persistentFocus = props.persistentFocus, crossFrame = props.crossFrame, autoFocus = props.autoFocus, allowTextSelection = props.allowTextSelection, group = props.group, className = props.className, whiteList = props.whiteList, hasPositiveIndices = props.hasPositiveIndices, _props$shards = props.shards, shards = _props$shards === void 0 ? emptyArray : _props$shards, _props$as = props.as, Container3 = _props$as === void 0 ? "div" : _props$as, _props$lockProps = props.lockProps, containerProps = _props$lockProps === void 0 ? {} : _props$lockProps, SideCar2 = props.sideCar, shouldReturnFocus = props.returnFocus, focusOptions = props.focusOptions, onActivationCallback = props.onActivation, onDeactivationCallback = props.onDeactivation;
  var _React$useState2 = React16.useState({}), id4 = _React$useState2[0];
  var onActivation = React16.useCallback(function() {
    originalFocusedElement.current = originalFocusedElement.current || document && document.activeElement;
    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }
    isActive.current = true;
  }, [onActivationCallback]);
  var onDeactivation = React16.useCallback(function() {
    isActive.current = false;
    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
  }, [onDeactivationCallback]);
  (0, import_react91.useEffect)(function() {
    if (!disabled) {
      originalFocusedElement.current = null;
    }
  }, []);
  var returnFocus = React16.useCallback(function(allowDefer) {
    var returnFocusTo = originalFocusedElement.current;
    if (returnFocusTo && returnFocusTo.focus) {
      var howToReturnFocus = typeof shouldReturnFocus === "function" ? shouldReturnFocus(returnFocusTo) : shouldReturnFocus;
      if (howToReturnFocus) {
        var returnFocusOptions = typeof howToReturnFocus === "object" ? howToReturnFocus : void 0;
        originalFocusedElement.current = null;
        if (allowDefer) {
          Promise.resolve().then(function() {
            return returnFocusTo.focus(returnFocusOptions);
          });
        } else {
          returnFocusTo.focus(returnFocusOptions);
        }
      }
    }
  }, [shouldReturnFocus]);
  var onFocus3 = React16.useCallback(function(event) {
    if (isActive.current) {
      mediumFocus.useMedium(event);
    }
  }, []);
  var onBlur3 = mediumBlur.useMedium;
  var setObserveNode = React16.useCallback(function(newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);
  if (true) {
    if (typeof allowTextSelection !== "undefined") {
      console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default");
    }
    React16.useEffect(function() {
      if (!observed.current && typeof Container3 !== "string") {
        console.error("FocusLock: could not obtain ref to internal node");
      }
    }, []);
  }
  var lockProps = _extends((_extends2 = {}, _extends2[FOCUS_DISABLED] = disabled && "disabled", _extends2[FOCUS_GROUP] = group, _extends2), containerProps);
  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== "tail";
  var mergedRef = useMergeRefs2([parentRef, setObserveNode]);
  return React16.createElement(React16.Fragment, null, hasLeadingGuards && [
    // nearest focus guard
    React16.createElement("div", {
      key: "guard-first",
      "data-focus-guard": true,
      tabIndex: disabled ? -1 : 0,
      style: hiddenGuard
    }),
    // first tabbed element guard
    hasPositiveIndices ? React16.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": true,
      tabIndex: disabled ? -1 : 1,
      style: hiddenGuard
    }) : null
  ], !disabled && React16.createElement(SideCar2, {
    id: id4,
    sideCar: mediumSidecar,
    observed: realObserved,
    disabled,
    persistentFocus,
    crossFrame,
    autoFocus,
    whiteList,
    shards,
    onActivation,
    onDeactivation,
    returnFocus,
    focusOptions
  }), React16.createElement(Container3, _extends({
    ref: mergedRef
  }, lockProps, {
    className,
    onBlur: onBlur3,
    onFocus: onFocus3
  }), children), hasTailingGuards && React16.createElement("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }));
});
FocusLock.propTypes = true ? {
  children: import_prop_types2.node,
  disabled: import_prop_types2.bool,
  returnFocus: (0, import_prop_types2.oneOfType)([import_prop_types2.bool, import_prop_types2.object, import_prop_types2.func]),
  focusOptions: import_prop_types2.object,
  noFocusGuards: import_prop_types2.bool,
  hasPositiveIndices: import_prop_types2.bool,
  allowTextSelection: import_prop_types2.bool,
  autoFocus: import_prop_types2.bool,
  persistentFocus: import_prop_types2.bool,
  crossFrame: import_prop_types2.bool,
  group: import_prop_types2.string,
  className: import_prop_types2.string,
  whiteList: import_prop_types2.func,
  shards: (0, import_prop_types2.arrayOf)(import_prop_types2.any),
  as: (0, import_prop_types2.oneOfType)([import_prop_types2.string, import_prop_types2.func, import_prop_types2.object]),
  lockProps: import_prop_types2.object,
  onActivation: import_prop_types2.func,
  onDeactivation: import_prop_types2.func,
  sideCar: import_prop_types2.any.isRequired
} : {};
FocusLock.defaultProps = {
  children: void 0,
  disabled: false,
  returnFocus: false,
  focusOptions: void 0,
  noFocusGuards: false,
  autoFocus: true,
  persistentFocus: false,
  crossFrame: true,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0
};
var Lock_default = FocusLock;

// node_modules/react-focus-lock/dist/es2015/Trap.js
var React18 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/react-clientside-effect/lib/index.es.js
var import_react92 = __toESM(require_react());
function withSideEffect(reducePropsToState2, handleStateChangeOnClient2) {
  if (true) {
    if (typeof reducePropsToState2 !== "function") {
      throw new Error("Expected reducePropsToState to be a function.");
    }
    if (typeof handleStateChangeOnClient2 !== "function") {
      throw new Error("Expected handleStateChangeOnClient to be a function.");
    }
  }
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
  }
  return function wrap3(WrappedComponent) {
    if (true) {
      if (typeof WrappedComponent !== "function") {
        throw new Error("Expected WrappedComponent to be a React component.");
      }
    }
    var mountedInstances = [];
    var state;
    function emitChange() {
      state = reducePropsToState2(mountedInstances.map(function(instance) {
        return instance.props;
      }));
      handleStateChangeOnClient2(state);
    }
    var SideEffect = function(_PureComponent) {
      _inheritsLoose(SideEffect2, _PureComponent);
      function SideEffect2() {
        return _PureComponent.apply(this, arguments) || this;
      }
      SideEffect2.peek = function peek() {
        return state;
      };
      var _proto = SideEffect2.prototype;
      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };
      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        var index2 = mountedInstances.indexOf(this);
        mountedInstances.splice(index2, 1);
        emitChange();
      };
      _proto.render = function render() {
        return import_react92.default.createElement(WrappedComponent, this.props);
      };
      return SideEffect2;
    }(import_react92.PureComponent);
    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");
    return SideEffect;
  };
}
var index_es_default = withSideEffect;

// node_modules/focus-lock/dist/es2015/utils/array.js
var toArray = function(a) {
  var ret = Array(a.length);
  for (var i = 0; i < a.length; ++i) {
    ret[i] = a[i];
  }
  return ret;
};
var asArray = function(a) {
  return Array.isArray(a) ? a : [a];
};
var getFirst = function(a) {
  return Array.isArray(a) ? a[0] : a;
};

// node_modules/focus-lock/dist/es2015/utils/is.js
var isElementHidden = function(node2) {
  if (node2.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }
  var computedStyle = window.getComputedStyle(node2, null);
  if (!computedStyle || !computedStyle.getPropertyValue) {
    return false;
  }
  return computedStyle.getPropertyValue("display") === "none" || computedStyle.getPropertyValue("visibility") === "hidden";
};
var getParentNode = function(node2) {
  return node2.parentNode && node2.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    node2.parentNode.host
  ) : node2.parentNode;
};
var isTopNode = function(node2) {
  return node2 === document || node2 && node2.nodeType === Node.DOCUMENT_NODE;
};
var isVisibleUncached = function(node2, checkParent) {
  return !node2 || isTopNode(node2) || !isElementHidden(node2) && checkParent(getParentNode(node2));
};
var isVisibleCached = function(visibilityCache, node2) {
  var cached = visibilityCache.get(node2);
  if (cached !== void 0) {
    return cached;
  }
  var result = isVisibleUncached(node2, isVisibleCached.bind(void 0, visibilityCache));
  visibilityCache.set(node2, result);
  return result;
};
var isAutoFocusAllowedUncached = function(node2, checkParent) {
  return node2 && !isTopNode(node2) ? isAutoFocusAllowed(node2) ? checkParent(getParentNode(node2)) : false : true;
};
var isAutoFocusAllowedCached = function(cache, node2) {
  var cached = cache.get(node2);
  if (cached !== void 0) {
    return cached;
  }
  var result = isAutoFocusAllowedUncached(node2, isAutoFocusAllowedCached.bind(void 0, cache));
  cache.set(node2, result);
  return result;
};
var getDataset = function(node2) {
  return node2.dataset;
};
var isHTMLButtonElement = function(node2) {
  return node2.tagName === "BUTTON";
};
var isHTMLInputElement = function(node2) {
  return node2.tagName === "INPUT";
};
var isRadioElement = function(node2) {
  return isHTMLInputElement(node2) && node2.type === "radio";
};
var notHiddenInput = function(node2) {
  return !((isHTMLInputElement(node2) || isHTMLButtonElement(node2)) && (node2.type === "hidden" || node2.disabled));
};
var isAutoFocusAllowed = function(node2) {
  var attribute = node2.getAttribute(FOCUS_NO_AUTOFOCUS);
  return ![true, "true", ""].includes(attribute);
};
var isGuard = function(node2) {
  var _a2;
  return Boolean(node2 && ((_a2 = getDataset(node2)) === null || _a2 === void 0 ? void 0 : _a2.focusGuard));
};
var isNotAGuard = function(node2) {
  return !isGuard(node2);
};
var isDefined = function(x) {
  return Boolean(x);
};

// node_modules/focus-lock/dist/es2015/utils/tabOrder.js
var tabSort = function(a, b) {
  var tabDiff = a.tabIndex - b.tabIndex;
  var indexDiff = a.index - b.index;
  if (tabDiff) {
    if (!a.tabIndex) {
      return 1;
    }
    if (!b.tabIndex) {
      return -1;
    }
  }
  return tabDiff || indexDiff;
};
var orderByTabIndex = function(nodes, filterNegative, keepGuards) {
  return toArray(nodes).map(function(node2, index2) {
    return {
      node: node2,
      index: index2,
      tabIndex: keepGuards && node2.tabIndex === -1 ? (node2.dataset || {}).focusGuard ? 0 : -1 : node2.tabIndex
    };
  }).filter(function(data) {
    return !filterNegative || data.tabIndex >= 0;
  }).sort(tabSort);
};

// node_modules/focus-lock/dist/es2015/utils/tabbables.js
var tabbables = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  // elements with explicit roles will also use explicit tabindex
  // '[role="button"]',
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
];

// node_modules/focus-lock/dist/es2015/utils/tabUtils.js
var queryTabbables = tabbables.join(",");
var queryGuardTabbables = "".concat(queryTabbables, ", [data-focus-guard]");
var getFocusablesWithShadowDom = function(parent, withGuards) {
  return toArray((parent.shadowRoot || parent).children).reduce(function(acc, child) {
    return acc.concat(child.matches(withGuards ? queryGuardTabbables : queryTabbables) ? [child] : [], getFocusablesWithShadowDom(child));
  }, []);
};
var getFocusablesWithIFrame = function(parent, withGuards) {
  var _a2;
  if (parent instanceof HTMLIFrameElement && ((_a2 = parent.contentDocument) === null || _a2 === void 0 ? void 0 : _a2.body)) {
    return getFocusables([parent.contentDocument.body], withGuards);
  }
  return [parent];
};
var getFocusables = function(parents, withGuards) {
  return parents.reduce(function(acc, parent) {
    var _a2;
    var focusableWithShadowDom = getFocusablesWithShadowDom(parent, withGuards);
    var focusableWithIframes = (_a2 = []).concat.apply(_a2, focusableWithShadowDom.map(function(node2) {
      return getFocusablesWithIFrame(node2, withGuards);
    }));
    return acc.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      focusableWithIframes,
      // add if node is tabbable itself
      parent.parentNode ? toArray(parent.parentNode.querySelectorAll(queryTabbables)).filter(function(node2) {
        return node2 === parent;
      }) : []
    );
  }, []);
};
var getParentAutofocusables = function(parent) {
  var parentFocus = parent.querySelectorAll("[".concat(FOCUS_AUTO, "]"));
  return toArray(parentFocus).map(function(node2) {
    return getFocusables([node2]);
  }).reduce(function(acc, nodes) {
    return acc.concat(nodes);
  }, []);
};

// node_modules/focus-lock/dist/es2015/utils/DOMutils.js
var filterFocusable = function(nodes, visibilityCache) {
  return toArray(nodes).filter(function(node2) {
    return isVisibleCached(visibilityCache, node2);
  }).filter(function(node2) {
    return notHiddenInput(node2);
  });
};
var filterAutoFocusable = function(nodes, cache) {
  if (cache === void 0) {
    cache = /* @__PURE__ */ new Map();
  }
  return toArray(nodes).filter(function(node2) {
    return isAutoFocusAllowedCached(cache, node2);
  });
};
var getTabbableNodes = function(topNodes, visibilityCache, withGuards) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes, withGuards), visibilityCache), true, withGuards);
};
var getAllTabbableNodes = function(topNodes, visibilityCache) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes), visibilityCache), false);
};
var parentAutofocusables = function(topNode, visibilityCache) {
  return filterFocusable(getParentAutofocusables(topNode), visibilityCache);
};
var contains3 = function(scope, element) {
  if (scope.shadowRoot) {
    return contains3(scope.shadowRoot, element);
  } else {
    if (Object.getPrototypeOf(scope).contains !== void 0 && Object.getPrototypeOf(scope).contains.call(scope, element)) {
      return true;
    }
    return toArray(scope.children).some(function(child) {
      var _a2;
      if (child instanceof HTMLIFrameElement) {
        var iframeBody = (_a2 = child.contentDocument) === null || _a2 === void 0 ? void 0 : _a2.body;
        if (iframeBody) {
          return contains3(iframeBody, element);
        }
        return false;
      }
      return contains3(child, element);
    });
  }
};

// node_modules/focus-lock/dist/es2015/utils/all-affected.js
var filterNested = function(nodes) {
  var contained = /* @__PURE__ */ new Set();
  var l = nodes.length;
  for (var i = 0; i < l; i += 1) {
    for (var j = i + 1; j < l; j += 1) {
      var position2 = nodes[i].compareDocumentPosition(nodes[j]);
      if ((position2 & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) {
        contained.add(j);
      }
      if ((position2 & Node.DOCUMENT_POSITION_CONTAINS) > 0) {
        contained.add(i);
      }
    }
  }
  return nodes.filter(function(_, index2) {
    return !contained.has(index2);
  });
};
var getTopParent = function(node2) {
  return node2.parentNode ? getTopParent(node2.parentNode) : node2;
};
var getAllAffectedNodes = function(node2) {
  var nodes = asArray(node2);
  return nodes.filter(Boolean).reduce(function(acc, currentNode) {
    var group = currentNode.getAttribute(FOCUS_GROUP);
    acc.push.apply(acc, group ? filterNested(toArray(getTopParent(currentNode).querySelectorAll("[".concat(FOCUS_GROUP, '="').concat(group, '"]:not([').concat(FOCUS_DISABLED, '="disabled"])')))) : [currentNode]);
    return acc;
  }, []);
};

// node_modules/focus-lock/dist/es2015/utils/safe.js
var safeProbe = function(cb) {
  try {
    return cb();
  } catch (e) {
    return void 0;
  }
};

// node_modules/focus-lock/dist/es2015/utils/getActiveElement.js
var getActiveElement2 = function(inDocument) {
  if (inDocument === void 0) {
    inDocument = document;
  }
  if (!inDocument || !inDocument.activeElement) {
    return void 0;
  }
  var activeElement = inDocument.activeElement;
  return activeElement.shadowRoot ? getActiveElement2(activeElement.shadowRoot) : activeElement instanceof HTMLIFrameElement && safeProbe(function() {
    return activeElement.contentWindow.document;
  }) ? getActiveElement2(activeElement.contentWindow.document) : activeElement;
};

// node_modules/focus-lock/dist/es2015/focusInside.js
var focusInFrame = function(frame, activeElement) {
  return frame === activeElement;
};
var focusInsideIframe = function(topNode, activeElement) {
  return Boolean(toArray(topNode.querySelectorAll("iframe")).some(function(node2) {
    return focusInFrame(node2, activeElement);
  }));
};
var focusInside = function(topNode, activeElement) {
  if (activeElement === void 0) {
    activeElement = getActiveElement2(getFirst(topNode).ownerDocument);
  }
  if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) {
    return false;
  }
  return getAllAffectedNodes(topNode).some(function(node2) {
    return contains3(node2, activeElement) || focusInsideIframe(node2, activeElement);
  });
};

// node_modules/focus-lock/dist/es2015/focusIsHidden.js
var focusIsHidden = function(inDocument) {
  if (inDocument === void 0) {
    inDocument = document;
  }
  var activeElement = getActiveElement2(inDocument);
  if (!activeElement) {
    return false;
  }
  return toArray(inDocument.querySelectorAll("[".concat(FOCUS_ALLOW, "]"))).some(function(node2) {
    return contains3(node2, activeElement);
  });
};

// node_modules/focus-lock/dist/es2015/utils/correctFocus.js
var findSelectedRadio = function(node2, nodes) {
  return nodes.filter(isRadioElement).filter(function(el) {
    return el.name === node2.name;
  }).filter(function(el) {
    return el.checked;
  })[0] || node2;
};
var correctNode = function(node2, nodes) {
  if (isRadioElement(node2) && node2.name) {
    return findSelectedRadio(node2, nodes);
  }
  return node2;
};
var correctNodes = function(nodes) {
  var resultSet = /* @__PURE__ */ new Set();
  nodes.forEach(function(node2) {
    return resultSet.add(correctNode(node2, nodes));
  });
  return nodes.filter(function(node2) {
    return resultSet.has(node2);
  });
};

// node_modules/focus-lock/dist/es2015/utils/firstFocus.js
var pickFirstFocus = function(nodes) {
  if (nodes[0] && nodes.length > 1) {
    return correctNode(nodes[0], nodes);
  }
  return nodes[0];
};
var pickFocusable = function(nodes, index2) {
  if (nodes.length > 1) {
    return nodes.indexOf(correctNode(nodes[index2], nodes));
  }
  return index2;
};

// node_modules/focus-lock/dist/es2015/solver.js
var NEW_FOCUS = "NEW_FOCUS";
var newFocus = function(innerNodes, outerNodes, activeElement, lastNode) {
  var cnt = innerNodes.length;
  var firstFocus = innerNodes[0];
  var lastFocus = innerNodes[cnt - 1];
  var isOnGuard = isGuard(activeElement);
  if (activeElement && innerNodes.indexOf(activeElement) >= 0) {
    return void 0;
  }
  var activeIndex = activeElement !== void 0 ? outerNodes.indexOf(activeElement) : -1;
  var lastIndex = lastNode ? outerNodes.indexOf(lastNode) : activeIndex;
  var lastNodeInside = lastNode ? innerNodes.indexOf(lastNode) : -1;
  var indexDiff = activeIndex - lastIndex;
  var firstNodeIndex = outerNodes.indexOf(firstFocus);
  var lastNodeIndex = outerNodes.indexOf(lastFocus);
  var correctedNodes = correctNodes(outerNodes);
  var correctedIndex = activeElement !== void 0 ? correctedNodes.indexOf(activeElement) : -1;
  var correctedIndexDiff = correctedIndex - (lastNode ? correctedNodes.indexOf(lastNode) : activeIndex);
  var returnFirstNode = pickFocusable(innerNodes, 0);
  var returnLastNode = pickFocusable(innerNodes, cnt - 1);
  if (activeIndex === -1 || lastNodeInside === -1) {
    return NEW_FOCUS;
  }
  if (!indexDiff && lastNodeInside >= 0) {
    return lastNodeInside;
  }
  if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnLastNode;
  }
  if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnFirstNode;
  }
  if (indexDiff && Math.abs(correctedIndexDiff) > 1) {
    return lastNodeInside;
  }
  if (activeIndex <= firstNodeIndex) {
    return returnLastNode;
  }
  if (activeIndex > lastNodeIndex) {
    return returnFirstNode;
  }
  if (indexDiff) {
    if (Math.abs(indexDiff) > 1) {
      return lastNodeInside;
    }
    return (cnt + lastNodeInside + indexDiff) % cnt;
  }
  return void 0;
};

// node_modules/focus-lock/dist/es2015/utils/auto-focus.js
var findAutoFocused = function(autoFocusables) {
  return function(node2) {
    var _a2;
    var autofocus = (_a2 = getDataset(node2)) === null || _a2 === void 0 ? void 0 : _a2.autofocus;
    return (
      // @ts-expect-error
      node2.autofocus || //
      autofocus !== void 0 && autofocus !== "false" || //
      autoFocusables.indexOf(node2) >= 0
    );
  };
};
var pickAutofocus = function(nodesIndexes, orderedNodes, groups) {
  var nodes = nodesIndexes.map(function(_a2) {
    var node2 = _a2.node;
    return node2;
  });
  var autoFocusable = filterAutoFocusable(nodes.filter(findAutoFocused(groups)));
  if (autoFocusable && autoFocusable.length) {
    return pickFirstFocus(autoFocusable);
  }
  return pickFirstFocus(filterAutoFocusable(orderedNodes));
};

// node_modules/focus-lock/dist/es2015/utils/parenting.js
var getParents = function(node2, parents) {
  if (parents === void 0) {
    parents = [];
  }
  parents.push(node2);
  if (node2.parentNode) {
    getParents(node2.parentNode.host || node2.parentNode, parents);
  }
  return parents;
};
var getCommonParent = function(nodeA, nodeB) {
  var parentsA = getParents(nodeA);
  var parentsB = getParents(nodeB);
  for (var i = 0; i < parentsA.length; i += 1) {
    var currentParent = parentsA[i];
    if (parentsB.indexOf(currentParent) >= 0) {
      return currentParent;
    }
  }
  return false;
};
var getTopCommonParent = function(baseActiveElement, leftEntry, rightEntries) {
  var activeElements = asArray(baseActiveElement);
  var leftEntries = asArray(leftEntry);
  var activeElement = activeElements[0];
  var topCommon = false;
  leftEntries.filter(Boolean).forEach(function(entry) {
    topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
    rightEntries.filter(Boolean).forEach(function(subEntry) {
      var common = getCommonParent(activeElement, subEntry);
      if (common) {
        if (!topCommon || contains3(common, topCommon)) {
          topCommon = common;
        } else {
          topCommon = getCommonParent(common, topCommon);
        }
      }
    });
  });
  return topCommon;
};
var allParentAutofocusables = function(entries, visibilityCache) {
  return entries.reduce(function(acc, node2) {
    return acc.concat(parentAutofocusables(node2, visibilityCache));
  }, []);
};

// node_modules/focus-lock/dist/es2015/focusMerge.js
var reorderNodes = function(srcNodes, dstNodes) {
  var remap = /* @__PURE__ */ new Map();
  dstNodes.forEach(function(entity) {
    return remap.set(entity.node, entity);
  });
  return srcNodes.map(function(node2) {
    return remap.get(node2);
  }).filter(isDefined);
};
var getFocusMerge = function(topNode, lastNode) {
  var activeElement = getActiveElement2(asArray(topNode).length > 0 ? document : getFirst(topNode).ownerDocument);
  var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
  var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);
  var visibilityCache = /* @__PURE__ */ new Map();
  var anyFocusable = getAllTabbableNodes(entries, visibilityCache);
  var innerElements = getTabbableNodes(entries, visibilityCache).filter(function(_a2) {
    var node2 = _a2.node;
    return isNotAGuard(node2);
  });
  if (!innerElements[0]) {
    innerElements = anyFocusable;
    if (!innerElements[0]) {
      return void 0;
    }
  }
  var outerNodes = getAllTabbableNodes([commonParent], visibilityCache).map(function(_a2) {
    var node2 = _a2.node;
    return node2;
  });
  var orderedInnerElements = reorderNodes(outerNodes, innerElements);
  var innerNodes = orderedInnerElements.map(function(_a2) {
    var node2 = _a2.node;
    return node2;
  });
  var newId = newFocus(innerNodes, outerNodes, activeElement, lastNode);
  if (newId === NEW_FOCUS) {
    var focusNode = pickAutofocus(anyFocusable, innerNodes, allParentAutofocusables(entries, visibilityCache));
    if (focusNode) {
      return { node: focusNode };
    } else {
      console.warn("focus-lock: cannot find any node to move focus into");
      return void 0;
    }
  }
  if (newId === void 0) {
    return newId;
  }
  return orderedInnerElements[newId];
};

// node_modules/focus-lock/dist/es2015/focusables.js
var getFocusabledIn = function(topNode) {
  var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
  var commonParent = getTopCommonParent(topNode, topNode, entries);
  var visibilityCache = /* @__PURE__ */ new Map();
  var outerNodes = getTabbableNodes([commonParent], visibilityCache, true);
  var innerElements = getTabbableNodes(entries, visibilityCache).filter(function(_a2) {
    var node2 = _a2.node;
    return isNotAGuard(node2);
  }).map(function(_a2) {
    var node2 = _a2.node;
    return node2;
  });
  return outerNodes.map(function(_a2) {
    var node2 = _a2.node, index2 = _a2.index;
    return {
      node: node2,
      index: index2,
      lockItem: innerElements.indexOf(node2) >= 0,
      guard: isGuard(node2)
    };
  });
};

// node_modules/focus-lock/dist/es2015/setFocus.js
var focusOn = function(target, focusOptions) {
  if ("focus" in target) {
    target.focus(focusOptions);
  }
  if ("contentWindow" in target && target.contentWindow) {
    target.contentWindow.focus();
  }
};
var guardCount = 0;
var lockDisabled = false;
var setFocus = function(topNode, lastNode, options) {
  if (options === void 0) {
    options = {};
  }
  var focusable = getFocusMerge(topNode, lastNode);
  if (lockDisabled) {
    return;
  }
  if (focusable) {
    if (guardCount > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting");
      lockDisabled = true;
      setTimeout(function() {
        lockDisabled = false;
      }, 1);
      return;
    }
    guardCount++;
    focusOn(focusable.node, options.focusOptions);
    guardCount--;
  }
};

// node_modules/focus-lock/dist/es2015/index.js
var es2015_default = setFocus;

// node_modules/react-focus-lock/dist/es2015/util.js
function deferAction(action) {
  var _window = window, setImmediate = _window.setImmediate;
  if (typeof setImmediate !== "undefined") {
    setImmediate(action);
  } else {
    setTimeout(action, 1);
  }
}
var inlineProp = function inlineProp2(name, value) {
  var obj = {};
  obj[name] = value;
  return obj;
};

// node_modules/react-focus-lock/dist/es2015/Trap.js
var focusOnBody = function focusOnBody2() {
  return document && document.activeElement === document.body;
};
var isFreeFocus = function isFreeFocus2() {
  return focusOnBody() || focusIsHidden();
};
var lastActiveTrap = null;
var lastActiveFocus = null;
var lastPortaledElement = null;
var focusWasOutsideWindow = false;
var defaultWhitelist = function defaultWhitelist2() {
  return true;
};
var focusWhitelisted = function focusWhitelisted2(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};
var recordPortal = function recordPortal2(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode,
    portaledElement
  };
};
var focusIsPortaledPair = function focusIsPortaledPair2(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};
function autoGuard(startIndex, end2, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;
  do {
    var item = allNodes[i];
    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        return;
      }
      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end2);
  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}
var extractRef = function extractRef2(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var focusWasOutside = function focusWasOutside2(crossFrameOption) {
  if (crossFrameOption) {
    return Boolean(focusWasOutsideWindow);
  }
  return focusWasOutsideWindow === "meanwhile";
};
var checkInHost = function checkInHost2(check, el, boundary) {
  return el && // find host equal to active element and check nested active element
  (el.host === check && (!el.activeElement || boundary.contains(el.activeElement)) || el.parentNode && checkInHost2(check, el.parentNode, boundary));
};
var withinHost = function withinHost2(activeElement, workingArea) {
  return workingArea.some(function(area) {
    return checkInHost(activeElement, area, area);
  });
};
var activateTrap = function activateTrap2() {
  var result = false;
  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap, observed = _lastActiveTrap.observed, persistentFocus = _lastActiveTrap.persistentFocus, autoFocus = _lastActiveTrap.autoFocus, shards = _lastActiveTrap.shards, crossFrame = _lastActiveTrap.crossFrame, focusOptions = _lastActiveTrap.focusOptions;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    var activeElement = document && document.activeElement;
    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));
      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || focusWasOutside(crossFrame) || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !// active element is "inside" working area
          (focusInside(workingArea) || // check for shadow-dom contained elements
          activeElement && withinHost(activeElement, workingArea) || focusIsPortaledPair(activeElement, workingNode))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              if (activeElement.blur) {
                activeElement.blur();
              }
              document.body.focus();
            } else {
              result = es2015_default(workingArea, lastActiveFocus, {
                focusOptions
              });
              lastPortaledElement = {};
            }
          }
          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
        }
      }
      if (document) {
        var newActiveElement = document && document.activeElement;
        var allNodes = getFocusabledIn(workingArea);
        var focusedIndex = allNodes.map(function(_ref2) {
          var node2 = _ref2.node;
          return node2;
        }).indexOf(newActiveElement);
        if (focusedIndex > -1) {
          allNodes.filter(function(_ref2) {
            var guard = _ref2.guard, node2 = _ref2.node;
            return guard && node2.dataset.focusAutoGuard;
          }).forEach(function(_ref3) {
            var node2 = _ref3.node;
            return node2.removeAttribute("tabIndex");
          });
          autoGuard(focusedIndex, allNodes.length, 1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }
  return result;
};
var onTrap = function onTrap2(event) {
  if (activateTrap() && event) {
    event.stopPropagation();
    event.preventDefault();
  }
};
var onBlur = function onBlur2() {
  return deferAction(activateTrap);
};
var onFocus = function onFocus2(event) {
  var source = event.target;
  var currentNode = event.currentTarget;
  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};
var FocusWatcher = function FocusWatcher2() {
  return null;
};
var FocusTrap = function FocusTrap2(_ref4) {
  var children = _ref4.children;
  return React18.createElement("div", {
    onBlur,
    onFocus
  }, children);
};
FocusTrap.propTypes = true ? {
  children: import_prop_types3.default.node.isRequired
} : {};
var onWindowBlur2 = function onWindowBlur3() {
  focusWasOutsideWindow = "just";
  setTimeout(function() {
    focusWasOutsideWindow = "meanwhile";
  }, 0);
};
var attachHandler = function attachHandler2() {
  document.addEventListener("focusin", onTrap);
  document.addEventListener("focusout", onBlur);
  window.addEventListener("blur", onWindowBlur2);
};
var detachHandler = function detachHandler2() {
  document.removeEventListener("focusin", onTrap);
  document.removeEventListener("focusout", onBlur);
  window.removeEventListener("blur", onWindowBlur2);
};
function reducePropsToState(propsList) {
  return propsList.filter(function(_ref5) {
    var disabled = _ref5.disabled;
    return !disabled;
  });
}
function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];
  if (trap && !lastActiveTrap) {
    attachHandler();
  }
  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;
  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation();
    if (!traps.filter(function(_ref6) {
      var id4 = _ref6.id;
      return id4 === lastTrap.id;
    }).length) {
      lastTrap.returnFocus(!trap);
    }
  }
  if (trap) {
    lastActiveFocus = null;
    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation();
    }
    activateTrap(true);
    deferAction(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
}
mediumFocus.assignSyncMedium(onFocus);
mediumBlur.assignMedium(onBlur);
mediumEffect.assignMedium(function(cb) {
  return cb({
    moveFocusInside: es2015_default,
    focusInside
  });
});
var Trap_default = index_es_default(reducePropsToState, handleStateChangeOnClient)(FocusWatcher);

// node_modules/react-focus-lock/dist/es2015/Combination.js
var FocusLockCombination = React19.forwardRef(function FocusLockUICombination(props, ref) {
  return React19.createElement(Lock_default, _extends({
    sideCar: Trap_default,
    ref
  }, props));
});
var _ref = Lock_default.propTypes || {};
var sideCar = _ref.sideCar;
var propTypes = _objectWithoutPropertiesLoose(_ref, ["sideCar"]);
FocusLockCombination.propTypes = true ? propTypes : {};
var Combination_default = FocusLockCombination;

// node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js
var React20 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
var AutoFocusInside = function AutoFocusInside2(_ref2) {
  var _ref$disabled = _ref2.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, children = _ref2.children, _ref$className = _ref2.className, className = _ref$className === void 0 ? void 0 : _ref$className;
  return React20.createElement("div", _extends({}, inlineProp(FOCUS_AUTO, !disabled), {
    className
  }), children);
};
AutoFocusInside.propTypes = true ? {
  children: import_prop_types4.default.node.isRequired,
  disabled: import_prop_types4.default.bool,
  className: import_prop_types4.default.string
} : {};

// node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js
var React21 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
var useFocusInside = function useFocusInside2(observedRef) {
  React21.useEffect(function() {
    var enabled = true;
    mediumEffect.useMedium(function(car) {
      var observed = observedRef && observedRef.current;
      if (enabled && observed) {
        if (!car.focusInside(observed)) {
          car.moveFocusInside(observed, null);
        }
      }
    });
    return function() {
      enabled = false;
    };
  }, [observedRef]);
};
function MoveFocusInside(_ref2) {
  var isDisabled2 = _ref2.disabled, className = _ref2.className, children = _ref2.children;
  var ref = React21.useRef(null);
  useFocusInside(isDisabled2 ? void 0 : ref);
  return React21.createElement("div", _extends({}, inlineProp(FOCUS_AUTO, !isDisabled2), {
    ref,
    className
  }), children);
}
MoveFocusInside.propTypes = true ? {
  children: import_prop_types5.default.node.isRequired,
  disabled: import_prop_types5.default.bool,
  className: import_prop_types5.default.string
} : {};
MoveFocusInside.defaultProps = {
  disabled: false,
  className: void 0
};

// node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js
var React22 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
var FreeFocusInside = function FreeFocusInside2(_ref2) {
  var children = _ref2.children, className = _ref2.className;
  return React22.createElement("div", _extends({}, inlineProp(FOCUS_ALLOW, true), {
    className
  }), children);
};
FreeFocusInside.propTypes = true ? {
  children: import_prop_types6.default.node.isRequired,
  className: import_prop_types6.default.string
} : {};
FreeFocusInside.defaultProps = {
  className: void 0
};

// node_modules/react-focus-lock/dist/es2015/index.js
var es2015_default2 = Combination_default;

// node_modules/@chakra-ui/dom-utils/dist/chunk-3XANSPY5.mjs
function isElement2(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}
function isHTMLElement(el) {
  var _a2;
  if (!isElement2(el))
    return false;
  const win = (_a2 = el.ownerDocument.defaultView) != null ? _a2 : window;
  return el instanceof win.HTMLElement;
}
function getOwnerWindow2(node2) {
  var _a2, _b;
  return (_b = (_a2 = getOwnerDocument2(node2)) == null ? void 0 : _a2.defaultView) != null ? _b : window;
}
function getOwnerDocument2(node2) {
  return isElement2(node2) ? node2.ownerDocument : document;
}
function getActiveElement3(node2) {
  return getOwnerDocument2(node2).activeElement;
}

// node_modules/@chakra-ui/dom-utils/dist/chunk-ROURZMX4.mjs
var hasTabIndex = (element) => element.hasAttribute("tabindex");
var hasNegativeTabIndex = (element) => hasTabIndex(element) && element.tabIndex === -1;
function isDisabled(element) {
  return Boolean(element.getAttribute("disabled")) === true || Boolean(element.getAttribute("aria-disabled")) === true;
}
function isHidden(element) {
  if (element.parentElement && isHidden(element.parentElement))
    return true;
  return element.hidden;
}
function isContentEditable(element) {
  const value = element.getAttribute("contenteditable");
  return value !== "false" && value != null;
}
function isFocusable(element) {
  if (!isHTMLElement(element) || isHidden(element) || isDisabled(element)) {
    return false;
  }
  const { localName } = element;
  const focusableTags = ["input", "select", "textarea", "button"];
  if (focusableTags.indexOf(localName) >= 0)
    return true;
  const others2 = {
    a: () => element.hasAttribute("href"),
    audio: () => element.hasAttribute("controls"),
    video: () => element.hasAttribute("controls")
  };
  if (localName in others2) {
    return others2[localName]();
  }
  if (isContentEditable(element))
    return true;
  return hasTabIndex(element);
}
function isTabbable2(element) {
  if (!element)
    return false;
  return isHTMLElement(element) && isFocusable(element) && !hasNegativeTabIndex(element);
}

// node_modules/@chakra-ui/dom-utils/dist/index.mjs
var focusableElList = [
  "input:not(:disabled):not([disabled])",
  "select:not(:disabled):not([disabled])",
  "textarea:not(:disabled):not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not(:disabled):not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
];
var focusableElSelector = focusableElList.join();
var isVisible = (el) => el.offsetWidth > 0 && el.offsetHeight > 0;
function getAllFocusable2(container) {
  const focusableEls = Array.from(
    container.querySelectorAll(focusableElSelector)
  );
  focusableEls.unshift(container);
  return focusableEls.filter((el) => isFocusable(el) && isVisible(el));
}

// node_modules/@chakra-ui/focus-lock/dist/chunk-CG74IXYP.mjs
var import_react93 = __toESM(require_react(), 1);
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
var _a;
var FocusTrap3 = (_a = es2015_default2.default) != null ? _a : es2015_default2;
var FocusLock2 = (props) => {
  const {
    initialFocusRef,
    finalFocusRef,
    contentRef,
    restoreFocus,
    children,
    isDisabled: isDisabled2,
    autoFocus,
    persistentFocus,
    lockFocusAcrossFrames
  } = props;
  const onActivation = (0, import_react93.useCallback)(() => {
    if (initialFocusRef == null ? void 0 : initialFocusRef.current) {
      initialFocusRef.current.focus();
    } else if (contentRef == null ? void 0 : contentRef.current) {
      const focusables = getAllFocusable2(contentRef.current);
      if (focusables.length === 0) {
        requestAnimationFrame(() => {
          var _a2;
          (_a2 = contentRef.current) == null ? void 0 : _a2.focus();
        });
      }
    }
  }, [initialFocusRef, contentRef]);
  const onDeactivation = (0, import_react93.useCallback)(() => {
    var _a2;
    (_a2 = finalFocusRef == null ? void 0 : finalFocusRef.current) == null ? void 0 : _a2.focus();
  }, [finalFocusRef]);
  const returnFocus = restoreFocus && !finalFocusRef;
  return (0, import_jsx_runtime61.jsx)(
    FocusTrap3,
    {
      crossFrame: lockFocusAcrossFrames,
      persistentFocus,
      autoFocus,
      disabled: isDisabled2,
      onActivation,
      onDeactivation,
      returnFocus,
      children
    }
  );
};
FocusLock2.displayName = "FocusLock";

// node_modules/@chakra-ui/hooks/dist/chunk-R4O7V45P.mjs
var import_react94 = __toESM(require_react(), 1);
function usePrevious(value) {
  const ref = (0, import_react94.useRef)();
  (0, import_react94.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// node_modules/@chakra-ui/hooks/dist/chunk-CLDV4JKZ.mjs
var import_react95 = __toESM(require_react(), 1);
function isPrintableCharacter(event) {
  const { key } = event;
  return key.length === 1 || key.length > 1 && /[^a-zA-Z0-9]/.test(key);
}
function useShortcut(props = {}) {
  const { timeout = 300, preventDefault = () => true } = props;
  const [keys, setKeys] = (0, import_react95.useState)([]);
  const timeoutRef = (0, import_react95.useRef)();
  const flush = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  const clearKeysAfterDelay = () => {
    flush();
    timeoutRef.current = setTimeout(() => {
      setKeys([]);
      timeoutRef.current = null;
    }, timeout);
  };
  (0, import_react95.useEffect)(() => flush, []);
  function onKeyDown(fn2) {
    return (event) => {
      if (event.key === "Backspace") {
        const keysCopy = [...keys];
        keysCopy.pop();
        setKeys(keysCopy);
        return;
      }
      if (isPrintableCharacter(event)) {
        const keysCopy = keys.concat(event.key);
        if (preventDefault(event)) {
          event.preventDefault();
          event.stopPropagation();
        }
        setKeys(keysCopy);
        fn2(keysCopy.join(""));
        clearKeysAfterDelay();
      }
    };
  }
  return onKeyDown;
}

// node_modules/@chakra-ui/hooks/dist/chunk-IYF65QR3.mjs
var import_react96 = __toESM(require_react(), 1);
var useSafeLayoutEffect3 = isBrowser ? import_react96.useLayoutEffect : import_react96.useEffect;

// node_modules/@chakra-ui/hooks/dist/chunk-TFWETJDV.mjs
var import_react97 = __toESM(require_react(), 1);
function useCallbackRef3(fn2, deps = []) {
  const ref = (0, import_react97.useRef)(fn2);
  useSafeLayoutEffect3(() => {
    ref.current = fn2;
  });
  return (0, import_react97.useCallback)((...args) => {
    var _a2;
    return (_a2 = ref.current) == null ? void 0 : _a2.call(ref, ...args);
  }, deps);
}

// node_modules/@chakra-ui/hooks/dist/chunk-7LXDCNGU.mjs
var import_react98 = __toESM(require_react(), 1);
function useTimeout2(callback, delay2) {
  const fn2 = useCallbackRef3(callback);
  (0, import_react98.useEffect)(() => {
    if (delay2 == null)
      return void 0;
    let timeoutId = null;
    timeoutId = window.setTimeout(() => {
      fn2();
    }, delay2);
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delay2, fn2]);
}

// node_modules/@chakra-ui/hooks/dist/chunk-R3AU57R3.mjs
var import_react99 = __toESM(require_react(), 1);
function useWhyDidYouUpdate(name, props) {
  const previousProps = (0, import_react99.useRef)();
  (0, import_react99.useEffect)(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      const changesObj = {};
      allKeys.forEach((key) => {
        if (previousProps.current[key] !== props[key]) {
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key]
          };
        }
      });
      if (Object.keys(changesObj).length) {
        console.log("[why-did-you-update]", name, changesObj);
      }
    }
    previousProps.current = props;
  });
}

// node_modules/@chakra-ui/hooks/dist/chunk-VHPIVGMD.mjs
var import_react100 = __toESM(require_react(), 1);
function useInterval(callback, delay2) {
  const fn2 = useCallbackRef3(callback);
  (0, import_react100.useEffect)(() => {
    let intervalId = null;
    const tick = () => fn2();
    if (delay2 !== null) {
      intervalId = window.setInterval(tick, delay2);
    }
    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [delay2, fn2]);
}

// node_modules/@chakra-ui/hooks/dist/chunk-R6ZZD2KB.mjs
var import_react101 = __toESM(require_react(), 1);
function useLatestRef(value) {
  const ref = (0, import_react101.useRef)(null);
  ref.current = value;
  return ref;
}

// node_modules/@chakra-ui/hooks/dist/chunk-QJA5SDDN.mjs
var import_react102 = __toESM(require_react(), 1);
function assignRef3(ref, value) {
  if (ref == null)
    return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
function useMergeRefs3(...refs) {
  return (0, import_react102.useMemo)(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (node2) => {
      refs.forEach((ref) => {
        if (ref)
          assignRef3(ref, node2);
      });
    };
  }, refs);
}

// node_modules/@chakra-ui/hooks/dist/chunk-34PRFZWK.mjs
var import_react103 = __toESM(require_react(), 1);
function useEventListener2(event, handler, env2, options) {
  const listener = useCallbackRef3(handler);
  (0, import_react103.useEffect)(() => {
    var _a2;
    const node2 = (_a2 = runIfFn2(env2)) != null ? _a2 : document;
    if (!handler) {
      return;
    }
    node2.addEventListener(event, listener, options);
    return () => {
      node2.removeEventListener(event, listener, options);
    };
  }, [event, env2, options, listener, handler]);
  return () => {
    var _a2;
    const node2 = (_a2 = runIfFn2(env2)) != null ? _a2 : document;
    node2.removeEventListener(event, listener, options);
  };
}

// node_modules/@chakra-ui/hooks/dist/chunk-5DGH2NZZ.mjs
var import_react104 = __toESM(require_react(), 1);
function useMouseDownRef(shouldListen = true) {
  const mouseDownRef = (0, import_react104.useRef)();
  useEventListener2("mousedown", (event) => {
    if (shouldListen) {
      mouseDownRef.current = event.target;
    }
  });
  return mouseDownRef;
}

// node_modules/@chakra-ui/hooks/dist/chunk-HIFPCJML.mjs
var import_react105 = __toESM(require_react(), 1);
function useOutsideClick(props) {
  const { ref, handler, enabled = true } = props;
  const savedHandler = useCallbackRef3(handler);
  const stateRef = (0, import_react105.useRef)({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false
  });
  const state = stateRef.current;
  (0, import_react105.useEffect)(() => {
    if (!enabled)
      return;
    const onPointerDown = (e) => {
      if (isValidEvent(e, ref)) {
        state.isPointerDown = true;
      }
    };
    const onMouseUp = (event) => {
      if (state.ignoreEmulatedMouseEvents) {
        state.ignoreEmulatedMouseEvents = false;
        return;
      }
      if (state.isPointerDown && handler && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };
    const onTouchEnd = (event) => {
      state.ignoreEmulatedMouseEvents = true;
      if (handler && state.isPointerDown && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };
    const doc = getOwnerDocument(ref.current);
    doc.addEventListener("mousedown", onPointerDown, true);
    doc.addEventListener("mouseup", onMouseUp, true);
    doc.addEventListener("touchstart", onPointerDown, true);
    doc.addEventListener("touchend", onTouchEnd, true);
    return () => {
      doc.removeEventListener("mousedown", onPointerDown, true);
      doc.removeEventListener("mouseup", onMouseUp, true);
      doc.removeEventListener("touchstart", onPointerDown, true);
      doc.removeEventListener("touchend", onTouchEnd, true);
    };
  }, [handler, ref, savedHandler, state, enabled]);
}
function isValidEvent(event, ref) {
  var _a2;
  const target = event.target;
  if (event.button > 0)
    return false;
  if (target) {
    const doc = getOwnerDocument(target);
    if (!doc.contains(target))
      return false;
  }
  return !((_a2 = ref.current) == null ? void 0 : _a2.contains(target));
}

// node_modules/@chakra-ui/hooks/dist/chunk-CF2OMLUG.mjs
function usePointerEvent(env2, eventName, handler, options) {
  return useEventListener2(
    getPointerEventName(eventName),
    wrapPointerEventHandler(handler, eventName === "pointerdown"),
    env2,
    options
  );
}

// node_modules/@chakra-ui/hooks/dist/chunk-3YZIECTS.mjs
var import_react106 = __toESM(require_react(), 1);
function useUnmountEffect2(fn2, deps = []) {
  return (0, import_react106.useEffect)(
    () => () => fn2(),
    deps
  );
}

// node_modules/@chakra-ui/hooks/dist/chunk-OQ6S7YI3.mjs
var import_react107 = __toESM(require_react(), 1);
function usePanGesture(ref, props) {
  const {
    onPan,
    onPanStart,
    onPanEnd,
    onPanSessionStart,
    onPanSessionEnd,
    threshold
  } = props;
  const hasPanEvents = Boolean(
    onPan || onPanStart || onPanEnd || onPanSessionStart || onPanSessionEnd
  );
  const panSession = (0, import_react107.useRef)(null);
  const handlers2 = {
    onSessionStart: onPanSessionStart,
    onSessionEnd: onPanSessionEnd,
    onStart: onPanStart,
    onMove: onPan,
    onEnd(event, info) {
      panSession.current = null;
      onPanEnd == null ? void 0 : onPanEnd(event, info);
    }
  };
  (0, import_react107.useEffect)(() => {
    var _a2;
    (_a2 = panSession.current) == null ? void 0 : _a2.updateHandlers(handlers2);
  });
  function onPointerDown(event) {
    panSession.current = new PanSession(event, handlers2, threshold);
  }
  usePointerEvent(
    () => ref.current,
    "pointerdown",
    hasPanEvents ? onPointerDown : noop
  );
  useUnmountEffect2(() => {
    var _a2;
    (_a2 = panSession.current) == null ? void 0 : _a2.end();
    panSession.current = null;
  });
}

// node_modules/@chakra-ui/hooks/dist/chunk-EGV7XMQK.mjs
var import_react108 = __toESM(require_react(), 1);
function useId6(idProp, prefix) {
  const id4 = (0, import_react108.useId)();
  return (0, import_react108.useMemo)(
    () => idProp || [prefix, id4].filter(Boolean).join("-"),
    [idProp, prefix, id4]
  );
}
function useIds(idProp, ...prefixes) {
  const id4 = useId6(idProp);
  return (0, import_react108.useMemo)(() => {
    return prefixes.map((prefix) => `${prefix}-${id4}`);
  }, [id4, prefixes]);
}
function useOptionalPart(partId) {
  const [id4, setId] = (0, import_react108.useState)(null);
  const ref = (0, import_react108.useCallback)(
    (node2) => {
      setId(node2 ? partId : null);
    },
    [partId]
  );
  return { ref, id: id4, isRendered: Boolean(id4) };
}

// node_modules/@chakra-ui/hooks/dist/chunk-NUQE4USX.mjs
var import_react109 = __toESM(require_react(), 1);
function useControllableProp(prop, state) {
  const isControlled = prop !== void 0;
  const value = isControlled && typeof prop !== "undefined" ? prop : state;
  return [isControlled, value];
}
function useControllableState2(props) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    shouldUpdate = (prev, next) => prev !== next
  } = props;
  const onChangeProp = useCallbackRef3(onChange);
  const shouldUpdateProp = useCallbackRef3(shouldUpdate);
  const [valueState, setValue] = (0, import_react109.useState)(defaultValue);
  const isControlled = valueProp !== void 0;
  const value = isControlled ? valueProp : valueState;
  const updateValue = (0, import_react109.useCallback)(
    (next) => {
      const nextValue = runIfFn2(next, value);
      if (!shouldUpdateProp(value, nextValue)) {
        return;
      }
      if (!isControlled) {
        setValue(nextValue);
      }
      onChangeProp(nextValue);
    },
    [isControlled, onChangeProp, value, shouldUpdateProp]
  );
  return [value, updateValue];
}

// node_modules/@chakra-ui/hooks/dist/chunk-CHB4ZXZG.mjs
var import_react110 = __toESM(require_react(), 1);
function useDisclosure(props = {}) {
  const {
    onClose: onCloseProp,
    onOpen: onOpenProp,
    isOpen: isOpenProp,
    id: idProp
  } = props;
  const onOpenPropCallbackRef = useCallbackRef3(onOpenProp);
  const onClosePropCallbackRef = useCallbackRef3(onCloseProp);
  const [isOpenState, setIsOpen] = (0, import_react110.useState)(props.defaultIsOpen || false);
  const [isControlled, isOpen] = useControllableProp(isOpenProp, isOpenState);
  const id4 = useId6(idProp, "disclosure");
  const onClose = (0, import_react110.useCallback)(() => {
    if (!isControlled) {
      setIsOpen(false);
    }
    onClosePropCallbackRef == null ? void 0 : onClosePropCallbackRef();
  }, [isControlled, onClosePropCallbackRef]);
  const onOpen = (0, import_react110.useCallback)(() => {
    if (!isControlled) {
      setIsOpen(true);
    }
    onOpenPropCallbackRef == null ? void 0 : onOpenPropCallbackRef();
  }, [isControlled, onOpenPropCallbackRef]);
  const onToggle = (0, import_react110.useCallback)(() => {
    const action = isOpen ? onClose : onOpen;
    action();
  }, [isOpen, onOpen, onClose]);
  return {
    isOpen: !!isOpen,
    onOpen,
    onClose,
    onToggle,
    isControlled,
    getButtonProps: (props2 = {}) => ({
      ...props2,
      "aria-expanded": isOpen,
      "aria-controls": id4,
      onClick: callAllHandlers2(props2.onClick, onToggle)
    }),
    getDisclosureProps: (props2 = {}) => ({
      ...props2,
      hidden: !isOpen,
      id: id4
    })
  };
}

// node_modules/@chakra-ui/hooks/dist/chunk-6QJ3DAN2.mjs
var import_react111 = __toESM(require_react(), 1);
function useEventListenerMap() {
  const listeners = (0, import_react111.useRef)(/* @__PURE__ */ new Map());
  const currentListeners = listeners.current;
  const add = (0, import_react111.useCallback)((el, type, listener, options) => {
    const pointerEventListener = wrapPointerEventHandler(
      listener,
      type === "pointerdown"
    );
    listeners.current.set(listener, {
      __listener: pointerEventListener,
      type: getPointerEventName(type),
      el,
      options
    });
    el.addEventListener(type, pointerEventListener, options);
  }, []);
  const remove = (0, import_react111.useCallback)(
    (el, type, listener, options) => {
      const { __listener: pointerEventListener } = listeners.current.get(listener);
      el.removeEventListener(type, pointerEventListener, options);
      listeners.current.delete(pointerEventListener);
    },
    []
  );
  (0, import_react111.useEffect)(
    () => () => {
      currentListeners.forEach((value, key) => {
        remove(value.el, value.type, key, value.options);
      });
    },
    [remove, currentListeners]
  );
  return { add, remove };
}

// node_modules/@chakra-ui/hooks/dist/chunk-5AOLTBA4.mjs
var import_react112 = __toESM(require_react(), 1);
var useUpdateEffect2 = (effect5, deps) => {
  const renderCycleRef = (0, import_react112.useRef)(false);
  const effectCycleRef = (0, import_react112.useRef)(false);
  (0, import_react112.useEffect)(() => {
    const isMounted = renderCycleRef.current;
    const shouldRun = isMounted && effectCycleRef.current;
    if (shouldRun) {
      return effect5();
    }
    effectCycleRef.current = true;
  }, deps);
  (0, import_react112.useEffect)(() => {
    renderCycleRef.current = true;
    return () => {
      renderCycleRef.current = false;
    };
  }, []);
};

// node_modules/@chakra-ui/hooks/dist/chunk-MQIGJ23T.mjs
function useFocusEffect(ref, options) {
  const { shouldFocus, preventScroll } = options;
  useUpdateEffect2(() => {
    const node2 = ref.current;
    if (!node2 || !shouldFocus)
      return;
    if (!hasFocusWithin(node2)) {
      focus(node2, { preventScroll, nextTick: true });
    }
  }, [shouldFocus, ref, preventScroll]);
}

// node_modules/@chakra-ui/hooks/dist/chunk-H54GS5SN.mjs
function preventReturnFocus(containerRef) {
  const el = containerRef.current;
  if (!el)
    return false;
  const activeElement = getActiveElement(el);
  if (!activeElement)
    return false;
  if (contains(el, activeElement))
    return false;
  if (isTabbable(activeElement))
    return true;
  return false;
}
function useFocusOnHide(containerRef, options) {
  const { shouldFocus: shouldFocusProp, visible, focusRef } = options;
  const shouldFocus = shouldFocusProp && !visible;
  useUpdateEffect2(() => {
    if (!shouldFocus)
      return;
    if (preventReturnFocus(containerRef)) {
      return;
    }
    const el = (focusRef == null ? void 0 : focusRef.current) || containerRef.current;
    if (el) {
      focus(el, { nextTick: true });
    }
  }, [shouldFocus, containerRef, focusRef]);
}

// node_modules/@chakra-ui/hooks/dist/chunk-4DMQJ6FO.mjs
function useFocusOnPointerDown2(props) {
  const { ref, elements, enabled } = props;
  const isSafari2 = detectBrowser("Safari");
  const doc = () => getOwnerDocument(ref.current);
  usePointerEvent(doc, "pointerdown", (event) => {
    if (!isSafari2 || !enabled)
      return;
    const target = event.target;
    const els = elements != null ? elements : [ref];
    const isValidTarget = els.some((elementOrRef) => {
      const el = isRefObject(elementOrRef) ? elementOrRef.current : elementOrRef;
      return contains(el, target);
    });
    if (!isActiveElement(target) && isValidTarget) {
      event.preventDefault();
      focus(target);
    }
  });
}

// node_modules/@chakra-ui/hooks/dist/chunk-S5MINBBA.mjs
var import_react113 = __toESM(require_react(), 1);
var defaultOptions = {
  preventScroll: true,
  shouldFocus: false
};
function useFocusOnShow(target, options = defaultOptions) {
  const { focusRef, preventScroll, shouldFocus, visible } = options;
  const element = isRefObject(target) ? target.current : target;
  const autoFocusValue = shouldFocus && visible;
  const autoFocusRef = (0, import_react113.useRef)(autoFocusValue);
  const lastVisibleRef = (0, import_react113.useRef)(visible);
  useSafeLayoutEffect3(() => {
    if (!lastVisibleRef.current && visible) {
      autoFocusRef.current = autoFocusValue;
    }
    lastVisibleRef.current = visible;
  }, [visible, autoFocusValue]);
  const onFocus3 = (0, import_react113.useCallback)(() => {
    if (!visible || !element || !autoFocusRef.current)
      return;
    autoFocusRef.current = false;
    if (contains(element, document.activeElement))
      return;
    if (focusRef == null ? void 0 : focusRef.current) {
      focus(focusRef.current, { preventScroll, nextTick: true });
    } else {
      const tabbableEls = getAllFocusable(element);
      if (tabbableEls.length > 0) {
        focus(tabbableEls[0], { preventScroll, nextTick: true });
      }
    }
  }, [visible, preventScroll, element, focusRef]);
  useUpdateEffect2(() => {
    onFocus3();
  }, [onFocus3]);
  useEventListener2("transitionend", onFocus3, element);
}

// node_modules/@chakra-ui/hooks/dist/chunk-XB3WN4FS.mjs
var import_react114 = __toESM(require_react(), 1);
function useForceUpdate2() {
  const unloadingRef = (0, import_react114.useRef)(false);
  const [count, setCount] = (0, import_react114.useState)(0);
  useUnmountEffect2(() => {
    unloadingRef.current = true;
  });
  return (0, import_react114.useCallback)(() => {
    if (!unloadingRef.current) {
      setCount(count + 1);
    }
  }, [count]);
}

// node_modules/@chakra-ui/hooks/dist/chunk-F6ZRLFYH.mjs
var import_react115 = __toESM(require_react(), 1);
function useAnimationState(props) {
  const { isOpen, ref } = props;
  const [mounted, setMounted] = (0, import_react115.useState)(isOpen);
  const [once, setOnce] = (0, import_react115.useState)(false);
  (0, import_react115.useEffect)(() => {
    if (!once) {
      setMounted(isOpen);
      setOnce(true);
    }
  }, [isOpen, once, mounted]);
  useEventListener2(
    "animationend",
    () => {
      setMounted(isOpen);
    },
    () => ref.current
  );
  const hidden = isOpen ? false : !mounted;
  return {
    present: !hidden,
    onComplete() {
      var _a2;
      const win = getOwnerWindow(ref.current);
      const evt = new win.CustomEvent("animationend", { bubbles: true });
      (_a2 = ref.current) == null ? void 0 : _a2.dispatchEvent(evt);
    }
  };
}

// node_modules/@chakra-ui/hooks/dist/chunk-4EVXJTLA.mjs
var import_react116 = __toESM(require_react(), 1);
function useBoolean(initialState2 = false) {
  const [value, setValue] = (0, import_react116.useState)(initialState2);
  const callbacks = (0, import_react116.useMemo)(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue((prev) => !prev)
    }),
    []
  );
  return [value, callbacks];
}

// node_modules/@chakra-ui/hooks/dist/chunk-RK6YFQX6.mjs
var import_react117 = __toESM(require_react(), 1);
var import_copy_to_clipboard = __toESM(require_copy_to_clipboard(), 1);
function useClipboard(value, optionsOrTimeout = {}) {
  const [hasCopied, setHasCopied] = (0, import_react117.useState)(false);
  const [valueState, setValueState] = (0, import_react117.useState)(value);
  (0, import_react117.useEffect)(() => setValueState(value), [value]);
  const { timeout = 1500, ...copyOptions } = typeof optionsOrTimeout === "number" ? { timeout: optionsOrTimeout } : optionsOrTimeout;
  const onCopy = (0, import_react117.useCallback)(() => {
    const didCopy = (0, import_copy_to_clipboard.default)(valueState, copyOptions);
    setHasCopied(didCopy);
  }, [valueState, copyOptions]);
  (0, import_react117.useEffect)(() => {
    let timeoutId = null;
    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false);
      }, timeout);
    }
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);
  return {
    value: valueState,
    setValue: setValueState,
    onCopy,
    hasCopied
  };
}

// node_modules/@chakra-ui/hooks/dist/chunk-Y4UXA3TD.mjs
var import_react118 = __toESM(require_react(), 1);
function useConst(init) {
  const ref = (0, import_react118.useRef)(null);
  if (ref.current === null) {
    ref.current = typeof init === "function" ? init() : init;
  }
  return ref.current;
}

// node_modules/@chakra-ui/hooks/dist/chunk-D4LAKZ32.mjs
var import_react119 = __toESM(require_react(), 1);
function useDimensions(ref, observe) {
  const [dimensions, setDimensions] = (0, import_react119.useState)(null);
  const rafId = (0, import_react119.useRef)();
  useSafeLayoutEffect3(() => {
    function measure() {
      const node2 = ref.current;
      if (!node2)
        return;
      rafId.current = requestAnimationFrame(() => {
        const boxModel = getBox(node2);
        setDimensions(boxModel);
      });
    }
    measure();
    if (observe) {
      window.addEventListener("resize", measure);
      window.addEventListener("scroll", measure);
    }
    return () => {
      if (observe) {
        window.removeEventListener("resize", measure);
        window.removeEventListener("scroll", measure);
      }
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [observe]);
  return dimensions;
}

// node_modules/@chakra-ui/input/dist/chunk-6XCF7NSR.mjs
var import_react120 = __toESM(require_react(), 1);
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
var [InputGroupStylesProvider, useInputGroupStyles] = createContext({
  name: `InputGroupStylesContext`,
  errorMessage: `useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `
});
var InputGroup = forwardRef(
  function InputGroup2(props, ref) {
    const styles = useMultiStyleConfig("Input", props);
    const { children, className, ...rest } = omitThemingProps(props);
    const _className = cx("chakra-input__group", className);
    const groupStyles = {};
    const validChildren = getValidChildren(children);
    const input = styles.field;
    validChildren.forEach((child) => {
      var _a2, _b;
      if (!styles)
        return;
      if (input && child.type.id === "InputLeftElement") {
        groupStyles.paddingStart = (_a2 = input.height) != null ? _a2 : input.h;
      }
      if (input && child.type.id === "InputRightElement") {
        groupStyles.paddingEnd = (_b = input.height) != null ? _b : input.h;
      }
      if (child.type.id === "InputRightAddon") {
        groupStyles.borderEndRadius = 0;
      }
      if (child.type.id === "InputLeftAddon") {
        groupStyles.borderStartRadius = 0;
      }
    });
    const clones = validChildren.map((child) => {
      var _a2, _b;
      const theming = compact({
        size: ((_a2 = child.props) == null ? void 0 : _a2.size) || props.size,
        variant: ((_b = child.props) == null ? void 0 : _b.variant) || props.variant
      });
      return child.type.id !== "Input" ? (0, import_react120.cloneElement)(child, theming) : (0, import_react120.cloneElement)(child, Object.assign(theming, groupStyles, child.props));
    });
    return (0, import_jsx_runtime62.jsx)(
      chakra.div,
      {
        className: _className,
        ref,
        __css: {
          width: "100%",
          display: "flex",
          position: "relative",
          isolation: "isolate"
        },
        "data-group": true,
        ...rest,
        children: (0, import_jsx_runtime62.jsx)(InputGroupStylesProvider, { value: styles, children: clones })
      }
    );
  }
);
InputGroup.displayName = "InputGroup";

// node_modules/@chakra-ui/input/dist/chunk-ARKOWLPR.mjs
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);
var placements = {
  left: {
    marginEnd: "-1px",
    borderEndRadius: 0,
    borderEndColor: "transparent"
  },
  right: {
    marginStart: "-1px",
    borderStartRadius: 0,
    borderStartColor: "transparent"
  }
};
var StyledAddon = chakra("div", {
  baseStyle: {
    flex: "0 0 auto",
    width: "auto",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap"
  }
});
var InputAddon = forwardRef(
  function InputAddon2(props, ref) {
    var _a2;
    const { placement = "left", ...rest } = props;
    const placementStyles = (_a2 = placements[placement]) != null ? _a2 : {};
    const styles = useInputGroupStyles();
    return (0, import_jsx_runtime63.jsx)(
      StyledAddon,
      {
        ref,
        ...rest,
        __css: {
          ...styles.addon,
          ...placementStyles
        }
      }
    );
  }
);
InputAddon.displayName = "InputAddon";
var InputLeftAddon = forwardRef(
  function InputLeftAddon2(props, ref) {
    return (0, import_jsx_runtime63.jsx)(
      InputAddon,
      {
        ref,
        placement: "left",
        ...props,
        className: cx("chakra-input__left-addon", props.className)
      }
    );
  }
);
InputLeftAddon.displayName = "InputLeftAddon";
InputLeftAddon.id = "InputLeftAddon";
var InputRightAddon = forwardRef(
  function InputRightAddon2(props, ref) {
    return (0, import_jsx_runtime63.jsx)(
      InputAddon,
      {
        ref,
        placement: "right",
        ...props,
        className: cx("chakra-input__right-addon", props.className)
      }
    );
  }
);
InputRightAddon.displayName = "InputRightAddon";
InputRightAddon.id = "InputRightAddon";

// node_modules/@chakra-ui/input/dist/chunk-J356FWKS.mjs
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);
var StyledInputElement = chakra("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    zIndex: 2
  }
});
var InputElement = forwardRef(function InputElement2(props, ref) {
  var _a2, _b;
  const { placement = "left", ...rest } = props;
  const styles = useInputGroupStyles();
  const input = styles.field;
  const attr = placement === "left" ? "insetStart" : "insetEnd";
  const elementStyles = {
    [attr]: "0",
    width: (_a2 = input == null ? void 0 : input.height) != null ? _a2 : input == null ? void 0 : input.h,
    height: (_b = input == null ? void 0 : input.height) != null ? _b : input == null ? void 0 : input.h,
    fontSize: input == null ? void 0 : input.fontSize,
    ...styles.element
  };
  return (0, import_jsx_runtime64.jsx)(StyledInputElement, { ref, __css: elementStyles, ...rest });
});
InputElement.id = "InputElement";
InputElement.displayName = "InputElement";
var InputLeftElement = forwardRef(
  function InputLeftElement2(props, ref) {
    const { className, ...rest } = props;
    const _className = cx("chakra-input__left-element", className);
    return (0, import_jsx_runtime64.jsx)(
      InputElement,
      {
        ref,
        placement: "left",
        className: _className,
        ...rest
      }
    );
  }
);
InputLeftElement.id = "InputLeftElement";
InputLeftElement.displayName = "InputLeftElement";
var InputRightElement = forwardRef(
  function InputRightElement2(props, ref) {
    const { className, ...rest } = props;
    const _className = cx("chakra-input__right-element", className);
    return (0, import_jsx_runtime64.jsx)(
      InputElement,
      {
        ref,
        placement: "right",
        className: _className,
        ...rest
      }
    );
  }
);
InputRightElement.id = "InputRightElement";
InputRightElement.displayName = "InputRightElement";

// node_modules/@chakra-ui/input/dist/chunk-GYFRIY2Z.mjs
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);
var Input = forwardRef(function Input2(props, ref) {
  const { htmlSize, ...rest } = props;
  const styles = useMultiStyleConfig("Input", rest);
  const ownProps = omitThemingProps(rest);
  const input = useFormControl(ownProps);
  const _className = cx("chakra-input", props.className);
  return (0, import_jsx_runtime65.jsx)(
    chakra.input,
    {
      size: htmlSize,
      ...input,
      __css: styles.field,
      ref,
      className: _className
    }
  );
});
Input.displayName = "Input";
Input.id = "Input";

// node_modules/@chakra-ui/layout/dist/chunk-Z47J5YMH.mjs
var import_jsx_runtime66 = __toESM(require_jsx_runtime(), 1);
var [ListStylesProvider, useListStyles] = createContext({
  name: `ListStylesContext`,
  errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `
});
var List = forwardRef(function List2(props, ref) {
  const styles = useMultiStyleConfig("List", props);
  const {
    children,
    styleType = "none",
    stylePosition,
    spacing,
    ...rest
  } = omitThemingProps(props);
  const validChildren = getValidChildren(children);
  const selector2 = "& > *:not(style) ~ *:not(style)";
  const spacingStyle = spacing ? { [selector2]: { mt: spacing } } : {};
  return (0, import_jsx_runtime66.jsx)(ListStylesProvider, { value: styles, children: (0, import_jsx_runtime66.jsx)(
    chakra.ul,
    {
      ref,
      listStyleType: styleType,
      listStylePosition: stylePosition,
      role: "list",
      __css: { ...styles.container, ...spacingStyle },
      ...rest,
      children: validChildren
    }
  ) });
});
List.displayName = "List";
var OrderedList = forwardRef((props, ref) => {
  const { as, ...rest } = props;
  return (0, import_jsx_runtime66.jsx)(List, { ref, as: "ol", styleType: "decimal", marginStart: "1em", ...rest });
});
OrderedList.displayName = "OrderedList";
var UnorderedList = forwardRef(function UnorderedList2(props, ref) {
  const { as, ...rest } = props;
  return (0, import_jsx_runtime66.jsx)(List, { ref, as: "ul", styleType: "initial", marginStart: "1em", ...rest });
});
UnorderedList.displayName = "UnorderedList";
var ListItem = forwardRef(function ListItem2(props, ref) {
  const styles = useListStyles();
  return (0, import_jsx_runtime66.jsx)(chakra.li, { ref, ...props, __css: styles.item });
});
ListItem.displayName = "ListItem";
var ListIcon = forwardRef(function ListIcon2(props, ref) {
  const styles = useListStyles();
  return (0, import_jsx_runtime66.jsx)(Icon, { ref, role: "presentation", ...props, __css: styles.icon });
});
ListIcon.displayName = "ListIcon";

// node_modules/@chakra-ui/layout/dist/chunk-5FO2ZLZM.mjs
var import_jsx_runtime67 = __toESM(require_jsx_runtime(), 1);
var Grid = forwardRef(function Grid2(props, ref) {
  const {
    templateAreas,
    gap,
    rowGap,
    columnGap,
    column,
    row,
    autoFlow,
    autoRows,
    templateRows,
    autoColumns,
    templateColumns,
    ...rest
  } = props;
  const styles = {
    display: "grid",
    gridTemplateAreas: templateAreas,
    gridGap: gap,
    gridRowGap: rowGap,
    gridColumnGap: columnGap,
    gridAutoColumns: autoColumns,
    gridColumn: column,
    gridRow: row,
    gridAutoFlow: autoFlow,
    gridAutoRows: autoRows,
    gridTemplateRows: templateRows,
    gridTemplateColumns: templateColumns
  };
  return (0, import_jsx_runtime67.jsx)(chakra.div, { ref, __css: styles, ...rest });
});
Grid.displayName = "Grid";

// node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs
var breakpoints = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function mapResponsive(prop, mapper) {
  if (Array.isArray(prop)) {
    return prop.map((item) => item === null ? null : mapper(item));
  }
  if (isObject(prop)) {
    return Object.keys(prop).reduce((result, key) => {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }
  if (prop != null) {
    return mapper(prop);
  }
  return null;
}
function arrayToObjectNotation(values, bps = breakpoints) {
  const result = {};
  values.forEach((value, index2) => {
    const key = bps[index2];
    if (value == null)
      return;
    result[key] = value;
  });
  return result;
}

// node_modules/@chakra-ui/layout/dist/chunk-QJDVAY5Z.mjs
var import_jsx_runtime68 = __toESM(require_jsx_runtime(), 1);
var SimpleGrid = forwardRef(
  function SimpleGrid2(props, ref) {
    const { columns, spacingX, spacingY, spacing, minChildWidth, ...rest } = props;
    const theme2 = useTheme();
    const templateColumns = minChildWidth ? widthToColumns(minChildWidth, theme2) : countToColumns(columns);
    return (0, import_jsx_runtime68.jsx)(
      Grid,
      {
        ref,
        gap: spacing,
        columnGap: spacingX,
        rowGap: spacingY,
        templateColumns,
        ...rest
      }
    );
  }
);
SimpleGrid.displayName = "SimpleGrid";
function toPx(n) {
  return typeof n === "number" ? `${n}px` : n;
}
function widthToColumns(width, theme2) {
  return mapResponsive(width, (value) => {
    const _value = getToken("sizes", value, toPx(value))(theme2);
    return value === null ? null : `repeat(auto-fit, minmax(${_value}, 1fr))`;
  });
}
function countToColumns(count) {
  return mapResponsive(
    count,
    (value) => value === null ? null : `repeat(${value}, minmax(0, 1fr))`
  );
}

// node_modules/@chakra-ui/layout/dist/chunk-6FWJQRCB.mjs
var Spacer = chakra("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});
Spacer.displayName = "Spacer";

// node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs
var import_jsx_runtime69 = __toESM(require_jsx_runtime(), 1);
var Text = forwardRef(function Text2(props, ref) {
  const styles = useStyleConfig("Text", props);
  const { className, align, decoration, casing, ...rest } = omitThemingProps(props);
  const aliasedProps = compact({
    textAlign: props.align,
    textDecoration: props.decoration,
    textTransform: props.casing
  });
  return (0, import_jsx_runtime69.jsx)(
    chakra.p,
    {
      ref,
      className: cx("chakra-text", props.className),
      ...aliasedProps,
      ...rest,
      __css: styles
    }
  );
});
Text.displayName = "Text";

// node_modules/@chakra-ui/layout/dist/chunk-CRIDK7KT.mjs
var import_react121 = __toESM(require_react(), 1);
var import_jsx_runtime70 = __toESM(require_jsx_runtime(), 1);
function px3(value) {
  return typeof value === "number" ? `${value}px` : value;
}
var Wrap = forwardRef(function Wrap2(props, ref) {
  const {
    spacing = "0.5rem",
    spacingX,
    spacingY,
    children,
    justify,
    direction,
    align,
    className,
    shouldWrapChildren,
    ...rest
  } = props;
  const styles = (0, import_react121.useMemo)(() => {
    const { spacingX: x = spacing, spacingY: y = spacing } = {
      spacingX,
      spacingY
    };
    return {
      "--chakra-wrap-x-spacing": (theme2) => mapResponsive(x, (value) => px3(tokenToCSSVar("space", value)(theme2))),
      "--chakra-wrap-y-spacing": (theme2) => mapResponsive(y, (value) => px3(tokenToCSSVar("space", value)(theme2))),
      "--wrap-x-spacing": "calc(var(--chakra-wrap-x-spacing) / 2)",
      "--wrap-y-spacing": "calc(var(--chakra-wrap-y-spacing) / 2)",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: justify,
      alignItems: align,
      flexDirection: direction,
      listStyleType: "none",
      padding: "0",
      margin: "calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)",
      "& > *:not(style)": {
        margin: "var(--wrap-y-spacing) var(--wrap-x-spacing)"
      }
    };
  }, [spacing, spacingX, spacingY, justify, align, direction]);
  const childrenToRender = (0, import_react121.useMemo)(
    () => shouldWrapChildren ? import_react121.Children.map(children, (child, index2) => (0, import_jsx_runtime70.jsx)(WrapItem, { children: child }, index2)) : children,
    [children, shouldWrapChildren]
  );
  return (0, import_jsx_runtime70.jsx)(
    chakra.div,
    {
      ref,
      className: cx("chakra-wrap", className),
      overflow: "hidden",
      ...rest,
      children: (0, import_jsx_runtime70.jsx)(chakra.ul, { className: "chakra-wrap__list", __css: styles, children: childrenToRender })
    }
  );
});
Wrap.displayName = "Wrap";
var WrapItem = forwardRef(function WrapItem2(props, ref) {
  const { className, ...rest } = props;
  return (0, import_jsx_runtime70.jsx)(
    chakra.li,
    {
      ref,
      __css: { display: "flex", alignItems: "flex-start" },
      className: cx("chakra-wrap__listitem", className),
      ...rest
    }
  );
});
WrapItem.displayName = "WrapItem";

// node_modules/@chakra-ui/layout/dist/chunk-AMDSPU3E.mjs
var import_jsx_runtime71 = __toESM(require_jsx_runtime(), 1);
var StackItem = (props) => (0, import_jsx_runtime71.jsx)(
  chakra.div,
  {
    className: "chakra-stack__item",
    ...props,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...props["__css"]
    }
  }
);
StackItem.displayName = "StackItem";

// node_modules/@chakra-ui/layout/dist/chunk-V4DIVZKN.mjs
var selector = "& > *:not(style) ~ *:not(style)";
function getStackStyles(options) {
  const { spacing, direction } = options;
  const directionStyles = {
    column: {
      marginTop: spacing,
      marginEnd: 0,
      marginBottom: 0,
      marginStart: 0
    },
    row: { marginTop: 0, marginEnd: 0, marginBottom: 0, marginStart: spacing },
    "column-reverse": {
      marginTop: 0,
      marginEnd: 0,
      marginBottom: spacing,
      marginStart: 0
    },
    "row-reverse": {
      marginTop: 0,
      marginEnd: spacing,
      marginBottom: 0,
      marginStart: 0
    }
  };
  return {
    flexDirection: direction,
    [selector]: mapResponsive(
      direction,
      (value) => directionStyles[value]
    )
  };
}
function getDividerStyles(options) {
  const { spacing, direction } = options;
  const dividerStyles = {
    column: {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": mapResponsive(
      direction,
      (value) => dividerStyles[value]
    )
  };
}

// node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs
var import_react122 = __toESM(require_react(), 1);
var import_jsx_runtime72 = __toESM(require_jsx_runtime(), 1);
var Stack = forwardRef((props, ref) => {
  const {
    isInline,
    direction: directionProp,
    align,
    justify,
    spacing = "0.5rem",
    wrap: wrap3,
    children,
    divider,
    className,
    shouldWrapChildren,
    ...rest
  } = props;
  const direction = isInline ? "row" : directionProp != null ? directionProp : "column";
  const styles = (0, import_react122.useMemo)(
    () => getStackStyles({ direction, spacing }),
    [direction, spacing]
  );
  const dividerStyle = (0, import_react122.useMemo)(
    () => getDividerStyles({ spacing, direction }),
    [spacing, direction]
  );
  const hasDivider = !!divider;
  const shouldUseChildren = !shouldWrapChildren && !hasDivider;
  const clones = (0, import_react122.useMemo)(() => {
    const validChildren = getValidChildren(children);
    return shouldUseChildren ? validChildren : validChildren.map((child, index2) => {
      const key = typeof child.key !== "undefined" ? child.key : index2;
      const isLast = index2 + 1 === validChildren.length;
      const wrappedChild = (0, import_jsx_runtime72.jsx)(StackItem, { children: child }, key);
      const _child = shouldWrapChildren ? wrappedChild : child;
      if (!hasDivider)
        return _child;
      const clonedDivider = (0, import_react122.cloneElement)(
        divider,
        {
          __css: dividerStyle
        }
      );
      const _divider = isLast ? null : clonedDivider;
      return (0, import_jsx_runtime72.jsxs)(import_react122.Fragment, { children: [
        _child,
        _divider
      ] }, key);
    });
  }, [
    divider,
    dividerStyle,
    hasDivider,
    shouldUseChildren,
    shouldWrapChildren,
    children
  ]);
  const _className = cx("chakra-stack", className);
  return (0, import_jsx_runtime72.jsx)(
    chakra.div,
    {
      ref,
      display: "flex",
      alignItems: align,
      justifyContent: justify,
      flexDirection: styles.flexDirection,
      flexWrap: wrap3,
      className: _className,
      __css: hasDivider ? {} : { [selector]: styles[selector] },
      ...rest,
      children: clones
    }
  );
});
Stack.displayName = "Stack";

// node_modules/@chakra-ui/layout/dist/chunk-MUMUYFOI.mjs
var import_jsx_runtime73 = __toESM(require_jsx_runtime(), 1);
var VStack = forwardRef((props, ref) => (0, import_jsx_runtime73.jsx)(Stack, { align: "center", ...props, direction: "column", ref }));
VStack.displayName = "VStack";

// node_modules/@chakra-ui/layout/dist/chunk-HUQHYERK.mjs
var import_jsx_runtime74 = __toESM(require_jsx_runtime(), 1);
var HStack = forwardRef((props, ref) => (0, import_jsx_runtime74.jsx)(Stack, { align: "center", ...props, direction: "row", ref }));
HStack.displayName = "HStack";

// node_modules/@chakra-ui/layout/dist/chunk-MZBQPWGD.mjs
var import_jsx_runtime75 = __toESM(require_jsx_runtime(), 1);
var StackDivider = (props) => (0, import_jsx_runtime75.jsx)(
  chakra.div,
  {
    className: "chakra-stack__divider",
    ...props,
    __css: {
      ...props["__css"],
      borderWidth: 0,
      alignSelf: "stretch",
      borderColor: "inherit",
      width: "auto",
      height: "auto"
    }
  }
);
StackDivider.displayName = "StackDivider";

// node_modules/@chakra-ui/layout/dist/chunk-IWVFML3N.mjs
var import_jsx_runtime76 = __toESM(require_jsx_runtime(), 1);
function spanFn(span) {
  return mapResponsive(
    span,
    (value) => value === "auto" ? "auto" : `span ${value}/span ${value}`
  );
}
var GridItem = forwardRef(function GridItem2(props, ref) {
  const {
    area,
    colSpan,
    colStart,
    colEnd,
    rowEnd,
    rowSpan,
    rowStart,
    ...rest
  } = props;
  const styles = compact({
    gridArea: area,
    gridColumn: spanFn(colSpan),
    gridRow: spanFn(rowSpan),
    gridColumnStart: colStart,
    gridColumnEnd: colEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd
  });
  return (0, import_jsx_runtime76.jsx)(chakra.div, { ref, __css: styles, ...rest });
});
GridItem.displayName = "GridItem";

// node_modules/@chakra-ui/layout/dist/chunk-B2MGPQRJ.mjs
var import_jsx_runtime77 = __toESM(require_jsx_runtime(), 1);
var Heading = forwardRef(function Heading2(props, ref) {
  const styles = useStyleConfig("Heading", props);
  const { className, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime77.jsx)(
    chakra.h2,
    {
      ref,
      className: cx("chakra-heading", props.className),
      ...rest,
      __css: styles
    }
  );
});
Heading.displayName = "Heading";

// node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs
var import_jsx_runtime78 = __toESM(require_jsx_runtime(), 1);
var Box = chakra("div");
Box.displayName = "Box";
var Square = forwardRef(function Square2(props, ref) {
  const { size, centerContent = true, ...rest } = props;
  const styles = centerContent ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return (0, import_jsx_runtime78.jsx)(
    Box,
    {
      ref,
      boxSize: size,
      __css: {
        ...styles,
        flexShrink: 0,
        flexGrow: 0
      },
      ...rest
    }
  );
});
Square.displayName = "Square";
var Circle = forwardRef(function Circle2(props, ref) {
  const { size, ...rest } = props;
  return (0, import_jsx_runtime78.jsx)(Square, { size, ref, borderRadius: "9999px", ...rest });
});
Circle.displayName = "Circle";

// node_modules/@chakra-ui/layout/dist/chunk-U2ZO4DDB.mjs
var import_react123 = __toESM(require_react(), 1);
var import_jsx_runtime79 = __toESM(require_jsx_runtime(), 1);
var escapeRegexp = (term) => term.replace(/[|\\{}()[\]^$+*?.-]/g, (char) => `\\${char}`);
function buildRegex(query) {
  const _query = query.filter((text) => text.length !== 0).map((text) => escapeRegexp(text.trim()));
  if (!_query.length) {
    return null;
  }
  return new RegExp(`(${_query.join("|")})`, "ig");
}
function highlightWords({ text, query }) {
  const regex = buildRegex(Array.isArray(query) ? query : [query]);
  if (!regex) {
    return [{ text, match: false }];
  }
  const result = text.split(regex).filter(Boolean);
  return result.map((str) => ({ text: str, match: regex.test(str) }));
}
function useHighlight(props) {
  const { text, query } = props;
  return (0, import_react123.useMemo)(() => highlightWords({ text, query }), [text, query]);
}
var Mark = forwardRef(function Mark2(props, ref) {
  const styles = useStyleConfig("Mark", props);
  const ownProps = omitThemingProps(props);
  return (0, import_jsx_runtime79.jsx)(
    Box,
    {
      ref,
      ...ownProps,
      as: "mark",
      __css: { bg: "transparent", whiteSpace: "nowrap", ...styles }
    }
  );
});
function Highlight(props) {
  const { children, query, styles } = props;
  if (typeof children !== "string") {
    throw new Error("The children prop of Highlight must be a string");
  }
  const chunks = useHighlight({ query, text: children });
  return (0, import_jsx_runtime79.jsx)(import_jsx_runtime79.Fragment, { children: chunks.map((chunk, index2) => {
    return chunk.match ? (0, import_jsx_runtime79.jsx)(Mark, { sx: styles, children: chunk.text }, index2) : (0, import_jsx_runtime79.jsx)(import_react123.Fragment, { children: chunk.text }, index2);
  }) });
}

// node_modules/@chakra-ui/layout/dist/chunk-YV2Z46CE.mjs
var import_jsx_runtime80 = __toESM(require_jsx_runtime(), 1);
var Kbd = forwardRef(function Kbd2(props, ref) {
  const styles = useStyleConfig("Kbd", props);
  const { className, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime80.jsx)(
    chakra.kbd,
    {
      ref,
      className: cx("chakra-kbd", className),
      ...rest,
      __css: {
        fontFamily: "mono",
        ...styles
      }
    }
  );
});
Kbd.displayName = "Kbd";

// node_modules/@chakra-ui/layout/dist/chunk-UNOISFZK.mjs
var import_jsx_runtime81 = __toESM(require_jsx_runtime(), 1);
var LinkOverlay = forwardRef(
  function LinkOverlay2(props, ref) {
    const { isExternal, target, rel, className, ...rest } = props;
    return (0, import_jsx_runtime81.jsx)(
      chakra.a,
      {
        ...rest,
        ref,
        className: cx("chakra-linkbox__overlay", className),
        rel: isExternal ? "noopener noreferrer" : rel,
        target: isExternal ? "_blank" : target,
        __css: {
          position: "static",
          "&::before": {
            content: "''",
            cursor: "inherit",
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%"
          }
        }
      }
    );
  }
);
var LinkBox = forwardRef(function LinkBox2(props, ref) {
  const { className, ...rest } = props;
  return (0, import_jsx_runtime81.jsx)(
    chakra.div,
    {
      ref,
      position: "relative",
      ...rest,
      className: cx("chakra-linkbox", className),
      __css: {
        "a[href]:not(.chakra-linkbox__overlay), abbr[title]": {
          position: "relative",
          zIndex: 1
        }
      }
    }
  );
});

// node_modules/@chakra-ui/layout/dist/chunk-YTV6DHKL.mjs
var import_jsx_runtime82 = __toESM(require_jsx_runtime(), 1);
var Link = forwardRef(function Link2(props, ref) {
  const styles = useStyleConfig("Link", props);
  const { className, isExternal, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime82.jsx)(
    chakra.a,
    {
      target: isExternal ? "_blank" : void 0,
      rel: isExternal ? "noopener" : void 0,
      ref,
      className: cx("chakra-link", className),
      ...rest,
      __css: styles
    }
  );
});
Link.displayName = "Link";

// node_modules/@chakra-ui/layout/dist/chunk-DPSEBQMG.mjs
var import_react124 = __toESM(require_react(), 1);
var import_jsx_runtime83 = __toESM(require_jsx_runtime(), 1);
var AspectRatio = forwardRef(function(props, ref) {
  const { ratio = 4 / 3, children, className, ...rest } = props;
  const child = import_react124.Children.only(children);
  const _className = cx("chakra-aspect-ratio", className);
  return (0, import_jsx_runtime83.jsx)(
    chakra.div,
    {
      ref,
      position: "relative",
      className: _className,
      _before: {
        height: 0,
        content: `""`,
        display: "block",
        paddingBottom: mapResponsive(ratio, (r) => `${1 / r * 100}%`)
      },
      __css: {
        "& > *:not(style)": {
          overflow: "hidden",
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%"
        },
        "& > img, & > video": {
          objectFit: "cover"
        }
      },
      ...rest,
      children: child
    }
  );
});
AspectRatio.displayName = "AspectRatio";

// node_modules/@chakra-ui/layout/dist/chunk-FQXH56BT.mjs
var import_jsx_runtime84 = __toESM(require_jsx_runtime(), 1);
var Badge = forwardRef(function Badge2(props, ref) {
  const styles = useStyleConfig("Badge", props);
  const { className, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime84.jsx)(
    chakra.span,
    {
      ref,
      className: cx("chakra-badge", props.className),
      ...rest,
      __css: {
        display: "inline-block",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        ...styles
      }
    }
  );
});
Badge.displayName = "Badge";

// node_modules/@chakra-ui/layout/dist/chunk-3V5HNFOM.mjs
var import_jsx_runtime85 = __toESM(require_jsx_runtime(), 1);
var Center = chakra("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
Center.displayName = "Center";
var centerStyles = {
  horizontal: {
    insetStart: "50%",
    transform: "translateX(-50%)"
  },
  vertical: {
    top: "50%",
    transform: "translateY(-50%)"
  },
  both: {
    insetStart: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
};
var AbsoluteCenter = forwardRef(
  function AbsoluteCenter2(props, ref) {
    const { axis = "both", ...rest } = props;
    return (0, import_jsx_runtime85.jsx)(
      chakra.div,
      {
        ref,
        __css: centerStyles[axis],
        ...rest,
        position: "absolute"
      }
    );
  }
);

// node_modules/@chakra-ui/layout/dist/chunk-MVNZWEQB.mjs
var import_jsx_runtime86 = __toESM(require_jsx_runtime(), 1);
var Code = forwardRef(function Code2(props, ref) {
  const styles = useStyleConfig("Code", props);
  const { className, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime86.jsx)(
    chakra.code,
    {
      ref,
      className: cx("chakra-code", props.className),
      ...rest,
      __css: {
        display: "inline-block",
        ...styles
      }
    }
  );
});
Code.displayName = "Code";

// node_modules/@chakra-ui/layout/dist/chunk-SRMZVY4F.mjs
var import_jsx_runtime87 = __toESM(require_jsx_runtime(), 1);
var Container2 = forwardRef(function Container22(props, ref) {
  const { className, centerContent, ...rest } = omitThemingProps(props);
  const styles = useStyleConfig("Container", props);
  return (0, import_jsx_runtime87.jsx)(
    chakra.div,
    {
      ref,
      className: cx("chakra-container", className),
      ...rest,
      __css: {
        ...styles,
        ...centerContent && {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }
      }
    }
  );
});
Container2.displayName = "Container";

// node_modules/@chakra-ui/layout/dist/chunk-YGVX4ESO.mjs
var import_jsx_runtime88 = __toESM(require_jsx_runtime(), 1);
var Divider = forwardRef(function Divider2(props, ref) {
  const {
    borderLeftWidth,
    borderBottomWidth,
    borderTopWidth,
    borderRightWidth,
    borderWidth,
    borderStyle,
    borderColor,
    ...styles
  } = useStyleConfig("Divider", props);
  const {
    className,
    orientation = "horizontal",
    __css,
    ...rest
  } = omitThemingProps(props);
  const dividerStyles = {
    vertical: {
      borderLeftWidth: borderLeftWidth || borderRightWidth || borderWidth || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: borderBottomWidth || borderTopWidth || borderWidth || "1px",
      width: "100%"
    }
  };
  return (0, import_jsx_runtime88.jsx)(
    chakra.hr,
    {
      ref,
      "aria-orientation": orientation,
      ...rest,
      __css: {
        ...styles,
        border: "0",
        borderColor,
        borderStyle,
        ...dividerStyles[orientation],
        ...__css
      },
      className: cx("chakra-divider", className)
    }
  );
});
Divider.displayName = "Divider";

// node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs
var import_jsx_runtime89 = __toESM(require_jsx_runtime(), 1);
var Flex = forwardRef(function Flex2(props, ref) {
  const { direction, align, justify, wrap: wrap3, basis, grow, shrink, ...rest } = props;
  const styles = {
    display: "flex",
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap3,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink
  };
  return (0, import_jsx_runtime89.jsx)(chakra.div, { ref, __css: styles, ...rest });
});
Flex.displayName = "Flex";

// node_modules/@chakra-ui/media-query/dist/chunk-MG6WC47T.mjs
var import_react125 = __toESM(require_react(), 1);
function useMediaQuery(query, options = {}) {
  const { ssr = true, fallback } = options;
  const { getWindow: getWindow2 } = useEnvironment();
  const queries = Array.isArray(query) ? query : [query];
  let fallbackValues = Array.isArray(fallback) ? fallback : [fallback];
  fallbackValues = fallbackValues.filter((v) => v != null);
  const [value, setValue] = (0, import_react125.useState)(() => {
    return queries.map((query2, index2) => ({
      media: query2,
      matches: ssr ? !!fallbackValues[index2] : getWindow2().matchMedia(query2).matches
    }));
  });
  (0, import_react125.useEffect)(() => {
    const win = getWindow2();
    setValue(
      queries.map((query2) => ({
        media: query2,
        matches: win.matchMedia(query2).matches
      }))
    );
    const mql = queries.map((query2) => win.matchMedia(query2));
    const handler = (evt) => {
      setValue((prev) => {
        return prev.slice().map((item) => {
          if (item.media === evt.media)
            return { ...item, matches: evt.matches };
          return item;
        });
      });
    };
    mql.forEach((mql2) => {
      if (typeof mql2.addListener === "function") {
        mql2.addListener(handler);
      } else {
        mql2.addEventListener("change", handler);
      }
    });
    return () => {
      mql.forEach((mql2) => {
        if (typeof mql2.removeListener === "function") {
          mql2.removeListener(handler);
        } else {
          mql2.removeEventListener("change", handler);
        }
      });
    };
  }, [getWindow2]);
  return value.map((item) => item.matches);
}

// node_modules/@chakra-ui/media-query/dist/chunk-DZU5YH7Z.mjs
function Visibility(props) {
  const { breakpoint, hide: hide2, children, ssr } = props;
  const [show] = useMediaQuery(breakpoint, { ssr });
  const isVisible2 = hide2 ? !show : show;
  const rendered = isVisible2 ? children : null;
  return rendered;
}

// node_modules/@chakra-ui/media-query/dist/chunk-R3K6W4OF.mjs
var getBreakpoint = (theme2, value) => {
  var _a2, _b;
  return (_b = (_a2 = theme2 == null ? void 0 : theme2.breakpoints) == null ? void 0 : _a2[value]) != null ? _b : value;
};
function useQuery(props) {
  const { breakpoint = "", below, above } = props;
  const theme2 = useTheme();
  const bpBelow = getBreakpoint(theme2, below);
  const bpAbove = getBreakpoint(theme2, above);
  let query = breakpoint;
  if (bpBelow) {
    query = `(max-width: ${bpBelow})`;
  } else if (bpAbove) {
    query = `(min-width: ${bpAbove})`;
  }
  return query;
}

// node_modules/@chakra-ui/media-query/dist/chunk-VVU6AIWW.mjs
var import_jsx_runtime90 = __toESM(require_jsx_runtime(), 1);
function Hide(props) {
  const { children, ssr } = props;
  const query = useQuery(props);
  return (0, import_jsx_runtime90.jsx)(Visibility, { breakpoint: query, hide: true, ssr, children });
}
Hide.displayName = "Hide";

// node_modules/@chakra-ui/media-query/dist/chunk-VNAUZPVA.mjs
function usePrefersReducedMotion(options) {
  const [prefersReducedMotion2] = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
    options
  );
  return prefersReducedMotion2;
}
function useColorModePreference(options) {
  const [isLight, isDark] = useMediaQuery(
    ["(prefers-color-scheme: light)", "(prefers-color-scheme: dark)"],
    options
  );
  if (isLight)
    return "light";
  if (isDark)
    return "dark";
  return void 0;
}

// node_modules/@chakra-ui/media-query/dist/chunk-OLSEFBIG.mjs
var import_jsx_runtime91 = __toESM(require_jsx_runtime(), 1);
function Show(props) {
  const { children, ssr } = props;
  const query = useQuery(props);
  return (0, import_jsx_runtime91.jsx)(Visibility, { breakpoint: query, ssr, children });
}
Show.displayName = "Show";

// node_modules/@chakra-ui/media-query/dist/chunk-G4WB2JLN.mjs
function getClosestValue(values, breakpoint, breakpoints2 = breakpoints) {
  let index2 = Object.keys(values).indexOf(breakpoint);
  if (index2 !== -1) {
    return values[breakpoint];
  }
  let stopIndex = breakpoints2.indexOf(breakpoint);
  while (stopIndex >= 0) {
    const key = breakpoints2[stopIndex];
    if (values.hasOwnProperty(key)) {
      index2 = stopIndex;
      break;
    }
    stopIndex -= 1;
  }
  if (index2 !== -1) {
    const key = breakpoints2[index2];
    return values[key];
  }
  return void 0;
}

// node_modules/@chakra-ui/media-query/dist/chunk-CI3LDA6F.mjs
function useBreakpoint(arg) {
  var _a2, _b;
  const opts = isObject(arg) ? arg : { fallback: arg != null ? arg : "base" };
  const theme2 = useTheme();
  const breakpoints2 = theme2.__breakpoints.details.map(
    ({ minMaxQuery, breakpoint }) => ({
      breakpoint,
      query: minMaxQuery.replace("@media screen and ", "")
    })
  );
  const fallback = breakpoints2.map((bp) => bp.breakpoint === opts.fallback);
  const values = useMediaQuery(
    breakpoints2.map((bp) => bp.query),
    { fallback, ssr: opts.ssr }
  );
  const index2 = values.findIndex((value) => value == true);
  return (_b = (_a2 = breakpoints2[index2]) == null ? void 0 : _a2.breakpoint) != null ? _b : opts.fallback;
}

// node_modules/@chakra-ui/media-query/dist/chunk-KSQA4OTT.mjs
function useBreakpointValue(values, arg) {
  var _a2;
  const opts = isObject(arg) ? arg : { fallback: arg != null ? arg : "base" };
  const breakpoint = useBreakpoint(opts);
  const theme2 = useTheme();
  if (!breakpoint)
    return;
  const breakpoints2 = Array.from(((_a2 = theme2.__breakpoints) == null ? void 0 : _a2.keys) || []);
  const obj = Array.isArray(values) ? Object.fromEntries(
    Object.entries(arrayToObjectNotation(values, breakpoints2)).map(
      ([key, value]) => [key, value]
    )
  ) : values;
  return getClosestValue(obj, breakpoint, breakpoints2);
}

// node_modules/@chakra-ui/menu/dist/chunk-CLDV4JKZ.mjs
var import_react126 = __toESM(require_react(), 1);
function isPrintableCharacter2(event) {
  const { key } = event;
  return key.length === 1 || key.length > 1 && /[^a-zA-Z0-9]/.test(key);
}
function useShortcut2(props = {}) {
  const { timeout = 300, preventDefault = () => true } = props;
  const [keys, setKeys] = (0, import_react126.useState)([]);
  const timeoutRef = (0, import_react126.useRef)();
  const flush = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  const clearKeysAfterDelay = () => {
    flush();
    timeoutRef.current = setTimeout(() => {
      setKeys([]);
      timeoutRef.current = null;
    }, timeout);
  };
  (0, import_react126.useEffect)(() => flush, []);
  function onKeyDown(fn2) {
    return (event) => {
      if (event.key === "Backspace") {
        const keysCopy = [...keys];
        keysCopy.pop();
        setKeys(keysCopy);
        return;
      }
      if (isPrintableCharacter2(event)) {
        const keysCopy = keys.concat(event.key);
        if (preventDefault(event)) {
          event.preventDefault();
          event.stopPropagation();
        }
        setKeys(keysCopy);
        fn2(keysCopy.join(""));
        clearKeysAfterDelay();
      }
    };
  }
  return onKeyDown;
}

// node_modules/@chakra-ui/menu/dist/chunk-B4RAWM5W.mjs
function getNextItemFromSearch(items, searchString, itemToString, currentItem) {
  if (searchString == null) {
    return currentItem;
  }
  if (!currentItem) {
    const foundItem = items.find(
      (item) => itemToString(item).toLowerCase().startsWith(searchString.toLowerCase())
    );
    return foundItem;
  }
  const matchingItems = items.filter(
    (item) => itemToString(item).toLowerCase().startsWith(searchString.toLowerCase())
  );
  if (matchingItems.length > 0) {
    let nextIndex;
    if (matchingItems.includes(currentItem)) {
      const currentIndex = matchingItems.indexOf(currentItem);
      nextIndex = currentIndex + 1;
      if (nextIndex === matchingItems.length) {
        nextIndex = 0;
      }
      return matchingItems[nextIndex];
    }
    nextIndex = items.indexOf(matchingItems[0]);
    return items[nextIndex];
  }
  return currentItem;
}

// node_modules/@chakra-ui/clickable/dist/chunk-YGQKU5RK.mjs
var import_react127 = __toESM(require_react(), 1);
function useEventListeners() {
  const listeners = (0, import_react127.useRef)(/* @__PURE__ */ new Map());
  const currentListeners = listeners.current;
  const add = (0, import_react127.useCallback)((el, type, listener, options) => {
    listeners.current.set(listener, { type, el, options });
    el.addEventListener(type, listener, options);
  }, []);
  const remove = (0, import_react127.useCallback)(
    (el, type, listener, options) => {
      el.removeEventListener(type, listener, options);
      listeners.current.delete(listener);
    },
    []
  );
  (0, import_react127.useEffect)(
    () => () => {
      currentListeners.forEach((value, key) => {
        remove(value.el, value.type, key, value.options);
      });
    },
    [remove, currentListeners]
  );
  return { add, remove };
}

// node_modules/@chakra-ui/clickable/dist/chunk-XHZNOLJR.mjs
var import_react128 = __toESM(require_react(), 1);
function isValidElement5(event) {
  const element = event.target;
  const { tagName, isContentEditable: isContentEditable2 } = element;
  return tagName !== "INPUT" && tagName !== "TEXTAREA" && isContentEditable2 !== true;
}
function useClickable(props = {}) {
  const {
    ref: htmlRef,
    isDisabled: isDisabled2,
    isFocusable: isFocusable2,
    clickOnEnter = true,
    clickOnSpace = true,
    onMouseDown,
    onMouseUp,
    onClick,
    onKeyDown,
    onKeyUp,
    tabIndex: tabIndexProp,
    onMouseOver,
    onMouseLeave,
    ...htmlProps
  } = props;
  const [isButton, setIsButton] = (0, import_react128.useState)(true);
  const [isPressed, setIsPressed] = (0, import_react128.useState)(false);
  const listeners = useEventListeners();
  const refCallback = (node2) => {
    if (!node2)
      return;
    if (node2.tagName !== "BUTTON") {
      setIsButton(false);
    }
  };
  const tabIndex = isButton ? tabIndexProp : tabIndexProp || 0;
  const trulyDisabled = isDisabled2 && !isFocusable2;
  const handleClick = (0, import_react128.useCallback)(
    (event) => {
      if (isDisabled2) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }
      const self = event.currentTarget;
      self.focus();
      onClick == null ? void 0 : onClick(event);
    },
    [isDisabled2, onClick]
  );
  const onDocumentKeyUp = (0, import_react128.useCallback)(
    (e) => {
      if (isPressed && isValidElement5(e)) {
        e.preventDefault();
        e.stopPropagation();
        setIsPressed(false);
        listeners.remove(document, "keyup", onDocumentKeyUp, false);
      }
    },
    [isPressed, listeners]
  );
  const handleKeyDown = (0, import_react128.useCallback)(
    (event) => {
      onKeyDown == null ? void 0 : onKeyDown(event);
      if (isDisabled2 || event.defaultPrevented || event.metaKey) {
        return;
      }
      if (!isValidElement5(event.nativeEvent) || isButton)
        return;
      const shouldClickOnEnter = clickOnEnter && event.key === "Enter";
      const shouldClickOnSpace = clickOnSpace && event.key === " ";
      if (shouldClickOnSpace) {
        event.preventDefault();
        setIsPressed(true);
      }
      if (shouldClickOnEnter) {
        event.preventDefault();
        const self = event.currentTarget;
        self.click();
      }
      listeners.add(document, "keyup", onDocumentKeyUp, false);
    },
    [
      isDisabled2,
      isButton,
      onKeyDown,
      clickOnEnter,
      clickOnSpace,
      listeners,
      onDocumentKeyUp
    ]
  );
  const handleKeyUp = (0, import_react128.useCallback)(
    (event) => {
      onKeyUp == null ? void 0 : onKeyUp(event);
      if (isDisabled2 || event.defaultPrevented || event.metaKey)
        return;
      if (!isValidElement5(event.nativeEvent) || isButton)
        return;
      const shouldClickOnSpace = clickOnSpace && event.key === " ";
      if (shouldClickOnSpace) {
        event.preventDefault();
        setIsPressed(false);
        const self = event.currentTarget;
        self.click();
      }
    },
    [clickOnSpace, isButton, isDisabled2, onKeyUp]
  );
  const onDocumentMouseUp = (0, import_react128.useCallback)(
    (event) => {
      if (event.button !== 0)
        return;
      setIsPressed(false);
      listeners.remove(document, "mouseup", onDocumentMouseUp, false);
    },
    [listeners]
  );
  const handleMouseDown = (0, import_react128.useCallback)(
    (event) => {
      if (event.button !== 0)
        return;
      if (isDisabled2) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }
      if (!isButton) {
        setIsPressed(true);
      }
      const target = event.currentTarget;
      target.focus({ preventScroll: true });
      listeners.add(document, "mouseup", onDocumentMouseUp, false);
      onMouseDown == null ? void 0 : onMouseDown(event);
    },
    [isDisabled2, isButton, onMouseDown, listeners, onDocumentMouseUp]
  );
  const handleMouseUp = (0, import_react128.useCallback)(
    (event) => {
      if (event.button !== 0)
        return;
      if (!isButton) {
        setIsPressed(false);
      }
      onMouseUp == null ? void 0 : onMouseUp(event);
    },
    [onMouseUp, isButton]
  );
  const handleMouseOver = (0, import_react128.useCallback)(
    (event) => {
      if (isDisabled2) {
        event.preventDefault();
        return;
      }
      onMouseOver == null ? void 0 : onMouseOver(event);
    },
    [isDisabled2, onMouseOver]
  );
  const handleMouseLeave = (0, import_react128.useCallback)(
    (event) => {
      if (isPressed) {
        event.preventDefault();
        setIsPressed(false);
      }
      onMouseLeave == null ? void 0 : onMouseLeave(event);
    },
    [isPressed, onMouseLeave]
  );
  const ref = mergeRefs(htmlRef, refCallback);
  if (isButton) {
    return {
      ...htmlProps,
      ref,
      type: "button",
      "aria-disabled": trulyDisabled ? void 0 : isDisabled2,
      disabled: trulyDisabled,
      onClick: handleClick,
      onMouseDown,
      onMouseUp,
      onKeyUp,
      onKeyDown,
      onMouseOver,
      onMouseLeave
    };
  }
  return {
    ...htmlProps,
    ref,
    role: "button",
    "data-active": dataAttr(isPressed),
    "aria-disabled": isDisabled2 ? "true" : void 0,
    tabIndex: trulyDisabled ? void 0 : tabIndex,
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseLeave: handleMouseLeave
  };
}

// node_modules/@chakra-ui/react-use-focus-effect/dist/index.mjs
var import_react129 = __toESM(require_react(), 1);
function preventReturnFocus2(containerRef) {
  const el = containerRef.current;
  if (!el)
    return false;
  const activeElement = getActiveElement3(el);
  if (!activeElement)
    return false;
  if (el.contains(activeElement))
    return false;
  if (isTabbable2(activeElement))
    return true;
  return false;
}
function useFocusOnHide2(containerRef, options) {
  const { shouldFocus: shouldFocusProp, visible, focusRef } = options;
  const shouldFocus = shouldFocusProp && !visible;
  useUpdateEffect(() => {
    if (!shouldFocus)
      return;
    if (preventReturnFocus2(containerRef)) {
      return;
    }
    const el = (focusRef == null ? void 0 : focusRef.current) || containerRef.current;
    if (el) {
      requestAnimationFrame(() => {
        el.focus();
      });
    }
  }, [shouldFocus, containerRef, focusRef]);
}
var defaultOptions2 = {
  preventScroll: true,
  shouldFocus: false
};
function useFocusOnShow2(target, options = defaultOptions2) {
  const { focusRef, preventScroll, shouldFocus, visible } = options;
  const element = isRefObject4(target) ? target.current : target;
  const autoFocusValue = shouldFocus && visible;
  const autoFocusRef = (0, import_react129.useRef)(autoFocusValue);
  const lastVisibleRef = (0, import_react129.useRef)(visible);
  useSafeLayoutEffect(() => {
    if (!lastVisibleRef.current && visible) {
      autoFocusRef.current = autoFocusValue;
    }
    lastVisibleRef.current = visible;
  }, [visible, autoFocusValue]);
  const onFocus3 = (0, import_react129.useCallback)(() => {
    if (!visible || !element || !autoFocusRef.current)
      return;
    autoFocusRef.current = false;
    if (element.contains(document.activeElement))
      return;
    if (focusRef == null ? void 0 : focusRef.current) {
      requestAnimationFrame(() => {
        var _a2;
        (_a2 = focusRef.current) == null ? void 0 : _a2.focus({ preventScroll });
      });
    } else {
      const tabbableEls = getAllFocusable2(element);
      if (tabbableEls.length > 0) {
        requestAnimationFrame(() => {
          tabbableEls[0].focus({ preventScroll });
        });
      }
    }
  }, [visible, preventScroll, element, focusRef]);
  useUpdateEffect(() => {
    onFocus3();
  }, [onFocus3]);
  useEventListener(element, "transitionend", onFocus3);
}
function isRefObject4(val) {
  return "current" in val;
}

// node_modules/@chakra-ui/popper/dist/chunk-QAKUNGSB.mjs
var toVar = (value, fallback) => ({
  var: value,
  varRef: fallback ? `var(${value}, ${fallback})` : `var(${value})`
});
var cssVars = {
  arrowShadowColor: toVar("--popper-arrow-shadow-color"),
  arrowSize: toVar("--popper-arrow-size", "8px"),
  arrowSizeHalf: toVar("--popper-arrow-size-half"),
  arrowBg: toVar("--popper-arrow-bg"),
  transformOrigin: toVar("--popper-transform-origin"),
  arrowOffset: toVar("--popper-arrow-offset")
};
function getBoxShadow(placement) {
  if (placement.includes("top"))
    return `1px 1px 1px 0 var(--popper-arrow-shadow-color)`;
  if (placement.includes("bottom"))
    return `-1px -1px 1px 0 var(--popper-arrow-shadow-color)`;
  if (placement.includes("right"))
    return `-1px 1px 1px 0 var(--popper-arrow-shadow-color)`;
  if (placement.includes("left"))
    return `1px -1px 1px 0 var(--popper-arrow-shadow-color)`;
}
var transforms = {
  top: "bottom center",
  "top-start": "bottom left",
  "top-end": "bottom right",
  bottom: "top center",
  "bottom-start": "top left",
  "bottom-end": "top right",
  left: "right center",
  "left-start": "right top",
  "left-end": "right bottom",
  right: "left center",
  "right-start": "left top",
  "right-end": "left bottom"
};
var toTransformOrigin = (placement) => transforms[placement];
var defaultEventListeners = {
  scroll: true,
  resize: true
};
function getEventListenerOptions(value) {
  let eventListeners;
  if (typeof value === "object") {
    eventListeners = {
      enabled: true,
      options: { ...defaultEventListeners, ...value }
    };
  } else {
    eventListeners = {
      enabled: value,
      options: defaultEventListeners
    };
  }
  return eventListeners;
}

// node_modules/@chakra-ui/popper/dist/chunk-SSFABIB2.mjs
var matchWidth = {
  name: "matchWidth",
  enabled: true,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({ state }) => {
    state.styles.popper.width = `${state.rects.reference.width}px`;
  },
  effect: ({ state }) => () => {
    const reference2 = state.elements.reference;
    state.elements.popper.style.width = `${reference2.offsetWidth}px`;
  }
};
var transformOrigin = {
  name: "transformOrigin",
  enabled: true,
  phase: "write",
  fn: ({ state }) => {
    setTransformOrigin(state);
  },
  effect: ({ state }) => () => {
    setTransformOrigin(state);
  }
};
var setTransformOrigin = (state) => {
  state.elements.popper.style.setProperty(
    cssVars.transformOrigin.var,
    toTransformOrigin(state.placement)
  );
};
var positionArrow = {
  name: "positionArrow",
  enabled: true,
  phase: "afterWrite",
  fn: ({ state }) => {
    setArrowStyles(state);
  }
};
var setArrowStyles = (state) => {
  var _a2;
  if (!state.placement)
    return;
  const overrides = getArrowStyle(state.placement);
  if (((_a2 = state.elements) == null ? void 0 : _a2.arrow) && overrides) {
    Object.assign(state.elements.arrow.style, {
      [overrides.property]: overrides.value,
      width: cssVars.arrowSize.varRef,
      height: cssVars.arrowSize.varRef,
      zIndex: -1
    });
    const vars = {
      [cssVars.arrowSizeHalf.var]: `calc(${cssVars.arrowSize.varRef} / 2)`,
      [cssVars.arrowOffset.var]: `calc(${cssVars.arrowSizeHalf.varRef} * -1)`
    };
    for (const property in vars) {
      state.elements.arrow.style.setProperty(property, vars[property]);
    }
  }
};
var getArrowStyle = (placement) => {
  if (placement.startsWith("top")) {
    return { property: "bottom", value: cssVars.arrowOffset.varRef };
  }
  if (placement.startsWith("bottom")) {
    return { property: "top", value: cssVars.arrowOffset.varRef };
  }
  if (placement.startsWith("left")) {
    return { property: "right", value: cssVars.arrowOffset.varRef };
  }
  if (placement.startsWith("right")) {
    return { property: "left", value: cssVars.arrowOffset.varRef };
  }
};
var innerArrow = {
  name: "innerArrow",
  enabled: true,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state }) => {
    setInnerArrowStyles(state);
  },
  effect: ({ state }) => () => {
    setInnerArrowStyles(state);
  }
};
var setInnerArrowStyles = (state) => {
  if (!state.elements.arrow)
    return;
  const inner = state.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!inner)
    return;
  const boxShadow = getBoxShadow(state.placement);
  if (boxShadow) {
    inner.style.setProperty("--popper-arrow-default-shadow", boxShadow);
  }
  Object.assign(inner.style, {
    transform: "rotate(45deg)",
    background: cssVars.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: `var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))`
  });
};

// node_modules/@chakra-ui/popper/dist/chunk-6DG2E3QO.mjs
var logicals = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
var opposites = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function getPopperPlacement(placement, dir = "ltr") {
  var _a2, _b;
  const value = ((_a2 = logicals[placement]) == null ? void 0 : _a2[dir]) || placement;
  if (dir === "ltr")
    return value;
  return (_b = opposites[placement]) != null ? _b : value;
}

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto2 = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements2 = [].concat(basePlacements, [auto2]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node2) {
  if (node2 == null) {
    return window;
  }
  if (node2.toString() !== "[object Window]") {
    var ownerDocument = node2.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node2;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement3(node2) {
  var OwnElement = getWindow(node2).Element;
  return node2 instanceof OwnElement || node2 instanceof Element;
}
function isHTMLElement2(node2) {
  var OwnElement = getWindow(node2).HTMLElement;
  return node2 instanceof OwnElement || node2 instanceof HTMLElement;
}
function isShadowRoot(node2) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node2).ShadowRoot;
  return node2 instanceof OwnElement || node2 instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref2) {
  var state = _ref2.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement2(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement2(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect2,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement2(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref2 = isElement3(element) ? getWindow(element) : window, visualViewport = _ref2.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains5(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle3(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement3(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode2(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement2(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle3(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement2(element)) {
    var elementCss = getComputedStyle3(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode2(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement2(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css3 = getComputedStyle3(currentNode);
    if (css3.transform !== "none" || css3.perspective !== "none" || css3.contain === "paint" || ["transform", "perspective"].indexOf(css3.willChange) !== -1 || isFirefox && css3.willChange === "filter" || isFirefox && css3.filter && css3.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle3(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle3(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref2) {
  var _state$modifiersData$;
  var state = _ref2.state, name = _ref2.name, options = _ref2.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect3(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (true) {
    if (!isHTMLElement2(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
    }
  }
  if (!contains5(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect3,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref2, win) {
  var x = _ref2.x, y = _ref2.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position2 = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle3(offsetParent).position !== "static" && position2 === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles2 = Object.assign({
    position: position2
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles2, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles2, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle3(state.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles2 = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles2, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles2, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect4(_ref2) {
  var state = _ref2.state, instance = _ref2.instance, options = _ref2.options;
  var _options$scroll = options.scroll, scroll3 = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize2 = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll3) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize2) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll3) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize2) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect4,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node2) {
  var win = getWindow(node2);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle3(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle3(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node2) {
  if (["html", "body", "#document"].indexOf(getNodeName(node2)) >= 0) {
    return node2.ownerDocument.body;
  }
  if (isHTMLElement2(node2) && isScrollParent(node2)) {
    return node2;
  }
  return getScrollParent(getParentNode2(node2));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list2) {
  var _element$ownerDocumen;
  if (list2 === void 0) {
    list2 = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list2.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode2(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement3(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode2(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle3(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement2(element) ? getOffsetParent(element) : element;
  if (!isElement3(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement3(clippingParent) && contains5(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref2) {
  var reference2 = _ref2.reference, element = _ref2.element, placement = _ref2.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement3(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements2 : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements3 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements3.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements3;
    if (true) {
      console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
    }
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto2) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements3 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto2 ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements3[0];
  for (var i = 0; i < placements3.length; i++) {
    var placement = placements3[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements3.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref2) {
  var state = _ref2.state, name = _ref2.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref2 = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref2[0], distance3 = _ref2[1];
  skidding = skidding || 0;
  distance3 = (distance3 || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance3,
    y: skidding
  } : {
    x: skidding,
    y: distance3
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements2.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref2) {
  var state = _ref2.state, name = _ref2.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node2) {
  if (node2 === getWindow(node2) || !isHTMLElement2(node2)) {
    return getWindowScroll(node2);
  } else {
    return getHTMLElementScroll(node2);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement2(offsetParent);
  var offsetParentIsScaled = isHTMLElement2(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll3 = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll3 = getNodeScroll(offsetParent);
    }
    if (isHTMLElement2(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll3.scrollLeft - offsets.x,
    y: rect.top + scroll3.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/format.js
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p, c) {
    return p.replace(/%s/, c);
  }, str);
}

// node_modules/@popperjs/core/lib/utils/validateModifiers.js
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index2, self) {
      return self.indexOf(value) === index2;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

// node_modules/@popperjs/core/lib/utils/uniqueBy.js
function uniqueBy(arr, fn2) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn2(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions3 = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions3;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions3),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions3, state.options, options2);
        state.scrollParents = {
          reference: isElement3(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref2) {
            var name = _ref2.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto2) {
            var flipModifier = state.orderedModifiers.find(function(_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle3(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index2 = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index2], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect5 = _ref3.effect;
        if (typeof effect5 === "function") {
          var cleanupFn = effect5({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/@chakra-ui/popper/dist/chunk-HJWVQQGO.mjs
var import_react130 = __toESM(require_react(), 1);
function usePopper(props = {}) {
  const {
    enabled = true,
    modifiers,
    placement: placementProp = "bottom",
    strategy = "absolute",
    arrowPadding = 8,
    eventListeners = true,
    offset: offset2,
    gutter = 8,
    flip: flip2 = true,
    boundary = "clippingParents",
    preventOverflow: preventOverflow2 = true,
    matchWidth: matchWidth2,
    direction = "ltr"
  } = props;
  const reference2 = (0, import_react130.useRef)(null);
  const popper2 = (0, import_react130.useRef)(null);
  const instance = (0, import_react130.useRef)(null);
  const placement = getPopperPlacement(placementProp, direction);
  const cleanup = (0, import_react130.useRef)(() => {
  });
  const setupPopper = (0, import_react130.useCallback)(() => {
    var _a2;
    if (!enabled || !reference2.current || !popper2.current)
      return;
    (_a2 = cleanup.current) == null ? void 0 : _a2.call(cleanup);
    instance.current = createPopper3(reference2.current, popper2.current, {
      placement,
      modifiers: [
        innerArrow,
        positionArrow,
        transformOrigin,
        {
          ...matchWidth,
          enabled: !!matchWidth2
        },
        {
          name: "eventListeners",
          ...getEventListenerOptions(eventListeners)
        },
        {
          name: "arrow",
          options: { padding: arrowPadding }
        },
        {
          name: "offset",
          options: {
            offset: offset2 != null ? offset2 : [0, gutter]
          }
        },
        {
          name: "flip",
          enabled: !!flip2,
          options: { padding: 8 }
        },
        {
          name: "preventOverflow",
          enabled: !!preventOverflow2,
          options: { boundary }
        },
        ...modifiers != null ? modifiers : []
      ],
      strategy
    });
    instance.current.forceUpdate();
    cleanup.current = instance.current.destroy;
  }, [
    placement,
    enabled,
    modifiers,
    matchWidth2,
    eventListeners,
    arrowPadding,
    offset2,
    gutter,
    flip2,
    preventOverflow2,
    boundary,
    strategy
  ]);
  (0, import_react130.useEffect)(() => {
    return () => {
      var _a2;
      if (!reference2.current && !popper2.current) {
        (_a2 = instance.current) == null ? void 0 : _a2.destroy();
        instance.current = null;
      }
    };
  }, []);
  const referenceRef = (0, import_react130.useCallback)(
    (node2) => {
      reference2.current = node2;
      setupPopper();
    },
    [setupPopper]
  );
  const getReferenceProps = (0, import_react130.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref: mergeRefs(referenceRef, ref)
    }),
    [referenceRef]
  );
  const popperRef = (0, import_react130.useCallback)(
    (node2) => {
      popper2.current = node2;
      setupPopper();
    },
    [setupPopper]
  );
  const getPopperProps = (0, import_react130.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref: mergeRefs(popperRef, ref),
      style: {
        ...props2.style,
        position: strategy,
        minWidth: matchWidth2 ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [strategy, popperRef, matchWidth2]
  );
  const getArrowProps = (0, import_react130.useCallback)((props2 = {}, ref = null) => {
    const { size, shadowColor, bg, style, ...rest } = props2;
    return {
      ...rest,
      ref,
      "data-popper-arrow": "",
      style: getArrowStyle2(props2)
    };
  }, []);
  const getArrowInnerProps = (0, import_react130.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var _a2;
      (_a2 = instance.current) == null ? void 0 : _a2.update();
    },
    forceUpdate() {
      var _a2;
      (_a2 = instance.current) == null ? void 0 : _a2.forceUpdate();
    },
    transformOrigin: cssVars.transformOrigin.varRef,
    referenceRef,
    popperRef,
    getPopperProps,
    getArrowProps,
    getArrowInnerProps,
    getReferenceProps
  };
}
function getArrowStyle2(props) {
  const { size, shadowColor, bg, style } = props;
  const computedStyle = { ...style, position: "absolute" };
  if (size) {
    computedStyle["--popper-arrow-size"] = size;
  }
  if (shadowColor) {
    computedStyle["--popper-arrow-shadow-color"] = shadowColor;
  }
  if (bg) {
    computedStyle["--popper-arrow-bg"] = bg;
  }
  return computedStyle;
}

// node_modules/@chakra-ui/react-use-disclosure/dist/index.mjs
var import_react131 = __toESM(require_react(), 1);
function useDisclosure2(props = {}) {
  const {
    onClose: onCloseProp,
    onOpen: onOpenProp,
    isOpen: isOpenProp,
    id: idProp
  } = props;
  const handleOpen = useCallbackRef(onOpenProp);
  const handleClose = useCallbackRef(onCloseProp);
  const [isOpenState, setIsOpen] = (0, import_react131.useState)(props.defaultIsOpen || false);
  const isOpen = isOpenProp !== void 0 ? isOpenProp : isOpenState;
  const isControlled = isOpenProp !== void 0;
  const uid = (0, import_react131.useId)();
  const id4 = idProp != null ? idProp : `disclosure-${uid}`;
  const onClose = (0, import_react131.useCallback)(() => {
    if (!isControlled) {
      setIsOpen(false);
    }
    handleClose == null ? void 0 : handleClose();
  }, [isControlled, handleClose]);
  const onOpen = (0, import_react131.useCallback)(() => {
    if (!isControlled) {
      setIsOpen(true);
    }
    handleOpen == null ? void 0 : handleOpen();
  }, [isControlled, handleOpen]);
  const onToggle = (0, import_react131.useCallback)(() => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }, [isOpen, onOpen, onClose]);
  function getButtonProps(props2 = {}) {
    return {
      ...props2,
      "aria-expanded": isOpen,
      "aria-controls": id4,
      onClick(event) {
        var _a2;
        (_a2 = props2.onClick) == null ? void 0 : _a2.call(props2, event);
        onToggle();
      }
    };
  }
  function getDisclosureProps(props2 = {}) {
    return {
      ...props2,
      hidden: !isOpen,
      id: id4
    };
  }
  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    isControlled,
    getButtonProps,
    getDisclosureProps
  };
}

// node_modules/@chakra-ui/react-use-outside-click/dist/index.mjs
var import_react132 = __toESM(require_react(), 1);
function useOutsideClick2(props) {
  const { ref, handler, enabled = true } = props;
  const savedHandler = useCallbackRef(handler);
  const stateRef = (0, import_react132.useRef)({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false
  });
  const state = stateRef.current;
  (0, import_react132.useEffect)(() => {
    if (!enabled)
      return;
    const onPointerDown = (e) => {
      if (isValidEvent2(e, ref)) {
        state.isPointerDown = true;
      }
    };
    const onMouseUp = (event) => {
      if (state.ignoreEmulatedMouseEvents) {
        state.ignoreEmulatedMouseEvents = false;
        return;
      }
      if (state.isPointerDown && handler && isValidEvent2(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };
    const onTouchEnd = (event) => {
      state.ignoreEmulatedMouseEvents = true;
      if (handler && state.isPointerDown && isValidEvent2(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };
    const doc = getOwnerDocument3(ref.current);
    doc.addEventListener("mousedown", onPointerDown, true);
    doc.addEventListener("mouseup", onMouseUp, true);
    doc.addEventListener("touchstart", onPointerDown, true);
    doc.addEventListener("touchend", onTouchEnd, true);
    return () => {
      doc.removeEventListener("mousedown", onPointerDown, true);
      doc.removeEventListener("mouseup", onMouseUp, true);
      doc.removeEventListener("touchstart", onPointerDown, true);
      doc.removeEventListener("touchend", onTouchEnd, true);
    };
  }, [handler, ref, savedHandler, state, enabled]);
}
function isValidEvent2(event, ref) {
  var _a2;
  const target = event.target;
  if (event.button > 0)
    return false;
  if (target) {
    const doc = getOwnerDocument3(target);
    if (!doc.contains(target))
      return false;
  }
  return !((_a2 = ref.current) == null ? void 0 : _a2.contains(target));
}
function getOwnerDocument3(node2) {
  var _a2;
  return (_a2 = node2 == null ? void 0 : node2.ownerDocument) != null ? _a2 : document;
}

// node_modules/@chakra-ui/react-use-animation-state/dist/index.mjs
var import_react133 = __toESM(require_react(), 1);
function useAnimationState2(props) {
  const { isOpen, ref } = props;
  const [mounted, setMounted] = (0, import_react133.useState)(isOpen);
  const [once, setOnce] = (0, import_react133.useState)(false);
  (0, import_react133.useEffect)(() => {
    if (!once) {
      setMounted(isOpen);
      setOnce(true);
    }
  }, [isOpen, once, mounted]);
  useEventListener(
    () => ref.current,
    "animationend",
    () => {
      setMounted(isOpen);
    }
  );
  const hidden = isOpen ? false : !mounted;
  return {
    present: !hidden,
    onComplete() {
      var _a2;
      const win = getOwnerWindow2(ref.current);
      const evt = new win.CustomEvent("animationend", { bubbles: true });
      (_a2 = ref.current) == null ? void 0 : _a2.dispatchEvent(evt);
    }
  };
}

// node_modules/@chakra-ui/lazy-utils/dist/index.mjs
function lazyDisclosure(options) {
  const { wasSelected, enabled, isSelected, mode = "unmount" } = options;
  if (!enabled)
    return true;
  if (isSelected)
    return true;
  if (mode === "keepMounted" && wasSelected)
    return true;
  return false;
}

// node_modules/@chakra-ui/menu/dist/chunk-FLBSN5ZT.mjs
var import_react134 = __toESM(require_react(), 1);
var [
  MenuDescendantsProvider,
  useMenuDescendantsContext,
  useMenuDescendants,
  useMenuDescendant
] = createDescendantContext();
var [MenuProvider, useMenuContext] = createContext({
  strict: false,
  name: "MenuContext"
});
function useIds2(idProp, ...prefixes) {
  const reactId = (0, import_react134.useId)();
  const id4 = idProp || reactId;
  return (0, import_react134.useMemo)(() => {
    return prefixes.map((prefix) => `${prefix}-${id4}`);
  }, [id4, prefixes]);
}
function getOwnerDocument4(node2) {
  var _a2;
  return (_a2 = node2 == null ? void 0 : node2.ownerDocument) != null ? _a2 : document;
}
function isActiveElement3(element) {
  const doc = getOwnerDocument4(element);
  return doc.activeElement === element;
}
function useMenu(props = {}) {
  const {
    id: id4,
    closeOnSelect = true,
    closeOnBlur = true,
    initialFocusRef,
    autoSelect = true,
    isLazy,
    isOpen: isOpenProp,
    defaultIsOpen,
    onClose: onCloseProp,
    onOpen: onOpenProp,
    placement = "bottom-start",
    lazyBehavior = "unmount",
    direction,
    computePositionOnMount = false,
    ...popperProps
  } = props;
  const menuRef = (0, import_react134.useRef)(null);
  const buttonRef = (0, import_react134.useRef)(null);
  const descendants = useMenuDescendants();
  const focusMenu = (0, import_react134.useCallback)(() => {
    requestAnimationFrame(() => {
      var _a2;
      (_a2 = menuRef.current) == null ? void 0 : _a2.focus({ preventScroll: false });
    });
  }, []);
  const focusFirstItem = (0, import_react134.useCallback)(() => {
    const id22 = setTimeout(() => {
      var _a2;
      if (initialFocusRef) {
        (_a2 = initialFocusRef.current) == null ? void 0 : _a2.focus();
      } else {
        const first = descendants.firstEnabled();
        if (first)
          setFocusedIndex(first.index);
      }
    });
    timeoutIds.current.add(id22);
  }, [descendants, initialFocusRef]);
  const focusLastItem = (0, import_react134.useCallback)(() => {
    const id22 = setTimeout(() => {
      const last = descendants.lastEnabled();
      if (last)
        setFocusedIndex(last.index);
    });
    timeoutIds.current.add(id22);
  }, [descendants]);
  const onOpenInternal = (0, import_react134.useCallback)(() => {
    onOpenProp == null ? void 0 : onOpenProp();
    if (autoSelect) {
      focusFirstItem();
    } else {
      focusMenu();
    }
  }, [autoSelect, focusFirstItem, focusMenu, onOpenProp]);
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure2({
    isOpen: isOpenProp,
    defaultIsOpen,
    onClose: onCloseProp,
    onOpen: onOpenInternal
  });
  useOutsideClick2({
    enabled: isOpen && closeOnBlur,
    ref: menuRef,
    handler: (event) => {
      var _a2;
      if (!((_a2 = buttonRef.current) == null ? void 0 : _a2.contains(event.target))) {
        onClose();
      }
    }
  });
  const popper2 = usePopper({
    ...popperProps,
    enabled: isOpen || computePositionOnMount,
    placement,
    direction
  });
  const [focusedIndex, setFocusedIndex] = (0, import_react134.useState)(-1);
  useUpdateEffect(() => {
    if (!isOpen) {
      setFocusedIndex(-1);
    }
  }, [isOpen]);
  useFocusOnHide2(menuRef, {
    focusRef: buttonRef,
    visible: isOpen,
    shouldFocus: true
  });
  const animationState = useAnimationState2({ isOpen, ref: menuRef });
  const [buttonId, menuId] = useIds2(id4, `menu-button`, `menu-list`);
  const openAndFocusMenu = (0, import_react134.useCallback)(() => {
    onOpen();
    focusMenu();
  }, [onOpen, focusMenu]);
  const timeoutIds = (0, import_react134.useRef)(/* @__PURE__ */ new Set([]));
  useUnmountEffect3(() => {
    timeoutIds.current.forEach((id22) => clearTimeout(id22));
    timeoutIds.current.clear();
  });
  const openAndFocusFirstItem = (0, import_react134.useCallback)(() => {
    onOpen();
    focusFirstItem();
  }, [focusFirstItem, onOpen]);
  const openAndFocusLastItem = (0, import_react134.useCallback)(() => {
    onOpen();
    focusLastItem();
  }, [onOpen, focusLastItem]);
  const refocus = (0, import_react134.useCallback)(() => {
    var _a2, _b;
    const doc = getOwnerDocument4(menuRef.current);
    const hasFocusWithin3 = (_a2 = menuRef.current) == null ? void 0 : _a2.contains(doc.activeElement);
    const shouldRefocus = isOpen && !hasFocusWithin3;
    if (!shouldRefocus)
      return;
    const node2 = (_b = descendants.item(focusedIndex)) == null ? void 0 : _b.node;
    node2 == null ? void 0 : node2.focus();
  }, [isOpen, focusedIndex, descendants]);
  const rafId = (0, import_react134.useRef)(null);
  return {
    openAndFocusMenu,
    openAndFocusFirstItem,
    openAndFocusLastItem,
    onTransitionEnd: refocus,
    unstable__animationState: animationState,
    descendants,
    popper: popper2,
    buttonId,
    menuId,
    forceUpdate: popper2.forceUpdate,
    orientation: "vertical",
    isOpen,
    onToggle,
    onOpen,
    onClose,
    menuRef,
    buttonRef,
    focusedIndex,
    closeOnSelect,
    closeOnBlur,
    autoSelect,
    setFocusedIndex,
    isLazy,
    lazyBehavior,
    initialFocusRef,
    rafId
  };
}
function useMenuButton(props = {}, externalRef = null) {
  const menu = useMenuContext();
  const { onToggle, popper: popper2, openAndFocusFirstItem, openAndFocusLastItem } = menu;
  const onKeyDown = (0, import_react134.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        Enter: openAndFocusFirstItem,
        ArrowDown: openAndFocusFirstItem,
        ArrowUp: openAndFocusLastItem
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        event.stopPropagation();
        action(event);
      }
    },
    [openAndFocusFirstItem, openAndFocusLastItem]
  );
  return {
    ...props,
    ref: mergeRefs(menu.buttonRef, externalRef, popper2.referenceRef),
    id: menu.buttonId,
    "data-active": dataAttr(menu.isOpen),
    "aria-expanded": menu.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": menu.menuId,
    onClick: callAllHandlers(props.onClick, onToggle),
    onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown)
  };
}
function isTargetMenuItem(target) {
  var _a2;
  return isHTMLElement3(target) && !!((_a2 = target == null ? void 0 : target.getAttribute("role")) == null ? void 0 : _a2.startsWith("menuitem"));
}
function useMenuList(props = {}, ref = null) {
  const menu = useMenuContext();
  if (!menu) {
    throw new Error(
      `useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>`
    );
  }
  const {
    focusedIndex,
    setFocusedIndex,
    menuRef,
    isOpen,
    onClose,
    menuId,
    isLazy,
    lazyBehavior,
    unstable__animationState: animated
  } = menu;
  const descendants = useMenuDescendantsContext();
  const createTypeaheadHandler = useShortcut2({
    preventDefault: (event) => event.key !== " " && isTargetMenuItem(event.target)
  });
  const onKeyDown = (0, import_react134.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        Tab: (event2) => event2.preventDefault(),
        Escape: onClose,
        ArrowDown: () => {
          const next = descendants.nextEnabled(focusedIndex);
          if (next)
            setFocusedIndex(next.index);
        },
        ArrowUp: () => {
          const prev = descendants.prevEnabled(focusedIndex);
          if (prev)
            setFocusedIndex(prev.index);
        }
      };
      const fn2 = keyMap[eventKey];
      if (fn2) {
        event.preventDefault();
        fn2(event);
        return;
      }
      const onTypeahead = createTypeaheadHandler((character) => {
        const nextItem = getNextItemFromSearch(
          descendants.values(),
          character,
          (item) => {
            var _a2, _b;
            return (_b = (_a2 = item == null ? void 0 : item.node) == null ? void 0 : _a2.textContent) != null ? _b : "";
          },
          descendants.item(focusedIndex)
        );
        if (nextItem) {
          const index2 = descendants.indexOf(nextItem.node);
          setFocusedIndex(index2);
        }
      });
      if (isTargetMenuItem(event.target)) {
        onTypeahead(event);
      }
    },
    [
      descendants,
      focusedIndex,
      createTypeaheadHandler,
      onClose,
      setFocusedIndex
    ]
  );
  const hasBeenOpened = (0, import_react134.useRef)(false);
  if (isOpen) {
    hasBeenOpened.current = true;
  }
  const shouldRenderChildren = lazyDisclosure({
    wasSelected: hasBeenOpened.current,
    enabled: isLazy,
    mode: lazyBehavior,
    isSelected: animated.present
  });
  return {
    ...props,
    ref: mergeRefs(menuRef, ref),
    children: shouldRenderChildren ? props.children : null,
    tabIndex: -1,
    role: "menu",
    id: menuId,
    style: {
      ...props.style,
      transformOrigin: "var(--popper-transform-origin)"
    },
    "aria-orientation": "vertical",
    onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown)
  };
}
function useMenuPositioner(props = {}) {
  const { popper: popper2, isOpen } = useMenuContext();
  return popper2.getPopperProps({
    ...props,
    style: {
      visibility: isOpen ? "visible" : "hidden",
      ...props.style
    }
  });
}
function useMenuItem(props = {}, externalRef = null) {
  const {
    onMouseEnter: onMouseEnterProp,
    onMouseMove: onMouseMoveProp,
    onMouseLeave: onMouseLeaveProp,
    onClick: onClickProp,
    onFocus: onFocusProp,
    isDisabled: isDisabled2,
    isFocusable: isFocusable2,
    closeOnSelect,
    type: typeProp,
    ...htmlProps
  } = props;
  const menu = useMenuContext();
  const {
    setFocusedIndex,
    focusedIndex,
    closeOnSelect: menuCloseOnSelect,
    onClose,
    menuRef,
    isOpen,
    menuId,
    rafId
  } = menu;
  const ref = (0, import_react134.useRef)(null);
  const id4 = `${menuId}-menuitem-${(0, import_react134.useId)()}`;
  const { index: index2, register } = useMenuDescendant({
    disabled: isDisabled2 && !isFocusable2
  });
  const onMouseEnter = (0, import_react134.useCallback)(
    (event) => {
      onMouseEnterProp == null ? void 0 : onMouseEnterProp(event);
      if (isDisabled2)
        return;
      setFocusedIndex(index2);
    },
    [setFocusedIndex, index2, isDisabled2, onMouseEnterProp]
  );
  const onMouseMove = (0, import_react134.useCallback)(
    (event) => {
      onMouseMoveProp == null ? void 0 : onMouseMoveProp(event);
      if (ref.current && !isActiveElement3(ref.current)) {
        onMouseEnter(event);
      }
    },
    [onMouseEnter, onMouseMoveProp]
  );
  const onMouseLeave = (0, import_react134.useCallback)(
    (event) => {
      onMouseLeaveProp == null ? void 0 : onMouseLeaveProp(event);
      if (isDisabled2)
        return;
      setFocusedIndex(-1);
    },
    [setFocusedIndex, isDisabled2, onMouseLeaveProp]
  );
  const onClick = (0, import_react134.useCallback)(
    (event) => {
      onClickProp == null ? void 0 : onClickProp(event);
      if (!isTargetMenuItem(event.currentTarget))
        return;
      if (closeOnSelect != null ? closeOnSelect : menuCloseOnSelect) {
        onClose();
      }
    },
    [onClose, onClickProp, menuCloseOnSelect, closeOnSelect]
  );
  const onFocus3 = (0, import_react134.useCallback)(
    (event) => {
      onFocusProp == null ? void 0 : onFocusProp(event);
      setFocusedIndex(index2);
    },
    [setFocusedIndex, onFocusProp, index2]
  );
  const isFocused = index2 === focusedIndex;
  const trulyDisabled = isDisabled2 && !isFocusable2;
  useUpdateEffect(() => {
    if (!isOpen)
      return;
    if (isFocused && !trulyDisabled && ref.current) {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      rafId.current = requestAnimationFrame(() => {
        var _a2;
        (_a2 = ref.current) == null ? void 0 : _a2.focus();
        rafId.current = null;
      });
    } else if (menuRef.current && !isActiveElement3(menuRef.current)) {
      menuRef.current.focus();
    }
  }, [isFocused, trulyDisabled, menuRef, isOpen]);
  const clickableProps = useClickable({
    onClick,
    onFocus: onFocus3,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    ref: mergeRefs(register, ref, externalRef),
    isDisabled: isDisabled2,
    isFocusable: isFocusable2
  });
  return {
    ...htmlProps,
    ...clickableProps,
    type: typeProp != null ? typeProp : clickableProps.type,
    id: id4,
    role: "menuitem",
    tabIndex: isFocused ? 0 : -1
  };
}
function useMenuOption(props = {}, ref = null) {
  const { type = "radio", isChecked, ...rest } = props;
  const ownProps = useMenuItem(rest, ref);
  return {
    ...ownProps,
    role: `menuitem${type}`,
    "aria-checked": isChecked
  };
}
function useMenuOptionGroup(props = {}) {
  const {
    children,
    type = "radio",
    value: valueProp,
    defaultValue,
    onChange: onChangeProp,
    ...htmlProps
  } = props;
  const isRadio = type === "radio";
  const fallback = isRadio ? "" : [];
  const [value, setValue] = useControllableState({
    defaultValue: defaultValue != null ? defaultValue : fallback,
    value: valueProp,
    onChange: onChangeProp
  });
  const onChange = (0, import_react134.useCallback)(
    (selectedValue) => {
      if (type === "radio" && typeof value === "string") {
        setValue(selectedValue);
      }
      if (type === "checkbox" && Array.isArray(value)) {
        const nextValue = value.includes(selectedValue) ? value.filter((item) => item !== selectedValue) : value.concat(selectedValue);
        setValue(nextValue);
      }
    },
    [value, setValue, type]
  );
  const validChildren = getValidChildren(children);
  const clones = validChildren.map((child) => {
    if (child.type.id !== "MenuItemOption")
      return child;
    const onClick = (event) => {
      var _a2, _b;
      onChange(child.props.value);
      (_b = (_a2 = child.props).onClick) == null ? void 0 : _b.call(_a2, event);
    };
    const isChecked = type === "radio" ? child.props.value === value : value.includes(child.props.value);
    return (0, import_react134.cloneElement)(child, {
      type,
      onClick,
      isChecked
    });
  });
  return {
    ...htmlProps,
    children: clones
  };
}
function useMenuState() {
  const { isOpen, onClose } = useMenuContext();
  return { isOpen, onClose };
}
function isHTMLElement3(el) {
  var _a2;
  if (!isElement4(el))
    return false;
  const win = (_a2 = el.ownerDocument.defaultView) != null ? _a2 : window;
  return el instanceof win.HTMLElement;
}
function isElement4(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}
function useUnmountEffect3(fn2, deps = []) {
  return (0, import_react134.useEffect)(
    () => () => fn2(),
    deps
  );
}

// node_modules/@chakra-ui/menu/dist/chunk-6BD5HRZF.mjs
var import_react135 = __toESM(require_react(), 1);
var import_jsx_runtime92 = __toESM(require_jsx_runtime(), 1);
var [MenuStylesProvider, useMenuStyles] = createContext({
  name: `MenuStylesContext`,
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
});
var Menu = (props) => {
  const { children } = props;
  const styles = useMultiStyleConfig("Menu", props);
  const ownProps = omitThemingProps(props);
  const { direction } = useTheme();
  const { descendants, ...ctx } = useMenu({ ...ownProps, direction });
  const context = (0, import_react135.useMemo)(() => ctx, [ctx]);
  const { isOpen, onClose, forceUpdate } = context;
  return (0, import_jsx_runtime92.jsx)(MenuDescendantsProvider, { value: descendants, children: (0, import_jsx_runtime92.jsx)(MenuProvider, { value: context, children: (0, import_jsx_runtime92.jsx)(MenuStylesProvider, { value: styles, children: runIfFn(children, { isOpen, onClose, forceUpdate }) }) }) });
};
Menu.displayName = "Menu";

// node_modules/@chakra-ui/menu/dist/chunk-2PVUH2BB.mjs
var import_jsx_runtime93 = __toESM(require_jsx_runtime(), 1);
var MenuCommand = forwardRef(
  (props, ref) => {
    const styles = useMenuStyles();
    return (0, import_jsx_runtime93.jsx)(
      chakra.span,
      {
        ref,
        ...props,
        __css: styles.command,
        className: "chakra-menu__command"
      }
    );
  }
);
MenuCommand.displayName = "MenuCommand";

// node_modules/@chakra-ui/menu/dist/chunk-6HALNP4G.mjs
var import_react136 = __toESM(require_react(), 1);
var import_jsx_runtime94 = __toESM(require_jsx_runtime(), 1);
var StyledMenuItem = forwardRef(
  (props, ref) => {
    const { type, ...rest } = props;
    const styles = useMenuStyles();
    const btnType = rest.as || type ? type != null ? type : void 0 : "button";
    const buttonStyles = (0, import_react136.useMemo)(
      () => ({
        textDecoration: "none",
        color: "inherit",
        userSelect: "none",
        display: "flex",
        width: "100%",
        alignItems: "center",
        textAlign: "start",
        flex: "0 0 auto",
        outline: 0,
        ...styles.item
      }),
      [styles.item]
    );
    return (0, import_jsx_runtime94.jsx)(chakra.button, { ref, type: btnType, ...rest, __css: buttonStyles });
  }
);

// node_modules/@chakra-ui/menu/dist/chunk-I3AUOXDN.mjs
var import_react137 = __toESM(require_react(), 1);
var import_jsx_runtime95 = __toESM(require_jsx_runtime(), 1);
var MenuIcon = (props) => {
  const { className, children, ...rest } = props;
  const child = import_react137.Children.only(children);
  const clone = (0, import_react137.isValidElement)(child) ? (0, import_react137.cloneElement)(child, {
    focusable: "false",
    "aria-hidden": true,
    className: cx("chakra-menu__icon", child.props.className)
  }) : null;
  const _className = cx("chakra-menu__icon-wrapper", className);
  return (0, import_jsx_runtime95.jsx)(
    chakra.span,
    {
      className: _className,
      ...rest,
      __css: {
        flexShrink: 0
      },
      children: clone
    }
  );
};
MenuIcon.displayName = "MenuIcon";

// node_modules/@chakra-ui/menu/dist/chunk-AMNETMCR.mjs
var import_jsx_runtime96 = __toESM(require_jsx_runtime(), 1);
var MenuItem = forwardRef((props, ref) => {
  const {
    icon,
    iconSpacing = "0.75rem",
    command,
    commandSpacing = "0.75rem",
    children,
    ...rest
  } = props;
  const menuitemProps = useMenuItem(rest, ref);
  const shouldWrap = icon || command;
  const _children = shouldWrap ? (0, import_jsx_runtime96.jsx)("span", { style: { pointerEvents: "none", flex: 1 }, children }) : children;
  return (0, import_jsx_runtime96.jsxs)(
    StyledMenuItem,
    {
      ...menuitemProps,
      className: cx("chakra-menu__menuitem", menuitemProps.className),
      children: [
        icon && (0, import_jsx_runtime96.jsx)(MenuIcon, { fontSize: "0.8em", marginEnd: iconSpacing, children: icon }),
        _children,
        command && (0, import_jsx_runtime96.jsx)(MenuCommand, { marginStart: commandSpacing, children: command })
      ]
    }
  );
});
MenuItem.displayName = "MenuItem";

// node_modules/@chakra-ui/menu/dist/chunk-CE6C7IBM.mjs
var import_jsx_runtime97 = __toESM(require_jsx_runtime(), 1);
var motionVariants = {
  enter: {
    visibility: "visible",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    transitionEnd: {
      visibility: "hidden"
    },
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
      easings: "easeOut"
    }
  }
};
var MenuTransition = chakra(motion.div);
var MenuList = forwardRef(function MenuList2(props, ref) {
  var _a2, _b;
  const { rootProps, motionProps, ...rest } = props;
  const {
    isOpen,
    onTransitionEnd,
    unstable__animationState: animated
  } = useMenuContext();
  const listProps = useMenuList(rest, ref);
  const positionerProps = useMenuPositioner(rootProps);
  const styles = useMenuStyles();
  return (0, import_jsx_runtime97.jsx)(
    chakra.div,
    {
      ...positionerProps,
      __css: { zIndex: (_b = props.zIndex) != null ? _b : (_a2 = styles.list) == null ? void 0 : _a2.zIndex },
      children: (0, import_jsx_runtime97.jsx)(
        MenuTransition,
        {
          variants: motionVariants,
          initial: false,
          animate: isOpen ? "enter" : "exit",
          __css: { outline: 0, ...styles.list },
          ...motionProps,
          className: cx("chakra-menu__menu-list", listProps.className),
          ...listProps,
          onUpdate: onTransitionEnd,
          onAnimationComplete: callAll(
            animated.onComplete,
            listProps.onAnimationComplete
          )
        }
      )
    }
  );
});
MenuList.displayName = "MenuList";

// node_modules/@chakra-ui/menu/dist/chunk-SQI4IQGP.mjs
var import_jsx_runtime98 = __toESM(require_jsx_runtime(), 1);
var MenuGroup = forwardRef((props, ref) => {
  const { title, children, className, ...rest } = props;
  const _className = cx("chakra-menu__group__title", className);
  const styles = useMenuStyles();
  return (0, import_jsx_runtime98.jsxs)("div", { ref, className: "chakra-menu__group", role: "group", children: [
    title && (0, import_jsx_runtime98.jsx)(chakra.p, { className: _className, ...rest, __css: styles.groupTitle, children: title }),
    children
  ] });
});
MenuGroup.displayName = "MenuGroup";

// node_modules/@chakra-ui/menu/dist/chunk-JKDCSSU5.mjs
var import_jsx_runtime99 = __toESM(require_jsx_runtime(), 1);
var MenuOptionGroup = (props) => {
  const { className, title, ...rest } = props;
  const ownProps = useMenuOptionGroup(rest);
  return (0, import_jsx_runtime99.jsx)(
    MenuGroup,
    {
      title,
      className: cx("chakra-menu__option-group", className),
      ...ownProps
    }
  );
};
MenuOptionGroup.displayName = "MenuOptionGroup";

// node_modules/@chakra-ui/menu/dist/chunk-WO74RHXC.mjs
var import_jsx_runtime100 = __toESM(require_jsx_runtime(), 1);
var StyledMenuButton = forwardRef((props, ref) => {
  const styles = useMenuStyles();
  return (0, import_jsx_runtime100.jsx)(
    chakra.button,
    {
      ref,
      ...props,
      __css: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        outline: 0,
        ...styles.button
      }
    }
  );
});
var MenuButton = forwardRef(
  (props, ref) => {
    const { children, as: As, ...rest } = props;
    const buttonProps = useMenuButton(rest, ref);
    const Element2 = As || StyledMenuButton;
    return (0, import_jsx_runtime100.jsx)(
      Element2,
      {
        ...buttonProps,
        className: cx("chakra-menu__menu-button", props.className),
        children: (0, import_jsx_runtime100.jsx)(
          chakra.span,
          {
            __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
            children: props.children
          }
        )
      }
    );
  }
);
MenuButton.displayName = "MenuButton";

// node_modules/@chakra-ui/menu/dist/chunk-GQDAXL2G.mjs
var import_jsx_runtime101 = __toESM(require_jsx_runtime(), 1);
var MenuDivider = (props) => {
  const { className, ...rest } = props;
  const styles = useMenuStyles();
  return (0, import_jsx_runtime101.jsx)(
    chakra.hr,
    {
      "aria-orientation": "horizontal",
      className: cx("chakra-menu__divider", className),
      ...rest,
      __css: styles.divider
    }
  );
};
MenuDivider.displayName = "MenuDivider";

// node_modules/@chakra-ui/menu/dist/chunk-I2PJQYUR.mjs
var import_jsx_runtime102 = __toESM(require_jsx_runtime(), 1);
var CheckIcon3 = (props) => (0, import_jsx_runtime102.jsx)("svg", { viewBox: "0 0 14 14", width: "1em", height: "1em", ...props, children: (0, import_jsx_runtime102.jsx)(
  "polygon",
  {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }
) });
var MenuItemOption = forwardRef(
  (props, ref) => {
    const { icon, iconSpacing = "0.75rem", ...rest } = props;
    const optionProps = useMenuOption(rest, ref);
    return (0, import_jsx_runtime102.jsxs)(
      StyledMenuItem,
      {
        ...optionProps,
        className: cx("chakra-menu__menuitem-option", rest.className),
        children: [
          icon !== null && (0, import_jsx_runtime102.jsx)(
            MenuIcon,
            {
              fontSize: "0.8em",
              marginEnd: iconSpacing,
              opacity: props.isChecked ? 1 : 0,
              children: icon || (0, import_jsx_runtime102.jsx)(CheckIcon3, {})
            }
          ),
          (0, import_jsx_runtime102.jsx)("span", { style: { flex: 1 }, children: optionProps.children })
        ]
      }
    );
  }
);
MenuItemOption.id = "MenuItemOption";
MenuItemOption.displayName = "MenuItemOption";

// node_modules/@chakra-ui/modal/dist/chunk-XV7ZWFID.mjs
var import_react138 = __toESM(require_react(), 1);
var import_jsx_runtime103 = __toESM(require_jsx_runtime(), 1);
var transitions = {
  slideInBottom: {
    ...slideFadeConfig,
    custom: { offsetY: 16, reverse: true }
  },
  slideInRight: {
    ...slideFadeConfig,
    custom: { offsetX: 16, reverse: true }
  },
  scale: {
    ...scaleFadeConfig,
    custom: { initialScale: 0.95, reverse: true }
  },
  none: {}
};
var MotionSection = chakra(motion.section);
var getMotionProps = (preset) => {
  return transitions[preset || "none"];
};
var ModalTransition = (0, import_react138.forwardRef)(
  (props, ref) => {
    const { preset, motionProps = getMotionProps(preset), ...rest } = props;
    return (0, import_jsx_runtime103.jsx)(MotionSection, { ref, ...motionProps, ...rest });
  }
);
ModalTransition.displayName = "ModalTransition";

// node_modules/@chakra-ui/modal/dist/chunk-NHABU752.mjs
var __defProp2 = Object.defineProperty;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField2 = (obj, key, value) => {
  __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/@chakra-ui/modal/dist/chunk-474T57YK.mjs
var import_react139 = __toESM(require_react(), 1);
var ModalManager = class {
  constructor() {
    __publicField2(this, "modals");
    this.modals = /* @__PURE__ */ new Map();
  }
  add(modal) {
    this.modals.set(modal, this.modals.size + 1);
    return this.modals.size;
  }
  remove(modal) {
    this.modals.delete(modal);
  }
  isTopModal(modal) {
    if (!modal)
      return false;
    return this.modals.get(modal) === this.modals.size;
  }
};
var manager = new ModalManager();
function useModalManager(ref, isOpen) {
  const [index2, setIndex] = (0, import_react139.useState)(0);
  (0, import_react139.useEffect)(() => {
    const node2 = ref.current;
    if (!node2)
      return;
    if (isOpen) {
      const index22 = manager.add(node2);
      setIndex(index22);
    }
    return () => {
      manager.remove(node2);
      setIndex(0);
    };
  }, [isOpen, ref]);
  return index2;
}

// node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node2) {
  return node2 && (node2.host || unwrapHost(node2.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node2) {
      if (elementsToKeep.has(node2)) {
        deep(node2);
      } else {
        var attr = node2.getAttribute(controlAttribute);
        var alreadyHidden = attr !== null && attr !== "false";
        var counterValue = (counterMap.get(node2) || 0) + 1;
        var markerValue = (markerCounter.get(node2) || 0) + 1;
        counterMap.set(node2, counterValue);
        markerCounter.set(node2, markerValue);
        hiddenNodes.push(node2);
        if (counterValue === 1 && alreadyHidden) {
          uncontrolledNodes.set(node2, true);
        }
        if (markerValue === 1) {
          node2.setAttribute(markerName, "true");
        }
        if (!alreadyHidden) {
          node2.setAttribute(controlAttribute, "true");
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node2) {
      var counterValue = counterMap.get(node2) - 1;
      var markerValue = markerCounter.get(node2) - 1;
      counterMap.set(node2, counterValue);
      markerCounter.set(node2, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node2)) {
          node2.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node2);
      }
      if (!markerValue) {
        node2.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// node_modules/@chakra-ui/modal/dist/chunk-R5DTDXZR.mjs
var import_react140 = __toESM(require_react(), 1);
function useModal(props) {
  const {
    isOpen,
    onClose,
    id: id4,
    closeOnOverlayClick = true,
    closeOnEsc = true,
    useInert = true,
    onOverlayClick: onOverlayClickProp,
    onEsc
  } = props;
  const dialogRef = (0, import_react140.useRef)(null);
  const overlayRef = (0, import_react140.useRef)(null);
  const [dialogId, headerId, bodyId] = useIds3(
    id4,
    `chakra-modal`,
    `chakra-modal--header`,
    `chakra-modal--body`
  );
  useAriaHidden(dialogRef, isOpen && useInert);
  useModalManager(dialogRef, isOpen);
  const mouseDownTarget = (0, import_react140.useRef)(null);
  const onMouseDown = (0, import_react140.useCallback)((event) => {
    mouseDownTarget.current = event.target;
  }, []);
  const onKeyDown = (0, import_react140.useCallback)(
    (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        if (closeOnEsc) {
          onClose == null ? void 0 : onClose();
        }
        onEsc == null ? void 0 : onEsc();
      }
    },
    [closeOnEsc, onClose, onEsc]
  );
  const [headerMounted, setHeaderMounted] = (0, import_react140.useState)(false);
  const [bodyMounted, setBodyMounted] = (0, import_react140.useState)(false);
  const getDialogProps = (0, import_react140.useCallback)(
    (props2 = {}, ref = null) => ({
      role: "dialog",
      ...props2,
      ref: mergeRefs(ref, dialogRef),
      id: dialogId,
      tabIndex: -1,
      "aria-modal": true,
      "aria-labelledby": headerMounted ? headerId : void 0,
      "aria-describedby": bodyMounted ? bodyId : void 0,
      onClick: callAllHandlers(
        props2.onClick,
        (event) => event.stopPropagation()
      )
    }),
    [bodyId, bodyMounted, dialogId, headerId, headerMounted]
  );
  const onOverlayClick = (0, import_react140.useCallback)(
    (event) => {
      event.stopPropagation();
      if (mouseDownTarget.current !== event.target)
        return;
      if (!manager.isTopModal(dialogRef.current))
        return;
      if (closeOnOverlayClick) {
        onClose == null ? void 0 : onClose();
      }
      onOverlayClickProp == null ? void 0 : onOverlayClickProp();
    },
    [onClose, closeOnOverlayClick, onOverlayClickProp]
  );
  const getDialogContainerProps = (0, import_react140.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref: mergeRefs(ref, overlayRef),
      onClick: callAllHandlers(props2.onClick, onOverlayClick),
      onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
      onMouseDown: callAllHandlers(props2.onMouseDown, onMouseDown)
    }),
    [onKeyDown, onMouseDown, onOverlayClick]
  );
  return {
    isOpen,
    onClose,
    headerId,
    bodyId,
    setBodyMounted,
    setHeaderMounted,
    dialogRef,
    overlayRef,
    getDialogProps,
    getDialogContainerProps
  };
}
function useAriaHidden(ref, shouldHide) {
  const currentElement = ref.current;
  (0, import_react140.useEffect)(() => {
    if (!ref.current || !shouldHide)
      return void 0;
    return hideOthers(ref.current);
  }, [shouldHide, ref, currentElement]);
}
function useIds3(idProp, ...prefixes) {
  const reactId = (0, import_react140.useId)();
  const id4 = idProp || reactId;
  return (0, import_react140.useMemo)(() => {
    return prefixes.map((prefix) => `${prefix}-${id4}`);
  }, [id4, prefixes]);
}

// node_modules/@chakra-ui/modal/dist/chunk-UUGUEMMH.mjs
var import_jsx_runtime104 = __toESM(require_jsx_runtime(), 1);
var [ModalStylesProvider, useModalStyles] = createContext({
  name: `ModalStylesContext`,
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
});
var [ModalContextProvider, useModalContext] = createContext({
  strict: true,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
});
var Modal = (props) => {
  const modalProps = {
    scrollBehavior: "outside",
    autoFocus: true,
    trapFocus: true,
    returnFocusOnClose: true,
    blockScrollOnMount: true,
    allowPinchZoom: false,
    motionPreset: "scale",
    lockFocusAcrossFrames: true,
    ...props
  };
  const {
    portalProps,
    children,
    autoFocus,
    trapFocus,
    initialFocusRef,
    finalFocusRef,
    returnFocusOnClose,
    blockScrollOnMount,
    allowPinchZoom,
    preserveScrollBarGap,
    motionPreset,
    lockFocusAcrossFrames,
    onCloseComplete
  } = modalProps;
  const styles = useMultiStyleConfig("Modal", modalProps);
  const modal = useModal(modalProps);
  const context = {
    ...modal,
    autoFocus,
    trapFocus,
    initialFocusRef,
    finalFocusRef,
    returnFocusOnClose,
    blockScrollOnMount,
    allowPinchZoom,
    preserveScrollBarGap,
    motionPreset,
    lockFocusAcrossFrames
  };
  return (0, import_jsx_runtime104.jsx)(ModalContextProvider, { value: context, children: (0, import_jsx_runtime104.jsx)(ModalStylesProvider, { value: styles, children: (0, import_jsx_runtime104.jsx)(AnimatePresence, { onExitComplete: onCloseComplete, children: context.isOpen && (0, import_jsx_runtime104.jsx)(Portal, { ...portalProps, children }) }) }) });
};
Modal.displayName = "Modal";

// node_modules/@chakra-ui/modal/dist/chunk-CJQLKBLU.mjs
var import_react141 = __toESM(require_react(), 1);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var React27 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
var React23 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React23.forwardRef(function(props, parentRef) {
  var ref = React23.useRef(null);
  var _a2 = React23.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a2[0], setCallbacks = _a2[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar2 = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container3 = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar2 = sideCar2;
  var containerRef = useMergeRefs2([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React23.createElement(
    React23.Fragment,
    null,
    enabled && React23.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
    forwardProps ? React23.cloneElement(React23.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React23.createElement(Container3, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React26 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React25 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/hook.js
var React24 = __toESM(require_react());

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css3) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css3;
  } else {
    tag.appendChild(document.createTextNode(css3));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter2 = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter2 == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter2++;
    },
    remove: function() {
      counter2--;
      if (!counter2 && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React24.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle2 = styleHookSingleton();
  var Sheet = function(_a2) {
    var styles = _a2.styles, dynamic = _a2.dynamic;
    useStyle2(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse3 = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left2 = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top2 = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right2 = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse3(left2), parse3(top2), parse3(right2)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var getStyles = function(_a2, allowRelative, gapMode, important) {
  var left2 = _a2.left, top2 = _a2.top, right2 = _a2.right, gap = _a2.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left2, "px;\n    padding-top: ").concat(top2, "px;\n    padding-right: ").concat(right2, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var RemoveScrollBar = function(props) {
  var noRelative = props.noRelative, noImportant = props.noImportant, _a2 = props.gapMode, gapMode = _a2 === void 0 ? "margin" : _a2;
  var gap = React25.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React25.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node2) {
  return node2.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node2, overflow) {
  var styles = window.getComputedStyle(node2);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node2) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node2) {
  return elementCanBeScrolled(node2, "overflowY");
};
var elementCouldBeHScrolled = function(node2) {
  return elementCanBeScrolled(node2, "overflowX");
};
var locationCouldBeScrolled = function(axis, node2) {
  var current = node2;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a2 = getScrollVariables(axis, current), s = _a2[1], d = _a2[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables = function(_a2) {
  var scrollTop = _a2.scrollTop, scrollHeight = _a2.scrollHeight, clientHeight = _a2.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a2) {
  var scrollLeft = _a2.scrollLeft, scrollWidth = _a2.scrollWidth, clientWidth = _a2.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node2) {
  return axis === "v" ? elementCouldBeVScrolled(node2) : elementCouldBeHScrolled(node2);
};
var getScrollVariables = function(axis, node2) {
  return axis === "v" ? getVScrollVariables(node2) : getHScrollVariables(node2);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a2 = getScrollVariables(axis, target), position2 = _a2[0], scroll_1 = _a2[1], capacity = _a2[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position2;
    if (position2 || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position2;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef3 = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id4) {
  return "\n  .block-interactivity-".concat(id4, " {pointer-events: none;}\n  .allow-interactivity-").concat(id4, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React26.useRef([]);
  var touchStartRef = React26.useRef([0, 0]);
  var activeAxis = React26.useRef();
  var id4 = React26.useState(idCounter++)[0];
  var Style2 = React26.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React26.useRef(props);
  React26.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React26.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id4));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef3), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id4));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id4));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id4));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React26.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React26.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef3).filter(Boolean).filter(function(node2) {
        return node2.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React26.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React26.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React26.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React26.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React26.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React26.createElement(
    React26.Fragment,
    null,
    inert ? React26.createElement(Style2, { styles: generateStyle(id4) }) : null,
    removeScrollBar ? React26.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
  );
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React27.forwardRef(function(props, ref) {
  return React27.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default2 = ReactRemoveScroll;

// node_modules/@chakra-ui/modal/dist/chunk-CJQLKBLU.mjs
var import_jsx_runtime105 = __toESM(require_jsx_runtime(), 1);
function ModalFocusScope(props) {
  const {
    autoFocus,
    trapFocus,
    dialogRef,
    initialFocusRef,
    blockScrollOnMount,
    allowPinchZoom,
    finalFocusRef,
    returnFocusOnClose,
    preserveScrollBarGap,
    lockFocusAcrossFrames,
    isOpen
  } = useModalContext();
  const [isPresent2, safeToRemove] = usePresence();
  (0, import_react141.useEffect)(() => {
    if (!isPresent2 && safeToRemove) {
      setTimeout(safeToRemove);
    }
  }, [isPresent2, safeToRemove]);
  const index2 = useModalManager(dialogRef, isOpen);
  return (0, import_jsx_runtime105.jsx)(
    FocusLock2,
    {
      autoFocus,
      isDisabled: !trapFocus,
      initialFocusRef,
      finalFocusRef,
      restoreFocus: returnFocusOnClose,
      contentRef: dialogRef,
      lockFocusAcrossFrames,
      children: (0, import_jsx_runtime105.jsx)(
        Combination_default2,
        {
          removeScrollBar: !preserveScrollBarGap,
          allowPinchZoom,
          enabled: index2 === 1 && blockScrollOnMount,
          forwardProps: true,
          children: props.children
        }
      )
    }
  );
}

// node_modules/@chakra-ui/modal/dist/chunk-66WFFNY3.mjs
var import_jsx_runtime106 = __toESM(require_jsx_runtime(), 1);
var ModalContent = forwardRef(
  (props, ref) => {
    const {
      className,
      children,
      containerProps: rootProps,
      motionProps,
      ...rest
    } = props;
    const { getDialogProps, getDialogContainerProps } = useModalContext();
    const dialogProps = getDialogProps(rest, ref);
    const containerProps = getDialogContainerProps(rootProps);
    const _className = cx("chakra-modal__content", className);
    const styles = useModalStyles();
    const dialogStyles = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...styles.dialog
    };
    const dialogContainerStyles = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...styles.dialogContainer
    };
    const { motionPreset } = useModalContext();
    return (0, import_jsx_runtime106.jsx)(ModalFocusScope, { children: (0, import_jsx_runtime106.jsx)(
      chakra.div,
      {
        ...containerProps,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: dialogContainerStyles,
        children: (0, import_jsx_runtime106.jsx)(
          ModalTransition,
          {
            preset: motionPreset,
            motionProps,
            className: _className,
            ...dialogProps,
            __css: dialogStyles,
            children
          }
        )
      }
    ) });
  }
);
ModalContent.displayName = "ModalContent";

// node_modules/@chakra-ui/modal/dist/chunk-BPJV7R7V.mjs
var import_jsx_runtime107 = __toESM(require_jsx_runtime(), 1);
function AlertDialog(props) {
  const { leastDestructiveRef, ...rest } = props;
  return (0, import_jsx_runtime107.jsx)(Modal, { ...rest, initialFocusRef: leastDestructiveRef });
}
var AlertDialogContent = forwardRef(
  (props, ref) => (0, import_jsx_runtime107.jsx)(ModalContent, { ref, role: "alertdialog", ...props })
);

// node_modules/@chakra-ui/modal/dist/chunk-VRAQ7LO3.mjs
var import_jsx_runtime108 = __toESM(require_jsx_runtime(), 1);
var [DrawerContextProvider, useDrawerContext] = createContext();
var placementMap2 = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function getDrawerPlacement(placement, dir) {
  var _a2, _b;
  if (!placement)
    return;
  return (_b = (_a2 = placementMap2[placement]) == null ? void 0 : _a2[dir]) != null ? _b : placement;
}
function Drawer(props) {
  var _a2;
  const {
    isOpen,
    onClose,
    placement: placementProp = "right",
    children,
    ...rest
  } = props;
  const theme2 = useTheme();
  const drawerStyleConfig = (_a2 = theme2.components) == null ? void 0 : _a2.Drawer;
  const placement = getDrawerPlacement(placementProp, theme2.direction);
  return (0, import_jsx_runtime108.jsx)(DrawerContextProvider, { value: { placement }, children: (0, import_jsx_runtime108.jsx)(
    Modal,
    {
      isOpen,
      onClose,
      styleConfig: drawerStyleConfig,
      ...rest,
      children
    }
  ) });
}

// node_modules/@chakra-ui/modal/dist/chunk-7PTKRZFZ.mjs
var import_jsx_runtime109 = __toESM(require_jsx_runtime(), 1);
var MotionDiv = chakra(Slide);
var DrawerContent = forwardRef(
  (props, ref) => {
    const {
      className,
      children,
      motionProps,
      containerProps: rootProps,
      ...rest
    } = props;
    const { getDialogProps, getDialogContainerProps, isOpen } = useModalContext();
    const dialogProps = getDialogProps(rest, ref);
    const containerProps = getDialogContainerProps(rootProps);
    const _className = cx("chakra-modal__content", className);
    const styles = useModalStyles();
    const dialogStyles = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...styles.dialog
    };
    const dialogContainerStyles = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...styles.dialogContainer
    };
    const { placement } = useDrawerContext();
    return (0, import_jsx_runtime109.jsx)(ModalFocusScope, { children: (0, import_jsx_runtime109.jsx)(
      chakra.div,
      {
        ...containerProps,
        className: "chakra-modal__content-container",
        __css: dialogContainerStyles,
        children: (0, import_jsx_runtime109.jsx)(
          MotionDiv,
          {
            motionProps,
            direction: placement,
            in: isOpen,
            className: _className,
            ...dialogProps,
            __css: dialogStyles,
            children
          }
        )
      }
    ) });
  }
);
DrawerContent.displayName = "DrawerContent";

// node_modules/@chakra-ui/modal/dist/chunk-YI7XFFAC.mjs
var import_jsx_runtime110 = __toESM(require_jsx_runtime(), 1);
var ModalFooter = forwardRef(
  (props, ref) => {
    const { className, ...rest } = props;
    const _className = cx("chakra-modal__footer", className);
    const styles = useModalStyles();
    const footerStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...styles.footer
    };
    return (0, import_jsx_runtime110.jsx)(
      chakra.footer,
      {
        ref,
        ...rest,
        __css: footerStyles,
        className: _className
      }
    );
  }
);
ModalFooter.displayName = "ModalFooter";

// node_modules/@chakra-ui/modal/dist/chunk-YBA5A33G.mjs
var import_react142 = __toESM(require_react(), 1);
var import_jsx_runtime111 = __toESM(require_jsx_runtime(), 1);
var ModalHeader = forwardRef(
  (props, ref) => {
    const { className, ...rest } = props;
    const { headerId, setHeaderMounted } = useModalContext();
    (0, import_react142.useEffect)(() => {
      setHeaderMounted(true);
      return () => setHeaderMounted(false);
    }, [setHeaderMounted]);
    const _className = cx("chakra-modal__header", className);
    const styles = useModalStyles();
    const headerStyles = {
      flex: 0,
      ...styles.header
    };
    return (0, import_jsx_runtime111.jsx)(
      chakra.header,
      {
        ref,
        className: _className,
        id: headerId,
        ...rest,
        __css: headerStyles
      }
    );
  }
);
ModalHeader.displayName = "ModalHeader";

// node_modules/@chakra-ui/modal/dist/chunk-OWW5MU75.mjs
var import_jsx_runtime112 = __toESM(require_jsx_runtime(), 1);
var MotionDiv2 = chakra(motion.div);
var ModalOverlay = forwardRef(
  (props, ref) => {
    const { className, transition: transition2, motionProps: _motionProps, ...rest } = props;
    const _className = cx("chakra-modal__overlay", className);
    const styles = useModalStyles();
    const overlayStyle = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...styles.overlay
    };
    const { motionPreset } = useModalContext();
    const defaultMotionProps = motionPreset === "none" ? {} : fadeConfig;
    const motionProps = _motionProps || defaultMotionProps;
    return (0, import_jsx_runtime112.jsx)(
      MotionDiv2,
      {
        ...motionProps,
        __css: overlayStyle,
        ref,
        className: _className,
        ...rest
      }
    );
  }
);
ModalOverlay.displayName = "ModalOverlay";

// node_modules/@chakra-ui/modal/dist/chunk-PVJ72NKC.mjs
var import_react143 = __toESM(require_react(), 1);
var import_jsx_runtime113 = __toESM(require_jsx_runtime(), 1);
var ModalBody = forwardRef((props, ref) => {
  const { className, ...rest } = props;
  const { bodyId, setBodyMounted } = useModalContext();
  (0, import_react143.useEffect)(() => {
    setBodyMounted(true);
    return () => setBodyMounted(false);
  }, [setBodyMounted]);
  const _className = cx("chakra-modal__body", className);
  const styles = useModalStyles();
  return (0, import_jsx_runtime113.jsx)(
    chakra.div,
    {
      ref,
      className: _className,
      id: bodyId,
      ...rest,
      __css: styles.body
    }
  );
});
ModalBody.displayName = "ModalBody";

// node_modules/@chakra-ui/modal/dist/chunk-YLPWWAYV.mjs
var import_jsx_runtime114 = __toESM(require_jsx_runtime(), 1);
var ModalCloseButton = forwardRef(
  (props, ref) => {
    const { onClick, className, ...rest } = props;
    const { onClose } = useModalContext();
    const _className = cx("chakra-modal__close-btn", className);
    const styles = useModalStyles();
    return (0, import_jsx_runtime114.jsx)(
      CloseButton,
      {
        ref,
        __css: styles.closeButton,
        className: _className,
        onClick: callAllHandlers(onClick, (event) => {
          event.stopPropagation();
          onClose();
        }),
        ...rest
      }
    );
  }
);
ModalCloseButton.displayName = "ModalCloseButton";

// node_modules/@chakra-ui/number-input/dist/chunk-ATDT5RFJ.mjs
var import_jsx_runtime115 = __toESM(require_jsx_runtime(), 1);
var TriangleDownIcon = (props) => (0, import_jsx_runtime115.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime115.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
  }
) });
var TriangleUpIcon = (props) => (0, import_jsx_runtime115.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime115.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
  }
) });

// node_modules/@chakra-ui/number-input/dist/chunk-XRH675A5.mjs
var import_react144 = __toESM(require_react(), 1);
function useAttributeObserver(ref, attributes, fn2, enabled) {
  (0, import_react144.useEffect)(() => {
    var _a2;
    if (!ref.current || !enabled)
      return;
    const win = (_a2 = ref.current.ownerDocument.defaultView) != null ? _a2 : window;
    const attrs = Array.isArray(attributes) ? attributes : [attributes];
    const obs = new win.MutationObserver((changes) => {
      for (const change of changes) {
        if (change.type === "attributes" && change.attributeName && attrs.includes(change.attributeName)) {
          fn2(change);
        }
      }
    });
    obs.observe(ref.current, { attributes: true, attributeFilter: attrs });
    return () => obs.disconnect();
  });
}

// node_modules/@chakra-ui/react-use-interval/dist/index.mjs
var import_react145 = __toESM(require_react(), 1);
function useInterval2(callback, delay2) {
  const fn2 = useCallbackRef(callback);
  (0, import_react145.useEffect)(() => {
    let intervalId = null;
    const tick = () => fn2();
    if (delay2 !== null) {
      intervalId = window.setInterval(tick, delay2);
    }
    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [delay2, fn2]);
}

// node_modules/@chakra-ui/number-input/dist/chunk-JCNYS6PS.mjs
var import_react146 = __toESM(require_react(), 1);
var CONTINUOUS_CHANGE_INTERVAL = 50;
var CONTINUOUS_CHANGE_DELAY = 300;
function useSpinner(increment, decrement) {
  const [isSpinning, setIsSpinning] = (0, import_react146.useState)(false);
  const [action, setAction] = (0, import_react146.useState)(null);
  const [runOnce, setRunOnce] = (0, import_react146.useState)(true);
  const timeoutRef = (0, import_react146.useRef)(null);
  const removeTimeout = () => clearTimeout(timeoutRef.current);
  useInterval2(
    () => {
      if (action === "increment") {
        increment();
      }
      if (action === "decrement") {
        decrement();
      }
    },
    isSpinning ? CONTINUOUS_CHANGE_INTERVAL : null
  );
  const up = (0, import_react146.useCallback)(() => {
    if (runOnce) {
      increment();
    }
    timeoutRef.current = setTimeout(() => {
      setRunOnce(false);
      setIsSpinning(true);
      setAction("increment");
    }, CONTINUOUS_CHANGE_DELAY);
  }, [increment, runOnce]);
  const down = (0, import_react146.useCallback)(() => {
    if (runOnce) {
      decrement();
    }
    timeoutRef.current = setTimeout(() => {
      setRunOnce(false);
      setIsSpinning(true);
      setAction("decrement");
    }, CONTINUOUS_CHANGE_DELAY);
  }, [decrement, runOnce]);
  const stop = (0, import_react146.useCallback)(() => {
    setRunOnce(true);
    setIsSpinning(false);
    removeTimeout();
  }, []);
  (0, import_react146.useEffect)(() => {
    return () => removeTimeout();
  }, []);
  return { up, down, stop, isSpinning };
}

// node_modules/@chakra-ui/number-input/dist/chunk-RBDW77H4.mjs
var import_react147 = __toESM(require_react(), 1);
var FLOATING_POINT_REGEX = /^[Ee0-9+\-.]$/;
function isFloatingPointNumericCharacter(character) {
  return FLOATING_POINT_REGEX.test(character);
}
function isValidNumericKeyboardEvent(event, isValid) {
  if (event.key == null)
    return true;
  const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
  const isSingleCharacterKey = event.key.length === 1;
  if (!isSingleCharacterKey || isModifierKey)
    return true;
  return isValid(event.key);
}
function useNumberInput(props = {}) {
  const {
    focusInputOnChange = true,
    clampValueOnBlur = true,
    keepWithinRange = true,
    min: min2 = Number.MIN_SAFE_INTEGER,
    max: max2 = Number.MAX_SAFE_INTEGER,
    step: stepProp = 1,
    isReadOnly,
    isDisabled: isDisabled2,
    isRequired,
    isInvalid,
    pattern = "[0-9]*(.[0-9]+)?",
    inputMode = "decimal",
    allowMouseWheel,
    id: id4,
    onChange: _,
    precision,
    name,
    "aria-describedby": ariaDescBy,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    onInvalid: onInvalidProp,
    getAriaValueText: getAriaValueTextProp,
    isValidCharacter: isValidCharacterProp,
    format: formatValue,
    parse: parseValue,
    ...htmlProps
  } = props;
  const onFocus3 = useCallbackRef(onFocusProp);
  const onBlur3 = useCallbackRef(onBlurProp);
  const onInvalid = useCallbackRef(onInvalidProp);
  const isValidCharacter = useCallbackRef(
    isValidCharacterProp != null ? isValidCharacterProp : isFloatingPointNumericCharacter
  );
  const getAriaValueText = useCallbackRef(getAriaValueTextProp);
  const counter2 = useCounter(props);
  const {
    update: updateFn,
    increment: incrementFn,
    decrement: decrementFn
  } = counter2;
  const [isFocused, setFocused] = (0, import_react147.useState)(false);
  const isInteractive = !(isReadOnly || isDisabled2);
  const inputRef = (0, import_react147.useRef)(null);
  const inputSelectionRef = (0, import_react147.useRef)(null);
  const incrementButtonRef = (0, import_react147.useRef)(null);
  const decrementButtonRef = (0, import_react147.useRef)(null);
  const sanitize2 = (0, import_react147.useCallback)(
    (value) => value.split("").filter(isValidCharacter).join(""),
    [isValidCharacter]
  );
  const parse4 = (0, import_react147.useCallback)(
    (value) => {
      var _a2;
      return (_a2 = parseValue == null ? void 0 : parseValue(value)) != null ? _a2 : value;
    },
    [parseValue]
  );
  const format2 = (0, import_react147.useCallback)(
    (value) => {
      var _a2;
      return ((_a2 = formatValue == null ? void 0 : formatValue(value)) != null ? _a2 : value).toString();
    },
    [formatValue]
  );
  useUpdateEffect(() => {
    if (counter2.valueAsNumber > max2) {
      onInvalid == null ? void 0 : onInvalid("rangeOverflow", format2(counter2.value), counter2.valueAsNumber);
    } else if (counter2.valueAsNumber < min2) {
      onInvalid == null ? void 0 : onInvalid("rangeOverflow", format2(counter2.value), counter2.valueAsNumber);
    }
  }, [counter2.valueAsNumber, counter2.value, format2, onInvalid]);
  useSafeLayoutEffect(() => {
    if (!inputRef.current)
      return;
    const notInSync = inputRef.current.value != counter2.value;
    if (notInSync) {
      const parsedInput = parse4(inputRef.current.value);
      counter2.setValue(sanitize2(parsedInput));
    }
  }, [parse4, sanitize2]);
  const increment = (0, import_react147.useCallback)(
    (step = stepProp) => {
      if (isInteractive) {
        incrementFn(step);
      }
    },
    [incrementFn, isInteractive, stepProp]
  );
  const decrement = (0, import_react147.useCallback)(
    (step = stepProp) => {
      if (isInteractive) {
        decrementFn(step);
      }
    },
    [decrementFn, isInteractive, stepProp]
  );
  const spinner = useSpinner(increment, decrement);
  useAttributeObserver(
    incrementButtonRef,
    "disabled",
    spinner.stop,
    spinner.isSpinning
  );
  useAttributeObserver(
    decrementButtonRef,
    "disabled",
    spinner.stop,
    spinner.isSpinning
  );
  const onChange = (0, import_react147.useCallback)(
    (event) => {
      const evt = event.nativeEvent;
      if (evt.isComposing)
        return;
      const parsedInput = parse4(event.currentTarget.value);
      updateFn(sanitize2(parsedInput));
      inputSelectionRef.current = {
        start: event.currentTarget.selectionStart,
        end: event.currentTarget.selectionEnd
      };
    },
    [updateFn, sanitize2, parse4]
  );
  const _onFocus = (0, import_react147.useCallback)(
    (event) => {
      var _a2, _b, _c;
      onFocus3 == null ? void 0 : onFocus3(event);
      if (!inputSelectionRef.current)
        return;
      event.target.selectionStart = (_b = inputSelectionRef.current.start) != null ? _b : (_a2 = event.currentTarget.value) == null ? void 0 : _a2.length;
      event.currentTarget.selectionEnd = (_c = inputSelectionRef.current.end) != null ? _c : event.currentTarget.selectionStart;
    },
    [onFocus3]
  );
  const onKeyDown = (0, import_react147.useCallback)(
    (event) => {
      if (event.nativeEvent.isComposing)
        return;
      if (!isValidNumericKeyboardEvent(event, isValidCharacter)) {
        event.preventDefault();
      }
      const stepFactor = getStepFactor(event) * stepProp;
      const eventKey = event.key;
      const keyMap = {
        ArrowUp: () => increment(stepFactor),
        ArrowDown: () => decrement(stepFactor),
        Home: () => updateFn(min2),
        End: () => updateFn(max2)
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [isValidCharacter, stepProp, increment, decrement, updateFn, min2, max2]
  );
  const getStepFactor = (event) => {
    let ratio = 1;
    if (event.metaKey || event.ctrlKey) {
      ratio = 0.1;
    }
    if (event.shiftKey) {
      ratio = 10;
    }
    return ratio;
  };
  const ariaValueText = (0, import_react147.useMemo)(() => {
    const text = getAriaValueText == null ? void 0 : getAriaValueText(counter2.value);
    if (text != null)
      return text;
    const defaultText = counter2.value.toString();
    return !defaultText ? void 0 : defaultText;
  }, [counter2.value, getAriaValueText]);
  const validateAndClamp = (0, import_react147.useCallback)(() => {
    let next = counter2.value;
    if (counter2.value === "")
      return;
    const valueStartsWithE = /^[eE]/.test(counter2.value.toString());
    if (valueStartsWithE) {
      counter2.setValue("");
    } else {
      if (counter2.valueAsNumber < min2) {
        next = min2;
      }
      if (counter2.valueAsNumber > max2) {
        next = max2;
      }
      counter2.cast(next);
    }
  }, [counter2, max2, min2]);
  const onInputBlur = (0, import_react147.useCallback)(() => {
    setFocused(false);
    if (clampValueOnBlur) {
      validateAndClamp();
    }
  }, [clampValueOnBlur, setFocused, validateAndClamp]);
  const focusInput = (0, import_react147.useCallback)(() => {
    if (focusInputOnChange) {
      requestAnimationFrame(() => {
        var _a2;
        (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
      });
    }
  }, [focusInputOnChange]);
  const spinUp = (0, import_react147.useCallback)(
    (event) => {
      event.preventDefault();
      spinner.up();
      focusInput();
    },
    [focusInput, spinner]
  );
  const spinDown = (0, import_react147.useCallback)(
    (event) => {
      event.preventDefault();
      spinner.down();
      focusInput();
    },
    [focusInput, spinner]
  );
  useEventListener(
    () => inputRef.current,
    "wheel",
    (event) => {
      var _a2, _b;
      const doc = (_b = (_a2 = inputRef.current) == null ? void 0 : _a2.ownerDocument) != null ? _b : document;
      const isInputFocused = doc.activeElement === inputRef.current;
      if (!allowMouseWheel || !isInputFocused)
        return;
      event.preventDefault();
      const stepFactor = getStepFactor(event) * stepProp;
      const direction = Math.sign(event.deltaY);
      if (direction === -1) {
        increment(stepFactor);
      } else if (direction === 1) {
        decrement(stepFactor);
      }
    },
    { passive: false }
  );
  const getIncrementButtonProps = (0, import_react147.useCallback)(
    (props2 = {}, ref = null) => {
      const disabled = isDisabled2 || keepWithinRange && counter2.isAtMax;
      return {
        ...props2,
        ref: mergeRefs(ref, incrementButtonRef),
        role: "button",
        tabIndex: -1,
        onPointerDown: callAllHandlers(props2.onPointerDown, (event) => {
          if (event.button !== 0 || disabled)
            return;
          spinUp(event);
        }),
        onPointerLeave: callAllHandlers(props2.onPointerLeave, spinner.stop),
        onPointerUp: callAllHandlers(props2.onPointerUp, spinner.stop),
        disabled,
        "aria-disabled": ariaAttr(disabled)
      };
    },
    [counter2.isAtMax, keepWithinRange, spinUp, spinner.stop, isDisabled2]
  );
  const getDecrementButtonProps = (0, import_react147.useCallback)(
    (props2 = {}, ref = null) => {
      const disabled = isDisabled2 || keepWithinRange && counter2.isAtMin;
      return {
        ...props2,
        ref: mergeRefs(ref, decrementButtonRef),
        role: "button",
        tabIndex: -1,
        onPointerDown: callAllHandlers(props2.onPointerDown, (event) => {
          if (event.button !== 0 || disabled)
            return;
          spinDown(event);
        }),
        onPointerLeave: callAllHandlers(props2.onPointerLeave, spinner.stop),
        onPointerUp: callAllHandlers(props2.onPointerUp, spinner.stop),
        disabled,
        "aria-disabled": ariaAttr(disabled)
      };
    },
    [counter2.isAtMin, keepWithinRange, spinDown, spinner.stop, isDisabled2]
  );
  const getInputProps = (0, import_react147.useCallback)(
    (props2 = {}, ref = null) => {
      var _a2, _b, _c, _d;
      return {
        name,
        inputMode,
        type: "text",
        pattern,
        "aria-labelledby": ariaLabelledBy,
        "aria-label": ariaLabel,
        "aria-describedby": ariaDescBy,
        id: id4,
        disabled: isDisabled2,
        ...props2,
        readOnly: (_a2 = props2.readOnly) != null ? _a2 : isReadOnly,
        "aria-readonly": (_b = props2.readOnly) != null ? _b : isReadOnly,
        "aria-required": (_c = props2.required) != null ? _c : isRequired,
        required: (_d = props2.required) != null ? _d : isRequired,
        ref: mergeRefs(inputRef, ref),
        value: format2(counter2.value),
        role: "spinbutton",
        "aria-valuemin": min2,
        "aria-valuemax": max2,
        "aria-valuenow": Number.isNaN(counter2.valueAsNumber) ? void 0 : counter2.valueAsNumber,
        "aria-invalid": ariaAttr(isInvalid != null ? isInvalid : counter2.isOutOfRange),
        "aria-valuetext": ariaValueText,
        autoComplete: "off",
        autoCorrect: "off",
        onChange: callAllHandlers(props2.onChange, onChange),
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
        onFocus: callAllHandlers(
          props2.onFocus,
          _onFocus,
          () => setFocused(true)
        ),
        onBlur: callAllHandlers(props2.onBlur, onBlur3, onInputBlur)
      };
    },
    [
      name,
      inputMode,
      pattern,
      ariaLabelledBy,
      ariaLabel,
      format2,
      ariaDescBy,
      id4,
      isDisabled2,
      isRequired,
      isReadOnly,
      isInvalid,
      counter2.value,
      counter2.valueAsNumber,
      counter2.isOutOfRange,
      min2,
      max2,
      ariaValueText,
      onChange,
      onKeyDown,
      _onFocus,
      onBlur3,
      onInputBlur
    ]
  );
  return {
    value: format2(counter2.value),
    valueAsNumber: counter2.valueAsNumber,
    isFocused,
    isDisabled: isDisabled2,
    isReadOnly,
    getIncrementButtonProps,
    getDecrementButtonProps,
    getInputProps,
    htmlProps
  };
}

// node_modules/@chakra-ui/number-input/dist/chunk-GIDWA67N.mjs
var import_react148 = __toESM(require_react(), 1);
var import_jsx_runtime116 = __toESM(require_jsx_runtime(), 1);
var [NumberInputStylesProvider, useNumberInputStyles] = createContext({
  name: `NumberInputStylesContext`,
  errorMessage: `useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />" `
});
var [NumberInputProvider, useNumberInputContext] = createContext({
  name: "NumberInputContext",
  errorMessage: "useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"
});
var NumberInput = forwardRef(
  function NumberInput2(props, ref) {
    const styles = useMultiStyleConfig("NumberInput", props);
    const ownProps = omitThemingProps(props);
    const controlProps = useFormControlProps(ownProps);
    const { htmlProps, ...context } = useNumberInput(controlProps);
    const ctx = (0, import_react148.useMemo)(() => context, [context]);
    return (0, import_jsx_runtime116.jsx)(NumberInputProvider, { value: ctx, children: (0, import_jsx_runtime116.jsx)(NumberInputStylesProvider, { value: styles, children: (0, import_jsx_runtime116.jsx)(
      chakra.div,
      {
        ...htmlProps,
        ref,
        className: cx("chakra-numberinput", props.className),
        __css: {
          position: "relative",
          zIndex: 0,
          ...styles.root
        }
      }
    ) }) });
  }
);
NumberInput.displayName = "NumberInput";
var NumberInputStepper = forwardRef(
  function NumberInputStepper2(props, ref) {
    const styles = useNumberInputStyles();
    return (0, import_jsx_runtime116.jsx)(
      chakra.div,
      {
        "aria-hidden": true,
        ref,
        ...props,
        __css: {
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "0",
          insetEnd: "0px",
          margin: "1px",
          height: "calc(100% - 2px)",
          zIndex: 1,
          ...styles.stepperGroup
        }
      }
    );
  }
);
NumberInputStepper.displayName = "NumberInputStepper";
var NumberInputField = forwardRef(
  function NumberInputField2(props, ref) {
    const { getInputProps } = useNumberInputContext();
    const input = getInputProps(props, ref);
    const styles = useNumberInputStyles();
    return (0, import_jsx_runtime116.jsx)(
      chakra.input,
      {
        ...input,
        className: cx("chakra-numberinput__field", props.className),
        __css: {
          width: "100%",
          ...styles.field
        }
      }
    );
  }
);
NumberInputField.displayName = "NumberInputField";
var StyledStepper = chakra("div", {
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    transitionProperty: "common",
    transitionDuration: "normal",
    userSelect: "none",
    cursor: "pointer",
    lineHeight: "normal"
  }
});
var NumberDecrementStepper = forwardRef(function NumberDecrementStepper2(props, ref) {
  var _a2;
  const styles = useNumberInputStyles();
  const { getDecrementButtonProps } = useNumberInputContext();
  const decrement = getDecrementButtonProps(props, ref);
  return (0, import_jsx_runtime116.jsx)(StyledStepper, { ...decrement, __css: styles.stepper, children: (_a2 = props.children) != null ? _a2 : (0, import_jsx_runtime116.jsx)(TriangleDownIcon, {}) });
});
NumberDecrementStepper.displayName = "NumberDecrementStepper";
var NumberIncrementStepper = forwardRef(function NumberIncrementStepper2(props, ref) {
  var _a2;
  const { getIncrementButtonProps } = useNumberInputContext();
  const increment = getIncrementButtonProps(props, ref);
  const styles = useNumberInputStyles();
  return (0, import_jsx_runtime116.jsx)(StyledStepper, { ...increment, __css: styles.stepper, children: (_a2 = props.children) != null ? _a2 : (0, import_jsx_runtime116.jsx)(TriangleUpIcon, {}) });
});
NumberIncrementStepper.displayName = "NumberIncrementStepper";

// node_modules/@chakra-ui/pin-input/dist/chunk-E34PQC4X.mjs
var import_react149 = __toESM(require_react(), 1);
var [
  PinInputDescendantsProvider,
  usePinInputDescendantsContext,
  usePinInputDescendants,
  usePinInputDescendant
] = createDescendantContext();
var [PinInputProvider, usePinInputContext] = createContext({
  name: "PinInputContext",
  errorMessage: "usePinInputContext: `context` is undefined. Seems you forgot to all pin input fields within `<PinInput />`"
});
var toArray2 = (value) => value == null ? void 0 : value.split("");
function validate(value, type) {
  const NUMERIC_REGEX = /^[0-9]+$/;
  const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/i;
  const regex = type === "alphanumeric" ? ALPHA_NUMERIC_REGEX : NUMERIC_REGEX;
  return regex.test(value);
}
function usePinInput(props = {}) {
  const {
    autoFocus,
    value,
    defaultValue,
    onChange,
    onComplete,
    placeholder = "○",
    manageFocus = true,
    otp = false,
    id: idProp,
    isDisabled: isDisabled2,
    isInvalid,
    type = "number",
    mask
  } = props;
  const uuid = (0, import_react149.useId)();
  const id4 = idProp != null ? idProp : `pin-input-${uuid}`;
  const descendants = usePinInputDescendants();
  const [moveFocus, setMoveFocus] = (0, import_react149.useState)(true);
  const [focusedIndex, setFocusedIndex] = (0, import_react149.useState)(-1);
  const [values, setValues2] = useControllableState({
    defaultValue: toArray2(defaultValue) || [],
    value: toArray2(value),
    onChange: (values2) => onChange == null ? void 0 : onChange(values2.join(""))
  });
  (0, import_react149.useEffect)(() => {
    if (autoFocus) {
      const first = descendants.first();
      if (first) {
        requestAnimationFrame(() => {
          first.node.focus();
        });
      }
    }
  }, [descendants]);
  const focusNext = (0, import_react149.useCallback)(
    (index2) => {
      if (!moveFocus || !manageFocus)
        return;
      const next = descendants.next(index2, false);
      if (next) {
        requestAnimationFrame(() => {
          next.node.focus();
        });
      }
    },
    [descendants, moveFocus, manageFocus]
  );
  const setValue = (0, import_react149.useCallback)(
    (value2, index2, handleFocus = true) => {
      const nextValues = [...values];
      nextValues[index2] = value2;
      setValues2(nextValues);
      const isComplete = value2 !== "" && nextValues.length === descendants.count() && nextValues.every(
        (inputValue) => inputValue != null && inputValue !== ""
      );
      if (isComplete) {
        onComplete == null ? void 0 : onComplete(nextValues.join(""));
      } else {
        if (handleFocus)
          focusNext(index2);
      }
    },
    [values, setValues2, focusNext, onComplete, descendants]
  );
  const clear = (0, import_react149.useCallback)(() => {
    var _a2;
    const values2 = Array(descendants.count()).fill("");
    setValues2(values2);
    const first = descendants.first();
    (_a2 = first == null ? void 0 : first.node) == null ? void 0 : _a2.focus();
  }, [descendants, setValues2]);
  const getNextValue = (0, import_react149.useCallback)((value2, eventValue) => {
    let nextValue = eventValue;
    if ((value2 == null ? void 0 : value2.length) > 0) {
      if (value2[0] === eventValue.charAt(0)) {
        nextValue = eventValue.charAt(1);
      } else if (value2[0] === eventValue.charAt(1)) {
        nextValue = eventValue.charAt(0);
      }
    }
    return nextValue;
  }, []);
  const getInputProps = (0, import_react149.useCallback)(
    (props2) => {
      const { index: index2, ...rest } = props2;
      const onChange2 = (event) => {
        const eventValue = event.target.value;
        const currentValue = values[index2];
        const nextValue = getNextValue(currentValue, eventValue);
        if (nextValue === "") {
          setValue("", index2);
          return;
        }
        if (eventValue.length > 2) {
          if (validate(eventValue, type)) {
            const nextValue2 = eventValue.split("").filter((_, index22) => index22 < descendants.count());
            setValues2(nextValue2);
            if (nextValue2.length === descendants.count()) {
              onComplete == null ? void 0 : onComplete(nextValue2.join(""));
            }
          }
        } else {
          if (validate(nextValue, type)) {
            setValue(nextValue, index2);
          }
          setMoveFocus(true);
        }
      };
      const onKeyDown = (event) => {
        var _a2;
        if (event.key === "Backspace" && manageFocus) {
          if (event.target.value === "") {
            const prevInput = descendants.prev(index2, false);
            if (prevInput) {
              setValue("", index2 - 1, false);
              (_a2 = prevInput.node) == null ? void 0 : _a2.focus();
              setMoveFocus(true);
            }
          } else {
            setMoveFocus(false);
          }
        }
      };
      const onFocus3 = () => {
        setFocusedIndex(index2);
      };
      const onBlur3 = () => {
        setFocusedIndex(-1);
      };
      const hasFocus = focusedIndex === index2;
      const inputType = type === "number" ? "tel" : "text";
      return {
        "aria-label": "Please enter your pin code",
        inputMode: type === "number" ? "numeric" : "text",
        type: mask ? "password" : inputType,
        ...rest,
        id: `${id4}-${index2}`,
        disabled: isDisabled2,
        "aria-invalid": ariaAttr(isInvalid),
        onChange: callAllHandlers(rest.onChange, onChange2),
        onKeyDown: callAllHandlers(rest.onKeyDown, onKeyDown),
        onFocus: callAllHandlers(rest.onFocus, onFocus3),
        onBlur: callAllHandlers(rest.onBlur, onBlur3),
        value: values[index2] || "",
        autoComplete: otp ? "one-time-code" : "off",
        placeholder: hasFocus ? "" : placeholder
      };
    },
    [
      descendants,
      focusedIndex,
      getNextValue,
      id4,
      isDisabled2,
      mask,
      isInvalid,
      manageFocus,
      onComplete,
      otp,
      placeholder,
      setValue,
      setValues2,
      type,
      values
    ]
  );
  return {
    getInputProps,
    id: id4,
    descendants,
    values,
    setValue,
    setValues: setValues2,
    clear
  };
}
function usePinInputField(props = {}, ref = null) {
  const { getInputProps } = usePinInputContext();
  const { index: index2, register } = usePinInputDescendant();
  return getInputProps({
    ...props,
    ref: mergeRefs(register, ref),
    index: index2
  });
}

// node_modules/@chakra-ui/pin-input/dist/chunk-US44V7OZ.mjs
var import_react150 = __toESM(require_react(), 1);
var import_jsx_runtime117 = __toESM(require_jsx_runtime(), 1);
function PinInput(props) {
  const styles = useStyleConfig("PinInput", props);
  const { children, ...rest } = omitThemingProps(props);
  const { descendants, ...context } = usePinInput(rest);
  const clones = getValidChildren(children).map(
    (child) => (0, import_react150.cloneElement)(child, { __css: styles })
  );
  return (0, import_jsx_runtime117.jsx)(PinInputDescendantsProvider, { value: descendants, children: (0, import_jsx_runtime117.jsx)(PinInputProvider, { value: context, children: clones }) });
}
PinInput.displayName = "PinInput";
var PinInputField = forwardRef(
  function PinInputField2(props, ref) {
    const inputProps = usePinInputField(props, ref);
    return (0, import_jsx_runtime117.jsx)(
      chakra.input,
      {
        ...inputProps,
        className: cx("chakra-pin-input", props.className)
      }
    );
  }
);
PinInputField.displayName = "PinInputField";

// node_modules/@chakra-ui/popover/dist/chunk-FOAN3JQV.mjs
var [PopoverProvider, usePopoverContext] = createContext({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
});
var [PopoverStylesProvider, usePopoverStyles] = createContext({
  name: `PopoverStylesContext`,
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
});

// node_modules/@chakra-ui/popover/dist/chunk-BYOOQOH2.mjs
var import_jsx_runtime118 = __toESM(require_jsx_runtime(), 1);
var PopoverHeader = forwardRef(
  function PopoverHeader2(props, ref) {
    const { getHeaderProps } = usePopoverContext();
    const styles = usePopoverStyles();
    return (0, import_jsx_runtime118.jsx)(
      chakra.header,
      {
        ...getHeaderProps(props, ref),
        className: cx("chakra-popover__header", props.className),
        __css: styles.header
      }
    );
  }
);
PopoverHeader.displayName = "PopoverHeader";

// node_modules/@chakra-ui/popover/dist/chunk-3O5UWOX6.mjs
var import_react151 = __toESM(require_react(), 1);
function PopoverTrigger(props) {
  const child = import_react151.Children.only(props.children);
  const { getTriggerProps } = usePopoverContext();
  return (0, import_react151.cloneElement)(child, getTriggerProps(child.props, child.ref));
}
PopoverTrigger.displayName = "PopoverTrigger";

// node_modules/@chakra-ui/popover/dist/chunk-BOXNG7YC.mjs
var import_react152 = __toESM(require_react(), 1);
var TRIGGER = {
  click: "click",
  hover: "hover"
};
function usePopover(props = {}) {
  const {
    closeOnBlur = true,
    closeOnEsc = true,
    initialFocusRef,
    id: id4,
    returnFocusOnClose = true,
    autoFocus = true,
    arrowSize,
    arrowShadowColor,
    trigger: trigger2 = TRIGGER.click,
    openDelay = 200,
    closeDelay = 200,
    isLazy,
    lazyBehavior = "unmount",
    computePositionOnMount,
    ...popperProps
  } = props;
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure2(props);
  const anchorRef = (0, import_react152.useRef)(null);
  const triggerRef = (0, import_react152.useRef)(null);
  const popoverRef = (0, import_react152.useRef)(null);
  const isHoveringRef = (0, import_react152.useRef)(false);
  const hasBeenOpened = (0, import_react152.useRef)(false);
  if (isOpen) {
    hasBeenOpened.current = true;
  }
  const [hasHeader, setHasHeader] = (0, import_react152.useState)(false);
  const [hasBody, setHasBody] = (0, import_react152.useState)(false);
  const uuid = (0, import_react152.useId)();
  const uid = id4 != null ? id4 : uuid;
  const [triggerId, popoverId, headerId, bodyId] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((id22) => `${id22}-${uid}`);
  const {
    referenceRef,
    getArrowProps,
    getPopperProps,
    getArrowInnerProps,
    forceUpdate
  } = usePopper({
    ...popperProps,
    enabled: isOpen || !!computePositionOnMount
  });
  const animated = useAnimationState2({ isOpen, ref: popoverRef });
  useFocusOnPointerDown({
    enabled: isOpen,
    ref: triggerRef
  });
  useFocusOnHide2(popoverRef, {
    focusRef: triggerRef,
    visible: isOpen,
    shouldFocus: returnFocusOnClose && trigger2 === TRIGGER.click
  });
  useFocusOnShow2(popoverRef, {
    focusRef: initialFocusRef,
    visible: isOpen,
    shouldFocus: autoFocus && trigger2 === TRIGGER.click
  });
  const shouldRenderChildren = lazyDisclosure({
    wasSelected: hasBeenOpened.current,
    enabled: isLazy,
    mode: lazyBehavior,
    isSelected: animated.present
  });
  const getPopoverProps = (0, import_react152.useCallback)(
    (props2 = {}, _ref2 = null) => {
      const popoverProps = {
        ...props2,
        style: {
          ...props2.style,
          transformOrigin: cssVars.transformOrigin.varRef,
          [cssVars.arrowSize.var]: arrowSize ? `${arrowSize}px` : void 0,
          [cssVars.arrowShadowColor.var]: arrowShadowColor
        },
        ref: mergeRefs(popoverRef, _ref2),
        children: shouldRenderChildren ? props2.children : null,
        id: popoverId,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: callAllHandlers(props2.onKeyDown, (event) => {
          if (closeOnEsc && event.key === "Escape") {
            onClose();
          }
        }),
        onBlur: callAllHandlers(props2.onBlur, (event) => {
          const relatedTarget = getRelatedTarget(event);
          const targetIsPopover = contains6(popoverRef.current, relatedTarget);
          const targetIsTrigger = contains6(triggerRef.current, relatedTarget);
          const isValidBlur = !targetIsPopover && !targetIsTrigger;
          if (isOpen && closeOnBlur && isValidBlur) {
            onClose();
          }
        }),
        "aria-labelledby": hasHeader ? headerId : void 0,
        "aria-describedby": hasBody ? bodyId : void 0
      };
      if (trigger2 === TRIGGER.hover) {
        popoverProps.role = "tooltip";
        popoverProps.onMouseEnter = callAllHandlers(props2.onMouseEnter, () => {
          isHoveringRef.current = true;
        });
        popoverProps.onMouseLeave = callAllHandlers(
          props2.onMouseLeave,
          (event) => {
            if (event.nativeEvent.relatedTarget === null) {
              return;
            }
            isHoveringRef.current = false;
            setTimeout(() => onClose(), closeDelay);
          }
        );
      }
      return popoverProps;
    },
    [
      shouldRenderChildren,
      popoverId,
      hasHeader,
      headerId,
      hasBody,
      bodyId,
      trigger2,
      closeOnEsc,
      onClose,
      isOpen,
      closeOnBlur,
      closeDelay,
      arrowShadowColor,
      arrowSize
    ]
  );
  const getPopoverPositionerProps = (0, import_react152.useCallback)(
    (props2 = {}, forwardedRef = null) => getPopperProps(
      {
        ...props2,
        style: {
          visibility: isOpen ? "visible" : "hidden",
          ...props2.style
        }
      },
      forwardedRef
    ),
    [isOpen, getPopperProps]
  );
  const getAnchorProps = (0, import_react152.useCallback)(
    (props2, _ref2 = null) => {
      return {
        ...props2,
        ref: mergeRefs(_ref2, anchorRef, referenceRef)
      };
    },
    [anchorRef, referenceRef]
  );
  const openTimeout = (0, import_react152.useRef)();
  const closeTimeout = (0, import_react152.useRef)();
  const maybeReferenceRef = (0, import_react152.useCallback)(
    (node2) => {
      if (anchorRef.current == null) {
        referenceRef(node2);
      }
    },
    [referenceRef]
  );
  const getTriggerProps = (0, import_react152.useCallback)(
    (props2 = {}, _ref2 = null) => {
      const triggerProps = {
        ...props2,
        ref: mergeRefs(triggerRef, _ref2, maybeReferenceRef),
        id: triggerId,
        "aria-haspopup": "dialog",
        "aria-expanded": isOpen,
        "aria-controls": popoverId
      };
      if (trigger2 === TRIGGER.click) {
        triggerProps.onClick = callAllHandlers(props2.onClick, onToggle);
      }
      if (trigger2 === TRIGGER.hover) {
        triggerProps.onFocus = callAllHandlers(props2.onFocus, () => {
          if (openTimeout.current === void 0) {
            onOpen();
          }
        });
        triggerProps.onBlur = callAllHandlers(props2.onBlur, (event) => {
          const relatedTarget = getRelatedTarget(event);
          const isValidBlur = !contains6(popoverRef.current, relatedTarget);
          if (isOpen && closeOnBlur && isValidBlur) {
            onClose();
          }
        });
        triggerProps.onKeyDown = callAllHandlers(props2.onKeyDown, (event) => {
          if (event.key === "Escape") {
            onClose();
          }
        });
        triggerProps.onMouseEnter = callAllHandlers(props2.onMouseEnter, () => {
          isHoveringRef.current = true;
          openTimeout.current = window.setTimeout(() => onOpen(), openDelay);
        });
        triggerProps.onMouseLeave = callAllHandlers(props2.onMouseLeave, () => {
          isHoveringRef.current = false;
          if (openTimeout.current) {
            clearTimeout(openTimeout.current);
            openTimeout.current = void 0;
          }
          closeTimeout.current = window.setTimeout(() => {
            if (isHoveringRef.current === false) {
              onClose();
            }
          }, closeDelay);
        });
      }
      return triggerProps;
    },
    [
      triggerId,
      isOpen,
      popoverId,
      trigger2,
      maybeReferenceRef,
      onToggle,
      onOpen,
      closeOnBlur,
      onClose,
      openDelay,
      closeDelay
    ]
  );
  (0, import_react152.useEffect)(() => {
    return () => {
      if (openTimeout.current) {
        clearTimeout(openTimeout.current);
      }
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);
  const getHeaderProps = (0, import_react152.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      id: headerId,
      ref: mergeRefs(ref, (node2) => {
        setHasHeader(!!node2);
      })
    }),
    [headerId]
  );
  const getBodyProps = (0, import_react152.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      id: bodyId,
      ref: mergeRefs(ref, (node2) => {
        setHasBody(!!node2);
      })
    }),
    [bodyId]
  );
  return {
    forceUpdate,
    isOpen,
    onAnimationComplete: animated.onComplete,
    onClose,
    getAnchorProps,
    getArrowProps,
    getArrowInnerProps,
    getPopoverPositionerProps,
    getPopoverProps,
    getTriggerProps,
    getHeaderProps,
    getBodyProps
  };
}
function contains6(parent, child) {
  return parent === child || (parent == null ? void 0 : parent.contains(child));
}
function getRelatedTarget(event) {
  var _a2;
  const activeEl = event.currentTarget.ownerDocument.activeElement;
  return (_a2 = event.relatedTarget) != null ? _a2 : activeEl;
}

// node_modules/@chakra-ui/popover/dist/chunk-4OGHDZEB.mjs
var import_jsx_runtime119 = __toESM(require_jsx_runtime(), 1);
function Popover(props) {
  const styles = useMultiStyleConfig("Popover", props);
  const { children, ...rest } = omitThemingProps(props);
  const theme2 = useTheme();
  const context = usePopover({ ...rest, direction: theme2.direction });
  return (0, import_jsx_runtime119.jsx)(PopoverProvider, { value: context, children: (0, import_jsx_runtime119.jsx)(PopoverStylesProvider, { value: styles, children: runIfFn(children, {
    isOpen: context.isOpen,
    onClose: context.onClose,
    forceUpdate: context.forceUpdate
  }) }) });
}
Popover.displayName = "Popover";

// node_modules/@chakra-ui/popover/dist/chunk-7NBWC5PS.mjs
var import_react153 = __toESM(require_react(), 1);
function PopoverAnchor(props) {
  const child = import_react153.Children.only(props.children);
  const { getAnchorProps } = usePopoverContext();
  return (0, import_react153.cloneElement)(child, getAnchorProps(child.props, child.ref));
}
PopoverAnchor.displayName = "PopoverAnchor";

// node_modules/@chakra-ui/popover/dist/chunk-RACJ2OQY.mjs
var import_jsx_runtime120 = __toESM(require_jsx_runtime(), 1);
function PopoverArrow(props) {
  var _a2;
  const { bg, bgColor, backgroundColor, shadow, boxShadow } = props;
  const { getArrowProps, getArrowInnerProps } = usePopoverContext();
  const styles = usePopoverStyles();
  const arrowBg = (_a2 = bg != null ? bg : bgColor) != null ? _a2 : backgroundColor;
  const arrowShadow = shadow != null ? shadow : boxShadow;
  return (0, import_jsx_runtime120.jsx)(
    chakra.div,
    {
      ...getArrowProps(),
      className: "chakra-popover__arrow-positioner",
      children: (0, import_jsx_runtime120.jsx)(
        chakra.div,
        {
          className: cx("chakra-popover__arrow", props.className),
          ...getArrowInnerProps(props),
          __css: {
            "--popper-arrow-bg": arrowBg ? `colors.${arrowBg}, ${arrowBg}` : void 0,
            "--popper-arrow-shadow": arrowShadow ? `shadows.${arrowShadow}, ${arrowShadow}` : void 0,
            ...styles.arrow
          }
        }
      )
    }
  );
}
PopoverArrow.displayName = "PopoverArrow";

// node_modules/@chakra-ui/popover/dist/chunk-3JH7ZFSI.mjs
var import_jsx_runtime121 = __toESM(require_jsx_runtime(), 1);
var PopoverBody = forwardRef(
  function PopoverBody2(props, ref) {
    const { getBodyProps } = usePopoverContext();
    const styles = usePopoverStyles();
    return (0, import_jsx_runtime121.jsx)(
      chakra.div,
      {
        ...getBodyProps(props, ref),
        className: cx("chakra-popover__body", props.className),
        __css: styles.body
      }
    );
  }
);
PopoverBody.displayName = "PopoverBody";

// node_modules/@chakra-ui/popover/dist/chunk-THJVJMZP.mjs
var import_jsx_runtime122 = __toESM(require_jsx_runtime(), 1);
var PopoverCloseButton = forwardRef(
  function PopoverCloseButton2(props, ref) {
    const { onClose } = usePopoverContext();
    const styles = usePopoverStyles();
    return (0, import_jsx_runtime122.jsx)(
      CloseButton,
      {
        size: "sm",
        onClick: onClose,
        className: cx("chakra-popover__close-btn", props.className),
        __css: styles.closeButton,
        ref,
        ...props
      }
    );
  }
);
PopoverCloseButton.displayName = "PopoverCloseButton";

// node_modules/@chakra-ui/popover/dist/chunk-LZVBC5YS.mjs
var import_jsx_runtime123 = __toESM(require_jsx_runtime(), 1);
function mergeVariants(variants6) {
  if (!variants6)
    return;
  return {
    enter: {
      ...variants6.enter,
      visibility: "visible"
    },
    exit: {
      ...variants6.exit,
      transitionEnd: {
        visibility: "hidden"
      }
    }
  };
}
var scaleFade = {
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 1, 1]
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: [0, 0, 0.2, 1]
    }
  }
};
var MotionSection2 = chakra(motion.section);
var PopoverTransition = forwardRef(function PopoverTransition2(props, ref) {
  const { variants: variants6 = scaleFade, ...rest } = props;
  const { isOpen } = usePopoverContext();
  return (0, import_jsx_runtime123.jsx)(
    MotionSection2,
    {
      ref,
      variants: mergeVariants(variants6),
      initial: false,
      animate: isOpen ? "enter" : "exit",
      ...rest
    }
  );
});
PopoverTransition.displayName = "PopoverTransition";

// node_modules/@chakra-ui/popover/dist/chunk-KVBLLJMP.mjs
var import_jsx_runtime124 = __toESM(require_jsx_runtime(), 1);
var PopoverContent = forwardRef(
  function PopoverContent2(props, ref) {
    const { rootProps, motionProps, ...contentProps } = props;
    const { getPopoverProps, getPopoverPositionerProps, onAnimationComplete } = usePopoverContext();
    const styles = usePopoverStyles();
    const contentStyles = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...styles.content
    };
    return (0, import_jsx_runtime124.jsx)(
      chakra.div,
      {
        ...getPopoverPositionerProps(rootProps),
        __css: styles.popper,
        className: "chakra-popover__popper",
        children: (0, import_jsx_runtime124.jsx)(
          PopoverTransition,
          {
            ...motionProps,
            ...getPopoverProps(contentProps, ref),
            onAnimationComplete: callAll(
              onAnimationComplete,
              contentProps.onAnimationComplete
            ),
            className: cx("chakra-popover__content", props.className),
            __css: contentStyles
          }
        )
      }
    );
  }
);
PopoverContent.displayName = "PopoverContent";

// node_modules/@chakra-ui/popover/dist/chunk-A3QMTCPA.mjs
var import_jsx_runtime125 = __toESM(require_jsx_runtime(), 1);
function PopoverFooter(props) {
  const styles = usePopoverStyles();
  return (0, import_jsx_runtime125.jsx)(
    chakra.footer,
    {
      ...props,
      className: cx("chakra-popover__footer", props.className),
      __css: styles.footer
    }
  );
}
PopoverFooter.displayName = "PopoverFooter";

// node_modules/@chakra-ui/progress/dist/chunk-V6BT6UQX.mjs
var CircularProgressLabel = chakra("div", {
  baseStyle: {
    fontSize: "0.24em",
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  }
});
CircularProgressLabel.displayName = "CircularProgressLabel";

// node_modules/@chakra-ui/progress/dist/chunk-7E427UAG.mjs
var import_jsx_runtime126 = __toESM(require_jsx_runtime(), 1);
var Circle3 = (props) => (0, import_jsx_runtime126.jsx)(chakra.circle, { cx: 50, cy: 50, r: 42, fill: "transparent", ...props });
Circle3.displayName = "Circle";

// node_modules/@chakra-ui/progress/dist/chunk-33PGJX5B.mjs
function valueToPercent2(value, min2, max2) {
  return (value - min2) * 100 / (max2 - min2);
}
var spin2 = keyframes({
  "0%": {
    strokeDasharray: "1, 400",
    strokeDashoffset: "0"
  },
  "50%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-100"
  },
  "100%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-260"
  }
});
var rotate = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var progress2 = keyframes({
  "0%": { left: "-40%" },
  "100%": { left: "100%" }
});
var stripe = keyframes({
  from: { backgroundPosition: "1rem 0" },
  to: { backgroundPosition: "0 0" }
});
function getProgressProps(options) {
  const {
    value = 0,
    min: min2,
    max: max2,
    valueText,
    getValueText,
    isIndeterminate,
    role = "progressbar"
  } = options;
  const percent2 = valueToPercent2(value, min2, max2);
  const getAriaValueText = () => {
    if (value == null)
      return void 0;
    return typeof getValueText === "function" ? getValueText(value, percent2) : valueText;
  };
  return {
    bind: {
      "data-indeterminate": isIndeterminate ? "" : void 0,
      "aria-valuemax": max2,
      "aria-valuemin": min2,
      "aria-valuenow": isIndeterminate ? void 0 : value,
      "aria-valuetext": getAriaValueText(),
      role
    },
    percent: percent2,
    value
  };
}

// node_modules/@chakra-ui/progress/dist/chunk-TMEF3X4C.mjs
var import_jsx_runtime127 = __toESM(require_jsx_runtime(), 1);
var Shape = (props) => {
  const { size, isIndeterminate, ...rest } = props;
  return (0, import_jsx_runtime127.jsx)(
    chakra.svg,
    {
      viewBox: "0 0 100 100",
      __css: {
        width: size,
        height: size,
        animation: isIndeterminate ? `${rotate} 2s linear infinite` : void 0
      },
      ...rest
    }
  );
};
Shape.displayName = "Shape";

// node_modules/@chakra-ui/progress/dist/chunk-FQ7BGFQK.mjs
var import_jsx_runtime128 = __toESM(require_jsx_runtime(), 1);
var CircularProgress = forwardRef(
  (props, ref) => {
    var _a2;
    const {
      size = "48px",
      max: max2 = 100,
      min: min2 = 0,
      valueText,
      getValueText,
      value,
      capIsRound,
      children,
      thickness = "10px",
      color: color3 = "#0078d4",
      trackColor = "#edebe9",
      isIndeterminate,
      ...rest
    } = props;
    const progress3 = getProgressProps({
      min: min2,
      max: max2,
      value,
      valueText,
      getValueText,
      isIndeterminate
    });
    const determinant = isIndeterminate ? void 0 : ((_a2 = progress3.percent) != null ? _a2 : 0) * 2.64;
    const strokeDasharray = determinant == null ? void 0 : `${determinant} ${264 - determinant}`;
    const indicatorProps = isIndeterminate ? {
      css: { animation: `${spin2} 1.5s linear infinite` }
    } : {
      strokeDashoffset: 66,
      strokeDasharray,
      transitionProperty: "stroke-dasharray, stroke",
      transitionDuration: "0.6s",
      transitionTimingFunction: "ease"
    };
    const rootStyles2 = {
      display: "inline-block",
      position: "relative",
      verticalAlign: "middle",
      fontSize: size
    };
    return (0, import_jsx_runtime128.jsxs)(
      chakra.div,
      {
        ref,
        className: "chakra-progress",
        ...progress3.bind,
        ...rest,
        __css: rootStyles2,
        children: [
          (0, import_jsx_runtime128.jsxs)(Shape, { size, isIndeterminate, children: [
            (0, import_jsx_runtime128.jsx)(
              Circle3,
              {
                stroke: trackColor,
                strokeWidth: thickness,
                className: "chakra-progress__track"
              }
            ),
            (0, import_jsx_runtime128.jsx)(
              Circle3,
              {
                stroke: color3,
                strokeWidth: thickness,
                className: "chakra-progress__indicator",
                strokeLinecap: capIsRound ? "round" : void 0,
                opacity: progress3.value === 0 && !isIndeterminate ? 0 : void 0,
                ...indicatorProps
              }
            )
          ] }),
          children
        ]
      }
    );
  }
);
CircularProgress.displayName = "CircularProgress";

// node_modules/@chakra-ui/progress/dist/chunk-W6SSP5F2.mjs
var import_jsx_runtime129 = __toESM(require_jsx_runtime(), 1);
var [ProgressStylesProvider, useProgressStyles] = createContext({
  name: `ProgressStylesContext`,
  errorMessage: `useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `
});
var ProgressFilledTrack = forwardRef(
  (props, ref) => {
    const { min: min2, max: max2, value, isIndeterminate, role, ...rest } = props;
    const progress22 = getProgressProps({
      value,
      min: min2,
      max: max2,
      isIndeterminate,
      role
    });
    const styles = useProgressStyles();
    const trackStyles = {
      height: "100%",
      ...styles.filledTrack
    };
    return (0, import_jsx_runtime129.jsx)(
      chakra.div,
      {
        ref,
        style: { width: `${progress22.percent}%`, ...rest.style },
        ...progress22.bind,
        ...rest,
        __css: trackStyles
      }
    );
  }
);
var Progress = forwardRef((props, ref) => {
  var _a2;
  const {
    value,
    min: min2 = 0,
    max: max2 = 100,
    hasStripe,
    isAnimated,
    children,
    borderRadius: propBorderRadius,
    isIndeterminate,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-valuetext": ariaValueText,
    title,
    role,
    ...rest
  } = omitThemingProps(props);
  const styles = useMultiStyleConfig("Progress", props);
  const borderRadius = propBorderRadius != null ? propBorderRadius : (_a2 = styles.track) == null ? void 0 : _a2.borderRadius;
  const stripeAnimation = { animation: `${stripe} 1s linear infinite` };
  const shouldAddStripe = !isIndeterminate && hasStripe;
  const shouldAnimateStripe = shouldAddStripe && isAnimated;
  const css3 = {
    ...shouldAnimateStripe && stripeAnimation,
    ...isIndeterminate && {
      position: "absolute",
      willChange: "left",
      minWidth: "50%",
      animation: `${progress2} 1s ease infinite normal none running`
    }
  };
  const trackStyles = {
    overflow: "hidden",
    position: "relative",
    ...styles.track
  };
  return (0, import_jsx_runtime129.jsx)(
    chakra.div,
    {
      ref,
      borderRadius,
      __css: trackStyles,
      ...rest,
      children: (0, import_jsx_runtime129.jsxs)(ProgressStylesProvider, { value: styles, children: [
        (0, import_jsx_runtime129.jsx)(
          ProgressFilledTrack,
          {
            "aria-label": ariaLabel,
            "aria-labelledby": ariaLabelledBy,
            "aria-valuetext": ariaValueText,
            min: min2,
            max: max2,
            value,
            isIndeterminate,
            css: css3,
            borderRadius,
            title,
            role
          }
        ),
        children
      ] })
    }
  );
});
Progress.displayName = "Progress";

// node_modules/@chakra-ui/progress/dist/chunk-BC4GAYVP.mjs
var import_jsx_runtime130 = __toESM(require_jsx_runtime(), 1);
var ProgressLabel = (props) => {
  const styles = useProgressStyles();
  const labelStyles = {
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    ...styles.label
  };
  return (0, import_jsx_runtime130.jsx)(chakra.div, { ...props, __css: labelStyles });
};
ProgressLabel.displayName = "ProgressLabel";

// node_modules/@chakra-ui/radio/dist/chunk-ROBJ47HJ.mjs
var import_react154 = __toESM(require_react(), 1);
function isInputEvent2(value) {
  return value && isObject(value) && isObject(value.target);
}
function useRadioGroup(props = {}) {
  const {
    onChange: onChangeProp,
    value: valueProp,
    defaultValue,
    name: nameProp,
    isDisabled: isDisabled2,
    isFocusable: isFocusable2,
    isNative,
    ...htmlProps
  } = props;
  const [valueState, setValue] = (0, import_react154.useState)(defaultValue || "");
  const isControlled = typeof valueProp !== "undefined";
  const value = isControlled ? valueProp : valueState;
  const ref = (0, import_react154.useRef)(null);
  const focus2 = (0, import_react154.useCallback)(() => {
    const rootNode = ref.current;
    if (!rootNode)
      return;
    let query = `input:not(:disabled):checked`;
    const firstEnabledAndCheckedInput = rootNode.querySelector(
      query
    );
    if (firstEnabledAndCheckedInput) {
      firstEnabledAndCheckedInput.focus();
      return;
    }
    query = `input:not(:disabled)`;
    const firstEnabledInput = rootNode.querySelector(query);
    firstEnabledInput == null ? void 0 : firstEnabledInput.focus();
  }, []);
  const uuid = (0, import_react154.useId)();
  const fallbackName = `radio-${uuid}`;
  const name = nameProp || fallbackName;
  const onChange = (0, import_react154.useCallback)(
    (eventOrValue) => {
      const nextValue = isInputEvent2(eventOrValue) ? eventOrValue.target.value : eventOrValue;
      if (!isControlled) {
        setValue(nextValue);
      }
      onChangeProp == null ? void 0 : onChangeProp(String(nextValue));
    },
    [onChangeProp, isControlled]
  );
  const getRootProps = (0, import_react154.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: mergeRefs(forwardedRef, ref),
      role: "radiogroup"
    }),
    []
  );
  const getRadioProps = (0, import_react154.useCallback)(
    (props2 = {}, ref2 = null) => {
      const checkedKey = isNative ? "checked" : "isChecked";
      return {
        ...props2,
        ref: ref2,
        name,
        [checkedKey]: value != null ? props2.value === value : void 0,
        onChange(event) {
          onChange(event);
        },
        "data-radiogroup": true
      };
    },
    [isNative, name, onChange, value]
  );
  return {
    getRootProps,
    getRadioProps,
    name,
    ref,
    focus: focus2,
    setValue,
    value,
    onChange,
    isDisabled: isDisabled2,
    isFocusable: isFocusable2,
    htmlProps
  };
}

// node_modules/@chakra-ui/radio/dist/chunk-QUJ23J4G.mjs
var import_react155 = __toESM(require_react(), 1);
var import_jsx_runtime131 = __toESM(require_jsx_runtime(), 1);
var [RadioGroupProvider, useRadioGroupContext] = createContext({
  name: "RadioGroupContext",
  strict: false
});
var RadioGroup = forwardRef((props, ref) => {
  const {
    colorScheme,
    size,
    variant,
    children,
    className,
    isDisabled: isDisabled2,
    isFocusable: isFocusable2,
    ...rest
  } = props;
  const { value, onChange, getRootProps, name, htmlProps } = useRadioGroup(rest);
  const group = (0, import_react155.useMemo)(
    () => ({
      name,
      size,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled: isDisabled2,
      isFocusable: isFocusable2
    }),
    [
      name,
      size,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled2,
      isFocusable2
    ]
  );
  return (0, import_jsx_runtime131.jsx)(RadioGroupProvider, { value: group, children: (0, import_jsx_runtime131.jsx)(
    chakra.div,
    {
      ...getRootProps(htmlProps, ref),
      className: cx("chakra-radio-group", className),
      children
    }
  ) });
});
RadioGroup.displayName = "RadioGroup";

// node_modules/@chakra-ui/radio/dist/chunk-5XCGGO7V.mjs
var import_react156 = __toESM(require_react(), 1);
var visuallyHiddenStyle2 = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
function useRadio(props = {}) {
  const {
    defaultChecked,
    isChecked: isCheckedProp,
    isFocusable: isFocusable2,
    isDisabled: isDisabledProp,
    isReadOnly: isReadOnlyProp,
    isRequired: isRequiredProp,
    onChange,
    isInvalid: isInvalidProp,
    name,
    value,
    id: idProp,
    "data-radiogroup": dataRadioGroup,
    "aria-describedby": ariaDescribedBy,
    ...htmlProps
  } = props;
  const uuid = `radio-${(0, import_react156.useId)()}`;
  const formControl = useFormControlContext();
  const group = useRadioGroupContext();
  const isWithinRadioGroup = !!group || !!dataRadioGroup;
  const isWithinFormControl = !!formControl;
  let id4 = isWithinFormControl && !isWithinRadioGroup ? formControl.id : uuid;
  id4 = idProp != null ? idProp : id4;
  const isDisabled2 = isDisabledProp != null ? isDisabledProp : formControl == null ? void 0 : formControl.isDisabled;
  const isReadOnly = isReadOnlyProp != null ? isReadOnlyProp : formControl == null ? void 0 : formControl.isReadOnly;
  const isRequired = isRequiredProp != null ? isRequiredProp : formControl == null ? void 0 : formControl.isRequired;
  const isInvalid = isInvalidProp != null ? isInvalidProp : formControl == null ? void 0 : formControl.isInvalid;
  const [isFocusVisible2, setIsFocusVisible] = (0, import_react156.useState)(false);
  const [isFocused, setFocused] = (0, import_react156.useState)(false);
  const [isHovered, setHovering] = (0, import_react156.useState)(false);
  const [isActive, setActive] = (0, import_react156.useState)(false);
  const [isCheckedState, setChecked] = (0, import_react156.useState)(Boolean(defaultChecked));
  const isControlled = typeof isCheckedProp !== "undefined";
  const isChecked = isControlled ? isCheckedProp : isCheckedState;
  (0, import_react156.useEffect)(() => {
    return trackFocusVisible(setIsFocusVisible);
  }, []);
  const handleChange = (0, import_react156.useCallback)(
    (event) => {
      if (isReadOnly || isDisabled2) {
        event.preventDefault();
        return;
      }
      if (!isControlled) {
        setChecked(event.target.checked);
      }
      onChange == null ? void 0 : onChange(event);
    },
    [isControlled, isDisabled2, isReadOnly, onChange]
  );
  const onKeyDown = (0, import_react156.useCallback)(
    (event) => {
      if (event.key === " ") {
        setActive(true);
      }
    },
    [setActive]
  );
  const onKeyUp = (0, import_react156.useCallback)(
    (event) => {
      if (event.key === " ") {
        setActive(false);
      }
    },
    [setActive]
  );
  const getRadioProps = (0, import_react156.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref,
      "data-active": dataAttr(isActive),
      "data-hover": dataAttr(isHovered),
      "data-disabled": dataAttr(isDisabled2),
      "data-invalid": dataAttr(isInvalid),
      "data-checked": dataAttr(isChecked),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocused && isFocusVisible2),
      "data-readonly": dataAttr(isReadOnly),
      "aria-hidden": true,
      onMouseDown: callAllHandlers(props2.onMouseDown, () => setActive(true)),
      onMouseUp: callAllHandlers(props2.onMouseUp, () => setActive(false)),
      onMouseEnter: callAllHandlers(
        props2.onMouseEnter,
        () => setHovering(true)
      ),
      onMouseLeave: callAllHandlers(
        props2.onMouseLeave,
        () => setHovering(false)
      )
    }),
    [
      isActive,
      isHovered,
      isDisabled2,
      isInvalid,
      isChecked,
      isFocused,
      isReadOnly,
      isFocusVisible2
    ]
  );
  const { onFocus: onFocus3, onBlur: onBlur3 } = formControl != null ? formControl : {};
  const getInputProps = (0, import_react156.useCallback)(
    (props2 = {}, ref = null) => {
      const trulyDisabled = isDisabled2 && !isFocusable2;
      return {
        ...props2,
        id: id4,
        ref,
        type: "radio",
        name,
        value,
        onChange: callAllHandlers(props2.onChange, handleChange),
        onBlur: callAllHandlers(
          onBlur3,
          props2.onBlur,
          () => setFocused(false)
        ),
        onFocus: callAllHandlers(
          onFocus3,
          props2.onFocus,
          () => setFocused(true)
        ),
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
        onKeyUp: callAllHandlers(props2.onKeyUp, onKeyUp),
        checked: isChecked,
        disabled: trulyDisabled,
        readOnly: isReadOnly,
        required: isRequired,
        "aria-invalid": ariaAttr(isInvalid),
        "aria-disabled": ariaAttr(trulyDisabled),
        "aria-required": ariaAttr(isRequired),
        "data-readonly": dataAttr(isReadOnly),
        "aria-describedby": ariaDescribedBy,
        style: visuallyHiddenStyle2
      };
    },
    [
      isDisabled2,
      isFocusable2,
      id4,
      name,
      value,
      handleChange,
      onBlur3,
      onFocus3,
      onKeyDown,
      onKeyUp,
      isChecked,
      isReadOnly,
      isRequired,
      isInvalid,
      ariaDescribedBy
    ]
  );
  const getLabelProps = (props2 = {}, ref = null) => ({
    ...props2,
    ref,
    onMouseDown: callAllHandlers(props2.onMouseDown, stopEvent2),
    "data-disabled": dataAttr(isDisabled2),
    "data-checked": dataAttr(isChecked),
    "data-invalid": dataAttr(isInvalid)
  });
  const getRootProps = (props2, ref = null) => ({
    ...props2,
    ref,
    "data-disabled": dataAttr(isDisabled2),
    "data-checked": dataAttr(isChecked),
    "data-invalid": dataAttr(isInvalid)
  });
  const state = {
    isInvalid,
    isFocused,
    isChecked,
    isActive,
    isHovered,
    isDisabled: isDisabled2,
    isReadOnly,
    isRequired
  };
  return {
    state,
    getCheckboxProps: getRadioProps,
    getRadioProps,
    getInputProps,
    getLabelProps,
    getRootProps,
    htmlProps
  };
}
function stopEvent2(event) {
  event.preventDefault();
  event.stopPropagation();
}

// node_modules/@chakra-ui/radio/dist/chunk-MEU4ZZ42.mjs
var import_jsx_runtime132 = __toESM(require_jsx_runtime(), 1);
function split(object2, keys) {
  const picked = {};
  const omitted2 = {};
  for (const [key, value] of Object.entries(object2)) {
    if (keys.includes(key))
      picked[key] = value;
    else
      omitted2[key] = value;
  }
  return [picked, omitted2];
}
var Radio = forwardRef((props, ref) => {
  var _a2;
  const group = useRadioGroupContext();
  const { onChange: onChangeProp, value: valueProp } = props;
  const styles = useMultiStyleConfig("Radio", { ...group, ...props });
  const ownProps = omitThemingProps(props);
  const {
    spacing = "0.5rem",
    children,
    isDisabled: isDisabled2 = group == null ? void 0 : group.isDisabled,
    isFocusable: isFocusable2 = group == null ? void 0 : group.isFocusable,
    inputProps: htmlInputProps,
    ...rest
  } = ownProps;
  let isChecked = props.isChecked;
  if ((group == null ? void 0 : group.value) != null && valueProp != null) {
    isChecked = group.value === valueProp;
  }
  let onChange = onChangeProp;
  if ((group == null ? void 0 : group.onChange) && valueProp != null) {
    onChange = callAll(group.onChange, onChangeProp);
  }
  const name = (_a2 = props == null ? void 0 : props.name) != null ? _a2 : group == null ? void 0 : group.name;
  const {
    getInputProps,
    getCheckboxProps,
    getLabelProps,
    getRootProps,
    htmlProps
  } = useRadio({
    ...rest,
    isChecked,
    isFocusable: isFocusable2,
    isDisabled: isDisabled2,
    onChange,
    name
  });
  const [layoutProps, otherProps] = split(htmlProps, layoutPropNames);
  const checkboxProps = getCheckboxProps(otherProps);
  const inputProps = getInputProps(htmlInputProps, ref);
  const labelProps = getLabelProps();
  const rootProps = Object.assign({}, layoutProps, getRootProps());
  const rootStyles2 = {
    display: "inline-flex",
    alignItems: "center",
    verticalAlign: "top",
    cursor: "pointer",
    position: "relative",
    ...styles.container
  };
  const checkboxStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    ...styles.control
  };
  const labelStyles = {
    userSelect: "none",
    marginStart: spacing,
    ...styles.label
  };
  return (0, import_jsx_runtime132.jsxs)(chakra.label, { className: "chakra-radio", ...rootProps, __css: rootStyles2, children: [
    (0, import_jsx_runtime132.jsx)("input", { className: "chakra-radio__input", ...inputProps }),
    (0, import_jsx_runtime132.jsx)(
      chakra.span,
      {
        className: "chakra-radio__control",
        ...checkboxProps,
        __css: checkboxStyles
      }
    ),
    children && (0, import_jsx_runtime132.jsx)(
      chakra.span,
      {
        className: "chakra-radio__label",
        ...labelProps,
        __css: labelStyles,
        children
      }
    )
  ] });
});
Radio.displayName = "Radio";

// node_modules/@chakra-ui/select/dist/chunk-HQIEHZYI.mjs
var import_jsx_runtime133 = __toESM(require_jsx_runtime(), 1);
var SelectField = forwardRef(
  function SelectField2(props, ref) {
    const { children, placeholder, className, ...rest } = props;
    return (0, import_jsx_runtime133.jsxs)(
      chakra.select,
      {
        ...rest,
        ref,
        className: cx("chakra-select", className),
        children: [
          placeholder && (0, import_jsx_runtime133.jsx)("option", { value: "", children: placeholder }),
          children
        ]
      }
    );
  }
);
SelectField.displayName = "SelectField";

// node_modules/@chakra-ui/select/dist/chunk-GJO77I2I.mjs
var import_react157 = __toESM(require_react(), 1);
var import_jsx_runtime134 = __toESM(require_jsx_runtime(), 1);
function split2(object2, keys) {
  const picked = {};
  const omitted2 = {};
  for (const [key, value] of Object.entries(object2)) {
    if (keys.includes(key))
      picked[key] = value;
    else
      omitted2[key] = value;
  }
  return [picked, omitted2];
}
var Select = forwardRef((props, ref) => {
  var _a2;
  const styles = useMultiStyleConfig("Select", props);
  const {
    rootProps,
    placeholder,
    icon,
    color: color3,
    height,
    h,
    minH,
    minHeight,
    iconColor,
    iconSize,
    ...rest
  } = omitThemingProps(props);
  const [layoutProps, otherProps] = split2(rest, layoutPropNames);
  const ownProps = useFormControl(otherProps);
  const rootStyles2 = {
    width: "100%",
    height: "fit-content",
    position: "relative",
    color: color3
  };
  const fieldStyles = {
    paddingEnd: "2rem",
    ...styles.field,
    _focus: {
      zIndex: "unset",
      ...(_a2 = styles.field) == null ? void 0 : _a2["_focus"]
    }
  };
  return (0, import_jsx_runtime134.jsxs)(
    chakra.div,
    {
      className: "chakra-select__wrapper",
      __css: rootStyles2,
      ...layoutProps,
      ...rootProps,
      children: [
        (0, import_jsx_runtime134.jsx)(
          SelectField,
          {
            ref,
            height: h != null ? h : height,
            minH: minH != null ? minH : minHeight,
            placeholder,
            ...ownProps,
            __css: fieldStyles,
            children: props.children
          }
        ),
        (0, import_jsx_runtime134.jsx)(
          SelectIcon,
          {
            "data-disabled": dataAttr(ownProps.disabled),
            ...(iconColor || color3) && { color: iconColor || color3 },
            __css: styles.icon,
            ...iconSize && { fontSize: iconSize },
            children: icon
          }
        )
      ]
    }
  );
});
Select.displayName = "Select";
var DefaultIcon = (props) => (0, import_jsx_runtime134.jsx)("svg", { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime134.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }
) });
var IconWrapper = chakra("div", {
  baseStyle: {
    position: "absolute",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    top: "50%",
    transform: "translateY(-50%)"
  }
});
var SelectIcon = (props) => {
  const { children = (0, import_jsx_runtime134.jsx)(DefaultIcon, {}), ...rest } = props;
  const clone = (0, import_react157.cloneElement)(children, {
    role: "presentation",
    className: "chakra-select__icon",
    focusable: false,
    "aria-hidden": true,
    style: {
      width: "1em",
      height: "1em",
      color: "currentColor"
    }
  });
  return (0, import_jsx_runtime134.jsx)(IconWrapper, { ...rest, className: "chakra-select__icon-wrapper", children: (0, import_react157.isValidElement)(children) ? clone : null });
};
SelectIcon.displayName = "SelectIcon";

// node_modules/@chakra-ui/skeleton/dist/chunk-5L3NXCNX.mjs
var import_react158 = __toESM(require_react(), 1);
function useIsFirstRender() {
  const isFirstRender = (0, import_react158.useRef)(true);
  (0, import_react158.useEffect)(() => {
    isFirstRender.current = false;
  }, []);
  return isFirstRender.current;
}

// node_modules/@chakra-ui/react-use-previous/dist/index.mjs
var import_react159 = __toESM(require_react(), 1);
function usePrevious2(value) {
  const ref = (0, import_react159.useRef)();
  (0, import_react159.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// node_modules/@chakra-ui/skeleton/dist/chunk-3GRGLNAR.mjs
var import_jsx_runtime135 = __toESM(require_jsx_runtime(), 1);
var StyledSkeleton = chakra("div", {
  baseStyle: {
    boxShadow: "none",
    backgroundClip: "padding-box",
    cursor: "default",
    color: "transparent",
    pointerEvents: "none",
    userSelect: "none",
    "&::before, &::after, *": {
      visibility: "hidden"
    }
  }
});
var $startColor = cssVar("skeleton-start-color");
var $endColor = cssVar("skeleton-end-color");
var fade = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
});
var bgFade = keyframes({
  from: {
    borderColor: $startColor.reference,
    background: $startColor.reference
  },
  to: {
    borderColor: $endColor.reference,
    background: $endColor.reference
  }
});
var Skeleton = forwardRef((props, ref) => {
  const skeletonProps = {
    ...props,
    fadeDuration: typeof props.fadeDuration === "number" ? props.fadeDuration : 0.4,
    speed: typeof props.speed === "number" ? props.speed : 0.8
  };
  const styles = useStyleConfig("Skeleton", skeletonProps);
  const isFirstRender = useIsFirstRender();
  const {
    startColor = "",
    endColor = "",
    isLoaded,
    fadeDuration,
    speed,
    className,
    fitContent,
    ...rest
  } = omitThemingProps(skeletonProps);
  const [startColorVar, endColorVar] = useToken("colors", [
    startColor,
    endColor
  ]);
  const wasPreviouslyLoaded = usePrevious2(isLoaded);
  const _className = cx("chakra-skeleton", className);
  const cssVarStyles = {
    ...startColorVar && { [$startColor.variable]: startColorVar },
    ...endColorVar && { [$endColor.variable]: endColorVar }
  };
  if (isLoaded) {
    const animation = isFirstRender || wasPreviouslyLoaded ? "none" : `${fade} ${fadeDuration}s`;
    return (0, import_jsx_runtime135.jsx)(
      chakra.div,
      {
        ref,
        className: _className,
        __css: { animation },
        ...rest
      }
    );
  }
  return (0, import_jsx_runtime135.jsx)(
    StyledSkeleton,
    {
      ref,
      className: _className,
      ...rest,
      __css: {
        width: fitContent ? "fit-content" : void 0,
        ...styles,
        ...cssVarStyles,
        _dark: { ...styles["_dark"], ...cssVarStyles },
        animation: `${speed}s linear infinite alternate ${bgFade}`
      }
    }
  );
});
Skeleton.displayName = "Skeleton";

// node_modules/@chakra-ui/skeleton/dist/chunk-OJ7ITIQ2.mjs
var import_jsx_runtime136 = __toESM(require_jsx_runtime(), 1);
var SkeletonCircle = ({
  size = "2rem",
  ...rest
}) => (0, import_jsx_runtime136.jsx)(Skeleton, { borderRadius: "full", boxSize: size, ...rest });
SkeletonCircle.displayName = "SkeletonCircle";

// node_modules/@chakra-ui/skeleton/dist/chunk-QTKSMHLN.mjs
var import_jsx_runtime137 = __toESM(require_jsx_runtime(), 1);
function range(count) {
  return Array(count).fill(1).map((_, index2) => index2 + 1);
}
var defaultNoOfLines = 3;
var SkeletonText = (props) => {
  const {
    noOfLines = defaultNoOfLines,
    spacing = "0.5rem",
    skeletonHeight = "0.5rem",
    className,
    startColor,
    endColor,
    isLoaded,
    fadeDuration,
    speed,
    variant,
    size,
    colorScheme,
    children,
    ...rest
  } = props;
  const noOfLinesValue = useBreakpointValue(
    typeof noOfLines === "number" ? [noOfLines] : noOfLines
  ) || defaultNoOfLines;
  const numbers = range(noOfLinesValue);
  const getWidth = (index2) => {
    if (noOfLinesValue > 1) {
      return index2 === numbers.length ? "80%" : "100%";
    }
    return "100%";
  };
  const _className = cx("chakra-skeleton__group", className);
  return (0, import_jsx_runtime137.jsx)(chakra.div, { className: _className, ...rest, children: numbers.map((number2, index2) => {
    if (isLoaded && index2 > 0) {
      return null;
    }
    const sizeProps = isLoaded ? null : {
      mb: number2 === numbers.length ? "0" : spacing,
      width: getWidth(number2),
      height: skeletonHeight
    };
    return (0, import_jsx_runtime137.jsx)(
      Skeleton,
      {
        startColor,
        endColor,
        isLoaded,
        fadeDuration,
        speed,
        variant,
        size,
        colorScheme,
        ...sizeProps,
        children: index2 === 0 ? children : void 0
      },
      numbers.length.toString() + number2
    );
  }) });
};
SkeletonText.displayName = "SkeletonText";

// node_modules/@chakra-ui/slider/dist/chunk-XYDKRZ3V.mjs
var dataAttr2 = (condition) => condition ? "" : void 0;
var ariaAttr2 = (condition) => condition ? true : void 0;
var cx2 = (...classNames) => classNames.filter(Boolean).join(" ");
function callAllHandlers3(...fns) {
  return function func2(event) {
    fns.some((fn2) => {
      fn2 == null ? void 0 : fn2(event);
      return event == null ? void 0 : event.defaultPrevented;
    });
  };
}

// node_modules/@chakra-ui/slider/dist/chunk-VWAPXGBD.mjs
function getIds(id4) {
  return {
    root: `slider-root-${id4}`,
    getThumb: (i) => `slider-thumb-${id4}-${i}`,
    getInput: (i) => `slider-input-${id4}-${i}`,
    track: `slider-track-${id4}`,
    innerTrack: `slider-filled-track-${id4}`,
    getMarker: (i) => `slider-marker-${id4}-${i}`,
    output: `slider-output-${id4}`
  };
}
function orient(options) {
  const { orientation, vertical, horizontal } = options;
  return orientation === "vertical" ? vertical : horizontal;
}
var zeroSize = { width: 0, height: 0 };
var normalize = (a) => a || zeroSize;
function getStyles2(options) {
  const { orientation, thumbPercents, thumbRects, isReversed } = options;
  const getThumbStyle = (i) => {
    var _a2;
    const rect = (_a2 = thumbRects[i]) != null ? _a2 : zeroSize;
    return {
      position: "absolute",
      userSelect: "none",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      touchAction: "none",
      ...orient({
        orientation,
        vertical: {
          bottom: `calc(${thumbPercents[i]}% - ${rect.height / 2}px)`
        },
        horizontal: {
          left: `calc(${thumbPercents[i]}% - ${rect.width / 2}px)`
        }
      })
    };
  };
  const size = orientation === "vertical" ? thumbRects.reduce(
    (a, b) => normalize(a).height > normalize(b).height ? a : b,
    zeroSize
  ) : thumbRects.reduce(
    (a, b) => normalize(a).width > normalize(b).width ? a : b,
    zeroSize
  );
  const rootStyle = {
    position: "relative",
    touchAction: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    userSelect: "none",
    outline: 0,
    ...orient({
      orientation,
      vertical: size ? {
        paddingLeft: size.width / 2,
        paddingRight: size.width / 2
      } : {},
      horizontal: size ? {
        paddingTop: size.height / 2,
        paddingBottom: size.height / 2
      } : {}
    })
  };
  const trackStyle = {
    position: "absolute",
    ...orient({
      orientation,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        height: "100%"
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        width: "100%"
      }
    })
  };
  const isSingleThumb = thumbPercents.length === 1;
  const fallback = [0, isReversed ? 100 - thumbPercents[0] : thumbPercents[0]];
  const range2 = isSingleThumb ? fallback : thumbPercents;
  let start2 = range2[0];
  if (!isSingleThumb && isReversed) {
    start2 = 100 - start2;
  }
  const percent2 = Math.abs(range2[range2.length - 1] - range2[0]);
  const innerTrackStyle = {
    ...trackStyle,
    ...orient({
      orientation,
      vertical: isReversed ? { height: `${percent2}%`, top: `${start2}%` } : { height: `${percent2}%`, bottom: `${start2}%` },
      horizontal: isReversed ? { width: `${percent2}%`, right: `${start2}%` } : { width: `${percent2}%`, left: `${start2}%` }
    })
  };
  return { trackStyle, innerTrackStyle, rootStyle, getThumbStyle };
}
function getIsReversed(options) {
  const { isReversed, direction, orientation } = options;
  if (direction === "ltr" || orientation === "vertical") {
    return isReversed;
  }
  return !isReversed;
}

// node_modules/@chakra-ui/event-utils/dist/chunk-6K7SS4J6.mjs
function addDomEvent2(target, eventName, handler, options) {
  target.addEventListener(eventName, handler, options);
  return () => {
    target.removeEventListener(eventName, handler, options);
  };
}

// node_modules/@chakra-ui/event-utils/dist/chunk-B7KYFEHM.mjs
function isMouseEvent(event) {
  const win = getEventWindow2(event);
  if (typeof win.PointerEvent !== "undefined" && event instanceof win.PointerEvent) {
    return !!(event.pointerType === "mouse");
  }
  return event instanceof win.MouseEvent;
}
function isTouchEvent(event) {
  const hasTouches = !!event.touches;
  return hasTouches;
}
function isMultiTouchEvent(event) {
  return isTouchEvent(event) && event.touches.length > 1;
}
function getEventWindow2(event) {
  var _a2;
  return (_a2 = event.view) != null ? _a2 : window;
}

// node_modules/@chakra-ui/event-utils/dist/chunk-6FBKF3LK.mjs
function pointFromTouch(e, type = "page") {
  const point = e.touches[0] || e.changedTouches[0];
  return { x: point[`${type}X`], y: point[`${type}Y`] };
}
function pointFromMouse(point, type = "page") {
  return {
    x: point[`${type}X`],
    y: point[`${type}Y`]
  };
}
function getEventPoint(event, type = "page") {
  return isTouchEvent(event) ? pointFromTouch(event, type) : pointFromMouse(event, type);
}

// node_modules/@chakra-ui/event-utils/dist/chunk-KDLSVIYE.mjs
function filter3(cb) {
  return (event) => {
    const isMouse = isMouseEvent(event);
    if (!isMouse || isMouse && event.button === 0) {
      cb(event);
    }
  };
}
function wrap2(cb, filterPrimary = false) {
  function listener(event) {
    cb(event, { point: getEventPoint(event) });
  }
  const fn2 = filterPrimary ? filter3(listener) : listener;
  return fn2;
}
function addPointerEvent2(target, type, cb, options) {
  return addDomEvent2(target, type, wrap2(cb, type === "pointerdown"), options);
}

// node_modules/@chakra-ui/react-use-pan-event/dist/chunk-OT5ZKXS2.mjs
var __defProp3 = Object.defineProperty;
var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField3 = (obj, key, value) => {
  __defNormalProp3(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var PanEvent = class {
  constructor(event, handlers2, threshold) {
    __publicField3(this, "history", []);
    __publicField3(this, "startEvent", null);
    __publicField3(this, "lastEvent", null);
    __publicField3(this, "lastEventInfo", null);
    __publicField3(this, "handlers", {});
    __publicField3(this, "removeListeners", () => {
    });
    __publicField3(this, "threshold", 3);
    __publicField3(this, "win");
    __publicField3(this, "updatePoint", () => {
      if (!(this.lastEvent && this.lastEventInfo))
        return;
      const info2 = getPanInfo2(this.lastEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2(info2.offset, { x: 0, y: 0 }) >= this.threshold;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { timestamp: timestamp2 } = getFrameData();
      this.history.push({ ...info2.point, timestamp: timestamp2 });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart == null ? void 0 : onStart(this.lastEvent, info2);
        this.startEvent = this.lastEvent;
      }
      onMove == null ? void 0 : onMove(this.lastEvent, info2);
    });
    __publicField3(this, "onPointerMove", (event2, info2) => {
      this.lastEvent = event2;
      this.lastEventInfo = info2;
      es_default.update(this.updatePoint, true);
    });
    __publicField3(this, "onPointerUp", (event2, info2) => {
      const panInfo = getPanInfo2(info2, this.history);
      const { onEnd, onSessionEnd } = this.handlers;
      onSessionEnd == null ? void 0 : onSessionEnd(event2, panInfo);
      this.end();
      if (!onEnd || !this.startEvent)
        return;
      onEnd == null ? void 0 : onEnd(event2, panInfo);
    });
    var _a2;
    this.win = (_a2 = event.view) != null ? _a2 : window;
    if (isMultiTouchEvent(event))
      return;
    this.handlers = handlers2;
    if (threshold) {
      this.threshold = threshold;
    }
    event.stopPropagation();
    event.preventDefault();
    const info = { point: getEventPoint(event) };
    const { timestamp } = getFrameData();
    this.history = [{ ...info.point, timestamp }];
    const { onSessionStart } = handlers2;
    onSessionStart == null ? void 0 : onSessionStart(event, getPanInfo2(info, this.history));
    this.removeListeners = pipe2(
      addPointerEvent2(this.win, "pointermove", this.onPointerMove),
      addPointerEvent2(this.win, "pointerup", this.onPointerUp),
      addPointerEvent2(this.win, "pointercancel", this.onPointerUp)
    );
  }
  updateHandlers(handlers2) {
    this.handlers = handlers2;
  }
  end() {
    var _a2;
    (_a2 = this.removeListeners) == null ? void 0 : _a2.call(this);
    cancelSync.update(this.updatePoint);
  }
};
function subtract(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo2(info, history) {
  return {
    point: info.point,
    delta: subtract(info.point, history[history.length - 1]),
    offset: subtract(info.point, history[0]),
    velocity: getVelocity3(history, 0.1)
  };
}
var toMilliseconds = (v) => v * 1e3;
function getVelocity3(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = history[history.length - 1];
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > toMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  const time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}
function pipe2(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
function distance1D(a, b) {
  return Math.abs(a - b);
}
function isPoint(point) {
  return "x" in point && "y" in point;
}
function distance2(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return distance1D(a, b);
  }
  if (isPoint(a) && isPoint(b)) {
    const xDelta = distance1D(a.x, b.x);
    const yDelta = distance1D(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
  }
  return 0;
}

// node_modules/@chakra-ui/react-use-latest-ref/dist/index.mjs
var import_react160 = __toESM(require_react(), 1);
function useLatestRef2(value) {
  const ref = (0, import_react160.useRef)(null);
  ref.current = value;
  return ref;
}

// node_modules/@chakra-ui/react-use-pan-event/dist/chunk-VOTNCFOA.mjs
var import_react161 = __toESM(require_react(), 1);
function usePanEvent(ref, options) {
  const {
    onPan,
    onPanStart,
    onPanEnd,
    onPanSessionStart,
    onPanSessionEnd,
    threshold
  } = options;
  const hasPanEvents = Boolean(
    onPan || onPanStart || onPanEnd || onPanSessionStart || onPanSessionEnd
  );
  const panSession = (0, import_react161.useRef)(null);
  const handlersRef = useLatestRef2({
    onSessionStart: onPanSessionStart,
    onSessionEnd: onPanSessionEnd,
    onStart: onPanStart,
    onMove: onPan,
    onEnd(event, info) {
      panSession.current = null;
      onPanEnd == null ? void 0 : onPanEnd(event, info);
    }
  });
  (0, import_react161.useEffect)(() => {
    var _a2;
    (_a2 = panSession.current) == null ? void 0 : _a2.updateHandlers(handlersRef.current);
  });
  (0, import_react161.useEffect)(() => {
    const node2 = ref.current;
    if (!node2 || !hasPanEvents)
      return;
    function onPointerDown(event) {
      panSession.current = new PanEvent(event, handlersRef.current, threshold);
    }
    return addPointerEvent2(node2, "pointerdown", onPointerDown);
  }, [ref, hasPanEvents, handlersRef, threshold]);
  (0, import_react161.useEffect)(() => {
    return () => {
      var _a2;
      (_a2 = panSession.current) == null ? void 0 : _a2.end();
      panSession.current = null;
    };
  }, []);
}

// node_modules/@chakra-ui/slider/dist/chunk-URECC76Z.mjs
var import_react163 = __toESM(require_react(), 1);

// node_modules/@zag-js/element-size/dist/chunk-FW3ST7OM.mjs
function trackElementSize(element, callback) {
  if (!element) {
    callback(void 0);
    return;
  }
  callback({ width: element.offsetWidth, height: element.offsetHeight });
  const win = element.ownerDocument.defaultView ?? window;
  const observer = new win.ResizeObserver((entries) => {
    if (!Array.isArray(entries) || !entries.length)
      return;
    const [entry] = entries;
    let width;
    let height;
    if ("borderBoxSize" in entry) {
      const borderSizeEntry = entry["borderBoxSize"];
      const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
      width = borderSize["inlineSize"];
      height = borderSize["blockSize"];
    } else {
      width = element.offsetWidth;
      height = element.offsetHeight;
    }
    callback({ width, height });
  });
  observer.observe(element, { box: "border-box" });
  return () => observer.unobserve(element);
}

// node_modules/@chakra-ui/react-use-size/dist/index.mjs
var import_react162 = __toESM(require_react(), 1);
var useSafeLayoutEffect4 = Boolean(globalThis == null ? void 0 : globalThis.document) ? import_react162.useLayoutEffect : import_react162.useEffect;
function trackMutation(el, cb) {
  var _a2, _b;
  if (!el || !el.parentElement)
    return;
  const win = (_b = (_a2 = el.ownerDocument) == null ? void 0 : _a2.defaultView) != null ? _b : window;
  const observer = new win.MutationObserver(() => {
    cb();
  });
  observer.observe(el.parentElement, { childList: true });
  return () => {
    observer.disconnect();
  };
}
function useSizes({
  getNodes,
  observeMutation = true
}) {
  const [sizes, setSizes] = (0, import_react162.useState)([]);
  const [count, setCount] = (0, import_react162.useState)(0);
  useSafeLayoutEffect4(() => {
    const elements = getNodes();
    const cleanups = elements.map(
      (element, index2) => trackElementSize(element, (size) => {
        setSizes((sizes2) => {
          return [
            ...sizes2.slice(0, index2),
            size,
            ...sizes2.slice(index2 + 1)
          ];
        });
      })
    );
    if (observeMutation) {
      const firstNode = elements[0];
      cleanups.push(
        trackMutation(firstNode, () => {
          setCount((count2) => count2 + 1);
        })
      );
    }
    return () => {
      cleanups.forEach((cleanup) => {
        cleanup == null ? void 0 : cleanup();
      });
    };
  }, [count]);
  return sizes;
}
function isRef(ref) {
  return typeof ref === "object" && ref !== null && "current" in ref;
}
function useSize(subject) {
  const [size] = useSizes({
    observeMutation: false,
    getNodes() {
      const node2 = isRef(subject) ? subject.current : subject;
      return [node2];
    }
  });
  return size;
}

// node_modules/@chakra-ui/slider/dist/chunk-URECC76Z.mjs
function useRangeSlider(props) {
  const {
    min: min2 = 0,
    max: max2 = 100,
    onChange,
    value: valueProp,
    defaultValue,
    isReversed: isReversedProp,
    direction = "ltr",
    orientation = "horizontal",
    id: idProp,
    isDisabled: isDisabled2,
    isReadOnly,
    onChangeStart: onChangeStartProp,
    onChangeEnd: onChangeEndProp,
    step = 1,
    getAriaValueText: getAriaValueTextProp,
    "aria-valuetext": ariaValueText,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    name,
    focusThumbOnChange = true,
    minStepsBetweenThumbs = 0,
    ...htmlProps
  } = props;
  const onChangeStart = useCallbackRef(onChangeStartProp);
  const onChangeEnd = useCallbackRef(onChangeEndProp);
  const getAriaValueText = useCallbackRef(getAriaValueTextProp);
  const isReversed = getIsReversed({
    isReversed: isReversedProp,
    direction,
    orientation
  });
  const [valueState, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue != null ? defaultValue : [25, 75],
    onChange
  });
  if (!Array.isArray(valueState)) {
    throw new TypeError(
      `[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof valueState}\``
    );
  }
  const [isDragging, setDragging] = (0, import_react163.useState)(false);
  const [isFocused, setFocused] = (0, import_react163.useState)(false);
  const [activeIndex, setActiveIndex] = (0, import_react163.useState)(-1);
  const isInteractive = !(isDisabled2 || isReadOnly);
  const initialValue = (0, import_react163.useRef)(valueState);
  const value = valueState.map((val) => clampValue(val, min2, max2));
  const spacing = minStepsBetweenThumbs * step;
  const valueBounds = getValueBounds(value, min2, max2, spacing);
  const stateRef = (0, import_react163.useRef)({
    eventSource: null,
    value: [],
    valueBounds: []
  });
  stateRef.current.value = value;
  stateRef.current.valueBounds = valueBounds;
  const reversedValue = value.map((val) => max2 - val + min2);
  const thumbValues = isReversed ? reversedValue : value;
  const thumbPercents = thumbValues.map((val) => valueToPercent(val, min2, max2));
  const isVertical = orientation === "vertical";
  const trackRef = (0, import_react163.useRef)(null);
  const rootRef = (0, import_react163.useRef)(null);
  const thumbRects = useSizes({
    getNodes() {
      const rootNode = rootRef.current;
      const thumbNodes = rootNode == null ? void 0 : rootNode.querySelectorAll("[role=slider]");
      return thumbNodes ? Array.from(thumbNodes) : [];
    }
  });
  const reactId = (0, import_react163.useId)();
  const uuid = idProp != null ? idProp : reactId;
  const ids = getIds(uuid);
  const getValueFromPointer = (0, import_react163.useCallback)(
    (event) => {
      var _a2, _b;
      if (!trackRef.current)
        return;
      stateRef.current.eventSource = "pointer";
      const rect = trackRef.current.getBoundingClientRect();
      const { clientX, clientY } = (_b = (_a2 = event.touches) == null ? void 0 : _a2[0]) != null ? _b : event;
      const diff = isVertical ? rect.bottom - clientY : clientX - rect.left;
      const length = isVertical ? rect.height : rect.width;
      let percent2 = diff / length;
      if (isReversed)
        percent2 = 1 - percent2;
      return percentToValue(percent2, min2, max2);
    },
    [isVertical, isReversed, max2, min2]
  );
  const tenSteps = (max2 - min2) / 10;
  const oneStep = step || (max2 - min2) / 100;
  const actions = (0, import_react163.useMemo)(
    () => ({
      setValueAtIndex(index2, val) {
        if (!isInteractive)
          return;
        const bounds = stateRef.current.valueBounds[index2];
        val = parseFloat(roundValueToStep(val, bounds.min, oneStep));
        val = clampValue(val, bounds.min, bounds.max);
        const next = [...stateRef.current.value];
        next[index2] = val;
        setValue(next);
      },
      setActiveIndex,
      stepUp(index2, step2 = oneStep) {
        const valueAtIndex = stateRef.current.value[index2];
        const next = isReversed ? valueAtIndex - step2 : valueAtIndex + step2;
        actions.setValueAtIndex(index2, next);
      },
      stepDown(index2, step2 = oneStep) {
        const valueAtIndex = stateRef.current.value[index2];
        const next = isReversed ? valueAtIndex + step2 : valueAtIndex - step2;
        actions.setValueAtIndex(index2, next);
      },
      reset() {
        setValue(initialValue.current);
      }
    }),
    [oneStep, isReversed, setValue, isInteractive]
  );
  const onKeyDown = (0, import_react163.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        ArrowRight: () => actions.stepUp(activeIndex),
        ArrowUp: () => actions.stepUp(activeIndex),
        ArrowLeft: () => actions.stepDown(activeIndex),
        ArrowDown: () => actions.stepDown(activeIndex),
        PageUp: () => actions.stepUp(activeIndex, tenSteps),
        PageDown: () => actions.stepDown(activeIndex, tenSteps),
        Home: () => {
          const { min: value2 } = valueBounds[activeIndex];
          actions.setValueAtIndex(activeIndex, value2);
        },
        End: () => {
          const { max: value2 } = valueBounds[activeIndex];
          actions.setValueAtIndex(activeIndex, value2);
        }
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        event.stopPropagation();
        action(event);
        stateRef.current.eventSource = "keyboard";
      }
    },
    [actions, activeIndex, tenSteps, valueBounds]
  );
  const { getThumbStyle, rootStyle, trackStyle, innerTrackStyle } = (0, import_react163.useMemo)(
    () => getStyles2({
      isReversed,
      orientation,
      thumbRects,
      thumbPercents
    }),
    [isReversed, orientation, thumbPercents, thumbRects]
  );
  const focusThumb = (0, import_react163.useCallback)(
    (index2) => {
      var _a2;
      const idx = index2 != null ? index2 : activeIndex;
      if (idx !== -1 && focusThumbOnChange) {
        const id4 = ids.getThumb(idx);
        const thumb = (_a2 = rootRef.current) == null ? void 0 : _a2.ownerDocument.getElementById(id4);
        if (thumb) {
          setTimeout(() => thumb.focus());
        }
      }
    },
    [focusThumbOnChange, activeIndex, ids]
  );
  useUpdateEffect(() => {
    if (stateRef.current.eventSource === "keyboard") {
      onChangeEnd == null ? void 0 : onChangeEnd(stateRef.current.value);
    }
  }, [value, onChangeEnd]);
  const onPanSessionStart = (event) => {
    const pointValue = getValueFromPointer(event) || 0;
    const distances = stateRef.current.value.map(
      (val) => Math.abs(val - pointValue)
    );
    const closest = Math.min(...distances);
    let index2 = distances.indexOf(closest);
    const thumbsAtPosition = distances.filter(
      (distance3) => distance3 === closest
    );
    const isThumbStacked = thumbsAtPosition.length > 1;
    if (isThumbStacked && pointValue > stateRef.current.value[index2]) {
      index2 = index2 + thumbsAtPosition.length - 1;
    }
    setActiveIndex(index2);
    actions.setValueAtIndex(index2, pointValue);
    focusThumb(index2);
  };
  const onPan = (event) => {
    if (activeIndex == -1)
      return;
    const pointValue = getValueFromPointer(event) || 0;
    setActiveIndex(activeIndex);
    actions.setValueAtIndex(activeIndex, pointValue);
    focusThumb(activeIndex);
  };
  usePanEvent(rootRef, {
    onPanSessionStart(event) {
      if (!isInteractive)
        return;
      setDragging(true);
      onPanSessionStart(event);
      onChangeStart == null ? void 0 : onChangeStart(stateRef.current.value);
    },
    onPanSessionEnd() {
      if (!isInteractive)
        return;
      setDragging(false);
      onChangeEnd == null ? void 0 : onChangeEnd(stateRef.current.value);
    },
    onPan(event) {
      if (!isInteractive)
        return;
      onPan(event);
    }
  });
  const getRootProps = (0, import_react163.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ...htmlProps,
        id: ids.root,
        ref: mergeRefs(ref, rootRef),
        tabIndex: -1,
        "aria-disabled": ariaAttr2(isDisabled2),
        "data-focused": dataAttr2(isFocused),
        style: { ...props2.style, ...rootStyle }
      };
    },
    [htmlProps, isDisabled2, isFocused, rootStyle, ids]
  );
  const getTrackProps = (0, import_react163.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref: mergeRefs(ref, trackRef),
        id: ids.track,
        "data-disabled": dataAttr2(isDisabled2),
        style: { ...props2.style, ...trackStyle }
      };
    },
    [isDisabled2, trackStyle, ids]
  );
  const getInnerTrackProps = (0, import_react163.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        id: ids.innerTrack,
        style: {
          ...props2.style,
          ...innerTrackStyle
        }
      };
    },
    [innerTrackStyle, ids]
  );
  const getThumbProps = (0, import_react163.useCallback)(
    (props2, ref = null) => {
      var _a2;
      const { index: index2, ...rest } = props2;
      const valueAtIndex = value[index2];
      if (valueAtIndex == null) {
        throw new TypeError(
          `[range-slider > thumb] Cannot find value at index \`${index2}\`. The \`value\` or \`defaultValue\` length is : ${value.length}`
        );
      }
      const bounds = valueBounds[index2];
      return {
        ...rest,
        ref,
        role: "slider",
        tabIndex: isInteractive ? 0 : void 0,
        id: ids.getThumb(index2),
        "data-active": dataAttr2(isDragging && activeIndex === index2),
        "aria-valuetext": (_a2 = getAriaValueText == null ? void 0 : getAriaValueText(valueAtIndex)) != null ? _a2 : ariaValueText == null ? void 0 : ariaValueText[index2],
        "aria-valuemin": bounds.min,
        "aria-valuemax": bounds.max,
        "aria-valuenow": valueAtIndex,
        "aria-orientation": orientation,
        "aria-disabled": ariaAttr2(isDisabled2),
        "aria-readonly": ariaAttr2(isReadOnly),
        "aria-label": ariaLabel == null ? void 0 : ariaLabel[index2],
        "aria-labelledby": (ariaLabel == null ? void 0 : ariaLabel[index2]) ? void 0 : ariaLabelledBy == null ? void 0 : ariaLabelledBy[index2],
        style: { ...props2.style, ...getThumbStyle(index2) },
        onKeyDown: callAllHandlers3(props2.onKeyDown, onKeyDown),
        onFocus: callAllHandlers3(props2.onFocus, () => {
          setFocused(true);
          setActiveIndex(index2);
        }),
        onBlur: callAllHandlers3(props2.onBlur, () => {
          setFocused(false);
          setActiveIndex(-1);
        })
      };
    },
    [
      ids,
      value,
      valueBounds,
      isInteractive,
      isDragging,
      activeIndex,
      getAriaValueText,
      ariaValueText,
      orientation,
      isDisabled2,
      isReadOnly,
      ariaLabel,
      ariaLabelledBy,
      getThumbStyle,
      onKeyDown,
      setFocused
    ]
  );
  const getOutputProps = (0, import_react163.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        id: ids.output,
        htmlFor: value.map((v, i) => ids.getThumb(i)).join(" "),
        "aria-live": "off"
      };
    },
    [ids, value]
  );
  const getMarkerProps = (0, import_react163.useCallback)(
    (props2, ref = null) => {
      const { value: v, ...rest } = props2;
      const isInRange = !(v < min2 || v > max2);
      const isHighlighted = v >= value[0] && v <= value[value.length - 1];
      let percent2 = valueToPercent(v, min2, max2);
      percent2 = isReversed ? 100 - percent2 : percent2;
      const markerStyle = {
        position: "absolute",
        pointerEvents: "none",
        ...orient({
          orientation,
          vertical: { bottom: `${percent2}%` },
          horizontal: { left: `${percent2}%` }
        })
      };
      return {
        ...rest,
        ref,
        id: ids.getMarker(props2.value),
        role: "presentation",
        "aria-hidden": true,
        "data-disabled": dataAttr2(isDisabled2),
        "data-invalid": dataAttr2(!isInRange),
        "data-highlighted": dataAttr2(isHighlighted),
        style: {
          ...props2.style,
          ...markerStyle
        }
      };
    },
    [isDisabled2, isReversed, max2, min2, orientation, value, ids]
  );
  const getInputProps = (0, import_react163.useCallback)(
    (props2, ref = null) => {
      const { index: index2, ...rest } = props2;
      return {
        ...rest,
        ref,
        id: ids.getInput(index2),
        type: "hidden",
        value: value[index2],
        name: Array.isArray(name) ? name[index2] : `${name}-${index2}`
      };
    },
    [name, value, ids]
  );
  const state = {
    value,
    isFocused,
    isDragging,
    getThumbPercent: (index2) => thumbPercents[index2],
    getThumbMinValue: (index2) => valueBounds[index2].min,
    getThumbMaxValue: (index2) => valueBounds[index2].max
  };
  return {
    state,
    actions,
    getRootProps,
    getTrackProps,
    getInnerTrackProps,
    getThumbProps,
    getMarkerProps,
    getInputProps,
    getOutputProps
  };
}
function getValueBounds(arr, min2, max2, spacing) {
  return arr.map((v, i) => {
    const _min = i === 0 ? min2 : arr[i - 1] + spacing;
    const _max = i === arr.length - 1 ? max2 : arr[i + 1] - spacing;
    return { min: _min, max: _max };
  });
}

// node_modules/@chakra-ui/slider/dist/chunk-MGDSBG3R.mjs
var import_react164 = __toESM(require_react(), 1);
var import_jsx_runtime138 = __toESM(require_jsx_runtime(), 1);
var [RangeSliderProvider, useRangeSliderContext] = createContext({
  name: "SliderContext",
  errorMessage: "useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"
});
var [RangeSliderStylesProvider, useRangeSliderStyles] = createContext({
  name: `RangeSliderStylesContext`,
  errorMessage: `useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `
});
var RangeSlider = forwardRef(
  function RangeSlider2(props, ref) {
    const sliderProps = {
      orientation: "horizontal",
      ...props
    };
    const styles = useMultiStyleConfig("Slider", sliderProps);
    const ownProps = omitThemingProps(sliderProps);
    const { direction } = useTheme();
    ownProps.direction = direction;
    const { getRootProps, ...context } = useRangeSlider(ownProps);
    const ctx = (0, import_react164.useMemo)(
      () => ({ ...context, name: sliderProps.name }),
      [context, sliderProps.name]
    );
    return (0, import_jsx_runtime138.jsx)(RangeSliderProvider, { value: ctx, children: (0, import_jsx_runtime138.jsx)(RangeSliderStylesProvider, { value: styles, children: (0, import_jsx_runtime138.jsx)(
      chakra.div,
      {
        ...getRootProps({}, ref),
        className: "chakra-slider",
        __css: styles.container,
        children: sliderProps.children
      }
    ) }) });
  }
);
RangeSlider.displayName = "RangeSlider";
var RangeSliderThumb = forwardRef(
  function RangeSliderThumb2(props, ref) {
    const { getThumbProps, getInputProps, name } = useRangeSliderContext();
    const styles = useRangeSliderStyles();
    const thumbProps = getThumbProps(props, ref);
    return (0, import_jsx_runtime138.jsxs)(
      chakra.div,
      {
        ...thumbProps,
        className: cx2("chakra-slider__thumb", props.className),
        __css: styles.thumb,
        children: [
          thumbProps.children,
          name && (0, import_jsx_runtime138.jsx)("input", { ...getInputProps({ index: props.index }) })
        ]
      }
    );
  }
);
RangeSliderThumb.displayName = "RangeSliderThumb";
var RangeSliderTrack = forwardRef(
  function RangeSliderTrack2(props, ref) {
    const { getTrackProps } = useRangeSliderContext();
    const styles = useRangeSliderStyles();
    const trackProps = getTrackProps(props, ref);
    return (0, import_jsx_runtime138.jsx)(
      chakra.div,
      {
        ...trackProps,
        className: cx2("chakra-slider__track", props.className),
        __css: styles.track,
        "data-testid": "chakra-range-slider-track"
      }
    );
  }
);
RangeSliderTrack.displayName = "RangeSliderTrack";
var RangeSliderFilledTrack = forwardRef(function RangeSliderFilledTrack2(props, ref) {
  const { getInnerTrackProps } = useRangeSliderContext();
  const styles = useRangeSliderStyles();
  const trackProps = getInnerTrackProps(props, ref);
  return (0, import_jsx_runtime138.jsx)(
    chakra.div,
    {
      ...trackProps,
      className: "chakra-slider__filled-track",
      __css: styles.filledTrack
    }
  );
});
RangeSliderFilledTrack.displayName = "RangeSliderFilledTrack";
var RangeSliderMark = forwardRef(
  function RangeSliderMark2(props, ref) {
    const { getMarkerProps } = useRangeSliderContext();
    const markProps = getMarkerProps(props, ref);
    return (0, import_jsx_runtime138.jsx)(
      chakra.div,
      {
        ...markProps,
        className: cx2("chakra-slider__marker", props.className)
      }
    );
  }
);
RangeSliderMark.displayName = "RangeSliderMark";

// node_modules/@chakra-ui/slider/dist/chunk-RO527DKG.mjs
var import_react165 = __toESM(require_react(), 1);
function useSlider(props) {
  var _a2;
  const {
    min: min2 = 0,
    max: max2 = 100,
    onChange,
    value: valueProp,
    defaultValue,
    isReversed: isReversedProp,
    direction = "ltr",
    orientation = "horizontal",
    id: idProp,
    isDisabled: isDisabled2,
    isReadOnly,
    onChangeStart: onChangeStartProp,
    onChangeEnd: onChangeEndProp,
    step = 1,
    getAriaValueText: getAriaValueTextProp,
    "aria-valuetext": ariaValueText,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    name,
    focusThumbOnChange = true,
    ...htmlProps
  } = props;
  const onChangeStart = useCallbackRef(onChangeStartProp);
  const onChangeEnd = useCallbackRef(onChangeEndProp);
  const getAriaValueText = useCallbackRef(getAriaValueTextProp);
  const isReversed = getIsReversed({
    isReversed: isReversedProp,
    direction,
    orientation
  });
  const [computedValue, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue != null ? defaultValue : getDefaultValue(min2, max2),
    onChange
  });
  const [isDragging, setDragging] = (0, import_react165.useState)(false);
  const [isFocused, setFocused] = (0, import_react165.useState)(false);
  const isInteractive = !(isDisabled2 || isReadOnly);
  const tenSteps = (max2 - min2) / 10;
  const oneStep = step || (max2 - min2) / 100;
  const value = clampValue(computedValue, min2, max2);
  const reversedValue = max2 - value + min2;
  const trackValue = isReversed ? reversedValue : value;
  const thumbPercent = valueToPercent(trackValue, min2, max2);
  const isVertical = orientation === "vertical";
  const stateRef = useLatestRef2({
    min: min2,
    max: max2,
    step,
    isDisabled: isDisabled2,
    value,
    isInteractive,
    isReversed,
    isVertical,
    eventSource: null,
    focusThumbOnChange,
    orientation
  });
  const trackRef = (0, import_react165.useRef)(null);
  const thumbRef = (0, import_react165.useRef)(null);
  const rootRef = (0, import_react165.useRef)(null);
  const reactId = (0, import_react165.useId)();
  const uuid = idProp != null ? idProp : reactId;
  const [thumbId, trackId] = [`slider-thumb-${uuid}`, `slider-track-${uuid}`];
  const getValueFromPointer = (0, import_react165.useCallback)(
    (event) => {
      var _a22, _b;
      if (!trackRef.current)
        return;
      const state2 = stateRef.current;
      state2.eventSource = "pointer";
      const trackRect = trackRef.current.getBoundingClientRect();
      const { clientX, clientY } = (_b = (_a22 = event.touches) == null ? void 0 : _a22[0]) != null ? _b : event;
      const diff = isVertical ? trackRect.bottom - clientY : clientX - trackRect.left;
      const length = isVertical ? trackRect.height : trackRect.width;
      let percent2 = diff / length;
      if (isReversed) {
        percent2 = 1 - percent2;
      }
      let nextValue = percentToValue(percent2, state2.min, state2.max);
      if (state2.step) {
        nextValue = parseFloat(
          roundValueToStep(nextValue, state2.min, state2.step)
        );
      }
      nextValue = clampValue(nextValue, state2.min, state2.max);
      return nextValue;
    },
    [isVertical, isReversed, stateRef]
  );
  const constrain = (0, import_react165.useCallback)(
    (value2) => {
      const state2 = stateRef.current;
      if (!state2.isInteractive)
        return;
      value2 = parseFloat(roundValueToStep(value2, state2.min, oneStep));
      value2 = clampValue(value2, state2.min, state2.max);
      setValue(value2);
    },
    [oneStep, setValue, stateRef]
  );
  const actions = (0, import_react165.useMemo)(
    () => ({
      stepUp(step2 = oneStep) {
        const next = isReversed ? value - step2 : value + step2;
        constrain(next);
      },
      stepDown(step2 = oneStep) {
        const next = isReversed ? value + step2 : value - step2;
        constrain(next);
      },
      reset() {
        constrain(defaultValue || 0);
      },
      stepTo(value2) {
        constrain(value2);
      }
    }),
    [constrain, isReversed, value, oneStep, defaultValue]
  );
  const onKeyDown = (0, import_react165.useCallback)(
    (event) => {
      const state2 = stateRef.current;
      const keyMap = {
        ArrowRight: () => actions.stepUp(),
        ArrowUp: () => actions.stepUp(),
        ArrowLeft: () => actions.stepDown(),
        ArrowDown: () => actions.stepDown(),
        PageUp: () => actions.stepUp(tenSteps),
        PageDown: () => actions.stepDown(tenSteps),
        Home: () => constrain(state2.min),
        End: () => constrain(state2.max)
      };
      const action = keyMap[event.key];
      if (action) {
        event.preventDefault();
        event.stopPropagation();
        action(event);
        state2.eventSource = "keyboard";
      }
    },
    [actions, constrain, tenSteps, stateRef]
  );
  const valueText = (_a2 = getAriaValueText == null ? void 0 : getAriaValueText(value)) != null ? _a2 : ariaValueText;
  const thumbSize = useSize(thumbRef);
  const { getThumbStyle, rootStyle, trackStyle, innerTrackStyle } = (0, import_react165.useMemo)(() => {
    const state2 = stateRef.current;
    const thumbRect = thumbSize != null ? thumbSize : { width: 0, height: 0 };
    return getStyles2({
      isReversed,
      orientation: state2.orientation,
      thumbRects: [thumbRect],
      thumbPercents: [thumbPercent]
    });
  }, [isReversed, thumbSize, thumbPercent, stateRef]);
  const focusThumb = (0, import_react165.useCallback)(() => {
    const state2 = stateRef.current;
    if (state2.focusThumbOnChange) {
      setTimeout(() => {
        var _a22;
        return (_a22 = thumbRef.current) == null ? void 0 : _a22.focus();
      });
    }
  }, [stateRef]);
  useUpdateEffect(() => {
    const state2 = stateRef.current;
    focusThumb();
    if (state2.eventSource === "keyboard") {
      onChangeEnd == null ? void 0 : onChangeEnd(state2.value);
    }
  }, [value, onChangeEnd]);
  function setValueFromPointer(event) {
    const nextValue = getValueFromPointer(event);
    if (nextValue != null && nextValue !== stateRef.current.value) {
      setValue(nextValue);
    }
  }
  usePanEvent(rootRef, {
    onPanSessionStart(event) {
      const state2 = stateRef.current;
      if (!state2.isInteractive)
        return;
      setDragging(true);
      focusThumb();
      setValueFromPointer(event);
      onChangeStart == null ? void 0 : onChangeStart(state2.value);
    },
    onPanSessionEnd() {
      const state2 = stateRef.current;
      if (!state2.isInteractive)
        return;
      setDragging(false);
      onChangeEnd == null ? void 0 : onChangeEnd(state2.value);
    },
    onPan(event) {
      const state2 = stateRef.current;
      if (!state2.isInteractive)
        return;
      setValueFromPointer(event);
    }
  });
  const getRootProps = (0, import_react165.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ...htmlProps,
        ref: mergeRefs(ref, rootRef),
        tabIndex: -1,
        "aria-disabled": ariaAttr2(isDisabled2),
        "data-focused": dataAttr2(isFocused),
        style: {
          ...props2.style,
          ...rootStyle
        }
      };
    },
    [htmlProps, isDisabled2, isFocused, rootStyle]
  );
  const getTrackProps = (0, import_react165.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref: mergeRefs(ref, trackRef),
        id: trackId,
        "data-disabled": dataAttr2(isDisabled2),
        style: {
          ...props2.style,
          ...trackStyle
        }
      };
    },
    [isDisabled2, trackId, trackStyle]
  );
  const getInnerTrackProps = (0, import_react165.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        style: {
          ...props2.style,
          ...innerTrackStyle
        }
      };
    },
    [innerTrackStyle]
  );
  const getThumbProps = (0, import_react165.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref: mergeRefs(ref, thumbRef),
        role: "slider",
        tabIndex: isInteractive ? 0 : void 0,
        id: thumbId,
        "data-active": dataAttr2(isDragging),
        "aria-valuetext": valueText,
        "aria-valuemin": min2,
        "aria-valuemax": max2,
        "aria-valuenow": value,
        "aria-orientation": orientation,
        "aria-disabled": ariaAttr2(isDisabled2),
        "aria-readonly": ariaAttr2(isReadOnly),
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabel ? void 0 : ariaLabelledBy,
        style: {
          ...props2.style,
          ...getThumbStyle(0)
        },
        onKeyDown: callAllHandlers3(props2.onKeyDown, onKeyDown),
        onFocus: callAllHandlers3(props2.onFocus, () => setFocused(true)),
        onBlur: callAllHandlers3(props2.onBlur, () => setFocused(false))
      };
    },
    [
      isInteractive,
      thumbId,
      isDragging,
      valueText,
      min2,
      max2,
      value,
      orientation,
      isDisabled2,
      isReadOnly,
      ariaLabel,
      ariaLabelledBy,
      getThumbStyle,
      onKeyDown
    ]
  );
  const getMarkerProps = (0, import_react165.useCallback)(
    (props2, ref = null) => {
      const isInRange = !(props2.value < min2 || props2.value > max2);
      const isHighlighted = value >= props2.value;
      const markerPercent = valueToPercent(props2.value, min2, max2);
      const markerStyle = {
        position: "absolute",
        pointerEvents: "none",
        ...orient2({
          orientation,
          vertical: {
            bottom: isReversed ? `${100 - markerPercent}%` : `${markerPercent}%`
          },
          horizontal: {
            left: isReversed ? `${100 - markerPercent}%` : `${markerPercent}%`
          }
        })
      };
      return {
        ...props2,
        ref,
        role: "presentation",
        "aria-hidden": true,
        "data-disabled": dataAttr2(isDisabled2),
        "data-invalid": dataAttr2(!isInRange),
        "data-highlighted": dataAttr2(isHighlighted),
        style: {
          ...props2.style,
          ...markerStyle
        }
      };
    },
    [isDisabled2, isReversed, max2, min2, orientation, value]
  );
  const getInputProps = (0, import_react165.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        type: "hidden",
        value,
        name
      };
    },
    [name, value]
  );
  const state = { value, isFocused, isDragging };
  return {
    state,
    actions,
    getRootProps,
    getTrackProps,
    getInnerTrackProps,
    getThumbProps,
    getMarkerProps,
    getInputProps
  };
}
function orient2(options) {
  const { orientation, vertical, horizontal } = options;
  return orientation === "vertical" ? vertical : horizontal;
}
function getDefaultValue(min2, max2) {
  return max2 < min2 ? min2 : min2 + (max2 - min2) / 2;
}

// node_modules/@chakra-ui/slider/dist/chunk-N22PRFAW.mjs
var import_jsx_runtime139 = __toESM(require_jsx_runtime(), 1);
var [SliderProvider, useSliderContext] = createContext({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<Slider />"
});
var [SliderStylesProvider, useSliderStyles] = createContext({
  name: `SliderStylesContext`,
  hookName: `useSliderStyles`,
  providerName: "<Slider />"
});
var Slider = forwardRef((props, ref) => {
  const sliderProps = {
    orientation: "horizontal",
    ...props
  };
  const styles = useMultiStyleConfig("Slider", sliderProps);
  const ownProps = omitThemingProps(sliderProps);
  const { direction } = useTheme();
  ownProps.direction = direction;
  const { getInputProps, getRootProps, ...context } = useSlider(ownProps);
  const rootProps = getRootProps();
  const inputProps = getInputProps({}, ref);
  return (0, import_jsx_runtime139.jsx)(SliderProvider, { value: context, children: (0, import_jsx_runtime139.jsx)(SliderStylesProvider, { value: styles, children: (0, import_jsx_runtime139.jsxs)(
    chakra.div,
    {
      ...rootProps,
      className: cx2("chakra-slider", sliderProps.className),
      __css: styles.container,
      children: [
        sliderProps.children,
        (0, import_jsx_runtime139.jsx)("input", { ...inputProps })
      ]
    }
  ) }) });
});
Slider.displayName = "Slider";
var SliderThumb = forwardRef((props, ref) => {
  const { getThumbProps } = useSliderContext();
  const styles = useSliderStyles();
  const thumbProps = getThumbProps(props, ref);
  return (0, import_jsx_runtime139.jsx)(
    chakra.div,
    {
      ...thumbProps,
      className: cx2("chakra-slider__thumb", props.className),
      __css: styles.thumb
    }
  );
});
SliderThumb.displayName = "SliderThumb";
var SliderTrack = forwardRef((props, ref) => {
  const { getTrackProps } = useSliderContext();
  const styles = useSliderStyles();
  const trackProps = getTrackProps(props, ref);
  return (0, import_jsx_runtime139.jsx)(
    chakra.div,
    {
      ...trackProps,
      className: cx2("chakra-slider__track", props.className),
      __css: styles.track
    }
  );
});
SliderTrack.displayName = "SliderTrack";
var SliderFilledTrack = forwardRef(
  (props, ref) => {
    const { getInnerTrackProps } = useSliderContext();
    const styles = useSliderStyles();
    const trackProps = getInnerTrackProps(props, ref);
    return (0, import_jsx_runtime139.jsx)(
      chakra.div,
      {
        ...trackProps,
        className: cx2("chakra-slider__filled-track", props.className),
        __css: styles.filledTrack
      }
    );
  }
);
SliderFilledTrack.displayName = "SliderFilledTrack";
var SliderMark = forwardRef((props, ref) => {
  const { getMarkerProps } = useSliderContext();
  const styles = useSliderStyles();
  const markProps = getMarkerProps(props, ref);
  return (0, import_jsx_runtime139.jsx)(
    chakra.div,
    {
      ...markProps,
      className: cx2("chakra-slider__marker", props.className),
      __css: styles.mark
    }
  );
});
SliderMark.displayName = "SliderMark";

// node_modules/@chakra-ui/stat/dist/chunk-RQ72AXHY.mjs
var import_jsx_runtime140 = __toESM(require_jsx_runtime(), 1);
var [StatStylesProvider, useStatStyles] = createContext({
  name: `StatStylesContext`,
  errorMessage: `useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />" `
});
var Stat = forwardRef(function Stat2(props, ref) {
  const styles = useMultiStyleConfig("Stat", props);
  const statStyles = {
    position: "relative",
    flex: "1 1 0%",
    ...styles.container
  };
  const { className, children, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime140.jsx)(StatStylesProvider, { value: styles, children: (0, import_jsx_runtime140.jsx)(
    chakra.div,
    {
      ref,
      ...rest,
      className: cx("chakra-stat", className),
      __css: statStyles,
      children: (0, import_jsx_runtime140.jsx)("dl", { children })
    }
  ) });
});
Stat.displayName = "Stat";

// node_modules/@chakra-ui/stat/dist/chunk-P7HN4X7G.mjs
var import_jsx_runtime141 = __toESM(require_jsx_runtime(), 1);
var StatDownArrow = (props) => (0, import_jsx_runtime141.jsx)(Icon, { color: "red.400", ...props, children: (0, import_jsx_runtime141.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
  }
) });
StatDownArrow.displayName = "StatDownArrow";
function StatUpArrow(props) {
  return (0, import_jsx_runtime141.jsx)(Icon, { color: "green.400", ...props, children: (0, import_jsx_runtime141.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
    }
  ) });
}
StatUpArrow.displayName = "StatUpArrow";
function StatArrow(props) {
  const { type, "aria-label": ariaLabel, ...rest } = props;
  const styles = useStatStyles();
  const BaseIcon = type === "increase" ? StatUpArrow : StatDownArrow;
  const defaultAriaLabel = type === "increase" ? "increased by" : "decreased by";
  const label = ariaLabel || defaultAriaLabel;
  return (0, import_jsx_runtime141.jsxs)(import_jsx_runtime141.Fragment, { children: [
    (0, import_jsx_runtime141.jsx)(chakra.span, { srOnly: true, children: label }),
    (0, import_jsx_runtime141.jsx)(BaseIcon, { "aria-hidden": true, ...rest, __css: styles.icon })
  ] });
}
StatArrow.displayName = "StatArrow";

// node_modules/@chakra-ui/stat/dist/chunk-CU33DNCY.mjs
var import_jsx_runtime142 = __toESM(require_jsx_runtime(), 1);
var StatGroup = forwardRef(function StatGroup2(props, ref) {
  return (0, import_jsx_runtime142.jsx)(
    chakra.div,
    {
      ...props,
      ref,
      role: "group",
      className: cx("chakra-stat__group", props.className),
      __css: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "flex-start"
      }
    }
  );
});
StatGroup.displayName = "StatGroup";

// node_modules/@chakra-ui/stat/dist/chunk-2THWWZP3.mjs
var import_jsx_runtime143 = __toESM(require_jsx_runtime(), 1);
var StatHelpText = forwardRef(
  function StatHelpText2(props, ref) {
    const styles = useStatStyles();
    return (0, import_jsx_runtime143.jsx)(
      chakra.dd,
      {
        ref,
        ...props,
        className: cx("chakra-stat__help-text", props.className),
        __css: styles.helpText
      }
    );
  }
);
StatHelpText.displayName = "StatHelpText";

// node_modules/@chakra-ui/stat/dist/chunk-S22BHKCQ.mjs
var import_jsx_runtime144 = __toESM(require_jsx_runtime(), 1);
var StatLabel = forwardRef(function StatLabel2(props, ref) {
  const styles = useStatStyles();
  return (0, import_jsx_runtime144.jsx)(
    chakra.dt,
    {
      ref,
      ...props,
      className: cx("chakra-stat__label", props.className),
      __css: styles.label
    }
  );
});
StatLabel.displayName = "StatLabel";

// node_modules/@chakra-ui/stat/dist/chunk-7LNWOFRF.mjs
var import_jsx_runtime145 = __toESM(require_jsx_runtime(), 1);
var StatNumber = forwardRef(function StatNumber2(props, ref) {
  const styles = useStatStyles();
  return (0, import_jsx_runtime145.jsx)(
    chakra.dd,
    {
      ref,
      ...props,
      className: cx("chakra-stat__number", props.className),
      __css: {
        ...styles.number,
        fontFeatureSettings: "pnum",
        fontVariantNumeric: "proportional-nums"
      }
    }
  );
});
StatNumber.displayName = "StatNumber";

// node_modules/@chakra-ui/switch/dist/chunk-B22GDMVL.mjs
var import_react166 = __toESM(require_react(), 1);
var import_jsx_runtime146 = __toESM(require_jsx_runtime(), 1);
var Switch = forwardRef(function Switch2(props, ref) {
  const styles = useMultiStyleConfig("Switch", props);
  const { spacing = "0.5rem", children, ...ownProps } = omitThemingProps(props);
  const {
    state,
    getInputProps,
    getCheckboxProps,
    getRootProps,
    getLabelProps
  } = useCheckbox(ownProps);
  const containerStyles = (0, import_react166.useMemo)(
    () => ({
      display: "inline-block",
      position: "relative",
      verticalAlign: "middle",
      lineHeight: 0,
      ...styles.container
    }),
    [styles.container]
  );
  const trackStyles = (0, import_react166.useMemo)(
    () => ({
      display: "inline-flex",
      flexShrink: 0,
      justifyContent: "flex-start",
      boxSizing: "content-box",
      cursor: "pointer",
      ...styles.track
    }),
    [styles.track]
  );
  const labelStyles = (0, import_react166.useMemo)(
    () => ({
      userSelect: "none",
      marginStart: spacing,
      ...styles.label
    }),
    [spacing, styles.label]
  );
  return (0, import_jsx_runtime146.jsxs)(
    chakra.label,
    {
      ...getRootProps(),
      className: cx("chakra-switch", props.className),
      __css: containerStyles,
      children: [
        (0, import_jsx_runtime146.jsx)("input", { className: "chakra-switch__input", ...getInputProps({}, ref) }),
        (0, import_jsx_runtime146.jsx)(
          chakra.span,
          {
            ...getCheckboxProps(),
            className: "chakra-switch__track",
            __css: trackStyles,
            children: (0, import_jsx_runtime146.jsx)(
              chakra.span,
              {
                __css: styles.thumb,
                className: "chakra-switch__thumb",
                "data-checked": dataAttr(state.isChecked),
                "data-hover": dataAttr(state.isHovered)
              }
            )
          }
        ),
        children && (0, import_jsx_runtime146.jsx)(
          chakra.span,
          {
            className: "chakra-switch__label",
            ...getLabelProps(),
            __css: labelStyles,
            children
          }
        )
      ]
    }
  );
});
Switch.displayName = "Switch";

// node_modules/@chakra-ui/table/dist/chunk-B3MS3L3D.mjs
var import_jsx_runtime147 = __toESM(require_jsx_runtime(), 1);
var [TableStylesProvider, useTableStyles] = createContext({
  name: `TableStylesContext`,
  errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `
});
var Table = forwardRef((props, ref) => {
  const styles = useMultiStyleConfig("Table", props);
  const { className, layout: layout3, ...tableProps } = omitThemingProps(props);
  return (0, import_jsx_runtime147.jsx)(TableStylesProvider, { value: styles, children: (0, import_jsx_runtime147.jsx)(
    chakra.table,
    {
      ref,
      __css: { tableLayout: layout3, ...styles.table },
      className: cx("chakra-table", className),
      ...tableProps
    }
  ) });
});
Table.displayName = "Table";

// node_modules/@chakra-ui/table/dist/chunk-DJP6PLAX.mjs
var import_jsx_runtime148 = __toESM(require_jsx_runtime(), 1);
var Thead = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return (0, import_jsx_runtime148.jsx)(chakra.thead, { ...props, ref, __css: styles.thead });
});

// node_modules/@chakra-ui/table/dist/chunk-L7UVV2ML.mjs
var import_jsx_runtime149 = __toESM(require_jsx_runtime(), 1);
var Tr = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return (0, import_jsx_runtime149.jsx)(chakra.tr, { ...props, ref, __css: styles.tr });
});

// node_modules/@chakra-ui/table/dist/chunk-V3BNVYZO.mjs
var import_jsx_runtime150 = __toESM(require_jsx_runtime(), 1);
var TableCaption = forwardRef(
  (props, ref) => {
    const { placement = "bottom", ...rest } = props;
    const styles = useTableStyles();
    return (0, import_jsx_runtime150.jsx)(
      chakra.caption,
      {
        ...rest,
        ref,
        __css: {
          ...styles.caption,
          captionSide: placement
        }
      }
    );
  }
);
TableCaption.displayName = "TableCaption";

// node_modules/@chakra-ui/table/dist/chunk-7FCBKWFD.mjs
var import_jsx_runtime151 = __toESM(require_jsx_runtime(), 1);
var TableContainer = forwardRef(
  (props, ref) => {
    var _a2;
    const { overflow, overflowX, className, ...rest } = props;
    return (0, import_jsx_runtime151.jsx)(
      chakra.div,
      {
        ref,
        className: cx("chakra-table__container", className),
        ...rest,
        __css: {
          display: "block",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          overflowX: (_a2 = overflow != null ? overflow : overflowX) != null ? _a2 : "auto",
          overflowY: "hidden",
          maxWidth: "100%"
        }
      }
    );
  }
);

// node_modules/@chakra-ui/table/dist/chunk-D3HTYHQX.mjs
var import_jsx_runtime152 = __toESM(require_jsx_runtime(), 1);
var Tbody = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return (0, import_jsx_runtime152.jsx)(chakra.tbody, { ...props, ref, __css: styles.tbody });
});

// node_modules/@chakra-ui/table/dist/chunk-BLRPLYZO.mjs
var import_jsx_runtime153 = __toESM(require_jsx_runtime(), 1);
var Td = forwardRef(
  ({ isNumeric: isNumeric2, ...rest }, ref) => {
    const styles = useTableStyles();
    return (0, import_jsx_runtime153.jsx)(
      chakra.td,
      {
        ...rest,
        ref,
        __css: styles.td,
        "data-is-numeric": isNumeric2
      }
    );
  }
);

// node_modules/@chakra-ui/table/dist/chunk-PEV6T2J3.mjs
var import_jsx_runtime154 = __toESM(require_jsx_runtime(), 1);
var Tfoot = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return (0, import_jsx_runtime154.jsx)(chakra.tfoot, { ...props, ref, __css: styles.tfoot });
});

// node_modules/@chakra-ui/table/dist/chunk-Z3IFIKNA.mjs
var import_jsx_runtime155 = __toESM(require_jsx_runtime(), 1);
var Th = forwardRef(
  ({ isNumeric: isNumeric2, ...rest }, ref) => {
    const styles = useTableStyles();
    return (0, import_jsx_runtime155.jsx)(
      chakra.th,
      {
        ...rest,
        ref,
        __css: styles.th,
        "data-is-numeric": isNumeric2
      }
    );
  }
);

// node_modules/@chakra-ui/tabs/dist/chunk-ROBISDLO.mjs
var import_react167 = __toESM(require_react(), 1);
var [
  TabsDescendantsProvider,
  useTabsDescendantsContext,
  useTabsDescendants,
  useTabsDescendant
] = createDescendantContext();
function useTabs(props) {
  var _a2;
  const {
    defaultIndex,
    onChange,
    index: index2,
    isManual,
    isLazy,
    lazyBehavior = "unmount",
    orientation = "horizontal",
    direction = "ltr",
    ...htmlProps
  } = props;
  const [focusedIndex, setFocusedIndex] = (0, import_react167.useState)(defaultIndex != null ? defaultIndex : 0);
  const [selectedIndex, setSelectedIndex] = useControllableState({
    defaultValue: defaultIndex != null ? defaultIndex : 0,
    value: index2,
    onChange
  });
  (0, import_react167.useEffect)(() => {
    if (index2 != null) {
      setFocusedIndex(index2);
    }
  }, [index2]);
  const descendants = useTabsDescendants();
  const uuid = (0, import_react167.useId)();
  const uid = (_a2 = props.id) != null ? _a2 : uuid;
  const id4 = `tabs-${uid}`;
  return {
    id: id4,
    selectedIndex,
    focusedIndex,
    setSelectedIndex,
    setFocusedIndex,
    isManual,
    isLazy,
    lazyBehavior,
    orientation,
    descendants,
    direction,
    htmlProps
  };
}
var [TabsProvider, useTabsContext] = createContext({
  name: "TabsContext",
  errorMessage: "useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"
});
function useTabList(props) {
  const { focusedIndex, orientation, direction } = useTabsContext();
  const descendants = useTabsDescendantsContext();
  const onKeyDown = (0, import_react167.useCallback)(
    (event) => {
      const nextTab = () => {
        var _a2;
        const next = descendants.nextEnabled(focusedIndex);
        if (next)
          (_a2 = next.node) == null ? void 0 : _a2.focus();
      };
      const prevTab = () => {
        var _a2;
        const prev = descendants.prevEnabled(focusedIndex);
        if (prev)
          (_a2 = prev.node) == null ? void 0 : _a2.focus();
      };
      const firstTab = () => {
        var _a2;
        const first = descendants.firstEnabled();
        if (first)
          (_a2 = first.node) == null ? void 0 : _a2.focus();
      };
      const lastTab = () => {
        var _a2;
        const last = descendants.lastEnabled();
        if (last)
          (_a2 = last.node) == null ? void 0 : _a2.focus();
      };
      const isHorizontal = orientation === "horizontal";
      const isVertical = orientation === "vertical";
      const eventKey = event.key;
      const ArrowStart = direction === "ltr" ? "ArrowLeft" : "ArrowRight";
      const ArrowEnd = direction === "ltr" ? "ArrowRight" : "ArrowLeft";
      const keyMap = {
        [ArrowStart]: () => isHorizontal && prevTab(),
        [ArrowEnd]: () => isHorizontal && nextTab(),
        ArrowDown: () => isVertical && nextTab(),
        ArrowUp: () => isVertical && prevTab(),
        Home: firstTab,
        End: lastTab
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [descendants, focusedIndex, orientation, direction]
  );
  return {
    ...props,
    role: "tablist",
    "aria-orientation": orientation,
    onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown)
  };
}
function useTab(props) {
  const { isDisabled: isDisabled2, isFocusable: isFocusable2, ...htmlProps } = props;
  const { setSelectedIndex, isManual, id: id4, setFocusedIndex, selectedIndex } = useTabsContext();
  const { index: index2, register } = useTabsDescendant({
    disabled: isDisabled2 && !isFocusable2
  });
  const isSelected = index2 === selectedIndex;
  const onClick = () => {
    setSelectedIndex(index2);
  };
  const onFocus3 = () => {
    setFocusedIndex(index2);
    const isDisabledButFocusable = isDisabled2 && isFocusable2;
    const shouldSelect = !isManual && !isDisabledButFocusable;
    if (shouldSelect) {
      setSelectedIndex(index2);
    }
  };
  const clickableProps = useClickable({
    ...htmlProps,
    ref: mergeRefs(register, props.ref),
    isDisabled: isDisabled2,
    isFocusable: isFocusable2,
    onClick: callAllHandlers(props.onClick, onClick)
  });
  const type = "button";
  return {
    ...clickableProps,
    id: makeTabId(id4, index2),
    role: "tab",
    tabIndex: isSelected ? 0 : -1,
    type,
    "aria-selected": isSelected,
    "aria-controls": makeTabPanelId(id4, index2),
    onFocus: isDisabled2 ? void 0 : callAllHandlers(props.onFocus, onFocus3)
  };
}
var [TabPanelProvider, useTabPanelContext] = createContext({});
function useTabPanels(props) {
  const context = useTabsContext();
  const { id: id4, selectedIndex } = context;
  const validChildren = getValidChildren(props.children);
  const children = validChildren.map(
    (child, index2) => (0, import_react167.createElement)(
      TabPanelProvider,
      {
        key: index2,
        value: {
          isSelected: index2 === selectedIndex,
          id: makeTabPanelId(id4, index2),
          tabId: makeTabId(id4, index2),
          selectedIndex
        }
      },
      child
    )
  );
  return { ...props, children };
}
function useTabPanel(props) {
  const { children, ...htmlProps } = props;
  const { isLazy, lazyBehavior } = useTabsContext();
  const { isSelected, id: id4, tabId } = useTabPanelContext();
  const hasBeenSelected = (0, import_react167.useRef)(false);
  if (isSelected) {
    hasBeenSelected.current = true;
  }
  const shouldRenderChildren = lazyDisclosure({
    wasSelected: hasBeenSelected.current,
    isSelected,
    enabled: isLazy,
    mode: lazyBehavior
  });
  return {
    tabIndex: 0,
    ...htmlProps,
    children: shouldRenderChildren ? children : null,
    role: "tabpanel",
    "aria-labelledby": tabId,
    hidden: !isSelected,
    id: id4
  };
}
function useTabIndicator() {
  const context = useTabsContext();
  const descendants = useTabsDescendantsContext();
  const { selectedIndex, orientation } = context;
  const isHorizontal = orientation === "horizontal";
  const isVertical = orientation === "vertical";
  const [rect, setRect] = (0, import_react167.useState)(() => {
    if (isHorizontal)
      return { left: 0, width: 0 };
    if (isVertical)
      return { top: 0, height: 0 };
    return void 0;
  });
  const [hasMeasured, setHasMeasured] = (0, import_react167.useState)(false);
  useSafeLayoutEffect(() => {
    if (selectedIndex == null)
      return;
    const tab = descendants.item(selectedIndex);
    if (tab == null)
      return;
    if (isHorizontal) {
      setRect({ left: tab.node.offsetLeft, width: tab.node.offsetWidth });
    }
    if (isVertical) {
      setRect({ top: tab.node.offsetTop, height: tab.node.offsetHeight });
    }
    const id4 = requestAnimationFrame(() => {
      setHasMeasured(true);
    });
    return () => {
      if (id4) {
        cancelAnimationFrame(id4);
      }
    };
  }, [selectedIndex, isHorizontal, isVertical, descendants]);
  return {
    position: "absolute",
    transitionProperty: "left, right, top, bottom, height, width",
    transitionDuration: hasMeasured ? "200ms" : "0ms",
    transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    ...rect
  };
}
function makeTabId(id4, index2) {
  return `${id4}--tab-${index2}`;
}
function makeTabPanelId(id4, index2) {
  return `${id4}--tabpanel-${index2}`;
}

// node_modules/@chakra-ui/tabs/dist/chunk-ZWUY3VWT.mjs
var import_react168 = __toESM(require_react(), 1);
var import_jsx_runtime156 = __toESM(require_jsx_runtime(), 1);
var [TabsStylesProvider, useTabsStyles] = createContext({
  name: `TabsStylesContext`,
  errorMessage: `useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `
});
var Tabs = forwardRef(function Tabs2(props, ref) {
  const styles = useMultiStyleConfig("Tabs", props);
  const { children, className, ...rest } = omitThemingProps(props);
  const { htmlProps, descendants, ...ctx } = useTabs(rest);
  const context = (0, import_react168.useMemo)(() => ctx, [ctx]);
  const { isFitted: _, ...rootProps } = htmlProps;
  return (0, import_jsx_runtime156.jsx)(TabsDescendantsProvider, { value: descendants, children: (0, import_jsx_runtime156.jsx)(TabsProvider, { value: context, children: (0, import_jsx_runtime156.jsx)(TabsStylesProvider, { value: styles, children: (0, import_jsx_runtime156.jsx)(
    chakra.div,
    {
      className: cx("chakra-tabs", className),
      ref,
      ...rootProps,
      __css: styles.root,
      children
    }
  ) }) }) });
});
Tabs.displayName = "Tabs";

// node_modules/@chakra-ui/tabs/dist/chunk-UCTXUILV.mjs
var import_jsx_runtime157 = __toESM(require_jsx_runtime(), 1);
var TabIndicator = forwardRef(
  function TabIndicator2(props, ref) {
    const indicatorStyle = useTabIndicator();
    const style = {
      ...props.style,
      ...indicatorStyle
    };
    const styles = useTabsStyles();
    return (0, import_jsx_runtime157.jsx)(
      chakra.div,
      {
        ref,
        ...props,
        className: cx("chakra-tabs__tab-indicator", props.className),
        style,
        __css: styles.indicator
      }
    );
  }
);
TabIndicator.displayName = "TabIndicator";

// node_modules/@chakra-ui/tabs/dist/chunk-ZWLVZLKQ.mjs
var import_jsx_runtime158 = __toESM(require_jsx_runtime(), 1);
var TabList = forwardRef(function TabList2(props, ref) {
  const tablistProps = useTabList({ ...props, ref });
  const styles = useTabsStyles();
  const tablistStyles = {
    display: "flex",
    ...styles.tablist
  };
  return (0, import_jsx_runtime158.jsx)(
    chakra.div,
    {
      ...tablistProps,
      className: cx("chakra-tabs__tablist", props.className),
      __css: tablistStyles
    }
  );
});
TabList.displayName = "TabList";

// node_modules/@chakra-ui/tabs/dist/chunk-7W5ZCZ76.mjs
var import_jsx_runtime159 = __toESM(require_jsx_runtime(), 1);
var TabPanel = forwardRef(function TabPanel2(props, ref) {
  const panelProps = useTabPanel({ ...props, ref });
  const styles = useTabsStyles();
  return (0, import_jsx_runtime159.jsx)(
    chakra.div,
    {
      outline: "0",
      ...panelProps,
      className: cx("chakra-tabs__tab-panel", props.className),
      __css: styles.tabpanel
    }
  );
});
TabPanel.displayName = "TabPanel";

// node_modules/@chakra-ui/tabs/dist/chunk-45U2LZ4E.mjs
var import_jsx_runtime160 = __toESM(require_jsx_runtime(), 1);
var TabPanels = forwardRef(function TabPanels2(props, ref) {
  const panelsProps = useTabPanels(props);
  const styles = useTabsStyles();
  return (0, import_jsx_runtime160.jsx)(
    chakra.div,
    {
      ...panelsProps,
      width: "100%",
      ref,
      className: cx("chakra-tabs__tab-panels", props.className),
      __css: styles.tabpanels
    }
  );
});
TabPanels.displayName = "TabPanels";

// node_modules/@chakra-ui/tabs/dist/chunk-TPBRUKW6.mjs
var import_jsx_runtime161 = __toESM(require_jsx_runtime(), 1);
var Tab = forwardRef(function Tab2(props, ref) {
  const styles = useTabsStyles();
  const tabProps = useTab({ ...props, ref });
  const tabStyles = {
    outline: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...styles.tab
  };
  return (0, import_jsx_runtime161.jsx)(
    chakra.button,
    {
      ...tabProps,
      className: cx("chakra-tabs__tab", props.className),
      __css: tabStyles
    }
  );
});
Tab.displayName = "Tab";

// node_modules/@chakra-ui/tag/dist/chunk-IXKZFKRY.mjs
var import_jsx_runtime162 = __toESM(require_jsx_runtime(), 1);
var [TagStylesProvider, useTagStyles] = createContext({
  name: `TagStylesContext`,
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
});
var Tag = forwardRef((props, ref) => {
  const styles = useMultiStyleConfig("Tag", props);
  const ownProps = omitThemingProps(props);
  const containerStyles = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...styles.container
  };
  return (0, import_jsx_runtime162.jsx)(TagStylesProvider, { value: styles, children: (0, import_jsx_runtime162.jsx)(chakra.span, { ref, ...ownProps, __css: containerStyles }) });
});
Tag.displayName = "Tag";
var TagLabel = forwardRef((props, ref) => {
  const styles = useTagStyles();
  return (0, import_jsx_runtime162.jsx)(chakra.span, { ref, noOfLines: 1, ...props, __css: styles.label });
});
TagLabel.displayName = "TagLabel";
var TagLeftIcon = forwardRef((props, ref) => (0, import_jsx_runtime162.jsx)(Icon, { ref, verticalAlign: "top", marginEnd: "0.5rem", ...props }));
TagLeftIcon.displayName = "TagLeftIcon";
var TagRightIcon = forwardRef((props, ref) => (0, import_jsx_runtime162.jsx)(Icon, { ref, verticalAlign: "top", marginStart: "0.5rem", ...props }));
TagRightIcon.displayName = "TagRightIcon";
var TagCloseIcon = (props) => (0, import_jsx_runtime162.jsx)(Icon, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...props, children: (0, import_jsx_runtime162.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
TagCloseIcon.displayName = "TagCloseIcon";
var TagCloseButton = forwardRef(
  (props, ref) => {
    const { isDisabled: isDisabled2, children, ...rest } = props;
    const styles = useTagStyles();
    const btnStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...styles.closeButton
    };
    return (0, import_jsx_runtime162.jsx)(
      chakra.button,
      {
        ref,
        "aria-label": "close",
        ...rest,
        type: "button",
        disabled: isDisabled2,
        __css: btnStyles,
        children: children || (0, import_jsx_runtime162.jsx)(TagCloseIcon, {})
      }
    );
  }
);
TagCloseButton.displayName = "TagCloseButton";

// node_modules/@chakra-ui/textarea/dist/chunk-OEQDSMWZ.mjs
var import_jsx_runtime163 = __toESM(require_jsx_runtime(), 1);
function omit3(object2, keysToOmit = []) {
  const clone = Object.assign({}, object2);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}
var omitted = ["h", "minH", "height", "minHeight"];
var Textarea = forwardRef((props, ref) => {
  const styles = useStyleConfig("Textarea", props);
  const { className, rows, ...rest } = omitThemingProps(props);
  const textareaProps = useFormControl(rest);
  const textareaStyles = rows ? omit3(styles, omitted) : styles;
  return (0, import_jsx_runtime163.jsx)(
    chakra.textarea,
    {
      ref,
      rows,
      ...textareaProps,
      className: cx("chakra-textarea", className),
      __css: textareaStyles
    }
  );
});
Textarea.displayName = "Textarea";

// node_modules/@chakra-ui/tooltip/dist/chunk-UNJFLZPD.mjs
var scale2 = {
  exit: {
    scale: 0.85,
    opacity: 0,
    transition: {
      opacity: { duration: 0.15, easings: "easeInOut" },
      scale: { duration: 0.2, easings: "easeInOut" }
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      opacity: { easings: "easeOut", duration: 0.2 },
      scale: { duration: 0.2, ease: [0.175, 0.885, 0.4, 1.1] }
    }
  }
};

// node_modules/@chakra-ui/tooltip/dist/chunk-GOQMVUD7.mjs
var import_react169 = __toESM(require_react(), 1);
var getDoc = (ref) => {
  var _a2;
  return ((_a2 = ref.current) == null ? void 0 : _a2.ownerDocument) || document;
};
var getWin = (ref) => {
  var _a2, _b;
  return ((_b = (_a2 = ref.current) == null ? void 0 : _a2.ownerDocument) == null ? void 0 : _b.defaultView) || window;
};
function useTooltip(props = {}) {
  const {
    openDelay = 0,
    closeDelay = 0,
    closeOnClick = true,
    closeOnMouseDown,
    closeOnScroll,
    closeOnPointerDown = closeOnMouseDown,
    closeOnEsc = true,
    onOpen: onOpenProp,
    onClose: onCloseProp,
    placement,
    id: id4,
    isOpen: isOpenProp,
    defaultIsOpen,
    arrowSize = 10,
    arrowShadowColor,
    arrowPadding,
    modifiers,
    isDisabled: isDisabled2,
    gutter,
    offset: offset2,
    direction,
    ...htmlProps
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure2({
    isOpen: isOpenProp,
    defaultIsOpen,
    onOpen: onOpenProp,
    onClose: onCloseProp
  });
  const { referenceRef, getPopperProps, getArrowInnerProps, getArrowProps } = usePopper({
    enabled: isOpen,
    placement,
    arrowPadding,
    modifiers,
    gutter,
    offset: offset2,
    direction
  });
  const uuid = (0, import_react169.useId)();
  const uid = id4 != null ? id4 : uuid;
  const tooltipId = `tooltip-${uid}`;
  const ref = (0, import_react169.useRef)(null);
  const enterTimeout = (0, import_react169.useRef)();
  const clearEnterTimeout = (0, import_react169.useCallback)(() => {
    if (enterTimeout.current) {
      clearTimeout(enterTimeout.current);
      enterTimeout.current = void 0;
    }
  }, []);
  const exitTimeout = (0, import_react169.useRef)();
  const clearExitTimeout = (0, import_react169.useCallback)(() => {
    if (exitTimeout.current) {
      clearTimeout(exitTimeout.current);
      exitTimeout.current = void 0;
    }
  }, []);
  const closeNow = (0, import_react169.useCallback)(() => {
    clearExitTimeout();
    onClose();
  }, [onClose, clearExitTimeout]);
  const dispatchCloseEvent = useCloseEvent(ref, closeNow);
  const openWithDelay = (0, import_react169.useCallback)(() => {
    if (!isDisabled2 && !enterTimeout.current) {
      dispatchCloseEvent();
      const win = getWin(ref);
      enterTimeout.current = win.setTimeout(onOpen, openDelay);
    }
  }, [dispatchCloseEvent, isDisabled2, onOpen, openDelay]);
  const closeWithDelay = (0, import_react169.useCallback)(() => {
    clearEnterTimeout();
    const win = getWin(ref);
    exitTimeout.current = win.setTimeout(closeNow, closeDelay);
  }, [closeDelay, closeNow, clearEnterTimeout]);
  const onClick = (0, import_react169.useCallback)(() => {
    if (isOpen && closeOnClick) {
      closeWithDelay();
    }
  }, [closeOnClick, closeWithDelay, isOpen]);
  const onPointerDown = (0, import_react169.useCallback)(() => {
    if (isOpen && closeOnPointerDown) {
      closeWithDelay();
    }
  }, [closeOnPointerDown, closeWithDelay, isOpen]);
  const onKeyDown = (0, import_react169.useCallback)(
    (event) => {
      if (isOpen && event.key === "Escape") {
        closeWithDelay();
      }
    },
    [isOpen, closeWithDelay]
  );
  useEventListener(
    () => getDoc(ref),
    "keydown",
    closeOnEsc ? onKeyDown : void 0
  );
  useEventListener(
    () => getDoc(ref),
    "scroll",
    () => {
      if (isOpen && closeOnScroll) {
        closeNow();
      }
    }
  );
  (0, import_react169.useEffect)(() => {
    if (!isDisabled2)
      return;
    clearEnterTimeout();
    if (isOpen)
      onClose();
  }, [isDisabled2, isOpen, onClose, clearEnterTimeout]);
  (0, import_react169.useEffect)(
    () => () => {
      clearEnterTimeout();
      clearExitTimeout();
    },
    [clearEnterTimeout, clearExitTimeout]
  );
  useEventListener(() => ref.current, "pointerleave", closeWithDelay);
  const getTriggerProps = (0, import_react169.useCallback)(
    (props2 = {}, _ref2 = null) => {
      const triggerProps = {
        ...props2,
        ref: mergeRefs(ref, _ref2, referenceRef),
        onPointerEnter: callAllHandlers(props2.onPointerEnter, (e) => {
          if (e.pointerType === "touch")
            return;
          openWithDelay();
        }),
        onClick: callAllHandlers(props2.onClick, onClick),
        onPointerDown: callAllHandlers(props2.onPointerDown, onPointerDown),
        onFocus: callAllHandlers(props2.onFocus, openWithDelay),
        onBlur: callAllHandlers(props2.onBlur, closeWithDelay),
        "aria-describedby": isOpen ? tooltipId : void 0
      };
      return triggerProps;
    },
    [
      openWithDelay,
      closeWithDelay,
      onPointerDown,
      isOpen,
      tooltipId,
      onClick,
      referenceRef
    ]
  );
  const getTooltipPositionerProps = (0, import_react169.useCallback)(
    (props2 = {}, forwardedRef = null) => getPopperProps(
      {
        ...props2,
        style: {
          ...props2.style,
          [cssVars.arrowSize.var]: arrowSize ? `${arrowSize}px` : void 0,
          [cssVars.arrowShadowColor.var]: arrowShadowColor
        }
      },
      forwardedRef
    ),
    [getPopperProps, arrowSize, arrowShadowColor]
  );
  const getTooltipProps = (0, import_react169.useCallback)(
    (props2 = {}, ref2 = null) => {
      const styles = {
        ...props2.style,
        position: "relative",
        transformOrigin: cssVars.transformOrigin.varRef
      };
      return {
        ref: ref2,
        ...htmlProps,
        ...props2,
        id: tooltipId,
        role: "tooltip",
        style: styles
      };
    },
    [htmlProps, tooltipId]
  );
  return {
    isOpen,
    show: openWithDelay,
    hide: closeWithDelay,
    getTriggerProps,
    getTooltipProps,
    getTooltipPositionerProps,
    getArrowProps,
    getArrowInnerProps
  };
}
var closeEventName = "chakra-ui:close-tooltip";
function useCloseEvent(ref, close) {
  (0, import_react169.useEffect)(() => {
    const doc = getDoc(ref);
    doc.addEventListener(closeEventName, close);
    return () => doc.removeEventListener(closeEventName, close);
  }, [close, ref]);
  return () => {
    const doc = getDoc(ref);
    const win = getWin(ref);
    doc.dispatchEvent(new win.CustomEvent(closeEventName));
  };
}

// node_modules/@chakra-ui/tooltip/dist/chunk-OMHV467B.mjs
var import_react170 = __toESM(require_react(), 1);
var import_jsx_runtime164 = __toESM(require_jsx_runtime(), 1);
function omit4(object2, keysToOmit = []) {
  const clone = Object.assign({}, object2);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}
function pick(object2, keysToPick) {
  const result = {};
  for (const key of keysToPick) {
    if (key in object2) {
      result[key] = object2[key];
    }
  }
  return result;
}
var MotionDiv3 = chakra(motion.div);
var Tooltip = forwardRef((props, ref) => {
  var _a2, _b;
  const styles = useStyleConfig("Tooltip", props);
  const ownProps = omitThemingProps(props);
  const theme2 = useTheme();
  const {
    children,
    label,
    shouldWrapChildren,
    "aria-label": ariaLabel,
    hasArrow,
    bg,
    portalProps,
    background: background2,
    backgroundColor,
    bgColor,
    motionProps,
    ...rest
  } = ownProps;
  const userDefinedBg = (_b = (_a2 = background2 != null ? background2 : backgroundColor) != null ? _a2 : bg) != null ? _b : bgColor;
  if (userDefinedBg) {
    styles.bg = userDefinedBg;
    const bgVar = getCSSVar(theme2, "colors", userDefinedBg);
    styles[cssVars.arrowBg.var] = bgVar;
  }
  const tooltip = useTooltip({ ...rest, direction: theme2.direction });
  const shouldWrap = typeof children === "string" || shouldWrapChildren;
  let trigger2;
  if (shouldWrap) {
    trigger2 = (0, import_jsx_runtime164.jsx)(
      chakra.span,
      {
        display: "inline-block",
        tabIndex: 0,
        ...tooltip.getTriggerProps(),
        children
      }
    );
  } else {
    const child = import_react170.Children.only(children);
    trigger2 = (0, import_react170.cloneElement)(
      child,
      tooltip.getTriggerProps(child.props, child.ref)
    );
  }
  const hasAriaLabel = !!ariaLabel;
  const _tooltipProps = tooltip.getTooltipProps({}, ref);
  const tooltipProps = hasAriaLabel ? omit4(_tooltipProps, ["role", "id"]) : _tooltipProps;
  const srOnlyProps = pick(_tooltipProps, ["role", "id"]);
  if (!label) {
    return (0, import_jsx_runtime164.jsx)(import_jsx_runtime164.Fragment, { children });
  }
  return (0, import_jsx_runtime164.jsxs)(import_jsx_runtime164.Fragment, { children: [
    trigger2,
    (0, import_jsx_runtime164.jsx)(AnimatePresence, { children: tooltip.isOpen && (0, import_jsx_runtime164.jsx)(Portal, { ...portalProps, children: (0, import_jsx_runtime164.jsx)(
      chakra.div,
      {
        ...tooltip.getTooltipPositionerProps(),
        __css: {
          zIndex: styles.zIndex,
          pointerEvents: "none"
        },
        children: (0, import_jsx_runtime164.jsxs)(
          MotionDiv3,
          {
            variants: scale2,
            initial: "exit",
            animate: "enter",
            exit: "exit",
            ...motionProps,
            ...tooltipProps,
            __css: styles,
            children: [
              label,
              hasAriaLabel && (0, import_jsx_runtime164.jsx)(chakra.span, { srOnly: true, ...srOnlyProps, children: ariaLabel }),
              hasArrow && (0, import_jsx_runtime164.jsx)(
                chakra.div,
                {
                  "data-popper-arrow": true,
                  className: "chakra-tooltip__arrow-wrapper",
                  children: (0, import_jsx_runtime164.jsx)(
                    chakra.div,
                    {
                      "data-popper-arrow-inner": true,
                      className: "chakra-tooltip__arrow",
                      __css: { bg: styles.bg }
                    }
                  )
                }
              )
            ]
          }
        )
      }
    ) }) })
  ] });
});
Tooltip.displayName = "Tooltip";
export {
  AbsoluteCenter,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionProvider,
  Alert,
  AlertDescription,
  AlertDialog,
  ModalBody as AlertDialogBody,
  ModalCloseButton as AlertDialogCloseButton,
  AlertDialogContent,
  ModalFooter as AlertDialogFooter,
  ModalHeader as AlertDialogHeader,
  ModalOverlay as AlertDialogOverlay,
  AlertIcon,
  AlertTitle,
  AspectRatio,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  ButtonSpinner,
  CSSPolyfill,
  CSSReset,
  CSSVars,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  ChakraBaseProvider,
  ChakraProvider2 as ChakraProvider,
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  Circle,
  CircularProgress,
  CircularProgressLabel,
  CloseButton,
  Code,
  Collapse,
  ColorModeContext,
  ColorModeProvider,
  ColorModeScript,
  Container2 as Container,
  ControlBox,
  DarkMode,
  Divider,
  Drawer,
  ModalBody as DrawerBody,
  ModalCloseButton as DrawerCloseButton,
  DrawerContent,
  ModalFooter as DrawerFooter,
  ModalHeader as DrawerHeader,
  ModalOverlay as DrawerOverlay,
  TRANSITION_EASINGS as EASINGS,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  EnvironmentProvider,
  Fade,
  Flex,
  FocusLock2 as FocusLock,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  GenericAvatarIcon,
  GlobalStyle,
  Grid,
  GridItem,
  HStack,
  Heading,
  Hide,
  Highlight,
  Icon,
  IconButton,
  Image2 as Image,
  Img,
  Input,
  InputAddon,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Kbd,
  LightMode,
  Link,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
  Mark,
  Menu,
  MenuButton,
  MenuCommand,
  MenuDescendantsProvider,
  MenuDivider,
  MenuGroup,
  MenuIcon,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  MenuProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalContextProvider,
  ModalFocusScope,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  OrderedList,
  PinInput,
  PinInputDescendantsProvider,
  PinInputField,
  PinInputProvider,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  PortalManager,
  Progress,
  ProgressLabel,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderProvider,
  RangeSliderThumb,
  RangeSliderTrack,
  RequiredIndicator,
  ScaleFade,
  Select,
  SelectField,
  Show,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Slide,
  SlideFade,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderProvider,
  SliderThumb,
  SliderTrack,
  Spacer,
  Spinner,
  Square,
  Stack,
  StackDivider,
  StackItem,
  Stat,
  StatArrow,
  StatDownArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatUpArrow,
  StylesProvider,
  Switch,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableCaption,
  TableContainer,
  Tabs,
  TabsDescendantsProvider,
  TabsProvider,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Tbody,
  Td,
  Text,
  Textarea,
  Tfoot,
  Th,
  Thead,
  ThemeProvider,
  Toast,
  ToastOptionProvider,
  ToastProvider,
  Tooltip,
  Tr,
  UnorderedList,
  VStack,
  VisuallyHidden,
  VisuallyHiddenInput,
  Wrap,
  WrapItem,
  addPrefix,
  assignRef3 as assignRef,
  background,
  baseTheme,
  border,
  calc,
  chakra,
  color,
  cookieStorageManager,
  cookieStorageManagerSSR,
  createCookieStorageManager,
  createIcon,
  createLocalStorageManager,
  createMultiStyleConfigHelpers,
  createRenderToast,
  createStandaloneToast,
  createStylesContext,
  createToastFn,
  css,
  cssVar,
  defineCssVars,
  defineStyle,
  defineStyleConfig,
  effect,
  extendBaseTheme,
  extendTheme,
  fadeConfig,
  filter,
  flatten,
  flattenTokens,
  flexbox,
  forwardRef,
  getCSSVar,
  getCss,
  getScriptSrc,
  getSlideTransition,
  getToastPlacement,
  getToken,
  grid,
  interactivity,
  isChakraTheme,
  isStyleProp,
  keyframes,
  layout,
  layoutPropNames,
  list,
  localStorageManager,
  mergeThemeOverride,
  omitThemingProps,
  others,
  cssVars as popperCSSVars,
  position,
  propNames,
  pseudoPropNames,
  pseudoSelectors,
  requiredChakraThemeKeys,
  resolveStyleConfig,
  ring,
  scaleFadeConfig,
  scroll,
  shouldForwardProp,
  slideFadeConfig,
  space,
  styled,
  systemProps,
  textDecoration,
  theme,
  toCSSObject,
  toCSSVar,
  toVarDefinition,
  toVarReference,
  tokenToCSSVar,
  transform,
  transition,
  typography,
  useAccordion,
  useAccordionContext,
  useAccordionItem,
  useAccordionItemState,
  useAccordionStyles,
  useAlertStyles,
  useAnimationState,
  useAvatarStyles,
  useBoolean,
  useBreadcrumbStyles,
  useBreakpoint,
  useBreakpointValue,
  useButtonGroup,
  useCallbackRef3 as useCallbackRef,
  useCardStyles,
  useChakra,
  useCheckbox,
  useCheckboxGroup,
  useClipboard,
  useColorMode,
  useColorModePreference,
  useColorModeValue,
  useComponentStyles__unstable,
  useConst,
  useControllableProp,
  useControllableState2 as useControllableState,
  useCounter,
  useDimensions,
  useDisclosure,
  useDrawerContext,
  useEditable,
  useEditableContext,
  useEditableControls,
  useEditableState,
  useEditableStyles,
  useEnvironment,
  useEventListener2 as useEventListener,
  useEventListenerMap,
  useFocusEffect,
  useFocusOnHide,
  useFocusOnPointerDown2 as useFocusOnPointerDown,
  useFocusOnShow,
  useForceUpdate2 as useForceUpdate,
  useFormControl,
  useFormControlContext,
  useFormControlProps,
  useFormControlStyles,
  useFormErrorStyles,
  useHighlight,
  useId6 as useId,
  useIds,
  useImage,
  useInputGroupStyles,
  useInterval,
  useLatestRef,
  useListStyles,
  useMediaQuery,
  useMenu,
  useMenuButton,
  useMenuContext,
  useMenuDescendant,
  useMenuDescendants,
  useMenuDescendantsContext,
  useMenuItem,
  useMenuList,
  useMenuOption,
  useMenuOptionGroup,
  useMenuPositioner,
  useMenuState,
  useMenuStyles,
  useMergeRefs3 as useMergeRefs,
  useModal,
  useModalContext,
  useModalStyles,
  useMouseDownRef,
  useMultiStyleConfig,
  useNumberInput,
  useNumberInputStyles,
  useOptionalPart,
  useOutsideClick,
  usePanGesture,
  usePinInput,
  usePinInputContext,
  usePinInputField,
  usePointerEvent,
  usePopover,
  usePopoverContext,
  usePopoverStyles,
  usePopper,
  usePortalManager,
  usePrefersReducedMotion,
  usePrevious,
  useProgressStyles,
  useQuery,
  useRadio,
  useRadioGroup,
  useRadioGroupContext,
  useRangeSlider,
  useRangeSliderContext,
  useRangeSliderStyles,
  useSafeLayoutEffect3 as useSafeLayoutEffect,
  useShortcut,
  useSlider,
  useSliderContext,
  useSliderStyles,
  useStatStyles,
  useStyleConfig,
  useStyles,
  useTab,
  useTabIndicator,
  useTabList,
  useTabPanel,
  useTabPanels,
  useTableStyles,
  useTabs,
  useTabsContext,
  useTabsDescendant,
  useTabsDescendants,
  useTabsDescendantsContext,
  useTabsStyles,
  useTagStyles,
  useTheme,
  useTimeout2 as useTimeout,
  useToast,
  useToken,
  useTooltip,
  useUnmountEffect2 as useUnmountEffect,
  useUpdateEffect2 as useUpdateEffect,
  useWhyDidYouUpdate,
  visuallyHiddenStyle,
  withDefaultColorScheme,
  withDefaultProps,
  withDefaultSize,
  withDefaultVariant,
  withDelay
};
//# sourceMappingURL=@chakra-ui_react.js.map
