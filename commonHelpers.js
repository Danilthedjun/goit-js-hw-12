import{i as f,S as d}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function m(o){const i=`https://pixabay.com/api/?key=42530509-bac56eefb83244286f2e71aac&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(i).then(s=>{if(!s.ok)throw new Error("Image error!");return s.json()}).then(s=>s)}function p(o){return o.map(({webformatURL:r,largeImageURL:n,tags:a,likes:e,views:t,comments:i,downloads:s})=>`
   <li class="gallery-item">
  <a class="gallery-link" href="${n}">
    <img class="gallery-image" src="${r}" alt="${a}" />
  </a>
  <div class="stats">
  <p>Likes<br/>${e}</p>
  <p>Views<br/>${t}</p>
  <p>Commens<br/>${i}</p>
  <p>Downloads<br/>${s}</p>
</div>
</li>
  `).join("")}const l=document.querySelector(".gallery"),u=document.querySelector("form");let c;function y(o){const r=document.createElement("div");r.classList.add("loader"),u.insertAdjacentElement("afterend",r),l.innerHTML="",m(o).then(n=>{n.hits.length===0?f.error({color:"yellow",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):(l.innerHTML=p(n.hits),c?c.refresh():c=new d(".gallery-link",{captionsData:"alt",captionDelay:250}))}).catch(n=>{l.innerHTML=`<p>Gallery creation failed: ${n}</p>`}).finally(()=>{r.remove()})}u.addEventListener("submit",o=>{o.preventDefault();const r=o.target.search.value.trim();y(r)});
//# sourceMappingURL=commonHelpers.js.map
