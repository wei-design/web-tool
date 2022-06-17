(function (t, n) {
    typeof exports == "object" && typeof module < "u" ? n(exports) : typeof define == "function" && define.amd ? define(["exports"], n) : (t = typeof globalThis < "u" ? globalThis : t || self, n(t["web-tool"] = {}))
})(this, function (t) {
    "use strict";
    const n = Object.freeze(Object.defineProperty({__proto__: null}, Symbol.toStringTag, {value: "Module"})),
        l = () => {
            console.log("setCookie")
        }, v = Object.freeze(Object.defineProperty({
            __proto__: null,
            setCookie: l
        }, Symbol.toStringTag, {value: "Module"})),
        w = Object.freeze(Object.defineProperty({__proto__: null}, Symbol.toStringTag, {value: "Module"})),
        o = e => Object.prototype.toString.call(e),
        r = e => Object.prototype.toString.call(e).replace(/^\[object (\S+)\]$/, "$1").toLowerCase(),
        i = Object.prototype.hasOwnProperty, u = (e, c) => i.call(e, c), a = e => o(e) === "[object Function]",
        b = e => o(e) === "[object asyncFunction]", y = e => e !== null && typeof e == "object", _ = Array.isArray,
        d = e => typeof e == "string", f = e => typeof e == "number", g = e => typeof e == "bigint",
        j = e => typeof e == "boolean", p = e => o(e) === "[object RegExp]", O = e => e instanceof Date,
        S = e => o(e) === "[object Map]", m = e => o(e) === "[object Set]", P = e => o(e) === "[object Promise]",
        M = e => typeof e == "symbol", h = e => e === null ? !0 : typeof e > "u",
        A = Object.freeze(Object.defineProperty({
            __proto__: null,
            toTypeString: o,
            typeName: r,
            hasOwnProperty: i,
            hasOwn: u,
            isFunction: a,
            isAsync: b,
            isObject: y,
            isArray: _,
            isString: d,
            isNumber: f,
            isBigInt: g,
            isBoolean: j,
            isRegExp: p,
            isDate: O,
            isMap: S,
            isSet: m,
            isPromise: P,
            isSymbol: M,
            isNullOrUndefined: h
        }, Symbol.toStringTag, {value: "Module"}));
    let s = {};
    const T = Object.assign({
        "./ajax/index.ts": n,
        "./cookie/index.ts": v,
        "./regExp/index.ts": w,
        "./typeof/index.ts": A
    });
    for (const e in T) {
        const c = T[e];
        s = {...s, ...c}
    }
    const N = s;
    t.default = N, t.hasOwn = u, t.hasOwnProperty = i, t.isArray = _, t.isAsync = b, t.isBigInt = g, t.isBoolean = j, t.isDate = O, t.isFunction = a, t.isMap = S, t.isNullOrUndefined = h, t.isNumber = f, t.isObject = y, t.isPromise = P, t.isRegExp = p, t.isSet = m, t.isString = d, t.isSymbol = M, t.setCookie = l, t.toTypeString = o, t.typeName = r, Object.defineProperties(t, {
        __esModule: {value: !0},
        [Symbol.toStringTag]: {value: "Module"}
    })
});
//# sourceMappingURL=web-tool.umd.js.map
