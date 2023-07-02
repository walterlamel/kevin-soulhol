function gS(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var yS =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function ya(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Iy = { exports: {} },
  Ul = {},
  Dy = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wa = Symbol.for("react.element"),
  wS = Symbol.for("react.portal"),
  xS = Symbol.for("react.fragment"),
  bS = Symbol.for("react.strict_mode"),
  SS = Symbol.for("react.profiler"),
  kS = Symbol.for("react.provider"),
  ES = Symbol.for("react.context"),
  CS = Symbol.for("react.forward_ref"),
  PS = Symbol.for("react.suspense"),
  TS = Symbol.for("react.memo"),
  jS = Symbol.for("react.lazy"),
  Qm = Symbol.iterator;
function OS(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qm && e[Qm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Vy = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Fy = Object.assign,
  zy = {};
function Bi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zy),
    (this.updater = n || Vy);
}
Bi.prototype.isReactComponent = {};
Bi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Bi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $y() {}
$y.prototype = Bi.prototype;
function zd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zy),
    (this.updater = n || Vy);
}
var $d = (zd.prototype = new $y());
$d.constructor = zd;
Fy($d, Bi.prototype);
$d.isPureReactComponent = !0;
var Jm = Array.isArray,
  Uy = Object.prototype.hasOwnProperty,
  Ud = { current: null },
  By = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wy(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Uy.call(t, r) && !By.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: wa,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: Ud.current,
  };
}
function AS(e, t) {
  return {
    $$typeof: wa,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Bd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === wa;
}
function _S(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Zm = /\/+/g;
function Hu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? _S("" + e.key)
    : t.toString(36);
}
function xs(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case wa:
          case wS:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + Hu(a, 0) : r),
      Jm(i)
        ? ((n = ""),
          e != null && (n = e.replace(Zm, "$&/") + "/"),
          xs(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Bd(i) &&
            (i = AS(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Zm, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Jm(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var l = r + Hu(o, s);
      a += xs(o, t, n, l, i);
    }
  else if (((l = OS(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + Hu(o, s++)), (a += xs(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function za(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    xs(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function NS(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var rt = { current: null },
  bs = { transition: null },
  MS = {
    ReactCurrentDispatcher: rt,
    ReactCurrentBatchConfig: bs,
    ReactCurrentOwner: Ud,
  };
G.Children = {
  map: za,
  forEach: function (e, t, n) {
    za(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      za(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      za(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Bd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
G.Component = Bi;
G.Fragment = xS;
G.Profiler = SS;
G.PureComponent = zd;
G.StrictMode = bS;
G.Suspense = PS;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = MS;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Fy({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = Ud.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      Uy.call(t, l) &&
        !By.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: wa, type: e.type, key: i, ref: o, props: r, _owner: a };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: ES,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: kS, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = Wy;
G.createFactory = function (e) {
  var t = Wy.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: CS, render: e };
};
G.isValidElement = Bd;
G.lazy = function (e) {
  return { $$typeof: jS, _payload: { _status: -1, _result: e }, _init: NS };
};
G.memo = function (e, t) {
  return { $$typeof: TS, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = bs.transition;
  bs.transition = {};
  try {
    e();
  } finally {
    bs.transition = t;
  }
};
G.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
G.useCallback = function (e, t) {
  return rt.current.useCallback(e, t);
};
G.useContext = function (e) {
  return rt.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return rt.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return rt.current.useEffect(e, t);
};
G.useId = function () {
  return rt.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return rt.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return rt.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return rt.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return rt.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return rt.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return rt.current.useRef(e);
};
G.useState = function (e) {
  return rt.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return rt.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return rt.current.useTransition();
};
G.version = "18.2.0";
Dy.exports = G;
var x = Dy.exports;
const Re = ya(x),
  Gc = gS({ __proto__: null, default: Re }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var RS = x,
  LS = Symbol.for("react.element"),
  IS = Symbol.for("react.fragment"),
  DS = Object.prototype.hasOwnProperty,
  VS = RS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  FS = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hy(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) DS.call(t, r) && !FS.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: LS,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: VS.current,
  };
}
Ul.Fragment = IS;
Ul.jsx = Hy;
Ul.jsxs = Hy;
Iy.exports = Ul;
var p = Iy.exports,
  Yc = {},
  Gy = { exports: {} },
  bt = {},
  Yy = { exports: {} },
  qy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, O) {
    var P = _.length;
    _.push(O);
    e: for (; 0 < P; ) {
      var M = (P - 1) >>> 1,
        B = _[M];
      if (0 < i(B, O)) (_[M] = O), (_[P] = B), (P = M);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var O = _[0],
      P = _.pop();
    if (P !== O) {
      _[0] = P;
      e: for (var M = 0, B = _.length, Qe = B >>> 1; M < Qe; ) {
        var Pe = 2 * (M + 1) - 1,
          Tn = _[Pe],
          ot = Pe + 1,
          pt = _[ot];
        if (0 > i(Tn, P))
          ot < B && 0 > i(pt, Tn)
            ? ((_[M] = pt), (_[ot] = P), (M = ot))
            : ((_[M] = Tn), (_[Pe] = P), (M = Pe));
        else if (ot < B && 0 > i(pt, P)) (_[M] = pt), (_[ot] = P), (M = ot);
        else break e;
      }
    }
    return O;
  }
  function i(_, O) {
    var P = _.sortIndex - O.sortIndex;
    return P !== 0 ? P : _.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    m = !1,
    h = !1,
    v = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    w = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(_) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= _)
        r(u), (O.sortIndex = O.expirationTime), t(l, O);
      else break;
      O = n(u);
    }
  }
  function S(_) {
    if (((v = !1), g(_), !h))
      if (n(l) !== null) (h = !0), J(k);
      else {
        var O = n(u);
        O !== null && De(S, O.startTime - _);
      }
  }
  function k(_, O) {
    (h = !1), v && ((v = !1), w(T), (T = -1)), (m = !0);
    var P = f;
    try {
      for (
        g(O), d = n(l);
        d !== null && (!(d.expirationTime > O) || (_ && !W()));

      ) {
        var M = d.callback;
        if (typeof M == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var B = M(d.expirationTime <= O);
          (O = e.unstable_now()),
            typeof B == "function" ? (d.callback = B) : d === n(l) && r(l),
            g(O);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Qe = !0;
      else {
        var Pe = n(u);
        Pe !== null && De(S, Pe.startTime - O), (Qe = !1);
      }
      return Qe;
    } finally {
      (d = null), (f = P), (m = !1);
    }
  }
  var E = !1,
    C = null,
    T = -1,
    L = 5,
    N = -1;
  function W() {
    return !(e.unstable_now() - N < L);
  }
  function $() {
    if (C !== null) {
      var _ = e.unstable_now();
      N = _;
      var O = !0;
      try {
        O = C(!0, _);
      } finally {
        O ? Y() : ((E = !1), (C = null));
      }
    } else E = !1;
  }
  var Y;
  if (typeof y == "function")
    Y = function () {
      y($);
    };
  else if (typeof MessageChannel < "u") {
    var je = new MessageChannel(),
      Ue = je.port2;
    (je.port1.onmessage = $),
      (Y = function () {
        Ue.postMessage(null);
      });
  } else
    Y = function () {
      b($, 0);
    };
  function J(_) {
    (C = _), E || ((E = !0), Y());
  }
  function De(_, O) {
    T = b(function () {
      _(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      h || m || ((h = !0), J(k));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (_) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = f;
      }
      var P = f;
      f = O;
      try {
        return _();
      } finally {
        f = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, O) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var P = f;
      f = _;
      try {
        return O();
      } finally {
        f = P;
      }
    }),
    (e.unstable_scheduleCallback = function (_, O, P) {
      var M = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? M + P : M))
          : (P = M),
        _)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = P + B),
        (_ = {
          id: c++,
          callback: O,
          priorityLevel: _,
          startTime: P,
          expirationTime: B,
          sortIndex: -1,
        }),
        P > M
          ? ((_.sortIndex = P),
            t(u, _),
            n(l) === null &&
              _ === n(u) &&
              (v ? (w(T), (T = -1)) : (v = !0), De(S, P - M)))
          : ((_.sortIndex = B), t(l, _), h || m || ((h = !0), J(k))),
        _
      );
    }),
    (e.unstable_shouldYield = W),
    (e.unstable_wrapCallback = function (_) {
      var O = f;
      return function () {
        var P = f;
        f = O;
        try {
          return _.apply(this, arguments);
        } finally {
          f = P;
        }
      };
    });
})(qy);
Yy.exports = qy;
var zS = Yy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ky = x,
  yt = zS;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Xy = new Set(),
  Fo = {};
function Ur(e, t) {
  Ni(e, t), Ni(e + "Capture", t);
}
function Ni(e, t) {
  for (Fo[e] = t, e = 0; e < t.length; e++) Xy.add(t[e]);
}
var hn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  qc = Object.prototype.hasOwnProperty,
  $S =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  eh = {},
  th = {};
function US(e) {
  return qc.call(th, e)
    ? !0
    : qc.call(eh, e)
    ? !1
    : $S.test(e)
    ? (th[e] = !0)
    : ((eh[e] = !0), !1);
}
function BS(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function WS(e, t, n, r) {
  if (t === null || typeof t > "u" || BS(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function it(e, t, n, r, i, o, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var $e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    $e[e] = new it(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  $e[t] = new it(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  $e[e] = new it(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  $e[e] = new it(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    $e[e] = new it(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  $e[e] = new it(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  $e[e] = new it(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  $e[e] = new it(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  $e[e] = new it(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wd = /[\-:]([a-z])/g;
function Hd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wd, Hd);
    $e[t] = new it(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wd, Hd);
    $e[t] = new it(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Wd, Hd);
  $e[t] = new it(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  $e[e] = new it(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$e.xlinkHref = new it(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  $e[e] = new it(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gd(e, t, n, r) {
  var i = $e.hasOwnProperty(t) ? $e[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (WS(t, n, i, r) && (n = null),
    r || i === null
      ? US(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Cn = Ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  $a = Symbol.for("react.element"),
  ei = Symbol.for("react.portal"),
  ti = Symbol.for("react.fragment"),
  Yd = Symbol.for("react.strict_mode"),
  Kc = Symbol.for("react.profiler"),
  Qy = Symbol.for("react.provider"),
  Jy = Symbol.for("react.context"),
  qd = Symbol.for("react.forward_ref"),
  Xc = Symbol.for("react.suspense"),
  Qc = Symbol.for("react.suspense_list"),
  Kd = Symbol.for("react.memo"),
  Ln = Symbol.for("react.lazy"),
  Zy = Symbol.for("react.offscreen"),
  nh = Symbol.iterator;
function eo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (nh && e[nh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ye = Object.assign,
  Gu;
function mo(e) {
  if (Gu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Gu = (t && t[1]) || "";
    }
  return (
    `
` +
    Gu +
    e
  );
}
var Yu = !1;
function qu(e, t) {
  if (!e || Yu) return "";
  Yu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          a = i.length - 1,
          s = o.length - 1;
        1 <= a && 0 <= s && i[a] !== o[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (i[a] !== o[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || i[a] !== o[s])) {
                var l =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (Yu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? mo(e) : "";
}
function HS(e) {
  switch (e.tag) {
    case 5:
      return mo(e.type);
    case 16:
      return mo("Lazy");
    case 13:
      return mo("Suspense");
    case 19:
      return mo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = qu(e.type, !1)), e;
    case 11:
      return (e = qu(e.type.render, !1)), e;
    case 1:
      return (e = qu(e.type, !0)), e;
    default:
      return "";
  }
}
function Jc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ti:
      return "Fragment";
    case ei:
      return "Portal";
    case Kc:
      return "Profiler";
    case Yd:
      return "StrictMode";
    case Xc:
      return "Suspense";
    case Qc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Jy:
        return (e.displayName || "Context") + ".Consumer";
      case Qy:
        return (e._context.displayName || "Context") + ".Provider";
      case qd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Kd:
        return (
          (t = e.displayName || null), t !== null ? t : Jc(e.type) || "Memo"
        );
      case Ln:
        (t = e._payload), (e = e._init);
        try {
          return Jc(e(t));
        } catch {}
    }
  return null;
}
function GS(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Jc(t);
    case 8:
      return t === Yd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ir(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function e0(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function YS(e) {
  var t = e0(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = "" + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ua(e) {
  e._valueTracker || (e._valueTracker = YS(e));
}
function t0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = e0(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function $s(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Zc(e, t) {
  var n = t.checked;
  return ye({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function rh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ir(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function n0(e, t) {
  (t = t.checked), t != null && Gd(e, "checked", t, !1);
}
function ef(e, t) {
  n0(e, t);
  var n = ir(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? tf(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && tf(e, t.type, ir(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ih(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function tf(e, t, n) {
  (t !== "number" || $s(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ho = Array.isArray;
function yi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ir(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function nf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return ye({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function oh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (ho(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ir(n) };
}
function r0(e, t) {
  var n = ir(t.value),
    r = ir(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ah(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function i0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function rf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? i0(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ba,
  o0 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ba = Ba || document.createElement("div"),
          Ba.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ba.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function zo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  qS = ["Webkit", "ms", "Moz", "O"];
Object.keys(xo).forEach(function (e) {
  qS.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xo[t] = xo[e]);
  });
});
function a0(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (xo.hasOwnProperty(e) && xo[e])
    ? ("" + t).trim()
    : t + "px";
}
function s0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = a0(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var KS = ye(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function of(e, t) {
  if (t) {
    if (KS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function af(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var sf = null;
function Xd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var lf = null,
  wi = null,
  xi = null;
function sh(e) {
  if ((e = Sa(e))) {
    if (typeof lf != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = Yl(t)), lf(e.stateNode, e.type, t));
  }
}
function l0(e) {
  wi ? (xi ? xi.push(e) : (xi = [e])) : (wi = e);
}
function u0() {
  if (wi) {
    var e = wi,
      t = xi;
    if (((xi = wi = null), sh(e), t)) for (e = 0; e < t.length; e++) sh(t[e]);
  }
}
function c0(e, t) {
  return e(t);
}
function f0() {}
var Ku = !1;
function d0(e, t, n) {
  if (Ku) return e(t, n);
  Ku = !0;
  try {
    return c0(e, t, n);
  } finally {
    (Ku = !1), (wi !== null || xi !== null) && (f0(), u0());
  }
}
function $o(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Yl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var uf = !1;
if (hn)
  try {
    var to = {};
    Object.defineProperty(to, "passive", {
      get: function () {
        uf = !0;
      },
    }),
      window.addEventListener("test", to, to),
      window.removeEventListener("test", to, to);
  } catch {
    uf = !1;
  }
function XS(e, t, n, r, i, o, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var bo = !1,
  Us = null,
  Bs = !1,
  cf = null,
  QS = {
    onError: function (e) {
      (bo = !0), (Us = e);
    },
  };
function JS(e, t, n, r, i, o, a, s, l) {
  (bo = !1), (Us = null), XS.apply(QS, arguments);
}
function ZS(e, t, n, r, i, o, a, s, l) {
  if ((JS.apply(this, arguments), bo)) {
    if (bo) {
      var u = Us;
      (bo = !1), (Us = null);
    } else throw Error(j(198));
    Bs || ((Bs = !0), (cf = u));
  }
}
function Br(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function p0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function lh(e) {
  if (Br(e) !== e) throw Error(j(188));
}
function ek(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Br(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return lh(i), e;
        if (o === r) return lh(i), t;
        o = o.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var a = !1, s = i.child; s; ) {
        if (s === n) {
          (a = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (a = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = o.child; s; ) {
          if (s === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function m0(e) {
  return (e = ek(e)), e !== null ? h0(e) : null;
}
function h0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = h0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var v0 = yt.unstable_scheduleCallback,
  uh = yt.unstable_cancelCallback,
  tk = yt.unstable_shouldYield,
  nk = yt.unstable_requestPaint,
  Ee = yt.unstable_now,
  rk = yt.unstable_getCurrentPriorityLevel,
  Qd = yt.unstable_ImmediatePriority,
  g0 = yt.unstable_UserBlockingPriority,
  Ws = yt.unstable_NormalPriority,
  ik = yt.unstable_LowPriority,
  y0 = yt.unstable_IdlePriority,
  Bl = null,
  tn = null;
function ok(e) {
  if (tn && typeof tn.onCommitFiberRoot == "function")
    try {
      tn.onCommitFiberRoot(Bl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Wt = Math.clz32 ? Math.clz32 : lk,
  ak = Math.log,
  sk = Math.LN2;
function lk(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ak(e) / sk) | 0)) | 0;
}
var Wa = 64,
  Ha = 4194304;
function vo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Hs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~i;
    s !== 0 ? (r = vo(s)) : ((o &= a), o !== 0 && (r = vo(o)));
  } else (a = n & ~i), a !== 0 ? (r = vo(a)) : o !== 0 && (r = vo(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Wt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function uk(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ck(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - Wt(o),
      s = 1 << a,
      l = i[a];
    l === -1
      ? (!(s & n) || s & r) && (i[a] = uk(s, t))
      : l <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function ff(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function w0() {
  var e = Wa;
  return (Wa <<= 1), !(Wa & 4194240) && (Wa = 64), e;
}
function Xu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function xa(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Wt(t)),
    (e[t] = n);
}
function fk(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Wt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Jd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Wt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var te = 0;
function x0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var b0,
  Zd,
  S0,
  k0,
  E0,
  df = !1,
  Ga = [],
  qn = null,
  Kn = null,
  Xn = null,
  Uo = new Map(),
  Bo = new Map(),
  Vn = [],
  dk =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ch(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      qn = null;
      break;
    case "dragenter":
    case "dragleave":
      Kn = null;
      break;
    case "mouseover":
    case "mouseout":
      Xn = null;
      break;
    case "pointerover":
    case "pointerout":
      Uo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Bo.delete(t.pointerId);
  }
}
function no(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Sa(t)), t !== null && Zd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function pk(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (qn = no(qn, e, t, n, r, i)), !0;
    case "dragenter":
      return (Kn = no(Kn, e, t, n, r, i)), !0;
    case "mouseover":
      return (Xn = no(Xn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Uo.set(o, no(Uo.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Bo.set(o, no(Bo.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function C0(e) {
  var t = Er(e.target);
  if (t !== null) {
    var n = Br(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = p0(n)), t !== null)) {
          (e.blockedOn = t),
            E0(e.priority, function () {
              S0(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ss(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (sf = r), n.target.dispatchEvent(r), (sf = null);
    } else return (t = Sa(n)), t !== null && Zd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function fh(e, t, n) {
  Ss(e) && n.delete(t);
}
function mk() {
  (df = !1),
    qn !== null && Ss(qn) && (qn = null),
    Kn !== null && Ss(Kn) && (Kn = null),
    Xn !== null && Ss(Xn) && (Xn = null),
    Uo.forEach(fh),
    Bo.forEach(fh);
}
function ro(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    df ||
      ((df = !0),
      yt.unstable_scheduleCallback(yt.unstable_NormalPriority, mk)));
}
function Wo(e) {
  function t(i) {
    return ro(i, e);
  }
  if (0 < Ga.length) {
    ro(Ga[0], e);
    for (var n = 1; n < Ga.length; n++) {
      var r = Ga[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    qn !== null && ro(qn, e),
      Kn !== null && ro(Kn, e),
      Xn !== null && ro(Xn, e),
      Uo.forEach(t),
      Bo.forEach(t),
      n = 0;
    n < Vn.length;
    n++
  )
    (r = Vn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vn.length && ((n = Vn[0]), n.blockedOn === null); )
    C0(n), n.blockedOn === null && Vn.shift();
}
var bi = Cn.ReactCurrentBatchConfig,
  Gs = !0;
function hk(e, t, n, r) {
  var i = te,
    o = bi.transition;
  bi.transition = null;
  try {
    (te = 1), ep(e, t, n, r);
  } finally {
    (te = i), (bi.transition = o);
  }
}
function vk(e, t, n, r) {
  var i = te,
    o = bi.transition;
  bi.transition = null;
  try {
    (te = 4), ep(e, t, n, r);
  } finally {
    (te = i), (bi.transition = o);
  }
}
function ep(e, t, n, r) {
  if (Gs) {
    var i = pf(e, t, n, r);
    if (i === null) ac(e, t, r, Ys, n), ch(e, r);
    else if (pk(i, e, t, n, r)) r.stopPropagation();
    else if ((ch(e, r), t & 4 && -1 < dk.indexOf(e))) {
      for (; i !== null; ) {
        var o = Sa(i);
        if (
          (o !== null && b0(o),
          (o = pf(e, t, n, r)),
          o === null && ac(e, t, r, Ys, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else ac(e, t, r, null, n);
  }
}
var Ys = null;
function pf(e, t, n, r) {
  if (((Ys = null), (e = Xd(r)), (e = Er(e)), e !== null))
    if (((t = Br(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = p0(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ys = e), null;
}
function P0(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (rk()) {
        case Qd:
          return 1;
        case g0:
          return 4;
        case Ws:
        case ik:
          return 16;
        case y0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $n = null,
  tp = null,
  ks = null;
function T0() {
  if (ks) return ks;
  var e,
    t = tp,
    n = t.length,
    r,
    i = "value" in $n ? $n.value : $n.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (ks = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Es(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ya() {
  return !0;
}
function dh() {
  return !1;
}
function St(e) {
  function t(n, r, i, o, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ya
        : dh),
      (this.isPropagationStopped = dh),
      this
    );
  }
  return (
    ye(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ya));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ya));
      },
      persist: function () {},
      isPersistent: Ya,
    }),
    t
  );
}
var Wi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  np = St(Wi),
  ba = ye({}, Wi, { view: 0, detail: 0 }),
  gk = St(ba),
  Qu,
  Ju,
  io,
  Wl = ye({}, ba, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: rp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== io &&
            (io && e.type === "mousemove"
              ? ((Qu = e.screenX - io.screenX), (Ju = e.screenY - io.screenY))
              : (Ju = Qu = 0),
            (io = e)),
          Qu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ju;
    },
  }),
  ph = St(Wl),
  yk = ye({}, Wl, { dataTransfer: 0 }),
  wk = St(yk),
  xk = ye({}, ba, { relatedTarget: 0 }),
  Zu = St(xk),
  bk = ye({}, Wi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sk = St(bk),
  kk = ye({}, Wi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ek = St(kk),
  Ck = ye({}, Wi, { data: 0 }),
  mh = St(Ck),
  Pk = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Tk = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  jk = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ok(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = jk[e]) ? !!t[e] : !1;
}
function rp() {
  return Ok;
}
var Ak = ye({}, ba, {
    key: function (e) {
      if (e.key) {
        var t = Pk[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Es(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Tk[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: rp,
    charCode: function (e) {
      return e.type === "keypress" ? Es(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Es(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  _k = St(Ak),
  Nk = ye({}, Wl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  hh = St(Nk),
  Mk = ye({}, ba, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: rp,
  }),
  Rk = St(Mk),
  Lk = ye({}, Wi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ik = St(Lk),
  Dk = ye({}, Wl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Vk = St(Dk),
  Fk = [9, 13, 27, 32],
  ip = hn && "CompositionEvent" in window,
  So = null;
hn && "documentMode" in document && (So = document.documentMode);
var zk = hn && "TextEvent" in window && !So,
  j0 = hn && (!ip || (So && 8 < So && 11 >= So)),
  vh = String.fromCharCode(32),
  gh = !1;
function O0(e, t) {
  switch (e) {
    case "keyup":
      return Fk.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function A0(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ni = !1;
function $k(e, t) {
  switch (e) {
    case "compositionend":
      return A0(t);
    case "keypress":
      return t.which !== 32 ? null : ((gh = !0), vh);
    case "textInput":
      return (e = t.data), e === vh && gh ? null : e;
    default:
      return null;
  }
}
function Uk(e, t) {
  if (ni)
    return e === "compositionend" || (!ip && O0(e, t))
      ? ((e = T0()), (ks = tp = $n = null), (ni = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return j0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Bk = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function yh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Bk[e.type] : t === "textarea";
}
function _0(e, t, n, r) {
  l0(r),
    (t = qs(t, "onChange")),
    0 < t.length &&
      ((n = new np("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ko = null,
  Ho = null;
function Wk(e) {
  U0(e, 0);
}
function Hl(e) {
  var t = oi(e);
  if (t0(t)) return e;
}
function Hk(e, t) {
  if (e === "change") return t;
}
var N0 = !1;
if (hn) {
  var ec;
  if (hn) {
    var tc = "oninput" in document;
    if (!tc) {
      var wh = document.createElement("div");
      wh.setAttribute("oninput", "return;"),
        (tc = typeof wh.oninput == "function");
    }
    ec = tc;
  } else ec = !1;
  N0 = ec && (!document.documentMode || 9 < document.documentMode);
}
function xh() {
  ko && (ko.detachEvent("onpropertychange", M0), (Ho = ko = null));
}
function M0(e) {
  if (e.propertyName === "value" && Hl(Ho)) {
    var t = [];
    _0(t, Ho, e, Xd(e)), d0(Wk, t);
  }
}
function Gk(e, t, n) {
  e === "focusin"
    ? (xh(), (ko = t), (Ho = n), ko.attachEvent("onpropertychange", M0))
    : e === "focusout" && xh();
}
function Yk(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Hl(Ho);
}
function qk(e, t) {
  if (e === "click") return Hl(t);
}
function Kk(e, t) {
  if (e === "input" || e === "change") return Hl(t);
}
function Xk(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Yt = typeof Object.is == "function" ? Object.is : Xk;
function Go(e, t) {
  if (Yt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!qc.call(t, i) || !Yt(e[i], t[i])) return !1;
  }
  return !0;
}
function bh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Sh(e, t) {
  var n = bh(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = bh(n);
  }
}
function R0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? R0(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function L0() {
  for (var e = window, t = $s(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = $s(e.document);
  }
  return t;
}
function op(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Qk(e) {
  var t = L0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    R0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && op(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Sh(n, o));
        var a = Sh(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Jk = hn && "documentMode" in document && 11 >= document.documentMode,
  ri = null,
  mf = null,
  Eo = null,
  hf = !1;
function kh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  hf ||
    ri == null ||
    ri !== $s(r) ||
    ((r = ri),
    "selectionStart" in r && op(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Eo && Go(Eo, r)) ||
      ((Eo = r),
      (r = qs(mf, "onSelect")),
      0 < r.length &&
        ((t = new np("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ri))));
}
function qa(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ii = {
    animationend: qa("Animation", "AnimationEnd"),
    animationiteration: qa("Animation", "AnimationIteration"),
    animationstart: qa("Animation", "AnimationStart"),
    transitionend: qa("Transition", "TransitionEnd"),
  },
  nc = {},
  I0 = {};
hn &&
  ((I0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ii.animationend.animation,
    delete ii.animationiteration.animation,
    delete ii.animationstart.animation),
  "TransitionEvent" in window || delete ii.transitionend.transition);
function Gl(e) {
  if (nc[e]) return nc[e];
  if (!ii[e]) return e;
  var t = ii[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in I0) return (nc[e] = t[n]);
  return e;
}
var D0 = Gl("animationend"),
  V0 = Gl("animationiteration"),
  F0 = Gl("animationstart"),
  z0 = Gl("transitionend"),
  $0 = new Map(),
  Eh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function dr(e, t) {
  $0.set(e, t), Ur(t, [e]);
}
for (var rc = 0; rc < Eh.length; rc++) {
  var ic = Eh[rc],
    Zk = ic.toLowerCase(),
    eE = ic[0].toUpperCase() + ic.slice(1);
  dr(Zk, "on" + eE);
}
dr(D0, "onAnimationEnd");
dr(V0, "onAnimationIteration");
dr(F0, "onAnimationStart");
dr("dblclick", "onDoubleClick");
dr("focusin", "onFocus");
dr("focusout", "onBlur");
dr(z0, "onTransitionEnd");
Ni("onMouseEnter", ["mouseout", "mouseover"]);
Ni("onMouseLeave", ["mouseout", "mouseover"]);
Ni("onPointerEnter", ["pointerout", "pointerover"]);
Ni("onPointerLeave", ["pointerout", "pointerover"]);
Ur(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ur(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ur("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ur(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ur(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ur(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var go =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  tE = new Set("cancel close invalid load scroll toggle".split(" ").concat(go));
function Ch(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ZS(r, t, void 0, e), (e.currentTarget = null);
}
function U0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== o && i.isPropagationStopped())) break e;
          Ch(i, s, u), (o = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Ch(i, s, u), (o = l);
        }
    }
  }
  if (Bs) throw ((e = cf), (Bs = !1), (cf = null), e);
}
function ce(e, t) {
  var n = t[xf];
  n === void 0 && (n = t[xf] = new Set());
  var r = e + "__bubble";
  n.has(r) || (B0(t, e, 2, !1), n.add(r));
}
function oc(e, t, n) {
  var r = 0;
  t && (r |= 4), B0(n, e, r, t);
}
var Ka = "_reactListening" + Math.random().toString(36).slice(2);
function Yo(e) {
  if (!e[Ka]) {
    (e[Ka] = !0),
      Xy.forEach(function (n) {
        n !== "selectionchange" && (tE.has(n) || oc(n, !1, e), oc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ka] || ((t[Ka] = !0), oc("selectionchange", !1, t));
  }
}
function B0(e, t, n, r) {
  switch (P0(t)) {
    case 1:
      var i = hk;
      break;
    case 4:
      i = vk;
      break;
    default:
      i = ep;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !uf ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ac(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = Er(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = o = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  d0(function () {
    var u = o,
      c = Xd(n),
      d = [];
    e: {
      var f = $0.get(e);
      if (f !== void 0) {
        var m = np,
          h = e;
        switch (e) {
          case "keypress":
            if (Es(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = _k;
            break;
          case "focusin":
            (h = "focus"), (m = Zu);
            break;
          case "focusout":
            (h = "blur"), (m = Zu);
            break;
          case "beforeblur":
          case "afterblur":
            m = Zu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = ph;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = wk;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Rk;
            break;
          case D0:
          case V0:
          case F0:
            m = Sk;
            break;
          case z0:
            m = Ik;
            break;
          case "scroll":
            m = gk;
            break;
          case "wheel":
            m = Vk;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Ek;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = hh;
        }
        var v = (t & 4) !== 0,
          b = !v && e === "scroll",
          w = v ? (f !== null ? f + "Capture" : null) : f;
        v = [];
        for (var y = u, g; y !== null; ) {
          g = y;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              w !== null && ((S = $o(y, w)), S != null && v.push(qo(y, S, g)))),
            b)
          )
            break;
          y = y.return;
        }
        0 < v.length &&
          ((f = new m(f, h, null, n, c)), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          f &&
            n !== sf &&
            (h = n.relatedTarget || n.fromElement) &&
            (Er(h) || h[vn]))
        )
          break e;
        if (
          (m || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          m
            ? ((h = n.relatedTarget || n.toElement),
              (m = u),
              (h = h ? Er(h) : null),
              h !== null &&
                ((b = Br(h)), h !== b || (h.tag !== 5 && h.tag !== 6)) &&
                (h = null))
            : ((m = null), (h = u)),
          m !== h)
        ) {
          if (
            ((v = ph),
            (S = "onMouseLeave"),
            (w = "onMouseEnter"),
            (y = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = hh),
              (S = "onPointerLeave"),
              (w = "onPointerEnter"),
              (y = "pointer")),
            (b = m == null ? f : oi(m)),
            (g = h == null ? f : oi(h)),
            (f = new v(S, y + "leave", m, n, c)),
            (f.target = b),
            (f.relatedTarget = g),
            (S = null),
            Er(c) === u &&
              ((v = new v(w, y + "enter", h, n, c)),
              (v.target = g),
              (v.relatedTarget = b),
              (S = v)),
            (b = S),
            m && h)
          )
            t: {
              for (v = m, w = h, y = 0, g = v; g; g = qr(g)) y++;
              for (g = 0, S = w; S; S = qr(S)) g++;
              for (; 0 < y - g; ) (v = qr(v)), y--;
              for (; 0 < g - y; ) (w = qr(w)), g--;
              for (; y--; ) {
                if (v === w || (w !== null && v === w.alternate)) break t;
                (v = qr(v)), (w = qr(w));
              }
              v = null;
            }
          else v = null;
          m !== null && Ph(d, f, m, v, !1),
            h !== null && b !== null && Ph(d, b, h, v, !0);
        }
      }
      e: {
        if (
          ((f = u ? oi(u) : window),
          (m = f.nodeName && f.nodeName.toLowerCase()),
          m === "select" || (m === "input" && f.type === "file"))
        )
          var k = Hk;
        else if (yh(f))
          if (N0) k = Kk;
          else {
            k = Yk;
            var E = Gk;
          }
        else
          (m = f.nodeName) &&
            m.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (k = qk);
        if (k && (k = k(e, u))) {
          _0(d, k, n, c);
          break e;
        }
        E && E(e, f, u),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            tf(f, "number", f.value);
      }
      switch (((E = u ? oi(u) : window), e)) {
        case "focusin":
          (yh(E) || E.contentEditable === "true") &&
            ((ri = E), (mf = u), (Eo = null));
          break;
        case "focusout":
          Eo = mf = ri = null;
          break;
        case "mousedown":
          hf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (hf = !1), kh(d, n, c);
          break;
        case "selectionchange":
          if (Jk) break;
        case "keydown":
        case "keyup":
          kh(d, n, c);
      }
      var C;
      if (ip)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        ni
          ? O0(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (j0 &&
          n.locale !== "ko" &&
          (ni || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && ni && (C = T0())
            : (($n = c),
              (tp = "value" in $n ? $n.value : $n.textContent),
              (ni = !0))),
        (E = qs(u, T)),
        0 < E.length &&
          ((T = new mh(T, e, null, n, c)),
          d.push({ event: T, listeners: E }),
          C ? (T.data = C) : ((C = A0(n)), C !== null && (T.data = C)))),
        (C = zk ? $k(e, n) : Uk(e, n)) &&
          ((u = qs(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new mh("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    U0(d, t);
  });
}
function qo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = $o(e, n)),
      o != null && r.unshift(qo(e, o, i)),
      (o = $o(e, t)),
      o != null && r.push(qo(e, o, i))),
      (e = e.return);
  }
  return r;
}
function qr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ph(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((l = $o(n, o)), l != null && a.unshift(qo(n, l, s)))
        : i || ((l = $o(n, o)), l != null && a.push(qo(n, l, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var nE = /\r\n?/g,
  rE = /\u0000|\uFFFD/g;
function Th(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      nE,
      `
`
    )
    .replace(rE, "");
}
function Xa(e, t, n) {
  if (((t = Th(t)), Th(e) !== t && n)) throw Error(j(425));
}
function Ks() {}
var vf = null,
  gf = null;
function yf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var wf = typeof setTimeout == "function" ? setTimeout : void 0,
  iE = typeof clearTimeout == "function" ? clearTimeout : void 0,
  jh = typeof Promise == "function" ? Promise : void 0,
  oE =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof jh < "u"
      ? function (e) {
          return jh.resolve(null).then(e).catch(aE);
        }
      : wf;
function aE(e) {
  setTimeout(function () {
    throw e;
  });
}
function sc(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Wo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Wo(t);
}
function Qn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Oh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Hi = Math.random().toString(36).slice(2),
  Jt = "__reactFiber$" + Hi,
  Ko = "__reactProps$" + Hi,
  vn = "__reactContainer$" + Hi,
  xf = "__reactEvents$" + Hi,
  sE = "__reactListeners$" + Hi,
  lE = "__reactHandles$" + Hi;
function Er(e) {
  var t = e[Jt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[vn] || n[Jt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Oh(e); e !== null; ) {
          if ((n = e[Jt])) return n;
          e = Oh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Sa(e) {
  return (
    (e = e[Jt] || e[vn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function oi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Yl(e) {
  return e[Ko] || null;
}
var bf = [],
  ai = -1;
function pr(e) {
  return { current: e };
}
function de(e) {
  0 > ai || ((e.current = bf[ai]), (bf[ai] = null), ai--);
}
function ae(e, t) {
  ai++, (bf[ai] = e.current), (e.current = t);
}
var or = {},
  Ke = pr(or),
  lt = pr(!1),
  Nr = or;
function Mi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return or;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ut(e) {
  return (e = e.childContextTypes), e != null;
}
function Xs() {
  de(lt), de(Ke);
}
function Ah(e, t, n) {
  if (Ke.current !== or) throw Error(j(168));
  ae(Ke, t), ae(lt, n);
}
function W0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(j(108, GS(e) || "Unknown", i));
  return ye({}, n, r);
}
function Qs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || or),
    (Nr = Ke.current),
    ae(Ke, e),
    ae(lt, lt.current),
    !0
  );
}
function _h(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = W0(e, t, Nr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      de(lt),
      de(Ke),
      ae(Ke, e))
    : de(lt),
    ae(lt, n);
}
var cn = null,
  ql = !1,
  lc = !1;
function H0(e) {
  cn === null ? (cn = [e]) : cn.push(e);
}
function uE(e) {
  (ql = !0), H0(e);
}
function mr() {
  if (!lc && cn !== null) {
    lc = !0;
    var e = 0,
      t = te;
    try {
      var n = cn;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (cn = null), (ql = !1);
    } catch (i) {
      throw (cn !== null && (cn = cn.slice(e + 1)), v0(Qd, mr), i);
    } finally {
      (te = t), (lc = !1);
    }
  }
  return null;
}
var si = [],
  li = 0,
  Js = null,
  Zs = 0,
  Tt = [],
  jt = 0,
  Mr = null,
  fn = 1,
  dn = "";
function br(e, t) {
  (si[li++] = Zs), (si[li++] = Js), (Js = e), (Zs = t);
}
function G0(e, t, n) {
  (Tt[jt++] = fn), (Tt[jt++] = dn), (Tt[jt++] = Mr), (Mr = e);
  var r = fn;
  e = dn;
  var i = 32 - Wt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Wt(t) + i;
  if (30 < o) {
    var a = i - (i % 5);
    (o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (fn = (1 << (32 - Wt(t) + i)) | (n << i) | r),
      (dn = o + e);
  } else (fn = (1 << o) | (n << i) | r), (dn = e);
}
function ap(e) {
  e.return !== null && (br(e, 1), G0(e, 1, 0));
}
function sp(e) {
  for (; e === Js; )
    (Js = si[--li]), (si[li] = null), (Zs = si[--li]), (si[li] = null);
  for (; e === Mr; )
    (Mr = Tt[--jt]),
      (Tt[jt] = null),
      (dn = Tt[--jt]),
      (Tt[jt] = null),
      (fn = Tt[--jt]),
      (Tt[jt] = null);
}
var gt = null,
  vt = null,
  he = !1,
  zt = null;
function Y0(e, t) {
  var n = Ot(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Nh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (gt = e), (vt = Qn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (gt = e), (vt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Mr !== null ? { id: fn, overflow: dn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ot(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (gt = e),
            (vt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Sf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function kf(e) {
  if (he) {
    var t = vt;
    if (t) {
      var n = t;
      if (!Nh(e, t)) {
        if (Sf(e)) throw Error(j(418));
        t = Qn(n.nextSibling);
        var r = gt;
        t && Nh(e, t)
          ? Y0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (he = !1), (gt = e));
      }
    } else {
      if (Sf(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (he = !1), (gt = e);
    }
  }
}
function Mh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  gt = e;
}
function Qa(e) {
  if (e !== gt) return !1;
  if (!he) return Mh(e), (he = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !yf(e.type, e.memoizedProps))),
    t && (t = vt))
  ) {
    if (Sf(e)) throw (q0(), Error(j(418)));
    for (; t; ) Y0(e, t), (t = Qn(t.nextSibling));
  }
  if ((Mh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              vt = Qn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      vt = null;
    }
  } else vt = gt ? Qn(e.stateNode.nextSibling) : null;
  return !0;
}
function q0() {
  for (var e = vt; e; ) e = Qn(e.nextSibling);
}
function Ri() {
  (vt = gt = null), (he = !1);
}
function lp(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
var cE = Cn.ReactCurrentBatchConfig;
function Vt(e, t) {
  if (e && e.defaultProps) {
    (t = ye({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var el = pr(null),
  tl = null,
  ui = null,
  up = null;
function cp() {
  up = ui = tl = null;
}
function fp(e) {
  var t = el.current;
  de(el), (e._currentValue = t);
}
function Ef(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Si(e, t) {
  (tl = e),
    (up = ui = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (st = !0), (e.firstContext = null));
}
function _t(e) {
  var t = e._currentValue;
  if (up !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ui === null)) {
      if (tl === null) throw Error(j(308));
      (ui = e), (tl.dependencies = { lanes: 0, firstContext: e });
    } else ui = ui.next = e;
  return t;
}
var Cr = null;
function dp(e) {
  Cr === null ? (Cr = [e]) : Cr.push(e);
}
function K0(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), dp(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    gn(e, r)
  );
}
function gn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var In = !1;
function pp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function X0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function pn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Jn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      gn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), dp(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    gn(e, n)
  );
}
function Cs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jd(e, n);
  }
}
function Rh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = a) : (o = o.next = a), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function nl(e, t, n, r) {
  var i = e.updateQueue;
  In = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (o = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = i.baseState;
    (a = 0), (c = u = l = null), (s = o);
    do {
      var f = s.lane,
        m = s.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var h = e,
            v = s;
          switch (((f = t), (m = n), v.tag)) {
            case 1:
              if (((h = v.payload), typeof h == "function")) {
                d = h.call(m, d, f);
                break e;
              }
              d = h;
              break e;
            case 3:
              h.flags = (h.flags & -65537) | 128;
            case 0:
              if (
                ((h = v.payload),
                (f = typeof h == "function" ? h.call(m, d, f) : h),
                f == null)
              )
                break e;
              d = ye({}, d, f);
              break e;
            case 2:
              In = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [s]) : f.push(s));
      } else
        (m = {
          eventTime: m,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (l = d)) : (c = c.next = m),
          (a |= f);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Lr |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function Lh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(j(191, i));
        i.call(r);
      }
    }
}
var Q0 = new Ky.Component().refs;
function Cf(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ye({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Kl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Br(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = tt(),
      i = er(e),
      o = pn(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Jn(e, o, i)),
      t !== null && (Ht(t, e, i, r), Cs(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = tt(),
      i = er(e),
      o = pn(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Jn(e, o, i)),
      t !== null && (Ht(t, e, i, r), Cs(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = tt(),
      r = er(e),
      i = pn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Jn(e, i, r)),
      t !== null && (Ht(t, e, r, n), Cs(t, e, r));
  },
};
function Ih(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Go(n, r) || !Go(i, o)
      : !0
  );
}
function J0(e, t, n) {
  var r = !1,
    i = or,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = _t(o))
      : ((i = ut(t) ? Nr : Ke.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Mi(e, i) : or)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Kl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Dh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Kl.enqueueReplaceState(t, t.state, null);
}
function Pf(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Q0), pp(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = _t(o))
    : ((o = ut(t) ? Nr : Ke.current), (i.context = Mi(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Cf(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Kl.enqueueReplaceState(i, i.state, null),
      nl(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function oo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var s = i.refs;
            s === Q0 && (s = i.refs = {}),
              a === null ? delete s[o] : (s[o] = a);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function Ja(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Vh(e) {
  var t = e._init;
  return t(e._payload);
}
function Z0(e) {
  function t(w, y) {
    if (e) {
      var g = w.deletions;
      g === null ? ((w.deletions = [y]), (w.flags |= 16)) : g.push(y);
    }
  }
  function n(w, y) {
    if (!e) return null;
    for (; y !== null; ) t(w, y), (y = y.sibling);
    return null;
  }
  function r(w, y) {
    for (w = new Map(); y !== null; )
      y.key !== null ? w.set(y.key, y) : w.set(y.index, y), (y = y.sibling);
    return w;
  }
  function i(w, y) {
    return (w = tr(w, y)), (w.index = 0), (w.sibling = null), w;
  }
  function o(w, y, g) {
    return (
      (w.index = g),
      e
        ? ((g = w.alternate),
          g !== null
            ? ((g = g.index), g < y ? ((w.flags |= 2), y) : g)
            : ((w.flags |= 2), y))
        : ((w.flags |= 1048576), y)
    );
  }
  function a(w) {
    return e && w.alternate === null && (w.flags |= 2), w;
  }
  function s(w, y, g, S) {
    return y === null || y.tag !== 6
      ? ((y = hc(g, w.mode, S)), (y.return = w), y)
      : ((y = i(y, g)), (y.return = w), y);
  }
  function l(w, y, g, S) {
    var k = g.type;
    return k === ti
      ? c(w, y, g.props.children, S, g.key)
      : y !== null &&
        (y.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Ln &&
            Vh(k) === y.type))
      ? ((S = i(y, g.props)), (S.ref = oo(w, y, g)), (S.return = w), S)
      : ((S = _s(g.type, g.key, g.props, null, w.mode, S)),
        (S.ref = oo(w, y, g)),
        (S.return = w),
        S);
  }
  function u(w, y, g, S) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== g.containerInfo ||
      y.stateNode.implementation !== g.implementation
      ? ((y = vc(g, w.mode, S)), (y.return = w), y)
      : ((y = i(y, g.children || [])), (y.return = w), y);
  }
  function c(w, y, g, S, k) {
    return y === null || y.tag !== 7
      ? ((y = _r(g, w.mode, S, k)), (y.return = w), y)
      : ((y = i(y, g)), (y.return = w), y);
  }
  function d(w, y, g) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (y = hc("" + y, w.mode, g)), (y.return = w), y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case $a:
          return (
            (g = _s(y.type, y.key, y.props, null, w.mode, g)),
            (g.ref = oo(w, null, y)),
            (g.return = w),
            g
          );
        case ei:
          return (y = vc(y, w.mode, g)), (y.return = w), y;
        case Ln:
          var S = y._init;
          return d(w, S(y._payload), g);
      }
      if (ho(y) || eo(y))
        return (y = _r(y, w.mode, g, null)), (y.return = w), y;
      Ja(w, y);
    }
    return null;
  }
  function f(w, y, g, S) {
    var k = y !== null ? y.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return k !== null ? null : s(w, y, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case $a:
          return g.key === k ? l(w, y, g, S) : null;
        case ei:
          return g.key === k ? u(w, y, g, S) : null;
        case Ln:
          return (k = g._init), f(w, y, k(g._payload), S);
      }
      if (ho(g) || eo(g)) return k !== null ? null : c(w, y, g, S, null);
      Ja(w, g);
    }
    return null;
  }
  function m(w, y, g, S, k) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (w = w.get(g) || null), s(y, w, "" + S, k);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case $a:
          return (w = w.get(S.key === null ? g : S.key) || null), l(y, w, S, k);
        case ei:
          return (w = w.get(S.key === null ? g : S.key) || null), u(y, w, S, k);
        case Ln:
          var E = S._init;
          return m(w, y, g, E(S._payload), k);
      }
      if (ho(S) || eo(S)) return (w = w.get(g) || null), c(y, w, S, k, null);
      Ja(y, S);
    }
    return null;
  }
  function h(w, y, g, S) {
    for (
      var k = null, E = null, C = y, T = (y = 0), L = null;
      C !== null && T < g.length;
      T++
    ) {
      C.index > T ? ((L = C), (C = null)) : (L = C.sibling);
      var N = f(w, C, g[T], S);
      if (N === null) {
        C === null && (C = L);
        break;
      }
      e && C && N.alternate === null && t(w, C),
        (y = o(N, y, T)),
        E === null ? (k = N) : (E.sibling = N),
        (E = N),
        (C = L);
    }
    if (T === g.length) return n(w, C), he && br(w, T), k;
    if (C === null) {
      for (; T < g.length; T++)
        (C = d(w, g[T], S)),
          C !== null &&
            ((y = o(C, y, T)), E === null ? (k = C) : (E.sibling = C), (E = C));
      return he && br(w, T), k;
    }
    for (C = r(w, C); T < g.length; T++)
      (L = m(C, w, T, g[T], S)),
        L !== null &&
          (e && L.alternate !== null && C.delete(L.key === null ? T : L.key),
          (y = o(L, y, T)),
          E === null ? (k = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        C.forEach(function (W) {
          return t(w, W);
        }),
      he && br(w, T),
      k
    );
  }
  function v(w, y, g, S) {
    var k = eo(g);
    if (typeof k != "function") throw Error(j(150));
    if (((g = k.call(g)), g == null)) throw Error(j(151));
    for (
      var E = (k = null), C = y, T = (y = 0), L = null, N = g.next();
      C !== null && !N.done;
      T++, N = g.next()
    ) {
      C.index > T ? ((L = C), (C = null)) : (L = C.sibling);
      var W = f(w, C, N.value, S);
      if (W === null) {
        C === null && (C = L);
        break;
      }
      e && C && W.alternate === null && t(w, C),
        (y = o(W, y, T)),
        E === null ? (k = W) : (E.sibling = W),
        (E = W),
        (C = L);
    }
    if (N.done) return n(w, C), he && br(w, T), k;
    if (C === null) {
      for (; !N.done; T++, N = g.next())
        (N = d(w, N.value, S)),
          N !== null &&
            ((y = o(N, y, T)), E === null ? (k = N) : (E.sibling = N), (E = N));
      return he && br(w, T), k;
    }
    for (C = r(w, C); !N.done; T++, N = g.next())
      (N = m(C, w, T, N.value, S)),
        N !== null &&
          (e && N.alternate !== null && C.delete(N.key === null ? T : N.key),
          (y = o(N, y, T)),
          E === null ? (k = N) : (E.sibling = N),
          (E = N));
    return (
      e &&
        C.forEach(function ($) {
          return t(w, $);
        }),
      he && br(w, T),
      k
    );
  }
  function b(w, y, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === ti &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case $a:
          e: {
            for (var k = g.key, E = y; E !== null; ) {
              if (E.key === k) {
                if (((k = g.type), k === ti)) {
                  if (E.tag === 7) {
                    n(w, E.sibling),
                      (y = i(E, g.props.children)),
                      (y.return = w),
                      (w = y);
                    break e;
                  }
                } else if (
                  E.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Ln &&
                    Vh(k) === E.type)
                ) {
                  n(w, E.sibling),
                    (y = i(E, g.props)),
                    (y.ref = oo(w, E, g)),
                    (y.return = w),
                    (w = y);
                  break e;
                }
                n(w, E);
                break;
              } else t(w, E);
              E = E.sibling;
            }
            g.type === ti
              ? ((y = _r(g.props.children, w.mode, S, g.key)),
                (y.return = w),
                (w = y))
              : ((S = _s(g.type, g.key, g.props, null, w.mode, S)),
                (S.ref = oo(w, y, g)),
                (S.return = w),
                (w = S));
          }
          return a(w);
        case ei:
          e: {
            for (E = g.key; y !== null; ) {
              if (y.key === E)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === g.containerInfo &&
                  y.stateNode.implementation === g.implementation
                ) {
                  n(w, y.sibling),
                    (y = i(y, g.children || [])),
                    (y.return = w),
                    (w = y);
                  break e;
                } else {
                  n(w, y);
                  break;
                }
              else t(w, y);
              y = y.sibling;
            }
            (y = vc(g, w.mode, S)), (y.return = w), (w = y);
          }
          return a(w);
        case Ln:
          return (E = g._init), b(w, y, E(g._payload), S);
      }
      if (ho(g)) return h(w, y, g, S);
      if (eo(g)) return v(w, y, g, S);
      Ja(w, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        y !== null && y.tag === 6
          ? (n(w, y.sibling), (y = i(y, g)), (y.return = w), (w = y))
          : (n(w, y), (y = hc(g, w.mode, S)), (y.return = w), (w = y)),
        a(w))
      : n(w, y);
  }
  return b;
}
var Li = Z0(!0),
  e1 = Z0(!1),
  ka = {},
  nn = pr(ka),
  Xo = pr(ka),
  Qo = pr(ka);
function Pr(e) {
  if (e === ka) throw Error(j(174));
  return e;
}
function mp(e, t) {
  switch ((ae(Qo, t), ae(Xo, e), ae(nn, ka), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : rf(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = rf(t, e));
  }
  de(nn), ae(nn, t);
}
function Ii() {
  de(nn), de(Xo), de(Qo);
}
function t1(e) {
  Pr(Qo.current);
  var t = Pr(nn.current),
    n = rf(t, e.type);
  t !== n && (ae(Xo, e), ae(nn, n));
}
function hp(e) {
  Xo.current === e && (de(nn), de(Xo));
}
var ve = pr(0);
function rl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var uc = [];
function vp() {
  for (var e = 0; e < uc.length; e++)
    uc[e]._workInProgressVersionPrimary = null;
  uc.length = 0;
}
var Ps = Cn.ReactCurrentDispatcher,
  cc = Cn.ReactCurrentBatchConfig,
  Rr = 0,
  ge = null,
  Oe = null,
  Ne = null,
  il = !1,
  Co = !1,
  Jo = 0,
  fE = 0;
function Be() {
  throw Error(j(321));
}
function gp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Yt(e[n], t[n])) return !1;
  return !0;
}
function yp(e, t, n, r, i, o) {
  if (
    ((Rr = o),
    (ge = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ps.current = e === null || e.memoizedState === null ? hE : vE),
    (e = n(r, i)),
    Co)
  ) {
    o = 0;
    do {
      if (((Co = !1), (Jo = 0), 25 <= o)) throw Error(j(301));
      (o += 1),
        (Ne = Oe = null),
        (t.updateQueue = null),
        (Ps.current = gE),
        (e = n(r, i));
    } while (Co);
  }
  if (
    ((Ps.current = ol),
    (t = Oe !== null && Oe.next !== null),
    (Rr = 0),
    (Ne = Oe = ge = null),
    (il = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function wp() {
  var e = Jo !== 0;
  return (Jo = 0), e;
}
function Xt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ne === null ? (ge.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
}
function Nt() {
  if (Oe === null) {
    var e = ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Oe.next;
  var t = Ne === null ? ge.memoizedState : Ne.next;
  if (t !== null) (Ne = t), (Oe = e);
  else {
    if (e === null) throw Error(j(310));
    (Oe = e),
      (e = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null,
      }),
      Ne === null ? (ge.memoizedState = Ne = e) : (Ne = Ne.next = e);
  }
  return Ne;
}
function Zo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fc(e) {
  var t = Nt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = Oe,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = o.next), (o.next = a);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (a = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((Rr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = r)) : (l = l.next = d),
          (ge.lanes |= c),
          (Lr |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (a = r) : (l.next = s),
      Yt(r, t.memoizedState) || (st = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ge.lanes |= o), (Lr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function dc(e) {
  var t = Nt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== i);
    Yt(o, t.memoizedState) || (st = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function n1() {}
function r1(e, t) {
  var n = ge,
    r = Nt(),
    i = t(),
    o = !Yt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (st = !0)),
    (r = r.queue),
    xp(a1.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Ne !== null && Ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ea(9, o1.bind(null, n, r, i, t), void 0, null),
      Le === null)
    )
      throw Error(j(349));
    Rr & 30 || i1(n, t, i);
  }
  return i;
}
function i1(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function o1(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), s1(t) && l1(e);
}
function a1(e, t, n) {
  return n(function () {
    s1(t) && l1(e);
  });
}
function s1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Yt(e, n);
  } catch {
    return !0;
  }
}
function l1(e) {
  var t = gn(e, 1);
  t !== null && Ht(t, e, 1, -1);
}
function Fh(e) {
  var t = Xt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = mE.bind(null, ge, e)),
    [t.memoizedState, e]
  );
}
function ea(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function u1() {
  return Nt().memoizedState;
}
function Ts(e, t, n, r) {
  var i = Xt();
  (ge.flags |= e),
    (i.memoizedState = ea(1 | t, n, void 0, r === void 0 ? null : r));
}
function Xl(e, t, n, r) {
  var i = Nt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Oe !== null) {
    var a = Oe.memoizedState;
    if (((o = a.destroy), r !== null && gp(r, a.deps))) {
      i.memoizedState = ea(t, n, o, r);
      return;
    }
  }
  (ge.flags |= e), (i.memoizedState = ea(1 | t, n, o, r));
}
function zh(e, t) {
  return Ts(8390656, 8, e, t);
}
function xp(e, t) {
  return Xl(2048, 8, e, t);
}
function c1(e, t) {
  return Xl(4, 2, e, t);
}
function f1(e, t) {
  return Xl(4, 4, e, t);
}
function d1(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function p1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Xl(4, 4, d1.bind(null, t, e), n)
  );
}
function bp() {}
function m1(e, t) {
  var n = Nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gp(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function h1(e, t) {
  var n = Nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gp(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function v1(e, t, n) {
  return Rr & 21
    ? (Yt(n, t) || ((n = w0()), (ge.lanes |= n), (Lr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (st = !0)), (e.memoizedState = n));
}
function dE(e, t) {
  var n = te;
  (te = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = cc.transition;
  cc.transition = {};
  try {
    e(!1), t();
  } finally {
    (te = n), (cc.transition = r);
  }
}
function g1() {
  return Nt().memoizedState;
}
function pE(e, t, n) {
  var r = er(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    y1(e))
  )
    w1(t, n);
  else if (((n = K0(e, t, n, r)), n !== null)) {
    var i = tt();
    Ht(n, e, r, i), x1(n, t, r);
  }
}
function mE(e, t, n) {
  var r = er(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (y1(e)) w1(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = o(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), Yt(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), dp(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = K0(e, t, i, r)),
      n !== null && ((i = tt()), Ht(n, e, r, i), x1(n, t, r));
  }
}
function y1(e) {
  var t = e.alternate;
  return e === ge || (t !== null && t === ge);
}
function w1(e, t) {
  Co = il = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function x1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jd(e, n);
  }
}
var ol = {
    readContext: _t,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useInsertionEffect: Be,
    useLayoutEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useMutableSource: Be,
    useSyncExternalStore: Be,
    useId: Be,
    unstable_isNewReconciler: !1,
  },
  hE = {
    readContext: _t,
    useCallback: function (e, t) {
      return (Xt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _t,
    useEffect: zh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ts(4194308, 4, d1.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ts(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ts(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Xt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Xt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = pE.bind(null, ge, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Xt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Fh,
    useDebugValue: bp,
    useDeferredValue: function (e) {
      return (Xt().memoizedState = e);
    },
    useTransition: function () {
      var e = Fh(!1),
        t = e[0];
      return (e = dE.bind(null, e[1])), (Xt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ge,
        i = Xt();
      if (he) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), Le === null)) throw Error(j(349));
        Rr & 30 || i1(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        zh(a1.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ea(9, o1.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Xt(),
        t = Le.identifierPrefix;
      if (he) {
        var n = dn,
          r = fn;
        (n = (r & ~(1 << (32 - Wt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Jo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = fE++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  vE = {
    readContext: _t,
    useCallback: m1,
    useContext: _t,
    useEffect: xp,
    useImperativeHandle: p1,
    useInsertionEffect: c1,
    useLayoutEffect: f1,
    useMemo: h1,
    useReducer: fc,
    useRef: u1,
    useState: function () {
      return fc(Zo);
    },
    useDebugValue: bp,
    useDeferredValue: function (e) {
      var t = Nt();
      return v1(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = fc(Zo)[0],
        t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: n1,
    useSyncExternalStore: r1,
    useId: g1,
    unstable_isNewReconciler: !1,
  },
  gE = {
    readContext: _t,
    useCallback: m1,
    useContext: _t,
    useEffect: xp,
    useImperativeHandle: p1,
    useInsertionEffect: c1,
    useLayoutEffect: f1,
    useMemo: h1,
    useReducer: dc,
    useRef: u1,
    useState: function () {
      return dc(Zo);
    },
    useDebugValue: bp,
    useDeferredValue: function (e) {
      var t = Nt();
      return Oe === null ? (t.memoizedState = e) : v1(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = dc(Zo)[0],
        t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: n1,
    useSyncExternalStore: r1,
    useId: g1,
    unstable_isNewReconciler: !1,
  };
function Di(e, t) {
  try {
    var n = "",
      r = t;
    do (n += HS(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function pc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Tf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var yE = typeof WeakMap == "function" ? WeakMap : Map;
function b1(e, t, n) {
  (n = pn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      sl || ((sl = !0), (Df = r)), Tf(e, t);
    }),
    n
  );
}
function S1(e, t, n) {
  (n = pn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Tf(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Tf(e, t),
          typeof r != "function" &&
            (Zn === null ? (Zn = new Set([this])) : Zn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function $h(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new yE();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = NE.bind(null, e, t, n)), t.then(e, e));
}
function Uh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bh(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = pn(-1, 1)), (t.tag = 2), Jn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var wE = Cn.ReactCurrentOwner,
  st = !1;
function Ze(e, t, n, r) {
  t.child = e === null ? e1(t, null, n, r) : Li(t, e.child, n, r);
}
function Wh(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Si(t, i),
    (r = yp(e, t, n, r, o, i)),
    (n = wp()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yn(e, t, i))
      : (he && n && ap(t), (t.flags |= 1), Ze(e, t, r, i), t.child)
  );
}
function Hh(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Op(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), k1(e, t, o, r, i))
      : ((e = _s(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Go), n(a, r) && e.ref === t.ref)
    )
      return yn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = tr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function k1(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Go(o, r) && e.ref === t.ref)
      if (((st = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (st = !0);
      else return (t.lanes = e.lanes), yn(e, t, i);
  }
  return jf(e, t, n, r, i);
}
function E1(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ae(fi, mt),
        (mt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ae(fi, mt),
          (mt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ae(fi, mt),
        (mt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ae(fi, mt),
      (mt |= r);
  return Ze(e, t, i, n), t.child;
}
function C1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function jf(e, t, n, r, i) {
  var o = ut(n) ? Nr : Ke.current;
  return (
    (o = Mi(t, o)),
    Si(t, i),
    (n = yp(e, t, n, r, o, i)),
    (r = wp()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yn(e, t, i))
      : (he && r && ap(t), (t.flags |= 1), Ze(e, t, n, i), t.child)
  );
}
function Gh(e, t, n, r, i) {
  if (ut(n)) {
    var o = !0;
    Qs(t);
  } else o = !1;
  if ((Si(t, i), t.stateNode === null))
    js(e, t), J0(t, n, r), Pf(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = _t(u))
      : ((u = ut(n) ? Nr : Ke.current), (u = Mi(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== r || l !== u) && Dh(t, a, r, u)),
      (In = !1);
    var f = t.memoizedState;
    (a.state = f),
      nl(t, r, a, i),
      (l = t.memoizedState),
      s !== r || f !== l || lt.current || In
        ? (typeof c == "function" && (Cf(t, n, c, r), (l = t.memoizedState)),
          (s = In || Ih(t, n, s, r, f, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      X0(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Vt(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = _t(l))
        : ((l = ut(n) ? Nr : Ke.current), (l = Mi(t, l)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== d || f !== l) && Dh(t, a, r, l)),
      (In = !1),
      (f = t.memoizedState),
      (a.state = f),
      nl(t, r, a, i);
    var h = t.memoizedState;
    s !== d || f !== h || lt.current || In
      ? (typeof m == "function" && (Cf(t, n, m, r), (h = t.memoizedState)),
        (u = In || Ih(t, n, u, r, f, h, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, h, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, h, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (a.props = r),
        (a.state = h),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Of(e, t, n, r, o, i);
}
function Of(e, t, n, r, i, o) {
  C1(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && _h(t, n, !1), yn(e, t, o);
  (r = t.stateNode), (wE.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Li(t, e.child, null, o)), (t.child = Li(t, null, s, o)))
      : Ze(e, t, s, o),
    (t.memoizedState = r.state),
    i && _h(t, n, !0),
    t.child
  );
}
function P1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ah(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ah(e, t.context, !1),
    mp(e, t.containerInfo);
}
function Yh(e, t, n, r, i) {
  return Ri(), lp(i), (t.flags |= 256), Ze(e, t, n, r), t.child;
}
var Af = { dehydrated: null, treeContext: null, retryLane: 0 };
function _f(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function T1(e, t, n) {
  var r = t.pendingProps,
    i = ve.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ae(ve, i & 1),
    e === null)
  )
    return (
      kf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = a))
                : (o = Zl(a, r, 0, null)),
              (e = _r(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = _f(n)),
              (t.memoizedState = Af),
              e)
            : Sp(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return xE(e, t, a, r, s, i, n);
  if (o) {
    (o = r.fallback), (a = t.mode), (i = e.child), (s = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = tr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = tr(s, o)) : ((o = _r(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? _f(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Af),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = tr(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Sp(e, t) {
  return (
    (t = Zl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Za(e, t, n, r) {
  return (
    r !== null && lp(r),
    Li(t, e.child, null, n),
    (e = Sp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function xE(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = pc(Error(j(422)))), Za(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Zl({ mode: "visible", children: r.children }, i, 0, null)),
        (o = _r(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Li(t, e.child, null, a),
        (t.child.memoizedState = _f(a)),
        (t.memoizedState = Af),
        o);
  if (!(t.mode & 1)) return Za(e, t, a, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(j(419))), (r = pc(o, r, void 0)), Za(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), st || s)) {
    if (((r = Le), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), gn(e, i), Ht(r, e, i, -1));
    }
    return jp(), (r = pc(Error(j(421)))), Za(e, t, a, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ME.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (vt = Qn(i.nextSibling)),
      (gt = t),
      (he = !0),
      (zt = null),
      e !== null &&
        ((Tt[jt++] = fn),
        (Tt[jt++] = dn),
        (Tt[jt++] = Mr),
        (fn = e.id),
        (dn = e.overflow),
        (Mr = t)),
      (t = Sp(t, r.children)),
      (t.flags |= 4096),
      t);
}
function qh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ef(e.return, t, n);
}
function mc(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function j1(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ze(e, t, r.children, n), (r = ve.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qh(e, n, t);
        else if (e.tag === 19) qh(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ae(ve, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && rl(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          mc(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && rl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        mc(t, !0, n, null, o);
        break;
      case "together":
        mc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function js(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Lr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = tr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = tr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function bE(e, t, n) {
  switch (t.tag) {
    case 3:
      P1(t), Ri();
      break;
    case 5:
      t1(t);
      break;
    case 1:
      ut(t.type) && Qs(t);
      break;
    case 4:
      mp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ae(el, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ae(ve, ve.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? T1(e, t, n)
          : (ae(ve, ve.current & 1),
            (e = yn(e, t, n)),
            e !== null ? e.sibling : null);
      ae(ve, ve.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return j1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ae(ve, ve.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), E1(e, t, n);
  }
  return yn(e, t, n);
}
var O1, Nf, A1, _1;
O1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Nf = function () {};
A1 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Pr(nn.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Zc(e, i)), (r = Zc(e, r)), (o = []);
        break;
      case "select":
        (i = ye({}, i, { value: void 0 })),
          (r = ye({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = nf(e, i)), (r = nf(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ks);
    }
    of(n, r);
    var a;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Fo.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Fo.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ce("scroll", e),
                  o || s === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
_1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ao(e, t) {
  if (!he)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function We(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function SE(e, t, n) {
  var r = t.pendingProps;
  switch ((sp(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return We(t), null;
    case 1:
      return ut(t.type) && Xs(), We(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ii(),
        de(lt),
        de(Ke),
        vp(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Qa(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), zt !== null && (zf(zt), (zt = null)))),
        Nf(e, t),
        We(t),
        null
      );
    case 5:
      hp(t);
      var i = Pr(Qo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        A1(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return We(t), null;
        }
        if (((e = Pr(nn.current)), Qa(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Jt] = t), (r[Ko] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ce("cancel", r), ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < go.length; i++) ce(go[i], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ce("error", r), ce("load", r);
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              rh(r, o), ce("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ce("invalid", r);
              break;
            case "textarea":
              oh(r, o), ce("invalid", r);
          }
          of(n, o), (i = null);
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var s = o[a];
              a === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Xa(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Xa(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : Fo.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  ce("scroll", r);
            }
          switch (n) {
            case "input":
              Ua(r), ih(r, o, !0);
              break;
            case "textarea":
              Ua(r), ah(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ks);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = i0(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Jt] = t),
            (e[Ko] = r),
            O1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = af(n, r)), n)) {
              case "dialog":
                ce("cancel", e), ce("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < go.length; i++) ce(go[i], e);
                i = r;
                break;
              case "source":
                ce("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ce("error", e), ce("load", e), (i = r);
                break;
              case "details":
                ce("toggle", e), (i = r);
                break;
              case "input":
                rh(e, r), (i = Zc(e, r)), ce("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ye({}, r, { value: void 0 })),
                  ce("invalid", e);
                break;
              case "textarea":
                oh(e, r), (i = nf(e, r)), ce("invalid", e);
                break;
              default:
                i = r;
            }
            of(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var l = s[o];
                o === "style"
                  ? s0(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && o0(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && zo(e, l)
                    : typeof l == "number" && zo(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Fo.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && ce("scroll", e)
                      : l != null && Gd(e, o, l, a));
              }
            switch (n) {
              case "input":
                Ua(e), ih(e, r, !1);
                break;
              case "textarea":
                Ua(e), ah(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ir(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? yi(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      yi(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ks);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return We(t), null;
    case 6:
      if (e && t.stateNode != null) _1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = Pr(Qo.current)), Pr(nn.current), Qa(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Jt] = t),
            (o = r.nodeValue !== n) && ((e = gt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Xa(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Xa(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Jt] = t),
            (t.stateNode = r);
      }
      return We(t), null;
    case 13:
      if (
        (de(ve),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (he && vt !== null && t.mode & 1 && !(t.flags & 128))
          q0(), Ri(), (t.flags |= 98560), (o = !1);
        else if (((o = Qa(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(j(317));
            o[Jt] = t;
          } else
            Ri(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          We(t), (o = !1);
        } else zt !== null && (zf(zt), (zt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ve.current & 1 ? Ae === 0 && (Ae = 3) : jp())),
          t.updateQueue !== null && (t.flags |= 4),
          We(t),
          null);
    case 4:
      return (
        Ii(), Nf(e, t), e === null && Yo(t.stateNode.containerInfo), We(t), null
      );
    case 10:
      return fp(t.type._context), We(t), null;
    case 17:
      return ut(t.type) && Xs(), We(t), null;
    case 19:
      if ((de(ve), (o = t.memoizedState), o === null)) return We(t), null;
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) ao(o, !1);
        else {
          if (Ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = rl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    ao(o, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ae(ve, (ve.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ee() > Vi &&
            ((t.flags |= 128), (r = !0), ao(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = rl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ao(o, !0),
              o.tail === null && o.tailMode === "hidden" && !a.alternate && !he)
            )
              return We(t), null;
          } else
            2 * Ee() - o.renderingStartTime > Vi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ao(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (o.last = a));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ee()),
          (t.sibling = null),
          (n = ve.current),
          ae(ve, r ? (n & 1) | 2 : n & 1),
          t)
        : (We(t), null);
    case 22:
    case 23:
      return (
        Tp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? mt & 1073741824 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : We(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function kE(e, t) {
  switch ((sp(t), t.tag)) {
    case 1:
      return (
        ut(t.type) && Xs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ii(),
        de(lt),
        de(Ke),
        vp(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return hp(t), null;
    case 13:
      if (
        (de(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        Ri();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return de(ve), null;
    case 4:
      return Ii(), null;
    case 10:
      return fp(t.type._context), null;
    case 22:
    case 23:
      return Tp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var es = !1,
  Ye = !1,
  EE = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function ci(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        we(e, t, r);
      }
    else n.current = null;
}
function Mf(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var Kh = !1;
function CE(e, t) {
  if (((vf = Gs), (e = L0()), op(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var m;
              d !== n || (i !== 0 && d.nodeType !== 3) || (s = a + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (m = d.firstChild) !== null;

            )
              (f = d), (d = m);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (s = a),
                f === o && ++c === r && (l = a),
                (m = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = m;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (gf = { focusedElem: e, selectionRange: n }, Gs = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var h = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var v = h.memoizedProps,
                    b = h.memoizedState,
                    w = t.stateNode,
                    y = w.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Vt(t.type, v),
                      b
                    );
                  w.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (S) {
          we(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (h = Kh), (Kh = !1), h;
}
function Po(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Mf(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ql(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Rf(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function N1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), N1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Jt], delete t[Ko], delete t[xf], delete t[sE], delete t[lE])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function M1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || M1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Lf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ks));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Lf(e, t, n), e = e.sibling; e !== null; ) Lf(e, t, n), (e = e.sibling);
}
function If(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (If(e, t, n), e = e.sibling; e !== null; ) If(e, t, n), (e = e.sibling);
}
var Fe = null,
  Ft = !1;
function _n(e, t, n) {
  for (n = n.child; n !== null; ) R1(e, t, n), (n = n.sibling);
}
function R1(e, t, n) {
  if (tn && typeof tn.onCommitFiberUnmount == "function")
    try {
      tn.onCommitFiberUnmount(Bl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ye || ci(n, t);
    case 6:
      var r = Fe,
        i = Ft;
      (Fe = null),
        _n(e, t, n),
        (Fe = r),
        (Ft = i),
        Fe !== null &&
          (Ft
            ? ((e = Fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Fe.removeChild(n.stateNode));
      break;
    case 18:
      Fe !== null &&
        (Ft
          ? ((e = Fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? sc(e.parentNode, n)
              : e.nodeType === 1 && sc(e, n),
            Wo(e))
          : sc(Fe, n.stateNode));
      break;
    case 4:
      (r = Fe),
        (i = Ft),
        (Fe = n.stateNode.containerInfo),
        (Ft = !0),
        _n(e, t, n),
        (Fe = r),
        (Ft = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ye &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            a = o.destroy;
          (o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && Mf(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      _n(e, t, n);
      break;
    case 1:
      if (
        !Ye &&
        (ci(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          we(n, t, s);
        }
      _n(e, t, n);
      break;
    case 21:
      _n(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ye = (r = Ye) || n.memoizedState !== null), _n(e, t, n), (Ye = r))
        : _n(e, t, n);
      break;
    default:
      _n(e, t, n);
  }
}
function Qh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new EE()),
      t.forEach(function (r) {
        var i = RE.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function It(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Fe = s.stateNode), (Ft = !1);
              break e;
            case 3:
              (Fe = s.stateNode.containerInfo), (Ft = !0);
              break e;
            case 4:
              (Fe = s.stateNode.containerInfo), (Ft = !0);
              break e;
          }
          s = s.return;
        }
        if (Fe === null) throw Error(j(160));
        R1(o, a, i), (Fe = null), (Ft = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        we(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) L1(t, e), (t = t.sibling);
}
function L1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((It(t, e), Kt(e), r & 4)) {
        try {
          Po(3, e, e.return), Ql(3, e);
        } catch (v) {
          we(e, e.return, v);
        }
        try {
          Po(5, e, e.return);
        } catch (v) {
          we(e, e.return, v);
        }
      }
      break;
    case 1:
      It(t, e), Kt(e), r & 512 && n !== null && ci(n, n.return);
      break;
    case 5:
      if (
        (It(t, e),
        Kt(e),
        r & 512 && n !== null && ci(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          zo(i, "");
        } catch (v) {
          we(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && n0(i, o),
              af(s, a);
            var u = af(s, o);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? s0(i, d)
                : c === "dangerouslySetInnerHTML"
                ? o0(i, d)
                : c === "children"
                ? zo(i, d)
                : Gd(i, c, d, u);
            }
            switch (s) {
              case "input":
                ef(i, o);
                break;
              case "textarea":
                r0(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? yi(i, !!o.multiple, m, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? yi(i, !!o.multiple, o.defaultValue, !0)
                      : yi(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Ko] = o;
          } catch (v) {
            we(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((It(t, e), Kt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          we(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (It(t, e), Kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wo(t.containerInfo);
        } catch (v) {
          we(e, e.return, v);
        }
      break;
    case 4:
      It(t, e), Kt(e);
      break;
    case 13:
      It(t, e),
        Kt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Cp = Ee())),
        r & 4 && Qh(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ye = (u = Ye) || c), It(t, e), (Ye = u)) : It(t, e),
        Kt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (I = e, c = e.child; c !== null; ) {
            for (d = I = c; I !== null; ) {
              switch (((f = I), (m = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Po(4, f, f.return);
                  break;
                case 1:
                  ci(f, f.return);
                  var h = f.stateNode;
                  if (typeof h.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount();
                    } catch (v) {
                      we(r, n, v);
                    }
                  }
                  break;
                case 5:
                  ci(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Zh(d);
                    continue;
                  }
              }
              m !== null ? ((m.return = f), (I = m)) : Zh(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = a0("display", a)));
              } catch (v) {
                we(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                we(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      It(t, e), Kt(e), r & 4 && Qh(e);
      break;
    case 21:
      break;
    default:
      It(t, e), Kt(e);
  }
}
function Kt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (M1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (zo(i, ""), (r.flags &= -33));
          var o = Xh(e);
          If(e, o, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = Xh(e);
          Lf(e, s, a);
          break;
        default:
          throw Error(j(161));
      }
    } catch (l) {
      we(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function PE(e, t, n) {
  (I = e), I1(e);
}
function I1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var i = I,
      o = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || es;
      if (!a) {
        var s = i.alternate,
          l = (s !== null && s.memoizedState !== null) || Ye;
        s = es;
        var u = Ye;
        if (((es = a), (Ye = l) && !u))
          for (I = i; I !== null; )
            (a = I),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? ev(i)
                : l !== null
                ? ((l.return = a), (I = l))
                : ev(i);
        for (; o !== null; ) (I = o), I1(o), (o = o.sibling);
        (I = i), (es = s), (Ye = u);
      }
      Jh(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (I = o)) : Jh(e);
  }
}
function Jh(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ye || Ql(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ye)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Vt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Lh(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Lh(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Wo(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        Ye || (t.flags & 512 && Rf(t));
      } catch (f) {
        we(t, t.return, f);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Zh(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function ev(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ql(4, t);
          } catch (l) {
            we(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              we(t, i, l);
            }
          }
          var o = t.return;
          try {
            Rf(t);
          } catch (l) {
            we(t, o, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Rf(t);
          } catch (l) {
            we(t, a, l);
          }
      }
    } catch (l) {
      we(t, t.return, l);
    }
    if (t === e) {
      I = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (I = s);
      break;
    }
    I = t.return;
  }
}
var TE = Math.ceil,
  al = Cn.ReactCurrentDispatcher,
  kp = Cn.ReactCurrentOwner,
  At = Cn.ReactCurrentBatchConfig,
  Q = 0,
  Le = null,
  Te = null,
  ze = 0,
  mt = 0,
  fi = pr(0),
  Ae = 0,
  ta = null,
  Lr = 0,
  Jl = 0,
  Ep = 0,
  To = null,
  at = null,
  Cp = 0,
  Vi = 1 / 0,
  un = null,
  sl = !1,
  Df = null,
  Zn = null,
  ts = !1,
  Un = null,
  ll = 0,
  jo = 0,
  Vf = null,
  Os = -1,
  As = 0;
function tt() {
  return Q & 6 ? Ee() : Os !== -1 ? Os : (Os = Ee());
}
function er(e) {
  return e.mode & 1
    ? Q & 2 && ze !== 0
      ? ze & -ze
      : cE.transition !== null
      ? (As === 0 && (As = w0()), As)
      : ((e = te),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : P0(e.type))),
        e)
    : 1;
}
function Ht(e, t, n, r) {
  if (50 < jo) throw ((jo = 0), (Vf = null), Error(j(185)));
  xa(e, n, r),
    (!(Q & 2) || e !== Le) &&
      (e === Le && (!(Q & 2) && (Jl |= n), Ae === 4 && Fn(e, ze)),
      ct(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((Vi = Ee() + 500), ql && mr()));
}
function ct(e, t) {
  var n = e.callbackNode;
  ck(e, t);
  var r = Hs(e, e === Le ? ze : 0);
  if (r === 0)
    n !== null && uh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && uh(n), t === 1))
      e.tag === 0 ? uE(tv.bind(null, e)) : H0(tv.bind(null, e)),
        oE(function () {
          !(Q & 6) && mr();
        }),
        (n = null);
    else {
      switch (x0(r)) {
        case 1:
          n = Qd;
          break;
        case 4:
          n = g0;
          break;
        case 16:
          n = Ws;
          break;
        case 536870912:
          n = y0;
          break;
        default:
          n = Ws;
      }
      n = W1(n, D1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function D1(e, t) {
  if (((Os = -1), (As = 0), Q & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (ki() && e.callbackNode !== n) return null;
  var r = Hs(e, e === Le ? ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ul(e, r);
  else {
    t = r;
    var i = Q;
    Q |= 2;
    var o = F1();
    (Le !== e || ze !== t) && ((un = null), (Vi = Ee() + 500), Ar(e, t));
    do
      try {
        AE();
        break;
      } catch (s) {
        V1(e, s);
      }
    while (1);
    cp(),
      (al.current = o),
      (Q = i),
      Te !== null ? (t = 0) : ((Le = null), (ze = 0), (t = Ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ff(e)), i !== 0 && ((r = i), (t = Ff(e, i)))), t === 1)
    )
      throw ((n = ta), Ar(e, 0), Fn(e, r), ct(e, Ee()), n);
    if (t === 6) Fn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !jE(i) &&
          ((t = ul(e, r)),
          t === 2 && ((o = ff(e)), o !== 0 && ((r = o), (t = Ff(e, o)))),
          t === 1))
      )
        throw ((n = ta), Ar(e, 0), Fn(e, r), ct(e, Ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Sr(e, at, un);
          break;
        case 3:
          if (
            (Fn(e, r), (r & 130023424) === r && ((t = Cp + 500 - Ee()), 10 < t))
          ) {
            if (Hs(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              tt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = wf(Sr.bind(null, e, at, un), t);
            break;
          }
          Sr(e, at, un);
          break;
        case 4:
          if ((Fn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - Wt(r);
            (o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * TE(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wf(Sr.bind(null, e, at, un), r);
            break;
          }
          Sr(e, at, un);
          break;
        case 5:
          Sr(e, at, un);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return ct(e, Ee()), e.callbackNode === n ? D1.bind(null, e) : null;
}
function Ff(e, t) {
  var n = To;
  return (
    e.current.memoizedState.isDehydrated && (Ar(e, t).flags |= 256),
    (e = ul(e, t)),
    e !== 2 && ((t = at), (at = n), t !== null && zf(t)),
    e
  );
}
function zf(e) {
  at === null ? (at = e) : at.push.apply(at, e);
}
function jE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Yt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Fn(e, t) {
  for (
    t &= ~Ep,
      t &= ~Jl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Wt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function tv(e) {
  if (Q & 6) throw Error(j(327));
  ki();
  var t = Hs(e, 0);
  if (!(t & 1)) return ct(e, Ee()), null;
  var n = ul(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ff(e);
    r !== 0 && ((t = r), (n = Ff(e, r)));
  }
  if (n === 1) throw ((n = ta), Ar(e, 0), Fn(e, t), ct(e, Ee()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Sr(e, at, un),
    ct(e, Ee()),
    null
  );
}
function Pp(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((Vi = Ee() + 500), ql && mr());
  }
}
function Ir(e) {
  Un !== null && Un.tag === 0 && !(Q & 6) && ki();
  var t = Q;
  Q |= 1;
  var n = At.transition,
    r = te;
  try {
    if (((At.transition = null), (te = 1), e)) return e();
  } finally {
    (te = r), (At.transition = n), (Q = t), !(Q & 6) && mr();
  }
}
function Tp() {
  (mt = fi.current), de(fi);
}
function Ar(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), iE(n)), Te !== null))
    for (n = Te.return; n !== null; ) {
      var r = n;
      switch ((sp(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Xs();
          break;
        case 3:
          Ii(), de(lt), de(Ke), vp();
          break;
        case 5:
          hp(r);
          break;
        case 4:
          Ii();
          break;
        case 13:
          de(ve);
          break;
        case 19:
          de(ve);
          break;
        case 10:
          fp(r.type._context);
          break;
        case 22:
        case 23:
          Tp();
      }
      n = n.return;
    }
  if (
    ((Le = e),
    (Te = e = tr(e.current, null)),
    (ze = mt = t),
    (Ae = 0),
    (ta = null),
    (Ep = Jl = Lr = 0),
    (at = To = null),
    Cr !== null)
  ) {
    for (t = 0; t < Cr.length; t++)
      if (((n = Cr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var a = o.next;
          (o.next = i), (r.next = a);
        }
        n.pending = r;
      }
    Cr = null;
  }
  return e;
}
function V1(e, t) {
  do {
    var n = Te;
    try {
      if ((cp(), (Ps.current = ol), il)) {
        for (var r = ge.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        il = !1;
      }
      if (
        ((Rr = 0),
        (Ne = Oe = ge = null),
        (Co = !1),
        (Jo = 0),
        (kp.current = null),
        n === null || n.return === null)
      ) {
        (Ae = 1), (ta = t), (Te = null);
        break;
      }
      e: {
        var o = e,
          a = n.return,
          s = n,
          l = t;
        if (
          ((t = ze),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = Uh(a);
          if (m !== null) {
            (m.flags &= -257),
              Bh(m, a, s, o, t),
              m.mode & 1 && $h(o, u, t),
              (t = m),
              (l = u);
            var h = t.updateQueue;
            if (h === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else h.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              $h(o, u, t), jp();
              break e;
            }
            l = Error(j(426));
          }
        } else if (he && s.mode & 1) {
          var b = Uh(a);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              Bh(b, a, s, o, t),
              lp(Di(l, s));
            break e;
          }
        }
        (o = l = Di(l, s)),
          Ae !== 4 && (Ae = 2),
          To === null ? (To = [o]) : To.push(o),
          (o = a);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var w = b1(o, l, t);
              Rh(o, w);
              break e;
            case 1:
              s = l;
              var y = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof y.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Zn === null || !Zn.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = S1(o, s, t);
                Rh(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      $1(n);
    } catch (k) {
      (t = k), Te === n && n !== null && (Te = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function F1() {
  var e = al.current;
  return (al.current = ol), e === null ? ol : e;
}
function jp() {
  (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
    Le === null || (!(Lr & 268435455) && !(Jl & 268435455)) || Fn(Le, ze);
}
function ul(e, t) {
  var n = Q;
  Q |= 2;
  var r = F1();
  (Le !== e || ze !== t) && ((un = null), Ar(e, t));
  do
    try {
      OE();
      break;
    } catch (i) {
      V1(e, i);
    }
  while (1);
  if ((cp(), (Q = n), (al.current = r), Te !== null)) throw Error(j(261));
  return (Le = null), (ze = 0), Ae;
}
function OE() {
  for (; Te !== null; ) z1(Te);
}
function AE() {
  for (; Te !== null && !tk(); ) z1(Te);
}
function z1(e) {
  var t = B1(e.alternate, e, mt);
  (e.memoizedProps = e.pendingProps),
    t === null ? $1(e) : (Te = t),
    (kp.current = null);
}
function $1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = kE(n, t)), n !== null)) {
        (n.flags &= 32767), (Te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ae = 6), (Te = null);
        return;
      }
    } else if (((n = SE(n, t, mt)), n !== null)) {
      Te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Te = t;
      return;
    }
    Te = t = e;
  } while (t !== null);
  Ae === 0 && (Ae = 5);
}
function Sr(e, t, n) {
  var r = te,
    i = At.transition;
  try {
    (At.transition = null), (te = 1), _E(e, t, n, r);
  } finally {
    (At.transition = i), (te = r);
  }
  return null;
}
function _E(e, t, n, r) {
  do ki();
  while (Un !== null);
  if (Q & 6) throw Error(j(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (fk(e, o),
    e === Le && ((Te = Le = null), (ze = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ts ||
      ((ts = !0),
      W1(Ws, function () {
        return ki(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = At.transition), (At.transition = null);
    var a = te;
    te = 1;
    var s = Q;
    (Q |= 4),
      (kp.current = null),
      CE(e, n),
      L1(n, e),
      Qk(gf),
      (Gs = !!vf),
      (gf = vf = null),
      (e.current = n),
      PE(n),
      nk(),
      (Q = s),
      (te = a),
      (At.transition = o);
  } else e.current = n;
  if (
    (ts && ((ts = !1), (Un = e), (ll = i)),
    (o = e.pendingLanes),
    o === 0 && (Zn = null),
    ok(n.stateNode),
    ct(e, Ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (sl) throw ((sl = !1), (e = Df), (Df = null), e);
  return (
    ll & 1 && e.tag !== 0 && ki(),
    (o = e.pendingLanes),
    o & 1 ? (e === Vf ? jo++ : ((jo = 0), (Vf = e))) : (jo = 0),
    mr(),
    null
  );
}
function ki() {
  if (Un !== null) {
    var e = x0(ll),
      t = At.transition,
      n = te;
    try {
      if (((At.transition = null), (te = 16 > e ? 16 : e), Un === null))
        var r = !1;
      else {
        if (((e = Un), (Un = null), (ll = 0), Q & 6)) throw Error(j(331));
        var i = Q;
        for (Q |= 4, I = e.current; I !== null; ) {
          var o = I,
            a = o.child;
          if (I.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (I = u; I !== null; ) {
                  var c = I;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Po(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (I = d);
                  else
                    for (; I !== null; ) {
                      c = I;
                      var f = c.sibling,
                        m = c.return;
                      if ((N1(c), c === u)) {
                        I = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = m), (I = f);
                        break;
                      }
                      I = m;
                    }
                }
              }
              var h = o.alternate;
              if (h !== null) {
                var v = h.child;
                if (v !== null) {
                  h.child = null;
                  do {
                    var b = v.sibling;
                    (v.sibling = null), (v = b);
                  } while (v !== null);
                }
              }
              I = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (I = a);
          else
            e: for (; I !== null; ) {
              if (((o = I), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Po(9, o, o.return);
                }
              var w = o.sibling;
              if (w !== null) {
                (w.return = o.return), (I = w);
                break e;
              }
              I = o.return;
            }
        }
        var y = e.current;
        for (I = y; I !== null; ) {
          a = I;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) (g.return = a), (I = g);
          else
            e: for (a = y; I !== null; ) {
              if (((s = I), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ql(9, s);
                  }
                } catch (k) {
                  we(s, s.return, k);
                }
              if (s === a) {
                I = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (I = S);
                break e;
              }
              I = s.return;
            }
        }
        if (
          ((Q = i), mr(), tn && typeof tn.onPostCommitFiberRoot == "function")
        )
          try {
            tn.onPostCommitFiberRoot(Bl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (te = n), (At.transition = t);
    }
  }
  return !1;
}
function nv(e, t, n) {
  (t = Di(n, t)),
    (t = b1(e, t, 1)),
    (e = Jn(e, t, 1)),
    (t = tt()),
    e !== null && (xa(e, 1, t), ct(e, t));
}
function we(e, t, n) {
  if (e.tag === 3) nv(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        nv(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Zn === null || !Zn.has(r)))
        ) {
          (e = Di(n, e)),
            (e = S1(t, e, 1)),
            (t = Jn(t, e, 1)),
            (e = tt()),
            t !== null && (xa(t, 1, e), ct(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function NE(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = tt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Le === e &&
      (ze & n) === n &&
      (Ae === 4 || (Ae === 3 && (ze & 130023424) === ze && 500 > Ee() - Cp)
        ? Ar(e, 0)
        : (Ep |= n)),
    ct(e, t);
}
function U1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ha), (Ha <<= 1), !(Ha & 130023424) && (Ha = 4194304))
      : (t = 1));
  var n = tt();
  (e = gn(e, t)), e !== null && (xa(e, t, n), ct(e, n));
}
function ME(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), U1(e, n);
}
function RE(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), U1(e, n);
}
var B1;
B1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || lt.current) st = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (st = !1), bE(e, t, n);
      st = !!(e.flags & 131072);
    }
  else (st = !1), he && t.flags & 1048576 && G0(t, Zs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      js(e, t), (e = t.pendingProps);
      var i = Mi(t, Ke.current);
      Si(t, n), (i = yp(null, t, r, e, i, n));
      var o = wp();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ut(r) ? ((o = !0), Qs(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            pp(t),
            (i.updater = Kl),
            (t.stateNode = i),
            (i._reactInternals = t),
            Pf(t, r, e, n),
            (t = Of(null, t, r, !0, o, n)))
          : ((t.tag = 0), he && o && ap(t), Ze(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (js(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = IE(r)),
          (e = Vt(r, e)),
          i)
        ) {
          case 0:
            t = jf(null, t, r, e, n);
            break e;
          case 1:
            t = Gh(null, t, r, e, n);
            break e;
          case 11:
            t = Wh(null, t, r, e, n);
            break e;
          case 14:
            t = Hh(null, t, r, Vt(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Vt(r, i)),
        jf(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Vt(r, i)),
        Gh(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((P1(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          X0(e, t),
          nl(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Di(Error(j(423)), t)), (t = Yh(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Di(Error(j(424)), t)), (t = Yh(e, t, r, n, i));
            break e;
          } else
            for (
              vt = Qn(t.stateNode.containerInfo.firstChild),
                gt = t,
                he = !0,
                zt = null,
                n = e1(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ri(), r === i)) {
            t = yn(e, t, n);
            break e;
          }
          Ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        t1(t),
        e === null && kf(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        yf(r, i) ? (a = null) : o !== null && yf(r, o) && (t.flags |= 32),
        C1(e, t),
        Ze(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && kf(t), null;
    case 13:
      return T1(e, t, n);
    case 4:
      return (
        mp(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Li(t, null, r, n)) : Ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Vt(r, i)),
        Wh(e, t, r, i, n)
      );
    case 7:
      return Ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          ae(el, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (Yt(o.value, a)) {
            if (o.children === i.children && !lt.current) {
              t = yn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                a = o.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = pn(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Ef(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(j(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  Ef(a, n, t),
                  (a = o.sibling);
              } else a = o.child;
              if (a !== null) a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((o = a.sibling), o !== null)) {
                    (o.return = a.return), (a = o);
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        Ze(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Si(t, n),
        (i = _t(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Vt(r, t.pendingProps)),
        (i = Vt(r.type, i)),
        Hh(e, t, r, i, n)
      );
    case 15:
      return k1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Vt(r, i)),
        js(e, t),
        (t.tag = 1),
        ut(r) ? ((e = !0), Qs(t)) : (e = !1),
        Si(t, n),
        J0(t, r, i),
        Pf(t, r, i, n),
        Of(null, t, r, !0, e, n)
      );
    case 19:
      return j1(e, t, n);
    case 22:
      return E1(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function W1(e, t) {
  return v0(e, t);
}
function LE(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ot(e, t, n, r) {
  return new LE(e, t, n, r);
}
function Op(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function IE(e) {
  if (typeof e == "function") return Op(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qd)) return 11;
    if (e === Kd) return 14;
  }
  return 2;
}
function tr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ot(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function _s(e, t, n, r, i, o) {
  var a = 2;
  if (((r = e), typeof e == "function")) Op(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case ti:
        return _r(n.children, i, o, t);
      case Yd:
        (a = 8), (i |= 8);
        break;
      case Kc:
        return (
          (e = Ot(12, n, t, i | 2)), (e.elementType = Kc), (e.lanes = o), e
        );
      case Xc:
        return (e = Ot(13, n, t, i)), (e.elementType = Xc), (e.lanes = o), e;
      case Qc:
        return (e = Ot(19, n, t, i)), (e.elementType = Qc), (e.lanes = o), e;
      case Zy:
        return Zl(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qy:
              a = 10;
              break e;
            case Jy:
              a = 9;
              break e;
            case qd:
              a = 11;
              break e;
            case Kd:
              a = 14;
              break e;
            case Ln:
              (a = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ot(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function _r(e, t, n, r) {
  return (e = Ot(7, e, r, t)), (e.lanes = n), e;
}
function Zl(e, t, n, r) {
  return (
    (e = Ot(22, e, r, t)),
    (e.elementType = Zy),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function hc(e, t, n) {
  return (e = Ot(6, e, null, t)), (e.lanes = n), e;
}
function vc(e, t, n) {
  return (
    (t = Ot(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function DE(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Xu(0)),
    (this.expirationTimes = Xu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ap(e, t, n, r, i, o, a, s, l) {
  return (
    (e = new DE(e, t, n, s, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ot(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pp(o),
    e
  );
}
function VE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ei,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function H1(e) {
  if (!e) return or;
  e = e._reactInternals;
  e: {
    if (Br(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ut(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ut(n)) return W0(e, n, t);
  }
  return t;
}
function G1(e, t, n, r, i, o, a, s, l) {
  return (
    (e = Ap(n, r, !0, e, i, o, a, s, l)),
    (e.context = H1(null)),
    (n = e.current),
    (r = tt()),
    (i = er(n)),
    (o = pn(r, i)),
    (o.callback = t ?? null),
    Jn(n, o, i),
    (e.current.lanes = i),
    xa(e, i, r),
    ct(e, r),
    e
  );
}
function eu(e, t, n, r) {
  var i = t.current,
    o = tt(),
    a = er(i);
  return (
    (n = H1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = pn(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Jn(i, t, a)),
    e !== null && (Ht(e, i, a, o), Cs(e, i, a)),
    a
  );
}
function cl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function rv(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function _p(e, t) {
  rv(e, t), (e = e.alternate) && rv(e, t);
}
function FE() {
  return null;
}
var Y1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Np(e) {
  this._internalRoot = e;
}
tu.prototype.render = Np.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  eu(e, t, null, null);
};
tu.prototype.unmount = Np.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ir(function () {
      eu(null, e, null, null);
    }),
      (t[vn] = null);
  }
};
function tu(e) {
  this._internalRoot = e;
}
tu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = k0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vn.length && t !== 0 && t < Vn[n].priority; n++);
    Vn.splice(n, 0, e), n === 0 && C0(e);
  }
};
function Mp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function nu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function iv() {}
function zE(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = cl(a);
        o.call(u);
      };
    }
    var a = G1(t, r, e, 0, null, !1, !1, "", iv);
    return (
      (e._reactRootContainer = a),
      (e[vn] = a.current),
      Yo(e.nodeType === 8 ? e.parentNode : e),
      Ir(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = cl(l);
      s.call(u);
    };
  }
  var l = Ap(e, 0, !1, null, null, !1, !1, "", iv);
  return (
    (e._reactRootContainer = l),
    (e[vn] = l.current),
    Yo(e.nodeType === 8 ? e.parentNode : e),
    Ir(function () {
      eu(t, l, n, r);
    }),
    l
  );
}
function ru(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var l = cl(a);
        s.call(l);
      };
    }
    eu(t, a, e, i);
  } else a = zE(n, t, e, i, r);
  return cl(a);
}
b0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = vo(t.pendingLanes);
        n !== 0 &&
          (Jd(t, n | 1), ct(t, Ee()), !(Q & 6) && ((Vi = Ee() + 500), mr()));
      }
      break;
    case 13:
      Ir(function () {
        var r = gn(e, 1);
        if (r !== null) {
          var i = tt();
          Ht(r, e, 1, i);
        }
      }),
        _p(e, 1);
  }
};
Zd = function (e) {
  if (e.tag === 13) {
    var t = gn(e, 134217728);
    if (t !== null) {
      var n = tt();
      Ht(t, e, 134217728, n);
    }
    _p(e, 134217728);
  }
};
S0 = function (e) {
  if (e.tag === 13) {
    var t = er(e),
      n = gn(e, t);
    if (n !== null) {
      var r = tt();
      Ht(n, e, t, r);
    }
    _p(e, t);
  }
};
k0 = function () {
  return te;
};
E0 = function (e, t) {
  var n = te;
  try {
    return (te = e), t();
  } finally {
    te = n;
  }
};
lf = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ef(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Yl(r);
            if (!i) throw Error(j(90));
            t0(r), ef(r, i);
          }
        }
      }
      break;
    case "textarea":
      r0(e, n);
      break;
    case "select":
      (t = n.value), t != null && yi(e, !!n.multiple, t, !1);
  }
};
c0 = Pp;
f0 = Ir;
var $E = { usingClientEntryPoint: !1, Events: [Sa, oi, Yl, l0, u0, Pp] },
  so = {
    findFiberByHostInstance: Er,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  UE = {
    bundleType: so.bundleType,
    version: so.version,
    rendererPackageName: so.rendererPackageName,
    rendererConfig: so.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Cn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = m0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: so.findFiberByHostInstance || FE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ns.isDisabled && ns.supportsFiber)
    try {
      (Bl = ns.inject(UE)), (tn = ns);
    } catch {}
}
bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $E;
bt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mp(t)) throw Error(j(200));
  return VE(e, t, null, n);
};
bt.createRoot = function (e, t) {
  if (!Mp(e)) throw Error(j(299));
  var n = !1,
    r = "",
    i = Y1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ap(e, 1, !1, null, null, n, !1, r, i)),
    (e[vn] = t.current),
    Yo(e.nodeType === 8 ? e.parentNode : e),
    new Np(t)
  );
};
bt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = m0(t)), (e = e === null ? null : e.stateNode), e;
};
bt.flushSync = function (e) {
  return Ir(e);
};
bt.hydrate = function (e, t, n) {
  if (!nu(t)) throw Error(j(200));
  return ru(null, e, t, !0, n);
};
bt.hydrateRoot = function (e, t, n) {
  if (!Mp(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    a = Y1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = G1(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[vn] = t.current),
    Yo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new tu(t);
};
bt.render = function (e, t, n) {
  if (!nu(t)) throw Error(j(200));
  return ru(null, e, t, !1, n);
};
bt.unmountComponentAtNode = function (e) {
  if (!nu(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (Ir(function () {
        ru(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[vn] = null);
        });
      }),
      !0)
    : !1;
};
bt.unstable_batchedUpdates = Pp;
bt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!nu(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return ru(e, t, n, !1, r);
};
bt.version = "18.2.0-next-9e3b772b8-20220608";
function q1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q1);
    } catch (e) {
      console.error(e);
    }
}
q1(), (Gy.exports = bt);
var K1 = Gy.exports,
  ov = K1;
(Yc.createRoot = ov.createRoot), (Yc.hydrateRoot = ov.hydrateRoot);
var X1 = { exports: {} },
  BE = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  WE = BE,
  HE = WE;
function Q1() {}
function J1() {}
J1.resetWarningCache = Q1;
var GE = function () {
  function e(r, i, o, a, s, l) {
    if (l !== HE) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: J1,
    resetWarningCache: Q1,
  };
  return (n.PropTypes = n), n;
};
X1.exports = GE();
var YE = X1.exports;
const A = ya(YE);
var qE = typeof Element < "u",
  KE = typeof Map == "function",
  XE = typeof Set == "function",
  QE = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ns(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, i;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ns(e[r], t[r])) return !1;
      return !0;
    }
    var o;
    if (KE && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!Ns(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (XE && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (QE && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1;
    if (qE && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") &&
          e.$$typeof
        ) &&
        !Ns(e[i[r]], t[i[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var JE = function (t, n) {
  try {
    return Ns(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const ZE = ya(JE);
var e3 = function (e, t, n, r, i, o, a, s) {
    if (!e) {
      var l;
      if (t === void 0)
        l = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var u = [n, r, i, o, a, s],
          c = 0;
        (l = new Error(
          t.replace(/%s/g, function () {
            return u[c++];
          })
        )),
          (l.name = "Invariant Violation");
      }
      throw ((l.framesToPop = 1), l);
    }
  },
  t3 = e3;
const av = ya(t3);
var n3 = function (t, n, r, i) {
  var o = r ? r.call(i, t, n) : void 0;
  if (o !== void 0) return !!o;
  if (t === n) return !0;
  if (typeof t != "object" || !t || typeof n != "object" || !n) return !1;
  var a = Object.keys(t),
    s = Object.keys(n);
  if (a.length !== s.length) return !1;
  for (
    var l = Object.prototype.hasOwnProperty.bind(n), u = 0;
    u < a.length;
    u++
  ) {
    var c = a[u];
    if (!l(c)) return !1;
    var d = t[c],
      f = n[c];
    if (
      ((o = r ? r.call(i, d, f, c) : void 0),
      o === !1 || (o === void 0 && d !== f))
    )
      return !1;
  }
  return !0;
};
const r3 = ya(n3);
function ke() {
  return (
    (ke =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    ke.apply(this, arguments)
  );
}
function Rp(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    $f(e, t);
}
function $f(e, t) {
  return (
    ($f =
      Object.setPrototypeOf ||
      function (n, r) {
        return (n.__proto__ = r), n;
      }),
    $f(e, t)
  );
}
function sv(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) t.indexOf((n = o[r])) >= 0 || (i[n] = e[n]);
  return i;
}
var F = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title",
    FRAGMENT: "Symbol(react.fragment)",
  },
  i3 = { rel: ["amphtml", "canonical", "alternate"] },
  o3 = { type: ["application/ld+json"] },
  a3 = {
    charset: "",
    name: ["robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site",
    ],
  },
  lv = Object.keys(F).map(function (e) {
    return F[e];
  }),
  fl = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  s3 = Object.keys(fl).reduce(function (e, t) {
    return (e[fl[t]] = t), e;
  }, {}),
  Ei = function (e, t) {
    for (var n = e.length - 1; n >= 0; n -= 1) {
      var r = e[n];
      if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
    }
    return null;
  },
  l3 = function (e) {
    var t = Ei(e, F.TITLE),
      n = Ei(e, "titleTemplate");
    if ((Array.isArray(t) && (t = t.join("")), n && t))
      return n.replace(/%s/g, function () {
        return t;
      });
    var r = Ei(e, "defaultTitle");
    return t || r || void 0;
  },
  u3 = function (e) {
    return Ei(e, "onChangeClientState") || function () {};
  },
  gc = function (e, t) {
    return t
      .filter(function (n) {
        return n[e] !== void 0;
      })
      .map(function (n) {
        return n[e];
      })
      .reduce(function (n, r) {
        return ke({}, n, r);
      }, {});
  },
  c3 = function (e, t) {
    return t
      .filter(function (n) {
        return n[F.BASE] !== void 0;
      })
      .map(function (n) {
        return n[F.BASE];
      })
      .reverse()
      .reduce(function (n, r) {
        if (!n.length)
          for (var i = Object.keys(r), o = 0; o < i.length; o += 1) {
            var a = i[o].toLowerCase();
            if (e.indexOf(a) !== -1 && r[a]) return n.concat(r);
          }
        return n;
      }, []);
  },
  lo = function (e, t, n) {
    var r = {};
    return n
      .filter(function (i) {
        return (
          !!Array.isArray(i[e]) ||
          (i[e] !== void 0 &&
            console &&
            typeof console.warn == "function" &&
            console.warn(
              "Helmet: " +
                e +
                ' should be of type "Array". Instead found type "' +
                typeof i[e] +
                '"'
            ),
          !1)
        );
      })
      .map(function (i) {
        return i[e];
      })
      .reverse()
      .reduce(function (i, o) {
        var a = {};
        o.filter(function (d) {
          for (var f, m = Object.keys(d), h = 0; h < m.length; h += 1) {
            var v = m[h],
              b = v.toLowerCase();
            t.indexOf(b) === -1 ||
              (f === "rel" && d[f].toLowerCase() === "canonical") ||
              (b === "rel" && d[b].toLowerCase() === "stylesheet") ||
              (f = b),
              t.indexOf(v) === -1 ||
                (v !== "innerHTML" && v !== "cssText" && v !== "itemprop") ||
                (f = v);
          }
          if (!f || !d[f]) return !1;
          var w = d[f].toLowerCase();
          return (
            r[f] || (r[f] = {}),
            a[f] || (a[f] = {}),
            !r[f][w] && ((a[f][w] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (d) {
            return i.push(d);
          });
        for (var s = Object.keys(a), l = 0; l < s.length; l += 1) {
          var u = s[l],
            c = ke({}, r[u], a[u]);
          r[u] = c;
        }
        return i;
      }, [])
      .reverse();
  },
  f3 = function (e, t) {
    if (Array.isArray(e) && e.length) {
      for (var n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
    }
    return !1;
  },
  Z1 = function (e) {
    return Array.isArray(e) ? e.join("") : e;
  },
  yc = function (e, t) {
    return Array.isArray(e)
      ? e.reduce(
          function (n, r) {
            return (
              (function (i, o) {
                for (var a = Object.keys(i), s = 0; s < a.length; s += 1)
                  if (o[a[s]] && o[a[s]].includes(i[a[s]])) return !0;
                return !1;
              })(r, t)
                ? n.priority.push(r)
                : n.default.push(r),
              n
            );
          },
          { priority: [], default: [] }
        )
      : { default: e };
  },
  uv = function (e, t) {
    var n;
    return ke({}, e, (((n = {})[t] = void 0), n));
  },
  d3 = [F.NOSCRIPT, F.SCRIPT, F.STYLE],
  wc = function (e, t) {
    return (
      t === void 0 && (t = !0),
      t === !1
        ? String(e)
        : String(e)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#x27;")
    );
  },
  cv = function (e) {
    return Object.keys(e).reduce(function (t, n) {
      var r = e[n] !== void 0 ? n + '="' + e[n] + '"' : "" + n;
      return t ? t + " " + r : r;
    }, "");
  },
  fv = function (e, t) {
    return (
      t === void 0 && (t = {}),
      Object.keys(e).reduce(function (n, r) {
        return (n[fl[r] || r] = e[r]), n;
      }, t)
    );
  },
  Ms = function (e, t) {
    return t.map(function (n, r) {
      var i,
        o = (((i = { key: r })["data-rh"] = !0), i);
      return (
        Object.keys(n).forEach(function (a) {
          var s = fl[a] || a;
          s === "innerHTML" || s === "cssText"
            ? (o.dangerouslySetInnerHTML = { __html: n.innerHTML || n.cssText })
            : (o[s] = n[a]);
        }),
        Re.createElement(e, o)
      );
    });
  },
  Pt = function (e, t, n) {
    switch (e) {
      case F.TITLE:
        return {
          toComponent: function () {
            return (
              (i = t.titleAttributes),
              ((o = { key: (r = t.title) })["data-rh"] = !0),
              (a = fv(i, o)),
              [Re.createElement(F.TITLE, a, r)]
            );
            var r, i, o, a;
          },
          toString: function () {
            return (function (r, i, o, a) {
              var s = cv(o),
                l = Z1(i);
              return s
                ? "<" +
                    r +
                    ' data-rh="true" ' +
                    s +
                    ">" +
                    wc(l, a) +
                    "</" +
                    r +
                    ">"
                : "<" + r + ' data-rh="true">' + wc(l, a) + "</" + r + ">";
            })(e, t.title, t.titleAttributes, n);
          },
        };
      case "bodyAttributes":
      case "htmlAttributes":
        return {
          toComponent: function () {
            return fv(t);
          },
          toString: function () {
            return cv(t);
          },
        };
      default:
        return {
          toComponent: function () {
            return Ms(e, t);
          },
          toString: function () {
            return (function (r, i, o) {
              return i.reduce(function (a, s) {
                var l = Object.keys(s)
                    .filter(function (d) {
                      return !(d === "innerHTML" || d === "cssText");
                    })
                    .reduce(function (d, f) {
                      var m =
                        s[f] === void 0 ? f : f + '="' + wc(s[f], o) + '"';
                      return d ? d + " " + m : m;
                    }, ""),
                  u = s.innerHTML || s.cssText || "",
                  c = d3.indexOf(r) === -1;
                return (
                  a +
                  "<" +
                  r +
                  ' data-rh="true" ' +
                  l +
                  (c ? "/>" : ">" + u + "</" + r + ">")
                );
              }, "");
            })(e, t, n);
          },
        };
    }
  },
  Uf = function (e) {
    var t = e.baseTag,
      n = e.bodyAttributes,
      r = e.encode,
      i = e.htmlAttributes,
      o = e.noscriptTags,
      a = e.styleTags,
      s = e.title,
      l = s === void 0 ? "" : s,
      u = e.titleAttributes,
      c = e.linkTags,
      d = e.metaTags,
      f = e.scriptTags,
      m = {
        toComponent: function () {},
        toString: function () {
          return "";
        },
      };
    if (e.prioritizeSeoTags) {
      var h = (function (v) {
        var b = v.linkTags,
          w = v.scriptTags,
          y = v.encode,
          g = yc(v.metaTags, a3),
          S = yc(b, i3),
          k = yc(w, o3);
        return {
          priorityMethods: {
            toComponent: function () {
              return [].concat(
                Ms(F.META, g.priority),
                Ms(F.LINK, S.priority),
                Ms(F.SCRIPT, k.priority)
              );
            },
            toString: function () {
              return (
                Pt(F.META, g.priority, y) +
                " " +
                Pt(F.LINK, S.priority, y) +
                " " +
                Pt(F.SCRIPT, k.priority, y)
              );
            },
          },
          metaTags: g.default,
          linkTags: S.default,
          scriptTags: k.default,
        };
      })(e);
      (m = h.priorityMethods),
        (c = h.linkTags),
        (d = h.metaTags),
        (f = h.scriptTags);
    }
    return {
      priority: m,
      base: Pt(F.BASE, t, r),
      bodyAttributes: Pt("bodyAttributes", n, r),
      htmlAttributes: Pt("htmlAttributes", i, r),
      link: Pt(F.LINK, c, r),
      meta: Pt(F.META, d, r),
      noscript: Pt(F.NOSCRIPT, o, r),
      script: Pt(F.SCRIPT, f, r),
      style: Pt(F.STYLE, a, r),
      title: Pt(F.TITLE, { title: l, titleAttributes: u }, r),
    };
  },
  rs = [],
  Bf = function (e, t) {
    var n = this;
    t === void 0 && (t = typeof document < "u"),
      (this.instances = []),
      (this.value = {
        setHelmet: function (r) {
          n.context.helmet = r;
        },
        helmetInstances: {
          get: function () {
            return n.canUseDOM ? rs : n.instances;
          },
          add: function (r) {
            (n.canUseDOM ? rs : n.instances).push(r);
          },
          remove: function (r) {
            var i = (n.canUseDOM ? rs : n.instances).indexOf(r);
            (n.canUseDOM ? rs : n.instances).splice(i, 1);
          },
        },
      }),
      (this.context = e),
      (this.canUseDOM = t),
      t ||
        (e.helmet = Uf({
          baseTag: [],
          bodyAttributes: {},
          encodeSpecialCharacters: !0,
          htmlAttributes: {},
          linkTags: [],
          metaTags: [],
          noscriptTags: [],
          scriptTags: [],
          styleTags: [],
          title: "",
          titleAttributes: {},
        }));
  },
  ew = Re.createContext({}),
  p3 = A.shape({
    setHelmet: A.func,
    helmetInstances: A.shape({ get: A.func, add: A.func, remove: A.func }),
  }),
  m3 = typeof document < "u",
  di = (function (e) {
    function t(n) {
      var r;
      return (
        ((r = e.call(this, n) || this).helmetData = new Bf(
          r.props.context,
          t.canUseDOM
        )),
        r
      );
    }
    return (
      Rp(t, e),
      (t.prototype.render = function () {
        return Re.createElement(
          ew.Provider,
          { value: this.helmetData.value },
          this.props.children
        );
      }),
      t
    );
  })(x.Component);
(di.canUseDOM = m3),
  (di.propTypes = {
    context: A.shape({ helmet: A.shape() }),
    children: A.node.isRequired,
  }),
  (di.defaultProps = { context: {} }),
  (di.displayName = "HelmetProvider");
var Kr = function (e, t) {
    var n,
      r = document.head || document.querySelector(F.HEAD),
      i = r.querySelectorAll(e + "[data-rh]"),
      o = [].slice.call(i),
      a = [];
    return (
      t &&
        t.length &&
        t.forEach(function (s) {
          var l = document.createElement(e);
          for (var u in s)
            Object.prototype.hasOwnProperty.call(s, u) &&
              (u === "innerHTML"
                ? (l.innerHTML = s.innerHTML)
                : u === "cssText"
                ? l.styleSheet
                  ? (l.styleSheet.cssText = s.cssText)
                  : l.appendChild(document.createTextNode(s.cssText))
                : l.setAttribute(u, s[u] === void 0 ? "" : s[u]));
          l.setAttribute("data-rh", "true"),
            o.some(function (c, d) {
              return (n = d), l.isEqualNode(c);
            })
              ? o.splice(n, 1)
              : a.push(l);
        }),
      o.forEach(function (s) {
        return s.parentNode.removeChild(s);
      }),
      a.forEach(function (s) {
        return r.appendChild(s);
      }),
      { oldTags: o, newTags: a }
    );
  },
  xc = function (e, t) {
    var n = document.getElementsByTagName(e)[0];
    if (n) {
      for (
        var r = n.getAttribute("data-rh"),
          i = r ? r.split(",") : [],
          o = [].concat(i),
          a = Object.keys(t),
          s = 0;
        s < a.length;
        s += 1
      ) {
        var l = a[s],
          u = t[l] || "";
        n.getAttribute(l) !== u && n.setAttribute(l, u),
          i.indexOf(l) === -1 && i.push(l);
        var c = o.indexOf(l);
        c !== -1 && o.splice(c, 1);
      }
      for (var d = o.length - 1; d >= 0; d -= 1) n.removeAttribute(o[d]);
      i.length === o.length
        ? n.removeAttribute("data-rh")
        : n.getAttribute("data-rh") !== a.join(",") &&
          n.setAttribute("data-rh", a.join(","));
    }
  },
  dv = function (e, t) {
    var n = e.baseTag,
      r = e.htmlAttributes,
      i = e.linkTags,
      o = e.metaTags,
      a = e.noscriptTags,
      s = e.onChangeClientState,
      l = e.scriptTags,
      u = e.styleTags,
      c = e.title,
      d = e.titleAttributes;
    xc(F.BODY, e.bodyAttributes),
      xc(F.HTML, r),
      (function (v, b) {
        v !== void 0 && document.title !== v && (document.title = Z1(v)),
          xc(F.TITLE, b);
      })(c, d);
    var f = {
        baseTag: Kr(F.BASE, n),
        linkTags: Kr(F.LINK, i),
        metaTags: Kr(F.META, o),
        noscriptTags: Kr(F.NOSCRIPT, a),
        scriptTags: Kr(F.SCRIPT, l),
        styleTags: Kr(F.STYLE, u),
      },
      m = {},
      h = {};
    Object.keys(f).forEach(function (v) {
      var b = f[v],
        w = b.newTags,
        y = b.oldTags;
      w.length && (m[v] = w), y.length && (h[v] = f[v].oldTags);
    }),
      t && t(),
      s(e, m, h);
  },
  uo = null,
  dl = (function (e) {
    function t() {
      for (var r, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
        o[a] = arguments[a];
      return ((r = e.call.apply(e, [this].concat(o)) || this).rendered = !1), r;
    }
    Rp(t, e);
    var n = t.prototype;
    return (
      (n.shouldComponentUpdate = function (r) {
        return !r3(r, this.props);
      }),
      (n.componentDidUpdate = function () {
        this.emitChange();
      }),
      (n.componentWillUnmount = function () {
        this.props.context.helmetInstances.remove(this), this.emitChange();
      }),
      (n.emitChange = function () {
        var r,
          i,
          o = this.props.context,
          a = o.setHelmet,
          s = null,
          l =
            ((r = o.helmetInstances.get().map(function (u) {
              var c = ke({}, u.props);
              return delete c.context, c;
            })),
            {
              baseTag: c3(["href"], r),
              bodyAttributes: gc("bodyAttributes", r),
              defer: Ei(r, "defer"),
              encode: Ei(r, "encodeSpecialCharacters"),
              htmlAttributes: gc("htmlAttributes", r),
              linkTags: lo(F.LINK, ["rel", "href"], r),
              metaTags: lo(
                F.META,
                ["name", "charset", "http-equiv", "property", "itemprop"],
                r
              ),
              noscriptTags: lo(F.NOSCRIPT, ["innerHTML"], r),
              onChangeClientState: u3(r),
              scriptTags: lo(F.SCRIPT, ["src", "innerHTML"], r),
              styleTags: lo(F.STYLE, ["cssText"], r),
              title: l3(r),
              titleAttributes: gc("titleAttributes", r),
              prioritizeSeoTags: f3(r, "prioritizeSeoTags"),
            });
        di.canUseDOM
          ? ((i = l),
            uo && cancelAnimationFrame(uo),
            i.defer
              ? (uo = requestAnimationFrame(function () {
                  dv(i, function () {
                    uo = null;
                  });
                }))
              : (dv(i), (uo = null)))
          : Uf && (s = Uf(l)),
          a(s);
      }),
      (n.init = function () {
        this.rendered ||
          ((this.rendered = !0),
          this.props.context.helmetInstances.add(this),
          this.emitChange());
      }),
      (n.render = function () {
        return this.init(), null;
      }),
      t
    );
  })(x.Component);
(dl.propTypes = { context: p3.isRequired }),
  (dl.displayName = "HelmetDispatcher");
var h3 = ["children"],
  v3 = ["children"],
  mn = (function (e) {
    function t() {
      return e.apply(this, arguments) || this;
    }
    Rp(t, e);
    var n = t.prototype;
    return (
      (n.shouldComponentUpdate = function (r) {
        return !ZE(uv(this.props, "helmetData"), uv(r, "helmetData"));
      }),
      (n.mapNestedChildrenToProps = function (r, i) {
        if (!i) return null;
        switch (r.type) {
          case F.SCRIPT:
          case F.NOSCRIPT:
            return { innerHTML: i };
          case F.STYLE:
            return { cssText: i };
          default:
            throw new Error(
              "<" +
                r.type +
                " /> elements are self-closing and can not contain children. Refer to our API for more information."
            );
        }
      }),
      (n.flattenArrayTypeChildren = function (r) {
        var i,
          o = r.child,
          a = r.arrayTypeChildren;
        return ke(
          {},
          a,
          (((i = {})[o.type] = [].concat(a[o.type] || [], [
            ke(
              {},
              r.newChildProps,
              this.mapNestedChildrenToProps(o, r.nestedChildren)
            ),
          ])),
          i)
        );
      }),
      (n.mapObjectTypeChildren = function (r) {
        var i,
          o,
          a = r.child,
          s = r.newProps,
          l = r.newChildProps,
          u = r.nestedChildren;
        switch (a.type) {
          case F.TITLE:
            return ke(
              {},
              s,
              (((i = {})[a.type] = u), (i.titleAttributes = ke({}, l)), i)
            );
          case F.BODY:
            return ke({}, s, { bodyAttributes: ke({}, l) });
          case F.HTML:
            return ke({}, s, { htmlAttributes: ke({}, l) });
          default:
            return ke({}, s, (((o = {})[a.type] = ke({}, l)), o));
        }
      }),
      (n.mapArrayTypeChildrenToProps = function (r, i) {
        var o = ke({}, i);
        return (
          Object.keys(r).forEach(function (a) {
            var s;
            o = ke({}, o, (((s = {})[a] = r[a]), s));
          }),
          o
        );
      }),
      (n.warnOnInvalidChildren = function (r, i) {
        return (
          av(
            lv.some(function (o) {
              return r.type === o;
            }),
            typeof r.type == "function"
              ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
              : "Only elements types " +
                  lv.join(", ") +
                  " are allowed. Helmet does not support rendering <" +
                  r.type +
                  "> elements. Refer to our API for more information."
          ),
          av(
            !i ||
              typeof i == "string" ||
              (Array.isArray(i) &&
                !i.some(function (o) {
                  return typeof o != "string";
                })),
            "Helmet expects a string as a child of <" +
              r.type +
              ">. Did you forget to wrap your children in braces? ( <" +
              r.type +
              ">{``}</" +
              r.type +
              "> ) Refer to our API for more information."
          ),
          !0
        );
      }),
      (n.mapChildrenToProps = function (r, i) {
        var o = this,
          a = {};
        return (
          Re.Children.forEach(r, function (s) {
            if (s && s.props) {
              var l = s.props,
                u = l.children,
                c = sv(l, h3),
                d = Object.keys(c).reduce(function (m, h) {
                  return (m[s3[h] || h] = c[h]), m;
                }, {}),
                f = s.type;
              switch (
                (typeof f == "symbol"
                  ? (f = f.toString())
                  : o.warnOnInvalidChildren(s, u),
                f)
              ) {
                case F.FRAGMENT:
                  i = o.mapChildrenToProps(u, i);
                  break;
                case F.LINK:
                case F.META:
                case F.NOSCRIPT:
                case F.SCRIPT:
                case F.STYLE:
                  a = o.flattenArrayTypeChildren({
                    child: s,
                    arrayTypeChildren: a,
                    newChildProps: d,
                    nestedChildren: u,
                  });
                  break;
                default:
                  i = o.mapObjectTypeChildren({
                    child: s,
                    newProps: i,
                    newChildProps: d,
                    nestedChildren: u,
                  });
              }
            }
          }),
          this.mapArrayTypeChildrenToProps(a, i)
        );
      }),
      (n.render = function () {
        var r = this.props,
          i = r.children,
          o = sv(r, v3),
          a = ke({}, o),
          s = o.helmetData;
        return (
          i && (a = this.mapChildrenToProps(i, a)),
          !s || s instanceof Bf || (s = new Bf(s.context, s.instances)),
          s
            ? Re.createElement(
                dl,
                ke({}, a, { context: s.value, helmetData: void 0 })
              )
            : Re.createElement(ew.Consumer, null, function (l) {
                return Re.createElement(dl, ke({}, a, { context: l }));
              })
        );
      }),
      t
    );
  })(x.Component);
(mn.propTypes = {
  base: A.object,
  bodyAttributes: A.object,
  children: A.oneOfType([A.arrayOf(A.node), A.node]),
  defaultTitle: A.string,
  defer: A.bool,
  encodeSpecialCharacters: A.bool,
  htmlAttributes: A.object,
  link: A.arrayOf(A.object),
  meta: A.arrayOf(A.object),
  noscript: A.arrayOf(A.object),
  onChangeClientState: A.func,
  script: A.arrayOf(A.object),
  style: A.arrayOf(A.object),
  title: A.string,
  titleAttributes: A.object,
  titleTemplate: A.string,
  prioritizeSeoTags: A.bool,
  helmetData: A.object,
}),
  (mn.defaultProps = {
    defer: !0,
    encodeSpecialCharacters: !0,
    prioritizeSeoTags: !1,
  }),
  (mn.displayName = "Helmet");
var tw = { exports: {} },
  nw = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fi = x;
function g3(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var y3 = typeof Object.is == "function" ? Object.is : g3,
  w3 = Fi.useState,
  x3 = Fi.useEffect,
  b3 = Fi.useLayoutEffect,
  S3 = Fi.useDebugValue;
function k3(e, t) {
  var n = t(),
    r = w3({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    b3(
      function () {
        (i.value = n), (i.getSnapshot = t), bc(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    x3(
      function () {
        return (
          bc(i) && o({ inst: i }),
          e(function () {
            bc(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    S3(n),
    n
  );
}
function bc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !y3(e, n);
  } catch {
    return !0;
  }
}
function E3(e, t) {
  return t();
}
var C3 =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? E3
    : k3;
nw.useSyncExternalStore =
  Fi.useSyncExternalStore !== void 0 ? Fi.useSyncExternalStore : C3;
tw.exports = nw;
var P3 = tw.exports,
  rw = { exports: {} },
  iw = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var iu = x,
  T3 = P3;
function j3(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var O3 = typeof Object.is == "function" ? Object.is : j3,
  A3 = T3.useSyncExternalStore,
  _3 = iu.useRef,
  N3 = iu.useEffect,
  M3 = iu.useMemo,
  R3 = iu.useDebugValue;
iw.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = _3(null);
  if (o.current === null) {
    var a = { hasValue: !1, value: null };
    o.current = a;
  } else a = o.current;
  o = M3(
    function () {
      function l(m) {
        if (!u) {
          if (((u = !0), (c = m), (m = r(m)), i !== void 0 && a.hasValue)) {
            var h = a.value;
            if (i(h, m)) return (d = h);
          }
          return (d = m);
        }
        if (((h = d), O3(c, m))) return h;
        var v = r(m);
        return i !== void 0 && i(h, v) ? h : ((c = m), (d = v));
      }
      var u = !1,
        c,
        d,
        f = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        f === null
          ? void 0
          : function () {
              return l(f());
            },
      ];
    },
    [t, n, r, i]
  );
  var s = A3(e, o[0], o[1]);
  return (
    N3(
      function () {
        (a.hasValue = !0), (a.value = s);
      },
      [s]
    ),
    R3(s),
    s
  );
};
rw.exports = iw;
var L3 = rw.exports;
function I3(e) {
  e();
}
let ow = I3;
const D3 = (e) => (ow = e),
  V3 = () => ow,
  ar = x.createContext(null);
function aw() {
  return x.useContext(ar);
}
const F3 = () => {
  throw new Error("uSES not initialized!");
};
let sw = F3;
const z3 = (e) => {
    sw = e;
  },
  $3 = (e, t) => e === t;
function U3(e = ar) {
  const t = e === ar ? aw : () => x.useContext(e);
  return function (r, i = $3) {
    const { store: o, subscription: a, getServerState: s } = t(),
      l = sw(a.addNestedSub, o.getState, s || o.getState, r, i);
    return x.useDebugValue(l), l;
  };
}
const H = U3();
var lw = { exports: {} },
  ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ie = typeof Symbol == "function" && Symbol.for,
  Lp = Ie ? Symbol.for("react.element") : 60103,
  Ip = Ie ? Symbol.for("react.portal") : 60106,
  ou = Ie ? Symbol.for("react.fragment") : 60107,
  au = Ie ? Symbol.for("react.strict_mode") : 60108,
  su = Ie ? Symbol.for("react.profiler") : 60114,
  lu = Ie ? Symbol.for("react.provider") : 60109,
  uu = Ie ? Symbol.for("react.context") : 60110,
  Dp = Ie ? Symbol.for("react.async_mode") : 60111,
  cu = Ie ? Symbol.for("react.concurrent_mode") : 60111,
  fu = Ie ? Symbol.for("react.forward_ref") : 60112,
  du = Ie ? Symbol.for("react.suspense") : 60113,
  B3 = Ie ? Symbol.for("react.suspense_list") : 60120,
  pu = Ie ? Symbol.for("react.memo") : 60115,
  mu = Ie ? Symbol.for("react.lazy") : 60116,
  W3 = Ie ? Symbol.for("react.block") : 60121,
  H3 = Ie ? Symbol.for("react.fundamental") : 60117,
  G3 = Ie ? Symbol.for("react.responder") : 60118,
  Y3 = Ie ? Symbol.for("react.scope") : 60119;
function kt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Lp:
        switch (((e = e.type), e)) {
          case Dp:
          case cu:
          case ou:
          case su:
          case au:
          case du:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case uu:
              case fu:
              case mu:
              case pu:
              case lu:
                return e;
              default:
                return t;
            }
        }
      case Ip:
        return t;
    }
  }
}
function uw(e) {
  return kt(e) === cu;
}
ne.AsyncMode = Dp;
ne.ConcurrentMode = cu;
ne.ContextConsumer = uu;
ne.ContextProvider = lu;
ne.Element = Lp;
ne.ForwardRef = fu;
ne.Fragment = ou;
ne.Lazy = mu;
ne.Memo = pu;
ne.Portal = Ip;
ne.Profiler = su;
ne.StrictMode = au;
ne.Suspense = du;
ne.isAsyncMode = function (e) {
  return uw(e) || kt(e) === Dp;
};
ne.isConcurrentMode = uw;
ne.isContextConsumer = function (e) {
  return kt(e) === uu;
};
ne.isContextProvider = function (e) {
  return kt(e) === lu;
};
ne.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Lp;
};
ne.isForwardRef = function (e) {
  return kt(e) === fu;
};
ne.isFragment = function (e) {
  return kt(e) === ou;
};
ne.isLazy = function (e) {
  return kt(e) === mu;
};
ne.isMemo = function (e) {
  return kt(e) === pu;
};
ne.isPortal = function (e) {
  return kt(e) === Ip;
};
ne.isProfiler = function (e) {
  return kt(e) === su;
};
ne.isStrictMode = function (e) {
  return kt(e) === au;
};
ne.isSuspense = function (e) {
  return kt(e) === du;
};
ne.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === ou ||
    e === cu ||
    e === su ||
    e === au ||
    e === du ||
    e === B3 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === mu ||
        e.$$typeof === pu ||
        e.$$typeof === lu ||
        e.$$typeof === uu ||
        e.$$typeof === fu ||
        e.$$typeof === H3 ||
        e.$$typeof === G3 ||
        e.$$typeof === Y3 ||
        e.$$typeof === W3))
  );
};
ne.typeOf = kt;
lw.exports = ne;
var q3 = lw.exports,
  cw = q3,
  K3 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  X3 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  fw = {};
fw[cw.ForwardRef] = K3;
fw[cw.Memo] = X3;
var ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vp = Symbol.for("react.element"),
  Fp = Symbol.for("react.portal"),
  hu = Symbol.for("react.fragment"),
  vu = Symbol.for("react.strict_mode"),
  gu = Symbol.for("react.profiler"),
  yu = Symbol.for("react.provider"),
  wu = Symbol.for("react.context"),
  Q3 = Symbol.for("react.server_context"),
  xu = Symbol.for("react.forward_ref"),
  bu = Symbol.for("react.suspense"),
  Su = Symbol.for("react.suspense_list"),
  ku = Symbol.for("react.memo"),
  Eu = Symbol.for("react.lazy"),
  J3 = Symbol.for("react.offscreen"),
  dw;
dw = Symbol.for("react.module.reference");
function Mt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Vp:
        switch (((e = e.type), e)) {
          case hu:
          case gu:
          case vu:
          case bu:
          case Su:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Q3:
              case wu:
              case xu:
              case Eu:
              case ku:
              case yu:
                return e;
              default:
                return t;
            }
        }
      case Fp:
        return t;
    }
  }
}
ie.ContextConsumer = wu;
ie.ContextProvider = yu;
ie.Element = Vp;
ie.ForwardRef = xu;
ie.Fragment = hu;
ie.Lazy = Eu;
ie.Memo = ku;
ie.Portal = Fp;
ie.Profiler = gu;
ie.StrictMode = vu;
ie.Suspense = bu;
ie.SuspenseList = Su;
ie.isAsyncMode = function () {
  return !1;
};
ie.isConcurrentMode = function () {
  return !1;
};
ie.isContextConsumer = function (e) {
  return Mt(e) === wu;
};
ie.isContextProvider = function (e) {
  return Mt(e) === yu;
};
ie.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vp;
};
ie.isForwardRef = function (e) {
  return Mt(e) === xu;
};
ie.isFragment = function (e) {
  return Mt(e) === hu;
};
ie.isLazy = function (e) {
  return Mt(e) === Eu;
};
ie.isMemo = function (e) {
  return Mt(e) === ku;
};
ie.isPortal = function (e) {
  return Mt(e) === Fp;
};
ie.isProfiler = function (e) {
  return Mt(e) === gu;
};
ie.isStrictMode = function (e) {
  return Mt(e) === vu;
};
ie.isSuspense = function (e) {
  return Mt(e) === bu;
};
ie.isSuspenseList = function (e) {
  return Mt(e) === Su;
};
ie.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === hu ||
    e === gu ||
    e === vu ||
    e === bu ||
    e === Su ||
    e === J3 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Eu ||
        e.$$typeof === ku ||
        e.$$typeof === yu ||
        e.$$typeof === wu ||
        e.$$typeof === xu ||
        e.$$typeof === dw ||
        e.getModuleId !== void 0))
  );
};
ie.typeOf = Mt;
function Z3() {
  const e = V3();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        i = t;
      for (; i; ) r.push(i), (i = i.next);
      return r;
    },
    subscribe(r) {
      let i = !0,
        o = (n = { callback: r, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const pv = { notify() {}, get: () => [] };
function eC(e, t) {
  let n,
    r = pv;
  function i(d) {
    return l(), r.subscribe(d);
  }
  function o() {
    r.notify();
  }
  function a() {
    c.onStateChange && c.onStateChange();
  }
  function s() {
    return !!n;
  }
  function l() {
    n || ((n = t ? t.addNestedSub(a) : e.subscribe(a)), (r = Z3()));
  }
  function u() {
    n && (n(), (n = void 0), r.clear(), (r = pv));
  }
  const c = {
    addNestedSub: i,
    notifyNestedSubs: o,
    handleChangeWrapper: a,
    isSubscribed: s,
    trySubscribe: l,
    tryUnsubscribe: u,
    getListeners: () => r,
  };
  return c;
}
const tC =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  nC = tC ? x.useLayoutEffect : x.useEffect;
function zp({ store: e, context: t, children: n, serverState: r }) {
  const i = x.useMemo(() => {
      const s = eC(e);
      return {
        store: e,
        subscription: s,
        getServerState: r ? () => r : void 0,
      };
    }, [e, r]),
    o = x.useMemo(() => e.getState(), [e]);
  nC(() => {
    const { subscription: s } = i;
    return (
      (s.onStateChange = s.notifyNestedSubs),
      s.trySubscribe(),
      o !== e.getState() && s.notifyNestedSubs(),
      () => {
        s.tryUnsubscribe(), (s.onStateChange = void 0);
      }
    );
  }, [i, o]);
  const a = t || ar;
  return Re.createElement(a.Provider, { value: i }, n);
}
function pw(e = ar) {
  const t = e === ar ? aw : () => x.useContext(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const rC = pw();
function iC(e = ar) {
  const t = e === ar ? rC : pw(e);
  return function () {
    return t().dispatch;
  };
}
const Ce = iC();
z3(L3.useSyncExternalStoreWithSelector);
D3(K1.unstable_batchedUpdates);
/**
 * @remix-run/router v1.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pl() {
  return (
    (pl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pl.apply(this, arguments)
  );
}
var Bn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Bn || (Bn = {}));
const mv = "popstate";
function oC(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: a, hash: s } = r.location;
    return Wf(
      "",
      { pathname: o, search: a, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Hf(i);
  }
  return sC(t, n, null, e);
}
function aC() {
  return Math.random().toString(36).substr(2, 8);
}
function hv(e) {
  return { usr: e.state, key: e.key };
}
function Wf(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    pl(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Gi(t) : t,
      { state: n, key: (t && t.key) || r || aC() }
    )
  );
}
function Hf(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Gi(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function sC(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    a = i.history,
    s = Bn.Pop,
    l = null;
  function u() {
    (s = Bn.Pop), l && l({ action: s, location: f.location });
  }
  function c(m, h) {
    s = Bn.Push;
    let v = Wf(f.location, m, h);
    n && n(v, m);
    let b = hv(v),
      w = f.createHref(v);
    try {
      a.pushState(b, "", w);
    } catch {
      i.location.assign(w);
    }
    o && l && l({ action: s, location: v });
  }
  function d(m, h) {
    s = Bn.Replace;
    let v = Wf(f.location, m, h);
    n && n(v, m);
    let b = hv(v),
      w = f.createHref(v);
    a.replaceState(b, "", w), o && l && l({ action: s, location: v });
  }
  let f = {
    get action() {
      return s;
    },
    get location() {
      return e(i, a);
    },
    listen(m) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(mv, u),
        (l = m),
        () => {
          i.removeEventListener(mv, u), (l = null);
        }
      );
    },
    createHref(m) {
      return t(i, m);
    },
    push: c,
    replace: d,
    go(m) {
      return a.go(m);
    },
  };
  return f;
}
var vv;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(vv || (vv = {}));
function lC(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Gi(t) : t,
    i = hw(r.pathname || "/", n);
  if (i == null) return null;
  let o = mw(e);
  uC(o);
  let a = null;
  for (let s = 0; a == null && s < o.length; ++s) a = yC(o[s], i);
  return a;
}
function mw(e, t, n, r) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""),
    e.forEach((i, o) => {
      let a = {
        relativePath: i.path || "",
        caseSensitive: i.caseSensitive === !0,
        childrenIndex: o,
        route: i,
      };
      a.relativePath.startsWith("/") &&
        (nt(
          a.relativePath.startsWith(r),
          'Absolute route path "' +
            a.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes."
        ),
        (a.relativePath = a.relativePath.slice(r.length)));
      let s = nr([r, a.relativePath]),
        l = n.concat(a);
      i.children &&
        i.children.length > 0 &&
        (nt(
          i.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + s + '".')
        ),
        mw(i.children, t, l, s)),
        !(i.path == null && !i.index) &&
          t.push({ path: s, score: vC(s, i.index), routesMeta: l });
    }),
    t
  );
}
function uC(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : gC(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const cC = /^:\w+$/,
  fC = 3,
  dC = 2,
  pC = 1,
  mC = 10,
  hC = -2,
  gv = (e) => e === "*";
function vC(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(gv) && (r += hC),
    t && (r += dC),
    n
      .filter((i) => !gv(i))
      .reduce((i, o) => i + (cC.test(o) ? fC : o === "" ? pC : mC), r)
  );
}
function gC(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function yC(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let a = 0; a < n.length; ++a) {
    let s = n[a],
      l = a === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = wC(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = s.route;
    o.push({
      params: r,
      pathname: nr([i, c.pathname]),
      pathnameBase: EC(nr([i, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (i = nr([i, c.pathnameBase]));
  }
  return o;
}
function wC(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = xC(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    a = o.replace(/(.)\/+$/, "$1"),
    s = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      if (c === "*") {
        let f = s[d] || "";
        a = o.slice(0, o.length - f.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = bC(s[d] || "", c)), u;
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e,
  };
}
function xC(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    vw(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/:(\w+)/g, (a, s) => (r.push(s), "([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : (i += n ? "\\/*$" : "(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function bC(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      vw(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function hw(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function nt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function vw(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function SC(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Gi(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : kC(n, t)) : t,
    search: CC(r),
    hash: PC(i),
  };
}
function kC(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function gw(e, t, n, r) {
  r === void 0 && (r = !1);
  let i = typeof e == "string" ? Gi(e) : pl({}, e),
    o = e === "" || i.pathname === "",
    a = o ? "/" : i.pathname,
    s;
  if (r || a == null) s = n;
  else {
    let d = t.length - 1;
    if (a.startsWith("..")) {
      let f = a.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      i.pathname = f.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let l = SC(i, s),
    u = a && a !== "/" && a.endsWith("/"),
    c = (o || a === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const nr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  EC = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  CC = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  PC = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class TC {
  constructor(t, n, r) {
    (this.status = t), (this.statusText = n || ""), (this.data = r);
  }
}
function jC(e) {
  return e instanceof TC;
}
/**
 * React Router v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gf() {
  return (
    (Gf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gf.apply(this, arguments)
  );
}
function OC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const AC = typeof Object.is == "function" ? Object.is : OC,
  { useState: _C, useEffect: NC, useLayoutEffect: MC, useDebugValue: RC } = Gc;
function LC(e, t, n) {
  const r = t(),
    [{ inst: i }, o] = _C({ inst: { value: r, getSnapshot: t } });
  return (
    MC(() => {
      (i.value = r), (i.getSnapshot = t), Sc(i) && o({ inst: i });
    }, [e, r, t]),
    NC(
      () => (
        Sc(i) && o({ inst: i }),
        e(() => {
          Sc(i) && o({ inst: i });
        })
      ),
      [e]
    ),
    RC(r),
    r
  );
}
function Sc(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !AC(n, r);
  } catch {
    return !0;
  }
}
function IC(e, t, n) {
  return t();
}
const DC =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  VC = !DC,
  FC = VC ? IC : LC;
"useSyncExternalStore" in Gc && ((e) => e.useSyncExternalStore)(Gc);
const zC = x.createContext(null),
  $C = x.createContext(null),
  $p = x.createContext(null),
  Up = x.createContext(null),
  Cu = x.createContext(null),
  Ea = x.createContext({ outlet: null, matches: [] }),
  yw = x.createContext(null);
function UC(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Yi() || nt(!1);
  let { basename: r, navigator: i } = x.useContext(Up),
    { hash: o, pathname: a, search: s } = xw(e, { relative: n }),
    l = a;
  return (
    r !== "/" && (l = a === "/" ? r : nr([r, a])),
    i.createHref({ pathname: l, search: s, hash: o })
  );
}
function Yi() {
  return x.useContext(Cu) != null;
}
function Ca() {
  return Yi() || nt(!1), x.useContext(Cu).location;
}
function ww(e) {
  return e.filter(
    (t, n) =>
      n === 0 || (!t.route.index && t.pathnameBase !== e[n - 1].pathnameBase)
  );
}
function sn() {
  Yi() || nt(!1);
  let { basename: e, navigator: t } = x.useContext(Up),
    { matches: n } = x.useContext(Ea),
    { pathname: r } = Ca(),
    i = JSON.stringify(ww(n).map((s) => s.pathnameBase)),
    o = x.useRef(!1);
  return (
    x.useEffect(() => {
      o.current = !0;
    }),
    x.useCallback(
      function (s, l) {
        if ((l === void 0 && (l = {}), !o.current)) return;
        if (typeof s == "number") {
          t.go(s);
          return;
        }
        let u = gw(s, JSON.parse(i), r, l.relative === "path");
        e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : nr([e, u.pathname])),
          (l.replace ? t.replace : t.push)(u, l.state, l);
      },
      [e, t, i, r]
    )
  );
}
function xw(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = x.useContext(Ea),
    { pathname: i } = Ca(),
    o = JSON.stringify(ww(r).map((a) => a.pathnameBase));
  return x.useMemo(() => gw(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function BC(e, t) {
  Yi() || nt(!1);
  let n = x.useContext($p),
    { matches: r } = x.useContext(Ea),
    i = r[r.length - 1],
    o = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let s = Ca(),
    l;
  if (t) {
    var u;
    let h = typeof t == "string" ? Gi(t) : t;
    a === "/" || ((u = h.pathname) != null && u.startsWith(a)) || nt(!1),
      (l = h);
  } else l = s;
  let c = l.pathname || "/",
    d = a === "/" ? c : c.slice(a.length) || "/",
    f = lC(e, { pathname: d }),
    m = YC(
      f &&
        f.map((h) =>
          Object.assign({}, h, {
            params: Object.assign({}, o, h.params),
            pathname: nr([a, h.pathname]),
            pathnameBase: h.pathnameBase === "/" ? a : nr([a, h.pathnameBase]),
          })
        ),
      r,
      n || void 0
    );
  return t
    ? x.createElement(
        Cu.Provider,
        {
          value: {
            location: Gf(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              l
            ),
            navigationType: Bn.Pop,
          },
        },
        m
      )
    : m;
}
function WC() {
  let e = KC(),
    t = jC(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = "rgba(200,200,200, 0.5)",
    i = { padding: "0.5rem", backgroundColor: r },
    o = { padding: "2px 4px", backgroundColor: r };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unhandled Thrown Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: i }, n) : null,
    x.createElement("p", null, "💿 Hey developer 👋"),
    x.createElement(
      "p",
      null,
      "You can provide a way better UX than this when your app throws errors by providing your own ",
      x.createElement("code", { style: o }, "errorElement"),
      " props on ",
      x.createElement("code", { style: o }, "<Route>")
    )
  );
}
class HC extends x.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? x.createElement(yw.Provider, {
          value: this.state.error,
          children: this.props.component,
        })
      : this.props.children;
  }
}
function GC(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = x.useContext(zC);
  return (
    i && n.route.errorElement && (i._deepestRenderedBoundaryId = n.route.id),
    x.createElement(Ea.Provider, { value: t }, r)
  );
}
function YC(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    i = n == null ? void 0 : n.errors;
  if (i != null) {
    let o = r.findIndex(
      (a) => a.route.id && (i == null ? void 0 : i[a.route.id])
    );
    o >= 0 || nt(!1), (r = r.slice(0, Math.min(r.length, o + 1)));
  }
  return r.reduceRight((o, a, s) => {
    let l = a.route.id ? (i == null ? void 0 : i[a.route.id]) : null,
      u = n ? a.route.errorElement || x.createElement(WC, null) : null,
      c = () =>
        x.createElement(
          GC,
          {
            match: a,
            routeContext: { outlet: o, matches: t.concat(r.slice(0, s + 1)) },
          },
          l ? u : a.route.element !== void 0 ? a.route.element : o
        );
    return n && (a.route.errorElement || s === 0)
      ? x.createElement(HC, {
          location: n.location,
          component: u,
          error: l,
          children: c(),
        })
      : c();
  }, null);
}
var Yf;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Yf || (Yf = {}));
function qC(e) {
  let t = x.useContext($p);
  return t || nt(!1), t;
}
function KC() {
  var e;
  let t = x.useContext(yw),
    n = qC(Yf.UseRouteError),
    r = x.useContext(Ea),
    i = r.matches[r.matches.length - 1];
  return (
    t ||
    (r || nt(!1),
    i.route.id || nt(!1),
    (e = n.errors) == null ? void 0 : e[i.route.id])
  );
}
function XC(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  Yi() || nt(!1);
  let o = x.useContext($p),
    a = sn();
  return (
    x.useEffect(() => {
      (o && o.navigation.state !== "idle") ||
        a(t, { replace: n, state: r, relative: i });
    }),
    null
  );
}
function Rs(e) {
  nt(!1);
}
function QC(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Bn.Pop,
    navigator: o,
    static: a = !1,
  } = e;
  Yi() && nt(!1);
  let s = t.replace(/^\/*/, "/"),
    l = x.useMemo(() => ({ basename: s, navigator: o, static: a }), [s, o, a]);
  typeof r == "string" && (r = Gi(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: d = "",
      state: f = null,
      key: m = "default",
    } = r,
    h = x.useMemo(() => {
      let v = hw(u, s);
      return v == null
        ? null
        : { pathname: v, search: c, hash: d, state: f, key: m };
    }, [s, u, c, d, f, m]);
  return h == null
    ? null
    : x.createElement(
        Up.Provider,
        { value: l },
        x.createElement(Cu.Provider, {
          children: n,
          value: { location: h, navigationType: i },
        })
      );
}
function JC(e) {
  let { children: t, location: n } = e,
    r = x.useContext($C),
    i = r && !t ? r.router.routes : qf(t);
  return BC(i, n);
}
var yv;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(yv || (yv = {}));
new Promise(() => {});
function qf(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, i) => {
      if (!x.isValidElement(r)) return;
      if (r.type === x.Fragment) {
        n.push.apply(n, qf(r.props.children, t));
        return;
      }
      r.type !== Rs && nt(!1);
      let o = [...t, i],
        a = {
          id: r.props.id || o.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (a.children = qf(r.props.children, o)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Kf() {
  return (
    (Kf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Kf.apply(this, arguments)
  );
}
function ZC(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function eP(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function tP(e, t) {
  return e.button === 0 && (!t || t === "_self") && !eP(e);
}
const nP = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function rP(e) {
  let { basename: t, children: n, window: r } = e,
    i = x.useRef();
  i.current == null && (i.current = oC({ window: r, v5Compat: !0 }));
  let o = i.current,
    [a, s] = x.useState({ action: o.action, location: o.location });
  return (
    x.useLayoutEffect(() => o.listen(s), [o]),
    x.createElement(QC, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
    })
  );
}
const iP = x.forwardRef(function (t, n) {
  let {
      onClick: r,
      relative: i,
      reloadDocument: o,
      replace: a,
      state: s,
      target: l,
      to: u,
      preventScrollReset: c,
    } = t,
    d = ZC(t, nP),
    f = UC(u, { relative: i }),
    m = oP(u, {
      replace: a,
      state: s,
      target: l,
      preventScrollReset: c,
      relative: i,
    });
  function h(v) {
    r && r(v), v.defaultPrevented || m(v);
  }
  return x.createElement(
    "a",
    Kf({}, d, { href: f, onClick: o ? r : h, ref: n, target: l })
  );
});
function oP(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: a,
    } = t === void 0 ? {} : t,
    s = sn(),
    l = Ca(),
    u = xw(e, { relative: a });
  return x.useCallback(
    (c) => {
      if (tP(c, n)) {
        c.preventDefault();
        let d = r !== void 0 ? r : Hf(l) === Hf(u);
        s(e, { replace: d, state: i, preventScrollReset: o, relative: a });
      }
    },
    [l, s, u, r, i, n, e, o, a]
  );
}
var aP = {
    prefix: "fas",
    iconName: "bars",
    icon: [
      448,
      512,
      ["navicon"],
      "f0c9",
      "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z",
    ],
  },
  sP = aP,
  lP = {
    prefix: "fas",
    iconName: "user",
    icon: [
      448,
      512,
      [128100, 62144],
      "f007",
      "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z",
    ],
  },
  uP = {
    prefix: "fas",
    iconName: "ban",
    icon: [
      512,
      512,
      [128683, "cancel"],
      "f05e",
      "M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z",
    ],
  },
  cP = uP,
  fP = {
    prefix: "fas",
    iconName: "bomb",
    icon: [
      512,
      512,
      [128163],
      "f1e2",
      "M459.1 52.4L442.6 6.5C440.7 2.6 436.5 0 432.1 0s-8.5 2.6-10.4 6.5L405.2 52.4l-46 16.8c-4.3 1.6-7.3 5.9-7.2 10.4c0 4.5 3 8.7 7.2 10.2l45.7 16.8 16.8 45.8c1.5 4.4 5.8 7.5 10.4 7.5s8.9-3.1 10.4-7.5l16.5-45.8 45.7-16.8c4.2-1.5 7.2-5.7 7.2-10.2c0-4.6-3-8.9-7.2-10.4L459.1 52.4zm-132.4 53c-12.5-12.5-32.8-12.5-45.3 0l-2.9 2.9C256.5 100.3 232.7 96 208 96C93.1 96 0 189.1 0 304S93.1 512 208 512s208-93.1 208-208c0-24.7-4.3-48.5-12.2-70.5l2.9-2.9c12.5-12.5 12.5-32.8 0-45.3l-80-80zM200 192c-57.4 0-104 46.6-104 104v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-75.1 60.9-136 136-136h8c8.8 0 16 7.2 16 16s-7.2 16-16 16h-8z",
    ],
  },
  dP = {
    prefix: "fas",
    iconName: "code",
    icon: [
      640,
      512,
      [],
      "f121",
      "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z",
    ],
  },
  Bp = {
    prefix: "fas",
    iconName: "arrow-right",
    icon: [
      448,
      512,
      [8594],
      "f061",
      "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z",
    ],
  },
  pP = {
    prefix: "fas",
    iconName: "heart",
    icon: [
      512,
      512,
      [
        128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829,
        10084, 61578,
      ],
      "f004",
      "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z",
    ],
  },
  mP = {
    prefix: "fas",
    iconName: "user-astronaut",
    icon: [
      448,
      512,
      [],
      "f4fb",
      "M370.7 96.1C346.1 39.5 289.7 0 224 0S101.9 39.5 77.3 96.1C60.9 97.5 48 111.2 48 128v64c0 16.8 12.9 30.5 29.3 31.9C101.9 280.5 158.3 320 224 320s122.1-39.5 146.7-96.1c16.4-1.4 29.3-15.1 29.3-31.9V128c0-16.8-12.9-30.5-29.3-31.9zM336 144v16c0 53-43 96-96 96H208c-53 0-96-43-96-96V144c0-26.5 21.5-48 48-48H288c26.5 0 48 21.5 48 48zM189.3 162.7l-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3 .9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6zM112.7 316.5C46.7 342.6 0 407 0 482.3C0 498.7 13.3 512 29.7 512H128V448c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64l98.3 0c16.4 0 29.7-13.3 29.7-29.7c0-75.3-46.7-139.7-112.7-165.8C303.9 338.8 265.5 352 224 352s-79.9-13.2-111.3-35.5zM176 448c-8.8 0-16 7.2-16 16v48h32V464c0-8.8-7.2-16-16-16zm96 32c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16z",
    ],
  },
  hP = {
    prefix: "fas",
    iconName: "eye",
    icon: [
      576,
      512,
      [128065],
      "f06e",
      "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z",
    ],
  },
  vP = {
    prefix: "fas",
    iconName: "phone",
    icon: [
      512,
      512,
      [128222, 128379],
      "f095",
      "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z",
    ],
  },
  gP = {
    prefix: "fas",
    iconName: "trash",
    icon: [
      448,
      512,
      [],
      "f1f8",
      "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z",
    ],
  },
  yP = {
    prefix: "fas",
    iconName: "poo",
    icon: [
      512,
      512,
      [128169],
      "f2fe",
      "M268.9 .9c-5.5-.7-11 1.4-14.5 5.7s-4.6 10.1-2.8 15.4c2.8 8.2 4.3 16.9 4.3 26.1c0 44.1-35.7 79.9-79.8 80H160c-35.3 0-64 28.7-64 64c0 19.1 8.4 36.3 21.7 48H104c-39.8 0-72 32.2-72 72c0 23.2 11 43.8 28 57c-34.1 5.7-60 35.3-60 71c0 39.8 32.2 72 72 72H440c39.8 0 72-32.2 72-72c0-35.7-25.9-65.3-60-71c17-13.2 28-33.8 28-57c0-39.8-32.2-72-72-72H394.3c13.3-11.7 21.7-28.9 21.7-48c0-35.3-28.7-64-64-64h-5.5c3.5-10 5.5-20.8 5.5-32c0-48.6-36.2-88.8-83.1-95.1zM192 320c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm160-32c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zm0 108.3c0 2.4-.7 4.8-2.2 6.7c-8.2 10.5-39.5 45-93.8 45s-85.6-34.6-93.8-45c-1.5-1.9-2.2-4.3-2.2-6.7c0-6.8 5.5-12.3 12.3-12.3H339.7c6.8 0 12.3 5.5 12.3 12.3z",
    ],
  },
  bw = {
    prefix: "fas",
    iconName: "arrow-left",
    icon: [
      448,
      512,
      [8592],
      "f060",
      "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z",
    ],
  },
  wP = {
    prefix: "fas",
    iconName: "house",
    icon: [
      576,
      512,
      [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"],
      "f015",
      "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z",
    ],
  },
  Sw = {
    prefix: "fas",
    iconName: "envelope-open-text",
    icon: [
      512,
      512,
      [],
      "f658",
      "M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z",
    ],
  },
  xP = {
    prefix: "fas",
    iconName: "plus",
    icon: [
      448,
      512,
      [10133, 61543, "add"],
      "2b",
      "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z",
    ],
  },
  kw = {
    prefix: "fas",
    iconName: "xmark",
    icon: [
      320,
      512,
      [
        128473,
        10005,
        10006,
        10060,
        215,
        "close",
        "multiply",
        "remove",
        "times",
      ],
      "f00d",
      "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z",
    ],
  },
  Wp = kw,
  bP = {
    prefix: "fas",
    iconName: "spinner",
    icon: [
      512,
      512,
      [],
      "f110",
      "M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z",
    ],
  },
  SP = {
    prefix: "fas",
    iconName: "check",
    icon: [
      512,
      512,
      [10003, 10004],
      "f00c",
      "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z",
    ],
  },
  kP = {
    prefix: "fas",
    iconName: "triangle-exclamation",
    icon: [
      512,
      512,
      [9888, "exclamation-triangle", "warning"],
      "f071",
      "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z",
    ],
  },
  EP = kP;
function wv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wv(Object(n), !0).forEach(function (r) {
          _e(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : wv(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ml(e) {
  "@babel/helpers - typeof";
  return (
    (ml =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ml(e)
  );
}
function CP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function PP(e, t, n) {
  return (
    t && xv(e.prototype, t),
    n && xv(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function _e(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Hp(e, t) {
  return jP(e) || AP(e, t) || Ew(e, t) || NP();
}
function Pa(e) {
  return TP(e) || OP(e) || Ew(e) || _P();
}
function TP(e) {
  if (Array.isArray(e)) return Xf(e);
}
function jP(e) {
  if (Array.isArray(e)) return e;
}
function OP(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function AP(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      o = !1,
      a,
      s;
    try {
      for (
        n = n.call(e);
        !(i = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t));
        i = !0
      );
    } catch (l) {
      (o = !0), (s = l);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw s;
      }
    }
    return r;
  }
}
function Ew(e, t) {
  if (e) {
    if (typeof e == "string") return Xf(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Xf(e, t);
  }
}
function Xf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function _P() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var bv = function () {},
  Gp = {},
  Cw = {},
  Pw = null,
  Tw = { mark: bv, measure: bv };
try {
  typeof window < "u" && (Gp = window),
    typeof document < "u" && (Cw = document),
    typeof MutationObserver < "u" && (Pw = MutationObserver),
    typeof performance < "u" && (Tw = performance);
} catch {}
var MP = Gp.navigator || {},
  Sv = MP.userAgent,
  kv = Sv === void 0 ? "" : Sv,
  sr = Gp,
  pe = Cw,
  Ev = Pw,
  is = Tw;
sr.document;
var Pn =
    !!pe.documentElement &&
    !!pe.head &&
    typeof pe.addEventListener == "function" &&
    typeof pe.createElement == "function",
  jw = ~kv.indexOf("MSIE") || ~kv.indexOf("Trident/"),
  os,
  as,
  ss,
  ls,
  us,
  wn = "___FONT_AWESOME___",
  Qf = 16,
  Ow = "fa",
  Aw = "svg-inline--fa",
  Dr = "data-fa-i2svg",
  Jf = "data-fa-pseudo-element",
  RP = "data-fa-pseudo-element-pending",
  Yp = "data-prefix",
  qp = "data-icon",
  Cv = "fontawesome-i2svg",
  LP = "async",
  IP = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  _w = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  fe = "classic",
  xe = "sharp",
  Kp = [fe, xe];
function Ta(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[fe];
    },
  });
}
var na = Ta(
    ((os = {}),
    _e(os, fe, {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      "fa-kit": "kit",
    }),
    _e(os, xe, { fa: "solid", fass: "solid", "fa-solid": "solid" }),
    os)
  ),
  ra = Ta(
    ((as = {}),
    _e(as, fe, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak",
    }),
    _e(as, xe, { solid: "fass" }),
    as)
  ),
  ia = Ta(
    ((ss = {}),
    _e(ss, fe, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    }),
    _e(ss, xe, { fass: "fa-solid" }),
    ss)
  ),
  DP = Ta(
    ((ls = {}),
    _e(ls, fe, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    }),
    _e(ls, xe, { "fa-solid": "fass" }),
    ls)
  ),
  VP = /fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,
  Nw = "fa-layers-text",
  FP =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  zP = Ta(
    ((us = {}),
    _e(us, fe, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    }),
    _e(us, xe, { 900: "fass" }),
    us)
  ),
  Mw = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  $P = Mw.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  UP = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  Tr = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  oa = new Set();
Object.keys(ra[fe]).map(oa.add.bind(oa));
Object.keys(ra[xe]).map(oa.add.bind(oa));
var BP = []
    .concat(Kp, Pa(oa), [
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "beat",
      "border",
      "fade",
      "beat-fade",
      "bounce",
      "flip-both",
      "flip-horizontal",
      "flip-vertical",
      "flip",
      "fw",
      "inverse",
      "layers-counter",
      "layers-text",
      "layers",
      "li",
      "pull-left",
      "pull-right",
      "pulse",
      "rotate-180",
      "rotate-270",
      "rotate-90",
      "rotate-by",
      "shake",
      "spin-pulse",
      "spin-reverse",
      "spin",
      "stack-1x",
      "stack-2x",
      "stack",
      "ul",
      Tr.GROUP,
      Tr.SWAP_OPACITY,
      Tr.PRIMARY,
      Tr.SECONDARY,
    ])
    .concat(
      Mw.map(function (e) {
        return "".concat(e, "x");
      })
    )
    .concat(
      $P.map(function (e) {
        return "w-".concat(e);
      })
    ),
  Oo = sr.FontAwesomeConfig || {};
function WP(e) {
  var t = pe.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function HP(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (pe && typeof pe.querySelector == "function") {
  var GP = [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ];
  GP.forEach(function (e) {
    var t = Hp(e, 2),
      n = t[0],
      r = t[1],
      i = HP(WP(n));
    i != null && (Oo[r] = i);
  });
}
var Rw = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Ow,
  replacementClass: Aw,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
Oo.familyPrefix && (Oo.cssPrefix = Oo.familyPrefix);
var zi = R(R({}, Rw), Oo);
zi.autoReplaceSvg || (zi.observeMutations = !1);
var V = {};
Object.keys(Rw).forEach(function (e) {
  Object.defineProperty(V, e, {
    enumerable: !0,
    set: function (n) {
      (zi[e] = n),
        Ao.forEach(function (r) {
          return r(V);
        });
    },
    get: function () {
      return zi[e];
    },
  });
});
Object.defineProperty(V, "familyPrefix", {
  enumerable: !0,
  set: function (t) {
    (zi.cssPrefix = t),
      Ao.forEach(function (n) {
        return n(V);
      });
  },
  get: function () {
    return zi.cssPrefix;
  },
});
sr.FontAwesomeConfig = V;
var Ao = [];
function YP(e) {
  return (
    Ao.push(e),
    function () {
      Ao.splice(Ao.indexOf(e), 1);
    }
  );
}
var Nn = Qf,
  en = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function qP(e) {
  if (!(!e || !Pn)) {
    var t = pe.createElement("style");
    t.setAttribute("type", "text/css"), (t.innerHTML = e);
    for (var n = pe.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var o = n[i],
        a = (o.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(a) > -1 && (r = o);
    }
    return pe.head.insertBefore(t, r), e;
  }
}
var KP = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function aa() {
  for (var e = 12, t = ""; e-- > 0; ) t += KP[(Math.random() * 62) | 0];
  return t;
}
function qi(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function Xp(e) {
  return e.classList
    ? qi(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter(function (t) {
        return t;
      });
}
function Lw(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function XP(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + "".concat(n, '="').concat(Lw(e[n]), '" ');
    }, "")
    .trim();
}
function Pu(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function Qp(e) {
  return (
    e.size !== en.size ||
    e.x !== en.x ||
    e.y !== en.y ||
    e.rotate !== en.rotate ||
    e.flipX ||
    e.flipY
  );
}
function QP(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    i = { transform: "translate(".concat(n / 2, " 256)") },
    o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    a = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    s = "rotate(".concat(t.rotate, " 0 0)"),
    l = { transform: "".concat(o, " ").concat(a, " ").concat(s) },
    u = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: i, inner: l, path: u };
}
function JP(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? Qf : n,
    i = e.height,
    o = i === void 0 ? Qf : i,
    a = e.startCentered,
    s = a === void 0 ? !1 : a,
    l = "";
  return (
    s && jw
      ? (l += "translate("
          .concat(t.x / Nn - r / 2, "em, ")
          .concat(t.y / Nn - o / 2, "em) "))
      : s
      ? (l += "translate(calc(-50% + "
          .concat(t.x / Nn, "em), calc(-50% + ")
          .concat(t.y / Nn, "em)) "))
      : (l += "translate(".concat(t.x / Nn, "em, ").concat(t.y / Nn, "em) ")),
    (l += "scale("
      .concat((t.size / Nn) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / Nn) * (t.flipY ? -1 : 1), ") ")),
    (l += "rotate(".concat(t.rotate, "deg) ")),
    l
  );
}
var ZP = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Iw() {
  var e = Ow,
    t = Aw,
    n = V.cssPrefix,
    r = V.replacementClass,
    i = ZP;
  if (n !== e || r !== t) {
    var o = new RegExp("\\.".concat(e, "\\-"), "g"),
      a = new RegExp("\\--".concat(e, "\\-"), "g"),
      s = new RegExp("\\.".concat(t), "g");
    i = i
      .replace(o, ".".concat(n, "-"))
      .replace(a, "--".concat(n, "-"))
      .replace(s, ".".concat(r));
  }
  return i;
}
var Pv = !1;
function kc() {
  V.autoAddCss && !Pv && (qP(Iw()), (Pv = !0));
}
var e4 = {
    mixout: function () {
      return { dom: { css: Iw, insertCss: kc } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          kc();
        },
        beforeI2svg: function () {
          kc();
        },
      };
    },
  },
  xn = sr || {};
xn[wn] || (xn[wn] = {});
xn[wn].styles || (xn[wn].styles = {});
xn[wn].hooks || (xn[wn].hooks = {});
xn[wn].shims || (xn[wn].shims = []);
var Bt = xn[wn],
  Dw = [],
  t4 = function e() {
    pe.removeEventListener("DOMContentLoaded", e),
      (hl = 1),
      Dw.map(function (t) {
        return t();
      });
  },
  hl = !1;
Pn &&
  ((hl = (pe.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    pe.readyState
  )),
  hl || pe.addEventListener("DOMContentLoaded", t4));
function n4(e) {
  Pn && (hl ? setTimeout(e, 0) : Dw.push(e));
}
function ja(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    i = e.children,
    o = i === void 0 ? [] : i;
  return typeof e == "string"
    ? Lw(e)
    : "<"
        .concat(t, " ")
        .concat(XP(r), ">")
        .concat(o.map(ja).join(""), "</")
        .concat(t, ">");
}
function Tv(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var r4 = function (t, n) {
    return function (r, i, o, a) {
      return t.call(n, r, i, o, a);
    };
  },
  Ec = function (t, n, r, i) {
    var o = Object.keys(t),
      a = o.length,
      s = i !== void 0 ? r4(n, i) : n,
      l,
      u,
      c;
    for (
      r === void 0 ? ((l = 1), (c = t[o[0]])) : ((l = 0), (c = r));
      l < a;
      l++
    )
      (u = o[l]), (c = s(c, t[u], u, t));
    return c;
  };
function i4(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      var o = e.charCodeAt(n++);
      (o & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (o & 1023) + 65536)
        : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
function Zf(e) {
  var t = i4(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function o4(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    i;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function jv(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      i = !!r.icon;
    return i ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function ed(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    i = r === void 0 ? !1 : r,
    o = jv(t);
  typeof Bt.hooks.addPack == "function" && !i
    ? Bt.hooks.addPack(e, jv(t))
    : (Bt.styles[e] = R(R({}, Bt.styles[e] || {}), o)),
    e === "fas" && ed("fa", t);
}
var cs,
  fs,
  ds,
  pi = Bt.styles,
  a4 = Bt.shims,
  s4 =
    ((cs = {}),
    _e(cs, fe, Object.values(ia[fe])),
    _e(cs, xe, Object.values(ia[xe])),
    cs),
  Jp = null,
  Vw = {},
  Fw = {},
  zw = {},
  $w = {},
  Uw = {},
  l4 =
    ((fs = {}),
    _e(fs, fe, Object.keys(na[fe])),
    _e(fs, xe, Object.keys(na[xe])),
    fs);
function u4(e) {
  return ~BP.indexOf(e);
}
function c4(e, t) {
  var n = t.split("-"),
    r = n[0],
    i = n.slice(1).join("-");
  return r === e && i !== "" && !u4(i) ? i : null;
}
var Bw = function () {
  var t = function (o) {
    return Ec(
      pi,
      function (a, s, l) {
        return (a[l] = Ec(s, o, {})), a;
      },
      {}
    );
  };
  (Vw = t(function (i, o, a) {
    if ((o[3] && (i[o[3]] = a), o[2])) {
      var s = o[2].filter(function (l) {
        return typeof l == "number";
      });
      s.forEach(function (l) {
        i[l.toString(16)] = a;
      });
    }
    return i;
  })),
    (Fw = t(function (i, o, a) {
      if (((i[a] = a), o[2])) {
        var s = o[2].filter(function (l) {
          return typeof l == "string";
        });
        s.forEach(function (l) {
          i[l] = a;
        });
      }
      return i;
    })),
    (Uw = t(function (i, o, a) {
      var s = o[2];
      return (
        (i[a] = a),
        s.forEach(function (l) {
          i[l] = a;
        }),
        i
      );
    }));
  var n = "far" in pi || V.autoFetchSvg,
    r = Ec(
      a4,
      function (i, o) {
        var a = o[0],
          s = o[1],
          l = o[2];
        return (
          s === "far" && !n && (s = "fas"),
          typeof a == "string" && (i.names[a] = { prefix: s, iconName: l }),
          typeof a == "number" &&
            (i.unicodes[a.toString(16)] = { prefix: s, iconName: l }),
          i
        );
      },
      { names: {}, unicodes: {} }
    );
  (zw = r.names),
    ($w = r.unicodes),
    (Jp = Tu(V.styleDefault, { family: V.familyDefault }));
};
YP(function (e) {
  Jp = Tu(e.styleDefault, { family: V.familyDefault });
});
Bw();
function Zp(e, t) {
  return (Vw[e] || {})[t];
}
function f4(e, t) {
  return (Fw[e] || {})[t];
}
function jr(e, t) {
  return (Uw[e] || {})[t];
}
function Ww(e) {
  return zw[e] || { prefix: null, iconName: null };
}
function d4(e) {
  var t = $w[e],
    n = Zp("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function lr() {
  return Jp;
}
var em = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function Tu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? fe : n,
    i = na[r][e],
    o = ra[r][e] || ra[r][i],
    a = e in Bt.styles ? e : null;
  return o || a || null;
}
var Ov =
  ((ds = {}),
  _e(ds, fe, Object.keys(ia[fe])),
  _e(ds, xe, Object.keys(ia[xe])),
  ds);
function ju(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    i = r === void 0 ? !1 : r,
    o =
      ((t = {}),
      _e(t, fe, "".concat(V.cssPrefix, "-").concat(fe)),
      _e(t, xe, "".concat(V.cssPrefix, "-").concat(xe)),
      t),
    a = null,
    s = fe;
  (e.includes(o[fe]) ||
    e.some(function (u) {
      return Ov[fe].includes(u);
    })) &&
    (s = fe),
    (e.includes(o[xe]) ||
      e.some(function (u) {
        return Ov[xe].includes(u);
      })) &&
      (s = xe);
  var l = e.reduce(function (u, c) {
    var d = c4(V.cssPrefix, c);
    if (
      (pi[c]
        ? ((c = s4[s].includes(c) ? DP[s][c] : c), (a = c), (u.prefix = c))
        : l4[s].indexOf(c) > -1
        ? ((a = c), (u.prefix = Tu(c, { family: s })))
        : d
        ? (u.iconName = d)
        : c !== V.replacementClass &&
          c !== o[fe] &&
          c !== o[xe] &&
          u.rest.push(c),
      !i && u.prefix && u.iconName)
    ) {
      var f = a === "fa" ? Ww(u.iconName) : {},
        m = jr(u.prefix, u.iconName);
      f.prefix && (a = null),
        (u.iconName = f.iconName || m || u.iconName),
        (u.prefix = f.prefix || u.prefix),
        u.prefix === "far" &&
          !pi.far &&
          pi.fas &&
          !V.autoFetchSvg &&
          (u.prefix = "fas");
    }
    return u;
  }, em());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"),
    !l.prefix &&
      s === xe &&
      (pi.fass || V.autoFetchSvg) &&
      ((l.prefix = "fass"),
      (l.iconName = jr(l.prefix, l.iconName) || l.iconName)),
    (l.prefix === "fa" || a === "fa") && (l.prefix = lr() || "fas"),
    l
  );
}
var p4 = (function () {
    function e() {
      CP(this, e), (this.definitions = {});
    }
    return (
      PP(e, [
        {
          key: "add",
          value: function () {
            for (
              var n = this, r = arguments.length, i = new Array(r), o = 0;
              o < r;
              o++
            )
              i[o] = arguments[o];
            var a = i.reduce(this._pullDefinitions, {});
            Object.keys(a).forEach(function (s) {
              (n.definitions[s] = R(R({}, n.definitions[s] || {}), a[s])),
                ed(s, a[s]);
              var l = ia[fe][s];
              l && ed(l, a[s]), Bw();
            });
          },
        },
        {
          key: "reset",
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: "_pullDefinitions",
          value: function (n, r) {
            var i = r.prefix && r.iconName && r.icon ? { 0: r } : r;
            return (
              Object.keys(i).map(function (o) {
                var a = i[o],
                  s = a.prefix,
                  l = a.iconName,
                  u = a.icon,
                  c = u[2];
                n[s] || (n[s] = {}),
                  c.length > 0 &&
                    c.forEach(function (d) {
                      typeof d == "string" && (n[s][d] = u);
                    }),
                  (n[s][l] = u);
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  Av = [],
  mi = {},
  Ci = {},
  m4 = Object.keys(Ci);
function h4(e, t) {
  var n = t.mixoutsTo;
  return (
    (Av = e),
    (mi = {}),
    Object.keys(Ci).forEach(function (r) {
      m4.indexOf(r) === -1 && delete Ci[r];
    }),
    Av.forEach(function (r) {
      var i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach(function (a) {
          typeof i[a] == "function" && (n[a] = i[a]),
            ml(i[a]) === "object" &&
              Object.keys(i[a]).forEach(function (s) {
                n[a] || (n[a] = {}), (n[a][s] = i[a][s]);
              });
        }),
        r.hooks)
      ) {
        var o = r.hooks();
        Object.keys(o).forEach(function (a) {
          mi[a] || (mi[a] = []), mi[a].push(o[a]);
        });
      }
      r.provides && r.provides(Ci);
    }),
    n
  );
}
function td(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
    i < n;
    i++
  )
    r[i - 2] = arguments[i];
  var o = mi[e] || [];
  return (
    o.forEach(function (a) {
      t = a.apply(null, [t].concat(r));
    }),
    t
  );
}
function Vr(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = mi[e] || [];
  i.forEach(function (o) {
    o.apply(null, n);
  });
}
function bn() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return Ci[e] ? Ci[e].apply(null, t) : void 0;
}
function nd(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName,
    n = e.prefix || lr();
  if (t)
    return (t = jr(n, t) || t), Tv(Hw.definitions, n, t) || Tv(Bt.styles, n, t);
}
var Hw = new p4(),
  v4 = function () {
    (V.autoReplaceSvg = !1), (V.observeMutations = !1), Vr("noAuto");
  },
  g4 = {
    i2svg: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Pn
        ? (Vr("beforeI2svg", t), bn("pseudoElements2svg", t), bn("i2svg", t))
        : Promise.reject("Operation requires a DOM of some kind.");
    },
    watch: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      V.autoReplaceSvg === !1 && (V.autoReplaceSvg = !0),
        (V.observeMutations = !0),
        n4(function () {
          w4({ autoReplaceSvgRoot: n }), Vr("watch", t);
        });
    },
  },
  y4 = {
    icon: function (t) {
      if (t === null) return null;
      if (ml(t) === "object" && t.prefix && t.iconName)
        return {
          prefix: t.prefix,
          iconName: jr(t.prefix, t.iconName) || t.iconName,
        };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1],
          r = Tu(t[0]);
        return { prefix: r, iconName: jr(r, n) || n };
      }
      if (
        typeof t == "string" &&
        (t.indexOf("".concat(V.cssPrefix, "-")) > -1 || t.match(VP))
      ) {
        var i = ju(t.split(" "), { skipLookups: !0 });
        return {
          prefix: i.prefix || lr(),
          iconName: jr(i.prefix, i.iconName) || i.iconName,
        };
      }
      if (typeof t == "string") {
        var o = lr();
        return { prefix: o, iconName: jr(o, t) || t };
      }
    },
  },
  Et = {
    noAuto: v4,
    config: V,
    dom: g4,
    parse: y4,
    library: Hw,
    findIconDefinition: nd,
    toHtml: ja,
  },
  w4 = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? pe : n;
    (Object.keys(Bt.styles).length > 0 || V.autoFetchSvg) &&
      Pn &&
      V.autoReplaceSvg &&
      Et.dom.i2svg({ node: r });
  };
function Ou(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map(function (r) {
          return ja(r);
        });
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (Pn) {
          var r = pe.createElement("div");
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function x4(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    i = e.attributes,
    o = e.styles,
    a = e.transform;
  if (Qp(a) && n.found && !r.found) {
    var s = n.width,
      l = n.height,
      u = { x: s / l / 2, y: 0.5 };
    i.style = Pu(
      R(
        R({}, o),
        {},
        {
          "transform-origin": ""
            .concat(u.x + a.x / 16, "em ")
            .concat(u.y + a.y / 16, "em"),
        }
      )
    );
  }
  return [{ tag: "svg", attributes: i, children: t }];
}
function b4(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    i = e.attributes,
    o = e.symbol,
    a = o === !0 ? "".concat(t, "-").concat(V.cssPrefix, "-").concat(n) : o;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        { tag: "symbol", attributes: R(R({}, i), {}, { id: a }), children: r },
      ],
    },
  ];
}
function tm(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    i = e.prefix,
    o = e.iconName,
    a = e.transform,
    s = e.symbol,
    l = e.title,
    u = e.maskId,
    c = e.titleId,
    d = e.extra,
    f = e.watchable,
    m = f === void 0 ? !1 : f,
    h = r.found ? r : n,
    v = h.width,
    b = h.height,
    w = i === "fak",
    y = [V.replacementClass, o ? "".concat(V.cssPrefix, "-").concat(o) : ""]
      .filter(function (L) {
        return d.classes.indexOf(L) === -1;
      })
      .filter(function (L) {
        return L !== "" || !!L;
      })
      .concat(d.classes)
      .join(" "),
    g = {
      children: [],
      attributes: R(
        R({}, d.attributes),
        {},
        {
          "data-prefix": i,
          "data-icon": o,
          class: y,
          role: d.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(v, " ").concat(b),
        }
      ),
    },
    S =
      w && !~d.classes.indexOf("fa-fw")
        ? { width: "".concat((v / b) * 16 * 0.0625, "em") }
        : {};
  m && (g.attributes[Dr] = ""),
    l &&
      (g.children.push({
        tag: "title",
        attributes: {
          id: g.attributes["aria-labelledby"] || "title-".concat(c || aa()),
        },
        children: [l],
      }),
      delete g.attributes.title);
  var k = R(
      R({}, g),
      {},
      {
        prefix: i,
        iconName: o,
        main: n,
        mask: r,
        maskId: u,
        transform: a,
        symbol: s,
        styles: R(R({}, S), d.styles),
      }
    ),
    E =
      r.found && n.found
        ? bn("generateAbstractMask", k) || { children: [], attributes: {} }
        : bn("generateAbstractIcon", k) || { children: [], attributes: {} },
    C = E.children,
    T = E.attributes;
  return (k.children = C), (k.attributes = T), s ? b4(k) : x4(k);
}
function _v(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    i = e.transform,
    o = e.title,
    a = e.extra,
    s = e.watchable,
    l = s === void 0 ? !1 : s,
    u = R(
      R(R({}, a.attributes), o ? { title: o } : {}),
      {},
      { class: a.classes.join(" ") }
    );
  l && (u[Dr] = "");
  var c = R({}, a.styles);
  Qp(i) &&
    ((c.transform = JP({
      transform: i,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (c["-webkit-transform"] = c.transform));
  var d = Pu(c);
  d.length > 0 && (u.style = d);
  var f = [];
  return (
    f.push({ tag: "span", attributes: u, children: [t] }),
    o &&
      f.push({ tag: "span", attributes: { class: "sr-only" }, children: [o] }),
    f
  );
}
function S4(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    i = R(
      R(R({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(" ") }
    ),
    o = Pu(r.styles);
  o.length > 0 && (i.style = o);
  var a = [];
  return (
    a.push({ tag: "span", attributes: i, children: [t] }),
    n &&
      a.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    a
  );
}
var Cc = Bt.styles;
function rd(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    i = Hp(r, 1),
    o = i[0],
    a = null;
  return (
    Array.isArray(o)
      ? (a = {
          tag: "g",
          attributes: { class: "".concat(V.cssPrefix, "-").concat(Tr.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(V.cssPrefix, "-").concat(Tr.SECONDARY),
                fill: "currentColor",
                d: o[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(V.cssPrefix, "-").concat(Tr.PRIMARY),
                fill: "currentColor",
                d: o[1],
              },
            },
          ],
        })
      : (a = { tag: "path", attributes: { fill: "currentColor", d: o } }),
    { found: !0, width: t, height: n, icon: a }
  );
}
var k4 = { found: !1, width: 512, height: 512 };
function E4(e, t) {
  !_w &&
    !V.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function id(e, t) {
  var n = t;
  return (
    t === "fa" && V.styleDefault !== null && (t = lr()),
    new Promise(function (r, i) {
      if ((bn("missingIconAbstract"), n === "fa")) {
        var o = Ww(e) || {};
        (e = o.iconName || e), (t = o.prefix || t);
      }
      if (e && t && Cc[t] && Cc[t][e]) {
        var a = Cc[t][e];
        return r(rd(a));
      }
      E4(e, t),
        r(
          R(
            R({}, k4),
            {},
            {
              icon:
                V.showMissingIcons && e ? bn("missingIconAbstract") || {} : {},
            }
          )
        );
    })
  );
}
var Nv = function () {},
  od =
    V.measurePerformance && is && is.mark && is.measure
      ? is
      : { mark: Nv, measure: Nv },
  yo = 'FA "6.2.0"',
  C4 = function (t) {
    return (
      od.mark("".concat(yo, " ").concat(t, " begins")),
      function () {
        return Gw(t);
      }
    );
  },
  Gw = function (t) {
    od.mark("".concat(yo, " ").concat(t, " ends")),
      od.measure(
        "".concat(yo, " ").concat(t),
        "".concat(yo, " ").concat(t, " begins"),
        "".concat(yo, " ").concat(t, " ends")
      );
  },
  nm = { begin: C4, end: Gw },
  Ls = function () {};
function Mv(e) {
  var t = e.getAttribute ? e.getAttribute(Dr) : null;
  return typeof t == "string";
}
function P4(e) {
  var t = e.getAttribute ? e.getAttribute(Yp) : null,
    n = e.getAttribute ? e.getAttribute(qp) : null;
  return t && n;
}
function T4(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(V.replacementClass)
  );
}
function j4() {
  if (V.autoReplaceSvg === !0) return Is.replace;
  var e = Is[V.autoReplaceSvg];
  return e || Is.replace;
}
function O4(e) {
  return pe.createElementNS("http://www.w3.org/2000/svg", e);
}
function A4(e) {
  return pe.createElement(e);
}
function Yw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === "svg" ? O4 : A4) : n;
  if (typeof e == "string") return pe.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (a) {
    i.setAttribute(a, e.attributes[a]);
  });
  var o = e.children || [];
  return (
    o.forEach(function (a) {
      i.appendChild(Yw(a, { ceFn: r }));
    }),
    i
  );
}
function _4(e) {
  var t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
var Is = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (i) {
          n.parentNode.insertBefore(Yw(i), n);
        }),
        n.getAttribute(Dr) === null && V.keepOriginalSource)
      ) {
        var r = pe.createComment(_4(n));
        n.parentNode.replaceChild(r, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      r = t[1];
    if (~Xp(n).indexOf(V.replacementClass)) return Is.replace(t);
    var i = new RegExp("".concat(V.cssPrefix, "-.*"));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var o = r[0].attributes.class.split(" ").reduce(
        function (s, l) {
          return (
            l === V.replacementClass || l.match(i)
              ? s.toSvg.push(l)
              : s.toNode.push(l),
            s
          );
        },
        { toNode: [], toSvg: [] }
      );
      (r[0].attributes.class = o.toSvg.join(" ")),
        o.toNode.length === 0
          ? n.removeAttribute("class")
          : n.setAttribute("class", o.toNode.join(" "));
    }
    var a = r.map(function (s) {
      return ja(s);
    }).join(`
`);
    n.setAttribute(Dr, ""), (n.innerHTML = a);
  },
};
function Rv(e) {
  e();
}
function qw(e, t) {
  var n = typeof t == "function" ? t : Ls;
  if (e.length === 0) n();
  else {
    var r = Rv;
    V.mutateApproach === LP && (r = sr.requestAnimationFrame || Rv),
      r(function () {
        var i = j4(),
          o = nm.begin("mutate");
        e.map(i), o(), n();
      });
  }
}
var rm = !1;
function Kw() {
  rm = !0;
}
function ad() {
  rm = !1;
}
var vl = null;
function Lv(e) {
  if (Ev && V.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? Ls : t,
      r = e.nodeCallback,
      i = r === void 0 ? Ls : r,
      o = e.pseudoElementsCallback,
      a = o === void 0 ? Ls : o,
      s = e.observeMutationsRoot,
      l = s === void 0 ? pe : s;
    (vl = new Ev(function (u) {
      if (!rm) {
        var c = lr();
        qi(u).forEach(function (d) {
          if (
            (d.type === "childList" &&
              d.addedNodes.length > 0 &&
              !Mv(d.addedNodes[0]) &&
              (V.searchPseudoElements && a(d.target), n(d.target)),
            d.type === "attributes" &&
              d.target.parentNode &&
              V.searchPseudoElements &&
              a(d.target.parentNode),
            d.type === "attributes" &&
              Mv(d.target) &&
              ~UP.indexOf(d.attributeName))
          )
            if (d.attributeName === "class" && P4(d.target)) {
              var f = ju(Xp(d.target)),
                m = f.prefix,
                h = f.iconName;
              d.target.setAttribute(Yp, m || c),
                h && d.target.setAttribute(qp, h);
            } else T4(d.target) && i(d.target);
        });
      }
    })),
      Pn &&
        vl.observe(l, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function N4() {
  vl && vl.disconnect();
}
function M4(e) {
  var t = e.getAttribute("style"),
    n = [];
  return (
    t &&
      (n = t.split(";").reduce(function (r, i) {
        var o = i.split(":"),
          a = o[0],
          s = o.slice(1);
        return a && s.length > 0 && (r[a] = s.join(":").trim()), r;
      }, {})),
    n
  );
}
function R4(e) {
  var t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "",
    i = ju(Xp(e));
  return (
    i.prefix || (i.prefix = lr()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName =
          f4(i.prefix, e.innerText) || Zp(i.prefix, Zf(e.innerText))),
      !i.iconName &&
        V.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function L4(e) {
  var t = qi(e.attributes).reduce(function (i, o) {
      return (
        i.name !== "class" && i.name !== "style" && (i[o.name] = o.value), i
      );
    }, {}),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return (
    V.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(V.replacementClass, "-title-")
            .concat(r || aa()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function I4() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: en,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Iv(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = R4(e),
    r = n.iconName,
    i = n.prefix,
    o = n.rest,
    a = L4(e),
    s = td("parseNodeAttributes", {}, e),
    l = t.styleParser ? M4(e) : [];
  return R(
    {
      iconName: r,
      title: e.getAttribute("title"),
      titleId: e.getAttribute("data-fa-title-id"),
      prefix: i,
      transform: en,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: o, styles: l, attributes: a },
    },
    s
  );
}
var D4 = Bt.styles;
function Xw(e) {
  var t = V.autoReplaceSvg === "nest" ? Iv(e, { styleParser: !1 }) : Iv(e);
  return ~t.extra.classes.indexOf(Nw)
    ? bn("generateLayersText", e, t)
    : bn("generateSvgReplacementMutation", e, t);
}
var ur = new Set();
Kp.map(function (e) {
  ur.add("fa-".concat(e));
});
Object.keys(na[fe]).map(ur.add.bind(ur));
Object.keys(na[xe]).map(ur.add.bind(ur));
ur = Pa(ur);
function Dv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Pn) return Promise.resolve();
  var n = pe.documentElement.classList,
    r = function (d) {
      return n.add("".concat(Cv, "-").concat(d));
    },
    i = function (d) {
      return n.remove("".concat(Cv, "-").concat(d));
    },
    o = V.autoFetchSvg
      ? ur
      : Kp.map(function (c) {
          return "fa-".concat(c);
        }).concat(Object.keys(D4));
  o.includes("fa") || o.push("fa");
  var a = [".".concat(Nw, ":not([").concat(Dr, "])")]
    .concat(
      o.map(function (c) {
        return ".".concat(c, ":not([").concat(Dr, "])");
      })
    )
    .join(", ");
  if (a.length === 0) return Promise.resolve();
  var s = [];
  try {
    s = qi(e.querySelectorAll(a));
  } catch {}
  if (s.length > 0) r("pending"), i("complete");
  else return Promise.resolve();
  var l = nm.begin("onTree"),
    u = s.reduce(function (c, d) {
      try {
        var f = Xw(d);
        f && c.push(f);
      } catch (m) {
        _w || (m.name === "MissingIcon" && console.error(m));
      }
      return c;
    }, []);
  return new Promise(function (c, d) {
    Promise.all(u)
      .then(function (f) {
        qw(f, function () {
          r("active"),
            r("complete"),
            i("pending"),
            typeof t == "function" && t(),
            l(),
            c();
        });
      })
      .catch(function (f) {
        l(), d(f);
      });
  });
}
function V4(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Xw(e).then(function (n) {
    n && qw([n], t);
  });
}
function F4(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : nd(t || {}),
      i = n.mask;
    return (
      i && (i = (i || {}).icon ? i : nd(i || {})),
      e(r, R(R({}, n), {}, { mask: i }))
    );
  };
}
var z4 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      i = r === void 0 ? en : r,
      o = n.symbol,
      a = o === void 0 ? !1 : o,
      s = n.mask,
      l = s === void 0 ? null : s,
      u = n.maskId,
      c = u === void 0 ? null : u,
      d = n.title,
      f = d === void 0 ? null : d,
      m = n.titleId,
      h = m === void 0 ? null : m,
      v = n.classes,
      b = v === void 0 ? [] : v,
      w = n.attributes,
      y = w === void 0 ? {} : w,
      g = n.styles,
      S = g === void 0 ? {} : g;
    if (t) {
      var k = t.prefix,
        E = t.iconName,
        C = t.icon;
      return Ou(R({ type: "icon" }, t), function () {
        return (
          Vr("beforeDOMElementCreation", { iconDefinition: t, params: n }),
          V.autoA11y &&
            (f
              ? (y["aria-labelledby"] = ""
                  .concat(V.replacementClass, "-title-")
                  .concat(h || aa()))
              : ((y["aria-hidden"] = "true"), (y.focusable = "false"))),
          tm({
            icons: {
              main: rd(C),
              mask: l
                ? rd(l.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: k,
            iconName: E,
            transform: R(R({}, en), i),
            symbol: a,
            title: f,
            maskId: c,
            titleId: h,
            extra: { attributes: y, styles: S, classes: b },
          })
        );
      });
    }
  },
  $4 = {
    mixout: function () {
      return { icon: F4(z4) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = Dv), (n.nodeCallback = V4), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? pe : r,
          o = n.callback,
          a = o === void 0 ? function () {} : o;
        return Dv(i, a);
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var i = r.iconName,
            o = r.title,
            a = r.titleId,
            s = r.prefix,
            l = r.transform,
            u = r.symbol,
            c = r.mask,
            d = r.maskId,
            f = r.extra;
          return new Promise(function (m, h) {
            Promise.all([
              id(i, s),
              c.iconName
                ? id(c.iconName, c.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (v) {
                var b = Hp(v, 2),
                  w = b[0],
                  y = b[1];
                m([
                  n,
                  tm({
                    icons: { main: w, mask: y },
                    prefix: s,
                    iconName: i,
                    transform: l,
                    symbol: u,
                    maskId: d,
                    title: o,
                    titleId: a,
                    extra: f,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(h);
          });
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            i = n.attributes,
            o = n.main,
            a = n.transform,
            s = n.styles,
            l = Pu(s);
          l.length > 0 && (i.style = l);
          var u;
          return (
            Qp(a) &&
              (u = bn("generateAbstractTransformGrouping", {
                main: o,
                transform: a,
                containerWidth: o.width,
                iconWidth: o.width,
              })),
            r.push(u || o.icon),
            { children: r, attributes: i }
          );
        });
    },
  },
  U4 = {
    mixout: function () {
      return {
        layer: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.classes,
            o = i === void 0 ? [] : i;
          return Ou({ type: "layer" }, function () {
            Vr("beforeDOMElementCreation", { assembler: n, params: r });
            var a = [];
            return (
              n(function (s) {
                Array.isArray(s)
                  ? s.map(function (l) {
                      a = a.concat(l.abstract);
                    })
                  : (a = a.concat(s.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(V.cssPrefix, "-layers")]
                      .concat(Pa(o))
                      .join(" "),
                  },
                  children: a,
                },
              ]
            );
          });
        },
      };
    },
  },
  B4 = {
    mixout: function () {
      return {
        counter: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.title,
            o = i === void 0 ? null : i,
            a = r.classes,
            s = a === void 0 ? [] : a,
            l = r.attributes,
            u = l === void 0 ? {} : l,
            c = r.styles,
            d = c === void 0 ? {} : c;
          return Ou({ type: "counter", content: n }, function () {
            return (
              Vr("beforeDOMElementCreation", { content: n, params: r }),
              S4({
                content: n.toString(),
                title: o,
                extra: {
                  attributes: u,
                  styles: d,
                  classes: ["".concat(V.cssPrefix, "-layers-counter")].concat(
                    Pa(s)
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  W4 = {
    mixout: function () {
      return {
        text: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.transform,
            o = i === void 0 ? en : i,
            a = r.title,
            s = a === void 0 ? null : a,
            l = r.classes,
            u = l === void 0 ? [] : l,
            c = r.attributes,
            d = c === void 0 ? {} : c,
            f = r.styles,
            m = f === void 0 ? {} : f;
          return Ou({ type: "text", content: n }, function () {
            return (
              Vr("beforeDOMElementCreation", { content: n, params: r }),
              _v({
                content: n,
                transform: R(R({}, en), o),
                title: s,
                extra: {
                  attributes: d,
                  styles: m,
                  classes: ["".concat(V.cssPrefix, "-layers-text")].concat(
                    Pa(u)
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var i = r.title,
          o = r.transform,
          a = r.extra,
          s = null,
          l = null;
        if (jw) {
          var u = parseInt(getComputedStyle(n).fontSize, 10),
            c = n.getBoundingClientRect();
          (s = c.width / u), (l = c.height / u);
        }
        return (
          V.autoA11y && !i && (a.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            n,
            _v({
              content: n.innerHTML,
              width: s,
              height: l,
              transform: o,
              title: i,
              extra: a,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  H4 = new RegExp('"', "ug"),
  Vv = [1105920, 1112319];
function G4(e) {
  var t = e.replace(H4, ""),
    n = o4(t, 0),
    r = n >= Vv[0] && n <= Vv[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: Zf(i ? t[0] : t), isSecondary: r || i };
}
function Fv(e, t) {
  var n = "".concat(RP).concat(t.replace(":", "-"));
  return new Promise(function (r, i) {
    if (e.getAttribute(n) !== null) return r();
    var o = qi(e.children),
      a = o.filter(function (C) {
        return C.getAttribute(Jf) === t;
      })[0],
      s = sr.getComputedStyle(e, t),
      l = s.getPropertyValue("font-family").match(FP),
      u = s.getPropertyValue("font-weight"),
      c = s.getPropertyValue("content");
    if (a && !l) return e.removeChild(a), r();
    if (l && c !== "none" && c !== "") {
      var d = s.getPropertyValue("content"),
        f = ~["Sharp"].indexOf(l[2]) ? xe : fe,
        m = ~[
          "Solid",
          "Regular",
          "Light",
          "Thin",
          "Duotone",
          "Brands",
          "Kit",
        ].indexOf(l[2])
          ? ra[f][l[2].toLowerCase()]
          : zP[f][u],
        h = G4(d),
        v = h.value,
        b = h.isSecondary,
        w = l[0].startsWith("FontAwesome"),
        y = Zp(m, v),
        g = y;
      if (w) {
        var S = d4(v);
        S.iconName && S.prefix && ((y = S.iconName), (m = S.prefix));
      }
      if (
        y &&
        !b &&
        (!a || a.getAttribute(Yp) !== m || a.getAttribute(qp) !== g)
      ) {
        e.setAttribute(n, g), a && e.removeChild(a);
        var k = I4(),
          E = k.extra;
        (E.attributes[Jf] = t),
          id(y, m)
            .then(function (C) {
              var T = tm(
                  R(
                    R({}, k),
                    {},
                    {
                      icons: { main: C, mask: em() },
                      prefix: m,
                      iconName: g,
                      extra: E,
                      watchable: !0,
                    }
                  )
                ),
                L = pe.createElement("svg");
              t === "::before"
                ? e.insertBefore(L, e.firstChild)
                : e.appendChild(L),
                (L.outerHTML = T.map(function (N) {
                  return ja(N);
                }).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(i);
      } else r();
    } else r();
  });
}
function Y4(e) {
  return Promise.all([Fv(e, "::before"), Fv(e, "::after")]);
}
function q4(e) {
  return (
    e.parentNode !== document.head &&
    !~IP.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Jf) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function zv(e) {
  if (Pn)
    return new Promise(function (t, n) {
      var r = qi(e.querySelectorAll("*")).filter(q4).map(Y4),
        i = nm.begin("searchPseudoElements");
      Kw(),
        Promise.all(r)
          .then(function () {
            i(), ad(), t();
          })
          .catch(function () {
            i(), ad(), n();
          });
    });
}
var K4 = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = zv), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? pe : r;
        V.searchPseudoElements && zv(i);
      };
    },
  },
  $v = !1,
  X4 = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            Kw(), ($v = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Lv(td("mutationObserverCallbacks", {}));
        },
        noAuto: function () {
          N4();
        },
        watch: function (n) {
          var r = n.observeMutationsRoot;
          $v
            ? ad()
            : Lv(td("mutationObserverCallbacks", { observeMutationsRoot: r }));
        },
      };
    },
  },
  Uv = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return t
      .toLowerCase()
      .split(" ")
      .reduce(function (r, i) {
        var o = i.toLowerCase().split("-"),
          a = o[0],
          s = o.slice(1).join("-");
        if (a && s === "h") return (r.flipX = !0), r;
        if (a && s === "v") return (r.flipY = !0), r;
        if (((s = parseFloat(s)), isNaN(s))) return r;
        switch (a) {
          case "grow":
            r.size = r.size + s;
            break;
          case "shrink":
            r.size = r.size - s;
            break;
          case "left":
            r.x = r.x - s;
            break;
          case "right":
            r.x = r.x + s;
            break;
          case "up":
            r.y = r.y - s;
            break;
          case "down":
            r.y = r.y + s;
            break;
          case "rotate":
            r.rotate = r.rotate + s;
            break;
        }
        return r;
      }, n);
  },
  Q4 = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return Uv(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-transform");
          return i && (n.transform = Uv(i)), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          i = n.transform,
          o = n.containerWidth,
          a = n.iconWidth,
          s = { transform: "translate(".concat(o / 2, " 256)") },
          l = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "),
          u = "scale("
            .concat((i.size / 16) * (i.flipX ? -1 : 1), ", ")
            .concat((i.size / 16) * (i.flipY ? -1 : 1), ") "),
          c = "rotate(".concat(i.rotate, " 0 0)"),
          d = { transform: "".concat(l, " ").concat(u, " ").concat(c) },
          f = { transform: "translate(".concat((a / 2) * -1, " -256)") },
          m = { outer: s, inner: d, path: f };
        return {
          tag: "g",
          attributes: R({}, m.outer),
          children: [
            {
              tag: "g",
              attributes: R({}, m.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: R(R({}, r.icon.attributes), m.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  Pc = { x: 0, y: 0, width: "100%", height: "100%" };
function Bv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function J4(e) {
  return e.tag === "g" ? e.children : [e];
}
var Z4 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-mask"),
            o = i
              ? ju(
                  i.split(" ").map(function (a) {
                    return a.trim();
                  })
                )
              : em();
          return (
            o.prefix || (o.prefix = lr()),
            (n.mask = o),
            (n.maskId = r.getAttribute("data-fa-mask-id")),
            n
          );
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          i = n.attributes,
          o = n.main,
          a = n.mask,
          s = n.maskId,
          l = n.transform,
          u = o.width,
          c = o.icon,
          d = a.width,
          f = a.icon,
          m = QP({ transform: l, containerWidth: d, iconWidth: u }),
          h = { tag: "rect", attributes: R(R({}, Pc), {}, { fill: "white" }) },
          v = c.children ? { children: c.children.map(Bv) } : {},
          b = {
            tag: "g",
            attributes: R({}, m.inner),
            children: [
              Bv(
                R({ tag: c.tag, attributes: R(R({}, c.attributes), m.path) }, v)
              ),
            ],
          },
          w = { tag: "g", attributes: R({}, m.outer), children: [b] },
          y = "mask-".concat(s || aa()),
          g = "clip-".concat(s || aa()),
          S = {
            tag: "mask",
            attributes: R(
              R({}, Pc),
              {},
              {
                id: y,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              }
            ),
            children: [h, w],
          },
          k = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: g }, children: J4(f) },
              S,
            ],
          };
        return (
          r.push(k, {
            tag: "rect",
            attributes: R(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(g, ")"),
                mask: "url(#".concat(y, ")"),
              },
              Pc
            ),
          }),
          { children: r, attributes: i }
        );
      };
    },
  },
  eT = {
    provides: function (t) {
      var n = !1;
      sr.matchMedia &&
        (n = sr.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (t.missingIconAbstract = function () {
          var r = [],
            i = { fill: "currentColor" },
            o = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          r.push({
            tag: "path",
            attributes: R(
              R({}, i),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              }
            ),
          });
          var a = R(R({}, o), {}, { attributeName: "opacity" }),
            s = {
              tag: "circle",
              attributes: R(R({}, i), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            n ||
              s.children.push(
                {
                  tag: "animate",
                  attributes: R(
                    R({}, o),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" }
                  ),
                },
                {
                  tag: "animate",
                  attributes: R(R({}, a), {}, { values: "1;0;1;1;0;1;" }),
                }
              ),
            r.push(s),
            r.push({
              tag: "path",
              attributes: R(
                R({}, i),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                }
              ),
              children: n
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: R(R({}, a), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            n ||
              r.push({
                tag: "path",
                attributes: R(
                  R({}, i),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  }
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: R(R({}, a), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: r }
          );
        });
    },
  },
  tT = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-symbol"),
            o = i === null ? !1 : i === "" ? !0 : i;
          return (n.symbol = o), n;
        },
      };
    },
  },
  nT = [e4, $4, U4, B4, W4, K4, X4, Q4, Z4, eT, tT];
h4(nT, { mixoutsTo: Et });
Et.noAuto;
Et.config;
Et.library;
Et.dom;
var sd = Et.parse;
Et.findIconDefinition;
Et.toHtml;
var rT = Et.icon;
Et.layer;
Et.text;
Et.counter;
function Wv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Wn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wv(Object(n), !0).forEach(function (r) {
          hi(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Wv(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function gl(e) {
  "@babel/helpers - typeof";
  return (
    (gl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    gl(e)
  );
}
function hi(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function iT(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function oT(e, t) {
  if (e == null) return {};
  var n = iT(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function ld(e) {
  return aT(e) || sT(e) || lT(e) || uT();
}
function aT(e) {
  if (Array.isArray(e)) return ud(e);
}
function sT(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function lT(e, t) {
  if (e) {
    if (typeof e == "string") return ud(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ud(e, t);
  }
}
function ud(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function uT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cT(e) {
  var t,
    n = e.beat,
    r = e.fade,
    i = e.beatFade,
    o = e.bounce,
    a = e.shake,
    s = e.flash,
    l = e.spin,
    u = e.spinPulse,
    c = e.spinReverse,
    d = e.pulse,
    f = e.fixedWidth,
    m = e.inverse,
    h = e.border,
    v = e.listItem,
    b = e.flip,
    w = e.size,
    y = e.rotation,
    g = e.pull,
    S =
      ((t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": i,
        "fa-bounce": o,
        "fa-shake": a,
        "fa-flash": s,
        "fa-spin": l,
        "fa-spin-reverse": c,
        "fa-spin-pulse": u,
        "fa-pulse": d,
        "fa-fw": f,
        "fa-inverse": m,
        "fa-border": h,
        "fa-li": v,
        "fa-flip": b === !0,
        "fa-flip-horizontal": b === "horizontal" || b === "both",
        "fa-flip-vertical": b === "vertical" || b === "both",
      }),
      hi(t, "fa-".concat(w), typeof w < "u" && w !== null),
      hi(t, "fa-rotate-".concat(y), typeof y < "u" && y !== null && y !== 0),
      hi(t, "fa-pull-".concat(g), typeof g < "u" && g !== null),
      hi(t, "fa-swap-opacity", e.swapOpacity),
      t);
  return Object.keys(S)
    .map(function (k) {
      return S[k] ? k : null;
    })
    .filter(function (k) {
      return k;
    });
}
function fT(e) {
  return (e = e - 0), e === e;
}
function Qw(e) {
  return fT(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : "";
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var dT = ["style"];
function pT(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function mT(e) {
  return e
    .split(";")
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(":"),
        i = Qw(n.slice(0, r)),
        o = n.slice(r + 1).trim();
      return i.startsWith("webkit") ? (t[pT(i)] = o) : (t[i] = o), t;
    }, {});
}
function Jw(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string") return t;
  var r = (t.children || []).map(function (l) {
      return Jw(e, l);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (l, u) {
        var c = t.attributes[u];
        switch (u) {
          case "class":
            (l.attrs.className = c), delete t.attributes.class;
            break;
          case "style":
            l.attrs.style = mT(c);
            break;
          default:
            u.indexOf("aria-") === 0 || u.indexOf("data-") === 0
              ? (l.attrs[u.toLowerCase()] = c)
              : (l.attrs[Qw(u)] = c);
        }
        return l;
      },
      { attrs: {} }
    ),
    o = n.style,
    a = o === void 0 ? {} : o,
    s = oT(n, dT);
  return (
    (i.attrs.style = Wn(Wn({}, i.attrs.style), a)),
    e.apply(void 0, [t.tag, Wn(Wn({}, i.attrs), s)].concat(ld(r)))
  );
}
var Zw = !1;
try {
  Zw = !0;
} catch {}
function hT() {
  if (!Zw && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Hv(e) {
  if (e && gl(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (sd.icon) return sd.icon(e);
  if (e === null) return null;
  if (e && gl(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == "string") return { prefix: "fas", iconName: e };
}
function Tc(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? hi({}, e, t)
    : {};
}
var se = Re.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    i = e.symbol,
    o = e.className,
    a = e.title,
    s = e.titleId,
    l = e.maskId,
    u = Hv(n),
    c = Tc("classes", [].concat(ld(cT(e)), ld(o.split(" ")))),
    d = Tc(
      "transform",
      typeof e.transform == "string" ? sd.transform(e.transform) : e.transform
    ),
    f = Tc("mask", Hv(r)),
    m = rT(
      u,
      Wn(
        Wn(Wn(Wn({}, c), d), f),
        {},
        { symbol: i, title: a, titleId: s, maskId: l }
      )
    );
  if (!m) return hT("Could not find icon", u), null;
  var h = m.abstract,
    v = { ref: t };
  return (
    Object.keys(e).forEach(function (b) {
      se.defaultProps.hasOwnProperty(b) || (v[b] = e[b]);
    }),
    vT(h[0], v)
  );
});
se.displayName = "FontAwesomeIcon";
se.propTypes = {
  beat: A.bool,
  border: A.bool,
  beatFade: A.bool,
  bounce: A.bool,
  className: A.string,
  fade: A.bool,
  flash: A.bool,
  mask: A.oneOfType([A.object, A.array, A.string]),
  maskId: A.string,
  fixedWidth: A.bool,
  inverse: A.bool,
  flip: A.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: A.oneOfType([A.object, A.array, A.string]),
  listItem: A.bool,
  pull: A.oneOf(["right", "left"]),
  pulse: A.bool,
  rotation: A.oneOf([0, 90, 180, 270]),
  shake: A.bool,
  size: A.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: A.bool,
  spinPulse: A.bool,
  spinReverse: A.bool,
  symbol: A.oneOfType([A.bool, A.string]),
  title: A.string,
  titleId: A.string,
  transform: A.oneOfType([A.string, A.object]),
  swapOpacity: A.bool,
};
se.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1,
};
var vT = Jw.bind(null, Re.createElement);
const im = x.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Au = x.createContext({});
function gT() {
  return x.useContext(Au).visualElement;
}
const Oa = x.createContext(null),
  Wr = typeof document < "u",
  yl = Wr ? x.useLayoutEffect : x.useEffect,
  ex = x.createContext({ strict: !1 });
function yT(e, t, n, r) {
  const i = gT(),
    o = x.useContext(ex),
    a = x.useContext(Oa),
    s = x.useContext(im).reducedMotion,
    l = x.useRef(void 0);
  (r = r || o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceId: a ? a.id : void 0,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s,
      }));
  const u = l.current;
  return (
    yl(() => {
      u && u.syncRender();
    }),
    x.useEffect(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    yl(() => () => u && u.notifyUnmount(), []),
    u
  );
}
function vi(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function wT(e, t, n) {
  return x.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : vi(n) && (n.current = r));
    },
    [t]
  );
}
function sa(e) {
  return typeof e == "string" || Array.isArray(e);
}
function _u(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const xT = [
  "initial",
  "animate",
  "exit",
  "whileHover",
  "whileDrag",
  "whileTap",
  "whileFocus",
  "whileInView",
];
function Nu(e) {
  return _u(e.animate) || xT.some((t) => sa(e[t]));
}
function tx(e) {
  return !!(Nu(e) || e.variants);
}
function bT(e, t) {
  if (Nu(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || sa(n) ? n : void 0,
      animate: sa(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function ST(e) {
  const { initial: t, animate: n } = bT(e, x.useContext(Au));
  return x.useMemo(() => ({ initial: t, animate: n }), [Gv(t), Gv(n)]);
}
function Gv(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const ln = (e) => ({ isEnabled: (t) => e.some((n) => !!t[n]) }),
  la = {
    measureLayout: ln(["layout", "layoutId", "drag"]),
    animation: ln([
      "animate",
      "exit",
      "variants",
      "whileHover",
      "whileTap",
      "whileFocus",
      "whileDrag",
      "whileInView",
    ]),
    exit: ln(["exit"]),
    drag: ln(["drag", "dragControls"]),
    focus: ln(["whileFocus"]),
    hover: ln(["whileHover", "onHoverStart", "onHoverEnd"]),
    tap: ln(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
    pan: ln(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
    inView: ln(["whileInView", "onViewportEnter", "onViewportLeave"]),
  };
function kT(e) {
  for (const t in e)
    t === "projectionNodeConstructor"
      ? (la.projectionNodeConstructor = e[t])
      : (la[t].Component = e[t]);
}
function Aa(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const _o = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let ET = 1;
function CT() {
  return Aa(() => {
    if (_o.hasEverUpdated) return ET++;
  });
}
const om = x.createContext({});
class PT extends Re.Component {
  getSnapshotBeforeUpdate() {
    const { visualElement: t, props: n } = this.props;
    return t && t.setProps(n), null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
const nx = x.createContext({}),
  TT = Symbol.for("motionComponentSymbol");
function jT({
  preloadedFeatures: e,
  createVisualElement: t,
  projectionNodeConstructor: n,
  useRender: r,
  useVisualState: i,
  Component: o,
}) {
  e && kT(e);
  function a(l, u) {
    const c = { ...x.useContext(im), ...l, layoutId: OT(l) },
      { isStatic: d } = c;
    let f = null;
    const m = ST(l),
      h = d ? void 0 : CT(),
      v = i(l, d);
    if (!d && Wr) {
      m.visualElement = yT(o, v, c, t);
      const b = x.useContext(ex).strict,
        w = x.useContext(nx);
      m.visualElement &&
        (f = m.visualElement.loadFeatures(
          c,
          b,
          e,
          h,
          n || la.projectionNodeConstructor,
          w
        ));
    }
    return x.createElement(
      PT,
      { visualElement: m.visualElement, props: c },
      f,
      x.createElement(
        Au.Provider,
        { value: m },
        r(o, l, h, wT(v, m.visualElement, u), v, d, m.visualElement)
      )
    );
  }
  const s = x.forwardRef(a);
  return (s[TT] = o), s;
}
function OT({ layoutId: e }) {
  const t = x.useContext(om).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function AT(e) {
  function t(r, i = {}) {
    return jT(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const _T = [
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
  "svg",
  "switch",
  "symbol",
  "text",
  "tspan",
  "use",
  "view",
];
function am(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(_T.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const wl = {};
function NT(e) {
  Object.assign(wl, e);
}
const xl = [
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
    "skewY",
  ],
  _a = new Set(xl);
function rx(e, { layout: t, layoutId: n }) {
  return (
    _a.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!wl[e] || e === "opacity"))
  );
}
const an = (e) => !!(e != null && e.getVelocity),
  MT = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  RT = (e, t) => xl.indexOf(e) - xl.indexOf(t);
function LT(
  { transform: e, transformKeys: t },
  { enableHardwareAcceleration: n = !0, allowTransformNone: r = !0 },
  i,
  o
) {
  let a = "";
  t.sort(RT);
  for (const s of t) a += `${MT[s] || s}(${e[s]}) `;
  return (
    n && !e.z && (a += "translateZ(0)"),
    (a = a.trim()),
    o ? (a = o(e, i ? "" : a)) : r && i && (a = "none"),
    a
  );
}
function ix(e) {
  return e.startsWith("--");
}
const IT = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  ox = (e, t) => (n) => Math.max(Math.min(n, t), e),
  No = (e) => (e % 1 ? Number(e.toFixed(5)) : e),
  ua = /(-)?([\d]*\.?[\d])+/g,
  cd =
    /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  DT =
    /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Na(e) {
  return typeof e == "string";
}
const Hr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Mo = Object.assign(Object.assign({}, Hr), { transform: ox(0, 1) }),
  ps = Object.assign(Object.assign({}, Hr), { default: 1 }),
  Ma = (e) => ({
    test: (t) => Na(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Mn = Ma("deg"),
  rn = Ma("%"),
  z = Ma("px"),
  VT = Ma("vh"),
  FT = Ma("vw"),
  Yv = Object.assign(Object.assign({}, rn), {
    parse: (e) => rn.parse(e) / 100,
    transform: (e) => rn.transform(e * 100),
  }),
  sm = (e, t) => (n) =>
    !!(
      (Na(n) && DT.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  ax = (e, t, n) => (r) => {
    if (!Na(r)) return r;
    const [i, o, a, s] = r.match(ua);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  Or = {
    test: sm("hsl", "hue"),
    parse: ax("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      rn.transform(No(t)) +
      ", " +
      rn.transform(No(n)) +
      ", " +
      No(Mo.transform(r)) +
      ")",
  },
  zT = ox(0, 255),
  jc = Object.assign(Object.assign({}, Hr), {
    transform: (e) => Math.round(zT(e)),
  }),
  Hn = {
    test: sm("rgb", "red"),
    parse: ax("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      jc.transform(e) +
      ", " +
      jc.transform(t) +
      ", " +
      jc.transform(n) +
      ", " +
      No(Mo.transform(r)) +
      ")",
  };
function $T(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substr(1, 2)),
        (n = e.substr(3, 2)),
        (r = e.substr(5, 2)),
        (i = e.substr(7, 2)))
      : ((t = e.substr(1, 1)),
        (n = e.substr(2, 1)),
        (r = e.substr(3, 1)),
        (i = e.substr(4, 1)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const fd = { test: sm("#"), parse: $T, transform: Hn.transform },
  Je = {
    test: (e) => Hn.test(e) || fd.test(e) || Or.test(e),
    parse: (e) =>
      Hn.test(e) ? Hn.parse(e) : Or.test(e) ? Or.parse(e) : fd.parse(e),
    transform: (e) =>
      Na(e) ? e : e.hasOwnProperty("red") ? Hn.transform(e) : Or.transform(e),
  },
  sx = "${c}",
  lx = "${n}";
function UT(e) {
  var t, n, r, i;
  return (
    isNaN(e) &&
    Na(e) &&
    ((n = (t = e.match(ua)) === null || t === void 0 ? void 0 : t.length) !==
      null && n !== void 0
      ? n
      : 0) +
      ((i = (r = e.match(cd)) === null || r === void 0 ? void 0 : r.length) !==
        null && i !== void 0
        ? i
        : 0) >
      0
  );
}
function ux(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let n = 0;
  const r = e.match(cd);
  r && ((n = r.length), (e = e.replace(cd, sx)), t.push(...r.map(Je.parse)));
  const i = e.match(ua);
  return (
    i && ((e = e.replace(ua, lx)), t.push(...i.map(Hr.parse))),
    { values: t, numColors: n, tokenised: e }
  );
}
function cx(e) {
  return ux(e).values;
}
function fx(e) {
  const { values: t, numColors: n, tokenised: r } = ux(e),
    i = t.length;
  return (o) => {
    let a = r;
    for (let s = 0; s < i; s++)
      a = a.replace(s < n ? sx : lx, s < n ? Je.transform(o[s]) : No(o[s]));
    return a;
  };
}
const BT = (e) => (typeof e == "number" ? 0 : e);
function WT(e) {
  const t = cx(e);
  return fx(e)(t.map(BT));
}
const Sn = {
    test: UT,
    parse: cx,
    createTransformer: fx,
    getAnimatableNone: WT,
  },
  HT = new Set(["brightness", "contrast", "saturate", "opacity"]);
function GT(e) {
  let [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(ua) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = HT.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const YT = /([a-z-]*)\(.*?\)/g,
  dd = Object.assign(Object.assign({}, Sn), {
    getAnimatableNone: (e) => {
      const t = e.match(YT);
      return t ? t.map(GT).join(" ") : e;
    },
  }),
  qv = { ...Hr, transform: Math.round },
  dx = {
    borderWidth: z,
    borderTopWidth: z,
    borderRightWidth: z,
    borderBottomWidth: z,
    borderLeftWidth: z,
    borderRadius: z,
    radius: z,
    borderTopLeftRadius: z,
    borderTopRightRadius: z,
    borderBottomRightRadius: z,
    borderBottomLeftRadius: z,
    width: z,
    maxWidth: z,
    height: z,
    maxHeight: z,
    size: z,
    top: z,
    right: z,
    bottom: z,
    left: z,
    padding: z,
    paddingTop: z,
    paddingRight: z,
    paddingBottom: z,
    paddingLeft: z,
    margin: z,
    marginTop: z,
    marginRight: z,
    marginBottom: z,
    marginLeft: z,
    rotate: Mn,
    rotateX: Mn,
    rotateY: Mn,
    rotateZ: Mn,
    scale: ps,
    scaleX: ps,
    scaleY: ps,
    scaleZ: ps,
    skew: Mn,
    skewX: Mn,
    skewY: Mn,
    distance: z,
    translateX: z,
    translateY: z,
    translateZ: z,
    x: z,
    y: z,
    z,
    perspective: z,
    transformPerspective: z,
    opacity: Mo,
    originX: Yv,
    originY: Yv,
    originZ: z,
    zIndex: qv,
    fillOpacity: Mo,
    strokeOpacity: Mo,
    numOctaves: qv,
  };
function lm(e, t, n, r) {
  const {
    style: i,
    vars: o,
    transform: a,
    transformKeys: s,
    transformOrigin: l,
  } = e;
  s.length = 0;
  let u = !1,
    c = !1,
    d = !0;
  for (const f in t) {
    const m = t[f];
    if (ix(f)) {
      o[f] = m;
      continue;
    }
    const h = dx[f],
      v = IT(m, h);
    if (_a.has(f)) {
      if (((u = !0), (a[f] = v), s.push(f), !d)) continue;
      m !== (h.default || 0) && (d = !1);
    } else f.startsWith("origin") ? ((c = !0), (l[f] = v)) : (i[f] = v);
  }
  if (
    (t.transform ||
      (u || r
        ? (i.transform = LT(e, n, d, r))
        : i.transform && (i.transform = "none")),
    c)
  ) {
    const { originX: f = "50%", originY: m = "50%", originZ: h = 0 } = l;
    i.transformOrigin = `${f} ${m} ${h}`;
  }
}
const um = () => ({
  style: {},
  transform: {},
  transformKeys: [],
  transformOrigin: {},
  vars: {},
});
function px(e, t, n) {
  for (const r in t) !an(t[r]) && !rx(r, n) && (e[r] = t[r]);
}
function qT({ transformTemplate: e }, t, n) {
  return x.useMemo(() => {
    const r = um();
    return (
      lm(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function KT(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    px(i, r, e),
    Object.assign(i, qT(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function XT(e, t, n) {
  const r = {},
    i = KT(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    (r.style = i),
    r
  );
}
const QT = [
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView",
  ],
  JT = ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  ZT = ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  ej = ["whileInView", "onViewportEnter", "onViewportLeave", "viewport"],
  tj = new Set([
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "layout",
    "layoutId",
    "layoutDependency",
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
    "drag",
    "dragControls",
    "dragListener",
    "dragConstraints",
    "dragDirectionLock",
    "dragSnapToOrigin",
    "_dragX",
    "_dragY",
    "dragElastic",
    "dragMomentum",
    "dragPropagation",
    "dragTransition",
    "onHoverStart",
    "onHoverEnd",
    "layoutScroll",
    ...ej,
    ...JT,
    ...QT,
    ...ZT,
  ]);
function bl(e) {
  return tj.has(e);
}
let mx = (e) => !bl(e);
function nj(e) {
  e && (mx = (t) => (t.startsWith("on") ? !bl(t) : e(t)));
}
try {
  nj(require("@emotion/is-prop-valid").default);
} catch {}
function rj(e, t, n) {
  const r = {};
  for (const i in e)
    (mx(i) ||
      (n === !0 && bl(i)) ||
      (!t && !bl(i)) ||
      (e.draggable && i.startsWith("onDrag"))) &&
      (r[i] = e[i]);
  return r;
}
function Kv(e, t, n) {
  return typeof e == "string" ? e : z.transform(t + n * e);
}
function ij(e, t, n) {
  const r = Kv(t, e.x, e.width),
    i = Kv(n, e.y, e.height);
  return `${r} ${i}`;
}
const oj = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  aj = { offset: "strokeDashoffset", array: "strokeDasharray" };
function sj(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? oj : aj;
  e[o.offset] = z.transform(-r);
  const a = z.transform(t),
    s = z.transform(n);
  e[o.array] = `${a} ${s}`;
}
function cm(
  e,
  {
    attrX: t,
    attrY: n,
    originX: r,
    originY: i,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: s = 0,
    ...l
  },
  u,
  c
) {
  lm(e, l, u, c), (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: f, dimensions: m } = e;
  d.transform && (m && (f.transform = d.transform), delete d.transform),
    m &&
      (r !== void 0 || i !== void 0 || f.transform) &&
      (f.transformOrigin = ij(
        m,
        r !== void 0 ? r : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    o !== void 0 && sj(d, o, a, s, !1);
}
const hx = () => ({ ...um(), attrs: {} });
function lj(e, t) {
  const n = x.useMemo(() => {
    const r = hx();
    return (
      cm(r, t, { enableHardwareAcceleration: !1 }, e.transformTemplate),
      { ...r.attrs, style: { ...r.style } }
    );
  }, [t]);
  if (e.style) {
    const r = {};
    px(r, e.style, e), (n.style = { ...r, ...n.style });
  }
  return n;
}
function uj(e = !1) {
  return (n, r, i, o, { latestValues: a }, s) => {
    const u = (am(n) ? lj : XT)(r, a, s),
      d = { ...rj(r, typeof n == "string", e), ...u, ref: o };
    return i && (d["data-projection-id"] = i), x.createElement(n, d);
  };
}
const vx = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function gx(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const yx = new Set([
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
]);
function wx(e, t, n, r) {
  gx(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(yx.has(i) ? i : vx(i), t.attrs[i]);
}
function fm(e) {
  const { style: t } = e,
    n = {};
  for (const r in t) (an(t[r]) || rx(r, e)) && (n[r] = t[r]);
  return n;
}
function xx(e) {
  const t = fm(e);
  for (const n in e)
    if (an(e[n])) {
      const r = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
      t[r] = e[n];
    }
  return t;
}
function bx(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
const ca = (e) => Array.isArray(e),
  cj = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Sx = (e) => (ca(e) ? e[e.length - 1] || 0 : e);
function Ds(e) {
  const t = an(e) ? e.get() : e;
  return cj(t) ? t.toValue() : t;
}
function fj(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const a = { latestValues: dj(r, i, o, e), renderState: t() };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const kx = (e) => (t, n) => {
  const r = x.useContext(Au),
    i = x.useContext(Oa),
    o = () => fj(e, t, r, i);
  return n ? o() : Aa(o);
};
function dj(e, t, n, r) {
  const i = {},
    o = r(e);
  for (const f in o) i[f] = Ds(o[f]);
  let { initial: a, animate: s } = e;
  const l = Nu(e),
    u = tx(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return (
    d &&
      typeof d != "boolean" &&
      !_u(d) &&
      (Array.isArray(d) ? d : [d]).forEach((m) => {
        const h = bx(e, m);
        if (!h) return;
        const { transitionEnd: v, transition: b, ...w } = h;
        for (const y in w) {
          let g = w[y];
          if (Array.isArray(g)) {
            const S = c ? g.length - 1 : 0;
            g = g[S];
          }
          g !== null && (i[y] = g);
        }
        for (const y in v) i[y] = v[y];
      }),
    i
  );
}
const pj = {
    useVisualState: kx({
      scrapeMotionValuesFromProps: xx,
      createRenderState: hx,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        try {
          n.dimensions =
            typeof t.getBBox == "function"
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch {
          n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        cm(n, r, { enableHardwareAcceleration: !1 }, e.transformTemplate),
          wx(t, n);
      },
    }),
  },
  mj = {
    useVisualState: kx({
      scrapeMotionValuesFromProps: fm,
      createRenderState: um,
    }),
  };
function hj(e, { forwardMotionProps: t = !1 }, n, r, i) {
  return {
    ...(am(e) ? pj : mj),
    preloadedFeatures: n,
    useRender: uj(t),
    createVisualElement: r,
    projectionNodeConstructor: i,
    Component: e,
  };
}
var oe;
(function (e) {
  (e.Animate = "animate"),
    (e.Hover = "whileHover"),
    (e.Tap = "whileTap"),
    (e.Drag = "whileDrag"),
    (e.Focus = "whileFocus"),
    (e.InView = "whileInView"),
    (e.Exit = "exit");
})(oe || (oe = {}));
function Mu(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function pd(e, t, n, r) {
  x.useEffect(() => {
    const i = e.current;
    if (n && i) return Mu(i, t, n, r);
  }, [e, t, n, r]);
}
function vj({ whileFocus: e, visualElement: t }) {
  const { animationState: n } = t,
    r = () => {
      n && n.setActive(oe.Focus, !0);
    },
    i = () => {
      n && n.setActive(oe.Focus, !1);
    };
  pd(t, "focus", e ? r : void 0), pd(t, "blur", e ? i : void 0);
}
function Ex(e) {
  return typeof PointerEvent < "u" && e instanceof PointerEvent
    ? e.pointerType === "mouse"
    : e instanceof MouseEvent;
}
function Cx(e) {
  return !!e.touches;
}
function gj(e) {
  return (t) => {
    const n = t instanceof MouseEvent;
    (!n || (n && t.button === 0)) && e(t);
  };
}
const yj = { pageX: 0, pageY: 0 };
function wj(e, t = "page") {
  const r = e.touches[0] || e.changedTouches[0] || yj;
  return { x: r[t + "X"], y: r[t + "Y"] };
}
function xj(e, t = "page") {
  return { x: e[t + "X"], y: e[t + "Y"] };
}
function dm(e, t = "page") {
  return { point: Cx(e) ? wj(e, t) : xj(e, t) };
}
const Px = (e, t = !1) => {
    const n = (r) => e(r, dm(r));
    return t ? gj(n) : n;
  },
  bj = () => Wr && window.onpointerdown === null,
  Sj = () => Wr && window.ontouchstart === null,
  kj = () => Wr && window.onmousedown === null,
  Ej = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
  },
  Cj = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
  };
function Tx(e) {
  return bj() ? e : Sj() ? Cj[e] : kj() ? Ej[e] : e;
}
function Pi(e, t, n, r) {
  return Mu(e, Tx(t), Px(n, t === "pointerdown"), r);
}
function Sl(e, t, n, r) {
  return pd(e, Tx(t), n && Px(n, t === "pointerdown"), r);
}
function jx(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Xv = jx("dragHorizontal"),
  Qv = jx("dragVertical");
function Ox(e) {
  let t = !1;
  if (e === "y") t = Qv();
  else if (e === "x") t = Xv();
  else {
    const n = Xv(),
      r = Qv();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Ax() {
  const e = Ox(!0);
  return e ? (e(), !1) : !0;
}
function Jv(e, t, n) {
  return (r, i) => {
    !Ex(r) ||
      Ax() ||
      (e.animationState && e.animationState.setActive(oe.Hover, t),
      n && n(r, i));
  };
}
function Pj({
  onHoverStart: e,
  onHoverEnd: t,
  whileHover: n,
  visualElement: r,
}) {
  Sl(r, "pointerenter", e || n ? Jv(r, !0, e) : void 0, { passive: !e }),
    Sl(r, "pointerleave", t || n ? Jv(r, !1, t) : void 0, { passive: !t });
}
const _x = (e, t) => (t ? (e === t ? !0 : _x(e, t.parentElement)) : !1);
function pm(e) {
  return x.useEffect(() => () => e(), []);
}
function Nx(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
var Tj = function () {},
  kl = function () {};
const El = (e, t, n) => Math.min(Math.max(n, e), t),
  Oc = 0.001,
  jj = 0.01,
  Zv = 10,
  Oj = 0.05,
  Aj = 1;
function _j({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  Tj(e <= Zv * 1e3);
  let a = 1 - t;
  (a = El(Oj, Aj, a)),
    (e = El(jj, Zv, e / 1e3)),
    a < 1
      ? ((i = (u) => {
          const c = u * a,
            d = c * e,
            f = c - n,
            m = md(u, a),
            h = Math.exp(-d);
          return Oc - (f / m) * h;
        }),
        (o = (u) => {
          const d = u * a * e,
            f = d * n + n,
            m = Math.pow(a, 2) * Math.pow(u, 2) * e,
            h = Math.exp(-d),
            v = md(Math.pow(u, 2), a);
          return ((-i(u) + Oc > 0 ? -1 : 1) * ((f - m) * h)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Oc + c * d;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const s = 5 / e,
    l = Mj(i, o, s);
  if (((e = e * 1e3), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: a * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Nj = 12;
function Mj(e, t, n) {
  let r = n;
  for (let i = 1; i < Nj; i++) r = r - e(r) / t(r);
  return r;
}
function md(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Rj = ["duration", "bounce"],
  Lj = ["stiffness", "damping", "mass"];
function eg(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Ij(e) {
  let t = Object.assign(
    {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
    },
    e
  );
  if (!eg(e, Lj) && eg(e, Rj)) {
    const n = _j(e);
    (t = Object.assign(Object.assign(Object.assign({}, t), n), {
      velocity: 0,
      mass: 1,
    })),
      (t.isResolvedFromDuration = !0);
  }
  return t;
}
function mm(e) {
  var { from: t = 0, to: n = 1, restSpeed: r = 2, restDelta: i } = e,
    o = Nx(e, ["from", "to", "restSpeed", "restDelta"]);
  const a = { done: !1, value: t };
  let {
      stiffness: s,
      damping: l,
      mass: u,
      velocity: c,
      duration: d,
      isResolvedFromDuration: f,
    } = Ij(o),
    m = tg,
    h = tg;
  function v() {
    const b = c ? -(c / 1e3) : 0,
      w = n - t,
      y = l / (2 * Math.sqrt(s * u)),
      g = Math.sqrt(s / u) / 1e3;
    if ((i === void 0 && (i = Math.min(Math.abs(n - t) / 100, 0.4)), y < 1)) {
      const S = md(g, y);
      (m = (k) => {
        const E = Math.exp(-y * g * k);
        return (
          n -
          E * (((b + y * g * w) / S) * Math.sin(S * k) + w * Math.cos(S * k))
        );
      }),
        (h = (k) => {
          const E = Math.exp(-y * g * k);
          return (
            y *
              g *
              E *
              ((Math.sin(S * k) * (b + y * g * w)) / S + w * Math.cos(S * k)) -
            E * (Math.cos(S * k) * (b + y * g * w) - S * w * Math.sin(S * k))
          );
        });
    } else if (y === 1) m = (S) => n - Math.exp(-g * S) * (w + (b + g * w) * S);
    else {
      const S = g * Math.sqrt(y * y - 1);
      m = (k) => {
        const E = Math.exp(-y * g * k),
          C = Math.min(S * k, 300);
        return (
          n - (E * ((b + y * g * w) * Math.sinh(C) + S * w * Math.cosh(C))) / S
        );
      };
    }
  }
  return (
    v(),
    {
      next: (b) => {
        const w = m(b);
        if (f) a.done = b >= d;
        else {
          const y = h(b) * 1e3,
            g = Math.abs(y) <= r,
            S = Math.abs(n - w) <= i;
          a.done = g && S;
        }
        return (a.value = a.done ? n : w), a;
      },
      flipTarget: () => {
        (c = -c), ([t, n] = [n, t]), v();
      },
    }
  );
}
mm.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const tg = (e) => 0,
  fa = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  be = (e, t, n) => -n * e + n * t + e;
function Ac(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function ng({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    a = 0;
  if (!t) i = o = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - s;
    (i = Ac(l, s, e + 1 / 3)), (o = Ac(l, s, e)), (a = Ac(l, s, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(a * 255),
    alpha: r,
  };
}
const Dj = (e, t, n) => {
    const r = e * e,
      i = t * t;
    return Math.sqrt(Math.max(0, n * (i - r) + r));
  },
  Vj = [fd, Hn, Or],
  rg = (e) => Vj.find((t) => t.test(e)),
  Mx = (e, t) => {
    let n = rg(e),
      r = rg(t),
      i = n.parse(e),
      o = r.parse(t);
    n === Or && ((i = ng(i)), (n = Hn)), r === Or && ((o = ng(o)), (r = Hn));
    const a = Object.assign({}, i);
    return (s) => {
      for (const l in a) l !== "alpha" && (a[l] = Dj(i[l], o[l], s));
      return (a.alpha = be(i.alpha, o.alpha, s)), n.transform(a);
    };
  },
  hd = (e) => typeof e == "number",
  Fj = (e, t) => (n) => t(e(n)),
  Ru = (...e) => e.reduce(Fj);
function Rx(e, t) {
  return hd(e) ? (n) => be(e, t, n) : Je.test(e) ? Mx(e, t) : Ix(e, t);
}
const Lx = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, a) => Rx(o, t[a]));
    return (o) => {
      for (let a = 0; a < r; a++) n[a] = i[a](o);
      return n;
    };
  },
  zj = (e, t) => {
    const n = Object.assign(Object.assign({}, e), t),
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = Rx(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  };
function ig(e) {
  const t = Sn.parse(e),
    n = t.length;
  let r = 0,
    i = 0,
    o = 0;
  for (let a = 0; a < n; a++)
    r || typeof t[a] == "number" ? r++ : t[a].hue !== void 0 ? o++ : i++;
  return { parsed: t, numNumbers: r, numRGB: i, numHSL: o };
}
const Ix = (e, t) => {
    const n = Sn.createTransformer(t),
      r = ig(e),
      i = ig(t);
    return r.numHSL === i.numHSL &&
      r.numRGB === i.numRGB &&
      r.numNumbers >= i.numNumbers
      ? Ru(Lx(r.parsed, i.parsed), n)
      : (a) => `${a > 0 ? t : e}`;
  },
  $j = (e, t) => (n) => be(e, t, n);
function Uj(e) {
  if (typeof e == "number") return $j;
  if (typeof e == "string") return Je.test(e) ? Mx : Ix;
  if (Array.isArray(e)) return Lx;
  if (typeof e == "object") return zj;
}
function Bj(e, t, n) {
  const r = [],
    i = n || Uj(e[0]),
    o = e.length - 1;
  for (let a = 0; a < o; a++) {
    let s = i(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] : t;
      s = Ru(l, s);
    }
    r.push(s);
  }
  return r;
}
function Wj([e, t], [n]) {
  return (r) => n(fa(e, t, r));
}
function Hj(e, t) {
  const n = e.length,
    r = n - 1;
  return (i) => {
    let o = 0,
      a = !1;
    if ((i <= e[0] ? (a = !0) : i >= e[r] && ((o = r - 1), (a = !0)), !a)) {
      let l = 1;
      for (; l < n && !(e[l] > i || l === r); l++);
      o = l - 1;
    }
    const s = fa(e[o], e[o + 1], i);
    return t[o](s);
  };
}
function Dx(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  kl(o === t.length),
    kl(!r || !Array.isArray(r) || r.length === o - 1),
    e[0] > e[o - 1] &&
      ((e = [].concat(e)), (t = [].concat(t)), e.reverse(), t.reverse());
  const a = Bj(t, r, i),
    s = o === 2 ? Wj(e, a) : Hj(e, a);
  return n ? (l) => s(El(e[0], e[o - 1], l)) : s;
}
const Lu = (e) => (t) => 1 - e(1 - t),
  hm = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Gj = (e) => (t) => Math.pow(t, e),
  Vx = (e) => (t) => t * t * ((e + 1) * t - e),
  Yj = (e) => {
    const t = Vx(e);
    return (n) =>
      (n *= 2) < 1 ? 0.5 * t(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)));
  },
  Fx = 1.525,
  qj = 4 / 11,
  Kj = 8 / 11,
  Xj = 9 / 10,
  vm = (e) => e,
  gm = Gj(2),
  Qj = Lu(gm),
  zx = hm(gm),
  $x = (e) => 1 - Math.sin(Math.acos(e)),
  ym = Lu($x),
  Jj = hm(ym),
  wm = Vx(Fx),
  Zj = Lu(wm),
  eO = hm(wm),
  tO = Yj(Fx),
  nO = 4356 / 361,
  rO = 35442 / 1805,
  iO = 16061 / 1805,
  Cl = (e) => {
    if (e === 1 || e === 0) return e;
    const t = e * e;
    return e < qj
      ? 7.5625 * t
      : e < Kj
      ? 9.075 * t - 9.9 * e + 3.4
      : e < Xj
      ? nO * t - rO * e + iO
      : 10.8 * e * e - 20.52 * e + 10.72;
  },
  oO = Lu(Cl),
  aO = (e) => (e < 0.5 ? 0.5 * (1 - Cl(1 - e * 2)) : 0.5 * Cl(e * 2 - 1) + 0.5);
function sO(e, t) {
  return e.map(() => t || zx).splice(0, e.length - 1);
}
function lO(e) {
  const t = e.length;
  return e.map((n, r) => (r !== 0 ? r / (t - 1) : 0));
}
function uO(e, t) {
  return e.map((n) => n * t);
}
function Vs({ from: e = 0, to: t = 1, ease: n, offset: r, duration: i = 300 }) {
  const o = { done: !1, value: e },
    a = Array.isArray(t) ? t : [e, t],
    s = uO(r && r.length === a.length ? r : lO(a), i);
  function l() {
    return Dx(s, a, { ease: Array.isArray(n) ? n : sO(a, n) });
  }
  let u = l();
  return {
    next: (c) => ((o.value = u(c)), (o.done = c >= i), o),
    flipTarget: () => {
      a.reverse(), (u = l());
    },
  };
}
function cO({
  velocity: e = 0,
  from: t = 0,
  power: n = 0.8,
  timeConstant: r = 350,
  restDelta: i = 0.5,
  modifyTarget: o,
}) {
  const a = { done: !1, value: t };
  let s = n * e;
  const l = t + s,
    u = o === void 0 ? l : o(l);
  return (
    u !== l && (s = u - t),
    {
      next: (c) => {
        const d = -s * Math.exp(-c / r);
        return (a.done = !(d > i || d < -i)), (a.value = a.done ? u : u + d), a;
      },
      flipTarget: () => {},
    }
  );
}
const og = { keyframes: Vs, spring: mm, decay: cO };
function fO(e) {
  if (Array.isArray(e.to)) return Vs;
  if (og[e.type]) return og[e.type];
  const t = new Set(Object.keys(e));
  return t.has("ease") || (t.has("duration") && !t.has("dampingRatio"))
    ? Vs
    : t.has("dampingRatio") ||
      t.has("stiffness") ||
      t.has("mass") ||
      t.has("damping") ||
      t.has("restSpeed") ||
      t.has("restDelta")
    ? mm
    : Vs;
}
const Ux = (1 / 60) * 1e3,
  dO = typeof performance < "u" ? () => performance.now() : () => Date.now(),
  Bx =
    typeof window < "u"
      ? (e) => window.requestAnimationFrame(e)
      : (e) => setTimeout(() => e(dO()), Ux);
function pO(e) {
  let t = [],
    n = [],
    r = 0,
    i = !1,
    o = !1;
  const a = new WeakSet(),
    s = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && i,
          f = d ? t : n;
        return (
          u && a.add(l),
          f.indexOf(l) === -1 && (f.push(l), d && i && (r = t.length)),
          l
        );
      },
      cancel: (l) => {
        const u = n.indexOf(l);
        u !== -1 && n.splice(u, 1), a.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
          for (let u = 0; u < r; u++) {
            const c = t[u];
            c(l), a.has(c) && (s.schedule(c), e());
          }
        (i = !1), o && ((o = !1), s.process(l));
      },
    };
  return s;
}
const mO = 40;
let vd = !0,
  da = !1,
  gd = !1;
const Ti = { delta: 0, timestamp: 0 },
  Ra = ["read", "update", "preRender", "render", "postRender"],
  Iu = Ra.reduce((e, t) => ((e[t] = pO(() => (da = !0))), e), {}),
  Gt = Ra.reduce((e, t) => {
    const n = Iu[t];
    return (e[t] = (r, i = !1, o = !1) => (da || vO(), n.schedule(r, i, o))), e;
  }, {}),
  $i = Ra.reduce((e, t) => ((e[t] = Iu[t].cancel), e), {}),
  _c = Ra.reduce((e, t) => ((e[t] = () => Iu[t].process(Ti)), e), {}),
  hO = (e) => Iu[e].process(Ti),
  Wx = (e) => {
    (da = !1),
      (Ti.delta = vd ? Ux : Math.max(Math.min(e - Ti.timestamp, mO), 1)),
      (Ti.timestamp = e),
      (gd = !0),
      Ra.forEach(hO),
      (gd = !1),
      da && ((vd = !1), Bx(Wx));
  },
  vO = () => {
    (da = !0), (vd = !0), gd || Bx(Wx);
  },
  Pl = () => Ti;
function Hx(e, t, n = 0) {
  return e - t - n;
}
function gO(e, t, n = 0, r = !0) {
  return r ? Hx(t + -e, t, n) : t - (e - t) + n;
}
function yO(e, t, n, r) {
  return r ? e >= t + n : e <= -n;
}
const wO = (e) => {
  const t = ({ delta: n }) => e(n);
  return { start: () => Gt.update(t, !0), stop: () => $i.update(t) };
};
function Gx(e) {
  var t,
    n,
    {
      from: r,
      autoplay: i = !0,
      driver: o = wO,
      elapsed: a = 0,
      repeat: s = 0,
      repeatType: l = "loop",
      repeatDelay: u = 0,
      onPlay: c,
      onStop: d,
      onComplete: f,
      onRepeat: m,
      onUpdate: h,
    } = e,
    v = Nx(e, [
      "from",
      "autoplay",
      "driver",
      "elapsed",
      "repeat",
      "repeatType",
      "repeatDelay",
      "onPlay",
      "onStop",
      "onComplete",
      "onRepeat",
      "onUpdate",
    ]);
  let { to: b } = v,
    w,
    y = 0,
    g = v.duration,
    S,
    k = !1,
    E = !0,
    C;
  const T = fO(v);
  !((n = (t = T).needsInterpolation) === null || n === void 0) &&
    n.call(t, r, b) &&
    ((C = Dx([0, 100], [r, b], { clamp: !1 })), (r = 0), (b = 100));
  const L = T(Object.assign(Object.assign({}, v), { from: r, to: b }));
  function N() {
    y++,
      l === "reverse"
        ? ((E = y % 2 === 0), (a = gO(a, g, u, E)))
        : ((a = Hx(a, g, u)), l === "mirror" && L.flipTarget()),
      (k = !1),
      m && m();
  }
  function W() {
    w.stop(), f && f();
  }
  function $(je) {
    if ((E || (je = -je), (a += je), !k)) {
      const Ue = L.next(Math.max(0, a));
      (S = Ue.value), C && (S = C(S)), (k = E ? Ue.done : a <= 0);
    }
    h == null || h(S),
      k && (y === 0 && (g ?? (g = a)), y < s ? yO(a, g, u, E) && N() : W());
  }
  function Y() {
    c == null || c(), (w = o($)), w.start();
  }
  return (
    i && Y(),
    {
      stop: () => {
        d == null || d(), w.stop();
      },
    }
  );
}
function Yx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
function xO({
  from: e = 0,
  velocity: t = 0,
  min: n,
  max: r,
  power: i = 0.8,
  timeConstant: o = 750,
  bounceStiffness: a = 500,
  bounceDamping: s = 10,
  restDelta: l = 1,
  modifyTarget: u,
  driver: c,
  onUpdate: d,
  onComplete: f,
  onStop: m,
}) {
  let h;
  function v(g) {
    return (n !== void 0 && g < n) || (r !== void 0 && g > r);
  }
  function b(g) {
    return n === void 0
      ? r
      : r === void 0 || Math.abs(n - g) < Math.abs(r - g)
      ? n
      : r;
  }
  function w(g) {
    h == null || h.stop(),
      (h = Gx(
        Object.assign(Object.assign({}, g), {
          driver: c,
          onUpdate: (S) => {
            var k;
            d == null || d(S),
              (k = g.onUpdate) === null || k === void 0 || k.call(g, S);
          },
          onComplete: f,
          onStop: m,
        })
      ));
  }
  function y(g) {
    w(
      Object.assign(
        { type: "spring", stiffness: a, damping: s, restDelta: l },
        g
      )
    );
  }
  if (v(e)) y({ from: e, velocity: t, to: b(e) });
  else {
    let g = i * t + e;
    typeof u < "u" && (g = u(g));
    const S = b(g),
      k = S === n ? -1 : 1;
    let E, C;
    const T = (L) => {
      (E = C),
        (C = L),
        (t = Yx(L - E, Pl().delta)),
        ((k === 1 && L > S) || (k === -1 && L < S)) &&
          y({ from: L, to: S, velocity: t });
    };
    w({
      type: "decay",
      from: e,
      velocity: t,
      timeConstant: o,
      power: i,
      restDelta: l,
      modifyTarget: u,
      onUpdate: v(g) ? T : void 0,
    });
  }
  return { stop: () => (h == null ? void 0 : h.stop()) };
}
const yd = (e) => e.hasOwnProperty("x") && e.hasOwnProperty("y"),
  ag = (e) => yd(e) && e.hasOwnProperty("z"),
  ms = (e, t) => Math.abs(e - t);
function xm(e, t) {
  if (hd(e) && hd(t)) return ms(e, t);
  if (yd(e) && yd(t)) {
    const n = ms(e.x, t.x),
      r = ms(e.y, t.y),
      i = ag(e) && ag(t) ? ms(e.z, t.z) : 0;
    return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(i, 2));
  }
}
const qx = (e, t) => 1 - 3 * t + 3 * e,
  Kx = (e, t) => 3 * t - 6 * e,
  Xx = (e) => 3 * e,
  Tl = (e, t, n) => ((qx(t, n) * e + Kx(t, n)) * e + Xx(t)) * e,
  Qx = (e, t, n) => 3 * qx(t, n) * e * e + 2 * Kx(t, n) * e + Xx(t),
  bO = 1e-7,
  SO = 10;
function kO(e, t, n, r, i) {
  let o,
    a,
    s = 0;
  do (a = t + (n - t) / 2), (o = Tl(a, r, i) - e), o > 0 ? (n = a) : (t = a);
  while (Math.abs(o) > bO && ++s < SO);
  return a;
}
const EO = 8,
  CO = 0.001;
function PO(e, t, n, r) {
  for (let i = 0; i < EO; ++i) {
    const o = Qx(t, n, r);
    if (o === 0) return t;
    const a = Tl(t, n, r) - e;
    t -= a / o;
  }
  return t;
}
const Fs = 11,
  hs = 1 / (Fs - 1);
function TO(e, t, n, r) {
  if (e === t && n === r) return vm;
  const i = new Float32Array(Fs);
  for (let a = 0; a < Fs; ++a) i[a] = Tl(a * hs, e, n);
  function o(a) {
    let s = 0,
      l = 1;
    const u = Fs - 1;
    for (; l !== u && i[l] <= a; ++l) s += hs;
    --l;
    const c = (a - i[l]) / (i[l + 1] - i[l]),
      d = s + c * hs,
      f = Qx(d, e, n);
    return f >= CO ? PO(a, d, e, n) : f === 0 ? d : kO(a, s, s + hs, e, n);
  }
  return (a) => (a === 0 || a === 1 ? a : Tl(o(a), t, r));
}
function jO({
  onTap: e,
  onTapStart: t,
  onTapCancel: n,
  whileTap: r,
  visualElement: i,
}) {
  const o = e || t || n || r,
    a = x.useRef(!1),
    s = x.useRef(null),
    l = { passive: !(t || e || n || m) };
  function u() {
    s.current && s.current(), (s.current = null);
  }
  function c() {
    return (
      u(),
      (a.current = !1),
      i.animationState && i.animationState.setActive(oe.Tap, !1),
      !Ax()
    );
  }
  function d(h, v) {
    c() && (_x(i.getInstance(), h.target) ? e && e(h, v) : n && n(h, v));
  }
  function f(h, v) {
    c() && n && n(h, v);
  }
  function m(h, v) {
    u(),
      !a.current &&
        ((a.current = !0),
        (s.current = Ru(
          Pi(window, "pointerup", d, l),
          Pi(window, "pointercancel", f, l)
        )),
        i.animationState && i.animationState.setActive(oe.Tap, !0),
        t && t(h, v));
  }
  Sl(i, "pointerdown", o ? m : void 0, l), pm(u);
}
const OO = "production",
  Jx = typeof process > "u" || process.env === void 0 ? OO : "production",
  sg = new Set();
function Zx(e, t, n) {
  e || sg.has(t) || (console.warn(t), n && console.warn(n), sg.add(t));
}
const wd = new WeakMap(),
  Nc = new WeakMap(),
  AO = (e) => {
    const t = wd.get(e.target);
    t && t(e);
  },
  _O = (e) => {
    e.forEach(AO);
  };
function NO({ root: e, ...t }) {
  const n = e || document;
  Nc.has(n) || Nc.set(n, {});
  const r = Nc.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(_O, { root: e, ...t })), r[i];
}
function MO(e, t, n) {
  const r = NO(t);
  return (
    wd.set(e, n),
    r.observe(e),
    () => {
      wd.delete(e), r.unobserve(e);
    }
  );
}
function RO({
  visualElement: e,
  whileInView: t,
  onViewportEnter: n,
  onViewportLeave: r,
  viewport: i = {},
}) {
  const o = x.useRef({ hasEnteredView: !1, isInView: !1 });
  let a = !!(t || n || r);
  i.once && o.current.hasEnteredView && (a = !1),
    (typeof IntersectionObserver > "u" ? DO : IO)(a, o.current, e, i);
}
const LO = { some: 0, all: 1 };
function IO(e, t, n, { root: r, margin: i, amount: o = "some", once: a }) {
  x.useEffect(() => {
    if (!e) return;
    const s = {
        root: r == null ? void 0 : r.current,
        rootMargin: i,
        threshold: typeof o == "number" ? o : LO[o],
      },
      l = (u) => {
        const { isIntersecting: c } = u;
        if (t.isInView === c || ((t.isInView = c), a && !c && t.hasEnteredView))
          return;
        c && (t.hasEnteredView = !0),
          n.animationState && n.animationState.setActive(oe.InView, c);
        const d = n.getProps(),
          f = c ? d.onViewportEnter : d.onViewportLeave;
        f && f(u);
      };
    return MO(n.getInstance(), s, l);
  }, [e, r, i, o]);
}
function DO(e, t, n, { fallback: r = !0 }) {
  x.useEffect(() => {
    !e ||
      !r ||
      (Jx !== "production" &&
        Zx(
          !1,
          "IntersectionObserver not available on this device. whileInView animations will trigger on mount."
        ),
      requestAnimationFrame(() => {
        t.hasEnteredView = !0;
        const { onViewportEnter: i } = n.getProps();
        i && i(null),
          n.animationState && n.animationState.setActive(oe.InView, !0);
      }));
  }, [e]);
}
const Gn = (e) => (t) => (e(t), null),
  VO = { inView: Gn(RO), tap: Gn(jO), focus: Gn(vj), hover: Gn(Pj) };
function e2() {
  const e = x.useContext(Oa);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = x.useId();
  return x.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
function t2(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const jl = (e) => e * 1e3,
  FO = {
    linear: vm,
    easeIn: gm,
    easeInOut: zx,
    easeOut: Qj,
    circIn: $x,
    circInOut: Jj,
    circOut: ym,
    backIn: wm,
    backInOut: eO,
    backOut: Zj,
    anticipate: tO,
    bounceIn: oO,
    bounceInOut: aO,
    bounceOut: Cl,
  },
  lg = (e) => {
    if (Array.isArray(e)) {
      kl(e.length === 4);
      const [t, n, r, i] = e;
      return TO(t, n, r, i);
    } else if (typeof e == "string") return FO[e];
    return e;
  },
  zO = (e) => Array.isArray(e) && typeof e[0] != "number",
  ug = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" && Sn.test(t) && !t.startsWith("url("))
        ),
  yr = () => ({ type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }),
  vs = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Mc = () => ({ type: "keyframes", ease: "linear", duration: 0.3 }),
  $O = (e) => ({ type: "keyframes", duration: 0.8, values: e }),
  cg = {
    x: yr,
    y: yr,
    z: yr,
    rotate: yr,
    rotateX: yr,
    rotateY: yr,
    rotateZ: yr,
    scaleX: vs,
    scaleY: vs,
    scale: vs,
    opacity: Mc,
    backgroundColor: Mc,
    color: Mc,
    default: vs,
  },
  UO = (e, t) => {
    let n;
    return ca(t) ? (n = $O) : (n = cg[e] || cg.default), { to: t, ...n(t) };
  },
  BO = {
    ...dx,
    color: Je,
    backgroundColor: Je,
    outlineColor: Je,
    fill: Je,
    stroke: Je,
    borderColor: Je,
    borderTopColor: Je,
    borderRightColor: Je,
    borderBottomColor: Je,
    borderLeftColor: Je,
    filter: dd,
    WebkitFilter: dd,
  },
  bm = (e) => BO[e];
function Sm(e, t) {
  var n;
  let r = bm(e);
  return (
    r !== dd && (r = Sn),
    (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, t)
  );
}
function WO({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: a,
  repeatDelay: s,
  from: l,
  ...u
}) {
  return !!Object.keys(u).length;
}
function HO({ ease: e, times: t, yoyo: n, flip: r, loop: i, ...o }) {
  const a = { ...o };
  return (
    t && (a.offset = t),
    o.duration && (a.duration = jl(o.duration)),
    o.repeatDelay && (a.repeatDelay = jl(o.repeatDelay)),
    e && (a.ease = zO(e) ? e.map(lg) : lg(e)),
    o.type === "tween" && (a.type = "keyframes"),
    (n || i || r) &&
      (n
        ? (a.repeatType = "reverse")
        : i
        ? (a.repeatType = "loop")
        : r && (a.repeatType = "mirror"),
      (a.repeat = i || n || r || o.repeat)),
    o.type !== "spring" && (a.type = "keyframes"),
    a
  );
}
function GO(e, t) {
  var n, r;
  return (r =
    (n = (km(e, t) || {}).delay) !== null && n !== void 0 ? n : e.delay) !==
    null && r !== void 0
    ? r
    : 0;
}
function YO(e) {
  return (
    Array.isArray(e.to) &&
      e.to[0] === null &&
      ((e.to = [...e.to]), (e.to[0] = e.from)),
    e
  );
}
function qO(e, t, n) {
  return (
    Array.isArray(t.to) && e.duration === void 0 && (e.duration = 0.8),
    YO(t),
    WO(e) || (e = { ...e, ...UO(n, t.to) }),
    { ...t, ...HO(e) }
  );
}
function KO(e, t, n, r, i) {
  const o = km(r, e) || {};
  let a = o.from !== void 0 ? o.from : t.get();
  const s = ug(e, n);
  a === "none" && s && typeof n == "string"
    ? (a = Sm(e, n))
    : fg(a) && typeof n == "string"
    ? (a = dg(n))
    : !Array.isArray(n) && fg(n) && typeof a == "string" && (n = dg(a));
  const l = ug(e, a);
  function u() {
    const d = {
      from: a,
      to: n,
      velocity: t.getVelocity(),
      onComplete: i,
      onUpdate: (f) => t.set(f),
    };
    return o.type === "inertia" || o.type === "decay"
      ? xO({ ...d, ...o })
      : Gx({
          ...qO(o, d, e),
          onUpdate: (f) => {
            d.onUpdate(f), o.onUpdate && o.onUpdate(f);
          },
          onComplete: () => {
            d.onComplete(), o.onComplete && o.onComplete();
          },
        });
  }
  function c() {
    const d = Sx(n);
    return (
      t.set(d),
      i(),
      o.onUpdate && o.onUpdate(d),
      o.onComplete && o.onComplete(),
      { stop: () => {} }
    );
  }
  return !l || !s || o.type === !1 ? c : u;
}
function fg(e) {
  return (
    e === 0 ||
    (typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1)
  );
}
function dg(e) {
  return typeof e == "number" ? 0 : Sm("", e);
}
function km(e, t) {
  return e[t] || e.default || e;
}
function Em(e, t, n, r = {}) {
  return t.start((i) => {
    let o, a;
    const s = KO(e, t, n, r, i),
      l = GO(r, e),
      u = () => (a = s());
    return (
      l ? (o = window.setTimeout(u, jl(l))) : u(),
      () => {
        clearTimeout(o), a && a.stop();
      }
    );
  });
}
const XO = (e) => /^\-?\d*\.?\d+$/.test(e),
  QO = (e) => /^0[^.\s]+$/.test(e);
function Cm(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Pm(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Ro {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Cm(this.subscriptions, t), () => Pm(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const a = this.subscriptions[o];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const JO = (e) => !isNaN(parseFloat(e));
class ZO {
  constructor(t) {
    (this.version = "7.5.1"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.updateSubscribers = new Ro()),
      (this.velocityUpdateSubscribers = new Ro()),
      (this.renderSubscribers = new Ro()),
      (this.canTrackVelocity = !1),
      (this.updateAndNotify = (n, r = !0) => {
        (this.prev = this.current), (this.current = n);
        const { delta: i, timestamp: o } = Pl();
        this.lastUpdated !== o &&
          ((this.timeDelta = i),
          (this.lastUpdated = o),
          Gt.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.updateSubscribers.notify(this.current),
          this.velocityUpdateSubscribers.getSize() &&
            this.velocityUpdateSubscribers.notify(this.getVelocity()),
          r && this.renderSubscribers.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => Gt.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: n }) => {
        n !== this.lastUpdated &&
          ((this.prev = this.current),
          this.velocityUpdateSubscribers.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = JO(this.current));
  }
  onChange(t) {
    return this.updateSubscribers.add(t);
  }
  clearListeners() {
    this.updateSubscribers.clear();
  }
  onRenderRequest(t) {
    return t(this.get()), this.renderSubscribers.add(t);
  }
  attach(t) {
    this.passiveEffect = t;
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? Yx(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0), (this.stopAnimation = t(n));
      }).then(() => this.clearAnimation())
    );
  }
  stop() {
    this.stopAnimation && this.stopAnimation(), this.clearAnimation();
  }
  isAnimating() {
    return !!this.stopAnimation;
  }
  clearAnimation() {
    this.stopAnimation = null;
  }
  destroy() {
    this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop();
  }
}
function Ui(e) {
  return new ZO(e);
}
const n2 = (e) => (t) => t.test(e),
  e5 = { test: (e) => e === "auto", parse: (e) => e },
  r2 = [Hr, z, rn, Mn, FT, VT, e5],
  co = (e) => r2.find(n2(e)),
  t5 = [...r2, Je, Sn],
  n5 = (e) => t5.find(n2(e));
function r5(e) {
  const t = {};
  return e.forEachValue((n, r) => (t[r] = n.get())), t;
}
function i5(e) {
  const t = {};
  return e.forEachValue((n, r) => (t[r] = n.getVelocity())), t;
}
function Du(e, t, n) {
  const r = e.getProps();
  return bx(r, t, n !== void 0 ? n : r.custom, r5(e), i5(e));
}
function o5(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ui(n));
}
function Tm(e, t) {
  const n = Du(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const a in o) {
    const s = Sx(o[a]);
    o5(e, a, s);
  }
}
function xd(e, t) {
  [...t].reverse().forEach((r) => {
    var i;
    const o = e.getVariant(r);
    o && Tm(e, o),
      (i = e.variantChildren) === null ||
        i === void 0 ||
        i.forEach((a) => {
          xd(a, t);
        });
  });
}
function a5(e, t) {
  if (Array.isArray(t)) return xd(e, t);
  if (typeof t == "string") return xd(e, [t]);
  Tm(e, t);
}
function s5(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((s) => !e.hasValue(s)),
    a = o.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = o[s],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && i !== void 0
              ? i
              : t[l]),
        c != null &&
          (typeof c == "string" && (XO(c) || QO(c))
            ? (c = parseFloat(c))
            : !n5(c) && Sn.test(u) && (c = Sm(l, u)),
          e.addValue(l, Ui(c)),
          n[l] === void 0 && (n[l] = c),
          e.setBaseTarget(l, c));
    }
}
function l5(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function u5(e, t, n) {
  var r;
  const i = {};
  for (const o in e) {
    const a = l5(o, t);
    i[o] =
      a !== void 0
        ? a
        : (r = n.getValue(o)) === null || r === void 0
        ? void 0
        : r.get();
  }
  return i;
}
function Ol(e) {
  return !!(an(e) && e.add);
}
function i2(e, t, n = {}) {
  e.notifyAnimationStart(t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => bd(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = bd(e, t, n);
  else {
    const i = typeof t == "function" ? Du(e, t, n.custom) : t;
    r = o2(e, i, n);
  }
  return r.then(() => e.notifyAnimationComplete(t));
}
function bd(e, t, n = {}) {
  var r;
  const i = Du(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const a = i ? () => o2(e, i, n) : () => Promise.resolve(),
    s =
      !((r = e.variantChildren) === null || r === void 0) && r.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = o;
            return c5(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [a, s] : [s, a];
    return u().then(c);
  } else return Promise.all([a(), s(n.delay)]);
}
function o2(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let {
    transition: a = e.getDefaultTransition(),
    transitionEnd: s,
    ...l
  } = e.makeTargetAnimatable(t);
  const u = e.getValue("willChange");
  r && (a = r);
  const c = [],
    d =
      i &&
      ((o = e.animationState) === null || o === void 0
        ? void 0
        : o.getState()[i]);
  for (const f in l) {
    const m = e.getValue(f),
      h = l[f];
    if (!m || h === void 0 || (d && p5(d, f))) continue;
    let v = { delay: n, ...a };
    e.shouldReduceMotion && _a.has(f) && (v = { ...v, type: !1, delay: 0 });
    let b = Em(f, m, h, v);
    Ol(u) && (u.add(f), (b = b.then(() => u.remove(f)))), c.push(b);
  }
  return Promise.all(c).then(() => {
    s && Tm(e, s);
  });
}
function c5(e, t, n = 0, r = 0, i = 1, o) {
  const a = [],
    s = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(d5)
      .forEach((u, c) => {
        a.push(
          bd(u, t, { ...o, delay: n + l(c) }).then(() =>
            u.notifyAnimationComplete(t)
          )
        );
      }),
    Promise.all(a)
  );
}
function f5(e) {
  e.forEachValue((t) => t.stop());
}
function d5(e, t) {
  return e.sortNodePosition(t);
}
function p5({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
const jm = [
    oe.Animate,
    oe.InView,
    oe.Focus,
    oe.Hover,
    oe.Tap,
    oe.Drag,
    oe.Exit,
  ],
  m5 = [...jm].reverse(),
  h5 = jm.length;
function v5(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => i2(e, n, r)));
}
function g5(e) {
  let t = v5(e);
  const n = w5();
  let r = !0;
  const i = (l, u) => {
    const c = Du(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...m } = c;
      l = { ...l, ...m, ...f };
    }
    return l;
  };
  function o(l) {
    t = l(e);
  }
  function a(l, u) {
    var c;
    const d = e.getProps(),
      f = e.getVariantContext(!0) || {},
      m = [],
      h = new Set();
    let v = {},
      b = 1 / 0;
    for (let y = 0; y < h5; y++) {
      const g = m5[y],
        S = n[g],
        k = (c = d[g]) !== null && c !== void 0 ? c : f[g],
        E = sa(k),
        C = g === u ? S.isActive : null;
      C === !1 && (b = y);
      let T = k === f[g] && k !== d[g] && E;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (S.protectedKeys = { ...v }),
        (!S.isActive && C === null) ||
          (!k && !S.prevProp) ||
          _u(k) ||
          typeof k == "boolean")
      )
        continue;
      const L = y5(S.prevProp, k);
      let N = L || (g === u && S.isActive && !T && E) || (y > b && E);
      const W = Array.isArray(k) ? k : [k];
      let $ = W.reduce(i, {});
      C === !1 && ($ = {});
      const { prevResolvedValues: Y = {} } = S,
        je = { ...Y, ...$ },
        Ue = (J) => {
          (N = !0), h.delete(J), (S.needsAnimating[J] = !0);
        };
      for (const J in je) {
        const De = $[J],
          _ = Y[J];
        v.hasOwnProperty(J) ||
          (De !== _
            ? ca(De) && ca(_)
              ? !t2(De, _) || L
                ? Ue(J)
                : (S.protectedKeys[J] = !0)
              : De !== void 0
              ? Ue(J)
              : h.add(J)
            : De !== void 0 && h.has(J)
            ? Ue(J)
            : (S.protectedKeys[J] = !0));
      }
      (S.prevProp = k),
        (S.prevResolvedValues = $),
        S.isActive && (v = { ...v, ...$ }),
        r && e.blockInitialAnimation && (N = !1),
        N &&
          !T &&
          m.push(
            ...W.map((J) => ({ animation: J, options: { type: g, ...l } }))
          );
    }
    if (h.size) {
      const y = {};
      h.forEach((g) => {
        const S = e.getBaseTarget(g);
        S !== void 0 && (y[g] = S);
      }),
        m.push({ animation: y });
    }
    let w = !!m.length;
    return (
      r && d.initial === !1 && !e.manuallyAnimateOnMount && (w = !1),
      (r = !1),
      w ? t(m) : Promise.resolve()
    );
  }
  function s(l, u, c) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((m) => {
        var h;
        return (h = m.animationState) === null || h === void 0
          ? void 0
          : h.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = a(c, l);
    for (const m in n) n[m].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function y5(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !t2(t, e) : !1;
}
function wr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function w5() {
  return {
    [oe.Animate]: wr(!0),
    [oe.InView]: wr(),
    [oe.Hover]: wr(),
    [oe.Tap]: wr(),
    [oe.Drag]: wr(),
    [oe.Focus]: wr(),
    [oe.Exit]: wr(),
  };
}
const x5 = {
  animation: Gn(({ visualElement: e, animate: t }) => {
    e.animationState || (e.animationState = g5(e)),
      _u(t) && x.useEffect(() => t.subscribe(e), [t]);
  }),
  exit: Gn((e) => {
    const { custom: t, visualElement: n } = e,
      [r, i] = e2(),
      o = x.useContext(Oa);
    x.useEffect(() => {
      n.isPresent = r;
      const a =
        n.animationState &&
        n.animationState.setActive(oe.Exit, !r, {
          custom: (o && o.custom) || t,
        });
      a && !r && a.then(i);
    }, [r]);
  }),
};
class a2 {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = Lc(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = xm(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !d) return;
        const { point: f } = u,
          { timestamp: m } = Pl();
        this.history.push({ ...f, timestamp: m });
        const { onStart: h, onMove: v } = this.handlers;
        c ||
          (h && h(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          v && v(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        if (
          ((this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Rc(c, this.transformPagePoint)),
          Ex(u) && u.buttons === 0)
        ) {
          this.handlePointerUp(u, c);
          return;
        }
        Gt.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        this.end();
        const { onEnd: d, onSessionEnd: f } = this.handlers,
          m = Lc(Rc(c, this.transformPagePoint), this.history);
        this.startEvent && d && d(u, m), f && f(u, m);
      }),
      Cx(t) && t.touches.length > 1)
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const i = dm(t),
      o = Rc(i, this.transformPagePoint),
      { point: a } = o,
      { timestamp: s } = Pl();
    this.history = [{ ...a, timestamp: s }];
    const { onSessionStart: l } = n;
    l && l(t, Lc(o, this.history)),
      (this.removeListeners = Ru(
        Pi(window, "pointermove", this.handlePointerMove),
        Pi(window, "pointerup", this.handlePointerUp),
        Pi(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), $i.update(this.updatePoint);
  }
}
function Rc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function pg(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Lc({ point: e }, t) {
  return {
    point: e,
    delta: pg(e, s2(t)),
    offset: pg(e, b5(t)),
    velocity: S5(t, 0.1),
  };
}
function b5(e) {
  return e[0];
}
function s2(e) {
  return e[e.length - 1];
}
function S5(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = s2(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > jl(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = (i.timestamp - r.timestamp) / 1e3;
  if (o === 0) return { x: 0, y: 0 };
  const a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function wt(e) {
  return e.max - e.min;
}
function mg(e, t = 0, n = 0.01) {
  return xm(e, t) < n;
}
function hg(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = be(t.min, t.max, e.origin)),
    (e.scale = wt(n) / wt(t)),
    (mg(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = be(n.min, n.max, e.origin) - e.originPoint),
    (mg(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Lo(e, t, n, r) {
  hg(e.x, t.x, n.x, r == null ? void 0 : r.originX),
    hg(e.y, t.y, n.y, r == null ? void 0 : r.originY);
}
function vg(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + wt(t));
}
function k5(e, t, n) {
  vg(e.x, t.x, n.x), vg(e.y, t.y, n.y);
}
function gg(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + wt(t));
}
function Io(e, t, n) {
  gg(e.x, t.x, n.x), gg(e.y, t.y, n.y);
}
function E5(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? be(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? be(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function yg(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function C5(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: yg(e.x, n, i), y: yg(e.y, t, r) };
}
function wg(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function P5(e, t) {
  return { x: wg(e.x, t.x), y: wg(e.y, t.y) };
}
function T5(e, t) {
  let n = 0.5;
  const r = wt(e),
    i = wt(t);
  return (
    i > r
      ? (n = fa(t.min, t.max - r, e.min))
      : r > i && (n = fa(e.min, e.max - i, t.min)),
    El(0, 1, n)
  );
}
function j5(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Sd = 0.35;
function O5(e = Sd) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Sd),
    { x: xg(e, "left", "right"), y: xg(e, "top", "bottom") }
  );
}
function xg(e, t, n) {
  return { min: bg(e, t), max: bg(e, n) };
}
function bg(e, t) {
  var n;
  return typeof e == "number" ? e : (n = e[t]) !== null && n !== void 0 ? n : 0;
}
const Sg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Do = () => ({ x: Sg(), y: Sg() }),
  kg = () => ({ min: 0, max: 0 }),
  Ve = () => ({ x: kg(), y: kg() });
function Qt(e) {
  return [e("x"), e("y")];
}
function l2({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function A5({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function _5(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ic(e) {
  return e === void 0 || e === 1;
}
function u2({ scale: e, scaleX: t, scaleY: n }) {
  return !Ic(e) || !Ic(t) || !Ic(n);
}
function Rn(e) {
  return (
    u2(e) || Eg(e.x) || Eg(e.y) || e.z || e.rotate || e.rotateX || e.rotateY
  );
}
function Eg(e) {
  return e && e !== "0%";
}
function Al(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Cg(e, t, n, r, i) {
  return i !== void 0 && (e = Al(e, i, r)), Al(e, n, r) + t;
}
function kd(e, t = 0, n = 1, r, i) {
  (e.min = Cg(e.min, t, n, r, i)), (e.max = Cg(e.max, t, n, r, i));
}
function c2(e, { x: t, y: n }) {
  kd(e.x, t.translate, t.scale, t.originPoint),
    kd(e.y, n.translate, n.scale, n.originPoint);
}
function N5(e, t, n, r = !1) {
  var i, o;
  const a = n.length;
  if (!a) return;
  t.x = t.y = 1;
  let s, l;
  for (let u = 0; u < a; u++)
    (s = n[u]),
      (l = s.projectionDelta),
      ((o = (i = s.instance) === null || i === void 0 ? void 0 : i.style) ===
        null || o === void 0
        ? void 0
        : o.display) !== "contents" &&
        (r &&
          s.options.layoutScroll &&
          s.scroll &&
          s !== s.root &&
          gi(e, { x: -s.scroll.x, y: -s.scroll.y }),
        l && ((t.x *= l.x.scale), (t.y *= l.y.scale), c2(e, l)),
        r && Rn(s.latestValues) && gi(e, s.latestValues));
}
function Dn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Pg(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    a = be(e.min, e.max, o);
  kd(e, t[n], t[r], a, t.scale);
}
const M5 = ["x", "scaleX", "originX"],
  R5 = ["y", "scaleY", "originY"];
function gi(e, t) {
  Pg(e.x, t, M5), Pg(e.y, t, R5);
}
function f2(e, t) {
  return l2(_5(e.getBoundingClientRect(), t));
}
function L5(e, t, n) {
  const r = f2(e, n),
    { scroll: i } = t;
  return i && (Dn(r.x, i.x), Dn(r.y, i.y)), r;
}
const I5 = new WeakMap();
class D5 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ve()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    if (this.visualElement.isPresent === !1) return;
    const r = (s) => {
        this.stopAnimation(), n && this.snapToCursor(dm(s, "page").point);
      },
      i = (s, l) => {
        var u;
        const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
        (c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Ox(c)),
          !this.openGlobalLock)) ||
          ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Qt((m) => {
            var h, v;
            let b = this.getAxisMotionValue(m).get() || 0;
            if (rn.test(b)) {
              const w =
                (v =
                  (h = this.visualElement.projection) === null || h === void 0
                    ? void 0
                    : h.layout) === null || v === void 0
                  ? void 0
                  : v.actual[m];
              w && (b = wt(w) * (parseFloat(b) / 100));
            }
            this.originPoint[m] = b;
          }),
          f == null || f(s, l),
          (u = this.visualElement.animationState) === null ||
            u === void 0 ||
            u.setActive(oe.Drag, !0));
      },
      o = (s, l) => {
        const {
          dragPropagation: u,
          dragDirectionLock: c,
          onDirectionLock: d,
          onDrag: f,
        } = this.getProps();
        if (!u && !this.openGlobalLock) return;
        const { offset: m } = l;
        if (c && this.currentDirection === null) {
          (this.currentDirection = V5(m)),
            this.currentDirection !== null &&
              (d == null || d(this.currentDirection));
          return;
        }
        this.updateAxis("x", l.point, m),
          this.updateAxis("y", l.point, m),
          this.visualElement.syncRender(),
          f == null || f(s, l);
      },
      a = (s, l) => this.stop(s, l);
    this.panSession = new a2(
      t,
      { onSessionStart: r, onStart: i, onMove: o, onSessionEnd: a },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o == null || o(t, n);
  }
  cancel() {
    var t, n;
    (this.isDragging = !1),
      this.visualElement.projection &&
        (this.visualElement.projection.isAnimationBlocked = !1),
      (t = this.panSession) === null || t === void 0 || t.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      (n = this.visualElement.animationState) === null ||
        n === void 0 ||
        n.setActive(oe.Drag, !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !gs(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (a = E5(a, this.constraints[t], this.elastic[t])),
      o.set(a);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      i = this.constraints;
    t && vi(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = C5(r.actual, t))
      : (this.constraints = !1),
      (this.elastic = O5(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Qt((o) => {
          this.getAxisMotionValue(o) &&
            (this.constraints[o] = j5(r.actual[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !vi(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = L5(r, i.root, this.visualElement.getTransformPagePoint());
    let a = P5(i.layout.actual, o);
    if (n) {
      const s = n(A5(a));
      (this.hasMutatedConstraints = !!s), s && (a = l2(s));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: a,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = Qt((c) => {
        var d;
        if (!gs(c, n, this.currentDirection)) return;
        let f =
          (d = l == null ? void 0 : l[c]) !== null && d !== void 0 ? d : {};
        a && (f = { min: 0, max: 0 });
        const m = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: m,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return Em(t, r, 0, n);
  }
  stopAnimation() {
    Qt((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    var n, r;
    const i = "_drag" + t.toUpperCase(),
      o = this.visualElement.getProps()[i];
    return (
      o ||
      this.visualElement.getValue(
        t,
        (r =
          (n = this.visualElement.getProps().initial) === null || n === void 0
            ? void 0
            : n[t]) !== null && r !== void 0
          ? r
          : 0
      )
    );
  }
  snapToCursor(t) {
    Qt((n) => {
      const { drag: r } = this.getProps();
      if (!gs(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: a, max: s } = i.layout.actual[n];
        o.set(t[n] - be(a, s, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    var t;
    const { drag: n, dragConstraints: r } = this.getProps(),
      { projection: i } = this.visualElement;
    if (!vi(r) || !i || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Qt((s) => {
      const l = this.getAxisMotionValue(s);
      if (l) {
        const u = l.get();
        o[s] = T5({ min: u, max: u }, this.constraints[s]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    (this.visualElement.getInstance().style.transform = a ? a({}, "") : "none"),
      (t = i.root) === null || t === void 0 || t.updateScroll(),
      i.updateLayout(),
      this.resolveConstraints(),
      Qt((s) => {
        if (!gs(s, n, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: u, max: c } = this.constraints[s];
        l.set(be(u, c, o[s]));
      });
  }
  addListeners() {
    var t;
    I5.set(this.visualElement, this);
    const n = this.visualElement.getInstance(),
      r = Pi(n, "pointerdown", (u) => {
        const { drag: c, dragListener: d = !0 } = this.getProps();
        c && d && this.start(u);
      }),
      i = () => {
        const { dragConstraints: u } = this.getProps();
        vi(u) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      a = o.addEventListener("measure", i);
    o &&
      !o.layout &&
      ((t = o.root) === null || t === void 0 || t.updateScroll(),
      o.updateLayout()),
      i();
    const s = Mu(window, "resize", () => this.scalePositionWithinConstraints()),
      l = o.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (Qt((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += u[d].translate),
                f.set(f.get() + u[d].translate));
            }),
            this.visualElement.syncRender());
        }
      );
    return () => {
      s(), r(), a(), l == null || l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: a = Sd,
        dragMomentum: s = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: a,
      dragMomentum: s,
    };
  }
}
function gs(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function V5(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
function F5(e) {
  const { dragControls: t, visualElement: n } = e,
    r = Aa(() => new D5(n));
  x.useEffect(() => t && t.subscribe(r), [r, t]),
    x.useEffect(() => r.addListeners(), [r]);
}
function z5({
  onPan: e,
  onPanStart: t,
  onPanEnd: n,
  onPanSessionStart: r,
  visualElement: i,
}) {
  const o = e || t || n || r,
    a = x.useRef(null),
    { transformPagePoint: s } = x.useContext(im),
    l = {
      onSessionStart: r,
      onStart: t,
      onMove: e,
      onEnd: (c, d) => {
        (a.current = null), n && n(c, d);
      },
    };
  x.useEffect(() => {
    a.current !== null && a.current.updateHandlers(l);
  });
  function u(c) {
    a.current = new a2(c, l, { transformPagePoint: s });
  }
  Sl(i, "pointerdown", o && u), pm(() => a.current && a.current.end());
}
const $5 = { pan: Gn(z5), drag: Gn(F5) },
  Ed = { current: null },
  d2 = { current: !1 };
function U5() {
  if (((d2.current = !0), !!Wr))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Ed.current = e.matches);
      e.addListener(t), t();
    } else Ed.current = !1;
}
const ys = [
  "LayoutMeasure",
  "BeforeLayoutMeasure",
  "LayoutUpdate",
  "ViewportBoxUpdate",
  "Update",
  "Render",
  "AnimationComplete",
  "LayoutAnimationComplete",
  "AnimationStart",
  "LayoutAnimationStart",
  "SetAxisTarget",
  "Unmount",
];
function B5() {
  const e = ys.map(() => new Ro()),
    t = {},
    n = {
      clearAllListeners: () => e.forEach((r) => r.clear()),
      updatePropListeners: (r) => {
        ys.forEach((i) => {
          var o;
          const a = "on" + i,
            s = r[a];
          (o = t[i]) === null || o === void 0 || o.call(t),
            s && (t[i] = n[a](s));
        });
      },
    };
  return (
    e.forEach((r, i) => {
      (n["on" + ys[i]] = (o) => r.add(o)),
        (n["notify" + ys[i]] = (...o) => r.notify(...o));
    }),
    n
  );
}
function W5(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      a = n[i];
    if (an(o)) e.addValue(i, o), Ol(r) && r.add(i);
    else if (an(a)) e.addValue(i, Ui(o)), Ol(r) && r.remove(i);
    else if (a !== o)
      if (e.hasValue(i)) {
        const s = e.getValue(i);
        !s.hasAnimated && s.set(o);
      } else {
        const s = e.getStaticValue(i);
        e.addValue(i, Ui(s !== void 0 ? s : o));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const p2 = Object.keys(la),
  H5 = p2.length,
  m2 =
    ({
      treeType: e = "",
      build: t,
      getBaseTarget: n,
      makeTargetAnimatable: r,
      measureViewportBox: i,
      render: o,
      readValueFromInstance: a,
      removeValueFromRenderState: s,
      sortNodePosition: l,
      scrapeMotionValuesFromProps: u,
    }) =>
    (
      {
        parent: c,
        props: d,
        presenceId: f,
        blockInitialAnimation: m,
        visualState: h,
        reducedMotionConfig: v,
      },
      b = {}
    ) => {
      let w = !1;
      const { latestValues: y, renderState: g } = h;
      let S;
      const k = B5(),
        E = new Map(),
        C = new Map();
      let T = {};
      const L = { ...y };
      let N;
      function W() {
        !S || !w || ($(), o(S, g, d.style, O.projection));
      }
      function $() {
        t(O, g, y, b, d);
      }
      function Y() {
        k.notifyUpdate(y);
      }
      function je(P, M) {
        const B = M.onChange((Pe) => {
            (y[P] = Pe), d.onUpdate && Gt.update(Y, !1, !0);
          }),
          Qe = M.onRenderRequest(O.scheduleRender);
        C.set(P, () => {
          B(), Qe();
        });
      }
      const { willChange: Ue, ...J } = u(d);
      for (const P in J) {
        const M = J[P];
        y[P] !== void 0 && an(M) && (M.set(y[P], !1), Ol(Ue) && Ue.add(P));
      }
      if (d.values)
        for (const P in d.values) y[P] !== void 0 && d.values[P].set(y[P]);
      const De = Nu(d),
        _ = tx(d),
        O = {
          treeType: e,
          current: null,
          depth: c ? c.depth + 1 : 0,
          parent: c,
          children: new Set(),
          presenceId: f,
          shouldReduceMotion: null,
          variantChildren: _ ? new Set() : void 0,
          isVisible: void 0,
          manuallyAnimateOnMount: !!(c != null && c.isMounted()),
          blockInitialAnimation: m,
          isMounted: () => !!S,
          mount(P) {
            (w = !0),
              (S = O.current = P),
              O.projection && O.projection.mount(P),
              _ && c && !De && (N = c == null ? void 0 : c.addVariantChild(O)),
              E.forEach((M, B) => je(B, M)),
              d2.current || U5(),
              (O.shouldReduceMotion =
                v === "never" ? !1 : v === "always" ? !0 : Ed.current),
              c == null || c.children.add(O),
              O.setProps(d);
          },
          unmount() {
            var P;
            (P = O.projection) === null || P === void 0 || P.unmount(),
              $i.update(Y),
              $i.render(W),
              C.forEach((M) => M()),
              N == null || N(),
              c == null || c.children.delete(O),
              k.clearAllListeners(),
              (S = void 0),
              (w = !1);
          },
          loadFeatures(P, M, B, Qe, Pe, Tn) {
            const ot = [];
            for (let pt = 0; pt < H5; pt++) {
              const jn = p2[pt],
                { isEnabled: On, Component: An } = la[jn];
              On(P) &&
                An &&
                ot.push(
                  x.createElement(An, { key: jn, ...P, visualElement: O })
                );
            }
            if (!O.projection && Pe) {
              O.projection = new Pe(Qe, O.getLatestValues(), c && c.projection);
              const {
                layoutId: pt,
                layout: jn,
                drag: On,
                dragConstraints: An,
                layoutScroll: gr,
              } = P;
              O.projection.setOptions({
                layoutId: pt,
                layout: jn,
                alwaysMeasureLayout: !!On || (An && vi(An)),
                visualElement: O,
                scheduleRender: () => O.scheduleRender(),
                animationType: typeof jn == "string" ? jn : "both",
                initialPromotionConfig: Tn,
                layoutScroll: gr,
              });
            }
            return ot;
          },
          addVariantChild(P) {
            var M;
            const B = O.getClosestVariantNode();
            if (B)
              return (
                (M = B.variantChildren) === null || M === void 0 || M.add(P),
                () => B.variantChildren.delete(P)
              );
          },
          sortNodePosition(P) {
            return !l || e !== P.treeType
              ? 0
              : l(O.getInstance(), P.getInstance());
          },
          getClosestVariantNode: () =>
            _ ? O : c == null ? void 0 : c.getClosestVariantNode(),
          getLayoutId: () => d.layoutId,
          getInstance: () => S,
          getStaticValue: (P) => y[P],
          setStaticValue: (P, M) => (y[P] = M),
          getLatestValues: () => y,
          setVisibility(P) {
            O.isVisible !== P && ((O.isVisible = P), O.scheduleRender());
          },
          makeTargetAnimatable(P, M = !0) {
            return r(O, P, d, M);
          },
          measureViewportBox() {
            return i(S, d);
          },
          addValue(P, M) {
            O.hasValue(P) && O.removeValue(P),
              E.set(P, M),
              (y[P] = M.get()),
              je(P, M);
          },
          removeValue(P) {
            var M;
            E.delete(P),
              (M = C.get(P)) === null || M === void 0 || M(),
              C.delete(P),
              delete y[P],
              s(P, g);
          },
          hasValue: (P) => E.has(P),
          getValue(P, M) {
            if (d.values && d.values[P]) return d.values[P];
            let B = E.get(P);
            return (
              B === void 0 && M !== void 0 && ((B = Ui(M)), O.addValue(P, B)), B
            );
          },
          forEachValue: (P) => E.forEach(P),
          readValue: (P) => (y[P] !== void 0 ? y[P] : a(S, P, b)),
          setBaseTarget(P, M) {
            L[P] = M;
          },
          getBaseTarget(P) {
            if (n) {
              const M = n(d, P);
              if (M !== void 0 && !an(M)) return M;
            }
            return L[P];
          },
          ...k,
          build() {
            return $(), g;
          },
          scheduleRender() {
            Gt.render(W, !1, !0);
          },
          syncRender: W,
          setProps(P) {
            (P.transformTemplate || d.transformTemplate) && O.scheduleRender(),
              (d = P),
              k.updatePropListeners(P),
              (T = W5(O, u(d), T));
          },
          getProps: () => d,
          getVariant: (P) => {
            var M;
            return (M = d.variants) === null || M === void 0 ? void 0 : M[P];
          },
          getDefaultTransition: () => d.transition,
          getTransformPagePoint: () => d.transformPagePoint,
          getVariantContext(P = !1) {
            if (P) return c == null ? void 0 : c.getVariantContext();
            if (!De) {
              const B = (c == null ? void 0 : c.getVariantContext()) || {};
              return d.initial !== void 0 && (B.initial = d.initial), B;
            }
            const M = {};
            for (let B = 0; B < G5; B++) {
              const Qe = h2[B],
                Pe = d[Qe];
              (sa(Pe) || Pe === !1) && (M[Qe] = Pe);
            }
            return M;
          },
        };
      return O;
    },
  h2 = ["initial", ...jm],
  G5 = h2.length;
function Cd(e) {
  return typeof e == "string" && e.startsWith("var(--");
}
const v2 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Y5(e) {
  const t = v2.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Pd(e, t, n = 1) {
  const [r, i] = Y5(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  return o ? o.trim() : Cd(i) ? Pd(i, t, n + 1) : i;
}
function q5(e, { ...t }, n) {
  const r = e.getInstance();
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.forEachValue((i) => {
      const o = i.get();
      if (!Cd(o)) return;
      const a = Pd(o, r);
      a && i.set(a);
    });
  for (const i in t) {
    const o = t[i];
    if (!Cd(o)) continue;
    const a = Pd(o, r);
    a && ((t[i] = a), n && n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const K5 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
  ]),
  g2 = (e) => K5.has(e),
  X5 = (e) => Object.keys(e).some(g2),
  y2 = (e, t) => {
    e.set(t, !1), e.set(t);
  },
  Tg = (e) => e === Hr || e === z;
var jg;
(function (e) {
  (e.width = "width"),
    (e.height = "height"),
    (e.left = "left"),
    (e.right = "right"),
    (e.top = "top"),
    (e.bottom = "bottom");
})(jg || (jg = {}));
const Og = (e, t) => parseFloat(e.split(", ")[t]),
  Ag =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return Og(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? Og(o[1], e) : 0;
      }
    },
  Q5 = new Set(["x", "y", "z"]),
  J5 = xl.filter((e) => !Q5.has(e));
function Z5(e) {
  const t = [];
  return (
    J5.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.syncRender(),
    t
  );
}
const _g = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: Ag(4, 13),
    y: Ag(5, 14),
  },
  eA = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.getInstance(),
      o = getComputedStyle(i),
      { display: a } = o,
      s = {};
    a === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        s[u] = _g[u](r, o);
      }),
      t.syncRender();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        y2(c, s[u]), (e[u] = _g[u](l, o));
      }),
      e
    );
  },
  tA = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(g2);
    let o = [],
      a = !1;
    const s = [];
    if (
      (i.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          d = co(c);
        const f = t[l];
        let m;
        if (ca(f)) {
          const h = f.length,
            v = f[0] === null ? 1 : 0;
          (c = f[v]), (d = co(c));
          for (let b = v; b < h; b++) m ? kl(co(f[b]) === m) : (m = co(f[b]));
        } else m = co(f);
        if (d !== m)
          if (Tg(d) && Tg(m)) {
            const h = u.get();
            typeof h == "string" && u.set(parseFloat(h)),
              typeof f == "string"
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && m === z && (t[l] = f.map(parseFloat));
          } else
            d != null &&
            d.transform &&
            m != null &&
            m.transform &&
            (c === 0 || f === 0)
              ? c === 0
                ? u.set(m.transform(c))
                : (t[l] = d.transform(f))
              : (a || ((o = Z5(e)), (a = !0)),
                s.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                y2(u, f));
      }),
      s.length)
    ) {
      const l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = eA(t, e, s);
      return (
        o.length &&
          o.forEach(([c, d]) => {
            e.getValue(c).set(d);
          }),
        e.syncRender(),
        Wr && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function nA(e, t, n, r) {
  return X5(t) ? tA(e, t, n, r) : { target: t, transitionEnd: r };
}
const rA = (e, t, n, r) => {
  const i = q5(e, t, r);
  return (t = i.target), (r = i.transitionEnd), nA(e, t, n, r);
};
function iA(e) {
  return window.getComputedStyle(e);
}
const w2 = {
    treeType: "dom",
    readValueFromInstance(e, t) {
      if (_a.has(t)) {
        const n = bm(t);
        return (n && n.default) || 0;
      } else {
        const n = iA(e),
          r = (ix(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == "string" ? r.trim() : r;
      }
    },
    sortNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    },
    getBaseTarget(e, t) {
      var n;
      return (n = e.style) === null || n === void 0 ? void 0 : n[t];
    },
    measureViewportBox(e, { transformPagePoint: t }) {
      return f2(e, t);
    },
    resetTransform(e, t, n) {
      const { transformTemplate: r } = n;
      (t.style.transform = r ? r({}, "") : "none"), e.scheduleRender();
    },
    restoreTransform(e, t) {
      e.style.transform = t.style.transform;
    },
    removeValueFromRenderState(e, { vars: t, style: n }) {
      delete t[e], delete n[e];
    },
    makeTargetAnimatable(
      e,
      { transition: t, transitionEnd: n, ...r },
      { transformValues: i },
      o = !0
    ) {
      let a = u5(r, t || {}, e);
      if ((i && (n && (n = i(n)), r && (r = i(r)), a && (a = i(a))), o)) {
        s5(e, r, a);
        const s = rA(e, r, a, n);
        (n = s.transitionEnd), (r = s.target);
      }
      return { transition: t, transitionEnd: n, ...r };
    },
    scrapeMotionValuesFromProps: fm,
    build(e, t, n, r, i) {
      e.isVisible !== void 0 &&
        (t.style.visibility = e.isVisible ? "visible" : "hidden"),
        lm(t, n, r, i.transformTemplate);
    },
    render: gx,
  },
  oA = m2(w2),
  aA = m2({
    ...w2,
    getBaseTarget(e, t) {
      return e[t];
    },
    readValueFromInstance(e, t) {
      var n;
      return _a.has(t)
        ? ((n = bm(t)) === null || n === void 0 ? void 0 : n.default) || 0
        : ((t = yx.has(t) ? t : vx(t)), e.getAttribute(t));
    },
    scrapeMotionValuesFromProps: xx,
    build(e, t, n, r, i) {
      cm(t, n, r, i.transformTemplate);
    },
    render: wx,
  }),
  sA = (e, t) =>
    am(e)
      ? aA(t, { enableHardwareAcceleration: !1 })
      : oA(t, { enableHardwareAcceleration: !0 });
function Ng(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const fo = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (z.test(e)) e = parseFloat(e);
        else return e;
      const n = Ng(e, t.target.x),
        r = Ng(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  Mg = "_$css",
  lA = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = e.includes("var("),
        o = [];
      i && (e = e.replace(v2, (m) => (o.push(m), Mg)));
      const a = Sn.parse(e);
      if (a.length > 5) return r;
      const s = Sn.createTransformer(e),
        l = typeof a[0] != "number" ? 1 : 0,
        u = n.x.scale * t.x,
        c = n.y.scale * t.y;
      (a[0 + l] /= u), (a[1 + l] /= c);
      const d = be(u, c, 0.5);
      typeof a[2 + l] == "number" && (a[2 + l] /= d),
        typeof a[3 + l] == "number" && (a[3 + l] /= d);
      let f = s(a);
      if (i) {
        let m = 0;
        f = f.replace(Mg, () => {
          const h = o[m];
          return m++, h;
        });
      }
      return f;
    },
  };
class uA extends Re.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    NT(fA),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (_o.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      a = r.projection;
    return (
      a &&
        ((a.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? a.promote()
            : a.relegate() ||
              Gt.postRender(() => {
                var s;
                (!((s = a.getStack()) === null || s === void 0) &&
                  s.members.length) ||
                  this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      !t.currentAnimation && t.isLead() && this.safeToRemove());
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n != null && n.group && n.group.remove(i),
      r != null && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t == null || t();
  }
  render() {
    return null;
  }
}
function cA(e) {
  const [t, n] = e2(),
    r = x.useContext(om);
  return Re.createElement(uA, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: x.useContext(nx),
    isPresent: t,
    safeToRemove: n,
  });
}
const fA = {
    borderRadius: {
      ...fo,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: fo,
    borderTopRightRadius: fo,
    borderBottomLeftRadius: fo,
    borderBottomRightRadius: fo,
    boxShadow: lA,
  },
  dA = { measureLayout: cA };
function pA(e, t, n = {}) {
  const r = an(e) ? e : Ui(e);
  return (
    Em("", r, t, n),
    { stop: () => r.stop(), isAnimating: () => r.isAnimating() }
  );
}
const x2 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  mA = x2.length,
  Rg = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Lg = (e) => typeof e == "number" || z.test(e);
function hA(e, t, n, r, i, o) {
  var a, s, l, u;
  i
    ? ((e.opacity = be(
        0,
        (a = n.opacity) !== null && a !== void 0 ? a : 1,
        vA(r)
      )),
      (e.opacityExit = be(
        (s = t.opacity) !== null && s !== void 0 ? s : 1,
        0,
        gA(r)
      )))
    : o &&
      (e.opacity = be(
        (l = t.opacity) !== null && l !== void 0 ? l : 1,
        (u = n.opacity) !== null && u !== void 0 ? u : 1,
        r
      ));
  for (let c = 0; c < mA; c++) {
    const d = `border${x2[c]}Radius`;
    let f = Ig(t, d),
      m = Ig(n, d);
    if (f === void 0 && m === void 0) continue;
    f || (f = 0),
      m || (m = 0),
      f === 0 || m === 0 || Lg(f) === Lg(m)
        ? ((e[d] = Math.max(be(Rg(f), Rg(m), r), 0)),
          (rn.test(m) || rn.test(f)) && (e[d] += "%"))
        : (e[d] = m);
  }
  (t.rotate || n.rotate) && (e.rotate = be(t.rotate || 0, n.rotate || 0, r));
}
function Ig(e, t) {
  var n;
  return (n = e[t]) !== null && n !== void 0 ? n : e.borderRadius;
}
const vA = b2(0, 0.5, ym),
  gA = b2(0.5, 0.95, vm);
function b2(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(fa(e, t, r)));
}
function Dg(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Dt(e, t) {
  Dg(e.x, t.x), Dg(e.y, t.y);
}
function Vg(e, t, n, r, i) {
  return (
    (e -= t), (e = Al(e, 1 / n, r)), i !== void 0 && (e = Al(e, 1 / i, r)), e
  );
}
function yA(e, t = 0, n = 1, r = 0.5, i, o = e, a = e) {
  if (
    (rn.test(t) &&
      ((t = parseFloat(t)), (t = be(a.min, a.max, t / 100) - a.min)),
    typeof t != "number")
  )
    return;
  let s = be(o.min, o.max, r);
  e === o && (s -= t),
    (e.min = Vg(e.min, t, n, s, i)),
    (e.max = Vg(e.max, t, n, s, i));
}
function Fg(e, t, [n, r, i], o, a) {
  yA(e, t[n], t[r], t[i], t.scale, o, a);
}
const wA = ["x", "scaleX", "originX"],
  xA = ["y", "scaleY", "originY"];
function zg(e, t, n, r) {
  Fg(e.x, t, wA, n == null ? void 0 : n.x, r == null ? void 0 : r.x),
    Fg(e.y, t, xA, n == null ? void 0 : n.y, r == null ? void 0 : r.y);
}
function $g(e) {
  return e.translate === 0 && e.scale === 1;
}
function S2(e) {
  return $g(e.x) && $g(e.y);
}
function k2(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Ug(e) {
  return wt(e.x) / wt(e.y);
}
function bA(e, t, n = 0.1) {
  return xm(e, t) <= n;
}
class SA {
  constructor() {
    this.members = [];
  }
  add(t) {
    Cm(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Pm(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    var r;
    const i = this.lead;
    if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
      i.instance && i.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = i),
        n && (t.resumeFrom.preserveOpacity = !0),
        i.snapshot &&
          ((t.snapshot = i.snapshot),
          (t.snapshot.latestValues = i.animationValues || i.latestValues),
          (t.snapshot.isShared = !0)),
        !((r = t.root) === null || r === void 0) &&
          r.isUpdating &&
          (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      var n, r, i, o, a;
      (r = (n = t.options).onExitComplete) === null ||
        r === void 0 ||
        r.call(n),
        (a =
          (i = t.resumingFrom) === null || i === void 0
            ? void 0
            : (o = i.options).onExitComplete) === null ||
          a === void 0 ||
          a.call(o);
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
const kA = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";
function Bg(e, t, n) {
  const r = e.x.translate / t.x,
    i = e.y.translate / t.y;
  let o = `translate3d(${r}px, ${i}px, 0) `;
  if (((o += `scale(${1 / t.x}, ${1 / t.y}) `), n)) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (o += `rotate(${l}deg) `),
      u && (o += `rotateX(${u}deg) `),
      c && (o += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x,
    s = e.y.scale * t.y;
  return (o += `scale(${a}, ${s})`), o === kA ? "none" : o;
}
const EA = (e, t) => e.depth - t.depth;
class CA {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Cm(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Pm(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(EA),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
const Wg = ["", "X", "Y", "Z"],
  Hg = 1e3;
function E2({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(a, s = {}, l = t == null ? void 0 : t()) {
      (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.potentialNodes = new Map()),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          this.nodes.forEach(_A), this.nodes.forEach(NA);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.id = a),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0),
        a && this.root.registerPotentialNode(a, this);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new CA());
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new Ro()),
        this.eventHandlers.get(a).add(s)
      );
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l == null || l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    registerPotentialNode(a, s) {
      this.potentialNodes.set(a, s);
    }
    mount(a, s = !1) {
      var l;
      if (this.instance) return;
      (this.isSVG = a instanceof SVGElement && a.tagName !== "svg"),
        (this.instance = a);
      const { layoutId: u, layout: c, visualElement: d } = this.options;
      if (
        (d && !d.getInstance() && d.mount(a),
        this.root.nodes.add(this),
        (l = this.parent) === null || l === void 0 || l.children.add(this),
        this.id && this.root.potentialNodes.delete(this.id),
        s && (c || u) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const m = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          (this.root.updateBlockedByResize = !0),
            clearTimeout(f),
            (f = window.setTimeout(m, 250)),
            _o.hasAnimatedSinceResize &&
              ((_o.hasAnimatedSinceResize = !1), this.nodes.forEach(AA));
        });
      }
      u && this.root.registerSharedNode(u, this),
        this.options.animate !== !1 &&
          d &&
          (u || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: m,
              hasRelativeTargetChanged: h,
              layout: v,
            }) => {
              var b, w, y, g, S;
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const k =
                  (w =
                    (b = this.options.transition) !== null && b !== void 0
                      ? b
                      : d.getDefaultTransition()) !== null && w !== void 0
                    ? w
                    : DA,
                { onLayoutAnimationStart: E, onLayoutAnimationComplete: C } =
                  d.getProps(),
                T = !this.targetLayout || !k2(this.targetLayout, v) || h,
                L = !m && h;
              if (
                (!((y = this.resumeFrom) === null || y === void 0) &&
                  y.instance) ||
                L ||
                (m && (T || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, L);
                const N = { ...km(k, "layout"), onPlay: E, onComplete: C };
                d.shouldReduceMotion && ((N.delay = 0), (N.type = !1)),
                  this.startAnimation(N);
              } else
                !m && this.animationProgress === 0 && this.finishAnimation(),
                  this.isLead() &&
                    ((S = (g = this.options).onExitComplete) === null ||
                      S === void 0 ||
                      S.call(g));
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      var a, s;
      this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this),
        (a = this.getStack()) === null || a === void 0 || a.remove(this),
        (s = this.parent) === null || s === void 0 || s.children.delete(this),
        (this.instance = void 0),
        $i.preRender(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      var a;
      return (
        this.isAnimationBlocked ||
        ((a = this.parent) === null || a === void 0
          ? void 0
          : a.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      var a;
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        (a = this.nodes) === null || a === void 0 || a.forEach(MA));
    }
    willUpdate(a = !0) {
      var s, l, u;
      if (this.root.isUpdateBlocked()) {
        (l = (s = this.options).onExitComplete) === null ||
          l === void 0 ||
          l.call(s);
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let m = 0; m < this.path.length; m++) {
        const h = this.path[m];
        (h.shouldResetTransform = !0), h.updateScroll();
      }
      const { layoutId: c, layout: d } = this.options;
      if (c === void 0 && !d) return;
      const f =
        (u = this.options.visualElement) === null || u === void 0
          ? void 0
          : u.getProps().transformTemplate;
      (this.prevTransformTemplateValue =
        f == null ? void 0 : f(this.latestValues, "")),
        this.updateSnapshot(),
        a && this.notifyListeners("willUpdate");
    }
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Gg);
        return;
      }
      this.isUpdating &&
        ((this.isUpdating = !1),
        this.potentialNodes.size &&
          (this.potentialNodes.forEach(VA), this.potentialNodes.clear()),
        this.nodes.forEach(OA),
        this.nodes.forEach(PA),
        this.nodes.forEach(TA),
        this.clearAllSnapshots(),
        _c.update(),
        _c.preRender(),
        _c.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(jA), this.sharedNodes.forEach(RA);
    }
    scheduleUpdateProjection() {
      Gt.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      Gt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      if (this.snapshot || !this.instance) return;
      const a = this.measure(),
        s = this.removeTransform(this.removeElementScroll(a));
      Xg(s), (this.snapshot = { measured: a, layout: s, latestValues: {} });
    }
    updateLayout() {
      var a;
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let u = 0; u < this.path.length; u++) this.path[u].updateScroll();
      const s = this.measure();
      Xg(s);
      const l = this.layout;
      (this.layout = { measured: s, actual: this.removeElementScroll(s) }),
        (this.layoutCorrected = Ve()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.actual),
        (a = this.options.visualElement) === null ||
          a === void 0 ||
          a.notifyLayoutMeasure(
            this.layout.actual,
            l == null ? void 0 : l.actual
          );
    }
    updateScroll() {
      this.options.layoutScroll &&
        this.instance &&
        ((this.isScrollRoot = r(this.instance)),
        (this.scroll = n(this.instance)));
    }
    resetTransform() {
      var a;
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !S2(this.projectionDelta),
        u =
          (a = this.options.visualElement) === null || a === void 0
            ? void 0
            : a.getProps().transformTemplate,
        c = u == null ? void 0 : u(this.latestValues, ""),
        d = c !== this.prevTransformTemplateValue;
      s &&
        (l || Rn(this.latestValues) || d) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure() {
      const { visualElement: a } = this.options;
      if (!a) return Ve();
      const s = a.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (Dn(s.x, l.x), Dn(s.y, l.y)), s;
    }
    removeElementScroll(a) {
      const s = Ve();
      Dt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d, isScrollRoot: f } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (f) {
            Dt(s, a);
            const { scroll: m } = this.root;
            m && (Dn(s.x, -m.x), Dn(s.y, -m.y));
          }
          Dn(s.x, c.x), Dn(s.y, c.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Ve();
      Dt(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          gi(l, { x: -c.scroll.x, y: -c.scroll.y }),
          Rn(c.latestValues) && gi(l, c.latestValues);
      }
      return Rn(this.latestValues) && gi(l, this.latestValues), l;
    }
    removeTransform(a) {
      var s;
      const l = Ve();
      Dt(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!c.instance || !Rn(c.latestValues)) continue;
        u2(c.latestValues) && c.updateSnapshot();
        const d = Ve(),
          f = c.measure();
        Dt(d, f),
          zg(
            l,
            c.latestValues,
            (s = c.snapshot) === null || s === void 0 ? void 0 : s.layout,
            d
          );
      }
      return Rn(this.latestValues) && zg(l, this.latestValues), l;
    }
    setTargetDelta(a) {
      (this.targetDelta = a), this.root.scheduleUpdateProjection();
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    resolveTargetDelta() {
      var a;
      const { layout: s, layoutId: l } = this.options;
      !this.layout ||
        !(s || l) ||
        (!this.targetDelta &&
          !this.relativeTarget &&
          ((this.relativeParent = this.getClosestProjectingParent()),
          this.relativeParent &&
            this.relativeParent.layout &&
            ((this.relativeTarget = Ve()),
            (this.relativeTargetOrigin = Ve()),
            Io(
              this.relativeTargetOrigin,
              this.layout.actual,
              this.relativeParent.layout.actual
            ),
            Dt(this.relativeTarget, this.relativeTargetOrigin))),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Ve()), (this.targetWithTransforms = Ve())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          !((a = this.relativeParent) === null || a === void 0) &&
          a.target
            ? k5(this.target, this.relativeTarget, this.relativeParent.target)
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.actual))
                : Dt(this.target, this.layout.actual),
              c2(this.target, this.targetDelta))
            : Dt(this.target, this.layout.actual),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            (this.relativeParent = this.getClosestProjectingParent()),
            this.relativeParent &&
              !!this.relativeParent.resumingFrom == !!this.resumingFrom &&
              !this.relativeParent.options.layoutScroll &&
              this.relativeParent.target &&
              ((this.relativeTarget = Ve()),
              (this.relativeTargetOrigin = Ve()),
              Io(
                this.relativeTargetOrigin,
                this.target,
                this.relativeParent.target
              ),
              Dt(this.relativeTarget, this.relativeTargetOrigin)))));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Rn(this.parent.latestValues)))
        return (this.parent.relativeTarget || this.parent.targetDelta) &&
          this.parent.layout
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    calcProjection() {
      var a;
      const { layout: s, layoutId: l } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (!((a = this.parent) === null || a === void 0) &&
            a.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(s || l))
      )
        return;
      const u = this.getLead();
      Dt(this.layoutCorrected, this.layout.actual),
        N5(
          this.layoutCorrected,
          this.treeScale,
          this.path,
          !!this.resumingFrom || this !== u
        );
      const { target: c } = u;
      if (!c) return;
      this.projectionDelta ||
        ((this.projectionDelta = Do()),
        (this.projectionDeltaWithTransform = Do()));
      const d = this.treeScale.x,
        f = this.treeScale.y,
        m = this.projectionTransform;
      Lo(this.projectionDelta, this.layoutCorrected, c, this.latestValues),
        (this.projectionTransform = Bg(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== m ||
          this.treeScale.x !== d ||
          this.treeScale.y !== f) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", c));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      var s, l, u;
      (l = (s = this.options).scheduleRender) === null ||
        l === void 0 ||
        l.call(s),
        a &&
          ((u = this.getStack()) === null ||
            u === void 0 ||
            u.scheduleRender()),
        this.resumingFrom &&
          !this.resumingFrom.instance &&
          (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      var l;
      const u = this.snapshot,
        c = (u == null ? void 0 : u.latestValues) || {},
        d = { ...this.latestValues },
        f = Do();
      (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s);
      const m = Ve(),
        h = u == null ? void 0 : u.isShared,
        v =
          (((l = this.getStack()) === null || l === void 0
            ? void 0
            : l.members.length) || 0) <= 1,
        b = !!(h && !v && this.options.crossfade === !0 && !this.path.some(IA));
      (this.animationProgress = 0),
        (this.mixTargetDelta = (w) => {
          var y;
          const g = w / 1e3;
          Yg(f.x, a.x, g),
            Yg(f.y, a.y, g),
            this.setTargetDelta(f),
            this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.layout &&
              !((y = this.relativeParent) === null || y === void 0) &&
              y.layout &&
              (Io(m, this.layout.actual, this.relativeParent.layout.actual),
              LA(this.relativeTarget, this.relativeTargetOrigin, m, g)),
            h &&
              ((this.animationValues = d),
              hA(d, c, this.latestValues, g, b, v)),
            this.root.scheduleUpdateProjection(),
            this.scheduleRender(),
            (this.animationProgress = g);
        }),
        this.mixTargetDelta(0);
    }
    startAnimation(a) {
      var s, l;
      this.notifyListeners("animationStart"),
        (s = this.currentAnimation) === null || s === void 0 || s.stop(),
        this.resumingFrom &&
          ((l = this.resumingFrom.currentAnimation) === null ||
            l === void 0 ||
            l.stop()),
        this.pendingAnimation &&
          ($i.update(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Gt.update(() => {
          (_o.hasAnimatedSinceResize = !0),
            (this.currentAnimation = pA(0, Hg, {
              ...a,
              onUpdate: (u) => {
                var c;
                this.mixTargetDelta(u),
                  (c = a.onUpdate) === null || c === void 0 || c.call(a, u);
              },
              onComplete: () => {
                var u;
                (u = a.onComplete) === null || u === void 0 || u.call(a),
                  this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      var a;
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0)),
        (a = this.getStack()) === null ||
          a === void 0 ||
          a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      var a;
      this.currentAnimation &&
        ((a = this.mixTargetDelta) === null || a === void 0 || a.call(this, Hg),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: s,
        target: l,
        layout: u,
        latestValues: c,
      } = a;
      if (!(!s || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          C2(this.options.animationType, this.layout.actual, u.actual)
        ) {
          l = this.target || Ve();
          const d = wt(this.layout.actual.x);
          (l.x.min = a.target.x.min), (l.x.max = l.x.min + d);
          const f = wt(this.layout.actual.y);
          (l.y.min = a.target.y.min), (l.y.max = l.y.min + f);
        }
        Dt(s, l),
          gi(s, c),
          Lo(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      var l, u, c;
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new SA()),
        this.sharedNodes.get(a).add(s),
        s.promote({
          transition:
            (l = s.options.initialPromotionConfig) === null || l === void 0
              ? void 0
              : l.transition,
          preserveFollowOpacity:
            (c =
              (u = s.options.initialPromotionConfig) === null || u === void 0
                ? void 0
                : u.shouldPreserveFollowOpacity) === null || c === void 0
              ? void 0
              : c.call(u, s),
        });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let s = !1;
      const l = {};
      for (let u = 0; u < Wg.length; u++) {
        const d = "rotate" + Wg[u];
        a.getStaticValue(d) &&
          ((s = !0), (l[d] = a.getStaticValue(d)), a.setStaticValue(d, 0));
      }
      if (s) {
        a == null || a.syncRender();
        for (const u in l) a.setStaticValue(u, l[u]);
        a.scheduleRender();
      }
    }
    getProjectionStyles(a = {}) {
      var s, l, u;
      const c = {};
      if (!this.instance || this.isSVG) return c;
      if (this.isVisible) c.visibility = "";
      else return { visibility: "hidden" };
      const d =
        (s = this.options.visualElement) === null || s === void 0
          ? void 0
          : s.getProps().transformTemplate;
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = Ds(a.pointerEvents) || ""),
          (c.transform = d ? d(this.latestValues, "") : "none"),
          c
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const b = {};
        return (
          this.options.layoutId &&
            ((b.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (b.pointerEvents = Ds(a.pointerEvents) || "")),
          this.hasProjected &&
            !Rn(this.latestValues) &&
            ((b.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          b
        );
      }
      const m = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = Bg(
          this.projectionDeltaWithTransform,
          this.treeScale,
          m
        )),
        d && (c.transform = d(m, c.transform));
      const { x: h, y: v } = this.projectionDelta;
      (c.transformOrigin = `${h.origin * 100}% ${v.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (u =
                    (l = m.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && u !== void 0
                  ? u
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : m.opacityExit)
          : (c.opacity =
              f === this
                ? m.opacity !== void 0
                  ? m.opacity
                  : ""
                : m.opacityExit !== void 0
                ? m.opacityExit
                : 0);
      for (const b in wl) {
        if (m[b] === void 0) continue;
        const { correct: w, applyTo: y } = wl[b],
          g = w(m[b], f);
        if (y) {
          const S = y.length;
          for (let k = 0; k < S; k++) c[y[k]] = g;
        } else c[b] = g;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents = f === this ? Ds(a.pointerEvents) || "" : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0
          ? void 0
          : s.stop();
      }),
        this.root.nodes.forEach(Gg),
        this.root.sharedNodes.clear();
    }
  };
}
function PA(e) {
  e.updateLayout();
}
function TA(e) {
  var t, n, r;
  const i =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
    const { actual: o, measured: a } = e.layout,
      { animationType: s } = e.options;
    s === "size"
      ? Qt((f) => {
          const m = i.isShared ? i.measured[f] : i.layout[f],
            h = wt(m);
          (m.min = o[f].min), (m.max = m.min + h);
        })
      : C2(s, i.layout, o) &&
        Qt((f) => {
          const m = i.isShared ? i.measured[f] : i.layout[f],
            h = wt(o[f]);
          m.max = m.min + h;
        });
    const l = Do();
    Lo(l, o, i.layout);
    const u = Do();
    i.isShared
      ? Lo(u, e.applyTransform(a, !0), i.measured)
      : Lo(u, o, i.layout);
    const c = !S2(l);
    let d = !1;
    if (
      !e.resumeFrom &&
      ((e.relativeParent = e.getClosestProjectingParent()),
      e.relativeParent && !e.relativeParent.resumeFrom)
    ) {
      const { snapshot: f, layout: m } = e.relativeParent;
      if (f && m) {
        const h = Ve();
        Io(h, i.layout, f.layout);
        const v = Ve();
        Io(v, o, m.actual), k2(h, v) || (d = !0);
      }
    }
    e.notifyListeners("didUpdate", {
      layout: o,
      snapshot: i,
      delta: u,
      layoutDelta: l,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: d,
    });
  } else
    e.isLead() &&
      ((r = (n = e.options).onExitComplete) === null ||
        r === void 0 ||
        r.call(n));
  e.options.transition = void 0;
}
function jA(e) {
  e.clearSnapshot();
}
function Gg(e) {
  e.clearMeasurements();
}
function OA(e) {
  const { visualElement: t } = e.options;
  t != null &&
    t.getProps().onBeforeLayoutMeasure &&
    t.notifyBeforeLayoutMeasure(),
    e.resetTransform();
}
function AA(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0);
}
function _A(e) {
  e.resolveTargetDelta();
}
function NA(e) {
  e.calcProjection();
}
function MA(e) {
  e.resetRotation();
}
function RA(e) {
  e.removeLeadSnapshot();
}
function Yg(e, t, n) {
  (e.translate = be(t.translate, 0, n)),
    (e.scale = be(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function qg(e, t, n, r) {
  (e.min = be(t.min, n.min, r)), (e.max = be(t.max, n.max, r));
}
function LA(e, t, n, r) {
  qg(e.x, t.x, n.x, r), qg(e.y, t.y, n.y, r);
}
function IA(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const DA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function VA(e, t) {
  let n = e.root;
  for (let o = e.path.length - 1; o >= 0; o--)
    if (e.path[o].instance) {
      n = e.path[o];
      break;
    }
  const i = (n && n !== e.root ? n.instance : document).querySelector(
    `[data-projection-id="${t}"]`
  );
  i && e.mount(i, !0);
}
function Kg(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function Xg(e) {
  Kg(e.x), Kg(e.y);
}
function C2(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !bA(Ug(t), Ug(n), 0.2))
  );
}
const FA = E2({
    attachResizeListener: (e, t) => Mu(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Dc = { current: void 0 },
  zA = E2({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Dc.current) {
        const e = new FA(0, {});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Dc.current = e);
      }
      return Dc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  $A = { ...x5, ...VO, ...$5, ...dA },
  Z = AT((e, t) => hj(e, t, $A, sA, zA));
function P2() {
  const e = x.useRef(!1);
  return (
    yl(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function UA() {
  const e = P2(),
    [t, n] = x.useState(0),
    r = x.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [x.useCallback(() => Gt.postRender(r), [r]), t];
}
class BA extends x.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function WA({ children: e, isPresent: t }) {
  const n = x.useId(),
    r = x.useRef(null),
    i = x.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    x.useInsertionEffect(() => {
      const { width: o, height: a, top: s, left: l } = i.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    x.createElement(
      BA,
      { isPresent: t, childRef: r, sizeRef: i },
      x.cloneElement(e, { ref: r })
    )
  );
}
const Vc = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: a,
}) => {
  const s = Aa(HA),
    l = x.useId(),
    u = x.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (c) => {
          s.set(c, !0);
          for (const d of s.values()) if (!d) return;
          r && r();
        },
        register: (c) => (s.set(c, !1), () => s.delete(c)),
      }),
      o ? void 0 : [n]
    );
  return (
    x.useMemo(() => {
      s.forEach((c, d) => s.set(d, !1));
    }, [n]),
    x.useEffect(() => {
      !n && !s.size && r && r();
    }, [n]),
    a === "popLayout" && (e = x.createElement(WA, { isPresent: n }, e)),
    x.createElement(Oa.Provider, { value: u }, e)
  );
};
function HA() {
  return new Map();
}
const Zr = (e) => e.key || "";
function GA(e, t) {
  e.forEach((n) => {
    const r = Zr(n);
    t.set(r, n);
  });
}
function YA(e) {
  const t = [];
  return (
    x.Children.forEach(e, (n) => {
      x.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const kn = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: i,
  presenceAffectsLayout: o = !0,
  mode: a = "sync",
}) => {
  i && ((a = "wait"), Zx(!1, "Replace exitBeforeEnter with mode='wait'"));
  let [s] = UA();
  const l = x.useContext(om).forceRender;
  l && (s = l);
  const u = P2(),
    c = YA(e);
  let d = c;
  const f = new Set(),
    m = x.useRef(d),
    h = x.useRef(new Map()).current,
    v = x.useRef(!0);
  if (
    (yl(() => {
      (v.current = !1), GA(c, h), (m.current = d);
    }),
    pm(() => {
      (v.current = !0), h.clear(), f.clear();
    }),
    v.current)
  )
    return x.createElement(
      x.Fragment,
      null,
      d.map((g) =>
        x.createElement(
          Vc,
          {
            key: Zr(g),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: a,
          },
          g
        )
      )
    );
  d = [...d];
  const b = m.current.map(Zr),
    w = c.map(Zr),
    y = b.length;
  for (let g = 0; g < y; g++) {
    const S = b[g];
    w.indexOf(S) === -1 && f.add(S);
  }
  return (
    a === "wait" && f.size && (d = []),
    f.forEach((g) => {
      if (w.indexOf(g) !== -1) return;
      const S = h.get(g);
      if (!S) return;
      const k = b.indexOf(g),
        E = () => {
          h.delete(g), f.delete(g);
          const C = m.current.findIndex((T) => T.key === g);
          if ((m.current.splice(C, 1), !f.size)) {
            if (((m.current = c), u.current === !1)) return;
            s(), r && r();
          }
        };
      d.splice(
        k,
        0,
        x.createElement(
          Vc,
          {
            key: Zr(S),
            isPresent: !1,
            onExitComplete: E,
            custom: t,
            presenceAffectsLayout: o,
            mode: a,
          },
          S
        )
      );
    }),
    (d = d.map((g) => {
      const S = g.key;
      return f.has(S)
        ? g
        : x.createElement(
            Vc,
            { key: Zr(g), isPresent: !0, presenceAffectsLayout: o, mode: a },
            g
          );
    })),
    Jx !== "production" &&
      a === "wait" &&
      d.length > 1 &&
      console.warn(
        `You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`
      ),
    x.createElement(
      x.Fragment,
      null,
      f.size ? d : d.map((g) => x.cloneElement(g))
    )
  );
};
function qA() {
  let e = !1;
  const t = [],
    n = new Set(),
    r = {
      subscribe(i) {
        return n.add(i), () => void n.delete(i);
      },
      start(i, o) {
        if (e) {
          const a = [];
          return (
            n.forEach((s) => {
              a.push(i2(s, i, { transitionOverride: o }));
            }),
            Promise.all(a)
          );
        } else
          return new Promise((a) => {
            t.push({ animation: [i, o], resolve: a });
          });
      },
      set(i) {
        return n.forEach((o) => {
          a5(o, i);
        });
      },
      stop() {
        n.forEach((i) => {
          f5(i);
        });
      },
      mount() {
        return (
          (e = !0),
          t.forEach(({ animation: i, resolve: o }) => {
            r.start(...i).then(o);
          }),
          () => {
            (e = !1), r.stop();
          }
        );
      },
    };
  return r;
}
function T2() {
  const e = Aa(qA);
  return x.useEffect(e.mount, []), e;
}
const Qg = T2,
  Jg = { hover: { scale: 1.1 }, tap: { scale: 0.9 } },
  KA = ({ childs: e }) => {
    const [t, n] = x.useState(0);
    function r(i) {
      e && (i >= e.length ? (i = 0) : i < 0 && (i = e.length - 1), n(i));
    }
    return p.jsxs("div", {
      className: "container-slider",
      children: [
        e.length > 1 &&
          p.jsxs(p.Fragment, {
            children: [
              p.jsx(Z.div, {
                className: "ico-next",
                whileHover: "hover",
                whileTap: "tap",
                variants: Jg,
                onClick: (i) => r(t + 1),
                children: p.jsx(se, { icon: Bp }),
              }),
              p.jsx(Z.div, {
                className: "ico-prev",
                whileHover: "hover",
                whileTap: "tap",
                variants: Jg,
                onClick: (i) => r(t - 1),
                children: p.jsx(se, { icon: bw }),
              }),
            ],
          }),
        p.jsx("div", {
          className: "overflower",
          children: p.jsx(Z.div, {
            className: "scroller",
            initial: !1,
            animate: { x: -(t * 100) + "%" },
            children:
              e &&
              e.map((i, o) =>
                p.jsx(
                  "div",
                  {
                    className: "contain-img",
                    children: p.jsx("img", {
                      src: {}.REACT_APP_API_USER + i.path,
                      alt: "",
                    }),
                  },
                  o
                )
              ),
          }),
        }),
      ],
    });
  },
  XA = ({ element: e }) => {
    const [t, n] = x.useState([]);
    x.useEffect(() => {
      r().then((i) => {
        n(i);
      });
    }, [e.id, e.repertory]);
    async function r() {
      var i = new FormData();
      e.repertory && i.append("repertory", e.repertory);
      const o = { method: "POST", body: i };
      return await fetch({}.REACT_APP_URL_GET_PROJECTS_IMAGES ?? "", o)
        .then((a) => a.json())
        .then(
          (a) => a,
          (a) => (console.log(a), [])
        );
    }
    return p.jsx(p.Fragment, {
      children: e.id
        ? p.jsxs("div", {
            className: "inside-popup-experience",
            children: [
              p.jsxs("div", {
                className: "container-text",
                children: [
                  p.jsx("span", { className: "date", children: e.date }),
                  p.jsx("span", { className: "titre", children: e.title }),
                  p.jsx("div", {
                    className: "container-desc",
                    children: e.desc,
                  }),
                  e.link &&
                    p.jsx("a", {
                      href: e.link,
                      target: "_blank",
                      className: "link-to-site",
                      onClick: (i) => (window.location.href = e.link ?? ""),
                      children: "Visiter le site",
                    }),
                ],
              }),
              p.jsx(KA, { childs: e.images }),
            ],
          })
        : p.jsx("div", {
            className: "inside-popup-experience",
            children: p.jsxs("div", {
              className: "container-text",
              children: [
                p.jsx("span", { className: "date", children: e.date }),
                p.jsx("span", { className: "titre", children: e.titre }),
                p.jsx("span", { className: "lieu", children: e.lieu }),
                p.jsx("div", { className: "container-desc", children: e.desc }),
              ],
            }),
          }),
    });
  };
function $t(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (i) {
              return "'" + i + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function cr(e) {
  return !!e && !!e[me];
}
function En(e) {
  return (
    !!e &&
    ((function (t) {
      if (!t || typeof t != "object") return !1;
      var n = Object.getPrototypeOf(t);
      if (n === null) return !0;
      var r = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
      return (
        r === Object ||
        (typeof r == "function" && Function.toString.call(r) === o_)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[oy] ||
      !!e.constructor[oy] ||
      Om(e) ||
      Am(e))
  );
}
function Fr(e, t, n) {
  n === void 0 && (n = !1),
    Ki(e) === 0
      ? (n ? Object.keys : Oi)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, i) {
          return t(i, r, e);
        });
}
function Ki(e) {
  var t = e[me];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Om(e)
    ? 2
    : Am(e)
    ? 3
    : 0;
}
function ji(e, t) {
  return Ki(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function QA(e, t) {
  return Ki(e) === 2 ? e.get(t) : e[t];
}
function j2(e, t, n) {
  var r = Ki(e);
  r === 2 ? e.set(t, n) : r === 3 ? (e.delete(t), e.add(n)) : (e[t] = n);
}
function O2(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Om(e) {
  return r_ && e instanceof Map;
}
function Am(e) {
  return i_ && e instanceof Set;
}
function kr(e) {
  return e.o || e.t;
}
function _m(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = _2(e);
  delete t[me];
  for (var n = Oi(t), r = 0; r < n.length; r++) {
    var i = n[r],
      o = t[i];
    o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
      (o.get || o.set) &&
        (t[i] = {
          configurable: !0,
          writable: !0,
          enumerable: o.enumerable,
          value: e[i],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Nm(e, t) {
  return (
    t === void 0 && (t = !1),
    Mm(e) ||
      cr(e) ||
      !En(e) ||
      (Ki(e) > 1 && (e.set = e.add = e.clear = e.delete = JA),
      Object.freeze(e),
      t &&
        Fr(
          e,
          function (n, r) {
            return Nm(r, !0);
          },
          !0
        )),
    e
  );
}
function JA() {
  $t(2);
}
function Mm(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function on(e) {
  var t = Ad[e];
  return t || $t(18, e), t;
}
function ZA(e, t) {
  Ad[e] || (Ad[e] = t);
}
function Td() {
  return pa;
}
function Fc(e, t) {
  t && (on("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function _l(e) {
  jd(e), e.p.forEach(e_), (e.p = null);
}
function jd(e) {
  e === pa && (pa = e.l);
}
function Zg(e) {
  return (pa = { p: [], l: pa, h: e, m: !0, _: 0 });
}
function e_(e) {
  var t = e[me];
  t.i === 0 || t.i === 1 ? t.j() : (t.O = !0);
}
function zc(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.g || on("ES5").S(t, e, r),
    r
      ? (n[me].P && (_l(t), $t(4)),
        En(e) && ((e = Nl(t, e)), t.l || Ml(t, e)),
        t.u && on("Patches").M(n[me].t, e, t.u, t.s))
      : (e = Nl(t, n, [])),
    _l(t),
    t.u && t.v(t.u, t.s),
    e !== A2 ? e : void 0
  );
}
function Nl(e, t, n) {
  if (Mm(t)) return t;
  var r = t[me];
  if (!r)
    return (
      Fr(
        t,
        function (o, a) {
          return ey(e, r, t, o, a, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return Ml(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var i = r.i === 4 || r.i === 5 ? (r.o = _m(r.k)) : r.o;
    Fr(r.i === 3 ? new Set(i) : i, function (o, a) {
      return ey(e, r, i, o, a, n);
    }),
      Ml(e, i, !1),
      n && e.u && on("Patches").R(r, n, e.u, e.s);
  }
  return r.o;
}
function ey(e, t, n, r, i, o) {
  if (cr(i)) {
    var a = Nl(e, i, o && t && t.i !== 3 && !ji(t.D, r) ? o.concat(r) : void 0);
    if ((j2(n, r, a), !cr(a))) return;
    e.m = !1;
  }
  if (En(i) && !Mm(i)) {
    if (!e.h.F && e._ < 1) return;
    Nl(e, i), (t && t.A.l) || Ml(e, i);
  }
}
function Ml(e, t, n) {
  n === void 0 && (n = !1), e.h.F && e.m && Nm(t, n);
}
function $c(e, t) {
  var n = e[me];
  return (n ? kr(n) : e)[t];
}
function ty(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function zn(e) {
  e.P || ((e.P = !0), e.l && zn(e.l));
}
function Uc(e) {
  e.o || (e.o = _m(e.t));
}
function Od(e, t, n) {
  var r = Om(t)
    ? on("MapSet").N(t, n)
    : Am(t)
    ? on("MapSet").T(t, n)
    : e.g
    ? (function (i, o) {
        var a = Array.isArray(i),
          s = {
            i: a ? 1 : 0,
            A: o ? o.A : Td(),
            P: !1,
            I: !1,
            D: {},
            l: o,
            t: i,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          l = s,
          u = ma;
        a && ((l = [s]), (u = wo));
        var c = Proxy.revocable(l, u),
          d = c.revoke,
          f = c.proxy;
        return (s.k = f), (s.j = d), f;
      })(t, n)
    : on("ES5").J(t, n);
  return (n ? n.A : Td()).p.push(r), r;
}
function t_(e) {
  return (
    cr(e) || $t(22, e),
    (function t(n) {
      if (!En(n)) return n;
      var r,
        i = n[me],
        o = Ki(n);
      if (i) {
        if (!i.P && (i.i < 4 || !on("ES5").K(i))) return i.t;
        (i.I = !0), (r = ny(n, o)), (i.I = !1);
      } else r = ny(n, o);
      return (
        Fr(r, function (a, s) {
          (i && QA(i.t, a) === s) || j2(r, a, t(s));
        }),
        o === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function ny(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return _m(e);
}
function n_() {
  function e(o, a) {
    var s = i[o];
    return (
      s
        ? (s.enumerable = a)
        : (i[o] = s =
            {
              configurable: !0,
              enumerable: a,
              get: function () {
                var l = this[me];
                return ma.get(l, o);
              },
              set: function (l) {
                var u = this[me];
                ma.set(u, o, l);
              },
            }),
      s
    );
  }
  function t(o) {
    for (var a = o.length - 1; a >= 0; a--) {
      var s = o[a][me];
      if (!s.P)
        switch (s.i) {
          case 5:
            r(s) && zn(s);
            break;
          case 4:
            n(s) && zn(s);
        }
    }
  }
  function n(o) {
    for (var a = o.t, s = o.k, l = Oi(s), u = l.length - 1; u >= 0; u--) {
      var c = l[u];
      if (c !== me) {
        var d = a[c];
        if (d === void 0 && !ji(a, c)) return !0;
        var f = s[c],
          m = f && f[me];
        if (m ? m.t !== d : !O2(f, d)) return !0;
      }
    }
    var h = !!a[me];
    return l.length !== Oi(a).length + (h ? 0 : 1);
  }
  function r(o) {
    var a = o.k;
    if (a.length !== o.t.length) return !0;
    var s = Object.getOwnPropertyDescriptor(a, a.length - 1);
    if (s && !s.get) return !0;
    for (var l = 0; l < a.length; l++) if (!a.hasOwnProperty(l)) return !0;
    return !1;
  }
  var i = {};
  ZA("ES5", {
    J: function (o, a) {
      var s = Array.isArray(o),
        l = (function (c, d) {
          if (c) {
            for (var f = Array(d.length), m = 0; m < d.length; m++)
              Object.defineProperty(f, "" + m, e(m, !0));
            return f;
          }
          var h = _2(d);
          delete h[me];
          for (var v = Oi(h), b = 0; b < v.length; b++) {
            var w = v[b];
            h[w] = e(w, c || !!h[w].enumerable);
          }
          return Object.create(Object.getPrototypeOf(d), h);
        })(s, o),
        u = {
          i: s ? 5 : 4,
          A: a ? a.A : Td(),
          P: !1,
          I: !1,
          D: {},
          l: a,
          t: o,
          k: l,
          o: null,
          O: !1,
          C: !1,
        };
      return Object.defineProperty(l, me, { value: u, writable: !0 }), l;
    },
    S: function (o, a, s) {
      s
        ? cr(a) && a[me].A === o && t(o.p)
        : (o.u &&
            (function l(u) {
              if (u && typeof u == "object") {
                var c = u[me];
                if (c) {
                  var d = c.t,
                    f = c.k,
                    m = c.D,
                    h = c.i;
                  if (h === 4)
                    Fr(f, function (g) {
                      g !== me &&
                        (d[g] !== void 0 || ji(d, g)
                          ? m[g] || l(f[g])
                          : ((m[g] = !0), zn(c)));
                    }),
                      Fr(d, function (g) {
                        f[g] !== void 0 || ji(f, g) || ((m[g] = !1), zn(c));
                      });
                  else if (h === 5) {
                    if ((r(c) && (zn(c), (m.length = !0)), f.length < d.length))
                      for (var v = f.length; v < d.length; v++) m[v] = !1;
                    else for (var b = d.length; b < f.length; b++) m[b] = !0;
                    for (
                      var w = Math.min(f.length, d.length), y = 0;
                      y < w;
                      y++
                    )
                      f.hasOwnProperty(y) || (m[y] = !0),
                        m[y] === void 0 && l(f[y]);
                  }
                }
              }
            })(o.p[0]),
          t(o.p));
    },
    K: function (o) {
      return o.i === 4 ? n(o) : r(o);
    },
  });
}
var ry,
  pa,
  Rm = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  r_ = typeof Map < "u",
  i_ = typeof Set < "u",
  iy = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  A2 = Rm
    ? Symbol.for("immer-nothing")
    : (((ry = {})["immer-nothing"] = !0), ry),
  oy = Rm ? Symbol.for("immer-draftable") : "__$immer_draftable",
  me = Rm ? Symbol.for("immer-state") : "__$immer_state",
  o_ = "" + Object.prototype.constructor,
  Oi =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  _2 =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Oi(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  Ad = {},
  ma = {
    get: function (e, t) {
      if (t === me) return e;
      var n = kr(e);
      if (!ji(n, t))
        return (function (i, o, a) {
          var s,
            l = ty(o, a);
          return l
            ? "value" in l
              ? l.value
              : (s = l.get) === null || s === void 0
              ? void 0
              : s.call(i.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !En(r)
        ? r
        : r === $c(e.t, t)
        ? (Uc(e), (e.o[t] = Od(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in kr(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(kr(e));
    },
    set: function (e, t, n) {
      var r = ty(kr(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var i = $c(kr(e), t),
          o = i == null ? void 0 : i[me];
        if (o && o.t === n) return (e.o[t] = n), (e.D[t] = !1), !0;
        if (O2(n, i) && (n !== void 0 || ji(e.t, t))) return !0;
        Uc(e), zn(e);
      }
      return (
        (e.o[t] === n && typeof n != "number" && (n !== void 0 || t in e.o)) ||
        ((e.o[t] = n), (e.D[t] = !0), !0)
      );
    },
    deleteProperty: function (e, t) {
      return (
        $c(e.t, t) !== void 0 || t in e.t
          ? ((e.D[t] = !1), Uc(e), zn(e))
          : delete e.D[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = kr(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      $t(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      $t(12);
    },
  },
  wo = {};
Fr(ma, function (e, t) {
  wo[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (wo.deleteProperty = function (e, t) {
    return wo.set.call(this, e, t, void 0);
  }),
  (wo.set = function (e, t, n) {
    return ma.set.call(this, e[0], t, n, e[0]);
  });
var a_ = (function () {
    function e(n) {
      var r = this;
      (this.g = iy),
        (this.F = !0),
        (this.produce = function (i, o, a) {
          if (typeof i == "function" && typeof o != "function") {
            var s = o;
            o = i;
            var l = r;
            return function (v) {
              var b = this;
              v === void 0 && (v = s);
              for (
                var w = arguments.length, y = Array(w > 1 ? w - 1 : 0), g = 1;
                g < w;
                g++
              )
                y[g - 1] = arguments[g];
              return l.produce(v, function (S) {
                var k;
                return (k = o).call.apply(k, [b, S].concat(y));
              });
            };
          }
          var u;
          if (
            (typeof o != "function" && $t(6),
            a !== void 0 && typeof a != "function" && $t(7),
            En(i))
          ) {
            var c = Zg(r),
              d = Od(r, i, void 0),
              f = !0;
            try {
              (u = o(d)), (f = !1);
            } finally {
              f ? _l(c) : jd(c);
            }
            return typeof Promise < "u" && u instanceof Promise
              ? u.then(
                  function (v) {
                    return Fc(c, a), zc(v, c);
                  },
                  function (v) {
                    throw (_l(c), v);
                  }
                )
              : (Fc(c, a), zc(u, c));
          }
          if (!i || typeof i != "object") {
            if (
              ((u = o(i)) === void 0 && (u = i),
              u === A2 && (u = void 0),
              r.F && Nm(u, !0),
              a)
            ) {
              var m = [],
                h = [];
              on("Patches").M(i, u, m, h), a(m, h);
            }
            return u;
          }
          $t(21, i);
        }),
        (this.produceWithPatches = function (i, o) {
          if (typeof i == "function")
            return function (u) {
              for (
                var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), f = 1;
                f < c;
                f++
              )
                d[f - 1] = arguments[f];
              return r.produceWithPatches(u, function (m) {
                return i.apply(void 0, [m].concat(d));
              });
            };
          var a,
            s,
            l = r.produce(i, o, function (u, c) {
              (a = u), (s = c);
            });
          return typeof Promise < "u" && l instanceof Promise
            ? l.then(function (u) {
                return [u, a, s];
              })
            : [l, a, s];
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        En(n) || $t(8), cr(n) && (n = t_(n));
        var r = Zg(this),
          i = Od(this, n, void 0);
        return (i[me].C = !0), jd(r), i;
      }),
      (t.finishDraft = function (n, r) {
        var i = n && n[me],
          o = i.A;
        return Fc(o, r), zc(void 0, o);
      }),
      (t.setAutoFreeze = function (n) {
        this.F = n;
      }),
      (t.setUseProxies = function (n) {
        n && !iy && $t(20), (this.g = n);
      }),
      (t.applyPatches = function (n, r) {
        var i;
        for (i = r.length - 1; i >= 0; i--) {
          var o = r[i];
          if (o.path.length === 0 && o.op === "replace") {
            n = o.value;
            break;
          }
        }
        i > -1 && (r = r.slice(i + 1));
        var a = on("Patches").$;
        return cr(n)
          ? a(n, r)
          : this.produce(n, function (s) {
              return a(s, r);
            });
      }),
      e
    );
  })(),
  xt = new a_(),
  N2 = xt.produce;
xt.produceWithPatches.bind(xt);
xt.setAutoFreeze.bind(xt);
xt.setUseProxies.bind(xt);
xt.applyPatches.bind(xt);
xt.createDraft.bind(xt);
xt.finishDraft.bind(xt);
function s_(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ay(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function sy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ay(Object(n), !0).forEach(function (r) {
          s_(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ay(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function He(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var ly = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Bc = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Rl = {
    INIT: "@@redux/INIT" + Bc(),
    REPLACE: "@@redux/REPLACE" + Bc(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Bc();
    },
  };
function l_(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function M2(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(He(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(He(1));
    return n(M2)(e, t);
  }
  if (typeof e != "function") throw new Error(He(2));
  var i = e,
    o = t,
    a = [],
    s = a,
    l = !1;
  function u() {
    s === a && (s = a.slice());
  }
  function c() {
    if (l) throw new Error(He(3));
    return o;
  }
  function d(v) {
    if (typeof v != "function") throw new Error(He(4));
    if (l) throw new Error(He(5));
    var b = !0;
    return (
      u(),
      s.push(v),
      function () {
        if (b) {
          if (l) throw new Error(He(6));
          (b = !1), u();
          var y = s.indexOf(v);
          s.splice(y, 1), (a = null);
        }
      }
    );
  }
  function f(v) {
    if (!l_(v)) throw new Error(He(7));
    if (typeof v.type > "u") throw new Error(He(8));
    if (l) throw new Error(He(9));
    try {
      (l = !0), (o = i(o, v));
    } finally {
      l = !1;
    }
    for (var b = (a = s), w = 0; w < b.length; w++) {
      var y = b[w];
      y();
    }
    return v;
  }
  function m(v) {
    if (typeof v != "function") throw new Error(He(10));
    (i = v), f({ type: Rl.REPLACE });
  }
  function h() {
    var v,
      b = d;
    return (
      (v = {
        subscribe: function (y) {
          if (typeof y != "object" || y === null) throw new Error(He(11));
          function g() {
            y.next && y.next(c());
          }
          g();
          var S = b(g);
          return { unsubscribe: S };
        },
      }),
      (v[ly] = function () {
        return this;
      }),
      v
    );
  }
  return (
    f({ type: Rl.INIT }),
    (r = { dispatch: f, subscribe: d, getState: c, replaceReducer: m }),
    (r[ly] = h),
    r
  );
}
function u_(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Rl.INIT });
    if (typeof r > "u") throw new Error(He(12));
    if (typeof n(void 0, { type: Rl.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(He(13));
  });
}
function c_(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  var o = Object.keys(n),
    a;
  try {
    u_(n);
  } catch (s) {
    a = s;
  }
  return function (l, u) {
    if ((l === void 0 && (l = {}), a)) throw a;
    for (var c = !1, d = {}, f = 0; f < o.length; f++) {
      var m = o[f],
        h = n[m],
        v = l[m],
        b = h(v, u);
      if (typeof b > "u") throw (u && u.type, new Error(He(14)));
      (d[m] = b), (c = c || b !== v);
    }
    return (c = c || o.length !== Object.keys(l).length), c ? d : l;
  };
}
function Ll() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, i) {
        return function () {
          return r(i.apply(void 0, arguments));
        };
      });
}
function f_() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var i = r.apply(void 0, arguments),
        o = function () {
          throw new Error(He(15));
        },
        a = {
          getState: i.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        s = t.map(function (l) {
          return l(a);
        });
      return (
        (o = Ll.apply(void 0, s)(i.dispatch)),
        sy(sy({}, i), {}, { dispatch: o })
      );
    };
  };
}
function R2(e) {
  var t = function (r) {
    var i = r.dispatch,
      o = r.getState;
    return function (a) {
      return function (s) {
        return typeof s == "function" ? s(i, o, e) : a(s);
      };
    };
  };
  return t;
}
var L2 = R2();
L2.withExtraArgument = R2;
const uy = L2;
var d_ =
  (globalThis && globalThis.__extends) ||
  (function () {
    var e = function (t, n) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (r, i) {
              r.__proto__ = i;
            }) ||
          function (r, i) {
            for (var o in i)
              Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
          }),
        e(t, n)
      );
    };
    return function (t, n) {
      if (typeof n != "function" && n !== null)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      e(t, n);
      function r() {
        this.constructor = t;
      }
      t.prototype =
        n === null ? Object.create(n) : ((r.prototype = n.prototype), new r());
    };
  })();
globalThis && globalThis.__generator;
var Il =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  p_ = Object.defineProperty,
  cy = Object.getOwnPropertySymbols,
  m_ = Object.prototype.hasOwnProperty,
  h_ = Object.prototype.propertyIsEnumerable,
  fy = function (e, t, n) {
    return t in e
      ? p_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  ha = function (e, t) {
    for (var n in t || (t = {})) m_.call(t, n) && fy(e, n, t[n]);
    if (cy)
      for (var r = 0, i = cy(t); r < i.length; r++) {
        var n = i[r];
        h_.call(t, n) && fy(e, n, t[n]);
      }
    return e;
  },
  v_ =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Ll
              : Ll.apply(null, arguments);
        };
function g_(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var y_ = (function (e) {
  d_(t, e);
  function t() {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    var i = e.apply(this, n) || this;
    return Object.setPrototypeOf(i, t.prototype), i;
  }
  return (
    Object.defineProperty(t, Symbol.species, {
      get: function () {
        return t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (t.prototype.concat = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return e.prototype.concat.apply(this, n);
    }),
    (t.prototype.prepend = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return n.length === 1 && Array.isArray(n[0])
        ? new (t.bind.apply(t, Il([void 0], n[0].concat(this))))()
        : new (t.bind.apply(t, Il([void 0], n.concat(this))))();
    }),
    t
  );
})(Array);
function _d(e) {
  return En(e) ? N2(e, function () {}) : e;
}
function w_(e) {
  return typeof e == "boolean";
}
function x_() {
  return function (t) {
    return b_(t);
  };
}
function b_(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new y_();
  return (
    n && (w_(n) ? r.push(uy) : r.push(uy.withExtraArgument(n.extraArgument))), r
  );
}
var S_ = !0;
function Lm(e) {
  var t = x_(),
    n = e || {},
    r = n.reducer,
    i = r === void 0 ? void 0 : r,
    o = n.middleware,
    a = o === void 0 ? t() : o,
    s = n.devTools,
    l = s === void 0 ? !0 : s,
    u = n.preloadedState,
    c = u === void 0 ? void 0 : u,
    d = n.enhancers,
    f = d === void 0 ? void 0 : d,
    m;
  if (typeof i == "function") m = i;
  else if (g_(i)) m = c_(i);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var h = a;
  typeof h == "function" && (h = h(t));
  var v = f_.apply(void 0, h),
    b = Ll;
  l && (b = v_(ha({ trace: !S_ }, typeof l == "object" && l)));
  var w = [v];
  Array.isArray(f) ? (w = Il([v], f)) : typeof f == "function" && (w = f(w));
  var y = b.apply(void 0, w);
  return M2(m, c, y);
}
function va(e, t) {
  function n() {
    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
    if (t) {
      var o = t.apply(void 0, r);
      if (!o) throw new Error("prepareAction did not return an object");
      return ha(
        ha({ type: e, payload: o.payload }, "meta" in o && { meta: o.meta }),
        "error" in o && { error: o.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
function I2(e) {
  var t = {},
    n = [],
    r,
    i = {
      addCase: function (o, a) {
        var s = typeof o == "string" ? o : o.type;
        if (s in t)
          throw new Error(
            "addCase cannot be called with two reducers for the same action type"
          );
        return (t[s] = a), i;
      },
      addMatcher: function (o, a) {
        return n.push({ matcher: o, reducer: a }), i;
      },
      addDefaultCase: function (o) {
        return (r = o), i;
      },
    };
  return e(i), [t, n, r];
}
function k_(e) {
  return typeof e == "function";
}
function E_(e, t, n, r) {
  n === void 0 && (n = []);
  var i = typeof t == "function" ? I2(t) : [t, n, r],
    o = i[0],
    a = i[1],
    s = i[2],
    l;
  if (k_(e))
    l = function () {
      return _d(e());
    };
  else {
    var u = _d(e);
    l = function () {
      return u;
    };
  }
  function c(d, f) {
    d === void 0 && (d = l());
    var m = Il(
      [o[f.type]],
      a
        .filter(function (h) {
          var v = h.matcher;
          return v(f);
        })
        .map(function (h) {
          var v = h.reducer;
          return v;
        })
    );
    return (
      m.filter(function (h) {
        return !!h;
      }).length === 0 && (m = [s]),
      m.reduce(function (h, v) {
        if (v)
          if (cr(h)) {
            var b = h,
              w = v(b, f);
            return w === void 0 ? h : w;
          } else {
            if (En(h))
              return N2(h, function (y) {
                return v(y, f);
              });
            var w = v(h, f);
            if (w === void 0) {
              if (h === null) return h;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return w;
          }
        return h;
      }, d)
    );
  }
  return (c.getInitialState = l), c;
}
function C_(e, t) {
  return e + "/" + t;
}
function Gr(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var n =
      typeof e.initialState == "function" ? e.initialState : _d(e.initialState),
    r = e.reducers || {},
    i = Object.keys(r),
    o = {},
    a = {},
    s = {};
  i.forEach(function (c) {
    var d = r[c],
      f = C_(t, c),
      m,
      h;
    "reducer" in d ? ((m = d.reducer), (h = d.prepare)) : (m = d),
      (o[c] = m),
      (a[f] = m),
      (s[c] = h ? va(f, h) : va(f));
  });
  function l() {
    var c =
        typeof e.extraReducers == "function"
          ? I2(e.extraReducers)
          : [e.extraReducers],
      d = c[0],
      f = d === void 0 ? {} : d,
      m = c[1],
      h = m === void 0 ? [] : m,
      v = c[2],
      b = v === void 0 ? void 0 : v,
      w = ha(ha({}, f), a);
    return E_(n, w, h, b);
  }
  var u;
  return {
    name: t,
    reducer: function (c, d) {
      return u || (u = l()), u(c, d);
    },
    actions: s,
    caseReducers: o,
    getInitialState: function () {
      return u || (u = l()), u.getInitialState();
    },
  };
}
var Im = "listenerMiddleware";
va(Im + "/add");
va(Im + "/removeAll");
va(Im + "/remove");
n_();
const P_ = { opened: !1, inside: null },
  D2 = Gr({
    name: "popup",
    initialState: P_,
    reducers: {
      openPopup: (e) => {
        e.opened = !0;
      },
      closePopup: (e) => {
        e.opened = !1;
      },
      createPopup: (e, t) => {
        (e.inside = t.payload), (e.opened = !0);
      },
    },
  }),
  { openPopup: YR, closePopup: dy, createPopup: Dm } = D2.actions,
  T_ = (e) => e.popup.opened,
  j_ = (e) => e.popup.inside,
  O_ = D2.reducer,
  V2 = () => {
    const e = Ce(),
      t = H(T_),
      n = H(j_);
    function r(i) {
      i.preventDefault(), i.target.id === "bg-popup" && e(dy());
    }
    return p.jsx(p.Fragment, {
      children:
        t &&
        p.jsx("div", {
          className: "container-popup",
          id: "bg-popup",
          onClick: (i) => r(i),
          children: p.jsxs("div", {
            className: "popup",
            children: [
              p.jsx("div", {
                className: "container-popup-header",
                children: p.jsx("div", {
                  className: "closer",
                  onClick: () => e(dy()),
                  children: p.jsx(se, { icon: Wp }),
                }),
              }),
              p.jsx("div", {
                className: "container-popup-contain",
                children: p.jsx(XA, { element: n }),
              }),
            ],
          }),
        }),
    });
  },
  A_ = { opened: !1 },
  F2 = Gr({
    name: "login",
    initialState: A_,
    reducers: {
      openLogin: (e) => {
        e.opened = !0;
      },
      closeLogin: (e) => {
        e.opened = !1;
      },
      toggleLogin: (e) => {
        e.opened = !e.opened;
      },
    },
  }),
  { openLogin: __, closeLogin: py, toggleLogin: N_ } = F2.actions,
  M_ = (e) => e.login.opened,
  R_ = F2.reducer,
  my = { session: { user: !1, loading: !1, messageLogin: !1, isConnect: !1 } },
  z2 = Gr({
    name: "app",
    initialState: my,
    reducers: {
      getSession(e) {
        e.session.loading = !0;
      },
      getSessionSuccess(e, t) {
        (e.session.loading = !1),
          (e.session.user = t.payload),
          (e.session.isConnect = !0);
      },
      getSessionFailed(e, t) {
        (e.session.loading = !1),
          (e.session.user = my.session.user),
          (e.session.messageLogin = t.payload),
          (e.session.isConnect = !1);
      },
    },
  }),
  Vu = (e) => e.app.session.user,
  L_ = (e) => e.app.session.messageLogin,
  $2 = (e) => e.app.session.loading,
  { getSession: U2, getSessionSuccess: B2, getSessionFailed: W2 } = z2.actions,
  I_ = z2.reducer,
  H2 = () =>
    p.jsx("div", {
      className: "loader-login",
      children: p.jsxs("div", {
        className: "lds-ripple",
        children: [p.jsx("div", {}), p.jsx("div", {})],
      }),
    });
function re(e) {
  console.warn("[react-ga]", e);
}
function Nd(e) {
  "@babel/helpers - typeof";
  return (
    (Nd =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Nd(e)
  );
}
var D_ = ["to", "target"];
function hy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function vy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hy(Object(n), !0).forEach(function (r) {
          Vm(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : hy(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function V_(e, t) {
  if (e == null) return {};
  var n = F_(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function F_(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function z_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function $_(e, t, n) {
  return (
    t && gy(e.prototype, t),
    n && gy(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function U_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Md(e, t);
}
function Md(e, t) {
  return (
    (Md = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Md(e, t)
  );
}
function B_(e) {
  var t = H_();
  return function () {
    var r = Dl(e),
      i;
    if (t) {
      var o = Dl(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return W_(this, i);
  };
}
function W_(e, t) {
  if (t && (Nd(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return G2(e);
}
function G2(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function H_() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Dl(e) {
  return (
    (Dl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Dl(e)
  );
}
function Vm(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var yy = "_blank",
  G_ = 1,
  zr = (function (e) {
    U_(n, e);
    var t = B_(n);
    function n() {
      var r;
      z_(this, n);
      for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
        o[a] = arguments[a];
      return (
        (r = t.call.apply(t, [this].concat(o))),
        Vm(G2(r), "handleClick", function (s) {
          var l = r.props,
            u = l.target,
            c = l.eventLabel,
            d = l.to,
            f = l.onClick,
            m = l.trackerNames,
            h = { label: c },
            v = u !== yy,
            b = !(s.ctrlKey || s.shiftKey || s.metaKey || s.button === G_);
          v && b
            ? (s.preventDefault(),
              n.trackLink(
                h,
                function () {
                  window.location.href = d;
                },
                m
              ))
            : n.trackLink(h, function () {}, m),
            f && f(s);
        }),
        r
      );
    }
    return (
      $_(n, [
        {
          key: "render",
          value: function () {
            var i = this.props,
              o = i.to,
              a = i.target,
              s = V_(i, D_),
              l = vy(
                vy({}, s),
                {},
                { target: a, href: o, onClick: this.handleClick }
              );
            return (
              a === yy &&
                (l.rel = ""
                  .concat(l.rel ? l.rel : "", " noopener noreferrer")
                  .trim()),
              delete l.eventLabel,
              delete l.trackerNames,
              Re.createElement("a", l)
            );
          },
        },
      ]),
      n
    );
  })(x.Component);
Vm(zr, "trackLink", function () {
  re("ga tracking not enabled");
});
zr.propTypes = {
  eventLabel: A.string.isRequired,
  target: A.string,
  to: A.string,
  onClick: A.func,
  trackerNames: A.arrayOf(A.string),
};
zr.defaultProps = { target: null, to: null, onClick: null, trackerNames: null };
function Y_(e) {
  return typeof e == "string" && e.indexOf("@") !== -1;
}
var q_ = "REDACTED (Potential Email Address)";
function K_(e) {
  return Y_(e)
    ? (re("This arg looks like an email address, redacting."), q_)
    : e;
}
function Fu(e) {
  return e && e.toString().replace(/^\s+|\s+$/g, "");
}
var X_ =
  /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
function Q_(e) {
  return Fu(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (t, n, r) {
    return n > 0 &&
      n + t.length !== r.length &&
      t.search(X_) > -1 &&
      r.charAt(n - 2) !== ":" &&
      (r.charAt(n + t.length) !== "-" || r.charAt(n - 1) === "-") &&
      r.charAt(n - 1).search(/[^\s-]/) < 0
      ? t.toLowerCase()
      : t.substr(1).search(/[A-Z]|\../) > -1
      ? t
      : t.charAt(0).toUpperCase() + t.substr(1);
  });
}
function J_() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    r = e || "";
  return t && (r = Q_(e)), n && (r = K_(r)), r;
}
function Z_(e) {
  return e.substring(0, 1) === "/" ? e.substring(1) : e;
}
var wy = !1;
function eN(e) {
  if (!wy) {
    wy = !0;
    var t = "https://www.google-analytics.com/analytics.js";
    e && e.gaAddress
      ? (t = e.gaAddress)
      : e &&
        e.debug &&
        (t = "https://www.google-analytics.com/analytics_debug.js");
    var n = e && e.onerror;
    (function (r, i, o, a, s, l, u) {
      (r.GoogleAnalyticsObject = s),
        (r[s] =
          r[s] ||
          function () {
            (r[s].q = r[s].q || []).push(arguments);
          }),
        (r[s].l = 1 * new Date()),
        (l = i.createElement(o)),
        (u = i.getElementsByTagName(o)[0]),
        (l.async = 1),
        (l.src = a),
        (l.onerror = n),
        u.parentNode.insertBefore(l, u);
    })(window, document, "script", t, "ga");
  }
}
function Me(e) {
  console.info("[react-ga]", e);
}
var Wc = [];
const Vl = {
  calls: Wc,
  ga: function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    Wc.push([].concat(n));
  },
  resetCalls: function () {
    Wc.length = 0;
  },
};
var tN = [
  "category",
  "action",
  "label",
  "value",
  "nonInteraction",
  "transport",
];
function nN(e, t) {
  if (e == null) return {};
  var n = rN(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function rN(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function xy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function iN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xy(Object(n), !0).forEach(function (r) {
          oN(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : xy(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function oN(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ga(e) {
  "@babel/helpers - typeof";
  return (
    (ga =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ga(e)
  );
}
function aN(e) {
  return cN(e) || uN(e) || lN(e) || sN();
}
function sN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lN(e, t) {
  if (e) {
    if (typeof e == "string") return Rd(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Rd(e, t);
  }
}
function uN(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function cN(e) {
  if (Array.isArray(e)) return Rd(e);
}
function Rd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Y2 = typeof window > "u" || typeof document > "u",
  Ut = !1,
  q2 = !0,
  K2 = !1,
  X2 = !0,
  Q2 = !0,
  Ai = function () {
    var t;
    return K2
      ? Vl.ga.apply(Vl, arguments)
      : Y2
      ? !1
      : window.ga
      ? (t = window).ga.apply(t, arguments)
      : re(
          "ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"
        );
  };
function rr(e) {
  return J_(e, q2, Q2);
}
function zu(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = n[0];
  if (typeof Ai == "function") {
    if (typeof i != "string") {
      re("ga command must be a string");
      return;
    }
    (X2 || !Array.isArray(e)) && Ai.apply(void 0, n),
      Array.isArray(e) &&
        e.forEach(function (o) {
          Ai.apply(
            void 0,
            aN(["".concat(o, ".").concat(i)].concat(n.slice(1)))
          );
        });
  }
}
function by(e, t) {
  if (!e) {
    re("gaTrackingID is required in initialize()");
    return;
  }
  (t &&
    (t.debug && t.debug === !0 && (Ut = !0),
    t.titleCase === !1 && (q2 = !1),
    t.redactEmail === !1 && (Q2 = !1),
    t.useExistingGa)) ||
    (t && t.gaOptions ? Ai("create", e, t.gaOptions) : Ai("create", e, "auto"));
}
function J2(e, t) {
  return (
    Array.isArray(e)
      ? e.forEach(function (n) {
          if (ga(n) !== "object") {
            re("All configs must be an object");
            return;
          }
          by(n.trackingId, n);
        })
      : by(e, t),
    !0
  );
}
function Z2(e, t) {
  if (t && t.testMode === !0) K2 = !0;
  else {
    if (Y2) return;
    (!t || t.standardImplementation !== !0) && eN(t);
  }
  (X2 =
    t && typeof t.alwaysSendToDefaultTracker == "boolean"
      ? t.alwaysSendToDefaultTracker
      : !0),
    J2(e, t);
}
function et() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return (
    t.length > 0 &&
      (Ai.apply(void 0, t),
      Ut &&
        (Me("called ga('arguments');"),
        Me("with arguments: ".concat(JSON.stringify(t))))),
    window.ga
  );
}
function eb(e, t) {
  if (!e) {
    re("`fieldsObject` is required in .set()");
    return;
  }
  if (ga(e) !== "object") {
    re("Expected `fieldsObject` arg to be an Object");
    return;
  }
  Object.keys(e).length === 0 && re("empty `fieldsObject` given to .set()"),
    zu(t, "set", e),
    Ut &&
      (Me("called ga('set', fieldsObject);"),
      Me("with fieldsObject: ".concat(JSON.stringify(e))));
}
function Xi(e, t) {
  zu(t, "send", e),
    Ut &&
      (Me("called ga('send', fieldObject);"),
      Me("with fieldObject: ".concat(JSON.stringify(e))),
      Me("with trackers: ".concat(JSON.stringify(t))));
}
function tb(e, t, n) {
  if (!e) {
    re("path is required in .pageview()");
    return;
  }
  var r = Fu(e);
  if (r === "") {
    re("path cannot be an empty string in .pageview()");
    return;
  }
  var i = {};
  if (
    (n && (i.title = n),
    typeof et == "function" &&
      (zu(t, "send", iN({ hitType: "pageview", page: r }, i)), Ut))
  ) {
    Me("called ga('send', 'pageview', path);");
    var o = "";
    n && (o = " and title: ".concat(n)), Me("with path: ".concat(r).concat(o));
  }
}
function nb(e, t) {
  if (!e) {
    re("modalName is required in .modalview(modalName)");
    return;
  }
  var n = Z_(Fu(e));
  if (n === "") {
    re("modalName cannot be an empty string or a single / in .modalview()");
    return;
  }
  if (typeof et == "function") {
    var r = "/modal/".concat(n);
    zu(t, "send", "pageview", r),
      Ut &&
        (Me("called ga('send', 'pageview', path);"),
        Me("with path: ".concat(r)));
  }
}
function rb() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.category,
    n = e.variable,
    r = e.value,
    i = e.label,
    o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  if (typeof et == "function") {
    if (!t || !n || typeof r != "number") {
      re(
        "args.category, args.variable AND args.value are required in timing() AND args.value has to be a number"
      );
      return;
    }
    var a = {
      hitType: "timing",
      timingCategory: rr(t),
      timingVar: rr(n),
      timingValue: r,
    };
    i && (a.timingLabel = rr(i)), Xi(a, o);
  }
}
function ib() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.category,
    n = e.action,
    r = e.label,
    i = e.value,
    o = e.nonInteraction,
    a = e.transport,
    s = nN(e, tN),
    l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  if (typeof et == "function") {
    if (!t || !n) {
      re("args.category AND args.action are required in event()");
      return;
    }
    var u = { hitType: "event", eventCategory: rr(t), eventAction: rr(n) };
    r && (u.eventLabel = rr(r)),
      typeof i < "u" &&
        (typeof i != "number"
          ? re("Expected `args.value` arg to be a Number.")
          : (u.eventValue = i)),
      typeof o < "u" &&
        (typeof o != "boolean"
          ? re("`args.nonInteraction` must be a boolean.")
          : (u.nonInteraction = o)),
      typeof a < "u" &&
        (typeof a != "string"
          ? re("`args.transport` must be a string.")
          : (["beacon", "xhr", "image"].indexOf(a) === -1 &&
              re(
                "`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"
              ),
            (u.transport = a))),
      Object.keys(s)
        .filter(function (c) {
          return c.substr(0, 9) === "dimension";
        })
        .forEach(function (c) {
          u[c] = s[c];
        }),
      Object.keys(s)
        .filter(function (c) {
          return c.substr(0, 6) === "metric";
        })
        .forEach(function (c) {
          u[c] = s[c];
        }),
      Xi(u, l);
  }
}
function ob(e, t) {
  var n = e.description,
    r = e.fatal;
  if (typeof et == "function") {
    var i = { hitType: "exception" };
    n && (i.exDescription = rr(n)),
      typeof r < "u" &&
        (typeof r != "boolean"
          ? re("`args.fatal` must be a boolean.")
          : (i.exFatal = r)),
      Xi(i, t);
  }
}
var ab = {
  require: function (t, n, r) {
    if (typeof et == "function") {
      if (!t) {
        re("`name` is required in .require()");
        return;
      }
      var i = Fu(t);
      if (i === "") {
        re("`name` cannot be an empty string in .require()");
        return;
      }
      var o = r ? "".concat(r, ".require") : "require";
      if (n) {
        if (ga(n) !== "object") {
          re("Expected `options` arg to be an Object");
          return;
        }
        Object.keys(n).length === 0 &&
          re("Empty `options` given to .require()"),
          et(o, i, n),
          Ut &&
            Me(
              "called ga('require', '"
                .concat(i, "', ")
                .concat(JSON.stringify(n))
            );
      } else et(o, i), Ut && Me("called ga('require', '".concat(i, "');"));
    }
  },
  execute: function (t, n) {
    for (
      var r, i, o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), s = 2;
      s < o;
      s++
    )
      a[s - 2] = arguments[s];
    if (
      (a.length === 1 ? (r = a[0]) : ((i = a[0]), (r = a[1])),
      typeof et == "function")
    )
      if (typeof t != "string") re("Expected `pluginName` arg to be a String.");
      else if (typeof n != "string")
        re("Expected `action` arg to be a String.");
      else {
        var l = "".concat(t, ":").concat(n);
        (r = r || null),
          i && r
            ? (et(l, i, r),
              Ut &&
                (Me("called ga('".concat(l, "');")),
                Me(
                  'actionType: "'
                    .concat(i, '" with payload: ')
                    .concat(JSON.stringify(r))
                )))
            : r
            ? (et(l, r),
              Ut &&
                (Me("called ga('".concat(l, "');")),
                Me("with payload: ".concat(JSON.stringify(r)))))
            : (et(l), Ut && Me("called ga('".concat(l, "');")));
      }
  },
};
function Fm(e, t, n) {
  if (typeof t != "function") {
    re("hitCallback function is required");
    return;
  }
  if (typeof et == "function") {
    if (!e || !e.label) {
      re("args.label is required in outboundLink()");
      return;
    }
    var r = {
        hitType: "event",
        eventCategory: "Outbound",
        eventAction: "Click",
        eventLabel: rr(e.label),
      },
      i = !1,
      o = function () {
        (i = !0), t();
      },
      a = setTimeout(o, 250),
      s = function () {
        clearTimeout(a), i || t();
      };
    (r.hitCallback = s), Xi(r, n);
  } else setTimeout(t, 0);
}
var fN = Vl;
const dN = {
    initialize: Z2,
    ga: et,
    set: eb,
    send: Xi,
    pageview: tb,
    modalview: nb,
    timing: rb,
    event: ib,
    exception: ob,
    plugin: ab,
    outboundLink: Fm,
    testModeAPI: Vl,
  },
  pN = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        addTrackers: J2,
        default: dN,
        event: ib,
        exception: ob,
        ga: et,
        initialize: Z2,
        modalview: nb,
        outboundLink: Fm,
        pageview: tb,
        plugin: ab,
        send: Xi,
        set: eb,
        testModeAPI: fN,
        timing: rb,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function Sy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ky(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sy(Object(n), !0).forEach(function (r) {
          mN(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Sy(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function mN(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
zr.origTrackLink = zr.trackLink;
zr.trackLink = Fm;
var hN = zr;
const $u = ky(ky({}, pN), {}, { OutboundLink: hN });
async function ft(e, t, n) {
  var a;
  let r = {}.REACT_APP_API_USER + "/" + e;
  const i = new FormData();
  n.filter &&
    typeof n.filter != "string" &&
    (n.filter = JSON.stringify(n.filter)),
    n.outils &&
      typeof n.outils != "string" &&
      n.outils.map((s, l) => {
        n.outils[l] = JSON.stringify(s);
      }),
    n &&
      (((a = n.coverimage) != null && a.size) || delete n.coverimage,
      t === "GET" &&
        ((r = r + "?"),
        Object.keys(n).forEach((s) => {
          r = r + "&" + s + "=" + n[s];
        })),
      Object.keys(n).forEach((s) => {
        if (Array.isArray(n[s]))
          for (var l = 0; l < n[s].length; l++) i.append(s + "[]", n[s][l]);
        else i.append(s, n[s]);
      }));
  let o = {};
  return (
    t !== "GET" && (o = { body: i }),
    await fetch(r, { method: t, credentials: "include", ...o })
      .then((s) => s.json())
      .then(
        (s) => ({ res: !0, data: s, message: "success" }),
        (s) => (
          console.log(s), { res: !1, data: !1, message: s.message, error: s }
        )
      )
  );
}
const vN = () => {
    const e = Ce(),
      t = H(M_),
      n = H($2),
      [r, i] = x.useState(""),
      [o, a] = x.useState(
        "Vous ne pouvez vous connecter qu'avec les identifiants que je vous ais envoyé par mail. Si non, tant pis."
      ),
      [s, l] = x.useState(""),
      u = H(L_),
      c = x.createRef();
    x.useEffect(() => {
      c && c.current && c.current.focus();
    }, [t]);
    async function d(f) {
      f.preventDefault(), e(U2());
      let m = await ft("login", "POST", { email: r, password: s });
      m && (e(B2(m.data)), e(py()), $u.set({ userMail: r }));
    }
    return p.jsxs(p.Fragment, {
      children: [
        t &&
          p.jsxs("form", {
            className: "container-login",
            onSubmit: (f) => d(f),
            children: [
              p.jsx("p", { children: o }),
              p.jsx("p", { children: u }),
              p.jsxs("div", {
                className: "container-input",
                children: [
                  p.jsx("label", { htmlFor: "identifiant", children: "Email" }),
                  p.jsx("input", {
                    type: "text",
                    name: "identifiant",
                    id: "identifiant",
                    value: r,
                    onChange: (f) => i(f.target.value),
                    ref: c,
                    autoComplete: "off",
                  }),
                  p.jsx("div", {
                    className: "ico",
                    children: p.jsx(se, { icon: lP }),
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "container-input",
                children: [
                  p.jsx("label", {
                    htmlFor: "identifiant",
                    children: "Password",
                  }),
                  p.jsx("input", {
                    type: "password",
                    name: "password",
                    id: "password",
                    value: s,
                    onChange: (f) => l(f.target.value),
                  }),
                  p.jsx("div", {
                    className: "ico",
                    children: p.jsx(se, { icon: hP }),
                  }),
                ],
              }),
              n
                ? p.jsx("div", { id: "submitLogin", children: p.jsx(H2, {}) })
                : p.jsx(Z.input, {
                    id: "submitLogin",
                    type: "submit",
                    value: "Log in",
                    whileTap: { scale: 0.9 },
                  }),
            ],
          }),
        t &&
          p.jsx("div", { className: "backLoginForm", onClick: (f) => e(py()) }),
      ],
    });
  },
  gN = "UA-207358357-1",
  yN = (e) => (n, r) => {
    $u.event({ category: e, action: n, label: r });
  },
  xr = {
    opened: !1,
    title: "",
    text: "Êtes-vous sûr ?",
    btn_accept: "Je confirme",
    btn_cancel: "Annuler",
    response: null,
    accept: !1,
  },
  sb = Gr({
    name: "confirm",
    initialState: xr,
    reducers: {
      openConfirm: (e) => {
        e.opened = !0;
      },
      closeConfirm: (e) => {
        e.opened = !1;
      },
      chooseConfirm: (e, t) => {
        (e.response = t.payload ?? !0), (e.opened = !1);
      },
      displayConfirm: (e, t) => {
        (e.title = t.payload.title ?? xr.title),
          (e.text = t.payload.text ?? xr.text),
          (e.btn_accept = t.payload.btn_accept ?? xr.btn_accept),
          (e.btn_cancel = t.payload.btn_cancel ?? xr.btn_cancel),
          (e.accept = t.payload.accept),
          (e.opened = !0);
      },
      restart: (e) => {
        (e.response = xr.response), (e.accept = xr.accept);
      },
    },
  }),
  {
    openConfirm: qR,
    closeConfirm: wN,
    chooseConfirm: Ey,
    displayConfirm: lb,
  } = sb.actions,
  xN = (e) => e.confirm.opened,
  bN = (e) => e.confirm.title,
  SN = (e) => e.confirm.text,
  kN = (e) => e.confirm.btn_accept,
  EN = (e) => e.confirm.btn_cancel,
  CN = (e) => e.confirm.accept,
  PN = sb.reducer,
  TN = ({ index: e, img: t, deleting: n }) => {
    const [r, i] = x.useState({}.REACT_APP_API_USER + t.path),
      [o, a] = x.useState(!1),
      [s, l] = x.useState(null),
      u = x.useRef(null),
      c = Ce();
    function d(v) {
      s == null || s.click();
    }
    function f(v) {
      if (v.target.files) {
        var b = new FileReader();
        (b.onloadstart = function (y) {
          a(!0);
        }),
          (b.onloadend = function (y) {
            a(!1), h();
          }),
          b.readAsArrayBuffer(v.target.files[0]);
        var w = URL.createObjectURL(v.target.files[0]);
        i(w);
      }
    }
    async function m() {
      c(
        lb({
          text: "Supprimer cette image ?",
          btn_accept: "Supprimer",
          accept: () => {
            h(), n && n();
          },
        })
      );
    }
    async function h() {
      t.id && (await ft("images/" + t.id, "DELETE", {}));
    }
    return (
      x.useEffect(() => {
        u != null && u.current && l(u.current);
      }, [u, u.current]),
      p.jsxs("div", {
        className: "container-image",
        children: [
          o && p.jsx("div", { className: "loader" }),
          p.jsx("img", { src: r, alt: "", onClick: (v) => d() }),
          p.jsx("input", {
            type: "file",
            name: "image" + e,
            id: "image" + e,
            ref: u,
            onChange: (v) => f(v),
          }),
          p.jsx("div", {
            className: "deleteItem",
            onClick: (v) => m(),
            children: p.jsx(se, { icon: Wp }),
          }),
        ],
      })
    );
  },
  ub = ({ filter: e = { with_project: !1 } }) => {
    const [t, n] = x.useState([]);
    return (
      x.useEffect(() => {
        async function r() {
          const i = await ft("outils", "GET", { filter: e });
          i.res ? n(i.data) : n([]);
        }
        r();
      }, []),
      { outils: t }
    );
  },
  jN = ({ changeSelectedTools: e, usedTools: t }) => {
    const { outils: n } = ub({});
    function r(i) {
      if (t) {
        let o = !1;
        for (const a of t) a.id === i && (o = !0);
        return o;
      } else return !1;
    }
    return p.jsx("div", {
      className: "container-select-tool",
      children: n.map((i, o) =>
        p.jsx(
          ON,
          { outil: i, changeSelectedTools: e, defaultSelect: r(i.id) },
          o
        )
      ),
    });
  },
  ON = ({ outil: e, changeSelectedTools: t, defaultSelect: n }) => {
    const [r, i] = x.useState(!1);
    x.useEffect(() => {
      i(n);
    }, [n]);
    function o() {
      t(r ? { supp: e } : { add: e }), i((a) => !a);
    }
    return p.jsx("div", {
      className: "contain-tool" + (r ? " select" : ""),
      onClick: o,
      children: p.jsx("img", {
        src:
          {}.REACT_APP_API_USER +
          "/uploads/" +
          ((e == null ? void 0 : e.icon) ?? ""),
        alt: e.name,
      }),
    });
  },
  AN = () => {
    const e = sn(),
      t = Ca(),
      [n, r] = x.useState(""),
      [i, o] = x.useState(!1),
      [a, s] = x.useState(""),
      [l, u] = x.useState(!1),
      [c, d] = x.useState([]),
      [f, m] = x.useState(0),
      [h, v] = x.useState([]);
    x.useEffect(() => {
      const k = async () => {
        const E = await ft("projects/" + t.state.id, "GET", {});
        o(E.data[0]), s({}.REACT_APP_API_USER + E.data[0].main_img);
        let C = [...c];
        for (let T = 0; T < E.data[0].images.length; T++) C.push(T), m(T);
        d(C), v(E.data[0].outils);
      };
      t.state && t.state.id && k();
    }, [t.state]);
    async function b(k) {
      k.preventDefault(),
        r(""),
        document.querySelectorAll("label").forEach(($) => {
          $.classList.remove("error");
        });
      const C = new FormData(k.target),
        T = {};
      for (var [L, N] of C) T[L] = N ?? "false";
      T.is_brouillon || (T.is_brouillon = "false"),
        T.in_homepage || (T.in_homepage = "false"),
        (T.outils = h);
      let W;
      i
        ? (W = await ft("projects/" + i.id, "PUT", T))
        : (W = await ft("projects/", "POST", T)),
        W.data.errors
          ? (r(W.data.errors[0].title),
            W.data.errors.forEach(function ($) {
              let Y = document.querySelector(
                'label[for="' + $.source.pointer + '"]'
              );
              Y == null || Y.classList.add("error");
            }))
          : W && !W.res
          ? r("Une erreur est survenue lors de l'enregistrement : " + W.message)
          : e("/");
    }
    async function w(k) {
      if (k.target.files) {
        var E = new FileReader();
        (E.onloadstart = function (T) {
          u(!0);
        }),
          (E.onloadend = function (T) {
            u(!1);
          }),
          E.readAsArrayBuffer(k.target.files[0]);
        var C = URL.createObjectURL(k.target.files[0]);
        s(C);
      }
    }
    async function y() {
      if (c.length < 10) {
        let k = [...c];
        k.push(f + 1),
          d(k),
          m((E) => E + 1),
          setTimeout(() => {
            const E = document.querySelector("#image" + (f + 1));
            E && E.click();
          }, 100);
      }
    }
    async function g(k) {
      let E = [...c];
      (E = E.filter((C) => C !== k)), d(E);
    }
    async function S({ add: k, supp: E }) {
      let C = [...h];
      k && C.push(k), E && (C = C.filter((T) => T.id !== E.id)), v(C);
    }
    return p.jsxs("div", {
      className: "pageFormAdd otherpage",
      children: [
        p.jsxs("h2", {
          children: [
            p.jsx("span", { className: "accent", children: "Ajouter" }),
            p.jsx("br", {}),
            "un projet",
          ],
        }),
        p.jsxs("form", {
          action: "",
          onSubmit: (k) => b(k),
          children: [
            p.jsxs("label", {
              htmlFor: "title",
              children: [
                "Title *",
                p.jsx("input", {
                  type: "text",
                  name: "title",
                  id: "",
                  defaultValue: i ? i.title : "",
                }),
              ],
            }),
            p.jsxs("label", {
              htmlFor: "date",
              children: [
                "Date *",
                p.jsx("input", {
                  type: "text",
                  name: "date",
                  id: "",
                  defaultValue: i ? i.date : "",
                }),
              ],
            }),
            p.jsxs("label", {
              htmlFor: "type",
              children: [
                "Type *",
                p.jsx("input", {
                  type: "text",
                  name: "type",
                  id: "",
                  defaultValue: i ? i.type : "",
                }),
              ],
            }),
            p.jsxs("label", {
              htmlFor: "short_desc",
              children: [
                "Courte description *",
                p.jsx("input", {
                  type: "text",
                  name: "short_desc",
                  id: "",
                  defaultValue: i ? i.short_desc : "",
                }),
              ],
            }),
            p.jsxs("label", {
              htmlFor: "desc",
              children: [
                "Description *",
                p.jsx("textarea", {
                  name: "desc",
                  id: "",
                  defaultValue: i ? i.desc : "",
                }),
              ],
            }),
            p.jsxs("label", {
              htmlFor: "link",
              children: [
                "Lien vers le site",
                p.jsx("input", {
                  type: "text",
                  name: "link",
                  id: "",
                  defaultValue: i ? i.link : "",
                }),
              ],
            }),
            p.jsxs("label", {
              htmlFor: "in_homepage",
              className: "checbox-label",
              children: [
                "Sur la page d'accueil",
                p.jsx("input", {
                  type: "checkbox",
                  name: "in_homepage",
                  id: "",
                  defaultChecked: i.in_homepage,
                }),
              ],
            }),
            p.jsxs("label", {
              htmlFor: "is_brouillon",
              className: "checbox-label",
              children: [
                "Brouillon",
                p.jsx("input", {
                  type: "checkbox",
                  name: "is_brouillon",
                  id: "",
                  defaultChecked: i.is_brouillon,
                }),
              ],
            }),
            p.jsxs("label", {
              htmlFor: "outils",
              children: [
                "Outils utilisés",
                p.jsx(jN, { changeSelectedTools: S, usedTools: i.outils }),
              ],
            }),
            p.jsx("label", {
              htmlFor: "is_brouillon",
              children: "Image principale",
            }),
            p.jsxs("div", {
              className: "containermainimage",
              onClick: () => {
                const k = document.querySelector("#coverimage");
                k && k.click();
              },
              children: [
                l && p.jsx("div", { className: "loader" }),
                p.jsx("img", { src: a, alt: "" }),
                p.jsx("input", {
                  type: "file",
                  name: "coverimage",
                  id: "coverimage",
                  onChange: (k) => w(k),
                }),
              ],
            }),
            p.jsxs("div", {
              className: "container-images",
              children: [
                c.map((k, E) =>
                  p.jsx(
                    TN,
                    {
                      index: k,
                      img:
                        i != null && i.images && i != null && i.images[k]
                          ? i.images[k]
                          : "",
                      deleting: () => g(k),
                    },
                    k
                  )
                ),
                p.jsx("div", {
                  className: "add-img",
                  onClick: (k) => y(),
                  children: p.jsx(se, { icon: xP }),
                }),
              ],
            }),
            p.jsx("input", {
              type: "submit",
              value: i ? "Modifier" : "Ajouter",
            }),
            p.jsx("p", { className: "error-message", children: n }),
          ],
        }),
      ],
    });
  },
  _N = ({
    link_request: e,
    link_redirect: t,
    inputs: n,
    typeDataToSend: r,
    method: i,
    textSubmit: o,
  }) => {
    const a = sn(),
      [s, l] = x.useState("");
    async function u(c) {
      c.preventDefault(), l("");
      const d = new FormData(c.target);
      let f = {};
      for (var [m, h] of d) f[m] = h;
      let v = await ft(e, i, f);
      console.log(v),
        v.data.errors
          ? (l(v.data.errors[0].title),
            v.data.errors.forEach(function (b) {
              let w = document.querySelector(
                'input[name="' + b.source.pointer + '"]'
              );
              w == null || w.classList.add("error");
            }))
          : t && a("/" + t);
    }
    return p.jsxs("form", {
      action: "",
      onSubmit: (c) => u(c),
      children: [
        n.map((c, d) => {
          if (c.type === "text" || c.type === "email" || c.type === "password")
            return p.jsxs(
              "label",
              {
                htmlFor: c.name,
                children: [
                  c.label,
                  p.jsx("input", { type: c.type, name: c.name }),
                ],
              },
              d
            );
        }),
        p.jsx("div", { className: "message-error", children: s }),
        p.jsx("input", { type: "submit", value: o ?? "Envoyer" }),
      ],
    });
  },
  NN = [
    { name: "nom", label: "Nom", type: "text" },
    { name: "prenom", label: "Prénom", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Mot de passe", type: "password" },
    {
      name: "confirm_mdp",
      label: "Confirmez le mot de passe",
      type: "password",
    },
  ],
  MN = {
    nom: "string",
    prenom: "string",
    email: "string",
    password: "string",
    confirm_pass: "string",
  },
  RN = () =>
    p.jsxs("div", {
      className: "pageFormAdd otherpage",
      children: [
        p.jsxs("h2", {
          children: [
            "Ajouter un ",
            p.jsx("span", { className: "accent", children: "utilisateur" }),
          ],
        }),
        p.jsx(_N, {
          inputs: NN,
          link_request: "users/",
          method: "post",
          typeDataToSend: MN,
          textSubmit: "Ajouter",
        }),
      ],
    }),
  cb = () => {
    const [e, t] = x.useState(!1),
      n = Ce(),
      [r, i] = x.useState(null),
      [o, a] = x.useState(""),
      [s, l] = x.useState(""),
      [u, c] = x.useState(""),
      [d, f] = x.useState("");
    x.useEffect(() => {
      m();
    });
    async function m() {
      n(U2());
      let h = await ft("isConnect", "GET", {});
      if (h.data && h.data.user) {
        let v = h.data;
        n(B2(v.user)),
          t(!0),
          i(v.user.id),
          a(v.user.prenom),
          l(v.user.nom),
          c(v.user.prenom + " " + v.user.nom),
          f(v.user.email);
      } else n(W2()), t(!1);
    }
    return { isConnect: e, name: s, prenom: o, fullname: u, email: d, id: r };
  },
  LN = () => {
    const e = Ce();
    async function t() {
      return await fetch({}.REACT_APP_API_USER + "disconnect", {
        credentials: "include",
      })
        .then((n) => n.json())
        .then(
          (n) => (e(W2()), !0),
          (n) => (console.log(n), !1)
        );
    }
    return p.jsx("button", { onClick: (n) => t(), children: "Se déconnecter" });
  },
  zm = ({ params: e, refresh: t }) => {
    const [n, r] = x.useState([]);
    x.useEffect(() => {
      i();
    }, [t]);
    async function i() {
      const o = await ft("projects", "GET", e);
      console.log(o), o.res ? r(o.data) : r([]);
    }
    return { list: n };
  },
  $m = () => {
    const e = H(Vu),
      [t, n] = x.useState(!1);
    return (
      x.useEffect(() => {
        e.roles === "ADMIN" ? n(!0) : n(!1);
      }, [e]),
      { isAdmin: t }
    );
  },
  IN = () => {
    const [e, t] = x.useState(0),
      { list: n } = zm({ params: { filter: {} }, refresh: e }),
      [r, i] = x.useState(!1),
      [o, a] = x.useState(null),
      [s, l] = x.useState(null),
      { isAdmin: u } = $m(),
      c = sn();
    x.useEffect(() => {
      window.addEventListener("click", (h) => {
        h &&
          h.target instanceof Element &&
          h.target.className === "container-modal" &&
          f();
      }),
        window.addEventListener("keydown", (h) => {
          switch (h.key) {
            case "Escape":
              f();
              break;
          }
        });
    }, []);
    function d(h, v) {
      h && (i(!0), a(h), l(v));
    }
    function f() {
      i(!1), a(null), l(null);
    }
    function m() {
      t((h) => h + 1);
    }
    return p.jsx(p.Fragment, {
      children:
        u &&
        p.jsxs("section", {
          children: [
            p.jsx("h3", { children: "Projects" }),
            p.jsxs("table", {
              children: [
                p.jsx("thead", {
                  children: p.jsxs("tr", {
                    children: [
                      p.jsx("td", { children: "Nom du projet" }),
                      p.jsx("td", { children: "Type" }),
                      p.jsx("td", { children: "Date" }),
                      u &&
                        p.jsxs(p.Fragment, {
                          children: [
                            p.jsx("td", {
                              className: "littleRow",
                              children: "Brouillon",
                            }),
                            p.jsx("td", {
                              className: "littleRow",
                              children: "Homepage",
                            }),
                            p.jsx("td", { children: "Supprimer" }),
                          ],
                        }),
                    ],
                  }),
                }),
                p.jsx("tbody", {
                  children: n.map((h) =>
                    p.jsx(DN, { item: h, reloading: m, openModal: d }, h.id)
                  ),
                }),
              ],
            }),
            p.jsx("button", {
              onClick: (h) => c("/add"),
              children: "Ajouter un projet",
            }),
            p.jsx(VN, {
              open: r,
              closeModal: f,
              selectedItem: o,
              selectedKeyToModif: s,
              reloading: m,
            }),
          ],
        }),
    });
  },
  DN = ({ item: e, reloading: t, openModal: n }) => {
    const { isAdmin: r } = $m(),
      i = sn(),
      o = Ce();
    async function a() {
      r &&
        e != null &&
        o(
          lb({
            text: "Confirmez-vous de vouloir supprimer '" + e.title + "'",
            btn_accept: "Supprimer",
            accept: async () => {
              await ft("projects/" + e.id, "delete", {}), t();
            },
          })
        );
    }
    async function s() {
      r && (await ft("projects/" + e.id, "put", e), t());
    }
    return p.jsxs("tr", {
      children: [
        p.jsx("td", {
          onClick: (l) => i("/add", { state: { id: e.id } }),
          children: e.title,
        }),
        p.jsx("td", {
          onClick: (l) => i("/add", { state: { id: e.id } }),
          children: e.type,
        }),
        p.jsx("td", {
          onClick: (l) => i("/add", { state: { id: e.id } }),
          children: e.date,
        }),
        r &&
          p.jsxs(p.Fragment, {
            children: [
              p.jsx("td", {
                className: "littleRow",
                children: p.jsx("input", {
                  type: "checkbox",
                  name: "is_brouillon",
                  id: "",
                  checked: e == null ? void 0 : e.is_brouillon,
                  onChange: (l) => {
                    (e.is_brouillon = !e.is_brouillon), s();
                  },
                }),
              }),
              p.jsx("td", {
                className: "littleRow",
                children: p.jsx("input", {
                  type: "checkbox",
                  name: "in_homepage",
                  id: "",
                  checked: e == null ? void 0 : e.in_homepage,
                  onChange: (l) => {
                    (e.in_homepage = !e.in_homepage), s();
                  },
                }),
              }),
              p.jsx("td", {
                className: "littleRow",
                onClick: (l) => a(),
                children: p.jsx(se, { icon: gP }),
              }),
            ],
          }),
      ],
    });
  },
  VN = ({
    open: e,
    closeModal: t,
    selectedItem: n,
    selectedKeyToModif: r,
    reloading: i,
  }) => {
    const [o, a] = x.useState(),
      s = Re.useRef();
    x.useEffect(() => {
      if (n && r) {
        const u = n[r];
        u !== !0 && u !== !1 && a(u), s.current.focus();
      }
    }, [n]);
    async function l(u) {
      u.preventDefault(),
        r !== null &&
          n !== null &&
          o !== void 0 &&
          ((n[r] = o), await ft("projects/" + n.id, "PUT", n), i(), t());
    }
    return p.jsx(p.Fragment, {
      children:
        e &&
        p.jsx("div", {
          className: "container-modal",
          children: p.jsxs("form", {
            action: "",
            onSubmit: (u) => l(u),
            children: [
              p.jsx("label", { htmlFor: "modal", children: r }),
              p.jsx("textarea", {
                ref: s,
                name: "modal",
                id: "",
                value: o ?? "",
                onChange: (u) => a(u.target.value),
              }),
              p.jsx("input", { type: "submit", value: ">" }),
            ],
          }),
        }),
    });
  },
  FN = ({ params: e, refresh: t }) => {
    const [n, r] = x.useState([]);
    x.useEffect(() => {
      i();
    }, [t]);
    async function i() {
      const o = await ft("users", "GET", e);
      o.res ? r(o.data) : r([]);
    }
    return { listUsers: n };
  },
  Cy = {
    nom: { title: "Nom" },
    prenom: { title: "Prénom" },
    email: { title: "Email" },
    roles: { title: "Rôles" },
  },
  zN = () => {
    const [e, t] = x.useState(0),
      { listUsers: n } = FN({ params: {}, refresh: e }),
      { isAdmin: r } = $m(),
      i = sn();
    return p.jsx(p.Fragment, {
      children:
        r &&
        p.jsxs("section", {
          children: [
            p.jsx("h3", { children: "Utilisateurs" }),
            p.jsxs("table", {
              children: [
                p.jsx("thead", {
                  children: p.jsx("tr", {
                    children: Object.keys(Cy).map((o, a) =>
                      p.jsx("td", { children: o }, a)
                    ),
                  }),
                }),
                p.jsx("tbody", {
                  children: n.map((o, a) =>
                    p.jsx(
                      "tr",
                      {
                        children: Object.keys(Cy).map((s, l) =>
                          p.jsx("td", { children: o[s] }, l)
                        ),
                      },
                      a
                    )
                  ),
                }),
              ],
            }),
            p.jsx("button", {
              onClick: (o) => i("/" + $r[6].link),
              children: "Ajouter un utilisateur",
            }),
          ],
        }),
    });
  },
  $N = () => {
    const { name: e, prenom: t, email: n, id: r } = cb(),
      [i, o] = x.useState(e),
      [a, s] = x.useState(t),
      [l, u] = x.useState(n),
      [c, d] = x.useState(""),
      [f, m] = x.useState(e),
      [h, v] = x.useState(t),
      [b, w] = x.useState(n),
      [y, g] = x.useState(""),
      [S, k] = x.useState([]),
      [E, C] = x.useState([]),
      [T, L] = x.useState("");
    x.useEffect(() => {
      o(e), s(t), u(n), m(e), v(t), w(n);
    }, [e, t, n]);
    function N($) {
      switch ((C([]), k([]), $.currentTarget.name)) {
        case "name":
          o($.currentTarget.value);
          break;
        case "prenom":
          s($.currentTarget.value);
          break;
        case "email":
          u($.currentTarget.value);
          break;
        case "password":
          d($.currentTarget.value);
          break;
      }
    }
    async function W($) {
      L(""), C([]);
      let Y = {},
        je = [...S];
      switch ((je.push($), k(je), $)) {
        case "name":
          Y = { nom: i };
          break;
        case "prenom":
          Y = { prenom: a };
          break;
        case "email":
          Y = { email: l };
          break;
        case "password":
          let J = prompt("Veuillez confirmer le nouveau mot de passe");
          Y = { password: c, confirm_mdp: J };
          break;
      }
      let Ue = await ft("users/" + r, "PUT", Y);
      if (Ue.data.errors) {
        let J = [...E];
        J.push($), C(J), L(Ue.data.errors[0].title);
      } else {
        switch ($) {
          case "name":
            m(i);
            break;
          case "prenom":
            v(a);
            break;
          case "email":
            w(l);
            break;
        }
        k([]);
      }
    }
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx(mn, { children: p.jsx("title", { children: "Dashboard" }) }),
        p.jsxs("div", {
          className: "dashboard-page otherpage",
          children: [
            p.jsx("h2", { className: "accent", children: "Dashboard." }),
            p.jsx("p", {
              children:
                "Ici vous trouverez les informations relatives à votre compte personnel.",
            }),
            p.jsxs("div", {
              className: "container-infos",
              children: [
                p.jsxs("div", {
                  className: "info",
                  children: [
                    p.jsx("div", { className: "label", children: "Nom" }),
                    p.jsxs("div", {
                      className: "contain-label",
                      children: [
                        p.jsx("input", {
                          type: "text",
                          name: "name",
                          value: i,
                          onChange: ($) => N($),
                        }),
                        p.jsx(ws, {
                          valueBase: i,
                          valueLast: f,
                          namevalue: "name",
                          functionClick: W,
                          loading: S.includes("name"),
                          error: E.includes("name"),
                        }),
                      ],
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className: "info",
                  children: [
                    p.jsx("div", { className: "label", children: "Prénom" }),
                    p.jsxs("div", {
                      className: "contain-label",
                      children: [
                        p.jsx("input", {
                          type: "text",
                          name: "prenom",
                          value: a,
                          onChange: ($) => N($),
                        }),
                        p.jsx(ws, {
                          valueBase: a,
                          valueLast: h,
                          namevalue: "prenom",
                          functionClick: W,
                          loading: S.includes("prenom"),
                          error: E.includes("prenom"),
                        }),
                      ],
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className: "info",
                  children: [
                    p.jsx("div", { className: "label", children: "Email" }),
                    p.jsxs("div", {
                      className: "contain-label",
                      children: [
                        p.jsx("input", {
                          type: "email",
                          name: "email",
                          value: l,
                          onChange: ($) => N($),
                        }),
                        p.jsx(ws, {
                          valueBase: l,
                          valueLast: b,
                          namevalue: "email",
                          functionClick: W,
                          loading: S.includes("email"),
                          error: E.includes("email"),
                        }),
                      ],
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className: "info",
                  children: [
                    p.jsx("div", {
                      className: "label",
                      children: "Mot de passe",
                    }),
                    p.jsxs("div", {
                      className: "contain-label",
                      children: [
                        p.jsx("input", {
                          type: "password",
                          name: "password",
                          value: c,
                          onChange: ($) => N($),
                        }),
                        p.jsx(ws, {
                          valueBase: c,
                          valueLast: y,
                          namevalue: "password",
                          functionClick: W,
                          loading: S.includes("password"),
                          error: E.includes("password"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            p.jsxs("p", {
              className: "message-error",
              children: [
                T !== "" && p.jsx(se, { icon: EP }),
                p.jsx("span", { children: T }),
              ],
            }),
            p.jsx(IN, {}),
            p.jsx(zN, {}),
            p.jsx(LN, {}),
          ],
        }),
      ],
    });
  },
  ws = ({
    valueBase: e,
    valueLast: t,
    namevalue: n,
    functionClick: r,
    loading: i,
    error: o,
  }) =>
    p.jsx(kn, {
      initial: !1,
      children:
        e !== t &&
        p.jsx(Z.div, {
          className: "btn-validation " + (o ? "error" : ""),
          onClick: (a) => r(n),
          initial: { y: 10, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { x: 50, opacity: 0 },
          children: o
            ? p.jsx(se, { icon: kw })
            : p.jsx(se, { icon: i ? bP : SP }),
        }),
    }),
  UN = () =>
    p.jsxs(p.Fragment, {
      children: [
        p.jsx(mn, { children: p.jsx("title", { children: "Contacts" }) }),
        p.jsxs("div", {
          className: "contactpage otherpage",
          children: [
            p.jsx("h2", { className: "accent", children: "Contacts." }),
            p.jsx("p", {
              children:
                "Si vous voulez me contacter, voici quelques moyens de le faire. Vous pouvez aussi essayer de tracer des symboles sur le sol, allumer des bougies et les disposer en cercle tout autours puis vous placer au centre en psalmodiant des mots alambiqués.",
            }),
            p.jsxs("ul", {
              children: [
                p.jsx("li", {
                  children: p.jsxs("a", {
                    href: "mailto:" + {}.REACT_APP_AUTHOR_EMAIL,
                    children: [
                      p.jsx(se, { icon: Sw }),
                      p.jsx("span", { children: {}.REACT_APP_AUTHOR_EMAIL }),
                    ],
                  }),
                }),
                p.jsx("li", {
                  children: p.jsxs("a", {
                    href: "tel:" + {}.REACT_APP_AUTHOR_TELEPHONE,
                    children: [
                      p.jsx(se, { icon: vP }),
                      p.jsx("span", {
                        children: {}.REACT_APP_AUTHOR_TELEPHONE,
                      }),
                    ],
                  }),
                }),
                p.jsx("li", {
                  children: p.jsxs("a", {
                    href: "https://github.com/walterlamel?tab=repositories",
                    target: "_blanck",
                    children: [
                      p.jsx("img", {
                        src: {}.REACT_APP_API_USER + "/uploads/github.svg",
                        alt: "github",
                      }),
                      p.jsx("span", { children: "Mon Github" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  BN = ({ name: e, link: t, color: n = "grey" }) =>
    p.jsx("a", {
      href: t,
      children: p.jsxs("li", {
        className: "game-card",
        style: { backgroundColor: n },
        children: [p.jsx("div", { className: "reflect" }), e],
      }),
    }),
  Um = ({ children: e, classContain: t, gameName: n, desc: r }) =>
    p.jsxs("div", {
      className: "windowGame " + n,
      children: [
        p.jsxs("div", {
          className: "containName",
          children: [
            p.jsx("div", { className: "surcouche", children: "Game" }),
            p.jsx("h2", { children: n }),
            p.jsx("div", {
              className: "descript-game",
              children: p.jsx("p", { children: r }),
            }),
          ],
        }),
        p.jsx("div", { className: "container-window-game " + t, children: e }),
      ],
    }),
  WN = { normal: { opacity: 1 }, clicked: { opacity: 0.3 } },
  HN = ({ clickOnLetter: e, lettersClicked: t }) => {
    const n = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      r = (o) => {
        i(o) || e(o);
      },
      i = (o) => t.find((a) => o === a);
    return p.jsx("div", {
      className: "keyboard-hangman",
      children: n.map((o, a) =>
        p.jsx(
          Z.div,
          {
            className: "keybard-letter",
            onClick: () => r(o),
            animate: i(o) ? "clicked" : "normal",
            transition: { duration: 0.2 },
            variants: WN,
            whileTap: { scale: 0.95 },
            children: o,
          },
          a
        )
      ),
    });
  },
  GN = ({ wordsToFind: e, lettersFind: t }) => {
    const n = (r) => (r ? r.split("") : []);
    return p.jsx("div", {
      className: "unknownWord-hangman",
      children: Object.keys(e).map((r, i) =>
        p.jsx("div", {
          className: "word",
          children: n(e[r].word).map((o, a) =>
            p.jsx(
              "div",
              {
                className: "letter",
                children: t.find((s) => s === o) ? o : "_",
              },
              a
            )
          ),
        })
      ),
    });
  },
  YN = {
    hidden: { opacity: [1, 1, 0], scale: [1, 5, 0], rotate: [0, 0, -100] },
    visible: { opacity: 1, scale: 1, rotate: 0 },
  },
  qN = ({ life: e }) =>
    p.jsx("div", {
      className: "lifeCounter-hangman",
      children: p.jsx(kn, {
        children: Array(e < 0 ? 0 : e)
          .fill(1)
          .map((t, n) =>
            p.jsx(
              Z.div,
              {
                variants: YN,
                initial: "hidden",
                animate: "visible",
                exit: "hidden",
                children: p.jsx(se, { icon: pP }),
              },
              n
            )
          ),
      }),
    }),
  po = {
    normal: { life: 7, word: 1, name: "Simple" },
    hard: { life: 2, word: 1, name: "Hard" },
    group: { life: 3, word: 4, name: "Groupe de mots" },
  },
  KN = () => {
    const [e, t] = x.useState("normal"),
      [n, r] = x.useState([]),
      [i, o] = x.useState([]),
      [a, s] = x.useState([]),
      [l, u] = x.useState(po[e].life),
      [c, d] = x.useState(0),
      [f, m] = x.useState(!1),
      [h, v] = x.useState(!1),
      b = async () => {
        fetch(`https://trouve-mot.fr/api/random/${po[e].word}`)
          .then((E) => E.json())
          .then((E) => {
            let C = E.map((T) => ({
              word: w(T.name),
              wordSplit: w(T.name).split(""),
              lettersToFind: w(T.name),
            }));
            r(C);
          });
      };
    x.useEffect(() => {
      k();
    }, []);
    const w = (E) =>
        E.normalize("NFD")
          .replace(/\p{Diacritic}/gu, "")
          .toUpperCase(),
      y = () => {
        l <= 0 && m(!0);
      },
      g = (E) => {
        if (l > 0) {
          let C = 0;
          E.forEach((T) => {
            T.lettersToFind.length === 0 && C++;
          }),
            C === n.length && (v(!0), d(c + 1));
        }
      },
      S = (E) => {
        if (n) {
          s([...a, E]);
          let C,
            T = [...n];
          (T = n.map(
            (L) => (
              C === void 0 && (C = L.wordSplit.find((N) => N === E)),
              { ...L, lettersToFind: L.lettersToFind.replaceAll(E, "") }
            )
          )),
            C ? o([...i, E]) : u(l - 1),
            y(),
            g(T),
            r(T);
        }
      },
      k = () => {
        o([]), s([]), u(po[e].life), m(!1), v(!1), b();
      };
    return (
      x.useEffect(() => {
        k();
      }, [e]),
      p.jsxs(Um, {
        classContain: "game-hangman",
        gameName: fr[2].name,
        desc: fr[2].desc,
        children: [
          p.jsxs(kn, {
            children: [
              f &&
                p.jsxs(Z.div, {
                  className: "screen-loose screen",
                  initial: { opacity: 1, scale: 0 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0 },
                  children: [
                    p.jsx("h3", { children: "Perdu !" }),
                    p.jsxs("p", {
                      children: [
                        "la réponse était ",
                        p.jsx("br", {}),
                        " ",
                        Object.keys(n).map((E, C) =>
                          p.jsx("span", { children: n[E].word }, C)
                        ),
                      ],
                    }),
                    p.jsx(Z.button, {
                      onClick: () => k(),
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      children: "Play Again",
                    }),
                  ],
                }),
              h &&
                p.jsxs(Z.div, {
                  className: "screen-win screen",
                  initial: { opacity: 1, scale: 0 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0 },
                  children: [
                    p.jsx("h3", { children: "Gagné !" }),
                    p.jsxs("p", {
                      children: ["Vous enchainez ", c, " victoires !"],
                    }),
                    p.jsx(Z.button, {
                      onClick: () => k(),
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      children: "Play Again",
                    }),
                  ],
                }),
            ],
          }),
          p.jsx(GN, { wordsToFind: n, lettersFind: i }),
          p.jsx(qN, { life: l }),
          p.jsx(HN, { lettersClicked: a, clickOnLetter: S }),
          p.jsxs("div", {
            className: "selector-variant",
            children: [
              p.jsx("p", { children: "Mode de jeu : " }),
              Object.keys(po).map((E, C) =>
                p.jsx(
                  "div",
                  {
                    onClick: () => t(E),
                    "data-selected": E === e,
                    children: po[E].name,
                  },
                  C
                )
              ),
            ],
          }),
        ],
      })
    );
  },
  Fl = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  XN = {
    statut: "player1",
    loading: !1,
    lastwinner: 0,
    player1Point: 0,
    player2Point: 0,
    grille: Fl,
    firstPlayerForTurn: 1,
  },
  QN = {
    player1: { name: "Poo" },
    player2: { name: "Bomber" },
    "": { name: "" },
  },
  fb = Gr({
    name: "morpion",
    initialState: XN,
    reducers: {
      startGame(e) {
        (e.firstPlayerForTurn = e.firstPlayerForTurn === 1 ? 2 : 1),
          (e.statut = e.firstPlayerForTurn === 1 ? "player1" : "player2"),
          (e.grille = Fl);
      },
      restartGame(e) {
        (e.statut = ""), (e.grille = Fl);
      },
      changePlayer(e) {
        e.statut = e.statut === "player1" ? "player2" : "player1";
      },
      setGrille(e, t) {
        let n = [...e.grille];
        n[t.payload.ligne][t.payload.colonne] = e.statut === "player1" ? 1 : 2;
      },
      endGame(e, t) {
        switch (((e.statut = "end"), (e.lastwinner = t.payload), t.payload)) {
          case 1:
            e.player1Point++;
            break;
          case 2:
            e.player2Point++;
            break;
          default:
            return;
        }
      },
      egalityGame(e) {
        e.statut = "egality";
      },
    },
  }),
  {
    startGame: JN,
    changePlayer: ZN,
    endGame: e6,
    setGrille: t6,
    restartGame: n6,
    egalityGame: r6,
  } = fb.actions,
  Bm = (e) => e.morpion.statut,
  i6 = (e) => e.morpion.lastwinner,
  o6 = (e) => e.morpion.player1Point,
  a6 = (e) => e.morpion.player2Point,
  s6 = (e) => e.morpion.grille,
  l6 = fb.reducer,
  Ld = ({ player: e }) => {
    function t() {
      switch (e) {
        default:
          return "";
        case 1:
          return p.jsx(se, { icon: yP });
        case 2:
          return p.jsx(se, { icon: fP });
      }
    }
    return p.jsx(p.Fragment, { children: t() });
  },
  Py = 10,
  u6 = () => {
    const e = Ce(),
      [t, n] = x.useState(Py);
    x.useEffect(() => {
      let i = setInterval(() => {
          n((a) => a - 1);
        }, 1e3),
        o = setTimeout(() => {
          r();
        }, Py * 1e3);
      return () => {
        clearInterval(i), clearTimeout(o);
      };
    }, []);
    function r() {
      e(n6()),
        setTimeout(() => {
          e(JN());
        }, 100);
    }
    return p.jsxs("div", {
      className: "btn-restart",
      onClick: (i) => r(),
      children: [
        p.jsx("div", { className: "counter", children: t }),
        p.jsx("p", { className: "soustitre", children: "Relancer" }),
      ],
    });
  },
  c6 = () => {
    const e = H(Bm);
    return p.jsx(p.Fragment, {
      children:
        e === "end" || e === "egality"
          ? p.jsx(u6, {})
          : p.jsxs("div", {
              className: "whoturn",
              children: [
                p.jsx("p", { className: "name", children: QN[e].name }),
                p.jsx("p", { className: "soustitre", children: "à toi !" }),
              ],
            }),
    });
  },
  f6 = () => {
    const e = H(Bm),
      t = H(s6),
      n = Ce();
    x.useEffect(() => {
      const a = async () => {
        i() === null && n(ZN());
      };
      t !== Fl && a();
    }, [t]);
    async function r(a, s) {
      e === "" || e === "end" || n(t6({ ligne: a, colonne: s }));
    }
    function i() {
      let a = null;
      t.forEach((l, u) => {
        a = a || o(t[u][0], t[u][1], t[u][2]);
      }),
        t.forEach((l, u) => {
          a = a || o(t[0][u], t[1][u], t[2][u]);
        }),
        (a = a || o(t[0][0], t[1][1], t[2][2])),
        (a = a || o(t[2][0], t[1][1], t[0][2])),
        a !== null && n(e6(a));
      let s = 0;
      return (
        t.forEach((l, u) => {
          l.forEach((c) => {
            c === 0 && s++;
          });
        }),
        s === 0 ? (n(r6()), "egality") : a
      );
    }
    function o(a, s, l) {
      return a !== 0 && a === s && s === l ? a : null;
    }
    return p.jsxs("div", {
      className: "contain-morpion",
      children: [
        p.jsx("div", {
          className: "grille-morpion " + e,
          children: t.map((a, s) =>
            p.jsx(p.Fragment, {
              children: a.map((l, u) =>
                p.jsx(d6, { box: l, statutGame: e, onClick: () => r(s, u) }, u)
              ),
            })
          ),
        }),
        p.jsx(c6, {}),
      ],
    });
  },
  d6 = ({ statutGame: e, box: t, onClick: n }) => {
    const [r, i] = x.useState(0),
      o = H(i6);
    x.useEffect(() => {
      e === "" && i(0);
    }, [e]);
    function a() {
      r || (n(), i(e === "player1" ? 1 : 2));
    }
    return p.jsx("div", {
      className:
        "box " +
        (r === 1 ? "un" : "") +
        " " +
        (r === 2 ? "deux" : "") +
        " " +
        (e === "end" && o === r ? "victory-case" : ""),
      onClick: (s) => a(),
      children: p.jsx(Ld, { player: t }),
    });
  },
  p6 = Lm({ reducer: { morpion: l6 } }),
  m6 = () => {
    const e = H(o6),
      t = H(a6),
      n = Qg(),
      r = Qg(),
      i = { y: [0, -50, 0], scale: [1, 2, 1] };
    return (
      x.useEffect(() => {
        n.start(i);
      }, [e]),
      x.useEffect(() => {
        r.start(i);
      }, [t]),
      p.jsxs("div", {
        className: "container-points",
        children: [
          p.jsxs("div", {
            className: "container-player player1",
            children: [
              p.jsx(Z.div, {
                className: "containPoints",
                initial: !1,
                animate: n,
                children: e,
              }),
              p.jsx("p", { children: p.jsx(Ld, { player: 1 }) }),
            ],
          }),
          p.jsxs("div", {
            className: "container-player player2",
            children: [
              p.jsx(Z.div, {
                className: "containPoints",
                initial: !1,
                animate: r,
                children: t,
              }),
              p.jsx("p", { children: p.jsx(Ld, { player: 2 }) }),
            ],
          }),
        ],
      })
    );
  };
var D = {},
  Id = { exports: {} };
(function (e, t) {
  (function (n, r) {
    var i = "1.0.2",
      o = "",
      a = "?",
      s = "function",
      l = "undefined",
      u = "object",
      c = "string",
      d = "major",
      f = "model",
      m = "name",
      h = "type",
      v = "vendor",
      b = "version",
      w = "architecture",
      y = "console",
      g = "mobile",
      S = "tablet",
      k = "smarttv",
      E = "wearable",
      C = "embedded",
      T = 255,
      L = "Amazon",
      N = "Apple",
      W = "ASUS",
      $ = "BlackBerry",
      Y = "Browser",
      je = "Chrome",
      Ue = "Edge",
      J = "Firefox",
      De = "Google",
      _ = "Huawei",
      O = "LG",
      P = "Microsoft",
      M = "Motorola",
      B = "Opera",
      Qe = "Samsung",
      Pe = "Sony",
      Tn = "Xiaomi",
      ot = "Zebra",
      pt = "Facebook",
      jn = function (q, ee) {
        var K = {};
        for (var Se in q)
          ee[Se] && ee[Se].length % 2 === 0
            ? (K[Se] = ee[Se].concat(q[Se]))
            : (K[Se] = q[Se]);
        return K;
      },
      On = function (q) {
        for (var ee = {}, K = 0; K < q.length; K++)
          ee[q[K].toUpperCase()] = q[K];
        return ee;
      },
      An = function (q, ee) {
        return typeof q === c ? gr(ee).indexOf(gr(q)) !== -1 : !1;
      },
      gr = function (q) {
        return q.toLowerCase();
      },
      hS = function (q) {
        return typeof q === c ? q.replace(/[^\d\.]/g, o).split(".")[0] : r;
      },
      Bu = function (q, ee) {
        if (typeof q === c)
          return (
            (q = q.replace(/^\s\s*/, o).replace(/\s\s*$/, o)),
            typeof ee === l ? q : q.substring(0, T)
          );
      },
      Ji = function (q, ee) {
        for (var K = 0, Se, X, Fa, ue, Zi, qt; K < ee.length && !Zi; ) {
          var Km = ee[K],
            Xm = ee[K + 1];
          for (Se = X = 0; Se < Km.length && !Zi; )
            if (((Zi = Km[Se++].exec(q)), Zi))
              for (Fa = 0; Fa < Xm.length; Fa++)
                (qt = Zi[++X]),
                  (ue = Xm[Fa]),
                  typeof ue === u && ue.length > 0
                    ? ue.length === 2
                      ? typeof ue[1] == s
                        ? (this[ue[0]] = ue[1].call(this, qt))
                        : (this[ue[0]] = ue[1])
                      : ue.length === 3
                      ? typeof ue[1] === s && !(ue[1].exec && ue[1].test)
                        ? (this[ue[0]] = qt ? ue[1].call(this, qt, ue[2]) : r)
                        : (this[ue[0]] = qt ? qt.replace(ue[1], ue[2]) : r)
                      : ue.length === 4 &&
                        (this[ue[0]] = qt
                          ? ue[3].call(this, qt.replace(ue[1], ue[2]))
                          : r)
                    : (this[ue] = qt || r);
          K += 2;
        }
      },
      Wu = function (q, ee) {
        for (var K in ee)
          if (typeof ee[K] === u && ee[K].length > 0) {
            for (var Se = 0; Se < ee[K].length; Se++)
              if (An(ee[K][Se], q)) return K === a ? r : K;
          } else if (An(ee[K], q)) return K === a ? r : K;
        return q;
      },
      vS = {
        "1.0": "/8",
        1.2: "/1",
        1.3: "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/",
      },
      Ym = {
        ME: "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        2e3: "NT 5.0",
        XP: ["NT 5.1", "NT 5.2"],
        Vista: "NT 6.0",
        7: "NT 6.1",
        8: "NT 6.2",
        8.1: "NT 6.3",
        10: ["NT 6.4", "NT 10.0"],
        RT: "ARM",
      },
      qm = {
        browser: [
          [/\b(?:crmo|crios)\/([\w\.]+)/i],
          [b, [m, "Chrome"]],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [b, [m, "Edge"]],
          [
            /(opera mini)\/([-\w\.]+)/i,
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
          ],
          [m, b],
          [/opios[\/ ]+([\w\.]+)/i],
          [b, [m, B + " Mini"]],
          [/\bopr\/([\w\.]+)/i],
          [b, [m, B]],
          [
            /(kindle)\/([\w\.]+)/i,
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
            /(?:ms|\()(ie) ([\w\.]+)/i,
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
            /(weibo)__([\d\.]+)/i,
          ],
          [m, b],
          [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
          [b, [m, "UC" + Y]],
          [/\bqbcore\/([\w\.]+)/i],
          [b, [m, "WeChat(Win) Desktop"]],
          [/micromessenger\/([\w\.]+)/i],
          [b, [m, "WeChat"]],
          [/konqueror\/([\w\.]+)/i],
          [b, [m, "Konqueror"]],
          [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
          [b, [m, "IE"]],
          [/yabrowser\/([\w\.]+)/i],
          [b, [m, "Yandex"]],
          [/(avast|avg)\/([\w\.]+)/i],
          [[m, /(.+)/, "$1 Secure " + Y], b],
          [/\bfocus\/([\w\.]+)/i],
          [b, [m, J + " Focus"]],
          [/\bopt\/([\w\.]+)/i],
          [b, [m, B + " Touch"]],
          [/coc_coc\w+\/([\w\.]+)/i],
          [b, [m, "Coc Coc"]],
          [/dolfin\/([\w\.]+)/i],
          [b, [m, "Dolphin"]],
          [/coast\/([\w\.]+)/i],
          [b, [m, B + " Coast"]],
          [/miuibrowser\/([\w\.]+)/i],
          [b, [m, "MIUI " + Y]],
          [/fxios\/([-\w\.]+)/i],
          [b, [m, J]],
          [/\bqihu|(qi?ho?o?|360)browser/i],
          [[m, "360 " + Y]],
          [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
          [[m, /(.+)/, "$1 " + Y], b],
          [/(comodo_dragon)\/([\w\.]+)/i],
          [[m, /_/g, " "], b],
          [
            /(electron)\/([\w\.]+) safari/i,
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
          ],
          [m, b],
          [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
          [m],
          [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
          [[m, pt], b],
          [
            /safari (line)\/([\w\.]+)/i,
            /\b(line)\/([\w\.]+)\/iab/i,
            /(chromium|instagram)[\/ ]([-\w\.]+)/i,
          ],
          [m, b],
          [/\bgsa\/([\w\.]+) .*safari\//i],
          [b, [m, "GSA"]],
          [/headlesschrome(?:\/([\w\.]+)| )/i],
          [b, [m, je + " Headless"]],
          [/ wv\).+(chrome)\/([\w\.]+)/i],
          [[m, je + " WebView"], b],
          [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
          [b, [m, "Android " + Y]],
          [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
          [m, b],
          [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
          [b, [m, "Mobile Safari"]],
          [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
          [b, m],
          [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
          [m, [b, Wu, vS]],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [m, b],
          [/(navigator|netscape\d?)\/([-\w\.]+)/i],
          [[m, "Netscape"], b],
          [/mobile vr; rv:([\w\.]+)\).+firefox/i],
          [b, [m, J + " Reality"]],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            /(swiftfox)/i,
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            /(firefox)\/([\w\.]+)/i,
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            /(links) \(([\w\.]+)/i,
          ],
          [m, b],
        ],
        cpu: [
          [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
          [[w, "amd64"]],
          [/(ia32(?=;))/i],
          [[w, gr]],
          [/((?:i[346]|x)86)[;\)]/i],
          [[w, "ia32"]],
          [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
          [[w, "arm64"]],
          [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
          [[w, "armhf"]],
          [/windows (ce|mobile); ppc;/i],
          [[w, "arm"]],
          [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
          [[w, /ower/, o, gr]],
          [/(sun4\w)[;\)]/i],
          [[w, "sparc"]],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
          ],
          [[w, gr]],
        ],
        device: [
          [
            /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
          ],
          [f, [v, Qe], [h, S]],
          [
            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i,
          ],
          [f, [v, Qe], [h, g]],
          [/\((ip(?:hone|od)[\w ]*);/i],
          [f, [v, N], [h, g]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
          ],
          [f, [v, N], [h, S]],
          [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
          [f, [v, _], [h, S]],
          [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i,
          ],
          [f, [v, _], [h, g]],
          [
            /\b(poco[\w ]+)(?: bui|\))/i,
            /\b; (\w+) build\/hm\1/i,
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
          ],
          [
            [f, /_/g, " "],
            [v, Tn],
            [h, g],
          ],
          [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
          [
            [f, /_/g, " "],
            [v, Tn],
            [h, S],
          ],
          [
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
          ],
          [f, [v, "OPPO"], [h, g]],
          [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
          [f, [v, "Vivo"], [h, g]],
          [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
          [f, [v, "Realme"], [h, g]],
          [
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
          ],
          [f, [v, M], [h, g]],
          [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
          [f, [v, M], [h, S]],
          [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
          [f, [v, O], [h, S]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i,
          ],
          [f, [v, O], [h, g]],
          [
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
          ],
          [f, [v, "Lenovo"], [h, S]],
          [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
          [
            [f, /_/g, " "],
            [v, "Nokia"],
            [h, g],
          ],
          [/(pixel c)\b/i],
          [f, [v, De], [h, S]],
          [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
          [f, [v, De], [h, g]],
          [
            /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
          ],
          [f, [v, Pe], [h, g]],
          [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
          [
            [f, "Xperia Tablet"],
            [v, Pe],
            [h, S],
          ],
          [
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
          ],
          [f, [v, "OnePlus"], [h, g]],
          [
            /(alexa)webm/i,
            /(kf[a-z]{2}wi)( bui|\))/i,
            /(kf[a-z]+)( bui|\)).+silk\//i,
          ],
          [f, [v, L], [h, S]],
          [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
          [
            [f, /(.+)/g, "Fire Phone $1"],
            [v, L],
            [h, g],
          ],
          [/(playbook);[-\w\),; ]+(rim)/i],
          [f, v, [h, S]],
          [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
          [f, [v, $], [h, g]],
          [
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
          ],
          [f, [v, W], [h, S]],
          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
          [f, [v, W], [h, g]],
          [/(nexus 9)/i],
          [f, [v, "HTC"], [h, S]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i,
          ],
          [v, [f, /_/g, " "], [h, g]],
          [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
          [f, [v, "Acer"], [h, S]],
          [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
          [f, [v, "Meizu"], [h, g]],
          [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
          [f, [v, "Sharp"], [h, g]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
            /(hp) ([\w ]+\w)/i,
            /(asus)-?(\w+)/i,
            /(microsoft); (lumia[\w ]+)/i,
            /(lenovo)[-_ ]?([-\w]+)/i,
            /(jolla)/i,
            /(oppo) ?([\w ]+) bui/i,
          ],
          [v, f, [h, g]],
          [
            /(archos) (gamepad2?)/i,
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            /(kindle)\/([\w\.]+)/i,
            /(nook)[\w ]+build\/(\w+)/i,
            /(dell) (strea[kpr\d ]*[\dko])/i,
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            /(trinity)[- ]*(t\d{3}) bui/i,
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            /(vodafone) ([\w ]+)(?:\)| bui)/i,
          ],
          [v, f, [h, S]],
          [/(surface duo)/i],
          [f, [v, P], [h, S]],
          [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
          [f, [v, "Fairphone"], [h, g]],
          [/(u304aa)/i],
          [f, [v, "AT&T"], [h, g]],
          [/\bsie-(\w*)/i],
          [f, [v, "Siemens"], [h, g]],
          [/\b(rct\w+) b/i],
          [f, [v, "RCA"], [h, S]],
          [/\b(venue[\d ]{2,7}) b/i],
          [f, [v, "Dell"], [h, S]],
          [/\b(q(?:mv|ta)\w+) b/i],
          [f, [v, "Verizon"], [h, S]],
          [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
          [f, [v, "Barnes & Noble"], [h, S]],
          [/\b(tm\d{3}\w+) b/i],
          [f, [v, "NuVision"], [h, S]],
          [/\b(k88) b/i],
          [f, [v, "ZTE"], [h, S]],
          [/\b(nx\d{3}j) b/i],
          [f, [v, "ZTE"], [h, g]],
          [/\b(gen\d{3}) b.+49h/i],
          [f, [v, "Swiss"], [h, g]],
          [/\b(zur\d{3}) b/i],
          [f, [v, "Swiss"], [h, S]],
          [/\b((zeki)?tb.*\b) b/i],
          [f, [v, "Zeki"], [h, S]],
          [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
          [[v, "Dragon Touch"], f, [h, S]],
          [/\b(ns-?\w{0,9}) b/i],
          [f, [v, "Insignia"], [h, S]],
          [/\b((nxa|next)-?\w{0,9}) b/i],
          [f, [v, "NextBook"], [h, S]],
          [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
          [[v, "Voice"], f, [h, g]],
          [/\b(lvtel\-)?(v1[12]) b/i],
          [[v, "LvTel"], f, [h, g]],
          [/\b(ph-1) /i],
          [f, [v, "Essential"], [h, g]],
          [/\b(v(100md|700na|7011|917g).*\b) b/i],
          [f, [v, "Envizen"], [h, S]],
          [/\b(trio[-\w\. ]+) b/i],
          [f, [v, "MachSpeed"], [h, S]],
          [/\btu_(1491) b/i],
          [f, [v, "Rotor"], [h, S]],
          [/(shield[\w ]+) b/i],
          [f, [v, "Nvidia"], [h, S]],
          [/(sprint) (\w+)/i],
          [v, f, [h, g]],
          [/(kin\.[onetw]{3})/i],
          [
            [f, /\./g, " "],
            [v, P],
            [h, g],
          ],
          [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [f, [v, ot], [h, S]],
          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
          [f, [v, ot], [h, g]],
          [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
          [v, f, [h, y]],
          [/droid.+; (shield) bui/i],
          [f, [v, "Nvidia"], [h, y]],
          [/(playstation [345portablevi]+)/i],
          [f, [v, Pe], [h, y]],
          [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
          [f, [v, P], [h, y]],
          [/smart-tv.+(samsung)/i],
          [v, [h, k]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [f, /^/, "SmartTV"],
            [v, Qe],
            [h, k],
          ],
          [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
          [
            [v, O],
            [h, k],
          ],
          [/(apple) ?tv/i],
          [v, [f, N + " TV"], [h, k]],
          [/crkey/i],
          [
            [f, je + "cast"],
            [v, De],
            [h, k],
          ],
          [/droid.+aft(\w)( bui|\))/i],
          [f, [v, L], [h, k]],
          [/\(dtv[\);].+(aquos)/i],
          [f, [v, "Sharp"], [h, k]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
          ],
          [
            [v, Bu],
            [f, Bu],
            [h, k],
          ],
          [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
          [[h, k]],
          [/((pebble))app/i],
          [v, f, [h, E]],
          [/droid.+; (glass) \d/i],
          [f, [v, De], [h, E]],
          [/droid.+; (wt63?0{2,3})\)/i],
          [f, [v, ot], [h, E]],
          [/(quest( 2)?)/i],
          [f, [v, pt], [h, E]],
          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
          [v, [h, C]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
          [f, [h, g]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
          [f, [h, S]],
          [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
          [[h, S]],
          [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
          [[h, g]],
          [/(android[-\w\. ]{0,9});.+buil/i],
          [f, [v, "Generic"]],
        ],
        engine: [
          [/windows.+ edge\/([\w\.]+)/i],
          [b, [m, Ue + "HTML"]],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [b, [m, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
            /ekioh(flow)\/([\w\.]+)/i,
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
          ],
          [m, b],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [b, m],
        ],
        os: [
          [/microsoft (windows) (vista|xp)/i],
          [m, b],
          [
            /(windows) nt 6\.2; (arm)/i,
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
          ],
          [m, [b, Wu, Ym]],
          [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
          [
            [m, "Windows"],
            [b, Wu, Ym],
          ],
          [
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
            /cfnetwork\/.+darwin/i,
          ],
          [
            [b, /_/g, "."],
            [m, "iOS"],
          ],
          [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
          [
            [m, "Mac OS"],
            [b, /_/g, "."],
          ],
          [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
          [b, m],
          [
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,
            /(tizen|kaios)[\/ ]([\w\.]+)/i,
            /\((series40);/i,
          ],
          [m, b],
          [/\(bb(10);/i],
          [b, [m, $]],
          [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
          [b, [m, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
          ],
          [b, [m, J + " OS"]],
          [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
          [b, [m, "webOS"]],
          [/crkey\/([\d\.]+)/i],
          [b, [m, je + "cast"]],
          [/(cros) [\w]+ ([\w\.]+\w)/i],
          [[m, "Chromium OS"], b],
          [
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            /(xbox); +xbox ([^\);]+)/i,
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            /(mint)[\/\(\) ]?(\w*)/i,
            /(mageia|vectorlinux)[; ]/i,
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            /(hurd|linux) ?([\w\.]*)/i,
            /(gnu) ?([\w\.]*)/i,
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            /(haiku) (\w+)/i,
          ],
          [m, b],
          [/(sunos) ?([\w\.\d]*)/i],
          [[m, "Solaris"], b],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
            /(unix) ?([\w\.]*)/i,
          ],
          [m, b],
        ],
      },
      Lt = function (q, ee) {
        if ((typeof q === u && ((ee = q), (q = r)), !(this instanceof Lt)))
          return new Lt(q, ee).getResult();
        var K =
            q ||
            (typeof n !== l && n.navigator && n.navigator.userAgent
              ? n.navigator.userAgent
              : o),
          Se = ee ? jn(qm, ee) : qm;
        return (
          (this.getBrowser = function () {
            var X = {};
            return (
              (X[m] = r),
              (X[b] = r),
              Ji.call(X, K, Se.browser),
              (X.major = hS(X.version)),
              X
            );
          }),
          (this.getCPU = function () {
            var X = {};
            return (X[w] = r), Ji.call(X, K, Se.cpu), X;
          }),
          (this.getDevice = function () {
            var X = {};
            return (
              (X[v] = r), (X[f] = r), (X[h] = r), Ji.call(X, K, Se.device), X
            );
          }),
          (this.getEngine = function () {
            var X = {};
            return (X[m] = r), (X[b] = r), Ji.call(X, K, Se.engine), X;
          }),
          (this.getOS = function () {
            var X = {};
            return (X[m] = r), (X[b] = r), Ji.call(X, K, Se.os), X;
          }),
          (this.getResult = function () {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU(),
            };
          }),
          (this.getUA = function () {
            return K;
          }),
          (this.setUA = function (X) {
            return (K = typeof X === c && X.length > T ? Bu(X, T) : X), this;
          }),
          this.setUA(K),
          this
        );
      };
    (Lt.VERSION = i),
      (Lt.BROWSER = On([m, b, d])),
      (Lt.CPU = On([w])),
      (Lt.DEVICE = On([f, v, h, y, g, k, S, E, C])),
      (Lt.ENGINE = Lt.OS = On([m, b])),
      e.exports && (t = e.exports = Lt),
      (t.UAParser = Lt);
    var Yr = typeof n !== l && (n.jQuery || n.Zepto);
    if (Yr && !Yr.ua) {
      var Va = new Lt();
      (Yr.ua = Va.getResult()),
        (Yr.ua.get = function () {
          return Va.getUA();
        }),
        (Yr.ua.set = function (q) {
          Va.setUA(q);
          var ee = Va.getResult();
          for (var K in ee) Yr.ua[K] = ee[K];
        });
    }
  })(typeof window == "object" ? window : yS);
})(Id, Id.exports);
var h6 = Id.exports;
Object.defineProperty(D, "__esModule", { value: !0 });
function v6(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
var qe = x,
  le = v6(qe),
  db = h6,
  hr = new db(),
  Xe = hr.getBrowser(),
  g6 = hr.getCPU(),
  Ct = hr.getDevice(),
  Wm = hr.getEngine(),
  vr = hr.getOS(),
  La = hr.getUA(),
  pb = function (t) {
    return hr.setUA(t);
  },
  Ia = function (t) {
    if (!t) {
      console.error("No userAgent string was provided");
      return;
    }
    var n = new db(t);
    return {
      UA: n,
      browser: n.getBrowser(),
      cpu: n.getCPU(),
      device: n.getDevice(),
      engine: n.getEngine(),
      os: n.getOS(),
      ua: n.getUA(),
      setUserAgent: function (i) {
        return n.setUA(i);
      },
    };
  },
  mb = Object.freeze({
    ClientUAInstance: hr,
    browser: Xe,
    cpu: g6,
    device: Ct,
    engine: Wm,
    os: vr,
    ua: La,
    setUa: pb,
    parseUserAgent: Ia,
  });
function Ty(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function y6(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ty(Object(n), !0).forEach(function (r) {
          b6(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ty(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Vo(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Vo = function (t) {
          return typeof t;
        })
      : (Vo = function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        }),
    Vo(e)
  );
}
function w6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function x6(e, t, n) {
  return t && jy(e.prototype, t), n && jy(e, n), e;
}
function b6(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Dd() {
  return (
    (Dd =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Dd.apply(this, arguments)
  );
}
function S6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Fd(e, t);
}
function Vd(e) {
  return (
    (Vd = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Vd(e)
  );
}
function Fd(e, t) {
  return (
    (Fd =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    Fd(e, t)
  );
}
function k6(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Rt(e, t) {
  if (e == null) return {};
  var n = k6(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function zs(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function E6(e, t) {
  if (t && (typeof t == "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return zs(e);
}
function C6(e, t) {
  return P6(e) || T6(e, t) || j6(e, t) || O6();
}
function P6(e) {
  if (Array.isArray(e)) return e;
}
function T6(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      o = !1,
      a,
      s;
    try {
      for (
        n = n.call(e);
        !(i = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t));
        i = !0
      );
    } catch (l) {
      (o = !0), (s = l);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw s;
      }
    }
    return r;
  }
}
function j6(e, t) {
  if (e) {
    if (typeof e == "string") return Oy(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Oy(e, t);
  }
}
function Oy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function O6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ge = {
    Mobile: "mobile",
    Tablet: "tablet",
    SmartTv: "smarttv",
    Console: "console",
    Wearable: "wearable",
    Embedded: "embedded",
    Browser: void 0,
  },
  dt = {
    Chrome: "Chrome",
    Firefox: "Firefox",
    Opera: "Opera",
    Yandex: "Yandex",
    Safari: "Safari",
    InternetExplorer: "Internet Explorer",
    Edge: "Edge",
    Chromium: "Chromium",
    Ie: "IE",
    MobileSafari: "Mobile Safari",
    EdgeChromium: "Edge Chromium",
    MIUI: "MIUI Browser",
    SamsungBrowser: "Samsung Browser",
  },
  Qi = {
    IOS: "iOS",
    Android: "Android",
    WindowsPhone: "Windows Phone",
    Windows: "Windows",
    MAC_OS: "Mac OS",
  },
  A6 = {
    isMobile: !1,
    isTablet: !1,
    isBrowser: !1,
    isSmartTV: !1,
    isConsole: !1,
    isWearable: !1,
  },
  _6 = function (t) {
    switch (t) {
      case Ge.Mobile:
        return { isMobile: !0 };
      case Ge.Tablet:
        return { isTablet: !0 };
      case Ge.SmartTv:
        return { isSmartTV: !0 };
      case Ge.Console:
        return { isConsole: !0 };
      case Ge.Wearable:
        return { isWearable: !0 };
      case Ge.Browser:
        return { isBrowser: !0 };
      case Ge.Embedded:
        return { isEmbedded: !0 };
      default:
        return A6;
    }
  },
  N6 = function (t) {
    return pb(t);
  },
  U = function (t) {
    var n =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
    return t || n;
  },
  Hm = function () {
    return typeof window < "u" && (window.navigator || navigator)
      ? window.navigator || navigator
      : !1;
  },
  Gm = function (t) {
    var n = Hm();
    return (
      n &&
      n.platform &&
      (n.platform.indexOf(t) !== -1 ||
        (n.platform === "MacIntel" && n.maxTouchPoints > 1 && !window.MSStream))
    );
  },
  M6 = function (t, n, r, i, o) {
    return {
      isBrowser: t,
      browserMajorVersion: U(n.major),
      browserFullVersion: U(n.version),
      browserName: U(n.name),
      engineName: U(r.name),
      engineVersion: U(r.version),
      osName: U(i.name),
      osVersion: U(i.version),
      userAgent: U(o),
    };
  },
  Ay = function (t, n, r, i) {
    return y6({}, t, {
      vendor: U(n.vendor),
      model: U(n.model),
      os: U(r.name),
      osVersion: U(r.version),
      ua: U(i),
    });
  },
  R6 = function (t, n, r, i) {
    return {
      isSmartTV: t,
      engineName: U(n.name),
      engineVersion: U(n.version),
      osName: U(r.name),
      osVersion: U(r.version),
      userAgent: U(i),
    };
  },
  L6 = function (t, n, r, i) {
    return {
      isConsole: t,
      engineName: U(n.name),
      engineVersion: U(n.version),
      osName: U(r.name),
      osVersion: U(r.version),
      userAgent: U(i),
    };
  },
  I6 = function (t, n, r, i) {
    return {
      isWearable: t,
      engineName: U(n.name),
      engineVersion: U(n.version),
      osName: U(r.name),
      osVersion: U(r.version),
      userAgent: U(i),
    };
  },
  D6 = function (t, n, r, i, o) {
    return {
      isEmbedded: t,
      vendor: U(n.vendor),
      model: U(n.model),
      engineName: U(r.name),
      engineVersion: U(r.version),
      osName: U(i.name),
      osVersion: U(i.version),
      userAgent: U(o),
    };
  };
function V6(e) {
  var t = e ? Ia(e) : mb,
    n = t.device,
    r = t.browser,
    i = t.engine,
    o = t.os,
    a = t.ua,
    s = _6(n.type),
    l = s.isBrowser,
    u = s.isMobile,
    c = s.isTablet,
    d = s.isSmartTV,
    f = s.isConsole,
    m = s.isWearable,
    h = s.isEmbedded;
  if (l) return M6(l, r, i, o, a);
  if (d) return R6(d, i, o, a);
  if (f) return L6(f, i, o, a);
  if (u || c) return Ay(s, n, o, a);
  if (m) return I6(m, i, o, a);
  if (h) return D6(h, n, i, o, a);
}
var hb = function (t) {
    var n = t.type;
    return n === Ge.Mobile;
  },
  vb = function (t) {
    var n = t.type;
    return n === Ge.Tablet;
  },
  gb = function (t) {
    var n = t.type;
    return n === Ge.Mobile || n === Ge.Tablet;
  },
  yb = function (t) {
    var n = t.type;
    return n === Ge.SmartTv;
  },
  zl = function (t) {
    var n = t.type;
    return n === Ge.Browser;
  },
  wb = function (t) {
    var n = t.type;
    return n === Ge.Wearable;
  },
  xb = function (t) {
    var n = t.type;
    return n === Ge.Console;
  },
  bb = function (t) {
    var n = t.type;
    return n === Ge.Embedded;
  },
  Sb = function (t) {
    var n = t.vendor;
    return U(n);
  },
  kb = function (t) {
    var n = t.model;
    return U(n);
  },
  Eb = function (t) {
    var n = t.type;
    return U(n, "browser");
  },
  Cb = function (t) {
    var n = t.name;
    return n === Qi.Android;
  },
  Pb = function (t) {
    var n = t.name;
    return n === Qi.Windows;
  },
  Tb = function (t) {
    var n = t.name;
    return n === Qi.MAC_OS;
  },
  jb = function (t) {
    var n = t.name;
    return n === Qi.WindowsPhone;
  },
  Ob = function (t) {
    var n = t.name;
    return n === Qi.IOS;
  },
  Ab = function (t) {
    var n = t.version;
    return U(n);
  },
  _b = function (t) {
    var n = t.name;
    return U(n);
  },
  Nb = function (t) {
    var n = t.name;
    return n === dt.Chrome;
  },
  Mb = function (t) {
    var n = t.name;
    return n === dt.Firefox;
  },
  Rb = function (t) {
    var n = t.name;
    return n === dt.Chromium;
  },
  $l = function (t) {
    var n = t.name;
    return n === dt.Edge;
  },
  Lb = function (t) {
    var n = t.name;
    return n === dt.Yandex;
  },
  Ib = function (t) {
    var n = t.name;
    return n === dt.Safari || n === dt.MobileSafari;
  },
  Db = function (t) {
    var n = t.name;
    return n === dt.MobileSafari;
  },
  Vb = function (t) {
    var n = t.name;
    return n === dt.Opera;
  },
  Fb = function (t) {
    var n = t.name;
    return n === dt.InternetExplorer || n === dt.Ie;
  },
  zb = function (t) {
    var n = t.name;
    return n === dt.MIUI;
  },
  $b = function (t) {
    var n = t.name;
    return n === dt.SamsungBrowser;
  },
  Ub = function (t) {
    var n = t.version;
    return U(n);
  },
  Bb = function (t) {
    var n = t.major;
    return U(n);
  },
  Wb = function (t) {
    var n = t.name;
    return U(n);
  },
  Hb = function (t) {
    var n = t.name;
    return U(n);
  },
  Gb = function (t) {
    var n = t.version;
    return U(n);
  },
  Yb = function () {
    var t = Hm(),
      n = t && t.userAgent && t.userAgent.toLowerCase();
    return typeof n == "string" ? /electron/.test(n) : !1;
  },
  _i = function (t) {
    return typeof t == "string" && t.indexOf("Edg/") !== -1;
  },
  qb = function () {
    var t = Hm();
    return (
      t &&
      (/iPad|iPhone|iPod/.test(t.platform) ||
        (t.platform === "MacIntel" && t.maxTouchPoints > 1)) &&
      !window.MSStream
    );
  },
  Zt = function () {
    return Gm("iPad");
  },
  Kb = function () {
    return Gm("iPhone");
  },
  Xb = function () {
    return Gm("iPod");
  },
  Qb = function (t) {
    return U(t);
  };
function Jb(e) {
  var t = e || mb,
    n = t.device,
    r = t.browser,
    i = t.os,
    o = t.engine,
    a = t.ua;
  return {
    isSmartTV: yb(n),
    isConsole: xb(n),
    isWearable: wb(n),
    isEmbedded: bb(n),
    isMobileSafari: Db(r) || Zt(),
    isChromium: Rb(r),
    isMobile: gb(n) || Zt(),
    isMobileOnly: hb(n),
    isTablet: vb(n) || Zt(),
    isBrowser: zl(n),
    isDesktop: zl(n),
    isAndroid: Cb(i),
    isWinPhone: jb(i),
    isIOS: Ob(i) || Zt(),
    isChrome: Nb(r),
    isFirefox: Mb(r),
    isSafari: Ib(r),
    isOpera: Vb(r),
    isIE: Fb(r),
    osVersion: Ab(i),
    osName: _b(i),
    fullBrowserVersion: Ub(r),
    browserVersion: Bb(r),
    browserName: Wb(r),
    mobileVendor: Sb(n),
    mobileModel: kb(n),
    engineName: Hb(o),
    engineVersion: Gb(o),
    getUA: Qb(a),
    isEdge: $l(r) || _i(a),
    isYandex: Lb(r),
    deviceType: Eb(n),
    isIOS13: qb(),
    isIPad13: Zt(),
    isIPhone13: Kb(),
    isIPod13: Xb(),
    isElectron: Yb(),
    isEdgeChromium: _i(a),
    isLegacyEdge: $l(r) && !_i(a),
    isWindows: Pb(i),
    isMacOs: Tb(i),
    isMIUI: zb(r),
    isSamsungBrowser: $b(r),
  };
}
var Zb = yb(Ct),
  eS = xb(Ct),
  tS = wb(Ct),
  F6 = bb(Ct),
  z6 = Db(Xe) || Zt(),
  $6 = Rb(Xe),
  Uu = gb(Ct) || Zt(),
  nS = hb(Ct),
  rS = vb(Ct) || Zt(),
  iS = zl(Ct),
  U6 = zl(Ct),
  oS = Cb(vr),
  aS = jb(vr),
  sS = Ob(vr) || Zt(),
  B6 = Nb(Xe),
  W6 = Mb(Xe),
  H6 = Ib(Xe),
  G6 = Vb(Xe),
  lS = Fb(Xe),
  Y6 = Ab(vr),
  q6 = _b(vr),
  K6 = Ub(Xe),
  X6 = Bb(Xe),
  Q6 = Wb(Xe),
  J6 = Sb(Ct),
  Z6 = kb(Ct),
  eM = Hb(Wm),
  tM = Gb(Wm),
  nM = Qb(La),
  rM = $l(Xe) || _i(La),
  iM = Lb(Xe),
  oM = Eb(Ct),
  aM = qb(),
  sM = Zt(),
  lM = Kb(),
  uM = Xb(),
  cM = Yb(),
  fM = _i(La),
  dM = $l(Xe) && !_i(La),
  pM = Pb(vr),
  mM = Tb(vr),
  hM = zb(Xe),
  vM = $b(Xe),
  gM = function (t) {
    if (!t || typeof t != "string") {
      console.error("No valid user agent string was provided");
      return;
    }
    var n = Ia(t),
      r = n.device,
      i = n.browser,
      o = n.os,
      a = n.engine,
      s = n.ua;
    return Jb({ device: r, browser: i, os: o, engine: a, ua: s });
  },
  yM = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Rt(t, ["renderWithFragment", "children"]);
    return oS
      ? n
        ? le.createElement(qe.Fragment, null, r)
        : le.createElement("div", i, r)
      : null;
  },
  wM = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Rt(t, ["renderWithFragment", "children"]);
    return iS
      ? n
        ? le.createElement(qe.Fragment, null, r)
        : le.createElement("div", i, r)
      : null;
  },
  xM = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Rt(t, ["renderWithFragment", "children"]);
    return lS
      ? n
        ? le.createElement(qe.Fragment, null, r)
        : le.createElement("div", i, r)
      : null;
  },
  bM = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Rt(t, ["renderWithFragment", "children"]);
    return sS
      ? n
        ? le.createElement(qe.Fragment, null, r)
        : le.createElement("div", i, r)
      : null;
  },
  SM = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Rt(t, ["renderWithFragment", "children"]);
    return Uu
      ? n
        ? le.createElement(qe.Fragment, null, r)
        : le.createElement("div", i, r)
      : null;
  },
  kM = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Rt(t, ["renderWithFragment", "children"]);
    return rS
      ? n
        ? le.createElement(qe.Fragment, null, r)
        : le.createElement("div", i, r)
      : null;
  },
  EM = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Rt(t, ["renderWithFragment", "children"]);
    return aS
      ? n
        ? le.createElement(qe.Fragment, null, r)
        : le.createElement("div", i, r)
      : null;
  },
  CM = function (t) {
    var n = t.renderWithFragment,
      r = t.children;
    t.viewClassName, t.style;
    var i = Rt(t, ["renderWithFragment", "children", "viewClassName", "style"]);
    return nS
      ? n
        ? le.createElement(qe.Fragment, null, r)
        : le.createElement("div", i, r)
      : null;
  },
  PM = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Rt(t, ["renderWithFragment", "children"]);
    return Zb
      ? n
        ? le.createElement(qe.Fragment, null, r)
        : le.createElement("div", i, r)
      : null;
  },
  TM = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Rt(t, ["renderWithFragment", "children"]);
    return eS
      ? n
        ? le.createElement(qe.Fragment, null, r)
        : le.createElement("div", i, r)
      : null;
  },
  jM = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Rt(t, ["renderWithFragment", "children"]);
    return tS
      ? n
        ? le.createElement(qe.Fragment, null, r)
        : le.createElement("div", i, r)
      : null;
  },
  OM = function (t) {
    var n = t.renderWithFragment,
      r = t.children;
    t.viewClassName, t.style;
    var i = t.condition,
      o = Rt(t, [
        "renderWithFragment",
        "children",
        "viewClassName",
        "style",
        "condition",
      ]);
    return i
      ? n
        ? le.createElement(qe.Fragment, null, r)
        : le.createElement("div", o, r)
      : null;
  };
function AM(e) {
  return (function (t) {
    S6(n, t);
    function n(r) {
      var i;
      return (
        w6(this, n),
        (i = E6(this, Vd(n).call(this, r))),
        (i.isEventListenerAdded = !1),
        (i.handleOrientationChange = i.handleOrientationChange.bind(zs(i))),
        (i.onOrientationChange = i.onOrientationChange.bind(zs(i))),
        (i.onPageLoad = i.onPageLoad.bind(zs(i))),
        (i.state = { isLandscape: !1, isPortrait: !1 }),
        i
      );
    }
    return (
      x6(n, [
        {
          key: "handleOrientationChange",
          value: function () {
            this.isEventListenerAdded || (this.isEventListenerAdded = !0);
            var i = window.innerWidth > window.innerHeight ? 90 : 0;
            this.setState({ isPortrait: i === 0, isLandscape: i === 90 });
          },
        },
        {
          key: "onOrientationChange",
          value: function () {
            this.handleOrientationChange();
          },
        },
        {
          key: "onPageLoad",
          value: function () {
            this.handleOrientationChange();
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            (typeof window > "u" ? "undefined" : Vo(window)) !== void 0 &&
              Uu &&
              (this.isEventListenerAdded
                ? window.removeEventListener("load", this.onPageLoad, !1)
                : (this.handleOrientationChange(),
                  window.addEventListener("load", this.onPageLoad, !1)),
              window.addEventListener("resize", this.onOrientationChange, !1));
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            window.removeEventListener("resize", this.onOrientationChange, !1);
          },
        },
        {
          key: "render",
          value: function () {
            return le.createElement(
              e,
              Dd({}, this.props, {
                isLandscape: this.state.isLandscape,
                isPortrait: this.state.isPortrait,
              })
            );
          },
        },
      ]),
      n
    );
  })(le.Component);
}
function _M() {
  var e = qe.useState(function () {
      var o = window.innerWidth > window.innerHeight ? 90 : 0;
      return {
        isPortrait: o === 0,
        isLandscape: o === 90,
        orientation: o === 0 ? "portrait" : "landscape",
      };
    }),
    t = C6(e, 2),
    n = t[0],
    r = t[1],
    i = qe.useCallback(
      function () {
        var o = window.innerWidth > window.innerHeight ? 90 : 0,
          a = {
            isPortrait: o === 0,
            isLandscape: o === 90,
            orientation: o === 0 ? "portrait" : "landscape",
          };
        n.orientation !== a.orientation && r(a);
      },
      [n.orientation]
    );
  return (
    qe.useEffect(
      function () {
        return (
          (typeof window > "u" ? "undefined" : Vo(window)) !== void 0 &&
            Uu &&
            (i(),
            window.addEventListener("load", i, !1),
            window.addEventListener("resize", i, !1)),
          function () {
            window.removeEventListener("resize", i, !1),
              window.removeEventListener("load", i, !1);
          }
        );
      },
      [i]
    ),
    n
  );
}
function uS(e) {
  var t = e || window.navigator.userAgent;
  return Ia(t);
}
function NM(e) {
  var t = e || window.navigator.userAgent,
    n = uS(t),
    r = Jb(n);
  return [r, n];
}
D.AndroidView = yM;
D.BrowserTypes = dt;
D.BrowserView = wM;
D.ConsoleView = TM;
D.CustomView = OM;
D.IEView = xM;
D.IOSView = bM;
D.MobileOnlyView = CM;
D.MobileView = SM;
D.OsTypes = Qi;
D.SmartTVView = PM;
D.TabletView = kM;
D.WearableView = jM;
D.WinPhoneView = EM;
D.browserName = Q6;
D.browserVersion = X6;
D.deviceDetect = V6;
D.deviceType = oM;
D.engineName = eM;
D.engineVersion = tM;
D.fullBrowserVersion = K6;
D.getSelectorsByUserAgent = gM;
D.getUA = nM;
D.isAndroid = oS;
D.isBrowser = iS;
D.isChrome = B6;
D.isChromium = $6;
D.isConsole = eS;
D.isDesktop = U6;
D.isEdge = rM;
D.isEdgeChromium = fM;
D.isElectron = cM;
D.isEmbedded = F6;
D.isFirefox = W6;
D.isIE = lS;
D.isIOS = sS;
D.isIOS13 = aM;
D.isIPad13 = sM;
D.isIPhone13 = lM;
D.isIPod13 = uM;
D.isLegacyEdge = dM;
D.isMIUI = hM;
D.isMacOs = mM;
var Yn = (D.isMobile = Uu);
D.isMobileOnly = nS;
D.isMobileSafari = z6;
D.isOpera = G6;
D.isSafari = H6;
D.isSamsungBrowser = vM;
D.isSmartTV = Zb;
D.isTablet = rS;
D.isWearable = tS;
D.isWinPhone = aS;
D.isWindows = pM;
D.isYandex = iM;
D.mobileModel = Z6;
D.mobileVendor = J6;
D.osName = q6;
D.osVersion = Y6;
D.parseUserAgent = Ia;
D.setUserAgent = N6;
D.useDeviceData = uS;
D.useDeviceSelectors = NM;
D.useMobileOrientation = _M;
D.withOrientationChange = AM;
const MM = () => {
    const e = H(Bm),
      t = 2,
      n = {
        hidden: { width: "0%", transition: { duration: t, ease: "circOut" } },
        visible: {
          width: Yn ? "500%" : "200%",
          transition: { duration: t, ease: "circOut" },
        },
      };
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx(kn, {
          mode: "sync",
          children:
            e === "player1"
              ? p.jsx(Z.div, {
                  className: "bg-player player1",
                  variants: n,
                  initial: "hidden",
                  animate: "visible",
                  exit: "hidden",
                })
              : null,
        }),
        p.jsx(kn, {
          mode: "sync",
          children:
            e === "player2"
              ? p.jsx(Z.div, {
                  className: "bg-player player2",
                  variants: n,
                  initial: "hidden",
                  animate: "visible",
                  exit: "hidden",
                })
              : null,
        }),
      ],
    });
  },
  RM = () =>
    p.jsx(Um, {
      classContain: "game-morpion",
      gameName: fr[1].name,
      desc: fr[1].desc,
      children: p.jsxs(zp, {
        store: p6,
        children: [p.jsx(f6, {}), p.jsx(m6, {}), p.jsx(MM, {})],
      }),
    }),
  ht = {
    EnnemyinitialSpeed: 5,
    EnnemyInitialPositionY: -50,
    EnnemyMinSize: 30,
    EnnemyMaxSize: 60,
    initialTimeBetweenTwoEnnemy: 1e3,
    augmentationSpeedEnnemyByLevel: 10,
    steplevel: 1,
    maxSpeedEnnemy: 130,
    percentAppearBonus: 10,
    bonusPoint: 10,
    sizeBonus: 15,
  },
  Xr = {
    statutRunner: "paused",
    score: 0,
    colisionPlayer: { left: 0, right: 0, top: 0, bottom: 0 },
    level: 1,
    speedAppearEnnemy: ht.initialTimeBetweenTwoEnnemy,
    bonusCatched: 0,
    bonusMissed: 0,
  },
  cS = Gr({
    name: "runner",
    initialState: Xr,
    reducers: {
      startGame(e) {
        (e.statutRunner = "started"),
          (e.level = Xr.level),
          (e.speedAppearEnnemy = Xr.speedAppearEnnemy);
      },
      restartGame(e) {
        (e.score = Xr.score),
          (e.level = Xr.level),
          (e.speedAppearEnnemy = Xr.speedAppearEnnemy),
          (e.bonusCatched = 0),
          (e.statutRunner = "started");
      },
      pauseGame(e) {
        e.statutRunner = "paused";
      },
      gameOver(e) {
        e.statutRunner = "gameover";
      },
      addScore(e) {
        e.score = e.score + 1;
      },
      changeColisonPlayer(e, t) {
        e.colisionPlayer = t.payload;
      },
      levelUp(e) {
        (e.level = e.level + 1),
          e.speedAppearEnnemy > ht.maxSpeedEnnemy &&
            (e.speedAppearEnnemy =
              e.speedAppearEnnemy - ht.augmentationSpeedEnnemyByLevel);
      },
      takeBonus(e) {
        (e.score = e.score + ht.bonusPoint), (e.bonusCatched += 1);
      },
      missBonus(e) {
        e.bonusMissed += 1;
      },
    },
  }),
  {
    startGame: LM,
    restartGame: IM,
    pauseGame: fS,
    gameOver: DM,
    addScore: VM,
    changeColisonPlayer: FM,
    levelUp: zM,
    takeBonus: $M,
    missBonus: UM,
  } = cS.actions,
  Da = (e) => e.runner.statutRunner,
  dS = (e) => e.runner.score,
  BM = (e) => e.runner.colisionPlayer,
  WM = (e) => e.runner.speedAppearEnnemy,
  pS = (e) => e.runner.bonusCatched,
  HM = (e) => e.runner.bonusMissed,
  GM = cS.reducer,
  YM = () => {
    const e = Ce(),
      t = H(Da);
    return p.jsx(p.Fragment, {
      children:
        t !== "paused" &&
        p.jsx("div", {
          className: "btn-pause",
          onClick: (n) => e(fS()),
          children: "Pause",
        }),
    });
  },
  qM = ({ index: e, destroy: t }) => {
    const n = document.querySelector(".container-jumper"),
      r = x.useRef(null),
      i = Ce(),
      [o, a] = x.useState(Math.random() * (95 - 5) + 5),
      [s, l] = x.useState(ht.EnnemyInitialPositionY),
      [u, c] = x.useState(!1),
      [d, f] = x.useState(
        Math.floor(
          Math.random() * (ht.EnnemyMaxSize - ht.EnnemyMinSize) +
            ht.EnnemyMinSize
        )
      ),
      [m, h] = x.useState(ht.EnnemyinitialSpeed),
      [v, b] = x.useState({ left: o, right: 0, top: 0, bottom: 0 }),
      [w, y] = x.useState("fall"),
      g = H(Da),
      S = H(BM);
    x.useEffect(() => {
      let E = [
        { chance: ht.percentAppearBonus, value: !0 },
        { chance: 100 - ht.percentAppearBonus, value: !1 },
      ];
      const C = 0,
        T = E.reduce(($, Y) => Y.chance + $, C);
      let L = 0,
        N = Math.floor(Math.random() * (T - L) + L),
        W = !1;
      for (let $ = 0; $ < E.length; $++) {
        const Y = E[$];
        if (((L += Y.chance), N < L)) {
          W = Y.value;
          break;
        }
      }
      c(W);
    }, []),
      x.useEffect(() => {
        let E;
        switch (w) {
          case "fall":
            E = setInterval(() => {
              k();
            }, 10);
            break;
          case "destruct":
            t(e);
            break;
        }
        return () => {
          clearInterval(E);
        };
      }, [w]);
    function k() {
      l((E) => E + m);
    }
    return (
      x.useEffect(() => {
        n &&
          n.clientHeight &&
          s >= n.clientHeight + 50 &&
          (y("destruct"), u && i(UM()));
      }, [s, n]),
      x.useEffect(() => {
        switch (g) {
          case "paused":
          case "gameover":
            y("pause");
            break;
          case "started":
            y("fall");
            break;
        }
      }, [g]),
      x.useEffect(() => {
        r &&
          r.current &&
          v.bottom >= S.top &&
          v.right >= S.left &&
          v.left <= S.right &&
          v.top <= S.bottom &&
          (u ? (i($M()), y("destruct")) : (y("touched"), i(DM())));
      }, [r, s, S]),
      x.useEffect(() => {
        if (r && r.current) {
          let E = {
            left: r.current.offsetLeft,
            right: r.current.offsetLeft + r.current.clientWidth,
            top: r.current.offsetTop,
            bottom: r.current.offsetTop + r.current.clientHeight,
          };
          b(E);
        }
      }, [r, o, s]),
      p.jsx("div", {
        className:
          "ennemy " +
          (w === "touched" ? "touched" : "") +
          " " +
          (u ? "bonus" : ""),
        ref: r,
        style: { top: s, left: o + "%", width: u ? ht.sizeBonus : d },
      })
    );
  },
  KM = () => {
    const e = Ce(),
      t = H(Da),
      n = H(WM),
      [r, i] = x.useState([]),
      [o, a] = x.useState(0);
    x.useEffect(() => {
      let u = setInterval(() => {
        t === "started" && s();
      }, n);
      return () => clearInterval(u);
    }, [r, t]);
    function s() {
      let u = [...r];
      u.push(o), a((c) => c + 1), i(u);
    }
    function l(u) {
      i((c) => c.filter((d) => d !== u)), e(VM());
    }
    return (
      x.useEffect(() => {
        t === "started" && i([]);
      }, [t]),
      p.jsx("div", {
        className: "container-ennemies",
        children: r.map((u, c) => p.jsx(qM, { index: u, destroy: l }, u)),
      })
    );
  },
  XM = () => {
    var m;
    const e = Ce(),
      t = x.useRef(null),
      n = H(Da),
      r = document.querySelector(".container-jumper"),
      i = (m = document.querySelector("body")) == null ? void 0 : m.clientWidth,
      [o, a] = x.useState(150);
    x.useState("stable"), x.useState(0);
    const [s, l] = x.useState(0),
      [u, c] = x.useState(null);
    function d(h) {
      if (i && r) {
        let v = 20,
          b = 0;
        (b = ((h.clientX - (v / 100) * i) / (i - (v / 100) * i)) * 100),
          a((b / 100) * (r == null ? void 0 : r.clientWidth));
      }
    }
    function f(h) {
      c(h.touches[0].clientX);
    }
    return (
      x.useEffect(() => {
        if (u && Yn) {
          let h = Math.floor(u - o) - 50,
            v = 1 + Math.abs(h / 200);
          h < 0 ? a((b) => b - v) : h > 0 && a((b) => b + v);
        }
      }, [u, o, Yn]),
      x.useEffect(() => {
        s && (o <= 0 ? a(0) : o >= s && a(s));
      }, [o]),
      x.useEffect(() => {
        if (t && t.current) {
          let h = 0,
            v = {
              left: t.current.offsetLeft - h,
              right: t.current.offsetLeft + t.current.clientWidth + h,
              top: t.current.offsetTop + 5 - h,
              bottom: t.current.offsetTop + t.current.clientHeight + h,
            };
          e(FM(v));
        }
      }, [t, o]),
      x.useEffect(() => {
        var h;
        r &&
          t &&
          t.current &&
          l(
            (r == null ? void 0 : r.clientWidth) -
              ((h = t.current) == null ? void 0 : h.clientWidth)
          );
      }, [t, r]),
      x.useEffect(
        () => (
          !Yn && n === "started" && window.addEventListener("mousemove", d),
          () => {
            window.removeEventListener("mousemove", d);
          }
        ),
        [r, o, n]
      ),
      x.useEffect(
        () => (
          Yn &&
            n === "started" &&
            (window.addEventListener("touchmove", f),
            window.addEventListener("touchend", (h) => {
              c(null);
            })),
          () => {
            window.removeEventListener("touchmove", f);
          }
        ),
        [o, u, n]
      ),
      p.jsx("div", {
        className: "space-drag",
        children: p.jsx(Z.div, {
          className: "player",
          ref: t,
          style: { left: o },
        }),
      })
    );
  },
  QM = () => {
    const e = H(dS),
      t = H(pS),
      n = T2(),
      r = Ce(),
      i = { y: [0, -10, 0], scale: [1, 2, 1] };
    return (
      x.useEffect(() => {
        Math.floor(e % ht.steplevel) === 0 && r(zM());
      }, [e]),
      x.useEffect(() => {
        n.start(i);
      }, [t]),
      p.jsx(Z.div, { className: "score", initial: !1, animate: n, children: e })
    );
  },
  JM = " ",
  ZM = "Escape",
  eR = () => {
    const e = Ce(),
      t = H(dS),
      n = H(pS),
      r = H(HM),
      i = H(Da);
    function o(u) {
      switch (u.key) {
        case JM:
          a();
          break;
        case ZM:
          l();
          break;
      }
    }
    function a() {
      e(LM());
    }
    function s(u) {
      u.target.id !== "share-btn" && e(IM());
    }
    function l() {
      e(fS());
    }
    return (
      x.useEffect(
        () => (
          window.addEventListener("keydown", o),
          () => {
            window.removeEventListener("keydown", o);
          }
        ),
        []
      ),
      p.jsxs(p.Fragment, {
        children: [
          i === "paused" &&
            p.jsxs("div", {
              className: "screen paused",
              onClick: a,
              children: [
                p.jsx("p", { className: "statut", children: "Pause" }),
                p.jsxs("p", {
                  className: "details",
                  children: [Yn ? "Touch " : "Press space ", " for start"],
                }),
              ],
            }),
          i === "gameover" &&
            p.jsxs("div", {
              className: "screen gameover",
              onClick: (u) => s(u),
              children: [
                p.jsx("p", { className: "statut", children: "GAME OVER" }),
                p.jsxs("p", {
                  className: "details",
                  children: [Yn ? "Touch " : "Press space ", " for restart"],
                }),
                p.jsx("div", {
                  className: "contain-infos-game",
                  children: p.jsxs("table", {
                    children: [
                      p.jsxs("tr", {
                        children: [
                          p.jsx("td", { children: "Score" }),
                          p.jsx("td", { children: t }),
                        ],
                      }),
                      p.jsxs("tr", {
                        children: [
                          p.jsx("td", { children: "Bonus attrapés " }),
                          p.jsx("td", { children: n }),
                        ],
                      }),
                      p.jsxs("tr", {
                        children: [
                          p.jsx("td", { children: "Bonus ratés " }),
                          p.jsx("td", { children: r }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
        ],
      })
    );
  },
  tR = Lm({ reducer: { runner: GM } }),
  nR = () =>
    p.jsx(Um, {
      classContain: "container-jumper",
      gameName: fr[0].name,
      desc: fr[0].desc,
      children: p.jsxs(zp, {
        store: tR,
        children: [
          p.jsx(eR, {}),
          p.jsx(KM, {}),
          p.jsx(XM, {}),
          p.jsx(QM, {}),
          Yn &&
            p.jsx("div", { className: "contain-btn", children: p.jsx(YM, {}) }),
        ],
      }),
    }),
  fr = [
    {
      name: "Runner",
      link: "/runner",
      color: "pink",
      component: p.jsx(nR, {}),
      visible: !0,
      desc: "Petit jeu d'adresse où le but est d'éviter les obstacles et d'attraper les bonus vert. Essayez d'aller le plus loin possible !",
    },
    {
      name: "Morpion",
      link: "morpion",
      component: p.jsx(RM, {}),
      visible: !0,
      desc: "Un simple jeu de morpion classique afin de revisiter les bases",
    },
    {
      name: "Hangman",
      link: "hangman",
      component: p.jsx(KN, {}),
      visible: !0,
      desc: "Le jeu du pendu, tout simplement : trouvez le mot secret en trouvant les lettres qui le composent. Attention, il y a un nombre d'erreur limité.",
    },
  ],
  rR = () =>
    p.jsxs(p.Fragment, {
      children: [
        p.jsx(mn, { children: p.jsx("title", { children: "Jeux" }) }),
        p.jsxs("div", {
          className: "gamepage otherpage",
          children: [
            p.jsx("h2", { className: "accent", children: "Jeux." }),
            p.jsx("p", {
              children:
                "Ici, vous trouverez quelques-uns des petits jeux que j'ai pu essayé de faire. Ceux sont surtout un entraînement mais ils sont utilisables.",
            }),
            p.jsx("ul", {
              children: fr.map((e) => {
                if (e.visible)
                  return p.jsx(BN, {
                    name: e.name,
                    link: e.link,
                    color: e.color,
                  });
              }),
            }),
          ],
        }),
      ],
    }),
  Qr = {
    1: { text: " ", choices: ["pro01", "account01", "idle01"] },
    2: {
      text: "Avec un ouija. Sinon, plus simplement, en cliquant ci-dessous :",
      choices: ["contact00", "retour01"],
    },
    200: {
      text: "Bienvenue à vous !",
      choices: ["mail01", "contact01", "retour01"],
    },
    201: {
      text: "Ah oui ! De ma part.<br/> Utilisez-les pour vous connecter puis allez sur votre profil. Vous trouverez ici les liens vers les projets qui vous concernent.",
      choices: ["connect01", "retour01"],
    },
    300: {
      text: "Voilà qui est fort agréable ! Connectez-vous donc !",
      choices: ["connect01", "works01", "contact02", "retour01"],
    },
    301: {
      text: "C'est bien simple ! Ils sont (ci-dessous)[#works] !",
      choices: ["works00", "games001", "retour01"],
    },
    302: {
      text: "Vers l'infini et au-delà !",
      choices: ["retour01"],
      action: "link",
      option: "#works",
    },
    303: {
      text: "Il m'arrive de m'entraîner à coder en faisant des petits jeux.",
      choices: ["games002", "retour01"],
      action: "games",
    },
    400: {
      text: "Parfait ! Ce site est aussi fait pour ça.",
      choices: ["works01", "contact01", "idle02", "retour01"],
    },
    401: {
      text: "Merci pour cette question ! Très bien et vous ?",
      choices: ["idle03", "idle04", "idle05"],
    },
    402: {
      text: "J'aime lire ça. Comment vous vous appelez ?",
      choices: ["ask_name", "retour01"],
    },
    403: {
      text: "Enchanté *$name*. Moi c'est Kévin du coup. Tu as un e-mail ?",
      choices: ["ask_email", "retour01"],
    },
    404: {
      text: "Merci beaucoup *$name* ! Je te contacterai aussi vite que possible !",
      choices: ["voir_works", "retour01"],
    },
    405: {
      text: "Ah bon ? Je ne peux pas trop aider d'ici. Je ne suis qu'un logiciel codé (je le rappelle).",
      choices: ["idle06"],
    },
    406: {
      text: "Mais peut-être que vous baladez sur mon site et y chercher les bidouilles cachées vous amusera",
      choices: ["idle07"],
    },
    407: {
      text: "Je sais bien, je sais bien ! Bonne visite à vous alors.",
      choices: ["take_gold", "retour01"],
    },
    408: {
      text: "Ah mince. Je ne vais pas pouvoir beaucoup aidé (je ne suis pas psy après tout), mais vous pouvez toujours me contacter ou vous baladez sur mon site",
      choices: ["idle07", "contact00", "retour01"],
    },
  },
  Jr = {
    retour01: { text: "Retour", accent: "light", to: 1 },
    pro01: { text: "Je suis un professionnel", to: 200 },
    mail01: { text: "J'ai reçu un e-mail avec des identifiants", to: 201 },
    connect01: {
      text: "Je me connecte",
      textconnect: "C'est bon ! Je le suis déjà",
      accent: "fort",
      to: "connect",
    },
    account01: { text: "J'ai un compte", to: 300 },
    idle01: { text: "Je me balade", accent: "fort", to: 400 },
    idle02: { text: "Comment allez-vous ?", to: 401 },
    idle03: { text: "Très bien !", to: 402 },
    idle04: { text: "Bof...", to: 405 },
    idle05: { text: "Pas très bien...", to: 408 },
    idle06: { text: "Moui c'est vrai...", to: 406 },
    idle07: { text: "Bonne idée !", to: 407 },
    works00: { text: "Y aller.", to: "works" },
    works01: { text: "Je veux voir vos travaux.", to: 301, accent: "fort" },
    games001: { text: "Je veux jouer à des jeux", to: 303, accent: "fort" },
    games002: { text: "Revoir les jeux", to: 303 },
    contact00: { text: "Contacter", accent: "fort", to: "contact" },
    contact01: { text: "Comment vous contacter ?", to: 2 },
    contact02: { text: "Je préfère vous contacter", to: "contact" },
    ask_name: { input: !0, name: "name", to: 403 },
    ask_email: { input: !0, name: "email", to: 404 },
    confirmform: { text: "Valider", accent: "fort", valid: !0 },
    bof01: { text: "Bof...", to: 12 },
    bof02: { text: "Bof...", to: 13 },
    take_gold: { text: "Merci !", to: "take_gold" },
  },
  iR = {
    initial: { opacity: 0, y: 100 },
    normal: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: 100 },
    hover: { y: -5 },
    tap: { scale: 0.9 },
  },
  oR = ({ message: e, onClick: t, setResultAsk: n }) => {
    const [r, i] = x.useState("");
    return p.jsx(p.Fragment, {
      children:
        e &&
        p.jsxs(Z.div, {
          className: "message " + e.accent,
          onClick: (o) => {
            if (e.valid) {
              let a = document.querySelector("#form_" + e.name);
              a[e.name].value &&
                a[e.name].value !== "" &&
                (n(e, e.name, a[e.name].value), i(""));
            } else e && e.to && !e.input && t(e.to);
          },
          variants: iR,
          initial: "initial",
          animate: "normal",
          exit: "exit",
          whileHover: "hover",
          whileTap: "tap",
          children: [
            e.text,
            e.input &&
              p.jsx("form", {
                id: "form_" + e.name,
                action: "",
                onSubmit: (o) => {
                  o.preventDefault(), n(e, e.name, r), i("");
                },
                children: p.jsx("input", {
                  type: "text",
                  name: e.name,
                  placeholder: "Votre réponse...",
                  value: r,
                  onChange: (o) => i(o.target.value),
                }),
              }),
          ],
        }),
    });
  },
  aR = () => {
    const [e, t] = x.useState(1),
      [n, r] = x.useState([]),
      [i, o] = x.useState(""),
      [a, s] = x.useState({}),
      l = sn(),
      u = Ce();
    x.useEffect(() => {
      c(e);
    }, []),
      x.useEffect(() => {
        let h = Qr[e].text;
        h && (h = f(Qr[e].text)), o(h);
      }, [e]);
    function c(h) {
      Number.isInteger(h)
        ? (r([]),
          setTimeout(() => {
            let v = [];
            Qr[h].choices.forEach((b) => {
              if (Jr[b] && (v.push(Jr[b]), Jr[b].input)) {
                let w = Jr.confirmform;
                (w.to = Jr[b].to), (w.name = Jr[b].name), v.push(w);
              }
            }),
              r(v),
              t(h),
              Qr[h].action && d(Qr[h].action, Qr[h].option);
          }, 300))
        : d(h);
    }
    function d(h, v = !1) {
      switch (h) {
        default:
          return;
        case "contact":
          l($r[1].link);
          break;
        case "works":
          l($r[5].link);
          break;
        case "games":
          l("/games");
          break;
        case "connect":
          u(__());
          break;
        case "take_gold":
          console.log("recup pièce");
          break;
        case "link":
          v && l(v);
          break;
      }
    }
    function f(h) {
      let v = /\((.+)\)\[(.+)\]/i;
      (h = h.replace(v, "<a href='$2'>$1</a>")),
        (v = /\*(.+)\*/i),
        (h = h.replace(v, "<em>$1</em>")),
        (v = /\$([a-z]+)./);
      let b = v.exec(h);
      return b && (h = h.replace("$" + b[1], a[b[1]])), h;
    }
    function m(h, v, b) {
      if (b && b !== "") {
        let w = Object.assign({}, a);
        (w[v] = b), s(w), c(h.to);
      }
    }
    return p.jsxs("div", {
      className: "container-multichoices",
      children: [
        p.jsx("p", {
          className: "container-response",
          dangerouslySetInnerHTML: { __html: i },
        }),
        p.jsx("div", {
          className: "container-bulles",
          children: p.jsx(kn, {
            children: n.map((h, v) =>
              p.jsx(
                Z.div,
                {
                  children: p.jsx(oR, {
                    message: h,
                    onClick: c,
                    setResultAsk: m,
                  }),
                },
                v
              )
            ),
          }),
        }),
      ],
    });
  },
  sR = {
    actif: { boxShadow: "0px 0px 40px #04D9C4" },
    normal: { boxShadow: "0px 0px 0px #04D9C4" },
  },
  lR = ({ actif: e }) =>
    p.jsxs("div", {
      className: "pins",
      children: [
        p.jsx(Z.div, {
          className: "inside",
          variants: sR,
          initial: !1,
          animate: e ? "actif" : "normal",
        }),
        p.jsx("div", { className: "border" }),
      ],
    }),
  _y = {
    actif: {
      y: [0, -10, 0, -8, 0],
      transition: { duration: 1, repeat: 1 / 0, repeatDelay: 0.2 },
    },
    normal: { transition: { duration: 1, repeat: 0, repeatDelay: 0.2 } },
    tap: {},
    hover: { y: -20 },
  },
  uR = ({ projet: e, actif: t }) => {
    const n = Ce();
    return p.jsx(p.Fragment, {
      children: p.jsxs(Z.div, {
        className: "contain-experience",
        variants: _y,
        whileHover: "hover",
        onClick: (r) => n(Dm(e)),
        children: [
          p.jsx(Z.span, {
            className: "date",
            variants: _y,
            animate: t ? "actif" : "normal",
            children: e.date,
          }),
          p.jsx(lR, { actif: t }),
          p.jsxs("div", {
            className: "container-text",
            children: [
              p.jsx("span", { className: "titre", children: e.titre }),
              p.jsx("span", { className: "type", children: e.type }),
            ],
          }),
        ],
      }),
    });
  },
  Ny = [
    {
      date: "2020-2021",
      titre: "Développeur web",
      type: "Alternance",
      lieu: "Toulouse - Annexx",
      desc: "Afin de terminer ma dernière année d'étude, j'ai rejoins l'école Icadémie dans son cursus de Développeur Web en alternance. Au sein de l'entreprise Annexx, j'ai été chargé de créer, corriger et améliorer les sites web. Entre l'alternance et l'école, j'ai pu apprendre le React, ainsi que Wordpress en profondeur.",
    },
    {
      date: "2019-2020",
      titre: "Graphiste",
      type: "Alternance",
      lieu: "Montauban - Pro à Pro",
      desc: "Au cours de mon bachelor 2 de webdesign chez Brassart, j'ai rejoint l'équipe de Pro à Pro afin de travailler sur leur communication visuelle. Au sein d'une équipe de quatre graphistes, j'ai tout particulièrement monté les catalogues de vente de produits alimentaires qui sortaient chaque mois. Entre temps, j'ai également pu participer à la création de certaines affiches internes, ainsi que travailler en partenariat avec le pôle web pour créer et réaliser les publications Instagram...",
    },
    {
      date: "2020",
      titre: "Designer Web (RNCP6)",
      type: "Formation",
      lieu: "Toulouse - Ecole Brassart",
      desc: "Durant mon bachelor, nous avons eu de nombreux cours dont le but était de nous préparer à devenir graphiste, webdesigner et chef de projets. Pour cela, nous avons donc vu de l'UX design, du graphisme, du webdesign, des cours d'HTML et JavaScript, du motion design ainsi que de la typographie...",
    },
    {
      date: "2016-2017",
      titre: "Mise en page jeunesse",
      type: "Auto-entrepreneur",
      lieu: "Toulouse",
      desc: "En tant que graphiste freelance, j'ai également eu l'occasion de travailler sur deux pages jeunesses, en partenariat avec Okidokid, une agence de conseil éditorial, et le Journal de l'île de la Réunion. Le but était de réutiliser des contenues d'ouvrages jeunesses édités afin de les adapter au format du journal. Ainsi, chaque semaine, le journal publiait deux pages de jeux ou de conseils.",
    },
    {
      date: "2016",
      titre: "Agence de création éditoriale",
      type: "Stage",
      lieu: "Toulouse - Okidokid",
      desc: "Au sein de mon master en édition imprimée et numérique, j'ai rejoint la petite, mais non moins talentueuse, équipe d'Okidokid. Leur travail est de conseiller, d'aider et de participer à la création d'ouvrage jeunesse pour des maisons d'édition. Nous avons donc conçu des projets éditoriaux, réalisé des documents graphiques, fait de la rédaction et de la relecture, tout en suivant le parcours du livre jeunesse.",
    },
    {
      date: "2015",
      titre: "Agence de Communication",
      type: "Stage",
      lieu: "Montauban - BMV Communication",
      desc: "Plus ancien, mais néanmoins important dans mon développement personnel et la relation que j'ai avec le graphisme aujourd'hui, j'ai travaillé avec l'équipe de BMV Communication, une agence de com', en tant que stagiaire. Durant deux mois, j'ai alors suivi des projets, participer à des tournages de vidéos, à des montages sur Première Pro, créé des affiches et des flyers...",
    },
    {
      date: "2014-2016",
      titre: "Master Edition",
      type: "Université",
      lieu: "Toulouse - Jean Jaurès",
      desc: "Si vous lisez encore jusque là, d'abord, merci pour l'intérêt que vous me portez. Ensuite, durant ce master, j'ai eu de nombreux cours autour du monde du livre, de la mise en page et du droit à l'image, mais j'y ai également découvert les bases du langage HTML et des bases de données ainsi que ma passion pour la programmation web.",
    },
    {
      date: "2014",
      titre: "Edition de livre",
      type: "Stage",
      lieu: "Toulouse - Presses Universitaire du Mirail",
      desc: "Durant ma licence de Lettres Modernes (que j'ai eu !), nous avons pu réaliser un stage de trois mois. Je l'ai fait au sein des Presses Universitaires du Midi où j'ai commencé à pratiquer la création graphique, la gestion de ressources numériques, ainsi que la recherche iconographique.",
    },
  ],
  cR = () => {
    const e = x.createRef(),
      [t, n] = x.useState(1),
      [r, i] = x.useState(0),
      [o, a] = x.useState([]);
    x.useEffect(() => {
      let c = Ny.sort(fR("date"));
      a(c);
    }, []);
    function s(c) {
      if (c <= 0) (c = 1), i(0);
      else if (c > Ny.length) (c = 1), i(0);
      else {
        let d = document.querySelectorAll(".contain-experience");
        if (c < t) {
          let f = d[c - 1];
          i((m) => m - (f.clientWidth + 100));
        } else {
          let f = d[c - 2];
          i((m) => m + (f.clientWidth + 100));
        }
      }
      n(c);
    }
    function l() {
      s(t + 1);
    }
    function u() {
      s(t - 1);
    }
    return p.jsxs("div", {
      className: "container-experiences",
      children: [
        p.jsxs(Z.div, {
          className: "slider no-visible-scroll",
          animate: { x: -r },
          ref: e,
          children: [
            o.map((c, d) => p.jsx(uR, { projet: c, actif: t - 1 === d }, d)),
            p.jsx("span", {
              id: "tobecontinued",
              children: "To be continued...",
            }),
          ],
        }),
        p.jsx("div", { className: "bg_ligne" }),
        p.jsx(Z.div, {
          className: "ico",
          onClick: l,
          whileHover: { x: 15 },
          whileTap: { scale: 0.8 },
          children: p.jsx(se, { icon: Bp }),
        }),
        p.jsx(kn, {
          children:
            t > 1 &&
            p.jsx(Z.div, {
              className: "ico left",
              onClick: u,
              whileHover: { x: -15 },
              whileTap: { scale: 0.8 },
              exit: { x: "200%", opacity: 0 },
              animate: { x: "0%", opacity: 1 },
              initial: { x: "200%", opacity: 0 },
              children: p.jsx(se, { icon: bw }),
            }),
        }),
      ],
    });
  };
function fR(e) {
  var t = 1;
  return (
    e[0] === "-" && ((t = -1), (e = e.substr(1))),
    function (n, r) {
      return t === -1 ? r[e].localeCompare(n[e]) : n[e].localeCompare(r[e]);
    }
  );
}
const dR = {
    open: {
      x: 0,
      opacity: 0.5,
      transition: { y: { stiffness: 1e3, velocity: -100 } },
    },
    closed: { x: 250, opacity: 0, transition: { y: { stiffness: 1e3 } } },
    exit: { x: -250, opacity: 0, transition: { y: { stiffness: 1e3 } } },
    actif: { opacity: 1, y: -10, x: 0 },
  },
  pR = ({ projet: e, actif: t, getTo: n, Key: r, visible: i }) => {
    const o = Ce();
    return p.jsxs(Z.div, {
      className: "work-card",
      variants: dR,
      initial: "closed",
      animate: t ? "actif" : "open",
      exit: "exit",
      whileHover: "actif",
      whileTap: { scale: 0.95 },
      onClick: (a) => {
        t ? o(Dm(e)) : n(r + 1);
      },
      children: [
        p.jsxs("div", {
          className: "container-text",
          children: [
            p.jsx("h4", { children: e.title }),
            p.jsxs("div", {
              className: "container-infos-sup",
              children: [
                p.jsx("span", { className: "date", children: e.date }),
                p.jsx("span", { className: "category", children: e.type }),
              ],
            }),
            p.jsx("div", {
              className: "container-desc",
              children: e.short_desc,
            }),
          ],
        }),
        p.jsx("div", {
          className: "container-img",
          children:
            i &&
            p.jsx(x.Suspense, {
              fallback: p.jsx("img", {}),
              children: p.jsx("img", {
                src:
                  {}.REACT_APP_API_USER +
                  (e.main_img !== null ? e.main_img : ""),
              }),
            }),
        }),
      ],
    });
  },
  mR = () => {
    const [e, t] = x.useState(1),
      [n, r] = x.useState(0),
      [i, o] = x.useState(0),
      { list: a } = zm({
        params: {
          filter: {
            in_homepage: !0,
            is_brouillon: 0,
            orderBy: "type",
            asc: "desc",
          },
        },
      });
    x.useEffect(() => {
      o(a.length);
    }, [a]);
    function s(c) {
      if (a) {
        if (c <= 0) (c = 1), r(0);
        else if (c > a.length) (c = 1), r(0);
        else {
          let d = document.querySelectorAll(".work-card"),
            f = 0;
          d.forEach((m, h) => {
            h >= c - 1 || (f = f + m.clientWidth);
          }),
            r((m) => f);
        }
        t(c);
      }
    }
    function l() {
      s(e + 1);
    }
    function u() {
      let c = e;
      return e > i && ((c = e % i), c === 0 ? (c = i) : (c = c)), c || 0;
    }
    return p.jsxs("div", {
      className: "liste-work-card",
      children: [
        p.jsx(Z.div, {
          className: "slider no-visible-scroll",
          animate: { x: -n },
          children:
            a == null
              ? void 0
              : a.map((c, d) =>
                  p.jsx(
                    pR,
                    {
                      projet: c,
                      actif: e === d + 1,
                      getTo: s,
                      Key: d,
                      visible: e + 3 > d,
                    },
                    d
                  )
                ),
        }),
        p.jsxs("div", {
          className: "container-summary-slides",
          onClick: l,
          children: [
            e &&
              p.jsx(Z.span, {
                initial: { opacity: 0 },
                animate: { opacity: 0.7 },
                exit: { opacity: 0, y: 200 },
                transition: {
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                },
                children: u(),
              }),
            p.jsx("span", { children: "/" }),
            p.jsx("span", { className: "max-slides", children: i }),
            p.jsx("div", {
              className: "ico",
              children: p.jsx(se, { icon: Bp }),
            }),
          ],
        }),
      ],
    });
  },
  hR = () =>
    p.jsxs(p.Fragment, {
      children: [
        p.jsxs("section", {
          children: [
            p.jsx("h2", { className: "accent", children: "Bonjour." }),
            p.jsx("p", {
              children:
                "Je m'appelle Kévin Soulhol. Je suis développeur web et graphiste.",
            }),
            p.jsxs("h2", {
              children: ["Que puis-je faire", p.jsx("br", {}), " pour vous ?"],
            }),
            p.jsx(aR, {}),
          ],
        }),
        p.jsxs("section", {
          id: "works",
          children: [
            p.jsxs("h3", {
              children: [
                "Des ",
                p.jsx("span", { className: "accent", children: "projets" }),
                " ",
                "par millier",
              ],
            }),
            p.jsxs("p", {
              className: "sous-paraph",
              children: [
                "Ci-dessous, vous pourrez découvrir quelques-uns des projets sur lesquels j'ai travaillé. Du graphisme, des sites web, un peu d'illustration...",
                p.jsx("br", {}),
                p.jsx(iP, {
                  to: $r[5].link,
                  children: "Cliquez ici, pour tous les voir.",
                }),
              ],
            }),
            p.jsx(mR, {}),
          ],
        }),
        p.jsxs("section", {
          children: [
            p.jsxs("h3", {
              children: [
                "Mon ",
                p.jsx("span", { className: "accent", children: "parcours" }),
                " ",
                "pro",
              ],
            }),
            p.jsx("p", {
              className: "sous-paraph",
              children:
                "Si mes expériences vous intéressent, les voici dans l'ordre chronologique.",
            }),
            p.jsx(cR, {}),
          ],
        }),
      ],
    }),
  vR = () => {
    const [e, t] = x.useState(!1),
      [n, r] = x.useState(0),
      { outils: i } = ub({ filter: { with_project: !0 } }),
      { list: o } = zm({
        params: {
          filter: { is_brouillon: !1, orderBy: "date", asc: "desc", outils: e },
        },
        refresh: n,
      }),
      a = Ce();
    function s(l) {
      t(l), r((u) => u + 1);
    }
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx(mn, { children: p.jsx("title", { children: "Travaux" }) }),
        p.jsxs("div", {
          className: "work-page otherpage",
          children: [
            p.jsx("h2", { className: "accent", children: "Travaux." }),
            p.jsx("p", {
              children:
                "Entre programation, illustration et graphisme, il y a un peu de tout. Ce sont des projets sur lesquels j'ai travaillé, soit durant ma scolarité, soit pour des clients, soit même pour mon propre plaisir.",
            }),
            p.jsxs("div", {
              className: "container-filter-tools",
              children: [
                p.jsx("div", {
                  className: "filter-outil" + (e ? "" : " select"),
                  onClick: () => s(!1),
                  children: p.jsx(se, { icon: cP }),
                }),
                i.map((l, u) =>
                  p.jsx(
                    "div",
                    {
                      className: "filter-outil" + (e === l.id ? " select" : ""),
                      onClick: () => s(l.id),
                      children: p.jsx("img", {
                        src:
                          {}.REACT_APP_API_USER +
                          "/uploads/" +
                          ((l == null ? void 0 : l.icon) ?? ""),
                        alt: l.name,
                      }),
                    },
                    u
                  )
                ),
              ],
            }),
            p.jsx("div", {
              className: "contain-list-work",
              children:
                o == null
                  ? void 0
                  : o.map((l, u) =>
                      p.jsxs(
                        "div",
                        {
                          className: "work-elem",
                          onClick: (c) => {
                            a(Dm(l));
                          },
                          children: [
                            p.jsx("div", {
                              className: "bg",
                              children: p.jsx(gR, {
                                path: {}.REACT_APP_API_USER + l.main_img,
                              }),
                            }),
                            p.jsxs("div", {
                              className: "texts",
                              children: [
                                p.jsx("div", {
                                  className: "title",
                                  children: l.title,
                                }),
                                p.jsxs("div", {
                                  className: "date",
                                  children: [l.date, " - ", l.type],
                                }),
                                p.jsx("div", {
                                  className: "desc",
                                  children: l.short_desc,
                                }),
                              ],
                            }),
                          ],
                        },
                        u
                      )
                    ),
            }),
          ],
        }),
        p.jsx(V2, {}),
      ],
    });
  },
  gR = ({ path: e }) => p.jsx("img", { src: e, alt: "" }),
  $r = [
    {
      link: "/",
      authRequired: !1,
      elemReact: p.jsx(hR, {}),
      inMenu: !0,
      text: "Accueil",
      icon: wP,
    },
    {
      link: "/contacts",
      authRequired: !1,
      elemReact: p.jsx(UN, {}),
      inMenu: !0,
      text: "Contacts",
      icon: Sw,
    },
    { link: "/games", authRequired: !1, elemReact: p.jsx(rR, {}) },
    { link: "/dashboard", authRequired: !0, elemReact: p.jsx($N, {}) },
    { link: "/add", authRequired: !0, elemReact: p.jsx(AN, {}) },
    {
      link: "/works",
      authRequired: !1,
      elemReact: p.jsx(vR, {}),
      inMenu: !1,
      text: "Travaux",
      icon: dP,
    },
    { link: "/adduser", authRequired: !0, elemReact: p.jsx(RN, {}) },
  ],
  yR = () => {
    const e = H(Vu);
    let t = $r.filter((n) => n.inMenu === !0);
    return p.jsxs("div", {
      className: "menu",
      children: [
        p.jsxs("ul", {
          children: [
            t.map((n, r) => p.jsx(My, { ...n }, r)),
            p.jsx(My, {
              icon: mP,
              text: e ? e.prenom + " " + e.nom : "Se connecter",
              toDo: e ? "dashboard" : "login",
            }),
          ],
        }),
        p.jsx(vN, {}),
      ],
    });
  },
  My = ({ clickFunction: e, icon: t = sP, text: n = "", link: r, toDo: i }) => {
    const o = yN("MenuClick"),
      a = Ce(),
      s = sn(),
      l = H(Vu),
      u = H($2);
    function c() {
      r && (s(r), o(r)),
        i &&
          (i === "login" && (a(N_()), o("login")),
          i === "dashboard" && (s("/dashboard"), o("dashboard"))),
        e && e();
    }
    return p.jsx("li", {
      className:
        i === "dashboard" ? "menu-item container-connect-session" : "menu-item",
      onClick: c,
      children: p.jsxs("a", {
        children: [
          p.jsx("div", {
            className: "icon",
            children:
              i === "dashboard" && u ? p.jsx(H2, {}) : p.jsx(se, { icon: t }),
          }),
          p.jsxs("div", {
            className: "container-text",
            children: [
              p.jsx("span", { children: n }),
              i === "dashboard" && p.jsx("span", { children: l.email }),
            ],
          }),
        ],
      }),
    });
  },
  wR = [
    {
      id: "trone_glace",
      name: "Ner'zhul",
      img: "world_trone_glace2_2.gif",
      position: { right: "-12px", top: "54px" },
      action: { name: "talk", details: "Le froid est mon royaume..." },
    },
    {
      id: "ship",
      name: "Navire",
      img: "ship.png",
      position: { left: "10px", top: "1330px", height: "255px", width: "auto" },
      action: { name: "talk", details: "Vroum, vroum..." },
    },
  ],
  xR = {
    title: "dev",
    text: "Je ne crois pas que vous devriez lire ça...",
    opened: !1,
  },
  mS = Gr({
    name: "conversation",
    initialState: xR,
    reducers: {
      changeConv: (e, t) => {
        (e.title = t.payload.title), (e.text = t.payload.text), (e.opened = !0);
      },
      closeConv: (e) => {
        e.opened = !1;
      },
    },
  }),
  bR = (e) => e.conversation.opened,
  SR = (e) => e.conversation.title,
  kR = (e) => e.conversation.text,
  { changeConv: ER, closeConv: CR } = mS.actions,
  PR = mS.reducer,
  TR = {
    closed: { y: 150 },
    opened: { y: 0, transition: { delay: 0, staggerChildren: 0.03 } },
  },
  jR = { closed: { opacity: 0 }, opened: { opacity: 1 } },
  OR = () => {
    const e = H(bR),
      t = H(SR),
      n = H(kR);
    return p.jsx("div", {
      className: "container-conversation",
      children: p.jsx(kn, {
        children:
          e &&
          p.jsxs(Z.div, {
            className: "conversation",
            variants: TR,
            initial: "closed",
            animate: "opened",
            exit: "closed",
            children: [
              p.jsxs("span", { className: "name", children: [t, " :"] }),
              p.jsx(AR, { text: n }),
            ],
          }),
      }),
    });
  },
  AR = ({ text: e }) =>
    p.jsx("div", {
      children:
        e &&
        e
          .split("")
          .map((t, n) => p.jsx(Z.span, { variants: jR, children: t }, n)),
    }),
  _R = 100,
  Ry = 5e3,
  NR = ({ elem: e }) => {
    const t = sn(),
      n = Ce();
    function r() {
      if (e.action)
        switch (e.action.name) {
          default:
            break;
          case "talk":
            n(ER({ title: e.name, text: e.action.details }));
            let i = e.action.details.length * _R;
            setTimeout(
              () => {
                n(CR());
              },
              i < Ry ? Ry : i
            );
            break;
          case "play":
            t(e.action.details);
            break;
        }
    }
    return p.jsx("div", {
      className: "element",
      style: e.position,
      onClick: r,
      children: p.jsx("img", { src: "/imgs/" + e.img, alt: "" }),
    });
  };
function MR() {
  const [e, t] = x.useState(100),
    n = x.useCallback((r) => {
      r !== null &&
        setTimeout(() => {
          t(r.width ?? 100);
        }, 200);
    }, []);
  return { rect: e, ref: n };
}
const RR = () => {
    const { ref: e } = MR();
    return p.jsxs("div", {
      className: "container-side-illustration",
      children: [
        p.jsx(x.Suspense, {
          fallback: p.jsx("div", {}),
          children: wR.map((t, n) => p.jsx(NR, { elem: t }, n)),
        }),
        p.jsx(OR, {}),
        p.jsx(x.Suspense, {
          fallback: p.jsx("div", {}),
          children: p.jsx("img", {
            src: "/imgs/world.png",
            alt: "main-illustration",
            ref: e,
          }),
        }),
      ],
    });
  },
  Hc = ({ openedPage: e }) => (
    x.useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [e]),
    p.jsxs(p.Fragment, {
      children: [
        p.jsxs(mn, {
          children: [
            p.jsx("title", { children: "Home" }),
            p.jsx("meta", {
              name: "description",
              content:
                "Mi-developpeur, mi-graphiste, et re-mi-developpeur derrière, je suis capable de produire un site internet d'un bout à l'autre. Réfléchir à son graphisme, à son UX, à son ambiance, mais aussi écrire son code, son back, et gérer sa mise en ligne.",
            }),
          ],
        }),
        p.jsxs("div", {
          className: "page home",
          children: [
            p.jsx(RR, {}),
            p.jsx("div", {
              className: "container-main-page no-visible-scroll",
              children: p.jsx(LR, { openedPage: e }),
            }),
          ],
        }),
      ],
    })
  ),
  LR = ({ openedPage: e }) => {
    const t = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    };
    function n(r) {
      let i = null;
      return (
        $r.map((o) => {
          o.link === r && (i = o.elemReact);
        }),
        p.jsx(
          Z.div,
          {
            className: "motion",
            variants: t,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            children: i,
          },
          r
        )
      );
    }
    return p.jsxs(kn, { children: [p.jsx(yR, {}), n(e)] });
  },
  IR = {
    "@context": "https://schema.org",
    "@type": "Kevin Soulhol",
    url: "https://www.kevin-soulhol.fr/",
    logo: "https://www.kevin-soulhol.fr/logo.png",
  },
  DR = () => {
    const e = H(xN),
      t = H(bN),
      n = H(SN),
      r = H(kN),
      i = H(EN),
      o = H(CN),
      a = Ce();
    function s() {
      a(Ey()), o && o();
    }
    function l() {
      a(Ey(!1));
    }
    function u() {
      a(wN());
    }
    return p.jsx(p.Fragment, {
      children:
        e &&
        p.jsx("div", {
          className: "screen-confirm",
          children: p.jsxs("div", {
            className: "contain-confirm",
            children: [
              p.jsx("div", {
                className: "contain-close",
                onClick: u,
                children: p.jsx(se, { icon: Wp }),
              }),
              p.jsxs("div", {
                className: "text",
                children: [
                  t !== "" && p.jsx("h3", { children: t }),
                  n !== "" && p.jsx("p", { children: n }),
                ],
              }),
              p.jsxs("div", {
                className: "contain-btns",
                children: [
                  p.jsx("button", {
                    className: "btn accept-btn",
                    onClick: s,
                    children: r,
                  }),
                  p.jsx("button", {
                    className: "btn cancel-btn",
                    onClick: l,
                    children: i,
                  }),
                ],
              }),
            ],
          }),
        }),
    });
  };
$u.initialize(gN, { debug: !1, titleCase: !1 });
function VR() {
  return (
    cb(),
    x.useEffect(() => {
      $u.pageview(window.location.pathname + window.location.search);
    }, []),
    p.jsxs(rP, {
      children: [
        p.jsx(mn, {
          titleTemplate: "%s | Kevin Soulhol",
          defaultTitle: "Kevin Soulhol",
          htmlAttributes: { lang: "fr" },
          children: p.jsx("link", {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/logo.png",
          }),
        }),
        p.jsx("script", {
          type: "application/ld+json",
          children: JSON.stringify(IR),
        }),
        p.jsx(DR, {}),
        p.jsx(V2, {}),
        p.jsxs(JC, {
          children: [
            $r.map((e) =>
              p.jsx(
                Rs,
                {
                  path: "/" + e.link,
                  element: e.authRequired
                    ? p.jsx(FR, { children: p.jsx(Hc, { openedPage: e.link }) })
                    : p.jsx(Hc, { openedPage: e.link }),
                },
                e.link
              )
            ),
            p.jsx(Rs, {
              path: "/",
              element: p.jsx(Hc, { openedPage: "home" }),
            }),
            fr.map((e, t) =>
              p.jsx(Rs, { path: e.link, element: e.component }, t)
            ),
          ],
        }),
      ],
    })
  );
}
function FR({ children: e }) {
  return H(Vu) ? e : p.jsx(XC, { to: "/", replace: !0 });
}
const zR = "modulepreload",
  $R = function (e) {
    return "/" + e;
  },
  Ly = {},
  UR = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const i = document.getElementsByTagName("link");
    return Promise.all(
      n.map((o) => {
        if (((o = $R(o)), o in Ly)) return;
        Ly[o] = !0;
        const a = o.endsWith(".css"),
          s = a ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let c = i.length - 1; c >= 0; c--) {
            const d = i[c];
            if (d.href === o && (!a || d.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${o}"]${s}`)) return;
        const u = document.createElement("link");
        if (
          ((u.rel = a ? "stylesheet" : zR),
          a || ((u.as = "script"), (u.crossOrigin = "")),
          (u.href = o),
          document.head.appendChild(u),
          a)
        )
          return new Promise((c, d) => {
            u.addEventListener("load", c),
              u.addEventListener("error", () =>
                d(new Error(`Unable to preload CSS for ${o}`))
              );
          });
      })
    ).then(() => t());
  },
  BR = (e) => {
    e &&
      e instanceof Function &&
      UR(() => import("./web-vitals-60d3425a.js"), []).then(
        ({ getCLS: t, getFID: n, getFCP: r, getLCP: i, getTTFB: o }) => {
          t(e), n(e), r(e), i(e), o(e);
        }
      );
  },
  WR = Lm({
    reducer: { app: I_, popup: O_, confirm: PN, login: R_, conversation: PR },
  });
const HR = Yc.createRoot(document.getElementById("root"));
HR.render(
  p.jsx(zp, {
    store: WR,
    children: p.jsx(di, {
      children: p.jsx(Re.StrictMode, { children: p.jsx(VR, {}) }),
    }),
  })
);
BR();
