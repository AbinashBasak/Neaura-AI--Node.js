(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{6117:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t(7170)}])},6597:function(e,a,t){"use strict";t.d(a,{RM:function(){return i},SC:function(){return c},iA:function(){return n},pj:function(){return x},ss:function(){return o},xD:function(){return d}});var r=t(5893),s=t(7294),l=t(2676);let n=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{className:"relative w-full overflow-auto",children:(0,r.jsx)("table",{ref:a,className:(0,l.cn)("w-full caption-bottom text-sm",t),...s})})});n.displayName="Table";let d=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("thead",{ref:a,className:(0,l.cn)("[&_tr]:border-b",t),...s})});d.displayName="TableHeader";let i=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("tbody",{ref:a,className:(0,l.cn)("[&_tr:last-child]:border-0",t),...s})});i.displayName="TableBody",s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("tfoot",{ref:a,className:(0,l.cn)("border-t bg-gray-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-gray-800/50",t),...s})}).displayName="TableFooter";let c=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("tr",{ref:a,className:(0,l.cn)("transition-colors border-b border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 data-[state=selected]:bg-gray-100 dark:hover:bg-gray-800/50 dark:data-[state=selected]:bg-gray-800",t),...s})});c.displayName="TableRow";let o=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("th",{ref:a,className:(0,l.cn)("h-12 px-4 text-left align-middle font-medium text-gray-500 [&:has([role=checkbox])]:pr-0 dark:text-gray-400",t),...s})});o.displayName="TableHead";let x=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("td",{ref:a,className:(0,l.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...s})});x.displayName="TableCell",s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("caption",{ref:a,className:(0,l.cn)("mt-4 text-sm text-gray-500 dark:text-gray-400",t),...s})}).displayName="TableCaption"},7170:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return q},metadata:function(){return T}});var r=t(5893),s=t(3749),l=t(5121),n=t(7294),d=t(8451),i=t(4347),c=t(3023),o=t(5358),x=t(8242);function u(){let[e,a]=(0,n.useState)([]),t=async()=>{try{let e=await l.Z.get("/query/group");if(200===e.status&&e.data.data){let t=[];Object.keys(e.data.data).forEach(a=>{t.push({name:a,total:e.data.data[a]})}),a(t)}}catch(e){}};return(0,n.useEffect)(()=>{t()},[]),(0,r.jsx)(d.h,{width:"100%",height:350,children:(0,r.jsxs)(i.v,{data:e,children:[(0,r.jsx)(c.K,{dataKey:"name",stroke:"#888888",fontSize:12,tickLine:!1,axisLine:!1}),(0,r.jsx)(o.B,{stroke:"#888888",fontSize:12,tickLine:!1,axisLine:!1}),(0,r.jsx)(x.$,{dataKey:"total",fill:"currentColor",radius:[4,4,0,0],className:"fill-primary"})]})})}var f=t(5443),m=t(2676);let h=n.forwardRef((e,a)=>{let{className:t,children:s,...l}=e;return(0,r.jsxs)(f.fC,{ref:a,className:(0,m.cn)("relative overflow-hidden",t),...l,children:[(0,r.jsx)(f.l_,{className:"h-full w-full rounded-[inherit] overflow-scroll",style:{overflow:"auto"},children:s}),(0,r.jsx)(j,{}),(0,r.jsx)(f.Ns,{})]})});h.displayName=f.fC.displayName;let j=n.forwardRef((e,a)=>{let{className:t,orientation:s="vertical",...l}=e;return(0,r.jsx)(f.gb,{ref:a,orientation:s,className:(0,m.cn)("flex touch-none select-none transition-colors","vertical"===s&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===s&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",t),...l,children:(0,r.jsx)(f.q4,{className:"relative flex-1 rounded-full bg-gray-200 dark:bg-gray-800"})})});j.displayName=f.gb.displayName;var g=t(7249),y=t(2469),p=t(4464),b=t(1163),N=t(6597),v=t(3162);let w=async(e,a)=>{let t=new Blob([a],{type:"text/plain;charset=utf-8"});(0,v.saveAs)(t,e)},k=e=>{let{title:a,token:t,groupId:s}=e,[d,i]=(0,n.useState)(!1),c=(0,b.useRouter)(),o=async()=>{i(!0);try{var e,a,t,r,n,d;let i=await l.Z.get("/query/group-id?groupid=".concat(s));if(!i.data.data)return;(null===(a=i.data.data.remidiaotion)||void 0===a?void 0:null===(e=a.result)||void 0===e?void 0:e.length)&&w("remidiaotion-".concat(i.data.data.remidiaotion.name,"-").concat(i.data.data.remidiaotion.token,".json"),i.data.data.remidiaotion.result),(null===(r=i.data.data.rules)||void 0===r?void 0:null===(t=r.result)||void 0===t?void 0:t.length)&&w("rules-".concat(i.data.data.rules.name,"-").concat(i.data.data.rules.token,".json"),i.data.data.rules.result),(null===(d=i.data.data.sql)||void 0===d?void 0:null===(n=d.result)||void 0===n?void 0:n.length)&&w("sql-".concat(i.data.data.sql.name,"-").concat(i.data.data.sql.token,".json"),i.data.data.sql.result)}catch(e){}i(!1)};return(0,r.jsxs)(N.SC,{children:[(0,r.jsx)(N.pj,{className:"text-sm text-gray-500 dark:text-gray-400",children:a}),(0,r.jsx)(N.pj,{className:"text-sm text-gray-500 dark:text-gray-400",children:t}),(0,r.jsxs)(N.pj,{className:"flex flex-row items-center justify-center gap-4",children:[(0,r.jsx)(g.z,{variant:"outline",size:"icon",onClick:()=>c.push("/dashboard/query/view?groupId=".concat(s)),children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)(g.z,{variant:"outline",size:"icon",onClick:o,disabled:d,children:d?(0,r.jsx)(y.BGW,{className:"mr-2 h-4 w-4 animate-spin"}):(0,r.jsx)(y._8t,{className:"h-4 w-4"})})]})]})};function _(){let[e,a]=(0,n.useState)([]);return(0,n.useEffect)(()=>{(async function(){try{let e=await l.Z.get("/query?limit=10");e.data.data&&a(e.data.data)}catch(e){}})()},[]),(0,r.jsx)(h,{className:"h-[348px]",children:(0,r.jsxs)(N.iA,{children:[(0,r.jsx)(N.xD,{children:(0,r.jsxs)(N.SC,{className:"bg-gray-300 dark:bg-gray-900",children:[(0,r.jsx)(N.ss,{className:"text-lg text-gray-700 dark:text-gray-100 capitalize",children:"Name"}),(0,r.jsx)(N.ss,{className:"text-lg text-gray-700 dark:text-gray-100 capitalize",children:"Token"}),(0,r.jsx)(N.ss,{className:"text-center text-lg text-gray-700 dark:text-gray-100 capitalize",children:"Action"})]})}),(0,r.jsx)(N.RM,{children:e.map(e=>(0,r.jsx)(k,{title:e.name,token:e.token,groupId:e.group_id},e.id))})]})})}var R=t(3044);let T={title:"Dashboard",description:""},C=()=>{let[e,a]=(0,n.useState)(""),[t,d]=(0,n.useState)(""),i=async()=>{try{let e=await l.Z.get("/query/total");200===e.status&&a(e.data.data)}catch(e){}},c=async()=>{try{let e=await l.Z.get("/bot/total");200===e.status&&d(e.data.data)}catch(e){}};return(0,n.useEffect)(()=>{i(),c()},[]),(0,r.jsxs)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-4",children:[(0,r.jsxs)(s.Zb,{children:[(0,r.jsx)(s.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:(0,r.jsx)(s.ll,{className:"text-sm font-medium",children:"Total Query"})}),(0,r.jsx)(s.aY,{children:(0,r.jsx)("div",{className:"text-2xl font-bold",children:e})})]}),(0,r.jsxs)(s.Zb,{children:[(0,r.jsx)(s.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:(0,r.jsx)(s.ll,{className:"text-sm font-medium",children:"Total Generated Bot"})}),(0,r.jsx)(s.aY,{children:(0,r.jsx)("div",{className:"text-2xl font-bold",children:t})})]})]})};function q(){return(0,r.jsx)(R.Z,{children:(0,r.jsx)("div",{className:"flex-col flex",children:(0,r.jsxs)("div",{className:"flex-1 space-y-4 md:p-8 pt-6",children:[(0,r.jsx)("div",{className:"flex items-center justify-between space-y-2",children:(0,r.jsx)("h2",{className:"text-3xl font-bold tracking-tight",children:"Dashboard"})}),(0,r.jsx)(C,{}),(0,r.jsxs)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-7",children:[(0,r.jsxs)(s.Zb,{className:"col-span-4",children:[(0,r.jsx)(s.Ol,{children:(0,r.jsx)(s.ll,{children:"Overview"})}),(0,r.jsx)(s.aY,{className:"pl-2",children:(0,r.jsx)(u,{})})]}),(0,r.jsxs)(s.Zb,{className:"col-span-4 lg:col-span-3",children:[(0,r.jsx)(s.Ol,{children:(0,r.jsx)(s.ll,{children:"Results"})}),(0,r.jsx)(s.aY,{children:(0,r.jsx)(_,{})})]})]})]})})})}}},function(e){e.O(0,[409,570,504,389,443,888,774,179],function(){return e(e.s=6117)}),_N_E=e.O()}]);