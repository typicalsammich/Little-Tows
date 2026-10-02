const b=document.querySelector('.hamb'),l=document.querySelector('.links');if(b)b.onclick=()=>l.classList.toggle('open');const c=document.querySelector('.mobile-call');addEventListener('scroll',()=>c&&c.classList.toggle('show',scrollY>260));
if(matchMedia('(pointer:fine)').matches){
 const cur=document.createElement('div');cur.className='site-cursor';document.body.appendChild(cur);
 addEventListener('mousemove',e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px'});
 document.querySelectorAll('a,button').forEach(el=>{
   el.addEventListener('mouseenter',()=>cur.classList.add('hot'));
   el.addEventListener('mouseleave',()=>cur.classList.remove('hot'));
 });
}
