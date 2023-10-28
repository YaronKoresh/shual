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
var Shual = function(msg, salt, strength = 8, len = 8) {
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
  const msgs = (0, import_math.StringToBytes)(msg);
  const salts = (0, import_math.StringToBytes)(salt);
  const sumM = +(0, import_math.Add)(msgs, 0);
  const sumS = +(0, import_math.Add)(salts, 0);
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
        fibFactor = +(0, import_math.Add)(fibFactor, i, j, k, index1, index2, index3, index4);
        fibFactor = +(0, import_math.Mod)(fibFactor, strength);
        fibFactor = +(0, import_math.Add)(fibFactor, 100);
      }
    }
    index1 %= 16 + 1;
    index2 %= 16 + 1;
    index3 %= 16 + 1;
    index4 %= 16 + 1;
    let f = [...(0, import_math.Fibonacci)(fibFactor)].reverse();
    f = f[0].charAt(index1) + f[1].charAt(index2) + f[2].charAt(index3) + f[3].charAt(index4);
    res[i - 1] = +f;
  }
  res = res.map((r) => r % 95 + 32);
  return (0, import_math.BytesToString)(res);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Shual
});
