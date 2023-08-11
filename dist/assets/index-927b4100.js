function iI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Z_={exports:{}},iu={},ey={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),oI=Symbol.for("react.portal"),aI=Symbol.for("react.fragment"),lI=Symbol.for("react.strict_mode"),uI=Symbol.for("react.profiler"),cI=Symbol.for("react.provider"),hI=Symbol.for("react.context"),dI=Symbol.for("react.forward_ref"),fI=Symbol.for("react.suspense"),pI=Symbol.for("react.memo"),mI=Symbol.for("react.lazy"),om=Symbol.iterator;function gI(t){return t===null||typeof t!="object"?null:(t=om&&t[om]||t["@@iterator"],typeof t=="function"?t:null)}var ty={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ny=Object.assign,ry={};function qi(t,e,n){this.props=t,this.context=e,this.refs=ry,this.updater=n||ty}qi.prototype.isReactComponent={};qi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function iy(){}iy.prototype=qi.prototype;function bd(t,e,n){this.props=t,this.context=e,this.refs=ry,this.updater=n||ty}var $d=bd.prototype=new iy;$d.constructor=bd;ny($d,qi.prototype);$d.isPureReactComponent=!0;var am=Array.isArray,sy=Object.prototype.hasOwnProperty,jd={current:null},oy={key:!0,ref:!0,__self:!0,__source:!0};function ay(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sy.call(e,r)&&!oy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xo,type:t,key:s,ref:o,props:i,_owner:jd.current}}function _I(t,e){return{$$typeof:xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===xo}function yI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lm=/\/+/g;function cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yI(""+t.key):e.toString(36)}function $a(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xo:case oI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+cc(o,0):r,am(i)?(n="",t!=null&&(n=t.replace(lm,"$&/")+"/"),$a(i,e,n,"",function(u){return u})):i!=null&&(Bd(i)&&(i=_I(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",am(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+cc(s,a);o+=$a(s,e,n,l,i)}else if(l=gI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+cc(s,a++),o+=$a(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(t,e,n){if(t==null)return t;var r=[],i=0;return $a(t,r,"","",function(s){return e.call(n,s,i++)}),r}function vI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nt={current:null},ja={transition:null},EI={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:ja,ReactCurrentOwner:jd};q.Children={map:ca,forEach:function(t,e,n){ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ca(t,function(){e++}),e},toArray:function(t){return ca(t,function(e){return e})||[]},only:function(t){if(!Bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=qi;q.Fragment=aI;q.Profiler=uI;q.PureComponent=bd;q.StrictMode=lI;q.Suspense=fI;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EI;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ny({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)sy.call(e,l)&&!oy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:xo,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:hI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cI,_context:t},t.Consumer=t};q.createElement=ay;q.createFactory=function(t){var e=ay.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:dI,render:t}};q.isValidElement=Bd;q.lazy=function(t){return{$$typeof:mI,_payload:{_status:-1,_result:t},_init:vI}};q.memo=function(t,e){return{$$typeof:pI,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=ja.transition;ja.transition={};try{t()}finally{ja.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return nt.current.useCallback(t,e)};q.useContext=function(t){return nt.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return nt.current.useDeferredValue(t)};q.useEffect=function(t,e){return nt.current.useEffect(t,e)};q.useId=function(){return nt.current.useId()};q.useImperativeHandle=function(t,e,n){return nt.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return nt.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return nt.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return nt.current.useMemo(t,e)};q.useReducer=function(t,e,n){return nt.current.useReducer(t,e,n)};q.useRef=function(t){return nt.current.useRef(t)};q.useState=function(t){return nt.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return nt.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return nt.current.useTransition()};q.version="18.2.0";ey.exports=q;var I=ey.exports;const ly=sI(I),wI=iI({__proto__:null,default:ly},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TI=I,II=Symbol.for("react.element"),RI=Symbol.for("react.fragment"),SI=Object.prototype.hasOwnProperty,AI=TI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CI={key:!0,ref:!0,__self:!0,__source:!0};function uy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)SI.call(e,r)&&!CI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:II,type:t,key:s,ref:o,props:i,_owner:AI.current}}iu.Fragment=RI;iu.jsx=uy;iu.jsxs=uy;Z_.exports=iu;var T=Z_.exports,lh={},cy={exports:{}},vt={},hy={exports:{}},dy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,j){var z=D.length;D.push(j);e:for(;0<z;){var me=z-1>>>1,Se=D[me];if(0<i(Se,j))D[me]=j,D[z]=Se,z=me;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var j=D[0],z=D.pop();if(z!==j){D[0]=z;e:for(var me=0,Se=D.length,la=Se>>>1;me<la;){var hr=2*(me+1)-1,uc=D[hr],dr=hr+1,ua=D[dr];if(0>i(uc,z))dr<Se&&0>i(ua,uc)?(D[me]=ua,D[dr]=z,me=dr):(D[me]=uc,D[hr]=z,me=hr);else if(dr<Se&&0>i(ua,z))D[me]=ua,D[dr]=z,me=dr;else break e}}return j}function i(D,j){var z=D.sortIndex-j.sortIndex;return z!==0?z:D.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,_=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=D)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function v(D){if(y=!1,g(D),!_)if(n(l)!==null)_=!0,ac(A);else{var j=n(u);j!==null&&lc(v,j.startTime-D)}}function A(D,j){_=!1,y&&(y=!1,p(O),O=-1),m=!0;var z=d;try{for(g(j),h=n(l);h!==null&&(!(h.expirationTime>j)||D&&!Nt());){var me=h.callback;if(typeof me=="function"){h.callback=null,d=h.priorityLevel;var Se=me(h.expirationTime<=j);j=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&r(l),g(j)}else r(l);h=n(l)}if(h!==null)var la=!0;else{var hr=n(u);hr!==null&&lc(v,hr.startTime-j),la=!1}return la}finally{h=null,d=z,m=!1}}var C=!1,P=null,O=-1,Q=5,B=-1;function Nt(){return!(t.unstable_now()-B<Q)}function ls(){if(P!==null){var D=t.unstable_now();B=D;var j=!0;try{j=P(!0,D)}finally{j?us():(C=!1,P=null)}}else C=!1}var us;if(typeof f=="function")us=function(){f(ls)};else if(typeof MessageChannel<"u"){var sm=new MessageChannel,rI=sm.port2;sm.port1.onmessage=ls,us=function(){rI.postMessage(null)}}else us=function(){E(ls,0)};function ac(D){P=D,C||(C=!0,us())}function lc(D,j){O=E(function(){D(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,ac(A))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var z=d;d=j;try{return D()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=d;d=D;try{return j()}finally{d=z}},t.unstable_scheduleCallback=function(D,j,z){var me=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?me+z:me):z=me,D){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=z+Se,D={id:c++,callback:j,priorityLevel:D,startTime:z,expirationTime:Se,sortIndex:-1},z>me?(D.sortIndex=z,e(u,D),n(l)===null&&D===n(u)&&(y?(p(O),O=-1):y=!0,lc(v,z-me))):(D.sortIndex=Se,e(l,D),_||m||(_=!0,ac(A))),D},t.unstable_shouldYield=Nt,t.unstable_wrapCallback=function(D){var j=d;return function(){var z=d;d=j;try{return D.apply(this,arguments)}finally{d=z}}}})(dy);hy.exports=dy;var kI=hy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy=I,_t=kI;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var py=new Set,Qs={};function jr(t,e){ki(t,e),ki(t+"Capture",e)}function ki(t,e){for(Qs[t]=e,t=0;t<e.length;t++)py.add(e[t])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uh=Object.prototype.hasOwnProperty,PI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,um={},cm={};function NI(t){return uh.call(cm,t)?!0:uh.call(um,t)?!1:PI.test(t)?cm[t]=!0:(um[t]=!0,!1)}function xI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DI(t,e,n,r){if(e===null||typeof e>"u"||xI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ue[t]=new rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ue[e]=new rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ue[t]=new rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ue[t]=new rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ue[t]=new rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ue[t]=new rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ue[t]=new rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ue[t]=new rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ue[t]=new rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var zd=/[\-:]([a-z])/g;function Hd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zd,Hd);Ue[e]=new rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zd,Hd);Ue[e]=new rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zd,Hd);Ue[e]=new rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ue[t]=new rt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ue[t]=new rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function qd(t,e,n,r){var i=Ue.hasOwnProperty(e)?Ue[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DI(e,n,i,r)&&(n=null),r||i===null?NI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var In=fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),ti=Symbol.for("react.portal"),ni=Symbol.for("react.fragment"),Wd=Symbol.for("react.strict_mode"),ch=Symbol.for("react.profiler"),my=Symbol.for("react.provider"),gy=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),hh=Symbol.for("react.suspense"),dh=Symbol.for("react.suspense_list"),Gd=Symbol.for("react.memo"),An=Symbol.for("react.lazy"),_y=Symbol.for("react.offscreen"),hm=Symbol.iterator;function cs(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Object.assign,hc;function ws(t){if(hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hc=e&&e[1]||""}return`
`+hc+t}var dc=!1;function fc(t,e){if(!t||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ws(t):""}function OI(t){switch(t.tag){case 5:return ws(t.type);case 16:return ws("Lazy");case 13:return ws("Suspense");case 19:return ws("SuspenseList");case 0:case 2:case 15:return t=fc(t.type,!1),t;case 11:return t=fc(t.type.render,!1),t;case 1:return t=fc(t.type,!0),t;default:return""}}function fh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ni:return"Fragment";case ti:return"Portal";case ch:return"Profiler";case Wd:return"StrictMode";case hh:return"Suspense";case dh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gy:return(t.displayName||"Context")+".Consumer";case my:return(t._context.displayName||"Context")+".Provider";case Kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gd:return e=t.displayName||null,e!==null?e:fh(t.type)||"Memo";case An:e=t._payload,t=t._init;try{return fh(t(e))}catch{}}return null}function VI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fh(e);case 8:return e===Wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function LI(t){var e=yy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function da(t){t._valueTracker||(t._valueTracker=LI(t))}function vy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=yy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ph(t,e){var n=e.checked;return ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ey(t,e){e=e.checked,e!=null&&qd(t,"checked",e,!1)}function mh(t,e){Ey(t,e);var n=Yn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gh(t,e.type,n):e.hasOwnProperty("defaultValue")&&gh(t,e.type,Yn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gh(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ts=Array.isArray;function gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _h(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(Ts(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yn(n)}}function wy(t,e){var n=Yn(e.value),r=Yn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ty(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ty(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fa,Iy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fa=fa||document.createElement("div"),fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},MI=["Webkit","ms","Moz","O"];Object.keys(Os).forEach(function(t){MI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Os[e]=Os[t]})});function Ry(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Os.hasOwnProperty(t)&&Os[t]?(""+e).trim():e+"px"}function Sy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ry(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var UI=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vh(t,e){if(e){if(UI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Eh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wh=null;function Qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Th=null,_i=null,yi=null;function gm(t){if(t=Vo(t)){if(typeof Th!="function")throw Error(R(280));var e=t.stateNode;e&&(e=uu(e),Th(t.stateNode,t.type,e))}}function Ay(t){_i?yi?yi.push(t):yi=[t]:_i=t}function Cy(){if(_i){var t=_i,e=yi;if(yi=_i=null,gm(t),e)for(t=0;t<e.length;t++)gm(e[t])}}function ky(t,e){return t(e)}function Py(){}var pc=!1;function Ny(t,e,n){if(pc)return t(e,n);pc=!0;try{return ky(t,e,n)}finally{pc=!1,(_i!==null||yi!==null)&&(Py(),Cy())}}function Ys(t,e){var n=t.stateNode;if(n===null)return null;var r=uu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var Ih=!1;if(pn)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){Ih=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{Ih=!1}function FI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Vs=!1,al=null,ll=!1,Rh=null,bI={onError:function(t){Vs=!0,al=t}};function $I(t,e,n,r,i,s,o,a,l){Vs=!1,al=null,FI.apply(bI,arguments)}function jI(t,e,n,r,i,s,o,a,l){if($I.apply(this,arguments),Vs){if(Vs){var u=al;Vs=!1,al=null}else throw Error(R(198));ll||(ll=!0,Rh=u)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _m(t){if(Br(t)!==t)throw Error(R(188))}function BI(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _m(i),t;if(s===r)return _m(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function Dy(t){return t=BI(t),t!==null?Oy(t):null}function Oy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Oy(t);if(e!==null)return e;t=t.sibling}return null}var Vy=_t.unstable_scheduleCallback,ym=_t.unstable_cancelCallback,zI=_t.unstable_shouldYield,HI=_t.unstable_requestPaint,ge=_t.unstable_now,qI=_t.unstable_getCurrentPriorityLevel,Xd=_t.unstable_ImmediatePriority,Ly=_t.unstable_UserBlockingPriority,ul=_t.unstable_NormalPriority,WI=_t.unstable_LowPriority,My=_t.unstable_IdlePriority,su=null,Gt=null;function KI(t){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(su,t,void 0,(t.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:XI,GI=Math.log,QI=Math.LN2;function XI(t){return t>>>=0,t===0?32:31-(GI(t)/QI|0)|0}var pa=64,ma=4194304;function Is(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Is(a):(s&=o,s!==0&&(r=Is(s)))}else o=n&~i,o!==0?r=Is(o):s!==0&&(r=Is(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Lt(e),i=1<<n,r|=t[n],e&=~i;return r}function YI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Lt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=YI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Sh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Uy(){var t=pa;return pa<<=1,!(pa&4194240)&&(pa=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Do(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Lt(e),t[e]=n}function ZI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Lt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Yd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Lt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function Fy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var by,Jd,$y,jy,By,Ah=!1,ga=[],bn=null,$n=null,jn=null,Js=new Map,Zs=new Map,kn=[],e1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vm(t,e){switch(t){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":Js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(e.pointerId)}}function ds(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Vo(e),e!==null&&Jd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function t1(t,e,n,r,i){switch(e){case"focusin":return bn=ds(bn,t,e,n,r,i),!0;case"dragenter":return $n=ds($n,t,e,n,r,i),!0;case"mouseover":return jn=ds(jn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Js.set(s,ds(Js.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zs.set(s,ds(Zs.get(s)||null,t,e,n,r,i)),!0}return!1}function zy(t){var e=gr(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=xy(n),e!==null){t.blockedOn=e,By(t.priority,function(){$y(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ba(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ch(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wh=r,n.target.dispatchEvent(r),wh=null}else return e=Vo(n),e!==null&&Jd(e),t.blockedOn=n,!1;e.shift()}return!0}function Em(t,e,n){Ba(t)&&n.delete(e)}function n1(){Ah=!1,bn!==null&&Ba(bn)&&(bn=null),$n!==null&&Ba($n)&&($n=null),jn!==null&&Ba(jn)&&(jn=null),Js.forEach(Em),Zs.forEach(Em)}function fs(t,e){t.blockedOn===e&&(t.blockedOn=null,Ah||(Ah=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,n1)))}function eo(t){function e(i){return fs(i,t)}if(0<ga.length){fs(ga[0],t);for(var n=1;n<ga.length;n++){var r=ga[n];r.blockedOn===t&&(r.blockedOn=null)}}for(bn!==null&&fs(bn,t),$n!==null&&fs($n,t),jn!==null&&fs(jn,t),Js.forEach(e),Zs.forEach(e),n=0;n<kn.length;n++)r=kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)zy(n),n.blockedOn===null&&kn.shift()}var vi=In.ReactCurrentBatchConfig,hl=!0;function r1(t,e,n,r){var i=Y,s=vi.transition;vi.transition=null;try{Y=1,Zd(t,e,n,r)}finally{Y=i,vi.transition=s}}function i1(t,e,n,r){var i=Y,s=vi.transition;vi.transition=null;try{Y=4,Zd(t,e,n,r)}finally{Y=i,vi.transition=s}}function Zd(t,e,n,r){if(hl){var i=Ch(t,e,n,r);if(i===null)Sc(t,e,r,dl,n),vm(t,r);else if(t1(i,t,e,n,r))r.stopPropagation();else if(vm(t,r),e&4&&-1<e1.indexOf(t)){for(;i!==null;){var s=Vo(i);if(s!==null&&by(s),s=Ch(t,e,n,r),s===null&&Sc(t,e,r,dl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Sc(t,e,r,null,n)}}var dl=null;function Ch(t,e,n,r){if(dl=null,t=Qd(r),t=gr(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dl=t,null}function Hy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qI()){case Xd:return 1;case Ly:return 4;case ul:case WI:return 16;case My:return 536870912;default:return 16}default:return 16}}var Ln=null,ef=null,za=null;function qy(){if(za)return za;var t,e=ef,n=e.length,r,i="value"in Ln?Ln.value:Ln.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return za=i.slice(t,1<r?1-r:void 0)}function Ha(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _a(){return!0}function wm(){return!1}function Et(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_a:wm,this.isPropagationStopped=wm,this}return ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),e}var Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=Et(Wi),Oo=ce({},Wi,{view:0,detail:0}),s1=Et(Oo),gc,_c,ps,ou=ce({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ps&&(ps&&t.type==="mousemove"?(gc=t.screenX-ps.screenX,_c=t.screenY-ps.screenY):_c=gc=0,ps=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:_c}}),Tm=Et(ou),o1=ce({},ou,{dataTransfer:0}),a1=Et(o1),l1=ce({},Oo,{relatedTarget:0}),yc=Et(l1),u1=ce({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),c1=Et(u1),h1=ce({},Wi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),d1=Et(h1),f1=ce({},Wi,{data:0}),Im=Et(f1),p1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=g1[t])?!!e[t]:!1}function nf(){return _1}var y1=ce({},Oo,{key:function(t){if(t.key){var e=p1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?Ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v1=Et(y1),E1=ce({},ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rm=Et(E1),w1=ce({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),T1=Et(w1),I1=ce({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),R1=Et(I1),S1=ce({},ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),A1=Et(S1),C1=[9,13,27,32],rf=pn&&"CompositionEvent"in window,Ls=null;pn&&"documentMode"in document&&(Ls=document.documentMode);var k1=pn&&"TextEvent"in window&&!Ls,Wy=pn&&(!rf||Ls&&8<Ls&&11>=Ls),Sm=String.fromCharCode(32),Am=!1;function Ky(t,e){switch(t){case"keyup":return C1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ri=!1;function P1(t,e){switch(t){case"compositionend":return Gy(e);case"keypress":return e.which!==32?null:(Am=!0,Sm);case"textInput":return t=e.data,t===Sm&&Am?null:t;default:return null}}function N1(t,e){if(ri)return t==="compositionend"||!rf&&Ky(t,e)?(t=qy(),za=ef=Ln=null,ri=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wy&&e.locale!=="ko"?null:e.data;default:return null}}var x1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!x1[t.type]:e==="textarea"}function Qy(t,e,n,r){Ay(r),e=fl(e,"onChange"),0<e.length&&(n=new tf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ms=null,to=null;function D1(t){ov(t,0)}function au(t){var e=oi(t);if(vy(e))return t}function O1(t,e){if(t==="change")return e}var Xy=!1;if(pn){var vc;if(pn){var Ec="oninput"in document;if(!Ec){var km=document.createElement("div");km.setAttribute("oninput","return;"),Ec=typeof km.oninput=="function"}vc=Ec}else vc=!1;Xy=vc&&(!document.documentMode||9<document.documentMode)}function Pm(){Ms&&(Ms.detachEvent("onpropertychange",Yy),to=Ms=null)}function Yy(t){if(t.propertyName==="value"&&au(to)){var e=[];Qy(e,to,t,Qd(t)),Ny(D1,e)}}function V1(t,e,n){t==="focusin"?(Pm(),Ms=e,to=n,Ms.attachEvent("onpropertychange",Yy)):t==="focusout"&&Pm()}function L1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return au(to)}function M1(t,e){if(t==="click")return au(e)}function U1(t,e){if(t==="input"||t==="change")return au(e)}function F1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ut=typeof Object.is=="function"?Object.is:F1;function no(t,e){if(Ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uh.call(e,i)||!Ut(t[i],e[i]))return!1}return!0}function Nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xm(t,e){var n=Nm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nm(n)}}function Jy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zy(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function b1(t){var e=Zy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jy(n.ownerDocument.documentElement,n)){if(r!==null&&sf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=xm(n,s);var o=xm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $1=pn&&"documentMode"in document&&11>=document.documentMode,ii=null,kh=null,Us=null,Ph=!1;function Dm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ph||ii==null||ii!==ol(r)||(r=ii,"selectionStart"in r&&sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Us&&no(Us,r)||(Us=r,r=fl(kh,"onSelect"),0<r.length&&(e=new tf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ii)))}function ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var si={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},wc={},ev={};pn&&(ev=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function lu(t){if(wc[t])return wc[t];if(!si[t])return t;var e=si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ev)return wc[t]=e[n];return t}var tv=lu("animationend"),nv=lu("animationiteration"),rv=lu("animationstart"),iv=lu("transitionend"),sv=new Map,Om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){sv.set(t,e),jr(e,[t])}for(var Tc=0;Tc<Om.length;Tc++){var Ic=Om[Tc],j1=Ic.toLowerCase(),B1=Ic[0].toUpperCase()+Ic.slice(1);rr(j1,"on"+B1)}rr(tv,"onAnimationEnd");rr(nv,"onAnimationIteration");rr(rv,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(iv,"onTransitionEnd");ki("onMouseEnter",["mouseout","mouseover"]);ki("onMouseLeave",["mouseout","mouseover"]);ki("onPointerEnter",["pointerout","pointerover"]);ki("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rs));function Vm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,jI(r,e,void 0,t),t.currentTarget=null}function ov(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Vm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Vm(i,a,u),s=l}}}if(ll)throw t=Rh,ll=!1,Rh=null,t}function ee(t,e){var n=e[Vh];n===void 0&&(n=e[Vh]=new Set);var r=t+"__bubble";n.has(r)||(av(e,t,2,!1),n.add(r))}function Rc(t,e,n){var r=0;e&&(r|=4),av(n,t,r,e)}var va="_reactListening"+Math.random().toString(36).slice(2);function ro(t){if(!t[va]){t[va]=!0,py.forEach(function(n){n!=="selectionchange"&&(z1.has(n)||Rc(n,!1,t),Rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[va]||(e[va]=!0,Rc("selectionchange",!1,e))}}function av(t,e,n,r){switch(Hy(e)){case 1:var i=r1;break;case 4:i=i1;break;default:i=Zd}n=i.bind(null,e,n,t),i=void 0,!Ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Sc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=gr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ny(function(){var u=s,c=Qd(n),h=[];e:{var d=sv.get(t);if(d!==void 0){var m=tf,_=t;switch(t){case"keypress":if(Ha(n)===0)break e;case"keydown":case"keyup":m=v1;break;case"focusin":_="focus",m=yc;break;case"focusout":_="blur",m=yc;break;case"beforeblur":case"afterblur":m=yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=a1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=T1;break;case tv:case nv:case rv:m=c1;break;case iv:m=R1;break;case"scroll":m=s1;break;case"wheel":m=A1;break;case"copy":case"cut":case"paste":m=d1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Rm}var y=(e&4)!==0,E=!y&&t==="scroll",p=y?d!==null?d+"Capture":null:d;y=[];for(var f=u,g;f!==null;){g=f;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,p!==null&&(v=Ys(f,p),v!=null&&y.push(io(f,v,g)))),E)break;f=f.return}0<y.length&&(d=new m(d,_,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==wh&&(_=n.relatedTarget||n.fromElement)&&(gr(_)||_[mn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?gr(_):null,_!==null&&(E=Br(_),_!==E||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(y=Tm,v="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Rm,v="onPointerLeave",p="onPointerEnter",f="pointer"),E=m==null?d:oi(m),g=_==null?d:oi(_),d=new y(v,f+"leave",m,n,c),d.target=E,d.relatedTarget=g,v=null,gr(c)===u&&(y=new y(p,f+"enter",_,n,c),y.target=g,y.relatedTarget=E,v=y),E=v,m&&_)t:{for(y=m,p=_,f=0,g=y;g;g=Qr(g))f++;for(g=0,v=p;v;v=Qr(v))g++;for(;0<f-g;)y=Qr(y),f--;for(;0<g-f;)p=Qr(p),g--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=Qr(y),p=Qr(p)}y=null}else y=null;m!==null&&Lm(h,d,m,y,!1),_!==null&&E!==null&&Lm(h,E,_,y,!0)}}e:{if(d=u?oi(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var A=O1;else if(Cm(d))if(Xy)A=U1;else{A=L1;var C=V1}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=M1);if(A&&(A=A(t,u))){Qy(h,A,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&gh(d,"number",d.value)}switch(C=u?oi(u):window,t){case"focusin":(Cm(C)||C.contentEditable==="true")&&(ii=C,kh=u,Us=null);break;case"focusout":Us=kh=ii=null;break;case"mousedown":Ph=!0;break;case"contextmenu":case"mouseup":case"dragend":Ph=!1,Dm(h,n,c);break;case"selectionchange":if($1)break;case"keydown":case"keyup":Dm(h,n,c)}var P;if(rf)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ri?Ky(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Wy&&n.locale!=="ko"&&(ri||O!=="onCompositionStart"?O==="onCompositionEnd"&&ri&&(P=qy()):(Ln=c,ef="value"in Ln?Ln.value:Ln.textContent,ri=!0)),C=fl(u,O),0<C.length&&(O=new Im(O,t,null,n,c),h.push({event:O,listeners:C}),P?O.data=P:(P=Gy(n),P!==null&&(O.data=P)))),(P=k1?P1(t,n):N1(t,n))&&(u=fl(u,"onBeforeInput"),0<u.length&&(c=new Im("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=P))}ov(h,e)})}function io(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ys(t,n),s!=null&&r.unshift(io(t,s,i)),s=Ys(t,e),s!=null&&r.push(io(t,s,i))),t=t.return}return r}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ys(n,s),l!=null&&o.unshift(io(n,l,a))):i||(l=Ys(n,s),l!=null&&o.push(io(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var H1=/\r\n?/g,q1=/\u0000|\uFFFD/g;function Mm(t){return(typeof t=="string"?t:""+t).replace(H1,`
`).replace(q1,"")}function Ea(t,e,n){if(e=Mm(e),Mm(t)!==e&&n)throw Error(R(425))}function pl(){}var Nh=null,xh=null;function Dh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oh=typeof setTimeout=="function"?setTimeout:void 0,W1=typeof clearTimeout=="function"?clearTimeout:void 0,Um=typeof Promise=="function"?Promise:void 0,K1=typeof queueMicrotask=="function"?queueMicrotask:typeof Um<"u"?function(t){return Um.resolve(null).then(t).catch(G1)}:Oh;function G1(t){setTimeout(function(){throw t})}function Ac(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),eo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);eo(e)}function Bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ki=Math.random().toString(36).slice(2),zt="__reactFiber$"+Ki,so="__reactProps$"+Ki,mn="__reactContainer$"+Ki,Vh="__reactEvents$"+Ki,Q1="__reactListeners$"+Ki,X1="__reactHandles$"+Ki;function gr(t){var e=t[zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mn]||n[zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fm(t);t!==null;){if(n=t[zt])return n;t=Fm(t)}return e}t=n,n=t.parentNode}return null}function Vo(t){return t=t[zt]||t[mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function uu(t){return t[so]||null}var Lh=[],ai=-1;function ir(t){return{current:t}}function re(t){0>ai||(t.current=Lh[ai],Lh[ai]=null,ai--)}function Z(t,e){ai++,Lh[ai]=t.current,t.current=e}var Jn={},Qe=ir(Jn),lt=ir(!1),Cr=Jn;function Pi(t,e){var n=t.type.contextTypes;if(!n)return Jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ut(t){return t=t.childContextTypes,t!=null}function ml(){re(lt),re(Qe)}function bm(t,e,n){if(Qe.current!==Jn)throw Error(R(168));Z(Qe,e),Z(lt,n)}function lv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,VI(t)||"Unknown",i));return ce({},n,r)}function gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jn,Cr=Qe.current,Z(Qe,t),Z(lt,lt.current),!0}function $m(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=lv(t,e,Cr),r.__reactInternalMemoizedMergedChildContext=t,re(lt),re(Qe),Z(Qe,t)):re(lt),Z(lt,n)}var sn=null,cu=!1,Cc=!1;function uv(t){sn===null?sn=[t]:sn.push(t)}function Y1(t){cu=!0,uv(t)}function sr(){if(!Cc&&sn!==null){Cc=!0;var t=0,e=Y;try{var n=sn;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sn=null,cu=!1}catch(i){throw sn!==null&&(sn=sn.slice(t+1)),Vy(Xd,sr),i}finally{Y=e,Cc=!1}}return null}var li=[],ui=0,_l=null,yl=0,wt=[],Tt=0,kr=null,on=1,an="";function fr(t,e){li[ui++]=yl,li[ui++]=_l,_l=t,yl=e}function cv(t,e,n){wt[Tt++]=on,wt[Tt++]=an,wt[Tt++]=kr,kr=t;var r=on;t=an;var i=32-Lt(r)-1;r&=~(1<<i),n+=1;var s=32-Lt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,on=1<<32-Lt(e)+i|n<<i|r,an=s+t}else on=1<<s|n<<i|r,an=t}function of(t){t.return!==null&&(fr(t,1),cv(t,1,0))}function af(t){for(;t===_l;)_l=li[--ui],li[ui]=null,yl=li[--ui],li[ui]=null;for(;t===kr;)kr=wt[--Tt],wt[Tt]=null,an=wt[--Tt],wt[Tt]=null,on=wt[--Tt],wt[Tt]=null}var gt=null,ft=null,oe=!1,Vt=null;function hv(t,e){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gt=t,ft=Bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gt=t,ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:on,overflow:an}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gt=t,ft=null,!0):!1;default:return!1}}function Mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uh(t){if(oe){var e=ft;if(e){var n=e;if(!jm(t,e)){if(Mh(t))throw Error(R(418));e=Bn(n.nextSibling);var r=gt;e&&jm(t,e)?hv(r,n):(t.flags=t.flags&-4097|2,oe=!1,gt=t)}}else{if(Mh(t))throw Error(R(418));t.flags=t.flags&-4097|2,oe=!1,gt=t}}}function Bm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gt=t}function wa(t){if(t!==gt)return!1;if(!oe)return Bm(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Dh(t.type,t.memoizedProps)),e&&(e=ft)){if(Mh(t))throw dv(),Error(R(418));for(;e;)hv(t,e),e=Bn(e.nextSibling)}if(Bm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ft=Bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ft=null}}else ft=gt?Bn(t.stateNode.nextSibling):null;return!0}function dv(){for(var t=ft;t;)t=Bn(t.nextSibling)}function Ni(){ft=gt=null,oe=!1}function lf(t){Vt===null?Vt=[t]:Vt.push(t)}var J1=In.ReactCurrentBatchConfig;function Dt(t,e){if(t&&t.defaultProps){e=ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var vl=ir(null),El=null,ci=null,uf=null;function cf(){uf=ci=El=null}function hf(t){var e=vl.current;re(vl),t._currentValue=e}function Fh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ei(t,e){El=t,uf=ci=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(at=!0),t.firstContext=null)}function kt(t){var e=t._currentValue;if(uf!==t)if(t={context:t,memoizedValue:e,next:null},ci===null){if(El===null)throw Error(R(308));ci=t,El.dependencies={lanes:0,firstContext:t}}else ci=ci.next=t;return e}var _r=null;function df(t){_r===null?_r=[t]:_r.push(t)}function fv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,df(e)):(n.next=i.next,i.next=n),e.interleaved=n,gn(t,r)}function gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cn=!1;function ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,gn(t,n)}return i=r.interleaved,i===null?(e.next=e,df(r)):(e.next=i.next,i.next=e),r.interleaved=e,gn(t,n)}function qa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yd(t,n)}}function zm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wl(t,e,n,r){var i=t.updateQueue;Cn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(m,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(m,h,d):_,d==null)break e;h=ce({},h,d);break e;case 2:Cn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Nr|=o,t.lanes=o,t.memoizedState=h}}function Hm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var mv=new fy.Component().refs;function bh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hu={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=tt(),i=qn(t),s=hn(r,i);s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Mt(e,t,i,r),qa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=tt(),i=qn(t),s=hn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Mt(e,t,i,r),qa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tt(),r=qn(t),i=hn(n,r);i.tag=2,e!=null&&(i.callback=e),e=zn(t,i,r),e!==null&&(Mt(e,t,r,n),qa(e,t,r))}};function qm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!no(n,r)||!no(i,s):!0}function gv(t,e,n){var r=!1,i=Jn,s=e.contextType;return typeof s=="object"&&s!==null?s=kt(s):(i=ut(e)?Cr:Qe.current,r=e.contextTypes,s=(r=r!=null)?Pi(t,i):Jn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hu.enqueueReplaceState(e,e.state,null)}function $h(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=mv,ff(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=kt(s):(s=ut(e)?Cr:Qe.current,i.context=Pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hu.enqueueReplaceState(i,i.state,null),wl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===mv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function Ta(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Km(t){var e=t._init;return e(t._payload)}function _v(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Wn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,v){return f===null||f.tag!==6?(f=Vc(g,p.mode,v),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,v){var A=g.type;return A===ni?c(p,f,g.props.children,v,g.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===An&&Km(A)===f.type)?(v=i(f,g.props),v.ref=ms(p,f,g),v.return=p,v):(v=Ya(g.type,g.key,g.props,null,p.mode,v),v.ref=ms(p,f,g),v.return=p,v)}function u(p,f,g,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Lc(g,p.mode,v),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,v,A){return f===null||f.tag!==7?(f=Ir(g,p.mode,v,A),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Vc(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ha:return g=Ya(f.type,f.key,f.props,null,p.mode,g),g.ref=ms(p,null,f),g.return=p,g;case ti:return f=Lc(f,p.mode,g),f.return=p,f;case An:var v=f._init;return h(p,v(f._payload),g)}if(Ts(f)||cs(f))return f=Ir(f,p.mode,g,null),f.return=p,f;Ta(p,f)}return null}function d(p,f,g,v){var A=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:a(p,f,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ha:return g.key===A?l(p,f,g,v):null;case ti:return g.key===A?u(p,f,g,v):null;case An:return A=g._init,d(p,f,A(g._payload),v)}if(Ts(g)||cs(g))return A!==null?null:c(p,f,g,v,null);Ta(p,g)}return null}function m(p,f,g,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(g)||null,a(f,p,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ha:return p=p.get(v.key===null?g:v.key)||null,l(f,p,v,A);case ti:return p=p.get(v.key===null?g:v.key)||null,u(f,p,v,A);case An:var C=v._init;return m(p,f,g,C(v._payload),A)}if(Ts(v)||cs(v))return p=p.get(g)||null,c(f,p,v,A,null);Ta(f,v)}return null}function _(p,f,g,v){for(var A=null,C=null,P=f,O=f=0,Q=null;P!==null&&O<g.length;O++){P.index>O?(Q=P,P=null):Q=P.sibling;var B=d(p,P,g[O],v);if(B===null){P===null&&(P=Q);break}t&&P&&B.alternate===null&&e(p,P),f=s(B,f,O),C===null?A=B:C.sibling=B,C=B,P=Q}if(O===g.length)return n(p,P),oe&&fr(p,O),A;if(P===null){for(;O<g.length;O++)P=h(p,g[O],v),P!==null&&(f=s(P,f,O),C===null?A=P:C.sibling=P,C=P);return oe&&fr(p,O),A}for(P=r(p,P);O<g.length;O++)Q=m(P,p,O,g[O],v),Q!==null&&(t&&Q.alternate!==null&&P.delete(Q.key===null?O:Q.key),f=s(Q,f,O),C===null?A=Q:C.sibling=Q,C=Q);return t&&P.forEach(function(Nt){return e(p,Nt)}),oe&&fr(p,O),A}function y(p,f,g,v){var A=cs(g);if(typeof A!="function")throw Error(R(150));if(g=A.call(g),g==null)throw Error(R(151));for(var C=A=null,P=f,O=f=0,Q=null,B=g.next();P!==null&&!B.done;O++,B=g.next()){P.index>O?(Q=P,P=null):Q=P.sibling;var Nt=d(p,P,B.value,v);if(Nt===null){P===null&&(P=Q);break}t&&P&&Nt.alternate===null&&e(p,P),f=s(Nt,f,O),C===null?A=Nt:C.sibling=Nt,C=Nt,P=Q}if(B.done)return n(p,P),oe&&fr(p,O),A;if(P===null){for(;!B.done;O++,B=g.next())B=h(p,B.value,v),B!==null&&(f=s(B,f,O),C===null?A=B:C.sibling=B,C=B);return oe&&fr(p,O),A}for(P=r(p,P);!B.done;O++,B=g.next())B=m(P,p,O,B.value,v),B!==null&&(t&&B.alternate!==null&&P.delete(B.key===null?O:B.key),f=s(B,f,O),C===null?A=B:C.sibling=B,C=B);return t&&P.forEach(function(ls){return e(p,ls)}),oe&&fr(p,O),A}function E(p,f,g,v){if(typeof g=="object"&&g!==null&&g.type===ni&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ha:e:{for(var A=g.key,C=f;C!==null;){if(C.key===A){if(A=g.type,A===ni){if(C.tag===7){n(p,C.sibling),f=i(C,g.props.children),f.return=p,p=f;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===An&&Km(A)===C.type){n(p,C.sibling),f=i(C,g.props),f.ref=ms(p,C,g),f.return=p,p=f;break e}n(p,C);break}else e(p,C);C=C.sibling}g.type===ni?(f=Ir(g.props.children,p.mode,v,g.key),f.return=p,p=f):(v=Ya(g.type,g.key,g.props,null,p.mode,v),v.ref=ms(p,f,g),v.return=p,p=v)}return o(p);case ti:e:{for(C=g.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Lc(g,p.mode,v),f.return=p,p=f}return o(p);case An:return C=g._init,E(p,f,C(g._payload),v)}if(Ts(g))return _(p,f,g,v);if(cs(g))return y(p,f,g,v);Ta(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Vc(g,p.mode,v),f.return=p,p=f),o(p)):n(p,f)}return E}var xi=_v(!0),yv=_v(!1),Lo={},Qt=ir(Lo),oo=ir(Lo),ao=ir(Lo);function yr(t){if(t===Lo)throw Error(R(174));return t}function pf(t,e){switch(Z(ao,e),Z(oo,t),Z(Qt,Lo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yh(e,t)}re(Qt),Z(Qt,e)}function Di(){re(Qt),re(oo),re(ao)}function vv(t){yr(ao.current);var e=yr(Qt.current),n=yh(e,t.type);e!==n&&(Z(oo,t),Z(Qt,n))}function mf(t){oo.current===t&&(re(Qt),re(oo))}var le=ir(0);function Tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kc=[];function gf(){for(var t=0;t<kc.length;t++)kc[t]._workInProgressVersionPrimary=null;kc.length=0}var Wa=In.ReactCurrentDispatcher,Pc=In.ReactCurrentBatchConfig,Pr=0,ue=null,Ie=null,Ce=null,Il=!1,Fs=!1,lo=0,Z1=0;function Fe(){throw Error(R(321))}function _f(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ut(t[n],e[n]))return!1;return!0}function yf(t,e,n,r,i,s){if(Pr=s,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wa.current=t===null||t.memoizedState===null?rR:iR,t=n(r,i),Fs){s=0;do{if(Fs=!1,lo=0,25<=s)throw Error(R(301));s+=1,Ce=Ie=null,e.updateQueue=null,Wa.current=sR,t=n(r,i)}while(Fs)}if(Wa.current=Rl,e=Ie!==null&&Ie.next!==null,Pr=0,Ce=Ie=ue=null,Il=!1,e)throw Error(R(300));return t}function vf(){var t=lo!==0;return lo=0,t}function Bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ue.memoizedState=Ce=t:Ce=Ce.next=t,Ce}function Pt(){if(Ie===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=Ce===null?ue.memoizedState:Ce.next;if(e!==null)Ce=e,Ie=t;else{if(t===null)throw Error(R(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Ce===null?ue.memoizedState=Ce=t:Ce=Ce.next=t}return Ce}function uo(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=Pt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Pr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ue.lanes|=c,Nr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ut(r,e.memoizedState)||(at=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ue.lanes|=s,Nr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xc(t){var e=Pt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ut(s,e.memoizedState)||(at=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ev(){}function wv(t,e){var n=ue,r=Pt(),i=e(),s=!Ut(r.memoizedState,i);if(s&&(r.memoizedState=i,at=!0),r=r.queue,Ef(Rv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,co(9,Iv.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(R(349));Pr&30||Tv(n,e,i)}return i}function Tv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Iv(t,e,n,r){e.value=n,e.getSnapshot=r,Sv(e)&&Av(t)}function Rv(t,e,n){return n(function(){Sv(e)&&Av(t)})}function Sv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ut(t,n)}catch{return!0}}function Av(t){var e=gn(t,1);e!==null&&Mt(e,t,1,-1)}function Gm(t){var e=Bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:t},e.queue=t,t=t.dispatch=nR.bind(null,ue,t),[e.memoizedState,t]}function co(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Cv(){return Pt().memoizedState}function Ka(t,e,n,r){var i=Bt();ue.flags|=t,i.memoizedState=co(1|e,n,void 0,r===void 0?null:r)}function du(t,e,n,r){var i=Pt();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&_f(r,o.deps)){i.memoizedState=co(e,n,s,r);return}}ue.flags|=t,i.memoizedState=co(1|e,n,s,r)}function Qm(t,e){return Ka(8390656,8,t,e)}function Ef(t,e){return du(2048,8,t,e)}function kv(t,e){return du(4,2,t,e)}function Pv(t,e){return du(4,4,t,e)}function Nv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xv(t,e,n){return n=n!=null?n.concat([t]):null,du(4,4,Nv.bind(null,e,t),n)}function wf(){}function Dv(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_f(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ov(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_f(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Vv(t,e,n){return Pr&21?(Ut(n,e)||(n=Uy(),ue.lanes|=n,Nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,at=!0),t.memoizedState=n)}function eR(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=Pc.transition;Pc.transition={};try{t(!1),e()}finally{Y=n,Pc.transition=r}}function Lv(){return Pt().memoizedState}function tR(t,e,n){var r=qn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mv(t))Uv(e,n);else if(n=fv(t,e,n,r),n!==null){var i=tt();Mt(n,t,r,i),Fv(n,e,r)}}function nR(t,e,n){var r=qn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mv(t))Uv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ut(a,o)){var l=e.interleaved;l===null?(i.next=i,df(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=fv(t,e,i,r),n!==null&&(i=tt(),Mt(n,t,r,i),Fv(n,e,r))}}function Mv(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function Uv(t,e){Fs=Il=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yd(t,n)}}var Rl={readContext:kt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},rR={readContext:kt,useCallback:function(t,e){return Bt().memoizedState=[t,e===void 0?null:e],t},useContext:kt,useEffect:Qm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ka(4194308,4,Nv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ka(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ka(4,2,t,e)},useMemo:function(t,e){var n=Bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tR.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var e=Bt();return t={current:t},e.memoizedState=t},useState:Gm,useDebugValue:wf,useDeferredValue:function(t){return Bt().memoizedState=t},useTransition:function(){var t=Gm(!1),e=t[0];return t=eR.bind(null,t[1]),Bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ue,i=Bt();if(oe){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),ke===null)throw Error(R(349));Pr&30||Tv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Qm(Rv.bind(null,r,s,t),[t]),r.flags|=2048,co(9,Iv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Bt(),e=ke.identifierPrefix;if(oe){var n=an,r=on;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Z1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iR={readContext:kt,useCallback:Dv,useContext:kt,useEffect:Ef,useImperativeHandle:xv,useInsertionEffect:kv,useLayoutEffect:Pv,useMemo:Ov,useReducer:Nc,useRef:Cv,useState:function(){return Nc(uo)},useDebugValue:wf,useDeferredValue:function(t){var e=Pt();return Vv(e,Ie.memoizedState,t)},useTransition:function(){var t=Nc(uo)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:Ev,useSyncExternalStore:wv,useId:Lv,unstable_isNewReconciler:!1},sR={readContext:kt,useCallback:Dv,useContext:kt,useEffect:Ef,useImperativeHandle:xv,useInsertionEffect:kv,useLayoutEffect:Pv,useMemo:Ov,useReducer:xc,useRef:Cv,useState:function(){return xc(uo)},useDebugValue:wf,useDeferredValue:function(t){var e=Pt();return Ie===null?e.memoizedState=t:Vv(e,Ie.memoizedState,t)},useTransition:function(){var t=xc(uo)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:Ev,useSyncExternalStore:wv,useId:Lv,unstable_isNewReconciler:!1};function Oi(t,e){try{var n="",r=e;do n+=OI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var oR=typeof WeakMap=="function"?WeakMap:Map;function bv(t,e,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Al||(Al=!0,Yh=r),jh(t,e)},n}function $v(t,e,n){n=hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){jh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jh(t,e),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new oR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ER.bind(null,t,e,n),e.then(t,t))}function Ym(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hn(-1,1),e.tag=2,zn(n,e,1))),n.lanes|=1),t)}var aR=In.ReactCurrentOwner,at=!1;function Ze(t,e,n,r){e.child=t===null?yv(e,null,n,r):xi(e,t.child,n,r)}function Zm(t,e,n,r,i){n=n.render;var s=e.ref;return Ei(e,i),r=yf(t,e,n,r,s,i),n=vf(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_n(t,e,i)):(oe&&n&&of(e),e.flags|=1,Ze(t,e,r,i),e.child)}function eg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,jv(t,e,s,r,i)):(t=Ya(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:no,n(o,r)&&t.ref===e.ref)return _n(t,e,i)}return e.flags|=1,t=Wn(s,r),t.ref=e.ref,t.return=e,e.child=t}function jv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(no(s,r)&&t.ref===e.ref)if(at=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(at=!0);else return e.lanes=t.lanes,_n(t,e,i)}return Bh(t,e,n,r,i)}function Bv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(di,ht),ht|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(di,ht),ht|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(di,ht),ht|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(di,ht),ht|=r;return Ze(t,e,i,n),e.child}function zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bh(t,e,n,r,i){var s=ut(n)?Cr:Qe.current;return s=Pi(e,s),Ei(e,i),n=yf(t,e,n,r,s,i),r=vf(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_n(t,e,i)):(oe&&r&&of(e),e.flags|=1,Ze(t,e,n,i),e.child)}function tg(t,e,n,r,i){if(ut(n)){var s=!0;gl(e)}else s=!1;if(Ei(e,i),e.stateNode===null)Ga(t,e),gv(e,n,r),$h(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=kt(u):(u=ut(n)?Cr:Qe.current,u=Pi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Wm(e,o,r,u),Cn=!1;var d=e.memoizedState;o.state=d,wl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||lt.current||Cn?(typeof c=="function"&&(bh(e,n,c,r),l=e.memoizedState),(a=Cn||qm(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,pv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Dt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kt(l):(l=ut(n)?Cr:Qe.current,l=Pi(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Wm(e,o,r,l),Cn=!1,d=e.memoizedState,o.state=d,wl(e,r,o,i);var _=e.memoizedState;a!==h||d!==_||lt.current||Cn?(typeof m=="function"&&(bh(e,n,m,r),_=e.memoizedState),(u=Cn||qm(e,n,u,r,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return zh(t,e,n,r,s,i)}function zh(t,e,n,r,i,s){zv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$m(e,n,!1),_n(t,e,s);r=e.stateNode,aR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xi(e,t.child,null,s),e.child=xi(e,null,a,s)):Ze(t,e,a,s),e.memoizedState=r.state,i&&$m(e,n,!0),e.child}function Hv(t){var e=t.stateNode;e.pendingContext?bm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bm(t,e.context,!1),pf(t,e.containerInfo)}function ng(t,e,n,r,i){return Ni(),lf(i),e.flags|=256,Ze(t,e,n,r),e.child}var Hh={dehydrated:null,treeContext:null,retryLane:0};function qh(t){return{baseLanes:t,cachePool:null,transitions:null}}function qv(t,e,n){var r=e.pendingProps,i=le.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(le,i&1),t===null)return Uh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mu(o,r,0,null),t=Ir(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qh(n),e.memoizedState=Hh,t):Tf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return lR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Wn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wn(a,s):(s=Ir(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?qh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Hh,r}return s=t.child,t=s.sibling,r=Wn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Tf(t,e){return e=mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ia(t,e,n,r){return r!==null&&lf(r),xi(e,t.child,null,n),t=Tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Dc(Error(R(422))),Ia(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=mu({mode:"visible",children:r.children},i,0,null),s=Ir(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&xi(e,t.child,null,o),e.child.memoizedState=qh(o),e.memoizedState=Hh,s);if(!(e.mode&1))return Ia(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=Dc(s,r,void 0),Ia(t,e,o,r)}if(a=(o&t.childLanes)!==0,at||a){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,gn(t,i),Mt(r,t,i,-1))}return kf(),r=Dc(Error(R(421))),Ia(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=wR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ft=Bn(i.nextSibling),gt=e,oe=!0,Vt=null,t!==null&&(wt[Tt++]=on,wt[Tt++]=an,wt[Tt++]=kr,on=t.id,an=t.overflow,kr=e),e=Tf(e,r.children),e.flags|=4096,e)}function rg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fh(t.return,e,n)}function Oc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Wv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ze(t,e,r.children,n),r=le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rg(t,n,e);else if(t.tag===19)rg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(le,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Tl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Oc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Tl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Oc(e,!0,n,null,s);break;case"together":Oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ga(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=Wn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uR(t,e,n){switch(e.tag){case 3:Hv(e),Ni();break;case 5:vv(e);break;case 1:ut(e.type)&&gl(e);break;case 4:pf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(vl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(le,le.current&1),e.flags|=128,null):n&e.child.childLanes?qv(t,e,n):(Z(le,le.current&1),t=_n(t,e,n),t!==null?t.sibling:null);Z(le,le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Wv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(le,le.current),r)break;return null;case 22:case 23:return e.lanes=0,Bv(t,e,n)}return _n(t,e,n)}var Kv,Wh,Gv,Qv;Kv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wh=function(){};Gv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,yr(Qt.current);var s=null;switch(n){case"input":i=ph(t,i),r=ph(t,r),s=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),s=[];break;case"textarea":i=_h(t,i),r=_h(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pl)}vh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Qv=function(t,e,n,r){n!==r&&(e.flags|=4)};function gs(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function be(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function cR(t,e,n){var r=e.pendingProps;switch(af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(e),null;case 1:return ut(e.type)&&ml(),be(e),null;case 3:return r=e.stateNode,Di(),re(lt),re(Qe),gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vt!==null&&(ed(Vt),Vt=null))),Wh(t,e),be(e),null;case 5:mf(e);var i=yr(ao.current);if(n=e.type,t!==null&&e.stateNode!=null)Gv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return be(e),null}if(t=yr(Qt.current),wa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[zt]=e,r[so]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Rs.length;i++)ee(Rs[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":dm(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":pm(r,s),ee("invalid",r)}vh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ea(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ea(r.textContent,a,t),i=["children",""+a]):Qs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":da(r),fm(r,s,!0);break;case"textarea":da(r),mm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ty(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[zt]=e,t[so]=r,Kv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Eh(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Rs.length;i++)ee(Rs[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":dm(t,r),i=ph(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),ee("invalid",t);break;case"textarea":pm(t,r),i=_h(t,r),ee("invalid",t);break;default:i=r}vh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Iy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xs(t,l):typeof l=="number"&&Xs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&qd(t,s,l,o))}switch(n){case"input":da(t),fm(t,r,!1);break;case"textarea":da(t),mm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?gi(t,!!r.multiple,s,!1):r.defaultValue!=null&&gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=pl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return be(e),null;case 6:if(t&&e.stateNode!=null)Qv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=yr(ao.current),yr(Qt.current),wa(e)){if(r=e.stateNode,n=e.memoizedProps,r[zt]=e,(s=r.nodeValue!==n)&&(t=gt,t!==null))switch(t.tag){case 3:Ea(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ea(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=e,e.stateNode=r}return be(e),null;case 13:if(re(le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&ft!==null&&e.mode&1&&!(e.flags&128))dv(),Ni(),e.flags|=98560,s=!1;else if(s=wa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[zt]=e}else Ni(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;be(e),s=!1}else Vt!==null&&(ed(Vt),Vt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||le.current&1?Re===0&&(Re=3):kf())),e.updateQueue!==null&&(e.flags|=4),be(e),null);case 4:return Di(),Wh(t,e),t===null&&ro(e.stateNode.containerInfo),be(e),null;case 10:return hf(e.type._context),be(e),null;case 17:return ut(e.type)&&ml(),be(e),null;case 19:if(re(le),s=e.memoizedState,s===null)return be(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)gs(s,!1);else{if(Re!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tl(t),o!==null){for(e.flags|=128,gs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(le,le.current&1|2),e.child}t=t.sibling}s.tail!==null&&ge()>Vi&&(e.flags|=128,r=!0,gs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Tl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return be(e),null}else 2*ge()-s.renderingStartTime>Vi&&n!==1073741824&&(e.flags|=128,r=!0,gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ge(),e.sibling=null,n=le.current,Z(le,r?n&1|2:n&1),e):(be(e),null);case 22:case 23:return Cf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ht&1073741824&&(be(e),e.subtreeFlags&6&&(e.flags|=8192)):be(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function hR(t,e){switch(af(e),e.tag){case 1:return ut(e.type)&&ml(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Di(),re(lt),re(Qe),gf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mf(e),null;case 13:if(re(le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));Ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(le),null;case 4:return Di(),null;case 10:return hf(e.type._context),null;case 22:case 23:return Cf(),null;case 24:return null;default:return null}}var Ra=!1,Be=!1,dR=typeof WeakSet=="function"?WeakSet:Set,x=null;function hi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(t,e,r)}else n.current=null}function Kh(t,e,n){try{n()}catch(r){fe(t,e,r)}}var ig=!1;function fR(t,e){if(Nh=hl,t=Zy(),sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xh={focusedElem:t,selectionRange:n},hl=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,E=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:Dt(e.type,y),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(v){fe(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return _=ig,ig=!1,_}function bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kh(e,n,s)}i=i.next}while(i!==r)}}function fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xv(t){var e=t.alternate;e!==null&&(t.alternate=null,Xv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zt],delete e[so],delete e[Vh],delete e[Q1],delete e[X1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yv(t){return t.tag===5||t.tag===3||t.tag===4}function sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pl));else if(r!==4&&(t=t.child,t!==null))for(Qh(t,e,n),t=t.sibling;t!==null;)Qh(t,e,n),t=t.sibling}function Xh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xh(t,e,n),t=t.sibling;t!==null;)Xh(t,e,n),t=t.sibling}var De=null,Ot=!1;function Rn(t,e,n){for(n=n.child;n!==null;)Jv(t,e,n),n=n.sibling}function Jv(t,e,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(su,n)}catch{}switch(n.tag){case 5:Be||hi(n,e);case 6:var r=De,i=Ot;De=null,Rn(t,e,n),De=r,Ot=i,De!==null&&(Ot?(t=De,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(Ot?(t=De,n=n.stateNode,t.nodeType===8?Ac(t.parentNode,n):t.nodeType===1&&Ac(t,n),eo(t)):Ac(De,n.stateNode));break;case 4:r=De,i=Ot,De=n.stateNode.containerInfo,Ot=!0,Rn(t,e,n),De=r,Ot=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kh(n,e,o),i=i.next}while(i!==r)}Rn(t,e,n);break;case 1:if(!Be&&(hi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,e,a)}Rn(t,e,n);break;case 21:Rn(t,e,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,Rn(t,e,n),Be=r):Rn(t,e,n);break;default:Rn(t,e,n)}}function og(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dR),e.forEach(function(r){var i=TR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:De=a.stateNode,Ot=!1;break e;case 3:De=a.stateNode.containerInfo,Ot=!0;break e;case 4:De=a.stateNode.containerInfo,Ot=!0;break e}a=a.return}if(De===null)throw Error(R(160));Jv(s,o,i),De=null,Ot=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){fe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zv(e,t),e=e.sibling}function Zv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xt(e,t),jt(t),r&4){try{bs(3,t,t.return),fu(3,t)}catch(y){fe(t,t.return,y)}try{bs(5,t,t.return)}catch(y){fe(t,t.return,y)}}break;case 1:xt(e,t),jt(t),r&512&&n!==null&&hi(n,n.return);break;case 5:if(xt(e,t),jt(t),r&512&&n!==null&&hi(n,n.return),t.flags&32){var i=t.stateNode;try{Xs(i,"")}catch(y){fe(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ey(i,s),Eh(a,o);var u=Eh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Sy(i,h):c==="dangerouslySetInnerHTML"?Iy(i,h):c==="children"?Xs(i,h):qd(i,c,h,u)}switch(a){case"input":mh(i,s);break;case"textarea":wy(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?gi(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?gi(i,!!s.multiple,s.defaultValue,!0):gi(i,!!s.multiple,s.multiple?[]:"",!1))}i[so]=s}catch(y){fe(t,t.return,y)}}break;case 6:if(xt(e,t),jt(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){fe(t,t.return,y)}}break;case 3:if(xt(e,t),jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{eo(e.containerInfo)}catch(y){fe(t,t.return,y)}break;case 4:xt(e,t),jt(t);break;case 13:xt(e,t),jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Sf=ge())),r&4&&og(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Be=(u=Be)||c,xt(e,t),Be=u):xt(e,t),jt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(x=t,c=t.child;c!==null;){for(h=x=c;x!==null;){switch(d=x,m=d.child,d.tag){case 0:case 11:case 14:case 15:bs(4,d,d.return);break;case 1:hi(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){fe(r,n,y)}}break;case 5:hi(d,d.return);break;case 22:if(d.memoizedState!==null){lg(h);continue}}m!==null?(m.return=d,x=m):lg(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ry("display",o))}catch(y){fe(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){fe(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:xt(e,t),jt(t),r&4&&og(t);break;case 21:break;default:xt(e,t),jt(t)}}function jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Yv(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xs(i,""),r.flags&=-33);var s=sg(t);Xh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=sg(t);Qh(t,a,o);break;default:throw Error(R(161))}}catch(l){fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pR(t,e,n){x=t,e0(t)}function e0(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ra;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Be;a=Ra;var u=Be;if(Ra=o,(Be=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?ug(i):l!==null?(l.return=o,x=l):ug(i);for(;s!==null;)x=s,e0(s),s=s.sibling;x=i,Ra=a,Be=u}ag(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):ag(t)}}function ag(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Be||fu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Dt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&eo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Be||e.flags&512&&Gh(e)}catch(d){fe(e,e.return,d)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function lg(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function ug(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fu(4,e)}catch(l){fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){fe(e,i,l)}}var s=e.return;try{Gh(e)}catch(l){fe(e,s,l)}break;case 5:var o=e.return;try{Gh(e)}catch(l){fe(e,o,l)}}}catch(l){fe(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var mR=Math.ceil,Sl=In.ReactCurrentDispatcher,If=In.ReactCurrentOwner,At=In.ReactCurrentBatchConfig,K=0,ke=null,we=null,Le=0,ht=0,di=ir(0),Re=0,ho=null,Nr=0,pu=0,Rf=0,$s=null,st=null,Sf=0,Vi=1/0,rn=null,Al=!1,Yh=null,Hn=null,Sa=!1,Mn=null,Cl=0,js=0,Jh=null,Qa=-1,Xa=0;function tt(){return K&6?ge():Qa!==-1?Qa:Qa=ge()}function qn(t){return t.mode&1?K&2&&Le!==0?Le&-Le:J1.transition!==null?(Xa===0&&(Xa=Uy()),Xa):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Hy(t.type)),t):1}function Mt(t,e,n,r){if(50<js)throw js=0,Jh=null,Error(R(185));Do(t,n,r),(!(K&2)||t!==ke)&&(t===ke&&(!(K&2)&&(pu|=n),Re===4&&Pn(t,Le)),ct(t,r),n===1&&K===0&&!(e.mode&1)&&(Vi=ge()+500,cu&&sr()))}function ct(t,e){var n=t.callbackNode;JI(t,e);var r=cl(t,t===ke?Le:0);if(r===0)n!==null&&ym(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ym(n),e===1)t.tag===0?Y1(cg.bind(null,t)):uv(cg.bind(null,t)),K1(function(){!(K&6)&&sr()}),n=null;else{switch(Fy(r)){case 1:n=Xd;break;case 4:n=Ly;break;case 16:n=ul;break;case 536870912:n=My;break;default:n=ul}n=l0(n,t0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function t0(t,e){if(Qa=-1,Xa=0,K&6)throw Error(R(327));var n=t.callbackNode;if(wi()&&t.callbackNode!==n)return null;var r=cl(t,t===ke?Le:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=kl(t,r);else{e=r;var i=K;K|=2;var s=r0();(ke!==t||Le!==e)&&(rn=null,Vi=ge()+500,Tr(t,e));do try{yR();break}catch(a){n0(t,a)}while(1);cf(),Sl.current=s,K=i,we!==null?e=0:(ke=null,Le=0,e=Re)}if(e!==0){if(e===2&&(i=Sh(t),i!==0&&(r=i,e=Zh(t,i))),e===1)throw n=ho,Tr(t,0),Pn(t,r),ct(t,ge()),n;if(e===6)Pn(t,r);else{if(i=t.current.alternate,!(r&30)&&!gR(i)&&(e=kl(t,r),e===2&&(s=Sh(t),s!==0&&(r=s,e=Zh(t,s))),e===1))throw n=ho,Tr(t,0),Pn(t,r),ct(t,ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:pr(t,st,rn);break;case 3:if(Pn(t,r),(r&130023424)===r&&(e=Sf+500-ge(),10<e)){if(cl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Oh(pr.bind(null,t,st,rn),e);break}pr(t,st,rn);break;case 4:if(Pn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Lt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mR(r/1960))-r,10<r){t.timeoutHandle=Oh(pr.bind(null,t,st,rn),r);break}pr(t,st,rn);break;case 5:pr(t,st,rn);break;default:throw Error(R(329))}}}return ct(t,ge()),t.callbackNode===n?t0.bind(null,t):null}function Zh(t,e){var n=$s;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=kl(t,e),t!==2&&(e=st,st=n,e!==null&&ed(e)),t}function ed(t){st===null?st=t:st.push.apply(st,t)}function gR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ut(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pn(t,e){for(e&=~Rf,e&=~pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Lt(e),r=1<<n;t[n]=-1,e&=~r}}function cg(t){if(K&6)throw Error(R(327));wi();var e=cl(t,0);if(!(e&1))return ct(t,ge()),null;var n=kl(t,e);if(t.tag!==0&&n===2){var r=Sh(t);r!==0&&(e=r,n=Zh(t,r))}if(n===1)throw n=ho,Tr(t,0),Pn(t,e),ct(t,ge()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,st,rn),ct(t,ge()),null}function Af(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(Vi=ge()+500,cu&&sr())}}function xr(t){Mn!==null&&Mn.tag===0&&!(K&6)&&wi();var e=K;K|=1;var n=At.transition,r=Y;try{if(At.transition=null,Y=1,t)return t()}finally{Y=r,At.transition=n,K=e,!(K&6)&&sr()}}function Cf(){ht=di.current,re(di)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,W1(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(af(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ml();break;case 3:Di(),re(lt),re(Qe),gf();break;case 5:mf(r);break;case 4:Di();break;case 13:re(le);break;case 19:re(le);break;case 10:hf(r.type._context);break;case 22:case 23:Cf()}n=n.return}if(ke=t,we=t=Wn(t.current,null),Le=ht=e,Re=0,ho=null,Rf=pu=Nr=0,st=$s=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}_r=null}return t}function n0(t,e){do{var n=we;try{if(cf(),Wa.current=Rl,Il){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Il=!1}if(Pr=0,Ce=Ie=ue=null,Fs=!1,lo=0,If.current=null,n===null||n.return===null){Re=1,ho=e,we=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Le,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Ym(o);if(m!==null){m.flags&=-257,Jm(m,o,a,s,e),m.mode&1&&Xm(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Xm(s,u,e),kf();break e}l=Error(R(426))}}else if(oe&&a.mode&1){var E=Ym(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Jm(E,o,a,s,e),lf(Oi(l,a));break e}}s=l=Oi(l,a),Re!==4&&(Re=2),$s===null?$s=[s]:$s.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=bv(s,l,e);zm(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Hn===null||!Hn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=$v(s,a,e);zm(s,v);break e}}s=s.return}while(s!==null)}s0(n)}catch(A){e=A,we===n&&n!==null&&(we=n=n.return);continue}break}while(1)}function r0(){var t=Sl.current;return Sl.current=Rl,t===null?Rl:t}function kf(){(Re===0||Re===3||Re===2)&&(Re=4),ke===null||!(Nr&268435455)&&!(pu&268435455)||Pn(ke,Le)}function kl(t,e){var n=K;K|=2;var r=r0();(ke!==t||Le!==e)&&(rn=null,Tr(t,e));do try{_R();break}catch(i){n0(t,i)}while(1);if(cf(),K=n,Sl.current=r,we!==null)throw Error(R(261));return ke=null,Le=0,Re}function _R(){for(;we!==null;)i0(we)}function yR(){for(;we!==null&&!zI();)i0(we)}function i0(t){var e=a0(t.alternate,t,ht);t.memoizedProps=t.pendingProps,e===null?s0(t):we=e,If.current=null}function s0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hR(n,e),n!==null){n.flags&=32767,we=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Re=6,we=null;return}}else if(n=cR(n,e,ht),n!==null){we=n;return}if(e=e.sibling,e!==null){we=e;return}we=e=t}while(e!==null);Re===0&&(Re=5)}function pr(t,e,n){var r=Y,i=At.transition;try{At.transition=null,Y=1,vR(t,e,n,r)}finally{At.transition=i,Y=r}return null}function vR(t,e,n,r){do wi();while(Mn!==null);if(K&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ZI(t,s),t===ke&&(we=ke=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sa||(Sa=!0,l0(ul,function(){return wi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=At.transition,At.transition=null;var o=Y;Y=1;var a=K;K|=4,If.current=null,fR(t,n),Zv(n,t),b1(xh),hl=!!Nh,xh=Nh=null,t.current=n,pR(n),HI(),K=a,Y=o,At.transition=s}else t.current=n;if(Sa&&(Sa=!1,Mn=t,Cl=i),s=t.pendingLanes,s===0&&(Hn=null),KI(n.stateNode),ct(t,ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Al)throw Al=!1,t=Yh,Yh=null,t;return Cl&1&&t.tag!==0&&wi(),s=t.pendingLanes,s&1?t===Jh?js++:(js=0,Jh=t):js=0,sr(),null}function wi(){if(Mn!==null){var t=Fy(Cl),e=At.transition,n=Y;try{if(At.transition=null,Y=16>t?16:t,Mn===null)var r=!1;else{if(t=Mn,Mn=null,Cl=0,K&6)throw Error(R(331));var i=K;for(K|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:bs(8,c,s)}var h=c.child;if(h!==null)h.return=c,x=h;else for(;x!==null;){c=x;var d=c.sibling,m=c.return;if(Xv(c),c===u){x=null;break}if(d!==null){d.return=m,x=d;break}x=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,x=p;break e}x=s.return}}var f=t.current;for(x=f;x!==null;){o=x;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,x=g;else e:for(o=f;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fu(9,a)}}catch(A){fe(a,a.return,A)}if(a===o){x=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,x=v;break e}x=a.return}}if(K=i,sr(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(su,t)}catch{}r=!0}return r}finally{Y=n,At.transition=e}}return!1}function hg(t,e,n){e=Oi(n,e),e=bv(t,e,1),t=zn(t,e,1),e=tt(),t!==null&&(Do(t,1,e),ct(t,e))}function fe(t,e,n){if(t.tag===3)hg(t,t,n);else for(;e!==null;){if(e.tag===3){hg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){t=Oi(n,t),t=$v(e,t,1),e=zn(e,t,1),t=tt(),e!==null&&(Do(e,1,t),ct(e,t));break}}e=e.return}}function ER(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=tt(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(Le&n)===n&&(Re===4||Re===3&&(Le&130023424)===Le&&500>ge()-Sf?Tr(t,0):Rf|=n),ct(t,e)}function o0(t,e){e===0&&(t.mode&1?(e=ma,ma<<=1,!(ma&130023424)&&(ma=4194304)):e=1);var n=tt();t=gn(t,e),t!==null&&(Do(t,e,n),ct(t,n))}function wR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),o0(t,n)}function TR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),o0(t,n)}var a0;a0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||lt.current)at=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return at=!1,uR(t,e,n);at=!!(t.flags&131072)}else at=!1,oe&&e.flags&1048576&&cv(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ga(t,e),t=e.pendingProps;var i=Pi(e,Qe.current);Ei(e,n),i=yf(null,e,r,t,i,n);var s=vf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ut(r)?(s=!0,gl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ff(e),i.updater=hu,e.stateNode=i,i._reactInternals=e,$h(e,r,t,n),e=zh(null,e,r,!0,s,n)):(e.tag=0,oe&&s&&of(e),Ze(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ga(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=RR(r),t=Dt(r,t),i){case 0:e=Bh(null,e,r,t,n);break e;case 1:e=tg(null,e,r,t,n);break e;case 11:e=Zm(null,e,r,t,n);break e;case 14:e=eg(null,e,r,Dt(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),Bh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),tg(t,e,r,i,n);case 3:e:{if(Hv(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,pv(t,e),wl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Oi(Error(R(423)),e),e=ng(t,e,r,n,i);break e}else if(r!==i){i=Oi(Error(R(424)),e),e=ng(t,e,r,n,i);break e}else for(ft=Bn(e.stateNode.containerInfo.firstChild),gt=e,oe=!0,Vt=null,n=yv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ni(),r===i){e=_n(t,e,n);break e}Ze(t,e,r,n)}e=e.child}return e;case 5:return vv(e),t===null&&Uh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Dh(r,i)?o=null:s!==null&&Dh(r,s)&&(e.flags|=32),zv(t,e),Ze(t,e,o,n),e.child;case 6:return t===null&&Uh(e),null;case 13:return qv(t,e,n);case 4:return pf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xi(e,null,r,n):Ze(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),Zm(t,e,r,i,n);case 7:return Ze(t,e,e.pendingProps,n),e.child;case 8:return Ze(t,e,e.pendingProps.children,n),e.child;case 12:return Ze(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(vl,r._currentValue),r._currentValue=o,s!==null)if(Ut(s.value,o)){if(s.children===i.children&&!lt.current){e=_n(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=hn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ze(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ei(e,n),i=kt(i),r=r(i),e.flags|=1,Ze(t,e,r,n),e.child;case 14:return r=e.type,i=Dt(r,e.pendingProps),i=Dt(r.type,i),eg(t,e,r,i,n);case 15:return jv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),Ga(t,e),e.tag=1,ut(r)?(t=!0,gl(e)):t=!1,Ei(e,n),gv(e,r,i),$h(e,r,i,n),zh(null,e,r,!0,t,n);case 19:return Wv(t,e,n);case 22:return Bv(t,e,n)}throw Error(R(156,e.tag))};function l0(t,e){return Vy(t,e)}function IR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,e,n,r){return new IR(t,e,n,r)}function Pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function RR(t){if(typeof t=="function")return Pf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kd)return 11;if(t===Gd)return 14}return 2}function Wn(t,e){var n=t.alternate;return n===null?(n=Rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ya(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ni:return Ir(n.children,i,s,e);case Wd:o=8,i|=8;break;case ch:return t=Rt(12,n,e,i|2),t.elementType=ch,t.lanes=s,t;case hh:return t=Rt(13,n,e,i),t.elementType=hh,t.lanes=s,t;case dh:return t=Rt(19,n,e,i),t.elementType=dh,t.lanes=s,t;case _y:return mu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case my:o=10;break e;case gy:o=9;break e;case Kd:o=11;break e;case Gd:o=14;break e;case An:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Rt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ir(t,e,n,r){return t=Rt(7,t,r,e),t.lanes=n,t}function mu(t,e,n,r){return t=Rt(22,t,r,e),t.elementType=_y,t.lanes=n,t.stateNode={isHidden:!1},t}function Vc(t,e,n){return t=Rt(6,t,null,e),t.lanes=n,t}function Lc(t,e,n){return e=Rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nf(t,e,n,r,i,s,o,a,l){return t=new SR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ff(s),t}function AR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ti,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function u0(t){if(!t)return Jn;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(ut(n))return lv(t,n,e)}return e}function c0(t,e,n,r,i,s,o,a,l){return t=Nf(n,r,!0,t,i,s,o,a,l),t.context=u0(null),n=t.current,r=tt(),i=qn(n),s=hn(r,i),s.callback=e??null,zn(n,s,i),t.current.lanes=i,Do(t,i,r),ct(t,r),t}function gu(t,e,n,r){var i=e.current,s=tt(),o=qn(i);return n=u0(n),e.context===null?e.context=n:e.pendingContext=n,e=hn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zn(i,e,o),t!==null&&(Mt(t,i,o,s),qa(t,i,o)),o}function Pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xf(t,e){dg(t,e),(t=t.alternate)&&dg(t,e)}function CR(){return null}var h0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Df(t){this._internalRoot=t}_u.prototype.render=Df.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));gu(t,e,null,null)};_u.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xr(function(){gu(null,t,null,null)}),e[mn]=null}};function _u(t){this._internalRoot=t}_u.prototype.unstable_scheduleHydration=function(t){if(t){var e=jy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<kn.length&&e!==0&&e<kn[n].priority;n++);kn.splice(n,0,t),n===0&&zy(t)}};function Of(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fg(){}function kR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Pl(o);s.call(u)}}var o=c0(e,r,t,0,null,!1,!1,"",fg);return t._reactRootContainer=o,t[mn]=o.current,ro(t.nodeType===8?t.parentNode:t),xr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Pl(l);a.call(u)}}var l=Nf(t,0,!1,null,null,!1,!1,"",fg);return t._reactRootContainer=l,t[mn]=l.current,ro(t.nodeType===8?t.parentNode:t),xr(function(){gu(e,l,n,r)}),l}function vu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Pl(o);a.call(l)}}gu(e,o,t,i)}else o=kR(n,e,t,i,r);return Pl(o)}by=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Is(e.pendingLanes);n!==0&&(Yd(e,n|1),ct(e,ge()),!(K&6)&&(Vi=ge()+500,sr()))}break;case 13:xr(function(){var r=gn(t,1);if(r!==null){var i=tt();Mt(r,t,1,i)}}),xf(t,1)}};Jd=function(t){if(t.tag===13){var e=gn(t,134217728);if(e!==null){var n=tt();Mt(e,t,134217728,n)}xf(t,134217728)}};$y=function(t){if(t.tag===13){var e=qn(t),n=gn(t,e);if(n!==null){var r=tt();Mt(n,t,e,r)}xf(t,e)}};jy=function(){return Y};By=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};Th=function(t,e,n){switch(e){case"input":if(mh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=uu(r);if(!i)throw Error(R(90));vy(r),mh(r,i)}}}break;case"textarea":wy(t,n);break;case"select":e=n.value,e!=null&&gi(t,!!n.multiple,e,!1)}};ky=Af;Py=xr;var PR={usingClientEntryPoint:!1,Events:[Vo,oi,uu,Ay,Cy,Af]},_s={findFiberByHostInstance:gr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},NR={bundleType:_s.bundleType,version:_s.version,rendererPackageName:_s.rendererPackageName,rendererConfig:_s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dy(t),t===null?null:t.stateNode},findFiberByHostInstance:_s.findFiberByHostInstance||CR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Aa.isDisabled&&Aa.supportsFiber)try{su=Aa.inject(NR),Gt=Aa}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PR;vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Of(e))throw Error(R(200));return AR(t,e,null,n)};vt.createRoot=function(t,e){if(!Of(t))throw Error(R(299));var n=!1,r="",i=h0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Nf(t,1,!1,null,null,n,!1,r,i),t[mn]=e.current,ro(t.nodeType===8?t.parentNode:t),new Df(e)};vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=Dy(e),t=t===null?null:t.stateNode,t};vt.flushSync=function(t){return xr(t)};vt.hydrate=function(t,e,n){if(!yu(e))throw Error(R(200));return vu(null,t,e,!0,n)};vt.hydrateRoot=function(t,e,n){if(!Of(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=h0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=c0(e,null,t,1,n??null,i,!1,s,o),t[mn]=e.current,ro(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _u(e)};vt.render=function(t,e,n){if(!yu(e))throw Error(R(200));return vu(null,t,e,!1,n)};vt.unmountComponentAtNode=function(t){if(!yu(t))throw Error(R(40));return t._reactRootContainer?(xr(function(){vu(null,null,t,!1,function(){t._reactRootContainer=null,t[mn]=null})}),!0):!1};vt.unstable_batchedUpdates=Af;vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yu(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return vu(t,e,n,!1,r)};vt.version="18.2.0-next-9e3b772b8-20220608";function d0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d0)}catch(t){console.error(t)}}d0(),cy.exports=vt;var xR=cy.exports,pg=xR;lh.createRoot=pg.createRoot,lh.hydrateRoot=pg.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fo(){return fo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fo.apply(this,arguments)}var Un;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Un||(Un={}));const mg="popstate";function DR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return td("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Nl(i)}return VR(e,n,null,t)}function _e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Vf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function OR(){return Math.random().toString(36).substr(2,8)}function gg(t,e){return{usr:t.state,key:t.key,idx:e}}function td(t,e,n,r){return n===void 0&&(n=null),fo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gi(e):e,{state:n,key:e&&e.key||r||OR()})}function Nl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function VR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Un.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(fo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Un.Pop;let E=c(),p=E==null?null:E-u;u=E,l&&l({action:a,location:y.location,delta:p})}function d(E,p){a=Un.Push;let f=td(y.location,E,p);n&&n(f,E),u=c()+1;let g=gg(f,u),v=y.createHref(f);try{o.pushState(g,"",v)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(v)}s&&l&&l({action:a,location:y.location,delta:1})}function m(E,p){a=Un.Replace;let f=td(y.location,E,p);n&&n(f,E),u=c();let g=gg(f,u),v=y.createHref(f);o.replaceState(g,"",v),s&&l&&l({action:a,location:y.location,delta:0})}function _(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:Nl(E);return _e(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let y={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(mg,h),l=E,()=>{i.removeEventListener(mg,h),l=null}},createHref(E){return e(i,E)},createURL:_,encodeLocation(E){let p=_(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(E){return o.go(E)}};return y}var _g;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_g||(_g={}));function LR(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Gi(e):e,i=Lf(r.pathname||"/",n);if(i==null)return null;let s=f0(t);MR(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=qR(s[a],GR(i));return o}function f0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(_e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Kn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(_e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),f0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:zR(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of p0(s.path))i(s,o,l)}),e}function p0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=p0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function MR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:HR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const UR=/^:\w+$/,FR=3,bR=2,$R=1,jR=10,BR=-2,yg=t=>t==="*";function zR(t,e){let n=t.split("/"),r=n.length;return n.some(yg)&&(r+=BR),e&&(r+=bR),n.filter(i=>!yg(i)).reduce((i,s)=>i+(UR.test(s)?FR:s===""?$R:jR),r)}function HR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function qR(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=WR({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Kn([i,c.pathname]),pathnameBase:JR(Kn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Kn([i,c.pathnameBase]))}return s}function WR(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=KR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=QR(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function KR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Vf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function GR(t){try{return decodeURI(t)}catch(e){return Vf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function QR(t,e){try{return decodeURIComponent(t)}catch(n){return Vf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Lf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function XR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Gi(t):t;return{pathname:n?n.startsWith("/")?n:YR(n,e):e,search:ZR(r),hash:eS(i)}}function YR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Mc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mf(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Uf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Gi(t):(i=fo({},t),_e(!i.pathname||!i.pathname.includes("?"),Mc("?","pathname","search",i)),_e(!i.pathname||!i.pathname.includes("#"),Mc("#","pathname","hash",i)),_e(!i.search||!i.search.includes("#"),Mc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=XR(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kn=t=>t.join("/").replace(/\/\/+/g,"/"),JR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ZR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,eS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function tS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const m0=["post","put","patch","delete"];new Set(m0);const nS=["get",...m0];new Set(nS);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xl.apply(this,arguments)}const Ff=I.createContext(null),rS=I.createContext(null),Qi=I.createContext(null),Eu=I.createContext(null),or=I.createContext({outlet:null,matches:[],isDataRoute:!1}),g0=I.createContext(null);function iS(t,e){let{relative:n}=e===void 0?{}:e;Xi()||_e(!1);let{basename:r,navigator:i}=I.useContext(Qi),{hash:s,pathname:o,search:a}=y0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Kn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Xi(){return I.useContext(Eu)!=null}function Mo(){return Xi()||_e(!1),I.useContext(Eu).location}function _0(t){I.useContext(Qi).static||I.useLayoutEffect(t)}function wu(){let{isDataRoute:t}=I.useContext(or);return t?_S():sS()}function sS(){Xi()||_e(!1);let t=I.useContext(Ff),{basename:e,navigator:n}=I.useContext(Qi),{matches:r}=I.useContext(or),{pathname:i}=Mo(),s=JSON.stringify(Mf(r).map(l=>l.pathnameBase)),o=I.useRef(!1);return _0(()=>{o.current=!0}),I.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Uf(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Kn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function y0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(or),{pathname:i}=Mo(),s=JSON.stringify(Mf(r).map(o=>o.pathnameBase));return I.useMemo(()=>Uf(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function oS(t,e){return aS(t,e)}function aS(t,e,n){Xi()||_e(!1);let{navigator:r}=I.useContext(Qi),{matches:i}=I.useContext(or),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Mo(),u;if(e){var c;let y=typeof e=="string"?Gi(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||_e(!1),u=y}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=LR(t,{pathname:d}),_=dS(m&&m.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Kn([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Kn([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&_?I.createElement(Eu.Provider,{value:{location:xl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Un.Pop}},_):_}function lS(){let t=gS(),e=tS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const uS=I.createElement(lS,null);class cS extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(or.Provider,{value:this.props.routeContext},I.createElement(g0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hS(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(Ff);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(or.Provider,{value:e},r)}function dS(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||_e(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||uS);let d=e.concat(s.slice(0,u+1)),m=()=>{let _;return c?_=h:l.route.Component?_=I.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,I.createElement(hS,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?I.createElement(cS,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var v0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(v0||{}),Dl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Dl||{});function fS(t){let e=I.useContext(Ff);return e||_e(!1),e}function pS(t){let e=I.useContext(rS);return e||_e(!1),e}function mS(t){let e=I.useContext(or);return e||_e(!1),e}function E0(t){let e=mS(),n=e.matches[e.matches.length-1];return n.route.id||_e(!1),n.route.id}function gS(){var t;let e=I.useContext(g0),n=pS(Dl.UseRouteError),r=E0(Dl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function _S(){let{router:t}=fS(v0.UseNavigateStable),e=E0(Dl.UseNavigateStable),n=I.useRef(!1);return _0(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,xl({fromRouteId:e},s)))},[t,e])}function yS(t){let{to:e,replace:n,state:r,relative:i}=t;Xi()||_e(!1);let{matches:s}=I.useContext(or),{pathname:o}=Mo(),a=wu(),l=Uf(e,Mf(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return I.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Ss(t){_e(!1)}function vS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Un.Pop,navigator:s,static:o=!1}=t;Xi()&&_e(!1);let a=e.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Gi(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,_=I.useMemo(()=>{let y=Lf(u,a);return y==null?null:{location:{pathname:y,search:c,hash:h,state:d,key:m},navigationType:i}},[a,u,c,h,d,m,i]);return _==null?null:I.createElement(Qi.Provider,{value:l},I.createElement(Eu.Provider,{children:n,value:_}))}function ES(t){let{children:e,location:n}=t;return oS(nd(e),n)}new Promise(()=>{});function nd(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,nd(r.props.children,s));return}r.type!==Ss&&_e(!1),!r.props.index||!r.props.children||_e(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=nd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rd(){return rd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rd.apply(this,arguments)}function wS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function TS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function IS(t,e){return t.button===0&&(!e||e==="_self")&&!TS(t)}const RS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],SS="startTransition",vg=wI[SS];function AS(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=DR({window:i,v5Compat:!0}));let o=s.current,[a,l]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=I.useCallback(h=>{u&&vg?vg(()=>l(h)):l(h)},[l,u]);return I.useLayoutEffect(()=>o.listen(c),[o,c]),I.createElement(vS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const CS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,w0=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=wS(e,RS),{basename:d}=I.useContext(Qi),m,_=!1;if(typeof u=="string"&&kS.test(u)&&(m=u,CS))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),v=Lf(g.pathname,d);g.origin===f.origin&&v!=null?u=v+g.search+g.hash:_=!0}catch{}let y=iS(u,{relative:i}),E=PS(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||E(f)}return I.createElement("a",rd({},h,{href:m||y,onClick:_||s?r:p,ref:n,target:l}))});var Eg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Eg||(Eg={}));var wg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(wg||(wg={}));function PS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=wu(),l=Mo(),u=y0(t,{relative:o});return I.useCallback(c=>{if(IS(c,n)){c.preventDefault();let h=r!==void 0?r:Nl(l)===Nl(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
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
 */const T0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},I0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(T0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new xS;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DS=function(t){const e=T0(t);return I0.encodeByteArray(e,!0)},Ol=function(t){return DS(t).replace(/\./g,"")},R0=function(t){try{return I0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function OS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VS=()=>OS().__FIREBASE_DEFAULTS__,LS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&R0(t[1]);return e&&JSON.parse(e)},Tu=()=>{try{return VS()||LS()||MS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},S0=t=>{var e,n;return(n=(e=Tu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},A0=t=>{const e=S0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},C0=()=>{var t;return(t=Tu())===null||t===void 0?void 0:t.config},k0=t=>{var e;return(e=Tu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class US{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function P0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ol(JSON.stringify(n)),Ol(JSON.stringify(o)),a].join(".")}/**
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function bS(){var t;const e=(t=Tu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $S(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BS(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zS(){try{return typeof indexedDB=="object"}catch{return!1}}function HS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const qS="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qS,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uo.prototype.create)}}class Uo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?WS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nn(i,a,r)}}function WS(t,e){return t.replace(KS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const KS=/\{\$([^}]+)}/g;function GS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Tg(s)&&Tg(o)){if(!Vl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tg(t){return t!==null&&typeof t=="object"}/**
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
 */function Fo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function As(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Cs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function QS(t,e){const n=new XS(t,e);return n.subscribe.bind(n)}class XS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");YS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Uc),i.error===void 0&&(i.error=Uc),i.complete===void 0&&(i.complete=Uc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uc(){}/**
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
 */function ae(t){return t&&t._delegate?t._delegate:t}class Zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mr="[DEFAULT]";/**
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
 */class JS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new US;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eA(e))try{this.getOrInitializeService({instanceIdentifier:mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mr){return this.instances.has(e)}getOptions(e=mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mr){return this.component?this.component.multipleInstances?e:mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZS(t){return t===mr?void 0:t}function eA(t){return t.instantiationMode==="EAGER"}/**
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
 */class tA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const nA={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},rA=G.INFO,iA={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},sA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=iA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bf{constructor(e){this.name=e,this._logLevel=rA,this._logHandler=sA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const oA=(t,e)=>e.some(n=>t instanceof n);let Ig,Rg;function aA(){return Ig||(Ig=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lA(){return Rg||(Rg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const N0=new WeakMap,id=new WeakMap,x0=new WeakMap,Fc=new WeakMap,$f=new WeakMap;function uA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Gn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&N0.set(n,t)}).catch(()=>{}),$f.set(e,t),e}function cA(t){if(id.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});id.set(t,e)}let sd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return id.get(t);if(e==="objectStoreNames")return t.objectStoreNames||x0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hA(t){sd=t(sd)}function dA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bc(this),e,...n);return x0.set(r,e.sort?e.sort():[e]),Gn(r)}:lA().includes(t)?function(...e){return t.apply(bc(this),e),Gn(N0.get(this))}:function(...e){return Gn(t.apply(bc(this),e))}}function fA(t){return typeof t=="function"?dA(t):(t instanceof IDBTransaction&&cA(t),oA(t,aA())?new Proxy(t,sd):t)}function Gn(t){if(t instanceof IDBRequest)return uA(t);if(Fc.has(t))return Fc.get(t);const e=fA(t);return e!==t&&(Fc.set(t,e),$f.set(e,t)),e}const bc=t=>$f.get(t);function pA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Gn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gn(o.result),l.oldVersion,l.newVersion,Gn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const mA=["get","getKey","getAll","getAllKeys","count"],gA=["put","add","delete","clear"],$c=new Map;function Sg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($c.get(e))return $c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mA.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return $c.set(e,s),s}hA(t=>({...t,get:(e,n,r)=>Sg(e,n)||t.get(e,n,r),has:(e,n)=>!!Sg(e,n)||t.has(e,n)}));/**
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
 */class _A{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const od="@firebase/app",Ag="0.9.15";/**
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
 */const Dr=new bf("@firebase/app"),vA="@firebase/app-compat",EA="@firebase/analytics-compat",wA="@firebase/analytics",TA="@firebase/app-check-compat",IA="@firebase/app-check",RA="@firebase/auth",SA="@firebase/auth-compat",AA="@firebase/database",CA="@firebase/database-compat",kA="@firebase/functions",PA="@firebase/functions-compat",NA="@firebase/installations",xA="@firebase/installations-compat",DA="@firebase/messaging",OA="@firebase/messaging-compat",VA="@firebase/performance",LA="@firebase/performance-compat",MA="@firebase/remote-config",UA="@firebase/remote-config-compat",FA="@firebase/storage",bA="@firebase/storage-compat",$A="@firebase/firestore",jA="@firebase/firestore-compat",BA="firebase",zA="10.1.0";/**
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
 */const ad="[DEFAULT]",HA={[od]:"fire-core",[vA]:"fire-core-compat",[wA]:"fire-analytics",[EA]:"fire-analytics-compat",[IA]:"fire-app-check",[TA]:"fire-app-check-compat",[RA]:"fire-auth",[SA]:"fire-auth-compat",[AA]:"fire-rtdb",[CA]:"fire-rtdb-compat",[kA]:"fire-fn",[PA]:"fire-fn-compat",[NA]:"fire-iid",[xA]:"fire-iid-compat",[DA]:"fire-fcm",[OA]:"fire-fcm-compat",[VA]:"fire-perf",[LA]:"fire-perf-compat",[MA]:"fire-rc",[UA]:"fire-rc-compat",[FA]:"fire-gcs",[bA]:"fire-gcs-compat",[$A]:"fire-fst",[jA]:"fire-fst-compat","fire-js":"fire-js",[BA]:"fire-js-all"};/**
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
 */const Ll=new Map,ld=new Map;function qA(t,e){try{t.container.addComponent(e)}catch(n){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Or(t){const e=t.name;if(ld.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;ld.set(e,t);for(const n of Ll.values())qA(n,t);return!0}function Iu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const WA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qn=new Uo("app","Firebase",WA);/**
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
 */class KA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
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
 */const zr=zA;function D0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ad,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(n||(n=C0()),!n)throw Qn.create("no-options");const s=Ll.get(i);if(s){if(Vl(n,s.options)&&Vl(r,s.config))return s;throw Qn.create("duplicate-app",{appName:i})}const o=new tA(i);for(const l of ld.values())o.addComponent(l);const a=new KA(n,r,o);return Ll.set(i,a),a}function jf(t=ad){const e=Ll.get(t);if(!e&&t===ad&&C0())return D0();if(!e)throw Qn.create("no-app",{appName:t});return e}function Xt(t,e,n){var r;let i=(r=HA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(a.join(" "));return}Or(new Zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const GA="firebase-heartbeat-database",QA=1,po="firebase-heartbeat-store";let jc=null;function O0(){return jc||(jc=pA(GA,QA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(po)}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),jc}async function XA(t){try{return await(await O0()).transaction(po).objectStore(po).get(V0(t))}catch(e){if(e instanceof nn)Dr.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dr.warn(n.message)}}}async function Cg(t,e){try{const r=(await O0()).transaction(po,"readwrite");await r.objectStore(po).put(e,V0(t)),await r.done}catch(n){if(n instanceof nn)Dr.warn(n.message);else{const r=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dr.warn(r.message)}}}function V0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const YA=1024,JA=30*24*60*60*1e3;class ZA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=kg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=JA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=kg(),{heartbeatsToSend:n,unsentEntries:r}=eC(this._heartbeatsCache.heartbeats),i=Ol(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function kg(){return new Date().toISOString().substring(0,10)}function eC(t,e=YA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zS()?HS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await XA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pg(t){return Ol(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function nC(t){Or(new Zn("platform-logger",e=>new _A(e),"PRIVATE")),Or(new Zn("heartbeat",e=>new ZA(e),"PRIVATE")),Xt(od,Ag,t),Xt(od,Ag,"esm2017"),Xt("fire-js","")}nC("");function Bf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function L0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rC=L0,M0=new Uo("auth","Firebase",L0());/**
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
 */const Ml=new bf("@firebase/auth");function iC(t,...e){Ml.logLevel<=G.WARN&&Ml.warn(`Auth (${zr}): ${t}`,...e)}function Ja(t,...e){Ml.logLevel<=G.ERROR&&Ml.error(`Auth (${zr}): ${t}`,...e)}/**
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
 */function Ft(t,...e){throw zf(t,...e)}function Yt(t,...e){return zf(t,...e)}function sC(t,e,n){const r=Object.assign(Object.assign({},rC()),{[e]:n});return new Uo("auth","Firebase",r).create(e,{appName:t.name})}function zf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return M0.create(t,...e)}function M(t,e,...n){if(!t)throw zf(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ja(e),new Error(e)}function yn(t,e){t||ln(e)}/**
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
 */function ud(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oC(){return Ng()==="http:"||Ng()==="https:"}function Ng(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function aC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oC()||$S()||"connection"in navigator)?navigator.onLine:!0}function lC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=FS()||jS()}get(){return aC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hf(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class U0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const uC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cC=new bo(3e4,6e4);function Yi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hr(t,e,n,r,i={}){return F0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),U0.fetch()(b0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function F0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},uC),e);try{const i=new hC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ca(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ca(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ca(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ca(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw sC(t,c,u);Ft(t,c)}}catch(i){if(i instanceof nn)throw i;Ft(t,"network-request-failed",{message:String(i)})}}async function $o(t,e,n,r,i={}){const s=await Hr(t,e,n,r,i);return"mfaPendingCredential"in s&&Ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function b0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hf(t.config,i):`${t.config.apiScheme}://${i}`}class hC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Yt(this.auth,"network-request-failed")),cC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ca(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Yt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function dC(t,e){return Hr(t,"POST","/v1/accounts:delete",e)}async function fC(t,e){return Hr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pC(t,e=!1){const n=ae(t),r=await n.getIdToken(e),i=qf(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Bs(Bc(i.auth_time)),issuedAtTime:Bs(Bc(i.iat)),expirationTime:Bs(Bc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bc(t){return Number(t)*1e3}function qf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ja("JWT malformed, contained fewer than 3 sections"),null;try{const i=R0(n);return i?JSON.parse(i):(Ja("Failed to decode base64 JWT payload"),null)}catch(i){return Ja("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function mC(t){const e=qf(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&gC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class _C{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bs(this.lastLoginAt),this.creationTime=Bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ul(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Li(t,fC(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?EC(s.providerUserInfo):[],a=vC(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function yC(t){const e=ae(t);await Ul(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function EC(t){return t.map(e=>{var{providerId:n}=e,r=Bf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function wC(t,e){const n=await F0(t,{},async()=>{const r=Fo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=b0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",U0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new mo;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mo,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
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
 */function Sn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Bf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _C(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Li(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pC(this,e)}reload(){return yC(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ul(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Li(this,dC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:v,isAnonymous:A,providerData:C,stsTokenManager:P}=n;M(g&&P,e,"internal-error");const O=mo.fromJSON(this.name,P);M(typeof g=="string",e,"internal-error"),Sn(h,e.name),Sn(d,e.name),M(typeof v=="boolean",e,"internal-error"),M(typeof A=="boolean",e,"internal-error"),Sn(m,e.name),Sn(_,e.name),Sn(y,e.name),Sn(E,e.name),Sn(p,e.name),Sn(f,e.name);const Q=new Rr({uid:g,auth:e,email:d,emailVerified:v,displayName:h,isAnonymous:A,photoURL:_,phoneNumber:m,tenantId:y,stsTokenManager:O,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(Q.providerData=C.map(B=>Object.assign({},B))),E&&(Q._redirectEventId=E),Q}static async _fromIdTokenResponse(e,n,r=!1){const i=new mo;i.updateFromServerResponse(n);const s=new Rr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ul(s),s}}/**
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
 */const xg=new Map;function un(t){yn(t instanceof Function,"Expected a class definition");let e=xg.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xg.set(t,e),e)}/**
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
 */class j0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}j0.type="NONE";const Dg=j0;/**
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
 */function Za(t,e,n){return`firebase:${t}:${e}:${n}`}class Ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Za(this.userKey,i.apiKey,s),this.fullPersistenceKey=Za("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ti(un(Dg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||un(Dg);const o=Za(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Rr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ti(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ti(s,e,r))}}/**
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
 */function Og(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(B0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(W0(e))return"Blackberry";if(K0(e))return"Webos";if(Wf(e))return"Safari";if((e.includes("chrome/")||z0(e))&&!e.includes("edge/"))return"Chrome";if(q0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function B0(t=Xe()){return/firefox\//i.test(t)}function Wf(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function z0(t=Xe()){return/crios\//i.test(t)}function H0(t=Xe()){return/iemobile/i.test(t)}function q0(t=Xe()){return/android/i.test(t)}function W0(t=Xe()){return/blackberry/i.test(t)}function K0(t=Xe()){return/webos/i.test(t)}function Ru(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TC(t=Xe()){var e;return Ru(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IC(){return BS()&&document.documentMode===10}function G0(t=Xe()){return Ru(t)||q0(t)||K0(t)||W0(t)||/windows phone/i.test(t)||H0(t)}function RC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Q0(t,e=[]){let n;switch(t){case"Browser":n=Og(Xe());break;case"Worker":n=`${Og(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}async function X0(t,e){return Hr(t,"GET","/v2/recaptchaConfig",Yi(t,e))}function Vg(t){return t!==void 0&&t.enterprise!==void 0}class Y0{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function SC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function J0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Yt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",SC().appendChild(r)})}function AC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const CC="https://www.google.com/recaptcha/enterprise.js?render=",kC="recaptcha-enterprise",PC="NO_RECAPTCHA";class Z0{constructor(e){this.type=kC,this.auth=Ji(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{X0(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Y0(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Vg(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(PC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Vg(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}J0(CC+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Fl(t,e,n,r=!1){const i=new Z0(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class NC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class xC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lg(this),this.idTokenSubscription=new Lg(this),this.beforeStateQueue=new NC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=M0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ti.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ul(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ae(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}async initializeRecaptchaConfig(){const e=await X0(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Y0(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Z0(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Uo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Ti.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Q0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&iC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ji(t){return ae(t)}class Lg{constructor(e){this.auth=e,this.observer=null,this.addObserver=QS(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function DC(t,e){const n=Iu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vl(s,e??{}))return i;Ft(i,"already-initialized")}return n.initialize({options:e})}function OC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function VC(t,e,n){const r=Ji(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=eE(e),{host:o,port:a}=LC(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||MC()}function eE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LC(t){const e=eE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Mg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Mg(o)}}}function Mg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function MC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Kf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}async function UC(t,e){return Hr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function zc(t,e){return $o(t,"POST","/v1/accounts:signInWithPassword",Yi(t,e))}/**
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
 */async function FC(t,e){return $o(t,"POST","/v1/accounts:signInWithEmailLink",Yi(t,e))}async function bC(t,e){return $o(t,"POST","/v1/accounts:signInWithEmailLink",Yi(t,e))}/**
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
 */class go extends Kf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Fl(e,r,"signInWithPassword");return zc(e,i)}else return zc(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Fl(e,r,"signInWithPassword");return zc(e,s)}else return Promise.reject(i)});case"emailLink":return FC(e,{email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return UC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bC(e,{idToken:n,email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ii(t,e){return $o(t,"POST","/v1/accounts:signInWithIdp",Yi(t,e))}/**
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
 */const $C="http://localhost";class Vr extends Kf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Bf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ii(e,n)}buildRequest(){const e={requestUri:$C,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fo(n)}return e}}/**
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
 */function jC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BC(t){const e=As(Cs(t)).link,n=e?As(Cs(e)).deep_link_id:null,r=As(Cs(t)).deep_link_id;return(r?As(Cs(r)).link:null)||r||n||e||t}class Gf{constructor(e){var n,r,i,s,o,a;const l=As(Cs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=jC((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=BC(e);try{return new Gf(n)}catch{return null}}}/**
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
 */class Zi{constructor(){this.providerId=Zi.PROVIDER_ID}static credential(e,n){return go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gf.parseLink(n);return M(r,"argument-error"),go._fromEmailAndCode(e,r.code,r.tenantId)}}Zi.PROVIDER_ID="password";Zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jo extends tE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nn extends jo{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
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
 */class xn extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
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
 */class Dn extends jo{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
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
 */class On extends jo{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return On.credential(n,r)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
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
 */async function Hc(t,e){return $o(t,"POST","/v1/accounts:signUp",Yi(t,e))}/**
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
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Rr._fromIdTokenResponse(e,r,i),o=Ug(r);return new Lr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ug(r);return new Lr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ug(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class bl extends nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new bl(e,n,r,i)}}function nE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?bl._fromErrorAndOperation(t,s,e,r):s})}async function zC(t,e,n=!1){const r=await Li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Lr._forOperation(t,"link",r)}/**
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
 */async function HC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Li(t,nE(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=qf(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),Lr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ft(r,"user-mismatch"),s}}/**
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
 */async function rE(t,e,n=!1){const r="signIn",i=await nE(t,r,e),s=await Lr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function qC(t,e){return rE(Ji(t),e)}async function WC(t,e,n){var r;const i=Ji(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Fl(i,s,"signUpPassword");o=Hc(i,u)}else o=Hc(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Fl(i,s,"signUpPassword");return Hc(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Lr._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function KC(t,e,n){return qC(ae(t),Zi.credential(e,n))}/**
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
 */async function GC(t,e){return Hr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function QC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ae(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Li(r,GC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function XC(t,e,n,r){return ae(t).onIdTokenChanged(e,n,r)}function YC(t,e,n){return ae(t).beforeAuthStateChanged(e,n)}function JC(t,e,n,r){return ae(t).onAuthStateChanged(e,n,r)}function ZC(t){return ae(t).signOut()}const $l="__sak";/**
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
 */class iE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($l,"1"),this.storage.removeItem($l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ek(){const t=Xe();return Wf(t)||Ru(t)}const tk=1e3,nk=10;class sE extends iE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ek()&&RC(),this.fallbackToPolling=G0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);IC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sE.type="LOCAL";const rk=sE;/**
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
 */class oE extends iE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oE.type="SESSION";const aE=oE;/**
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
 */function ik(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Su{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Su(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await ik(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Su.receivers=[];/**
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
 */function Qf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class sk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Qf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Jt(){return window}function ok(t){Jt().location.href=t}/**
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
 */function lE(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function ak(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uk(){return lE()?self:null}/**
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
 */const uE="firebaseLocalStorageDb",ck=1,jl="firebaseLocalStorage",cE="fbase_key";class Bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Au(t,e){return t.transaction([jl],e?"readwrite":"readonly").objectStore(jl)}function hk(){const t=indexedDB.deleteDatabase(uE);return new Bo(t).toPromise()}function cd(){const t=indexedDB.open(uE,ck);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jl,{keyPath:cE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jl)?e(r):(r.close(),await hk(),e(await cd()))})})}async function Fg(t,e,n){const r=Au(t,!0).put({[cE]:e,value:n});return new Bo(r).toPromise()}async function dk(t,e){const n=Au(t,!1).get(e),r=await new Bo(n).toPromise();return r===void 0?null:r.value}function bg(t,e){const n=Au(t,!0).delete(e);return new Bo(n).toPromise()}const fk=800,pk=3;class hE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Su._getInstance(uk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ak(),!this.activeServiceWorker)return;this.sender=new sk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cd();return await Fg(e,$l,"1"),await bg(e,$l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Au(i,!1).getAll();return new Bo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hE.type="LOCAL";const mk=hE;new bo(3e4,6e4);/**
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
 */function gk(t,e){return e?un(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xf extends Kf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _k(t){return rE(t.auth,new Xf(t),t.bypassAuthState)}function yk(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),HC(n,new Xf(t),t.bypassAuthState)}async function vk(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),zC(n,new Xf(t),t.bypassAuthState)}/**
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
 */class dE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _k;case"linkViaPopup":case"linkViaRedirect":return vk;case"reauthViaPopup":case"reauthViaRedirect":return yk;default:Ft(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ek=new bo(2e3,1e4);class fi extends dE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fi.currentPopupAction&&fi.currentPopupAction.cancel(),fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=Qf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ek.get())};e()}}fi.currentPopupAction=null;/**
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
 */const wk="pendingRedirect",el=new Map;class Tk extends dE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=el.get(this.auth._key());if(!e){try{const r=await Ik(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}el.set(this.auth._key(),e)}return this.bypassAuthState||el.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ik(t,e){const n=Ak(e),r=Sk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Rk(t,e){el.set(t._key(),e)}function Sk(t){return un(t._redirectPersistence)}function Ak(t){return Za(wk,t.config.apiKey,t.name)}async function Ck(t,e,n=!1){const r=Ji(t),i=gk(r,e),o=await new Tk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const kk=10*60*1e3;class Pk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Yt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kk&&this.cachedEventUids.clear(),this.cachedEventUids.has($g(e))}saveEventToCache(e){this.cachedEventUids.add($g(e)),this.lastProcessedEventTime=Date.now()}}function $g(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Nk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fE(t);default:return!1}}/**
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
 */async function xk(t,e={}){return Hr(t,"GET","/v1/projects",e)}/**
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
 */const Dk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ok=/^https?/;async function Vk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xk(t);for(const n of e)try{if(Lk(n))return}catch{}Ft(t,"unauthorized-domain")}function Lk(t){const e=ud(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ok.test(n))return!1;if(Dk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Mk=new bo(3e4,6e4);function jg(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Uk(t){return new Promise((e,n)=>{var r,i,s;function o(){jg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jg(),n(Yt(t,"network-request-failed"))},timeout:Mk.get()})}if(!((i=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Jt().gapi)===null||s===void 0)&&s.load)o();else{const a=AC("iframefcb");return Jt()[a]=()=>{gapi.load?o():n(Yt(t,"network-request-failed"))},J0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw tl=null,e})}let tl=null;function Fk(t){return tl=tl||Uk(t),tl}/**
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
 */const bk=new bo(5e3,15e3),$k="__/auth/iframe",jk="emulator/auth/iframe",Bk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hk(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hf(e,jk):`https://${t.config.authDomain}/${$k}`,r={apiKey:e.apiKey,appName:t.name,v:zr},i=zk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fo(r).slice(1)}`}async function qk(t){const e=await Fk(t),n=Jt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:Hk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Yt(t,"network-request-failed"),a=Jt().setTimeout(()=>{s(o)},bk.get());function l(){Jt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Wk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kk=500,Gk=600,Qk="_blank",Xk="http://localhost";class Bg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Yk(t,e,n,r=Kk,i=Gk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Wk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Xe().toLowerCase();n&&(a=z0(u)?Qk:n),B0(u)&&(e=e||Xk,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,_])=>`${d}${m}=${_},`,"");if(TC(u)&&a!=="_self")return Jk(e||"",a),new Bg(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new Bg(h)}function Jk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Zk="__/auth/handler",eP="emulator/auth/handler",tP=encodeURIComponent("fac");async function zg(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zr,eventId:i};if(e instanceof tE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",GS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof jo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${tP}=${encodeURIComponent(l)}`:"";return`${nP(t)}?${Fo(a).slice(1)}${u}`}function nP({config:t}){return t.emulator?Hf(t,eP):`https://${t.authDomain}/${Zk}`}/**
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
 */const qc="webStorageSupport";class rP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aE,this._completeRedirectFn=Ck,this._overrideRedirectResult=Rk}async _openPopup(e,n,r,i){var s;yn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await zg(e,n,r,ud(),i);return Yk(e,o,Qf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await zg(e,n,r,ud(),i);return ok(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qk(e),r=new Pk(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qc,{type:qc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[qc];o!==void 0&&n(!!o),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Vk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return G0()||Wf()||Ru()}}const iP=rP;var Hg="@firebase/auth",qg="1.1.0";/**
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
 */class sP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function aP(t){Or(new Zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q0(t)},u=new xC(r,i,s,l);return OC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Or(new Zn("auth-internal",e=>{const n=Ji(e.getProvider("auth").getImmediate());return(r=>new sP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(Hg,qg,oP(t)),Xt(Hg,qg,"esm2017")}/**
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
 */const lP=5*60,uP=k0("authIdTokenMaxAge")||lP;let Wg=null;const cP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uP)return;const i=n==null?void 0:n.token;Wg!==i&&(Wg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hP(t=jf()){const e=Iu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DC(t,{popupRedirectResolver:iP,persistence:[mk,rk,aE]}),r=k0("authTokenSyncURL");if(r){const s=cP(r);YC(n,s,()=>s(n.currentUser)),XC(n,o=>s(o))}const i=S0("auth");return i&&VC(n,`http://${i}`),n}aP("Browser");var dP="firebase",fP="10.1.0";/**
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
 */Xt(dP,fP,"app");/**
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
 */const pE="firebasestorage.googleapis.com",mE="storageBucket",pP=2*60*1e3,mP=10*60*1e3,gP=1e3;/**
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
 */class de extends nn{constructor(e,n,r=0){super(Wc(e),`Firebase Storage: ${n} (${Wc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,de.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var se;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(se||(se={}));function Wc(t){return"storage/"+t}function Yf(){const t="An unknown error occurred, please check the error payload for server response.";return new de(se.UNKNOWN,t)}function _P(t){return new de(se.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function yP(t){return new de(se.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function vP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new de(se.UNAUTHENTICATED,t)}function EP(){return new de(se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function wP(t){return new de(se.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function gE(){return new de(se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _E(){return new de(se.CANCELED,"User canceled the upload/download.")}function TP(t){return new de(se.INVALID_URL,"Invalid URL '"+t+"'.")}function IP(t){return new de(se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function RP(){return new de(se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+mE+"' property when initializing the app?")}function yE(){return new de(se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function SP(){return new de(se.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function AP(){return new de(se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function CP(t){return new de(se.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function hd(t){return new de(se.INVALID_ARGUMENT,t)}function vE(){return new de(se.APP_DELETED,"The Firebase app was deleted.")}function kP(t){return new de(se.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function zs(t,e){return new de(se.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ys(t){throw new de(se.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pt.makeFromUrl(e,n)}catch{return new pt(e,"")}if(r.path==="")return r;throw IP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},y=n===pE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",p=new RegExp(`^https?://${y}/${i}/${E}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:m,indices:_,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<g.length;v++){const A=g[v],C=A.regex.exec(e);if(C){const P=C[A.indices.bucket];let O=C[A.indices.path];O||(O=""),r=new pt(P,O),A.postModify(r);break}}if(r==null)throw TP(e);return r}}class PP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function NP(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(m,l())},E)}function d(){s&&clearTimeout(s)}function m(E,...p){if(u){d();return}if(E){d(),c.call(null,E,...p);return}if(l()||o){d(),c.call(null,E,...p);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let _=!1;function y(E){_||(_=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function xP(t){t(!1)}/**
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
 */function DP(t){return t!==void 0}function OP(t){return typeof t=="function"}function VP(t){return typeof t=="object"&&!Array.isArray(t)}function Cu(t){return typeof t=="string"||t instanceof String}function Kg(t){return Jf()&&t instanceof Blob}function Jf(){return typeof Blob<"u"&&!bS()}function Gg(t,e,n,r){if(r<e)throw hd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw hd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function zo(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function EE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Sr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Sr||(Sr={}));/**
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
 */function wE(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class LP{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,_)=>{this.resolve_=m,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ka(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Sr.NO_ERROR,l=s.getStatus();if(!a||wE(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Sr.ABORT;r(!1,new ka(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ka(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());DP(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Yf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?vE():_E();o(l)}else{const l=gE();o(l)}};this.canceled_?n(!1,new ka(!1,null,!0)):this.backoffId_=NP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ka{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function MP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function UP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function FP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function bP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $P(t,e,n,r,i,s,o=!0){const a=EE(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return FP(u,e),MP(u,n),UP(u,s),bP(u,r),new LP(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function jP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function BP(...t){const e=jP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Jf())return new Blob(t);throw new de(se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function zP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function HP(t){if(typeof atob>"u")throw CP("base-64");return atob(t)}/**
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
 */const qt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Kc{constructor(e,n){this.data=e,this.contentType=n||null}}function qP(t,e){switch(t){case qt.RAW:return new Kc(TE(e));case qt.BASE64:case qt.BASE64URL:return new Kc(IE(t,e));case qt.DATA_URL:return new Kc(KP(e),GP(e))}throw Yf()}function TE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function WP(t){let e;try{e=decodeURIComponent(t)}catch{throw zs(qt.DATA_URL,"Malformed data URL.")}return TE(e)}function IE(t,e){switch(t){case qt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw zs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case qt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw zs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=HP(e)}catch(i){throw i.message.includes("polyfill")?i:zs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class RE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw zs(qt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=QP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function KP(t){const e=new RE(t);return e.base64?IE(qt.BASE64,e.rest):WP(e.rest)}function GP(t){return new RE(t).contentType}function QP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Vn{constructor(e,n){let r=0,i="";Kg(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Kg(this.data_)){const r=this.data_,i=zP(r,e,n);return i===null?null:new Vn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Vn(r,!0)}}static getBlob(...e){if(Jf()){const n=e.map(r=>r instanceof Vn?r.data_:r);return new Vn(BP.apply(null,n))}else{const n=e.map(o=>Cu(o)?qP(qt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Vn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function SE(t){let e;try{e=JSON.parse(t)}catch{return null}return VP(e)?e:null}/**
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
 */function XP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function YP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function AE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function JP(t,e){return e}class Je{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||JP}}let Pa=null;function ZP(t){return!Cu(t)||t.length<2?t:AE(t)}function CE(){if(Pa)return Pa;const t=[];t.push(new Je("bucket")),t.push(new Je("generation")),t.push(new Je("metageneration")),t.push(new Je("name","fullPath",!0));function e(s,o){return ZP(o)}const n=new Je("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Je("size");return i.xform=r,t.push(i),t.push(new Je("timeCreated")),t.push(new Je("updated")),t.push(new Je("md5Hash",null,!0)),t.push(new Je("cacheControl",null,!0)),t.push(new Je("contentDisposition",null,!0)),t.push(new Je("contentEncoding",null,!0)),t.push(new Je("contentLanguage",null,!0)),t.push(new Je("contentType",null,!0)),t.push(new Je("metadata","customMetadata",!0)),Pa=t,Pa}function eN(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new pt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function tN(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return eN(r,t),r}function kE(t,e,n){const r=SE(e);return r===null?null:tN(t,r,n)}function nN(t,e,n,r){const i=SE(e);if(i===null||!Cu(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),m=zo(d,n,r),_=EE({alt:"media",token:u});return m+_})[0]}function PE(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class es{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function dn(t){if(!t)throw Yf()}function Zf(t,e){function n(r,i){const s=kE(t,i,e);return dn(s!==null),s}return n}function rN(t,e){function n(r,i){const s=kE(t,i,e);return dn(s!==null),nN(s,i,t.host,t._protocol)}return n}function Ho(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=EP():i=vP():n.getStatus()===402?i=yP(t.bucket):n.getStatus()===403?i=wP(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function NE(t){const e=Ho(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=_P(t.path)),s.serverResponse=i.serverResponse,s}return n}function iN(t,e,n){const r=e.fullServerUrl(),i=zo(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new es(i,s,Zf(t,n),o);return a.errorHandler=NE(e),a}function sN(t,e,n){const r=e.fullServerUrl(),i=zo(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new es(i,s,rN(t,n),o);return a.errorHandler=NE(e),a}function oN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function xE(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=oN(null,e)),r}function aN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let v=0;v<2;v++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=xE(e,r,i),c=PE(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",m=Vn.getBlob(h,r,d);if(m===null)throw yE();const _={name:u.fullPath},y=zo(s,t.host,t._protocol),E="POST",p=t.maxUploadRetryTime,f=new es(y,E,Zf(t,n),p);return f.urlParams=_,f.headers=o,f.body=m.uploadData(),f.errorHandler=Ho(e),f}class Bl{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function ep(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{dn(!1)}return dn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function lN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=xE(e,r,i),a={name:o.fullPath},l=zo(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=PE(o,n),d=t.maxUploadRetryTime;function m(y){ep(y);let E;try{E=y.getResponseHeader("X-Goog-Upload-URL")}catch{dn(!1)}return dn(Cu(E)),E}const _=new es(l,u,m,d);return _.urlParams=a,_.headers=c,_.body=h,_.errorHandler=Ho(e),_}function uN(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=ep(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{dn(!1)}h||dn(!1);const d=Number(h);return dn(!isNaN(d)),new Bl(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new es(n,o,s,a);return l.headers=i,l.errorHandler=Ho(e),l}const Qg=256*1024;function cN(t,e,n,r,i,s,o,a){const l=new Bl(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw SP();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,d=h+c;let m="";c===0?m="finalize":u===c?m="upload, finalize":m="upload";const _={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${l.current}`},y=r.slice(h,d);if(y===null)throw yE();function E(v,A){const C=ep(v,["active","final"]),P=l.current+c,O=r.size();let Q;return C==="final"?Q=Zf(e,s)(v,A):Q=null,new Bl(P,O,C==="final",Q)}const p="POST",f=e.maxUploadRetryTime,g=new es(n,p,E,f);return g.headers=_,g.body=y.uploadData(),g.progressCallback=a||null,g.errorHandler=Ho(t),g}const it={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Gc(t){switch(t){case"running":case"pausing":case"canceling":return it.RUNNING;case"paused":return it.PAUSED;case"success":return it.SUCCESS;case"canceled":return it.CANCELED;case"error":return it.ERROR;default:return it.ERROR}}/**
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
 */class hN{constructor(e,n,r){if(OP(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Xr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class dN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Sr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Sr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Sr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ys("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ys("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ys("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ys("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ys("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class fN extends dN{initXhr(){this.xhr_.responseType="text"}}function Jr(){return new fN}/**
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
 */class pN{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=CE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(se.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(wE(i.status,[]))if(s)i=gE();else{this.sleepTime=Math.max(this.sleepTime*2,gP),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(se.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=lN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Jr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=uN(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Jr,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Qg*this._chunkMultiplier,n=new Bl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=cN(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Jr,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Qg*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=iN(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Jr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=aN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Jr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=_E(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Gc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new hN(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Gc(this._state)){case it.SUCCESS:Xr(this._resolve.bind(null,this.snapshot))();break;case it.CANCELED:case it.ERROR:const n=this._reject;Xr(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Gc(this._state)){case it.RUNNING:case it.PAUSED:e.next&&Xr(e.next.bind(e,this.snapshot))();break;case it.SUCCESS:e.complete&&Xr(e.complete.bind(e))();break;case it.CANCELED:case it.ERROR:e.error&&Xr(e.error.bind(e,this._error))();break;default:e.error&&Xr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Mr{constructor(e,n){this._service=e,n instanceof pt?this._location=n:this._location=pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Mr(e,n)}get root(){const e=new pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return AE(this._location.path)}get storage(){return this._service}get parent(){const e=XP(this._location.path);if(e===null)return null;const n=new pt(this._location.bucket,e);return new Mr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw kP(e)}}function mN(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new pN(t,new Vn(e),n)}function gN(t){t._throwIfRoot("getDownloadURL");const e=sN(t.storage,t._location,CE());return t.storage.makeRequestWithTokens(e,Jr).then(n=>{if(n===null)throw AP();return n})}function _N(t,e){const n=YP(t._location.path,e),r=new pt(t._location.bucket,n);return new Mr(t.storage,r)}/**
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
 */function yN(t){return/^[A-Za-z]+:\/\//.test(t)}function vN(t,e){return new Mr(t,e)}function DE(t,e){if(t instanceof tp){const n=t;if(n._bucket==null)throw RP();const r=new Mr(n,n._bucket);return e!=null?DE(r,e):r}else return e!==void 0?_N(t,e):t}function EN(t,e){if(e&&yN(e)){if(t instanceof tp)return vN(t,e);throw hd("To use ref(service, url), the first argument must be a Storage instance.")}else return DE(t,e)}function Xg(t,e){const n=e==null?void 0:e[mE];return n==null?null:pt.makeFromBucketSpec(n,t)}function wN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:P0(i,t.app.options.projectId))}class tp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=pE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=pP,this._maxUploadRetryTime=mP,this._requests=new Set,i!=null?this._bucket=pt.makeFromBucketSpec(i,this._host):this._bucket=Xg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pt.makeFromBucketSpec(this._url,e):this._bucket=Xg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Gg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Gg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Mr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new PP(vE());{const o=$P(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Yg="@firebase/storage",Jg="0.11.2";/**
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
 */const OE="storage";function VE(t,e,n){return t=ae(t),mN(t,e,n)}function LE(t){return t=ae(t),gN(t)}function ME(t,e){return t=ae(t),EN(t,e)}function TN(t=jf(),e){t=ae(t);const r=Iu(t,OE).getImmediate({identifier:e}),i=A0("storage");return i&&IN(r,...i),r}function IN(t,e,n,r={}){wN(t,e,n,r)}function RN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new tp(n,r,i,e,zr)}function SN(){Or(new Zn(OE,RN,"PUBLIC").setMultipleInstances(!0)),Xt(Yg,Jg,""),Xt(Yg,Jg,"esm2017")}SN();var AN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,np=np||{},F=AN||self;function ku(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function qo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function CN(t){return Object.prototype.hasOwnProperty.call(t,Qc)&&t[Qc]||(t[Qc]=++kN)}var Qc="closure_uid_"+(1e9*Math.random()>>>0),kN=0;function PN(t,e,n){return t.call.apply(t.bind,arguments)}function NN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=PN:qe=NN,qe.apply(null,arguments)}function Na(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ne(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ar(){this.s=this.s,this.o=this.o}var xN=0;ar.prototype.s=!1;ar.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),xN!=0)&&CN(this)};ar.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const UE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function rp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Zg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ku(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function We(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var DN=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",()=>{},e),F.removeEventListener("test",()=>{},e)}catch{}return t}();function _o(t){return/^[\s\xa0]*$/.test(t)}function Pu(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function Ht(t){return Pu().indexOf(t)!=-1}function ip(t){return ip[" "](t),t}ip[" "]=function(){};function ON(t,e){var n=Sx;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var VN=Ht("Opera"),Mi=Ht("Trident")||Ht("MSIE"),FE=Ht("Edge"),dd=FE||Mi,bE=Ht("Gecko")&&!(Pu().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge"))&&!(Ht("Trident")||Ht("MSIE"))&&!Ht("Edge"),LN=Pu().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge");function $E(){var t=F.document;return t?t.documentMode:void 0}var fd;e:{var Xc="",Yc=function(){var t=Pu();if(bE)return/rv:([^\);]+)(\)|;)/.exec(t);if(FE)return/Edge\/([\d\.]+)/.exec(t);if(Mi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(LN)return/WebKit\/(\S+)/.exec(t);if(VN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Yc&&(Xc=Yc?Yc[1]:""),Mi){var Jc=$E();if(Jc!=null&&Jc>parseFloat(Xc)){fd=String(Jc);break e}}fd=Xc}var pd;if(F.document&&Mi){var e_=$E();pd=e_||parseInt(fd,10)||void 0}else pd=void 0;var MN=pd;function yo(t,e){if(We.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(bE){e:{try{ip(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:UN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&yo.$.h.call(this)}}Ne(yo,We);var UN={2:"touch",3:"pen",4:"mouse"};yo.prototype.h=function(){yo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wo="closure_listenable_"+(1e6*Math.random()|0),FN=0;function bN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++FN,this.fa=this.ia=!1}function Nu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function sp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function $N(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function jE(t){const e={};for(const n in t)e[n]=t[n];return e}const t_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function BE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<t_.length;s++)n=t_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function xu(t){this.src=t,this.g={},this.h=0}xu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=gd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new bN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function md(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=UE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Nu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function gd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var op="closure_lm_"+(1e6*Math.random()|0),Zc={};function zE(t,e,n,r,i){if(r&&r.once)return qE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)zE(t,e[s],n,r,i);return null}return n=up(n),t&&t[Wo]?t.O(e,n,qo(r)?!!r.capture:!!r,i):HE(t,e,n,!1,r,i)}function HE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=qo(i)?!!i.capture:!!i,a=lp(t);if(a||(t[op]=a=new xu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=jN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)DN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(KE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jN(){function t(n){return e.call(t.src,t.listener,n)}const e=BN;return t}function qE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)qE(t,e[s],n,r,i);return null}return n=up(n),t&&t[Wo]?t.P(e,n,qo(r)?!!r.capture:!!r,i):HE(t,e,n,!0,r,i)}function WE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)WE(t,e[s],n,r,i);else r=qo(r)?!!r.capture:!!r,n=up(n),t&&t[Wo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=gd(s,n,r,i),-1<n&&(Nu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=lp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gd(e,n,r,i)),(n=-1<t?e[t]:null)&&ap(n))}function ap(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Wo])md(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(KE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=lp(e))?(md(n,t),n.h==0&&(n.src=null,e[op]=null)):Nu(t)}}}function KE(t){return t in Zc?Zc[t]:Zc[t]="on"+t}function BN(t,e){if(t.fa)t=!0;else{e=new yo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&ap(t),t=n.call(r,e)}return t}function lp(t){return t=t[op],t instanceof xu?t:null}var eh="__closure_events_fn_"+(1e9*Math.random()>>>0);function up(t){return typeof t=="function"?t:(t[eh]||(t[eh]=function(e){return t.handleEvent(e)}),t[eh])}function Pe(){ar.call(this),this.i=new xu(this),this.S=this,this.J=null}Ne(Pe,ar);Pe.prototype[Wo]=!0;Pe.prototype.removeEventListener=function(t,e,n,r){WE(this,t,e,n,r)};function Me(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new We(e,t);else if(e instanceof We)e.target=e.target||t;else{var i=e;e=new We(r,t),BE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=xa(o,r,!0,e)&&i}if(o=e.g=t,i=xa(o,r,!0,e)&&i,i=xa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=xa(o,r,!1,e)&&i}Pe.prototype.N=function(){if(Pe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Nu(n[r]);delete t.g[e],t.h--}}this.J=null};Pe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Pe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function xa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&md(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var cp=F.JSON.stringify;class zN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function HN(){var t=hp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class qN{constructor(){this.h=this.g=null}add(e,n){const r=GE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var GE=new zN(()=>new WN,t=>t.reset());class WN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function KN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function GN(t){F.setTimeout(()=>{throw t},0)}let vo,Eo=!1,hp=new qN,QE=()=>{const t=F.Promise.resolve(void 0);vo=()=>{t.then(QN)}};var QN=()=>{for(var t;t=HN();){try{t.h.call(t.g)}catch(n){GN(n)}var e=GE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Eo=!1};function Du(t,e){Pe.call(this),this.h=t||1,this.g=e||F,this.j=qe(this.qb,this),this.l=Date.now()}Ne(Du,Pe);k=Du.prototype;k.ga=!1;k.T=null;k.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Me(this,"tick"),this.ga&&(dp(this),this.start()))}};k.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function dp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}k.N=function(){Du.$.N.call(this),dp(this),delete this.g};function fp(t,e,n){if(typeof t=="function")n&&(t=qe(t,n));else if(t&&typeof t.handleEvent=="function")t=qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function XE(t){t.g=fp(()=>{t.g=null,t.i&&(t.i=!1,XE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class XN extends ar{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:XE(this)}N(){super.N(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wo(t){ar.call(this),this.h=t,this.g={}}Ne(wo,ar);var n_=[];function YE(t,e,n,r){Array.isArray(n)||(n&&(n_[0]=n.toString()),n=n_);for(var i=0;i<n.length;i++){var s=zE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function JE(t){sp(t.g,function(e,n){this.g.hasOwnProperty(n)&&ap(e)},t),t.g={}}wo.prototype.N=function(){wo.$.N.call(this),JE(this)};wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ou(){this.g=!0}Ou.prototype.Ea=function(){this.g=!1};function YN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function JN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function pi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ex(t,n)+(r?" "+r:"")})}function ZN(t,e){t.info(function(){return"TIMEOUT: "+e})}Ou.prototype.info=function(){};function ex(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return cp(n)}catch{return e}}var qr={},r_=null;function Vu(){return r_=r_||new Pe}qr.Ta="serverreachability";function ZE(t){We.call(this,qr.Ta,t)}Ne(ZE,We);function To(t){const e=Vu();Me(e,new ZE(e))}qr.STAT_EVENT="statevent";function ew(t,e){We.call(this,qr.STAT_EVENT,t),this.stat=e}Ne(ew,We);function et(t){const e=Vu();Me(e,new ew(e,t))}qr.Ua="timingevent";function tw(t,e){We.call(this,qr.Ua,t),this.size=e}Ne(tw,We);function Ko(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var Lu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},nw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function pp(){}pp.prototype.h=null;function i_(t){return t.h||(t.h=t.i())}function rw(){}var Go={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function mp(){We.call(this,"d")}Ne(mp,We);function gp(){We.call(this,"c")}Ne(gp,We);var _d;function Mu(){}Ne(Mu,pp);Mu.prototype.g=function(){return new XMLHttpRequest};Mu.prototype.i=function(){return{}};_d=new Mu;function Qo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new wo(this),this.P=tx,t=dd?125:void 0,this.V=new Du(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new iw}function iw(){this.i=null,this.g="",this.h=!1}var tx=45e3,yd={},zl={};k=Qo.prototype;k.setTimeout=function(t){this.P=t};function vd(t,e,n){t.L=1,t.v=Fu(vn(e)),t.s=n,t.S=!0,sw(t,null)}function sw(t,e){t.G=Date.now(),Xo(t),t.A=vn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),fw(n.i,"t",r),t.C=0,n=t.l.J,t.h=new iw,t.g=Vw(t.l,n?e:null,!t.s),0<t.O&&(t.M=new XN(qe(t.Pa,t,t.g),t.O)),YE(t.U,t.g,"readystatechange",t.nb),e=t.I?jE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),To(),YN(t.j,t.u,t.A,t.m,t.W,t.s)}k.nb=function(t){t=t.target;const e=this.M;e&&Wt(t)==3?e.l():this.Pa(t)};k.Pa=function(t){try{if(t==this.g)e:{const c=Wt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||dd||this.g&&(this.h.h||this.g.ja()||l_(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?To(3):To(2)),Uu(this);var n=this.g.da();this.ca=n;t:if(ow(this)){var r=l_(this.g);t="";var i=r.length,s=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vr(this),Hs(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,JN(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_o(a)){var u=a;break t}}u=null}if(n=u)pi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ed(this,n);else{this.i=!1,this.o=3,et(12),vr(this),Hs(this);break e}}this.S?(aw(this,c,o),dd&&this.i&&c==3&&(YE(this.U,this.V,"tick",this.mb),this.V.start())):(pi(this.j,this.m,o,null),Ed(this,o)),c==4&&vr(this),this.i&&!this.J&&(c==4?Nw(this.l,this):(this.i=!1,Xo(this)))}else Tx(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),vr(this),Hs(this)}}}catch{}finally{}};function ow(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function aw(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=nx(t,n),i==zl){e==4&&(t.o=4,et(14),r=!1),pi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==yd){t.o=4,et(15),pi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else pi(t.j,t.m,i,null),Ed(t,i);ow(t)&&i!=zl&&i!=yd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,et(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Tp(e),e.M=!0,et(11))):(pi(t.j,t.m,n,"[Invalid Chunked Response]"),vr(t),Hs(t))}k.mb=function(){if(this.g){var t=Wt(this.g),e=this.g.ja();this.C<e.length&&(Uu(this),aw(this,t,e),this.i&&t!=4&&Xo(this))}};function nx(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?zl:(n=Number(e.substring(n,r)),isNaN(n)?yd:(r+=1,r+n>e.length?zl:(e=e.slice(r,r+n),t.C=r+n,e)))}k.cancel=function(){this.J=!0,vr(this)};function Xo(t){t.Y=Date.now()+t.P,lw(t,t.P)}function lw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ko(qe(t.lb,t),e)}function Uu(t){t.B&&(F.clearTimeout(t.B),t.B=null)}k.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ZN(this.j,this.A),this.L!=2&&(To(),et(17)),vr(this),this.o=2,Hs(this)):lw(this,this.Y-t)};function Hs(t){t.l.H==0||t.J||Nw(t.l,t)}function vr(t){Uu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,dp(t.V),JE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ed(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||wd(n.i,t))){if(!t.K&&wd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Wl(n),ju(n);else break e;wp(n),et(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ko(qe(n.ib,n),6e3));if(1>=gw(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Er(n,11)}else if((t.K||n.g==t)&&Wl(n),!_o(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(_p(s,s.h),s.h=null))}if(r.F){const y=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,te(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Ow(r,r.J?r.pa:null,r.Y),o.K){_w(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Uu(a),Xo(a)),r.g=o}else kw(r);0<n.j.length&&Bu(n)}else u[0]!="stop"&&u[0]!="close"||Er(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Er(n,7):Ep(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}To(4)}catch{}}function rx(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ku(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ix(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ku(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function uw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ku(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ix(t),r=rx(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var cw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ar(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ar){this.h=t.h,Hl(this,t.j),this.s=t.s,this.g=t.g,ql(this,t.m),this.l=t.l;var e=t.i,n=new Io;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),s_(this,n),this.o=t.o}else t&&(e=String(t).match(cw))?(this.h=!1,Hl(this,e[1]||"",!0),this.s=ks(e[2]||""),this.g=ks(e[3]||"",!0),ql(this,e[4]),this.l=ks(e[5]||"",!0),s_(this,e[6]||"",!0),this.o=ks(e[7]||"")):(this.h=!1,this.i=new Io(null,this.h))}Ar.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ps(e,o_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ps(e,o_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ps(n,n.charAt(0)=="/"?lx:ax,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ps(n,cx)),t.join("")};function vn(t){return new Ar(t)}function Hl(t,e,n){t.j=n?ks(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ql(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function s_(t,e,n){e instanceof Io?(t.i=e,hx(t.i,t.h)):(n||(e=Ps(e,ux)),t.i=new Io(e,t.h))}function te(t,e,n){t.i.set(e,n)}function Fu(t){return te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ks(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ps(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ox),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ox(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var o_=/[#\/\?@]/g,ax=/[#\?:]/g,lx=/[#\?]/g,ux=/[#\?@]/g,cx=/#/g;function Io(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function lr(t){t.g||(t.g=new Map,t.h=0,t.i&&sx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=Io.prototype;k.add=function(t,e){lr(this),this.i=null,t=ts(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hw(t,e){lr(t),e=ts(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function dw(t,e){return lr(t),e=ts(t,e),t.g.has(e)}k.forEach=function(t,e){lr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};k.ta=function(){lr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};k.Z=function(t){lr(this);let e=[];if(typeof t=="string")dw(this,t)&&(e=e.concat(this.g.get(ts(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return lr(this),this.i=null,t=ts(this,t),dw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function fw(t,e,n){hw(t,e),0<n.length&&(t.i=null,t.g.set(ts(t,e),rp(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ts(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function hx(t,e){e&&!t.j&&(lr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(hw(this,r),fw(this,i,n))},t)),t.j=e}var dx=class{constructor(t,e){this.g=t,this.map=e}};function pw(t){this.l=t||fx,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ka&&F.g.Ka()&&F.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fx=10;function mw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function gw(t){return t.h?1:t.g?t.g.size:0}function wd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function _p(t,e){t.g?t.g.add(e):t.h=e}function _w(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}pw.prototype.cancel=function(){if(this.i=yw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function yw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return rp(t.i)}var px=class{stringify(t){return F.JSON.stringify(t,void 0)}parse(t){return F.JSON.parse(t,void 0)}};function mx(){this.g=new px}function gx(t,e,n){const r=n||"";try{uw(t,function(i,s){let o=i;qo(i)&&(o=cp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _x(t,e){const n=new Ou;if(F.Image){const r=new Image;r.onload=Na(Da,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Na(Da,n,r,"TestLoadImage: error",!1,e),r.onabort=Na(Da,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Na(Da,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Da(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Yo(t){this.l=t.fc||null,this.j=t.ob||!1}Ne(Yo,pp);Yo.prototype.g=function(){return new bu(this.l,this.j)};Yo.prototype.i=function(t){return function(){return t}}({});function bu(t,e){Pe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=yp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ne(bu,Pe);var yp=0;k=bu.prototype;k.open=function(t,e){if(this.readyState!=yp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ro(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||F).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jo(this)),this.readyState=yp};k.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ro(this)),this.g&&(this.readyState=3,Ro(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function vw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}k.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Jo(this):Ro(this),this.readyState==3&&vw(this)}};k.Za=function(t){this.g&&(this.response=this.responseText=t,Jo(this))};k.Ya=function(t){this.g&&(this.response=t,Jo(this))};k.ka=function(){this.g&&Jo(this)};function Jo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ro(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ro(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(bu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var yx=F.JSON.parse;function pe(t){Pe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ew,this.L=this.M=!1}Ne(pe,Pe);var Ew="",vx=/^https?$/i,Ex=["POST","PUT"];k=pe.prototype;k.Oa=function(t){this.M=t};k.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():_d.g(),this.C=this.u?i_(this.u):i_(_d),this.g.onreadystatechange=qe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){a_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=UE(Ex,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Iw(this),0<this.B&&((this.L=wx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.ua,this)):this.A=fp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){a_(this,s)}};function wx(t){return Mi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.ua=function(){typeof np<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function a_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ww(t),$u(t)}function ww(t){t.F||(t.F=!0,Me(t,"complete"),Me(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Me(this,"complete"),Me(this,"abort"),$u(this))};k.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$u(this,!0)),pe.$.N.call(this)};k.La=function(){this.s||(this.G||this.v||this.l?Tw(this):this.kb())};k.kb=function(){Tw(this)};function Tw(t){if(t.h&&typeof np<"u"&&(!t.C[1]||Wt(t)!=4||t.da()!=2)){if(t.v&&Wt(t)==4)fp(t.La,0,t);else if(Me(t,"readystatechange"),Wt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(cw)[1]||null;!i&&F.self&&F.self.location&&(i=F.self.location.protocol.slice(0,-1)),r=!vx.test(i?i.toLowerCase():"")}n=r}if(n)Me(t,"complete"),Me(t,"success");else{t.m=6;try{var s=2<Wt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",ww(t)}}finally{$u(t)}}}}function $u(t,e){if(t.g){Iw(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Me(t,"ready");try{n.onreadystatechange=r}catch{}}}function Iw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}k.isActive=function(){return!!this.g};function Wt(t){return t.g?t.g.readyState:0}k.da=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}};k.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),yx(e)}};function l_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Ew:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Tx(t){const e={};t=(t.g&&2<=Wt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(_o(t[r]))continue;var n=KN(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}$N(e,function(r){return r.join(", ")})}k.Ia=function(){return this.m};k.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Rw(t){let e="";return sp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function vp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Rw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):te(t,e,n))}function vs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Sw(t){this.Ga=0,this.j=[],this.l=new Ou,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=vs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=vs("baseRetryDelayMs",5e3,t),this.hb=vs("retryDelaySeedMs",1e4,t),this.eb=vs("forwardChannelMaxRetries",2,t),this.xa=vs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new pw(t&&t.concurrentRequestLimit),this.Ja=new mx,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}k=Sw.prototype;k.ra=8;k.H=1;function Ep(t){if(Aw(t),t.H==3){var e=t.W++,n=vn(t.I);if(te(n,"SID",t.K),te(n,"RID",e),te(n,"TYPE","terminate"),Zo(t,n),e=new Qo(t,t.l,e),e.L=2,e.v=Fu(vn(n)),n=!1,F.navigator&&F.navigator.sendBeacon)try{n=F.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=Vw(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Xo(e)}Dw(t)}function ju(t){t.g&&(Tp(t),t.g.cancel(),t.g=null)}function Aw(t){ju(t),t.u&&(F.clearTimeout(t.u),t.u=null),Wl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function Bu(t){if(!mw(t.i)&&!t.m){t.m=!0;var e=t.Na;vo||QE(),Eo||(vo(),Eo=!0),hp.add(e,t),t.C=0}}function Ix(t,e){return gw(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ko(qe(t.Na,t,e),xw(t,t.C)),t.C++,!0)}k.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Qo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=jE(s),BE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Cw(this,i,e),n=vn(this.I),te(n,"RID",t),te(n,"CVER",22),this.F&&te(n,"X-HTTP-Session-Id",this.F),Zo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Rw(s)))+"&"+e:this.o&&vp(n,this.o,s)),_p(this.i,i),this.bb&&te(n,"TYPE","init"),this.P?(te(n,"$req",e),te(n,"SID","null"),i.aa=!0,vd(i,n,null)):vd(i,n,e),this.H=2}}else this.H==3&&(t?u_(this,t):this.j.length==0||mw(this.i)||u_(this))};function u_(t,e){var n;e?n=e.m:n=t.W++;const r=vn(t.I);te(r,"SID",t.K),te(r,"RID",n),te(r,"AID",t.V),Zo(t,r),t.o&&t.s&&vp(r,t.o,t.s),n=new Qo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Cw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),_p(t.i,n),vd(n,r,e)}function Zo(t,e){t.na&&sp(t.na,function(n,r){te(e,r,n)}),t.h&&uw({},function(n,r){te(e,r,n)})}function Cw(t,e,n){n=Math.min(t.j.length,n);var r=t.h?qe(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{gx(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function kw(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;vo||QE(),Eo||(vo(),Eo=!0),hp.add(e,t),t.A=0}}function wp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ko(qe(t.Ma,t),xw(t,t.A)),t.A++,!0)}k.Ma=function(){if(this.u=null,Pw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ko(qe(this.jb,this),t)}};k.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,et(10),ju(this),Pw(this))};function Tp(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function Pw(t){t.g=new Qo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=vn(t.wa);te(e,"RID","rpc"),te(e,"SID",t.K),te(e,"AID",t.V),te(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&te(e,"TO",t.qa),te(e,"TYPE","xmlhttp"),Zo(t,e),t.o&&t.s&&vp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Fu(vn(e)),n.s=null,n.S=!0,sw(n,t)}k.ib=function(){this.v!=null&&(this.v=null,ju(this),wp(this),et(19))};function Wl(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function Nw(t,e){var n=null;if(t.g==e){Wl(t),Tp(t),t.g=null;var r=2}else if(wd(t.i,e))n=e.F,_w(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Vu(),Me(r,new tw(r,n)),Bu(t)}else kw(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&Ix(t,e)||r==2&&wp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Er(t,5);break;case 4:Er(t,10);break;case 3:Er(t,6);break;default:Er(t,2)}}}function xw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Er(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=qe(t.pb,t);n||(n=new Ar("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Hl(n,"https"),Fu(n)),_x(n.toString(),r)}else et(2);t.H=0,t.h&&t.h.za(e),Dw(t),Aw(t)}k.pb=function(t){t?(this.l.info("Successfully pinged google.com"),et(2)):(this.l.info("Failed to ping google.com"),et(1))};function Dw(t){if(t.H=0,t.ma=[],t.h){const e=yw(t.i);(e.length!=0||t.j.length!=0)&&(Zg(t.ma,e),Zg(t.ma,t.j),t.i.i.length=0,rp(t.j),t.j.length=0),t.h.ya()}}function Ow(t,e,n){var r=n instanceof Ar?vn(n):new Ar(n);if(r.g!="")e&&(r.g=e+"."+r.g),ql(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ar(null);r&&Hl(s,r),e&&(s.g=e),i&&ql(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&te(r,n,e),te(r,"VER",t.ra),Zo(t,r),r}function Vw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new pe(new Yo({ob:!0})):new pe(t.va),e.Oa(t.J),e}k.isActive=function(){return!!this.h&&this.h.isActive(this)};function Lw(){}k=Lw.prototype;k.Ba=function(){};k.Aa=function(){};k.za=function(){};k.ya=function(){};k.isActive=function(){return!0};k.Va=function(){};function Kl(){if(Mi&&!(10<=Number(MN)))throw Error("Environmental error: no available transport.")}Kl.prototype.g=function(t,e){return new yt(t,e)};function yt(t,e){Pe.call(this),this.g=new Sw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!_o(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_o(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ns(this)}Ne(yt,Pe);yt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;et(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Ow(t,null,t.Y),Bu(t)};yt.prototype.close=function(){Ep(this.g)};yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=cp(t),t=n);e.j.push(new dx(e.fb++,t)),e.H==3&&Bu(e)};yt.prototype.N=function(){this.g.h=null,delete this.j,Ep(this.g),delete this.g,yt.$.N.call(this)};function Mw(t){mp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ne(Mw,mp);function Uw(){gp.call(this),this.status=1}Ne(Uw,gp);function ns(t){this.g=t}Ne(ns,Lw);ns.prototype.Ba=function(){Me(this.g,"a")};ns.prototype.Aa=function(t){Me(this.g,new Mw(t))};ns.prototype.za=function(t){Me(this.g,new Uw)};ns.prototype.ya=function(){Me(this.g,"b")};function Rx(){this.blockSize=-1}function bt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ne(bt,Rx);bt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function th(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}bt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)th(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){th(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){th(this,r),i=0;break}}this.h=i,this.i+=e};bt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function J(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var Sx={};function Ip(t){return-128<=t&&128>t?ON(t,function(e){return new J([e|0],0>e?-1:0)}):new J([t|0],0>t?-1:0)}function Kt(t){if(isNaN(t)||!isFinite(t))return Ri;if(0>t)return Ve(Kt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Td;return new J(e,0)}function Fw(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ve(Fw(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Kt(Math.pow(e,8)),r=Ri,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Kt(Math.pow(e,s)),r=r.R(s).add(Kt(o))):(r=r.R(n),r=r.add(Kt(o)))}return r}var Td=4294967296,Ri=Ip(0),Id=Ip(1),c_=Ip(16777216);k=J.prototype;k.ea=function(){if(It(this))return-Ve(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Td+r)*e,e*=Td}return t};k.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(cn(this))return"0";if(It(this))return"-"+Ve(this).toString(t);for(var e=Kt(Math.pow(t,6)),n=this,r="";;){var i=Ql(n,e).g;n=Gl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,cn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};k.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function It(t){return t.h==-1}k.X=function(t){return t=Gl(this,t),It(t)?-1:cn(t)?0:1};function Ve(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new J(n,~t.h).add(Id)}k.abs=function(){return It(this)?Ve(this):this};k.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new J(n,n[n.length-1]&-2147483648?-1:0)};function Gl(t,e){return t.add(Ve(e))}k.R=function(t){if(cn(this)||cn(t))return Ri;if(It(this))return It(t)?Ve(this).R(Ve(t)):Ve(Ve(this).R(t));if(It(t))return Ve(this.R(Ve(t)));if(0>this.X(c_)&&0>t.X(c_))return Kt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Oa(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Oa(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Oa(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Oa(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new J(n,0)};function Oa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Es(t,e){this.g=t,this.h=e}function Ql(t,e){if(cn(e))throw Error("division by zero");if(cn(t))return new Es(Ri,Ri);if(It(t))return e=Ql(Ve(t),e),new Es(Ve(e.g),Ve(e.h));if(It(e))return e=Ql(t,Ve(e)),new Es(Ve(e.g),e.h);if(30<t.g.length){if(It(t)||It(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Id,r=e;0>=r.X(t);)n=h_(n),r=h_(r);var i=Yr(n,1),s=Yr(r,1);for(r=Yr(r,2),n=Yr(n,2);!cn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Yr(r,1),n=Yr(n,1)}return e=Gl(t,i.R(e)),new Es(i,e)}for(i=Ri;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Kt(n),o=s.R(e);It(o)||0<o.X(t);)n-=r,s=Kt(n),o=s.R(e);cn(s)&&(s=Id),i=i.add(s),t=Gl(t,o)}return new Es(i,t)}k.gb=function(t){return Ql(this,t).h};k.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new J(n,this.h&t.h)};k.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new J(n,this.h|t.h)};k.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new J(n,this.h^t.h)};function h_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new J(n,t.h)}function Yr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new J(i,t.h)}Kl.prototype.createWebChannel=Kl.prototype.g;yt.prototype.send=yt.prototype.u;yt.prototype.open=yt.prototype.m;yt.prototype.close=yt.prototype.close;Lu.NO_ERROR=0;Lu.TIMEOUT=8;Lu.HTTP_ERROR=6;nw.COMPLETE="complete";rw.EventType=Go;Go.OPEN="a";Go.CLOSE="b";Go.ERROR="c";Go.MESSAGE="d";Pe.prototype.listen=Pe.prototype.O;pe.prototype.listenOnce=pe.prototype.P;pe.prototype.getLastError=pe.prototype.Sa;pe.prototype.getLastErrorCode=pe.prototype.Ia;pe.prototype.getStatus=pe.prototype.da;pe.prototype.getResponseJson=pe.prototype.Wa;pe.prototype.getResponseText=pe.prototype.ja;pe.prototype.send=pe.prototype.ha;pe.prototype.setWithCredentials=pe.prototype.Oa;bt.prototype.digest=bt.prototype.l;bt.prototype.reset=bt.prototype.reset;bt.prototype.update=bt.prototype.j;J.prototype.add=J.prototype.add;J.prototype.multiply=J.prototype.R;J.prototype.modulo=J.prototype.gb;J.prototype.compare=J.prototype.X;J.prototype.toNumber=J.prototype.ea;J.prototype.toString=J.prototype.toString;J.prototype.getBits=J.prototype.D;J.fromNumber=Kt;J.fromString=Fw;var Ax=function(){return new Kl},Cx=function(){return Vu()},nh=Lu,kx=nw,Px=qr,d_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Nx=Yo,Va=rw,xx=pe,Dx=bt,Si=J;const f_="@firebase/firestore";/**
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
 */class je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
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
 */let rs="10.1.0";/**
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
 */const Ur=new bf("@firebase/firestore");function p_(){return Ur.logLevel}function V(t,...e){if(Ur.logLevel<=G.DEBUG){const n=e.map(Rp);Ur.debug(`Firestore (${rs}): ${t}`,...n)}}function En(t,...e){if(Ur.logLevel<=G.ERROR){const n=e.map(Rp);Ur.error(`Firestore (${rs}): ${t}`,...n)}}function Ui(t,...e){if(Ur.logLevel<=G.WARN){const n=e.map(Rp);Ur.warn(`Firestore (${rs}): ${t}`,...n)}}function Rp(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function U(t="Unexpected state"){const e=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: `+t;throw En(e),new Error(e)}function ie(t,e){t||U()}function $(t,e){return t}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class bw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ox{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(je.UNAUTHENTICATED))}shutdown(){}}class Vx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Lx{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new fn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new bw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new je(e)}}class Mx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ux{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Mx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.R=n.token,new Fx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function $x(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class $w{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=$x(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function X(t,e){return t<e?-1:t>e?1:0}function Fi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class b{constructor(e){this.timestamp=e}static fromTimestamp(e){return new b(e)}static min(){return new b(new ye(0,0))}static max(){return new b(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class So{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return So.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof So?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ne extends So{construct(e,n,r){return new ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const jx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends So{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return jx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new N(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new N(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ne.fromString(e))}static fromName(e){return new L(ne.fromString(e).popFirst(5))}static empty(){return new L(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ne(e.slice()))}}function Bx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=b.fromTimestamp(r===1e9?new ye(n+1,0):new ye(n,r));return new er(i,L.empty(),e)}function zx(t){return new er(t.readTime,t.key,-1)}class er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new er(b.min(),L.empty(),-1)}static max(){return new er(b.max(),L.empty(),-1)}}function Hx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
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
 */const qx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ea(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==qx)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ta(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Sp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Sp.ae=-1;function zu(t){return t==null}function Xl(t){return t===0&&1/t==-1/0}function Kx(t){return typeof t=="number"&&Number.isInteger(t)&&!Xl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function m_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class he{constructor(e,n){this.comparator=e,this.root=n||Oe.EMPTY}insert(e,n){return new he(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new La(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new La(this.root,e,this.comparator,!1)}getReverseIterator(){return new La(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new La(this.root,e,this.comparator,!0)}}class La{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Oe.RED,this.left=i??Oe.EMPTY,this.right=s??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Oe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Oe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Oe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ke{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new g_(this.data.getIterator())}getIteratorFrom(e){return new g_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class g_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new mt([])}unionWith(e){let n=new Ke(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Bw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Bw("Invalid base64 string: "+s):s}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const Gx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(t){if(ie(!!t),typeof t=="string"){let e=0;const n=Gx.exec(t);if(ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ee(t.seconds),nanos:Ee(t.nanos)}}function Ee(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
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
 */function Ap(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cp(t){const e=t.mapValue.fields.__previous_value__;return Ap(e)?Cp(e):e}function Ao(t){const e=tr(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
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
 */class Qx{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Co{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Co("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Co&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ma={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ap(t)?4:Xx(t)?9007199254740991:10:U()}function tn(t,e){if(t===e)return!0;const n=br(t);if(n!==br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ao(t).isEqual(Ao(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=tr(i.timestampValue),a=tr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fr(i.bytesValue).isEqual(Fr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ee(i.geoPointValue.latitude)===Ee(s.geoPointValue.latitude)&&Ee(i.geoPointValue.longitude)===Ee(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ee(i.integerValue)===Ee(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ee(i.doubleValue),a=Ee(s.doubleValue);return o===a?Xl(o)===Xl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Fi(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(m_(o)!==m_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!tn(o[l],a[l])))return!1;return!0}(t,e);default:return U()}}function ko(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function bi(t,e){if(t===e)return 0;const n=br(t),r=br(e);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ee(s.integerValue||s.doubleValue),l=Ee(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return __(t.timestampValue,e.timestampValue);case 4:return __(Ao(t),Ao(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Fr(s),l=Fr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=X(a[u],l[u]);if(c!==0)return c}return X(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=X(Ee(s.latitude),Ee(o.latitude));return a!==0?a:X(Ee(s.longitude),Ee(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=bi(a[u],l[u]);if(c)return c}return X(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ma.mapValue&&o===Ma.mapValue)return 0;if(s===Ma.mapValue)return 1;if(o===Ma.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=X(l[h],c[h]);if(d!==0)return d;const m=bi(a[l[h]],u[c[h]]);if(m!==0)return m}return X(l.length,c.length)}(t.mapValue,e.mapValue);default:throw U()}}function __(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=tr(t),r=tr(e),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function $i(t){return Rd(t)}function Rd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return L.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Rd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Rd(n.fields[o])}`;return i+"}"}(t.mapValue):U()}function y_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sd(t){return!!t&&"integerValue"in t}function kp(t){return!!t&&"arrayValue"in t}function v_(t){return!!t&&"nullValue"in t}function E_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nl(t){return!!t&&"mapValue"in t}function qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Xx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!nl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=qs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());nl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];nl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Wr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ot(qs(this.value))}}function zw(t){const e=[];return Wr(t.fields,(n,r)=>{const i=new He([n]);if(nl(r)){const s=zw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new mt(e)}/**
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
 */class ze{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ze(e,0,b.min(),b.min(),b.min(),ot.empty(),0)}static newFoundDocument(e,n,r,i){return new ze(e,1,n,b.min(),r,i,0)}static newNoDocument(e,n){return new ze(e,2,n,b.min(),b.min(),ot.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,b.min(),b.min(),ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yl{constructor(e,n){this.position=e,this.inclusive=n}}function w_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=bi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function T_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ws{constructor(e,n="asc"){this.field=e,this.dir=n}}function Yx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Hw{}class Te extends Hw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Zx(e,n,r):n==="array-contains"?new nD(e,r):n==="in"?new rD(e,r):n==="not-in"?new iD(e,r):n==="array-contains-any"?new sD(e,r):new Te(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new eD(e,r):new tD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(bi(n,this.value)):n!==null&&br(this.value)===br(n)&&this.matchesComparison(bi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class $t extends Hw{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new $t(e,n)}matches(e){return qw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function qw(t){return t.op==="and"}function Ww(t){return Jx(t)&&qw(t)}function Jx(t){for(const e of t.filters)if(e instanceof $t)return!1;return!0}function Ad(t){if(t instanceof Te)return t.field.canonicalString()+t.op.toString()+$i(t.value);if(Ww(t))return t.filters.map(e=>Ad(e)).join(",");{const e=t.filters.map(n=>Ad(n)).join(",");return`${t.op}(${e})`}}function Kw(t,e){return t instanceof Te?function(r,i){return i instanceof Te&&r.op===i.op&&r.field.isEqual(i.field)&&tn(r.value,i.value)}(t,e):t instanceof $t?function(r,i){return i instanceof $t&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Kw(o,i.filters[a]),!0):!1}(t,e):void U()}function Gw(t){return t instanceof Te?function(n){return`${n.field.canonicalString()} ${n.op} ${$i(n.value)}`}(t):t instanceof $t?function(n){return n.op.toString()+" {"+n.getFilters().map(Gw).join(" ,")+"}"}(t):"Filter"}class Zx extends Te{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class eD extends Te{constructor(e,n){super(e,"in",n),this.keys=Qw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tD extends Te{constructor(e,n){super(e,"not-in",n),this.keys=Qw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class nD extends Te{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kp(n)&&ko(n.arrayValue,this.value)}}class rD extends Te{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ko(this.value.arrayValue,n)}}class iD extends Te{constructor(e,n){super(e,"not-in",n)}matches(e){if(ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ko(this.value.arrayValue,n)}}class sD extends Te{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ko(this.value.arrayValue,r))}}/**
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
 */class oD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function I_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new oD(t,e,n,r,i,s,o)}function Pp(t){const e=$(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ad(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>$i(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>$i(r)).join(",")),e.he=n}return e.he}function Np(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Yx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!T_(t.startAt,e.startAt)&&T_(t.endAt,e.endAt)}function Cd(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class na{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function aD(t,e,n,r,i,s,o,a){return new na(t,e,n,r,i,s,o,a)}function Hu(t){return new na(t)}function R_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Xw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function xp(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Yw(t){return t.collectionGroup!==null}function Ai(t){const e=$(t);if(e.Pe===null){e.Pe=[];const n=xp(e),r=Xw(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ws(n)),e.Pe.push(new Ws(He.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ws(He.keyField(),s))}}}return e.Pe}function wn(t){const e=$(t);if(!e.Ie)if(e.limitType==="F")e.Ie=I_(e.path,e.collectionGroup,Ai(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ai(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ws(s.field,o))}const r=e.endAt?new Yl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Yl(e.startAt.position,e.startAt.inclusive):null;e.Ie=I_(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function kd(t,e){e.getFirstInequalityField(),xp(t);const n=t.filters.concat([e]);return new na(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Pd(t,e,n){return new na(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qu(t,e){return Np(wn(t),wn(e))&&t.limitType===e.limitType}function Jw(t){return`${Pp(wn(t))}|lt:${t.limitType}`}function Nd(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Gw(i)).join(", ")}]`),zu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>$i(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>$i(i)).join(",")),`Target(${r})`}(wn(t))}; limitType=${t.limitType})`}function Wu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ai(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=w_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ai(r),i)||r.endAt&&!function(o,a,l){const u=w_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ai(r),i))}(t,e)}function lD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Zw(t){return(e,n)=>{let r=!1;for(const i of Ai(t)){const s=uD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function uD(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?bi(l,u):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
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
 */class is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return jw(this.inner)}size(){return this.innerSize}}/**
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
 */const cD=new he(L.comparator);function Tn(){return cD}const eT=new he(L.comparator);function Ns(...t){let e=eT;for(const n of t)e=e.insert(n.key,n);return e}function tT(t){let e=eT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function wr(){return Ks()}function nT(){return Ks()}function Ks(){return new is(t=>t.toString(),(t,e)=>t.isEqual(e))}const hD=new he(L.comparator),dD=new Ke(L.comparator);function H(...t){let e=dD;for(const n of t)e=e.add(n);return e}const fD=new Ke(X);function pD(){return fD}/**
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
 */function rT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xl(e)?"-0":e}}function iT(t){return{integerValue:""+t}}function mD(t,e){return Kx(e)?iT(e):rT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ku{constructor(){this._=void 0}}function gD(t,e,n){return t instanceof Po?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ap(s)&&(s=Cp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ji?oT(t,e):t instanceof No?aT(t,e):function(i,s){const o=sT(i,s),a=S_(o)+S_(i.Te);return Sd(o)&&Sd(i.Te)?iT(a):rT(i.serializer,a)}(t,e)}function _D(t,e,n){return t instanceof ji?oT(t,e):t instanceof No?aT(t,e):n}function sT(t,e){return t instanceof Jl?function(r){return Sd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Po extends Ku{}class ji extends Ku{constructor(e){super(),this.elements=e}}function oT(t,e){const n=lT(e);for(const r of t.elements)n.some(i=>tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class No extends Ku{constructor(e){super(),this.elements=e}}function aT(t,e){let n=lT(e);for(const r of t.elements)n=n.filter(i=>!tn(i,r));return{arrayValue:{values:n}}}class Jl extends Ku{constructor(e,n){super(),this.serializer=e,this.Te=n}}function S_(t){return Ee(t.integerValue||t.doubleValue)}function lT(t){return kp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class uT{constructor(e,n){this.field=e,this.transform=n}}function yD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ji&&i instanceof ji||r instanceof No&&i instanceof No?Fi(r.elements,i.elements,tn):r instanceof Jl&&i instanceof Jl?tn(r.Te,i.Te):r instanceof Po&&i instanceof Po}(t.transform,e.transform)}class vD{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gu{}function cT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dT(t.key,Zt.none()):new ra(t.key,t.data,Zt.none());{const n=t.data,r=ot.empty();let i=new Ke(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ur(t.key,r,new mt(i.toArray()),Zt.none())}}function ED(t,e,n){t instanceof ra?function(i,s,o){const a=i.value.clone(),l=C_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ur?function(i,s,o){if(!rl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=C_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(hT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Gs(t,e,n,r){return t instanceof ra?function(s,o,a,l){if(!rl(s.precondition,o))return a;const u=s.value.clone(),c=k_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ur?function(s,o,a,l){if(!rl(s.precondition,o))return a;const u=k_(s.fieldTransforms,l,o),c=o.data;return c.setAll(hT(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return rl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function wD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=sT(r.transform,i||null);s!=null&&(n===null&&(n=ot.empty()),n.set(r.field,s))}return n||null}function A_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fi(r,i,(s,o)=>yD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends Gu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ur extends Gu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function hT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function C_(t,e,n){const r=new Map;ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,_D(o,a,n[i]))}return r}function k_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,gD(s,o,e))}return r}class dT extends Gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TD extends Gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ID{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ED(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=nT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=cT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(b.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&Fi(this.mutations,e.mutations,(n,r)=>A_(n,r))&&Fi(this.baseMutations,e.baseMutations,(n,r)=>A_(n,r))}}class Dp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ie(e.mutations.length===r.length);let i=function(){return hD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Dp(e,n,r,i)}}/**
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
 */class RD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class SD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ve,W;function AD(t){switch(t){default:return U();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function fT(t){if(t===void 0)return En("GRPC error has no .code"),w.UNKNOWN;switch(t){case ve.OK:return w.OK;case ve.CANCELLED:return w.CANCELLED;case ve.UNKNOWN:return w.UNKNOWN;case ve.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case ve.INTERNAL:return w.INTERNAL;case ve.UNAVAILABLE:return w.UNAVAILABLE;case ve.UNAUTHENTICATED:return w.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case ve.NOT_FOUND:return w.NOT_FOUND;case ve.ALREADY_EXISTS:return w.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return w.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case ve.ABORTED:return w.ABORTED;case ve.OUT_OF_RANGE:return w.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return w.UNIMPLEMENTED;case ve.DATA_LOSS:return w.DATA_LOSS;default:return U()}}(W=ve||(ve={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Op{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ua}static getOrCreateInstance(){return Ua===null&&(Ua=new Op),Ua}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ua=null;/**
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
 */function CD(){return new TextEncoder}/**
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
 */const kD=new Si([4294967295,4294967295],0);function P_(t){const e=CD().encode(t),n=new Dx;return n.update(e),new Uint8Array(n.digest())}function N_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Si([n,r],0),new Si([i,s],0)]}class Vp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xs(`Invalid padding: ${n}`);if(r<0)throw new xs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xs(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Si.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(Si.fromNumber(r)));return i.compare(kD)===1&&(i=new Si([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=P_(e),[r,i]=N_(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Vp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=P_(e),[r,i]=N_(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Qu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Qu(b.min(),i,new he(X),Tn(),H())}}class ia{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ia(r,n,H(),H(),H())}}/**
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
 */class il{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class pT{constructor(e,n){this.targetId=e,this.pe=n}}class mT{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class x_{constructor(){this.ye=0,this.we=O_(),this.Se=Ye.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=H(),n=H(),r=H();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new ia(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=O_()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class PD{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Tn(),this.$e=D_(),this.Ue=new he(X)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Cd(a))if(s===0){const l=new L(a.path);this.ze(i,l,ze.newNoDocument(l,b.min()))}else ie(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(e,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=Op.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,m,_){var y,E,p,f,g,v;const A={localCacheCount:m,existenceFilterCount:_.count},C=_.unchangedNames;return C&&(A.bloomFilter={applied:h===0,hashCount:(y=C==null?void 0:C.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(f=(p=(E=C==null?void 0:C.bits)===null||E===void 0?void 0:E.bitmap)===null||p===void 0?void 0:p.length)!==null&&f!==void 0?f:0,padding:(v=(g=C==null?void 0:C.bits)===null||g===void 0?void 0:g.padding)!==null&&v!==void 0?v:0},d&&(A.bloomFilter.mightContain=d)),A}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Fr(s).toUint8Array()}catch(h){if(h instanceof Bw)return Ui("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new Vp(l,o,a)}catch(h){return Ui(h instanceof xs?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(e.targetId,c)?0:2,nt:c}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Cd(a.target)){const l=new L(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,ze.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=H();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new Qu(e,n,this.Ue,this.Ke,r);return this.Ke=Tn(),this.$e=D_(),this.Ue=new he(X),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new x_,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Ke(X),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new x_),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function D_(){return new he(L.comparator)}function O_(){return new he(L.comparator)}const ND=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),xD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),DD=(()=>({and:"AND",or:"OR"}))();class OD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xd(t,e){return t.useProto3Json||zu(e)?e:{value:e}}function Zl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function VD(t,e){return Zl(t,e.toTimestamp())}function en(t){return ie(!!t),b.fromTimestamp(function(n){const r=tr(n);return new ye(r.seconds,r.nanos)}(t))}function Lp(t,e){return function(r){return new ne(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function _T(t){const e=ne.fromString(t);return ie(wT(e)),e}function Dd(t,e){return Lp(t.databaseId,e.path)}function rh(t,e){const n=_T(e);if(n.get(1)!==t.databaseId.projectId)throw new N(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(yT(n))}function Od(t,e){return Lp(t.databaseId,e)}function LD(t){const e=_T(t);return e.length===4?ne.emptyPath():yT(e)}function Vd(t){return new ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yT(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function V_(t,e,n){return{name:Dd(t,e),fields:n.value.mapValue.fields}}function MD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ie(c===void 0||typeof c=="string"),Ye.fromBase64String(c||"")):(ie(c===void 0||c instanceof Uint8Array),Ye.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?w.UNKNOWN:fT(u.code);return new N(c,u.message||"")}(o);n=new mT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=rh(t,r.document.name),s=en(r.document.updateTime),o=r.document.createTime?en(r.document.createTime):b.min(),a=new ot({mapValue:{fields:r.document.fields}}),l=ze.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new il(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=rh(t,r.document),s=r.readTime?en(r.readTime):b.min(),o=ze.newNoDocument(i,s),a=r.removedTargetIds||[];n=new il([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=rh(t,r.document),s=r.removedTargetIds||[];n=new il([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new SD(i,s),a=r.targetId;n=new pT(a,o)}}return n}function UD(t,e){let n;if(e instanceof ra)n={update:V_(t,e.key,e.value)};else if(e instanceof dT)n={delete:Dd(t,e.key)};else if(e instanceof ur)n={update:V_(t,e.key,e.data),updateMask:WD(e.fieldMask)};else{if(!(e instanceof TD))return U();n={verify:Dd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Po)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ji)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof No)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Jl)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:VD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(t,e.precondition)),n}function FD(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?en(i.updateTime):en(s);return o.isEqual(b.min())&&(o=en(s)),new vD(o,i.transformResults||[])}(n,e))):[]}function bD(t,e){return{documents:[Od(t,e.path)]}}function $D(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Od(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Od(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return ET($t.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Zr(h.field),direction:zD(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=xd(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function jD(t){let e=LD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ie(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=vT(h);return d instanceof $t&&Ww(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new Ws(ei(_.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,zu(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,m=h.values||[];return new Yl(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,m=h.values||[];return new Yl(m,d)}(n.endAt)),aD(e,i,o,s,a,"F",l,u)}function BD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ei(n.unaryFilter.field);return Te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ei(n.unaryFilter.field);return Te.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ei(n.unaryFilter.field);return Te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ei(n.unaryFilter.field);return Te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(n){return Te.create(ei(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return $t.create(n.compositeFilter.filters.map(r=>vT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(n.compositeFilter.op))}(t):U()}function zD(t){return ND[t]}function HD(t){return xD[t]}function qD(t){return DD[t]}function Zr(t){return{fieldPath:t.canonicalString()}}function ei(t){return He.fromServerFormat(t.fieldPath)}function ET(t){return t instanceof Te?function(n){if(n.op==="=="){if(E_(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NAN"}};if(v_(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(E_(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NOT_NAN"}};if(v_(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(n.field),op:HD(n.op),value:n.value}}}(t):t instanceof $t?function(n){const r=n.getFilters().map(i=>ET(i));return r.length===1?r[0]:{compositeFilter:{op:qD(n.op),filters:r}}}(t):U()}function WD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Fn{constructor(e,n,r,i,s=b.min(),o=b.min(),a=Ye.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class KD{constructor(e){this.ct=e}}function GD(t){const e=jD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pd(e,e.limit,"L"):e}/**
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
 */class QD{constructor(){this.sn=new XD}addToCollectionParentIndex(e,n){return this.sn.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(er.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(er.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class XD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(ne.comparator)).toArray()}}/**
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
 */class Bi{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Bi(0)}static On(){return new Bi(-1)}}/**
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
 */class YD{constructor(){this.changes=new is(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class JD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ZD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Gs(r.mutation,i,mt.empty(),ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=wr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ns();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Tn();const o=Ks(),a=function(){return Ks()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ur)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Gs(c.mutation,u,c.mutation.getFieldMask(),ye.now())):o.set(u.key,mt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new JD(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ks();let i=new he((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||mt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=nT();c.forEach(d=>{if(!s.has(d)){const m=cT(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return L.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Yw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(wr());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:tT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Ns();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ns();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(c,h){return new na(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,ze.newInvalidDocument(u)))});let o=Ns();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Gs(u.mutation,l,mt.empty(),ye.now()),Wu(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class eO{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return S.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:en(i.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:GD(i.bundledQuery),readTime:en(i.readTime)}}(n)),S.resolve()}}/**
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
 */class tO{constructor(){this.overlays=new he(L.comparator),this.cr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=wr();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=wr(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new he((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=wr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=wr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new RD(n,r));let s=this.cr.get(n);s===void 0&&(s=H(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
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
 */class Mp{constructor(){this.lr=new Ke(Ae.hr),this.Pr=new Ke(Ae.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Ae(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Ae(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new L(new ne([])),r=new Ae(n,e),i=new Ae(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new L(new ne([])),r=new Ae(n,e),i=new Ae(n,e+1);let s=H();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ae(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ae{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return L.comparator(e.key,n.key)||X(e.mr,n.mr)}static Ir(e,n){return X(e.mr,n.mr)||L.comparator(e.key,n.key)}}/**
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
 */class nO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Ke(Ae.hr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ID(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Ae(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ae(n,0),i=new Ae(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(X);return n.forEach(i=>{const s=new Ae(i,0),o=new Ae(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),S.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Ae(new L(s),0);let a=new Ke(X);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),S.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ie(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return S.forEach(n.mutations,i=>{const s=new Ae(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Ae(n,0),i=this.pr.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rO{constructor(e){this.Dr=e,this.docs=function(){return new he(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ze.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Tn();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Hx(zx(c),r)<=0||(i.has(c.key)||Wu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}vr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iO(this)}getSize(e){return S.resolve(this.size)}}class iO extends YD{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class sO{constructor(e){this.persistence=e,this.Cr=new is(n=>Pp(n),Np),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Mp,this.targetCount=0,this.Or=Bi.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),S.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Bi(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Ln(n),S.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Mr.containsKey(n))}}/**
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
 */class oO{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Sp(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new sO(this),this.indexManager=new QD,this.remoteDocumentCache=function(i){return new rO(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new KD(n),this.Qr=new eO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new nO(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const i=new aO(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return S.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class aO extends Wx{constructor(e){super(),this.currentSequenceNumber=e}}class Up{constructor(e){this.persistence=e,this.Wr=new Mp,this.Gr=null}static zr(e){return new Up(e)}get jr(){if(this.Gr)return this.Gr;throw U()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),S.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.jr,r=>{const i=L.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,b.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return S.or([()=>S.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class Fp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Fp(e,n.fromCache,r,i)}}/**
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
 */class lO{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(R_(n))return S.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Pd(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(e,Pd(n,null,"F")):this.ji(e,u,n,l)}))})))}Ui(e,n,r,i){return R_(n)||i.isEqual(b.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(p_()<=G.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Nd(n)),this.ji(e,o,n,Bx(i,-1)))})}Gi(e,n){let r=new Ke(Zw(e));return n.forEach((i,s)=>{Wu(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return p_()<=G.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Nd(n)),this.Ki.getDocumentsMatchingQuery(e,n,er.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class uO{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new he(X),this.Yi=new is(s=>Pp(s),Np),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZD(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function cO(t,e,n,r){return new uO(t,e,n,r)}async function TT(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function hO(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let m=S.resolve();return d.forEach(_=>{m=m.next(()=>c.getEntry(l,_)).next(y=>{const E=u.docVersions.get(_);ie(E!==null),y.version.compareTo(E)<0&&(h.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),c.addEntry(y)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=H();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function IT(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function dO(t,e){const n=$(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(Ye.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(y,E,p){return y.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,m,c)&&a.push(n.kr.updateTargetData(s,m))});let l=Tn(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(fO(s,o,e.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(b.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function fO(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Tn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(b.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function pO(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mO(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new Fn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Ld(t,e,n){const r=$(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ta(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function L_(t,e,n){const r=$(t);let i=b.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=$(l),d=h.Yi.get(c);return d!==void 0?S.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,wn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:b.min(),n?s:H())).next(a=>(gO(r,lD(e),a),{documents:a,ss:s})))}function gO(t,e,n){let r=t.Zi.get(e)||b.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}class M_{constructor(){this.activeTargetIds=pD()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _O{constructor(){this.Hs=new M_,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new M_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yO{Ys(e){}shutdown(){}}/**
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
 */class U_{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Fa=null;function ih(){return Fa===null?Fa=function(){return 268435456+Math.round(2147483648*Math.random())}():Fa++,"0x"+Fa.toString(16)}/**
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
 */const vO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class EO{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const $e="WebChannelConnection";class wO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=ih(),l=this.mo(n,r);V("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,l,u,i).then(c=>(V("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Ui("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=vO[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,i){const s=ih();return new Promise((o,a)=>{const l=new xx;l.setWithCredentials(!0),l.listenOnce(kx.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case nh.NO_ERROR:const c=l.getResponseJson();V($e,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case nh.TIMEOUT:V($e,`RPC '${e}' ${s} timed out`),a(new N(w.DEADLINE_EXCEEDED,"Request time out"));break;case nh.HTTP_ERROR:const h=l.getStatus();if(V($e,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const _=function(E){const p=E.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(p)>=0?p:w.UNKNOWN}(m.status);a(new N(_,m.message))}else a(new N(w.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new N(w.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{V($e,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);V($e,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=ih(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ax(),a=Cx(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Nx({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");V($e,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,m=!1;const _=new EO({so:E=>{m?V($e,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(V($e,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),V($e,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),y=(E,p,f)=>{E.listen(p,g=>{try{f(g)}catch(v){setTimeout(()=>{throw v},0)}})};return y(h,Va.EventType.OPEN,()=>{m||V($e,`RPC '${e}' stream ${i} transport opened.`)}),y(h,Va.EventType.CLOSE,()=>{m||(m=!0,V($e,`RPC '${e}' stream ${i} transport closed`),_.Po())}),y(h,Va.EventType.ERROR,E=>{m||(m=!0,Ui($e,`RPC '${e}' stream ${i} transport errored:`,E),_.Po(new N(w.UNAVAILABLE,"The operation could not be completed")))}),y(h,Va.EventType.MESSAGE,E=>{var p;if(!m){const f=E.data[0];ie(!!f);const g=f,v=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(v){V($e,`RPC '${e}' stream ${i} received error:`,v);const A=v.status;let C=function(Q){const B=ve[Q];if(B!==void 0)return fT(B)}(A),P=v.message;C===void 0&&(C=w.INTERNAL,P="Unknown error status: "+A+" with message "+v.message),m=!0,_.Po(new N(C,P)),h.close()}else V($e,`RPC '${e}' stream ${i} received:`,f),_.Io(f)}}),y(a,Px.STAT_EVENT,E=>{E.stat===d_.PROXY?V($e,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===d_.NOPROXY&&V($e,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.ho()},0),_}}function sh(){return typeof document<"u"?document:null}/**
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
 */function Xu(t){return new OD(t,!0)}/**
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
 */class RT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class ST{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new RT(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(En(n.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{e(()=>{const i=new N(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TO extends ST{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=MD(this.serializer,e),r=function(s){if(!("targetChange"in s))return b.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?b.min():o.readTime?en(o.readTime):b.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=Vd(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Cd(l)?{documents:bD(s,l)}:{query:$D(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=gT(s,o.resumeToken);const u=xd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(b.min())>0){a.readTime=Zl(s,o.snapshotVersion.toTimestamp());const u=xd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=BD(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=Vd(this.serializer),n.removeTarget=e,this.Ho(n)}}class IO extends ST{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=FD(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.u_(r,n)}return ie(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Vd(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>UD(this.serializer,r))};this.Ho(n)}}/**
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
 */class RO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new N(w.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(w.UNKNOWN,i.toString())})}yo(e,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(w.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class SO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(En(n),this.d_=!1):V("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class AO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Kr(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=$(l);u.y_.add(4),await sa(u),u.b_.set("Unknown"),u.y_.delete(4),await Yu(u)}(this))})}),this.b_=new SO(r,i)}}async function Yu(t){if(Kr(t))for(const e of t.w_)await e(!0)}async function sa(t){for(const e of t.w_)await e(!1)}function AT(t,e){const n=$(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),jp(n)?$p(n):ss(n).Uo()&&bp(n,e))}function CT(t,e){const n=$(t),r=ss(n);n.p_.delete(e),r.Uo()&&kT(n,e),n.p_.size===0&&(r.Uo()?r.zo():Kr(n)&&n.b_.set("Unknown"))}function bp(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(b.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ss(t).i_(e)}function kT(t,e){t.D_.Be(e),ss(t).s_(e)}function $p(t){t.D_=new PD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),ss(t).start(),t.b_.A_()}function jp(t){return Kr(t)&&!ss(t).$o()&&t.p_.size>0}function Kr(t){return $(t).y_.size===0}function PT(t){t.D_=void 0}async function CO(t){t.p_.forEach((e,n)=>{bp(t,e)})}async function kO(t,e){PT(t),jp(t)?(t.b_.m_(e),$p(t)):t.b_.set("Unknown")}async function PO(t,e,n){if(t.b_.set("Online"),e instanceof mT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await eu(t,r)}else if(e instanceof il?t.D_.We(e):e instanceof pT?t.D_.Ze(e):t.D_.je(e),!n.isEqual(b.min()))try{const r=await IT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.p_.get(u);c&&s.p_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.p_.get(l);if(!c)return;s.p_.set(l,c.withResumeToken(Ye.EMPTY_BYTE_STRING,c.snapshotVersion)),kT(s,l);const h=new Fn(c.target,l,u,c.sequenceNumber);bp(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await eu(t,r)}}async function eu(t,e,n){if(!ta(e))throw e;t.y_.add(1),await sa(t),t.b_.set("Offline"),n||(n=()=>IT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Yu(t)})}function NT(t,e){return e().catch(n=>eu(t,n,e))}async function Ju(t){const e=$(t),n=nr(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;NO(e);)try{const i=await pO(e.localStore,r);if(i===null){e.g_.length===0&&n.zo();break}r=i.batchId,xO(e,i)}catch(i){await eu(e,i)}xT(e)&&DT(e)}function NO(t){return Kr(t)&&t.g_.length<10}function xO(t,e){t.g_.push(e);const n=nr(t);n.Uo()&&n.__&&n.a_(e.mutations)}function xT(t){return Kr(t)&&!nr(t).$o()&&t.g_.length>0}function DT(t){nr(t).start()}async function DO(t){nr(t).l_()}async function OO(t){const e=nr(t);for(const n of t.g_)e.a_(n.mutations)}async function VO(t,e,n){const r=t.g_.shift(),i=Dp.from(r,e,n);await NT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ju(t)}async function LO(t,e){e&&nr(t).__&&await async function(r,i){if(function(o){return AD(o)&&o!==w.ABORTED}(i.code)){const s=r.g_.shift();nr(r).Go(),await NT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ju(r)}}(t,e),xT(t)&&DT(t)}async function F_(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Kr(n);n.y_.add(3),await sa(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Yu(n)}async function MO(t,e){const n=$(t);e?(n.y_.delete(2),await Yu(n)):e||(n.y_.add(2),await sa(n),n.b_.set("Unknown"))}function ss(t){return t.v_||(t.v_=function(n,r,i){const s=$(n);return s.P_(),new TO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:CO.bind(null,t),uo:kO.bind(null,t),r_:PO.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),jp(t)?$p(t):t.b_.set("Unknown")):(await t.v_.stop(),PT(t))})),t.v_}function nr(t){return t.C_||(t.C_=function(n,r,i){const s=$(n);return s.P_(),new IO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:DO.bind(null,t),uo:LO.bind(null,t),c_:OO.bind(null,t),u_:VO.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Ju(t)):(await t.C_.stop(),t.g_.length>0&&(V("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
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
 */class Bp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Bp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zp(t,e){if(En("AsyncQueue",`${e}: ${t}`),ta(t))return new N(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ci{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Ns(),this.sortedSet=new he(this.comparator)}static emptySet(e){return new Ci(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ci)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ci;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class b_{constructor(){this.F_=new he(L.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):U():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class zi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zi(e,n,Ci.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class UO{constructor(){this.x_=void 0,this.listeners=[]}}class FO{constructor(){this.queries=new is(e=>Jw(e),qu),this.onlineState="Unknown",this.O_=new Set}}async function Hp(t,e){const n=$(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new UO),i)try{s.x_=await n.onListen(r)}catch(o){const a=zp(o,`Initialization of query '${Nd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&Wp(n)}async function qp(t,e){const n=$(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function bO(t,e){const n=$(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&Wp(n)}function $O(t,e,n){const r=$(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Wp(t){t.O_.forEach(e=>{e.next()})}class Kp{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new zi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=zi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class OT{constructor(e){this.key=e}}class VT{constructor(e){this.key=e}}class jO{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=H(),this.mutatedKeys=H(),this.na=Zw(e),this.ra=new Ci(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new b_,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=Wu(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;d&&m?d.data.isEqual(m.data)?_!==y&&(r.track({type:3,doc:m}),E=!0):this._a(d,m)||(r.track({type:2,doc:m}),E=!0,(l&&this.na(m,l)>0||u&&this.na(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),E=!0):d&&!m&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(m?(o=o.add(m),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,c)=>function(d,m){const _=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return _(d)-_(m)}(u.type,c.type)||this.na(u.doc,c.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new zi(this.query,e.ra,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new b_,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=H(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new VT(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new OT(r))}),n}ha(e){this.X_=e.ss,this.ta=H();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return zi.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class BO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zO{constructor(e){this.key=e,this.Ia=!1}}class HO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new is(a=>Jw(a),qu),this.da=new Map,this.Aa=new Set,this.Ra=new he(L.comparator),this.Va=new Map,this.ma=new Mp,this.fa={},this.ga=new Map,this.pa=Bi.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function qO(t,e){const n=t2(t);let r,i;const s=n.Ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await mO(n.localStore,wn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await WO(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&AT(n.remoteStore,o)}return i}async function WO(t,e,n,r,i){t.wa=(h,d,m)=>async function(y,E,p,f){let g=E.view.sa(p);g.zi&&(g=await L_(y.localStore,E.query,!1).then(({documents:C})=>E.view.sa(C,g)));const v=f&&f.targetChanges.get(E.targetId),A=E.view.applyChanges(g,y.isPrimaryClient,v);return j_(y,E.targetId,A.ca),A.snapshot}(t,h,d,m);const s=await L_(t.localStore,e,!0),o=new jO(e,s.ss),a=o.sa(s.documents),l=ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);j_(t,n,u.ca);const c=new BO(e,n,o);return t.Ea.set(e,c),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),u.snapshot}async function KO(t,e){const n=$(t),r=n.Ea.get(e),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!qu(s,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ld(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),CT(n.remoteStore,r.targetId),Md(n,r.targetId)}).catch(ea)):(Md(n,r.targetId),await Ld(n.localStore,r.targetId,!0))}async function GO(t,e,n){const r=n2(t);try{const i=await function(o,a){const l=$(o),u=ye.now(),c=a.reduce((m,_)=>m.add(_.key),H());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let _=Tn(),y=H();return l.Xi.getEntries(m,c).next(E=>{_=E,_.forEach((p,f)=>{f.isValidDocument()||(y=y.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,_)).next(E=>{h=E;const p=[];for(const f of a){const g=wD(f,h.get(f.key).overlayedDocument);g!=null&&p.push(new ur(f.key,g,zw(g.value.mapValue),Zt.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,p,a)}).next(E=>{d=E;const p=E.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(m,E.batchId,p)})}).then(()=>({batchId:d.batchId,changes:tT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.fa[o.currentUser.toKey()];u||(u=new he(X)),u=u.insert(a,l),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await oa(r,i.changes),await Ju(r.remoteStore)}catch(i){const s=zp(i,"Failed to persist write");n.reject(s)}}async function LT(t,e){const n=$(t);try{const r=await dO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?ie(o.Ia):i.removedDocuments.size>0&&(ie(o.Ia),o.Ia=!1))}),await oa(n,r,e)}catch(r){await ea(r)}}function $_(t,e,n){const r=$(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=$(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&Wp(l)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QO(t,e,n){const r=$(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new he(L.comparator);o=o.insert(s,ze.newNoDocument(s,b.min()));const a=H().add(s),l=new Qu(b.min(),new Map,new he(X),o,a);await LT(r,l),r.Ra=r.Ra.remove(s),r.Va.delete(e),Gp(r)}else await Ld(r.localStore,e,!1).then(()=>Md(r,e,n)).catch(ea)}async function XO(t,e){const n=$(t),r=e.batch.batchId;try{const i=await hO(n.localStore,e);UT(n,r,null),MT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oa(n,i)}catch(i){await ea(i)}}async function YO(t,e,n){const r=$(t);try{const i=await function(o,a){const l=$(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(ie(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);UT(r,e,n),MT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oa(r,i)}catch(i){await ea(i)}}function MT(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function UT(t,e,n){const r=$(t);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function Md(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||FT(t,r)})}function FT(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(CT(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Gp(t))}function j_(t,e,n){for(const r of n)r instanceof OT?(t.ma.addReference(r.key,e),JO(t,r)):r instanceof VT?(V("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||FT(t,r.key)):U()}function JO(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(V("SyncEngine","New document in limbo: "+n),t.Aa.add(r),Gp(t))}function Gp(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new L(ne.fromString(e)),r=t.pa.next();t.Va.set(r,new zO(n)),t.Ra=t.Ra.insert(n,r),AT(t.remoteStore,new Fn(wn(Hu(n.path)),r,"TargetPurposeLimboResolution",Sp.ae))}}async function oa(t,e,n){const r=$(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Fp.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(l,u){const c=$(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(u,d=>S.forEach(d.Li,m=>c.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>S.forEach(d.ki,m=>c.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!ta(h))throw h;V("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const m=c.Ji.get(d),_=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(_);c.Ji=c.Ji.insert(d,y)}}}(r.localStore,s))}async function ZO(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await TT(n.localStore,e);n.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new N(w.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oa(n,r.ts)}}function e2(t,e){const n=$(t),r=n.Va.get(e);if(r&&r.Ia)return H().add(r.key);{let i=H();const s=n.da.get(e);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function t2(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=LT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=e2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QO.bind(null,e),e.Ta.r_=bO.bind(null,e.eventManager),e.Ta.Sa=$O.bind(null,e.eventManager),e}function n2(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YO.bind(null,e),e}class B_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Xu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return cO(this.persistence,new lO,e.initialUser,this.serializer)}createPersistence(e){return new oO(Up.zr,this.serializer)}createSharedClientState(e){return new _O}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class r2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZO.bind(null,this.syncEngine),await MO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FO}()}createDatastore(e){const n=Xu(e.databaseInfo.databaseId),r=function(s){return new wO(s)}(e.databaseInfo);return function(s,o,a,l){return new RO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new AO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>$_(this.syncEngine,n,0),function(){return U_.v()?new U_:new yO}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new HO(i,s,o,a,l,u);return c&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=$(n);V("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await sa(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Qp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):En("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class i2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=je.UNAUTHENTICATED,this.clientId=$w.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{V("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(V("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function oh(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await TT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function z_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await o2(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>F_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>F_(e.remoteStore,s)),t._onlineComponents=e}function s2(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function o2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await oh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!s2(n))throw n;Ui("Error using user provided cache. Falling back to memory cache: "+n),await oh(t,new B_)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await oh(t,new B_);return t._offlineComponents}async function bT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await z_(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await z_(t,new r2))),t._onlineComponents}function a2(t){return bT(t).then(e=>e.syncEngine)}async function tu(t){const e=await bT(t),n=e.eventManager;return n.onListen=qO.bind(null,e.syncEngine),n.onUnlisten=KO.bind(null,e.syncEngine),n}function l2(t,e,n={}){const r=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Qp({next:d=>{o.enqueueAndForget(()=>qp(s,h));const m=d.docs.has(a);!m&&d.fromCache?u.reject(new N(w.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&l&&l.source==="server"?u.reject(new N(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Kp(Hu(a.path),c,{includeMetadataChanges:!0,W_:!0});return Hp(s,h)}(await tu(t),t.asyncQueue,e,n,r)),r.promise}function u2(t,e,n={}){const r=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Qp({next:d=>{o.enqueueAndForget(()=>qp(s,h)),d.fromCache&&l.source==="server"?u.reject(new N(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Kp(a,c,{includeMetadataChanges:!0,W_:!0});return Hp(s,h)}(await tu(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function $T(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const H_=new Map;/**
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
 */function jT(t,e,n){if(!n)throw new N(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function c2(t,e,n,r){if(e===!0&&r===!0)throw new N(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function q_(t){if(!L.isDocumentKey(t))throw new N(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function W_(t){if(L.isDocumentKey(t))throw new N(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function Ct(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zu(t);throw new N(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class K_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new N(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}c2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$T((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ec{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new K_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new K_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ox;switch(r.type){case"firstParty":return new Ux(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=H_.get(n);r&&(V("ComponentProvider","Removing Datastore"),H_.delete(n),r.terminate())}(this),Promise.resolve()}}function h2(t,e,n,r={}){var i;const s=(t=Ct(t,ec))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ui("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=je.MOCK_USER;else{a=P0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new N(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new je(u)}t._authCredentials=new Vx(new bw(a,l))}}/**
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
 */class Gr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gr(this.firestore,e,this._query)}}class Ge{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}}class Xn extends Gr{constructor(e,n,r){super(e,n,Hu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new L(e))}withConverter(e){return new Xn(this.firestore,e,this._path)}}function d2(t,e,...n){if(t=ae(t),jT("collection","path",e),t instanceof ec){const r=ne.fromString(e,...n);return W_(r),new Xn(t,null,r)}{if(!(t instanceof Ge||t instanceof Xn))throw new N(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return W_(r),new Xn(t.firestore,null,r)}}function St(t,e,...n){if(t=ae(t),arguments.length===1&&(e=$w.V()),jT("doc","path",e),t instanceof ec){const r=ne.fromString(e,...n);return q_(r),new Ge(t,null,new L(r))}{if(!(t instanceof Ge||t instanceof Xn))throw new N(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return q_(r),new Ge(t.firestore,t instanceof Xn?t.converter:null,new L(r))}}/**
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
 */class f2{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new RT(this,"async_queue_retry"),this.Xa=()=>{const n=sh();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=sh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=sh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new fn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!ta(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw En("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=Bp.createAndSchedule(this,e,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&U()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function G_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class $r extends ec{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new f2}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||BT(this),this._firestoreClient.terminate()}}function p2(t,e){const n=typeof t=="object"?t:jf(),r=typeof t=="string"?t:e||"(default)",i=Iu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=A0("firestore");s&&h2(i,...s)}return i}function tc(t){return t._firestoreClient||BT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function BT(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new Qx(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,$T(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new i2(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hi(Ye.fromBase64String(e))}catch(n){throw new N(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hi(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class nc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class aa{constructor(e){this._methodName=e}}/**
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
 */class Xp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
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
 */const m2=/^__.*__$/;class g2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new ra(e,this.data,n,this.fieldTransforms)}}class zT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function HT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class rc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new rc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return nu(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(HT(this.uu)&&m2.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class _2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xu(e)}Ru(e,n,r,i=!1){return new rc({uu:e,methodName:n,Au:r,path:He.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yp(t){const e=t._freezeSettings(),n=Xu(t._databaseId);return new _2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function y2(t,e,n,r,i,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,i);Zp("Data must be an object, but it was:",o,r);const a=qT(r,o);let l,u;if(s.merge)l=new mt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Ud(e,h,n);if(!o.contains(d))throw new N(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);KT(c,d)||c.push(d)}l=new mt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new g2(new ot(a),l,u)}class ic extends aa{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ic}}function v2(t,e,n){return new rc({uu:3,Au:e.settings.Au,methodName:t._methodName,hu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Jp extends aa{_toFieldTransform(e){return new uT(e.path,new Po)}isEqual(e){return e instanceof Jp}}class E2 extends aa{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=v2(this,e,!0),r=this.Vu.map(s=>os(s,n)),i=new ji(r);return new uT(e.path,i)}isEqual(e){return this===e}}function w2(t,e,n,r){const i=t.Ru(1,e,n);Zp("Data must be an object, but it was:",i,r);const s=[],o=ot.empty();Wr(r,(l,u)=>{const c=em(e,l,n);u=ae(u);const h=i.Iu(c);if(u instanceof ic)s.push(c);else{const d=os(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new mt(s);return new zT(o,a,i.fieldTransforms)}function T2(t,e,n,r,i,s){const o=t.Ru(1,e,n),a=[Ud(e,r,n)],l=[i];if(s.length%2!=0)throw new N(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Ud(e,s[d])),l.push(s[d+1]);const u=[],c=ot.empty();for(let d=a.length-1;d>=0;--d)if(!KT(u,a[d])){const m=a[d];let _=l[d];_=ae(_);const y=o.Iu(m);if(_ instanceof ic)u.push(m);else{const E=os(_,y);E!=null&&(u.push(m),c.set(m,E))}}const h=new mt(u);return new zT(c,h,o.fieldTransforms)}function I2(t,e,n,r=!1){return os(n,t.Ru(r?4:3,e))}function os(t,e){if(WT(t=ae(t)))return Zp("Unsupported field value:",e,t),qT(t,e);if(t instanceof aa)return function(r,i){if(!HT(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=os(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ye.fromDate(r);return{timestampValue:Zl(i.serializer,s)}}if(r instanceof ye){const s=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zl(i.serializer,s)}}if(r instanceof Xp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hi)return{bytesValue:gT(i.serializer,r._byteString)};if(r instanceof Ge){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Lp(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${Zu(r)}`)}(t,e)}function qT(t,e){const n={};return jw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wr(t,(r,i)=>{const s=os(i,e.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function WT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof Xp||t instanceof Hi||t instanceof Ge||t instanceof aa)}function Zp(t,e,n){if(!WT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Zu(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function Ud(t,e,n){if((e=ae(e))instanceof nc)return e._internalPath;if(typeof e=="string")return em(t,e);throw nu("Field path arguments must be of type string or ",t,!1,void 0,n)}const R2=new RegExp("[~\\*/\\[\\]]");function em(t,e,n){if(e.search(R2)>=0)throw nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nc(...e.split("."))._internalPath}catch{throw nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new N(w.INVALID_ARGUMENT,a+t+l)}function KT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class GT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new S2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class S2 extends GT{data(){return super.data()}}function tm(t,e){return typeof e=="string"?em(t,e):e instanceof nc?e._internalPath:e._delegate._internalPath}/**
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
 */function QT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new N(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nm{}class A2 extends nm{}function C2(t,e,...n){let r=[];e instanceof nm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof rm).length,a=s.filter(l=>l instanceof sc).length;if(o>1||o>0&&a>0)throw new N(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class sc extends A2{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new sc(e,n,r)}_apply(e){const n=this._parse(e);return XT(e._query,n),new Gr(e.firestore,e.converter,kd(e._query,n))}_parse(e){const n=Yp(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new N(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){X_(h,c);const m=[];for(const _ of h)m.push(Q_(l,s,_));d={arrayValue:{values:m}}}else d=Q_(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||X_(h,c),d=I2(a,o,h,c==="in"||c==="not-in");return Te.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function k2(t,e,n){const r=e,i=tm("where",t);return sc._create(i,r,n)}class rm extends nm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new rm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:$t.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)XT(o,l),o=kd(o,l)}(e._query,n),new Gr(e.firestore,e.converter,kd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Q_(t,e,n){if(typeof(n=ae(n))=="string"){if(n==="")throw new N(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yw(e)&&n.indexOf("/")!==-1)throw new N(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ne.fromString(n));if(!L.isDocumentKey(r))throw new N(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return y_(t,new L(r))}if(n instanceof Ge)return y_(t,n._key);throw new N(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zu(n)}.`)}function X_(t,e){if(!Array.isArray(t)||t.length===0)throw new N(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function XT(t,e){if(e.isInequality()){const r=xp(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new N(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Xw(t);s!==null&&P2(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new N(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function P2(t,e,n){if(!n.isEqual(e))throw new N(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class N2{convertValue(e,n="none"){switch(br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Wr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Xp(Ee(e.latitude),Ee(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Cp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ao(e));default:return null}}convertTimestamp(e){const n=tr(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ne.fromString(e);ie(wT(r));const i=new Co(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||En(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function x2(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ds{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class YT extends GT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(tm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class sl extends YT{data(e={}){return super.data(e)}}class JT{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ds(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new sl(this._firestore,this._userDataWriter,r.key,r,new Ds(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new sl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ds(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new sl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ds(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:D2(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function D2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
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
 */function O2(t){t=Ct(t,Ge);const e=Ct(t.firestore,$r);return l2(tc(e),t._key).then(n=>tI(e,t,n))}class im extends N2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function V2(t){t=Ct(t,Gr);const e=Ct(t.firestore,$r),n=tc(e),r=new im(e);return QT(t._query),u2(n,t._query).then(i=>new JT(e,r,t,i))}function Fd(t,e,n){t=Ct(t,Ge);const r=Ct(t.firestore,$r),i=x2(t.converter,e,n);return eI(r,[y2(Yp(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Zt.none())])}function mi(t,e,n,...r){t=Ct(t,Ge);const i=Ct(t.firestore,$r),s=Yp(i);let o;return o=typeof(e=ae(e))=="string"||e instanceof nc?T2(s,"updateDoc",t._key,e,n,r):w2(s,"updateDoc",t._key,e),eI(i,[o.toMutation(t._key,Zt.exists(!0))])}function ZT(t,...e){var n,r,i;t=ae(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||G_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(G_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Ge)u=Ct(t.firestore,$r),c=Hu(t._key.path),l={next:h=>{e[o]&&e[o](tI(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ct(t,Gr);u=Ct(h.firestore,$r),c=h._query;const d=new im(u);l={next:m=>{e[o]&&e[o](new JT(u,d,h,m))},error:e[o+1],complete:e[o+2]},QT(t._query)}return function(d,m,_,y){const E=new Qp(y),p=new Kp(m,E,_);return d.asyncQueue.enqueueAndForget(async()=>Hp(await tu(d),p)),()=>{E.Ca(),d.asyncQueue.enqueueAndForget(async()=>qp(await tu(d),p))}}(tc(u),c,a,l)}function eI(t,e){return function(r,i){const s=new fn;return r.asyncQueue.enqueueAndForget(async()=>GO(await a2(r),i,s)),s.promise}(tc(t),e)}function tI(t,e,n){const r=n.docs.get(e._key),i=new im(t);return new YT(t,i,e._key,r,new Ds(n.hasPendingWrites,n.fromCache),e.converter)}function ru(){return new Jp("serverTimestamp")}function Y_(...t){return new E2("arrayUnion",t)}(function(e,n=!0){(function(i){rs=i})(zr),Or(new Zn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new $r(new Lx(r.getProvider("auth-internal")),new bx(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new N(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Co(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Xt(f_,"4.1.0",e),Xt(f_,"4.1.0","esm2017")})();const L2={apiKey:"AIzaSyBM2PzbtV_v00B99gSUh40Me0m_kRdvO9k",authDomain:"chat-9d966.firebaseapp.com",projectId:"chat-9d966",storageBucket:"chat-9d966.appspot.com",messagingSenderId:"739372611284",appId:"1:739372611284:web:3e1eb79a85b525bf38ed41"};D0(L2);const oc=hP(),nI=TN(),dt=p2(),M2="/assets/add-a-photo-0c3bcebe.svg",U2=()=>{const[t,e]=I.useState(!1),n=wu(),r=async i=>{i.preventDefault();const s=i.target[0].value,o=i.target[1].value;try{await KC(oc,s,o),n("/")}catch{e(!0)}};return T.jsx("div",{className:"ws-form-container",children:T.jsxs("div",{className:"ws-form-wrapper",children:[T.jsx("span",{className:"ws-logo",children:"West Chat"}),T.jsx("span",{className:"ws-title",children:"Login"}),T.jsxs("form",{onSubmit:r,children:[T.jsx("input",{type:"email",name:"",id:"",placeholder:"email"}),T.jsx("input",{type:"password",name:"",id:"",placeholder:"password"}),T.jsx("button",{children:"Log in"}),t&&T.jsx("span",{children:"Something went wrong"})]}),T.jsxs("p",{children:["Don't have an account? ",T.jsx(w0,{to:"/register",children:"Sign up"})]})]})})},F2=()=>{const[t,e]=I.useState(!1),[n,r]=I.useState(!1),i=wu(),s=async o=>{r(!0),o.preventDefault();const a=o.target[0].value,l=o.target[1].value,u=o.target[2].value,c=o.target[3].files[0];try{const h=await WC(oc,l,u),d=new Date().getTime(),m=ME(nI,`${a+d}`);await VE(m,c).then(()=>{LE(m).then(async _=>{try{await QC(h.user,{displayName:a,photoURL:_}),await Fd(St(dt,"users",h.user.uid),{uid:h.user.uid,displayName:a,email:l,password:u,photoURL:_}),await Fd(St(dt,"userChats",h.user.uid),{}),i("/")}catch(y){console.log(y),e(!0),r(!1)}})})}catch{e(!0),r(!1)}};return T.jsx("div",{className:"ws-form-container",children:T.jsxs("div",{className:"ws-form-wrapper",children:[T.jsx("span",{className:"ws-logo",children:"West Chat"}),T.jsx("span",{className:"ws-title",children:"Register"}),T.jsxs("form",{onSubmit:s,children:[T.jsx("input",{type:"text",name:"",id:"",placeholder:"display name"}),T.jsx("input",{type:"email",name:"",id:"",placeholder:"email"}),T.jsx("input",{type:"password",name:"",id:"",placeholder:"password"}),T.jsx("input",{style:{display:"none"},type:"file",name:"",id:"file"}),T.jsxs("label",{htmlFor:"file",children:[T.jsx("img",{src:M2,alt:""}),T.jsx("span",{children:"Add an avatar"})]}),T.jsx("button",{disabled:n,children:"Sign Up"}),n&&"Uploading and compressing the image please wait...",t&&T.jsx("span",{children:"Something went wrong"})]}),T.jsxs("p",{children:["Have an account? ",T.jsx(w0,{to:"/login",children:"Log in"})]})]})})},cr=I.createContext(),b2=({children:t})=>{const[e,n]=I.useState({});return I.useEffect(()=>{const r=JC(oc,i=>{n(i),console.log(i)});return()=>{r()}},[]),T.jsx(cr.Provider,{value:{currentUser:e},children:t})},$2=()=>{const{currentUser:t}=I.useContext(cr);return T.jsxs("div",{className:"ws-navbar",children:[T.jsx("span",{className:"ws-logo",children:"West Chat"}),T.jsxs("div",{className:"ws-user",children:[T.jsx("img",{src:t.photoURL,alt:""}),T.jsx("span",{children:t.displayName}),T.jsx("button",{onClick:()=>ZC(oc),children:"Log out"})]})]})},j2=()=>{const[t,e]=I.useState(""),[n,r]=I.useState(null),[i,s]=I.useState(!1),{currentUser:o}=I.useContext(cr),a=async()=>{const c=C2(d2(dt,"users"),k2("displayName","==",t));try{(await V2(c)).forEach(d=>{r(d.data())})}catch{s(!0)}},l=c=>{c.code==="Enter"&&a()},u=async()=>{const c=o.uid>n.uid?o.uid+n.uid:n.uid+o.uid;try{(await O2(St(dt,"chats",c))).exists()||(await Fd(St(dt,"chats",c),{messages:[]}),await mi(St(dt,"userChats",o.uid),{[c+".userInfo"]:{uid:n.uid,displayName:n.displayName,photoURL:n.photoURL},[c+".date"]:ru()}),await mi(St(dt,"userChats",n.uid),{[c+".userInfo"]:{uid:o.uid,displayName:o.displayName,photoURL:o.photoURL},[c+".date"]:ru()}))}catch{}r(null),e("")};return T.jsxs("div",{className:"ws-search",children:[T.jsx("div",{className:"ws-search-form",children:T.jsx("input",{type:"text",placeholder:"Find a chat",onKeyDown:l,onChange:c=>e(c.target.value),value:t})}),i&&T.jsx("span",{children:"User not found!"}),n&&T.jsxs("div",{className:"ws-user-chat",onClick:u,children:[T.jsx("img",{src:n.photoURL,alt:""}),T.jsx("div",{className:"ws-user-chat-info",children:T.jsx("span",{children:n.displayName})})]})]})},as=I.createContext(),B2=({children:t})=>{const{currentUser:e}=I.useContext(cr),n={chatId:"null",user:{}},r=(o,a)=>{switch(a.type){case"CHANGE_USER":return{user:a.payload,chatId:e.uid>a.payload.uid?e.uid+a.payload.uid:a.payload.uid+e.uid};default:return o}},[i,s]=I.useReducer(r,n);return T.jsx(as.Provider,{value:{data:i,dispatch:s},children:t})},z2=()=>{var s;const[t,e]=I.useState([]),{currentUser:n}=I.useContext(cr),{dispatch:r}=I.useContext(as);I.useEffect(()=>{const o=()=>{const a=ZT(St(dt,"userChats",n.uid),l=>{e(l.data())});return()=>{a()}};n.uid&&o()},[n.uid]);const i=o=>{r({type:"CHANGE_USER",payload:o})};return T.jsx("div",{className:"ws-chats",children:(s=Object.entries(t))==null?void 0:s.sort((o,a)=>a[1].date-o[1].date).map(o=>{var a;return T.jsxs("div",{className:"ws-user-chat",onClick:()=>i(o[1].userInfo),children:[T.jsx("img",{src:o[1].userInfo.photoURL,alt:""}),T.jsxs("div",{className:"ws-user-chat-info",children:[T.jsx("span",{children:o[1].userInfo.displayName}),T.jsx("p",{children:(a=o[1].lastMessage)==null?void 0:a.text})]})]},o[0])})})},H2=()=>T.jsxs("div",{className:"ws-sidebar",children:[T.jsx($2,{}),T.jsx(j2,{}),T.jsx(z2,{})]}),q2=({message:t})=>{const{currentUser:e}=I.useContext(cr),{data:n}=I.useContext(as),r=I.useRef();return I.useEffect(()=>{var i;(i=r.current)==null||i.scrollIntoView({behavior:"smooth"})},[t]),T.jsxs("div",{ref:r,className:`ws-message ${t.senderId===e.uid&&"ws-owner"}`,children:[T.jsxs("div",{className:"ws-message-info",children:[T.jsx("img",{src:t.senderId===e.uid?e.photoURL:n.user.photoURL,alt:""}),T.jsx("span",{children:"just now"})]}),T.jsxs("div",{className:"ws-message-content",children:[T.jsx("p",{children:t.text}),t.img&&T.jsx("img",{src:t.img,alt:""})]})]})},W2=()=>{const[t,e]=I.useState([]),{data:n}=I.useContext(as);return I.useEffect(()=>{const r=ZT(St(dt,"chats",n.chatId),i=>{i.exists()&&e(i.data().messages)});return()=>{r()}},[n.chatId]),T.jsx("div",{className:"ws-messages",children:t.map(r=>T.jsx(q2,{message:r},r.id))})},K2="/assets/image-25fd6095.svg";let ba;const G2=new Uint8Array(16);function Q2(){if(!ba&&(ba=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ba))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ba(G2)}const xe=[];for(let t=0;t<256;++t)xe.push((t+256).toString(16).slice(1));function X2(t,e=0){return(xe[t[e+0]]+xe[t[e+1]]+xe[t[e+2]]+xe[t[e+3]]+"-"+xe[t[e+4]]+xe[t[e+5]]+"-"+xe[t[e+6]]+xe[t[e+7]]+"-"+xe[t[e+8]]+xe[t[e+9]]+"-"+xe[t[e+10]]+xe[t[e+11]]+xe[t[e+12]]+xe[t[e+13]]+xe[t[e+14]]+xe[t[e+15]]).toLowerCase()}const Y2=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),J_={randomUUID:Y2};function ah(t,e,n){if(J_.randomUUID&&!e&&!t)return J_.randomUUID();t=t||{};const r=t.random||(t.rng||Q2)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return X2(r)}const J2=()=>{const[t,e]=I.useState(""),[n,r]=I.useState(null),{currentUser:i}=I.useContext(cr),{data:s}=I.useContext(as),o=async()=>{if(n){const a=ME(nI,ah()),l=VE(a,n);l.on(u=>{},()=>{LE(l.snapshot.ref).then(async u=>{await mi(St(dt,"chats",s.chatId),{messages:Y_({id:ah(),text:t,senderId:i.uid,date:ye.now(),img:u})})})})}else await mi(St(dt,"chats",s.chatId),{messages:Y_({id:ah(),text:t,senderId:i.uid,date:ye.now()})});await mi(St(dt,"userChats",i.uid),{[s.chatId+".lastMessage"]:{text:t},[s.chatId+".date"]:ru()}),await mi(St(dt,"userChats",s.user.uid),{[s.chatId+".lastMessage"]:{text:t},[s.chatId+".date"]:ru()}),e(""),r(null)};return T.jsxs("div",{className:"ws-input",children:[T.jsx("input",{type:"text",name:"",id:"",placeholder:"Type something",onChange:a=>e(a.target.value),value:t}),T.jsxs("div",{className:"ws-send",children:[T.jsx("input",{type:"file",style:{display:"none"},id:"file",onChange:a=>r(a.target.files[0])}),T.jsx("label",{htmlFor:"file",children:T.jsx("img",{src:K2,alt:""})}),T.jsx("button",{onClick:o,children:"Send"})]})]})},Z2=()=>{var e;const{data:t}=I.useContext(as);return T.jsxs("div",{className:"ws-chat",children:[T.jsxs("div",{className:"ws-chat-info",children:[T.jsx("span",{children:(e=t.user)==null?void 0:e.displayName}),T.jsxs("div",{className:"ws-chat-icons",children:[T.jsx("img",{src:"",alt:""}),T.jsx("img",{src:"",alt:""}),T.jsx("img",{src:"",alt:""})]})]}),T.jsx(W2,{}),T.jsx(J2,{})]})},eV=()=>T.jsx("div",{className:"ws-home",children:T.jsxs("div",{className:"ws-container",children:[T.jsx(H2,{}),T.jsx(Z2,{})]})});function tV(){const{currentUser:t}=I.useContext(cr),e=({children:n})=>t?n:T.jsx(yS,{to:"/login"});return T.jsx(AS,{children:T.jsx(ES,{children:T.jsxs(Ss,{path:"/",children:[T.jsx(Ss,{index:!0,element:T.jsx(e,{children:T.jsx(eV,{})})}),T.jsx(Ss,{path:"login",element:T.jsx(U2,{})}),T.jsx(Ss,{path:"register",element:T.jsx(F2,{})})]})})})}lh.createRoot(document.getElementById("root")).render(T.jsx(b2,{children:T.jsx(B2,{children:T.jsx(ly.StrictMode,{children:T.jsx(tV,{})})})}));
