"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[883],{4652:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var o=t(4848),i=t(8453);const r={},s="GitHub Packages \ub9cc\ub4e4\uae30",a={id:"solution-organization/solution-devops/github-packages/README",title:"GitHub Packages \ub9cc\ub4e4\uae30",description:"GitHub Token \ub9cc\ub4e4\uae30",source:"@site/docs/02-solution-organization/02-solution-devops/03-github-packages/README.md",sourceDirName:"02-solution-organization/02-solution-devops/03-github-packages",slug:"/solution-organization/solution-devops/github-packages/",permalink:"/archddd/docs/solution-organization/solution-devops/github-packages/",draft:!1,unlisted:!1,editUrl:"https://github.com/hhko/archddd/tree/main/docs/docs/02-solution-organization/02-solution-devops/03-github-packages/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitHub Actions \ub9cc\ub4e4\uae30",permalink:"/archddd/docs/solution-organization/solution-devops/github-actions/"},next:{title:"\ucf54\ub529 \uc2a4\ud0c0\uc77c \uc815\uc758\ud558\uae30",permalink:"/archddd/docs/solution-organization/solution-devops/codestyle/"}},c={},u=[{value:"GitHub Token \ub9cc\ub4e4\uae30",id:"github-token-\ub9cc\ub4e4\uae30",level:2},{value:"nuget.config",id:"nugetconfig",level:2},{value:"%appdata%\\NuGet\\NuGet.Config",id:"appdatanugetnugetconfig",level:2},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"github-packages-\ub9cc\ub4e4\uae30",children:"GitHub Packages \ub9cc\ub4e4\uae30"}),"\n",(0,o.jsx)(n.h2,{id:"github-token-\ub9cc\ub4e4\uae30",children:"GitHub Token \ub9cc\ub4e4\uae30"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'\uacc4\uc815 > Settings\r\n  Developer settings\r\n    Personal access tokens > tokens (classic): "Generate new token" > "Generate new token (classic)\r\n\r\n    - Name: GITHUB_TOKEN_PACKAGES_READONLY\r\n    - Expiration: No expiration\r\n    - Select scopes\r\n      - [x] read:packages\r\n\r\n    - Name: GITHUB_TOKEN_PACKAGES\r\n    - Expiration: No expiration\r\n    - Select scopes\r\n      - [x] write:packages\r\n      - [x] delete:packages\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# \uc124\uce58 \uc804\uc6a9\r\nGITHUB_TOKEN_PACKAGES_READONLY\r\n...\r\n\r\n# GitHub Actions \uc804\uc6a9\r\nGITHUB_TOKEN_PACKAGES\r\n...\n"})}),"\n",(0,o.jsx)(n.h2,{id:"nugetconfig",children:"nuget.config"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\r\n<configuration>\r\n  <packageSources>\r\n    <clear />\r\n    <add key="github" value="https://nuget.pkg.github.com/hhko/index.json" />\r\n  </packageSources>\r\n  <packageSourceCredentials>\r\n    <github>\r\n      <add key="Username" value="hhko" />\r\n      <add key="ClearTextPassword" value="{{ GITHUB_TOKEN_PACKAGES_READONLY }}" />\r\n    </github>\r\n  </packageSourceCredentials>\r\n</configuration>\n'})}),"\n",(0,o.jsx)(n.h2,{id:"appdatanugetnugetconfig",children:"%appdata%\\NuGet\\NuGet.Config"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'dotnet nuget add source `\r\n    --username hhko `\r\n    --password {{ GITHUB_TOKEN_PACKAGES_READONLY }} `\r\n    --store-password-in-clear-text `\r\n    --name github "https://nuget.pkg.github.com/hhko/index.json"\r\n\r\ndotnet nuget list source\r\ndotnet nuget remove source github\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\ucc38\uace0-\uc790\ub8cc",children:"\ucc38\uace0 \uc790\ub8cc"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry",children:"Working with the NuGet registry"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.dotnetcurry.com/dotnetcore/custom-dotnet-code-github-actions",children:"Running Custom .NET code in GitHub Actions"})}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);