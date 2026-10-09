import './style.css'

const EMAIL = 'info.utkarshhgoel@gmail.com'

// Contact form: opens the visitor's email app with the message pre-filled.
document.getElementById('cf').addEventListener('submit', (e) => {
  e.preventDefault()
  const f = e.target
  const topics = [...f.querySelectorAll('.chips input:checked')].map((i) => i.value).join(', ')
  const body = `Name: ${f.name.value}\nEmail: ${f.email.value}${topics ? `\nTopics: ${topics}` : ''}\n\n${f.msg.value}`
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(f.subject.value)}&body=${encodeURIComponent(body)}`
})

var hero=document.getElementById('home');
if(hero&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();hero.style.setProperty('--mx',(e.clientX-r.left)+'px');hero.style.setProperty('--my',(e.clientY-r.top)+'px')});
}

(function(){
  var box=document.getElementById('show'); if(!box) return;
  var sl=[].slice.call(box.querySelectorAll('.sl')), dots=box.querySelector('.dots'), i=0, t=null, hold=false;
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  sl.forEach(function(_,k){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Slide '+(k+1)+' of '+sl.length);b.addEventListener('click',function(){go(k);restart()});dots.appendChild(b)});
  var bs=dots.children;
  function go(n){i=(n+sl.length)%sl.length;sl.forEach(function(x,k){x.classList.toggle('on',k===i)});[].forEach.call(bs,function(b,k){if(k===i)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current')})}
  function tick(){if(!hold&&!document.hidden)go(i+1)}
  function restart(){clearInterval(t);if(!reduce)t=setInterval(tick,4200)}
  box.addEventListener('mouseenter',function(){hold=true});box.addEventListener('mouseleave',function(){hold=false});
  box.addEventListener('focusin',function(){hold=true});box.addEventListener('focusout',function(){hold=false});
  go(0);restart();
})();

(function(){
  var dlg=document.getElementById('certbox'); if(!dlg||!dlg.showModal) return;
  var im=dlg.querySelector('img'), cap=dlg.querySelector('p');
  [].forEach.call(document.querySelectorAll('.cert'),function(c){c.addEventListener('click',function(){var i=c.querySelector('img');im.src=i.src;im.alt=i.alt;cap.textContent=c.dataset.title;dlg.showModal()})});
  dlg.querySelector('.x').addEventListener('click',function(){dlg.close()});
  dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close()});
})();
