// Minimal progressive enhancement: mobile navigation + current year.
(() => {
  const button = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-nav');
  if (button && menu) {
    const close = () => {
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open menu');
      menu.hidden = true;
    };
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.hidden = !open;
    });
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') close();
    });
  }
  document.querySelectorAll('.current-year').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();

// Scroll-snap slide viewer, with accessible buttons and swipe support.
(() => {
 const viewport=document.querySelector('.carousel-viewport');
 if(!viewport)return;
 const slides=[...viewport.querySelectorAll('.carousel-slide')];
 const dots=[...document.querySelectorAll('.carousel-dots button')];
 const counter=document.querySelector('.carousel-counter');
 const prev=document.querySelector('.carousel-prev');
 const next=document.querySelector('.carousel-next');
 const step=()=>slides.length>1?Math.max(1,slides[1].offsetLeft-slides[0].offsetLeft):Math.max(1,viewport.clientWidth);
 const activeIndex=()=>Math.max(0,Math.min(slides.length-1,Math.round(viewport.scrollLeft/step())));
 const update=()=>{const i=activeIndex();if(counter)counter.textContent=String(i+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');dots.forEach((b,j)=>{b.setAttribute('aria-current',String(i===j));});};
 const goto=(i)=>{const n=(i+slides.length)%slides.length;viewport.scrollTo({left:n*step(),behavior:window.matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});};
 prev?.addEventListener('click',()=>goto(activeIndex()-1));
 next?.addEventListener('click',()=>goto(activeIndex()+1));
 dots.forEach((b,i)=>b.addEventListener('click',()=>goto(i)));
 viewport.addEventListener('scroll',update,{passive:true});
 viewport.addEventListener('keydown',(e)=>{if(e.key==='ArrowRight'){e.preventDefault();goto(activeIndex()+1)}else if(e.key==='ArrowLeft'){e.preventDefault();goto(activeIndex()-1)}});
 update();
})();
