function wm(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Im(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dd={exports:{}},zo={},Md={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),Em=Symbol.for("react.portal"),Sm=Symbol.for("react.fragment"),km=Symbol.for("react.strict_mode"),Tm=Symbol.for("react.profiler"),Cm=Symbol.for("react.provider"),Pm=Symbol.for("react.context"),Rm=Symbol.for("react.forward_ref"),Nm=Symbol.for("react.suspense"),Om=Symbol.for("react.memo"),Am=Symbol.for("react.lazy"),Nu=Symbol.iterator;function xm(t){return t===null||typeof t!="object"?null:(t=Nu&&t[Nu]||t["@@iterator"],typeof t=="function"?t:null)}var Ud={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jd=Object.assign,bd={};function rr(t,e,n){this.props=t,this.context=e,this.refs=bd,this.updater=n||Ud}rr.prototype.isReactComponent={};rr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};rr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fd(){}Fd.prototype=rr.prototype;function hl(t,e,n){this.props=t,this.context=e,this.refs=bd,this.updater=n||Ud}var pl=hl.prototype=new Fd;pl.constructor=hl;jd(pl,rr.prototype);pl.isPureReactComponent=!0;var Ou=Array.isArray,$d=Object.prototype.hasOwnProperty,ml={current:null},zd={key:!0,ref:!0,__self:!0,__source:!0};function Vd(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)$d.call(e,r)&&!zd.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ai,type:t,key:o,ref:s,props:i,_owner:ml.current}}function Lm(t,e){return{$$typeof:ai,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vl(t){return typeof t=="object"&&t!==null&&t.$$typeof===ai}function Dm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Au=/\/+/g;function ps(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Dm(""+t.key):e.toString(36)}function Fi(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ai:case Em:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+ps(s,0):r,Ou(i)?(n="",t!=null&&(n=t.replace(Au,"$&/")+"/"),Fi(i,e,n,"",function(u){return u})):i!=null&&(vl(i)&&(i=Lm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Au,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Ou(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+ps(o,a);s+=Fi(o,e,n,l,i)}else if(l=xm(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+ps(o,a++),s+=Fi(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function wi(t,e,n){if(t==null)return t;var r=[],i=0;return Fi(t,r,"","",function(o){return e.call(n,o,i++)}),r}function Mm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ye={current:null},$i={transition:null},Um={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:$i,ReactCurrentOwner:ml};b.Children={map:wi,forEach:function(t,e,n){wi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wi(t,function(){e++}),e},toArray:function(t){return wi(t,function(e){return e})||[]},only:function(t){if(!vl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};b.Component=rr;b.Fragment=Sm;b.Profiler=Tm;b.PureComponent=hl;b.StrictMode=km;b.Suspense=Nm;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Um;b.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=jd({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=ml.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$d.call(e,l)&&!zd.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ai,type:t.type,key:i,ref:o,props:r,_owner:s}};b.createContext=function(t){return t={$$typeof:Pm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Cm,_context:t},t.Consumer=t};b.createElement=Vd;b.createFactory=function(t){var e=Vd.bind(null,t);return e.type=t,e};b.createRef=function(){return{current:null}};b.forwardRef=function(t){return{$$typeof:Rm,render:t}};b.isValidElement=vl;b.lazy=function(t){return{$$typeof:Am,_payload:{_status:-1,_result:t},_init:Mm}};b.memo=function(t,e){return{$$typeof:Om,type:t,compare:e===void 0?null:e}};b.startTransition=function(t){var e=$i.transition;$i.transition={};try{t()}finally{$i.transition=e}};b.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};b.useCallback=function(t,e){return ye.current.useCallback(t,e)};b.useContext=function(t){return ye.current.useContext(t)};b.useDebugValue=function(){};b.useDeferredValue=function(t){return ye.current.useDeferredValue(t)};b.useEffect=function(t,e){return ye.current.useEffect(t,e)};b.useId=function(){return ye.current.useId()};b.useImperativeHandle=function(t,e,n){return ye.current.useImperativeHandle(t,e,n)};b.useInsertionEffect=function(t,e){return ye.current.useInsertionEffect(t,e)};b.useLayoutEffect=function(t,e){return ye.current.useLayoutEffect(t,e)};b.useMemo=function(t,e){return ye.current.useMemo(t,e)};b.useReducer=function(t,e,n){return ye.current.useReducer(t,e,n)};b.useRef=function(t){return ye.current.useRef(t)};b.useState=function(t){return ye.current.useState(t)};b.useSyncExternalStore=function(t,e,n){return ye.current.useSyncExternalStore(t,e,n)};b.useTransition=function(){return ye.current.useTransition()};b.version="18.2.0";Md.exports=b;var k=Md.exports;const jm=Im(k),bm=wm({__proto__:null,default:jm},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm=k,$m=Symbol.for("react.element"),zm=Symbol.for("react.fragment"),Vm=Object.prototype.hasOwnProperty,Bm=Fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hm={key:!0,ref:!0,__self:!0,__source:!0};function Bd(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Vm.call(e,r)&&!Hm.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$m,type:t,key:o,ref:s,props:i,_owner:Bm.current}}zo.Fragment=zm;zo.jsx=Bd;zo.jsxs=Bd;Dd.exports=zo;var p=Dd.exports,ta={},Hd={exports:{}},Ne={},Wd={exports:{}},Kd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,D){var U=N.length;N.push(D);e:for(;0<U;){var ee=U-1>>>1,se=N[ee];if(0<i(se,D))N[ee]=D,N[U]=se,U=ee;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var D=N[0],U=N.pop();if(U!==D){N[0]=U;e:for(var ee=0,se=N.length,yi=se>>>1;ee<yi;){var rn=2*(ee+1)-1,hs=N[rn],on=rn+1,_i=N[on];if(0>i(hs,U))on<se&&0>i(_i,hs)?(N[ee]=_i,N[on]=U,ee=on):(N[ee]=hs,N[rn]=U,ee=rn);else if(on<se&&0>i(_i,U))N[ee]=_i,N[on]=U,ee=on;else break e}}return D}function i(N,D){var U=N.sortIndex-D.sortIndex;return U!==0?U:N.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,v=3,y=!1,g=!1,_=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=N)r(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function w(N){if(_=!1,m(N),!g)if(n(l)!==null)g=!0,ds(T);else{var D=n(u);D!==null&&fs(w,D.startTime-N)}}function T(N,D){g=!1,_&&(_=!1,h(A),A=-1),y=!0;var U=v;try{for(m(D),f=n(l);f!==null&&(!(f.expirationTime>D)||N&&!be());){var ee=f.callback;if(typeof ee=="function"){f.callback=null,v=f.priorityLevel;var se=ee(f.expirationTime<=D);D=t.unstable_now(),typeof se=="function"?f.callback=se:f===n(l)&&r(l),m(D)}else r(l);f=n(l)}if(f!==null)var yi=!0;else{var rn=n(u);rn!==null&&fs(w,rn.startTime-D),yi=!1}return yi}finally{f=null,v=U,y=!1}}var P=!1,O=null,A=-1,$=5,M=-1;function be(){return!(t.unstable_now()-M<$)}function hr(){if(O!==null){var N=t.unstable_now();M=N;var D=!0;try{D=O(!0,N)}finally{D?pr():(P=!1,O=null)}}else P=!1}var pr;if(typeof d=="function")pr=function(){d(hr)};else if(typeof MessageChannel<"u"){var Ru=new MessageChannel,_m=Ru.port2;Ru.port1.onmessage=hr,pr=function(){_m.postMessage(null)}}else pr=function(){C(hr,0)};function ds(N){O=N,P||(P=!0,pr())}function fs(N,D){A=C(function(){N(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||y||(g=!0,ds(T))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(v){case 1:case 2:case 3:var D=3;break;default:D=v}var U=v;v=D;try{return N()}finally{v=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,D){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var U=v;v=N;try{return D()}finally{v=U}},t.unstable_scheduleCallback=function(N,D,U){var ee=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ee+U:ee):U=ee,N){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=U+se,N={id:c++,callback:D,priorityLevel:N,startTime:U,expirationTime:se,sortIndex:-1},U>ee?(N.sortIndex=U,e(u,N),n(l)===null&&N===n(u)&&(_?(h(A),A=-1):_=!0,fs(w,U-ee))):(N.sortIndex=se,e(l,N),g||y||(g=!0,ds(T))),N},t.unstable_shouldYield=be,t.unstable_wrapCallback=function(N){var D=v;return function(){var U=v;v=D;try{return N.apply(this,arguments)}finally{v=U}}}})(Kd);Wd.exports=Kd;var Wm=Wd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd=k,Re=Wm;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qd=new Set,$r={};function In(t,e){qn(t,e),qn(t+"Capture",e)}function qn(t,e){for($r[t]=e,t=0;t<e.length;t++)qd.add(e[t])}var dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),na=Object.prototype.hasOwnProperty,Km=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xu={},Lu={};function Gm(t){return na.call(Lu,t)?!0:na.call(xu,t)?!1:Km.test(t)?Lu[t]=!0:(xu[t]=!0,!1)}function qm(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jm(t,e,n,r){if(e===null||typeof e>"u"||qm(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _e(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){de[t]=new _e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];de[e]=new _e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){de[t]=new _e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){de[t]=new _e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){de[t]=new _e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){de[t]=new _e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){de[t]=new _e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){de[t]=new _e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){de[t]=new _e(t,5,!1,t.toLowerCase(),null,!1,!1)});var gl=/[\-:]([a-z])/g;function yl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gl,yl);de[e]=new _e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gl,yl);de[e]=new _e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gl,yl);de[e]=new _e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){de[t]=new _e(t,1,!1,t.toLowerCase(),null,!1,!1)});de.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){de[t]=new _e(t,1,!1,t.toLowerCase(),null,!0,!0)});function _l(t,e,n,r){var i=de.hasOwnProperty(e)?de[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jm(e,n,i,r)&&(n=null),r||i===null?Gm(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var yt=Gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ii=Symbol.for("react.element"),Pn=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),wl=Symbol.for("react.strict_mode"),ra=Symbol.for("react.profiler"),Jd=Symbol.for("react.provider"),Qd=Symbol.for("react.context"),Il=Symbol.for("react.forward_ref"),ia=Symbol.for("react.suspense"),oa=Symbol.for("react.suspense_list"),El=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Yd=Symbol.for("react.offscreen"),Du=Symbol.iterator;function mr(t){return t===null||typeof t!="object"?null:(t=Du&&t[Du]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,ms;function Sr(t){if(ms===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ms=e&&e[1]||""}return`
`+ms+t}var vs=!1;function gs(t,e){if(!t||vs)return"";vs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{vs=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Sr(t):""}function Qm(t){switch(t.tag){case 5:return Sr(t.type);case 16:return Sr("Lazy");case 13:return Sr("Suspense");case 19:return Sr("SuspenseList");case 0:case 2:case 15:return t=gs(t.type,!1),t;case 11:return t=gs(t.type.render,!1),t;case 1:return t=gs(t.type,!0),t;default:return""}}function sa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rn:return"Fragment";case Pn:return"Portal";case ra:return"Profiler";case wl:return"StrictMode";case ia:return"Suspense";case oa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qd:return(t.displayName||"Context")+".Consumer";case Jd:return(t._context.displayName||"Context")+".Provider";case Il:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case El:return e=t.displayName||null,e!==null?e:sa(t.type)||"Memo";case kt:e=t._payload,t=t._init;try{return sa(t(e))}catch{}}return null}function Ym(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sa(e);case 8:return e===wl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Xm(t){var e=Xd(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ei(t){t._valueTracker||(t._valueTracker=Xm(t))}function Zd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xd(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function oo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function aa(t,e){var n=e.checked;return X({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mu(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ef(t,e){e=e.checked,e!=null&&_l(t,"checked",e,!1)}function la(t,e){ef(t,e);var n=qt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ua(t,e.type,n):e.hasOwnProperty("defaultValue")&&ua(t,e.type,qt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Uu(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ua(t,e,n){(e!=="number"||oo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var kr=Array.isArray;function $n(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ca(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return X({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ju(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(kr(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qt(n)}}function tf(t,e){var n=qt(e.value),r=qt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function bu(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function nf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function da(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?nf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Si,rf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Si=Si||document.createElement("div"),Si.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Si.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zm=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(t){Zm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Rr[e]=Rr[t]})});function of(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Rr.hasOwnProperty(t)&&Rr[t]?(""+e).trim():e+"px"}function sf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=of(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ev=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fa(t,e){if(e){if(ev[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function ha(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pa=null;function Sl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ma=null,zn=null,Vn=null;function Fu(t){if(t=ci(t)){if(typeof ma!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Ko(e),ma(t.stateNode,t.type,e))}}function af(t){zn?Vn?Vn.push(t):Vn=[t]:zn=t}function lf(){if(zn){var t=zn,e=Vn;if(Vn=zn=null,Fu(t),e)for(t=0;t<e.length;t++)Fu(e[t])}}function uf(t,e){return t(e)}function cf(){}var ys=!1;function df(t,e,n){if(ys)return t(e,n);ys=!0;try{return uf(t,e,n)}finally{ys=!1,(zn!==null||Vn!==null)&&(cf(),lf())}}function Vr(t,e){var n=t.stateNode;if(n===null)return null;var r=Ko(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var va=!1;if(dt)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){va=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{va=!1}function tv(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Nr=!1,so=null,ao=!1,ga=null,nv={onError:function(t){Nr=!0,so=t}};function rv(t,e,n,r,i,o,s,a,l){Nr=!1,so=null,tv.apply(nv,arguments)}function iv(t,e,n,r,i,o,s,a,l){if(rv.apply(this,arguments),Nr){if(Nr){var u=so;Nr=!1,so=null}else throw Error(I(198));ao||(ao=!0,ga=u)}}function En(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ff(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $u(t){if(En(t)!==t)throw Error(I(188))}function ov(t){var e=t.alternate;if(!e){if(e=En(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return $u(i),t;if(o===r)return $u(i),e;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function hf(t){return t=ov(t),t!==null?pf(t):null}function pf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pf(t);if(e!==null)return e;t=t.sibling}return null}var mf=Re.unstable_scheduleCallback,zu=Re.unstable_cancelCallback,sv=Re.unstable_shouldYield,av=Re.unstable_requestPaint,te=Re.unstable_now,lv=Re.unstable_getCurrentPriorityLevel,kl=Re.unstable_ImmediatePriority,vf=Re.unstable_UserBlockingPriority,lo=Re.unstable_NormalPriority,uv=Re.unstable_LowPriority,gf=Re.unstable_IdlePriority,Vo=null,Qe=null;function cv(t){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Vo,t,void 0,(t.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:hv,dv=Math.log,fv=Math.LN2;function hv(t){return t>>>=0,t===0?32:31-(dv(t)/fv|0)|0}var ki=64,Ti=4194304;function Tr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function uo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Tr(a):(o&=s,o!==0&&(r=Tr(o)))}else s=n&~i,s!==0?r=Tr(s):o!==0&&(r=Tr(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Be(e),i=1<<n,r|=t[n],e&=~i;return r}function pv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Be(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=pv(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function ya(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yf(){var t=ki;return ki<<=1,!(ki&4194240)&&(ki=64),t}function _s(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function li(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Be(e),t[e]=n}function vv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Be(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Tl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Be(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function _f(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wf,Cl,If,Ef,Sf,_a=!1,Ci=[],Mt=null,Ut=null,jt=null,Br=new Map,Hr=new Map,Ct=[],gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vu(t,e){switch(t){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Br.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(e.pointerId)}}function gr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=ci(e),e!==null&&Cl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function yv(t,e,n,r,i){switch(e){case"focusin":return Mt=gr(Mt,t,e,n,r,i),!0;case"dragenter":return Ut=gr(Ut,t,e,n,r,i),!0;case"mouseover":return jt=gr(jt,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Br.set(o,gr(Br.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Hr.set(o,gr(Hr.get(o)||null,t,e,n,r,i)),!0}return!1}function kf(t){var e=un(t.target);if(e!==null){var n=En(e);if(n!==null){if(e=n.tag,e===13){if(e=ff(n),e!==null){t.blockedOn=e,Sf(t.priority,function(){If(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pa=r,n.target.dispatchEvent(r),pa=null}else return e=ci(n),e!==null&&Cl(e),t.blockedOn=n,!1;e.shift()}return!0}function Bu(t,e,n){zi(t)&&n.delete(e)}function _v(){_a=!1,Mt!==null&&zi(Mt)&&(Mt=null),Ut!==null&&zi(Ut)&&(Ut=null),jt!==null&&zi(jt)&&(jt=null),Br.forEach(Bu),Hr.forEach(Bu)}function yr(t,e){t.blockedOn===e&&(t.blockedOn=null,_a||(_a=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,_v)))}function Wr(t){function e(i){return yr(i,t)}if(0<Ci.length){yr(Ci[0],t);for(var n=1;n<Ci.length;n++){var r=Ci[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mt!==null&&yr(Mt,t),Ut!==null&&yr(Ut,t),jt!==null&&yr(jt,t),Br.forEach(e),Hr.forEach(e),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)kf(n),n.blockedOn===null&&Ct.shift()}var Bn=yt.ReactCurrentBatchConfig,co=!0;function wv(t,e,n,r){var i=V,o=Bn.transition;Bn.transition=null;try{V=1,Pl(t,e,n,r)}finally{V=i,Bn.transition=o}}function Iv(t,e,n,r){var i=V,o=Bn.transition;Bn.transition=null;try{V=4,Pl(t,e,n,r)}finally{V=i,Bn.transition=o}}function Pl(t,e,n,r){if(co){var i=wa(t,e,n,r);if(i===null)Ns(t,e,r,fo,n),Vu(t,r);else if(yv(i,t,e,n,r))r.stopPropagation();else if(Vu(t,r),e&4&&-1<gv.indexOf(t)){for(;i!==null;){var o=ci(i);if(o!==null&&wf(o),o=wa(t,e,n,r),o===null&&Ns(t,e,r,fo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ns(t,e,r,null,n)}}var fo=null;function wa(t,e,n,r){if(fo=null,t=Sl(r),t=un(t),t!==null)if(e=En(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ff(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fo=t,null}function Tf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lv()){case kl:return 1;case vf:return 4;case lo:case uv:return 16;case gf:return 536870912;default:return 16}default:return 16}}var At=null,Rl=null,Vi=null;function Cf(){if(Vi)return Vi;var t,e=Rl,n=e.length,r,i="value"in At?At.value:At.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Vi=i.slice(t,1<r?1-r:void 0)}function Bi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pi(){return!0}function Hu(){return!1}function Oe(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Pi:Hu,this.isPropagationStopped=Hu,this}return X(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),e}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=Oe(ir),ui=X({},ir,{view:0,detail:0}),Ev=Oe(ui),ws,Is,_r,Bo=X({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ol,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_r&&(_r&&t.type==="mousemove"?(ws=t.screenX-_r.screenX,Is=t.screenY-_r.screenY):Is=ws=0,_r=t),ws)},movementY:function(t){return"movementY"in t?t.movementY:Is}}),Wu=Oe(Bo),Sv=X({},Bo,{dataTransfer:0}),kv=Oe(Sv),Tv=X({},ui,{relatedTarget:0}),Es=Oe(Tv),Cv=X({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=Oe(Cv),Rv=X({},ir,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Nv=Oe(Rv),Ov=X({},ir,{data:0}),Ku=Oe(Ov),Av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Lv[t])?!!e[t]:!1}function Ol(){return Dv}var Mv=X({},ui,{key:function(t){if(t.key){var e=Av[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ol,charCode:function(t){return t.type==="keypress"?Bi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Uv=Oe(Mv),jv=X({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gu=Oe(jv),bv=X({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ol}),Fv=Oe(bv),$v=X({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),zv=Oe($v),Vv=X({},Bo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=Oe(Vv),Hv=[9,13,27,32],Al=dt&&"CompositionEvent"in window,Or=null;dt&&"documentMode"in document&&(Or=document.documentMode);var Wv=dt&&"TextEvent"in window&&!Or,Pf=dt&&(!Al||Or&&8<Or&&11>=Or),qu=String.fromCharCode(32),Ju=!1;function Rf(t,e){switch(t){case"keyup":return Hv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Nn=!1;function Kv(t,e){switch(t){case"compositionend":return Nf(e);case"keypress":return e.which!==32?null:(Ju=!0,qu);case"textInput":return t=e.data,t===qu&&Ju?null:t;default:return null}}function Gv(t,e){if(Nn)return t==="compositionend"||!Al&&Rf(t,e)?(t=Cf(),Vi=Rl=At=null,Nn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pf&&e.locale!=="ko"?null:e.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qv[t.type]:e==="textarea"}function Of(t,e,n,r){af(r),e=ho(e,"onChange"),0<e.length&&(n=new Nl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ar=null,Kr=null;function Jv(t){zf(t,0)}function Ho(t){var e=xn(t);if(Zd(e))return t}function Qv(t,e){if(t==="change")return e}var Af=!1;if(dt){var Ss;if(dt){var ks="oninput"in document;if(!ks){var Yu=document.createElement("div");Yu.setAttribute("oninput","return;"),ks=typeof Yu.oninput=="function"}Ss=ks}else Ss=!1;Af=Ss&&(!document.documentMode||9<document.documentMode)}function Xu(){Ar&&(Ar.detachEvent("onpropertychange",xf),Kr=Ar=null)}function xf(t){if(t.propertyName==="value"&&Ho(Kr)){var e=[];Of(e,Kr,t,Sl(t)),df(Jv,e)}}function Yv(t,e,n){t==="focusin"?(Xu(),Ar=e,Kr=n,Ar.attachEvent("onpropertychange",xf)):t==="focusout"&&Xu()}function Xv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ho(Kr)}function Zv(t,e){if(t==="click")return Ho(e)}function eg(t,e){if(t==="input"||t==="change")return Ho(e)}function tg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var We=typeof Object.is=="function"?Object.is:tg;function Gr(t,e){if(We(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!na.call(e,i)||!We(t[i],e[i]))return!1}return!0}function Zu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ec(t,e){var n=Zu(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zu(n)}}function Lf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Lf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Df(){for(var t=window,e=oo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=oo(t.document)}return e}function xl(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ng(t){var e=Df(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Lf(n.ownerDocument.documentElement,n)){if(r!==null&&xl(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=ec(n,o);var s=ec(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rg=dt&&"documentMode"in document&&11>=document.documentMode,On=null,Ia=null,xr=null,Ea=!1;function tc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ea||On==null||On!==oo(r)||(r=On,"selectionStart"in r&&xl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&Gr(xr,r)||(xr=r,r=ho(Ia,"onSelect"),0<r.length&&(e=new Nl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=On)))}function Ri(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var An={animationend:Ri("Animation","AnimationEnd"),animationiteration:Ri("Animation","AnimationIteration"),animationstart:Ri("Animation","AnimationStart"),transitionend:Ri("Transition","TransitionEnd")},Ts={},Mf={};dt&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function Wo(t){if(Ts[t])return Ts[t];if(!An[t])return t;var e=An[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mf)return Ts[t]=e[n];return t}var Uf=Wo("animationend"),jf=Wo("animationiteration"),bf=Wo("animationstart"),Ff=Wo("transitionend"),$f=new Map,nc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(t,e){$f.set(t,e),In(e,[t])}for(var Cs=0;Cs<nc.length;Cs++){var Ps=nc[Cs],ig=Ps.toLowerCase(),og=Ps[0].toUpperCase()+Ps.slice(1);Yt(ig,"on"+og)}Yt(Uf,"onAnimationEnd");Yt(jf,"onAnimationIteration");Yt(bf,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(Ff,"onTransitionEnd");qn("onMouseEnter",["mouseout","mouseover"]);qn("onMouseLeave",["mouseout","mouseover"]);qn("onPointerEnter",["pointerout","pointerover"]);qn("onPointerLeave",["pointerout","pointerover"]);In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));In("onBeforeInput",["compositionend","keypress","textInput","paste"]);In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));function rc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,iv(r,e,void 0,t),t.currentTarget=null}function zf(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;rc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;rc(i,a,u),o=l}}}if(ao)throw t=ga,ao=!1,ga=null,t}function W(t,e){var n=e[Pa];n===void 0&&(n=e[Pa]=new Set);var r=t+"__bubble";n.has(r)||(Vf(e,t,2,!1),n.add(r))}function Rs(t,e,n){var r=0;e&&(r|=4),Vf(n,t,r,e)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function qr(t){if(!t[Ni]){t[Ni]=!0,qd.forEach(function(n){n!=="selectionchange"&&(sg.has(n)||Rs(n,!1,t),Rs(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ni]||(e[Ni]=!0,Rs("selectionchange",!1,e))}}function Vf(t,e,n,r){switch(Tf(e)){case 1:var i=wv;break;case 4:i=Iv;break;default:i=Pl}n=i.bind(null,e,n,t),i=void 0,!va||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ns(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=un(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}df(function(){var u=o,c=Sl(n),f=[];e:{var v=$f.get(t);if(v!==void 0){var y=Nl,g=t;switch(t){case"keypress":if(Bi(n)===0)break e;case"keydown":case"keyup":y=Uv;break;case"focusin":g="focus",y=Es;break;case"focusout":g="blur",y=Es;break;case"beforeblur":case"afterblur":y=Es;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Fv;break;case Uf:case jf:case bf:y=Pv;break;case Ff:y=zv;break;case"scroll":y=Ev;break;case"wheel":y=Bv;break;case"copy":case"cut":case"paste":y=Nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Gu}var _=(e&4)!==0,C=!_&&t==="scroll",h=_?v!==null?v+"Capture":null:v;_=[];for(var d=u,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,h!==null&&(w=Vr(d,h),w!=null&&_.push(Jr(d,w,m)))),C)break;d=d.return}0<_.length&&(v=new y(v,g,null,n,c),f.push({event:v,listeners:_}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",v&&n!==pa&&(g=n.relatedTarget||n.fromElement)&&(un(g)||g[ft]))break e;if((y||v)&&(v=c.window===c?c:(v=c.ownerDocument)?v.defaultView||v.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?un(g):null,g!==null&&(C=En(g),g!==C||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(_=Wu,w="onMouseLeave",h="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(_=Gu,w="onPointerLeave",h="onPointerEnter",d="pointer"),C=y==null?v:xn(y),m=g==null?v:xn(g),v=new _(w,d+"leave",y,n,c),v.target=C,v.relatedTarget=m,w=null,un(c)===u&&(_=new _(h,d+"enter",g,n,c),_.target=m,_.relatedTarget=C,w=_),C=w,y&&g)t:{for(_=y,h=g,d=0,m=_;m;m=Tn(m))d++;for(m=0,w=h;w;w=Tn(w))m++;for(;0<d-m;)_=Tn(_),d--;for(;0<m-d;)h=Tn(h),m--;for(;d--;){if(_===h||h!==null&&_===h.alternate)break t;_=Tn(_),h=Tn(h)}_=null}else _=null;y!==null&&ic(f,v,y,_,!1),g!==null&&C!==null&&ic(f,C,g,_,!0)}}e:{if(v=u?xn(u):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var T=Qv;else if(Qu(v))if(Af)T=eg;else{T=Xv;var P=Yv}else(y=v.nodeName)&&y.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(T=Zv);if(T&&(T=T(t,u))){Of(f,T,n,c);break e}P&&P(t,v,u),t==="focusout"&&(P=v._wrapperState)&&P.controlled&&v.type==="number"&&ua(v,"number",v.value)}switch(P=u?xn(u):window,t){case"focusin":(Qu(P)||P.contentEditable==="true")&&(On=P,Ia=u,xr=null);break;case"focusout":xr=Ia=On=null;break;case"mousedown":Ea=!0;break;case"contextmenu":case"mouseup":case"dragend":Ea=!1,tc(f,n,c);break;case"selectionchange":if(rg)break;case"keydown":case"keyup":tc(f,n,c)}var O;if(Al)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Nn?Rf(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Pf&&n.locale!=="ko"&&(Nn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Nn&&(O=Cf()):(At=c,Rl="value"in At?At.value:At.textContent,Nn=!0)),P=ho(u,A),0<P.length&&(A=new Ku(A,t,null,n,c),f.push({event:A,listeners:P}),O?A.data=O:(O=Nf(n),O!==null&&(A.data=O)))),(O=Wv?Kv(t,n):Gv(t,n))&&(u=ho(u,"onBeforeInput"),0<u.length&&(c=new Ku("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=O))}zf(f,e)})}function Jr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ho(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Vr(t,n),o!=null&&r.unshift(Jr(t,o,i)),o=Vr(t,e),o!=null&&r.push(Jr(t,o,i))),t=t.return}return r}function Tn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ic(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Vr(n,o),l!=null&&s.unshift(Jr(n,l,a))):i||(l=Vr(n,o),l!=null&&s.push(Jr(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var ag=/\r\n?/g,lg=/\u0000|\uFFFD/g;function oc(t){return(typeof t=="string"?t:""+t).replace(ag,`
`).replace(lg,"")}function Oi(t,e,n){if(e=oc(e),oc(t)!==e&&n)throw Error(I(425))}function po(){}var Sa=null,ka=null;function Ta(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ca=typeof setTimeout=="function"?setTimeout:void 0,ug=typeof clearTimeout=="function"?clearTimeout:void 0,sc=typeof Promise=="function"?Promise:void 0,cg=typeof queueMicrotask=="function"?queueMicrotask:typeof sc<"u"?function(t){return sc.resolve(null).then(t).catch(dg)}:Ca;function dg(t){setTimeout(function(){throw t})}function Os(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Wr(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wr(e)}function bt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ac(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var or=Math.random().toString(36).slice(2),Je="__reactFiber$"+or,Qr="__reactProps$"+or,ft="__reactContainer$"+or,Pa="__reactEvents$"+or,fg="__reactListeners$"+or,hg="__reactHandles$"+or;function un(t){var e=t[Je];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ft]||n[Je]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ac(t);t!==null;){if(n=t[Je])return n;t=ac(t)}return e}t=n,n=t.parentNode}return null}function ci(t){return t=t[Je]||t[ft],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Ko(t){return t[Qr]||null}var Ra=[],Ln=-1;function Xt(t){return{current:t}}function G(t){0>Ln||(t.current=Ra[Ln],Ra[Ln]=null,Ln--)}function H(t,e){Ln++,Ra[Ln]=t.current,t.current=e}var Jt={},me=Xt(Jt),Ee=Xt(!1),pn=Jt;function Jn(t,e){var n=t.type.contextTypes;if(!n)return Jt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Se(t){return t=t.childContextTypes,t!=null}function mo(){G(Ee),G(me)}function lc(t,e,n){if(me.current!==Jt)throw Error(I(168));H(me,e),H(Ee,n)}function Bf(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,Ym(t)||"Unknown",i));return X({},n,r)}function vo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jt,pn=me.current,H(me,t),H(Ee,Ee.current),!0}function uc(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Bf(t,e,pn),r.__reactInternalMemoizedMergedChildContext=t,G(Ee),G(me),H(me,t)):G(Ee),H(Ee,n)}var rt=null,Go=!1,As=!1;function Hf(t){rt===null?rt=[t]:rt.push(t)}function pg(t){Go=!0,Hf(t)}function Zt(){if(!As&&rt!==null){As=!0;var t=0,e=V;try{var n=rt;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}rt=null,Go=!1}catch(i){throw rt!==null&&(rt=rt.slice(t+1)),mf(kl,Zt),i}finally{V=e,As=!1}}return null}var Dn=[],Mn=0,go=null,yo=0,Ae=[],xe=0,mn=null,it=1,ot="";function sn(t,e){Dn[Mn++]=yo,Dn[Mn++]=go,go=t,yo=e}function Wf(t,e,n){Ae[xe++]=it,Ae[xe++]=ot,Ae[xe++]=mn,mn=t;var r=it;t=ot;var i=32-Be(r)-1;r&=~(1<<i),n+=1;var o=32-Be(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,it=1<<32-Be(e)+i|n<<i|r,ot=o+t}else it=1<<o|n<<i|r,ot=t}function Ll(t){t.return!==null&&(sn(t,1),Wf(t,1,0))}function Dl(t){for(;t===go;)go=Dn[--Mn],Dn[Mn]=null,yo=Dn[--Mn],Dn[Mn]=null;for(;t===mn;)mn=Ae[--xe],Ae[xe]=null,ot=Ae[--xe],Ae[xe]=null,it=Ae[--xe],Ae[xe]=null}var Pe=null,Ce=null,q=!1,Ve=null;function Kf(t,e){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pe=t,Ce=bt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pe=t,Ce=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mn!==null?{id:it,overflow:ot}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pe=t,Ce=null,!0):!1;default:return!1}}function Na(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Oa(t){if(q){var e=Ce;if(e){var n=e;if(!cc(t,e)){if(Na(t))throw Error(I(418));e=bt(n.nextSibling);var r=Pe;e&&cc(t,e)?Kf(r,n):(t.flags=t.flags&-4097|2,q=!1,Pe=t)}}else{if(Na(t))throw Error(I(418));t.flags=t.flags&-4097|2,q=!1,Pe=t}}}function dc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pe=t}function Ai(t){if(t!==Pe)return!1;if(!q)return dc(t),q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ta(t.type,t.memoizedProps)),e&&(e=Ce)){if(Na(t))throw Gf(),Error(I(418));for(;e;)Kf(t,e),e=bt(e.nextSibling)}if(dc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ce=bt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ce=null}}else Ce=Pe?bt(t.stateNode.nextSibling):null;return!0}function Gf(){for(var t=Ce;t;)t=bt(t.nextSibling)}function Qn(){Ce=Pe=null,q=!1}function Ml(t){Ve===null?Ve=[t]:Ve.push(t)}var mg=yt.ReactCurrentBatchConfig;function $e(t,e){if(t&&t.defaultProps){e=X({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var _o=Xt(null),wo=null,Un=null,Ul=null;function jl(){Ul=Un=wo=null}function bl(t){var e=_o.current;G(_o),t._currentValue=e}function Aa(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Hn(t,e){wo=t,Ul=Un=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ie=!0),t.firstContext=null)}function Ue(t){var e=t._currentValue;if(Ul!==t)if(t={context:t,memoizedValue:e,next:null},Un===null){if(wo===null)throw Error(I(308));Un=t,wo.dependencies={lanes:0,firstContext:t}}else Un=Un.next=t;return e}var cn=null;function Fl(t){cn===null?cn=[t]:cn.push(t)}function qf(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Fl(e)):(n.next=i.next,i.next=n),e.interleaved=n,ht(t,r)}function ht(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Tt=!1;function $l(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ut(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ft(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ht(t,n)}return i=r.interleaved,i===null?(e.next=e,Fl(r)):(e.next=i.next,i.next=e),r.interleaved=e,ht(t,n)}function Hi(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tl(t,n)}}function fc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Io(t,e,n,r){var i=t.updateQueue;Tt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var v=a.lane,y=a.eventTime;if((r&v)===v){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(v=e,y=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(y,f,v);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,v=typeof g=="function"?g.call(y,f,v):g,v==null)break e;f=X({},f,v);break e;case 2:Tt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,v=i.effects,v===null?i.effects=[a]:v.push(a))}else y={eventTime:y,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=f):c=c.next=y,s|=v;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;v=a,a=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);gn|=s,t.lanes=s,t.memoizedState=f}}function hc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Qf=new Gd.Component().refs;function xa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:X({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qo={isMounted:function(t){return(t=t._reactInternals)?En(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ge(),i=zt(t),o=ut(r,i);o.payload=e,n!=null&&(o.callback=n),e=Ft(t,o,i),e!==null&&(He(e,t,i,r),Hi(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ge(),i=zt(t),o=ut(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ft(t,o,i),e!==null&&(He(e,t,i,r),Hi(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ge(),r=zt(t),i=ut(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ft(t,i,r),e!==null&&(He(e,t,r,n),Hi(e,t,r))}};function pc(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Gr(n,r)||!Gr(i,o):!0}function Yf(t,e,n){var r=!1,i=Jt,o=e.contextType;return typeof o=="object"&&o!==null?o=Ue(o):(i=Se(e)?pn:me.current,r=e.contextTypes,o=(r=r!=null)?Jn(t,i):Jt),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function mc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&qo.enqueueReplaceState(e,e.state,null)}function La(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Qf,$l(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Ue(o):(o=Se(e)?pn:me.current,i.context=Jn(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(xa(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&qo.enqueueReplaceState(i,i.state,null),Io(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function wr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===Qf&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function xi(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vc(t){var e=t._init;return e(t._payload)}function Xf(t){function e(h,d){if(t){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function n(h,d){if(!t)return null;for(;d!==null;)e(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=Vt(h,d),h.index=0,h.sibling=null,h}function o(h,d,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=2,d):m):(h.flags|=2,d)):(h.flags|=1048576,d)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,d,m,w){return d===null||d.tag!==6?(d=bs(m,h.mode,w),d.return=h,d):(d=i(d,m),d.return=h,d)}function l(h,d,m,w){var T=m.type;return T===Rn?c(h,d,m.props.children,w,m.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===kt&&vc(T)===d.type)?(w=i(d,m.props),w.ref=wr(h,d,m),w.return=h,w):(w=Qi(m.type,m.key,m.props,null,h.mode,w),w.ref=wr(h,d,m),w.return=h,w)}function u(h,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Fs(m,h.mode,w),d.return=h,d):(d=i(d,m.children||[]),d.return=h,d)}function c(h,d,m,w,T){return d===null||d.tag!==7?(d=hn(m,h.mode,w,T),d.return=h,d):(d=i(d,m),d.return=h,d)}function f(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=bs(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ii:return m=Qi(d.type,d.key,d.props,null,h.mode,m),m.ref=wr(h,null,d),m.return=h,m;case Pn:return d=Fs(d,h.mode,m),d.return=h,d;case kt:var w=d._init;return f(h,w(d._payload),m)}if(kr(d)||mr(d))return d=hn(d,h.mode,m,null),d.return=h,d;xi(h,d)}return null}function v(h,d,m,w){var T=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(h,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ii:return m.key===T?l(h,d,m,w):null;case Pn:return m.key===T?u(h,d,m,w):null;case kt:return T=m._init,v(h,d,T(m._payload),w)}if(kr(m)||mr(m))return T!==null?null:c(h,d,m,w,null);xi(h,m)}return null}function y(h,d,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(m)||null,a(d,h,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ii:return h=h.get(w.key===null?m:w.key)||null,l(d,h,w,T);case Pn:return h=h.get(w.key===null?m:w.key)||null,u(d,h,w,T);case kt:var P=w._init;return y(h,d,m,P(w._payload),T)}if(kr(w)||mr(w))return h=h.get(m)||null,c(d,h,w,T,null);xi(d,w)}return null}function g(h,d,m,w){for(var T=null,P=null,O=d,A=d=0,$=null;O!==null&&A<m.length;A++){O.index>A?($=O,O=null):$=O.sibling;var M=v(h,O,m[A],w);if(M===null){O===null&&(O=$);break}t&&O&&M.alternate===null&&e(h,O),d=o(M,d,A),P===null?T=M:P.sibling=M,P=M,O=$}if(A===m.length)return n(h,O),q&&sn(h,A),T;if(O===null){for(;A<m.length;A++)O=f(h,m[A],w),O!==null&&(d=o(O,d,A),P===null?T=O:P.sibling=O,P=O);return q&&sn(h,A),T}for(O=r(h,O);A<m.length;A++)$=y(O,h,A,m[A],w),$!==null&&(t&&$.alternate!==null&&O.delete($.key===null?A:$.key),d=o($,d,A),P===null?T=$:P.sibling=$,P=$);return t&&O.forEach(function(be){return e(h,be)}),q&&sn(h,A),T}function _(h,d,m,w){var T=mr(m);if(typeof T!="function")throw Error(I(150));if(m=T.call(m),m==null)throw Error(I(151));for(var P=T=null,O=d,A=d=0,$=null,M=m.next();O!==null&&!M.done;A++,M=m.next()){O.index>A?($=O,O=null):$=O.sibling;var be=v(h,O,M.value,w);if(be===null){O===null&&(O=$);break}t&&O&&be.alternate===null&&e(h,O),d=o(be,d,A),P===null?T=be:P.sibling=be,P=be,O=$}if(M.done)return n(h,O),q&&sn(h,A),T;if(O===null){for(;!M.done;A++,M=m.next())M=f(h,M.value,w),M!==null&&(d=o(M,d,A),P===null?T=M:P.sibling=M,P=M);return q&&sn(h,A),T}for(O=r(h,O);!M.done;A++,M=m.next())M=y(O,h,A,M.value,w),M!==null&&(t&&M.alternate!==null&&O.delete(M.key===null?A:M.key),d=o(M,d,A),P===null?T=M:P.sibling=M,P=M);return t&&O.forEach(function(hr){return e(h,hr)}),q&&sn(h,A),T}function C(h,d,m,w){if(typeof m=="object"&&m!==null&&m.type===Rn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ii:e:{for(var T=m.key,P=d;P!==null;){if(P.key===T){if(T=m.type,T===Rn){if(P.tag===7){n(h,P.sibling),d=i(P,m.props.children),d.return=h,h=d;break e}}else if(P.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===kt&&vc(T)===P.type){n(h,P.sibling),d=i(P,m.props),d.ref=wr(h,P,m),d.return=h,h=d;break e}n(h,P);break}else e(h,P);P=P.sibling}m.type===Rn?(d=hn(m.props.children,h.mode,w,m.key),d.return=h,h=d):(w=Qi(m.type,m.key,m.props,null,h.mode,w),w.ref=wr(h,d,m),w.return=h,h=w)}return s(h);case Pn:e:{for(P=m.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(h,d.sibling),d=i(d,m.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else e(h,d);d=d.sibling}d=Fs(m,h.mode,w),d.return=h,h=d}return s(h);case kt:return P=m._init,C(h,d,P(m._payload),w)}if(kr(m))return g(h,d,m,w);if(mr(m))return _(h,d,m,w);xi(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,m),d.return=h,h=d):(n(h,d),d=bs(m,h.mode,w),d.return=h,h=d),s(h)):n(h,d)}return C}var Yn=Xf(!0),Zf=Xf(!1),di={},Ye=Xt(di),Yr=Xt(di),Xr=Xt(di);function dn(t){if(t===di)throw Error(I(174));return t}function zl(t,e){switch(H(Xr,e),H(Yr,t),H(Ye,di),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:da(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=da(e,t)}G(Ye),H(Ye,e)}function Xn(){G(Ye),G(Yr),G(Xr)}function eh(t){dn(Xr.current);var e=dn(Ye.current),n=da(e,t.type);e!==n&&(H(Yr,t),H(Ye,n))}function Vl(t){Yr.current===t&&(G(Ye),G(Yr))}var Q=Xt(0);function Eo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xs=[];function Bl(){for(var t=0;t<xs.length;t++)xs[t]._workInProgressVersionPrimary=null;xs.length=0}var Wi=yt.ReactCurrentDispatcher,Ls=yt.ReactCurrentBatchConfig,vn=0,Y=null,ie=null,ae=null,So=!1,Lr=!1,Zr=0,vg=0;function fe(){throw Error(I(321))}function Hl(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!We(t[n],e[n]))return!1;return!0}function Wl(t,e,n,r,i,o){if(vn=o,Y=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wi.current=t===null||t.memoizedState===null?wg:Ig,t=n(r,i),Lr){o=0;do{if(Lr=!1,Zr=0,25<=o)throw Error(I(301));o+=1,ae=ie=null,e.updateQueue=null,Wi.current=Eg,t=n(r,i)}while(Lr)}if(Wi.current=ko,e=ie!==null&&ie.next!==null,vn=0,ae=ie=Y=null,So=!1,e)throw Error(I(300));return t}function Kl(){var t=Zr!==0;return Zr=0,t}function qe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?Y.memoizedState=ae=t:ae=ae.next=t,ae}function je(){if(ie===null){var t=Y.alternate;t=t!==null?t.memoizedState:null}else t=ie.next;var e=ae===null?Y.memoizedState:ae.next;if(e!==null)ae=e,ie=t;else{if(t===null)throw Error(I(310));ie=t,t={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ae===null?Y.memoizedState=ae=t:ae=ae.next=t}return ae}function ei(t,e){return typeof e=="function"?e(t):e}function Ds(t){var e=je(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=ie,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((vn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,Y.lanes|=c,gn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,We(r,e.memoizedState)||(Ie=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Y.lanes|=o,gn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ms(t){var e=je(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);We(o,e.memoizedState)||(Ie=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function th(){}function nh(t,e){var n=Y,r=je(),i=e(),o=!We(r.memoizedState,i);if(o&&(r.memoizedState=i,Ie=!0),r=r.queue,Gl(oh.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,ti(9,ih.bind(null,n,r,i,e),void 0,null),le===null)throw Error(I(349));vn&30||rh(n,e,i)}return i}function rh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Y.updateQueue,e===null?(e={lastEffect:null,stores:null},Y.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ih(t,e,n,r){e.value=n,e.getSnapshot=r,sh(e)&&ah(t)}function oh(t,e,n){return n(function(){sh(e)&&ah(t)})}function sh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!We(t,n)}catch{return!0}}function ah(t){var e=ht(t,1);e!==null&&He(e,t,1,-1)}function gc(t){var e=qe();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:t},e.queue=t,t=t.dispatch=_g.bind(null,Y,t),[e.memoizedState,t]}function ti(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Y.updateQueue,e===null?(e={lastEffect:null,stores:null},Y.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function lh(){return je().memoizedState}function Ki(t,e,n,r){var i=qe();Y.flags|=t,i.memoizedState=ti(1|e,n,void 0,r===void 0?null:r)}function Jo(t,e,n,r){var i=je();r=r===void 0?null:r;var o=void 0;if(ie!==null){var s=ie.memoizedState;if(o=s.destroy,r!==null&&Hl(r,s.deps)){i.memoizedState=ti(e,n,o,r);return}}Y.flags|=t,i.memoizedState=ti(1|e,n,o,r)}function yc(t,e){return Ki(8390656,8,t,e)}function Gl(t,e){return Jo(2048,8,t,e)}function uh(t,e){return Jo(4,2,t,e)}function ch(t,e){return Jo(4,4,t,e)}function dh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fh(t,e,n){return n=n!=null?n.concat([t]):null,Jo(4,4,dh.bind(null,e,t),n)}function ql(){}function hh(t,e){var n=je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hl(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ph(t,e){var n=je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hl(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function mh(t,e,n){return vn&21?(We(n,e)||(n=yf(),Y.lanes|=n,gn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ie=!0),t.memoizedState=n)}function gg(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=Ls.transition;Ls.transition={};try{t(!1),e()}finally{V=n,Ls.transition=r}}function vh(){return je().memoizedState}function yg(t,e,n){var r=zt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gh(t))yh(e,n);else if(n=qf(t,e,n,r),n!==null){var i=ge();He(n,t,r,i),_h(n,e,r)}}function _g(t,e,n){var r=zt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gh(t))yh(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,We(a,s)){var l=e.interleaved;l===null?(i.next=i,Fl(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=qf(t,e,i,r),n!==null&&(i=ge(),He(n,t,r,i),_h(n,e,r))}}function gh(t){var e=t.alternate;return t===Y||e!==null&&e===Y}function yh(t,e){Lr=So=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _h(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tl(t,n)}}var ko={readContext:Ue,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},wg={readContext:Ue,useCallback:function(t,e){return qe().memoizedState=[t,e===void 0?null:e],t},useContext:Ue,useEffect:yc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ki(4194308,4,dh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ki(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ki(4,2,t,e)},useMemo:function(t,e){var n=qe();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=qe();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yg.bind(null,Y,t),[r.memoizedState,t]},useRef:function(t){var e=qe();return t={current:t},e.memoizedState=t},useState:gc,useDebugValue:ql,useDeferredValue:function(t){return qe().memoizedState=t},useTransition:function(){var t=gc(!1),e=t[0];return t=gg.bind(null,t[1]),qe().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Y,i=qe();if(q){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),le===null)throw Error(I(349));vn&30||rh(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,yc(oh.bind(null,r,o,t),[t]),r.flags|=2048,ti(9,ih.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=qe(),e=le.identifierPrefix;if(q){var n=ot,r=it;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Zr++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vg++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ig={readContext:Ue,useCallback:hh,useContext:Ue,useEffect:Gl,useImperativeHandle:fh,useInsertionEffect:uh,useLayoutEffect:ch,useMemo:ph,useReducer:Ds,useRef:lh,useState:function(){return Ds(ei)},useDebugValue:ql,useDeferredValue:function(t){var e=je();return mh(e,ie.memoizedState,t)},useTransition:function(){var t=Ds(ei)[0],e=je().memoizedState;return[t,e]},useMutableSource:th,useSyncExternalStore:nh,useId:vh,unstable_isNewReconciler:!1},Eg={readContext:Ue,useCallback:hh,useContext:Ue,useEffect:Gl,useImperativeHandle:fh,useInsertionEffect:uh,useLayoutEffect:ch,useMemo:ph,useReducer:Ms,useRef:lh,useState:function(){return Ms(ei)},useDebugValue:ql,useDeferredValue:function(t){var e=je();return ie===null?e.memoizedState=t:mh(e,ie.memoizedState,t)},useTransition:function(){var t=Ms(ei)[0],e=je().memoizedState;return[t,e]},useMutableSource:th,useSyncExternalStore:nh,useId:vh,unstable_isNewReconciler:!1};function Zn(t,e){try{var n="",r=e;do n+=Qm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Us(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Da(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Sg=typeof WeakMap=="function"?WeakMap:Map;function wh(t,e,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Co||(Co=!0,Ha=r),Da(t,e)},n}function Ih(t,e,n){n=ut(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Da(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Da(t,e),typeof r!="function"&&($t===null?$t=new Set([this]):$t.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function _c(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Sg;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jg.bind(null,t,e,n),e.then(t,t))}function wc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ic(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ut(-1,1),e.tag=2,Ft(n,e,1))),n.lanes|=1),t)}var kg=yt.ReactCurrentOwner,Ie=!1;function ve(t,e,n,r){e.child=t===null?Zf(e,null,n,r):Yn(e,t.child,n,r)}function Ec(t,e,n,r,i){n=n.render;var o=e.ref;return Hn(e,i),r=Wl(t,e,n,r,o,i),n=Kl(),t!==null&&!Ie?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pt(t,e,i)):(q&&n&&Ll(e),e.flags|=1,ve(t,e,r,i),e.child)}function Sc(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!nu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Eh(t,e,o,r,i)):(t=Qi(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gr,n(s,r)&&t.ref===e.ref)return pt(t,e,i)}return e.flags|=1,t=Vt(o,r),t.ref=e.ref,t.return=e,e.child=t}function Eh(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Gr(o,r)&&t.ref===e.ref)if(Ie=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Ie=!0);else return e.lanes=t.lanes,pt(t,e,i)}return Ma(t,e,n,r,i)}function Sh(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(bn,Te),Te|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,H(bn,Te),Te|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,H(bn,Te),Te|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,H(bn,Te),Te|=r;return ve(t,e,i,n),e.child}function kh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ma(t,e,n,r,i){var o=Se(n)?pn:me.current;return o=Jn(e,o),Hn(e,i),n=Wl(t,e,n,r,o,i),r=Kl(),t!==null&&!Ie?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pt(t,e,i)):(q&&r&&Ll(e),e.flags|=1,ve(t,e,n,i),e.child)}function kc(t,e,n,r,i){if(Se(n)){var o=!0;vo(e)}else o=!1;if(Hn(e,i),e.stateNode===null)Gi(t,e),Yf(e,n,r),La(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=Se(n)?pn:me.current,u=Jn(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&mc(e,s,r,u),Tt=!1;var v=e.memoizedState;s.state=v,Io(e,r,s,i),l=e.memoizedState,a!==r||v!==l||Ee.current||Tt?(typeof c=="function"&&(xa(e,n,c,r),l=e.memoizedState),(a=Tt||pc(e,n,a,r,v,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Jf(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:$e(e.type,a),s.props=u,f=e.pendingProps,v=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ue(l):(l=Se(n)?pn:me.current,l=Jn(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||v!==l)&&mc(e,s,r,l),Tt=!1,v=e.memoizedState,s.state=v,Io(e,r,s,i);var g=e.memoizedState;a!==f||v!==g||Ee.current||Tt?(typeof y=="function"&&(xa(e,n,y,r),g=e.memoizedState),(u=Tt||pc(e,n,u,r,v,g,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),s.props=r,s.state=g,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return Ua(t,e,n,r,o,i)}function Ua(t,e,n,r,i,o){kh(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&uc(e,n,!1),pt(t,e,o);r=e.stateNode,kg.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Yn(e,t.child,null,o),e.child=Yn(e,null,a,o)):ve(t,e,a,o),e.memoizedState=r.state,i&&uc(e,n,!0),e.child}function Th(t){var e=t.stateNode;e.pendingContext?lc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lc(t,e.context,!1),zl(t,e.containerInfo)}function Tc(t,e,n,r,i){return Qn(),Ml(i),e.flags|=256,ve(t,e,n,r),e.child}var ja={dehydrated:null,treeContext:null,retryLane:0};function ba(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ch(t,e,n){var r=e.pendingProps,i=Q.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),H(Q,i&1),t===null)return Oa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Xo(s,r,0,null),t=hn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=ba(n),e.memoizedState=ja,t):Jl(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Tg(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Vt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Vt(a,o):(o=hn(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?ba(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=ja,r}return o=t.child,t=o.sibling,r=Vt(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jl(t,e){return e=Xo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Li(t,e,n,r){return r!==null&&Ml(r),Yn(e,t.child,null,n),t=Jl(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tg(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Us(Error(I(422))),Li(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Xo({mode:"visible",children:r.children},i,0,null),o=hn(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Yn(e,t.child,null,s),e.child.memoizedState=ba(s),e.memoizedState=ja,o);if(!(e.mode&1))return Li(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(I(419)),r=Us(o,r,void 0),Li(t,e,s,r)}if(a=(s&t.childLanes)!==0,Ie||a){if(r=le,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ht(t,i),He(r,t,i,-1))}return tu(),r=Us(Error(I(421))),Li(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=bg.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Ce=bt(i.nextSibling),Pe=e,q=!0,Ve=null,t!==null&&(Ae[xe++]=it,Ae[xe++]=ot,Ae[xe++]=mn,it=t.id,ot=t.overflow,mn=e),e=Jl(e,r.children),e.flags|=4096,e)}function Cc(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Aa(t.return,e,n)}function js(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ph(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(ve(t,e,r.children,n),r=Q.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cc(t,n,e);else if(t.tag===19)Cc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(H(Q,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Eo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),js(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Eo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}js(e,!0,n,null,o);break;case"together":js(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gi(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Vt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Cg(t,e,n){switch(e.tag){case 3:Th(e),Qn();break;case 5:eh(e);break;case 1:Se(e.type)&&vo(e);break;case 4:zl(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;H(_o,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(H(Q,Q.current&1),e.flags|=128,null):n&e.child.childLanes?Ch(t,e,n):(H(Q,Q.current&1),t=pt(t,e,n),t!==null?t.sibling:null);H(Q,Q.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ph(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Q,Q.current),r)break;return null;case 22:case 23:return e.lanes=0,Sh(t,e,n)}return pt(t,e,n)}var Rh,Fa,Nh,Oh;Rh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fa=function(){};Nh=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,dn(Ye.current);var o=null;switch(n){case"input":i=aa(t,i),r=aa(t,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=ca(t,i),r=ca(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=po)}fa(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($r.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($r.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&W("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Oh=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ir(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function he(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Pg(t,e,n){var r=e.pendingProps;switch(Dl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(e),null;case 1:return Se(e.type)&&mo(),he(e),null;case 3:return r=e.stateNode,Xn(),G(Ee),G(me),Bl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ai(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ve!==null&&(Ga(Ve),Ve=null))),Fa(t,e),he(e),null;case 5:Vl(e);var i=dn(Xr.current);if(n=e.type,t!==null&&e.stateNode!=null)Nh(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return he(e),null}if(t=dn(Ye.current),Ai(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Je]=e,r[Qr]=o,t=(e.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Cr.length;i++)W(Cr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Mu(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":ju(r,o),W("invalid",r)}fa(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Oi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Oi(r.textContent,a,t),i=["children",""+a]):$r.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&W("scroll",r)}switch(n){case"input":Ei(r),Uu(r,o,!0);break;case"textarea":Ei(r),bu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=po)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=nf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Je]=e,t[Qr]=r,Rh(t,e,!1,!1),e.stateNode=t;e:{switch(s=ha(n,r),n){case"dialog":W("cancel",t),W("close",t),i=r;break;case"iframe":case"object":case"embed":W("load",t),i=r;break;case"video":case"audio":for(i=0;i<Cr.length;i++)W(Cr[i],t);i=r;break;case"source":W("error",t),i=r;break;case"img":case"image":case"link":W("error",t),W("load",t),i=r;break;case"details":W("toggle",t),i=r;break;case"input":Mu(t,r),i=aa(t,r),W("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),W("invalid",t);break;case"textarea":ju(t,r),i=ca(t,r),W("invalid",t);break;default:i=r}fa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?sf(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rf(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&zr(t,l):typeof l=="number"&&zr(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&($r.hasOwnProperty(o)?l!=null&&o==="onScroll"&&W("scroll",t):l!=null&&_l(t,o,l,s))}switch(n){case"input":Ei(t),Uu(t,r,!1);break;case"textarea":Ei(t),bu(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qt(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?$n(t,!!r.multiple,o,!1):r.defaultValue!=null&&$n(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=po)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return he(e),null;case 6:if(t&&e.stateNode!=null)Oh(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=dn(Xr.current),dn(Ye.current),Ai(e)){if(r=e.stateNode,n=e.memoizedProps,r[Je]=e,(o=r.nodeValue!==n)&&(t=Pe,t!==null))switch(t.tag){case 3:Oi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Oi(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=e,e.stateNode=r}return he(e),null;case 13:if(G(Q),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(q&&Ce!==null&&e.mode&1&&!(e.flags&128))Gf(),Qn(),e.flags|=98560,o=!1;else if(o=Ai(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(I(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[Je]=e}else Qn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;he(e),o=!1}else Ve!==null&&(Ga(Ve),Ve=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Q.current&1?oe===0&&(oe=3):tu())),e.updateQueue!==null&&(e.flags|=4),he(e),null);case 4:return Xn(),Fa(t,e),t===null&&qr(e.stateNode.containerInfo),he(e),null;case 10:return bl(e.type._context),he(e),null;case 17:return Se(e.type)&&mo(),he(e),null;case 19:if(G(Q),o=e.memoizedState,o===null)return he(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ir(o,!1);else{if(oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Eo(t),s!==null){for(e.flags|=128,Ir(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return H(Q,Q.current&1|2),e.child}t=t.sibling}o.tail!==null&&te()>er&&(e.flags|=128,r=!0,Ir(o,!1),e.lanes=4194304)}else{if(!r)if(t=Eo(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!q)return he(e),null}else 2*te()-o.renderingStartTime>er&&n!==1073741824&&(e.flags|=128,r=!0,Ir(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=te(),e.sibling=null,n=Q.current,H(Q,r?n&1|2:n&1),e):(he(e),null);case 22:case 23:return eu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Te&1073741824&&(he(e),e.subtreeFlags&6&&(e.flags|=8192)):he(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function Rg(t,e){switch(Dl(e),e.tag){case 1:return Se(e.type)&&mo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xn(),G(Ee),G(me),Bl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vl(e),null;case 13:if(G(Q),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Qn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return G(Q),null;case 4:return Xn(),null;case 10:return bl(e.type._context),null;case 22:case 23:return eu(),null;case 24:return null;default:return null}}var Di=!1,pe=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,R=null;function jn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(t,e,r)}else n.current=null}function $a(t,e,n){try{n()}catch(r){Z(t,e,r)}}var Pc=!1;function Og(t,e){if(Sa=co,t=Df(),xl(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=t,v=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)v=f,f=y;for(;;){if(f===t)break t;if(v===n&&++u===i&&(a=s),v===o&&++c===r&&(l=s),(y=f.nextSibling)!==null)break;f=v,v=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ka={focusedElem:t,selectionRange:n},co=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,C=g.memoizedState,h=e.stateNode,d=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:$e(e.type,_),C);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(w){Z(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return g=Pc,Pc=!1,g}function Dr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&$a(e,n,o)}i=i.next}while(i!==r)}}function Qo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function za(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ah(t){var e=t.alternate;e!==null&&(t.alternate=null,Ah(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Je],delete e[Qr],delete e[Pa],delete e[fg],delete e[hg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xh(t){return t.tag===5||t.tag===3||t.tag===4}function Rc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Va(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=po));else if(r!==4&&(t=t.child,t!==null))for(Va(t,e,n),t=t.sibling;t!==null;)Va(t,e,n),t=t.sibling}function Ba(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ba(t,e,n),t=t.sibling;t!==null;)Ba(t,e,n),t=t.sibling}var ue=null,ze=!1;function It(t,e,n){for(n=n.child;n!==null;)Lh(t,e,n),n=n.sibling}function Lh(t,e,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Vo,n)}catch{}switch(n.tag){case 5:pe||jn(n,e);case 6:var r=ue,i=ze;ue=null,It(t,e,n),ue=r,ze=i,ue!==null&&(ze?(t=ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(ze?(t=ue,n=n.stateNode,t.nodeType===8?Os(t.parentNode,n):t.nodeType===1&&Os(t,n),Wr(t)):Os(ue,n.stateNode));break;case 4:r=ue,i=ze,ue=n.stateNode.containerInfo,ze=!0,It(t,e,n),ue=r,ze=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&$a(n,e,s),i=i.next}while(i!==r)}It(t,e,n);break;case 1:if(!pe&&(jn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Z(n,e,a)}It(t,e,n);break;case 21:It(t,e,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,It(t,e,n),pe=r):It(t,e,n);break;default:It(t,e,n)}}function Nc(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ng),e.forEach(function(r){var i=Fg.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fe(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,ze=!1;break e;case 3:ue=a.stateNode.containerInfo,ze=!0;break e;case 4:ue=a.stateNode.containerInfo,ze=!0;break e}a=a.return}if(ue===null)throw Error(I(160));Lh(o,s,i),ue=null,ze=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Z(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dh(e,t),e=e.sibling}function Dh(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fe(e,t),Ge(t),r&4){try{Dr(3,t,t.return),Qo(3,t)}catch(_){Z(t,t.return,_)}try{Dr(5,t,t.return)}catch(_){Z(t,t.return,_)}}break;case 1:Fe(e,t),Ge(t),r&512&&n!==null&&jn(n,n.return);break;case 5:if(Fe(e,t),Ge(t),r&512&&n!==null&&jn(n,n.return),t.flags&32){var i=t.stateNode;try{zr(i,"")}catch(_){Z(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ef(i,o),ha(a,s);var u=ha(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?sf(i,f):c==="dangerouslySetInnerHTML"?rf(i,f):c==="children"?zr(i,f):_l(i,c,f,u)}switch(a){case"input":la(i,o);break;case"textarea":tf(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?$n(i,!!o.multiple,y,!1):v!==!!o.multiple&&(o.defaultValue!=null?$n(i,!!o.multiple,o.defaultValue,!0):$n(i,!!o.multiple,o.multiple?[]:"",!1))}i[Qr]=o}catch(_){Z(t,t.return,_)}}break;case 6:if(Fe(e,t),Ge(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(_){Z(t,t.return,_)}}break;case 3:if(Fe(e,t),Ge(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wr(e.containerInfo)}catch(_){Z(t,t.return,_)}break;case 4:Fe(e,t),Ge(t);break;case 13:Fe(e,t),Ge(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Xl=te())),r&4&&Nc(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(pe=(u=pe)||c,Fe(e,t),pe=u):Fe(e,t),Ge(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(R=t,c=t.child;c!==null;){for(f=R=c;R!==null;){switch(v=R,y=v.child,v.tag){case 0:case 11:case 14:case 15:Dr(4,v,v.return);break;case 1:jn(v,v.return);var g=v.stateNode;if(typeof g.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Z(r,n,_)}}break;case 5:jn(v,v.return);break;case 22:if(v.memoizedState!==null){Ac(f);continue}}y!==null?(y.return=v,R=y):Ac(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=of("display",s))}catch(_){Z(t,t.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){Z(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fe(e,t),Ge(t),r&4&&Nc(t);break;case 21:break;default:Fe(e,t),Ge(t)}}function Ge(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(xh(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zr(i,""),r.flags&=-33);var o=Rc(t);Ba(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Rc(t);Va(t,a,s);break;default:throw Error(I(161))}}catch(l){Z(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ag(t,e,n){R=t,Mh(t)}function Mh(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Di;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||pe;a=Di;var u=pe;if(Di=s,(pe=l)&&!u)for(R=i;R!==null;)s=R,l=s.child,s.tag===22&&s.memoizedState!==null?xc(i):l!==null?(l.return=s,R=l):xc(i);for(;o!==null;)R=o,Mh(o),o=o.sibling;R=i,Di=a,pe=u}Oc(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):Oc(t)}}function Oc(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pe||Qo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:$e(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&hc(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hc(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Wr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}pe||e.flags&512&&za(e)}catch(v){Z(e,e.return,v)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function Ac(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function xc(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qo(4,e)}catch(l){Z(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Z(e,i,l)}}var o=e.return;try{za(e)}catch(l){Z(e,o,l)}break;case 5:var s=e.return;try{za(e)}catch(l){Z(e,s,l)}}}catch(l){Z(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var xg=Math.ceil,To=yt.ReactCurrentDispatcher,Ql=yt.ReactCurrentOwner,De=yt.ReactCurrentBatchConfig,F=0,le=null,re=null,ce=0,Te=0,bn=Xt(0),oe=0,ni=null,gn=0,Yo=0,Yl=0,Mr=null,we=null,Xl=0,er=1/0,nt=null,Co=!1,Ha=null,$t=null,Mi=!1,xt=null,Po=0,Ur=0,Wa=null,qi=-1,Ji=0;function ge(){return F&6?te():qi!==-1?qi:qi=te()}function zt(t){return t.mode&1?F&2&&ce!==0?ce&-ce:mg.transition!==null?(Ji===0&&(Ji=yf()),Ji):(t=V,t!==0||(t=window.event,t=t===void 0?16:Tf(t.type)),t):1}function He(t,e,n,r){if(50<Ur)throw Ur=0,Wa=null,Error(I(185));li(t,n,r),(!(F&2)||t!==le)&&(t===le&&(!(F&2)&&(Yo|=n),oe===4&&Pt(t,ce)),ke(t,r),n===1&&F===0&&!(e.mode&1)&&(er=te()+500,Go&&Zt()))}function ke(t,e){var n=t.callbackNode;mv(t,e);var r=uo(t,t===le?ce:0);if(r===0)n!==null&&zu(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&zu(n),e===1)t.tag===0?pg(Lc.bind(null,t)):Hf(Lc.bind(null,t)),cg(function(){!(F&6)&&Zt()}),n=null;else{switch(_f(r)){case 1:n=kl;break;case 4:n=vf;break;case 16:n=lo;break;case 536870912:n=gf;break;default:n=lo}n=Bh(n,Uh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Uh(t,e){if(qi=-1,Ji=0,F&6)throw Error(I(327));var n=t.callbackNode;if(Wn()&&t.callbackNode!==n)return null;var r=uo(t,t===le?ce:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ro(t,r);else{e=r;var i=F;F|=2;var o=bh();(le!==t||ce!==e)&&(nt=null,er=te()+500,fn(t,e));do try{Mg();break}catch(a){jh(t,a)}while(1);jl(),To.current=o,F=i,re!==null?e=0:(le=null,ce=0,e=oe)}if(e!==0){if(e===2&&(i=ya(t),i!==0&&(r=i,e=Ka(t,i))),e===1)throw n=ni,fn(t,0),Pt(t,r),ke(t,te()),n;if(e===6)Pt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Lg(i)&&(e=Ro(t,r),e===2&&(o=ya(t),o!==0&&(r=o,e=Ka(t,o))),e===1))throw n=ni,fn(t,0),Pt(t,r),ke(t,te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:an(t,we,nt);break;case 3:if(Pt(t,r),(r&130023424)===r&&(e=Xl+500-te(),10<e)){if(uo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ge(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ca(an.bind(null,t,we,nt),e);break}an(t,we,nt);break;case 4:if(Pt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Be(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xg(r/1960))-r,10<r){t.timeoutHandle=Ca(an.bind(null,t,we,nt),r);break}an(t,we,nt);break;case 5:an(t,we,nt);break;default:throw Error(I(329))}}}return ke(t,te()),t.callbackNode===n?Uh.bind(null,t):null}function Ka(t,e){var n=Mr;return t.current.memoizedState.isDehydrated&&(fn(t,e).flags|=256),t=Ro(t,e),t!==2&&(e=we,we=n,e!==null&&Ga(e)),t}function Ga(t){we===null?we=t:we.push.apply(we,t)}function Lg(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!We(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pt(t,e){for(e&=~Yl,e&=~Yo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Be(e),r=1<<n;t[n]=-1,e&=~r}}function Lc(t){if(F&6)throw Error(I(327));Wn();var e=uo(t,0);if(!(e&1))return ke(t,te()),null;var n=Ro(t,e);if(t.tag!==0&&n===2){var r=ya(t);r!==0&&(e=r,n=Ka(t,r))}if(n===1)throw n=ni,fn(t,0),Pt(t,e),ke(t,te()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,an(t,we,nt),ke(t,te()),null}function Zl(t,e){var n=F;F|=1;try{return t(e)}finally{F=n,F===0&&(er=te()+500,Go&&Zt())}}function yn(t){xt!==null&&xt.tag===0&&!(F&6)&&Wn();var e=F;F|=1;var n=De.transition,r=V;try{if(De.transition=null,V=1,t)return t()}finally{V=r,De.transition=n,F=e,!(F&6)&&Zt()}}function eu(){Te=bn.current,G(bn)}function fn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ug(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Dl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mo();break;case 3:Xn(),G(Ee),G(me),Bl();break;case 5:Vl(r);break;case 4:Xn();break;case 13:G(Q);break;case 19:G(Q);break;case 10:bl(r.type._context);break;case 22:case 23:eu()}n=n.return}if(le=t,re=t=Vt(t.current,null),ce=Te=e,oe=0,ni=null,Yl=Yo=gn=0,we=Mr=null,cn!==null){for(e=0;e<cn.length;e++)if(n=cn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}cn=null}return t}function jh(t,e){do{var n=re;try{if(jl(),Wi.current=ko,So){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}So=!1}if(vn=0,ae=ie=Y=null,Lr=!1,Zr=0,Ql.current=null,n===null||n.return===null){oe=1,ni=e,re=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=ce,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var v=c.alternate;v?(c.updateQueue=v.updateQueue,c.memoizedState=v.memoizedState,c.lanes=v.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=wc(s);if(y!==null){y.flags&=-257,Ic(y,s,a,o,e),y.mode&1&&_c(o,u,e),e=y,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){_c(o,u,e),tu();break e}l=Error(I(426))}}else if(q&&a.mode&1){var C=wc(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ic(C,s,a,o,e),Ml(Zn(l,a));break e}}o=l=Zn(l,a),oe!==4&&(oe=2),Mr===null?Mr=[o]:Mr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=wh(o,l,e);fc(o,h);break e;case 1:a=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&($t===null||!$t.has(m)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=Ih(o,a,e);fc(o,w);break e}}o=o.return}while(o!==null)}$h(n)}catch(T){e=T,re===n&&n!==null&&(re=n=n.return);continue}break}while(1)}function bh(){var t=To.current;return To.current=ko,t===null?ko:t}function tu(){(oe===0||oe===3||oe===2)&&(oe=4),le===null||!(gn&268435455)&&!(Yo&268435455)||Pt(le,ce)}function Ro(t,e){var n=F;F|=2;var r=bh();(le!==t||ce!==e)&&(nt=null,fn(t,e));do try{Dg();break}catch(i){jh(t,i)}while(1);if(jl(),F=n,To.current=r,re!==null)throw Error(I(261));return le=null,ce=0,oe}function Dg(){for(;re!==null;)Fh(re)}function Mg(){for(;re!==null&&!sv();)Fh(re)}function Fh(t){var e=Vh(t.alternate,t,Te);t.memoizedProps=t.pendingProps,e===null?$h(t):re=e,Ql.current=null}function $h(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Rg(n,e),n!==null){n.flags&=32767,re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{oe=6,re=null;return}}else if(n=Pg(n,e,Te),n!==null){re=n;return}if(e=e.sibling,e!==null){re=e;return}re=e=t}while(e!==null);oe===0&&(oe=5)}function an(t,e,n){var r=V,i=De.transition;try{De.transition=null,V=1,Ug(t,e,n,r)}finally{De.transition=i,V=r}return null}function Ug(t,e,n,r){do Wn();while(xt!==null);if(F&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(vv(t,o),t===le&&(re=le=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mi||(Mi=!0,Bh(lo,function(){return Wn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=De.transition,De.transition=null;var s=V;V=1;var a=F;F|=4,Ql.current=null,Og(t,n),Dh(n,t),ng(ka),co=!!Sa,ka=Sa=null,t.current=n,Ag(n),av(),F=a,V=s,De.transition=o}else t.current=n;if(Mi&&(Mi=!1,xt=t,Po=i),o=t.pendingLanes,o===0&&($t=null),cv(n.stateNode),ke(t,te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Co)throw Co=!1,t=Ha,Ha=null,t;return Po&1&&t.tag!==0&&Wn(),o=t.pendingLanes,o&1?t===Wa?Ur++:(Ur=0,Wa=t):Ur=0,Zt(),null}function Wn(){if(xt!==null){var t=_f(Po),e=De.transition,n=V;try{if(De.transition=null,V=16>t?16:t,xt===null)var r=!1;else{if(t=xt,xt=null,Po=0,F&6)throw Error(I(331));var i=F;for(F|=4,R=t.current;R!==null;){var o=R,s=o.child;if(R.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Dr(8,c,o)}var f=c.child;if(f!==null)f.return=c,R=f;else for(;R!==null;){c=R;var v=c.sibling,y=c.return;if(Ah(c),c===u){R=null;break}if(v!==null){v.return=y,R=v;break}R=y}}}var g=o.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var C=_.sibling;_.sibling=null,_=C}while(_!==null)}}R=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,R=s;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Dr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,R=h;break e}R=o.return}}var d=t.current;for(R=d;R!==null;){s=R;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,R=m;else e:for(s=d;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qo(9,a)}}catch(T){Z(a,a.return,T)}if(a===s){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(F=i,Zt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Vo,t)}catch{}r=!0}return r}finally{V=n,De.transition=e}}return!1}function Dc(t,e,n){e=Zn(n,e),e=wh(t,e,1),t=Ft(t,e,1),e=ge(),t!==null&&(li(t,1,e),ke(t,e))}function Z(t,e,n){if(t.tag===3)Dc(t,t,n);else for(;e!==null;){if(e.tag===3){Dc(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){t=Zn(n,t),t=Ih(e,t,1),e=Ft(e,t,1),t=ge(),e!==null&&(li(e,1,t),ke(e,t));break}}e=e.return}}function jg(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ge(),t.pingedLanes|=t.suspendedLanes&n,le===t&&(ce&n)===n&&(oe===4||oe===3&&(ce&130023424)===ce&&500>te()-Xl?fn(t,0):Yl|=n),ke(t,e)}function zh(t,e){e===0&&(t.mode&1?(e=Ti,Ti<<=1,!(Ti&130023424)&&(Ti=4194304)):e=1);var n=ge();t=ht(t,e),t!==null&&(li(t,e,n),ke(t,n))}function bg(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zh(t,n)}function Fg(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),zh(t,n)}var Vh;Vh=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ee.current)Ie=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ie=!1,Cg(t,e,n);Ie=!!(t.flags&131072)}else Ie=!1,q&&e.flags&1048576&&Wf(e,yo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Gi(t,e),t=e.pendingProps;var i=Jn(e,me.current);Hn(e,n),i=Wl(null,e,r,t,i,n);var o=Kl();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Se(r)?(o=!0,vo(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$l(e),i.updater=qo,e.stateNode=i,i._reactInternals=e,La(e,r,t,n),e=Ua(null,e,r,!0,o,n)):(e.tag=0,q&&o&&Ll(e),ve(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Gi(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zg(r),t=$e(r,t),i){case 0:e=Ma(null,e,r,t,n);break e;case 1:e=kc(null,e,r,t,n);break e;case 11:e=Ec(null,e,r,t,n);break e;case 14:e=Sc(null,e,r,$e(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$e(r,i),Ma(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$e(r,i),kc(t,e,r,i,n);case 3:e:{if(Th(e),t===null)throw Error(I(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Jf(t,e),Io(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Zn(Error(I(423)),e),e=Tc(t,e,r,n,i);break e}else if(r!==i){i=Zn(Error(I(424)),e),e=Tc(t,e,r,n,i);break e}else for(Ce=bt(e.stateNode.containerInfo.firstChild),Pe=e,q=!0,Ve=null,n=Zf(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qn(),r===i){e=pt(t,e,n);break e}ve(t,e,r,n)}e=e.child}return e;case 5:return eh(e),t===null&&Oa(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Ta(r,i)?s=null:o!==null&&Ta(r,o)&&(e.flags|=32),kh(t,e),ve(t,e,s,n),e.child;case 6:return t===null&&Oa(e),null;case 13:return Ch(t,e,n);case 4:return zl(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Yn(e,null,r,n):ve(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$e(r,i),Ec(t,e,r,i,n);case 7:return ve(t,e,e.pendingProps,n),e.child;case 8:return ve(t,e,e.pendingProps.children,n),e.child;case 12:return ve(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,H(_o,r._currentValue),r._currentValue=s,o!==null)if(We(o.value,s)){if(o.children===i.children&&!Ee.current){e=pt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=ut(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Aa(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Aa(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ve(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Hn(e,n),i=Ue(i),r=r(i),e.flags|=1,ve(t,e,r,n),e.child;case 14:return r=e.type,i=$e(r,e.pendingProps),i=$e(r.type,i),Sc(t,e,r,i,n);case 15:return Eh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$e(r,i),Gi(t,e),e.tag=1,Se(r)?(t=!0,vo(e)):t=!1,Hn(e,n),Yf(e,r,i),La(e,r,i,n),Ua(null,e,r,!0,t,n);case 19:return Ph(t,e,n);case 22:return Sh(t,e,n)}throw Error(I(156,e.tag))};function Bh(t,e){return mf(t,e)}function $g(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(t,e,n,r){return new $g(t,e,n,r)}function nu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zg(t){if(typeof t=="function")return nu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Il)return 11;if(t===El)return 14}return 2}function Vt(t,e){var n=t.alternate;return n===null?(n=Le(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qi(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")nu(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Rn:return hn(n.children,i,o,e);case wl:s=8,i|=8;break;case ra:return t=Le(12,n,e,i|2),t.elementType=ra,t.lanes=o,t;case ia:return t=Le(13,n,e,i),t.elementType=ia,t.lanes=o,t;case oa:return t=Le(19,n,e,i),t.elementType=oa,t.lanes=o,t;case Yd:return Xo(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jd:s=10;break e;case Qd:s=9;break e;case Il:s=11;break e;case El:s=14;break e;case kt:s=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Le(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function hn(t,e,n,r){return t=Le(7,t,r,e),t.lanes=n,t}function Xo(t,e,n,r){return t=Le(22,t,r,e),t.elementType=Yd,t.lanes=n,t.stateNode={isHidden:!1},t}function bs(t,e,n){return t=Le(6,t,null,e),t.lanes=n,t}function Fs(t,e,n){return e=Le(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Vg(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_s(0),this.expirationTimes=_s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_s(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ru(t,e,n,r,i,o,s,a,l){return t=new Vg(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Le(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$l(o),t}function Bg(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Hh(t){if(!t)return Jt;t=t._reactInternals;e:{if(En(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Se(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(Se(n))return Bf(t,n,e)}return e}function Wh(t,e,n,r,i,o,s,a,l){return t=ru(n,r,!0,t,i,o,s,a,l),t.context=Hh(null),n=t.current,r=ge(),i=zt(n),o=ut(r,i),o.callback=e??null,Ft(n,o,i),t.current.lanes=i,li(t,i,r),ke(t,r),t}function Zo(t,e,n,r){var i=e.current,o=ge(),s=zt(i);return n=Hh(n),e.context===null?e.context=n:e.pendingContext=n,e=ut(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ft(i,e,s),t!==null&&(He(t,i,s,o),Hi(t,i,s)),s}function No(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function iu(t,e){Mc(t,e),(t=t.alternate)&&Mc(t,e)}function Hg(){return null}var Kh=typeof reportError=="function"?reportError:function(t){console.error(t)};function ou(t){this._internalRoot=t}es.prototype.render=ou.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Zo(t,e,null,null)};es.prototype.unmount=ou.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yn(function(){Zo(null,t,null,null)}),e[ft]=null}};function es(t){this._internalRoot=t}es.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ef();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ct.length&&e!==0&&e<Ct[n].priority;n++);Ct.splice(n,0,t),n===0&&kf(t)}};function su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ts(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Uc(){}function Wg(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=No(s);o.call(u)}}var s=Wh(e,r,t,0,null,!1,!1,"",Uc);return t._reactRootContainer=s,t[ft]=s.current,qr(t.nodeType===8?t.parentNode:t),yn(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=No(l);a.call(u)}}var l=ru(t,0,!1,null,null,!1,!1,"",Uc);return t._reactRootContainer=l,t[ft]=l.current,qr(t.nodeType===8?t.parentNode:t),yn(function(){Zo(e,l,n,r)}),l}function ns(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=No(s);a.call(l)}}Zo(e,s,t,i)}else s=Wg(n,e,t,i,r);return No(s)}wf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Tr(e.pendingLanes);n!==0&&(Tl(e,n|1),ke(e,te()),!(F&6)&&(er=te()+500,Zt()))}break;case 13:yn(function(){var r=ht(t,1);if(r!==null){var i=ge();He(r,t,1,i)}}),iu(t,1)}};Cl=function(t){if(t.tag===13){var e=ht(t,134217728);if(e!==null){var n=ge();He(e,t,134217728,n)}iu(t,134217728)}};If=function(t){if(t.tag===13){var e=zt(t),n=ht(t,e);if(n!==null){var r=ge();He(n,t,e,r)}iu(t,e)}};Ef=function(){return V};Sf=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};ma=function(t,e,n){switch(e){case"input":if(la(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ko(r);if(!i)throw Error(I(90));Zd(r),la(r,i)}}}break;case"textarea":tf(t,n);break;case"select":e=n.value,e!=null&&$n(t,!!n.multiple,e,!1)}};uf=Zl;cf=yn;var Kg={usingClientEntryPoint:!1,Events:[ci,xn,Ko,af,lf,Zl]},Er={findFiberByHostInstance:un,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Gg={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hf(t),t===null?null:t.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||Hg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ui.isDisabled&&Ui.supportsFiber)try{Vo=Ui.inject(Gg),Qe=Ui}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kg;Ne.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!su(e))throw Error(I(200));return Bg(t,e,null,n)};Ne.createRoot=function(t,e){if(!su(t))throw Error(I(299));var n=!1,r="",i=Kh;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ru(t,1,!1,null,null,n,!1,r,i),t[ft]=e.current,qr(t.nodeType===8?t.parentNode:t),new ou(e)};Ne.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=hf(e),t=t===null?null:t.stateNode,t};Ne.flushSync=function(t){return yn(t)};Ne.hydrate=function(t,e,n){if(!ts(e))throw Error(I(200));return ns(null,t,e,!0,n)};Ne.hydrateRoot=function(t,e,n){if(!su(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Kh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Wh(e,null,t,1,n??null,i,!1,o,s),t[ft]=e.current,qr(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new es(e)};Ne.render=function(t,e,n){if(!ts(e))throw Error(I(200));return ns(null,t,e,!1,n)};Ne.unmountComponentAtNode=function(t){if(!ts(t))throw Error(I(40));return t._reactRootContainer?(yn(function(){ns(null,null,t,!1,function(){t._reactRootContainer=null,t[ft]=null})}),!0):!1};Ne.unstable_batchedUpdates=Zl;Ne.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ts(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return ns(t,e,n,!1,r)};Ne.version="18.2.0-next-9e3b772b8-20220608";function Gh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gh)}catch(t){console.error(t)}}Gh(),Hd.exports=Ne;var qg=Hd.exports,jc=qg;ta.createRoot=jc.createRoot,ta.hydrateRoot=jc.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ri(){return ri=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ri.apply(this,arguments)}var Lt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Lt||(Lt={}));const bc="popstate";function Jg(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return qa("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Oo(i)}return Yg(e,n,null,t)}function ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function au(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Qg(){return Math.random().toString(36).substr(2,8)}function Fc(t,e){return{usr:t.state,key:t.key,idx:e}}function qa(t,e,n,r){return n===void 0&&(n=null),ri({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?sr(e):e,{state:n,key:e&&e.key||r||Qg()})}function Oo(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function sr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Yg(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Lt.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(ri({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=Lt.Pop;let C=c(),h=C==null?null:C-u;u=C,l&&l({action:a,location:_.location,delta:h})}function v(C,h){a=Lt.Push;let d=qa(_.location,C,h);n&&n(d,C),u=c()+1;let m=Fc(d,u),w=_.createHref(d);try{s.pushState(m,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}o&&l&&l({action:a,location:_.location,delta:1})}function y(C,h){a=Lt.Replace;let d=qa(_.location,C,h);n&&n(d,C),u=c();let m=Fc(d,u),w=_.createHref(d);s.replaceState(m,"",w),o&&l&&l({action:a,location:_.location,delta:0})}function g(C){let h=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof C=="string"?C:Oo(C);return ne(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let _={get action(){return a},get location(){return t(i,s)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(bc,f),l=C,()=>{i.removeEventListener(bc,f),l=null}},createHref(C){return e(i,C)},createURL:g,encodeLocation(C){let h=g(C);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:v,replace:y,go(C){return s.go(C)}};return _}var $c;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})($c||($c={}));function Xg(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?sr(e):e,i=lu(r.pathname||"/",n);if(i==null)return null;let o=qh(t);Zg(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=ly(o[a],dy(i));return s}function qh(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Bt([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(ne(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),qh(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:sy(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Jh(o.path))i(o,s,l)}),e}function Jh(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Jh(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Zg(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ay(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ey=/^:\w+$/,ty=3,ny=2,ry=1,iy=10,oy=-2,zc=t=>t==="*";function sy(t,e){let n=t.split("/"),r=n.length;return n.some(zc)&&(r+=oy),e&&(r+=ny),n.filter(i=>!zc(i)).reduce((i,o)=>i+(ey.test(o)?ty:o===""?ry:iy),r)}function ay(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ly(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=uy({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:Bt([i,c.pathname]),pathnameBase:my(Bt([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Bt([i,c.pathnameBase]))}return o}function uy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=cy(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let v=a[f]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}return u[c]=fy(a[f]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:t}}function cy(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),au(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function dy(t){try{return decodeURI(t)}catch(e){return au(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function fy(t,e){try{return decodeURIComponent(t)}catch(n){return au(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function lu(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function hy(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?sr(t):t;return{pathname:n?n.startsWith("/")?n:py(n,e):e,search:vy(r),hash:gy(i)}}function py(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function $s(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function uu(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cu(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=sr(t):(i=ri({},t),ne(!i.pathname||!i.pathname.includes("?"),$s("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),$s("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),$s("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let f=e.length-1;if(s.startsWith("..")){let v=s.split("/");for(;v[0]==="..";)v.shift(),f-=1;i.pathname=v.join("/")}a=f>=0?e[f]:"/"}let l=hy(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Bt=t=>t.join("/").replace(/\/\/+/g,"/"),my=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),vy=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,gy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function yy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Qh=["post","put","patch","delete"];new Set(Qh);const _y=["get",...Qh];new Set(_y);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ao.apply(this,arguments)}const du=k.createContext(null),Yh=k.createContext(null),Sn=k.createContext(null),rs=k.createContext(null),_t=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Xh=k.createContext(null);function wy(t,e){let{relative:n}=e===void 0?{}:e;ar()||ne(!1);let{basename:r,navigator:i}=k.useContext(Sn),{hash:o,pathname:s,search:a}=fu(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Bt([r,s])),i.createHref({pathname:l,search:a,hash:o})}function ar(){return k.useContext(rs)!=null}function lr(){return ar()||ne(!1),k.useContext(rs).location}function Zh(t){k.useContext(Sn).static||k.useLayoutEffect(t)}function ep(){let{isDataRoute:t}=k.useContext(_t);return t?My():Iy()}function Iy(){ar()||ne(!1);let t=k.useContext(du),{basename:e,navigator:n}=k.useContext(Sn),{matches:r}=k.useContext(_t),{pathname:i}=lr(),o=JSON.stringify(uu(r).map(l=>l.pathnameBase)),s=k.useRef(!1);return Zh(()=>{s.current=!0}),k.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=cu(l,JSON.parse(o),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Bt([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,o,i,t])}const Ey=k.createContext(null);function Sy(t){let e=k.useContext(_t).outlet;return e&&k.createElement(Ey.Provider,{value:t},e)}function fu(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=k.useContext(_t),{pathname:i}=lr(),o=JSON.stringify(uu(r).map(s=>s.pathnameBase));return k.useMemo(()=>cu(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function ky(t,e){return Ty(t,e)}function Ty(t,e,n){ar()||ne(!1);let{navigator:r}=k.useContext(Sn),{matches:i}=k.useContext(_t),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=lr(),u;if(e){var c;let _=typeof e=="string"?sr(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ne(!1),u=_}else u=l;let f=u.pathname||"/",v=a==="/"?f:f.slice(a.length)||"/",y=Xg(t,{pathname:v}),g=Oy(y&&y.map(_=>Object.assign({},_,{params:Object.assign({},s,_.params),pathname:Bt([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Bt([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&g?k.createElement(rs.Provider,{value:{location:Ao({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Lt.Pop}},g):g}function Cy(){let t=Dy(),e=yy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,o)}const Py=k.createElement(Cy,null);class Ry extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?k.createElement(_t.Provider,{value:this.props.routeContext},k.createElement(Xh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ny(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(du);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(_t.Provider,{value:e},r)}function Oy(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let o=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||ne(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let c=l.route.id?s==null?void 0:s[l.route.id]:null,f=null;n&&(f=l.route.errorElement||Py);let v=e.concat(o.slice(0,u+1)),y=()=>{let g;return c?g=f:l.route.Component?g=k.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=a,k.createElement(Ny,{match:l,routeContext:{outlet:a,matches:v,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(Ry,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:y(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):y()},null)}var tp=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(tp||{}),xo=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(xo||{});function Ay(t){let e=k.useContext(du);return e||ne(!1),e}function xy(t){let e=k.useContext(Yh);return e||ne(!1),e}function Ly(t){let e=k.useContext(_t);return e||ne(!1),e}function np(t){let e=Ly(),n=e.matches[e.matches.length-1];return n.route.id||ne(!1),n.route.id}function Dy(){var t;let e=k.useContext(Xh),n=xy(xo.UseRouteError),r=np(xo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function My(){let{router:t}=Ay(tp.UseNavigateStable),e=np(xo.UseNavigateStable),n=k.useRef(!1);return Zh(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ao({fromRouteId:e},o)))},[t,e])}function zs(t){let{to:e,replace:n,state:r,relative:i}=t;ar()||ne(!1);let{matches:o}=k.useContext(_t),{pathname:s}=lr(),a=ep(),l=cu(e,uu(o).map(c=>c.pathnameBase),s,i==="path"),u=JSON.stringify(l);return k.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Uy(t){return Sy(t.context)}function tt(t){ne(!1)}function jy(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Lt.Pop,navigator:o,static:s=!1}=t;ar()&&ne(!1);let a=e.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=sr(r));let{pathname:u="/",search:c="",hash:f="",state:v=null,key:y="default"}=r,g=k.useMemo(()=>{let _=lu(u,a);return _==null?null:{location:{pathname:_,search:c,hash:f,state:v,key:y},navigationType:i}},[a,u,c,f,v,y,i]);return g==null?null:k.createElement(Sn.Provider,{value:l},k.createElement(rs.Provider,{children:n,value:g}))}function by(t){let{children:e,location:n}=t;return ky(Ja(e),n)}new Promise(()=>{});function Ja(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let o=[...e,i];if(r.type===k.Fragment){n.push.apply(n,Ja(r.props.children,o));return}r.type!==tt&&ne(!1),!r.props.index||!r.props.children||ne(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ja(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lo(){return Lo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lo.apply(this,arguments)}function rp(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Fy(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function $y(t,e){return t.button===0&&(!e||e==="_self")&&!Fy(t)}const zy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Vy=["aria-current","caseSensitive","className","end","style","to","children"],By="startTransition",Vc=bm[By];function Hy(t){let{basename:e,children:n,future:r,window:i}=t,o=k.useRef();o.current==null&&(o.current=Jg({window:i,v5Compat:!0}));let s=o.current,[a,l]=k.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=k.useCallback(f=>{u&&Vc?Vc(()=>l(f)):l(f)},[l,u]);return k.useLayoutEffect(()=>s.listen(c),[s,c]),k.createElement(jy,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s})}const Wy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ky=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ht=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c}=e,f=rp(e,zy),{basename:v}=k.useContext(Sn),y,g=!1;if(typeof u=="string"&&Ky.test(u)&&(y=u,Wy))try{let d=new URL(window.location.href),m=u.startsWith("//")?new URL(d.protocol+u):new URL(u),w=lu(m.pathname,v);m.origin===d.origin&&w!=null?u=w+m.search+m.hash:g=!0}catch{}let _=wy(u,{relative:i}),C=Gy(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i});function h(d){r&&r(d),d.defaultPrevented||C(d)}return k.createElement("a",Lo({},f,{href:y||_,onClick:g||o?r:h,ref:n,target:l}))}),ji=k.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,children:u}=e,c=rp(e,Vy),f=fu(l,{relative:c.relative}),v=lr(),y=k.useContext(Yh),{navigator:g}=k.useContext(Sn),_=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,C=v.pathname,h=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(C=C.toLowerCase(),h=h?h.toLowerCase():null,_=_.toLowerCase());let d=C===_||!s&&C.startsWith(_)&&C.charAt(_.length)==="/",m=h!=null&&(h===_||!s&&h.startsWith(_)&&h.charAt(_.length)==="/"),w=d?r:void 0,T;typeof o=="function"?T=o({isActive:d,isPending:m}):T=[o,d?"active":null,m?"pending":null].filter(Boolean).join(" ");let P=typeof a=="function"?a({isActive:d,isPending:m}):a;return k.createElement(Ht,Lo({},c,{"aria-current":w,className:T,ref:n,style:P,to:l}),typeof u=="function"?u({isActive:d,isPending:m}):u)});var Bc;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Bc||(Bc={}));var Hc;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Hc||(Hc={}));function Gy(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=ep(),l=lr(),u=fu(t,{relative:s});return k.useCallback(c=>{if($y(c,n)){c.preventDefault();let f=r!==void 0?r:Oo(l)===Oo(u);a(t,{replace:f,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,t,o,s])}function qy(){return p.jsx(p.Fragment,{children:p.jsx("div",{className:"search",children:p.jsx("input",{type:"text",name:"search",placeholder:"search"})})})}const Jy=(t,e)=>{const n={...t};switch(e.type){case"SET_USER":n.user=e.payload;break;default:return t}return n},ip={user:null},fi=k.createContext({state:ip,dispatch:()=>{}}),Qy=({children:t})=>{const[e,n]=k.useReducer(Jy,ip);return p.jsx(fi.Provider,{value:{state:e,dispatch:n},children:t})};function Yy(){var e;const{state:t}=k.useContext(fi);return p.jsxs("div",{className:"user-profile-menu",children:[p.jsxs("p",{children:["@",((e=t.user)==null?void 0:e.username)??":)"]}),p.jsx(Ht,{to:"/post/currentuserid",children:"My Post"}),p.jsx(Ht,{to:"/preference",children:"Preferences"}),p.jsx(Ht,{to:"/ logout",children:"Logout"})]})}function Xy(){var e;const{state:t}=k.useContext(fi);return p.jsx(p.Fragment,{children:p.jsxs("div",{className:"user-session",children:[p.jsxs("div",{className:"user-auth",children:[p.jsx(Ht,{to:"/register",children:"Register"}),p.jsx(Ht,{to:"/login",children:"Login"})]}),p.jsx("label",{htmlFor:"user-profile-check",children:p.jsx("div",{className:"user-icon",children:((e=t.user)==null?void 0:e.username)??":)"})}),p.jsx("input",{type:"checkbox",name:"user-profile-check",id:"user-profile-check"}),p.jsx(Yy,{})]})})}function Zy(){return p.jsxs("header",{children:[p.jsxs("div",{className:"head-right",children:[p.jsx("h1",{children:p.jsx(Ht,{to:"/",children:"Collab-rate"})}),p.jsxs("nav",{children:[p.jsx(ji,{to:"/",children:"Home"}),p.jsx(ji,{to:"/comments",children:"Comments"}),p.jsx(ji,{to:"/posts/userid",children:"Saved"}),p.jsx(ji,{to:"/new-post",children:"New Post"})]})]}),p.jsxs("div",{className:"head-left",children:[p.jsx(qy,{}),p.jsx("div",{className:"theme-mode",children:p.jsx("p",{children:"Theme"})}),p.jsx(Xy,{})]})]})}function e0(){return p.jsxs(p.Fragment,{children:[p.jsx(Zy,{}),p.jsx("main",{children:p.jsx(Uy,{})})]})}var Qa=(t=>(t[t.Beginner=0]="Beginner",t[t.Intermediate=1]="Intermediate",t[t.Advanced=2]="Advanced",t[t.Expert=3]="Expert",t))(Qa||{});const t0=async t=>{const e=await fetch(`/api/tool?name=${t}`,{method:"GET"});if(!e.ok)throw Error(e.statusText);return e},n0=async(t,e)=>{const n=await fetch("/api/tool",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({idToken:e,name:t})});if(!n.ok)throw Error(n.statusText);return n};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},r0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},sp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let v=(a&15)<<2|u>>6,y=u&63;l||(y=64,s||(v=64)),r.push(n[c],n[f],n[v],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(op(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new i0;const v=o<<2|a>>4;if(r.push(v),u!==64){const y=a<<4&240|u>>2;if(r.push(y),f!==64){const g=u<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class i0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const o0=function(t){const e=op(t);return sp.encodeByteArray(e,!0)},ap=function(t){return o0(t).replace(/\./g,"")},hu=function(t){try{return sp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=()=>s0().__FIREBASE_DEFAULTS__,l0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},u0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hu(t[1]);return e&&JSON.parse(e)},pu=()=>{try{return a0()||l0()||u0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},c0=t=>{var e,n;return(n=(e=pu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lp=()=>{var t;return(t=pu())===null||t===void 0?void 0:t.config},up=t=>{var e;return(e=pu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(B())}function dp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hp(){const t=B();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function f0(){try{return typeof indexedDB=="object"}catch{return!1}}function h0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="FirebaseError";class Ke extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=p0,Object.setPrototypeOf(this,Ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,en.prototype.create)}}class en{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?m0(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Ke(i,a,r)}}function m0(t,e){return t.replace(v0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const v0=/\{\$([^}]+)}/g;function g0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Do(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Wc(o)&&Wc(s)){if(!Do(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pp(t,e){const n=new y0(t,e);return n.subscribe.bind(n)}class y0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Vs),i.error===void 0&&(i.error=Vs),i.complete===void 0&&(i.complete=Vs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return t&&t._delegate?t._delegate:t}class Qt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new d0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(E0(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:I0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function I0(t){return t===ln?void 0:t}function E0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new w0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(z||(z={}));const k0={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},T0=z.INFO,C0={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},P0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=C0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mu{constructor(e){this.name=e,this._logLevel=T0,this._logHandler=P0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?k0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const R0=(t,e)=>e.some(n=>t instanceof n);let Kc,Gc;function N0(){return Kc||(Kc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function O0(){return Gc||(Gc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mp=new WeakMap,Ya=new WeakMap,vp=new WeakMap,Bs=new WeakMap,vu=new WeakMap;function A0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Wt(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&mp.set(n,t)}).catch(()=>{}),vu.set(e,t),e}function x0(t){if(Ya.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Ya.set(t,e)}let Xa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ya.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function L0(t){Xa=t(Xa)}function D0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hs(this),e,...n);return vp.set(r,e.sort?e.sort():[e]),Wt(r)}:O0().includes(t)?function(...e){return t.apply(Hs(this),e),Wt(mp.get(this))}:function(...e){return Wt(t.apply(Hs(this),e))}}function M0(t){return typeof t=="function"?D0(t):(t instanceof IDBTransaction&&x0(t),R0(t,N0())?new Proxy(t,Xa):t)}function Wt(t){if(t instanceof IDBRequest)return A0(t);if(Bs.has(t))return Bs.get(t);const e=M0(t);return e!==t&&(Bs.set(t,e),vu.set(e,t)),e}const Hs=t=>vu.get(t);function U0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Wt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Wt(s.result),l.oldVersion,l.newVersion,Wt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const j0=["get","getKey","getAll","getAllKeys","count"],b0=["put","add","delete","clear"],Ws=new Map;function qc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ws.get(e))return Ws.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=b0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||j0.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ws.set(e,o),o}L0(t=>({...t,get:(e,n,r)=>qc(e,n)||t.get(e,n,r),has:(e,n)=>!!qc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Za="@firebase/app",Jc="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new mu("@firebase/app"),z0="@firebase/app-compat",V0="@firebase/analytics-compat",B0="@firebase/analytics",H0="@firebase/app-check-compat",W0="@firebase/app-check",K0="@firebase/auth",G0="@firebase/auth-compat",q0="@firebase/database",J0="@firebase/database-compat",Q0="@firebase/functions",Y0="@firebase/functions-compat",X0="@firebase/installations",Z0="@firebase/installations-compat",e_="@firebase/messaging",t_="@firebase/messaging-compat",n_="@firebase/performance",r_="@firebase/performance-compat",i_="@firebase/remote-config",o_="@firebase/remote-config-compat",s_="@firebase/storage",a_="@firebase/storage-compat",l_="@firebase/firestore",u_="@firebase/firestore-compat",c_="firebase",d_="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="[DEFAULT]",f_={[Za]:"fire-core",[z0]:"fire-core-compat",[B0]:"fire-analytics",[V0]:"fire-analytics-compat",[W0]:"fire-app-check",[H0]:"fire-app-check-compat",[K0]:"fire-auth",[G0]:"fire-auth-compat",[q0]:"fire-rtdb",[J0]:"fire-rtdb-compat",[Q0]:"fire-fn",[Y0]:"fire-fn-compat",[X0]:"fire-iid",[Z0]:"fire-iid-compat",[e_]:"fire-fcm",[t_]:"fire-fcm-compat",[n_]:"fire-perf",[r_]:"fire-perf-compat",[i_]:"fire-rc",[o_]:"fire-rc-compat",[s_]:"fire-gcs",[a_]:"fire-gcs-compat",[l_]:"fire-fst",[u_]:"fire-fst-compat","fire-js":"fire-js",[c_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new Map,tl=new Map;function h_(t,e){try{t.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wn(t){const e=t.name;if(tl.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;tl.set(e,t);for(const n of Mo.values())h_(n,t);return!0}function gp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Kt=new en("app","Firebase",p_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=d_;function yp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:el,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Kt.create("bad-app-name",{appName:String(i)});if(n||(n=lp()),!n)throw Kt.create("no-options");const o=Mo.get(i);if(o){if(Do(n,o.options)&&Do(r,o.config))return o;throw Kt.create("duplicate-app",{appName:i})}const s=new S0(i);for(const l of tl.values())s.addComponent(l);const a=new m_(n,r,s);return Mo.set(i,a),a}function v_(t=el){const e=Mo.get(t);if(!e&&t===el&&lp())return yp();if(!e)throw Kt.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let i=(r=f_[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(a.join(" "));return}wn(new Qt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="firebase-heartbeat-database",y_=1,ii="firebase-heartbeat-store";let Ks=null;function _p(){return Ks||(Ks=U0(g_,y_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ii)}}}).catch(t=>{throw Kt.create("idb-open",{originalErrorMessage:t.message})})),Ks}async function __(t){try{return await(await _p()).transaction(ii).objectStore(ii).get(wp(t))}catch(e){if(e instanceof Ke)_n.warn(e.message);else{const n=Kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function Qc(t,e){try{const r=(await _p()).transaction(ii,"readwrite");await r.objectStore(ii).put(e,wp(t)),await r.done}catch(n){if(n instanceof Ke)_n.warn(n.message);else{const r=Kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(r.message)}}}function wp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=1024,I_=30*24*60*60*1e3;class E_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new k_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=I_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yc(),{heartbeatsToSend:n,unsentEntries:r}=S_(this._heartbeatsCache.heartbeats),i=ap(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Yc(){return new Date().toISOString().substring(0,10)}function S_(t,e=w_){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Xc(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class k_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return f0()?h0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await __(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xc(t){return ap(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t){wn(new Qt("platform-logger",e=>new F0(e),"PRIVATE")),wn(new Qt("heartbeat",e=>new E_(e),"PRIVATE")),Gt(Za,Jc,t),Gt(Za,Jc,"esm2017"),Gt("fire-js","")}T_("");var C_="firebase",P_="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(C_,P_,"app");var nl=function(t,e){return nl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},nl(t,e)};function J(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");nl(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var K=function(){return K=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},K.apply(this,arguments)};function ur(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function E(t,e,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(c){try{u(r.next(c))}catch(f){s(f)}}function l(c){try{u(r.throw(c))}catch(f){s(f)}}function u(c){c.done?o(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function S(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,u[0]&&(n=0)),n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Me(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}function Zc(t){return t!==void 0&&t.enterprise!==void 0}let R_=class{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}};function Ip(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const N_=Ip,Ep=new en("auth","Firebase",Ip());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=new mu("@firebase/auth");function O_(t,...e){Uo.logLevel<=z.WARN&&Uo.warn(`Auth (${nn}): ${t}`,...e)}function Yi(t,...e){Uo.logLevel<=z.ERROR&&Uo.error(`Auth (${nn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,...e){throw gu(t,...e)}function Xe(t,...e){return gu(t,...e)}function A_(t,e,n){const r=Object.assign(Object.assign({},N_()),{[e]:n});return new en("auth","Firebase",r).create(e,{appName:t.name})}function gu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ep.create(t,...e)}function L(t,e,...n){if(!t)throw gu(e,...n)}function st(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yi(e),new Error(e)}function vt(t,e){t||st(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function x_(){return ed()==="http:"||ed()==="https:"}function ed(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(x_()||dp()||"connection"in navigator)?navigator.onLine:!0}function D_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,vt(n>e,"Short delay should be less than long delay!"),this.isMobile=cp()||fp()}get(){return L_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t,e){vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sp=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new hi(3e4,6e4);function is(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cr(t,e,n,r,i={}){return kp(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=tn(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Sp.fetch()(Cp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function kp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},M_),e);try{const i=new j_(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw bi(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bi(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw bi(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw bi(t,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw A_(t,c,u);mt(t,c)}}catch(i){if(i instanceof Ke)throw i;mt(t,"network-request-failed",{message:String(i)})}}async function Tp(t,e,n,r,i={}){const o=await cr(t,e,n,r,i);return"mfaPendingCredential"in o&&mt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Cp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yu(t.config,i):`${t.config.apiScheme}://${i}`}let j_=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),U_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function bi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xe(t,e,r);return i.customData._tokenResponse=n,i}async function b_(t,e){return cr(t,"GET","/v2/recaptchaConfig",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F_(t,e){return cr(t,"POST","/v1/accounts:delete",e)}async function $_(t,e){return cr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function z_(t,e=!1){const n=et(t),r=await n.getIdToken(e),i=_u(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:jr(Gs(i.auth_time)),issuedAtTime:jr(Gs(i.iat)),expirationTime:jr(Gs(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Gs(t){return Number(t)*1e3}function _u(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yi("JWT malformed, contained fewer than 3 sections"),null;try{const i=hu(n);return i?JSON.parse(i):(Yi("Failed to decode base64 JWT payload"),null)}catch(i){return Yi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function V_(t){const e=_u(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ke&&B_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function B_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H_=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pp=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jr(this.lastLoginAt),this.creationTime=jr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await oi(t,$_(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?G_(o.providerUserInfo):[],a=K_(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Pp(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function W_(t){const e=et(t);await jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function K_(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function G_(t){return t.map(e=>{var{providerId:n}=e,r=ur(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q_(t,e){const n=await kp(t,{},async()=>{const r=tn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Cp(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let td=class il{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):V_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await q_(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new il;return r&&(L(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new il,this.toJSON())}_performRefresh(){return st("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}let ol=class Xi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=ur(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new H_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Pp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await oi(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return z_(this,e)}reload(){return W_(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await oi(this,F_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,y=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,g=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:T,providerData:P,stsTokenManager:O}=n;L(m&&O,e,"internal-error");const A=td.fromJSON(this.name,O);L(typeof m=="string",e,"internal-error"),Et(f,e.name),Et(v,e.name),L(typeof w=="boolean",e,"internal-error"),L(typeof T=="boolean",e,"internal-error"),Et(y,e.name),Et(g,e.name),Et(_,e.name),Et(C,e.name),Et(h,e.name),Et(d,e.name);const $=new Xi({uid:m,auth:e,email:v,emailVerified:w,displayName:f,isAnonymous:T,photoURL:g,phoneNumber:y,tenantId:_,stsTokenManager:A,createdAt:h,lastLoginAt:d});return P&&Array.isArray(P)&&($.providerData=P.map(M=>Object.assign({},M))),C&&($._redirectEventId=C),$}static async _fromIdTokenResponse(e,n,r=!1){const i=new td;i.updateFromServerResponse(n);const o=new Xi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jo(o),o}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=new Map;function at(t){vt(t instanceof Function,"Expected a class definition");let e=nd.get(t);return e?(vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rp=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};Rp.type="NONE";const rd=Rp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t,e,n){return`firebase:${t}:${e}:${n}`}let id=class eo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Zi(this.userKey,i.apiKey,o),this.fullPersistenceKey=Zi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ol._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new eo(at(rd),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||at(rd);const s=Zi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=ol._fromJSON(e,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new eo(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new eo(o,e,r))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ap(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Np(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lp(e))return"Blackberry";if(Dp(e))return"Webos";if(wu(e))return"Safari";if((e.includes("chrome/")||Op(e))&&!e.includes("edge/"))return"Chrome";if(xp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Np(t=B()){return/firefox\//i.test(t)}function wu(t=B()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Op(t=B()){return/crios\//i.test(t)}function Ap(t=B()){return/iemobile/i.test(t)}function xp(t=B()){return/android/i.test(t)}function Lp(t=B()){return/blackberry/i.test(t)}function Dp(t=B()){return/webos/i.test(t)}function os(t=B()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function J_(t=B()){var e;return os(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Q_(){return hp()&&document.documentMode===10}function Mp(t=B()){return os(t)||xp(t)||Dp(t)||Lp(t)||/windows phone/i.test(t)||Ap(t)}function Y_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t,e=[]){let n;switch(t){case"Browser":n=od(B());break;case"Worker":n=`${od(B())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let X_=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(t,e={}){return cr(t,"GET","/v2/passwordPolicy",is(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=6;let tw=class{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:ew,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nw=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sd(this),this.idTokenSubscription=new sd(this),this.beforeStateQueue=new X_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ep,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await id.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=D_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?et(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Z_(this),n=new tw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new en("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&at(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await id.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Up(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&O_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}};function dr(t){return et(t)}let sd=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=pp(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function jp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Xe("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",rw().appendChild(r)})}function iw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ow="https://www.google.com/recaptcha/enterprise.js?render=",sw="recaptcha-enterprise",aw="NO_RECAPTCHA";let lw=class{constructor(e){this.type=sw,this.auth=dr(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{b_(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new R_(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Zc(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(aw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Zc(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}jp(ow+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}};async function ad(t,e,n,r=!1){const i=new lw(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t,e){const n=gp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Do(o,e??{}))return i;mt(i,"already-initialized")}return n.initialize({options:e})}function cw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(at);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dw(t,e,n){const r=dr(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=bp(e),{host:s,port:a}=fw(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||hw()}function bp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fw(t){const e=bp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:ld(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:ld(s)}}}function ld(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fp=class{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,n){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(t,e){return Tp(t,"POST","/v1/accounts:signInWithIdp",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="http://localhost";let ss=class sl extends Fp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sl(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=ur(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new sl(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Kn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kn(e,n)}buildRequest(){const e={requestUri:pw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=tn(n)}return e}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $p=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi=class extends $p{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends pi{constructor(){super("facebook.com")}static credential(e){return ss._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zp=class Cn extends pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ss._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cn.credential(n,r)}catch{return null}}};zp.GOOGLE_SIGN_IN_METHOD="google.com";zp.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends pi{constructor(){super("github.com")}static credential(e){return ss._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.GITHUB_SIGN_IN_METHOD="github.com";Nt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends pi{constructor(){super("twitter.com")}static credential(e,n){return ss._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com";Ot.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e){return Tp(t,"POST","/v1/accounts:signUp",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as=class al{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await ol._fromIdTokenResponse(e,r,i),s=ud(r);return new al({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ud(r);return new al({user:e,providerId:i,_tokenResponse:r,operationType:n})}};function ud(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mw=class ll extends Ke{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ll.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ll(e,n,r,i)}};function Vp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?mw._fromErrorAndOperation(t,o,e,r):o})}async function vw(t,e,n=!1){const r=await oi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return as._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await oi(t,Vp(r,i,e,t),n);L(o.idToken,r,"internal-error");const s=_u(o.idToken);L(s,r,"internal-error");const{sub:a}=s;return L(t.uid===a,r,"user-mismatch"),as._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(t,e,n=!1){const r="signIn",i=await Vp(t,r,e),o=await as._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _w(t){const e=dr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ww(t,e,n){var r;const i=dr(t),o={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await ad(i,o,"signUpPassword");s=qs(i,u)}else s=qs(i,o).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await ad(i,o,"signUpPassword");return qs(i,c)}throw u});const a=await s.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&_w(t),u}),l=await as._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function Iw(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function Ew(t,e,n){return et(t).beforeAuthStateChanged(e,n)}const bo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bp=class{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bo,"1"),this.storage.removeItem(bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(){const t=B();return wu(t)||os(t)}const kw=1e3,Tw=10;class Hp extends Bp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Sw()&&Y_(),this.fallbackToPolling=Mp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Q_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Tw):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hp.type="LOCAL";const Cw=Hp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp extends Bp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wp.type="SESSION";const Kp=Wp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ls(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await Pw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ls.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Iu("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const v=f;if(v.data.eventId===u)switch(v.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(v.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}function Nw(t){Ze().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function Ow(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Aw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xw(){return Gp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="firebaseLocalStorageDb",Lw=1,Fo="firebaseLocalStorage",Jp="fbase_key";class mi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function us(t,e){return t.transaction([Fo],e?"readwrite":"readonly").objectStore(Fo)}function Dw(){const t=indexedDB.deleteDatabase(qp);return new mi(t).toPromise()}function ul(){const t=indexedDB.open(qp,Lw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fo,{keyPath:Jp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fo)?e(r):(r.close(),await Dw(),e(await ul()))})})}async function cd(t,e,n){const r=us(t,!0).put({[Jp]:e,value:n});return new mi(r).toPromise()}async function Mw(t,e){const n=us(t,!1).get(e),r=await new mi(n).toPromise();return r===void 0?null:r.value}function dd(t,e){const n=us(t,!0).delete(e);return new mi(n).toPromise()}const Uw=800,jw=3;class Qp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ul(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ls._getInstance(xw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ow(),!this.activeServiceWorker)return;this.sender=new Rw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Aw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ul();return await cd(e,bo,"1"),await dd(e,bo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Mw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=us(i,!1).getAll();return new mi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Uw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qp.type="LOCAL";const bw=Qp;new hi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t,e){return e?at(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu=class extends Fp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}};function $w(t){return yw(t.auth,new Eu(t),t.bypassAuthState)}function zw(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),gw(n,new Eu(t),t.bypassAuthState)}async function Vw(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),vw(n,new Eu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yp=class{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $w;case"linkViaPopup":case"linkViaRedirect":return Vw;case"reauthViaPopup":case"reauthViaRedirect":return zw;default:mt(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=new hi(2e3,1e4);class Fn extends Yp{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Fn.currentPopupAction&&Fn.currentPopupAction.cancel(),Fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=Iu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bw.get())};e()}}Fn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="pendingRedirect",to=new Map;class Ww extends Yp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=to.get(this.auth._key());if(!e){try{const r=await Kw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}to.set(this.auth._key(),e)}return this.bypassAuthState||to.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kw(t,e){const n=Jw(e),r=qw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Gw(t,e){to.set(t._key(),e)}function qw(t){return at(t._redirectPersistence)}function Jw(t){return Zi(Hw,t.config.apiKey,t.name)}async function Qw(t,e,n=!1){const r=dr(t),i=Fw(r,e),s=await new Ww(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=10*60*1e3;let Xw=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Xp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yw&&this.cachedEventUids.clear(),this.cachedEventUids.has(fd(e))}saveEventToCache(e){this.cachedEventUids.add(fd(e)),this.lastProcessedEventTime=Date.now()}};function fd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(t,e={}){return cr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nI=/^https?/;async function rI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eI(t);for(const n of e)try{if(iI(n))return}catch{}mt(t,"unauthorized-domain")}function iI(t){const e=rl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!nI.test(n))return!1;if(tI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=new hi(3e4,6e4);function hd(){const t=Ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sI(t){return new Promise((e,n)=>{var r,i,o;function s(){hd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hd(),n(Xe(t,"network-request-failed"))},timeout:oI.get()})}if(!((i=(r=Ze().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Ze().gapi)===null||o===void 0)&&o.load)s();else{const a=iw("iframefcb");return Ze()[a]=()=>{gapi.load?s():n(Xe(t,"network-request-failed"))},jp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw no=null,e})}let no=null;function aI(t){return no=no||sI(t),no}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=new hi(5e3,15e3),uI="__/auth/iframe",cI="emulator/auth/iframe",dI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hI(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yu(e,cI):`https://${t.config.authDomain}/${uI}`,r={apiKey:e.apiKey,appName:t.name,v:nn},i=fI.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${tn(r).slice(1)}`}async function pI(t){const e=await aI(t),n=Ze().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:hI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dI,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Xe(t,"network-request-failed"),a=Ze().setTimeout(()=>{o(s)},lI.get());function l(){Ze().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vI=500,gI=600,yI="_blank",_I="http://localhost";class pd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wI(t,e,n,r=vI,i=gI){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},mI),{width:r.toString(),height:i.toString(),top:o,left:s}),u=B().toLowerCase();n&&(a=Op(u)?yI:n),Np(u)&&(e=e||_I,l.scrollbars="yes");const c=Object.entries(l).reduce((v,[y,g])=>`${v}${y}=${g},`,"");if(J_(u)&&a!=="_self")return II(e||"",a),new pd(null);const f=window.open(e||"",a,c);L(f,t,"popup-blocked");try{f.focus()}catch{}return new pd(f)}function II(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="__/auth/handler",SI="emulator/auth/handler",kI=encodeURIComponent("fac");async function md(t,e,n,r,i,o){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:nn,eventId:i};if(e instanceof $p){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",g0(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(o||{}))s[c]=f}if(e instanceof pi){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(s.scopes=c.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${kI}=${encodeURIComponent(l)}`:"";return`${TI(t)}?${tn(a).slice(1)}${u}`}function TI({config:t}){return t.emulator?yu(t,SI):`https://${t.authDomain}/${EI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="webStorageSupport";class CI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kp,this._completeRedirectFn=Qw,this._overrideRedirectResult=Gw}async _openPopup(e,n,r,i){var o;vt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await md(e,n,r,rl(),i);return wI(e,s,Iu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await md(e,n,r,rl(),i);return Nw(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(vt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pI(e),r=new Xw(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Js,{type:Js},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Js];s!==void 0&&n(!!s),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mp()||wu()||os()}}const PI=CI;var vd="@firebase/auth",gd="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RI=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function OI(t){wn(new Qt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;L(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Up(t)},u=new nw(r,i,o,l);return cw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wn(new Qt("auth-internal",e=>{const n=dr(e.getProvider("auth").getImmediate());return(r=>new RI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(vd,gd,NI(t)),Gt(vd,gd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=5*60,xI=up("authIdTokenMaxAge")||AI;let yd=null;const LI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xI)return;const i=n==null?void 0:n.token;yd!==i&&(yd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function DI(t=v_()){const e=gp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uw(t,{popupRedirectResolver:PI,persistence:[bw,Cw,Kp]}),r=up("authTokenSyncURL");if(r){const o=LI(r);Ew(n,o,()=>o(n.currentUser)),Iw(n,s=>o(s))}const i=c0("auth");return i&&dw(n,`http://${i}`),n}OI("Browser");var _d="__sak";function wd(t){return t!==void 0&&t.enterprise!==void 0}var MI=function(){function t(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(function(n){return n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF"})}return t}();function Zp(){var t;return t={},t["dependent-sdk-initialized-before-auth"]="Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",t}var UI=Zp,cl=new en("auth","Firebase",Zp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn=new mu("@firebase/auth");function jI(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];Gn.logLevel<=z.WARN&&Gn.warn.apply(Gn,Me(["Auth (".concat(nn,"): ").concat(t)],e,!1))}function ro(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];Gn.logLevel<=z.ERROR&&Gn.error.apply(Gn,Me(["Auth (".concat(nn,"): ").concat(t)],e,!1))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];throw Su.apply(void 0,Me([t],e,!1))}function cs(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return Su.apply(void 0,Me([t],e,!1))}function bI(t,e,n){var r,i=K(K({},UI()),(r={},r[e]=n,r)),o=new en("auth","Firebase",i);return o.create(e,{appName:t.name})}function Su(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(typeof t!="string"){var i=n[0],o=Me([],n.slice(1),!0);return o[0]&&(o[0].appName=t.name),(e=t._errorFactory).create.apply(e,Me([i],o,!1))}return cl.create.apply(cl,Me([t],n,!1))}function j(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!t)throw Su.apply(void 0,Me([e],n,!1))}function lt(t){var e="INTERNAL ASSERTION FAILED: "+t;throw ro(e),new Error(e)}function tr(t,e){t||lt(e)}function FI(){return Id()==="http:"||Id()==="https:"}function Id(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FI()||dp()||"connection"in navigator)?navigator.onLine:!0}function zI(){if(typeof navigator>"u")return null;var t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var VI=function(){function t(e,n){this.shortDelay=e,this.longDelay=n,tr(n>e,"Short delay should be less than long delay!"),this.isMobile=cp()||fp()}return t.prototype.get=function(){return $I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t,e){tr(t.emulator,"Emulator should always be set here");var n=t.emulator.url;return e?"".concat(n).concat(e.startsWith("/")?e.slice(1):e):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var em=function(){function t(){}return t.initialize=function(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)},t.fetch=function(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t.headers=function(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t.response=function(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x,HI=(x={},x.CREDENTIAL_MISMATCH="custom-token-mismatch",x.MISSING_CUSTOM_TOKEN="internal-error",x.INVALID_IDENTIFIER="invalid-email",x.MISSING_CONTINUE_URI="internal-error",x.INVALID_PASSWORD="wrong-password",x.MISSING_PASSWORD="missing-password",x.EMAIL_EXISTS="email-already-in-use",x.PASSWORD_LOGIN_DISABLED="operation-not-allowed",x.INVALID_IDP_RESPONSE="invalid-credential",x.INVALID_PENDING_TOKEN="invalid-credential",x.FEDERATED_USER_ID_ALREADY_LINKED="credential-already-in-use",x.MISSING_REQ_TYPE="internal-error",x.EMAIL_NOT_FOUND="user-not-found",x.RESET_PASSWORD_EXCEED_LIMIT="too-many-requests",x.EXPIRED_OOB_CODE="expired-action-code",x.INVALID_OOB_CODE="invalid-action-code",x.MISSING_OOB_CODE="internal-error",x.CREDENTIAL_TOO_OLD_LOGIN_AGAIN="requires-recent-login",x.INVALID_ID_TOKEN="invalid-user-token",x.TOKEN_EXPIRED="user-token-expired",x.USER_NOT_FOUND="user-token-expired",x.TOO_MANY_ATTEMPTS_TRY_LATER="too-many-requests",x.PASSWORD_DOES_NOT_MEET_REQUIREMENTS="password-does-not-meet-requirements",x.INVALID_CODE="invalid-verification-code",x.INVALID_SESSION_INFO="invalid-verification-id",x.INVALID_TEMPORARY_PROOF="invalid-credential",x.MISSING_SESSION_INFO="missing-verification-id",x.SESSION_EXPIRED="code-expired",x.MISSING_ANDROID_PACKAGE_NAME="missing-android-pkg-name",x.UNAUTHORIZED_DOMAIN="unauthorized-continue-uri",x.INVALID_OAUTH_CLIENT_ID="invalid-oauth-client-id",x.ADMIN_ONLY_OPERATION="admin-restricted-operation",x.INVALID_MFA_PENDING_CREDENTIAL="invalid-multi-factor-session",x.MFA_ENROLLMENT_NOT_FOUND="multi-factor-info-not-found",x.MISSING_MFA_ENROLLMENT_ID="missing-multi-factor-info",x.MISSING_MFA_PENDING_CREDENTIAL="missing-multi-factor-session",x.SECOND_FACTOR_EXISTS="second-factor-already-in-use",x.SECOND_FACTOR_LIMIT_EXCEEDED="maximum-second-factor-count-exceeded",x.BLOCKING_FUNCTION_ERROR_RESPONSE="internal-error",x.RECAPTCHA_NOT_ENABLED="recaptcha-not-enabled",x.MISSING_RECAPTCHA_TOKEN="missing-recaptcha-token",x.INVALID_RECAPTCHA_TOKEN="invalid-recaptcha-token",x.INVALID_RECAPTCHA_ACTION="invalid-recaptcha-action",x.MISSING_CLIENT_TYPE="missing-client-type",x.MISSING_RECAPTCHA_VERSION="missing-recaptcha-version",x.INVALID_RECAPTCHA_VERSION="invalid-recaptcha-version",x.INVALID_REQ_TYPE="invalid-req-type",x);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var WI=new VI(3e4,6e4);function wt(t,e){return t.tenantId&&!e.tenantId?K(K({},e),{tenantId:t.tenantId}):e}function fr(t,e,n,r,i){return i===void 0&&(i={}),E(this,void 0,void 0,function(){var o=this;return S(this,function(s){return[2,tm(t,i,function(){return E(o,void 0,void 0,function(){var a,l,u,c;return S(this,function(f){switch(f.label){case 0:return a={},l={},r&&(e==="GET"?l=r:a={body:JSON.stringify(r)}),u=tn(K({key:t.config.apiKey},l)).slice(1),[4,t._getAdditionalHeaders()];case 1:return c=f.sent(),c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),[2,em.fetch()(nm(t,t.config.apiHost,n,u),K({method:e,headers:c,referrerPolicy:"no-referrer"},a))]}})})})]})})}function tm(t,e,n){return E(this,void 0,void 0,function(){var r,i,o,s,a,l,u,c,f,v;return S(this,function(y){switch(y.label){case 0:t._canInitEmulator=!1,r=K(K({},HI),e),y.label=1;case 1:return y.trys.push([1,4,,5]),i=new KI(t),[4,Promise.race([n(),i.promise])];case 2:return o=y.sent(),i.clearNetworkTimeout(),[4,o.json()];case 3:if(s=y.sent(),"needConfirmation"in s)throw Pr(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return[2,s];if(a=o.ok?s.errorMessage:s.error.message,l=a.split(" : "),u=l[0],c=l[1],u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pr(t,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw Pr(t,"email-already-in-use",s);if(u==="USER_DISABLED")throw Pr(t,"user-disabled",s);if(f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-"),c)throw bI(t,f,c);return gt(t,f),[3,5];case 4:if(v=y.sent(),v instanceof Ke)throw v;return gt(t,"network-request-failed",{message:String(v)}),[3,5];case 5:return[2]}})})}function kn(t,e,n,r,i){return i===void 0&&(i={}),E(this,void 0,void 0,function(){var o;return S(this,function(s){switch(s.label){case 0:return[4,fr(t,e,n,r,i)];case 1:return o=s.sent(),"mfaPendingCredential"in o&&gt(t,"multi-factor-auth-required",{_serverResponse:o}),[2,o]}})})}function nm(t,e,n,r){var i="".concat(e).concat(n,"?").concat(r);return t.config.emulator?BI(t.config,i):"".concat(t.config.apiScheme,"://").concat(i)}var KI=function(){function t(e){var n=this;this.auth=e,this.timer=null,this.promise=new Promise(function(r,i){n.timer=setTimeout(function(){return i(cs(n.auth,"network-request-failed"))},WI.get())})}return t.prototype.clearNetworkTimeout=function(){clearTimeout(this.timer)},t}();function Pr(t,e,n){var r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=cs(t,e,r);return i.customData._tokenResponse=n,i}function GI(t,e){return E(this,void 0,void 0,function(){return S(this,function(n){return[2,fr(t,"GET","/v2/recaptchaConfig",wt(t,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t,e){return E(this,void 0,void 0,function(){return S(this,function(n){return[2,fr(t,"POST","/v1/accounts:delete",e)]})})}function JI(t,e){return E(this,void 0,void 0,function(){return S(this,function(n){return[2,fr(t,"POST","/v1/accounts:lookup",e)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){if(t)try{var e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}function QI(t,e){return e===void 0&&(e=!1),E(this,void 0,void 0,function(){var n,r,i,o,s;return S(this,function(a){switch(a.label){case 0:return n=et(t),[4,n.getIdToken(e)];case 1:return r=a.sent(),i=ku(r),j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error"),o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider,[2,{claims:i,token:r,authTime:br(Qs(i.auth_time)),issuedAtTime:br(Qs(i.iat)),expirationTime:br(Qs(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}]}})})}function Qs(t){return Number(t)*1e3}function ku(t){var e=t.split("."),n=e[0],r=e[1],i=e[2];if(n===void 0||r===void 0||i===void 0)return ro("JWT malformed, contained fewer than 3 sections"),null;try{var o=hu(r);return o?JSON.parse(o):(ro("Failed to decode base64 JWT payload"),null)}catch(s){return ro("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function YI(t){var e=ku(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t,e,n){return n===void 0&&(n=!1),E(this,void 0,void 0,function(){var r;return S(this,function(i){switch(i.label){case 0:if(n)return[2,e];i.label=1;case 1:return i.trys.push([1,3,,6]),[4,e];case 2:return[2,i.sent()];case 3:return r=i.sent(),r instanceof Ke&&XI(r)?t.auth.currentUser!==t?[3,5]:[4,t.auth.signOut()]:[3,5];case 4:i.sent(),i.label=5;case 5:throw r;case 6:return[2]}})})}function XI(t){var e=t.code;return e==="auth/".concat("user-disabled")||e==="auth/".concat("user-token-expired")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ZI=function(){function t(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t.prototype._start=function(){this.isRunning||(this.isRunning=!0,this.schedule())},t.prototype._stop=function(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))},t.prototype.getInterval=function(e){var n;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;var i=(n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0,r=i-Date.now()-3e5;return Math.max(0,r)}},t.prototype.schedule=function(e){var n=this;if(e===void 0&&(e=!1),!!this.isRunning){var r=this.getInterval(e);this.timerId=setTimeout(function(){return E(n,void 0,void 0,function(){return S(this,function(i){switch(i.label){case 0:return[4,this.iteration()];case 1:return i.sent(),[2]}})})},r)}},t.prototype.iteration=function(){return E(this,void 0,void 0,function(){var e;return S(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.user.getIdToken(!0)];case 1:return n.sent(),[3,3];case 2:return e=n.sent(),(e==null?void 0:e.code)==="auth/".concat("network-request-failed")&&this.schedule(!0),[2];case 3:return this.schedule(),[2]}})})},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rm=function(){function t(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}return t.prototype._initializeTime=function(){this.lastSignInTime=br(this.lastLoginAt),this.creationTime=br(this.createdAt)},t.prototype._copy=function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()},t.prototype.toJSON=function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}},t}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t){var e;return E(this,void 0,void 0,function(){var n,r,i,o,s,a,l,u,c,f;return S(this,function(v){switch(v.label){case 0:return n=t.auth,[4,t.getIdToken()];case 1:return r=v.sent(),[4,si(t,JI(n,{idToken:r}))];case 2:return i=v.sent(),j(i==null?void 0:i.users.length,n,"internal-error"),o=i.users[0],t._notifyReloadListener(o),s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?nE(o.providerUserInfo):[],a=tE(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new rm(o.createdAt,o.lastLoginAt),isAnonymous:c},Object.assign(t,f),[2]}})})}function eE(t){return E(this,void 0,void 0,function(){var e;return S(this,function(n){switch(n.label){case 0:return e=et(t),[4,$o(e)];case 1:return n.sent(),[4,e.auth._persistUserIfCurrent(e)];case 2:return n.sent(),e.auth._notifyListenersIfCurrent(e),[2]}})})}function tE(t,e){var n=t.filter(function(r){return!e.some(function(i){return i.providerId===r.providerId})});return Me(Me([],n,!0),e,!0)}function nE(t){return t.map(function(e){var n=e.providerId,r=ur(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(t,e){return E(this,void 0,void 0,function(){var n,r=this;return S(this,function(i){switch(i.label){case 0:return[4,tm(t,{},function(){return E(r,void 0,void 0,function(){var o,s,a,l,u,c;return S(this,function(f){switch(f.label){case 0:return o=tn({grant_type:"refresh_token",refresh_token:e}).slice(1),s=t.config,a=s.tokenApiHost,l=s.apiKey,u=nm(t,a,"/v1/token","key=".concat(l)),[4,t._getAdditionalHeaders()];case 1:return c=f.sent(),c["Content-Type"]="application/x-www-form-urlencoded",[2,em.fetch()(u,{method:"POST",headers:c,body:o})]}})})})];case 1:return n=i.sent(),[2,{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ed=function(){function t(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return Object.defineProperty(t.prototype,"isExpired",{get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4},enumerable:!1,configurable:!0}),t.prototype.updateFromServerResponse=function(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");var n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):YI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)},t.prototype.getToken=function(e,n){return n===void 0&&(n=!1),E(this,void 0,void 0,function(){return S(this,function(r){switch(r.label){case 0:return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?[2,this.accessToken]:this.refreshToken?[4,this.refresh(e,this.refreshToken)]:[3,2];case 1:return r.sent(),[2,this.accessToken];case 2:return[2,null]}})})},t.prototype.clearRefreshToken=function(){this.refreshToken=null},t.prototype.refresh=function(e,n){return E(this,void 0,void 0,function(){var r,i,o,s;return S(this,function(a){switch(a.label){case 0:return[4,rE(e,n)];case 1:return r=a.sent(),i=r.accessToken,o=r.refreshToken,s=r.expiresIn,this.updateTokensAndExpiration(i,o,Number(s)),[2]}})})},t.prototype.updateTokensAndExpiration=function(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3},t.fromJSON=function(e,n){var r=n.refreshToken,i=n.accessToken,o=n.expirationTime,s=new t;return r&&(j(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(j(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s},t.prototype.toJSON=function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}},t.prototype._assign=function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime},t.prototype._clone=function(){return Object.assign(new t,this.toJSON())},t.prototype._performRefresh=function(){return lt("not implemented")},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}var dl=function(){function t(e){var n=e.uid,r=e.auth,i=e.stsTokenManager,o=ur(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?Me([],o.providerData,!0):[],this.metadata=new rm(o.createdAt||void 0,o.lastLoginAt||void 0)}return t.prototype.getIdToken=function(e){return E(this,void 0,void 0,function(){var n;return S(this,function(r){switch(r.label){case 0:return[4,si(this,this.stsTokenManager.getToken(this.auth,e))];case 1:return n=r.sent(),j(n,this.auth,"internal-error"),this.accessToken===n?[3,3]:(this.accessToken=n,[4,this.auth._persistUserIfCurrent(this)]);case 2:r.sent(),this.auth._notifyListenersIfCurrent(this),r.label=3;case 3:return[2,n]}})})},t.prototype.getIdTokenResult=function(e){return QI(this,e)},t.prototype.reload=function(){return eE(this)},t.prototype._assign=function(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(function(n){return K({},n)}),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))},t.prototype._clone=function(e){var n=new t(K(K({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n},t.prototype._onReload=function(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)},t.prototype._notifyReloadListener=function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e},t.prototype._startProactiveRefresh=function(){this.proactiveRefresh._start()},t.prototype._stopProactiveRefresh=function(){this.proactiveRefresh._stop()},t.prototype._updateTokensIfNecessary=function(e,n){return n===void 0&&(n=!1),E(this,void 0,void 0,function(){var r;return S(this,function(i){switch(i.label){case 0:return r=!1,e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n?[4,$o(this)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[4,this.auth._persistUserIfCurrent(this)];case 3:return i.sent(),r&&this.auth._notifyListenersIfCurrent(this),[2]}})})},t.prototype.delete=function(){return E(this,void 0,void 0,function(){var e;return S(this,function(n){switch(n.label){case 0:return[4,this.getIdToken()];case 1:return e=n.sent(),[4,si(this,qI(this.auth,{idToken:e}))];case 2:return n.sent(),this.stsTokenManager.clearRefreshToken(),[2,this.auth.signOut()]}})})},t.prototype.toJSON=function(){return K(K({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(function(e){return K({},e)}),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})},Object.defineProperty(t.prototype,"refreshToken",{get:function(){return this.stsTokenManager.refreshToken||""},enumerable:!1,configurable:!0}),t._fromJSON=function(e,n){var r,i,o,s,a,l,u,c,f=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,y=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,g=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,m=n.uid,w=n.emailVerified,T=n.isAnonymous,P=n.providerData,O=n.stsTokenManager;j(m&&O,e,"internal-error");var A=Ed.fromJSON(this.name,O);j(typeof m=="string",e,"internal-error"),St(f,e.name),St(v,e.name),j(typeof w=="boolean",e,"internal-error"),j(typeof T=="boolean",e,"internal-error"),St(y,e.name),St(g,e.name),St(_,e.name),St(C,e.name),St(h,e.name),St(d,e.name);var $=new t({uid:m,auth:e,email:v,emailVerified:w,displayName:f,isAnonymous:T,photoURL:g,phoneNumber:y,tenantId:_,stsTokenManager:A,createdAt:h,lastLoginAt:d});return P&&Array.isArray(P)&&($.providerData=P.map(function(M){return K({},M)})),C&&($._redirectEventId=C),$},t._fromIdTokenResponse=function(e,n,r){return r===void 0&&(r=!1),E(this,void 0,void 0,function(){var i,o;return S(this,function(s){switch(s.label){case 0:return i=new Ed,i.updateFromServerResponse(n),o=new t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r}),[4,$o(o)];case 1:return s.sent(),[2,o]}})})},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sd=new Map;function Dt(t){tr(t instanceof Function,"Expected a class definition");var e=Sd.get(t);return e?(tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var iE=function(){function t(){this.type="NONE",this.storage={}}return t.prototype._isAvailable=function(){return E(this,void 0,void 0,function(){return S(this,function(e){return[2,!0]})})},t.prototype._set=function(e,n){return E(this,void 0,void 0,function(){return S(this,function(r){return this.storage[e]=n,[2]})})},t.prototype._get=function(e){return E(this,void 0,void 0,function(){var n;return S(this,function(r){return n=this.storage[e],[2,n===void 0?null:n]})})},t.prototype._remove=function(e){return E(this,void 0,void 0,function(){return S(this,function(n){return delete this.storage[e],[2]})})},t.prototype._addListener=function(e,n){},t.prototype._removeListener=function(e,n){},t.type="NONE",t}(),kd=iE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t,e,n){return"".concat("firebase",":").concat(t,":").concat(e,":").concat(n)}var Td=function(){function t(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;var i=this.auth,o=i.config,s=i.name;this.fullUserKey=io(this.userKey,o.apiKey,s),this.fullPersistenceKey=io("persistence",o.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t.prototype.setCurrentUser=function(e){return this.persistence._set(this.fullUserKey,e.toJSON())},t.prototype.getCurrentUser=function(){return E(this,void 0,void 0,function(){var e;return S(this,function(n){switch(n.label){case 0:return[4,this.persistence._get(this.fullUserKey)];case 1:return e=n.sent(),[2,e?dl._fromJSON(this.auth,e):null]}})})},t.prototype.removeCurrentUser=function(){return this.persistence._remove(this.fullUserKey)},t.prototype.savePersistenceForRedirect=function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)},t.prototype.setPersistence=function(e){return E(this,void 0,void 0,function(){var n;return S(this,function(r){switch(r.label){case 0:return this.persistence===e?[2]:[4,this.getCurrentUser()];case 1:return n=r.sent(),[4,this.removeCurrentUser()];case 2:return r.sent(),this.persistence=e,n?[2,this.setCurrentUser(n)]:[2]}})})},t.prototype.delete=function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)},t.create=function(e,n,r){return r===void 0&&(r="authUser"),E(this,void 0,void 0,function(){var i,o,s,a,l,u,c,f,v,y,g=this;return S(this,function(_){switch(_.label){case 0:return n.length?[4,Promise.all(n.map(function(C){return E(g,void 0,void 0,function(){return S(this,function(h){switch(h.label){case 0:return[4,C._isAvailable()];case 1:return h.sent()?[2,C]:[2,void 0]}})})}))]:[2,new t(Dt(kd),e,r)];case 1:i=_.sent().filter(function(C){return C}),o=i[0]||Dt(kd),s=io(r,e.config.apiKey,e.name),a=null,l=0,u=n,_.label=2;case 2:if(!(l<u.length))return[3,7];c=u[l],_.label=3;case 3:return _.trys.push([3,5,,6]),[4,c._get(s)];case 4:return f=_.sent(),f?(v=dl._fromJSON(e,f),c!==o&&(a=v),o=c,[3,7]):[3,6];case 5:return _.sent(),[3,6];case 6:return l++,[3,2];case 7:return y=i.filter(function(C){return C._shouldAllowMigration}),!o._shouldAllowMigration||!y.length?[2,new t(o,e,r)]:(o=y[0],a?[4,o._set(s,a.toJSON())]:[3,9]);case 8:_.sent(),_.label=9;case 9:return[4,Promise.all(n.map(function(C){return E(g,void 0,void 0,function(){return S(this,function(h){switch(h.label){case 0:if(C===o)return[3,4];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,C._remove(s)];case 2:return h.sent(),[3,4];case 3:return h.sent(),[3,4];case 4:return[2]}})})}))];case 10:return _.sent(),[2,new t(o,e,r)]}})})},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t){var e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(om(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(am(e))return"Blackberry";if(lm(e))return"Webos";if(im(e))return"Safari";if((e.includes("chrome/")||sE(e))&&!e.includes("edge/"))return"Chrome";if(sm(e))return"Android";var n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);return(r==null?void 0:r.length)===2?r[1]:"Other"}function oE(t){return t===void 0&&(t=B()),/firefox\//i.test(t)}function im(t){t===void 0&&(t=B());var e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sE(t){return t===void 0&&(t=B()),/crios\//i.test(t)}function om(t){return t===void 0&&(t=B()),/iemobile/i.test(t)}function sm(t){return t===void 0&&(t=B()),/android/i.test(t)}function am(t){return t===void 0&&(t=B()),/blackberry/i.test(t)}function lm(t){return t===void 0&&(t=B()),/webos/i.test(t)}function um(t){return t===void 0&&(t=B()),/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aE(){return hp()&&document.documentMode===10}function lE(t){return t===void 0&&(t=B()),um(t)||sm(t)||lm(t)||am(t)||/windows phone/i.test(t)||om(t)}function uE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(t,e){e===void 0&&(e=[]);var n;switch(t){case"Browser":n=Cd(B());break;case"Worker":n="".concat(Cd(B()),"-").concat(t);break;default:n=t}var r=e.length?e.join(","):"FirebaseCore-web";return"".concat(n,"/").concat("JsCore","/").concat(nn,"/").concat(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cE=function(){function t(e){this.auth=e,this.queue=[]}return t.prototype.pushCallback=function(e,n){var r=this,i=function(s){return new Promise(function(a,l){try{var u=e(s);a(u)}catch(c){l(c)}})};i.onAbort=n,this.queue.push(i);var o=this.queue.length-1;return function(){r.queue[o]=function(){return Promise.resolve()}}},t.prototype.runMiddleware=function(e){return E(this,void 0,void 0,function(){var n,r,i,o,s,a,l,u;return S(this,function(c){switch(c.label){case 0:if(this.auth.currentUser===e)return[2];n=[],c.label=1;case 1:c.trys.push([1,6,,7]),r=0,i=this.queue,c.label=2;case 2:return r<i.length?(o=i[r],[4,o(e)]):[3,5];case 3:c.sent(),o.onAbort&&n.push(o.onAbort),c.label=4;case 4:return r++,[3,2];case 5:return[3,7];case 6:for(s=c.sent(),n.reverse(),a=0,l=n;a<l.length;a++){u=l[a];try{u()}catch{}}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message});case 7:return[2]}})})},t}();/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t,e){return e===void 0&&(e={}),E(this,void 0,void 0,function(){return S(this,function(n){return[2,fr(t,"GET","/v2/passwordPolicy",wt(t,e))]})})}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fE=6,hE=function(){function t(e){var n,r,i,o,s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:fE,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}return t.prototype.validatePassword=function(e){var n,r,i,o,s,a,l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l},t.prototype.validatePasswordLengthOptions=function(e,n){var r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)},t.prototype.validatePasswordCharacterOptions=function(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);for(var r,i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))},t.prototype.updatePasswordCharacterOptionsStatuses=function(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pE=function(){function t(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pd(this),this.idTokenSubscription=new Pd(this),this.beforeStateQueue=new cE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}return t.prototype._initializeWithPersistence=function(e,n){var r=this;return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(function(){return E(r,void 0,void 0,function(){var i,o,s;return S(this,function(a){switch(a.label){case 0:return this._deleted?[2]:(i=this,[4,Td.create(this,e)]);case 1:if(i.persistenceManager=a.sent(),this._deleted)return[2];if(!(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this._popupRedirectResolver._initialize(this)];case 3:return a.sent(),[3,5];case 4:return a.sent(),[3,5];case 5:return[4,this.initializeCurrentUser(n)];case 6:return a.sent(),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,this._deleted?[2]:(this._isInitialized=!0,[2])}})})}),this._initializationPromise},t.prototype._onStorageEvent=function(){return E(this,void 0,void 0,function(){var e;return S(this,function(n){switch(n.label){case 0:return this._deleted?[2]:[4,this.assertedPersistence.getCurrentUser()];case 1:return e=n.sent(),!this.currentUser&&!e?[2]:this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),[4,this.currentUser.getIdToken()]):[3,3];case 2:return n.sent(),[2];case 3:return[4,this._updateCurrentUser(e,!0)];case 4:return n.sent(),[2]}})})},t.prototype.initializeCurrentUser=function(e){var n;return E(this,void 0,void 0,function(){var r,i,o,s,a,l,u;return S(this,function(c){switch(c.label){case 0:return[4,this.assertedPersistence.getCurrentUser()];case 1:return r=c.sent(),i=r,o=!1,e&&this.config.authDomain?[4,this.getOrInitRedirectPersistenceManager()]:[3,4];case 2:return c.sent(),s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,[4,this.tryRedirectSignIn(e)];case 3:l=c.sent(),(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0),c.label=4;case 4:if(!i)return[2,this.directlySetCurrentUser(null)];if(i._redirectEventId)return[3,9];if(!o)return[3,8];c.label=5;case 5:return c.trys.push([5,7,,8]),[4,this.beforeStateQueue.runMiddleware(i)];case 6:return c.sent(),[3,8];case 7:return u=c.sent(),i=r,this._popupRedirectResolver._overrideRedirectResult(this,function(){return Promise.reject(u)}),[3,8];case 8:return i?[2,this.reloadAndSetCurrentUserOrClear(i)]:[2,this.directlySetCurrentUser(null)];case 9:return j(this._popupRedirectResolver,this,"argument-error"),[4,this.getOrInitRedirectPersistenceManager()];case 10:return c.sent(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?[2,this.directlySetCurrentUser(i)]:[2,this.reloadAndSetCurrentUserOrClear(i)]}})})},t.prototype.tryRedirectSignIn=function(e){return E(this,void 0,void 0,function(){var n;return S(this,function(r){switch(r.label){case 0:n=null,r.label=1;case 1:return r.trys.push([1,3,,5]),[4,this._popupRedirectResolver._completeRedirectFn(this,e,!0)];case 2:return n=r.sent(),[3,5];case 3:return r.sent(),[4,this._setRedirectUser(null)];case 4:return r.sent(),[3,5];case 5:return[2,n]}})})},t.prototype.reloadAndSetCurrentUserOrClear=function(e){return E(this,void 0,void 0,function(){var n;return S(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,$o(e)];case 1:return r.sent(),[3,3];case 2:return n=r.sent(),(n==null?void 0:n.code)!=="auth/".concat("network-request-failed")?[2,this.directlySetCurrentUser(null)]:[3,3];case 3:return[2,this.directlySetCurrentUser(e)]}})})},t.prototype.useDeviceLanguage=function(){this.languageCode=zI()},t.prototype._delete=function(){return E(this,void 0,void 0,function(){return S(this,function(e){return this._deleted=!0,[2]})})},t.prototype.updateCurrentUser=function(e){return E(this,void 0,void 0,function(){var n;return S(this,function(r){return n=e?et(e):null,n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),[2,this._updateCurrentUser(n&&n._clone(this))]})})},t.prototype._updateCurrentUser=function(e,n){return n===void 0&&(n=!1),E(this,void 0,void 0,function(){var r=this;return S(this,function(i){switch(i.label){case 0:return this._deleted?[2]:(e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n?[3,2]:[4,this.beforeStateQueue.runMiddleware(e)]);case 1:i.sent(),i.label=2;case 2:return[2,this.queue(function(){return E(r,void 0,void 0,function(){return S(this,function(o){switch(o.label){case 0:return[4,this.directlySetCurrentUser(e)];case 1:return o.sent(),this.notifyAuthListeners(),[2]}})})})]}})})},t.prototype.signOut=function(){return E(this,void 0,void 0,function(){return S(this,function(e){switch(e.label){case 0:return[4,this.beforeStateQueue.runMiddleware(null)];case 1:return e.sent(),this.redirectPersistenceManager||this._popupRedirectResolver?[4,this._setRedirectUser(null)]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2,this._updateCurrentUser(null,!0)]}})})},t.prototype.setPersistence=function(e){var n=this;return this.queue(function(){return E(n,void 0,void 0,function(){return S(this,function(r){switch(r.label){case 0:return[4,this.assertedPersistence.setPersistence(Dt(e))];case 1:return r.sent(),[2]}})})})},t.prototype._getRecaptchaConfig=function(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]},t.prototype.validatePassword=function(e){return E(this,void 0,void 0,function(){var n;return S(this,function(r){switch(r.label){case 0:return this._getPasswordPolicyInternal()?[3,2]:[4,this._updatePasswordPolicy()];case 1:r.sent(),r.label=2;case 2:return n=this._getPasswordPolicyInternal(),n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?[2,Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{}))]:[2,n.validatePassword(e)]}})})},t.prototype._getPasswordPolicyInternal=function(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]},t.prototype._updatePasswordPolicy=function(){return E(this,void 0,void 0,function(){var e,n;return S(this,function(r){switch(r.label){case 0:return[4,dE(this)];case 1:return e=r.sent(),n=new hE(e),this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n,[2]}})})},t.prototype._getPersistence=function(){return this.assertedPersistence.persistence.type},t.prototype._updateErrorMap=function(e){this._errorFactory=new en("auth","Firebase",e())},t.prototype.onAuthStateChanged=function(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)},t.prototype.beforeAuthStateChanged=function(e,n){return this.beforeStateQueue.pushCallback(e,n)},t.prototype.onIdTokenChanged=function(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)},t.prototype.authStateReady=function(){var e=this;return new Promise(function(n,r){if(e.currentUser)n();else var i=e.onAuthStateChanged(function(){i(),n()},r)})},t.prototype.toJSON=function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}},t.prototype._setRedirectUser=function(e,n){return E(this,void 0,void 0,function(){var r;return S(this,function(i){switch(i.label){case 0:return[4,this.getOrInitRedirectPersistenceManager(n)];case 1:return r=i.sent(),[2,e===null?r.removeCurrentUser():r.setCurrentUser(e)]}})})},t.prototype.getOrInitRedirectPersistenceManager=function(e){return E(this,void 0,void 0,function(){var n,r,i;return S(this,function(o){switch(o.label){case 0:return this.redirectPersistenceManager?[3,3]:(n=e&&Dt(e)||this._popupRedirectResolver,j(n,this,"argument-error"),r=this,[4,Td.create(this,[Dt(n._redirectPersistence)],"redirectUser")]);case 1:return r.redirectPersistenceManager=o.sent(),i=this,[4,this.redirectPersistenceManager.getCurrentUser()];case 2:i.redirectUser=o.sent(),o.label=3;case 3:return[2,this.redirectPersistenceManager]}})})},t.prototype._redirectUserForId=function(e){var n,r;return E(this,void 0,void 0,function(){var i=this;return S(this,function(o){switch(o.label){case 0:return this._isInitialized?[4,this.queue(function(){return E(i,void 0,void 0,function(){return S(this,function(s){return[2]})})})]:[3,2];case 1:o.sent(),o.label=2;case 2:return((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?[2,this._currentUser]:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?[2,this.redirectUser]:[2,null]}})})},t.prototype._persistUserIfCurrent=function(e){return E(this,void 0,void 0,function(){var n=this;return S(this,function(r){return e===this.currentUser?[2,this.queue(function(){return E(n,void 0,void 0,function(){return S(this,function(i){return[2,this.directlySetCurrentUser(e)]})})})]:[2]})})},t.prototype._notifyListenersIfCurrent=function(e){e===this.currentUser&&this.notifyAuthListeners()},t.prototype._key=function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)},t.prototype._startProactiveRefresh=function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()},t.prototype._stopProactiveRefresh=function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()},Object.defineProperty(t.prototype,"_currentUser",{get:function(){return this.currentUser},enumerable:!1,configurable:!0}),t.prototype.notifyAuthListeners=function(){var e,n;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}},t.prototype.registerStateListener=function(e,n,r,i){var o=this;if(this._deleted)return function(){};var s=typeof n=="function"?n:n.next.bind(n),a=!1,l=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(l,this,"internal-error"),l.then(function(){a||s(o.currentUser)}),typeof n=="function"){var u=e.addObserver(n,r,i);return function(){a=!0,u()}}else{var c=e.addObserver(n);return function(){a=!0,c()}}},t.prototype.directlySetCurrentUser=function(e){return E(this,void 0,void 0,function(){return S(this,function(n){switch(n.label){case 0:return this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?[4,this.assertedPersistence.setCurrentUser(e)]:[3,2];case 1:return n.sent(),[3,4];case 2:return[4,this.assertedPersistence.removeCurrentUser()];case 3:n.sent(),n.label=4;case 4:return[2]}})})},t.prototype.queue=function(e){return this.operations=this.operations.then(e,e),this.operations},Object.defineProperty(t.prototype,"assertedPersistence",{get:function(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager},enumerable:!1,configurable:!0}),t.prototype._logFramework=function(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cm(this.config.clientPlatform,this._getFrameworks()))},t.prototype._getFrameworks=function(){return this.frameworks},t.prototype._getAdditionalHeaders=function(){var e;return E(this,void 0,void 0,function(){var n,r,i,o;return S(this,function(s){switch(s.label){case 0:return n=(o={},o["X-Client-Version"]=this.clientVersion,o),this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId),[4,(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader()];case 1:return r=s.sent(),r&&(n["X-Firebase-Client"]=r),[4,this._getAppCheckToken()];case 2:return i=s.sent(),i&&(n["X-Firebase-AppCheck"]=i),[2,n]}})})},t.prototype._getAppCheckToken=function(){var e;return E(this,void 0,void 0,function(){var n;return S(this,function(r){switch(r.label){case 0:return[4,(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken()];case 1:return n=r.sent(),n!=null&&n.error&&jI("Error while retrieving App Check token: ".concat(n.error)),[2,n==null?void 0:n.token]}})})},t}();function dm(t){return et(t)}var Pd=function(){function t(e){var n=this;this.auth=e,this.observer=null,this.addObserver=pp(function(r){return n.observer=r})}return Object.defineProperty(t.prototype,"next",{get:function(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)},enumerable:!1,configurable:!0}),t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function vE(t){return new Promise(function(e,n){var r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=function(i){var o=cs("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",mE().appendChild(r)})}var gE="https://www.google.com/recaptcha/enterprise.js?render=",yE="recaptcha-enterprise",_E="NO_RECAPTCHA",wE=function(){function t(e){this.type=yE,this.auth=dm(e)}return t.prototype.verify=function(e,n){return e===void 0&&(e="verify"),n===void 0&&(n=!1),E(this,void 0,void 0,function(){function r(s){return E(this,void 0,void 0,function(){var a=this;return S(this,function(l){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return[2,s._agentRecaptchaConfig.siteKey];if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return[2,s._tenantRecaptchaConfigs[s.tenantId].siteKey]}return[2,new Promise(function(u,c){return E(a,void 0,void 0,function(){return S(this,function(f){return GI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(function(v){if(v.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{var y=new MI(v);return s.tenantId==null?s._agentRecaptchaConfig=y:s._tenantRecaptchaConfigs[s.tenantId]=y,u(y.siteKey)}}).catch(function(v){c(v)}),[2]})})})]})})}function i(s,a,l){var u=window.grecaptcha;wd(u)?u.enterprise.ready(function(){u.enterprise.execute(s,{action:e}).then(function(c){a(c)}).catch(function(){a(_E)})}):l(Error("No reCAPTCHA enterprise script loaded."))}var o=this;return S(this,function(s){return[2,new Promise(function(a,l){r(o.auth).then(function(u){if(!n&&wd(window.grecaptcha))i(u,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}vE(gE+u).then(function(){i(u,a,l)}).catch(function(c){l(c)})}}).catch(function(u){l(u)})})]})})},t}();function Rd(t,e,n,r){return r===void 0&&(r=!1),E(this,void 0,void 0,function(){var i,o,s;return S(this,function(a){switch(a.label){case 0:i=new wE(t),a.label=1;case 1:return a.trys.push([1,3,,5]),[4,i.verify(n)];case 2:return o=a.sent(),[3,5];case 3:return a.sent(),[4,i.verify(n,!0)];case 4:return o=a.sent(),[3,5];case 5:return s=K({},e),r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),[2,s]}})})}function IE(t,e){var n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vi=function(){function t(e,n){this.providerId=e,this.signInMethod=n}return t.prototype.toJSON=function(){return lt("not implemented")},t.prototype._getIdTokenResponse=function(e){return lt("not implemented")},t.prototype._linkToIdToken=function(e,n){return lt("not implemented")},t.prototype._getReauthenticationResolver=function(e){return lt("not implemented")},t}();function EE(t,e){return E(this,void 0,void 0,function(){return S(this,function(n){return[2,fr(t,"POST","/v1/accounts:update",e)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t,e){return E(this,void 0,void 0,function(){return S(this,function(n){return[2,kn(t,"POST","/v1/accounts:signInWithPassword",wt(t,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(t,e){return E(this,void 0,void 0,function(){return S(this,function(n){return[2,kn(t,"POST","/v1/accounts:signInWithEmailLink",wt(t,e))]})})}function kE(t,e){return E(this,void 0,void 0,function(){return S(this,function(n){return[2,kn(t,"POST","/v1/accounts:signInWithEmailLink",wt(t,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){J(e,t);function e(n,r,i,o){o===void 0&&(o=null);var s=t.call(this,"password",i)||this;return s._email=n,s._password=r,s._tenantId=o,s}return e._fromEmailAndPassword=function(n,r){return new e(n,r,"password")},e._fromEmailAndCode=function(n,r,i){return i===void 0&&(i=null),new e(n,r,"emailLink",i)},e.prototype.toJSON=function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null},e.prototype._getIdTokenResponse=function(n){var r;return E(this,void 0,void 0,function(){var i,o,s,a=this;return S(this,function(l){switch(l.label){case 0:switch(i=this.signInMethod,i){case"password":return[3,1];case"emailLink":return[3,4]}return[3,5];case 1:return o={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled?[4,Rd(n,o,"signInWithPassword")]:[3,3];case 2:return s=l.sent(),[2,Ys(n,s)];case 3:return[2,Ys(n,o).catch(function(u){return E(a,void 0,void 0,function(){var c;return S(this,function(f){switch(f.label){case 0:return u.code!=="auth/".concat("missing-recaptcha-token")?[3,2]:(console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."),[4,Rd(n,o,"signInWithPassword")]);case 1:return c=f.sent(),[2,Ys(n,c)];case 2:return[2,Promise.reject(u)]}})})})];case 4:return[2,SE(n,{email:this._email,oobCode:this._password})];case 5:gt(n,"internal-error"),l.label=6;case 6:return[2]}})})},e.prototype._linkToIdToken=function(n,r){return E(this,void 0,void 0,function(){return S(this,function(i){switch(this.signInMethod){case"password":return[2,EE(n,{idToken:r,returnSecureToken:!0,email:this._email,password:this._password})];case"emailLink":return[2,kE(n,{idToken:r,email:this._email,oobCode:this._password})];default:gt(n,"internal-error")}return[2]})})},e.prototype._getReauthenticationResolver=function(n){return this._getIdTokenResponse(n)},e})(vi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e){return E(this,void 0,void 0,function(){return S(this,function(n){return[2,kn(t,"POST","/v1/accounts:signInWithIdp",wt(t,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var TE="http://localhost",nr=function(t){J(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.pendingToken=null,n}return e._fromParams=function(n){var r=new e(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(r.idToken=n.idToken),n.accessToken&&(r.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(r.nonce=n.nonce),n.pendingToken&&(r.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(r.accessToken=n.oauthToken,r.secret=n.oauthTokenSecret):gt("argument-error"),r},e.prototype.toJSON=function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n,i=r.providerId,o=r.signInMethod,s=ur(r,["providerId","signInMethod"]);if(!i||!o)return null;var a=new e(i,o);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a},e.prototype._getIdTokenResponse=function(n){var r=this.buildRequest();return ct(n,r)},e.prototype._linkToIdToken=function(n,r){var i=this.buildRequest();return i.idToken=r,ct(n,i)},e.prototype._getReauthenticationResolver=function(n){var r=this.buildRequest();return r.autoCreate=!1,ct(n,r)},e.prototype.buildRequest=function(){var n={requestUri:TE,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{var r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),n.postBody=tn(r)}return n},e}(vi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xs;function CE(t,e){return E(this,void 0,void 0,function(){return S(this,function(n){return[2,kn(t,"POST","/v1/accounts:signInWithPhoneNumber",wt(t,e))]})})}function PE(t,e){return E(this,void 0,void 0,function(){var n;return S(this,function(r){switch(r.label){case 0:return[4,kn(t,"POST","/v1/accounts:signInWithPhoneNumber",wt(t,e))];case 1:if(n=r.sent(),n.temporaryProof)throw Pr(t,"account-exists-with-different-credential",n);return[2,n]}})})}var RE=(Xs={},Xs.USER_NOT_FOUND="user-not-found",Xs);function NE(t,e){return E(this,void 0,void 0,function(){var n;return S(this,function(r){return n=K(K({},e),{operation:"REAUTH"}),[2,kn(t,"POST","/v1/accounts:signInWithPhoneNumber",wt(t,n),RE)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){J(e,t);function e(n){var r=t.call(this,"phone","phone")||this;return r.params=n,r}return e._fromVerification=function(n,r){return new e({verificationId:n,verificationCode:r})},e._fromTokenResponse=function(n,r){return new e({phoneNumber:n,temporaryProof:r})},e.prototype._getIdTokenResponse=function(n){return CE(n,this._makeVerificationRequest())},e.prototype._linkToIdToken=function(n,r){return PE(n,K({idToken:r},this._makeVerificationRequest()))},e.prototype._getReauthenticationResolver=function(n){return NE(n,this._makeVerificationRequest())},e.prototype._makeVerificationRequest=function(){var n=this.params,r=n.temporaryProof,i=n.phoneNumber,o=n.verificationId,s=n.verificationCode;return r&&i?{temporaryProof:r,phoneNumber:i}:{sessionInfo:o,code:s}},e.prototype.toJSON=function(){var n={providerId:this.providerId};return this.params.phoneNumber&&(n.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(n.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(n.verificationCode=this.params.verificationCode),this.params.verificationId&&(n.verificationId=this.params.verificationId),n},e.fromJSON=function(n){typeof n=="string"&&(n=JSON.parse(n));var r=n,i=r.verificationId,o=r.verificationCode,s=r.phoneNumber,a=r.temporaryProof;return!o&&!i&&!s&&!a?null:new e({verificationId:i,verificationCode:o,phoneNumber:s,temporaryProof:a})},e})(vi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fm=function(){function t(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}return t.prototype.setDefaultLanguage=function(e){this.defaultLanguageCode=e},t.prototype.setCustomParameters=function(e){return this.customParameters=e,this},t.prototype.getCustomParameters=function(){return this.customParameters},t}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gi=function(t){J(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.scopes=[],n}return e.prototype.addScope=function(n){return this.scopes.includes(n)||this.scopes.push(n),this},e.prototype.getScopes=function(){return Me([],this.scopes,!0)},e}(fm);(function(t){J(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.credentialFromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n;return j("providerId"in r&&"signInMethod"in r,"argument-error"),nr._fromParams(r)},e.prototype.credential=function(n){return this._credential(K(K({},n),{nonce:n.rawNonce}))},e.prototype._credential=function(n){return j(n.idToken||n.accessToken,"argument-error"),nr._fromParams(K(K({},n),{providerId:this.providerId,signInMethod:this.providerId}))},e.credentialFromResult=function(n){return e.oauthCredentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.oauthCredentialFromTaggedObject(n.customData||{})},e.oauthCredentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,o=i.oauthIdToken,s=i.oauthAccessToken,a=i.oauthTokenSecret,l=i.pendingToken,u=i.nonce,c=i.providerId;if(!s&&!a&&!o&&!l||!c)return null;try{return new e(c)._credential({idToken:o,accessToken:s,nonce:u,pendingToken:l})}catch{return null}},e})(gi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){J(e,t);function e(){return t.call(this,"facebook.com")||this}return e.credential=function(n){return nr._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.FACEBOOK_SIGN_IN_METHOD,accessToken:n})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.FACEBOOK_SIGN_IN_METHOD="facebook.com",e.PROVIDER_ID="facebook.com",e})(gi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var OE=function(t){J(e,t);function e(){var n=t.call(this,"google.com")||this;return n.addScope("profile"),n}return e.credential=function(n,r){return nr._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:r})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,o=i.oauthIdToken,s=i.oauthAccessToken;if(!o&&!s)return null;try{return e.credential(o,s)}catch{return null}},e.GOOGLE_SIGN_IN_METHOD="google.com",e.PROVIDER_ID="google.com",e}(gi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){J(e,t);function e(){return t.call(this,"github.com")||this}return e.credential=function(n){return nr._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GITHUB_SIGN_IN_METHOD,accessToken:n})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.GITHUB_SIGN_IN_METHOD="github.com",e.PROVIDER_ID="github.com",e})(gi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var AE="http://localhost",Nd=function(t){J(e,t);function e(n,r){var i=t.call(this,n,n)||this;return i.pendingToken=r,i}return e.prototype._getIdTokenResponse=function(n){var r=this.buildRequest();return ct(n,r)},e.prototype._linkToIdToken=function(n,r){var i=this.buildRequest();return i.idToken=r,ct(n,i)},e.prototype._getReauthenticationResolver=function(n){var r=this.buildRequest();return r.autoCreate=!1,ct(n,r)},e.prototype.toJSON=function(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n,i=r.providerId,o=r.signInMethod,s=r.pendingToken;return!i||!o||!s||i!==o?null:new e(i,s)},e._create=function(n,r){return new e(n,r)},e.prototype.buildRequest=function(){return{requestUri:AE,returnSecureToken:!0,pendingToken:this.pendingToken}},e}(vi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xE="saml.";(function(t){J(e,t);function e(n){return j(n.startsWith(xE),"argument-error"),t.call(this,n)||this}return e.credentialFromResult=function(n){return e.samlCredentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.samlCredentialFromTaggedObject(n.customData||{})},e.credentialFromJSON=function(n){var r=Nd.fromJSON(n);return j(r,"argument-error"),r},e.samlCredentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,o=i.pendingToken,s=i.providerId;if(!o||!s)return null;try{return Nd._create(s,o)}catch{return null}},e})(fm);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){J(e,t);function e(){return t.call(this,"twitter.com")||this}return e.credential=function(n,r){return nr._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:r})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,o=i.oauthAccessToken,s=i.oauthTokenSecret;if(!o||!s)return null;try{return e.credential(o,s)}catch{return null}},e.TWITTER_SIGN_IN_METHOD="twitter.com",e.PROVIDER_ID="twitter.com",e})(gi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tu=function(){function t(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}return t._fromIdTokenResponse=function(e,n,r,i){return i===void 0&&(i=!1),E(this,void 0,void 0,function(){var o,s,a;return S(this,function(l){switch(l.label){case 0:return[4,dl._fromIdTokenResponse(e,r,i)];case 1:return o=l.sent(),s=Od(r),a=new t({user:o,providerId:s,_tokenResponse:r,operationType:n}),[2,a]}})})},t._forOperation=function(e,n,r){return E(this,void 0,void 0,function(){var i;return S(this,function(o){switch(o.label){case 0:return[4,e._updateTokensIfNecessary(r,!0)];case 1:return o.sent(),i=Od(r),[2,new t({user:e,providerId:i,_tokenResponse:r,operationType:n})]}})})},t}();function Od(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var LE=function(t){J(e,t);function e(n,r,i,o){var s=this,a;return s=t.call(this,r.code,r.message)||this,s.operationType=i,s.user=o,Object.setPrototypeOf(s,e.prototype),s.customData={appName:n.name,tenantId:(a=n.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:i},s}return e._fromErrorAndOperation=function(n,r,i,o){return new e(n,r,i,o)},e}(Ke);function hm(t,e,n,r){var i=e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(function(o){throw o.code==="auth/".concat("multi-factor-auth-required")?LE._fromErrorAndOperation(t,o,e,r):o})}function DE(t,e,n){return n===void 0&&(n=!1),E(this,void 0,void 0,function(){var r,i,o,s,a,l;return S(this,function(u){switch(u.label){case 0:return i=si,o=[t],a=(s=e)._linkToIdToken,l=[t.auth],[4,t.getIdToken()];case 1:return[4,i.apply(void 0,o.concat([a.apply(s,l.concat([u.sent()])),n]))];case 2:return r=u.sent(),[2,Tu._forOperation(t,"link",r)]}})})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(t,e,n){return n===void 0&&(n=!1),E(this,void 0,void 0,function(){var r,i,o,s,a,l;return S(this,function(u){switch(u.label){case 0:r=t.auth,i="reauthenticate",u.label=1;case 1:return u.trys.push([1,3,,4]),[4,si(t,hm(r,i,e,t),n)];case 2:return o=u.sent(),j(o.idToken,r,"internal-error"),s=ku(o.idToken),j(s,r,"internal-error"),a=s.sub,j(t.uid===a,r,"user-mismatch"),[2,Tu._forOperation(t,i,o)];case 3:throw l=u.sent(),(l==null?void 0:l.code)==="auth/".concat("user-not-found")&&gt(r,"user-mismatch"),l;case 4:return[2]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t,e,n){return n===void 0&&(n=!1),E(this,void 0,void 0,function(){var r,i,o;return S(this,function(s){switch(s.label){case 0:return r="signIn",[4,hm(t,r,e)];case 1:return i=s.sent(),[4,Tu._fromIdTokenResponse(t,r,i)];case 2:return o=s.sent(),n?[3,4]:[4,t._updateCurrentUser(o.user)];case 3:s.sent(),s.label=4;case 4:return[2,o]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pm=function(){function t(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}return t._fromServerResponse=function(e,n){return"phoneInfo"in n?jE._fromServerResponse(e,n):"totpInfo"in n?bE._fromServerResponse(e,n):gt(e,"internal-error")},t}(),jE=function(t){J(e,t);function e(n){var r=t.call(this,"phone",n)||this;return r.phoneNumber=n.phoneInfo,r}return e._fromServerResponse=function(n,r){return new e(r)},e}(pm),bE=function(t){J(e,t);function e(n){return t.call(this,"totp",n)||this}return e._fromServerResponse=function(n,r){return new e(r)},e}(pm),Cu=function(){function t(e,n,r){r===void 0&&(r={}),this.isNewUser=e,this.providerId=n,this.profile=r}return t}(),mm=function(t){J(e,t);function e(n,r,i,o){var s=t.call(this,n,r,i)||this;return s.username=o,s}return e}(Cu);(function(t){J(e,t);function e(n,r){return t.call(this,n,"facebook.com",r)||this}return e})(Cu);(function(t){J(e,t);function e(n,r){return t.call(this,n,"github.com",r,typeof(r==null?void 0:r.login)=="string"?r==null?void 0:r.login:null)||this}return e})(mm);(function(t){J(e,t);function e(n,r){return t.call(this,n,"google.com",r)||this}return e})(Cu);(function(t){J(e,t);function e(n,r,i){return t.call(this,n,"twitter.com",r,i)||this}return e})(mm);var Ad="@firebase/auth",xd="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var FE=function(){function t(e){this.auth=e,this.internalListeners=new Map}return t.prototype.getUid=function(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null},t.prototype.getToken=function(e){return E(this,void 0,void 0,function(){var n;return S(this,function(r){switch(r.label){case 0:return this.assertAuthConfigured(),[4,this.auth._initializationPromise];case 1:return r.sent(),this.auth.currentUser?[4,this.auth.currentUser.getIdToken(e)]:[2,null];case 2:return n=r.sent(),[2,{accessToken:n}]}})})},t.prototype.addAuthTokenListener=function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var n=this.auth.onIdTokenChanged(function(r){e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}},t.prototype.removeAuthTokenListener=function(e){this.assertAuthConfigured();var n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())},t.prototype.assertAuthConfigured=function(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")},t.prototype.updateProactiveRefresh=function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zE(t){wn(new Qt("auth",function(e,n){var r=n.options,i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),a=i.options,l=a.apiKey,u=a.authDomain;j(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});var c={apiKey:l,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cm(t)},f=new pE(i,o,s,c);return IE(f,r),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(function(e,n,r){var i=e.getProvider("auth-internal");i.initialize()})),wn(new Qt("auth-internal",function(e){var n=dm(e.getProvider("auth").getImmediate());return function(r){return new FE(r)}(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(Ad,xd,$E(t)),Gt(Ad,xd,"esm5")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vm=function(){function t(e,n){this.storageRetriever=e,this.type=n}return t.prototype._isAvailable=function(){try{return this.storage?(this.storage.setItem(_d,"1"),this.storage.removeItem(_d),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}},t.prototype._set=function(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()},t.prototype._get=function(e){var n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)},t.prototype._remove=function(e){return this.storage.removeItem(e),Promise.resolve()},Object.defineProperty(t.prototype,"storage",{get:function(){return this.storageRetriever()},enumerable:!1,configurable:!0}),t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(){var t=B();return im(t)||um(t)}var BE=1e3,HE=10;(function(t){J(e,t);function e(){var n=t.call(this,function(){return window.localStorage},"LOCAL")||this;return n.boundEventHandler=function(r,i){return n.onStorageEvent(r,i)},n.listeners={},n.localCache={},n.pollTimer=null,n.safariLocalStorageNotSynced=VE()&&uE(),n.fallbackToPolling=lE(),n._shouldAllowMigration=!0,n}return e.prototype.forAllChangedKeys=function(n){for(var r=0,i=Object.keys(this.listeners);r<i.length;r++){var o=i[r],s=this.storage.getItem(o),a=this.localCache[o];s!==a&&n(o,a,s)}},e.prototype.onStorageEvent=function(n,r){var i=this;if(r===void 0&&(r=!1),!n.key){this.forAllChangedKeys(function(u,c,f){i.notifyListeners(u,f)});return}var o=n.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var s=this.storage.getItem(o);if(n.newValue!==s)n.newValue!==null?this.storage.setItem(o,n.newValue):this.storage.removeItem(o);else if(this.localCache[o]===n.newValue&&!r)return}var a=function(){var u=i.storage.getItem(o);!r&&i.localCache[o]===u||i.notifyListeners(o,u)},l=this.storage.getItem(o);aE()&&l!==n.newValue&&n.newValue!==n.oldValue?setTimeout(a,HE):a()},e.prototype.notifyListeners=function(n,r){this.localCache[n]=r;var i=this.listeners[n];if(i)for(var o=0,s=Array.from(i);o<s.length;o++){var a=s[o];a(r&&JSON.parse(r))}},e.prototype.startPolling=function(){var n=this;this.stopPolling(),this.pollTimer=setInterval(function(){n.forAllChangedKeys(function(r,i,o){n.onStorageEvent(new StorageEvent("storage",{key:r,oldValue:i,newValue:o}),!0)})},BE)},e.prototype.stopPolling=function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)},e.prototype.attachListener=function(){window.addEventListener("storage",this.boundEventHandler)},e.prototype.detachListener=function(){window.removeEventListener("storage",this.boundEventHandler)},e.prototype._addListener=function(n,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(r)},e.prototype._removeListener=function(n,r){this.listeners[n]&&(this.listeners[n].delete(r),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())},e.prototype._set=function(n,r){return E(this,void 0,void 0,function(){return S(this,function(i){switch(i.label){case 0:return[4,t.prototype._set.call(this,n,r)];case 1:return i.sent(),this.localCache[n]=JSON.stringify(r),[2]}})})},e.prototype._get=function(n){return E(this,void 0,void 0,function(){var r;return S(this,function(i){switch(i.label){case 0:return[4,t.prototype._get.call(this,n)];case 1:return r=i.sent(),this.localCache[n]=JSON.stringify(r),[2,r]}})})},e.prototype._remove=function(n){return E(this,void 0,void 0,function(){return S(this,function(r){switch(r.label){case 0:return[4,t.prototype._remove.call(this,n)];case 1:return r.sent(),delete this.localCache[n],[2]}})})},e.type="LOCAL",e})(vm);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){J(e,t);function e(){return t.call(this,function(){return window.sessionStorage},"SESSION")||this}return e.prototype._addListener=function(n,r){},e.prototype._removeListener=function(n,r){},e.type="SESSION",e})(vm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pu=function(t){J(e,t);function e(n){var r=t.call(this,"custom","custom")||this;return r.params=n,r}return e.prototype._getIdTokenResponse=function(n){return ct(n,this._buildIdpRequest())},e.prototype._linkToIdToken=function(n,r){return ct(n,this._buildIdpRequest(r))},e.prototype._getReauthenticationResolver=function(n){return ct(n,this._buildIdpRequest())},e.prototype._buildIdpRequest=function(n){var r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(r.idToken=n),r},e}(vi);function WE(t){return UE(t.auth,new Pu(t),t.bypassAuthState)}function KE(t){var e=t.auth,n=t.user;return j(n,e,"internal-error"),ME(n,new Pu(t),t.bypassAuthState)}function GE(t){return E(this,void 0,void 0,function(){var e,n;return S(this,function(r){return e=t.auth,n=t.user,j(n,e,"internal-error"),[2,DE(n,new Pu(t),t.bypassAuthState)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qE=function(){function t(e,n,r,i,o){o===void 0&&(o=!1),this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return t.prototype.execute=function(){var e=this;return new Promise(function(n,r){return E(e,void 0,void 0,function(){var i,o;return S(this,function(s){switch(s.label){case 0:this.pendingPromise={resolve:n,reject:r},s.label=1;case 1:return s.trys.push([1,4,,5]),i=this,[4,this.resolver._initialize(this.auth)];case 2:return i.eventManager=s.sent(),[4,this.onExecution()];case 3:return s.sent(),this.eventManager.registerConsumer(this),[3,5];case 4:return o=s.sent(),this.reject(o),[3,5];case 5:return[2]}})})})},t.prototype.onAuthEvent=function(e){return E(this,void 0,void 0,function(){var n,r,i,o,s,a,l,u,c;return S(this,function(f){switch(f.label){case 0:if(n=e.urlResponse,r=e.sessionId,i=e.postBody,o=e.tenantId,s=e.error,a=e.type,s)return this.reject(s),[2];l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState},f.label=1;case 1:return f.trys.push([1,3,,4]),u=this.resolve,[4,this.getIdpTask(a)(l)];case 2:return u.apply(this,[f.sent()]),[3,4];case 3:return c=f.sent(),this.reject(c),[3,4];case 4:return[2]}})})},t.prototype.onError=function(e){this.reject(e)},t.prototype.getIdpTask=function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WE;case"linkViaPopup":case"linkViaRedirect":return GE;case"reauthViaPopup":case"reauthViaRedirect":return KE;default:gt(this.auth,"internal-error")}},t.prototype.resolve=function(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()},t.prototype.reject=function(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()},t.prototype.unregisterAndCleanUp=function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var JE="pendingRedirect",Zs=new Map;(function(t){J(e,t);function e(n,r,i){i===void 0&&(i=!1);var o=t.call(this,n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,i)||this;return o.eventId=null,o}return e.prototype.execute=function(){return E(this,void 0,void 0,function(){var n,r,i,o,s;return S(this,function(a){switch(a.label){case 0:if(n=Zs.get(this.auth._key()),n)return[3,8];a.label=1;case 1:return a.trys.push([1,6,,7]),[4,QE(this.resolver,this.auth)];case 2:return r=a.sent(),r?[4,t.prototype.execute.call(this)]:[3,4];case 3:return o=a.sent(),[3,5];case 4:o=null,a.label=5;case 5:return i=o,n=function(){return Promise.resolve(i)},[3,7];case 6:return s=a.sent(),n=function(){return Promise.reject(s)},[3,7];case 7:Zs.set(this.auth._key(),n),a.label=8;case 8:return this.bypassAuthState||Zs.set(this.auth._key(),function(){return Promise.resolve(null)}),[2,n()]}})})},e.prototype.onAuthEvent=function(n){return E(this,void 0,void 0,function(){var r;return S(this,function(i){switch(i.label){case 0:return n.type==="signInViaRedirect"?[2,t.prototype.onAuthEvent.call(this,n)]:n.type==="unknown"?(this.resolve(null),[2]):n.eventId?[4,this.auth._redirectUserForId(n.eventId)]:[3,2];case 1:if(r=i.sent(),r)return this.user=r,[2,t.prototype.onAuthEvent.call(this,n)];this.resolve(null),i.label=2;case 2:return[2]}})})},e.prototype.onExecution=function(){return E(this,void 0,void 0,function(){return S(this,function(n){return[2]})})},e.prototype.cleanUp=function(){},e})(qE);function QE(t,e){return E(this,void 0,void 0,function(){var n,r,i;return S(this,function(o){switch(o.label){case 0:return n=XE(e),r=YE(t),[4,r._isAvailable()];case 1:return o.sent()?[4,r._get(n)]:[2,!1];case 2:return i=o.sent()==="true",[4,r._remove(n)];case 3:return o.sent(),[2,i]}})})}function YE(t){return Dt(t._redirectPersistence)}function XE(t){return io(JE,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ZE=10*60*1e3,e1=function(){function t(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t.prototype.registerConsumer=function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)},t.prototype.unregisterConsumer=function(e){this.consumers.delete(e)},t.prototype.onEvent=function(e){var n=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach(function(i){n.isEventForConsumer(e,i)&&(r=!0,n.sendToConsumer(e,i),n.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!t1(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r},t.prototype.sendToConsumer=function(e,n){var r;if(e.error&&!gm(e)){var i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cs(this.auth,i))}else n.onAuthEvent(e)},t.prototype.isEventForConsumer=function(e,n){var r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r},t.prototype.hasEventBeenHandled=function(e){return Date.now()-this.lastProcessedEventTime>=ZE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ld(e))},t.prototype.saveEventToCache=function(e){this.cachedEventUids.add(Ld(e)),this.lastProcessedEventTime=Date.now()},t}();function Ld(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(function(e){return e}).join("-")}function gm(t){var e=t.type,n=t.error;return e==="unknown"&&(n==null?void 0:n.code)==="auth/".concat("no-auth-event")}function t1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gm(t);default:return!1}}(function(t){J(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.passiveListeners=new Set,n.initPromise=new Promise(function(r){n.resolveInialized=r}),n}return e.prototype.addPassiveListener=function(n){this.passiveListeners.add(n)},e.prototype.removePassiveListener=function(n){this.passiveListeners.delete(n)},e.prototype.resetRedirect=function(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1},e.prototype.onEvent=function(n){return this.resolveInialized(),this.passiveListeners.forEach(function(r){return r(n)}),t.prototype.onEvent.call(this,n)},e.prototype.initialized=function(){return E(this,void 0,void 0,function(){return S(this,function(n){switch(n.label){case 0:return[4,this.initPromise];case 1:return n.sent(),[2]}})})},e})(e1);zE("Cordova");const ym=yp({apiKey:"AIzaSyDM__Ixcrlgqy2yp5VipjHztLZJlA2sGps",authDomain:"collab-rate.firebaseapp.com",projectId:"collab-rate",storageBucket:"collab-rate.appspot.com",messagingSenderId:"200052455183",appId:"1:200052455183:web:b031c3695203d9df71f07a",measurementId:"G-6GVHSRWVNG"}),n1=DI(ym),r1=new OE,Fr={app:ym,auth:n1,google:r1};function i1(){const t={title:"",body:"",tools:Array(),difficulty:Qa.Beginner},[e,n]=k.useState(t),[r,i]=k.useState(""),[o,s]=k.useState(!1),[a,l]=k.useState(Array()),[u,c]=k.useState("");k.useEffect(()=>{s(!0),(async()=>{const g=await t0(r);l(await g.json()),s(!1)})()},[r]);const f=g=>{e.tools.includes(g)||n({...e,tools:[...e.tools,g]})},v=g=>{n({...e,tools:e.tools.splice(e.tools.indexOf(g),1)})},y=async()=>{if(!Fr.auth.currentUser)return;const g=await n0(u,await Fr.auth.currentUser.getIdToken());n({...e,tools:[...e.tools,await g.json()]}),c("")};return p.jsx("form",{children:p.jsxs("fieldset",{children:[p.jsx("legend",{children:"New Post"}),p.jsxs("label",{htmlFor:"title",children:["Title:",p.jsx("input",{type:"text",name:"title",id:"title",value:e.title,onChange:g=>n({...e,title:g.target.value})})]}),p.jsxs("label",{htmlFor:"message",children:["Message:",p.jsx("textarea",{name:"message",id:""})]}),p.jsxs("fieldset",{className:"difficulty-picker",children:[p.jsx("legend",{children:"Difficulty:"}),Object.keys(Qa).map(g=>p.jsxs(p.Fragment,{children:[p.jsx("input",{className:"difficulty-radio",type:"radio",name:"difficulty",id:`difficulty-${g}`}),p.jsx("label",{className:"for-difficulty",htmlFor:`difficulty-${g}`,children:g})]}))]}),p.jsxs("fieldset",{className:"tools-adder",children:[p.jsx("legend",{children:"Tools"}),p.jsx("label",{htmlFor:"searchTools",children:"Search Tools"}),p.jsx("input",{type:"search",list:"foundToolsList",name:"searchTools",id:"searchTools",value:r,onChange:g=>i(g.target.value)}),o&&p.jsx("p",{children:"Searching tools..."}),p.jsx("datalist",{id:"foundToolsList",children:a.map(g=>p.jsx("option",{value:g.name,onSelect:()=>f(g)}))}),p.jsxs("div",{className:"new-tool",children:[p.jsx("p",{children:"Can't find the tool you're looking for? Add a new tool."}),p.jsx("label",{htmlFor:"tool-name",children:"Name:"}),p.jsx("input",{type:"text",name:"tool",id:"tool-name",value:u,onChange:g=>c(g.target.value)}),p.jsx("input",{id:"add-tool",type:"button",value:"+",onClick:y})]}),p.jsx("div",{className:"tools-list",children:e.tools.map(g=>p.jsxs("div",{className:"tool",children:[p.jsx("p",{children:g.name}),p.jsx("input",{type:"button",value:"X",onClick:()=>v(g)})]}))})]}),p.jsxs("label",{htmlFor:"upload-file",children:["Upload Image:",p.jsx("input",{type:"file",name:"upload",id:"upload-file"})]}),p.jsx("input",{type:"submit",value:"Submit"})]})})}function ea(){return p.jsxs("div",{className:"comment",children:[p.jsx(Ht,{className:"comment-author",to:"/posts/username",children:"@username"}),p.jsx("input",{type:"button",value:"Edit"}),p.jsx("input",{type:"button",value:"Delete"}),p.jsx("p",{className:"comment-message",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ullam tempora aut sint dicta aliquam alias iste expedita. Rerum aut in ea doloribus dolor officiis explicabo soluta quam recusandae quos!"})]})}function fl(){return p.jsxs("div",{className:"post",children:[p.jsxs("div",{className:"post-head",children:[p.jsx("p",{children:"@username"}),p.jsx("p",{children:"Date:14/09/2023"}),p.jsx("p",{children:"Difficulty: Intermediate"}),p.jsx("p",{children:"Duration: 12 Days "})]}),p.jsx("h3",{className:"post-title",children:"Title"}),p.jsxs("div",{className:"post-tools",children:[p.jsx("p",{children:"JavaScript"}),p.jsx("p",{children:"React"}),p.jsx("p",{children:"Python"}),p.jsx("p",{children:"SQL"})]}),p.jsxs("div",{className:"post-contents",children:[p.jsx("div",{className:"image",children:p.jsx("img",{src:"",alt:""})}),p.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse repellat dignissimos nisi tenetur? Sapiente, optio consequuntur eos dolorum quae ad. Accusantium adipisci quo, perspiciatis alias mollitia iure consectetur distinctio recusandae!"}),p.jsxs("div",{className:"post-rating",children:[p.jsx("p",{children:"Rating: 0"}),p.jsx("p",{children:"UP"}),p.jsx("p",{children:"DOWN"})]})]}),p.jsxs("div",{className:"post-buttons",children:[p.jsx("input",{type:"button",value:"comment"}),p.jsx("input",{type:"button",value:"Update"}),p.jsx("input",{type:"button",value:"Delete"}),p.jsx("input",{type:"button",value:"Save"})]})]})}function o1(){const[t,e]=k.useState(!1);return p.jsxs("div",{className:"new-comment",children:[p.jsx("input",{type:"button",value:t?"Cancel":"New comment",onClick:()=>e(n=>!n)}),t&&p.jsx("form",{id:"new-comment-form",children:p.jsxs("fieldset",{children:[p.jsx("legend",{children:"New Comment"}),p.jsx("label",{htmlFor:"new-comment",children:"Comment Message:"}),p.jsx("textarea",{name:"new-comment",id:"new-comment"}),p.jsx("input",{type:"submit",value:"submit"})]})})]})}function s1(){return p.jsxs("div",{className:"comments",children:[p.jsx(fl,{}),p.jsx("h2",{children:"Comments"}),p.jsx(o1,{}),p.jsxs("div",{className:"comment-list",children:[p.jsx(ea,{}),p.jsx(ea,{}),p.jsx(ea,{})]})]})}function a1(){return p.jsx(p.Fragment,{children:p.jsx("form",{children:p.jsxs("fieldset",{children:[p.jsx("legend",{children:"Login"}),p.jsx("label",{htmlFor:"username",children:"Username:"}),p.jsx("input",{type:"text",name:"username",id:"username"}),p.jsx("label",{htmlFor:"password",children:"Password:"}),p.jsx("input",{type:"password",name:"password",id:"password"}),p.jsx("input",{type:"submit",value:"Submit"})]})})})}function l1({name:t,isChecked:e,handleChange:n}){return p.jsx(p.Fragment,{children:p.jsxs("label",{htmlFor:"nodejs",children:[t,":",p.jsx("input",{type:"checkbox",name:t,id:"inptut-check-"+t,checked:e,onChange:r=>n(r)})]})})}function u1(){const t=[{name:"javaScript",isChecked:!1},{name:"node",isChecked:!1}],[e,n]=k.useState({sort:"date",difficulty:"",tools:[...t]}),r=({target:s})=>{n(a=>({...a,[s.name]:s.value}))},i=()=>{n({sort:"date",difficulty:"",tools:[...e.tools.map(s=>({...s,isChecked:!1}))]})},o=({target:s})=>{n(a=>({...a,tools:[...a.tools.map(l=>l.name==s.name?{name:l.name,isChecked:s.checked}:l)]}))};return p.jsxs("div",{className:"view-options",children:[p.jsxs("label",{htmlFor:"sort",children:["Sort:",p.jsxs("select",{name:"sort",id:"sort-options",onChange:s=>r(s),children:[p.jsx("option",{value:"date",children:"Date"}),p.jsx("option",{value:"score",children:"Score"}),p.jsx("option",{value:"username",children:"Username"}),p.jsx("option",{value:"duration",children:"Duration"})]})]}),p.jsxs("label",{htmlFor:"difficulty",children:["Difficulty:",p.jsxs("select",{name:"difficulty",id:"difficulty-options",onChange:s=>r(s),children:[p.jsx("option",{value:"",children:"All"}),p.jsx("option",{value:"beginner",children:"Beginner"}),p.jsx("option",{value:"intermediate",children:"Intermediate"}),p.jsx("option",{value:"advanced",children:"Advanced"}),p.jsx("option",{value:"expert",children:"Expert"})]})]}),p.jsxs("div",{className:"tools-filter",children:[p.jsx("p",{children:"Tools"}),e.tools.map(s=>p.jsx(l1,{name:s.name,isChecked:s.isChecked,handleChange:o},s.name))]}),p.jsx("input",{type:"button",value:"Reset",onClick:()=>i()})]})}function c1(){return p.jsxs(p.Fragment,{children:[p.jsx(u1,{}),p.jsxs("div",{className:"posts",children:[p.jsx(fl,{}),p.jsx(fl,{})]})]})}const d1=async(t,e)=>{const n=await fetch("/api/user",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({idToken:e,username:t})});if(!n.ok)throw Error(n.statusText);return n};function f1(){const t={username:"",email:"",password:"",confirmPassword:""},[e,n]=k.useState(t),{dispatch:r}=k.useContext(fi),i=async o=>{if(o.preventDefault(),e.password!==e.confirmPassword){alert("Passwords must match.");return}if(await ww(Fr.auth,e.email,e.password),!Fr.auth.currentUser)throw"Firebase Auth failed to create user.";const s=await d1(e.username,await Fr.auth.currentUser.getIdToken());r({type:"SET_USER",payload:await s.json()}),n(t)};return p.jsx(p.Fragment,{children:p.jsx("form",{onSubmit:i,children:p.jsxs("fieldset",{children:[p.jsx("legend",{children:"Register"}),p.jsxs("label",{htmlFor:"email",children:["Email:",p.jsx("input",{type:"email",name:"email",id:"email",value:e.email,onChange:o=>n({...e,email:o.target.value})})]}),p.jsxs("label",{htmlFor:"username",children:["Username:",p.jsx("input",{type:"text",name:"username",id:"username",value:e.username,onChange:o=>n({...e,username:o.target.value})})]}),p.jsxs("label",{htmlFor:"password",children:["Password:",p.jsx("input",{type:"password",name:"password",id:"password",value:e.password,onChange:o=>n({...e,password:o.target.value})})]}),p.jsxs("label",{htmlFor:"confirm-password",children:["Confirm Password:",p.jsx("input",{type:"password",name:"confirm-password",id:"confirm-password",value:e.confirmPassword,onChange:o=>n({...e,confirmPassword:o.target.value})})]}),p.jsx("input",{type:"submit",value:"Submit"})]})})})}function h1(){return p.jsxs("div",{children:["User Settings",p.jsxs("ul",{children:[p.jsx("li",{children:"Delete Acc"}),p.jsx("li",{children:"Delete all saved posts"}),p.jsx("li",{children:"Maybe total upvotes & downvotes"}),p.jsx("li",{children:"change password"})]})]})}function p1(){const{state:t}=k.useContext(fi);return p.jsx(Hy,{children:p.jsxs(by,{children:[p.jsxs(tt,{path:"/",children:[p.jsx(e0,{}),p.jsx(tt,{path:"",element:p.jsx(c1,{})}),p.jsx(tt,{path:"new-post",element:p.jsx(i1,{})}),p.jsx(tt,{path:"comments",element:p.jsx(s1,{})}),p.jsx(tt,{path:"preferences",element:t.user?p.jsx(h1,{}):p.jsx(zs,{to:"/login"})})]}),p.jsx(tt,{path:"/login",element:t.user?p.jsx(zs,{to:"/"}):p.jsx(a1,{})}),p.jsx(tt,{path:"/register",element:t.user?p.jsx(zs,{to:"/"}):p.jsx(f1,{})}),p.jsx(tt,{path:"*",element:p.jsx("h1",{children:"Page Not Found"})})]})})}ta.createRoot(document.getElementById("root")).render(p.jsx(Qy,{children:p.jsx(p1,{})}));
