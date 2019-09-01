!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.extension=t():e.extension=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MAX_BRIGHTNESS=255,t.HUE_MAX_DEGREE=360,t.MAX_PERCENTAGE=100,t.HEX_BASE=16,t.JSON_SPACING=2,t.NUMERICAL_FONT_BOLD=700,t.NUMERICAL_FONT_NORMAL=400,t.REACT_RULES_WITH_COLOR=["backgroundColor","borderColor","color","shadowColor","textDecorationColor","textShadowColor"],t.HTML_TAGS=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","slot","small","source","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],t.OPTION_NAMES={COLOR_FORMAT:"colorFormat",SHOW_DIMENSIONS:"showDimensions",SHOW_DEFAULT_VALUES:"showDefaultValues",USE_LINKED_STYLEGUIDES:"useLinkedStyleguides"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(5);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var n=r(6);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var i=r(7);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var a=r(8);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var l=r(9);Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(3),n=r(0),i=r(1);function a(e){var t=e.getOption(n.OPTION_NAMES.USE_LINKED_STYLEGUIDES),r=(0,i.getResourceContainer)(e),a=r.container,l=r.type,u=(0,i.getResources)(a,l,t,"colors"),s={colorFormat:e.getOption(n.OPTION_NAMES.COLOR_FORMAT)};return{code:(0,o.getStyleguideColorsCode)(s,u),language:"scss"}}function l(e){var t={useLinkedStyleguides:e.getOption(n.OPTION_NAMES.USE_LINKED_STYLEGUIDES),colorFormat:e.getOption(n.OPTION_NAMES.COLOR_FORMAT),defaultValues:e.getOption(n.OPTION_NAMES.SHOW_DEFAULT_VALUES)},r=(0,i.getResourceContainer)(e),a=r.container,l=r.type,u=(0,i.getResources)(a,l,t.useLinkedStyleguides,"textStyles");return{code:(0,o.getStyleguideTextStylesCode)(t,r,u),language:"scss"}}function u(e,t){var r={colorFormat:e.getOption(n.OPTION_NAMES.COLOR_FORMAT)};return{code:(0,o.getStyleguideColorsCode)(r,t),language:"scss"}}function s(e,t){var r={colorFormat:e.getOption(n.OPTION_NAMES.COLOR_FORMAT),defaultValues:e.getOption(n.OPTION_NAMES.SHOW_DEFAULT_VALUES)},a=(0,i.getResourceContainer)(e);return{code:(0,o.getStyleguideTextStylesCode)(r,a,t),language:"scss"}}t.default={layer:function(e,t){var r=(0,i.getResourceContainer)(e),a={useLinkedStyleguides:e.getOption(n.OPTION_NAMES.USE_LINKED_STYLEGUIDES),showDimensions:e.getOption(n.OPTION_NAMES.SHOW_DIMENSIONS),colorFormat:e.getOption(n.OPTION_NAMES.COLOR_FORMAT),defaultValues:e.getOption(n.OPTION_NAMES.SHOW_DEFAULT_VALUES)};return{code:(0,o.getLayerCode)(r,t,a),language:"scss"}},colors:a,textStyles:l,comment:function(e,t){return`// ${t}`},exportColors:function(e){return{code:a(e).code,filename:"colors.js",language:"scss"}},exportTextStyles:function(e){return{code:l(e).code,filename:"fonts.js",language:"scss"}},styleguideColors:u,styleguideTextStyles:s,exportStyleguideColors:function(e,t){return{code:u(e,t).code,filename:"colors.js",language:"scss"}},exportStyleguideTextStyles:function(e,t){return{code:s(e,t).code,filename:"fonts.js",language:"scss"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLayerCode=t.getStyleguideTextStylesCode=t.getStyleguideColorsCode=void 0;var o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],o=!0,n=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(e){n=!0,i=e}finally{try{!o&&l.return&&l.return()}finally{if(n)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=r(4),i=r(1),a=r(0);function l(e){return Object.entries(e).reduce(function(e,t){var r=o(t,2),n=r[0],i=r[1];return`${e}\n    ${n.replace(/([A-Z])/g,function(e){return`-${e[0].toLowerCase()}`})}: ${i};`},"")+"\n"}t.getStyleguideColorsCode=function(e,t){return`const colors = {\n${function(e,t){return t.map(function(t){var r=(0,i.getColorStringByFormat)(t,e);return`  ${t.name}: "${r}"`})}(e.colorFormat,t).join(",\n")}\n};`},t.getStyleguideTextStylesCode=function(e,t,r){var o=(0,n.generateStyleguideTextStylesObject)(e,t,r),a="";return Object.keys(o).forEach(function(e){var t=o[e];a+=`\nconst ${(0,i.jsUcfirst)(e)} = styled.Text\`${l(t).replace(/ ([0-9]*\.?[0-9])+(;)?/g," $1px;").replace(/: colors\.(.*);/g,": ${colors.$1};")}\`\n`}),a},t.getLayerCode=function(e,t,r){var o=e.container,u=e.type,s=r.useLinkedStyleguides,c=r.showDimensions,d=r.colorFormat,f=r.defaultValues,g=(0,n.generateLayerStyleObject)({layer:t,platform:o.type,densityDivisor:o.densityDivisor,showDimensions:c,colorFormat:d,defaultValues:f}),y=[];Object.keys(g).length>1&&y.unshift(g);var S=(0,i.getResources)(o,u,s,"colors");return y.map(function(e){return function(e,t,r){var o=e.selector;delete e.selector,Object.keys(e).forEach(function(r){"mixinEntry"!==r&&a.REACT_RULES_WITH_COLOR.includes(r)&&e[r]in t&&(e[r]=`colors.${t[e[r]]}`)});var n=(0,i.generateName)(o),u=l(e).replace(/ ([0-9]*\.?[0-9])+(;)?/g," $1px;").replace(/: colors\.(.*);/g,": ${colors.$1};");return`const ${n} = styled.${e.fontFamily?"Text":"View"}\`${u}\``}(e,(0,i.getColorMapByFormat)(S,r.colorFormat))}).join("\n\n")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateStyleguideTextStylesObject=t.generateLayerStyleObject=t.generateTextLayerStyleObject=void 0;var o=r(1),n=r(0);function i(e){var t=e.layer,r=e.font,n=e.densityDivisor,i=e.colorFormat,l=a({textStyle:r,densityDivisor:n,colorFormat:i,defaultValues:e.defaultValues,layerStyle:e.layerStyle});if(t.fills&&t.fills.length&&!(0,o.layerHasGradient)(t)){delete l.color;var u=(0,o.blendColors)(t.fills.map(function(e){return e.color}));r.color&&(u=u.blend(r.color)),l.color=(0,o.getColorStringByFormat)(u,i)}return l}function a(e){var t=e.textStyle,r=e.densityDivisor,i=e.colorFormat,a=e.defaultValues,l=e.layerStyle,u=(0,o.selectorize)(t.name);(0,o.isHtmlTag)(u)||(u=u.substring(1));var s,c={selector:u};if(c.fontFamily=t.fontFamily,c.fontSize=(0,o.round)(t.fontSize/r,1),s=l&&l["font-weight"]&&"normal"!==l["font-weight"],t.fontWeight===n.NUMERICAL_FONT_BOLD?c.fontWeight="bold":t.fontWeight!==n.NUMERICAL_FONT_NORMAL?c.fontWeight=String(t.fontWeight):(a||s)&&(c.fontWeight="normal"),s=l&&l["font-style"]&&"normal"!==l["font-style"],t.fontStyle&&("normal"!==t.fontStyle||a||s)&&(c.fontStyle="oblique"===t.fontStyle?"italic":t.fontStyle),t.lineHeight&&(c.lineHeight=(0,o.round)(t.lineHeight/r,1)),s=l&&l["letter-spacing"]&&"normal"!==l["letter-spacing"],t.letterSpacing){c.letterSpacing=(0,o.round)(t.letterSpacing/r,2)}else(a||s)&&(c.letterSpacing=0);return t.textAlign&&(c.textAlign=t.textAlign),t.color&&(c.color=(0,o.getColorStringByFormat)(t.color,i)),c}t.generateTextLayerStyleObject=i,t.generateLayerStyleObject=function(e){var t=e.layer,r=e.platform,n=e.densityDivisor,a=e.showDimensions,l=e.colorFormat,u=e.defaultValues,s=t.type,c={selector:(0,o.selectorize)(t.name)||".layer"};a&&(c.width=(0,o.round)(t.rect.width/n,1),c.height=(0,o.round)(t.rect.height/n,1)),t.rotation&&(c.transform=`rotate(${-t.rotation}deg)`),1!==t.opacity&&(c.opacity=(0,o.round)(t.opacity,2));if(t.borderRadius&&(c.borderRadius=(0,o.round)(t.borderRadius/n,1)),"text"===s&&t.defaultTextStyle){var d=i({layer:t,font:t.defaultTextStyle,densityDivisor:n,colorFormat:l,defaultValues:u});delete d.selector,Object.assign(c,d)}else!t.fills.length||(0,o.layerHasGradient)(t)||(0,o.layerHasBlendMode)(t)||(c.backgroundColor=(0,o.getColorStringByFormat)((0,o.blendColors)(t.fills.map(function(e){return e.color})),l));return t.shadows.length&&Object.assign(c,function(e){var t=e.shadow,r=e.platform,n=e.layerType,i=e.densityDivisor,a=e.colorFormat;return"text"===n?{textShadowColor:(0,o.getColorStringByFormat)(t.color,a),textShadowOffset:{width:(0,o.round)(t.offsetX/i,1),height:(0,o.round)(t.offsetY/i,1)},textShadowRadius:(0,o.round)(t.blurRadius/i,1)}:"android"===r?{}:{shadowColor:(0,o.getColorStringByFormat)(t.color,a),shadowOffset:{width:(0,o.round)(t.offsetX/i,1),height:(0,o.round)(t.offsetY/i,1)},shadowRadius:(0,o.round)(t.blurRadius/i,1),shadowOpacity:1}}({shadow:t.shadows[t.shadows.length-1],platform:r,layerType:s,densityDivisor:n,colorFormat:l})),t.borders.length&&Object.assign(c,function(e,t,r,n){return"text"===t||e.fill&&"gradient"===e.fill.type?{}:{borderStyle:"solid",borderWidth:(0,o.round)(e.thickness/r,1),borderColor:(0,o.getColorStringByFormat)(e.fill.color,n)}}(t.borders[t.borders.length-1],s,n,l)),c},t.generateStyleguideTextStylesObject=function(e,t,r){var n=t.container,i={densityDivisor:n.densityDivisor,colorFormat:e.colorFormat,defaultValues:e.defaultValues};return r.reduce(function(t,r){var l;if(r.color){var u=n.findColorEqual(r.color,e.useLinkedStyleguides);l=Object.assign({},i,{containerColor:u})}else l=i;var s=function(e,t){var r=a({textStyle:e,densityDivisor:t.densityDivisor,colorFormat:t.colorFormat,defaultValues:t.defaultValues}),n=(0,o.generateName)(r.selector),i={};return delete r.selector,t.containerColor&&(r.color="${"+`colors.${t.containerColor.name}`+"}"),i[n]=r,i}(r,l);return Object.assign(t,s)},{})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getColorStringByFormat=t.toDefaultString=t.getColorMapByFormat=t.blendColors=void 0;var o=r(0),n=new Intl.NumberFormat("en-US",{useGrouping:!1,maximumFractionDigits:2});function i(e,t){if("r"in e&&"g"in e&&"b"in e&&"a"in e)switch(t){case"hex":return a(e);case"rgb":return l(e);case"hsl":return function(e){var t=e.toHSL(),r=`${Math.round(t.h*o.HUE_MAX_DEGREE)}, `+`${Math.round(t.s*o.MAX_PERCENTAGE)}%, `+`${Math.round(t.l*o.MAX_PERCENTAGE)}%`;return e.a<1?`hsla(${r}, ${n.format(e.a)})`:`hsl(${r})`}(e);case"default":default:return u(e)}}function a(e,t){var r=e.hexBase();if(e.a<1){var n=function(e){return(e<o.HEX_BASE?"0":"")+e.toString(o.HEX_BASE)}(e.a*o.MAX_BRIGHTNESS);r=t?n+r:r+n}return`#${r}`}function l(e){var t=`${Math.round(e.r)}, ${Math.round(e.g)}, ${Math.round(e.b)}`;return e.a<1?`rgba(${t}, ${n.format(e.a)})`:`rgb(${t})`}function u(e){return e.a<1?l(e):a(e)}t.blendColors=function(e){return e.reduce(function(e,t){return e.blend(t)})},t.getColorMapByFormat=function(e,t){return e.reduce(function(e,r){var o=i(r,t);return e[o]=e[o]?e[o]:r.name,e},{})},t.toDefaultString=u,t.getColorStringByFormat=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.selectorize=t.round=t.isHtmlTag=void 0;var o=r(0);function n(e){return e.trim().replace(/[^\s\w-]/g,"").replace(/^(-?\d+)+/,"").replace(/\s+/g,"-")}function i(e){return o.HTML_TAGS.includes(e)}t.isHtmlTag=i,t.round=function(e,t){var r=Number(e).toLocaleString("en-US",{useGrouping:!1,maximumFractionDigits:t});return Number(r)},t.selectorize=function(e){if(!e)return"";var t=e.trim();if(i(e))return t.toLowerCase();if(/^[#.]/.test(t)){var r=n(t.substr(1));if(r)return t[0]+r}return(t=n(t))&&`.${t}`}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.layerHasGradient=function(e){return e.fills.some(function(e){return"gradient"===e.type})},t.layerHasBlendMode=function(e){return e.fills.some(function(e){return e.blendMode&&"normal"!==e.blendMode})}},function(e,t,r){"use strict";function o(e){return e.charAt(0).toUpperCase()+e.substring(1)}function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}Object.defineProperty(t,"__esModule",{value:!0}),t.generateName=function(e){return n(function(e){return function(e){return e.charAt(0).toLowerCase()+e.substring(1)}(e.map(o).join(""))}(function(e){var t=e.match(/\d+|[a-z]+|[A-Z]+(?![a-z])|[A-Z][a-z]+/g);if(!t)return["invalid","name"];return t.map(function(e){return n(e.toLowerCase())})}(e)))},t.jsUcfirst=n},function(e,t,r){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getResources=function(e,t,r,n){return r?function(e,t,r){for(var n="project"===t,i=[].concat(o(e[r])),a=n?e.linkedStyleguide:e.parent;a;)i=[].concat(o(i),o(a[r])),a=a.parent;return i}(e,t,n):e[n]},t.getResourceContainer=function(e){return e.styleguide?{container:e.styleguide,type:"styleguide"}:{container:e.project,type:"project"}}}]).default});