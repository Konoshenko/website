(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[7006],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:e},p),{},{components:n})):a.createElement(g,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7365:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={},c="GitHub Action",l={unversionedId:"integrations/github-action",id:"integrations/github-action",isDocsHomePage:!1,title:"GitHub Action",description:"Dart Code Metrics GitHub Action allows you to integrate Dart Code Metrics into your CI/CD process and get code quality reports inside PR's.",source:"@site/docs/integrations/github-action.md",sourceDirName:"integrations",slug:"/integrations/github-action",permalink:"/docs/integrations/github-action",editUrl:"https://github.com/dart-code-checker/website/blob/main/docs/integrations/github-action.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Codemagic",permalink:"/docs/integrations/codemagic"}},p=[{value:"Usage",id:"usage",children:[{value:"Inputs",id:"inputs",children:[]},{value:"Output example",id:"output-example",children:[]}]}],u={toc:p};function d(t){var e=t.components,s=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"github-action"},"GitHub Action"),(0,i.kt)("p",null,"Dart Code Metrics GitHub Action allows you to integrate Dart Code Metrics into your CI/CD process and get code quality reports inside PR's."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"dartcodemetrics.yaml")," under ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows")," with the following content (the default configuration listed):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="dartcodemetrics.yaml"',title:'"dartcodemetrics.yaml"'},"name: Dart Code Metrics\n\non: [push]\n\njobs:\n  check:\n    name: dart-code-metrics-action\n\n    runs-on: ubuntu-latest\n\n    steps:\n      - uses: actions/checkout@v2\n\n      - name: dart-code-metrics\n        uses: dart-code-checker/dart-code-metrics-action@v1\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n")),(0,i.kt)("h3",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"github_token")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2611\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required to post a report on GitHub. ",(0,i.kt)("em",{parentName:"td"},"Note:")," the secret ",(0,i.kt)("a",{parentName:"td",href:"https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token"},(0,i.kt)("inlineCode",{parentName:"a"},"GITHUB_TOKEN"))," is already provided by GitHub and you don't have to set it up yourself."),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"folders")),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"List of folders whose contents will be scanned."),(0,i.kt)("td",{parentName:"tr",align:"left"},"[",(0,i.kt)("inlineCode",{parentName:"td"},"lib"),"]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"relative_path")),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"If your package isn't at the root of the repository, set this input to indicate its location."),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"github_pat")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required if you had private GitHub repository in the package dependencies"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token"},(0,i.kt)("strong",{parentName:"a"},"Personal access token"))," must access to ",(0,i.kt)("em",{parentName:"td"},"repo")," and ",(0,i.kt)("em",{parentName:"td"},"read:user")," ",(0,i.kt)("a",{parentName:"td",href:"https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes"},"scopes")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"check_unused_files")),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Additional scan for find unused files in package."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("h3",{id:"output-example"},"Output example"),(0,i.kt)("h4",{id:"analysis-result"},"Analysis result"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Analysis result example",src:n(5565).Z})),(0,i.kt)("h4",{id:"annotation"},"Annotation"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Annotation example",src:n(6588).Z})))}d.isMDXComponent=!0},5565:function(t,e,n){"use strict";e.Z=n.p+"assets/images/action-analysis-result-5d296ccb1683c18cf8114a0a47ea7d94.png"},6588:function(t,e,n){"use strict";e.Z=n.p+"assets/images/annotation-495af2badb131479e11577077ca073dc.png"}}]);