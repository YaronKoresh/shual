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
  var v = function(e, t, r = "left") {
    for (e = e.toString(); e.length < t; )
      r.toLowerCase() === "left" ? e = "0" + e : r.toLowerCase() === "right" && (e = e + "0");
    return e;
  };
  var g = function(e, t) {
    let r = null, o = false;
    if (e = e.toString(), t = t.toString(), e.includes(".") && t.includes(".")) {
      let l = e.split(".")[1], i = t.split(".")[1];
      l = v(l, i.length, "right"), i = v(i, l.length, "right"), e = e.split(".")[0] + "." + l, t = t.split(".")[0] + "." + i;
    } else
      e.includes(".") ? t += "." + "0".repeat(e.split(".")[1].length) : t.includes(".") && (e += "." + "0".repeat(t.split(".")[1].length));
    if (e = e.split(""), t = t.split(""), e[0] === "-" && t[0] !== "-")
      r = t.join("");
    else if (t[0] === "-" && e[0] !== "-")
      r = e.join("");
    else if (e[0] === "-" && (e = e.slice(1), t = t.slice(1), o = true), e.length > t.length)
      r = o ? "-" + t.join("") : e.join("");
    else if (e.length < t.length)
      r = o ? "-" + e.join("") : t.join("");
    else
      for (let l = 0; l < e.length; l++) {
        if (e[l] !== "." && t[l] === ".") {
          r = o ? "-" + t.join("") : e.join("");
          break;
        }
        if (e[l] === "." && t[l] !== ".") {
          r = o ? "-" + e.join("") : t.join("");
          break;
        }
        if (+e[l] > +t[l]) {
          r = o ? "-" + t.join("") : e.join("");
          break;
        }
        if (+e[l] < +t[l]) {
          r = o ? "-" + e.join("") : t.join("");
          break;
        }
      }
    if (r === null)
      return true;
    for (; r.includes(".") && r.slice(r.length - 1) === "0"; )
      r = r.slice(0, r.length - 1);
    return r.slice(r.length - 1) === "." && (r = r.slice(0, r.length - 1)), r;
  };
  var a = function(...e) {
    if (e = e.flat(), e.length < 2)
      return null;
    let t = e[0].toString().split(".")[0] ?? "0", r = e[0].toString().split(".")[1] ?? "0";
    e = e.slice(1), t.slice(0, 1) === "-" && (r = "-" + r);
    let o = function(i, s) {
      Array.isArray(i) || (i = [...i.toString().split("")].reverse()), Array.isArray(s) || (s = [...s.toString().split("")].reverse());
      let f = null, p = null, n = null, c = null;
      c = g([...i].reverse().join(""), 0), c === "0" ? (p = true, i = i.slice(0, i.length - 1)) : p = false, c = g([...s].reverse().join(""), 0), c === "0" ? (n = true, s = s.slice(0, s.length - 1)) : n = false, c = g([...i].reverse().join(""), [...s].reverse().join("")), p && n || p && !n && c === [...i].reverse().join("") || !p && n && c === [...s].reverse().join("") ? f = true : f = false;
      let u = 0;
      for (let d = 0; d < Math.max(i.length, s.length); d++)
        if (!p && n) {
          i = [...h([...i].reverse().join(""), [...s].reverse().join("")).split("")].reverse(), i[i.length - 1] === "-" && i.pop();
          break;
        } else if (p && !n) {
          i = [...h([...s].reverse().join(""), [...i].reverse().join("")).split("")].reverse(), i[i.length - 1] === "-" && i.pop();
          break;
        } else {
          let y = [...(parseInt(i[d] ?? 0) + u + parseInt(s[d] ?? 0)).toString().split("")].reverse();
          i[d] = y[0], u = y[1] ? 1 : 0;
        }
      for (u === 1 && i.push("1"); i[i.length - 1] === "0" && i.length > 1; )
        i = i.slice(0, i.length - 1);
      return f && i.push("-"), [...i].reverse().join("");
    }, l = function(i) {
      let s = t.slice(0, 1) === "-" ? "-" : "";
      r = r.replace("-", "");
      let f = i.toString().split(".")[0] ?? "0", p = i.toString().split(".")[1] ?? "0";
      r = v(r, p.length, "right"), p = v(p, r.length, "right"), f.slice(0, 1) === "-" && p !== 0 && (p = "-" + p), t = o(t, f);
      let n = r.length, c = o(s + r, p);
      c.slice(0, 1) !== "-" && (c = v(c, n)), c.replace("-", "").length > r.length && (c.includes("-") ? (t = "-" + a(t.replace("-", ""), "1"), c = "-" + c.slice(2)) : (t = a(t, "1"), c = c.slice(1))), c.slice(0, 1) === "-" ? (c = c.replace("-", ""), t.slice(0, 1) !== "-" && (t = h(t, "1"), c = h("1" + "0".repeat(r.length), c))) : t.slice(0, 1) === "-" && a(c, 0) !== "0" && (t = a(t, "1"), t.includes("-") || (t = "-" + t), c = h("1" + "0".repeat(r.length), c)), c = v(c, r.length), r = c;
    };
    for (e.map((i) => l(i)); r.slice(r.length - 1) === "0" && r.length > 0; )
      r = r.slice(0, r.length - 1);
    return r.length === 0 ? t : [t, r].join(".");
  };
  var h = function(...e) {
    if (e = e.flat(), e.length < 2)
      return null;
    let t = e[0].toString().split(".")[0] ?? "0", r = e[0].toString().split(".")[1] ?? "0";
    e = e.slice(1), t.slice(0, 1) === "-" && (r = "-" + r);
    let o = function(l, i) {
      Array.isArray(l) || (l = [...l.toString().split("")].reverse()), Array.isArray(i) || (i = [...i.toString().split("")].reverse());
      let s = null, f = null, p = null, n = null;
      if (n = g([...l].reverse().join(""), 0), n === "0" ? (f = true, l = l.slice(0, l.length - 1)) : f = false, n = g([...i].reverse().join(""), 0), n === "0" ? (p = true, i = i.slice(0, i.length - 1)) : p = false, n = g([...l].reverse().join(""), [...i].reverse().join("")), f && p && n !== [...i].reverse().join("") || f && !p || !f && !p && n === [...i].reverse().join("") ? s = true : s = false, n === [...i].reverse().join("")) {
        let u = i;
        i = l, l = u;
      }
      let c = 0;
      for (let u = 0; u < Math.max(l.length, i.length); u++)
        if (!f && p || f && !p) {
          l = [...a([...l].reverse().join(""), [...i].reverse().join("")).split("")].reverse();
          break;
        } else {
          let d = [...(parseInt(l[u] ?? 0) - c - parseInt(i[u] ?? 0)).toString().split("")].reverse();
          l[u] = d.length === 3 ? "0" : d.length === 2 ? 10 - +d[0] : d[0], c = d.length > 1 ? 1 : 0;
        }
      for (; l[l.length - 1] === "0" && l.length > 1; )
        l = l.slice(0, l.length - 1);
      return s && l.push("-"), [...l].reverse().join("");
    };
    for (e.map(function(l) {
      let i = t.slice(0, 1) === "-" ? "-" : "";
      r = r.replace("-", "");
      let s = l.toString().split(".")[0] ?? "0", f = l.toString().split(".")[1] ?? "0";
      r = v(r, f.length, "right"), f = v(f, r.length, "right"), s.slice(0, 1) === "-" && f !== 0 && (f = "-" + f), t = o(t, s);
      let p = r.length, n = o(i + r, f);
      n.slice(0, 1) !== "-" && (n = v(n, p)), n.replace("-", "").length > r.length && (n.includes("-") ? (t = "-" + a(t.replace("-", ""), "1"), n = "-" + n.slice(2)) : (t = a(t, "1"), n = n.slice(1))), n.slice(0, 1) === "-" ? (n = n.replace("-", ""), t.slice(0, 1) !== "-" && (t = h(t, "1"), n = h("1" + "0".repeat(r.length), n))) : t.slice(0, 1) === "-" && a(n, 0) !== "0" && (t = a(t, "1"), t.includes("-") || (t = "-" + t), n = h("1" + "0".repeat(r.length), n)), n = v(n, r.length), r = n;
    }); r.slice(r.length - 1) === "0" && r.length > 0; )
      r = r.slice(0, r.length - 1);
    return r.length === 0 ? t : [t, r].join(".");
  };
  var ie = function(e) {
    e = h(e, 2);
    let t = "0", r = "1", o = ["0", "1"];
    for (let l = "0"; g(l, e) === e; l = a(l, 1))
      r = a(r, t), t = h(r, t), o.push(r);
    return e.includes("-") && (o = o.slice(0, parseInt(e))), o;
  };
  var P = function(...e) {
    if (e = e.flat(), e.length < 2)
      return null;
    let t = e[0].toString() ?? "0";
    e = e.slice(1);
    let r = function(l, i) {
      i = i.toString();
      let s = l.slice(0, 1) === "-", f = i.slice(0, 1) === "-", p = s, n = l, c = i;
      if (l = l.replace("-", ""), i = i.replace("-", ""), i = i.toString(), a(l, "0") !== "0" && a(i, "0") === "0")
        return console.error("A modulus of any negative/positive number by zero is invalid."), null;
      let u = "0", d = "0", y = Math.max(l.split(".")[0].length - i.split(".")[0].length - 1, 0), x = i.indexOf("."), T = "1" + "0".repeat(y);
      x = x === -1 ? 0 : i.length - x - 1;
      let m = x === 0 ? i + "0".repeat(y) : x <= y ? i.replace(".", "") + "0".repeat(y - x) : i.replace(".", "").slice(0, i.replace(".", "").length - x + y) + "." + i.replace(".", "").slice(i.replace(".", "").length - x + y);
      for (; ; ) {
        let B = a(u, m), S = g(B, l);
        if (S === true) {
          u = B, d = a(d, T);
          break;
        } else if (S === l)
          u = B, d = a(d, T);
        else {
          if (y === 0)
            break;
          y -= 1, T = "1" + "0".repeat(y), x = m.indexOf("."), x = x === -1 ? 0 : m.length - x - 1, m = x === 1 && m.slice(m.length - 1) === "0" ? m.slice(0, m.length - 2) : m.slice(m.length - 1) === "0" ? m.slice(0, m.length - 1) : m.replace(".", "").slice(0, m.replace(".", "").length - x - 1) + "." + m.replace(".", "").slice(m.replace(".", "").length - x - 1);
        }
      }
      let j = h(l, u);
      return (p ? "-" : "") + j;
    }, o = function(l) {
      for (l = l.toString(); l.slice(".")[0].length > 1 && l.slice(0, 1) === "0"; )
        l = l.slice(1);
      for (; l.includes(".") && l.slice(l.length - 1) === "0"; )
        l = l.slice(0, l.length - 1);
      t = t === "0" ? "0" : r(t, l);
    };
    return e.map((l) => o(l)), t;
  };
  var U = function(e) {
    return [...new TextEncoder().encode(e)];
  };
  var Z = function(...e) {
    return e = e.flat().map((r) => parseInt(r)), e = new Uint8Array(e), new TextDecoder().decode(e);
  };

  // src/Shual.js
  var Shual = function(msg, salt, strength = 8, len = 8) {
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
    if (len > parseInt(strength)) {
      console.error(`Strength must be greater than length!`);
      return null;
    }
    strength *= 100;
    if (msg.length === 0) {
      console.error(`Password is invalid`);
      return null;
    }
    if (salt.length === 0) {
      console.error(`Salt is invalid`);
      return null;
    }
    const msgs = U(msg);
    const salts = U(salt);
    const sumM = +a(msgs, 0);
    const sumS = +a(salts, 0);
    let index1 = msgs.length % strength;
    let index2 = salts.length % strength;
    let index3 = (sumM + index2) % strength;
    let index4 = (sumS + index1) % strength;
    index1 = (index2 + index3) % strength;
    index2 = (index2 + index4) % strength;
    index3 = (index1 + index3) % strength;
    index4 = (index1 + index4) % strength;
    let res = [];
    let fibFactor = 0;
    for (let i = len; i > 0; i--) {
      for (let j = msgs.length; j > 0; j--) {
        for (let k = salts.length; k > 0; k--) {
          let _index1 = index1;
          index1 = parseInt(parseInt(index2) + i + j + msgs[j - 1] + salts[k - 1]) % strength;
          index2 = parseInt(parseInt(index3) + i + k + msgs[j - 1] + salts[k - 1]) % strength;
          index3 = parseInt(parseInt(index4) + j + k + msgs[j - 1] + salts[k - 1]) % strength;
          index4 = parseInt(parseInt(_index1) + i + j + k + msgs[j - 1] + salts[k - 1]) % strength;
          fibFactor = +a(fibFactor, i, j, k, index1, index2, index3, index4);
          fibFactor = +P(fibFactor, strength);
          fibFactor = +a(fibFactor, 100);
        }
      }
      index1 %= 16 + 1;
      index2 %= 16 + 1;
      index3 %= 16 + 1;
      index4 %= 16 + 1;
      let f = [...ie(fibFactor)].reverse();
      f = f[0].charAt(index1) + f[1].charAt(index2) + f[2].charAt(index3) + f[3].charAt(index4);
      res[i - 1] = +f;
    }
    res = res.map((r) => r % 95 + 32);
    return Z(res);
  };
  return __toCommonJS(shual_exports);
})();
