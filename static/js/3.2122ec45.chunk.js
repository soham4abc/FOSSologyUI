(this.webpackJsonpfossologyui=this.webpackJsonpfossologyui||[]).push([[3],{45:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var r=n(58),o=n(2),c=n(14),a=function(){if("undefined"!==typeof window&&Object(c.b)("token"))return!(!localStorage.getItem("user")||!localStorage.getItem("groups"));return!1},u=function(e){Object(c.e)("token"),Object(c.f)("user"),Object(c.f)("groups"),Object(c.f)("currentGroup");var t=o.a.home;e&&(t="".concat(o.a.home,"?").concat(Object(r.stringify)(e))),window.location.href=t},i=function(){return Object(c.b)("token")},s=function(){return Object(c.c)("user").name},l=function(){var e;return"admin"===(null===(e=Object(c.c)("user"))||void 0===e?void 0:e.accessLevel)}},46:function(e,t,n){"use strict";n(0);var r=n(62),o=n(1);t.a=function(e){var t=e.title;return Object(o.jsx)(r.a,{children:Object(o.jsxs)("title",{children:[t," | FOSSology"]})})}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l.a})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return o.a}));var r,o=n(54),c=(n(0),n(1)),a=function(e){var t=e.message,n=e.type,r=e.setShow;return Object(c.jsx)("div",{className:"main-container d-flex justify-content-end mt-3",children:Object(c.jsx)("div",{className:"alert bg-".concat(n," alert-dismissible fade show font-medium text-white alert-fix-position"),role:"alert",children:Object(c.jsxs)("div",{className:"d-flex",children:["danger"===n&&Object(c.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(c.jsx)("path",{d:"M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z",fill:"white"}),Object(c.jsx)("path",{d:"M14.5 25H17.5V22H14.5V25ZM14.5 6V19H17.5V6H14.5Z",fill:"#DC4146"})]}),"success"===n&&Object(c.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(c.jsx)("path",{d:"M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z",fill:"white"}),Object(c.jsx)("path",{d:"M38 15L22 33L12 25",stroke:"#28A745",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]}),t,Object(c.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(){return r(!1)},children:Object(c.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})})})},u=n(22),i=n(12).d.button(r||(r=Object(u.a)(["\n    border: none;\n    border-radius: 0.5rem;\n    padding: 0.5rem 3rem;\n    transition: all 0.5s ease-in;\n"]))),s=function(e){var t=e.type,n=e.onClick,r=e.className,o=e.children;return Object(c.jsx)(i,{type:t,onClick:n,className:"bg-primary-color text-secondary-color font-demi text-center hover-primary-color ".concat(r),children:o})},l=(n(49),n(50)),d=function(e){var t=e.title;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("button",{type:"button",className:"d-inline-block btn px-0 mt-n2","data-toggle":"tooltip","data-placement":"top",title:t,children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-info-circle-fill text-primary-color",viewBox:"0 0 16 16",children:Object(c.jsx)("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"})})})})}},49:function(e,t,n){"use strict";n(0);var r=n(1);t.a=function(e){var t=e.src,n=e.alt,o=e.style,c=e.className,a=e.width,u=e.height,i=e.align;return Object(r.jsx)("img",{src:t,alt:n,style:o,className:c,width:a,height:u,align:i})}},50:function(e,t,n){"use strict";n(0);var r=n(1);t.a=function(e){var t=e.type,n=e.name,o=e.value,c=e.id,a=e.className,u=e.onChange,i=e.children,s=e.checked,l=void 0!==s&&s,d=e.placeholder,f=void 0===d?null:d,h=e.disabled,p=void 0!==h&&h,m=e.options,b=void 0===m?null:m,j=e.multiple,v=void 0!==j&&j,g=e.property,O=e.valueProperty,y=e.noDataMessage,x=void 0===y?"No Data Found":y;return"radio"===t||"checkbox"===t?Object(r.jsxs)("div",{className:"my-0",children:[Object(r.jsx)("input",{type:t,name:n,value:o,className:a&&"mr-2 ".concat(a),onChange:u,checked:l,disabled:p,id:c}),Object(r.jsx)("label",{htmlFor:c,className:"font-medium ml-2",children:i})]}):"select"===t?Object(r.jsxs)("div",{className:"my-0 py-0",children:[i&&Object(r.jsx)("label",{htmlFor:c,className:"font-demi",children:i}),"\u2003",Object(r.jsx)("select",{name:n,className:a?"mr-2 form-control ".concat(a):"mr-2 form-control",value:o,onChange:u,multiple:v&&v,size:v?"15":"",id:c,children:b.length>0?b.map((function(e,t){return Object(r.jsx)("option",{value:O?e[O]:e.id,disabled:e.disabled,children:g?e[g]:e},e.id||t)})):Object(r.jsx)("option",{className:"font-demi",disabled:!0,children:x})})]}):Object(r.jsxs)("div",{className:"my-2",children:[Object(r.jsx)("label",{htmlFor:c,className:"font-demi",children:i}),Object(r.jsx)("input",{type:t,name:n,value:o,className:"file"===t?"ml-3 ".concat(a):"form-control ".concat(a),onChange:u,checked:l,placeholder:f,id:c})]})}},52:function(e,t,n){"use strict";t.a={forbiddenResource:"Requested resource is forbidden",noGroup:"No Group Found",noFolder:"No Folder Found",noUploads:"No Uploads Found",noPageShort:"Error: Page Not Found!",noPageLong:"We could not find the page you were searching for",groupCreate:"Successfully created the group",deletedUser:"Successfully deleted the user",confirmDeletion:"Deletion not confirmed",loading:"Loading...",jobsAdded:"Your jobs have been added to job queue",createdFolder:"Successfully created the folder",deletedFolder:"Successfully deleted the folder",updatedFolderProps:"Successfully updated the folder properties",movedFolder:"Successfully moved the folder",copiedFolder:"Successfully copied the folder",unlinkedFolder:"Successfully unlinked the folder",createdLicense:"Successfully created the license",scheduleUploadDeletion:"Successfully scheduled selected uploads for deletion",selectUploadsToDelete:"Select the uploads to delete",scheduleUploadMovement:"Successfully scheduled the selected uploads movement",selectUploadsToMove:"Select the uploads to move",scheduledUploadCopy:"Successfully scheduled the selected uploads for copy",selectUploadsToCopy:"Select the uploads to copy",uploadSuccess:"Successfully uploaded the files",scheduledAnalysis:"Analysis for the file is scheduled",queuedUpload:"The upload has been queued its upload id is"}},55:function(e,t,n){"use strict";var r="".concat("http","://").concat("localhost/repo/api/v2"),o={jobs:{details:function(e){return"".concat(r,"/jobs/").concat(e)},scheduleAnalysis:function(){return"".concat(r,"/jobs")},scheduleReport:function(){return"".concat(r,"/report")},downloadReport:function(e){return"".concat(r,"/report/").concat(e)}},auth:{tokens:function(){return"".concat(r,"/tokens")}},search:{search:function(){return"".concat(r,"/search")}},users:{self:function(){return"".concat(r,"/users/self")},getAll:function(){return"".concat(r,"/users")},getSingle:function(e){return"".concat(r,"/users/").concat(e)},delete:function(e){return"".concat(r,"/users/").concat(e)}},folders:{getAll:function(){return"".concat(r,"/folders")},getSingle:function(e){return"".concat(r,"/folders/").concat(e)},create:function(){return"".concat(r,"/folders")},read:function(e){return"".concat(r,"/folders/").concat(e)},edit:function(e){return"".concat(r,"/folders/").concat(e)},delete:function(e){return"".concat(r,"/folders/").concat(e)},move:function(e){return"".concat(r,"/folders/").concat(e)}},upload:{uploadCreate:function(){return"".concat(r,"/uploads")},getId:function(e){return"".concat(r,"/uploads/").concat(e)}},browse:{get:function(){return"".concat(r,"/uploads")}},organize:{uploads:{get:function(){return"".concat(r,"/uploads")},delete:function(e){return"".concat(r,"/uploads/").concat(e)},move:function(e){return"".concat(r,"/uploads/").concat(e)},copy:function(e){return"".concat(r,"/uploads/").concat(e)}}},admin:{groups:{create:function(){return"".concat(r,"/groups")},getAll:function(){return"".concat(r,"/groups")}}},license:{get:function(){return"".concat(r,"/license")},createCandidateLicense:function(){return"".concat(r,"/license")}},info:{info:function(){return"".concat(r,"/info")},health:function(){return"".concat(r,"/health")}}};t.a=o},56:function(e,t,n){"use strict";var r=n(59),o=n(48),c=n(58),a=n(45),u=n(52),i=n(14);t.a=function e(t){var n,s,l=t.url,d=t.method,f=t.body,h=t.groupName,p=t.headers,m=void 0===p?{}:p,b=t.queryParams,j=t.isMultipart,v=void 0!==j&&j,g=t.noHeaders,O=void 0!==g&&g,y=t.addGroupName,x=void 0===y||y,w=t.retries,N=void 0===w?0:w,S=t.isFile,C=void 0!==S&&S;(n=v?new Headers(Object(o.a)({},m)):new Headers(Object(o.a)({"content-type":"application/json",accept:"application/json"},m)),C&&(n=new Headers(Object(o.a)({},m))),x)&&n.append("groupName",h||Object(i.c)("currentGroup")||(null===(s=Object(i.c)("user"))||void 0===s?void 0:s.default_group));O&&(n={});var k={method:d,headers:n,body:f},A=l;return k.body=f?v?f:JSON.stringify(f):null,b&&(A="".concat(l,"?").concat(Object(c.stringify)(b))),fetch(A,k).then((function(t){if(t.ok){var n,o=Object(r.a)(t.headers.entries());try{for(o.s();!(n=o.n()).done;){var c=n.value;"x-total-pages"===c[0]&&Object(i.h)("pages",c[1])}}catch(s){o.e(s)}finally{o.f()}return C?t:t.json()}return N>0?setTimeout((function(){e({url:l,method:d,headers:m,retries:N-1})}),1e4):t.json().then((function(e){var n={status:t.status,ok:!1,message:e.message,body:e};return 403===e.code?e.message?Object(a.e)({message:e.message}):Object(a.e)({message:u.a.forbiddenResource}):Promise.reject(n)}))}))}},64:function(e,t,n){"use strict";n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"g",(function(){return f})),n.d(t,"a",(function(){return h}));var r=n(55),o=n(45),c=n(56),a=function(e,t,n){var a=r.a.folders.move(t);return Object(c.a)({url:a,method:"PUT",headers:{Authorization:Object(o.a)(),parent:e,action:n}})},u=function(e){return function(e){var t=r.a.folders.getAll();return Object(c.a)({url:t,method:"GET",headers:{Authorization:Object(o.a)()},groupName:e})}(e).then((function(e){return e}))},i=function(e){return function(e){var t=r.a.folders.getSingle(e);return Object(c.a)({url:t,method:"GET",headers:{Authorization:Object(o.a)()}})}(e).then((function(e){return e}))},s=function(e){return function(e){var t=r.a.folders.delete(e);return Object(c.a)({url:t,method:"DELETE",headers:{Authorization:Object(o.a)()}})}(e.id).then((function(e){return e}))},l=function(e){return function(e,t,n){var a=r.a.folders.create();return Object(c.a)({url:a,method:"POST",headers:{Authorization:Object(o.a)(),parentFolder:e,folderName:t,folderDescription:n}})}(e.parentFolder,e.folderName,e.folderDescription).then((function(e){return e}))},d=function(e){return function(e,t,n){var a=r.a.folders.edit(n);return Object(c.a)({url:a,method:"PATCH",headers:{Authorization:Object(o.a)(),name:e,description:t}})}(e.name,e.description,e.id).then((function(e){return e}))},f=function(e){var t=e.parent,n=e.id;return a(t,n,"move").then((function(e){return e}))},h=function(e){var t=e.parent,n=e.id;return a(t,n,"copy").then((function(e){return e}))}},90:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n(55),o=n(45),c=n(56),a=function(e,t,n){var a=r.a.organize.uploads.get();return Object(c.a)({url:a,method:"GET",headers:{Authorization:Object(o.a)()},groupName:t,queryParams:{recursive:n,folderId:e}})},u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a(e,t,n).then((function(e){return e}))},i=function(e){return function(e){var t=r.a.organize.uploads.delete(e);return Object(c.a)({url:t,method:"DELETE",headers:{Authorization:Object(o.a)()}})}(e).then((function(e){return e}))},s=function(e,t){return function(e,t){var n=r.a.organize.uploads.move(t);return Object(c.a)({url:n,method:"PATCH",headers:{Authorization:Object(o.a)(),folderId:e},queryParams:{recursive:!1}})}(e,t).then((function(e){return e}))},l=function(e,t){return function(e,t){var n=r.a.organize.uploads.copy(t);return Object(c.a)({url:n,method:"PUT",headers:{Authorization:Object(o.a)(),folderId:e},queryParams:{recursive:!1}})}(e,t).then((function(e){return e}))}}}]);
//# sourceMappingURL=3.2122ec45.chunk.js.map