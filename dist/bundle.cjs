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
module.exports = __toCommonJS(shual_exports);

// src/Shual.js
var import_math = require("@yaronkoresh/math");
var Shual = function(pass, salt, strength = 1, len = 64) {
  if ((0, import_math.Greater)(len, 0) !== len.toString()) {
    console.error(`Length must be one or above!`);
    return null;
  }
  len = parseInt(len);
  if ((0, import_math.Greater)(strength, 0) !== strength.toString()) {
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
  const passes = (0, import_math.StringToBytes)(pass);
  const salts = (0, import_math.StringToBytes)(salt);
  const sumM = +(0, import_math.Add)(passes, 0);
  const sumS = +(0, import_math.Add)(salts, 0);
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
        fibFactor = +(0, import_math.Add)(fibFactor, i, j, k, index1, index2, index3, index4);
        strength += 1;
        fibFactor = +(0, import_math.Mod)(fibFactor, strength);
        index1 = fibFactor;
        fibFactor = +(0, import_math.Add)(fibFactor, 100);
      }
    }
    index1 %= 16 + 1;
    index2 %= 16 + 1;
    index3 %= 16 + 1;
    index4 %= 16 + 1;
    let f = [...(0, import_math.Fibonacci)(fibFactor)].reverse();
    f = parseInt([f[0].charAt(index1), f[1].charAt(index2), f[2].charAt(index3), f[3].charAt(index4)].join("")) % 26 + 65;
    res[i - 1] = String.fromCodePoint(f);
  }
  return "SHUAL:" + salt + ":" + res.join("");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Shual
});
