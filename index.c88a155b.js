/*! npm.im/object-fit-images 3.2.4 */ var objectFitImages = function() {
    "use strict";
    var t1 = function t1(t, e) {
        return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E";
    };
    var e1 = function e1(t) {
        if (t.srcset && !p && window.picturefill) {
            var e = window.picturefill._;
            t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
                reselect: !0
            }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {
                reselect: !0
            })), t.currentSrc = t[e.ns].curSrc || t.src;
        }
    };
    var i = function i(t) {
        for(var e, i1 = getComputedStyle(t).fontFamily, r = {}; null !== (e = u.exec(i1));)r[e[1]] = e[2];
        return r;
    };
    var r1 = function r1(e, i, r) {
        var n = t1(i || 1, r || 0);
        b.call(e, "src") !== n && h.call(e, "src", n);
    };
    var c = function c(t) {
        var c1 = i(t), o = t[l];
        if (c1["object-fit"] = c1["object-fit"] || "fill", !o.img) {
            if ("fill" === c1["object-fit"]) return;
            if (!o.skipTest && f && !c1["object-position"]) return;
        }
        if (!o.img) {
            o.img = new Image(t.width, t.height), o.img.srcset = b.call(t, "data-ofi-srcset") || t.srcset, o.img.src = b.call(t, "data-ofi-src") || t.src, h.call(t, "data-ofi-src", t.src), t.srcset && h.call(t, "data-ofi-srcset", t.srcset), r1(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = "");
            try {
                s(t);
            } catch (t) {
                window.console && console.warn("https://bit.ly/ofi-old-browser");
            }
        }
        e1(o.img), t.style.backgroundImage = 'url("' + (o.img.currentSrc || o.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = c1["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(c1["object-fit"]) ? n1(o.img, function() {
            o.img.naturalWidth > t.width || o.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto";
        }) : t.style.backgroundSize = c1["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), n1(o.img, function(e) {
            r1(t, e.naturalWidth, e.naturalHeight);
        });
    };
    var s = function s(t2) {
        var e2 = {
            get: function get(e) {
                return t2[l].img[e ? e : "src"];
            },
            set: function set(e, i) {
                return t2[l].img[i ? i : "src"] = e, h.call(t2, "data-ofi-" + i, e), c(t2), e;
            }
        };
        Object.defineProperty(t2, "src", e2), Object.defineProperty(t2, "currentSrc", {
            get: function get() {
                return e2.get("currentSrc");
            }
        }), Object.defineProperty(t2, "srcset", {
            get: function get() {
                return e2.get("srcset");
            },
            set: function set(t) {
                return e2.set(t, "srcset");
            }
        });
    };
    var o1 = function o1() {
        function t3(t, e) {
            return t[l] && t[l].img && ("src" === e || "srcset" === e) ? t[l].img : t;
        }
        d || (HTMLImageElement.prototype.getAttribute = function(e) {
            return b.call(t3(this, e), e);
        }, HTMLImageElement.prototype.setAttribute = function(e, i) {
            return h.call(t3(this, e), e, String(i));
        });
    };
    function n1(t, e) {
        t.naturalWidth ? e(t) : setTimeout(n1, 100, t, e);
    }
    function a(t4, e) {
        var i = !y && !t4;
        if (e = e || {}, t4 = t4 || "img", d && !e.skipTest || !m) return !1;
        "img" === t4 ? t4 = document.getElementsByTagName("img") : "string" == typeof t4 ? t4 = document.querySelectorAll(t4) : "length" in t4 || (t4 = [
            t4
        ]);
        for(var r = 0; r < t4.length; r++)t4[r][l] = t4[r][l] || {
            skipTest: e.skipTest
        }, c(t4[r]);
        i && (document.body.addEventListener("load", function(t) {
            "IMG" === t.target.tagName && a(t.target, {
                skipTest: e.skipTest
            });
        }, !0), y = !0, t4 = "img"), e.watchMQ && window.addEventListener("resize", a.bind(null, t4, {
            skipTest: e.skipTest
        }));
    }
    var l = "fregante:object-fit-images", u = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g, g = "undefined" == typeof Image ? {
        style: {
            "object-position": 1
        }
    } : new Image, f = "object-fit" in g.style, d = "object-position" in g.style, m = "background-size" in g.style, p = "string" == typeof g.currentSrc, b = g.getAttribute, h = g.setAttribute, y = !1;
    return a.supportsObjectFit = f, a.supportsObjectPosition = d, o1(), a;
}();

//# sourceMappingURL=index.c88a155b.js.map
