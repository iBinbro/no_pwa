if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const t=e=>a(e,r),o={module:{uri:r},exports:c,require:t};s[r]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(n(...e),c)))}}define(["./workbox-40f4d517"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.BCo6x5W8.js",revision:null},{url:"assets/home_logo-CjSen4bA.png",revision:null},{url:"assets/home-Cm6sxd6G.css",revision:null},{url:"assets/index-BfMzIiZw.css",revision:null},{url:"assets/index-Bw57TKjO.js",revision:null},{url:"assets/login-3Pwqj77P.css",revision:null},{url:"assets/pages-login-login.CjTxue6I.js",revision:null},{url:"assets/pages-splash-splash.PoPKBYY9.js",revision:null},{url:"assets/pages-tab_bar-discovery-discovery.B9WTc_9C.js",revision:null},{url:"assets/pages-tab_bar-home-home.DdBrXVGX.js",revision:null},{url:"assets/pages-tab_bar-match-match.B9WTc_9C.js",revision:null},{url:"assets/pages-tab_bar-mine-mine.B9WTc_9C.js",revision:null},{url:"assets/pages-tab_bar-msg-msg.B9WTc_9C.js",revision:null},{url:"assets/splash-BJohsPtu.css",revision:null},{url:"assets/uni.ad9beac9.css",revision:null},{url:"index.html",revision:"ea9976b784a5e8278165c5109cb83533"},{url:"registerSW.js",revision:"e5ba9df65dc2473ca2842a38e8b494c0"},{url:"static/common/arrow_down.png",revision:"eef788642b6f1a8a597c403ae8e6059a"},{url:"static/common/call.png",revision:"7d34ad5385fe69b51b9ef2ea28b1cb83"},{url:"static/common/global.png",revision:"c2ff20ac2d982cd1527ce5cbe919353b"},{url:"static/common/linebusy.png",revision:"71f615da74298f27610332e941756072"},{url:"static/common/lineoff.png",revision:"dc30183d71257a2c065b3e5ab32973e1"},{url:"static/common/lineon.png",revision:"5eac3b740b0d98c90d8966aac8dbd27b"},{url:"static/common/logo.svg",revision:"535a7d35d0443a65c958c8480242b265"},{url:"static/common/msg.png",revision:"4449cf88a68e08476905db82e9bb877e"},{url:"static/login/apple.png",revision:"3d29d8a30e52d957b01b7951d45af154"},{url:"static/login/checkBox.png",revision:"f8363907ae9256b15c006d0ab33ebad6"},{url:"static/login/checkBoxS.png",revision:"58e77b022d4dc6ba5b6c2723f0f38dcd"},{url:"static/login/google.png",revision:"b0fe0a738939f49657d06b4c83f5265e"},{url:"static/splash/splash.png",revision:"8a09d13d525423596928da30f9e1413e"},{url:"static/tab_bar/discovery_s.png",revision:"76fdf8bb44dfe12581470bb45b10cac2"},{url:"static/tab_bar/discovery.png",revision:"24a2aaf5e990e0bc2fc1c01657c93531"},{url:"static/tab_bar/home_s.png",revision:"d87a642110320f3231e172c834d0c6e3"},{url:"static/tab_bar/home.png",revision:"f2505714612ecf63255248a8d8f4c26e"},{url:"static/tab_bar/home/home_logo.png",revision:"fae37f1cc79cd8cf9ec9968f2698368f"},{url:"static/tab_bar/match_s.png",revision:"4d425c370fd59bb507393d0e415442df"},{url:"static/tab_bar/match.png",revision:"fec8c15b12581aca2943effb7c020345"},{url:"static/tab_bar/mine_s.png",revision:"65d2ca83020ed5a9784f4648c608796e"},{url:"static/tab_bar/mine.png",revision:"6017d939209cbea033a2a7feb35920fc"},{url:"static/tab_bar/msg_s.png",revision:"adbcdd8822ea15b6010de3467dd1f3ef"},{url:"static/tab_bar/msg.png",revision:"0f5de025552a10e4c3271c0d4dc52ce0"},{url:"manifest.webmanifest",revision:"92dc46187d6b11c8dc27b9a0658f57be"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({url:e})=>"https://app-api.id"===e.origin),new e.NetworkFirst({cacheName:"wisbayar-api",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"wisbayar-images",plugins:[new e.ExpirationPlugin({maxEntries:30})]}),"GET"),e.registerRoute(/.*\.js.*/,new e.StaleWhileRevalidate({cacheName:"wisbayar-js",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/.*\.css.*/,new e.StaleWhileRevalidate({cacheName:"wisbayar-css",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/.*\.html.*/,new e.StaleWhileRevalidate({cacheName:"wisbayar-html",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));
