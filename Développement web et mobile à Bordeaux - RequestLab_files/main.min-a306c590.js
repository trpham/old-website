/*!
 * jQuery JavaScript Library v2.1.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-18T15:11Z
 */
! function (t, e) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
		if (!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	} : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
	function n(t) {
		var e = t.length,
			n = K.type(t);
		return "function" === n || K.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
	}

	function i(t, e, n) {
		if (K.isFunction(e)) return K.grep(t, function (t, i) {
			return !!e.call(t, i, t) !== n
		});
		if (e.nodeType) return K.grep(t, function (t) {
			return t === e !== n
		});
		if ("string" == typeof e) {
			if (se.test(e)) return K.filter(e, t, n);
			e = K.filter(e, t)
		}
		return K.grep(t, function (t) {
			return W.call(e, t) >= 0 !== n
		})
	}

	function o(t, e) {
		for (;
			(t = t[e]) && 1 !== t.nodeType;);
		return t
	}

	function r(t) {
		var e = fe[t] = {};
		return K.each(t.match(de) || [], function (t, n) {
			e[n] = !0
		}), e
	}

	function a() {
		J.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1), K.ready()
	}

	function s() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function () {
				return {}
			}
		}), this.expando = K.expando + s.uid++
	}

	function l(t, e, n) {
		var i;
		if (void 0 === n && 1 === t.nodeType)
			if (i = "data-" + e.replace(xe, "-$1").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : _e.test(n) ? K.parseJSON(n) : n
				} catch (o) {}
				ye.set(t, e, n)
			} else n = void 0;
		return n
	}

	function u() {
		return !0
	}

	function c() {
		return !1
	}

	function h() {
		try {
			return J.activeElement
		} catch (t) {}
	}

	function p(t, e) {
		return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
	}

	function d(t) {
		return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
	}

	function f(t) {
		var e = Ie.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"), t
	}

	function m(t, e) {
		for (var n = 0, i = t.length; i > n; n++) ve.set(t[n], "globalEval", !e || ve.get(e[n], "globalEval"))
	}

	function g(t, e) {
		var n, i, o, r, a, s, l, u;
		if (1 === e.nodeType) {
			if (ve.hasData(t) && (r = ve.access(t), a = ve.set(e, r), u = r.events)) {
				delete a.handle, a.events = {};
				for (o in u)
					for (n = 0, i = u[o].length; i > n; n++) K.event.add(e, o, u[o][n])
			}
			ye.hasData(t) && (s = ye.access(t), l = K.extend({}, s), ye.set(e, l))
		}
	}

	function v(t, e) {
		var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
		return void 0 === e || e && K.nodeName(t, e) ? K.merge([t], n) : n
	}

	function y(t, e) {
		var n = e.nodeName.toLowerCase();
		"input" === n && Le.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
	}

	function _(e, n) {
		var i, o = K(n.createElement(e)).appendTo(n.body),
			r = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : K.css(o[0], "display");
		return o.detach(), r
	}

	function x(t) {
		var e = J,
			n = je[t];
		return n || (n = _(t, e), "none" !== n && n || (Ue = (Ue || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ue[0].contentDocument, e.write(), e.close(), n = _(t, e), Ue.detach()), je[t] = n), n
	}

	function b(t, e, n) {
		var i, o, r, a, s = t.style;
		return n = n || He(t), n && (a = n.getPropertyValue(e) || n[e]), n && ("" !== a || K.contains(t.ownerDocument, t) || (a = K.style(t, e)), Fe.test(a) && Ve.test(e) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
	}

	function w(t, e) {
		return {
			get: function () {
				return t() ? (delete this.get, void 0) : (this.get = e).apply(this, arguments)
			}
		}
	}

	function P(t, e) {
		if (e in t) return e;
		for (var n = e[0].toUpperCase() + e.slice(1), i = e, o = Ge.length; o--;)
			if (e = Ge[o] + n, e in t) return e;
		return i
	}

	function L(t, e, n) {
		var i = Ze.exec(e);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
	}

	function C(t, e, n, i, o) {
		for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += K.css(t, n + we[r], !0, o)), i ? ("content" === n && (a -= K.css(t, "padding" + we[r], !0, o)), "margin" !== n && (a -= K.css(t, "border" + we[r] + "Width", !0, o))) : (a += K.css(t, "padding" + we[r], !0, o), "padding" !== n && (a += K.css(t, "border" + we[r] + "Width", !0, o)));
		return a
	}

	function T(t, e, n) {
		var i = !0,
			o = "width" === e ? t.offsetWidth : t.offsetHeight,
			r = He(t),
			a = "border-box" === K.css(t, "boxSizing", !1, r);
		if (0 >= o || null == o) {
			if (o = b(t, e, r), (0 > o || null == o) && (o = t.style[e]), Fe.test(o)) return o;
			i = a && ($.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
		}
		return o + C(t, e, n || (a ? "border" : "content"), i, r) + "px"
	}

	function S(t, e) {
		for (var n, i, o, r = [], a = 0, s = t.length; s > a; a++) i = t[a], i.style && (r[a] = ve.get(i, "olddisplay"), n = i.style.display, e ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Pe(i) && (r[a] = ve.access(i, "olddisplay", x(i.nodeName)))) : (o = Pe(i), "none" === n && o || ve.set(i, "olddisplay", o ? n : K.css(i, "display"))));
		for (a = 0; s > a; a++) i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[a] || "" : "none"));
		return t
	}

	function E(t, e, n, i, o) {
		return new E.prototype.init(t, e, n, i, o)
	}

	function D() {
		return setTimeout(function () {
			$e = void 0
		}), $e = K.now()
	}

	function k(t, e) {
		var n, i = 0,
			o = {
				height: t
			};
		for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = we[i], o["margin" + n] = o["padding" + n] = t;
		return e && (o.opacity = o.width = t), o
	}

	function M(t, e, n) {
		for (var i, o = (nn[e] || []).concat(nn["*"]), r = 0, a = o.length; a > r; r++)
			if (i = o[r].call(n, e, t)) return i
	}

	function A(t, e, n) {
		var i, o, r, a, s, l, u, c, h = this,
			p = {},
			d = t.style,
			f = t.nodeType && Pe(t),
			m = ve.get(t, "fxshow");
		n.queue || (s = K._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
			s.unqueued || l()
		}), s.unqueued++, h.always(function () {
			h.always(function () {
				s.unqueued--, K.queue(t, "fx").length || s.empty.fire()
			})
		})), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], u = K.css(t, "display"), c = "none" === u ? ve.get(t, "olddisplay") || x(t.nodeName) : u, "inline" === c && "none" === K.css(t, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", h.always(function () {
			d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
		}));
		for (i in e)
			if (o = e[i], Qe.exec(o)) {
				if (delete e[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
					if ("show" !== o || !m || void 0 === m[i]) continue;
					f = !0
				}
				p[i] = m && m[i] || K.style(t, i)
			} else u = void 0;
		if (K.isEmptyObject(p)) "inline" === ("none" === u ? x(t.nodeName) : u) && (d.display = u);
		else {
			m ? "hidden" in m && (f = m.hidden) : m = ve.access(t, "fxshow", {}), r && (m.hidden = !f), f ? K(t).show() : h.done(function () {
				K(t).hide()
			}), h.done(function () {
				var e;
				ve.remove(t, "fxshow");
				for (e in p) K.style(t, e, p[e])
			});
			for (i in p) a = M(f ? m[i] : 0, i, h), i in m || (m[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
		}
	}

	function N(t, e) {
		var n, i, o, r, a;
		for (n in t)
			if (i = K.camelCase(n), o = e[i], r = t[n], K.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), a = K.cssHooks[i], a && "expand" in a) {
				r = a.expand(r), delete t[i];
				for (n in r) n in t || (t[n] = r[n], e[n] = o)
			} else e[i] = o
	}

	function O(t, e, n) {
		var i, o, r = 0,
			a = en.length,
			s = K.Deferred().always(function () {
				delete l.elem
			}),
			l = function () {
				if (o) return !1;
				for (var e = $e || D(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(r);
				return s.notifyWith(t, [u, r, n]), 1 > r && l ? n : (s.resolveWith(t, [u]), !1)
			},
			u = s.promise({
				elem: t,
				props: K.extend({}, e),
				opts: K.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: e,
				originalOptions: n,
				startTime: $e || D(),
				duration: n.duration,
				tweens: [],
				createTween: function (e, n) {
					var i = K.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
					return u.tweens.push(i), i
				},
				stop: function (e) {
					var n = 0,
						i = e ? u.tweens.length : 0;
					if (o) return this;
					for (o = !0; i > n; n++) u.tweens[n].run(1);
					return e ? s.resolveWith(t, [u, e]) : s.rejectWith(t, [u, e]), this
				}
			}),
			c = u.props;
		for (N(c, u.opts.specialEasing); a > r; r++)
			if (i = en[r].call(u, t, c, u.opts)) return i;
		return K.map(c, M, u), K.isFunction(u.opts.start) && u.opts.start.call(t, u), K.fx.timer(K.extend(l, {
			elem: t,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function B(t) {
		return function (e, n) {
			"string" != typeof e && (n = e, e = "*");
			var i, o = 0,
				r = e.toLowerCase().match(de) || [];
			if (K.isFunction(n))
				for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
		}
	}

	function I(t, e, n, i) {
		function o(s) {
			var l;
			return r[s] = !0, K.each(t[s] || [], function (t, s) {
				var u = s(e, n, i);
				return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
			}), l
		}
		var r = {},
			a = t === xn;
		return o(e.dataTypes[0]) || !r["*"] && o("*")
	}

	function z(t, e) {
		var n, i, o = K.ajaxSettings.flatOptions || {};
		for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
		return i && K.extend(!0, t, i), t
	}

	function R(t, e, n) {
		for (var i, o, r, a, s = t.contents, l = t.dataTypes;
			"*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
		if (i)
			for (o in s)
				if (s[o] && s[o].test(i)) {
					l.unshift(o);
					break
				}
		if (l[0] in n) r = l[0];
		else {
			for (o in n) {
				if (!l[0] || t.converters[o + " " + l[0]]) {
					r = o;
					break
				}
				a || (a = o)
			}
			r = r || a
		}
		return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
	}

	function U(t, e, n, i) {
		var o, r, a, s, l, u = {},
			c = t.dataTypes.slice();
		if (c[1])
			for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
		for (r = c.shift(); r;)
			if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
				if ("*" === r) r = l;
				else if ("*" !== l && l !== r) {
			if (a = u[l + " " + r] || u["* " + r], !a)
				for (o in u)
					if (s = o.split(" "), s[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
						a === !0 ? a = u[o] : u[o] !== !0 && (r = s[0], c.unshift(s[1]));
						break
					}
			if (a !== !0)
				if (a && t["throws"]) e = a(e);
				else try {
					e = a(e)
				} catch (h) {
					return {
						state: "parsererror",
						error: a ? h : "No conversion from " + l + " to " + r
					}
				}
		}
		return {
			state: "success",
			data: e
		}
	}

	function j(t, e, n, i) {
		var o;
		if (K.isArray(e)) K.each(e, function (e, o) {
			n || Cn.test(t) ? i(t, o) : j(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
		});
		else if (n || "object" !== K.type(e)) i(t, e);
		else
			for (o in e) j(t + "[" + o + "]", e[o], n, i)
	}

	function V(t) {
		return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
	}
	var F = [],
		H = F.slice,
		q = F.concat,
		Z = F.push,
		W = F.indexOf,
		X = {},
		Y = X.toString,
		G = X.hasOwnProperty,
		$ = {},
		J = t.document,
		Q = "2.1.3",
		K = function (t, e) {
			return new K.fn.init(t, e)
		},
		te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		ee = /^-ms-/,
		ne = /-([\da-z])/gi,
		ie = function (t, e) {
			return e.toUpperCase()
		};
	K.fn = K.prototype = {
		jquery: Q,
		constructor: K,
		selector: "",
		length: 0,
		toArray: function () {
			return H.call(this)
		},
		get: function (t) {
			return null != t ? 0 > t ? this[t + this.length] : this[t] : H.call(this)
		},
		pushStack: function (t) {
			var e = K.merge(this.constructor(), t);
			return e.prevObject = this, e.context = this.context, e
		},
		each: function (t, e) {
			return K.each(this, t, e)
		},
		map: function (t) {
			return this.pushStack(K.map(this, function (e, n) {
				return t.call(e, n, e)
			}))
		},
		slice: function () {
			return this.pushStack(H.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (t) {
			var e = this.length,
				n = +t + (0 > t ? e : 0);
			return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor(null)
		},
		push: Z,
		sort: F.sort,
		splice: F.splice
	}, K.extend = K.fn.extend = function () {
		var t, e, n, i, o, r, a = arguments[0] || {},
			s = 1,
			l = arguments.length,
			u = !1;
		for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || K.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
			if (null != (t = arguments[s]))
				for (e in t) n = a[e], i = t[e], a !== i && (u && i && (K.isPlainObject(i) || (o = K.isArray(i))) ? (o ? (o = !1, r = n && K.isArray(n) ? n : []) : r = n && K.isPlainObject(n) ? n : {}, a[e] = K.extend(u, r, i)) : void 0 !== i && (a[e] = i));
		return a
	}, K.extend({
		expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (t) {
			throw new Error(t)
		},
		noop: function () {},
		isFunction: function (t) {
			return "function" === K.type(t)
		},
		isArray: Array.isArray,
		isWindow: function (t) {
			return null != t && t === t.window
		},
		isNumeric: function (t) {
			return !K.isArray(t) && t - parseFloat(t) + 1 >= 0
		},
		isPlainObject: function (t) {
			return "object" !== K.type(t) || t.nodeType || K.isWindow(t) ? !1 : t.constructor && !G.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
		},
		isEmptyObject: function (t) {
			var e;
			for (e in t) return !1;
			return !0
		},
		type: function (t) {
			return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? X[Y.call(t)] || "object" : typeof t
		},
		globalEval: function (t) {
			var e, n = eval;
			t = K.trim(t), t && (1 === t.indexOf("use strict") ? (e = J.createElement("script"), e.text = t, J.head.appendChild(e).parentNode.removeChild(e)) : n(t))
		},
		camelCase: function (t) {
			return t.replace(ee, "ms-").replace(ne, ie)
		},
		nodeName: function (t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function (t, e, i) {
			var o, r = 0,
				a = t.length,
				s = n(t);
			if (i) {
				if (s)
					for (; a > r && (o = e.apply(t[r], i), o !== !1); r++);
				else
					for (r in t)
						if (o = e.apply(t[r], i), o === !1) break
			} else if (s)
				for (; a > r && (o = e.call(t[r], r, t[r]), o !== !1); r++);
			else
				for (r in t)
					if (o = e.call(t[r], r, t[r]), o === !1) break; return t
		},
		trim: function (t) {
			return null == t ? "" : (t + "").replace(te, "")
		},
		makeArray: function (t, e) {
			var i = e || [];
			return null != t && (n(Object(t)) ? K.merge(i, "string" == typeof t ? [t] : t) : Z.call(i, t)), i
		},
		inArray: function (t, e, n) {
			return null == e ? -1 : W.call(e, t, n)
		},
		merge: function (t, e) {
			for (var n = +e.length, i = 0, o = t.length; n > i; i++) t[o++] = e[i];
			return t.length = o, t
		},
		grep: function (t, e, n) {
			for (var i, o = [], r = 0, a = t.length, s = !n; a > r; r++) i = !e(t[r], r), i !== s && o.push(t[r]);
			return o
		},
		map: function (t, e, i) {
			var o, r = 0,
				a = t.length,
				s = n(t),
				l = [];
			if (s)
				for (; a > r; r++) o = e(t[r], r, i), null != o && l.push(o);
			else
				for (r in t) o = e(t[r], r, i), null != o && l.push(o);
			return q.apply([], l)
		},
		guid: 1,
		proxy: function (t, e) {
			var n, i, o;
			return "string" == typeof e && (n = t[e], e = t, t = n), K.isFunction(t) ? (i = H.call(arguments, 2), o = function () {
				return t.apply(e || this, i.concat(H.call(arguments)))
			}, o.guid = t.guid = t.guid || K.guid++, o) : void 0
		},
		now: Date.now,
		support: $
	}), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
		X["[object " + e + "]"] = e.toLowerCase()
	});
	var oe =
		/*!
		 * Sizzle CSS Selector Engine v2.2.0-pre
		 * http://sizzlejs.com/
		 *
		 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
		 * Released under the MIT license
		 * http://jquery.org/license
		 *
		 * Date: 2014-12-16
		 */
		function (t) {
			function e(t, e, n, i) {
				var o, r, a, s, l, u, h, d, f, m;
				if ((e ? e.ownerDocument || e : j) !== A && M(e), e = e || A, n = n || [], s = e.nodeType, "string" != typeof t || !t || 1 !== s && 9 !== s && 11 !== s) return n;
				if (!i && O) {
					if (11 !== s && (o = ye.exec(t)))
						if (a = o[1]) {
							if (9 === s) {
								if (r = e.getElementById(a), !r || !r.parentNode) return n;
								if (r.id === a) return n.push(r), n
							} else if (e.ownerDocument && (r = e.ownerDocument.getElementById(a)) && R(e, r) && r.id === a) return n.push(r), n
						} else {
							if (o[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
							if ((a = o[3]) && b.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(a)), n
						}
					if (b.qsa && (!B || !B.test(t))) {
						if (d = h = U, f = e, m = 1 !== s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
							for (u = C(t), (h = e.getAttribute("id")) ? d = h.replace(xe, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + p(u[l]);
							f = _e.test(t) && c(e.parentNode) || e, m = u.join(",")
						}
						if (m) try {
							return Q.apply(n, f.querySelectorAll(m)), n
						} catch (g) {} finally {
							h || e.removeAttribute("id")
						}
					}
				}
				return S(t.replace(le, "$1"), e, n, i)
			}

			function n() {
				function t(n, i) {
					return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = i
				}
				var e = [];
				return t
			}

			function i(t) {
				return t[U] = !0, t
			}

			function o(t) {
				var e = A.createElement("div");
				try {
					return !!t(e)
				} catch (n) {
					return !1
				} finally {
					e.parentNode && e.parentNode.removeChild(e), e = null
				}
			}

			function r(t, e) {
				for (var n = t.split("|"), i = t.length; i--;) w.attrHandle[n[i]] = e
			}

			function a(t, e) {
				var n = e && t,
					i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
				if (i) return i;
				if (n)
					for (; n = n.nextSibling;)
						if (n === e) return -1;
				return t ? 1 : -1
			}

			function s(t) {
				return function (e) {
					var n = e.nodeName.toLowerCase();
					return "input" === n && e.type === t
				}
			}

			function l(t) {
				return function (e) {
					var n = e.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && e.type === t
				}
			}

			function u(t) {
				return i(function (e) {
					return e = +e, i(function (n, i) {
						for (var o, r = t([], n.length, e), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
					})
				})
			}

			function c(t) {
				return t && "undefined" != typeof t.getElementsByTagName && t
			}

			function h() {}

			function p(t) {
				for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
				return i
			}

			function d(t, e, n) {
				var i = e.dir,
					o = n && "parentNode" === i,
					r = F++;
				return e.first ? function (e, n, r) {
					for (; e = e[i];)
						if (1 === e.nodeType || o) return t(e, n, r)
				} : function (e, n, a) {
					var s, l, u = [V, r];
					if (a) {
						for (; e = e[i];)
							if ((1 === e.nodeType || o) && t(e, n, a)) return !0
					} else
						for (; e = e[i];)
							if (1 === e.nodeType || o) {
								if (l = e[U] || (e[U] = {}), (s = l[i]) && s[0] === V && s[1] === r) return u[2] = s[2];
								if (l[i] = u, u[2] = t(e, n, a)) return !0
							}
				}
			}

			function f(t) {
				return t.length > 1 ? function (e, n, i) {
					for (var o = t.length; o--;)
						if (!t[o](e, n, i)) return !1;
					return !0
				} : t[0]
			}

			function m(t, n, i) {
				for (var o = 0, r = n.length; r > o; o++) e(t, n[o], i);
				return i
			}

			function g(t, e, n, i, o) {
				for (var r, a = [], s = 0, l = t.length, u = null != e; l > s; s++)(r = t[s]) && (!n || n(r, i, o)) && (a.push(r), u && e.push(s));
				return a
			}

			function v(t, e, n, o, r, a) {
				return o && !o[U] && (o = v(o)), r && !r[U] && (r = v(r, a)), i(function (i, a, s, l) {
					var u, c, h, p = [],
						d = [],
						f = a.length,
						v = i || m(e || "*", s.nodeType ? [s] : s, []),
						y = !t || !i && e ? v : g(v, p, t, s, l),
						_ = n ? r || (i ? t : f || o) ? [] : a : y;
					if (n && n(y, _, s, l), o)
						for (u = g(_, d), o(u, [], s, l), c = u.length; c--;)(h = u[c]) && (_[d[c]] = !(y[d[c]] = h));
					if (i) {
						if (r || t) {
							if (r) {
								for (u = [], c = _.length; c--;)(h = _[c]) && u.push(y[c] = h);
								r(null, _ = [], u, l)
							}
							for (c = _.length; c--;)(h = _[c]) && (u = r ? te(i, h) : p[c]) > -1 && (i[u] = !(a[u] = h))
						}
					} else _ = g(_ === a ? _.splice(f, _.length) : _), r ? r(null, a, _, l) : Q.apply(a, _)
				})
			}

			function y(t) {
				for (var e, n, i, o = t.length, r = w.relative[t[0].type], a = r || w.relative[" "], s = r ? 1 : 0, l = d(function (t) {
						return t === e
					}, a, !0), u = d(function (t) {
						return te(e, t) > -1
					}, a, !0), c = [function (t, n, i) {
						var o = !r && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
						return e = null, o
					}]; o > s; s++)
					if (n = w.relative[t[s].type]) c = [d(f(c), n)];
					else {
						if (n = w.filter[t[s].type].apply(null, t[s].matches), n[U]) {
							for (i = ++s; o > i && !w.relative[t[i].type]; i++);
							return v(s > 1 && f(c), s > 1 && p(t.slice(0, s - 1).concat({
								value: " " === t[s - 2].type ? "*" : ""
							})).replace(le, "$1"), n, i > s && y(t.slice(s, i)), o > i && y(t = t.slice(i)), o > i && p(t))
						}
						c.push(n)
					}
				return f(c)
			}

			function _(t, n) {
				var o = n.length > 0,
					r = t.length > 0,
					a = function (i, a, s, l, u) {
						var c, h, p, d = 0,
							f = "0",
							m = i && [],
							v = [],
							y = E,
							_ = i || r && w.find.TAG("*", u),
							x = V += null == y ? 1 : Math.random() || .1,
							b = _.length;
						for (u && (E = a !== A && a); f !== b && null != (c = _[f]); f++) {
							if (r && c) {
								for (h = 0; p = t[h++];)
									if (p(c, a, s)) {
										l.push(c);
										break
									}
								u && (V = x)
							}
							o && ((c = !p && c) && d--, i && m.push(c))
						}
						if (d += f, o && f !== d) {
							for (h = 0; p = n[h++];) p(m, v, a, s);
							if (i) {
								if (d > 0)
									for (; f--;) m[f] || v[f] || (v[f] = $.call(l));
								v = g(v)
							}
							Q.apply(l, v), u && !i && v.length > 0 && d + n.length > 1 && e.uniqueSort(l)
						}
						return u && (V = x, E = y), m
					};
				return o ? i(a) : a
			}
			var x, b, w, P, L, C, T, S, E, D, k, M, A, N, O, B, I, z, R, U = "sizzle" + 1 * new Date,
				j = t.document,
				V = 0,
				F = 0,
				H = n(),
				q = n(),
				Z = n(),
				W = function (t, e) {
					return t === e && (k = !0), 0
				},
				X = 1 << 31,
				Y = {}.hasOwnProperty,
				G = [],
				$ = G.pop,
				J = G.push,
				Q = G.push,
				K = G.slice,
				te = function (t, e) {
					for (var n = 0, i = t.length; i > n; n++)
						if (t[n] === e) return n;
					return -1
				},
				ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				ne = "[\\x20\\t\\r\\n\\f]",
				ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				oe = ie.replace("w", "w#"),
				re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
				ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
				se = new RegExp(ne + "+", "g"),
				le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
				ue = new RegExp("^" + ne + "*," + ne + "*"),
				ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
				he = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
				pe = new RegExp(ae),
				de = new RegExp("^" + oe + "$"),
				fe = {
					ID: new RegExp("^#(" + ie + ")"),
					CLASS: new RegExp("^\\.(" + ie + ")"),
					TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + re),
					PSEUDO: new RegExp("^" + ae),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + ee + ")$", "i"),
					needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
				},
				me = /^(?:input|select|textarea|button)$/i,
				ge = /^h\d$/i,
				ve = /^[^{]+\{\s*\[native \w/,
				ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				_e = /[+~]/,
				xe = /'|\\/g,
				be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
				we = function (t, e, n) {
					var i = "0x" + e - 65536;
					return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
				},
				Pe = function () {
					M()
				};
			try {
				Q.apply(G = K.call(j.childNodes), j.childNodes), G[j.childNodes.length].nodeType
			} catch (Le) {
				Q = {
					apply: G.length ? function (t, e) {
						J.apply(t, K.call(e))
					} : function (t, e) {
						for (var n = t.length, i = 0; t[n++] = e[i++];);
						t.length = n - 1
					}
				}
			}
			b = e.support = {}, L = e.isXML = function (t) {
				var e = t && (t.ownerDocument || t).documentElement;
				return e ? "HTML" !== e.nodeName : !1
			}, M = e.setDocument = function (t) {
				var e, n, i = t ? t.ownerDocument || t : j;
				return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, N = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Pe, !1) : n.attachEvent && n.attachEvent("onunload", Pe)), O = !L(i), b.attributes = o(function (t) {
					return t.className = "i", !t.getAttribute("className")
				}), b.getElementsByTagName = o(function (t) {
					return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
				}), b.getElementsByClassName = ve.test(i.getElementsByClassName), b.getById = o(function (t) {
					return N.appendChild(t).id = U, !i.getElementsByName || !i.getElementsByName(U).length
				}), b.getById ? (w.find.ID = function (t, e) {
					if ("undefined" != typeof e.getElementById && O) {
						var n = e.getElementById(t);
						return n && n.parentNode ? [n] : []
					}
				}, w.filter.ID = function (t) {
					var e = t.replace(be, we);
					return function (t) {
						return t.getAttribute("id") === e
					}
				}) : (delete w.find.ID, w.filter.ID = function (t) {
					var e = t.replace(be, we);
					return function (t) {
						var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
						return n && n.value === e
					}
				}), w.find.TAG = b.getElementsByTagName ? function (t, e) {
					return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
				} : function (t, e) {
					var n, i = [],
						o = 0,
						r = e.getElementsByTagName(t);
					if ("*" === t) {
						for (; n = r[o++];) 1 === n.nodeType && i.push(n);
						return i
					}
					return r
				}, w.find.CLASS = b.getElementsByClassName && function (t, e) {
					return O ? e.getElementsByClassName(t) : void 0
				}, I = [], B = [], (b.qsa = ve.test(i.querySelectorAll)) && (o(function (t) {
					N.appendChild(t).innerHTML = "<a id='" + U + "'></a><select id='" + U + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && B.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || B.push("\\[" + ne + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + U + "-]").length || B.push("~="), t.querySelectorAll(":checked").length || B.push(":checked"), t.querySelectorAll("a#" + U + "+*").length || B.push(".#.+[+~]")
				}), o(function (t) {
					var e = i.createElement("input");
					e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && B.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), B.push(",.*:")
				})), (b.matchesSelector = ve.test(z = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && o(function (t) {
					b.disconnectedMatch = z.call(t, "div"), z.call(t, "[s!='']:x"), I.push("!=", ae)
				}), B = B.length && new RegExp(B.join("|")), I = I.length && new RegExp(I.join("|")), e = ve.test(N.compareDocumentPosition), R = e || ve.test(N.contains) ? function (t, e) {
					var n = 9 === t.nodeType ? t.documentElement : t,
						i = e && e.parentNode;
					return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
				} : function (t, e) {
					if (e)
						for (; e = e.parentNode;)
							if (e === t) return !0;
					return !1
				}, W = e ? function (t, e) {
					if (t === e) return k = !0, 0;
					var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
					return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === j && R(j, t) ? -1 : e === i || e.ownerDocument === j && R(j, e) ? 1 : D ? te(D, t) - te(D, e) : 0 : 4 & n ? -1 : 1)
				} : function (t, e) {
					if (t === e) return k = !0, 0;
					var n, o = 0,
						r = t.parentNode,
						s = e.parentNode,
						l = [t],
						u = [e];
					if (!r || !s) return t === i ? -1 : e === i ? 1 : r ? -1 : s ? 1 : D ? te(D, t) - te(D, e) : 0;
					if (r === s) return a(t, e);
					for (n = t; n = n.parentNode;) l.unshift(n);
					for (n = e; n = n.parentNode;) u.unshift(n);
					for (; l[o] === u[o];) o++;
					return o ? a(l[o], u[o]) : l[o] === j ? -1 : u[o] === j ? 1 : 0
				}, i) : A
			}, e.matches = function (t, n) {
				return e(t, null, null, n)
			}, e.matchesSelector = function (t, n) {
				if ((t.ownerDocument || t) !== A && M(t), n = n.replace(he, "='$1']"), !(!b.matchesSelector || !O || I && I.test(n) || B && B.test(n))) try {
					var i = z.call(t, n);
					if (i || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
				} catch (o) {}
				return e(n, A, null, [t]).length > 0
			}, e.contains = function (t, e) {
				return (t.ownerDocument || t) !== A && M(t), R(t, e)
			}, e.attr = function (t, e) {
				(t.ownerDocument || t) !== A && M(t);
				var n = w.attrHandle[e.toLowerCase()],
					i = n && Y.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !O) : void 0;
				return void 0 !== i ? i : b.attributes || !O ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
			}, e.error = function (t) {
				throw new Error("Syntax error, unrecognized expression: " + t)
			}, e.uniqueSort = function (t) {
				var e, n = [],
					i = 0,
					o = 0;
				if (k = !b.detectDuplicates, D = !b.sortStable && t.slice(0), t.sort(W), k) {
					for (; e = t[o++];) e === t[o] && (i = n.push(o));
					for (; i--;) t.splice(n[i], 1)
				}
				return D = null, t
			}, P = e.getText = function (t) {
				var e, n = "",
					i = 0,
					o = t.nodeType;
				if (o) {
					if (1 === o || 9 === o || 11 === o) {
						if ("string" == typeof t.textContent) return t.textContent;
						for (t = t.firstChild; t; t = t.nextSibling) n += P(t)
					} else if (3 === o || 4 === o) return t.nodeValue
				} else
					for (; e = t[i++];) n += P(e);
				return n
			}, w = e.selectors = {
				cacheLength: 50,
				createPseudo: i,
				match: fe,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function (t) {
						return t[1] = t[1].replace(be, we), t[3] = (t[3] || t[4] || t[5] || "").replace(be, we), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
					},
					CHILD: function (t) {
						return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
					},
					PSEUDO: function (t) {
						var e, n = !t[6] && t[2];
						return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pe.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
					}
				},
				filter: {
					TAG: function (t) {
						var e = t.replace(be, we).toLowerCase();
						return "*" === t ? function () {
							return !0
						} : function (t) {
							return t.nodeName && t.nodeName.toLowerCase() === e
						}
					},
					CLASS: function (t) {
						var e = H[t + " "];
						return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && H(t, function (t) {
							return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
						})
					},
					ATTR: function (t, n, i) {
						return function (o) {
							var r = e.attr(o, t);
							return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
						}
					},
					CHILD: function (t, e, n, i, o) {
						var r = "nth" !== t.slice(0, 3),
							a = "last" !== t.slice(-4),
							s = "of-type" === e;
						return 1 === i && 0 === o ? function (t) {
							return !!t.parentNode
						} : function (e, n, l) {
							var u, c, h, p, d, f, m = r !== a ? "nextSibling" : "previousSibling",
								g = e.parentNode,
								v = s && e.nodeName.toLowerCase(),
								y = !l && !s;
							if (g) {
								if (r) {
									for (; m;) {
										for (h = e; h = h[m];)
											if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
										f = m = "only" === t && !f && "nextSibling"
									}
									return !0
								}
								if (f = [a ? g.firstChild : g.lastChild], a && y) {
									for (c = g[U] || (g[U] = {}), u = c[t] || [], d = u[0] === V && u[1], p = u[0] === V && u[2], h = d && g.childNodes[d]; h = ++d && h && h[m] || (p = d = 0) || f.pop();)
										if (1 === h.nodeType && ++p && h === e) {
											c[t] = [V, d, p];
											break
										}
								} else if (y && (u = (e[U] || (e[U] = {}))[t]) && u[0] === V) p = u[1];
								else
									for (;
										(h = ++d && h && h[m] || (p = d = 0) || f.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++p || (y && ((h[U] || (h[U] = {}))[t] = [V, p]), h !== e)););
								return p -= o, p === i || p % i === 0 && p / i >= 0
							}
						}
					},
					PSEUDO: function (t, n) {
						var o, r = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
						return r[U] ? r(n) : r.length > 1 ? (o = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
							for (var i, o = r(t, n), a = o.length; a--;) i = te(t, o[a]), t[i] = !(e[i] = o[a])
						}) : function (t) {
							return r(t, 0, o)
						}) : r
					}
				},
				pseudos: {
					not: i(function (t) {
						var e = [],
							n = [],
							o = T(t.replace(le, "$1"));
						return o[U] ? i(function (t, e, n, i) {
							for (var r, a = o(t, null, i, []), s = t.length; s--;)(r = a[s]) && (t[s] = !(e[s] = r))
						}) : function (t, i, r) {
							return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
						}
					}),
					has: i(function (t) {
						return function (n) {
							return e(t, n).length > 0
						}
					}),
					contains: i(function (t) {
						return t = t.replace(be, we),
							function (e) {
								return (e.textContent || e.innerText || P(e)).indexOf(t) > -1
							}
					}),
					lang: i(function (t) {
						return de.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(be, we).toLowerCase(),
							function (e) {
								var n;
								do
									if (n = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
								while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function (e) {
						var n = t.location && t.location.hash;
						return n && n.slice(1) === e.id
					},
					root: function (t) {
						return t === N
					},
					focus: function (t) {
						return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
					},
					enabled: function (t) {
						return t.disabled === !1
					},
					disabled: function (t) {
						return t.disabled === !0
					},
					checked: function (t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && !!t.checked || "option" === e && !!t.selected
					},
					selected: function (t) {
						return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
					},
					empty: function (t) {
						for (t = t.firstChild; t; t = t.nextSibling)
							if (t.nodeType < 6) return !1;
						return !0
					},
					parent: function (t) {
						return !w.pseudos.empty(t)
					},
					header: function (t) {
						return ge.test(t.nodeName)
					},
					input: function (t) {
						return me.test(t.nodeName)
					},
					button: function (t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && "button" === t.type || "button" === e
					},
					text: function (t) {
						var e;
						return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
					},
					first: u(function () {
						return [0]
					}),
					last: u(function (t, e) {
						return [e - 1]
					}),
					eq: u(function (t, e, n) {
						return [0 > n ? n + e : n]
					}),
					even: u(function (t, e) {
						for (var n = 0; e > n; n += 2) t.push(n);
						return t
					}),
					odd: u(function (t, e) {
						for (var n = 1; e > n; n += 2) t.push(n);
						return t
					}),
					lt: u(function (t, e, n) {
						for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
						return t
					}),
					gt: u(function (t, e, n) {
						for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
						return t
					})
				}
			}, w.pseudos.nth = w.pseudos.eq;
			for (x in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) w.pseudos[x] = s(x);
			for (x in {
					submit: !0,
					reset: !0
				}) w.pseudos[x] = l(x);
			return h.prototype = w.filters = w.pseudos, w.setFilters = new h, C = e.tokenize = function (t, n) {
				var i, o, r, a, s, l, u, c = q[t + " "];
				if (c) return n ? 0 : c.slice(0);
				for (s = t, l = [], u = w.preFilter; s;) {
					(!i || (o = ue.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ce.exec(s)) && (i = o.shift(), r.push({
						value: i,
						type: o[0].replace(le, " ")
					}), s = s.slice(i.length));
					for (a in w.filter) !(o = fe[a].exec(s)) || u[a] && !(o = u[a](o)) || (i = o.shift(), r.push({
						value: i,
						type: a,
						matches: o
					}), s = s.slice(i.length));
					if (!i) break
				}
				return n ? s.length : s ? e.error(t) : q(t, l).slice(0)
			}, T = e.compile = function (t, e) {
				var n, i = [],
					o = [],
					r = Z[t + " "];
				if (!r) {
					for (e || (e = C(t)), n = e.length; n--;) r = y(e[n]), r[U] ? i.push(r) : o.push(r);
					r = Z(t, _(o, i)), r.selector = t
				}
				return r
			}, S = e.select = function (t, e, n, i) {
				var o, r, a, s, l, u = "function" == typeof t && t,
					h = !i && C(t = u.selector || t);
				if (n = n || [], 1 === h.length) {
					if (r = h[0] = h[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && b.getById && 9 === e.nodeType && O && w.relative[r[1].type]) {
						if (e = (w.find.ID(a.matches[0].replace(be, we), e) || [])[0], !e) return n;
						u && (e = e.parentNode), t = t.slice(r.shift().value.length)
					}
					for (o = fe.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o], !w.relative[s = a.type]);)
						if ((l = w.find[s]) && (i = l(a.matches[0].replace(be, we), _e.test(r[0].type) && c(e.parentNode) || e))) {
							if (r.splice(o, 1), t = i.length && p(r), !t) return Q.apply(n, i), n;
							break
						}
				}
				return (u || T(t, h))(i, e, !O, n, _e.test(t) && c(e.parentNode) || e), n
			}, b.sortStable = U.split("").sort(W).join("") === U, b.detectDuplicates = !!k, M(), b.sortDetached = o(function (t) {
				return 1 & t.compareDocumentPosition(A.createElement("div"))
			}), o(function (t) {
				return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
			}) || r("type|href|height|width", function (t, e, n) {
				return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
			}), b.attributes && o(function (t) {
				return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
			}) || r("value", function (t, e, n) {
				return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
			}), o(function (t) {
				return null == t.getAttribute("disabled")
			}) || r(ee, function (t, e, n) {
				var i;
				return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
			}), e
		}(t);
	K.find = oe, K.expr = oe.selectors, K.expr[":"] = K.expr.pseudos, K.unique = oe.uniqueSort, K.text = oe.getText, K.isXMLDoc = oe.isXML, K.contains = oe.contains;
	var re = K.expr.match.needsContext,
		ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		se = /^.[^:#\[\.,]*$/;
	K.filter = function (t, e, n) {
		var i = e[0];
		return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? K.find.matchesSelector(i, t) ? [i] : [] : K.find.matches(t, K.grep(e, function (t) {
			return 1 === t.nodeType
		}))
	}, K.fn.extend({
		find: function (t) {
			var e, n = this.length,
				i = [],
				o = this;
			if ("string" != typeof t) return this.pushStack(K(t).filter(function () {
				for (e = 0; n > e; e++)
					if (K.contains(o[e], this)) return !0
			}));
			for (e = 0; n > e; e++) K.find(t, o[e], i);
			return i = this.pushStack(n > 1 ? K.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
		},
		filter: function (t) {
			return this.pushStack(i(this, t || [], !1))
		},
		not: function (t) {
			return this.pushStack(i(this, t || [], !0))
		},
		is: function (t) {
			return !!i(this, "string" == typeof t && re.test(t) ? K(t) : t || [], !1).length
		}
	});
	var le, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ce = K.fn.init = function (t, e) {
			var n, i;
			if (!t) return this;
			if ("string" == typeof t) {
				if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ue.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || le).find(t) : this.constructor(e).find(t);
				if (n[1]) {
					if (e = e instanceof K ? e[0] : e, K.merge(this, K.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : J, !0)), ae.test(n[1]) && K.isPlainObject(e))
						for (n in e) K.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
					return this
				}
				return i = J.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = J, this.selector = t, this
			}
			return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : K.isFunction(t) ? "undefined" != typeof le.ready ? le.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), K.makeArray(t, this))
		};
	ce.prototype = K.fn, le = K(J);
	var he = /^(?:parents|prev(?:Until|All))/,
		pe = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	K.extend({
		dir: function (t, e, n) {
			for (var i = [], o = void 0 !== n;
				(t = t[e]) && 9 !== t.nodeType;)
				if (1 === t.nodeType) {
					if (o && K(t).is(n)) break;
					i.push(t)
				}
			return i
		},
		sibling: function (t, e) {
			for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
			return n
		}
	}), K.fn.extend({
		has: function (t) {
			var e = K(t, this),
				n = e.length;
			return this.filter(function () {
				for (var t = 0; n > t; t++)
					if (K.contains(this, e[t])) return !0
			})
		},
		closest: function (t, e) {
			for (var n, i = 0, o = this.length, r = [], a = re.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; o > i; i++)
				for (n = this[i]; n && n !== e; n = n.parentNode)
					if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && K.find.matchesSelector(n, t))) {
						r.push(n);
						break
					}
			return this.pushStack(r.length > 1 ? K.unique(r) : r)
		},
		index: function (t) {
			return t ? "string" == typeof t ? W.call(K(t), this[0]) : W.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (t, e) {
			return this.pushStack(K.unique(K.merge(this.get(), K(t, e))))
		},
		addBack: function (t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), K.each({
		parent: function (t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function (t) {
			return K.dir(t, "parentNode")
		},
		parentsUntil: function (t, e, n) {
			return K.dir(t, "parentNode", n)
		},
		next: function (t) {
			return o(t, "nextSibling")
		},
		prev: function (t) {
			return o(t, "previousSibling")
		},
		nextAll: function (t) {
			return K.dir(t, "nextSibling")
		},
		prevAll: function (t) {
			return K.dir(t, "previousSibling")
		},
		nextUntil: function (t, e, n) {
			return K.dir(t, "nextSibling", n)
		},
		prevUntil: function (t, e, n) {
			return K.dir(t, "previousSibling", n)
		},
		siblings: function (t) {
			return K.sibling((t.parentNode || {}).firstChild, t)
		},
		children: function (t) {
			return K.sibling(t.firstChild)
		},
		contents: function (t) {
			return t.contentDocument || K.merge([], t.childNodes)
		}
	}, function (t, e) {
		K.fn[t] = function (n, i) {
			var o = K.map(this, e, n);
			return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = K.filter(i, o)), this.length > 1 && (pe[t] || K.unique(o), he.test(t) && o.reverse()), this.pushStack(o)
		}
	});
	var de = /\S+/g,
		fe = {};
	K.Callbacks = function (t) {
		t = "string" == typeof t ? fe[t] || r(t) : K.extend({}, t);
		var e, n, i, o, a, s, l = [],
			u = !t.once && [],
			c = function (r) {
				for (e = t.memory && r, n = !0, s = o || 0, o = 0, a = l.length, i = !0; l && a > s; s++)
					if (l[s].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
						e = !1;
						break
					}
				i = !1, l && (u ? u.length && c(u.shift()) : e ? l = [] : h.disable())
			},
			h = {
				add: function () {
					if (l) {
						var n = l.length;
						! function r(e) {
							K.each(e, function (e, n) {
								var i = K.type(n);
								"function" === i ? t.unique && h.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
							})
						}(arguments), i ? a = l.length : e && (o = n, c(e))
					}
					return this
				},
				remove: function () {
					return l && K.each(arguments, function (t, e) {
						for (var n;
							(n = K.inArray(e, l, n)) > -1;) l.splice(n, 1), i && (a >= n && a--, s >= n && s--)
					}), this
				},
				has: function (t) {
					return t ? K.inArray(t, l) > -1 : !(!l || !l.length)
				},
				empty: function () {
					return l = [], a = 0, this
				},
				disable: function () {
					return l = u = e = void 0, this
				},
				disabled: function () {
					return !l
				},
				lock: function () {
					return u = void 0, e || h.disable(), this
				},
				locked: function () {
					return !u
				},
				fireWith: function (t, e) {
					return !l || n && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? u.push(e) : c(e)), this
				},
				fire: function () {
					return h.fireWith(this, arguments), this
				},
				fired: function () {
					return !!n
				}
			};
		return h
	}, K.extend({
		Deferred: function (t) {
			var e = [["resolve", "done", K.Callbacks("once memory"), "resolved"], ["reject", "fail", K.Callbacks("once memory"), "rejected"], ["notify", "progress", K.Callbacks("memory")]],
				n = "pending",
				i = {
					state: function () {
						return n
					},
					always: function () {
						return o.done(arguments).fail(arguments), this
					},
					then: function () {
						var t = arguments;
						return K.Deferred(function (n) {
							K.each(e, function (e, r) {
								var a = K.isFunction(t[e]) && t[e];
								o[r[1]](function () {
									var t = a && a.apply(this, arguments);
									t && K.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
								})
							}), t = null
						}).promise()
					},
					promise: function (t) {
						return null != t ? K.extend(t, i) : i
					}
				},
				o = {};
			return i.pipe = i.then, K.each(e, function (t, r) {
				var a = r[2],
					s = r[3];
				i[r[1]] = a.add, s && a.add(function () {
					n = s
				}, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function () {
					return o[r[0] + "With"](this === o ? i : this, arguments), this
				}, o[r[0] + "With"] = a.fireWith
			}), i.promise(o), t && t.call(o, o), o
		},
		when: function (t) {
			var e, n, i, o = 0,
				r = H.call(arguments),
				a = r.length,
				s = 1 !== a || t && K.isFunction(t.promise) ? a : 0,
				l = 1 === s ? t : K.Deferred(),
				u = function (t, n, i) {
					return function (o) {
						n[t] = this, i[t] = arguments.length > 1 ? H.call(arguments) : o, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
					}
				};
			if (a > 1)
				for (e = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && K.isFunction(r[o].promise) ? r[o].promise().done(u(o, i, r)).fail(l.reject).progress(u(o, n, e)) : --s;
			return s || l.resolveWith(i, r), l.promise()
		}
	});
	var me;
	K.fn.ready = function (t) {
		return K.ready.promise().done(t), this
	}, K.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function (t) {
			t ? K.readyWait++ : K.ready(!0)
		},
		ready: function (t) {
			(t === !0 ? --K.readyWait : K.isReady) || (K.isReady = !0, t !== !0 && --K.readyWait > 0 || (me.resolveWith(J, [K]), K.fn.triggerHandler && (K(J).triggerHandler("ready"), K(J).off("ready"))))
		}
	}), K.ready.promise = function (e) {
		return me || (me = K.Deferred(), "complete" === J.readyState ? setTimeout(K.ready) : (J.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1))), me.promise(e)
	}, K.ready.promise();
	var ge = K.access = function (t, e, n, i, o, r, a) {
		var s = 0,
			l = t.length,
			u = null == n;
		if ("object" === K.type(n)) {
			o = !0;
			for (s in n) K.access(t, e, s, n[s], !0, r, a)
		} else if (void 0 !== i && (o = !0, K.isFunction(i) || (a = !0), u && (a ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
				return u.call(K(t), n)
			})), e))
			for (; l > s; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
		return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
	};
	K.acceptData = function (t) {
		return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
	}, s.uid = 1, s.accepts = K.acceptData, s.prototype = {
		key: function (t) {
			if (!s.accepts(t)) return 0;
			var e = {},
				n = t[this.expando];
			if (!n) {
				n = s.uid++;
				try {
					e[this.expando] = {
						value: n
					}, Object.defineProperties(t, e)
				} catch (i) {
					e[this.expando] = n, K.extend(t, e)
				}
			}
			return this.cache[n] || (this.cache[n] = {}), n
		},
		set: function (t, e, n) {
			var i, o = this.key(t),
				r = this.cache[o];
			if ("string" == typeof e) r[e] = n;
			else if (K.isEmptyObject(r)) K.extend(this.cache[o], e);
			else
				for (i in e) r[i] = e[i];
			return r
		},
		get: function (t, e) {
			var n = this.cache[this.key(t)];
			return void 0 === e ? n : n[e]
		},
		access: function (t, e, n) {
			var i;
			return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, K.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
		},
		remove: function (t, e) {
			var n, i, o, r = this.key(t),
				a = this.cache[r];
			if (void 0 === e) this.cache[r] = {};
			else {
				K.isArray(e) ? i = e.concat(e.map(K.camelCase)) : (o = K.camelCase(e), e in a ? i = [e, o] : (i = o, i = i in a ? [i] : i.match(de) || [])), n = i.length;
				for (; n--;) delete a[i[n]]
			}
		},
		hasData: function (t) {
			return !K.isEmptyObject(this.cache[t[this.expando]] || {})
		},
		discard: function (t) {
			t[this.expando] && delete this.cache[t[this.expando]]
		}
	};
	var ve = new s,
		ye = new s,
		_e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		xe = /([A-Z])/g;
	K.extend({
		hasData: function (t) {
			return ye.hasData(t) || ve.hasData(t)
		},
		data: function (t, e, n) {
			return ye.access(t, e, n)
		},
		removeData: function (t, e) {
			ye.remove(t, e)
		},
		_data: function (t, e, n) {
			return ve.access(t, e, n)
		},
		_removeData: function (t, e) {
			ve.remove(t, e)
		}
	}), K.fn.extend({
		data: function (t, e) {
			var n, i, o, r = this[0],
				a = r && r.attributes;
			if (void 0 === t) {
				if (this.length && (o = ye.get(r), 1 === r.nodeType && !ve.get(r, "hasDataAttrs"))) {
					for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = K.camelCase(i.slice(5)), l(r, i, o[i])));
					ve.set(r, "hasDataAttrs", !0)
				}
				return o
			}
			return "object" == typeof t ? this.each(function () {
				ye.set(this, t)
			}) : ge(this, function (e) {
				var n, i = K.camelCase(t);
				if (r && void 0 === e) {
					if (n = ye.get(r, t), void 0 !== n) return n;
					if (n = ye.get(r, i), void 0 !== n) return n;
					if (n = l(r, i, void 0), void 0 !== n) return n
				} else this.each(function () {
					var n = ye.get(this, i);
					ye.set(this, i, e), -1 !== t.indexOf("-") && void 0 !== n && ye.set(this, t, e)
				})
			}, null, e, arguments.length > 1, null, !0)
		},
		removeData: function (t) {
			return this.each(function () {
				ye.remove(this, t)
			})
		}
	}), K.extend({
		queue: function (t, e, n) {
			var i;
			return t ? (e = (e || "fx") + "queue", i = ve.get(t, e), n && (!i || K.isArray(n) ? i = ve.access(t, e, K.makeArray(n)) : i.push(n)), i || []) : void 0
		},
		dequeue: function (t, e) {
			e = e || "fx";
			var n = K.queue(t, e),
				i = n.length,
				o = n.shift(),
				r = K._queueHooks(t, e),
				a = function () {
					K.dequeue(t, e)
				};
			"inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, a, r)), !i && r && r.empty.fire()
		},
		_queueHooks: function (t, e) {
			var n = e + "queueHooks";
			return ve.get(t, n) || ve.access(t, n, {
				empty: K.Callbacks("once memory").add(function () {
					ve.remove(t, [e + "queue", n])
				})
			})
		}
	}), K.fn.extend({
		queue: function (t, e) {
			var n = 2;
			return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? K.queue(this[0], t) : void 0 === e ? this : this.each(function () {
				var n = K.queue(this, t, e);
				K._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && K.dequeue(this, t)
			})
		},
		dequeue: function (t) {
			return this.each(function () {
				K.dequeue(this, t)
			})
		},
		clearQueue: function (t) {
			return this.queue(t || "fx", [])
		},
		promise: function (t, e) {
			var n, i = 1,
				o = K.Deferred(),
				r = this,
				a = this.length,
				s = function () {
					--i || o.resolveWith(r, [r])
				};
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = ve.get(r[a], t + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
			return s(), o.promise(e)
		}
	});
	var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		we = ["Top", "Right", "Bottom", "Left"],
		Pe = function (t, e) {
			return t = e || t, "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t)
		},
		Le = /^(?:checkbox|radio)$/i;
	! function () {
		var t = J.createDocumentFragment(),
			e = t.appendChild(J.createElement("div")),
			n = J.createElement("input");
		n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), $.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", $.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
	}();
	var Ce = "undefined";
	$.focusinBubbles = "onfocusin" in t;
	var Te = /^key/,
		Se = /^(?:mouse|pointer|contextmenu)|click/,
		Ee = /^(?:focusinfocus|focusoutblur)$/,
		De = /^([^.]*)(?:\.(.+)|)$/;
	K.event = {
		global: {},
		add: function (t, e, n, i, o) {
			var r, a, s, l, u, c, h, p, d, f, m, g = ve.get(t);
			if (g)
				for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = K.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (e) {
						return typeof K !== Ce && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
					}), e = (e || "").match(de) || [""], u = e.length; u--;) s = De.exec(e[u]) || [], d = m = s[1], f = (s[2] || "").split(".").sort(), d && (h = K.event.special[d] || {}, d = (o ? h.delegateType : h.bindType) || d, h = K.event.special[d] || {}, c = K.extend({
					type: d,
					origType: m,
					data: i,
					handler: n,
					guid: n.guid,
					selector: o,
					needsContext: o && K.expr.match.needsContext.test(o),
					namespace: f.join(".")
				}, r), (p = l[d]) || (p = l[d] = [], p.delegateCount = 0, h.setup && h.setup.call(t, i, f, a) !== !1 || t.addEventListener && t.addEventListener(d, a, !1)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), K.event.global[d] = !0)
		},
		remove: function (t, e, n, i, o) {
			var r, a, s, l, u, c, h, p, d, f, m, g = ve.hasData(t) && ve.get(t);
			if (g && (l = g.events)) {
				for (e = (e || "").match(de) || [""], u = e.length; u--;)
					if (s = De.exec(e[u]) || [], d = m = s[1], f = (s[2] || "").split(".").sort(), d) {
						for (h = K.event.special[d] || {}, d = (i ? h.delegateType : h.bindType) || d, p = l[d] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = p.length; r--;) c = p[r], !o && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(r, 1), c.selector && p.delegateCount--, h.remove && h.remove.call(t, c));
						a && !p.length && (h.teardown && h.teardown.call(t, f, g.handle) !== !1 || K.removeEvent(t, d, g.handle), delete l[d])
					} else
						for (d in l) K.event.remove(t, d + e[u], n, i, !0);
				K.isEmptyObject(l) && (delete g.handle, ve.remove(t, "events"))
			}
		},
		trigger: function (e, n, i, o) {
			var r, a, s, l, u, c, h, p = [i || J],
				d = G.call(e, "type") ? e.type : e,
				f = G.call(e, "namespace") ? e.namespace.split(".") : [];
			if (a = s = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !Ee.test(d + K.event.triggered) && (d.indexOf(".") >= 0 && (f = d.split("."), d = f.shift(), f.sort()), u = d.indexOf(":") < 0 && "on" + d, e = e[K.expando] ? e : new K.Event(d, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : K.makeArray(n, [e]), h = K.event.special[d] || {}, o || !h.trigger || h.trigger.apply(i, n) !== !1)) {
				if (!o && !h.noBubble && !K.isWindow(i)) {
					for (l = h.delegateType || d, Ee.test(l + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
					s === (i.ownerDocument || J) && p.push(s.defaultView || s.parentWindow || t)
				}
				for (r = 0;
					(a = p[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : h.bindType || d, c = (ve.get(a, "events") || {})[e.type] && ve.get(a, "handle"), c && c.apply(a, n), c = u && a[u], c && c.apply && K.acceptData(a) && (e.result = c.apply(a, n), e.result === !1 && e.preventDefault());
				return e.type = d, o || e.isDefaultPrevented() || h._default && h._default.apply(p.pop(), n) !== !1 || !K.acceptData(i) || u && K.isFunction(i[d]) && !K.isWindow(i) && (s = i[u], s && (i[u] = null), K.event.triggered = d, i[d](), K.event.triggered = void 0, s && (i[u] = s)), e.result
			}
		},
		dispatch: function (t) {
			t = K.event.fix(t);
			var e, n, i, o, r, a = [],
				s = H.call(arguments),
				l = (ve.get(this, "events") || {})[t.type] || [],
				u = K.event.special[t.type] || {};
			if (s[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
				for (a = K.event.handlers.call(this, t, l), e = 0;
					(o = a[e++]) && !t.isPropagationStopped();)
					for (t.currentTarget = o.elem, n = 0;
						(r = o.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, i = ((K.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, t), t.result
			}
		},
		handlers: function (t, e) {
			var n, i, o, r, a = [],
				s = e.delegateCount,
				l = t.target;
			if (s && l.nodeType && (!t.button || "click" !== t.type))
				for (; l !== this; l = l.parentNode || this)
					if (l.disabled !== !0 || "click" !== t.type) {
						for (i = [], n = 0; s > n; n++) r = e[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? K(o, this).index(l) >= 0 : K.find(o, this, null, [l]).length), i[o] && i.push(r);
						i.length && a.push({
							elem: l,
							handlers: i
						})
					}
			return s < e.length && a.push({
				elem: this,
				handlers: e.slice(s)
			}), a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (t, e) {
				return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (t, e) {
				var n, i, o, r = e.button;
				return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || J, i = n.documentElement, o = n.body, t.pageX = e.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
			}
		},
		fix: function (t) {
			if (t[K.expando]) return t;
			var e, n, i, o = t.type,
				r = t,
				a = this.fixHooks[o];
			for (a || (this.fixHooks[o] = a = Se.test(o) ? this.mouseHooks : Te.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new K.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
			return t.target || (t.target = J), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, r) : t
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					return this !== h() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					return this === h() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					return "checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function (t) {
					return K.nodeName(t.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		},
		simulate: function (t, e, n, i) {
			var o = K.extend(new K.Event, n, {
				type: t,
				isSimulated: !0,
				originalEvent: {}
			});
			i ? K.event.trigger(o, null, e) : K.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
		}
	}, K.removeEvent = function (t, e, n) {
		t.removeEventListener && t.removeEventListener(e, n, !1)
	}, K.Event = function (t, e) {
		return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? u : c) : this.type = t, e && K.extend(this, e), this.timeStamp = t && t.timeStamp || K.now(), this[K.expando] = !0, void 0) : new K.Event(t, e)
	}, K.Event.prototype = {
		isDefaultPrevented: c,
		isPropagationStopped: c,
		isImmediatePropagationStopped: c,
		preventDefault: function () {
			var t = this.originalEvent;
			this.isDefaultPrevented = u, t && t.preventDefault && t.preventDefault()
		},
		stopPropagation: function () {
			var t = this.originalEvent;
			this.isPropagationStopped = u, t && t.stopPropagation && t.stopPropagation()
		},
		stopImmediatePropagation: function () {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = u, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, K.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (t, e) {
		K.event.special[t] = {
			delegateType: e,
			bindType: e,
			handle: function (t) {
				var n, i = this,
					o = t.relatedTarget,
					r = t.handleObj;
				return (!o || o !== i && !K.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
			}
		}
	}), $.focusinBubbles || K.each({
		focus: "focusin",
		blur: "focusout"
	}, function (t, e) {
		var n = function (t) {
			K.event.simulate(e, t.target, K.event.fix(t), !0)
		};
		K.event.special[e] = {
			setup: function () {
				var i = this.ownerDocument || this,
					o = ve.access(i, e);
				o || i.addEventListener(t, n, !0), ve.access(i, e, (o || 0) + 1)
			},
			teardown: function () {
				var i = this.ownerDocument || this,
					o = ve.access(i, e) - 1;
				o ? ve.access(i, e, o) : (i.removeEventListener(t, n, !0), ve.remove(i, e))
			}
		}
	}), K.fn.extend({
		on: function (t, e, n, i, o) {
			var r, a;
			if ("object" == typeof t) {
				"string" != typeof e && (n = n || e, e = void 0);
				for (a in t) this.on(a, e, n, t[a], o);
				return this
			}
			if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = c;
			else if (!i) return this;
			return 1 === o && (r = i, i = function (t) {
				return K().off(t), r.apply(this, arguments)
			}, i.guid = r.guid || (r.guid = K.guid++)), this.each(function () {
				K.event.add(this, t, i, n, e)
			})
		},
		one: function (t, e, n, i) {
			return this.on(t, e, n, i, 1)
		},
		off: function (t, e, n) {
			var i, o;
			if (t && t.preventDefault && t.handleObj) return i = t.handleObj, K(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof t) {
				for (o in t) this.off(o, e, t[o]);
				return this
			}
			return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = c), this.each(function () {
				K.event.remove(this, t, n, e)
			})
		},
		trigger: function (t, e) {
			return this.each(function () {
				K.event.trigger(t, e, this)
			})
		},
		triggerHandler: function (t, e) {
			var n = this[0];
			return n ? K.event.trigger(t, e, n, !0) : void 0
		}
	});
	var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Me = /<([\w:]+)/,
		Ae = /<|&#?\w+;/,
		Ne = /<(?:script|style|link)/i,
		Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Be = /^$|\/(?:java|ecma)script/i,
		Ie = /^true\/(.*)/,
		ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Re = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, K.extend({
		clone: function (t, e, n) {
			var i, o, r, a, s = t.cloneNode(!0),
				l = K.contains(t.ownerDocument, t);
			if (!($.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t)))
				for (a = v(s), r = v(t), i = 0, o = r.length; o > i; i++) y(r[i], a[i]);
			if (e)
				if (n)
					for (r = r || v(t), a = a || v(s), i = 0, o = r.length; o > i; i++) g(r[i], a[i]);
				else g(t, s);
			return a = v(s, "script"), a.length > 0 && m(a, !l && v(t, "script")), s
		},
		buildFragment: function (t, e, n, i) {
			for (var o, r, a, s, l, u, c = e.createDocumentFragment(), h = [], p = 0, d = t.length; d > p; p++)
				if (o = t[p], o || 0 === o)
					if ("object" === K.type(o)) K.merge(h, o.nodeType ? [o] : o);
					else if (Ae.test(o)) {
				for (r = r || c.appendChild(e.createElement("div")), a = (Me.exec(o) || ["", ""])[1].toLowerCase(), s = Re[a] || Re._default, r.innerHTML = s[1] + o.replace(ke, "<$1></$2>") + s[2], u = s[0]; u--;) r = r.lastChild;
				K.merge(h, r.childNodes), r = c.firstChild, r.textContent = ""
			} else h.push(e.createTextNode(o));
			for (c.textContent = "", p = 0; o = h[p++];)
				if ((!i || -1 === K.inArray(o, i)) && (l = K.contains(o.ownerDocument, o), r = v(c.appendChild(o), "script"), l && m(r), n))
					for (u = 0; o = r[u++];) Be.test(o.type || "") && n.push(o);
			return c
		},
		cleanData: function (t) {
			for (var e, n, i, o, r = K.event.special, a = 0; void 0 !== (n = t[a]); a++) {
				if (K.acceptData(n) && (o = n[ve.expando], o && (e = ve.cache[o]))) {
					if (e.events)
						for (i in e.events) r[i] ? K.event.remove(n, i) : K.removeEvent(n, i, e.handle);
					ve.cache[o] && delete ve.cache[o]
				}
				delete ye.cache[n[ye.expando]]
			}
		}
	}), K.fn.extend({
		text: function (t) {
			return ge(this, function (t) {
				return void 0 === t ? K.text(this) : this.empty().each(function () {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
				})
			}, null, t, arguments.length)
		},
		append: function () {
			return this.domManip(arguments, function (t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = p(this, t);
					e.appendChild(t)
				}
			})
		},
		prepend: function () {
			return this.domManip(arguments, function (t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = p(this, t);
					e.insertBefore(t, e.firstChild)
				}
			})
		},
		before: function () {
			return this.domManip(arguments, function (t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function () {
			return this.domManip(arguments, function (t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		remove: function (t, e) {
			for (var n, i = t ? K.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || K.cleanData(v(n)), n.parentNode && (e && K.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function () {
			for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (K.cleanData(v(t, !1)), t.textContent = "");
			return this
		},
		clone: function (t, e) {
			return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
				return K.clone(this, t, e)
			})
		},
		html: function (t) {
			return ge(this, function (t) {
				var e = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
				if ("string" == typeof t && !Ne.test(t) && !Re[(Me.exec(t) || ["", ""])[1].toLowerCase()]) {
					t = t.replace(ke, "<$1></$2>");
					try {
						for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (K.cleanData(v(e, !1)), e.innerHTML = t);
						e = 0
					} catch (o) {}
				}
				e && this.empty().append(t)
			}, null, t, arguments.length)
		},
		replaceWith: function () {
			var t = arguments[0];
			return this.domManip(arguments, function (e) {
				t = this.parentNode, K.cleanData(v(this)), t && t.replaceChild(e, this)
			}), t && (t.length || t.nodeType) ? this : this.remove()
		},
		detach: function (t) {
			return this.remove(t, !0)
		},
		domManip: function (t, e) {
			t = q.apply([], t);
			var n, i, o, r, a, s, l = 0,
				u = this.length,
				c = this,
				h = u - 1,
				p = t[0],
				m = K.isFunction(p);
			if (m || u > 1 && "string" == typeof p && !$.checkClone && Oe.test(p)) return this.each(function (n) {
				var i = c.eq(n);
				m && (t[0] = p.call(this, n, i.html())), i.domManip(t, e)
			});
			if (u && (n = K.buildFragment(t, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
				for (o = K.map(v(n, "script"), d), r = o.length; u > l; l++) a = n, l !== h && (a = K.clone(a, !0, !0), r && K.merge(o, v(a, "script"))), e.call(this[l], a, l);
				if (r)
					for (s = o[o.length - 1].ownerDocument, K.map(o, f), l = 0; r > l; l++) a = o[l], Be.test(a.type || "") && !ve.access(a, "globalEval") && K.contains(s, a) && (a.src ? K._evalUrl && K._evalUrl(a.src) : K.globalEval(a.textContent.replace(ze, "")))
			}
			return this
		}
	}), K.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (t, e) {
		K.fn[t] = function (t) {
			for (var n, i = [], o = K(t), r = o.length - 1, a = 0; r >= a; a++) n = a === r ? this : this.clone(!0), K(o[a])[e](n), Z.apply(i, n.get());
			return this.pushStack(i)
		}
	});
	var Ue, je = {},
		Ve = /^margin/,
		Fe = new RegExp("^(" + be + ")(?!px)[a-z%]+$", "i"),
		He = function (e) {
			return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
		};
	! function () {
		function e() {
			a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", o.appendChild(r);
			var e = t.getComputedStyle(a, null);
			n = "1%" !== e.top, i = "4px" === e.width, o.removeChild(r)
		}
		var n, i, o = J.documentElement,
			r = J.createElement("div"),
			a = J.createElement("div");
		a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", $.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(a), t.getComputedStyle && K.extend($, {
			pixelPosition: function () {
				return e(), n
			},
			boxSizingReliable: function () {
				return null == i && e(), i
			},
			reliableMarginRight: function () {
				var e, n = a.appendChild(J.createElement("div"));
				return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", o.appendChild(r), e = !parseFloat(t.getComputedStyle(n, null).marginRight), o.removeChild(r), a.removeChild(n), e
			}
		}))
	}(), K.swap = function (t, e, n, i) {
		var o, r, a = {};
		for (r in e) a[r] = t.style[r], t.style[r] = e[r];
		o = n.apply(t, i || []);
		for (r in e) t.style[r] = a[r];
		return o
	};
	var qe = /^(none|table(?!-c[ea]).+)/,
		Ze = new RegExp("^(" + be + ")(.*)$", "i"),
		We = new RegExp("^([+-])=(" + be + ")", "i"),
		Xe = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ye = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ge = ["Webkit", "O", "Moz", "ms"];
	K.extend({
		cssHooks: {
			opacity: {
				get: function (t, e) {
					if (e) {
						var n = b(t, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function (t, e, n, i) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var o, r, a, s = K.camelCase(e),
					l = t.style;
				return e = K.cssProps[s] || (K.cssProps[s] = P(l, s)), a = K.cssHooks[e] || K.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(t, !1, i)) ? o : l[e] : (r = typeof n, "string" === r && (o = We.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(K.css(t, e)), r = "number"), null != n && n === n && ("number" !== r || K.cssNumber[s] || (n += "px"), $.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l[e] = n)), void 0)
			}
		},
		css: function (t, e, n, i) {
			var o, r, a, s = K.camelCase(e);
			return e = K.cssProps[s] || (K.cssProps[s] = P(t.style, s)), a = K.cssHooks[e] || K.cssHooks[s], a && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = b(t, e, i)), "normal" === o && e in Ye && (o = Ye[e]), "" === n || n ? (r = parseFloat(o), n === !0 || K.isNumeric(r) ? r || 0 : o) : o
		}
	}), K.each(["height", "width"], function (t, e) {
		K.cssHooks[e] = {
			get: function (t, n, i) {
				return n ? qe.test(K.css(t, "display")) && 0 === t.offsetWidth ? K.swap(t, Xe, function () {
					return T(t, e, i)
				}) : T(t, e, i) : void 0
			},
			set: function (t, n, i) {
				var o = i && He(t);
				return L(t, n, i ? C(t, e, i, "border-box" === K.css(t, "boxSizing", !1, o), o) : 0)
			}
		}
	}), K.cssHooks.marginRight = w($.reliableMarginRight, function (t, e) {
		return e ? K.swap(t, {
			display: "inline-block"
		}, b, [t, "marginRight"]) : void 0
	}), K.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (t, e) {
		K.cssHooks[t + e] = {
			expand: function (n) {
				for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + we[i] + e] = r[i] || r[i - 2] || r[0];
				return o
			}
		}, Ve.test(t) || (K.cssHooks[t + e].set = L)
	}), K.fn.extend({
		css: function (t, e) {
			return ge(this, function (t, e, n) {
				var i, o, r = {},
					a = 0;
				if (K.isArray(e)) {
					for (i = He(t), o = e.length; o > a; a++) r[e[a]] = K.css(t, e[a], !1, i);
					return r
				}
				return void 0 !== n ? K.style(t, e, n) : K.css(t, e)
			}, t, e, arguments.length > 1)
		},
		show: function () {
			return S(this, !0)
		},
		hide: function () {
			return S(this)
		},
		toggle: function (t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
				Pe(this) ? K(this).show() : K(this).hide()
			})
		}
	}), K.Tween = E, E.prototype = {
		constructor: E,
		init: function (t, e, n, i, o, r) {
			this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (K.cssNumber[n] ? "" : "px")
		},
		cur: function () {
			var t = E.propHooks[this.prop];
			return t && t.get ? t.get(this) : E.propHooks._default.get(this)
		},
		run: function (t) {
			var e, n = E.propHooks[this.prop];
			return this.pos = e = this.options.duration ? K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : E.propHooks._default.set(this), this
		}
	}, E.prototype.init.prototype = E.prototype, E.propHooks = {
		_default: {
			get: function (t) {
				var e;
				return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
			},
			set: function (t) {
				K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
			}
		}
	}, E.propHooks.scrollTop = E.propHooks.scrollLeft = {
		set: function (t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, K.easing = {
		linear: function (t) {
			return t
		},
		swing: function (t) {
			return .5 - Math.cos(t * Math.PI) / 2
		}
	}, K.fx = E.prototype.init, K.fx.step = {};
	var $e, Je, Qe = /^(?:toggle|show|hide)$/,
		Ke = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$", "i"),
		tn = /queueHooks$/,
		en = [A],
		nn = {
			"*": [function (t, e) {
				var n = this.createTween(t, e),
					i = n.cur(),
					o = Ke.exec(e),
					r = o && o[3] || (K.cssNumber[t] ? "" : "px"),
					a = (K.cssNumber[t] || "px" !== r && +i) && Ke.exec(K.css(n.elem, t)),
					s = 1,
					l = 20;
				if (a && a[3] !== r) {
					r = r || a[3], o = o || [], a = +i || 1;
					do s = s || ".5", a /= s, K.style(n.elem, t, a + r); while (s !== (s = n.cur() / i) && 1 !== s && --l)
				}
				return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
			}]
		};
	K.Animation = K.extend(O, {
			tweener: function (t, e) {
				K.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
				for (var n, i = 0, o = t.length; o > i; i++) n = t[i], nn[n] = nn[n] || [], nn[n].unshift(e)
			},
			prefilter: function (t, e) {
				e ? en.unshift(t) : en.push(t)
			}
		}), K.speed = function (t, e, n) {
			var i = t && "object" == typeof t ? K.extend({}, t) : {
				complete: n || !n && e || K.isFunction(t) && t,
				duration: t,
				easing: n && e || e && !K.isFunction(e) && e
			};
			return i.duration = K.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in K.fx.speeds ? K.fx.speeds[i.duration] : K.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
				K.isFunction(i.old) && i.old.call(this), i.queue && K.dequeue(this, i.queue)
			}, i
		}, K.fn.extend({
			fadeTo: function (t, e, n, i) {
				return this.filter(Pe).css("opacity", 0).show().end().animate({
					opacity: e
				}, t, n, i)
			},
			animate: function (t, e, n, i) {
				var o = K.isEmptyObject(t),
					r = K.speed(e, n, i),
					a = function () {
						var e = O(this, K.extend({}, t), r);
						(o || ve.get(this, "finish")) && e.stop(!0)
					};
				return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
			},
			stop: function (t, e, n) {
				var i = function (t) {
					var e = t.stop;
					delete t.stop, e(n)
				};
				return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
					var e = !0,
						o = null != t && t + "queueHooks",
						r = K.timers,
						a = ve.get(this);
					if (o) a[o] && a[o].stop && i(a[o]);
					else
						for (o in a) a[o] && a[o].stop && tn.test(o) && i(a[o]);
					for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
					(e || !n) && K.dequeue(this, t)
				})
			},
			finish: function (t) {
				return t !== !1 && (t = t || "fx"), this.each(function () {
					var e, n = ve.get(this),
						i = n[t + "queue"],
						o = n[t + "queueHooks"],
						r = K.timers,
						a = i ? i.length : 0;
					for (n.finish = !0, K.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
					for (e = 0; a > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
					delete n.finish
				})
			}
		}), K.each(["toggle", "show", "hide"], function (t, e) {
			var n = K.fn[e];
			K.fn[e] = function (t, i, o) {
				return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(k(e, !0), t, i, o)
			}
		}), K.each({
			slideDown: k("show"),
			slideUp: k("hide"),
			slideToggle: k("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function (t, e) {
			K.fn[t] = function (t, n, i) {
				return this.animate(e, t, n, i)
			}
		}), K.timers = [], K.fx.tick = function () {
			var t, e = 0,
				n = K.timers;
			for ($e = K.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
			n.length || K.fx.stop(), $e = void 0
		}, K.fx.timer = function (t) {
			K.timers.push(t), t() ? K.fx.start() : K.timers.pop()
		}, K.fx.interval = 13, K.fx.start = function () {
			Je || (Je = setInterval(K.fx.tick, K.fx.interval))
		}, K.fx.stop = function () {
			clearInterval(Je), Je = null
		}, K.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, K.fn.delay = function (t, e) {
			return t = K.fx ? K.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
				var i = setTimeout(e, t);
				n.stop = function () {
					clearTimeout(i)
				}
			})
		},
		function () {
			var t = J.createElement("input"),
				e = J.createElement("select"),
				n = e.appendChild(J.createElement("option"));
			t.type = "checkbox", $.checkOn = "" !== t.value, $.optSelected = n.selected, e.disabled = !0, $.optDisabled = !n.disabled, t = J.createElement("input"), t.value = "t", t.type = "radio", $.radioValue = "t" === t.value
		}();
	var on, rn, an = K.expr.attrHandle;
	K.fn.extend({
		attr: function (t, e) {
			return ge(this, K.attr, t, e, arguments.length > 1)
		},
		removeAttr: function (t) {
			return this.each(function () {
				K.removeAttr(this, t)
			})
		}
	}), K.extend({
		attr: function (t, e, n) {
			var i, o, r = t.nodeType;
			if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === Ce ? K.prop(t, e, n) : (1 === r && K.isXMLDoc(t) || (e = e.toLowerCase(), i = K.attrHooks[e] || (K.expr.match.bool.test(e) ? rn : on)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : (o = K.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : (K.removeAttr(t, e), void 0))
		},
		removeAttr: function (t, e) {
			var n, i, o = 0,
				r = e && e.match(de);
			if (r && 1 === t.nodeType)
				for (; n = r[o++];) i = K.propFix[n] || n, K.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
		},
		attrHooks: {
			type: {
				set: function (t, e) {
					if (!$.radioValue && "radio" === e && K.nodeName(t, "input")) {
						var n = t.value;
						return t.setAttribute("type", e), n && (t.value = n), e
					}
				}
			}
		}
	}), rn = {
		set: function (t, e, n) {
			return e === !1 ? K.removeAttr(t, n) : t.setAttribute(n, n), n
		}
	}, K.each(K.expr.match.bool.source.match(/\w+/g), function (t, e) {
		var n = an[e] || K.find.attr;
		an[e] = function (t, e, i) {
			var o, r;
			return i || (r = an[e], an[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, an[e] = r), o
		}
	});
	var sn = /^(?:input|select|textarea|button)$/i;
	K.fn.extend({
		prop: function (t, e) {
			return ge(this, K.prop, t, e, arguments.length > 1)
		},
		removeProp: function (t) {
			return this.each(function () {
				delete this[K.propFix[t] || t]
			})
		}
	}), K.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function (t, e, n) {
			var i, o, r, a = t.nodeType;
			if (t && 3 !== a && 8 !== a && 2 !== a) return r = 1 !== a || !K.isXMLDoc(t), r && (e = K.propFix[e] || e, o = K.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
		},
		propHooks: {
			tabIndex: {
				get: function (t) {
					return t.hasAttribute("tabindex") || sn.test(t.nodeName) || t.href ? t.tabIndex : -1
				}
			}
		}
	}), $.optSelected || (K.propHooks.selected = {
		get: function (t) {
			var e = t.parentNode;
			return e && e.parentNode && e.parentNode.selectedIndex, null
		}
	}), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		K.propFix[this.toLowerCase()] = this
	});
	var ln = /[\t\r\n\f]/g;
	K.fn.extend({
		addClass: function (t) {
			var e, n, i, o, r, a, s = "string" == typeof t && t,
				l = 0,
				u = this.length;
			if (K.isFunction(t)) return this.each(function (e) {
				K(this).addClass(t.call(this, e, this.className))
			});
			if (s)
				for (e = (t || "").match(de) || []; u > l; l++)
					if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : " ")) {
						for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
						a = K.trim(i), n.className !== a && (n.className = a)
					}
			return this
		},
		removeClass: function (t) {
			var e, n, i, o, r, a, s = 0 === arguments.length || "string" == typeof t && t,
				l = 0,
				u = this.length;
			if (K.isFunction(t)) return this.each(function (e) {
				K(this).removeClass(t.call(this, e, this.className))
			});
			if (s)
				for (e = (t || "").match(de) || []; u > l; l++)
					if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : "")) {
						for (r = 0; o = e[r++];)
							for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
						a = t ? K.trim(i) : "", n.className !== a && (n.className = a)
					}
			return this
		},
		toggleClass: function (t, e) {
			var n = typeof t;
			return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : K.isFunction(t) ? this.each(function (n) {
				K(this).toggleClass(t.call(this, n, this.className, e), e)
			}) : this.each(function () {
				if ("string" === n)
					for (var e, i = 0, o = K(this), r = t.match(de) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
				else(n === Ce || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ve.get(this, "__className__") || "")
			})
		},
		hasClass: function (t) {
			for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ln, " ").indexOf(e) >= 0) return !0;
			return !1
		}
	});
	var un = /\r/g;
	K.fn.extend({
		val: function (t) {
			var e, n, i, o = this[0]; {
				if (arguments.length) return i = K.isFunction(t), this.each(function (n) {
					var o;
					1 === this.nodeType && (o = i ? t.call(this, n, K(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : K.isArray(o) && (o = K.map(o, function (t) {
						return null == t ? "" : t + ""
					})), e = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
				});
				if (o) return e = K.valHooks[o.type] || K.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(un, "") : null == n ? "" : n)
			}
		}
	}), K.extend({
		valHooks: {
			option: {
				get: function (t) {
					var e = K.find.attr(t, "value");
					return null != e ? e : K.trim(K.text(t))
				}
			},
			select: {
				get: function (t) {
					for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
						if (n = i[l], !(!n.selected && l !== o || ($.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && K.nodeName(n.parentNode, "optgroup"))) {
							if (e = K(n).val(), r) return e;
							a.push(e)
						}
					return a
				},
				set: function (t, e) {
					for (var n, i, o = t.options, r = K.makeArray(e), a = o.length; a--;) i = o[a], (i.selected = K.inArray(i.value, r) >= 0) && (n = !0);
					return n || (t.selectedIndex = -1), r
				}
			}
		}
	}), K.each(["radio", "checkbox"], function () {
		K.valHooks[this] = {
			set: function (t, e) {
				return K.isArray(e) ? t.checked = K.inArray(K(t).val(), e) >= 0 : void 0
			}
		}, $.checkOn || (K.valHooks[this].get = function (t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	}), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
		K.fn[e] = function (t, n) {
			return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
		}
	}), K.fn.extend({
		hover: function (t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		},
		bind: function (t, e, n) {
			return this.on(t, null, e, n)
		},
		unbind: function (t, e) {
			return this.off(t, null, e)
		},
		delegate: function (t, e, n, i) {
			return this.on(e, t, n, i)
		},
		undelegate: function (t, e, n) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
		}
	});
	var cn = K.now(),
		hn = /\?/;
	K.parseJSON = function (t) {
		return JSON.parse(t + "")
	}, K.parseXML = function (t) {
		var e, n;
		if (!t || "string" != typeof t) return null;
		try {
			n = new DOMParser, e = n.parseFromString(t, "text/xml")
		} catch (i) {
			e = void 0
		}
		return (!e || e.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + t), e
	};
	var pn = /#.*$/,
		dn = /([?&])_=[^&]*/,
		fn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		gn = /^(?:GET|HEAD)$/,
		vn = /^\/\//,
		yn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		_n = {},
		xn = {},
		bn = "*/".concat("*"),
		wn = t.location.href,
		Pn = yn.exec(wn.toLowerCase()) || [];
	K.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: wn,
			type: "GET",
			isLocal: mn.test(Pn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": bn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": K.parseJSON,
				"text xml": K.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (t, e) {
			return e ? z(z(t, K.ajaxSettings), e) : z(K.ajaxSettings, t)
		},
		ajaxPrefilter: B(_n),
		ajaxTransport: B(xn),
		ajax: function (t, e) {
			function n(t, e, n, a) {
				var l, c, v, y, x, w = e;
				2 !== _ && (_ = 2, s && clearTimeout(s), i = void 0, r = a || "", b.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, n && (y = R(h, b, n)), y = U(h, y, b, l), l ? (h.ifModified && (x = b.getResponseHeader("Last-Modified"), x && (K.lastModified[o] = x), x = b.getResponseHeader("etag"), x && (K.etag[o] = x)), 204 === t || "HEAD" === h.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, c = y.data, v = y.error, l = !v)) : (v = w, (t || !w) && (w = "error", 0 > t && (t = 0))), b.status = t, b.statusText = (e || w) + "", l ? f.resolveWith(p, [c, w, b]) : f.rejectWith(p, [b, w, v]), b.statusCode(g), g = void 0, u && d.trigger(l ? "ajaxSuccess" : "ajaxError", [b, h, l ? c : v]), m.fireWith(p, [b, w]), u && (d.trigger("ajaxComplete", [b, h]), --K.active || K.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (e = t, t = void 0), e = e || {};
			var i, o, r, a, s, l, u, c, h = K.ajaxSetup({}, e),
				p = h.context || h,
				d = h.context && (p.nodeType || p.jquery) ? K(p) : K.event,
				f = K.Deferred(),
				m = K.Callbacks("once memory"),
				g = h.statusCode || {},
				v = {},
				y = {},
				_ = 0,
				x = "canceled",
				b = {
					readyState: 0,
					getResponseHeader: function (t) {
						var e;
						if (2 === _) {
							if (!a)
								for (a = {}; e = fn.exec(r);) a[e[1].toLowerCase()] = e[2];
							e = a[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function () {
						return 2 === _ ? r : null
					},
					setRequestHeader: function (t, e) {
						var n = t.toLowerCase();
						return _ || (t = y[n] = y[n] || t, v[t] = e), this
					},
					overrideMimeType: function (t) {
						return _ || (h.mimeType = t), this
					},
					statusCode: function (t) {
						var e;
						if (t)
							if (2 > _)
								for (e in t) g[e] = [g[e], t[e]];
							else b.always(t[b.status]);
						return this
					},
					abort: function (t) {
						var e = t || x;
						return i && i.abort(e), n(0, e), this
					}
				};
			if (f.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, h.url = ((t || h.url || wn) + "").replace(pn, "").replace(vn, Pn[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = K.trim(h.dataType || "*").toLowerCase().match(de) || [""], null == h.crossDomain && (l = yn.exec(h.url.toLowerCase()), h.crossDomain = !(!l || l[1] === Pn[1] && l[2] === Pn[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Pn[3] || ("http:" === Pn[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = K.param(h.data, h.traditional)), I(_n, h, e, b), 2 === _) return b;
			u = K.event && h.global, u && 0 === K.active++ && K.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !gn.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (hn.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = dn.test(o) ? o.replace(dn, "$1_=" + cn++) : o + (hn.test(o) ? "&" : "?") + "_=" + cn++)), h.ifModified && (K.lastModified[o] && b.setRequestHeader("If-Modified-Since", K.lastModified[o]), K.etag[o] && b.setRequestHeader("If-None-Match", K.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && b.setRequestHeader("Content-Type", h.contentType), b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + bn + "; q=0.01" : "") : h.accepts["*"]);
			for (c in h.headers) b.setRequestHeader(c, h.headers[c]);
			if (h.beforeSend && (h.beforeSend.call(p, b, h) === !1 || 2 === _)) return b.abort();
			x = "abort";
			for (c in {
					success: 1,
					error: 1,
					complete: 1
				}) b[c](h[c]);
			if (i = I(xn, h, e, b)) {
				b.readyState = 1, u && d.trigger("ajaxSend", [b, h]), h.async && h.timeout > 0 && (s = setTimeout(function () {
					b.abort("timeout")
				}, h.timeout));
				try {
					_ = 1, i.send(v, n)
				} catch (w) {
					if (!(2 > _)) throw w;
					n(-1, w)
				}
			} else n(-1, "No Transport");
			return b
		},
		getJSON: function (t, e, n) {
			return K.get(t, e, n, "json")
		},
		getScript: function (t, e) {
			return K.get(t, void 0, e, "script")
		}
	}), K.each(["get", "post"], function (t, e) {
		K[e] = function (t, n, i, o) {
			return K.isFunction(n) && (o = o || i, i = n, n = void 0), K.ajax({
				url: t,
				type: e,
				dataType: o,
				data: n,
				success: i
			})
		}
	}), K._evalUrl = function (t) {
		return K.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, K.fn.extend({
		wrapAll: function (t) {
			var e;
			return K.isFunction(t) ? this.each(function (e) {
				K(this).wrapAll(t.call(this, e))
			}) : (this[0] && (e = K(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
				for (var t = this; t.firstElementChild;) t = t.firstElementChild;
				return t
			}).append(this)), this)
		},
		wrapInner: function (t) {
			return K.isFunction(t) ? this.each(function (e) {
				K(this).wrapInner(t.call(this, e))
			}) : this.each(function () {
				var e = K(this),
					n = e.contents();
				n.length ? n.wrapAll(t) : e.append(t)
			})
		},
		wrap: function (t) {
			var e = K.isFunction(t);
			return this.each(function (n) {
				K(this).wrapAll(e ? t.call(this, n) : t)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
			}).end()
		}
	}), K.expr.filters.hidden = function (t) {
		return t.offsetWidth <= 0 && t.offsetHeight <= 0
	}, K.expr.filters.visible = function (t) {
		return !K.expr.filters.hidden(t)
	};
	var Ln = /%20/g,
		Cn = /\[\]$/,
		Tn = /\r?\n/g,
		Sn = /^(?:submit|button|image|reset|file)$/i,
		En = /^(?:input|select|textarea|keygen)/i;
	K.param = function (t, e) {
		var n, i = [],
			o = function (t, e) {
				e = K.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
			};
		if (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(t) || t.jquery && !K.isPlainObject(t)) K.each(t, function () {
			o(this.name, this.value)
		});
		else
			for (n in t) j(n, t[n], e, o);
		return i.join("&").replace(Ln, "+")
	}, K.fn.extend({
		serialize: function () {
			return K.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var t = K.prop(this, "elements");
				return t ? K.makeArray(t) : this
			}).filter(function () {
				var t = this.type;
				return this.name && !K(this).is(":disabled") && En.test(this.nodeName) && !Sn.test(t) && (this.checked || !Le.test(t))
			}).map(function (t, e) {
				var n = K(this).val();
				return null == n ? null : K.isArray(n) ? K.map(n, function (t) {
					return {
						name: e.name,
						value: t.replace(Tn, "\r\n")
					}
				}) : {
					name: e.name,
					value: n.replace(Tn, "\r\n")
				}
			}).get()
		}
	}), K.ajaxSettings.xhr = function () {
		try {
			return new XMLHttpRequest
		} catch (t) {}
	};
	var Dn = 0,
		kn = {},
		Mn = {
			0: 200,
			1223: 204
		},
		An = K.ajaxSettings.xhr();
	t.attachEvent && t.attachEvent("onunload", function () {
		for (var t in kn) kn[t]()
	}), $.cors = !!An && "withCredentials" in An, $.ajax = An = !!An, K.ajaxTransport(function (t) {
		var e;
		return $.cors || An && !t.crossDomain ? {
			send: function (n, i) {
				var o, r = t.xhr(),
					a = ++Dn;
				if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for (o in t.xhrFields) r[o] = t.xhrFields[o];
				t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
				for (o in n) r.setRequestHeader(o, n[o]);
				e = function (t) {
					return function () {
						e && (delete kn[a], e = r.onload = r.onerror = null, "abort" === t ? r.abort() : "error" === t ? i(r.status, r.statusText) : i(Mn[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
							text: r.responseText
						} : void 0, r.getAllResponseHeaders()))
					}
				}, r.onload = e(), r.onerror = e("error"), e = kn[a] = e("abort");
				try {
					r.send(t.hasContent && t.data || null)
				} catch (s) {
					if (e) throw s
				}
			},
			abort: function () {
				e && e()
			}
		} : void 0
	}), K.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function (t) {
				return K.globalEval(t), t
			}
		}
	}), K.ajaxPrefilter("script", function (t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
	}), K.ajaxTransport("script", function (t) {
		if (t.crossDomain) {
			var e, n;
			return {
				send: function (i, o) {
					e = K("<script>").prop({
						async: !0,
						charset: t.scriptCharset,
						src: t.url
					}).on("load error", n = function (t) {
						e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
					}), J.head.appendChild(e[0])
				},
				abort: function () {
					n && n()
				}
			}
		}
	});
	var Nn = [],
		On = /(=)\?(?=&|$)|\?\?/;
	K.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var t = Nn.pop() || K.expando + "_" + cn++;
			return this[t] = !0, t
		}
	}), K.ajaxPrefilter("json jsonp", function (e, n, i) {
		var o, r, a, s = e.jsonp !== !1 && (On.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && On.test(e.data) && "data");
		return s || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(On, "$1" + o) : e.jsonp !== !1 && (e.url += (hn.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
			return a || K.error(o + " was not called"), a[0]
		}, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
			a = arguments
		}, i.always(function () {
			t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, Nn.push(o)), a && K.isFunction(r) && r(a[0]), a = r = void 0
		}), "script") : void 0
	}), K.parseHTML = function (t, e, n) {
		if (!t || "string" != typeof t) return null;
		"boolean" == typeof e && (n = e, e = !1), e = e || J;
		var i = ae.exec(t),
			o = !n && [];
		return i ? [e.createElement(i[1])] : (i = K.buildFragment([t], e, o), o && o.length && K(o).remove(), K.merge([], i.childNodes))
	};
	var Bn = K.fn.load;
	K.fn.load = function (t, e, n) {
		if ("string" != typeof t && Bn) return Bn.apply(this, arguments);
		var i, o, r, a = this,
			s = t.indexOf(" ");
		return s >= 0 && (i = K.trim(t.slice(s)), t = t.slice(0, s)), K.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && K.ajax({
			url: t,
			type: o,
			dataType: "html",
			data: e
		}).done(function (t) {
			r = arguments, a.html(i ? K("<div>").append(K.parseHTML(t)).find(i) : t)
		}).complete(n && function (t, e) {
			a.each(n, r || [t.responseText, e, t])
		}), this
	}, K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
		K.fn[e] = function (t) {
			return this.on(e, t)
		}
	}), K.expr.filters.animated = function (t) {
		return K.grep(K.timers, function (e) {
			return t === e.elem
		}).length
	};
	var In = t.document.documentElement;
	K.offset = {
		setOffset: function (t, e, n) {
			var i, o, r, a, s, l, u, c = K.css(t, "position"),
				h = K(t),
				p = {};
			"static" === c && (t.style.position = "relative"), s = h.offset(), r = K.css(t, "top"), l = K.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, u ? (i = h.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), K.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (p.top = e.top - s.top + a), null != e.left && (p.left = e.left - s.left + o), "using" in e ? e.using.call(t, p) : h.css(p)
		}
	}, K.fn.extend({
		offset: function (t) {
			if (arguments.length) return void 0 === t ? this : this.each(function (e) {
				K.offset.setOffset(this, t, e)
			});
			var e, n, i = this[0],
				o = {
					top: 0,
					left: 0
				},
				r = i && i.ownerDocument;
			if (r) return e = r.documentElement, K.contains(e, i) ? (typeof i.getBoundingClientRect !== Ce && (o = i.getBoundingClientRect()), n = V(r), {
				top: o.top + n.pageYOffset - e.clientTop,
				left: o.left + n.pageXOffset - e.clientLeft
			}) : o
		},
		position: function () {
			if (this[0]) {
				var t, e, n = this[0],
					i = {
						top: 0,
						left: 0
					};
				return "fixed" === K.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), K.nodeName(t[0], "html") || (i = t.offset()), i.top += K.css(t[0], "borderTopWidth", !0), i.left += K.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - i.top - K.css(n, "marginTop", !0),
					left: e.left - i.left - K.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var t = this.offsetParent || In; t && !K.nodeName(t, "html") && "static" === K.css(t, "position");) t = t.offsetParent;
				return t || In
			})
		}
	}), K.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (e, n) {
		var i = "pageYOffset" === n;
		K.fn[e] = function (o) {
			return ge(this, function (e, o, r) {
				var a = V(e);
				return void 0 === r ? a ? a[n] : e[o] : (a ? a.scrollTo(i ? t.pageXOffset : r, i ? r : t.pageYOffset) : e[o] = r, void 0)
			}, e, o, arguments.length, null)
		}
	}), K.each(["top", "left"], function (t, e) {
		K.cssHooks[e] = w($.pixelPosition, function (t, n) {
			return n ? (n = b(t, e), Fe.test(n) ? K(t).position()[e] + "px" : n) : void 0
		})
	}), K.each({
		Height: "height",
		Width: "width"
	}, function (t, e) {
		K.each({
			padding: "inner" + t,
			content: e,
			"": "outer" + t
		}, function (n, i) {
			K.fn[i] = function (i, o) {
				var r = arguments.length && (n || "boolean" != typeof i),
					a = n || (i === !0 || o === !0 ? "margin" : "border");
				return ge(this, function (e, n, i) {
					var o;
					return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? K.css(e, n, a) : K.style(e, n, i, a)
				}, e, r ? i : void 0, r, null)
			}
		})
	}), K.fn.size = function () {
		return this.length
	}, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return K
	});
	var zn = t.jQuery,
		Rn = t.$;
	return K.noConflict = function (e) {
		return t.$ === K && (t.$ = Rn), e && t.jQuery === K && (t.jQuery = zn), K
	}, typeof e === Ce && (t.jQuery = t.$ = K), K
}), ! function (t) {
	var e, n, i = "0.4.2",
		o = "hasOwnProperty",
		r = /[\.\/]/,
		a = /\s*,\s*/,
		s = "*",
		l = function (t, e) {
			return t - e
		},
		u = {
			n: {}
		},
		c = function () {
			for (var t = 0, e = this.length; e > t; t++)
				if ("undefined" != typeof this[t]) return this[t]
		},
		h = function () {
			for (var t = this.length; --t;)
				if ("undefined" != typeof this[t]) return this[t]
		},
		p = function (t, i) {
			t = String(t);
			var o, r = n,
				a = Array.prototype.slice.call(arguments, 2),
				s = p.listeners(t),
				u = 0,
				d = [],
				f = {},
				m = [],
				g = e;
			m.firstDefined = c, m.lastDefined = h, e = t, n = 0;
			for (var v = 0, y = s.length; y > v; v++) "zIndex" in s[v] && (d.push(s[v].zIndex), s[v].zIndex < 0 && (f[s[v].zIndex] = s[v]));
			for (d.sort(l); d[u] < 0;)
				if (o = f[d[u++]], m.push(o.apply(i, a)), n) return n = r, m;
			for (v = 0; y > v; v++)
				if (o = s[v], "zIndex" in o)
					if (o.zIndex == d[u]) {
						if (m.push(o.apply(i, a)), n) break;
						do
							if (u++, o = f[d[u]], o && m.push(o.apply(i, a)), n) break;
						while (o)
					} else f[o.zIndex] = o;
			else if (m.push(o.apply(i, a)), n) break;
			return n = r, e = g, m
		};
	p._events = u, p.listeners = function (t) {
		var e, n, i, o, a, l, c, h, p = t.split(r),
			d = u,
			f = [d],
			m = [];
		for (o = 0, a = p.length; a > o; o++) {
			for (h = [], l = 0, c = f.length; c > l; l++)
				for (d = f[l].n, n = [d[p[o]], d[s]], i = 2; i--;) e = n[i], e && (h.push(e), m = m.concat(e.f || []));
			f = h
		}
		return m
	}, p.on = function (t, e) {
		if (t = String(t), "function" != typeof e) return function () {};
		for (var n = t.split(a), i = 0, o = n.length; o > i; i++) ! function (t) {
			for (var n, i = t.split(r), o = u, a = 0, s = i.length; s > a; a++) o = o.n, o = o.hasOwnProperty(i[a]) && o[i[a]] || (o[i[a]] = {
				n: {}
			});
			for (o.f = o.f || [], a = 0, s = o.f.length; s > a; a++)
				if (o.f[a] == e) {
					n = !0;
					break
				}!n && o.f.push(e)
		}(n[i]);
		return function (t) {
			+t == +t && (e.zIndex = +t)
		}
	}, p.f = function (t) {
		var e = [].slice.call(arguments, 1);
		return function () {
			p.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
		}
	}, p.stop = function () {
		n = 1
	}, p.nt = function (t) {
		return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
	}, p.nts = function () {
		return e.split(r)
	}, p.off = p.unbind = function (t, e) {
		if (!t) return void(p._events = u = {
			n: {}
		});
		var n = t.split(a);
		if (n.length > 1)
			for (var i = 0, l = n.length; l > i; i++) p.off(n[i], e);
		else {
			n = t.split(r);
			var c, h, d, i, l, f, m, g = [u];
			for (i = 0, l = n.length; l > i; i++)
				for (f = 0; f < g.length; f += d.length - 2) {
					if (d = [f, 1], c = g[f].n, n[i] != s) c[n[i]] && d.push(c[n[i]]);
					else
						for (h in c) c[o](h) && d.push(c[h]);
					g.splice.apply(g, d)
				}
			for (i = 0, l = g.length; l > i; i++)
				for (c = g[i]; c.n;) {
					if (e) {
						if (c.f) {
							for (f = 0, m = c.f.length; m > f; f++)
								if (c.f[f] == e) {
									c.f.splice(f, 1);
									break
								}!c.f.length && delete c.f
						}
						for (h in c.n)
							if (c.n[o](h) && c.n[h].f) {
								var v = c.n[h].f;
								for (f = 0, m = v.length; m > f; f++)
									if (v[f] == e) {
										v.splice(f, 1);
										break
									}!v.length && delete c.n[h].f
							}
					} else {
						delete c.f;
						for (h in c.n) c.n[o](h) && c.n[h].f && delete c.n[h].f
					}
					c = c.n
				}
		}
	}, p.once = function (t, e) {
		var n = function () {
			return p.unbind(t, n), e.apply(this, arguments)
		};
		return p.on(t, n)
	}, p.version = i, p.toString = function () {
		return "You are running Eve " + i
	}, "undefined" != typeof module && module.exports ? module.exports = p : "function" == typeof define && define.amd ? define("eve", [], function () {
		return p
	}) : t.eve = p
}(this),
function (t, e) {
	"function" == typeof define && define.amd ? define(["eve"], function (n) {
		return e(t, n)
	}) : e(t, t.eve)
}(this, function (t, e) {
	var n = function (e) {
			var n = {},
				i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (t) {
					setTimeout(t, 16)
				},
				o = Array.isArray || function (t) {
					return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
				},
				r = 0,
				a = "M" + (+new Date).toString(36),
				s = function () {
					return a + (r++).toString(36)
				},
				l = Date.now || function () {
					return +new Date
				},
				u = function (t) {
					var e = this;
					if (null == t) return e.s;
					var n = e.s - t;
					e.b += e.dur * n, e.B += e.dur * n, e.s = t
				},
				c = function (t) {
					var e = this;
					return null == t ? e.spd : void(e.spd = t)
				},
				h = function (t) {
					var e = this;
					return null == t ? e.dur : (e.s = e.s * t / e.dur, void(e.dur = t))
				},
				p = function () {
					var t = this;
					delete n[t.id], t.update(), e("mina.stop." + t.id, t)
				},
				d = function () {
					var t = this;
					t.pdif || (delete n[t.id], t.update(), t.pdif = t.get() - t.b)
				},
				f = function () {
					var t = this;
					t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, n[t.id] = t)
				},
				m = function () {
					var t, e = this;
					if (o(e.start)) {
						t = [];
						for (var n = 0, i = e.start.length; i > n; n++) t[n] = +e.start[n] + (e.end[n] - e.start[n]) * e.easing(e.s)
					} else t = +e.start + (e.end - e.start) * e.easing(e.s);
					e.set(t)
				},
				g = function () {
					var t = 0;
					for (var o in n)
						if (n.hasOwnProperty(o)) {
							var r = n[o],
								a = r.get();
							t++, r.s = (a - r.b) / (r.dur / r.spd), r.s >= 1 && (delete n[o], r.s = 1, t--, function (t) {
								setTimeout(function () {
									e("mina.finish." + t.id, t)
								})
							}(r)), r.update()
						}
					t && i(g)
				},
				v = function (t, e, o, r, a, l, y) {
					var _ = {
						id: s(),
						start: t,
						end: e,
						b: o,
						s: 0,
						dur: r - o,
						spd: 1,
						get: a,
						set: l,
						easing: y || v.linear,
						status: u,
						speed: c,
						duration: h,
						stop: p,
						pause: d,
						resume: f,
						update: m
					};
					n[_.id] = _;
					var x, b = 0;
					for (x in n)
						if (n.hasOwnProperty(x) && (b++, 2 == b)) break;
					return 1 == b && i(g), _
				};
			return v.time = l, v.getById = function (t) {
				return n[t] || null
			}, v.linear = function (t) {
				return t
			}, v.easeout = function (t) {
				return Math.pow(t, 1.7)
			}, v.easein = function (t) {
				return Math.pow(t, .48)
			}, v.easeinout = function (t) {
				if (1 == t) return 1;
				if (0 == t) return 0;
				var e = .48 - t / 1.04,
					n = Math.sqrt(.1734 + e * e),
					i = n - e,
					o = Math.pow(Math.abs(i), 1 / 3) * (0 > i ? -1 : 1),
					r = -n - e,
					a = Math.pow(Math.abs(r), 1 / 3) * (0 > r ? -1 : 1),
					s = o + a + .5;
				return 3 * (1 - s) * s * s + s * s * s
			}, v.backin = function (t) {
				if (1 == t) return 1;
				var e = 1.70158;
				return t * t * ((e + 1) * t - e)
			}, v.backout = function (t) {
				if (0 == t) return 0;
				t -= 1;
				var e = 1.70158;
				return t * t * ((e + 1) * t + e) + 1
			}, v.elastic = function (t) {
				return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin(2 * (t - .075) * Math.PI / .3) + 1
			}, v.bounce = function (t) {
				var e, n = 7.5625,
					i = 2.75;
				return 1 / i > t ? e = n * t * t : 2 / i > t ? (t -= 1.5 / i, e = n * t * t + .75) : 2.5 / i > t ? (t -= 2.25 / i, e = n * t * t + .9375) : (t -= 2.625 / i, e = n * t * t + .984375), e
			}, t.mina = v, v
		}("undefined" == typeof e ? function () {} : e),
		i = function () {
			function i(t, e) {
				if (t) {
					if (t.tagName) return L(t);
					if (r(t, "array") && i.set) return i.set.apply(i, t);
					if (t instanceof x) return t;
					if (null == e) return t = C.doc.querySelector(t), L(t)
				}
				return t = null == t ? "100%" : t, e = null == e ? "100%" : e, new P(t, e)
			}

			function o(t, e) {
				if (e) {
					if ("#text" == t && (t = C.doc.createTextNode(e.text || "")), "string" == typeof t && (t = o(t)), "string" == typeof e) return "xlink:" == e.substring(0, 6) ? t.getAttributeNS(Y, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(G, e.substring(4)) : t.getAttribute(e);
					for (var n in e)
						if (e[T](n)) {
							var i = S(e[n]);
							i ? "xlink:" == n.substring(0, 6) ? t.setAttributeNS(Y, n.substring(6), i) : "xml:" == n.substring(0, 4) ? t.setAttributeNS(G, n.substring(4), i) : t.setAttribute(n, i) : t.removeAttribute(n)
						}
				} else t = C.doc.createElementNS(G, t);
				return t
			}

			function r(t, e) {
				return e = S.prototype.toLowerCase.call(e), "finite" == e ? isFinite(t) : "array" == e && (t instanceof Array || Array.isArray && Array.isArray(t)) ? !0 : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || z.call(t).slice(8, -1).toLowerCase() == e
			}

			function a(t) {
				if ("function" == typeof t || Object(t) !== t) return t;
				var e = new t.constructor;
				for (var n in t) t[T](n) && (e[n] = a(t[n]));
				return e
			}

			function s(t, e) {
				for (var n = 0, i = t.length; i > n; n++)
					if (t[n] === e) return t.push(t.splice(n, 1)[0])
			}

			function l(t, e, n) {
				function i() {
					var o = Array.prototype.slice.call(arguments, 0),
						r = o.join("␀"),
						a = i.cache = i.cache || {},
						l = i.count = i.count || [];
					return a[T](r) ? (s(l, r), n ? n(a[r]) : a[r]) : (l.length >= 1e3 && delete a[l.shift()], l.push(r), a[r] = t.apply(e, o), n ? n(a[r]) : a[r])
				}
				return i
			}

			function u(t, e, n, i, o, r) {
				if (null == o) {
					var a = t - n,
						s = e - i;
					return a || s ? (180 + 180 * k.atan2(-s, -a) / O + 360) % 360 : 0
				}
				return u(t, e, o, r) - u(n, i, o, r)
			}

			function c(t) {
				return t % 360 * O / 180
			}

			function h(t) {
				return 180 * t / O % 360
			}

			function p(t) {
				var e = [];
				return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (t, n, i) {
					return i = i.split(/\s*,\s*|\s+/), "rotate" == n && 1 == i.length && i.push(0, 0), "scale" == n && (i.length > 2 ? i = i.slice(0, 2) : 2 == i.length && i.push(0, 0), 1 == i.length && i.push(i[0], 0, 0)), e.push("skewX" == n ? ["m", 1, 0, k.tan(c(i[0])), 1, 0, 0] : "skewY" == n ? ["m", 1, k.tan(c(i[0])), 0, 1, 0, 0] : [n.charAt(0)].concat(i)), t
				}), e
			}

			function d(t, e) {
				var n = oe(t),
					o = new i.Matrix;
				if (n)
					for (var r = 0, a = n.length; a > r; r++) {
						var s, l, u, c, h, p = n[r],
							d = p.length,
							f = S(p[0]).toLowerCase(),
							m = p[0] != f,
							g = m ? o.invert() : 0;
						"t" == f && 2 == d ? o.translate(p[1], 0) : "t" == f && 3 == d ? m ? (s = g.x(0, 0), l = g.y(0, 0), u = g.x(p[1], p[2]), c = g.y(p[1], p[2]), o.translate(u - s, c - l)) : o.translate(p[1], p[2]) : "r" == f ? 2 == d ? (h = h || e, o.rotate(p[1], h.x + h.width / 2, h.y + h.height / 2)) : 4 == d && (m ? (u = g.x(p[2], p[3]), c = g.y(p[2], p[3]), o.rotate(p[1], u, c)) : o.rotate(p[1], p[2], p[3])) : "s" == f ? 2 == d || 3 == d ? (h = h || e, o.scale(p[1], p[d - 1], h.x + h.width / 2, h.y + h.height / 2)) : 4 == d ? m ? (u = g.x(p[2], p[3]), c = g.y(p[2], p[3]), o.scale(p[1], p[1], u, c)) : o.scale(p[1], p[1], p[2], p[3]) : 5 == d && (m ? (u = g.x(p[3], p[4]), c = g.y(p[3], p[4]), o.scale(p[1], p[2], u, c)) : o.scale(p[1], p[2], p[3], p[4])) : "m" == f && 7 == d && o.add(p[1], p[2], p[3], p[4], p[5], p[6])
					}
				return o
			}

			function f(t, e) {
				if (null == e) {
					var n = !0;
					if (e = t.node.getAttribute("linearGradient" == t.type || "radialGradient" == t.type ? "gradientTransform" : "pattern" == t.type ? "patternTransform" : "transform"), !e) return new i.Matrix;
					e = p(e)
				} else e = i._.rgTransform.test(e) ? S(e).replace(/\.{3}|\u2026/g, t._.transform || B) : p(e), r(e, "array") && (e = i.path ? i.path.toString.call(e) : S(e)), t._.transform = e;
				var o = d(e, t.getBBox(1));
				return n ? o : void(t.matrix = o)
			}

			function m(t) {
				var e = t.node.ownerSVGElement && L(t.node.ownerSVGElement) || t.node.parentNode && L(t.node.parentNode) || i.select("svg") || i(0, 0),
					n = e.select("defs"),
					o = null == n ? !1 : n.node;
				return o || (o = w("defs", e.node).node), o
			}

			function v(t) {
				return t.node.ownerSVGElement && L(t.node.ownerSVGElement) || i.select("svg")
			}

			function y(t, e, n) {
				function i(t) {
					if (null == t) return B;
					if (t == +t) return t;
					o(u, {
						width: t
					});
					try {
						return u.getBBox().width
					} catch (e) {
						return 0
					}
				}

				function r(t) {
					if (null == t) return B;
					if (t == +t) return t;
					o(u, {
						height: t
					});
					try {
						return u.getBBox().height
					} catch (e) {
						return 0
					}
				}

				function a(i, o) {
					null == e ? l[i] = o(t.attr(i) || 0) : i == e && (l = o(null == n ? t.attr(i) || 0 : n))
				}
				var s = v(t).node,
					l = {},
					u = s.querySelector(".svg---mgr");
				switch (u || (u = o("rect"), o(u, {
					x: -9e9,
					y: -9e9,
					width: 10,
					height: 10,
					"class": "svg---mgr",
					fill: "none"
				}), s.appendChild(u)), t.type) {
				case "rect":
					a("rx", i), a("ry", r);
				case "image":
					a("width", i), a("height", r);
				case "text":
					a("x", i), a("y", r);
					break;
				case "circle":
					a("cx", i), a("cy", r), a("r", i);
					break;
				case "ellipse":
					a("cx", i), a("cy", r), a("rx", i), a("ry", r);
					break;
				case "line":
					a("x1", i), a("x2", i), a("y1", r), a("y2", r);
					break;
				case "marker":
					a("refX", i), a("markerWidth", i), a("refY", r), a("markerHeight", r);
					break;
				case "radialGradient":
					a("fx", i), a("fy", r);
					break;
				case "tspan":
					a("dx", i), a("dy", r);
					break;
				default:
					a(e, i)
				}
				return s.removeChild(u), l
			}

			function _(t) {
				r(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
				for (var e = 0, n = 0, i = this.node; this[e];) delete this[e++];
				for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach(function (t) {
					i.appendChild(t.node)
				}) : i.appendChild(t[e].node);
				var o = i.childNodes;
				for (e = 0; e < o.length; e++) this[n++] = L(o[e]);
				return this
			}

			function x(t) {
				if (t.snap in $) return $[t.snap];
				var e, n = this.id = X();
				try {
					e = t.ownerSVGElement
				} catch (i) {}
				if (this.node = t, e && (this.paper = new P(e)), this.type = t.tagName, this.anims = {}, this._ = {
						transform: []
					}, t.snap = n, $[n] = this, "g" == this.type && (this.add = _), this.type in {
						g: 1,
						mask: 1,
						pattern: 1
					})
					for (var o in P.prototype) P.prototype[T](o) && (this[o] = P.prototype[o])
			}

			function b(t) {
				this.node = t
			}

			function w(t, e) {
				var n = o(t);
				e.appendChild(n);
				var i = L(n);
				return i
			}

			function P(t, e) {
				var n, i, r, a = P.prototype;
				if (t && "svg" == t.tagName) {
					if (t.snap in $) return $[t.snap];
					var s = t.ownerDocument;
					n = new x(t), i = t.getElementsByTagName("desc")[0], r = t.getElementsByTagName("defs")[0], i || (i = o("desc"), i.appendChild(s.createTextNode("Created with Snap")), n.node.appendChild(i)), r || (r = o("defs"), n.node.appendChild(r)), n.defs = r;
					for (var l in a) a[T](l) && (n[l] = a[l]);
					n.paper = n.root = n
				} else n = w("svg", C.doc.body), o(n.node, {
					height: e,
					version: 1.1,
					width: t,
					xmlns: G
				});
				return n
			}

			function L(t) {
				return t ? t instanceof x || t instanceof b ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new P(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new P(t.contentDocument.getElementsByTagName("svg")[0]) : new x(t) : t
			}
			i.version = "0.3.0", i.toString = function () {
				return "Snap v" + this.version
			}, i._ = {};
			var C = {
				win: t,
				doc: t.document
			};
			i._.glob = C;
			var T = "hasOwnProperty",
				S = String,
				E = parseFloat,
				D = parseInt,
				k = Math,
				M = k.max,
				A = k.min,
				N = k.abs,
				O = (k.pow, k.PI),
				B = (k.round, ""),
				I = " ",
				z = Object.prototype.toString,
				R = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
				U = "	\n\f\r   ᠎             　\u2028\u2029",
				j = (i._.separator = new RegExp("[," + U + "]+"), new RegExp("[" + U + "]", "g"), new RegExp("[" + U + "]*,[" + U + "]*")),
				V = {
					hs: 1,
					rg: 1
				},
				F = new RegExp("([a-z])[" + U + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + U + "]*,?[" + U + "]*)+)", "ig"),
				H = new RegExp("([rstm])[" + U + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + U + "]*,?[" + U + "]*)+)", "ig"),
				q = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + U + "]*,?[" + U + "]*", "ig"),
				Z = 0,
				W = "S" + (+new Date).toString(36),
				X = function () {
					return W + (Z++).toString(36)
				},
				Y = "http://www.w3.org/1999/xlink",
				G = "http://www.w3.org/2000/svg",
				$ = {},
				J = i.url = function (t) {
					return "url('#" + t + "')"
				};
			i._.$ = o, i._.id = X, i.format = function () {
				var t = /\{([^\}]+)\}/g,
					e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
					n = function (t, n, i) {
						var o = i;
						return n.replace(e, function (t, e, n, i, r) {
							e = e || i, o && (e in o && (o = o[e]), "function" == typeof o && r && (o = o()))
						}), o = (null == o || o == i ? t : o) + ""
					};
				return function (e, i) {
					return S(e).replace(t, function (t, e) {
						return n(t, e, i)
					})
				}
			}(), i._.clone = a, i._.cacher = l, i.rad = c, i.deg = h, i.angle = u, i.is = r, i.snapTo = function (t, e, n) {
				if (n = r(n, "finite") ? n : 10, r(t, "array")) {
					for (var i = t.length; i--;)
						if (N(t[i] - e) <= n) return t[i]
				} else {
					t = +t;
					var o = e % t;
					if (n > o) return e - o;
					if (o > t - n) return e - o + t
				}
				return e
			}, i.getRGB = l(function (t) {
				if (!t || (t = S(t)).indexOf("-") + 1) return {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					error: 1,
					toString: ee
				};
				if ("none" == t) return {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					toString: ee
				};
				if (!(V[T](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = Q(t)), !t) return {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					error: 1,
					toString: ee
				};
				var e, n, o, a, s, l, u = t.match(R);
				return u ? (u[2] && (o = D(u[2].substring(5), 16), n = D(u[2].substring(3, 5), 16), e = D(u[2].substring(1, 3), 16)), u[3] && (o = D((s = u[3].charAt(3)) + s, 16), n = D((s = u[3].charAt(2)) + s, 16), e = D((s = u[3].charAt(1)) + s, 16)), u[4] && (l = u[4].split(j), e = E(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), n = E(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), o = E(l[2]), "%" == l[2].slice(-1) && (o *= 2.55), "rgba" == u[1].toLowerCase().slice(0, 4) && (a = E(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100)), u[5] ? (l = u[5].split(j), e = E(l[0]), "%" == l[0].slice(-1) && (e /= 100), n = E(l[1]), "%" == l[1].slice(-1) && (n /= 100), o = E(l[2]), "%" == l[2].slice(-1) && (o /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsba" == u[1].toLowerCase().slice(0, 4) && (a = E(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), i.hsb2rgb(e, n, o, a)) : u[6] ? (l = u[6].split(j), e = E(l[0]), "%" == l[0].slice(-1) && (e /= 100), n = E(l[1]), "%" == l[1].slice(-1) && (n /= 100), o = E(l[2]), "%" == l[2].slice(-1) && (o /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsla" == u[1].toLowerCase().slice(0, 4) && (a = E(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), i.hsl2rgb(e, n, o, a)) : (e = A(k.round(e), 255), n = A(k.round(n), 255), o = A(k.round(o), 255), a = A(M(a, 0), 1), u = {
					r: e,
					g: n,
					b: o,
					toString: ee
				}, u.hex = "#" + (16777216 | o | n << 8 | e << 16).toString(16).slice(1), u.opacity = r(a, "finite") ? a : 1, u)) : {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					error: 1,
					toString: ee
				}
			}, i), i.hsb = l(function (t, e, n) {
				return i.hsb2rgb(t, e, n).hex
			}), i.hsl = l(function (t, e, n) {
				return i.hsl2rgb(t, e, n).hex
			}), i.rgb = l(function (t, e, n, i) {
				if (r(i, "finite")) {
					var o = k.round;
					return "rgba(" + [o(t), o(e), o(n), +i.toFixed(2)] + ")"
				}
				return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
			});
			var Q = function (t) {
					var e = C.doc.getElementsByTagName("head")[0] || C.doc.getElementsByTagName("svg")[0],
						n = "rgb(255, 0, 0)";
					return (Q = l(function (t) {
						if ("red" == t.toLowerCase()) return n;
						e.style.color = n, e.style.color = t;
						var i = C.doc.defaultView.getComputedStyle(e, B).getPropertyValue("color");
						return i == n ? null : i
					}))(t)
				},
				K = function () {
					return "hsb(" + [this.h, this.s, this.b] + ")"
				},
				te = function () {
					return "hsl(" + [this.h, this.s, this.l] + ")"
				},
				ee = function () {
					return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
				},
				ne = function (t, e, n) {
					if (null == e && r(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, e = t.g, t = t.r), null == e && r(t, string)) {
						var o = i.getRGB(t);
						t = o.r, e = o.g, n = o.b
					}
					return (t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [t, e, n]
				},
				ie = function (t, e, n, o) {
					t = k.round(255 * t), e = k.round(255 * e), n = k.round(255 * n);
					var a = {
						r: t,
						g: e,
						b: n,
						opacity: r(o, "finite") ? o : 1,
						hex: i.rgb(t, e, n),
						toString: ee
					};
					return r(o, "finite") && (a.opacity = o), a
				};
			i.color = function (t) {
				var e;
				return r(t, "object") && "h" in t && "s" in t && "b" in t ? (e = i.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : r(t, "object") && "h" in t && "s" in t && "l" in t ? (e = i.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (r(t, "string") && (t = i.getRGB(t)), r(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = i.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = i.rgb2hsb(t), t.v = e.b) : (t = {
					hex: "none"
				}, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = ee, t
			}, i.hsb2rgb = function (t, e, n, i) {
				r(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, t = t.h, i = t.o), t *= 360;
				var o, a, s, l, u;
				return t = t % 360 / 60, u = n * e, l = u * (1 - N(t % 2 - 1)), o = a = s = n - u, t = ~~t, o += [u, l, 0, 0, l, u][t], a += [l, u, u, l, 0, 0][t], s += [0, 0, l, u, u, l][t], ie(o, a, s, i)
			}, i.hsl2rgb = function (t, e, n, i) {
				r(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t *= 360;
				var o, a, s, l, u;
				return t = t % 360 / 60, u = 2 * e * (.5 > n ? n : 1 - n), l = u * (1 - N(t % 2 - 1)), o = a = s = n - u / 2, t = ~~t, o += [u, l, 0, 0, l, u][t], a += [l, u, u, l, 0, 0][t], s += [0, 0, l, u, u, l][t], ie(o, a, s, i)
			}, i.rgb2hsb = function (t, e, n) {
				n = ne(t, e, n), t = n[0], e = n[1], n = n[2];
				var i, o, r, a;
				return r = M(t, e, n), a = r - A(t, e, n), i = 0 == a ? null : r == t ? (e - n) / a : r == e ? (n - t) / a + 2 : (t - e) / a + 4, i = (i + 360) % 6 * 60 / 360, o = 0 == a ? 0 : a / r, {
					h: i,
					s: o,
					b: r,
					toString: K
				}
			}, i.rgb2hsl = function (t, e, n) {
				n = ne(t, e, n), t = n[0], e = n[1], n = n[2];
				var i, o, r, a, s, l;
				return a = M(t, e, n), s = A(t, e, n), l = a - s, i = 0 == l ? null : a == t ? (e - n) / l : a == e ? (n - t) / l + 2 : (t - e) / l + 4, i = (i + 360) % 6 * 60 / 360, r = (a + s) / 2, o = 0 == l ? 0 : .5 > r ? l / (2 * r) : l / (2 - 2 * r), {
					h: i,
					s: o,
					l: r,
					toString: te
				}
			}, i.parsePathString = function (t) {
				if (!t) return null;
				var e = i.path(t);
				if (e.arr) return i.path.clone(e.arr);
				var n = {
						a: 7,
						c: 6,
						o: 2,
						h: 1,
						l: 2,
						m: 2,
						r: 4,
						q: 4,
						s: 4,
						t: 2,
						v: 1,
						u: 3,
						z: 0
					},
					o = [];
				return r(t, "array") && r(t[0], "array") && (o = i.path.clone(t)), o.length || S(t).replace(F, function (t, e, i) {
					var r = [],
						a = e.toLowerCase();
					if (i.replace(q, function (t, e) {
							e && r.push(+e)
						}), "m" == a && r.length > 2 && (o.push([e].concat(r.splice(0, 2))), a = "l", e = "m" == e ? "l" : "L"), "o" == a && 1 == r.length && o.push([e, r[0]]), "r" == a) o.push([e].concat(r));
					else
						for (; r.length >= n[a] && (o.push([e].concat(r.splice(0, n[a]))), n[a]););
				}), o.toString = i.path.toString, e.arr = i.path.clone(o), o
			};
			var oe = i.parseTransformString = function (t) {
				if (!t) return null;
				var e = [];
				return r(t, "array") && r(t[0], "array") && (e = i.path.clone(t)), e.length || S(t).replace(H, function (t, n, i) {
					var o = [];
					n.toLowerCase(), i.replace(q, function (t, e) {
						e && o.push(+e)
					}), e.push([n].concat(o))
				}), e.toString = i.path.toString, e
			};
			i._.svgTransform2string = p, i._.rgTransform = new RegExp("^[a-z][" + U + "]*-?\\.?\\d", "i"), i._.transform2matrix = d, i._unit2px = y, C.doc.contains || C.doc.compareDocumentPosition ? function (t, e) {
					var n = 9 == t.nodeType ? t.documentElement : t,
						i = e && e.parentNode;
					return t == i || !(!i || 1 != i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
				} : function (t, e) {
					if (e)
						for (; e;)
							if (e = e.parentNode, e == t) return !0;
					return !1
				}, i._.getSomeDefs = m, i._.getSomeSVG = v, i.select = function (t) {
					return L(C.doc.querySelector(t))
				}, i.selectAll = function (t) {
					for (var e = C.doc.querySelectorAll(t), n = (i.set || Array)(), o = 0; o < e.length; o++) n.push(L(e[o]));
					return n
				}, setInterval(function () {
					for (var t in $)
						if ($[T](t)) {
							var e = $[t],
								n = e.node;
							("svg" != e.type && !n.ownerSVGElement || "svg" == e.type && (!n.parentNode || "ownerSVGElement" in n.parentNode && !n.ownerSVGElement)) && delete $[t]
						}
				}, 1e4),
				function (t) {
					function a(t) {
						function e(t, e) {
							var n = o(t.node, e);
							n = n && n.match(a), n = n && n[2], n && "#" == n.charAt() && (n = n.substring(1), n && (l[n] = (l[n] || []).concat(function (n) {
								var i = {};
								i[e] = J(n), o(t.node, i)
							})))
						}

						function n(t) {
							var e = o(t.node, "xlink:href");
							e && "#" == e.charAt() && (e = e.substring(1), e && (l[e] = (l[e] || []).concat(function (e) {
								t.attr("xlink:href", "#" + e)
							})))
						}
						for (var i, r = t.selectAll("*"), a = /^\s*url\(("|'|)(.*)\1\)\s*$/, s = [], l = {}, u = 0, c = r.length; c > u; u++) {
							i = r[u], e(i, "fill"), e(i, "stroke"), e(i, "filter"), e(i, "mask"), e(i, "clip-path"), n(i);
							var h = o(i.node, "id");
							h && (o(i.node, {
								id: i.id
							}), s.push({
								old: h,
								id: i.id
							}))
						}
						for (u = 0, c = s.length; c > u; u++) {
							var p = l[s[u].old];
							if (p)
								for (var d = 0, f = p.length; f > d; d++) p[d](s[u].id)
						}
					}

					function s(t, e, n) {
						return function (i) {
							var o = i.slice(t, e);
							return 1 == o.length && (o = o[0]), n ? n(o) : o
						}
					}

					function l(t) {
						return function () {
							var e = t ? "<" + this.type : "",
								n = this.node.attributes,
								i = this.node.childNodes;
							if (t)
								for (var o = 0, r = n.length; r > o; o++) e += " " + n[o].name + '="' + n[o].value.replace(/"/g, '\\"') + '"';
							if (i.length) {
								for (t && (e += ">"), o = 0, r = i.length; r > o; o++) 3 == i[o].nodeType ? e += i[o].nodeValue : 1 == i[o].nodeType && (e += L(i[o]).toString());
								t && (e += "</" + this.type + ">")
							} else t && (e += "/>");
							return e
						}
					}
					t.attr = function (t, n) {
						var i = this;
						if (i.node, !t) return i;
						if (r(t, "string")) {
							if (!(arguments.length > 1)) return e("snap.util.getattr." + t, i).firstDefined();
							var o = {};
							o[t] = n, t = o
						}
						for (var a in t) t[T](a) && e("snap.util.attr." + a, i, t[a]);
						return i
					}, t.getBBox = function (t) {
						if (!i.Matrix || !i.path) return this.node.getBBox();
						var e = this,
							n = new i.Matrix;
						if (e.removed) return i._.box();
						for (;
							"use" == e.type;)
							if (t || (n = n.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original) e = e.original;
							else {
								var o = e.attr("xlink:href");
								e = e.original = e.node.ownerDocument.getElementById(o.substring(o.indexOf("#") + 1))
							}
						var r = e._,
							a = i.path.get[e.type] || i.path.get.deflt;
						try {
							return t ? (r.bboxwt = a ? i.path.getBBox(e.realPath = a(e)) : i._.box(e.node.getBBox()), i._.box(r.bboxwt)) : (e.realPath = a(e), e.matrix = e.transform().localMatrix, r.bbox = i.path.getBBox(i.path.map(e.realPath, n.add(e.matrix))), i._.box(r.bbox))
						} catch (s) {
							return i._.box()
						}
					};
					var u = function () {
						return this.string
					};
					t.transform = function (t) {
						var e = this._;
						if (null == t) {
							for (var n, r = this, a = new i.Matrix(this.node.getCTM()), s = f(this), l = [s], c = new i.Matrix, h = s.toTransformString(), p = S(s) == S(this.matrix) ? S(e.transform) : h;
								"svg" != r.type && (r = r.parent());) l.push(f(r));
							for (n = l.length; n--;) c.add(l[n]);
							return {
								string: p,
								globalMatrix: a,
								totalMatrix: c,
								localMatrix: s,
								diffMatrix: a.clone().add(s.invert()),
								global: a.toTransformString(),
								total: c.toTransformString(),
								local: h,
								toString: u
							}
						}
						return t instanceof i.Matrix ? this.matrix = t : f(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? o(this.node, {
							gradientTransform: this.matrix
						}) : "pattern" == this.type ? o(this.node, {
							patternTransform: this.matrix
						}) : o(this.node, {
							transform: this.matrix
						})), this
					}, t.parent = function () {
						return L(this.node.parentNode)
					}, t.append = t.add = function (t) {
						if (t) {
							if ("set" == t.type) {
								var e = this;
								return t.forEach(function (t) {
									e.add(t)
								}), this
							}
							t = L(t), this.node.appendChild(t.node), t.paper = this.paper
						}
						return this
					}, t.appendTo = function (t) {
						return t && (t = L(t), t.append(this)), this
					}, t.prepend = function (t) {
						if (t) {
							if ("set" == t.type) {
								var e, n = this;
								return t.forEach(function (t) {
									e ? e.after(t) : n.prepend(t), e = t
								}), this
							}
							t = L(t);
							var i = t.parent();
							this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), i && i.add()
						}
						return this
					}, t.prependTo = function (t) {
						return t = L(t), t.prepend(this), this
					}, t.before = function (t) {
						if ("set" == t.type) {
							var e = this;
							return t.forEach(function (t) {
								var n = t.parent();
								e.node.parentNode.insertBefore(t.node, e.node), n && n.add()
							}), this.parent().add(), this
						}
						t = L(t);
						var n = t.parent();
						return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), n && n.add(), t.paper = this.paper, this
					}, t.after = function (t) {
						t = L(t);
						var e = t.parent();
						return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
					}, t.insertBefore = function (t) {
						t = L(t);
						var e = this.parent();
						return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
					}, t.insertAfter = function (t) {
						t = L(t);
						var e = this.parent();
						return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
					}, t.remove = function () {
						var t = this.parent();
						return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
					}, t.select = function (t) {
						return L(this.node.querySelector(t))
					}, t.selectAll = function (t) {
						for (var e = this.node.querySelectorAll(t), n = (i.set || Array)(), o = 0; o < e.length; o++) n.push(L(e[o]));
						return n
					}, t.asPX = function (t, e) {
						return null == e && (e = this.attr(t)), +y(this, t, e)
					}, t.use = function () {
						var t, e = this.node.id;
						return e || (e = this.id, o(this.node, {
							id: e
						})), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? w(this.type, this.node.parentNode) : w("use", this.node.parentNode), o(t.node, {
							"xlink:href": "#" + e
						}), t.original = this, t
					};
					var c = /\S+/g;
					t.addClass = function (t) {
						var e, n, i, o, r = (t || "").match(c) || [],
							a = this.node,
							s = a.className.baseVal,
							l = s.match(c) || [];
						if (r.length) {
							for (e = 0; i = r[e++];) n = l.indexOf(i), ~n || l.push(i);
							o = l.join(" "), s != o && (a.className.baseVal = o)
						}
						return this
					}, t.removeClass = function (t) {
						var e, n, i, o, r = (t || "").match(c) || [],
							a = this.node,
							s = a.className.baseVal,
							l = s.match(c) || [];
						if (l.length) {
							for (e = 0; i = r[e++];) n = l.indexOf(i), ~n && l.splice(n, 1);
							o = l.join(" "), s != o && (a.className.baseVal = o)
						}
						return this
					}, t.hasClass = function (t) {
						var e = this.node,
							n = e.className.baseVal,
							i = n.match(c) || [];
						return !!~i.indexOf(t)
					}, t.toggleClass = function (t, e) {
						if (null != e) return e ? this.addClass(t) : this.removeClass(t);
						var n, i, o, r, a = (t || "").match(c) || [],
							s = this.node,
							l = s.className.baseVal,
							u = l.match(c) || [];
						for (n = 0; o = a[n++];) i = u.indexOf(o), ~i ? u.splice(i, 1) : u.push(o);
						return r = u.join(" "), l != r && (s.className.baseVal = r), this
					}, t.clone = function () {
						var t = L(this.node.cloneNode(!0));
						return o(t.node, "id") && o(t.node, {
							id: t.id
						}), a(t), t.insertAfter(this), t
					}, t.toDefs = function () {
						var t = m(this);
						return t.appendChild(this.node), this
					}, t.pattern = t.toPattern = function (t, e, n, i) {
						var a = w("pattern", m(this));
						return null == t && (t = this.getBBox()), r(t, "object") && "x" in t && (e = t.y, n = t.width, i = t.height, t = t.x), o(a.node, {
							x: t,
							y: e,
							width: n,
							height: i,
							patternUnits: "userSpaceOnUse",
							id: a.id,
							viewBox: [t, e, n, i].join(" ")
						}), a.node.appendChild(this.node), a
					}, t.marker = function (t, e, n, i, a, s) {
						var l = w("marker", m(this));
						return null == t && (t = this.getBBox()), r(t, "object") && "x" in t && (e = t.y, n = t.width, i = t.height, a = t.refX || t.cx, s = t.refY || t.cy, t = t.x), o(l.node, {
							viewBox: [t, e, n, i].join(I),
							markerWidth: n,
							markerHeight: i,
							orient: "auto",
							refX: a || 0,
							refY: s || 0,
							id: l.id
						}), l.node.appendChild(this.node), l
					};
					var h = function (t, e, i, o) {
						"function" != typeof i || i.length || (o = i, i = n.linear), this.attr = t, this.dur = e, i && (this.easing = i), o && (this.callback = o)
					};
					i._.Animation = h, i.animation = function (t, e, n, i) {
						return new h(t, e, n, i)
					}, t.inAnim = function () {
						var t = this,
							e = [];
						for (var n in t.anims) t.anims[T](n) && ! function (t) {
							e.push({
								anim: new h(t._attrs, t.dur, t.easing, t._callback),
								mina: t,
								curStatus: t.status(),
								status: function (e) {
									return t.status(e)
								},
								stop: function () {
									t.stop()
								}
							})
						}(t.anims[n]);
						return e
					}, i.animate = function (t, i, o, r, a, s) {
						"function" != typeof a || a.length || (s = a, a = n.linear);
						var l = n.time(),
							u = n(t, i, l, l + r, n.time, o, a);
						return s && e.once("mina.finish." + u.id, s), u
					}, t.stop = function () {
						for (var t = this.inAnim(), e = 0, n = t.length; n > e; e++) t[e].stop();
						return this
					}, t.animate = function (t, i, o, a) {
						"function" != typeof o || o.length || (a = o, o = n.linear), t instanceof h && (a = t.callback, o = t.easing, i = o.dur, t = t.attr);
						var l, u, c, p, d = [],
							f = [],
							m = {},
							g = this;
						for (var v in t)
							if (t[T](v)) {
								g.equal ? (p = g.equal(v, S(t[v])), l = p.from, u = p.to, c = p.f) : (l = +g.attr(v), u = +t[v]);
								var y = r(l, "array") ? l.length : 1;
								m[v] = s(d.length, d.length + y, c), d = d.concat(l), f = f.concat(u)
							}
						var _ = n.time(),
							x = n(d, f, _, _ + i, n.time, function (t) {
								var e = {};
								for (var n in m) m[T](n) && (e[n] = m[n](t));
								g.attr(e)
							}, o);
						return g.anims[x.id] = x, x._attrs = t, x._callback = a, e("snap.animcreated." + g.id, x), e.once("mina.finish." + x.id, function () {
							delete g.anims[x.id], a && a.call(g)
						}), e.once("mina.stop." + x.id, function () {
							delete g.anims[x.id]
						}), g
					};
					var p = {};
					t.data = function (t, n) {
						var o = p[this.id] = p[this.id] || {};
						if (0 == arguments.length) return e("snap.data.get." + this.id, this, o, null), o;
						if (1 == arguments.length) {
							if (i.is(t, "object")) {
								for (var r in t) t[T](r) && this.data(r, t[r]);
								return this
							}
							return e("snap.data.get." + this.id, this, o[t], t), o[t]
						}
						return o[t] = n, e("snap.data.set." + this.id, this, n, t), this
					}, t.removeData = function (t) {
						return null == t ? p[this.id] = {} : p[this.id] && delete p[this.id][t], this
					}, t.outerSVG = t.toString = l(1), t.innerSVG = l()
				}(x.prototype), i.parse = function (t) {
					var e = C.doc.createDocumentFragment(),
						n = !0,
						i = C.doc.createElement("div");
					if (t = S(t), t.match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", n = !1), i.innerHTML = t, t = i.getElementsByTagName("svg")[0])
						if (n) e = t;
						else
							for (; t.firstChild;) e.appendChild(t.firstChild);
					return i.innerHTML = B, new b(e)
				}, b.prototype.select = x.prototype.select, b.prototype.selectAll = x.prototype.selectAll, i.fragment = function () {
					for (var t = Array.prototype.slice.call(arguments, 0), e = C.doc.createDocumentFragment(), n = 0, o = t.length; o > n; n++) {
						var r = t[n];
						r.node && r.node.nodeType && e.appendChild(r.node), r.nodeType && e.appendChild(r), "string" == typeof r && e.appendChild(i.parse(r).node)
					}
					return new b(e)
				}, i._.make = w, i._.wrap = L, P.prototype.el = function (t, e) {
					var n = w(t, this.node);
					return e && n.attr(e), n
				}, e.on("snap.util.getattr", function () {
					var t = e.nt();
					t = t.substring(t.lastIndexOf(".") + 1);
					var n = t.replace(/[A-Z]/g, function (t) {
						return "-" + t.toLowerCase()
					});
					return re[T](n) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(n) : o(this.node, t)
				});
			var re = {
				"alignment-baseline": 0,
				"baseline-shift": 0,
				clip: 0,
				"clip-path": 0,
				"clip-rule": 0,
				color: 0,
				"color-interpolation": 0,
				"color-interpolation-filters": 0,
				"color-profile": 0,
				"color-rendering": 0,
				cursor: 0,
				direction: 0,
				display: 0,
				"dominant-baseline": 0,
				"enable-background": 0,
				fill: 0,
				"fill-opacity": 0,
				"fill-rule": 0,
				filter: 0,
				"flood-color": 0,
				"flood-opacity": 0,
				font: 0,
				"font-family": 0,
				"font-size": 0,
				"font-size-adjust": 0,
				"font-stretch": 0,
				"font-style": 0,
				"font-variant": 0,
				"font-weight": 0,
				"glyph-orientation-horizontal": 0,
				"glyph-orientation-vertical": 0,
				"image-rendering": 0,
				kerning: 0,
				"letter-spacing": 0,
				"lighting-color": 0,
				marker: 0,
				"marker-end": 0,
				"marker-mid": 0,
				"marker-start": 0,
				mask: 0,
				opacity: 0,
				overflow: 0,
				"pointer-events": 0,
				"shape-rendering": 0,
				"stop-color": 0,
				"stop-opacity": 0,
				stroke: 0,
				"stroke-dasharray": 0,
				"stroke-dashoffset": 0,
				"stroke-linecap": 0,
				"stroke-linejoin": 0,
				"stroke-miterlimit": 0,
				"stroke-opacity": 0,
				"stroke-width": 0,
				"text-anchor": 0,
				"text-decoration": 0,
				"text-rendering": 0,
				"unicode-bidi": 0,
				visibility: 0,
				"word-spacing": 0,
				"writing-mode": 0
			};
			e.on("snap.util.attr", function (t) {
					var n = e.nt(),
						i = {};
					n = n.substring(n.lastIndexOf(".") + 1), i[n] = t;
					var r = n.replace(/-(\w)/gi, function (t, e) {
							return e.toUpperCase()
						}),
						a = n.replace(/[A-Z]/g, function (t) {
							return "-" + t.toLowerCase()
						});
					re[T](a) ? this.node.style[r] = null == t ? B : t : o(this.node, i)
				}),
				function () {}(P.prototype), i.ajax = function (t, n, i, o) {
					var a = new XMLHttpRequest,
						s = X();
					if (a) {
						if (r(n, "function")) o = i, i = n, n = null;
						else if (r(n, "object")) {
							var l = [];
							for (var u in n) n.hasOwnProperty(u) && l.push(encodeURIComponent(u) + "=" + encodeURIComponent(n[u]));
							n = l.join("&")
						}
						return a.open(n ? "POST" : "GET", t, !0), n && (a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), i && (e.once("snap.ajax." + s + ".0", i), e.once("snap.ajax." + s + ".200", i), e.once("snap.ajax." + s + ".304", i)), a.onreadystatechange = function () {
							4 == a.readyState && e("snap.ajax." + s + "." + a.status, o, a)
						}, 4 == a.readyState ? a : (a.send(n), a)
					}
				}, i.load = function (t, e, n) {
					i.ajax(t, function (t) {
						var o = i.parse(t.responseText);
						n ? e.call(n, o) : e(o)
					})
				};
			var ae = function (t) {
				var e = t.getBoundingClientRect(),
					n = t.ownerDocument,
					i = n.body,
					o = n.documentElement,
					r = o.clientTop || i.clientTop || 0,
					a = o.clientLeft || i.clientLeft || 0,
					s = e.top + (g.win.pageYOffset || o.scrollTop || i.scrollTop) - r,
					l = e.left + (g.win.pageXOffset || o.scrollLeft || i.scrollLeft) - a;
				return {
					y: s,
					x: l
				}
			};
			return i.getElementByPoint = function (t, e) {
				var n = this,
					i = (n.canvas, C.doc.elementFromPoint(t, e));
				if (C.win.opera && "svg" == i.tagName) {
					var o = ae(i),
						r = i.createSVGRect();
					r.x = t - o.x, r.y = e - o.y, r.width = r.height = 1;
					var a = i.getIntersectionList(r, null);
					a.length && (i = a[a.length - 1])
				}
				return i ? L(i) : null
			}, i.plugin = function (t) {
				t(i, x, P, C, b)
			}, C.win.Snap = i, i
		}();
	return i.plugin(function (t) {
		function e(t, e, i, o, r, a) {
			return null == e && "[object SVGMatrix]" == n.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(null != t ? (this.a = +t, this.b = +e, this.c = +i, this.d = +o, this.e = +r, this.f = +a) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
		}
		var n = Object.prototype.toString,
			i = String,
			o = Math,
			r = "";
		! function (n) {
			function a(t) {
				return t[0] * t[0] + t[1] * t[1]
			}

			function s(t) {
				var e = o.sqrt(a(t));
				t[0] && (t[0] /= e), t[1] && (t[1] /= e)
			}
			n.add = function (t, n, i, o, r, a) {
				var s, l, u, c, h = [[], [], []],
					p = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
					d = [[t, i, r], [n, o, a], [0, 0, 1]];
				for (t && t instanceof e && (d = [[t.a, t.c, t.e], [t.b, t.d, t.f], [0, 0, 1]]), s = 0; 3 > s; s++)
					for (l = 0; 3 > l; l++) {
						for (c = 0, u = 0; 3 > u; u++) c += p[s][u] * d[u][l];
						h[s][l] = c
					}
				return this.a = h[0][0], this.b = h[1][0], this.c = h[0][1], this.d = h[1][1], this.e = h[0][2], this.f = h[1][2], this
			}, n.invert = function () {
				var t = this,
					n = t.a * t.d - t.b * t.c;
				return new e(t.d / n, -t.b / n, -t.c / n, t.a / n, (t.c * t.f - t.d * t.e) / n, (t.b * t.e - t.a * t.f) / n)
			}, n.clone = function () {
				return new e(this.a, this.b, this.c, this.d, this.e, this.f)
			}, n.translate = function (t, e) {
				return this.add(1, 0, 0, 1, t, e)
			}, n.scale = function (t, e, n, i) {
				return null == e && (e = t), (n || i) && this.add(1, 0, 0, 1, n, i), this.add(t, 0, 0, e, 0, 0), (n || i) && this.add(1, 0, 0, 1, -n, -i), this
			}, n.rotate = function (e, n, i) {
				e = t.rad(e), n = n || 0, i = i || 0;
				var r = +o.cos(e).toFixed(9),
					a = +o.sin(e).toFixed(9);
				return this.add(r, a, -a, r, n, i), this.add(1, 0, 0, 1, -n, -i)
			}, n.x = function (t, e) {
				return t * this.a + e * this.c + this.e
			}, n.y = function (t, e) {
				return t * this.b + e * this.d + this.f
			}, n.get = function (t) {
				return +this[i.fromCharCode(97 + t)].toFixed(4)
			}, n.toString = function () {
				return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
			}, n.offset = function () {
				return [this.e.toFixed(4), this.f.toFixed(4)]
			}, n.determinant = function () {
				return this.a * this.d - this.b * this.c
			}, n.split = function () {
				var e = {};
				e.dx = this.e, e.dy = this.f;
				var n = [[this.a, this.c], [this.b, this.d]];
				e.scalex = o.sqrt(a(n[0])), s(n[0]), e.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * e.shear, n[1][1] - n[0][1] * e.shear], e.scaley = o.sqrt(a(n[1])), s(n[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex);
				var i = -n[0][1],
					r = n[1][1];
				return 0 > r ? (e.rotate = t.deg(o.acos(r)), 0 > i && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(o.asin(i)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
			}, n.toTransformString = function (t) {
				var e = t || this.split();
				return +e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : r) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : r) + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : r))
			}
		}(e.prototype), t.Matrix = e, t.matrix = function (t, n, i, o, r, a) {
			return new e(t, n, i, o, r, a)
		}
	}), i.plugin(function (t, n, i, o, r) {
		function a(i) {
			return function (o) {
				if (e.stop(), o instanceof r && 1 == o.node.childNodes.length && ("radialGradient" == o.node.firstChild.tagName || "linearGradient" == o.node.firstChild.tagName || "pattern" == o.node.firstChild.tagName) && (o = o.node.firstChild, d(this).appendChild(o), o = h(o)), o instanceof n)
					if ("radialGradient" == o.type || "linearGradient" == o.type || "pattern" == o.type) {
						o.node.id || m(o.node, {
							id: o.id
						});
						var a = g(o.node.id)
					} else a = o.attr(i);
				else if (a = t.color(o), a.error) {
					var s = t(d(this).ownerSVGElement).gradient(o);
					s ? (s.node.id || m(s.node, {
						id: s.id
					}), a = g(s.node.id)) : a = o
				} else a = v(a);
				var l = {};
				l[i] = a, m(this.node, l), this.node.style[i] = _
			}
		}

		function s(t) {
			e.stop(), t == +t && (t += "px"), this.node.style.fontSize = t
		}

		function l(t) {
			for (var e = [], n = t.childNodes, i = 0, o = n.length; o > i; i++) {
				var r = n[i];
				3 == r.nodeType && e.push(r.nodeValue), "tspan" == r.tagName && e.push(1 == r.childNodes.length && 3 == r.firstChild.nodeType ? r.firstChild.nodeValue : l(r))
			}
			return e
		}

		function u() {
			return e.stop(), this.node.style.fontSize
		}
		var c = t._.make,
			h = t._.wrap,
			p = t.is,
			d = t._.getSomeDefs,
			f = /^url\(#?([^)]+)\)$/,
			m = t._.$,
			g = t.url,
			v = String,
			y = t._.separator,
			_ = "";
		e.on("snap.util.attr.mask", function (t) {
				if (t instanceof n || t instanceof r) {
					if (e.stop(), t instanceof r && 1 == t.node.childNodes.length && (t = t.node.firstChild, d(this).appendChild(t), t = h(t)), "mask" == t.type) var i = t;
					else i = c("mask", d(this)), i.node.appendChild(t.node);
					!i.node.id && m(i.node, {
						id: i.id
					}), m(this.node, {
						mask: g(i.id)
					})
				}
			}),
			function (t) {
				e.on("snap.util.attr.clip", t), e.on("snap.util.attr.clip-path", t), e.on("snap.util.attr.clipPath", t)
			}(function (t) {
				if (t instanceof n || t instanceof r) {
					if (e.stop(), "clipPath" == t.type) var i = t;
					else i = c("clipPath", d(this)), i.node.appendChild(t.node), !i.node.id && m(i.node, {
						id: i.id
					});
					m(this.node, {
						"clip-path": g(i.id)
					})
				}
			}), e.on("snap.util.attr.fill", a("fill")), e.on("snap.util.attr.stroke", a("stroke"));
		var x = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
		e.on("snap.util.grad.parse", function (t) {
				t = v(t);
				var e = t.match(x);
				if (!e) return null;
				var n = e[1],
					i = e[2],
					o = e[3];
				return i = i.split(/\s*,\s*/).map(function (t) {
					return +t == t ? +t : t
				}), 1 == i.length && 0 == i[0] && (i = []), o = o.split("-"), o = o.map(function (t) {
					t = t.split(":");
					var e = {
						color: t[0]
					};
					return t[1] && (e.offset = parseFloat(t[1])), e
				}), {
					type: n,
					params: i,
					stops: o
				}
			}), e.on("snap.util.attr.d", function (n) {
				e.stop(), p(n, "array") && p(n[0], "array") && (n = t.path.toString.call(n)), n = v(n), n.match(/[ruo]/i) && (n = t.path.toAbsolute(n)), m(this.node, {
					d: n
				})
			})(-1), e.on("snap.util.attr.#text", function (t) {
				e.stop(), t = v(t);
				for (var n = o.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
				this.node.appendChild(n)
			})(-1), e.on("snap.util.attr.path", function (t) {
				e.stop(), this.attr({
					d: t
				})
			})(-1), e.on("snap.util.attr.class", function (t) {
				e.stop(), this.node.className.baseVal = t
			})(-1), e.on("snap.util.attr.viewBox", function (t) {
				var n;
				n = p(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : p(t, "array") ? t.join(" ") : t, m(this.node, {
					viewBox: n
				}), e.stop()
			})(-1), e.on("snap.util.attr.transform", function (t) {
				this.transform(t), e.stop()
			})(-1), e.on("snap.util.attr.r", function (t) {
				"rect" == this.type && (e.stop(), m(this.node, {
					rx: t,
					ry: t
				}))
			})(-1), e.on("snap.util.attr.textpath", function (t) {
				if (e.stop(), "text" == this.type) {
					var i, o, r;
					if (!t && this.textPath) {
						for (o = this.textPath; o.node.firstChild;) this.node.appendChild(o.node.firstChild);
						return o.remove(), void delete this.textPath
					}
					if (p(t, "string")) {
						var a = d(this),
							s = h(a.parentNode).path(t);
						a.appendChild(s.node), i = s.id, s.attr({
							id: i
						})
					} else t = h(t), t instanceof n && (i = t.attr("id"), i || (i = t.id, t.attr({
						id: i
					})));
					if (i)
						if (o = this.textPath, r = this.node, o) o.attr({
							"xlink:href": "#" + i
						});
						else {
							for (o = m("textPath", {
									"xlink:href": "#" + i
								}); r.firstChild;) o.appendChild(r.firstChild);
							r.appendChild(o), this.textPath = h(o)
						}
				}
			})(-1), e.on("snap.util.attr.text", function (t) {
				if ("text" == this.type) {
					for (var n = this.node, i = function (t) {
							var e = m("tspan");
							if (p(t, "array"))
								for (var n = 0; n < t.length; n++) e.appendChild(i(t[n]));
							else e.appendChild(o.doc.createTextNode(t));
							return e.normalize && e.normalize(), e
						}; n.firstChild;) n.removeChild(n.firstChild);
					for (var r = i(t); r.firstChild;) n.appendChild(r.firstChild)
				}
				e.stop()
			})(-1), e.on("snap.util.attr.fontSize", s)(-1), e.on("snap.util.attr.font-size", s)(-1), e.on("snap.util.getattr.transform", function () {
				return e.stop(), this.transform()
			})(-1), e.on("snap.util.getattr.textpath", function () {
				return e.stop(), this.textPath
			})(-1),
			function () {
				function n(n) {
					return function () {
						e.stop();
						var i = o.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + n);
						return "none" == i ? i : t(o.doc.getElementById(i.match(f)[1]))
					}
				}

				function i(t) {
					return function (n) {
						e.stop();
						var i = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
						if ("" == n || !n) return void(this.node.style[i] = "none");
						if ("marker" == n.type) {
							var o = n.node.id;
							return o || m(n.node, {
								id: n.id
							}), void(this.node.style[i] = g(o))
						}
					}
				}
				e.on("snap.util.getattr.marker-end", n("end"))(-1), e.on("snap.util.getattr.markerEnd", n("end"))(-1), e.on("snap.util.getattr.marker-start", n("start"))(-1), e.on("snap.util.getattr.markerStart", n("start"))(-1), e.on("snap.util.getattr.marker-mid", n("mid"))(-1), e.on("snap.util.getattr.markerMid", n("mid"))(-1), e.on("snap.util.attr.marker-end", i("end"))(-1), e.on("snap.util.attr.markerEnd", i("end"))(-1), e.on("snap.util.attr.marker-start", i("start"))(-1), e.on("snap.util.attr.markerStart", i("start"))(-1), e.on("snap.util.attr.marker-mid", i("mid"))(-1), e.on("snap.util.attr.markerMid", i("mid"))(-1)
			}(), e.on("snap.util.getattr.r", function () {
				return "rect" == this.type && m(this.node, "rx") == m(this.node, "ry") ? (e.stop(), m(this.node, "rx")) : void 0
			})(-1), e.on("snap.util.getattr.text", function () {
				if ("text" == this.type || "tspan" == this.type) {
					e.stop();
					var t = l(this.node);
					return 1 == t.length ? t[0] : t
				}
			})(-1), e.on("snap.util.getattr.#text", function () {
				return this.node.textContent
			})(-1), e.on("snap.util.getattr.viewBox", function () {
				e.stop();
				var n = m(this.node, "viewBox");
				return n ? (n = n.split(y), t._.box(+n[0], +n[1], +n[2], +n[3])) : void 0
			})(-1), e.on("snap.util.getattr.points", function () {
				var t = m(this.node, "points");
				return e.stop(), t ? t.split(y) : void 0
			})(-1), e.on("snap.util.getattr.path", function () {
				var t = m(this.node, "d");
				return e.stop(), t
			})(-1), e.on("snap.util.getattr.class", function () {
				return this.node.className.baseVal
			})(-1), e.on("snap.util.getattr.fontSize", u)(-1), e.on("snap.util.getattr.font-size", u)(-1)
	}), i.plugin(function () {
		function t(t) {
			return t
		}

		function n(t) {
			return function (e) {
				return +e.toFixed(3) + t
			}
		}
		var i = {
				"+": function (t, e) {
					return t + e
				},
				"-": function (t, e) {
					return t - e
				},
				"/": function (t, e) {
					return t / e
				},
				"*": function (t, e) {
					return t * e
				}
			},
			o = String,
			r = /[a-z]+$/i,
			a = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
		e.on("snap.util.attr", function (t) {
			var n = o(t).match(a);
			if (n) {
				var s = e.nt(),
					l = s.substring(s.lastIndexOf(".") + 1),
					u = this.attr(l),
					c = {};
				e.stop();
				var h = n[3] || "",
					p = u.match(r),
					d = i[n[1]];
				if (p && p == h ? t = d(parseFloat(u), +n[2]) : (u = this.asPX(l), t = d(this.asPX(l), this.asPX(l, n[2] + h))), isNaN(u) || isNaN(t)) return;
				c[l] = t, this.attr(c)
			}
		})(-10), e.on("snap.util.equal", function (s, l) {
			var u = o(this.attr(s) || ""),
				c = o(l).match(a);
			if (c) {
				e.stop();
				var h = c[3] || "",
					p = u.match(r),
					d = i[c[1]];
				return p && p == h ? {
					from: parseFloat(u),
					to: d(parseFloat(u), +c[2]),
					f: n(p)
				} : (u = this.asPX(s), {
					from: u,
					to: d(u, this.asPX(s, c[2] + h)),
					f: t
				})
			}
		})(-10)
	}), i.plugin(function (t, n, i, o) {
		var r = i.prototype,
			a = t.is;
		r.rect = function (t, e, n, i, o, r) {
			var s;
			return null == r && (r = o), a(t, "object") && "[object Object]" == t ? s = t : null != t && (s = {
				x: t,
				y: e,
				width: n,
				height: i
			}, null != o && (s.rx = o, s.ry = r)), this.el("rect", s)
		}, r.circle = function (t, e, n) {
			var i;
			return a(t, "object") && "[object Object]" == t ? i = t : null != t && (i = {
				cx: t,
				cy: e,
				r: n
			}), this.el("circle", i)
		};
		var s = function () {
			function t() {
				this.parentNode.removeChild(this)
			}
			return function (e, n) {
				var i = o.doc.createElement("img"),
					r = o.doc.body;
				i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function () {
					n.call(i), i.onload = i.onerror = null, r.removeChild(i)
				}, i.onerror = t, r.appendChild(i), i.src = e
			}
		}();
		r.image = function (e, n, i, o, r) {
				var l = this.el("image");
				if (a(e, "object") && "src" in e) l.attr(e);
				else if (null != e) {
					var u = {
						"xlink:href": e,
						preserveAspectRatio: "none"
					};
					null != n && null != i && (u.x = n, u.y = i), null != o && null != r ? (u.width = o, u.height = r) : s(e, function () {
						t._.$(l.node, {
							width: this.offsetWidth,
							height: this.offsetHeight
						})
					}), t._.$(l.node, u)
				}
				return l
			}, r.ellipse = function (t, e, n, i) {
				var o;
				return a(t, "object") && "[object Object]" == t ? o = t : null != t && (o = {
					cx: t,
					cy: e,
					rx: n,
					ry: i
				}), this.el("ellipse", o)
			}, r.path = function (t) {
				var e;
				return a(t, "object") && !a(t, "array") ? e = t : t && (e = {
					d: t
				}), this.el("path", e)
			}, r.group = r.g = function (t) {
				var e = this.el("g");
				return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
			}, r.svg = function (t, e, n, i, o, r, s, l) {
				var u = {};
				return a(t, "object") && null == e ? u = t : (null != t && (u.x = t), null != e && (u.y = e), null != n && (u.width = n), null != i && (u.height = i), null != o && null != r && null != s && null != l && (u.viewBox = [o, r, s, l])), this.el("svg", u)
			}, r.mask = function (t) {
				var e = this.el("mask");
				return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
			}, r.ptrn = function (t, e, n, i, o, r, s, l) {
				if (a(t, "object")) var u = t;
				else arguments.length ? (u = {}, null != t && (u.x = t), null != e && (u.y = e), null != n && (u.width = n), null != i && (u.height = i), null != o && null != r && null != s && null != l && (u.viewBox = [o, r, s, l])) : u = {
					patternUnits: "userSpaceOnUse"
				};
				return this.el("pattern", u)
			}, r.use = function (t) {
				return null != t ? (make("use", this.node), t instanceof n && (t.attr("id") || t.attr({
					id: ID()
				}), t = t.attr("id")), this.el("use", {
					"xlink:href": t
				})) : n.prototype.use.call(this)
			}, r.text = function (t, e, n) {
				var i = {};
				return a(t, "object") ? i = t : null != t && (i = {
					x: t,
					y: e,
					text: n || ""
				}), this.el("text", i)
			}, r.line = function (t, e, n, i) {
				var o = {};
				return a(t, "object") ? o = t : null != t && (o = {
					x1: t,
					x2: n,
					y1: e,
					y2: i
				}), this.el("line", o)
			}, r.polyline = function (t) {
				arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
				var e = {};
				return a(t, "object") && !a(t, "array") ? e = t : null != t && (e = {
					points: t
				}), this.el("polyline", e)
			}, r.polygon = function (t) {
				arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
				var e = {};
				return a(t, "object") && !a(t, "array") ? e = t : null != t && (e = {
					points: t
				}), this.el("polygon", e)
			},
			function () {
				function n() {
					return this.selectAll("stop")
				}

				function i(e, n) {
					var i = u("stop"),
						o = {
							offset: +n + "%"
						};
					return e = t.color(e), o["stop-color"] = e.hex, e.opacity < 1 && (o["stop-opacity"] = e.opacity), u(i, o), this.node.appendChild(i), this
				}

				function o() {
					if ("linearGradient" == this.type) {
						var e = u(this.node, "x1") || 0,
							n = u(this.node, "x2") || 1,
							i = u(this.node, "y1") || 0,
							o = u(this.node, "y2") || 0;
						return t._.box(e, i, math.abs(n - e), math.abs(o - i))
					}
					var r = this.node.cx || .5,
						a = this.node.cy || .5,
						s = this.node.r || 0;
					return t._.box(r - s, a - s, 2 * s, 2 * s)
				}

				function a(t, n) {
					function i(t, e) {
						for (var n = (e - h) / (t - p), i = p; t > i; i++) a[i].offset = +(+h + n * (i - p)).toFixed(2);
						p = t, h = e
					}
					var o, r = e("snap.util.grad.parse", null, n).firstDefined();
					if (!r) return null;
					r.params.unshift(t), o = "l" == r.type.toLowerCase() ? s.apply(0, r.params) : l.apply(0, r.params), r.type != r.type.toLowerCase() && u(o.node, {
						gradientUnits: "userSpaceOnUse"
					});
					var a = r.stops,
						c = a.length,
						h = 0,
						p = 0;
					c--;
					for (var d = 0; c > d; d++) "offset" in a[d] && i(d, a[d].offset);
					for (a[c].offset = a[c].offset || 100, i(c, a[c].offset), d = 0; c >= d; d++) {
						var f = a[d];
						o.addStop(f.color, f.offset)
					}
					return o
				}

				function s(e, r, a, s, l) {
					var c = t._.make("linearGradient", e);
					return c.stops = n, c.addStop = i, c.getBBox = o, null != r && u(c.node, {
						x1: r,
						y1: a,
						x2: s,
						y2: l
					}), c
				}

				function l(e, r, a, s, l, c) {
					var h = t._.make("radialGradient", e);
					return h.stops = n, h.addStop = i, h.getBBox = o, null != r && u(h.node, {
						cx: r,
						cy: a,
						r: s
					}), null != l && null != c && u(h.node, {
						fx: l,
						fy: c
					}), h
				}
				var u = t._.$;
				r.gradient = function (t) {
					return a(this.defs, t)
				}, r.gradientLinear = function (t, e, n, i) {
					return s(this.defs, t, e, n, i)
				}, r.gradientRadial = function (t, e, n, i, o) {
					return l(this.defs, t, e, n, i, o)
				}, r.toString = function () {
					var e, n = this.node.ownerDocument,
						i = n.createDocumentFragment(),
						o = n.createElement("div"),
						r = this.node.cloneNode(!0);
					return i.appendChild(o), o.appendChild(r), t._.$(r, {
						xmlns: "http://www.w3.org/2000/svg"
					}), e = o.innerHTML, i.removeChild(i.firstChild), e
				}, r.clear = function () {
					for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : r.clear.call({
						node: e
					}), e = t
				}
			}()
	}), i.plugin(function (t, e) {
		function n(t) {
			var e = n.ps = n.ps || {};
			return e[t] ? e[t].sleep = 100 : e[t] = {
				sleep: 100
			}, setTimeout(function () {
				for (var n in e) e[I](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
			}), e[t]
		}

		function i(t, e, n, i) {
			return null == t && (t = e = n = i = 0), null == e && (e = t.y, n = t.width, i = t.height, t = t.x), {
				x: t,
				y: e,
				width: n,
				w: n,
				height: i,
				h: i,
				x2: t + n,
				y2: e + i,
				cx: t + n / 2,
				cy: e + i / 2,
				r1: U.min(n, i) / 2,
				r2: U.max(n, i) / 2,
				r0: U.sqrt(n * n + i * i) / 2,
				path: w(t, e, n, i),
				vb: [t, e, n, i].join(" ")
			}
		}

		function o() {
			return this.join(",").replace(z, "$1")
		}

		function r(t) {
			var e = B(t);
			return e.toString = o, e
		}

		function a(t, e, n, i, o, r, a, s, u) {
			return null == u ? d(t, e, n, i, o, r, a, s) : l(t, e, n, i, o, r, a, s, f(t, e, n, i, o, r, a, s, u))
		}

		function s(n, i) {
			function o(t) {
				return +(+t).toFixed(3)
			}
			return t._.cacher(function (t, r, s) {
				t instanceof e && (t = t.attr("d")), t = k(t);
				for (var u, c, h, p, d, f = "", m = {}, g = 0, v = 0, y = t.length; y > v; v++) {
					if (h = t[v], "M" == h[0]) u = +h[1], c = +h[2];
					else {
						if (p = a(u, c, h[1], h[2], h[3], h[4], h[5], h[6]), g + p > r) {
							if (i && !m.start) {
								if (d = a(u, c, h[1], h[2], h[3], h[4], h[5], h[6], r - g), f += ["C" + o(d.start.x), o(d.start.y), o(d.m.x), o(d.m.y), o(d.x), o(d.y)], s) return f;
								m.start = f, f = ["M" + o(d.x), o(d.y) + "C" + o(d.n.x), o(d.n.y), o(d.end.x), o(d.end.y), o(h[5]), o(h[6])].join(), g += p, u = +h[5], c = +h[6];
								continue
							}
							if (!n && !i) return d = a(u, c, h[1], h[2], h[3], h[4], h[5], h[6], r - g)
						}
						g += p, u = +h[5], c = +h[6]
					}
					f += h.shift() + h
				}
				return m.end = f, d = n ? g : i ? m : l(u, c, h[0], h[1], h[2], h[3], h[4], h[5], 1)
			}, null, t._.clone)
		}

		function l(t, e, n, i, o, r, a, s, l) {
			var u = 1 - l,
				c = H(u, 3),
				h = H(u, 2),
				p = l * l,
				d = p * l,
				f = c * t + 3 * h * l * n + 3 * u * l * l * o + d * a,
				m = c * e + 3 * h * l * i + 3 * u * l * l * r + d * s,
				g = t + 2 * l * (n - t) + p * (o - 2 * n + t),
				v = e + 2 * l * (i - e) + p * (r - 2 * i + e),
				y = n + 2 * l * (o - n) + p * (a - 2 * o + n),
				_ = i + 2 * l * (r - i) + p * (s - 2 * r + i),
				x = u * t + l * n,
				b = u * e + l * i,
				w = u * o + l * a,
				P = u * r + l * s,
				L = 90 - 180 * U.atan2(g - y, v - _) / j;
			return {
				x: f,
				y: m,
				m: {
					x: g,
					y: v
				},
				n: {
					x: y,
					y: _
				},
				start: {
					x: x,
					y: b
				},
				end: {
					x: w,
					y: P
				},
				alpha: L
			}
		}

		function u(e, n, o, r, a, s, l, u) {
			t.is(e, "array") || (e = [e, n, o, r, a, s, l, u]);
			var c = D.apply(null, e);
			return i(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y)
		}

		function c(t, e, n) {
			return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
		}

		function h(t, e) {
			return t = i(t), e = i(e), c(e, t.x, t.y) || c(e, t.x2, t.y) || c(e, t.x, t.y2) || c(e, t.x2, t.y2) || c(t, e.x, e.y) || c(t, e.x2, e.y) || c(t, e.x, e.y2) || c(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
		}

		function p(t, e, n, i, o) {
			var r = -3 * e + 9 * n - 9 * i + 3 * o,
				a = t * r + 6 * e - 12 * n + 6 * i;
			return t * a - 3 * e + 3 * n
		}

		function d(t, e, n, i, o, r, a, s, l) {
			null == l && (l = 1), l = l > 1 ? 1 : 0 > l ? 0 : l;
			for (var u = l / 2, c = 12, h = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], f = 0, m = 0; c > m; m++) {
				var g = u * h[m] + u,
					v = p(g, t, n, o, a),
					y = p(g, e, i, r, s),
					_ = v * v + y * y;
				f += d[m] * U.sqrt(_)
			}
			return u * f
		}

		function f(t, e, n, i, o, r, a, s, l) {
			if (!(0 > l || d(t, e, n, i, o, r, a, s) < l)) {
				var u, c = 1,
					h = c / 2,
					p = c - h,
					f = .01;
				for (u = d(t, e, n, i, o, r, a, s, p); q(u - l) > f;) h /= 2, p += (l > u ? 1 : -1) * h, u = d(t, e, n, i, o, r, a, s, p);
				return p
			}
		}

		function m(t, e, n, i, o, r, a, s) {
			if (!(F(t, n) < V(o, a) || V(t, n) > F(o, a) || F(e, i) < V(r, s) || V(e, i) > F(r, s))) {
				var l = (t * i - e * n) * (o - a) - (t - n) * (o * s - r * a),
					u = (t * i - e * n) * (r - s) - (e - i) * (o * s - r * a),
					c = (t - n) * (r - s) - (e - i) * (o - a);
				if (c) {
					var h = l / c,
						p = u / c,
						d = +h.toFixed(2),
						f = +p.toFixed(2);
					if (!(d < +V(t, n).toFixed(2) || d > +F(t, n).toFixed(2) || d < +V(o, a).toFixed(2) || d > +F(o, a).toFixed(2) || f < +V(e, i).toFixed(2) || f > +F(e, i).toFixed(2) || f < +V(r, s).toFixed(2) || f > +F(r, s).toFixed(2))) return {
						x: h,
						y: p
					}
				}
			}
		}

		function g(t, e, n) {
			var i = u(t),
				o = u(e);
			if (!h(i, o)) return n ? 0 : [];
			for (var r = d.apply(0, t), a = d.apply(0, e), s = ~~(r / 8), c = ~~(a / 8), p = [], f = [], g = {}, v = n ? 0 : [], y = 0; s + 1 > y; y++) {
				var _ = l.apply(0, t.concat(y / s));
				p.push({
					x: _.x,
					y: _.y,
					t: y / s
				})
			}
			for (y = 0; c + 1 > y; y++) _ = l.apply(0, e.concat(y / c)), f.push({
				x: _.x,
				y: _.y,
				t: y / c
			});
			for (y = 0; s > y; y++)
				for (var x = 0; c > x; x++) {
					var b = p[y],
						w = p[y + 1],
						P = f[x],
						L = f[x + 1],
						C = q(w.x - b.x) < .001 ? "y" : "x",
						T = q(L.x - P.x) < .001 ? "y" : "x",
						S = m(b.x, b.y, w.x, w.y, P.x, P.y, L.x, L.y);
					if (S) {
						if (g[S.x.toFixed(4)] == S.y.toFixed(4)) continue;
						g[S.x.toFixed(4)] = S.y.toFixed(4);
						var E = b.t + q((S[C] - b[C]) / (w[C] - b[C])) * (w.t - b.t),
							D = P.t + q((S[T] - P[T]) / (L[T] - P[T])) * (L.t - P.t);
						E >= 0 && 1 >= E && D >= 0 && 1 >= D && (n ? v++ : v.push({
							x: S.x,
							y: S.y,
							t1: E,
							t2: D
						}))
					}
				}
			return v
		}

		function v(t, e) {
			return _(t, e)
		}

		function y(t, e) {
			return _(t, e, 1)
		}

		function _(t, e, n) {
			t = k(t), e = k(e);
			for (var i, o, r, a, s, l, u, c, h, p, d = n ? 0 : [], f = 0, m = t.length; m > f; f++) {
				var v = t[f];
				if ("M" == v[0]) i = s = v[1], o = l = v[2];
				else {
					"C" == v[0] ? (h = [i, o].concat(v.slice(1)), i = h[6], o = h[7]) : (h = [i, o, i, o, s, l, s, l], i = s, o = l);
					for (var y = 0, _ = e.length; _ > y; y++) {
						var x = e[y];
						if ("M" == x[0]) r = u = x[1], a = c = x[2];
						else {
							"C" == x[0] ? (p = [r, a].concat(x.slice(1)), r = p[6], a = p[7]) : (p = [r, a, r, a, u, c, u, c], r = u, a = c);
							var b = g(h, p, n);
							if (n) d += b;
							else {
								for (var w = 0, P = b.length; P > w; w++) b[w].segment1 = f, b[w].segment2 = y, b[w].bez1 = h, b[w].bez2 = p;
								d = d.concat(b)
							}
						}
					}
				}
			}
			return d
		}

		function x(t, e, n) {
			var i = b(t);
			return c(i, e, n) && _(t, [["M", e, n], ["H", i.x2 + 10]], 1) % 2 == 1
		}

		function b(t) {
			var e = n(t);
			if (e.bbox) return B(e.bbox);
			if (!t) return i();
			t = k(t);
			for (var o, r = 0, a = 0, s = [], l = [], u = 0, c = t.length; c > u; u++)
				if (o = t[u], "M" == o[0]) r = o[1], a = o[2], s.push(r), l.push(a);
				else {
					var h = D(r, a, o[1], o[2], o[3], o[4], o[5], o[6]);
					s = s.concat(h.min.x, h.max.x), l = l.concat(h.min.y, h.max.y), r = o[5], a = o[6]
				}
			var p = V.apply(0, s),
				d = V.apply(0, l),
				f = F.apply(0, s),
				m = F.apply(0, l),
				g = i(p, d, f - p, m - d);
			return e.bbox = B(g), g
		}

		function w(t, e, n, i, r) {
			if (r) return [["M", +t + +r, e], ["l", n - 2 * r, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, i - 2 * r], ["a", r, r, 0, 0, 1, -r, r], ["l", 2 * r - n, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, 2 * r - i], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
			var a = [["M", t, e], ["l", n, 0], ["l", 0, i], ["l", -n, 0], ["z"]];
			return a.toString = o, a
		}

		function P(t, e, n, i, r) {
			if (null == r && null == i && (i = n), t = +t, e = +e, n = +n, i = +i, null != r) var a = Math.PI / 180,
				s = t + n * Math.cos(-i * a),
				l = t + n * Math.cos(-r * a),
				u = e + n * Math.sin(-i * a),
				c = e + n * Math.sin(-r * a),
				h = [["M", s, u], ["A", n, n, 0, +(r - i > 180), 0, l, c]];
			else h = [["M", t, e], ["m", 0, -i], ["a", n, i, 0, 1, 1, 0, 2 * i], ["a", n, i, 0, 1, 1, 0, -2 * i], ["z"]];
			return h.toString = o, h
		}

		function L(e) {
			var i = n(e),
				a = String.prototype.toLowerCase;
			if (i.rel) return r(i.rel);
			t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
			var s = [],
				l = 0,
				u = 0,
				c = 0,
				h = 0,
				p = 0;
			"M" == e[0][0] && (l = e[0][1], u = e[0][2], c = l, h = u, p++, s.push(["M", l, u]));
			for (var d = p, f = e.length; f > d; d++) {
				var m = s[d] = [],
					g = e[d];
				if (g[0] != a.call(g[0])) switch (m[0] = a.call(g[0]), m[0]) {
				case "a":
					m[1] = g[1], m[2] = g[2], m[3] = g[3], m[4] = g[4], m[5] = g[5], m[6] = +(g[6] - l).toFixed(3), m[7] = +(g[7] - u).toFixed(3);
					break;
				case "v":
					m[1] = +(g[1] - u).toFixed(3);
					break;
				case "m":
					c = g[1], h = g[2];
				default:
					for (var v = 1, y = g.length; y > v; v++) m[v] = +(g[v] - (v % 2 ? l : u)).toFixed(3)
				} else {
					m = s[d] = [], "m" == g[0] && (c = g[1] + l, h = g[2] + u);
					for (var _ = 0, x = g.length; x > _; _++) s[d][_] = g[_]
				}
				var b = s[d].length;
				switch (s[d][0]) {
				case "z":
					l = c, u = h;
					break;
				case "h":
					l += +s[d][b - 1];
					break;
				case "v":
					u += +s[d][b - 1];
					break;
				default:
					l += +s[d][b - 2], u += +s[d][b - 1]
				}
			}
			return s.toString = o, i.rel = r(s), s
		}

		function C(e) {
			var i = n(e);
			if (i.abs) return r(i.abs);
			if (O(e, "array") && O(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length) return [["M", 0, 0]];
			var a, s = [],
				l = 0,
				u = 0,
				c = 0,
				h = 0,
				p = 0;
			"M" == e[0][0] && (l = +e[0][1], u = +e[0][2], c = l, h = u, p++, s[0] = ["M", l, u]);
			for (var d, f, m = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), g = p, v = e.length; v > g; g++) {
				if (s.push(d = []), f = e[g], a = f[0], a != a.toUpperCase()) switch (d[0] = a.toUpperCase(), d[0]) {
					case "A":
						d[1] = f[1], d[2] = f[2], d[3] = f[3], d[4] = f[4], d[5] = f[5], d[6] = +f[6] + l, d[7] = +f[7] + u;
						break;
					case "V":
						d[1] = +f[1] + u;
						break;
					case "H":
						d[1] = +f[1] + l;
						break;
					case "R":
						for (var y = [l, u].concat(f.slice(1)), _ = 2, x = y.length; x > _; _++) y[_] = +y[_] + l, y[++_] = +y[_] + u;
						s.pop(), s = s.concat(A(y, m));
						break;
					case "O":
						s.pop(), y = P(l, u, f[1], f[2]), y.push(y[0]), s = s.concat(y);
						break;
					case "U":
						s.pop(), s = s.concat(P(l, u, f[1], f[2], f[3])), d = ["U"].concat(s[s.length - 1].slice(-2));
						break;
					case "M":
						c = +f[1] + l, h = +f[2] + u;
					default:
						for (_ = 1, x = f.length; x > _; _++) d[_] = +f[_] + (_ % 2 ? l : u)
					} else if ("R" == a) y = [l, u].concat(f.slice(1)), s.pop(), s = s.concat(A(y, m)), d = ["R"].concat(f.slice(-2));
					else if ("O" == a) s.pop(), y = P(l, u, f[1], f[2]), y.push(y[0]), s = s.concat(y);
				else if ("U" == a) s.pop(), s = s.concat(P(l, u, f[1], f[2], f[3])), d = ["U"].concat(s[s.length - 1].slice(-2));
				else
					for (var b = 0, w = f.length; w > b; b++) d[b] = f[b];
				if (a = a.toUpperCase(), "O" != a) switch (d[0]) {
				case "Z":
					l = +c, u = +h;
					break;
				case "H":
					l = d[1];
					break;
				case "V":
					u = d[1];
					break;
				case "M":
					c = d[d.length - 2], h = d[d.length - 1];
				default:
					l = d[d.length - 2], u = d[d.length - 1]
				}
			}
			return s.toString = o, i.abs = r(s), s
		}

		function T(t, e, n, i) {
			return [t, e, n, i, n, i]
		}

		function S(t, e, n, i, o, r) {
			var a = 1 / 3,
				s = 2 / 3;
			return [a * t + s * n, a * e + s * i, a * o + s * n, a * r + s * i, o, r]
		}

		function E(e, n, i, o, r, a, s, l, u, c) {
			var h, p = 120 * j / 180,
				d = j / 180 * (+r || 0),
				f = [],
				m = t._.cacher(function (t, e, n) {
					var i = t * U.cos(n) - e * U.sin(n),
						o = t * U.sin(n) + e * U.cos(n);
					return {
						x: i,
						y: o
					}
				});
			if (c) L = c[0], C = c[1], w = c[2], P = c[3];
			else {
				h = m(e, n, -d), e = h.x, n = h.y, h = m(l, u, -d), l = h.x, u = h.y;
				var g = (U.cos(j / 180 * r), U.sin(j / 180 * r), (e - l) / 2),
					v = (n - u) / 2,
					y = g * g / (i * i) + v * v / (o * o);
				y > 1 && (y = U.sqrt(y), i = y * i, o = y * o);
				var _ = i * i,
					x = o * o,
					b = (a == s ? -1 : 1) * U.sqrt(q((_ * x - _ * v * v - x * g * g) / (_ * v * v + x * g * g))),
					w = b * i * v / o + (e + l) / 2,
					P = b * -o * g / i + (n + u) / 2,
					L = U.asin(((n - P) / o).toFixed(9)),
					C = U.asin(((u - P) / o).toFixed(9));
				L = w > e ? j - L : L, C = w > l ? j - C : C, 0 > L && (L = 2 * j + L), 0 > C && (C = 2 * j + C), s && L > C && (L -= 2 * j), !s && C > L && (C -= 2 * j)
			}
			var T = C - L;
			if (q(T) > p) {
				var S = C,
					D = l,
					k = u;
				C = L + p * (s && C > L ? 1 : -1), l = w + i * U.cos(C), u = P + o * U.sin(C), f = E(l, u, i, o, r, 0, s, D, k, [C, S, w, P])
			}
			T = C - L;
			var M = U.cos(L),
				A = U.sin(L),
				N = U.cos(C),
				O = U.sin(C),
				B = U.tan(T / 4),
				I = 4 / 3 * i * B,
				z = 4 / 3 * o * B,
				R = [e, n],
				V = [e + I * A, n - z * M],
				F = [l + I * O, u - z * N],
				H = [l, u];
			if (V[0] = 2 * R[0] - V[0], V[1] = 2 * R[1] - V[1], c) return [V, F, H].concat(f);
			f = [V, F, H].concat(f).join().split(",");
			for (var Z = [], W = 0, X = f.length; X > W; W++) Z[W] = W % 2 ? m(f[W - 1], f[W], d).y : m(f[W], f[W + 1], d).x;
			return Z
		}

		function D(t, e, n, i, o, r, a, s) {
			for (var l, u, c, h, p, d, f, m, g = [], v = [[], []], y = 0; 2 > y; ++y)
				if (0 == y ? (u = 6 * t - 12 * n + 6 * o, l = -3 * t + 9 * n - 9 * o + 3 * a, c = 3 * n - 3 * t) : (u = 6 * e - 12 * i + 6 * r, l = -3 * e + 9 * i - 9 * r + 3 * s, c = 3 * i - 3 * e), q(l) < 1e-12) {
					if (q(u) < 1e-12) continue;
					h = -c / u, h > 0 && 1 > h && g.push(h)
				} else f = u * u - 4 * c * l, m = U.sqrt(f), 0 > f || (p = (-u + m) / (2 * l), p > 0 && 1 > p && g.push(p), d = (-u - m) / (2 * l), d > 0 && 1 > d && g.push(d));
			for (var _, x = g.length, b = x; x--;) h = g[x], _ = 1 - h, v[0][x] = _ * _ * _ * t + 3 * _ * _ * h * n + 3 * _ * h * h * o + h * h * h * a, v[1][x] = _ * _ * _ * e + 3 * _ * _ * h * i + 3 * _ * h * h * r + h * h * h * s;
			return v[0][b] = t, v[1][b] = e, v[0][b + 1] = a, v[1][b + 1] = s, v[0].length = v[1].length = b + 2, {
				min: {
					x: V.apply(0, v[0]),
					y: V.apply(0, v[1])
				},
				max: {
					x: F.apply(0, v[0]),
					y: F.apply(0, v[1])
				}
			}
		}

		function k(t, e) {
			var i = !e && n(t);
			if (!e && i.curve) return r(i.curve);
			for (var o = C(t), a = e && C(e), s = {
					x: 0,
					y: 0,
					bx: 0,
					by: 0,
					X: 0,
					Y: 0,
					qx: null,
					qy: null
				}, l = {
					x: 0,
					y: 0,
					bx: 0,
					by: 0,
					X: 0,
					Y: 0,
					qx: null,
					qy: null
				}, u = (function (t, e, n) {
					var i, o;
					if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
					switch (!(t[0] in {
						T: 1,
						Q: 1
					}) && (e.qx = e.qy = null), t[0]) {
					case "M":
						e.X = t[1], e.Y = t[2];
						break;
					case "A":
						t = ["C"].concat(E.apply(0, [e.x, e.y].concat(t.slice(1))));
						break;
					case "S":
						"C" == n || "S" == n ? (i = 2 * e.x - e.bx, o = 2 * e.y - e.by) : (i = e.x, o = e.y), t = ["C", i, o].concat(t.slice(1));
						break;
					case "T":
						"Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(S(e.x, e.y, e.qx, e.qy, t[1], t[2]));
						break;
					case "Q":
						e.qx = t[1], e.qy = t[2], t = ["C"].concat(S(e.x, e.y, t[1], t[2], t[3], t[4]));
						break;
					case "L":
						t = ["C"].concat(T(e.x, e.y, t[1], t[2]));
						break;
					case "H":
						t = ["C"].concat(T(e.x, e.y, t[1], e.y));
						break;
					case "V":
						t = ["C"].concat(T(e.x, e.y, e.x, t[1]));
						break;
					case "Z":
						t = ["C"].concat(T(e.x, e.y, e.X, e.Y))
					}
					return t
				}), c = function (t, e) {
					if (t[e].length > 7) {
						t[e].shift();
						for (var n = t[e]; n.length;) p[e] = "A", a && (d[e] = "A"), t.splice(e++, 0, ["C"].concat(n.splice(0, 6)));
						t.splice(e, 1), v = F(o.length, a && a.length || 0)
					}
				}, h = function (t, e, n, i, r) {
					t && e && "M" == t[r][0] && "M" != e[r][0] && (e.splice(r, 0, ["M", i.x, i.y]), n.bx = 0, n.by = 0, n.x = t[r][1], n.y = t[r][2], v = F(o.length, a && a.length || 0))
				}, p = [], d = [], f = "", m = "", g = 0, v = F(o.length, a && a.length || 0); v > g; g++) {
				o[g] && (f = o[g][0]), "C" != f && (p[g] = f, g && (m = p[g - 1])), o[g] = u(o[g], s, m), "A" != p[g] && "C" == f && (p[g] = "C"), c(o, g), a && (a[g] && (f = a[g][0]), "C" != f && (d[g] = f, g && (m = d[g - 1])), a[g] = u(a[g], l, m), "A" != d[g] && "C" == f && (d[g] = "C"), c(a, g)), h(o, a, s, l, g), h(a, o, l, s, g);
				var y = o[g],
					_ = a && a[g],
					x = y.length,
					b = a && _.length;
				s.x = y[x - 2], s.y = y[x - 1], s.bx = R(y[x - 4]) || s.x, s.by = R(y[x - 3]) || s.y, l.bx = a && (R(_[b - 4]) || l.x), l.by = a && (R(_[b - 3]) || l.y), l.x = a && _[b - 2], l.y = a && _[b - 1]
			}
			return a || (i.curve = r(o)), a ? [o, a] : o
		}

		function M(t, e) {
			if (!e) return t;
			var n, i, o, r, a, s, l;
			for (t = k(t), o = 0, a = t.length; a > o; o++)
				for (l = t[o], r = 1, s = l.length; s > r; r += 2) n = e.x(l[r], l[r + 1]), i = e.y(l[r], l[r + 1]), l[r] = n, l[r + 1] = i;
			return t
		}

		function A(t, e) {
			for (var n = [], i = 0, o = t.length; o - 2 * !e > i; i += 2) {
				var r = [{
					x: +t[i - 2],
					y: +t[i - 1]
				}, {
					x: +t[i],
					y: +t[i + 1]
				}, {
					x: +t[i + 2],
					y: +t[i + 3]
				}, {
					x: +t[i + 4],
					y: +t[i + 5]
				}];
				e ? i ? o - 4 == i ? r[3] = {
					x: +t[0],
					y: +t[1]
				} : o - 2 == i && (r[2] = {
					x: +t[0],
					y: +t[1]
				}, r[3] = {
					x: +t[2],
					y: +t[3]
				}) : r[0] = {
					x: +t[o - 2],
					y: +t[o - 1]
				} : o - 4 == i ? r[3] = r[2] : i || (r[0] = {
					x: +t[i],
					y: +t[i + 1]
				}), n.push(["C", (-r[0].x + 6 * r[1].x + r[2].x) / 6, (-r[0].y + 6 * r[1].y + r[2].y) / 6, (r[1].x + 6 * r[2].x - r[3].x) / 6, (r[1].y + 6 * r[2].y - r[3].y) / 6, r[2].x, r[2].y])
			}
			return n
		}
		var N = e.prototype,
			O = t.is,
			B = t._.clone,
			I = "hasOwnProperty",
			z = /,?([a-z]),?/gi,
			R = parseFloat,
			U = Math,
			j = U.PI,
			V = U.min,
			F = U.max,
			H = U.pow,
			q = U.abs,
			Z = s(1),
			W = s(),
			X = s(0, 1),
			Y = t._unit2px,
			G = {
				path: function (t) {
					return t.attr("path")
				},
				circle: function (t) {
					var e = Y(t);
					return P(e.cx, e.cy, e.r)
				},
				ellipse: function (t) {
					var e = Y(t);
					return P(e.cx || 0, e.cy || 0, e.rx, e.ry)
				},
				rect: function (t) {
					var e = Y(t);
					return w(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
				},
				image: function (t) {
					var e = Y(t);
					return w(e.x || 0, e.y || 0, e.width, e.height)
				},
				line: function (t) {
					return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
				},
				polyline: function (t) {
					return "M" + t.attr("points")
				},
				polygon: function (t) {
					return "M" + t.attr("points") + "z"
				},
				deflt: function (t) {
					var e = t.node.getBBox();
					return w(e.x, e.y, e.width, e.height)
				}
			};
		t.path = n, t.path.getTotalLength = Z, t.path.getPointAtLength = W, t.path.getSubpath = function (t, e, n) {
			if (this.getTotalLength(t) - n < 1e-6) return X(t, e).end;
			var i = X(t, n, 1);
			return e ? X(i, e).end : i
		}, N.getTotalLength = function () {
			return this.node.getTotalLength ? this.node.getTotalLength() : void 0
		}, N.getPointAtLength = function (t) {
			return W(this.attr("d"), t)
		}, N.getSubpath = function (e, n) {
			return t.path.getSubpath(this.attr("d"), e, n)
		}, t._.box = i, t.path.findDotsAtSegment = l, t.path.bezierBBox = u, t.path.isPointInsideBBox = c, t.path.isBBoxIntersect = h, t.path.intersection = v, t.path.intersectionNumber = y, t.path.isPointInside = x, t.path.getBBox = b, t.path.get = G, t.path.toRelative = L, t.path.toAbsolute = C, t.path.toCubic = k, t.path.map = M, t.path.toString = o, t.path.clone = r
	}), i.plugin(function (t) {
		var i = Math.max,
			o = Math.min,
			r = function (t) {
				if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t)
					for (var e = 0, n = t.length; n > e; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
			},
			a = r.prototype;
		a.push = function () {
			for (var t, e, n = 0, i = arguments.length; i > n; n++) t = arguments[n], t && (e = this.items.length, this[e] = this.items[e] = t, this.length++);
			return this
		}, a.pop = function () {
			return this.length && delete this[this.length--], this.items.pop()
		}, a.forEach = function (t, e) {
			for (var n = 0, i = this.items.length; i > n; n++)
				if (t.call(e, this.items[n], n) === !1) return this;
			return this
		}, a.animate = function (i, o, r, a) {
			"function" != typeof r || r.length || (a = r, r = n.linear), i instanceof t._.Animation && (a = i.callback, r = i.easing, o = r.dur, i = i.attr);
			var s = arguments;
			if (t.is(i, "array") && t.is(s[s.length - 1], "array")) var l = !0;
			var u, c = function () {
					u ? this.b = u : u = this.b
				},
				h = 0,
				p = a && function () {
					h++ == this.length && a.call(this)
				};
			return this.forEach(function (t, n) {
				e.once("snap.animcreated." + t.id, c), l ? s[n] && t.animate.apply(t, s[n]) : t.animate(i, o, r, p)
			})
		}, a.remove = function () {
			for (; this.length;) this.pop().remove();
			return this
		}, a.bind = function (t, e, n) {
			var i = {};
			if ("function" == typeof e) this.bindings[t] = e;
			else {
				var o = n || t;
				this.bindings[t] = function (t) {
					i[o] = t, e.attr(i)
				}
			}
			return this
		}, a.attr = function (t) {
			var e = {};
			for (var n in t) this.bindings[n] ? this.bindings[n](t[n]) : e[n] = t[n];
			for (var i = 0, o = this.items.length; o > i; i++) this.items[i].attr(e);
			return this
		}, a.clear = function () {
			for (; this.length;) this.pop()
		}, a.splice = function (t, e) {
			t = 0 > t ? i(this.length + t, 0) : t, e = i(0, o(this.length - t, e));
			var n, a = [],
				s = [],
				l = [];
			for (n = 2; n < arguments.length; n++) l.push(arguments[n]);
			for (n = 0; e > n; n++) s.push(this[t + n]);
			for (; n < this.length - t; n++) a.push(this[t + n]);
			var u = l.length;
			for (n = 0; n < u + a.length; n++) this.items[t + n] = this[t + n] = u > n ? l[n] : a[n - u];
			for (n = this.items.length = this.length -= e - u; this[n];) delete this[n++];
			return new r(s)
		}, a.exclude = function (t) {
			for (var e = 0, n = this.length; n > e; e++)
				if (this[e] == t) return this.splice(e, 1), !0;
			return !1
		}, a.insertAfter = function (t) {
			for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
			return this
		}, a.getBBox = function () {
			for (var t = [], e = [], n = [], r = [], a = this.items.length; a--;)
				if (!this.items[a].removed) {
					var s = this.items[a].getBBox();
					t.push(s.x), e.push(s.y), n.push(s.x + s.width), r.push(s.y + s.height)
				}
			return t = o.apply(0, t), e = o.apply(0, e), n = i.apply(0, n), r = i.apply(0, r), {
				x: t,
				y: e,
				x2: n,
				y2: r,
				width: n - t,
				height: r - e,
				cx: t + (n - t) / 2,
				cy: e + (r - e) / 2
			}
		}, a.clone = function (t) {
			t = new r;
			for (var e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].clone());
			return t
		}, a.toString = function () {
			return "Snap‘s set"
		}, a.type = "set", t.set = function () {
			var t = new r;
			return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
		}
	}), i.plugin(function (t, n) {
		function i(t) {
			var e = t[0];
			switch (e.toLowerCase()) {
			case "t":
				return [e, 0, 0];
			case "m":
				return [e, 1, 0, 0, 1, 0, 0];
			case "r":
				return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
			case "s":
				return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
			}
		}

		function o(e, n, o) {
			n = p(n).replace(/\.{3}|\u2026/g, e), e = t.parseTransformString(e) || [], n = t.parseTransformString(n) || [];
			for (var r, a, s, c, h = Math.max(e.length, n.length), d = [], f = [], m = 0; h > m; m++) {
				if (s = e[m] || i(n[m]), c = n[m] || i(s), s[0] != c[0] || "r" == s[0].toLowerCase() && (s[2] != c[2] || s[3] != c[3]) || "s" == s[0].toLowerCase() && (s[3] != c[3] || s[4] != c[4])) {
					e = t._.transform2matrix(e, o()), n = t._.transform2matrix(n, o()), d = [["m", e.a, e.b, e.c, e.d, e.e, e.f]], f = [["m", n.a, n.b, n.c, n.d, n.e, n.f]];
					break
				}
				for (d[m] = [], f[m] = [], r = 0, a = Math.max(s.length, c.length); a > r; r++) r in s && (d[m][r] = s[r]), r in c && (f[m][r] = c[r])
			}
			return {
				from: u(d),
				to: u(f),
				f: l(d)
			}
		}

		function r(t) {
			return t
		}

		function a(t) {
			return function (e) {
				return +e.toFixed(3) + t
			}
		}

		function s(e) {
			return t.rgb(e[0], e[1], e[2])
		}

		function l(t) {
			var e, n, i, o, r, a, s = 0,
				l = [];
			for (e = 0, n = t.length; n > e; e++) {
				for (r = "[", a = ['"' + t[e][0] + '"'], i = 1, o = t[e].length; o > i; i++) a[i] = "val[" + s++ + "]";
				r += a + "]", l[e] = r
			}
			return Function("val", "return Snap.path.toString.call([" + l + "])")
		}

		function u(t) {
			for (var e = [], n = 0, i = t.length; i > n; n++)
				for (var o = 1, r = t[n].length; r > o; o++) e.push(t[n][o]);
			return e
		}
		var c = {},
			h = /[a-z]+$/i,
			p = String;
		c.stroke = c.fill = "colour", n.prototype.equal = function (t, n) {
			return e("snap.util.equal", this, t, n).firstDefined()
		}, e.on("snap.util.equal", function (e, n) {
			var i, d, f = p(this.attr(e) || ""),
				m = this;
			if (f == +f && n == +n) return {
				from: +f,
				to: +n,
				f: r
			};
			if ("colour" == c[e]) return i = t.color(f), d = t.color(n), {
				from: [i.r, i.g, i.b, i.opacity],
				to: [d.r, d.g, d.b, d.opacity],
				f: s
			};
			if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return n instanceof t.Matrix && (n = n.toTransformString()), t._.rgTransform.test(n) || (n = t._.svgTransform2string(n)), o(f, n, function () {
				return m.getBBox(1)
			});
			if ("d" == e || "path" == e) return i = t.path.toCubic(f, n), {
				from: u(i[0]),
				to: u(i[1]),
				f: l(i[0])
			};
			if ("points" == e) return i = p(f).split(t._.separator), d = p(n).split(t._.separator), {
				from: i,
				to: d,
				f: function (t) {
					return t
				}
			};
			aUnit = f.match(h);
			var g = p(n).match(h);
			return aUnit && aUnit == g ? {
				from: parseFloat(f),
				to: parseFloat(n),
				f: a(aUnit)
			} : {
				from: this.asPX(e),
				to: this.asPX(e, n),
				f: r
			}
		})
	}), i.plugin(function (t, n, i, o) {
		for (var r = n.prototype, a = "hasOwnProperty", s = ("createTouch" in o.doc), l = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], u = {
				mousedown: "touchstart",
				mousemove: "touchmove",
				mouseup: "touchend"
			}, c = (function (t, e) {
				var n = "y" == t ? "scrollTop" : "scrollLeft",
					i = e && e.node ? e.node.ownerDocument : o.doc;
				return i[n in i.documentElement ? "documentElement" : "body"][n]
			}), h = function () {
				this.returnValue = !1
			}, p = function () {
				return this.originalEvent.preventDefault()
			}, d = function () {
				this.cancelBubble = !0
			}, f = function () {
				return this.originalEvent.stopPropagation()
			}, m = function () {
				return o.doc.addEventListener ? function (t, e, n, i) {
					var o = s && u[e] ? u[e] : e,
						r = function (o) {
							var r = c("y", i),
								l = c("x", i);
							if (s && u[a](e))
								for (var h = 0, d = o.targetTouches && o.targetTouches.length; d > h; h++)
									if (o.targetTouches[h].target == t || t.contains(o.targetTouches[h].target)) {
										var m = o;
										o = o.targetTouches[h], o.originalEvent = m, o.preventDefault = p, o.stopPropagation = f;
										break
									}
							var g = o.clientX + l,
								v = o.clientY + r;
							return n.call(i, o, g, v)
						};
					return e !== o && t.addEventListener(e, r, !1), t.addEventListener(o, r, !1),
						function () {
							return e !== o && t.removeEventListener(e, r, !1), t.removeEventListener(o, r, !1), !0
						}
				} : o.doc.attachEvent ? function (t, e, n, i) {
					var o = function (t) {
						t = t || i.node.ownerDocument.window.event;
						var e = c("y", i),
							o = c("x", i),
							r = t.clientX + o,
							a = t.clientY + e;
						return t.preventDefault = t.preventDefault || h, t.stopPropagation = t.stopPropagation || d, n.call(i, t, r, a)
					};
					t.attachEvent("on" + e, o);
					var r = function () {
						return t.detachEvent("on" + e, o), !0
					};
					return r
				} : void 0
			}(), g = [], v = function (t) {
				for (var n, i = t.clientX, o = t.clientY, r = c("y"), a = c("x"), l = g.length; l--;) {
					if (n = g[l], s) {
						for (var u, h = t.touches && t.touches.length; h--;)
							if (u = t.touches[h], u.identifier == n.el._drag.id || n.el.node.contains(u.target)) {
								i = u.clientX, o = u.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
								break
							}
					} else t.preventDefault();
					var p = n.el.node;
					p.nextSibling, p.parentNode, p.style.display, i += a, o += r, e("snap.drag.move." + n.el.id, n.move_scope || n.el, i - n.el._drag.x, o - n.el._drag.y, i, o, t)
				}
			}, y = function (n) {
				t.unmousemove(v).unmouseup(y);
				for (var i, o = g.length; o--;) i = g[o], i.el._drag = {}, e("snap.drag.end." + i.el.id, i.end_scope || i.start_scope || i.move_scope || i.el, n);
				g = []
			}, _ = l.length; _--;) ! function (e) {
			t[e] = r[e] = function (n, i) {
				return t.is(n, "function") && (this.events = this.events || [], this.events.push({
					name: e,
					f: n,
					unbind: m(this.node || document, e, n, i || this)
				})), this
			}, t["un" + e] = r["un" + e] = function (t) {
				for (var n = this.events || [], i = n.length; i--;)
					if (n[i].name == e && (n[i].f == t || !t)) return n[i].unbind(), n.splice(i, 1), !n.length && delete this.events, this;
				return this
			}
		}(l[_]);
		r.hover = function (t, e, n, i) {
			return this.mouseover(t, n).mouseout(e, i || n)
		}, r.unhover = function (t, e) {
			return this.unmouseover(t).unmouseout(e)
		};
		var x = [];
		r.drag = function (n, i, o, r, a, s) {
			function l(l, u, c) {
				(l.originalEvent || l).preventDefault(), this._drag.x = u, this._drag.y = c, this._drag.id = l.identifier, !g.length && t.mousemove(v).mouseup(y), g.push({
					el: this,
					move_scope: r,
					start_scope: a,
					end_scope: s
				}), i && e.on("snap.drag.start." + this.id, i), n && e.on("snap.drag.move." + this.id, n), o && e.on("snap.drag.end." + this.id, o), e("snap.drag.start." + this.id, a || r || this, u, c, l)
			}
			if (!arguments.length) {
				var u;
				return this.drag(function (t, e) {
					this.attr({
						transform: u + (u ? "T" : "t") + [t, e]
					})
				}, function () {
					u = this.transform().local
				})
			}
			return this._drag = {}, x.push({
				el: this,
				start: l
			}), this.mousedown(l), this
		}, r.undrag = function () {
			for (var n = x.length; n--;) x[n].el == this && (this.unmousedown(x[n].start), x.splice(n, 1), e.unbind("snap.drag.*." + this.id));
			return !x.length && t.unmousemove(v).unmouseup(y), this
		}
	}), i.plugin(function (t, n, i) {
		var o = (n.prototype, i.prototype),
			r = /^\s*url\((.+)\)/,
			a = String,
			s = t._.$;
		t.filter = {}, o.filter = function (e) {
			var i = this;
			"svg" != i.type && (i = i.paper);
			var o = t.parse(a(e)),
				r = t._.id(),
				l = (i.node.offsetWidth, i.node.offsetHeight, s("filter"));
			return s(l, {
				id: r,
				filterUnits: "userSpaceOnUse"
			}), l.appendChild(o.node), i.defs.appendChild(l), new n(l)
		}, e.on("snap.util.getattr.filter", function () {
			e.stop();
			var n = s(this.node, "filter");
			if (n) {
				var i = a(n).match(r);
				return i && t.select(i[1])
			}
		}), e.on("snap.util.attr.filter", function (i) {
			if (i instanceof n && "filter" == i.type) {
				e.stop();
				var o = i.node.id;
				o || (s(i.node, {
					id: i.id
				}), o = i.id), s(this.node, {
					filter: t.url(o)
				})
			}
			i && "none" != i || (e.stop(), this.node.removeAttribute("filter"))
		}), t.filter.blur = function (e, n) {
			null == e && (e = 2);
			var i = null == n ? e : [e, n];
			return t.format('<feGaussianBlur stdDeviation="{def}"/>', {
				def: i
			})
		}, t.filter.blur.toString = function () {
			return this()
		}, t.filter.shadow = function (e, n, i, o, r) {
			return "string" == typeof i && (o = i, r = o, i = 4), "string" != typeof o && (r = o, o = "#000"), o = o || "#000", null == i && (i = 4), null == r && (r = 1), null == e && (e = 0, n = 2), null == n && (n = e), o = t.color(o), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
				color: o,
				dx: e,
				dy: n,
				blur: i,
				opacity: r
			})
		}, t.filter.shadow.toString = function () {
			return this()
		}, t.filter.grayscale = function (e) {
			return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
				a: .2126 + .7874 * (1 - e),
				b: .7152 - .7152 * (1 - e),
				c: .0722 - .0722 * (1 - e),
				d: .2126 - .2126 * (1 - e),
				e: .7152 + .2848 * (1 - e),
				f: .0722 - .0722 * (1 - e),
				g: .2126 - .2126 * (1 - e),
				h: .0722 + .9278 * (1 - e)
			})
		}, t.filter.grayscale.toString = function () {
			return this()
		}, t.filter.sepia = function (e) {
			return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
				a: .393 + .607 * (1 - e),
				b: .769 - .769 * (1 - e),
				c: .189 - .189 * (1 - e),
				d: .349 - .349 * (1 - e),
				e: .686 + .314 * (1 - e),
				f: .168 - .168 * (1 - e),
				g: .272 - .272 * (1 - e),
				h: .534 - .534 * (1 - e),
				i: .131 + .869 * (1 - e)
			})
		}, t.filter.sepia.toString = function () {
			return this()
		}, t.filter.saturate = function (e) {
			return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {
				amount: 1 - e
			})
		}, t.filter.saturate.toString = function () {
			return this()
		}, t.filter.hueRotate = function (e) {
			return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
				angle: e
			})
		}, t.filter.hueRotate.toString = function () {
			return this()
		}, t.filter.invert = function (e) {
			return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
				amount: e,
				amount2: 1 - e
			})
		}, t.filter.invert.toString = function () {
			return this()
		}, t.filter.brightness = function (e) {
			return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
				amount: e
			})
		}, t.filter.brightness.toString = function () {
			return this()
		}, t.filter.contrast = function (e) {
			return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
				amount: e,
				amount2: .5 - e / 2
			})
		}, t.filter.contrast.toString = function () {
			return this()
		}
	}), i
}),
function (t, e, n, i) {
	function o(t) {
		for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) {
			var o = t[e];
			o && i.push(o)
		}
		return i
	}

	function r(t) {
		var e = v.data(t, c);
		return null === e ? i : e
	}

	function a(t) {
		return function (e) {
			return Math.round(e * t) * (1 / t)
		}
	}

	function s(t, e) {
		var n = t;
		return g.isString(t) ? y.Easings[t] || (n = !1) : n = g.isArray(t) && 1 === t.length ? a.apply(null, t) : g.isArray(t) && 2 === t.length ? x.apply(null, t.concat([e])) : g.isArray(t) && 4 === t.length ? _.apply(null, t) : !1, n === !1 && (n = y.Easings[y.defaults.easing] ? y.defaults.easing : p), n
	}

	function l(t) {
		if (t)
			for (var e = (new Date).getTime(), n = 0, o = y.State.calls.length; o > n; n++)
				if (y.State.calls[n]) {
					var a = y.State.calls[n],
						s = a[0],
						c = a[2],
						h = a[3];
					h || (h = y.State.calls[n][3] = e - 16);
					for (var p = Math.min((e - h) / c.duration, 1), d = 0, f = s.length; f > d; d++) {
						var v = s[d],
							_ = v.element;
						if (r(_)) {
							var x = !1;
							c.display && "none" !== c.display && b.setPropertyValue(_, "display", c.display), c.visibility && "hidden" !== c.visibility && b.setPropertyValue(_, "visibility", c.visibility);
							for (var w in v)
								if ("element" !== w) {
									var P, L = v[w],
										C = g.isString(L.easing) ? y.Easings[L.easing] : L.easing;
									if (P = 1 === p ? L.endValue : L.startValue + (L.endValue - L.startValue) * C(p), L.currentValue = P, b.Hooks.registered[w]) {
										var T = b.Hooks.getRoot(w),
											S = r(_).rootPropertyValueCache[T];
										S && (L.rootPropertyValue = S)
									}
									var E = b.setPropertyValue(_, w, L.currentValue + (0 === parseFloat(P) ? "" : L.unitType), L.rootPropertyValue, L.scrollData);
									b.Hooks.registered[w] && (r(_).rootPropertyValueCache[T] = b.Normalizations.registered[T] ? b.Normalizations.registered[T]("extract", null, E[1]) : E[1]), "transform" === E[0] && (x = !0)
								}
							c.mobileHA && r(_).transformCache.translate3d === i && (r(_).transformCache.translate3d = "(0px, 0px, 0px)", x = !0), x && b.flushTransformCache(_)
						}
					}
					c.display && "none" !== c.display && (y.State.calls[n][2].display = !1), c.visibility && "hidden" !== c.visibility && (y.State.calls[n][2].visibility = !1), c.progress && c.progress.call(a[1], a[1], p, Math.max(0, h + c.duration - e), h), 1 === p && u(n)
				}
		y.State.isTicking && m(l)
	}

	function u(t, e) {
		if (!y.State.calls[t]) return !1;
		for (var n = y.State.calls[t][0], o = y.State.calls[t][1], a = y.State.calls[t][2], s = y.State.calls[t][4], l = !1, u = 0, c = n.length; c > u; u++) {
			var h = n[u].element;
			if (e || a.loop || ("none" === a.display && b.setPropertyValue(h, "display", a.display), "hidden" === a.visibility && b.setPropertyValue(h, "visibility", a.visibility)), (v.queue(h)[1] === i || !/\.velocityQueueEntryFlag/i.test(v.queue(h)[1])) && r(h)) {
				r(h).isAnimating = !1, r(h).rootPropertyValueCache = {};
				var p = !1;
				v.each(r(h).transformCache, function (t, e) {
					var n = /^scale/.test(t) ? 1 : 0;
					new RegExp("^\\(" + n + "[^.]").test(e) && (p = !0, delete r(h).transformCache[t])
				}), a.mobileHA && (p = !0, delete r(h).transformCache.translate3d), p && b.flushTransformCache(h), b.Values.removeClass(h, "velocity-animating")
			}
			if (!e && a.complete && !a.loop && u === c - 1) try {
				a.complete.call(o, o)
			} catch (d) {
				setTimeout(function () {
					throw d
				}, 1)
			}
			s && s(o), a.queue !== !1 && v.dequeue(h, a.queue)
		}
		y.State.calls[t] = !1;
		for (var f = 0, m = y.State.calls.length; m > f; f++)
			if (y.State.calls[f] !== !1) {
				l = !0;
				break
			}
		l === !1 && (y.State.isTicking = !1, delete y.State.calls, y.State.calls = [])
	}
	var c = "velocity",
		h = 400,
		p = "swing",
		d = function () {
			if (n.documentMode) return n.documentMode;
			for (var t = 7; t > 4; t--) {
				var e = n.createElement("div");
				if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length) return e = null, t
			}
			return i
		}(),
		f = function () {
			var t = 0;
			return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (e) {
				var n, i = (new Date).getTime();
				return n = Math.max(0, 16 - (i - t)), t = i + n, setTimeout(function () {
					e(i + n)
				}, n)
			}
		}(),
		m = e.requestAnimationFrame || f,
		g = {
			isString: function (t) {
				return "string" == typeof t
			},
			isArray: Array.isArray || function (t) {
				return "[object Array]" === Object.prototype.toString.call(t)
			},
			isFunction: function (t) {
				return "[object Function]" === Object.prototype.toString.call(t)
			},
			isNode: function (t) {
				return t && t.nodeType
			},
			isNodeList: function (t) {
				return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== i && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
			},
			isWrapped: function (t) {
				return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
			},
			isSVG: function (t) {
				return e.SVGElement && t instanceof SVGElement
			}
		},
		v = e.jQuery || t.Velocity && t.Velocity.Utilities;
	if (!v) throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");
	if (t.Velocity !== i && !t.Velocity.Utilities) throw new Error("Velocity: Namespace is occupied.");
	if (7 >= d) {
		if (e.jQuery) return e.jQuery.fn.velocity = e.jQuery.fn.animate, void 0;
		throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")
	}
	if (8 === d && !e.jQuery) throw new Error("Velocity: For IE8, Velocity requires jQuery to be loaded. (Velocity's jQuery shim does not work with IE8.)");
	var y = t.Velocity = t.velocity = {
		State: {
			isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
			isAndroid: /Android/i.test(navigator.userAgent),
			isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
			isChrome: e.chrome,
			isFirefox: /Firefox/i.test(navigator.userAgent),
			prefixElement: n.createElement("div"),
			prefixMatches: {},
			scrollAnchor: null,
			scrollPropertyLeft: null,
			scrollPropertyTop: null,
			isTicking: !1,
			calls: []
		},
		CSS: {},
		Utilities: e.jQuery,
		Sequences: {},
		Easings: {},
		Promise: e.Promise,
		defaults: {
			queue: "",
			duration: h,
			easing: p,
			begin: null,
			complete: null,
			progress: null,
			display: null,
			loop: !1,
			delay: !1,
			mobileHA: !0,
			_cacheValues: !0
		},
		animate: function () {},
		mock: !1,
		version: {
			major: 0,
			minor: 9,
			patch: 0
		},
		debug: !1
	};
	e.pageYOffset !== i ? (y.State.scrollAnchor = e, y.State.scrollPropertyLeft = "pageXOffset", y.State.scrollPropertyTop = "pageYOffset") : (y.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, y.State.scrollPropertyLeft = "scrollLeft", y.State.scrollPropertyTop = "scrollTop"), y.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function () {
		n.hidden ? (m = function (t) {
			return setTimeout(function () {
				t(!0)
			}, 16)
		}, l()) : m = e.requestAnimationFrame || f
	});
	var _ = function () {
			function t(t, e) {
				return 1 - 3 * e + 3 * t
			}

			function e(t, e) {
				return 3 * e - 6 * t
			}

			function n(t) {
				return 3 * t
			}

			function i(i, o, r) {
				return ((t(o, r) * i + e(o, r)) * i + n(o)) * i
			}

			function o(i, o, r) {
				return 3 * t(o, r) * i * i + 2 * e(o, r) * i + n(o)
			}
			return function (t, e, n, r) {
				function a(e) {
					for (var r = e, a = 0; 8 > a; ++a) {
						var s = o(r, t, n);
						if (0 === s) return r;
						var l = i(r, t, n) - e;
						r -= l / s
					}
					return r
				}
				if (4 !== arguments.length) return !1;
				for (var s = 0; 4 > s; ++s)
					if ("number" != typeof arguments[s] || isNaN(arguments[s]) || !isFinite(arguments[s])) return !1;
				return t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0),
					function (o) {
						return t === e && n === r ? o : i(a(o), e, r)
					}
			}
		}(),
		x = function () {
			function t(t) {
				return -t.tension * t.x - t.friction * t.v
			}

			function e(e, n, i) {
				var o = {
					x: e.x + i.dx * n,
					v: e.v + i.dv * n,
					tension: e.tension,
					friction: e.friction
				};
				return {
					dx: o.v,
					dv: t(o)
				}
			}

			function n(n, i) {
				var o = {
						dx: n.v,
						dv: t(n)
					},
					r = e(n, .5 * i, o),
					a = e(n, .5 * i, r),
					s = e(n, i, a),
					l = 1 / 6 * (o.dx + 2 * (r.dx + a.dx) + s.dx),
					u = 1 / 6 * (o.dv + 2 * (r.dv + a.dv) + s.dv);
				return n.x = n.x + l * i, n.v = n.v + u * i, n
			}
			return function i(t, e, o) {
				var r, a, s, l = {
						x: -1,
						v: 0,
						tension: null,
						friction: null
					},
					u = [0],
					c = 0,
					h = 1e-4,
					p = .016;
				for (t = parseFloat(t) || 500, e = parseFloat(e) || 20, o = o || null, l.tension = t, l.friction = e, r = null !== o, r ? (c = i(t, e), a = c / o * p) : a = p;;)
					if (s = n(s || l, a), u.push(1 + s.x), c += 16, !(Math.abs(s.x) > h && Math.abs(s.v) > h)) break;
				return r ? function (t) {
					return u[t * (u.length - 1) | 0]
				} : c
			}
		}();
	! function () {
		y.Easings.linear = function (t) {
			return t
		}, y.Easings.swing = function (t) {
			return .5 - Math.cos(t * Math.PI) / 2
		}, y.Easings.spring = function (t) {
			return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
		}, y.Easings.ease = _(.25, .1, .25, 1), y.Easings["ease-in"] = _(.42, 0, 1, 1), y.Easings["ease-out"] = _(0, 0, .58, 1), y.Easings["ease-in-out"] = _(.42, 0, .58, 1);
		var t = {};
		v.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, n) {
			t[n] = function (t) {
				return Math.pow(t, e + 2)
			}
		}), v.extend(t, {
			Sine: function (t) {
				return 1 - Math.cos(t * Math.PI / 2)
			},
			Circ: function (t) {
				return 1 - Math.sqrt(1 - t * t)
			},
			Elastic: function (t) {
				return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
			},
			Back: function (t) {
				return t * t * (3 * t - 2)
			},
			Bounce: function (t) {
				for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11;);
				return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
			}
		}), v.each(t, function (t, e) {
			y.Easings["easeIn" + t] = e, y.Easings["easeOut" + t] = function (t) {
				return 1 - e(1 - t)
			}, y.Easings["easeInOut" + t] = function (t) {
				return .5 > t ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
			}
		})
	}();
	var b = y.CSS = {
		RegEx: {
			isHex: /^#([A-f\d]{3}){1,2}$/i,
			valueUnwrap: /^[A-z]+\((.*)\)$/i,
			wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
			valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
		},
		Lists: {
			colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
			transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
			transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
		},
		Hooks: {
			templates: {
				textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
				boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
				clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
				backgroundPosition: ["X Y", "0% 0%"],
				transformOrigin: ["X Y Z", "50% 50% 0px"],
				perspectiveOrigin: ["X Y", "50% 50%"]
			},
			registered: {},
			register: function () {
				for (var t = 0; t < b.Lists.colors.length; t++) b.Hooks.templates[b.Lists.colors[t]] = ["Red Green Blue Alpha", "255 255 255 1"];
				var e, n, i;
				if (d)
					for (e in b.Hooks.templates) {
						n = b.Hooks.templates[e], i = n[0].split(" ");
						var o = n[1].match(b.RegEx.valueSplit);
						"Color" === i[0] && (i.push(i.shift()), o.push(o.shift()), b.Hooks.templates[e] = [i.join(" "), o.join(" ")])
					}
				for (e in b.Hooks.templates) {
					n = b.Hooks.templates[e], i = n[0].split(" ");
					for (var t in i) {
						var r = e + i[t],
							a = t;
						b.Hooks.registered[r] = [e, a]
					}
				}
			},
			getRoot: function (t) {
				var e = b.Hooks.registered[t];
				return e ? e[0] : t
			},
			cleanRootPropertyValue: function (t, e) {
				return b.RegEx.valueUnwrap.test(e) && (e = e.match(b.Hooks.RegEx.valueUnwrap)[1]), b.Values.isCSSNullValue(e) && (e = b.Hooks.templates[t][1]), e
			},
			extractValue: function (t, e) {
				var n = b.Hooks.registered[t];
				if (n) {
					var i = n[0],
						o = n[1];
					return e = b.Hooks.cleanRootPropertyValue(i, e), e.toString().match(b.RegEx.valueSplit)[o]
				}
				return e
			},
			injectValue: function (t, e, n) {
				var i = b.Hooks.registered[t];
				if (i) {
					var o, r, a = i[0],
						s = i[1];
					return n = b.Hooks.cleanRootPropertyValue(a, n), o = n.toString().match(b.RegEx.valueSplit), o[s] = e, r = o.join(" ")
				}
				return n
			}
		},
		Normalizations: {
			registered: {
				clip: function (t, e, n) {
					switch (t) {
					case "name":
						return "clip";
					case "extract":
						var i;
						return b.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(b.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;
					case "inject":
						return "rect(" + n + ")"
					}
				},
				opacity: function (t, e, n) {
					if (8 >= d) switch (t) {
					case "name":
						return "filter";
					case "extract":
						var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
						return n = i ? i[1] / 100 : 1;
					case "inject":
						return e.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
					} else switch (t) {
					case "name":
						return "opacity";
					case "extract":
						return n;
					case "inject":
						return n
					}
				}
			},
			register: function () {
				9 >= d || y.State.isGingerbread || (b.Lists.transformsBase = b.Lists.transformsBase.concat(b.Lists.transforms3D));
				for (var t = 0; t < b.Lists.transformsBase.length; t++) ! function () {
					var e = b.Lists.transformsBase[t];
					b.Normalizations.registered[e] = function (t, n, o) {
						switch (t) {
						case "name":
							return "transform";
						case "extract":
							return r(n).transformCache[e] === i ? /^scale/i.test(e) ? 1 : 0 : r(n).transformCache[e].replace(/[()]/g, "");
						case "inject":
							var a = !1;
							switch (e.substr(0, e.length - 1)) {
							case "translate":
								a = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
								break;
							case "scal":
							case "scale":
								y.State.isAndroid && r(n).transformCache[e] === i && 1 > o && (o = 1), a = !/(\d)$/i.test(o);
								break;
							case "skew":
								a = !/(deg|\d)$/i.test(o);
								break;
							case "rotate":
								a = !/(deg|\d)$/i.test(o)
							}
							return a || (r(n).transformCache[e] = "(" + o + ")"), r(n).transformCache[e]
						}
					}
				}();
				for (var t = 0; t < b.Lists.colors.length; t++) ! function () {
					var e = b.Lists.colors[t];
					b.Normalizations.registered[e] = function (t, n, o) {
						switch (t) {
						case "name":
							return e;
						case "extract":
							var r;
							if (b.RegEx.wrappedValueAlreadyExtracted.test(o)) r = o;
							else {
								var a, s = {
									black: "rgb(0, 0, 0)",
									blue: "rgb(0, 0, 255)",
									gray: "rgb(128, 128, 128)",
									green: "rgb(0, 128, 0)",
									red: "rgb(255, 0, 0)",
									white: "rgb(255, 255, 255)"
								};
								/^[A-z]+$/i.test(o) ? a = s[o] !== i ? s[o] : s.black : b.RegEx.isHex.test(o) ? a = "rgb(" + b.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (a = s.black), r = (a || o).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
							}
							return 8 >= d || 3 !== r.split(" ").length || (r += " 1"), r;
						case "inject":
							return 8 >= d ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
						}
					}
				}()
			}
		},
		Names: {
			camelCase: function (t) {
				return t.replace(/-(\w)/g, function (t, e) {
					return e.toUpperCase()
				})
			},
			SVGAttribute: function (t) {
				var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
				return (d || y.State.isAndroid && !y.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
			},
			prefixCheck: function (t) {
				if (y.State.prefixMatches[t]) return [y.State.prefixMatches[t], !0];
				for (var e = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = e.length; i > n; n++) {
					var o;
					if (o = 0 === n ? t : e[n] + t.replace(/^\w/, function (t) {
							return t.toUpperCase()
						}), g.isString(y.State.prefixElement.style[o])) return y.State.prefixMatches[t] = o, [o, !0]
				}
				return [t, !1]
			}
		},
		Values: {
			hexToRgb: function (t) {
				var e, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
					i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
				return t = t.replace(n, function (t, e, n, i) {
					return e + e + n + n + i + i
				}), e = i.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
			},
			isCSSNullValue: function (t) {
				return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
			},
			getUnitType: function (t) {
				return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
			},
			getDisplayType: function (t) {
				var e = t.tagName.toString().toLowerCase();
				return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : "block"
			},
			addClass: function (t, e) {
				t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
			},
			removeClass: function (t, e) {
				t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
			}
		},
		getPropertyValue: function (t, n, o, a) {
			function s(t, n) {
				function o() {
					u && b.setPropertyValue(t, "display", "none")
				}
				var l = 0;
				if (8 >= d) l = v.css(t, n);
				else {
					var u = !1;
					if (/^(width|height)$/.test(n) && 0 === b.getPropertyValue(t, "display") && (u = !0, b.setPropertyValue(t, "display", b.Values.getDisplayType(t))), !a) {
						if ("height" === n && "border-box" !== b.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
							var c = t.offsetHeight - (parseFloat(b.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(b.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(b.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(b.getPropertyValue(t, "paddingBottom")) || 0);
							return o(), c
						}
						if ("width" === n && "border-box" !== b.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
							var h = t.offsetWidth - (parseFloat(b.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(b.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(b.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(b.getPropertyValue(t, "paddingRight")) || 0);
							return o(), h
						}
					}
					var p;
					p = r(t) === i ? e.getComputedStyle(t, null) : r(t).computedStyle ? r(t).computedStyle : r(t).computedStyle = e.getComputedStyle(t, null), (d || y.State.isFirefox) && "borderColor" === n && (n = "borderTopColor"), l = 9 === d && "filter" === n ? p.getPropertyValue(n) : p[n], ("" === l || null === l) && (l = t.style[n]), o()
				}
				if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
					var f = s(t, "position");
					("fixed" === f || "absolute" === f && /top|left/i.test(n)) && (l = v(t).position()[n] + "px")
				}
				return l
			}
			var l;
			if (b.Hooks.registered[n]) {
				var u = n,
					c = b.Hooks.getRoot(u);
				o === i && (o = b.getPropertyValue(t, b.Names.prefixCheck(c)[0])), b.Normalizations.registered[c] && (o = b.Normalizations.registered[c]("extract", t, o)), l = b.Hooks.extractValue(u, o)
			} else if (b.Normalizations.registered[n]) {
				var h, p;
				h = b.Normalizations.registered[n]("name", t), "transform" !== h && (p = s(t, b.Names.prefixCheck(h)[0]), b.Values.isCSSNullValue(p) && b.Hooks.templates[n] && (p = b.Hooks.templates[n][1])), l = b.Normalizations.registered[n]("extract", t, p)
			}
			return /^[\d-]/.test(l) || (l = r(t) && r(t).isSVG && b.Names.SVGAttribute(n) ? /^(height|width)$/i.test(n) ? t.getBBox()[n] : t.getAttribute(n) : s(t, b.Names.prefixCheck(n)[0])), b.Values.isCSSNullValue(l) && (l = 0), y.debug >= 2 && console.log("Get " + n + ": " + l), l
		},
		setPropertyValue: function (t, n, i, o, a) {
			var s = n;
			if ("scroll" === n) a.container ? a.container["scroll" + a.direction] = i : "Left" === a.direction ? e.scrollTo(i, a.alternateValue) : e.scrollTo(a.alternateValue, i);
			else if (b.Normalizations.registered[n] && "transform" === b.Normalizations.registered[n]("name", t)) b.Normalizations.registered[n]("inject", t, i), s = "transform", i = r(t).transformCache[n];
			else {
				if (b.Hooks.registered[n]) {
					var l = n,
						u = b.Hooks.getRoot(n);
					o = o || b.getPropertyValue(t, u), i = b.Hooks.injectValue(l, i, o), n = u
				}
				if (b.Normalizations.registered[n] && (i = b.Normalizations.registered[n]("inject", t, i), n = b.Normalizations.registered[n]("name", t)), s = b.Names.prefixCheck(n)[0], 8 >= d) try {
					t.style[s] = i
				} catch (c) {
					y.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
				} else r(t) && r(t).isSVG && b.Names.SVGAttribute(n) ? t.setAttribute(n, i) : t.style[s] = i;
				y.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
			}
			return [s, i]
		},
		flushTransformCache: function (t) {
			function e(e) {
				return parseFloat(b.getPropertyValue(t, e))
			}
			var n = "";
			if ((d || y.State.isAndroid && !y.State.isChrome) && r(t).isSVG) {
				var i = {
					translate: [e("translateX"), e("translateY")],
					skewX: [e("skewX")],
					skewY: [e("skewY")],
					scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
					rotate: [e("rotateZ"), 0, 0]
				};
				v.each(r(t).transformCache, function (t) {
					/^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), i[t] && (n += t + "(" + i[t].join(" ") + ") ", delete i[t])
				})
			} else {
				var o, a;
				v.each(r(t).transformCache, function (e) {
					return o = r(t).transformCache[e], "transformPerspective" === e ? (a = o, !0) : (9 === d && "rotateZ" === e && (e = "rotate"), n += e + o + " ", void 0)
				}), a && (n = "perspective" + a + " " + n)
			}
			b.setPropertyValue(t, "transform", n)
		}
	};
	b.Hooks.register(), b.Normalizations.register(), y.animate = function () {
		function t() {
			return p ? E.promise || null : f
		}

		function a() {
			function t() {
				function t(t, e) {
					var n = i,
						o = i,
						r = i;
					return g.isArray(t) ? (n = t[0], !g.isArray(t[1]) && /^[\d-]/.test(t[1]) || g.isFunction(t[1]) || b.RegEx.isHex.test(t[1]) ? r = t[1] : (g.isString(t[1]) && !b.RegEx.isHex.test(t[1]) || g.isArray(t[1])) && (o = e ? t[1] : s(t[1], u.duration), t[2] !== i && (r = t[2]))) : n = t, o = o || u.easing, g.isFunction(n) && (n = n.call(a, C, L)), g.isFunction(r) && (r = r.call(a, C, L)), [n || 0, o, r]
				}

				function c(t, e) {
					var n, i;
					return i = (e || 0).toString().toLowerCase().replace(/[%A-z]+$/, function (t) {
						return n = t, ""
					}), n || (n = b.Values.getUnitType(t)), [i, n]
				}

				function h() {
					var t = {
							parent: a.parentNode,
							position: b.getPropertyValue(a, "position"),
							fontSize: b.getPropertyValue(a, "fontSize")
						},
						i = t.position === O.lastPosition && t.parent === O.lastParent,
						o = t.fontSize === O.lastFontSize && t.parent === O.lastParent;
					O.lastParent = t.parent, O.lastPosition = t.position, O.lastFontSize = t.fontSize, null === O.remToPx && (O.remToPx = parseFloat(b.getPropertyValue(n.body, "fontSize")) || 16), null === O.vwToPx && (O.vwToPx = parseFloat(e.innerWidth) / 100, O.vhToPx = parseFloat(e.innerHeight) / 100);
					var s = {
							overflowX: null,
							overflowY: null,
							boxSizing: null,
							width: null,
							minWidth: null,
							maxWidth: null,
							height: null,
							minHeight: null,
							maxHeight: null,
							paddingLeft: null
						},
						l = {},
						u = 10;
					if (l.remToPx = O.remToPx, l.vwToPx = O.vwToPx, l.vhToPx = O.vhToPx, d && !r(a).isSVG) var c = /^auto$/i.test(a.currentStyle.width),
						h = /^auto$/i.test(a.currentStyle.height);
					i && o || (r(a).isSVG || (s.overflowX = b.getPropertyValue(a, "overflowX"), s.overflowY = b.getPropertyValue(a, "overflowY"), s.boxSizing = b.getPropertyValue(a, "boxSizing"), s.minWidth = b.getPropertyValue(a, "minWidth"), s.maxWidth = b.getPropertyValue(a, "maxWidth") || "none", s.minHeight = b.getPropertyValue(a, "minHeight"), s.maxHeight = b.getPropertyValue(a, "maxHeight") || "none", s.paddingLeft = b.getPropertyValue(a, "paddingLeft")), s.width = b.getPropertyValue(a, "width", null, !0), s.height = b.getPropertyValue(a, "height", null, !0)), i ? (l.percentToPxRatioWidth = O.lastPercentToPxWidth, l.percentToPxRatioHeight = O.lastPercentToPxHeight) : (r(a).isSVG || (b.setPropertyValue(a, "overflowX", "hidden"), b.setPropertyValue(a, "overflowY", "hidden"), b.setPropertyValue(a, "boxSizing", "content-box"), b.setPropertyValue(a, "minWidth", u + "%"), b.setPropertyValue(a, "maxWidth", u + "%"), b.setPropertyValue(a, "minHeight", u + "%"), b.setPropertyValue(a, "maxHeight", u + "%")), b.setPropertyValue(a, "width", u + "%"), b.setPropertyValue(a, "height", u + "%")), o ? l.emToPx = O.lastEmToPx : r(a).isSVG || b.setPropertyValue(a, "paddingLeft", u + "em"), i || (l.percentToPxRatioWidth = O.lastPercentToPxWidth = (parseFloat(b.getPropertyValue(a, "width", null, !0)) || 1) / u, l.percentToPxRatioHeight = O.lastPercentToPxHeight = (parseFloat(b.getPropertyValue(a, "height", null, !0)) || 1) / u), o || (l.emToPx = O.lastEmToPx = (parseFloat(b.getPropertyValue(a, "paddingLeft")) || 1) / u);
					for (var p in s) null !== s[p] && b.setPropertyValue(a, p, s[p]);
					return r(a).isSVG || (d ? (c && b.setPropertyValue(a, "width", "auto"), h && b.setPropertyValue(a, "height", "auto")) : (b.setPropertyValue(a, "height", "auto"), s.height !== b.getPropertyValue(a, "height", null, !0) && b.setPropertyValue(a, "height", s.height), b.setPropertyValue(a, "width", "auto"), s.width !== b.getPropertyValue(a, "width", null, !0) && b.setPropertyValue(a, "width", s.width))), y.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l
				}
				if (u.begin && 0 === C) try {
					u.begin.call(_, _)
				} catch (f) {
					setTimeout(function () {
						throw f
					}, 1)
				}
				if ("scroll" === D) {
					var m, P, T, S = /^x$/i.test(u.axis) ? "Left" : "Top",
						k = parseFloat(u.offset) || 0;
					u.container ? u.container.jquery || g.isNode(u.container) ? (u.container = u.container[0] || u.container, m = u.container["scroll" + S], T = m + v(a).position()[S.toLowerCase()] + k) : u.container = null : (m = y.State.scrollAnchor[y.State["scrollProperty" + S]], P = y.State.scrollAnchor[y.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], T = v(a).offset()[S.toLowerCase()] + k), p = {
						scroll: {
							rootPropertyValue: !1,
							startValue: m,
							currentValue: m,
							endValue: T,
							unitType: "",
							easing: u.easing,
							scrollData: {
								container: u.container,
								direction: S,
								alternateValue: P
							}
						},
						element: a
					}, y.debug && console.log("tweensContainer (scroll): ", p.scroll, a)
				} else if ("reverse" === D) {
					if (!r(a).tweensContainer) return v.dequeue(a, u.queue), void 0;
					"none" === r(a).opts.display && (r(a).opts.display = "block"), "hidden" === r(a).opts.visibility && (r(a).opts.visibility = "visible"), r(a).opts.loop = !1, r(a).opts.begin = null, r(a).opts.complete = null, w.easing || delete u.easing, w.duration || delete u.duration, u = v.extend({}, r(a).opts, u);
					var M = v.extend(!0, {}, r(a).tweensContainer);
					for (var A in M)
						if ("element" !== A) {
							var N = M[A].startValue;
							M[A].startValue = M[A].currentValue = M[A].endValue, M[A].endValue = N, v.isEmptyObject(w) || (M[A].easing = u.easing), y.debug && console.log("reverse tweensContainer (" + A + "): " + JSON.stringify(M[A]), a)
						}
					p = M
				} else if ("start" === D) {
					var M;
					r(a).tweensContainer && r(a).isAnimating === !0 && (M = r(a).tweensContainer), v.each(x, function (e, n) {
						var o = t(n, !0),
							r = o[0],
							a = o[1],
							s = o[2];
						if (RegExp(b.Lists.colors.join("|")).test(e) && b.RegEx.isHex.test(r)) {
							for (var l = ["Red", "Green", "Blue"], u = b.Values.hexToRgb(r), c = s ? b.Values.hexToRgb(s) : i, h = 0; h < l.length; h++) x[e + l[h]] = [u[h], a, c ? c[h] : c];
							delete x[e]
						}
					});
					for (var I in x) {
						var z = t(x[I]),
							R = z[0],
							U = z[1],
							j = z[2];
						I = b.Names.camelCase(I);
						var V = b.Hooks.getRoot(I),
							F = !1;
						if (r(a).isSVG || b.Names.prefixCheck(V)[1] !== !1 || b.Normalizations.registered[V] !== i) {
							(u.display && "none" !== u.display || u.visibility && "hidden" !== u.visibility) && /opacity|filter/.test(I) && !j && 0 !== R && (j = 0), u._cacheValues && M && M[I] ? (j === i && (j = M[I].endValue + M[I].unitType), F = r(a).rootPropertyValueCache[V]) : b.Hooks.registered[I] ? j === i ? (F = b.getPropertyValue(a, V), j = b.getPropertyValue(a, I, F)) : F = b.Hooks.templates[V][1] : j === i && (j = b.getPropertyValue(a, I));
							var H, q, Z, W = !1;
							H = c(I, j), j = H[0], Z = H[1], H = c(I, R), R = H[0].replace(/^([+-\/*])=/, function (t, e) {
								return W = e, ""
							}), q = H[1], j = parseFloat(j) || 0, R = parseFloat(R) || 0;
							var X;
							if ("%" === q && (/^(fontSize|lineHeight)$/.test(I) ? (R /= 100, q = "em") : /^scale/.test(I) ? (R /= 100, q = "") : /(Red|Green|Blue)$/i.test(I) && (R = R / 100 * 255, q = "")), /[\/*]/.test(W)) q = Z;
							else if (Z !== q && 0 !== j)
								if (0 === R) q = Z;
								else {
									X = X || h();
									var Y = /margin|padding|left|right|width|text|word|letter/i.test(I) || /X$/.test(I) ? "x" : "y";
									switch (Z) {
									case "%":
										j *= "x" === Y ? X.percentToPxRatioWidth : X.percentToPxRatioHeight;
										break;
									case "px":
										break;
									default:
										j *= X[Z + "ToPx"]
									}
									switch (q) {
									case "%":
										j *= 1 / ("x" === Y ? X.percentToPxRatioWidth : X.percentToPxRatioHeight);
										break;
									case "px":
										break;
									default:
										j *= 1 / X[q + "ToPx"]
									}
								}
							switch (W) {
							case "+":
								R = j + R;
								break;
							case "-":
								R = j - R;
								break;
							case "*":
								R = j * R;
								break;
							case "/":
								R = j / R
							}
							p[I] = {
								rootPropertyValue: F,
								startValue: j,
								currentValue: j,
								endValue: R,
								unitType: q,
								easing: U
							}, y.debug && console.log("tweensContainer (" + I + "): " + JSON.stringify(p[I]), a)
						} else y.debug && console.log("Skipping [" + V + "] due to a lack of browser support.")
					}
					p.element = a
				}
				p.element && (b.Values.addClass(a, "velocity-animating"), B.push(p), r(a).tweensContainer = p, r(a).opts = u, r(a).isAnimating = !0, C === L - 1 ? (y.State.calls.length > 1e4 && (y.State.calls = o(y.State.calls)), y.State.calls.push([B, _, u, null, E.resolver]), y.State.isTicking === !1 && (y.State.isTicking = !0, l())) : C++)
			}
			var a = this,
				u = v.extend({}, y.defaults, w),
				p = {};
			if (r(a) === i && v.data(a, c, {
					isSVG: g.isSVG(a),
					isAnimating: !1,
					computedStyle: null,
					tweensContainer: null,
					rootPropertyValueCache: {},
					transformCache: {}
				}), parseFloat(u.delay) && u.queue !== !1 && v.queue(a, u.queue, function (t) {
					y.velocityQueueEntryFlag = !0, r(a).delayTimer = {
						setTimeout: setTimeout(t, parseFloat(u.delay)),
						next: t
					}
				}), y.mock === !0) u.duration = 1;
			else switch (u.duration.toString().toLowerCase()) {
			case "fast":
				u.duration = 200;
				break;
			case "normal":
				u.duration = h;
				break;
			case "slow":
				u.duration = 600;
				break;
			default:
				u.duration = parseFloat(u.duration) || 1
			}
			u.easing = s(u.easing, u.duration), u.begin && !g.isFunction(u.begin) && (u.begin = null), u.progress && !g.isFunction(u.progress) && (u.progress = null), u.complete && !g.isFunction(u.complete) && (u.complete = null), u.display && (u.display = u.display.toString().toLowerCase(), "auto" === u.display && (u.display = y.CSS.Values.getDisplayType(a))), u.visibility && (u.visibility = u.visibility.toString().toLowerCase()), u.mobileHA = u.mobileHA && y.State.isMobile && !y.State.isGingerbread, u.queue === !1 ? u.delay ? setTimeout(t, u.delay) : t() : v.queue(a, u.queue, function (e, n) {
				return n === !0 ? (E.promise && E.resolver(_), !0) : (y.velocityQueueEntryFlag = !0, t(e), void 0)
			}), "" !== u.queue && "fx" !== u.queue || "inprogress" === v.queue(a)[0] || v.dequeue(a)
		}
		var p, f, m, _, x, w, P = arguments[0] && (v.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
		if (g.isWrapped(this) ? (p = !1, m = 0, _ = this, f = this) : (p = !0, m = 1, _ = P ? arguments[0].elements : arguments[0]), _ = g.isWrapped(_) ? [].slice.call(_) : _) {
			P ? (x = arguments[0].properties, w = arguments[0].options) : (x = arguments[m], w = arguments[m + 1]);
			var L = g.isArray(_) || g.isNodeList(_) ? _.length : 1,
				C = 0;
			if ("stop" !== x && !v.isPlainObject(w)) {
				var T = m + 1;
				w = {};
				for (var S = T; S < arguments.length; S++) !g.isArray(arguments[S]) && /^\d/.test(arguments[S]) ? w.duration = parseFloat(arguments[S]) : g.isString(arguments[S]) || g.isArray(arguments[S]) ? w.easing = arguments[S] : g.isFunction(arguments[S]) && (w.complete = arguments[S])
			}
			var E = {
				promise: null,
				resolver: null,
				rejecter: null
			};
			p && y.Promise && (E.promise = new y.Promise(function (t, e) {
				E.resolver = t, E.rejecter = e
			}));
			var D;
			switch (x) {
			case "scroll":
				D = "scroll";
				break;
			case "reverse":
				D = "reverse";
				break;
			case "stop":
				v.each(g.isNode(_) ? [_] : _, function (t, e) {
					r(e) && r(e).delayTimer && (clearTimeout(r(e).delayTimer.setTimeout), r(e).delayTimer.next && r(e).delayTimer.next(), delete r(e).delayTimer)
				});
				var k = [];
				return v.each(y.State.calls, function (t, e) {
					e !== !1 && v.each(g.isNode(e[1]) ? [e[1]] : e[1], function (e, n) {
						v.each(g.isNode(_) ? [_] : _, function (e, i) {
							if (i === n) {
								if (r(i) && v.each(r(i).tweensContainer, function (t, e) {
										e.endValue = e.currentValue
									}), w === !0 || g.isString(w)) {
									var o = g.isString(w) ? w : "";
									v.each(v.queue(i, o), function (t, e) {
										g.isFunction(e) && e(null, !0)
									}), v.queue(i, o, [])
								}
								k.push(t)
							}
						})
					})
				}), v.each(k, function (t, e) {
					u(e, !0)
				}), E.promise && E.resolver(_), t();
			default:
				if (!v.isPlainObject(x) || v.isEmptyObject(x)) {
					if (g.isString(x) && y.Sequences[x]) {
						var M = w.duration,
							A = w.delay || 0;
						return w.backwards === !0 && (_ = (_.jquery ? [].slice.call(_) : _).reverse()), v.each(_, function (t, e) {
							parseFloat(w.stagger) ? w.delay = A + parseFloat(w.stagger) * t : g.isFunction(w.stagger) && (w.delay = A + w.stagger.call(e, t, L)), w.drag && (w.duration = parseFloat(M) || (/^(callout|transition)/.test(x) ? 1e3 : h), w.duration = Math.max(w.duration * (w.backwards ? 1 - t / L : (t + 1) / L), .75 * w.duration, 200)), y.Sequences[x].call(e, e, w || {}, t, L, _, E.promise ? E : i)
						}), t()
					}
					var N = "Velocity: First argument (" + x + ") was not a property map, a known action, or a registered sequence. Aborting.";
					return E.promise ? E.rejecter(new Error(N)) : console.log(N), t()
				}
				D = "start"
			}
			var O = {
					lastParent: null,
					lastPosition: null,
					lastFontSize: null,
					lastPercentToPxWidth: null,
					lastPercentToPxHeight: null,
					lastEmToPx: null,
					remToPx: null,
					vwToPx: null,
					vhToPx: null
				},
				B = [];
			v.each(g.isNode(_) ? [_] : _, function (t, e) {
				g.isNode(e) && a.call(e)
			});
			var I, z = v.extend({}, y.defaults, w);
			if (z.loop = parseInt(z.loop), I = 2 * z.loop - 1, z.loop)
				for (var R = 0; I > R; R++) {
					var U = {
						delay: z.delay
					};
					z.complete && R === I - 1 && (U.complete = z.complete), y.animate(_, "reverse", U)
				}
			return t()
		}
	};
	var w = e.jQuery || e.Zepto;
	w && (w.fn.velocity = y.animate, w.fn.velocity.defaults = y.defaults), "undefined" != typeof define && define.amd ? define(function () {
		return y
	}) : "undefined" != typeof module && module.exports && (module.exports = y), v.each(["Down", "Up"], function (t, e) {
		y.Sequences["slide" + e] = function (t, n) {
			var i = v.extend({}, n),
				o = {
					height: null,
					marginTop: null,
					marginBottom: null,
					paddingTop: null,
					paddingBottom: null,
					overflow: null,
					overflowX: null,
					overflowY: null
				},
				r = i.begin,
				a = i.complete,
				s = !1;
			null !== i.display && (i.display = "Down" === e ? i.display || "auto" : i.display || "none"), i.begin = function () {
				function n() {
					o.height = parseFloat(y.CSS.getPropertyValue(t, "height")), t.style.height = "auto", parseFloat(y.CSS.getPropertyValue(t, "height")) === o.height && (s = !0), y.CSS.setPropertyValue(t, "height", o.height + "px")
				}
				if ("Down" === e) {
					o.overflow = [y.CSS.getPropertyValue(t, "overflow"), 0], o.overflowX = [y.CSS.getPropertyValue(t, "overflowX"), 0], o.overflowY = [y.CSS.getPropertyValue(t, "overflowY"), 0], t.style.overflow = "hidden", t.style.overflowX = "visible", t.style.overflowY = "hidden", n();
					for (var i in o)
						if (!/^overflow/.test(i)) {
							var a = y.CSS.getPropertyValue(t, i);
							"height" === i && (a = parseFloat(a)), o[i] = [a, 0]
						}
				} else {
					n();
					for (var i in o) {
						var a = y.CSS.getPropertyValue(t, i);
						"height" === i && (a = parseFloat(a)), o[i] = [0, a]
					}
					t.style.overflow = "hidden", t.style.overflowX = "visible", t.style.overflowY = "hidden"
				}
				r && r.call(t, t)
			}, i.complete = function (t) {
				var n = "Down" === e ? 0 : 1;
				s === !0 ? o.height[n] = "auto" : o.height[n] += "px";
				for (var i in o) t.style[i] = o[i][n];
				a && a.call(t, t)
			}, y.animate(t, o, i)
		}
	}), v.each(["In", "Out"], function (t, e) {
		y.Sequences["fade" + e] = function (t, n, i, o) {
			var r = v.extend({}, n),
				a = {
					opacity: "In" === e ? 1 : 0
				};
			i !== o - 1 && (r.complete = r.begin = null), null !== r.display && (r.display = r.display || ("In" === e ? "auto" : "none")), y.animate(this, a, r)
		}
	})
}(window.jQuery || window.Zepto || window, window, document),
/*!
 * velocity.ui.js: UI effects pack for Velocity. Load this file after jquery.velocity.js.
 * @version 4.0.6
 * @docs http://velocityjs.org/#uiPack
 * @support <=IE8: Callouts will have no effect, and transitions will simply fade in/out. IE9/Android 2.3: Most effects are fully supported, the rest fade in/out. All other browsers: Full support.
 * @license Copyright Julian Shapiro. MIT License: http://en.wikipedia.org/wiki/MIT_License
 * @license Indicated portions adapted from Animate.css, copyright Daniel Eden. MIT License: http://en.wikipedia.org/wiki/MIT_License
 * @license Indicated portions adapted from Magic.css, copyright Christian Pucci. MIT License: http://en.wikipedia.org/wiki/MIT_License
 */
function () {
	var t = window.jQuery || window.Zepto || window;
	if (!t.Velocity || !t.Velocity.Utilities) return console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."), void 0;
	if (!t.Velocity.version || t.Velocity.version.major <= 0 && t.Velocity.version.minor <= 5 && t.Velocity.version.patch <= 2) {
		var e = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
		throw alert(e), new Error(e)
	}
	t.Velocity.RegisterUI = function (e, n) {
		function i(e, n, i, o) {
			var r, a = 0;
			t.Velocity.Utilities.each(e, function (e, n) {
				o && (i += e * o), r = n.parentNode, t.Velocity.Utilities.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function (e, i) {
					a += parseFloat(t.Velocity.CSS.getPropertyValue(n, i))
				})
			}), t.Velocity.animate(r, {
				height: ("In" === n ? "+" : "-") + "=" + a
			}, {
				queue: !1,
				easing: "ease-in-out",
				duration: i * ("In" === n ? .6 : 1)
			})
		}
		t.Velocity.Sequences[e] = function (o, r, a, s, l, u) {
			function c() {
				void 0 !== r.display && "none" !== r.display || !/Out$/.test(e) || t.Velocity.Utilities.each(l, function (e, n) {
					t.Velocity.CSS.setPropertyValue(n, "display", "none")
				}), r.complete && r.complete.call(l, l), u && u.resolver(l || o)
			}
			for (var h = a === s - 1, p = 0; p < n.calls.length; p++) {
				var d = n.calls[p],
					f = d[0],
					m = r.duration || n.defaultDuration || 1e3,
					g = d[1],
					v = d[2] || {},
					y = {};
				if (y.duration = m * (g || 1), y.queue = r.queue || "", y.easing = v.easing || "ease", y.delay = v.delay || 0, 0 === p) {
					if (y.delay += r.delay || 0, 0 === a && (y.begin = function () {
							r.begin && r.begin.call(l, l);
							var t = e.match(/(In|Out)$/);
							r.animateParentHeight && t && i(l, t[0], m + y.delay, r.stagger)
						}), null !== r.display)
						if (r.display && "none" !== r.display) y.display = r.display;
						else if (/In$/.test(e)) {
						var _ = t.Velocity.CSS.Values.getDisplayType(o);
						y.display = "inline" === _ ? "inline-block" : _
					}
					r.visibility && "hidden" !== r.visibility && (y.visibility = r.visibility)
				}
				p === n.calls.length - 1 && (y.complete = function () {
					if (n.reset) {
						for (var e in n.reset) {
							var i = n.reset[e];
							("string" == typeof i || "number" == typeof i) && (n.reset[e] = [n.reset[e], n.reset[e]])
						}
						var r = {
							duration: 0,
							queue: !1
						};
						h && (r.complete = c), t.Velocity.animate(o, n.reset, r)
					} else h && c()
				}, "hidden" === r.visibility && (y.visibility = r.visibility)), t.Velocity.animate(o, f, y)
			}
		}
	}, t.Velocity.RegisterUI.packagedEffects = {
		"callout.bounce": {
			defaultDuration: 550,
			calls: [[{
				translateY: -30
			}, .25], [{
				translateY: 0
			}, .125], [{
				translateY: -15
			}, .125], [{
				translateY: 0
			}, .25]]
		},
		"callout.shake": {
			defaultDuration: 800,
			calls: [[{
				translateX: -11
			}, .125], [{
				translateX: 11
			}, .125], [{
				translateX: -11
			}, .125], [{
				translateX: 11
			}, .125], [{
				translateX: -11
			}, .125], [{
				translateX: 11
			}, .125], [{
				translateX: -11
			}, .125], [{
				translateX: 0
			}, .125]]
		},
		"callout.flash": {
			defaultDuration: 1100,
			calls: [[{
				opacity: [0, "easeInOutQuad", 1]
			}, .25], [{
				opacity: [1, "easeInOutQuad"]
			}, .25], [{
				opacity: [0, "easeInOutQuad"]
			}, .25], [{
				opacity: [1, "easeInOutQuad"]
			}, .25]]
		},
		"callout.pulse": {
			defaultDuration: 825,
			calls: [[{
				scaleX: 1.1,
				scaleY: 1.1
			}, .5], [{
				scaleX: 1,
				scaleY: 1
			}, .5]]
		},
		"callout.swing": {
			defaultDuration: 950,
			calls: [[{
				rotateZ: 15
			}, .2], [{
				rotateZ: -10
			}, .2], [{
				rotateZ: 5
			}, .2], [{
				rotateZ: -5
			}, .2], [{
				rotateZ: 0
			}, .2]]
		},
		"callout.tada": {
			defaultDuration: 1e3,
			calls: [[{
				scaleX: .9,
				scaleY: .9,
				rotateZ: -3
			}, .1], [{
				scaleX: 1.1,
				scaleY: 1.1,
				rotateZ: 3
			}, .1], [{
				scaleX: 1.1,
				scaleY: 1.1,
				rotateZ: -3
			}, .1], ["reverse", .125], ["reverse", .125], ["reverse", .125], ["reverse", .125], ["reverse", .125], [{
				scaleX: 1,
				scaleY: 1,
				rotateZ: 0
			}, .2]]
		},
		"transition.fadeIn": {
			defaultDuration: 500,
			calls: [[{
				opacity: [1, 0]
			}]]
		},
		"transition.fadeOut": {
			defaultDuration: 500,
			calls: [[{
				opacity: [0, 1]
			}]]
		},
		"transition.flipXIn": {
			defaultDuration: 700,
			calls: [[{
				opacity: [1, 0],
				transformPerspective: [800, 800],
				rotateY: [0, -55]
			}]],
			reset: {
				transformPerspective: 0
			}
		},
		"transition.flipXOut": {
			defaultDuration: 700,
			calls: [[{
				opacity: [0, 1],
				transformPerspective: [800, 800],
				rotateY: 55
			}]],
			reset: {
				transformPerspective: 0,
				rotateY: 0
			}
		},
		"transition.flipYIn": {
			defaultDuration: 800,
			calls: [[{
				opacity: [1, 0],
				transformPerspective: [800, 800],
				rotateX: [0, -45]
			}]],
			reset: {
				transformPerspective: 0
			}
		},
		"transition.flipYOut": {
			defaultDuration: 800,
			calls: [[{
				opacity: [0, 1],
				transformPerspective: [800, 800],
				rotateX: 25
			}]],
			reset: {
				transformPerspective: 0,
				rotateX: 0
			}
		},
		"transition.flipBounceXIn": {
			defaultDuration: 900,
			calls: [[{
				opacity: [.725, 0],
				transformPerspective: [400, 400],
				rotateY: [-10, 90]
			}, .5], [{
				opacity: .8,
				rotateY: 10
			}, .25], [{
				opacity: 1,
				rotateY: 0
			}, .25]],
			reset: {
				transformPerspective: 0
			}
		},
		"transition.flipBounceXOut": {
			defaultDuration: 800,
			calls: [[{
				opacity: [.9, 1],
				transformPerspective: [400, 400],
				rotateY: -10
			}, .5], [{
				opacity: 0,
				rotateY: 90
			}, .5]],
			reset: {
				transformPerspective: 0,
				rotateY: 0
			}
		},
		"transition.flipBounceYIn": {
			defaultDuration: 850,
			calls: [[{
				opacity: [.725, 0],
				transformPerspective: [400, 400],
				rotateX: [-10, 90]
			}, .5], [{
				opacity: .8,
				rotateX: 10
			}, .25], [{
				opacity: 1,
				rotateX: 0
			}, .25]],
			reset: {
				transformPerspective: 0
			}
		},
		"transition.flipBounceYOut": {
			defaultDuration: 800,
			calls: [[{
				opacity: [.9, 1],
				transformPerspective: [400, 400],
				rotateX: -15
			}, .5], [{
				opacity: 0,
				rotateX: 90
			}, .5]],
			reset: {
				transformPerspective: 0,
				rotateX: 0
			}
		},
		"transition.swoopIn": {
			defaultDuration: 850,
			calls: [[{
				opacity: [1, 0],
				transformOriginX: ["100%", "50%"],
				transformOriginY: ["100%", "100%"],
				scaleX: [1, 0],
				scaleY: [1, 0],
				translateX: [0, -700],
				translateZ: 0
			}]],
			reset: {
				transformOriginX: "50%",
				transformOriginY: "50%"
			}
		},
		"transition.swoopOut": {
			defaultDuration: 850,
			calls: [[{
				opacity: [0, 1],
				transformOriginX: ["50%", "100%"],
				transformOriginY: ["100%", "100%"],
				scaleX: 0,
				scaleY: 0,
				translateX: -700,
				translateZ: 0
			}]],
			reset: {
				transformOriginX: "50%",
				transformOriginY: "50%",
				scaleX: 1,
				scaleY: 1,
				translateX: 0
			}
		},
		"transition.whirlIn": {
			defaultDuration: 900,
			calls: [[{
				opacity: [1, 0],
				transformOriginX: ["50%", "50%"],
				transformOriginY: ["50%", "50%"],
				scaleX: [1, 0],
				scaleY: [1, 0],
				rotateY: [0, 160]
			}]]
		},
		"transition.whirlOut": {
			defaultDuration: 900,
			calls: [[{
				opacity: [0, 1],
				transformOriginX: ["50%", "50%"],
				transformOriginY: ["50%", "50%"],
				scaleX: 0,
				scaleY: 0,
				rotateY: 160
			}]],
			reset: {
				scaleX: 1,
				scaleY: 1,
				rotateY: 0
			}
		},
		"transition.shrinkIn": {
			defaultDuration: 700,
			calls: [[{
				opacity: [1, 0],
				transformOriginX: ["50%", "50%"],
				transformOriginY: ["50%", "50%"],
				scaleX: [1, 1.5],
				scaleY: [1, 1.5],
				translateZ: 0
			}]]
		},
		"transition.shrinkOut": {
			defaultDuration: 650,
			calls: [[{
				opacity: [0, 1],
				transformOriginX: ["50%", "50%"],
				transformOriginY: ["50%", "50%"],
				scaleX: 1.3,
				scaleY: 1.3,
				translateZ: 0
			}]],
			reset: {
				scaleX: 1,
				scaleY: 1
			}
		},
		"transition.expandIn": {
			defaultDuration: 700,
			calls: [[{
				opacity: [1, 0],
				transformOriginX: ["50%", "50%"],
				transformOriginY: ["50%", "50%"],
				scaleX: [1, .625],
				scaleY: [1, .625],
				translateZ: 0
			}]]
		},
		"transition.expandOut": {
			defaultDuration: 700,
			calls: [[{
				opacity: [0, 1],
				transformOriginX: ["50%", "50%"],
				transformOriginY: ["50%", "50%"],
				scaleX: .5,
				scaleY: .5,
				translateZ: 0
			}]],
			reset: {
				scaleX: 1,
				scaleY: 1
			}
		},
		"transition.bounceIn": {
			defaultDuration: 800,
			calls: [[{
				opacity: [1, 0],
				scaleX: [1.05, .3],
				scaleY: [1.05, .3]
			}, .4], [{
				scaleX: .9,
				scaleY: .9,
				translateZ: 0
			}, .2], [{
				scaleX: 1,
				scaleY: 1
			}, .5]]
		},
		"transition.bounceOut": {
			defaultDuration: 800,
			calls: [[{
				scaleX: .95,
				scaleY: .95
			}, .4], [{
				scaleX: 1.1,
				scaleY: 1.1,
				translateZ: 0
			}, .4], [{
				opacity: [0, 1],
				scaleX: .3,
				scaleY: .3
			}, .2]],
			reset: {
				scaleX: 1,
				scaleY: 1
			}
		},
		"transition.bounceUpIn": {
			defaultDuration: 800,
			calls: [[{
				opacity: [1, 0],
				translateY: [-30, 1e3]
			}, .6, {
				easing: "easeOutCirc"
			}], [{
				translateY: 10
			}, .2], [{
				translateY: 0
			}, .2]]
		},
		"transition.bounceUpOut": {
			defaultDuration: 1e3,
			calls: [[{
				translateY: 20
			}, .2], [{
				opacity: [0, "easeInCirc", 1],
				translateY: -1e3
			}, .8]],
			reset: {
				translateY: 0
			}
		},
		"transition.bounceDownIn": {
			defaultDuration: 800,
			calls: [[{
				opacity: [1, 0],
				translateY: [30, -1e3]
			}, .6, {
				easing: "easeOutCirc"
			}], [{
				translateY: -10
			}, .2], [{
				translateY: 0
			}, .2]]
		},
		"transition.bounceDownOut": {
			defaultDuration: 1e3,
			calls: [[{
				translateY: -20
			}, .2], [{
				opacity: [0, "easeInCirc", 1],
				translateY: 1e3
			}, .8]],
			reset: {
				translateY: 0
			}
		},
		"transition.bounceLeftIn": {
			defaultDuration: 750,
			calls: [[{
				opacity: [1, 0],
				translateX: [30, -1250]
			}, .6, {
				easing: "easeOutCirc"
			}], [{
				translateX: -10
			}, .2], [{
				translateX: 0
			}, .2]]
		},
		"transition.bounceLeftOut": {
			defaultDuration: 750,
			calls: [[{
				translateX: 30
			}, .2], [{
				opacity: [0, "easeInCirc", 1],
				translateX: -1250
			}, .8]],
			reset: {
				translateX: 0
			}
		},
		"transition.bounceRightIn": {
			defaultDuration: 750,
			calls: [[{
				opacity: [1, 0],
				translateX: [-30, 1250]
			}, .6, {
				easing: "easeOutCirc"
			}], [{
				translateX: 10
			}, .2], [{
				translateX: 0
			}, .2]]
		},
		"transition.bounceRightOut": {
			defaultDuration: 750,
			calls: [[{
				translateX: -30
			}, .2], [{
				opacity: [0, "easeInCirc", 1],
				translateX: 1250
			}, .8]],
			reset: {
				translateX: 0
			}
		},
		"transition.slideUpIn": {
			defaultDuration: 900,
			calls: [[{
				opacity: [1, 0],
				translateY: [0, 20],
				translateZ: 0
			}]]
		},
		"transition.slideUpOut": {
			defaultDuration: 900,
			calls: [[{
				opacity: [0, 1],
				translateY: -20,
				translateZ: 0
			}]],
			reset: {
				translateY: 0
			}
		},
		"transition.slideDownIn": {
			defaultDuration: 900,
			calls: [[{
				opacity: [1, 0],
				translateY: [0, -20],
				translateZ: 0
			}]]
		},
		"transition.slideDownOut": {
			defaultDuration: 900,
			calls: [[{
				opacity: [0, 1],
				translateY: 20,
				translateZ: 0
			}]],
			reset: {
				translateY: 0
			}
		},
		"transition.slideLeftIn": {
			defaultDuration: 1e3,
			calls: [[{
				opacity: [1, 0],
				translateX: [0, -20],
				translateZ: 0
			}]]
		},
		"transition.slideLeftOut": {
			defaultDuration: 1050,
			calls: [[{
				opacity: [0, 1],
				translateX: -20,
				translateZ: 0
			}]],
			reset: {
				translateX: 0
			}
		},
		"transition.slideRightIn": {
			defaultDuration: 1e3,
			calls: [[{
				opacity: [1, 0],
				translateX: [0, 20],
				translateZ: 0
			}]]
		},
		"transition.slideRightOut": {
			defaultDuration: 1050,
			calls: [[{
				opacity: [0, 1],
				translateX: 20,
				translateZ: 0
			}]],
			reset: {
				translateX: 0
			}
		},
		"transition.slideUpBigIn": {
			defaultDuration: 850,
			calls: [[{
				opacity: [1, 0],
				translateY: [0, 75],
				translateZ: 0
			}]]
		},
		"transition.slideUpBigOut": {
			defaultDuration: 800,
			calls: [[{
				opacity: [0, 1],
				translateY: -75,
				translateZ: 0
			}]],
			reset: {
				translateY: 0
			}
		},
		"transition.slideDownBigIn": {
			defaultDuration: 850,
			calls: [[{
				opacity: [1, 0],
				translateY: [0, -75],
				translateZ: 0
			}]]
		},
		"transition.slideDownBigOut": {
			defaultDuration: 800,
			calls: [[{
				opacity: [0, 1],
				translateY: 75,
				translateZ: 0
			}]],
			reset: {
				translateY: 0
			}
		},
		"transition.slideLeftBigIn": {
			defaultDuration: 800,
			calls: [[{
				opacity: [1, 0],
				translateX: [0, -75],
				translateZ: 0
			}]]
		},
		"transition.slideLeftBigOut": {
			defaultDuration: 750,
			calls: [[{
				opacity: [0, 1],
				translateX: -75,
				translateZ: 0
			}]],
			reset: {
				translateX: 0
			}
		},
		"transition.slideRightBigIn": {
			defaultDuration: 800,
			calls: [[{
				opacity: [1, 0],
				translateX: [0, 75],
				translateZ: 0
			}]]
		},
		"transition.slideRightBigOut": {
			defaultDuration: 750,
			calls: [[{
				opacity: [0, 1],
				translateX: 75,
				translateZ: 0
			}]],
			reset: {
				translateX: 0
			}
		},
		"transition.perspectiveUpIn": {
			defaultDuration: 800,
			calls: [[{
				opacity: [1, 0],
				transformPerspective: [800, 800],
				transformOriginX: [0, 0],
				transformOriginY: ["100%", "100%"],
				rotateX: [0, -180]
			}]],
			reset: {
				transformPerspective: 0,
				transformOriginX: "50%",
				transformOriginY: "50%"
			}
		},
		"transition.perspectiveUpOut": {
			defaultDuration: 850,
			calls: [[{
				opacity: [0, 1],
				transformPerspective: [800, 800],
				transformOriginX: [0, 0],
				transformOriginY: ["100%", "100%"],
				rotateX: -180
			}]],
			reset: {
				transformPerspective: 0,
				transformOriginX: "50%",
				transformOriginY: "50%",
				rotateX: 0
			}
		},
		"transition.perspectiveDownIn": {
			defaultDuration: 800,
			calls: [[{
				opacity: [1, 0],
				transformPerspective: [800, 800],
				transformOriginX: [0, 0],
				transformOriginY: [0, 0],
				rotateX: [0, 180]
			}]],
			reset: {
				transformPerspective: 0,
				transformOriginX: "50%",
				transformOriginY: "50%"
			}
		},
		"transition.perspectiveDownOut": {
			defaultDuration: 850,
			calls: [[{
				opacity: [0, 1],
				transformPerspective: [800, 800],
				transformOriginX: [0, 0],
				transformOriginY: [0, 0],
				rotateX: 180
			}]],
			reset: {
				transformPerspective: 0,
				transformOriginX: "50%",
				transformOriginY: "50%",
				rotateX: 0
			}
		},
		"transition.perspectiveLeftIn": {
			defaultDuration: 950,
			calls: [[{
				opacity: [1, 0],
				transformPerspective: [2e3, 2e3],
				transformOriginX: [0, 0],
				transformOriginY: [0, 0],
				rotateY: [0, -180]
			}]],
			reset: {
				transformPerspective: 0,
				transformOriginX: "50%",
				transformOriginY: "50%"
			}
		},
		"transition.perspectiveLeftOut": {
			defaultDuration: 950,
			calls: [[{
				opacity: [0, 1],
				transformPerspective: [2e3, 2e3],
				transformOriginX: [0, 0],
				transformOriginY: [0, 0],
				rotateY: -180
			}]],
			reset: {
				transformPerspective: 0,
				transformOriginX: "50%",
				transformOriginY: "50%",
				rotateY: 0
			}
		},
		"transition.perspectiveRightIn": {
			defaultDuration: 950,
			calls: [[{
				opacity: [1, 0],
				transformPerspective: [2e3, 2e3],
				transformOriginX: ["100%", "100%"],
				transformOriginY: [0, 0],
				rotateY: [0, 180]
			}]],
			reset: {
				transformPerspective: 0,
				transformOriginX: "50%",
				transformOriginY: "50%"
			}
		},
		"transition.perspectiveRightOut": {
			defaultDuration: 950,
			calls: [[{
				opacity: [0, 1],
				transformPerspective: [2e3, 2e3],
				transformOriginX: ["100%", "100%"],
				transformOriginY: [0, 0],
				rotateY: 180
			}]],
			reset: {
				transformPerspective: 0,
				transformOriginX: "50%",
				transformOriginY: "50%",
				rotateY: 0
			}
		}
	};
	for (var n in t.Velocity.RegisterUI.packagedEffects) t.Velocity.RegisterUI(n, t.Velocity.RegisterUI.packagedEffects[n])
}(),
function (t, e, n) {
	var i = t.L,
		o = {};
	o.version = "0.7.3", "object" == typeof module && "object" == typeof module.exports ? module.exports = o : "function" == typeof define && define.amd && define(o), o.noConflict = function () {
			return t.L = i, this
		}, t.L = o, o.Util = {
			extend: function (t) {
				var e, n, i, o, r = Array.prototype.slice.call(arguments, 1);
				for (n = 0, i = r.length; i > n; n++) {
					o = r[n] || {};
					for (e in o) o.hasOwnProperty(e) && (t[e] = o[e])
				}
				return t
			},
			bind: function (t, e) {
				var n = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
				return function () {
					return t.apply(e, n || arguments)
				}
			},
			stamp: function () {
				var t = 0,
					e = "_leaflet_id";
				return function (n) {
					return n[e] = n[e] || ++t, n[e]
				}
			}(),
			invokeEach: function (t, e, n) {
				var i, o;
				if ("object" == typeof t) {
					o = Array.prototype.slice.call(arguments, 3);
					for (i in t) e.apply(n, [i, t[i]].concat(o));
					return !0
				}
				return !1
			},
			limitExecByInterval: function (t, e, n) {
				var i, o;
				return function r() {
					var a = arguments;
					return i ? (o = !0, void 0) : (i = !0, setTimeout(function () {
						i = !1, o && (r.apply(n, a), o = !1)
					}, e), t.apply(n, a), void 0)
				}
			},
			falseFn: function () {
				return !1
			},
			formatNum: function (t, e) {
				var n = Math.pow(10, e || 5);
				return Math.round(t * n) / n
			},
			trim: function (t) {
				return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
			},
			splitWords: function (t) {
				return o.Util.trim(t).split(/\s+/)
			},
			setOptions: function (t, e) {
				return t.options = o.extend({}, t.options, e), t.options
			},
			getParamString: function (t, e, n) {
				var i = [];
				for (var o in t) i.push(encodeURIComponent(n ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
				return (e && -1 !== e.indexOf("?") ? "&" : "?") + i.join("&")
			},
			template: function (t, e) {
				return t.replace(/\{ *([\w_]+) *\}/g, function (t, i) {
					var o = e[i];
					if (o === n) throw new Error("No value provided for variable " + t);
					return "function" == typeof o && (o = o(e)), o
				})
			},
			isArray: Array.isArray || function (t) {
				return "[object Array]" === Object.prototype.toString.call(t)
			},
			emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
		},
		function () {
			function e(e) {
				var n, i, o = ["webkit", "moz", "o", "ms"];
				for (n = 0; n < o.length && !i; n++) i = t[o[n] + e];
				return i
			}

			function n(e) {
				var n = +new Date,
					o = Math.max(0, 16 - (n - i));
				return i = n + o, t.setTimeout(e, o)
			}
			var i = 0,
				r = t.requestAnimationFrame || e("RequestAnimationFrame") || n,
				a = t.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") || function (e) {
					t.clearTimeout(e)
				};
			o.Util.requestAnimFrame = function (e, i, a, s) {
				return e = o.bind(e, i), a && r === n ? (e(), void 0) : r.call(t, e, s)
			}, o.Util.cancelAnimFrame = function (e) {
				e && a.call(t, e)
			}
		}(), o.extend = o.Util.extend, o.bind = o.Util.bind, o.stamp = o.Util.stamp, o.setOptions = o.Util.setOptions, o.Class = function () {}, o.Class.extend = function (t) {
			var e = function () {
					this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks()
				},
				n = function () {};
			n.prototype = this.prototype;
			var i = new n;
			i.constructor = e, e.prototype = i;
			for (var r in this) this.hasOwnProperty(r) && "prototype" !== r && (e[r] = this[r]);
			t.statics && (o.extend(e, t.statics), delete t.statics), t.includes && (o.Util.extend.apply(null, [i].concat(t.includes)), delete t.includes), t.options && i.options && (t.options = o.extend({}, i.options, t.options)), o.extend(i, t), i._initHooks = [];
			var a = this;
			return e.__super__ = a.prototype, i.callInitHooks = function () {
				if (!this._initHooksCalled) {
					a.prototype.callInitHooks && a.prototype.callInitHooks.call(this), this._initHooksCalled = !0;
					for (var t = 0, e = i._initHooks.length; e > t; t++) i._initHooks[t].call(this)
				}
			}, e
		}, o.Class.include = function (t) {
			o.extend(this.prototype, t)
		}, o.Class.mergeOptions = function (t) {
			o.extend(this.prototype.options, t)
		}, o.Class.addInitHook = function (t) {
			var e = Array.prototype.slice.call(arguments, 1),
				n = "function" == typeof t ? t : function () {
					this[t].apply(this, e)
				};
			this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(n)
		};
	var r = "_leaflet_events";
	o.Mixin = {}, o.Mixin.Events = {
			addEventListener: function (t, e, n) {
				if (o.Util.invokeEach(t, this.addEventListener, this, e, n)) return this;
				var i, a, s, l, u, c, h, p = this[r] = this[r] || {},
					d = n && n !== this && o.stamp(n);
				for (t = o.Util.splitWords(t), i = 0, a = t.length; a > i; i++) s = {
					action: e,
					context: n || this
				}, l = t[i], d ? (u = l + "_idx", c = u + "_len", h = p[u] = p[u] || {}, h[d] || (h[d] = [], p[c] = (p[c] || 0) + 1), h[d].push(s)) : (p[l] = p[l] || [], p[l].push(s));
				return this
			},
			hasEventListeners: function (t) {
				var e = this[r];
				return !!e && (t in e && e[t].length > 0 || t + "_idx" in e && e[t + "_idx_len"] > 0)
			},
			removeEventListener: function (t, e, n) {
				if (!this[r]) return this;
				if (!t) return this.clearAllEventListeners();
				if (o.Util.invokeEach(t, this.removeEventListener, this, e, n)) return this;
				var i, a, s, l, u, c, h, p, d, f = this[r],
					m = n && n !== this && o.stamp(n);
				for (t = o.Util.splitWords(t), i = 0, a = t.length; a > i; i++)
					if (s = t[i], c = s + "_idx", h = c + "_len", p = f[c], e) {
						if (l = m && p ? p[m] : f[s]) {
							for (u = l.length - 1; u >= 0; u--) l[u].action !== e || n && l[u].context !== n || (d = l.splice(u, 1), d[0].action = o.Util.falseFn);
							n && p && 0 === l.length && (delete p[m], f[h]--)
						}
					} else delete f[s], delete f[c], delete f[h];
				return this
			},
			clearAllEventListeners: function () {
				return delete this[r], this
			},
			fireEvent: function (t, e) {
				if (!this.hasEventListeners(t)) return this;
				var n, i, a, s, l, u = o.Util.extend({}, e, {
						type: t,
						target: this
					}),
					c = this[r];
				if (c[t])
					for (n = c[t].slice(), i = 0, a = n.length; a > i; i++) n[i].action.call(n[i].context, u);
				s = c[t + "_idx"];
				for (l in s)
					if (n = s[l].slice())
						for (i = 0, a = n.length; a > i; i++) n[i].action.call(n[i].context, u);
				return this
			},
			addOneTimeEventListener: function (t, e, n) {
				if (o.Util.invokeEach(t, this.addOneTimeEventListener, this, e, n)) return this;
				var i = o.bind(function () {
					this.removeEventListener(t, e, n).removeEventListener(t, i, n)
				}, this);
				return this.addEventListener(t, e, n).addEventListener(t, i, n)
			}
		}, o.Mixin.Events.on = o.Mixin.Events.addEventListener, o.Mixin.Events.off = o.Mixin.Events.removeEventListener, o.Mixin.Events.once = o.Mixin.Events.addOneTimeEventListener, o.Mixin.Events.fire = o.Mixin.Events.fireEvent,
		function () {
			var i = "ActiveXObject" in t,
				r = i && !e.addEventListener,
				a = navigator.userAgent.toLowerCase(),
				s = -1 !== a.indexOf("webkit"),
				l = -1 !== a.indexOf("chrome"),
				u = -1 !== a.indexOf("phantom"),
				c = -1 !== a.indexOf("android"),
				h = -1 !== a.search("android [23]"),
				p = -1 !== a.indexOf("gecko"),
				d = typeof orientation != n + "",
				f = t.navigator && t.navigator.msPointerEnabled && t.navigator.msMaxTouchPoints && !t.PointerEvent,
				m = t.PointerEvent && t.navigator.pointerEnabled && t.navigator.maxTouchPoints || f,
				g = "devicePixelRatio" in t && t.devicePixelRatio > 1 || "matchMedia" in t && t.matchMedia("(min-resolution:144dpi)") && t.matchMedia("(min-resolution:144dpi)").matches,
				v = e.documentElement,
				y = i && "transition" in v.style,
				_ = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix && !h,
				x = "MozPerspective" in v.style,
				b = "OTransition" in v.style,
				w = !t.L_DISABLE_3D && (y || _ || x || b) && !u,
				P = !t.L_NO_TOUCH && !u && function () {
					var t = "ontouchstart";
					if (m || t in v) return !0;
					var n = e.createElement("div"),
						i = !1;
					return n.setAttribute ? (n.setAttribute(t, "return;"), "function" == typeof n[t] && (i = !0), n.removeAttribute(t), n = null, i) : !1
				}();
			o.Browser = {
				ie: i,
				ielt9: r,
				webkit: s,
				gecko: p && !s && !t.opera && !i,
				android: c,
				android23: h,
				chrome: l,
				ie3d: y,
				webkit3d: _,
				gecko3d: x,
				opera3d: b,
				any3d: w,
				mobile: d,
				mobileWebkit: d && s,
				mobileWebkit3d: d && _,
				mobileOpera: d && t.opera,
				touch: P,
				msPointer: f,
				pointer: m,
				retina: g
			}
		}(), o.Point = function (t, e, n) {
			this.x = n ? Math.round(t) : t, this.y = n ? Math.round(e) : e
		}, o.Point.prototype = {
			clone: function () {
				return new o.Point(this.x, this.y)
			},
			add: function (t) {
				return this.clone()._add(o.point(t))
			},
			_add: function (t) {
				return this.x += t.x, this.y += t.y, this
			},
			subtract: function (t) {
				return this.clone()._subtract(o.point(t))
			},
			_subtract: function (t) {
				return this.x -= t.x, this.y -= t.y, this
			},
			divideBy: function (t) {
				return this.clone()._divideBy(t)
			},
			_divideBy: function (t) {
				return this.x /= t, this.y /= t, this
			},
			multiplyBy: function (t) {
				return this.clone()._multiplyBy(t)
			},
			_multiplyBy: function (t) {
				return this.x *= t, this.y *= t, this
			},
			round: function () {
				return this.clone()._round()
			},
			_round: function () {
				return this.x = Math.round(this.x), this.y = Math.round(this.y), this
			},
			floor: function () {
				return this.clone()._floor()
			},
			_floor: function () {
				return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
			},
			distanceTo: function (t) {
				t = o.point(t);
				var e = t.x - this.x,
					n = t.y - this.y;
				return Math.sqrt(e * e + n * n)
			},
			equals: function (t) {
				return t = o.point(t), t.x === this.x && t.y === this.y
			},
			contains: function (t) {
				return t = o.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
			},
			toString: function () {
				return "Point(" + o.Util.formatNum(this.x) + ", " + o.Util.formatNum(this.y) + ")"
			}
		}, o.point = function (t, e, i) {
			return t instanceof o.Point ? t : o.Util.isArray(t) ? new o.Point(t[0], t[1]) : t === n || null === t ? t : new o.Point(t, e, i)
		}, o.Bounds = function (t, e) {
			if (t)
				for (var n = e ? [t, e] : t, i = 0, o = n.length; o > i; i++) this.extend(n[i])
		}, o.Bounds.prototype = {
			extend: function (t) {
				return t = o.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
			},
			getCenter: function (t) {
				return new o.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
			},
			getBottomLeft: function () {
				return new o.Point(this.min.x, this.max.y)
			},
			getTopRight: function () {
				return new o.Point(this.max.x, this.min.y)
			},
			getSize: function () {
				return this.max.subtract(this.min)
			},
			contains: function (t) {
				var e, n;
				return t = "number" == typeof t[0] || t instanceof o.Point ? o.point(t) : o.bounds(t), t instanceof o.Bounds ? (e = t.min, n = t.max) : e = n = t, e.x >= this.min.x && n.x <= this.max.x && e.y >= this.min.y && n.y <= this.max.y
			},
			intersects: function (t) {
				t = o.bounds(t);
				var e = this.min,
					n = this.max,
					i = t.min,
					r = t.max,
					a = r.x >= e.x && i.x <= n.x,
					s = r.y >= e.y && i.y <= n.y;
				return a && s
			},
			isValid: function () {
				return !(!this.min || !this.max)
			}
		}, o.bounds = function (t, e) {
			return !t || t instanceof o.Bounds ? t : new o.Bounds(t, e)
		}, o.Transformation = function (t, e, n, i) {
			this._a = t, this._b = e, this._c = n, this._d = i
		}, o.Transformation.prototype = {
			transform: function (t, e) {
				return this._transform(t.clone(), e)
			},
			_transform: function (t, e) {
				return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
			},
			untransform: function (t, e) {
				return e = e || 1, new o.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
			}
		}, o.DomUtil = {
			get: function (t) {
				return "string" == typeof t ? e.getElementById(t) : t
			},
			getStyle: function (t, n) {
				var i = t.style[n];
				if (!i && t.currentStyle && (i = t.currentStyle[n]), (!i || "auto" === i) && e.defaultView) {
					var o = e.defaultView.getComputedStyle(t, null);
					i = o ? o[n] : null
				}
				return "auto" === i ? null : i
			},
			getViewportOffset: function (t) {
				var n, i = 0,
					r = 0,
					a = t,
					s = e.body,
					l = e.documentElement;
				do {
					if (i += a.offsetTop || 0, r += a.offsetLeft || 0, i += parseInt(o.DomUtil.getStyle(a, "borderTopWidth"), 10) || 0, r += parseInt(o.DomUtil.getStyle(a, "borderLeftWidth"), 10) || 0, n = o.DomUtil.getStyle(a, "position"), a.offsetParent === s && "absolute" === n) break;
					if ("fixed" === n) {
						i += s.scrollTop || l.scrollTop || 0, r += s.scrollLeft || l.scrollLeft || 0;
						break
					}
					if ("relative" === n && !a.offsetLeft) {
						var u = o.DomUtil.getStyle(a, "width"),
							c = o.DomUtil.getStyle(a, "max-width"),
							h = a.getBoundingClientRect();
						("none" !== u || "none" !== c) && (r += h.left + a.clientLeft), i += h.top + (s.scrollTop || l.scrollTop || 0);
						break
					}
					a = a.offsetParent
				} while (a);
				a = t;
				do {
					if (a === s) break;
					i -= a.scrollTop || 0, r -= a.scrollLeft || 0, a = a.parentNode
				} while (a);
				return new o.Point(r, i)
			},
			documentIsLtr: function () {
				return o.DomUtil._docIsLtrCached || (o.DomUtil._docIsLtrCached = !0, o.DomUtil._docIsLtr = "ltr" === o.DomUtil.getStyle(e.body, "direction")), o.DomUtil._docIsLtr
			},
			create: function (t, n, i) {
				var o = e.createElement(t);
				return o.className = n, i && i.appendChild(o), o
			},
			hasClass: function (t, e) {
				if (t.classList !== n) return t.classList.contains(e);
				var i = o.DomUtil._getClass(t);
				return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
			},
			addClass: function (t, e) {
				if (t.classList !== n)
					for (var i = o.Util.splitWords(e), r = 0, a = i.length; a > r; r++) t.classList.add(i[r]);
				else if (!o.DomUtil.hasClass(t, e)) {
					var s = o.DomUtil._getClass(t);
					o.DomUtil._setClass(t, (s ? s + " " : "") + e)
				}
			},
			removeClass: function (t, e) {
				t.classList !== n ? t.classList.remove(e) : o.DomUtil._setClass(t, o.Util.trim((" " + o.DomUtil._getClass(t) + " ").replace(" " + e + " ", " ")))
			},
			_setClass: function (t, e) {
				t.className.baseVal === n ? t.className = e : t.className.baseVal = e
			},
			_getClass: function (t) {
				return t.className.baseVal === n ? t.className : t.className.baseVal
			},
			setOpacity: function (t, e) {
				if ("opacity" in t.style) t.style.opacity = e;
				else if ("filter" in t.style) {
					var n = !1,
						i = "DXImageTransform.Microsoft.Alpha";
					try {
						n = t.filters.item(i)
					} catch (o) {
						if (1 === e) return
					}
					e = Math.round(100 * e), n ? (n.Enabled = 100 !== e, n.Opacity = e) : t.style.filter += " progid:" + i + "(opacity=" + e + ")"
				}
			},
			testProp: function (t) {
				for (var n = e.documentElement.style, i = 0; i < t.length; i++)
					if (t[i] in n) return t[i];
				return !1
			},
			getTranslateString: function (t) {
				var e = o.Browser.webkit3d,
					n = "translate" + (e ? "3d" : "") + "(",
					i = (e ? ",0" : "") + ")";
				return n + t.x + "px," + t.y + "px" + i
			},
			getScaleString: function (t, e) {
				var n = o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t))),
					i = " scale(" + t + ") ";
				return n + i
			},
			setPosition: function (t, e, n) {
				t._leaflet_pos = e, !n && o.Browser.any3d ? t.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
			},
			getPosition: function (t) {
				return t._leaflet_pos
			}
		}, o.DomUtil.TRANSFORM = o.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), o.DomUtil.TRANSITION = o.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), o.DomUtil.TRANSITION_END = "webkitTransition" === o.DomUtil.TRANSITION || "OTransition" === o.DomUtil.TRANSITION ? o.DomUtil.TRANSITION + "End" : "transitionend",
		function () {
			if ("onselectstart" in e) o.extend(o.DomUtil, {
				disableTextSelection: function () {
					o.DomEvent.on(t, "selectstart", o.DomEvent.preventDefault)
				},
				enableTextSelection: function () {
					o.DomEvent.off(t, "selectstart", o.DomEvent.preventDefault)
				}
			});
			else {
				var n = o.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
				o.extend(o.DomUtil, {
					disableTextSelection: function () {
						if (n) {
							var t = e.documentElement.style;
							this._userSelect = t[n], t[n] = "none"
						}
					},
					enableTextSelection: function () {
						n && (e.documentElement.style[n] = this._userSelect, delete this._userSelect)
					}
				})
			}
			o.extend(o.DomUtil, {
				disableImageDrag: function () {
					o.DomEvent.on(t, "dragstart", o.DomEvent.preventDefault)
				},
				enableImageDrag: function () {
					o.DomEvent.off(t, "dragstart", o.DomEvent.preventDefault)
				}
			})
		}(), o.LatLng = function (t, e, i) {
			if (t = parseFloat(t), e = parseFloat(e), isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
			this.lat = t, this.lng = e, i !== n && (this.alt = parseFloat(i))
		}, o.extend(o.LatLng, {
			DEG_TO_RAD: Math.PI / 180,
			RAD_TO_DEG: 180 / Math.PI,
			MAX_MARGIN: 1e-9
		}), o.LatLng.prototype = {
			equals: function (t) {
				if (!t) return !1;
				t = o.latLng(t);
				var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
				return e <= o.LatLng.MAX_MARGIN
			},
			toString: function (t) {
				return "LatLng(" + o.Util.formatNum(this.lat, t) + ", " + o.Util.formatNum(this.lng, t) + ")"
			},
			distanceTo: function (t) {
				t = o.latLng(t);
				var e = 6378137,
					n = o.LatLng.DEG_TO_RAD,
					i = (t.lat - this.lat) * n,
					r = (t.lng - this.lng) * n,
					a = this.lat * n,
					s = t.lat * n,
					l = Math.sin(i / 2),
					u = Math.sin(r / 2),
					c = l * l + u * u * Math.cos(a) * Math.cos(s);
				return 2 * e * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
			},
			wrap: function (t, e) {
				var n = this.lng;
				return t = t || -180, e = e || 180, n = (n + e) % (e - t) + (t > n || n === e ? e : t), new o.LatLng(this.lat, n)
			}
		}, o.latLng = function (t, e) {
			return t instanceof o.LatLng ? t : o.Util.isArray(t) ? "number" == typeof t[0] || "string" == typeof t[0] ? new o.LatLng(t[0], t[1], t[2]) : null : t === n || null === t ? t : "object" == typeof t && "lat" in t ? new o.LatLng(t.lat, "lng" in t ? t.lng : t.lon) : e === n ? null : new o.LatLng(t, e)
		}, o.LatLngBounds = function (t, e) {
			if (t)
				for (var n = e ? [t, e] : t, i = 0, o = n.length; o > i; i++) this.extend(n[i])
		}, o.LatLngBounds.prototype = {
			extend: function (t) {
				if (!t) return this;
				var e = o.latLng(t);
				return t = null !== e ? e : o.latLngBounds(t), t instanceof o.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new o.LatLng(t.lat, t.lng), this._northEast = new o.LatLng(t.lat, t.lng)) : t instanceof o.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)), this
			},
			pad: function (t) {
				var e = this._southWest,
					n = this._northEast,
					i = Math.abs(e.lat - n.lat) * t,
					r = Math.abs(e.lng - n.lng) * t;
				return new o.LatLngBounds(new o.LatLng(e.lat - i, e.lng - r), new o.LatLng(n.lat + i, n.lng + r))
			},
			getCenter: function () {
				return new o.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
			},
			getSouthWest: function () {
				return this._southWest
			},
			getNorthEast: function () {
				return this._northEast
			},
			getNorthWest: function () {
				return new o.LatLng(this.getNorth(), this.getWest())
			},
			getSouthEast: function () {
				return new o.LatLng(this.getSouth(), this.getEast())
			},
			getWest: function () {
				return this._southWest.lng
			},
			getSouth: function () {
				return this._southWest.lat
			},
			getEast: function () {
				return this._northEast.lng
			},
			getNorth: function () {
				return this._northEast.lat
			},
			contains: function (t) {
				t = "number" == typeof t[0] || t instanceof o.LatLng ? o.latLng(t) : o.latLngBounds(t);
				var e, n, i = this._southWest,
					r = this._northEast;
				return t instanceof o.LatLngBounds ? (e = t.getSouthWest(), n = t.getNorthEast()) : e = n = t, e.lat >= i.lat && n.lat <= r.lat && e.lng >= i.lng && n.lng <= r.lng
			},
			intersects: function (t) {
				t = o.latLngBounds(t);
				var e = this._southWest,
					n = this._northEast,
					i = t.getSouthWest(),
					r = t.getNorthEast(),
					a = r.lat >= e.lat && i.lat <= n.lat,
					s = r.lng >= e.lng && i.lng <= n.lng;
				return a && s
			},
			toBBoxString: function () {
				return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
			},
			equals: function (t) {
				return t ? (t = o.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast())) : !1
			},
			isValid: function () {
				return !(!this._southWest || !this._northEast)
			}
		}, o.latLngBounds = function (t, e) {
			return !t || t instanceof o.LatLngBounds ? t : new o.LatLngBounds(t, e)
		}, o.Projection = {}, o.Projection.SphericalMercator = {
			MAX_LATITUDE: 85.0511287798,
			project: function (t) {
				var e = o.LatLng.DEG_TO_RAD,
					n = this.MAX_LATITUDE,
					i = Math.max(Math.min(n, t.lat), -n),
					r = t.lng * e,
					a = i * e;
				return a = Math.log(Math.tan(Math.PI / 4 + a / 2)), new o.Point(r, a)
			},
			unproject: function (t) {
				var e = o.LatLng.RAD_TO_DEG,
					n = t.x * e,
					i = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
				return new o.LatLng(i, n)
			}
		}, o.Projection.LonLat = {
			project: function (t) {
				return new o.Point(t.lng, t.lat)
			},
			unproject: function (t) {
				return new o.LatLng(t.y, t.x)
			}
		}, o.CRS = {
			latLngToPoint: function (t, e) {
				var n = this.projection.project(t),
					i = this.scale(e);
				return this.transformation._transform(n, i)
			},
			pointToLatLng: function (t, e) {
				var n = this.scale(e),
					i = this.transformation.untransform(t, n);
				return this.projection.unproject(i)
			},
			project: function (t) {
				return this.projection.project(t)
			},
			scale: function (t) {
				return 256 * Math.pow(2, t)
			},
			getSize: function (t) {
				var e = this.scale(t);
				return o.point(e, e)
			}
		}, o.CRS.Simple = o.extend({}, o.CRS, {
			projection: o.Projection.LonLat,
			transformation: new o.Transformation(1, 0, -1, 0),
			scale: function (t) {
				return Math.pow(2, t)
			}
		}), o.CRS.EPSG3857 = o.extend({}, o.CRS, {
			code: "EPSG:3857",
			projection: o.Projection.SphericalMercator,
			transformation: new o.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5),
			project: function (t) {
				var e = this.projection.project(t),
					n = 6378137;
				return e.multiplyBy(n)
			}
		}), o.CRS.EPSG900913 = o.extend({}, o.CRS.EPSG3857, {
			code: "EPSG:900913"
		}), o.CRS.EPSG4326 = o.extend({}, o.CRS, {
			code: "EPSG:4326",
			projection: o.Projection.LonLat,
			transformation: new o.Transformation(1 / 360, .5, -1 / 360, .5)
		}), o.Map = o.Class.extend({
			includes: o.Mixin.Events,
			options: {
				crs: o.CRS.EPSG3857,
				fadeAnimation: o.DomUtil.TRANSITION && !o.Browser.android23,
				trackResize: !0,
				markerZoomAnimation: o.DomUtil.TRANSITION && o.Browser.any3d
			},
			initialize: function (t, e) {
				e = o.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = o.bind(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.center && e.zoom !== n && this.setView(o.latLng(e.center), e.zoom, {
					reset: !0
				}), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0, this.callInitHooks(), this._addLayers(e.layers)
			},
			setView: function (t, e) {
				return e = e === n ? this.getZoom() : e, this._resetView(o.latLng(t), this._limitZoom(e)), this
			},
			setZoom: function (t, e) {
				return this._loaded ? this.setView(this.getCenter(), t, {
					zoom: e
				}) : (this._zoom = this._limitZoom(t), this)
			},
			zoomIn: function (t, e) {
				return this.setZoom(this._zoom + (t || 1), e)
			},
			zoomOut: function (t, e) {
				return this.setZoom(this._zoom - (t || 1), e)
			},
			setZoomAround: function (t, e, n) {
				var i = this.getZoomScale(e),
					r = this.getSize().divideBy(2),
					a = t instanceof o.Point ? t : this.latLngToContainerPoint(t),
					s = a.subtract(r).multiplyBy(1 - 1 / i),
					l = this.containerPointToLatLng(r.add(s));
				return this.setView(l, e, {
					zoom: n
				})
			},
			fitBounds: function (t, e) {
				e = e || {}, t = t.getBounds ? t.getBounds() : o.latLngBounds(t);
				var n = o.point(e.paddingTopLeft || e.padding || [0, 0]),
					i = o.point(e.paddingBottomRight || e.padding || [0, 0]),
					r = this.getBoundsZoom(t, !1, n.add(i)),
					a = i.subtract(n).divideBy(2),
					s = this.project(t.getSouthWest(), r),
					l = this.project(t.getNorthEast(), r),
					u = this.unproject(s.add(l).divideBy(2).add(a), r);
				return r = e && e.maxZoom ? Math.min(e.maxZoom, r) : r, this.setView(u, r, e)
			},
			fitWorld: function (t) {
				return this.fitBounds([[-90, -180], [90, 180]], t)
			},
			panTo: function (t, e) {
				return this.setView(t, this._zoom, {
					pan: e
				})
			},
			panBy: function (t) {
				return this.fire("movestart"), this._rawPanBy(o.point(t)), this.fire("move"), this.fire("moveend")
			},
			setMaxBounds: function (t) {
				return t = o.latLngBounds(t), this.options.maxBounds = t, t ? (this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this)
			},
			panInsideBounds: function (t, e) {
				var n = this.getCenter(),
					i = this._limitCenter(n, this._zoom, t);
				return n.equals(i) ? this : this.panTo(i, e)
			},
			addLayer: function (t) {
				var e = o.stamp(t);
				return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on("load", this._onTileLayerLoad, this)), this._loaded && this._layerAdd(t), this)
			},
			removeLayer: function (t) {
				var e = o.stamp(t);
				return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && this.fire("layerremove", {
					layer: t
				}), this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off("load", this._onTileLayerLoad, this)), this) : this
			},
			hasLayer: function (t) {
				return t ? o.stamp(t) in this._layers : !1
			},
			eachLayer: function (t, e) {
				for (var n in this._layers) t.call(e, this._layers[n]);
				return this
			},
			invalidateSize: function (t) {
				if (!this._loaded) return this;
				t = o.extend({
					animate: !1,
					pan: !0
				}, t === !0 ? {
					animate: !0
				} : t);
				var e = this.getSize();
				this._sizeChanged = !0, this._initialCenter = null;
				var n = this.getSize(),
					i = e.divideBy(2).round(),
					r = n.divideBy(2).round(),
					a = i.subtract(r);
				return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
					oldSize: e,
					newSize: n
				})) : this
			},
			addHandler: function (t, e) {
				if (!e) return this;
				var n = this[t] = new e(this);
				return this._handlers.push(n), this.options[t] && n.enable(), this
			},
			remove: function () {
				this._loaded && this.fire("unload"), this._initEvents("off");
				try {
					delete this._container._leaflet
				} catch (t) {
					this._container._leaflet = n
				}
				return this._clearPanes(), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this
			},
			getCenter: function () {
				return this._checkIfLoaded(), this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
			},
			getZoom: function () {
				return this._zoom
			},
			getBounds: function () {
				var t = this.getPixelBounds(),
					e = this.unproject(t.getBottomLeft()),
					n = this.unproject(t.getTopRight());
				return new o.LatLngBounds(e, n)
			},
			getMinZoom: function () {
				return this.options.minZoom === n ? this._layersMinZoom === n ? 0 : this._layersMinZoom : this.options.minZoom
			},
			getMaxZoom: function () {
				return this.options.maxZoom === n ? this._layersMaxZoom === n ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
			},
			getBoundsZoom: function (t, e, n) {
				t = o.latLngBounds(t);
				var i, r = this.getMinZoom() - (e ? 1 : 0),
					a = this.getMaxZoom(),
					s = this.getSize(),
					l = t.getNorthWest(),
					u = t.getSouthEast(),
					c = !0;
				n = o.point(n || [0, 0]);
				do r++, i = this.project(u, r).subtract(this.project(l, r)).add(n), c = e ? i.x < s.x || i.y < s.y : s.contains(i); while (c && a >= r);
				return c && e ? null : e ? r : r - 1
			},
			getSize: function () {
				return (!this._size || this._sizeChanged) && (this._size = new o.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone()
			},
			getPixelBounds: function () {
				var t = this._getTopLeftPoint();
				return new o.Bounds(t, t.add(this.getSize()))
			},
			getPixelOrigin: function () {
				return this._checkIfLoaded(), this._initialTopLeftPoint
			},
			getPanes: function () {
				return this._panes
			},
			getContainer: function () {
				return this._container
			},
			getZoomScale: function (t) {
				var e = this.options.crs;
				return e.scale(t) / e.scale(this._zoom)
			},
			getScaleZoom: function (t) {
				return this._zoom + Math.log(t) / Math.LN2
			},
			project: function (t, e) {
				return e = e === n ? this._zoom : e, this.options.crs.latLngToPoint(o.latLng(t), e)
			},
			unproject: function (t, e) {
				return e = e === n ? this._zoom : e, this.options.crs.pointToLatLng(o.point(t), e)
			},
			layerPointToLatLng: function (t) {
				var e = o.point(t).add(this.getPixelOrigin());
				return this.unproject(e)
			},
			latLngToLayerPoint: function (t) {
				var e = this.project(o.latLng(t))._round();
				return e._subtract(this.getPixelOrigin())
			},
			containerPointToLayerPoint: function (t) {
				return o.point(t).subtract(this._getMapPanePos())
			},
			layerPointToContainerPoint: function (t) {
				return o.point(t).add(this._getMapPanePos())
			},
			containerPointToLatLng: function (t) {
				var e = this.containerPointToLayerPoint(o.point(t));
				return this.layerPointToLatLng(e)
			},
			latLngToContainerPoint: function (t) {
				return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))
			},
			mouseEventToContainerPoint: function (t) {
				return o.DomEvent.getMousePosition(t, this._container)
			},
			mouseEventToLayerPoint: function (t) {
				return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
			},
			mouseEventToLatLng: function (t) {
				return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
			},
			_initContainer: function (t) {
				var e = this._container = o.DomUtil.get(t);
				if (!e) throw new Error("Map container not found.");
				if (e._leaflet) throw new Error("Map container is already initialized.");
				e._leaflet = !0
			},
			_initLayout: function () {
				var t = this._container;
				o.DomUtil.addClass(t, "leaflet-container" + (o.Browser.touch ? " leaflet-touch" : "") + (o.Browser.retina ? " leaflet-retina" : "") + (o.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
				var e = o.DomUtil.getStyle(t, "position");
				"absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
			},
			_initPanes: function () {
				var t = this._panes = {};
				this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = t.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), t.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), t.shadowPane = this._createPane("leaflet-shadow-pane"), t.overlayPane = this._createPane("leaflet-overlay-pane"), t.markerPane = this._createPane("leaflet-marker-pane"), t.popupPane = this._createPane("leaflet-popup-pane");
				var e = " leaflet-zoom-hide";
				this.options.markerZoomAnimation || (o.DomUtil.addClass(t.markerPane, e), o.DomUtil.addClass(t.shadowPane, e), o.DomUtil.addClass(t.popupPane, e))
			},
			_createPane: function (t, e) {
				return o.DomUtil.create("div", t, e || this._panes.objectsPane)
			},
			_clearPanes: function () {
				this._container.removeChild(this._mapPane)
			},
			_addLayers: function (t) {
				t = t ? o.Util.isArray(t) ? t : [t] : [];
				for (var e = 0, n = t.length; n > e; e++) this.addLayer(t[e])
			},
			_resetView: function (t, e, n, i) {
				var r = this._zoom !== e;
				i || (this.fire("movestart"), r && this.fire("zoomstart")), this._zoom = e, this._initialCenter = t, this._initialTopLeftPoint = this._getNewTopLeftPoint(t), n ? this._initialTopLeftPoint._add(this._getMapPanePos()) : o.DomUtil.setPosition(this._mapPane, new o.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
				var a = !this._loaded;
				this._loaded = !0, this.fire("viewreset", {
					hard: !n
				}), a && (this.fire("load"), this.eachLayer(this._layerAdd, this)), this.fire("move"), (r || i) && this.fire("zoomend"), this.fire("moveend", {
					hard: !n
				})
			},
			_rawPanBy: function (t) {
				o.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
			},
			_getZoomSpan: function () {
				return this.getMaxZoom() - this.getMinZoom()
			},
			_updateZoomLevels: function () {
				var t, e = 1 / 0,
					i = -1 / 0,
					o = this._getZoomSpan();
				for (t in this._zoomBoundLayers) {
					var r = this._zoomBoundLayers[t];
					isNaN(r.options.minZoom) || (e = Math.min(e, r.options.minZoom)), isNaN(r.options.maxZoom) || (i = Math.max(i, r.options.maxZoom))
				}
				t === n ? this._layersMaxZoom = this._layersMinZoom = n : (this._layersMaxZoom = i, this._layersMinZoom = e), o !== this._getZoomSpan() && this.fire("zoomlevelschange")
			},
			_panInsideMaxBounds: function () {
				this.panInsideBounds(this.options.maxBounds)
			},
			_checkIfLoaded: function () {
				if (!this._loaded) throw new Error("Set map center and zoom first.")
			},
			_initEvents: function (e) {
				if (o.DomEvent) {
					e = e || "on", o.DomEvent[e](this._container, "click", this._onMouseClick, this);
					var n, i, r = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
					for (n = 0, i = r.length; i > n; n++) o.DomEvent[e](this._container, r[n], this._fireMouseEvent, this);
					this.options.trackResize && o.DomEvent[e](t, "resize", this._onResize, this)
				}
			},
			_onResize: function () {
				o.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = o.Util.requestAnimFrame(function () {
					this.invalidateSize({
						debounceMoveend: !0
					})
				}, this, !1, this._container)
			},
			_onMouseClick: function (t) {
				!this._loaded || !t._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || o.DomEvent._skipped(t) || (this.fire("preclick"), this._fireMouseEvent(t))
			},
			_fireMouseEvent: function (t) {
				if (this._loaded && !o.DomEvent._skipped(t)) {
					var e = t.type;
					if (e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e)) {
						"contextmenu" === e && o.DomEvent.preventDefault(t);
						var n = this.mouseEventToContainerPoint(t),
							i = this.containerPointToLayerPoint(n),
							r = this.layerPointToLatLng(i);
						this.fire(e, {
							latlng: r,
							layerPoint: i,
							containerPoint: n,
							originalEvent: t
						})
					}
				}
			},
			_onTileLayerLoad: function () {
				this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
			},
			_clearHandlers: function () {
				for (var t = 0, e = this._handlers.length; e > t; t++) this._handlers[t].disable()
			},
			whenReady: function (t, e) {
				return this._loaded ? t.call(e || this, this) : this.on("load", t, e), this
			},
			_layerAdd: function (t) {
				t.onAdd(this), this.fire("layeradd", {
					layer: t
				})
			},
			_getMapPanePos: function () {
				return o.DomUtil.getPosition(this._mapPane)
			},
			_moved: function () {
				var t = this._getMapPanePos();
				return t && !t.equals([0, 0])
			},
			_getTopLeftPoint: function () {
				return this.getPixelOrigin().subtract(this._getMapPanePos())
			},
			_getNewTopLeftPoint: function (t, e) {
				var n = this.getSize()._divideBy(2);
				return this.project(t, e)._subtract(n)._round()
			},
			_latLngToNewLayerPoint: function (t, e, n) {
				var i = this._getNewTopLeftPoint(n, e).add(this._getMapPanePos());
				return this.project(t, e)._subtract(i)
			},
			_getCenterLayerPoint: function () {
				return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
			},
			_getCenterOffset: function (t) {
				return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
			},
			_limitCenter: function (t, e, n) {
				if (!n) return t;
				var i = this.project(t, e),
					r = this.getSize().divideBy(2),
					a = new o.Bounds(i.subtract(r), i.add(r)),
					s = this._getBoundsOffset(a, n, e);
				return this.unproject(i.add(s), e)
			},
			_limitOffset: function (t, e) {
				if (!e) return t;
				var n = this.getPixelBounds(),
					i = new o.Bounds(n.min.add(t), n.max.add(t));
				return t.add(this._getBoundsOffset(i, e))
			},
			_getBoundsOffset: function (t, e, n) {
				var i = this.project(e.getNorthWest(), n).subtract(t.min),
					r = this.project(e.getSouthEast(), n).subtract(t.max),
					a = this._rebound(i.x, -r.x),
					s = this._rebound(i.y, -r.y);
				return new o.Point(a, s)
			},
			_rebound: function (t, e) {
				return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
			},
			_limitZoom: function (t) {
				var e = this.getMinZoom(),
					n = this.getMaxZoom();
				return Math.max(e, Math.min(n, t))
			}
		}), o.map = function (t, e) {
			return new o.Map(t, e)
		}, o.Projection.Mercator = {
			MAX_LATITUDE: 85.0840591556,
			R_MINOR: 6356752.314245179,
			R_MAJOR: 6378137,
			project: function (t) {
				var e = o.LatLng.DEG_TO_RAD,
					n = this.MAX_LATITUDE,
					i = Math.max(Math.min(n, t.lat), -n),
					r = this.R_MAJOR,
					a = this.R_MINOR,
					s = t.lng * e * r,
					l = i * e,
					u = a / r,
					c = Math.sqrt(1 - u * u),
					h = c * Math.sin(l);
				h = Math.pow((1 - h) / (1 + h), .5 * c);
				var p = Math.tan(.5 * (.5 * Math.PI - l)) / h;
				return l = -r * Math.log(p), new o.Point(s, l)
			},
			unproject: function (t) {
				for (var e, n = o.LatLng.RAD_TO_DEG, i = this.R_MAJOR, r = this.R_MINOR, a = t.x * n / i, s = r / i, l = Math.sqrt(1 - s * s), u = Math.exp(-t.y / i), c = Math.PI / 2 - 2 * Math.atan(u), h = 15, p = 1e-7, d = h, f = .1; Math.abs(f) > p && --d > 0;) e = l * Math.sin(c), f = Math.PI / 2 - 2 * Math.atan(u * Math.pow((1 - e) / (1 + e), .5 * l)) - c, c += f;
				return new o.LatLng(c * n, a)
			}
		}, o.CRS.EPSG3395 = o.extend({}, o.CRS, {
			code: "EPSG:3395",
			projection: o.Projection.Mercator,
			transformation: function () {
				var t = o.Projection.Mercator,
					e = t.R_MAJOR,
					n = .5 / (Math.PI * e);
				return new o.Transformation(n, .5, -n, .5)
			}()
		}), o.TileLayer = o.Class.extend({
			includes: o.Mixin.Events,
			options: {
				minZoom: 0,
				maxZoom: 18,
				tileSize: 256,
				subdomains: "abc",
				errorTileUrl: "",
				attribution: "",
				zoomOffset: 0,
				opacity: 1,
				unloadInvisibleTiles: o.Browser.mobile,
				updateWhenIdle: o.Browser.mobile
			},
			initialize: function (t, e) {
				e = o.setOptions(this, e), e.detectRetina && o.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomOffset++, e.minZoom > 0 && e.minZoom--, this.options.maxZoom--), e.bounds && (e.bounds = o.latLngBounds(e.bounds)), this._url = t;
				var n = this.options.subdomains;
				"string" == typeof n && (this.options.subdomains = n.split(""))
			},
			onAdd: function (t) {
				this._map = t, this._animated = t._zoomAnimated, this._initContainer(), t.on({
					viewreset: this._reset,
					moveend: this._update
				}, this), this._animated && t.on({
					zoomanim: this._animateZoom,
					zoomend: this._endZoomAnim
				}, this), this.options.updateWhenIdle || (this._limitedUpdate = o.Util.limitExecByInterval(this._update, 150, this), t.on("move", this._limitedUpdate, this)), this._reset(), this._update()
			},
			addTo: function (t) {
				return t.addLayer(this), this
			},
			onRemove: function (t) {
				this._container.parentNode.removeChild(this._container), t.off({
					viewreset: this._reset,
					moveend: this._update
				}, this), this._animated && t.off({
					zoomanim: this._animateZoom,
					zoomend: this._endZoomAnim
				}, this), this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this), this._container = null, this._map = null
			},
			bringToFront: function () {
				var t = this._map._panes.tilePane;
				return this._container && (t.appendChild(this._container), this._setAutoZIndex(t, Math.max)), this
			},
			bringToBack: function () {
				var t = this._map._panes.tilePane;
				return this._container && (t.insertBefore(this._container, t.firstChild), this._setAutoZIndex(t, Math.min)), this
			},
			getAttribution: function () {
				return this.options.attribution
			},
			getContainer: function () {
				return this._container
			},
			setOpacity: function (t) {
				return this.options.opacity = t, this._map && this._updateOpacity(), this
			},
			setZIndex: function (t) {
				return this.options.zIndex = t, this._updateZIndex(), this
			},
			setUrl: function (t, e) {
				return this._url = t, e || this.redraw(), this
			},
			redraw: function () {
				return this._map && (this._reset({
					hard: !0
				}), this._update()), this
			},
			_updateZIndex: function () {
				this._container && this.options.zIndex !== n && (this._container.style.zIndex = this.options.zIndex)
			},
			_setAutoZIndex: function (t, e) {
				var n, i, o, r = t.children,
					a = -e(1 / 0, -1 / 0);
				for (i = 0, o = r.length; o > i; i++) r[i] !== this._container && (n = parseInt(r[i].style.zIndex, 10), isNaN(n) || (a = e(a, n)));
				this.options.zIndex = this._container.style.zIndex = (isFinite(a) ? a : 0) + e(1, -1)
			},
			_updateOpacity: function () {
				var t, e = this._tiles;
				if (o.Browser.ielt9)
					for (t in e) o.DomUtil.setOpacity(e[t], this.options.opacity);
				else o.DomUtil.setOpacity(this._container, this.options.opacity)
			},
			_initContainer: function () {
				var t = this._map._panes.tilePane;
				if (!this._container) {
					if (this._container = o.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated) {
						var e = "leaflet-tile-container";
						this._bgBuffer = o.DomUtil.create("div", e, this._container), this._tileContainer = o.DomUtil.create("div", e, this._container)
					} else this._tileContainer = this._container;
					t.appendChild(this._container), this.options.opacity < 1 && this._updateOpacity()
				}
			},
			_reset: function (t) {
				for (var e in this._tiles) this.fire("tileunload", {
					tile: this._tiles[e]
				});
				this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer.innerHTML = "", this._animated && t && t.hard && this._clearBgBuffer(), this._initContainer()
			},
			_getTileSize: function () {
				var t = this._map,
					e = t.getZoom() + this.options.zoomOffset,
					n = this.options.maxNativeZoom,
					i = this.options.tileSize;
				return n && e > n && (i = Math.round(t.getZoomScale(e) / t.getZoomScale(n) * i)), i
			},
			_update: function () {
				if (this._map) {
					var t = this._map,
						e = t.getPixelBounds(),
						n = t.getZoom(),
						i = this._getTileSize();
					if (!(n > this.options.maxZoom || n < this.options.minZoom)) {
						var r = o.bounds(e.min.divideBy(i)._floor(), e.max.divideBy(i)._floor());
						this._addTilesFromCenterOut(r), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(r)
					}
				}
			},
			_addTilesFromCenterOut: function (t) {
				var n, i, r, a = [],
					s = t.getCenter();
				for (n = t.min.y; n <= t.max.y; n++)
					for (i = t.min.x; i <= t.max.x; i++) r = new o.Point(i, n), this._tileShouldBeLoaded(r) && a.push(r);
				var l = a.length;
				if (0 !== l) {
					a.sort(function (t, e) {
						return t.distanceTo(s) - e.distanceTo(s)
					});
					var u = e.createDocumentFragment();
					for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += l, i = 0; l > i; i++) this._addTile(a[i], u);
					this._tileContainer.appendChild(u)
				}
			},
			_tileShouldBeLoaded: function (t) {
				if (t.x + ":" + t.y in this._tiles) return !1;
				var e = this.options;
				if (!e.continuousWorld) {
					var n = this._getWrapTileNum();
					if (e.noWrap && (t.x < 0 || t.x >= n.x) || t.y < 0 || t.y >= n.y) return !1
				}
				if (e.bounds) {
					var i = e.tileSize,
						o = t.multiplyBy(i),
						r = o.add([i, i]),
						a = this._map.unproject(o),
						s = this._map.unproject(r);
					if (e.continuousWorld || e.noWrap || (a = a.wrap(), s = s.wrap()), !e.bounds.intersects([a, s])) return !1
				}
				return !0
			},
			_removeOtherTiles: function (t) {
				var e, n, i, o;
				for (o in this._tiles) e = o.split(":"), n = parseInt(e[0], 10), i = parseInt(e[1], 10), (n < t.min.x || n > t.max.x || i < t.min.y || i > t.max.y) && this._removeTile(o)
			},
			_removeTile: function (t) {
				var e = this._tiles[t];
				this.fire("tileunload", {
					tile: e,
					url: e.src
				}), this.options.reuseTiles ? (o.DomUtil.removeClass(e, "leaflet-tile-loaded"), this._unusedTiles.push(e)) : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e), o.Browser.android || (e.onload = null, e.src = o.Util.emptyImageUrl), delete this._tiles[t]
			},
			_addTile: function (t, e) {
				var n = this._getTilePos(t),
					i = this._getTile();
				o.DomUtil.setPosition(i, n, o.Browser.chrome), this._tiles[t.x + ":" + t.y] = i, this._loadTile(i, t), i.parentNode !== this._tileContainer && e.appendChild(i)
			},
			_getZoomForUrl: function () {
				var t = this.options,
					e = this._map.getZoom();
				return t.zoomReverse && (e = t.maxZoom - e), e += t.zoomOffset, t.maxNativeZoom ? Math.min(e, t.maxNativeZoom) : e
			},
			_getTilePos: function (t) {
				var e = this._map.getPixelOrigin(),
					n = this._getTileSize();
				return t.multiplyBy(n).subtract(e)
			},
			getTileUrl: function (t) {
				return o.Util.template(this._url, o.extend({
					s: this._getSubdomain(t),
					z: t.z,
					x: t.x,
					y: t.y
				}, this.options))
			},
			_getWrapTileNum: function () {
				var t = this._map.options.crs,
					e = t.getSize(this._map.getZoom());
				return e.divideBy(this._getTileSize())._floor()
			},
			_adjustTilePoint: function (t) {
				var e = this._getWrapTileNum();
				this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e.x + e.x) % e.x), this.options.tms && (t.y = e.y - t.y - 1), t.z = this._getZoomForUrl()
			},
			_getSubdomain: function (t) {
				var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
				return this.options.subdomains[e]
			},
			_getTile: function () {
				if (this.options.reuseTiles && this._unusedTiles.length > 0) {
					var t = this._unusedTiles.pop();
					return this._resetTile(t), t
				}
				return this._createTile()
			},
			_resetTile: function () {},
			_createTile: function () {
				var t = o.DomUtil.create("img", "leaflet-tile");
				return t.style.width = t.style.height = this._getTileSize() + "px", t.galleryimg = "no", t.onselectstart = t.onmousemove = o.Util.falseFn, o.Browser.ielt9 && this.options.opacity !== n && o.DomUtil.setOpacity(t, this.options.opacity), o.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden"), t
			},
			_loadTile: function (t, e) {
				t._layer = this, t.onload = this._tileOnLoad, t.onerror = this._tileOnError, this._adjustTilePoint(e), t.src = this.getTileUrl(e), this.fire("tileloadstart", {
					tile: t,
					url: t.src
				})
			},
			_tileLoaded: function () {
				this._tilesToLoad--, this._animated && o.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"), this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(o.bind(this._clearBgBuffer, this), 500)))
			},
			_tileOnLoad: function () {
				var t = this._layer;
				this.src !== o.Util.emptyImageUrl && (o.DomUtil.addClass(this, "leaflet-tile-loaded"), t.fire("tileload", {
					tile: this,
					url: this.src
				})), t._tileLoaded()
			},
			_tileOnError: function () {
				var t = this._layer;
				t.fire("tileerror", {
					tile: this,
					url: this.src
				});
				var e = t.options.errorTileUrl;
				e && (this.src = e), t._tileLoaded()
			}
		}), o.tileLayer = function (t, e) {
			return new o.TileLayer(t, e)
		}, o.TileLayer.WMS = o.TileLayer.extend({
			defaultWmsParams: {
				service: "WMS",
				request: "GetMap",
				version: "1.1.1",
				layers: "",
				styles: "",
				format: "image/jpeg",
				transparent: !1
			},
			initialize: function (t, e) {
				this._url = t;
				var n = o.extend({}, this.defaultWmsParams),
					i = e.tileSize || this.options.tileSize;
				n.width = n.height = e.detectRetina && o.Browser.retina ? 2 * i : i;
				for (var r in e) this.options.hasOwnProperty(r) || "crs" === r || (n[r] = e[r]);
				this.wmsParams = n, o.setOptions(this, e)
			},
			onAdd: function (t) {
				this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
				var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
				this.wmsParams[e] = this._crs.code, o.TileLayer.prototype.onAdd.call(this, t)
			},
			getTileUrl: function (t) {
				var e = this._map,
					n = this.options.tileSize,
					i = t.multiplyBy(n),
					r = i.add([n, n]),
					a = this._crs.project(e.unproject(i, t.z)),
					s = this._crs.project(e.unproject(r, t.z)),
					l = this._wmsVersion >= 1.3 && this._crs === o.CRS.EPSG4326 ? [s.y, a.x, a.y, s.x].join(",") : [a.x, s.y, s.x, a.y].join(","),
					u = o.Util.template(this._url, {
						s: this._getSubdomain(t)
					});
				return u + o.Util.getParamString(this.wmsParams, u, !0) + "&BBOX=" + l
			},
			setParams: function (t, e) {
				return o.extend(this.wmsParams, t), e || this.redraw(), this
			}
		}), o.tileLayer.wms = function (t, e) {
			return new o.TileLayer.WMS(t, e)
		}, o.TileLayer.Canvas = o.TileLayer.extend({
			options: {
				async: !1
			},
			initialize: function (t) {
				o.setOptions(this, t)
			},
			redraw: function () {
				this._map && (this._reset({
					hard: !0
				}), this._update());
				for (var t in this._tiles) this._redrawTile(this._tiles[t]);
				return this
			},
			_redrawTile: function (t) {
				this.drawTile(t, t._tilePoint, this._map._zoom)
			},
			_createTile: function () {
				var t = o.DomUtil.create("canvas", "leaflet-tile");
				return t.width = t.height = this.options.tileSize, t.onselectstart = t.onmousemove = o.Util.falseFn, t
			},
			_loadTile: function (t, e) {
				t._layer = this, t._tilePoint = e, this._redrawTile(t), this.options.async || this.tileDrawn(t)
			},
			drawTile: function () {},
			tileDrawn: function (t) {
				this._tileOnLoad.call(t)
			}
		}), o.tileLayer.canvas = function (t) {
			return new o.TileLayer.Canvas(t)
		}, o.ImageOverlay = o.Class.extend({
			includes: o.Mixin.Events,
			options: {
				opacity: 1
			},
			initialize: function (t, e, n) {
				this._url = t, this._bounds = o.latLngBounds(e), o.setOptions(this, n)
			},
			onAdd: function (t) {
				this._map = t, this._image || this._initImage(), t._panes.overlayPane.appendChild(this._image), t.on("viewreset", this._reset, this), t.options.zoomAnimation && o.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset()
			},
			onRemove: function (t) {
				t.getPanes().overlayPane.removeChild(this._image), t.off("viewreset", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
			},
			addTo: function (t) {
				return t.addLayer(this), this
			},
			setOpacity: function (t) {
				return this.options.opacity = t, this._updateOpacity(), this
			},
			bringToFront: function () {
				return this._image && this._map._panes.overlayPane.appendChild(this._image), this
			},
			bringToBack: function () {
				var t = this._map._panes.overlayPane;
				return this._image && t.insertBefore(this._image, t.firstChild), this
			},
			setUrl: function (t) {
				this._url = t, this._image.src = this._url
			},
			getAttribution: function () {
				return this.options.attribution
			},
			_initImage: function () {
				this._image = o.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && o.Browser.any3d ? o.DomUtil.addClass(this._image, "leaflet-zoom-animated") : o.DomUtil.addClass(this._image, "leaflet-zoom-hide"), this._updateOpacity(), o.extend(this._image, {
					galleryimg: "no",
					onselectstart: o.Util.falseFn,
					onmousemove: o.Util.falseFn,
					onload: o.bind(this._onImageLoad, this),
					src: this._url
				})
			},
			_animateZoom: function (t) {
				var e = this._map,
					n = this._image,
					i = e.getZoomScale(t.zoom),
					r = this._bounds.getNorthWest(),
					a = this._bounds.getSouthEast(),
					s = e._latLngToNewLayerPoint(r, t.zoom, t.center),
					l = e._latLngToNewLayerPoint(a, t.zoom, t.center)._subtract(s),
					u = s._add(l._multiplyBy(.5 * (1 - 1 / i)));
				n.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(u) + " scale(" + i + ") "
			},
			_reset: function () {
				var t = this._image,
					e = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
					n = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);
				o.DomUtil.setPosition(t, e), t.style.width = n.x + "px", t.style.height = n.y + "px"
			},
			_onImageLoad: function () {
				this.fire("load")
			},
			_updateOpacity: function () {
				o.DomUtil.setOpacity(this._image, this.options.opacity)
			}
		}), o.imageOverlay = function (t, e, n) {
			return new o.ImageOverlay(t, e, n)
		}, o.Icon = o.Class.extend({
			options: {
				className: ""
			},
			initialize: function (t) {
				o.setOptions(this, t)
			},
			createIcon: function (t) {
				return this._createIcon("icon", t)
			},
			createShadow: function (t) {
				return this._createIcon("shadow", t)
			},
			_createIcon: function (t, e) {
				var n = this._getIconUrl(t);
				if (!n) {
					if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
					return null
				}
				var i;
				return i = e && "IMG" === e.tagName ? this._createImg(n, e) : this._createImg(n), this._setIconStyles(i, t), i
			},
			_setIconStyles: function (t, e) {
				var n, i = this.options,
					r = o.point(i[e + "Size"]);
				n = "shadow" === e ? o.point(i.shadowAnchor || i.iconAnchor) : o.point(i.iconAnchor), !n && r && (n = r.divideBy(2, !0)), t.className = "leaflet-marker-" + e + " " + i.className, n && (t.style.marginLeft = -n.x + "px", t.style.marginTop = -n.y + "px"), r && (t.style.width = r.x + "px", t.style.height = r.y + "px")
			},
			_createImg: function (t, n) {
				return n = n || e.createElement("img"), n.src = t, n
			},
			_getIconUrl: function (t) {
				return o.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t + "Url"]
			}
		}), o.icon = function (t) {
			return new o.Icon(t)
		}, o.Icon.Default = o.Icon.extend({
			options: {
				iconSize: [25, 41],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				shadowSize: [41, 41]
			},
			_getIconUrl: function (t) {
				var e = t + "Url";
				if (this.options[e]) return this.options[e];
				o.Browser.retina && "icon" === t && (t += "-2x");
				var n = o.Icon.Default.imagePath;
				if (!n) throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
				return n + "/marker-" + t + ".png"
			}
		}), o.Icon.Default.imagePath = function () {
			var t, n, i, o, r, a = e.getElementsByTagName("script"),
				s = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
			for (t = 0, n = a.length; n > t; t++)
				if (i = a[t].src, o = i.match(s)) return r = i.split(s)[0], (r ? r + "/" : "") + "images"
		}(), o.Marker = o.Class.extend({
			includes: o.Mixin.Events,
			options: {
				icon: new o.Icon.Default,
				title: "",
				alt: "",
				clickable: !0,
				draggable: !1,
				keyboard: !0,
				zIndexOffset: 0,
				opacity: 1,
				riseOnHover: !1,
				riseOffset: 250
			},
			initialize: function (t, e) {
				o.setOptions(this, e), this._latlng = o.latLng(t)
			},
			onAdd: function (t) {
				this._map = t, t.on("viewreset", this.update, this), this._initIcon(), this.update(), this.fire("add"), t.options.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this)
			},
			addTo: function (t) {
				return t.addLayer(this), this
			},
			onRemove: function (t) {
				this.dragging && this.dragging.disable(), this._removeIcon(), this._removeShadow(), this.fire("remove"), t.off({
					viewreset: this.update,
					zoomanim: this._animateZoom
				}, this), this._map = null
			},
			getLatLng: function () {
				return this._latlng
			},
			setLatLng: function (t) {
				return this._latlng = o.latLng(t), this.update(), this.fire("move", {
					latlng: this._latlng
				})
			},
			setZIndexOffset: function (t) {
				return this.options.zIndexOffset = t, this.update(), this
			},
			setIcon: function (t) {
				return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup), this
			},
			update: function () {
				if (this._icon) {
					var t = this._map.latLngToLayerPoint(this._latlng).round();
					this._setPos(t)
				}
				return this
			},
			_initIcon: function () {
				var t = this.options,
					e = this._map,
					n = e.options.zoomAnimation && e.options.markerZoomAnimation,
					i = n ? "leaflet-zoom-animated" : "leaflet-zoom-hide",
					r = t.icon.createIcon(this._icon),
					a = !1;
				r !== this._icon && (this._icon && this._removeIcon(), a = !0, t.title && (r.title = t.title), t.alt && (r.alt = t.alt)), o.DomUtil.addClass(r, i), t.keyboard && (r.tabIndex = "0"), this._icon = r, this._initInteraction(), t.riseOnHover && o.DomEvent.on(r, "mouseover", this._bringToFront, this).on(r, "mouseout", this._resetZIndex, this);
				var s = t.icon.createShadow(this._shadow),
					l = !1;
				s !== this._shadow && (this._removeShadow(), l = !0), s && o.DomUtil.addClass(s, i), this._shadow = s, t.opacity < 1 && this._updateOpacity();
				var u = this._map._panes;
				a && u.markerPane.appendChild(this._icon), s && l && u.shadowPane.appendChild(this._shadow)
			},
			_removeIcon: function () {
				this.options.riseOnHover && o.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), this._map._panes.markerPane.removeChild(this._icon), this._icon = null
			},
			_removeShadow: function () {
				this._shadow && this._map._panes.shadowPane.removeChild(this._shadow), this._shadow = null
			},
			_setPos: function (t) {
				o.DomUtil.setPosition(this._icon, t), this._shadow && o.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
			},
			_updateZIndex: function (t) {
				this._icon.style.zIndex = this._zIndex + t
			},
			_animateZoom: function (t) {
				var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
				this._setPos(e)
			},
			_initInteraction: function () {
				if (this.options.clickable) {
					var t = this._icon,
						e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
					o.DomUtil.addClass(t, "leaflet-clickable"), o.DomEvent.on(t, "click", this._onMouseClick, this), o.DomEvent.on(t, "keypress", this._onKeyPress, this);
					for (var n = 0; n < e.length; n++) o.DomEvent.on(t, e[n], this._fireMouseEvent, this);
					o.Handler.MarkerDrag && (this.dragging = new o.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
				}
			},
			_onMouseClick: function (t) {
				var e = this.dragging && this.dragging.moved();
				(this.hasEventListeners(t.type) || e) && o.DomEvent.stopPropagation(t), e || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, {
					originalEvent: t,
					latlng: this._latlng
				})
			},
			_onKeyPress: function (t) {
				13 === t.keyCode && this.fire("click", {
					originalEvent: t,
					latlng: this._latlng
				})
			},
			_fireMouseEvent: function (t) {
				this.fire(t.type, {
					originalEvent: t,
					latlng: this._latlng
				}), "contextmenu" === t.type && this.hasEventListeners(t.type) && o.DomEvent.preventDefault(t), "mousedown" !== t.type ? o.DomEvent.stopPropagation(t) : o.DomEvent.preventDefault(t)
			},
			setOpacity: function (t) {
				return this.options.opacity = t, this._map && this._updateOpacity(), this
			},
			_updateOpacity: function () {
				o.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && o.DomUtil.setOpacity(this._shadow, this.options.opacity)
			},
			_bringToFront: function () {
				this._updateZIndex(this.options.riseOffset)
			},
			_resetZIndex: function () {
				this._updateZIndex(0)
			}
		}), o.marker = function (t, e) {
			return new o.Marker(t, e)
		}, o.DivIcon = o.Icon.extend({
			options: {
				iconSize: [12, 12],
				className: "leaflet-div-icon",
				html: !1
			},
			createIcon: function (t) {
				var n = t && "DIV" === t.tagName ? t : e.createElement("div"),
					i = this.options;
				return n.innerHTML = i.html !== !1 ? i.html : "", i.bgPos && (n.style.backgroundPosition = -i.bgPos.x + "px " + -i.bgPos.y + "px"), this._setIconStyles(n, "icon"), n
			},
			createShadow: function () {
				return null
			}
		}), o.divIcon = function (t) {
			return new o.DivIcon(t)
		}, o.Map.mergeOptions({
			closePopupOnClick: !0
		}), o.Popup = o.Class.extend({
			includes: o.Mixin.Events,
			options: {
				minWidth: 50,
				maxWidth: 300,
				autoPan: !0,
				closeButton: !0,
				offset: [0, 7],
				autoPanPadding: [5, 5],
				keepInView: !1,
				className: "",
				zoomAnimation: !0
			},
			initialize: function (t, e) {
				o.setOptions(this, t), this._source = e, this._animated = o.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1
			},
			onAdd: function (t) {
				this._map = t, this._container || this._initLayout();
				var e = t.options.fadeAnimation;
				e && o.DomUtil.setOpacity(this._container, 0), t._panes.popupPane.appendChild(this._container), t.on(this._getEvents(), this), this.update(), e && o.DomUtil.setOpacity(this._container, 1), this.fire("open"), t.fire("popupopen", {
					popup: this
				}), this._source && this._source.fire("popupopen", {
					popup: this
				})
			},
			addTo: function (t) {
				return t.addLayer(this), this
			},
			openOn: function (t) {
				return t.openPopup(this), this
			},
			onRemove: function (t) {
				t._panes.popupPane.removeChild(this._container), o.Util.falseFn(this._container.offsetWidth), t.off(this._getEvents(), this), t.options.fadeAnimation && o.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire("close"), t.fire("popupclose", {
					popup: this
				}), this._source && this._source.fire("popupclose", {
					popup: this
				})
			},
			getLatLng: function () {
				return this._latlng
			},
			setLatLng: function (t) {
				return this._latlng = o.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this
			},
			getContent: function () {
				return this._content
			},
			setContent: function (t) {
				return this._content = t, this.update(), this
			},
			update: function () {
				this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
			},
			_getEvents: function () {
				var t = {
					viewreset: this._updatePosition
				};
				return this._animated && (t.zoomanim = this._zoomAnimation), ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
			},
			_close: function () {
				this._map && this._map.closePopup(this)
			},
			_initLayout: function () {
				var t, e = "leaflet-popup",
					n = e + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"),
					i = this._container = o.DomUtil.create("div", n);
				this.options.closeButton && (t = this._closeButton = o.DomUtil.create("a", e + "-close-button", i), t.href = "#close", t.innerHTML = "&#215;", o.DomEvent.disableClickPropagation(t), o.DomEvent.on(t, "click", this._onCloseButtonClick, this));
				var r = this._wrapper = o.DomUtil.create("div", e + "-content-wrapper", i);
				o.DomEvent.disableClickPropagation(r), this._contentNode = o.DomUtil.create("div", e + "-content", r), o.DomEvent.disableScrollPropagation(this._contentNode), o.DomEvent.on(r, "contextmenu", o.DomEvent.stopPropagation), this._tipContainer = o.DomUtil.create("div", e + "-tip-container", i), this._tip = o.DomUtil.create("div", e + "-tip", this._tipContainer)
			},
			_updateContent: function () {
				if (this._content) {
					if ("string" == typeof this._content) this._contentNode.innerHTML = this._content;
					else {
						for (; this._contentNode.hasChildNodes();) this._contentNode.removeChild(this._contentNode.firstChild);
						this._contentNode.appendChild(this._content)
					}
					this.fire("contentupdate")
				}
			},
			_updateLayout: function () {
				var t = this._contentNode,
					e = t.style;
				e.width = "", e.whiteSpace = "nowrap";
				var n = t.offsetWidth;
				n = Math.min(n, this.options.maxWidth), n = Math.max(n, this.options.minWidth), e.width = n + 1 + "px", e.whiteSpace = "", e.height = "";
				var i = t.offsetHeight,
					r = this.options.maxHeight,
					a = "leaflet-popup-scrolled";
				r && i > r ? (e.height = r + "px", o.DomUtil.addClass(t, a)) : o.DomUtil.removeClass(t, a), this._containerWidth = this._container.offsetWidth
			},
			_updatePosition: function () {
				if (this._map) {
					var t = this._map.latLngToLayerPoint(this._latlng),
						e = this._animated,
						n = o.point(this.options.offset);
					e && o.DomUtil.setPosition(this._container, t), this._containerBottom = -n.y - (e ? 0 : t.y), this._containerLeft = -Math.round(this._containerWidth / 2) + n.x + (e ? 0 : t.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px"
				}
			},
			_zoomAnimation: function (t) {
				var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
				o.DomUtil.setPosition(this._container, e)
			},
			_adjustPan: function () {
				if (this.options.autoPan) {
					var t = this._map,
						e = this._container.offsetHeight,
						n = this._containerWidth,
						i = new o.Point(this._containerLeft, -e - this._containerBottom);
					this._animated && i._add(o.DomUtil.getPosition(this._container));
					var r = t.layerPointToContainerPoint(i),
						a = o.point(this.options.autoPanPadding),
						s = o.point(this.options.autoPanPaddingTopLeft || a),
						l = o.point(this.options.autoPanPaddingBottomRight || a),
						u = t.getSize(),
						c = 0,
						h = 0;
					r.x + n + l.x > u.x && (c = r.x + n - u.x + l.x), r.x - c - s.x < 0 && (c = r.x - s.x), r.y + e + l.y > u.y && (h = r.y + e - u.y + l.y), r.y - h - s.y < 0 && (h = r.y - s.y), (c || h) && t.fire("autopanstart").panBy([c, h])
				}
			},
			_onCloseButtonClick: function (t) {
				this._close(), o.DomEvent.stop(t)
			}
		}), o.popup = function (t, e) {
			return new o.Popup(t, e)
		}, o.Map.include({
			openPopup: function (t, e, n) {
				if (this.closePopup(), !(t instanceof o.Popup)) {
					var i = t;
					t = new o.Popup(n).setLatLng(e).setContent(i)
				}
				return t._isOpen = !0, this._popup = t, this.addLayer(t)
			},
			closePopup: function (t) {
				return t && t !== this._popup || (t = this._popup, this._popup = null), t && (this.removeLayer(t), t._isOpen = !1), this
			}
		}), o.Marker.include({
			openPopup: function () {
				return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this
			},
			closePopup: function () {
				return this._popup && this._popup._close(), this
			},
			togglePopup: function () {
				return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()), this
			},
			bindPopup: function (t, e) {
				var n = o.point(this.options.icon.options.popupAnchor || [0, 0]);
				return n = n.add(o.Popup.prototype.options.offset), e && e.offset && (n = n.add(e.offset)), e = o.extend({
					offset: n
				}, e), this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), this._popupHandlersAdded = !0), t instanceof o.Popup ? (o.setOptions(t, e), this._popup = t) : this._popup = new o.Popup(e, this).setContent(t), this
			},
			setPopupContent: function (t) {
				return this._popup && this._popup.setContent(t), this
			},
			unbindPopup: function () {
				return this._popup && (this._popup = null, this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this), this._popupHandlersAdded = !1), this
			},
			getPopup: function () {
				return this._popup
			},
			_movePopup: function (t) {
				this._popup.setLatLng(t.latlng)
			}
		}), o.LayerGroup = o.Class.extend({
			initialize: function (t) {
				this._layers = {};
				var e, n;
				if (t)
					for (e = 0, n = t.length; n > e; e++) this.addLayer(t[e])
			},
			addLayer: function (t) {
				var e = this.getLayerId(t);
				return this._layers[e] = t, this._map && this._map.addLayer(t), this
			},
			removeLayer: function (t) {
				var e = t in this._layers ? t : this.getLayerId(t);
				return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
			},
			hasLayer: function (t) {
				return t ? t in this._layers || this.getLayerId(t) in this._layers : !1
			},
			clearLayers: function () {
				return this.eachLayer(this.removeLayer, this), this
			},
			invoke: function (t) {
				var e, n, i = Array.prototype.slice.call(arguments, 1);
				for (e in this._layers) n = this._layers[e], n[t] && n[t].apply(n, i);
				return this
			},
			onAdd: function (t) {
				this._map = t, this.eachLayer(t.addLayer, t)
			},
			onRemove: function (t) {
				this.eachLayer(t.removeLayer, t), this._map = null
			},
			addTo: function (t) {
				return t.addLayer(this), this
			},
			eachLayer: function (t, e) {
				for (var n in this._layers) t.call(e, this._layers[n]);
				return this
			},
			getLayer: function (t) {
				return this._layers[t]
			},
			getLayers: function () {
				var t = [];
				for (var e in this._layers) t.push(this._layers[e]);
				return t
			},
			setZIndex: function (t) {
				return this.invoke("setZIndex", t)
			},
			getLayerId: function (t) {
				return o.stamp(t)
			}
		}), o.layerGroup = function (t) {
			return new o.LayerGroup(t)
		}, o.FeatureGroup = o.LayerGroup.extend({
			includes: o.Mixin.Events,
			statics: {
				EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"
			},
			addLayer: function (t) {
				return this.hasLayer(t) ? this : ("on" in t && t.on(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.addLayer.call(this, t), this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", {
					layer: t
				}))
			},
			removeLayer: function (t) {
				return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.off(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.removeLayer.call(this, t), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", {
					layer: t
				})) : this
			},
			bindPopup: function (t, e) {
				return this._popupContent = t, this._popupOptions = e, this.invoke("bindPopup", t, e)
			},
			openPopup: function (t) {
				for (var e in this._layers) {
					this._layers[e].openPopup(t);
					break
				}
				return this
			},
			setStyle: function (t) {
				return this.invoke("setStyle", t)
			},
			bringToFront: function () {
				return this.invoke("bringToFront")
			},
			bringToBack: function () {
				return this.invoke("bringToBack")
			},
			getBounds: function () {
				var t = new o.LatLngBounds;
				return this.eachLayer(function (e) {
					t.extend(e instanceof o.Marker ? e.getLatLng() : e.getBounds())
				}), t
			},
			_propagateEvent: function (t) {
				t = o.extend({
					layer: t.target,
					target: this
				}, t), this.fire(t.type, t)
			}
		}), o.featureGroup = function (t) {
			return new o.FeatureGroup(t)
		}, o.Path = o.Class.extend({
			includes: [o.Mixin.Events],
			statics: {
				CLIP_PADDING: function () {
					var e = o.Browser.mobile ? 1280 : 2e3,
						n = (e / Math.max(t.outerWidth, t.outerHeight) - 1) / 2;
					return Math.max(0, Math.min(.5, n))
				}()
			},
			options: {
				stroke: !0,
				color: "#0033ff",
				dashArray: null,
				lineCap: null,
				lineJoin: null,
				weight: 5,
				opacity: .5,
				fill: !1,
				fillColor: null,
				fillOpacity: .2,
				clickable: !0
			},
			initialize: function (t) {
				o.setOptions(this, t)
			},
			onAdd: function (t) {
				this._map = t, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), t.on({
					viewreset: this.projectLatlngs,
					moveend: this._updatePath
				}, this)
			},
			addTo: function (t) {
				return t.addLayer(this), this
			},
			onRemove: function (t) {
				t._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, o.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), t.off({
					viewreset: this.projectLatlngs,
					moveend: this._updatePath
				}, this)
			},
			projectLatlngs: function () {},
			setStyle: function (t) {
				return o.setOptions(this, t), this._container && this._updateStyle(), this
			},
			redraw: function () {
				return this._map && (this.projectLatlngs(), this._updatePath()), this
			}
		}), o.Map.include({
			_updatePathViewport: function () {
				var t = o.Path.CLIP_PADDING,
					e = this.getSize(),
					n = o.DomUtil.getPosition(this._mapPane),
					i = n.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),
					r = i.add(e.multiplyBy(1 + 2 * t)._round());
				this._pathViewport = new o.Bounds(i, r)
			}
		}), o.Path.SVG_NS = "http://www.w3.org/2000/svg", o.Browser.svg = !(!e.createElementNS || !e.createElementNS(o.Path.SVG_NS, "svg").createSVGRect), o.Path = o.Path.extend({
			statics: {
				SVG: o.Browser.svg
			},
			bringToFront: function () {
				var t = this._map._pathRoot,
					e = this._container;
				return e && t.lastChild !== e && t.appendChild(e), this
			},
			bringToBack: function () {
				var t = this._map._pathRoot,
					e = this._container,
					n = t.firstChild;
				return e && n !== e && t.insertBefore(e, n), this
			},
			getPathString: function () {},
			_createElement: function (t) {
				return e.createElementNS(o.Path.SVG_NS, t)
			},
			_initElements: function () {
				this._map._initPathRoot(), this._initPath(), this._initStyle()
			},
			_initPath: function () {
				this._container = this._createElement("g"), this._path = this._createElement("path"), this.options.className && o.DomUtil.addClass(this._path, this.options.className), this._container.appendChild(this._path)
			},
			_initStyle: function () {
				this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle()
			},
			_updateStyle: function () {
				this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"), this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap), this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
			},
			_updatePath: function () {
				var t = this.getPathString();
				t || (t = "M0 0"), this._path.setAttribute("d", t)
			},
			_initEvents: function () {
				if (this.options.clickable) {
					(o.Browser.svg || !o.Browser.vml) && o.DomUtil.addClass(this._path, "leaflet-clickable"), o.DomEvent.on(this._container, "click", this._onMouseClick, this);
					for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; e < t.length; e++) o.DomEvent.on(this._container, t[e], this._fireMouseEvent, this)
				}
			},
			_onMouseClick: function (t) {
				this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
			},
			_fireMouseEvent: function (t) {
				if (this.hasEventListeners(t.type)) {
					var e = this._map,
						n = e.mouseEventToContainerPoint(t),
						i = e.containerPointToLayerPoint(n),
						r = e.layerPointToLatLng(i);
					this.fire(t.type, {
						latlng: r,
						layerPoint: i,
						containerPoint: n,
						originalEvent: t
					}), "contextmenu" === t.type && o.DomEvent.preventDefault(t), "mousemove" !== t.type && o.DomEvent.stopPropagation(t)
				}
			}
		}), o.Map.include({
			_initPathRoot: function () {
				this._pathRoot || (this._pathRoot = o.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && o.Browser.any3d ? (o.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"), this.on({
					zoomanim: this._animatePathZoom,
					zoomend: this._endPathZoom
				})) : o.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport())
			},
			_animatePathZoom: function (t) {
				var e = this.getZoomScale(t.zoom),
					n = this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);
				this._pathRoot.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(n) + " scale(" + e + ") ", this._pathZooming = !0
			},
			_endPathZoom: function () {
				this._pathZooming = !1
			},
			_updateSvgViewport: function () {
				if (!this._pathZooming) {
					this._updatePathViewport();
					var t = this._pathViewport,
						e = t.min,
						n = t.max,
						i = n.x - e.x,
						r = n.y - e.y,
						a = this._pathRoot,
						s = this._panes.overlayPane;
					o.Browser.mobileWebkit && s.removeChild(a), o.DomUtil.setPosition(a, e), a.setAttribute("width", i), a.setAttribute("height", r), a.setAttribute("viewBox", [e.x, e.y, i, r].join(" ")), o.Browser.mobileWebkit && s.appendChild(a)
				}
			}
		}), o.Path.include({
			bindPopup: function (t, e) {
				return t instanceof o.Popup ? this._popup = t : ((!this._popup || e) && (this._popup = new o.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0), this
			},
			unbindPopup: function () {
				return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1), this
			},
			openPopup: function (t) {
				return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({
					latlng: t
				})), this
			},
			closePopup: function () {
				return this._popup && this._popup._close(), this
			},
			_openPopup: function (t) {
				this._popup.setLatLng(t.latlng), this._map.openPopup(this._popup)
			}
		}), o.Browser.vml = !o.Browser.svg && function () {
			try {
				var t = e.createElement("div");
				t.innerHTML = '<v:shape adj="1"/>';
				var n = t.firstChild;
				return n.style.behavior = "url(#default#VML)", n && "object" == typeof n.adj
			} catch (i) {
				return !1
			}
		}(), o.Path = o.Browser.svg || !o.Browser.vml ? o.Path : o.Path.extend({
			statics: {
				VML: !0,
				CLIP_PADDING: .02
			},
			_createElement: function () {
				try {
					return e.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
						function (t) {
							return e.createElement("<lvml:" + t + ' class="lvml">')
						}
				} catch (t) {
					return function (t) {
						return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
					}
				}
			}(),
			_initPath: function () {
				var t = this._container = this._createElement("shape");
				o.DomUtil.addClass(t, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")), this.options.clickable && o.DomUtil.addClass(t, "leaflet-clickable"), t.coordsize = "1 1", this._path = this._createElement("path"), t.appendChild(this._path), this._map._pathRoot.appendChild(t)
			},
			_initStyle: function () {
				this._updateStyle()
			},
			_updateStyle: function () {
				var t = this._stroke,
					e = this._fill,
					n = this.options,
					i = this._container;
				i.stroked = n.stroke, i.filled = n.fill, n.stroke ? (t || (t = this._stroke = this._createElement("stroke"), t.endcap = "round", i.appendChild(t)), t.weight = n.weight + "px", t.color = n.color, t.opacity = n.opacity, t.dashStyle = n.dashArray ? o.Util.isArray(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : "", n.lineCap && (t.endcap = n.lineCap.replace("butt", "flat")), n.lineJoin && (t.joinstyle = n.lineJoin)) : t && (i.removeChild(t), this._stroke = null), n.fill ? (e || (e = this._fill = this._createElement("fill"), i.appendChild(e)), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (i.removeChild(e), this._fill = null)
			},
			_updatePath: function () {
				var t = this._container.style;
				t.display = "none", this._path.v = this.getPathString() + " ", t.display = ""
			}
		}), o.Map.include(o.Browser.svg || !o.Browser.vml ? {} : {
			_initPathRoot: function () {
				if (!this._pathRoot) {
					var t = this._pathRoot = e.createElement("div");
					t.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(t), this.on("moveend", this._updatePathViewport), this._updatePathViewport()
				}
			}
		}), o.Browser.canvas = function () {
			return !!e.createElement("canvas").getContext
		}(), o.Path = o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? o.Path : o.Path.extend({
			statics: {
				CANVAS: !0,
				SVG: !1
			},
			redraw: function () {
				return this._map && (this.projectLatlngs(), this._requestUpdate()), this
			},
			setStyle: function (t) {
				return o.setOptions(this, t), this._map && (this._updateStyle(), this._requestUpdate()), this
			},
			onRemove: function (t) {
				t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable && (this._map.off("click", this._onClick, this), this._map.off("mousemove", this._onMouseMove, this)), this._requestUpdate(), this.fire("remove"), this._map = null
			},
			_requestUpdate: function () {
				this._map && !o.Path._updateRequest && (o.Path._updateRequest = o.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
			},
			_fireMapMoveEnd: function () {
				o.Path._updateRequest = null, this.fire("moveend")
			},
			_initElements: function () {
				this._map._initPathRoot(), this._ctx = this._map._canvasCtx
			},
			_updateStyle: function () {
				var t = this.options;
				t.stroke && (this._ctx.lineWidth = t.weight, this._ctx.strokeStyle = t.color), t.fill && (this._ctx.fillStyle = t.fillColor || t.color)
			},
			_drawPath: function () {
				var t, e, n, i, r, a;
				for (this._ctx.beginPath(), t = 0, n = this._parts.length; n > t; t++) {
					for (e = 0, i = this._parts[t].length; i > e; e++) r = this._parts[t][e], a = (0 === e ? "move" : "line") + "To", this._ctx[a](r.x, r.y);
					this instanceof o.Polygon && this._ctx.closePath()
				}
			},
			_checkIfEmpty: function () {
				return !this._parts.length
			},
			_updatePath: function () {
				if (!this._checkIfEmpty()) {
					var t = this._ctx,
						e = this.options;
					this._drawPath(), t.save(), this._updateStyle(), e.fill && (t.globalAlpha = e.fillOpacity, t.fill()), e.stroke && (t.globalAlpha = e.opacity, t.stroke()), t.restore()
				}
			},
			_initEvents: function () {
				this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onClick, this))
			},
			_onClick: function (t) {
				this._containsPoint(t.layerPoint) && this.fire("click", t)
			},
			_onMouseMove: function (t) {
				this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside = !0, this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside = !1, this.fire("mouseout", t)))
			}
		}), o.Map.include(o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? {} : {
			_initPathRoot: function () {
				var t, n = this._pathRoot;
				n || (n = this._pathRoot = e.createElement("canvas"), n.style.position = "absolute", t = this._canvasCtx = n.getContext("2d"), t.lineCap = "round", t.lineJoin = "round", this._panes.overlayPane.appendChild(n), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport())
			},
			_updateCanvasViewport: function () {
				if (!this._pathZooming) {
					this._updatePathViewport();
					var t = this._pathViewport,
						e = t.min,
						n = t.max.subtract(e),
						i = this._pathRoot;
					o.DomUtil.setPosition(i, e), i.width = n.x, i.height = n.y, i.getContext("2d").translate(-e.x, -e.y)
				}
			}
		}), o.LineUtil = {
			simplify: function (t, e) {
				if (!e || !t.length) return t.slice();
				var n = e * e;
				return t = this._reducePoints(t, n), t = this._simplifyDP(t, n)
			},
			pointToSegmentDistance: function (t, e, n) {
				return Math.sqrt(this._sqClosestPointOnSegment(t, e, n, !0))
			},
			closestPointOnSegment: function (t, e, n) {
				return this._sqClosestPointOnSegment(t, e, n)
			},
			_simplifyDP: function (t, e) {
				var i = t.length,
					o = typeof Uint8Array != n + "" ? Uint8Array : Array,
					r = new o(i);
				r[0] = r[i - 1] = 1, this._simplifyDPStep(t, r, e, 0, i - 1);
				var a, s = [];
				for (a = 0; i > a; a++) r[a] && s.push(t[a]);
				return s
			},
			_simplifyDPStep: function (t, e, n, i, o) {
				var r, a, s, l = 0;
				for (a = i + 1; o - 1 >= a; a++) s = this._sqClosestPointOnSegment(t[a], t[i], t[o], !0), s > l && (r = a, l = s);
				l > n && (e[r] = 1, this._simplifyDPStep(t, e, n, i, r), this._simplifyDPStep(t, e, n, r, o))
			},
			_reducePoints: function (t, e) {
				for (var n = [t[0]], i = 1, o = 0, r = t.length; r > i; i++) this._sqDist(t[i], t[o]) > e && (n.push(t[i]), o = i);
				return r - 1 > o && n.push(t[r - 1]), n
			},
			clipSegment: function (t, e, n, i) {
				var o, r, a, s = i ? this._lastCode : this._getBitCode(t, n),
					l = this._getBitCode(e, n);
				for (this._lastCode = l;;) {
					if (!(s | l)) return [t, e];
					if (s & l) return !1;
					o = s || l, r = this._getEdgeIntersection(t, e, o, n), a = this._getBitCode(r, n), o === s ? (t = r, s = a) : (e = r, l = a)
				}
			},
			_getEdgeIntersection: function (t, e, n, i) {
				var r = e.x - t.x,
					a = e.y - t.y,
					s = i.min,
					l = i.max;
				return 8 & n ? new o.Point(t.x + r * (l.y - t.y) / a, l.y) : 4 & n ? new o.Point(t.x + r * (s.y - t.y) / a, s.y) : 2 & n ? new o.Point(l.x, t.y + a * (l.x - t.x) / r) : 1 & n ? new o.Point(s.x, t.y + a * (s.x - t.x) / r) : void 0
			},
			_getBitCode: function (t, e) {
				var n = 0;
				return t.x < e.min.x ? n |= 1 : t.x > e.max.x && (n |= 2), t.y < e.min.y ? n |= 4 : t.y > e.max.y && (n |= 8), n
			},
			_sqDist: function (t, e) {
				var n = e.x - t.x,
					i = e.y - t.y;
				return n * n + i * i
			},
			_sqClosestPointOnSegment: function (t, e, n, i) {
				var r, a = e.x,
					s = e.y,
					l = n.x - a,
					u = n.y - s,
					c = l * l + u * u;
				return c > 0 && (r = ((t.x - a) * l + (t.y - s) * u) / c, r > 1 ? (a = n.x, s = n.y) : r > 0 && (a += l * r, s += u * r)), l = t.x - a, u = t.y - s, i ? l * l + u * u : new o.Point(a, s)
			}
		}, o.Polyline = o.Path.extend({
			initialize: function (t, e) {
				o.Path.prototype.initialize.call(this, e), this._latlngs = this._convertLatLngs(t)
			},
			options: {
				smoothFactor: 1,
				noClip: !1
			},
			projectLatlngs: function () {
				this._originalPoints = [];
				for (var t = 0, e = this._latlngs.length; e > t; t++) this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t])
			},
			getPathString: function () {
				for (var t = 0, e = this._parts.length, n = ""; e > t; t++) n += this._getPathPartStr(this._parts[t]);
				return n
			},
			getLatLngs: function () {
				return this._latlngs
			},
			setLatLngs: function (t) {
				return this._latlngs = this._convertLatLngs(t), this.redraw()
			},
			addLatLng: function (t) {
				return this._latlngs.push(o.latLng(t)), this.redraw()
			},
			spliceLatLngs: function () {
				var t = [].splice.apply(this._latlngs, arguments);
				return this._convertLatLngs(this._latlngs, !0), this.redraw(), t
			},
			closestLayerPoint: function (t) {
				for (var e, n, i = 1 / 0, r = this._parts, a = null, s = 0, l = r.length; l > s; s++)
					for (var u = r[s], c = 1, h = u.length; h > c; c++) {
						e = u[c - 1], n = u[c];
						var p = o.LineUtil._sqClosestPointOnSegment(t, e, n, !0);
						i > p && (i = p, a = o.LineUtil._sqClosestPointOnSegment(t, e, n))
					}
				return a && (a.distance = Math.sqrt(i)), a
			},
			getBounds: function () {
				return new o.LatLngBounds(this.getLatLngs())
			},
			_convertLatLngs: function (t, e) {
				var n, i, r = e ? t : [];
				for (n = 0, i = t.length; i > n; n++) {
					if (o.Util.isArray(t[n]) && "number" != typeof t[n][0]) return;
					r[n] = o.latLng(t[n])
				}
				return r
			},
			_initEvents: function () {
				o.Path.prototype._initEvents.call(this)
			},
			_getPathPartStr: function (t) {
				for (var e, n = o.Path.VML, i = 0, r = t.length, a = ""; r > i; i++) e = t[i], n && e._round(), a += (i ? "L" : "M") + e.x + " " + e.y;
				return a
			},
			_clipPoints: function () {
				var t, e, n, i = this._originalPoints,
					r = i.length;
				if (this.options.noClip) return this._parts = [i], void 0;
				this._parts = [];
				var a = this._parts,
					s = this._map._pathViewport,
					l = o.LineUtil;
				for (t = 0, e = 0; r - 1 > t; t++) n = l.clipSegment(i[t], i[t + 1], s, t), n && (a[e] = a[e] || [], a[e].push(n[0]), (n[1] !== i[t + 1] || t === r - 2) && (a[e].push(n[1]), e++))
			},
			_simplifyPoints: function () {
				for (var t = this._parts, e = o.LineUtil, n = 0, i = t.length; i > n; n++) t[n] = e.simplify(t[n], this.options.smoothFactor)
			},
			_updatePath: function () {
				this._map && (this._clipPoints(), this._simplifyPoints(), o.Path.prototype._updatePath.call(this))
			}
		}), o.polyline = function (t, e) {
			return new o.Polyline(t, e)
		}, o.PolyUtil = {}, o.PolyUtil.clipPolygon = function (t, e) {
			var n, i, r, a, s, l, u, c, h, p = [1, 4, 2, 8],
				d = o.LineUtil;
			for (i = 0, u = t.length; u > i; i++) t[i]._code = d._getBitCode(t[i], e);
			for (a = 0; 4 > a; a++) {
				for (c = p[a], n = [], i = 0, u = t.length, r = u - 1; u > i; r = i++) s = t[i], l = t[r], s._code & c ? l._code & c || (h = d._getEdgeIntersection(l, s, c, e), h._code = d._getBitCode(h, e), n.push(h)) : (l._code & c && (h = d._getEdgeIntersection(l, s, c, e), h._code = d._getBitCode(h, e), n.push(h)), n.push(s));
				t = n
			}
			return t
		}, o.Polygon = o.Polyline.extend({
			options: {
				fill: !0
			},
			initialize: function (t, e) {
				o.Polyline.prototype.initialize.call(this, t, e), this._initWithHoles(t)
			},
			_initWithHoles: function (t) {
				var e, n, i;
				if (t && o.Util.isArray(t[0]) && "number" != typeof t[0][0])
					for (this._latlngs = this._convertLatLngs(t[0]), this._holes = t.slice(1), e = 0, n = this._holes.length; n > e; e++) i = this._holes[e] = this._convertLatLngs(this._holes[e]), i[0].equals(i[i.length - 1]) && i.pop();
				t = this._latlngs, t.length >= 2 && t[0].equals(t[t.length - 1]) && t.pop()
			},
			projectLatlngs: function () {
				if (o.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
					var t, e, n, i;
					for (t = 0, n = this._holes.length; n > t; t++)
						for (this._holePoints[t] = [], e = 0, i = this._holes[t].length; i > e; e++) this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e])
				}
			},
			setLatLngs: function (t) {
				return t && o.Util.isArray(t[0]) && "number" != typeof t[0][0] ? (this._initWithHoles(t), this.redraw()) : o.Polyline.prototype.setLatLngs.call(this, t)
			},
			_clipPoints: function () {
				var t = this._originalPoints,
					e = [];
				if (this._parts = [t].concat(this._holePoints), !this.options.noClip) {
					for (var n = 0, i = this._parts.length; i > n; n++) {
						var r = o.PolyUtil.clipPolygon(this._parts[n], this._map._pathViewport);
						r.length && e.push(r)
					}
					this._parts = e
				}
			},
			_getPathPartStr: function (t) {
				var e = o.Polyline.prototype._getPathPartStr.call(this, t);
				return e + (o.Browser.svg ? "z" : "x")
			}
		}), o.polygon = function (t, e) {
			return new o.Polygon(t, e)
		},
		function () {
			function t(t) {
				return o.FeatureGroup.extend({
					initialize: function (t, e) {
						this._layers = {}, this._options = e, this.setLatLngs(t)
					},
					setLatLngs: function (e) {
						var n = 0,
							i = e.length;
						for (this.eachLayer(function (t) {
								i > n ? t.setLatLngs(e[n++]) : this.removeLayer(t)
							}, this); i > n;) this.addLayer(new t(e[n++], this._options));
						return this
					},
					getLatLngs: function () {
						var t = [];
						return this.eachLayer(function (e) {
							t.push(e.getLatLngs())
						}), t
					}
				})
			}
			o.MultiPolyline = t(o.Polyline), o.MultiPolygon = t(o.Polygon), o.multiPolyline = function (t, e) {
				return new o.MultiPolyline(t, e)
			}, o.multiPolygon = function (t, e) {
				return new o.MultiPolygon(t, e)
			}
		}(), o.Rectangle = o.Polygon.extend({
			initialize: function (t, e) {
				o.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
			},
			setBounds: function (t) {
				this.setLatLngs(this._boundsToLatLngs(t))
			},
			_boundsToLatLngs: function (t) {
				return t = o.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
			}
		}), o.rectangle = function (t, e) {
			return new o.Rectangle(t, e)
		}, o.Circle = o.Path.extend({
			initialize: function (t, e, n) {
				o.Path.prototype.initialize.call(this, n), this._latlng = o.latLng(t), this._mRadius = e
			},
			options: {
				fill: !0
			},
			setLatLng: function (t) {
				return this._latlng = o.latLng(t), this.redraw()
			},
			setRadius: function (t) {
				return this._mRadius = t, this.redraw()
			},
			projectLatlngs: function () {
				var t = this._getLngRadius(),
					e = this._latlng,
					n = this._map.latLngToLayerPoint([e.lat, e.lng - t]);
				this._point = this._map.latLngToLayerPoint(e), this._radius = Math.max(this._point.x - n.x, 1)
			},
			getBounds: function () {
				var t = this._getLngRadius(),
					e = this._mRadius / 40075017 * 360,
					n = this._latlng;
				return new o.LatLngBounds([n.lat - e, n.lng - t], [n.lat + e, n.lng + t])
			},
			getLatLng: function () {
				return this._latlng
			},
			getPathString: function () {
				var t = this._point,
					e = this._radius;
				return this._checkIfEmpty() ? "" : o.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," + (t.x - .1) + "," + (t.y - e) + " z" : (t._round(), e = Math.round(e), "AL " + t.x + "," + t.y + " " + e + "," + e + " 0,23592600")
			},
			getRadius: function () {
				return this._mRadius
			},
			_getLatRadius: function () {
				return this._mRadius / 40075017 * 360
			},
			_getLngRadius: function () {
				return this._getLatRadius() / Math.cos(o.LatLng.DEG_TO_RAD * this._latlng.lat)
			},
			_checkIfEmpty: function () {
				if (!this._map) return !1;
				var t = this._map._pathViewport,
					e = this._radius,
					n = this._point;
				return n.x - e > t.max.x || n.y - e > t.max.y || n.x + e < t.min.x || n.y + e < t.min.y
			}
		}), o.circle = function (t, e, n) {
			return new o.Circle(t, e, n)
		}, o.CircleMarker = o.Circle.extend({
			options: {
				radius: 10,
				weight: 2
			},
			initialize: function (t, e) {
				o.Circle.prototype.initialize.call(this, t, null, e), this._radius = this.options.radius
			},
			projectLatlngs: function () {
				this._point = this._map.latLngToLayerPoint(this._latlng)
			},
			_updateStyle: function () {
				o.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius)
			},
			setLatLng: function (t) {
				return o.Circle.prototype.setLatLng.call(this, t), this._popup && this._popup._isOpen && this._popup.setLatLng(t), this
			},
			setRadius: function (t) {
				return this.options.radius = this._radius = t, this.redraw()
			},
			getRadius: function () {
				return this._radius
			}
		}), o.circleMarker = function (t, e) {
			return new o.CircleMarker(t, e)
		}, o.Polyline.include(o.Path.CANVAS ? {
			_containsPoint: function (t, e) {
				var n, i, r, a, s, l, u, c = this.options.weight / 2;
				for (o.Browser.touch && (c += 10), n = 0, a = this._parts.length; a > n; n++)
					for (u = this._parts[n], i = 0, s = u.length, r = s - 1; s > i; r = i++)
						if ((e || 0 !== i) && (l = o.LineUtil.pointToSegmentDistance(t, u[r], u[i]), c >= l)) return !0;
				return !1
			}
		} : {}), o.Polygon.include(o.Path.CANVAS ? {
			_containsPoint: function (t) {
				var e, n, i, r, a, s, l, u, c = !1;
				if (o.Polyline.prototype._containsPoint.call(this, t, !0)) return !0;
				for (r = 0, l = this._parts.length; l > r; r++)
					for (e = this._parts[r], a = 0, u = e.length, s = u - 1; u > a; s = a++) n = e[a], i = e[s], n.y > t.y != i.y > t.y && t.x < (i.x - n.x) * (t.y - n.y) / (i.y - n.y) + n.x && (c = !c);
				return c
			}
		} : {}), o.Circle.include(o.Path.CANVAS ? {
			_drawPath: function () {
				var t = this._point;
				this._ctx.beginPath(), this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1)
			},
			_containsPoint: function (t) {
				var e = this._point,
					n = this.options.stroke ? this.options.weight / 2 : 0;
				return t.distanceTo(e) <= this._radius + n
			}
		} : {}), o.CircleMarker.include(o.Path.CANVAS ? {
			_updateStyle: function () {
				o.Path.prototype._updateStyle.call(this)
			}
		} : {}), o.GeoJSON = o.FeatureGroup.extend({
			initialize: function (t, e) {
				o.setOptions(this, e), this._layers = {}, t && this.addData(t)
			},
			addData: function (t) {
				var e, n, i, r = o.Util.isArray(t) ? t : t.features;
				if (r) {
					for (e = 0, n = r.length; n > e; e++) i = r[e], (i.geometries || i.geometry || i.features || i.coordinates) && this.addData(r[e]);
					return this
				}
				var a = this.options;
				if (!a.filter || a.filter(t)) {
					var s = o.GeoJSON.geometryToLayer(t, a.pointToLayer, a.coordsToLatLng, a);
					return s.feature = o.GeoJSON.asFeature(t), s.defaultOptions = s.options, this.resetStyle(s), a.onEachFeature && a.onEachFeature(t, s), this.addLayer(s)
				}
			},
			resetStyle: function (t) {
				var e = this.options.style;
				e && (o.Util.extend(t.options, t.defaultOptions), this._setLayerStyle(t, e))
			},
			setStyle: function (t) {
				this.eachLayer(function (e) {
					this._setLayerStyle(e, t)
				}, this)
			},
			_setLayerStyle: function (t, e) {
				"function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
			}
		}), o.extend(o.GeoJSON, {
			geometryToLayer: function (t, e, n, i) {
				var r, a, s, l, u = "Feature" === t.type ? t.geometry : t,
					c = u.coordinates,
					h = [];
				switch (n = n || this.coordsToLatLng, u.type) {
				case "Point":
					return r = n(c), e ? e(t, r) : new o.Marker(r);
				case "MultiPoint":
					for (s = 0, l = c.length; l > s; s++) r = n(c[s]), h.push(e ? e(t, r) : new o.Marker(r));
					return new o.FeatureGroup(h);
				case "LineString":
					return a = this.coordsToLatLngs(c, 0, n), new o.Polyline(a, i);
				case "Polygon":
					if (2 === c.length && !c[1].length) throw new Error("Invalid GeoJSON object.");
					return a = this.coordsToLatLngs(c, 1, n), new o.Polygon(a, i);
				case "MultiLineString":
					return a = this.coordsToLatLngs(c, 1, n), new o.MultiPolyline(a, i);
				case "MultiPolygon":
					return a = this.coordsToLatLngs(c, 2, n), new o.MultiPolygon(a, i);
				case "GeometryCollection":
					for (s = 0, l = u.geometries.length; l > s; s++) h.push(this.geometryToLayer({
						geometry: u.geometries[s],
						type: "Feature",
						properties: t.properties
					}, e, n, i));
					return new o.FeatureGroup(h);
				default:
					throw new Error("Invalid GeoJSON object.")
				}
			},
			coordsToLatLng: function (t) {
				return new o.LatLng(t[1], t[0], t[2])
			},
			coordsToLatLngs: function (t, e, n) {
				var i, o, r, a = [];
				for (o = 0, r = t.length; r > o; o++) i = e ? this.coordsToLatLngs(t[o], e - 1, n) : (n || this.coordsToLatLng)(t[o]), a.push(i);
				return a
			},
			latLngToCoords: function (t) {
				var e = [t.lng, t.lat];
				return t.alt !== n && e.push(t.alt), e
			},
			latLngsToCoords: function (t) {
				for (var e = [], n = 0, i = t.length; i > n; n++) e.push(o.GeoJSON.latLngToCoords(t[n]));
				return e
			},
			getFeature: function (t, e) {
				return t.feature ? o.extend({}, t.feature, {
					geometry: e
				}) : o.GeoJSON.asFeature(e)
			},
			asFeature: function (t) {
				return "Feature" === t.type ? t : {
					type: "Feature",
					properties: {},
					geometry: t
				}
			}
		});
	var a = {
		toGeoJSON: function () {
			return o.GeoJSON.getFeature(this, {
				type: "Point",
				coordinates: o.GeoJSON.latLngToCoords(this.getLatLng())
			})
		}
	};
	o.Marker.include(a), o.Circle.include(a), o.CircleMarker.include(a), o.Polyline.include({
			toGeoJSON: function () {
				return o.GeoJSON.getFeature(this, {
					type: "LineString",
					coordinates: o.GeoJSON.latLngsToCoords(this.getLatLngs())
				})
			}
		}), o.Polygon.include({
			toGeoJSON: function () {
				var t, e, n, i = [o.GeoJSON.latLngsToCoords(this.getLatLngs())];
				if (i[0].push(i[0][0]), this._holes)
					for (t = 0, e = this._holes.length; e > t; t++) n = o.GeoJSON.latLngsToCoords(this._holes[t]), n.push(n[0]), i.push(n);
				return o.GeoJSON.getFeature(this, {
					type: "Polygon",
					coordinates: i
				})
			}
		}),
		function () {
			function t(t) {
				return function () {
					var e = [];
					return this.eachLayer(function (t) {
						e.push(t.toGeoJSON().geometry.coordinates)
					}), o.GeoJSON.getFeature(this, {
						type: t,
						coordinates: e
					})
				}
			}
			o.MultiPolyline.include({
				toGeoJSON: t("MultiLineString")
			}), o.MultiPolygon.include({
				toGeoJSON: t("MultiPolygon")
			}), o.LayerGroup.include({
				toGeoJSON: function () {
					var e, n = this.feature && this.feature.geometry,
						i = [];
					if (n && "MultiPoint" === n.type) return t("MultiPoint").call(this);
					var r = n && "GeometryCollection" === n.type;
					return this.eachLayer(function (t) {
						t.toGeoJSON && (e = t.toGeoJSON(), i.push(r ? e.geometry : o.GeoJSON.asFeature(e)))
					}), r ? o.GeoJSON.getFeature(this, {
						geometries: i,
						type: "GeometryCollection"
					}) : {
						type: "FeatureCollection",
						features: i
					}
				}
			})
		}(), o.geoJson = function (t, e) {
			return new o.GeoJSON(t, e)
		}, o.DomEvent = {
			addListener: function (t, e, n, i) {
				var r, a, s, l = o.stamp(n),
					u = "_leaflet_" + e + l;
				return t[u] ? this : (r = function (e) {
					return n.call(i || t, e || o.DomEvent._getEvent())
				}, o.Browser.pointer && 0 === e.indexOf("touch") ? this.addPointerListener(t, e, r, l) : (o.Browser.touch && "dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, r, l), "addEventListener" in t ? "mousewheel" === e ? (t.addEventListener("DOMMouseScroll", r, !1), t.addEventListener(e, r, !1)) : "mouseenter" === e || "mouseleave" === e ? (a = r, s = "mouseenter" === e ? "mouseover" : "mouseout", r = function (e) {
					return o.DomEvent._checkMouse(t, e) ? a(e) : void 0
				}, t.addEventListener(s, r, !1)) : "click" === e && o.Browser.android ? (a = r, r = function (t) {
					return o.DomEvent._filterClick(t, a)
				}, t.addEventListener(e, r, !1)) : t.addEventListener(e, r, !1) : "attachEvent" in t && t.attachEvent("on" + e, r), t[u] = r, this))
			},
			removeListener: function (t, e, n) {
				var i = o.stamp(n),
					r = "_leaflet_" + e + i,
					a = t[r];
				return a ? (o.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, i) : o.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, i) : "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", a, !1), t.removeEventListener(e, a, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", a, !1) : t.removeEventListener(e, a, !1) : "detachEvent" in t && t.detachEvent("on" + e, a), t[r] = null, this) : this
			},
			stopPropagation: function (t) {
				return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, o.DomEvent._skipped(t), this
			},
			disableScrollPropagation: function (t) {
				var e = o.DomEvent.stopPropagation;
				return o.DomEvent.on(t, "mousewheel", e).on(t, "MozMousePixelScroll", e)
			},
			disableClickPropagation: function (t) {
				for (var e = o.DomEvent.stopPropagation, n = o.Draggable.START.length - 1; n >= 0; n--) o.DomEvent.on(t, o.Draggable.START[n], e);
				return o.DomEvent.on(t, "click", o.DomEvent._fakeStop).on(t, "dblclick", e)
			},
			preventDefault: function (t) {
				return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
			},
			stop: function (t) {
				return o.DomEvent.preventDefault(t).stopPropagation(t)
			},
			getMousePosition: function (t, e) {
				if (!e) return new o.Point(t.clientX, t.clientY);
				var n = e.getBoundingClientRect();
				return new o.Point(t.clientX - n.left - e.clientLeft, t.clientY - n.top - e.clientTop)
			},
			getWheelDelta: function (t) {
				var e = 0;
				return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e
			},
			_skipEvents: {},
			_fakeStop: function (t) {
				o.DomEvent._skipEvents[t.type] = !0
			},
			_skipped: function (t) {
				var e = this._skipEvents[t.type];
				return this._skipEvents[t.type] = !1, e
			},
			_checkMouse: function (t, e) {
				var n = e.relatedTarget;
				if (!n) return !0;
				try {
					for (; n && n !== t;) n = n.parentNode
				} catch (i) {
					return !1
				}
				return n !== t
			},
			_getEvent: function () {
				var e = t.event;
				if (!e)
					for (var n = arguments.callee.caller; n && (e = n.arguments[0], !e || t.Event !== e.constructor);) n = n.caller;
				return e
			},
			_filterClick: function (t, e) {
				var n = t.timeStamp || t.originalEvent.timeStamp,
					i = o.DomEvent._lastClick && n - o.DomEvent._lastClick;
				return i && i > 100 && 500 > i || t.target._simulatedClick && !t._simulated ? (o.DomEvent.stop(t), void 0) : (o.DomEvent._lastClick = n, e(t))
			}
		}, o.DomEvent.on = o.DomEvent.addListener, o.DomEvent.off = o.DomEvent.removeListener, o.Draggable = o.Class.extend({
			includes: o.Mixin.Events,
			statics: {
				START: o.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
				END: {
					mousedown: "mouseup",
					touchstart: "touchend",
					pointerdown: "touchend",
					MSPointerDown: "touchend"
				},
				MOVE: {
					mousedown: "mousemove",
					touchstart: "touchmove",
					pointerdown: "touchmove",
					MSPointerDown: "touchmove"
				}
			},
			initialize: function (t, e) {
				this._element = t, this._dragStartTarget = e || t
			},
			enable: function () {
				if (!this._enabled) {
					for (var t = o.Draggable.START.length - 1; t >= 0; t--) o.DomEvent.on(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
					this._enabled = !0
				}
			},
			disable: function () {
				if (this._enabled) {
					for (var t = o.Draggable.START.length - 1; t >= 0; t--) o.DomEvent.off(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
					this._enabled = !1, this._moved = !1
				}
			},
			_onDown: function (t) {
				if (this._moved = !1, !(t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (o.DomEvent.stopPropagation(t), o.Draggable._disabled || (o.DomUtil.disableImageDrag(), o.DomUtil.disableTextSelection(), this._moving)))) {
					var n = t.touches ? t.touches[0] : t;
					this._startPoint = new o.Point(n.clientX, n.clientY), this._startPos = this._newPos = o.DomUtil.getPosition(this._element), o.DomEvent.on(e, o.Draggable.MOVE[t.type], this._onMove, this).on(e, o.Draggable.END[t.type], this._onUp, this)
				}
			},
			_onMove: function (t) {
				if (t.touches && t.touches.length > 1) return this._moved = !0, void 0;
				var n = t.touches && 1 === t.touches.length ? t.touches[0] : t,
					i = new o.Point(n.clientX, n.clientY),
					r = i.subtract(this._startPoint);
				(r.x || r.y) && (o.Browser.touch && Math.abs(r.x) + Math.abs(r.y) < 3 || (o.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = o.DomUtil.getPosition(this._element).subtract(r), o.DomUtil.addClass(e.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, o.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(r), this._moving = !0, o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget)))
			},
			_updatePosition: function () {
				this.fire("predrag"), o.DomUtil.setPosition(this._element, this._newPos), this.fire("drag")
			},
			_onUp: function () {
				o.DomUtil.removeClass(e.body, "leaflet-dragging"), this._lastTarget && (o.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
				for (var t in o.Draggable.MOVE) o.DomEvent.off(e, o.Draggable.MOVE[t], this._onMove).off(e, o.Draggable.END[t], this._onUp);
				o.DomUtil.enableImageDrag(), o.DomUtil.enableTextSelection(), this._moved && this._moving && (o.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
					distance: this._newPos.distanceTo(this._startPos)
				})), this._moving = !1
			}
		}), o.Handler = o.Class.extend({
			initialize: function (t) {
				this._map = t
			},
			enable: function () {
				this._enabled || (this._enabled = !0, this.addHooks())
			},
			disable: function () {
				this._enabled && (this._enabled = !1, this.removeHooks())
			},
			enabled: function () {
				return !!this._enabled
			}
		}), o.Map.mergeOptions({
			dragging: !0,
			inertia: !o.Browser.android23,
			inertiaDeceleration: 3400,
			inertiaMaxSpeed: 1 / 0,
			inertiaThreshold: o.Browser.touch ? 32 : 18,
			easeLinearity: .25,
			worldCopyJump: !1
		}), o.Map.Drag = o.Handler.extend({
			addHooks: function () {
				if (!this._draggable) {
					var t = this._map;
					this._draggable = new o.Draggable(t._mapPane, t._container), this._draggable.on({
						dragstart: this._onDragStart,
						drag: this._onDrag,
						dragend: this._onDragEnd
					}, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), t.on("viewreset", this._onViewReset, this), t.whenReady(this._onViewReset, this))
				}
				this._draggable.enable()
			},
			removeHooks: function () {
				this._draggable.disable()
			},
			moved: function () {
				return this._draggable && this._draggable._moved
			},
			_onDragStart: function () {
				var t = this._map;
				t._panAnim && t._panAnim.stop(), t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
			},
			_onDrag: function () {
				if (this._map.options.inertia) {
					var t = this._lastTime = +new Date,
						e = this._lastPos = this._draggable._newPos;
					this._positions.push(e), this._times.push(t), t - this._times[0] > 200 && (this._positions.shift(), this._times.shift())
				}
				this._map.fire("move").fire("drag")
			},
			_onViewReset: function () {
				var t = this._map.getSize()._divideBy(2),
					e = this._map.latLngToLayerPoint([0, 0]);
				this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.project([0, 180]).x
			},
			_onPreDrag: function () {
				var t = this._worldWidth,
					e = Math.round(t / 2),
					n = this._initialWorldOffset,
					i = this._draggable._newPos.x,
					o = (i - e + n) % t + e - n,
					r = (i + e + n) % t - e - n,
					a = Math.abs(o + n) < Math.abs(r + n) ? o : r;
				this._draggable._newPos.x = a
			},
			_onDragEnd: function (t) {
				var e = this._map,
					n = e.options,
					i = +new Date - this._lastTime,
					r = !n.inertia || i > n.inertiaThreshold || !this._positions[0];
				if (e.fire("dragend", t), r) e.fire("moveend");
				else {
					var a = this._lastPos.subtract(this._positions[0]),
						s = (this._lastTime + i - this._times[0]) / 1e3,
						l = n.easeLinearity,
						u = a.multiplyBy(l / s),
						c = u.distanceTo([0, 0]),
						h = Math.min(n.inertiaMaxSpeed, c),
						p = u.multiplyBy(h / c),
						d = h / (n.inertiaDeceleration * l),
						f = p.multiplyBy(-d / 2).round();
					f.x && f.y ? (f = e._limitOffset(f, e.options.maxBounds), o.Util.requestAnimFrame(function () {
						e.panBy(f, {
							duration: d,
							easeLinearity: l,
							noMoveStart: !0
						})
					})) : e.fire("moveend")
				}
			}
		}), o.Map.addInitHook("addHandler", "dragging", o.Map.Drag), o.Map.mergeOptions({
			doubleClickZoom: !0
		}), o.Map.DoubleClickZoom = o.Handler.extend({
			addHooks: function () {
				this._map.on("dblclick", this._onDoubleClick, this)
			},
			removeHooks: function () {
				this._map.off("dblclick", this._onDoubleClick, this)
			},
			_onDoubleClick: function (t) {
				var e = this._map,
					n = e.getZoom() + (t.originalEvent.shiftKey ? -1 : 1);
				"center" === e.options.doubleClickZoom ? e.setZoom(n) : e.setZoomAround(t.containerPoint, n)
			}
		}), o.Map.addInitHook("addHandler", "doubleClickZoom", o.Map.DoubleClickZoom), o.Map.mergeOptions({
			scrollWheelZoom: !0
		}), o.Map.ScrollWheelZoom = o.Handler.extend({
			addHooks: function () {
				o.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), o.DomEvent.on(this._map._container, "MozMousePixelScroll", o.DomEvent.preventDefault), this._delta = 0
			},
			removeHooks: function () {
				o.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll), o.DomEvent.off(this._map._container, "MozMousePixelScroll", o.DomEvent.preventDefault)
			},
			_onWheelScroll: function (t) {
				var e = o.DomEvent.getWheelDelta(t);
				this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
				var n = Math.max(40 - (+new Date - this._startTime), 0);
				clearTimeout(this._timer), this._timer = setTimeout(o.bind(this._performZoom, this), n), o.DomEvent.preventDefault(t), o.DomEvent.stopPropagation(t)
			},
			_performZoom: function () {
				var t = this._map,
					e = this._delta,
					n = t.getZoom();
				e = e > 0 ? Math.ceil(e) : Math.floor(e), e = Math.max(Math.min(e, 4), -4), e = t._limitZoom(n + e) - n, this._delta = 0, this._startTime = null, e && ("center" === t.options.scrollWheelZoom ? t.setZoom(n + e) : t.setZoomAround(this._lastMousePos, n + e))
			}
		}), o.Map.addInitHook("addHandler", "scrollWheelZoom", o.Map.ScrollWheelZoom), o.extend(o.DomEvent, {
			_touchstart: o.Browser.msPointer ? "MSPointerDown" : o.Browser.pointer ? "pointerdown" : "touchstart",
			_touchend: o.Browser.msPointer ? "MSPointerUp" : o.Browser.pointer ? "pointerup" : "touchend",
			addDoubleTapListener: function (t, n, i) {
				function r(t) {
					var e;
					if (o.Browser.pointer ? (f.push(t.pointerId), e = f.length) : e = t.touches.length, !(e > 1)) {
						var n = Date.now(),
							i = n - (s || n);
						l = t.touches ? t.touches[0] : t, u = i > 0 && c >= i, s = n
					}
				}

				function a(t) {
					if (o.Browser.pointer) {
						var e = f.indexOf(t.pointerId);
						if (-1 === e) return;
						f.splice(e, 1)
					}
					if (u) {
						if (o.Browser.pointer) {
							var i, r = {};
							for (var a in l) i = l[a], r[a] = "function" == typeof i ? i.bind(l) : i;
							l = r
						}
						l.type = "dblclick", n(l), s = null
					}
				}
				var s, l, u = !1,
					c = 250,
					h = "_leaflet_",
					p = this._touchstart,
					d = this._touchend,
					f = [];
				t[h + p + i] = r, t[h + d + i] = a;
				var m = o.Browser.pointer ? e.documentElement : t;
				return t.addEventListener(p, r, !1), m.addEventListener(d, a, !1), o.Browser.pointer && m.addEventListener(o.DomEvent.POINTER_CANCEL, a, !1), this
			},
			removeDoubleTapListener: function (t, n) {
				var i = "_leaflet_";
				return t.removeEventListener(this._touchstart, t[i + this._touchstart + n], !1), (o.Browser.pointer ? e.documentElement : t).removeEventListener(this._touchend, t[i + this._touchend + n], !1), o.Browser.pointer && e.documentElement.removeEventListener(o.DomEvent.POINTER_CANCEL, t[i + this._touchend + n], !1), this
			}
		}), o.extend(o.DomEvent, {
			POINTER_DOWN: o.Browser.msPointer ? "MSPointerDown" : "pointerdown",
			POINTER_MOVE: o.Browser.msPointer ? "MSPointerMove" : "pointermove",
			POINTER_UP: o.Browser.msPointer ? "MSPointerUp" : "pointerup",
			POINTER_CANCEL: o.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
			_pointers: [],
			_pointerDocumentListener: !1,
			addPointerListener: function (t, e, n, i) {
				switch (e) {
				case "touchstart":
					return this.addPointerListenerStart(t, e, n, i);
				case "touchend":
					return this.addPointerListenerEnd(t, e, n, i);
				case "touchmove":
					return this.addPointerListenerMove(t, e, n, i);
				default:
					throw "Unknown touch event type"
				}
			},
			addPointerListenerStart: function (t, n, i, r) {
				var a = "_leaflet_",
					s = this._pointers,
					l = function (t) {
						o.DomEvent.preventDefault(t);
						for (var e = !1, n = 0; n < s.length; n++)
							if (s[n].pointerId === t.pointerId) {
								e = !0;
								break
							}
						e || s.push(t), t.touches = s.slice(), t.changedTouches = [t], i(t)
					};
				if (t[a + "touchstart" + r] = l, t.addEventListener(this.POINTER_DOWN, l, !1), !this._pointerDocumentListener) {
					var u = function (t) {
						for (var e = 0; e < s.length; e++)
							if (s[e].pointerId === t.pointerId) {
								s.splice(e, 1);
								break
							}
					};
					e.documentElement.addEventListener(this.POINTER_UP, u, !1), e.documentElement.addEventListener(this.POINTER_CANCEL, u, !1), this._pointerDocumentListener = !0
				}
				return this
			},
			addPointerListenerMove: function (t, e, n, i) {
				function o(t) {
					if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) {
						for (var e = 0; e < a.length; e++)
							if (a[e].pointerId === t.pointerId) {
								a[e] = t;
								break
							}
						t.touches = a.slice(), t.changedTouches = [t], n(t)
					}
				}
				var r = "_leaflet_",
					a = this._pointers;
				return t[r + "touchmove" + i] = o, t.addEventListener(this.POINTER_MOVE, o, !1), this
			},
			addPointerListenerEnd: function (t, e, n, i) {
				var o = "_leaflet_",
					r = this._pointers,
					a = function (t) {
						for (var e = 0; e < r.length; e++)
							if (r[e].pointerId === t.pointerId) {
								r.splice(e, 1);
								break
							}
						t.touches = r.slice(), t.changedTouches = [t], n(t)
					};
				return t[o + "touchend" + i] = a, t.addEventListener(this.POINTER_UP, a, !1), t.addEventListener(this.POINTER_CANCEL, a, !1), this
			},
			removePointerListener: function (t, e, n) {
				var i = "_leaflet_",
					o = t[i + e + n];
				switch (e) {
				case "touchstart":
					t.removeEventListener(this.POINTER_DOWN, o, !1);
					break;
				case "touchmove":
					t.removeEventListener(this.POINTER_MOVE, o, !1);
					break;
				case "touchend":
					t.removeEventListener(this.POINTER_UP, o, !1), t.removeEventListener(this.POINTER_CANCEL, o, !1)
				}
				return this
			}
		}), o.Map.mergeOptions({
			touchZoom: o.Browser.touch && !o.Browser.android23,
			bounceAtZoomLimits: !0
		}), o.Map.TouchZoom = o.Handler.extend({
			addHooks: function () {
				o.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
			},
			removeHooks: function () {
				o.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
			},
			_onTouchStart: function (t) {
				var n = this._map;
				if (t.touches && 2 === t.touches.length && !n._animatingZoom && !this._zooming) {
					var i = n.mouseEventToLayerPoint(t.touches[0]),
						r = n.mouseEventToLayerPoint(t.touches[1]),
						a = n._getCenterLayerPoint();
					this._startCenter = i.add(r)._divideBy(2), this._startDist = i.distanceTo(r), this._moved = !1, this._zooming = !0, this._centerOffset = a.subtract(this._startCenter), n._panAnim && n._panAnim.stop(), o.DomEvent.on(e, "touchmove", this._onTouchMove, this).on(e, "touchend", this._onTouchEnd, this), o.DomEvent.preventDefault(t)
				}
			},
			_onTouchMove: function (t) {
				var e = this._map;
				if (t.touches && 2 === t.touches.length && this._zooming) {
					var n = e.mouseEventToLayerPoint(t.touches[0]),
						i = e.mouseEventToLayerPoint(t.touches[1]);
					this._scale = n.distanceTo(i) / this._startDist, this._delta = n._add(i)._divideBy(2)._subtract(this._startCenter), 1 !== this._scale && (e.options.bounceAtZoomLimits || !(e.getZoom() === e.getMinZoom() && this._scale < 1 || e.getZoom() === e.getMaxZoom() && this._scale > 1)) && (this._moved || (o.DomUtil.addClass(e._mapPane, "leaflet-touching"), e.fire("movestart").fire("zoomstart"), this._moved = !0), o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), o.DomEvent.preventDefault(t))
				}
			},
			_updateOnMove: function () {
				var t = this._map,
					e = this._getScaleOrigin(),
					n = t.layerPointToLatLng(e),
					i = t.getScaleZoom(this._scale);
				t._animateZoom(n, i, this._startCenter, this._scale, this._delta, !1, !0)
			},
			_onTouchEnd: function () {
				if (!this._moved || !this._zooming) return this._zooming = !1, void 0;
				var t = this._map;
				this._zooming = !1, o.DomUtil.removeClass(t._mapPane, "leaflet-touching"), o.Util.cancelAnimFrame(this._animRequest), o.DomEvent.off(e, "touchmove", this._onTouchMove).off(e, "touchend", this._onTouchEnd);
				var n = this._getScaleOrigin(),
					i = t.layerPointToLatLng(n),
					r = t.getZoom(),
					a = t.getScaleZoom(this._scale) - r,
					s = a > 0 ? Math.ceil(a) : Math.floor(a),
					l = t._limitZoom(r + s),
					u = t.getZoomScale(l) / this._scale;
				t._animateZoom(i, l, n, u)
			},
			_getScaleOrigin: function () {
				var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);
				return this._startCenter.add(t)
			}
		}), o.Map.addInitHook("addHandler", "touchZoom", o.Map.TouchZoom), o.Map.mergeOptions({
			tap: !0,
			tapTolerance: 15
		}), o.Map.Tap = o.Handler.extend({
			addHooks: function () {
				o.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
			},
			removeHooks: function () {
				o.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
			},
			_onDown: function (t) {
				if (t.touches) {
					if (o.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, clearTimeout(this._holdTimeout), void 0;
					var n = t.touches[0],
						i = n.target;
					this._startPos = this._newPos = new o.Point(n.clientX, n.clientY), i.tagName && "a" === i.tagName.toLowerCase() && o.DomUtil.addClass(i, "leaflet-active"), this._holdTimeout = setTimeout(o.bind(function () {
						this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", n))
					}, this), 1e3), o.DomEvent.on(e, "touchmove", this._onMove, this).on(e, "touchend", this._onUp, this)
				}
			},
			_onUp: function (t) {
				if (clearTimeout(this._holdTimeout), o.DomEvent.off(e, "touchmove", this._onMove, this).off(e, "touchend", this._onUp, this), this._fireClick && t && t.changedTouches) {
					var n = t.changedTouches[0],
						i = n.target;
					i && i.tagName && "a" === i.tagName.toLowerCase() && o.DomUtil.removeClass(i, "leaflet-active"), this._isTapValid() && this._simulateEvent("click", n)
				}
			},
			_isTapValid: function () {
				return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
			},
			_onMove: function (t) {
				var e = t.touches[0];
				this._newPos = new o.Point(e.clientX, e.clientY)
			},
			_simulateEvent: function (n, i) {
				var o = e.createEvent("MouseEvents");
				o._simulated = !0, i.target._simulatedClick = !0, o.initMouseEvent(n, !0, !0, t, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(o)
			}
		}), o.Browser.touch && !o.Browser.pointer && o.Map.addInitHook("addHandler", "tap", o.Map.Tap), o.Map.mergeOptions({
			boxZoom: !0
		}), o.Map.BoxZoom = o.Handler.extend({
			initialize: function (t) {
				this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._moved = !1
			},
			addHooks: function () {
				o.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
			},
			removeHooks: function () {
				o.DomEvent.off(this._container, "mousedown", this._onMouseDown), this._moved = !1
			},
			moved: function () {
				return this._moved
			},
			_onMouseDown: function (t) {
				return this._moved = !1, !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (o.DomUtil.disableTextSelection(), o.DomUtil.disableImageDrag(), this._startLayerPoint = this._map.mouseEventToLayerPoint(t), o.DomEvent.on(e, "mousemove", this._onMouseMove, this).on(e, "mouseup", this._onMouseUp, this).on(e, "keydown", this._onKeyDown, this), void 0)
			},
			_onMouseMove: function (t) {
				this._moved || (this._box = o.DomUtil.create("div", "leaflet-zoom-box", this._pane), o.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", this._map.fire("boxzoomstart"));
				var e = this._startLayerPoint,
					n = this._box,
					i = this._map.mouseEventToLayerPoint(t),
					r = i.subtract(e),
					a = new o.Point(Math.min(i.x, e.x), Math.min(i.y, e.y));
				o.DomUtil.setPosition(n, a), this._moved = !0, n.style.width = Math.max(0, Math.abs(r.x) - 4) + "px", n.style.height = Math.max(0, Math.abs(r.y) - 4) + "px"
			},
			_finish: function () {
				this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ""), o.DomUtil.enableTextSelection(), o.DomUtil.enableImageDrag(), o.DomEvent.off(e, "mousemove", this._onMouseMove).off(e, "mouseup", this._onMouseUp).off(e, "keydown", this._onKeyDown)
			},
			_onMouseUp: function (t) {
				this._finish();
				var e = this._map,
					n = e.mouseEventToLayerPoint(t);
				if (!this._startLayerPoint.equals(n)) {
					var i = new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint), e.layerPointToLatLng(n));
					e.fitBounds(i), e.fire("boxzoomend", {
						boxZoomBounds: i
					})
				}
			},
			_onKeyDown: function (t) {
				27 === t.keyCode && this._finish()
			}
		}), o.Map.addInitHook("addHandler", "boxZoom", o.Map.BoxZoom), o.Map.mergeOptions({
			keyboard: !0,
			keyboardPanOffset: 80,
			keyboardZoomOffset: 1
		}), o.Map.Keyboard = o.Handler.extend({
			keyCodes: {
				left: [37],
				right: [39],
				down: [40],
				up: [38],
				zoomIn: [187, 107, 61, 171],
				zoomOut: [189, 109, 173]
			},
			initialize: function (t) {
				this._map = t, this._setPanOffset(t.options.keyboardPanOffset), this._setZoomOffset(t.options.keyboardZoomOffset)
			},
			addHooks: function () {
				var t = this._map._container; - 1 === t.tabIndex && (t.tabIndex = "0"), o.DomEvent.on(t, "focus", this._onFocus, this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
			},
			removeHooks: function () {
				this._removeHooks();
				var t = this._map._container;
				o.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
			},
			_onMouseDown: function () {
				if (!this._focused) {
					var n = e.body,
						i = e.documentElement,
						o = n.scrollTop || i.scrollTop,
						r = n.scrollLeft || i.scrollLeft;
					this._map._container.focus(), t.scrollTo(r, o)
				}
			},
			_onFocus: function () {
				this._focused = !0, this._map.fire("focus")
			},
			_onBlur: function () {
				this._focused = !1, this._map.fire("blur")
			},
			_setPanOffset: function (t) {
				var e, n, i = this._panKeys = {},
					o = this.keyCodes;
				for (e = 0, n = o.left.length; n > e; e++) i[o.left[e]] = [-1 * t, 0];
				for (e = 0, n = o.right.length; n > e; e++) i[o.right[e]] = [t, 0];
				for (e = 0, n = o.down.length; n > e; e++) i[o.down[e]] = [0, t];
				for (e = 0, n = o.up.length; n > e; e++) i[o.up[e]] = [0, -1 * t]
			},
			_setZoomOffset: function (t) {
				var e, n, i = this._zoomKeys = {},
					o = this.keyCodes;
				for (e = 0, n = o.zoomIn.length; n > e; e++) i[o.zoomIn[e]] = t;
				for (e = 0, n = o.zoomOut.length; n > e; e++) i[o.zoomOut[e]] = -t
			},
			_addHooks: function () {
				o.DomEvent.on(e, "keydown", this._onKeyDown, this)
			},
			_removeHooks: function () {
				o.DomEvent.off(e, "keydown", this._onKeyDown, this)
			},
			_onKeyDown: function (t) {
				var e = t.keyCode,
					n = this._map;
				if (e in this._panKeys) {
					if (n._panAnim && n._panAnim._inProgress) return;
					n.panBy(this._panKeys[e]), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds)
				} else {
					if (!(e in this._zoomKeys)) return;
					n.setZoom(n.getZoom() + this._zoomKeys[e])
				}
				o.DomEvent.stop(t)
			}
		}), o.Map.addInitHook("addHandler", "keyboard", o.Map.Keyboard), o.Handler.MarkerDrag = o.Handler.extend({
			initialize: function (t) {
				this._marker = t
			},
			addHooks: function () {
				var t = this._marker._icon;
				this._draggable || (this._draggable = new o.Draggable(t, t)), this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable(), o.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable")
			},
			removeHooks: function () {
				this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this), this._draggable.disable(), o.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
			},
			moved: function () {
				return this._draggable && this._draggable._moved
			},
			_onDragStart: function () {
				this._marker.closePopup().fire("movestart").fire("dragstart")
			},
			_onDrag: function () {
				var t = this._marker,
					e = t._shadow,
					n = o.DomUtil.getPosition(t._icon),
					i = t._map.layerPointToLatLng(n);
				e && o.DomUtil.setPosition(e, n), t._latlng = i, t.fire("move", {
					latlng: i
				}).fire("drag")
			},
			_onDragEnd: function (t) {
				this._marker.fire("moveend").fire("dragend", t)
			}
		}), o.Control = o.Class.extend({
			options: {
				position: "topright"
			},
			initialize: function (t) {
				o.setOptions(this, t)
			},
			getPosition: function () {
				return this.options.position
			},
			setPosition: function (t) {
				var e = this._map;
				return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
			},
			getContainer: function () {
				return this._container
			},
			addTo: function (t) {
				this._map = t;
				var e = this._container = this.onAdd(t),
					n = this.getPosition(),
					i = t._controlCorners[n];
				return o.DomUtil.addClass(e, "leaflet-control"), -1 !== n.indexOf("bottom") ? i.insertBefore(e, i.firstChild) : i.appendChild(e), this
			},
			removeFrom: function (t) {
				var e = this.getPosition(),
					n = t._controlCorners[e];
				return n.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(t), this
			},
			_refocusOnMap: function () {
				this._map && this._map.getContainer().focus()
			}
		}), o.control = function (t) {
			return new o.Control(t)
		}, o.Map.include({
			addControl: function (t) {
				return t.addTo(this), this
			},
			removeControl: function (t) {
				return t.removeFrom(this), this
			},
			_initControlPos: function () {
				function t(t, r) {
					var a = n + t + " " + n + r;
					e[t + r] = o.DomUtil.create("div", a, i)
				}
				var e = this._controlCorners = {},
					n = "leaflet-",
					i = this._controlContainer = o.DomUtil.create("div", n + "control-container", this._container);
				t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
			},
			_clearControlPos: function () {
				this._container.removeChild(this._controlContainer)
			}
		}), o.Control.Zoom = o.Control.extend({
			options: {
				position: "topleft",
				zoomInText: "+",
				zoomInTitle: "Zoom in",
				zoomOutText: "-",
				zoomOutTitle: "Zoom out"
			},
			onAdd: function (t) {
				var e = "leaflet-control-zoom",
					n = o.DomUtil.create("div", e + " leaflet-bar");
				return this._map = t, this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, e + "-in", n, this._zoomIn, this), this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, e + "-out", n, this._zoomOut, this), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), n
			},
			onRemove: function (t) {
				t.off("zoomend zoomlevelschange", this._updateDisabled, this)
			},
			_zoomIn: function (t) {
				this._map.zoomIn(t.shiftKey ? 3 : 1)
			},
			_zoomOut: function (t) {
				this._map.zoomOut(t.shiftKey ? 3 : 1)
			},
			_createButton: function (t, e, n, i, r, a) {
				var s = o.DomUtil.create("a", n, i);
				s.innerHTML = t, s.href = "#", s.title = e;
				var l = o.DomEvent.stopPropagation;
				return o.DomEvent.on(s, "click", l).on(s, "mousedown", l).on(s, "dblclick", l).on(s, "click", o.DomEvent.preventDefault).on(s, "click", r, a).on(s, "click", this._refocusOnMap, a), s
			},
			_updateDisabled: function () {
				var t = this._map,
					e = "leaflet-disabled";
				o.DomUtil.removeClass(this._zoomInButton, e), o.DomUtil.removeClass(this._zoomOutButton, e), t._zoom === t.getMinZoom() && o.DomUtil.addClass(this._zoomOutButton, e), t._zoom === t.getMaxZoom() && o.DomUtil.addClass(this._zoomInButton, e)
			}
		}), o.Map.mergeOptions({
			zoomControl: !0
		}), o.Map.addInitHook(function () {
			this.options.zoomControl && (this.zoomControl = new o.Control.Zoom, this.addControl(this.zoomControl))
		}), o.control.zoom = function (t) {
			return new o.Control.Zoom(t)
		}, o.Control.Attribution = o.Control.extend({
			options: {
				position: "bottomright",
				prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
			},
			initialize: function (t) {
				o.setOptions(this, t), this._attributions = {}
			},
			onAdd: function (t) {
				this._container = o.DomUtil.create("div", "leaflet-control-attribution"), o.DomEvent.disableClickPropagation(this._container);
				for (var e in t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
				return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container
			},
			onRemove: function (t) {
				t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
			},
			setPrefix: function (t) {
				return this.options.prefix = t, this._update(), this
			},
			addAttribution: function (t) {
				return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : void 0
			},
			removeAttribution: function (t) {
				return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : void 0
			},
			_update: function () {
				if (this._map) {
					var t = [];
					for (var e in this._attributions) this._attributions[e] && t.push(e);
					var n = [];
					this.options.prefix && n.push(this.options.prefix), t.length && n.push(t.join(", ")), this._container.innerHTML = n.join(" | ")
				}
			},
			_onLayerAdd: function (t) {
				t.layer.getAttribution && this.addAttribution(t.layer.getAttribution())
			},
			_onLayerRemove: function (t) {
				t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution())
			}
		}), o.Map.mergeOptions({
			attributionControl: !0
		}), o.Map.addInitHook(function () {
			this.options.attributionControl && (this.attributionControl = (new o.Control.Attribution).addTo(this))
		}), o.control.attribution = function (t) {
			return new o.Control.Attribution(t)
		}, o.Control.Scale = o.Control.extend({
			options: {
				position: "bottomleft",
				maxWidth: 100,
				metric: !0,
				imperial: !0,
				updateWhenIdle: !1
			},
			onAdd: function (t) {
				this._map = t;
				var e = "leaflet-control-scale",
					n = o.DomUtil.create("div", e),
					i = this.options;
				return this._addScales(i, e, n), t.on(i.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), n
			},
			onRemove: function (t) {
				t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
			},
			_addScales: function (t, e, n) {
				t.metric && (this._mScale = o.DomUtil.create("div", e + "-line", n)), t.imperial && (this._iScale = o.DomUtil.create("div", e + "-line", n))
			},
			_update: function () {
				var t = this._map.getBounds(),
					e = t.getCenter().lat,
					n = 6378137 * Math.PI * Math.cos(e * Math.PI / 180),
					i = n * (t.getNorthEast().lng - t.getSouthWest().lng) / 180,
					o = this._map.getSize(),
					r = this.options,
					a = 0;
				o.x > 0 && (a = i * (r.maxWidth / o.x)), this._updateScales(r, a)
			},
			_updateScales: function (t, e) {
				t.metric && e && this._updateMetric(e), t.imperial && e && this._updateImperial(e)
			},
			_updateMetric: function (t) {
				var e = this._getRoundNum(t);
				this._mScale.style.width = this._getScaleWidth(e / t) + "px", this._mScale.innerHTML = 1e3 > e ? e + " m" : e / 1e3 + " km"
			},
			_updateImperial: function (t) {
				var e, n, i, o = 3.2808399 * t,
					r = this._iScale;
				o > 5280 ? (e = o / 5280, n = this._getRoundNum(e), r.style.width = this._getScaleWidth(n / e) + "px", r.innerHTML = n + " mi") : (i = this._getRoundNum(o), r.style.width = this._getScaleWidth(i / o) + "px", r.innerHTML = i + " ft")
			},
			_getScaleWidth: function (t) {
				return Math.round(this.options.maxWidth * t) - 10
			},
			_getRoundNum: function (t) {
				var e = Math.pow(10, (Math.floor(t) + "").length - 1),
					n = t / e;
				return n = n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1, e * n
			}
		}), o.control.scale = function (t) {
			return new o.Control.Scale(t)
		}, o.Control.Layers = o.Control.extend({
			options: {
				collapsed: !0,
				position: "topright",
				autoZIndex: !0
			},
			initialize: function (t, e, n) {
				o.setOptions(this, n), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1;
				for (var i in t) this._addLayer(t[i], i);
				for (i in e) this._addLayer(e[i], i, !0)
			},
			onAdd: function (t) {
				return this._initLayout(), this._update(), t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this), this._container
			},
			onRemove: function (t) {
				t.off("layeradd", this._onLayerChange, this).off("layerremove", this._onLayerChange, this)
			},
			addBaseLayer: function (t, e) {
				return this._addLayer(t, e), this._update(), this
			},
			addOverlay: function (t, e) {
				return this._addLayer(t, e, !0), this._update(), this
			},
			removeLayer: function (t) {
				var e = o.stamp(t);
				return delete this._layers[e], this._update(), this
			},
			_initLayout: function () {
				var t = "leaflet-control-layers",
					e = this._container = o.DomUtil.create("div", t);
				e.setAttribute("aria-haspopup", !0), o.Browser.touch ? o.DomEvent.on(e, "click", o.DomEvent.stopPropagation) : o.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);
				var n = this._form = o.DomUtil.create("form", t + "-list");
				if (this.options.collapsed) {
					o.Browser.android || o.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);
					var i = this._layersLink = o.DomUtil.create("a", t + "-toggle", e);
					i.href = "#", i.title = "Layers", o.Browser.touch ? o.DomEvent.on(i, "click", o.DomEvent.stop).on(i, "click", this._expand, this) : o.DomEvent.on(i, "focus", this._expand, this), o.DomEvent.on(n, "click", function () {
						setTimeout(o.bind(this._onInputClick, this), 0)
					}, this), this._map.on("click", this._collapse, this)
				} else this._expand();
				this._baseLayersList = o.DomUtil.create("div", t + "-base", n), this._separator = o.DomUtil.create("div", t + "-separator", n), this._overlaysList = o.DomUtil.create("div", t + "-overlays", n), e.appendChild(n)
			},
			_addLayer: function (t, e, n) {
				var i = o.stamp(t);
				this._layers[i] = {
					layer: t,
					name: e,
					overlay: n
				}, this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
			},
			_update: function () {
				if (this._container) {
					this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
					var t, e, n = !1,
						i = !1;
					for (t in this._layers) e = this._layers[t], this._addItem(e), i = i || e.overlay, n = n || !e.overlay;
					this._separator.style.display = i && n ? "" : "none"
				}
			},
			_onLayerChange: function (t) {
				var e = this._layers[o.stamp(t.layer)];
				if (e) {
					this._handlingClick || this._update();
					var n = e.overlay ? "layeradd" === t.type ? "overlayadd" : "overlayremove" : "layeradd" === t.type ? "baselayerchange" : null;
					n && this._map.fire(n, e)
				}
			},
			_createRadioElement: function (t, n) {
				var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
				n && (i += ' checked="checked"'), i += "/>";
				var o = e.createElement("div");
				return o.innerHTML = i, o.firstChild
			},
			_addItem: function (t) {
				var n, i = e.createElement("label"),
					r = this._map.hasLayer(t.layer);
				t.overlay ? (n = e.createElement("input"), n.type = "checkbox", n.className = "leaflet-control-layers-selector", n.defaultChecked = r) : n = this._createRadioElement("leaflet-base-layers", r), n.layerId = o.stamp(t.layer), o.DomEvent.on(n, "click", this._onInputClick, this);
				var a = e.createElement("span");
				a.innerHTML = " " + t.name, i.appendChild(n), i.appendChild(a);
				var s = t.overlay ? this._overlaysList : this._baseLayersList;
				return s.appendChild(i), i
			},
			_onInputClick: function () {
				var t, e, n, i = this._form.getElementsByTagName("input"),
					o = i.length;
				for (this._handlingClick = !0, t = 0; o > t; t++) e = i[t], n = this._layers[e.layerId], e.checked && !this._map.hasLayer(n.layer) ? this._map.addLayer(n.layer) : !e.checked && this._map.hasLayer(n.layer) && this._map.removeLayer(n.layer);
				this._handlingClick = !1, this._refocusOnMap()
			},
			_expand: function () {
				o.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
			},
			_collapse: function () {
				this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
			}
		}), o.control.layers = function (t, e, n) {
			return new o.Control.Layers(t, e, n)
		}, o.PosAnimation = o.Class.extend({
			includes: o.Mixin.Events,
			run: function (t, e, n, i) {
				this.stop(), this._el = t, this._inProgress = !0, this._newPos = e, this.fire("start"), t.style[o.DomUtil.TRANSITION] = "all " + (n || .25) + "s cubic-bezier(0,0," + (i || .5) + ",1)", o.DomEvent.on(t, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this), o.DomUtil.setPosition(t, e), o.Util.falseFn(t.offsetWidth), this._stepTimer = setInterval(o.bind(this._onStep, this), 50)
			},
			stop: function () {
				this._inProgress && (o.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), o.Util.falseFn(this._el.offsetWidth))
			},
			_onStep: function () {
				var t = this._getPos();
				return t ? (this._el._leaflet_pos = t, this.fire("step"), void 0) : (this._onTransitionEnd(), void 0)
			},
			_transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
			_getPos: function () {
				var e, n, i, r = this._el,
					a = t.getComputedStyle(r);
				if (o.Browser.any3d) {
					if (i = a[o.DomUtil.TRANSFORM].match(this._transformRe), !i) return;
					e = parseFloat(i[1]), n = parseFloat(i[2])
				} else e = parseFloat(a.left), n = parseFloat(a.top);
				return new o.Point(e, n, !0)
			},
			_onTransitionEnd: function () {
				o.DomEvent.off(this._el, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress = !1, this._el.style[o.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire("step").fire("end"))
			}
		}), o.Map.include({
			setView: function (t, e, i) {
				if (e = e === n ? this._zoom : this._limitZoom(e), t = this._limitCenter(o.latLng(t), e, this.options.maxBounds), i = i || {}, this._panAnim && this._panAnim.stop(), this._loaded && !i.reset && i !== !0) {
					i.animate !== n && (i.zoom = o.extend({
						animate: i.animate
					}, i.zoom), i.pan = o.extend({
						animate: i.animate
					}, i.pan));
					var r = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
					if (r) return clearTimeout(this._sizeTimer), this
				}
				return this._resetView(t, e), this
			},
			panBy: function (t, e) {
				if (t = o.point(t).round(), e = e || {}, !t.x && !t.y) return this;
				if (this._panAnim || (this._panAnim = new o.PosAnimation, this._panAnim.on({
						step: this._onPanTransitionStep,
						end: this._onPanTransitionEnd
					}, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
					o.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
					var n = this._getMapPanePos().subtract(t);
					this._panAnim.run(this._mapPane, n, e.duration || .25, e.easeLinearity)
				} else this._rawPanBy(t), this.fire("move").fire("moveend");
				return this
			},
			_onPanTransitionStep: function () {
				this.fire("move")
			},
			_onPanTransitionEnd: function () {
				o.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
			},
			_tryAnimatedPan: function (t, e) {
				var n = this._getCenterOffset(t)._floor();
				return (e && e.animate) === !0 || this.getSize().contains(n) ? (this.panBy(n, e), !0) : !1
			}
		}), o.PosAnimation = o.DomUtil.TRANSITION ? o.PosAnimation : o.PosAnimation.extend({
			run: function (t, e, n, i) {
				this.stop(), this._el = t, this._inProgress = !0, this._duration = n || .25, this._easeOutPower = 1 / Math.max(i || .5, .2), this._startPos = o.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
			},
			stop: function () {
				this._inProgress && (this._step(), this._complete())
			},
			_animate: function () {
				this._animId = o.Util.requestAnimFrame(this._animate, this), this._step()
			},
			_step: function () {
				var t = +new Date - this._startTime,
					e = 1e3 * this._duration;
				e > t ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1), this._complete())
			},
			_runFrame: function (t) {
				var e = this._startPos.add(this._offset.multiplyBy(t));
				o.DomUtil.setPosition(this._el, e), this.fire("step")
			},
			_complete: function () {
				o.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
			},
			_easeOut: function (t) {
				return 1 - Math.pow(1 - t, this._easeOutPower)
			}
		}), o.Map.mergeOptions({
			zoomAnimation: !0,
			zoomAnimationThreshold: 4
		}), o.DomUtil.TRANSITION && o.Map.addInitHook(function () {
			this._zoomAnimated = this.options.zoomAnimation && o.DomUtil.TRANSITION && o.Browser.any3d && !o.Browser.android23 && !o.Browser.mobileOpera, this._zoomAnimated && o.DomEvent.on(this._mapPane, o.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
		}), o.Map.include(o.DomUtil.TRANSITION ? {
			_catchTransitionEnd: function (t) {
				this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
			},
			_nothingToAnimate: function () {
				return !this._container.getElementsByClassName("leaflet-zoom-animated").length
			},
			_tryAnimatedZoom: function (t, e, n) {
				if (this._animatingZoom) return !0;
				if (n = n || {}, !this._zoomAnimated || n.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
				var i = this.getZoomScale(e),
					o = this._getCenterOffset(t)._divideBy(1 - 1 / i),
					r = this._getCenterLayerPoint()._add(o);
				return n.animate === !0 || this.getSize().contains(o) ? (this.fire("movestart").fire("zoomstart"), this._animateZoom(t, e, r, i, null, !0), !0) : !1
			},
			_animateZoom: function (t, e, n, i, r, a, s) {
				s || (this._animatingZoom = !0), o.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter = t, this._animateToZoom = e, o.Draggable && (o.Draggable._disabled = !0), o.Util.requestAnimFrame(function () {
					this.fire("zoomanim", {
						center: t,
						zoom: e,
						origin: n,
						scale: i,
						delta: r,
						backwards: a
					})
				}, this)
			},
			_onZoomTransitionEnd: function () {
				this._animatingZoom = !1, o.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), o.Draggable && (o.Draggable._disabled = !1)
			}
		} : {}), o.TileLayer.include({
			_animateZoom: function (t) {
				this._animating || (this._animating = !0, this._prepareBgBuffer());
				var e = this._bgBuffer,
					n = o.DomUtil.TRANSFORM,
					i = t.delta ? o.DomUtil.getTranslateString(t.delta) : e.style[n],
					r = o.DomUtil.getScaleString(t.scale, t.origin);
				e.style[n] = t.backwards ? r + " " + i : i + " " + r
			},
			_endZoomAnim: function () {
				var t = this._tileContainer,
					e = this._bgBuffer;
				t.style.visibility = "", t.parentNode.appendChild(t), o.Util.falseFn(e.offsetWidth), this._animating = !1
			},
			_clearBgBuffer: function () {
				var t = this._map;
				!t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[o.DomUtil.TRANSFORM] = "")
			},
			_prepareBgBuffer: function () {
				var t = this._tileContainer,
					e = this._bgBuffer,
					n = this._getLoadedTilesPercentage(e),
					i = this._getLoadedTilesPercentage(t);
				return e && n > .5 && .5 > i ? (t.style.visibility = "hidden", this._stopLoadingImages(t), void 0) : (e.style.visibility = "hidden", e.style[o.DomUtil.TRANSFORM] = "", this._tileContainer = e, e = this._bgBuffer = t, this._stopLoadingImages(e), clearTimeout(this._clearBgBufferTimer), void 0)
			},
			_getLoadedTilesPercentage: function (t) {
				var e, n, i = t.getElementsByTagName("img"),
					o = 0;
				for (e = 0, n = i.length; n > e; e++) i[e].complete && o++;
				return o / n
			},
			_stopLoadingImages: function (t) {
				var e, n, i, r = Array.prototype.slice.call(t.getElementsByTagName("img"));
				for (e = 0, n = r.length; n > e; e++) i = r[e], i.complete || (i.onload = o.Util.falseFn, i.onerror = o.Util.falseFn, i.src = o.Util.emptyImageUrl, i.parentNode.removeChild(i))
			}
		}), o.Map.include({
			_defaultLocateOptions: {
				watch: !1,
				setView: !1,
				maxZoom: 1 / 0,
				timeout: 1e4,
				maximumAge: 0,
				enableHighAccuracy: !1
			},
			locate: function (t) {
				if (t = this._locateOptions = o.extend(this._defaultLocateOptions, t), !navigator.geolocation) return this._handleGeolocationError({
					code: 0,
					message: "Geolocation not supported."
				}), this;
				var e = o.bind(this._handleGeolocationResponse, this),
					n = o.bind(this._handleGeolocationError, this);
				return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, n, t) : navigator.geolocation.getCurrentPosition(e, n, t), this
			},
			stopLocate: function () {
				return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
			},
			_handleGeolocationError: function (t) {
				var e = t.code,
					n = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
				this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
					code: e,
					message: "Geolocation error: " + n + "."
				})
			},
			_handleGeolocationResponse: function (t) {
				var e = t.coords.latitude,
					n = t.coords.longitude,
					i = new o.LatLng(e, n),
					r = 180 * t.coords.accuracy / 40075017,
					a = r / Math.cos(o.LatLng.DEG_TO_RAD * e),
					s = o.latLngBounds([e - r, n - a], [e + r, n + a]),
					l = this._locateOptions;
				if (l.setView) {
					var u = Math.min(this.getBoundsZoom(s), l.maxZoom);
					this.setView(i, u)
				}
				var c = {
					latlng: i,
					bounds: s,
					timestamp: t.timestamp
				};
				for (var h in t.coords) "number" == typeof t.coords[h] && (c[h] = t.coords[h]);
				this.fire("locationfound", c)
			}
		})
}(window, document),
function (t, e, n, i, o) {
	"use strict";

	function r() {
		function e(t, e) {
			this.dot1 = t, this.dot2 = e
		}

		function n() {
			this.location = {
				x: +(Math.random() * l.width).toFixed(2),
				y: +(Math.random() * l.height).toFixed(2)
			}, this.velocity = {
				x: +(d + -2 * d * Math.random()).toFixed(2),
				y: +(d + -2 * d * Math.random()).toFixed(2)
			}, this.draw = function () {
				u.beginPath(), u.arc(this.location.x, this.location.y, 3.5, 0, 2 * Math.PI, !1), u.fill()
			}, this.update = function () {
				this.location.x = this.location.x + this.velocity.x, this.location.y = this.location.y + this.velocity.y, this.bounce()
			}, this.bounce = function () {
				(this.location.x >= l.width || this.location.x <= 0) && (this.velocity.x = -1 * this.velocity.x), (this.location.y >= l.height || this.location.y <= 0) && (this.velocity.y = -1 * this.velocity.y)
			}
		}

		function i() {
			var i = t('<canvas id="particules"></canvas>').prependTo(t("body"));
			l = i[0], u = l.getContext("2d"), l.width = window.innerWidth, l.height = window.innerHeight, u.fillStyle = c, u.strokeStyle = c, u.lineWidth = h;
			var o, r = Math.ceil(window.innerWidth * window.innerHeight / p);
			for (o = r; o >= 0; o--) g[o] = new n;
			var a = g.slice(0);
			for (a.pop(), o = g.length - 1; o >= 0; o--) {
				for (var s = a.length - 1; s >= 0; s--) m.push(new e(g[o], a[s]));
				a.pop()
			}
		}

		function o() {
			u.clearRect(0, 0, l.width, l.height);
			var t;
			for (t = g.length - 1; t >= 0; t--) g[t].update(), g[t].draw();
			for (t = m.length - 1; t >= 0; t--) {
				var e = {
					x: m[t].dot2.location.x - m[t].dot1.location.x,
					y: m[t].dot2.location.y - m[t].dot1.location.y
				};
				Math.sqrt(e.x * e.x + e.y * e.y) < f && (u.beginPath(), u.moveTo(m[t].dot1.location.x, m[t].dot1.location.y), u.lineTo(m[t].dot2.location.x, m[t].dot2.location.y), u.stroke(), u.closePath())
			}
			s = requestAnimationFrame(o)
		}

		function r() {
			s = requestAnimationFrame(o)
		}

		function a() {
			cancelAnimationFrame(s)
		}
		var s, l, u, c = "#f0f0f0",
			h = 1,
			p = 16e3,
			d = .4,
			f = 120,
			m = [],
			g = [];
		return {
			init: i,
			play: r,
			stop: a
		}
	}
	var a, s = function () {
			function e() {
				n(), t(".bureaux__open").on("click", function () {
					r()
				}), h.on("click", function () {
					a()
				}), t(document).keyup(function (e) {
					27 === e.keyCode && t(".map--open").length && a()
				})
			}

			function n() {
				var t = i.tileLayer("https://{s}.tiles.mapbox.com/v3/jrmlstf.ibf17fh7/{z}/{x}/{y}.png", {
					attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
				});
				s = i.map("bureaux__carte__map").addLayer(t).setView(p, d), i.marker(p, {
					icon: i.divIcon({
						className: "bureaux__marker",
						iconAnchor: [8, 8],
						iconSize: [16, 16]
					})
				}).addTo(s)
			}

			function o() {
				setTimeout(function () {
					s.invalidateSize(), s.setView(p, d)
				}, 10)
			}

			function r() {
				var t = l[0].getBoundingClientRect();
				u.addClass("map--open").css({
					top: t.top + "px",
					height: t.height + "px"
				}).velocity({
					zIndex: 1,
					top: t.top,
					height: t.height
				}).velocity("fadeIn", {
					duration: 200
				}).velocity({
					top: "0",
					height: "100%"
				}, {
					duration: 300,
					easing: [.7, 0, .3, 1],
					complete: function () {
						c.velocity("fadeIn", {
							delay: 200,
							duration: 200,
							complete: function () {
								o()
							}
						})
					}
				})
			}

			function a() {
				c.velocity("reverse", {
					delay: 0,
					duration: 200,
					complete: function () {
						u.removeClass("map--open").velocity("reverse", {
							duration: 300
						}).velocity("fadeOut", {
							duration: 200
						})
					}
				})
			}
			var s, l = t("#bureaux"),
				u = t(".bureaux__carte"),
				c = t(".bureaux__carte__content"),
				h = t(".bureaux__carte__close"),
				p = [44.843552, -.573384],
				d = 15;
			return {
				init: e
			}
		}(),
		l = function () {
			function e() {
				var e = t(".modal__close");
				t(".open--modal").on("click", function (t) {
					n(t)
				}), e.on("click", function () {
					i()
				}), t(document).keyup(function (e) {
					27 === e.keyCode && t(".modal--open").length && i()
				})
			}

			function n(e) {
				var n = t("#" + t(e.target).attr("data-target")),
					i = n.find(".modal__content"),
					o = t(".pied")[0].getBoundingClientRect();
				n.addClass("modal--open").velocity({
					zIndex: 1,
					top: o.top,
					height: o.height
				}).velocity("fadeIn", {
					duration: 200
				}).velocity({
					top: "0",
					height: "100%"
				}, {
					delay: 100,
					duration: 300,
					easing: [.7, 0, .3, 1],
					complete: function () {
						i.velocity("fadeIn", {
							delay: 400,
							duration: 200
						})
					}
				})
			}

			function i() {
				var e = t(".modal--open"),
					n = e.find(".modal__content");
				n.velocity("reverse", {
					delay: 0,
					duration: 200,
					complete: function () {
						e.removeClass("modal--open").velocity("reverse", {
							duration: 300
						}).velocity("fadeOut", {
							delay: 100,
							duration: 200
						})
					}
				})
			}
			return {
				init: e
			}
		}(),
		u = function () {
			function e(e) {
				return _ = t(e), _.length ? (x = t(".projet__controls__progressbar"), b = t(".projet__controls__number__current"), w = t(".projet__controls__number__total"), L = t(".projet__controls__prev"), P = t(".projet__controls__next"), C = t(".projet__controls__error"), T = t(".projet__unfocus"), S = t(".projet__recommencer"), E = t(".projet__question__field"), M = 1, D = [].slice.call(t(".projet__question")), p(), h(), P.on("click", function () {
					i()
				}), L.on("click", function () {
					r()
				}), S.on("click", function () {
					y()
				}), E.on("focus", function () {
					s()
				}), _.on("keydown", function (e) {
					var n = e.keyCode || e.which;
					switch (n) {
					case 13:
						t(D[M - 1]).find(".projet__question__field").is("textarea") || (e.preventDefault(), i())
					}
				}), void 0) : console.error("You must pass a valid element to init tje minimal form")
			}

			function n(e) {
				var n = t(D[M - 1]);
				n.removeClass("projet__question--current"), M = e, t(D[M - 1]).addClass("projet__question--current"), g(), c(), l(), u(), p(), a(), _.removeClass("finish")
			}

			function i() {
				var e = t(D[M - 1]);
				k > M && d(e) ? (e.removeClass("projet__question--current"), t(D[M]).addClass("projet__question--current"), M += 1, u(), l(), c(), p(), a(), g()) : M === k && d(e) && (c(), _.addClass("finish"), v())
			}

			function r() {
				M > 1 && (t(D[M - 1]).removeClass("projet__question--current"), t(D[M - 2]).addClass("projet__question--current"), M -= 1, u(), l(), c(), p(), a(), g())
			}

			function a() {
				t(D[M - 1]).find(".projet__question__field").focus(), s()
			}

			function s() {
				o.touch && t("#projet").velocity("scroll", {
					delay: 300,
					duration: 400,
					offset: 160,
					easing: "ease",
					container: t(".wrapper")
				})
			}

			function l() {
				M === k ? P.html("Envoyer") : P.html("Suivant")
			}

			function u() {
				2 > M ? L.hide() : L.show()
			}

			function c() {
				var t = (M - 1) / k * 100;
				x.css("width", t + "%")
			}

			function h() {
				k = D.length, w.html(k)
			}

			function p() {
				b.html(M)
			}

			function d(t) {
				var e = t.find(".projet__question__field"),
					n = e.val();
				return e.prop("required") && !n ? (m("REQUIRED"), e.velocity("callout.shake"), !1) : "email" !== e.prop("type") || f(n) ? !0 : (m("EMAIL"), e.velocity("callout.shake"), !1)
			}

			function f(t) {
				var e = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
				return e.test(t) ? !0 : !1
			}

			function m(t) {
				var e = "Une erreur est survenue.";
				switch (t) {
				case "REQUIRED":
					e = "Ce champ est obligatoire.";
					break;
				case "EMAIL":
					e = "Format email incorrecte."
				}
				C.html(e).show(), a()
			}

			function g() {
				C.hide()
			}

			function v() {
				t.post("/send", {
					nom: t("#q_nom").val(),
					tel: t("#q_tel").val(),
					email: t("#q_email").val(),
					entreprise: t("#q_entreprise").val(),
					message: t("#q_message").val(),
					_csrf: t("#_csrf").val()
				}).done(function (t) {
					console.log(t)
				})
			}

			function y() {
				n(1), E.val("")
			}
			var _, x, b, w, P, L, C, T, S, E, D, k, M;
			return {
				init: e
			}
		}(),
		c = function () {
			function t() {
				o = new e(".splash__logo"), r = o.selectAll("circle"), a = r[0].attr("r"), s = o.selectAll("line"), l = o.selectAll("text"), r.attr({
					r: 0
				});
				for (var t = 0, n = s.length; n > t; t++) {
					var i = s[t];
					i.data("x2o", i.attr("x2")), i.data("y2o", i.attr("y2")), i.attr("x2", i.attr("x1")), i.attr("y2", i.attr("y1"))
				}
			}

			function i() {
				for (var t = 0, e = r.length; e > t; t++) r[t].animate({
					r: a
				}, 2e3, n.easeout);
				for (var i = 0, o = s.length; o > i; i++) {
					var l = s[i];
					l.animate({
						x2: l.data("x2o"),
						y2: l.data("y2o")
					}, 2e3, n.easeout)
				}
			}
			var o, r, a, s, l;
			return {
				init: t,
				start: i
			}
		}();
	t(document).ready(function () {
		a = +new Date;
		var e = new r;
		e.init(), e.play(), t(".local-scroll").on("click", function (e) {
			e.preventDefault(), t(e.currentTarget.hash).velocity("scroll", {
				duration: 1400,
				easing: "easeInOutExpo"
			})
		}), u.init(".projet__container"), c.init(), l.init(), s.init()
	}), t(window).load(function () {
		var e = +new Date,
			n = e - a,
			i = 1e3,
			o = 0;
		i > n && (o = i - n), setTimeout(function () {
			t("body").toggleClass("loading loaded"), setTimeout(function () {
				c.start()
			}, 1e3), setTimeout(function () {
				t("body").toggleClass("loaded ready")
			}, 5e3)
		}, o)
	})
}(window.jQuery, window.Snap, window.mina, window.L, window.Modernizr);