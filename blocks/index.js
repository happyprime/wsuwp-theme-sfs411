!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=7)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}},function(e,t,o){var r=o(11),n=o(12),s=o(13);e.exports=function(e){return r(e)||n(e)||s()}},function(e,t,o){var r=o(8),n=o(9),s=o(10);e.exports=function(e,t){return r(e)||n(e,t)||s()}},function(e,t,o){var r=o(14);e.exports=function(e,t){if(null==e)return{};var o,n,s=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}},function(e,t){function o(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=o=function(e){return typeof e}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(t)}e.exports=o},function(e,t,o){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var a=n.apply(null,r);a&&e.push(a)}else if("object"===s)for(var l in r)o.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},function(e,t,o){"use strict";o.r(t);var r=o(3),n=o.n(r),s=o(2),a=o.n(s),l=o(4),c=o.n(l),i=o(1),u=o.n(i),m=o(5),p=o.n(m),g=o(0),f=o(6),b=o.n(f);function d(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function h(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach((function(t){u()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var y=wp.i18n.__,v=wp.blocks.registerBlockType,x=wp.compose,O=x.withState,j=x.compose,w=wp.data,E=w.withSelect,P=w.select,T=wp.element,C=T.Fragment,S=T.RawHTML,_=wp.components,k=_.PanelBody,R=_.SelectControl,A=_.ToggleControl,N=_.Toolbar,I=_.RangeControl,M=_.RadioControl,D=_.IconButton,F=_.Spinner,L=void 0===wp.blockEditor?wp.editor:wp.blockEditor,B=L.InspectorControls,z=L.BlockControls,V=wp.url.addQueryArgs,H=wp.date,q=H.dateI18n,G=H.format,Z=H.__experimentalGetSettings,Q=wp.apiFetch,U={slug:"",terms:[],operator:"IN"};v("happyprime/latest-custom-posts",{title:y("Latest Custom Posts"),description:y("A list of posts for a custom post type and/or taxonomy."),icon:Object(g.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},Object(g.createElement)("path",{d:"M0,0h24v24H0V0z",fill:"none"}),Object(g.createElement)("rect",{x:"11",y:"7",width:"6",height:"2"}),Object(g.createElement)("rect",{x:"11",y:"11",width:"6",height:"2"}),Object(g.createElement)("rect",{x:"11",y:"15",width:"6",height:"2"}),Object(g.createElement)("rect",{x:"7",y:"7",width:"2",height:"2"}),Object(g.createElement)("rect",{x:"7",y:"11",width:"2",height:"2"}),Object(g.createElement)("rect",{x:"7",y:"15",width:"2",height:"2"}),Object(g.createElement)("path",{d:"M20.1,3H3.9C3.4,3,3,3.4,3,3.9v16.2C3,20.5,3.4,21,3.9,21h16.2c0.4,0,0.9-0.5,0.9-0.9V3.9C21,3.4,20.5,3,20.1,3z M19,19H5V5h14V19z"})),category:"widgets",keywords:[y("recent posts"),y("custom posts")],supports:{align:!0,html:!1},edit:j([O({latestPosts:[],latestPostsError:!1,doingLatestPostsFetch:!1,triggerRefresh:!0,taxonomyTerms:[],triggerTermsRefresh:!0,doingTermsFetch:!1,errorMessage:!1}),E((function(e,t){var o=t.attributes,r=t.setState,n=t.latestPosts,s=t.doingLatestPostsFetch,a=t.triggerRefresh,l=t.taxonomyTerms,c=t.doingTermsFetch,i=t.triggerTermsRefresh,m=t.errorMessage,g=o.customPostType,f=o.itemCount,b=o.taxRelation,d=o.order,h=o.orderBy,y=0<o.taxonomies.length?o.taxonomies:o.customTaxonomy?"string"!=typeof o.customTaxonomy?o.customTaxonomy:[{slug:o.customTaxonomy,terms:["".concat(o.termID)]}]:[],v=e("core/editor").getCurrentPostId(),x=!1,O=!1;if(a&&!1===s&&(x=!0),i&&!1===c&&(O=!0),v&&y&&0<y.length&&O){r({doingTermsFetch:!0,triggerTermsRefresh:!1});var j=[];y.forEach((function(e,t){var o=e.slug.split(",")[1];void 0===p()(o)&&r({doingTermsFetch:!1}),Q({path:V("/wp/v2/"+o,{per_page:100})}).then((function(e){var o=e.map((function(e){return{label:e.name,value:e.id}}));Object.assign(j,u()({},t,o))})).catch((function(e){r({errorMessage:e.message})}))})),r({taxonomyTerms:j,doingTermsFetch:!1})}if(v&&""!==g&&x){r({doingLatestPostsFetch:!0,triggerRefresh:!1});var w={post_type:g.split(",")[0],per_page:f,order:d,orderby:h};y&&(w.taxonomies=y,b&&(w.tax_relation=b)),Q({path:V("/lcp/v1/posts/",w)}).then((function(e){r({latestPosts:e,doingLatestPostsFetch:!1})})).catch((function(e){r({errorMessage:e.message,latestPosts:[],doingLatestPostsFetch:!1})}))}return{posts:n,terms:l,errorMessage:m}}))])((function(e){var t,o=e.posts,r=e.terms,s=e.errorMessage,l=e.attributes,i=c()(e,["posts","terms","errorMessage","attributes"]),m=i.setAttributes,p=i.setState,f=i.className,d=i.doingLatestPostsFetch,v=l.itemCount,x=l.customPostType,O=l.taxRelation,j=l.order,w=l.orderBy,E=l.displayPostDate,T=l.postLayout,_=l.columns,L=l.displayPostContent,V=l.postContent,H=l.excerptLength,Q=l.displayImage,J=l.imageSize,K=0<l.taxonomies.length?l.taxonomies:l.customTaxonomy?"string"!=typeof l.customTaxonomy?l.customTaxonomy:[{slug:l.customTaxonomy,terms:["".concat(l.termID)]}]:[];t=o&&o.length>v?o.slice(0,v):o;var W=P("core").getPostTypes(),X=P("core").getTaxonomies(),Y=[],$=[],ee=[{label:y("None"),value:""}];null===W&&(W=[]),null===X&&(X=[]),W.forEach((function(e){e.viewable&&e.rest_base&&Y.push({label:e.name,value:e.slug+","+e.rest_base}),x.split(",")[0]===e.slug&&e.taxonomies.forEach((function(e){$.push(e)}))})),X.forEach((function(e){e.visibility.public&&$.includes(e.slug)&&ee.push({label:e.name,value:e.slug+","+e.rest_base})}));var te=[{icon:"list-view",title:y("List View"),onClick:function(){return m({postLayout:"list"})},isActive:"list"===T},{icon:"grid-view",title:y("Grid View"),onClick:function(){return m({postLayout:"grid"})},isActive:"grid"===T}],oe=function(e,t,o){var r=Object.values(h({},K,u()({},e,h({},K[e],u()({},t,o)))));if("slug"===t&&K[e]&&o!==K[e].slug&&(r=Object.values(h({},r,u()({},e,h({},r[e],{terms:[],operator:void 0}))))),"terms"===t){var n=!K[e].operator&&1<o.length?"IN":1<o.length?K[e].operator:void 0;r=Object.values(h({},r,u()({},e,h({},r[e],{operator:n}))))}return(l.customTaxonomy||l.termID)&&m({customTaxonomy:void 0,termID:void 0}),r},re=function(e,t){return Object(g.createElement)("div",{className:"happyprime-block-latest-custom-posts_taxonomy-setting-wrapper"},0<t&&Object(g.createElement)(D,{className:"happyprime-block-latest-custom-posts_remove-taxonomy-setting",icon:"dismiss",label:y("Remove taxonomy setting"),onClick:function(){K.splice(t,1),m({taxonomies:a()(K)}),1===K.length&&m({taxRelation:void 0}),p({triggerRefresh:!0,latestPosts:[]})}}),Object(g.createElement)("div",{className:"happyprime-block-latest-custom-posts_taxonomy-setting"},Object(g.createElement)(R,{label:y("Taxonomy"),value:e.slug?e.slug:"",options:ee,onChange:function(e){""===e?1===K.length?m({taxonomies:[]}):(K.splice(t,1),m({taxonomies:a()(K)})):(m({taxonomies:oe(t,"slug",e)}),p({triggerTermsRefresh:!0,taxonomyTerms:Object.assign(r,u()({},t,[]))})),p({triggerRefresh:!0,latestPosts:[]})}}),""!==e.slug&&r[t]&&0<r[t].length&&Object(g.createElement)(R,{multiple:!0,label:y("Term(s)"),help:y("Ctrl/Cmd + click to select multiple terms"),value:e.terms,options:r[t],onChange:function(e){m({taxonomies:oe(t,"terms",e)}),p({triggerRefresh:!0,latestPosts:[]})}}),e.terms&&1<e.terms.length&&Object(g.createElement)(M,{value:e.operator,label:y("Show posts with:"),selected:e.operator,options:[{label:y("Any selected terms"),value:"IN"},{label:y("All selected terms"),value:"AND"}],onChange:function(e){m({taxonomies:oe(t,"operator",e)}),p({triggerRefresh:!0,latestPosts:[]})}})))};return Object(g.createElement)(C,null,Object(g.createElement)(B,null,Object(g.createElement)(k,{title:y("Sorting and Filtering"),className:"panelbody-custom-latest-posts"},Object(g.createElement)(R,{key:"query-controls-order-select",label:y("Order by"),value:"".concat(w,"/").concat(j),options:[{label:y("Newest to Oldest"),value:"date/desc"},{label:y("Oldest to Newest"),value:"date/asc"},{label:y("A → Z"),value:"title/asc"},{label:y("Z → A"),value:"title/desc"}],onChange:function(e){var t=e.split("/"),o=n()(t,2),r=o[0],s=o[1],a={};s!==j&&(a.order=s),r!==w&&(a.orderBy=r),(a.order||a.orderBy)&&(m(a),p({triggerRefresh:!0,latestPosts:[]}))}}),Object(g.createElement)(I,{label:y("Number of items"),value:v,onChange:function(e){m({itemCount:Number(e)}),p({triggerRefresh:!0,latestPosts:[]})},min:1,max:100}),Object(g.createElement)(R,{label:y("Post Type"),value:x,options:Y,onChange:function(e){m({customPostType:e,taxonomies:[]}),p({triggerRefresh:!0,latestPosts:[],taxonomyTerms:[]})}}),Object(g.createElement)("div",{className:"happyprime-block-latest-custom-posts_taxonomy"},K&&1<K.length&&Object(g.createElement)("p",null,y("Taxonomy Settings")),Object(g.createElement)("div",{className:"happyprime-block-latest-custom-posts_taxonomy-settings"},K&&0<K.length?K.map((function(e,t){return re(e,t)})):re(U,0)),K&&1<K.length&&Object(g.createElement)(M,{label:y("Relation"),selected:O,options:[{label:y("And"),value:"AND"},{label:y("Or"),value:"OR"}],onChange:function(e){m({taxRelation:e}),p({triggerRefresh:!0,latestPosts:[]})}}),K&&0<K.length&&K[0].terms&&0<K[0].terms.length&&Object(g.createElement)(D,{icon:"plus-alt",label:y("Add more taxonomy settings"),onClick:function(){m({taxonomies:K.concat(U)}),O||m({taxRelation:"AND"})}},y("Add more taxonomy settings"))),"grid"===T&&Object(g.createElement)(I,{label:y("Columns"),value:_,onChange:function(e){return m({columns:e})},min:2,max:0===t.length?6:Math.min(6,t.length),required:!0})),Object(g.createElement)(k,{title:y("Post Content Settings"),className:"panelbody-custom-latest-posts"},Object(g.createElement)(A,{label:y("Display post date"),checked:E,onChange:function(e){return m({displayPostDate:e})}}),Object(g.createElement)(A,{label:y("Display post content"),checked:L,onChange:function(e){return m({displayPostContent:e})}}),L&&Object(g.createElement)(M,{label:y("Show"),selected:V,options:[{label:y("Excerpt"),value:"excerpt"},{label:y("Full Post"),value:"full_post"}],onChange:function(e){return m({postContent:e})}}),L&&"excerpt"===V&&Object(g.createElement)(I,{label:y("Max number of words in excerpt"),value:H,onChange:function(e){return m({excerptLength:e})},min:10,max:100}),Object(g.createElement)(A,{label:y("Display featured image"),checked:Q,onChange:function(e){return m({displayImage:e})}}),Q&&Object(g.createElement)(R,{label:y("Image size"),selected:J,options:P("core/editor").getEditorSettings().lcpImageSizeOptions,onChange:function(e){return m({imageSize:e})}}))),Object(g.createElement)(z,null,Object(g.createElement)(N,{controls:te})),t&&t.length>0?Object(g.createElement)("ul",{className:b()(f,u()({"wp-block-latest-posts":!0,"is-grid":"grid"===T,"has-dates":E},"columns-".concat(_),"grid"===T))},t&&t.map((function(e){return function(e){var t=e.title.trim(),o=document.createElement("div");o.innerHTML=e.excerpt;var r=o.textContent||o.innerText||"";return Object(g.createElement)("li",null,Object(g.createElement)("a",{href:e.link,target:"_blank",rel:"noreferrer noopener"},t?Object(g.createElement)(S,null,t):y("(Untitled)")),E&&e.date_gmt&&Object(g.createElement)("time",{dateTime:G("c",e.date_gmt),className:"wp-block-latest-posts__post-date"},q(Z().formats.date,e.date_gmt)),Q&&e.image[J]&&Object(g.createElement)("img",{src:e.image[J]}),L&&"excerpt"===V&&Object(g.createElement)("div",{className:"wp-block-latest-posts__post-excerpt"},Object(g.createElement)(S,{key:"html"},H<r.trim().split(" ").length?r.trim().split(" ",H).join(" ")+"…":r.trim().split(" ",H).join(" "))),L&&"full_post"===V&&Object(g.createElement)("div",{className:"wp-block-latest-posts__post-full-content"},Object(g.createElement)(S,{key:"html"},e.content.trim())))}(e)}))):Object(g.createElement)("p",{className:"happyprime-block-latest-custom-posts_error"},s||(x?d?Object(g.createElement)(F,null):y("No current items"):y("Select a post type in this block's settings."))))})),save:function(){return null}})},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var o=[],r=!0,n=!1,s=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(o.push(a.value),!t||o.length!==t);r=!0);}catch(e){n=!0,s=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw s}}return o}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t){e.exports=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}}]);