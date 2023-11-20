// src/ShualCrypt.js
import { Xor, Zeros as Zeros2, Split as Split2, Mod as Mod2, Power, Greater as Greater2, StringToBytes as StringToBytes2, BytesToString as BytesToString2, Bases as Bases2, hex, base62 as base622 } from "@yaronkoresh/math";

// src/MetaShual.js
import { Multiply, Bases, Greater, Mod, Zeros, Add, StringToBytes, BytesToString, Split, Fibonacci, base62 } from "@yaronkoresh/math";
var MetaShual = function(data, salt, strength, len) {
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
  if (data.length === 0) {
    console.error(`Data length is invalid`);
    return null;
  }
  if (salt.length === 0) {
    console.error(`Salt length is invalid`);
    return null;
  }
  const bytes = StringToBytes(data);
  const salts = StringToBytes(salt);
  const sumM = +Add(bytes, 0);
  const sumS = +Add(salts, 0);
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
  power = Greater2(power, 1);
  power = power === true ? 1 : power;
  let ret = [];
  for (let i = 0; i < len; i++) {
    let _salt = salt + i;
    let _key = MetaShual(key, _salt, power, 1) + MetaShual(_salt, key, power, 1);
    _key = Mod2(Bases2(_key, cap, decimal, ""), 256);
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
    let bin1 = Zeros2((+byte1).toString(2), 8);
    bin1 = bin1.slice(-shift) + bin1.slice(0, -shift);
    byte1 = parseInt(bin1, 2);
    byte1 = Xor(byte1, key);
    let bin2 = Zeros2((+byte1).toString(2), 8);
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
    message = Bases2(message, null, "012", "");
    message = [...message.split("")].reverse().join("");
    message = Bases2(message, "012", null, "");
    console.timeEnd("Bases conversion");
    console.time("Encoding");
    let bytes = StringToBytes2(message);
    console.timeEnd("Encoding");
    console.time("Key expansion");
    let keys = KeyToBytes(key, salt, power, bytes.length);
    console.timeEnd("Key expansion");
    console.time("Mixing");
    bytes = Mix(keys, bytes);
    console.timeEnd("Mixing");
    console.time("Salt base62 conversion");
    salt = Bases2(salt, null, base622, "");
    console.timeEnd("Salt base62 conversion");
    console.time("Data hex conversion");
    let data = bytes.map((b) => Bases2(b, decimal, hex, "")).map((hx) => Zeros2(hx, 2)).join("");
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
    salt = Bases2(salt, base622, null, "");
    console.timeEnd("Salt base62 conversion");
    console.time("Data from hex");
    let data = arr[2];
    if (data.length % 2 === 1) {
      data = "0" + data;
    }
    let bytes = Split2(data, 2).map((d) => Bases2(d, hex, decimal, ""));
    console.timeEnd("Data from hex");
    console.time("Key expansion");
    let keys = KeyToBytes(key, salt, power, bytes.length);
    console.timeEnd("Key expansion");
    console.time("Unmixing");
    bytes = Mix(keys, bytes);
    console.timeEnd("Unmixing");
    console.time("Decoding");
    let message = BytesToString2(bytes);
    console.timeEnd("Decoding");
    console.time("Bases conversion");
    message = Bases2(message, null, "012", "");
    message = [...message.split("")].reverse().join("");
    message = Bases2(message, "012", null, "");
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
import { Bases as Bases3, base62 as base623 } from "@yaronkoresh/math";
var ShualHash = function(pass, salt, strength = 1, len = 32) {
  let data = MetaShual(pass, salt, strength, len);
  return ["SHUAL", "HASH", data, Bases3(salt, null, base623, "")].join("/");
};
export {
  Pad,
  ShualDecrypt,
  ShualEncrypt,
  ShualHash,
  Unpad
};
