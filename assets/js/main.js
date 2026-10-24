/* Kontaktdaten für die untere Schnellkontakt-Leiste. Leer lassen = Leiste bleibt aus.
   Format: phone "+4915112345678", whatsapp "4915112345678" (ohne + und Leerzeichen) */
const CONFIG={phone:"+491639272999",whatsapp:"491639272999",email:"beatrice@braeuer.digital"};
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const header=$(".site-header"),btn=$(".menu-btn"),nav=$("#nav");
const onScroll=()=>{header.classList.toggle("scrolled",scrollY>40);const q=$(".quick");if(q)q.classList.toggle("on",scrollY>500);
const m=$(".mark");if(m&&!matchMedia("(prefers-reduced-motion:reduce)").matches){const r=m.parentElement.getBoundingClientRect();m.style.transform=`translateY(calc(-50% + ${(-r.top*.06).toFixed(1)}px))`}};
addEventListener("scroll",onScroll,{passive:true});onScroll();
const setMenu=o=>{nav.classList.toggle("open",o);btn.setAttribute("aria-expanded",o);btn.setAttribute("aria-label",o?"Menü schließen":"Menü öffnen");document.body.style.overflow=o?"hidden":""};
btn.addEventListener("click",()=>setMenu(btn.getAttribute("aria-expanded")!=="true"));
$$("#nav a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}}),{threshold:.15});
$$(".rv").forEach(el=>io.observe(el));
if(CONFIG.phone||CONFIG.whatsapp){const q=document.createElement("div");q.className="quick";
if(CONFIG.phone)q.innerHTML+=`<a href="tel:${CONFIG.phone}">Anrufen</a>`;
if(CONFIG.whatsapp)q.innerHTML+=`<a href="https://wa.me/${CONFIG.whatsapp}" rel="noopener" target="_blank">WhatsApp schreiben</a>`;
document.body.append(q);onScroll()}
const f=$("#contact-form");if(f)f.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(f);
const body=`${d.get("message")}\n\n${d.get("name")}\n${d.get("email")}`;
location.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent("Anfrage über braeuer.digital")}&body=${encodeURIComponent(body)}`});
