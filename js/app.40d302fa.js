(function(){var n={4304:function(n,e,t){"use strict";var o=t(9242),a=t(3396),i=t(4870),r=t(7139),s=t(1323),c=t(6265),l=t.n(c);const u=n=>((0,a.dD)("data-v-0a26a8ee"),n=n(),(0,a.Cn)(),n),d={id:"wrapper"},p=u((()=>(0,a._)("header",null,[(0,a._)("h1",null,"MUSTYLINK"),(0,a._)("div",null,"무신사 코디숍을 이용한 추천 시스템")],-1))),f={class:"buttons-container"},g=["onClick"],v={class:"prediction-wrapper"},w={id:"webcam-container"},m={class:"loading"},h={class:"result-wrapper"},y={class:"result"},b={class:"styleBox-wrapper"},C=["onClick"],_=["href","src"];var k={setup(n){const e=["아메리칸 캐주얼","캐주얼","시크","댄디","포멀","걸리시","골프","레트로","로맨틱","스포츠","스트릿"],t=["americancasual","casual","chic","dandy","formal","girlish","golf","retro","romantic","sports","street"],c=(0,i.qj)({results:""}),u=(0,i.qj)({styles:[]});function k(n){window.open(n)}const S="FILE_MODE",j="WEBCAM_MODE",O=(0,i.qj)({classes:[],canvas:null,canvasContainer:null,mode:"",progress:0,loading:!1}),x="https://teachablemachine.withgoogle.com/models/XPw5FPKAW/",D=x+"model.json",F=x+"metadata.json";let U,E,M,I;async function A(){O.loading=!0,O.mode=j,U=await s.zD(D,F),M=U.getTotalClasses();const n=!0;E=new s.bb(400,400,n),await E.setup(),O.canvasContainer=document.getElementById("webcam-container"),O.canvas&&O.canvasContainer.removeChild(O.canvas),O.canvas=E.canvas,O.canvasContainer.appendChild(O.canvas),await E.play(),window.requestAnimationFrame(T),O.classes=M,O.loading=!1}async function T(){O.mode===j&&(E.update(),await q(E.canvas,!0),window.requestAnimationFrame(T))}async function q(n,o=!1){const a=await U.predict(n,o);O.classes=a.map((n=>n.className+": "+(100*n.probability.toFixed(2)).toFixed(0)+"%"));let i=0,r=0,s=0;a.map((n=>{const e=(100*n.probability.toFixed(2)).toFixed(0);r<e&&(r=e,s=i),i+=1})),c.results=e[s],l().get(`./json/${t[s]}.json`).then((n=>{u.styles=n.data})),console.log(u.styles[0])}const B=async n=>{U=await s.zD(D,F),M=U.getTotalClasses(),O.canvasContainer=document.getElementById("webcam-container"),O.canvas&&O.canvasContainer.removeChild(O.canvas);let e=new Image;e.onload=async()=>{let n=document.createElement("CANVAS"),t=n.getContext("2d");n.height=n.width*(e.height/e.width),t.drawImage(e,0,0,n.width,n.height),O.canvas=n,O.canvas.style.maxHeight="60vh",O.canvasContainer.appendChild(O.canvas),O.classes=M,await q(n,!1),O.loading=!1},e.src=n.target.result},P=n=>{let e=new FileReader;e.readAsDataURL(n),e.onprogress=z,e.onload=B,e.onerror=()=>{console.log("error")}};function z(n){console.log(n.type,n.loaded),n.lengthComputable&&(I=n.loaded/n.total,O.progress=200*I,I<1&&(console.log(I),O.progress=200*I))}const K=n=>{O.loading=!0,E&&E.stop(),O.mode=S;let e=n.target.files[0];e&&P(e)},H=()=>{O.progress=0,document.getElementById("file-uploader").click()};return(n,e)=>((0,a.wg)(),(0,a.iD)("div",d,[p,(0,a._)("div",f,[(0,a._)("button",{type:"button",onClick:e[0]||(e[0]=(0,o.iM)((n=>A()),["prevent"]))},"Start webcam"),(0,a._)("button",{type:"button",onClick:(0,o.iM)(H,["prevent"])},"Start image",8,g)]),0!==(0,i.SU)(O).progress&&200!==(0,i.SU)(O).progress?((0,a.wg)(),(0,a.iD)("div",{key:0,style:(0,r.j5)(`width: ${(0,i.SU)(O).progress}px; background: red; height: 20px;`)},(0,r.zw)((0,i.SU)(O).progress),5)):(0,a.kq)("",!0),(0,a._)("div",v,[(0,a.wy)((0,a._)("input",{id:"file-uploader",type:"file",onChange:K,accept:"image/*"},null,544),[[o.F8,!1]]),(0,a.wy)((0,a._)("div",w,null,512),[[o.F8,!(0,i.SU)(O).loading]]),(0,a.wy)((0,a._)("div",m,null,512),[[o.F8,(0,i.SU)(O).loading]]),(0,a._)("div",h,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(O).classes,(n=>((0,a.wg)(),(0,a.iD)("div",{key:n,class:"prediction-classes"},(0,r.zw)(n),1)))),128))])]),(0,a._)("a",y,(0,r.zw)((0,i.SU)(c).results),1),(0,a._)("div",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(u).styles,((n,e)=>((0,a.wg)(),(0,a.iD)("div",{class:"styleBox",key:e,onClick:e=>k(n.url)},[(0,a._)("img",{href:n.url,src:n.src,width:"230"},null,8,_)],8,C)))),128))])]))}},S=t(89);const j=(0,S.Z)(k,[["__scopeId","data-v-0a26a8ee"]]);var O=j,x={setup(n){return(n,e)=>((0,a.wg)(),(0,a.j4)(O))}};const D=x;var F=D;(0,o.ri)(F).mount("#app")},4902:function(){},522:function(){},753:function(){},802:function(){},7906:function(){},5688:function(){},5042:function(){}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={id:o,loaded:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=n,function(){t.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){t.amdO={}}(),function(){var n=[];t.O=function(e,o,a,i){if(!o){var r=1/0;for(u=0;u<n.length;u++){o=n[u][0],a=n[u][1],i=n[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||r>=i)&&Object.keys(t.O).every((function(n){return t.O[n](o[c])}))?o.splice(c--,1):(s=!1,i<r&&(r=i));if(s){n.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=n.length;u>0&&n[u-1][2]>i;u--)n[u]=n[u-1];n[u]=[o,a,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var a,i,r=o[0],s=o[1],c=o[2],l=0;if(r.some((function(e){return 0!==n[e]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(c)var u=c(t)}for(e&&e(o);l<r.length;l++)i=r[l],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(u)},o=self["webpackChunkmustylink"]=self["webpackChunkmustylink"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(4304)}));o=t.O(o)})();
//# sourceMappingURL=app.40d302fa.js.map