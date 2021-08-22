(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[5326],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=n,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return t?a.createElement(f,o(o({ref:r},u),{},{components:t})):a.createElement(f,o({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9166:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=t(2122),n=t(9756),i=(t(7294),t(3905)),o=["components"],l={sidebar_label:"Overview",sidebar_position:0},s="Rules overview",c={unversionedId:"rules/overview",id:"rules/overview",isDocsHomePage:!1,title:"Rules overview",description:"Rules are grouped by a category to help you understand their purpose.",source:"@site/docs/rules/overview.md",sourceDirName:"rules",slug:"/rules/overview",permalink:"/docs/rules/overview",editUrl:"https://github.com/dart-code-checker/website/blob/main/docs/rules/overview.md",version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"Overview",sidebar_position:0},sidebar:"sidebar",previous:{title:"Check unused files",permalink:"/docs/cli/check-unused-files"},next:{title:"Avoid ignoring return values",permalink:"/docs/rules/common/avoid-ignoring-return-values"}},u=[{value:"Common",id:"common",children:[]},{value:"Flutter specific",id:"flutter-specific",children:[]},{value:"Intl specific",id:"intl-specific",children:[]},{value:"Angular specific",id:"angular-specific",children:[]}],m={toc:u};function p(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rules-overview"},"Rules overview"),(0,i.kt)("p",null,"Rules are grouped by a category to help you understand their purpose."),(0,i.kt)("p",null,"Rules configuration is ",(0,i.kt)("a",{parentName:"p",href:"../getting-started/configuration#configuring-a-rules-entry"},"described here"),"."),(0,i.kt)("h2",{id:"common"},"Common"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/avoid-ignoring-return-values"},"avoid-ignoring-return-values")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/avoid-late-keyword"},"avoid-late-keyword")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/avoid-non-null-assertion"},"avoid-non-null-assertion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/avoid-unused-parameters"},"avoid-unused-parameters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/binary-expression-operand-order"},"binary-expression-operand-order")," ","\xa0"," ",(0,i.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/double-literal-format"},"double-literal-format")," ","\xa0"," ",(0,i.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/member-ordering"},"member-ordering")," ","\xa0"," ",(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/member-ordering#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/member-ordering-extended"},"member-ordering-extended")," ","\xa0"," ",(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/member-ordering-extended#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/newline-before-return"},"newline-before-return")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/no-boolean-literal-compare"},"no-boolean-literal-compare")," ","\xa0"," ",(0,i.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/no-empty-block"},"no-empty-block")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/no-equal-arguments"},"no-equal-arguments")," ","\xa0"," ",(0,i.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/no-equal-then-else"},"no-equal-then-else")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/no-magic-number"},"no-magic-number")," ","\xa0"," ",(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/no-magic-number#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/no-object-declaration"},"no-object-declaration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/prefer-conditional-expressions"},"prefer-conditional-expressions")," ","\xa0"," ",(0,i.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/prefer-match-file-name"},"prefer-match-file-name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/prefer-trailing-comma"},"prefer-trailing-comma")," ","\xa0"," ",(0,i.kt)("a",{parentName:"li",href:"/docs/rules/common/prefer-trailing-comma#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))," ","\xa0"," ",(0,i.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"}))),(0,i.kt)("h2",{id:"flutter-specific"},"Flutter specific"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/flutter/always-remove-listener"},"always-remove-listener")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/flutter/avoid-returning-widgets"},"avoid-returning-widgets")," ","\xa0"," ",(0,i.kt)("a",{parentName:"li",href:"/docs/rules/flutter/avoid-returning-widgets#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/flutter/avoid-unnecessary-setstate"},"avoid-unnecessary-setstate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/flutter/avoid-wrapping-in-padding"},"avoid-wrapping-in-padding")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/flutter/prefer-extracting-callbacks"},"prefer-extracting-callbacks")," ","\xa0"," ",(0,i.kt)("a",{parentName:"li",href:"/docs/rules/flutter/prefer-extracting-callbacks#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/flutter/prefer-single-widget-per-file"},"prefer-single-widget-per-file")," ","\xa0"," ",(0,i.kt)("a",{parentName:"li",href:"/docs/rules/flutter/prefer-single-widget-per-file#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"})))),(0,i.kt)("h2",{id:"intl-specific"},"Intl specific"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/intl/prefer-intl-name"},"prefer-intl-name")," ","\xa0"," ",(0,i.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/intl/provide-correct-intl-args"},"provide-correct-intl-args"))),(0,i.kt)("h2",{id:"angular-specific"},"Angular specific"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/angular/avoid-preserve-whitespace-false"},"avoid-preserve-whitespace-false")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/angular/component-annotation-arguments-ordering"},"component-annotation-arguments-ordering")," ","\xa0"," ",(0,i.kt)("a",{parentName:"li",href:"/docs/rules/angular/component-annotation-arguments-ordering#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/rules/angular/prefer-on-push-cd-strategy"},"prefer-on-push-cd-strategy"))))}p.isMDXComponent=!0}}]);