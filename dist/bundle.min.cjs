var k=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var H=Object.getOwnPropertyNames;var O=Object.prototype.hasOwnProperty;var z=(o,t)=>{for(var e in t)k(o,e,{get:t[e],enumerable:!0})},Y=(o,t,e,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of H(t))!O.call(o,n)&&n!==e&&k(o,n,{get:()=>t[n],enumerable:!(l=A(t,n))||l.enumerable});return o};var w=o=>Y(k({},"__esModule",{value:!0}),o);var F={};z(F,{Pad:()=>S,ShualDecrypt:()=>P,ShualEncrypt:()=>K,ShualHash:()=>U,Unpad:()=>v});module.exports=w(F);var i=require("@yaronkoresh/math");var m=require("@yaronkoresh/math"),f=function(o,t,e,l){if((0,m.Greater)(l,0)!==l.toString())return console.error("Length must be one or above!"),null;if(l=parseInt(l),(0,m.Greater)(e,0)!==e.toString())return console.error("Strength must be one or above!"),null;if(e=parseInt(e),e-=1,e*=1e3,e+=10,o.length===0)return console.error("Data length is invalid"),null;if(t.length===0)return console.error("Salt length is invalid"),null;let n=(0,m.StringToBytes)(o),a=(0,m.StringToBytes)(t),c=+(0,m.Add)(n,0),s=+(0,m.Add)(a,0),r=n.length%e,d=a.length%e,p=(c+d)%e,b=(s+r)%e;r=(d+p)%e,d=(d+b)%e,p=(r+p)%e,b=(r+b)%e;let I=[],g=0;for(let x=l;x>0;x--){for(let u=n.length;u>0;u--)for(let h=a.length;h>0;h--){let j=r;r=parseInt(parseInt(d)+x+u+n[u-1]+a[h-1])%e,d=parseInt(parseInt(p)+x+h+n[u-1]+a[h-1])%e,p=parseInt(parseInt(b)+u+h+n[u-1]+a[h-1])%e,b=parseInt(parseInt(j)+x+u+h+n[u-1]+a[h-1])%e,g=+(0,m.Add)(g,x,u,h,r,d,p,b),e+=1,g=+(0,m.Mod)(g,e),r=g,g=+(0,m.Add)(g,100)}r%=16+1,d%=16+1,p%=16+1,b%=16+1;let y=[...(0,m.Fibonacci)(g)].reverse();y=parseInt([y[0].charAt(r),y[1].charAt(d),y[2].charAt(p),y[3].charAt(b)].join(""))%26+65,I[x-1]=String.fromCodePoint(y)}return I.join("")};var S=function(o,t=16){o=o.toString();let e=C(o,t);return+e==0?o:f(o,"p",1,e)+o},v=function(o){o=o.toString();let t=o.length;for(let e=1;e<t;e++){let l=o.slice(0,e),n=o.slice(e);if(f(n,"p",1,l.length)===l)return n}return o},C=function(o,t){return Math.max(o.length,t)-o.length};var M="0123456789";var L="ABCDEFGHIJKLMNOPQRSTUVWXYZ",B=function(o,t,e,l){e=(0,i.Greater)(e,1),e=e===!0?1:e;let n=[];for(let a=0;a<l;a++){let c=t+a,s=f(o,c,e,1)+f(c,o,e,1);s=(0,i.Mod)((0,i.Bases)(s,L,M,""),256),n.push(s)}return n},D=function(o,t){let e=[];for(let l=0;l<t.length;l++){let n=o[l],a=n%8,c=t[l],s=(0,i.Zeros)((+c).toString(2),8);s=s.slice(-a)+s.slice(0,-a),c=parseInt(s,2),c=(0,i.Xor)(c,n);let r=(0,i.Zeros)((+c).toString(2),8);r=r.slice(a)+r.slice(0,a),c=parseInt(r,2),e.push(c)}return e},K=function(o,t,e,l=1){try{console.log("%c Shual is a fibonacci based cryptography toolset",`
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
		`),console.group("Encryption"),console.time("Overall"),console.time("Padding"),e=S(e,8),console.timeEnd("Padding"),console.time("Bases conversion"),e=(0,i.Bases)(e,null,"012",""),e=[...e.split("")].reverse().join(""),e=(0,i.Bases)(e,"012",null,""),console.timeEnd("Bases conversion"),console.time("Encoding");let n=(0,i.StringToBytes)(e);console.timeEnd("Encoding"),console.time("Key expansion");let a=B(o,t,l,n.length);console.timeEnd("Key expansion"),console.time("Mixing"),n=D(a,n),console.timeEnd("Mixing"),console.time("Salt base62 conversion"),t=(0,i.Bases)(t,null,i.base62,""),console.timeEnd("Salt base62 conversion"),console.time("Data hex conversion");let c=n.map(s=>(0,i.Bases)(s,M,i.hex,"")).map(s=>(0,i.Zeros)(s,2)).join("");return console.timeEnd("Data hex conversion"),console.timeEnd("Overall"),console.groupEnd("Encryption"),["SHUAL","CRYPT",c,t].join("/")}catch(n){return console.error(n),console.timeEnd("Overall"),console.groupEnd("Encryption"),null}},P=function(o,t,e=1){try{console.log("%c Shual is a fibonacci based cryptography toolset",`
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
		`),console.group("Decryption"),console.time("Overall"),console.time("Ciphertext splitted");let l=t.split("/");console.timeEnd("Ciphertext splitted"),console.time("Salt base62 conversion");let n=l[3];n=(0,i.Bases)(n,i.base62,null,""),console.timeEnd("Salt base62 conversion"),console.time("Data from hex");let a=l[2];a.length%2===1&&(a="0"+a);let c=(0,i.Split)(a,2).map(d=>(0,i.Bases)(d,i.hex,M,""));console.timeEnd("Data from hex"),console.time("Key expansion");let s=B(o,n,e,c.length);console.timeEnd("Key expansion"),console.time("Unmixing"),c=D(s,c),console.timeEnd("Unmixing"),console.time("Decoding");let r=(0,i.BytesToString)(c);return console.timeEnd("Decoding"),console.time("Bases conversion"),r=(0,i.Bases)(r,null,"012",""),r=[...r.split("")].reverse().join(""),r=(0,i.Bases)(r,"012",null,""),console.timeEnd("Bases conversion"),console.time("Unpadding"),r=v(r),console.timeEnd("Unpadding"),console.timeEnd("Overall"),console.groupEnd("Decryption"),r}catch(l){return console.error(l),console.timeEnd("Overall"),console.groupEnd("Decryption"),null}};var E=require("@yaronkoresh/math"),U=function(o,t,e=1,l=32){return["SHUAL","HASH",f(o,t,e,l),(0,E.Bases)(t,null,E.base62,"")].join("/")};0&&(module.exports={Pad,ShualDecrypt,ShualEncrypt,ShualHash,Unpad});
