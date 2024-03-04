import{a as L,i as m,S as b}from"./assets/vendor-b42c18af.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function v(s,r){const E=`https://pixabay.com/api/?key=42530509-bac56eefb83244286f2e71aac&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${r}`;return(await L.get(E)).data}function $(s){return s.map(({webformatURL:r,largeImageURL:i,tags:o,likes:e,views:t,comments:n,downloads:d})=>`
   <li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img class="gallery-image" src="${r}" alt="${o}" />
  </a>
  <div class="stats">
  <p>Likes<br/>${e}</p>
  <p>Views<br/>${t}</p>
  <p>Commens<br/>${n}</p>
  <p>Downloads<br/>${d}</p>
</div>
</li>
  `).join("")}const p=document.querySelector(".gallery"),u=document.querySelector("form"),l=document.querySelector(".add-more"),f=document.querySelector(".spiner");let y,c;function g(s,r){const i=document.createElement("div");i.classList.add("loader"),u.insertAdjacentElement("afterend",i),c||(c=new b(".gallery-link",{captionsData:"alt",captionDelay:250})),v(s,r).then(o=>{y=o.totalHits,o.hits.length===0?(l.classList.remove("is-viseble"),m.error({color:"yellow",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})):(p.innerHTML+=$(o.hits),l.classList.add("is-viseble"),f.classList.remove("spiner-isV"),window.scrollBy({top:460,left:0,behavior:"smooth"}))}).catch(o=>{p.innerHTML="<p>Gallery creation failed</p>"}).finally(()=>{i.remove(),c.refresh()})}let h,a;u.addEventListener("submit",s=>{s.preventDefault(),p.innerHTML=null;const r=s.target.search.value.trim();a=1,g(r,a),h=r,u.reset()});l.addEventListener("click",s=>{if(a>y/15)return l.classList.remove("is-viseble"),m.error({position:"topRight",message:"We're sorry, there are no more posts to load",color:"yellow"});a++,g(h,a),f.classList.add("spiner-isV")});
//# sourceMappingURL=commonHelpers.js.map
