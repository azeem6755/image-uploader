(function(e){function t(t){for(var n,l,r=t[0],s=t[1],d=t[2],c=0,p=[];c<r.length;c++)l=r[c],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},o={app:0},i=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/static/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var u=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},5674:function(e,t,a){"use strict";a("f59a")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Main")],1)},i=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[this.uploadComplete||this.uploadFailedVar?e._e():a("image-uploader",{on:{imageUploaded:e.uploadFinished,uploadFailed:e.uploadFailed}}),this.uploadComplete&&!this.uploadFailedVar?a("image-view-modal"):e._e(),this.uploadComplete&&this.uploadFailedVar?a("div",[a("p",[e._v(" Upload Failed ")]),a("button",{on:{click:e.tryAgain}},[e._v("Try Again")])]):e._e()],1)},r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-container"},[a("div",{staticClass:"upload-container"},[this.loading?a("loader",{attrs:{isLoading:this.loading}}):a("div",[a("div",{staticClass:"title"},[a("span",[e._v("Upload your Image")])]),a("div",{staticClass:"sub-title"},[a("span",{staticClass:"sub-title"},[e._v("File should be Jpeg, Png,...")])]),a("form",{staticClass:"upload-area",attrs:{id:"drop-form"},on:{drop:function(t){return e.handleFileDrop(t)}}},[a("span",{staticClass:"drop-files"},[e._v("Drop the files here!")])]),a("div",{staticClass:"upload-or"},[a("span",{staticClass:"or-text"},[e._v("OR")])]),a("div",{staticClass:"upload-btn"},[a("input",{attrs:{type:"file",id:"file-upload-button",accept:"image/*",hidden:""},on:{change:function(t){return e.uploadImage(t,"upload")}}}),a("label",{staticClass:"file-upload-label",attrs:{for:"file-upload-button"}},[e._v("Choose a file")])])])],1)])},d=[],u=(a("2b3d"),a("d3b7"),a("3ca3"),a("ddb0"),a("bc3a")),c=a.n(u),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loading"},[a("loading",{staticClass:"loader",attrs:{active:e.isLoading,"is-full-page":!1,loader:this.loader},on:{"update:active":function(t){e.isLoading=t}}}),e._v(" Uploading... ")],1)},f=[],g=a("9062"),m=a.n(g),h={name:"Loader",components:{Loading:m.a},data:function(){return{loader:"bars"}},props:["isLoading"]},v=h,b=a("2877"),y=Object(b["a"])(v,p,f,!1,null,null,null),C=y.exports,_={data:function(){return{loading:!1}},components:{Loader:C},name:"ImageUploader",mounted:function(){console.log("https://image-bucket6755.s3.amazonaws.com/media/"),this.bindEvents()},methods:{uploadImage:function(e,t){var a=this;this.loading=!0;var n=this.getBaseURL()+"upload/",o=new FormData;"upload"===t?o.append("image",e.target.files[0]):o.append("image",e.dataTransfer.files[0]);var i={header:{"Content-Type":"image/*"}};c.a.post(n,o,i).then((function(e){201===e.status?(console.log("Image uploaded"),a.loading=!1,a.$emit("imageUploaded")):400===e.status?(console.log("Image upload fail"),a.$emit("uploadFailed")):console.log(" ")}))},bindEvents:function(){["drag","dragstart","dragend","dragover","dragenter","dragleave","drop"].forEach(function(e){document.getElementById("drop-form").addEventListener(e,function(e){e.preventDefault(),e.stopPropagation()}.bind(this),!1)}.bind(this))},handleFileDrop:function(e){this.uploadImage(e,"drag")},loadImage:function(e){var t=document.getElementById("output");t.src=URL.createObjectURL(e)}}},w=_,O=(a("5bd5"),Object(b["a"])(w,s,d,!1,null,"452741be",null)),F=O.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-container"},[a("div",{staticClass:"upload-container"},[e._m(0),a("div",{staticClass:"upload-area"},[a("img",{staticClass:"image-preview",attrs:{src:this.imageUrl,alt:"uploaded-image"}})]),a("div",{staticClass:"linkin-part"},[a("input",{staticClass:"image-link",attrs:{id:"image-link",type:"text"},domProps:{value:this.imageUrl}}),a("button",{staticClass:"copy-button",on:{click:function(t){return e.copyText()}}},[e._v("Copy link")])])])])},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("span",[e._v("Uploaded Successfully!")])])}],I={name:"ImageViewModal",data:function(){return{imageUrl:""}},mounted:function(){console.log("https://image-bucket6755.s3.amazonaws.com/media/"),this.loadLastImage()},methods:{copyText:function(){var e=document.getElementById("image-link");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")},loadLastImage:function(){var e=this,t=this.getBaseURL()+"upload/load/";c.a.get(t).then((function(t){200===t.status?(console.log(t),e.imageUrl="https://image-bucket6755.s3.amazonaws.com/media/"+t.data.image,console.log("REsposne",t)):console.log("Fail ")}))}}},L=I,j=(a("5674"),Object(b["a"])(L,U,x,!1,null,null,null)),k=j.exports,E={name:"Main",components:{ImageUploader:F,ImageViewModal:k},data:function(){return{uploadComplete:!1,uploadFailedVar:!1}},methods:{uploadFinished:function(){console.log("upload finished"),this.uploadComplete=!0},uploadFailed:function(){console.log("upload failed"),this.uploadComplete=!0,this.uploadFailedVar=!0},tryAgain:function(){console.log("Trying Again"),this.uploadComplete=!1,this.uploadFailedVar=!1}}},P=E,M=Object(b["a"])(P,l,r,!1,null,null,null),R=M.exports,S={name:"App",components:{Main:R}},T=S,$=(a("034f"),Object(b["a"])(T,o,i,!1,null,null,null)),V=$.exports,B=(a("1276"),a("ac1f"),a("fb6a"),{methods:{getBaseURL:function(){var e="";return e=window.location.origin+"/",e},getCurrentDevice:function(){var e=window.innerWidth;return e>922?"desktop":e<575?"mobile":"tablet"},deepCopy:function(e){try{return JSON.parse(JSON.stringify(e))}catch(t){console.log("error in payload",e)}},getLanguageOfPage:function(){var e=this.getPathName();return"en"===e?1:"hi"===e?2:1},getPathName:function(){var e=document.createElement("a");return e.href=decodeURIComponent(window.location.href),e.pathname.split("/")[1]},chunks:function(e,t){var a=[],n=0,o=e.length;while(n<o)a.push(e.slice(n,n+=t));return a}}});n["a"].config.productionTip=!1,n["a"].mixin(B),new n["a"]({render:function(e){return e(V)}}).$mount("#app")},"5bd5":function(e,t,a){"use strict";a("6f83")},"6f83":function(e,t,a){},"85ec":function(e,t,a){},f59a:function(e,t,a){}});
//# sourceMappingURL=app.ae5e063b.js.map