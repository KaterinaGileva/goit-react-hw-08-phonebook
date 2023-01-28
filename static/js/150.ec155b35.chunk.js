"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[150],{8627:function(n,e,r){r.d(e,{v:function(){return t}});var t={save:function(n,e){try{var r=JSON.stringify(e);localStorage.setItem(n,r)}catch(t){console.log("Error during saving ".concat(n," to local strage; "),t.message)}},load:function(n){try{var e=localStorage.getItem(n);return null===e?void 0:JSON.parse(e)}catch(r){console.log("Error during getting ".concat(n," from localStorage: "),r.message)}},del:function(n){try{localStorage.removeItem(n)}catch(e){console.log("Error during deleting ".concat(n,"! from localStorage: "),e.message)}}}},6150:function(n,e,r){r.r(e),r.d(e,{default:function(){return X}});var t,o,i,a,c,l,s,d,u,p,x,f,g,h=r(3676),m=function(n){return n.filter.filter},v=function(n){return n.filter.status},b=r(9028),y=r(168),j=r(8747),w=j.ZP.label(t||(t=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1, 875;\n  padding: 20px, 5px;\n  border: 2px solid #32CD32;\n  border-radius: 10px;\n  margin: 0px, 0, 0, 20px;\n  background-color: #ADFF2F;\n"]))),Z=j.ZP.input(o||(o=(0,y.Z)(["\n  font: inherit;\n  padding: 5px;\n  margin: 10px 0 10px 8px;\n  max-width: 80%;\n  border: 2px solid #32CD32;\n  border-radius: 8px;\n  \n"]))),k=j.ZP.div(i||(i=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n  \n"]))),C=j.ZP.h2(a||(a=(0,y.Z)(["\n  margin-top: 10px;\n  margin-left: 20px;\n  font-size: 24px;\n"]))),F=r(333),P=r(1413),E=r(4925),L=j.ZP.button(c||(c=(0,y.Z)(["\ndisplay: inline-flex;\njustify-content: center;\nwidth: 130px;\n    padding: 3px 3px;\n    border-radius: 8px;\n    border: solid 2px #32CD32;\n    font-size:22px;\n    font-weight: 700;\n    cursor: pointer;\n    background-color: #00FFFF;\n\n    :hover {\n    background-color: #1565c0;\n    color: orange;\n    transform: scale(1.02);\n  }\n  \n  :active {\n    border: solid 2px red;\n    \n    color: orange;\n    box-shadow: 2px 2px 5px #fc894d;\n  }\n\n"]))),z=r(2559),I=["selected","type","children"],S=function(n){var e=n.selected,r=void 0!==e&&e,t=n.type,o=void 0===t?"button":t,i=n.children,a=(0,E.Z)(n,I);return(0,z.jsx)(L,(0,P.Z)((0,P.Z)({style:!1===r?{backgroundColor:"#00FFFF",color:"#000"}:{backgroundColor:"#00FFFF",color:"red",border:"solid"},type:o},a),{},{children:i}))},D=r(3483),H=j.ZP.div(l||(l=(0,y.Z)(["\n  display: flex;\n  gap: 16px;\n  margin-top: 10px;\n  margin-left: 50px;\n  margin-bottom: 20px;\n"]))),A=function(){var n=(0,h.I0)(),e=(0,h.v9)(v),r=function(e){return n((0,b.bI)(e))};return(0,z.jsxs)(H,{children:[(0,z.jsx)(S,{selected:e===D.H.all,onClick:function(){return r(D.H.all)},children:"All"}),(0,z.jsx)(S,{selected:e===D.H.personal,onClick:function(){return r(D.H.personal)},children:"Personal"}),(0,z.jsx)(S,{selected:e===D.H.others,onClick:function(){return r(D.H.others)},children:"Others"})]})},N=function(){var n=(0,h.I0)(),e=(0,h.v9)(m);return(0,z.jsxs)(w,{children:[(0,z.jsx)(C,{children:"Find contacts by Name"}),(0,z.jsxs)(k,{children:[(0,z.jsx)(F.Qcu,{style:{width:36,height:36,borderRadius:"8px",borderColor:"blue"}}),(0,z.jsx)(Z,{type:"text",value:e,onChange:function(e){return n((0,b.Tv)(e.target.value))},placeholder:"Anny Benne"})]}),(0,z.jsx)(A,{})]})},_=j.ZP.ul(s||(s=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  margin-top: 20px;\n  margin-right: auto;\n  padding: 10px;\n  font-size: 24px;\n  background-color: #ADFF2F;\n  border-radius: 10px;\n  border: 2px solid rgba(0, 0, 0, 0.25);\n"]))),O=r(9447),J=r(5861),Q=r(9439),B=r(4687),K=r.n(B),R=j.ZP.li(d||(d=(0,y.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n  padding: 5px 5px;\n  border: 2px solid rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n\n  :last-child {\n    margin-bottom: 0;\n  }\n\n  :hover,\n  :focus {\n    border: 2px solid;\n    background-color: #21d4f3;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  }\n"]))),T=j.ZP.button(u||(u=(0,y.Z)(["\ndisplay: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 8px 10px 8px 20px;\n  padding: 8px 8px 8px 8px;\n  border-radius: 4px;\n  border: none;\n  height: 30px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1,875;\n  text-transform: uppercase;\n  background-color: blue;\n  color: yellow;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    border: 2px solid;\n    background-color: white;\n    color:\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    \n  }\n"]))),Y=j.ZP.div(p||(p=(0,y.Z)(["\ndisplay: flex;\njustify-content: space-between;\nmargin-left: 5px;\nmargin-right: auto;\n"]))),q=j.ZP.div(x||(x=(0,y.Z)(["\ndisplay: flex;\njustify-content: space-between;\n"]))),G=(j.ZP.input(f||(f=(0,y.Z)(["\ncolor: aliceblue;\n"]))),r(5545)),M=r(8627);function U(n){var e=n.id,r=n.name,t=n.number,o=(0,G.s0)(),i=(0,O.Nt)(),a=(0,Q.Z)(i,2),c=a[0],l=a[1].isLoading,s="contact-for-render-state",d=M.v.load(s),u=!0;d&&(u=d.find((function(n){return n.name===r})).personal);var p=function(){var n=(0,J.Z)(K().mark((function n(){return K().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c(e);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:x();case 9:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();function x(){var n,e=M.v.load(s);e&&(e.find((function(n){return n.name===r})),n=e.findIndex((function(n){return n.name===r})),e.splice(n,1),M.v.save(s,e))}return(0,z.jsxs)(R,{style:!1===u?{backgroundColor:" #e1c7e9"}:{backgroundColor:"#00fff2"},children:[!1===u?(0,z.jsx)(F.dQs,{style:{width:24,height:24}}):(0,z.jsx)(F.fi0,{style:{color:"orange",width:24,height:24}}),(0,z.jsxs)(Y,{children:[(0,z.jsxs)("span",{children:[r," :"]})," ",(0,z.jsx)("span",{children:t})]}),(0,z.jsxs)(q,{children:[(0,z.jsxs)(T,{type:"button",onClick:p,disabled:l,children:[(0,z.jsx)(F.Ehm,{style:{color:"orange",width:24,height:24}}),"Delete"]}),(0,z.jsxs)(T,{type:"button",onClick:function(){return o("/".concat(e))},children:[(0,z.jsx)(F.cpK,{style:{color:"orange",width:24,height:24}}),"Edit"]})]})]})}function V(){var n=(0,h.v9)(m),e=(0,h.v9)(v),r="contact-for-render-state",t=(0,O.wY)(),o=t.data,i=t.error,a=t.isLoading;M.v.load(r)?function(){var n,e=M.v.load(r),t=function(n){return n&&n.forEach((function(n){e.map((function(n){return n.id})).includes(n.id)||(t=n)})),t},i=t(o);"object"===typeof(n=i)&&null!==n&&(e.find((function(n){return n.name===i.name})),e.push(i)),M.v.save(r,e);var a=M.v.load(r),c={},l=a.filter((function(n){var e=n.name;return!c[e]&&(c[e]=1)}));M.v.save(r,l)}():function(){M.v.save(r,[]);var n=M.v.load(r),e=o;M.v.save(r,e),(n=M.v.load(r))&&n.map((function(n){return n.personal=!0})),M.v.save(r,n)}();var c;return o&&(c=function(n,e,t){var o=M.v.load(r);if(n)switch(t){case"personal":var i=function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return n.forEach((function(n){e.includes(n.name)&&r.push(n)})),r}(n,o.filter((function(n){return!0===n.personal})).map((function(n){return n.name})));return i.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));case"others":var a=function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return n.forEach((function(n){e.includes(n.name)&&r.push(n)})),r}(n,o.filter((function(n){return!1===n.personal})).map((function(n){return n.name})));return a.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));default:return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}}(o,n,e).sort((function(n,e){return n.name.localeCompare(e.name)}))),(0,z.jsxs)(z.Fragment,{children:[i&&(0,z.jsx)("p",{children:"Error loading, please try again "}),a?(0,z.jsx)("b",{children:"Loading..."}):(0,z.jsx)(_,{children:c.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,z.jsx)(U,{id:e,name:r,number:t},e)}))})]})}var W=j.ZP.h2(g||(g=(0,y.Z)(["\n \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  font-weight: 700;\n  padding: 10px 10px 10px 10px;\n"])));function X(){return(0,z.jsxs)("main",{children:[(0,z.jsx)(N,{}),(0,z.jsx)(W,{children:"Contacts"}),(0,z.jsx)(V,{})]})}}}]);
//# sourceMappingURL=150.ec155b35.chunk.js.map