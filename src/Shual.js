import { Multiply, Greater, Mod, Zeros, Add, StringToBytes, BytesToString, Split, Fibonacci } from "@yaronkoresh/math";

export const Shual = function( msg, salt, strength = 8, len = 8 ){

	if( Greater(len,0) !== len.toString() ){
		console.error( `Length must be one or above!` );
		return null;
	}
	len = parseInt(len);

	if( Greater(strength,0) !== strength.toString() ){
		console.error( `Strength must be one or above!` );
		return null;
	}
	strength = parseInt(strength);

	if( len > parseInt(strength) ){
		console.error( `Strength must be greater than length!` );
		return null;
	}
	strength *= 100;

	if( msg.length === 0 ){
		console.error( `Password is invalid` );
		return null;
	}

	if( salt.length === 0 ){
		console.error( `Salt is invalid` );
		return null;
	}

	const msgs = StringToBytes(msg);
	const salts = StringToBytes(salt);

	const sumM = +Add(msgs,0);
	const sumS = +Add(salts,0);

	let index1 = (msgs.length) % strength;
	let index2 = (salts.length) % strength;
	let index3 = (sumM + index2 ) % strength;
	let index4 = (sumS + index1) % strength;

	index1 = (index2 + index3) % strength;
	index2 = (index2 + index4) % strength;
	index3 = (index1 + index3) % strength;
	index4 = (index1 + index4) % strength;

	let res = [];
	let fibFactor = 0;
	for( let i = len ; i > 0  ; i-- ){
		for( let j = msgs.length ; j > 0 ; j-- ){
			for( let k = salts.length ; k > 0  ; k-- ){

				let _index1 = index1;
				index1 = parseInt( parseInt(index2) + i + j + msgs[j-1] + salts[k-1] ) % strength;
				index2 = parseInt( parseInt(index3) + i + k + msgs[j-1] + salts[k-1] ) % strength;
				index3 = parseInt( parseInt(index4) + j + k + msgs[j-1] + salts[k-1] ) % strength;
				index4 = parseInt( parseInt(_index1) + i + j + k + msgs[j-1] + salts[k-1] ) % strength;

				fibFactor = +Add( fibFactor , i , j , k , index1 , index2 , index3 , index4 );
				fibFactor = +Mod( fibFactor, strength );
				fibFactor = +Add( fibFactor, 100 );
			}
		}

		index1 %= 16 + 1;
		index2 %= 16 + 1;
		index3 %= 16 + 1;
		index4 %= 16 + 1;

		let f = [...Fibonacci( fibFactor )].reverse();
		f = f[0].charAt(index1) + f[1].charAt(index2) + f[2].charAt(index3) + f[3].charAt(index4);

		res[ i-1 ] = +f;
	}

	res = res.map( r => r % 95 + 32 );

	return BytesToString(res);
}