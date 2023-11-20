import { ShualEncrypt, ShualDecrypt, ShualHash, Pad, Unpad } from "../dist/bundle.mjs";

let results = [];

/* 1 */ results.push( ShualHash("pass","salt", 1, 5) === 'SHUAL/HASH/BPXFO/270Gnc' );
/* 2 */ results.push( ShualEncrypt("pass","salt", "hi", 3) === 'SHUAL/CRYPT/6C302500BA85B502/270Gnc' );
/* 3 */ results.push( ShualDecrypt("pass",'SHUAL/CRYPT/6C302500BA85B502/270Gnc',3) === 'hi' );
/* 4 */ results.push( Pad("abc",7) === 'OBKCabc' );
/* 5 */ results.push( Unpad('OBKCabc') === 'abc' );

console.log("\n\n\n");

results.map( function(result,index){
	if( result === true ){
		console.log(`\nTest ${index+1}:\nOK :)\n`);
	} else {
		console.log(`\nTest ${index+1}:\nFailed :(\n`);
	}
});

console.log("\n\n\n");