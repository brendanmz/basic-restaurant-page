!function(e){var n={};function t(o){if(n[o])return n[o].exports;var c=n[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(o,c,function(n){return e[n]}.bind(null,c));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var o=t.p+"100598c49d07e76feea511d8cd4ec37b.jpg";const c=()=>{const e=(e,n,t,o)=>{let c=document.createElement("h4");c.innerHTML=e;let r=document.createElement("p");r.innerHTML=n;let a=document.createElement("p");a.innerHTML=t;let i=document.createElement("section");o.append(i),i.append(c,r,a)},n=document.createElement("h2");n.innerHTML="Menu";const t=document.querySelector("div#content"),o=document.createElement("article");o.id="menu",t.append(o),o.append(n);e("Tonkatsu Ramen","pork broth: pork chashu, kikurage, green onion, seasoned egg*, nori dried seaweed, red hot chili oil and spicy bean sprouts » served with thick noodles","$10",o),e("Chicken Ramen","chicken broth: chicken chashu, spinach, green onion and fried onion » served with thin noodles","$9",o),e("Veggie Ramen","vegetable broth: mushroom, baby leaf, spinach, asparagus, broccoli, cauliflower, cabbage and black pepper » served with thin noodles","$7.50",o)},r=()=>{const e=document.createElement("h2");e.innerHTML="About";const n=document.createElement("h4");n.innerHTML="Location";const t=document.createElement("p");t.innerHTML="985 Los Angeles Drive, Vancouver, Canada";const o=document.createElement("p");o.innerHTML="+1 (745) 836-1435";const c=document.createElement("section"),r=document.querySelector("div#content"),a=document.createElement("article");a.id="about",r.append(a),a.append(e,c),c.append(n,t,o)},a=()=>{const e=(e,n)=>{let t=document.createElement("p");t.innerHTML=e;const o=document.createElement("section");n.append(o),o.append(t)},n=document.createElement("h2");n.innerHTML="Testimonials";document.createElement("section");const t=document.querySelector("div#content"),o=document.createElement("article");o.id="testimonials",t.append(o),o.append(n),e('"This is the best ramen I\'ve ever had"<br>-BungoMan',o),e('"It\'s like heaven for your taste buds"<br>-ZingoZonger',o)};window.onload=function(){(()=>{const e=document.createElement("img");e.src=o;const n=document.createElement("h1");n.innerHTML="Ron's Ramen";const t=document.createElement("header");document.querySelector("div#content").append(t),t.append(e,n)})();const e=this.document.createElement("li");e.innerHTML="Menu";const n=this.document.createElement("li");n.innerHTML="Testimonials";const t=this.document.createElement("li");t.innerHTML="About";const i=this.document.createElement("ul"),u=this.document.createElement("nav");this.document.querySelector("div#content").append(u),u.append(i),i.append(e,n,t),c();const d=e=>{if(document.querySelector(e)){document.querySelector(e).remove()}},l=(e,n,t)=>{e.addEventListener("click",(function(){document.querySelector(n)||(d("#testimonials"),d("#about"),d("#menu"),t())}))};l(e,"#menu",c),l(n,"#testimonials",a),l(t,"#about",r)}}]);