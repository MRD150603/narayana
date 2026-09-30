/* ============================================================
   DISEASE DATA — one entry per disease detail page.
   Adding a new disease/condition to the site means adding a new
   entry here (plus a thin disease-*.html shell that sets
   data-disease to the matching key) — no design work required.
   Rendered onto the shared Cataract-page template by disease-template.js.
   ============================================================ */
window.DISEASE_DATA = {

  glaucoma: {
    name: "Glaucoma",
    slug: "glaucoma",
    category: "Eye Condition · Optic Nerve",
    lead: "Glaucoma is a group of eye conditions that damage the optic nerve, usually due to abnormally high pressure inside the eye. Often called the “silent thief of sight” because it progresses with few early symptoms, glaucoma is a leading cause of irreversible blindness worldwide — but vision loss can be slowed or stopped with early diagnosis and consistent treatment.",
    facts: [
      {icon:"gauge", text:"Second leading cause of blindness worldwide"},
      {icon:"calendar", text:"Risk increases significantly after age 40"},
      {icon:"laser", text:"Painless in-clinic laser treatment available"}
    ],
    heroImage: "assets/photos/equipment.jpg",
    heroAlt: "Ophthalmic equipment used for glaucoma diagnosis",
    badge: {icon:"calendar", bold:"Lifelong Monitoring", caption:"Regular check-ups protect your vision"},
    meta: {
      title: "Glaucoma Treatment & Diagnosis | Narayana Netralaya nVision Eye Hospitals & Research Center",
      description: "Glaucoma damages the optic nerve, often from raised eye pressure. Learn the symptoms, causes, eye drops, laser (SLT) and surgical treatment options, and meet our glaucoma specialists at Narayana Netralaya nVision."
    },
    overview: {
      heading: "What Is Glaucoma?",
      paragraphs: [
        "The eye continuously produces a clear fluid called aqueous humour, which drains out through a mesh-like channel to keep internal eye pressure balanced. In glaucoma, this drainage slows down or fluid production increases, causing intraocular pressure (IOP) to rise. Sustained high pressure gradually damages the optic nerve — the cable that carries visual information from the eye to the brain.",
        "Because glaucoma typically affects side (peripheral) vision first, most patients don't notice any change until significant, irreversible nerve damage has already occurred. This is why routine eye pressure screening — even without symptoms — is the single most effective way to catch glaucoma early."
      ],
      image: "assets/photos/consult-senior.jpg",
      imageAlt: "Doctor discussing a glaucoma diagnosis with a senior patient",
      statBig: "12%",
      statCaption: "of blindness in India is caused by glaucoma"
    },
    symptomsIntro: "Glaucoma is often symptomless in its early stages. When signs do appear, they include:",
    symptoms: [
      {icon:"tunnel", title:"Gradual Loss of Peripheral Vision", text:"Side vision narrows slowly, often unnoticed until it affects daily activities like driving."},
      {icon:"gauge", title:"Eye Pain or Pressure", text:"A feeling of pressure, aching or discomfort in or around the eye, more common in acute cases."},
      {icon:"glare", title:"Halos Around Lights", text:"Rainbow-coloured rings around lights, particularly noticeable during a sudden pressure spike."},
      {icon:"flash", title:"Sudden Blurred Vision", text:"Rapid, unexplained blurring can signal an acute angle-closure glaucoma attack needing urgent care."},
      {icon:"drop", title:"Redness and Watering", text:"A red, watering eye alongside pain can accompany an acute glaucoma episode."},
      {icon:"moon", title:"Difficulty Adjusting to Dark Rooms", text:"Slower adaptation when moving from bright to dim lighting."}
    ],
    causesIntro: "Glaucoma can affect anyone, but certain factors raise your risk significantly. Regular pressure checks are advised for:",
    riskFactors: [
      {icon:"calendar", label:"Age Over 40"},
      {icon:"family", label:"Family History"},
      {icon:"drop", label:"Diabetes"},
      {icon:"gauge", label:"High Eye Pressure"},
      {icon:"injury", label:"Past Eye Injury"},
      {icon:"pill", label:"Long-Term Steroid Use"}
    ],
    treatmentIntro: "Glaucoma cannot be cured, but its progression can almost always be controlled. Treatment aims to lower eye pressure and preserve remaining vision.",
    treatments: [
      {icon:"drop", title:"Prescription Eye Drops", text:"Daily medicated drops that either reduce fluid production or improve drainage, usually the first line of treatment."},
      {icon:"laser", title:"Selective Laser Trabeculoplasty (SLT)", text:"A quick, in-clinic laser procedure that improves the eye's natural drainage pathway, often reducing dependence on drops."},
      {icon:"surgery", title:"Trabeculectomy", text:"A surgical procedure that creates a new drainage channel for fluid, used when drops and laser aren't enough to control pressure."},
      {icon:"crosshair", title:"MIGS — Minimally Invasive Glaucoma Surgery", text:"Micro-incision devices and stents that lower pressure with a faster recovery than traditional glaucoma surgery."}
    ],
    softCta: {heading:"Worried about your eye pressure?", text:"A simple, painless pressure check and optic nerve scan can catch glaucoma years before symptoms appear."},
    techIntro: "Precision instruments used to detect and monitor glaucoma at every stage.",
    technology: [
      {image:"assets/photos/equipment.jpg", alt:"Tonometry equipment for glaucoma diagnosis", category:"Pressure Testing", title:"Applanation Tonometry", text:"The gold-standard method for accurately measuring intraocular pressure during every visit."},
      {image:"assets/photos/hero-exam.jpg", alt:"OCT imaging equipment for glaucoma", category:"Nerve Imaging", title:"Optical Coherence Tomography (OCT)", text:"High-resolution cross-sectional imaging tracks subtle changes in optic nerve fibre thickness over time."},
      {image:"assets/photos/consult-senior.jpg", alt:"Visual field testing for glaucoma", category:"Field Testing", title:"Automated Visual Field Perimetry", text:"Maps your full field of vision to detect and monitor peripheral vision loss with precision."}
    ],
    specialistsIntro: "Fellowship-trained consultants focused on long-term glaucoma management.",
    specialists: [
      {name:"Dr. Ravindra Babu K R", role:"Senior Consultant · Glaucoma Services", img:"assets/photos/doctor-man-3.jpg"},
      {name:"Dr. Divya R", role:"Consultant · Glaucoma Services", img:"assets/photos/doctor-woman.jpg"},
      {name:"Dr. Vatsala Venkatraman", role:"Consultant · Glaucoma Services", img:"assets/photos/doctor-woman.jpg"},
      {name:"Dr. Shilpa N", role:"Consultant · Glaucoma Services", img:"assets/photos/doctor-woman.jpg"}
    ],
    faqs: [
      {q:"Can glaucoma be cured?", a:"Not currently — but with consistent treatment and monitoring, most patients keep good functional vision for life. The goal is to stop further nerve damage, not reverse what's already lost."},
      {q:"Is glaucoma surgery painful?", a:"No. Laser procedures and surgeries are performed under local or topical anaesthesia, with only mild discomfort reported afterward."},
      {q:"Will I need eye drops forever?", a:"Many patients do need long-term drops, though laser treatment or MIGS can reduce or, in some cases, eliminate that dependence."},
      {q:"How often should I get my eye pressure checked?", a:"Adults over 40, or anyone with a family history of glaucoma, should have a comprehensive eye pressure and optic nerve check at least once a year."},
      {q:"Can glaucoma cause total blindness?", a:"Untreated, advanced glaucoma can lead to significant and permanent vision loss. Early detection and treatment adherence dramatically reduce this risk."}
    ],
    finalCta: {heading:"Protect Your Vision from Glaucoma", text:"Glaucoma has no early warning signs — the best defence is a regular eye pressure check. Talk to a specialist today.", image:"assets/photos/real/real-senior-exam.png"}
  },

  "diabetic-retinopathy": {
    name: "Diabetic Retinopathy",
    slug: "diabetic-retinopathy",
    category: "Eye Condition · Retina",
    lead: "Diabetic retinopathy is damage to the light-sensitive retina caused by prolonged high blood sugar, which weakens and leaks from the tiny blood vessels at the back of the eye. It is one of the leading causes of vision loss among working-age adults — but with regular screening and timely treatment, sight-threatening complications are largely preventable.",
    facts: [
      {icon:"drop", text:"Affects up to 1 in 3 people with diabetes"},
      {icon:"calendar", text:"Risk rises the longer diabetes has been diagnosed"},
      {icon:"injection", text:"Treatable with in-clinic injections and laser"}
    ],
    heroImage: "assets/photos/eye-amber.jpg",
    heroAlt: "Close-up retina examination for diabetic retinopathy",
    badge: {icon:"calendar", bold:"Annual Screening", caption:"Recommended for every diabetic patient"},
    meta: {
      title: "Diabetic Retinopathy Treatment | Narayana Netralaya nVision Eye Hospitals & Research Center",
      description: "Diabetic retinopathy damages the retina's blood vessels due to high blood sugar. Learn the symptoms, stages, anti-VEGF injections, laser and vitrectomy treatment options at Narayana Netralaya nVision."
    },
    overview: {
      heading: "What Is Diabetic Retinopathy?",
      paragraphs: [
        "The retina relies on a dense network of tiny blood vessels for oxygen and nutrients. Persistently high blood sugar damages these vessel walls, causing them to swell, leak fluid or close off entirely. In response, the retina may grow new, fragile blood vessels — a more advanced stage called proliferative diabetic retinopathy — which can bleed or pull on the retina.",
        "Diabetic retinopathy usually develops silently over years, with vision changes often appearing only once the disease is fairly advanced. Because of this, anyone with diabetes — even with no vision complaints — needs a dilated retina examination at least once a year."
      ],
      image: "assets/photos/hero-exam.jpg",
      imageAlt: "Comprehensive eye examination for diabetic retinopathy screening",
      statBig: "1 in 3",
      statCaption: "people with diabetes develop some degree of diabetic retinopathy"
    },
    symptomsIntro: "Diabetic retinopathy often has no symptoms until it is advanced. Watch for:",
    symptoms: [
      {icon:"floaters", title:"Floaters or Dark Spots", text:"New dark spots or thread-like floaters drifting across your vision, often from small bleeds inside the eye."},
      {icon:"eye", title:"Blurred or Fluctuating Vision", text:"Vision that blurs or varies through the day as blood sugar levels shift."},
      {icon:"colorfade", title:"Faded or Washed-Out Colours", text:"Colours appearing less vibrant as the retina's function is affected."},
      {icon:"wave", title:"Patchy or Empty Areas in Vision", text:"Missing or dark patches in your field of view as retinal areas are damaged."},
      {icon:"moon", title:"Poor Night Vision", text:"Increasing difficulty seeing in low light as retinal sensitivity declines."},
      {icon:"flash", title:"Sudden Vision Loss", text:"A sudden, significant drop in vision can signal bleeding into the eye and needs immediate attention."}
    ],
    causesIntro: "Diabetic retinopathy risk climbs with how long and how well diabetes is controlled.",
    riskFactors: [
      {icon:"calendar", label:"Long-Standing Diabetes"},
      {icon:"gauge", label:"Poor Blood Sugar Control"},
      {icon:"drop", label:"High Blood Pressure"},
      {icon:"chart", label:"High Cholesterol"},
      {icon:"family", label:"Pregnancy-Related Diabetes"},
      {icon:"injury", label:"Kidney Disease"}
    ],
    treatmentIntro: "Treatment slows or stops progression and addresses complications like swelling or bleeding.",
    treatments: [
      {icon:"injection", title:"Anti-VEGF Injections", text:"Medication injected into the eye to reduce abnormal blood vessel growth and retinal swelling (macular oedema)."},
      {icon:"laser", title:"Focal & Panretinal Laser Photocoagulation", text:"Targeted laser treatment seals leaking vessels or shrinks abnormal new vessels to prevent bleeding."},
      {icon:"surgery", title:"Vitrectomy", text:"Micro-incision surgery to remove blood or scar tissue from the vitreous gel in advanced, non-resolving cases."},
      {icon:"gauge", title:"Blood Sugar & Pressure Management", text:"Coordinated care with your physician to control the systemic factors that drive retinopathy progression."}
    ],
    softCta: {heading:"Living with diabetes? Protect your retina.", text:"A dilated retina screening once a year can catch diabetic retinopathy long before it threatens your vision."},
    techIntro: "Advanced imaging to detect and track even the earliest retinal changes.",
    technology: [
      {image:"assets/photos/consult-senior.jpg", alt:"Retinal imaging for diabetic retinopathy", category:"Retinal Imaging", title:"Wide-Field Fundus Photography", text:"Captures a detailed, high-resolution view of the retina's periphery to catch early leakage and bleeding."},
      {image:"assets/photos/equipment.jpg", alt:"OCT angiography equipment", category:"Cross-Sectional Imaging", title:"OCT & OCT Angiography", text:"Visualises retinal layers and blood flow without dye, revealing swelling and vessel changes in fine detail."},
      {image:"assets/photos/eye-green.jpg", alt:"Fundus fluorescein angiography for retina vessels", category:"Vessel Mapping", title:"Fundus Fluorescein Angiography", text:"A dye-based scan that highlights leaking or blocked retinal vessels to guide precise laser treatment."}
    ],
    specialistsIntro: "Retina specialists experienced in managing every stage of diabetic eye disease.",
    specialists: [
      {name:"Dr. K Bhujang Shetty", role:"Senior Consultant · Retina & Vitreous", img:"assets/photos/real/real-staff-b.png"},
      {name:"Dr. Meera Pillai", role:"Consultant · Medical Retina & Diabetic Eye Care", img:"assets/photos/real/real-doctor-woman-c.png"},
      {name:"Dr. Arvind Nair", role:"Consultant · Vitreo-Retinal Surgery", img:"assets/photos/doctor-man-2.jpg"},
      {name:"Dr. Sunitha Rao", role:"Consultant · Retina Imaging & OCT", img:"assets/photos/doctor-woman.jpg"}
    ],
    faqs: [
      {q:"Can diabetic retinopathy be reversed?", a:"Existing damage generally cannot be reversed, but treatment can stop further progression and, in many cases, improve vision affected by swelling."},
      {q:"Do I need treatment if I have no symptoms?", a:"Yes — significant damage can occur before symptoms appear. Annual screening is essential even without vision complaints."},
      {q:"Are the eye injections painful?", a:"The eye is numbed beforehand, so most patients feel only mild pressure, not pain, during the injection."},
      {q:"How often will I need injections?", a:"This varies by severity — some patients need monthly injections initially, tapering to longer intervals as the retina stabilises."},
      {q:"Can good sugar control alone prevent it?", a:"Tight blood sugar, blood pressure and cholesterol control significantly lowers risk and slows progression, but annual eye screening is still recommended for everyone with diabetes."}
    ],
    finalCta: {heading:"Don't Wait for Symptoms to Appear", text:"Diabetic retinopathy can silently progress for years. An annual dilated eye exam is the best way to protect your sight.", image:"assets/photos/real/real-senior-exam.png"}
  },

  "macular-degeneration": {
    name: "Macular Degeneration",
    slug: "macular-degeneration",
    category: "Eye Condition · Retina · Macula",
    lead: "Age-related macular degeneration (AMD) affects the macula — the small central part of the retina responsible for sharp, detailed vision needed for reading and recognising faces. It is a leading cause of vision loss after age 60, but modern treatments can slow its progression and, in many cases, preserve useful central vision for years.",
    facts: [
      {icon:"calendar", text:"Most common after age 60"},
      {icon:"wave", text:"Straight lines may appear wavy or distorted"},
      {icon:"injection", text:"Anti-VEGF injections can preserve vision in wet AMD"}
    ],
    heroImage: "assets/photos/eye-green.jpg",
    heroAlt: "Close-up of an eye affected by macular degeneration",
    badge: {icon:"wave", bold:"Amsler Grid Test", caption:"A simple daily self-check for early distortion"},
    meta: {
      title: "Macular Degeneration (AMD) Treatment | Narayana Netralaya nVision Eye Hospitals & Research Center",
      description: "Age-related macular degeneration affects central vision. Learn the difference between dry and wet AMD, symptoms, anti-VEGF treatment and specialists at Narayana Netralaya nVision."
    },
    overview: {
      heading: "What Is Macular Degeneration?",
      paragraphs: [
        "The macula sits at the centre of the retina and is responsible for the fine detail we use to read, drive and recognise faces. In age-related macular degeneration, the macula's cells break down over time — either slowly, as waste deposits called drusen build up beneath the retina (dry AMD), or suddenly, as abnormal blood vessels grow and leak beneath the macula (wet AMD).",
        "AMD does not cause total blindness, since peripheral vision is preserved, but it can significantly affect the central vision needed for everyday tasks. Wet AMD in particular can progress quickly, making prompt diagnosis and treatment essential to preserving vision."
      ],
      image: "assets/photos/portrait-elder.jpg",
      imageAlt: "Elderly patient affected by macular degeneration",
      statBig: "90%",
      statCaption: "of AMD cases are the slower-progressing 'dry' form"
    },
    symptomsIntro: "AMD affects central vision gradually or, in the wet form, suddenly. Common signs include:",
    symptoms: [
      {icon:"wave", title:"Wavy or Distorted Straight Lines", text:"Door frames, text lines or window edges may appear bent, blurry or wavy."},
      {icon:"tunnel", title:"Blurred or Dim Central Vision", text:"A blurry or dim patch develops in the centre of your view, while side vision stays clear."},
      {icon:"floaters", title:"Blank or Dark Spot in Vision", text:"A gray, dark or empty area may appear in the middle of your visual field."},
      {icon:"colorfade", title:"Difficulty Recognising Faces", text:"Fine facial details become harder to make out, even at close range."},
      {icon:"book", title:"Trouble Reading Fine Print", text:"Words may blur or letters seem to disappear even with good lighting."},
      {icon:"flash", title:"Sudden Vision Change", text:"A rapid drop or distortion in vision can signal wet AMD and needs urgent evaluation."}
    ],
    causesIntro: "AMD risk is shaped by age, genetics and lifestyle factors.",
    riskFactors: [
      {icon:"calendar", label:"Age Over 60"},
      {icon:"family", label:"Family History"},
      {icon:"injury", label:"Smoking"},
      {icon:"drop", label:"High Blood Pressure"},
      {icon:"glare", label:"Prolonged UV Exposure"},
      {icon:"chart", label:"High Cholesterol"}
    ],
    treatmentIntro: "Treatment aims to slow progression and, in wet AMD, stabilise or improve vision.",
    treatments: [
      {icon:"injection", title:"Anti-VEGF Injections", text:"Regular in-clinic injections that block abnormal vessel growth and fluid leakage in wet AMD, often preserving or improving vision."},
      {icon:"pill", title:"AREDS2 Nutritional Supplements", text:"A specific vitamin and mineral formula shown to slow progression in intermediate dry AMD."},
      {icon:"laser", title:"Photodynamic Therapy", text:"A light-activated drug treatment used selectively to close abnormal vessels in certain wet AMD cases."},
      {icon:"book", title:"Low Vision Rehabilitation", text:"Magnifiers, adaptive lighting and training to make the most of remaining vision for daily tasks."}
    ],
    softCta: {heading:"Notice lines looking wavy?", text:"An Amsler grid check and retina scan can catch macular changes early, when treatment works best."},
    techIntro: "Precision imaging that tracks the macula down to the cellular layer.",
    technology: [
      {image:"assets/photos/hero-exam.jpg", alt:"OCT macular scanning equipment", category:"Retinal Imaging", title:"OCT Macular Scanning", text:"Cross-sectional imaging measures macular thickness and fluid with micrometre precision to guide treatment."},
      {image:"assets/photos/equipment.jpg", alt:"OCT angiography for macular vessels", category:"Vessel Mapping", title:"OCT Angiography", text:"Dye-free imaging reveals abnormal blood vessel growth beneath the retina in wet AMD."},
      {image:"assets/photos/consult-senior.jpg", alt:"Amsler grid self-testing for macular degeneration", category:"Self-Monitoring", title:"Amsler Grid Testing", text:"A simple daily home test that helps patients and doctors catch new distortion or blank spots early."}
    ],
    specialistsIntro: "Retina consultants experienced in both dry and wet AMD management.",
    specialists: [
      {name:"Dr. K Bhujang Shetty", role:"Senior Consultant · Retina & Vitreous", img:"assets/photos/real/real-staff-b.png"},
      {name:"Dr. Sunitha Rao", role:"Consultant · Medical Retina", img:"assets/photos/doctor-woman.jpg"},
      {name:"Dr. Arvind Nair", role:"Consultant · Vitreo-Retinal Surgery", img:"assets/photos/doctor-man-2.jpg"},
      {name:"Dr. Meera Pillai", role:"Consultant · Retina Imaging & OCT", img:"assets/photos/real/real-doctor-woman-c.png"}
    ],
    faqs: [
      {q:"Will macular degeneration make me completely blind?", a:"No — AMD affects central vision only. Peripheral vision is preserved, so most patients retain enough vision for mobility and orientation, though central tasks like reading become harder."},
      {q:"What's the difference between dry and wet AMD?", a:"Dry AMD progresses slowly through deposit build-up and cell thinning. Wet AMD involves abnormal, leaking blood vessels and can cause rapid vision loss if untreated."},
      {q:"How often will I need anti-VEGF injections?", a:"Typically monthly at first, then spaced out based on how the retina responds, guided by regular OCT scans."},
      {q:"Can diet affect my risk?", a:"A diet rich in leafy greens, fish and antioxidants, along with not smoking, is associated with a lower risk of AMD progression."},
      {q:"Should I test my vision at home?", a:"Yes — a daily Amsler grid check takes seconds and can catch new distortion early, prompting a timely visit if something changes."}
    ],
    finalCta: {heading:"Protect Your Central Vision", text:"Early detection makes the biggest difference in macular degeneration. Talk to a retina specialist about your risk.", image:"assets/photos/real/real-patient-portrait.jpg"}
  },

  "corneal-diseases": {
    name: "Corneal Diseases",
    slug: "corneal-diseases",
    category: "Eye Condition · Cornea",
    lead: "The cornea is the eye's clear, dome-shaped front window, focusing most of the light that enters your eye. Corneal diseases — from infections and injuries to progressive conditions like keratoconus — can cloud, scar or distort this surface, affecting vision that ranges from mild blur to significant impairment. Most corneal conditions respond well to timely diagnosis and treatment.",
    facts: [
      {icon:"cornea", text:"The cornea provides ~2/3 of the eye's focusing power"},
      {icon:"crosshair", text:"Keratoconus often begins in the teenage years"},
      {icon:"surgery", text:"Transplant success rates exceed 90% for many conditions"}
    ],
    heroImage: "assets/photos/eye-blue.jpg",
    heroAlt: "Close-up of a human eye affected by corneal disease",
    badge: {icon:"cornea", bold:"Same-Day Diagnosis", caption:"Corneal topography maps your eye in minutes"},
    meta: {
      title: "Corneal Disease Treatment | Narayana Netralaya nVision Eye Hospitals & Research Center",
      description: "Corneal diseases include keratoconus, infections, dystrophies and injuries affecting the eye's clear front surface. Learn the symptoms, causes, cross-linking, transplant options and specialists at Narayana Netralaya nVision."
    },
    overview: {
      heading: "What Are Corneal Diseases?",
      paragraphs: [
        "The cornea is a transparent, dome-shaped layer covering the front of the eye, responsible for roughly two-thirds of its total focusing power. Corneal diseases cover a wide range of conditions — from infections (keratitis) and dry, damaged surfaces, to inherited dystrophies and keratoconus, a progressive thinning and bulging of the cornea into a cone shape.",
        "Because the cornea must stay perfectly clear and smoothly curved for sharp vision, even small amounts of scarring, swelling or irregular shape can noticeably blur or distort sight. Many corneal conditions are highly treatable when caught early, ranging from medicated drops to advanced procedures like corneal cross-linking or transplantation."
      ],
      image: "assets/photos/spec-general-care.jpg",
      imageAlt: "General eye examination for corneal health",
      statBig: "1 in 2,000",
      statCaption: "people are affected by keratoconus, the most common corneal dystrophy"
    },
    symptomsIntro: "Corneal conditions vary widely, but commonly present with:",
    symptoms: [
      {icon:"eye", title:"Blurred or Distorted Vision", text:"Vision that blurs, doubles or distorts, especially as keratoconus or scarring progresses."},
      {icon:"drop", title:"Redness, Pain or Watering", text:"Irritation, redness or excessive tearing, often seen with infections or injuries."},
      {icon:"glare", title:"Light Sensitivity", text:"Increased discomfort in bright light or glare, common across many corneal conditions."},
      {icon:"crosshair", title:"Frequent Prescription Changes", text:"Rapidly changing or hard-to-correct glasses power can signal irregular corneal curvature."},
      {icon:"floaters", title:"White Spots or Cloudiness", text:"Visible cloudy patches or white spots on the cornea from scarring or infection."},
      {icon:"injury", title:"Foreign Body Sensation", text:"A persistent feeling of grit or something in the eye, even when nothing is there."}
    ],
    causesIntro: "Corneal disease can stem from genetics, injury, infection or chronic irritation.",
    riskFactors: [
      {icon:"family", label:"Family History (Keratoconus)"},
      {icon:"injury", label:"Eye Rubbing or Injury"},
      {icon:"drop", label:"Contact Lens Overuse"},
      {icon:"glare", label:"UV Exposure"},
      {icon:"pill", label:"Untreated Dry Eye"},
      {icon:"calendar", label:"Previous Eye Surgery"}
    ],
    treatmentIntro: "Treatment ranges from medicated drops to advanced surgical correction, based on the specific condition.",
    treatments: [
      {icon:"drop", title:"Medicated Eye Drops", text:"Antibiotic, antiviral or anti-inflammatory drops to treat infections and reduce corneal inflammation."},
      {icon:"laser", title:"Corneal Collagen Cross-Linking (C3-R)", text:"A UV-light and riboflavin treatment that strengthens corneal fibres to halt keratoconus progression."},
      {icon:"lens", title:"Specialty Contact Lenses", text:"Rigid gas-permeable or scleral lenses that correct vision when the cornea's surface is irregular."},
      {icon:"surgery", title:"Corneal Transplant (Keratoplasty)", text:"Full or partial replacement of damaged corneal tissue with healthy donor tissue for advanced disease or scarring."}
    ],
    softCta: {heading:"Notice your glasses power keeps changing?", text:"A corneal topography scan can detect keratoconus and other conditions years before vision is seriously affected."},
    techIntro: "Detailed corneal mapping and imaging guide every diagnosis and treatment plan.",
    technology: [
      {image:"assets/photos/equipment.jpg", alt:"Corneal topography equipment", category:"Corneal Mapping", title:"Corneal Topography & Tomography", text:"Creates a precise 3D map of the cornea's shape to detect keratoconus and irregular astigmatism early."},
      {image:"assets/photos/hero-exam.jpg", alt:"Slit-lamp examination of the cornea", category:"Surface Imaging", title:"Slit-Lamp Biomicroscopy", text:"High-magnification examination of the cornea's layers to detect scarring, infection and dystrophies."},
      {image:"assets/photos/consult-family.jpg", alt:"Specular microscopy for corneal cell analysis", category:"Cell Analysis", title:"Specular Microscopy", text:"Counts and evaluates corneal endothelial cells, essential before cataract or transplant surgery."}
    ],
    specialistsIntro: "Corneal specialists trained in medical and surgical management of complex corneal disease.",
    specialists: [
      {name:"Dr. Shweta Agarwal", role:"Senior Consultant · Cornea & Refractive Surgery", img:"assets/photos/real/real-doctor-woman-c.png"},
      {name:"Dr. Karthik Iyengar", role:"Consultant · Corneal Transplant Surgery", img:"assets/photos/doctor-man-1.jpg"},
      {name:"Dr. Priya Nambiar", role:"Consultant · Keratoconus & Cross-Linking", img:"assets/photos/real/real-doctor-woman-a.png"},
      {name:"Dr. Arjun Mehta", role:"Consultant · Ocular Surface Disease", img:"assets/photos/real/real-staff-a.png"}
    ],
    faqs: [
      {q:"Is keratoconus the same as astigmatism?", a:"No. Astigmatism is an irregular but stable corneal or lens curvature, while keratoconus is a progressive thinning and bulging of the cornea that worsens over time without treatment."},
      {q:"Can cross-linking cure keratoconus?", a:"Cross-linking doesn't reverse existing curvature but is highly effective at halting further progression, especially when performed early."},
      {q:"How long does recovery take after a corneal transplant?", a:"Visual recovery is gradual, often taking several months to a year, with regular follow-up to monitor healing and manage sutures."},
      {q:"Can contact lenses cause corneal disease?", a:"Overuse, poor hygiene or ill-fitting lenses can increase the risk of corneal infections and irritation — proper lens care and regular check-ups reduce this risk significantly."},
      {q:"Is corneal transplant surgery safe?", a:"Yes, it's one of the most successful transplant procedures performed today, with high long-term success rates for most conditions."}
    ],
    finalCta: {heading:"Don't Ignore Changes in Your Vision", text:"Many corneal conditions progress silently at first. Early diagnosis with corneal imaging can protect your long-term vision.", image:"assets/photos/real/real-patient-portrait.jpg"}
  },

  "refractive-surgery": {
    name: "Refractive Surgery",
    slug: "refractive-surgery",
    category: "Vision Correction · Refractive Surgery",
    lead: "Refractive surgery reshapes the cornea to correct short-sightedness (myopia), long-sightedness (hyperopia) and astigmatism — reducing or removing the need for glasses and contact lenses. Modern bladeless techniques like LASIK and SMILE offer quick recovery with a strong safety record for the right candidates.",
    facts: [
      {icon:"glasses", text:"Most patients achieve 20/20 vision or better"},
      {icon:"laser", text:"Bladeless SMILE and LASIK options available"},
      {icon:"calendar", text:"Return to daily activities within 24–48 hours"}
    ],
    heroImage: "assets/photos/hero-exam.jpg",
    heroAlt: "Pre-surgical eye examination for refractive surgery",
    badge: {icon:"laser", bold:"10–15 min", caption:"Typical bladeless laser procedure time"},
    meta: {
      title: "LASIK, SMILE & Refractive Surgery | Narayana Netralaya nVision Eye Hospitals & Research Center",
      description: "Refractive surgery corrects myopia, hyperopia and astigmatism. Learn about bladeless LASIK, SMILE, ICL and PRK options, candidacy and specialists at Narayana Netralaya nVision."
    },
    overview: {
      heading: "What Is Refractive Surgery?",
      paragraphs: [
        "Refractive errors occur when the shape of your eye prevents light from focusing directly on the retina, causing blurred vision that glasses or contact lenses correct externally. Refractive surgery works by precisely reshaping the cornea — the eye's clear front surface — so that light focuses correctly without needing external correction.",
        "Today's procedures use computer-guided lasers to adjust the cornea with micron-level accuracy, in some cases without creating any corneal flap at all. A detailed pre-surgical evaluation determines your degree of refractive error, corneal thickness and shape to recommend the safest, most effective procedure for you."
      ],
      image: "assets/photos/consult-family.jpg",
      imageAlt: "Consultation before refractive surgery",
      statBig: "96%+",
      statCaption: "of well-selected LASIK patients achieve 20/20 vision or better"
    },
    symptomsIntro: "You may be a candidate for refractive surgery if you experience:",
    symptoms: [
      {icon:"eye", title:"Blurred Distance Vision (Myopia)", text:"Difficulty seeing distant objects clearly, such as road signs or a classroom board."},
      {icon:"book", title:"Blurred Near Vision (Hyperopia)", text:"Struggling to focus on close-up tasks like reading or phone use."},
      {icon:"doublevision", title:"Distorted Vision from Astigmatism", text:"Slightly blurred or stretched vision at all distances due to an irregularly shaped cornea or lens."},
      {icon:"glasses", title:"Heavy Dependence on Glasses", text:"Needing glasses or contacts for nearly every daily activity, from driving to sports."},
      {icon:"drop", title:"Contact Lens Discomfort", text:"Dryness, irritation or intolerance to long-term contact lens wear."},
      {icon:"chart", title:"Frequent Prescription Changes", text:"A stable prescription for at least a year is usually required before considering surgery."}
    ],
    causesIntro: "Refractive errors are largely due to the natural shape of the eye, influenced by:",
    riskFactors: [
      {icon:"family", label:"Family History"},
      {icon:"book", label:"Extended Near-Work"},
      {icon:"calendar", label:"Age-Related Changes (Presbyopia)"},
      {icon:"cornea", label:"Corneal Shape Variations"},
      {icon:"glare", label:"Limited Outdoor Time in Childhood"},
      {icon:"injury", label:"Previous Eye Injury or Surgery"}
    ],
    treatmentIntro: "The right procedure depends on your refractive error, corneal thickness and lifestyle.",
    treatments: [
      {icon:"laser", title:"Bladeless LASIK", text:"A thin corneal flap is created with a femtosecond laser, then an excimer laser reshapes the cornea beneath it for fast visual recovery."},
      {icon:"crosshair", title:"SMILE — Small Incision Lenticule Extraction", text:"A flapless, minimally invasive procedure that reshapes the cornea through a tiny incision, ideal for higher prescriptions or thinner corneas."},
      {icon:"surgery", title:"PRK — Photorefractive Keratectomy", text:"Reshapes the cornea's outer surface directly, a good option for thinner corneas or certain occupations."},
      {icon:"lens", title:"ICL — Implantable Collamer Lens", text:"A permanent, removable lens placed inside the eye for patients not suited to corneal laser procedures."}
    ],
    softCta: {heading:"Tired of glasses and contact lenses?", text:"A comprehensive corneal and refractive evaluation will tell you exactly which procedure suits your eyes best."},
    techIntro: "Computer-guided precision technology behind every refractive procedure.",
    technology: [
      {image:"assets/photos/equipment.jpg", alt:"Femtosecond and excimer laser suite", category:"Laser Platform", title:"Femtosecond & Excimer Laser Suite", text:"Bladeless, image-guided lasers perform corneal reshaping with sub-micron accuracy."},
      {image:"assets/photos/hero-exam.jpg", alt:"Corneal topography and wavefront analysis", category:"Pre-Op Mapping", title:"Corneal Topography & Wavefront Analysis", text:"Maps corneal shape and visual imperfections in detail to plan a fully customised procedure."},
      {image:"assets/photos/consult-family.jpg", alt:"Refractive surgery candidacy assessment", category:"Candidacy Assessment", title:"Comprehensive Refractive Work-Up", text:"Thorough evaluation of corneal thickness, tear film and eye health to confirm safe candidacy."}
    ],
    specialistsIntro: "Refractive surgeons experienced across LASIK, SMILE, PRK and ICL procedures.",
    specialists: [
      {name:"Dr. Rohit Shetty", role:"Director · Cataract & Refractive Surgery", img:"assets/photos/real/real-doctor-man.png"},
      {name:"Dr. Shweta Agarwal", role:"Senior Consultant · Cornea & Refractive Surgery", img:"assets/photos/real/real-doctor-woman-c.png"},
      {name:"Dr. Karthik Iyengar", role:"Consultant · LASIK & SMILE", img:"assets/photos/doctor-man-1.jpg"},
      {name:"Dr. Priya Nambiar", role:"Consultant · Refractive Surgery", img:"assets/photos/real/real-doctor-woman-a.png"}
    ],
    faqs: [
      {q:"Is LASIK painful?", a:"No — numbing drops are used throughout, so patients typically feel only mild pressure, not pain, during the procedure."},
      {q:"Am I a candidate for refractive surgery?", a:"Candidacy depends on your prescription stability, corneal thickness and overall eye health, confirmed through a detailed pre-surgical evaluation."},
      {q:"How soon can I return to work?", a:"Most LASIK and SMILE patients resume normal activities within 24–48 hours, though strenuous exercise is limited for a couple of weeks."},
      {q:"Is the result permanent?", a:"The corneal reshaping is permanent, though age-related changes like presbyopia can still affect near vision later in life."},
      {q:"What if I'm not suitable for LASIK?", a:"Alternatives such as SMILE, PRK or an implantable lens (ICL) can often still provide glasses-free vision depending on your eye's specific profile."}
    ],
    finalCta: {heading:"See Life Without Glasses", text:"Find out which bladeless vision correction procedure is right for you with a comprehensive refractive evaluation.", image:"assets/photos/real/real-patient-portrait.jpg"}
  },

  "general-eye-care": {
    name: "General Eye Care",
    slug: "general-eye-care",
    category: "Eye Care · Comprehensive",
    lead: "General eye care covers the routine checks and everyday treatments that protect your vision at every age — from a standard vision test to managing dry eye, mild infections and changes in glasses prescription. Regular comprehensive exams catch small issues early, before they become bigger problems.",
    facts: [
      {icon:"eye", text:"Recommended once a year for most adults"},
      {icon:"calendar", text:"Catches early signs of bigger eye conditions"},
      {icon:"family", text:"Suitable for every age group"}
    ],
    heroImage: "assets/photos/spec-general-care.jpg",
    heroAlt: "Comprehensive eye examination for general eye care",
    badge: {icon:"eye", bold:"Full Check-Up", caption:"Vision, eye health and screening in one visit"},
    meta: {
      title: "General Eye Care | Narayana Netralaya nVision Eye Hospitals & Research Center",
      description: "Comprehensive eye exams, routine vision checks and everyday eye care — dry eye, minor infections, glasses updates and screening — at Narayana Netralaya nVision."
    },
    overview: {
      heading: "What Does General Eye Care Cover?",
      paragraphs: [
        "A general eye care visit is a comprehensive check of both your vision and the overall health of your eyes — not just a reading-chart test. It typically includes a vision assessment, an eye-pressure check, and an examination of the front and back of the eye to look for early signs of conditions like cataract, glaucoma or retinal changes.",
        "General eye care also covers everyday concerns that don't need a specialist referral: dry eyes, minor allergic or infective conjunctivitis, updating a glasses or contact lens prescription, and general guidance on protecting your vision as you age. When something needs closer attention, our optometrists refer you directly to the right sub-speciality clinic on the same visit."
      ],
      image: "assets/photos/consult-family.jpg",
      imageAlt: "Optometrist conducting a routine eye examination",
      statBig: "1 in 4",
      statCaption: "vision problems are found only through a routine eye exam"
    },
    symptomsIntro: "You don't need to wait for a problem to get a general eye check — but these signs mean it shouldn't wait:",
    symptoms: [
      {icon:"eye", title:"Blurred or Strained Vision", text:"Difficulty focusing on near or distant objects, or eyes that tire quickly while reading or using screens."},
      {icon:"drop", title:"Dryness, Redness or Irritation", text:"A gritty, burning or watery feeling that doesn't settle with rest."},
      {icon:"glare", title:"Frequent Headaches", text:"Headaches that cluster around the eyes or worsen with visual tasks can point to an uncorrected prescription."},
      {icon:"calendar", title:"It's Been Over a Year", text:"No noticeable symptoms yet, but no eye check in the last 12 months either."},
      {icon:"doublevision", title:"Changes in Colour or Night Vision", text:"Colours looking duller or night driving feeling harder than before."},
      {icon:"family", title:"Family History of Eye Disease", text:"A parent or sibling with glaucoma, macular degeneration or diabetic eye disease raises your own risk."}
    ],
    causesIntro: "General eye care is recommended for everyone, but it matters even more for certain groups:",
    riskFactors: [
      {icon:"calendar", label:"Age 40 and Above"},
      {icon:"drop", label:"Diabetes or High BP"},
      {icon:"family", label:"Family Eye History"},
      {icon:"eye", label:"Existing Glasses Wearers"},
      {icon:"glare", label:"Heavy Screen Use"},
      {icon:"book", label:"School-Age Children"}
    ],
    treatmentIntro: "Most general eye care needs are resolved in a single visit — anything more complex is referred straight to the right specialist.",
    treatments: [
      {icon:"eye", title:"Comprehensive Vision & Eye Health Exam", text:"A full assessment of vision, eye pressure and overall eye health, recommended annually for most adults."},
      {icon:"glasses", title:"Glasses & Contact Lens Prescriptions", text:"Accurate, up-to-date prescriptions for spectacles and a range of contact lens options."},
      {icon:"drop", title:"Dry Eye & Minor Infection Care", text:"Diagnosis and treatment for everyday concerns like dry eye, allergic and infective conjunctivitis."},
      {icon:"crosshair", title:"Speciality Referral", text:"Direct, same-visit referral to cataract, retina, glaucoma, cornea or paediatric clinics when a closer look is needed."}
    ],
    softCta: {heading:"When did you last have your eyes checked?", text:"A routine comprehensive exam is the easiest way to protect your vision — and catch anything else early."},
    techIntro: "The same diagnostic technology used across our specialities, available from your very first general check-up.",
    technology: [
      {image:"assets/photos/equipment.jpg", alt:"Comprehensive eye examination equipment", category:"Vision Testing", title:"Digital Refraction & Vision Testing", text:"Precise, computer-assisted measurement of your exact glasses or contact lens prescription."},
      {image:"assets/photos/hero-exam.jpg", alt:"Slit-lamp examination for general eye care", category:"Eye Health Check", title:"Slit-Lamp Examination", text:"A magnified, detailed look at the front of the eye to check for dryness, infection or early cataract."},
      {image:"assets/photos/consult-senior.jpg", alt:"Fundus examination for general eye care", category:"Retina Screening", title:"Dilated Fundus Examination", text:"A close look at the retina and optic nerve at the back of the eye to screen for silent conditions."}
    ],
    specialistsIntro: "Experienced optometrists and consultants for every routine and everyday eye care need.",
    specialists: [
      {name:"Dr. Mohan Rajan", role:"Senior Consultant · General & Cataract Care", img:"assets/photos/real/real-staff-a.png"},
      {name:"Dr. Anshu Agarwal", role:"Consultant · General Eye Care", img:"assets/photos/real/real-doctor-woman-a.png"},
      {name:"Dr. Rachita Varshney", role:"Consultant · General Eye Care", img:"assets/photos/real/real-doctor-woman-b.png"}
    ],
    faqs: [
      {q:"How often should I get a general eye check-up?", a:"Once a year for most adults — more often if you have diabetes, high blood pressure, a family history of eye disease, or already wear glasses."},
      {q:"Do I need an appointment for a routine check?", a:"No referral is needed — you can book a general eye care visit directly at any of our centres."},
      {q:"Can children have a general eye exam?", a:"Yes, and it's recommended — undetected vision problems in childhood can affect learning and development."},
      {q:"What happens if something needs specialist attention?", a:"You'll be referred directly to the right sub-speciality clinic — cataract, retina, glaucoma, cornea or paediatric — often on the same visit."}
    ],
    finalCta: {heading:"Give Your Eyes a Check-Up", text:"A simple, comprehensive eye exam is the easiest way to protect your vision for years to come.", image:"assets/photos/real/real-senior-exam.png"}
  },

  "paediatric-eye-care": {
    name: "Paediatric Eye Care",
    slug: "paediatric-eye-care",
    category: "Eye Care · Children",
    lead: "Paediatric eye care focuses on detecting and treating vision problems in infants, children and teens — including squint (misaligned eyes), lazy eye (amblyopia), and refractive errors — while young, developing vision can still respond best to treatment. Gentle, child-friendly exams help catch issues a child may never think to mention.",
    facts: [
      {icon:"family", text:"1 in 20 children has an undetected vision problem"},
      {icon:"eye", text:"Best treated before age 7–8, while vision is developing"},
      {icon:"book", text:"Child-friendly exams, no needles or discomfort"}
    ],
    heroImage: "assets/photos/spec-paediatric-care.jpg",
    heroAlt: "Paediatric eye examination for a young child",
    badge: {icon:"family", bold:"Gentle & Child-Friendly", caption:"Exams designed to put young patients at ease"},
    meta: {
      title: "Paediatric Eye Care | Narayana Netralaya nVision Eye Hospitals & Research Center",
      description: "Gentle, expert eye care for infants, children and teens — squint, lazy eye (amblyopia), refractive errors and vision screening — at Narayana Netralaya nVision."
    },
    overview: {
      heading: "What Is Paediatric Eye Care?",
      paragraphs: [
        "Children's eyes are still developing, and vision problems in early childhood can affect learning, coordination and confidence — often without a child realising or saying anything is wrong. Paediatric eye care covers age-appropriate vision screening from infancy through the teenage years, along with diagnosis and treatment of conditions like squint, lazy eye (amblyopia), refractive errors and blocked tear ducts.",
        "Because a young visual system is still developing, many conditions respond far better to treatment when caught early — which is why regular screening, even without obvious symptoms, matters so much. Our paediatric team uses child-friendly techniques and equipment to keep exams comfortable and stress-free for both children and parents."
      ],
      image: "assets/photos/real/real-pediatric-exam.png",
      imageAlt: "Ophthalmologist examining a young patient",
      statBig: "1 in 20",
      statCaption: "children has an undetected vision problem"
    },
    symptomsIntro: "Children rarely say their vision feels 'wrong' — watch for these signs instead:",
    symptoms: [
      {icon:"doublevision", title:"Eyes That Don't Align", text:"One eye drifting inward, outward, up or down, especially when tired (a sign of squint)."},
      {icon:"eye", title:"Sitting Too Close or Squinting", text:"Sitting very close to the TV, holding books close, or squinting to see clearly."},
      {icon:"tunnel", title:"Closing or Covering One Eye", text:"Frequently covering or closing one eye, which can indicate lazy eye (amblyopia)."},
      {icon:"glare", title:"Excessive Tearing or Sensitivity", text:"Watery eyes or unusual discomfort in bright light."},
      {icon:"book", title:"Difficulty at School", text:"Trouble reading the board, avoiding reading, or falling behind despite trying hard."},
      {icon:"drop", title:"Redness, Crusting or Discharge", text:"Ongoing redness or discharge, which may signal an infection or blocked tear duct."}
    ],
    causesIntro: "Any child can have a vision problem, but screening matters even more for these groups:",
    riskFactors: [
      {icon:"family", label:"Family History of Squint or Lazy Eye"},
      {icon:"calendar", label:"Premature Birth"},
      {icon:"eye", label:"No Eye Check Before School Age"},
      {icon:"injury", label:"Past Eye Injury"},
      {icon:"drop", label:"Frequent Eye Rubbing"},
      {icon:"book", label:"Struggling with Reading"}
    ],
    treatmentIntro: "Most childhood vision problems respond very well to treatment, especially when caught early.",
    treatments: [
      {icon:"eye", title:"Vision Screening & Refraction", text:"Age-appropriate testing to detect refractive errors and prescribe glasses where needed, using techniques suited to young children."},
      {icon:"tunnel", title:"Amblyopia (Lazy Eye) Therapy", text:"Patching, glasses or vision therapy to train the weaker eye while the visual system can still adapt."},
      {icon:"doublevision", title:"Squint (Strabismus) Management", text:"From glasses and exercises to corrective surgery for misaligned eyes, tailored to the child's specific condition."},
      {icon:"drop", title:"Tear Duct & Infection Care", text:"Treatment for blocked tear ducts and common childhood eye infections in a gentle, reassuring setting."}
    ],
    softCta: {heading:"Has your child had an eye check?", text:"Many childhood vision problems have no obvious symptoms — a simple screening can catch them early."},
    techIntro: "Child-friendly diagnostic tools designed to make eye exams comfortable, quick and stress-free.",
    technology: [
      {image:"assets/photos/real/real-pediatric-exam.png", alt:"Child-friendly vision testing", category:"Vision Testing", title:"Picture & Symbol-Based Vision Charts", text:"Age-appropriate vision tests that work even before a child can read letters."},
      {image:"assets/photos/equipment.jpg", alt:"Paediatric refraction equipment", category:"Refraction", title:"Handheld Auto-Refraction", text:"Quick, non-invasive measurement of a child's glasses prescription without needing them to sit still for long."},
      {image:"assets/photos/hero-exam.jpg", alt:"Squint and eye movement assessment", category:"Eye Alignment", title:"Squint & Eye Movement Assessment", text:"Careful evaluation of how a child's eyes move and align together to diagnose squint accurately."}
    ],
    specialistsIntro: "A dedicated paediatric ophthalmology team focused on children's developing vision.",
    specialists: [
      {name:"Dr. Hema P", role:"HOD & Consultant · Paediatric Ophthalmology", img:"assets/photos/doctor-woman.jpg"},
      {name:"Dr. Apoorva A R", role:"Consultant · Paediatric Ophthalmology", img:"assets/photos/doctor-woman.jpg"},
      {name:"Dr. Niveditha B", role:"Consultant · Paediatric Ophthalmology", img:"assets/photos/doctor-woman.jpg"},
      {name:"Dr. Sushmitha M", role:"Consultant · Paediatric Ophthalmology", img:"assets/photos/doctor-woman.jpg"}
    ],
    faqs: [
      {q:"At what age should my child have their first eye check?", a:"By age 3–4, or earlier if you notice anything unusual — sooner still if there's a family history of squint or lazy eye."},
      {q:"Is squint always obvious?", a:"No — mild or intermittent squint can be easy to miss, which is why a professional screening is more reliable than watching at home."},
      {q:"Can lazy eye be treated in older children?", a:"Treatment works best before age 7–8 while vision is still developing, though some improvement is often still possible later."},
      {q:"Will my child need surgery?", a:"Most conditions are managed with glasses, patching or vision therapy — surgery is considered only when needed for squint correction."},
      {q:"Are the exams uncomfortable for young children?", a:"No — our paediatric exams use gentle, child-friendly techniques with no needles or discomfort."}
    ],
    finalCta: {heading:"Give Your Child's Vision the Best Start", text:"Early detection makes the biggest difference — book a paediatric eye screening today.", image:"assets/photos/real/real-pediatric-exam.png"}
  }

};
