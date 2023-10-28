import { Shual } from "../dist/bundle.mjs";

let results = [];

/* 1 */ results.push( Shual("abc","abc") === 'brHKgj>M' );

console.log("\n\n\n");

results.map( function(result,index){
	if( result === true ){
		console.log(`\nTest ${index+1}:\nOK :)\n`);
	} else {
		console.log(`\nTest ${index+1}:\nFailed :(\n`);
	}
});

console.log("\n\n\n");