import{F as k,S as x,i as _,s as h,e as g,c as y,a as v,d as c,g as w,G as z,H as S,I as j,r as p,J as R,p as u,K as N,k as M,l as b,L as C,m as F,b as d,M as I,q as E,N as q,O as A,o as K,n as L}from"../chunks/index-4316d6fd.js";function f(n,{delay:o=0,duration:i=400,easing:l=k}={}){const r=+getComputedStyle(n).opacity;return{delay:o,duration:i,easing:l,css:s=>`opacity: ${s*r}`}}function m(n){let o,i,l,r;const s=n[2].default,e=q(s,n,n[1],null);return{c(){o=g("main"),e&&e.c()},l(t){o=y(t,"MAIN",{});var a=v(o);e&&e.l(a),a.forEach(c)},m(t,a){w(t,o,a),e&&e.m(o,null),r=!0},p(t,a){e&&e.p&&(!r||a&2)&&z(e,s,t,t[1],r?j(s,t[1],a,null):S(t[1]),null)},i(t){r||(p(e,t),R(()=>{l&&l.end(1),i=A(o,f,{duration:150,delay:150}),i.start()}),r=!0)},o(t){u(e,t),i&&i.invalidate(),l=N(o,f,{duration:150}),r=!1},d(t){t&&c(o),e&&e.d(t),t&&l&&l.end()}}}function U(n){let o,i,l=n[0],r,s,e=m(n);return{c(){o=g("link"),i=M(),e.c(),r=b(),this.h()},l(t){const a=C('[data-svelte="svelte-1arag7i"]',document.head);o=y(a,"LINK",{rel:!0,href:!0,type:!0}),a.forEach(c),i=F(t),e.l(t),r=b(),this.h()},h(){document.title="Kleidi Bujari",d(o,"rel","shortcut icon"),d(o,"href","/icon.png"),d(o,"type","image/x-icon")},m(t,a){I(document.head,o),w(t,i,a),e.m(t,a),w(t,r,a),s=!0},p(t,[a]){a&1&&h(l,l=t[0])?(K(),u(e,1,1,L),E(),e=m(t),e.c(),p(e,1),e.m(r.parentNode,r)):e.p(t,a)},i(t){s||(p(e),s=!0)},o(t){u(e),s=!1},d(t){c(o),t&&c(i),t&&c(r),e.d(t)}}}const G=({url:n})=>({props:{currentRoute:n.pathname}});function B(n,o,i){let{$$slots:l={},$$scope:r}=o,{currentRoute:s}=o;return n.$$set=e=>{"currentRoute"in e&&i(0,s=e.currentRoute),"$$scope"in e&&i(1,r=e.$$scope)},[s,r,l]}class J extends x{constructor(o){super(),_(this,o,B,U,h,{currentRoute:0})}}export{J as default,G as load};
