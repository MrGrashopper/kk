(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9938:function(e,t,n){Promise.resolve().then(n.t.bind(n,3724,23)),Promise.resolve().then(n.bind(n,6154)),Promise.resolve().then(n.bind(n,9684)),Promise.resolve().then(n.t.bind(n,7365,23))},9684:function(e,t,n){"use strict";n.r(t);var r=n(9268),i=n(6006);let a=()=>{let[e,t]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=localStorage.getItem("cookie-consent");e||t(!0)},[]);let n=()=>{localStorage.setItem("cookie-consent","accepted"),t(!1)};return e?(0,r.jsx)("div",{className:"fixed bottom-0 w-full py-6 bg-accent text-white",children:(0,r.jsxs)("div",{className:"md:mx-12 flex flex-col md:flex-row items-center justify-between",children:[(0,r.jsxs)("div",{className:"text-sm mb-4 mx-6 md:mb-0",children:["Wir verwenden auf dieser Website Cookies, die f\xfcr den grundlegenden Betrieb und die Sicherheit der Website unerl\xe4sslich sind. Durch die weitere Nutzung der Website stimmen Sie der Verwendung dieser essentiellen Cookies zu."," ",(0,r.jsx)("a",{href:"/terms",className:"underline",children:"Mehr erfahren"})]}),(0,r.jsx)("button",{onClick:n,className:"ml-6 mr-6 my-2 md:ml-4 md:my-2 btn btn-sm btn-secondary md:mr-0",children:"Ich stimme zu"})]})}):null};t.default=a},6154:function(e,t,n){"use strict";n.r(t);var r=n(9268),i=n(6006),a=n(6394),l=n.n(a),o=n(5846),s=n.n(o);let d=()=>{let[e,t]=(0,i.useState)(0);(0,i.useEffect)(()=>{t(window.innerWidth);let e=()=>{t(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let n=e<=768;return(0,r.jsxs)("div",{className:"navbar top-0 bg-base-100 drop-shadow-xl fixed z-40 py-5 lg:px-10",children:[(0,r.jsx)("div",{className:"navbar-start",children:(0,r.jsxs)("div",{className:"dropdown",children:[(0,r.jsx)("label",{tabIndex:0,className:"btn btn-ghost btn-circle",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h7"})})}),(0,r.jsxs)("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-base-100 rounded-box w-52",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/training/jkd",children:"Jeet Kune Do"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/training/shaolin",children:"Shaolin Kung Fu"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/training/taichi",children:"Tai Chi Chuan"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/training/kids",children:"Kindertraining"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/training/contact",children:"Traingszeiten & Kontakt"})})]})]})}),(0,r.jsx)(s(),{className:"navbar-center",href:"/",children:(0,r.jsx)(l(),{src:"/KungFu-Komplett_Red.svg",alt:"logo Kung Fu Komplett",width:n?150:200,height:n?50:100})}),(0,r.jsx)("div",{className:"navbar-end",children:(0,r.jsx)(s(),{href:"https://www.instagram.com/kungfu_komplett/?hl=de",target:"_blank",children:(0,r.jsx)("button",{className:"btn btn-ghost btn-circle",children:(0,r.jsx)(l(),{src:"/instagram_icon.svg",alt:"instagram link",width:24,height:24})})})})]})};t.default=d},2011:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let r=n(6927),i=n(5909),a=i._(n(6006)),l=r._(n(9619)),o=n(9080),s=n(9600),d=n(5934);n(4169);let u=r._(n(8697)),c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e){return void 0!==e.default}function m(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,n,r,i,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&a(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function p(e){let[t,n]=a.version.split("."),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,a.forwardRef)((e,t)=>{let{imgAttributes:n,heightInt:r,widthInt:i,qualityInt:l,className:o,imgStyle:s,blurStyle:d,isLazy:u,fetchPriority:c,fill:f,placeholder:m,loading:g,srcString:b,config:v,unoptimized:w,loader:y,onLoadRef:x,onLoadingCompleteRef:_,setBlurComplete:j,setShowAltText:S,onLoad:C,onError:k,...E}=e;return g=u?"lazy":g,a.default.createElement("img",{...E,...p(c),loading:g,width:i,height:r,decoding:"async","data-nimg":f?"fill":"1",className:o,style:{...s,...d},...n,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&h(e,b,m,x,_,j,w))},[b,m,x,_,j,k,w,t]),onLoad:e=>{let t=e.currentTarget;h(t,b,m,x,_,j,w)},onError:e=>{S(!0),"blur"===m&&j(!0),k&&k(e)}})}),b=(0,a.forwardRef)((e,t)=>{var n;let r,i,{src:h,sizes:b,unoptimized:v=!1,priority:w=!1,loading:y,className:x,quality:_,width:j,height:S,fill:C,style:k,onLoad:E,onLoadingComplete:P,placeholder:O="empty",blurDataURL:M,fetchPriority:I,layout:N,objectFit:z,objectPosition:A,lazyBoundary:R,lazyRoot:W,...D}=e,F=(0,a.useContext)(d.ImageConfigContext),L=(0,a.useMemo)(()=>{let e=c||F||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[F]),T=D.loader||u.default;delete D.loader;let U="__next_img_default"in T;if(U){if("custom"===L.loader)throw Error('Image with src "'+h+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:n,...r}=t;return e(r)}}if(N){"fill"===N&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];e&&(k={...k,...e});let t={responsive:"100vw",fill:"100vw"}[N];t&&!b&&(b=t)}let B="",K=m(j),V=m(S);if("object"==typeof(n=h)&&(f(n)||void 0!==n.src)){let e=f(h)?h.default:h;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(r=e.blurWidth,i=e.blurHeight,M=M||e.blurDataURL,B=e.src,!C){if(K||V){if(K&&!V){let t=K/e.width;V=Math.round(e.height*t)}else if(!K&&V){let t=V/e.height;K=Math.round(e.width*t)}}else K=e.width,V=e.height}}let G=!w&&("lazy"===y||void 0===y);(!(h="string"==typeof h?h:B)||h.startsWith("data:")||h.startsWith("blob:"))&&(v=!0,G=!1),L.unoptimized&&(v=!0),U&&h.endsWith(".svg")&&!L.dangerouslyAllowSVG&&(v=!0),w&&(I="high");let[H,q]=(0,a.useState)(!1),[J,$]=(0,a.useState)(!1),Y=m(_),Q=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:A}:{},J?{}:{color:"transparent"},k),X="blur"===O&&M&&!H?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,o.getImageBlurSvg)({widthInt:K,heightInt:V,blurWidth:r,blurHeight:i,blurDataURL:M,objectFit:Q.objectFit})+'")'}:{},Z=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:a,sizes:l,loader:o}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let a=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:a,kind:"x"}}(t,i,l),u=s.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:s.map((e,r)=>o({config:t,src:n,quality:a,width:e})+" "+("w"===d?e:r+1)+d).join(", "),src:o({config:t,src:n,quality:a,width:s[u]})}}({config:L,src:h,unoptimized:v,width:K,quality:Y,sizes:b,loader:T}),ee=h,et=(0,a.useRef)(E);(0,a.useEffect)(()=>{et.current=E},[E]);let en=(0,a.useRef)(P);(0,a.useEffect)(()=>{en.current=P},[P]);let er={isLazy:G,imgAttributes:Z,heightInt:V,widthInt:K,qualityInt:Y,className:x,imgStyle:Q,blurStyle:X,loading:y,config:L,fetchPriority:I,fill:C,unoptimized:v,placeholder:O,loader:T,srcString:ee,onLoadRef:et,onLoadingCompleteRef:en,setBlurComplete:q,setShowAltText:$,...D};return a.default.createElement(a.default.Fragment,null,a.default.createElement(g,{...er,ref:t}),w?a.default.createElement(l.default,null,a.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imageSrcSet:Z.srcSet,imageSizes:Z.sizes,crossOrigin:D.crossOrigin,referrerPolicy:D.referrerPolicy,...p(I)})):null)}),v=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return a}});let r=n(6927),i=r._(n(6006)),a=i.default.createContext({})},5224:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},9619:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return u},default:function(){return h}});let r=n(6927),i=n(5909),a=i._(n(6006)),l=r._(n(2776)),o=n(4920),s=n(508),d=n(5224);function u(e){void 0===e&&(e=!1);let t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(4169);let f=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:n}=t;return e.reduce(c,[]).reverse().concat(u(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let a=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?a=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!l)&&n.has(e)?a=!1:(n.add(e),r[t]=n)}}}}return a}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})})}let h=function(e){let{children:t}=e,n=(0,a.useContext)(o.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(l.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9080:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:a,objectFit:l}=e,o=r||t,s=i||n,d=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+o+" "+s+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&i?"1":"20")+"'/%3E"+d+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+a+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},5934:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return l}});let r=n(6927),i=r._(n(6006)),a=n(9600),l=i.default.createContext(a.imageConfigDefault)},9600:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},8697:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},2776:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=n(5909),i=r._(n(6006)),a=i.useLayoutEffect,l=i.useEffect;function o(e){let{headManager:t,reduceComponentsToState:n}=e;function r(){if(t&&t.mountedInstances){let r=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}return a(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),a(()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4169:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},3724:function(){},7365:function(e){e.exports={style:{fontFamily:"'__Inter_a64ecd', '__Inter_Fallback_a64ecd'",fontStyle:"normal"},className:"__className_a64ecd",variable:"__variable_a64ecd"}},6394:function(e,t,n){e.exports=n(2011)}},function(e){e.O(0,[629,667,139,744],function(){return e(e.s=9938)}),_N_E=e.O()}]);