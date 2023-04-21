var y=Object.defineProperty;var d=(e,t)=>y(e,"name",{value:t,configurable:!0});import{c as f}from"./clsx.b6508a71.js";import{j as n,a as i,F as o}from"./jsx-runtime.c861a3c8.js";import{r as h}from"./index.77136312.js";import{I as m,r as x}from"./IconBase.esm.372fe3d0.js";import"./iframe.2b016546.js";function s({buttonType:e="primary",justIcon:t=!1,className:a="",children:l,fn:c,...k}){const p="h-12 py-auto px-4 rounded focus:ring-2 font-semibold text-sm transition-colors"+a;return n("button",{className:f(p,{"bg-gold-900 text-gray-800 ring-white hover:bg-gold-300":e==="primary","bg-gray-900 text-gold-900 ring-gold-900 hover:bg-gray-600":e==="secondary"},{"w-full":!t,"w-12":t}),onClick:()=>c(),...k,children:l})}d(s,"Button");try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{buttonType:{defaultValue:{value:"primary"},description:"",name:"buttonType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},justIcon:{defaultValue:{value:"false"},description:"",name:"justIcon",required:!1,type:{name:"boolean"}},fn:{defaultValue:null,description:"",name:"fn",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#Button"]={docgenInfo:s.__docgenInfo,name:"Button",path:"src/components/Button.tsx#Button"})}catch{}var r=new Map;r.set("bold",function(e){return i(o,{children:[n("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});r.set("duotone",function(e){return i(o,{children:[n("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),n("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),n("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});r.set("fill",function(){return n(o,{children:n("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"})})});r.set("light",function(e){return i(o,{children:[n("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});r.set("thin",function(e){return i(o,{children:[n("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});r.set("regular",function(e){return i(o,{children:[n("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),n("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var L=d(function(t,a){return x(t,a,r)},"renderPath"),u=h.exports.forwardRef(function(e,t){return n(m,{...Object.assign({ref:t},e,{renderPath:L})})});u.displayName="UserPlus";const g=u,M={title:"Components/Button",component:s,args:{children:"Primary test",buttonType:"primary"},argTypes:{buttonType:{options:["primary","secondary"],control:{type:"inline-radio"}},fn:{table:{disable:!0}}}},P={},C={args:{children:"Secondary Button",buttonType:"secondary"}},I={args:{children:n(g,{className:"w-5 h-5"}),buttonType:"secondary",justIcon:!0},argTypes:{children:{table:{disable:!0}}}},O=["PrimaryButton","SecondaryButton","JustIconButton"];export{I as JustIconButton,P as PrimaryButton,C as SecondaryButton,O as __namedExportsOrder,M as default};
//# sourceMappingURL=Button.stories.18fc1f40.js.map