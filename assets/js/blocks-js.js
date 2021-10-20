!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=wp.element.Fragment,r=wp.components.Spinner,o=function(e){return"loading"==e.status?[React.createElement(a,null,React.createElement("div",{className:"st-block-preview"},React.createElement("div",{className:"st-block-preview__content"},React.createElement("div",{className:"st-block-preview__logo"}," "),React.createElement(r,null))))]:null},s=function(e,t){return"strong-view strong-view-id-".concat(e," ").concat(t," wpmtst-").concat(t)},i=function(e,t){var n="strong-content strong-".concat(e," columns-").concat(t);return""==e?n="strong-content strong-normal columns-1":"masonry"==e&&(n+=" masonry"),n},l=function(e){return React.createElement("h3",{class:"wpmtst-testimonial-heading testimonial-heading"},React.createElement("a",{href:e.meta.meta.company_website[0],rel:"bookmark"},e.title.rendered))},c=function(e){switch(e){case"widget-thumbnail":return"75";case"thumbnail":return"150";case"medium":return"300";case"large":return"1024"}},u=wp.element,m=(u.Component,u.Fragment,u.useEffect),p=function(e){var t,n,a,r=e.testimonial,o=e.attributes,s=e.viewType,i=(e.layout,r.id);r.title,r.content,r.meta.meta;if("display"==s){var u=o.layout;o.columns;m((function(){var e;"masonry"==u&&((e=jQuery('.strong-view[data-state="idle"] .strong-masonry')).prepend('<div class="grid-sizer"></div><div class="gutter-sizer"></div>'),e.masonry({columnWidth:".grid-sizer",gutter:".gutter-sizer",itemSelector:".wpmtst-testimonial",percentPosition:!0}),e.closest(".strong-view").attr("data-state","init"))}))}return[React.createElement("div",{className:"wpmtst-testimonial testimonial post-".concat(i," t-slide")},React.createElement("div",{className:"wpmtst-testimonial-inner testimonial-inner"},React.createElement("div",{className:"wpmtst-testimonial-content testimonial-content"},l(r),React.createElement("p",null,r.content.raw.replace(/(<([^>]+)>)/gi,""))),(t=r.meta.featured_image,n=st_views.gravatar,a=c("thumbnail"),0==t?React.createElement("div",{class:"wpmtst-testimonial-image testimonial-image"},React.createElement("img",{alt:"",src:n,srcset:n,class:"avatar avatar-".concat(a," photo"),height:a,width:a,loading:"lazy"})):React.createElement("div",{class:"wpmtst-testimonial-image testimonial-image"},React.createElement("img",{width:a,height:a,src:t,class:"attachment-thumbnail size-thumbnail wp-post-image",alt:"",srcset:t,sizes:"(max-width: ".concat(a,"px) 100vw, ").concat(a,"px")}))),React.createElement("div",{class:"clear"})))]},d=function(e){return[React.createElement("div",{className:"pagination"},React.createElement("a",{className:"st-previous"},React.createElement("span",null,"Previous Page")),React.createElement("div",{className:"pages"},React.createElement("a",{className:"page-numbers"},"1"),React.createElement("a",{className:"page-numbers"},"2"),React.createElement("a",{className:"page-numbers"},"3"),React.createElement("a",{className:"page-numbers"},"4"),React.createElement("a",{className:"page-numbers"},"5"),React.createElement("a",{className:"page-numbers dots"},"..."),React.createElement("a",{className:"page-numbers"},"8")),React.createElement("a",{className:"st-next"},React.createElement("span",null,"Next Page")))]};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var y=wp.element,f=y.Fragment,b=y.useEffect,h=function(e){var t=e.attributes,n=e.initMasonry,a=e.setMasonryObj,r=(e.test,t.id),o=t.template,l=t.layout,c=t.columns,u=t.testimonials,m=t.pagination;t.testimonialsToShow;return b((function(){"masonry"==l&&n(r,a)}),[l,c]),[React.createElement("div",{className:s(r,o),"data-count":u.length,"data-state":"idle"},React.createElement("div",{className:i(l,c)},React.createElement(f,null,0!=u&&React.createElement(React.Fragment,null,u.map((function(t,a){return[React.createElement(p,g({testimonial:t,index:a,initMasonry:n},e))]}))))),m&&React.createElement(React.Fragment,null,React.createElement(d,null)))]},v=wp.element.useEffect,w=function(e){var t=e.allTestimonialsCategories,n=e.selectedCategories,a=e.setAttributes,r=e.dispatch;return v((function(){var e=[];if(t.forEach((function(t){e.push({value:t.id,label:t.name,count:t.count,slug:t.slug})})),!jQuery(".st-testimonial-categories-input").hasClass("selectize-control"))jQuery(".st-testimonial-categories-input").selectize({valueField:"value",plugins:["remove_button"],labelField:"label",searchField:["label","value"],multiple:!0,create:!1,placeholder:"Search for category...",preload:!0,allowEmptyOptions:!0,closeAfterSelect:!0,options:n.concat(e),render:{option:function(e,t){return'<div class="st-categories"><p class="st-category-name">'+t(e.label)+'</p><p class="st-category-count">'+t(e.count)+"</p></div>"}},onChange:function(e){e=e.split(","),r({type:"SELECTEDCATEGORYCHANGE",payload:{value:e,setAttributes:a}})}})}),[]),React.createElement("input",{className:"st-testimonial-categories-input",value:0==n.length?"":n.join()})},E=wp.i18n.__,O=wp.element,R=(O.Fragment,O.useState,wp.blockEditor.InspectorControls),S=wp.components,j=(S.Button,S.PanelBody),C=S.RangeControl,T=S.SelectControl,_=S.__experimentalNumberControl,A=S.__experimentalInputControl,P=S.ToggleControl,N=S.__experimentalRadio,k=S.__experimentalRadioGroup,x=function(e){var t=e.attributes,n=e.setAttributes,a=e.testimonialsFetch,r=e.dispatch,o=e.destroyMasonry,s=e.masonryObj,i=t.id,l=t.layout,c=t.columns,u=t.testimonialsToShow,m=t.allTestimonialsCategories,p=t.selectedCategories,d=t.pagination,g=t.orderBy,y=t.query,f=t.template,b=function(){return React.createElement(k,{label:E("Type","strong-testimonials"),onChange:function(e){n({template:e})},checked:f},React.createElement(N,{value:"default"},E("Default","strong-testimonials")),React.createElement(N,{value:"modern"},E("Modern","strong-testimonials")),React.createElement(N,{value:"bold"},E("Bold","strong-testimonials")),React.createElement(N,{value:"simple"},E("Simple","strong-testimonials")),React.createElement(N,{value:"unstyled"},E("Unstyled","strong-testimonials")))};return React.createElement(React.Fragment,null,React.createElement(R,null,React.createElement(j,{title:E("Layout Settings","strong-testimonials"),initialOpen:!0},React.createElement(T,{label:E("Type","strong-testimonials"),value:l,options:[{label:E("List","strong-testimonials"),value:""},{label:E("Masonry","strong-testimonials"),value:"masonry"}],onChange:function(e){"masonry"!=e&&o(i,s),n({layout:e})}}),""!=l&&React.createElement(C,{label:E("Columns","strong-testimonials"),value:c,onChange:function(e){return n({columns:e})},min:2,max:4}),React.createElement(React.Fragment,null,React.createElement("label",null,"No. of testimonials"),React.createElement(_,{isShiftStepEnabled:!0,onChange:function(e){r({type:"TESTIMONIALSTOSHOWCHANGE",payload:{value:e,setAttributes:n}})},shiftStep:10,value:u,min:0,max:100}))),React.createElement(j,{title:E("Testimonial Category","strong-testimonials"),initialOpen:!0},null!=m&&React.createElement(React.Fragment,null,React.createElement(w,{setAttributes:n,allTestimonialsCategories:m,selectedCategories:p,testimonialsFetch:a,dispatch:r}))),React.createElement(j,{title:E("Order By","strong-testimonials"),initialOpen:!0},React.createElement(T,{value:g,options:[{label:E("Newest First","strong-testimonials"),value:"desc"},{label:E("Oldest First","strong-testimonials"),value:"asc"}],onChange:function(e){r({type:"ORDERBYCHANGE",payload:{value:e,setAttributes:n}})}})),React.createElement(j,{title:E("Pagination","strong-testimonials"),initialOpen:!0},React.createElement(P,{label:E("Toggle Pagination","strong-testimonials"),checked:d,help:E(d?"Pagination is turned on":"Pagination is turned off","strong-testimonials"),onChange:function(){return n({pagination:!d})}}),d&&React.createElement(React.Fragment,null,React.createElement(A,{type:"number",label:E("Items Per Page","strong-testimonials"),min:1,max:100,value:u,onChange:function(e){r({type:"TESTIMONIALSTOSHOWCHANGE",payload:{value:e,setAttributes:n}})}}),React.createElement(A,{type:"number",label:E("Offset","strong-testimonials"),min:0,max:100,onChange:function(e){r({type:"OFFSETCHANGE",payload:{value:e,setAttributes:n,query:y}})},value:y.offset}),React.createElement(A,{type:"number",label:E("Max Pages To Show","strong-testimonials"),min:0,max:100,value:y.pages,onChange:function(e){r({type:"PAGESCHANGE",payload:{value:e,setAttributes:n,query:y}})}}))),React.createElement(j,{initialOpen:!0,title:E("Template Settings","strong-testimonials")},b)))},F=function(e){wp.apiFetch({path:"wp/v2/wpm-testimonial-category"}).then((function(t){e({allTestimonialsCategories:t})}))};function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,o=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);s=!0);}catch(e){i=!0,r=e}finally{try{s||null==n.return||n.return()}finally{if(i)throw r}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}wp.i18n.__;var q=wp.element,z=(q.Component,q.Fragment,q.useEffect),L=q.useReducer,Q=q.useState,W=(q.useRef,wp.data),Y=(W.withSelect,W.useSelect),U=wp.components;U.SelectControl,U.Spinner,U.Toolbar,U.Button,wp.blockEditor.BlockControls,wp.compose.compose;function $(e,t){switch(t.type){case"ORDERBYCHANGE":return e.orderBy=t.payload.value,t.payload.setAttributes({orderBy:t.payload.value,testimonials:[],status:"loading"}),e;case"SELECTEDCATEGORYCHANGE":return t.payload.setAttributes({selectedCategories:t.payload.value,testimonials:[],status:"loading"}),e;case"TESTIMONIALSTOSHOWCHANGE":return""!=t.payload.value&&t.payload.setAttributes({testimonialsToShow:parseInt(t.payload.value),testimonials:[],status:"loading"}),e;case"OFFSETCHANGE":return t.payload.setAttributes({query:G(G({},t.payload.query),{},{offset:parseInt(t.payload.value)}),testimonials:[],status:"loading"}),e;case"PAGESCHANGE":return t.payload.setAttributes({query:G(G({},t.payload.query),{},{pages:parseInt(t.payload.value)}),testimonials:[],status:"loading"}),e;default:return e}}var J=function(e){var t=e.setAttributes,n=e.attributes,a=n.status,r=n.testimonials,s=n.testimonialsToShow,i=n.selectedCategories,l=n.orderBy,c=(n.id,n.query),u=M(L($,{orderBy:l,selectedCategories:i,testimonialsToShow:s}),2),m=(u[0],u[1]),p=Y((function(e){var t=e("core").getEntityRecords,n={post_status:"publish",per_page:0==s?-1:s,order:"asc"==l?"asc":"desc",offset:c.offset,pages:c.pages};return 0!=i.length&&""!=i.join()&&(n["wpm-testimonial-category"]=i),t("postType","wpm-testimonial",n)||[]})),d=M(Q(!1),2),g=d[0],y=d[1],f=function(e,t){e.currentTarget.setMasonryObj(e.currentTarget)},b=function(e,t){return 0!=t&&(jQuery(t).masonry("destroy"),!0)};return z((function(){0==n.id&&(F(t),t({id:Math.floor(1e4*Math.random())+1,layout:"",template:"default",columns:2}))}),[]),z((function(){0!=r.length||(0==p.length?t({status:"loading"}):0!=p.length&&0==r.length&&t({status:"ready",testimonials:p}))})),z((function(){}),[l,i,s]),"loading"===a?[React.createElement(React.Fragment,null,React.createElement(x,B({},e,{testimonialsFetch:p,dispatch:m,destroyMasonry:b,masonryObj:g})),React.createElement(o,{status:a}))]:React.createElement(React.Fragment,null,React.createElement(x,B({},e,{testimonialsFetch:p,dispatch:m,destroyMasonry:b,masonryObj:g})),React.createElement(h,B({},e,{initMasonry:function(e,t){var n=jQuery(".strong-view-id-".concat(e," .strong-masonry"));0==jQuery(".grid-sizer").length&&n.prepend('<div class="grid-sizer"></div><div class="gutter-sizer"></div>');var a=n.masonry({columnWidth:".grid-sizer",gutter:".gutter-sizer",itemSelector:".wpmtst-testimonial",percentPosition:!0});a[0].setMasonryObj=t,a.on("layoutComplete",f),n.closest(".strong-view-id-".concat(e)).attr("data-state","init")},setMasonryObj:y})))},K=function(e,t,n,a){var r="strong-view strong-view-id-".concat(e," ").concat(t," wpmtst-").concat(t," slider-container slider-mode-fade slider-adaptive");return"show_multiple"==a&&(r+=" carousel slider-mode-horizontal "),1==n.buttons&&(r+=" controls-type-sides controls-style-buttons"),!0===n.dots&&(r+=" pager-type-full pager-style-buttons"),r},V=wp.element,X=V.Fragment,Z=V.useEffect,ee=(V.useState,function(e){var t=e.attributes,n=t.id,a=t.template,r=t.testimonials,o=t.slideshowSettings,s=t.viewType,i=t.slideshowType,l=o.config;Z((function(){!1!==l&&c({mode:"horizontal",speed:.1,pause:l.pause,autoHover:l.auto_hover,autoStart:0,infiniteLoop:l.continuous_sliding,stopAutoOnClick:l.stop_auto_on_click,adaptiveHeight:!0,controls:1,autoControls:1,pager:"full"==l.pager_type?1:0,slideCount:r.length,debug:!1,type:i,breakpoints:{single:{maxSlides:1,moveSlides:1,slideMargin:1},multiple:{desktop:{width:1200,maxSlides:2,moveSlides:1,slideMargin:20},large:{width:1024,maxSlides:2,moveSlides:1,slideMargin:20},medium:{width:640,maxSlides:1,moveSlides:1,slideMargin:10},small:{width:480,maxSlides:1,moveSlides:1,slideMargin:1}}},startText:"",stopText:"",prevText:"text"==l.controls_style?"Prev":"",nextText:"text"==l.controls_style?"Next":"",buildPager:"text"==l.pager_style?null:"icons",simpleSetPager:1})}),i);var c=function(e){jQuery(".strong-view-id-".concat(n,'.slider-container[data-state="idle"]')).strongSlider(e)};return React.createElement(X,null,React.createElement("div",{className:K(n,a,o,i),"data-count":r.length,"data-slider-var":"strong_slider_id_".concat(n),"data-state":"idle"}," ",React.createElement("div",{class:"strong-content wpmslider-content"},r.length>0&&React.createElement(X,null,r.map((function(e,t){return[React.createElement(p,{testimonial:e,index:t,viewType:s})]}))))))});function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){ae(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=wp.i18n.__,oe=wp.element,se=(oe.Fragment,oe.useState,wp.blockEditor.InspectorControls),ie=wp.components,le=(ie.Button,ie.PanelBody),ce=(ie.RangeControl,ie.SelectControl),ue=ie.__experimentalNumberControl,me=(ie.__experimentalInputControl,ie.ToggleControl),pe=ie.__experimentalRadio,de=ie.__experimentalRadioGroup,ge=function(e){var t=e.attributes,n=e.setAttributes,a=e.testimonialsFetch,r=e.dispatch,o=(t.id,t.slideshowType),s=t.testimonialsToShow,i=t.allTestimonialsCategories,l=t.selectedCategories,c=t.orderBy,u=t.template,m=t.slideshowSettings,p=m.buttons,d=m.dots,g=function(){return React.createElement(de,{label:re("Type","strong-testimonials"),onChange:function(e){n({template:e})},checked:u},React.createElement(pe,{value:"default"},re("Default","strong-testimonials")),React.createElement(pe,{value:"modern"},re("Modern","strong-testimonials")),React.createElement(pe,{value:"bold"},re("Bold","strong-testimonials")),React.createElement(pe,{value:"simple"},re("Simple","strong-testimonials")),React.createElement(pe,{value:"unstyled"},re("Unstyled","strong-testimonials")))};return React.createElement(React.Fragment,null,React.createElement(se,null,React.createElement(le,{title:re("Slideshow Settings","strong-testimonials"),initialOpen:!0},React.createElement(ce,{label:re("Type","strong-testimonials"),value:o,options:[{label:re("Single","strong-testimonials"),value:"show_single"},{label:re("Multiple","strong-testimonials"),value:"show_multiple"}],onChange:function(e){n({slideshowType:e})}}),React.createElement(me,{label:re("Buttons","strong-testimonials"),checked:p,help:re(p?"Buttons are turned on":"Buttons are turned off","strong-testimonials"),onChange:function(){return n({slideshowSettings:ne(ne({},m),{},{buttons:!p})})}}),React.createElement(me,{label:re("Dots","strong-testimonials"),checked:d,help:re(d?"Dots are turned on":"Dots are turned off","strong-testimonials"),onChange:function(){return n({slideshowSettings:ne(ne({},m),{},{dots:!d})})}}),React.createElement(React.Fragment,null,React.createElement("label",null,"No. of testimonials"),React.createElement(ue,{isShiftStepEnabled:!0,onChange:function(e){r({type:"TESTIMONIALSTOSHOWCHANGE",payload:{value:e,setAttributes:n}})},shiftStep:10,value:s,min:0,max:100}))),React.createElement(le,{title:re("Testimonials Category","strong-testimonials"),initialOpen:!0},null!=i&&React.createElement(React.Fragment,null,React.createElement(w,{setAttributes:n,allTestimonialsCategories:i,selectedCategories:l,testimonialsFetch:a,dispatch:r}))),React.createElement(le,{title:re("Order By","strong-testimonials"),initialOpen:!0},React.createElement(ce,{value:c,options:[{label:re("Newest First","strong-testimonials"),value:"desc"},{label:re("Oldest First","strong-testimonials"),value:"asc"}],onChange:function(e){r({type:"ORDERBYCHANGE",payload:{value:e,setAttributes:n}})}})),React.createElement(le,{initialOpen:!0,title:re("Template Settings","strong-testimonials")},g)))};function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){be(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function he(e,t){switch(t.type){case"ORDERBYCHANGE":return e.orderBy=t.payload.value,t.payload.setAttributes({orderBy:t.payload.value,testimonials:[],status:"loading"}),e;case"SELECTEDCATEGORYCHANGE":return t.payload.setAttributes({selectedCategories:t.payload.value,testimonials:[],status:"loading"}),e;case"TESTIMONIALSTOSHOWCHANGE":return""!=t.payload.value&&t.payload.setAttributes({testimonialsToShow:parseInt(t.payload.value),testimonials:[],status:"loading"}),e;case"OFFSETCHANGE":return t.payload.setAttributes({query:fe(fe({},t.payload.query),{},{offset:parseInt(t.payload.value)}),testimonials:[],status:"loading"}),e;case"PAGESCHANGE":return t.payload.setAttributes({query:fe(fe({},t.payload.query),{},{pages:parseInt(t.payload.value)}),testimonials:[],status:"loading"}),e;default:return e}}function ve(){return(ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(Object(n),!0).forEach((function(t){Oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,o=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);s=!0);}catch(e){i=!0,r=e}finally{try{s||null==n.return||n.return()}finally{if(i)throw r}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Se(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Se(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Se(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var je=wp.element,Ce=(je.Component,je.Fragment,je.useEffect),Te=je.useReducer,_e=wp.data,Ae=(_e.withSelect,_e.useSelect),Pe=wp.components,Ne=(Pe.SelectControl,Pe.Spinner,Pe.Toolbar,Pe.Button,wp.blockEditor.BlockControls,wp.compose.compose,function(e){var t=e.setAttributes,n=e.attributes,a=n.status,r=n.testimonials,s=n.testimonialsToShow,i=n.selectedCategories,l=n.orderBy,c=n.id,u=(n.query,n.slideshowSettings),m=u.config,p=Re(Te(he,{orderBy:l,selectedCategories:i,testimonialsToShow:s}),2),d=(p[0],p[1]),g=Ae((function(e){var t=e("core").getEntityRecords,n={post_status:"publish",per_page:0==s?-1:s,order:"asc"==l?"asc":"desc"};return 0!=i.length&&""!=i.join()&&(n["wpm-testimonial-category"]=i),t("postType","wpm-testimonial",n)||[]}));return Ce((function(){0==c&&(F(t),t({id:Math.floor(1e4*Math.random())+1,template:"default",type:"single"})),0==m&&t({slideshowSettings:Ee(Ee({},u),{},{config:{type:"show_single",show_single:{max_slides:1,move_slides:1,margin:1},breakpoints:{desktop:{description:"Desktop",width:1200,maxSlides:2,moveSlides:1,margin:20},large:{description:"Large",width:1024,maxSlides:2,moveSlides:1,margin:20},medium:{description:"Medium",width:640,maxSlides:2,moveSlides:1,margin:10},small:{description:"Small",width:480,maxSlides:2,moveSlides:1,margin:1}},effect:"fade",speed:1,pause:8,auto_start:!0,continuous_sliding:!0,auto_hover:!0,adapt_height:!0,adapt_height_speed:.5,stretch:0,stop_auto_on_click:!0,controls_type:"simple",controls_style:"buttons",pager_type:"full",pager_style:"buttons",nav_position:"inside"}})})}),[]),Ce((function(){0!=r||(0==g.length?t({status:"loading"}):0!=g.length&&0==r.length&&t({status:"ready",testimonials:g}))})),Ce((function(){}),[l,i,s]),"loading"===a?[React.createElement(o,{status:a})]:React.createElement(React.Fragment,null,React.createElement(ge,ve({},e,{testimonialsFetch:g,dispatch:d})),React.createElement(ee,e))});function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(n),!0).forEach((function(t){Fe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Be(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Me(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function De(e,t,n){return t&&Me(e.prototype,t),n&&Me(e,n),e}var Ie=wp.i18n.__,Ge=wp.blocks.registerBlockType,He=wp.blocks.createBlock,qe=function(){function e(){Be(this,e),this.registerBlock()}return De(e,[{key:"registerBlock",value:function(){this.blockName="strongtestimonials/view",this.blockAttributes={id:{type:"number",default:0},viewType:{type:"string",default:"display"},status:{type:"string",default:"ready"},template:{type:"string",default:""},layout:{type:"string",default:""},columns:{type:"number",default:2},testimonialsToShow:{type:"number",default:0},testimonials:{type:"array",default:[]},allTestimonialsCategories:{type:"array",default:[]},selectedCategories:{type:"array",default:[]},orderBy:{type:"string",default:"desc"},pagination:{type:"boolean",default:!1},query:{type:"object",default:{per_page:-1,pages:0,offset:0,order:"desc",orderBy:"date"}},align:{type:"string",default:"center"}},Ge(this.blockName,{title:"Display",description:Ie("A beatiful display to show all your testimonials","strong-testimonials"),icon:"editor-quote",category:"strong-testimonials-view",supports:{align:["center","wide","left","right"],default:"center",customClassName:!1},attributes:this.blockAttributes,transforms:{to:[{attributes:xe({},this.attributes),type:"block",priority:7,blocks:["strongtestimonials/slideshow"],transform:function(e){return He("strongtestimonials/slideshow",{id:e.id,status:e.status,template:e.template,testimonials:e.testimonials,testimonialsToShow:e.testimonialsToShow,allTestimonialsCategories:e.allTestimonialsCategories,selectedCategories:e.selectedCategories,orderBy:e.orderBy,query:e.query,align:e.align})}}]},edit:J,save:function(){return null}})}}]),e}(),ze=function(){function e(){Be(this,e),this.registerBlock()}return De(e,[{key:"registerBlock",value:function(){this.blockName="strongtestimonials/slideshow",this.blockAttributes={id:{type:"number",default:0},viewType:{type:"string",default:"slideshow"},status:{type:"string",default:"ready"},slideshowType:{type:"string",default:""},template:{type:"string",default:""},testimonialsToShow:{type:"number",default:0},testimonials:{type:"array",default:[]},allTestimonialsCategories:{type:"array",default:[]},selectedCategories:{type:"array",default:[]},orderBy:{type:"string",default:"desc"},align:{type:"string",default:"center"},slideshowSettings:{type:"object",default:{config:!1,button:!1,dots:!1}}},Ge(this.blockName,{title:"Slideshow",description:Ie("A beautiful slideshow to show all your testimonials","strong-testimonials"),icon:"editor-quote",category:"strong-testimonials-view",supports:{customClassName:!1,align:["center","wide","left","right"]},attributes:this.blockAttributes,transforms:{to:[{attributes:xe({},this.attributes),type:"block",priority:7,blocks:["strongtestimonials/view"],transform:function(e){return He("strongtestimonials/view",{id:e.id,status:e.status,template:e.template,testimonials:e.testimonials})}}]},edit:Ne,save:function(){return null}})}}]),e}();new qe,new ze}]);