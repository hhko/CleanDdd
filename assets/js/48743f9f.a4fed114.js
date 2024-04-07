"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[724],{5673:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(4848),t=n(8453);const r={sidebar_position:1},c="appsettings.json",a={id:"ddd/abstraction/appsettings/README",title:"appsettings.json",description:"Registration",source:"@site/docs/03-ddd/01-abstraction/01-appsettings/README.md",sourceDirName:"03-ddd/01-abstraction/01-appsettings",slug:"/ddd/abstraction/appsettings/",permalink:"/archddd/docs/ddd/abstraction/appsettings/",draft:!1,unlisted:!1,editUrl:"https://github.com/hhko/archddd/tree/main/docs/docs/03-ddd/01-abstraction/01-appsettings/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ucd94\uc0c1\ud654",permalink:"/archddd/docs/category/\ucd94\uc0c1\ud654"}},o={},l=[{value:"Registration",id:"registration",level:2},{value:"\uc2e4\ud589 \ubc0f \uc124\uc815 \ud30c\uc77c",id:"\uc2e4\ud589-\ubc0f-\uc124\uc815-\ud30c\uc77c",level:2},{value:"Framework \ucc38\uc870",id:"framework-\ucc38\uc870",level:2},{value:"CLI",id:"cli",level:2},{value:"\uc8fc\uc694 \uc778\ud130\ud398\uc774\uc2a4",id:"\uc8fc\uc694-\uc778\ud130\ud398\uc774\uc2a4",level:2},{value:"\uaddc\uce59",id:"\uaddc\uce59",level:2},{value:"TODO",id:"todo",level:2},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:2}];function d(e){const s={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",img:"img",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"appsettingsjson",children:"appsettings.json"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Abstractions\r\n  Registration                \ub124\uc784\uc2a4\ud398\uc774\uc2a4: Microsoft.Extensions.DependencyInjection\r\n    AdapterInfrastructureLayerRegistration\r\n    OptionsRegistration\r\nOptions                       \ud638\ucd9c \uc21c\uc11c: XxxOptionsSetup -> XxxOptionsValidator\r\n  DatabaseOptions\r\n  DatabaseOptionsSetup        \uc0c1\uc18d: IConfigureOptions<DatabaseOptions>\r\n  DatabaseOptionsValidator    \uc0c1\uc18d: IValidateOptions<DatabaseOptions>\n"})}),"\n",(0,i.jsx)(s.h2,{id:"registration",children:"Registration"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cs",children:"namespace Microsoft.Extensions.DependencyInjection;\r\n\r\npublic static class AdapterInfrastructureLayerRegistration\r\n{\r\n    public static IServiceCollection RegisterAdapterInfrastructureLayer(this IServiceCollection services)\r\n    {\r\n        services.RegisterOptions();\r\n\r\n        return services;\r\n    }\r\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Registration"})," \ud3f4\ub354\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \ud074\ub798\uc2a4 \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub294 ",(0,i.jsx)(s.code,{children:"Microsoft.Extensions.DependencyInjection"}),"\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Host"}),"\uc5d0\uc11c \ucd94\uac00\uc801\uc778 ",(0,i.jsx)(s.code,{children:"using"})," \uad6c\ubb38 \uc5c6\uc774 ",(0,i.jsx)(s.code,{children:"...Registration.cs"}),"\uc5d0 \uc815\uc758\ud55c ",(0,i.jsx)(s.code,{children:"Register..."})," \ud655\uc7a5 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cs",children:"namespace Microsoft.Extensions.DependencyInjection;\r\n\r\npublic static class OptionsRegistration\r\n{\r\n    internal static IServiceCollection RegisterOptions(this IServiceCollection services)\r\n    {\r\n        services.ConfigureOptions<DatabaseOptionsSetup>();\r\n        services.AddSingleton<IValidateOptions<DatabaseOptions>, DatabaseOptionsValidator>();\r\n\r\n        return services;\r\n    }\r\n}\n"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"XxxRegistration"}),": \ud074\ub798\uc2a4 \uc774\ub984\r\n",(0,i.jsx)(s.code,{children:"RegisterXxx"}),": \uba54\uc11c\ub4dc \uc774\ub984(IServiceCollection` \ud655\uc7a5 \uba54\uc11c\ub4dc)"]}),"\n",(0,i.jsx)(s.h2,{id:"\uc2e4\ud589-\ubc0f-\uc124\uc815-\ud30c\uc77c",children:"\uc2e4\ud589 \ubc0f \uc124\uc815 \ud30c\uc77c"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(3711).A+"",width:"2859",height:"1524"})}),"\n",(0,i.jsx)(s.h2,{id:"framework-\ucc38\uc870",children:"Framework \ucc38\uc870"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(2549).A+"",width:"1790",height:"621"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"services.GetOptions<DatabaseOptions>();\r\n\r\npublic static TOptions GetOptions<TOptions>(this IServiceCollection services)\r\n    where TOptions : class, new()\r\n{\r\n    var serviceProvider = services.BuildServiceProvider();\r\n    return serviceProvider.GetRequiredService<IOptions<TOptions>>().Value;\r\n}\n"})}),"\n",(0,i.jsx)(s.h2,{id:"cli",children:"CLI"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'dotnet run --project .\\src\\ArchDdd.Host\\ --launch-profile "\uace0\ud615\ud638.ArchDdd.Host"\r\ndotnet run --project .\\src\\ArchDdd.Host\\ --environment "\uace0\ud615\ud638"\r\n\r\n.\\ArchDdd.Host.exe --environment "\uace0\ud615\ud638"\n'})}),"\n",(0,i.jsx)(s.h2,{id:"\uc8fc\uc694-\uc778\ud130\ud398\uc774\uc2a4",children:"\uc8fc\uc694 \uc778\ud130\ud398\uc774\uc2a4"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"IConfigureOptions<T>\r\n{\r\n  void Configure(T options);\r\n}\r\n\r\nIValidateOptions<T>\r\n{\r\n  public ValidateOptionsResult Validate(string? name, T options)\r\n}\n"})}),"\n",(0,i.jsx)(s.h2,{id:"\uaddc\uce59",children:"\uaddc\uce59"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"public sealed class DatabaseOptions\r\n{\r\n  public const string DatabaseConfig = nameof(DatabaseConfig);\r\n}\r\n\r\npublic class DatabaseOptionsValidator : AbstractValidator<DatabaseOptions>\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["DatabaseOptions","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"sealed \ud074\ub798\uc2a4"}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"XxxOptions"})," \ud074\ub798\uc2a4 \uc774\ub984"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"XxxConfig"})," public const string \ubcc0\uc218"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["DatabaseOptionsValidator","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"XxxOptionsValidator"})," \ud074\ub798\uc2a4 \uc774\ub984"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"AbstractValidator<XxxOptions>"})," \uc0c1\uc18d"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"todo",children:"TODO"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","\uc635\uc158 \ud074\ub798\uc2a4 \uad6c\uc131"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","N\uac1c -> 1\uac1c \uc635\uc158 \ud074\ub798\uc2a4 \uad6c\uc131"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Adapter \ub808\uc774\uc5b4, Registration \uacfc\uc815\uc5d0\uc11c \uc635\uc158 \uac12 \uc811\uadfc\ud558\uae30"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,i.jsx)(s.del,{children:"Adapter \ub808\uc774\uc5b4, \uc0dd\uc131\uc790\uc5d0\uc11c \uc635\uc158 \uac12 \uc811\uadfc\ud558\uae30"})]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,i.jsx)(s.del,{children:"Application \ub610\ub294 Domain \ub808\uc774\uc5b4, \uc0dd\uc131\uc790\uc5d0\uc11c \uc635\uc158 \uac12 \uc811\uadfc\ud558\uae30?"})]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","FluentValidation \ud1b5\ud569"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","\uc124\uc815 \uac1c\uc778\ud654 ",(0,i.jsx)(s.code,{children:"appsettings.{\ud638\uc2a4\ud2b8\uba85}.json"})]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","CLI \ubaa8\ub4dc \uc9c0\uc815?"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ub2e8\uc704 \ud14c\uc2a4\ud2b8"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Quartz: ",(0,i.jsx)(s.a,{href:"https://www.youtube.com/watch?v=iD3jrj3RBuc",children:"https://www.youtube.com/watch?v=iD3jrj3RBuc"})]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","IConfigureOptions?"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\ucc38\uace0-\uc790\ub8cc",children:"\ucc38\uace0 \uc790\ub8cc"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,i.jsx)(s.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/options?view=aspnetcore-8.0",children:"Options pattern in ASP.NET Core"})]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,i.jsx)(s.a,{href:"https://code-maze.com/aspnet-configuration-options-validation/",children:"ASP.NET Core Configuration \u2013 Options Validation"})]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,i.jsx)(s.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-8.0",children:"Use multiple environments in ASP.NET Core"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Production"}),"\n",(0,i.jsxs)(s.li,{children:["Development","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\ud638\uc2a4\ud2b8\uba85"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,i.jsx)(s.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/performance/overview?view=aspnetcore-8.0",children:"ASP.NET Core performance"})]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2549:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/2024-03-29-17-31-12-105246c9207d3546e760cc8a79f84330.png"},3711:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/2024-04-02-00-31-18-ee030362bf29c4ef761f827afc395a31.png"},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>a});var i=n(6540);const t={},r=i.createContext(t);function c(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);