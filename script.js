(function(){
  // mouse click-and-drag scrolling for horizontal carousels (touch already scrolls natively)
  function enableDragScroll(el){
    var isDown = false, startX = 0, scrollStart = 0, moved = false;
    el.addEventListener('dragstart', function(e){ e.preventDefault(); });
    el.addEventListener('pointerdown', function(e){
      if(e.pointerType && e.pointerType !== 'mouse') return;
      isDown = true; moved = false;
      startX = e.pageX; scrollStart = el.scrollLeft;
    });
    el.addEventListener('pointermove', function(e){
      if(!isDown) return;
      var dx = e.pageX - startX;
      if(!moved && Math.abs(dx) > 4){ moved = true; el.classList.add('dragging'); }
      if(moved){ e.preventDefault(); el.scrollLeft = scrollStart - dx; }
    });
    function stopDrag(){
      if(!isDown) return;
      isDown = false;
      el.classList.remove('dragging');
    }
    el.addEventListener('pointerup', stopDrag);
    el.addEventListener('pointerleave', stopDrag);
    el.addEventListener('pointercancel', stopDrag);
    el.addEventListener('click', function(e){
      if(moved){ e.preventDefault(); e.stopPropagation(); moved = false; }
    }, true);
  }

  // appointment date field: no past dates
  var fDate = document.getElementById('f-date');
  if(fDate){ fDate.min = new Date().toISOString().split('T')[0]; }

  // carry the homepage quick-book widget's selections through to the full appointment form
  var apptWidgetBtn = document.getElementById('apptWidgetBtn');
  if(apptWidgetBtn){
    apptWidgetBtn.addEventListener('click', function(e){
      var fSpec = document.getElementById('f-spec');
      var fDoc = document.getElementById('f-doc');
      var fCentre = document.getElementById('f-centre');
      var params = new URLSearchParams();
      if(fSpec && fSpec.selectedIndex > 0) params.set('speciality', fSpec.value);
      if(fDoc && fDoc.selectedIndex > 0) params.set('doctor', fDoc.value);
      if(fCentre && fCentre.selectedIndex > 0) params.set('centre', fCentre.value);
      if(fDate && fDate.value) params.set('date', fDate.value);
      var qs = params.toString();
      if(qs){
        e.preventDefault();
        window.location.href = 'appointment.html?' + qs;
      }
    });
  }

  // header shadow on scroll
  var header = document.getElementById('siteHeader');
  window.addEventListener('scroll', function(){
    header.style.boxShadow = window.scrollY > 8 ? '0 4px 20px rgba(11,47,78,.08)' : 'none';
  }, {passive:true});

  // desktop dropdowns
  document.querySelectorAll('.nav-item').forEach(function(item){
    var btn = item.querySelector('[data-dd]');
    if(!btn) return;
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.nav-item.open').forEach(function(i){ i.classList.remove('open'); });
      if(!wasOpen) item.classList.add('open');
    });
  });
  document.addEventListener('click', function(){
    document.querySelectorAll('.nav-item.open').forEach(function(i){ i.classList.remove('open'); });
  });

  // mobile / tablet menu
  var mm = document.getElementById('mobileMenu');
  document.getElementById('openMenu').addEventListener('click', function(){ mm.classList.add('open'); document.body.style.overflow='hidden'; });
  document.getElementById('closeMenu').addEventListener('click', function(){ mm.classList.remove('open'); document.body.style.overflow=''; });
  mm.querySelectorAll('.mm-list a, .mm-cta a, .mm-foot a').forEach(function(a){
    a.addEventListener('click', function(){ mm.classList.remove('open'); document.body.style.overflow=''; });
  });
  window.addEventListener('pageshow', function(){ mm.classList.remove('open'); document.body.style.overflow=''; });

  // mobile menu accordion groups (Centres / Specialities)
  mm.querySelectorAll('.mm-toggle').forEach(function(btn){
    btn.addEventListener('click', function(){
      var group = btn.closest('.mm-group');
      var sub = group.querySelector('.mm-submenu');
      var wasOpen = group.classList.contains('open');
      mm.querySelectorAll('.mm-group.open').forEach(function(g){
        g.classList.remove('open');
        g.querySelector('.mm-submenu').style.maxHeight = null;
      });
      if(!wasOpen){
        group.classList.add('open');
        sub.style.maxHeight = sub.scrollHeight + 'px';
      }
    });
  });

  // hero slider (only present on pages with a hero section)
  var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
  var dotsWrap = document.getElementById('heroDots');
  var heroStage = document.getElementById('heroStage');
  if(slides.length && dotsWrap && heroStage){
  var current = 0, timer;
  slides.forEach(function(_, i){
    var d = document.createElement('button');
    d.className = 'hero-dot' + (i===0?' active':'');
    d.setAttribute('aria-label','Go to slide '+(i+1));
    d.addEventListener('click', function(){ go(i); reset(); });
    dotsWrap.appendChild(d);
  });
  var dots = Array.prototype.slice.call(dotsWrap.children);
  var heroPrevEl = document.getElementById('heroPrev');
  var heroNextEl = document.getElementById('heroNext');

  function positionHeroArrows(){
    var visual = slides[current].querySelector('.hero-visual');
    if(!visual || !heroStage) return;
    var stageTop = heroStage.getBoundingClientRect().top;
    var visualRect = visual.getBoundingClientRect();
    var centerPx = (visualRect.top - stageTop) + (visualRect.height / 2);
    heroPrevEl.style.top = centerPx + 'px';
    heroNextEl.style.top = centerPx + 'px';
  }

  function go(i){
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (i+slides.length)%slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    positionHeroArrows();
  }
  function reset(){
    clearInterval(timer);
    if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      timer = setInterval(function(){ go(current+1); }, 6500);
    }
  }
  heroPrevEl.addEventListener('click', function(){ go(current-1); reset(); });
  heroNextEl.addEventListener('click', function(){ go(current+1); reset(); });
  reset();
  positionHeroArrows();
  window.addEventListener('resize', positionHeroArrows);
  window.addEventListener('load', positionHeroArrows);
  setTimeout(positionHeroArrows, 300);
  }

  // footer back-to-top
  var footerToTop = document.getElementById('footerToTop');
  if(footerToTop){
    footerToTop.addEventListener('click', function(e){
      e.preventDefault();
      window.scrollTo({top:0, behavior:'smooth'});
    });
  }

  // doctors carousel (only present on pages with the doc-track)
  var docTrack = document.getElementById('docTrack');
  if(docTrack){
    var docCards = Array.prototype.slice.call(docTrack.children);
    var docDotsWrap = document.getElementById('docDots');
    var docPrevBtn = document.getElementById('docPrev');
    var docNextBtn = document.getElementById('docNext');

    docCards.forEach(function(_, i){
      var d = document.createElement('button');
      d.className = 'doc-dot' + (i===0?' active':'');
      d.setAttribute('aria-label','Go to doctor '+(i+1));
      d.addEventListener('click', function(){
        docTrack.scrollTo({left: docCards[i].offsetLeft - docTrack.offsetLeft, behavior:'smooth'});
      });
      docDotsWrap.appendChild(d);
    });
    var docDots = Array.prototype.slice.call(docDotsWrap.children);

    function updateDocDots(){
      var closest = 0, best = Infinity;
      docCards.forEach(function(c, i){
        var diff = Math.abs((c.offsetLeft - docTrack.offsetLeft) - docTrack.scrollLeft);
        if(diff < best){ best = diff; closest = i; }
      });
      docDots.forEach(function(d,i){ d.classList.toggle('active', i===closest); });
    }
    docTrack.addEventListener('scroll', function(){ window.requestAnimationFrame(updateDocDots); });

    var docStep = function(){ return docCards[0].getBoundingClientRect().width + 22; };
    docPrevBtn.addEventListener('click', function(){ docTrack.scrollBy({left: -docStep(), behavior:'smooth'}); });
    docNextBtn.addEventListener('click', function(){ docTrack.scrollBy({left: docStep(), behavior:'smooth'}); });
    enableDragScroll(docTrack);
  }

  // patient stories homepage preview (static row, no slider — only present where #psPreviewGrid + PATIENT_STORIES exist)
  var psPreviewGrid = document.getElementById('psPreviewGrid');
  if(psPreviewGrid && window.PATIENT_STORIES && window.PATIENT_STORIES.length){
    psPreviewGrid.innerHTML = window.PATIENT_STORIES.slice(0, 3).map(function(s){
      return '<div class="ps-card">'+
        '<div class="ps-photo photo photo--light"><img src="'+s.image+'" alt="'+s.name+'" loading="lazy"></div>'+
        '<div class="ps-body">'+
          '<div class="ps-cond-row"><span class="ps-condition">'+s.condition+'</span><span class="ps-centre">'+s.centre+' centre</span></div>'+
          '<p class="ps-text">&ldquo;'+s.quote+'&rdquo;</p>'+
          '<p class="ps-name">'+s.name+'</p>'+
        '</div>'+
      '</div>';
    }).join('');
    enableDragScroll(psPreviewGrid);
  }

  // patient stories carousel (swipeable slider — only present where #psTrack + PATIENT_STORIES exist)
  var psTrack = document.getElementById('psTrack');
  if(psTrack && window.PATIENT_STORIES && window.PATIENT_STORIES.length){
    psTrack.innerHTML = window.PATIENT_STORIES.slice(0, 3).map(function(s){
      return '<div class="ps-card">'+
        '<div class="ps-photo photo photo--light"><img src="'+s.image+'" alt="'+s.name+'" loading="lazy"></div>'+
        '<div class="ps-body">'+
          '<div class="ps-cond-row"><span class="ps-condition">'+s.condition+'</span><span class="ps-centre">'+s.centre+' centre</span></div>'+
          '<p class="ps-text">&ldquo;'+s.quote+'&rdquo;</p>'+
          '<p class="ps-name">'+s.name+'</p>'+
        '</div>'+
      '</div>';
    }).join('');

    var psCards = Array.prototype.slice.call(psTrack.children);
    var psDotsWrap = document.getElementById('psDots');
    var psPrevBtn = document.getElementById('psPrev');
    var psNextBtn = document.getElementById('psNext');

    psCards.forEach(function(_, i){
      var d = document.createElement('button');
      d.className = 'doc-dot' + (i===0?' active':'');
      d.setAttribute('aria-label','Go to story '+(i+1));
      d.addEventListener('click', function(){
        psTrack.scrollTo({left: psCards[i].offsetLeft - psTrack.offsetLeft, behavior:'smooth'});
      });
      psDotsWrap.appendChild(d);
    });
    var psDots = Array.prototype.slice.call(psDotsWrap.children);

    function updatePsDots(){
      var closest = 0, best = Infinity;
      psCards.forEach(function(c, i){
        var diff = Math.abs((c.offsetLeft - psTrack.offsetLeft) - psTrack.scrollLeft);
        if(diff < best){ best = diff; closest = i; }
      });
      psDots.forEach(function(d,i){ d.classList.toggle('active', i===closest); });
    }
    psTrack.addEventListener('scroll', function(){ window.requestAnimationFrame(updatePsDots); });

    var psStep = function(){ return psCards[0].getBoundingClientRect().width + 22; };
    psPrevBtn.addEventListener('click', function(){ psTrack.scrollBy({left: -psStep(), behavior:'smooth'}); });
    psNextBtn.addEventListener('click', function(){ psTrack.scrollBy({left: psStep(), behavior:'smooth'}); });
    enableDragScroll(psTrack);
  }

  // home video sections (3 categorised sliders, only present where #videoSectionsRoot + VIDEO_SECTIONS exist)
  var videoRoot = document.getElementById('videoSectionsRoot');
  if(videoRoot && window.VIDEO_SECTIONS && window.VIDEO_SECTIONS.length){
    var vidThemes = ['page-theme-blue', 'page-theme-warm', 'page-theme-lavender'];
    var playIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
    var arrowPrev = '<svg viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="2.4" width="15" height="15"><path d="m15 18-6-6 6-6"/></svg>';
    var arrowNext = '<svg viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="2.4" width="15" height="15"><path d="m9 18 6-6-6-6"/></svg>';

    function videoCard(v){
      return '<div class="vid-card">'+
        '<div class="vid-frame">'+
          '<img src="'+v.poster+'" alt="'+v.title+'" loading="lazy">'+
          '<button class="vid-play-btn" type="button" data-vid-src="'+(v.src||'')+'" data-vid-title="'+v.title+'" aria-label="Play: '+v.title+'">'+playIcon+'</button>'+
          (v.src ? '' : '<span class="vid-soon-tag">Video coming soon</span>')+
        '</div>'+
        '<div class="vid-title">'+v.title+'</div>'+
      '</div>';
    }

    videoRoot.innerHTML = window.VIDEO_SECTIONS.map(function(sec, i){
      return '<section class="section '+vidThemes[i%vidThemes.length]+'" id="'+sec.id+'">'+
        '<div class="wrap">'+
          '<div class="section-head reveal"><p class="eyebrow">'+sec.eyebrow+'</p><h2>'+sec.heading+'</h2><p>'+sec.text+'</p></div>'+
          '<div class="doc-carousel reveal">'+
            '<button class="doc-nav-arrow doc-nav-prev" type="button" data-vid-prev aria-label="Previous video">'+arrowPrev+'</button>'+
            '<button class="doc-nav-arrow doc-nav-next" type="button" data-vid-next aria-label="Next video">'+arrowNext+'</button>'+
            '<div class="vid-track" data-vid-track>'+sec.videos.map(videoCard).join('')+'</div>'+
          '</div>'+
        '</div>'+
      '</section>';
    }).join('');

    videoRoot.querySelectorAll('.doc-carousel').forEach(function(carousel){
      var track = carousel.querySelector('[data-vid-track]');
      var prevBtn = carousel.querySelector('[data-vid-prev]');
      var nextBtn = carousel.querySelector('[data-vid-next]');
      var step = function(){ return track.firstElementChild.getBoundingClientRect().width + 22; };
      prevBtn.addEventListener('click', function(){ track.scrollBy({left: -step(), behavior:'smooth'}); });
      nextBtn.addEventListener('click', function(){ track.scrollBy({left: step(), behavior:'smooth'}); });
      enableDragScroll(track);
    });

    videoRoot.querySelectorAll('.vid-play-btn').forEach(function(btn){
      btn.addEventListener('click', function(){
        var src = btn.getAttribute('data-vid-src');
        var frame = btn.closest('.vid-frame');
        if(!src){
          var tag = frame.querySelector('.vid-soon-tag');
          if(tag){
            tag.textContent = 'Video coming soon';
            tag.style.background = 'var(--coral)';
            setTimeout(function(){ tag.style.background = ''; }, 900);
          }
          return;
        }
        var isEmbed = /youtube|vimeo/.test(src);
        frame.innerHTML = isEmbed
          ? '<iframe src="'+src+'" title="'+btn.getAttribute('data-vid-title')+'" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>'
          : '<video src="'+src+'" controls autoplay></video>';
      });
    });
  }

  // FAQ accordion (one open at a time per .faq-accordion)
  document.querySelectorAll('.faq-accordion').forEach(function(group){
    var items = group.querySelectorAll('.faq-item');
    items.forEach(function(item){
      var q = item.querySelector('.faq-q');
      var a = item.querySelector('.faq-a');
      if(!q || !a) return;
      q.addEventListener('click', function(){
        var wasOpen = item.classList.contains('open');
        items.forEach(function(i){ i.classList.remove('open'); i.querySelector('.faq-a').style.maxHeight = null; });
        if(!wasOpen){ item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
      });
    });
  });

  // remaining static horizontal carousels (tech strip, news cards, etc.)
  document.querySelectorAll('.tech-track, .news-grid').forEach(enableDragScroll);

  // reveal on scroll
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.12});
  document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach(function(el){ io.observe(el); });

  // stat counters
  var counted = false;
  var cio = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting && !counted){
        counted = true;
        document.querySelectorAll('[data-count]').forEach(function(el){
          var target = parseInt(el.getAttribute('data-count'),10);
          var suffix = el.getAttribute('data-suffix')||'';
          var start = performance.now();
          function step(now){
            var p = Math.min(1,(now-start)/1400);
            el.textContent = Math.round(target*(1-Math.pow(1-p,3))).toLocaleString('en-IN') + suffix;
            if(p<1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        });
      }
    });
  }, {threshold:.4});
  var statsEl = document.querySelector('.trust');
  if(statsEl) cio.observe(statsEl);

  // mobile bottom nav — active state
  var barItems = document.querySelectorAll('.mb-item[data-bar]');
  if(barItems.length){
    var barSections = {
      eyecare: document.getElementById('specialities'),
      doctors: document.getElementById('doctors'),
      centres: document.getElementById('centres')
    };
    function setActiveBar(key){
      barItems.forEach(function(el){
        el.classList.toggle('active', el.getAttribute('data-bar') === key);
      });
    }
    var barIo = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(!entry.isIntersecting) return;
        Object.keys(barSections).forEach(function(key){
          if(barSections[key] === entry.target) setActiveBar(key);
        });
      });
    }, {rootMargin:'-45% 0px -50% 0px'});
    Object.keys(barSections).forEach(function(key){
      if(barSections[key]) barIo.observe(barSections[key]);
    });
    window.addEventListener('scroll', function(){
      if(window.scrollY < 200) setActiveBar('home');
    }, {passive:true});
  }

  // chatbot widget — AI-style assistant with quick replies + free-text Q&A
  var chatBtn = document.getElementById('chatToggle');
  var chatPanel = document.getElementById('chatPanel');
  var chatClose = document.getElementById('chatClose');
  var chatBody = document.getElementById('chatBody');
  var chatQuick = document.getElementById('chatQuick');
  var chatForm = document.getElementById('chatForm');
  var chatInput = document.getElementById('chatInput');

  function openChat(){
    chatPanel.classList.add('open');
    chatBtn.classList.add('open');
    chatPanel.setAttribute('aria-hidden', 'false');
    chatBtn.setAttribute('aria-expanded', 'true');
  }
  function closeChat(){
    chatPanel.classList.remove('open');
    chatBtn.classList.remove('open');
    chatPanel.setAttribute('aria-hidden', 'true');
    chatBtn.setAttribute('aria-expanded', 'false');
  }

  if(chatBtn && chatBody){
    chatBtn.addEventListener('click', function(){
      chatPanel.classList.contains('open') ? closeChat() : openChat();
    });
    chatClose.addEventListener('click', closeChat);

    function addMsg(html, who){
      var div = document.createElement('div');
      div.className = 'chat-msg ' + who;
      div.innerHTML = html;
      chatBody.appendChild(div);
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    // navigate to an in-page section if present on this page, otherwise a fallback page/URL
    function goToSection(id, fallbackUrl){
      closeChat();
      var el = document.getElementById(id);
      if(el){ el.scrollIntoView({behavior:'smooth', block:'start'}); }
      else{ window.location.href = fallbackUrl; }
    }

    var actions = {
      appointment: function(){ closeChat(); window.location.href = 'appointment.html'; },
      doctor: function(){ goToSection('doctors', 'doctors.html'); },
      centres: function(){ goToSection('centres', 'centers.html'); },
      support: function(){ addMsg('Call us on <a href="tel:08066120000">080 6612 0000</a> and our patient care team will help right away — or email <a href="mailto:care@narayananetralaya.com">care@narayananetralaya.com</a>.', 'bot'); }
    };

    chatQuick.querySelectorAll('button').forEach(function(btn){
      btn.addEventListener('click', function(){
        var fn = actions[btn.getAttribute('data-reply')];
        if(fn) fn();
      });
    });

    // simple keyword-matched assistant replies for free-text questions
    var knowledge = [
      { k:['appointment','book','schedule'], r:'You can book an appointment online in a few seconds, or call us directly.', link:{text:'Book Appointment', href:'appointment.html'} },
      { k:['doctor','specialist','ophthalmologist','surgeon'], r:'We have 100+ eye specialists across cataract, retina, cornea, glaucoma and paediatric care.', link:{text:'View Doctors', href:'doctors.html'} },
      { k:['centre','center','location','address','branch','indiranagar','whitefield','bommasandra','bannerghatta','electronic city'], r:'We have centres at Indiranagar, Whitefield, Electronic City, Bannerghatta Road and Bommasandra.', link:{text:'Find a Centre', href:'centers.html'} },
      { k:['cataract'], r:'Cataract is clouding of the eye\'s natural lens — we offer phacoemulsification, MICS and bladeless femtosecond laser (FLACS) surgery with a range of IOL options.', link:{text:'About Cataract', href:'cataract.html'} },
      { k:['retina','glaucoma','cornea','lasik','refractive','speciality','specialities','squint','vision'], r:'Explore our full range of eye care specialities and treatments.', link:{text:'View Specialities', href:'specialities.html'} },
      { k:['academic','fellowship','training','research','course','education'], r:'Our Academics programme trains ophthalmologists through fellowships and hands-on research.', link:{text:'View Academics', href:'academics.html'} },
      { k:['lab','laboratory','diagnostic','test','scan','oct','imaging'], r:'Our NABH-accredited laboratory offers advanced diagnostics like OCT, electrophysiology and ocular imaging.', link:{text:'View Laboratory', href:'laboratory.html'} },
      { k:['hour','time','open','close','timing'], r:'Most of our centres are open Monday–Saturday, 9am–7pm.' },
      { k:['emergency','urgent','pain','injury'], r:'For an eye emergency, please call <a href="tel:08066220000">080 6622 0000</a> right away.' },
      { k:['contact','phone','email','call','reach'], r:'Reach us at <a href="tel:08066120000">080 6612 0000</a> or care@narayananetralaya.com.', link:{text:'Contact Us', href:'contact.html'} },
      { k:['cost','price','fee','insurance'], r:'Costs vary by treatment and centre — our coordinators can share exact pricing and insurance support on call.', link:{text:'Contact Support', href:'contact.html'} }
    ];
    function findReply(question){
      var q = question.toLowerCase();
      for(var i=0;i<knowledge.length;i++){
        for(var j=0;j<knowledge[i].k.length;j++){
          if(q.indexOf(knowledge[i].k[j]) > -1){
            var html = knowledge[i].r;
            if(knowledge[i].link) html += ' <a class="chat-msg-link" href="'+knowledge[i].link.href+'">'+knowledge[i].link.text+' →</a>';
            return html;
          }
        }
      }
      return 'I\'m still learning that one — our patient care team can help further on <a href="tel:08066120000">080 6612 0000</a>, or try one of the quick options below.';
    }

    if(chatForm && chatInput){
      chatForm.addEventListener('submit', function(e){
        e.preventDefault();
        var q = chatInput.value.trim();
        if(!q) return;
        addMsg(q.replace(/</g,'&lt;'), 'user');
        chatInput.value = '';
        var typing = document.createElement('div');
        typing.className = 'chat-typing';
        typing.innerHTML = '<span></span><span></span><span></span>';
        chatBody.appendChild(typing);
        chatBody.scrollTop = chatBody.scrollHeight;
        setTimeout(function(){
          typing.remove();
          addMsg(findReply(q), 'bot');
        }, 500);
      });
    }
  }
})();
