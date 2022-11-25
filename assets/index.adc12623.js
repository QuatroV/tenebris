(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();const w={};let R=I;const b=1,y=2,G={owned:null,cleanups:null,context:null,owner:null};var a=null;let x=null,u=null,d=null,N=0;function j(e,s){const t=a,l=e.length===0,n=l?G:{owned:null,cleanups:null,context:null,owner:s||t},i=l?e:()=>e(()=>T(()=>P(n)));a=n;try{return v(i,!0)}finally{a=t}}function C(e,s,t){const l=K(e,s,!1,b);O(l)}function T(e){try{return e()}finally{}}function q(e,s,t){let l=e.value;return(!e.comparator||!e.comparator(l,s))&&(e.value=s,e.observers&&e.observers.length&&v(()=>{for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n],f=x&&x.running;f&&x.disposed.has(i),(f&&!i.tState||!f&&!i.state)&&(i.pure?u.push(i):d.push(i),i.observers&&M(i)),f||(i.state=b)}if(u.length>1e6)throw u=[],new Error},!1)),s}function O(e){if(!e.fn)return;P(e);const s=a,t=N;a=e,H(e,e.value,t),a=s}function H(e,s,t){let l;try{l=e.fn(s)}catch(n){e.pure&&(e.state=b),D(n)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?q(e,l):e.value=l,e.updatedAt=t)}function K(e,s,t,l=b,n){const i={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:s,owner:a,context:null,pure:t};return a===null||a!==G&&(a.owned?a.owned.push(i):a.owned=[i]),i}function U(e){const s=x;if(e.state===0||s)return;if(e.state===y||s)return E(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<N);)(e.state||s)&&t.push(e);for(let l=t.length-1;l>=0;l--)if(e=t[l],e.state===b||s)O(e);else if(e.state===y||s){const n=u;u=null,v(()=>E(e,t[0]),!1),u=n}}function v(e,s){if(u)return e();let t=!1;s||(u=[]),d?t=!0:d=[],N++;try{const l=e();return Q(t),l}catch(l){u||(d=null),D(l)}}function Q(e){if(u&&(I(u),u=null),e)return;const s=d;d=null,s.length&&v(()=>R(s),!1)}function I(e){for(let s=0;s<e.length;s++)U(e[s])}function E(e,s){const t=x;e.state=0;for(let l=0;l<e.sources.length;l+=1){const n=e.sources[l];n.sources&&(n.state===b||t?n!==s&&U(n):(n.state===y||t)&&E(n,s))}}function M(e){const s=x;for(let t=0;t<e.observers.length;t+=1){const l=e.observers[t];(!l.state||s)&&(l.state=y,l.pure?u.push(l):d.push(l),l.observers&&M(l))}}function P(e){let s;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),l=e.sourceSlots.pop(),n=t.observers;if(n&&n.length){const i=n.pop(),f=t.observerSlots.pop();l<n.length&&(i.sourceSlots[f]=l,n[l]=i,t.observerSlots[l]=f)}}if(e.owned){for(s=0;s<e.owned.length;s++)P(e.owned[s]);e.owned=null}if(e.cleanups){for(s=0;s<e.cleanups.length;s++)e.cleanups[s]();e.cleanups=null}e.state=0,e.context=null}function V(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function D(e){throw e=V(e),e}function W(e,s){return T(()=>e(s||{}))}function _(e,s,t){let l=t.length,n=s.length,i=l,f=0,o=0,r=s[n-1].nextSibling,c=null;for(;f<n||o<i;){if(s[f]===t[o]){f++,o++;continue}for(;s[n-1]===t[i-1];)n--,i--;if(n===f){const h=i<l?o?t[o-1].nextSibling:t[i-o]:r;for(;o<i;)e.insertBefore(t[o++],h)}else if(i===o)for(;f<n;)(!c||!c.has(s[f]))&&s[f].remove(),f++;else if(s[f]===t[i-1]&&t[o]===s[n-1]){const h=s[--n].nextSibling;e.insertBefore(t[o++],s[f++].nextSibling),e.insertBefore(t[--i],h),s[n]=t[i]}else{if(!c){c=new Map;let p=o;for(;p<i;)c.set(t[p],p++)}const h=c.get(s[f]);if(h!=null)if(o<h&&h<i){let p=f,A=1,L;for(;++p<n&&p<i&&!((L=c.get(s[p]))==null||L!==h+A);)A++;if(A>h-o){const F=s[f];for(;o<h;)e.insertBefore(t[o++],F)}else e.replaceChild(t[o++],s[f++])}else f++;else s[f++].remove()}}}function $(e,s,t,l={}){let n;return j(i=>{n=i,s===document?e():X(s,e(),s.firstChild?null:void 0,t)},l.owner),()=>{n(),s.textContent=""}}function J(e,s,t){const l=document.createElement("template");l.innerHTML=e;let n=l.content.firstChild;return t&&(n=n.firstChild),n}function X(e,s,t,l){if(t!==void 0&&!l&&(l=[]),typeof s!="function")return m(e,s,l,t);C(n=>m(e,s(),n,t),l)}function m(e,s,t,l,n){for(w.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(s===t)return t;const i=typeof s,f=l!==void 0;if(e=f&&t[0]&&t[0].parentNode||e,i==="string"||i==="number"){if(w.context)return t;if(i==="number"&&(s=s.toString()),f){let o=t[0];o&&o.nodeType===3?o.data=s:o=document.createTextNode(s),t=g(e,t,l,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=s:t=e.textContent=s}else if(s==null||i==="boolean"){if(w.context)return t;t=g(e,t,l)}else{if(i==="function")return C(()=>{let o=s();for(;typeof o=="function";)o=o();t=m(e,o,t,l)}),()=>t;if(Array.isArray(s)){const o=[],r=t&&Array.isArray(t);if(S(o,s,t,n))return C(()=>t=m(e,o,t,l,!0)),()=>t;if(w.context){if(!o.length)return t;for(let c=0;c<o.length;c++)if(o[c].parentNode)return t=o}if(o.length===0){if(t=g(e,t,l),f)return t}else r?t.length===0?B(e,o,l):_(e,t,o):(t&&g(e),B(e,o));t=o}else if(s instanceof Node){if(w.context&&s.parentNode)return t=f?[s]:s;if(Array.isArray(t)){if(f)return t=g(e,t,l,s);g(e,t,null,s)}else t==null||t===""||!e.firstChild?e.appendChild(s):e.replaceChild(s,e.firstChild);t=s}}return t}function S(e,s,t,l){let n=!1;for(let i=0,f=s.length;i<f;i++){let o=s[i],r=t&&t[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))n=S(e,o,r)||n;else if(typeof o=="function")if(l){for(;typeof o=="function";)o=o();n=S(e,Array.isArray(o)?o:[o],Array.isArray(r)?r:[r])||n}else e.push(o),n=!0;else{const c=String(o);r&&r.nodeType===3&&r.data===c?e.push(r):e.push(document.createTextNode(c))}}return n}function B(e,s,t=null){for(let l=0,n=s.length;l<n;l++)e.insertBefore(s[l],t)}function g(e,s,t,l){if(t===void 0)return e.textContent="";const n=l||document.createTextNode("");if(s.length){let i=!1;for(let f=s.length-1;f>=0;f--){const o=s[f];if(n!==o){const r=o.parentNode===e;!i&&!f?r?e.replaceChild(n,o):e.insertBefore(n,t):r&&o.remove()}else i=!0}}else e.insertBefore(n,t);return[n]}const Y=J(`<div class="h-screen p-4 main-menu-bg"><div class=" h-full border-4 border-purple-900 flex items-center justify-center"><div class="flex flex-col items-center animate-slow-shake"><img src="src/assets/skull.png" class="h-24 mb-4"><h1 class="text-7xl text-yellow-400 drop-shadow font-GothicPixels font-extralight mb-4 before:content-['Tenebris'] before:absolute before:text-black before:-z-10 before:left-1 before:top-1">Tenebris</h1><div class="flex flex-col items-center gap-1"><span class="text-yellow-500 text-2xl font-GothicPixels  cursor-pointer before:absolute before:-ml-7 hover:before:content-['\u2B9E'] after:absolute after:ml-1 hover:after:content-['\u2B9C'] hover:scale-105 transition-all active:text-yellow-600">Proelium</span><span class="text-yellow-500 text-2xl font-GothicPixels  cursor-pointer before:absolute before:-ml-7 hover:before:content-['\u2B9E'] after:absolute after:ml-1 hover:after:content-['\u2B9C'] hover:scale-105 transition-all active:text-yellow-600">Creatio</span><span class="text-yellow-500 text-2xl font-GothicPixels  cursor-pointer before:absolute before:-ml-7 hover:before:content-['\u2B9E'] after:absolute after:ml-1 hover:after:content-['\u2B9C'] hover:scale-105 transition-all active:text-yellow-600">Monstrorum Liber</span><span class="text-yellow-500 text-2xl font-GothicPixels  cursor-pointer before:absolute before:-ml-7 hover:before:content-['\u2B9E'] after:absolute after:ml-1 hover:after:content-['\u2B9C'] hover:scale-105 transition-all active:text-yellow-600">Tabernam</span></div></div></div></div>`),Z=()=>Y.cloneNode(!0);$(()=>W(Z,{}),document.getElementById("root"));