(this.webpackJsonpcashswap=this.webpackJsonpcashswap||[]).push([[0],{100:function(n){n.exports=JSON.parse('{"GBP":{"name":"British Pound","symbol":"\xa3","code":"GBP","amount":60},"EUR":{"name":"Euro","symbol":"\u20ac","code":"EUR","amount":21.03},"USD":{"name":"American Dollar","symbol":"$","code":"USD","amount":0}}')},112:function(n,e,t){n.exports=t(192)},192:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(26),o=t.n(c),i=(t(117),t(118),t(14)),u=t(2),l=t(3);function s(){var n=Object(u.a)(["\n      @media (max-width: ","px) {\n        ","\n      }\n    "]);return s=function(){return n},n}function m(){var n=Object(u.a)(["\n      @media (min-width: ","px) {\n        ","\n      }\n    "]);return m=function(){return n},n}function f(){var n=Object(u.a)(["\n      @media "," {\n        ","\n      }\n    "]);return f=function(){return n},n}function p(n){n.when=function(e){return e?n:function(){return""}}}function d(){var n=Object(u.a)(["\n  html {\n    font-family: 'Source Sans Pro', sans-serif;\n    font-size: 16px;\n    color: rgb(1, 1, 1);\n  }\n  \n  body {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    font-family: inherit;\n    \n    & > div {\n      height: 100%;\n      overflow: auto;\n    }\n  }\n  \n  .exchange-button {\n    display: block;\n    margin: 10px auto;\n    text-align: center;\n  }\n"]);return d=function(){return n},n}var b="#324a5e",h="#3498db",v="#e1e1e1",x=function(n){var e={},t={xs:[null,n.sm-1],sm:[n.sm,n.md-1],md:[n.md,n.lg-1],lg:[n.lg,null]};return Object.keys(t).reduce((function(n,e){var a=t[e].map((function(n,e){return n?0===e?"(min-width: ".concat(n,"px)"):"(max-width: ".concat(n,"px)"):null})).filter((function(n){return"string"===typeof n})).join(" and ");return n[e]=function(){return Object(l.b)(f(),a,l.b.apply(void 0,arguments))},p(n[e]),n}),e),Object.keys(n).reduce((function(e,t){return e[t].up=function(){return Object(l.b)(m(),n[t],l.b.apply(void 0,arguments))},e[t].down=function(){return Object(l.b)(s(),n[t],l.b.apply(void 0,arguments))},p(e[t].up),p(e[t].down),e}),e),e}({xs:576,sm:768,md:992,lg:1280}),g=Object(l.a)(d()),E=t(7),w=t(194),y=t(96),j=t.n(y);function O(n){return j()(n).format("0.00[00]")}function C(){var n=Object(u.a)(["\n  height: 250px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  text-shadow: 1px 1px 4px rgba(150, 150, 150, 1);\n  user-select: none;\n  \n  span {\n    font-size: 30px;\n    \n    &:first-child {\n      font-size: 50px;  \n    }\n  }\n"]);return C=function(){return n},n}var k=l.c.div(C());function S(n){var e=n.balance,t=parseInt(e.amount),a=e.amount-t;return r.a.createElement(k,null,r.a.createElement("div",null,r.a.createElement("span",null,e.symbol," ",t),r.a.createElement("span",null,O(a).replace(/^0\./,".")),r.a.createElement("div",null,e.code," - ",e.name)))}function R(){var n=Object(u.a)(["\n  background-color: #21D4FD;\n  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);\n  border-radius: 6px;\n  \n  .ant-carousel {\n    color: white;\n    \n    .slick-dots {\n      margin-bottom: 20px;\n      \n      li {\n        margin: 0 5px;\n        \n        button {\n          border-radius: 50%;\n          height: 10px;\n          width: 10px;\n        }     \n      }\n    }\n  }\n"]);return R=function(){return n},n}var z=l.c.div(R());function B(n){var e=n.values;return r.a.createElement(z,null,r.a.createElement(w.a,{draggable:!0},Object.values(e).map((function(n){return r.a.createElement(S,{balance:n,key:n.code})}))))}function N(){var n=Object(u.a)(["\n  margin: 0 auto;\n  max-width: 512px;\n  padding-bottom: 20px;\n  padding-top: 20px;\n"]);return N=function(){return n},n}var U=l.c.div(N());function D(){var n=Object(u.a)(["max-width: 1140px;"]);return D=function(){return n},n}function F(){var n=Object(u.a)(["max-width: 960px;"]);return F=function(){return n},n}function I(){var n=Object(u.a)(["max-width: 720px;"]);return I=function(){return n},n}function P(){var n=Object(u.a)(["max-width: 540px;"]);return P=function(){return n},n}function J(){var n=Object(u.a)(["\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  width: 100%;\n\n  ","\n  ","\n  ","\n  ","\n"]);return J=function(){return n},n}var G=l.c.div(J(),x.xs.up(P()),x.sm.up(I()),x.md.up(F()),x.lg.up(D())),W=t(107);function V(){var n=Object(u.a)(["\n  border: 1px solid ",";\n  border-radius: 25px;\n  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.1);\n  transition: 300ms;\n  \n  &:focus-within {\n    border-color: ",";\n  }\n  \n  input {\n    border: none;\n    flex-grow: 1;\n    font-size: 1.5rem;\n    outline: 0;\n    width: 100%;\n    -moz-appearance: textfield;\n    \n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n      /* display: none; <- Crashes Chrome on hover */\n      -webkit-appearance: none;\n      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */\n    }\n  }\n  \n  .flex {\n    align-items: baseline;\n    display: flex;\n    justify-content: space-between;\n    font-size: 0.75rem;\n    padding: 0.75rem 1rem;\n  }\n"]);return V=function(){return n},n}var A=l.c.div(V(),v,h);function T(n){var e=n.currentCurrency,t=n.value,a=n.onValueChange,c=n.onCurrencySelect,o=(n.type,n.currencies),i=n.other;return r.a.createElement(A,null,r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,e.name),r.a.createElement("div",null,"Balance: ",O(e.amount),r.a.createElement("br",null))),r.a.createElement("div",{className:"flex"},r.a.createElement(W.a,{value:t,onChange:a,placeholder:"0.00",min:0,onKeyPress:function(n){45===(n.which?n.which:n.keyCode)&&(n.preventDefault(),n.stopPropagation())}}),r.a.createElement(q,{balances:o,except:i,value:e.code,onChange:c})))}function $(){var n=Object(u.a)(["\n  background-color: white;\n  border: 1px solid ",";\n  border-radius: 25px;\n  font-size: 1rem;\n  padding: 5px 20px;\n  /* for Firefox */\n  -moz-appearance: none;\n  /* for Chrome */\n  -webkit-appearance: none;\n  outline: 0;\n  //width: 50px;\n  &:focus {\n    border-color: ",";\n  }\n"]);return $=function(){return n},n}var K=l.c.select($(),v,h);function q(n){var e=n.except,t=n.balances,a=n.value,c=n.onChange,o=Object.values(t).filter((function(n){return n.code!==e}));return r.a.createElement(K,{value:a,onChange:function(n){return c(n.target.value)}},o.map((function(n){return r.a.createElement("option",{value:n.code,key:n.code,label:n.code},n.code)})))}function H(){var n=Object(u.a)(["\n  display: block;\n  cursor: pointer;\n  font-size: 24px;\n  text-align: center;\n  padding: 5px 0;\n"]);return H=function(){return n},n}var L=l.c.span(H());function M(n){var e=n.onSwap;return r.a.createElement(L,{onClick:e},"\u2193")}function Q(){var n=Object(u.a)(["\n  display: flex;\n  font-size: 0.75rem;\n  justify-content: space-between;\n  padding: 0 15px;\n  margin: 10px 0 30px;\n"]);return Q=function(){return n},n}var X=l.c.div(Q());function Y(n){var e=n.from,t=n.to,a=n.rate;return r.a.createElement(X,null,r.a.createElement("span",null,"Exchange rate: "),r.a.createElement("span",null,e.symbol,"1 = ",t.symbol,O(a)))}var Z=t(98),_=t.n(Z);function nn(){var n=Object(u.a)(["\n  img {\n    max-width: 26px;\n    display: inline-block;\n  }\n  \n  h1 {\n    color: ",";\n    display: inline-block;\n    font-size: 16px;\n    font-weight: lighter;\n    margin: 0 10px;\n  }\n  \n  "," {\n    display: flex;\n    align-items: center;\n    padding: 20px 15px;\n    user-select: none;\n  }\n  \n  a {\n    display: flex;\n  }\n"]);return nn=function(){return n},n}var en=l.c.header(nn(),b,G);function tn(){return r.a.createElement(en,null,r.a.createElement(G,null,r.a.createElement(i.b,{to:"/"},r.a.createElement("img",{src:_.a,alt:"Cashswap"}),r.a.createElement("h1",null,"Cashswap"))))}var an=t(20);function rn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  \n  main {\n    flex-grow: 1;\n    padding: 30px 0;\n  }\n"]);return rn=function(){return n},n}var cn=l.c.div(rn());function on(n){var e=n.children,t=n.path,a=n.exact,c=void 0!==a&&a,o=n.render;return r.a.createElement(an.a,{path:t,exact:c,render:function(){return r.a.createElement(cn,null,r.a.createElement("main",null,"function"===typeof o?o.apply(void 0,arguments):e))}})}var un=t(100),ln=t(28),sn=t.n(ln),mn=t(101),fn=t(102),pn=t(103),dn=t.n(pn),bn=function(){function n(e){Object(mn.a)(this,n);var t=function(){try{return JSON.parse(window.localStorage.getItem("balances"))}catch(n){return null}}();this.balances=t||e,hn(this.balances)}return Object(fn.a)(n,[{key:"fetchBalances",value:function(){return sn.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",dn()({},this.balances));case 1:case"end":return n.stop()}}),null,this)}},{key:"exchange",value:function(e){var t,a,r,c;return sn.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(t=e.from,a=e.to,r=e.amount,n.CURRENCIES.includes(t)){o.next=5;break}throw new Error("Currency not available. Received ".concat(t));case 5:if(n.CURRENCIES.includes(a)){o.next=7;break}throw new Error("Currency not available. Received ".concat(a));case 7:if(!(r>this.balances[t].amount)){o.next=9;break}throw new Error("Not enough balance.");case 9:return o.next=11,sn.a.awrap(this.getRate({from:t,to:a}));case 11:c=o.sent,this.balances[t].amount-=r,this.balances[a].amount+=r*c,hn(this.balances);case 15:case"end":return o.stop()}}),null,this)}},{key:"getRate",value:function(e){var t,a,r,c;return sn.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(t=e.from,a=e.to,n.CURRENCIES.includes(t)){o.next=5;break}throw new Error("Currency not available. Received ".concat(t));case 5:if(n.CURRENCIES.includes(a)){o.next=9;break}throw new Error("Currency not available. Received ".concat(a));case 9:if(t!==a){o.next=11;break}return o.abrupt("return",1);case 11:return o.next=13,sn.a.awrap(fetch("https://api.exchangeratesapi.io/latest?base=".concat(t)));case 13:return r=o.sent,o.next=16,sn.a.awrap(r.json());case 16:return c=o.sent,o.abrupt("return",c.rates[a]);case 18:case"end":return o.stop()}}))}}]),n}();function hn(n){window.localStorage.setItem("balances",JSON.stringify(n))}bn.CURRENCIES=["USD","EUR","GBP"];var vn=new bn(un),xn=Object(a.createContext)(void 0);function gn(){return Object(a.useContext)(xn)}var En=t(195),wn=t(196);function yn(){var n=gn(),e=Object(E.a)(n,2),t=e[0],a=e[1];return r.a.createElement(on,{path:"/",exact:!0},r.a.createElement(G,null,r.a.createElement(U,null,a?r.a.createElement(En.a,null):r.a.createElement(B,{values:t}),r.a.createElement(i.b,{to:"/exchange",className:"exchange-button"},r.a.createElement(wn.a,{type:"primary",shape:"round",icon:"swap",size:"large",style:{maxWidth:300,width:"100%"}},"Exchange")))))}var jn=t(106),On=t(197);function Cn(){var n=gn(),e=Object(E.a)(n,3),t=e[0],c=e[1],o=e[2],u=Object(a.useState)(!1),l=Object(E.a)(u,2),s=l[0],m=l[1],f=Object(a.useState)(""),p=Object(E.a)(f,2),d=p[0],b=p[1],h=Object(a.useState)(""),v=Object(E.a)(h,2),x=v[0],g=v[1],w=function(n,e){var t=Object(a.useState)(n),r=Object(E.a)(t,2),c=r[0],o=r[1],i=Object(a.useState)(e),u=Object(E.a)(i,2),l=u[0],s=u[1];return{from:c,setFrom:o,to:l,setTo:s,toggle:function(){o(l),s(c)}}}("GBP","EUR"),y=w.from,j=w.setFrom,C=w.to,k=w.setTo,S=w.toggle,R=function(n,e){var t=Object(a.useState)(null),r=Object(E.a)(t,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){vn.getRate({from:n,to:e}).then(o)}),[n,e]),c}(y,C),z=function(){b(""),g("")},B="number"!==typeof d&&0!==d||d>t[y].amount;return r.a.createElement(on,{path:"/exchange"},r.a.createElement(G,null,r.a.createElement(i.b,{to:"/"},r.a.createElement(wn.a,{type:"ghost"},r.a.createElement(jn.a,{type:"left"}),"Back")),r.a.createElement(U,null,c?r.a.createElement(En.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{currentCurrency:t[y],value:d,onValueChange:function(n){"string"===typeof n?z():(b(n),g(O(R*n)))},onCurrencySelect:j,currencies:t,other:C}),r.a.createElement(M,{onSwap:function(){z(),S()}}),r.a.createElement(T,{currentCurrency:t[C],value:x,onValueChange:function(n){"string"===typeof n?z():(g(n),b(O(n/R)))},onCurrencySelect:k,currencies:t,other:y}),r.a.createElement(Y,{from:t[y],to:t[C],rate:O(R)}),r.a.createElement(On.a,{type:"flex",justify:"center"},r.a.createElement(wn.a,{type:"primary",size:"large",shape:"round",onClick:function(){B||(m(!0),vn.exchange({from:y,to:C,amount:d}).then(o).then(z).finally((function(){return m(!1)})))},loading:s,disabled:B,style:{maxWidth:300,width:"100%"}},"Swap"))))))}var kn=function(){var n=function(){var n=Object(a.useState)(null),e=Object(E.a)(n,2),t=e[0],r=e[1],c=Object(a.useCallback)((function(){vn.fetchBalances().then(r)}),[]);return Object(a.useEffect)(c,[c]),[t,null===t,c]}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(xn.Provider,{value:n},r.a.createElement(i.a,null,r.a.createElement(tn,null),r.a.createElement(Cn,null),r.a.createElement(yn,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(kn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},98:function(n,e,t){n.exports=t.p+"static/media/logo.cc8307fe.svg"}},[[112,1,2]]]);
//# sourceMappingURL=main.8b9b1316.chunk.js.map