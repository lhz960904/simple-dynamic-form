(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function(t) {
              return e[t];
            }.bind(null, i),
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e['default'];
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = '/'),
    n((n.s = '5QBA'));
})({
  '33yf': function(e, t, n) {
    (function(e) {
      function n(e, t) {
        for (var n = 0, r = e.length - 1; r >= 0; r--) {
          var i = e[r];
          '.' === i
            ? e.splice(r, 1)
            : '..' === i
            ? (e.splice(r, 1), n++)
            : n && (e.splice(r, 1), n--);
        }
        if (t) for (; n--; n) e.unshift('..');
        return e;
      }
      function r(e) {
        'string' !== typeof e && (e += '');
        var t,
          n = 0,
          r = -1,
          i = !0;
        for (t = e.length - 1; t >= 0; --t)
          if (47 === e.charCodeAt(t)) {
            if (!i) {
              n = t + 1;
              break;
            }
          } else -1 === r && ((i = !1), (r = t + 1));
        return -1 === r ? '' : e.slice(n, r);
      }
      function i(e, t) {
        if (e.filter) return e.filter(t);
        for (var n = [], r = 0; r < e.length; r++)
          t(e[r], r, e) && n.push(e[r]);
        return n;
      }
      (t.resolve = function() {
        for (var t = '', r = !1, o = arguments.length - 1; o >= -1 && !r; o--) {
          var a = o >= 0 ? arguments[o] : e.cwd();
          if ('string' !== typeof a)
            throw new TypeError('Arguments to path.resolve must be strings');
          a && ((t = a + '/' + t), (r = '/' === a.charAt(0)));
        }
        return (
          (t = n(
            i(t.split('/'), function(e) {
              return !!e;
            }),
            !r,
          ).join('/')),
          (r ? '/' : '') + t || '.'
        );
      }),
        (t.normalize = function(e) {
          var r = t.isAbsolute(e),
            a = '/' === o(e, -1);
          return (
            (e = n(
              i(e.split('/'), function(e) {
                return !!e;
              }),
              !r,
            ).join('/')),
            e || r || (e = '.'),
            e && a && (e += '/'),
            (r ? '/' : '') + e
          );
        }),
        (t.isAbsolute = function(e) {
          return '/' === e.charAt(0);
        }),
        (t.join = function() {
          var e = Array.prototype.slice.call(arguments, 0);
          return t.normalize(
            i(e, function(e, t) {
              if ('string' !== typeof e)
                throw new TypeError('Arguments to path.join must be strings');
              return e;
            }).join('/'),
          );
        }),
        (t.relative = function(e, n) {
          function r(e) {
            for (var t = 0; t < e.length; t++) if ('' !== e[t]) break;
            for (var n = e.length - 1; n >= 0; n--) if ('' !== e[n]) break;
            return t > n ? [] : e.slice(t, n - t + 1);
          }
          (e = t.resolve(e).substr(1)), (n = t.resolve(n).substr(1));
          for (
            var i = r(e.split('/')),
              o = r(n.split('/')),
              a = Math.min(i.length, o.length),
              s = a,
              u = 0;
            u < a;
            u++
          )
            if (i[u] !== o[u]) {
              s = u;
              break;
            }
          var l = [];
          for (u = s; u < i.length; u++) l.push('..');
          return (l = l.concat(o.slice(s))), l.join('/');
        }),
        (t.sep = '/'),
        (t.delimiter = ':'),
        (t.dirname = function(e) {
          if (('string' !== typeof e && (e += ''), 0 === e.length)) return '.';
          for (
            var t = e.charCodeAt(0),
              n = 47 === t,
              r = -1,
              i = !0,
              o = e.length - 1;
            o >= 1;
            --o
          )
            if (((t = e.charCodeAt(o)), 47 === t)) {
              if (!i) {
                r = o;
                break;
              }
            } else i = !1;
          return -1 === r
            ? n
              ? '/'
              : '.'
            : n && 1 === r
            ? '/'
            : e.slice(0, r);
        }),
        (t.basename = function(e, t) {
          var n = r(e);
          return (
            t &&
              n.substr(-1 * t.length) === t &&
              (n = n.substr(0, n.length - t.length)),
            n
          );
        }),
        (t.extname = function(e) {
          'string' !== typeof e && (e += '');
          for (
            var t = -1, n = 0, r = -1, i = !0, o = 0, a = e.length - 1;
            a >= 0;
            --a
          ) {
            var s = e.charCodeAt(a);
            if (47 !== s)
              -1 === r && ((i = !1), (r = a + 1)),
                46 === s
                  ? -1 === t
                    ? (t = a)
                    : 1 !== o && (o = 1)
                  : -1 !== t && (o = -1);
            else if (!i) {
              n = a + 1;
              break;
            }
          }
          return -1 === t ||
            -1 === r ||
            0 === o ||
            (1 === o && t === r - 1 && t === n + 1)
            ? ''
            : e.slice(t, r);
        });
      var o =
        'b' === 'ab'.substr(-1)
          ? function(e, t, n) {
              return e.substr(t, n);
            }
          : function(e, t, n) {
              return t < 0 && (t = e.length + t), e.substr(t, n);
            };
    }.call(this, n('Q2Ig')));
  },
  '5QBA': function(e, t, n) {
    'use strict';
    function r(e, t) {
      return (
        (r =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          }),
        r(e, t)
      );
    }
    function i(e, t) {
      if ('function' !== typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && r(e, t);
    }
    function o(e) {
      return (
        (o = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        o(e)
      );
    }
    function a() {
      if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' === typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function() {}),
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function s(e) {
      return (
        (s =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              }),
        s(e)
      );
    }
    function u(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return e;
    }
    function l(e, t) {
      return !t || ('object' !== s(t) && 'function' !== typeof t) ? u(e) : t;
    }
    function c(e) {
      var t = a();
      return function() {
        var n,
          r = o(e);
        if (t) {
          var i = o(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return l(this, n);
      };
    }
    function h(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function f(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function d(e, t, n) {
      return t && f(e.prototype, t), n && f(e, n), e;
    }
    n.r(t),
      n.d(t, 'initialize', function() {
        return nr;
      });
    var m = (function() {
        function e() {
          h(this, e),
            (this.listeners = []),
            (this.unexpectedErrorHandler = function(e) {
              setTimeout(function() {
                if (e.stack) throw new Error(e.message + '\n\n' + e.stack);
                throw e;
              }, 0);
            });
        }
        return (
          d(e, [
            {
              key: 'emit',
              value: function(e) {
                this.listeners.forEach(function(t) {
                  t(e);
                });
              },
            },
            {
              key: 'onUnexpectedError',
              value: function(e) {
                this.unexpectedErrorHandler(e), this.emit(e);
              },
            },
            {
              key: 'onUnexpectedExternalError',
              value: function(e) {
                this.unexpectedErrorHandler(e);
              },
            },
          ]),
          e
        );
      })(),
      g = new m();
    function v(e) {
      y(e) || g.onUnexpectedError(e);
    }
    function p(e) {
      if (e instanceof Error) {
        var t = e.name,
          n = e.message,
          r = e.stacktrace || e.stack;
        return { $isError: !0, name: t, message: n, stack: r };
      }
      return e;
    }
    var _ = 'Canceled';
    function y(e) {
      return e instanceof Error && e.name === _ && e.message === _;
    }
    function b(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function C(e, t) {
      if (e) {
        if ('string' === typeof e) return b(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          'Object' === n && e.constructor && (n = e.constructor.name),
          'Map' === n || 'Set' === n
            ? Array.from(e)
            : 'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? b(e, t)
            : void 0
        );
      }
    }
    function k(e, t) {
      var n;
      if ('undefined' === typeof Symbol || null == e[Symbol.iterator]) {
        if (
          Array.isArray(e) ||
          (n = C(e)) ||
          (t && e && 'number' === typeof e.length)
        ) {
          n && (e = n);
          var r = 0,
            i = function() {};
          return {
            s: i,
            n: function() {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            },
            e: function(e) {
              throw e;
            },
            f: i,
          };
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      var o,
        a = !0,
        s = !1;
      return {
        s: function() {
          n = e[Symbol.iterator]();
        },
        n: function() {
          var e = n.next();
          return (a = e.done), e;
        },
        e: function(e) {
          (s = !0), (o = e);
        },
        f: function() {
          try {
            a || null == n['return'] || n['return']();
          } finally {
            if (s) throw o;
          }
        },
      };
    }
    function L(e) {
      return -1 !== Function.toString.call(e).indexOf('[native code]');
    }
    function S(e, t, n) {
      return (
        (S = a()
          ? Reflect.construct
          : function(e, t, n) {
              var i = [null];
              i.push.apply(i, t);
              var o = Function.bind.apply(e, i),
                a = new o();
              return n && r(a, n.prototype), a;
            }),
        S.apply(null, arguments)
      );
    }
    function w(e) {
      var t = 'function' === typeof Map ? new Map() : void 0;
      return (
        (w = function(e) {
          if (null === e || !L(e)) return e;
          if ('function' !== typeof e)
            throw new TypeError(
              'Super expression must either be null or a function',
            );
          if ('undefined' !== typeof t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n);
          }
          function n() {
            return S(e, arguments, o(this).constructor);
          }
          return (
            (n.prototype = Object.create(e.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            r(n, e)
          );
        }),
        w(e)
      );
    }
    function E(e, t, n) {
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
    var N,
      A = n('WmNS'),
      x = n.n(A);
    (function(e) {
      var t = x.a.mark(c),
        n = x.a.mark(v),
        r = x.a.mark(p),
        i = x.a.mark(_),
        o = x.a.mark(y),
        a = x.a.mark(C);
      function s(e) {
        return (
          e && 'object' === typeof e && 'function' === typeof e[Symbol.iterator]
        );
      }
      e.is = s;
      var u = Object.freeze([]);
      function l() {
        return u;
      }
      function c(e) {
        return x.a.wrap(function(t) {
          while (1)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), e;
              case 2:
              case 'end':
                return t.stop();
            }
        }, t);
      }
      function h(e) {
        return e || u;
      }
      function f(e) {
        return !e || !0 === e[Symbol.iterator]().next().done;
      }
      function d(e) {
        return e[Symbol.iterator]().next().value;
      }
      function m(e, t) {
        var n,
          r = k(e);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var i = n.value;
            if (t(i)) return !0;
          }
        } catch (o) {
          r.e(o);
        } finally {
          r.f();
        }
        return !1;
      }
      function g(e, t) {
        var n,
          r = k(e);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var i = n.value;
            if (t(i)) return i;
          }
        } catch (o) {
          r.e(o);
        } finally {
          r.f();
        }
      }
      function v(e, t) {
        var r, i, o;
        return x.a.wrap(
          function(n) {
            while (1)
              switch ((n.prev = n.next)) {
                case 0:
                  (r = k(e)), (n.prev = 1), r.s();
                case 3:
                  if ((i = r.n()).done) {
                    n.next = 10;
                    break;
                  }
                  if (((o = i.value), !t(o))) {
                    n.next = 8;
                    break;
                  }
                  return (n.next = 8), o;
                case 8:
                  n.next = 3;
                  break;
                case 10:
                  n.next = 15;
                  break;
                case 12:
                  (n.prev = 12), (n.t0 = n['catch'](1)), r.e(n.t0);
                case 15:
                  return (n.prev = 15), r.f(), n.finish(15);
                case 18:
                case 'end':
                  return n.stop();
              }
          },
          n,
          null,
          [[1, 12, 15, 18]],
        );
      }
      function p(e, t) {
        var n, i, o;
        return x.a.wrap(
          function(r) {
            while (1)
              switch ((r.prev = r.next)) {
                case 0:
                  (n = k(e)), (r.prev = 1), n.s();
                case 3:
                  if ((i = n.n()).done) {
                    r.next = 9;
                    break;
                  }
                  return (o = i.value), (r.next = 7), t(o);
                case 7:
                  r.next = 3;
                  break;
                case 9:
                  r.next = 14;
                  break;
                case 11:
                  (r.prev = 11), (r.t0 = r['catch'](1)), n.e(r.t0);
                case 14:
                  return (r.prev = 14), n.f(), r.finish(14);
                case 17:
                case 'end':
                  return r.stop();
              }
          },
          r,
          null,
          [[1, 11, 14, 17]],
        );
      }
      function _() {
        var e,
          t,
          n,
          r,
          o,
          a,
          s,
          u,
          l,
          c = arguments;
        return x.a.wrap(
          function(i) {
            while (1)
              switch ((i.prev = i.next)) {
                case 0:
                  for (e = c.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = c[n];
                  (r = 0), (o = t);
                case 2:
                  if (!(r < o.length)) {
                    i.next = 24;
                    break;
                  }
                  (a = o[r]), (s = k(a)), (i.prev = 5), s.s();
                case 7:
                  if ((u = s.n()).done) {
                    i.next = 13;
                    break;
                  }
                  return (l = u.value), (i.next = 11), l;
                case 11:
                  i.next = 7;
                  break;
                case 13:
                  i.next = 18;
                  break;
                case 15:
                  (i.prev = 15), (i.t0 = i['catch'](5)), s.e(i.t0);
                case 18:
                  return (i.prev = 18), s.f(), i.finish(18);
                case 21:
                  r++, (i.next = 2);
                  break;
                case 24:
                case 'end':
                  return i.stop();
              }
          },
          i,
          null,
          [[5, 15, 18, 21]],
        );
      }
      function y(e) {
        var t, n, r, i, a, s;
        return x.a.wrap(
          function(o) {
            while (1)
              switch ((o.prev = o.next)) {
                case 0:
                  (t = k(e)), (o.prev = 1), t.s();
                case 3:
                  if ((n = t.n()).done) {
                    o.next = 24;
                    break;
                  }
                  (r = n.value), (i = k(r)), (o.prev = 6), i.s();
                case 8:
                  if ((a = i.n()).done) {
                    o.next = 14;
                    break;
                  }
                  return (s = a.value), (o.next = 12), s;
                case 12:
                  o.next = 8;
                  break;
                case 14:
                  o.next = 19;
                  break;
                case 16:
                  (o.prev = 16), (o.t0 = o['catch'](6)), i.e(o.t0);
                case 19:
                  return (o.prev = 19), i.f(), o.finish(19);
                case 22:
                  o.next = 3;
                  break;
                case 24:
                  o.next = 29;
                  break;
                case 26:
                  (o.prev = 26), (o.t1 = o['catch'](1)), t.e(o.t1);
                case 29:
                  return (o.prev = 29), t.f(), o.finish(29);
                case 32:
                case 'end':
                  return o.stop();
              }
          },
          o,
          null,
          [
            [1, 26, 29, 32],
            [6, 16, 19, 22],
          ],
        );
      }
      function b(e, t, n) {
        var r,
          i = n,
          o = k(e);
        try {
          for (o.s(); !(r = o.n()).done; ) {
            var a = r.value;
            i = t(i, a);
          }
        } catch (s) {
          o.e(s);
        } finally {
          o.f();
        }
        return i;
      }
      function C(e, t) {
        var n,
          r = arguments;
        return x.a.wrap(function(i) {
          while (1)
            switch ((i.prev = i.next)) {
              case 0:
                (n = r.length > 2 && void 0 !== r[2] ? r[2] : e.length),
                  t < 0 && (t += e.length),
                  n < 0 ? (n += e.length) : n > e.length && (n = e.length);
              case 3:
                if (!(t < n)) {
                  i.next = 9;
                  break;
                }
                return (i.next = 6), e[t];
              case 6:
                t++, (i.next = 3);
                break;
              case 9:
              case 'end':
                return i.stop();
            }
        }, a);
      }
      function L(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Number.POSITIVE_INFINITY,
          r = [];
        if (0 === n) return [r, t];
        for (var i = t[Symbol.iterator](), o = 0; o < n; o++) {
          var a = i.next();
          if (a.done) return [r, e.empty()];
          r.push(a.value);
        }
        return [
          r,
          E({}, Symbol.iterator, function() {
            return i;
          }),
        ];
      }
      function S(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : function(e, t) {
                  return e === t;
                },
          r = e[Symbol.iterator](),
          i = t[Symbol.iterator]();
        while (1) {
          var o = r.next(),
            a = i.next();
          if (o.done !== a.done) return !1;
          if (o.done) return !0;
          if (!n(o.value, a.value)) return !1;
        }
      }
      (e.empty = l),
        (e.single = c),
        (e.from = h),
        (e.isEmpty = f),
        (e.first = d),
        (e.some = m),
        (e.find = g),
        (e.filter = v),
        (e.map = p),
        (e.concat = _),
        (e.concatNested = y),
        (e.reduce = b),
        (e.slice = C),
        (e.consume = L),
        (e.equals = S);
    })(N || (N = {}));
    var O = !1,
      T = null;
    if (O) {
      var I = '__is_disposable_tracked__';
      T = new ((function() {
        function e() {
          h(this, e);
        }
        return (
          d(e, [
            {
              key: 'trackDisposable',
              value: function(e) {
                var t = new Error('Potentially leaked disposable').stack;
                setTimeout(function() {
                  e[I] || console.log(t);
                }, 3e3);
              },
            },
            {
              key: 'markTracked',
              value: function(e) {
                if (e && e !== K.None)
                  try {
                    e[I] = !0;
                  } catch (t) {}
              },
            },
          ]),
          e
        );
      })())();
    }
    function M(e) {
      T && T.markTracked(e);
    }
    function P(e) {
      return T ? (T.trackDisposable(e), e) : e;
    }
    var R = (function(e) {
      i(n, e);
      var t = c(n);
      function n(e) {
        var r;
        return (
          h(this, n),
          (r = t.call(
            this,
            'Encountered errors while disposing of store. Errors: ['.concat(
              e.join(', '),
              ']',
            ),
          )),
          (r.errors = e),
          r
        );
      }
      return n;
    })(w(Error));
    function U(e) {
      if (N.is(e)) {
        var t,
          n = [],
          r = k(e);
        try {
          for (r.s(); !(t = r.n()).done; ) {
            var i = t.value;
            if (i) {
              M(i);
              try {
                i.dispose();
              } catch (o) {
                n.push(o);
              }
            }
          }
        } catch (a) {
          r.e(a);
        } finally {
          r.f();
        }
        if (1 === n.length) throw n[0];
        if (n.length > 1) throw new R(n);
        return Array.isArray(e) ? [] : e;
      }
      if (e) return M(e), e.dispose(), e;
    }
    function D() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return (
        t.forEach(M),
        F(function() {
          return U(t);
        })
      );
    }
    function F(e) {
      var t = P({
        dispose: function() {
          M(t), e();
        },
      });
      return t;
    }
    var B = (function() {
      function e() {
        h(this, e), (this._toDispose = new Set()), (this._isDisposed = !1);
      }
      return (
        d(e, [
          {
            key: 'dispose',
            value: function() {
              this._isDisposed ||
                (M(this), (this._isDisposed = !0), this.clear());
            },
          },
          {
            key: 'clear',
            value: function() {
              try {
                U(this._toDispose.values());
              } finally {
                this._toDispose.clear();
              }
            },
          },
          {
            key: 'add',
            value: function(t) {
              if (!t) return t;
              if (t === this)
                throw new Error('Cannot register a disposable on itself!');
              return (
                M(t),
                this._isDisposed
                  ? e.DISABLE_DISPOSED_WARNING ||
                    console.warn(
                      new Error(
                        'Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!',
                      ).stack,
                    )
                  : this._toDispose.add(t),
                t
              );
            },
          },
        ]),
        e
      );
    })();
    B.DISABLE_DISPOSED_WARNING = !1;
    var K = (function() {
      function e() {
        h(this, e), (this._store = new B()), P(this);
      }
      return (
        d(e, [
          {
            key: 'dispose',
            value: function() {
              M(this), this._store.dispose();
            },
          },
          {
            key: '_register',
            value: function(e) {
              if (e === this)
                throw new Error('Cannot register a disposable on itself!');
              return this._store.add(e);
            },
          },
        ]),
        e
      );
    })();
    K.None = Object.freeze({ dispose: function() {} });
    var W = n('MNsG');
    function q(e) {
      var t = [],
        n = Object.getPrototypeOf(e);
      while (Object.prototype !== n)
        (t = t.concat(Object.getOwnPropertyNames(n))),
          (n = Object.getPrototypeOf(n));
      return t;
    }
    function H(e) {
      var t,
        n = [],
        r = k(q(e));
      try {
        for (r.s(); !(t = r.n()).done; ) {
          var i = t.value;
          'function' === typeof e[i] && n.push(i);
        }
      } catch (o) {
        r.e(o);
      } finally {
        r.f();
      }
      return n;
    }
    function V(e, t) {
      var n,
        r = function(e) {
          return function() {
            var n = Array.prototype.slice.call(arguments, 0);
            return t(e, n);
          };
        },
        i = {},
        o = k(e);
      try {
        for (o.s(); !(n = o.n()).done; ) {
          var a = n.value;
          i[a] = r(a);
        }
      } catch (s) {
        o.e(s);
      } finally {
        o.f();
      }
      return i;
    }
    var j = '$initialize';
    var Y = (function() {
        function e(t) {
          h(this, e),
            (this._workerId = -1),
            (this._handler = t),
            (this._lastSentReq = 0),
            (this._pendingReplies = Object.create(null));
        }
        return (
          d(e, [
            {
              key: 'setWorkerId',
              value: function(e) {
                this._workerId = e;
              },
            },
            {
              key: 'sendMessage',
              value: function(e, t) {
                var n = this,
                  r = String(++this._lastSentReq);
                return new Promise(function(i, o) {
                  (n._pendingReplies[r] = { resolve: i, reject: o }),
                    n._send({
                      vsWorker: n._workerId,
                      req: r,
                      method: e,
                      args: t,
                    });
                });
              },
            },
            {
              key: 'handleMessage',
              value: function(e) {
                e &&
                  e.vsWorker &&
                  ((-1 !== this._workerId && e.vsWorker !== this._workerId) ||
                    this._handleMessage(e));
              },
            },
            {
              key: '_handleMessage',
              value: function(e) {
                var t = this;
                if (e.seq) {
                  var n = e;
                  if (!this._pendingReplies[n.seq])
                    return void console.warn('Got reply to unknown seq');
                  var r = this._pendingReplies[n.seq];
                  if ((delete this._pendingReplies[n.seq], n.err)) {
                    var i = n.err;
                    return (
                      n.err.$isError &&
                        ((i = new Error()),
                        (i.name = n.err.name),
                        (i.message = n.err.message),
                        (i.stack = n.err.stack)),
                      void r.reject(i)
                    );
                  }
                  r.resolve(n.res);
                } else {
                  var o = e,
                    a = o.req,
                    s = this._handler.handleMessage(o.method, o.args);
                  s.then(
                    function(e) {
                      t._send({
                        vsWorker: t._workerId,
                        seq: a,
                        res: e,
                        err: void 0,
                      });
                    },
                    function(e) {
                      e.detail instanceof Error && (e.detail = p(e.detail)),
                        t._send({
                          vsWorker: t._workerId,
                          seq: a,
                          res: void 0,
                          err: p(e),
                        });
                    },
                  );
                }
              },
            },
            {
              key: '_send',
              value: function(e) {
                var t = [];
                if (e.req)
                  for (var n = e, r = 0; r < n.args.length; r++)
                    n.args[r] instanceof ArrayBuffer && t.push(n.args[r]);
                else {
                  var i = e;
                  i.res instanceof ArrayBuffer && t.push(i.res);
                }
                this._handler.sendMessage(e, t);
              },
            },
          ]),
          e
        );
      })(),
      G = (function() {
        function e(t, n) {
          var r = this;
          h(this, e),
            (this._requestHandlerFactory = n),
            (this._requestHandler = null),
            (this._protocol = new Y({
              sendMessage: function(e, n) {
                t(e, n);
              },
              handleMessage: function(e, t) {
                return r._handleMessage(e, t);
              },
            }));
        }
        return (
          d(e, [
            {
              key: 'onmessage',
              value: function(e) {
                this._protocol.handleMessage(e);
              },
            },
            {
              key: '_handleMessage',
              value: function(e, t) {
                if (e === j) return this.initialize(t[0], t[1], t[2], t[3]);
                if (
                  !this._requestHandler ||
                  'function' !== typeof this._requestHandler[e]
                )
                  return Promise.reject(
                    new Error('Missing requestHandler or method: ' + e),
                  );
                try {
                  return Promise.resolve(
                    this._requestHandler[e].apply(this._requestHandler, t),
                  );
                } catch (n) {
                  return Promise.reject(n);
                }
              },
            },
            {
              key: 'initialize',
              value: function(e, t, n, r) {
                var i = this;
                this._protocol.setWorkerId(e);
                var o = function(e, t) {
                    return i._protocol.sendMessage(e, t);
                  },
                  a = V(r, o);
                return this._requestHandlerFactory
                  ? ((this._requestHandler = this._requestHandlerFactory(a)),
                    Promise.resolve(H(this._requestHandler)))
                  : (t &&
                      ('undefined' !== typeof t.baseUrl && delete t['baseUrl'],
                      'undefined' !== typeof t.paths &&
                        'undefined' !== typeof t.paths.vs &&
                        delete t.paths['vs'],
                      void 0 !== typeof t.trustedTypesPolicy &&
                        delete t['trustedTypesPolicy'],
                      (t.catchError = !0),
                      self.require.config(t)),
                    new Promise(function(e, t) {
                      self.require(
                        [n],
                        function(n) {
                          (i._requestHandler = n.create(a)),
                            i._requestHandler
                              ? e(H(i._requestHandler))
                              : t(new Error('No RequestHandler!'));
                        },
                        t,
                      );
                    }));
              },
            },
          ]),
          e
        );
      })();
    function z(e) {
      if (Array.isArray(e)) return b(e);
    }
    function Q(e) {
      if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
        return Array.from(e);
    }
    function X() {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    }
    function Z(e) {
      return z(e) || Q(e) || C(e) || X();
    }
    function J(e, t) {
      return ee(e, t, 0, e.length - 1, []), e;
    }
    function $(e, t, n, r, i, o) {
      for (var a = n, s = r + 1, u = n; u <= i; u++) o[u] = e[u];
      for (var l = n; l <= i; l++)
        a > r
          ? (e[l] = o[s++])
          : s > i
          ? (e[l] = o[a++])
          : t(o[s], o[a]) < 0
          ? (e[l] = o[s++])
          : (e[l] = o[a++]);
    }
    function ee(e, t, n, r, i) {
      if (!(r <= n)) {
        var o = (n + (r - n) / 2) | 0;
        ee(e, t, n, o, i),
          ee(e, t, o + 1, r, i),
          t(e[o], e[o + 1]) <= 0 || $(e, t, n, o, r, i);
      }
    }
    function te(e) {
      if (Array.isArray(e)) return e;
    }
    function ne(e, t) {
      if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {
        var n = [],
          r = !0,
          i = !1,
          o = void 0;
        try {
          for (
            var a, s = e[Symbol.iterator]();
            !(r = (a = s.next()).done);
            r = !0
          )
            if ((n.push(a.value), t && n.length === t)) break;
        } catch (u) {
          (i = !0), (o = u);
        } finally {
          try {
            r || null == s['return'] || s['return']();
          } finally {
            if (i) throw o;
          }
        }
        return n;
      }
    }
    function re() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    }
    function ie(e, t) {
      return te(e) || ne(e, t) || C(e, t) || re();
    }
    var oe = (function() {
      function e(t, n, r, i) {
        h(this, e),
          (this.originalStart = t),
          (this.originalLength = n),
          (this.modifiedStart = r),
          (this.modifiedLength = i);
      }
      return (
        d(e, [
          {
            key: 'getOriginalEnd',
            value: function() {
              return this.originalStart + this.originalLength;
            },
          },
          {
            key: 'getModifiedEnd',
            value: function() {
              return this.modifiedStart + this.modifiedLength;
            },
          },
        ]),
        e
      );
    })();
    function ae(e) {
      return e.split(/\r\n|\r|\n/);
    }
    function se(e) {
      for (var t = 0, n = e.length; t < n; t++) {
        var r = e.charCodeAt(t);
        if (32 !== r && 9 !== r) return t;
      }
      return -1;
    }
    function ue(e) {
      for (
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : e.length - 1,
          n = t;
        n >= 0;
        n--
      ) {
        var r = e.charCodeAt(n);
        if (32 !== r && 9 !== r) return n;
      }
      return -1;
    }
    function le(e) {
      return 55296 <= e && e <= 56319;
    }
    function ce(e) {
      return 56320 <= e && e <= 57343;
    }
    function he(e, t) {
      return t - 56320 + ((e - 55296) << 10) + 65536;
    }
    String.fromCharCode(65279);
    var fe = (function() {
      function e() {
        h(this, e), (this._data = de());
      }
      return (
        d(
          e,
          [
            {
              key: 'getGraphemeBreakType',
              value: function(e) {
                if (e < 32) return 10 === e ? 3 : 13 === e ? 2 : 4;
                if (e < 127) return 0;
                var t = this._data,
                  n = t.length / 3,
                  r = 1;
                while (r <= n)
                  if (e < t[3 * r]) r *= 2;
                  else {
                    if (!(e > t[3 * r + 1])) return t[3 * r + 2];
                    r = 2 * r + 1;
                  }
                return 0;
              },
            },
          ],
          [
            {
              key: 'getInstance',
              value: function() {
                return e._INSTANCE || (e._INSTANCE = new e()), e._INSTANCE;
              },
            },
          ],
        ),
        e
      );
    })();
    function de() {
      return JSON.parse(
        '[0,0,0,51592,51592,11,44424,44424,11,72251,72254,5,7150,7150,7,48008,48008,11,55176,55176,11,128420,128420,14,3276,3277,5,9979,9980,14,46216,46216,11,49800,49800,11,53384,53384,11,70726,70726,5,122915,122916,5,129320,129327,14,2558,2558,5,5906,5908,5,9762,9763,14,43360,43388,8,45320,45320,11,47112,47112,11,48904,48904,11,50696,50696,11,52488,52488,11,54280,54280,11,70082,70083,1,71350,71350,7,73111,73111,5,127892,127893,14,128726,128727,14,129473,129474,14,2027,2035,5,2901,2902,5,3784,3789,5,6754,6754,5,8418,8420,5,9877,9877,14,11088,11088,14,44008,44008,5,44872,44872,11,45768,45768,11,46664,46664,11,47560,47560,11,48456,48456,11,49352,49352,11,50248,50248,11,51144,51144,11,52040,52040,11,52936,52936,11,53832,53832,11,54728,54728,11,69811,69814,5,70459,70460,5,71096,71099,7,71998,71998,5,72874,72880,5,119149,119149,7,127374,127374,14,128335,128335,14,128482,128482,14,128765,128767,14,129399,129400,14,129680,129685,14,1476,1477,5,2377,2380,7,2759,2760,5,3137,3140,7,3458,3459,7,4153,4154,5,6432,6434,5,6978,6978,5,7675,7679,5,9723,9726,14,9823,9823,14,9919,9923,14,10035,10036,14,42736,42737,5,43596,43596,5,44200,44200,11,44648,44648,11,45096,45096,11,45544,45544,11,45992,45992,11,46440,46440,11,46888,46888,11,47336,47336,11,47784,47784,11,48232,48232,11,48680,48680,11,49128,49128,11,49576,49576,11,50024,50024,11,50472,50472,11,50920,50920,11,51368,51368,11,51816,51816,11,52264,52264,11,52712,52712,11,53160,53160,11,53608,53608,11,54056,54056,11,54504,54504,11,54952,54952,11,68108,68111,5,69933,69940,5,70197,70197,7,70498,70499,7,70845,70845,5,71229,71229,5,71727,71735,5,72154,72155,5,72344,72345,5,73023,73029,5,94095,94098,5,121403,121452,5,126981,127182,14,127538,127546,14,127990,127990,14,128391,128391,14,128445,128449,14,128500,128505,14,128752,128752,14,129160,129167,14,129356,129356,14,129432,129442,14,129648,129651,14,129751,131069,14,173,173,4,1757,1757,1,2274,2274,1,2494,2494,5,2641,2641,5,2876,2876,5,3014,3016,7,3262,3262,7,3393,3396,5,3570,3571,7,3968,3972,5,4228,4228,7,6086,6086,5,6679,6680,5,6912,6915,5,7080,7081,5,7380,7392,5,8252,8252,14,9096,9096,14,9748,9749,14,9784,9786,14,9833,9850,14,9890,9894,14,9938,9938,14,9999,9999,14,10085,10087,14,12349,12349,14,43136,43137,7,43454,43456,7,43755,43755,7,44088,44088,11,44312,44312,11,44536,44536,11,44760,44760,11,44984,44984,11,45208,45208,11,45432,45432,11,45656,45656,11,45880,45880,11,46104,46104,11,46328,46328,11,46552,46552,11,46776,46776,11,47000,47000,11,47224,47224,11,47448,47448,11,47672,47672,11,47896,47896,11,48120,48120,11,48344,48344,11,48568,48568,11,48792,48792,11,49016,49016,11,49240,49240,11,49464,49464,11,49688,49688,11,49912,49912,11,50136,50136,11,50360,50360,11,50584,50584,11,50808,50808,11,51032,51032,11,51256,51256,11,51480,51480,11,51704,51704,11,51928,51928,11,52152,52152,11,52376,52376,11,52600,52600,11,52824,52824,11,53048,53048,11,53272,53272,11,53496,53496,11,53720,53720,11,53944,53944,11,54168,54168,11,54392,54392,11,54616,54616,11,54840,54840,11,55064,55064,11,65438,65439,5,69633,69633,5,69837,69837,1,70018,70018,7,70188,70190,7,70368,70370,7,70465,70468,7,70712,70719,5,70835,70840,5,70850,70851,5,71132,71133,5,71340,71340,7,71458,71461,5,71985,71989,7,72002,72002,7,72193,72202,5,72281,72283,5,72766,72766,7,72885,72886,5,73104,73105,5,92912,92916,5,113824,113827,4,119173,119179,5,121505,121519,5,125136,125142,5,127279,127279,14,127489,127490,14,127570,127743,14,127900,127901,14,128254,128254,14,128369,128370,14,128400,128400,14,128425,128432,14,128468,128475,14,128489,128494,14,128715,128720,14,128745,128745,14,128759,128760,14,129004,129023,14,129296,129304,14,129340,129342,14,129388,129392,14,129404,129407,14,129454,129455,14,129485,129487,14,129659,129663,14,129719,129727,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2363,2363,7,2402,2403,5,2507,2508,7,2622,2624,7,2691,2691,7,2786,2787,5,2881,2884,5,3006,3006,5,3072,3072,5,3170,3171,5,3267,3268,7,3330,3331,7,3406,3406,1,3538,3540,5,3655,3662,5,3897,3897,5,4038,4038,5,4184,4185,5,4352,4447,8,6068,6069,5,6155,6157,5,6448,6449,7,6742,6742,5,6783,6783,5,6966,6970,5,7042,7042,7,7143,7143,7,7212,7219,5,7412,7412,5,8206,8207,4,8294,8303,4,8596,8601,14,9410,9410,14,9742,9742,14,9757,9757,14,9770,9770,14,9794,9794,14,9828,9828,14,9855,9855,14,9882,9882,14,9900,9903,14,9929,9933,14,9963,9967,14,9987,9988,14,10006,10006,14,10062,10062,14,10175,10175,14,11744,11775,5,42607,42607,5,43043,43044,7,43263,43263,5,43444,43445,7,43569,43570,5,43698,43700,5,43766,43766,5,44032,44032,11,44144,44144,11,44256,44256,11,44368,44368,11,44480,44480,11,44592,44592,11,44704,44704,11,44816,44816,11,44928,44928,11,45040,45040,11,45152,45152,11,45264,45264,11,45376,45376,11,45488,45488,11,45600,45600,11,45712,45712,11,45824,45824,11,45936,45936,11,46048,46048,11,46160,46160,11,46272,46272,11,46384,46384,11,46496,46496,11,46608,46608,11,46720,46720,11,46832,46832,11,46944,46944,11,47056,47056,11,47168,47168,11,47280,47280,11,47392,47392,11,47504,47504,11,47616,47616,11,47728,47728,11,47840,47840,11,47952,47952,11,48064,48064,11,48176,48176,11,48288,48288,11,48400,48400,11,48512,48512,11,48624,48624,11,48736,48736,11,48848,48848,11,48960,48960,11,49072,49072,11,49184,49184,11,49296,49296,11,49408,49408,11,49520,49520,11,49632,49632,11,49744,49744,11,49856,49856,11,49968,49968,11,50080,50080,11,50192,50192,11,50304,50304,11,50416,50416,11,50528,50528,11,50640,50640,11,50752,50752,11,50864,50864,11,50976,50976,11,51088,51088,11,51200,51200,11,51312,51312,11,51424,51424,11,51536,51536,11,51648,51648,11,51760,51760,11,51872,51872,11,51984,51984,11,52096,52096,11,52208,52208,11,52320,52320,11,52432,52432,11,52544,52544,11,52656,52656,11,52768,52768,11,52880,52880,11,52992,52992,11,53104,53104,11,53216,53216,11,53328,53328,11,53440,53440,11,53552,53552,11,53664,53664,11,53776,53776,11,53888,53888,11,54000,54000,11,54112,54112,11,54224,54224,11,54336,54336,11,54448,54448,11,54560,54560,11,54672,54672,11,54784,54784,11,54896,54896,11,55008,55008,11,55120,55120,11,64286,64286,5,66272,66272,5,68900,68903,5,69762,69762,7,69817,69818,5,69927,69931,5,70003,70003,5,70070,70078,5,70094,70094,7,70194,70195,7,70206,70206,5,70400,70401,5,70463,70463,7,70475,70477,7,70512,70516,5,70722,70724,5,70832,70832,5,70842,70842,5,70847,70848,5,71088,71089,7,71102,71102,7,71219,71226,5,71231,71232,5,71342,71343,7,71453,71455,5,71463,71467,5,71737,71738,5,71995,71996,5,72000,72000,7,72145,72147,7,72160,72160,5,72249,72249,7,72273,72278,5,72330,72342,5,72752,72758,5,72850,72871,5,72882,72883,5,73018,73018,5,73031,73031,5,73109,73109,5,73461,73462,7,94031,94031,5,94192,94193,7,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,126976,126979,14,127184,127231,14,127344,127345,14,127405,127461,14,127514,127514,14,127561,127567,14,127778,127779,14,127896,127896,14,127985,127986,14,127995,127999,5,128326,128328,14,128360,128366,14,128378,128378,14,128394,128397,14,128405,128406,14,128422,128423,14,128435,128443,14,128453,128464,14,128479,128480,14,128484,128487,14,128496,128498,14,128640,128709,14,128723,128724,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129096,129103,14,129292,129292,14,129311,129311,14,129329,129330,14,129344,129349,14,129360,129374,14,129394,129394,14,129402,129402,14,129413,129425,14,129445,129450,14,129466,129471,14,129483,129483,14,129511,129535,14,129653,129655,14,129667,129670,14,129705,129711,14,129731,129743,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2307,2307,7,2366,2368,7,2382,2383,7,2434,2435,7,2497,2500,5,2519,2519,5,2563,2563,7,2631,2632,5,2677,2677,5,2750,2752,7,2763,2764,7,2817,2817,5,2879,2879,5,2891,2892,7,2914,2915,5,3008,3008,5,3021,3021,5,3076,3076,5,3146,3149,5,3202,3203,7,3264,3265,7,3271,3272,7,3298,3299,5,3390,3390,5,3402,3404,7,3426,3427,5,3535,3535,5,3544,3550,7,3635,3635,7,3763,3763,7,3893,3893,5,3953,3966,5,3981,3991,5,4145,4145,7,4157,4158,5,4209,4212,5,4237,4237,5,4520,4607,10,5970,5971,5,6071,6077,5,6089,6099,5,6277,6278,5,6439,6440,5,6451,6456,7,6683,6683,5,6744,6750,5,6765,6770,7,6846,6846,5,6964,6964,5,6972,6972,5,7019,7027,5,7074,7077,5,7083,7085,5,7146,7148,7,7154,7155,7,7222,7223,5,7394,7400,5,7416,7417,5,8204,8204,5,8233,8233,4,8288,8292,4,8413,8416,5,8482,8482,14,8986,8987,14,9193,9203,14,9654,9654,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9775,14,9792,9792,14,9800,9811,14,9825,9826,14,9831,9831,14,9852,9853,14,9872,9873,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9936,9936,14,9941,9960,14,9974,9974,14,9982,9985,14,9992,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10145,10145,14,11013,11015,14,11503,11505,5,12334,12335,5,12951,12951,14,42612,42621,5,43014,43014,5,43047,43047,7,43204,43205,5,43335,43345,5,43395,43395,7,43450,43451,7,43561,43566,5,43573,43574,5,43644,43644,5,43710,43711,5,43758,43759,7,44005,44005,5,44012,44012,7,44060,44060,11,44116,44116,11,44172,44172,11,44228,44228,11,44284,44284,11,44340,44340,11,44396,44396,11,44452,44452,11,44508,44508,11,44564,44564,11,44620,44620,11,44676,44676,11,44732,44732,11,44788,44788,11,44844,44844,11,44900,44900,11,44956,44956,11,45012,45012,11,45068,45068,11,45124,45124,11,45180,45180,11,45236,45236,11,45292,45292,11,45348,45348,11,45404,45404,11,45460,45460,11,45516,45516,11,45572,45572,11,45628,45628,11,45684,45684,11,45740,45740,11,45796,45796,11,45852,45852,11,45908,45908,11,45964,45964,11,46020,46020,11,46076,46076,11,46132,46132,11,46188,46188,11,46244,46244,11,46300,46300,11,46356,46356,11,46412,46412,11,46468,46468,11,46524,46524,11,46580,46580,11,46636,46636,11,46692,46692,11,46748,46748,11,46804,46804,11,46860,46860,11,46916,46916,11,46972,46972,11,47028,47028,11,47084,47084,11,47140,47140,11,47196,47196,11,47252,47252,11,47308,47308,11,47364,47364,11,47420,47420,11,47476,47476,11,47532,47532,11,47588,47588,11,47644,47644,11,47700,47700,11,47756,47756,11,47812,47812,11,47868,47868,11,47924,47924,11,47980,47980,11,48036,48036,11,48092,48092,11,48148,48148,11,48204,48204,11,48260,48260,11,48316,48316,11,48372,48372,11,48428,48428,11,48484,48484,11,48540,48540,11,48596,48596,11,48652,48652,11,48708,48708,11,48764,48764,11,48820,48820,11,48876,48876,11,48932,48932,11,48988,48988,11,49044,49044,11,49100,49100,11,49156,49156,11,49212,49212,11,49268,49268,11,49324,49324,11,49380,49380,11,49436,49436,11,49492,49492,11,49548,49548,11,49604,49604,11,49660,49660,11,49716,49716,11,49772,49772,11,49828,49828,11,49884,49884,11,49940,49940,11,49996,49996,11,50052,50052,11,50108,50108,11,50164,50164,11,50220,50220,11,50276,50276,11,50332,50332,11,50388,50388,11,50444,50444,11,50500,50500,11,50556,50556,11,50612,50612,11,50668,50668,11,50724,50724,11,50780,50780,11,50836,50836,11,50892,50892,11,50948,50948,11,51004,51004,11,51060,51060,11,51116,51116,11,51172,51172,11,51228,51228,11,51284,51284,11,51340,51340,11,51396,51396,11,51452,51452,11,51508,51508,11,51564,51564,11,51620,51620,11,51676,51676,11,51732,51732,11,51788,51788,11,51844,51844,11,51900,51900,11,51956,51956,11,52012,52012,11,52068,52068,11,52124,52124,11,52180,52180,11,52236,52236,11,52292,52292,11,52348,52348,11,52404,52404,11,52460,52460,11,52516,52516,11,52572,52572,11,52628,52628,11,52684,52684,11,52740,52740,11,52796,52796,11,52852,52852,11,52908,52908,11,52964,52964,11,53020,53020,11,53076,53076,11,53132,53132,11,53188,53188,11,53244,53244,11,53300,53300,11,53356,53356,11,53412,53412,11,53468,53468,11,53524,53524,11,53580,53580,11,53636,53636,11,53692,53692,11,53748,53748,11,53804,53804,11,53860,53860,11,53916,53916,11,53972,53972,11,54028,54028,11,54084,54084,11,54140,54140,11,54196,54196,11,54252,54252,11,54308,54308,11,54364,54364,11,54420,54420,11,54476,54476,11,54532,54532,11,54588,54588,11,54644,54644,11,54700,54700,11,54756,54756,11,54812,54812,11,54868,54868,11,54924,54924,11,54980,54980,11,55036,55036,11,55092,55092,11,55148,55148,11,55216,55238,9,65056,65071,5,65529,65531,4,68097,68099,5,68159,68159,5,69446,69456,5,69688,69702,5,69808,69810,7,69815,69816,7,69821,69821,1,69888,69890,5,69932,69932,7,69957,69958,7,70016,70017,5,70067,70069,7,70079,70080,7,70089,70092,5,70095,70095,5,70191,70193,5,70196,70196,5,70198,70199,5,70367,70367,5,70371,70378,5,70402,70403,7,70462,70462,5,70464,70464,5,70471,70472,7,70487,70487,5,70502,70508,5,70709,70711,7,70720,70721,7,70725,70725,7,70750,70750,5,70833,70834,7,70841,70841,7,70843,70844,7,70846,70846,7,70849,70849,7,71087,71087,5,71090,71093,5,71100,71101,5,71103,71104,5,71216,71218,7,71227,71228,7,71230,71230,7,71339,71339,5,71341,71341,5,71344,71349,5,71351,71351,5,71456,71457,7,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123628,123631,5,125252,125258,5,126980,126980,14,127183,127183,14,127245,127247,14,127340,127343,14,127358,127359,14,127377,127386,14,127462,127487,6,127491,127503,14,127535,127535,14,127548,127551,14,127568,127569,14,127744,127777,14,127780,127891,14,127894,127895,14,127897,127899,14,127902,127984,14,127987,127989,14,127991,127994,14,128000,128253,14,128255,128317,14,128329,128334,14,128336,128359,14,128367,128368,14,128371,128377,14,128379,128390,14,128392,128393,14,128398,128399,14,128401,128404,14,128407,128419,14,128421,128421,14,128424,128424,14,128433,128434,14,128444,128444,14,128450,128452,14,128465,128467,14,128476,128478,14,128481,128481,14,128483,128483,14,128488,128488,14,128495,128495,14,128499,128499,14,128506,128591,14,128710,128714,14,128721,128722,14,128725,128725,14,128728,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129664,129666,14,129671,129679,14,129686,129704,14,129712,129718,14,129728,129730,14,129744,129750,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2259,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3134,3136,5,3142,3144,5,3157,3158,5,3201,3201,5,3260,3260,5,3263,3263,5,3266,3266,5,3270,3270,5,3274,3275,7,3285,3286,5,3328,3329,5,3387,3388,5,3391,3392,7,3398,3400,7,3405,3405,5,3415,3415,5,3457,3457,5,3530,3530,5,3536,3537,7,3542,3542,5,3551,3551,5,3633,3633,5,3636,3642,5,3761,3761,5,3764,3772,5,3864,3865,5,3895,3895,5,3902,3903,7,3967,3967,7,3974,3975,5,3993,4028,5,4141,4144,5,4146,4151,5,4155,4156,7,4182,4183,7,4190,4192,5,4226,4226,5,4229,4230,5,4253,4253,5,4448,4519,9,4957,4959,5,5938,5940,5,6002,6003,5,6070,6070,7,6078,6085,7,6087,6088,7,6109,6109,5,6158,6158,4,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6848,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7673,5,8203,8203,4,8205,8205,13,8232,8232,4,8234,8238,4,8265,8265,14,8293,8293,4,8400,8412,5,8417,8417,5,8421,8432,5,8505,8505,14,8617,8618,14,9000,9000,14,9167,9167,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9776,9783,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9935,14,9937,9937,14,9939,9940,14,9961,9962,14,9968,9973,14,9975,9978,14,9981,9981,14,9986,9986,14,9989,9989,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10084,14,10133,10135,14,10160,10160,14,10548,10549,14,11035,11036,14,11093,11093,14,11647,11647,5,12330,12333,5,12336,12336,14,12441,12442,5,12953,12953,14,42608,42610,5,42654,42655,5,43010,43010,5,43019,43019,5,43045,43046,5,43052,43052,5,43188,43203,7,43232,43249,5,43302,43309,5,43346,43347,7,43392,43394,5,43443,43443,5,43446,43449,5,43452,43453,5,43493,43493,5,43567,43568,7,43571,43572,7,43587,43587,5,43597,43597,7,43696,43696,5,43703,43704,5,43713,43713,5,43756,43757,5,43765,43765,7,44003,44004,7,44006,44007,7,44009,44010,7,44013,44013,5,44033,44059,12,44061,44087,12,44089,44115,12,44117,44143,12,44145,44171,12,44173,44199,12,44201,44227,12,44229,44255,12,44257,44283,12,44285,44311,12,44313,44339,12,44341,44367,12,44369,44395,12,44397,44423,12,44425,44451,12,44453,44479,12,44481,44507,12,44509,44535,12,44537,44563,12,44565,44591,12,44593,44619,12,44621,44647,12,44649,44675,12,44677,44703,12,44705,44731,12,44733,44759,12,44761,44787,12,44789,44815,12,44817,44843,12,44845,44871,12,44873,44899,12,44901,44927,12,44929,44955,12,44957,44983,12,44985,45011,12,45013,45039,12,45041,45067,12,45069,45095,12,45097,45123,12,45125,45151,12,45153,45179,12,45181,45207,12,45209,45235,12,45237,45263,12,45265,45291,12,45293,45319,12,45321,45347,12,45349,45375,12,45377,45403,12,45405,45431,12,45433,45459,12,45461,45487,12,45489,45515,12,45517,45543,12,45545,45571,12,45573,45599,12,45601,45627,12,45629,45655,12,45657,45683,12,45685,45711,12,45713,45739,12,45741,45767,12,45769,45795,12,45797,45823,12,45825,45851,12,45853,45879,12,45881,45907,12,45909,45935,12,45937,45963,12,45965,45991,12,45993,46019,12,46021,46047,12,46049,46075,12,46077,46103,12,46105,46131,12,46133,46159,12,46161,46187,12,46189,46215,12,46217,46243,12,46245,46271,12,46273,46299,12,46301,46327,12,46329,46355,12,46357,46383,12,46385,46411,12,46413,46439,12,46441,46467,12,46469,46495,12,46497,46523,12,46525,46551,12,46553,46579,12,46581,46607,12,46609,46635,12,46637,46663,12,46665,46691,12,46693,46719,12,46721,46747,12,46749,46775,12,46777,46803,12,46805,46831,12,46833,46859,12,46861,46887,12,46889,46915,12,46917,46943,12,46945,46971,12,46973,46999,12,47001,47027,12,47029,47055,12,47057,47083,12,47085,47111,12,47113,47139,12,47141,47167,12,47169,47195,12,47197,47223,12,47225,47251,12,47253,47279,12,47281,47307,12,47309,47335,12,47337,47363,12,47365,47391,12,47393,47419,12,47421,47447,12,47449,47475,12,47477,47503,12,47505,47531,12,47533,47559,12,47561,47587,12,47589,47615,12,47617,47643,12,47645,47671,12,47673,47699,12,47701,47727,12,47729,47755,12,47757,47783,12,47785,47811,12,47813,47839,12,47841,47867,12,47869,47895,12,47897,47923,12,47925,47951,12,47953,47979,12,47981,48007,12,48009,48035,12,48037,48063,12,48065,48091,12,48093,48119,12,48121,48147,12,48149,48175,12,48177,48203,12,48205,48231,12,48233,48259,12,48261,48287,12,48289,48315,12,48317,48343,12,48345,48371,12,48373,48399,12,48401,48427,12,48429,48455,12,48457,48483,12,48485,48511,12,48513,48539,12,48541,48567,12,48569,48595,12,48597,48623,12,48625,48651,12,48653,48679,12,48681,48707,12,48709,48735,12,48737,48763,12,48765,48791,12,48793,48819,12,48821,48847,12,48849,48875,12,48877,48903,12,48905,48931,12,48933,48959,12,48961,48987,12,48989,49015,12,49017,49043,12,49045,49071,12,49073,49099,12,49101,49127,12,49129,49155,12,49157,49183,12,49185,49211,12,49213,49239,12,49241,49267,12,49269,49295,12,49297,49323,12,49325,49351,12,49353,49379,12,49381,49407,12,49409,49435,12,49437,49463,12,49465,49491,12,49493,49519,12,49521,49547,12,49549,49575,12,49577,49603,12,49605,49631,12,49633,49659,12,49661,49687,12,49689,49715,12,49717,49743,12,49745,49771,12,49773,49799,12,49801,49827,12,49829,49855,12,49857,49883,12,49885,49911,12,49913,49939,12,49941,49967,12,49969,49995,12,49997,50023,12,50025,50051,12,50053,50079,12,50081,50107,12,50109,50135,12,50137,50163,12,50165,50191,12,50193,50219,12,50221,50247,12,50249,50275,12,50277,50303,12,50305,50331,12,50333,50359,12,50361,50387,12,50389,50415,12,50417,50443,12,50445,50471,12,50473,50499,12,50501,50527,12,50529,50555,12,50557,50583,12,50585,50611,12,50613,50639,12,50641,50667,12,50669,50695,12,50697,50723,12,50725,50751,12,50753,50779,12,50781,50807,12,50809,50835,12,50837,50863,12,50865,50891,12,50893,50919,12,50921,50947,12,50949,50975,12,50977,51003,12,51005,51031,12,51033,51059,12,51061,51087,12,51089,51115,12,51117,51143,12,51145,51171,12,51173,51199,12,51201,51227,12,51229,51255,12,51257,51283,12,51285,51311,12,51313,51339,12,51341,51367,12,51369,51395,12,51397,51423,12,51425,51451,12,51453,51479,12,51481,51507,12,51509,51535,12,51537,51563,12,51565,51591,12,51593,51619,12,51621,51647,12,51649,51675,12,51677,51703,12,51705,51731,12,51733,51759,12,51761,51787,12,51789,51815,12,51817,51843,12,51845,51871,12,51873,51899,12,51901,51927,12,51929,51955,12,51957,51983,12,51985,52011,12,52013,52039,12,52041,52067,12,52069,52095,12,52097,52123,12,52125,52151,12,52153,52179,12,52181,52207,12,52209,52235,12,52237,52263,12,52265,52291,12,52293,52319,12,52321,52347,12,52349,52375,12,52377,52403,12,52405,52431,12,52433,52459,12,52461,52487,12,52489,52515,12,52517,52543,12,52545,52571,12,52573,52599,12,52601,52627,12,52629,52655,12,52657,52683,12,52685,52711,12,52713,52739,12,52741,52767,12,52769,52795,12,52797,52823,12,52825,52851,12,52853,52879,12,52881,52907,12,52909,52935,12,52937,52963,12,52965,52991,12,52993,53019,12,53021,53047,12,53049,53075,12,53077,53103,12,53105,53131,12,53133,53159,12,53161,53187,12,53189,53215,12,53217,53243,12,53245,53271,12,53273,53299,12,53301,53327,12,53329,53355,12,53357,53383,12,53385,53411,12,53413,53439,12,53441,53467,12,53469,53495,12,53497,53523,12,53525,53551,12,53553,53579,12,53581,53607,12,53609,53635,12,53637,53663,12,53665,53691,12,53693,53719,12,53721,53747,12,53749,53775,12,53777,53803,12,53805,53831,12,53833,53859,12,53861,53887,12,53889,53915,12,53917,53943,12,53945,53971,12,53973,53999,12,54001,54027,12,54029,54055,12,54057,54083,12,54085,54111,12,54113,54139,12,54141,54167,12,54169,54195,12,54197,54223,12,54225,54251,12,54253,54279,12,54281,54307,12,54309,54335,12,54337,54363,12,54365,54391,12,54393,54419,12,54421,54447,12,54449,54475,12,54477,54503,12,54505,54531,12,54533,54559,12,54561,54587,12,54589,54615,12,54617,54643,12,54645,54671,12,54673,54699,12,54701,54727,12,54729,54755,12,54757,54783,12,54785,54811,12,54813,54839,12,54841,54867,12,54869,54895,12,54897,54923,12,54925,54951,12,54953,54979,12,54981,55007,12,55009,55035,12,55037,55063,12,55065,55091,12,55093,55119,12,55121,55147,12,55149,55175,12,55177,55203,12,55243,55291,10,65024,65039,5,65279,65279,4,65520,65528,4,66045,66045,5,66422,66426,5,68101,68102,5,68152,68154,5,68325,68326,5,69291,69292,5,69632,69632,7,69634,69634,7,69759,69761,5]',
      );
    }
    function me(e, t) {
      return ((t << 5) - t + e) | 0;
    }
    function ge(e, t) {
      t = me(149417, t);
      for (var n = 0, r = e.length; n < r; n++) t = me(e.charCodeAt(n), t);
      return t;
    }
    function ve(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 32,
        r = n - t,
        i = ~((1 << r) - 1);
      return ((e << t) | ((i & e) >>> r)) >>> 0;
    }
    function pe(e) {
      for (
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : e.byteLength,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          i = 0;
        i < n;
        i++
      )
        e[t + i] = r;
    }
    function _e(e, t) {
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '0';
      while (e.length < t) e = n + e;
      return e;
    }
    function ye(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32;
      return e instanceof ArrayBuffer
        ? Array.from(new Uint8Array(e))
            .map(function(e) {
              return e.toString(16).padStart(2, '0');
            })
            .join('')
        : _e((e >>> 0).toString(16), t / 4);
    }
    fe._INSTANCE = null;
    var be = (function() {
      function e() {
        h(this, e),
          (this._h0 = 1732584193),
          (this._h1 = 4023233417),
          (this._h2 = 2562383102),
          (this._h3 = 271733878),
          (this._h4 = 3285377520),
          (this._buff = new Uint8Array(67)),
          (this._buffDV = new DataView(this._buff.buffer)),
          (this._buffLen = 0),
          (this._totalLen = 0),
          (this._leftoverHighSurrogate = 0),
          (this._finished = !1);
      }
      return (
        d(e, [
          {
            key: 'update',
            value: function(e) {
              var t = e.length;
              if (0 !== t) {
                var n,
                  r,
                  i = this._buff,
                  o = this._buffLen,
                  a = this._leftoverHighSurrogate;
                0 !== a
                  ? ((n = a), (r = -1), (a = 0))
                  : ((n = e.charCodeAt(0)), (r = 0));
                while (1) {
                  var s = n;
                  if (le(n)) {
                    if (!(r + 1 < t)) {
                      a = n;
                      break;
                    }
                    var u = e.charCodeAt(r + 1);
                    ce(u) ? (r++, (s = he(n, u))) : (s = 65533);
                  } else ce(n) && (s = 65533);
                  if (((o = this._push(i, o, s)), r++, !(r < t))) break;
                  n = e.charCodeAt(r);
                }
                (this._buffLen = o), (this._leftoverHighSurrogate = a);
              }
            },
          },
          {
            key: '_push',
            value: function(e, t, n) {
              return (
                n < 128
                  ? (e[t++] = n)
                  : n < 2048
                  ? ((e[t++] = 192 | ((1984 & n) >>> 6)),
                    (e[t++] = 128 | ((63 & n) >>> 0)))
                  : n < 65536
                  ? ((e[t++] = 224 | ((61440 & n) >>> 12)),
                    (e[t++] = 128 | ((4032 & n) >>> 6)),
                    (e[t++] = 128 | ((63 & n) >>> 0)))
                  : ((e[t++] = 240 | ((1835008 & n) >>> 18)),
                    (e[t++] = 128 | ((258048 & n) >>> 12)),
                    (e[t++] = 128 | ((4032 & n) >>> 6)),
                    (e[t++] = 128 | ((63 & n) >>> 0))),
                t >= 64 &&
                  (this._step(),
                  (t -= 64),
                  (this._totalLen += 64),
                  (e[0] = e[64]),
                  (e[1] = e[65]),
                  (e[2] = e[66])),
                t
              );
            },
          },
          {
            key: 'digest',
            value: function() {
              return (
                this._finished ||
                  ((this._finished = !0),
                  this._leftoverHighSurrogate &&
                    ((this._leftoverHighSurrogate = 0),
                    (this._buffLen = this._push(
                      this._buff,
                      this._buffLen,
                      65533,
                    ))),
                  (this._totalLen += this._buffLen),
                  this._wrapUp()),
                ye(this._h0) +
                  ye(this._h1) +
                  ye(this._h2) +
                  ye(this._h3) +
                  ye(this._h4)
              );
            },
          },
          {
            key: '_wrapUp',
            value: function() {
              (this._buff[this._buffLen++] = 128),
                pe(this._buff, this._buffLen),
                this._buffLen > 56 && (this._step(), pe(this._buff));
              var e = 8 * this._totalLen;
              this._buffDV.setUint32(56, Math.floor(e / 4294967296), !1),
                this._buffDV.setUint32(60, e % 4294967296, !1),
                this._step();
            },
          },
          {
            key: '_step',
            value: function() {
              for (
                var t = e._bigBlock32, n = this._buffDV, r = 0;
                r < 64;
                r += 4
              )
                t.setUint32(r, n.getUint32(r, !1), !1);
              for (var i = 64; i < 320; i += 4)
                t.setUint32(
                  i,
                  ve(
                    t.getUint32(i - 12, !1) ^
                      t.getUint32(i - 32, !1) ^
                      t.getUint32(i - 56, !1) ^
                      t.getUint32(i - 64, !1),
                    1,
                  ),
                  !1,
                );
              for (
                var o,
                  a,
                  s,
                  u = this._h0,
                  l = this._h1,
                  c = this._h2,
                  h = this._h3,
                  f = this._h4,
                  d = 0;
                d < 80;
                d++
              )
                d < 20
                  ? ((o = (l & c) | (~l & h)), (a = 1518500249))
                  : d < 40
                  ? ((o = l ^ c ^ h), (a = 1859775393))
                  : d < 60
                  ? ((o = (l & c) | (l & h) | (c & h)), (a = 2400959708))
                  : ((o = l ^ c ^ h), (a = 3395469782)),
                  (s =
                    (ve(u, 5) + o + f + a + t.getUint32(4 * d, !1)) &
                    4294967295),
                  (f = h),
                  (h = c),
                  (c = ve(l, 30)),
                  (l = u),
                  (u = s);
              (this._h0 = (this._h0 + u) & 4294967295),
                (this._h1 = (this._h1 + l) & 4294967295),
                (this._h2 = (this._h2 + c) & 4294967295),
                (this._h3 = (this._h3 + h) & 4294967295),
                (this._h4 = (this._h4 + f) & 4294967295);
            },
          },
        ]),
        e
      );
    })();
    be._bigBlock32 = new DataView(new ArrayBuffer(320));
    var Ce = (function() {
      function e(t) {
        h(this, e), (this.source = t);
      }
      return (
        d(e, [
          {
            key: 'getElements',
            value: function() {
              for (
                var e = this.source,
                  t = new Int32Array(e.length),
                  n = 0,
                  r = e.length;
                n < r;
                n++
              )
                t[n] = e.charCodeAt(n);
              return t;
            },
          },
        ]),
        e
      );
    })();
    function ke(e, t, n) {
      return new Ee(new Ce(e), new Ce(t)).ComputeDiff(n).changes;
    }
    var Le = (function() {
        function e() {
          h(this, e);
        }
        return (
          d(e, null, [
            {
              key: 'Assert',
              value: function(e, t) {
                if (!e) throw new Error(t);
              },
            },
          ]),
          e
        );
      })(),
      Se = (function() {
        function e() {
          h(this, e);
        }
        return (
          d(e, null, [
            {
              key: 'Copy',
              value: function(e, t, n, r, i) {
                for (var o = 0; o < i; o++) n[r + o] = e[t + o];
              },
            },
            {
              key: 'Copy2',
              value: function(e, t, n, r, i) {
                for (var o = 0; o < i; o++) n[r + o] = e[t + o];
              },
            },
          ]),
          e
        );
      })(),
      we = (function() {
        function e() {
          h(this, e),
            (this.m_changes = []),
            (this.m_originalStart = 1073741824),
            (this.m_modifiedStart = 1073741824),
            (this.m_originalCount = 0),
            (this.m_modifiedCount = 0);
        }
        return (
          d(e, [
            {
              key: 'MarkNextChange',
              value: function() {
                (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                  this.m_changes.push(
                    new oe(
                      this.m_originalStart,
                      this.m_originalCount,
                      this.m_modifiedStart,
                      this.m_modifiedCount,
                    ),
                  ),
                  (this.m_originalCount = 0),
                  (this.m_modifiedCount = 0),
                  (this.m_originalStart = 1073741824),
                  (this.m_modifiedStart = 1073741824);
              },
            },
            {
              key: 'AddOriginalElement',
              value: function(e, t) {
                (this.m_originalStart = Math.min(this.m_originalStart, e)),
                  (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
                  this.m_originalCount++;
              },
            },
            {
              key: 'AddModifiedElement',
              value: function(e, t) {
                (this.m_originalStart = Math.min(this.m_originalStart, e)),
                  (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
                  this.m_modifiedCount++;
              },
            },
            {
              key: 'getChanges',
              value: function() {
                return (
                  (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                    this.MarkNextChange(),
                  this.m_changes
                );
              },
            },
            {
              key: 'getReverseChanges',
              value: function() {
                return (
                  (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                    this.MarkNextChange(),
                  this.m_changes.reverse(),
                  this.m_changes
                );
              },
            },
          ]),
          e
        );
      })(),
      Ee = (function() {
        function e(t, n) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          h(this, e), (this.ContinueProcessingPredicate = r);
          var i = e._getElements(t),
            o = ie(i, 3),
            a = o[0],
            s = o[1],
            u = o[2],
            l = e._getElements(n),
            c = ie(l, 3),
            f = c[0],
            d = c[1],
            m = c[2];
          (this._hasStrings = u && m),
            (this._originalStringElements = a),
            (this._originalElementsOrHash = s),
            (this._modifiedStringElements = f),
            (this._modifiedElementsOrHash = d),
            (this.m_forwardHistory = []),
            (this.m_reverseHistory = []);
        }
        return (
          d(
            e,
            [
              {
                key: 'ElementsAreEqual',
                value: function(e, t) {
                  return (
                    this._originalElementsOrHash[e] ===
                      this._modifiedElementsOrHash[t] &&
                    (!this._hasStrings ||
                      this._originalStringElements[e] ===
                        this._modifiedStringElements[t])
                  );
                },
              },
              {
                key: 'OriginalElementsAreEqual',
                value: function(e, t) {
                  return (
                    this._originalElementsOrHash[e] ===
                      this._originalElementsOrHash[t] &&
                    (!this._hasStrings ||
                      this._originalStringElements[e] ===
                        this._originalStringElements[t])
                  );
                },
              },
              {
                key: 'ModifiedElementsAreEqual',
                value: function(e, t) {
                  return (
                    this._modifiedElementsOrHash[e] ===
                      this._modifiedElementsOrHash[t] &&
                    (!this._hasStrings ||
                      this._modifiedStringElements[e] ===
                        this._modifiedStringElements[t])
                  );
                },
              },
              {
                key: 'ComputeDiff',
                value: function(e) {
                  return this._ComputeDiff(
                    0,
                    this._originalElementsOrHash.length - 1,
                    0,
                    this._modifiedElementsOrHash.length - 1,
                    e,
                  );
                },
              },
              {
                key: '_ComputeDiff',
                value: function(e, t, n, r, i) {
                  var o = [!1],
                    a = this.ComputeDiffRecursive(e, t, n, r, o);
                  return (
                    i && (a = this.PrettifyChanges(a)),
                    { quitEarly: o[0], changes: a }
                  );
                },
              },
              {
                key: 'ComputeDiffRecursive',
                value: function(e, t, n, r, i) {
                  i[0] = !1;
                  while (e <= t && n <= r && this.ElementsAreEqual(e, n))
                    e++, n++;
                  while (t >= e && r >= n && this.ElementsAreEqual(t, r))
                    t--, r--;
                  var o;
                  if (e > t || n > r)
                    return (
                      n <= r
                        ? (Le.Assert(
                            e === t + 1,
                            'originalStart should only be one more than originalEnd',
                          ),
                          (o = [new oe(e, 0, n, r - n + 1)]))
                        : e <= t
                        ? (Le.Assert(
                            n === r + 1,
                            'modifiedStart should only be one more than modifiedEnd',
                          ),
                          (o = [new oe(e, t - e + 1, n, 0)]))
                        : (Le.Assert(
                            e === t + 1,
                            'originalStart should only be one more than originalEnd',
                          ),
                          Le.Assert(
                            n === r + 1,
                            'modifiedStart should only be one more than modifiedEnd',
                          ),
                          (o = [])),
                      o
                    );
                  var a = [0],
                    s = [0],
                    u = this.ComputeRecursionPoint(e, t, n, r, a, s, i),
                    l = a[0],
                    c = s[0];
                  if (null !== u) return u;
                  if (!i[0]) {
                    var h = this.ComputeDiffRecursive(e, l, n, c, i),
                      f = [];
                    return (
                      (f = i[0]
                        ? [
                            new oe(
                              l + 1,
                              t - (l + 1) + 1,
                              c + 1,
                              r - (c + 1) + 1,
                            ),
                          ]
                        : this.ComputeDiffRecursive(l + 1, t, c + 1, r, i)),
                      this.ConcatenateChanges(h, f)
                    );
                  }
                  return [new oe(e, t - e + 1, n, r - n + 1)];
                },
              },
              {
                key: 'WALKTRACE',
                value: function(
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  h,
                  f,
                  d,
                  m,
                  g,
                  v,
                  p,
                ) {
                  var _ = null,
                    y = null,
                    b = new we(),
                    C = t,
                    k = n,
                    L = f[0] - g[0] - r,
                    S = -1073741824,
                    w = this.m_forwardHistory.length - 1;
                  do {
                    var E = L + e;
                    E === C || (E < k && u[E - 1] < u[E + 1])
                      ? ((c = u[E + 1]),
                        (d = c - L - r),
                        c < S && b.MarkNextChange(),
                        (S = c),
                        b.AddModifiedElement(c + 1, d),
                        (L = E + 1 - e))
                      : ((c = u[E - 1] + 1),
                        (d = c - L - r),
                        c < S && b.MarkNextChange(),
                        (S = c - 1),
                        b.AddOriginalElement(c, d + 1),
                        (L = E - 1 - e)),
                      w >= 0 &&
                        ((u = this.m_forwardHistory[w]),
                        (e = u[0]),
                        (C = 1),
                        (k = u.length - 1));
                  } while (--w >= -1);
                  if (((_ = b.getReverseChanges()), p[0])) {
                    var N = f[0] + 1,
                      A = g[0] + 1;
                    if (null !== _ && _.length > 0) {
                      var x = _[_.length - 1];
                      (N = Math.max(N, x.getOriginalEnd())),
                        (A = Math.max(A, x.getModifiedEnd()));
                    }
                    y = [new oe(N, h - N + 1, A, m - A + 1)];
                  } else {
                    (b = new we()),
                      (C = o),
                      (k = a),
                      (L = f[0] - g[0] - s),
                      (S = 1073741824),
                      (w = v
                        ? this.m_reverseHistory.length - 1
                        : this.m_reverseHistory.length - 2);
                    do {
                      var O = L + i;
                      O === C || (O < k && l[O - 1] >= l[O + 1])
                        ? ((c = l[O + 1] - 1),
                          (d = c - L - s),
                          c > S && b.MarkNextChange(),
                          (S = c + 1),
                          b.AddOriginalElement(c + 1, d + 1),
                          (L = O + 1 - i))
                        : ((c = l[O - 1]),
                          (d = c - L - s),
                          c > S && b.MarkNextChange(),
                          (S = c),
                          b.AddModifiedElement(c + 1, d + 1),
                          (L = O - 1 - i)),
                        w >= 0 &&
                          ((l = this.m_reverseHistory[w]),
                          (i = l[0]),
                          (C = 1),
                          (k = l.length - 1));
                    } while (--w >= -1);
                    y = b.getChanges();
                  }
                  return this.ConcatenateChanges(_, y);
                },
              },
              {
                key: 'ComputeRecursionPoint',
                value: function(e, t, n, r, i, o, a) {
                  var s = 0,
                    u = 0,
                    l = 0,
                    c = 0,
                    h = 0,
                    f = 0;
                  e--,
                    n--,
                    (i[0] = 0),
                    (o[0] = 0),
                    (this.m_forwardHistory = []),
                    (this.m_reverseHistory = []);
                  var d = t - e + (r - n),
                    m = d + 1,
                    g = new Int32Array(m),
                    v = new Int32Array(m),
                    p = r - n,
                    _ = t - e,
                    y = e - n,
                    b = t - r,
                    C = _ - p,
                    k = C % 2 === 0;
                  (g[p] = e), (v[_] = t), (a[0] = !1);
                  for (var L = 1; L <= d / 2 + 1; L++) {
                    var S = 0,
                      w = 0;
                    (l = this.ClipDiagonalBound(p - L, L, p, m)),
                      (c = this.ClipDiagonalBound(p + L, L, p, m));
                    for (var E = l; E <= c; E += 2) {
                      (s =
                        E === l || (E < c && g[E - 1] < g[E + 1])
                          ? g[E + 1]
                          : g[E - 1] + 1),
                        (u = s - (E - p) - y);
                      var N = s;
                      while (
                        s < t &&
                        u < r &&
                        this.ElementsAreEqual(s + 1, u + 1)
                      )
                        s++, u++;
                      if (
                        ((g[E] = s),
                        s + u > S + w && ((S = s), (w = u)),
                        !k && Math.abs(E - _) <= L - 1 && s >= v[E])
                      )
                        return (
                          (i[0] = s),
                          (o[0] = u),
                          N <= v[E] && L <= 1448
                            ? this.WALKTRACE(
                                p,
                                l,
                                c,
                                y,
                                _,
                                h,
                                f,
                                b,
                                g,
                                v,
                                s,
                                t,
                                i,
                                u,
                                r,
                                o,
                                k,
                                a,
                              )
                            : null
                        );
                    }
                    var A = (S - e + (w - n) - L) / 2;
                    if (
                      null !== this.ContinueProcessingPredicate &&
                      !this.ContinueProcessingPredicate(S, A)
                    )
                      return (
                        (a[0] = !0),
                        (i[0] = S),
                        (o[0] = w),
                        A > 0 && L <= 1448
                          ? this.WALKTRACE(
                              p,
                              l,
                              c,
                              y,
                              _,
                              h,
                              f,
                              b,
                              g,
                              v,
                              s,
                              t,
                              i,
                              u,
                              r,
                              o,
                              k,
                              a,
                            )
                          : (e++, n++, [new oe(e, t - e + 1, n, r - n + 1)])
                      );
                    (h = this.ClipDiagonalBound(_ - L, L, _, m)),
                      (f = this.ClipDiagonalBound(_ + L, L, _, m));
                    for (var x = h; x <= f; x += 2) {
                      (s =
                        x === h || (x < f && v[x - 1] >= v[x + 1])
                          ? v[x + 1] - 1
                          : v[x - 1]),
                        (u = s - (x - _) - b);
                      var O = s;
                      while (s > e && u > n && this.ElementsAreEqual(s, u))
                        s--, u--;
                      if (((v[x] = s), k && Math.abs(x - p) <= L && s <= g[x]))
                        return (
                          (i[0] = s),
                          (o[0] = u),
                          O >= g[x] && L <= 1448
                            ? this.WALKTRACE(
                                p,
                                l,
                                c,
                                y,
                                _,
                                h,
                                f,
                                b,
                                g,
                                v,
                                s,
                                t,
                                i,
                                u,
                                r,
                                o,
                                k,
                                a,
                              )
                            : null
                        );
                    }
                    if (L <= 1447) {
                      var T = new Int32Array(c - l + 2);
                      (T[0] = p - l + 1),
                        Se.Copy2(g, l, T, 1, c - l + 1),
                        this.m_forwardHistory.push(T),
                        (T = new Int32Array(f - h + 2)),
                        (T[0] = _ - h + 1),
                        Se.Copy2(v, h, T, 1, f - h + 1),
                        this.m_reverseHistory.push(T);
                    }
                  }
                  return this.WALKTRACE(
                    p,
                    l,
                    c,
                    y,
                    _,
                    h,
                    f,
                    b,
                    g,
                    v,
                    s,
                    t,
                    i,
                    u,
                    r,
                    o,
                    k,
                    a,
                  );
                },
              },
              {
                key: 'PrettifyChanges',
                value: function(e) {
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t],
                      r =
                        t < e.length - 1
                          ? e[t + 1].originalStart
                          : this._originalElementsOrHash.length,
                      i =
                        t < e.length - 1
                          ? e[t + 1].modifiedStart
                          : this._modifiedElementsOrHash.length,
                      o = n.originalLength > 0,
                      a = n.modifiedLength > 0;
                    while (
                      n.originalStart + n.originalLength < r &&
                      n.modifiedStart + n.modifiedLength < i &&
                      (!o ||
                        this.OriginalElementsAreEqual(
                          n.originalStart,
                          n.originalStart + n.originalLength,
                        )) &&
                      (!a ||
                        this.ModifiedElementsAreEqual(
                          n.modifiedStart,
                          n.modifiedStart + n.modifiedLength,
                        ))
                    )
                      n.originalStart++, n.modifiedStart++;
                    var s = [null];
                    t < e.length - 1 &&
                      this.ChangesOverlap(e[t], e[t + 1], s) &&
                      ((e[t] = s[0]), e.splice(t + 1, 1), t--);
                  }
                  for (var u = e.length - 1; u >= 0; u--) {
                    var l = e[u],
                      c = 0,
                      h = 0;
                    if (u > 0) {
                      var f = e[u - 1];
                      f.originalLength > 0 &&
                        (c = f.originalStart + f.originalLength),
                        f.modifiedLength > 0 &&
                          (h = f.modifiedStart + f.modifiedLength);
                    }
                    for (
                      var d = l.originalLength > 0,
                        m = l.modifiedLength > 0,
                        g = 0,
                        v = this._boundaryScore(
                          l.originalStart,
                          l.originalLength,
                          l.modifiedStart,
                          l.modifiedLength,
                        ),
                        p = 1;
                      ;
                      p++
                    ) {
                      var _ = l.originalStart - p,
                        y = l.modifiedStart - p;
                      if (_ < c || y < h) break;
                      if (
                        d &&
                        !this.OriginalElementsAreEqual(_, _ + l.originalLength)
                      )
                        break;
                      if (
                        m &&
                        !this.ModifiedElementsAreEqual(y, y + l.modifiedLength)
                      )
                        break;
                      var b = this._boundaryScore(
                        _,
                        l.originalLength,
                        y,
                        l.modifiedLength,
                      );
                      b > v && ((v = b), (g = p));
                    }
                    (l.originalStart -= g), (l.modifiedStart -= g);
                  }
                  if (this._hasStrings)
                    for (var C = 1, k = e.length; C < k; C++) {
                      var L = e[C - 1],
                        S = e[C],
                        w =
                          S.originalStart - L.originalStart - L.originalLength,
                        E = L.originalStart,
                        N = S.originalStart + S.originalLength,
                        A = N - E,
                        x = L.modifiedStart,
                        O = S.modifiedStart + S.modifiedLength,
                        T = O - x;
                      if (w < 5 && A < 20 && T < 20) {
                        var I = this._findBetterContiguousSequence(
                          E,
                          A,
                          x,
                          T,
                          w,
                        );
                        if (I) {
                          var M = ie(I, 2),
                            P = M[0],
                            R = M[1];
                          (P === L.originalStart + L.originalLength &&
                            R === L.modifiedStart + L.modifiedLength) ||
                            ((L.originalLength = P - L.originalStart),
                            (L.modifiedLength = R - L.modifiedStart),
                            (S.originalStart = P + w),
                            (S.modifiedStart = R + w),
                            (S.originalLength = N - S.originalStart),
                            (S.modifiedLength = O - S.modifiedStart));
                        }
                      }
                    }
                  return e;
                },
              },
              {
                key: '_findBetterContiguousSequence',
                value: function(e, t, n, r, i) {
                  if (t < i || r < i) return null;
                  for (
                    var o = e + t - i + 1,
                      a = n + r - i + 1,
                      s = 0,
                      u = 0,
                      l = 0,
                      c = e;
                    c < o;
                    c++
                  )
                    for (var h = n; h < a; h++) {
                      var f = this._contiguousSequenceScore(c, h, i);
                      f > 0 && f > s && ((s = f), (u = c), (l = h));
                    }
                  return s > 0 ? [u, l] : null;
                },
              },
              {
                key: '_contiguousSequenceScore',
                value: function(e, t, n) {
                  for (var r = 0, i = 0; i < n; i++) {
                    if (!this.ElementsAreEqual(e + i, t + i)) return 0;
                    r += this._originalStringElements[e + i].length;
                  }
                  return r;
                },
              },
              {
                key: '_OriginalIsBoundary',
                value: function(e) {
                  return (
                    e <= 0 ||
                    e >= this._originalElementsOrHash.length - 1 ||
                    (this._hasStrings &&
                      /^\s*$/.test(this._originalStringElements[e]))
                  );
                },
              },
              {
                key: '_OriginalRegionIsBoundary',
                value: function(e, t) {
                  if (
                    this._OriginalIsBoundary(e) ||
                    this._OriginalIsBoundary(e - 1)
                  )
                    return !0;
                  if (t > 0) {
                    var n = e + t;
                    if (
                      this._OriginalIsBoundary(n - 1) ||
                      this._OriginalIsBoundary(n)
                    )
                      return !0;
                  }
                  return !1;
                },
              },
              {
                key: '_ModifiedIsBoundary',
                value: function(e) {
                  return (
                    e <= 0 ||
                    e >= this._modifiedElementsOrHash.length - 1 ||
                    (this._hasStrings &&
                      /^\s*$/.test(this._modifiedStringElements[e]))
                  );
                },
              },
              {
                key: '_ModifiedRegionIsBoundary',
                value: function(e, t) {
                  if (
                    this._ModifiedIsBoundary(e) ||
                    this._ModifiedIsBoundary(e - 1)
                  )
                    return !0;
                  if (t > 0) {
                    var n = e + t;
                    if (
                      this._ModifiedIsBoundary(n - 1) ||
                      this._ModifiedIsBoundary(n)
                    )
                      return !0;
                  }
                  return !1;
                },
              },
              {
                key: '_boundaryScore',
                value: function(e, t, n, r) {
                  var i = this._OriginalRegionIsBoundary(e, t) ? 1 : 0,
                    o = this._ModifiedRegionIsBoundary(n, r) ? 1 : 0;
                  return i + o;
                },
              },
              {
                key: 'ConcatenateChanges',
                value: function(e, t) {
                  var n = [];
                  if (0 === e.length || 0 === t.length)
                    return t.length > 0 ? t : e;
                  if (this.ChangesOverlap(e[e.length - 1], t[0], n)) {
                    var r = new Array(e.length + t.length - 1);
                    return (
                      Se.Copy(e, 0, r, 0, e.length - 1),
                      (r[e.length - 1] = n[0]),
                      Se.Copy(t, 1, r, e.length, t.length - 1),
                      r
                    );
                  }
                  var i = new Array(e.length + t.length);
                  return (
                    Se.Copy(e, 0, i, 0, e.length),
                    Se.Copy(t, 0, i, e.length, t.length),
                    i
                  );
                },
              },
              {
                key: 'ChangesOverlap',
                value: function(e, t, n) {
                  if (
                    (Le.Assert(
                      e.originalStart <= t.originalStart,
                      'Left change is not less than or equal to right change',
                    ),
                    Le.Assert(
                      e.modifiedStart <= t.modifiedStart,
                      'Left change is not less than or equal to right change',
                    ),
                    e.originalStart + e.originalLength >= t.originalStart ||
                      e.modifiedStart + e.modifiedLength >= t.modifiedStart)
                  ) {
                    var r = e.originalStart,
                      i = e.originalLength,
                      o = e.modifiedStart,
                      a = e.modifiedLength;
                    return (
                      e.originalStart + e.originalLength >= t.originalStart &&
                        (i =
                          t.originalStart + t.originalLength - e.originalStart),
                      e.modifiedStart + e.modifiedLength >= t.modifiedStart &&
                        (a =
                          t.modifiedStart + t.modifiedLength - e.modifiedStart),
                      (n[0] = new oe(r, i, o, a)),
                      !0
                    );
                  }
                  return (n[0] = null), !1;
                },
              },
              {
                key: 'ClipDiagonalBound',
                value: function(e, t, n, r) {
                  if (e >= 0 && e < r) return e;
                  var i = n,
                    o = r - n - 1,
                    a = t % 2 === 0;
                  if (e < 0) {
                    var s = i % 2 === 0;
                    return a === s ? 0 : 1;
                  }
                  var u = o % 2 === 0;
                  return a === u ? r - 1 : r - 2;
                },
              },
            ],
            [
              {
                key: '_isStringArray',
                value: function(e) {
                  return e.length > 0 && 'string' === typeof e[0];
                },
              },
              {
                key: '_getElements',
                value: function(t) {
                  var n = t.getElements();
                  if (e._isStringArray(n)) {
                    for (
                      var r = new Int32Array(n.length), i = 0, o = n.length;
                      i < o;
                      i++
                    )
                      r[i] = ge(n[i], 0);
                    return [n, r, !0];
                  }
                  return n instanceof Int32Array
                    ? [[], n, !1]
                    : [[], new Int32Array(n), !1];
                },
              },
            ],
          ),
          e
        );
      })(),
      Ne = n('wxcJ'),
      Ae = 65,
      xe = 97,
      Oe = 90,
      Te = 122,
      Ie = 46,
      Me = 47,
      Pe = 92,
      Re = 58,
      Ue = 63,
      De = (function(e) {
        i(n, e);
        var t = c(n);
        function n(e, r, i) {
          var o, a;
          h(this, n),
            'string' === typeof r && 0 === r.indexOf('not ')
              ? ((a = 'must not be'), (r = r.replace(/^not /, '')))
              : (a = 'must be');
          var s = -1 !== e.indexOf('.') ? 'property' : 'argument',
            u = 'The "'
              .concat(e, '" ')
              .concat(s, ' ')
              .concat(a, ' of type ')
              .concat(r);
          return (
            (u += '. Received type '.concat(typeof i)),
            (o = t.call(this, u)),
            (o.code = 'ERR_INVALID_ARG_TYPE'),
            o
          );
        }
        return n;
      })(w(Error));
    function Fe(e, t) {
      if ('string' !== typeof e) throw new De(t, 'string', e);
    }
    function Be(e) {
      return e === Me || e === Pe;
    }
    function Ke(e) {
      return e === Me;
    }
    function We(e) {
      return (e >= Ae && e <= Oe) || (e >= xe && e <= Te);
    }
    function qe(e, t, n, r) {
      for (var i = '', o = 0, a = -1, s = 0, u = 0, l = 0; l <= e.length; ++l) {
        if (l < e.length) u = e.charCodeAt(l);
        else {
          if (r(u)) break;
          u = Me;
        }
        if (r(u)) {
          if (a === l - 1 || 1 === s);
          else if (2 === s) {
            if (
              i.length < 2 ||
              2 !== o ||
              i.charCodeAt(i.length - 1) !== Ie ||
              i.charCodeAt(i.length - 2) !== Ie
            ) {
              if (i.length > 2) {
                var c = i.lastIndexOf(n);
                -1 === c
                  ? ((i = ''), (o = 0))
                  : ((i = i.slice(0, c)),
                    (o = i.length - 1 - i.lastIndexOf(n))),
                  (a = l),
                  (s = 0);
                continue;
              }
              if (0 !== i.length) {
                (i = ''), (o = 0), (a = l), (s = 0);
                continue;
              }
            }
            t && ((i += i.length > 0 ? ''.concat(n, '..') : '..'), (o = 2));
          } else
            i.length > 0
              ? (i += ''.concat(n).concat(e.slice(a + 1, l)))
              : (i = e.slice(a + 1, l)),
              (o = l - a - 1);
          (a = l), (s = 0);
        } else u === Ie && -1 !== s ? ++s : (s = -1);
      }
      return i;
    }
    function He(e, t) {
      if (null === t || 'object' !== typeof t)
        throw new De('pathObject', 'Object', t);
      var n = t.dir || t.root,
        r = t.base || ''.concat(t.name || '').concat(t.ext || '');
      return n
        ? n === t.root
          ? ''.concat(n).concat(r)
          : ''
              .concat(n)
              .concat(e)
              .concat(r)
        : r;
    }
    var Ve = {
        resolve: function() {
          for (
            var e = '', t = '', n = !1, r = arguments.length - 1;
            r >= -1;
            r--
          ) {
            var i = void 0;
            if (r >= 0) {
              if (
                ((i = r < 0 || arguments.length <= r ? void 0 : arguments[r]),
                Fe(i, 'path'),
                0 === i.length)
              )
                continue;
            } else
              0 === e.length
                ? (i = Ne['a']())
                : ((i = Ne['b']['='.concat(e)] || Ne['a']()),
                  (void 0 === i ||
                    (i.slice(0, 2).toLowerCase() !== e.toLowerCase() &&
                      i.charCodeAt(2) === Pe)) &&
                    (i = ''.concat(e, '\\')));
            var o = i.length,
              a = 0,
              s = '',
              u = !1,
              l = i.charCodeAt(0);
            if (1 === o) Be(l) && ((a = 1), (u = !0));
            else if (Be(l))
              if (((u = !0), Be(i.charCodeAt(1)))) {
                var c = 2,
                  h = c;
                while (c < o && !Be(i.charCodeAt(c))) c++;
                if (c < o && c !== h) {
                  var f = i.slice(h, c);
                  h = c;
                  while (c < o && Be(i.charCodeAt(c))) c++;
                  if (c < o && c !== h) {
                    h = c;
                    while (c < o && !Be(i.charCodeAt(c))) c++;
                    (c !== o && c === h) ||
                      ((s = '\\\\'.concat(f, '\\').concat(i.slice(h, c))),
                      (a = c));
                  }
                }
              } else a = 1;
            else
              We(l) &&
                i.charCodeAt(1) === Re &&
                ((s = i.slice(0, 2)),
                (a = 2),
                o > 2 && Be(i.charCodeAt(2)) && ((u = !0), (a = 3)));
            if (s.length > 0)
              if (e.length > 0) {
                if (s.toLowerCase() !== e.toLowerCase()) continue;
              } else e = s;
            if (n) {
              if (e.length > 0) break;
            } else if (
              ((t = ''.concat(i.slice(a), '\\').concat(t)),
              (n = u),
              u && e.length > 0)
            )
              break;
          }
          return (
            (t = qe(t, !n, '\\', Be)),
            n ? ''.concat(e, '\\').concat(t) : ''.concat(e).concat(t) || '.'
          );
        },
        normalize: function(e) {
          Fe(e, 'path');
          var t = e.length;
          if (0 === t) return '.';
          var n,
            r = 0,
            i = !1,
            o = e.charCodeAt(0);
          if (1 === t) return Ke(o) ? '\\' : e;
          if (Be(o))
            if (((i = !0), Be(e.charCodeAt(1)))) {
              var a = 2,
                s = a;
              while (a < t && !Be(e.charCodeAt(a))) a++;
              if (a < t && a !== s) {
                var u = e.slice(s, a);
                s = a;
                while (a < t && Be(e.charCodeAt(a))) a++;
                if (a < t && a !== s) {
                  s = a;
                  while (a < t && !Be(e.charCodeAt(a))) a++;
                  if (a === t)
                    return '\\\\'.concat(u, '\\').concat(e.slice(s), '\\');
                  a !== s &&
                    ((n = '\\\\'.concat(u, '\\').concat(e.slice(s, a))),
                    (r = a));
                }
              }
            } else r = 1;
          else
            We(o) &&
              e.charCodeAt(1) === Re &&
              ((n = e.slice(0, 2)),
              (r = 2),
              t > 2 && Be(e.charCodeAt(2)) && ((i = !0), (r = 3)));
          var l = r < t ? qe(e.slice(r), !i, '\\', Be) : '';
          return (
            0 !== l.length || i || (l = '.'),
            l.length > 0 && Be(e.charCodeAt(t - 1)) && (l += '\\'),
            void 0 === n
              ? i
                ? '\\'.concat(l)
                : l
              : i
              ? ''.concat(n, '\\').concat(l)
              : ''.concat(n).concat(l)
          );
        },
        isAbsolute: function(e) {
          Fe(e, 'path');
          var t = e.length;
          if (0 === t) return !1;
          var n = e.charCodeAt(0);
          return (
            Be(n) ||
            (t > 2 && We(n) && e.charCodeAt(1) === Re && Be(e.charCodeAt(2)))
          );
        },
        join: function() {
          if (0 === arguments.length) return '.';
          for (var e, t, n = 0; n < arguments.length; ++n) {
            var r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            Fe(r, 'path'),
              r.length > 0 &&
                (void 0 === e ? (e = t = r) : (e += '\\'.concat(r)));
          }
          if (void 0 === e) return '.';
          var i = !0,
            o = 0;
          if ('string' === typeof t && Be(t.charCodeAt(0))) {
            ++o;
            var a = t.length;
            a > 1 &&
              Be(t.charCodeAt(1)) &&
              (++o, a > 2 && (Be(t.charCodeAt(2)) ? ++o : (i = !1)));
          }
          if (i) {
            while (o < e.length && Be(e.charCodeAt(o))) o++;
            o >= 2 && (e = '\\'.concat(e.slice(o)));
          }
          return Ve.normalize(e);
        },
        relative: function(e, t) {
          if ((Fe(e, 'from'), Fe(t, 'to'), e === t)) return '';
          var n = Ve.resolve(e),
            r = Ve.resolve(t);
          if (n === r) return '';
          if (((e = n.toLowerCase()), (t = r.toLowerCase()), e === t))
            return '';
          var i = 0;
          while (i < e.length && e.charCodeAt(i) === Pe) i++;
          var o = e.length;
          while (o - 1 > i && e.charCodeAt(o - 1) === Pe) o--;
          var a = o - i,
            s = 0;
          while (s < t.length && t.charCodeAt(s) === Pe) s++;
          var u = t.length;
          while (u - 1 > s && t.charCodeAt(u - 1) === Pe) u--;
          for (var l = u - s, c = a < l ? a : l, h = -1, f = 0; f < c; f++) {
            var d = e.charCodeAt(i + f);
            if (d !== t.charCodeAt(s + f)) break;
            d === Pe && (h = f);
          }
          if (f !== c) {
            if (-1 === h) return r;
          } else {
            if (l > c) {
              if (t.charCodeAt(s + f) === Pe) return r.slice(s + f + 1);
              if (2 === f) return r.slice(s + f);
            }
            a > c &&
              (e.charCodeAt(i + f) === Pe ? (h = f) : 2 === f && (h = 3)),
              -1 === h && (h = 0);
          }
          var m = '';
          for (f = i + h + 1; f <= o; ++f)
            (f !== o && e.charCodeAt(f) !== Pe) ||
              (m += 0 === m.length ? '..' : '\\..');
          return (
            (s += h),
            m.length > 0
              ? ''.concat(m).concat(r.slice(s, u))
              : (r.charCodeAt(s) === Pe && ++s, r.slice(s, u))
          );
        },
        toNamespacedPath: function(e) {
          if ('string' !== typeof e) return e;
          if (0 === e.length) return '';
          var t = Ve.resolve(e);
          if (t.length <= 2) return e;
          if (t.charCodeAt(0) === Pe) {
            if (t.charCodeAt(1) === Pe) {
              var n = t.charCodeAt(2);
              if (n !== Ue && n !== Ie)
                return '\\\\?\\UNC\\'.concat(t.slice(2));
            }
          } else if (
            We(t.charCodeAt(0)) &&
            t.charCodeAt(1) === Re &&
            t.charCodeAt(2) === Pe
          )
            return '\\\\?\\'.concat(t);
          return e;
        },
        dirname: function(e) {
          Fe(e, 'path');
          var t = e.length;
          if (0 === t) return '.';
          var n = -1,
            r = 0,
            i = e.charCodeAt(0);
          if (1 === t) return Be(i) ? e : '.';
          if (Be(i)) {
            if (((n = r = 1), Be(e.charCodeAt(1)))) {
              var o = 2,
                a = o;
              while (o < t && !Be(e.charCodeAt(o))) o++;
              if (o < t && o !== a) {
                a = o;
                while (o < t && Be(e.charCodeAt(o))) o++;
                if (o < t && o !== a) {
                  a = o;
                  while (o < t && !Be(e.charCodeAt(o))) o++;
                  if (o === t) return e;
                  o !== a && (n = r = o + 1);
                }
              }
            }
          } else
            We(i) &&
              e.charCodeAt(1) === Re &&
              ((n = t > 2 && Be(e.charCodeAt(2)) ? 3 : 2), (r = n));
          for (var s = -1, u = !0, l = t - 1; l >= r; --l)
            if (Be(e.charCodeAt(l))) {
              if (!u) {
                s = l;
                break;
              }
            } else u = !1;
          if (-1 === s) {
            if (-1 === n) return '.';
            s = n;
          }
          return e.slice(0, s);
        },
        basename: function(e, t) {
          void 0 !== t && Fe(t, 'ext'), Fe(e, 'path');
          var n,
            r = 0,
            i = -1,
            o = !0;
          if (
            (e.length >= 2 &&
              We(e.charCodeAt(0)) &&
              e.charCodeAt(1) === Re &&
              (r = 2),
            void 0 !== t && t.length > 0 && t.length <= e.length)
          ) {
            if (t === e) return '';
            var a = t.length - 1,
              s = -1;
            for (n = e.length - 1; n >= r; --n) {
              var u = e.charCodeAt(n);
              if (Be(u)) {
                if (!o) {
                  r = n + 1;
                  break;
                }
              } else
                -1 === s && ((o = !1), (s = n + 1)),
                  a >= 0 &&
                    (u === t.charCodeAt(a)
                      ? -1 === --a && (i = n)
                      : ((a = -1), (i = s)));
            }
            return (
              r === i ? (i = s) : -1 === i && (i = e.length), e.slice(r, i)
            );
          }
          for (n = e.length - 1; n >= r; --n)
            if (Be(e.charCodeAt(n))) {
              if (!o) {
                r = n + 1;
                break;
              }
            } else -1 === i && ((o = !1), (i = n + 1));
          return -1 === i ? '' : e.slice(r, i);
        },
        extname: function(e) {
          Fe(e, 'path');
          var t = 0,
            n = -1,
            r = 0,
            i = -1,
            o = !0,
            a = 0;
          e.length >= 2 &&
            e.charCodeAt(1) === Re &&
            We(e.charCodeAt(0)) &&
            (t = r = 2);
          for (var s = e.length - 1; s >= t; --s) {
            var u = e.charCodeAt(s);
            if (Be(u)) {
              if (!o) {
                r = s + 1;
                break;
              }
            } else
              -1 === i && ((o = !1), (i = s + 1)),
                u === Ie
                  ? -1 === n
                    ? (n = s)
                    : 1 !== a && (a = 1)
                  : -1 !== n && (a = -1);
          }
          return -1 === n ||
            -1 === i ||
            0 === a ||
            (1 === a && n === i - 1 && n === r + 1)
            ? ''
            : e.slice(n, i);
        },
        format: He.bind(null, '\\'),
        parse: function(e) {
          Fe(e, 'path');
          var t = { root: '', dir: '', base: '', ext: '', name: '' };
          if (0 === e.length) return t;
          var n = e.length,
            r = 0,
            i = e.charCodeAt(0);
          if (1 === n)
            return Be(i)
              ? ((t.root = t.dir = e), t)
              : ((t.base = t.name = e), t);
          if (Be(i)) {
            if (((r = 1), Be(e.charCodeAt(1)))) {
              var o = 2,
                a = o;
              while (o < n && !Be(e.charCodeAt(o))) o++;
              if (o < n && o !== a) {
                a = o;
                while (o < n && Be(e.charCodeAt(o))) o++;
                if (o < n && o !== a) {
                  a = o;
                  while (o < n && !Be(e.charCodeAt(o))) o++;
                  o === n ? (r = o) : o !== a && (r = o + 1);
                }
              }
            }
          } else if (We(i) && e.charCodeAt(1) === Re) {
            if (n <= 2) return (t.root = t.dir = e), t;
            if (((r = 2), Be(e.charCodeAt(2)))) {
              if (3 === n) return (t.root = t.dir = e), t;
              r = 3;
            }
          }
          r > 0 && (t.root = e.slice(0, r));
          for (
            var s = -1, u = r, l = -1, c = !0, h = e.length - 1, f = 0;
            h >= r;
            --h
          )
            if (((i = e.charCodeAt(h)), Be(i))) {
              if (!c) {
                u = h + 1;
                break;
              }
            } else
              -1 === l && ((c = !1), (l = h + 1)),
                i === Ie
                  ? -1 === s
                    ? (s = h)
                    : 1 !== f && (f = 1)
                  : -1 !== s && (f = -1);
          return (
            -1 !== l &&
              (-1 === s || 0 === f || (1 === f && s === l - 1 && s === u + 1)
                ? (t.base = t.name = e.slice(u, l))
                : ((t.name = e.slice(u, s)),
                  (t.base = e.slice(u, l)),
                  (t.ext = e.slice(s, l)))),
            (t.dir = u > 0 && u !== r ? e.slice(0, u - 1) : t.root),
            t
          );
        },
        sep: '\\',
        delimiter: ';',
        win32: null,
        posix: null,
      },
      je = {
        resolve: function() {
          for (
            var e = '', t = !1, n = arguments.length - 1;
            n >= -1 && !t;
            n--
          ) {
            var r =
              n >= 0
                ? n < 0 || arguments.length <= n
                  ? void 0
                  : arguments[n]
                : Ne['a']();
            Fe(r, 'path'),
              0 !== r.length &&
                ((e = ''.concat(r, '/').concat(e)),
                (t = r.charCodeAt(0) === Me));
          }
          return (
            (e = qe(e, !t, '/', Ke)), t ? '/'.concat(e) : e.length > 0 ? e : '.'
          );
        },
        normalize: function(e) {
          if ((Fe(e, 'path'), 0 === e.length)) return '.';
          var t = e.charCodeAt(0) === Me,
            n = e.charCodeAt(e.length - 1) === Me;
          return (
            (e = qe(e, !t, '/', Ke)),
            0 === e.length
              ? t
                ? '/'
                : n
                ? './'
                : '.'
              : (n && (e += '/'), t ? '/'.concat(e) : e)
          );
        },
        isAbsolute: function(e) {
          return Fe(e, 'path'), e.length > 0 && e.charCodeAt(0) === Me;
        },
        join: function() {
          if (0 === arguments.length) return '.';
          for (var e, t = 0; t < arguments.length; ++t) {
            var n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            Fe(n, 'path'),
              n.length > 0 && (void 0 === e ? (e = n) : (e += '/'.concat(n)));
          }
          return void 0 === e ? '.' : je.normalize(e);
        },
        relative: function(e, t) {
          if ((Fe(e, 'from'), Fe(t, 'to'), e === t)) return '';
          if (((e = je.resolve(e)), (t = je.resolve(t)), e === t)) return '';
          for (
            var n = 1,
              r = e.length,
              i = r - n,
              o = 1,
              a = t.length - o,
              s = i < a ? i : a,
              u = -1,
              l = 0;
            l < s;
            l++
          ) {
            var c = e.charCodeAt(n + l);
            if (c !== t.charCodeAt(o + l)) break;
            c === Me && (u = l);
          }
          if (l === s)
            if (a > s) {
              if (t.charCodeAt(o + l) === Me) return t.slice(o + l + 1);
              if (0 === l) return t.slice(o + l);
            } else
              i > s &&
                (e.charCodeAt(n + l) === Me ? (u = l) : 0 === l && (u = 0));
          var h = '';
          for (l = n + u + 1; l <= r; ++l)
            (l !== r && e.charCodeAt(l) !== Me) ||
              (h += 0 === h.length ? '..' : '/..');
          return ''.concat(h).concat(t.slice(o + u));
        },
        toNamespacedPath: function(e) {
          return e;
        },
        dirname: function(e) {
          if ((Fe(e, 'path'), 0 === e.length)) return '.';
          for (
            var t = e.charCodeAt(0) === Me, n = -1, r = !0, i = e.length - 1;
            i >= 1;
            --i
          )
            if (e.charCodeAt(i) === Me) {
              if (!r) {
                n = i;
                break;
              }
            } else r = !1;
          return -1 === n
            ? t
              ? '/'
              : '.'
            : t && 1 === n
            ? '//'
            : e.slice(0, n);
        },
        basename: function(e, t) {
          void 0 !== t && Fe(t, 'ext'), Fe(e, 'path');
          var n,
            r = 0,
            i = -1,
            o = !0;
          if (void 0 !== t && t.length > 0 && t.length <= e.length) {
            if (t === e) return '';
            var a = t.length - 1,
              s = -1;
            for (n = e.length - 1; n >= 0; --n) {
              var u = e.charCodeAt(n);
              if (u === Me) {
                if (!o) {
                  r = n + 1;
                  break;
                }
              } else
                -1 === s && ((o = !1), (s = n + 1)),
                  a >= 0 &&
                    (u === t.charCodeAt(a)
                      ? -1 === --a && (i = n)
                      : ((a = -1), (i = s)));
            }
            return (
              r === i ? (i = s) : -1 === i && (i = e.length), e.slice(r, i)
            );
          }
          for (n = e.length - 1; n >= 0; --n)
            if (e.charCodeAt(n) === Me) {
              if (!o) {
                r = n + 1;
                break;
              }
            } else -1 === i && ((o = !1), (i = n + 1));
          return -1 === i ? '' : e.slice(r, i);
        },
        extname: function(e) {
          Fe(e, 'path');
          for (
            var t = -1, n = 0, r = -1, i = !0, o = 0, a = e.length - 1;
            a >= 0;
            --a
          ) {
            var s = e.charCodeAt(a);
            if (s !== Me)
              -1 === r && ((i = !1), (r = a + 1)),
                s === Ie
                  ? -1 === t
                    ? (t = a)
                    : 1 !== o && (o = 1)
                  : -1 !== t && (o = -1);
            else if (!i) {
              n = a + 1;
              break;
            }
          }
          return -1 === t ||
            -1 === r ||
            0 === o ||
            (1 === o && t === r - 1 && t === n + 1)
            ? ''
            : e.slice(t, r);
        },
        format: He.bind(null, '/'),
        parse: function(e) {
          Fe(e, 'path');
          var t = { root: '', dir: '', base: '', ext: '', name: '' };
          if (0 === e.length) return t;
          var n,
            r = e.charCodeAt(0) === Me;
          r ? ((t.root = '/'), (n = 1)) : (n = 0);
          for (
            var i = -1, o = 0, a = -1, s = !0, u = e.length - 1, l = 0;
            u >= n;
            --u
          ) {
            var c = e.charCodeAt(u);
            if (c !== Me)
              -1 === a && ((s = !1), (a = u + 1)),
                c === Ie
                  ? -1 === i
                    ? (i = u)
                    : 1 !== l && (l = 1)
                  : -1 !== i && (l = -1);
            else if (!s) {
              o = u + 1;
              break;
            }
          }
          if (-1 !== a) {
            var h = 0 === o && r ? 1 : o;
            -1 === i || 0 === l || (1 === l && i === a - 1 && i === o + 1)
              ? (t.base = t.name = e.slice(h, a))
              : ((t.name = e.slice(h, i)),
                (t.base = e.slice(h, a)),
                (t.ext = e.slice(i, a)));
          }
          return o > 0 ? (t.dir = e.slice(0, o - 1)) : r && (t.dir = '/'), t;
        },
        sep: '/',
        delimiter: ':',
        win32: null,
        posix: null,
      };
    (je.win32 = Ve.win32 = Ve), (je.posix = Ve.posix = je);
    'win32' === Ne['c'] ? Ve.normalize : je.normalize,
      'win32' === Ne['c'] ? Ve.resolve : je.resolve,
      'win32' === Ne['c'] ? Ve.relative : je.relative,
      'win32' === Ne['c'] ? Ve.dirname : je.dirname,
      'win32' === Ne['c'] ? Ve.basename : je.basename,
      'win32' === Ne['c'] ? Ve.extname : je.extname,
      'win32' === Ne['c'] ? Ve.sep : je.sep;
    var Ye,
      Ge = /^\w[\w\d+.-]*$/,
      ze = /^\//,
      Qe = /^\/\//;
    function Xe(e, t) {
      if (!e.scheme && t)
        throw new Error(
          '[UriError]: Scheme is missing: {scheme: "", authority: "'
            .concat(e.authority, '", path: "')
            .concat(e.path, '", query: "')
            .concat(e.query, '", fragment: "')
            .concat(e.fragment, '"}'),
        );
      if (e.scheme && !Ge.test(e.scheme))
        throw new Error('[UriError]: Scheme contains illegal characters.');
      if (e.path)
        if (e.authority) {
          if (!ze.test(e.path))
            throw new Error(
              '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
            );
        } else if (Qe.test(e.path))
          throw new Error(
            '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
          );
    }
    function Ze(e, t) {
      return e || t ? e : 'file';
    }
    function Je(e, t) {
      switch (e) {
        case 'https':
        case 'http':
        case 'file':
          t ? t[0] !== et && (t = et + t) : (t = et);
          break;
      }
      return t;
    }
    var $e = '',
      et = '/',
      tt = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
      nt = (function() {
        function e(t, n, r, i, o) {
          var a =
            arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          h(this, e),
            'object' === typeof t
              ? ((this.scheme = t.scheme || $e),
                (this.authority = t.authority || $e),
                (this.path = t.path || $e),
                (this.query = t.query || $e),
                (this.fragment = t.fragment || $e))
              : ((this.scheme = Ze(t, a)),
                (this.authority = n || $e),
                (this.path = Je(this.scheme, r || $e)),
                (this.query = i || $e),
                (this.fragment = o || $e),
                Xe(this, a));
        }
        return (
          d(
            e,
            [
              {
                key: 'fsPath',
                get: function() {
                  return ut(this, !1);
                },
              },
              {
                key: 'with',
                value: function(e) {
                  if (!e) return this;
                  var t = e.scheme,
                    n = e.authority,
                    r = e.path,
                    i = e.query,
                    o = e.fragment;
                  return (
                    void 0 === t ? (t = this.scheme) : null === t && (t = $e),
                    void 0 === n
                      ? (n = this.authority)
                      : null === n && (n = $e),
                    void 0 === r ? (r = this.path) : null === r && (r = $e),
                    void 0 === i ? (i = this.query) : null === i && (i = $e),
                    void 0 === o ? (o = this.fragment) : null === o && (o = $e),
                    t === this.scheme &&
                    n === this.authority &&
                    r === this.path &&
                    i === this.query &&
                    o === this.fragment
                      ? this
                      : new it(t, n, r, i, o)
                  );
                },
              },
              {
                key: 'toString',
                value: function() {
                  var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  return lt(this, e);
                },
              },
              {
                key: 'toJSON',
                value: function() {
                  return this;
                },
              },
            ],
            [
              {
                key: 'isUri',
                value: function(t) {
                  return (
                    t instanceof e ||
                    (!!t &&
                      'string' === typeof t.authority &&
                        'string' === typeof t.fragment &&
                        'string' === typeof t.path &&
                        'string' === typeof t.query &&
                        'string' === typeof t.scheme &&
                        'string' === typeof t.fsPath &&
                        'function' === typeof t['with'] &&
                        'function' === typeof t.toString)
                  );
                },
              },
              {
                key: 'parse',
                value: function(e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = tt.exec(e);
                  return n
                    ? new it(
                        n[2] || $e,
                        ft(n[4] || $e),
                        ft(n[5] || $e),
                        ft(n[7] || $e),
                        ft(n[9] || $e),
                        t,
                      )
                    : new it($e, $e, $e, $e, $e);
                },
              },
              {
                key: 'file',
                value: function(e) {
                  var t = $e;
                  if (
                    (W['d'] && (e = e.replace(/\\/g, et)),
                    e[0] === et && e[1] === et)
                  ) {
                    var n = e.indexOf(et, 2);
                    -1 === n
                      ? ((t = e.substring(2)), (e = et))
                      : ((t = e.substring(2, n)), (e = e.substring(n) || et));
                  }
                  return new it('file', t, e, $e, $e);
                },
              },
              {
                key: 'from',
                value: function(e) {
                  return new it(
                    e.scheme,
                    e.authority,
                    e.path,
                    e.query,
                    e.fragment,
                  );
                },
              },
              {
                key: 'joinPath',
                value: function(t) {
                  if (!t.path)
                    throw new Error(
                      '[UriError]: cannot call joinPath on URI without path',
                    );
                  for (
                    var n,
                      r,
                      i,
                      o = arguments.length,
                      a = new Array(o > 1 ? o - 1 : 0),
                      s = 1;
                    s < o;
                    s++
                  )
                    a[s - 1] = arguments[s];
                  W['d'] && 'file' === t.scheme
                    ? (n = e.file((r = Ve).join.apply(r, [ut(t, !0)].concat(a)))
                        .path)
                    : (n = (i = je).join.apply(i, [t.path].concat(a)));
                  return t['with']({ path: n });
                },
              },
              {
                key: 'revive',
                value: function(t) {
                  if (t) {
                    if (t instanceof e) return t;
                    var n = new it(t);
                    return (
                      (n._formatted = t.external),
                      (n._fsPath = t._sep === rt ? t.fsPath : null),
                      n
                    );
                  }
                  return t;
                },
              },
            ],
          ),
          e
        );
      })(),
      rt = W['d'] ? 1 : void 0,
      it = (function(e) {
        i(n, e);
        var t = c(n);
        function n() {
          var e;
          return (
            h(this, n),
            (e = t.apply(this, arguments)),
            (e._formatted = null),
            (e._fsPath = null),
            e
          );
        }
        return (
          d(n, [
            {
              key: 'fsPath',
              get: function() {
                return (
                  this._fsPath || (this._fsPath = ut(this, !1)), this._fsPath
                );
              },
            },
            {
              key: 'toString',
              value: function() {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                return e
                  ? lt(this, !0)
                  : (this._formatted || (this._formatted = lt(this, !1)),
                    this._formatted);
              },
            },
            {
              key: 'toJSON',
              value: function() {
                var e = { $mid: 1 };
                return (
                  this._fsPath && ((e.fsPath = this._fsPath), (e._sep = rt)),
                  this._formatted && (e.external = this._formatted),
                  this.path && (e.path = this.path),
                  this.scheme && (e.scheme = this.scheme),
                  this.authority && (e.authority = this.authority),
                  this.query && (e.query = this.query),
                  this.fragment && (e.fragment = this.fragment),
                  e
                );
              },
            },
          ]),
          n
        );
      })(nt),
      ot =
        ((Ye = {}),
        E(Ye, 58, '%3A'),
        E(Ye, 47, '%2F'),
        E(Ye, 63, '%3F'),
        E(Ye, 35, '%23'),
        E(Ye, 91, '%5B'),
        E(Ye, 93, '%5D'),
        E(Ye, 64, '%40'),
        E(Ye, 33, '%21'),
        E(Ye, 36, '%24'),
        E(Ye, 38, '%26'),
        E(Ye, 39, '%27'),
        E(Ye, 40, '%28'),
        E(Ye, 41, '%29'),
        E(Ye, 42, '%2A'),
        E(Ye, 43, '%2B'),
        E(Ye, 44, '%2C'),
        E(Ye, 59, '%3B'),
        E(Ye, 61, '%3D'),
        E(Ye, 32, '%20'),
        Ye);
    function at(e, t) {
      for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
        var o = e.charCodeAt(i);
        if (
          (o >= 97 && o <= 122) ||
          (o >= 65 && o <= 90) ||
          (o >= 48 && o <= 57) ||
          45 === o ||
          46 === o ||
          95 === o ||
          126 === o ||
          (t && 47 === o)
        )
          -1 !== r && ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
            void 0 !== n && (n += e.charAt(i));
        else {
          void 0 === n && (n = e.substr(0, i));
          var a = ot[o];
          void 0 !== a
            ? (-1 !== r &&
                ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
              (n += a))
            : -1 === r && (r = i);
        }
      }
      return (
        -1 !== r && (n += encodeURIComponent(e.substring(r))),
        void 0 !== n ? n : e
      );
    }
    function st(e) {
      for (var t = void 0, n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        35 === r || 63 === r
          ? (void 0 === t && (t = e.substr(0, n)), (t += ot[r]))
          : void 0 !== t && (t += e[n]);
      }
      return void 0 !== t ? t : e;
    }
    function ut(e, t) {
      var n;
      return (
        (n =
          e.authority && e.path.length > 1 && 'file' === e.scheme
            ? '//'.concat(e.authority).concat(e.path)
            : 47 === e.path.charCodeAt(0) &&
              ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) ||
                (e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122)) &&
              58 === e.path.charCodeAt(2)
            ? t
              ? e.path.substr(1)
              : e.path[1].toLowerCase() + e.path.substr(2)
            : e.path),
        W['d'] && (n = n.replace(/\//g, '\\')),
        n
      );
    }
    function lt(e, t) {
      var n = t ? st : at,
        r = '',
        i = e.scheme,
        o = e.authority,
        a = e.path,
        s = e.query,
        u = e.fragment;
      if (
        (i && ((r += i), (r += ':')),
        (o || 'file' === i) && ((r += et), (r += et)),
        o)
      ) {
        var l = o.indexOf('@');
        if (-1 !== l) {
          var c = o.substr(0, l);
          (o = o.substr(l + 1)),
            (l = c.indexOf(':')),
            -1 === l
              ? (r += n(c, !1))
              : ((r += n(c.substr(0, l), !1)),
                (r += ':'),
                (r += n(c.substr(l + 1), !1))),
            (r += '@');
        }
        (o = o.toLowerCase()),
          (l = o.indexOf(':')),
          -1 === l
            ? (r += n(o, !1))
            : ((r += n(o.substr(0, l), !1)), (r += o.substr(l)));
      }
      if (a) {
        if (a.length >= 3 && 47 === a.charCodeAt(0) && 58 === a.charCodeAt(2)) {
          var h = a.charCodeAt(1);
          h >= 65 &&
            h <= 90 &&
            (a = '/'
              .concat(String.fromCharCode(h + 32), ':')
              .concat(a.substr(3)));
        } else if (a.length >= 2 && 58 === a.charCodeAt(1)) {
          var f = a.charCodeAt(0);
          f >= 65 &&
            f <= 90 &&
            (a = ''
              .concat(String.fromCharCode(f + 32), ':')
              .concat(a.substr(2)));
        }
        r += n(a, !0);
      }
      return (
        s && ((r += '?'), (r += n(s, !1))),
        u && ((r += '#'), (r += t ? u : at(u, !1))),
        r
      );
    }
    function ct(e) {
      try {
        return decodeURIComponent(e);
      } catch (t) {
        return e.length > 3 ? e.substr(0, 3) + ct(e.substr(3)) : e;
      }
    }
    var ht = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function ft(e) {
      return e.match(ht)
        ? e.replace(ht, function(e) {
            return ct(e);
          })
        : e;
    }
    var dt = (function() {
        function e(t, n) {
          h(this, e), (this.lineNumber = t), (this.column = n);
        }
        return (
          d(
            e,
            [
              {
                key: 'with',
                value: function() {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.lineNumber,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.column;
                  return t === this.lineNumber && n === this.column
                    ? this
                    : new e(t, n);
                },
              },
              {
                key: 'delta',
                value: function() {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0;
                  return this['with'](this.lineNumber + e, this.column + t);
                },
              },
              {
                key: 'equals',
                value: function(t) {
                  return e.equals(this, t);
                },
              },
              {
                key: 'isBefore',
                value: function(t) {
                  return e.isBefore(this, t);
                },
              },
              {
                key: 'isBeforeOrEqual',
                value: function(t) {
                  return e.isBeforeOrEqual(this, t);
                },
              },
              {
                key: 'clone',
                value: function() {
                  return new e(this.lineNumber, this.column);
                },
              },
              {
                key: 'toString',
                value: function() {
                  return '(' + this.lineNumber + ',' + this.column + ')';
                },
              },
            ],
            [
              {
                key: 'equals',
                value: function(e, t) {
                  return (
                    (!e && !t) ||
                    (!!e &&
                      !!t &&
                      e.lineNumber === t.lineNumber &&
                      e.column === t.column)
                  );
                },
              },
              {
                key: 'isBefore',
                value: function(e, t) {
                  return (
                    e.lineNumber < t.lineNumber ||
                    (!(t.lineNumber < e.lineNumber) && e.column < t.column)
                  );
                },
              },
              {
                key: 'isBeforeOrEqual',
                value: function(e, t) {
                  return (
                    e.lineNumber < t.lineNumber ||
                    (!(t.lineNumber < e.lineNumber) && e.column <= t.column)
                  );
                },
              },
              {
                key: 'compare',
                value: function(e, t) {
                  var n = 0 | e.lineNumber,
                    r = 0 | t.lineNumber;
                  if (n === r) {
                    var i = 0 | e.column,
                      o = 0 | t.column;
                    return i - o;
                  }
                  return n - r;
                },
              },
              {
                key: 'lift',
                value: function(t) {
                  return new e(t.lineNumber, t.column);
                },
              },
              {
                key: 'isIPosition',
                value: function(e) {
                  return (
                    e &&
                    'number' === typeof e.lineNumber &&
                    'number' === typeof e.column
                  );
                },
              },
            ],
          ),
          e
        );
      })(),
      mt = (function() {
        function e(t, n, r, i) {
          h(this, e),
            t > r || (t === r && n > i)
              ? ((this.startLineNumber = r),
                (this.startColumn = i),
                (this.endLineNumber = t),
                (this.endColumn = n))
              : ((this.startLineNumber = t),
                (this.startColumn = n),
                (this.endLineNumber = r),
                (this.endColumn = i));
        }
        return (
          d(
            e,
            [
              {
                key: 'isEmpty',
                value: function() {
                  return e.isEmpty(this);
                },
              },
              {
                key: 'containsPosition',
                value: function(t) {
                  return e.containsPosition(this, t);
                },
              },
              {
                key: 'containsRange',
                value: function(t) {
                  return e.containsRange(this, t);
                },
              },
              {
                key: 'strictContainsRange',
                value: function(t) {
                  return e.strictContainsRange(this, t);
                },
              },
              {
                key: 'plusRange',
                value: function(t) {
                  return e.plusRange(this, t);
                },
              },
              {
                key: 'intersectRanges',
                value: function(t) {
                  return e.intersectRanges(this, t);
                },
              },
              {
                key: 'equalsRange',
                value: function(t) {
                  return e.equalsRange(this, t);
                },
              },
              {
                key: 'getEndPosition',
                value: function() {
                  return e.getEndPosition(this);
                },
              },
              {
                key: 'getStartPosition',
                value: function() {
                  return e.getStartPosition(this);
                },
              },
              {
                key: 'toString',
                value: function() {
                  return (
                    '[' +
                    this.startLineNumber +
                    ',' +
                    this.startColumn +
                    ' -> ' +
                    this.endLineNumber +
                    ',' +
                    this.endColumn +
                    ']'
                  );
                },
              },
              {
                key: 'setEndPosition',
                value: function(t, n) {
                  return new e(this.startLineNumber, this.startColumn, t, n);
                },
              },
              {
                key: 'setStartPosition',
                value: function(t, n) {
                  return new e(t, n, this.endLineNumber, this.endColumn);
                },
              },
              {
                key: 'collapseToStart',
                value: function() {
                  return e.collapseToStart(this);
                },
              },
            ],
            [
              {
                key: 'isEmpty',
                value: function(e) {
                  return (
                    e.startLineNumber === e.endLineNumber &&
                    e.startColumn === e.endColumn
                  );
                },
              },
              {
                key: 'containsPosition',
                value: function(e, t) {
                  return (
                    !(
                      t.lineNumber < e.startLineNumber ||
                      t.lineNumber > e.endLineNumber
                    ) &&
                    !(
                      t.lineNumber === e.startLineNumber &&
                      t.column < e.startColumn
                    ) &&
                      !(
                        t.lineNumber === e.endLineNumber &&
                        t.column > e.endColumn
                      )
                  );
                },
              },
              {
                key: 'containsRange',
                value: function(e, t) {
                  return (
                    !(
                      t.startLineNumber < e.startLineNumber ||
                      t.endLineNumber < e.startLineNumber
                    ) &&
                    !(
                      t.startLineNumber > e.endLineNumber ||
                      t.endLineNumber > e.endLineNumber
                    ) &&
                      !(
                        t.startLineNumber === e.startLineNumber &&
                        t.startColumn < e.startColumn
                      ) &&
                        !(
                          t.endLineNumber === e.endLineNumber &&
                          t.endColumn > e.endColumn
                        )
                  );
                },
              },
              {
                key: 'strictContainsRange',
                value: function(e, t) {
                  return (
                    !(
                      t.startLineNumber < e.startLineNumber ||
                      t.endLineNumber < e.startLineNumber
                    ) &&
                    !(
                      t.startLineNumber > e.endLineNumber ||
                      t.endLineNumber > e.endLineNumber
                    ) &&
                      !(
                        t.startLineNumber === e.startLineNumber &&
                        t.startColumn <= e.startColumn
                      ) &&
                        !(
                          t.endLineNumber === e.endLineNumber &&
                          t.endColumn >= e.endColumn
                        )
                  );
                },
              },
              {
                key: 'plusRange',
                value: function(t, n) {
                  var r, i, o, a;
                  return (
                    n.startLineNumber < t.startLineNumber
                      ? ((r = n.startLineNumber), (i = n.startColumn))
                      : n.startLineNumber === t.startLineNumber
                      ? ((r = n.startLineNumber),
                        (i = Math.min(n.startColumn, t.startColumn)))
                      : ((r = t.startLineNumber), (i = t.startColumn)),
                    n.endLineNumber > t.endLineNumber
                      ? ((o = n.endLineNumber), (a = n.endColumn))
                      : n.endLineNumber === t.endLineNumber
                      ? ((o = n.endLineNumber),
                        (a = Math.max(n.endColumn, t.endColumn)))
                      : ((o = t.endLineNumber), (a = t.endColumn)),
                    new e(r, i, o, a)
                  );
                },
              },
              {
                key: 'intersectRanges',
                value: function(t, n) {
                  var r = t.startLineNumber,
                    i = t.startColumn,
                    o = t.endLineNumber,
                    a = t.endColumn,
                    s = n.startLineNumber,
                    u = n.startColumn,
                    l = n.endLineNumber,
                    c = n.endColumn;
                  return (
                    r < s
                      ? ((r = s), (i = u))
                      : r === s && (i = Math.max(i, u)),
                    o > l
                      ? ((o = l), (a = c))
                      : o === l && (a = Math.min(a, c)),
                    r > o || (r === o && i > a) ? null : new e(r, i, o, a)
                  );
                },
              },
              {
                key: 'equalsRange',
                value: function(e, t) {
                  return (
                    !!e &&
                    !!t &&
                    e.startLineNumber === t.startLineNumber &&
                    e.startColumn === t.startColumn &&
                    e.endLineNumber === t.endLineNumber &&
                    e.endColumn === t.endColumn
                  );
                },
              },
              {
                key: 'getEndPosition',
                value: function(e) {
                  return new dt(e.endLineNumber, e.endColumn);
                },
              },
              {
                key: 'getStartPosition',
                value: function(e) {
                  return new dt(e.startLineNumber, e.startColumn);
                },
              },
              {
                key: 'collapseToStart',
                value: function(t) {
                  return new e(
                    t.startLineNumber,
                    t.startColumn,
                    t.startLineNumber,
                    t.startColumn,
                  );
                },
              },
              {
                key: 'fromPositions',
                value: function(t) {
                  var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : t;
                  return new e(t.lineNumber, t.column, n.lineNumber, n.column);
                },
              },
              {
                key: 'lift',
                value: function(t) {
                  return t
                    ? new e(
                        t.startLineNumber,
                        t.startColumn,
                        t.endLineNumber,
                        t.endColumn,
                      )
                    : null;
                },
              },
              {
                key: 'isIRange',
                value: function(e) {
                  return (
                    e &&
                    'number' === typeof e.startLineNumber &&
                    'number' === typeof e.startColumn &&
                    'number' === typeof e.endLineNumber &&
                    'number' === typeof e.endColumn
                  );
                },
              },
              {
                key: 'areIntersectingOrTouching',
                value: function(e, t) {
                  return (
                    !(
                      e.endLineNumber < t.startLineNumber ||
                      (e.endLineNumber === t.startLineNumber &&
                        e.endColumn < t.startColumn)
                    ) &&
                    !(
                      t.endLineNumber < e.startLineNumber ||
                      (t.endLineNumber === e.startLineNumber &&
                        t.endColumn < e.startColumn)
                    )
                  );
                },
              },
              {
                key: 'areIntersecting',
                value: function(e, t) {
                  return (
                    !(
                      e.endLineNumber < t.startLineNumber ||
                      (e.endLineNumber === t.startLineNumber &&
                        e.endColumn <= t.startColumn)
                    ) &&
                    !(
                      t.endLineNumber < e.startLineNumber ||
                      (t.endLineNumber === e.startLineNumber &&
                        t.endColumn <= e.startColumn)
                    )
                  );
                },
              },
              {
                key: 'compareRangesUsingStarts',
                value: function(e, t) {
                  if (e && t) {
                    var n = 0 | e.startLineNumber,
                      r = 0 | t.startLineNumber;
                    if (n === r) {
                      var i = 0 | e.startColumn,
                        o = 0 | t.startColumn;
                      if (i === o) {
                        var a = 0 | e.endLineNumber,
                          s = 0 | t.endLineNumber;
                        if (a === s) {
                          var u = 0 | e.endColumn,
                            l = 0 | t.endColumn;
                          return u - l;
                        }
                        return a - s;
                      }
                      return i - o;
                    }
                    return n - r;
                  }
                  var c = e ? 1 : 0,
                    h = t ? 1 : 0;
                  return c - h;
                },
              },
              {
                key: 'compareRangesUsingEnds',
                value: function(e, t) {
                  return e.endLineNumber === t.endLineNumber
                    ? e.endColumn === t.endColumn
                      ? e.startLineNumber === t.startLineNumber
                        ? e.startColumn - t.startColumn
                        : e.startLineNumber - t.startLineNumber
                      : e.endColumn - t.endColumn
                    : e.endLineNumber - t.endLineNumber;
                },
              },
              {
                key: 'spansMultipleLines',
                value: function(e) {
                  return e.endLineNumber > e.startLineNumber;
                },
              },
            ],
          ),
          e
        );
      })(),
      gt = 3;
    function vt(e, t, n, r) {
      var i = new Ee(e, t, n);
      return i.ComputeDiff(r);
    }
    var pt = (function() {
        function e(t) {
          h(this, e);
          for (var n = [], r = [], i = 0, o = t.length; i < o; i++)
            (n[i] = Lt(t[i], 1)), (r[i] = St(t[i], 1));
          (this.lines = t), (this._startColumns = n), (this._endColumns = r);
        }
        return (
          d(e, [
            {
              key: 'getElements',
              value: function() {
                for (var e = [], t = 0, n = this.lines.length; t < n; t++)
                  e[t] = this.lines[t].substring(
                    this._startColumns[t] - 1,
                    this._endColumns[t] - 1,
                  );
                return e;
              },
            },
            {
              key: 'getStartLineNumber',
              value: function(e) {
                return e + 1;
              },
            },
            {
              key: 'getEndLineNumber',
              value: function(e) {
                return e + 1;
              },
            },
            {
              key: 'createCharSequence',
              value: function(e, t, n) {
                for (var r = [], i = [], o = [], a = 0, s = t; s <= n; s++)
                  for (
                    var u = this.lines[s],
                      l = e ? this._startColumns[s] : 1,
                      c = e ? this._endColumns[s] : u.length + 1,
                      h = l;
                    h < c;
                    h++
                  )
                    (r[a] = u.charCodeAt(h - 1)),
                      (i[a] = s + 1),
                      (o[a] = h),
                      a++;
                return new _t(r, i, o);
              },
            },
          ]),
          e
        );
      })(),
      _t = (function() {
        function e(t, n, r) {
          h(this, e),
            (this._charCodes = t),
            (this._lineNumbers = n),
            (this._columns = r);
        }
        return (
          d(e, [
            {
              key: 'getElements',
              value: function() {
                return this._charCodes;
              },
            },
            {
              key: 'getStartLineNumber',
              value: function(e) {
                return this._lineNumbers[e];
              },
            },
            {
              key: 'getStartColumn',
              value: function(e) {
                return this._columns[e];
              },
            },
            {
              key: 'getEndLineNumber',
              value: function(e) {
                return this._lineNumbers[e];
              },
            },
            {
              key: 'getEndColumn',
              value: function(e) {
                return this._columns[e] + 1;
              },
            },
          ]),
          e
        );
      })(),
      yt = (function() {
        function e(t, n, r, i, o, a, s, u) {
          h(this, e),
            (this.originalStartLineNumber = t),
            (this.originalStartColumn = n),
            (this.originalEndLineNumber = r),
            (this.originalEndColumn = i),
            (this.modifiedStartLineNumber = o),
            (this.modifiedStartColumn = a),
            (this.modifiedEndLineNumber = s),
            (this.modifiedEndColumn = u);
        }
        return (
          d(e, null, [
            {
              key: 'createFromDiffChange',
              value: function(t, n, r) {
                var i, o, a, s, u, l, c, h;
                return (
                  0 === t.originalLength
                    ? ((i = 0), (o = 0), (a = 0), (s = 0))
                    : ((i = n.getStartLineNumber(t.originalStart)),
                      (o = n.getStartColumn(t.originalStart)),
                      (a = n.getEndLineNumber(
                        t.originalStart + t.originalLength - 1,
                      )),
                      (s = n.getEndColumn(
                        t.originalStart + t.originalLength - 1,
                      ))),
                  0 === t.modifiedLength
                    ? ((u = 0), (l = 0), (c = 0), (h = 0))
                    : ((u = r.getStartLineNumber(t.modifiedStart)),
                      (l = r.getStartColumn(t.modifiedStart)),
                      (c = r.getEndLineNumber(
                        t.modifiedStart + t.modifiedLength - 1,
                      )),
                      (h = r.getEndColumn(
                        t.modifiedStart + t.modifiedLength - 1,
                      ))),
                  new e(i, o, a, s, u, l, c, h)
                );
              },
            },
          ]),
          e
        );
      })();
    function bt(e) {
      if (e.length <= 1) return e;
      for (var t = [e[0]], n = t[0], r = 1, i = e.length; r < i; r++) {
        var o = e[r],
          a = o.originalStart - (n.originalStart + n.originalLength),
          s = o.modifiedStart - (n.modifiedStart + n.modifiedLength),
          u = Math.min(a, s);
        u < gt
          ? ((n.originalLength =
              o.originalStart + o.originalLength - n.originalStart),
            (n.modifiedLength =
              o.modifiedStart + o.modifiedLength - n.modifiedStart))
          : (t.push(o), (n = o));
      }
      return t;
    }
    var Ct = (function() {
        function e(t, n, r, i, o) {
          h(this, e),
            (this.originalStartLineNumber = t),
            (this.originalEndLineNumber = n),
            (this.modifiedStartLineNumber = r),
            (this.modifiedEndLineNumber = i),
            (this.charChanges = o);
        }
        return (
          d(e, null, [
            {
              key: 'createFromDiffResult',
              value: function(t, n, r, i, o, a, s) {
                var u,
                  l,
                  c,
                  h,
                  f = void 0;
                if (
                  (0 === n.originalLength
                    ? ((u = r.getStartLineNumber(n.originalStart) - 1), (l = 0))
                    : ((u = r.getStartLineNumber(n.originalStart)),
                      (l = r.getEndLineNumber(
                        n.originalStart + n.originalLength - 1,
                      ))),
                  0 === n.modifiedLength
                    ? ((c = i.getStartLineNumber(n.modifiedStart) - 1), (h = 0))
                    : ((c = i.getStartLineNumber(n.modifiedStart)),
                      (h = i.getEndLineNumber(
                        n.modifiedStart + n.modifiedLength - 1,
                      ))),
                  a &&
                    n.originalLength > 0 &&
                    n.originalLength < 20 &&
                    n.modifiedLength > 0 &&
                    n.modifiedLength < 20 &&
                    o())
                ) {
                  var d = r.createCharSequence(
                      t,
                      n.originalStart,
                      n.originalStart + n.originalLength - 1,
                    ),
                    m = i.createCharSequence(
                      t,
                      n.modifiedStart,
                      n.modifiedStart + n.modifiedLength - 1,
                    ),
                    g = vt(d, m, o, !0).changes;
                  s && (g = bt(g)), (f = []);
                  for (var v = 0, p = g.length; v < p; v++)
                    f.push(yt.createFromDiffChange(g[v], d, m));
                }
                return new e(u, l, c, h, f);
              },
            },
          ]),
          e
        );
      })(),
      kt = (function() {
        function e(t, n, r) {
          h(this, e),
            (this.shouldComputeCharChanges = r.shouldComputeCharChanges),
            (this.shouldPostProcessCharChanges =
              r.shouldPostProcessCharChanges),
            (this.shouldIgnoreTrimWhitespace = r.shouldIgnoreTrimWhitespace),
            (this.shouldMakePrettyDiff = r.shouldMakePrettyDiff),
            (this.originalLines = t),
            (this.modifiedLines = n),
            (this.original = new pt(t)),
            (this.modified = new pt(n)),
            (this.continueLineDiff = wt(r.maxComputationTime)),
            (this.continueCharDiff = wt(
              0 === r.maxComputationTime
                ? 0
                : Math.min(r.maxComputationTime, 5e3),
            ));
        }
        return (
          d(e, [
            {
              key: 'computeDiff',
              value: function() {
                if (
                  1 === this.original.lines.length &&
                  0 === this.original.lines[0].length
                )
                  return 1 === this.modified.lines.length &&
                    0 === this.modified.lines[0].length
                    ? { quitEarly: !1, changes: [] }
                    : {
                        quitEarly: !1,
                        changes: [
                          {
                            originalStartLineNumber: 1,
                            originalEndLineNumber: 1,
                            modifiedStartLineNumber: 1,
                            modifiedEndLineNumber: this.modified.lines.length,
                            charChanges: [
                              {
                                modifiedEndColumn: 0,
                                modifiedEndLineNumber: 0,
                                modifiedStartColumn: 0,
                                modifiedStartLineNumber: 0,
                                originalEndColumn: 0,
                                originalEndLineNumber: 0,
                                originalStartColumn: 0,
                                originalStartLineNumber: 0,
                              },
                            ],
                          },
                        ],
                      };
                if (
                  1 === this.modified.lines.length &&
                  0 === this.modified.lines[0].length
                )
                  return {
                    quitEarly: !1,
                    changes: [
                      {
                        originalStartLineNumber: 1,
                        originalEndLineNumber: this.original.lines.length,
                        modifiedStartLineNumber: 1,
                        modifiedEndLineNumber: 1,
                        charChanges: [
                          {
                            modifiedEndColumn: 0,
                            modifiedEndLineNumber: 0,
                            modifiedStartColumn: 0,
                            modifiedStartLineNumber: 0,
                            originalEndColumn: 0,
                            originalEndLineNumber: 0,
                            originalStartColumn: 0,
                            originalStartLineNumber: 0,
                          },
                        ],
                      },
                    ],
                  };
                var e = vt(
                    this.original,
                    this.modified,
                    this.continueLineDiff,
                    this.shouldMakePrettyDiff,
                  ),
                  t = e.changes,
                  n = e.quitEarly;
                if (this.shouldIgnoreTrimWhitespace) {
                  for (var r = [], i = 0, o = t.length; i < o; i++)
                    r.push(
                      Ct.createFromDiffResult(
                        this.shouldIgnoreTrimWhitespace,
                        t[i],
                        this.original,
                        this.modified,
                        this.continueCharDiff,
                        this.shouldComputeCharChanges,
                        this.shouldPostProcessCharChanges,
                      ),
                    );
                  return { quitEarly: n, changes: r };
                }
                for (
                  var a = [], s = 0, u = 0, l = -1, c = t.length;
                  l < c;
                  l++
                ) {
                  var h = l + 1 < c ? t[l + 1] : null,
                    f = h ? h.originalStart : this.originalLines.length,
                    d = h ? h.modifiedStart : this.modifiedLines.length;
                  while (s < f && u < d) {
                    var m = this.originalLines[s],
                      g = this.modifiedLines[u];
                    if (m !== g) {
                      var v = Lt(m, 1),
                        p = Lt(g, 1);
                      while (v > 1 && p > 1) {
                        var _ = m.charCodeAt(v - 2),
                          y = g.charCodeAt(p - 2);
                        if (_ !== y) break;
                        v--, p--;
                      }
                      (v > 1 || p > 1) &&
                        this._pushTrimWhitespaceCharChange(
                          a,
                          s + 1,
                          1,
                          v,
                          u + 1,
                          1,
                          p,
                        );
                      var b = St(m, 1),
                        C = St(g, 1),
                        k = m.length + 1,
                        L = g.length + 1;
                      while (b < k && C < L) {
                        var S = m.charCodeAt(b - 1),
                          w = m.charCodeAt(C - 1);
                        if (S !== w) break;
                        b++, C++;
                      }
                      (b < k || C < L) &&
                        this._pushTrimWhitespaceCharChange(
                          a,
                          s + 1,
                          b,
                          k,
                          u + 1,
                          C,
                          L,
                        );
                    }
                    s++, u++;
                  }
                  h &&
                    (a.push(
                      Ct.createFromDiffResult(
                        this.shouldIgnoreTrimWhitespace,
                        h,
                        this.original,
                        this.modified,
                        this.continueCharDiff,
                        this.shouldComputeCharChanges,
                        this.shouldPostProcessCharChanges,
                      ),
                    ),
                    (s += h.originalLength),
                    (u += h.modifiedLength));
                }
                return { quitEarly: n, changes: a };
              },
            },
            {
              key: '_pushTrimWhitespaceCharChange',
              value: function(e, t, n, r, i, o, a) {
                if (!this._mergeTrimWhitespaceCharChange(e, t, n, r, i, o, a)) {
                  var s = void 0;
                  this.shouldComputeCharChanges &&
                    (s = [new yt(t, n, t, r, i, o, i, a)]),
                    e.push(new Ct(t, t, i, i, s));
                }
              },
            },
            {
              key: '_mergeTrimWhitespaceCharChange',
              value: function(e, t, n, r, i, o, a) {
                var s = e.length;
                if (0 === s) return !1;
                var u = e[s - 1];
                return (
                  0 !== u.originalEndLineNumber &&
                  0 !== u.modifiedEndLineNumber &&
                  u.originalEndLineNumber + 1 === t &&
                    u.modifiedEndLineNumber + 1 === i &&
                    ((u.originalEndLineNumber = t),
                    (u.modifiedEndLineNumber = i),
                    this.shouldComputeCharChanges &&
                      u.charChanges &&
                      u.charChanges.push(new yt(t, n, t, r, i, o, i, a)),
                    !0)
                );
              },
            },
          ]),
          e
        );
      })();
    function Lt(e, t) {
      var n = se(e);
      return -1 === n ? t : n + 1;
    }
    function St(e, t) {
      var n = ue(e);
      return -1 === n ? t : n + 2;
    }
    function wt(e) {
      if (0 === e)
        return function() {
          return !0;
        };
      var t = Date.now();
      return function() {
        return Date.now() - t < e;
      };
    }
    function Et(e) {
      return e < 0 ? 0 : e > 255 ? 255 : 0 | e;
    }
    function Nt(e) {
      return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e;
    }
    var At = function e(t, n) {
        h(this, e), (this.index = t), (this.remainder = n);
      },
      xt = (function() {
        function e(t) {
          h(this, e),
            (this.values = t),
            (this.prefixSum = new Uint32Array(t.length)),
            (this.prefixSumValidIndex = new Int32Array(1)),
            (this.prefixSumValidIndex[0] = -1);
        }
        return (
          d(e, [
            {
              key: 'insertValues',
              value: function(e, t) {
                e = Nt(e);
                var n = this.values,
                  r = this.prefixSum,
                  i = t.length;
                return (
                  0 !== i &&
                  ((this.values = new Uint32Array(n.length + i)),
                  this.values.set(n.subarray(0, e), 0),
                  this.values.set(n.subarray(e), e + i),
                  this.values.set(t, e),
                  e - 1 < this.prefixSumValidIndex[0] &&
                    (this.prefixSumValidIndex[0] = e - 1),
                  (this.prefixSum = new Uint32Array(this.values.length)),
                  this.prefixSumValidIndex[0] >= 0 &&
                    this.prefixSum.set(
                      r.subarray(0, this.prefixSumValidIndex[0] + 1),
                    ),
                  !0)
                );
              },
            },
            {
              key: 'changeValue',
              value: function(e, t) {
                return (
                  (e = Nt(e)),
                  (t = Nt(t)),
                  this.values[e] !== t &&
                    ((this.values[e] = t),
                    e - 1 < this.prefixSumValidIndex[0] &&
                      (this.prefixSumValidIndex[0] = e - 1),
                    !0)
                );
              },
            },
            {
              key: 'removeValues',
              value: function(e, t) {
                (e = Nt(e)), (t = Nt(t));
                var n = this.values,
                  r = this.prefixSum;
                if (e >= n.length) return !1;
                var i = n.length - e;
                return (
                  t >= i && (t = i),
                  0 !== t &&
                    ((this.values = new Uint32Array(n.length - t)),
                    this.values.set(n.subarray(0, e), 0),
                    this.values.set(n.subarray(e + t), e),
                    (this.prefixSum = new Uint32Array(this.values.length)),
                    e - 1 < this.prefixSumValidIndex[0] &&
                      (this.prefixSumValidIndex[0] = e - 1),
                    this.prefixSumValidIndex[0] >= 0 &&
                      this.prefixSum.set(
                        r.subarray(0, this.prefixSumValidIndex[0] + 1),
                      ),
                    !0)
                );
              },
            },
            {
              key: 'getTotalValue',
              value: function() {
                return 0 === this.values.length
                  ? 0
                  : this._getAccumulatedValue(this.values.length - 1);
              },
            },
            {
              key: 'getAccumulatedValue',
              value: function(e) {
                return e < 0 ? 0 : ((e = Nt(e)), this._getAccumulatedValue(e));
              },
            },
            {
              key: '_getAccumulatedValue',
              value: function(e) {
                if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];
                var t = this.prefixSumValidIndex[0] + 1;
                0 === t && ((this.prefixSum[0] = this.values[0]), t++),
                  e >= this.values.length && (e = this.values.length - 1);
                for (var n = t; n <= e; n++)
                  this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
                return (
                  (this.prefixSumValidIndex[0] = Math.max(
                    this.prefixSumValidIndex[0],
                    e,
                  )),
                  this.prefixSum[e]
                );
              },
            },
            {
              key: 'getIndexOf',
              value: function(e) {
                (e = Math.floor(e)), this.getTotalValue();
                var t = 0,
                  n = this.values.length - 1,
                  r = 0,
                  i = 0,
                  o = 0;
                while (t <= n)
                  if (
                    ((r = (t + (n - t) / 2) | 0),
                    (i = this.prefixSum[r]),
                    (o = i - this.values[r]),
                    e < o)
                  )
                    n = r - 1;
                  else {
                    if (!(e >= i)) break;
                    t = r + 1;
                  }
                return new At(r, e - o);
              },
            },
          ]),
          e
        );
      })(),
      Ot = (function() {
        function e(t, n, r, i) {
          h(this, e),
            (this._uri = t),
            (this._lines = n),
            (this._eol = r),
            (this._versionId = i),
            (this._lineStarts = null),
            (this._cachedTextValue = null);
        }
        return (
          d(e, [
            {
              key: 'dispose',
              value: function() {
                this._lines.length = 0;
              },
            },
            {
              key: 'getText',
              value: function() {
                return (
                  null === this._cachedTextValue &&
                    (this._cachedTextValue = this._lines.join(this._eol)),
                  this._cachedTextValue
                );
              },
            },
            {
              key: 'onEvents',
              value: function(e) {
                e.eol &&
                  e.eol !== this._eol &&
                  ((this._eol = e.eol), (this._lineStarts = null));
                var t,
                  n = e.changes,
                  r = k(n);
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var i = t.value;
                    this._acceptDeleteRange(i.range),
                      this._acceptInsertText(
                        new dt(i.range.startLineNumber, i.range.startColumn),
                        i.text,
                      );
                  }
                } catch (o) {
                  r.e(o);
                } finally {
                  r.f();
                }
                (this._versionId = e.versionId), (this._cachedTextValue = null);
              },
            },
            {
              key: '_ensureLineStarts',
              value: function() {
                if (!this._lineStarts) {
                  for (
                    var e = this._eol.length,
                      t = this._lines.length,
                      n = new Uint32Array(t),
                      r = 0;
                    r < t;
                    r++
                  )
                    n[r] = this._lines[r].length + e;
                  this._lineStarts = new xt(n);
                }
              },
            },
            {
              key: '_setLineText',
              value: function(e, t) {
                (this._lines[e] = t),
                  this._lineStarts &&
                    this._lineStarts.changeValue(
                      e,
                      this._lines[e].length + this._eol.length,
                    );
              },
            },
            {
              key: '_acceptDeleteRange',
              value: function(e) {
                if (e.startLineNumber !== e.endLineNumber)
                  this._setLineText(
                    e.startLineNumber - 1,
                    this._lines[e.startLineNumber - 1].substring(
                      0,
                      e.startColumn - 1,
                    ) +
                      this._lines[e.endLineNumber - 1].substring(
                        e.endColumn - 1,
                      ),
                  ),
                    this._lines.splice(
                      e.startLineNumber,
                      e.endLineNumber - e.startLineNumber,
                    ),
                    this._lineStarts &&
                      this._lineStarts.removeValues(
                        e.startLineNumber,
                        e.endLineNumber - e.startLineNumber,
                      );
                else {
                  if (e.startColumn === e.endColumn) return;
                  this._setLineText(
                    e.startLineNumber - 1,
                    this._lines[e.startLineNumber - 1].substring(
                      0,
                      e.startColumn - 1,
                    ) +
                      this._lines[e.startLineNumber - 1].substring(
                        e.endColumn - 1,
                      ),
                  );
                }
              },
            },
            {
              key: '_acceptInsertText',
              value: function(e, t) {
                if (0 !== t.length) {
                  var n = ae(t);
                  if (1 !== n.length) {
                    (n[n.length - 1] += this._lines[e.lineNumber - 1].substring(
                      e.column - 1,
                    )),
                      this._setLineText(
                        e.lineNumber - 1,
                        this._lines[e.lineNumber - 1].substring(
                          0,
                          e.column - 1,
                        ) + n[0],
                      );
                    for (
                      var r = new Uint32Array(n.length - 1), i = 1;
                      i < n.length;
                      i++
                    )
                      this._lines.splice(e.lineNumber + i - 1, 0, n[i]),
                        (r[i - 1] = n[i].length + this._eol.length);
                    this._lineStarts &&
                      this._lineStarts.insertValues(e.lineNumber, r);
                  } else
                    this._setLineText(
                      e.lineNumber - 1,
                      this._lines[e.lineNumber - 1].substring(0, e.column - 1) +
                        n[0] +
                        this._lines[e.lineNumber - 1].substring(e.column - 1),
                    );
                }
              },
            },
          ]),
          e
        );
      })(),
      Tt = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?';
    function It() {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        n = '(-?\\d*\\.\\d\\w*)|([^',
        r = k(Tt);
      try {
        for (r.s(); !(e = r.n()).done; ) {
          var i = e.value;
          t.indexOf(i) >= 0 || (n += '\\' + i);
        }
      } catch (o) {
        r.e(o);
      } finally {
        r.f();
      }
      return (n += '\\s]+)'), new RegExp(n, 'g');
    }
    var Mt = It();
    function Pt(e) {
      var t = Mt;
      if (e && e instanceof RegExp)
        if (e.global) t = e;
        else {
          var n = 'g';
          e.ignoreCase && (n += 'i'),
            e.multiline && (n += 'm'),
            e.unicode && (n += 'u'),
            (t = new RegExp(e.source, n));
        }
      return (t.lastIndex = 0), t;
    }
    var Rt = { maxLen: 1e3, windowSize: 15, timeBudget: 150 };
    function Ut(e, t, n, r) {
      var i =
        arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Rt;
      if (n.length > i.maxLen) {
        var o = e - i.maxLen / 2;
        return (
          o < 0 ? (o = 0) : (r += o),
          (n = n.substring(o, e + i.maxLen / 2)),
          Ut(e, t, n, r, i)
        );
      }
      for (var a = Date.now(), s = e - 1 - r, u = -1, l = null, c = 1; ; c++) {
        if (Date.now() - a >= i.timeBudget) break;
        var h = s - i.windowSize * c;
        t.lastIndex = Math.max(0, h);
        var f = Dt(t, n, s, u);
        if (!f && l) break;
        if (((l = f), h <= 0)) break;
        u = h;
      }
      if (l) {
        var d = {
          word: l[0],
          startColumn: r + 1 + l.index,
          endColumn: r + 1 + l.index + l[0].length,
        };
        return (t.lastIndex = 0), d;
      }
      return null;
    }
    function Dt(e, t, n, r) {
      var i;
      while ((i = e.exec(t))) {
        var o = i.index || 0;
        if (o <= n && e.lastIndex >= n) return i;
        if (r > 0 && o > r) return null;
      }
      return null;
    }
    var Ft = (function() {
        function e(t) {
          h(this, e);
          var n = Et(t);
          (this._defaultValue = n),
            (this._asciiMap = e._createAsciiMap(n)),
            (this._map = new Map());
        }
        return (
          d(
            e,
            [
              {
                key: 'set',
                value: function(e, t) {
                  var n = Et(t);
                  e >= 0 && e < 256
                    ? (this._asciiMap[e] = n)
                    : this._map.set(e, n);
                },
              },
              {
                key: 'get',
                value: function(e) {
                  return e >= 0 && e < 256
                    ? this._asciiMap[e]
                    : this._map.get(e) || this._defaultValue;
                },
              },
            ],
            [
              {
                key: '_createAsciiMap',
                value: function(e) {
                  for (var t = new Uint8Array(256), n = 0; n < 256; n++)
                    t[n] = e;
                  return t;
                },
              },
            ],
          ),
          e
        );
      })(),
      Bt = (function() {
        function e(t, n, r) {
          h(this, e);
          for (var i = new Uint8Array(t * n), o = 0, a = t * n; o < a; o++)
            i[o] = r;
          (this._data = i), (this.rows = t), (this.cols = n);
        }
        return (
          d(e, [
            {
              key: 'get',
              value: function(e, t) {
                return this._data[e * this.cols + t];
              },
            },
            {
              key: 'set',
              value: function(e, t, n) {
                this._data[e * this.cols + t] = n;
              },
            },
          ]),
          e
        );
      })(),
      Kt = (function() {
        function e(t) {
          h(this, e);
          for (var n = 0, r = 0, i = 0, o = t.length; i < o; i++) {
            var a = ie(t[i], 3),
              s = a[0],
              u = a[1],
              l = a[2];
            u > n && (n = u), s > r && (r = s), l > r && (r = l);
          }
          n++, r++;
          for (var c = new Bt(r, n, 0), f = 0, d = t.length; f < d; f++) {
            var m = ie(t[f], 3),
              g = m[0],
              v = m[1],
              p = m[2];
            c.set(g, v, p);
          }
          (this._states = c), (this._maxCharCode = n);
        }
        return (
          d(e, [
            {
              key: 'nextState',
              value: function(e, t) {
                return t < 0 || t >= this._maxCharCode
                  ? 0
                  : this._states.get(e, t);
              },
            },
          ]),
          e
        );
      })(),
      Wt = null;
    function qt() {
      return (
        null === Wt &&
          (Wt = new Kt([
            [1, 104, 2],
            [1, 72, 2],
            [1, 102, 6],
            [1, 70, 6],
            [2, 116, 3],
            [2, 84, 3],
            [3, 116, 4],
            [3, 84, 4],
            [4, 112, 5],
            [4, 80, 5],
            [5, 115, 9],
            [5, 83, 9],
            [5, 58, 10],
            [6, 105, 7],
            [6, 73, 7],
            [7, 108, 8],
            [7, 76, 8],
            [8, 101, 9],
            [8, 69, 9],
            [9, 58, 10],
            [10, 47, 11],
            [11, 47, 12],
          ])),
        Wt
      );
    }
    var Ht = null;
    function Vt() {
      if (null === Ht) {
        Ht = new Ft(0);
        for (
          var e =
              ' \t<>\'"\u3001\u3002\uff61\uff64\uff0c\uff0e\uff1a\uff1b\u2018\u201c\u3008\u300a\u300c\u300e\u3010\u3014\uff08\uff3b\uff5b\uff62\uff63\uff5d\uff3d\uff09\u3015\u3011\u300f\u300d\u300b\u3009\u201d\u2019\uff40\uff5e\u2026',
            t = 0;
          t < e.length;
          t++
        )
          Ht.set(e.charCodeAt(t), 1);
        for (var n = '.,;', r = 0; r < n.length; r++)
          Ht.set(n.charCodeAt(r), 2);
      }
      return Ht;
    }
    var jt = (function() {
      function e() {
        h(this, e);
      }
      return (
        d(e, null, [
          {
            key: '_createLink',
            value: function(e, t, n, r, i) {
              var o = i - 1;
              do {
                var a = t.charCodeAt(o),
                  s = e.get(a);
                if (2 !== s) break;
                o--;
              } while (o > r);
              if (r > 0) {
                var u = t.charCodeAt(r - 1),
                  l = t.charCodeAt(o);
                ((40 === u && 41 === l) ||
                  (91 === u && 93 === l) ||
                  (123 === u && 125 === l)) &&
                  o--;
              }
              return {
                range: {
                  startLineNumber: n,
                  startColumn: r + 1,
                  endLineNumber: n,
                  endColumn: o + 2,
                },
                url: t.substring(r, o + 1),
              };
            },
          },
          {
            key: 'computeLinks',
            value: function(t) {
              for (
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : qt(),
                  r = Vt(),
                  i = [],
                  o = 1,
                  a = t.getLineCount();
                o <= a;
                o++
              ) {
                var s = t.getLineContent(o),
                  u = s.length,
                  l = 0,
                  c = 0,
                  h = 0,
                  f = 1,
                  d = !1,
                  m = !1,
                  g = !1,
                  v = !1;
                while (l < u) {
                  var p = !1,
                    _ = s.charCodeAt(l);
                  if (13 === f) {
                    var y = void 0;
                    switch (_) {
                      case 40:
                        (d = !0), (y = 0);
                        break;
                      case 41:
                        y = d ? 0 : 1;
                        break;
                      case 91:
                        (g = !0), (m = !0), (y = 0);
                        break;
                      case 93:
                        (g = !1), (y = m ? 0 : 1);
                        break;
                      case 123:
                        (v = !0), (y = 0);
                        break;
                      case 125:
                        y = v ? 0 : 1;
                        break;
                      case 39:
                        y = 34 === h || 96 === h ? 0 : 1;
                        break;
                      case 34:
                        y = 39 === h || 96 === h ? 0 : 1;
                        break;
                      case 96:
                        y = 39 === h || 34 === h ? 0 : 1;
                        break;
                      case 42:
                        y = 42 === h ? 1 : 0;
                        break;
                      case 124:
                        y = 124 === h ? 1 : 0;
                        break;
                      case 32:
                        y = g ? 0 : 1;
                        break;
                      default:
                        y = r.get(_);
                    }
                    1 === y && (i.push(e._createLink(r, s, o, c, l)), (p = !0));
                  } else if (12 === f) {
                    var b = void 0;
                    91 === _ ? ((m = !0), (b = 0)) : (b = r.get(_)),
                      1 === b ? (p = !0) : (f = 13);
                  } else (f = n.nextState(f, _)), 0 === f && (p = !0);
                  p &&
                    ((f = 1),
                    (d = !1),
                    (m = !1),
                    (v = !1),
                    (c = l + 1),
                    (h = _)),
                    l++;
                }
                13 === f && i.push(e._createLink(r, s, o, c, u));
              }
              return i;
            },
          },
        ]),
        e
      );
    })();
    function Yt(e) {
      return e &&
        'function' === typeof e.getLineCount &&
        'function' === typeof e.getLineContent
        ? jt.computeLinks(e)
        : [];
    }
    var Gt = (function() {
      function e() {
        h(this, e),
          (this._defaultValueSet = [
            ['true', 'false'],
            ['True', 'False'],
            [
              'Private',
              'Public',
              'Friend',
              'ReadOnly',
              'Partial',
              'Protected',
              'WriteOnly',
            ],
            ['public', 'protected', 'private'],
          ]);
      }
      return (
        d(e, [
          {
            key: 'navigateValueSet',
            value: function(e, t, n, r, i) {
              if (e && t) {
                var o = this.doNavigateValueSet(t, i);
                if (o) return { range: e, value: o };
              }
              if (n && r) {
                var a = this.doNavigateValueSet(r, i);
                if (a) return { range: n, value: a };
              }
              return null;
            },
          },
          {
            key: 'doNavigateValueSet',
            value: function(e, t) {
              var n = this.numberReplace(e, t);
              return null !== n ? n : this.textReplace(e, t);
            },
          },
          {
            key: 'numberReplace',
            value: function(e, t) {
              var n = Math.pow(10, e.length - (e.lastIndexOf('.') + 1)),
                r = Number(e),
                i = parseFloat(e);
              return isNaN(r) || isNaN(i) || r !== i
                ? null
                : 0 !== r || t
                ? ((r = Math.floor(r * n)), (r += t ? n : -n), String(r / n))
                : null;
            },
          },
          {
            key: 'textReplace',
            value: function(e, t) {
              return this.valueSetsReplace(this._defaultValueSet, e, t);
            },
          },
          {
            key: 'valueSetsReplace',
            value: function(e, t, n) {
              for (var r = null, i = 0, o = e.length; null === r && i < o; i++)
                r = this.valueSetReplace(e[i], t, n);
              return r;
            },
          },
          {
            key: 'valueSetReplace',
            value: function(e, t, n) {
              var r = e.indexOf(t);
              return r >= 0
                ? ((r += n ? 1 : -1),
                  r < 0 ? (r = e.length - 1) : (r %= e.length),
                  e[r])
                : null;
            },
          },
        ]),
        e
      );
    })();
    Gt.INSTANCE = new Gt();
    var zt = function e(t) {
      h(this, e),
        (this.element = t),
        (this.next = e.Undefined),
        (this.prev = e.Undefined);
    };
    zt.Undefined = new zt(void 0);
    var Qt,
      Xt = (function() {
        function e() {
          h(this, e),
            (this._first = zt.Undefined),
            (this._last = zt.Undefined),
            (this._size = 0);
        }
        return (
          d(e, [
            {
              key: 'size',
              get: function() {
                return this._size;
              },
            },
            {
              key: 'isEmpty',
              value: function() {
                return this._first === zt.Undefined;
              },
            },
            {
              key: 'clear',
              value: function() {
                (this._first = zt.Undefined),
                  (this._last = zt.Undefined),
                  (this._size = 0);
              },
            },
            {
              key: 'unshift',
              value: function(e) {
                return this._insert(e, !1);
              },
            },
            {
              key: 'push',
              value: function(e) {
                return this._insert(e, !0);
              },
            },
            {
              key: '_insert',
              value: function(e, t) {
                var n = this,
                  r = new zt(e);
                if (this._first === zt.Undefined)
                  (this._first = r), (this._last = r);
                else if (t) {
                  var i = this._last;
                  (this._last = r), (r.prev = i), (i.next = r);
                } else {
                  var o = this._first;
                  (this._first = r), (r.next = o), (o.prev = r);
                }
                this._size += 1;
                var a = !1;
                return function() {
                  a || ((a = !0), n._remove(r));
                };
              },
            },
            {
              key: 'shift',
              value: function() {
                if (this._first !== zt.Undefined) {
                  var e = this._first.element;
                  return this._remove(this._first), e;
                }
              },
            },
            {
              key: 'pop',
              value: function() {
                if (this._last !== zt.Undefined) {
                  var e = this._last.element;
                  return this._remove(this._last), e;
                }
              },
            },
            {
              key: '_remove',
              value: function(e) {
                if (e.prev !== zt.Undefined && e.next !== zt.Undefined) {
                  var t = e.prev;
                  (t.next = e.next), (e.next.prev = t);
                } else
                  e.prev === zt.Undefined && e.next === zt.Undefined
                    ? ((this._first = zt.Undefined),
                      (this._last = zt.Undefined))
                    : e.next === zt.Undefined
                    ? ((this._last = this._last.prev),
                      (this._last.next = zt.Undefined))
                    : e.prev === zt.Undefined &&
                      ((this._first = this._first.next),
                      (this._first.prev = zt.Undefined));
                this._size -= 1;
              },
            },
            {
              key: Symbol.iterator,
              value: x.a.mark(function e() {
                var t;
                return x.a.wrap(
                  function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t = this._first;
                        case 1:
                          if (t === zt.Undefined) {
                            e.next = 7;
                            break;
                          }
                          return (e.next = 4), t.element;
                        case 4:
                          (t = t.next), (e.next = 1);
                          break;
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  this,
                );
              }),
            },
          ]),
          e
        );
      })(),
      Zt = W['a'].performance && 'function' === typeof W['a'].performance.now,
      Jt = (function() {
        function e(t) {
          h(this, e),
            (this._highResolution = Zt && t),
            (this._startTime = this._now()),
            (this._stopTime = -1);
        }
        return (
          d(
            e,
            [
              {
                key: 'stop',
                value: function() {
                  this._stopTime = this._now();
                },
              },
              {
                key: 'elapsed',
                value: function() {
                  return -1 !== this._stopTime
                    ? this._stopTime - this._startTime
                    : this._now() - this._startTime;
                },
              },
              {
                key: '_now',
                value: function() {
                  return this._highResolution
                    ? W['a'].performance.now()
                    : Date.now();
                },
              },
            ],
            [
              {
                key: 'create',
                value: function() {
                  var t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  return new e(t);
                },
              },
            ],
          ),
          e
        );
      })();
    (function(e) {
      function t(e) {
        return function(t) {
          var n,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            i = arguments.length > 2 ? arguments[2] : void 0,
            o = !1;
          return (
            (n = e(
              function(e) {
                if (!o) return n ? n.dispose() : (o = !0), t.call(r, e);
              },
              null,
              i,
            )),
            o && n.dispose(),
            n
          );
        };
      }
      function n(e, t) {
        return u(function(n) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            i = arguments.length > 2 ? arguments[2] : void 0;
          return e(
            function(e) {
              return n.call(r, t(e));
            },
            null,
            i,
          );
        });
      }
      function r(e, t) {
        return u(function(n) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            i = arguments.length > 2 ? arguments[2] : void 0;
          return e(
            function(e) {
              t(e), n.call(r, e);
            },
            null,
            i,
          );
        });
      }
      function i(e, t) {
        return u(function(n) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            i = arguments.length > 2 ? arguments[2] : void 0;
          return e(
            function(e) {
              return t(e) && n.call(r, e);
            },
            null,
            i,
          );
        });
      }
      function o(e) {
        return e;
      }
      function a() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function(e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            r = arguments.length > 2 ? arguments[2] : void 0;
          return D.apply(
            void 0,
            Z(
              t.map(function(t) {
                return t(
                  function(t) {
                    return e.call(n, t);
                  },
                  null,
                  r,
                );
              }),
            ),
          );
        };
      }
      function s(e, t, r) {
        var i = r;
        return n(e, function(e) {
          return (i = t(i, e)), i;
        });
      }
      function u(e) {
        var t,
          n = new nn({
            onFirstListenerAdd: function() {
              t = e(n.fire, n);
            },
            onLastListenerRemove: function() {
              t.dispose();
            },
          });
        return n.event;
      }
      function l(e, t) {
        var n,
          r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 100,
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          o = arguments.length > 4 ? arguments[4] : void 0,
          a = void 0,
          s = void 0,
          u = 0,
          l = new nn({
            leakWarningThreshold: o,
            onFirstListenerAdd: function() {
              n = e(function(e) {
                u++,
                  (a = t(a, e)),
                  i && !s && (l.fire(a), (a = void 0)),
                  clearTimeout(s),
                  (s = setTimeout(function() {
                    var e = a;
                    (a = void 0),
                      (s = void 0),
                      (!i || u > 1) && l.fire(e),
                      (u = 0);
                  }, r));
              });
            },
            onLastListenerRemove: function() {
              n.dispose();
            },
          });
        return l.event;
      }
      function c(e) {
        var r = new Date().getTime();
        return n(t(e), function(e) {
          return new Date().getTime() - r;
        });
      }
      function f(e) {
        var t,
          n = !0;
        return i(e, function(e) {
          var r = n || e !== t;
          return (n = !1), (t = e), r;
        });
      }
      function m(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          r = n.slice(),
          i = e(function(e) {
            r ? r.push(e) : a.fire(e);
          }),
          o = function() {
            r &&
              r.forEach(function(e) {
                return a.fire(e);
              }),
              (r = null);
          },
          a = new nn({
            onFirstListenerAdd: function() {
              i ||
                (i = e(function(e) {
                  return a.fire(e);
                }));
            },
            onFirstListenerDidAdd: function() {
              r && (t ? setTimeout(o) : o());
            },
            onLastListenerRemove: function() {
              i && i.dispose(), (i = null);
            },
          });
        return a.event;
      }
      (e.None = function() {
        return K.None;
      }),
        (e.once = t),
        (e.map = n),
        (e.forEach = r),
        (e.filter = i),
        (e.signal = o),
        (e.any = a),
        (e.reduce = s),
        (e.snapshot = u),
        (e.debounce = l),
        (e.stopwatch = c),
        (e.latch = f),
        (e.buffer = m);
      var g = (function() {
        function e(t) {
          h(this, e), (this.event = t);
        }
        return (
          d(e, [
            {
              key: 'map',
              value: function(t) {
                return new e(n(this.event, t));
              },
            },
            {
              key: 'forEach',
              value: function(t) {
                return new e(r(this.event, t));
              },
            },
            {
              key: 'filter',
              value: function(t) {
                return new e(i(this.event, t));
              },
            },
            {
              key: 'reduce',
              value: function(t, n) {
                return new e(s(this.event, t, n));
              },
            },
            {
              key: 'latch',
              value: function() {
                return new e(f(this.event));
              },
            },
            {
              key: 'debounce',
              value: function(t) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 100,
                  r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  i = arguments.length > 3 ? arguments[3] : void 0;
                return new e(l(this.event, t, n, r, i));
              },
            },
            {
              key: 'on',
              value: function(e, t, n) {
                return this.event(e, t, n);
              },
            },
            {
              key: 'once',
              value: function(e, n, r) {
                return t(this.event)(e, n, r);
              },
            },
          ]),
          e
        );
      })();
      function v(e) {
        return new g(e);
      }
      function p(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : function(e) {
                  return e;
                },
          r = function() {
            return a.fire(n.apply(void 0, arguments));
          },
          i = function() {
            return e.on(t, r);
          },
          o = function() {
            return e.removeListener(t, r);
          },
          a = new nn({ onFirstListenerAdd: i, onLastListenerRemove: o });
        return a.event;
      }
      function _(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : function(e) {
                  return e;
                },
          r = function() {
            return a.fire(n.apply(void 0, arguments));
          },
          i = function() {
            return e.addEventListener(t, r);
          },
          o = function() {
            return e.removeEventListener(t, r);
          },
          a = new nn({ onFirstListenerAdd: i, onLastListenerRemove: o });
        return a.event;
      }
      function y(e) {
        var t = new nn(),
          n = !1;
        return (
          e
            .then(void 0, function() {
              return null;
            })
            .then(function() {
              n
                ? t.fire(void 0)
                : setTimeout(function() {
                    return t.fire(void 0);
                  }, 0);
            }),
          (n = !0),
          t.event
        );
      }
      function b(e) {
        return new Promise(function(n) {
          return t(e)(n);
        });
      }
      (e.chain = v),
        (e.fromNodeEventEmitter = p),
        (e.fromDOMEventEmitter = _),
        (e.fromPromise = y),
        (e.toPromise = b);
    })(Qt || (Qt = {}));
    var $t = (function() {
      function e(t) {
        h(this, e),
          (this._listenerCount = 0),
          (this._invocationCount = 0),
          (this._elapsedOverall = 0),
          (this._name = ''.concat(t, '_').concat(e._idPool++));
      }
      return (
        d(e, [
          {
            key: 'start',
            value: function(e) {
              (this._stopWatch = new Jt(!0)), (this._listenerCount = e);
            },
          },
          {
            key: 'stop',
            value: function() {
              if (this._stopWatch) {
                var e = this._stopWatch.elapsed();
                (this._elapsedOverall += e),
                  (this._invocationCount += 1),
                  console.info(
                    'did FIRE '
                      .concat(this._name, ': elapsed_ms: ')
                      .concat(e.toFixed(5), ', listener: ')
                      .concat(this._listenerCount, ' (elapsed_overall: ')
                      .concat(
                        this._elapsedOverall.toFixed(2),
                        ', invocations: ',
                      )
                      .concat(this._invocationCount, ')'),
                  ),
                  (this._stopWatch = void 0);
              }
            },
          },
        ]),
        e
      );
    })();
    $t._idPool = 0;
    var en = -1,
      tn = (function() {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Math.random()
                  .toString(18)
                  .slice(2, 5);
          h(this, e),
            (this.customThreshold = t),
            (this.name = n),
            (this._warnCountdown = 0);
        }
        return (
          d(e, [
            {
              key: 'dispose',
              value: function() {
                this._stacks && this._stacks.clear();
              },
            },
            {
              key: 'check',
              value: function(e) {
                var t = this,
                  n = en;
                if (
                  ('number' === typeof this.customThreshold &&
                    (n = this.customThreshold),
                  !(n <= 0 || e < n))
                ) {
                  this._stacks || (this._stacks = new Map());
                  var r = new Error().stack
                      .split('\n')
                      .slice(3)
                      .join('\n'),
                    i = this._stacks.get(r) || 0;
                  if (
                    (this._stacks.set(r, i + 1),
                    (this._warnCountdown -= 1),
                    this._warnCountdown <= 0)
                  ) {
                    var o;
                    this._warnCountdown = 0.5 * n;
                    var a,
                      s = 0,
                      u = k(this._stacks);
                    try {
                      for (u.s(); !(a = u.n()).done; ) {
                        var l = a.value,
                          c = ie(l, 2),
                          h = c[0],
                          f = c[1];
                        (!o || s < f) && ((o = h), (s = f));
                      }
                    } catch (d) {
                      u.e(d);
                    } finally {
                      u.f();
                    }
                    console.warn(
                      '['
                        .concat(
                          this.name,
                          '] potential listener LEAK detected, having ',
                        )
                        .concat(
                          e,
                          ' listeners already. MOST frequent listener (',
                        )
                        .concat(s, '):'),
                    ),
                      console.warn(o);
                  }
                  return function() {
                    var e = t._stacks.get(r) || 0;
                    t._stacks.set(r, e - 1);
                  };
                }
              },
            },
          ]),
          e
        );
      })(),
      nn = (function() {
        function e(t) {
          var n;
          h(this, e),
            (this._disposed = !1),
            (this._options = t),
            (this._leakageMon =
              en > 0
                ? new tn(this._options && this._options.leakWarningThreshold)
                : void 0),
            (this._perfMon = (null === (n = this._options) || void 0 === n
            ? void 0
            : n._profName)
              ? new $t(this._options._profName)
              : void 0);
        }
        return (
          d(e, [
            {
              key: 'event',
              get: function() {
                var t = this;
                return (
                  this._event ||
                    (this._event = function(n, r, i) {
                      var o;
                      t._listeners || (t._listeners = new Xt());
                      var a = t._listeners.isEmpty();
                      a &&
                        t._options &&
                        t._options.onFirstListenerAdd &&
                        t._options.onFirstListenerAdd(t);
                      var s = t._listeners.push(r ? [n, r] : n);
                      a &&
                        t._options &&
                        t._options.onFirstListenerDidAdd &&
                        t._options.onFirstListenerDidAdd(t),
                        t._options &&
                          t._options.onListenerDidAdd &&
                          t._options.onListenerDidAdd(t, n, r);
                      var u,
                        l =
                          null === (o = t._leakageMon) || void 0 === o
                            ? void 0
                            : o.check(t._listeners.size);
                      return (
                        (u = {
                          dispose: function() {
                            if (
                              (l && l(),
                              (u.dispose = e._noop),
                              !t._disposed &&
                                (s(),
                                t._options && t._options.onLastListenerRemove))
                            ) {
                              var n = t._listeners && !t._listeners.isEmpty();
                              n || t._options.onLastListenerRemove(t);
                            }
                          },
                        }),
                        i instanceof B
                          ? i.add(u)
                          : Array.isArray(i) && i.push(u),
                        u
                      );
                    }),
                  this._event
                );
              },
            },
            {
              key: 'fire',
              value: function(e) {
                var t, n;
                if (this._listeners) {
                  this._deliveryQueue || (this._deliveryQueue = new Xt());
                  var r,
                    i = k(this._listeners);
                  try {
                    for (i.s(); !(r = i.n()).done; ) {
                      var o = r.value;
                      this._deliveryQueue.push([o, e]);
                    }
                  } catch (c) {
                    i.e(c);
                  } finally {
                    i.f();
                  }
                  null === (t = this._perfMon) ||
                    void 0 === t ||
                    t.start(this._deliveryQueue.size);
                  while (this._deliveryQueue.size > 0) {
                    var a = this._deliveryQueue.shift(),
                      s = ie(a, 2),
                      u = s[0],
                      l = s[1];
                    try {
                      'function' === typeof u
                        ? u.call(void 0, l)
                        : u[0].call(u[1], l);
                    } catch (h) {
                      v(h);
                    }
                  }
                  null === (n = this._perfMon) || void 0 === n || n.stop();
                }
              },
            },
            {
              key: 'dispose',
              value: function() {
                var e, t, n;
                null === (e = this._listeners) || void 0 === e || e.clear(),
                  null === (t = this._deliveryQueue) ||
                    void 0 === t ||
                    t.clear(),
                  null === (n = this._leakageMon) ||
                    void 0 === n ||
                    n.dispose(),
                  (this._disposed = !0);
              },
            },
          ]),
          e
        );
      })();
    nn._noop = function() {};
    var rn,
      on = Object.freeze(function(e, t) {
        var n = setTimeout(e.bind(t), 0);
        return {
          dispose: function() {
            clearTimeout(n);
          },
        };
      });
    (function(e) {
      function t(t) {
        return (
          t === e.None ||
          t === e.Cancelled ||
          t instanceof sn ||
            (!(!t || 'object' !== typeof t) &&
              'boolean' === typeof t.isCancellationRequested &&
                'function' === typeof t.onCancellationRequested)
        );
      }
      (e.isCancellationToken = t),
        (e.None = Object.freeze({
          isCancellationRequested: !1,
          onCancellationRequested: Qt.None,
        })),
        (e.Cancelled = Object.freeze({
          isCancellationRequested: !0,
          onCancellationRequested: on,
        }));
    })(rn || (rn = {}));
    var an,
      sn = (function() {
        function e() {
          h(this, e), (this._isCancelled = !1), (this._emitter = null);
        }
        return (
          d(e, [
            {
              key: 'cancel',
              value: function() {
                this._isCancelled ||
                  ((this._isCancelled = !0),
                  this._emitter &&
                    (this._emitter.fire(void 0), this.dispose()));
              },
            },
            {
              key: 'isCancellationRequested',
              get: function() {
                return this._isCancelled;
              },
            },
            {
              key: 'onCancellationRequested',
              get: function() {
                return this._isCancelled
                  ? on
                  : (this._emitter || (this._emitter = new nn()),
                    this._emitter.event);
              },
            },
            {
              key: 'dispose',
              value: function() {
                this._emitter &&
                  (this._emitter.dispose(), (this._emitter = null));
              },
            },
          ]),
          e
        );
      })(),
      un = (function() {
        function e(t) {
          h(this, e),
            (this._token = void 0),
            (this._parentListener = void 0),
            (this._parentListener =
              t && t.onCancellationRequested(this.cancel, this));
        }
        return (
          d(e, [
            {
              key: 'token',
              get: function() {
                return this._token || (this._token = new sn()), this._token;
              },
            },
            {
              key: 'cancel',
              value: function() {
                this._token
                  ? this._token instanceof sn && this._token.cancel()
                  : (this._token = rn.Cancelled);
              },
            },
            {
              key: 'dispose',
              value: function() {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                e && this.cancel(),
                  this._parentListener && this._parentListener.dispose(),
                  this._token
                    ? this._token instanceof sn && this._token.dispose()
                    : (this._token = rn.None);
              },
            },
          ]),
          e
        );
      })(),
      ln = (function() {
        function e() {
          h(this, e),
            (this._keyCodeToStr = []),
            (this._strToKeyCode = Object.create(null));
        }
        return (
          d(e, [
            {
              key: 'define',
              value: function(e, t) {
                (this._keyCodeToStr[e] = t),
                  (this._strToKeyCode[t.toLowerCase()] = e);
              },
            },
            {
              key: 'keyCodeToStr',
              value: function(e) {
                return this._keyCodeToStr[e];
              },
            },
            {
              key: 'strToKeyCode',
              value: function(e) {
                return this._strToKeyCode[e.toLowerCase()] || 0;
              },
            },
          ]),
          e
        );
      })(),
      cn = new ln(),
      hn = new ln(),
      fn = new ln();
    function dn(e, t) {
      var n = ((65535 & t) << 16) >>> 0;
      return (e | n) >>> 0;
    }
    (function() {
      function e(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n;
        cn.define(e, t), hn.define(e, n), fn.define(e, r);
      }
      e(0, 'unknown'),
        e(1, 'Backspace'),
        e(2, 'Tab'),
        e(3, 'Enter'),
        e(4, 'Shift'),
        e(5, 'Ctrl'),
        e(6, 'Alt'),
        e(7, 'PauseBreak'),
        e(8, 'CapsLock'),
        e(9, 'Escape'),
        e(10, 'Space'),
        e(11, 'PageUp'),
        e(12, 'PageDown'),
        e(13, 'End'),
        e(14, 'Home'),
        e(15, 'LeftArrow', 'Left'),
        e(16, 'UpArrow', 'Up'),
        e(17, 'RightArrow', 'Right'),
        e(18, 'DownArrow', 'Down'),
        e(19, 'Insert'),
        e(20, 'Delete'),
        e(21, '0'),
        e(22, '1'),
        e(23, '2'),
        e(24, '3'),
        e(25, '4'),
        e(26, '5'),
        e(27, '6'),
        e(28, '7'),
        e(29, '8'),
        e(30, '9'),
        e(31, 'A'),
        e(32, 'B'),
        e(33, 'C'),
        e(34, 'D'),
        e(35, 'E'),
        e(36, 'F'),
        e(37, 'G'),
        e(38, 'H'),
        e(39, 'I'),
        e(40, 'J'),
        e(41, 'K'),
        e(42, 'L'),
        e(43, 'M'),
        e(44, 'N'),
        e(45, 'O'),
        e(46, 'P'),
        e(47, 'Q'),
        e(48, 'R'),
        e(49, 'S'),
        e(50, 'T'),
        e(51, 'U'),
        e(52, 'V'),
        e(53, 'W'),
        e(54, 'X'),
        e(55, 'Y'),
        e(56, 'Z'),
        e(57, 'Meta'),
        e(58, 'ContextMenu'),
        e(59, 'F1'),
        e(60, 'F2'),
        e(61, 'F3'),
        e(62, 'F4'),
        e(63, 'F5'),
        e(64, 'F6'),
        e(65, 'F7'),
        e(66, 'F8'),
        e(67, 'F9'),
        e(68, 'F10'),
        e(69, 'F11'),
        e(70, 'F12'),
        e(71, 'F13'),
        e(72, 'F14'),
        e(73, 'F15'),
        e(74, 'F16'),
        e(75, 'F17'),
        e(76, 'F18'),
        e(77, 'F19'),
        e(78, 'NumLock'),
        e(79, 'ScrollLock'),
        e(80, ';', ';', 'OEM_1'),
        e(81, '=', '=', 'OEM_PLUS'),
        e(82, ',', ',', 'OEM_COMMA'),
        e(83, '-', '-', 'OEM_MINUS'),
        e(84, '.', '.', 'OEM_PERIOD'),
        e(85, '/', '/', 'OEM_2'),
        e(86, '`', '`', 'OEM_3'),
        e(110, 'ABNT_C1'),
        e(111, 'ABNT_C2'),
        e(87, '[', '[', 'OEM_4'),
        e(88, '\\', '\\', 'OEM_5'),
        e(89, ']', ']', 'OEM_6'),
        e(90, "'", "'", 'OEM_7'),
        e(91, 'OEM_8'),
        e(92, 'OEM_102'),
        e(93, 'NumPad0'),
        e(94, 'NumPad1'),
        e(95, 'NumPad2'),
        e(96, 'NumPad3'),
        e(97, 'NumPad4'),
        e(98, 'NumPad5'),
        e(99, 'NumPad6'),
        e(100, 'NumPad7'),
        e(101, 'NumPad8'),
        e(102, 'NumPad9'),
        e(103, 'NumPad_Multiply'),
        e(104, 'NumPad_Add'),
        e(105, 'NumPad_Separator'),
        e(106, 'NumPad_Subtract'),
        e(107, 'NumPad_Decimal'),
        e(108, 'NumPad_Divide');
    })(),
      (function(e) {
        function t(e) {
          return cn.keyCodeToStr(e);
        }
        function n(e) {
          return cn.strToKeyCode(e);
        }
        function r(e) {
          return hn.keyCodeToStr(e);
        }
        function i(e) {
          return fn.keyCodeToStr(e);
        }
        function o(e) {
          return hn.strToKeyCode(e) || fn.strToKeyCode(e);
        }
        (e.toString = t),
          (e.fromString = n),
          (e.toUserSettingsUS = r),
          (e.toUserSettingsGeneral = i),
          (e.fromUserSettings = o);
      })(an || (an = {}));
    var mn,
      gn,
      vn,
      pn,
      _n,
      yn,
      bn,
      Cn,
      kn,
      Ln,
      Sn,
      wn,
      En,
      Nn,
      An,
      xn,
      On,
      Tn,
      In,
      Mn,
      Pn,
      Rn,
      Un,
      Dn,
      Fn,
      Bn,
      Kn,
      Wn,
      qn,
      Hn,
      Vn,
      jn,
      Yn,
      Gn,
      zn = (function(e) {
        i(n, e);
        var t = c(n);
        function n(e, r, i, o) {
          var a;
          return (
            h(this, n),
            (a = t.call(this, e, r, i, o)),
            (a.selectionStartLineNumber = e),
            (a.selectionStartColumn = r),
            (a.positionLineNumber = i),
            (a.positionColumn = o),
            a
          );
        }
        return (
          d(
            n,
            [
              {
                key: 'toString',
                value: function() {
                  return (
                    '[' +
                    this.selectionStartLineNumber +
                    ',' +
                    this.selectionStartColumn +
                    ' -> ' +
                    this.positionLineNumber +
                    ',' +
                    this.positionColumn +
                    ']'
                  );
                },
              },
              {
                key: 'equalsSelection',
                value: function(e) {
                  return n.selectionsEqual(this, e);
                },
              },
              {
                key: 'getDirection',
                value: function() {
                  return this.selectionStartLineNumber ===
                    this.startLineNumber &&
                    this.selectionStartColumn === this.startColumn
                    ? 0
                    : 1;
                },
              },
              {
                key: 'setEndPosition',
                value: function(e, t) {
                  return 0 === this.getDirection()
                    ? new n(this.startLineNumber, this.startColumn, e, t)
                    : new n(e, t, this.startLineNumber, this.startColumn);
                },
              },
              {
                key: 'getPosition',
                value: function() {
                  return new dt(this.positionLineNumber, this.positionColumn);
                },
              },
              {
                key: 'setStartPosition',
                value: function(e, t) {
                  return 0 === this.getDirection()
                    ? new n(e, t, this.endLineNumber, this.endColumn)
                    : new n(this.endLineNumber, this.endColumn, e, t);
                },
              },
            ],
            [
              {
                key: 'selectionsEqual',
                value: function(e, t) {
                  return (
                    e.selectionStartLineNumber === t.selectionStartLineNumber &&
                    e.selectionStartColumn === t.selectionStartColumn &&
                    e.positionLineNumber === t.positionLineNumber &&
                    e.positionColumn === t.positionColumn
                  );
                },
              },
              {
                key: 'fromPositions',
                value: function(e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : e;
                  return new n(e.lineNumber, e.column, t.lineNumber, t.column);
                },
              },
              {
                key: 'liftSelection',
                value: function(e) {
                  return new n(
                    e.selectionStartLineNumber,
                    e.selectionStartColumn,
                    e.positionLineNumber,
                    e.positionColumn,
                  );
                },
              },
              {
                key: 'selectionsArrEqual',
                value: function(e, t) {
                  if ((e && !t) || (!e && t)) return !1;
                  if (!e && !t) return !0;
                  if (e.length !== t.length) return !1;
                  for (var n = 0, r = e.length; n < r; n++)
                    if (!this.selectionsEqual(e[n], t[n])) return !1;
                  return !0;
                },
              },
              {
                key: 'isISelection',
                value: function(e) {
                  return (
                    e &&
                    'number' === typeof e.selectionStartLineNumber &&
                    'number' === typeof e.selectionStartColumn &&
                    'number' === typeof e.positionLineNumber &&
                    'number' === typeof e.positionColumn
                  );
                },
              },
              {
                key: 'createWithDirection',
                value: function(e, t, r, i, o) {
                  return 0 === o ? new n(e, t, r, i) : new n(r, i, e, t);
                },
              },
            ],
          ),
          n
        );
      })(mt),
      Qn = (function() {
        function e(t, n, r) {
          h(this, e),
            (this.offset = 0 | t),
            (this.type = n),
            (this.language = r);
        }
        return (
          d(e, [
            {
              key: 'toString',
              value: function() {
                return '(' + this.offset + ', ' + this.type + ')';
              },
            },
          ]),
          e
        );
      })();
    (function(e) {
      (e[(e['Unknown'] = 0)] = 'Unknown'),
        (e[(e['Disabled'] = 1)] = 'Disabled'),
        (e[(e['Enabled'] = 2)] = 'Enabled');
    })(mn || (mn = {})),
      (function(e) {
        (e[(e['KeepWhitespace'] = 1)] = 'KeepWhitespace'),
          (e[(e['InsertAsSnippet'] = 4)] = 'InsertAsSnippet');
      })(gn || (gn = {})),
      (function(e) {
        (e[(e['Method'] = 0)] = 'Method'),
          (e[(e['Function'] = 1)] = 'Function'),
          (e[(e['Constructor'] = 2)] = 'Constructor'),
          (e[(e['Field'] = 3)] = 'Field'),
          (e[(e['Variable'] = 4)] = 'Variable'),
          (e[(e['Class'] = 5)] = 'Class'),
          (e[(e['Struct'] = 6)] = 'Struct'),
          (e[(e['Interface'] = 7)] = 'Interface'),
          (e[(e['Module'] = 8)] = 'Module'),
          (e[(e['Property'] = 9)] = 'Property'),
          (e[(e['Event'] = 10)] = 'Event'),
          (e[(e['Operator'] = 11)] = 'Operator'),
          (e[(e['Unit'] = 12)] = 'Unit'),
          (e[(e['Value'] = 13)] = 'Value'),
          (e[(e['Constant'] = 14)] = 'Constant'),
          (e[(e['Enum'] = 15)] = 'Enum'),
          (e[(e['EnumMember'] = 16)] = 'EnumMember'),
          (e[(e['Keyword'] = 17)] = 'Keyword'),
          (e[(e['Text'] = 18)] = 'Text'),
          (e[(e['Color'] = 19)] = 'Color'),
          (e[(e['File'] = 20)] = 'File'),
          (e[(e['Reference'] = 21)] = 'Reference'),
          (e[(e['Customcolor'] = 22)] = 'Customcolor'),
          (e[(e['Folder'] = 23)] = 'Folder'),
          (e[(e['TypeParameter'] = 24)] = 'TypeParameter'),
          (e[(e['User'] = 25)] = 'User'),
          (e[(e['Issue'] = 26)] = 'Issue'),
          (e[(e['Snippet'] = 27)] = 'Snippet');
      })(vn || (vn = {})),
      (function(e) {
        e[(e['Deprecated'] = 1)] = 'Deprecated';
      })(pn || (pn = {})),
      (function(e) {
        (e[(e['Invoke'] = 0)] = 'Invoke'),
          (e[(e['TriggerCharacter'] = 1)] = 'TriggerCharacter'),
          (e[(e['TriggerForIncompleteCompletions'] = 2)] =
            'TriggerForIncompleteCompletions');
      })(_n || (_n = {})),
      (function(e) {
        (e[(e['EXACT'] = 0)] = 'EXACT'),
          (e[(e['ABOVE'] = 1)] = 'ABOVE'),
          (e[(e['BELOW'] = 2)] = 'BELOW');
      })(yn || (yn = {})),
      (function(e) {
        (e[(e['NotSet'] = 0)] = 'NotSet'),
          (e[(e['ContentFlush'] = 1)] = 'ContentFlush'),
          (e[(e['RecoverFromMarkers'] = 2)] = 'RecoverFromMarkers'),
          (e[(e['Explicit'] = 3)] = 'Explicit'),
          (e[(e['Paste'] = 4)] = 'Paste'),
          (e[(e['Undo'] = 5)] = 'Undo'),
          (e[(e['Redo'] = 6)] = 'Redo');
      })(bn || (bn = {})),
      (function(e) {
        (e[(e['LF'] = 1)] = 'LF'), (e[(e['CRLF'] = 2)] = 'CRLF');
      })(Cn || (Cn = {})),
      (function(e) {
        (e[(e['Text'] = 0)] = 'Text'),
          (e[(e['Read'] = 1)] = 'Read'),
          (e[(e['Write'] = 2)] = 'Write');
      })(kn || (kn = {})),
      (function(e) {
        (e[(e['None'] = 0)] = 'None'),
          (e[(e['Keep'] = 1)] = 'Keep'),
          (e[(e['Brackets'] = 2)] = 'Brackets'),
          (e[(e['Advanced'] = 3)] = 'Advanced'),
          (e[(e['Full'] = 4)] = 'Full');
      })(Ln || (Ln = {})),
      (function(e) {
        (e[(e['acceptSuggestionOnCommitCharacter'] = 0)] =
          'acceptSuggestionOnCommitCharacter'),
          (e[(e['acceptSuggestionOnEnter'] = 1)] = 'acceptSuggestionOnEnter'),
          (e[(e['accessibilitySupport'] = 2)] = 'accessibilitySupport'),
          (e[(e['accessibilityPageSize'] = 3)] = 'accessibilityPageSize'),
          (e[(e['ariaLabel'] = 4)] = 'ariaLabel'),
          (e[(e['autoClosingBrackets'] = 5)] = 'autoClosingBrackets'),
          (e[(e['autoClosingOvertype'] = 6)] = 'autoClosingOvertype'),
          (e[(e['autoClosingQuotes'] = 7)] = 'autoClosingQuotes'),
          (e[(e['autoIndent'] = 8)] = 'autoIndent'),
          (e[(e['automaticLayout'] = 9)] = 'automaticLayout'),
          (e[(e['autoSurround'] = 10)] = 'autoSurround'),
          (e[(e['codeLens'] = 11)] = 'codeLens'),
          (e[(e['codeLensFontFamily'] = 12)] = 'codeLensFontFamily'),
          (e[(e['codeLensFontSize'] = 13)] = 'codeLensFontSize'),
          (e[(e['colorDecorators'] = 14)] = 'colorDecorators'),
          (e[(e['columnSelection'] = 15)] = 'columnSelection'),
          (e[(e['comments'] = 16)] = 'comments'),
          (e[(e['contextmenu'] = 17)] = 'contextmenu'),
          (e[(e['copyWithSyntaxHighlighting'] = 18)] =
            'copyWithSyntaxHighlighting'),
          (e[(e['cursorBlinking'] = 19)] = 'cursorBlinking'),
          (e[(e['cursorSmoothCaretAnimation'] = 20)] =
            'cursorSmoothCaretAnimation'),
          (e[(e['cursorStyle'] = 21)] = 'cursorStyle'),
          (e[(e['cursorSurroundingLines'] = 22)] = 'cursorSurroundingLines'),
          (e[(e['cursorSurroundingLinesStyle'] = 23)] =
            'cursorSurroundingLinesStyle'),
          (e[(e['cursorWidth'] = 24)] = 'cursorWidth'),
          (e[(e['disableLayerHinting'] = 25)] = 'disableLayerHinting'),
          (e[(e['disableMonospaceOptimizations'] = 26)] =
            'disableMonospaceOptimizations'),
          (e[(e['dragAndDrop'] = 27)] = 'dragAndDrop'),
          (e[(e['emptySelectionClipboard'] = 28)] = 'emptySelectionClipboard'),
          (e[(e['extraEditorClassName'] = 29)] = 'extraEditorClassName'),
          (e[(e['fastScrollSensitivity'] = 30)] = 'fastScrollSensitivity'),
          (e[(e['find'] = 31)] = 'find'),
          (e[(e['fixedOverflowWidgets'] = 32)] = 'fixedOverflowWidgets'),
          (e[(e['folding'] = 33)] = 'folding'),
          (e[(e['foldingStrategy'] = 34)] = 'foldingStrategy'),
          (e[(e['foldingHighlight'] = 35)] = 'foldingHighlight'),
          (e[(e['unfoldOnClickAfterEndOfLine'] = 36)] =
            'unfoldOnClickAfterEndOfLine'),
          (e[(e['fontFamily'] = 37)] = 'fontFamily'),
          (e[(e['fontInfo'] = 38)] = 'fontInfo'),
          (e[(e['fontLigatures'] = 39)] = 'fontLigatures'),
          (e[(e['fontSize'] = 40)] = 'fontSize'),
          (e[(e['fontWeight'] = 41)] = 'fontWeight'),
          (e[(e['formatOnPaste'] = 42)] = 'formatOnPaste'),
          (e[(e['formatOnType'] = 43)] = 'formatOnType'),
          (e[(e['glyphMargin'] = 44)] = 'glyphMargin'),
          (e[(e['gotoLocation'] = 45)] = 'gotoLocation'),
          (e[(e['hideCursorInOverviewRuler'] = 46)] =
            'hideCursorInOverviewRuler'),
          (e[(e['highlightActiveIndentGuide'] = 47)] =
            'highlightActiveIndentGuide'),
          (e[(e['hover'] = 48)] = 'hover'),
          (e[(e['inDiffEditor'] = 49)] = 'inDiffEditor'),
          (e[(e['letterSpacing'] = 50)] = 'letterSpacing'),
          (e[(e['lightbulb'] = 51)] = 'lightbulb'),
          (e[(e['lineDecorationsWidth'] = 52)] = 'lineDecorationsWidth'),
          (e[(e['lineHeight'] = 53)] = 'lineHeight'),
          (e[(e['lineNumbers'] = 54)] = 'lineNumbers'),
          (e[(e['lineNumbersMinChars'] = 55)] = 'lineNumbersMinChars'),
          (e[(e['linkedEditing'] = 56)] = 'linkedEditing'),
          (e[(e['links'] = 57)] = 'links'),
          (e[(e['matchBrackets'] = 58)] = 'matchBrackets'),
          (e[(e['minimap'] = 59)] = 'minimap'),
          (e[(e['mouseStyle'] = 60)] = 'mouseStyle'),
          (e[(e['mouseWheelScrollSensitivity'] = 61)] =
            'mouseWheelScrollSensitivity'),
          (e[(e['mouseWheelZoom'] = 62)] = 'mouseWheelZoom'),
          (e[(e['multiCursorMergeOverlapping'] = 63)] =
            'multiCursorMergeOverlapping'),
          (e[(e['multiCursorModifier'] = 64)] = 'multiCursorModifier'),
          (e[(e['multiCursorPaste'] = 65)] = 'multiCursorPaste'),
          (e[(e['occurrencesHighlight'] = 66)] = 'occurrencesHighlight'),
          (e[(e['overviewRulerBorder'] = 67)] = 'overviewRulerBorder'),
          (e[(e['overviewRulerLanes'] = 68)] = 'overviewRulerLanes'),
          (e[(e['padding'] = 69)] = 'padding'),
          (e[(e['parameterHints'] = 70)] = 'parameterHints'),
          (e[(e['peekWidgetDefaultFocus'] = 71)] = 'peekWidgetDefaultFocus'),
          (e[(e['definitionLinkOpensInPeek'] = 72)] =
            'definitionLinkOpensInPeek'),
          (e[(e['quickSuggestions'] = 73)] = 'quickSuggestions'),
          (e[(e['quickSuggestionsDelay'] = 74)] = 'quickSuggestionsDelay'),
          (e[(e['readOnly'] = 75)] = 'readOnly'),
          (e[(e['renameOnType'] = 76)] = 'renameOnType'),
          (e[(e['renderControlCharacters'] = 77)] = 'renderControlCharacters'),
          (e[(e['renderIndentGuides'] = 78)] = 'renderIndentGuides'),
          (e[(e['renderFinalNewline'] = 79)] = 'renderFinalNewline'),
          (e[(e['renderLineHighlight'] = 80)] = 'renderLineHighlight'),
          (e[(e['renderLineHighlightOnlyWhenFocus'] = 81)] =
            'renderLineHighlightOnlyWhenFocus'),
          (e[(e['renderValidationDecorations'] = 82)] =
            'renderValidationDecorations'),
          (e[(e['renderWhitespace'] = 83)] = 'renderWhitespace'),
          (e[(e['revealHorizontalRightPadding'] = 84)] =
            'revealHorizontalRightPadding'),
          (e[(e['roundedSelection'] = 85)] = 'roundedSelection'),
          (e[(e['rulers'] = 86)] = 'rulers'),
          (e[(e['scrollbar'] = 87)] = 'scrollbar'),
          (e[(e['scrollBeyondLastColumn'] = 88)] = 'scrollBeyondLastColumn'),
          (e[(e['scrollBeyondLastLine'] = 89)] = 'scrollBeyondLastLine'),
          (e[(e['scrollPredominantAxis'] = 90)] = 'scrollPredominantAxis'),
          (e[(e['selectionClipboard'] = 91)] = 'selectionClipboard'),
          (e[(e['selectionHighlight'] = 92)] = 'selectionHighlight'),
          (e[(e['selectOnLineNumbers'] = 93)] = 'selectOnLineNumbers'),
          (e[(e['showFoldingControls'] = 94)] = 'showFoldingControls'),
          (e[(e['showUnused'] = 95)] = 'showUnused'),
          (e[(e['snippetSuggestions'] = 96)] = 'snippetSuggestions'),
          (e[(e['smartSelect'] = 97)] = 'smartSelect'),
          (e[(e['smoothScrolling'] = 98)] = 'smoothScrolling'),
          (e[(e['stickyTabStops'] = 99)] = 'stickyTabStops'),
          (e[(e['stopRenderingLineAfter'] = 100)] = 'stopRenderingLineAfter'),
          (e[(e['suggest'] = 101)] = 'suggest'),
          (e[(e['suggestFontSize'] = 102)] = 'suggestFontSize'),
          (e[(e['suggestLineHeight'] = 103)] = 'suggestLineHeight'),
          (e[(e['suggestOnTriggerCharacters'] = 104)] =
            'suggestOnTriggerCharacters'),
          (e[(e['suggestSelection'] = 105)] = 'suggestSelection'),
          (e[(e['tabCompletion'] = 106)] = 'tabCompletion'),
          (e[(e['tabIndex'] = 107)] = 'tabIndex'),
          (e[(e['unusualLineTerminators'] = 108)] = 'unusualLineTerminators'),
          (e[(e['useTabStops'] = 109)] = 'useTabStops'),
          (e[(e['wordSeparators'] = 110)] = 'wordSeparators'),
          (e[(e['wordWrap'] = 111)] = 'wordWrap'),
          (e[(e['wordWrapBreakAfterCharacters'] = 112)] =
            'wordWrapBreakAfterCharacters'),
          (e[(e['wordWrapBreakBeforeCharacters'] = 113)] =
            'wordWrapBreakBeforeCharacters'),
          (e[(e['wordWrapColumn'] = 114)] = 'wordWrapColumn'),
          (e[(e['wordWrapOverride1'] = 115)] = 'wordWrapOverride1'),
          (e[(e['wordWrapOverride2'] = 116)] = 'wordWrapOverride2'),
          (e[(e['wrappingIndent'] = 117)] = 'wrappingIndent'),
          (e[(e['wrappingStrategy'] = 118)] = 'wrappingStrategy'),
          (e[(e['showDeprecated'] = 119)] = 'showDeprecated'),
          (e[(e['inlineHints'] = 120)] = 'inlineHints'),
          (e[(e['editorClassName'] = 121)] = 'editorClassName'),
          (e[(e['pixelRatio'] = 122)] = 'pixelRatio'),
          (e[(e['tabFocusMode'] = 123)] = 'tabFocusMode'),
          (e[(e['layoutInfo'] = 124)] = 'layoutInfo'),
          (e[(e['wrappingInfo'] = 125)] = 'wrappingInfo');
      })(Sn || (Sn = {})),
      (function(e) {
        (e[(e['TextDefined'] = 0)] = 'TextDefined'),
          (e[(e['LF'] = 1)] = 'LF'),
          (e[(e['CRLF'] = 2)] = 'CRLF');
      })(wn || (wn = {})),
      (function(e) {
        (e[(e['LF'] = 0)] = 'LF'), (e[(e['CRLF'] = 1)] = 'CRLF');
      })(En || (En = {})),
      (function(e) {
        (e[(e['None'] = 0)] = 'None'),
          (e[(e['Indent'] = 1)] = 'Indent'),
          (e[(e['IndentOutdent'] = 2)] = 'IndentOutdent'),
          (e[(e['Outdent'] = 3)] = 'Outdent');
      })(Nn || (Nn = {})),
      (function(e) {
        (e[(e['Other'] = 0)] = 'Other'),
          (e[(e['Type'] = 1)] = 'Type'),
          (e[(e['Parameter'] = 2)] = 'Parameter');
      })(An || (An = {})),
      (function(e) {
        (e[(e['Unknown'] = 0)] = 'Unknown'),
          (e[(e['Backspace'] = 1)] = 'Backspace'),
          (e[(e['Tab'] = 2)] = 'Tab'),
          (e[(e['Enter'] = 3)] = 'Enter'),
          (e[(e['Shift'] = 4)] = 'Shift'),
          (e[(e['Ctrl'] = 5)] = 'Ctrl'),
          (e[(e['Alt'] = 6)] = 'Alt'),
          (e[(e['PauseBreak'] = 7)] = 'PauseBreak'),
          (e[(e['CapsLock'] = 8)] = 'CapsLock'),
          (e[(e['Escape'] = 9)] = 'Escape'),
          (e[(e['Space'] = 10)] = 'Space'),
          (e[(e['PageUp'] = 11)] = 'PageUp'),
          (e[(e['PageDown'] = 12)] = 'PageDown'),
          (e[(e['End'] = 13)] = 'End'),
          (e[(e['Home'] = 14)] = 'Home'),
          (e[(e['LeftArrow'] = 15)] = 'LeftArrow'),
          (e[(e['UpArrow'] = 16)] = 'UpArrow'),
          (e[(e['RightArrow'] = 17)] = 'RightArrow'),
          (e[(e['DownArrow'] = 18)] = 'DownArrow'),
          (e[(e['Insert'] = 19)] = 'Insert'),
          (e[(e['Delete'] = 20)] = 'Delete'),
          (e[(e['KEY_0'] = 21)] = 'KEY_0'),
          (e[(e['KEY_1'] = 22)] = 'KEY_1'),
          (e[(e['KEY_2'] = 23)] = 'KEY_2'),
          (e[(e['KEY_3'] = 24)] = 'KEY_3'),
          (e[(e['KEY_4'] = 25)] = 'KEY_4'),
          (e[(e['KEY_5'] = 26)] = 'KEY_5'),
          (e[(e['KEY_6'] = 27)] = 'KEY_6'),
          (e[(e['KEY_7'] = 28)] = 'KEY_7'),
          (e[(e['KEY_8'] = 29)] = 'KEY_8'),
          (e[(e['KEY_9'] = 30)] = 'KEY_9'),
          (e[(e['KEY_A'] = 31)] = 'KEY_A'),
          (e[(e['KEY_B'] = 32)] = 'KEY_B'),
          (e[(e['KEY_C'] = 33)] = 'KEY_C'),
          (e[(e['KEY_D'] = 34)] = 'KEY_D'),
          (e[(e['KEY_E'] = 35)] = 'KEY_E'),
          (e[(e['KEY_F'] = 36)] = 'KEY_F'),
          (e[(e['KEY_G'] = 37)] = 'KEY_G'),
          (e[(e['KEY_H'] = 38)] = 'KEY_H'),
          (e[(e['KEY_I'] = 39)] = 'KEY_I'),
          (e[(e['KEY_J'] = 40)] = 'KEY_J'),
          (e[(e['KEY_K'] = 41)] = 'KEY_K'),
          (e[(e['KEY_L'] = 42)] = 'KEY_L'),
          (e[(e['KEY_M'] = 43)] = 'KEY_M'),
          (e[(e['KEY_N'] = 44)] = 'KEY_N'),
          (e[(e['KEY_O'] = 45)] = 'KEY_O'),
          (e[(e['KEY_P'] = 46)] = 'KEY_P'),
          (e[(e['KEY_Q'] = 47)] = 'KEY_Q'),
          (e[(e['KEY_R'] = 48)] = 'KEY_R'),
          (e[(e['KEY_S'] = 49)] = 'KEY_S'),
          (e[(e['KEY_T'] = 50)] = 'KEY_T'),
          (e[(e['KEY_U'] = 51)] = 'KEY_U'),
          (e[(e['KEY_V'] = 52)] = 'KEY_V'),
          (e[(e['KEY_W'] = 53)] = 'KEY_W'),
          (e[(e['KEY_X'] = 54)] = 'KEY_X'),
          (e[(e['KEY_Y'] = 55)] = 'KEY_Y'),
          (e[(e['KEY_Z'] = 56)] = 'KEY_Z'),
          (e[(e['Meta'] = 57)] = 'Meta'),
          (e[(e['ContextMenu'] = 58)] = 'ContextMenu'),
          (e[(e['F1'] = 59)] = 'F1'),
          (e[(e['F2'] = 60)] = 'F2'),
          (e[(e['F3'] = 61)] = 'F3'),
          (e[(e['F4'] = 62)] = 'F4'),
          (e[(e['F5'] = 63)] = 'F5'),
          (e[(e['F6'] = 64)] = 'F6'),
          (e[(e['F7'] = 65)] = 'F7'),
          (e[(e['F8'] = 66)] = 'F8'),
          (e[(e['F9'] = 67)] = 'F9'),
          (e[(e['F10'] = 68)] = 'F10'),
          (e[(e['F11'] = 69)] = 'F11'),
          (e[(e['F12'] = 70)] = 'F12'),
          (e[(e['F13'] = 71)] = 'F13'),
          (e[(e['F14'] = 72)] = 'F14'),
          (e[(e['F15'] = 73)] = 'F15'),
          (e[(e['F16'] = 74)] = 'F16'),
          (e[(e['F17'] = 75)] = 'F17'),
          (e[(e['F18'] = 76)] = 'F18'),
          (e[(e['F19'] = 77)] = 'F19'),
          (e[(e['NumLock'] = 78)] = 'NumLock'),
          (e[(e['ScrollLock'] = 79)] = 'ScrollLock'),
          (e[(e['US_SEMICOLON'] = 80)] = 'US_SEMICOLON'),
          (e[(e['US_EQUAL'] = 81)] = 'US_EQUAL'),
          (e[(e['US_COMMA'] = 82)] = 'US_COMMA'),
          (e[(e['US_MINUS'] = 83)] = 'US_MINUS'),
          (e[(e['US_DOT'] = 84)] = 'US_DOT'),
          (e[(e['US_SLASH'] = 85)] = 'US_SLASH'),
          (e[(e['US_BACKTICK'] = 86)] = 'US_BACKTICK'),
          (e[(e['US_OPEN_SQUARE_BRACKET'] = 87)] = 'US_OPEN_SQUARE_BRACKET'),
          (e[(e['US_BACKSLASH'] = 88)] = 'US_BACKSLASH'),
          (e[(e['US_CLOSE_SQUARE_BRACKET'] = 89)] = 'US_CLOSE_SQUARE_BRACKET'),
          (e[(e['US_QUOTE'] = 90)] = 'US_QUOTE'),
          (e[(e['OEM_8'] = 91)] = 'OEM_8'),
          (e[(e['OEM_102'] = 92)] = 'OEM_102'),
          (e[(e['NUMPAD_0'] = 93)] = 'NUMPAD_0'),
          (e[(e['NUMPAD_1'] = 94)] = 'NUMPAD_1'),
          (e[(e['NUMPAD_2'] = 95)] = 'NUMPAD_2'),
          (e[(e['NUMPAD_3'] = 96)] = 'NUMPAD_3'),
          (e[(e['NUMPAD_4'] = 97)] = 'NUMPAD_4'),
          (e[(e['NUMPAD_5'] = 98)] = 'NUMPAD_5'),
          (e[(e['NUMPAD_6'] = 99)] = 'NUMPAD_6'),
          (e[(e['NUMPAD_7'] = 100)] = 'NUMPAD_7'),
          (e[(e['NUMPAD_8'] = 101)] = 'NUMPAD_8'),
          (e[(e['NUMPAD_9'] = 102)] = 'NUMPAD_9'),
          (e[(e['NUMPAD_MULTIPLY'] = 103)] = 'NUMPAD_MULTIPLY'),
          (e[(e['NUMPAD_ADD'] = 104)] = 'NUMPAD_ADD'),
          (e[(e['NUMPAD_SEPARATOR'] = 105)] = 'NUMPAD_SEPARATOR'),
          (e[(e['NUMPAD_SUBTRACT'] = 106)] = 'NUMPAD_SUBTRACT'),
          (e[(e['NUMPAD_DECIMAL'] = 107)] = 'NUMPAD_DECIMAL'),
          (e[(e['NUMPAD_DIVIDE'] = 108)] = 'NUMPAD_DIVIDE'),
          (e[(e['KEY_IN_COMPOSITION'] = 109)] = 'KEY_IN_COMPOSITION'),
          (e[(e['ABNT_C1'] = 110)] = 'ABNT_C1'),
          (e[(e['ABNT_C2'] = 111)] = 'ABNT_C2'),
          (e[(e['MAX_VALUE'] = 112)] = 'MAX_VALUE');
      })(xn || (xn = {})),
      (function(e) {
        (e[(e['Hint'] = 1)] = 'Hint'),
          (e[(e['Info'] = 2)] = 'Info'),
          (e[(e['Warning'] = 4)] = 'Warning'),
          (e[(e['Error'] = 8)] = 'Error');
      })(On || (On = {})),
      (function(e) {
        (e[(e['Unnecessary'] = 1)] = 'Unnecessary'),
          (e[(e['Deprecated'] = 2)] = 'Deprecated');
      })(Tn || (Tn = {})),
      (function(e) {
        (e[(e['Inline'] = 1)] = 'Inline'), (e[(e['Gutter'] = 2)] = 'Gutter');
      })(In || (In = {})),
      (function(e) {
        (e[(e['UNKNOWN'] = 0)] = 'UNKNOWN'),
          (e[(e['TEXTAREA'] = 1)] = 'TEXTAREA'),
          (e[(e['GUTTER_GLYPH_MARGIN'] = 2)] = 'GUTTER_GLYPH_MARGIN'),
          (e[(e['GUTTER_LINE_NUMBERS'] = 3)] = 'GUTTER_LINE_NUMBERS'),
          (e[(e['GUTTER_LINE_DECORATIONS'] = 4)] = 'GUTTER_LINE_DECORATIONS'),
          (e[(e['GUTTER_VIEW_ZONE'] = 5)] = 'GUTTER_VIEW_ZONE'),
          (e[(e['CONTENT_TEXT'] = 6)] = 'CONTENT_TEXT'),
          (e[(e['CONTENT_EMPTY'] = 7)] = 'CONTENT_EMPTY'),
          (e[(e['CONTENT_VIEW_ZONE'] = 8)] = 'CONTENT_VIEW_ZONE'),
          (e[(e['CONTENT_WIDGET'] = 9)] = 'CONTENT_WIDGET'),
          (e[(e['OVERVIEW_RULER'] = 10)] = 'OVERVIEW_RULER'),
          (e[(e['SCROLLBAR'] = 11)] = 'SCROLLBAR'),
          (e[(e['OVERLAY_WIDGET'] = 12)] = 'OVERLAY_WIDGET'),
          (e[(e['OUTSIDE_EDITOR'] = 13)] = 'OUTSIDE_EDITOR');
      })(Mn || (Mn = {})),
      (function(e) {
        (e[(e['TOP_RIGHT_CORNER'] = 0)] = 'TOP_RIGHT_CORNER'),
          (e[(e['BOTTOM_RIGHT_CORNER'] = 1)] = 'BOTTOM_RIGHT_CORNER'),
          (e[(e['TOP_CENTER'] = 2)] = 'TOP_CENTER');
      })(Pn || (Pn = {})),
      (function(e) {
        (e[(e['Left'] = 1)] = 'Left'),
          (e[(e['Center'] = 2)] = 'Center'),
          (e[(e['Right'] = 4)] = 'Right'),
          (e[(e['Full'] = 7)] = 'Full');
      })(Rn || (Rn = {})),
      (function(e) {
        (e[(e['Off'] = 0)] = 'Off'),
          (e[(e['On'] = 1)] = 'On'),
          (e[(e['Relative'] = 2)] = 'Relative'),
          (e[(e['Interval'] = 3)] = 'Interval'),
          (e[(e['Custom'] = 4)] = 'Custom');
      })(Un || (Un = {})),
      (function(e) {
        (e[(e['None'] = 0)] = 'None'),
          (e[(e['Text'] = 1)] = 'Text'),
          (e[(e['Blocks'] = 2)] = 'Blocks');
      })(Dn || (Dn = {})),
      (function(e) {
        (e[(e['Smooth'] = 0)] = 'Smooth'),
          (e[(e['Immediate'] = 1)] = 'Immediate');
      })(Fn || (Fn = {})),
      (function(e) {
        (e[(e['Auto'] = 1)] = 'Auto'),
          (e[(e['Hidden'] = 2)] = 'Hidden'),
          (e[(e['Visible'] = 3)] = 'Visible');
      })(Bn || (Bn = {})),
      (function(e) {
        (e[(e['LTR'] = 0)] = 'LTR'), (e[(e['RTL'] = 1)] = 'RTL');
      })(Kn || (Kn = {})),
      (function(e) {
        (e[(e['Invoke'] = 1)] = 'Invoke'),
          (e[(e['TriggerCharacter'] = 2)] = 'TriggerCharacter'),
          (e[(e['ContentChange'] = 3)] = 'ContentChange');
      })(Wn || (Wn = {})),
      (function(e) {
        (e[(e['File'] = 0)] = 'File'),
          (e[(e['Module'] = 1)] = 'Module'),
          (e[(e['Namespace'] = 2)] = 'Namespace'),
          (e[(e['Package'] = 3)] = 'Package'),
          (e[(e['Class'] = 4)] = 'Class'),
          (e[(e['Method'] = 5)] = 'Method'),
          (e[(e['Property'] = 6)] = 'Property'),
          (e[(e['Field'] = 7)] = 'Field'),
          (e[(e['Constructor'] = 8)] = 'Constructor'),
          (e[(e['Enum'] = 9)] = 'Enum'),
          (e[(e['Interface'] = 10)] = 'Interface'),
          (e[(e['Function'] = 11)] = 'Function'),
          (e[(e['Variable'] = 12)] = 'Variable'),
          (e[(e['Constant'] = 13)] = 'Constant'),
          (e[(e['String'] = 14)] = 'String'),
          (e[(e['Number'] = 15)] = 'Number'),
          (e[(e['Boolean'] = 16)] = 'Boolean'),
          (e[(e['Array'] = 17)] = 'Array'),
          (e[(e['Object'] = 18)] = 'Object'),
          (e[(e['Key'] = 19)] = 'Key'),
          (e[(e['Null'] = 20)] = 'Null'),
          (e[(e['EnumMember'] = 21)] = 'EnumMember'),
          (e[(e['Struct'] = 22)] = 'Struct'),
          (e[(e['Event'] = 23)] = 'Event'),
          (e[(e['Operator'] = 24)] = 'Operator'),
          (e[(e['TypeParameter'] = 25)] = 'TypeParameter');
      })(qn || (qn = {})),
      (function(e) {
        e[(e['Deprecated'] = 1)] = 'Deprecated';
      })(Hn || (Hn = {})),
      (function(e) {
        (e[(e['Hidden'] = 0)] = 'Hidden'),
          (e[(e['Blink'] = 1)] = 'Blink'),
          (e[(e['Smooth'] = 2)] = 'Smooth'),
          (e[(e['Phase'] = 3)] = 'Phase'),
          (e[(e['Expand'] = 4)] = 'Expand'),
          (e[(e['Solid'] = 5)] = 'Solid');
      })(Vn || (Vn = {})),
      (function(e) {
        (e[(e['Line'] = 1)] = 'Line'),
          (e[(e['Block'] = 2)] = 'Block'),
          (e[(e['Underline'] = 3)] = 'Underline'),
          (e[(e['LineThin'] = 4)] = 'LineThin'),
          (e[(e['BlockOutline'] = 5)] = 'BlockOutline'),
          (e[(e['UnderlineThin'] = 6)] = 'UnderlineThin');
      })(jn || (jn = {})),
      (function(e) {
        (e[(e['AlwaysGrowsWhenTypingAtEdges'] = 0)] =
          'AlwaysGrowsWhenTypingAtEdges'),
          (e[(e['NeverGrowsWhenTypingAtEdges'] = 1)] =
            'NeverGrowsWhenTypingAtEdges'),
          (e[(e['GrowsOnlyWhenTypingBefore'] = 2)] =
            'GrowsOnlyWhenTypingBefore'),
          (e[(e['GrowsOnlyWhenTypingAfter'] = 3)] = 'GrowsOnlyWhenTypingAfter');
      })(Yn || (Yn = {})),
      (function(e) {
        (e[(e['None'] = 0)] = 'None'),
          (e[(e['Same'] = 1)] = 'Same'),
          (e[(e['Indent'] = 2)] = 'Indent'),
          (e[(e['DeepIndent'] = 3)] = 'DeepIndent');
      })(Gn || (Gn = {}));
    var Xn = (function() {
      function e() {
        h(this, e);
      }
      return (
        d(e, null, [
          {
            key: 'chord',
            value: function(e, t) {
              return dn(e, t);
            },
          },
        ]),
        e
      );
    })();
    function Zn() {
      return {
        editor: void 0,
        languages: void 0,
        CancellationTokenSource: un,
        Emitter: nn,
        KeyCode: xn,
        KeyMod: Xn,
        Position: dt,
        Range: mt,
        Selection: zn,
        SelectionDirection: Kn,
        MarkerSeverity: On,
        MarkerTag: Tn,
        Uri: nt,
        Token: Qn,
      };
    }
    (Xn.CtrlCmd = 2048), (Xn.Shift = 1024), (Xn.Alt = 512), (Xn.WinCtrl = 256);
    var Jn = function(e, t, n, r) {
        function i(e) {
          return e instanceof n
            ? e
            : new n(function(t) {
                t(e);
              });
        }
        return new (n || (n = Promise))(function(n, o) {
          function a(e) {
            try {
              u(r.next(e));
            } catch (t) {
              o(t);
            }
          }
          function s(e) {
            try {
              u(r['throw'](e));
            } catch (t) {
              o(t);
            }
          }
          function u(e) {
            e.done ? n(e.value) : i(e.value).then(a, s);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      $n = (function(e) {
        i(n, e);
        var t = c(n);
        function n() {
          return h(this, n), t.apply(this, arguments);
        }
        return (
          d(n, [
            {
              key: 'uri',
              get: function() {
                return this._uri;
              },
            },
            {
              key: 'version',
              get: function() {
                return this._versionId;
              },
            },
            {
              key: 'eol',
              get: function() {
                return this._eol;
              },
            },
            {
              key: 'getValue',
              value: function() {
                return this.getText();
              },
            },
            {
              key: 'getLinesContent',
              value: function() {
                return this._lines.slice(0);
              },
            },
            {
              key: 'getLineCount',
              value: function() {
                return this._lines.length;
              },
            },
            {
              key: 'getLineContent',
              value: function(e) {
                return this._lines[e - 1];
              },
            },
            {
              key: 'getWordAtPosition',
              value: function(e, t) {
                var n = Ut(e.column, Pt(t), this._lines[e.lineNumber - 1], 0);
                return n
                  ? new mt(
                      e.lineNumber,
                      n.startColumn,
                      e.lineNumber,
                      n.endColumn,
                    )
                  : null;
              },
            },
            {
              key: 'words',
              value: function(e) {
                var t = this._lines,
                  n = this._wordenize.bind(this),
                  r = 0,
                  i = '',
                  o = 0,
                  a = [];
                return E(
                  {},
                  Symbol.iterator,
                  x.a.mark(function s() {
                    var u;
                    return x.a.wrap(function(s) {
                      while (1)
                        switch ((s.prev = s.next)) {
                          case 0:
                            if (!(o < a.length)) {
                              s.next = 8;
                              break;
                            }
                            return (
                              (u = i.substring(a[o].start, a[o].end)),
                              (o += 1),
                              (s.next = 6),
                              u
                            );
                          case 6:
                            s.next = 16;
                            break;
                          case 8:
                            if (!(r < t.length)) {
                              s.next = 15;
                              break;
                            }
                            (i = t[r]),
                              (a = n(i, e)),
                              (o = 0),
                              (r += 1),
                              (s.next = 16);
                            break;
                          case 15:
                            return s.abrupt('break', 18);
                          case 16:
                            s.next = 0;
                            break;
                          case 18:
                          case 'end':
                            return s.stop();
                        }
                    }, s);
                  }),
                );
              },
            },
            {
              key: 'getLineWords',
              value: function(e, t) {
                var n,
                  r = this._lines[e - 1],
                  i = this._wordenize(r, t),
                  o = [],
                  a = k(i);
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var s = n.value;
                    o.push({
                      word: r.substring(s.start, s.end),
                      startColumn: s.start + 1,
                      endColumn: s.end + 1,
                    });
                  }
                } catch (u) {
                  a.e(u);
                } finally {
                  a.f();
                }
                return o;
              },
            },
            {
              key: '_wordenize',
              value: function(e, t) {
                var n,
                  r = [];
                t.lastIndex = 0;
                while ((n = t.exec(e))) {
                  if (0 === n[0].length) break;
                  r.push({ start: n.index, end: n.index + n[0].length });
                }
                return r;
              },
            },
            {
              key: 'getValueInRange',
              value: function(e) {
                if (
                  ((e = this._validateRange(e)),
                  e.startLineNumber === e.endLineNumber)
                )
                  return this._lines[e.startLineNumber - 1].substring(
                    e.startColumn - 1,
                    e.endColumn - 1,
                  );
                var t = this._eol,
                  n = e.startLineNumber - 1,
                  r = e.endLineNumber - 1,
                  i = [];
                i.push(this._lines[n].substring(e.startColumn - 1));
                for (var o = n + 1; o < r; o++) i.push(this._lines[o]);
                return (
                  i.push(this._lines[r].substring(0, e.endColumn - 1)),
                  i.join(t)
                );
              },
            },
            {
              key: 'offsetAt',
              value: function(e) {
                return (
                  (e = this._validatePosition(e)),
                  this._ensureLineStarts(),
                  this._lineStarts.getAccumulatedValue(e.lineNumber - 2) +
                    (e.column - 1)
                );
              },
            },
            {
              key: 'positionAt',
              value: function(e) {
                (e = Math.floor(e)),
                  (e = Math.max(0, e)),
                  this._ensureLineStarts();
                var t = this._lineStarts.getIndexOf(e),
                  n = this._lines[t.index].length;
                return {
                  lineNumber: 1 + t.index,
                  column: 1 + Math.min(t.remainder, n),
                };
              },
            },
            {
              key: '_validateRange',
              value: function(e) {
                var t = this._validatePosition({
                    lineNumber: e.startLineNumber,
                    column: e.startColumn,
                  }),
                  n = this._validatePosition({
                    lineNumber: e.endLineNumber,
                    column: e.endColumn,
                  });
                return t.lineNumber !== e.startLineNumber ||
                  t.column !== e.startColumn ||
                  n.lineNumber !== e.endLineNumber ||
                  n.column !== e.endColumn
                  ? {
                      startLineNumber: t.lineNumber,
                      startColumn: t.column,
                      endLineNumber: n.lineNumber,
                      endColumn: n.column,
                    }
                  : e;
              },
            },
            {
              key: '_validatePosition',
              value: function(e) {
                if (!dt.isIPosition(e)) throw new Error('bad position');
                var t = e.lineNumber,
                  n = e.column,
                  r = !1;
                if (t < 1) (t = 1), (n = 1), (r = !0);
                else if (t > this._lines.length)
                  (t = this._lines.length),
                    (n = this._lines[t - 1].length + 1),
                    (r = !0);
                else {
                  var i = this._lines[t - 1].length + 1;
                  n < 1 ? ((n = 1), (r = !0)) : n > i && ((n = i), (r = !0));
                }
                return r ? { lineNumber: t, column: n } : e;
              },
            },
          ]),
          n
        );
      })(Ot),
      er = (function() {
        function e(t, n) {
          h(this, e),
            (this._host = t),
            (this._models = Object.create(null)),
            (this._foreignModuleFactory = n),
            (this._foreignModule = null);
        }
        return (
          d(e, [
            {
              key: 'dispose',
              value: function() {
                this._models = Object.create(null);
              },
            },
            {
              key: '_getModel',
              value: function(e) {
                return this._models[e];
              },
            },
            {
              key: '_getModels',
              value: function() {
                var e = this,
                  t = [];
                return (
                  Object.keys(this._models).forEach(function(n) {
                    return t.push(e._models[n]);
                  }),
                  t
                );
              },
            },
            {
              key: 'acceptNewModel',
              value: function(e) {
                this._models[e.url] = new $n(
                  nt.parse(e.url),
                  e.lines,
                  e.EOL,
                  e.versionId,
                );
              },
            },
            {
              key: 'acceptModelChanged',
              value: function(e, t) {
                if (this._models[e]) {
                  var n = this._models[e];
                  n.onEvents(t);
                }
              },
            },
            {
              key: 'acceptRemovedModel',
              value: function(e) {
                this._models[e] && delete this._models[e];
              },
            },
            {
              key: 'computeDiff',
              value: function(e, t, n, r) {
                return Jn(
                  this,
                  void 0,
                  void 0,
                  x.a.mark(function i() {
                    var o, a, s, u, l, c, h;
                    return x.a.wrap(
                      function(i) {
                        while (1)
                          switch ((i.prev = i.next)) {
                            case 0:
                              if (
                                ((o = this._getModel(e)),
                                (a = this._getModel(t)),
                                o && a)
                              ) {
                                i.next = 4;
                                break;
                              }
                              return i.abrupt('return', null);
                            case 4:
                              return (
                                (s = o.getLinesContent()),
                                (u = a.getLinesContent()),
                                (l = new kt(s, u, {
                                  shouldComputeCharChanges: !0,
                                  shouldPostProcessCharChanges: !0,
                                  shouldIgnoreTrimWhitespace: n,
                                  shouldMakePrettyDiff: !0,
                                  maxComputationTime: r,
                                })),
                                (c = l.computeDiff()),
                                (h =
                                  !(c.changes.length > 0) &&
                                  this._modelsAreIdentical(o, a)),
                                i.abrupt('return', {
                                  quitEarly: c.quitEarly,
                                  identical: h,
                                  changes: c.changes,
                                })
                              );
                            case 10:
                            case 'end':
                              return i.stop();
                          }
                      },
                      i,
                      this,
                    );
                  }),
                );
              },
            },
            {
              key: '_modelsAreIdentical',
              value: function(e, t) {
                var n = e.getLineCount(),
                  r = t.getLineCount();
                if (n !== r) return !1;
                for (var i = 1; i <= n; i++) {
                  var o = e.getLineContent(i),
                    a = t.getLineContent(i);
                  if (o !== a) return !1;
                }
                return !0;
              },
            },
            {
              key: 'computeMoreMinimalEdits',
              value: function(t, n) {
                return Jn(
                  this,
                  void 0,
                  void 0,
                  x.a.mark(function r() {
                    var i, o, a, s, u, l, c, h, f, d, m, g, v, p, _, y, b, C;
                    return x.a.wrap(
                      function(r) {
                        while (1)
                          switch ((r.prev = r.next)) {
                            case 0:
                              if (((i = this._getModel(t)), i)) {
                                r.next = 3;
                                break;
                              }
                              return r.abrupt('return', n);
                            case 3:
                              (o = []),
                                (a = void 0),
                                (n = J(n, function(e, t) {
                                  if (e.range && t.range)
                                    return mt.compareRangesUsingStarts(
                                      e.range,
                                      t.range,
                                    );
                                  var n = e.range ? 0 : 1,
                                    r = t.range ? 0 : 1;
                                  return n - r;
                                })),
                                (s = k(n)),
                                (r.prev = 7),
                                s.s();
                            case 9:
                              if ((u = s.n()).done) {
                                r.next = 30;
                                break;
                              }
                              if (
                                ((l = u.value),
                                (c = l.range),
                                (h = l.text),
                                (f = l.eol),
                                'number' === typeof f && (a = f),
                                !mt.isEmpty(c) || h)
                              ) {
                                r.next = 17;
                                break;
                              }
                              return r.abrupt('continue', 28);
                            case 17:
                              if (
                                ((d = i.getValueInRange(c)),
                                (h = h.replace(/\r\n|\n|\r/g, i.eol)),
                                d !== h)
                              ) {
                                r.next = 21;
                                break;
                              }
                              return r.abrupt('continue', 28);
                            case 21:
                              if (
                                !(Math.max(h.length, d.length) > e._diffLimit)
                              ) {
                                r.next = 24;
                                break;
                              }
                              return (
                                o.push({ range: c, text: h }),
                                r.abrupt('continue', 28)
                              );
                            case 24:
                              (m = ke(d, h, !1)),
                                (g = i.offsetAt(mt.lift(c).getStartPosition())),
                                (v = k(m));
                              try {
                                for (v.s(); !(p = v.n()).done; )
                                  (_ = p.value),
                                    (y = i.positionAt(g + _.originalStart)),
                                    (b = i.positionAt(
                                      g + _.originalStart + _.originalLength,
                                    )),
                                    (C = {
                                      text: h.substr(
                                        _.modifiedStart,
                                        _.modifiedLength,
                                      ),
                                      range: {
                                        startLineNumber: y.lineNumber,
                                        startColumn: y.column,
                                        endLineNumber: b.lineNumber,
                                        endColumn: b.column,
                                      },
                                    }),
                                    i.getValueInRange(C.range) !== C.text &&
                                      o.push(C);
                              } catch (L) {
                                v.e(L);
                              } finally {
                                v.f();
                              }
                            case 28:
                              r.next = 9;
                              break;
                            case 30:
                              r.next = 35;
                              break;
                            case 32:
                              (r.prev = 32), (r.t0 = r['catch'](7)), s.e(r.t0);
                            case 35:
                              return (r.prev = 35), s.f(), r.finish(35);
                            case 38:
                              return (
                                'number' === typeof a &&
                                  o.push({
                                    eol: a,
                                    text: '',
                                    range: {
                                      startLineNumber: 0,
                                      startColumn: 0,
                                      endLineNumber: 0,
                                      endColumn: 0,
                                    },
                                  }),
                                r.abrupt('return', o)
                              );
                            case 40:
                            case 'end':
                              return r.stop();
                          }
                      },
                      r,
                      this,
                      [[7, 32, 35, 38]],
                    );
                  }),
                );
              },
            },
            {
              key: 'computeLinks',
              value: function(e) {
                return Jn(
                  this,
                  void 0,
                  void 0,
                  x.a.mark(function t() {
                    var n;
                    return x.a.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (((n = this._getModel(e)), n)) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt('return', null);
                            case 3:
                              return t.abrupt('return', Yt(n));
                            case 4:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this,
                    );
                  }),
                );
              },
            },
            {
              key: 'textualSuggest',
              value: function(t, n, r, i) {
                return Jn(
                  this,
                  void 0,
                  void 0,
                  x.a.mark(function o() {
                    var a, s, u, l, c, h, f, d, m, g;
                    return x.a.wrap(
                      function(o) {
                        while (1)
                          switch ((o.prev = o.next)) {
                            case 0:
                              (a = new Jt(!0)),
                                (s = new RegExp(r, i)),
                                (u = new Set()),
                                (l = k(t)),
                                (o.prev = 4),
                                l.s();
                            case 6:
                              if ((c = l.n()).done) {
                                o.next = 33;
                                break;
                              }
                              if (((h = c.value), (f = this._getModel(h)), f)) {
                                o.next = 11;
                                break;
                              }
                              return o.abrupt('continue', 31);
                            case 11:
                              (d = k(f.words(s))), (o.prev = 12), d.s();
                            case 14:
                              if ((m = d.n()).done) {
                                o.next = 23;
                                break;
                              }
                              if (
                                ((g = m.value), g !== n && isNaN(Number(g)))
                              ) {
                                o.next = 18;
                                break;
                              }
                              return o.abrupt('continue', 21);
                            case 18:
                              if ((u.add(g), !(u.size > e._suggestionsLimit))) {
                                o.next = 21;
                                break;
                              }
                              return o.abrupt('break', 33);
                            case 21:
                              o.next = 14;
                              break;
                            case 23:
                              o.next = 28;
                              break;
                            case 25:
                              (o.prev = 25), (o.t0 = o['catch'](12)), d.e(o.t0);
                            case 28:
                              return (o.prev = 28), d.f(), o.finish(28);
                            case 31:
                              o.next = 6;
                              break;
                            case 33:
                              o.next = 38;
                              break;
                            case 35:
                              (o.prev = 35), (o.t1 = o['catch'](4)), l.e(o.t1);
                            case 38:
                              return (o.prev = 38), l.f(), o.finish(38);
                            case 41:
                              return o.abrupt('return', {
                                words: Array.from(u),
                                duration: a.elapsed(),
                              });
                            case 42:
                            case 'end':
                              return o.stop();
                          }
                      },
                      o,
                      this,
                      [
                        [4, 35, 38, 41],
                        [12, 25, 28, 31],
                      ],
                    );
                  }),
                );
              },
            },
            {
              key: 'computeWordRanges',
              value: function(e, t, n, r) {
                return Jn(
                  this,
                  void 0,
                  void 0,
                  x.a.mark(function i() {
                    var o, a, s, u, l, c, h, f, d;
                    return x.a.wrap(
                      function(i) {
                        while (1)
                          switch ((i.prev = i.next)) {
                            case 0:
                              if (((o = this._getModel(e)), o)) {
                                i.next = 3;
                                break;
                              }
                              return i.abrupt('return', Object.create(null));
                            case 3:
                              (a = new RegExp(n, r)),
                                (s = Object.create(null)),
                                (u = t.startLineNumber);
                            case 6:
                              if (!(u < t.endLineNumber)) {
                                i.next = 31;
                                break;
                              }
                              (l = o.getLineWords(u, a)),
                                (c = k(l)),
                                (i.prev = 9),
                                c.s();
                            case 11:
                              if ((h = c.n()).done) {
                                i.next = 20;
                                break;
                              }
                              if (((f = h.value), isNaN(Number(f.word)))) {
                                i.next = 15;
                                break;
                              }
                              return i.abrupt('continue', 18);
                            case 15:
                              (d = s[f.word]),
                                d || ((d = []), (s[f.word] = d)),
                                d.push({
                                  startLineNumber: u,
                                  startColumn: f.startColumn,
                                  endLineNumber: u,
                                  endColumn: f.endColumn,
                                });
                            case 18:
                              i.next = 11;
                              break;
                            case 20:
                              i.next = 25;
                              break;
                            case 22:
                              (i.prev = 22), (i.t0 = i['catch'](9)), c.e(i.t0);
                            case 25:
                              return (i.prev = 25), c.f(), i.finish(25);
                            case 28:
                              u++, (i.next = 6);
                              break;
                            case 31:
                              return i.abrupt('return', s);
                            case 32:
                            case 'end':
                              return i.stop();
                          }
                      },
                      i,
                      this,
                      [[9, 22, 25, 28]],
                    );
                  }),
                );
              },
            },
            {
              key: 'navigateValueSet',
              value: function(e, t, n, r, i) {
                return Jn(
                  this,
                  void 0,
                  void 0,
                  x.a.mark(function o() {
                    var a, s, u, l, c, h;
                    return x.a.wrap(
                      function(o) {
                        while (1)
                          switch ((o.prev = o.next)) {
                            case 0:
                              if (((a = this._getModel(e)), a)) {
                                o.next = 3;
                                break;
                              }
                              return o.abrupt('return', null);
                            case 3:
                              if (
                                ((s = new RegExp(r, i)),
                                t.startColumn === t.endColumn &&
                                  (t = {
                                    startLineNumber: t.startLineNumber,
                                    startColumn: t.startColumn,
                                    endLineNumber: t.endLineNumber,
                                    endColumn: t.endColumn + 1,
                                  }),
                                (u = a.getValueInRange(t)),
                                (l = a.getWordAtPosition(
                                  {
                                    lineNumber: t.startLineNumber,
                                    column: t.startColumn,
                                  },
                                  s,
                                )),
                                l)
                              ) {
                                o.next = 9;
                                break;
                              }
                              return o.abrupt('return', null);
                            case 9:
                              return (
                                (c = a.getValueInRange(l)),
                                (h = Gt.INSTANCE.navigateValueSet(
                                  t,
                                  u,
                                  l,
                                  c,
                                  n,
                                )),
                                o.abrupt('return', h)
                              );
                            case 12:
                            case 'end':
                              return o.stop();
                          }
                      },
                      o,
                      this,
                    );
                  }),
                );
              },
            },
            {
              key: 'loadForeignModule',
              value: function(e, t, n) {
                var r = this,
                  i = function(e, t) {
                    return r._host.fhr(e, t);
                  },
                  o = V(n, i),
                  a = {
                    host: o,
                    getMirrorModels: function() {
                      return r._getModels();
                    },
                  };
                return this._foreignModuleFactory
                  ? ((this._foreignModule = this._foreignModuleFactory(a, t)),
                    Promise.resolve(H(this._foreignModule)))
                  : Promise.reject(new Error('Unexpected usage'));
              },
            },
            {
              key: 'fmr',
              value: function(e, t) {
                if (
                  !this._foreignModule ||
                  'function' !== typeof this._foreignModule[e]
                )
                  return Promise.reject(
                    new Error('Missing requestHandler or method: ' + e),
                  );
                try {
                  return Promise.resolve(
                    this._foreignModule[e].apply(this._foreignModule, t),
                  );
                } catch (n) {
                  return Promise.reject(n);
                }
              },
            },
          ]),
          e
        );
      })();
    (er._diffLimit = 1e5),
      (er._suggestionsLimit = 1e4),
      'function' === typeof importScripts && (W['a'].monaco = Zn());
    var tr = !1;
    function nr(e) {
      if (!tr) {
        tr = !0;
        var t = new G(
          function(e) {
            self.postMessage(e);
          },
          function(t) {
            return new er(t, e);
          },
        );
        self.onmessage = function(e) {
          t.onmessage(e.data);
        };
      }
    }
    self.onmessage = function(e) {
      tr || nr(null);
    };
  },
  MNsG: function(e, t, n) {
    'use strict';
    (function(e, r) {
      var i;
      n.d(t, 'd', function() {
        return y;
      }),
        n.d(t, 'b', function() {
          return b;
        }),
        n.d(t, 'c', function() {
          return C;
        }),
        n.d(t, 'a', function() {
          return k;
        }),
        n.d(t, 'e', function() {
          return L;
        });
      var o = 'en',
        a = !1,
        s = !1,
        u = !1,
        l = !1,
        c = void 0,
        h = void 0,
        f = 'object' === typeof self ? self : 'object' === typeof e ? e : {},
        d = void 0;
      'undefined' !== typeof r
        ? (d = r)
        : 'undefined' !== typeof f.vscode && (d = f.vscode.process);
      var m =
          'string' ===
            typeof (null ===
              (i = null === d || void 0 === d ? void 0 : d.versions) ||
            void 0 === i
              ? void 0
              : i.electron) && 'renderer' === d.type,
        g = m && (null === d || void 0 === d ? void 0 : d.sandboxed);
      (function() {
        if (g) return 'bypassHeatCheck';
        var e =
          null === d || void 0 === d
            ? void 0
            : d.env['ENABLE_VSCODE_BROWSER_CODE_LOADING'];
      })();
      if ('object' !== typeof navigator || m)
        if ('object' === typeof d) {
          (a = 'win32' === d.platform),
            (s = 'darwin' === d.platform),
            (u = 'linux' === d.platform),
            u && !!d.env['SNAP'] && !!d.env['SNAP_REVISION'],
            (c = o),
            o;
          var v = d.env['VSCODE_NLS_CONFIG'];
          if (v)
            try {
              var p = JSON.parse(v),
                _ = p.availableLanguages['*'];
              (c = p.locale), _ || o, p._translationsConfigFile;
            } catch (S) {}
          !0;
        } else console.error('Unable to resolve platform.');
      else
        (h = navigator.userAgent),
          (a = h.indexOf('Windows') >= 0),
          (s = h.indexOf('Macintosh') >= 0),
          (h.indexOf('Macintosh') >= 0 ||
            h.indexOf('iPad') >= 0 ||
            h.indexOf('iPhone') >= 0) &&
            !!navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 0,
          (u = h.indexOf('Linux') >= 0),
          (l = !0),
          (c = navigator.language),
          c;
      var y = a,
        b = s,
        C = l,
        k = f,
        L = (function() {
          if (k.setImmediate) return k.setImmediate.bind(k);
          if ('function' === typeof k.postMessage && !k.importScripts) {
            var e = [];
            k.addEventListener('message', function(t) {
              if (t.data && t.data.vscodeSetImmediateId)
                for (var n = 0, r = e.length; n < r; n++) {
                  var i = e[n];
                  if (i.id === t.data.vscodeSetImmediateId)
                    return e.splice(n, 1), void i.callback();
                }
            });
            var t = 0;
            return function(n) {
              var r = ++t;
              e.push({ id: r, callback: n }),
                k.postMessage({ vscodeSetImmediateId: r }, '*');
            };
          }
          if (d && 'function' === typeof d.nextTick) return d.nextTick.bind(d);
          var n = Promise.resolve();
          return function(e) {
            return n.then(e);
          };
        })();
    }.call(this, n('yLpj'), n('Q2Ig')));
  },
  Q2Ig: function(e, t, n) {
    (t.nextTick = function(e) {
      var t = Array.prototype.slice.call(arguments);
      t.shift(),
        setTimeout(function() {
          e.apply(null, t);
        }, 0);
    }),
      (t.platform = t.arch = t.execPath = t.title = 'browser'),
      (t.pid = 1),
      (t.browser = !0),
      (t.env = {}),
      (t.argv = []),
      (t.binding = function(e) {
        throw new Error('No such module. (Possibly not yet loaded)');
      }),
      (function() {
        var e,
          r = '/';
        (t.cwd = function() {
          return r;
        }),
          (t.chdir = function(t) {
            e || (e = n('33yf')), (r = e.resolve(t, r));
          });
      })(),
      (t.exit = t.kill = t.umask = t.dlopen = t.uptime = t.memoryUsage = t.uvCounters = function() {}),
      (t.features = {});
  },
  VWci: function(e, t, n) {
    var r = (function(e) {
      'use strict';
      var t,
        n = Object.prototype,
        r = n.hasOwnProperty,
        i = 'function' === typeof Symbol ? Symbol : {},
        o = i.iterator || '@@iterator',
        a = i.asyncIterator || '@@asyncIterator',
        s = i.toStringTag || '@@toStringTag';
      function u(e, t, n, r) {
        var i = t && t.prototype instanceof g ? t : g,
          o = Object.create(i.prototype),
          a = new A(r || []);
        return (o._invoke = S(e, n, a)), o;
      }
      function l(e, t, n) {
        try {
          return { type: 'normal', arg: e.call(t, n) };
        } catch (r) {
          return { type: 'throw', arg: r };
        }
      }
      e.wrap = u;
      var c = 'suspendedStart',
        h = 'suspendedYield',
        f = 'executing',
        d = 'completed',
        m = {};
      function g() {}
      function v() {}
      function p() {}
      var _ = {};
      _[o] = function() {
        return this;
      };
      var y = Object.getPrototypeOf,
        b = y && y(y(x([])));
      b && b !== n && r.call(b, o) && (_ = b);
      var C = (p.prototype = g.prototype = Object.create(_));
      function k(e) {
        ['next', 'throw', 'return'].forEach(function(t) {
          e[t] = function(e) {
            return this._invoke(t, e);
          };
        });
      }
      function L(e, t) {
        function n(i, o, a, s) {
          var u = l(e[i], e, o);
          if ('throw' !== u.type) {
            var c = u.arg,
              h = c.value;
            return h && 'object' === typeof h && r.call(h, '__await')
              ? t.resolve(h.__await).then(
                  function(e) {
                    n('next', e, a, s);
                  },
                  function(e) {
                    n('throw', e, a, s);
                  },
                )
              : t.resolve(h).then(
                  function(e) {
                    (c.value = e), a(c);
                  },
                  function(e) {
                    return n('throw', e, a, s);
                  },
                );
          }
          s(u.arg);
        }
        var i;
        function o(e, r) {
          function o() {
            return new t(function(t, i) {
              n(e, r, t, i);
            });
          }
          return (i = i ? i.then(o, o) : o());
        }
        this._invoke = o;
      }
      function S(e, t, n) {
        var r = c;
        return function(i, o) {
          if (r === f) throw new Error('Generator is already running');
          if (r === d) {
            if ('throw' === i) throw o;
            return O();
          }
          (n.method = i), (n.arg = o);
          while (1) {
            var a = n.delegate;
            if (a) {
              var s = w(a, n);
              if (s) {
                if (s === m) continue;
                return s;
              }
            }
            if ('next' === n.method) n.sent = n._sent = n.arg;
            else if ('throw' === n.method) {
              if (r === c) throw ((r = d), n.arg);
              n.dispatchException(n.arg);
            } else 'return' === n.method && n.abrupt('return', n.arg);
            r = f;
            var u = l(e, t, n);
            if ('normal' === u.type) {
              if (((r = n.done ? d : h), u.arg === m)) continue;
              return { value: u.arg, done: n.done };
            }
            'throw' === u.type &&
              ((r = d), (n.method = 'throw'), (n.arg = u.arg));
          }
        };
      }
      function w(e, n) {
        var r = e.iterator[n.method];
        if (r === t) {
          if (((n.delegate = null), 'throw' === n.method)) {
            if (
              e.iterator['return'] &&
              ((n.method = 'return'),
              (n.arg = t),
              w(e, n),
              'throw' === n.method)
            )
              return m;
            (n.method = 'throw'),
              (n.arg = new TypeError(
                "The iterator does not provide a 'throw' method",
              ));
          }
          return m;
        }
        var i = l(r, e.iterator, n.arg);
        if ('throw' === i.type)
          return (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), m;
        var o = i.arg;
        return o
          ? o.done
            ? ((n[e.resultName] = o.value),
              (n.next = e.nextLoc),
              'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
              (n.delegate = null),
              m)
            : o
          : ((n.method = 'throw'),
            (n.arg = new TypeError('iterator result is not an object')),
            (n.delegate = null),
            m);
      }
      function E(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function N(e) {
        var t = e.completion || {};
        (t.type = 'normal'), delete t.arg, (e.completion = t);
      }
      function A(e) {
        (this.tryEntries = [{ tryLoc: 'root' }]),
          e.forEach(E, this),
          this.reset(!0);
      }
      function x(e) {
        if (e) {
          var n = e[o];
          if (n) return n.call(e);
          if ('function' === typeof e.next) return e;
          if (!isNaN(e.length)) {
            var i = -1,
              a = function n() {
                while (++i < e.length)
                  if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                return (n.value = t), (n.done = !0), n;
              };
            return (a.next = a);
          }
        }
        return { next: O };
      }
      function O() {
        return { value: t, done: !0 };
      }
      return (
        (v.prototype = C.constructor = p),
        (p.constructor = v),
        (p[s] = v.displayName = 'GeneratorFunction'),
        (e.isGeneratorFunction = function(e) {
          var t = 'function' === typeof e && e.constructor;
          return (
            !!t &&
            (t === v || 'GeneratorFunction' === (t.displayName || t.name))
          );
        }),
        (e.mark = function(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, p)
              : ((e.__proto__ = p), s in e || (e[s] = 'GeneratorFunction')),
            (e.prototype = Object.create(C)),
            e
          );
        }),
        (e.awrap = function(e) {
          return { __await: e };
        }),
        k(L.prototype),
        (L.prototype[a] = function() {
          return this;
        }),
        (e.AsyncIterator = L),
        (e.async = function(t, n, r, i, o) {
          void 0 === o && (o = Promise);
          var a = new L(u(t, n, r, i), o);
          return e.isGeneratorFunction(n)
            ? a
            : a.next().then(function(e) {
                return e.done ? e.value : a.next();
              });
        }),
        k(C),
        (C[s] = 'Generator'),
        (C[o] = function() {
          return this;
        }),
        (C.toString = function() {
          return '[object Generator]';
        }),
        (e.keys = function(e) {
          var t = [];
          for (var n in e) t.push(n);
          return (
            t.reverse(),
            function n() {
              while (t.length) {
                var r = t.pop();
                if (r in e) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (e.values = x),
        (A.prototype = {
          constructor: A,
          reset: function(e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = t),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = t),
              this.tryEntries.forEach(N),
              !e)
            )
              for (var n in this)
                't' === n.charAt(0) &&
                  r.call(this, n) &&
                  !isNaN(+n.slice(1)) &&
                  (this[n] = t);
          },
          stop: function() {
            this.done = !0;
            var e = this.tryEntries[0],
              t = e.completion;
            if ('throw' === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function(e) {
            if (this.done) throw e;
            var n = this;
            function i(r, i) {
              return (
                (s.type = 'throw'),
                (s.arg = e),
                (n.next = r),
                i && ((n.method = 'next'), (n.arg = t)),
                !!i
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var a = this.tryEntries[o],
                s = a.completion;
              if ('root' === a.tryLoc) return i('end');
              if (a.tryLoc <= this.prev) {
                var u = r.call(a, 'catchLoc'),
                  l = r.call(a, 'finallyLoc');
                if (u && l) {
                  if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                } else if (u) {
                  if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                } else {
                  if (!l)
                    throw new Error('try statement without catch or finally');
                  if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function(e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var i = this.tryEntries[n];
              if (
                i.tryLoc <= this.prev &&
                r.call(i, 'finallyLoc') &&
                this.prev < i.finallyLoc
              ) {
                var o = i;
                break;
              }
            }
            o &&
              ('break' === e || 'continue' === e) &&
              o.tryLoc <= t &&
              t <= o.finallyLoc &&
              (o = null);
            var a = o ? o.completion : {};
            return (
              (a.type = e),
              (a.arg = t),
              o
                ? ((this.method = 'next'), (this.next = o.finallyLoc), m)
                : this.complete(a)
            );
          },
          complete: function(e, t) {
            if ('throw' === e.type) throw e.arg;
            return (
              'break' === e.type || 'continue' === e.type
                ? (this.next = e.arg)
                : 'return' === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = 'return'),
                  (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
              m
            );
          },
          finish: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), N(n), m;
            }
          },
          catch: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ('throw' === r.type) {
                  var i = r.arg;
                  N(n);
                }
                return i;
              }
            }
            throw new Error('illegal catch attempt');
          },
          delegateYield: function(e, n, r) {
            return (
              (this.delegate = { iterator: x(e), resultName: n, nextLoc: r }),
              'next' === this.method && (this.arg = t),
              m
            );
          },
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = r;
    } catch (i) {
      Function('r', 'regeneratorRuntime = r')(r);
    }
  },
  WmNS: function(e, t, n) {
    e.exports = n('VWci');
  },
  wxcJ: function(e, t, n) {
    'use strict';
    (function(e) {
      n.d(t, 'a', function() {
        return o;
      }),
        n.d(t, 'b', function() {
          return a;
        }),
        n.d(t, 'c', function() {
          return s;
        });
      var r,
        i = n('MNsG');
      r =
        'undefined' !== typeof e
          ? e
          : 'undefined' !== typeof i['a'].vscode
          ? {
              get platform() {
                return i['a'].vscode.process.platform;
              },
              get env() {
                return i['a'].vscode.process.env;
              },
              nextTick: function(e) {
                return Object(i['e'])(e);
              },
              cwd: function() {
                return (
                  i['a'].vscode.process.env['VSCODE_CWD'] ||
                  i['a'].vscode.process.execPath.substr(
                    0,
                    i['a'].vscode.process.execPath.lastIndexOf(
                      'win32' === i['a'].vscode.process.platform ? '\\' : '/',
                    ),
                  )
                );
              },
            }
          : {
              get platform() {
                return i['d'] ? 'win32' : i['b'] ? 'darwin' : 'linux';
              },
              nextTick: function(e) {
                return Object(i['e'])(e);
              },
              get env() {
                return Object.create(null);
              },
              cwd: function() {
                return '/';
              },
            };
      var o = r.cwd,
        a = r.env,
        s = r.platform;
    }.call(this, n('Q2Ig')));
  },
  yLpj: function(e, t) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || new Function('return this')();
    } catch (r) {
      'object' === typeof window && (n = window);
    }
    e.exports = n;
  },
});
