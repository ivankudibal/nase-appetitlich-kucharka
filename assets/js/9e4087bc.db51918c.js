"use strict";(self.webpackChunknase_appetitlich_kucharka=self.webpackChunknase_appetitlich_kucharka||[]).push([[3608],{3252:(e,a,t)=>{t.r(a),t.d(a,{default:()=>o});t(7294);var r=t(9415),s=t(6062),i=t(168),c=t(263),n=t(6775),l=t(5893);function h(e){let{year:a,posts:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.Z,{as:"h3",id:a,children:a}),(0,l.jsx)("ul",{children:t.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(r.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:a}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:a.map(((e,a)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(h,{...e})},a)))})})})}function o(e){let{archive:a}=e;const t=(0,s.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,s.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const a=e.reduce(((e,a)=>{const t=a.metadata.date.split("-")[0],r=e.get(t)??[];return e.set(t,[a,...r])}),new Map);return Array.from(a,(e=>{let[a,t]=e;return{year:a,posts:t}}))}(a.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.d,{title:t,description:r}),(0,l.jsxs)(c.Z,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(n.Z,{as:"h1",className:"hero__title",children:t}),(0,l.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,l.jsx)("main",{children:h.length>0&&(0,l.jsx)(d,{years:h})})]})]})}}}]);