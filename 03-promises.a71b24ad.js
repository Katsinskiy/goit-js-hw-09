!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i");function r(e,n){return new Promise((function(o,t){var i=Math.random()>.3;setTimeout((function(){i?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();for(var n=e.currentTarget.elements,o=n.delay,t=n.step,a=n.amount,u=Number(o.value),l=0;l<a.value;l+=1)u=Number(o.value)+l*Number(t.value),r(l+1,u).then((function(e){var n=e.position,o=e.delay;i.Notify.success("Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;i.Notify.failure(" Fulfilled promise ".concat(n," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.a71b24ad.js.map