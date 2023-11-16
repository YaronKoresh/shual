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
    Shual: () => Shual
  });

  // node_modules/@yaronkoresh/math/dist/bundle.min.mjs
  var v = function(e, t, i = "left") {
    for (e = e.toString(); e.length < t; )
      i.toLowerCase() === "left" ? e = "0" + e : i.toLowerCase() === "right" && (e = e + "0");
    return e;
  };
  var g = function(e, t) {
    let i = null, o = false;
    if (e = e.toString(), t = t.toString(), e.includes(".") && t.includes(".")) {
      let l = e.split(".")[1], r = t.split(".")[1];
      l = v(l, r.length, "right"), r = v(r, l.length, "right"), e = e.split(".")[0] + "." + l, t = t.split(".")[0] + "." + r;
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
  var a = function(...e) {
    if (e = e.flat(), e.length < 2)
      return null;
    let t = e[0].toString().split(".")[0] ?? "0", i = e[0].toString().split(".")[1] ?? "0";
    e = e.slice(1), t.slice(0, 1) === "-" && (i = "-" + i);
    let o = function(r, s) {
      Array.isArray(r) || (r = [...r.toString().split("")].reverse()), Array.isArray(s) || (s = [...s.toString().split("")].reverse());
      let f = null, c = null, n = null, p = null;
      p = g([...r].reverse().join(""), 0), p === "0" ? (c = true, r = r.slice(0, r.length - 1)) : c = false, p = g([...s].reverse().join(""), 0), p === "0" ? (n = true, s = s.slice(0, s.length - 1)) : n = false, p = g([...r].reverse().join(""), [...s].reverse().join("")), c && n || c && !n && p === [...r].reverse().join("") || !c && n && p === [...s].reverse().join("") ? f = true : f = false;
      let u = 0;
      for (let d = 0; d < Math.max(r.length, s.length); d++)
        if (!c && n) {
          r = [...h([...r].reverse().join(""), [...s].reverse().join("")).split("")].reverse(), r[r.length - 1] === "-" && r.pop();
          break;
        } else if (c && !n) {
          r = [...h([...s].reverse().join(""), [...r].reverse().join("")).split("")].reverse(), r[r.length - 1] === "-" && r.pop();
          break;
        } else {
          let A = [...(parseInt(r[d] ?? 0) + u + parseInt(s[d] ?? 0)).toString().split("")].reverse();
          r[d] = A[0], u = A[1] ? 1 : 0;
        }
      for (u === 1 && r.push("1"); r[r.length - 1] === "0" && r.length > 1; )
        r = r.slice(0, r.length - 1);
      return f && r.push("-"), [...r].reverse().join("");
    }, l = function(r) {
      let s = t.slice(0, 1) === "-" ? "-" : "";
      i = i.replace("-", "");
      let f = r.toString().split(".")[0] ?? "0", c = r.toString().split(".")[1] ?? "0";
      i = v(i, c.length, "right"), c = v(c, i.length, "right"), f.slice(0, 1) === "-" && c !== 0 && (c = "-" + c), t = o(t, f);
      let n = i.length, p = o(s + i, c);
      p.slice(0, 1) !== "-" && (p = v(p, n)), p.replace("-", "").length > i.length && (p.includes("-") ? (t = "-" + a(t.replace("-", ""), "1"), p = "-" + p.slice(2)) : (t = a(t, "1"), p = p.slice(1))), p.slice(0, 1) === "-" ? (p = p.replace("-", ""), t.slice(0, 1) !== "-" && (t = h(t, "1"), p = h("1" + "0".repeat(i.length), p))) : t.slice(0, 1) === "-" && a(p, 0) !== "0" && (t = a(t, "1"), t.includes("-") || (t = "-" + t), p = h("1" + "0".repeat(i.length), p)), p = v(p, i.length), i = p;
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
      let s = null, f = null, c = null, n = null;
      if (n = g([...l].reverse().join(""), 0), n === "0" ? (f = true, l = l.slice(0, l.length - 1)) : f = false, n = g([...r].reverse().join(""), 0), n === "0" ? (c = true, r = r.slice(0, r.length - 1)) : c = false, n = g([...l].reverse().join(""), [...r].reverse().join("")), f && c && n !== [...r].reverse().join("") || f && !c || !f && !c && n === [...r].reverse().join("") ? s = true : s = false, n === [...r].reverse().join("")) {
        let u = r;
        r = l, l = u;
      }
      let p = 0;
      for (let u = 0; u < Math.max(l.length, r.length); u++)
        if (!f && c || f && !c) {
          l = [...a([...l].reverse().join(""), [...r].reverse().join("")).split("")].reverse();
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
      i = v(i, f.length, "right"), f = v(f, i.length, "right"), s.slice(0, 1) === "-" && f !== 0 && (f = "-" + f), t = o(t, s);
      let c = i.length, n = o(r + i, f);
      n.slice(0, 1) !== "-" && (n = v(n, c)), n.replace("-", "").length > i.length && (n.includes("-") ? (t = "-" + a(t.replace("-", ""), "1"), n = "-" + n.slice(2)) : (t = a(t, "1"), n = n.slice(1))), n.slice(0, 1) === "-" ? (n = n.replace("-", ""), t.slice(0, 1) !== "-" && (t = h(t, "1"), n = h("1" + "0".repeat(i.length), n))) : t.slice(0, 1) === "-" && a(n, 0) !== "0" && (t = a(t, "1"), t.includes("-") || (t = "-" + t), n = h("1" + "0".repeat(i.length), n)), n = v(n, i.length), i = n;
    }); i.slice(i.length - 1) === "0" && i.length > 0; )
      i = i.slice(0, i.length - 1);
    return i.length === 0 ? t : [t, i].join(".");
  };
  var ie = function(e) {
    e = h(e, 2);
    let t = "0", i = "1", o = ["0", "1"];
    for (let l = "0"; g(l, e) === e; l = a(l, 1))
      i = a(i, t), t = h(i, t), o.push(i);
    return e.includes("-") && (o = o.slice(0, parseInt(e))), o;
  };
  var P = function(...e) {
    if (e = e.flat(), e.length < 2)
      return null;
    let t = e[0].toString() ?? "0";
    e = e.slice(1);
    let i = function(l, r) {
      r = r.toString();
      let s = l.slice(0, 1) === "-", f = r.slice(0, 1) === "-", c = s, n = l, p = r;
      if (l = l.replace("-", ""), r = r.replace("-", ""), r = r.toString(), a(l, "0") !== "0" && a(r, "0") === "0")
        return console.error("A modulus of any negative/positive number by zero is invalid."), null;
      let u = "0", d = "0", A = Math.max(l.split(".")[0].length - r.split(".")[0].length - 1, 0), x = r.indexOf("."), I = "1" + "0".repeat(A);
      x = x === -1 ? 0 : r.length - x - 1;
      let m = x === 0 ? r + "0".repeat(A) : x <= A ? r.replace(".", "") + "0".repeat(A - x) : r.replace(".", "").slice(0, r.replace(".", "").length - x + A) + "." + r.replace(".", "").slice(r.replace(".", "").length - x + A);
      for (; ; ) {
        let w = a(u, m), S = g(w, l);
        if (S === true) {
          u = w, d = a(d, I);
          break;
        } else if (S === l)
          u = w, d = a(d, I);
        else {
          if (A === 0)
            break;
          A -= 1, I = "1" + "0".repeat(A), x = m.indexOf("."), x = x === -1 ? 0 : m.length - x - 1, m = x === 1 && m.slice(m.length - 1) === "0" ? m.slice(0, m.length - 2) : m.slice(m.length - 1) === "0" ? m.slice(0, m.length - 1) : m.replace(".", "").slice(0, m.replace(".", "").length - x - 1) + "." + m.replace(".", "").slice(m.replace(".", "").length - x - 1);
        }
      }
      let B = h(l, u);
      return (c ? "-" : "") + B;
    }, o = function(l) {
      for (l = l.toString(); l.slice(".")[0].length > 1 && l.slice(0, 1) === "0"; )
        l = l.slice(1);
      for (; l.includes(".") && l.slice(l.length - 1) === "0"; )
        l = l.slice(0, l.length - 1);
      t = t === "0" ? "0" : i(t, l);
    };
    return e.map((l) => o(l)), t;
  };
  var Z = function(e) {
    return [...new TextEncoder().encode(e)];
  };

  // src/Shual.js
  var Shual = function(pass, salt, strength = 1, len = 64) {
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
    if (pass.length === 0) {
      console.error(`Password is invalid`);
      return null;
    }
    if (salt.length === 0) {
      console.error(`Salt is invalid`);
      return null;
    }
    const passes = Z(pass);
    const salts = Z(salt);
    const sumM = +a(passes, 0);
    const sumS = +a(salts, 0);
    let index1 = passes.length % strength;
    let index2 = salts.length % strength;
    let index3 = (sumM + index2) % strength;
    let index4 = (sumS + index1) % strength;
    index1 = (index2 + index3) % strength;
    index2 = (index2 + index4) % strength;
    index3 = (index1 + index3) % strength;
    index4 = (index1 + index4) % strength;
    let history = [];
    let res = [];
    let fibFactor = 0;
    for (let i = len; i > 0; i--) {
      for (let j = passes.length; j > 0; j--) {
        for (let k = salts.length; k > 0; k--) {
          let _index1 = index1;
          index1 = parseInt(parseInt(index2) + i + j + passes[j - 1] + salts[k - 1]) % strength;
          index2 = parseInt(parseInt(index3) + i + k + passes[j - 1] + salts[k - 1]) % strength;
          index3 = parseInt(parseInt(index4) + j + k + passes[j - 1] + salts[k - 1]) % strength;
          index4 = parseInt(parseInt(_index1) + i + j + k + passes[j - 1] + salts[k - 1]) % strength;
          fibFactor = +a(fibFactor, i, j, k, index1, index2, index3, index4);
          strength += 1;
          fibFactor = +P(fibFactor, strength);
          index1 = fibFactor;
          fibFactor = +a(fibFactor, 100);
        }
      }
      index1 %= 16 + 1;
      index2 %= 16 + 1;
      index3 %= 16 + 1;
      index4 %= 16 + 1;
      let f = [...ie(fibFactor)].reverse();
      f = parseInt([f[0].charAt(index1), f[1].charAt(index2), f[2].charAt(index3), f[3].charAt(index4)].join("")) % 26 + 65;
      res[i - 1] = String.fromCodePoint(f);
    }
    return "SHUAL:" + salt + ":" + res.join("");
  };
  return __toCommonJS(shual_exports);
})();
