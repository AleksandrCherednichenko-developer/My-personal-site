import{_ as d,c as h,o as l,a as p,b as t,w as o,d as e,t as i,T as c,p as f,e as u}from"./index-b5dbd011.js";import{U as _}from"./index-583f2624.js";const g="/My-personal-site/images/photo/image-2.jpg";const m=n=>(f("data-v-69ec4a2a"),n=n(),u(),n),v={class:"card"},k={class:"card__info"},w={class:"card__info-preview"},b=m(()=>e("div",{class:"image-wrapper"},[e("img",{class:"preview-image",src:g,alt:"image"})],-1)),x={class:"text-wrapper"},y={class:"preview-name"},I=m(()=>e("span",{class:"preview-dividers"},null,-1)),$={class:"preview-text"},B={class:"card__info-links"},S={href:"https://github.com/AleksandrCherednichenko-developer",class:"link-item",title:"github",target:"_blank",rel:"noopener noreferrer"},j={href:"https://t.me/+79090997778",class:"link-item",title:"telegram",target:"_blank",rel:"noopener noreferrer"},D={href:"https://www.linkedin.com/in/aleksandr-cherednichenko-273374250/",class:"link-item",title:"linkedin",target:"_blank",rel:"noopener noreferrer"},O={class:"card__text"},T={class:"card__text-title"},A={class:"card__text-description"},C={name:"BaseInfoBlock"},N=Object.assign(C,{setup(n){const r=h(()=>{const s=new Date().getHours();return s>=6&&s<12?"morning":s>=12&&s<18?"afternoon":s>=18&&s<22?"evening":"night"});return(a,s)=>(l(),p("div",v,[t(c,{name:"fade-slide-right",mode:"out-in",appear:""},{default:o(()=>[e("div",k,[e("div",w,[b,e("div",x,[e("h4",y,i(a.$t("name")),1),I,e("p",$,i(a.$t("profession")),1)])]),e("div",B,[e("a",S,[t(_,{class:"link-item-icon",name:"github"})]),e("a",j,[t(_,{class:"link-item-icon",name:"telegram"})]),e("a",D,[t(_,{class:"link-item-icon",name:"linkedin"})])])])]),_:1}),t(c,{name:"fade-slide-left",mode:"out-in",appear:""},{default:o(()=>[e("div",O,[t(c,{name:"fade-enter-transition",mode:"out-in",appear:""},{default:o(()=>[e("h3",T,i(a.$t(r.value)),1)]),_:1}),t(c,{name:"fade-enter-transition",mode:"out-in",appear:""},{default:o(()=>[e("p",A,i(a.$t("previewText")),1)]),_:1})])]),_:1})]))}}),U=d(N,[["__scopeId","data-v-69ec4a2a"]]);const V={class:"section about__page"},E={class:"page-inner content-container"},H={name:"AboutPage"},M=Object.assign(H,{setup(n){return(r,a)=>(l(),p("section",V,[e("div",E,[t(U)])]))}}),z=d(M,[["__scopeId","data-v-33a269ba"]]);export{z as default};