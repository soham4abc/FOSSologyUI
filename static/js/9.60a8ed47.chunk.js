(this.webpackJsonpfossologyui=this.webpackJsonpfossologyui||[]).push([[9],{50:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d}));var o=n(63),r=n(2),c=n(13),a=function(){if("undefined"!==typeof window&&Object(c.b)("token"))return!(!localStorage.getItem("user")||!localStorage.getItem("groups"));return!1},i=function(e){Object(c.e)("token"),Object(c.f)("user"),Object(c.f)("groups"),Object(c.f)("currentGroup");var t=r.a.home;e&&(t="".concat(r.a.home,"?").concat(Object(o.stringify)(e))),window.location.href=t},s=function(){return Object(c.b)("token")},u=function(){return Object(c.c)("user").name},d=function(){var e;return"admin"===(null===(e=Object(c.c)("user"))||void 0===e?void 0:e.accessLevel)}},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d.a})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return r.a}));var o,r=n(62),c=(n(0),n(1)),a=function(e){var t=e.message,n=e.type,o=e.setShow;return Object(c.jsx)("div",{className:"main-container d-flex justify-content-end mt-3",children:Object(c.jsx)("div",{className:"alert bg-".concat(n," alert-dismissible fade show font-medium text-white alert-fix-position"),role:"alert",children:Object(c.jsxs)("div",{className:"d-flex",children:["danger"===n&&Object(c.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(c.jsx)("path",{d:"M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z",fill:"white"}),Object(c.jsx)("path",{d:"M14.5 25H17.5V22H14.5V25ZM14.5 6V19H17.5V6H14.5Z",fill:"#DC4146"})]}),"success"===n&&Object(c.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(c.jsx)("path",{d:"M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z",fill:"white"}),Object(c.jsx)("path",{d:"M38 15L22 33L12 25",stroke:"#28A745",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]}),t,Object(c.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(){return o(!1)},children:Object(c.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})})})},i=n(22),s=n(11).d.button(o||(o=Object(i.a)(["\n    border: none;\n    border-radius: 0.5rem;\n    padding: 0.5rem 3rem;\n    transition: all 0.5s ease-in;\n"]))),u=function(e){var t=e.type,n=e.onClick,o=e.className,r=e.children,a=e.dataDismiss,i=e.dataToggle,u=e.dataTarget,d=e.disabled,l=void 0!==d&&d;return Object(c.jsx)(s,{type:t,onClick:n,dataDismiss:a,dataToggle:i,dataTarget:u,className:"bg-primary-color text-secondary-color font-demi text-center hover-primary-color ".concat(o),disabled:l,children:r})},d=(n(55),n(54)),l=function(e){var t=e.title;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("button",{type:"button",className:"d-inline-block btn px-0 mt-n2","data-toggle":"tooltip","data-placement":"top",title:t,children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-info-circle-fill text-primary-color",viewBox:"0 0 16 16",children:Object(c.jsx)("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"})})})})}},53:function(e,t,n){"use strict";n(0);var o=n(69),r=n(1);t.a=function(e){var t=e.title;return Object(r.jsx)(o.a,{children:Object(r.jsxs)("title",{children:[t," | FOSSology"]})})}},54:function(e,t,n){"use strict";n(0);var o=n(1);t.a=function(e){var t=e.type,n=e.name,r=e.value,c=e.id,a=e.className,i=e.onChange,s=e.children,u=e.checked,d=void 0!==u&&u,l=e.placeholder,f=void 0===l?null:l,p=e.disabled,m=void 0!==p&&p,h=e.options,g=void 0===h?null:h,b=e.multiple,v=void 0!==b&&b,j=e.property,y=e.valueProperty,O=e.noDataMessage,w=void 0===O?"No Data Found":O;return"radio"===t||"checkbox"===t?Object(o.jsxs)("div",{className:"my-0",children:[Object(o.jsx)("input",{type:t,name:n,value:r,className:a&&"mr-2 ".concat(a),onChange:i,checked:d,disabled:m,id:c}),Object(o.jsx)("label",{htmlFor:c,className:"font-medium ml-2",children:s})]}):"select"===t?Object(o.jsxs)("div",{className:"my-1 py-0",children:[s&&Object(o.jsx)("label",{htmlFor:c,className:"font-demi",children:s}),"\u2003",Object(o.jsx)("select",{name:n,className:a?"mr-2 form-control ".concat(a):"mr-2 form-control",value:r,onChange:i,multiple:v&&v,size:v?"15":"",id:c,children:g.length>0?g.map((function(e,t){return Object(o.jsx)("option",{value:y?e[y]:e.id,disabled:e.disabled,children:j?e[j]:e},e.id||t)})):Object(o.jsx)("option",{className:"font-demi",disabled:!0,children:w})})]}):Object(o.jsxs)("div",{className:"my-2",children:[Object(o.jsx)("label",{htmlFor:c,className:"font-demi",children:s}),Object(o.jsx)("input",{type:t,name:n,value:r,className:"file"===t?"ml-3 ".concat(a):"form-control ".concat(a),onChange:i,checked:d,placeholder:f,id:c})]})}},55:function(e,t,n){"use strict";n(0);var o=n(1);t.a=function(e){var t=e.src,n=e.alt,r=e.style,c=e.className,a=e.width,i=e.height,s=e.align;return Object(o.jsx)("img",{src:t,alt:n,style:r,className:c,width:a,height:i,align:s})}},58:function(e,t,n){"use strict";t.a={forbiddenResource:"Requested resource is forbidden",noGroup:"No Group Found",noFolder:"No Folder Found",noUploads:"No Uploads Found",noPageShort:"Error: Page Not Found!",noPageLong:"We could not find the page you were searching for",groupCreate:"Successfully created the group",deletedGroup:"Successfully deleted the group",deletedUser:"Successfully deleted the user",addedUser:"Successfully added the user",confirmDeletion:"Deletion not confirmed",loading:"Loading...",jobsAdded:"Your jobs have been added to job queue",createdFolder:"Successfully created the folder",deletedFolder:"Successfully deleted the folder",updatedFolderProps:"Successfully updated the folder properties",movedFolder:"Successfully moved the folder",copiedFolder:"Successfully copied the folder",unlinkedFolder:"Successfully unlinked the folder",createdLicense:"Successfully created the license",scheduleUploadDeletion:"Successfully scheduled selected uploads for deletion",selectUploadsToDelete:"Select the uploads to delete",scheduleUploadMovement:"Successfully scheduled the selected uploads movement",selectUploadsToMove:"Select the uploads to move",scheduledUploadCopy:"Successfully scheduled the selected uploads for copy",selectUploadsToCopy:"Select the uploads to copy",uploadSuccess:"Successfully uploaded the files",scheduledAnalysis:"Analysis for the file is scheduled",queuedUpload:"The upload has been queued its upload id is"}},59:function(e,t,n){"use strict";var o="".concat("http","://").concat("localhost/repo/api/v2"),r={jobs:{details:function(e){return"".concat(o,"/jobs/").concat(e)},scheduleAnalysis:function(){return"".concat(o,"/jobs")},allJobs:function(){return"".concat(o,"/jobs/all")},scheduleReport:function(){return"".concat(o,"/report")},downloadReport:function(e){return"".concat(o,"/report/").concat(e)}},auth:{tokens:function(){return"".concat(o,"/tokens")}},search:{search:function(){return"".concat(o,"/search")}},users:{self:function(){return"".concat(o,"/users/self")},getAll:function(){return"".concat(o,"/users")},getSingle:function(e){return"".concat(o,"/users/").concat(e)},delete:function(e){return"".concat(o,"/users/").concat(e)},add:function(){return"".concat(o,"/users")},edit:function(e){return"".concat(o,"/users/").concat(e)},createToken:function(){return"".concat(o,"/users/tokens")},getTokens:function(e){return"".concat(o,"/users/tokens/").concat(e)}},folders:{getAll:function(){return"".concat(o,"/folders")},getSingle:function(e){return"".concat(o,"/folders/").concat(e)},create:function(){return"".concat(o,"/folders")},read:function(e){return"".concat(o,"/folders/").concat(e)},edit:function(e){return"".concat(o,"/folders/").concat(e)},delete:function(e){return"".concat(o,"/folders/").concat(e)},move:function(e){return"".concat(o,"/folders/").concat(e)}},upload:{uploadCreate:function(){return"".concat(o,"/uploads")},getId:function(e){return"".concat(o,"/uploads/").concat(e)},getSummary:function(e){return"".concat(o,"/uploads/").concat(e,"/summary")},getLicense:function(e){return"".concat(o,"/uploads/").concat(e,"/licenses")}},browse:{get:function(){return"".concat(o,"/uploads")}},organize:{uploads:{get:function(){return"".concat(o,"/uploads")},delete:function(e){return"".concat(o,"/uploads/").concat(e)},move:function(e){return"".concat(o,"/uploads/").concat(e)},copy:function(e){return"".concat(o,"/uploads/").concat(e)}}},admin:{groups:{create:function(){return"".concat(o,"/groups")},getAll:function(){return"".concat(o,"/groups")},getAllDeletable:function(){return"".concat(o,"/groups/deletable")},delete:function(e){return"".concat(o,"/groups/").concat(e)}},maintenance:{create:function(){return"".concat(o,"/maintenance")}},license:{get:function(){return"".concat(o,"/license")},createCandidateLicense:function(){return"".concat(o,"/license")}},info:{info:function(){return"".concat(o,"/info")},health:function(){return"".concat(o,"/health")}}}};t.a=r},60:function(e,t,n){"use strict";var o=n(64),r=n(52),c=n(63),a=n(50),i=n(58),s=n(13);t.a=function e(t){var n,u,d=t.url,l=t.method,f=t.body,p=t.groupName,m=t.headers,h=void 0===m?{}:m,g=t.queryParams,b=t.isMultipart,v=void 0!==b&&b,j=t.noHeaders,y=void 0!==j&&j,O=t.addGroupName,w=void 0===O||O,x=t.retries,k=void 0===x?0:x,S=t.isFile,N=void 0!==S&&S;(n=v?new Headers(Object(r.a)({},h)):new Headers(Object(r.a)({"content-type":"application/json",accept:"application/json"},h)),N&&(n=new Headers(Object(r.a)({},h))),w)&&n.append("groupName",p||Object(s.c)("currentGroup")||(null===(u=Object(s.c)("user"))||void 0===u?void 0:u.default_group));y&&(n={});var D={method:l,headers:n,body:f},A=d;return D.body=f?v?f:JSON.stringify(f):null,g&&(A="".concat(d,"?").concat(Object(c.stringify)(g))),fetch(A,D).then((function(t){if(t.ok){var n,r=Object(o.a)(t.headers.entries());try{for(r.s();!(n=r.n()).done;){var c=n.value;"x-total-pages"===c[0]&&Object(s.h)("pages",c[1])}}catch(u){r.e(u)}finally{r.f()}return N?t:t.json()}return k>0?setTimeout((function(){e({url:d,method:l,headers:h,retries:k-1})}),1e4):t.json().then((function(e){var n={status:t.status,ok:!1,message:e.message,body:e};return 403===e.code?e.message?Object(a.e)({message:e.message}):Object(a.e)({message:i.a.forbiddenResource}):Promise.reject(n)}))}))}},66:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return u}));var o=n(64),r=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=n.length,r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*o));return t},c=function(e){return Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},(new Date).addDays(e).toISOString().split("T")[0]},a=function(e){if(!e)return e;var t=e.split(" ");return 1===t.length?t[0].substring(0,2).toUpperCase():t.map((function(e,t){return t<3?e[0]:null})).join("").toUpperCase()},i=function(e,t){window.scrollTo({top:0}),t({type:"danger",text:e.message})},s=function(e){var t=e.match(/report\/([0-9]+)/);return null!=t?t[1]:null},u=function(e){var t,n=e.split(";"),r="download.txt",c=Object(o.a)(n);try{for(c.s();!(t=c.n()).done;){var a=t.value.trim().match(/filename="(.*)"/);if(null!=a){r=a[1];break}}}catch(i){c.e(i)}finally{c.f()}return r}},84:function(e,t,n){"use strict";n.d(t,"w",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"k",(function(){return u})),n.d(t,"o",(function(){return d})),n.d(t,"l",(function(){return l})),n.d(t,"p",(function(){return f})),n.d(t,"n",(function(){return p})),n.d(t,"i",(function(){return m})),n.d(t,"q",(function(){return h})),n.d(t,"r",(function(){return g})),n.d(t,"s",(function(){return b})),n.d(t,"u",(function(){return v})),n.d(t,"t",(function(){return j})),n.d(t,"v",(function(){return y})),n.d(t,"x",(function(){return O})),n.d(t,"f",(function(){return w})),n.d(t,"m",(function(){return x})),n.d(t,"h",(function(){return k})),n.d(t,"j",(function(){return S})),n.d(t,"a",(function(){return N})),n.d(t,"y",(function(){return D})),n.d(t,"g",(function(){return A})),n.d(t,"e",(function(){return C})),n.d(t,"c",(function(){return F}));var o,r,c=n(13),a=[{id:0,name:"open"},{id:1,name:"in progress"},{id:2,name:"closed"},{id:3,name:"rejected"}],i=[{id:0,name:"me"},{id:1,name:"unassigned"}],s=[{id:0,name:"-- select action --",reportFormat:"0",disabled:!0},{id:1,name:"Export DEP5",reportFormat:"dep5"},{id:2,name:"Export ReadMe_OSS",reportFormat:"readmeoss"},{id:3,name:"Export SPDX RDF",reportFormat:"spdx2"},{id:4,name:"Export SPDX tag:value",reportFormat:"spdx2tv"},{id:5,name:"Export Unified Report",reportFormat:"unifiedreport"}],u={type:"success",text:""},d={searchType:"allfiles",uploadId:"",filename:"",tag:"",filesizemin:"",filesizemax:"",license:"",copyright:"",page:1,limit:10},l={type:"danger",text:""},f={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,fileInput:null},p={analysis:Object(c.a)(),decider:{nomosMonk:!1,bulkReused:!1,newScanner:!1,ojoDecider:!1},reuse:{reuseUpload:0,reuseGroup:null===(o=Object(c.c)("user"))||void 0===o?void 0:o.default_group,reuseMain:!1,reuseEnhanced:!1,reuseReport:!1,reuseCopyright:!1}},m=[{id:1,name:"Software Repository",description:"Top Folder",parent:null}],h={folder:"",editUpload:"",reportUpload:"",newLicense:"licenseCanditate",licenseInfoInFile:!0,licenseConcluded:!1,licenseDecision:!0,existingDecisions:!0,importDiscussed:!0,copyright:!1},g={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"server",groupName:""},b={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"url"},v={url:"",name:""},j={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"vcs"},y={vcsType:"git",vcsUrl:"",vcsBranch:"",vcsName:"",vcsUsername:"",vcsPassword:""},O=[{id:"git",type:"Git"},{id:"svn",type:"SVN"}],w=[{id:10,entry:"10"},{id:25,entry:"25"},{id:50,entry:"50"},{id:100,entry:"100"}],x={analysis:Object(c.a)(),decider:{nomosMonk:!1,bulkReused:!1,newScanner:!1,ojoDecider:!1},reuse:{reuseUpload:0,reuseGroup:null===(r=Object(c.c)("user"))||void 0===r?void 0:r.default_group,reuseMain:!1,reuseEnhanced:!1,reuseReport:!1,reuseCopyright:!1}},k=[{id:1,name:"Software Repository",description:"Top Folder",parent:null}],S={a:!1,A:!1,F:!1,g:!1,E:!1,L:!1,N:!1,R:!1,t:!1,T:!1,D:!1,Z:!1,I:!1,v:!1,o:!1,l:!1,logsDate:"",goldDate:""},N=[{id:0,name:"None (very basic, no database access)",disabled:!1,value:"none"},{id:1,name:"Read-only (read, but no writes or downloads)",disabled:!1,value:"read_only"},{id:2,name:"Read-Write (read, download, or edit information)",disabled:!1,value:"read_write"},{id:3,name:"Clearing Administrator (read, download, edit information and edit decisions)",disabled:!1,value:"clearing_admin"},{id:4,name:"Full Administrator (all access including adding and deleting users)",disabled:!1,value:"admin"}],D=[{id:0,name:"Active",disabled:!1,value:"active"},{id:1,name:"Inactive",disabled:!1,value:"inactive"}],A={name:"",user_pass:null,description:"",accessLevel:"",rootFolderId:0,emailNotification:!0,email:"",defaultVisibility:"public",defaultBucketpool:2,agents:{mime:!1,monk:!1,ojo:!1,bucket:!1,copyright_email_author:!1,ecc:!1,keyword:!1,nomos:!1,package:!1,reso:!1,heritage:!1}},C=[{id:0,name:"GPL Demo bucket pool, v1",disabled:!1}],F={bucket:"Bucket Analysis",copyright_email_author:"Copyright/Email/URL/Author Analysis",ecc:"ECC Analysis, scanning for text fragments potentially relevant for export control",keyword:"Keyword Analysis",mime:"MIME-type Analysis (Determine mimetype of every file. Not needed for licenses or buckets)",monk:"Monk License Analysis, scanning for licenses performing a text comparison",nomos:"Nomos License Analysis, scanning for licenses using regular expressions",ojo:"Ojo License Analysis, scanning for licenses using SPDX-License-Identifier",package:"Package Analysis (Parse package headers)",reso:"REUSE.Software Analysis (forces *Ojo License Analysis*)",heritage:"Software Heritage Analysis"}},96:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return f}));var o=n(59),r=n(50),c=n(60),a=n(66),i=n(13),s=function(e){return function(e){var t=e.page,n=e.limit,a=o.a.jobs.scheduleAnalysis();return Object(c.a)({url:a,method:"GET",headers:{Authorization:Object(r.a)(),page:t,limit:n}})}(e).then((function(e){return{res:e,pages:Object(i.c)("pages")}}))},u=function(e){return function(e){var t=e.page,n=e.limit,a=o.a.jobs.allJobs();return Object(c.a)({url:a,method:"GET",headers:{Authorization:Object(r.a)(),page:t,limit:n}})}(e).then((function(e){return{res:e,pages:Object(i.c)("pages")}}))},d=function(e,t,n){return function(e,t,n){var a=o.a.jobs.scheduleAnalysis(),i=null===n||void 0===n?void 0:n.analysis,s=i.bucket,u=i.copyrightEmailAuthor,d=i.ecc,l=i.keyword,f=i.mime,p=i.monk,m=i.nomos,h=i.ojo,g=null===n||void 0===n?void 0:n.decider,b=g.nomosMonk,v=g.bulkReused,j=g.newScanner,y=g.ojoDecider,O=null===n||void 0===n?void 0:n.reuse,w=O.reuseUpload,x=O.reuseGroup,k=O.reuseMain,S=O.reuseEnhanced,N=O.reuseReport,D=O.reuseCopyright;return Object(c.a)({url:a,method:"POST",headers:{Authorization:Object(r.a)(),folderId:e,uploadId:t},body:{analysis:{bucket:s,copyright_email_author:u,ecc:d,keyword:l,mime:f,monk:p,nomos:m,ojo:h,package:n.analysis.package},decider:{nomos_monk:b,bulk_reused:v,new_scanner:j,ojo_decider:y},reuse:{reuse_upload:w,reuse_group:x,reuse_main:k,reuse_enhanced:S,reuse_report:N,reuse_copyright:D}}})}(e,t,n).then((function(e){return e}))},l=function(e,t){return function(e,t){var n=o.a.jobs.scheduleReport();return Object(c.a)({url:n,method:"GET",headers:{Authorization:Object(r.a)(),uploadId:e,reportFormat:t}})}(e,t).then((function(e){return e}))},f=function(e){var t=Object(a.d)(e);return null===t?null:function(e){var t=o.a.jobs.downloadReport(e);return Object(c.a)({url:t,method:"GET",headers:{Authorization:Object(r.a)()},isFile:!0})}(t).then((function(e){return e}))}}}]);
//# sourceMappingURL=9.60a8ed47.chunk.js.map