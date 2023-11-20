import { MetaShual } from "./MetaShual.js";
import { Bases, base62 } from "@yaronkoresh/math";

export const ShualHash = function( pass, salt, strength = 1, len = 32 ){

	let data = MetaShual(pass,salt,strength,len);
	return ["SHUAL","HASH",data,Bases( salt, null, base62, "" )].join("/");
}