"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77],{8077:function(e,n,a){a.r(n);var r=a(5893);a(7294);var l=a(6941),t=a(8595),i=a(267),o=a(1252),s=a(8819);let c=e=>{let{avatar_url:n,bio:a,location:c}=e;return(0,r.jsx)(l.Z,{className:"section-lg bg-gradient-info shadow-lg border-0",children:(0,r.jsx)(t.Z,{className:"",children:(0,r.jsx)("div",{className:"p-2",children:(0,r.jsxs)(i.Z,{className:"",children:[(0,r.jsx)(o.Z,{className:"order-lg-2",lg:"4",children:(0,r.jsx)("img",{src:n,style:{width:"200px"},alt:"",className:"rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"})}),(0,r.jsxs)(o.Z,{lg:"8",className:"order-lg-1",children:[(0,r.jsx)("h2",{className:"text-white",children:"Reach Out to me!"}),(0,r.jsx)("p",{className:"lead text-white mt-3",children:"DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL"}),(0,r.jsx)("p",{className:"text-white mt-3",children:a}),(0,r.jsxs)("div",{className:"my-3 icon-shape bg-gradient-white shadow rounded text-info",children:[(0,r.jsx)("i",{className:"ni ni-pin-3 text-info mr-2"}),c]}),(0,r.jsx)(s.Z,{})]})]})})})})};n.default=c},8819:function(e,n,a){var r=a(5893);a(7294);var l=a(7975),t=a(8122);let i=()=>(0,r.jsxs)("div",{className:"btn-wrapper text-lg",children:[t.KT.email&&(0,r.jsx)(l.Z,{className:"btn-icon-only rounded-circle ml-1",color:"white",rel:"noopener","aria-label":"URL",href:t.KT.url,target:"_blank",children:(0,r.jsx)("span",{className:"btn-inner--icon",children:(0,r.jsx)("i",{className:"fa fa-envelope"})})}),t.KT.linkedin&&(0,r.jsx)(l.Z,{className:"btn-icon-only rounded-circle ml-1",color:"twitter",rel:"noopener","aria-label":"Linkedin",href:t.KT.linkedin,target:"_blank",children:(0,r.jsx)("span",{className:"btn-inner--icon",children:(0,r.jsx)("i",{className:"fa fa-linkedin"})})}),t.KT.github&&(0,r.jsx)(l.Z,{className:"btn-icon-only rounded-circle ml-1",color:"github",href:t.KT.github,rel:"noopener","aria-label":"Github",target:"_blank",children:(0,r.jsx)("span",{className:"btn-inner--icon",children:(0,r.jsx)("i",{className:"fa fa-github"})})}),t.KT.instagram&&(0,r.jsx)(l.Z,{className:"btn-icon-only rounded-circle ml-1",color:"instagram",href:t.KT.instagram,target:"_blank",rel:"noopener","aria-label":"Instagram",children:(0,r.jsx)("span",{className:"btn-inner--icon",children:(0,r.jsx)("i",{className:"fa fa-instagram"})})}),t.KT.facebook&&(0,r.jsx)(l.Z,{className:"btn-icon-only rounded-circle ml-1",color:"facebook",href:t.KT.facebook,target:"_blank",rel:"noopener","aria-label":"Facebook",children:(0,r.jsx)("span",{className:"btn-inner--icon",children:(0,r.jsx)("i",{className:"fa fa-facebook-square"})})}),t.KT.twitter&&(0,r.jsx)(l.Z,{className:"btn-icon-only rounded-circle",color:"twitter",href:t.KT.twitter,target:"_blank",rel:"noopener","aria-label":"Twitter",children:(0,r.jsx)("span",{className:"btn-inner--icon",children:(0,r.jsx)("i",{className:"fa fa-twitter"})})})]});n.Z=i},7975:function(e,n,a){var r=a(7462),l=a(3366),t=a(7326),i=a(5068),o=a(7294),s=a(5697),c=a.n(s),d=a(4184),b=a.n(d),u=a(3663),f={active:c().bool,"aria-label":c().string,block:c().bool,color:c().string,disabled:c().bool,outline:c().bool,tag:u.iC,innerRef:c().oneOfType([c().object,c().func,c().string]),onClick:c().func,size:c().string,children:c().node,className:c().string,cssModule:c().object,close:c().bool},h=function(e){function n(n){var a;return(a=e.call(this,n)||this).onClick=a.onClick.bind((0,t.Z)(a)),a}(0,i.Z)(n,e);var a=n.prototype;return a.onClick=function(e){if(this.props.disabled){e.preventDefault();return}if(this.props.onClick)return this.props.onClick(e)},a.render=function(){var e=this.props,n=e.active,a=e["aria-label"],t=e.block,i=e.className,s=e.close,c=e.cssModule,d=e.color,f=e.outline,h=e.size,m=e.tag,p=e.innerRef,g=(0,l.Z)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&void 0===g.children&&(g.children=o.createElement("span",{"aria-hidden":!0},"\xd7"));var N=(0,u.mx)(b()(i,{close:s},s||"btn",s||"btn"+(f?"-outline":"")+"-"+d,!!h&&"btn-"+h,!!t&&"btn-block",{active:n,disabled:this.props.disabled}),c);return g.href&&"button"===m&&(m="a"),o.createElement(m,(0,r.Z)({type:"button"===m&&g.onClick?"button":void 0},g,{className:N,ref:p,onClick:this.onClick,"aria-label":a||(s?"Close":null)}))},n}(o.Component);h.propTypes=f,h.defaultProps={color:"secondary",tag:"button"},n.Z=h},6941:function(e,n,a){var r=a(7462),l=a(3366),t=a(7294),i=a(5697),o=a.n(i),s=a(4184),c=a.n(s),d=a(3663),b={tag:d.iC,inverse:o().bool,color:o().string,body:o().bool,outline:o().bool,className:o().string,cssModule:o().object,innerRef:o().oneOfType([o().object,o().string,o().func])},u=function(e){var n=e.className,a=e.cssModule,i=e.color,o=e.body,s=e.inverse,b=e.outline,u=e.tag,f=e.innerRef,h=(0,l.Z)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=(0,d.mx)(c()(n,"card",!!s&&"text-white",!!o&&"card-body",!!i&&(b?"border":"bg")+"-"+i),a);return t.createElement(u,(0,r.Z)({},h,{className:m,ref:f}))};u.propTypes=b,u.defaultProps={tag:"div"},n.Z=u},7326:function(e,n,a){a.d(n,{Z:function(){return r}});function r(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},5068:function(e,n,a){function r(e,n){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e})(e,n)}function l(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,r(e,n)}a.d(n,{Z:function(){return l}})}}]);