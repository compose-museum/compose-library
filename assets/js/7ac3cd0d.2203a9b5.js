"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3148],{3905:function(n,e,t){t.d(e,{Zo:function(){return C},kt:function(){return I}});var o=t(7294);function g(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){g(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,o,g=function(n,e){if(null==n)return{};var t,o,g={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(g[t]=n[t]);return g}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(g[t]=n[t])}return g}var A=o.createContext({}),l=function(n){var e=o.useContext(A),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},C=function(n){var e=l(n.components);return o.createElement(A.Provider,{value:e},n.children)},E={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(n,e){var t=n.components,g=n.mdxType,i=n.originalType,A=n.parentName,C=a(n,["components","mdxType","originalType","parentName"]),c=l(t),I=g,m=c["".concat(A,".").concat(I)]||c[I]||E[I]||i;return t?o.createElement(m,r(r({ref:e},C),{},{components:t})):o.createElement(m,r({ref:e},C))}));function I(n,e){var t=arguments,g=e&&e.mdxType;if("string"==typeof n||g){var i=t.length,r=new Array(i);r[0]=c;var a={};for(var A in e)hasOwnProperty.call(e,A)&&(a[A]=e[A]);a.originalType=n,a.mdxType="string"==typeof n?n:g,r[1]=a;for(var l=2;l<i;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9906:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return C},default:function(){return m},frontMatter:function(){return l},metadata:function(){return E},toc:function(){return c}});var o=t(7462),g=t(3366),i=(t(7294),t(3905)),r=t.p+"assets/images/demo1-7cb445d915ec2f84ce2b826e6a639159.png",a=t.p+"assets/images/demo4-648051d418d0b4f4b8fdd2758a9cad4d.png",A=["components"],l={title:"Column"},C=void 0,E={unversionedId:"layout/column",id:"layout/column",title:"Column",description:"Column \u662f\u4e00\u4e2a\u5e03\u5c40\u7ec4\u4ef6\uff0c\u5b83\u80fd\u591f\u5c06\u91cc\u9762\u7684\u5b50\u9879\u6309\u7167\u4ece\u4e0a\u5230\u4e0b\u7684\u987a\u5e8f\u5782\u76f4\u6392\u5217\u3002",source:"@site/docs/layout/column.mdx",sourceDirName:"layout",slug:"/layout/column",permalink:"/docs/layout/column",editUrl:"https://github.com/milklabdev/jetpack-compose-book/tree/master/docs/layout/column.mdx",tags:[],version:"current",frontMatter:{title:"Column"},sidebar:"docs",previous:{title:"BottomNavigation",permalink:"/docs/layout/bottomnavigation"},next:{title:"ModalBottomSheetLayout",permalink:"/docs/layout/modalbottomsheetlayout"}},c=[],I={toc:c};function m(n){var e=n.components,t=(0,g.Z)(n,A);return(0,i.kt)("wrapper",(0,o.Z)({},I,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\ninline fun Column(\n    modifier: Modifier? = Modifier,\n    verticalArrangement: Arrangement.Vertical? = Arrangement.Top,\n    horizontalAlignment: Alignment.Horizontal? = Alignment.Start,\n    content: (@Composable @ExtensionFunctionType ColumnScope.() -> Unit)?\n): Unit\n")),(0,i.kt)("p",null,"Column \u662f\u4e00\u4e2a\u5e03\u5c40\u7ec4\u4ef6\uff0c\u5b83\u80fd\u591f\u5c06\u91cc\u9762\u7684\u5b50\u9879\u6309\u7167\u4ece\u4e0a\u5230\u4e0b\u7684\u987a\u5e8f\u5782\u76f4\u6392\u5217\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"verticalArrangment")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"horizontalAlignment")," \u53c2\u6570\u5206\u522b\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5b89\u6392\u5b50\u9879\u7684\u5782\u76f4/\u6c34\u5e73\u4f4d\u7f6e\uff0c\u5728\u9ed8\u8ba4\u7684\u60c5\u51b5\u4e0b\uff0c\u5b50\u9879\u4f1a\u4ee5\u5782\u76f4\u65b9\u5411\u4e0a\u9760\u4e0a\uff08Arrangment.Top\uff09\uff0c\u6c34\u5e73\u65b9\u5411\u4e0a\u9760\u5de6\uff08Alignment.Start\uff09\u6765\u6392\u5e03\u3002"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u6765\u7b80\u5355\u4f53\u9a8c\u4e00\u4e0b Column \u7ec4\u4ef6\u5427\uff01"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'Column {\n    Text(\n        text = "Hello, World!",\n        style = MaterialTheme.typography.h6\n    )\n    Text("Jetpack Compose")\n}\n')),(0,i.kt)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAACKCAIAAACxaMH3AAAQ4UlEQVR4Ae2dd5BURRfFJakIioFSwYBgFsuMGDAhmFDRslTEUCqY0RIUFDFiAkEKjFBlLgETaKkYwJxRDJgFRAUjwYT6mfl+euXSvt2dnd2efWy7Z/54c/v27TCn+7zu1/36Tr2FCxcupY8QEAK1G4H6tbt6qp0QEAJ/ISCiqh8IgQQQEFETaCRVUQiIqOoDQiABBETUBBpJVRQCIqr6gBBIAAERNYFGUhWFgIiqPiAEEkBARE2gkVRFISCiqg8IgQQQEFETaCRVUQiIqOoDQiABBETUBBpJVRQCIqr6gBBIAAERNYFGUhWFgIiqPiAEEkBARE2gkVRFISCiqg8IgQQQEFETaCRVUQiIqOoDQiABBETUBBpJVRQCIqr6gBBIAAERNYFGUhWFgIiqPiAEEkBARE2gkVRFISCiqg8IgQQQEFETaCRVUQiIqOoDQiABBETUBBpJVRQCIqr6gBBIAAERNYFGUhWFgIiqPiAEEkBARE2gkVRFISCiqg8IgQQQEFETaCRVUQiIqOoDQiABBETUBBpJVRQCIqr6gBBIAAERNYFGUhWFgIiqPiAEEkBARE2gkVRFISCiqg8IgQQQEFETaCRVUQiIqOoDQiABBETUBBpJVRQCIqr6gBBIAAERNYFGUhWFgIiqPiAEEkBARE2gkVRFISCiqg8IgQQQEFETaCRVUQiIqOoDQiABBETUBBpJVRQCDQVByRG45557yHPHHXds0aIFggW7dOnSuHHjkpdV8gynTp06ffr05s2b77rrruVmXqlBuamkjEVgoT6LENhnn31at2598MEHL1L88/3RRx+h55PRVxQ046efftoMLDhnzpyK7IvUb7zxxmQ1YcKE0N4yDzVjx45F2aZNm1BZvHzppZeS/JBDDqkoyWWXXYbBYYcdZgZbbbUVwSOPPLIie+lLgoCmvrF3utzS77TTTpR10003eYmzZs0y+csvv3Tlueeei3zCCSe4pkaFFVdckfxXWWWVGi1FmYuoyfSBiy66iLq+9tprXmMGT5OHDRvmSu7fyN27d3dNjQrLL788+Rtda7SgOp65iFr9DvD777+PGzfuoYce+uOPP6qay59//knC0aNHz58/v8i0q6++ulmS1gRyMOGll14ygZoYUVdbbTXT2PWFF1647bbb3n333VCJ/L+/PwhE3XXXXZnYMHj33XdPnDgx1JhsRF1hhRXKRklTQgS0mFRNMDt37vzhhx964k022eTBBx/0YGHhgAMOePPNN83mvPPOa9So0auvvtq0adPCqYhlOQpmffLJJzwWEpw9ezZD2Y8//vjpp59a2p9//tkE8jSBwfaaa64xmWv9+vW5O7Rv3940bdu2RVh33XXtt/Bo6pYu9OnT57777vPgpptu6jJCkyZNuBpdQ73k0iKgEbU6eB544IH0bEjy2GOPTZo0iW7KiHTJJZcUkxeLMbC0YcOGDzzwAAtOW2655W+//bbFFlvYSFg4h5VXXhmD559/nuvHH3/Mdffddz/xxBMR5s6dy/Xee+/lygIPVz6TJ082ll577bXPPvvsaaedxmjMOhBzATOwK79lvfXW23777UOlyWRrLD3rrLOeeuqps88+++233w7NlltuOYLF3GXCVJKrioCImkVsypQpLJmGn44dO2aM2KJA8+KLL2LGcPToo48SZG6ZMSsbhI033HADekphNFtrrbWYPNPX4Q+8LWuf0Zx//vloGBK53nLLLVyPP/74/fffH+GKK67gevnll3O19SSEk08+mSu3hr333nuNNdY4/fTT99xzTzR77bUXV//AfKa1lq0rTSAhwg477MDq1Nprr01xmVFXRM0gVkNBTX2zwDJqZcYW5pYMJm73yCOPIDdo0MAGMddnhinXh8L7779PcJlllgkf6o455hhGPOaoRrnQPiMz30bzwQcfcGUw57r++uubzXPPPYfAxJjrRhttZMpvvvkGgQ0nC3Lt168ftxVfLja97fe6TSh8/fXXBKmeK5s1a+Yygm0Oa0QNMakJWUTNosogefXVV4daJpkhUW3ux7LNzjvvHJoVI3/11VeYZTYzGK9gQoY8FeXGQybDL7Plzz//vFWrVma20korkfOvv/5qwWWXXTZMzj3Fg7Y8W8w9xZMgZDIMo2xEtWuol1xaBETUKuNpD4pcwy3NInOxgfSnn34K7W0piGE2VFYkM1tmMenhhx/G4KCDDjIz5rQXXHDBzJkzCYa0LJuJrTbVq1evbFQBTYFl7Q033JBxftVVVy2QXFHxCOgZtcoYdu3alTTMCVn/3GzRx+RK8+LtImy+/fbb0HLw4MEEi3xFwabHZ5xxBkn8cdGmxCwmo7z44os9c5askN944w3X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"}),(0,i.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0cColumn \u5c06\u91cc\u9762\u7684\u4e24\u4e2a Text \u7ec4\u4ef6\u6309\u7167\u5782\u76f4\u6392\u5217\u4e86\uff0c\u5e76\u4e14\u5e26\u6709\u4e00\u5b9a\u7684\u95f4\u9694\u3002"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u6765\u4e86\u89e3\u4e00\u4e0b Column \u7ec4\u4ef6\u7684\u5176\u4ed6\u65b9\u9762\u3002\u6211\u4eec\u5148\u8ba9\u521a\u624d\u7684 Column \u7ec4\u4ef6\u52a0\u4e0a\u8fb9\u6846\u6548\u679c\uff0c\u770b\u770b\u6548\u679c\u662f\u600e\u4e48\u6837\u7684\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'Column(\n    modifier = Modifier\n        .border(1.dp, Color.Black)\n) {\n    Text(\n        text = "Hello, World!",\n        style = MaterialTheme.typography.h6\n    )\n    Text("Jetpack Compose")\n}\n')),(0,i.kt)("img",{src:r}),(0,i.kt)("p",null,"\u53ef\u4ee5\u53d1\u73b0\uff0cColumn \u7ec4\u4ef6\u5c06\u6211\u4eec\u7684\u4e24\u4e2a Text \u7ec4\u4ef6\u5305\u88f9\u8d77\u6765\u4e86\uff0c\u6ca1\u9519\uff0c\u5728\u4e0d\u7ed9 Column \u6307\u5b9a\u9ad8\u5ea6\u3001\u5bbd\u5ea6\u3001\u5927\u5c0f\u7684\u60c5\u51b5\u4e0b\uff0cColumn \u7ec4\u4ef6\u9ed8\u8ba4\u4f1a\u5c3d\u53ef\u80fd\u5c0f\u5730\u5305\u88f9\u91cc\u9762\u7684\u5b50\u9879\u3002\u5728\u8fd9\u4e2a\u65f6\u5019\uff0c\u6211\u4eec\u65e0\u6cd5\u4f7f\u7528 Column \u53c2\u6570\u4e2d\u7684 verticalArrangement \u6216 horizontalAlignment \u6765\u5b9a\u4f4d\u5b50\u9879\u5728 Colunn \u4e2d\u7684\u6574\u4f53\u4f4d\u7f6e\u3002\n\u53ea\u8981\u6211\u4eec\u7ed9 Column \u6307\u5b9a\u4e86"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9ad8\u5ea6\uff0c\u90a3\u4e48\u5c31\u80fd\u4f7f\u7528 verticalArrangement \u53c2\u6570\u6765\u5b9a\u4f4d\u5b50\u9879\u5728 Column \u4e2d\u7684\u5782\u76f4\u4f4d\u7f6e\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5bbd\u5ea6\uff0c\u90a3\u4e48\u5c31\u80fd\u4f7f\u7528 horizontalAlignment \u53c2\u6570\u6765\u5b9a\u4f4d\u5b50\u9879\u5728 Column \u4e2d\u7684\u6c34\u5e73\u4f4d\u7f6e\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5927\u5c0f\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\u4ee5\u4e0a\u7684\u4e24\u4e2a\u53c2\u6570\u6765\u5b9a\u4f4d\u5b50\u9879\u7684\u6c34\u5e73/\u5782\u76f4\u4f4d\u7f6e")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'Column(\n    modifier = Modifier\n        .border(1.dp, Color.Black)\n        .size(150.dp),\n    verticalArrangement = Arrangement.Center\n) {\n    Text(\n        text = "Hello, World!",\n        style = MaterialTheme.typography.h6\n    )\n    Text("Jetpack Compose")\n}\n')),(0,i.kt)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATAAAAD7CAIAAABiwV9nAAAUl0lEQVR4Ae2dZbDlxNaGOTC4uw3uFxncXQt3Laxw98KdgoLCpbDC3eXiLoX7YIXr4HbRi5/vmemhv9y9z+xzZoZ9WEme/EittCSr37ffdKeT7nR0dnaO4CYCIhADgRFjuKEXIiACAxFQkNYDEQiEgIIMRIauiICCtA6IQCAEFGQgMnRFBBSkdUAEAiGgIAORoSsioCCtAyIQCAEFGYgMXREBBWkdEIFACCjIQGToiggoSOuACARCQEEGIkNXREBBWgdEIBACCjIQGboiAgrSOiACgRBQkIHI0BURUJDWAREIhICCDESGroiAgrQOiEAgBBRkIDJ0RQQUpHVABAIhoCADkaErIqAgrQMiEAgBBRmIDF0RAQVpHRCBQAgoyEBk6IoIKEjrgAgEQkBBBiJDV0RAQVoHRCAQAgoyEBm6IgIK0jogAoEQUJCByNAVEVCQ1gERCISAggxEhq6IgIK0DohAIAQUZCAydEUEFKR1QAQCIaAgA5GhKyKgIK0DIhAIAQUZiAxdEQEFaR0QgUAIKMhAZOiKCChI64AIBEJAQQYiQ1dEQEFaB0QgEAIKMhAZuiICCtI6IAKBEFCQgcjQFRFQkNYBEQiEgIIMRIauiICCtA6IQCAE+gTypZ2u9O/fv52n99x/DwL9+vX7e05U2rN0dHZ2ltb5oXC8o6Ojb9++Q5HBpL2OwIABA2pSG1tAWyNBSnaLehAhipumHPkMGaEq6oMIDEZAQVoVRCAQAgoyEBm6IgIK0jogAoEQUJCByNAVEVCQ1gERCISAggxEhq6IgIK0DohAIAQUZCAydEUEFKR1QAQCIaAgA5GhKyKgIK0DIhAIAQUZiAxdEQEFaR0QgUAIKMhAZOiKCChI64AIBEJAQQYiQ1dEQEFaB0QgEAIKMhAZuiICCtI6IAKBEFCQgcjQFRFQkNYBEQiEgIIMRIauiICCtA6IQCAEFGQgMnRFBBSkdUAEAiGgIAORoSsioCCtAyIQCAEFGYgMXREBBWkdEIFACCjIQGToiggoSOuACARCQEEGIkNXREBBWgdEIBACCjIQGboiAgrSOiACgRBQkIHI0BURUJDWAREIhICCDESGroiAgrQOiEAgBBRkIDJ0RQQUpHVABAIhoCADkaErIqAgrQMiEAgBBRmIDF0RAQVpHRCBQAgoyEBk6IoIKEjrgAgEQkBBBiJDV0RAQVoHRCAQAgoyEBm6IgJ9hGBoEbj77ru/++67fw3ayHvdddexX3HFFccZZ5yhPVXvp//www+ffPLJkUYaae211+7y6gMGDHjiiSdGH330VVddtcsEBrYXgc56bIB49NFHTzfddEsvvXRziQln++OPP5qjmkNWWmklEp922mkpalDW6d5+++3mlEMVstpqq3GqI488spgrnbwY8sADDxA4/fTTFwN7bt9+++1kn2WWWYaU5c477yTBYostlhIsvPDCHHYJ2pDOMMzhcDTMeSuT0S5re+93PT/7CiusQOIHH3wwZ6EdTvY777yTA8877zxsGuQc0lZjkkkm4fwTTjhhW6/iyTMCCjJD8Q8bm222GR68++672Y/nn38+2dtuu20OfP/997FpTnNIW40JJpiA84877rhtvYonzwgoyAxFo/Hnn3/+e9D222+/Ncb14Pjee++97LLLeGbrQdqBScYff/yUMl/uxBNPTCHvvfdeMth/9NFH7JdYYokcgvHss89edNFF7IuB2P8dtGHgxhVXXNEQWzykoLfddlsxJNlJkKV4PG52vowhDup0zdqGG2749NNPp7g99thj4oknZiyk66RNoZtvvvkjjzySg/v06XPPPfdMM800OWRIxpRTToneHn30UZ7ZSPPyyy+PMsooHR0dv/zyy++//855csaskJtvvnnPPffM4Rgnn3zymmuumUJmn312jCWXXPLhhx/G2GSTTVJ4cX/GGWecdNJJKWTXXXdddNFFi7GpbRx77LGLgdrtQ8AWsgts9913X9TISCMjHPfffz9PUF988cXGG2/cRdKmoKuuuiqpEQMZMFaJlpZddlna26a0jQELLLAAQbfccgv7b775hv3kk0+OYDDSYyTOYM8wwwzs2QhMajzmmGO46LHHHksgIZ988smg+ME73EDqyLIYmOxff/01qZEOM8NFxx133GOPPVZMlpSvIIuYtNX+/5tuWy8T5+Q8gzFE2dqf9CaDJnGsscYiJRWapoZDhvJor1rnPfDAA0lA5U5N4umnn/7666+/9dZbjPEecsghrfPStN50002PP/44yWgn2aOQueaaC2OfffahV3nmmWdib7TRRuzZttlmG/abbrppCtlggw241oUXXsg48IsvvjgoycAdGeeYY458WDS4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"}),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"verticalArrangement")," \u53c2\u6570\uff0c\u6211\u4eec\u5c06\u4e24\u4e2a Text \u6392\u5e03\u5728\u4e86 Column \u7ec4\u4ef6\u7684\u4e2d\u592e\uff0c\u4f46\u6c34\u5e73\u65b9\u5411\u4e0a\u4ecd\u7136\u662f Column \u9ed8\u8ba4\u5b9a\u4e49\u7684 Alignment.Start\uff08\u6c34\u5e73\u9760\u5de6\uff09\u65b9\u5411\u3002"),(0,i.kt)("p",null,"\u5728\u7ed9 Column \u5b9a\u4e49\u4e86\u5927\u5c0f\u4e4b\u540e\uff0c\u6211\u4eec\u80fd\u591f\u4f7f\u7528 Modifier.align \u6765\u5355\u72ec\u8bbe\u7f6e\u5b50\u9879\u7684\u6c34\u5e73\u65b9\u5411\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'Column(\n    modifier = Modifier\n        .border(1.dp, Color.Black)\n        .size(150.dp),\n    verticalArrangement = Arrangement.Center\n) {\n    Text(\n        text = "Hello, World!",\n        style = MaterialTheme.typography.h6,\n        modifier = Modifier.align(Alignment.CenterHorizontally)\n    )\n    Text("Jetpack Compose")\n}\n')),(0,i.kt)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAAC6CAIAAACsvH/VAAARHElEQVR4Ae2dZYwlRReGmWVxC+7yAYvDBnf34O5uQYOGQLAAARJcQiC4u7u7E2DQ4La4u7PfAydUarvv1lxm7m1K3vujc+rUqeojb5f01OnpGT58+Cj6yQMReGBQBDpIBXngLw8Ii8JBLB4QFmOJhPQQFoWBWDwgLMYSCekhLAoDsXhAWIwlEtJDWBQGYvGAsBhLJKSHsCgMxOIBYTGWSEgPYVEYiMUDwmIskZAewqIwEIsHhMVYIiE9hEVhIBYPCIuxREJ6CIvCQCweGNxxRXp7ezvepzrsuAeGDh3a8T4H2GFPx/Ndenp6pplmmgGqpeZd9cCwYcM6HveBK9wVLEZo58A9lVMPjBcRxkjrxZwwlrYtwmLa8ctJe2Exp2imbYuwmHb8ctJeWMwpmmnbIiymHb+ctBcWc4pm2rYIi2nHLyfthcWcopm2LcJi2vHLSXthMadopm2LsJh2/HLSXljMKZpp2yIsph2/nLQXFnOKZtq2CItpxy8n7YXFnKKZti3CYtrxy0l7YTGnaKZti7CYdvxy0l5YzCmaadsiLKYdv5y0FxZzimbatgiLaccvJ+2FxZyimbYtwmLa8ctJe2Exp2imbYuwmHb8ctJeWMwpmmnbIiymHb+ctBcWc4pm2rYIi2nHLyfthcWcopm2LcJi2vHLSXthMadopm2LsJh2/HLSXljMKZpp2yIsph2/nLQXFnOKZtq2CItpxy8n7YXFnKKZti3CYtrxy0l7YTGnaKZti7CYdvxy0l5YzCmaadsiLKYdv5y0FxZzimbatgiLaccvJ+2FxZyimbYtwmLa8ctJe2Exp2imbcvgtNUfUfsff/zx1ltvhbf++utzfeutt5555pkxxhhjjTXWGFEw0tLVV1+NZmuvvfbgwa3jYgLrrbdeT09PpDYMRK3hnf6hTD+6/N/fv3rDRRZZhJqzzz67XlXnfPTRR34/V1xxBcUFFligLvmvOM8//7zfrbU99dRTYZ5++ul+Vyb2wQcf+Mz2aWv+ww8/jKyJCfz5558mYMWRCQf4/YtRoMOOVGmO7vtBnnvuuetCJ510Esxjjz3WVf30009GTzXVVI4pon0PCIvt+2qUp556yqQZBhicKi0feughOBNPPHGFr2KbHkgVi729vRdccMFLL73Upp2+2Ntvv33hhRfed999PjNMr7XWWgicccYZJuaGQIrvv/++MW2puuiii1rRrky4l1122Q033PDHH3/4/F9++YVOfv/9dzDNKnDYsGF+rU+//PLLF1988eeff+4zs6Rbr5FjNvXZZ59l8e5ryIA09dRT+5yR0R9++OHSSy/tw2K11VZj5Tcyecdn9wOe3nzzTeOceeaZEPfcc8/yyy9/00037bLLLhQfe+wxrptuuqnJ/Prrr/PNNx/bKSvutddek0466RNPPGHF7bbb7tFHH916663PP/98OIceeuhWW21lVe5KD/PMMw9XOIcccsgUU0zhqrIkEhsXP/nkEwPikUce+cgjjxAhorLkkkvWZ8yW0VpqqaUAInABvgyNyNxyyy3nnXdeS2GfaaPde++9Z0yD7/TTT0/x5JNPNuZnn30GsfDCC1vRgMja8f7777/jjjvGHHNMBDbffHOrtStAHHXUUVdYYYXxxhvP5xu97LLLAsQJJpjgtttuu/nmm7/66qu6TE6cuMbFGWecMezcXXfdFQEGMxt+GFfYQ3z77bcPP/wwOAu33W233YDsTDPNBI6RZCgFjltuueXRRx+9zTbbhNuONdZYTsDhftCgQZNMMonNnm7WtrctL774IiPiaKONhmLWkEXFrLPOyliItuOPP74x55prrhtvvNH17BN0yGsBOAylo48+OsQLL7wwyyyz+DKZ0XGNi4Cs8mM48T3O+0KKu+++Owss+6255ppwmEB9sZa07S0MiCawxBJLQLBoaylfYTJdwnnggQe++OILiD333JMr2nLlRebdd98NwQKAK79LL72U65xzzvl36a8LuLRJluHcMU0BV/QJRlOKE044oQERemQvHf1WSdNxjYv1pRuT488//1xx8SqrrFLhvPPOOxVOvWgLr5arLsY2Rrh6E5+z0UYb8aKRF4rzzz8/fBuh99tvP7ZQTKAMWjBXXXVVa/LKK69AMPla0a4A6+OPP25HVeRtPdDnROH3nzodFxbb9Ob1119fkeSPKxVOvci4wu7VbSZ8AVDiF1vSNuaBJN7sMBGzzkNs7LHH5spWZpxxxoFYeeWVre2UU07JpOz2Osa0h6qdeyFv74bCa8QVV1zRes7jmhgWmbKJKLOtDUsWA972tfM3scknn5zJlGHsmGOOsYaMUkYYsMIRtTfYtkExCJo8O5h3333X1ovs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"}),(0,i.kt)("p",null,"\u8bbe\u7f6e\u4e86 Modifier.align \u5c5e\u6027\u7684\u5b50\u9879\u4f1a\u4f18\u5148\u4e8e Column \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"horizontalAlignment")," \u53c2\u6570\u6765\u5b9a\u4f4d\u3002"),(0,i.kt)("img",{src:a}))}m.isMDXComponent=!0}}]);