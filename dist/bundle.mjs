// src/Shual.js
import { Multiply, Greater, Mod, Zeros, Add, StringToBytes, BytesToString, Split, Fibonacci } from "@yaronkoresh/math";
var Shual = function(msg, salt, len = 8) {
  len = len.toString();
  if (Greater(len, 0) !== len) {
    console.error(`The Length must be one or above!`);
    return null;
  }
  len = Multiply(len, 3);
  if (msg.length === 0) {
    console.error(`The selected password is invalid`);
    return null;
  }
  if (salt.length === 0) {
    console.error(`The selected salt is invalid`);
    return null;
  }
  const msgs = StringToBytes(msg);
  const sum = Add(msgs, 0);
  const salts = StringToBytes(salt);
  const sumS = Add(salts, 0);
  let fibFactor = 128;
  let m = [];
  let mfi = 0;
  for (let j = msgs[0]; j < len * 2 + msgs[0]; j += 2) {
    for (let i = 0; i < msgs.length * 3; i += 3) {
      let index1 = (msgs.length + i) % 8;
      let index2 = (sum + i) % 7;
      let index3 = Math.abs(index1 + index2 - j) % 8;
      let index4 = Math.abs((index3 + 1) * 2) % 7;
      fibFactor = Add(Mod(Add(fibFactor, i, j, 1, index1, index2, index3, index4), 96), 96);
      let fib = [...Fibonacci(fibFactor)].reverse().slice(0, 64).map((f2) => [f2.charAt(index1), f2.charAt(index2), f2.charAt(index3), f2.charAt(index4)]).flat();
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
      fibFactor = Add(Mod(Add(fibFactor, i, j, 1, index1, index2, index3, index4), 96), 96);
      let fib = [...Fibonacci(fibFactor)].reverse().slice(0, 64).map((f2) => [f2.charAt(index1), f2.charAt(index2), f2.charAt(index3), f2.charAt(index4)]).flat();
      let value = salts[i / 2] % 256;
      let f = fib[value];
      s[j] = (s[j] ?? 0) + f;
      s[j] %= 10;
    }
  }
  s = s.join("");
  let res = Zeros(Add(m, s), len);
  res = res.slice(res.length - len);
  let bts = Split(res, 3).map((s2) => Add(Mod(Add(s2, 0), 95), 32));
  return BytesToString(bts);
};
export {
  Shual
};
