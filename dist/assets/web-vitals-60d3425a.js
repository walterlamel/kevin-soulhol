var m,
  l,
  C,
  T,
  f = function (t, e) {
    return {
      name: t,
      value: e === void 0 ? -1 : e,
      delta: 0,
      entries: [],
      id: "v2-"
        .concat(Date.now(), "-")
        .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
    };
  },
  h = function (t, e) {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(t)) {
        if (t === "first-input" && !("PerformanceEventTiming" in self)) return;
        var i = new PerformanceObserver(function (a) {
          return a.getEntries().map(e);
        });
        return i.observe({ type: t, buffered: !0 }), i;
      }
    } catch {}
  },
  y = function (t, e) {
    var i = function a(n) {
      (n.type !== "pagehide" && document.visibilityState !== "hidden") ||
        (t(n),
        e &&
          (removeEventListener("visibilitychange", a, !0),
          removeEventListener("pagehide", a, !0)));
    };
    addEventListener("visibilitychange", i, !0),
      addEventListener("pagehide", i, !0);
  },
  g = function (t) {
    addEventListener(
      "pageshow",
      function (e) {
        e.persisted && t(e);
      },
      !0
    );
  },
  v = function (t, e, i) {
    var a;
    return function (n) {
      e.value >= 0 &&
        (n || i) &&
        ((e.delta = e.value - (a || 0)),
        (e.delta || a === void 0) && ((a = e.value), t(e)));
    };
  },
  p = -1,
  w = function () {
    return document.visibilityState === "hidden" ? 0 : 1 / 0;
  },
  F = function () {
    y(function (t) {
      var e = t.timeStamp;
      p = e;
    }, !0);
  },
  S = function () {
    return (
      p < 0 &&
        ((p = w()),
        F(),
        g(function () {
          setTimeout(function () {
            (p = w()), F();
          }, 0);
        })),
      {
        get firstHiddenTime() {
          return p;
        },
      }
    );
  },
  A = function (t, e) {
    var i,
      a = S(),
      n = f("FCP"),
      o = function (c) {
        c.name === "first-contentful-paint" &&
          (u && u.disconnect(),
          c.startTime < a.firstHiddenTime &&
            ((n.value = c.startTime), n.entries.push(c), i(!0)));
      },
      r =
        window.performance &&
        performance.getEntriesByName &&
        performance.getEntriesByName("first-contentful-paint")[0],
      u = r ? null : h("paint", o);
    (r || u) &&
      ((i = v(t, n, e)),
      r && o(r),
      g(function (c) {
        (n = f("FCP")),
          (i = v(t, n, e)),
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              (n.value = performance.now() - c.timeStamp), i(!0);
            });
          });
      }));
  },
  b = !1,
  E = -1,
  R = function (t, e) {
    b ||
      (A(function (s) {
        E = s.value;
      }),
      (b = !0));
    var i,
      a = function (s) {
        E > -1 && t(s);
      },
      n = f("CLS", 0),
      o = 0,
      r = [],
      u = function (s) {
        if (!s.hadRecentInput) {
          var B = r[0],
            q = r[r.length - 1];
          o &&
          s.startTime - q.startTime < 1e3 &&
          s.startTime - B.startTime < 5e3
            ? ((o += s.value), r.push(s))
            : ((o = s.value), (r = [s])),
            o > n.value && ((n.value = o), (n.entries = r), i());
        }
      },
      c = h("layout-shift", u);
    c &&
      ((i = v(a, n, e)),
      y(function () {
        c.takeRecords().map(u), i(!0);
      }),
      g(function () {
        (o = 0), (E = -1), (n = f("CLS", 0)), (i = v(a, n, e));
      }));
  },
  d = { passive: !0, capture: !0 },
  H = new Date(),
  P = function (t, e) {
    m || ((m = e), (l = t), (C = new Date()), k(removeEventListener), D());
  },
  D = function () {
    if (l >= 0 && l < C - H) {
      var t = {
        entryType: "first-input",
        name: m.type,
        target: m.target,
        cancelable: m.cancelable,
        startTime: m.timeStamp,
        processingStart: m.timeStamp + l,
      };
      T.forEach(function (e) {
        e(t);
      }),
        (T = []);
    }
  },
  I = function (t) {
    if (t.cancelable) {
      var e =
        (t.timeStamp > 1e12 ? new Date() : performance.now()) - t.timeStamp;
      t.type == "pointerdown"
        ? (function (i, a) {
            var n = function () {
                P(i, a), r();
              },
              o = function () {
                r();
              },
              r = function () {
                removeEventListener("pointerup", n, d),
                  removeEventListener("pointercancel", o, d);
              };
            addEventListener("pointerup", n, d),
              addEventListener("pointercancel", o, d);
          })(e, t)
        : P(e, t);
    }
  },
  k = function (t) {
    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (e) {
      return t(e, I, d);
    });
  },
  M = function (t, e) {
    var i,
      a = S(),
      n = f("FID"),
      o = function (u) {
        u.startTime < a.firstHiddenTime &&
          ((n.value = u.processingStart - u.startTime),
          n.entries.push(u),
          i(!0));
      },
      r = h("first-input", o);
    (i = v(t, n, e)),
      r &&
        y(function () {
          r.takeRecords().map(o), r.disconnect();
        }, !0),
      r &&
        g(function () {
          var u;
          (n = f("FID")),
            (i = v(t, n, e)),
            (T = []),
            (l = -1),
            (m = null),
            k(addEventListener),
            (u = o),
            T.push(u),
            D();
        });
  },
  L = {},
  N = function (t, e) {
    var i,
      a = S(),
      n = f("LCP"),
      o = function (c) {
        var s = c.startTime;
        s < a.firstHiddenTime && ((n.value = s), n.entries.push(c), i());
      },
      r = h("largest-contentful-paint", o);
    if (r) {
      i = v(t, n, e);
      var u = function () {
        L[n.id] ||
          (r.takeRecords().map(o), r.disconnect(), (L[n.id] = !0), i(!0));
      };
      ["keydown", "click"].forEach(function (c) {
        addEventListener(c, u, { once: !0, capture: !0 });
      }),
        y(u, !0),
        g(function (c) {
          (n = f("LCP")),
            (i = v(t, n, e)),
            requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                (n.value = performance.now() - c.timeStamp),
                  (L[n.id] = !0),
                  i(!0);
              });
            });
        });
    }
  },
  O = function (t) {
    var e,
      i = f("TTFB");
    (e = function () {
      try {
        var a =
          performance.getEntriesByType("navigation")[0] ||
          (function () {
            var n = performance.timing,
              o = { entryType: "navigation", startTime: 0 };
            for (var r in n)
              r !== "navigationStart" &&
                r !== "toJSON" &&
                (o[r] = Math.max(n[r] - n.navigationStart, 0));
            return o;
          })();
        if (
          ((i.value = i.delta = a.responseStart),
          i.value < 0 || i.value > performance.now())
        )
          return;
        (i.entries = [a]), t(i);
      } catch {}
    }),
      document.readyState === "complete"
        ? setTimeout(e, 0)
        : addEventListener("load", function () {
            return setTimeout(e, 0);
          });
  };
export { R as getCLS, A as getFCP, M as getFID, N as getLCP, O as getTTFB };
