(this["webpackJsonpstream-hub"]=this["webpackJsonpstream-hub"]||[]).push([[5],{65:function(e,r,t){"use strict";var a=t(0),s=t.n(a),c=t(27),i=t.n(c);r.a=function(e){e.id;var r=e.type,t=e.src,a=e.style,c=null;switch(r){case"youtube":c=s.a.createElement("iframe",{title:t,src:"https://www.youtube.com/live_chat?v=".concat(t,"&amp;embed_domain=").concat(window.location.hostname),frameBorder:"0"});break;case"twitch":c=s.a.createElement("iframe",{title:t,src:"https://www.twitch.tv/embed/".concat(t,"/chat?darkpopout"),scrolling:"no",frameBorder:"0"})}return s.a.createElement("div",{className:i.a.Box,style:a},c)}},66:function(e,r,t){"use strict";var a=t(0),s=t.n(a),c=t(27),i=t.n(c);r.a=function(e){var r=e.type,t=e.src,a=e.style,c=null;switch(r){case"youtube":c=s.a.createElement("iframe",{title:t,src:"https://www.youtube.com/embed/".concat(t,"?autoplay=1"),frameBorder:"0","data-params":'data-params="modestbranding=1&showinfo=0'});break;case"twitch":c=s.a.createElement("iframe",{title:t,src:"https://player.twitch.tv/?channel=".concat(t),scrolling:"no",frameBorder:"0"})}return s.a.createElement("div",{className:i.a.Box,style:a},c)}},68:function(e,r,t){e.exports={Triple:"Triple_Triple__6EehA",ThreeFiels:"Triple_ThreeFiels__3IaZe",ThreeFielsOneChat:"Triple_ThreeFielsOneChat__1oXW9"}},71:function(e,r,t){"use strict";t.r(r);var a=t(0),s=t.n(a),c=t(65),i=t(66),l=t(68),n=t.n(l),o=t(11);r.default=Object(o.b)((function(e){return{sources:e.sources,layout:e.layout}}))((function(e){if(e.sources||e.layout){var r=s.a.createElement("div",{className:n.a.ThreeFiels},s.a.createElement(i.a,{id:1,type:e.sources[0].service,src:e.sources[0].src,style:{"grid-area":"streamA"}}),s.a.createElement(i.a,{id:2,type:e.sources[1].service,src:e.sources[1].src,style:{"grid-area":"streamB"}}),s.a.createElement(i.a,{id:3,type:e.sources[2].service,src:e.sources[2].src,style:{"grid-area":"streamC"}})),t=s.a.createElement("div",{className:n.a.ThreeFielsOneChat},s.a.createElement(i.a,{id:1,type:e.sources[0].service,src:e.sources[0].src,style:{"grid-area":"streamA"}}),s.a.createElement(i.a,{id:2,type:e.sources[1].service,src:e.sources[1].src,style:{"grid-area":"streamB"}}),s.a.createElement(i.a,{id:3,type:e.sources[2].service,src:e.sources[2].src,style:{"grid-area":"streamC"}}),s.a.createElement(c.a,{id:2,type:e.sources[0].service,src:e.sources[0].src,style:{"grid-area":"chat"}})),a=null;switch(e.layout){case"three_fields":a=r;break;case"three_fields_one_chat":a=t;break;default:e.history.replace("/")}return s.a.createElement("div",{className:n.a.Triple},a)}return e.history.replace("/"),null}))}}]);
//# sourceMappingURL=5.3c550347.chunk.js.map