!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=31)}({0:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"f",(function(){return u}));const r=(e,t)=>e&&t?`${e}_${t}`:"",s=(e,t)=>`${e}#channel:${t}`,i=(e,t,n)=>{if(e.length<t.length)return"";const r=e.indexOf(t);if(-1===r)return"";const s=r+t.length,i=e.indexOf(n,s);let o="";return i!==s?o=-1!==i&&i>s||-1!==i?e.substring(s,i):e.substring(s):""===n&&(o=e.substring(s)),o},o=(e,t)=>{const n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==t[s])return!1}return!0},a=()=>"complete"===document.readyState&&"visible"===document.visibilityState,u=(e,t)=>`${e}: ${t.statusText} (${t.status})`},1:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));let r=null;const s=()=>r,i=e=>{r?e(!0):(chrome.runtime.sendMessage("mnojpmjdmbbfmejpflffifhffcmidifd",{type:"SupportsGreaselion"},(function(t){if(!chrome.runtime.lastError&&t&&t.supported)return r=chrome.runtime.connect("mnojpmjdmbbfmejpflffifhffcmidifd",{name:"Greaselion"}),void e(!0)})),setTimeout(()=>{if(!r)return r=chrome.runtime.connect("jidkidbbcafjabdphckchenhfomhnfma",{name:"Greaselion"}),void e(!0)},100))},o=(e,t)=>{e&&r&&r.postMessage({type:"GreaselionError",mediaType:e,data:{errorMessage:t}})}},14:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(0);const s=["authorization","x-csrf-token","x-guest-token"],i=/[; ]_twitter_sess=([^\s;]*)/;let o=null,a={};const u=e=>{if(!e)return null;const t=e.match(i);return t?unescape(t[1]):null},c=()=>a,d=()=>a.authorization&&(a["x-csrf-token"]&&a["x-twitter-auth-type"]||a["x-csrf-token"]&&a["x-guest-token"]),f=e=>{if(!e)return!1;let t={};for(const n of e)if("Cookie"===n.name){const e=u(n.value);e!==o&&(o=e,t={})}else(s.includes(n.name)||n.name.startsWith("x-twitter-"))&&(t[n.name]=n.value);return"yes"!==t["x-twitter-active-user"]&&(t["x-twitter-active-user"]="yes"),!r.a(a,t)&&(a=t,!0)}},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return o}));const r=(e,t)=>e?t?`https://twitter.com/intent/user?user_id=${t}&screen_name=${e}`:`https://twitter.com/${e}/`:"",s=(e,t)=>{if(!e)return null;if(!t)return e.getAttribute("data-tweet-id");const n=e.querySelector("a[href*='/status/']");if(!n||!n.href)return null;const r=n.href.match(/status\/(\d+)/);return!r||r.length<2?null:r[1]},i=e=>{const t=new URLSearchParams(e.search);if(!t)return"";const n=t.get("screen_name");if(n)return unescape(n);if(!e.pathname)return"";const r=e.pathname.split("/").filter(e=>e);return r&&0!==r.length?r[0]:""},o=e=>{if(["/","/about","/home","/login","/logout","/messages","/privacy","/search","/settings","/tos"].includes(e))return!0;const t=["/account/","/compose/","/explore","/hashtag/","/i/","/messages/","/notifications","/settings/","/who_to_follow/","/?login","/?logout"];for(const n of t)if(e.startsWith(n))return!0;return!1}},16:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n(1);let s=!1,i=!1;const o=(e,t,n)=>{if(!e||s)return;s=!0;const i=Object(r.b)();i&&(i.postMessage({type:"RegisterOnCompletedWebRequest",mediaType:e,data:{urlPatterns:[t]}}),i.onMessage.addListener(e=>{switch(e.type){case"OnCompletedWebRequest":n(e.mediaType,e.details)}}))},a=(e,t,n,s)=>{if(!e||i)return;i=!0;const o=Object(r.b)();o&&(o.postMessage({type:"RegisterOnSendHeadersWebRequest",mediaType:e,data:{urlPatterns:t,extra:n}}),o.onMessage.addListener((function(e){if(e.data)switch(e.type){case"OnSendHeadersWebRequest":s(e.mediaType,e.data.details)}})))}},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c}));var r=n(1),s=n(14),i=n(5);let o=0;const a=(e,t)=>new Promise((n,a)=>{if(!e||!t)return void a(new Error("Invalid parameters"));if(!Object(s.b)())return void a(new Error("Missing auth headers"));const u=Object(r.b)();if(!u)return void a(new Error("Invalid port"));if(0!==o&&Date.now()-o<3e3)return void a(new Error("Ignoring API request due to network throttle"));o=Date.now();const c=Object(s.a)();u.postMessage({type:"OnAPIRequest",mediaType:i.b,data:{name:e,url:t,init:{credentials:"include",headers:{...c},referrerPolicy:"no-referrer-when-downgrade",method:"GET",redirect:"follow"}}}),u.onMessage.addListener((function t(r){if(u){if(!r||!r.data)return u.onMessage.removeListener(t),void a(new Error("Invalid message"));if("OnAPIResponse"===r.type){if(!r.data.name||!r.data.response&&!r.data.error)return u.onMessage.removeListener(t),void a(new Error("Invalid message"));if(r.data.name===e)return u.onMessage.removeListener(t),r.data.error?void a(new Error(r.data.error)):void n(r.data.response)}}else a(new Error("Invalid port"))}))}),u=async e=>{if(!e)return Promise.reject(new Error("Invalid parameters"));return a("GetTweetDetails","https://api.twitter.com/1.1/statuses/show.json?id="+e)},c=async e=>{if(!e)return Promise.reject(new Error("Invalid parameters"));return a("GetUserDetails","https://api.twitter.com/1.1/users/show.json?screen_name="+e)}},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1);let s=!1;const i=(e,t)=>{if(!e||s)return;s=!0;const n=Object(r.b)();n&&(n.postMessage({type:"RegisterOnUpdatedTab",mediaType:e}),n.onMessage.addListener((function(e){if(e.data)switch(e.type){case"OnUpdatedTab":t(e.data.changeInfo)}})))}},31:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n(14);var i=n(0),o=n(21),a=n(5),u=n(15);const c=new class{constructor(e){this.values=new Map,this.maxEntries=e}get(e){if(!e)return null;const t=this.values.get(e);return t?(this.values.delete(e),this.values.set(e,t),t):null}put(e,t){if(this.values.size>=this.maxEntries){const e=this.values.keys().next().value;this.values.delete(e)}this.values.set(e,t)}}(128),d=(e,t)=>{if(!e||!t)return;const n=t.id_str,s=i.c(a.b,n),o=e,c=i.b(a.b,e),d=t.profile_image_url_https.replace("_normal",""),f=u.a(e,n),l=Object(r.b)();l&&l.postMessage({type:"SavePublisherVisit",mediaType:a.b,data:{url:f,publisherKey:s,publisherName:o,mediaKey:c,favIconUrl:d}})},f=()=>{const e=new URL(location.href);u.d(e.pathname)?(()=>{const e="https://"+a.a,t=a.a,n=a.a,s=Object(r.b)();s&&s.postMessage({type:"SavePublisherVisit",mediaType:"",data:{url:e,publisherKey:t,publisherName:n,mediaKey:"",favIconUrl:""}})})():(e=>{const t=u.b(e);if(!t)return;const n=c.get(t);n?d(t,n):o.b(t).then(e=>{c.put(t,e),d(t,e)}).catch(e=>{console.error(`Failed to fetch user details for ${t}: ${e.message}`)})})(e)};var l=n(3),p=n(16);const m=(e,t)=>{e===a.b&&t&&t.requestHeaders&&s.c(t.requestHeaders)&&f()},h=e=>{e&&e.url&&f()};chrome.extension.inIncognitoContext||(Object(r.a)(e=>{e?(i.d()?f():document.addEventListener("readystatechange",(function(){i.d()&&f()})),document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState&&f()})),p.b(a.b,a.d,a.c,m),l.a(a.b,h)):console.error("Failed to initialize communications port")}),console.info("Greaselion script loaded: twitterBase.ts"))},5:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return o}));const r="twitter",s="twitter.com",i=["https://api.twitter.com/1.1/*"],o=["requestHeaders","extraHeaders"]}});