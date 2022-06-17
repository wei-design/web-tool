const r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
        __proto__: null
    }, Symbol.toStringTag, {value: "Module"})), i = () => {
        console.log("setCookie");
    }, l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
        __proto__: null,
        setCookie: i
    }, Symbol.toStringTag, {value: "Module"})), _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
        __proto__: null
    }, Symbol.toStringTag, {value: "Module"})), e = (t) => Object.prototype.toString.call(t),
    b = (t) => Object.prototype.toString.call(t).replace(/^\[object (\S+)\]$/, "$1").toLowerCase(),
    c = Object.prototype.hasOwnProperty, a = (t, o) => c.call(t, o), p = (t) => e(t) === "[object Function]",
    u = (t) => e(t) === "[object asyncFunction]", y = (t) => t !== null && typeof t == "object", g = Array.isArray,
    f = (t) => typeof t == "string", j = (t) => typeof t == "number", d = (t) => typeof t == "bigint",
    O = (t) => typeof t == "boolean", S = (t) => e(t) === "[object RegExp]", m = (t) => t instanceof Date,
    x = (t) => e(t) === "[object Map]", P = (t) => e(t) === "[object Set]", M = (t) => e(t) === "[object Promise]",
    v = (t) => typeof t == "symbol", T = (t) => t === null ? !0 : typeof t > "u",
    h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
        __proto__: null,
        toTypeString: e,
        typeName: b,
        hasOwnProperty: c,
        hasOwn: a,
        isFunction: p,
        isAsync: u,
        isObject: y,
        isArray: g,
        isString: f,
        isNumber: j,
        isBigInt: d,
        isBoolean: O,
        isRegExp: S,
        isDate: m,
        isMap: x,
        isSet: P,
        isPromise: M,
        isSymbol: v,
        isNullOrUndefined: T
    }, Symbol.toStringTag, {value: "Module"}));
let n = {};
const s = /* @__PURE__ */ Object.assign({
    "./ajax/index.ts": r,
    "./cookie/index.ts": l,
    "./regExp/index.ts": _,
    "./typeof/index.ts": h
});
for (const t in s) {
    const o = s[t];
    n = {
        ...n,
        ...o
    };
}
const k = n;
export {
    k as default,
    a as hasOwn,
    c as hasOwnProperty,
    g as isArray,
    u as isAsync,
    d as isBigInt,
    O as isBoolean,
    m as isDate,
    p as isFunction,
    x as isMap,
    T as isNullOrUndefined,
    j as isNumber,
    y as isObject,
    M as isPromise,
    S as isRegExp,
    P as isSet,
    f as isString,
    v as isSymbol,
    i as setCookie,
    e as toTypeString,
    b as typeName
};
//# sourceMappingURL=web-tool.es.js.map
