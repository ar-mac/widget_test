(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();let n=document.querySelector("#save_resource"),s=document.querySelector("#cancel_resource"),i=null,u=null;const f=()=>{if(n=document.querySelector("#save_resource"),s=document.querySelector("#cancel_resource"),!n&&!s){console.log("not found elements"),d();return}console.log("found elements"),i=o=>{console.log("clicked save resource button!",o)},n.addEventListener("click",i),u=o=>{console.log("clicked cancel resource button!",o)},s.addEventListener("click",u),console.log("watching!")},d=()=>{console.log("watch timeout"),setTimeout(f,1500)};console.log("file loaded");d();
