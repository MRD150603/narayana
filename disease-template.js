/* ============================================================
   DISEASE DETAIL PAGE — shared render engine
   One template drives every disease page (cataract.html is the
   hand-authored master reference for the markup/CSS this mirrors).
   Each thin disease-*.html file only sets <body data-disease="slug">
   and includes this file + disease-data.js — all section content
   comes from the matching entry in DISEASE_DATA.
   ============================================================ */
(function(){
  var ICONS = {
    eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
    glare:'<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>',
    laser:'<path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/>',
    moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    colorfade:'<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18 4.5 4.5 0 0 0 0-9 4.5 4.5 0 0 1 0-9Z"/>',
    chart:'<path d="M2 12h5l2-7 4 14 2-7h7"/>',
    doublevision:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2"/>',
    calendar:'<rect x="3" y="4" width="18" height="18" rx="3"/><path d="M8 2v4M16 2v4M3 10h18"/>',
    family:'<path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z"/>',
    drop:'<path d="M12 2s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/>',
    injury:'<path d="m9 12 2 2 4-4"/><rect x="3" y="4" width="18" height="17" rx="3"/>',
    pill:'<rect x="9" y="3" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/><path d="M11 9v6M13 9v6"/>',
    gauge:'<path d="M12 3a9 9 0 1 0 9 9"/><path d="M12 12l4-4"/><path d="M12 3v2M21 12h-2M3 12h2"/>',
    tunnel:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>',
    wave:'<path d="M3 12c2-4 4 4 6 0s4 4 6 0 4-4 6 0"/>',
    floaters:'<circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1.3" fill="currentColor" stroke="none"/><circle cx="14.5" cy="14" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="8.5" r=".8" fill="currentColor" stroke="none"/>',
    flash:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    book:'<path d="M2 5h9v16H4a2 2 0 0 1-2-2z"/><path d="M22 5h-9v16h7a2 2 0 0 0 2-2z"/>',
    surgery:'<circle cx="12" cy="12" r="9"/><path d="M9 12h6"/>',
    crosshair:'<path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="4"/>',
    lens:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
    glasses:'<circle cx="6" cy="12" r="3"/><circle cx="18" cy="12" r="3"/><path d="M9 12h6M3 12l-1-2M21 12l1-2"/>',
    cornea:'<ellipse cx="12" cy="12" rx="7" ry="9"/>',
    injection:'<path d="M21 3 3 21"/><path d="M16 3l5 5"/><path d="M3 21l3-3"/><path d="M8 13l3 3"/>'
  };

  function icon(key, sw){
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="'+(sw||2)+'">'+(ICONS[key]||ICONS.eye)+'</svg>';
  }

  var SYMPTOM_CLASSES = ['ic-blue','ic-coral','ic-violet','ic-amber','ic-aqua','ic-pink'];
  var TREAT_ACCENTS = ['var(--royal)','var(--teal)','var(--violet)','var(--coral)'];
  var RISK_SLOTS = [
    {accent:'var(--royal)', pos:'top:2%; left:4%;'},
    {accent:'var(--pink)', pos:'top:20%; right:2%;'},
    {accent:'var(--coral)', pos:'top:42%; left:0%;'},
    {accent:'var(--amber)', pos:'top:60%; right:6%;'},
    {accent:'var(--violet)', pos:'top:80%; left:8%;'},
    {accent:'var(--teal)', pos:'bottom:0%; right:0%;'}
  ];

  function setText(id, text){ var el = document.getElementById(id); if(el) el.textContent = text; }
  function setHtml(id, html){ var el = document.getElementById(id); if(el) el.innerHTML = html; }
  function setImg(id, src, alt){ var el = document.getElementById(id); if(el){ el.src = src; if(alt) el.alt = alt; } }

  function render(){
    var slug = document.body.getAttribute('data-disease');
    var d = window.DISEASE_DATA && window.DISEASE_DATA[slug];
    if(!d) return;

    document.title = d.meta.title;
    var metaDesc = document.querySelector('meta[name="description"]');
    if(metaDesc) metaDesc.setAttribute('content', d.meta.description);

    setText('crumbCurrent', d.name);
    setText('diEyebrow', d.category);
    setText('diHeading', d.name);
    setText('diLead', d.lead);
    setHtml('diFacts', d.facts.map(function(f){
      return '<span class="fact-chip">'+icon(f.icon,2.4)+f.text+'</span>';
    }).join(''));
    setImg('diPhoto', d.heroImage, d.heroAlt);
    setHtml('diBadgeIcon', icon(d.badge.icon, 2.2));
    setText('diBadgeBold', d.badge.bold);
    setText('diBadgeCaption', d.badge.caption);

    setText('ovHeading', d.overview.heading);
    setHtml('ovText', d.overview.paragraphs.map(function(p,i){
      return '<p style="font-size:15.5px;color:var(--slate);line-height:1.75;'+(i>0?'margin-top:14px;':'')+'">'+p+'</p>';
    }).join(''));
    setImg('ovImage', d.overview.image, d.overview.imageAlt);
    setText('ovStatBig', d.overview.statBig);
    setText('ovStatCaption', d.overview.statCaption);

    setText('symIntro', d.symptomsIntro);
    setHtml('symGrid', d.symptoms.map(function(s,i){
      return '<div class="icon-card '+SYMPTOM_CLASSES[i%6]+' reveal in">'+
        '<div class="ic-badge">'+icon(s.icon)+'</div>'+
        '<h4>'+s.title+'</h4><p>'+s.text+'</p>'+
      '</div>';
    }).join(''));

    setText('causeIntro', d.causesIntro);
    setHtml('riskCluster', d.riskFactors.map(function(r,i){
      var slot = RISK_SLOTS[i%6];
      return '<div class="risk-float floaty" style="--rf-accent:'+slot.accent+'; '+slot.pos+'">'+icon(r.icon)+r.label+'</div>';
    }).join(''));

    setText('treatIntro', d.treatmentIntro);
    setHtml('treatGrid', d.treatments.map(function(t,i){
      return '<div class="treat-card reveal in" style="--tr-accent:'+TREAT_ACCENTS[i%4]+';">'+
        '<div class="tc-ic">'+icon(t.icon)+'</div>'+
        '<h4>'+t.title+'</h4><p>'+t.text+'</p>'+
        '<span class="tc-more">Learn More <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>'+
      '</div>';
    }).join(''));

    setText('softCtaHeading', d.softCta.heading);
    setText('softCtaText', d.softCta.text);

    setText('techIntro', d.techIntro);
    setHtml('techTrack', d.technology.map(function(t){
      return '<div class="tech-card reveal in">'+
        '<div class="tech-photo"><img src="'+t.image+'" alt="'+t.alt+'" loading="lazy"></div>'+
        '<div class="tech-body"><span class="tech-cat">'+t.category+'</span><h4>'+t.title+'</h4><p>'+t.text+'</p></div>'+
      '</div>';
    }).join(''));

    setText('specHeading', 'Meet Your '+d.name+' Specialists');
    setText('specIntro', d.specialistsIntro);
    setHtml('specialistGrid', d.specialists.map(function(doc){
      return '<a class="doctor-card reveal in" href="doctors.html#'+d.slug+'">'+
        '<div class="dc-photo"><img src="'+doc.img+'" alt="'+doc.name+'" loading="lazy"></div>'+
        '<div class="dc-body"><h4>'+doc.name+'</h4><span class="dc-role">'+doc.role+'</span>'+
        '<span class="dc-link">View Profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div>'+
      '</a>';
    }).join(''));
    setText('docMoreLabel', 'View All '+d.name+' Specialists');

    setHtml('faqAccordion', d.faqs.map(function(f,i){
      return '<div class="faq-item'+(i===0?' open':'')+'">'+
        '<button class="faq-q">'+f.q+' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></button>'+
        '<div class="faq-a"'+(i===0?' style="max-height:260px;"':'')+'><div class="faq-a-inner">'+f.a+'</div></div>'+
      '</div>';
    }).join(''));

    setText('fcEyebrow', d.name + ' Care');
    setText('fcHeading', d.finalCta.heading);
    setText('fcText', d.finalCta.text);
    setImg('fcImage', d.finalCta.image, 'Doctor examining a patient for '+d.name);

    document.querySelectorAll('.js-doc-link').forEach(function(a){ a.setAttribute('href','doctors.html#'+d.slug); });
    document.querySelectorAll('.js-find-specialist').forEach(function(a){ a.textContent = 'Find a '+d.name+' Specialist'; });

    // FAQ accordion + reveal-on-scroll are wired up by script.js, which runs
    // right after this file — so all injected markup above must already be
    // in the DOM by the time this function returns.
  }

  render();
})();
