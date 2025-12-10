module.exports=[65066,a=>{"use strict";let b,c;var d,e=a.i(87924),f=a.i(72131),g=a.i(46842),h=a.i(70106);let i=(0,h.default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),j=(0,h.default)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),k=(0,h.default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]),l=(0,h.default)("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),m=(0,h.default)("pen-line",[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]),n=(0,h.default)("save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);var o=a.i(33508);let p=(0,h.default)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);var q=a.i(96221);let r=(0,h.default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),s=(0,h.default)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),t=(0,h.default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);var u=a.i(26405),u=u;let v=(0,h.default)("briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]),w=(0,h.default)("graduation-cap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);var x=a.i(29262),y=a.i(10918);let z={data:""},A=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,B=/\/\*[^]*?\*\/|  +/g,C=/\n+/g,D=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?D(g,f):f+"{"+D(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=D(g,b?b.replace(/([^,])+/g,a=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=D.p?D.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},E={},F=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+F(a[c]);return b}return a};function G(a){let b,c,d=this||{},e=a.call?a(d.p):a;return((a,b,c,d,e)=>{var f;let g=F(a),h=E[g]||(E[g]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(g));if(!E[h]){let b=g!==a?a:(a=>{let b,c,d=[{}];for(;b=A.exec(a.replace(B,""));)b[4]?d.shift():b[3]?(c=b[3].replace(C," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(C," ").trim();return d[0]})(a);E[h]=D(e?{["@keyframes "+h]:b}:b,c?"":"."+h)}let i=c&&E.g?E.g:null;return c&&(E.g=E[h]),f=E[h],i?b.data=b.data.replace(i,f):-1===b.data.indexOf(f)&&(b.data=d?f+b.data:b.data+f),h})(e.unshift?e.raw?(b=[].slice.call(arguments,1),c=d.p,e.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let a=f(c),b=a&&a.props&&a.props.className||/^go/.test(a)&&a;f=b?"."+b:a&&"object"==typeof a?a.props?"":D(a,""):!1===a?"":a}return a+d+(null==f?"":f)},"")):e.reduce((a,b)=>Object.assign(a,b&&b.call?b(d.p):b),{}):e,d.target||z,d.g,d.o,d.k)}G.bind({g:1});let H,I,J,K=G.bind({k:1});function L(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:I&&I()},h),c.o=/ *go\d+/.test(i),h.className=G.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),J&&j[0]&&J(h),H(j,h)}return b?b(e):e}}var M=(a,b)=>"function"==typeof a?a(b):a,N=(b=0,()=>(++b).toString()),O="default",P=(a,b)=>{let{toastLimit:c}=a.settings;switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,c)};case 1:return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:d}=b;return P(a,{type:+!!a.toasts.find(a=>a.id===d.id),toast:d});case 3:let{toastId:e}=b;return{...a,toasts:a.toasts.map(a=>a.id===e||void 0===e?{...a,dismissed:!0,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let f=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+f}))}}},Q=[],R={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},S={},T=(a,b=O)=>{S[b]=P(S[b]||R,a),Q.forEach(([a,c])=>{a===b&&c(S[b])})},U=a=>Object.keys(S).forEach(b=>T(a,b)),V=(a=O)=>b=>{T(b,a)},W={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},X=a=>(b,c)=>{let d,e=((a,b="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||N()}))(b,a,c);return V(e.toasterId||(d=e.id,Object.keys(S).find(a=>S[a].toasts.some(a=>a.id===d))))({type:2,toast:e}),e.id},Y=(a,b)=>X("blank")(a,b);Y.error=X("error"),Y.success=X("success"),Y.loading=X("loading"),Y.custom=X("custom"),Y.dismiss=(a,b)=>{let c={type:3,toastId:a};b?V(b)(c):U(c)},Y.dismissAll=a=>Y.dismiss(void 0,a),Y.remove=(a,b)=>{let c={type:4,toastId:a};b?V(b)(c):U(c)},Y.removeAll=a=>Y.remove(void 0,a),Y.promise=(a,b,c)=>{let d=Y.loading(b.loading,{...c,...null==c?void 0:c.loading});return"function"==typeof a&&(a=a()),a.then(a=>{let e=b.success?M(b.success,a):void 0;return e?Y.success(e,{id:d,...c,...null==c?void 0:c.success}):Y.dismiss(d),a}).catch(a=>{let e=b.error?M(b.error,a):void 0;e?Y.error(e,{id:d,...c,...null==c?void 0:c.error}):Y.dismiss(d)}),a};var Z=1e3,$=K`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,_=K`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,aa=K`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ab=L("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${_} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${aa} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ac=K`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ad=L("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${ac} 1s linear infinite;
`,ae=K`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,af=K`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ag=L("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ae} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${af} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ah=L("div")`
  position: absolute;
`,ai=L("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,aj=K`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ak=L("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${aj} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,al=({toast:a})=>{let{icon:b,type:c,iconTheme:d}=a;return void 0!==b?"string"==typeof b?f.createElement(ak,null,b):b:"blank"===c?null:f.createElement(ai,null,f.createElement(ad,{...d}),"loading"!==c&&f.createElement(ah,null,"error"===c?f.createElement(ab,{...d}):f.createElement(ag,{...d})))},am=L("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,an=L("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ao=f.memo(({toast:a,position:b,style:d,children:e})=>{let g=a.height?((a,b)=>{let d=a.includes("top")?1:-1,[e,f]=c?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*d}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*d}%,-1px) scale(.6); opacity:0;}
`];return{animation:b?`${K(e)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${K(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(a.position||b||"top-center",a.visible):{opacity:0},h=f.createElement(al,{toast:a}),i=f.createElement(an,{...a.ariaProps},M(a.message,a));return f.createElement(am,{className:a.className,style:{...g,...d,...a.style}},"function"==typeof e?e({icon:h,message:i}):f.createElement(f.Fragment,null,h,i))});d=f.createElement,D.p=void 0,H=d,I=void 0,J=void 0;var ap=({id:a,className:b,style:c,onHeightUpdate:d,children:e})=>{let g=f.useCallback(b=>{if(b){let c=()=>{d(a,b.getBoundingClientRect().height)};c(),new MutationObserver(c).observe(b,{subtree:!0,childList:!0,characterData:!0})}},[a,d]);return f.createElement("div",{ref:g,className:b,style:c},e)},aq=G`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ar=({reverseOrder:a,position:b="top-center",toastOptions:d,gutter:e,children:g,toasterId:h,containerStyle:i,containerClassName:j})=>{let{toasts:k,handlers:l}=((a,b="default")=>{let{toasts:c,pausedAt:d}=((a={},b=O)=>{let[c,d]=(0,f.useState)(S[b]||R),e=(0,f.useRef)(S[b]);(0,f.useEffect)(()=>(e.current!==S[b]&&d(S[b]),Q.push([b,d]),()=>{let a=Q.findIndex(([a])=>a===b);a>-1&&Q.splice(a,1)}),[b]);let g=c.toasts.map(b=>{var c,d,e;return{...a,...a[b.type],...b,removeDelay:b.removeDelay||(null==(c=a[b.type])?void 0:c.removeDelay)||(null==a?void 0:a.removeDelay),duration:b.duration||(null==(d=a[b.type])?void 0:d.duration)||(null==a?void 0:a.duration)||W[b.type],style:{...a.style,...null==(e=a[b.type])?void 0:e.style,...b.style}}});return{...c,toasts:g}})(a,b),e=(0,f.useRef)(new Map).current,g=(0,f.useCallback)((a,b=Z)=>{if(e.has(a))return;let c=setTimeout(()=>{e.delete(a),h({type:4,toastId:a})},b);e.set(a,c)},[]);(0,f.useEffect)(()=>{if(d)return;let a=Date.now(),e=c.map(c=>{if(c.duration===1/0)return;let d=(c.duration||0)+c.pauseDuration-(a-c.createdAt);if(d<0){c.visible&&Y.dismiss(c.id);return}return setTimeout(()=>Y.dismiss(c.id,b),d)});return()=>{e.forEach(a=>a&&clearTimeout(a))}},[c,d,b]);let h=(0,f.useCallback)(V(b),[b]),i=(0,f.useCallback)(()=>{h({type:5,time:Date.now()})},[h]),j=(0,f.useCallback)((a,b)=>{h({type:1,toast:{id:a,height:b}})},[h]),k=(0,f.useCallback)(()=>{d&&h({type:6,time:Date.now()})},[d,h]),l=(0,f.useCallback)((a,b)=>{let{reverseOrder:d=!1,gutter:e=8,defaultPosition:f}=b||{},g=c.filter(b=>(b.position||f)===(a.position||f)&&b.height),h=g.findIndex(b=>b.id===a.id),i=g.filter((a,b)=>b<h&&a.visible).length;return g.filter(a=>a.visible).slice(...d?[i+1]:[0,i]).reduce((a,b)=>a+(b.height||0)+e,0)},[c]);return(0,f.useEffect)(()=>{c.forEach(a=>{if(a.dismissed)g(a.id,a.removeDelay);else{let b=e.get(a.id);b&&(clearTimeout(b),e.delete(a.id))}})},[c,g]),{toasts:c,handlers:{updateHeight:j,startPause:i,endPause:k,calculateOffset:l}}})(d,h);return f.createElement("div",{"data-rht-toaster":h||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:j,onMouseEnter:l.startPause,onMouseLeave:l.endPause},k.map(d=>{let h,i,j=d.position||b,k=l.calculateOffset(d,{reverseOrder:a,gutter:e,defaultPosition:b}),m=(h=j.includes("top"),i=j.includes("center")?{justifyContent:"center"}:j.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:c?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${k*(h?1:-1)}px)`,...h?{top:0}:{bottom:0},...i});return f.createElement(ap,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?aq:"",style:m},"custom"===d.type?M(d.message,d):g?g(d):f.createElement(ao,{toast:d,position:j}))}))},as=a.i(6219),at=a.i(50944);let au=({options:a,placeholder:b="Search...",onChange:c,value:d})=>{let[g,h]=(0,f.useState)(""),[i,j]=(0,f.useState)(!1),[k,l]=(0,f.useState)(a),m=(0,f.useRef)(null),n=(0,f.useRef)(null);(0,f.useEffect)(()=>{let a=a=>{m.current&&!m.current.contains(a.target)&&j(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]);let o=Object.keys(k).length>0;return(0,e.jsxs)("div",{ref:m,className:"relative w-full touch-manipulation",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-center w-full px-4 py-2 border border-gray-300 rounded-md focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 bg-white",children:[d.map((a,b)=>(0,e.jsxs)("div",{className:"flex items-center bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-1 px-2 py-1 rounded-full",children:[a.option,(0,e.jsx)("button",{type:"button",onClick:()=>{var b,e;return b=a.option,e=a.category,void c(d.filter(a=>a.option!==b||a.category!==e))},className:"ml-1 text-blue-600 hover:text-blue-800 focus:outline-none",children:"×"})]},b)),(0,e.jsx)("input",{ref:n,type:"text",value:g,onChange:b=>{let c=b.target.value.toLowerCase();h(b.target.value);let d={};Object.entries(a).forEach(([a,b])=>{let e=b.filter(a=>a.toLowerCase().includes(c));e.length>0&&(d[a]=e)}),l(d),j(!0)},placeholder:0===d.length?b:"",className:" outline-none bg-transparent min-w-[120px]",onFocus:a=>{if(void 0!==window.scrollY){let a=window.scrollY+250;setTimeout(()=>{window.scrollTo(0,a)},0)}j(!0)},autoComplete:"off",inputMode:"text"})]}),i&&o&&(0,e.jsx)("ul",{className:"z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg",children:Object.entries(k).map(([b,f])=>(0,e.jsxs)("li",{children:[(0,e.jsx)("div",{className:"px-4 py-1 text-sm font-semibold text-gray-600 bg-gray-100 sticky top-0",children:b}),(0,e.jsx)("ul",{children:f.map((f,g)=>{let i=d.some(a=>a.option===f&&a.category===b);return(0,e.jsx)("li",{onClick:()=>{c(d.some(a=>a.option===f&&a.category===b)?d.filter(a=>a.option!==f||a.category!==b):[...d,{option:f,category:b}]),h(""),l(a),n.current&&n.current.focus()},className:`px-4 py-2 cursor-pointer hover:bg-blue-100 ${i?"bg-blue-200":""}`,children:f},g)})})]},b))}),i&&!o&&(0,e.jsx)("div",{className:"absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 p-4 text-gray-500",children:"No options found"})]})};var av=a.i(71987);function aw(){let{user:a,updateProfile:b,getJobsOptions:c,getEducationOptions:d}=(0,y.useAuth)(),[h,z]=(0,f.useState)(!1),[A,B]=(0,f.useState)(!1),C=(0,at.useRouter)(),D=(0,f.useRef)(null),E=(0,as.default)({gender:"",dateOfBirth:"",birthTime:"",whatsappNumber:"+94",birthLocation:"",latitude:"",longitude:"",jobs:[],education:[]}),[F,G]=(0,f.useState)([]),[H,I]=(0,f.useState)([]),[J,K]=(0,f.useState)({}),[L,M]=(0,f.useState)({}),[N,O]=(0,f.useState)(""),[P,Q]=(0,f.useState)([]),[R,S]=(0,f.useState)(!1),[T,U]=(0,f.useState)(!1),V=(0,f.useRef)(null),[W,X]=(0,f.useState)(""),[Z,$]=(0,f.useState)(null);(0,f.useEffect)(()=>{(async()=>{try{let a=await c();K(a);let b=await d();M(b)}catch(a){Y.error("Failed to load options"),console.error(a)}})()},[c,d]),(0,f.useEffect)(()=>{a&&(E.setFormData({gender:a.gender||"",dateOfBirth:a.dateOfBirth||"",birthTime:a.birthTime||"",whatsappNumber:a.whatsappNumber||"+94",birthLocation:a.birthLocation||"",latitude:a.latitude||"",longitude:a.longitude||"",jobs:a.jobs||[],education:a.education||[]}),O(a.birthLocation||""),X(a.profileImage||""))},[a]),(0,f.useEffect)(()=>{Object.keys(J).length>0&&a?.jobs&&G(a.jobs.map(a=>({option:a,category:_(J,a)})))},[J,a]),(0,f.useEffect)(()=>{Object.keys(L).length>0&&a?.education&&I(a.education.map(a=>({option:a,category:_(L,a)})))},[L,a]);let _=(a,b)=>{for(let[c,d]of Object.entries(a))if(d.includes(b))return c;return""};(0,f.useEffect)(()=>(null==a?(D.current&&(clearTimeout(D.current),D.current=null),D.current||(D.current=setTimeout(()=>{C.push("/auth")},3e3))):D.current&&(clearTimeout(D.current),D.current=null),()=>{D.current&&clearTimeout(D.current)}),[a,C]);let aa=async a=>{if(a.trim().length<2)return void Q([]);S(!0);try{let b=await fetch(`https://api.locationiq.com/v1/autocomplete?key=pk.83ce678095a5989ba69f8649e97e1135&q=${encodeURIComponent(a)}&limit=8&countrycodes=lk&accept-language=si,en`),c=await b.json();Array.isArray(c)&&Q(c)}catch(a){console.error("Location search error:",a)}finally{S(!1)}};(0,f.useEffect)(()=>(V.current&&clearTimeout(V.current),V.current=setTimeout(()=>aa(N),400),()=>{V.current&&clearTimeout(V.current)}),[N]);let ab=a?.isProfileComplete,ac=async()=>{B(!0);try{let a={gender:E.formData.gender,dateOfBirth:E.formData.dateOfBirth,birthTime:E.formData.birthTime,whatsappNumber:E.formData.whatsappNumber,birthLocation:E.formData.birthLocation,latitude:E.formData.latitude,longitude:E.formData.longitude,jobs:F.map(a=>a.option),education:H.map(a=>a.option)};Z&&(a.profileImage=await new Promise((a,b)=>{let c=new FileReader;c.readAsDataURL(Z),c.onload=()=>a(c.result),c.onerror=b})),await b(a),Y.success("Profile updated successfully!"),z(!1),$(null),setTimeout(()=>{C.push("/")},1500)}catch(a){Y.error("Failed to update profile. Please try again.")}finally{B(!1)}};return null==a?(0,e.jsx)("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)(q.Loader2,{className:"w-12 h-12 animate-spin text-blue-600 mx-auto"}),(0,e.jsx)("p",{className:"mt-4 text-gray-600",children:"Loading profile..."})]})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ar,{position:"top-center"}),(0,e.jsxs)("div",{className:"min-h-screen bg-gray-50",children:[(0,e.jsx)(x.default,{}),(0,e.jsxs)("div",{className:"bg-white border-b border-gray-200 px-4 py-3 md:hidden flex items-center gap-3",children:[(0,e.jsx)("button",{onClick:()=>window.history.back(),className:"p-2 hover:bg-gray-100 rounded-lg",children:(0,e.jsx)(r,{className:"w-5 h-5"})}),(0,e.jsx)("span",{className:"font-semibold text-lg",children:"My Profile"})]}),(0,e.jsxs)("div",{className:"max-w-4xl mx-auto p-6 pt-8 pb-24",children:[(0,e.jsxs)("div",{className:"bg-white rounded-2xl shadow-xl overflow-hidden",children:[(0,e.jsx)("div",{className:"bg-linear-to-r from-blue-600 to-purple-600 h-32 md:h-48"}),(0,e.jsxs)("div",{className:"relative px-8 pb-10",children:[(0,e.jsx)("div",{className:"absolute -top-16 left-8 w-32 h-32 md:w-32 md:h-32",children:(0,e.jsxs)("div",{className:"relative w-full h-full",children:[(0,e.jsx)("div",{className:"bg-white rounded-full p-2 shadow-2xl w-full h-full",children:(0,e.jsx)("div",{className:`w-full h-full rounded-full flex items-center justify-center ${W?"overflow-hidden":"bg-blue-600"}`,children:W?(0,e.jsx)(av.default,{height:400,width:400,src:W,alt:"Profile",className:"w-full h-full object-cover"}):(0,e.jsx)(g.User,{className:"w-16 h-16 text-white"})})}),h&&(0,e.jsxs)("label",{htmlFor:"profile-upload",className:"absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer border border-gray-200",children:[(0,e.jsx)(m,{className:"w-5 h-5 text-blue-600"}),(0,e.jsx)("input",{id:"profile-upload",type:"file",accept:"image/*",className:"hidden",onChange:a=>{if(a.target.files&&a.target.files[0]){let b=a.target.files[0];$(b),X(URL.createObjectURL(b))}}})]})]})}),(0,e.jsxs)("div",{className:"pt-20 md:pt-16 text-center md:text-left md:flex md:justify-between md:items-end",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"text-3xl md:text-4xl font-bold text-black mt-4 md:mt-0",children:a.name||a.email?.split("@")[0]}),a.email?(0,e.jsxs)("p",{className:"text-gray-600 flex items-center gap-2 justify-center md:justify-start mt-2",children:[(0,e.jsx)(t,{className:"w-4 h-4"})," ",a.email]}):""]}),!h&&(0,e.jsx)("div",{className:"mt-6 md:mt-0 flex gap-3",children:(0,e.jsxs)("button",{onClick:()=>z(!0),className:"bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 flex items-center gap-2 shadow-lg",children:[(0,e.jsx)(m,{className:"w-5 h-5"})," Edit Profile"]})})]})]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-8",children:[(0,e.jsxs)("div",{className:"bg-white rounded-2xl shadow-lg p-8",children:[(0,e.jsxs)("h2",{className:"text-2xl font-bold text-black mb-6 flex items-center gap-3",children:[(0,e.jsx)(g.User,{className:"w-7 h-7 text-blue-600"})," Personal Information"]}),(0,e.jsxs)("div",{className:"space-y-5",children:[(0,e.jsxs)("div",{className:"flex justify-between items-center py-3 border-b border-gray-100",children:[(0,e.jsx)("span",{className:"text-gray-600",children:"Gender"}),h?(0,e.jsxs)("select",{value:E.formData.gender,onChange:a=>E.updateField("gender",a.target.value),className:"px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500",children:[(0,e.jsx)("option",{value:"",children:"Select"}),(0,e.jsx)("option",{value:"Male",children:"Male"}),(0,e.jsx)("option",{value:"Female",children:"Female"})]}):(0,e.jsx)("span",{className:"font-medium capitalize",children:E.formData.gender||"Not specified"})]}),(0,e.jsxs)("div",{className:"flex justify-between items-center py-3 border-b border-gray-100",children:[(0,e.jsxs)("span",{className:"text-gray-600 flex items-center gap-2",children:[(0,e.jsx)(i,{className:"w-4 h-4"})," Date of Birth"]}),h?(0,e.jsx)("input",{type:"date",value:E.formData.dateOfBirth,onChange:a=>E.updateField("dateOfBirth",a.target.value),className:"px-4 py-2 border rounded-lg"}):(0,e.jsx)("span",{className:"font-medium",children:E.formData.dateOfBirth?new Date(E.formData.dateOfBirth).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}):"Not specified"})]}),(0,e.jsxs)("div",{className:"flex justify-between items-center py-3 border-b border-gray-100",children:[(0,e.jsxs)("span",{className:"text-gray-600 flex items-center gap-2",children:[(0,e.jsx)(j,{className:"w-4 h-4"})," Birth Time"]}),h?(0,e.jsx)("input",{type:"time",value:E.formData.birthTime,onChange:a=>E.updateField("birthTime",a.target.value),className:"px-4 py-2 border rounded-lg"}):(0,e.jsx)("span",{className:"font-medium",children:E.formData.birthTime||"Not specified"})]}),(0,e.jsxs)("div",{className:"flex justify-between items-center py-3",children:[(0,e.jsxs)("span",{className:"text-gray-600 flex items-center gap-2",children:[(0,e.jsx)(k,{className:"w-4 h-4"})," WhatsApp"]}),h?(0,e.jsx)("input",{type:"tel",value:E.formData.whatsappNumber,onChange:a=>E.updateField("whatsappNumber",a.target.value),placeholder:"+94...",className:"px-4 py-2 border rounded-lg"}):(0,e.jsx)("span",{className:"font-medium",children:E.formData.whatsappNumber||"Not specified"})]})]})]}),(0,e.jsxs)("div",{className:"bg-white rounded-2xl shadow-lg p-8",children:[(0,e.jsxs)("h2",{className:"text-2xl font-bold text-black mb-6 flex items-center gap-3",children:[(0,e.jsx)(l,{className:"w-7 h-7 text-blue-600"})," Birth Place"]}),h?(0,e.jsxs)("div",{className:"space-y-4",children:[E.formData.birthLocation&&(0,e.jsxs)("div",{className:"bg-green-50 border-2 border-green-300 rounded-xl p-4 flex items-center justify-between",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)(u.default,{className:"w-6 h-6 text-green-600 shrink-0"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"font-semibold text-green-900",children:E.formData.birthLocation}),(0,e.jsxs)("p",{className:"text-sm text-green-700",children:["Lat: ",E.formData.latitude," | Lon:"," ",E.formData.longitude]})]})]}),(0,e.jsx)("button",{onClick:()=>{E.setFormData(a=>({...a,birthLocation:"",latitude:"",longitude:""})),O("")},className:"text-green-700 hover:text-green-900",children:(0,e.jsx)(o.X,{className:"w-5 h-5"})})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("input",{type:"text",value:N,onChange:a=>O(a.target.value),onFocus:()=>U(!0),placeholder:E.formData.birthLocation?"Change birth location...":"Search city in Sri Lanka...",className:`w-full pl-11 pr-10 py-3 border-2 rounded-lg focus:border-blue-600 outline-none transition-all ${E.formData.birthLocation?"border-green-300 bg-green-50":"border-gray-300"}`}),(0,e.jsx)(p,{className:"absolute left-3 top-3.5 w-5 h-5 text-gray-400"}),N&&(0,e.jsx)("button",{onClick:()=>O(""),className:"absolute right-3 top-3.5",children:(0,e.jsx)(o.X,{className:"w-5 h-5 text-gray-400 hover:text-gray-600"})}),T&&(0,e.jsx)("div",{className:"absolute left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-2xl z-50 max-h-60 overflow-y-auto",children:R?(0,e.jsxs)("div",{className:"p-4 flex items-center gap-3",children:[(0,e.jsx)(q.Loader2,{className:"w-5 h-5 animate-spin"})," ","Searching..."]}):P.length>0?P.map((a,b)=>(0,e.jsxs)("button",{onClick:()=>{let b;return b=a.display_place||a.display_name.split(",")[0],void(E.setFormData(c=>({...c,birthLocation:b,latitude:parseFloat(a.lat).toFixed(6),longitude:parseFloat(a.lon).toFixed(6)})),O(b),U(!1),Q([]),Y.success(`Birth location set to ${b}`,{icon:"🗺️",style:{background:"#10b981",color:"white"}}))},className:"w-full text-left px-4 py-3 hover:bg-blue-50 border-b last:border-b-0 flex gap-3",children:[(0,e.jsx)(l,{className:"w-5 h-5 text-blue-600 mt-0.5"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"font-medium",children:a.display_place||a.display_name.split(",")[0]}),(0,e.jsx)("div",{className:"text-sm text-gray-600",children:"Sri Lanka"})]})]},b)):N.length>=2?(0,e.jsx)("div",{className:"p-4 text-gray-500",children:"No results found"}):null})]})]}):E.formData.birthLocation?(0,e.jsxs)("div",{className:"space-y-4",children:[(0,e.jsxs)("div",{className:"bg-blue-50 border-2 border-blue-200 rounded-xl p-6",children:[(0,e.jsx)("p",{className:"text-lg font-bold text-black mb-3",children:E.formData.birthLocation}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[(0,e.jsxs)("div",{className:"bg-white p-4 rounded-lg",children:[(0,e.jsx)("span",{className:"text-gray-600 block",children:"Lat"}),(0,e.jsx)("code",{className:"font-mono text-blue-700 font-bold",children:E.formData.latitude})]}),(0,e.jsxs)("div",{className:"bg-white p-4 rounded-lg",children:[(0,e.jsx)("span",{className:"text-gray-600 block",children:"Lon"}),(0,e.jsx)("code",{className:"font-mono text-blue-700 font-bold",children:E.formData.longitude})]})]})]}),(0,e.jsxs)("a",{href:`https://www.google.com/maps?q=${E.formData.latitude},${E.formData.longitude}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-800",children:[(0,e.jsx)(s,{className:"w-5 h-5"})," View on Google Maps"]})]}):(0,e.jsx)("p",{className:"text-gray-500 italic",children:"Birth location not set"})]}),(0,e.jsxs)("div",{className:"bg-white rounded-2xl shadow-lg p-8",children:[(0,e.jsxs)("h2",{className:"text-2xl font-bold text-black mb-6 flex items-center gap-3",children:[(0,e.jsx)(w,{className:"w-7 h-7 text-blue-600"})," Education Qualifications"]}),h?(0,e.jsx)(au,{options:L,placeholder:"Search and select education qualifications...",onChange:a=>{I(a)},value:H}):H.length>0?(0,e.jsx)("div",{className:"flex flex-wrap gap-2",children:H.map((a,b)=>(0,e.jsx)("span",{className:"bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full",children:a.option},b))}):(0,e.jsx)("p",{className:"text-gray-500 italic",children:"No education qualifications added"})]}),(0,e.jsxs)("div",{className:"bg-white rounded-2xl shadow-lg p-8",children:[(0,e.jsxs)("h2",{className:"text-2xl font-bold text-black mb-6 flex items-center gap-3",children:[(0,e.jsx)(v,{className:"w-7 h-7 text-blue-600"})," Preferred Jobs"]}),h?(0,e.jsx)(au,{options:J,placeholder:"Search and select preferred jobs...",onChange:a=>{G(a)},value:F}):F.length>0?(0,e.jsx)("div",{className:"flex flex-wrap gap-2",children:F.map((a,b)=>(0,e.jsx)("span",{className:"bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full",children:a.option},b))}):(0,e.jsx)("p",{className:"text-gray-500 italic",children:"No preferred jobs added"})]})]}),!ab&&!h&&(0,e.jsxs)("div",{className:"mt-10 bg-linear-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-8 text-center",children:[(0,e.jsx)("h3",{className:"text-xl font-bold text-amber-900 mb-3",children:"Complete Your Profile for Accurate Predictions"}),(0,e.jsx)("p",{className:"text-amber-800 mb-6",children:"ඔබේ ජන්ම පත්‍රය නිවැරදිව ගණනය කිරීමට සියලුම තොරතුරු අවශ්‍යයි"}),(0,e.jsx)("button",{onClick:()=>z(!0),className:"bg-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-700 text-lg shadow-lg",children:"Complete Profile Now"})]}),ab&&!h&&(0,e.jsxs)("div",{className:"mt-10 bg-green-50 border-2 border-green-300 rounded-2xl p-8 text-center flex items-center justify-center gap-3",children:[(0,e.jsx)(u.default,{className:"w-8 h-8 text-green-600"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-xl font-bold text-green-900",children:"Profile Complete!"}),(0,e.jsx)("p",{className:"text-green-700",children:"You're all set for accurate horoscope predictions"})]})]})]}),h&&(0,e.jsx)("div",{className:"fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-50",children:(0,e.jsxs)("div",{className:"max-w-4xl mx-auto px-6 py-4 flex gap-3 justify-end",children:[(0,e.jsxs)("button",{onClick:()=>{a&&(E.setFormData({gender:a.gender||"",dateOfBirth:a.dateOfBirth||"",birthTime:a.birthTime||"",whatsappNumber:a.whatsappNumber||"",birthLocation:a.birthLocation||"",latitude:a.latitude||"",longitude:a.longitude||"",jobs:a.jobs||[],education:a.education||[]}),G(a.jobs.map(a=>({option:a,category:_(J,a)}))),I(a.education.map(a=>({option:a,category:_(L,a)}))),O(a.birthLocation||""),X(a.profileImage||""),$(null)),z(!1)},className:"bg-gray-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-600 flex items-center gap-2 shadow-lg",children:[(0,e.jsx)(o.X,{className:"w-5 h-5"})," Cancel"]}),(0,e.jsxs)("button",{onClick:ac,disabled:A,className:"bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 flex items-center gap-2 shadow-lg disabled:opacity-70",children:[A?(0,e.jsx)(q.Loader2,{className:"w-5 h-5 animate-spin"}):(0,e.jsx)(n,{className:"w-5 h-5"}),A?"Saving...":"Save Changes"]})]})})]})]})}a.s(["default",()=>aw],65066)}];

//# sourceMappingURL=app_profile_page_tsx_d7e3fb30._.js.map