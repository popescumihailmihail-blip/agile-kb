/* Agile Codex — engine (vanilla, no deps) */
(function(){
  "use strict";
  var LANGS=["ru","ro","en"];
  var lang = localStorage.getItem("acx-lang") || "ro";
  if(LANGS.indexOf(lang)<0) lang="ro";

  // pick localized value: obj {ru,ro,en} or plain string
  function L(v){
    if(v==null) return "";
    if(typeof v==="string") return v;
    return v[lang]||v.ro||v.en||v.ru||"";
  }
  function t(key){ var d=(window.UI&&window.UI[lang])||{}; return d[key]|| (window.UI&&window.UI.ro&&window.UI.ro[key]) || key; }
  function el(html){ var d=document.createElement("div"); d.innerHTML=html.trim(); return d.firstChild; }
  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c];}); }

  /* ---------- i18n static text ---------- */
  function applyI18n(){
    document.documentElement.lang=lang;
    document.querySelectorAll("[data-i18n]").forEach(function(n){ n.textContent=t(n.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-ph]").forEach(function(n){ n.setAttribute("placeholder",t(n.getAttribute("data-i18n-ph"))); });
    document.querySelectorAll("[data-nav]").forEach(function(n){ n.textContent=t("nav."+n.getAttribute("data-nav")); });
    document.querySelectorAll("#lang button").forEach(function(b){ b.classList.toggle("on", b.getAttribute("data-lang")===lang); });
  }

  /* ---------- Library ---------- */
  var activeCat="all", currentBooks=[];
  function renderFilters(){
    var box=document.getElementById("lib-filters"); if(!box) return;
    var cats=(window.CATEGORIES||[]);
    var html='<button data-cat="all" class="'+(activeCat==="all"?"on":"")+'">'+esc(t("filter.all"))+'</button>';
    cats.forEach(function(c){ html+='<button data-cat="'+c.key+'" class="'+(activeCat===c.key?"on":"")+'">'+esc(L(c.label))+'</button>'; });
    box.innerHTML=html;
    box.querySelectorAll("button").forEach(function(b){ b.onclick=function(){ activeCat=b.getAttribute("data-cat"); renderFilters(); renderBooks(); }; });
  }
  function catLabel(key){ var c=(window.CATEGORIES||[]).filter(function(x){return x.key===key;})[0]; return c?L(c.label):key; }
  function renderBooks(){
    var grid=document.getElementById("lib-grid"); if(!grid) return;
    var books=(window.BOOKS||[]).filter(function(b){ return activeCat==="all"||b.category===activeCat; });
    currentBooks=books;
    grid.innerHTML="";
    books.forEach(function(b,i){
      var c=el('<article class="card reveal" style="--accent:'+(b.accent||"var(--grad)")+';transition-delay:'+(i%6*50)+'ms">'
        +'<span class="spine"></span>'
        +'<div class="cat">'+esc(catLabel(b.category))+'</div>'
        +'<h3>'+esc(L(b.title))+'</h3>'
        +'<div class="auth">'+esc(b.author)+'</div>'
        +'<p class="thesis">'+esc(L(b.thesis))+'</p>'
        +'<div class="foot"><span class="yr">'+esc(b.year||"")+'</span>'
        +'<span class="arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div>'
        +'</article>');
      c.onclick=function(){ openBook(b); };
      grid.appendChild(c);
    });
    observeReveal();
  }

  /* ---------- Book modal ---------- */
  function listBlock(title,arr){
    if(!arr||!arr.length) return "";
    var li=arr.map(function(x){return "<li>"+esc(L(x))+"</li>";}).join("");
    return '<div class="block"><h4>'+esc(title)+'</h4><ul>'+li+'</ul></div>';
  }
  function openBook(b){
    var body=document.getElementById("modal-body");
    var src = b.sourceUrl
      ? '<a class="src" href="'+esc(b.sourceUrl)+'" target="_blank" rel="noopener"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7M10 14L21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>'+esc(t("modal.source"))+'</a>'
      : '';
    var orig = b.titleOrig? '<div class="m-auth mono" style="color:var(--faint);margin-top:2px">'+esc(b.titleOrig)+(b.titleEn?' · '+esc(b.titleEn):'')+'</div>':'';
    body.innerHTML='<button class="x" data-close>✕</button>'
      +'<div class="cat" style="color:var(--c1);font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:10px">'+esc(catLabel(b.category))+' · '+esc(b.year||"")+'</div>'
      +'<h2>'+esc(L(b.title))+'</h2>'
      +'<div class="m-auth">'+esc(b.author)+'</div>'+orig
      +'<div class="block"><h4>'+esc(t("modal.thesis"))+'</h4><p class="thesis-lg">'+esc(L(b.thesis))+'</p></div>'
      +listBlock(t("modal.ideas"),b.ideas)
      +listBlock(t("modal.practices"),b.practices)
      +listBlock(t("modal.takeaways"),b.takeaways)
      +src;
    openModal();
  }
  function openModal(){ var m=document.getElementById("modal"); m.classList.add("open"); m.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden"; }
  function closeModal(){ var m=document.getElementById("modal"); m.classList.remove("open"); m.setAttribute("aria-hidden","true"); document.body.style.overflow=""; }

  /* ---------- Playbooks ---------- */
  function renderPlaybooks(){
    var grid=document.getElementById("pb-grid"); if(!grid) return;
    grid.innerHTML="";
    (window.PLAYBOOKS||[]).forEach(function(p,i){
      var tags=(p.tags||[]).map(function(x){return "<span>"+esc(L(x))+"</span>";}).join("");
      var c=el('<article class="pb reveal" style="transition-delay:'+(i%4*60)+'ms">'
        +'<div class="ic">'+(p.icon||"📘")+'</div>'
        +'<h3>'+esc(L(p.title))+'</h3>'
        +'<p>'+esc(L(p.summary))+'</p>'
        +'<div class="tags">'+tags+'</div></article>');
      c.onclick=function(){ openPlaybook(p); };
      grid.appendChild(c);
    });
    observeReveal();
  }
  function openPlaybook(p){
    var body=document.getElementById("modal-body");
    body.innerHTML='<button class="x" data-close>✕</button>'
      +'<div class="pb-ic" style="font-size:34px;margin-bottom:8px">'+(p.icon||"📘")+'</div>'
      +'<h2>'+esc(L(p.title))+'</h2>'
      +'<div class="block"><p class="thesis-lg">'+esc(L(p.summary))+'</p></div>'
      +listBlock(t("modal.whatsInside"),p.points);
    openModal();
  }

  /* ---------- Glossary ---------- */
  function renderGlossary(filter){
    var box=document.getElementById("gl-table"); if(!box) return;
    var q=(filter||"").trim().toLowerCase();
    var rows=(window.GLOSSARY||[]).filter(function(g){
      if(!q) return true;
      return (g.ru+" "+g.ro+" "+g.en).toLowerCase().indexOf(q)>=0;
    });
    var html='<div class="row head"><div>RU</div><div>RO</div><div>EN</div></div>';
    rows.slice(0,q?400:60).forEach(function(g){
      html+='<div class="row"><div class="ru">'+esc(g.ru)+'</div><div>'+esc(g.ro)+'</div><div>'+esc(g.en)+'</div></div>';
    });
    box.innerHTML=html;
    var cnt=document.getElementById("gl-count");
    if(cnt){ cnt.textContent=(t("gl.showing")||"")
      .replace("{n}",rows.length).replace("{total}",(window.GLOSSARY||[]).length); }
  }

  /* ---------- Debates ---------- */
  function renderDebates(){
    var box=document.getElementById("db-acc"); if(!box) return;
    box.innerHTML="";
    (window.DEBATES||[]).forEach(function(d){
      var pos=(d.positions||[]).map(function(p){return '<div class="pos"><b>'+esc(p.who)+':</b> '+esc(L(p.text))+'</div>';}).join("");
      var item=el('<div class="item"><div class="q">'+esc(L(d.q))+'<span class="plus">+</span></div>'
        +'<div class="a"><div class="in">'+pos
        +'<div class="verdict"><b>'+esc(t("db.ourTake"))+':</b> '+esc(L(d.verdict))+'</div></div></div></div>');
      var q=item.querySelector(".q"), a=item.querySelector(".a");
      q.onclick=function(){ var open=item.classList.toggle("open"); a.style.maxHeight=open?a.firstChild.scrollHeight+40+"px":"0"; };
      box.appendChild(item);
    });
  }

  /* ---------- Sources ---------- */
  function renderSources(){
    var grid=document.getElementById("src-grid"); if(!grid) return;
    grid.innerHTML="";
    var folder=(window.UI&&window.UI.driveFolder)||"#";
    (window.BOOKS||[]).slice().sort(function(a,b){return (a.year||0)-(b.year||0);}).forEach(function(b){
      var c=el('<article class="card reveal" style="--accent:'+(b.accent||"var(--grad)")+';min-height:auto">'
        +'<span class="spine"></span>'
        +'<h3 style="font-size:16px">'+esc(b.titleOrig||L(b.title))+'</h3>'
        +'<div class="auth">'+esc(b.author)+' · <span class="mono">'+esc(b.year||"")+'</span></div>'
        +'<a class="src" style="margin-top:10px" href="'+esc(b.sourceUrl||folder)+'" target="_blank" rel="noopener">'
        +'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7M10 14L21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>'
        +esc(t("src.open"))+'</a></article>');
      grid.appendChild(c);
    });
    observeReveal();
  }

  /* ---------- reveal on scroll ---------- */
  var io;
  function observeReveal(){
    if(!("IntersectionObserver" in window)){ document.querySelectorAll(".reveal").forEach(function(n){n.classList.add("in");}); return; }
    if(!io) io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} }); },{threshold:.12});
    document.querySelectorAll(".reveal:not(.in)").forEach(function(n){ io.observe(n); });
  }

  /* ---------- render all ---------- */
  function renderAll(){ applyI18n(); renderFilters(); renderBooks(); renderPlaybooks(); renderGlossary(document.getElementById("gl-search")?document.getElementById("gl-search").value:""); renderDebates(); renderSources(); }
  function setLang(l){ lang=l; localStorage.setItem("acx-lang",l); renderAll(); }

  /* ---------- events ---------- */
  document.addEventListener("click",function(e){
    if(e.target.closest("[data-close]")) closeModal();
    var lb=e.target.closest("#lang button"); if(lb) setLang(lb.getAttribute("data-lang"));
  });
  document.addEventListener("keydown",function(e){ if(e.key==="Escape") closeModal(); });
  document.addEventListener("input",function(e){ if(e.target.id==="gl-search") renderGlossary(e.target.value); });
  var burger=document.getElementById("burger");
  if(burger) burger.onclick=function(){ document.querySelector(".nav nav").style.display="flex"; };

  document.addEventListener("DOMContentLoaded",renderAll);
  if(document.readyState!=="loading") renderAll();
})();
