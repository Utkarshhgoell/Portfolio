import './style.css'

// Contact form: sends through Web3Forms (https://web3forms.com).
// The access key is public by design. It only lets the form deliver to the inbox it was created for.
const WEB3FORMS_KEY = '6a63b83d-e225-491d-9f10-66c21eeb1706'
const TO_EMAIL = 'info.utkarshhgoel@gmail.com'

const form = document.getElementById('cf')
const statusEl = document.getElementById('cstatus')
const sendBtn = document.getElementById('csend')
const done = document.getElementById('cdone')
const gmail = document.getElementById('gmail')

// "Or open in Gmail" opens a pre-filled Gmail compose tab with whatever is typed so far.
function updateGmailLink() {
  const q = new URLSearchParams({
    view: 'cm', fs: '1', to: TO_EMAIL,
    su: form.elements.subject.value,
    body: `${form.elements.message.value}\n\n${form.elements.name.value}`.trim(),
  })
  gmail.href = `https://mail.google.com/mail/?${q}`
}
gmail.addEventListener('focus', updateGmailLink)
gmail.addEventListener('mouseenter', updateGmailLink)
gmail.addEventListener('touchstart', updateGmailLink, { passive: true })

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  statusEl.textContent = ''
  if (!form.checkValidity()) { form.reportValidity(); return }
  if (form.elements.botcheck.checked) return // spam trap

  sendBtn.disabled = true
  sendBtn.firstElementChild.textContent = 'Sending…'
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: form.elements.subject.value,
        from_name: form.elements.name.value,
        name: form.elements.name.value,
        email: form.elements.email.value,
        message: form.elements.message.value,
        botcheck: '',
      }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || !data.success) throw new Error(data.message || 'Request failed')
    form.hidden = true
    done.hidden = false
    done.focus()
    form.reset()
  } catch {
    statusEl.textContent = 'Your message could not be sent. Check your connection and try again, or use "Or open in Gmail".'
  } finally {
    sendBtn.disabled = false
    sendBtn.firstElementChild.textContent = 'Send Me'
  }
})

document.getElementById('again').addEventListener('click', () => {
  done.hidden = true
  form.hidden = false
  form.elements.name.focus()
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
