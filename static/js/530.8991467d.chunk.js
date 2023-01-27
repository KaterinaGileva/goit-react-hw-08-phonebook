"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{8627:function(e,n,t){t.d(n,{v:function(){return r}});var r={save:function(e,n){try{var t=JSON.stringify(n);localStorage.setItem(e,t)}catch(r){console.log("Error during saving ".concat(e," to local strage; "),r.message)}},load:function(e){try{var n=localStorage.getItem(e);return null===n?void 0:JSON.parse(n)}catch(t){console.log("Error during getting ".concat(e," from localStorage: "),t.message)}},del:function(e){try{localStorage.removeItem(e)}catch(n){console.log("Error during deleting ".concat(e,"! from localStorage: "),n.message)}}}},7530:function(e,n,t){t.r(n),t.d(n,{default:function(){return xe}});var r,a,i,o,l,s,d,u=t(5861),c=t(9439),p=t(4687),m=t.n(p),h=t(5545),f=t(390),x=t(2286),v=t(9447),g=t(168),b=t(8747),Z=b.ZP.form(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: auto;\n  margin: 20px 0 0 0;\n  padding: 20px;\n  border: 2px solid #dbb858;\n  border-radius: 10px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  background-color: #AFEEEE;\n"]))),y=b.ZP.label(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 10px 0 10px 0;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 1, 875;\n"]))),C=(b.ZP.p(i||(i=(0,g.Z)(["\n  font-weight: 700;\n  font-size: 20px;\n"]))),b.ZP.input(o||(o=(0,g.Z)(["\n  font: inherit;\n  padding: 8px;\n  margin: 8px 0 8px 0;\n  max-width: 80%;\n  border-radius: 8px;\n  border-color: blue;\n"]))),b.ZP.button(l||(l=(0,g.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n  margin-right: auto;\n  padding: 8px 8px 8px 8px;\n  border-radius: 4px;\n  border: none;\n  height: 30px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1, 875;\n  text-transform: uppercase;\n  background-color: #2196f3;\n  color: #ffff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    border: 2px solid;\n    background-color: #21d4f3;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    transform: scale(1.01);\n  }\n"]))),b.ZP.input(s||(s=(0,g.Z)(["\n  margin-right: 8px;\n  width: 24px;\n  height: 24px;\n  border: 1px solid black;\n"])))),I=b.ZP.label(d||(d=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 0 0 10px 0;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1, 875;\n"]))),k=t(8627),S=t(1413),j=t(4925),w=t(7390);var N=t(5429),P=t(8462),R=t(2110),E=t(4575),_=t(6984),z=t(1268),O=t(2559),F=["children","className"],T=(0,w.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),q=(0,c.Z)(T,2),A=q[0],B=q[1],G=(0,N.G)((function(e,n){var t=(0,P.jC)("Input",e),r=(0,R.Lr)(e),a=r.children,i=r.className,o=(0,j.Z)(r,F),l=(0,_.cx)("chakra-input__group",i),s={},d=function(e){return f.Children.toArray(e).filter((function(e){return(0,f.isValidElement)(e)}))}(a),u=t.field;d.forEach((function(e){var n,r;t&&(u&&"InputLeftElement"===e.type.id&&(s.paddingStart=null!=(n=u.height)?n:u.h),u&&"InputRightElement"===e.type.id&&(s.paddingEnd=null!=(r=u.height)?r:u.h),"InputRightAddon"===e.type.id&&(s.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(s.borderStartRadius=0))}));var c=d.map((function(n){var t,r,a=(0,z.oA)({size:(null==(t=n.props)?void 0:t.size)||e.size,variant:(null==(r=n.props)?void 0:r.variant)||e.variant});return"Input"!==n.type.id?(0,f.cloneElement)(n,a):(0,f.cloneElement)(n,Object.assign(a,s,n.props))}));return(0,O.jsx)(E.m.div,(0,S.Z)((0,S.Z)({className:l,ref:n,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"}},o),{},{children:(0,O.jsx)(A,{value:t,children:c})}))}));G.displayName="InputGroup";var L=t(1007),D=["id","isRequired","isInvalid","isDisabled","isReadOnly"],H=["getRootProps","htmlProps"],M=(0,w.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),J=(0,c.Z)(M,2),Q=J[0],W=J[1],V=(0,w.k)({strict:!1,name:"FormControlContext"}),Y=(0,c.Z)(V,2),$=Y[0],K=Y[1];var U=(0,N.G)((function(e,n){var t=(0,P.jC)("Form",e),r=function(e){var n=e.id,t=e.isRequired,r=e.isInvalid,a=e.isDisabled,i=e.isReadOnly,o=(0,j.Z)(e,D),l=(0,f.useId)(),s=n||"field-".concat(l),d="".concat(s,"-label"),u="".concat(s,"-feedback"),p="".concat(s,"-helptext"),m=(0,f.useState)(!1),h=(0,c.Z)(m,2),x=h[0],v=h[1],g=(0,f.useState)(!1),b=(0,c.Z)(g,2),Z=b[0],y=b[1],C=(0,f.useState)(!1),I=(0,c.Z)(C,2),k=I[0],w=I[1],N=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,S.Z)((0,S.Z)({id:p},e),{},{ref:(0,L.lq)(n,(function(e){e&&y(!0)}))})}),[p]),P=(0,f.useCallback)((function(){var e,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,S.Z)((0,S.Z)({},t),{},{ref:o,"data-focus":(0,_.PB)(k),"data-disabled":(0,_.PB)(a),"data-invalid":(0,_.PB)(r),"data-readonly":(0,_.PB)(i),id:null!=(e=t.id)?e:d,htmlFor:null!=(n=t.htmlFor)?n:s})}),[s,a,k,r,i,d]),R=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,S.Z)((0,S.Z)({id:u},e),{},{ref:(0,L.lq)(n,(function(e){e&&v(!0)})),"aria-live":"polite"})}),[u]),E=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,S.Z)((0,S.Z)((0,S.Z)({},e),o),{},{ref:n,role:"group"})}),[o]),z=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,S.Z)((0,S.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!t,isInvalid:!!r,isReadOnly:!!i,isDisabled:!!a,isFocused:!!k,onFocus:function(){return w(!0)},onBlur:function(){return w(!1)},hasFeedbackText:x,setHasFeedbackText:v,hasHelpText:Z,setHasHelpText:y,id:s,labelId:d,feedbackId:u,helpTextId:p,htmlProps:o,getHelpTextProps:N,getErrorMessageProps:R,getRootProps:E,getLabelProps:P,getRequiredIndicatorProps:z}}((0,R.Lr)(e)),a=r.getRootProps,i=(r.htmlProps,(0,j.Z)(r,H)),o=(0,_.cx)("chakra-form-control",e.className);return(0,O.jsx)($,{value:i,children:(0,O.jsx)(Q,{value:t,children:(0,O.jsx)(E.m.div,(0,S.Z)((0,S.Z)({},a({},n)),{},{className:o,__css:t.container}))})})}));U.displayName="FormControl",(0,N.G)((function(e,n){var t=K(),r=W(),a=(0,_.cx)("chakra-form__helper-text",e.className);return(0,O.jsx)(E.m.div,(0,S.Z)((0,S.Z)({},null==t?void 0:t.getHelpTextProps(e,n)),{},{__css:r.helperText,className:a}))})).displayName="FormHelperText";var X=["isDisabled","isInvalid","isReadOnly","isRequired"],ee=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function ne(e){var n=function(e){var n,t,r,a=K(),i=e.id,o=e.disabled,l=e.readOnly,s=e.required,d=e.isRequired,u=e.isInvalid,c=e.isReadOnly,p=e.isDisabled,m=e.onFocus,h=e.onBlur,f=(0,j.Z)(e,ee),x=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&x.push(a.feedbackId);(null==a?void 0:a.hasHelpText)&&x.push(a.helpTextId);return(0,S.Z)((0,S.Z)({},f),{},{"aria-describedby":x.join(" ")||void 0,id:null!=i?i:null==a?void 0:a.id,isDisabled:null!=(n=null!=o?o:p)?n:null==a?void 0:a.isDisabled,isReadOnly:null!=(t=null!=l?l:c)?t:null==a?void 0:a.isReadOnly,isRequired:null!=(r=null!=s?s:d)?r:null==a?void 0:a.isRequired,isInvalid:null!=u?u:null==a?void 0:a.isInvalid,onFocus:(0,_.v0)(null==a?void 0:a.onFocus,m),onBlur:(0,_.v0)(null==a?void 0:a.onBlur,h)})}(e),t=n.isDisabled,r=n.isInvalid,a=n.isReadOnly,i=n.isRequired,o=(0,j.Z)(n,X);return(0,S.Z)((0,S.Z)({},o),{},{disabled:t,readOnly:a,required:i,"aria-invalid":(0,_.Qm)(r),"aria-required":(0,_.Qm)(i),"aria-readonly":(0,_.Qm)(a)})}var te=["htmlSize"],re=(0,N.G)((function(e,n){var t=e.htmlSize,r=(0,j.Z)(e,te),a=(0,P.jC)("Input",r),i=ne((0,R.Lr)(r)),o=(0,_.cx)("chakra-input",e.className);return(0,O.jsx)(E.m.input,(0,S.Z)((0,S.Z)({size:t},i),{},{__css:a.field,ref:n,className:o}))}));re.displayName="Input",re.id="Input";var ae=t(4942),ie=["placement"],oe=["className"],le=["className"],se=(0,E.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),de=(0,N.G)((function(e,n){var t,r,a,i=e.placement,o=void 0===i?"left":i,l=(0,j.Z)(e,ie),s=B(),d=s.field,u="left"===o?"insetStart":"insetEnd",c=(0,S.Z)((t={},(0,ae.Z)(t,u,"0"),(0,ae.Z)(t,"width",null!=(r=null==d?void 0:d.height)?r:null==d?void 0:d.h),(0,ae.Z)(t,"height",null!=(a=null==d?void 0:d.height)?a:null==d?void 0:d.h),(0,ae.Z)(t,"fontSize",null==d?void 0:d.fontSize),t),s.element);return(0,O.jsx)(se,(0,S.Z)({ref:n,__css:c},l))}));de.id="InputElement",de.displayName="InputElement";var ue=(0,N.G)((function(e,n){var t=e.className,r=(0,j.Z)(e,oe),a=(0,_.cx)("chakra-input__left-element",t);return(0,O.jsx)(de,(0,S.Z)({ref:n,placement:"left",className:a},r))}));ue.id="InputLeftElement",ue.displayName="InputLeftElement";var ce=(0,N.G)((function(e,n){var t=e.className,r=(0,j.Z)(e,le),a=(0,_.cx)("chakra-input__right-element",t);return(0,O.jsx)(de,(0,S.Z)({ref:n,placement:"right",className:a},r))}));ce.id="InputRightElement",ce.displayName="InputRightElement";var pe=t(6048),me=t(4814);var he=function(e){var n=e.viewBox,t=void 0===n?"0 0 24 24":n,r=e.d,a=e.displayName,i=e.defaultProps,o=void 0===i?{}:i,l=f.Children.toArray(e.path),s=(0,N.G)((function(e,n){return(0,O.jsx)(me.J,(0,S.Z)((0,S.Z)((0,S.Z)({ref:n,viewBox:t},o),e),{},{children:l.length?l:(0,O.jsx)("path",{fill:"currentColor",d:r})}))}));return s.displayName=a,s}({d:"M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",displayName:"PhoneIcon",viewBox:"0 0 14 14"});function fe(){var e=(0,f.useState)(""),n=(0,c.Z)(e,2),t=n[0],r=n[1],a=(0,f.useState)(""),i=(0,c.Z)(a,2),o=i[0],l=i[1],s=(0,f.useState)(!0),d=(0,c.Z)(s,2),p=d[0],g=d[1],b=(0,h.s0)(),S=(0,v.wY)().data,j=(0,v.Lr)(),w=(0,c.Z)(j,1)[0],N="contact-for-render-state",P=function(e){switch(e.target.name){case"name":r(e.target.value);break;case"number":l(e.target.value);break;default:return}},R=function(){var e=(0,u.Z)(m().mark((function e(n){var a,i,s;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a=t.toLowerCase(),i=S.find((function(e){return e.name.toLowerCase()===a})),!i){e.next=8;break}return x.Am.info("".concat(t," is already in contacts!"),{position:x.Am.POSITION.TOP_CENTER}),e.abrupt("return");case 8:return e.prev=8,e.next=11,w({name:t,number:o});case 11:if(k.v.load(N)){e.next=14;break}return k.v.save(N,[]),e.abrupt("return");case 14:(s=k.v.load(N)).push({name:t,number:o,personal:p}),k.v.save(N,s),x.Am.success("".concat(t," successfully added!"),{position:x.Am.POSITION.TOP_RIGHT}),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(8),x.Am.error("Error adding data!",{position:x.Am.POSITION.TOP_LEFT}),console.log(e.t0);case 24:r(""),l(""),b("/");case 27:case"end":return e.stop()}}),e,null,[[8,20]])})));return function(n){return e.apply(this,arguments)}}();return(0,O.jsxs)(Z,{onSubmit:R,children:[(0,O.jsxs)(I,{children:[(0,O.jsx)(C,{type:"checkbox",checked:p,onChange:function(){return g(!p)}}),"Personal contact"]}),(0,O.jsxs)(y,{children:["Name",(0,O.jsx)(G,{children:(0,O.jsx)(re,{type:"text",placeholder:"Print your name",name:"name",value:t,onChange:P,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,borderColor:"blue",bg:"white",size:"lg",fontSize:"24px",mt:"2"})})]}),(0,O.jsxs)(y,{children:["Number",(0,O.jsxs)(G,{children:[(0,O.jsx)(ue,{pointerEvents:"none",children:(0,O.jsx)(he,{color:"gray.600",mt:"6",w:"24"})}),(0,O.jsx)(re,{type:"tel",placeholder:"Phone number",name:"number",value:o,onChange:P,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,borderColor:"blue",bg:"white",size:"lg",fontSize:"24px",mt:"2"})]})]}),(0,O.jsx)(pe.z,{type:"submit",colorScheme:"messenger",borderWidth:"1px",borderColor:"messenger",m:"6px auto 2px auto",p:"2px 20px 4px 20px",fontSize:"24px",_hover:{bg:"messenger",color:"white",borderWidth:"1px",borderColor:"orange",fontSize:"25"},_active:{bg:"tomato",color:"teal.500"},_selected:{bg:"tomato",color:"white"},children:"Add contact"})]})}function xe(){return(0,O.jsx)("main",{children:(0,O.jsx)(fe,{})})}}}]);
//# sourceMappingURL=530.8991467d.chunk.js.map