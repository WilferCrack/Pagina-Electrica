/* ===== CONFIG: completar con los datos reales ===== */
const CONFIG={
 whatsapp:"5493464520382",
 instagram:"edjv.casilda",
 message:"Hola, quiero hacer una consulta.",
 zone:"Casilda y zona"
};
/* ===== GALERÍA: agregar un objeto por trabajo. src vacío = espacio preparado ===== */
const WORKS=[
 {cat:"Electricidad",title:"Instalación eléctrica",desc:"",src:"img/electricidad-01.webp",alt:"Instalación eléctrica terminada"},
 {cat:"Aire acondicionado",title:"Instalación de equipo",desc:"",src:"img/aire-acondicionado-01.webp",alt:"Aire acondicionado instalado"},
 {cat:"Paneles solares",title:"Proyecto de paneles solares",desc:"",src:"img/paneles-solares-01.webp",alt:"Paneles solares instalados"},
 {cat:"Electricidad",title:"Tablero y cableado",desc:"",src:"img/electricidad-02.webp",alt:"Tablero eléctrico"},
 {cat:"Aire acondicionado",title:"Mantenimiento de equipo",desc:"",src:"img/aire-acondicionado-02.webp",alt:"Mantenimiento de aire acondicionado"},
 {cat:"Cámaras de seguridad",title:"Instalación de cámaras",desc:"",src:"img/camara.webp",alt:"Cámara de seguridad instalada"},
 {cat:"Electricidad",title:"Renovación eléctrica",desc:"",src:"img/electricidad-03.webp",alt:"Renovación eléctrica"}
];
const LOGO="img/logo-256.png";
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const motifs={circuit:'<path d="M0 80h120l30-30h90M0 140h80l40 40h140M300 20v60l-30 30" stroke="#279BCB"/><circle cx="240" cy="50" r="4" stroke="#C5A34A"/>',
air:'<path d="M0 60q60-30 120 0t120 0t120 0M0 110q60-30 120 0t120 0t120 0M0 160q60-30 120 0t120 0t120 0" stroke="#279BCB"/>',
sun:'<circle cx="260" cy="60" r="26" stroke="#C5A34A"/><path d="M260 14v-8M260 114v-8M214 60h-8M314 60h-8M0 170h360M40 170l30-60h80l30 60M110 110v60" stroke="#68A94B"/>'};
/* foto: usa la imagen real si existe; si no, muestra espacio provisorio */
$$(".logo-img").forEach(i=>i.src=LOGO);
const motifOf=w=>w.cat==="Aire acondicionado"?"air":w.cat==="Paneles solares"?"sun":w.cat==="Cámaras de seguridad"?"cam":"elec";
function art(k,v){
 const B='<rect width="600" height="450" fill="#16264a"/><path d="M0 60h600M0 150h600M0 240h600M0 330h600M0 420h600M100 0v450M250 0v450M400 0v450M550 0v450" stroke="#1f3260" stroke-width="1"/>';
 let b="";
 if(k==="air"){
  const y=70+(v%2)*20,w=360;
  b='<rect x="0" y="360" width="600" height="90" fill="#0e1a36"/><rect x="'+(120-v%3*20)+'" y="'+y+'" width="'+w+'" height="100" rx="14" fill="#f2f2ee" stroke="#C5A34A" stroke-width="2"/><rect x="'+(140-v%3*20)+'" y="'+(y+58)+'" width="'+(w-40)+'" height="14" rx="7" fill="#c9ced8"/><circle cx="'+(440-v%3*20)+'" cy="'+(y+28)+'" r="5" fill="#68A94B"/>';
  for(let i=0;i<5;i++){const x=150+i*70-v%3*20;b+='<path d="M'+x+' '+(y+110)+'q-24 40 0 80t0 80t0 60" fill="none" stroke="#279BCB" stroke-width="3" opacity="'+(.9-i*.12)+'"/>'}
 }else if(k==="cam"){
  b='<rect x="0" y="380" width="600" height="70" fill="#0e1a36"/>';
  if(v%2){
   b+='<rect x="0" y="0" width="600" height="40" fill="#1d2f58"/><path d="M120 400L300 110 480 400z" fill="#279BCB" opacity=".15"/><path d="M300 110L120 400M300 110L480 400" stroke="#279BCB" stroke-width="2" opacity=".7"/><path d="M240 40a60 60 0 0 1 120 0z" fill="#f2f2ee" stroke="#C5A34A" stroke-width="2"/><circle cx="300" cy="46" r="14" fill="#0d1730" stroke="#279BCB" stroke-width="3"/>';
  }else{
   b+='<rect x="0" y="40" width="70" height="340" fill="#1d2f58"/><rect x="70" y="105" width="125" height="14" fill="#9db4d6"/><path d="M426 113L590 190V360z" fill="#279BCB" opacity=".15"/><path d="M426 113L590 190M426 113L590 360" stroke="#279BCB" stroke-width="2" opacity=".7"/><rect x="190" y="85" width="190" height="56" rx="10" fill="#f2f2ee" stroke="#C5A34A" stroke-width="2"/><circle cx="400" cy="113" r="26" fill="#0d1730" stroke="#279BCB" stroke-width="3"/><circle cx="400" cy="113" r="10" fill="#279BCB"/><circle cx="215" cy="100" r="4" fill="#68A94B"/>';
  }
 }else if(k==="sun"){
  b='<circle cx="'+(470+v*15)+'" cy="95" r="42" fill="#C5A34A"/><path d="M'+(470+v*15)+' 30v-18M'+(470+v*15)+' 160v18M405 95h-18M535 95h18" stroke="#C5A34A" stroke-width="4"/><polygon points="40,400 160,170 560,170 600,400" fill="#2a3b63" stroke="#C5A34A" stroke-width="2"/>';
  const rows=2+v%2;
  for(let r=0;r<rows;r++)for(let c=0;c<4;c++){const y0=190+r*68,x0=150+c*100-r*14;b+='<polygon points="'+x0+','+(y0+60)+' '+(x0+14)+','+y0+' '+(x0+94)+','+y0+' '+(x0+80)+','+(y0+60)+'" fill="#1d4f8a" stroke="#9db4d6" stroke-width="2"/><path d="M'+(x0+27)+' '+y0+'l-14 60M'+(x0+54)+' '+y0+'l-14 60" stroke="#9db4d6" stroke-width="1" opacity=".6"/>'}
  b+='<path d="M0 410h600" stroke="#68A94B" stroke-width="3"/>';
 }else{
  const cols=3+v%2;
  b='<rect x="170" y="50" width="260" height="350" fill="#0d1730" stroke="#C5A34A" stroke-width="3"/><rect x="190" y="70" width="220" height="40" fill="#16264a" stroke="#279BCB"/>';
  for(let r=0;r<4;r++)for(let c=0;c<cols;c++){const w=200/cols-8,x=195+c*(w+8)+(cols===4?-4:0),y=130+r*62;b+='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="50" fill="#1b2c55" stroke="#9db4d6"/><rect x="'+(x+w/2-6)+'" y="'+(y+8+((r+c+v)%2)*18)+'" width="12" height="18" fill="'+((r+c+v)%3?"#C5A34A":"#279BCB")+'"/>'}
  b+='<path d="M300 400v30M240 400v50M360 400v50" stroke="#68A94B" stroke-width="5"/><path d="M0 120h170M0 200h110l30 30h30M430 160h170M430 260h120l30-30" stroke="#279BCB" stroke-width="2" fill="none"/>';
 }
 return 'data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice">'+B+b+'</svg>');
}
function fillPhoto(el,src,alt,name,motif,v){
 const ph=document.createElement("div");ph.className="ph";
 if(motif==="none"){ph.innerHTML='<svg viewBox="0 0 360 200" preserveAspectRatio="xMidYMid slice" fill="none" stroke-width="1.2" aria-hidden="true">'+motifs.circuit+'</svg><b>Foto provisoria</b><span>Reemplazar por '+name+'</span>'}
 else{ph.innerHTML='<img alt="Ilustración provisoria" src="'+art(motif||"elec",v||0)+'"><span class="bd">Ilustración · reemplazar por foto real</span>'}
 el.prepend(ph);
 if(!src)return;
 const im=new Image();im.alt=alt;im.decoding="async";im.loading=el.closest(".hero")?"eager":"lazy";
 im.onload=()=>{
  ph.remove();
  const tag=el.querySelector(".tag");
  if(tag)tag.remove();
 };
 im.onerror=()=>{im.remove()};
 el.prepend(im);
 im.src=src;
}
$$("[data-img]").forEach(el=>fillPhoto(el,el.dataset.img,el.dataset.alt,el.dataset.name,el.dataset.motif==="circuit"?"elec":el.dataset.motif||"elec",0));
/* galería */
const cats=["Todos",...new Set(WORKS.map(w=>w.cat))];
const fb=$(".filters"),g=$("#gallery");let cur="Todos";
cats.forEach(c=>{const b=document.createElement("button");b.textContent=c;b.setAttribute("aria-pressed",c==="Todos");b.onclick=()=>{cur=c;$$("button",fb).forEach(x=>x.setAttribute("aria-pressed",x===b));render()};fb.append(b)});
function render(){
 g.innerHTML="";
 const list=WORKS.filter(w=>cur==="Todos"||w.cat===cur);
 if(!list.length){g.innerHTML='<p class="empty">Todavía no hay trabajos en esta categoría.</p>';return}
 list.forEach(w=>{
  const f=document.createElement("figure");f.tabIndex=0;f.setAttribute("role","button");f.setAttribute("aria-label","Ampliar: "+w.title);
  fillPhoto(f,w.src,w.alt,w.src.split("/").pop(),motifOf(w),WORKS.indexOf(w));
  const c=document.createElement("figcaption");c.innerHTML="<b></b><span></span>";$("b",c).textContent=w.title;$("span",c).textContent=w.cat;f.append(c);
  const open=()=>openLb(w,f);f.onclick=open;f.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}};
  g.append(f);
 });
}
render();
/* lightbox */
const lb=$("#lb");let last=null;
function openLb(w,from){last=from;const p=$("#lb-photo");p.innerHTML="";fillPhoto(p,w.src,w.alt,w.src.split("/").pop(),motifOf(w),WORKS.indexOf(w));
 $("#lb-t").textContent=w.title+" · "+w.cat;$("#lb-d").textContent=w.desc||"";lb.classList.add("open");$(".lb-x").focus();document.body.style.overflow="hidden"}
function closeLb(){lb.classList.remove("open");document.body.style.overflow="";last&&last.focus()}
lb.addEventListener("keydown",e=>{if(e.key!=="Tab")return;const items=[...lb.querySelectorAll('button,[href],input,[tabindex]:not([tabindex="-1"])')].filter(x=>!x.disabled);if(!items.length)return;const first=items[0],lastItem=items[items.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();lastItem.focus()}else if(!e.shiftKey&&document.activeElement===lastItem){e.preventDefault();first.focus()}});
$(".lb-x").onclick=closeLb;lb.onclick=e=>{if(e.target===lb)closeLb()};
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&lb.classList.contains("open"))closeLb()});
/* menú móvil */
const bg=$(".burger"),mm=$("#mobile");
function setMenu(o){mm.classList.toggle("open",o);bg.setAttribute("aria-expanded",o);bg.setAttribute("aria-label",o?"Cerrar menú":"Abrir menú")}
bg.onclick=()=>setMenu(!mm.classList.contains("open"));
$$("a",mm).forEach(a=>a.addEventListener("click",()=>setMenu(false)));
document.addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
/* enlaces de contacto */
$$("[data-wa]").forEach(a=>{if(CONFIG.whatsapp){a.href="https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent(a.dataset.msg||CONFIG.message);a.target="_blank";a.rel="noopener"}});
$$("[data-ig]").forEach(a=>{if(CONFIG.instagram){a.href="https://instagram.com/"+CONFIG.instagram;a.target="_blank";a.rel="noopener noreferrer"}});
if(!CONFIG.whatsapp||!CONFIG.instagram)$("#pending").hidden=false;
if(CONFIG.zone){const z=$("#zone");z.textContent=CONFIG.zone;z.classList.remove("edit")}
$("#year").textContent=new Date().getFullYear();
/* entradas al desplazarse */
const io="IntersectionObserver"in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12}):null;
$$(".rv").forEach(el=>io?io.observe(el):el.classList.add("in"));
