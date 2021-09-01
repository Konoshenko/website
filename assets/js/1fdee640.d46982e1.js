(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[7857],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,f=s["".concat(a,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,c=new Array(l);c[0]=s;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<l;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2072:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(2122),o=n(9756),l=(n(7294),n(3905)),c=["components"],i={},a="No empty block",p={unversionedId:"rules/common/no-empty-block",id:"rules/common/no-empty-block",isDocsHomePage:!1,title:"No empty block",description:"Rule id",source:"@site/docs/rules/common/no-empty-block.md",sourceDirName:"rules/common",slug:"/rules/common/no-empty-block",permalink:"/docs/rules/common/no-empty-block",editUrl:"https://github.com/dart-code-checker/website/blob/main/docs/rules/common/no-empty-block.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"No boolean literal compare",permalink:"/docs/rules/common/no-boolean-literal-compare"},next:{title:"No equal arguments",permalink:"/docs/rules/common/no-equal-arguments"}},u=[{value:"Rule id",id:"rule-id",children:[]},{value:"Severity",id:"severity",children:[]},{value:"Description",id:"description",children:[{value:"Example",id:"example",children:[]}]}],m={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"no-empty-block"},"No empty block"),(0,l.kt)("h2",{id:"rule-id"},"Rule id"),(0,l.kt)("p",null,"no-empty-block"),(0,l.kt)("h2",{id:"severity"},"Severity"),(0,l.kt)("p",null,"Style"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Disallows empty blocks except catch clause block. Blocks with a todo comment inside are not considered empty."),(0,l.kt)("p",null,"Empty blocks are often indicators of missing code."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"Bad:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"  // LINT\n  if ( ... ) {\n\n  }\n\n  [1, 2, 3, 4].forEach((val) {}); // LINT\n\n\n  void function() {} // LINT\n")),(0,l.kt)("p",null,"Good:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"  if ( ... ) {\n    // TODO(developername): need to implement.\n  }\n\n  [1, 2, 3, 4].forEach((val) {\n    // TODO(developername): need to implement.\n  });\n\n\n  void function() {\n    // TODO(developername): need to implement.\n  }\n")),(0,l.kt)("p",null,"Inspired by ",(0,l.kt)("a",{parentName:"p",href:"https://palantir.github.io/tslint/rules/no-empty/"},"TSLint rule")))}s.isMDXComponent=!0}}]);