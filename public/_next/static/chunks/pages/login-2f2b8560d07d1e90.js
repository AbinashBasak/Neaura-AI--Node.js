(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{3236:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(8674)}])},7249:function(e,r,t){"use strict";t.d(r,{z:function(){return l}});var a=t(5893),s=t(7294),n=t(8426),o=t(5139),i=t(2676);let d=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",{variants:{variant:{default:"bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90",destructive:"bg-red-500 text-gray-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90",outline:"border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50",secondary:"bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",ghost:"hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",link:"text-gray-900 underline-offset-4 hover:underline dark:text-gray-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=s.forwardRef((e,r)=>{let{className:t,variant:s,size:o,asChild:l=!1,...c}=e,u=l?n.g7:"button";return(0,a.jsx)(u,{className:(0,i.cn)(d({variant:s,size:o,className:t})),ref:r,...c})});l.displayName="Button"},7333:function(e,r,t){"use strict";t.d(r,{l0:function(){return u},NI:function(){return h},Wi:function(){return g},xJ:function(){return x},lX:function(){return y},zG:function(){return v}});var a=t(5893),s=t(7294),n=t(8426),o=t(7536),i=t(2676),d=t(9102);let l=(0,t(5139).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)(d.f,{ref:r,className:(0,i.cn)(l(),t),...s})});c.displayName=d.f.displayName;let u=o.RV,f=s.createContext({}),g=e=>{let{...r}=e;return(0,a.jsx)(f.Provider,{value:{name:r.name},children:(0,a.jsx)(o.Qr,{...r})})},m=()=>{let e=s.useContext(f),r=s.useContext(p),{getFieldState:t,formState:a}=(0,o.Gc)(),n=t(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=r;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...n}},p=s.createContext({}),x=s.forwardRef((e,r)=>{let{className:t,...n}=e,o=s.useId();return(0,a.jsx)(p.Provider,{value:{id:o},children:(0,a.jsx)("div",{ref:r,className:(0,i.cn)("space-y-2",t),...n})})});x.displayName="FormItem";let y=s.forwardRef((e,r)=>{let{className:t,...s}=e,{error:n,formItemId:o}=m();return(0,a.jsx)(c,{ref:r,className:(0,i.cn)(n&&"text-red-500 dark:text-red-900",t),htmlFor:o,...s})});y.displayName="FormLabel";let h=s.forwardRef((e,r)=>{let{...t}=e,{error:s,formItemId:o,formDescriptionId:i,formMessageId:d}=m();return(0,a.jsx)(n.g7,{ref:r,id:o,"aria-describedby":s?"".concat(i," ").concat(d):"".concat(i),"aria-invalid":!!s,...t})});h.displayName="FormControl",s.forwardRef((e,r)=>{let{className:t,...s}=e,{formDescriptionId:n}=m();return(0,a.jsx)("p",{ref:r,id:n,className:(0,i.cn)("text-sm text-gray-500 dark:text-gray-400",t),...s})}).displayName="FormDescription";let v=s.forwardRef((e,r)=>{let{className:t,children:s,...n}=e,{error:o,formMessageId:d}=m(),l=o?String(null==o?void 0:o.message):s;return l?(0,a.jsx)("p",{ref:r,id:d,className:(0,i.cn)("text-sm font-medium text-red-500 dark:text-red-900",t),...n,children:l}):null});v.displayName="FormMessage"},5037:function(e,r,t){"use strict";t.d(r,{I:function(){return o}});var a=t(5893),s=t(7294),n=t(2676);let o=s.forwardRef((e,r)=>{let{className:t,type:s,...o}=e;return(0,a.jsx)("input",{type:s,className:(0,n.cn)("flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300",t),ref:r,...o})});o.displayName="Input"},8577:function(e,r,t){"use strict";t.d(r,{x:function(){return y}});var a=t(5893),s=t(7294),n=t(7626),o=t(5139),i=t(1352),d=t(2676);let l=n.zt,c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)(n.l_,{ref:r,className:(0,d.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...s})});c.displayName=n.l_.displayName;let u=(0,o.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-gray-200 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-gray-800",{variants:{variant:{default:"border bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50",destructive:"destructive group border-red-500 bg-red-500 text-gray-50 dark:border-red-900 dark:bg-red-900 dark:text-gray-50"}},defaultVariants:{variant:"default"}}),f=s.forwardRef((e,r)=>{let{className:t,variant:s,...o}=e;return(0,a.jsx)(n.fC,{ref:r,className:(0,d.cn)(u({variant:s}),t),...o})});f.displayName=n.fC.displayName,s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)(n.aU,{ref:r,className:(0,d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-gray-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-gray-50 group-[.destructive]:focus:ring-red-500 dark:border-gray-800 dark:ring-offset-gray-950 dark:hover:bg-gray-800 dark:focus:ring-gray-300 dark:group-[.destructive]:border-gray-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-gray-50 dark:group-[.destructive]:focus:ring-red-900",t),...s})}).displayName=n.aU.displayName;let g=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)(n.x8,{ref:r,className:(0,d.cn)("absolute right-2 top-2 rounded-md p-1 text-gray-950/50 opacity-0 transition-opacity hover:text-gray-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-gray-50/50 dark:hover:text-gray-50",t),"toast-close":"",...s,children:(0,a.jsx)(i.Z,{className:"h-4 w-4"})})});g.displayName=n.x8.displayName;let m=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)(n.Dx,{ref:r,className:(0,d.cn)("text-sm font-semibold",t),...s})});m.displayName=n.Dx.displayName;let p=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)(n.dk,{ref:r,className:(0,d.cn)("text-sm opacity-90",t),...s})});p.displayName=n.dk.displayName;var x=t(1186);function y(){let{toasts:e}=(0,x.pm)();return(0,a.jsxs)(l,{children:[e.map(function(e){let{id:r,title:t,description:s,action:n,...o}=e;return(0,a.jsxs)(f,{...o,children:[(0,a.jsxs)("div",{className:"grid gap-1",children:[t&&(0,a.jsx)(m,{children:t}),s&&(0,a.jsx)(p,{children:s})]}),n,(0,a.jsx)(g,{})]},r)}),(0,a.jsx)(c,{})]})}},1186:function(e,r,t){"use strict";t.d(r,{Am:function(){return u},pm:function(){return f}});var a=t(7294);let s=0,n=new Map,o=e=>{if(n.has(e))return;let r=setTimeout(()=>{n.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,r)},i=(e,r)=>{switch(r.type){case"ADD_TOAST":return{...e,toasts:[r.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case"DISMISS_TOAST":{let{toastId:t}=r;return t?o(t):e.toasts.forEach(e=>{o(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===t||void 0===t?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===r.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)}}},d=[],l={toasts:[]};function c(e){l=i(l,e),d.forEach(e=>{e(l)})}function u(e){let{...r}=e,t=(s=(s+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>c({type:"DISMISS_TOAST",toastId:t});return c({type:"ADD_TOAST",toast:{...r,id:t,open:!0,onOpenChange:e=>{e||a()}}}),{id:t,dismiss:a,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function f(){let[e,r]=a.useState(l);return a.useEffect(()=>(d.push(r),()=>{let e=d.indexOf(r);e>-1&&d.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},2676:function(e,r,t){"use strict";t.d(r,{cn:function(){return n}});var a=t(512),s=t(8388);function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.m6)((0,a.W)(r))}},8674:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return y}});var a=t(5893),s=t(5037),n=t(7249),o=t(1664),i=t.n(o),d=t(1604),l=t(6312),c=t(7536),u=t(1186),f=t(7333),g=t(8577),m=t(5121),p=t(1163);let x=d.z.object({email:d.z.string({required_error:"Email is required."}).email(),password:d.z.string({required_error:"Password is required."})});function y(){let e=(0,p.useRouter)(),r=(0,c.cI)({resolver:(0,l.F)(x)}),t=async r=>{let t=await m.Z.post("/login",r);if(200===t.status){localStorage.setItem("token",t.data.msg.token),localStorage.setItem("user",JSON.stringify({username:t.data.msg.username,email:t.data.msg.email})),e.replace("/dashboard");return}"string"==typeof t.data.msg?(0,u.Am)({title:"Error",description:t.data.msg}):(0,u.Am)({title:"Error",description:"Something went wrong!"})};return(0,a.jsxs)("div",{className:"w-full h-full min-h-[100vh] flex items-center justify-center p-6 xl:p-10",children:[(0,a.jsx)(g.x,{}),(0,a.jsxs)("div",{className:"mx-auto space-y-6",children:[(0,a.jsxs)("div",{className:"space-y-2 text-center",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold",children:"Login"}),(0,a.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"Enter your information to log into account"})]}),(0,a.jsx)(f.l0,{...r,children:(0,a.jsxs)("form",{onSubmit:r.handleSubmit(t),className:"space-y-4",children:[(0,a.jsx)("div",{className:"space-y-2",children:(0,a.jsx)(f.Wi,{control:r.control,name:"email",render:e=>{let{field:r}=e;return(0,a.jsxs)(f.xJ,{children:[(0,a.jsx)(f.lX,{children:"Email"}),(0,a.jsx)(f.NI,{children:(0,a.jsx)(s.I,{placeholder:"Email",...r,type:"email"})}),(0,a.jsx)(f.zG,{})]})}})}),(0,a.jsx)("div",{className:"space-y-2",children:(0,a.jsx)(f.Wi,{control:r.control,name:"password",render:e=>{let{field:r}=e;return(0,a.jsxs)(f.xJ,{children:[(0,a.jsx)(f.lX,{children:"Password"}),(0,a.jsx)(f.NI,{children:(0,a.jsx)(s.I,{placeholder:"Password",...r,type:"password"})}),(0,a.jsx)(f.zG,{})]})}})}),(0,a.jsx)(n.z,{className:"w-full",type:"submit",children:"Login"}),(0,a.jsxs)("div",{className:"mt-4 text-center text-sm",children:["Don't have an account?",(0,a.jsx)(i(),{className:"underline ml-1",href:"/sign-up",children:"Sign up here"})]})]})})]})]})}}},function(e){e.O(0,[570,648,763,888,774,179],function(){return e(e.s=3236)}),_N_E=e.O()}]);