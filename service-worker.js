"use strict";var precacheConfig=[["/cv-aero/index.html","a510f889791addf359d6c7cf76269ac2"],["/cv-aero/static/css/main.ccacf492.css","d89675ea308a5c8869b06bfc6a36d8cb"],["/cv-aero/static/js/main.ff51811e.js","5a19dcf37918c23483ad128dd336b4b3"],["/cv-aero/static/media/Dosis-Bold.3fdafce4.otf","3fdafce42b8fc3827c880779176daeed"],["/cv-aero/static/media/Dosis-Regular.62edbe8d.otf","62edbe8db877667d703a63578e63d853"],["/cv-aero/static/media/a320pfd.ffce2dfb.woff","ffce2dfb0392d2c8d4caebcc1fef29b7"],["/cv-aero/static/media/cravate.1c2779aa.svg","1c2779aaba7292cb6fdad16adfe1664d"],["/cv-aero/static/media/education.a558bb19.svg","a558bb19b6e36780187555535fb1a563"],["/cv-aero/static/media/pfd.05e5845b.png","05e5845bdd3380d6d2523f6b4479497b"],["/cv-aero/static/media/photo_identite.a0be088f.jpg","a0be088f3ef5645847c33f9250049b94"],["/cv-aero/static/media/planeur.dcff34a7.svg","dcff34a7fc821309b8b3f8b6d72821b1"],["/cv-aero/static/media/sports.f2d7e194.svg","f2d7e19495228666b2641193b2d2528d"],["/cv-aero/static/media/uk.eb1ef5dc.svg","eb1ef5dc8966c0c7434477ddba12f6f5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/cv-aero/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});