const p=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}};p();console.log("Hello world");document.querySelector(".swiper-container");new Swiper(".swiper-container",{spaceBetween:10,slidesPerView:5,slidesPerGroup:2,speed:500,direction:"vertical",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",clickable:!0},mousewheel:{sensitivity:2}});document.querySelector(".animation");const r=document.querySelector(".animation-block__text"),h=document.querySelector(".animation__image");document.querySelector(".hero__form");const y=document.querySelector(".hero-form__button"),s=document.querySelector(".hero__list"),_=document.querySelectorAll(".hero-list__btn"),L=document.querySelectorAll(".hero-list__item"),a=document.querySelector(".hero__input"),m=document.querySelector(".img__hero"),f=["\u0422\u044B \u0441\u0430\u043C\u044B\u0439 \u043C\u0438\u043B\u044B\u0439 \u0441\u0442\u0440\u0430\u043D\u043D\u0438\u043A!","\u042F \u043E\u0447\u0435\u043D\u044C \u0440\u0430\u0434 \u0437\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u0443!","\u0422\u044B \u043E\u0447\u0435\u043D\u044C \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043D\u0438\u043A!","\u0421 \u0442\u043E\u0431\u043E\u0439 \u043F\u0440\u0438\u044F\u0442\u043D\u043E \u0438\u043C\u0435\u0442\u044C \u0434\u0435\u043B\u043E!"];r.addEventListener("click",function(){r.style.color="#000",r.innerHTML=f[Math.floor(Math.random()*4)]});h.addEventListener("click",function(){r.style.color="#000",r.innerHTML=f[Math.floor(Math.random()*4)]});let c=[];function g(){const e=a.value;e.length>=1&&c.length<=10?(c.unshift(e),a.value="",localStorage.setItem("todoList",JSON.stringify(c)),u()):e.length>=1?(r.innerHTML="10 \u0437\u0430\u0434\u0430\u0447 - \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E!",r.style.color="#ff0000",r.style.fontSize="12px"):c.length<=10&&(r.innerHTML="\u0412\u0432\u0435\u0434\u0438 \u043A\u0430\u043A\u043E\u0439-\u043D\u0438\u0431\u0443\u0434\u044C \u0441\u0438\u043C\u0432\u043E\u043B!",r.style.color="#ff0000",r.style.fontSize="13px"),a.focus()}function u(){s.innerHTML="",c.forEach((e,o)=>{const i=document.createElement("li"),l=document.createElement("button");i.classList.add("hero-list__item"),i.innerText=e,l.classList.add("hero-list__btn"),i.addEventListener("click",t=>{i.classList.toggle("textdecor"),s.appendChild(i)}),l.addEventListener("click",t=>{c.splice(o,1),localStorage.setItem("todoList",JSON.stringify(c)),t.stopPropagation(),u()}),i.appendChild(l),s.appendChild(i)})}y.addEventListener("click",()=>{g()});a.addEventListener("keydown",e=>{e.code==="Enter"&&g()});localStorage.getItem("todoList")&&(c=JSON.parse(localStorage.getItem("todoList")),setTimeout(()=>{u()}));_.forEach(function(e){e.addEventListener("click",function(o){e.parentNode.parentNode.removeChild(e.parentNode),o.stopPropagation()})});L.forEach(e=>{e.addEventListener("click",function(){e.classList.toggle("textdecor"),c.push(e),s.append(e)})});const S=document.querySelectorAll(".bg__image"),b=e=>{let o=e.target.src;console.log(o),m.setAttribute("src",o),localStorage.setItem("bgitem",JSON.stringify(o))};S.forEach(e=>{e.addEventListener("click",b)});if(localStorage.getItem("bgitem")){const e=JSON.parse(localStorage.getItem("bgitem"));console.log(e),m.setAttribute("src",e)}
