var $shual = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // index.js
  var shual_exports = {};
  __export(shual_exports, {
    Pad: () => Pad,
    ShualDecrypt: () => ShualDecrypt,
    ShualEncrypt: () => ShualEncrypt,
    ShualHash: () => ShualHash,
    Unpad: () => Unpad
  });

  // node_modules/@yaronkoresh/math/dist/bundle.min.mjs
  var te = "0123456789ABCDEF";
  var re = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var S = function(e, t, i = "left") {
    for (e = e.toString(); e.length < t; )
      i.toLowerCase() === "left" ? e = "0" + e : i.toLowerCase() === "right" && (e = e + "0");
    return e;
  };
  var g = function(e, t) {
    let i = null, o = false;
    if (e = e.toString(), t = t.toString(), e.includes(".") && t.includes(".")) {
      let l = e.split(".")[1], r = t.split(".")[1];
      l = S(l, r.length, "right"), r = S(r, l.length, "right"), e = e.split(".")[0] + "." + l, t = t.split(".")[0] + "." + r;
    } else
      e.includes(".") ? t += "." + "0".repeat(e.split(".")[1].length) : t.includes(".") && (e += "." + "0".repeat(t.split(".")[1].length));
    if (e = e.split(""), t = t.split(""), e[0] === "-" && t[0] !== "-")
      i = t.join("");
    else if (t[0] === "-" && e[0] !== "-")
      i = e.join("");
    else if (e[0] === "-" && (e = e.slice(1), t = t.slice(1), o = true), e.length > t.length)
      i = o ? "-" + t.join("") : e.join("");
    else if (e.length < t.length)
      i = o ? "-" + e.join("") : t.join("");
    else
      for (let l = 0; l < e.length; l++) {
        if (e[l] !== "." && t[l] === ".") {
          i = o ? "-" + t.join("") : e.join("");
          break;
        }
        if (e[l] === "." && t[l] !== ".") {
          i = o ? "-" + e.join("") : t.join("");
          break;
        }
        if (+e[l] > +t[l]) {
          i = o ? "-" + t.join("") : e.join("");
          break;
        }
        if (+e[l] < +t[l]) {
          i = o ? "-" + e.join("") : t.join("");
          break;
        }
      }
    if (i === null)
      return true;
    for (; i.includes(".") && i.slice(i.length - 1) === "0"; )
      i = i.slice(0, i.length - 1);
    return i.slice(i.length - 1) === "." && (i = i.slice(0, i.length - 1)), i;
  };
  var c = function(...e) {
    if (e = e.flat(), e.length < 2)
      return null;
    let t = e[0].toString().split(".")[0] ?? "0", i = e[0].toString().split(".")[1] ?? "0";
    e = e.slice(1), t.slice(0, 1) === "-" && (i = "-" + i);
    let o = function(r, s) {
      Array.isArray(r) || (r = [...r.toString().split("")].reverse()), Array.isArray(s) || (s = [...s.toString().split("")].reverse());
      let f = null, a = null, n = null, p = null;
      p = g([...r].reverse().join(""), 0), p === "0" ? (a = true, r = r.slice(0, r.length - 1)) : a = false, p = g([...s].reverse().join(""), 0), p === "0" ? (n = true, s = s.slice(0, s.length - 1)) : n = false, p = g([...r].reverse().join(""), [...s].reverse().join("")), a && n || a && !n && p === [...r].reverse().join("") || !a && n && p === [...s].reverse().join("") ? f = true : f = false;
      let u = 0;
      for (let d = 0; d < Math.max(r.length, s.length); d++)
        if (!a && n) {
          r = [...h([...r].reverse().join(""), [...s].reverse().join("")).split("")].reverse(), r[r.length - 1] === "-" && r.pop();
          break;
        } else if (a && !n) {
          r = [...h([...s].reverse().join(""), [...r].reverse().join("")).split("")].reverse(), r[r.length - 1] === "-" && r.pop();
          break;
        } else {
          let j = [...(parseInt(r[d] ?? 0) + u + parseInt(s[d] ?? 0)).toString().split("")].reverse();
          r[d] = j[0], u = j[1] ? 1 : 0;
        }
      for (u === 1 && r.push("1"); r[r.length - 1] === "0" && r.length > 1; )
        r = r.slice(0, r.length - 1);
      return f && r.push("-"), [...r].reverse().join("");
    }, l = function(r) {
      let s = t.slice(0, 1) === "-" ? "-" : "";
      i = i.replace("-", "");
      let f = r.toString().split(".")[0] ?? "0", a = r.toString().split(".")[1] ?? "0";
      i = S(i, a.length, "right"), a = S(a, i.length, "right"), f.slice(0, 1) === "-" && a !== 0 && (a = "-" + a), t = o(t, f);
      let n = i.length, p = o(s + i, a);
      p.slice(0, 1) !== "-" && (p = S(p, n)), p.replace("-", "").length > i.length && (p.includes("-") ? (t = "-" + c(t.replace("-", ""), "1"), p = "-" + p.slice(2)) : (t = c(t, "1"), p = p.slice(1))), p.slice(0, 1) === "-" ? (p = p.replace("-", ""), t.slice(0, 1) !== "-" && (t = h(t, "1"), p = h("1" + "0".repeat(i.length), p))) : t.slice(0, 1) === "-" && c(p, 0) !== "0" && (t = c(t, "1"), t.includes("-") || (t = "-" + t), p = h("1" + "0".repeat(i.length), p)), p = S(p, i.length), i = p;
    };
    for (e.map((r) => l(r)); i.slice(i.length - 1) === "0" && i.length > 0; )
      i = i.slice(0, i.length - 1);
    return i.length === 0 ? t : [t, i].join(".");
  };
  var h = function(...e) {
    if (e = e.flat(), e.length < 2)
      return null;
    let t = e[0].toString().split(".")[0] ?? "0", i = e[0].toString().split(".")[1] ?? "0";
    e = e.slice(1), t.slice(0, 1) === "-" && (i = "-" + i);
    let o = function(l, r) {
      Array.isArray(l) || (l = [...l.toString().split("")].reverse()), Array.isArray(r) || (r = [...r.toString().split("")].reverse());
      let s = null, f = null, a = null, n = null;
      if (n = g([...l].reverse().join(""), 0), n === "0" ? (f = true, l = l.slice(0, l.length - 1)) : f = false, n = g([...r].reverse().join(""), 0), n === "0" ? (a = true, r = r.slice(0, r.length - 1)) : a = false, n = g([...l].reverse().join(""), [...r].reverse().join("")), f && a && n !== [...r].reverse().join("") || f && !a || !f && !a && n === [...r].reverse().join("") ? s = true : s = false, n === [...r].reverse().join("")) {
        let u = r;
        r = l, l = u;
      }
      let p = 0;
      for (let u = 0; u < Math.max(l.length, r.length); u++)
        if (!f && a || f && !a) {
          l = [...c([...l].reverse().join(""), [...r].reverse().join("")).split("")].reverse();
          break;
        } else {
          let d = [...(parseInt(l[u] ?? 0) - p - parseInt(r[u] ?? 0)).toString().split("")].reverse();
          l[u] = d.length === 3 ? "0" : d.length === 2 ? 10 - +d[0] : d[0], p = d.length > 1 ? 1 : 0;
        }
      for (; l[l.length - 1] === "0" && l.length > 1; )
        l = l.slice(0, l.length - 1);
      return s && l.push("-"), [...l].reverse().join("");
    };
    for (e.map(function(l) {
      let r = t.slice(0, 1) === "-" ? "-" : "";
      i = i.replace("-", "");
      let s = l.toString().split(".")[0] ?? "0", f = l.toString().split(".")[1] ?? "0";
      i = S(i, f.length, "right"), f = S(f, i.length, "right"), s.slice(0, 1) === "-" && f !== 0 && (f = "-" + f), t = o(t, s);
      let a = i.length, n = o(r + i, f);
      n.slice(0, 1) !== "-" && (n = S(n, a)), n.replace("-", "").length > i.length && (n.includes("-") ? (t = "-" + c(t.replace("-", ""), "1"), n = "-" + n.slice(2)) : (t = c(t, "1"), n = n.slice(1))), n.slice(0, 1) === "-" ? (n = n.replace("-", ""), t.slice(0, 1) !== "-" && (t = h(t, "1"), n = h("1" + "0".repeat(i.length), n))) : t.slice(0, 1) === "-" && c(n, 0) !== "0" && (t = c(t, "1"), t.includes("-") || (t = "-" + t), n = h("1" + "0".repeat(i.length), n)), n = S(n, i.length), i = n;
    }); i.slice(i.length - 1) === "0" && i.length > 0; )
      i = i.slice(0, i.length - 1);
    return i.length === 0 ? t : [t, i].join(".");
  };
  var ie = function(e) {
    e = h(e, 2);
    let t = "0", i = "1", o = ["0", "1"];
    for (let l = "0"; g(l, e) === e; l = c(l, 1))
      i = c(i, t), t = h(i, t), o.push(i);
    return e.includes("-") && (o = o.slice(0, parseInt(e))), o;
  };
  var q = function(e) {
    if (e.length === 0 || "0".repeat(e.length) === e)
      return false;
    for (; ; ) {
      if (e.slice(0, Math.max(e.length / 2)) === e.slice(Math.max(e.length / 2)))
        return true;
      if (e.slice(0, 1) === "0") {
        e = e.slice(1);
        continue;
      }
      break;
    }
    return false;
  };
  var A = function(e, t, i = "6") {
    i = c(i, 0);
    let o = [e, t];
    if (o.length < 2)
      return null;
    let l = o[0].toString() ?? "0";
    o = o.slice(1);
    let r = function(n, p) {
      p = p.toString();
      let u = n.slice(0, 1) === "-", d = p.slice(0, 1) === "-", j = !u && d || u && !d, y = n, T = p;
      if (n = n.replace("-", ""), p = p.replace("-", ""), p = p.toString(), c(n, "0") !== "0" && c(p, "0") === "0")
        return console.error("A division of any negative/positive number by zero is invalid."), null;
      let m = "0", x = "0", w = Math.max(n.split(".")[0].length - p.split(".")[0].length - 1, 0), v = p.indexOf("."), z = "1" + "0".repeat(w);
      v = v === -1 ? 0 : p.length - v - 1;
      let R = v === 0 ? p + "0".repeat(w) : v <= w ? p.replace(".", "") + "0".repeat(w - v) : p.replace(".", "").slice(0, p.replace(".", "").length - v + w) + "." + p.replace(".", "").slice(p.replace(".", "").length - v + w);
      for (; ; ) {
        let k = c(m, R), M = g(k, n);
        if (M === true) {
          m = k, x = c(x, z);
          break;
        } else if (M === n)
          m = k, x = c(x, z);
        else {
          if (w === 0)
            break;
          w -= 1, z = "1" + "0".repeat(w), v = R.indexOf("."), v = v === -1 ? 0 : R.length - v - 1, R = v === 1 && R.slice(R.length - 1) === "0" ? R.slice(0, R.length - 2) : R.slice(R.length - 1) === "0" ? R.slice(0, R.length - 1) : R.replace(".", "").slice(0, R.replace(".", "").length - v - 1) + "." + R.replace(".", "").slice(R.replace(".", "").length - v - 1);
        }
      }
      if (m !== n && g(i, 0) === i) {
        let k = h(n, m), M = "", W = false;
        for (; W === false; ) {
          let N = "0", X = "0", Y = I(k, "10"), U = c(N, p);
          for (; g(U, Y) !== U; )
            N = U, U = c(N, p), X = c(X, "1");
          if (M += X, k === "0" || M.length >= parseInt(i)) {
            for (; M.slice(M.length - 1) === "0"; )
              M = M.slice(0, M.length - 1);
            return M !== "" && (M = "." + M), (j ? "-" : "") + `${x}${M}`;
          }
          k = h(Y, N), W = q(M);
        }
        return (j ? "-" : "") + `${x}.${M.slice(0, M.length / 2)}`;
      }
      return (j ? "-" : "") + x;
    };
    for (; l.slice(".")[0].length > 1 && l.slice(0, 1) === "0"; )
      l = l.slice(1);
    for (; l.includes(".") && l.slice(l.length - 1) === "0"; )
      l = l.slice(0, l.length - 1);
    let s = function(n) {
      for (n = n.toString(); n.slice(".")[0].length > 1 && n.slice(0, 1) === "0"; )
        n = n.slice(1);
      for (; n.includes(".") && n.slice(n.length - 1) === "0"; )
        n = n.slice(0, n.length - 1);
      l = r(l, n);
    };
    o.map((n) => s(n));
    let f = l.split(".")[0] ?? "0", a = l.split(".")[1] ?? "0";
    for (; a.length > 0 && a.slice(a.length - 1) === "0"; )
      a = a.slice(0, a.length - 1);
    return a.length === 0 ? f : [f, a].join(".");
  };
  var b = function(e, t) {
    let i = function(l, r) {
      let s = r;
      for (; s.length > 1; )
        s = c(s.split(""));
      s = ["3", "6", "9"].includes(s);
      let f = ["0", "5"].includes(r.slice(r.length - 1)) && r !== "0", a = ["2", "4", "6", "8"].includes(r.slice(r.length - 1));
      return f ? (r = A(r, 5), l = c(l, l, l, l, l), i(l, r)) : s ? (r = A(r, 3), l = c(l, l, l), i(l, r)) : a ? (r = A(r, 2), l = c(l, l), i(l, r)) : { high: l, low: r };
    };
    return i(e, t);
  };
  var I = function(...e) {
    if (e = e.flat(), e.length < 2)
      return null;
    let t = e[0].toString().split(".")[0] ?? "0", i = e[0].toString().split(".")[1] ?? "0";
    e = e.slice(1);
    let o = function(r, s) {
      if (s = c(s, 0), r = c(r, 0), c(r, 0) === "0" || c(s, 0) === "0")
        return "0";
      if (g(r, s) === s) {
        let p = s;
        s = r, r = p;
      }
      let a = b(r, s), n = "0";
      for (; g("0", a.low) === a.low; )
        n = c(n, a.high), a.low = h(a.low, 1);
      return n;
    }, l = function(r) {
      let s = r.toString().split(".")[0] ?? "0", f = r.toString().split(".")[1] ?? "0", a = t.slice(0, 1) === "-", n = s.slice(0, 1) === "-", p = !a && n || a && !n;
      for (t = t.replace("-", ""), s = s.replace("-", ""); i.slice(i.length - 1) === "0" && i.length > 0; )
        i = i.slice(0, i.length - 1);
      for (; f.slice(f.length - 1) === "0" && f.length > 0; )
        f = f.slice(0, f.length - 1);
      i = S(i, f.length, "right"), f = S(f, i.length, "right");
      let u = i.length * 2, d = t + i, j = s + f, y = o(d, j);
      y === "0" ? (t = "0", i = "0") : (t = y.slice(0, y.length - u), t = (t === "" ? p ? "-0" : "0" : p ? "-" : "") + t, i = y.slice(y.length - u));
    };
    for (e.map((r) => l(r)); i.slice(i.length - 1) === "0" && i.length > 0; )
      i = i.slice(0, i.length - 1);
    return i.length === 0 ? t : [t, i].join(".");
  };
  var ee = function(e, t) {
    let i = function(l, r) {
      let s = l;
      for (; s.length > 1; )
        s = Add(s.split(""));
      s = ["3", "6", "9"].includes(s);
      let f = r;
      for (; f.length > 1; )
        f = Add(s.split(""));
      f = ["3", "6", "9"].includes(f);
      let a = ["0", "5"].includes(l.slice(l.length - 1)) && l !== "0", n = ["0", "5"].includes(r.slice(r.length - 1)) && r !== "0", p = ["2", "4", "6", "8"].includes(l.slice(l.length - 1)), u = ["2", "4", "6", "8"].includes(r.slice(r.length - 1));
      return a && n ? (r = A(r, 5), l = A(l, 5), i(l, r)) : s && f ? (r = A(r, 3), l = A(l, 3), i(l, r)) : p && u ? (r = A(r, 2), l = A(l, 2), i(l, r)) : { a: l, b: r };
    };
    return i(e, t);
  };
  var D = function(...e) {
    if (e = e.flat(), e.length < 2)
      return null;
    let t = e[0].toString();
    e = e.slice(1);
    let i = function(l, r) {
      if (r = c(r, 0), l = c(l, 0), r === "0" && c(l, 0) === "0")
        return console.error("Power of zeros, is invalid."), null;
      if (r === "0")
        return "1";
      if (c(l, 0) === "1")
        return "1";
      if (c(l, 0) === "0")
        return "0";
      let s = "";
      l.slice(0, 1) === "-" && (l = l.slice(1), A(r, 2).includes(".") && (s = "-"));
      let f = (l.split(".")[1] ?? "").length * r;
      l = l.replace(".", ""), r = h(r, 1);
      let a = l;
      for (; g("0", r) === r; )
        a = I(a, l), r = h(r, 1);
      a = a.replace(".", "");
      let n = a.slice(0, a.length - f), p = "." + a.slice(a.length - f);
      return s + (n === "" ? "0" : n) + (p === "." ? "" : p);
    }, o = function(l) {
      let r = l.toString().split(".")[0] ?? "0", s = l.toString().split(".")[1] ?? "0", f = r.slice(0, 1) === "-";
      if (r = r.replace("-", ""), s !== "0") {
        if (t.includes("-"))
          return console.log("A negative number, to the power of a float, is invalid."), null;
        let a = i(t, r), n = "1" + "0".repeat(s.length), p = s, u = ee(n, p);
        n = u.a, p = u.b;
        let d = Root(t, n), j = D(d, p);
        t = I(i(t, r), j);
      } else
        t = i(t, r);
      if (f) {
        let a = t;
        t = A(1, t), console.log(`Transforming: ${a} ==> ${t} (Reason: negative power)`);
      }
    };
    return e.map((l) => o(l)), t;
  };
  var F = function(e, t) {
    e = e.toString();
    for (var i = [], o = 0; o < e.length; o += t)
      i.push(e.slice(o, o + t));
    return i;
  };
  var B = function(e, t = null) {
    if (e = c(e, 0), t === null) {
      let f = B(e, "01"), n = F(f, 16).map((p) => parseInt(p, 2));
      return String.fromCodePoint([...n].reverse()).toString();
    }
    let i = "", o = t.length, l = t.split(""), r = "0", s = D(o, c(r, 1));
    for (; g(e, s) !== s; )
      r = c(r, 1), s = D(o, c(r, 1));
    for (let f = r; g(f, "0") !== "0"; f = h(f, 1)) {
      let a = 1, n = D(o, f);
      if (g(n, e) === n) {
        i += l[0];
        continue;
      }
      let u = n, d = c(n, u);
      for (; g(e, d) !== d; )
        n = d, a = c(a, 1), d = c(n, u);
      e = h(e, n), i += l[a];
    }
    return i;
  };
  var H = function(e) {
    e = e.toString();
    let t = "0", i = [...e.split("")].reverse();
    for (let o = 0; o < e.length; o++)
      if (i[o] === "1") {
        let l = D(2, o);
        t = c(t, l);
      }
    return t;
  };
  var J = function(e, t) {
    e = B(e, "01"), t = B(t, "01"), e = S(e, t.length), t = S(t, e.length), e = e.split(""), t = t.split("");
    let i = "";
    for (let o = "0"; o < Math.max(e.length, t.length); o++)
      i += (+(e[o] ?? 0) ^ +(t[o] ?? 0)).toString();
    return H(i);
  };
  var Z = function(e) {
    return B(e, "01").length;
  };
  var P = function(...e) {
    if (e = e.flat(), e.length < 2)
      return null;
    let t = e[0].toString() ?? "0";
    e = e.slice(1);
    let i = function(l, r) {
      r = r.toString();
      let s = l.slice(0, 1) === "-", f = r.slice(0, 1) === "-", a = s, n = l, p = r;
      if (l = l.replace("-", ""), r = r.replace("-", ""), r = r.toString(), c(l, "0") !== "0" && c(r, "0") === "0")
        return console.error("A modulus of any negative/positive number by zero is invalid."), null;
      let u = "0", d = "0", j = Math.max(l.split(".")[0].length - r.split(".")[0].length - 1, 0), y = r.indexOf("."), T = "1" + "0".repeat(j);
      y = y === -1 ? 0 : r.length - y - 1;
      let m = y === 0 ? r + "0".repeat(j) : y <= j ? r.replace(".", "") + "0".repeat(j - y) : r.replace(".", "").slice(0, r.replace(".", "").length - y + j) + "." + r.replace(".", "").slice(r.replace(".", "").length - y + j);
      for (; ; ) {
        let w = c(u, m), v = g(w, l);
        if (v === true) {
          u = w, d = c(d, T);
          break;
        } else if (v === l)
          u = w, d = c(d, T);
        else {
          if (j === 0)
            break;
          j -= 1, T = "1" + "0".repeat(j), y = m.indexOf("."), y = y === -1 ? 0 : m.length - y - 1, m = y === 1 && m.slice(m.length - 1) === "0" ? m.slice(0, m.length - 2) : m.slice(m.length - 1) === "0" ? m.slice(0, m.length - 1) : m.replace(".", "").slice(0, m.replace(".", "").length - y - 1) + "." + m.replace(".", "").slice(m.replace(".", "").length - y - 1);
        }
      }
      let x = h(l, u);
      return (a ? "-" : "") + x;
    }, o = function(l) {
      for (l = l.toString(); l.slice(".")[0].length > 1 && l.slice(0, 1) === "0"; )
        l = l.slice(1);
      for (; l.includes(".") && l.slice(l.length - 1) === "0"; )
        l = l.slice(0, l.length - 1);
      t = t === "0" ? "0" : i(t, l);
    };
    return e.map((l) => o(l)), t;
  };
  var L = function(e, t) {
    e = e.toString(), t = t.toString().replace("-", "");
    let i = P(e, t).replace("-", "");
    return e.includes("-") && (i = h(t, i)), c(e, 0) === c(t, 0) ? c(e, 0) : c(h(e, i), t);
  };
  var C = function(e, t = null) {
    e = e.toString();
    let i = [];
    if (t === null)
      for (let o = 0; ; o++) {
        if (typeof e.codePointAt(o) > "u")
          for (; ; )
            if (i.length > 1 && i[0] === "0")
              i = i.slice(1);
            else
              return i.join("");
        let l = e.split("")[o];
        i.push(e.codePointAt(o));
      }
    for (let o = e.length - 1; o >= 0; o--) {
      let l = e.slice(0, 1);
      e = e.slice(1);
      let r = I(D(t.length, o), t.indexOf(l));
      i.push(r);
    }
    return c(i, 0);
  };
  var O = function(e, t = null) {
    if (e = e.toString(), t === null) {
      let r = F(e, 16).map((s) => parseInt(s, 2));
      return String.fromCodePoint([...r].reverse()).toString();
    }
    for (; e.slice(0, 1) === "0" && e.length > 1; )
      e = e.slice(1);
    let i = "0", o = [...e.split("")].reverse();
    for (let l = 0; l < e.length; l++)
      if (o[l] === "1") {
        let r = D(2, l);
        i = c(i, r);
      }
    return B(i, t);
  };
  var E = function(e) {
    let t = [], i = 0;
    for (; ; ) {
      let o = e.codePointAt(i);
      if (typeof o > "u")
        break;
      t.push(o), i++;
    }
    return t;
  };
  var $ = function(...e) {
    return e = e.flat().map((t) => parseInt(t)), String.fromCodePoint(...e);
  };
  var fe = function(e, t, i, o = "") {
    e = e.toString(), t = t === null ? t : t.toString(), i = i === null ? i : i.toString();
    let l = i === null ? null : i.length;
    if (typeof l == "number" && l < 2)
      return null;
    let r = l === null ? null : Z(l), s = l === null ? null : Math.log2(l), f = r === null ? null : L(r, 8) / r, a = s !== r, n = t === null ? null : t.length;
    if (typeof n == "number" && n < 2)
      return null;
    let p = n === null ? null : Z(n), u = n === null ? null : Math.log2(n), d = p === null ? null : L(p, 8) / p, j = u !== p, y = "", T = [];
    if (t === i)
      return e;
    if (t !== null) {
      let m = new RegExp("(" + o + "){1,}$", "g");
      e = e.replaceAll(m, "");
    }
    if (t !== null && i !== null)
      t === "0123456789" ? T = B(e, i) : i === "0123456789" ? T = C(e, t) : T = B(C(e, t), i);
    else if (t === null && i !== null && a === true) {
      let x = E(e).map((v) => S(B(v, "0123456789ABCDEF"), 2)).join(""), w = C(x.toUpperCase(), "0123456789ABCDEF");
      T = B(w, i);
    } else if (t === null && i !== null) {
      let x = E(e).map((v) => S((+v).toString(2), 8)).join(""), w = x + "0".repeat((r - x.length % r) % r);
      T = O(w, i);
    } else if (t !== null && i === null && j === true) {
      let m = C(e, t), x = B(m, "0123456789ABCDEF");
      x.length % 2 === 1 && (x = "0" + x);
      let v = F(x, 2).map((z) => C(z, "0123456789ABCDEF"));
      T = $(v);
    } else if (t !== null && i === null) {
      let m = F(e, d).length, x = B(C(e, t), "01");
      x = S(x, L(x.length, 8));
      let w = F(x.slice(0, m * 8), 8).map((v) => parseInt(v, 2));
      T = $(w);
    }
    return f !== null && (T += o.repeat((f - T.length % f) % f)), T;
  };

  // src/MetaShual.js
  var MetaShual = function(data, salt, strength, len) {
    if (g(len, 0) !== len.toString()) {
      console.error(`Length must be one or above!`);
      return null;
    }
    len = parseInt(len);
    if (g(strength, 0) !== strength.toString()) {
      console.error(`Strength must be one or above!`);
      return null;
    }
    strength = parseInt(strength);
    strength -= 1;
    strength *= 1e3;
    strength += 10;
    if (data.length === 0) {
      console.error(`Data length is invalid`);
      return null;
    }
    if (salt.length === 0) {
      console.error(`Salt length is invalid`);
      return null;
    }
    const bytes = E(data);
    const salts = E(salt);
    const sumM = +c(bytes, 0);
    const sumS = +c(salts, 0);
    let index1 = bytes.length % strength;
    let index2 = salts.length % strength;
    let index3 = (sumM + index2) % strength;
    let index4 = (sumS + index1) % strength;
    index1 = (index2 + index3) % strength;
    index2 = (index2 + index4) % strength;
    index3 = (index1 + index3) % strength;
    index4 = (index1 + index4) % strength;
    let ret = [];
    let fibFactor = 0;
    for (let i = len; i > 0; i--) {
      for (let j = bytes.length; j > 0; j--) {
        for (let k = salts.length; k > 0; k--) {
          let _index1 = index1;
          index1 = parseInt(parseInt(index2) + i + j + bytes[j - 1] + salts[k - 1]) % strength;
          index2 = parseInt(parseInt(index3) + i + k + bytes[j - 1] + salts[k - 1]) % strength;
          index3 = parseInt(parseInt(index4) + j + k + bytes[j - 1] + salts[k - 1]) % strength;
          index4 = parseInt(parseInt(_index1) + i + j + k + bytes[j - 1] + salts[k - 1]) % strength;
          fibFactor = +c(fibFactor, i, j, k, index1, index2, index3, index4);
          strength += 1;
          fibFactor = +P(fibFactor, strength);
          index1 = fibFactor;
          fibFactor = +c(fibFactor, 100);
        }
      }
      index1 %= 16 + 1;
      index2 %= 16 + 1;
      index3 %= 16 + 1;
      index4 %= 16 + 1;
      let f = [...ie(fibFactor)].reverse();
      f = parseInt([f[0].charAt(index1), f[1].charAt(index2), f[2].charAt(index3), f[3].charAt(index4)].join("")) % 26 + 65;
      ret[i - 1] = String.fromCodePoint(f);
    }
    return ret.join("");
  };

  // src/ShualPad.js
  var Pad = function(msg, paddingLengthFactor = 16) {
    msg = msg.toString();
    const diff = PaddingLength(msg, paddingLengthFactor);
    if (+diff === 0) {
      return msg;
    }
    let hash = MetaShual(msg, "p", 1, diff);
    return hash + msg;
  };
  var Unpad = function(paddedText) {
    paddedText = paddedText.toString();
    let len = paddedText.length;
    for (let i = 1; i < len; i++) {
      const maybeHash = paddedText.slice(0, i);
      const msg = paddedText.slice(i);
      let hash = MetaShual(msg, "p", 1, maybeHash.length);
      if (hash === maybeHash) {
        return msg;
      }
    }
    return paddedText;
  };
  var PaddingLength = function(txt, paddingLengthFactor) {
    return Math.max(txt.length, paddingLengthFactor) - txt.length;
  };

  // src/ShualCrypt.js
  var decimal = "0123456789";
  var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var KeyToBytes = function(key, salt, power, len) {
    power = g(power, 1);
    power = power === true ? 1 : power;
    let ret = [];
    for (let i = 0; i < len; i++) {
      let _salt = salt + i;
      let _key = MetaShual(key, _salt, power, 1) + MetaShual(_salt, key, power, 1);
      _key = P(fe(_key, cap, decimal, ""), 256);
      ret.push(_key);
    }
    return ret;
  };
  var Mix = function(keys, bytes) {
    let ret = [];
    for (let j = 0; j < bytes.length; j++) {
      let key = keys[j];
      let shift = key % 8;
      let byte1 = bytes[j];
      let bin1 = S((+byte1).toString(2), 8);
      bin1 = bin1.slice(-shift) + bin1.slice(0, -shift);
      byte1 = parseInt(bin1, 2);
      byte1 = J(byte1, key);
      let bin2 = S((+byte1).toString(2), 8);
      bin2 = bin2.slice(shift) + bin2.slice(0, shift);
      byte1 = parseInt(bin2, 2);
      ret.push(byte1);
    }
    return ret;
  };
  var ShualEncrypt = function(key, salt, message, power = 1) {
    try {
      console.log("%c Shual is a fibonacci based cryptography toolset", `
			color: darkblue;
			background: white;
			box-shadow: inset 0 0 1mm 0 black;
			line-height: 1;
			text-align: center;
			font-size: max(6vmin,4.5vh);
			border: 1mm ridge darkblue;
			padding: 4mm;
		`);
      console.log("%c https://github.com/YaronKoresh/shual", `
			background: transparent;
			box-shadow: inset 0 0 1mm 0 black;
			line-height: 1;
			text-align: center;
			border-radius: 2mm;
			font-size: max(4vmin,3vh);
			padding: 4mm;
		`);
      console.log("%c Made by Yaron Koresh <aharonkoresh1@gmail.com>", `
			color: darkblue;
			background: white;
			box-shadow: inset 0 0 1mm 0 black;
			line-height: 1;
			text-align: center;
			font-size: max(5vmin,3.75vh);
			border: 1mm ridge darkblue;
			padding: 2mm;
		`);
      console.group("Encryption");
      console.time("Overall");
      console.time("Padding");
      message = Pad(message, 8);
      console.timeEnd("Padding");
      console.time("Bases conversion");
      message = fe(message, null, "012", "");
      message = [...message.split("")].reverse().join("");
      message = fe(message, "012", null, "");
      console.timeEnd("Bases conversion");
      console.time("Encoding");
      let bytes = E(message);
      console.timeEnd("Encoding");
      console.time("Key expansion");
      let keys = KeyToBytes(key, salt, power, bytes.length);
      console.timeEnd("Key expansion");
      console.time("Mixing");
      bytes = Mix(keys, bytes);
      console.timeEnd("Mixing");
      console.time("Salt base62 conversion");
      salt = fe(salt, null, re, "");
      console.timeEnd("Salt base62 conversion");
      console.time("Data hex conversion");
      let data = bytes.map((b2) => fe(b2, decimal, te, "")).map((hx) => S(hx, 2)).join("");
      console.timeEnd("Data hex conversion");
      console.timeEnd("Overall");
      console.groupEnd("Encryption");
      return ["SHUAL", "CRYPT", data, salt].join("/");
    } catch (e) {
      console.error(e);
      console.timeEnd("Overall");
      console.groupEnd("Encryption");
      return null;
    }
  };
  var ShualDecrypt = function(key, cipher, power = 1) {
    try {
      console.log("%c Shual is a fibonacci based cryptography toolset", `
			color: darkblue;
			background: white;
			box-shadow: inset 0 0 1mm 0 black;
			line-height: 1;
			text-align: center;
			font-size: max(6vmin,4.5vh);
			border: 1mm ridge darkblue;
			padding: 4mm;
		`);
      console.log("%c https://github.com/YaronKoresh/shual", `
			background: transparent;
			box-shadow: inset 0 0 1mm 0 black;
			line-height: 1;
			text-align: center;
			border-radius: 2mm;
			font-size: max(4vmin,3vh);
			padding: 4mm;
		`);
      console.log("%c Made by Yaron Koresh <aharonkoresh1@gmail.com>", `
			color: darkblue;
			background: white;
			box-shadow: inset 0 0 1mm 0 black;
			line-height: 1;
			text-align: center;
			font-size: max(5vmin,3.75vh);
			border: 1mm ridge darkblue;
			padding: 2mm;
		`);
      console.group("Decryption");
      console.time("Overall");
      console.time("Ciphertext splitted");
      let arr = cipher.split("/");
      console.timeEnd("Ciphertext splitted");
      console.time("Salt base62 conversion");
      let salt = arr[3];
      salt = fe(salt, re, null, "");
      console.timeEnd("Salt base62 conversion");
      console.time("Data from hex");
      let data = arr[2];
      if (data.length % 2 === 1) {
        data = "0" + data;
      }
      let bytes = F(data, 2).map((d) => fe(d, te, decimal, ""));
      console.timeEnd("Data from hex");
      console.time("Key expansion");
      let keys = KeyToBytes(key, salt, power, bytes.length);
      console.timeEnd("Key expansion");
      console.time("Unmixing");
      bytes = Mix(keys, bytes);
      console.timeEnd("Unmixing");
      console.time("Decoding");
      let message = $(bytes);
      console.timeEnd("Decoding");
      console.time("Bases conversion");
      message = fe(message, null, "012", "");
      message = [...message.split("")].reverse().join("");
      message = fe(message, "012", null, "");
      console.timeEnd("Bases conversion");
      console.time("Unpadding");
      message = Unpad(message);
      console.timeEnd("Unpadding");
      console.timeEnd("Overall");
      console.groupEnd("Decryption");
      return message;
    } catch (e) {
      console.error(e);
      console.timeEnd("Overall");
      console.groupEnd("Decryption");
      return null;
    }
  };

  // src/ShualHash.js
  var ShualHash = function(pass, salt, strength = 1, len = 32) {
    let data = MetaShual(pass, salt, strength, len);
    return ["SHUAL", "HASH", data, fe(salt, null, re, "")].join("/");
  };
  return __toCommonJS(shual_exports);
})();
