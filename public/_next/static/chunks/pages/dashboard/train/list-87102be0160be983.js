(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[839],{3162:function(e,t,a){var r,s;void 0!==(s="function"==typeof(r=function(){"use strict";function t(e,t,a){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){i(r.response,t,a)},r.onerror=function(){console.error("could not download file")},r.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function s(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a.g&&a.g.global===a.g?a.g:void 0,o=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),i=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(e,a,o){var i=n.URL||n.webkitURL,d=document.createElement("a");a=a||e.name||"download",d.download=a,d.rel="noopener","string"==typeof e?(d.href=e,d.origin===location.origin?s(d):r(d.href)?t(e,a,o):s(d,d.target="_blank")):(d.href=i.createObjectURL(e),setTimeout(function(){i.revokeObjectURL(d.href)},4e4),setTimeout(function(){s(d)},0))}:"msSaveOrOpenBlob"in navigator?function(e,a,n){if(a=a||e.name||"download","string"!=typeof e){var o;navigator.msSaveOrOpenBlob((void 0===(o=n)?o={autoBom:!1}:"object"!=typeof o&&(console.warn("Deprecated: Expected third argument to be a object"),o={autoBom:!o}),o.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e),a)}else if(r(e))t(e,a,n);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout(function(){s(i)})}}:function(e,a,r,s){if((s=s||open("","_blank"))&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof e)return t(e,a,r);var i="application/octet-stream"===e.type,d=/constructor/i.test(n.HTMLElement)||n.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&d||o)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=e:location=e,s=null},c.readAsDataURL(e)}else{var u=n.URL||n.webkitURL,f=u.createObjectURL(e);s?s.location=f:location.href=f,s=null,setTimeout(function(){u.revokeObjectURL(f)},4e4)}});n.saveAs=i.saveAs=i,e.exports=i})?r.apply(t,[]):r)&&(e.exports=s)},8850:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/train/list",function(){return a(578)}])},2561:function(e,t,a){"use strict";a.d(t,{O:function(){return n}});var r=a(5893),s=a(2676);function n(e){let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,s.cn)("animate-pulse rounded-md bg-gray-100 dark:bg-gray-800",t),...a})}},6597:function(e,t,a){"use strict";a.d(t,{RM:function(){return d},SC:function(){return l},iA:function(){return o},pj:function(){return u},ss:function(){return c},xD:function(){return i}});var r=a(5893),s=a(7294),n=a(2676);let o=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{className:"relative w-full overflow-auto",children:(0,r.jsx)("table",{ref:t,className:(0,n.cn)("w-full caption-bottom text-sm",a),...s})})});o.displayName="Table";let i=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("thead",{ref:t,className:(0,n.cn)("[&_tr]:border-b",a),...s})});i.displayName="TableHeader";let d=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,n.cn)("[&_tr:last-child]:border-0",a),...s})});d.displayName="TableBody",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,n.cn)("border-t bg-gray-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-gray-800/50",a),...s})}).displayName="TableFooter";let l=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tr",{ref:t,className:(0,n.cn)("transition-colors border-b border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 data-[state=selected]:bg-gray-100 dark:hover:bg-gray-800/50 dark:data-[state=selected]:bg-gray-800",a),...s})});l.displayName="TableRow";let c=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("th",{ref:t,className:(0,n.cn)("h-12 px-4 text-left align-middle font-medium text-gray-500 [&:has([role=checkbox])]:pr-0 dark:text-gray-400",a),...s})});c.displayName="TableHead";let u=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("td",{ref:t,className:(0,n.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...s})});u.displayName="TableCell",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("caption",{ref:t,className:(0,n.cn)("mt-4 text-sm text-gray-500 dark:text-gray-400",a),...s})}).displayName="TableCaption"},8577:function(e,t,a){"use strict";a.d(t,{x:function(){return y}});var r=a(5893),s=a(7294),n=a(7626),o=a(5139),i=a(1352),d=a(2676);let l=n.zt,c=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.l_,{ref:t,className:(0,d.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",a),...s})});c.displayName=n.l_.displayName;let u=(0,o.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-gray-200 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-gray-800",{variants:{variant:{default:"border bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50",destructive:"destructive group border-red-500 bg-red-500 text-gray-50 dark:border-red-900 dark:bg-red-900 dark:text-gray-50"}},defaultVariants:{variant:"default"}}),f=s.forwardRef((e,t)=>{let{className:a,variant:s,...o}=e;return(0,r.jsx)(n.fC,{ref:t,className:(0,d.cn)(u({variant:s}),a),...o})});f.displayName=n.fC.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.aU,{ref:t,className:(0,d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-gray-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-gray-50 group-[.destructive]:focus:ring-red-500 dark:border-gray-800 dark:ring-offset-gray-950 dark:hover:bg-gray-800 dark:focus:ring-gray-300 dark:group-[.destructive]:border-gray-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-gray-50 dark:group-[.destructive]:focus:ring-red-900",a),...s})}).displayName=n.aU.displayName;let p=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.x8,{ref:t,className:(0,d.cn)("absolute right-2 top-2 rounded-md p-1 text-gray-950/50 opacity-0 transition-opacity hover:text-gray-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-gray-50/50 dark:hover:text-gray-50",a),"toast-close":"",...s,children:(0,r.jsx)(i.Z,{className:"h-4 w-4"})})});p.displayName=n.x8.displayName;let m=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.Dx,{ref:t,className:(0,d.cn)("text-sm font-semibold",a),...s})});m.displayName=n.Dx.displayName;let g=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.dk,{ref:t,className:(0,d.cn)("text-sm opacity-90",a),...s})});g.displayName=n.dk.displayName;var x=a(1186);function y(){let{toasts:e}=(0,x.pm)();return(0,r.jsxs)(l,{children:[e.map(function(e){let{id:t,title:a,description:s,action:n,...o}=e;return(0,r.jsxs)(f,{...o,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[a&&(0,r.jsx)(m,{children:a}),s&&(0,r.jsx)(g,{children:s})]}),n,(0,r.jsx)(p,{})]},t)}),(0,r.jsx)(c,{})]})}},1186:function(e,t,a){"use strict";a.d(t,{Am:function(){return u},pm:function(){return f}});var r=a(7294);let s=0,n=new Map,o=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:a}=t;return a?o(a):e.toasts.forEach(e=>{o(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},d=[],l={toasts:[]};function c(e){l=i(l,e),d.forEach(e=>{e(l)})}function u(e){let{...t}=e,a=(s=(s+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>c({type:"DISMISS_TOAST",toastId:a});return c({type:"ADD_TOAST",toast:{...t,id:a,open:!0,onOpenChange:e=>{e||r()}}}),{id:a,dismiss:r,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:a}})}}function f(){let[e,t]=r.useState(l);return r.useEffect(()=>(d.push(t),()=>{let e=d.indexOf(t);e>-1&&d.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},578:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var r=a(5893),s=a(7294),n=a(3044),o=a(8577),i=a(7249),d=a(2469),l=a(3749),c=a(5121),u=a(6597),f=a(2561),p=a(3162);let m=e=>{let{title:t,id:a,getResultList:n}=e,[o,l]=(0,s.useState)(!1),[f,m]=(0,s.useState)(!1),g=async()=>{l(!0);try{let e=await c.Z.get("/bot/id?id="+a);if(200===e.status){let a=e.data.data.bot_script,r=new Blob([a],{type:"text/plain;charset=utf-8"});(0,p.saveAs)(r,"".concat(t,".py"))}}catch(e){}l(!1)},x=async()=>{m(!0);try{let e=await c.Z.post("/bot/delete",{id:a});if(200===e.status){n();return}}catch(e){}m(!1)};return(0,r.jsxs)(u.SC,{children:[(0,r.jsx)(u.pj,{className:"text-sm text-gray-500 dark:text-gray-400",children:t}),(0,r.jsxs)(u.pj,{className:"flex flex-row items-center justify-center gap-4",children:[(0,r.jsx)(i.z,{variant:"outline",size:"icon",onClick:g,disabled:o,children:o?(0,r.jsx)(d.BGW,{className:"mr-2 h-4 w-4 animate-spin"}):(0,r.jsx)(d._8t,{className:"h-4 w-4"})}),(0,r.jsx)(i.z,{variant:"outline",size:"icon",onClick:x,disabled:f,children:f?(0,r.jsx)(d.BGW,{className:"mr-2 h-4 w-4 animate-spin"}):(0,r.jsx)(d.XHJ,{className:"h-4 w-4"})})]})]})};function g(){let[e,t]=(0,s.useState)([]),[a,i]=(0,s.useState)(!1);async function d(){i(!0);try{let e=await c.Z.get("/bot");e.data.data&&t(e.data.data)}catch(e){}i(!1)}return(0,s.useEffect)(()=>{d()},[]),(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(o.x,{}),(0,r.jsx)("div",{className:"w-full h-full flex justify-center items-start",children:(0,r.jsxs)(l.Zb,{className:"w-full max-w-2xl",children:[(0,r.jsx)(l.Ol,{children:(0,r.jsx)(l.ll,{className:"text-xl",children:"Bot List"})}),(0,r.jsx)(l.aY,{className:"flex",children:a?(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)(f.O,{className:"h-[50px] w-full rounded-xl mb-2"}),(0,r.jsx)(f.O,{className:"h-[250px] w-full rounded-xl"})]}):(0,r.jsxs)(u.iA,{children:[(0,r.jsx)(u.xD,{children:(0,r.jsxs)(u.SC,{className:"bg-gray-300 dark:bg-gray-900",children:[(0,r.jsx)(u.ss,{className:"text-lg text-gray-700 dark:text-gray-100 capitalize",children:"Bot Name"}),(0,r.jsx)(u.ss,{className:"text-center text-lg text-gray-700 dark:text-gray-100 capitalize",children:"Action"})]})}),(0,r.jsx)(u.RM,{children:e.map(e=>(0,r.jsx)(m,{title:e.name,id:e.id,getResultList:d},e.id))})]})})]})})]})}}},function(e){e.O(0,[409,570,504,648,443,888,774,179],function(){return e(e.s=8850)}),_N_E=e.O()}]);