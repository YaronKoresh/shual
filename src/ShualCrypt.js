import { Xor, Zeros, Split, Mod, Power, Greater, StringToBytes, BytesToString, Bases, hex, base62 } from "@yaronkoresh/math";
import { MetaShual } from "./MetaShual.js";
import { Pad, Unpad } from "./ShualPad.js";

const decimal = "0123456789";
const binary = "01";
const cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const KeyToBytes = function (key,salt,power,len) {
	power = Greater( power, 1 );
	power = power === true ? 1 : power;

	let ret = [];

	for( let i = 0 ; i < len ; i++ ){
		let _salt = salt + i;
		let _key = MetaShual( key, _salt, power, 1) + MetaShual( _salt, key, power, 1);
		_key = Mod(Bases( _key, cap, decimal, "" ),256);
		ret.push( _key );
	}

	return ret;
}

export const Mix = function(keys,bytes){

	let ret = [];

	for( let j = 0 ; j < bytes.length ; j++ ){

		let key = keys[j];
		let shift = key % 8;

		let byte1 = bytes[j];

		let bin1 = Zeros( (+byte1).toString(2), 8 );
		bin1 = bin1.slice(-shift) + bin1.slice(0,-shift);

		byte1 = parseInt( bin1, 2 );

		byte1 = Xor( byte1, key );

		let bin2 = Zeros( (+byte1).toString(2), 8 );
		bin2 = bin2.slice(shift) + bin2.slice(0,shift);

		byte1 = parseInt( bin2, 2 );

		ret.push( byte1 );
	}

	return ret;
}

export const ShualEncrypt = function(key,salt,message,power=1){

	try {
		console.log("%c Shual is a fibonacci based cryptography toolset",`
			color: darkblue;
			background: white;
			box-shadow: inset 0 0 1mm 0 black;
			line-height: 1;
			text-align: center;
			font-size: max(6vmin,4.5vh);
			border: 1mm ridge darkblue;
			padding: 4mm;
		`);
		console.log("%c https://github.com/YaronKoresh/shual",`
			background: transparent;
			box-shadow: inset 0 0 1mm 0 black;
			line-height: 1;
			text-align: center;
			border-radius: 2mm;
			font-size: max(4vmin,3vh);
			padding: 4mm;
		`);
		console.log("%c Made by Yaron Koresh <aharonkoresh1@gmail.com>",`
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
		message = Pad(message,8);
		console.timeEnd("Padding");

		console.time("Bases conversion");
		message = Bases(message,null,"012","");
		message = [...message.split("")].reverse().join("");
		message = Bases(message,"012",null,"");
		console.timeEnd("Bases conversion");

		console.time("Encoding");
		let bytes = StringToBytes(message);
		console.timeEnd("Encoding");

		console.time("Key expansion");
		let keys = KeyToBytes( key, salt, power, bytes.length );
		console.timeEnd("Key expansion");

		console.time("Mixing");
		bytes = Mix( keys, bytes );
		console.timeEnd("Mixing");

		console.time("Salt base62 conversion");
		salt = Bases( salt, null, base62, "" );
		console.timeEnd("Salt base62 conversion");

		console.time("Data hex conversion");
		let data = bytes.map( b => Bases( b, decimal, hex, "" )).map( hx => Zeros( hx, 2 )).join("");
		console.timeEnd("Data hex conversion");

		console.timeEnd("Overall");
		console.groupEnd("Encryption");

		return [ "SHUAL", "CRYPT", data, salt ].join("/");
	} catch(e) {
		console.error(e);

		console.timeEnd("Overall");
		console.groupEnd("Encryption");

		return null;
	}
}

export const ShualDecrypt = function(key,cipher,power=1){

	try {
		console.log("%c Shual is a fibonacci based cryptography toolset",`
			color: darkblue;
			background: white;
			box-shadow: inset 0 0 1mm 0 black;
			line-height: 1;
			text-align: center;
			font-size: max(6vmin,4.5vh);
			border: 1mm ridge darkblue;
			padding: 4mm;
		`);
		console.log("%c https://github.com/YaronKoresh/shual",`
			background: transparent;
			box-shadow: inset 0 0 1mm 0 black;
			line-height: 1;
			text-align: center;
			border-radius: 2mm;
			font-size: max(4vmin,3vh);
			padding: 4mm;
		`);
		console.log("%c Made by Yaron Koresh <aharonkoresh1@gmail.com>",`
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
		salt = Bases( salt, base62, null, "" );
		console.timeEnd("Salt base62 conversion");

		console.time("Data from hex");
		let data = arr[2];
		if( data.length % 2 === 1 ){
			data = "0" + data;
		}
		let bytes = Split(data,2).map( d => Bases( d, hex, decimal, "" ) );
		console.timeEnd("Data from hex");

		console.time("Key expansion");
		let keys = KeyToBytes( key, salt, power, bytes.length );
		console.timeEnd("Key expansion");

		console.time("Unmixing");
		bytes = Mix( keys, bytes );
		console.timeEnd("Unmixing");

		console.time("Decoding");
		let message = BytesToString( bytes );
		console.timeEnd("Decoding");

		console.time("Bases conversion");
		message = Bases(message,null,"012","");
		message = [...message.split("")].reverse().join("");
		message = Bases(message,"012",null,"");
		console.timeEnd("Bases conversion");

		console.time("Unpadding");
		message = Unpad(message);
		console.timeEnd("Unpadding");

		console.timeEnd("Overall");
		console.groupEnd("Decryption");

		return message;
	} catch(e) {
		console.error(e);

		console.timeEnd("Overall");
		console.groupEnd("Decryption");

		return null;
	}
}