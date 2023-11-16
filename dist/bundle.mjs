// src/Shual.js
import { Multiply, Greater, Mod, Zeros, Add, StringToBytes, BytesToString, Split, Fibonacci } from "@yaronkoresh/math";
var Shual = function(pass, salt, strength = 1, len = 64) {
  if (Greater(len, 0) !== len.toString()) {
    console.error(`Length must be one or above!`);
    return null;
  }
  len = parseInt(len);
  if (Greater(strength, 0) !== strength.toString()) {
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
  const passes = StringToBytes(pass);
  const salts = StringToBytes(salt);
  const sumM = +Add(passes, 0);
  const sumS = +Add(salts, 0);
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
        fibFactor = +Add(fibFactor, i, j, k, index1, index2, index3, index4);
        strength += 1;
        fibFactor = +Mod(fibFactor, strength);
        index1 = fibFactor;
        fibFactor = +Add(fibFactor, 100);
      }
    }
    index1 %= 16 + 1;
    index2 %= 16 + 1;
    index3 %= 16 + 1;
    index4 %= 16 + 1;
    let f = [...Fibonacci(fibFactor)].reverse();
    f = parseInt([f[0].charAt(index1), f[1].charAt(index2), f[2].charAt(index3), f[3].charAt(index4)].join("")) % 26 + 65;
    res[i - 1] = String.fromCodePoint(f);
  }
  return "SHUAL:" + salt + ":" + res.join("");
};
export {
  Shual
};
