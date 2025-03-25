const e=document.querySelectorAll(".gallery__pic");let c=document.querySelector(".gallery__pic--active");e.forEach((e=>{e.addEventListener("mouseover",(e=>{const t=e.currentTarget;t!==c&&(t.classList.add("gallery__pic--active"),c.classList.remove("gallery__pic--active"),c=t)}))}));
//# sourceMappingURL=index.439a3d7d.js.map
