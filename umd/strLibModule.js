!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){"use strict";String.prototype.lower=function(){return this[0].toLowerCase()+this.slice(1,this.length)},String.prototype.capitalizeSentence=function(){return this.split(" ").map(t=>t[0].toUpperCase()+t.slice(1,t.length)).join(" ")},String.prototype.evenCaps=function(){return this.split("").map((t,e)=>e%2==0?t.toUpperCase():t).join("")},String.prototype.oddCaps=function(){return this.split("").map((t,e)=>e%2==1?t.toUpperCase():t).join("")},String.prototype.removeWhitespace=function(){return this.split("").map(t=>" "===t?"":t).join("")},String.prototype.removeExtraWhitespace=function(){return this.split("").map((t,e)=>" "===this[e+1]&&" "===t?"":t).join("").trim()},String.prototype.kebabCase=function(){return this.removeExtraWhitespace().split(" ").join("-").toLowerCase()},String.prototype.snakeCase=function(){return this.removeExtraWhitespace().split(" ").join("_").toLowerCase()},String.prototype.camelCase=function(){return this.removeExtraWhitespace().toLowerCase().capitalizeSentence().split(" ").join("").lower()},String.prototype.asciiShift=function(t){const e=[];for(i=0;i<this.length;i++){const n=this.charCodeAt(i);e.push(String.fromCharCode(n+t))}return e.join("")}});
