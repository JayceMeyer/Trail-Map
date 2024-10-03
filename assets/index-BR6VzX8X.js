(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function u5(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qp={exports:{}},Aa={},Kp={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=Symbol.for("react.element"),c5=Symbol.for("react.portal"),h5=Symbol.for("react.fragment"),d5=Symbol.for("react.strict_mode"),f5=Symbol.for("react.profiler"),p5=Symbol.for("react.provider"),g5=Symbol.for("react.context"),m5=Symbol.for("react.forward_ref"),y5=Symbol.for("react.suspense"),v5=Symbol.for("react.memo"),x5=Symbol.for("react.lazy"),ed=Symbol.iterator;function _5(t){return t===null||typeof t!="object"?null:(t=ed&&t[ed]||t["@@iterator"],typeof t=="function"?t:null)}var Zp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gp=Object.assign,Jp={};function ur(t,e,n){this.props=t,this.context=e,this.refs=Jp,this.updater=n||Zp}ur.prototype.isReactComponent={};ur.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ur.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qp(){}qp.prototype=ur.prototype;function xc(t,e,n){this.props=t,this.context=e,this.refs=Jp,this.updater=n||Zp}var _c=xc.prototype=new qp;_c.constructor=xc;Gp(_c,ur.prototype);_c.isPureReactComponent=!0;var nd=Array.isArray,t0=Object.prototype.hasOwnProperty,bc={current:null},e0={key:!0,ref:!0,__self:!0,__source:!0};function n0(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)t0.call(e,i)&&!e0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:zo,type:t,key:o,ref:s,props:r,_owner:bc.current}}function b5(t,e){return{$$typeof:zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wc(t){return typeof t=="object"&&t!==null&&t.$$typeof===zo}function w5(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var id=/\/+/g;function pl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?w5(""+t.key):e.toString(36)}function Ds(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case zo:case c5:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+pl(s,0):i,nd(r)?(n="",t!=null&&(n=t.replace(id,"$&/")+"/"),Ds(r,e,n,"",function(u){return u})):r!=null&&(wc(r)&&(r=b5(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(id,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",nd(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+pl(o,a);s+=Ds(o,e,n,l,r)}else if(l=_5(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+pl(o,a++),s+=Ds(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Jo(t,e,n){if(t==null)return t;var i=[],r=0;return Ds(t,i,"","",function(o){return e.call(n,o,r++)}),i}function k5(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},Os={transition:null},S5={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Os,ReactCurrentOwner:bc};function i0(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:Jo,forEach:function(t,e,n){Jo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Jo(t,function(){e++}),e},toArray:function(t){return Jo(t,function(e){return e})||[]},only:function(t){if(!wc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=ur;K.Fragment=h5;K.Profiler=f5;K.PureComponent=xc;K.StrictMode=d5;K.Suspense=y5;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S5;K.act=i0;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Gp({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=bc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)t0.call(e,l)&&!e0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:zo,type:t.type,key:r,ref:o,props:i,_owner:s}};K.createContext=function(t){return t={$$typeof:g5,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:p5,_context:t},t.Consumer=t};K.createElement=n0;K.createFactory=function(t){var e=n0.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:m5,render:t}};K.isValidElement=wc;K.lazy=function(t){return{$$typeof:x5,_payload:{_status:-1,_result:t},_init:k5}};K.memo=function(t,e){return{$$typeof:v5,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Os.transition;Os.transition={};try{t()}finally{Os.transition=e}};K.unstable_act=i0;K.useCallback=function(t,e){return Xt.current.useCallback(t,e)};K.useContext=function(t){return Xt.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};K.useEffect=function(t,e){return Xt.current.useEffect(t,e)};K.useId=function(){return Xt.current.useId()};K.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return Xt.current.useMemo(t,e)};K.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};K.useRef=function(t){return Xt.current.useRef(t)};K.useState=function(t){return Xt.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return Xt.current.useTransition()};K.version="18.3.1";Kp.exports=K;var cr=Kp.exports;const r0=u5(cr);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E5=cr,M5=Symbol.for("react.element"),C5=Symbol.for("react.fragment"),T5=Object.prototype.hasOwnProperty,P5=E5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D5={key:!0,ref:!0,__self:!0,__source:!0};function o0(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)T5.call(e,i)&&!D5.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:M5,type:t,key:o,ref:s,props:r,_owner:P5.current}}Aa.Fragment=C5;Aa.jsx=o0;Aa.jsxs=o0;Qp.exports=Aa;var Oe=Qp.exports,s0={exports:{}},fe={},a0={exports:{}},l0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,I){var R=D.length;D.push(I);t:for(;0<R;){var Y=R-1>>>1,X=D[Y];if(0<r(X,I))D[Y]=I,D[R]=X,R=Y;else break t}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var I=D[0],R=D.pop();if(R!==I){D[0]=R;t:for(var Y=0,X=D.length,Pt=X>>>1;Y<Pt;){var st=2*(Y+1)-1,$t=D[st],bt=st+1,rt=D[bt];if(0>r($t,R))bt<X&&0>r(rt,$t)?(D[Y]=rt,D[bt]=R,Y=bt):(D[Y]=$t,D[st]=R,Y=st);else if(bt<X&&0>r(rt,R))D[Y]=rt,D[bt]=R,Y=bt;else break t}}return I}function r(D,I){var R=D.sortIndex-I.sortIndex;return R!==0?R:D.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,y=!1,p=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var I=n(u);I!==null;){if(I.callback===null)i(u);else if(I.startTime<=D)i(u),I.sortIndex=I.expirationTime,e(l,I);else break;I=n(u)}}function b(D){if(p=!1,x(D),!y)if(n(l)!==null)y=!0,H(S);else{var I=n(u);I!==null&&et(b,I.startTime-D)}}function S(D,I){y=!1,p&&(p=!1,m(M),M=-1),f=!0;var R=d;try{for(x(I),h=n(l);h!==null&&(!(h.expirationTime>I)||D&&!z());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,d=h.priorityLevel;var X=Y(h.expirationTime<=I);I=t.unstable_now(),typeof X=="function"?h.callback=X:h===n(l)&&i(l),x(I)}else i(l);h=n(l)}if(h!==null)var Pt=!0;else{var st=n(u);st!==null&&et(b,st.startTime-I),Pt=!1}return Pt}finally{h=null,d=R,f=!1}}var E=!1,C=null,M=-1,O=5,P=-1;function z(){return!(t.unstable_now()-P<O)}function F(){if(C!==null){var D=t.unstable_now();P=D;var I=!0;try{I=C(!0,D)}finally{I?U():(E=!1,C=null)}}else E=!1}var U;if(typeof v=="function")U=function(){v(F)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,B=tt.port2;tt.port1.onmessage=F,U=function(){B.postMessage(null)}}else U=function(){w(F,0)};function H(D){C=D,E||(E=!0,U())}function et(D,I){M=w(function(){D(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||f||(y=!0,H(S))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var I=3;break;default:I=d}var R=d;d=I;try{return D()}finally{d=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,I){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var R=d;d=D;try{return I()}finally{d=R}},t.unstable_scheduleCallback=function(D,I,R){var Y=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Y+R:Y):R=Y,D){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=R+X,D={id:c++,callback:I,priorityLevel:D,startTime:R,expirationTime:X,sortIndex:-1},R>Y?(D.sortIndex=R,e(u,D),n(l)===null&&D===n(u)&&(p?(m(M),M=-1):p=!0,et(b,R-Y))):(D.sortIndex=X,e(l,D),y||f||(y=!0,H(S))),D},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(D){var I=d;return function(){var R=d;d=I;try{return D.apply(this,arguments)}finally{d=R}}}})(l0);a0.exports=l0;var O5=a0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L5=cr,de=O5;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u0=new Set,so={};function Si(t,e){qi(t,e),qi(t+"Capture",e)}function qi(t,e){for(so[t]=e,t=0;t<e.length;t++)u0.add(e[t])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=Object.prototype.hasOwnProperty,$5=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rd={},od={};function A5(t){return iu.call(od,t)?!0:iu.call(rd,t)?!1:$5.test(t)?od[t]=!0:(rd[t]=!0,!1)}function z5(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R5(t,e,n,i){if(e===null||typeof e>"u"||z5(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Rt[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Rt[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Rt[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Rt[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Rt[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Rt[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Rt[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Rt[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Rt[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var kc=/[\-:]([a-z])/g;function Sc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kc,Sc);Rt[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kc,Sc);Rt[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kc,Sc);Rt[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Rt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Rt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ec(t,e,n,i){var r=Rt.hasOwnProperty(e)?Rt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(R5(e,n,r,i)&&(n=null),i||r===null?A5(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var mn=L5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=Symbol.for("react.element"),Li=Symbol.for("react.portal"),$i=Symbol.for("react.fragment"),Mc=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),h0=Symbol.for("react.context"),Cc=Symbol.for("react.forward_ref"),ou=Symbol.for("react.suspense"),su=Symbol.for("react.suspense_list"),Tc=Symbol.for("react.memo"),En=Symbol.for("react.lazy"),d0=Symbol.for("react.offscreen"),sd=Symbol.iterator;function vr(t){return t===null||typeof t!="object"?null:(t=sd&&t[sd]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,gl;function Lr(t){if(gl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gl=e&&e[1]||""}return`
`+gl+t}var ml=!1;function yl(t,e){if(!t||ml)return"";ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{ml=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Lr(t):""}function I5(t){switch(t.tag){case 5:return Lr(t.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return t=yl(t.type,!1),t;case 11:return t=yl(t.type.render,!1),t;case 1:return t=yl(t.type,!0),t;default:return""}}function au(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $i:return"Fragment";case Li:return"Portal";case ru:return"Profiler";case Mc:return"StrictMode";case ou:return"Suspense";case su:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case h0:return(t.displayName||"Context")+".Consumer";case c0:return(t._context.displayName||"Context")+".Provider";case Cc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tc:return e=t.displayName||null,e!==null?e:au(t.type)||"Memo";case En:e=t._payload,t=t._init;try{return au(t(e))}catch{}}return null}function N5(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return au(e);case 8:return e===Mc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Un(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function f0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function F5(t){var e=f0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ts(t){t._valueTracker||(t._valueTracker=F5(t))}function p0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=f0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Js(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lu(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ad(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Un(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function g0(t,e){e=e.checked,e!=null&&Ec(t,"checked",e,!1)}function uu(t,e){g0(t,e);var n=Un(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cu(t,e.type,n):e.hasOwnProperty("defaultValue")&&cu(t,e.type,Un(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ld(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cu(t,e,n){(e!=="number"||Js(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $r=Array.isArray;function Hi(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Un(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function hu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ud(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if($r(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Un(n)}}function m0(t,e){var n=Un(e.value),i=Un(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function cd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function y0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function du(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?y0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var es,v0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(es=es||document.createElement("div"),es.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=es.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},j5=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(t){j5.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vr[e]=Vr[t]})});function x0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vr.hasOwnProperty(t)&&Vr[t]?(""+e).trim():e+"px"}function _0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=x0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var B5=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fu(t,e){if(e){if(B5[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function pu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gu=null;function Pc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mu=null,Ui=null,Yi=null;function hd(t){if(t=No(t)){if(typeof mu!="function")throw Error($(280));var e=t.stateNode;e&&(e=Fa(e),mu(t.stateNode,t.type,e))}}function b0(t){Ui?Yi?Yi.push(t):Yi=[t]:Ui=t}function w0(){if(Ui){var t=Ui,e=Yi;if(Yi=Ui=null,hd(t),e)for(t=0;t<e.length;t++)hd(e[t])}}function k0(t,e){return t(e)}function S0(){}var vl=!1;function E0(t,e,n){if(vl)return t(e,n);vl=!0;try{return k0(t,e,n)}finally{vl=!1,(Ui!==null||Yi!==null)&&(S0(),w0())}}function lo(t,e){var n=t.stateNode;if(n===null)return null;var i=Fa(n);if(i===null)return null;n=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var yu=!1;if(dn)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){yu=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{yu=!1}function V5(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Wr=!1,qs=null,ta=!1,vu=null,W5={onError:function(t){Wr=!0,qs=t}};function H5(t,e,n,i,r,o,s,a,l){Wr=!1,qs=null,V5.apply(W5,arguments)}function U5(t,e,n,i,r,o,s,a,l){if(H5.apply(this,arguments),Wr){if(Wr){var u=qs;Wr=!1,qs=null}else throw Error($(198));ta||(ta=!0,vu=u)}}function Ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function M0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dd(t){if(Ei(t)!==t)throw Error($(188))}function Y5(t){var e=t.alternate;if(!e){if(e=Ei(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return dd(r),t;if(o===i)return dd(r),e;o=o.sibling}throw Error($(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error($(189))}}if(n.alternate!==i)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function C0(t){return t=Y5(t),t!==null?T0(t):null}function T0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=T0(t);if(e!==null)return e;t=t.sibling}return null}var P0=de.unstable_scheduleCallback,fd=de.unstable_cancelCallback,X5=de.unstable_shouldYield,Q5=de.unstable_requestPaint,wt=de.unstable_now,K5=de.unstable_getCurrentPriorityLevel,Dc=de.unstable_ImmediatePriority,D0=de.unstable_UserBlockingPriority,ea=de.unstable_NormalPriority,Z5=de.unstable_LowPriority,O0=de.unstable_IdlePriority,za=null,Ke=null;function G5(t){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(za,t,void 0,(t.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:t8,J5=Math.log,q5=Math.LN2;function t8(t){return t>>>=0,t===0?32:31-(J5(t)/q5|0)|0}var ns=64,is=4194304;function Ar(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function na(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Ar(a):(o&=s,o!==0&&(i=Ar(o)))}else s=n&~r,s!==0?i=Ar(s):o!==0&&(i=Ar(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Re(e),r=1<<n,i|=t[n],e&=~r;return i}function e8(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n8(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Re(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=e8(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function xu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function L0(){var t=ns;return ns<<=1,!(ns&4194240)&&(ns=64),t}function xl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ro(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Re(e),t[e]=n}function i8(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Re(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Oc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Re(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function $0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var A0,Lc,z0,R0,I0,_u=!1,rs=[],zn=null,Rn=null,In=null,uo=new Map,co=new Map,Cn=[],r8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pd(t,e){switch(t){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(e.pointerId)}}function _r(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=No(e),e!==null&&Lc(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function o8(t,e,n,i,r){switch(e){case"focusin":return zn=_r(zn,t,e,n,i,r),!0;case"dragenter":return Rn=_r(Rn,t,e,n,i,r),!0;case"mouseover":return In=_r(In,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return uo.set(o,_r(uo.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,co.set(o,_r(co.get(o)||null,t,e,n,i,r)),!0}return!1}function N0(t){var e=li(t.target);if(e!==null){var n=Ei(e);if(n!==null){if(e=n.tag,e===13){if(e=M0(n),e!==null){t.blockedOn=e,I0(t.priority,function(){z0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ls(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);gu=i,n.target.dispatchEvent(i),gu=null}else return e=No(n),e!==null&&Lc(e),t.blockedOn=n,!1;e.shift()}return!0}function gd(t,e,n){Ls(t)&&n.delete(e)}function s8(){_u=!1,zn!==null&&Ls(zn)&&(zn=null),Rn!==null&&Ls(Rn)&&(Rn=null),In!==null&&Ls(In)&&(In=null),uo.forEach(gd),co.forEach(gd)}function br(t,e){t.blockedOn===e&&(t.blockedOn=null,_u||(_u=!0,de.unstable_scheduleCallback(de.unstable_NormalPriority,s8)))}function ho(t){function e(r){return br(r,t)}if(0<rs.length){br(rs[0],t);for(var n=1;n<rs.length;n++){var i=rs[n];i.blockedOn===t&&(i.blockedOn=null)}}for(zn!==null&&br(zn,t),Rn!==null&&br(Rn,t),In!==null&&br(In,t),uo.forEach(e),co.forEach(e),n=0;n<Cn.length;n++)i=Cn[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)N0(n),n.blockedOn===null&&Cn.shift()}var Xi=mn.ReactCurrentBatchConfig,ia=!0;function a8(t,e,n,i){var r=nt,o=Xi.transition;Xi.transition=null;try{nt=1,$c(t,e,n,i)}finally{nt=r,Xi.transition=o}}function l8(t,e,n,i){var r=nt,o=Xi.transition;Xi.transition=null;try{nt=4,$c(t,e,n,i)}finally{nt=r,Xi.transition=o}}function $c(t,e,n,i){if(ia){var r=bu(t,e,n,i);if(r===null)Pl(t,e,i,ra,n),pd(t,i);else if(o8(r,t,e,n,i))i.stopPropagation();else if(pd(t,i),e&4&&-1<r8.indexOf(t)){for(;r!==null;){var o=No(r);if(o!==null&&A0(o),o=bu(t,e,n,i),o===null&&Pl(t,e,i,ra,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Pl(t,e,i,null,n)}}var ra=null;function bu(t,e,n,i){if(ra=null,t=Pc(i),t=li(t),t!==null)if(e=Ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=M0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ra=t,null}function F0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K5()){case Dc:return 1;case D0:return 4;case ea:case Z5:return 16;case O0:return 536870912;default:return 16}default:return 16}}var Pn=null,Ac=null,$s=null;function j0(){if($s)return $s;var t,e=Ac,n=e.length,i,r="value"in Pn?Pn.value:Pn.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return $s=r.slice(t,1<i?1-i:void 0)}function As(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function os(){return!0}function md(){return!1}function pe(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?os:md,this.isPropagationStopped=md,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=os)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=os)},persist:function(){},isPersistent:os}),e}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zc=pe(hr),Io=yt({},hr,{view:0,detail:0}),u8=pe(Io),_l,bl,wr,Ra=yt({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wr&&(wr&&t.type==="mousemove"?(_l=t.screenX-wr.screenX,bl=t.screenY-wr.screenY):bl=_l=0,wr=t),_l)},movementY:function(t){return"movementY"in t?t.movementY:bl}}),yd=pe(Ra),c8=yt({},Ra,{dataTransfer:0}),h8=pe(c8),d8=yt({},Io,{relatedTarget:0}),wl=pe(d8),f8=yt({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),p8=pe(f8),g8=yt({},hr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),m8=pe(g8),y8=yt({},hr,{data:0}),vd=pe(y8),v8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b8(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_8[t])?!!e[t]:!1}function Rc(){return b8}var w8=yt({},Io,{key:function(t){if(t.key){var e=v8[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=As(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?x8[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rc,charCode:function(t){return t.type==="keypress"?As(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?As(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k8=pe(w8),S8=yt({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=pe(S8),E8=yt({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rc}),M8=pe(E8),C8=yt({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),T8=pe(C8),P8=yt({},Ra,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),D8=pe(P8),O8=[9,13,27,32],Ic=dn&&"CompositionEvent"in window,Hr=null;dn&&"documentMode"in document&&(Hr=document.documentMode);var L8=dn&&"TextEvent"in window&&!Hr,B0=dn&&(!Ic||Hr&&8<Hr&&11>=Hr),_d=" ",bd=!1;function V0(t,e){switch(t){case"keyup":return O8.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function W0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ai=!1;function $8(t,e){switch(t){case"compositionend":return W0(e);case"keypress":return e.which!==32?null:(bd=!0,_d);case"textInput":return t=e.data,t===_d&&bd?null:t;default:return null}}function A8(t,e){if(Ai)return t==="compositionend"||!Ic&&V0(t,e)?(t=j0(),$s=Ac=Pn=null,Ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return B0&&e.locale!=="ko"?null:e.data;default:return null}}var z8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!z8[t.type]:e==="textarea"}function H0(t,e,n,i){b0(i),e=oa(e,"onChange"),0<e.length&&(n=new zc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ur=null,fo=null;function R8(t){e1(t,0)}function Ia(t){var e=Ii(t);if(p0(e))return t}function I8(t,e){if(t==="change")return e}var U0=!1;if(dn){var kl;if(dn){var Sl="oninput"in document;if(!Sl){var kd=document.createElement("div");kd.setAttribute("oninput","return;"),Sl=typeof kd.oninput=="function"}kl=Sl}else kl=!1;U0=kl&&(!document.documentMode||9<document.documentMode)}function Sd(){Ur&&(Ur.detachEvent("onpropertychange",Y0),fo=Ur=null)}function Y0(t){if(t.propertyName==="value"&&Ia(fo)){var e=[];H0(e,fo,t,Pc(t)),E0(R8,e)}}function N8(t,e,n){t==="focusin"?(Sd(),Ur=e,fo=n,Ur.attachEvent("onpropertychange",Y0)):t==="focusout"&&Sd()}function F8(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ia(fo)}function j8(t,e){if(t==="click")return Ia(e)}function B8(t,e){if(t==="input"||t==="change")return Ia(e)}function V8(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fe=typeof Object.is=="function"?Object.is:V8;function po(t,e){if(Fe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!iu.call(e,r)||!Fe(t[r],e[r]))return!1}return!0}function Ed(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Md(t,e){var n=Ed(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Ed(n)}}function X0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?X0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Q0(){for(var t=window,e=Js();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Js(t.document)}return e}function Nc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function W8(t){var e=Q0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&X0(n.ownerDocument.documentElement,n)){if(i!==null&&Nc(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Md(n,o);var s=Md(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var H8=dn&&"documentMode"in document&&11>=document.documentMode,zi=null,wu=null,Yr=null,ku=!1;function Cd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ku||zi==null||zi!==Js(i)||(i=zi,"selectionStart"in i&&Nc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Yr&&po(Yr,i)||(Yr=i,i=oa(wu,"onSelect"),0<i.length&&(e=new zc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=zi)))}function ss(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ri={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionend:ss("Transition","TransitionEnd")},El={},K0={};dn&&(K0=document.createElement("div").style,"AnimationEvent"in window||(delete Ri.animationend.animation,delete Ri.animationiteration.animation,delete Ri.animationstart.animation),"TransitionEvent"in window||delete Ri.transitionend.transition);function Na(t){if(El[t])return El[t];if(!Ri[t])return t;var e=Ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in K0)return El[t]=e[n];return t}var Z0=Na("animationend"),G0=Na("animationiteration"),J0=Na("animationstart"),q0=Na("transitionend"),t1=new Map,Td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zn(t,e){t1.set(t,e),Si(e,[t])}for(var Ml=0;Ml<Td.length;Ml++){var Cl=Td[Ml],U8=Cl.toLowerCase(),Y8=Cl[0].toUpperCase()+Cl.slice(1);Zn(U8,"on"+Y8)}Zn(Z0,"onAnimationEnd");Zn(G0,"onAnimationIteration");Zn(J0,"onAnimationStart");Zn("dblclick","onDoubleClick");Zn("focusin","onFocus");Zn("focusout","onBlur");Zn(q0,"onTransitionEnd");qi("onMouseEnter",["mouseout","mouseover"]);qi("onMouseLeave",["mouseout","mouseover"]);qi("onPointerEnter",["pointerout","pointerover"]);qi("onPointerLeave",["pointerout","pointerover"]);Si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Si("onBeforeInput",["compositionend","keypress","textInput","paste"]);Si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X8=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function Pd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,U5(i,e,void 0,t),t.currentTarget=null}function e1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;t:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break t;Pd(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break t;Pd(r,a,u),o=l}}}if(ta)throw t=vu,ta=!1,vu=null,t}function lt(t,e){var n=e[Tu];n===void 0&&(n=e[Tu]=new Set);var i=t+"__bubble";n.has(i)||(n1(e,t,2,!1),n.add(i))}function Tl(t,e,n){var i=0;e&&(i|=4),n1(n,t,i,e)}var as="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[as]){t[as]=!0,u0.forEach(function(n){n!=="selectionchange"&&(X8.has(n)||Tl(n,!1,t),Tl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[as]||(e[as]=!0,Tl("selectionchange",!1,e))}}function n1(t,e,n,i){switch(F0(e)){case 1:var r=a8;break;case 4:r=l8;break;default:r=$c}n=r.bind(null,e,n,t),r=void 0,!yu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Pl(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=li(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue t}a=a.parentNode}}i=i.return}E0(function(){var u=o,c=Pc(n),h=[];t:{var d=t1.get(t);if(d!==void 0){var f=zc,y=t;switch(t){case"keypress":if(As(n)===0)break t;case"keydown":case"keyup":f=k8;break;case"focusin":y="focus",f=wl;break;case"focusout":y="blur",f=wl;break;case"beforeblur":case"afterblur":f=wl;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=h8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=M8;break;case Z0:case G0:case J0:f=p8;break;case q0:f=T8;break;case"scroll":f=u8;break;case"wheel":f=D8;break;case"copy":case"cut":case"paste":f=m8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=xd}var p=(e&4)!==0,w=!p&&t==="scroll",m=p?d!==null?d+"Capture":null:d;p=[];for(var v=u,x;v!==null;){x=v;var b=x.stateNode;if(x.tag===5&&b!==null&&(x=b,m!==null&&(b=lo(v,m),b!=null&&p.push(mo(v,b,x)))),w)break;v=v.return}0<p.length&&(d=new f(d,y,null,n,c),h.push({event:d,listeners:p}))}}if(!(e&7)){t:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==gu&&(y=n.relatedTarget||n.fromElement)&&(li(y)||y[fn]))break t;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(y=n.relatedTarget||n.toElement,f=u,y=y?li(y):null,y!==null&&(w=Ei(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if(p=yd,b="onMouseLeave",m="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(p=xd,b="onPointerLeave",m="onPointerEnter",v="pointer"),w=f==null?d:Ii(f),x=y==null?d:Ii(y),d=new p(b,v+"leave",f,n,c),d.target=w,d.relatedTarget=x,b=null,li(c)===u&&(p=new p(m,v+"enter",y,n,c),p.target=x,p.relatedTarget=w,b=p),w=b,f&&y)e:{for(p=f,m=y,v=0,x=p;x;x=Ti(x))v++;for(x=0,b=m;b;b=Ti(b))x++;for(;0<v-x;)p=Ti(p),v--;for(;0<x-v;)m=Ti(m),x--;for(;v--;){if(p===m||m!==null&&p===m.alternate)break e;p=Ti(p),m=Ti(m)}p=null}else p=null;f!==null&&Dd(h,d,f,p,!1),y!==null&&w!==null&&Dd(h,w,y,p,!0)}}t:{if(d=u?Ii(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var S=I8;else if(wd(d))if(U0)S=B8;else{S=F8;var E=N8}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=j8);if(S&&(S=S(t,u))){H0(h,S,n,c);break t}E&&E(t,d,u),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&cu(d,"number",d.value)}switch(E=u?Ii(u):window,t){case"focusin":(wd(E)||E.contentEditable==="true")&&(zi=E,wu=u,Yr=null);break;case"focusout":Yr=wu=zi=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,Cd(h,n,c);break;case"selectionchange":if(H8)break;case"keydown":case"keyup":Cd(h,n,c)}var C;if(Ic)t:{switch(t){case"compositionstart":var M="onCompositionStart";break t;case"compositionend":M="onCompositionEnd";break t;case"compositionupdate":M="onCompositionUpdate";break t}M=void 0}else Ai?V0(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(B0&&n.locale!=="ko"&&(Ai||M!=="onCompositionStart"?M==="onCompositionEnd"&&Ai&&(C=j0()):(Pn=c,Ac="value"in Pn?Pn.value:Pn.textContent,Ai=!0)),E=oa(u,M),0<E.length&&(M=new vd(M,t,null,n,c),h.push({event:M,listeners:E}),C?M.data=C:(C=W0(n),C!==null&&(M.data=C)))),(C=L8?$8(t,n):A8(t,n))&&(u=oa(u,"onBeforeInput"),0<u.length&&(c=new vd("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=C))}e1(h,e)})}function mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oa(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=lo(t,n),o!=null&&i.unshift(mo(t,o,r)),o=lo(t,e),o!=null&&i.push(mo(t,o,r))),t=t.return}return i}function Ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dd(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=lo(n,o),l!=null&&s.unshift(mo(n,l,a))):r||(l=lo(n,o),l!=null&&s.push(mo(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Q8=/\r\n?/g,K8=/\u0000|\uFFFD/g;function Od(t){return(typeof t=="string"?t:""+t).replace(Q8,`
`).replace(K8,"")}function ls(t,e,n){if(e=Od(e),Od(t)!==e&&n)throw Error($(425))}function sa(){}var Su=null,Eu=null;function Mu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,Z8=typeof clearTimeout=="function"?clearTimeout:void 0,Ld=typeof Promise=="function"?Promise:void 0,G8=typeof queueMicrotask=="function"?queueMicrotask:typeof Ld<"u"?function(t){return Ld.resolve(null).then(t).catch(J8)}:Cu;function J8(t){setTimeout(function(){throw t})}function Dl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ho(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ho(e)}function Nn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $d(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var dr=Math.random().toString(36).slice(2),Qe="__reactFiber$"+dr,yo="__reactProps$"+dr,fn="__reactContainer$"+dr,Tu="__reactEvents$"+dr,q8="__reactListeners$"+dr,ty="__reactHandles$"+dr;function li(t){var e=t[Qe];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fn]||n[Qe]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$d(t);t!==null;){if(n=t[Qe])return n;t=$d(t)}return e}t=n,n=t.parentNode}return null}function No(t){return t=t[Qe]||t[fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ii(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Fa(t){return t[yo]||null}var Pu=[],Ni=-1;function Gn(t){return{current:t}}function ut(t){0>Ni||(t.current=Pu[Ni],Pu[Ni]=null,Ni--)}function ot(t,e){Ni++,Pu[Ni]=t.current,t.current=e}var Yn={},Wt=Gn(Yn),ee=Gn(!1),yi=Yn;function tr(t,e){var n=t.type.contextTypes;if(!n)return Yn;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ne(t){return t=t.childContextTypes,t!=null}function aa(){ut(ee),ut(Wt)}function Ad(t,e,n){if(Wt.current!==Yn)throw Error($(168));ot(Wt,e),ot(ee,n)}function i1(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error($(108,N5(t)||"Unknown",r));return yt({},n,i)}function la(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yn,yi=Wt.current,ot(Wt,t),ot(ee,ee.current),!0}function zd(t,e,n){var i=t.stateNode;if(!i)throw Error($(169));n?(t=i1(t,e,yi),i.__reactInternalMemoizedMergedChildContext=t,ut(ee),ut(Wt),ot(Wt,t)):ut(ee),ot(ee,n)}var rn=null,ja=!1,Ol=!1;function r1(t){rn===null?rn=[t]:rn.push(t)}function ey(t){ja=!0,r1(t)}function Jn(){if(!Ol&&rn!==null){Ol=!0;var t=0,e=nt;try{var n=rn;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}rn=null,ja=!1}catch(r){throw rn!==null&&(rn=rn.slice(t+1)),P0(Dc,Jn),r}finally{nt=e,Ol=!1}}return null}var Fi=[],ji=0,ua=null,ca=0,_e=[],be=0,vi=null,sn=1,an="";function oi(t,e){Fi[ji++]=ca,Fi[ji++]=ua,ua=t,ca=e}function o1(t,e,n){_e[be++]=sn,_e[be++]=an,_e[be++]=vi,vi=t;var i=sn;t=an;var r=32-Re(i)-1;i&=~(1<<r),n+=1;var o=32-Re(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,sn=1<<32-Re(e)+r|n<<r|i,an=o+t}else sn=1<<o|n<<r|i,an=t}function Fc(t){t.return!==null&&(oi(t,1),o1(t,1,0))}function jc(t){for(;t===ua;)ua=Fi[--ji],Fi[ji]=null,ca=Fi[--ji],Fi[ji]=null;for(;t===vi;)vi=_e[--be],_e[be]=null,an=_e[--be],_e[be]=null,sn=_e[--be],_e[be]=null}var he=null,ce=null,dt=!1,Ae=null;function s1(t,e){var n=ke(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,he=t,ce=Nn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,he=t,ce=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vi!==null?{id:sn,overflow:an}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ke(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,he=t,ce=null,!0):!1;default:return!1}}function Du(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ou(t){if(dt){var e=ce;if(e){var n=e;if(!Rd(t,e)){if(Du(t))throw Error($(418));e=Nn(n.nextSibling);var i=he;e&&Rd(t,e)?s1(i,n):(t.flags=t.flags&-4097|2,dt=!1,he=t)}}else{if(Du(t))throw Error($(418));t.flags=t.flags&-4097|2,dt=!1,he=t}}}function Id(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;he=t}function us(t){if(t!==he)return!1;if(!dt)return Id(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mu(t.type,t.memoizedProps)),e&&(e=ce)){if(Du(t))throw a1(),Error($(418));for(;e;)s1(t,e),e=Nn(e.nextSibling)}if(Id(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ce=Nn(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ce=null}}else ce=he?Nn(t.stateNode.nextSibling):null;return!0}function a1(){for(var t=ce;t;)t=Nn(t.nextSibling)}function er(){ce=he=null,dt=!1}function Bc(t){Ae===null?Ae=[t]:Ae.push(t)}var ny=mn.ReactCurrentBatchConfig;function kr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var i=n.stateNode}if(!i)throw Error($(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function cs(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nd(t){var e=t._init;return e(t._payload)}function l1(t){function e(m,v){if(t){var x=m.deletions;x===null?(m.deletions=[v],m.flags|=16):x.push(v)}}function n(m,v){if(!t)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=Vn(m,v),m.index=0,m.sibling=null,m}function o(m,v,x){return m.index=x,t?(x=m.alternate,x!==null?(x=x.index,x<v?(m.flags|=2,v):x):(m.flags|=2,v)):(m.flags|=1048576,v)}function s(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,v,x,b){return v===null||v.tag!==6?(v=Nl(x,m.mode,b),v.return=m,v):(v=r(v,x),v.return=m,v)}function l(m,v,x,b){var S=x.type;return S===$i?c(m,v,x.props.children,b,x.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===En&&Nd(S)===v.type)?(b=r(v,x.props),b.ref=kr(m,v,x),b.return=m,b):(b=Bs(x.type,x.key,x.props,null,m.mode,b),b.ref=kr(m,v,x),b.return=m,b)}function u(m,v,x,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Fl(x,m.mode,b),v.return=m,v):(v=r(v,x.children||[]),v.return=m,v)}function c(m,v,x,b,S){return v===null||v.tag!==7?(v=fi(x,m.mode,b,S),v.return=m,v):(v=r(v,x),v.return=m,v)}function h(m,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Nl(""+v,m.mode,x),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qo:return x=Bs(v.type,v.key,v.props,null,m.mode,x),x.ref=kr(m,null,v),x.return=m,x;case Li:return v=Fl(v,m.mode,x),v.return=m,v;case En:var b=v._init;return h(m,b(v._payload),x)}if($r(v)||vr(v))return v=fi(v,m.mode,x,null),v.return=m,v;cs(m,v)}return null}function d(m,v,x,b){var S=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:a(m,v,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qo:return x.key===S?l(m,v,x,b):null;case Li:return x.key===S?u(m,v,x,b):null;case En:return S=x._init,d(m,v,S(x._payload),b)}if($r(x)||vr(x))return S!==null?null:c(m,v,x,b,null);cs(m,x)}return null}function f(m,v,x,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(x)||null,a(v,m,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case qo:return m=m.get(b.key===null?x:b.key)||null,l(v,m,b,S);case Li:return m=m.get(b.key===null?x:b.key)||null,u(v,m,b,S);case En:var E=b._init;return f(m,v,x,E(b._payload),S)}if($r(b)||vr(b))return m=m.get(x)||null,c(v,m,b,S,null);cs(v,b)}return null}function y(m,v,x,b){for(var S=null,E=null,C=v,M=v=0,O=null;C!==null&&M<x.length;M++){C.index>M?(O=C,C=null):O=C.sibling;var P=d(m,C,x[M],b);if(P===null){C===null&&(C=O);break}t&&C&&P.alternate===null&&e(m,C),v=o(P,v,M),E===null?S=P:E.sibling=P,E=P,C=O}if(M===x.length)return n(m,C),dt&&oi(m,M),S;if(C===null){for(;M<x.length;M++)C=h(m,x[M],b),C!==null&&(v=o(C,v,M),E===null?S=C:E.sibling=C,E=C);return dt&&oi(m,M),S}for(C=i(m,C);M<x.length;M++)O=f(C,m,M,x[M],b),O!==null&&(t&&O.alternate!==null&&C.delete(O.key===null?M:O.key),v=o(O,v,M),E===null?S=O:E.sibling=O,E=O);return t&&C.forEach(function(z){return e(m,z)}),dt&&oi(m,M),S}function p(m,v,x,b){var S=vr(x);if(typeof S!="function")throw Error($(150));if(x=S.call(x),x==null)throw Error($(151));for(var E=S=null,C=v,M=v=0,O=null,P=x.next();C!==null&&!P.done;M++,P=x.next()){C.index>M?(O=C,C=null):O=C.sibling;var z=d(m,C,P.value,b);if(z===null){C===null&&(C=O);break}t&&C&&z.alternate===null&&e(m,C),v=o(z,v,M),E===null?S=z:E.sibling=z,E=z,C=O}if(P.done)return n(m,C),dt&&oi(m,M),S;if(C===null){for(;!P.done;M++,P=x.next())P=h(m,P.value,b),P!==null&&(v=o(P,v,M),E===null?S=P:E.sibling=P,E=P);return dt&&oi(m,M),S}for(C=i(m,C);!P.done;M++,P=x.next())P=f(C,m,M,P.value,b),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?M:P.key),v=o(P,v,M),E===null?S=P:E.sibling=P,E=P);return t&&C.forEach(function(F){return e(m,F)}),dt&&oi(m,M),S}function w(m,v,x,b){if(typeof x=="object"&&x!==null&&x.type===$i&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case qo:t:{for(var S=x.key,E=v;E!==null;){if(E.key===S){if(S=x.type,S===$i){if(E.tag===7){n(m,E.sibling),v=r(E,x.props.children),v.return=m,m=v;break t}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===En&&Nd(S)===E.type){n(m,E.sibling),v=r(E,x.props),v.ref=kr(m,E,x),v.return=m,m=v;break t}n(m,E);break}else e(m,E);E=E.sibling}x.type===$i?(v=fi(x.props.children,m.mode,b,x.key),v.return=m,m=v):(b=Bs(x.type,x.key,x.props,null,m.mode,b),b.ref=kr(m,v,x),b.return=m,m=b)}return s(m);case Li:t:{for(E=x.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(m,v.sibling),v=r(v,x.children||[]),v.return=m,m=v;break t}else{n(m,v);break}else e(m,v);v=v.sibling}v=Fl(x,m.mode,b),v.return=m,m=v}return s(m);case En:return E=x._init,w(m,v,E(x._payload),b)}if($r(x))return y(m,v,x,b);if(vr(x))return p(m,v,x,b);cs(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(m,v.sibling),v=r(v,x),v.return=m,m=v):(n(m,v),v=Nl(x,m.mode,b),v.return=m,m=v),s(m)):n(m,v)}return w}var nr=l1(!0),u1=l1(!1),ha=Gn(null),da=null,Bi=null,Vc=null;function Wc(){Vc=Bi=da=null}function Hc(t){var e=ha.current;ut(ha),t._currentValue=e}function Lu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qi(t,e){da=t,Vc=Bi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(te=!0),t.firstContext=null)}function Me(t){var e=t._currentValue;if(Vc!==t)if(t={context:t,memoizedValue:e,next:null},Bi===null){if(da===null)throw Error($(308));Bi=t,da.dependencies={lanes:0,firstContext:t}}else Bi=Bi.next=t;return e}var ui=null;function Uc(t){ui===null?ui=[t]:ui.push(t)}function c1(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Uc(e)):(n.next=r.next,r.next=n),e.interleaved=n,pn(t,i)}function pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mn=!1;function Yc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fn(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,J&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,pn(t,n)}return r=i.interleaved,r===null?(e.next=e,Uc(i)):(e.next=r.next,r.next=e),i.interleaved=e,pn(t,n)}function zs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Oc(t,n)}}function Fd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fa(t,e,n,i){var r=t.updateQueue;Mn=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var h=r.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,f=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});t:{var y=t,p=a;switch(d=e,f=n,p.tag){case 1:if(y=p.payload,typeof y=="function"){h=y.call(f,h,d);break t}h=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=p.payload,d=typeof y=="function"?y.call(f,h,d):y,d==null)break t;h=yt({},h,d);break t;case 2:Mn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,s|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);_i|=s,t.lanes=s,t.memoizedState=h}}function jd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error($(191,r));r.call(i)}}}var Fo={},Ze=Gn(Fo),vo=Gn(Fo),xo=Gn(Fo);function ci(t){if(t===Fo)throw Error($(174));return t}function Xc(t,e){switch(ot(xo,e),ot(vo,t),ot(Ze,Fo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:du(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=du(e,t)}ut(Ze),ot(Ze,e)}function ir(){ut(Ze),ut(vo),ut(xo)}function d1(t){ci(xo.current);var e=ci(Ze.current),n=du(e,t.type);e!==n&&(ot(vo,t),ot(Ze,n))}function Qc(t){vo.current===t&&(ut(Ze),ut(vo))}var gt=Gn(0);function pa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ll=[];function Kc(){for(var t=0;t<Ll.length;t++)Ll[t]._workInProgressVersionPrimary=null;Ll.length=0}var Rs=mn.ReactCurrentDispatcher,$l=mn.ReactCurrentBatchConfig,xi=0,mt=null,Mt=null,Dt=null,ga=!1,Xr=!1,_o=0,iy=0;function It(){throw Error($(321))}function Zc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fe(t[n],e[n]))return!1;return!0}function Gc(t,e,n,i,r,o){if(xi=o,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rs.current=t===null||t.memoizedState===null?ay:ly,t=n(i,r),Xr){o=0;do{if(Xr=!1,_o=0,25<=o)throw Error($(301));o+=1,Dt=Mt=null,e.updateQueue=null,Rs.current=uy,t=n(i,r)}while(Xr)}if(Rs.current=ma,e=Mt!==null&&Mt.next!==null,xi=0,Dt=Mt=mt=null,ga=!1,e)throw Error($(300));return t}function Jc(){var t=_o!==0;return _o=0,t}function Ue(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Ce(){if(Mt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Dt===null?mt.memoizedState:Dt.next;if(e!==null)Dt=e,Mt=t;else{if(t===null)throw Error($(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function bo(t,e){return typeof e=="function"?e(t):e}function Al(t){var e=Ce(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((xi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=i):l=l.next=h,mt.lanes|=c,_i|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,Fe(i,e.memoizedState)||(te=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,mt.lanes|=o,_i|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zl(t){var e=Ce(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Fe(o,e.memoizedState)||(te=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function f1(){}function p1(t,e){var n=mt,i=Ce(),r=e(),o=!Fe(i.memoizedState,r);if(o&&(i.memoizedState=r,te=!0),i=i.queue,qc(y1.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,wo(9,m1.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error($(349));xi&30||g1(n,e,r)}return r}function g1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function m1(t,e,n,i){e.value=n,e.getSnapshot=i,v1(e)&&x1(t)}function y1(t,e,n){return n(function(){v1(e)&&x1(t)})}function v1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fe(t,n)}catch{return!0}}function x1(t){var e=pn(t,1);e!==null&&Ie(e,t,1,-1)}function Bd(t){var e=Ue();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:t},e.queue=t,t=t.dispatch=sy.bind(null,mt,t),[e.memoizedState,t]}function wo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function _1(){return Ce().memoizedState}function Is(t,e,n,i){var r=Ue();mt.flags|=t,r.memoizedState=wo(1|e,n,void 0,i===void 0?null:i)}function Ba(t,e,n,i){var r=Ce();i=i===void 0?null:i;var o=void 0;if(Mt!==null){var s=Mt.memoizedState;if(o=s.destroy,i!==null&&Zc(i,s.deps)){r.memoizedState=wo(e,n,o,i);return}}mt.flags|=t,r.memoizedState=wo(1|e,n,o,i)}function Vd(t,e){return Is(8390656,8,t,e)}function qc(t,e){return Ba(2048,8,t,e)}function b1(t,e){return Ba(4,2,t,e)}function w1(t,e){return Ba(4,4,t,e)}function k1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function S1(t,e,n){return n=n!=null?n.concat([t]):null,Ba(4,4,k1.bind(null,e,t),n)}function th(){}function E1(t,e){var n=Ce();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zc(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function M1(t,e){var n=Ce();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zc(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function C1(t,e,n){return xi&21?(Fe(n,e)||(n=L0(),mt.lanes|=n,_i|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,te=!0),t.memoizedState=n)}function ry(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=$l.transition;$l.transition={};try{t(!1),e()}finally{nt=n,$l.transition=i}}function T1(){return Ce().memoizedState}function oy(t,e,n){var i=Bn(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},P1(t))D1(e,n);else if(n=c1(t,e,n,i),n!==null){var r=Yt();Ie(n,t,i,r),O1(n,e,i)}}function sy(t,e,n){var i=Bn(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(P1(t))D1(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Fe(a,s)){var l=e.interleaved;l===null?(r.next=r,Uc(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=c1(t,e,r,i),n!==null&&(r=Yt(),Ie(n,t,i,r),O1(n,e,i))}}function P1(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function D1(t,e){Xr=ga=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O1(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Oc(t,n)}}var ma={readContext:Me,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},ay={readContext:Me,useCallback:function(t,e){return Ue().memoizedState=[t,e===void 0?null:e],t},useContext:Me,useEffect:Vd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Is(4194308,4,k1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Is(4194308,4,t,e)},useInsertionEffect:function(t,e){return Is(4,2,t,e)},useMemo:function(t,e){var n=Ue();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ue();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=oy.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Ue();return t={current:t},e.memoizedState=t},useState:Bd,useDebugValue:th,useDeferredValue:function(t){return Ue().memoizedState=t},useTransition:function(){var t=Bd(!1),e=t[0];return t=ry.bind(null,t[1]),Ue().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Ue();if(dt){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),Lt===null)throw Error($(349));xi&30||g1(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Vd(y1.bind(null,i,o,t),[t]),i.flags|=2048,wo(9,m1.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Ue(),e=Lt.identifierPrefix;if(dt){var n=an,i=sn;n=(i&~(1<<32-Re(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=_o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=iy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ly={readContext:Me,useCallback:E1,useContext:Me,useEffect:qc,useImperativeHandle:S1,useInsertionEffect:b1,useLayoutEffect:w1,useMemo:M1,useReducer:Al,useRef:_1,useState:function(){return Al(bo)},useDebugValue:th,useDeferredValue:function(t){var e=Ce();return C1(e,Mt.memoizedState,t)},useTransition:function(){var t=Al(bo)[0],e=Ce().memoizedState;return[t,e]},useMutableSource:f1,useSyncExternalStore:p1,useId:T1,unstable_isNewReconciler:!1},uy={readContext:Me,useCallback:E1,useContext:Me,useEffect:qc,useImperativeHandle:S1,useInsertionEffect:b1,useLayoutEffect:w1,useMemo:M1,useReducer:zl,useRef:_1,useState:function(){return zl(bo)},useDebugValue:th,useDeferredValue:function(t){var e=Ce();return Mt===null?e.memoizedState=t:C1(e,Mt.memoizedState,t)},useTransition:function(){var t=zl(bo)[0],e=Ce().memoizedState;return[t,e]},useMutableSource:f1,useSyncExternalStore:p1,useId:T1,unstable_isNewReconciler:!1};function Le(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $u(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Va={isMounted:function(t){return(t=t._reactInternals)?Ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Bn(t),o=hn(i,r);o.payload=e,n!=null&&(o.callback=n),e=Fn(t,o,r),e!==null&&(Ie(e,t,r,i),zs(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Bn(t),o=hn(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Fn(t,o,r),e!==null&&(Ie(e,t,r,i),zs(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Bn(t),r=hn(n,i);r.tag=2,e!=null&&(r.callback=e),e=Fn(t,r,i),e!==null&&(Ie(e,t,i,n),zs(e,t,i))}};function Wd(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!po(n,i)||!po(r,o):!0}function L1(t,e,n){var i=!1,r=Yn,o=e.contextType;return typeof o=="object"&&o!==null?o=Me(o):(r=ne(e)?yi:Wt.current,i=e.contextTypes,o=(i=i!=null)?tr(t,r):Yn),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Va,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Hd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Va.enqueueReplaceState(e,e.state,null)}function Au(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Yc(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Me(o):(o=ne(e)?yi:Wt.current,r.context=tr(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&($u(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Va.enqueueReplaceState(r,r.state,null),fa(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function rr(t,e){try{var n="",i=e;do n+=I5(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Rl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var cy=typeof WeakMap=="function"?WeakMap:Map;function $1(t,e,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){va||(va=!0,Uu=i),zu(t,e)},n}function A1(t,e,n){n=hn(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){zu(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zu(t,e),typeof i!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Ud(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new cy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Sy.bind(null,t,e,n),e.then(t,t))}function Yd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xd(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hn(-1,1),e.tag=2,Fn(n,e,1))),n.lanes|=1),t)}var hy=mn.ReactCurrentOwner,te=!1;function Ut(t,e,n,i){e.child=t===null?u1(e,null,n,i):nr(e,t.child,n,i)}function Qd(t,e,n,i,r){n=n.render;var o=e.ref;return Qi(e,r),i=Gc(t,e,n,i,o,r),n=Jc(),t!==null&&!te?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gn(t,e,r)):(dt&&n&&Fc(e),e.flags|=1,Ut(t,e,i,r),e.child)}function Kd(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!lh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,z1(t,e,o,i,r)):(t=Bs(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(s,i)&&t.ref===e.ref)return gn(t,e,r)}return e.flags|=1,t=Vn(o,i),t.ref=e.ref,t.return=e,e.child=t}function z1(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(po(o,i)&&t.ref===e.ref)if(te=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(te=!0);else return e.lanes=t.lanes,gn(t,e,r)}return Ru(t,e,n,i,r)}function R1(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Wi,le),le|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(Wi,le),le|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,ot(Wi,le),le|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,ot(Wi,le),le|=i;return Ut(t,e,r,n),e.child}function I1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ru(t,e,n,i,r){var o=ne(n)?yi:Wt.current;return o=tr(e,o),Qi(e,r),n=Gc(t,e,n,i,o,r),i=Jc(),t!==null&&!te?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gn(t,e,r)):(dt&&i&&Fc(e),e.flags|=1,Ut(t,e,n,r),e.child)}function Zd(t,e,n,i,r){if(ne(n)){var o=!0;la(e)}else o=!1;if(Qi(e,r),e.stateNode===null)Ns(t,e),L1(e,n,i),Au(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Me(u):(u=ne(n)?yi:Wt.current,u=tr(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Hd(e,s,i,u),Mn=!1;var d=e.memoizedState;s.state=d,fa(e,i,s,r),l=e.memoizedState,a!==i||d!==l||ee.current||Mn?(typeof c=="function"&&($u(e,n,c,i),l=e.memoizedState),(a=Mn||Wd(e,n,a,i,d,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,h1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Le(e.type,a),s.props=u,h=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Me(l):(l=ne(n)?yi:Wt.current,l=tr(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Hd(e,s,i,l),Mn=!1,d=e.memoizedState,s.state=d,fa(e,i,s,r);var y=e.memoizedState;a!==h||d!==y||ee.current||Mn?(typeof f=="function"&&($u(e,n,f,i),y=e.memoizedState),(u=Mn||Wd(e,n,u,i,d,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),s.props=i,s.state=y,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Iu(t,e,n,i,o,r)}function Iu(t,e,n,i,r,o){I1(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&zd(e,n,!1),gn(t,e,o);i=e.stateNode,hy.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=nr(e,t.child,null,o),e.child=nr(e,null,a,o)):Ut(t,e,a,o),e.memoizedState=i.state,r&&zd(e,n,!0),e.child}function N1(t){var e=t.stateNode;e.pendingContext?Ad(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ad(t,e.context,!1),Xc(t,e.containerInfo)}function Gd(t,e,n,i,r){return er(),Bc(r),e.flags|=256,Ut(t,e,n,i),e.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function F1(t,e,n){var i=e.pendingProps,r=gt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(gt,r&1),t===null)return Ou(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ua(s,i,0,null),t=fi(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Fu(n),e.memoizedState=Nu,t):eh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return dy(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Vn(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Vn(a,o):(o=fi(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Fu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Nu,i}return o=t.child,t=o.sibling,i=Vn(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function eh(t,e){return e=Ua({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hs(t,e,n,i){return i!==null&&Bc(i),nr(e,t.child,null,n),t=eh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dy(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Rl(Error($(422))),hs(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Ua({mode:"visible",children:i.children},r,0,null),o=fi(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&nr(e,t.child,null,s),e.child.memoizedState=Fu(s),e.memoizedState=Nu,o);if(!(e.mode&1))return hs(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error($(419)),i=Rl(o,i,void 0),hs(t,e,s,i)}if(a=(s&t.childLanes)!==0,te||a){if(i=Lt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,pn(t,r),Ie(i,t,r,-1))}return ah(),i=Rl(Error($(421))),hs(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ey.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,ce=Nn(r.nextSibling),he=e,dt=!0,Ae=null,t!==null&&(_e[be++]=sn,_e[be++]=an,_e[be++]=vi,sn=t.id,an=t.overflow,vi=e),e=eh(e,i.children),e.flags|=4096,e)}function Jd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Lu(t.return,e,n)}function Il(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function j1(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Ut(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jd(t,n,e);else if(t.tag===19)Jd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&pa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Il(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&pa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Il(e,!0,n,null,o);break;case"together":Il(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ns(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_i|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=Vn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fy(t,e,n){switch(e.tag){case 3:N1(e),er();break;case 5:d1(e);break;case 1:ne(e.type)&&la(e);break;case 4:Xc(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(ha,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?F1(t,e,n):(ot(gt,gt.current&1),t=gn(t,e,n),t!==null?t.sibling:null);ot(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return j1(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,R1(t,e,n)}return gn(t,e,n)}var B1,ju,V1,W1;B1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ju=function(){};V1=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ci(Ze.current);var o=null;switch(n){case"input":r=lu(t,r),i=lu(t,i),o=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),o=[];break;case"textarea":r=hu(t,r),i=hu(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=sa)}fu(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(so.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(so.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&lt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};W1=function(t,e,n,i){n!==i&&(e.flags|=4)};function Sr(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function py(t,e,n){var i=e.pendingProps;switch(jc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return ne(e.type)&&aa(),Nt(e),null;case 3:return i=e.stateNode,ir(),ut(ee),ut(Wt),Kc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(us(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ae!==null&&(Qu(Ae),Ae=null))),ju(t,e),Nt(e),null;case 5:Qc(e);var r=ci(xo.current);if(n=e.type,t!==null&&e.stateNode!=null)V1(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error($(166));return Nt(e),null}if(t=ci(Ze.current),us(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[Qe]=e,i[yo]=o,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<zr.length;r++)lt(zr[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":ad(i,o),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},lt("invalid",i);break;case"textarea":ud(i,o),lt("invalid",i)}fu(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&ls(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ls(i.textContent,a,t),r=["children",""+a]):so.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&lt("scroll",i)}switch(n){case"input":ts(i),ld(i,o,!0);break;case"textarea":ts(i),cd(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=sa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=y0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Qe]=e,t[yo]=i,B1(t,e,!1,!1),e.stateNode=t;t:{switch(s=pu(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<zr.length;r++)lt(zr[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":ad(t,i),r=lu(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":ud(t,i),r=hu(t,i),lt("invalid",t);break;default:r=i}fu(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?_0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&v0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ao(t,l):typeof l=="number"&&ao(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(so.hasOwnProperty(o)?l!=null&&o==="onScroll"&&lt("scroll",t):l!=null&&Ec(t,o,l,s))}switch(n){case"input":ts(t),ld(t,i,!1);break;case"textarea":ts(t),cd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Un(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Hi(t,!!i.multiple,o,!1):i.defaultValue!=null&&Hi(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=sa)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)W1(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error($(166));if(n=ci(xo.current),ci(Ze.current),us(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qe]=e,(o=i.nodeValue!==n)&&(t=he,t!==null))switch(t.tag){case 3:ls(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ls(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qe]=e,e.stateNode=i}return Nt(e),null;case 13:if(ut(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&ce!==null&&e.mode&1&&!(e.flags&128))a1(),er(),e.flags|=98560,o=!1;else if(o=us(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error($(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error($(317));o[Qe]=e}else er(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),o=!1}else Ae!==null&&(Qu(Ae),Ae=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Ct===0&&(Ct=3):ah())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return ir(),ju(t,e),t===null&&go(e.stateNode.containerInfo),Nt(e),null;case 10:return Hc(e.type._context),Nt(e),null;case 17:return ne(e.type)&&aa(),Nt(e),null;case 19:if(ut(gt),o=e.memoizedState,o===null)return Nt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Sr(o,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=pa(t),s!==null){for(e.flags|=128,Sr(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(gt,gt.current&1|2),e.child}t=t.sibling}o.tail!==null&&wt()>or&&(e.flags|=128,i=!0,Sr(o,!1),e.lanes=4194304)}else{if(!i)if(t=pa(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!dt)return Nt(e),null}else 2*wt()-o.renderingStartTime>or&&n!==1073741824&&(e.flags|=128,i=!0,Sr(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=wt(),e.sibling=null,n=gt.current,ot(gt,i?n&1|2:n&1),e):(Nt(e),null);case 22:case 23:return sh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?le&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function gy(t,e){switch(jc(e),e.tag){case 1:return ne(e.type)&&aa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ir(),ut(ee),ut(Wt),Kc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qc(e),null;case 13:if(ut(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));er()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(gt),null;case 4:return ir(),null;case 10:return Hc(e.type._context),null;case 22:case 23:return sh(),null;case 24:return null;default:return null}}var ds=!1,Bt=!1,my=typeof WeakSet=="function"?WeakSet:Set,N=null;function Vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function Bu(t,e,n){try{n()}catch(i){vt(t,e,i)}}var qd=!1;function yy(t,e){if(Su=ia,t=Q0(),Nc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break t}var s=0,a=-1,l=-1,u=0,c=0,h=t,d=null;e:for(;;){for(var f;h!==n||r!==0&&h.nodeType!==3||(a=s+r),h!==o||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break e;if(d===n&&++u===r&&(a=s),d===o&&++c===i&&(l=s),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eu={focusedElem:t,selectionRange:n},ia=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var p=y.memoizedProps,w=y.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?p:Le(e.type,p),w);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(b){vt(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return y=qd,qd=!1,y}function Qr(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Bu(e,n,o)}r=r.next}while(r!==i)}}function Wa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Vu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function H1(t){var e=t.alternate;e!==null&&(t.alternate=null,H1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qe],delete e[yo],delete e[Tu],delete e[q8],delete e[ty])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function U1(t){return t.tag===5||t.tag===3||t.tag===4}function tf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||U1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sa));else if(i!==4&&(t=t.child,t!==null))for(Wu(t,e,n),t=t.sibling;t!==null;)Wu(t,e,n),t=t.sibling}function Hu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Hu(t,e,n),t=t.sibling;t!==null;)Hu(t,e,n),t=t.sibling}var At=null,$e=!1;function Sn(t,e,n){for(n=n.child;n!==null;)Y1(t,e,n),n=n.sibling}function Y1(t,e,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(za,n)}catch{}switch(n.tag){case 5:Bt||Vi(n,e);case 6:var i=At,r=$e;At=null,Sn(t,e,n),At=i,$e=r,At!==null&&($e?(t=At,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):At.removeChild(n.stateNode));break;case 18:At!==null&&($e?(t=At,n=n.stateNode,t.nodeType===8?Dl(t.parentNode,n):t.nodeType===1&&Dl(t,n),ho(t)):Dl(At,n.stateNode));break;case 4:i=At,r=$e,At=n.stateNode.containerInfo,$e=!0,Sn(t,e,n),At=i,$e=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Bu(n,e,s),r=r.next}while(r!==i)}Sn(t,e,n);break;case 1:if(!Bt&&(Vi(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Sn(t,e,n);break;case 21:Sn(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,Sn(t,e,n),Bt=i):Sn(t,e,n);break;default:Sn(t,e,n)}}function ef(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new my),e.forEach(function(i){var r=My.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function De(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;t:for(;a!==null;){switch(a.tag){case 5:At=a.stateNode,$e=!1;break t;case 3:At=a.stateNode.containerInfo,$e=!0;break t;case 4:At=a.stateNode.containerInfo,$e=!0;break t}a=a.return}if(At===null)throw Error($(160));Y1(o,s,r),At=null,$e=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)X1(e,t),e=e.sibling}function X1(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(De(e,t),We(t),i&4){try{Qr(3,t,t.return),Wa(3,t)}catch(p){vt(t,t.return,p)}try{Qr(5,t,t.return)}catch(p){vt(t,t.return,p)}}break;case 1:De(e,t),We(t),i&512&&n!==null&&Vi(n,n.return);break;case 5:if(De(e,t),We(t),i&512&&n!==null&&Vi(n,n.return),t.flags&32){var r=t.stateNode;try{ao(r,"")}catch(p){vt(t,t.return,p)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&g0(r,o),pu(a,s);var u=pu(a,o);for(s=0;s<l.length;s+=2){var c=l[s],h=l[s+1];c==="style"?_0(r,h):c==="dangerouslySetInnerHTML"?v0(r,h):c==="children"?ao(r,h):Ec(r,c,h,u)}switch(a){case"input":uu(r,o);break;case"textarea":m0(r,o);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var f=o.value;f!=null?Hi(r,!!o.multiple,f,!1):d!==!!o.multiple&&(o.defaultValue!=null?Hi(r,!!o.multiple,o.defaultValue,!0):Hi(r,!!o.multiple,o.multiple?[]:"",!1))}r[yo]=o}catch(p){vt(t,t.return,p)}}break;case 6:if(De(e,t),We(t),i&4){if(t.stateNode===null)throw Error($(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(p){vt(t,t.return,p)}}break;case 3:if(De(e,t),We(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(p){vt(t,t.return,p)}break;case 4:De(e,t),We(t);break;case 13:De(e,t),We(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(rh=wt())),i&4&&ef(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(u=Bt)||c,De(e,t),Bt=u):De(e,t),We(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(N=t,c=t.child;c!==null;){for(h=N=c;N!==null;){switch(d=N,f=d.child,d.tag){case 0:case 11:case 14:case 15:Qr(4,d,d.return);break;case 1:Vi(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(p){vt(i,n,p)}}break;case 5:Vi(d,d.return);break;case 22:if(d.memoizedState!==null){rf(h);continue}}f!==null?(f.return=d,N=f):rf(h)}c=c.sibling}t:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=x0("display",s))}catch(p){vt(t,t.return,p)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(p){vt(t,t.return,p)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break t;for(;h.sibling===null;){if(h.return===null||h.return===t)break t;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:De(e,t),We(t),i&4&&ef(t);break;case 21:break;default:De(e,t),We(t)}}function We(t){var e=t.flags;if(e&2){try{t:{for(var n=t.return;n!==null;){if(U1(n)){var i=n;break t}n=n.return}throw Error($(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ao(r,""),i.flags&=-33);var o=tf(t);Hu(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=tf(t);Wu(t,a,s);break;default:throw Error($(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vy(t,e,n){N=t,Q1(t)}function Q1(t,e,n){for(var i=(t.mode&1)!==0;N!==null;){var r=N,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||ds;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Bt;a=ds;var u=Bt;if(ds=s,(Bt=l)&&!u)for(N=r;N!==null;)s=N,l=s.child,s.tag===22&&s.memoizedState!==null?of(r):l!==null?(l.return=s,N=l):of(r);for(;o!==null;)N=o,Q1(o),o=o.sibling;N=r,ds=a,Bt=u}nf(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,N=o):nf(t)}}function nf(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Wa(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Le(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&jd(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jd(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ho(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Bt||e.flags&512&&Vu(e)}catch(d){vt(e,e.return,d)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function rf(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function of(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wa(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var o=e.return;try{Vu(e)}catch(l){vt(e,o,l)}break;case 5:var s=e.return;try{Vu(e)}catch(l){vt(e,s,l)}}}catch(l){vt(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var xy=Math.ceil,ya=mn.ReactCurrentDispatcher,nh=mn.ReactCurrentOwner,Se=mn.ReactCurrentBatchConfig,J=0,Lt=null,Et=null,zt=0,le=0,Wi=Gn(0),Ct=0,ko=null,_i=0,Ha=0,ih=0,Kr=null,Gt=null,rh=0,or=1/0,nn=null,va=!1,Uu=null,jn=null,fs=!1,Dn=null,xa=0,Zr=0,Yu=null,Fs=-1,js=0;function Yt(){return J&6?wt():Fs!==-1?Fs:Fs=wt()}function Bn(t){return t.mode&1?J&2&&zt!==0?zt&-zt:ny.transition!==null?(js===0&&(js=L0()),js):(t=nt,t!==0||(t=window.event,t=t===void 0?16:F0(t.type)),t):1}function Ie(t,e,n,i){if(50<Zr)throw Zr=0,Yu=null,Error($(185));Ro(t,n,i),(!(J&2)||t!==Lt)&&(t===Lt&&(!(J&2)&&(Ha|=n),Ct===4&&Tn(t,zt)),ie(t,i),n===1&&J===0&&!(e.mode&1)&&(or=wt()+500,ja&&Jn()))}function ie(t,e){var n=t.callbackNode;n8(t,e);var i=na(t,t===Lt?zt:0);if(i===0)n!==null&&fd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&fd(n),e===1)t.tag===0?ey(sf.bind(null,t)):r1(sf.bind(null,t)),G8(function(){!(J&6)&&Jn()}),n=null;else{switch($0(i)){case 1:n=Dc;break;case 4:n=D0;break;case 16:n=ea;break;case 536870912:n=O0;break;default:n=ea}n=ng(n,K1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function K1(t,e){if(Fs=-1,js=0,J&6)throw Error($(327));var n=t.callbackNode;if(Ki()&&t.callbackNode!==n)return null;var i=na(t,t===Lt?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=_a(t,i);else{e=i;var r=J;J|=2;var o=G1();(Lt!==t||zt!==e)&&(nn=null,or=wt()+500,di(t,e));do try{wy();break}catch(a){Z1(t,a)}while(!0);Wc(),ya.current=o,J=r,Et!==null?e=0:(Lt=null,zt=0,e=Ct)}if(e!==0){if(e===2&&(r=xu(t),r!==0&&(i=r,e=Xu(t,r))),e===1)throw n=ko,di(t,0),Tn(t,i),ie(t,wt()),n;if(e===6)Tn(t,i);else{if(r=t.current.alternate,!(i&30)&&!_y(r)&&(e=_a(t,i),e===2&&(o=xu(t),o!==0&&(i=o,e=Xu(t,o))),e===1))throw n=ko,di(t,0),Tn(t,i),ie(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error($(345));case 2:si(t,Gt,nn);break;case 3:if(Tn(t,i),(i&130023424)===i&&(e=rh+500-wt(),10<e)){if(na(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Cu(si.bind(null,t,Gt,nn),e);break}si(t,Gt,nn);break;case 4:if(Tn(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Re(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*xy(i/1960))-i,10<i){t.timeoutHandle=Cu(si.bind(null,t,Gt,nn),i);break}si(t,Gt,nn);break;case 5:si(t,Gt,nn);break;default:throw Error($(329))}}}return ie(t,wt()),t.callbackNode===n?K1.bind(null,t):null}function Xu(t,e){var n=Kr;return t.current.memoizedState.isDehydrated&&(di(t,e).flags|=256),t=_a(t,e),t!==2&&(e=Gt,Gt=n,e!==null&&Qu(e)),t}function Qu(t){Gt===null?Gt=t:Gt.push.apply(Gt,t)}function _y(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Fe(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tn(t,e){for(e&=~ih,e&=~Ha,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Re(e),i=1<<n;t[n]=-1,e&=~i}}function sf(t){if(J&6)throw Error($(327));Ki();var e=na(t,0);if(!(e&1))return ie(t,wt()),null;var n=_a(t,e);if(t.tag!==0&&n===2){var i=xu(t);i!==0&&(e=i,n=Xu(t,i))}if(n===1)throw n=ko,di(t,0),Tn(t,e),ie(t,wt()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,si(t,Gt,nn),ie(t,wt()),null}function oh(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(or=wt()+500,ja&&Jn())}}function bi(t){Dn!==null&&Dn.tag===0&&!(J&6)&&Ki();var e=J;J|=1;var n=Se.transition,i=nt;try{if(Se.transition=null,nt=1,t)return t()}finally{nt=i,Se.transition=n,J=e,!(J&6)&&Jn()}}function sh(){le=Wi.current,ut(Wi)}function di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Z8(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(jc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&aa();break;case 3:ir(),ut(ee),ut(Wt),Kc();break;case 5:Qc(i);break;case 4:ir();break;case 13:ut(gt);break;case 19:ut(gt);break;case 10:Hc(i.type._context);break;case 22:case 23:sh()}n=n.return}if(Lt=t,Et=t=Vn(t.current,null),zt=le=e,Ct=0,ko=null,ih=Ha=_i=0,Gt=Kr=null,ui!==null){for(e=0;e<ui.length;e++)if(n=ui[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}ui=null}return t}function Z1(t,e){do{var n=Et;try{if(Wc(),Rs.current=ma,ga){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ga=!1}if(xi=0,Dt=Mt=mt=null,Xr=!1,_o=0,nh.current=null,n===null||n.return===null){Ct=1,ko=e,Et=null;break}t:{var o=t,s=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Yd(s);if(f!==null){f.flags&=-257,Xd(f,s,a,o,e),f.mode&1&&Ud(o,u,e),e=f,l=u;var y=e.updateQueue;if(y===null){var p=new Set;p.add(l),e.updateQueue=p}else y.add(l);break t}else{if(!(e&1)){Ud(o,u,e),ah();break t}l=Error($(426))}}else if(dt&&a.mode&1){var w=Yd(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Xd(w,s,a,o,e),Bc(rr(l,a));break t}}o=l=rr(l,a),Ct!==4&&(Ct=2),Kr===null?Kr=[o]:Kr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var m=$1(o,l,e);Fd(o,m);break t;case 1:a=l;var v=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(jn===null||!jn.has(x)))){o.flags|=65536,e&=-e,o.lanes|=e;var b=A1(o,a,e);Fd(o,b);break t}}o=o.return}while(o!==null)}q1(n)}catch(S){e=S,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function G1(){var t=ya.current;return ya.current=ma,t===null?ma:t}function ah(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Lt===null||!(_i&268435455)&&!(Ha&268435455)||Tn(Lt,zt)}function _a(t,e){var n=J;J|=2;var i=G1();(Lt!==t||zt!==e)&&(nn=null,di(t,e));do try{by();break}catch(r){Z1(t,r)}while(!0);if(Wc(),J=n,ya.current=i,Et!==null)throw Error($(261));return Lt=null,zt=0,Ct}function by(){for(;Et!==null;)J1(Et)}function wy(){for(;Et!==null&&!X5();)J1(Et)}function J1(t){var e=eg(t.alternate,t,le);t.memoizedProps=t.pendingProps,e===null?q1(t):Et=e,nh.current=null}function q1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gy(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,Et=null;return}}else if(n=py(n,e,le),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);Ct===0&&(Ct=5)}function si(t,e,n){var i=nt,r=Se.transition;try{Se.transition=null,nt=1,ky(t,e,n,i)}finally{Se.transition=r,nt=i}return null}function ky(t,e,n,i){do Ki();while(Dn!==null);if(J&6)throw Error($(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(i8(t,o),t===Lt&&(Et=Lt=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fs||(fs=!0,ng(ea,function(){return Ki(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Se.transition,Se.transition=null;var s=nt;nt=1;var a=J;J|=4,nh.current=null,yy(t,n),X1(n,t),W8(Eu),ia=!!Su,Eu=Su=null,t.current=n,vy(n),Q5(),J=a,nt=s,Se.transition=o}else t.current=n;if(fs&&(fs=!1,Dn=t,xa=r),o=t.pendingLanes,o===0&&(jn=null),G5(n.stateNode),ie(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(va)throw va=!1,t=Uu,Uu=null,t;return xa&1&&t.tag!==0&&Ki(),o=t.pendingLanes,o&1?t===Yu?Zr++:(Zr=0,Yu=t):Zr=0,Jn(),null}function Ki(){if(Dn!==null){var t=$0(xa),e=Se.transition,n=nt;try{if(Se.transition=null,nt=16>t?16:t,Dn===null)var i=!1;else{if(t=Dn,Dn=null,xa=0,J&6)throw Error($(331));var r=J;for(J|=4,N=t.current;N!==null;){var o=N,s=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Qr(8,c,o)}var h=c.child;if(h!==null)h.return=c,N=h;else for(;N!==null;){c=N;var d=c.sibling,f=c.return;if(H1(c),c===u){N=null;break}if(d!==null){d.return=f,N=d;break}N=f}}}var y=o.alternate;if(y!==null){var p=y.child;if(p!==null){y.child=null;do{var w=p.sibling;p.sibling=null,p=w}while(p!==null)}}N=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,N=s;else t:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Qr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,N=m;break t}N=o.return}}var v=t.current;for(N=v;N!==null;){s=N;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,N=x;else t:for(s=v;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wa(9,a)}}catch(S){vt(a,a.return,S)}if(a===s){N=null;break t}var b=a.sibling;if(b!==null){b.return=a.return,N=b;break t}N=a.return}}if(J=r,Jn(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(za,t)}catch{}i=!0}return i}finally{nt=n,Se.transition=e}}return!1}function af(t,e,n){e=rr(n,e),e=$1(t,e,1),t=Fn(t,e,1),e=Yt(),t!==null&&(Ro(t,1,e),ie(t,e))}function vt(t,e,n){if(t.tag===3)af(t,t,n);else for(;e!==null;){if(e.tag===3){af(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(jn===null||!jn.has(i))){t=rr(n,t),t=A1(e,t,1),e=Fn(e,t,1),t=Yt(),e!==null&&(Ro(e,1,t),ie(e,t));break}}e=e.return}}function Sy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(zt&n)===n&&(Ct===4||Ct===3&&(zt&130023424)===zt&&500>wt()-rh?di(t,0):ih|=n),ie(t,e)}function tg(t,e){e===0&&(t.mode&1?(e=is,is<<=1,!(is&130023424)&&(is=4194304)):e=1);var n=Yt();t=pn(t,e),t!==null&&(Ro(t,e,n),ie(t,n))}function Ey(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tg(t,n)}function My(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error($(314))}i!==null&&i.delete(e),tg(t,n)}var eg;eg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ee.current)te=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return te=!1,fy(t,e,n);te=!!(t.flags&131072)}else te=!1,dt&&e.flags&1048576&&o1(e,ca,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ns(t,e),t=e.pendingProps;var r=tr(e,Wt.current);Qi(e,n),r=Gc(null,e,i,t,r,n);var o=Jc();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ne(i)?(o=!0,la(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Yc(e),r.updater=Va,e.stateNode=r,r._reactInternals=e,Au(e,i,t,n),e=Iu(null,e,i,!0,o,n)):(e.tag=0,dt&&o&&Fc(e),Ut(null,e,r,n),e=e.child),e;case 16:i=e.elementType;t:{switch(Ns(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ty(i),t=Le(i,t),r){case 0:e=Ru(null,e,i,t,n);break t;case 1:e=Zd(null,e,i,t,n);break t;case 11:e=Qd(null,e,i,t,n);break t;case 14:e=Kd(null,e,i,Le(i.type,t),n);break t}throw Error($(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Le(i,r),Ru(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Le(i,r),Zd(t,e,i,r,n);case 3:t:{if(N1(e),t===null)throw Error($(387));i=e.pendingProps,o=e.memoizedState,r=o.element,h1(t,e),fa(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=rr(Error($(423)),e),e=Gd(t,e,i,n,r);break t}else if(i!==r){r=rr(Error($(424)),e),e=Gd(t,e,i,n,r);break t}else for(ce=Nn(e.stateNode.containerInfo.firstChild),he=e,dt=!0,Ae=null,n=u1(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(er(),i===r){e=gn(t,e,n);break t}Ut(t,e,i,n)}e=e.child}return e;case 5:return d1(e),t===null&&Ou(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Mu(i,r)?s=null:o!==null&&Mu(i,o)&&(e.flags|=32),I1(t,e),Ut(t,e,s,n),e.child;case 6:return t===null&&Ou(e),null;case 13:return F1(t,e,n);case 4:return Xc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=nr(e,null,i,n):Ut(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Le(i,r),Qd(t,e,i,r,n);case 7:return Ut(t,e,e.pendingProps,n),e.child;case 8:return Ut(t,e,e.pendingProps.children,n),e.child;case 12:return Ut(t,e,e.pendingProps.children,n),e.child;case 10:t:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,ot(ha,i._currentValue),i._currentValue=s,o!==null)if(Fe(o.value,s)){if(o.children===r.children&&!ee.current){e=gn(t,e,n);break t}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=hn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Lu(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error($(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Lu(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ut(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qi(e,n),r=Me(r),i=i(r),e.flags|=1,Ut(t,e,i,n),e.child;case 14:return i=e.type,r=Le(i,e.pendingProps),r=Le(i.type,r),Kd(t,e,i,r,n);case 15:return z1(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Le(i,r),Ns(t,e),e.tag=1,ne(i)?(t=!0,la(e)):t=!1,Qi(e,n),L1(e,i,r),Au(e,i,r,n),Iu(null,e,i,!0,t,n);case 19:return j1(t,e,n);case 22:return R1(t,e,n)}throw Error($(156,e.tag))};function ng(t,e){return P0(t,e)}function Cy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(t,e,n,i){return new Cy(t,e,n,i)}function lh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ty(t){if(typeof t=="function")return lh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cc)return 11;if(t===Tc)return 14}return 2}function Vn(t,e){var n=t.alternate;return n===null?(n=ke(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bs(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")lh(t)&&(s=1);else if(typeof t=="string")s=5;else t:switch(t){case $i:return fi(n.children,r,o,e);case Mc:s=8,r|=8;break;case ru:return t=ke(12,n,e,r|2),t.elementType=ru,t.lanes=o,t;case ou:return t=ke(13,n,e,r),t.elementType=ou,t.lanes=o,t;case su:return t=ke(19,n,e,r),t.elementType=su,t.lanes=o,t;case d0:return Ua(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case c0:s=10;break t;case h0:s=9;break t;case Cc:s=11;break t;case Tc:s=14;break t;case En:s=16,i=null;break t}throw Error($(130,t==null?t:typeof t,""))}return e=ke(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function fi(t,e,n,i){return t=ke(7,t,i,e),t.lanes=n,t}function Ua(t,e,n,i){return t=ke(22,t,i,e),t.elementType=d0,t.lanes=n,t.stateNode={isHidden:!1},t}function Nl(t,e,n){return t=ke(6,t,null,e),t.lanes=n,t}function Fl(t,e,n){return e=ke(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Py(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xl(0),this.expirationTimes=xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function uh(t,e,n,i,r,o,s,a,l){return t=new Py(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=ke(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(o),t}function Dy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Li,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ig(t){if(!t)return Yn;t=t._reactInternals;t:{if(Ei(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(ne(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(ne(n))return i1(t,n,e)}return e}function rg(t,e,n,i,r,o,s,a,l){return t=uh(n,i,!0,t,r,o,s,a,l),t.context=ig(null),n=t.current,i=Yt(),r=Bn(n),o=hn(i,r),o.callback=e??null,Fn(n,o,r),t.current.lanes=r,Ro(t,r,i),ie(t,i),t}function Ya(t,e,n,i){var r=e.current,o=Yt(),s=Bn(r);return n=ig(n),e.context===null?e.context=n:e.pendingContext=n,e=hn(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Fn(r,e,s),t!==null&&(Ie(t,r,s,o),zs(t,r,s)),s}function ba(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ch(t,e){lf(t,e),(t=t.alternate)&&lf(t,e)}function Oy(){return null}var og=typeof reportError=="function"?reportError:function(t){console.error(t)};function hh(t){this._internalRoot=t}Xa.prototype.render=hh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));Ya(t,e,null,null)};Xa.prototype.unmount=hh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bi(function(){Ya(null,t,null,null)}),e[fn]=null}};function Xa(t){this._internalRoot=t}Xa.prototype.unstable_scheduleHydration=function(t){if(t){var e=R0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cn.length&&e!==0&&e<Cn[n].priority;n++);Cn.splice(n,0,t),n===0&&N0(t)}};function dh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uf(){}function Ly(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=ba(s);o.call(u)}}var s=rg(e,i,t,0,null,!1,!1,"",uf);return t._reactRootContainer=s,t[fn]=s.current,go(t.nodeType===8?t.parentNode:t),bi(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ba(l);a.call(u)}}var l=uh(t,0,!1,null,null,!1,!1,"",uf);return t._reactRootContainer=l,t[fn]=l.current,go(t.nodeType===8?t.parentNode:t),bi(function(){Ya(e,l,n,i)}),l}function Ka(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=ba(s);a.call(l)}}Ya(e,s,t,r)}else s=Ly(n,e,t,r,i);return ba(s)}A0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ar(e.pendingLanes);n!==0&&(Oc(e,n|1),ie(e,wt()),!(J&6)&&(or=wt()+500,Jn()))}break;case 13:bi(function(){var i=pn(t,1);if(i!==null){var r=Yt();Ie(i,t,1,r)}}),ch(t,1)}};Lc=function(t){if(t.tag===13){var e=pn(t,134217728);if(e!==null){var n=Yt();Ie(e,t,134217728,n)}ch(t,134217728)}};z0=function(t){if(t.tag===13){var e=Bn(t),n=pn(t,e);if(n!==null){var i=Yt();Ie(n,t,e,i)}ch(t,e)}};R0=function(){return nt};I0=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};mu=function(t,e,n){switch(e){case"input":if(uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Fa(i);if(!r)throw Error($(90));p0(i),uu(i,r)}}}break;case"textarea":m0(t,n);break;case"select":e=n.value,e!=null&&Hi(t,!!n.multiple,e,!1)}};k0=oh;S0=bi;var $y={usingClientEntryPoint:!1,Events:[No,Ii,Fa,b0,w0,oh]},Er={findFiberByHostInstance:li,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ay={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C0(t),t===null?null:t.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||Oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ps.isDisabled&&ps.supportsFiber)try{za=ps.inject(Ay),Ke=ps}catch{}}fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$y;fe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dh(e))throw Error($(200));return Dy(t,e,null,n)};fe.createRoot=function(t,e){if(!dh(t))throw Error($(299));var n=!1,i="",r=og;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=uh(t,1,!1,null,null,n,!1,i,r),t[fn]=e.current,go(t.nodeType===8?t.parentNode:t),new hh(e)};fe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=C0(e),t=t===null?null:t.stateNode,t};fe.flushSync=function(t){return bi(t)};fe.hydrate=function(t,e,n){if(!Qa(e))throw Error($(200));return Ka(null,t,e,!0,n)};fe.hydrateRoot=function(t,e,n){if(!dh(t))throw Error($(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=og;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=rg(e,null,t,1,n??null,r,!1,o,s),t[fn]=e.current,go(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Xa(e)};fe.render=function(t,e,n){if(!Qa(e))throw Error($(200));return Ka(null,t,e,!1,n)};fe.unmountComponentAtNode=function(t){if(!Qa(t))throw Error($(40));return t._reactRootContainer?(bi(function(){Ka(null,null,t,!1,function(){t._reactRootContainer=null,t[fn]=null})}),!0):!1};fe.unstable_batchedUpdates=oh;fe.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Qa(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Ka(t,e,n,!1,i)};fe.version="18.3.1-next-f1338f8080-20240426";function sg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sg)}catch(t){console.error(t)}}sg(),s0.exports=fe;var zy=s0.exports,ag,cf=zy;ag=cf.createRoot,cf.hydrateRoot;const Ry="/Trail-Map/vite.svg";var Iy=Object.defineProperty,Ny=(t,e,n)=>e in t?Iy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,A=(t,e,n)=>Ny(t,typeof e!="symbol"?e+"":e,n),Fy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ug={exports:{}},Mr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf;function jy(){if(hf)return Mr;hf=1;var t=r0,e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(a,l,u){var c,h={},d=null,f=null;u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),l.ref!==void 0&&(f=l.ref);for(c in l)i.call(l,c)&&!o.hasOwnProperty(c)&&(h[c]=l[c]);if(a&&a.defaultProps)for(c in l=a.defaultProps,l)h[c]===void 0&&(h[c]=l[c]);return{$$typeof:e,type:a,key:d,ref:f,props:h,_owner:r.current}}return Mr.Fragment=n,Mr.jsx=s,Mr.jsxs=s,Mr}ug.exports=jy();var jl=ug.exports,Ku={exports:{}};(function(t,e){(function(n,i){i(e,r0)})(Fy,function(n,i){var r={exports:{}},o={};/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var s;function a(){if(s)return o;s=1;var x=i,b=Symbol.for("react.element"),S=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,C=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function O(P,z,F){var U,tt={},B=null,H=null;F!==void 0&&(B=""+F),z.key!==void 0&&(B=""+z.key),z.ref!==void 0&&(H=z.ref);for(U in z)E.call(z,U)&&!M.hasOwnProperty(U)&&(tt[U]=z[U]);if(P&&P.defaultProps)for(U in z=P.defaultProps,z)tt[U]===void 0&&(tt[U]=z[U]);return{$$typeof:b,type:P,key:B,ref:H,props:tt,_owner:C.current}}return o.Fragment=S,o.jsx=O,o.jsxs=O,o}r.exports=a();var l=r.exports;const u=x=>{if(typeof x!="string")throw new Error("Invalid map library version");return new URL(`https://www.nps.gov/lib/npmap.js/${x}/dist/npmap5-base.min.js`)};async function c(x,b=v){if(typeof b!="string")return window.NPMap=b,b;const S=u(b);let E=document.getElementById(x);return E||window.NPMap?window.NPMap.Map:(E=document.createElement("script"),E.id=x,E.src=S.href,E.async=!0,document.body.appendChild(E),new Promise((C,M)=>{E.onerror=O=>M(O),E.onload=()=>{C(window.NPMap.Map)}}))}function h(x,b){let S=document.getElementById(x);S||(S=document.createElement("style"),S.id=x,S.innerHTML=`
      .${b} img,
      .${b} svg,
      .${b} video,
      .${b} canvas,
      .${b} audio,
      .${b} iframe,
      .${b} embed,
      .${b} object {
        display: initial;
      }

      .${b} *,
      .${b} *::before,
      .${b} *::after {
        box-sizing: initial;
        border-width: initial;
        border-style: initial;
        border-color: initial;
      }`,document.body.appendChild(S))}function d(x){const b=document.getElementById(x);b&&document.body.removeChild(b)}function f(x,b,S){b.forEach(E=>{"layer"in E?x[S](E.type,E.layer,E.listener):x[S](E.type,E.listener)})}function y(x,b=[],S=[]){const E=(O,P)=>O.type!==P.type||O.listener!==P.listener?!1:"layer"in O?"layer"in P&&O.layer===P.layer:!0,C=S.filter(O=>!b.some(P=>E(O,P))),M=b.filter(O=>!S.some(P=>E(O,P)));f(x,C,"off"),f(x,M,"on")}function p(x){if(x===null||typeof x!="object")return x;if(typeof x=="function")return x.bind(this);if(Array.isArray(x))return x.map(b=>p.call(this,b));if(x instanceof Object){const b={};for(let S in x)Object.prototype.hasOwnProperty.call(x,S)&&(b[S]=p.call(this,x[S]));return b}throw new Error(`Unable to clone object: Unsupported object type - ${typeof x}.`)}const w={version:"NPMap5",basemap:["mapbox://styles/atlas-user/ck58pyquo009v01p99xebegr9"]},m=x=>{const b=Math.random().toString(36).substring(2),S="npmap5-container-"+b,E="npmap5-script-"+b,C="npmap5-style-"+b,M=i.useRef(),[O,P]=i.useState();let z=!1;const F=i.useRef(null);i.useEffect(()=>(F.current&&!O&&!z&&(z=!0,tt(F.current).then(()=>{z=!1})),()=>{d(E),d(C),O&&F.current&&(O.remove(),P(void 0),M.current=void 0)}),[]),i.useEffect(()=>{B(x)},[x]);const U=H=>{const{height:et,width:D,onEvents:I,mapLibrary:R,callback:Y,...X}=H;return X},tt=async H=>{M.current=x,h(C,S);const et=await c(E,x.mapLibrary),D=new et({...U(x),container:H,style:x.style||w});f(D,x.onEvents||[],"on"),P(D)},B=H=>{const et=M.current&&p(M.current);M.current=p(x),!(O===void 0||et===void 0)&&(y(O,H.onEvents,et.onEvents),O.updateOptions(U(H),U(et),{defaultStyle:w}))};return l.jsx("div",{ref:F,className:S+" maplibregl-map",style:{height:x.height,width:x.width}})},v="5.0.3";n.DEFAULT_NPMAP_VERSION=v,n.NPMap=m,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})})})(Ku,Ku.exports);var By=Ku.exports;const Vy=lg(By),Wy="trail-map",Hy="trail-map-controls",Zi="trail-elevation-profile",Uy="controls-top-left",Yy="controls-top-right",Xy="controls-bottom-left",cg="controls-bottom-right",Zu="popup-header-image-container",Qy="Selected Trails",hg="Selected Trail Alerts",Ky="Selected Points of Interest",Gu="top-right",dg="bottom-right",Bl="More Info",Zy="Less Info",Gy="Elevation Profile",fg="trailInfo",Wn="core_details",Jy="trail_names",df="trail_status",qy="asset",Rr="name",pg="description",tv="images",ev="amenities",So=".",ff="geojson",pf="Feature",wa="FeatureCollection",Za="LineString",fh="MultiLineString",nv=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],iv=["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."],rv=63710088e-1,gf=3.28084,ov=621371e-9,sv={home:{position:Gu,order:0},navigation:{position:Gu,order:1,showCompass:!0,showZoom:!0,visualizePitch:!1},scale:{position:dg,order:-1}},av={linear:!0,padding:60,curve:1.42,speed:.5},gg="115px",mg="130px",yg="25px",mf="linear-gradient(transparent, 95%, silver)",vg="M128 896 128 737.706667 459.946667 546.133333 620.8 640 896 480 896 896 128 896M896 381.44 620.8 540.586667 459.946667 448 128 640 128 545.706667 459.946667 354.133333 620.8 448 896 288 896 381.44Z",lv="maplibregl-control-container",Ga="maplibregl-ctrl",ph="maplibregl-ctrl-group",uv="maplibregl-ctrl-top-left",cv="maplibregl-ctrl-top-right",Vs="maplibregl-ctrl-bottom-left",Ws="maplibregl-ctrl-bottom-right",gh="default-font-style",xg="trail-alerts-toggle",_g="trail-alerts-toggle-label",bg="trail-elevation-profile-chart",wg="TEST-trail-elevation-profile-chart",hv=`.maplibregl-popup-content {
    color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}

.maplibregl-popup-content-multipopup {
    width: 100%;
}

.maplibregl-ctrl .switch {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 17px;
}

/* The slider itself */
.maplibregl-ctrl .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
}

.maplibregl-ctrl .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #999999;
    transition: .4s;
}

.maplibregl-ctrl .slider:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: .4s;
}

.maplibregl-ctrl input:checked + .slider {
    background-color: #cb9733;
}

input:checked + .slider:before {
    transform: translateX(13px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 17px;
}

.slider.round:before {
    border-radius: 50%;
}

.${gh} {
    font-size: 12px;
    font-weight: 700;
    font-family: inherit;
}
    
.${xg} {
    width: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: left;
    align-items: center;
    padding: 8px;
    background-color: white;
    color: black;
    border-radius: 4px;
    z-index: -1;
}
    
.${_g} {
    display: block;
    padding-left: 5px;
}
    
.${bg} {
    height: 25vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: black;
    background-color: white;
    position: absolute;
    left: 1vw;
    bottom: 0px;
    right: 1vw;
    margin: 1vh;
    border-radius: 4px;
    box-shadow: black 0px 0px 10px 0px;
}
    
.${wg} {
    width: 97vw;
    color: black;
    background-color: white;
    height: 25vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    left: 1vw;
    bottom: 0px;
    right: 1vw;
    margin: 1vh;
    border-radius: 4px;
    box-shadow: black 0px 0px 10px 0px;
}`;/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function jo(t){return t+.5|0}const On=(t,e,n)=>Math.max(Math.min(t,n),e);function Ir(t){return On(jo(t*2.55),0,255)}function Hn(t){return On(jo(t*255),0,255)}function on(t){return On(jo(t/2.55)/100,0,1)}function yf(t){return On(jo(t*100),0,100)}const ve={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ju=[..."0123456789ABCDEF"],dv=t=>Ju[t&15],fv=t=>Ju[(t&240)>>4]+Ju[t&15],gs=t=>(t&240)>>4===(t&15),pv=t=>gs(t.r)&&gs(t.g)&&gs(t.b)&&gs(t.a);function gv(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&ve[t[1]]*17,g:255&ve[t[2]]*17,b:255&ve[t[3]]*17,a:e===5?ve[t[4]]*17:255}:(e===7||e===9)&&(n={r:ve[t[1]]<<4|ve[t[2]],g:ve[t[3]]<<4|ve[t[4]],b:ve[t[5]]<<4|ve[t[6]],a:e===9?ve[t[7]]<<4|ve[t[8]]:255})),n}const mv=(t,e)=>t<255?e(t):"";function yv(t){var e=pv(t)?dv:fv;return t?"#"+e(t.r)+e(t.g)+e(t.b)+mv(t.a,e):void 0}const vv=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function kg(t,e,n){const i=e*Math.min(n,1-n),r=(o,s=(o+t/30)%12)=>n-i*Math.max(Math.min(s-3,9-s,1),-1);return[r(0),r(8),r(4)]}function xv(t,e,n){const i=(r,o=(r+t/60)%6)=>n-n*e*Math.max(Math.min(o,4-o,1),0);return[i(5),i(3),i(1)]}function _v(t,e,n){const i=kg(t,1,.5);let r;for(e+n>1&&(r=1/(e+n),e*=r,n*=r),r=0;r<3;r++)i[r]*=1-e-n,i[r]+=e;return i}function bv(t,e,n,i,r){return t===r?(e-n)/i+(e<n?6:0):e===r?(n-t)/i+2:(t-e)/i+4}function mh(t){const e=t.r/255,n=t.g/255,i=t.b/255,r=Math.max(e,n,i),o=Math.min(e,n,i),s=(r+o)/2;let a,l,u;return r!==o&&(u=r-o,l=s>.5?u/(2-r-o):u/(r+o),a=bv(e,n,i,u,r),a=a*60+.5),[a|0,l||0,s]}function yh(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(Hn)}function vh(t,e,n){return yh(kg,t,e,n)}function wv(t,e,n){return yh(_v,t,e,n)}function kv(t,e,n){return yh(xv,t,e,n)}function Sg(t){return(t%360+360)%360}function Sv(t){const e=vv.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?Ir(+e[5]):Hn(+e[5]));const r=Sg(+e[2]),o=+e[3]/100,s=+e[4]/100;return e[1]==="hwb"?i=wv(r,o,s):e[1]==="hsv"?i=kv(r,o,s):i=vh(r,o,s),{r:i[0],g:i[1],b:i[2],a:n}}function Ev(t,e){var n=mh(t);n[0]=Sg(n[0]+e),n=vh(n),t.r=n[0],t.g=n[1],t.b=n[2]}function Mv(t){if(!t)return;const e=mh(t),n=e[0],i=yf(e[1]),r=yf(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${r}%, ${on(t.a)})`:`hsl(${n}, ${i}%, ${r}%)`}const vf={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},xf={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Cv(){const t={},e=Object.keys(xf),n=Object.keys(vf);let i,r,o,s,a;for(i=0;i<e.length;i++){for(s=a=e[i],r=0;r<n.length;r++)o=n[r],a=a.replace(o,vf[o]);o=parseInt(xf[s],16),t[a]=[o>>16&255,o>>8&255,o&255]}return t}let ms;function Tv(t){ms||(ms=Cv(),ms.transparent=[0,0,0,0]);const e=ms[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const Pv=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Dv(t){const e=Pv.exec(t);let n=255,i,r,o;if(e){if(e[7]!==i){const s=+e[7];n=e[8]?Ir(s):On(s*255,0,255)}return i=+e[1],r=+e[3],o=+e[5],i=255&(e[2]?Ir(i):On(i,0,255)),r=255&(e[4]?Ir(r):On(r,0,255)),o=255&(e[6]?Ir(o):On(o,0,255)),{r:i,g:r,b:o,a:n}}}function Ov(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${on(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Vl=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,Pi=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function Lv(t,e,n){const i=Pi(on(t.r)),r=Pi(on(t.g)),o=Pi(on(t.b));return{r:Hn(Vl(i+n*(Pi(on(e.r))-i))),g:Hn(Vl(r+n*(Pi(on(e.g))-r))),b:Hn(Vl(o+n*(Pi(on(e.b))-o))),a:t.a+n*(e.a-t.a)}}function ys(t,e,n){if(t){let i=mh(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=vh(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function Eg(t,e){return t&&Object.assign(e||{},t)}function _f(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Hn(t[3]))):(e=Eg(t,{r:0,g:0,b:0,a:1}),e.a=Hn(e.a)),e}function $v(t){return t.charAt(0)==="r"?Dv(t):Sv(t)}class Eo{constructor(e){if(e instanceof Eo)return e;const n=typeof e;let i;n==="object"?i=_f(e):n==="string"&&(i=gv(e)||Tv(e)||$v(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=Eg(this._rgb);return e&&(e.a=on(e.a)),e}set rgb(e){this._rgb=_f(e)}rgbString(){return this._valid?Ov(this._rgb):void 0}hexString(){return this._valid?yv(this._rgb):void 0}hslString(){return this._valid?Mv(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,r=e.rgb;let o;const s=n===o?.5:n,a=2*s-1,l=i.a-r.a,u=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;o=1-u,i.r=255&u*i.r+o*r.r+.5,i.g=255&u*i.g+o*r.g+.5,i.b=255&u*i.b+o*r.b+.5,i.a=s*i.a+(1-s)*r.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=Lv(this._rgb,e._rgb,n)),this}clone(){return new Eo(this.rgb)}alpha(e){return this._rgb.a=Hn(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=jo(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return ys(this._rgb,2,e),this}darken(e){return ys(this._rgb,2,-e),this}saturate(e){return ys(this._rgb,1,e),this}desaturate(e){return ys(this._rgb,1,-e),this}rotate(e){return Ev(this._rgb,e),this}}/*!
 * Chart.js v4.4.4
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */function qe(){}const Av=(()=>{let t=0;return()=>t++})();function q(t){return t===null||typeof t>"u"}function ft(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function G(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function xt(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function ae(t,e){return xt(t)?t:e}function V(t,e){return typeof t>"u"?e:t}const zv=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100:+t/e,Mg=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function W(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function Q(t,e,n,i){let r,o,s;if(ft(t))for(o=t.length,r=0;r<o;r++)e.call(n,t[r],r);else if(G(t))for(s=Object.keys(t),o=s.length,r=0;r<o;r++)e.call(n,t[s[r]],s[r])}function ka(t,e){let n,i,r,o;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(r=t[n],o=e[n],r.datasetIndex!==o.datasetIndex||r.index!==o.index)return!1;return!0}function Sa(t){if(ft(t))return t.map(Sa);if(G(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let r=0;for(;r<i;++r)e[n[r]]=Sa(t[n[r]]);return e}return t}function Cg(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function Rv(t,e,n,i){if(!Cg(t))return;const r=e[t],o=n[t];G(r)&&G(o)?Mo(r,o,i):e[t]=Sa(o)}function Mo(t,e,n){const i=ft(e)?e:[e],r=i.length;if(!G(t))return t;n=n||{};const o=n.merger||Rv;let s;for(let a=0;a<r;++a){if(s=i[a],!G(s))continue;const l=Object.keys(s);for(let u=0,c=l.length;u<c;++u)o(l[u],t,s,n)}return t}function Gr(t,e){return Mo(t,e,{merger:Iv})}function Iv(t,e,n){if(!Cg(t))return;const i=e[t],r=n[t];G(i)&&G(r)?Gr(i,r):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Sa(r))}const bf={"":t=>t,x:t=>t.x,y:t=>t.y};function Nv(t){const e=t.split("."),n=[];let i="";for(const r of e)i+=r,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function Fv(t){const e=Nv(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function Xn(t,e){return(bf[e]||(bf[e]=Fv(e)))(t)}function xh(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Co=t=>typeof t<"u",Qn=t=>typeof t=="function",wf=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function jv(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const ht=Math.PI,ct=2*ht,Bv=ct+ht,Ea=Number.POSITIVE_INFINITY,Vv=ht/180,kt=ht/2,ei=ht/4,kf=ht*2/3,Ln=Math.log10,Ee=Math.sign;function Jr(t,e,n){return Math.abs(t-e)<n}function Sf(t){const e=Math.round(t);t=Jr(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(Ln(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function Wv(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((r,o)=>r-o).pop(),e}function sr(t){return!isNaN(parseFloat(t))&&isFinite(t)}function Hv(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function Tg(t,e,n){let i,r,o;for(i=0,r=t.length;i<r;i++)o=t[i][n],isNaN(o)||(e.min=Math.min(e.min,o),e.max=Math.max(e.max,o))}function ze(t){return t*(ht/180)}function _h(t){return t*(180/ht)}function Ef(t){if(!xt(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function Pg(t,e){const n=e.x-t.x,i=e.y-t.y,r=Math.sqrt(n*n+i*i);let o=Math.atan2(i,n);return o<-.5*ht&&(o+=ct),{angle:o,distance:r}}function qu(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Uv(t,e){return(t-e+Bv)%ct-ht}function ue(t){return(t%ct+ct)%ct}function To(t,e,n,i){const r=ue(t),o=ue(e),s=ue(n),a=ue(o-r),l=ue(s-r),u=ue(r-o),c=ue(r-s);return r===o||r===s||i&&o===s||a>l&&u<c}function Ot(t,e,n){return Math.max(e,Math.min(n,t))}function Yv(t){return Ot(t,-32768,32767)}function ln(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function bh(t,e,n){n=n||(s=>t[s]<e);let i=t.length-1,r=0,o;for(;i-r>1;)o=r+i>>1,n(o)?r=o:i=o;return{lo:r,hi:i}}const un=(t,e,n,i)=>bh(t,n,i?r=>{const o=t[r][e];return o<n||o===n&&t[r+1][e]===n}:r=>t[r][e]<n),Xv=(t,e,n)=>bh(t,n,i=>t[i][e]>=n);function Qv(t,e,n){let i=0,r=t.length;for(;i<r&&t[i]<e;)i++;for(;r>i&&t[r-1]>n;)r--;return i>0||r<t.length?t.slice(i,r):t}const Dg=["push","pop","shift","splice","unshift"];function Kv(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Dg.forEach(n=>{const i="_onData"+xh(n),r=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...o){const s=r.apply(this,o);return t._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...o)}),s}})})}function Mf(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,r=i.indexOf(e);r!==-1&&i.splice(r,1),!(i.length>0)&&(Dg.forEach(o=>{delete t[o]}),delete t._chartjs)}function Og(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const Lg=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function $g(t,e){let n=[],i=!1;return function(...r){n=r,i||(i=!0,Lg.call(window,()=>{i=!1,t.apply(e,n)}))}}function Zv(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const wh=t=>t==="start"?"left":t==="end"?"right":"center",Ft=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,Gv=(t,e,n,i)=>t===(i?"left":"right")?n:t==="center"?(e+n)/2:e;function Ag(t,e,n){const i=e.length;let r=0,o=i;if(t._sorted){const{iScale:s,_parsed:a}=t,l=s.axis,{min:u,max:c,minDefined:h,maxDefined:d}=s.getUserBounds();h&&(r=Ot(Math.min(un(a,l,u).lo,n?i:un(e,l,s.getPixelForValue(u)).lo),0,i-1)),d?o=Ot(Math.max(un(a,s.axis,c,!0).hi+1,n?0:un(e,l,s.getPixelForValue(c),!0).hi+1),r,i)-r:o=i-r}return{start:r,count:o}}function zg(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,r={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=r,!0;const o=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,r),o}const vs=t=>t===0||t===1,Cf=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*ct/n)),Tf=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*ct/n)+1,qr={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*kt)+1,easeOutSine:t=>Math.sin(t*kt),easeInOutSine:t=>-.5*(Math.cos(ht*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>vs(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>vs(t)?t:Cf(t,.075,.3),easeOutElastic:t=>vs(t)?t:Tf(t,.075,.3),easeInOutElastic(t){return vs(t)?t:t<.5?.5*Cf(t*2,.1125,.45):.5+.5*Tf(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-qr.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?qr.easeInBounce(t*2)*.5:qr.easeOutBounce(t*2-1)*.5+.5};function kh(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function Pf(t){return kh(t)?t:new Eo(t)}function Wl(t){return kh(t)?t:new Eo(t).saturate(.5).darken(.1).hexString()}const Jv=["x","y","borderWidth","radius","tension"],qv=["color","borderColor","backgroundColor"];function t3(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:qv},numbers:{type:"number",properties:Jv}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function e3(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Df=new Map;function n3(t,e){e=e||{};const n=t+JSON.stringify(e);let i=Df.get(n);return i||(i=new Intl.NumberFormat(t,e),Df.set(n,i)),i}function Bo(t,e,n){return n3(e,n).format(t)}const Rg={values(t){return ft(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let r,o=t;if(n.length>1){const u=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(u<1e-4||u>1e15)&&(r="scientific"),o=i3(t,n)}const s=Ln(Math.abs(o)),a=isNaN(s)?1:Math.max(Math.min(-1*Math.floor(s),20),0),l={notation:r,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),Bo(t,i,l)},logarithmic(t,e,n){if(t===0)return"0";const i=n[e].significand||t/Math.pow(10,Math.floor(Ln(t)));return[1,2,3,5,10,15].includes(i)||e>.8*n.length?Rg.numeric.call(this,t,e,n):""}};function i3(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var Ja={formatters:Rg};function r3(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Ja.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const wi=Object.create(null),tc=Object.create(null);function to(t,e){if(!e)return t;const n=e.split(".");for(let i=0,r=n.length;i<r;++i){const o=n[i];t=t[o]||(t[o]=Object.create(null))}return t}function Hl(t,e,n){return typeof e=="string"?Mo(to(t,e),n):Mo(to(t,""),e)}class o3{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,r)=>Wl(r.backgroundColor),this.hoverBorderColor=(i,r)=>Wl(r.borderColor),this.hoverColor=(i,r)=>Wl(r.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return Hl(this,e,n)}get(e){return to(this,e)}describe(e,n){return Hl(tc,e,n)}override(e,n){return Hl(wi,e,n)}route(e,n,i,r){const o=to(this,e),s=to(this,i),a="_"+n;Object.defineProperties(o,{[a]:{value:o[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],u=s[r];return G(l)?Object.assign({},u,l):V(l,u)},set(l){this[a]=l}}})}apply(e){e.forEach(n=>n(this))}}var _t=new o3({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[t3,e3,r3]);function s3(t){return!t||q(t.size)||q(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Ma(t,e,n,i,r){let o=e[r];return o||(o=e[r]=t.measureText(r).width,n.push(r)),o>i&&(i=o),i}function a3(t,e,n,i){i=i||{};let r=i.data=i.data||{},o=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(r=i.data={},o=i.garbageCollect=[],i.font=e),t.save(),t.font=e;let s=0;const a=n.length;let l,u,c,h,d;for(l=0;l<a;l++)if(h=n[l],h!=null&&!ft(h))s=Ma(t,r,o,s,h);else if(ft(h))for(u=0,c=h.length;u<c;u++)d=h[u],d!=null&&!ft(d)&&(s=Ma(t,r,o,s,d));t.restore();const f=o.length/2;if(f>n.length){for(l=0;l<f;l++)delete r[o[l]];o.splice(0,f)}return s}function ni(t,e,n){const i=t.currentDevicePixelRatio,r=n!==0?Math.max(n/2,.5):0;return Math.round((e-r)*i)/i+r}function Of(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function ec(t,e,n,i){Ig(t,e,n,i,null)}function Ig(t,e,n,i,r){let o,s,a,l,u,c,h,d;const f=e.pointStyle,y=e.rotation,p=e.radius;let w=(y||0)*Vv;if(f&&typeof f=="object"&&(o=f.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(w),t.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),t.restore();return}if(!(isNaN(p)||p<=0)){switch(t.beginPath(),f){default:r?t.ellipse(n,i,r/2,p,0,0,ct):t.arc(n,i,p,0,ct),t.closePath();break;case"triangle":c=r?r/2:p,t.moveTo(n+Math.sin(w)*c,i-Math.cos(w)*p),w+=kf,t.lineTo(n+Math.sin(w)*c,i-Math.cos(w)*p),w+=kf,t.lineTo(n+Math.sin(w)*c,i-Math.cos(w)*p),t.closePath();break;case"rectRounded":u=p*.516,l=p-u,s=Math.cos(w+ei)*l,h=Math.cos(w+ei)*(r?r/2-u:l),a=Math.sin(w+ei)*l,d=Math.sin(w+ei)*(r?r/2-u:l),t.arc(n-h,i-a,u,w-ht,w-kt),t.arc(n+d,i-s,u,w-kt,w),t.arc(n+h,i+a,u,w,w+kt),t.arc(n-d,i+s,u,w+kt,w+ht),t.closePath();break;case"rect":if(!y){l=Math.SQRT1_2*p,c=r?r/2:l,t.rect(n-c,i-l,2*c,2*l);break}w+=ei;case"rectRot":h=Math.cos(w)*(r?r/2:p),s=Math.cos(w)*p,a=Math.sin(w)*p,d=Math.sin(w)*(r?r/2:p),t.moveTo(n-h,i-a),t.lineTo(n+d,i-s),t.lineTo(n+h,i+a),t.lineTo(n-d,i+s),t.closePath();break;case"crossRot":w+=ei;case"cross":h=Math.cos(w)*(r?r/2:p),s=Math.cos(w)*p,a=Math.sin(w)*p,d=Math.sin(w)*(r?r/2:p),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+d,i-s),t.lineTo(n-d,i+s);break;case"star":h=Math.cos(w)*(r?r/2:p),s=Math.cos(w)*p,a=Math.sin(w)*p,d=Math.sin(w)*(r?r/2:p),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+d,i-s),t.lineTo(n-d,i+s),w+=ei,h=Math.cos(w)*(r?r/2:p),s=Math.cos(w)*p,a=Math.sin(w)*p,d=Math.sin(w)*(r?r/2:p),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+d,i-s),t.lineTo(n-d,i+s);break;case"line":s=r?r/2:Math.cos(w)*p,a=Math.sin(w)*p,t.moveTo(n-s,i-a),t.lineTo(n+s,i+a);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(w)*(r?r/2:p),i+Math.sin(w)*p);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function cn(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function qa(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function tl(t){t.restore()}function l3(t,e,n,i,r){if(!e)return t.lineTo(n.x,n.y);if(r==="middle"){const o=(e.x+n.x)/2;t.lineTo(o,e.y),t.lineTo(o,n.y)}else r==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function u3(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function c3(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),q(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function h3(t,e,n,i,r){if(r.strikethrough||r.underline){const o=t.measureText(i),s=e-o.actualBoundingBoxLeft,a=e+o.actualBoundingBoxRight,l=n-o.actualBoundingBoxAscent,u=n+o.actualBoundingBoxDescent,c=r.strikethrough?(l+u)/2:u;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=r.decorationWidth||2,t.moveTo(s,c),t.lineTo(a,c),t.stroke()}}function d3(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function ki(t,e,n,i,r,o={}){const s=ft(e)?e:[e],a=o.strokeWidth>0&&o.strokeColor!=="";let l,u;for(t.save(),t.font=r.string,c3(t,o),l=0;l<s.length;++l)u=s[l],o.backdrop&&d3(t,o.backdrop),a&&(o.strokeColor&&(t.strokeStyle=o.strokeColor),q(o.strokeWidth)||(t.lineWidth=o.strokeWidth),t.strokeText(u,n,i,o.maxWidth)),t.fillText(u,n,i,o.maxWidth),h3(t,n,i,u,o),i+=Number(r.lineHeight);t.restore()}function Po(t,e){const{x:n,y:i,w:r,h:o,radius:s}=e;t.arc(n+s.topLeft,i+s.topLeft,s.topLeft,1.5*ht,ht,!0),t.lineTo(n,i+o-s.bottomLeft),t.arc(n+s.bottomLeft,i+o-s.bottomLeft,s.bottomLeft,ht,kt,!0),t.lineTo(n+r-s.bottomRight,i+o),t.arc(n+r-s.bottomRight,i+o-s.bottomRight,s.bottomRight,kt,0,!0),t.lineTo(n+r,i+s.topRight),t.arc(n+r-s.topRight,i+s.topRight,s.topRight,0,-kt,!0),t.lineTo(n+s.topLeft,i)}const f3=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,p3=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function g3(t,e){const n=(""+t).match(f3);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const m3=t=>+t||0;function Sh(t,e){const n={},i=G(e),r=i?Object.keys(e):e,o=G(t)?i?s=>V(t[s],t[e[s]]):s=>t[s]:()=>t;for(const s of r)n[s]=m3(o(s));return n}function Ng(t){return Sh(t,{top:"y",right:"x",bottom:"y",left:"x"})}function pi(t){return Sh(t,["topLeft","topRight","bottomLeft","bottomRight"])}function Ht(t){const e=Ng(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Tt(t,e){t=t||{},e=e||_t.font;let n=V(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=V(t.style,e.style);i&&!(""+i).match(p3)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const r={family:V(t.family,e.family),lineHeight:g3(V(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:V(t.weight,e.weight),string:""};return r.string=s3(r),r}function Nr(t,e,n,i){let r,o,s;for(r=0,o=t.length;r<o;++r)if(s=t[r],s!==void 0&&s!==void 0)return s}function y3(t,e,n){const{min:i,max:r}=t,o=Mg(e,(r-i)/2),s=(a,l)=>n&&a===0?0:a+l;return{min:s(i,-Math.abs(o)),max:s(r,o)}}function qn(t,e){return Object.assign(Object.create(t),e)}function Eh(t,e=[""],n,i,r=()=>t[0]){const o=n||t;typeof i>"u"&&(i=Vg("_fallback",t));const s={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:o,_fallback:i,_getTarget:r,override:a=>Eh([a,...t],e,o,i)};return new Proxy(s,{deleteProperty(a,l){return delete a[l],delete a._keys,delete t[0][l],!0},get(a,l){return jg(a,l,()=>E3(l,e,t,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(a,l){return $f(a).includes(l)},ownKeys(a){return $f(a)},set(a,l,u){const c=a._storage||(a._storage=r());return a[l]=c[l]=u,delete a._keys,!0}})}function ar(t,e,n,i){const r={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:Fg(t,i),setContext:o=>ar(t,o,n,i),override:o=>ar(t.override(o),e,n,i)};return new Proxy(r,{deleteProperty(o,s){return delete o[s],delete t[s],!0},get(o,s,a){return jg(o,s,()=>x3(o,s,a))},getOwnPropertyDescriptor(o,s){return o._descriptors.allKeys?Reflect.has(t,s)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,s)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(o,s){return Reflect.has(t,s)},ownKeys(){return Reflect.ownKeys(t)},set(o,s,a){return t[s]=a,delete o[s],!0}})}function Fg(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:r=e.allKeys}=t;return{allKeys:r,scriptable:n,indexable:i,isScriptable:Qn(n)?n:()=>n,isIndexable:Qn(i)?i:()=>i}}const v3=(t,e)=>t?t+xh(e):e,Mh=(t,e)=>G(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function jg(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const i=n();return t[e]=i,i}function x3(t,e,n){const{_proxy:i,_context:r,_subProxy:o,_descriptors:s}=t;let a=i[e];return Qn(a)&&s.isScriptable(e)&&(a=_3(e,a,t,n)),ft(a)&&a.length&&(a=b3(e,a,t,s.isIndexable)),Mh(e,a)&&(a=ar(a,r,o&&o[e],s)),a}function _3(t,e,n,i){const{_proxy:r,_context:o,_subProxy:s,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let l=e(o,s||i);return a.delete(t),Mh(t,l)&&(l=Ch(r._scopes,r,t,l)),l}function b3(t,e,n,i){const{_proxy:r,_context:o,_subProxy:s,_descriptors:a}=n;if(typeof o.index<"u"&&i(t))return e[o.index%e.length];if(G(e[0])){const l=e,u=r._scopes.filter(c=>c!==l);e=[];for(const c of l){const h=Ch(u,r,t,c);e.push(ar(h,o,s&&s[t],a))}}return e}function Bg(t,e,n){return Qn(t)?t(e,n):t}const w3=(t,e)=>t===!0?e:typeof t=="string"?Xn(e,t):void 0;function k3(t,e,n,i,r){for(const o of e){const s=w3(n,o);if(s){t.add(s);const a=Bg(s._fallback,n,r);if(typeof a<"u"&&a!==n&&a!==i)return a}else if(s===!1&&typeof i<"u"&&n!==i)return null}return!1}function Ch(t,e,n,i){const r=e._rootScopes,o=Bg(e._fallback,n,i),s=[...t,...r],a=new Set;a.add(i);let l=Lf(a,s,n,o||n,i);return l===null||typeof o<"u"&&o!==n&&(l=Lf(a,s,o,l,i),l===null)?!1:Eh(Array.from(a),[""],r,o,()=>S3(e,n,i))}function Lf(t,e,n,i,r){for(;n;)n=k3(t,e,n,i,r);return n}function S3(t,e,n){const i=t._getTarget();e in i||(i[e]={});const r=i[e];return ft(r)&&G(n)?n:r||{}}function E3(t,e,n,i){let r;for(const o of e)if(r=Vg(v3(o,t),n),typeof r<"u")return Mh(t,r)?Ch(n,i,t,r):r}function Vg(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function $f(t){let e=t._keys;return e||(e=t._keys=M3(t._scopes)),e}function M3(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(r=>!r.startsWith("_")))e.add(i);return Array.from(e)}function Wg(t,e,n,i){const{iScale:r}=t,{key:o="r"}=this._parsing,s=new Array(i);let a,l,u,c;for(a=0,l=i;a<l;++a)u=a+n,c=e[u],s[a]={r:r.parse(Xn(c,o),u)};return s}const C3=Number.EPSILON||1e-14,lr=(t,e)=>e<t.length&&!t[e].skip&&t[e],Hg=t=>t==="x"?"y":"x";function T3(t,e,n,i){const r=t.skip?e:t,o=e,s=n.skip?e:n,a=qu(o,r),l=qu(s,o);let u=a/(a+l),c=l/(a+l);u=isNaN(u)?0:u,c=isNaN(c)?0:c;const h=i*u,d=i*c;return{previous:{x:o.x-h*(s.x-r.x),y:o.y-h*(s.y-r.y)},next:{x:o.x+d*(s.x-r.x),y:o.y+d*(s.y-r.y)}}}function P3(t,e,n){const i=t.length;let r,o,s,a,l,u=lr(t,0);for(let c=0;c<i-1;++c)if(l=u,u=lr(t,c+1),!(!l||!u)){if(Jr(e[c],0,C3)){n[c]=n[c+1]=0;continue}r=n[c]/e[c],o=n[c+1]/e[c],a=Math.pow(r,2)+Math.pow(o,2),!(a<=9)&&(s=3/Math.sqrt(a),n[c]=r*s*e[c],n[c+1]=o*s*e[c])}}function D3(t,e,n="x"){const i=Hg(n),r=t.length;let o,s,a,l=lr(t,0);for(let u=0;u<r;++u){if(s=a,a=l,l=lr(t,u+1),!a)continue;const c=a[n],h=a[i];s&&(o=(c-s[n])/3,a[`cp1${n}`]=c-o,a[`cp1${i}`]=h-o*e[u]),l&&(o=(l[n]-c)/3,a[`cp2${n}`]=c+o,a[`cp2${i}`]=h+o*e[u])}}function O3(t,e="x"){const n=Hg(e),i=t.length,r=Array(i).fill(0),o=Array(i);let s,a,l,u=lr(t,0);for(s=0;s<i;++s)if(a=l,l=u,u=lr(t,s+1),!!l){if(u){const c=u[e]-l[e];r[s]=c!==0?(u[n]-l[n])/c:0}o[s]=a?u?Ee(r[s-1])!==Ee(r[s])?0:(r[s-1]+r[s])/2:r[s-1]:r[s]}P3(t,r,o),D3(t,o,e)}function xs(t,e,n){return Math.max(Math.min(t,n),e)}function L3(t,e){let n,i,r,o,s,a=cn(t[0],e);for(n=0,i=t.length;n<i;++n)s=o,o=a,a=n<i-1&&cn(t[n+1],e),o&&(r=t[n],s&&(r.cp1x=xs(r.cp1x,e.left,e.right),r.cp1y=xs(r.cp1y,e.top,e.bottom)),a&&(r.cp2x=xs(r.cp2x,e.left,e.right),r.cp2y=xs(r.cp2y,e.top,e.bottom)))}function $3(t,e,n,i,r){let o,s,a,l;if(e.spanGaps&&(t=t.filter(u=>!u.skip)),e.cubicInterpolationMode==="monotone")O3(t,r);else{let u=i?t[t.length-1]:t[0];for(o=0,s=t.length;o<s;++o)a=t[o],l=T3(u,a,t[Math.min(o+1,s-(i?0:1))%s],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,u=a}e.capBezierPoints&&L3(t,n)}function Th(){return typeof window<"u"&&typeof document<"u"}function Ph(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Ca(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const el=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function A3(t,e){return el(t).getPropertyValue(e)}const z3=["top","right","bottom","left"];function gi(t,e,n){const i={};n=n?"-"+n:"";for(let r=0;r<4;r++){const o=z3[r];i[o]=parseFloat(t[e+"-"+o+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const R3=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function I3(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:r,offsetY:o}=i;let s=!1,a,l;if(R3(r,o,t.target))a=r,l=o;else{const u=e.getBoundingClientRect();a=i.clientX-u.left,l=i.clientY-u.top,s=!0}return{x:a,y:l,box:s}}function Xe(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,r=el(n),o=r.boxSizing==="border-box",s=gi(r,"padding"),a=gi(r,"border","width"),{x:l,y:u,box:c}=I3(t,n),h=s.left+(c&&a.left),d=s.top+(c&&a.top);let{width:f,height:y}=e;return o&&(f-=s.width+a.width,y-=s.height+a.height),{x:Math.round((l-h)/f*n.width/i),y:Math.round((u-d)/y*n.height/i)}}function N3(t,e,n){let i,r;if(e===void 0||n===void 0){const o=t&&Ph(t);if(!o)e=t.clientWidth,n=t.clientHeight;else{const s=o.getBoundingClientRect(),a=el(o),l=gi(a,"border","width"),u=gi(a,"padding");e=s.width-u.width-l.width,n=s.height-u.height-l.height,i=Ca(a.maxWidth,o,"clientWidth"),r=Ca(a.maxHeight,o,"clientHeight")}}return{width:e,height:n,maxWidth:i||Ea,maxHeight:r||Ea}}const _s=t=>Math.round(t*10)/10;function F3(t,e,n,i){const r=el(t),o=gi(r,"margin"),s=Ca(r.maxWidth,t,"clientWidth")||Ea,a=Ca(r.maxHeight,t,"clientHeight")||Ea,l=N3(t,e,n);let{width:u,height:c}=l;if(r.boxSizing==="content-box"){const h=gi(r,"border","width"),d=gi(r,"padding");u-=d.width+h.width,c-=d.height+h.height}return u=Math.max(0,u-o.width),c=Math.max(0,i?u/i:c-o.height),u=_s(Math.min(u,s,l.maxWidth)),c=_s(Math.min(c,a,l.maxHeight)),u&&!c&&(c=_s(u/2)),(e!==void 0||n!==void 0)&&i&&l.height&&c>l.height&&(c=l.height,u=_s(Math.floor(c*i))),{width:u,height:c}}function Af(t,e,n){const i=e||1,r=Math.floor(t.height*i),o=Math.floor(t.width*i);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const s=t.canvas;return s.style&&(n||!s.style.height&&!s.style.width)&&(s.style.height=`${t.height}px`,s.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||s.height!==r||s.width!==o?(t.currentDevicePixelRatio=i,s.height=r,s.width=o,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const j3=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};Th()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t}();function zf(t,e){const n=A3(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function ai(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function B3(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function V3(t,e,n,i){const r={x:t.cp2x,y:t.cp2y},o={x:e.cp1x,y:e.cp1y},s=ai(t,r,n),a=ai(r,o,n),l=ai(o,e,n),u=ai(s,a,n),c=ai(a,l,n);return ai(u,c,n)}const W3=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},H3=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function Gi(t,e,n){return t?W3(e,n):H3()}function Ug(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function Yg(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function Xg(t){return t==="angle"?{between:To,compare:Uv,normalize:ue}:{between:ln,compare:(e,n)=>e-n,normalize:e=>e}}function Rf({start:t,end:e,count:n,loop:i,style:r}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:r}}function U3(t,e,n){const{property:i,start:r,end:o}=n,{between:s,normalize:a}=Xg(i),l=e.length;let{start:u,end:c,loop:h}=t,d,f;if(h){for(u+=l,c+=l,d=0,f=l;d<f&&s(a(e[u%l][i]),r,o);++d)u--,c--;u%=l,c%=l}return c<u&&(c+=l),{start:u,end:c,loop:h,style:t.style}}function Qg(t,e,n){if(!n)return[t];const{property:i,start:r,end:o}=n,s=e.length,{compare:a,between:l,normalize:u}=Xg(i),{start:c,end:h,loop:d,style:f}=U3(t,e,n),y=[];let p=!1,w=null,m,v,x;const b=()=>l(r,x,m)&&a(r,x)!==0,S=()=>a(o,m)===0||l(o,x,m),E=()=>p||b(),C=()=>!p||S();for(let M=c,O=c;M<=h;++M)v=e[M%s],!v.skip&&(m=u(v[i]),m!==x&&(p=l(m,r,o),w===null&&E()&&(w=a(m,r)===0?M:O),w!==null&&C()&&(y.push(Rf({start:w,end:M,loop:d,count:s,style:f})),w=null),O=M,x=m));return w!==null&&y.push(Rf({start:w,end:h,loop:d,count:s,style:f})),y}function Kg(t,e){const n=[],i=t.segments;for(let r=0;r<i.length;r++){const o=Qg(i[r],t.points,e);o.length&&n.push(...o)}return n}function Y3(t,e,n,i){let r=0,o=e-1;if(n&&!i)for(;r<e&&!t[r].skip;)r++;for(;r<e&&t[r].skip;)r++;for(r%=e,n&&(o+=r);o>r&&t[o%e].skip;)o--;return o%=e,{start:r,end:o}}function X3(t,e,n,i){const r=t.length,o=[];let s=e,a=t[e],l;for(l=e+1;l<=n;++l){const u=t[l%r];u.skip||u.stop?a.skip||(i=!1,o.push({start:e%r,end:(l-1)%r,loop:i}),e=s=u.stop?l:null):(s=l,a.skip&&(e=l)),a=u}return s!==null&&o.push({start:e%r,end:s%r,loop:i}),o}function Q3(t,e){const n=t.points,i=t.options.spanGaps,r=n.length;if(!r)return[];const o=!!t._loop,{start:s,end:a}=Y3(n,r,o,i);if(i===!0)return If(t,[{start:s,end:a,loop:o}],n,e);const l=a<s?a+r:a,u=!!t._fullLoop&&s===0&&a===r-1;return If(t,X3(n,s,l,u),n,e)}function If(t,e,n,i){return!i||!i.setContext||!n?e:K3(t,e,n,i)}function K3(t,e,n,i){const r=t._chart.getContext(),o=Nf(t.options),{_datasetIndex:s,options:{spanGaps:a}}=t,l=n.length,u=[];let c=o,h=e[0].start,d=h;function f(y,p,w,m){const v=a?-1:1;if(y!==p){for(y+=l;n[y%l].skip;)y-=v;for(;n[p%l].skip;)p+=v;y%l!==p%l&&(u.push({start:y%l,end:p%l,loop:w,style:m}),c=m,h=p%l)}}for(const y of e){h=a?h:y.start;let p=n[h%l],w;for(d=h+1;d<=y.end;d++){const m=n[d%l];w=Nf(i.setContext(qn(r,{type:"segment",p0:p,p1:m,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:s}))),Z3(w,c)&&f(h,d-1,y.loop,c),p=m,c=w}h<d-1&&f(h,d-1,y.loop,c)}return u}function Nf(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Z3(t,e){if(!e)return!1;const n=[],i=function(r,o){return kh(o)?(n.includes(o)||n.push(o),n.indexOf(o)):o};return JSON.stringify(t,i)!==JSON.stringify(e,i)}/*!
 * Chart.js v4.4.4
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */class G3{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,r){const o=n.listeners[r],s=n.duration;o.forEach(a=>a({chart:e,initial:n.initial,numSteps:s,currentStep:Math.min(i-n.start,s)}))}_refresh(){this._request||(this._running=!0,this._request=Lg.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,r)=>{if(!i.running||!i.items.length)return;const o=i.items;let s=o.length-1,a=!1,l;for(;s>=0;--s)l=o[s],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(e),a=!0):(o[s]=o[o.length-1],o.pop());a&&(r.draw(),this._notify(r,i,e,"progress")),o.length||(i.running=!1,this._notify(r,i,e,"complete"),i.initial=!1),n+=o.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,r)=>Math.max(i,r._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let r=i.length-1;for(;r>=0;--r)i[r].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var tn=new G3;const Ff="transparent",J3={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=Pf(t||Ff),r=i.valid&&Pf(e||Ff);return r&&r.valid?r.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class q3{constructor(e,n,i,r){const o=n[i];r=Nr([e.to,r,o,e.from]);const s=Nr([e.from,o,r]);this._active=!0,this._fn=e.fn||J3[e.type||typeof s],this._easing=qr[e.easing]||qr.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=s,this._to=r,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const r=this._target[this._prop],o=i-this._start,s=this._duration-o;this._start=i,this._duration=Math.floor(Math.max(s,e.duration)),this._total+=o,this._loop=!!e.loop,this._to=Nr([e.to,n,r,e.from]),this._from=Nr([e.from,r,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,r=this._prop,o=this._from,s=this._loop,a=this._to;let l;if(this._active=o!==a&&(s||n<i),!this._active){this._target[r]=a,this._notify(!0);return}if(n<0){this._target[r]=o;return}l=n/i%2,l=s&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[r]=this._fn(o,a,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let r=0;r<i.length;r++)i[r][n]()}}class Zg{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!G(e))return;const n=Object.keys(_t.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(r=>{const o=e[r];if(!G(o))return;const s={};for(const a of n)s[a]=o[a];(ft(o.properties)&&o.properties||[r]).forEach(a=>{(a===r||!i.has(a))&&i.set(a,s)})})}_animateOptions(e,n){const i=n.options,r=e6(e,i);if(!r)return[];const o=this._createAnimations(r,i);return i.$shared&&t6(e.options.$animations,i).then(()=>{e.options=i},()=>{}),o}_createAnimations(e,n){const i=this._properties,r=[],o=e.$animations||(e.$animations={}),s=Object.keys(n),a=Date.now();let l;for(l=s.length-1;l>=0;--l){const u=s[l];if(u.charAt(0)==="$")continue;if(u==="options"){r.push(...this._animateOptions(e,n));continue}const c=n[u];let h=o[u];const d=i.get(u);if(h)if(d&&h.active()){h.update(d,c,a);continue}else h.cancel();if(!d||!d.duration){e[u]=c;continue}o[u]=h=new q3(d,e,u,c),r.push(h)}return r}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return tn.add(this._chart,i),!0}}function t6(t,e){const n=[],i=Object.keys(e);for(let r=0;r<i.length;r++){const o=t[i[r]];o&&o.active()&&n.push(o.wait())}return Promise.all(n)}function e6(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function jf(t,e){const n=t&&t.options||{},i=n.reverse,r=n.min===void 0?e:0,o=n.max===void 0?e:0;return{start:i?o:r,end:i?r:o}}function n6(t,e,n){if(n===!1)return!1;const i=jf(t,n),r=jf(e,n);return{top:r.end,right:i.end,bottom:r.start,left:i.start}}function i6(t){let e,n,i,r;return G(t)?(e=t.top,n=t.right,i=t.bottom,r=t.left):e=n=i=r=t,{top:e,right:n,bottom:i,left:r,disabled:t===!1}}function Gg(t,e){const n=[],i=t._getSortedDatasetMetas(e);let r,o;for(r=0,o=i.length;r<o;++r)n.push(i[r].index);return n}function Bf(t,e,n,i={}){const r=t.keys,o=i.mode==="single";let s,a,l,u;if(e!==null){for(s=0,a=r.length;s<a;++s){if(l=+r[s],l===n){if(i.all)continue;break}u=t.values[l],xt(u)&&(o||e===0||Ee(e)===Ee(u))&&(e+=u)}return e}}function r6(t,e){const{iScale:n,vScale:i}=e,r=n.axis==="x"?"x":"y",o=i.axis==="x"?"x":"y",s=Object.keys(t),a=new Array(s.length);let l,u,c;for(l=0,u=s.length;l<u;++l)c=s[l],a[l]={[r]:c,[o]:t[c]};return a}function Vf(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function o6(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function s6(t){const{min:e,max:n,minDefined:i,maxDefined:r}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:r?n:Number.POSITIVE_INFINITY}}function a6(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function Wf(t,e,n,i){for(const r of e.getMatchingVisibleMetas(i).reverse()){const o=t[r.index];if(n&&o>0||!n&&o<0)return r.index}return null}function Hf(t,e){const{chart:n,_cachedMeta:i}=t,r=n._stacks||(n._stacks={}),{iScale:o,vScale:s,index:a}=i,l=o.axis,u=s.axis,c=o6(o,s,i),h=e.length;let d;for(let f=0;f<h;++f){const y=e[f],{[l]:p,[u]:w}=y,m=y._stacks||(y._stacks={});d=m[u]=a6(r,c,p),d[a]=w,d._top=Wf(d,s,!0,i.type),d._bottom=Wf(d,s,!1,i.type);const v=d._visualValues||(d._visualValues={});v[a]=w}}function Ul(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function l6(t,e){return qn(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function u6(t,e,n){return qn(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function Cr(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const r of e){const o=r._stacks;if(!o||o[i]===void 0||o[i][n]===void 0)return;delete o[i][n],o[i]._visualValues!==void 0&&o[i]._visualValues[n]!==void 0&&delete o[i]._visualValues[n]}}}const Yl=t=>t==="reset"||t==="none",Uf=(t,e)=>e?t:Object.assign({},t),c6=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:Gg(n,!0),values:null};class Ne{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Vf(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&Cr(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),r=(h,d,f,y)=>h==="x"?d:h==="r"?y:f,o=n.xAxisID=V(i.xAxisID,Ul(e,"x")),s=n.yAxisID=V(i.yAxisID,Ul(e,"y")),a=n.rAxisID=V(i.rAxisID,Ul(e,"r")),l=n.indexAxis,u=n.iAxisID=r(l,o,s,a),c=n.vAxisID=r(l,s,o,a);n.xScale=this.getScaleForId(o),n.yScale=this.getScaleForId(s),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(u),n.vScale=this.getScaleForId(c)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&Mf(this._data,this),e._stacked&&Cr(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if(G(n)){const r=this._cachedMeta;this._data=r6(n,r)}else if(i!==n){if(i){Mf(i,this);const r=this._cachedMeta;Cr(r),r._parsed=[]}n&&Object.isExtensible(n)&&Kv(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let r=!1;this._dataCheck();const o=n._stacked;n._stacked=Vf(n.vScale,n),n.stack!==i.stack&&(r=!0,Cr(n),n.stack=i.stack),this._resyncElements(e),(r||o!==n._stacked)&&Hf(this,n._parsed)}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:r}=this,{iScale:o,_stacked:s}=i,a=o.axis;let l=e===0&&n===r.length?!0:i._sorted,u=e>0&&i._parsed[e-1],c,h,d;if(this._parsing===!1)i._parsed=r,i._sorted=!0,d=r;else{ft(r[e])?d=this.parseArrayData(i,r,e,n):G(r[e])?d=this.parseObjectData(i,r,e,n):d=this.parsePrimitiveData(i,r,e,n);const f=()=>h[a]===null||u&&h[a]<u[a];for(c=0;c<n;++c)i._parsed[c+e]=h=d[c],l&&(f()&&(l=!1),u=h);i._sorted=l}s&&Hf(this,d)}parsePrimitiveData(e,n,i,r){const{iScale:o,vScale:s}=e,a=o.axis,l=s.axis,u=o.getLabels(),c=o===s,h=new Array(r);let d,f,y;for(d=0,f=r;d<f;++d)y=d+i,h[d]={[a]:c||o.parse(u[y],y),[l]:s.parse(n[y],y)};return h}parseArrayData(e,n,i,r){const{xScale:o,yScale:s}=e,a=new Array(r);let l,u,c,h;for(l=0,u=r;l<u;++l)c=l+i,h=n[c],a[l]={x:o.parse(h[0],c),y:s.parse(h[1],c)};return a}parseObjectData(e,n,i,r){const{xScale:o,yScale:s}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,u=new Array(r);let c,h,d,f;for(c=0,h=r;c<h;++c)d=c+i,f=n[d],u[c]={x:o.parse(Xn(f,a),d),y:s.parse(Xn(f,l),d)};return u}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const r=this.chart,o=this._cachedMeta,s=n[e.axis],a={keys:Gg(r,!0),values:n._stacks[e.axis]._visualValues};return Bf(a,s,o.index,{mode:i})}updateRangeFromParsed(e,n,i,r){const o=i[n.axis];let s=o===null?NaN:o;const a=r&&i._stacks[n.axis];r&&a&&(r.values=a,s=Bf(r,o,this._cachedMeta.index)),e.min=Math.min(e.min,s),e.max=Math.max(e.max,s)}getMinMax(e,n){const i=this._cachedMeta,r=i._parsed,o=i._sorted&&e===i.iScale,s=r.length,a=this._getOtherScale(e),l=c6(n,i,this.chart),u={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:c,max:h}=s6(a);let d,f;function y(){f=r[d];const p=f[a.axis];return!xt(f[e.axis])||c>p||h<p}for(d=0;d<s&&!(!y()&&(this.updateRangeFromParsed(u,e,f,l),o));++d);if(o){for(d=s-1;d>=0;--d)if(!y()){this.updateRangeFromParsed(u,e,f,l);break}}return u}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let r,o,s;for(r=0,o=n.length;r<o;++r)s=n[r][e.axis],xt(s)&&i.push(s);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,r=n.vScale,o=this.getParsed(e);return{label:i?""+i.getLabelForValue(o[i.axis]):"",value:r?""+r.getLabelForValue(o[r.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=i6(V(this.options.clip,n6(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,r=i.data||[],o=n.chartArea,s=[],a=this._drawStart||0,l=this._drawCount||r.length-a,u=this.options.drawActiveElementsOnTop;let c;for(i.dataset&&i.dataset.draw(e,o,a,l),c=a;c<a+l;++c){const h=r[c];h.hidden||(h.active&&u?s.push(h):h.draw(e,o))}for(c=0;c<s.length;++c)s[c].draw(e,o)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const r=this.getDataset();let o;if(e>=0&&e<this._cachedMeta.data.length){const s=this._cachedMeta.data[e];o=s.$context||(s.$context=u6(this.getContext(),e,s)),o.parsed=this.getParsed(e),o.raw=r.data[e],o.index=o.dataIndex=e}else o=this.$context||(this.$context=l6(this.chart.getContext(),this.index)),o.dataset=r,o.index=o.datasetIndex=this.index;return o.active=!!n,o.mode=i,o}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const r=n==="active",o=this._cachedDataOpts,s=e+"-"+n,a=o[s],l=this.enableOptionSharing&&Co(i);if(a)return Uf(a,l);const u=this.chart.config,c=u.datasetElementScopeKeys(this._type,e),h=r?[`${e}Hover`,"hover",e,""]:[e,""],d=u.getOptionScopes(this.getDataset(),c),f=Object.keys(_t.elements[e]),y=()=>this.getContext(i,r,n),p=u.resolveNamedOptions(d,f,y,h);return p.$shared&&(p.$shared=l,o[s]=Object.freeze(Uf(p,l))),p}_resolveAnimations(e,n,i){const r=this.chart,o=this._cachedDataOpts,s=`animation-${n}`,a=o[s];if(a)return a;let l;if(r.options.animation!==!1){const c=this.chart.config,h=c.datasetAnimationScopeKeys(this._type,n),d=c.getOptionScopes(this.getDataset(),h);l=c.createResolver(d,this.getContext(e,i,n))}const u=new Zg(r,l&&l.animations);return l&&l._cacheable&&(o[s]=Object.freeze(u)),u}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||Yl(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),r=this._sharedOptions,o=this.getSharedOptions(i),s=this.includeOptions(n,o)||o!==r;return this.updateSharedOptions(o,n,i),{sharedOptions:o,includeOptions:s}}updateElement(e,n,i,r){Yl(r)?Object.assign(e,i):this._resolveAnimations(n,r).update(e,i)}updateSharedOptions(e,n,i){e&&!Yl(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,r){e.active=r;const o=this.getStyle(n,r);this._resolveAnimations(n,i,r).update(e,{options:!r&&this.getSharedOptions(o)||o})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[a,l,u]of this._syncList)this[a](l,u);this._syncList=[];const r=i.length,o=n.length,s=Math.min(o,r);s&&this.parse(0,s),o>r?this._insertElements(r,o-r,e):o<r&&this._removeElements(o,r-o)}_insertElements(e,n,i=!0){const r=this._cachedMeta,o=r.data,s=e+n;let a;const l=u=>{for(u.length+=n,a=u.length-1;a>=s;a--)u[a]=u[a-n]};for(l(o),a=e;a<s;++a)o[a]=new this.dataElementType;this._parsing&&l(r._parsed),this.parse(e,n),i&&this.updateElements(o,e,n,"reset")}updateElements(e,n,i,r){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const r=i._parsed.splice(e,n);i._stacked&&Cr(i,r)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,r]=e;this[n](i,r)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}A(Ne,"defaults",{}),A(Ne,"datasetElementType",null),A(Ne,"dataElementType",null);function h6(t,e){if(!t._cache.$bar){const n=t.getMatchingVisibleMetas(e);let i=[];for(let r=0,o=n.length;r<o;r++)i=i.concat(n[r].controller.getAllParsedValues(t));t._cache.$bar=Og(i.sort((r,o)=>r-o))}return t._cache.$bar}function d6(t){const e=t.iScale,n=h6(e,t.type);let i=e._length,r,o,s,a;const l=()=>{s===32767||s===-32768||(Co(a)&&(i=Math.min(i,Math.abs(s-a)||i)),a=s)};for(r=0,o=n.length;r<o;++r)s=e.getPixelForValue(n[r]),l();for(a=void 0,r=0,o=e.ticks.length;r<o;++r)s=e.getPixelForTick(r),l();return i}function f6(t,e,n,i){const r=n.barThickness;let o,s;return q(r)?(o=e.min*n.categoryPercentage,s=n.barPercentage):(o=r*i,s=1),{chunk:o/i,ratio:s,start:e.pixels[t]-o/2}}function p6(t,e,n,i){const r=e.pixels,o=r[t];let s=t>0?r[t-1]:null,a=t<r.length-1?r[t+1]:null;const l=n.categoryPercentage;s===null&&(s=o-(a===null?e.end-e.start:a-o)),a===null&&(a=o+o-s);const u=o-(o-Math.min(s,a))/2*l;return{chunk:Math.abs(a-s)/2*l/i,ratio:n.barPercentage,start:u}}function g6(t,e,n,i){const r=n.parse(t[0],i),o=n.parse(t[1],i),s=Math.min(r,o),a=Math.max(r,o);let l=s,u=a;Math.abs(s)>Math.abs(a)&&(l=a,u=s),e[n.axis]=u,e._custom={barStart:l,barEnd:u,start:r,end:o,min:s,max:a}}function Jg(t,e,n,i){return ft(t)?g6(t,e,n,i):e[n.axis]=n.parse(t,i),e}function Yf(t,e,n,i){const r=t.iScale,o=t.vScale,s=r.getLabels(),a=r===o,l=[];let u,c,h,d;for(u=n,c=n+i;u<c;++u)d=e[u],h={},h[r.axis]=a||r.parse(s[u],u),l.push(Jg(d,h,o,u));return l}function Xl(t){return t&&t.barStart!==void 0&&t.barEnd!==void 0}function m6(t,e,n){return t!==0?Ee(t):(e.isHorizontal()?1:-1)*(e.min>=n?1:-1)}function y6(t){let e,n,i,r,o;return t.horizontal?(e=t.base>t.x,n="left",i="right"):(e=t.base<t.y,n="bottom",i="top"),e?(r="end",o="start"):(r="start",o="end"),{start:n,end:i,reverse:e,top:r,bottom:o}}function v6(t,e,n,i){let r=e.borderSkipped;const o={};if(!r){t.borderSkipped=o;return}if(r===!0){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:s,end:a,reverse:l,top:u,bottom:c}=y6(t);r==="middle"&&n&&(t.enableBorderRadius=!0,(n._top||0)===i?r=u:(n._bottom||0)===i?r=c:(o[Xf(c,s,a,l)]=!0,r=u)),o[Xf(r,s,a,l)]=!0,t.borderSkipped=o}function Xf(t,e,n,i){return i?(t=x6(t,e,n),t=Qf(t,n,e)):t=Qf(t,e,n),t}function x6(t,e,n){return t===e?n:t===n?e:t}function Qf(t,e,n){return t==="start"?e:t==="end"?n:t}function _6(t,{inflateAmount:e},n){t.inflateAmount=e==="auto"?n===1?.33:0:e}class Hs extends Ne{parsePrimitiveData(e,n,i,r){return Yf(e,n,i,r)}parseArrayData(e,n,i,r){return Yf(e,n,i,r)}parseObjectData(e,n,i,r){const{iScale:o,vScale:s}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,u=o.axis==="x"?a:l,c=s.axis==="x"?a:l,h=[];let d,f,y,p;for(d=i,f=i+r;d<f;++d)p=n[d],y={},y[o.axis]=o.parse(Xn(p,u),d),h.push(Jg(Xn(p,c),y,s,d));return h}updateRangeFromParsed(e,n,i,r){super.updateRangeFromParsed(e,n,i,r);const o=i._custom;o&&n===this._cachedMeta.vScale&&(e.min=Math.min(e.min,o.min),e.max=Math.max(e.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const n=this._cachedMeta,{iScale:i,vScale:r}=n,o=this.getParsed(e),s=o._custom,a=Xl(s)?"["+s.start+", "+s.end+"]":""+r.getLabelForValue(o[r.axis]);return{label:""+i.getLabelForValue(o[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,e)}updateElements(e,n,i,r){const o=r==="reset",{index:s,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),u=a.isHorizontal(),c=this._getRuler(),{sharedOptions:h,includeOptions:d}=this._getSharedOptions(n,r);for(let f=n;f<n+i;f++){const y=this.getParsed(f),p=o||q(y[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),w=this._calculateBarIndexPixels(f,c),m=(y._stacks||{})[a.axis],v={horizontal:u,base:p.base,enableBorderRadius:!m||Xl(y._custom)||s===m._top||s===m._bottom,x:u?p.head:w.center,y:u?w.center:p.head,height:u?w.size:Math.abs(p.size),width:u?Math.abs(p.size):w.size};d&&(v.options=h||this.resolveDataElementOptions(f,e[f].active?"active":r));const x=v.options||e[f].options;v6(v,x,m,s),_6(v,x,c.ratio),this.updateElement(e[f],f,v,r)}}_getStacks(e,n){const{iScale:i}=this._cachedMeta,r=i.getMatchingVisibleMetas(this._type).filter(c=>c.controller.options.grouped),o=i.options.stacked,s=[],a=this._cachedMeta.controller.getParsed(n),l=a&&a[i.axis],u=c=>{const h=c._parsed.find(f=>f[i.axis]===l),d=h&&h[c.vScale.axis];if(q(d)||isNaN(d))return!0};for(const c of r)if(!(n!==void 0&&u(c))&&((o===!1||s.indexOf(c.stack)===-1||o===void 0&&c.stack===void 0)&&s.push(c.stack),c.index===e))break;return s.length||s.push(void 0),s}_getStackCount(e){return this._getStacks(void 0,e).length}_getStackIndex(e,n,i){const r=this._getStacks(e,i),o=n!==void 0?r.indexOf(n):-1;return o===-1?r.length-1:o}_getRuler(){const e=this.options,n=this._cachedMeta,i=n.iScale,r=[];let o,s;for(o=0,s=n.data.length;o<s;++o)r.push(i.getPixelForValue(this.getParsed(o)[i.axis],o));const a=e.barThickness;return{min:a||d6(n),pixels:r,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:e.grouped,ratio:a?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:n,_stacked:i,index:r},options:{base:o,minBarLength:s}}=this,a=o||0,l=this.getParsed(e),u=l._custom,c=Xl(u);let h=l[n.axis],d=0,f=i?this.applyStack(n,l,i):h,y,p;f!==h&&(d=f-h,f=h),c&&(h=u.barStart,f=u.barEnd-u.barStart,h!==0&&Ee(h)!==Ee(u.barEnd)&&(d=0),d+=h);const w=!q(o)&&!c?o:d;let m=n.getPixelForValue(w);if(this.chart.getDataVisibility(e)?y=n.getPixelForValue(d+f):y=m,p=y-m,Math.abs(p)<s){p=m6(p,n,a)*s,h===a&&(m-=p/2);const v=n.getPixelForDecimal(0),x=n.getPixelForDecimal(1),b=Math.min(v,x),S=Math.max(v,x);m=Math.max(Math.min(m,S),b),y=m+p,i&&!c&&(l._stacks[n.axis]._visualValues[r]=n.getValueForPixel(y)-n.getValueForPixel(m))}if(m===n.getPixelForValue(a)){const v=Ee(p)*n.getLineWidthForValue(a)/2;m+=v,p-=v}return{size:p,base:m,head:y,center:y+p/2}}_calculateBarIndexPixels(e,n){const i=n.scale,r=this.options,o=r.skipNull,s=V(r.maxBarThickness,1/0);let a,l;if(n.grouped){const u=o?this._getStackCount(e):n.stackCount,c=r.barThickness==="flex"?p6(e,n,r,u):f6(e,n,r,u),h=this._getStackIndex(this.index,this._cachedMeta.stack,o?e:void 0);a=c.start+c.chunk*h+c.chunk/2,l=Math.min(s,c.chunk*c.ratio)}else a=i.getPixelForValue(this.getParsed(e)[i.axis],e),l=Math.min(s,n.min*n.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const e=this._cachedMeta,n=e.vScale,i=e.data,r=i.length;let o=0;for(;o<r;++o)this.getParsed(o)[n.axis]!==null&&!i[o].hidden&&i[o].draw(this._ctx)}}A(Hs,"id","bar"),A(Hs,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),A(Hs,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Us extends Ne{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(e,n,i,r){const o=super.parsePrimitiveData(e,n,i,r);for(let s=0;s<o.length;s++)o[s]._custom=this.resolveDataElementOptions(s+i).radius;return o}parseArrayData(e,n,i,r){const o=super.parseArrayData(e,n,i,r);for(let s=0;s<o.length;s++){const a=n[i+s];o[s]._custom=V(a[2],this.resolveDataElementOptions(s+i).radius)}return o}parseObjectData(e,n,i,r){const o=super.parseObjectData(e,n,i,r);for(let s=0;s<o.length;s++){const a=n[i+s];o[s]._custom=V(a&&a.r&&+a.r,this.resolveDataElementOptions(s+i).radius)}return o}getMaxOverflow(){const e=this._cachedMeta.data;let n=0;for(let i=e.length-1;i>=0;--i)n=Math.max(n,e[i].size(this.resolveDataElementOptions(i))/2);return n>0&&n}getLabelAndValue(e){const n=this._cachedMeta,i=this.chart.data.labels||[],{xScale:r,yScale:o}=n,s=this.getParsed(e),a=r.getLabelForValue(s.x),l=o.getLabelForValue(s.y),u=s._custom;return{label:i[e]||"",value:"("+a+", "+l+(u?", "+u:"")+")"}}update(e){const n=this._cachedMeta.data;this.updateElements(n,0,n.length,e)}updateElements(e,n,i,r){const o=r==="reset",{iScale:s,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:u}=this._getSharedOptions(n,r),c=s.axis,h=a.axis;for(let d=n;d<n+i;d++){const f=e[d],y=!o&&this.getParsed(d),p={},w=p[c]=o?s.getPixelForDecimal(.5):s.getPixelForValue(y[c]),m=p[h]=o?a.getBasePixel():a.getPixelForValue(y[h]);p.skip=isNaN(w)||isNaN(m),u&&(p.options=l||this.resolveDataElementOptions(d,f.active?"active":r),o&&(p.options.radius=0)),this.updateElement(f,d,p,r)}}resolveDataElementOptions(e,n){const i=this.getParsed(e);let r=super.resolveDataElementOptions(e,n);r.$shared&&(r=Object.assign({},r,{$shared:!1}));const o=r.radius;return n!=="active"&&(r.radius=0),r.radius+=V(i&&i._custom,o),r}}A(Us,"id","bubble"),A(Us,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),A(Us,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function b6(t,e,n){let i=1,r=1,o=0,s=0;if(e<ct){const a=t,l=a+e,u=Math.cos(a),c=Math.sin(a),h=Math.cos(l),d=Math.sin(l),f=(x,b,S)=>To(x,a,l,!0)?1:Math.max(b,b*n,S,S*n),y=(x,b,S)=>To(x,a,l,!0)?-1:Math.min(b,b*n,S,S*n),p=f(0,u,h),w=f(kt,c,d),m=y(ht,u,h),v=y(ht+kt,c,d);i=(p-m)/2,r=(w-v)/2,o=-(p+m)/2,s=-(w+v)/2}return{ratioX:i,ratioY:r,offsetX:o,offsetY:s}}class hi extends Ne{constructor(e,n){super(e,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,n){const i=this.getDataset().data,r=this._cachedMeta;if(this._parsing===!1)r._parsed=i;else{let o=l=>+i[l];if(G(i[e])){const{key:l="value"}=this._parsing;o=u=>+Xn(i[u],l)}let s,a;for(s=e,a=e+n;s<a;++s)r._parsed[s]=o(s)}}_getRotation(){return ze(this.options.rotation-90)}_getCircumference(){return ze(this.options.circumference)}_getRotationExtents(){let e=ct,n=-ct;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const r=this.chart.getDatasetMeta(i).controller,o=r._getRotation(),s=r._getCircumference();e=Math.min(e,o),n=Math.max(n,o+s)}return{rotation:e,circumference:n-e}}update(e){const n=this.chart,{chartArea:i}=n,r=this._cachedMeta,o=r.data,s=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-s)/2,0),l=Math.min(zv(this.options.cutout,a),1),u=this._getRingWeight(this.index),{circumference:c,rotation:h}=this._getRotationExtents(),{ratioX:d,ratioY:f,offsetX:y,offsetY:p}=b6(h,c,l),w=(i.width-s)/d,m=(i.height-s)/f,v=Math.max(Math.min(w,m)/2,0),x=Mg(this.options.radius,v),b=Math.max(x*l,0),S=(x-b)/this._getVisibleDatasetWeightTotal();this.offsetX=y*x,this.offsetY=p*x,r.total=this.calculateTotal(),this.outerRadius=x-S*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-S*u,0),this.updateElements(o,0,o.length,e)}_circumference(e,n){const i=this.options,r=this._cachedMeta,o=this._getCircumference();return n&&i.animation.animateRotate||!this.chart.getDataVisibility(e)||r._parsed[e]===null||r.data[e].hidden?0:this.calculateCircumference(r._parsed[e]*o/ct)}updateElements(e,n,i,r){const o=r==="reset",s=this.chart,a=s.chartArea,l=s.options.animation,u=(a.left+a.right)/2,c=(a.top+a.bottom)/2,h=o&&l.animateScale,d=h?0:this.innerRadius,f=h?0:this.outerRadius,{sharedOptions:y,includeOptions:p}=this._getSharedOptions(n,r);let w=this._getRotation(),m;for(m=0;m<n;++m)w+=this._circumference(m,o);for(m=n;m<n+i;++m){const v=this._circumference(m,o),x=e[m],b={x:u+this.offsetX,y:c+this.offsetY,startAngle:w,endAngle:w+v,circumference:v,outerRadius:f,innerRadius:d};p&&(b.options=y||this.resolveDataElementOptions(m,x.active?"active":r)),w+=v,this.updateElement(x,m,b,r)}}calculateTotal(){const e=this._cachedMeta,n=e.data;let i=0,r;for(r=0;r<n.length;r++){const o=e._parsed[r];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(r)&&!n[r].hidden&&(i+=Math.abs(o))}return i}calculateCircumference(e){const n=this._cachedMeta.total;return n>0&&!isNaN(e)?ct*(Math.abs(e)/n):0}getLabelAndValue(e){const n=this._cachedMeta,i=this.chart,r=i.data.labels||[],o=Bo(n._parsed[e],i.options.locale);return{label:r[e]||"",value:o}}getMaxBorderWidth(e){let n=0;const i=this.chart;let r,o,s,a,l;if(!e){for(r=0,o=i.data.datasets.length;r<o;++r)if(i.isDatasetVisible(r)){s=i.getDatasetMeta(r),e=s.data,a=s.controller;break}}if(!e)return 0;for(r=0,o=e.length;r<o;++r)l=a.resolveDataElementOptions(r),l.borderAlign!=="inner"&&(n=Math.max(n,l.borderWidth||0,l.hoverBorderWidth||0));return n}getMaxOffset(e){let n=0;for(let i=0,r=e.length;i<r;++i){const o=this.resolveDataElementOptions(i);n=Math.max(n,o.offset||0,o.hoverOffset||0)}return n}_getRingWeightOffset(e){let n=0;for(let i=0;i<e;++i)this.chart.isDatasetVisible(i)&&(n+=this._getRingWeight(i));return n}_getRingWeight(e){return Math.max(V(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}A(hi,"id","doughnut"),A(hi,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),A(hi,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),A(hi,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:n,color:i}}=t.legend.options;return e.labels.map((r,o)=>{const s=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:s.backgroundColor,strokeStyle:s.borderColor,fontColor:i,lineWidth:s.borderWidth,pointStyle:n,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,n){n.chart.toggleDataVisibility(e.index),n.chart.update()}}}});class Ys extends Ne{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:i,data:r=[],_dataset:o}=n,s=this.chart._animationsDisabled;let{start:a,count:l}=Ag(n,r,s);this._drawStart=a,this._drawCount=l,zg(n)&&(a=0,l=r.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!o._decimated,i.points=r;const u=this.resolveDatasetElementOptions(e);this.options.showLine||(u.borderWidth=0),u.segment=this.options.segment,this.updateElement(i,void 0,{animated:!s,options:u},e),this.updateElements(r,a,l,e)}updateElements(e,n,i,r){const o=r==="reset",{iScale:s,vScale:a,_stacked:l,_dataset:u}=this._cachedMeta,{sharedOptions:c,includeOptions:h}=this._getSharedOptions(n,r),d=s.axis,f=a.axis,{spanGaps:y,segment:p}=this.options,w=sr(y)?y:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||o||r==="none",v=n+i,x=e.length;let b=n>0&&this.getParsed(n-1);for(let S=0;S<x;++S){const E=e[S],C=m?E:{};if(S<n||S>=v){C.skip=!0;continue}const M=this.getParsed(S),O=q(M[f]),P=C[d]=s.getPixelForValue(M[d],S),z=C[f]=o||O?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,M,l):M[f],S);C.skip=isNaN(P)||isNaN(z)||O,C.stop=S>0&&Math.abs(M[d]-b[d])>w,p&&(C.parsed=M,C.raw=u.data[S]),h&&(C.options=c||this.resolveDataElementOptions(S,E.active?"active":r)),m||this.updateElement(E,S,C,r),b=M}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,r=e.data||[];if(!r.length)return i;const o=r[0].size(this.resolveDataElementOptions(0)),s=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(i,o,s)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}A(Ys,"id","line"),A(Ys,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),A(Ys,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class eo extends Ne{constructor(e,n){super(e,n),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(e){const n=this._cachedMeta,i=this.chart,r=i.data.labels||[],o=Bo(n._parsed[e].r,i.options.locale);return{label:r[e]||"",value:o}}parseObjectData(e,n,i,r){return Wg.bind(this)(e,n,i,r)}update(e){const n=this._cachedMeta.data;this._updateRadius(),this.updateElements(n,0,n.length,e)}getMinMax(){const e=this._cachedMeta,n={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return e.data.forEach((i,r)=>{const o=this.getParsed(r).r;!isNaN(o)&&this.chart.getDataVisibility(r)&&(o<n.min&&(n.min=o),o>n.max&&(n.max=o))}),n}_updateRadius(){const e=this.chart,n=e.chartArea,i=e.options,r=Math.min(n.right-n.left,n.bottom-n.top),o=Math.max(r/2,0),s=Math.max(i.cutoutPercentage?o/100*i.cutoutPercentage:1,0),a=(o-s)/e.getVisibleDatasetCount();this.outerRadius=o-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(e,n,i,r){const o=r==="reset",s=this.chart,a=s.options.animation,l=this._cachedMeta.rScale,u=l.xCenter,c=l.yCenter,h=l.getIndexAngle(0)-.5*ht;let d=h,f;const y=360/this.countVisibleElements();for(f=0;f<n;++f)d+=this._computeAngle(f,r,y);for(f=n;f<n+i;f++){const p=e[f];let w=d,m=d+this._computeAngle(f,r,y),v=s.getDataVisibility(f)?l.getDistanceFromCenterForValue(this.getParsed(f).r):0;d=m,o&&(a.animateScale&&(v=0),a.animateRotate&&(w=m=h));const x={x:u,y:c,innerRadius:0,outerRadius:v,startAngle:w,endAngle:m,options:this.resolveDataElementOptions(f,p.active?"active":r)};this.updateElement(p,f,x,r)}}countVisibleElements(){const e=this._cachedMeta;let n=0;return e.data.forEach((i,r)=>{!isNaN(this.getParsed(r).r)&&this.chart.getDataVisibility(r)&&n++}),n}_computeAngle(e,n,i){return this.chart.getDataVisibility(e)?ze(this.resolveDataElementOptions(e,n).angle||i):0}}A(eo,"id","polarArea"),A(eo,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),A(eo,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:n,color:i}}=t.legend.options;return e.labels.map((r,o)=>{const s=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:s.backgroundColor,strokeStyle:s.borderColor,fontColor:i,lineWidth:s.borderWidth,pointStyle:n,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,n){n.chart.toggleDataVisibility(e.index),n.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class nc extends hi{}A(nc,"id","pie"),A(nc,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Xs extends Ne{getLabelAndValue(e){const n=this._cachedMeta.vScale,i=this.getParsed(e);return{label:n.getLabels()[e],value:""+n.getLabelForValue(i[n.axis])}}parseObjectData(e,n,i,r){return Wg.bind(this)(e,n,i,r)}update(e){const n=this._cachedMeta,i=n.dataset,r=n.data||[],o=n.iScale.getLabels();if(i.points=r,e!=="resize"){const s=this.resolveDatasetElementOptions(e);this.options.showLine||(s.borderWidth=0);const a={_loop:!0,_fullLoop:o.length===r.length,options:s};this.updateElement(i,void 0,a,e)}this.updateElements(r,0,r.length,e)}updateElements(e,n,i,r){const o=this._cachedMeta.rScale,s=r==="reset";for(let a=n;a<n+i;a++){const l=e[a],u=this.resolveDataElementOptions(a,l.active?"active":r),c=o.getPointPositionForValue(a,this.getParsed(a).r),h=s?o.xCenter:c.x,d=s?o.yCenter:c.y,f={x:h,y:d,angle:c.angle,skip:isNaN(h)||isNaN(d),options:u};this.updateElement(l,a,f,r)}}}A(Xs,"id","radar"),A(Xs,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),A(Xs,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Qs extends Ne{getLabelAndValue(e){const n=this._cachedMeta,i=this.chart.data.labels||[],{xScale:r,yScale:o}=n,s=this.getParsed(e),a=r.getLabelForValue(s.x),l=o.getLabelForValue(s.y);return{label:i[e]||"",value:"("+a+", "+l+")"}}update(e){const n=this._cachedMeta,{data:i=[]}=n,r=this.chart._animationsDisabled;let{start:o,count:s}=Ag(n,i,r);if(this._drawStart=o,this._drawCount=s,zg(n)&&(o=0,s=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=n;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=i;const u=this.resolveDatasetElementOptions(e);u.segment=this.options.segment,this.updateElement(a,void 0,{animated:!r,options:u},e)}else this.datasetElementType&&(delete n.dataset,this.datasetElementType=!1);this.updateElements(i,o,s,e)}addElements(){const{showLine:e}=this.options;!this.datasetElementType&&e&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(e,n,i,r){const o=r==="reset",{iScale:s,vScale:a,_stacked:l,_dataset:u}=this._cachedMeta,c=this.resolveDataElementOptions(n,r),h=this.getSharedOptions(c),d=this.includeOptions(r,h),f=s.axis,y=a.axis,{spanGaps:p,segment:w}=this.options,m=sr(p)?p:Number.POSITIVE_INFINITY,v=this.chart._animationsDisabled||o||r==="none";let x=n>0&&this.getParsed(n-1);for(let b=n;b<n+i;++b){const S=e[b],E=this.getParsed(b),C=v?S:{},M=q(E[y]),O=C[f]=s.getPixelForValue(E[f],b),P=C[y]=o||M?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,E,l):E[y],b);C.skip=isNaN(O)||isNaN(P)||M,C.stop=b>0&&Math.abs(E[f]-x[f])>m,w&&(C.parsed=E,C.raw=u.data[b]),d&&(C.options=h||this.resolveDataElementOptions(b,S.active?"active":r)),v||this.updateElement(S,b,C,r),x=E}this.updateSharedOptions(h,r,c)}getMaxOverflow(){const e=this._cachedMeta,n=e.data||[];if(!this.options.showLine){let a=0;for(let l=n.length-1;l>=0;--l)a=Math.max(a,n[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const i=e.dataset,r=i.options&&i.options.borderWidth||0;if(!n.length)return r;const o=n[0].size(this.resolveDataElementOptions(0)),s=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(r,o,s)/2}}A(Qs,"id","scatter"),A(Qs,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),A(Qs,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var w6=Object.freeze({__proto__:null,BarController:Hs,BubbleController:Us,DoughnutController:hi,LineController:Ys,PieController:nc,PolarAreaController:eo,RadarController:Xs,ScatterController:Qs});function ii(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Dh{constructor(e){A(this,"options"),this.options=e||{}}static override(e){Object.assign(Dh.prototype,e)}init(){}formats(){return ii()}parse(){return ii()}format(){return ii()}add(){return ii()}diff(){return ii()}startOf(){return ii()}endOf(){return ii()}}var k6={_date:Dh};function S6(t,e,n,i){const{controller:r,data:o,_sorted:s}=t,a=r._cachedMeta.iScale;if(a&&e===a.axis&&e!=="r"&&s&&o.length){const l=a._reversePixels?Xv:un;if(i){if(r._sharedOptions){const u=o[0],c=typeof u.getRange=="function"&&u.getRange(e);if(c){const h=l(o,e,n-c),d=l(o,e,n+c);return{lo:h.lo,hi:d.hi}}}}else return l(o,e,n)}return{lo:0,hi:o.length-1}}function Vo(t,e,n,i,r){const o=t.getSortedVisibleDatasetMetas(),s=n[e];for(let a=0,l=o.length;a<l;++a){const{index:u,data:c}=o[a],{lo:h,hi:d}=S6(o[a],e,s,r);for(let f=h;f<=d;++f){const y=c[f];y.skip||i(y,u,f)}}}function E6(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,r){const o=e?Math.abs(i.x-r.x):0,s=n?Math.abs(i.y-r.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(s,2))}}function Ql(t,e,n,i,r){const o=[];return!r&&!t.isPointInArea(e)||Vo(t,n,e,function(s,a,l){!r&&!cn(s,t.chartArea,0)||s.inRange(e.x,e.y,i)&&o.push({element:s,datasetIndex:a,index:l})},!0),o}function M6(t,e,n,i){let r=[];function o(s,a,l){const{startAngle:u,endAngle:c}=s.getProps(["startAngle","endAngle"],i),{angle:h}=Pg(s,{x:e.x,y:e.y});To(h,u,c)&&r.push({element:s,datasetIndex:a,index:l})}return Vo(t,n,e,o),r}function C6(t,e,n,i,r,o){let s=[];const a=E6(n);let l=Number.POSITIVE_INFINITY;function u(c,h,d){const f=c.inRange(e.x,e.y,r);if(i&&!f)return;const y=c.getCenterPoint(r);if(!(o||t.isPointInArea(y))&&!f)return;const p=a(e,y);p<l?(s=[{element:c,datasetIndex:h,index:d}],l=p):p===l&&s.push({element:c,datasetIndex:h,index:d})}return Vo(t,n,e,u),s}function Kl(t,e,n,i,r,o){return!o&&!t.isPointInArea(e)?[]:n==="r"&&!i?M6(t,e,n,r):C6(t,e,n,i,r,o)}function Kf(t,e,n,i,r){const o=[],s=n==="x"?"inXRange":"inYRange";let a=!1;return Vo(t,n,e,(l,u,c)=>{l[s]&&l[s](e[n],r)&&(o.push({element:l,datasetIndex:u,index:c}),a=a||l.inRange(e.x,e.y,r))}),i&&!a?[]:o}var T6={evaluateInteractionItems:Vo,modes:{index(t,e,n,i){const r=Xe(e,t),o=n.axis||"x",s=n.includeInvisible||!1,a=n.intersect?Ql(t,r,o,i,s):Kl(t,r,o,!1,i,s),l=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach(u=>{const c=a[0].index,h=u.data[c];h&&!h.skip&&l.push({element:h,datasetIndex:u.index,index:c})}),l):[]},dataset(t,e,n,i){const r=Xe(e,t),o=n.axis||"xy",s=n.includeInvisible||!1;let a=n.intersect?Ql(t,r,o,i,s):Kl(t,r,o,!1,i,s);if(a.length>0){const l=a[0].datasetIndex,u=t.getDatasetMeta(l).data;a=[];for(let c=0;c<u.length;++c)a.push({element:u[c],datasetIndex:l,index:c})}return a},point(t,e,n,i){const r=Xe(e,t),o=n.axis||"xy",s=n.includeInvisible||!1;return Ql(t,r,o,i,s)},nearest(t,e,n,i){const r=Xe(e,t),o=n.axis||"xy",s=n.includeInvisible||!1;return Kl(t,r,o,n.intersect,i,s)},x(t,e,n,i){const r=Xe(e,t);return Kf(t,r,"x",n.intersect,i)},y(t,e,n,i){const r=Xe(e,t);return Kf(t,r,"y",n.intersect,i)}}};const qg=["left","top","right","bottom"];function Tr(t,e){return t.filter(n=>n.pos===e)}function Zf(t,e){return t.filter(n=>qg.indexOf(n.pos)===-1&&n.box.axis===e)}function Pr(t,e){return t.sort((n,i)=>{const r=e?i:n,o=e?n:i;return r.weight===o.weight?r.index-o.index:r.weight-o.weight})}function P6(t){const e=[];let n,i,r,o,s,a;for(n=0,i=(t||[]).length;n<i;++n)r=t[n],{position:o,options:{stack:s,stackWeight:a=1}}=r,e.push({index:n,box:r,pos:o,horizontal:r.isHorizontal(),weight:r.weight,stack:s&&o+s,stackWeight:a});return e}function D6(t){const e={};for(const n of t){const{stack:i,pos:r,stackWeight:o}=n;if(!i||!qg.includes(r))continue;const s=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});s.count++,s.weight+=o}return e}function O6(t,e){const n=D6(t),{vBoxMaxWidth:i,hBoxMaxHeight:r}=e;let o,s,a;for(o=0,s=t.length;o<s;++o){a=t[o];const{fullSize:l}=a.box,u=n[a.stack],c=u&&a.stackWeight/u.weight;a.horizontal?(a.width=c?c*i:l&&e.availableWidth,a.height=r):(a.width=i,a.height=c?c*r:l&&e.availableHeight)}return n}function L6(t){const e=P6(t),n=Pr(e.filter(u=>u.box.fullSize),!0),i=Pr(Tr(e,"left"),!0),r=Pr(Tr(e,"right")),o=Pr(Tr(e,"top"),!0),s=Pr(Tr(e,"bottom")),a=Zf(e,"x"),l=Zf(e,"y");return{fullSize:n,leftAndTop:i.concat(o),rightAndBottom:r.concat(l).concat(s).concat(a),chartArea:Tr(e,"chartArea"),vertical:i.concat(r).concat(l),horizontal:o.concat(s).concat(a)}}function Gf(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function tm(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function $6(t,e,n,i){const{pos:r,box:o}=n,s=t.maxPadding;if(!G(r)){n.size&&(t[r]-=n.size);const h=i[n.stack]||{size:0,count:1};h.size=Math.max(h.size,n.horizontal?o.height:o.width),n.size=h.size/h.count,t[r]+=n.size}o.getPadding&&tm(s,o.getPadding());const a=Math.max(0,e.outerWidth-Gf(s,t,"left","right")),l=Math.max(0,e.outerHeight-Gf(s,t,"top","bottom")),u=a!==t.w,c=l!==t.h;return t.w=a,t.h=l,n.horizontal?{same:u,other:c}:{same:c,other:u}}function A6(t){const e=t.maxPadding;function n(i){const r=Math.max(e[i]-t[i],0);return t[i]+=r,r}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function z6(t,e){const n=e.maxPadding;function i(r){const o={left:0,top:0,right:0,bottom:0};return r.forEach(s=>{o[s]=Math.max(e[s],n[s])}),o}return i(t?["left","right"]:["top","bottom"])}function Fr(t,e,n,i){const r=[];let o,s,a,l,u,c;for(o=0,s=t.length,u=0;o<s;++o){a=t[o],l=a.box,l.update(a.width||e.w,a.height||e.h,z6(a.horizontal,e));const{same:h,other:d}=$6(e,n,a,i);u|=h&&r.length,c=c||d,l.fullSize||r.push(a)}return u&&Fr(r,e,n,i)||c}function bs(t,e,n,i,r){t.top=n,t.left=e,t.right=e+i,t.bottom=n+r,t.width=i,t.height=r}function Jf(t,e,n,i){const r=n.padding;let{x:o,y:s}=e;for(const a of t){const l=a.box,u=i[a.stack]||{count:1,placed:0,weight:1},c=a.stackWeight/u.weight||1;if(a.horizontal){const h=e.w*c,d=u.size||l.height;Co(u.start)&&(s=u.start),l.fullSize?bs(l,r.left,s,n.outerWidth-r.right-r.left,d):bs(l,e.left+u.placed,s,h,d),u.start=s,u.placed+=h,s=l.bottom}else{const h=e.h*c,d=u.size||l.width;Co(u.start)&&(o=u.start),l.fullSize?bs(l,o,r.top,d,n.outerHeight-r.bottom-r.top):bs(l,o,e.top+u.placed,d,h),u.start=o,u.placed+=h,o=l.right}}e.x=o,e.y=s}var Vt={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const r=Ht(t.options.layout.padding),o=Math.max(e-r.width,0),s=Math.max(n-r.height,0),a=L6(t.boxes),l=a.vertical,u=a.horizontal;Q(t.boxes,p=>{typeof p.beforeLayout=="function"&&p.beforeLayout()});const c=l.reduce((p,w)=>w.box.options&&w.box.options.display===!1?p:p+1,0)||1,h=Object.freeze({outerWidth:e,outerHeight:n,padding:r,availableWidth:o,availableHeight:s,vBoxMaxWidth:o/2/c,hBoxMaxHeight:s/2}),d=Object.assign({},r);tm(d,Ht(i));const f=Object.assign({maxPadding:d,w:o,h:s,x:r.left,y:r.top},r),y=O6(l.concat(u),h);Fr(a.fullSize,f,h,y),Fr(l,f,h,y),Fr(u,f,h,y)&&Fr(l,f,h,y),A6(f),Jf(a.leftAndTop,f,h,y),f.x+=f.w,f.y+=f.h,Jf(a.rightAndBottom,f,h,y),t.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},Q(a.chartArea,p=>{const w=p.box;Object.assign(w,t.chartArea),w.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class em{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,r){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,r?Math.floor(n/r):i)}}isAttached(e){return!0}updateConfig(e){}}class R6 extends em{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Ks="$chartjs",I6={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},qf=t=>t===null||t==="";function N6(t,e){const n=t.style,i=t.getAttribute("height"),r=t.getAttribute("width");if(t[Ks]={initial:{height:i,width:r,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",qf(r)){const o=zf(t,"width");o!==void 0&&(t.width=o)}if(qf(i))if(t.style.height==="")t.height=t.width/(e||2);else{const o=zf(t,"height");o!==void 0&&(t.height=o)}return t}const nm=j3?{passive:!0}:!1;function F6(t,e,n){t&&t.addEventListener(e,n,nm)}function j6(t,e,n){t&&t.canvas&&t.canvas.removeEventListener(e,n,nm)}function B6(t,e){const n=I6[t.type]||t.type,{x:i,y:r}=Xe(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:r!==void 0?r:null}}function Ta(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function V6(t,e,n){const i=t.canvas,r=new MutationObserver(o=>{let s=!1;for(const a of o)s=s||Ta(a.addedNodes,i),s=s&&!Ta(a.removedNodes,i);s&&n()});return r.observe(document,{childList:!0,subtree:!0}),r}function W6(t,e,n){const i=t.canvas,r=new MutationObserver(o=>{let s=!1;for(const a of o)s=s||Ta(a.removedNodes,i),s=s&&!Ta(a.addedNodes,i);s&&n()});return r.observe(document,{childList:!0,subtree:!0}),r}const Do=new Map;let tp=0;function im(){const t=window.devicePixelRatio;t!==tp&&(tp=t,Do.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function H6(t,e){Do.size||window.addEventListener("resize",im),Do.set(t,e)}function U6(t){Do.delete(t),Do.size||window.removeEventListener("resize",im)}function Y6(t,e,n){const i=t.canvas,r=i&&Ph(i);if(!r)return;const o=$g((a,l)=>{const u=r.clientWidth;n(a,l),u<r.clientWidth&&n()},window),s=new ResizeObserver(a=>{const l=a[0],u=l.contentRect.width,c=l.contentRect.height;u===0&&c===0||o(u,c)});return s.observe(r),H6(t,o),s}function Zl(t,e,n){n&&n.disconnect(),e==="resize"&&U6(t)}function X6(t,e,n){const i=t.canvas,r=$g(o=>{t.ctx!==null&&n(B6(o,t))},t);return F6(i,e,r),r}class Q6 extends em{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(N6(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[Ks])return!1;const i=n[Ks].initial;["height","width"].forEach(o=>{const s=i[o];q(s)?n.removeAttribute(o):n.setAttribute(o,s)});const r=i.style||{};return Object.keys(r).forEach(o=>{n.style[o]=r[o]}),n.width=n.width,delete n[Ks],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const r=e.$proxies||(e.$proxies={}),o={attach:V6,detach:W6,resize:Y6}[n]||X6;r[n]=o(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),r=i[n];r&&(({attach:Zl,detach:Zl,resize:Zl}[n]||j6)(e,n,r),i[n]=void 0)}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,r){return F3(e,n,i,r)}isAttached(e){const n=e&&Ph(e);return!!(n&&n.isConnected)}}function K6(t){return!Th()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?R6:Q6}class je{constructor(){A(this,"x"),A(this,"y"),A(this,"active",!1),A(this,"options"),A(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return sr(this.x)&&sr(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const r={};return e.forEach(o=>{r[o]=i[o]&&i[o].active()?i[o]._to:this[o]}),r}}A(je,"defaults",{}),A(je,"defaultRoutes");function Z6(t,e){const n=t.options.ticks,i=G6(t),r=Math.min(n.maxTicksLimit||i,i),o=n.major.enabled?q6(e):[],s=o.length,a=o[0],l=o[s-1],u=[];if(s>r)return t2(e,u,o,s/r),u;const c=J6(o,e,r);if(s>0){let h,d;const f=s>1?Math.round((l-a)/(s-1)):null;for(ws(e,u,c,q(f)?0:a-f,a),h=0,d=s-1;h<d;h++)ws(e,u,c,o[h],o[h+1]);return ws(e,u,c,l,q(f)?e.length:l+f),u}return ws(e,u,c),u}function G6(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),r=t._maxLength/n;return Math.floor(Math.min(i,r))}function J6(t,e,n){const i=e2(t),r=e.length/n;if(!i)return Math.max(r,1);const o=Wv(i);for(let s=0,a=o.length-1;s<a;s++){const l=o[s];if(l>r)return l}return Math.max(r,1)}function q6(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function t2(t,e,n,i){let r=0,o=n[0],s;for(i=Math.ceil(i),s=0;s<t.length;s++)s===o&&(e.push(t[s]),r++,o=n[r*i])}function ws(t,e,n,i,r){const o=V(i,0),s=Math.min(V(r,t.length),t.length);let a=0,l,u,c;for(n=Math.ceil(n),r&&(l=r-i,n=l/Math.floor(l/n)),c=o;c<0;)a++,c=Math.round(o+a*n);for(u=Math.max(o,0);u<s;u++)u===c&&(e.push(t[u]),a++,c=Math.round(o+a*n))}function e2(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const n2=t=>t==="left"?"right":t==="right"?"left":t,ep=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,np=(t,e)=>Math.min(e||t,t);function ip(t,e){const n=[],i=t.length/e,r=t.length;let o=0;for(;o<r;o+=i)n.push(t[Math.floor(o)]);return n}function i2(t,e,n){const i=t.ticks.length,r=Math.min(e,i-1),o=t._startPixel,s=t._endPixel,a=1e-6;let l=t.getPixelForTick(r),u;if(!(n&&(i===1?u=Math.max(l-o,s-l):e===0?u=(t.getPixelForTick(1)-l)/2:u=(l-t.getPixelForTick(r-1))/2,l+=r<e?u:-u,l<o-a||l>s+a)))return l}function r2(t,e){Q(t,n=>{const i=n.gc,r=i.length/2;let o;if(r>e){for(o=0;o<r;++o)delete n.data[i[o]];i.splice(0,r)}})}function Dr(t){return t.drawTicks?t.tickLength:0}function rp(t,e){if(!t.display)return 0;const n=Tt(t.font,e),i=Ht(t.padding);return(ft(t.text)?t.text.length:1)*n.lineHeight+i.height}function o2(t,e){return qn(t,{scale:e,type:"scale"})}function s2(t,e,n){return qn(t,{tick:n,index:e,type:"tick"})}function a2(t,e,n){let i=wh(t);return(n&&e!=="right"||!n&&e==="right")&&(i=n2(i)),i}function l2(t,e,n,i){const{top:r,left:o,bottom:s,right:a,chart:l}=t,{chartArea:u,scales:c}=l;let h=0,d,f,y;const p=s-r,w=a-o;if(t.isHorizontal()){if(f=Ft(i,o,a),G(n)){const m=Object.keys(n)[0],v=n[m];y=c[m].getPixelForValue(v)+p-e}else n==="center"?y=(u.bottom+u.top)/2+p-e:y=ep(t,n,e);d=a-o}else{if(G(n)){const m=Object.keys(n)[0],v=n[m];f=c[m].getPixelForValue(v)-w+e}else n==="center"?f=(u.left+u.right)/2-w+e:f=ep(t,n,e);y=Ft(i,s,r),h=n==="left"?-kt:kt}return{titleX:f,titleY:y,maxWidth:d,rotation:h}}class Mi extends je{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:r}=this;return e=ae(e,Number.POSITIVE_INFINITY),n=ae(n,Number.NEGATIVE_INFINITY),i=ae(i,Number.POSITIVE_INFINITY),r=ae(r,Number.NEGATIVE_INFINITY),{min:ae(e,i),max:ae(n,r),minDefined:xt(e),maxDefined:xt(n)}}getMinMax(e){let{min:n,max:i,minDefined:r,maxDefined:o}=this.getUserBounds(),s;if(r&&o)return{min:n,max:i};const a=this.getMatchingVisibleMetas();for(let l=0,u=a.length;l<u;++l)s=a[l].controller.getMinMax(this,e),r||(n=Math.min(n,s.min)),o||(i=Math.max(i,s.max));return n=o&&n>i?i:n,i=r&&n>i?n:i,{min:ae(n,ae(i,n)),max:ae(i,ae(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){W(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:r,grace:o,ticks:s}=this.options,a=s.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=y3(this,o,r),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?ip(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),s.display&&(s.autoSkip||s.source==="auto")&&(this.ticks=Z6(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){W(this.options.afterUpdate,[this])}beforeSetDimensions(){W(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){W(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),W(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){W(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,r,o;for(i=0,r=e.length;i<r;i++)o=e[i],o.label=W(n.callback,[o.value,i,e],this)}afterTickToLabelConversion(){W(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){W(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=np(this.ticks.length,e.ticks.maxTicksLimit),r=n.minRotation||0,o=n.maxRotation;let s=r,a,l,u;if(!this._isVisible()||!n.display||r>=o||i<=1||!this.isHorizontal()){this.labelRotation=r;return}const c=this._getLabelSizes(),h=c.widest.width,d=c.highest.height,f=Ot(this.chart.width-h,0,this.maxWidth);a=e.offset?this.maxWidth/i:f/(i-1),h+6>a&&(a=f/(i-(e.offset?.5:1)),l=this.maxHeight-Dr(e.grid)-n.padding-rp(e.title,this.chart.options.font),u=Math.sqrt(h*h+d*d),s=_h(Math.min(Math.asin(Ot((c.highest.height+6)/a,-1,1)),Math.asin(Ot(l/u,-1,1))-Math.asin(Ot(d/u,-1,1)))),s=Math.max(r,Math.min(o,s))),this.labelRotation=s}afterCalculateLabelRotation(){W(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){W(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:r,grid:o}}=this,s=this._isVisible(),a=this.isHorizontal();if(s){const l=rp(r,n.options.font);if(a?(e.width=this.maxWidth,e.height=Dr(o)+l):(e.height=this.maxHeight,e.width=Dr(o)+l),i.display&&this.ticks.length){const{first:u,last:c,widest:h,highest:d}=this._getLabelSizes(),f=i.padding*2,y=ze(this.labelRotation),p=Math.cos(y),w=Math.sin(y);if(a){const m=i.mirror?0:w*h.width+p*d.height;e.height=Math.min(this.maxHeight,e.height+m+f)}else{const m=i.mirror?0:p*h.width+w*d.height;e.width=Math.min(this.maxWidth,e.width+m+f)}this._calculatePadding(u,c,w,p)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,r){const{ticks:{align:o,padding:s},position:a}=this.options,l=this.labelRotation!==0,u=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const c=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,f=0;l?u?(d=r*e.width,f=i*n.height):(d=i*e.height,f=r*n.width):o==="start"?f=n.width:o==="end"?d=e.width:o!=="inner"&&(d=e.width/2,f=n.width/2),this.paddingLeft=Math.max((d-c+s)*this.width/(this.width-c),0),this.paddingRight=Math.max((f-h+s)*this.width/(this.width-h),0)}else{let c=n.height/2,h=e.height/2;o==="start"?(c=0,h=e.height):o==="end"&&(c=n.height,h=0),this.paddingTop=c+s,this.paddingBottom=h+s}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){W(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)q(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=ip(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:r,_longestTextCache:o}=this,s=[],a=[],l=Math.floor(n/np(n,i));let u=0,c=0,h,d,f,y,p,w,m,v,x,b,S;for(h=0;h<n;h+=l){if(y=e[h].label,p=this._resolveTickFontOptions(h),r.font=w=p.string,m=o[w]=o[w]||{data:{},gc:[]},v=p.lineHeight,x=b=0,!q(y)&&!ft(y))x=Ma(r,m.data,m.gc,x,y),b=v;else if(ft(y))for(d=0,f=y.length;d<f;++d)S=y[d],!q(S)&&!ft(S)&&(x=Ma(r,m.data,m.gc,x,S),b+=v);s.push(x),a.push(b),u=Math.max(x,u),c=Math.max(b,c)}r2(o,n);const E=s.indexOf(u),C=a.indexOf(c),M=O=>({width:s[O]||0,height:a[O]||0});return{first:M(0),last:M(n-1),widest:M(E),highest:M(C),widths:s,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return Yv(this._alignToPixels?ni(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=s2(this.getContext(),e,i))}return this.$context||(this.$context=o2(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=ze(this.labelRotation),i=Math.abs(Math.cos(n)),r=Math.abs(Math.sin(n)),o=this._getLabelSizes(),s=e.autoSkipPadding||0,a=o?o.widest.width+s:0,l=o?o.highest.height+s:0;return this.isHorizontal()?l*i>a*r?a/i:l/r:l*r<a*i?l/i:a/r}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,r=this.options,{grid:o,position:s,border:a}=r,l=o.offset,u=this.isHorizontal(),c=this.ticks.length+(l?1:0),h=Dr(o),d=[],f=a.setContext(this.getContext()),y=f.display?f.width:0,p=y/2,w=function(B){return ni(i,B,y)};let m,v,x,b,S,E,C,M,O,P,z,F;if(s==="top")m=w(this.bottom),E=this.bottom-h,M=m-p,P=w(e.top)+p,F=e.bottom;else if(s==="bottom")m=w(this.top),P=e.top,F=w(e.bottom)-p,E=m+p,M=this.top+h;else if(s==="left")m=w(this.right),S=this.right-h,C=m-p,O=w(e.left)+p,z=e.right;else if(s==="right")m=w(this.left),O=e.left,z=w(e.right)-p,S=m+p,C=this.left+h;else if(n==="x"){if(s==="center")m=w((e.top+e.bottom)/2+.5);else if(G(s)){const B=Object.keys(s)[0],H=s[B];m=w(this.chart.scales[B].getPixelForValue(H))}P=e.top,F=e.bottom,E=m+p,M=E+h}else if(n==="y"){if(s==="center")m=w((e.left+e.right)/2);else if(G(s)){const B=Object.keys(s)[0],H=s[B];m=w(this.chart.scales[B].getPixelForValue(H))}S=m-p,C=S-h,O=e.left,z=e.right}const U=V(r.ticks.maxTicksLimit,c),tt=Math.max(1,Math.ceil(c/U));for(v=0;v<c;v+=tt){const B=this.getContext(v),H=o.setContext(B),et=a.setContext(B),D=H.lineWidth,I=H.color,R=et.dash||[],Y=et.dashOffset,X=H.tickWidth,Pt=H.tickColor,st=H.tickBorderDash||[],$t=H.tickBorderDashOffset;x=i2(this,v,l),x!==void 0&&(b=ni(i,x,D),u?S=C=O=z=b:E=M=P=F=b,d.push({tx1:S,ty1:E,tx2:C,ty2:M,x1:O,y1:P,x2:z,y2:F,width:D,color:I,borderDash:R,borderDashOffset:Y,tickWidth:X,tickColor:Pt,tickBorderDash:st,tickBorderDashOffset:$t}))}return this._ticksLength=c,this._borderValue=m,d}_computeLabelItems(e){const n=this.axis,i=this.options,{position:r,ticks:o}=i,s=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:u,padding:c,mirror:h}=o,d=Dr(i.grid),f=d+c,y=h?-c:f,p=-ze(this.labelRotation),w=[];let m,v,x,b,S,E,C,M,O,P,z,F,U="middle";if(r==="top")E=this.bottom-y,C=this._getXAxisLabelAlignment();else if(r==="bottom")E=this.top+y,C=this._getXAxisLabelAlignment();else if(r==="left"){const B=this._getYAxisLabelAlignment(d);C=B.textAlign,S=B.x}else if(r==="right"){const B=this._getYAxisLabelAlignment(d);C=B.textAlign,S=B.x}else if(n==="x"){if(r==="center")E=(e.top+e.bottom)/2+f;else if(G(r)){const B=Object.keys(r)[0],H=r[B];E=this.chart.scales[B].getPixelForValue(H)+f}C=this._getXAxisLabelAlignment()}else if(n==="y"){if(r==="center")S=(e.left+e.right)/2-f;else if(G(r)){const B=Object.keys(r)[0],H=r[B];S=this.chart.scales[B].getPixelForValue(H)}C=this._getYAxisLabelAlignment(d).textAlign}n==="y"&&(l==="start"?U="top":l==="end"&&(U="bottom"));const tt=this._getLabelSizes();for(m=0,v=a.length;m<v;++m){x=a[m],b=x.label;const B=o.setContext(this.getContext(m));M=this.getPixelForTick(m)+o.labelOffset,O=this._resolveTickFontOptions(m),P=O.lineHeight,z=ft(b)?b.length:1;const H=z/2,et=B.color,D=B.textStrokeColor,I=B.textStrokeWidth;let R=C;s?(S=M,C==="inner"&&(m===v-1?R=this.options.reverse?"left":"right":m===0?R=this.options.reverse?"right":"left":R="center"),r==="top"?u==="near"||p!==0?F=-z*P+P/2:u==="center"?F=-tt.highest.height/2-H*P+P:F=-tt.highest.height+P/2:u==="near"||p!==0?F=P/2:u==="center"?F=tt.highest.height/2-H*P:F=tt.highest.height-z*P,h&&(F*=-1),p!==0&&!B.showLabelBackdrop&&(S+=P/2*Math.sin(p))):(E=M,F=(1-z)*P/2);let Y;if(B.showLabelBackdrop){const X=Ht(B.backdropPadding),Pt=tt.heights[m],st=tt.widths[m];let $t=F-X.top,bt=0-X.left;switch(U){case"middle":$t-=Pt/2;break;case"bottom":$t-=Pt;break}switch(C){case"center":bt-=st/2;break;case"right":bt-=st;break;case"inner":m===v-1?bt-=st:m>0&&(bt-=st/2);break}Y={left:bt,top:$t,width:st+X.width,height:Pt+X.height,color:B.backdropColor}}w.push({label:b,font:O,textOffset:F,options:{rotation:p,color:et,strokeColor:D,strokeWidth:I,textAlign:R,textBaseline:U,translation:[S,E],backdrop:Y}})}return w}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-ze(this.labelRotation))return e==="top"?"left":"right";let i="center";return n.align==="start"?i="left":n.align==="end"?i="right":n.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:r,padding:o}}=this.options,s=this._getLabelSizes(),a=e+o,l=s.widest.width;let u,c;return n==="left"?r?(c=this.right+o,i==="near"?u="left":i==="center"?(u="center",c+=l/2):(u="right",c+=l)):(c=this.right-a,i==="near"?u="right":i==="center"?(u="center",c-=l/2):(u="left",c=this.left)):n==="right"?r?(c=this.left+o,i==="near"?u="right":i==="center"?(u="center",c-=l/2):(u="left",c-=l)):(c=this.left+a,i==="near"?u="left":i==="center"?(u="center",c+=l/2):(u="right",c=this.right)):u="right",{textAlign:u,x:c}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:r,width:o,height:s}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,r,o,s),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const i=this.ticks.findIndex(r=>r.value===e);return i>=0?n.setContext(this.getContext(i)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,r=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let o,s;const a=(l,u,c)=>{!c.width||!c.color||(i.save(),i.lineWidth=c.width,i.strokeStyle=c.color,i.setLineDash(c.borderDash||[]),i.lineDashOffset=c.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(u.x,u.y),i.stroke(),i.restore())};if(n.display)for(o=0,s=r.length;o<s;++o){const l=r[o];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:r}}=this,o=i.setContext(this.getContext()),s=i.display?o.width:0;if(!s)return;const a=r.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let u,c,h,d;this.isHorizontal()?(u=ni(e,this.left,s)-s/2,c=ni(e,this.right,a)+a/2,h=d=l):(h=ni(e,this.top,s)-s/2,d=ni(e,this.bottom,a)+a/2,u=c=l),n.save(),n.lineWidth=o.width,n.strokeStyle=o.color,n.beginPath(),n.moveTo(u,h),n.lineTo(c,d),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const n=this.ctx,i=this._computeLabelArea();i&&qa(n,i);const r=this.getLabelItems(e);for(const o of r){const s=o.options,a=o.font,l=o.label,u=o.textOffset;ki(n,l,0,u,a,s)}i&&tl(n)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:r}}=this;if(!i.display)return;const o=Tt(i.font),s=Ht(i.padding),a=i.align;let l=o.lineHeight/2;n==="bottom"||n==="center"||G(n)?(l+=s.bottom,ft(i.text)&&(l+=o.lineHeight*(i.text.length-1))):l+=s.top;const{titleX:u,titleY:c,maxWidth:h,rotation:d}=l2(this,l,n,a);ki(e,i.text,0,0,o,{color:i.color,maxWidth:h,rotation:d,textAlign:a2(a,n,r),textBaseline:"middle",translation:[u,c]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=V(e.grid&&e.grid.z,-1),r=V(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==Mi.prototype.draw?[{z:n,draw:o=>{this.draw(o)}}]:[{z:i,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:r,draw:()=>{this.drawBorder()}},{z:n,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",r=[];let o,s;for(o=0,s=n.length;o<s;++o){const a=n[o];a[i]===this.id&&(!e||a.type===e)&&r.push(a)}return r}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return Tt(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class ks{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;h2(n)&&(i=this.register(n));const r=this.items,o=e.id,s=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+e);return o in r||(r[o]=e,u2(e,s,i),this.override&&_t.override(e.id,e.overrides)),s}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,r=this.scope;i in n&&delete n[i],r&&i in _t[r]&&(delete _t[r][i],this.override&&delete wi[i])}}function u2(t,e,n){const i=Mo(Object.create(null),[n?_t.get(n):{},_t.get(e),t.defaults]);_t.set(e,i),t.defaultRoutes&&c2(e,t.defaultRoutes),t.descriptors&&_t.describe(e,t.descriptors)}function c2(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),r=i.pop(),o=[t].concat(i).join("."),s=e[n].split("."),a=s.pop(),l=s.join(".");_t.route(o,r,l,a)})}function h2(t){return"id"in t&&"defaults"in t}class d2{constructor(){this.controllers=new ks(Ne,"datasets",!0),this.elements=new ks(je,"elements"),this.plugins=new ks(Object,"plugins"),this.scales=new ks(Mi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(r=>{const o=i||this._getRegistryForType(r);i||o.isForType(r)||o===this.plugins&&r.id?this._exec(e,o,r):Q(r,s=>{const a=i||this._getRegistryForType(s);this._exec(e,a,s)})})}_exec(e,n,i){const r=xh(e);W(i["before"+r],[],i),n[e](i),W(i["after"+r],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const r=n.get(e);if(r===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return r}}var Ye=new d2;class f2{constructor(){this._init=[]}notify(e,n,i,r){n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const o=r?this._descriptors(e).filter(r):this._descriptors(e),s=this._notify(o,e,n,i);return n==="afterDestroy"&&(this._notify(o,e,"stop"),this._notify(this._init,e,"uninstall")),s}_notify(e,n,i,r){r=r||{};for(const o of e){const s=o.plugin,a=s[i],l=[n,r,o.options];if(W(a,l,s)===!1&&r.cancelable)return!1}return!0}invalidate(){q(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,r=V(i.options&&i.options.plugins,{}),o=p2(i);return r===!1&&!n?[]:m2(e,o,r,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,r=(o,s)=>o.filter(a=>!s.some(l=>a.plugin.id===l.plugin.id));this._notify(r(n,i),e,"stop"),this._notify(r(i,n),e,"start")}}function p2(t){const e={},n=[],i=Object.keys(Ye.plugins.items);for(let o=0;o<i.length;o++)n.push(Ye.getPlugin(i[o]));const r=t.plugins||[];for(let o=0;o<r.length;o++){const s=r[o];n.indexOf(s)===-1&&(n.push(s),e[s.id]=!0)}return{plugins:n,localIds:e}}function g2(t,e){return!e&&t===!1?null:t===!0?{}:t}function m2(t,{plugins:e,localIds:n},i,r){const o=[],s=t.getContext();for(const a of e){const l=a.id,u=g2(i[l],r);u!==null&&o.push({plugin:a,options:y2(t.config,{plugin:a,local:n[l]},u,s)})}return o}function y2(t,{plugin:e,local:n},i,r){const o=t.pluginScopeKeys(e),s=t.getOptionScopes(i,o);return n&&e.defaults&&s.push(e.defaults),t.createResolver(s,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function ic(t,e){const n=_t.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function v2(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function x2(t,e){return t===e?"_index_":"_value_"}function op(t){if(t==="x"||t==="y"||t==="r")return t}function _2(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function rc(t,...e){if(op(t))return t;for(const n of e){const i=n.axis||_2(n.position)||t.length>1&&op(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function sp(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function b2(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return sp(t,"x",n[0])||sp(t,"y",n[0])}return{}}function w2(t,e){const n=wi[t.type]||{scales:{}},i=e.scales||{},r=ic(t.type,e),o=Object.create(null);return Object.keys(i).forEach(s=>{const a=i[s];if(!G(a))return console.error(`Invalid scale configuration for scale: ${s}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${s}`);const l=rc(s,a,b2(s,t),_t.scales[a.type]),u=x2(l,r),c=n.scales||{};o[s]=Gr(Object.create(null),[{axis:l},a,c[l],c[u]])}),t.data.datasets.forEach(s=>{const a=s.type||t.type,l=s.indexAxis||ic(a,e),u=(wi[a]||{}).scales||{};Object.keys(u).forEach(c=>{const h=v2(c,l),d=s[h+"AxisID"]||h;o[d]=o[d]||Object.create(null),Gr(o[d],[{axis:h},i[d],u[c]])})}),Object.keys(o).forEach(s=>{const a=o[s];Gr(a,[_t.scales[a.type],_t.scale])}),o}function rm(t){const e=t.options||(t.options={});e.plugins=V(e.plugins,{}),e.scales=w2(t,e)}function om(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function k2(t){return t=t||{},t.data=om(t.data),rm(t),t}const ap=new Map,sm=new Set;function Ss(t,e){let n=ap.get(t);return n||(n=e(),ap.set(t,n),sm.add(n)),n}const Or=(t,e,n)=>{const i=Xn(e,n);i!==void 0&&t.add(i)};class S2{constructor(e){this._config=k2(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=om(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),rm(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Ss(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return Ss(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return Ss(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return Ss(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let r=i.get(e);return(!r||n)&&(r=new Map,i.set(e,r)),r}getOptionScopes(e,n,i){const{options:r,type:o}=this,s=this._cachedScopes(e,i),a=s.get(n);if(a)return a;const l=new Set;n.forEach(c=>{e&&(l.add(e),c.forEach(h=>Or(l,e,h))),c.forEach(h=>Or(l,r,h)),c.forEach(h=>Or(l,wi[o]||{},h)),c.forEach(h=>Or(l,_t,h)),c.forEach(h=>Or(l,tc,h))});const u=Array.from(l);return u.length===0&&u.push(Object.create(null)),sm.has(n)&&s.set(n,u),u}chartOptionScopes(){const{options:e,type:n}=this;return[e,wi[n]||{},_t.datasets[n]||{},{type:n},_t,tc]}resolveNamedOptions(e,n,i,r=[""]){const o={$shared:!0},{resolver:s,subPrefixes:a}=lp(this._resolverCache,e,r);let l=s;if(M2(s,n)){o.$shared=!1,i=Qn(i)?i():i;const u=this.createResolver(e,i,a);l=ar(s,i,u)}for(const u of n)o[u]=l[u];return o}createResolver(e,n,i=[""],r){const{resolver:o}=lp(this._resolverCache,e,i);return G(n)?ar(o,n,void 0,r):o}}function lp(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const r=n.join();let o=i.get(r);return o||(o={resolver:Eh(e,n),subPrefixes:n.filter(s=>!s.toLowerCase().includes("hover"))},i.set(r,o)),o}const E2=t=>G(t)&&Object.getOwnPropertyNames(t).some(e=>Qn(t[e]));function M2(t,e){const{isScriptable:n,isIndexable:i}=Fg(t);for(const r of e){const o=n(r),s=i(r),a=(s||o)&&t[r];if(o&&(Qn(a)||E2(a))||s&&ft(a))return!0}return!1}var C2="4.4.4";const T2=["top","bottom","left","right","chartArea"];function up(t,e){return t==="top"||t==="bottom"||T2.indexOf(t)===-1&&e==="x"}function cp(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function hp(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),W(n&&n.onComplete,[t],e)}function P2(t){const e=t.chart,n=e.options.animation;W(n&&n.onProgress,[t],e)}function am(t){return Th()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Pa={},lm=t=>{const e=am(t);return Object.values(Pa).filter(n=>n.canvas===e).pop()};function D2(t,e,n){const i=Object.keys(t);for(const r of i){const o=+r;if(o>=e){const s=t[r];delete t[r],(n>0||o>e)&&(t[o+n]=s)}}}function O2(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}function Es(t,e,n){return t.options.clip?t[n]:e[n]}function L2(t,e){const{xScale:n,yScale:i}=t;return n&&i?{left:Es(n,e,"left"),right:Es(n,e,"right"),top:Es(i,e,"top"),bottom:Es(i,e,"bottom")}:e}class we{static register(...e){Ye.add(...e),dp()}static unregister(...e){Ye.remove(...e),dp()}constructor(e,n){const i=this.config=new S2(n),r=am(e),o=lm(r);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const s=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||K6(r)),this.platform.updateConfig(i);const a=this.platform.acquireContext(r,s.aspectRatio),l=a&&a.canvas,u=l&&l.height,c=l&&l.width;if(this.id=Av(),this.ctx=a,this.canvas=l,this.width=c,this.height=u,this._options=s,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new f2,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Zv(h=>this.update(h),s.resizeDelay||0),this._dataChanges=[],Pa[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}tn.listen(this,"complete",hp),tn.listen(this,"progress",P2),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:r,_aspectRatio:o}=this;return q(e)?n&&o?o:r?i/r:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return Ye}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Af(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Of(this.canvas,this.ctx),this}stop(){return tn.stop(this),this}resize(e,n){tn.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,r=this.canvas,o=i.maintainAspectRatio&&this.aspectRatio,s=this.platform.getMaximumSize(r,e,n,o),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=s.width,this.height=s.height,this._aspectRatio=this.aspectRatio,Af(this,a,!0)&&(this.notifyPlugins("resize",{size:s}),W(i.onResize,[this,s],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};Q(e,(n,i)=>{n.id=i})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,r=Object.keys(i).reduce((s,a)=>(s[a]=!1,s),{});let o=[];n&&(o=o.concat(Object.keys(n).map(s=>{const a=n[s],l=rc(s,a),u=l==="r",c=l==="x";return{options:a,dposition:u?"chartArea":c?"bottom":"left",dtype:u?"radialLinear":c?"category":"linear"}}))),Q(o,s=>{const a=s.options,l=a.id,u=rc(l,a),c=V(a.type,s.dtype);(a.position===void 0||up(a.position,u)!==up(s.dposition))&&(a.position=s.dposition),r[l]=!0;let h=null;if(l in i&&i[l].type===c)h=i[l];else{const d=Ye.getScale(c);h=new d({id:l,type:c,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(a,e)}),Q(r,(s,a)=>{s||delete i[a]}),Q(i,s=>{Vt.configure(this,s,s.options),Vt.addBox(this,s)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((r,o)=>r.index-o.index),i>n){for(let r=n;r<i;++r)this._destroyDatasetMeta(r);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(cp("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,r)=>{n.filter(o=>o===i._dataset).length===0&&this._destroyDatasetMeta(r)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,r;for(this._removeUnreferencedMetasets(),i=0,r=n.length;i<r;i++){const o=n[i];let s=this.getDatasetMeta(i);const a=o.type||this.config.type;if(s.type&&s.type!==a&&(this._destroyDatasetMeta(i),s=this.getDatasetMeta(i)),s.type=a,s.indexAxis=o.indexAxis||ic(a,this.options),s.order=o.order||0,s.index=i,s.label=""+o.label,s.visible=this.isDatasetVisible(i),s.controller)s.controller.updateIndex(i),s.controller.linkScales();else{const l=Ye.getController(a),{datasetElementType:u,dataElementType:c}=_t.datasets[a];Object.assign(l,{dataElementType:Ye.getElement(c),datasetElementType:u&&Ye.getElement(u)}),s.controller=new l(this,i),e.push(s.controller)}}return this._updateMetasets(),e}_resetElements(){Q(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let s=0;for(let u=0,c=this.data.datasets.length;u<c;u++){const{controller:h}=this.getDatasetMeta(u),d=!r&&o.indexOf(h)===-1;h.buildOrUpdateElements(d),s=Math.max(+h.getMaxOverflow(),s)}s=this._minPadding=i.layout.autoPadding?s:0,this._updateLayout(s),r||Q(o,u=>{u.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(cp("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Q(this.scales,e=>{Vt.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!wf(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:r,count:o}of n){const s=i==="_removeElements"?-o:o;D2(e,r,s)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=o=>new Set(e.filter(s=>s[0]===o).map((s,a)=>a+","+s.splice(1).join(","))),r=i(0);for(let o=1;o<n;o++)if(!wf(r,i(o)))return;return Array.from(r).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Vt.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],Q(this.boxes,r=>{i&&r.position==="chartArea"||(r.configure&&r.configure(),this._layers.push(...r._layers()))},this),this._layers.forEach((r,o)=>{r._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,Qn(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),r={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",r)!==!1&&(i.controller._update(n),r.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",r))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(tn.has(this)?this.attached&&!tn.running(this)&&tn.start(this):(this.draw(),hp({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:r}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,r)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let r,o;for(r=0,o=n.length;r<o;++r){const s=n[r];(!e||s.visible)&&i.push(s)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i=e._clip,r=!i.disabled,o=L2(e,this.chartArea),s={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(r&&qa(n,{left:i.left===!1?0:o.left-i.left,right:i.right===!1?this.width:o.right+i.right,top:i.top===!1?0:o.top-i.top,bottom:i.bottom===!1?this.height:o.bottom+i.bottom}),e.controller.draw(),r&&tl(n),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(e){return cn(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,r){const o=T6.modes[n];return typeof o=="function"?o(this,e,i,r):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let r=i.filter(o=>o&&o._dataset===n).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(r)),r}getContext(){return this.$context||(this.$context=qn(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const r=i?"show":"hide",o=this.getDatasetMeta(e),s=o.controller._resolveAnimations(void 0,r);Co(n)?(o.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),s.update(o,{visible:i}),this.update(a=>a.datasetIndex===e?r:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),tn.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Of(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Pa[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(o,s)=>{n.addEventListener(this,o,s),e[o]=s},r=(o,s,a)=>{o.offsetX=s,o.offsetY=a,this._eventHandler(o)};Q(this.options.events,o=>i(o,r))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(l,u)=>{n.addEventListener(this,l,u),e[l]=u},r=(l,u)=>{e[l]&&(n.removeEventListener(this,l,u),delete e[l])},o=(l,u)=>{this.canvas&&this.resize(l,u)};let s;const a=()=>{r("attach",a),this.attached=!0,this.resize(),i("resize",o),i("detach",s)};s=()=>{this.attached=!1,r("resize",o),this._stop(),this._resize(0,0),i("attach",a)},n.isAttached(this.canvas)?a():s()}unbindEvents(){Q(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},Q(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const r=i?"set":"remove";let o,s,a,l;for(n==="dataset"&&(o=this.getDatasetMeta(e[0].datasetIndex),o.controller["_"+r+"DatasetHoverStyle"]()),a=0,l=e.length;a<l;++a){s=e[a];const u=s&&this.getDatasetMeta(s.datasetIndex).controller;u&&u[r+"HoverStyle"](s.element,s.datasetIndex,s.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:r,index:o})=>{const s=this.getDatasetMeta(r);if(!s)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:s.data[o],index:o}});!ka(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const r=this.options.hover,o=(l,u)=>l.filter(c=>!u.some(h=>c.datasetIndex===h.datasetIndex&&c.index===h.index)),s=o(n,e),a=i?e:o(e,n);s.length&&this.updateHoverStyle(s,r.mode,!1),a.length&&r.mode&&this.updateHoverStyle(a,r.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},r=s=>(s.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,r)===!1)return;const o=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,r),(o||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:r=[],options:o}=this,s=n,a=this._getActiveElements(e,r,i,s),l=jv(e),u=O2(e,this._lastEvent,i,l);i&&(this._lastEvent=null,W(o.onHover,[e,a,this],this),l&&W(o.onClick,[e,a,this],this));const c=!ka(a,r);return(c||n)&&(this._active=a,this._updateHoverStyles(a,r,n)),this._lastEvent=u,c}_getActiveElements(e,n,i,r){if(e.type==="mouseout")return[];if(!i)return n;const o=this.options.hover;return this.getElementsAtEventForMode(e,o.mode,o,r)}}A(we,"defaults",_t),A(we,"instances",Pa),A(we,"overrides",wi),A(we,"registry",Ye),A(we,"version",C2),A(we,"getChart",lm);function dp(){return Q(we.instances,t=>t._plugins.invalidate())}function $2(t,e,n){const{startAngle:i,pixelMargin:r,x:o,y:s,outerRadius:a,innerRadius:l}=e;let u=r/a;t.beginPath(),t.arc(o,s,a,i-u,n+u),l>r?(u=r/l,t.arc(o,s,l,n+u,i-u,!0)):t.arc(o,s,r,n+kt,i-kt),t.closePath(),t.clip()}function A2(t){return Sh(t,["outerStart","outerEnd","innerStart","innerEnd"])}function z2(t,e,n,i){const r=A2(t.options.borderRadius),o=(n-e)/2,s=Math.min(o,i*e/2),a=l=>{const u=(n-Math.min(o,l))*i/2;return Ot(l,0,Math.min(o,u))};return{outerStart:a(r.outerStart),outerEnd:a(r.outerEnd),innerStart:Ot(r.innerStart,0,s),innerEnd:Ot(r.innerEnd,0,s)}}function Di(t,e,n,i){return{x:n+t*Math.cos(e),y:i+t*Math.sin(e)}}function Da(t,e,n,i,r,o){const{x:s,y:a,startAngle:l,pixelMargin:u,innerRadius:c}=e,h=Math.max(e.outerRadius+i+n-u,0),d=c>0?c+i+n+u:0;let f=0;const y=r-l;if(i){const B=c>0?c-i:0,H=h>0?h-i:0,et=(B+H)/2,D=et!==0?y*et/(et+i):y;f=(y-D)/2}const p=Math.max(.001,y*h-n/ht)/h,w=(y-p)/2,m=l+w+f,v=r-w-f,{outerStart:x,outerEnd:b,innerStart:S,innerEnd:E}=z2(e,d,h,v-m),C=h-x,M=h-b,O=m+x/C,P=v-b/M,z=d+S,F=d+E,U=m+S/z,tt=v-E/F;if(t.beginPath(),o){const B=(O+P)/2;if(t.arc(s,a,h,O,B),t.arc(s,a,h,B,P),b>0){const I=Di(M,P,s,a);t.arc(I.x,I.y,b,P,v+kt)}const H=Di(F,v,s,a);if(t.lineTo(H.x,H.y),E>0){const I=Di(F,tt,s,a);t.arc(I.x,I.y,E,v+kt,tt+Math.PI)}const et=(v-E/d+(m+S/d))/2;if(t.arc(s,a,d,v-E/d,et,!0),t.arc(s,a,d,et,m+S/d,!0),S>0){const I=Di(z,U,s,a);t.arc(I.x,I.y,S,U+Math.PI,m-kt)}const D=Di(C,m,s,a);if(t.lineTo(D.x,D.y),x>0){const I=Di(C,O,s,a);t.arc(I.x,I.y,x,m-kt,O)}}else{t.moveTo(s,a);const B=Math.cos(O)*h+s,H=Math.sin(O)*h+a;t.lineTo(B,H);const et=Math.cos(P)*h+s,D=Math.sin(P)*h+a;t.lineTo(et,D)}t.closePath()}function R2(t,e,n,i,r){const{fullCircles:o,startAngle:s,circumference:a}=e;let l=e.endAngle;if(o){Da(t,e,n,i,l,r);for(let u=0;u<o;++u)t.fill();isNaN(a)||(l=s+(a%ct||ct))}return Da(t,e,n,i,l,r),t.fill(),l}function I2(t,e,n,i,r){const{fullCircles:o,startAngle:s,circumference:a,options:l}=e,{borderWidth:u,borderJoinStyle:c,borderDash:h,borderDashOffset:d}=l,f=l.borderAlign==="inner";if(!u)return;t.setLineDash(h||[]),t.lineDashOffset=d,f?(t.lineWidth=u*2,t.lineJoin=c||"round"):(t.lineWidth=u,t.lineJoin=c||"bevel");let y=e.endAngle;if(o){Da(t,e,n,i,y,r);for(let p=0;p<o;++p)t.stroke();isNaN(a)||(y=s+(a%ct||ct))}f&&$2(t,e,y),o||(Da(t,e,n,i,y,r),t.stroke())}class jr extends je{constructor(e){super(),A(this,"circumference"),A(this,"endAngle"),A(this,"fullCircles"),A(this,"innerRadius"),A(this,"outerRadius"),A(this,"pixelMargin"),A(this,"startAngle"),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,n,i){const r=this.getProps(["x","y"],i),{angle:o,distance:s}=Pg(r,{x:e,y:n}),{startAngle:a,endAngle:l,innerRadius:u,outerRadius:c,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),d=(this.options.spacing+this.options.borderWidth)/2,f=V(h,l-a),y=To(o,a,l)&&a!==l,p=f>=ct||y,w=ln(s,u+d,c+d);return p&&w}getCenterPoint(e){const{x:n,y:i,startAngle:r,endAngle:o,innerRadius:s,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:l,spacing:u}=this.options,c=(r+o)/2,h=(s+a+u+l)/2;return{x:n+Math.cos(c)*h,y:i+Math.sin(c)*h}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:n,circumference:i}=this,r=(n.offset||0)/4,o=(n.spacing||0)/2,s=n.circular;if(this.pixelMargin=n.borderAlign==="inner"?.33:0,this.fullCircles=i>ct?Math.floor(i/ct):0,i===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const a=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(a)*r,Math.sin(a)*r);const l=1-Math.sin(Math.min(ht,i||0)),u=r*l;e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,R2(e,this,u,o,s),I2(e,this,u,o,s),e.restore()}}A(jr,"id","arc"),A(jr,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),A(jr,"defaultRoutes",{backgroundColor:"backgroundColor"}),A(jr,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"});function um(t,e,n=e){t.lineCap=V(n.borderCapStyle,e.borderCapStyle),t.setLineDash(V(n.borderDash,e.borderDash)),t.lineDashOffset=V(n.borderDashOffset,e.borderDashOffset),t.lineJoin=V(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=V(n.borderWidth,e.borderWidth),t.strokeStyle=V(n.borderColor,e.borderColor)}function N2(t,e,n){t.lineTo(n.x,n.y)}function F2(t){return t.stepped?l3:t.tension||t.cubicInterpolationMode==="monotone"?u3:N2}function cm(t,e,n={}){const i=t.length,{start:r=0,end:o=i-1}=n,{start:s,end:a}=e,l=Math.max(r,s),u=Math.min(o,a),c=r<s&&o<s||r>a&&o>a;return{count:i,start:l,loop:e.loop,ilen:u<l&&!c?i+u-l:u-l}}function j2(t,e,n,i){const{points:r,options:o}=e,{count:s,start:a,loop:l,ilen:u}=cm(r,n,i),c=F2(o);let{move:h=!0,reverse:d}=i||{},f,y,p;for(f=0;f<=u;++f)y=r[(a+(d?u-f:f))%s],!y.skip&&(h?(t.moveTo(y.x,y.y),h=!1):c(t,p,y,d,o.stepped),p=y);return l&&(y=r[(a+(d?u:0))%s],c(t,p,y,d,o.stepped)),!!l}function B2(t,e,n,i){const r=e.points,{count:o,start:s,ilen:a}=cm(r,n,i),{move:l=!0,reverse:u}=i||{};let c=0,h=0,d,f,y,p,w,m;const v=b=>(s+(u?a-b:b))%o,x=()=>{p!==w&&(t.lineTo(c,w),t.lineTo(c,p),t.lineTo(c,m))};for(l&&(f=r[v(0)],t.moveTo(f.x,f.y)),d=0;d<=a;++d){if(f=r[v(d)],f.skip)continue;const b=f.x,S=f.y,E=b|0;E===y?(S<p?p=S:S>w&&(w=S),c=(h*c+b)/++h):(x(),t.lineTo(b,S),y=E,h=0,p=w=S),m=S}x()}function oc(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?B2:j2}function V2(t){return t.stepped?B3:t.tension||t.cubicInterpolationMode==="monotone"?V3:ai}function W2(t,e,n,i){let r=e._path;r||(r=e._path=new Path2D,e.path(r,n,i)&&r.closePath()),um(t,e.options),t.stroke(r)}function H2(t,e,n,i){const{segments:r,options:o}=e,s=oc(e);for(const a of r)um(t,o,a.style),t.beginPath(),s(t,e,a,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const U2=typeof Path2D=="function";function Y2(t,e,n,i){U2&&!e.options.segment?W2(t,e,n,i):H2(t,e,n,i)}class $n extends je{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const r=i.spanGaps?this._loop:this._fullLoop;$3(this._points,i,e,r,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Q3(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,r=e[n],o=this.points,s=Kg(this,{property:n,start:r,end:r});if(!s.length)return;const a=[],l=V2(i);let u,c;for(u=0,c=s.length;u<c;++u){const{start:h,end:d}=s[u],f=o[h],y=o[d];if(f===y){a.push(f);continue}const p=Math.abs((r-f[n])/(y[n]-f[n])),w=l(f,y,p,i.stepped);w[n]=e[n],a.push(w)}return a.length===1?a[0]:a}pathSegment(e,n,i){return oc(this)(e,this,n,i)}path(e,n,i){const r=this.segments,o=oc(this);let s=this._loop;n=n||0,i=i||this.points.length-n;for(const a of r)s&=o(e,this,a,{start:n,end:n+i-1});return!!s}draw(e,n,i,r){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(e.save(),Y2(e,this,i,r),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}A($n,"id","line"),A($n,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),A($n,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),A($n,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function fp(t,e,n,i){const r=t.options,{[n]:o}=t.getProps([n],i);return Math.abs(e-o)<r.radius+r.hitRadius}class Zs extends je{constructor(e){super(),A(this,"parsed"),A(this,"skip"),A(this,"stop"),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,n,i){const r=this.options,{x:o,y:s}=this.getProps(["x","y"],i);return Math.pow(e-o,2)+Math.pow(n-s,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,n){return fp(this,e,"x",n)}inYRange(e,n){return fp(this,e,"y",n)}getCenterPoint(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}size(e){e=e||this.options||{};let n=e.radius||0;n=Math.max(n,n&&e.hoverRadius||0);const i=n&&e.borderWidth||0;return(n+i)*2}draw(e,n){const i=this.options;this.skip||i.radius<.1||!cn(this,n,this.size(i)/2)||(e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.fillStyle=i.backgroundColor,ec(e,i,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}A(Zs,"id","point"),A(Zs,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),A(Zs,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function hm(t,e){const{x:n,y:i,base:r,width:o,height:s}=t.getProps(["x","y","base","width","height"],e);let a,l,u,c,h;return t.horizontal?(h=s/2,a=Math.min(n,r),l=Math.max(n,r),u=i-h,c=i+h):(h=o/2,a=n-h,l=n+h,u=Math.min(i,r),c=Math.max(i,r)),{left:a,top:u,right:l,bottom:c}}function An(t,e,n,i){return t?0:Ot(e,n,i)}function X2(t,e,n){const i=t.options.borderWidth,r=t.borderSkipped,o=Ng(i);return{t:An(r.top,o.top,0,n),r:An(r.right,o.right,0,e),b:An(r.bottom,o.bottom,0,n),l:An(r.left,o.left,0,e)}}function Q2(t,e,n){const{enableBorderRadius:i}=t.getProps(["enableBorderRadius"]),r=t.options.borderRadius,o=pi(r),s=Math.min(e,n),a=t.borderSkipped,l=i||G(r);return{topLeft:An(!l||a.top||a.left,o.topLeft,0,s),topRight:An(!l||a.top||a.right,o.topRight,0,s),bottomLeft:An(!l||a.bottom||a.left,o.bottomLeft,0,s),bottomRight:An(!l||a.bottom||a.right,o.bottomRight,0,s)}}function K2(t){const e=hm(t),n=e.right-e.left,i=e.bottom-e.top,r=X2(t,n/2,i/2),o=Q2(t,n/2,i/2);return{outer:{x:e.left,y:e.top,w:n,h:i,radius:o},inner:{x:e.left+r.l,y:e.top+r.t,w:n-r.l-r.r,h:i-r.t-r.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(r.t,r.l)),topRight:Math.max(0,o.topRight-Math.max(r.t,r.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(r.b,r.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(r.b,r.r))}}}}function Gl(t,e,n,i){const r=e===null,o=n===null,s=t&&!(r&&o)&&hm(t,i);return s&&(r||ln(e,s.left,s.right))&&(o||ln(n,s.top,s.bottom))}function Z2(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function G2(t,e){t.rect(e.x,e.y,e.w,e.h)}function Jl(t,e,n={}){const i=t.x!==n.x?-e:0,r=t.y!==n.y?-e:0,o=(t.x+t.w!==n.x+n.w?e:0)-i,s=(t.y+t.h!==n.y+n.h?e:0)-r;return{x:t.x+i,y:t.y+r,w:t.w+o,h:t.h+s,radius:t.radius}}class Gs extends je{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:n,options:{borderColor:i,backgroundColor:r}}=this,{inner:o,outer:s}=K2(this),a=Z2(s.radius)?Po:G2;e.save(),(s.w!==o.w||s.h!==o.h)&&(e.beginPath(),a(e,Jl(s,n,o)),e.clip(),a(e,Jl(o,-n,s)),e.fillStyle=i,e.fill("evenodd")),e.beginPath(),a(e,Jl(o,n)),e.fillStyle=r,e.fill(),e.restore()}inRange(e,n,i){return Gl(this,e,n,i)}inXRange(e,n){return Gl(this,e,null,n)}inYRange(e,n){return Gl(this,null,e,n)}getCenterPoint(e){const{x:n,y:i,base:r,horizontal:o}=this.getProps(["x","y","base","horizontal"],e);return{x:o?(n+r)/2:n,y:o?i:(i+r)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}A(Gs,"id","bar"),A(Gs,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),A(Gs,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var J2=Object.freeze({__proto__:null,ArcElement:jr,BarElement:Gs,LineElement:$n,PointElement:Zs});const sc=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],pp=sc.map(t=>t.replace("rgb(","rgba(").replace(")",", 0.5)"));function dm(t){return sc[t%sc.length]}function fm(t){return pp[t%pp.length]}function q2(t,e){return t.borderColor=dm(e),t.backgroundColor=fm(e),++e}function t4(t,e){return t.backgroundColor=t.data.map(()=>dm(e++)),e}function e4(t,e){return t.backgroundColor=t.data.map(()=>fm(e++)),e}function n4(t){let e=0;return(n,i)=>{const r=t.getDatasetMeta(i).controller;r instanceof hi?e=t4(n,e):r instanceof eo?e=e4(n,e):r&&(e=q2(n,e))}}function gp(t){let e;for(e in t)if(t[e].borderColor||t[e].backgroundColor)return!0;return!1}function i4(t){return t&&(t.borderColor||t.backgroundColor)}var r4={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(t,e,n){if(!n.enabled)return;const{data:{datasets:i},options:r}=t.config,{elements:o}=r;if(!n.forceOverride&&(gp(i)||i4(r)||o&&gp(o)))return;const s=n4(t);i.forEach(s)}};function o4(t,e,n,i,r){const o=r.samples||i;if(o>=n)return t.slice(e,e+n);const s=[],a=(n-2)/(o-2);let l=0;const u=e+n-1;let c=e,h,d,f,y,p;for(s[l++]=t[c],h=0;h<o-2;h++){let w=0,m=0,v;const x=Math.floor((h+1)*a)+1+e,b=Math.min(Math.floor((h+2)*a)+1,n)+e,S=b-x;for(v=x;v<b;v++)w+=t[v].x,m+=t[v].y;w/=S,m/=S;const E=Math.floor(h*a)+1+e,C=Math.min(Math.floor((h+1)*a)+1,n)+e,{x:M,y:O}=t[c];for(f=y=-1,v=E;v<C;v++)y=.5*Math.abs((M-w)*(t[v].y-O)-(M-t[v].x)*(m-O)),y>f&&(f=y,d=t[v],p=v);s[l++]=d,c=p}return s[l++]=t[u],s}function s4(t,e,n,i){let r=0,o=0,s,a,l,u,c,h,d,f,y,p;const w=[],m=e+n-1,v=t[e].x,x=t[m].x-v;for(s=e;s<e+n;++s){a=t[s],l=(a.x-v)/x*i,u=a.y;const b=l|0;if(b===c)u<y?(y=u,h=s):u>p&&(p=u,d=s),r=(o*r+a.x)/++o;else{const S=s-1;if(!q(h)&&!q(d)){const E=Math.min(h,d),C=Math.max(h,d);E!==f&&E!==S&&w.push({...t[E],x:r}),C!==f&&C!==S&&w.push({...t[C],x:r})}s>0&&S!==f&&w.push(t[S]),w.push(a),c=b,o=0,y=p=u,h=d=f=s}}return w}function pm(t){if(t._decimated){const e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{configurable:!0,enumerable:!0,writable:!0,value:e})}}function mp(t){t.data.datasets.forEach(e=>{pm(e)})}function a4(t,e){const n=e.length;let i=0,r;const{iScale:o}=t,{min:s,max:a,minDefined:l,maxDefined:u}=o.getUserBounds();return l&&(i=Ot(un(e,o.axis,s).lo,0,n-1)),u?r=Ot(un(e,o.axis,a).hi+1,i,n)-i:r=n-i,{start:i,count:r}}var l4={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,n)=>{if(!n.enabled){mp(t);return}const i=t.width;t.data.datasets.forEach((r,o)=>{const{_data:s,indexAxis:a}=r,l=t.getDatasetMeta(o),u=s||r.data;if(Nr([a,t.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const c=t.scales[l.xAxisID];if(c.type!=="linear"&&c.type!=="time"||t.options.parsing)return;let{start:h,count:d}=a4(l,u);const f=n.threshold||4*i;if(d<=f){pm(r);return}q(s)&&(r._data=u,delete r.data,Object.defineProperty(r,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(p){this._data=p}}));let y;switch(n.algorithm){case"lttb":y=o4(u,h,d,i,n);break;case"min-max":y=s4(u,h,d,i);break;default:throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`)}r._decimated=y})},destroy(t){mp(t)}};function u4(t,e,n){const i=t.segments,r=t.points,o=e.points,s=[];for(const a of i){let{start:l,end:u}=a;u=Oh(l,u,r);const c=ac(n,r[l],r[u],a.loop);if(!e.segments){s.push({source:a,target:c,start:r[l],end:r[u]});continue}const h=Kg(e,c);for(const d of h){const f=ac(n,o[d.start],o[d.end],d.loop),y=Qg(a,r,f);for(const p of y)s.push({source:p,target:d,start:{[n]:yp(c,f,"start",Math.max)},end:{[n]:yp(c,f,"end",Math.min)}})}}return s}function ac(t,e,n,i){if(i)return;let r=e[t],o=n[t];return t==="angle"&&(r=ue(r),o=ue(o)),{property:t,start:r,end:o}}function c4(t,e){const{x:n=null,y:i=null}=t||{},r=e.points,o=[];return e.segments.forEach(({start:s,end:a})=>{a=Oh(s,a,r);const l=r[s],u=r[a];i!==null?(o.push({x:l.x,y:i}),o.push({x:u.x,y:i})):n!==null&&(o.push({x:n,y:l.y}),o.push({x:n,y:u.y}))}),o}function Oh(t,e,n){for(;e>t;e--){const i=n[e];if(!isNaN(i.x)&&!isNaN(i.y))break}return e}function yp(t,e,n,i){return t&&e?i(t[n],e[n]):t?t[n]:e?e[n]:0}function gm(t,e){let n=[],i=!1;return ft(t)?(i=!0,n=t):n=c4(t,e),n.length?new $n({points:n,options:{tension:0},_loop:i,_fullLoop:i}):null}function vp(t){return t&&t.fill!==!1}function h4(t,e,n){let i=t[e].fill;const r=[e];let o;if(!n)return i;for(;i!==!1&&r.indexOf(i)===-1;){if(!xt(i))return i;if(o=t[i],!o)return!1;if(o.visible)return i;r.push(i),i=o.fill}return!1}function d4(t,e,n){const i=m4(t);if(G(i))return isNaN(i.value)?!1:i;let r=parseFloat(i);return xt(r)&&Math.floor(r)===r?f4(i[0],e,r,n):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function f4(t,e,n,i){return(t==="-"||t==="+")&&(n=e+n),n===e||n<0||n>=i?!1:n}function p4(t,e){let n=null;return t==="start"?n=e.bottom:t==="end"?n=e.top:G(t)?n=e.getPixelForValue(t.value):e.getBasePixel&&(n=e.getBasePixel()),n}function g4(t,e,n){let i;return t==="start"?i=n:t==="end"?i=e.options.reverse?e.min:e.max:G(t)?i=t.value:i=e.getBaseValue(),i}function m4(t){const e=t.options,n=e.fill;let i=V(n&&n.target,n);return i===void 0&&(i=!!e.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function y4(t){const{scale:e,index:n,line:i}=t,r=[],o=i.segments,s=i.points,a=v4(e,n);a.push(gm({x:null,y:e.bottom},i));for(let l=0;l<o.length;l++){const u=o[l];for(let c=u.start;c<=u.end;c++)x4(r,s[c],a)}return new $n({points:r,options:{}})}function v4(t,e){const n=[],i=t.getMatchingVisibleMetas("line");for(let r=0;r<i.length;r++){const o=i[r];if(o.index===e)break;o.hidden||n.unshift(o.dataset)}return n}function x4(t,e,n){const i=[];for(let r=0;r<n.length;r++){const o=n[r],{first:s,last:a,point:l}=_4(o,e,"x");if(!(!l||s&&a)){if(s)i.unshift(l);else if(t.push(l),!a)break}}t.push(...i)}function _4(t,e,n){const i=t.interpolate(e,n);if(!i)return{};const r=i[n],o=t.segments,s=t.points;let a=!1,l=!1;for(let u=0;u<o.length;u++){const c=o[u],h=s[c.start][n],d=s[c.end][n];if(ln(r,h,d)){a=r===h,l=r===d;break}}return{first:a,last:l,point:i}}class mm{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,n,i){const{x:r,y:o,radius:s}=this;return n=n||{start:0,end:ct},e.arc(r,o,s,n.end,n.start,!0),!i.bounds}interpolate(e){const{x:n,y:i,radius:r}=this,o=e.angle;return{x:n+Math.cos(o)*r,y:i+Math.sin(o)*r,angle:o}}}function b4(t){const{chart:e,fill:n,line:i}=t;if(xt(n))return w4(e,n);if(n==="stack")return y4(t);if(n==="shape")return!0;const r=k4(t);return r instanceof mm?r:gm(r,i)}function w4(t,e){const n=t.getDatasetMeta(e);return n&&t.isDatasetVisible(e)?n.dataset:null}function k4(t){return(t.scale||{}).getPointPositionForValue?E4(t):S4(t)}function S4(t){const{scale:e={},fill:n}=t,i=p4(n,e);if(xt(i)){const r=e.isHorizontal();return{x:r?i:null,y:r?null:i}}return null}function E4(t){const{scale:e,fill:n}=t,i=e.options,r=e.getLabels().length,o=i.reverse?e.max:e.min,s=g4(n,e,o),a=[];if(i.grid.circular){const l=e.getPointPositionForValue(0,o);return new mm({x:l.x,y:l.y,radius:e.getDistanceFromCenterForValue(s)})}for(let l=0;l<r;++l)a.push(e.getPointPositionForValue(l,s));return a}function ql(t,e,n){const i=b4(e),{line:r,scale:o,axis:s}=e,a=r.options,l=a.fill,u=a.backgroundColor,{above:c=u,below:h=u}=l||{};i&&r.points.length&&(qa(t,n),M4(t,{line:r,target:i,above:c,below:h,area:n,scale:o,axis:s}),tl(t))}function M4(t,e){const{line:n,target:i,above:r,below:o,area:s,scale:a}=e,l=n._loop?"angle":e.axis;t.save(),l==="x"&&o!==r&&(xp(t,i,s.top),_p(t,{line:n,target:i,color:r,scale:a,property:l}),t.restore(),t.save(),xp(t,i,s.bottom)),_p(t,{line:n,target:i,color:o,scale:a,property:l}),t.restore()}function xp(t,e,n){const{segments:i,points:r}=e;let o=!0,s=!1;t.beginPath();for(const a of i){const{start:l,end:u}=a,c=r[l],h=r[Oh(l,u,r)];o?(t.moveTo(c.x,c.y),o=!1):(t.lineTo(c.x,n),t.lineTo(c.x,c.y)),s=!!e.pathSegment(t,a,{move:s}),s?t.closePath():t.lineTo(h.x,n)}t.lineTo(e.first().x,n),t.closePath(),t.clip()}function _p(t,e){const{line:n,target:i,property:r,color:o,scale:s}=e,a=u4(n,i,r);for(const{source:l,target:u,start:c,end:h}of a){const{style:{backgroundColor:d=o}={}}=l,f=i!==!0;t.save(),t.fillStyle=d,C4(t,s,f&&ac(r,c,h)),t.beginPath();const y=!!n.pathSegment(t,l);let p;if(f){y?t.closePath():bp(t,i,h,r);const w=!!i.pathSegment(t,u,{move:y,reverse:!0});p=y&&w,p||bp(t,i,c,r)}t.closePath(),t.fill(p?"evenodd":"nonzero"),t.restore()}}function C4(t,e,n){const{top:i,bottom:r}=e.chart.chartArea,{property:o,start:s,end:a}=n||{};o==="x"&&(t.beginPath(),t.rect(s,i,a-s,r-i),t.clip())}function bp(t,e,n,i){const r=e.interpolate(n,i);r&&t.lineTo(r.x,r.y)}var T4={id:"filler",afterDatasetsUpdate(t,e,n){const i=(t.data.datasets||[]).length,r=[];let o,s,a,l;for(s=0;s<i;++s)o=t.getDatasetMeta(s),a=o.dataset,l=null,a&&a.options&&a instanceof $n&&(l={visible:t.isDatasetVisible(s),index:s,fill:d4(a,s,i),chart:t,axis:o.controller.options.indexAxis,scale:o.vScale,line:a}),o.$filler=l,r.push(l);for(s=0;s<i;++s)l=r[s],!(!l||l.fill===!1)&&(l.fill=h4(r,s,n.propagate))},beforeDraw(t,e,n){const i=n.drawTime==="beforeDraw",r=t.getSortedVisibleDatasetMetas(),o=t.chartArea;for(let s=r.length-1;s>=0;--s){const a=r[s].$filler;a&&(a.line.updateControlPoints(o,a.axis),i&&a.fill&&ql(t.ctx,a,o))}},beforeDatasetsDraw(t,e,n){if(n.drawTime!=="beforeDatasetsDraw")return;const i=t.getSortedVisibleDatasetMetas();for(let r=i.length-1;r>=0;--r){const o=i[r].$filler;vp(o)&&ql(t.ctx,o,t.chartArea)}},beforeDatasetDraw(t,e,n){const i=e.meta.$filler;!vp(i)||n.drawTime!=="beforeDatasetDraw"||ql(t.ctx,i,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const wp=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},P4=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class kp extends je{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,i){this.maxWidth=e,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=W(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(i=>e.filter(i,this.chart.data))),e.sort&&(n=n.sort((i,r)=>e.sort(i,r,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const i=e.labels,r=Tt(i.font),o=r.size,s=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=wp(i,o);let u,c;n.font=r.string,this.isHorizontal()?(u=this.maxWidth,c=this._fitRows(s,o,a,l)+10):(c=this.maxHeight,u=this._fitCols(s,r,a,l)+10),this.width=Math.min(u,e.maxWidth||this.maxWidth),this.height=Math.min(c,e.maxHeight||this.maxHeight)}_fitRows(e,n,i,r){const{ctx:o,maxWidth:s,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.lineWidths=[0],c=r+a;let h=e;o.textAlign="left",o.textBaseline="middle";let d=-1,f=-c;return this.legendItems.forEach((y,p)=>{const w=i+n/2+o.measureText(y.text).width;(p===0||u[u.length-1]+w+2*a>s)&&(h+=c,u[u.length-(p>0?0:1)]=0,f+=c,d++),l[p]={left:0,top:f,row:d,width:w,height:r},u[u.length-1]+=w+a}),h}_fitCols(e,n,i,r){const{ctx:o,maxHeight:s,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.columnSizes=[],c=s-e;let h=a,d=0,f=0,y=0,p=0;return this.legendItems.forEach((w,m)=>{const{itemWidth:v,itemHeight:x}=D4(i,n,o,w,r);m>0&&f+x+2*a>c&&(h+=d+a,u.push({width:d,height:f}),y+=d+a,p++,d=f=0),l[m]={left:y,top:f,col:p,width:v,height:x},d=Math.max(d,v),f+=x+a}),h+=d,u.push({width:d,height:f}),h}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:r},rtl:o}}=this,s=Gi(o,this.left,this.width);if(this.isHorizontal()){let a=0,l=Ft(i,this.left+r,this.right-this.lineWidths[a]);for(const u of n)a!==u.row&&(a=u.row,l=Ft(i,this.left+r,this.right-this.lineWidths[a])),u.top+=this.top+e+r,u.left=s.leftForLtr(s.x(l),u.width),l+=u.width+r}else{let a=0,l=Ft(i,this.top+e+r,this.bottom-this.columnSizes[a].height);for(const u of n)u.col!==a&&(a=u.col,l=Ft(i,this.top+e+r,this.bottom-this.columnSizes[a].height)),u.top=l,u.left+=this.left+r,u.left=s.leftForLtr(s.x(u.left),u.width),l+=u.height+r}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;qa(e,this),this._draw(),tl(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:i,ctx:r}=this,{align:o,labels:s}=e,a=_t.color,l=Gi(e.rtl,this.left,this.width),u=Tt(s.font),{padding:c}=s,h=u.size,d=h/2;let f;this.drawTitle(),r.textAlign=l.textAlign("left"),r.textBaseline="middle",r.lineWidth=.5,r.font=u.string;const{boxWidth:y,boxHeight:p,itemHeight:w}=wp(s,h),m=function(E,C,M){if(isNaN(y)||y<=0||isNaN(p)||p<0)return;r.save();const O=V(M.lineWidth,1);if(r.fillStyle=V(M.fillStyle,a),r.lineCap=V(M.lineCap,"butt"),r.lineDashOffset=V(M.lineDashOffset,0),r.lineJoin=V(M.lineJoin,"miter"),r.lineWidth=O,r.strokeStyle=V(M.strokeStyle,a),r.setLineDash(V(M.lineDash,[])),s.usePointStyle){const P={radius:p*Math.SQRT2/2,pointStyle:M.pointStyle,rotation:M.rotation,borderWidth:O},z=l.xPlus(E,y/2),F=C+d;Ig(r,P,z,F,s.pointStyleWidth&&y)}else{const P=C+Math.max((h-p)/2,0),z=l.leftForLtr(E,y),F=pi(M.borderRadius);r.beginPath(),Object.values(F).some(U=>U!==0)?Po(r,{x:z,y:P,w:y,h:p,radius:F}):r.rect(z,P,y,p),r.fill(),O!==0&&r.stroke()}r.restore()},v=function(E,C,M){ki(r,M.text,E,C+w/2,u,{strikethrough:M.hidden,textAlign:l.textAlign(M.textAlign)})},x=this.isHorizontal(),b=this._computeTitleHeight();x?f={x:Ft(o,this.left+c,this.right-i[0]),y:this.top+c+b,line:0}:f={x:this.left+c,y:Ft(o,this.top+b+c,this.bottom-n[0].height),line:0},Ug(this.ctx,e.textDirection);const S=w+c;this.legendItems.forEach((E,C)=>{r.strokeStyle=E.fontColor,r.fillStyle=E.fontColor;const M=r.measureText(E.text).width,O=l.textAlign(E.textAlign||(E.textAlign=s.textAlign)),P=y+d+M;let z=f.x,F=f.y;l.setWidth(this.width),x?C>0&&z+P+c>this.right&&(F=f.y+=S,f.line++,z=f.x=Ft(o,this.left+c,this.right-i[f.line])):C>0&&F+S>this.bottom&&(z=f.x=z+n[f.line].width+c,f.line++,F=f.y=Ft(o,this.top+b+c,this.bottom-n[f.line].height));const U=l.x(z);if(m(U,F,E),z=Gv(O,z+y+d,x?z+P:this.right,e.rtl),v(l.x(z),F,E),x)f.x+=P+c;else if(typeof E.text!="string"){const tt=u.lineHeight;f.y+=ym(E,tt)+c}else f.y+=S}),Yg(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,i=Tt(n.font),r=Ht(n.padding);if(!n.display)return;const o=Gi(e.rtl,this.left,this.width),s=this.ctx,a=n.position,l=i.size/2,u=r.top+l;let c,h=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),c=this.top+u,h=Ft(e.align,h,this.right-d);else{const y=this.columnSizes.reduce((p,w)=>Math.max(p,w.height),0);c=u+Ft(e.align,this.top,this.bottom-y-e.labels.padding-this._computeTitleHeight())}const f=Ft(a,h,h+d);s.textAlign=o.textAlign(wh(a)),s.textBaseline="middle",s.strokeStyle=n.color,s.fillStyle=n.color,s.font=i.string,ki(s,n.text,f,c,i)}_computeTitleHeight(){const e=this.options.title,n=Tt(e.font),i=Ht(e.padding);return e.display?n.lineHeight+i.height:0}_getLegendItemAt(e,n){let i,r,o;if(ln(e,this.left,this.right)&&ln(n,this.top,this.bottom)){for(o=this.legendHitBoxes,i=0;i<o.length;++i)if(r=o[i],ln(e,r.left,r.left+r.width)&&ln(n,r.top,r.top+r.height))return this.legendItems[i]}return null}handleEvent(e){const n=this.options;if(!$4(e.type,n))return;const i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const r=this._hoveredItem,o=P4(r,i);r&&!o&&W(n.onLeave,[e,r,this],this),this._hoveredItem=i,i&&!o&&W(n.onHover,[e,i,this],this)}else i&&W(n.onClick,[e,i,this],this)}}function D4(t,e,n,i,r){const o=O4(i,t,e,n),s=L4(r,i,e.lineHeight);return{itemWidth:o,itemHeight:s}}function O4(t,e,n,i){let r=t.text;return r&&typeof r!="string"&&(r=r.reduce((o,s)=>o.length>s.length?o:s)),e+n.size/2+i.measureText(r).width}function L4(t,e,n){let i=t;return typeof e.text!="string"&&(i=ym(e,n)),i}function ym(t,e){const n=t.text?t.text.length:0;return e*n}function $4(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var A4={id:"legend",_element:kp,start(t,e,n){const i=t.legend=new kp({ctx:t.ctx,options:n,chart:t});Vt.configure(t,i,n),Vt.addBox(t,i)},stop(t){Vt.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;Vt.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,r=n.chart;r.isDatasetVisible(i)?(r.hide(i),e.hidden=!0):(r.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:r,color:o,useBorderRadius:s,borderRadius:a}}=t.legend.options;return t._getSortedDatasetMetas().map(l=>{const u=l.controller.getStyle(n?0:void 0),c=Ht(u.borderWidth);return{text:e[l.index].label,fillStyle:u.backgroundColor,fontColor:o,hidden:!l.visible,lineCap:u.borderCapStyle,lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:(c.width+c.height)/4,strokeStyle:u.borderColor,pointStyle:i||u.pointStyle,rotation:u.rotation,textAlign:r||u.textAlign,borderRadius:s&&(a||u.borderRadius),datasetIndex:l.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class Lh extends je{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const r=ft(i.text)?i.text.length:1;this._padding=Ht(i.padding);const o=r*Tt(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:i,bottom:r,right:o,options:s}=this,a=s.align;let l=0,u,c,h;return this.isHorizontal()?(c=Ft(a,i,o),h=n+e,u=o-i):(s.position==="left"?(c=i+e,h=Ft(a,r,n),l=ht*-.5):(c=o-e,h=Ft(a,n,r),l=ht*.5),u=r-n),{titleX:c,titleY:h,maxWidth:u,rotation:l}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const i=Tt(n.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:s,maxWidth:a,rotation:l}=this._drawArgs(r);ki(e,n.text,0,0,i,{color:n.color,maxWidth:a,rotation:l,textAlign:wh(n.align),textBaseline:"middle",translation:[o,s]})}}function z4(t,e){const n=new Lh({ctx:t.ctx,options:e,chart:t});Vt.configure(t,n,e),Vt.addBox(t,n),t.titleBlock=n}var R4={id:"title",_element:Lh,start(t,e,n){z4(t,n)},stop(t){const e=t.titleBlock;Vt.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;Vt.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ms=new WeakMap;var I4={id:"subtitle",start(t,e,n){const i=new Lh({ctx:t.ctx,options:n,chart:t});Vt.configure(t,i,n),Vt.addBox(t,i),Ms.set(t,i)},stop(t){Vt.removeBox(t,Ms.get(t)),Ms.delete(t)},beforeUpdate(t,e,n){const i=Ms.get(t);Vt.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const no={average(t){if(!t.length)return!1;let e,n,i=new Set,r=0,o=0;for(e=0,n=t.length;e<n;++e){const s=t[e].element;if(s&&s.hasValue()){const a=s.tooltipPosition();i.add(a.x),r+=a.y,++o}}return o===0||i.size===0?!1:{x:[...i].reduce((s,a)=>s+a)/i.size,y:r/o}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,r=Number.POSITIVE_INFINITY,o,s,a;for(o=0,s=t.length;o<s;++o){const l=t[o].element;if(l&&l.hasValue()){const u=l.getCenterPoint(),c=qu(e,u);c<r&&(r=c,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,i=l.y}return{x:n,y:i}}};function He(t,e){return e&&(ft(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function en(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function N4(t,e){const{element:n,datasetIndex:i,index:r}=e,o=t.getDatasetMeta(i).controller,{label:s,value:a}=o.getLabelAndValue(r);return{chart:t,label:s,parsed:o.getParsed(r),raw:t.data.datasets[i].data[r],formattedValue:a,dataset:o.getDataset(),dataIndex:r,datasetIndex:i,element:n}}function Sp(t,e){const n=t.chart.ctx,{body:i,footer:r,title:o}=t,{boxWidth:s,boxHeight:a}=e,l=Tt(e.bodyFont),u=Tt(e.titleFont),c=Tt(e.footerFont),h=o.length,d=r.length,f=i.length,y=Ht(e.padding);let p=y.height,w=0,m=i.reduce((b,S)=>b+S.before.length+S.lines.length+S.after.length,0);if(m+=t.beforeBody.length+t.afterBody.length,h&&(p+=h*u.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),m){const b=e.displayColors?Math.max(a,l.lineHeight):l.lineHeight;p+=f*b+(m-f)*l.lineHeight+(m-1)*e.bodySpacing}d&&(p+=e.footerMarginTop+d*c.lineHeight+(d-1)*e.footerSpacing);let v=0;const x=function(b){w=Math.max(w,n.measureText(b).width+v)};return n.save(),n.font=u.string,Q(t.title,x),n.font=l.string,Q(t.beforeBody.concat(t.afterBody),x),v=e.displayColors?s+2+e.boxPadding:0,Q(i,b=>{Q(b.before,x),Q(b.lines,x),Q(b.after,x)}),v=0,n.font=c.string,Q(t.footer,x),n.restore(),w+=y.width,{width:w,height:p}}function F4(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function j4(t,e,n,i){const{x:r,width:o}=i,s=n.caretSize+n.caretPadding;if(t==="left"&&r+o+s>e.width||t==="right"&&r-o-s<0)return!0}function B4(t,e,n,i){const{x:r,width:o}=n,{width:s,chartArea:{left:a,right:l}}=t;let u="center";return i==="center"?u=r<=(a+l)/2?"left":"right":r<=o/2?u="left":r>=s-o/2&&(u="right"),j4(u,t,e,n)&&(u="center"),u}function Ep(t,e,n){const i=n.yAlign||e.yAlign||F4(t,n);return{xAlign:n.xAlign||e.xAlign||B4(t,e,n,i),yAlign:i}}function V4(t,e){let{x:n,width:i}=t;return e==="right"?n-=i:e==="center"&&(n-=i/2),n}function W4(t,e,n){let{y:i,height:r}=t;return e==="top"?i+=n:e==="bottom"?i-=r+n:i-=r/2,i}function Mp(t,e,n,i){const{caretSize:r,caretPadding:o,cornerRadius:s}=t,{xAlign:a,yAlign:l}=n,u=r+o,{topLeft:c,topRight:h,bottomLeft:d,bottomRight:f}=pi(s);let y=V4(e,a);const p=W4(e,l,u);return l==="center"?a==="left"?y+=u:a==="right"&&(y-=u):a==="left"?y-=Math.max(c,d)+r:a==="right"&&(y+=Math.max(h,f)+r),{x:Ot(y,0,i.width-e.width),y:Ot(p,0,i.height-e.height)}}function Cs(t,e,n){const i=Ht(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-i.right:t.x+i.left}function Cp(t){return He([],en(t))}function H4(t,e,n){return qn(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function Tp(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const vm={beforeTitle:qe,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:qe,beforeBody:qe,beforeLabel:qe,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return q(n)||(e+=n),e},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:qe,afterBody:qe,beforeFooter:qe,footer:qe,afterFooter:qe};function Zt(t,e,n,i){const r=t[e].call(n,i);return typeof r>"u"?vm[e].call(n,i):r}class lc extends je{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,i=this.options.setContext(this.getContext()),r=i.enabled&&n.options.animation&&i.animations,o=new Zg(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=H4(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:i}=n,r=Zt(i,"beforeTitle",this,e),o=Zt(i,"title",this,e),s=Zt(i,"afterTitle",this,e);let a=[];return a=He(a,en(r)),a=He(a,en(o)),a=He(a,en(s)),a}getBeforeBody(e,n){return Cp(Zt(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:i}=n,r=[];return Q(e,o=>{const s={before:[],lines:[],after:[]},a=Tp(i,o);He(s.before,en(Zt(a,"beforeLabel",this,o))),He(s.lines,Zt(a,"label",this,o)),He(s.after,en(Zt(a,"afterLabel",this,o))),r.push(s)}),r}getAfterBody(e,n){return Cp(Zt(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:i}=n,r=Zt(i,"beforeFooter",this,e),o=Zt(i,"footer",this,e),s=Zt(i,"afterFooter",this,e);let a=[];return a=He(a,en(r)),a=He(a,en(o)),a=He(a,en(s)),a}_createItems(e){const n=this._active,i=this.chart.data,r=[],o=[],s=[];let a=[],l,u;for(l=0,u=n.length;l<u;++l)a.push(N4(this.chart,n[l]));return e.filter&&(a=a.filter((c,h,d)=>e.filter(c,h,d,i))),e.itemSort&&(a=a.sort((c,h)=>e.itemSort(c,h,i))),Q(a,c=>{const h=Tp(e.callbacks,c);r.push(Zt(h,"labelColor",this,c)),o.push(Zt(h,"labelPointStyle",this,c)),s.push(Zt(h,"labelTextColor",this,c))}),this.labelColors=r,this.labelPointStyles=o,this.labelTextColors=s,this.dataPoints=a,a}update(e,n){const i=this.options.setContext(this.getContext()),r=this._active;let o,s=[];if(!r.length)this.opacity!==0&&(o={opacity:0});else{const a=no[i.position].call(this,r,this._eventPosition);s=this._createItems(i),this.title=this.getTitle(s,i),this.beforeBody=this.getBeforeBody(s,i),this.body=this.getBody(s,i),this.afterBody=this.getAfterBody(s,i),this.footer=this.getFooter(s,i);const l=this._size=Sp(this,i),u=Object.assign({},a,l),c=Ep(this.chart,i,u),h=Mp(i,u,c,this.chart);this.xAlign=c.xAlign,this.yAlign=c.yAlign,o={opacity:1,x:h.x,y:h.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=s,this.$context=void 0,o&&this._resolveAnimations().update(this,o),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,i,r){const o=this.getCaretPosition(e,i,r);n.lineTo(o.x1,o.y1),n.lineTo(o.x2,o.y2),n.lineTo(o.x3,o.y3)}getCaretPosition(e,n,i){const{xAlign:r,yAlign:o}=this,{caretSize:s,cornerRadius:a}=i,{topLeft:l,topRight:u,bottomLeft:c,bottomRight:h}=pi(a),{x:d,y:f}=e,{width:y,height:p}=n;let w,m,v,x,b,S;return o==="center"?(b=f+p/2,r==="left"?(w=d,m=w-s,x=b+s,S=b-s):(w=d+y,m=w+s,x=b-s,S=b+s),v=w):(r==="left"?m=d+Math.max(l,c)+s:r==="right"?m=d+y-Math.max(u,h)-s:m=this.caretX,o==="top"?(x=f,b=x-s,w=m-s,v=m+s):(x=f+p,b=x+s,w=m+s,v=m-s),S=x),{x1:w,x2:m,x3:v,y1:x,y2:b,y3:S}}drawTitle(e,n,i){const r=this.title,o=r.length;let s,a,l;if(o){const u=Gi(i.rtl,this.x,this.width);for(e.x=Cs(this,i.titleAlign,i),n.textAlign=u.textAlign(i.titleAlign),n.textBaseline="middle",s=Tt(i.titleFont),a=i.titleSpacing,n.fillStyle=i.titleColor,n.font=s.string,l=0;l<o;++l)n.fillText(r[l],u.x(e.x),e.y+s.lineHeight/2),e.y+=s.lineHeight+a,l+1===o&&(e.y+=i.titleMarginBottom-a)}}_drawColorBox(e,n,i,r,o){const s=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:l,boxWidth:u}=o,c=Tt(o.bodyFont),h=Cs(this,"left",o),d=r.x(h),f=l<c.lineHeight?(c.lineHeight-l)/2:0,y=n.y+f;if(o.usePointStyle){const p={radius:Math.min(u,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},w=r.leftForLtr(d,u)+u/2,m=y+l/2;e.strokeStyle=o.multiKeyBackground,e.fillStyle=o.multiKeyBackground,ec(e,p,w,m),e.strokeStyle=s.borderColor,e.fillStyle=s.backgroundColor,ec(e,p,w,m)}else{e.lineWidth=G(s.borderWidth)?Math.max(...Object.values(s.borderWidth)):s.borderWidth||1,e.strokeStyle=s.borderColor,e.setLineDash(s.borderDash||[]),e.lineDashOffset=s.borderDashOffset||0;const p=r.leftForLtr(d,u),w=r.leftForLtr(r.xPlus(d,1),u-2),m=pi(s.borderRadius);Object.values(m).some(v=>v!==0)?(e.beginPath(),e.fillStyle=o.multiKeyBackground,Po(e,{x:p,y,w:u,h:l,radius:m}),e.fill(),e.stroke(),e.fillStyle=s.backgroundColor,e.beginPath(),Po(e,{x:w,y:y+1,w:u-2,h:l-2,radius:m}),e.fill()):(e.fillStyle=o.multiKeyBackground,e.fillRect(p,y,u,l),e.strokeRect(p,y,u,l),e.fillStyle=s.backgroundColor,e.fillRect(w,y+1,u-2,l-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,n,i){const{body:r}=this,{bodySpacing:o,bodyAlign:s,displayColors:a,boxHeight:l,boxWidth:u,boxPadding:c}=i,h=Tt(i.bodyFont);let d=h.lineHeight,f=0;const y=Gi(i.rtl,this.x,this.width),p=function(M){n.fillText(M,y.x(e.x+f),e.y+d/2),e.y+=d+o},w=y.textAlign(s);let m,v,x,b,S,E,C;for(n.textAlign=s,n.textBaseline="middle",n.font=h.string,e.x=Cs(this,w,i),n.fillStyle=i.bodyColor,Q(this.beforeBody,p),f=a&&w!=="right"?s==="center"?u/2+c:u+2+c:0,b=0,E=r.length;b<E;++b){for(m=r[b],v=this.labelTextColors[b],n.fillStyle=v,Q(m.before,p),x=m.lines,a&&x.length&&(this._drawColorBox(n,e,b,y,i),d=Math.max(h.lineHeight,l)),S=0,C=x.length;S<C;++S)p(x[S]),d=h.lineHeight;Q(m.after,p)}f=0,d=h.lineHeight,Q(this.afterBody,p),e.y-=o}drawFooter(e,n,i){const r=this.footer,o=r.length;let s,a;if(o){const l=Gi(i.rtl,this.x,this.width);for(e.x=Cs(this,i.footerAlign,i),e.y+=i.footerMarginTop,n.textAlign=l.textAlign(i.footerAlign),n.textBaseline="middle",s=Tt(i.footerFont),n.fillStyle=i.footerColor,n.font=s.string,a=0;a<o;++a)n.fillText(r[a],l.x(e.x),e.y+s.lineHeight/2),e.y+=s.lineHeight+i.footerSpacing}}drawBackground(e,n,i,r){const{xAlign:o,yAlign:s}=this,{x:a,y:l}=e,{width:u,height:c}=i,{topLeft:h,topRight:d,bottomLeft:f,bottomRight:y}=pi(r.cornerRadius);n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.beginPath(),n.moveTo(a+h,l),s==="top"&&this.drawCaret(e,n,i,r),n.lineTo(a+u-d,l),n.quadraticCurveTo(a+u,l,a+u,l+d),s==="center"&&o==="right"&&this.drawCaret(e,n,i,r),n.lineTo(a+u,l+c-y),n.quadraticCurveTo(a+u,l+c,a+u-y,l+c),s==="bottom"&&this.drawCaret(e,n,i,r),n.lineTo(a+f,l+c),n.quadraticCurveTo(a,l+c,a,l+c-f),s==="center"&&o==="left"&&this.drawCaret(e,n,i,r),n.lineTo(a,l+h),n.quadraticCurveTo(a,l,a+h,l),n.closePath(),n.fill(),r.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,i=this.$animations,r=i&&i.x,o=i&&i.y;if(r||o){const s=no[e.position].call(this,this._active,this._eventPosition);if(!s)return;const a=this._size=Sp(this,e),l=Object.assign({},s,this._size),u=Ep(n,e,l),c=Mp(e,l,u,n);(r._to!==c.x||o._to!==c.y)&&(this.xAlign=u.xAlign,this.yAlign=u.yAlign,this.width=a.width,this.height=a.height,this.caretX=s.x,this.caretY=s.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const r={width:this.width,height:this.height},o={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const s=Ht(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(e.save(),e.globalAlpha=i,this.drawBackground(o,e,r,n),Ug(e,n.textDirection),o.y+=s.top,this.drawTitle(o,e,n),this.drawBody(o,e,n),this.drawFooter(o,e,n),Yg(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const i=this._active,r=e.map(({datasetIndex:a,index:l})=>{const u=this.chart.getDatasetMeta(a);if(!u)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:u.data[l],index:l}}),o=!ka(i,r),s=this._positionChanged(r,n);(o||s)&&(this._active=r,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const r=this.options,o=this._active||[],s=this._getActiveElements(e,o,n,i),a=this._positionChanged(s,e),l=n||!ka(s,o)||a;return l&&(this._active=s,(r.enabled||r.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),l}_getActiveElements(e,n,i,r){const o=this.options;if(e.type==="mouseout")return[];if(!r)return n.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const s=this.chart.getElementsAtEventForMode(e,o.mode,o,i);return o.reverse&&s.reverse(),s}_positionChanged(e,n){const{caretX:i,caretY:r,options:o}=this,s=no[o.position].call(this,e,n);return s!==!1&&(i!==s.x||r!==s.y)}}A(lc,"positioners",no);var U4={id:"tooltip",_element:lc,positioners:no,afterInit(t,e,n){n&&(t.tooltip=new lc({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:vm},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Y4=Object.freeze({__proto__:null,Colors:r4,Decimation:l4,Filler:T4,Legend:A4,SubTitle:I4,Title:R4,Tooltip:U4});const X4=(t,e,n,i)=>(typeof e=="string"?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function Q4(t,e,n,i){const r=t.indexOf(e);if(r===-1)return X4(t,e,n,i);const o=t.lastIndexOf(e);return r!==o?n:r}const K4=(t,e)=>t===null?null:Ot(Math.round(t),0,e);function xm(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class uc extends Mi{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:r,label:o}of n)i[r]===o&&i.splice(r,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(q(e))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===e?n:Q4(i,e,V(n,e),this._addedLabels),K4(n,i.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:r}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),n||(r=this.getLabels().length-1)),this.min=i,this.max=r}buildTicks(){const e=this.min,n=this.max,i=this.options.offset,r=[];let o=this.getLabels();o=e===0&&n===o.length-1?o:o.slice(e,n+1),this._valueRange=Math.max(o.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let s=e;s<=n;s++)r.push({value:s});return r}getLabelForValue(e){return xm.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}A(uc,"id","category"),A(uc,"defaults",{ticks:{callback:xm}});function Z4(t,e){const n=[],{bounds:i,step:r,min:o,max:s,precision:a,count:l,maxTicks:u,maxDigits:c,includeBounds:h}=t,d=r||1,f=u-1,{min:y,max:p}=e,w=!q(o),m=!q(s),v=!q(l),x=(p-y)/(c+1);let b=Sf((p-y)/f/d)*d,S,E,C,M;if(b<1e-14&&!w&&!m)return[{value:y},{value:p}];M=Math.ceil(p/b)-Math.floor(y/b),M>f&&(b=Sf(M*b/f/d)*d),q(a)||(S=Math.pow(10,a),b=Math.ceil(b*S)/S),i==="ticks"?(E=Math.floor(y/b)*b,C=Math.ceil(p/b)*b):(E=y,C=p),w&&m&&r&&Hv((s-o)/r,b/1e3)?(M=Math.round(Math.min((s-o)/b,u)),b=(s-o)/M,E=o,C=s):v?(E=w?o:E,C=m?s:C,M=l-1,b=(C-E)/M):(M=(C-E)/b,Jr(M,Math.round(M),b/1e3)?M=Math.round(M):M=Math.ceil(M));const O=Math.max(Ef(b),Ef(E));S=Math.pow(10,q(a)?O:a),E=Math.round(E*S)/S,C=Math.round(C*S)/S;let P=0;for(w&&(h&&E!==o?(n.push({value:o}),E<o&&P++,Jr(Math.round((E+P*b)*S)/S,o,Pp(o,x,t))&&P++):E<o&&P++);P<M;++P){const z=Math.round((E+P*b)*S)/S;if(m&&z>s)break;n.push({value:z})}return m&&h&&C!==s?n.length&&Jr(n[n.length-1].value,s,Pp(s,x,t))?n[n.length-1].value=s:n.push({value:s}):(!m||C===s)&&n.push({value:C}),n}function Pp(t,e,{horizontal:n,minRotation:i}){const r=ze(i),o=(n?Math.sin(r):Math.cos(r))||.001,s=.75*e*(""+t).length;return Math.min(e/o,s)}class Oa extends Mi{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return q(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:r,max:o}=this;const s=l=>r=n?r:l,a=l=>o=i?o:l;if(e){const l=Ee(r),u=Ee(o);l<0&&u<0?a(0):l>0&&u>0&&s(0)}if(r===o){let l=o===0?1:Math.abs(o*.05);a(o+l),e||s(r-l)}this.min=r,this.max=o}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=e,r;return i?(r=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,r>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`),r=1e3)):(r=this.computeTickLimit(),n=n||11),n&&(r=Math.min(n,r)),r}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const r={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},o=this._range||this,s=Z4(r,o);return e.bounds==="ticks"&&Tg(s,this,"value"),e.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}configure(){const e=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const r=(i-n)/Math.max(e.length-1,1)/2;n-=r,i+=r}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(e){return Bo(e,this.chart.options.locale,this.options.ticks.format)}}class cc extends Oa{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=xt(e)?e:0,this.max=xt(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,i=ze(this.options.ticks.minRotation),r=(e?Math.sin(i):Math.cos(i))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,o.lineHeight/r))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}A(cc,"id","linear"),A(cc,"defaults",{ticks:{callback:Ja.formatters.numeric}});const Oo=t=>Math.floor(Ln(t)),ri=(t,e)=>Math.pow(10,Oo(t)+e);function Dp(t){return t/Math.pow(10,Oo(t))===1}function Op(t,e,n){const i=Math.pow(10,n),r=Math.floor(t/i);return Math.ceil(e/i)-r}function G4(t,e){const n=e-t;let i=Oo(n);for(;Op(t,e,i)>10;)i++;for(;Op(t,e,i)<10;)i--;return Math.min(i,Oo(t))}function J4(t,{min:e,max:n}){e=ae(t.min,e);const i=[],r=Oo(e);let o=G4(e,n),s=o<0?Math.pow(10,Math.abs(o)):1;const a=Math.pow(10,o),l=r>o?Math.pow(10,r):0,u=Math.round((e-l)*s)/s,c=Math.floor((e-l)/a/10)*a*10;let h=Math.floor((u-c)/Math.pow(10,o)),d=ae(t.min,Math.round((l+c+h*Math.pow(10,o))*s)/s);for(;d<n;)i.push({value:d,major:Dp(d),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(o++,h=2,s=o>=0?1:s),d=Math.round((l+c+h*Math.pow(10,o))*s)/s;const f=ae(t.max,d);return i.push({value:f,major:Dp(f),significand:h}),i}class hc extends Mi{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,n){const i=Oa.prototype.parse.apply(this,[e,n]);if(i===0){this._zero=!0;return}return xt(i)&&i>0?i:null}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=xt(e)?Math.max(0,e):null,this.max=xt(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!xt(this._userMin)&&(this.min=e===ri(this.min,0)?ri(this.min,-1):ri(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let i=this.min,r=this.max;const o=a=>i=e?i:a,s=a=>r=n?r:a;i===r&&(i<=0?(o(1),s(10)):(o(ri(i,-1)),s(ri(r,1)))),i<=0&&o(ri(r,-1)),r<=0&&s(ri(i,1)),this.min=i,this.max=r}buildTicks(){const e=this.options,n={min:this._userMin,max:this._userMax},i=J4(n,this);return e.bounds==="ticks"&&Tg(i,this,"value"),e.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(e){return e===void 0?"0":Bo(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=Ln(e),this._valueRange=Ln(this.max)-Ln(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(Ln(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const n=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+n*this._valueRange)}}A(hc,"id","logarithmic"),A(hc,"defaults",{ticks:{callback:Ja.formatters.logarithmic,major:{enabled:!0}}});function dc(t){const e=t.ticks;if(e.display&&t.display){const n=Ht(e.backdropPadding);return V(e.font&&e.font.size,_t.font.size)+n.height}return 0}function q4(t,e,n){return n=ft(n)?n:[n],{w:a3(t,e.string,n),h:n.length*e.lineHeight}}function Lp(t,e,n,i,r){return t===i||t===r?{start:e-n/2,end:e+n/2}:t<i||t>r?{start:e-n,end:e}:{start:e,end:e+n}}function t7(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},n=Object.assign({},e),i=[],r=[],o=t._pointLabels.length,s=t.options.pointLabels,a=s.centerPointLabels?ht/o:0;for(let l=0;l<o;l++){const u=s.setContext(t.getPointLabelContext(l));r[l]=u.padding;const c=t.getPointPosition(l,t.drawingArea+r[l],a),h=Tt(u.font),d=q4(t.ctx,h,t._pointLabels[l]);i[l]=d;const f=ue(t.getIndexAngle(l)+a),y=Math.round(_h(f)),p=Lp(y,c.x,d.w,0,180),w=Lp(y,c.y,d.h,90,270);e7(n,e,f,p,w)}t.setCenterPoint(e.l-n.l,n.r-e.r,e.t-n.t,n.b-e.b),t._pointLabelItems=r7(t,i,r)}function e7(t,e,n,i,r){const o=Math.abs(Math.sin(n)),s=Math.abs(Math.cos(n));let a=0,l=0;i.start<e.l?(a=(e.l-i.start)/o,t.l=Math.min(t.l,e.l-a)):i.end>e.r&&(a=(i.end-e.r)/o,t.r=Math.max(t.r,e.r+a)),r.start<e.t?(l=(e.t-r.start)/s,t.t=Math.min(t.t,e.t-l)):r.end>e.b&&(l=(r.end-e.b)/s,t.b=Math.max(t.b,e.b+l))}function n7(t,e,n){const i=t.drawingArea,{extra:r,additionalAngle:o,padding:s,size:a}=n,l=t.getPointPosition(e,i+r+s,o),u=Math.round(_h(ue(l.angle+kt))),c=a7(l.y,a.h,u),h=o7(u),d=s7(l.x,a.w,h);return{visible:!0,x:l.x,y:c,textAlign:h,left:d,top:c,right:d+a.w,bottom:c+a.h}}function i7(t,e){if(!e)return!0;const{left:n,top:i,right:r,bottom:o}=t;return!(cn({x:n,y:i},e)||cn({x:n,y:o},e)||cn({x:r,y:i},e)||cn({x:r,y:o},e))}function r7(t,e,n){const i=[],r=t._pointLabels.length,o=t.options,{centerPointLabels:s,display:a}=o.pointLabels,l={extra:dc(o)/2,additionalAngle:s?ht/r:0};let u;for(let c=0;c<r;c++){l.padding=n[c],l.size=e[c];const h=n7(t,c,l);i.push(h),a==="auto"&&(h.visible=i7(h,u),h.visible&&(u=h))}return i}function o7(t){return t===0||t===180?"center":t<180?"left":"right"}function s7(t,e,n){return n==="right"?t-=e:n==="center"&&(t-=e/2),t}function a7(t,e,n){return n===90||n===270?t-=e/2:(n>270||n<90)&&(t-=e),t}function l7(t,e,n){const{left:i,top:r,right:o,bottom:s}=n,{backdropColor:a}=e;if(!q(a)){const l=pi(e.borderRadius),u=Ht(e.backdropPadding);t.fillStyle=a;const c=i-u.left,h=r-u.top,d=o-i+u.width,f=s-r+u.height;Object.values(l).some(y=>y!==0)?(t.beginPath(),Po(t,{x:c,y:h,w:d,h:f,radius:l}),t.fill()):t.fillRect(c,h,d,f)}}function u7(t,e){const{ctx:n,options:{pointLabels:i}}=t;for(let r=e-1;r>=0;r--){const o=t._pointLabelItems[r];if(!o.visible)continue;const s=i.setContext(t.getPointLabelContext(r));l7(n,s,o);const a=Tt(s.font),{x:l,y:u,textAlign:c}=o;ki(n,t._pointLabels[r],l,u+a.lineHeight/2,a,{color:s.color,textAlign:c,textBaseline:"middle"})}}function _m(t,e,n,i){const{ctx:r}=t;if(n)r.arc(t.xCenter,t.yCenter,e,0,ct);else{let o=t.getPointPosition(0,e);r.moveTo(o.x,o.y);for(let s=1;s<i;s++)o=t.getPointPosition(s,e),r.lineTo(o.x,o.y)}}function c7(t,e,n,i,r){const o=t.ctx,s=e.circular,{color:a,lineWidth:l}=e;!s&&!i||!a||!l||n<0||(o.save(),o.strokeStyle=a,o.lineWidth=l,o.setLineDash(r.dash),o.lineDashOffset=r.dashOffset,o.beginPath(),_m(t,n,s,i),o.closePath(),o.stroke(),o.restore())}function h7(t,e,n){return qn(t,{label:n,index:e,type:"pointLabel"})}class Br extends Oa{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=Ht(dc(this.options)/2),n=this.width=this.maxWidth-e.width,i=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+n/2+e.left),this.yCenter=Math.floor(this.top+i/2+e.top),this.drawingArea=Math.floor(Math.min(n,i)/2)}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!1);this.min=xt(e)&&!isNaN(e)?e:0,this.max=xt(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/dc(this.options))}generateTickLabels(e){Oa.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((n,i)=>{const r=W(this.options.pointLabels.callback,[n,i],this);return r||r===0?r:""}).filter((n,i)=>this.chart.getDataVisibility(i))}fit(){const e=this.options;e.display&&e.pointLabels.display?t7(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,n,i,r){this.xCenter+=Math.floor((e-n)/2),this.yCenter+=Math.floor((i-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,n,i,r))}getIndexAngle(e){const n=ct/(this._pointLabels.length||1),i=this.options.startAngle||0;return ue(e*n+ze(i))}getDistanceFromCenterForValue(e){if(q(e))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*n:(e-this.min)*n}getValueForDistanceFromCenter(e){if(q(e))return NaN;const n=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(e){const n=this._pointLabels||[];if(e>=0&&e<n.length){const i=n[e];return h7(this.getContext(),e,i)}}getPointPosition(e,n,i=0){const r=this.getIndexAngle(e)-kt+i;return{x:Math.cos(r)*n+this.xCenter,y:Math.sin(r)*n+this.yCenter,angle:r}}getPointPositionForValue(e,n){return this.getPointPosition(e,this.getDistanceFromCenterForValue(n))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:n,top:i,right:r,bottom:o}=this._pointLabelItems[e];return{left:n,top:i,right:r,bottom:o}}drawBackground(){const{backgroundColor:e,grid:{circular:n}}=this.options;if(e){const i=this.ctx;i.save(),i.beginPath(),_m(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),i.closePath(),i.fillStyle=e,i.fill(),i.restore()}}drawGrid(){const e=this.ctx,n=this.options,{angleLines:i,grid:r,border:o}=n,s=this._pointLabels.length;let a,l,u;if(n.pointLabels.display&&u7(this,s),r.display&&this.ticks.forEach((c,h)=>{if(h!==0||h===0&&this.min<0){l=this.getDistanceFromCenterForValue(c.value);const d=this.getContext(h),f=r.setContext(d),y=o.setContext(d);c7(this,f,l,s,y)}}),i.display){for(e.save(),a=s-1;a>=0;a--){const c=i.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:d}=c;!d||!h||(e.lineWidth=d,e.strokeStyle=h,e.setLineDash(c.borderDash),e.lineDashOffset=c.borderDashOffset,l=this.getDistanceFromCenterForValue(n.reverse?this.min:this.max),u=this.getPointPosition(a,l),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(u.x,u.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,n=this.options,i=n.ticks;if(!i.display)return;const r=this.getIndexAngle(0);let o,s;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(r),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!n.reverse)return;const u=i.setContext(this.getContext(l)),c=Tt(u.font);if(o=this.getDistanceFromCenterForValue(this.ticks[l].value),u.showLabelBackdrop){e.font=c.string,s=e.measureText(a.label).width,e.fillStyle=u.backdropColor;const h=Ht(u.backdropPadding);e.fillRect(-s/2-h.left,-o-c.size/2-h.top,s+h.width,c.size+h.height)}ki(e,a.label,0,-o,c,{color:u.color,strokeColor:u.textStrokeColor,strokeWidth:u.textStrokeWidth})}),e.restore()}drawTitle(){}}A(Br,"id","radialLinear"),A(Br,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Ja.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),A(Br,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),A(Br,"descriptors",{angleLines:{_fallback:"grid"}});const nl={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},qt=Object.keys(nl);function $p(t,e){return t-e}function Ap(t,e){if(q(e))return null;const n=t._adapter,{parser:i,round:r,isoWeekday:o}=t._parseOpts;let s=e;return typeof i=="function"&&(s=i(s)),xt(s)||(s=typeof i=="string"?n.parse(s,i):n.parse(s)),s===null?null:(r&&(s=r==="week"&&(sr(o)||o===!0)?n.startOf(s,"isoWeek",o):n.startOf(s,r)),+s)}function zp(t,e,n,i){const r=qt.length;for(let o=qt.indexOf(t);o<r-1;++o){const s=nl[qt[o]],a=s.steps?s.steps:Number.MAX_SAFE_INTEGER;if(s.common&&Math.ceil((n-e)/(a*s.size))<=i)return qt[o]}return qt[r-1]}function d7(t,e,n,i,r){for(let o=qt.length-1;o>=qt.indexOf(n);o--){const s=qt[o];if(nl[s].common&&t._adapter.diff(r,i,s)>=e-1)return s}return qt[n?qt.indexOf(n):0]}function f7(t){for(let e=qt.indexOf(t)+1,n=qt.length;e<n;++e)if(nl[qt[e]].common)return qt[e]}function Rp(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:i,hi:r}=bh(n,e),o=n[i]>=e?n[i]:n[r];t[o]=!0}}function p7(t,e,n,i){const r=t._adapter,o=+r.startOf(e[0].value,i),s=e[e.length-1].value;let a,l;for(a=o;a<=s;a=+r.add(a,1,i))l=n[a],l>=0&&(e[l].major=!0);return e}function Ip(t,e,n){const i=[],r={},o=e.length;let s,a;for(s=0;s<o;++s)a=e[s],r[a]=s,i.push({value:a,major:!1});return o===0||!n?i:p7(t,i,r,n)}class Lo extends Mi{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const i=e.time||(e.time={}),r=this._adapter=new k6._date(e.adapters.date);r.init(n),Gr(i.displayFormats,r.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:Ap(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,i=e.time.unit||"day";let{min:r,max:o,minDefined:s,maxDefined:a}=this.getUserBounds();function l(u){!s&&!isNaN(u.min)&&(r=Math.min(r,u.min)),!a&&!isNaN(u.max)&&(o=Math.max(o,u.max))}(!s||!a)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),r=xt(r)&&!isNaN(r)?r:+n.startOf(Date.now(),i),o=xt(o)&&!isNaN(o)?o:+n.endOf(Date.now(),i)+1,this.min=Math.min(r,o-1),this.max=Math.max(r+1,o)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],i=e[e.length-1]),{min:n,max:i}}buildTicks(){const e=this.options,n=e.time,i=e.ticks,r=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);const o=this.min,s=this.max,a=Qv(r,o,s);return this._unit=n.unit||(i.autoSkip?zp(n.minUnit,this.min,this.max,this._getLabelCapacity(o)):d7(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:f7(this._unit),this.initOffsets(r),e.reverse&&a.reverse(),Ip(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,i=0,r,o;this.options.offset&&e.length&&(r=this.getDecimalForValue(e[0]),e.length===1?n=1-r:n=(this.getDecimalForValue(e[1])-r)/2,o=this.getDecimalForValue(e[e.length-1]),e.length===1?i=o:i=(o-this.getDecimalForValue(e[e.length-2]))/2);const s=e.length<3?.5:.25;n=Ot(n,0,s),i=Ot(i,0,s),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const e=this._adapter,n=this.min,i=this.max,r=this.options,o=r.time,s=o.unit||zp(o.minUnit,n,i,this._getLabelCapacity(n)),a=V(r.ticks.stepSize,1),l=s==="week"?o.isoWeekday:!1,u=sr(l)||l===!0,c={};let h=n,d,f;if(u&&(h=+e.startOf(h,"isoWeek",l)),h=+e.startOf(h,u?"day":s),e.diff(i,n,s)>1e5*a)throw new Error(n+" and "+i+" are too far apart with stepSize of "+a+" "+s);const y=r.ticks.source==="data"&&this.getDataTimestamps();for(d=h,f=0;d<i;d=+e.add(d,a,s),f++)Rp(c,d,y);return(d===i||r.bounds==="ticks"||f===1)&&Rp(c,d,y),Object.keys(c).sort($p).map(p=>+p)}getLabelForValue(e){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(e,i.tooltipFormat):n.format(e,i.displayFormats.datetime)}format(e,n){const i=this.options.time.displayFormats,r=this._unit,o=n||i[r];return this._adapter.format(e,o)}_tickFormatFunction(e,n,i,r){const o=this.options,s=o.ticks.callback;if(s)return W(s,[e,n,i],this);const a=o.time.displayFormats,l=this._unit,u=this._majorUnit,c=l&&a[l],h=u&&a[u],d=i[n],f=u&&h&&d&&d.major;return this._adapter.format(e,r||(f?h:c))}generateTickLabels(e){let n,i,r;for(n=0,i=e.length;n<i;++n)r=e[n],r.label=this._tickFormatFunction(r.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,i=this.ctx.measureText(e).width,r=ze(this.isHorizontal()?n.maxRotation:n.minRotation),o=Math.cos(r),s=Math.sin(r),a=this._resolveTickFontOptions(0).size;return{w:i*o+a*s,h:i*s+a*o}}_getLabelCapacity(e){const n=this.options.time,i=n.displayFormats,r=i[n.unit]||i.millisecond,o=this._tickFormatFunction(e,0,Ip(this,[e],this._majorUnit),r),s=this._getLabelSize(o),a=Math.floor(this.isHorizontal()?this.width/s.w:this.height/s.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],n,i;if(e.length)return e;const r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(n=0,i=r.length;n<i;++n)e=e.concat(r[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,i;if(e.length)return e;const r=this.getLabels();for(n=0,i=r.length;n<i;++n)e.push(Ap(this,r[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Og(e.sort($p))}}A(Lo,"id","time"),A(Lo,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Ts(t,e,n){let i=0,r=t.length-1,o,s,a,l;n?(e>=t[i].pos&&e<=t[r].pos&&({lo:i,hi:r}=un(t,"pos",e)),{pos:o,time:a}=t[i],{pos:s,time:l}=t[r]):(e>=t[i].time&&e<=t[r].time&&({lo:i,hi:r}=un(t,"time",e)),{time:o,pos:a}=t[i],{time:s,pos:l}=t[r]);const u=s-o;return u?a+(l-a)*(e-o)/u:a}class fc extends Lo{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=Ts(n,this.min),this._tableRange=Ts(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:i}=this,r=[],o=[];let s,a,l,u,c;for(s=0,a=e.length;s<a;++s)u=e[s],u>=n&&u<=i&&r.push(u);if(r.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(s=0,a=r.length;s<a;++s)c=r[s+1],l=r[s-1],u=r[s],Math.round((c+l)/2)!==u&&o.push({time:u,pos:s/(a-1)});return o}_generate(){const e=this.min,n=this.max;let i=super.getDataTimestamps();return(!i.includes(e)||!i.length)&&i.splice(0,0,e),(!i.includes(n)||i.length===1)&&i.push(n),i.sort((r,o)=>r-o)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?e=this.normalize(n.concat(i)):e=n.length?n:i,e=this._cache.all=e,e}getDecimalForValue(e){return(Ts(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return Ts(this._table,i*this._tableRange+this._minPos,!0)}}A(fc,"id","timeseries"),A(fc,"defaults",Lo.defaults);var g7=Object.freeze({__proto__:null,CategoryScale:uc,LinearScale:cc,LogarithmicScale:hc,RadialLinearScale:Br,TimeScale:Lo,TimeSeriesScale:fc});const m7=[w6,J2,Y4,g7];var bm={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(t){(function(e,n,i,r){var o=["","webkit","Moz","MS","ms","o"],s=n.createElement("div"),a="function",l=Math.round,u=Math.abs,c=Date.now;function h(g,_,k){return setTimeout(x(g,k),_)}function d(g,_,k){return Array.isArray(g)?(f(g,k[_],k),!0):!1}function f(g,_,k){var T;if(g)if(g.forEach)g.forEach(_,k);else if(g.length!==r)for(T=0;T<g.length;)_.call(k,g[T],T,g),T++;else for(T in g)g.hasOwnProperty(T)&&_.call(k,g[T],T,g)}function y(g,_,k){var T="DEPRECATED METHOD: "+_+`
`+k+` AT 
`;return function(){var L=new Error("get-stack-trace"),j=L&&L.stack?L.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",Z=e.console&&(e.console.warn||e.console.log);return Z&&Z.call(e.console,T,j),g.apply(this,arguments)}}var p;typeof Object.assign!="function"?p=function(g){if(g===r||g===null)throw new TypeError("Cannot convert undefined or null to object");for(var _=Object(g),k=1;k<arguments.length;k++){var T=arguments[k];if(T!==r&&T!==null)for(var L in T)T.hasOwnProperty(L)&&(_[L]=T[L])}return _}:p=Object.assign;var w=y(function(g,_,k){for(var T=Object.keys(_),L=0;L<T.length;)(!k||k&&g[T[L]]===r)&&(g[T[L]]=_[T[L]]),L++;return g},"extend","Use `assign`."),m=y(function(g,_){return w(g,_,!0)},"merge","Use `assign`.");function v(g,_,k){var T=_.prototype,L;L=g.prototype=Object.create(T),L.constructor=g,L._super=T,k&&p(L,k)}function x(g,_){return function(){return g.apply(_,arguments)}}function b(g,_){return typeof g==a?g.apply(_&&_[0]||r,_):g}function S(g,_){return g===r?_:g}function E(g,_,k){f(P(_),function(T){g.addEventListener(T,k,!1)})}function C(g,_,k){f(P(_),function(T){g.removeEventListener(T,k,!1)})}function M(g,_){for(;g;){if(g==_)return!0;g=g.parentNode}return!1}function O(g,_){return g.indexOf(_)>-1}function P(g){return g.trim().split(/\s+/g)}function z(g,_,k){if(g.indexOf&&!k)return g.indexOf(_);for(var T=0;T<g.length;){if(k&&g[T][k]==_||!k&&g[T]===_)return T;T++}return-1}function F(g){return Array.prototype.slice.call(g,0)}function U(g,_,k){for(var T=[],L=[],j=0;j<g.length;){var Z=g[j][_];z(L,Z)<0&&T.push(g[j]),L[j]=Z,j++}return T=T.sort(function(pt,Pe){return pt[_]>Pe[_]}),T}function tt(g,_){for(var k,T,L=_[0].toUpperCase()+_.slice(1),j=0;j<o.length;){if(k=o[j],T=k?k+L:_,T in g)return T;j++}return r}var B=1;function H(){return B++}function et(g){var _=g.ownerDocument||g;return _.defaultView||_.parentWindow||e}var D=/mobile|tablet|ip(ad|hone|od)|android/i,I="ontouchstart"in e,R=tt(e,"PointerEvent")!==r,Y=I&&D.test(navigator.userAgent),X="touch",Pt="pen",st="mouse",$t="kinect",bt=25,rt=1,Kt=2,it=4,at=8,ge=1,yn=2,vn=4,xn=8,_n=16,re=yn|vn,oe=xn|_n,bn=re|oe,Ih=["x","y"],Wo=["clientX","clientY"];function me(g,_){var k=this;this.manager=g,this.callback=_,this.element=g.element,this.target=g.options.inputTarget,this.domHandler=function(T){b(g.options.enable,[g])&&k.handler(T)},this.init()}me.prototype={handler:function(){},init:function(){this.evEl&&E(this.element,this.evEl,this.domHandler),this.evTarget&&E(this.target,this.evTarget,this.domHandler),this.evWin&&E(et(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&C(this.element,this.evEl,this.domHandler),this.evTarget&&C(this.target,this.evTarget,this.domHandler),this.evWin&&C(et(this.element),this.evWin,this.domHandler)}};function Rm(g){var _,k=g.options.inputClass;return k?_=k:R?_=ol:Y?_=Yo:I?_=sl:_=Uo,new _(g,Im)}function Im(g,_,k){var T=k.pointers.length,L=k.changedPointers.length,j=_&rt&&T-L===0,Z=_&(it|at)&&T-L===0;k.isFirst=!!j,k.isFinal=!!Z,j&&(g.session={}),k.eventType=_,Nm(g,k),g.emit("hammer.input",k),g.recognize(k),g.session.prevInput=k}function Nm(g,_){var k=g.session,T=_.pointers,L=T.length;k.firstInput||(k.firstInput=Nh(_)),L>1&&!k.firstMultiple?k.firstMultiple=Nh(_):L===1&&(k.firstMultiple=!1);var j=k.firstInput,Z=k.firstMultiple,pt=Z?Z.center:j.center,Pe=_.center=Fh(T);_.timeStamp=c(),_.deltaTime=_.timeStamp-j.timeStamp,_.angle=rl(pt,Pe),_.distance=Ho(pt,Pe),Fm(k,_),_.offsetDirection=Bh(_.deltaX,_.deltaY);var se=jh(_.deltaTime,_.deltaX,_.deltaY);_.overallVelocityX=se.x,_.overallVelocityY=se.y,_.overallVelocity=u(se.x)>u(se.y)?se.x:se.y,_.scale=Z?Vm(Z.pointers,T):1,_.rotation=Z?Bm(Z.pointers,T):0,_.maxPointers=k.prevInput?_.pointers.length>k.prevInput.maxPointers?_.pointers.length:k.prevInput.maxPointers:_.pointers.length,jm(k,_);var Ve=g.element;M(_.srcEvent.target,Ve)&&(Ve=_.srcEvent.target),_.target=Ve}function Fm(g,_){var k=_.center,T=g.offsetDelta||{},L=g.prevDelta||{},j=g.prevInput||{};(_.eventType===rt||j.eventType===it)&&(L=g.prevDelta={x:j.deltaX||0,y:j.deltaY||0},T=g.offsetDelta={x:k.x,y:k.y}),_.deltaX=L.x+(k.x-T.x),_.deltaY=L.y+(k.y-T.y)}function jm(g,_){var k=g.lastInterval||_,T=_.timeStamp-k.timeStamp,L,j,Z,pt;if(_.eventType!=at&&(T>bt||k.velocity===r)){var Pe=_.deltaX-k.deltaX,se=_.deltaY-k.deltaY,Ve=jh(T,Pe,se);j=Ve.x,Z=Ve.y,L=u(Ve.x)>u(Ve.y)?Ve.x:Ve.y,pt=Bh(Pe,se),g.lastInterval=_}else L=k.velocity,j=k.velocityX,Z=k.velocityY,pt=k.direction;_.velocity=L,_.velocityX=j,_.velocityY=Z,_.direction=pt}function Nh(g){for(var _=[],k=0;k<g.pointers.length;)_[k]={clientX:l(g.pointers[k].clientX),clientY:l(g.pointers[k].clientY)},k++;return{timeStamp:c(),pointers:_,center:Fh(_),deltaX:g.deltaX,deltaY:g.deltaY}}function Fh(g){var _=g.length;if(_===1)return{x:l(g[0].clientX),y:l(g[0].clientY)};for(var k=0,T=0,L=0;L<_;)k+=g[L].clientX,T+=g[L].clientY,L++;return{x:l(k/_),y:l(T/_)}}function jh(g,_,k){return{x:_/g||0,y:k/g||0}}function Bh(g,_){return g===_?ge:u(g)>=u(_)?g<0?yn:vn:_<0?xn:_n}function Ho(g,_,k){k||(k=Ih);var T=_[k[0]]-g[k[0]],L=_[k[1]]-g[k[1]];return Math.sqrt(T*T+L*L)}function rl(g,_,k){k||(k=Ih);var T=_[k[0]]-g[k[0]],L=_[k[1]]-g[k[1]];return Math.atan2(L,T)*180/Math.PI}function Bm(g,_){return rl(_[1],_[0],Wo)+rl(g[1],g[0],Wo)}function Vm(g,_){return Ho(_[0],_[1],Wo)/Ho(g[0],g[1],Wo)}var Wm={mousedown:rt,mousemove:Kt,mouseup:it},Hm="mousedown",Um="mousemove mouseup";function Uo(){this.evEl=Hm,this.evWin=Um,this.pressed=!1,me.apply(this,arguments)}v(Uo,me,{handler:function(g){var _=Wm[g.type];_&rt&&g.button===0&&(this.pressed=!0),_&Kt&&g.which!==1&&(_=it),this.pressed&&(_&it&&(this.pressed=!1),this.callback(this.manager,_,{pointers:[g],changedPointers:[g],pointerType:st,srcEvent:g}))}});var Ym={pointerdown:rt,pointermove:Kt,pointerup:it,pointercancel:at,pointerout:at},Xm={2:X,3:Pt,4:st,5:$t},Vh="pointerdown",Wh="pointermove pointerup pointercancel";e.MSPointerEvent&&!e.PointerEvent&&(Vh="MSPointerDown",Wh="MSPointerMove MSPointerUp MSPointerCancel");function ol(){this.evEl=Vh,this.evWin=Wh,me.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}v(ol,me,{handler:function(g){var _=this.store,k=!1,T=g.type.toLowerCase().replace("ms",""),L=Ym[T],j=Xm[g.pointerType]||g.pointerType,Z=j==X,pt=z(_,g.pointerId,"pointerId");L&rt&&(g.button===0||Z)?pt<0&&(_.push(g),pt=_.length-1):L&(it|at)&&(k=!0),!(pt<0)&&(_[pt]=g,this.callback(this.manager,L,{pointers:_,changedPointers:[g],pointerType:j,srcEvent:g}),k&&_.splice(pt,1))}});var Qm={touchstart:rt,touchmove:Kt,touchend:it,touchcancel:at},Km="touchstart",Zm="touchstart touchmove touchend touchcancel";function Hh(){this.evTarget=Km,this.evWin=Zm,this.started=!1,me.apply(this,arguments)}v(Hh,me,{handler:function(g){var _=Qm[g.type];if(_===rt&&(this.started=!0),!!this.started){var k=Gm.call(this,g,_);_&(it|at)&&k[0].length-k[1].length===0&&(this.started=!1),this.callback(this.manager,_,{pointers:k[0],changedPointers:k[1],pointerType:X,srcEvent:g})}}});function Gm(g,_){var k=F(g.touches),T=F(g.changedTouches);return _&(it|at)&&(k=U(k.concat(T),"identifier")),[k,T]}var Jm={touchstart:rt,touchmove:Kt,touchend:it,touchcancel:at},qm="touchstart touchmove touchend touchcancel";function Yo(){this.evTarget=qm,this.targetIds={},me.apply(this,arguments)}v(Yo,me,{handler:function(g){var _=Jm[g.type],k=t5.call(this,g,_);k&&this.callback(this.manager,_,{pointers:k[0],changedPointers:k[1],pointerType:X,srcEvent:g})}});function t5(g,_){var k=F(g.touches),T=this.targetIds;if(_&(rt|Kt)&&k.length===1)return T[k[0].identifier]=!0,[k,k];var L,j,Z=F(g.changedTouches),pt=[],Pe=this.target;if(j=k.filter(function(se){return M(se.target,Pe)}),_===rt)for(L=0;L<j.length;)T[j[L].identifier]=!0,L++;for(L=0;L<Z.length;)T[Z[L].identifier]&&pt.push(Z[L]),_&(it|at)&&delete T[Z[L].identifier],L++;if(pt.length)return[U(j.concat(pt),"identifier"),pt]}var e5=2500,Uh=25;function sl(){me.apply(this,arguments);var g=x(this.handler,this);this.touch=new Yo(this.manager,g),this.mouse=new Uo(this.manager,g),this.primaryTouch=null,this.lastTouches=[]}v(sl,me,{handler:function(g,_,k){var T=k.pointerType==X,L=k.pointerType==st;if(!(L&&k.sourceCapabilities&&k.sourceCapabilities.firesTouchEvents)){if(T)n5.call(this,_,k);else if(L&&i5.call(this,k))return;this.callback(g,_,k)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function n5(g,_){g&rt?(this.primaryTouch=_.changedPointers[0].identifier,Yh.call(this,_)):g&(it|at)&&Yh.call(this,_)}function Yh(g){var _=g.changedPointers[0];if(_.identifier===this.primaryTouch){var k={x:_.clientX,y:_.clientY};this.lastTouches.push(k);var T=this.lastTouches,L=function(){var j=T.indexOf(k);j>-1&&T.splice(j,1)};setTimeout(L,e5)}}function i5(g){for(var _=g.srcEvent.clientX,k=g.srcEvent.clientY,T=0;T<this.lastTouches.length;T++){var L=this.lastTouches[T],j=Math.abs(_-L.x),Z=Math.abs(k-L.y);if(j<=Uh&&Z<=Uh)return!0}return!1}var Xh=tt(s.style,"touchAction"),Qh=Xh!==r,Kh="compute",Zh="auto",al="manipulation",ti="none",gr="pan-x",mr="pan-y",Xo=o5();function ll(g,_){this.manager=g,this.set(_)}ll.prototype={set:function(g){g==Kh&&(g=this.compute()),Qh&&this.manager.element.style&&Xo[g]&&(this.manager.element.style[Xh]=g),this.actions=g.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var g=[];return f(this.manager.recognizers,function(_){b(_.options.enable,[_])&&(g=g.concat(_.getTouchAction()))}),r5(g.join(" "))},preventDefaults:function(g){var _=g.srcEvent,k=g.offsetDirection;if(this.manager.session.prevented){_.preventDefault();return}var T=this.actions,L=O(T,ti)&&!Xo[ti],j=O(T,mr)&&!Xo[mr],Z=O(T,gr)&&!Xo[gr];if(L){var pt=g.pointers.length===1,Pe=g.distance<2,se=g.deltaTime<250;if(pt&&Pe&&se)return}if(!(Z&&j)&&(L||j&&k&re||Z&&k&oe))return this.preventSrc(_)},preventSrc:function(g){this.manager.session.prevented=!0,g.preventDefault()}};function r5(g){if(O(g,ti))return ti;var _=O(g,gr),k=O(g,mr);return _&&k?ti:_||k?_?gr:mr:O(g,al)?al:Zh}function o5(){if(!Qh)return!1;var g={},_=e.CSS&&e.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(k){g[k]=_?e.CSS.supports("touch-action",k):!0}),g}var Qo=1,ye=2,Ci=4,wn=8,Ge=wn,yr=16,Be=32;function Je(g){this.options=p({},this.defaults,g||{}),this.id=H(),this.manager=null,this.options.enable=S(this.options.enable,!0),this.state=Qo,this.simultaneous={},this.requireFail=[]}Je.prototype={defaults:{},set:function(g){return p(this.options,g),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(g){if(d(g,"recognizeWith",this))return this;var _=this.simultaneous;return g=Ko(g,this),_[g.id]||(_[g.id]=g,g.recognizeWith(this)),this},dropRecognizeWith:function(g){return d(g,"dropRecognizeWith",this)?this:(g=Ko(g,this),delete this.simultaneous[g.id],this)},requireFailure:function(g){if(d(g,"requireFailure",this))return this;var _=this.requireFail;return g=Ko(g,this),z(_,g)===-1&&(_.push(g),g.requireFailure(this)),this},dropRequireFailure:function(g){if(d(g,"dropRequireFailure",this))return this;g=Ko(g,this);var _=z(this.requireFail,g);return _>-1&&this.requireFail.splice(_,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(g){return!!this.simultaneous[g.id]},emit:function(g){var _=this,k=this.state;function T(L){_.manager.emit(L,g)}k<wn&&T(_.options.event+Gh(k)),T(_.options.event),g.additionalEvent&&T(g.additionalEvent),k>=wn&&T(_.options.event+Gh(k))},tryEmit:function(g){if(this.canEmit())return this.emit(g);this.state=Be},canEmit:function(){for(var g=0;g<this.requireFail.length;){if(!(this.requireFail[g].state&(Be|Qo)))return!1;g++}return!0},recognize:function(g){var _=p({},g);if(!b(this.options.enable,[this,_])){this.reset(),this.state=Be;return}this.state&(Ge|yr|Be)&&(this.state=Qo),this.state=this.process(_),this.state&(ye|Ci|wn|yr)&&this.tryEmit(_)},process:function(g){},getTouchAction:function(){},reset:function(){}};function Gh(g){return g&yr?"cancel":g&wn?"end":g&Ci?"move":g&ye?"start":""}function Jh(g){return g==_n?"down":g==xn?"up":g==yn?"left":g==vn?"right":""}function Ko(g,_){var k=_.manager;return k?k.get(g):g}function Te(){Je.apply(this,arguments)}v(Te,Je,{defaults:{pointers:1},attrTest:function(g){var _=this.options.pointers;return _===0||g.pointers.length===_},process:function(g){var _=this.state,k=g.eventType,T=_&(ye|Ci),L=this.attrTest(g);return T&&(k&at||!L)?_|yr:T||L?k&it?_|wn:_&ye?_|Ci:ye:Be}});function Zo(){Te.apply(this,arguments),this.pX=null,this.pY=null}v(Zo,Te,{defaults:{event:"pan",threshold:10,pointers:1,direction:bn},getTouchAction:function(){var g=this.options.direction,_=[];return g&re&&_.push(mr),g&oe&&_.push(gr),_},directionTest:function(g){var _=this.options,k=!0,T=g.distance,L=g.direction,j=g.deltaX,Z=g.deltaY;return L&_.direction||(_.direction&re?(L=j===0?ge:j<0?yn:vn,k=j!=this.pX,T=Math.abs(g.deltaX)):(L=Z===0?ge:Z<0?xn:_n,k=Z!=this.pY,T=Math.abs(g.deltaY))),g.direction=L,k&&T>_.threshold&&L&_.direction},attrTest:function(g){return Te.prototype.attrTest.call(this,g)&&(this.state&ye||!(this.state&ye)&&this.directionTest(g))},emit:function(g){this.pX=g.deltaX,this.pY=g.deltaY;var _=Jh(g.direction);_&&(g.additionalEvent=this.options.event+_),this._super.emit.call(this,g)}});function ul(){Te.apply(this,arguments)}v(ul,Te,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ti]},attrTest:function(g){return this._super.attrTest.call(this,g)&&(Math.abs(g.scale-1)>this.options.threshold||this.state&ye)},emit:function(g){if(g.scale!==1){var _=g.scale<1?"in":"out";g.additionalEvent=this.options.event+_}this._super.emit.call(this,g)}});function cl(){Je.apply(this,arguments),this._timer=null,this._input=null}v(cl,Je,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Zh]},process:function(g){var _=this.options,k=g.pointers.length===_.pointers,T=g.distance<_.threshold,L=g.deltaTime>_.time;if(this._input=g,!T||!k||g.eventType&(it|at)&&!L)this.reset();else if(g.eventType&rt)this.reset(),this._timer=h(function(){this.state=Ge,this.tryEmit()},_.time,this);else if(g.eventType&it)return Ge;return Be},reset:function(){clearTimeout(this._timer)},emit:function(g){this.state===Ge&&(g&&g.eventType&it?this.manager.emit(this.options.event+"up",g):(this._input.timeStamp=c(),this.manager.emit(this.options.event,this._input)))}});function hl(){Te.apply(this,arguments)}v(hl,Te,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ti]},attrTest:function(g){return this._super.attrTest.call(this,g)&&(Math.abs(g.rotation)>this.options.threshold||this.state&ye)}});function dl(){Te.apply(this,arguments)}v(dl,Te,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:re|oe,pointers:1},getTouchAction:function(){return Zo.prototype.getTouchAction.call(this)},attrTest:function(g){var _=this.options.direction,k;return _&(re|oe)?k=g.overallVelocity:_&re?k=g.overallVelocityX:_&oe&&(k=g.overallVelocityY),this._super.attrTest.call(this,g)&&_&g.offsetDirection&&g.distance>this.options.threshold&&g.maxPointers==this.options.pointers&&u(k)>this.options.velocity&&g.eventType&it},emit:function(g){var _=Jh(g.offsetDirection);_&&this.manager.emit(this.options.event+_,g),this.manager.emit(this.options.event,g)}});function Go(){Je.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}v(Go,Je,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[al]},process:function(g){var _=this.options,k=g.pointers.length===_.pointers,T=g.distance<_.threshold,L=g.deltaTime<_.time;if(this.reset(),g.eventType&rt&&this.count===0)return this.failTimeout();if(T&&L&&k){if(g.eventType!=it)return this.failTimeout();var j=this.pTime?g.timeStamp-this.pTime<_.interval:!0,Z=!this.pCenter||Ho(this.pCenter,g.center)<_.posThreshold;this.pTime=g.timeStamp,this.pCenter=g.center,!Z||!j?this.count=1:this.count+=1,this._input=g;var pt=this.count%_.taps;if(pt===0)return this.hasRequireFailures()?(this._timer=h(function(){this.state=Ge,this.tryEmit()},_.interval,this),ye):Ge}return Be},failTimeout:function(){return this._timer=h(function(){this.state=Be},this.options.interval,this),Be},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Ge&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function kn(g,_){return _=_||{},_.recognizers=S(_.recognizers,kn.defaults.preset),new fl(g,_)}kn.VERSION="2.0.7",kn.defaults={domEvents:!1,touchAction:Kh,enable:!0,inputTarget:null,inputClass:null,preset:[[hl,{enable:!1}],[ul,{enable:!1},["rotate"]],[dl,{direction:re}],[Zo,{direction:re},["swipe"]],[Go],[Go,{event:"doubletap",taps:2},["tap"]],[cl]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var s5=1,qh=2;function fl(g,_){this.options=p({},kn.defaults,_||{}),this.options.inputTarget=this.options.inputTarget||g,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=g,this.input=Rm(this),this.touchAction=new ll(this,this.options.touchAction),td(this,!0),f(this.options.recognizers,function(k){var T=this.add(new k[0](k[1]));k[2]&&T.recognizeWith(k[2]),k[3]&&T.requireFailure(k[3])},this)}fl.prototype={set:function(g){return p(this.options,g),g.touchAction&&this.touchAction.update(),g.inputTarget&&(this.input.destroy(),this.input.target=g.inputTarget,this.input.init()),this},stop:function(g){this.session.stopped=g?qh:s5},recognize:function(g){var _=this.session;if(!_.stopped){this.touchAction.preventDefaults(g);var k,T=this.recognizers,L=_.curRecognizer;(!L||L&&L.state&Ge)&&(L=_.curRecognizer=null);for(var j=0;j<T.length;)k=T[j],_.stopped!==qh&&(!L||k==L||k.canRecognizeWith(L))?k.recognize(g):k.reset(),!L&&k.state&(ye|Ci|wn)&&(L=_.curRecognizer=k),j++}},get:function(g){if(g instanceof Je)return g;for(var _=this.recognizers,k=0;k<_.length;k++)if(_[k].options.event==g)return _[k];return null},add:function(g){if(d(g,"add",this))return this;var _=this.get(g.options.event);return _&&this.remove(_),this.recognizers.push(g),g.manager=this,this.touchAction.update(),g},remove:function(g){if(d(g,"remove",this))return this;if(g=this.get(g),g){var _=this.recognizers,k=z(_,g);k!==-1&&(_.splice(k,1),this.touchAction.update())}return this},on:function(g,_){if(g!==r&&_!==r){var k=this.handlers;return f(P(g),function(T){k[T]=k[T]||[],k[T].push(_)}),this}},off:function(g,_){if(g!==r){var k=this.handlers;return f(P(g),function(T){_?k[T]&&k[T].splice(z(k[T],_),1):delete k[T]}),this}},emit:function(g,_){this.options.domEvents&&a5(g,_);var k=this.handlers[g]&&this.handlers[g].slice();if(!(!k||!k.length)){_.type=g,_.preventDefault=function(){_.srcEvent.preventDefault()};for(var T=0;T<k.length;)k[T](_),T++}},destroy:function(){this.element&&td(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function td(g,_){var k=g.element;if(k.style){var T;f(g.options.cssProps,function(L,j){T=tt(k.style,j),_?(g.oldCssProps[T]=k.style[T],k.style[T]=L):k.style[T]=g.oldCssProps[T]||""}),_||(g.oldCssProps={})}}function a5(g,_){var k=n.createEvent("Event");k.initEvent(g,!0,!0),k.gesture=_,_.target.dispatchEvent(k)}p(kn,{INPUT_START:rt,INPUT_MOVE:Kt,INPUT_END:it,INPUT_CANCEL:at,STATE_POSSIBLE:Qo,STATE_BEGAN:ye,STATE_CHANGED:Ci,STATE_ENDED:wn,STATE_RECOGNIZED:Ge,STATE_CANCELLED:yr,STATE_FAILED:Be,DIRECTION_NONE:ge,DIRECTION_LEFT:yn,DIRECTION_RIGHT:vn,DIRECTION_UP:xn,DIRECTION_DOWN:_n,DIRECTION_HORIZONTAL:re,DIRECTION_VERTICAL:oe,DIRECTION_ALL:bn,Manager:fl,Input:me,TouchAction:ll,TouchInput:Yo,MouseInput:Uo,PointerEventInput:ol,TouchMouseInput:sl,SingleTouchInput:Hh,Recognizer:Je,AttrRecognizer:Te,Tap:Go,Pan:Zo,Swipe:dl,Pinch:ul,Rotate:hl,Press:cl,on:E,off:C,each:f,merge:m,extend:w,assign:p,inherit:v,bindFn:x,prefixed:tt});var l5=typeof e<"u"?e:typeof self<"u"?self:{};l5.Hammer=kn,t.exports?t.exports=kn:e[i]=kn})(window,document,"Hammer")})(bm);var y7=bm.exports;const io=lg(y7);/*!
* chartjs-plugin-zoom v2.0.1
* undefined
 * (c) 2016-2023 chartjs-plugin-zoom Contributors
 * Released under the MIT License
 */const $o=t=>t&&t.enabled&&t.modifierKey,wm=(t,e)=>t&&e[t+"Key"],$h=(t,e)=>t&&!e[t+"Key"];function Kn(t,e,n){return t===void 0?!0:typeof t=="string"?t.indexOf(e)!==-1:typeof t=="function"?t({chart:n}).indexOf(e)!==-1:!1}function tu(t,e){return typeof t=="function"&&(t=t({chart:e})),typeof t=="string"?{x:t.indexOf("x")!==-1,y:t.indexOf("y")!==-1}:{x:!1,y:!1}}function v7(t,e){let n;return function(){return clearTimeout(n),n=setTimeout(t,e),e}}function x7({x:t,y:e},n){const i=n.scales,r=Object.keys(i);for(let o=0;o<r.length;o++){const s=i[r[o]];if(e>=s.top&&e<=s.bottom&&t>=s.left&&t<=s.right)return s}return null}function km(t,e,n){const{mode:i="xy",scaleMode:r,overScaleMode:o}=t||{},s=x7(e,n),a=tu(i,n),l=tu(r,n);if(o){const c=tu(o,n);for(const h of["x","y"])c[h]&&(l[h]=a[h],a[h]=!1)}if(s&&l[s.axis])return[s];const u=[];return Q(n.scales,function(c){a[c.axis]&&u.push(c)}),u}const pc=new WeakMap;function St(t){let e=pc.get(t);return e||(e={originalScaleLimits:{},updatedScaleLimits:{},handlers:{},panDelta:{}},pc.set(t,e)),e}function _7(t){pc.delete(t)}function Sm(t,e,n){const i=t.max-t.min,r=i*(e-1),o=t.isHorizontal()?n.x:n.y,s=Math.max(0,Math.min(1,(t.getValueForPixel(o)-t.min)/i||0)),a=1-s;return{min:r*s,max:r*a}}function Np(t,e,n,i,r){let o=n[i];if(o==="original"){const s=t.originalScaleLimits[e.id][i];o=V(s.options,s.scale)}return V(o,r)}function b7(t,e,n){const i=t.getValueForPixel(e),r=t.getValueForPixel(n);return{min:Math.min(i,r),max:Math.max(i,r)}}function fr(t,{min:e,max:n},i,r=!1){const o=St(t.chart),{id:s,axis:a,options:l}=t,u=i&&(i[s]||i[a])||{},{minRange:c=0}=u,h=Np(o,t,u,"min",-1/0),d=Np(o,t,u,"max",1/0),f=r?Math.max(n-e,c):t.max-t.min,y=(f-n+e)/2;return e-=y,n+=y,e<h?(e=h,n=Math.min(h+f,d)):n>d&&(n=d,e=Math.max(d-f,h)),l.min=e,l.max=n,o.updatedScaleLimits[t.id]={min:e,max:n},t.parse(e)!==t.min||t.parse(n)!==t.max}function w7(t,e,n,i){const r=Sm(t,e,n),o={min:t.min+r.min,max:t.max-r.max};return fr(t,o,i,!0)}function k7(t,e,n,i){fr(t,b7(t,e,n),i,!0)}const Fp=t=>t===0||isNaN(t)?0:t<0?Math.min(Math.round(t),-1):Math.max(Math.round(t),1);function S7(t){const e=t.getLabels().length-1;t.min>0&&(t.min-=1),t.max<e&&(t.max+=1)}function E7(t,e,n,i){const r=Sm(t,e,n);t.min===t.max&&e<1&&S7(t);const o={min:t.min+Fp(r.min),max:t.max-Fp(r.max)};return fr(t,o,i,!0)}function M7(t){return t.isHorizontal()?t.width:t.height}function C7(t,e,n){const i=t.getLabels().length-1;let{min:r,max:o}=t;const s=Math.max(o-r,1),a=Math.round(M7(t)/Math.max(s,10)),l=Math.round(Math.abs(e/a));let u;return e<-a?(o=Math.min(o+l,i),r=s===1?o:o-s,u=o===i):e>a&&(r=Math.max(0,r-l),o=s===1?r:r+s,u=r===0),fr(t,{min:r,max:o},n)||u}const T7={second:500,minute:30*1e3,hour:30*60*1e3,day:12*60*60*1e3,week:3.5*24*60*60*1e3,month:15*24*60*60*1e3,quarter:60*24*60*60*1e3,year:182*24*60*60*1e3};function Em(t,e,n,i=!1){const{min:r,max:o,options:s}=t,a=s.time&&s.time.round,l=T7[a]||0,u=t.getValueForPixel(t.getPixelForValue(r+l)-e),c=t.getValueForPixel(t.getPixelForValue(o+l)-e),{min:h=-1/0,max:d=1/0}=i&&n&&n[t.axis]||{};return isNaN(u)||isNaN(c)||u<h||c>d?!0:fr(t,{min:u,max:c},n,i)}function jp(t,e,n){return Em(t,e,n,!0)}const gc={category:E7,default:w7},mc={default:k7},yc={category:C7,default:Em,logarithmic:jp,timeseries:jp};function P7(t,e,n){const{id:i,options:{min:r,max:o}}=t;if(!e[i]||!n[i])return!0;const s=n[i];return s.min!==r||s.max!==o}function Bp(t,e){Q(t,(n,i)=>{e[i]||delete t[i]})}function pr(t,e){const{scales:n}=t,{originalScaleLimits:i,updatedScaleLimits:r}=e;return Q(n,function(o){P7(o,i,r)&&(i[o.id]={min:{scale:o.min,options:o.options.min},max:{scale:o.max,options:o.options.max}})}),Bp(i,n),Bp(r,n),i}function Vp(t,e,n,i){const r=gc[t.type]||gc.default;W(r,[t,e,n,i])}function Wp(t,e,n,i,r){const o=mc[t.type]||mc.default;W(o,[t,e,n,i,r])}function D7(t){const e=t.chartArea;return{x:(e.left+e.right)/2,y:(e.top+e.bottom)/2}}function Ah(t,e,n="none"){const{x:i=1,y:r=1,focalPoint:o=D7(t)}=typeof e=="number"?{x:e,y:e}:e,s=St(t),{options:{limits:a,zoom:l}}=s;pr(t,s);const u=i!==1,c=r!==1,h=km(l,o,t);Q(h||t.scales,function(d){d.isHorizontal()&&u?Vp(d,i,o,a):!d.isHorizontal()&&c&&Vp(d,r,o,a)}),t.update(n),W(l.onZoom,[{chart:t}])}function Mm(t,e,n,i="none"){const r=St(t),{options:{limits:o,zoom:s}}=r,{mode:a="xy"}=s;pr(t,r);const l=Kn(a,"x",t),u=Kn(a,"y",t);Q(t.scales,function(c){c.isHorizontal()&&l?Wp(c,e.x,n.x,o):!c.isHorizontal()&&u&&Wp(c,e.y,n.y,o)}),t.update(i),W(s.onZoom,[{chart:t}])}function O7(t,e,n,i="none"){pr(t,St(t));const r=t.scales[e];fr(r,n,void 0,!0),t.update(i)}function L7(t,e="default"){const n=St(t),i=pr(t,n);Q(t.scales,function(r){const o=r.options;i[r.id]?(o.min=i[r.id].min.options,o.max=i[r.id].max.options):(delete o.min,delete o.max)}),t.update(e),W(n.options.zoom.onZoomComplete,[{chart:t}])}function $7(t,e){const n=t.originalScaleLimits[e];if(!n)return;const{min:i,max:r}=n;return V(r.options,r.scale)-V(i.options,i.scale)}function A7(t){const e=St(t);let n=1,i=1;return Q(t.scales,function(r){const o=$7(e,r.id);if(o){const s=Math.round(o/(r.max-r.min)*100)/100;n=Math.min(n,s),i=Math.max(i,s)}}),n<1?n:i}function Hp(t,e,n,i){const{panDelta:r}=i,o=r[t.id]||0;Ee(o)===Ee(e)&&(e+=o);const s=yc[t.type]||yc.default;W(s,[t,e,n])?r[t.id]=0:r[t.id]=e}function Cm(t,e,n,i="none"){const{x:r=0,y:o=0}=typeof e=="number"?{x:e,y:e}:e,s=St(t),{options:{pan:a,limits:l}}=s,{onPan:u}=a||{};pr(t,s);const c=r!==0,h=o!==0;Q(n||t.scales,function(d){d.isHorizontal()&&c?Hp(d,r,l,s):!d.isHorizontal()&&h&&Hp(d,o,l,s)}),t.update(i),W(u,[{chart:t}])}function Tm(t){const e=St(t);pr(t,e);const n={};for(const i of Object.keys(t.scales)){const{min:r,max:o}=e.originalScaleLimits[i]||{min:{},max:{}};n[i]={min:r.scale,max:o.scale}}return n}function z7(t){const e=Tm(t);for(const n of Object.keys(t.scales)){const{min:i,max:r}=e[n];if(i!==void 0&&t.scales[n].min!==i||r!==void 0&&t.scales[n].max!==r)return!0}return!1}function Jt(t,e){const{handlers:n}=St(t),i=n[e];i&&i.target&&(i.target.removeEventListener(e,i),delete n[e])}function ro(t,e,n,i){const{handlers:r,options:o}=St(t),s=r[n];s&&s.target===e||(Jt(t,n),r[n]=a=>i(t,a,o),r[n].target=e,e.addEventListener(n,r[n]))}function R7(t,e){const n=St(t);n.dragStart&&(n.dragging=!0,n.dragEnd=e,t.update("none"))}function I7(t,e){const n=St(t);!n.dragStart||e.key!=="Escape"||(Jt(t,"keydown"),n.dragging=!1,n.dragStart=n.dragEnd=null,t.update("none"))}function Pm(t,e,n){const{onZoomStart:i,onZoomRejected:r}=n;if(i){const o=Xe(e,t);if(W(i,[{chart:t,event:e,point:o}])===!1)return W(r,[{chart:t,event:e}]),!1}}function N7(t,e){const n=St(t),{pan:i,zoom:r={}}=n.options;if(e.button!==0||wm($o(i),e)||$h($o(r.drag),e))return W(r.onZoomRejected,[{chart:t,event:e}]);Pm(t,e,r)!==!1&&(n.dragStart=e,ro(t,t.canvas,"mousemove",R7),ro(t,window.document,"keydown",I7))}function Dm(t,e,n,i){const r=Kn(e,"x",t),o=Kn(e,"y",t);let{top:s,left:a,right:l,bottom:u,width:c,height:h}=t.chartArea;const d=Xe(n,t),f=Xe(i,t);r&&(a=Math.min(d.x,f.x),l=Math.max(d.x,f.x)),o&&(s=Math.min(d.y,f.y),u=Math.max(d.y,f.y));const y=l-a,p=u-s;return{left:a,top:s,right:l,bottom:u,width:y,height:p,zoomX:r&&y?1+(c-y)/c:1,zoomY:o&&p?1+(h-p)/h:1}}function F7(t,e){const n=St(t);if(!n.dragStart)return;Jt(t,"mousemove");const{mode:i,onZoomComplete:r,drag:{threshold:o=0}}=n.options.zoom,s=Dm(t,i,n.dragStart,e),a=Kn(i,"x",t)?s.width:0,l=Kn(i,"y",t)?s.height:0,u=Math.sqrt(a*a+l*l);if(n.dragStart=n.dragEnd=null,u<=o){n.dragging=!1,t.update("none");return}Mm(t,{x:s.left,y:s.top},{x:s.right,y:s.bottom},"zoom"),setTimeout(()=>n.dragging=!1,500),W(r,[{chart:t}])}function j7(t,e,n){if($h($o(n.wheel),e)){W(n.onZoomRejected,[{chart:t,event:e}]);return}if(Pm(t,e,n)!==!1&&(e.cancelable&&e.preventDefault(),e.deltaY!==void 0))return!0}function B7(t,e){const{handlers:{onZoomComplete:n},options:{zoom:i}}=St(t);if(!j7(t,e,i))return;const r=e.target.getBoundingClientRect(),o=1+(e.deltaY>=0?-i.wheel.speed:i.wheel.speed),s={x:o,y:o,focalPoint:{x:e.clientX-r.left,y:e.clientY-r.top}};Ah(t,s),n&&n()}function V7(t,e,n,i){n&&(St(t).handlers[e]=v7(()=>W(n,[{chart:t}]),i))}function W7(t,e){const n=t.canvas,{wheel:i,drag:r,onZoomComplete:o}=e.zoom;i.enabled?(ro(t,n,"wheel",B7),V7(t,"onZoomComplete",o,250)):Jt(t,"wheel"),r.enabled?(ro(t,n,"mousedown",N7),ro(t,n.ownerDocument,"mouseup",F7)):(Jt(t,"mousedown"),Jt(t,"mousemove"),Jt(t,"mouseup"),Jt(t,"keydown"))}function H7(t){Jt(t,"mousedown"),Jt(t,"mousemove"),Jt(t,"mouseup"),Jt(t,"wheel"),Jt(t,"click"),Jt(t,"keydown")}function U7(t,e){return function(n,i){const{pan:r,zoom:o={}}=e.options;if(!r||!r.enabled)return!1;const s=i&&i.srcEvent;return s&&!e.panning&&i.pointerType==="mouse"&&($h($o(r),s)||wm($o(o.drag),s))?(W(r.onPanRejected,[{chart:t,event:i}]),!1):!0}}function Y7(t,e){const n=Math.abs(t.clientX-e.clientX),i=Math.abs(t.clientY-e.clientY),r=n/i;let o,s;return r>.3&&r<1.7?o=s=!0:n>i?o=!0:s=!0,{x:o,y:s}}function Om(t,e,n){if(e.scale){const{center:i,pointers:r}=n,o=1/e.scale*n.scale,s=n.target.getBoundingClientRect(),a=Y7(r[0],r[1]),l=e.options.zoom.mode,u={x:a.x&&Kn(l,"x",t)?o:1,y:a.y&&Kn(l,"y",t)?o:1,focalPoint:{x:i.x-s.left,y:i.y-s.top}};Ah(t,u),e.scale=n.scale}}function X7(t,e){e.options.zoom.pinch.enabled&&(e.scale=1)}function Q7(t,e,n){e.scale&&(Om(t,e,n),e.scale=null,W(e.options.zoom.onZoomComplete,[{chart:t}]))}function Lm(t,e,n){const i=e.delta;i&&(e.panning=!0,Cm(t,{x:n.deltaX-i.x,y:n.deltaY-i.y},e.panScales),e.delta={x:n.deltaX,y:n.deltaY})}function K7(t,e,n){const{enabled:i,onPanStart:r,onPanRejected:o}=e.options.pan;if(!i)return;const s=n.target.getBoundingClientRect(),a={x:n.center.x-s.left,y:n.center.y-s.top};if(W(r,[{chart:t,event:n,point:a}])===!1)return W(o,[{chart:t,event:n}]);e.panScales=km(e.options.pan,a,t),e.delta={x:0,y:0},clearTimeout(e.panEndTimeout),Lm(t,e,n)}function Z7(t,e){e.delta=null,e.panning&&(e.panEndTimeout=setTimeout(()=>e.panning=!1,500),W(e.options.pan.onPanComplete,[{chart:t}]))}const vc=new WeakMap;function G7(t,e){const n=St(t),i=t.canvas,{pan:r,zoom:o}=e,s=new io.Manager(i);o&&o.pinch.enabled&&(s.add(new io.Pinch),s.on("pinchstart",()=>X7(t,n)),s.on("pinch",a=>Om(t,n,a)),s.on("pinchend",a=>Q7(t,n,a))),r&&r.enabled&&(s.add(new io.Pan({threshold:r.threshold,enable:U7(t,n)})),s.on("panstart",a=>K7(t,n,a)),s.on("panmove",a=>Lm(t,n,a)),s.on("panend",()=>Z7(t,n))),vc.set(t,s)}function J7(t){const e=vc.get(t);e&&(e.remove("pinchstart"),e.remove("pinch"),e.remove("pinchend"),e.remove("panstart"),e.remove("pan"),e.remove("panend"),e.destroy(),vc.delete(t))}var q7="2.0.1";function Ps(t,e,n){const i=n.zoom.drag,{dragStart:r,dragEnd:o}=St(t);if(i.drawTime!==e||!o)return;const{left:s,top:a,width:l,height:u}=Dm(t,n.zoom.mode,r,o),c=t.ctx;c.save(),c.beginPath(),c.fillStyle=i.backgroundColor||"rgba(225,225,225,0.3)",c.fillRect(s,a,l,u),i.borderWidth>0&&(c.lineWidth=i.borderWidth,c.strokeStyle=i.borderColor||"rgba(225,225,225)",c.strokeRect(s,a,l,u)),c.restore()}var t9={id:"zoom",version:q7,defaults:{pan:{enabled:!1,mode:"xy",threshold:10,modifierKey:null},zoom:{wheel:{enabled:!1,speed:.1,modifierKey:null},drag:{enabled:!1,drawTime:"beforeDatasetsDraw",modifierKey:null},pinch:{enabled:!1},mode:"xy"}},start:function(t,e,n){const i=St(t);i.options=n,Object.prototype.hasOwnProperty.call(n.zoom,"enabled")&&console.warn("The option `zoom.enabled` is no longer supported. Please use `zoom.wheel.enabled`, `zoom.drag.enabled`, or `zoom.pinch.enabled`."),(Object.prototype.hasOwnProperty.call(n.zoom,"overScaleMode")||Object.prototype.hasOwnProperty.call(n.pan,"overScaleMode"))&&console.warn("The option `overScaleMode` is deprecated. Please use `scaleMode` instead (and update `mode` as desired)."),io&&G7(t,n),t.pan=(r,o,s)=>Cm(t,r,o,s),t.zoom=(r,o)=>Ah(t,r,o),t.zoomRect=(r,o,s)=>Mm(t,r,o,s),t.zoomScale=(r,o,s)=>O7(t,r,o,s),t.resetZoom=r=>L7(t,r),t.getZoomLevel=()=>A7(t),t.getInitialScaleBounds=()=>Tm(t),t.isZoomedOrPanned=()=>z7(t)},beforeEvent(t){const e=St(t);if(e.panning||e.dragging)return!1},beforeUpdate:function(t,e,n){const i=St(t);i.options=n,W7(t,n)},beforeDatasetsDraw(t,e,n){Ps(t,"beforeDatasetsDraw",n)},afterDatasetsDraw(t,e,n){Ps(t,"afterDatasetsDraw",n)},beforeDraw(t,e,n){Ps(t,"beforeDraw",n)},afterDraw(t,e,n){Ps(t,"afterDraw",n)},stop:function(t){H7(t),io&&J7(t),_7(t)},panFunctions:yc,zoomFunctions:gc,zoomRectFunctions:mc},eu={line:{color:"#F66",width:1,dashPattern:[]},sync:{enabled:!0,group:1,suppressTooltips:!1},zoom:{enabled:!0,zoomboxBackgroundColor:"rgba(66,133,244,0.2)",zoomboxBorderColor:"#48F",zoomButtonText:"Reset Zoom",zoomButtonClass:"reset-zoom"},snap:{enabled:!1},callbacks:{beforeZoom:function(t,e){return!0},afterZoom:function(t,e){}}},e9={id:"crosshair",afterInit:function(t){if(t.config.options.scales.x){var e=t.config.options.scales.x.type;if(!(e!=="linear"&&e!=="time"&&e!=="category"&&e!=="logarithmic")){t.options.plugins.crosshair===void 0&&(t.options.plugins.crosshair=eu),t.crosshair={enabled:!1,suppressUpdate:!1,x:null,originalData:[],originalXRange:{},dragStarted:!1,dragStartX:null,dragEndX:null,suppressTooltips:!1,ignoreNextEvents:0,reset:(function(){this.resetZoom(t,!1,!1)}).bind(this)};var n=this.getOption(t,"sync","enabled");n&&(t.crosshair.syncEventHandler=(function(i){this.handleSyncEvent(t,i)}).bind(this),t.crosshair.resetZoomEventHandler=(function(i){var r=this.getOption(t,"sync","group");i.chartId!==t.id&&i.syncGroup===r&&this.resetZoom(t,!0)}).bind(this),window.addEventListener("sync-event",t.crosshair.syncEventHandler),window.addEventListener("reset-zoom-event",t.crosshair.resetZoomEventHandler)),t.panZoom=this.panZoom.bind(this,t)}}},afterDestroy:function(t){var e=this.getOption(t,"sync","enabled");e&&(window.removeEventListener("sync-event",t.crosshair.syncEventHandler),window.removeEventListener("reset-zoom-event",t.crosshair.resetZoomEventHandler))},panZoom:function(t,e){if(t.crosshair.originalData.length!==0){var n=t.crosshair.end-t.crosshair.start,i=t.crosshair.min,r=t.crosshair.max;e<0?(t.crosshair.start=Math.max(t.crosshair.start+e,i),t.crosshair.end=t.crosshair.start===i?i+n:t.crosshair.end+e):(t.crosshair.end=Math.min(t.crosshair.end+e,t.crosshair.max),t.crosshair.start=t.crosshair.end===r?r-n:t.crosshair.start+e),this.doZoom(t,t.crosshair.start,t.crosshair.end)}},getOption:function(t,e,n){return V(t.options.plugins.crosshair[e]?t.options.plugins.crosshair[e][n]:void 0,eu[e][n])},getXScale:function(t){return t.data.datasets.length?t.scales[t.getDatasetMeta(0).xAxisID]:null},getYScale:function(t){return t.scales[t.getDatasetMeta(0).yAxisID]},handleSyncEvent:function(t,e){var n=this.getOption(t,"sync","group");if(e.chartId!==t.id&&e.syncGroup===n){var i=this.getXScale(t);if(i){var r=e.original.native.buttons===void 0?e.original.native.which:e.original.native.buttons;e.original.type==="mouseup"&&(r=0);var o={type:e.original.type=="click"?"mousemove":e.original.type,chart:t,x:i.getPixelForValue(e.xValue),y:e.original.y,native:{buttons:r},stop:!0};t._eventHandler(o)}}},afterEvent:function(t,e){if(t.config.options.scales.x.length==0)return;let n=e.event;var i=t.config.options.scales.x.type;if(!(i!=="linear"&&i!=="time"&&i!=="category"&&xscaleType!=="logarithmic")){var r=this.getXScale(t);if(r){if(t.crosshair.ignoreNextEvents>0){t.crosshair.ignoreNextEvents-=1;return}var o=n.native.buttons===void 0?n.native.which:n.native.buttons;n.native.type==="mouseup"&&(o=0);var s=this.getOption(t,"sync","enabled"),a=this.getOption(t,"sync","group");if(!n.stop&&s){var e=new CustomEvent("sync-event");e.chartId=t.id,e.syncGroup=a,e.original=n,e.xValue=r.getValueForPixel(n.x),window.dispatchEvent(e)}var l=this.getOption(t,"sync","suppressTooltips");if(t.crosshair.suppressTooltips=n.stop&&l,t.crosshair.enabled=n.type!=="mouseout"&&n.x>r.getPixelForValue(r.min)&&n.x<r.getPixelForValue(r.max),!t.crosshair.enabled&&!t.crosshair.suppressUpdate)return n.x>r.getPixelForValue(r.max)&&(t.crosshair.suppressUpdate=!0,t.update("none")),t.crosshair.dragStarted=!1,!1;t.crosshair.suppressUpdate=!1;var u=this.getOption(t,"zoom","enabled");if(o===1&&!t.crosshair.dragStarted&&u&&(t.crosshair.dragStartX=n.x,t.crosshair.dragStarted=!0),t.crosshair.dragStarted&&o===0){t.crosshair.dragStarted=!1;var c=r.getValueForPixel(t.crosshair.dragStartX),h=r.getValueForPixel(t.crosshair.x);Math.abs(t.crosshair.dragStartX-t.crosshair.x)>1&&this.doZoom(t,c,h),t.update("none")}t.crosshair.x=n.x,t.draw()}}},afterDraw:function(t){if(t.crosshair.enabled)return t.crosshair.dragStarted?this.drawZoombox(t):(this.drawTraceLine(t),this.interpolateValues(t),this.drawTracePoints(t)),!0},beforeTooltipDraw:function(t){return!t.crosshair.dragStarted&&!t.crosshair.suppressTooltips},resetZoom:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(n){if(t.crosshair.originalData.length>0)for(var i=0;i<t.data.datasets.length;i++){var r=t.data.datasets[i];r.data=t.crosshair.originalData.shift(0)}t.crosshair.originalXRange.min?(t.options.scales.x.min=t.crosshair.originalXRange.min,t.crosshair.originalXRange.min=null):delete t.options.scales.x.min,t.crosshair.originalXRange.max?(t.options.scales.x.max=t.crosshair.originalXRange.max,t.crosshair.originalXRange.max=null):delete t.options.scales.x.max}t.crosshair.button&&t.crosshair.button.parentNode&&(t.crosshair.button.parentNode.removeChild(t.crosshair.button),t.crosshair.button=!1);var o=this.getOption(t,"sync","enabled");if(!e&&n&&o){var s=this.getOption(t,"sync","group"),a=new CustomEvent("reset-zoom-event");a.chartId=t.id,a.syncGroup=s,window.dispatchEvent(a)}n&&t.update("none")},doZoom:function(t,e,n){if(e>n){var i=e;e=n,n=i}var r=V(t.options.plugins.crosshair.callbacks?t.options.plugins.crosshair.callbacks.beforeZoom:void 0,eu.callbacks.beforeZoom);if(!r(e,n))return!1;if(t.crosshair.dragStarted=!1,t.options.scales.x.min&&t.crosshair.originalData.length===0&&(t.crosshair.originalXRange.min=t.options.scales.x.min),t.options.scales.x.max&&t.crosshair.originalData.length===0&&(t.crosshair.originalXRange.max=t.options.scales.x.max),!t.crosshair.button){var o=document.createElement("button"),s=this.getOption(t,"zoom","zoomButtonText"),a=this.getOption(t,"zoom","zoomButtonClass"),l=document.createTextNode(s);o.appendChild(l),o.className=a,o.addEventListener("click",(function(){this.resetZoom(t)}).bind(this)),t.canvas.parentNode.appendChild(o),t.crosshair.button=o}t.options.scales.x.min=e,t.options.scales.x.max=n;var u=t.crosshair.originalData.length===0,c=t.config.options.scales.x.type!=="category";if(c)for(var h=0;h<t.data.datasets.length;h++){var d=[],f=0,y=!1,p=!1;u&&(t.crosshair.originalData[h]=t.data.datasets[h].data);for(var w=t.crosshair.originalData[h],m=0;m<w.length;m++){var v=w[m],x=v.x!==void 0?v.x:NaN;x>=e&&!y&&f>0&&(d.push(w[f-1]),y=!0),x>=e&&x<=n&&d.push(v),x>n&&!p&&f<w.length&&(d.push(v),p=!0),f+=1}t.data.datasets[h].data=d}if(t.crosshair.start=e,t.crosshair.end=n,u){var b=this.getXScale(t);t.crosshair.min=b.min,t.crosshair.max=b.max}t.crosshair.ignoreNextEvents=2,t.update("none");var S=this.getOption(t,"callbacks","afterZoom");S(e,n)},drawZoombox:function(t){var e=this.getYScale(t),n=this.getOption(t,"zoom","zoomboxBorderColor"),i=this.getOption(t,"zoom","zoomboxBackgroundColor");t.ctx.beginPath(),t.ctx.rect(t.crosshair.dragStartX,e.getPixelForValue(e.max),t.crosshair.x-t.crosshair.dragStartX,e.getPixelForValue(e.min)-e.getPixelForValue(e.max)),t.ctx.lineWidth=1,t.ctx.strokeStyle=n,t.ctx.fillStyle=i,t.ctx.fill(),t.ctx.fillStyle="",t.ctx.stroke(),t.ctx.closePath()},drawTraceLine:function(t){var e=this.getYScale(t),n=this.getOption(t,"line","width"),i=this.getOption(t,"line","color"),r=this.getOption(t,"line","dashPattern"),o=this.getOption(t,"snap","enabled"),s=t.crosshair.x;o&&t._active.length&&(s=t._active[0].element.x),t.ctx.beginPath(),t.ctx.setLineDash(r),t.ctx.moveTo(s,e.getPixelForValue(e.max)),t.ctx.lineWidth=n,t.ctx.strokeStyle=i,t.ctx.lineTo(s,e.getPixelForValue(e.min)),t.ctx.stroke(),t.ctx.setLineDash([])},drawTracePoints:function(t){for(var e=0;e<t.data.datasets.length;e++){var n=t.data.datasets[e],i=t.getDatasetMeta(e),r=t.scales[i.yAxisID];i.hidden||!n.interpolate||(t.ctx.beginPath(),t.ctx.arc(t.crosshair.x,r.getPixelForValue(n.interpolatedValue),3,0,2*Math.PI,!1),t.ctx.fillStyle="white",t.ctx.lineWidth=2,t.ctx.strokeStyle=n.borderColor,t.ctx.fill(),t.ctx.stroke())}},interpolateValues:function(t){for(var e=0;e<t.data.datasets.length;e++){var n=t.data.datasets[e],i=t.getDatasetMeta(e),r=t.scales[i.xAxisID],o=r.getValueForPixel(t.crosshair.x);if(!(i.hidden||!n.interpolate)){var s=n.data,a=s.findIndex(function(h){return h.x>=o}),l=s[a-1],u=s[a];if(t.data.datasets[e].steppedLine&&l)n.interpolatedValue=l.y;else if(l&&u){var c=(u.y-l.y)/(u.x-l.x);n.interpolatedValue=l.y+(o-l.x)*c}else n.interpolatedValue=NaN}}}};class n9{constructor(){this.chartHeight=null,this.chartBackgroundColor=null,this.displayChartTitle=!0,this.chartTitleText="Elevation Profile",this.chartTitleColor="#000",this.chartTitlePosition="bottom",this.unitSystem="imperial",this.fontSize=12,this.displayXAxisDistanceLabels=!0,this.displayYAxisElevationLabels=!0,this.displayAxisLabelUnits=!0,this.axisLabelColor="#0009",this.profileLineWidth=2,this.profileLineColor="#1d2323",this.belowProfileLineColor="#0000000a",this.displayTooltip=!0,this.tooltipTextColor="#fff",this.tooltipBackgroundColor="#000",this.displayTooltipDistance=!0,this.displayTooltipElevation=!0,this.displayTooltipDPlus=!1,this.displayTooltipGrade=!0,this.displayDistanceVerticalGridLines=!1,this.displayElevationHorizontalGridLines=!1,this.distanceVerticalGridLineColor="#0001",this.elevationHorizontalGridLineColor="#0001",this.displayProfileLineCrosshair=!0,this.crosshairLineColor="#b00000",this.chartPaddingTop=5,this.chartPaddingBottom=5,this.chartPaddingLeft=10,this.chartPaddingRight=10,this.onChangeView=null,this.onClick=null,this.onMove=null}}class zh{constructor(e,n={}){var i,r,o;this.elevatedPositions=[],this.elevatedPositionsAdjustedUnit=[],this.cumulatedDistance=[],this.cumulatedDistanceAdjustedUnit=[],this.cumulatedDPlus=[],this.grade=[];const s=typeof e=="string"?document.getElementById(e):e;if(!s)throw new Error("The container does not exist!");this.canvas=document.createElement("canvas"),s.appendChild(this.canvas),we.register(...m7),we.register(t9),we.register(e9),this.options={...new n9,...n},s.style.height=this.options.chartHeight??s.style.height,s.style.backgroundColor=this.options.chartBackgroundColor??s.style.backgroundColor;const a=this.options.unitSystem==="imperial"?"mi":"km",l=this.options.unitSystem==="imperial"?"ft":"m";if(we.defaults.font.size=this.options.fontSize,this.chart=new we(this.canvas,{type:"line",data:{labels:[],datasets:[{label:"Elevation",data:[],pointRadius:0,fill:!!this.options.belowProfileLineColor,borderColor:this.options.profileLineColor??"#0000",backgroundColor:this.options.belowProfileLineColor??"#0000",tension:.1,spanGaps:!0,borderWidth:this.options.profileLineColor?this.options.profileLineWidth:0}]},options:{layout:{padding:{left:this.options.chartPaddingLeft,right:this.options.chartPaddingRight,bottom:this.options.chartPaddingBottom,top:this.options.chartPaddingTop}},onClick:(u,c)=>{if(typeof this.options.onClick=="function")try{const h=c[0].index;this.options.onClick.apply(this,[{position:this.elevatedPositionsAdjustedUnit[h],distance:this.cumulatedDistanceAdjustedUnit[h],dPlus:this.cumulatedDPlus[h],gradePercent:this.grade[h]}])}catch{}},onHover:(u,c)=>{if(typeof this.options.onMove=="function")try{const h=c[0].index;this.options.onMove.apply(this,[{position:this.elevatedPositionsAdjustedUnit[h],distance:this.cumulatedDistanceAdjustedUnit[h],dPlus:this.cumulatedDPlus[h],gradePercent:this.grade[h]}])}catch{}},animation:!1,maintainAspectRatio:!1,scales:{x:{min:0,max:0,type:"linear",grid:{display:this.options.displayDistanceVerticalGridLines,color:this.options.distanceVerticalGridLineColor,drawTicks:!1},ticks:{align:"inner",display:this.options.displayXAxisDistanceLabels,color:this.options.axisLabelColor,callback:u=>{const c=~~(u*100)/100;return this.options.displayAxisLabelUnits?`${c} ${a}`:c}}},y:{min:0,max:0,type:"linear",ticks:{mirror:!0,align:"end",display:this.options.displayYAxisElevationLabels,color:this.options.axisLabelColor,callback:u=>{const c=~~(u*100)/100;return this.options.displayAxisLabelUnits?`${c} ${l}`:c}},grid:{display:this.options.displayElevationHorizontalGridLines,color:this.options.elevationHorizontalGridLineColor,drawTicks:!1}}},interaction:{intersect:!1,mode:"index"},plugins:{zoom:{zoom:{wheel:{enabled:!0},pinch:{enabled:!0},mode:"x"},pan:{enabled:!0,mode:"x"},limits:{x:{min:"original",max:"original"}}},title:{display:this.options.displayChartTitle,color:((i=this.options)==null?void 0:i.chartTitleColor)||this.options.axisLabelColor,text:((r=this.options)==null?void 0:r.chartTitleText)||"",position:(o=this.options)==null?void 0:o.chartTitlePosition},legend:{display:!1},tooltip:{enabled:this.options.displayTooltip,yAlign:"center",cornerRadius:3,displayColors:!1,backgroundColor:this.options.tooltipBackgroundColor,bodyColor:this.options.tooltipTextColor,callbacks:{title:()=>"",label:u=>{var c,h,d,f;const y=[];return this.options.displayTooltipDistance&&y.push(`Distance: ${(c=this.cumulatedDistanceAdjustedUnit[u.dataIndex])==null?void 0:c.toFixed(4)} ${a}`),this.options.displayTooltipElevation&&y.push(`Elevation: ${(h=this.elevatedPositionsAdjustedUnit[u.dataIndex][2])==null?void 0:h.toFixed(2)} ${l}`),this.options.displayTooltipDPlus&&y.push(`D+: ${(d=this.cumulatedDPlus[u.dataIndex])==null?void 0:d.toFixed(0)} ${l}`),this.options.displayTooltipGrade&&y.push(`Grade: ${(f=this.grade[u.dataIndex])==null?void 0:f.toFixed(1)}%`),y}}},crosshair:{zoom:{enabled:!1},line:{color:this.options.displayProfileLineCrosshair?this.options.crosshairLineColor:"#0000",width:1}}}},plugins:[{id:"customZoomEvent",afterDataLimits:()=>{if(typeof this.options.onChangeView=="function")try{this.options.onChangeView.apply(this,[this.createWindowExtractLineString()])}catch{}}}]}),this.options.displayTooltip){let u=!1;this.chart.canvas.addEventListener("mousedown",()=>{u=!0}),this.chart.canvas.addEventListener("mousemove",()=>{u&&this.chart.options.plugins&&this.chart.options.plugins.tooltip&&(this.chart.options.plugins.tooltip.enabled=!1,this.chart.update())}),window.addEventListener("mouseup",()=>{this.chart.options.plugins&&this.chart.options.plugins.tooltip&&(this.chart.options.plugins.tooltip.enabled=!0,this.chart.update(),u=!1)})}}createWindowExtractLineString(){const e=this.chart.scales.x.min,n=this.chart.scales.x.max,i=this.cumulatedDistanceAdjustedUnit,r=i.length;let o=0,s=r-1;for(let a=0;a<r;a+=1)if(i[a]>=e){o=a;break}for(let a=r-1;a>=o;a-=1)if(i[a]<=n){s=a;break}return this.createExtractLineString(o,s)}createExtractLineString(e,n){const i=this.elevatedPositions.slice(e,n);return{type:Za,coordinates:i}}async setData(e){typeof e=="string"&&(e=JSON.parse(e));const n=Array.isArray(e)?e:v9(e);this.elevatedPositions=n,this.cumulatedDistance=_9(this.elevatedPositions),this.cumulatedDPlus=[],this.grade=[];let i=0;for(let a=0;a<this.elevatedPositions.length;a+=1){const l=this.elevatedPositions[a][2];if(a>1){const u=this.elevatedPositions[a-1][2],c=l-u,h=this.cumulatedDistance[a]-this.cumulatedDistance[a-1];i+=Math.max(0,c),this.cumulatedDPlus.push(i),this.grade.push(c/h*1e3/10)}}this.grade.push(0),this.cumulatedDPlus.push(i),this.options.unitSystem==="imperial"?(this.cumulatedDistanceAdjustedUnit=this.cumulatedDistance.map(a=>a*ov),this.elevatedPositionsAdjustedUnit=this.elevatedPositions.map(a=>[a[0],a[1],a[2]*gf]),this.cumulatedDPlus=this.cumulatedDPlus.map(a=>a*gf)):(this.cumulatedDistanceAdjustedUnit=this.cumulatedDistance.map(a=>a/1e3),this.elevatedPositionsAdjustedUnit=this.elevatedPositions);let r=1/0,o=-1/0;for(let a=0;a<this.elevatedPositionsAdjustedUnit.length;a+=1)this.elevatedPositionsAdjustedUnit[a][2]<r&&(r=this.elevatedPositionsAdjustedUnit[a][2]),this.elevatedPositionsAdjustedUnit[a][2]>o&&(o=this.elevatedPositionsAdjustedUnit[a][2]);const s=(o-r)*.1;this.chart.data.labels=this.cumulatedDistanceAdjustedUnit,this.chart.data.datasets[0].data=this.elevatedPositionsAdjustedUnit.map(a=>a[2]),this.chart.options.scales&&this.chart.options.scales.x&&this.chart.options.scales.y&&(this.chart.options.scales.x.min=this.cumulatedDistanceAdjustedUnit[0],this.chart.options.scales.x.max=this.cumulatedDistanceAdjustedUnit[this.cumulatedDistanceAdjustedUnit.length-1],this.chart.options.scales.y.min=r-s,this.chart.options.scales.y.max=o+s),this.chart.update()}}function $m(t){const e=document.createElement("div");e.id=Zi,e.className=`${Ga} ${wg}`,mi(e),new zh(e,t).setData(Ji);const n=document.createElement("span");n.innerText=Gy,n.className=`${gh}`,e.appendChild(n);const i=document.createElement("button");return i.innerText="x",i.setAttribute("type","button"),i.setAttribute("aria-label","Close profile chart"),i.alt="Close profile chart",i.className="maplibregl-popup-close-button",mi(i),e.appendChild(i),i.addEventListener("click",function(r){$a(!jt);const o=document.getElementById(Zi);o&&!jt?o.remove():Rh(t)}),e}class il{createDiv(){return this.toggleDiv=document.createElement("div"),this.toggleDiv}onAdd(e){return this.createDiv()}onRemove(){this.toggleDiv&&this.toggleDiv.remove(),this.toggleDiv=void 0}getDefaultPosition(){return Gu}}class i9 extends il{createDiv(){const e="trail-alert-checkbox",n=document.createElement("div");n.className=`${Ga} ${ph} ${xg}`;const i=document.createElement("label");i.className="switch";const r=document.createElement("span");r.setAttribute("for",e),r.innerText="Show Alerts",r.className=`${_g} ${gh}`;const o=document.createElement("input");o.type="checkbox",o.name=e,o.id=o.name,o.setAttribute("checked","checked"),o.style.display="none";const s=document.createElement("span");return s.className="slider round",i.appendChild(o),i.appendChild(s),n.appendChild(i),n.appendChild(r),mi(n),o.addEventListener("click",function(a){a9(!La),p9(),xe.setLayoutProperty(hg,"visibility",La?"visible":"none")}),this.toggleDiv=n,this.toggleDiv}}class r9 extends il{constructor(e){super(),this.options=e}createDiv(){const e=document.createElement("div");e.className=`${Ga} ${ph}`;const n=document.createElement("button");n.setAttribute("aria-label","Show/hide elevation profile chart"),n.alt="Show/hide elevation profile chart",n.appendChild(Am(vg)),e.appendChild(n),mi(e),n.addEventListener("click",function(o){$a(!jt);const s=document.getElementById(Zi);s&&(s.style.visibility=jt?"visible":"hidden",Oi(!jt,Vs),Oi(!jt,Ws))});const i=document.createElement("div");i.id=Zi,i.className=`${bg}`,mi(i),new zh(i,this.options).setData(Ji);const r=document.createElement("button");return r.innerText="x",r.setAttribute("type","button"),r.setAttribute("aria-label","Close profile chart"),r.alt="Close profile chart",r.className="maplibregl-popup-close-button",mi(r),i.appendChild(r),r.addEventListener("click",function(o){$a(!jt);const s=document.getElementById(Zi);s&&(s.style.visibility=jt?"visible":"hidden",Oi(!jt,Vs),Oi(!jt,Ws))}),Ao==null||Ao.appendChild(i),jt&&(Oi(!jt,Vs),Oi(!jt,Ws)),this.toggleDiv=e,this.toggleDiv}}class o9 extends il{constructor(e){super(),this.options=e}createDiv(e){const n=document.createElement("div");n.className=`${Ga} ${ph}`;const i=document.createElement("button");return i.setAttribute("aria-label","Show/hide elevation profile chart"),i.alt="Show/hide elevation profile chart",i.appendChild(Am(vg)),n.appendChild(i),mi(n),i.addEventListener("click",function(r){$a(!jt);const o=document.getElementById(Zi);o&&!jt?o.remove():Rh(e)}),this.toggleDiv=n,this.toggleDiv}}class s9 extends il{constructor(e){super(),this.options=e}createDiv(){return this.chartDiv=$m(),new zh(this.chartDiv).setData(Ji),this.chartDiv}getDefaultPosition(){return dg}}let La=!0;function a9(t){La=t??!1}let jt=!0;function $a(t){jt=t??!1}function Oi(t,e){if(e!=null&&e.length){const n=document.getElementsByClassName(e);if(n!=null&&n.length)for(let i=0;i<n.length;i++)n[i].setAttribute("style",t?"display: inherit":"display: none")}}function l9(t){for(let e in t)if(t!=null&&t.hasOwnProperty(e)){let n=t[e];typeof n=="string"&&(n!=null&&n.startsWith('{"')||n!=null&&n.startsWith('[{"')||n==="[{}]")&&(t[e]=JSON.parse(n))}return t}function Up(t){try{JSON.parse(t)}catch{return!1}return!0}function oo(t,e){return t!=null&&t.includes(So)?t.split(So).reduce((n,i)=>n[i],e):e[t]}function u9(t,e){var n,i,r,o,s,a,l,u,c,h,d,f;let y=!1,p;return e!==Wn&&(n=t==null?void 0:t.properties[e])!=null&&n.length&&typeof t.properties[e]=="string"?(p=JSON.parse(t.properties[e]),y=!0):(i=t==null?void 0:t.properties)!=null&&i.length&&typeof t.properties=="string"?(p=JSON.parse(t.properties),y=!0):p=(t==null?void 0:t.properties)??t,y||(p=l9(p)),(o=(r=t==null?void 0:t.properties)==null?void 0:r.name)!=null&&o.length&&!((s=p==null?void 0:p.name)!=null&&s.length)?p.name=t.properties.name:(a=t==null?void 0:t.name)!=null&&a.length&&!((l=p==null?void 0:p.name)!=null&&l.length)&&(p.name=t.name),(c=(u=t==null?void 0:t.properties)==null?void 0:u.description)!=null&&c.length&&!((h=p==null?void 0:p.description)!=null&&h.length)?p.description=t.properties.description:(d=t==null?void 0:t.description)!=null&&d.length&&!((f=p==null?void 0:p.description)!=null&&f.length)&&(p.description=t.description),p}function Yp(t){return(t==null?void 0:t.type)===wa?t:{type:wa,features:[t]}}async function c9(t,e,n){let i;return typeof t=="string"&&t!=null&&t.startsWith("http")?await fetch(t).then(r=>r.json()).then(r=>{i=Yp(r),e.fitBounds(i,n)}):(i=Yp(t),e.fitBounds(i,n)),i}function Xp(t){const e=new Date(t);return`${nv[e.getDay()]}, ${iv[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`}function h9(t){return t.endsWith(".")&&(t=t.slice(0,-1)),d9(t)}function d9(t){return t.charAt(0).toUpperCase()+t.slice(1)}function f9(t,e){var n,i,r,o;if(e)try{const s=JSON.parse(e),a=((n=s==null?void 0:s._geometry)==null?void 0:n.coordinates)??((i=s==null?void 0:s.geometry)==null?void 0:i.coordinates);t&&(t==null||t.fire("click",{lngLat:a,point:t.project(a),originalEvent:{}}))}catch{try{const s=((r=e==null?void 0:e._geometry)==null?void 0:r.coordinates)??((o=e==null?void 0:e.geometry)==null?void 0:o.coordinates);t&&(t==null||t.fire("click",{lngLat:s,point:t.project(s),originalEvent:{}}))}catch(s){console.log("ERROR: Click feature failed. ",s)}}}function p9(){var t;const e=document.getElementsByClassName("maplibregl-popup");e!=null&&e.length&&((t=e[0])==null||t.remove())}function g9(t){const e=document.createElement("style");e.textContent=t,document.head.append(e)}function Am(t,e="0 0 1024 1024",n="80%",i="80%"){const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("viewBox",`${e}`),r.setAttribute("vertical-align","middle"),r.setAttribute("fill","#333"),r.setAttribute("stroke","currentColor"),r.setAttribute("stroke-width","2"),r.setAttribute("stroke-linecap","round"),r.setAttribute("stroke-linejoin","round"),r.setAttribute("class","feather feather-home"),r.setAttribute("height",`${n}`),r.setAttribute("width",`${i}`);const o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("d",`${t}`),r.appendChild(o),r}function m9(){var t,e,n,i,r;const o=document.getElementsByClassName(lv),s=document.getElementsByClassName(uv),a=document.getElementsByClassName(cv),l=document.getElementsByClassName(Vs),u=document.getElementsByClassName(Ws);o!=null&&o.length&&((t=o[(o==null?void 0:o.length)-1])==null||t.setAttribute("id",Hy)),s!=null&&s.length&&((e=s[(s==null?void 0:s.length)-1])==null||e.setAttribute("id",Uy)),a!=null&&a.length&&((n=a[(a==null?void 0:a.length)-1])==null||n.setAttribute("id",Yy)),l!=null&&l.length&&((i=l[(l==null?void 0:l.length)-1])==null||i.setAttribute("id",Xy)),u!=null&&u.length&&((r=u[(u==null?void 0:u.length)-1])==null||r.setAttribute("id",cg)),Ao==null||Ao.setAttribute("id",Wy)}function mi(t){t.addEventListener("contextmenu",function(e){e.stopPropagation(),e.preventDefault()}),t.addEventListener("dblclick",function(e){e.stopPropagation(),e.preventDefault()}),t.addEventListener("mousedown",function(e){e.stopPropagation(),e.preventDefault()})}function y9(t){const e=[];function n(o){(o.type===Za||o.type===fh)&&e.push(o)}function i(o){o.geometry&&n(o.geometry)}function r(o){for(const s of o.features)s.type===pf?i(s):s.type===wa&&r(s)}return t.type===pf?i(t):t.type===wa?r(t):n(t),e}function v9(t){const e=y9(t),n=[];for(let i=0;i<e.length;i+=1){const r=e[i];r.type===Za?n.push(r.coordinates):r.type===fh&&n.push(r.coordinates.flat())}return n.flat()}function x9(t,e){const n=Math.PI/180,i=t[1]*n,r=e[1]*n,o=Math.sin(i)*Math.sin(r)+Math.cos(i)*Math.cos(r)*Math.cos((e[0]-t[0])*n);return rv*Math.acos(Math.min(o,1))}function _9(t){const e=Array(t.length);e[0]=0;const n=e.length;for(let i=1;i<n;i++)e[i]=x9(t[i-1],t[i])+e[i-1];return e}function Rh(t){const e=document.getElementById(cg);e?e==null||e.insertBefore($m(t),null):xe.addControl(new s9(t))}const nu=(t,e,n,i,r,o)=>{const s=u9(t,n),a=document.createElement("div");a.style.maxHeight="225px",a.style.height="100%",a.style.width="100%",a.style.overflow="auto",a.style.color="black",a.style.colorScheme="auto",a.style.textAlign="left";const l=b9(s,void 0,i,r),u=l[0];let c=l[1];a.appendChild(u);const h=w9(s,n===fg,n===Wn,o),d=h[0];let f=h[1],y=!1;const p=()=>{if(y){if(c){const m=document.getElementById(Zu);m&&(m.style.height=gg),d.style.maxHeight=mg}d.style.paddingBottom="5px",d.style.height=yg,d.style.overflow="hidden",d.style.background=mf}else{if(c){const m=document.getElementById(Zu);m&&(m.style.height="50px"),d.style.maxHeight="100px"}d.style.paddingBottom="0px",d.style.height="100%",d.style.overflow="auto",d.style.background="transparent"}y=!y};f?(d.style.marginTop="10px",d.style.background=mf):d.style.height="100%",a.appendChild(d);const w=k9(e,s,f,p,ev);return a.appendChild(w),a};function b9(t,e=tv,n=Rr,i="",r="url"){var o;const s=document.createElement("div"),a=oo(e,t),l=oo(n,t),u=oo(i,t)??"";let c=!1,h=0;const d=()=>{const y=document.getElementById("prevArrow"),p=document.getElementById("nextArrow");if(h>0){const w=h-1,m=document.getElementById(`image${h}`),v=document.getElementById(`image${w}`);m&&(m.style.display="none"),v&&(v.style.display="block"),p&&(p.style.display="block"),y&&w===0&&(y.style.display="none"),h=w}},f=()=>{const y=document.getElementById("prevArrow"),p=document.getElementById("nextArrow");if(h<(a==null?void 0:a.length)-1){const w=h+1,m=document.getElementById(`image${h}`),v=document.getElementById(`image${w}`);m&&(m.style.display="none"),v&&(v.style.display="block"),y&&(y.style.display="block"),p&&w>=a.length-1&&(p.style.display="none"),h=w}};if(a!=null&&a.length){c=!0;const y=document.createElement("div");if(y.setAttribute("id",Zu),y.style.height=gg,y.style.maxHeight="100%",y.style.maxWidth="100%",y.style.display="flex",y.style.flexDirection="row",y.style.flexWrap="nowrap",y.style.justifyContent="center",y.style.alignItems="center",a==null||a.forEach((p,w)=>{const m=document.createElement("img");m.addEventListener("click",()=>{window.open(p==null?void 0:p.url,"_blank")}),m.id=`image${w}`,m.src=(p==null?void 0:p.url)??"",m.alt=(p==null?void 0:p.altText)??"",m.title=(p==null?void 0:p.caption)??"",m.style.maxHeight="100%",m.style.maxWidth="100%",m.style.cursor="zoom-in",m.style.display=w===0?"block":"none",y.appendChild(m)}),(a==null?void 0:a.length)>1){const p=document.createElement("a"),w=document.createElement("a");p.addEventListener("click",d),w.addEventListener("click",f),p.id="prevArrow",p.innerText="<",p.style.display="none",p.style.cursor="pointer",p.style.position="absolute",p.style.left="1px",p.style.padding="5px",p.style.color="white",p.style.backgroundColor="goldenrod",p.style.fontWeight="bold",p.style.fontSize="18px",p.style.borderRadius="5px",w.id="nextArrow",w.innerText=">",w.style.cursor="pointer",w.style.position="absolute",w.style.right="1px",w.style.padding="5px",w.style.color="white",w.style.backgroundColor="goldenrod",w.style.fontWeight="bold",w.style.fontSize="18px",w.style.borderRadius="5px",y.appendChild(p),y.appendChild(w)}s.appendChild(y)}if(l!=null&&l.length){const y=Object.prototype.toString.call(l)==="[object Array]",p=document.createElement("strong");p.textContent="",p.style.fontSize="medium",u!=null&&u.length&&(p.textContent=`${u==null?void 0:u.toUpperCase()} - `),p.textContent+=y?l.join(", "):l,(o=t[r])!=null&&o.length&&(p.textContent+="  »",p.style.textDecoration="underline",p.style.color="black",p.style.cursor="pointer",p.addEventListener("click",()=>{window.open(t[r])})),s.appendChild(p)}return[s,c]}function w9(t,e=!1,n=!1,i=pg){var r,o,s,a,l,u,c,h,d,f,y,p,w,m,v,x,b,S,E,C,M,O,P,z,F,U,tt,B,H,et;const D=document.createElement("article"),I=oo(i,t);D.style.paddingBottom="5px",D.style.height=yg,D.style.maxHeight=mg,D.style.wordBreak="break-word",D.style.overflow="hidden",D.style.textOverflow="clip";let R=!1;if(e){const Y=document.createElement("p"),X=document.createElement("p"),Pt=document.createElement("p"),st=document.createElement("p"),$t=document.createElement("p"),bt=document.createElement("p"),rt=document.createElement("p"),Kt=document.createElement("p"),it=document.createElement("p"),at=document.createElement("p"),ge=document.createElement("p"),yn=document.createElement("p"),vn=document.createElement("p"),xn=document.createElement("p"),_n=document.createElement("p"),re=document.createElement("p");(r=t==null?void 0:t.routeType)!=null&&r.length&&(Y.innerHTML=`<b>Type:</b> ${t.routeType+((o=t==null?void 0:t.surface)!=null&&o.length?" - "+t.surface:"")}`,D.appendChild(Y),R=!0),(s=t==null?void 0:t.difficulty)!=null&&s.length&&(X.innerHTML=`<b>Difficulty:</b> ${t.difficulty}`,D.appendChild(X),R=!0),(a=t==null?void 0:t.lengthInMiles)!=null&&a.length&&(Pt.innerHTML=`<b>Length:</b> ${t.lengthInMiles} miles`,D.appendChild(Pt),R=!0),(l=t==null?void 0:t.hikeTime)!=null&&l.length&&(st.innerHTML=`<b>Hike Time:</b> ${t.hikeTime}`,D.appendChild(st),R=!0),(u=t==null?void 0:t.elevationGain)!=null&&u.length&&($t.innerHTML=`<b>Elevation Gain:</b> ${t.elevationGain}`,D.appendChild($t),R=!0),(c=t==null?void 0:t.usage)!=null&&c.length&&(bt.innerHTML=`<b>Usage:</b> ${t.usage}`,D.appendChild(bt),R=!0),(h=t==null?void 0:t.accessibility)!=null&&h.length&&(rt.innerHTML=`<b>Accessibility:</b> ${t.accessibility}`,D.appendChild(rt),R=!0),(d=t==null?void 0:t.kid)!=null&&d.length&&(Kt.innerHTML=`<b>Kids:</b> ${t.kid}`,D.appendChild(Kt),R=!0),(f=t==null?void 0:t.dogs)!=null&&f.length&&(it.innerHTML=`<b>Dogs:</b> ${t.dogs}`,D.appendChild(it),R=!0),(y=t==null?void 0:t.activities)!=null&&y.length&&(at.innerHTML=`<b>Activities:</b> ${(w=(p=t.activities)==null?void 0:p.sort((oe,bn)=>oe>bn?1:-1))==null?void 0:w.join(", ")}`,D.appendChild(at),R=!0),(m=t==null?void 0:t.features)!=null&&m.length&&(ge.innerHTML=`<b>Features:</b> ${(x=(v=t.features)==null?void 0:v.sort((oe,bn)=>oe>bn?1:-1))==null?void 0:x.join(", ")}`,D.appendChild(ge),R=!0),(b=t==null?void 0:t.obstacles)!=null&&b.length&&(yn.innerHTML=`<b>Obstacles:</b> ${(E=(S=t.obstacles)==null?void 0:S.sort((oe,bn)=>oe>bn?1:-1))==null?void 0:E.join(", ")}`,D.appendChild(yn),R=!0),vn.innerHTML=`<b>Reservation Required:</b> ${(t==null?void 0:t.reservationRequired)===!0?"Yes":"No"}`,D.appendChild(vn),R=!0,(t==null?void 0:t.reservationFee)>0&&(xn.innerHTML=`<b>Reservation Fee:</b> $${t.reservationFee}`,D.appendChild(xn),R=!0),(C=t==null?void 0:t.reservationUrl)!=null&&C.length&&(_n.innerHTML=`<b>Reservation URL:</b> <a target="_blank" href="${t.reservationUrl}">Click here</a>`,D.appendChild(_n),R=!0),I!=null&&I.length&&(re.innerHTML=`<b>Description:</b> ${I}`,D.appendChild(re),R=!0)}else if(n){const Y=document.createElement("p"),X=document.createElement("p"),Pt=document.createElement("p"),st=document.createElement("p"),$t=document.createElement("p"),bt=document.createElement("p"),rt=document.createElement("p"),Kt=oo(`${Wn+So+Jy}`,t);if((M=t[df])!=null&&M.length&&(Y.innerHTML=`<b>Status:</b> ${(O=t[df])==null?void 0:O.toUpperCase()}`,D.appendChild(Y),R=!0),(Kt==null?void 0:Kt.length)>=1&&(X.innerHTML=`<b>Impacted Trails:</b> ${Kt.join(", ")}`,D.appendChild(X),R=!0),(z=(P=t[Wn])==null?void 0:P.eventType)!=null&&z.length&&(Pt.innerHTML=`<b>Type:</b> ${t[Wn].eventType}`,D.appendChild(Pt),R=!0),((F=t==null?void 0:t.type_of_incidents)==null?void 0:F.length)>=1){const it=(tt=(U=t.type_of_incidents)==null?void 0:U.filter(at=>{var ge;return(ge=at==null?void 0:at.incident_type)==null?void 0:ge.length}))==null?void 0:tt.map(at=>h9(at==null?void 0:at.incident_type));it!=null&&it.length&&(bt.innerHTML=`<b>Incident Types:</b> ${(B=it==null?void 0:it.sort((at,ge)=>at>ge?1:-1))==null?void 0:B.join(", ")}`),D.appendChild(bt),R=!0}(H=t==null?void 0:t.start_date)!=null&&H.length&&(st.innerHTML=`<b>Start Date:</b> ${Xp(t.start_date)}`,D.appendChild(st),R=!0),(et=t==null?void 0:t.end_date)!=null&&et.length&&($t.innerHTML=`<b>End Date:</b> ${Xp(t.end_date)}`,D.appendChild($t),R=!0),I!=null&&I.length&&(rt.innerHTML=`<b>Description:</b> ${I}`,D.appendChild(rt),R=!0)}else if(I!=null&&I.length){const Y=document.createElement("p");Y.textContent=I,Y.style.marginBottom="5px",D.appendChild(Y),R=!0}return[D,R]}function k9(t,e,n,i,r=""){var o,s,a;const l=document.createElement("div"),u=document.createElement("p"),c=document.createElement("div");if(l.style.display="flex",l.style.flexDirection="row",l.style.flexWrap="nowrap",u.textContent=Bl,u.style.textDecoration="underline",u.style.color="goldenrod",u.style.cursor="pointer",u.style.marginTop="7px",u.style.marginBottom="10px",u.style.display="flex",u.style.alignItems="flex-start",u.style.width="auto",u.addEventListener("click",()=>{u.textContent=u.textContent===Bl?Zy:Bl,i()}),c.style.display="flex",c.style.flexDirection="row",c.style.justifyContent="flex-end",c.style.alignItems="flex-end",c.style.flexWrap="wrap",c.style.marginLeft="auto",c.style.maxWidth="79%",c.style.maxHeight="40px",c.style.overflow="hidden",n&&l.appendChild(u),(o=e[r])!=null&&o.length&&t){const h=((s=e[r])==null?void 0:s.sort((p,w)=>(p==null?void 0:p.name)>(w==null?void 0:w.name)?1:-1))??e[r];let d=0;const f=document.createElement("div");let y="";h.forEach((p,w)=>{var m,v,x,b;if((m=p==null?void 0:p.icon)!=null&&m.length||(v=p==null?void 0:p.name)!=null&&v.length){const S=t.style.getImage((p==null?void 0:p.icon)||"things-to-do"),{data:E}=S||{};if(E){if(d>=9)c.style.marginTop="3px",f.style.cursor="default",f.innerText=`+ ${d} more...`,y+=`${d===9?"":", "}${(x=p==null?void 0:p.name)==null?void 0:x.toString()}`,f.title=y;else{const C=document.createElement("div"),M=document.createElement("img"),O=new ImageData(Uint8ClampedArray.from(E.data),E.width,E.height),P=document.createElement("canvas"),z=P.getContext("2d");P.height=O.height,P.width=O.width,z==null||z.putImageData(O,0,0),C.style.paddingLeft="4px",C.style.display="flex",C.style.justifyContent="center",C.style.alignItems="flex-end",M.id=`amenity${w}`,M.src=P.toDataURL(),M.classList.add("maplibre-icon"),M.title=M.alt=(b=p==null?void 0:p.name)==null?void 0:b.toString(),M.style.height="18px",M.style.width="18px",M.style.padding="2px",M.style.borderRadius="3px",C.appendChild(M),c.appendChild(C)}d++}}}),(a=f==null?void 0:f.innerText)!=null&&a.length&&c.appendChild(f),l.appendChild(c)}else u.style.marginBottom="1px";return l}let xe,Ao,Ji;function S9({trailDataUrl:t,trailAlertsUrl:e="https://central.nps.gov/data/api/v1/trdx/feeds?apikey=KXuXrDdge2Csv0xbC01JhhNNaDGcmICX&format=geoJson",featurePopupToShow:n,elementClicked:i,mapCssHeight:r,mapCssWidth:o,enableTrailAlerts:s=!0,enableTrailAlertsToggle:a=!0,enableElevationProfile:l=!0,elevationProfileOptions:u=null,useTESTElevation:c=!1}){let h=(t==null?void 0:t.trailDataUrl)??(t==null?void 0:t.value)??t;h=(h==null?void 0:h.trim())??h,h=typeof h=="string"&&!(h!=null&&h.startsWith("http"))&&Up(h)?JSON.parse(h):h;let d=s?(e==null?void 0:e.trailAlertsUrl)??(e==null?void 0:e.value)??e:"";d=(d==null?void 0:d.trim())??d,d=typeof d=="string"&&!(d!=null&&d.startsWith("http"))&&Up(d)?JSON.parse(d):d;let f=r||"98vh",y=o||"100%";const p=Vy.NPMap;cr.useEffect(()=>{v(n)},[n]);const w=async b=>{var S,E,C,M;if(xe=await b.target,Ao=await xe.getContainer(),m9(),g9(hv),Ji=await c9(h||d,xe,av),l){const O=(S=Ji==null?void 0:Ji.features)==null?void 0:S.filter(P=>{var z,F;return((z=P==null?void 0:P.geometry)==null?void 0:z.type)===Za||((F=P==null?void 0:P.geometry)==null?void 0:F.type)===fh});(O==null?void 0:O.length)===1&&(M=(C=(E=O[0])==null?void 0:E.geometry)==null?void 0:C.coordinates)!=null&&M.some(P=>P==null?void 0:P.some(z=>(P==null?void 0:P.length)===3))&&(c?(xe.addControl(new o9(u)),Rh(u)):xe.addControl(new r9(u)))}d&&a&&xe.addControl(new i9)},m=async b=>{},v=b=>{f9(xe,b)},x={version:"NPMap5",basemap:["mapbox://styles/atlas-user/ck58pyquo009v01p99xebegr9"],sources:{selectedTrail:{type:ff,data:h},selectedTrailAlerts:{type:ff,data:d}},layers:[{id:Qy,type:"line",beforeLayer:"pt trail unpaved",source:"selectedTrail",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#ffff99","line-width":["interpolate",["linear"],["zoom"],5,3,12,4,22,20],"line-opacity":1},popup:{options:{primaryKeys:[Rr],formatter:b=>(i&&i(b),nu(b,xe,fg))}},filter:["!=","$type","Point"]},{id:hg,type:"line",beforeLayer:"pt trail unpaved",source:"selectedTrailAlerts",layout:{visibility:s&&La?"visible":"none","line-join":"round","line-cap":"round"},paint:{"line-color":"#720f04","line-width":["interpolate",["linear"],["zoom"],5,3,12,4,22,20],"line-opacity":1},popup:{options:{primaryKeys:["siteId"],formatter:b=>(i&&i(b),nu(b,xe,Wn,`${Wn+So+Rr}`,void 0,`${Wn+So+pg}`))}}},{id:Ky,type:"symbol",source:"selectedTrail",layout:{"icon-image":"{icon}","icon-allow-overlap":!0,"icon-symbol-library":"nps","icon-height":21,"icon-width":21,"icon-shielded":!0,"text-field":["get",Rr],"text-justify":"auto","text-radial-offset":1,"text-variable-anchor-offset":["right",[-1,0],"left",[1,0],"top",[0,1],"bottom",[0,-1]],"text-font":["Open Sans SemiBold","Arial Unicode MS Regular"],"text-size":11,"text-letter-spacing":.05},paint:{"icon-color":"white","icon-shield-color":"#717f5c","text-color":"#1e4700","text-halo-color":"#e6e1db","text-halo-width":2,"text-halo-blur":1},popup:{options:{primaryKeys:[Rr],formatter:b=>(i&&i(b),nu(b,xe,qy))}},filter:["==","$type","Point"]}]};return jl.jsx(jl.Fragment,{children:jl.jsx(p,{height:f,width:y,style:x,center:[-97,38],zoom:4.4,controls:sv,mapLibrary:"5.0.4-d",onEvents:[{type:"load",listener:w},{type:"idle",listener:m}]})})}const E9=`{
    "type": "LineString",
    "coordinates": [
        [
            -107.68701557663165,
            38.55495455420636
        ],
        [
            -107.68705354363237,
            38.554886106194665
        ],
        [
            -107.68712294464392,
            38.5548529771855
        ],
        [
            -107.68721615866107,
            38.554823805175296
        ],
        [
            -107.68728279267545,
            38.554822274170576
        ],
        [
            -107.68736387969538,
            38.55484293616785
        ],
        [
            -107.68744842571368,
            38.554840993161875
        ],
        [
            -107.68751288872859,
            38.55484852115849
        ],
        [
            -107.68762377675202,
            38.55484146915004
        ],
        [
            -107.6877024467675,
            38.55482614614265
        ],
        [
            -107.68778436478269,
            38.55480173813385
        ],
        [
            -107.68786286579767,
            38.55478191412587
        ],
        [
            -107.68794927281337,
            38.554752899116146
        ],
        [
            -107.68801762182368,
            38.55471078210592
        ],
        [
            -107.68806949183042,
            38.55466904509682
        ],
        [
            -107.68814104284236,
            38.55463586608753
        ],
        [
            -107.68823459086057,
            38.55461569607847
        ],
        [
            -107.68829857187293,
            38.55460071007215
        ],
        [
            -107.68836940588473,
            38.55456754706289
        ],
        [
            -107.68844238889703,
            38.55453433405352
        ],
        [
            -107.68850428990591,
            38.55449236604371
        ],
        [
            -107.68859339292173,
            38.55445878303324
        ],
        [
            -107.68866441693307,
            38.554421110023384
        ],
        [
            -107.68873493794284,
            38.55436993401175
        ],
        [
            -107.68878699694912,
            38.554323687002054
        ],
        [
            -107.68885608495862,
            38.55427254399053
        ],
        [
            -107.68893104997085,
            38.554234780980366
        ],
        [
            -107.68895867997482,
            38.55421612597603
        ],
        [
            -107.68897088297643,
            38.55420683497395
        ],
        [
            -107.68898019697846,
            38.55420662097328
        ],
        [
            -107.68904544399057,
            38.55418709996625
        ],
        [
            -107.68913173501117,
            38.554203135962574
        ],
        [
            -107.68917766702552,
            38.554242625964754
        ],
        [
            -107.68920891203672,
            38.55428245196794
        ],
        [
            -107.68923296804738,
            38.5543314529729
        ],
        [
            -107.68924793206199,
            38.554434724985676
        ],
        [
            -107.68926587607227,
            38.554492876992256
        ],
        [
            -107.68931109308652,
            38.554532382994424
        ],
        [
            -107.68937409810205,
            38.554548953992374
        ],
        [
            -107.68954816014164,
            38.554562969982484
        ],
        [
            -107.68972898518462,
            38.55459485197447
        ],
        [
            -107.68970223918132,
            38.55461799197938
        ],
        [
            -107.68966190217411,
            38.55463243398406
        ],
        [
            -107.68964504217145,
            38.55464183298647
        ],
        [
            -107.68965629317536,
            38.55465508898747
        ],
        [
            -107.68968870318285,
            38.554658848985795
        ],
        [
            -107.68970355818657,
            38.55466301098534
        ],
        [
            -107.68972077718928,
            38.5546536049829
        ],
        [
            -107.68978127620434,
            38.55467023498103
        ],
        [
            -107.68980721521137,
            38.55468315298098
        ],
        [
            -107.6898526902222,
            38.55469111697901
        ],
        [
            -107.68989205223268,
            38.55470823197861
        ],
        [
            -107.6899589992491,
            38.5547247109763
        ],
        [
            -107.69001768326474,
            38.554750391975766
        ],
        [
            -107.68997753725708,
            38.5547603249798
        ],
        [
            -107.68993918224977,
            38.55477021798369
        ],
        [
            -107.68991207724638,
            38.55479336598865
        ],
        [
            -107.68986779923834,
            38.554807898993616
        ],
        [
            -107.68981241622785,
            38.55482268699931
        ],
        [
            -107.68973623221386,
            38.554846965007755
        ],
        [
            -107.68968930220373,
            38.554848044011024
        ],
        [
            -107.68964089319527,
            38.55486717801687
        ],
        [
            -107.68957294818307,
            38.55489126602473
        ],
        [
            -107.68951825817373,
            38.55491504803159
        ],
        [
            -107.68944553515809,
            38.55491672003672
        ],
        [
            -107.68938604214618,
            38.55492709904215
        ],
        [
            -107.68933495813671,
            38.554941788047586
        ],
        [
            -107.6892759701264,
            38.55496566905477
        ],
        [
            -107.68929940013295,
            38.554978645054916
        ],
        [
            -107.68933861614192,
            38.55498224905272
        ],
        [
            -107.68939517515612,
            38.554998968051144
        ],
        [
            -107.68943219716655,
            38.55502064105153
        ],
        [
            -107.68950310818288,
            38.55502802104771
        ],
        [
            -107.68950428318661,
            38.55505952805187
        ],
        [
            -107.68953074719428,
            38.555076940052366
        ],
        [
            -107.6895694162036,
            38.555085061050846
        ],
        [
            -107.68960894621459,
            38.55510667705109
        ],
        [
            -107.68965012222449,
            38.555114740049376
        ],
        [
            -107.68968697623446,
            38.55513191204913
        ],
        [
            -107.68971146024221,
            38.55515387505045
        ],
        [
            -107.68975956425602,
            38.55518430305121
        ],
        [
            -107.68976957325916,
            38.55519308305174
        ],
        [
            -107.68974915425474,
            38.55519355205318
        ],
        [
            -107.68969248124553,
            38.555221886060835
        ],
        [
            -107.68962042823198,
            38.55524156306832
        ],
        [
            -107.68955714022074,
            38.55526554307584
        ],
        [
            -107.68947947720842,
            38.55530787508671
        ],
        [
            -107.68945468920607,
            38.55533547409211
        ],
        [
            -107.68943205120414,
            38.55536302509734
        ],
        [
            -107.6894416782082,
            38.55538082409907
        ],
        [
            -107.68950941122186,
            38.55537025609306
        ],
        [
            -107.68955770723524,
            38.55539617509325
        ],
        [
            -107.68963704825285,
            38.555398856088246
        ],
        [
            -107.68970315626663,
            38.55539283008297
        ],
        [
            -107.68976315228008,
            38.555395955079305
        ],
        [
            -107.68984232629718,
            38.55539413407368
        ],
        [
            -107.68991755931337,
            38.55539240506838
        ],
        [
            -107.689968957325,
            38.55539572706536
        ],
        [
            -107.69007724835178,
            38.55542477106186
        ],
        [
            -107.69015709337101,
            38.55544095405864
        ],
        [
            -107.69023693839023,
            38.555457138055395
        ],
        [
            -107.69031993941311,
            38.555500279055536
        ],
        [
            -107.69037714743038,
            38.55554401305754
        ],
        [
            -107.69029814041383,
            38.55555033506373
        ],
        [
            -107.69024939640433,
            38.55556046606839
        ],
        [
            -107.69015947438488,
            38.5555625350747
        ],
        [
            -107.69010986837368,
            38.555559171077675
        ],
        [
            -107.69001598435445,
            38.55557034008554
        ],
        [
            -107.68994376234032,
            38.555585516092435
        ],
        [
            -107.68992707033821,
            38.555599415095415
        ],
        [
            -107.69003207036728,
            38.55565556409581
        ],
        [
            -107.69008084638327,
            38.55570399909897
        ],
        [
            -107.69016340041001,
            38.555783188103995
        ],
        [
            -107.69020028742635,
            38.55585892511159
        ],
        [
            -107.69023239443922,
            38.55591224711653
        ],
        [
            -107.69025110044775,
            38.555952362120685
        ],
        [
            -107.69031704146099,
            38.55594183411478
        ],
        [
            -107.69037106146818,
            38.55590004710555
        ],
        [
            -107.69041848647248,
            38.55584489609494
        ],
        [
            -107.69048131448011,
            38.55578939108327
        ],
        [
            -107.6905167034833,
            38.555748031075346
        ],
        [
            -107.69058073249363,
            38.55571502306661
        ],
        [
            -107.69065708350816,
            38.55569524805878
        ],
        [
            -107.69073360552316,
            38.55567997205156
        ],
        [
            -107.69079603153267,
            38.55564249604234
        ],
        [
            -107.69084381353707,
            38.55558733603174
        ],
        [
            -107.69091271054694,
            38.55554070202082
        ],
        [
            -107.69096598955501,
            38.555507940012774
        ],
        [
            -107.69104819757325,
            38.55551055400761
        ],
        [
            -107.69111810058634,
            38.55549092500026
        ],
        [
            -107.69118905660065,
            38.55548028199401
        ],
        [
            -107.69126610261631,
            38.55546949998735
        ],
        [
            -107.69134744863287,
            38.55545861798037
        ],
        [
            -107.69141644464625,
            38.55544351497367
        ],
        [
            -107.6914852066621,
            38.555450942970005
        ],
        [
            -107.69163319870047,
            38.55550610196736
        ],
        [
            -107.69177343073967,
            38.55558396396828
        ],
        [
            -107.69189127376609,
            38.55559026096116
        ],
        [
            -107.69196913778538,
            38.55561099495865
        ],
        [
            -107.69205821880212,
            38.55558641894933
        ],
        [
            -107.69215640182229,
            38.55557514994115
        ],
        [
            -107.69225226784152,
            38.55555942793255
        ],
        [
            -107.69229916484524,
            38.555499782921444
        ],
        [
            -107.6923465868495,
            38.55544463091085
        ],
        [
            -107.69233177484381,
            38.555422446908885
        ],
        [
            -107.69229137183959,
            38.55546392191716
        ],
        [
            -107.69220332182498,
            38.55550649492884
        ],
        [
            -107.69213420080911,
            38.5554990749325
        ],
        [
            -107.69205072779108,
            38.55550099693844
        ],
        [
            -107.69199667777742,
            38.55548422093986
        ],
        [
            -107.69187657373966,
            38.55537886593388
        ],
        [
            -107.69183258771874,
            38.55527626292313
        ],
        [
            -107.69178110069532,
            38.55516482391175
        ],
        [
            -107.69171045766718,
            38.55504931990109
        ],
        [
            -107.69160310663067,
            38.554930155892414
        ],
        [
            -107.69156591561968,
            38.554903981891414
        ],
        [
            -107.69151546960578,
            38.55487811189137
        ],
        [
            -107.69146141959216,
            38.55486133589279
        ],
        [
            -107.6914215985781,
            38.55481269688898
        ],
        [
            -107.69146602158771,
            38.55481167488584
        ],
        [
            -107.69151973460028,
            38.55481944888322
        ],
        [
            -107.69154835060846,
            38.554836810883664
        ],
        [
            -107.69158986261938,
            38.55485387588307
        ],
        [
            -107.69162936963137,
            38.55488450088453
        ],
        [
            -107.69171153365157,
            38.55490513488172
        ],
        [
            -107.69177220066715,
            38.554926263880446
        ],
        [
            -107.691824963682,
            38.55495658388093
        ],
        [
            -107.6918811626961,
            38.55497331087936
        ],
        [
            -107.6919355487108,
            38.55499908887908
        ],
        [
            -107.69198888372426,
            38.55501588087776
        ],
        [
            -107.69202201073196,
            38.555019623876
        ],
        [
            -107.69205441973942,
            38.555023382874296
        ],
        [
            -107.69209626875144,
            38.55504944987497
        ],
        [
            -107.69215660076593,
            38.5550615758725
        ],
        [
            -107.69226072778595,
            38.55503665386209
        ],
        [
            -107.69230517279452,
            38.55502662085778
        ],
        [
            -107.69233906080038,
            38.55501232485354
        ],
        [
            -107.69235360280199,
            38.554998475850695
        ],
        [
            -107.69240399281041,
            38.55497479084414
        ],
        [
            -107.69245737182193,
            38.554973561840335
        ],
        [
            -107.6925205128316,
            38.55493606883107
        ],
        [
            -107.69255088483374,
            38.554894823823524
        ],
        [
            -107.69262112384787,
            38.55488419781732
        ],
        [
            -107.69266344185502,
            38.55486520281192
        ],
        [
            -107.69272377186951,
            38.55487732880946
        ],
        [
            -107.69277025488353,
            38.55491229781094
        ],
        [
            -107.6928203438973,
            38.55493817581104
        ],
        [
            -107.69283837890367,
            38.55496028481276
        ],
        [
            -107.69306185895485,
            38.554982168800585
        ],
        [
            -107.69309725896544,
            38.55500838380167
        ],
        [
            -107.69314254497675,
            38.555020855800265
        ],
        [
            -107.69318570198655,
            38.555024366797795
        ],
        [
            -107.69329722800569,
            38.55497674978386
        ],
        [
            -107.69341260602958,
            38.554965082774544
        ],
        [
            -107.69349376004658,
            38.554958707768186
        ],
        [
            -107.6935554450569,
            38.55493025776019
        ],
        [
            -107.69361773607233,
            38.55494684275816
        ],
        [
            -107.6936636580793,
            38.55491875575133
        ],
        [
            -107.69374165509267,
            38.554885423741595
        ],
        [
            -107.69379721911109,
            38.554942709745454
        ],
        [
            -107.69394148214714,
            38.554984436741314
        ],
        [
            -107.69396082715132,
            38.55498399073995
        ],
        [
            -107.69397064615492,
            38.55499727874105
        ],
        [
            -107.69402737216969,
            38.55501849774001
        ],
        [
            -107.69406224617967,
            38.55504021974059
        ],
        [
            -107.69409647018655,
            38.55503492573756
        ],
        [
            -107.6940561211719,
            38.55498179573316
        ],
        [
            -107.69402700116217,
            38.55495093173099
        ],
        [
            -107.69397141614469,
            38.55490265672834
        ],
        [
            -107.69392132713097,
            38.55487677972828
        ],
        [
            -107.69388938511861,
            38.554827961723866
        ],
        [
            -107.69383881510227,
            38.55477957172087
        ],
        [
            -107.69380769309358,
            38.55476226872063
        ],
        [
            -107.69376257508283,
            38.55475429772261
        ],
        [
            -107.69370434907076,
            38.554760142727375
        ],
        [
            -107.69359393004245,
            38.554722141729755
        ],
        [
            -107.69358286803809,
            38.55470437672813
        ],
        [
            -107.69367013405548,
            38.554688851720165
        ],
        [
            -107.69375339407492,
            38.55470044871605
        ],
        [
            -107.69380517108561,
            38.554694751711764
        ],
        [
            -107.69385427309521,
            38.55468461070712
        ],
        [
            -107.69390056610963,
            38.55472408970923
        ],
        [
            -107.69397876612999,
            38.554753822707916
        ],
        [
            -107.69404356514593,
            38.554770349705755
        ],
        [
            -107.69409599215972,
            38.554791666705064
        ],
        [
            -107.69415451017481,
            38.55481284470392
        ],
        [
            -107.69420744219023,
            38.554847664705
        ],
        [
            -107.6942681102058,
            38.55486879170368
        ],
        [
            -107.69431621621965,
            38.55489921870449
        ],
        [
            -107.69435954222996,
            38.55490723070265
        ],
        [
            -107.6944309132498,
            38.55494613170301
        ],
        [
            -107.6944899582655,
            38.55497180070247
        ],
        [
            -107.69452289427363,
            38.55498005170134
        ],
        [
            -107.69454852027864,
            38.55497495669891
        ],
        [
            -107.6945259260424,
            38.554952690397656
        ],
        [
            -107.69452171826993,
            38.55494854369721
        ],
        [
            -107.69447093525498,
            38.55491367469598
        ],
        [
            -107.69443522124236,
            38.554869446692464
        ],
        [
            -107.69439699922916,
            38.554825277689176
        ],
        [
            -107.6943453982106,
            38.554758892683765
        ],
        [
            -107.69428818919327,
            38.55471516068179
        ],
        [
            -107.69425822918086,
            38.55466179067669
        ],
        [
            -107.69424529717169,
            38.55460352366979
        ],
        [
            -107.69426477316993,
            38.554549014661205
        ],
        [
            -107.694269541166,
            38.55450385465482
        ],
        [
            -107.69424438515613,
            38.5544638896512
        ],
        [
            -107.69421543314688,
            38.55443752664963
        ],
        [
            -107.69416204112794,
            38.55437118164436
        ],
        [
            -107.69409726511103,
            38.55434564364535
        ],
        [
            -107.69401902209263,
            38.55433393164908
        ],
        [
            -107.6939395130745,
            38.55432675365346
        ],
        [
            -107.69385107205342,
            38.55431076965736
        ],
        [
            -107.69377853803731,
            38.55430793566186
        ],
        [
            -107.69369833601797,
            38.554291762665116
        ],
        [
            -107.69361522400007,
            38.55429367767104
        ],
        [
            -107.69352905498197,
            38.554300167677724
        ],
        [
            -107.69345021896595,
            38.55431099168453
        ],
        [
            -107.6933690649489,
            38.554317366690874
        ],
        [
            -107.69329650993376,
            38.55432354169663
        ],
        [
            -107.69322445692018,
            38.554343220704126
        ],
        [
            -107.69317423691233,
            38.55437140771129
        ],
        [
            -107.69311206989941,
            38.55437734471627
        ],
        [
            -107.69305439288694,
            38.55437867272041
        ],
        [
            -107.69301140287766,
            38.554379662723434
        ],
        [
            -107.69294677486225,
            38.55436763572619
        ],
        [
            -107.69286115284373,
            38.554369606732266
        ],
        [
            -107.69276545782509,
            38.55438982974141
        ],
        [
            -107.69269225080681,
            38.5543689907436
        ],
        [
            -107.69262996179137,
            38.554352404745636
        ],
        [
            -107.69254894176846,
            38.55430471474472
        ],
        [
            -107.69249037975534,
            38.55430155774828
        ],
        [
            -107.69241860673736,
            38.55428068475032
        ],
        [
            -107.69227050670392,
            38.554270579758985
        ],
        [
            -107.69217511267986,
            38.55424124076154
        ],
        [
            -107.69212868767134,
            38.55425582476662
        ],
        [
            -107.69206009365605,
            38.5542528987709
        ],
        [
            -107.69199628164425,
            38.55427238677785
        ],
        [
            -107.6919363876343,
            38.554300795785686
        ],
        [
            -107.69189667763115,
            38.55435126379511
        ],
        [
            -107.6918785096307,
            38.554383217800606
        ],
        [
            -107.69180067961786,
            38.55442104981098
        ],
        [
            -107.69171542860691,
            38.554490586826056
        ],
        [
            -107.69165378859459,
            38.554501014831615
        ],
        [
            -107.69156949857292,
            38.554471419833376
        ],
        [
            -107.69153572356218,
            38.55444066083151
        ],
        [
            -107.69147042254464,
            38.55441062983193
        ],
        [
            -107.69135773251335,
            38.55435015283149
        ],
        [
            -107.691272514493,
            38.55433409383511
        ],
        [
            -107.69118424147244,
            38.554322609839524
        ],
        [
            -107.69110026645284,
            38.55431102684365
        ],
        [
            -107.69101679643484,
            38.5543129478496
        ],
        [
            -107.69092959641453,
            38.55430143985397
        ],
        [
            -107.69084918139667,
            38.55429878485906
        ],
        [
            -107.69060405134773,
            38.55434046388121
        ],
        [
            -107.69052755533176,
            38.55434672888727
        ],
        [
            -107.69044890831526,
            38.554353042893396
        ],
        [
            -107.69036094829674,
            38.55435957190024
        ],
        [
            -107.69028110427756,
            38.55434338790348
        ],
        [
            -107.69018836325556,
            38.554327501907615
        ],
        [
            -107.6900481672228,
            38.55430820191456
        ],
        [
            -107.6900481672228,
            38.55430820191452
        ],
        [
            -107.69001637072904,
            38.55430512369135
        ],
        [
            -107.6899729582056,
            38.55430092091866
        ],
        [
            -107.68992122519293,
            38.554288595920525
        ],
        [
            -107.68990118718762,
            38.55428004792075
        ],
        [
            -107.68987524818051,
            38.55426712892074
        ],
        [
            -107.68985678717706,
            38.55427205892271
        ],
        [
            -107.68980715816686,
            38.5542777049268
        ],
        [
            -107.68970188014211,
            38.55426210593185
        ],
        [
            -107.68961955112137,
            38.55423696893404
        ],
        [
            -107.68957223110476,
            38.55417949292956
        ],
        [
            -107.68953532208937,
            38.55411276692315
        ],
        [
            -107.6894951900733,
            38.55404611491695
        ],
        [
            -107.6894347830543,
            38.55399344391402
        ],
        [
            -107.68937026803397,
            38.55393636191074
        ],
        [
            -107.68930315401704,
            38.55391538091251
        ],
        [
            -107.68921263999994,
            38.553939986921876
        ],
        [
            -107.68913910998802,
            38.55397771693193
        ],
        [
            -107.68909048798099,
            38.55401036993958
        ],
        [
            -107.68906455798134,
            38.55406502694863
        ],
        [
            -107.68899931997666,
            38.55415212096472
        ],
        [
            -107.6889549753036,
            38.55421862726621
        ],
        [
            -107.6886644169331,
            38.55442111002341
        ],
        [
            -107.68848810035273,
            38.554503342332126
        ]
    ]
}`,M9=`{
    "type": "LineString",
    "coordinates": [
        [
            -107.68701557663165,
            38.55495455420636, 
            2453.64488610619465
        ],
        [
            -107.68705354363237,
            38.554886106194665,
            2453.63488610619465
        ],
        [
            -107.68712294464392,
            38.5548529771855,
            2453.62488610619465
        ],
        [
            -107.68721615866107,
            38.554823805175296,
            2453.61488610619465
        ],
        [
            -107.68728279267545,
            38.554822274170576,
            2453.60488610619465
        ],
        [
            -107.68736387969538,
            38.55484293616785
        ],
        [
            -107.68744842571368,
            38.554840993161875
        ],
        [
            -107.68751288872859,
            38.55484852115849
        ],
        [
            -107.68762377675202,
            38.55484146915004
        ],
        [
            -107.6877024467675,
            38.55482614614265
        ],
        [
            -107.68778436478269,
            38.55480173813385
        ],
        [
            -107.68786286579767,
            38.55478191412587
        ],
        [
            -107.68794927281337,
            38.554752899116146
        ],
        [
            -107.68801762182368,
            38.55471078210592
        ],
        [
            -107.68806949183042,
            38.55466904509682
        ],
        [
            -107.68814104284236,
            38.55463586608753
        ],
        [
            -107.68823459086057,
            38.55461569607847
        ],
        [
            -107.68829857187293,
            38.55460071007215
        ],
        [
            -107.68836940588473,
            38.55456754706289
        ],
        [
            -107.68844238889703,
            38.55453433405352
        ],
        [
            -107.68850428990591,
            38.55449236604371
        ],
        [
            -107.68859339292173,
            38.55445878303324
        ],
        [
            -107.68866441693307,
            38.554421110023384
        ],
        [
            -107.68873493794284,
            38.55436993401175
        ],
        [
            -107.68878699694912,
            38.554323687002054
        ],
        [
            -107.68885608495862,
            38.55427254399053
        ],
        [
            -107.68893104997085,
            38.554234780980366
        ],
        [
            -107.68895867997482,
            38.55421612597603
        ],
        [
            -107.68897088297643,
            38.55420683497395
        ],
        [
            -107.68898019697846,
            38.55420662097328
        ],
        [
            -107.68904544399057,
            38.55418709996625
        ],
        [
            -107.68913173501117,
            38.554203135962574
        ],
        [
            -107.68917766702552,
            38.554242625964754
        ],
        [
            -107.68920891203672,
            38.55428245196794
        ],
        [
            -107.68923296804738,
            38.5543314529729
        ],
        [
            -107.68924793206199,
            38.554434724985676
        ],
        [
            -107.68926587607227,
            38.554492876992256
        ],
        [
            -107.68931109308652,
            38.554532382994424
        ],
        [
            -107.68937409810205,
            38.554548953992374
        ],
        [
            -107.68954816014164,
            38.554562969982484
        ],
        [
            -107.68972898518462,
            38.55459485197447
        ],
        [
            -107.68970223918132,
            38.55461799197938
        ],
        [
            -107.68966190217411,
            38.55463243398406
        ],
        [
            -107.68964504217145,
            38.55464183298647
        ],
        [
            -107.68965629317536,
            38.55465508898747
        ],
        [
            -107.68968870318285,
            38.554658848985795
        ],
        [
            -107.68970355818657,
            38.55466301098534
        ],
        [
            -107.68972077718928,
            38.5546536049829
        ],
        [
            -107.68978127620434,
            38.55467023498103
        ],
        [
            -107.68980721521137,
            38.55468315298098
        ],
        [
            -107.6898526902222,
            38.55469111697901
        ],
        [
            -107.68989205223268,
            38.55470823197861
        ],
        [
            -107.6899589992491,
            38.5547247109763
        ],
        [
            -107.69001768326474,
            38.554750391975766
        ],
        [
            -107.68997753725708,
            38.5547603249798
        ],
        [
            -107.68993918224977,
            38.55477021798369
        ],
        [
            -107.68991207724638,
            38.55479336598865
        ],
        [
            -107.68986779923834,
            38.554807898993616
        ],
        [
            -107.68981241622785,
            38.55482268699931
        ],
        [
            -107.68973623221386,
            38.554846965007755
        ],
        [
            -107.68968930220373,
            38.554848044011024
        ],
        [
            -107.68964089319527,
            38.55486717801687
        ],
        [
            -107.68957294818307,
            38.55489126602473
        ],
        [
            -107.68951825817373,
            38.55491504803159
        ],
        [
            -107.68944553515809,
            38.55491672003672
        ],
        [
            -107.68938604214618,
            38.55492709904215
        ],
        [
            -107.68933495813671,
            38.554941788047586
        ],
        [
            -107.6892759701264,
            38.55496566905477
        ],
        [
            -107.68929940013295,
            38.554978645054916
        ],
        [
            -107.68933861614192,
            38.55498224905272
        ],
        [
            -107.68939517515612,
            38.554998968051144
        ],
        [
            -107.68943219716655,
            38.55502064105153
        ],
        [
            -107.68950310818288,
            38.55502802104771
        ],
        [
            -107.68950428318661,
            38.55505952805187
        ],
        [
            -107.68953074719428,
            38.555076940052366
        ],
        [
            -107.6895694162036,
            38.555085061050846
        ],
        [
            -107.68960894621459,
            38.55510667705109
        ],
        [
            -107.68965012222449,
            38.555114740049376
        ],
        [
            -107.68968697623446,
            38.55513191204913
        ],
        [
            -107.68971146024221,
            38.55515387505045
        ],
        [
            -107.68975956425602,
            38.55518430305121
        ],
        [
            -107.68976957325916,
            38.55519308305174
        ],
        [
            -107.68974915425474,
            38.55519355205318
        ],
        [
            -107.68969248124553,
            38.555221886060835
        ],
        [
            -107.68962042823198,
            38.55524156306832
        ],
        [
            -107.68955714022074,
            38.55526554307584
        ],
        [
            -107.68947947720842,
            38.55530787508671
        ],
        [
            -107.68945468920607,
            38.55533547409211
        ],
        [
            -107.68943205120414,
            38.55536302509734
        ],
        [
            -107.6894416782082,
            38.55538082409907
        ],
        [
            -107.68950941122186,
            38.55537025609306
        ],
        [
            -107.68955770723524,
            38.55539617509325
        ],
        [
            -107.68963704825285,
            38.555398856088246
        ],
        [
            -107.68970315626663,
            38.55539283008297
        ],
        [
            -107.68976315228008,
            38.555395955079305
        ],
        [
            -107.68984232629718,
            38.55539413407368
        ],
        [
            -107.68991755931337,
            38.55539240506838
        ],
        [
            -107.689968957325,
            38.55539572706536,
            2316.60488610619465
        ],
        [
            -107.69007724835178,
            38.55542477106186,
            2316.59488610619465
        ],
        [
            -107.69015709337101,
            38.55544095405864,
            2316.58488610619465
        ],
        [
            -107.69023693839023,
            38.555457138055395,
            2316.57488610619465
        ],
        [
            -107.69031993941311,
            38.555500279055536,
            2316.56488610619465
        ],
        [
            -107.69037714743038,
            38.55554401305754,
            2316.55488610619465
        ],
        [
            -107.69029814041383,
            38.55555033506373,
            2316.54488610619465
        ],
        [
            -107.69024939640433,
            38.55556046606839,
            2316.53488610619465
        ],
        [
            -107.69015947438488,
            38.5555625350747,
            2316.52488610619465
        ],
        [
            -107.69010986837368,
            38.555559171077675,
            2316.51488610619465
        ],
        [
            -107.69001598435445,
            38.55557034008554,
            2316.50488610619465
        ],
        [
            -107.68994376234032,
            38.555585516092435,
            2316.49488610619465
        ],
        [
            -107.68992707033821,
            38.555599415095415,
            2316.48488610619465
        ],
        [
            -107.69003207036728,
            38.55565556409581
        ],
        [
            -107.69008084638327,
            38.55570399909897
        ],
        [
            -107.69016340041001,
            38.555783188103995
        ],
        [
            -107.69020028742635,
            38.55585892511159
        ],
        [
            -107.69023239443922,
            38.55591224711653
        ],
        [
            -107.69025110044775,
            38.555952362120685
        ],
        [
            -107.69031704146099,
            38.55594183411478
        ],
        [
            -107.69037106146818,
            38.55590004710555
        ],
        [
            -107.69041848647248,
            38.55584489609494
        ],
        [
            -107.69048131448011,
            38.55578939108327
        ],
        [
            -107.6905167034833,
            38.555748031075346
        ],
        [
            -107.69058073249363,
            38.55571502306661
        ],
        [
            -107.69065708350816,
            38.55569524805878
        ],
        [
            -107.69073360552316,
            38.55567997205156
        ],
        [
            -107.69079603153267,
            38.55564249604234
        ],
        [
            -107.69084381353707,
            38.55558733603174
        ],
        [
            -107.69091271054694,
            38.55554070202082
        ],
        [
            -107.69096598955501,
            38.555507940012774
        ],
        [
            -107.69104819757325,
            38.55551055400761
        ],
        [
            -107.69111810058634,
            38.55549092500026
        ],
        [
            -107.69118905660065,
            38.55548028199401
        ],
        [
            -107.69126610261631,
            38.55546949998735
        ],
        [
            -107.69134744863287,
            38.55545861798037
        ],
        [
            -107.69141644464625,
            38.55544351497367
        ],
        [
            -107.6914852066621,
            38.555450942970005
        ],
        [
            -107.69163319870047,
            38.55550610196736
        ],
        [
            -107.69177343073967,
            38.55558396396828
        ],
        [
            -107.69189127376609,
            38.55559026096116
        ],
        [
            -107.69196913778538,
            38.55561099495865
        ],
        [
            -107.69205821880212,
            38.55558641894933
        ],
        [
            -107.69215640182229,
            38.55557514994115
        ],
        [
            -107.69225226784152,
            38.55555942793255
        ],
        [
            -107.69229916484524,
            38.555499782921444
        ],
        [
            -107.6923465868495,
            38.55544463091085
        ],
        [
            -107.69233177484381,
            38.555422446908885
        ],
        [
            -107.69229137183959,
            38.55546392191716
        ],
        [
            -107.69220332182498,
            38.55550649492884
        ],
        [
            -107.69213420080911,
            38.5554990749325
        ],
        [
            -107.69205072779108,
            38.55550099693844
        ],
        [
            -107.69199667777742,
            38.55548422093986
        ],
        [
            -107.69187657373966,
            38.55537886593388
        ],
        [
            -107.69183258771874,
            38.55527626292313
        ],
        [
            -107.69178110069532,
            38.55516482391175
        ],
        [
            -107.69171045766718,
            38.55504931990109
        ],
        [
            -107.69160310663067,
            38.554930155892414
        ],
        [
            -107.69156591561968,
            38.554903981891414
        ],
        [
            -107.69151546960578,
            38.55487811189137
        ],
        [
            -107.69146141959216,
            38.55486133589279
        ],
        [
            -107.6914215985781,
            38.55481269688898
        ],
        [
            -107.69146602158771,
            38.55481167488584
        ],
        [
            -107.69151973460028,
            38.55481944888322
        ],
        [
            -107.69154835060846,
            38.554836810883664
        ],
        [
            -107.69158986261938,
            38.55485387588307
        ],
        [
            -107.69162936963137,
            38.55488450088453
        ],
        [
            -107.69171153365157,
            38.55490513488172
        ],
        [
            -107.69177220066715,
            38.554926263880446
        ],
        [
            -107.691824963682,
            38.55495658388093
        ],
        [
            -107.6918811626961,
            38.55497331087936
        ],
        [
            -107.6919355487108,
            38.55499908887908
        ],
        [
            -107.69198888372426,
            38.55501588087776
        ],
        [
            -107.69202201073196,
            38.555019623876
        ],
        [
            -107.69205441973942,
            38.555023382874296
        ],
        [
            -107.69209626875144,
            38.55504944987497
        ],
        [
            -107.69215660076593,
            38.5550615758725
        ],
        [
            -107.69226072778595,
            38.55503665386209
        ],
        [
            -107.69230517279452,
            38.55502662085778
        ],
        [
            -107.69233906080038,
            38.55501232485354
        ],
        [
            -107.69235360280199,
            38.554998475850695
        ],
        [
            -107.69240399281041,
            38.55497479084414
        ],
        [
            -107.69245737182193,
            38.554973561840335
        ],
        [
            -107.6925205128316,
            38.55493606883107
        ],
        [
            -107.69255088483374,
            38.554894823823524
        ],
        [
            -107.69262112384787,
            38.55488419781732
        ],
        [
            -107.69266344185502,
            38.55486520281192
        ],
        [
            -107.69272377186951,
            38.55487732880946
        ],
        [
            -107.69277025488353,
            38.55491229781094
        ],
        [
            -107.6928203438973,
            38.55493817581104
        ],
        [
            -107.69283837890367,
            38.55496028481276
        ],
        [
            -107.69306185895485,
            38.554982168800585
        ],
        [
            -107.69309725896544,
            38.55500838380167
        ],
        [
            -107.69314254497675,
            38.555020855800265
        ],
        [
            -107.69318570198655,
            38.555024366797795
        ],
        [
            -107.69329722800569,
            38.55497674978386
        ],
        [
            -107.69341260602958,
            38.554965082774544
        ],
        [
            -107.69349376004658,
            38.554958707768186
        ],
        [
            -107.6935554450569,
            38.55493025776019
        ],
        [
            -107.69361773607233,
            38.55494684275816
        ],
        [
            -107.6936636580793,
            38.55491875575133
        ],
        [
            -107.69374165509267,
            38.554885423741595
        ],
        [
            -107.69379721911109,
            38.554942709745454
        ],
        [
            -107.69394148214714,
            38.554984436741314
        ],
        [
            -107.69396082715132,
            38.55498399073995
        ],
        [
            -107.69397064615492,
            38.55499727874105
        ],
        [
            -107.69402737216969,
            38.55501849774001
        ],
        [
            -107.69406224617967,
            38.55504021974059
        ],
        [
            -107.69409647018655,
            38.55503492573756
        ],
        [
            -107.6940561211719,
            38.55498179573316
        ],
        [
            -107.69402700116217,
            38.55495093173099
        ],
        [
            -107.69397141614469,
            38.55490265672834
        ],
        [
            -107.69392132713097,
            38.55487677972828
        ],
        [
            -107.69388938511861,
            38.554827961723866
        ],
        [
            -107.69383881510227,
            38.55477957172087
        ],
        [
            -107.69380769309358,
            38.55476226872063
        ],
        [
            -107.69376257508283,
            38.55475429772261
        ],
        [
            -107.69370434907076,
            38.554760142727375
        ],
        [
            -107.69359393004245,
            38.554722141729755
        ],
        [
            -107.69358286803809,
            38.55470437672813
        ],
        [
            -107.69367013405548,
            38.554688851720165
        ],
        [
            -107.69375339407492,
            38.55470044871605
        ],
        [
            -107.69380517108561,
            38.554694751711764
        ],
        [
            -107.69385427309521,
            38.55468461070712
        ],
        [
            -107.69390056610963,
            38.55472408970923
        ],
        [
            -107.69397876612999,
            38.554753822707916
        ],
        [
            -107.69404356514593,
            38.554770349705755
        ],
        [
            -107.69409599215972,
            38.554791666705064
        ],
        [
            -107.69415451017481,
            38.55481284470392
        ],
        [
            -107.69420744219023,
            38.554847664705
        ],
        [
            -107.6942681102058,
            38.55486879170368
        ],
        [
            -107.69431621621965,
            38.55489921870449
        ],
        [
            -107.69435954222996,
            38.55490723070265
        ],
        [
            -107.6944309132498,
            38.55494613170301
        ],
        [
            -107.6944899582655,
            38.55497180070247
        ],
        [
            -107.69452289427363,
            38.55498005170134
        ],
        [
            -107.69454852027864,
            38.55497495669891
        ],
        [
            -107.6945259260424,
            38.554952690397656
        ],
        [
            -107.69452171826993,
            38.55494854369721
        ],
        [
            -107.69447093525498,
            38.55491367469598
        ],
        [
            -107.69443522124236,
            38.554869446692464
        ],
        [
            -107.69439699922916,
            38.554825277689176
        ],
        [
            -107.6943453982106,
            38.554758892683765
        ],
        [
            -107.69428818919327,
            38.55471516068179
        ],
        [
            -107.69425822918086,
            38.55466179067669
        ],
        [
            -107.69424529717169,
            38.55460352366979
        ],
        [
            -107.69426477316993,
            38.554549014661205
        ],
        [
            -107.694269541166,
            38.55450385465482
        ],
        [
            -107.69424438515613,
            38.5544638896512
        ],
        [
            -107.69421543314688,
            38.55443752664963
        ],
        [
            -107.69416204112794,
            38.55437118164436
        ],
        [
            -107.69409726511103,
            38.55434564364535
        ],
        [
            -107.69401902209263,
            38.55433393164908
        ],
        [
            -107.6939395130745,
            38.55432675365346
        ],
        [
            -107.69385107205342,
            38.55431076965736
        ],
        [
            -107.69377853803731,
            38.55430793566186
        ],
        [
            -107.69369833601797,
            38.554291762665116
        ],
        [
            -107.69361522400007,
            38.55429367767104
        ],
        [
            -107.69352905498197,
            38.554300167677724
        ],
        [
            -107.69345021896595,
            38.55431099168453
        ],
        [
            -107.6933690649489,
            38.554317366690874
        ],
        [
            -107.69329650993376,
            38.55432354169663
        ],
        [
            -107.69322445692018,
            38.554343220704126
        ],
        [
            -107.69317423691233,
            38.55437140771129
        ],
        [
            -107.69311206989941,
            38.55437734471627
        ],
        [
            -107.69305439288694,
            38.55437867272041
        ],
        [
            -107.69301140287766,
            38.554379662723434
        ],
        [
            -107.69294677486225,
            38.55436763572619
        ],
        [
            -107.69286115284373,
            38.554369606732266
        ],
        [
            -107.69276545782509,
            38.55438982974141
        ],
        [
            -107.69269225080681,
            38.5543689907436
        ],
        [
            -107.69262996179137,
            38.554352404745636
        ],
        [
            -107.69254894176846,
            38.55430471474472
        ],
        [
            -107.69249037975534,
            38.55430155774828
        ],
        [
            -107.69241860673736,
            38.55428068475032
        ],
        [
            -107.69227050670392,
            38.554270579758985
        ],
        [
            -107.69217511267986,
            38.55424124076154
        ],
        [
            -107.69212868767134,
            38.55425582476662
        ],
        [
            -107.69206009365605,
            38.5542528987709
        ],
        [
            -107.69199628164425,
            38.55427238677785
        ],
        [
            -107.6919363876343,
            38.554300795785686
        ],
        [
            -107.69189667763115,
            38.55435126379511
        ],
        [
            -107.6918785096307,
            38.554383217800606
        ],
        [
            -107.69180067961786,
            38.55442104981098
        ],
        [
            -107.69171542860691,
            38.554490586826056
        ],
        [
            -107.69165378859459,
            38.554501014831615
        ],
        [
            -107.69156949857292,
            38.554471419833376
        ],
        [
            -107.69153572356218,
            38.55444066083151
        ],
        [
            -107.69147042254464,
            38.55441062983193
        ],
        [
            -107.69135773251335,
            38.55435015283149
        ],
        [
            -107.691272514493,
            38.55433409383511
        ],
        [
            -107.69118424147244,
            38.554322609839524
        ],
        [
            -107.69110026645284,
            38.55431102684365
        ],
        [
            -107.69101679643484,
            38.5543129478496
        ],
        [
            -107.69092959641453,
            38.55430143985397
        ],
        [
            -107.69084918139667,
            38.55429878485906
        ],
        [
            -107.69060405134773,
            38.55434046388121
        ],
        [
            -107.69052755533176,
            38.55434672888727
        ],
        [
            -107.69044890831526,
            38.554353042893396
        ],
        [
            -107.69036094829674,
            38.55435957190024
        ],
        [
            -107.69028110427756,
            38.55434338790348
        ],
        [
            -107.69018836325556,
            38.554327501907615
        ],
        [
            -107.6900481672228,
            38.55430820191456
        ],
        [
            -107.6900481672228,
            38.55430820191452
        ],
        [
            -107.69001637072904,
            38.55430512369135
        ],
        [
            -107.6899729582056,
            38.55430092091866
        ],
        [
            -107.68992122519293,
            38.554288595920525
        ],
        [
            -107.68990118718762,
            38.55428004792075
        ],
        [
            -107.68987524818051,
            38.55426712892074
        ],
        [
            -107.68985678717706,
            38.55427205892271
        ],
        [
            -107.68980715816686,
            38.5542777049268
        ],
        [
            -107.68970188014211,
            38.55426210593185
        ],
        [
            -107.68961955112137,
            38.55423696893404
        ],
        [
            -107.68957223110476,
            38.55417949292956
        ],
        [
            -107.68953532208937,
            38.55411276692315
        ],
        [
            -107.6894951900733,
            38.55404611491695
        ],
        [
            -107.6894347830543,
            38.55399344391402
        ],
        [
            -107.68937026803397,
            38.55393636191074
        ],
        [
            -107.68930315401704,
            38.55391538091251
        ],
        [
            -107.68921263999994,
            38.553939986921876
        ],
        [
            -107.68913910998802,
            38.55397771693193
        ],
        [
            -107.68909048798099,
            38.55401036993958
        ],
        [
            -107.68906455798134,
            38.55406502694863
        ],
        [
            -107.68899931997666,
            38.55415212096472
        ],
        [
            -107.6889549753036,
            38.55421862726621
        ],
        [
            -107.6886644169331,
            38.55442111002341
        ],
        [
            -107.68848810035273,
            38.554503342332126, 
            2453.64488610619465
        ]
    ]
}`,C9=`{
    "type": "Feature",
    "id": "d0e3dc08-9a33-ea37-8c00-4d4cf9fa7d4c",
    "geometry": ${M9},
    "properties": {
        "trailInfo": {
            "routeType": "Loop",
            "surface": "Natural trail",
            "dogs": "Dogs on Leash",
            "difficulty": "Easy",
            "usage": "Heavy",
            "accessibility": "",
            "kid": "Kid friendly",
            "class": "",
            "activities": [
                "Walking",
                "Hiking",
                "Bird watching"
            ],
            "features": [
                "Forest",
                "Wildlife",
                "Wildflowers"
            ],
            "obstacles": [
                "Fee",
                "Off trail"
            ],
            "url": "/trails/view.htm?id=d0e3dc08-9a33-ea37-8c00-4d4cf9fa7d4c",
            "openDate": "2024-05-01T11:25:00",
            "closeDate": "2024-11-30T11:26:00",
            "description": "The Oak Flat Trail is an enjoyable mountain trail full of trees and easy grades.",
            "elevationGain": 500.0,
            "lengthInMiles": 1.2,
            "hikeTime": "60",
            "reservationRequired": true,
            "reservationFee": 15.0,
            "reservationUrl": "https://youtu.be/dQw4w9WgXcQ?feature=shared"
        },
        "geom_id": "d0e3dc08-9a33-ea37-8c00-4d4cf9fa7d4c",
        "color": "#465724",
        "icon": "trail",
        "name": "Oak Flat Trail",
        "description": "The Oak Flat Trail is an enjoyable mountain trail full of trees and easy grades."
    }
}`,zm=`{
    "type": "Feature",
    "id": "2ea1dc08-9d61-8eb6-ac0d-01f600670a05",
    "geometry": {
        "type": "Point",
        "coordinates": [
            -107.68658381654139,
            38.554991502240554
        ]
    },
    "properties": {
        "ordinal": 0,
        "significance": "South Rim Visitor Center",
        "amenities": [
            {
                "name": "Automated External Defibrillator (AED)",
                "icon": "aed"
            },
            {
                "name": "Information",
                "icon": "information"
            },
            {
                "name": "Junior Ranger Booklet Available",
                "icon": "junior-ranger-program"
            },
            {
                "name": "Benches/Seating",
                "icon": "benches-seating"
            },
            {
                "name": "Historical/Interpretive Information/Exhibits",
                "icon": "interpretive-exhibit"
            },
            {
                "name": "Gifts/Souvenirs/Books",
                "icon": "book-and-souvenir-shop"
            },
            {
                "name": "Trailhead",
                "icon": "trailhead"
            },
            {
                "name": "Scenic View/Photo Spot",
                "icon": "scenic-viewpoint"
            },
            {
                "name": "Audio Description",
                "icon": "audio-description"
            },
            {
                "name": "Information - Maps Available",
                "icon": "maps"
            },
            {
                "name": "Fire Extinguisher",
                "icon": "fire-extinguisher"
            },
            {
                "name": "Information Kiosk/Bulletin Board",
                "icon": "information"
            },
            {
                "name": "Information - Ranger/Staff Member Present",
                "icon": "ranger-led-events"
            },
            {
                "name": "Internet/WiFi Available",
                "icon": "wi-fi"
            },
            {
                "name": "Amphitheater",
                "icon": "amphitheater"
            },
            {
                "name": "Parking - Auto",
                "icon": "parking"
            },
            {
                "name": "Wheelchair Accessible",
                "icon": "wheelchair-accessible"
            },
            {
                "name": "Toilet - Vault/Composting",
                "icon": "pit-toilet"
            }
        ],
        "color": "#465724",
        "icon": "visitor-center",
        "images": [
            {
                "description": "",
                "url": "https://www.nps.gov/common/uploads/passport_stamps/EB1A3545-C2AD-CE62-BE96D47E3B3FE825.jpg",
                "credit": "",
                "altText": "Passport Stamp",
                "caption": "",
                "crops": [
                    {
                        "aspectRatio": 1.0,
                        "url": "https://www.nps.gov/common/uploads/passport_stamps/primary/EB1A3545-C2AD-CE62-BE96D47E3B3FE825.jpg"
                    }
                ],
                "type": "Passport",
                "id": "c6d2dc08-0774-83c7-9383-52fabc423b6d"
            },
            {
                "url": "https://www.nps.gov/common/uploads/structured_data/E8909275-C865-AA27-5368DFE1841F3383.jpg",
                "credit": "NPS photo",
                "altText": "South Rim Visitor Center",
                "caption": "South Rim Visitor Center at Gunnison Point",
                "type": "Images",
                "id": "c6d2dc08-c573-15ef-b0a3-a5e9ecb76e49"
            },
            {
                "url": "https://www.nps.gov/common/uploads/structured_data/59CB42C2-09B7-54B8-E45AF60DDB7995BE.jpg",
                "credit": "NPS Photo",
                "altText": "View from the wooden porch around the building with a wayside exhibit",
                "caption": "View from the porch around the building",
                "type": "Images",
                "id": "c6d2dc08-c773-a55a-a288-7520ca0c3d18"
            },
            {
                "url": "https://www.nps.gov/common/uploads/structured_data/59DBE947-B36A-9B75-564E0AD481352AC2.jpg",
                "credit": "NPS Photo",
                "altText": "Interior view of a visitor center with people, exhibits, and a front desk",
                "caption": "The visitor center is open year-round",
                "type": "Images",
                "id": "c6d2dc08-c973-ad46-a1d7-2c53c2ba84dc"
            },
            {
                "url": "https://www.nps.gov/common/uploads/structured_data/5BDA6D09-093A-9A36-26E0BE8F2CC1522C.jpg",
                "credit": "NPS Photo",
                "altText": "A wooden building with A frame style windows with vegetation in the foreground",
                "caption": "A view of the visitor center from below",
                "type": "Images",
                "id": "c6d2dc08-cb73-3b3e-b1ce-b0cd8bb1e10b"
            }
        ],
        "name": "South Rim Visitor Center",
        "description": "This visitor center has exhibits, information, book and map sales, water (available seasonally), vault toilets, and hiking trailheads. It is open year-round with the exception of Thanksgiving Day, Christmas Day, and New Years Day."
    }
}`,T9=`{
    "type": "FeatureCollection",
    "features": [
        ${zm},
        ${C9}
    ]
}`,P9=`{
"type": "FeatureCollection",    
"features": [
        {
            "type": "Feature",
            "id": "d4e3dc08-a730-d77b-87c0-2c9cb0c8af31",
            "geometry": ${E9},
            "properties": {
                "parkId": "d45494ce-5b26-426d-2c07-08d4c7ad36e2",
                "siteId": "d0e3dc08-9a33-ea37-8c00-4d4cf9fa7d4c",
                "core_details": {
                    "name": "Halloween in the Hills",
                    "data_source_id": "d45494ce-5b26-426d-2c07-08d4c7ad36e2",
                    "event_type": "Incident",
                    "trail_names": [
                        "Oak Flat Trail"
                    ],
                    "trail_ids": [
                        "d0e3dc08-9a33-ea37-8c00-4d4cf9fa7d4c"
                    ],
                    "description": "It's that time of year again! Oak Flat Trail will be closed to the public for our sixth annual 'Halloween in the Hills' event.",
                    "creation_date": "2024-10-03T17:52:46.862339",
                    "id": "d4e3dc08-a730-d77b-87c0-2c9cb0c8af31"
                },
                "start_date": "2024-10-01T06:00:00",
                "end_date": "2024-10-31T06:00:00",
                "trail_status": "closed",
                "type_of_incidents": [
                    {
                        "incident_category": "specialevent",
                        "incident_type": "A festival interrupts normal operations."
                    }
                ]
            }
        }
    ]
}`;function D9(){const[t,e]=cr.useState(null),n=r=>{console.log("Received clicked feature: ",r)},i=r=>{e(r)};return Oe.jsxs(Oe.Fragment,{children:[Oe.jsx("p",{className:"header-text",children:"The Trail Map"}),Oe.jsxs("div",{className:"map-container",children:[Oe.jsxs("div",{className:"left-side",children:[Oe.jsx("div",{style:{display:"flex",flexDirection:"row"},children:Oe.jsx("img",{src:Ry,className:"logo",alt:"Vite logo"})}),Oe.jsx("button",{onClick:()=>i(zm),style:{padding:"20px",marginRight:"10px"},children:"Example of manually showing popup of feature"})]}),Oe.jsx(S9,{trailDataUrl:T9,trailAlertsUrl:P9,featurePopupToShow:t,elementClicked:n,mapCssHeight:"100%",mapCssWidth:"100%",enableTrailAlerts:!0,enableTrailAlertsToggle:!0,enableElevationProfile:!0})]})]})}ag(document.getElementById("root")).render(Oe.jsx(cr.StrictMode,{children:Oe.jsx(D9,{})}));
