(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"2u47":function(e){e.exports=JSON.parse("{}")},N82c:function(e){e.exports=JSON.parse("{}")},QEXP:function(e,t,n){e.exports=n.p+"static/loading.fbc4a581.svg"},R1Dz:function(e,t,n){"use strict";var a=n("q1tI");t["a"]=Object(a["createContext"])()},"S/9j":function(e,t,n){"use strict";function a(e){var t=e.split("/").filter((e=>e));return t.map(((e,n)=>"/".concat(t.slice(0,n+1).join("/"))))}n.d(t,"a",(function(){return a}))},kiEm:function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),o=n("q1tI"),r=n("9kvl"),c=n("THqM"),s=(n("Pwec"),n("CtXQ")),i=(n("5NDa"),n("5rEg")),l=n("k1fw"),u=n("9og8"),b=n("tJVT"),d=n("WmNS"),j=n.n(d),h=n("nkYg"),p=n("vDqi"),g=n.n(p),O=n("+Ri4"),x=n.n(O),m=(n("+n12"),n("Z6YE")),f=n("jUKV"),v=n("O/14"),k=(n("2u47"),n("N82c"),n("GUrf")),w=n("4218"),y=n("cUlj"),S=n("nKUr");function T(e,t){return C.apply(this,arguments)}function C(){return C=Object(u["a"])(j.a.mark((function e(t,n){var a,o,r,c,s,i,l,b,d,h,p,g,O,x,m,f,S,T,C,E,N,I,q,A,P,L=arguments;return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=L.length>2&&void 0!==L[2]?L[2]:v["c"],o=!(L.length>3&&void 0!==L[3])||L[3],r=L.length>4?L[4]:void 0,c=L.length>5?L[5]:void 0,s=L.length>6?L[6]:void 0,i=L.length>7?L[7]:void 0,l=L.length>8?L[8]:void 0,b=L.length>9?L[9]:void 0,d=L.length>10?L[10]:void 0,h=L.length>11?L[11]:void 0,p=L.length>12?L[12]:void 0,g=L.length>13?L[13]:void 0,O=L.length>14?L[14]:void 0,x=L.length>15?L[15]:void 0,m=L.length>16?L[16]:void 0,f=L.length>17?L[17]:void 0,S=L.length>18?L[18]:void 0,T=L.length>19?L[19]:void 0,C=L.length>20?L[20]:void 0,E=L.length>21?L[21]:void 0,N=L.length>22?L[22]:void 0,I=L.length>23?L[23]:void 0,q=L.length>24?L[24]:void 0,A=L.length>25?L[25]:void 0,e.next=26,Object(u["a"])(j.a.mark((function e(){var u,P,L,H,D,R,F,U,W,B,M,Y,J,K,Q,z,G,V,_,X,Z,$,ee,te,ne,ae,oe,re,ce,se,ie,le,ue,be,de,je,he;return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(b(!1),d(!1),h("0"),p("0"),g(!1),O(!1),x(""),m("Loading..."),f(!1),S(""),console.log(k["c"]),u=Object(v["p"])(c,s),.01*a,P=t.address,L=t.symbol,H=t.decimals,D=t.amount,R=n.address,F=n.symbol,U=n.decimals,W=n.amount,D=D||"0",W=W||"0",s&&c){e.next=19;break}return e.abrupt("return",new v["a"]("Connect to your wallet"));case 19:if(t.symbol&&n.symbol){e.next=21;break}return e.abrupt("return",new v["a"]("Please choose tokens"));case 21:if(!o||"0"!=D){e.next=23;break}return e.abrupt("return",new v["a"]("Please enter amount"));case 23:if(o||"0"!=W){e.next=25;break}return e.abrupt("return",new v["a"]("Please enter amount"));case 25:if(!o||""!=D){e.next=27;break}return e.abrupt("return",new v["a"]("Please enter amount"));case 27:if(o||""!=W){e.next=29;break}return e.abrupt("return",new v["a"]("Please enter amount"));case 29:if(!o||!isNaN(parseFloat(D))){e.next=31;break}return e.abrupt("return",new v["a"]("Please enter amount"));case 31:if(o||!isNaN(parseFloat(W))){e.next=33;break}return e.abrupt("return",new v["a"]("Please enter amount"));case 33:if(B="ETH"===L,M="ETH"===F,console.log(t),console.log(n),!B||!M){e.next=41;break}return m("Doesn't support ETH to ETH"),f(!1),e.abrupt("return",new v["a"]("Doesn't support ETH to ETH"));case 41:if(!(B&&"WETH"===F||"WETH"===L&&M)){e.next=45;break}return m("Invalid pair WETH/ETH"),f(!1),e.abrupt("return",new v["a"]("Invalid pair WETH/ETH"));case 45:if(console.log("ADD LIQUIDITY"),console.log("------------------ CONSTRUCT TOKEN ------------------"),Y=B?k["n"][r]:new k["j"](r,P,H,L),J=M?k["n"][r]:new k["j"](r,R,U,F),!Y.equals(J)){e.next=53;break}return m("Equal tokens"),f(!1),e.abrupt("return",new v["a"]("Equal tokens!"));case 53:return e.next=55,k["d"].fetchPairData(Y,J,c).then((e=>(console.log(e.reserve0.raw.toString()),console.log(e.reserve1.raw.toString()),e))).catch((e=>new v["a"]("".concat(Y.symbol," - ").concat(J.symbol," pool does not exist. Create one?"))));case 55:K=e.sent,console.log("pair"),console.log(K),T(K),Q=!1,K instanceof v["a"]&&(Q=!0),C(Q),E({token0:P,token1:R}),console.log("test add to server",{token0:P,token1:R}),console.log("------------------ PARSE AMOUNT ------------------"),e.prev=65,z=o?new k["k"](Y,Object(y["b"])(D,H)):new k["k"](J,Object(y["b"])(W,U)),e.next=79;break;case 69:if(e.prev=69,e.t0=e["catch"](65),console.log("parsedAmount"),console.log(e.t0),f(!1),"underflow"!==e.t0.fault){e.next=77;break}return m("Value too small"),e.abrupt("return",new v["a"](e.t0.fault));case 77:return m(Q?"Enter both values":"Unhandled error"),e.abrupt("return",new v["a"]("Amount error"));case 79:if(Q){e.next=126;break}if(console.log("estimated dependent amount"),!o){e.next=103;break}_=K.priceOf(Y).quote(z),e.prev=83,X=new k["k"](Y,Object(y["b"])(D,H)),e.next=97;break;case 87:if(e.prev=87,e.t1=e["catch"](83),f(!1),"underflow"!==e.t1.fault){e.next=95;break}return m(e.t1.fault),e.abrupt("return",new v["a"](e.t1.fault));case 95:return m("Token or amount missing"),e.abrupt("return",new v["a"]("Token or amount missing"));case 97:G=Y===k["b"]?k["a"].ether(X.raw):X,V=J===k["b"]?k["a"].ether(_.raw):_,l(_.toFixed(5)),W=_.toExact(),e.next=124;break;case 103:_=K.priceOf(J).quote(z),e.prev=104,Z=new k["k"](J,Object(y["b"])(W,U)),e.next=120;break;case 108:if(e.prev=108,e.t2=e["catch"](104),console.log("token0TokenAmount"),console.log(e.t2),f(!1),"underflow"!==e.t2.fault){e.next=118;break}return m(e.t2.fault),e.abrupt("return",new v["a"](e.t2.fault));case 118:return m("Token or amount missing"),e.abrupt("return",new v["a"]("Token or amount missing"));case 120:G=Y===k["b"]?k["a"].ether(_.raw):_,V=J===k["b"]?k["a"].ether(Z.raw):Z,i(_.toFixed(5)),D=_.toExact();case 124:e.next=153;break;case 126:if("0"!==D&&"0"!==W){e.next=136;break}if(!Q){e.next=133;break}return f(!1),m("Create new pool"),e.abrupt("return",new v["a"]("Creating a new pool, please enter both amounts"));case 133:return f(!1),m("Add liquidity"),e.abrupt("return",new v["a"]("One field is empty, it's probably a new pool"));case 136:e.prev=136,G=new k["k"](Y,Object(y["b"])(D,H)),V=new k["k"](J,Object(y["b"])(W,U)),e.next=153;break;case 141:if(e.prev=141,e.t3=e["catch"](136),console.log("parsedToken0Amount and parsedToken1Amount"),console.log(e.t3),f(!1),"underflow"!==e.t3.fault){e.next=151;break}return m(e.t3.fault),e.abrupt("return",new v["a"](e.t3.fault));case 151:return m("Value must be a number"),e.abrupt("return",new v["a"]("Value must be a number"));case 153:return N(G),I(V),console.log("------------------ CHECK BALANCE ------------------"),e.next=158,Object(v["t"])(B?k["b"]:new k["j"](r,P,H,L),s,c);case 158:return $=e.sent,e.next=161,Object(v["t"])(M?k["b"]:new k["j"](r,R,U,F),s,c);case 161:ee=e.sent,console.log("token0 balance"),console.log($),console.log("token1 balance"),console.log(ee),e.prev=166,te=$.gte(Object(y["b"])(D,H))&&ee.gte(Object(y["b"])(W,U)),e.next=182;break;case 170:if(e.prev=170,e.t4=e["catch"](166),console.log(te),console.log(e.t4),f(!1),"underflow"!==e.t4.fault){e.next=180;break}return m(e.t4.fault),e.abrupt("return",new v["a"](e.t4.fault));case 180:return m("userHasSufficientBalance"),e.abrupt("return",new v["a"]("unknow error"));case 182:if(te){e.next=186;break}return m("Not enough balance"),f(!1),e.abrupt("return",new v["a"]("Not enough balance"));case 186:if(console.log("------------------ BREAKDOWN ------------------"),Q){e.next=210;break}return e.next=190,Object(v["r"])(K.liquidityToken,c,s);case 190:ne=e.sent,console.log("Liquidity Minted"),console.log(K.liquidityToken),e.prev=193,ae=K.getLiquidityMinted(ne,G,V),oe=new k["g"](ae.raw,ne.add(ae).raw).toFixed(4),x(["Pool reserve: ".concat(K.reserve0.toFixed(3)," ").concat(K.token0.symbol," + ").concat(K.reserve1.toFixed(3)," ").concat(K.token1.symbol),"Pool share: ".concat(oe,"%")]),e.next=208;break;case 199:if(e.prev=199,e.t5=e["catch"](193),!(e.t5 instanceof k["e"])){e.next=205;break}return m("Insufficient reserve!"),f(!1),e.abrupt("return",new v["a"]("Insufficient reserve!"));case 205:return m("Unhandled exception!"),f(!1),e.abrupt("return",new v["a"]("Unhandled exception!"));case 208:e.next=211;break;case 210:x(["Ready to create ".concat(L," ").concat(F," liquidity pool.")]);case 211:if(console.log("------------------ ALLOWANCE ------------------"),re=0,B){e.next=220;break}return e.next=216,Object(v["i"])(P,G.raw.toString(),c,s);case 216:ce=e.sent,console.log("token 0 approved?"),console.log(ce),ce||(console.log("Not enough allowance"),h(G.raw.toString()),b(!0),g(!0),re+=1);case 220:if(M){e.next=228;break}return console.log("Inside addLiquidity, amount needed: ".concat(V.raw.toString())),e.next=224,Object(v["i"])(R,V.raw.toString(),c,s);case 224:se=e.sent,console.log("token 1 approved?"),console.log(se),se||(console.log("Not enough allowance for token1"),p(V.raw.toString()),d(!0),O(!0),re+=2);case 228:if(!(re>0)){e.next=232;break}return f(!1),m("Need approval"),e.abrupt("return",new v["a"]("Need approve ".concat(1===re?L:2===re?F:"".concat(L," and ").concat(F))));case 232:f(!0),m(Q?"Create a new pool":"Add liquidity"),console.log("------------------ PREPARE ADD LIQUIDITY ------------------"),console.log("parsed token 0 amount"),console.log(G.raw),console.log("parsed token 1 amount"),console.log(V.raw),console.log("slippage"),console.log(a),B||M?(ie=u.estimateGas.addLiquidityETH,le=u.addLiquidityETH,de=B?J:Y,je=B?V:G,he=B?Object(v["h"])(G,Q?0:a)[0].toString():Object(v["h"])(V,Q?0:a)[0].toString(),ue=[de.address,je.raw.toString(),Object(v["h"])(je,Q?0:a)[0].toString(),he,s,"0x".concat((Math.floor((new Date).getTime()/1e3)+60).toString(16))],be=w["a"].from((M?V:G).raw.toString()),console.log(be)):(ie=u.estimateGas.addLiquidity,le=u.addLiquidity,ue=[P,R,G.raw.toString(),V.raw.toString(),Object(v["h"])(G,Q?0:a)[0].toString(),Object(v["h"])(V,Q?0:a)[0].toString(),s,"0x".concat((Math.floor((new Date).getTime()/1e3)+60).toString(16))],be=null),console.log("args"),console.log(ue),console.log("estimate"),console.log(ie),console.log("method"),console.log(le),console.log("value"),console.log(be),q(ue),A(be);case 252:case"end":return e.stop()}}),e,null,[[65,69],[83,87],[104,108],[136,141],[166,170],[193,199]])})))();case 26:P=e.sent,P instanceof v["a"]?m(P.getErrorText()):console.log(P);case 28:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function E(e,t){return N.apply(this,arguments)}function N(){return N=Object(u["a"])(j.a.mark((function e(t,n){var a,o,r,c,s,i,b,d,h,p,g,O,x,m,f=arguments;return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=f.length>2&&void 0!==f[2]?f[2]:v["c"],!(f.length>3&&void 0!==f[3])||f[3],o=f.length>4?f[4]:void 0,r=f.length>5?f[5]:void 0,c=f.length>6?f[6]:void 0,s=f.length>7?f[7]:void 0,i=f.length>8?f[8]:void 0,b=f.length>9?f[9]:void 0,d=f.length>10?f[10]:void 0,h=f.length>11?f[11]:void 0,p=f.length>12?f[12]:void 0,g=f.length>13?f[13]:void 0,O=f.length>14?f[14]:void 0,e.next=15,Object(u["a"])(j.a.mark((function e(){var u,g,O,x,m,f,w,y,S,T,C,E,N,I;return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(k["c"]),u=Object(v["p"])(r,c),g=t.address,O=t.symbol,x=t.decimals,t.amount,m=n.address,f=n.symbol,w=n.decimals,n.amount,y="ETH"===O,S="ETH"===f,console.log("------------------ RECEIVED TOKEN ------------------"),console.log("token0"),console.log(t),console.log("token1"),console.log(n),!y||!S){e.next=13;break}return e.abrupt("return",new v["a"]("Doesn't support ETH to ETH"));case 13:if(!(y&&"WETH"===f||"WETH"===O&&S)){e.next=15;break}return e.abrupt("return",new v["a"]("Invalid pair WETH/ETH"));case 15:if(console.log("ADD LIQUIDITY"),console.log("------------------ CONSTRUCT TOKEN ------------------"),T=y?k["n"][o]:new k["j"](o,g,x,O),C=S?k["n"][o]:new k["j"](o,m,w,f),!T.equals(C)){e.next=21;break}return e.abrupt("return",new v["a"]("Equal tokens!"));case 21:return console.log("------------------ CONSTRUCT PAIR ------------------"),console.log("FETCH pair"),console.log(s),console.log(i),console.log("------------------ PARSE AMOUNT ------------------"),console.log(b),console.log(d),console.log("------------------ CHECK BALANCE ------------------"),console.log("------------------ BREAKDOWN ------------------"),console.log("------------------ ALLOWANCE ------------------"),console.log("------------------ PREPARE ADD LIQUIDITY ------------------"),y||S?(E=u.estimateGas.addLiquidityETH,N=u.addLiquidityETH,console.log(h),console.log(p)):(E=u.estimateGas.addLiquidity,N=u.addLiquidity,console.log(h),console.log(p)),console.log("parsed token 0 amount"),console.log(b.raw),console.log("parsed token 1 amount"),console.log(d.raw),console.log("slippage"),console.log(a),console.log(E),console.log(N),console.log(h),console.log(p),e.next=45,E(...h,p?{value:p}:{}).then((e=>N(...h,Object(l["a"])(Object(l["a"])({},p?{value:p}:{}),{},{gasLimit:Object(v["g"])(e)})).catch((e=>new v["a"]("CustomError in transaction")))));case 45:return I=e.sent,e.abrupt("return",I);case 47:case"end":return e.stop()}}),e)})))();case 15:return x=e.sent,x instanceof v["a"]?g(x.getErrorText()):(console.log("status"),console.log(x),m="https://rinkeby.etherscan.io/tx/"+x.hash,O(x),g(Object(S["jsx"])("a",{href:m,target:"_blank",children:"View it on etherscan"}))),e.abrupt("return");case 18:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}var I,q,A=n("QEXP"),P=n.n(A),L=n("wd/R"),H=n.n(L),D=c["t"].AcyTabPane,R=e=>{var t=e.dispatch,n=e.onLoggedIn,r=Object(o["useState"])(null),d=Object(b["a"])(r,2),p=d[0],O=d[1],k=Object(o["useState"])(!0),w=Object(b["a"])(k,2),y=w[0],C=w[1],N=Object(o["useState"])(h["a"][0]),I=Object(b["a"])(N,2),q=I[0],A=I[1],L=Object(o["useState"])(h["a"][1]),R=Object(b["a"])(L,2),F=R[0],U=R[1],W=Object(o["useState"])("0"),B=Object(b["a"])(W,2),M=B[0],Y=B[1],J=Object(o["useState"])("0"),K=Object(b["a"])(J,2),Q=K[0],z=K[1],G=Object(o["useState"])(),V=Object(b["a"])(G,2),_=V[0],X=V[1],Z=Object(o["useState"])(),$=Object(b["a"])(Z,2),ee=$[0],te=$[1],ne=Object(o["useState"])(!1),ae=Object(b["a"])(ne,2),oe=ae[0],re=ae[1],ce=Object(o["useState"])(!1),se=Object(b["a"])(ce,2),ie=se[0],le=se[1],ue=Object(o["useState"])(!0),be=Object(b["a"])(ue,2),de=be[0],je=be[1],he=Object(o["useState"])(v["c"]/100),pe=Object(b["a"])(he,2),ge=pe[0],Oe=pe[1],xe=Object(o["useState"])(v["c"]/100),me=Object(b["a"])(xe,2),fe=me[0],ve=me[1],ke=Object(o["useState"])(""),we=Object(b["a"])(ke,2),ye=we[0],Se=we[1],Te=Object(o["useState"])(!1),Ce=Object(b["a"])(Te,2),Ee=Ce[0],Ne=Ce[1],Ie=Object(o["useState"])(!1),qe=Object(b["a"])(Ie,2),Ae=qe[0],Pe=qe[1],Le=Object(o["useState"])("0"),He=Object(b["a"])(Le,2),De=He[0],Re=He[1],Fe=Object(o["useState"])("0"),Ue=Object(b["a"])(Fe,2),We=Ue[0],Be=Ue[1],Me=Object(o["useState"])(!1),Ye=Object(b["a"])(Me,2),Je=Ye[0],Ke=Ye[1],Qe=Object(o["useState"])(!1),ze=Object(b["a"])(Qe,2),Ge=ze[0],Ve=ze[1],_e=Object(o["useState"])(),Xe=Object(b["a"])(_e,2),Ze=Xe[0],$e=Xe[1],et=Object(o["useState"])("Connect to wallet"),tt=Object(b["a"])(et,2),nt=tt[0],at=tt[1],ot=Object(o["useState"])(!0),rt=Object(b["a"])(ot,2),ct=rt[0],st=rt[1],it=Object(o["useState"])(),lt=Object(b["a"])(it,2),ut=lt[0],bt=lt[1],dt=Object(o["useState"])(),jt=Object(b["a"])(dt,2),ht=jt[0],pt=jt[1],gt=Object(o["useState"])(),Ot=Object(b["a"])(gt,2),xt=Ot[0],mt=Ot[1],ft=Object(o["useState"])(null),vt=Object(b["a"])(ft,2),kt=vt[0],wt=vt[1],yt=Object(o["useState"])(),St=Object(b["a"])(yt,2),Tt=St[0],Ct=St[1],Et=Object(o["useState"])(),Nt=Object(b["a"])(Et,2),It=Nt[0],qt=Nt[1],At=Object(o["useState"])(),Pt=Object(b["a"])(At,2),Lt=Pt[0],Ht=Pt[1],Dt=Object(o["useState"])(),Rt=Object(b["a"])(Dt,2),Ft=Rt[0],Ut=Rt[1],Wt=Object(o["useState"])(""),Bt=Object(b["a"])(Wt,2),Mt=Bt[0],Yt=Bt[1],Jt=Object(o["useState"])(h["a"]),Kt=Object(b["a"])(Jt,2),Qt=Kt[0],zt=Kt[1],Gt=Object(o["useState"])(!1),Vt=Object(b["a"])(Gt,2),_t=Vt[0],Xt=Vt[1],Zt=Object(o["useState"])(!1),$t=Object(b["a"])(Zt,2),en=$t[0],tn=$t[1],nn=e=>{Yt(e.target.value),zt(h["a"].filter((t=>t.symbol.includes(e.target.value.toUpperCase()))))},an=Object(o["useState"])([]),on=Object(b["a"])(an,2),rn=(on[0],on[1],Object(m["b"])()),cn=rn.account,sn=rn.chainId,ln=rn.library,un=rn.activate,bn=new f["a"]({supportedChainIds:[1,3,4,5,42,80001]});Object(o["useEffect"])((()=>{un(bn);var e=JSON.parse(localStorage.getItem("tokens_symbol"));null!=e&&fn(h["a"].filter((t=>e.includes(t.symbol))))}),[cn]);var dn=Object(o["useCallback"])(Object(u["a"])(j.a.mark((function e(){return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(q&&F){e.next=2;break}return e.abrupt("return");case 2:if(de){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,T(Object(l["a"])(Object(l["a"])({},q),{},{amount:_}),Object(l["a"])(Object(l["a"])({},F),{},{amount:ee}),100*ge,de,sn,ln,cn,X,te,Ne,Pe,Re,Be,Ke,Ve,$e,at,st,bt,pt,mt,wt,Ct,qt,Ht,Ut);case 6:case"end":return e.stop()}}),e)}))),[q,F,_,ee,ge,de,sn,ln,cn]),jn=Object(o["useCallback"])(Object(u["a"])(j.a.mark((function e(){return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(q&&F){e.next=2;break}return e.abrupt("return");case 2:if(!de){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,T(Object(l["a"])(Object(l["a"])({},q),{},{amount:_}),Object(l["a"])(Object(l["a"])({},F),{},{amount:ee}),100*ge,de,sn,ln,cn,X,te,Ne,Pe,Re,Be,Ke,Ve,$e,at,st,bt,pt,mt,wt,Ct,qt,Ht,Ut);case 6:case"end":return e.stop()}}),e)}))),[q,F,_,ee,ge,de,sn,ln,cn]);Object(o["useEffect"])((()=>{dn()}),[q,F,_,ee,ge,de,sn,ln,cn]),Object(o["useEffect"])((()=>{jn()}),[q,F,_,ee,ge,de,sn,ln,cn]),Object(o["useEffect"])((()=>{void 0==cn?(st(!0),at("Connect to Wallet")):(at("Choose tokens and amount"),st(!1),n())}),[sn,ln,cn]),Object(o["useEffect"])((()=>{var e=()=>document.getElementById("liquidity-token-search-input").focus();!0===p&&setTimeout(e,100)}),[p]);var hn=()=>{O(!0)},pn=()=>{O(!1)};Object(o["useEffect"])((()=>{function e(){return t.apply(this,arguments)}function t(){return t=Object(u["a"])(j.a.mark((function e(){return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return re(!0),le(!0),e.t0=Y,e.next=5,Object(v["s"])(q,sn,cn,ln);case 5:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=z,e.next=10,Object(v["s"])(F,sn,cn,ln);case 10:e.t3=e.sent,(0,e.t2)(e.t3);case 12:case"end":return e.stop()}}),e)}))),t.apply(this,arguments)}cn&&sn&&ln&&(console.log("get balances in liquidity"),e())}),[cn,sn,ln,q,F]);var gn=function(){var e=Object(u["a"])(j.a.mark((function e(t){return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(pn(),!y){e.next=15;break}if(void 0!=cn){e.next=6;break}alert("Please connect to your account"),e.next=13;break;case 6:return A(t),e.t0=Y,e.next=10,Object(v["s"])(t,sn,cn,ln);case 10:e.t1=e.sent,(0,e.t0)(e.t1),re(!0);case 13:e.next=26;break;case 15:if(void 0!=cn){e.next=19;break}alert("Please connect to your account"),e.next=26;break;case 19:return U(t),e.t2=z,e.next=23,Object(v["s"])(t,sn,cn,ln);case 23:e.t3=e.sent,(0,e.t2)(e.t3),le(!0);case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),On=Object(o["useState"])([]),xn=Object(b["a"])(On,2),mn=xn[0],fn=xn[1],vn=e=>{fn((t=>{var n=[...t];if(n.includes(e)){var a=n.filter((t=>t!=e));return localStorage.setItem("token",JSON.stringify(a.map((e=>e.addressOnEth)))),localStorage.setItem("tokens_symbol",JSON.stringify(a.map((e=>e.symbol)))),a}return n.push(e),localStorage.setItem("token",JSON.stringify(n.map((e=>e.addressOnEth)))),localStorage.setItem("tokens_symbol",JSON.stringify(n.map((e=>e.symbol)))),n}))},kn=n=>{console.log("test status:",n);var a=e.transaction.transactions,o=a.filter((e=>e.hash==n.hash)).length;console.log("is current dispatched? ",o),0==o&&t({type:"transaction/addTransaction",payload:{transactions:[...a,{hash:n.hash}]}}),console.log("test test see how many times setInterval is called");var r=function(){var e=Object(u["a"])(j.a.mark((function e(){return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ln.getTransactionReceipt(n.hash).then(function(){var e=Object(u["a"])(j.a.mark((function e(o){var c,s,i,l;return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("receipt ",o),o){e.next=5;break}setTimeout(r,500),e.next=14;break;case 5:return e.next=7,ln.getBlock(o.logs[0].blockNumber).then((e=>{c=H()(parseInt(1e3*e.timestamp)).format("YYYY-MM-DD HH:mm:ss"),console.log("test transactionTime: ",c)}));case 7:s=a.filter((e=>e.hash!=n.hash)),t({type:"transaction/addTransaction",payload:{transactions:[...s,{hash:n.hash,transactionTime:c}]}}),st(!0),console.log(nt),at(nt),console.log("test pair to add on server",kt),kt&&(i=kt.token0,l=kt.token1,g.a.post("https://api.acy.finance/api/pool/update?walletId=".concat(cn,"&action=add&token0=").concat(i,"&token1=").concat(l)).then((e=>{console.log("add to server return: ",e)})).catch((e=>console.log("error: ",e))));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r()},wn=e.liquidity;return Object(o["useEffect"])(Object(u["a"])(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("liquidity updated"),console.log("liquidity state: ",wn),t=wn.token0,n=wn.token1,console.log("new tokens to set in addComponent, ",t,n),!t||!n){e.next=22;break}return t=Qt.filter((e=>e.symbol===t.symbol))[0],n=Qt.filter((e=>e.symbol===n.symbol))[0],console.log("fetched token ds",t,n),A(t),e.t0=Y,e.next=12,Object(v["s"])(t,sn,cn,ln);case 12:return e.t1=e.sent,(0,e.t0)(e.t1),re(!0),U(n),e.t2=z,e.next=19,Object(v["s"])(n,sn,cn,ln);case 19:e.t3=e.sent,(0,e.t2)(e.t3),le(!0);case 22:case"end":return e.stop()}}),e)}))),[wn]),Object(S["jsxs"])("div",{children:[Object(S["jsx"])(c["j"],{icon:"eth",title:oe&&"Balance: ".concat(parseFloat(M).toFixed(5)),logoURI:q&&q.logoURI,coin:q&&q.symbol||"Select",yuan:"566.228",dollar:"".concat(M),token:_,onChoseToken:Object(u["a"])(j.a.mark((function e(){return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:hn(),C(!0);case 2:case"end":return e.stop()}}),e)}))),onChangeToken:e=>{console.log("onChangeToken"),je(!0),X(e)}}),Object(S["jsx"])("div",{style:{margin:"12px auto",textAlign:"center"},children:Object(S["jsx"])(c["l"],{width:21.5,name:"plus_light"})}),Object(S["jsx"])(c["j"],{icon:"eth",title:ie&&"Balance: ".concat(parseFloat(Q).toFixed(5)),logoURI:F&&F.logoURI,coin:F&&F.symbol||"Select",yuan:"566.228",dollar:"".concat(Q),token:ee,onChoseToken:Object(u["a"])(j.a.mark((function e(){return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:hn(),C(!1);case 2:case"end":return e.stop()}}),e)}))),onChangeToken:e=>{je(!1),te(e)}}),Object(S["jsx"])(c["k"],{children:Ze&&Object(S["jsxs"])(S["Fragment"],{children:[Object(S["jsx"])("div",{className:x.a.breakdownTopContainer,children:Object(S["jsxs"])("div",{className:x.a.slippageContainer,children:[Object(S["jsx"])("span",{style:{fontWeight:600},children:"Slippage tolerance"}),Object(S["jsxs"])("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"7px"},children:[Object(S["jsx"])(a["a"],{type:"link",style:{marginRight:"5px"},children:"Auto"}),Object(S["jsx"])(i["a"],{value:fe||"",onChange:e=>{ve(e.target.value)},suffix:Object(S["jsx"])("strong",{children:"%"})}),Object(S["jsx"])(a["a"],{type:"primary",style:{marginLeft:"10px",background:"#2e3032",borderColor:"transparent"},onClick:()=>{isNaN(fe)?Se("Please input valid slippage value!"):(Se(""),Oe(parseFloat(fe)))},children:"Set"})]}),ye.length>0&&Object(S["jsx"])("span",{style:{fontWeight:600,color:"#c6224e"},children:ye})]})}),Object(S["jsx"])("div",{className:x.a.acyDescriptionContainer,children:Ze.map((e=>Object(S["jsx"])(c["k"].Item,{children:Object(S["jsx"])("div",{className:x.a.acyDescriptionItem,children:e})})))})]})}),1==Je&&Object(S["jsxs"])("div",{children:[Object(S["jsxs"])(c["d"],{variant:"warning",onClick:Object(u["a"])(j.a.mark((function e(){var t;return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Xt(!0),Ne(!1),e.next=4,Object(v["e"])(q.address,De,ln,cn);case 4:if(t=e.sent,Ne(!0),Xt(!1),1!=t){e.next=12;break}return Ne(!1),e.next=11,T(Object(l["a"])(Object(l["a"])({},q),{},{amount:_}),Object(l["a"])(Object(l["a"])({},F),{},{amount:ee}),100*ge,de,sn,ln,cn,X,te,Ne,Pe,Re,Be,Ke,Ve,$e,at,st,bt,pt,mt,wt,Ct,qt,Ht,Ut);case 11:0==Ae&&(xt?st("Create new pool"):at("Add liquidity"),st(!0));case 12:case"end":return e.stop()}}),e)}))),disabled:!Ee,children:["Approve ",q&&q.symbol,_t&&Object(S["jsx"])("img",{style:{width:30,height:30,marginLeft:"1%"},src:P.a,className:x.a.spinner,alt:"spinner"})]})," "]}),1==Ge&&Object(S["jsx"])("div",{children:Object(S["jsxs"])(c["d"],{variant:"warning",onClick:Object(u["a"])(j.a.mark((function e(){var t;return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return tn(!0),Pe(!1),e.next=4,Object(v["e"])(F.address,We,ln,cn);case 4:if(t=e.sent,Pe(!0),tn(!1),1!=t){e.next=12;break}return Pe(!1),e.next=11,T(Object(l["a"])(Object(l["a"])({},q),{},{amount:_}),Object(l["a"])(Object(l["a"])({},F),{},{amount:ee}),ge,de,sn,ln,cn,X,te,Ne,Pe,Re,Be,Ke,Ve,$e,at,st,bt,pt,mt,wt,Ct,qt,Ht,Ut);case 11:0==Ee&&(xt?st("Create new pool"):at("Add liquidity"),st(!0));case 12:case"end":return e.stop()}}),e)}))),disabled:!Ae,children:["Approve ",F&&F.symbol,en&&Object(S["jsx"])("img",{style:{width:30,height:30,marginLeft:"1%"},src:P.a,className:x.a.spinner,alt:"spinner"})]})}),Object(S["jsx"])(c["d"],{variant:"success",disabled:!ct,onClick:Object(u["a"])(j.a.mark((function e(){return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(void 0!=cn){e.next=6;break}un(bn),at("Choose tokens and amount"),st(!1),e.next=10;break;case 6:return st(!1),at(Object(S["jsxs"])(S["Fragment"],{children:["Processing ",Object(S["jsx"])(s["a"],{type:"loading"})]})),e.next=10,E(Object(l["a"])(Object(l["a"])({},q),{},{amount:_}),Object(l["a"])(Object(l["a"])({},F),{},{amount:ee}),100*ge,de,sn,ln,cn,ht,xt,Tt,It,Lt,Ft,bt,kn);case 10:case"end":return e.stop()}}),e)}))),children:nt}),Object(S["jsx"])(c["k"],{children:ut&&Object(S["jsx"])(c["k"].Item,{children:ut})}),Object(S["jsxs"])(c["p"],{onCancel:pn,width:400,visible:p,children:[Object(S["jsx"])("div",{className:x.a.title,children:"Select a token"}),Object(S["jsx"])("div",{className:x.a.search,children:Object(S["jsx"])(i["a"],{size:"large",style:{backgroundColor:"#373739",borderRadius:"40px"},placeholder:"Enter the token symbol or address",value:Mt,onChange:nn,id:"liquidity-token-search-input"})}),Object(S["jsx"])("div",{className:x.a.coinList,children:Object(S["jsxs"])(c["t"],{children:[Object(S["jsx"])(D,{tab:"All",children:Qt.map(((e,t)=>Object(S["jsx"])(c["g"],{data:e,customIcon:!1,setAsFav:()=>vn(e),selectToken:()=>{gn(e)},isFav:mn.includes(e)},t)))},"1"),Object(S["jsx"])(D,{tab:"Favorite",children:mn.map(((e,t)=>Object(S["jsx"])(c["g"],{data:e,selectToken:()=>vn(t),customIcon:!1,index:t,setAsFav:()=>vn(token),hideFavButton:!0,isFav:mn.includes(e)},t)))},"2")]})})]})]})},F=Object(r["b"])((e=>{var t=e.global,n=e.transaction,a=e.loading,o=e.liquidity;return{global:t,transaction:n,loading:a.global,liquidity:o}}))(R),U=n("zHco"),W=n("EYsQ"),B=n.n(W),M=c["t"].AcyTabPane,Y=(I=Object(r["b"])((e=>{var t=e.profile,n=e.loading;return{profile:t,loading:n.effects["profile/fetchBasic"]}})),I(q=class extends o["Component"]{constructor(){super(...arguments),this.state={visible:!1,visibleConfirmOrder:!1,visibleLoading:!1,tabIndex:1,loggedIn:!1},this.lineTitleRender=()=>[Object(S["jsxs"])("div",{children:[Object(S["jsxs"])("div",{className:B.a.maintitle,children:[Object(S["jsx"])("span",{className:B.a.lighttitle,children:"ETH"}),"/BTC"]}),Object(S["jsxs"])("div",{className:B.a.secondarytitle,children:[Object(S["jsx"])("span",{className:B.a.lighttitle,children:"212.123"})," ",Object(S["jsx"])("span",{className:B.a.percentage,children:"+12.45%"})," 2021.07.11"]})]}),Object(S["jsx"])(c["q"],{onhandPeriodTimeChoose:this.onhandPeriodTimeChoose,className:B.a.pt,times:["1D","7D","1M","1Y","All"]})],this.onhandPeriodTimeChoose=e=>{console.log(e)},this.onClickCoin=()=>{this.setState({visible:!0})},this.onCancel=()=>{this.setState({visible:!1})},this.onHandModalConfirmOrder=e=>{this.setState({visibleConfirmOrder:!!e})},this.onChangeTabs=e=>{this.setState({tabIndex:e})},this.onLoggedIn=()=>{this.setState({loggedIn:!0})}}componentDidMount(){}render(){var e=this.state,t=e.visible,n=e.visibleConfirmOrder,o=e.visibleLoading,r=(e.tabIndex,e.loggedIn);return Object(S["jsxs"])(U["a"],{children:[Object(S["jsxs"])("div",{className:r?B.a.main:B.a.main_notLoggedIn,children:[Object(S["jsx"])("div",{children:r&&Object(S["jsx"])(c["o"],{})}),Object(S["jsx"])("div",{children:Object(S["jsx"])(c["e"],{style:{backgroundColor:"#0e0304",padding:"10px"},children:Object(S["jsx"])("div",{className:B.a.addLiquidity,children:Object(S["jsx"])(F,{onLoggedIn:this.onLoggedIn})})})})]}),Object(S["jsxs"])(c["p"],{onCancel:this.onCancel,width:600,visible:t,children:[Object(S["jsxs"])("div",{className:B.a.title,children:[Object(S["jsx"])(c["l"],{name:"back"})," Select a token"]}),Object(S["jsx"])("div",{className:B.a.search,children:Object(S["jsx"])(c["m"],{placeholder:"Enter the token symbol or address",suffix:Object(S["jsx"])(c["l"],{name:"search"})})}),Object(S["jsx"])("div",{className:B.a.coinList,children:Object(S["jsxs"])(c["t"],{children:[Object(S["jsxs"])(M,{tab:"All",children:[Object(S["jsx"])(c["g"],{}),Object(S["jsx"])(c["g"],{}),Object(S["jsx"])(c["g"],{}),Object(S["jsx"])(c["g"],{})]},"1"),Object(S["jsx"])(M,{tab:"Favorite"},"2"),Object(S["jsx"])(M,{tab:"Index"},"3"),Object(S["jsx"])(M,{tab:"Synth"},"4")]})})]}),Object(S["jsx"])(c["h"],{onCancel:this.onHandModalConfirmOrder,title:"Comfirm Order",visible:n,children:Object(S["jsxs"])("div",{className:B.a.confirm,children:[Object(S["jsx"])("p",{children:"ETH\uff1a 566.228"}),Object(S["jsx"])("p",{children:"BTC\uff1a2.669"}),Object(S["jsx"])("p",{children:"Price\uff1a212.123"}),Object(S["jsx"])("p",{children:"Price Impact\uff1a2.232%"}),Object(S["jsx"])("p",{children:"Liquidity Provide Fee: 0.321%"}),Object(S["jsx"])("p",{children:"Alpha: 0.371%"}),Object(S["jsx"])("p",{children:"Maximum sold: 566.221"}),Object(S["jsx"])(a["a"],{size:"large",type:"primary",children:"Confirm"})]})}),Object(S["jsx"])(c["b"],{onCancel:()=>this.setState({visibleLoading:!1}),visible:o})]})}})||q);t["default"]=Y},zHco:function(e,t,n){"use strict";var a=n("PpiC"),o=n("q1tI"),r=(n("cWXX"),n("/ezw"),n("k1fw"),n("Znn+"),n("ZTPi")),c=(n("TSYQ"),n("PCKb"),n("sPJy"),n("bE4q"),n("vRGJ"),n("S/9j"),n("nKUr"));o["PureComponent"];r["a"].TabPane;o["PureComponent"];var s=n("9kvl"),i=n("GvbY"),l=n.n(i);class u extends o["PureComponent"]{render(){var e=this.props,t=e.contentWidth,n=e.children,a="".concat(l.a.main);return"Fixed"===t&&(a="".concat(l.a.main," ").concat(l.a.wide)),Object(c["jsx"])("div",{className:a,children:n})}}var b=Object(s["b"])((e=>{var t=e.setting;return{contentWidth:t.contentWidth}}))(u),d=n("U0CE"),j=n.n(d),h=(n("R1Dz"),e=>{var t=e.children,n=(e.contentWidth,e.wrapperClassName),o=e.top;Object(a["a"])(e,["children","contentWidth","wrapperClassName","top"]);return Object(c["jsxs"])("div",{style:{margin:"-24px -24px 0"},className:n,children:[o,t?Object(c["jsx"])("div",{className:j.a.content,children:Object(c["jsx"])(b,{children:t})}):null]})});t["a"]=Object(s["b"])((e=>{var t=e.setting;return{contentWidth:t.contentWidth}}))(h)}}]);