(function(){
  // 13-pillar philosophy selector: the list is a real tablist (keyboard + screen reader),
  // the orbit nodes are pointer shortcuts that drive the same tabs.
  document.querySelectorAll('[data-nv-pillars]').forEach(function(root){
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
    var nodes = Array.prototype.slice.call(root.querySelectorAll('.nv-orbit-node'));
    var spokes = Array.prototype.slice.call(root.querySelectorAll('.nv-orbit-lines line'));
    var detail = root.querySelector('.nv-philo-detail');
    if(!tabs.length) return;

    function select(i, focus){
      tabs.forEach(function(t, j){
        var on = i === j;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if(panel) panel.hidden = !on;
      });
      nodes.forEach(function(n, j){ n.setAttribute('aria-current', i === j ? 'true' : 'false'); });
      spokes.forEach(function(l, j){ l.classList.toggle('is-on', i === j); });
      if(focus) tabs[i].focus();
    }

    tabs.forEach(function(t, i){
      t.addEventListener('click', function(){
        select(i);
        // single-column layout: the detail card sits above the list, so bring it into view
        if(detail && window.matchMedia('(max-width:1024px)').matches){
          var r = detail.getBoundingClientRect();
          if(r.top < 70 || r.bottom > window.innerHeight){
            var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({top: window.pageYOffset + r.top - 90, behavior: reduce ? 'auto' : 'smooth'});
          }
        }
      });
      t.addEventListener('keydown', function(e){
        var k = e.key, next = null;
        if(k === 'ArrowDown' || k === 'ArrowRight') next = (i + 1) % tabs.length;
        else if(k === 'ArrowUp' || k === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
        else if(k === 'Home') next = 0;
        else if(k === 'End') next = tabs.length - 1;
        if(next !== null){ e.preventDefault(); select(next, true); }
      });
    });
    nodes.forEach(function(n, i){
      n.addEventListener('click', function(){ select(i); });
    });
    select(0);
  });

  // in-page pill nav (new nVision pages): highlight the section in view
  var pills = document.querySelectorAll('[data-nv-spy] a[href^="#"]');
  if(pills.length && 'IntersectionObserver' in window){
    var map = {};
    pills.forEach(function(a){
      var el = document.getElementById(a.getAttribute('href').slice(1));
      if(el) map[el.id] = a;
    });
    var spy = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(!en.isIntersecting) return;
        pills.forEach(function(a){ a.classList.remove('active'); });
        var a = map[en.target.id];
        if(a){
          a.classList.add('active');
          var bar = a.parentNode;
          if(bar && bar.scrollTo) bar.scrollTo({left: a.offsetLeft - 24, behavior:'smooth'});
        }
      });
    }, {rootMargin:'-40% 0px -55% 0px'});
    Object.keys(map).forEach(function(id){ spy.observe(document.getElementById(id)); });
  }
})();

// Heading colour system: main phrase in the blue→teal→green gradient, secondary phrase
// (child <span>/<em>, e.g. a second line) in navy. Headings already rendered in a light
// colour sit on dark backgrounds, so they get the brighter gradient + ivory instead.
(function(){
  function lum(c){
    var m = c.match(/\d+(\.\d+)?/g); if(!m) return 0;
    var v = m.slice(0,3).map(function(x){ x = x/255; return x <= .03928 ? x/12.92 : Math.pow((x+.055)/1.055, 2.4); });
    return .2126*v[0] + .7152*v[1] + .0722*v[2];
  }
  function paint(h){
    if(h.dataset.hd) return;
    h.dataset.hd = '1';
    if(!h.textContent.trim()) return;
    if(lum(getComputedStyle(h).color) > .45) h.classList.add('hd-light');
    var afterBreak = false;
    Array.prototype.slice.call(h.childNodes).forEach(function(n){
      if(n.nodeType === 1 && n.tagName === 'BR'){ afterBreak = true; return; }
      if(n.nodeType === 3){
        if(!n.textContent.trim()) return;
        // text on the line after a <br> is the secondary phrase, like the reference two-line heading
        var s = document.createElement('span'); s.className = afterBreak ? 'hd-s' : 'hd-g'; s.textContent = n.textContent;
        h.replaceChild(s, n);
      } else if(n.nodeType === 1 && !n.classList.contains('visually-hidden') && n.tagName !== 'BR' && !n.querySelector('img,svg')){
        // a heading whose first element is the main phrase (e.g. hero "The Old Charm of Care.")
        if(n.tagName === 'SPAN' && h.querySelector('em') && n === h.querySelector('span:not(.visually-hidden)')) n.classList.add('hd-g');
        else n.classList.add('hd-s');
      }
    });
  }
  function run(){ document.querySelectorAll('main h1, main h2, section h1, section h2').forEach(paint); }
  run();
  // sections rendered later by script.js (videos, stories) — catch them too
  if('MutationObserver' in window){
    new MutationObserver(function(){ run(); }).observe(document.body, {childList:true, subtree:true});
  }
})();
