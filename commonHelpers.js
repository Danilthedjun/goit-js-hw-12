import{a as L,i as m,S as b}from"./assets/vendor-b42c18af.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function v(o,r){const E=`https://pixabay.com/api/?key=42530509-bac56eefb83244286f2e71aac&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${r}`;return(await L.get(E)).data}function $(o){return o.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:t,comments:n,downloads:d})=>`
   <li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img class="gallery-image" src="${r}" alt="${s}" />
  </a>
  <div class="stats">
  <p>Likes<br/>${e}</p>
  <p>Views<br/>${t}</p>
  <p>Commens<br/>${n}</p>
  <p>Downloads<br/>${d}</p>
</div>
</li>
  `).join("")}const c=document.querySelector(".gallery"),p=document.querySelector("form"),u=document.querySelector(".add-more"),f=document.querySelector(".spiner");let y,l;function g(o,r){const i=document.createElement("div");i.classList.add("loader"),p.insertAdjacentElement("afterend",i),l||(l=new b(".gallery-link",{captionsData:"alt",captionDelay:250})),v(o,r).then(s=>{y=s.totalHits,s.hits.length===0?(u.classList.remove("is-viseble"),m.error({color:"yellow",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})):(c.innerHTML+=$(s.hits),u.classList.add("is-viseble"),f.classList.remove("spiner-isV"),window.scrollBy({top:460,left:0,behavior:"smooth"}))}).catch(s=>{c.innerHTML="<p>Gallery creation failed</p>"}).finally(()=>{i.remove(),l.refresh()})}let h,a;p.addEventListener("submit",o=>{o.preventDefault(),c.innerHTML=null;const r=o.target.search.value.trim();a=1,g(r,a),h=r,p.reset()});u.addEventListener("click",o=>{if(a>y/15)return m.error({position:"topRight",message:"We're sorry, there are no more posts to load",color:"yellow"});a++,g(h,a),f.classList.add("spiner-isV")});
//# sourceMappingURL=commonHelpers.js.map
