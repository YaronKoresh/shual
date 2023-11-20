import { MetaShual } from "./MetaShual.js";

export const Pad = function(msg,paddingLengthFactor = 16){

	msg = msg.toString();
	const diff = PaddingLength(msg,paddingLengthFactor);
	if( +diff === 0 ){
		return msg;
	}
	let hash = MetaShual(msg, "p", 1, diff);
	return hash + msg;
}

export const Unpad = function(paddedText){

	paddedText = paddedText.toString();
	let len = paddedText.length;

	for( let i = 1 ; i < len ; i++ ){

		const maybeHash = paddedText.slice(0,i);
		const msg = paddedText.slice(i);

		let hash = MetaShual(msg, "p", 1, maybeHash.length);
		if( hash === maybeHash ){
			return msg;
		}
	}
	return paddedText;
}

const PaddingLength = function(txt,paddingLengthFactor){
	return Math.max(txt.length,paddingLengthFactor) - txt.length;
}