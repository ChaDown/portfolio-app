import {
  __toESM,
  require_react
} from "./chunk-QSQYAWSL.js";

// node_modules/react-type-animation/dist/esm/index.es.js
var import_react = __toESM(require_react());
function a(e2, t2, n2, r2) {
  return new (n2 || (n2 = Promise))(function(o2, a2) {
    function u2(e3) {
      try {
        i2(r2.next(e3));
      } catch (e4) {
        a2(e4);
      }
    }
    function c2(e3) {
      try {
        i2(r2.throw(e3));
      } catch (e4) {
        a2(e4);
      }
    }
    function i2(e3) {
      var t3;
      e3.done ? o2(e3.value) : (t3 = e3.value, t3 instanceof n2 ? t3 : new n2(function(e4) {
        e4(t3);
      })).then(u2, c2);
    }
    i2((r2 = r2.apply(e2, t2 || [])).next());
  });
}
function u(e2, t2) {
  var n2, r2, o2, a2, u2 = { label: 0, sent: function() {
    if (1 & o2[0])
      throw o2[1];
    return o2[1];
  }, trys: [], ops: [] };
  return a2 = { next: c2(0), throw: c2(1), return: c2(2) }, "function" == typeof Symbol && (a2[Symbol.iterator] = function() {
    return this;
  }), a2;
  function c2(a3) {
    return function(c3) {
      return function(a4) {
        if (n2)
          throw new TypeError("Generator is already executing.");
        for (; u2; )
          try {
            if (n2 = 1, r2 && (o2 = 2 & a4[0] ? r2.return : a4[0] ? r2.throw || ((o2 = r2.return) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, a4[1])).done)
              return o2;
            switch (r2 = 0, o2 && (a4 = [2 & a4[0], o2.value]), a4[0]) {
              case 0:
              case 1:
                o2 = a4;
                break;
              case 4:
                return u2.label++, { value: a4[1], done: false };
              case 5:
                u2.label++, r2 = a4[1], a4 = [0];
                continue;
              case 7:
                a4 = u2.ops.pop(), u2.trys.pop();
                continue;
              default:
                if (!(o2 = u2.trys, (o2 = o2.length > 0 && o2[o2.length - 1]) || 6 !== a4[0] && 2 !== a4[0])) {
                  u2 = 0;
                  continue;
                }
                if (3 === a4[0] && (!o2 || a4[1] > o2[0] && a4[1] < o2[3])) {
                  u2.label = a4[1];
                  break;
                }
                if (6 === a4[0] && u2.label < o2[1]) {
                  u2.label = o2[1], o2 = a4;
                  break;
                }
                if (o2 && u2.label < o2[2]) {
                  u2.label = o2[2], u2.ops.push(a4);
                  break;
                }
                o2[2] && u2.ops.pop(), u2.trys.pop();
                continue;
            }
            a4 = t2.call(e2, u2);
          } catch (e3) {
            a4 = [6, e3], r2 = 0;
          } finally {
            n2 = o2 = 0;
          }
        if (5 & a4[0])
          throw a4[1];
        return { value: a4[0] ? a4[1] : void 0, done: true };
      }([a3, c3]);
    };
  }
}
function c(e2) {
  var t2 = "function" == typeof Symbol && Symbol.iterator, n2 = t2 && e2[t2], r2 = 0;
  if (n2)
    return n2.call(e2);
  if (e2 && "number" == typeof e2.length)
    return { next: function() {
      return e2 && r2 >= e2.length && (e2 = void 0), { value: e2 && e2[r2++], done: !e2 };
    } };
  throw new TypeError(t2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function i(e2, t2) {
  var n2 = "function" == typeof Symbol && e2[Symbol.iterator];
  if (!n2)
    return e2;
  var r2, o2, a2 = n2.call(e2), u2 = [];
  try {
    for (; (void 0 === t2 || t2-- > 0) && !(r2 = a2.next()).done; )
      u2.push(r2.value);
  } catch (e3) {
    o2 = { error: e3 };
  } finally {
    try {
      r2 && !r2.done && (n2 = a2.return) && n2.call(a2);
    } finally {
      if (o2)
        throw o2.error;
    }
  }
  return u2;
}
function l(e2, t2, n2) {
  if (n2 || 2 === arguments.length)
    for (var r2, o2 = 0, a2 = t2.length; o2 < a2; o2++)
      !r2 && o2 in t2 || (r2 || (r2 = Array.prototype.slice.call(t2, 0, o2)), r2[o2] = t2[o2]);
  return e2.concat(r2 || Array.prototype.slice.call(t2));
}
function s(e2, t2, n2, r2) {
  for (var o2 = [], s2 = 4; s2 < arguments.length; s2++)
    o2[s2 - 4] = arguments[s2];
  return a(this, void 0, void 0, function() {
    var a2, s3, h2, p2, y2, v2;
    return u(this, function(u2) {
      switch (u2.label) {
        case 0:
          u2.trys.push([0, 12, 13, 14]), a2 = c(o2), s3 = a2.next(), u2.label = 1;
        case 1:
          if (s3.done)
            return [3, 11];
          switch (h2 = s3.value, typeof h2) {
            case "string":
              return [3, 2];
            case "number":
              return [3, 4];
            case "function":
              return [3, 6];
          }
          return [3, 8];
        case 2:
          return [4, f(e2, h2, t2, n2, r2)];
        case 3:
          return u2.sent(), [3, 10];
        case 4:
          return [4, d(h2)];
        case 5:
          return u2.sent(), [3, 10];
        case 6:
          return [4, h2.apply(void 0, l([e2, t2, n2, r2], i(o2), false))];
        case 7:
          return u2.sent(), [3, 10];
        case 8:
          return [4, h2];
        case 9:
          u2.sent(), u2.label = 10;
        case 10:
          return s3 = a2.next(), [3, 1];
        case 11:
          return [3, 14];
        case 12:
          return p2 = u2.sent(), y2 = { error: p2 }, [3, 14];
        case 13:
          try {
            s3 && !s3.done && (v2 = a2.return) && v2.call(a2);
          } finally {
            if (y2)
              throw y2.error;
          }
          return [7];
        case 14:
          return [2];
      }
    });
  });
}
function f(e2, t2, n2, r2, o2) {
  return a(this, void 0, void 0, function() {
    var a2;
    return u(this, function(u2) {
      switch (u2.label) {
        case 0:
          return a2 = function(e3, t3) {
            var n3 = i(t3).slice(0);
            return l(l([], i(e3), false), [NaN], false).findIndex(function(e4, t4) {
              return n3[t4] !== e4;
            });
          }(e2.textContent, t2), [4, h(e2, l(l([], i(y(e2.textContent, a2)), false), i(p(t2, a2)), false), n2, r2, o2)];
        case 1:
          return u2.sent(), [2];
      }
    });
  });
}
function d(e2) {
  return a(this, void 0, void 0, function() {
    return u(this, function(t2) {
      switch (t2.label) {
        case 0:
          return [4, new Promise(function(t3) {
            return setTimeout(t3, e2);
          })];
        case 1:
          return t2.sent(), [2];
      }
    });
  });
}
function h(e2, t2, n2, r2, o2) {
  return a(this, void 0, void 0, function() {
    var a2, i2, l2, s2, f2, h2, p2, y2, v2, b2, m, w;
    return u(this, function(x) {
      switch (x.label) {
        case 0:
          if (a2 = t2, o2) {
            for (i2 = 0, l2 = 1; l2 < t2.length; l2++)
              if (s2 = t2[l2 - 1], (f2 = t2[l2]).length > s2.length || "" === f2) {
                i2 = l2;
                break;
              }
            a2 = t2.slice(i2, t2.length);
          }
          x.label = 1;
        case 1:
          x.trys.push([1, 6, 7, 8]), h2 = c(function(e3) {
            var t3, n3, r3, o3, a3, i3, l3;
            return u(this, function(s3) {
              switch (s3.label) {
                case 0:
                  t3 = function(e4) {
                    return u(this, function(t4) {
                      switch (t4.label) {
                        case 0:
                          return [4, { op: function(t5) {
                            return requestAnimationFrame(function() {
                              return t5.textContent = e4;
                            });
                          }, opCode: function(t5) {
                            return "" === e4 || t5.textContent.length > e4.length ? "DELETE" : "WRITING";
                          } }];
                        case 1:
                          return t4.sent(), [2];
                      }
                    });
                  }, s3.label = 1;
                case 1:
                  s3.trys.push([1, 6, 7, 8]), n3 = c(e3), r3 = n3.next(), s3.label = 2;
                case 2:
                  return r3.done ? [3, 5] : (o3 = r3.value, [5, t3(o3)]);
                case 3:
                  s3.sent(), s3.label = 4;
                case 4:
                  return r3 = n3.next(), [3, 2];
                case 5:
                  return [3, 8];
                case 6:
                  return a3 = s3.sent(), i3 = { error: a3 }, [3, 8];
                case 7:
                  try {
                    r3 && !r3.done && (l3 = n3.return) && l3.call(n3);
                  } finally {
                    if (i3)
                      throw i3.error;
                  }
                  return [7];
                case 8:
                  return [2];
              }
            });
          }(a2)), p2 = h2.next(), x.label = 2;
        case 2:
          return p2.done ? [3, 5] : (y2 = p2.value, v2 = "WRITING" === y2.opCode(e2) ? n2 + n2 * (Math.random() - 0.5) : r2 + r2 * (Math.random() - 0.5), y2.op(e2), [4, d(v2)]);
        case 3:
          x.sent(), x.label = 4;
        case 4:
          return p2 = h2.next(), [3, 2];
        case 5:
          return [3, 8];
        case 6:
          return b2 = x.sent(), m = { error: b2 }, [3, 8];
        case 7:
          try {
            p2 && !p2.done && (w = h2.return) && w.call(h2);
          } finally {
            if (m)
              throw m.error;
          }
          return [7];
        case 8:
          return [2];
      }
    });
  });
}
function p(e2, t2, n2) {
  var r2 = i(e2).slice(0);
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = r2.length), u(this, function(e3) {
    switch (e3.label) {
      case 0:
        return t2 < n2 ? [4, r2.slice(0, ++t2).join("")] : [3, 2];
      case 1:
        return e3.sent(), [3, 0];
      case 2:
        return [2];
    }
  });
}
function y(e2, t2, n2) {
  var r2 = i(e2).slice(0);
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = r2.length), u(this, function(e3) {
    switch (e3.label) {
      case 0:
        return n2 > t2 ? [4, r2.slice(0, --n2).join("")] : [3, 2];
      case 1:
        return e3.sent(), [3, 0];
      case 2:
        return [2];
    }
  });
}
var v = "index-module_type__E-SaG";
!function(e2, t2) {
  void 0 === t2 && (t2 = {});
  var n2 = t2.insertAt;
  if (e2 && "undefined" != typeof document) {
    var r2 = document.head || document.getElementsByTagName("head")[0], o2 = document.createElement("style");
    o2.type = "text/css", "top" === n2 && r2.firstChild ? r2.insertBefore(o2, r2.firstChild) : r2.appendChild(o2), o2.styleSheet ? o2.styleSheet.cssText = e2 : o2.appendChild(document.createTextNode(e2));
  }
}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");
var b = (0, import_react.memo)(function(o2) {
  var a2 = o2.sequence, u2 = o2.repeat, c2 = o2.className, f2 = o2.speed, d2 = void 0 === f2 ? 40 : f2, h2 = o2.deletionSpeed, p2 = o2.omitDeletionAnimation, y2 = void 0 !== p2 && p2, b2 = o2.wrapper, m = void 0 === b2 ? "div" : b2, w = o2.cursor, x = void 0 === w || w, g = o2.style;
  d2 = Math.abs(d2 - 100), h2 = h2 ? Math.abs(h2 - 100) : d2;
  var S, _, C, E, T, N, A = (0, import_react.useRef)(null), k = v;
  S = c2 && c2.length > 0 ? x ? "".concat(k, " ").concat(c2) : c2 : x ? k : "", _ = (0, import_react.useRef)(function() {
    return u2 === 1 / 0 ? s.apply(void 0, l(l([A.current, d2, h2, y2], i(a2), false), [s], false)) : "number" == typeof u2 ? s.apply(void 0, l([A.current, d2, h2, y2], i(Array(1 + u2).fill(a2).flat()), false)) : s.apply(void 0, l([A.current, d2, h2, y2], i(a2), false)), function() {
      A.current;
    };
  }), C = (0, import_react.useRef)(), E = (0, import_react.useRef)(false), T = (0, import_react.useRef)(false), N = i((0, import_react.useState)(0), 2)[1], E.current && (T.current = true), (0, import_react.useEffect)(function() {
    return E.current || (C.current = _.current(), E.current = true), N(function(e2) {
      return e2 + 1;
    }), function() {
      T.current && C.current && C.current();
    };
  }, []);
  var P = m;
  return import_react.default.createElement(P, { style: g, className: S, ref: A });
}, function(e2, t2) {
  return true;
});
export {
  b as TypeAnimation
};
//# sourceMappingURL=react-type-animation.js.map
