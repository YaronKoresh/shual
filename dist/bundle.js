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
  var Y = function(e) {
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
  var A = function(e, t, r = "6") {
    r = a(r, 0);
    let o = [e, t];
    if (o.length < 2)
      return null;
    let l = o[0].toString() ?? "0";
    o = o.slice(1);
    let i = function(n, c) {
      c = c.toString();
      let u = n.slice(0, 1) === "-", d = c.slice(0, 1) === "-", y = !u && d || u && !d, x = n, T = c;
      if (n = n.replace("-", ""), c = c.replace("-", ""), c = c.toString(), a(n, "0") !== "0" && a(c, "0") === "0")
        return console.error("A division of any negative/positive number by zero is invalid."), null;
      let m = "0", j = "0", B = Math.max(n.split(".")[0].length - c.split(".")[0].length - 1, 0), S = c.indexOf("."), V = "1" + "0".repeat(B);
      S = S === -1 ? 0 : c.length - S - 1;
      let R = S === 0 ? c + "0".repeat(B) : S <= B ? c.replace(".", "") + "0".repeat(B - S) : c.replace(".", "").slice(0, c.replace(".", "").length - S + B) + "." + c.replace(".", "").slice(c.replace(".", "").length - S + B);
      for (; ; ) {
        let C = a(m, R), D = g(C, n);
        if (D === true) {
          m = C, j = a(j, V);
          break;
        } else if (D === n)
          m = C, j = a(j, V);
        else {
          if (B === 0)
            break;
          B -= 1, V = "1" + "0".repeat(B), S = R.indexOf("."), S = S === -1 ? 0 : R.length - S - 1, R = S === 1 && R.slice(R.length - 1) === "0" ? R.slice(0, R.length - 2) : R.slice(R.length - 1) === "0" ? R.slice(0, R.length - 1) : R.replace(".", "").slice(0, R.replace(".", "").length - S - 1) + "." + R.replace(".", "").slice(R.replace(".", "").length - S - 1);
        }
      }
      if (m !== n && g(r, 0) === r) {
        let C = h(n, m), D = "", Q = false;
        for (; Q === false; ) {
          let N = "0", X = "0", W = I(C, "10"), O = a(N, c);
          for (; g(O, W) !== O; )
            N = O, O = a(N, c), X = a(X, "1");
          if (D += X, C === "0" || D.length >= parseInt(r)) {
            for (; D.slice(D.length - 1) === "0"; )
              D = D.slice(0, D.length - 1);
            return D !== "" && (D = "." + D), console.log(`Dividing ${x} by ${T} into ` + (y ? "-" : "") + `${j}${D}`), (y ? "-" : "") + `${j}${D}`;
          }
          C = h(W, N), Q = Y(D);
        }
        return (y ? "-" : "") + `${j}.${D.slice(0, D.length / 2)}`;
      }
      return (y ? "-" : "") + j;
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
      l = i(l, n);
    };
    o.map((n) => s(n));
    let f = l.split(".")[0] ?? "0", p = l.split(".")[1] ?? "0";
    for (; p.length > 0 && p.slice(p.length - 1) === "0"; )
      p = p.slice(0, p.length - 1);
    return p.length === 0 ? f : [f, p].join(".");
  };
  var b = function(e, t) {
    let r = function(l, i) {
      let s = i;
      for (; s.length > 1; )
        s = a(s.split(""));
      s = ["3", "6", "9"].includes(s);
      let f = ["0", "5"].includes(i.slice(i.length - 1)) && i !== "0", p = ["2", "4", "6", "8"].includes(i.slice(i.length - 1));
      return f ? (i = A(i, 5), l = a(l, l, l, l, l), r(l, i)) : s ? (i = A(i, 3), l = a(l, l, l), r(l, i)) : p ? (i = A(i, 2), l = a(l, l), r(l, i)) : { high: l, low: i };
    };
    return r(e, t);
  };
  var I = function(...e) {
    if (e = e.flat(), e.length < 2)
      return null;
    let t = e[0].toString().split(".")[0] ?? "0", r = e[0].toString().split(".")[1] ?? "0";
    e = e.slice(1);
    let o = function(i, s) {
      if (s = a(s, 0), i = a(i, 0), a(i, 0) === "0" || a(s, 0) === "0")
        return "0";
      if (g(i, s) === s) {
        let c = s;
        s = i, i = c;
      }
      let p = b(i, s), n = "0";
      for (; g("0", p.low) === p.low; )
        n = a(n, p.high), p.low = h(p.low, 1);
      return n;
    }, l = function(i) {
      let s = i.toString().split(".")[0] ?? "0", f = i.toString().split(".")[1] ?? "0", p = t.slice(0, 1) === "-", n = s.slice(0, 1) === "-", c = !p && n || p && !n;
      for (t = t.replace("-", ""), s = s.replace("-", ""); r.slice(r.length - 1) === "0" && r.length > 0; )
        r = r.slice(0, r.length - 1);
      for (; f.slice(f.length - 1) === "0" && f.length > 0; )
        f = f.slice(0, f.length - 1);
      r = v(r, f.length, "right"), f = v(f, r.length, "right");
      let u = r.length * 2, d = t + r, y = s + f, x = o(d, y);
      x === "0" ? (t = "0", r = "0") : (t = x.slice(0, x.length - u), t = (t === "" ? c ? "-0" : "0" : c ? "-" : "") + t, r = x.slice(x.length - u));
    };
    for (e.map((i) => l(i)); r.slice(r.length - 1) === "0" && r.length > 0; )
      r = r.slice(0, r.length - 1);
    return r.length === 0 ? t : [t, r].join(".");
  };
  var $ = function(e, t) {
    e = e.toString();
    for (var r = [], o = 0; o < e.length; o += t)
      r.push(e.slice(o, o + t));
    return r;
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
  var Shual = function(msg, salt, len = 8) {
    len = len.toString();
    if (g(len, 0) !== len) {
      console.error(`The Length must be one or above!`);
      return null;
    }
    len = I(len, 3);
    if (msg.length === 0) {
      console.error(`The selected password is invalid`);
      return null;
    }
    if (salt.length === 0) {
      console.error(`The selected salt is invalid`);
      return null;
    }
    const msgs = U(msg);
    const sum = a(msgs, 0);
    const salts = U(salt);
    const sumS = a(salts, 0);
    let fibFactor = 128;
    let m = [];
    let mfi = 0;
    for (let j = msgs[0]; j < len * 2 + msgs[0]; j += 2) {
      for (let i = 0; i < msgs.length * 3; i += 3) {
        let index1 = (msgs.length + i) % 8;
        let index2 = (sum + i) % 7;
        let index3 = Math.abs(index1 + index2 - j) % 8;
        let index4 = Math.abs((index3 + 1) * 2) % 7;
        fibFactor = a(P(a(fibFactor, i, j, 1, index1, index2, index3, index4), 96), 96);
        let fib = [...ie(fibFactor)].reverse().slice(0, 64).map((f2) => [f2.charAt(index1), f2.charAt(index2), f2.charAt(index3), f2.charAt(index4)]).flat();
        let value = msgs[i / 3] % 256;
        let f = fib[value];
        m[j] = (m[j] ?? 0) + f;
        m[j] %= 10;
      }
    }
    m = m.join("");
    let s = [];
    let sfi = 0;
    for (let j = salts[0]; j < len * 3 + salts[0]; j += 3) {
      for (let i = 0; i < salts.length * 2; i += 2) {
        let index1 = (salts.length + i) % 8;
        let index2 = (sumS + i) % 7;
        let index3 = Math.abs(index1 + index2 - j) % 8;
        let index4 = Math.abs((index3 + 1) * 2) % 7;
        fibFactor = a(P(a(fibFactor, i, j, 1, index1, index2, index3, index4), 96), 96);
        let fib = [...ie(fibFactor)].reverse().slice(0, 64).map((f2) => [f2.charAt(index1), f2.charAt(index2), f2.charAt(index3), f2.charAt(index4)]).flat();
        let value = salts[i / 2] % 256;
        let f = fib[value];
        s[j] = (s[j] ?? 0) + f;
        s[j] %= 10;
      }
    }
    s = s.join("");
    let res = v(a(m, s), len);
    res = res.slice(res.length - len);
    let bts = $(res, 3).map((s2) => a(P(a(s2, 0), 95), 32));
    return Z(bts);
  };
  return __toCommonJS(shual_exports);
})();
