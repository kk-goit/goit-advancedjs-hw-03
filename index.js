import{S as f,i}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const g="46481963-10f537a41063d6fd7fead7408",y="https://pixabay.com/api/",h="&image_type=photo&orientation=horizontal&safesearch=true";function L(a){return fetch(`${y}?key=${g}${h}&q=`+encodeURIComponent(a)).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function E(a){const r=document.createElement("ul");for(const n of a){const s=document.createElement("li");s.classList.add("gallery-item");const e=document.createElement("img");e.classList.add("gallery-image"),e.setAttribute("src",n.webformatURL),e.setAttribute("alt",n.tags);const t=document.createElement("a");t.classList.add("gallery-link"),t.setAttribute("href",n.largeImageURL),t.append(e),s.append(t);const o=document.createElement("div");o.classList.add("gallery-descr");const c=document.createElement("div");c.innerHTML=`<span>Likes</span>${n.likes}`,o.append(c);const l=document.createElement("div");l.innerHTML=`<span>Views</span>${n.views}`,o.append(l);const d=document.createElement("div");d.innerHTML=`<span>Comments</span>${n.comments}`,o.append(d);const m=document.createElement("div");m.innerHTML=`<span>Downloads</span>${n.downloads}`,o.append(m),s.append(o),r.append(s)}return r.innerHTML}const v=new f(".gallery a",{overlayOpacity:.8,className:"gallery-wrapper",captionsData:"alt",captionDelay:250});i.settings({class:"toast",position:"topRight",drag:!1});const u=document.getElementById("modal"),p=document.querySelector(".gallery");document.getElementById("search-form").addEventListener("submit",a=>{a.preventDefault();const r=a.currentTarget,n=r.elements.queryStr.value.trim();if(n===""){r.reset();return}u.classList.add("is-open"),p.innerHTML="",L(n).then(s=>{s.total==0?i.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(p.innerHTML=E(s.hits),v.refresh())}).catch(s=>{i.error({message:s.message})}).finally(()=>{u.classList.remove("is-open"),r.reset()})});
//# sourceMappingURL=index.js.map
