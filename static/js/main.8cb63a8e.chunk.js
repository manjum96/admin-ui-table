(this["webpackJsonpadmin-ui-table"]=this["webpackJsonpadmin-ui-table"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(23),r=n.n(i),s=(n(29),n(8)),o=n(9),l=n(13),u=n(12),j=(n(30),n(2)),b=n(4),d=n(0),O=function(e){var t=e.onChange,n=e.isChecked;return Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"checkBox",onChange:t,checked:n})})},f=function(e){var t=e.onChange,n=e.value,c=e.disabled;return Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",value:n,style:{borderWidth:c?0:1},onChange:function(e){t(e)},disabled:c})})},h=function(e){var t=e.editMode,n=e.onClickEdit,c=e.onClickSubmit,a=e.onClickDelete,i=e.onClickCancel;return Object(d.jsxs)("td",{children:[t&&Object(d.jsx)("button",{onClick:c,className:"btn btn-success mr-2",children:Object(d.jsx)("i",{className:"fa fa-check"})}),t&&Object(d.jsx)("button",{onClick:i,className:"btn btn-danger mr-2",children:Object(d.jsx)("i",{className:"fa fa-close"})}),!t&&Object(d.jsx)("button",{onClick:n,className:"btn btn-warning mr-2",children:Object(d.jsx)("i",{className:"fa fa-edit"})}),Object(d.jsx)("button",{onClick:a,className:"btn btn-danger",children:Object(d.jsx)("i",{className:"fa fa-trash"})})]})},x=function(e){var t=e.item,n=(e.onChange,e.actions),a=n.onClickEdit,i=n.onClickSubmit,r=n.onClickDelete,s=n.onClickCancel,o=n.onSelectRow,l=Object(c.useState)(t.name),u=Object(b.a)(l,2),x=u[0],m=u[1],C=Object(c.useState)(t.email),g=Object(b.a)(C,2),p=g[0],v=g[1],k=Object(c.useState)(t.role),S=Object(b.a)(k,2),N=S[0],w=S[1];return Object(d.jsxs)("tr",{style:{backgroundColor:t.isChecked?"#ece5e5":null},children:[Object(d.jsx)("td",{children:Object(d.jsx)(O,{onChange:function(e){o(Object(j.a)(Object(j.a)({},t),{},{isChecked:!t.isChecked}))},isChecked:t.isChecked})}),Object(d.jsx)(f,{value:x,onChange:function(e){m(e.target.value)},disabled:!t.canEdit}),Object(d.jsx)(f,{value:p,onChange:function(e){v(e.target.value)},disabled:!t.canEdit}),Object(d.jsx)(f,{value:N,onChange:function(e){w(e.target.value)},disabled:!t.canEdit}),Object(d.jsx)(h,{editMode:t.canEdit,onClickEdit:function(){a(Object(j.a)(Object(j.a)({},t),{},{canEdit:!t.canEdit}))},onClickSubmit:function(){i(Object(j.a)(Object(j.a)({},t),{},{name:x,email:p,role:N,canEdit:!1}))},onClickDelete:function(){r(Object(j.a)({},t))},onClickCancel:function(){s(Object(j.a)(Object(j.a)({},t),{},{canEdit:!1})),m(t.name),v(t.email),w(t.role)}})]},t.id)},m=function(e){var t=e.data,n=void 0===t?[]:t,c=e.rowActions;return Object(d.jsx)("tbody",{children:n.map((function(e,t){return Object(d.jsx)(x,{item:e,actions:c},e.id)}))})},C=function(e){var t=e.isSelectAll,n=e.onToggleSelectAll,c=e.data,a=(void 0===c?[]:c).map((function(e){return Object(d.jsx)("th",{children:e},e)}));return Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsx)(O,{onChange:function(){n(!t)},isChecked:t})}),a]})})},g=function(e){var t=e.headerData,n=e.bodyData,c=e.rowActions,a=e.onToggleSelectAll,i=e.isSelectAll;return Object(d.jsxs)("table",{className:"table-bordered table",children:[Object(d.jsx)(C,{data:t,onToggleSelectAll:a,isSelectAll:i}),Object(d.jsx)(m,{data:n,rowActions:c})]})},p=n(5),v=n(6),k=n.n(v),S=n(11),N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.itemsCount,n=e.pageSize,c=e.currentPage,a=e.onPageChange,i=e.onPrevPageChange,r=e.onNextPageChange,s=e.onGoToPage,o=Math.ceil(t/n);if(1===o)return null;for(var l=[],u=1;u<=o;u++)l.push(u);return Object(d.jsx)("nav",{style:{float:"right"},children:Object(d.jsxs)("ul",{className:"pagination",children:[Object(d.jsx)("li",{className:"page-item",children:Object(d.jsx)("a",{className:"page-link",onClick:function(){return s(1)},children:"First"})}),Object(d.jsx)("li",{className:"page-item",children:Object(d.jsx)("a",{className:"page-link",onClick:i,children:"Previous"})}),l.map((function(e){return Object(d.jsx)("li",{className:e===c?"page-item active":"page-item",children:Object(d.jsx)("a",{className:"page-link",style:{cursor:"pointer"},onClick:function(){return a(e)},children:e})},e)})),Object(d.jsx)("li",{className:"page-item",children:Object(d.jsx)("a",{className:"page-link",onClick:r,children:"Next"})}),Object(d.jsx)("li",{className:"page-item",children:Object(d.jsx)("a",{className:"page-link",onClick:function(){return s(o)},children:"Last"})})]})})}}]),n}(c.Component),w=function(e){var t=e.searchText,n=e.onChange;return Object(d.jsx)("div",{className:"searchBox",children:Object(d.jsx)("input",{value:t,type:"text",className:"form-control",width:"50px",onChange:function(e){n(e.currentTarget.value)},placeholder:"Search by name, role or email"})})},y=n(24),E=n.n(y),A=function(){var e=Object(S.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=["Name","Email","Role","Actions"],D=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(n),r=Object(b.a)(i,2),s=r[0],o=r[1],l=Object(c.useState)(s),u=Object(b.a)(l,2),O=u[0],f=u[1],h=Object(c.useState)(1),x=Object(b.a)(h,2),m=x[0],C=x[1],v=Object(c.useState)(10),y=Object(b.a)(v,2),E=y[0],D=(y[1],Object(c.useState)("")),T=Object(b.a)(D,2),I=T[0],L=T[1],F=Object(c.useState)(!1),M=Object(b.a)(F,2),B=M[0],z=M[1],R=function(){var e=Object(S.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:(t=e.sent).forEach((function(e){e.isChecked=!1,e.canEdit=!1})),a(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){R()}),[]);Object(c.useEffect)((function(){o(function(e){var t=Object(p.a)(n);return e.length&&(t=t.filter((function(t){return!!t.name.toLowerCase().includes(e.toLowerCase())||!!t.role.toLowerCase().includes(e.toLowerCase())||!!t.email.toLowerCase().includes(e.toLowerCase())}))),t}(I))}),[n,I]),Object(c.useEffect)((function(){f(function(e,t,n){var c=n*t,a=c-t;return e.slice(a,c)}(s,E,m))}),[s,E,m]);var G=function(e){var t=n.map((function(t){if(e){if(-1!==O.findIndex((function(e){return t.id===e.id})))return Object(j.a)(Object(j.a)({},t),{},{isChecked:!0})}else if(!e&&t.isChecked)return Object(j.a)(Object(j.a)({},t),{},{isChecked:!1});return t}));a(t),z(e)};return Object(d.jsxs)("div",{children:[Object(d.jsx)(w,{value:I,onChange:function(e){L(e),C(1),B&&(G(!1),z(!1))}}),Object(d.jsx)(g,{headerData:P,bodyData:O,rowActions:{onSelectRow:function(e){var t=Object(p.a)(n),c=t.findIndex((function(t){return t.id===e.id}));-1!==c&&t.splice(c,1,e),a(t)},onClickEdit:function(e){var t=Object(p.a)(n),c=t.findIndex((function(t){return t.id===e.id}));-1!==c&&t.splice(c,1,e),a(t)},onClickDelete:function(e){var t=Object(p.a)(n),c=t.findIndex((function(t){return t.id===e.id}));-1!==c&&t.splice(c,1),a(t)},onClickSubmit:function(e){var t=Object(p.a)(n),c=t.findIndex((function(t){return t.id===e.id}));-1!==c&&t.splice(c,1,e),a(t)},onClickCancel:function(e){var t=Object(p.a)(n),c=t.findIndex((function(t){return t.id===e.id}));-1!==c&&t.splice(c,1,e),a(t)}},onToggleSelectAll:G,isSelectAll:B}),Object(d.jsx)("button",{className:"btn btn-danger",onClick:function(){var e=n.filter((function(e){return!e.isChecked}));a(e),z(!1)},children:"Delete selected"}),Object(d.jsx)(N,{itemsCount:s.length,currentPage:m,pageSize:E,onPageChange:function(e){C(e)},onNextPageChange:function(){Math.ceil(s.length/E)!==m&&C(m+1)},onPrevPageChange:function(){m>1&&C(m-1)},onGoToPage:function(e){C(e)}})]})},T=function(e){e.params;return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("h2",{children:"Admin UI"})}),Object(d.jsx)(D,{})]})},I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)(T,{})})}}]),n}(c.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};n(51),n(52);r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),L()}},[[53,1,2]]]);
//# sourceMappingURL=main.8cb63a8e.chunk.js.map