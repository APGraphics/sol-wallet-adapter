(this["webpackJsonpsol-wallet-adapter-example"]=this["webpackJsonpsol-wallet-adapter-example"]||[]).push([[0],{100:function(e,t){},102:function(e,t){},146:function(e,t){},147:function(e,t){},175:function(e,t,n){"use strict";n.r(t);n(91);var a=n(11),c=n.n(a),r=n(79),o=n.n(r),l=n(23),u=n.n(l),i=n(80),s=n(89),m=n(35),f=(n(96),n(81)),p=n(33);var b=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1];function o(e){r((function(t){return[].concat(Object(s.a)(t),[e])}))}var l=Object(p.c)("devnet"),b=Object(a.useState)("https://www.sollet.io"),d=Object(m.a)(b,2),h=d[0],v=d[1],w=Object(a.useMemo)((function(){return new p.a(l)}),[l]),E=Object(a.useMemo)((function(){return new f.a(h,l)}),[h,l]),g=Object(a.useState)(!1),k=Object(m.a)(g,2)[1];function j(){return(j=Object(i.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=p.b.transfer({fromPubkey:E.publicKey,toPubkey:E.publicKey,lamports:100}),o("Getting recent blockhash"),e.next=5,w.getRecentBlockhash();case 5:return t.recentBlockhash=e.sent.blockhash,o("Sending signature request to wallet"),e.next=9,E.signTransaction(t);case 9:return n=e.sent,o("Got signature, submitting transaction"),e.next=13,w.sendRawTransaction(n.serialize());case 13:return o("Submitted transaction "+(a=e.sent)+", awaiting confirmation"),e.next=17,w.confirmTransaction(a,1);case 17:o("Transaction "+a+" confirmed"),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(0),console.warn(e.t0),o("Error: "+e.t0.message);case 24:case"end":return e.stop()}}),e,null,[[0,20]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){return E.on("connect",(function(){k(!0),o("Connected to wallet "+E.publicKey.toBase58())})),E.on("disconnect",(function(){k(!1),o("Disconnected from wallet")})),function(){E.disconnect()}}),[E]),c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Wallet Adapter Demo"),c.a.createElement("div",null,"Network: ",l),c.a.createElement("div",null,"Waller provider:"," ",c.a.createElement("input",{type:"text",value:h,onChange:function(e){return v(e.target.value.trim())}})),E.connected?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,"Wallet address: ",E.publicKey.toBase58(),"."),c.a.createElement("button",{onClick:function(){return j.apply(this,arguments)}},"Send Transaction")):c.a.createElement("button",{onClick:function(){return E.connect()}},"Connect to Wallet"),c.a.createElement("hr",null),c.a.createElement("div",{className:"logs"},n.map((function(e,t){return c.a.createElement("div",{key:t},e)}))))};o.a.render(c.a.createElement(b,null),document.getElementById("root"))},90:function(e,t,n){e.exports=n(175)},91:function(e,t,n){},96:function(e,t,n){}},[[90,1,2]]]);
//# sourceMappingURL=main.d8453055.chunk.js.map