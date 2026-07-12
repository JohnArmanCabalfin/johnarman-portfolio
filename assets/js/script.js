document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- mobile menu ---------- */
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
burgerBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  burgerBtn.classList.toggle('open', open);
  burgerBtn.setAttribute('aria-expanded', open);
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  burgerBtn.classList.remove('open');
}));

/* ---------- hero typewriter ---------- */
const typeLine = document.getElementById('typeLine');
const typeText = "whoami — John Arman Cabalfin, Freelancer";
let typeI = 0;
function typeStep(){
  if(typeI <= typeText.length){
    typeLine.textContent = typeText.slice(0, typeI);
    typeI++;
    setTimeout(typeStep, 32);
  }
}
typeStep();

/* ---------- project data ---------- */
const projects = [
  {
    id: "SYS_01",
    status: "FOR DEPLOYMENT",
    name: "Barangay Management System",
    tagline: "Civic tech · Local government portal",
    thumb: "assets/image/Barangay%20System/Home.png",
    stack: ["HTML5","CSS3","JavaScript","Firebase Auth","Firestore","Storage"],
    roles: ["Admin","Resident"],
    description: "A complete online portal for a Philippine barangay (village) office, built as a reusable template — ready to be re-branded for any barangay. Residents register, request official documents, and follow announcements from home, while staff manage everything — residents, requests, officials, content — from one admin dashboard. Firebase is the entire backend; there's no server to maintain, only security rules to enforce who can do what.",
    features: [
      "Resident self-registration with admin approval before an account is activated",
      "Six online document types — Barangay Clearance, Certificate of Residency, Certificate of Indigency, Business Clearance, Cedula, Barangay Permit — each with its own requirements, fee, and turnaround time",
      "Sequential official control numbers issued through a Firestore transaction, so numbers never collide or repeat",
      "Client-side PDF generation for certificates and Barangay IDs — no third-party document service required",
      "Admin-gated password resets — a resident's request only files a ticket; an admin reviews it before any reset goes out",
      "Announcements, events calendar, and a community photo gallery",
      "Full activity log plus JSON backup/restore for admin"
    ],
    screenshots: [
      { src:"assets/image/Barangay%20System/Home.png", caption:"Public home page — stats, services, officials, announcements" },
      { src:"assets/image/Barangay%20System/About1.png", caption:"About the barangay — history & background" },
      { src:"assets/image/Barangay%20System/About2.png", caption:"About the barangay — mission, vision & core values" },
      { src:"assets/image/Barangay%20System/Officials.png", caption:"Barangay officials directory" },
      { src:"assets/image/Barangay%20System/Services.png", caption:"Online services catalog" },
      { src:"assets/image/Barangay%20System/Services2.png", caption:"Service details — requirements & fees" },
      { src:"assets/image/Barangay%20System/Announcement.png", caption:"Announcements" },
      { src:"assets/image/Barangay%20System/Events.png", caption:"Events calendar" },
      { src:"assets/image/Barangay%20System/Gallery.png", caption:"Community photo gallery" },
      { src:"assets/image/Barangay%20System/Contacts.png", caption:"Contact information" },
      { src:"assets/image/Barangay%20System/Login.png", caption:"Resident login" },
      { src:"assets/image/Barangay%20System/Register.png", caption:"Resident registration" },
      { src:"assets/image/Barangay%20System/Resident.png", caption:"Resident dashboard — document request status" },
      { src:"assets/image/Barangay%20System/Admin.png", caption:"Admin dashboard" }
    ]
  },
  {
    id: "SYS_02",
    status: "LIVE",
    name: "Gamexus Prime",
    tagline: "PC game distribution platform",
    liveUrl: "https://gamexus-prime.web.app/",
    thumb: "assets/image/Gamexus/Login.png",
    stack: ["HTML5","CSS3","JavaScript","Firebase Auth","Firestore","EmailJS"],
    roles: ["Member"],
    description: "A members-only PC game downloader — sign in, browse a searchable library of pre-installed and repack titles, and grab install guides and the exact extraction tools you need. Built as a single-page app: one HTML shell with JS-driven section switching, and Firestore behind the scenes for the game catalog and notifications.",
    features: [
      "Search, filter, and sort a large game library by category, platform, or size",
      "Featured collections — PS5, PC exclusives, and curated picks — pulled from Firestore",
      "Built-in software library (creative, productivity, and utility tools) alongside the games",
      "Step-by-step install guide plus direct links to the exact extraction tools needed (WinRAR, 7-Zip)",
      "In-app request form — can't find a game? Request it and get notified when it's added",
      "Google Sign-In alongside email/password auth",
      "Live in-app notifications and a downloadable master game list"
    ],
    screenshots: [
      { src:"assets/image/Gamexus/Home.png", caption:"Home dashboard — featured & categorized games" },
      { src:"assets/image/Gamexus/Login.png", caption:"Sign-in screen" },
      { src:"assets/image/Gamexus/Feature.png", caption:"Featured games carousel" },
      { src:"assets/image/Gamexus/Games.png", caption:"Full games library" },
      { src:"assets/image/Gamexus/Games%20Calcu.png", caption:"Game system requirements checker" },
      { src:"assets/image/Gamexus/Games%20Installation.png", caption:"Step-by-step install guide" },
      { src:"assets/image/Gamexus/Software.png", caption:"Software library" },
      { src:"assets/image/Gamexus/Software%20Calcu.png", caption:"Software system requirements checker" },
      { src:"assets/image/Gamexus/Req.png", caption:"Request-a-game form" },
      { src:"assets/image/Gamexus/Support.png", caption:"Support / help" }
    ]
  },
  {
    id: "SYS_03",
    status: "FOR DEPLOYMENT",
    name: "OJT Management System",
    tagline: "Internship / OJT tracking platform",
    thumb: "assets/image/OJT%20System/Home.png",
    stack: ["HTML5","CSS3","JavaScript","Bootstrap 5","Firebase Auth","Firestore"],
    roles: ["Admin","Coordinator","Teacher","Student"],
    description: "A cloud-based internship management platform that connects students, teachers, and coordinators in one system. Students log attendance and submit journals in real time; teachers and coordinators review requirements and evaluate performance; admins manage schools, departments, and companies from a single dashboard. Modeled on a 15-collection Firestore schema with role-based security rules enforced on every read and write.",
    features: [
      "Real-time attendance (time-in / time-out) with hours-rendered progress tracking",
      "Digital weekly journals reviewed and commented on by coordinators",
      "Requirement uploads with an approve/reject workflow",
      "Evaluation and certificate-of-completion issuance",
      "Role-scoped dashboards — Admin, Coordinator, Teacher, and Student each see only what applies to them",
      "Shared announcements and generated reports across roles",
      "Company and course management for admins, with profile name-change requests routed for admin review"
    ],
    screenshots: [
      { src:"assets/image/OJT%20System/Home.png", caption:"Public landing page" },
      { src:"assets/image/OJT%20System/Features.png", caption:"Key features overview" },
      { src:"assets/image/OJT%20System/About.png", caption:"About page" },
      { src:"assets/image/OJT%20System/Login.png", caption:"Sign-in" },
      { src:"assets/image/OJT%20System/Create.png", caption:"Account registration" },
      { src:"assets/image/OJT%20System/Admin.png", caption:"Admin dashboard" },
      { src:"assets/image/OJT%20System/Coordinator.png", caption:"Coordinator dashboard" },
      { src:"assets/image/OJT%20System/Teacher.png", caption:"Teacher dashboard" },
      { src:"assets/image/OJT%20System/Student.png", caption:"Student dashboard" }
    ]
  },
  {
    id: "SYS_04",
    status: "FOR DEPLOYMENT",
    name: "Home Service System",
    tagline: "Home services · Booking & dispatch platform",
    thumb: "assets/image/Home%20Service%20System/Login.png",
    stack: ["HTML5","CSS3","JavaScript","Firebase Auth","Firestore","Security Rules","jsPDF"],
    roles: ["Admin","Customer","Department Manager","Service Provider"],
    description: "Branded in-app as HomeServe, this is a role-based booking and dispatch platform for home services — plumbing, cleaning, and laundry — connecting customers, field staff, department managers, and admin in one system. A booking moves through a six-stage pipeline (Submitted → Confirmed → Assigned → On the Way → In Progress → Completed), tracked live via Firestore by everyone involved. The admin console goes beyond bookings, too: account-approval queues, on-the-fly department and staff creation, an audit log, and live charts with one-click Excel/PDF export — all on a Firebase backend with no server to maintain.",
    features: [
      "Six-stage booking pipeline — Submitted → Confirmed → Assigned → On the Way → In Progress → Completed — tracked live for customer, staff, and admin alike",
      "Customer signups sit in a Pending Accounts queue until admin approval, before any dashboard access is granted",
      "New staff must submit a document-verification link and get admin sign-off before their dashboard unlocks — enforced in Firestore rules, not just the UI",
      "Admin creates departments and staff accounts on the fly and reassigns staff between departments — no hardcoded department IDs",
      "One staff dashboard serves two views, Department Manager and Service Provider, switched per account by an admin-controlled flag",
      "Live admin analytics — monthly booking trend & status-mix charts — one-click Excel/PDF report export, and an audit log of every admin/staff action",
      "Firestore Security Rules enforce the whole access model server-side — no self-promotion to admin, staff confined to their own department, bookings editable only through the exact stage transitions the UI allows"
    ],
    screenshots: [
      { src:"assets/image/Home%20Service%20System/Login.png", caption:"Sign in / sign up — service overview" },
      { src:"assets/image/Home%20Service%20System/Admin.png", caption:"Admin dashboard — system overview, live charts & report export" },
      { src:"assets/image/Home%20Service%20System/Customer.png", caption:"Customer dashboard — bookings, timeline & quick actions" },
      { src:"assets/image/Home%20Service%20System/Service%20Provider.png", caption:"Service Provider dashboard — today's jobs, schedule & quick actions" }
    ]
  },
  {
    id: "SYS_05",
    status: "FOR DEPLOYMENT",
    name: "ThesisTrack",
    tagline: "Thesis/capstone advising & tracking platform",
    thumb: "assets/image/ThesisTrack/Login.png",
    stack: ["HTML5","CSS3","JavaScript","Firebase Auth","Firestore"],
    roles: ["Admin","Faculty","Student"],
    description: "A role-based platform for managing thesis and capstone work from proposal to defense, connecting students, faculty advisers, and admin in one system. Students track progress and submit their work for review, faculty guide and evaluate the students assigned to them, and admin oversees accounts and activity across the whole program — all on a Firebase backend with no server to maintain.",
    features: [
      "Role-scoped dashboards — Admin, Faculty, and Student each see only what applies to them",
      "Student progress and submission tracking through the thesis/capstone workflow",
      "Faculty review and evaluation tools for advisees",
      "Admin oversight of accounts and program-wide activity",
      "Firebase Authentication with Firestore as the sole backend"
    ],
    screenshots: [
      { src:"assets/image/ThesisTrack/Login.png", caption:"Sign-in" },
      { src:"assets/image/ThesisTrack/admin.png", caption:"Admin dashboard" },
      { src:"assets/image/ThesisTrack/Faculty.png", caption:"Faculty dashboard" },
      { src:"assets/image/ThesisTrack/Student.png", caption:"Student dashboard" }
    ]
  }
];

/* ---------- render project cards ---------- */
function truncate(str, max){
  if(str.length <= max) return str;
  const cut = str.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(' ')) + '…';
}
const grid = document.getElementById('projectsGrid');
grid.innerHTML = projects.map((p, i) => `
  <article class="sys-card">
    <div class="thumb-wrap">
      <img src="${p.thumb}" alt="${p.name} screenshot" loading="lazy">
      <span class="sys-status"><span class="dot"></span>${p.status}</span>
      <span class="sys-id mono">${p.id}</span>
    </div>
    <div class="sys-body">
      <h3>${p.name}</h3>
      <div class="sys-tagline">${p.tagline}</div>
      <p class="sys-desc">${truncate(p.description, 118)}</p>
      <div class="sys-stack">${p.stack.slice(0,4).map(s => `<span>${s}</span>`).join('')}</div>
      <div class="sys-foot">
        <span class="sys-roles">${p.roles.length} role${p.roles.length>1?'s':''}: ${p.roles.join(' / ')}</span>
        <div style="display:flex; gap:8px;">
          ${p.liveUrl ? `<a class="sys-view" href="${p.liveUrl}" target="_blank" rel="noopener" style="text-decoration:none; display:inline-flex; align-items:center;">Live demo ↗</a>` : ''}
          <button class="sys-view" data-index="${i}">View case study</button>
        </div>
      </div>
    </div>
  </article>
`).join('');

/* ---------- modal logic ---------- */
const overlay = document.getElementById('modalOverlay');
const mTitle = document.getElementById('modalTitle');
const mTagline = document.getElementById('modalTagline');
const mDesc = document.getElementById('modalDesc');
const mStack = document.getElementById('modalStack');
const mRoles = document.getElementById('modalRoles');
const mFeatures = document.getElementById('modalFeatures');
const galleryImg = document.getElementById('galleryImg');
const galleryCaption = document.getElementById('galleryCaption');
const galleryThumbs = document.getElementById('galleryThumbs');

let currentProject = null;
let currentSlide = 0;

function openProject(index){
  const p = projects[index];
  currentProject = p;
  currentSlide = 0;
  mTitle.textContent = p.name;
  mTagline.innerHTML = `${p.id} · ${p.tagline}` + (p.liveUrl ? ` &nbsp;·&nbsp; <a href="${p.liveUrl}" target="_blank" rel="noopener" style="color:var(--accent); text-decoration:underline;">Visit live site ↗</a>` : '');
  mDesc.textContent = p.description;
  mStack.innerHTML = p.stack.map(s => `<span>${s}</span>`).join('');
  mRoles.innerHTML = p.roles.map(r => `<span>${r}</span>`).join('');
  mFeatures.innerHTML = p.features.map(f => `<li>${f}</li>`).join('');
  renderSlide();
  galleryThumbs.innerHTML = p.screenshots.map((s,i) => `<img src="${s.src}" data-i="${i}" class="${i===0?'active':''}" alt="thumbnail" loading="lazy">`).join('');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function renderSlide(){
  const s = currentProject.screenshots[currentSlide];
  galleryImg.src = s.src;
  galleryImg.alt = s.caption;
  galleryCaption.textContent = s.caption;
  galleryThumbs.querySelectorAll('img').forEach((im,i) => im.classList.toggle('active', i===currentSlide));
}
function closeModal(){
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

grid.addEventListener('click', e => {
  const btn = e.target.closest('.sys-view');
  if(btn) openProject(Number(btn.dataset.index));
});
document.getElementById('modalClose').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if(e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') closeModal();
  if(!overlay.classList.contains('open')) return;
  if(e.key === 'ArrowRight') { currentSlide = (currentSlide+1) % currentProject.screenshots.length; renderSlide(); }
  if(e.key === 'ArrowLeft') { currentSlide = (currentSlide-1+currentProject.screenshots.length) % currentProject.screenshots.length; renderSlide(); }
});
document.getElementById('galleryPrev').addEventListener('click', () => {
  currentSlide = (currentSlide-1+currentProject.screenshots.length) % currentProject.screenshots.length;
  renderSlide();
});
document.getElementById('galleryNext').addEventListener('click', () => {
  currentSlide = (currentSlide+1) % currentProject.screenshots.length;
  renderSlide();
});
galleryThumbs.addEventListener('click', e => {
  const im = e.target.closest('img');
  if(im){ currentSlide = Number(im.dataset.i); renderSlide(); }
});
