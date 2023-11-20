import{Xor as z,Zeros as E,Split as Y,Mod as w,Greater as C,StringToBytes as L,BytesToString as F,Bases as u,hex as D,base62 as K}from"@yaronkoresh/math";import{Greater as I,Mod as A,Add as y,StringToBytes as B,Fibonacci as H}from"@yaronkoresh/math";var g=function(o,r,e,t){if(I(t,0)!==t.toString())return console.error("Length must be one or above!"),null;if(t=parseInt(t),I(e,0)!==e.toString())return console.error("Strength must be one or above!"),null;if(e=parseInt(e),e-=1,e*=1e3,e+=10,o.length===0)return console.error("Data length is invalid"),null;if(r.length===0)return console.error("Salt length is invalid"),null;let n=B(o),l=B(r),a=+y(n,0),c=+y(l,0),i=n.length%e,s=l.length%e,h=(a+s)%e,p=(c+i)%e;i=(s+h)%e,s=(s+p)%e,h=(i+h)%e,p=(i+p)%e;let M=[],b=0;for(let f=t;f>0;f--){for(let m=n.length;m>0;m--)for(let d=l.length;d>0;d--){let j=i;i=parseInt(parseInt(s)+f+m+n[m-1]+l[d-1])%e,s=parseInt(parseInt(h)+f+d+n[m-1]+l[d-1])%e,h=parseInt(parseInt(p)+m+d+n[m-1]+l[d-1])%e,p=parseInt(parseInt(j)+f+m+d+n[m-1]+l[d-1])%e,b=+y(b,f,m,d,i,s,h,p),e+=1,b=+A(b,e),i=b,b=+y(b,100)}i%=16+1,s%=16+1,h%=16+1,p%=16+1;let x=[...H(b)].reverse();x=parseInt([x[0].charAt(i),x[1].charAt(s),x[2].charAt(h),x[3].charAt(p)].join(""))%26+65,M[f-1]=String.fromCodePoint(x)}return M.join("")};var S=function(o,r=16){o=o.toString();let e=O(o,r);return+e==0?o:g(o,"p",1,e)+o},v=function(o){o=o.toString();let r=o.length;for(let e=1;e<r;e++){let t=o.slice(0,e),n=o.slice(e);if(g(n,"p",1,t.length)===t)return n}return o},O=function(o,r){return Math.max(o.length,r)-o.length};var k="0123456789";var G="ABCDEFGHIJKLMNOPQRSTUVWXYZ",P=function(o,r,e,t){e=C(e,1),e=e===!0?1:e;let n=[];for(let l=0;l<t;l++){let a=r+l,c=g(o,a,e,1)+g(a,o,e,1);c=w(u(c,G,k,""),256),n.push(c)}return n},U=function(o,r){let e=[];for(let t=0;t<r.length;t++){let n=o[t],l=n%8,a=r[t],c=E((+a).toString(2),8);c=c.slice(-l)+c.slice(0,-l),a=parseInt(c,2),a=z(a,n);let i=E((+a).toString(2),8);i=i.slice(l)+i.slice(0,l),a=parseInt(i,2),e.push(a)}return e},Z=function(o,r,e,t=1){try{console.log("%c Shual is a fibonacci based cryptography toolset",`
			color: darkblue;
			background: white;
			box-shadow: inset 0 0 1mm 0 black;
			line-height: 1;
			text-align: center;
			font-size: max(6vmin,4.5vh);
			border: 1mm ridge darkblue;
			padding: 4mm;
		`),console.log("%c https://github.com/YaronKoresh/shual",`
			background: transparent;
			box-shadow: inset 0 0 1mm 0 black;
			line-height: 1;
			text-align: center;
			border-radius: 2mm;
			font-size: max(4vmin,3vh);
			padding: 4mm;
		`),console.log("%c Made by Yaron Koresh <aharonkoresh1@gmail.com>",`
			color: darkblue;
			background: white;
			box-shadow: inset 0 0 1mm 0 black;
			line-height: 1;
			text-align: center;
			font-size: max(5vmin,3.75vh);
			border: 1mm ridge darkblue;
			padding: 2mm;
		`),console.group("Encryption"),console.time("Overall"),console.time("Padding"),e=S(e,8),console.timeEnd("Padding"),console.time("Bases conversion"),e=u(e,null,"012",""),e=[...e.split("")].reverse().join(""),e=u(e,"012",null,""),console.timeEnd("Bases conversion"),console.time("Encoding");let n=L(e);console.timeEnd("Encoding"),console.time("Key expansion");let l=P(o,r,t,n.length);console.timeEnd("Key expansion"),console.time("Mixing"),n=U(l,n),console.timeEnd("Mixing"),console.time("Salt base62 conversion"),r=u(r,null,K,""),console.timeEnd("Salt base62 conversion"),console.time("Data hex conversion");let a=n.map(c=>u(c,k,D,"")).map(c=>E(c,2)).join("");return console.timeEnd("Data hex conversion"),console.timeEnd("Overall"),console.groupEnd("Encryption"),["SHUAL","CRYPT",a,r].join("/")}catch(n){return console.error(n),console.timeEnd("Overall"),console.groupEnd("Encryption"),null}},_=function(o,r,e=1){try{console.log("%c Shual is a fibonacci based cryptography toolset",`
			color: darkblue;
			background: white;
			box-shadow: inset 0 0 1mm 0 black;
			line-height: 1;
			text-align: center;
			font-size: max(6vmin,4.5vh);
			border: 1mm ridge darkblue;
			padding: 4mm;
		`),console.log("%c https://github.com/YaronKoresh/shual",`
			background: transparent;
			box-shadow: inset 0 0 1mm 0 black;
			line-height: 1;
			text-align: center;
			border-radius: 2mm;
			font-size: max(4vmin,3vh);
			padding: 4mm;
		`),console.log("%c Made by Yaron Koresh <aharonkoresh1@gmail.com>",`
			color: darkblue;
			background: white;
			box-shadow: inset 0 0 1mm 0 black;
			line-height: 1;
			text-align: center;
			font-size: max(5vmin,3.75vh);
			border: 1mm ridge darkblue;
			padding: 2mm;
		`),console.group("Decryption"),console.time("Overall"),console.time("Ciphertext splitted");let t=r.split("/");console.timeEnd("Ciphertext splitted"),console.time("Salt base62 conversion");let n=t[3];n=u(n,K,null,""),console.timeEnd("Salt base62 conversion"),console.time("Data from hex");let l=t[2];l.length%2===1&&(l="0"+l);let a=Y(l,2).map(s=>u(s,D,k,""));console.timeEnd("Data from hex"),console.time("Key expansion");let c=P(o,n,e,a.length);console.timeEnd("Key expansion"),console.time("Unmixing"),a=U(c,a),console.timeEnd("Unmixing"),console.time("Decoding");let i=F(a);return console.timeEnd("Decoding"),console.time("Bases conversion"),i=u(i,null,"012",""),i=[...i.split("")].reverse().join(""),i=u(i,"012",null,""),console.timeEnd("Bases conversion"),console.time("Unpadding"),i=v(i),console.timeEnd("Unpadding"),console.timeEnd("Overall"),console.groupEnd("Decryption"),i}catch(t){return console.error(t),console.timeEnd("Overall"),console.groupEnd("Decryption"),null}};import{Bases as R,base62 as T}from"@yaronkoresh/math";var X=function(o,r,e=1,t=32){return["SHUAL","HASH",g(o,r,e,t),R(r,null,T,"")].join("/")};export{S as Pad,_ as ShualDecrypt,Z as ShualEncrypt,X as ShualHash,v as Unpad};
