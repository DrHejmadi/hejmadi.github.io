// ===== Symptom Data =====
const symptoms = [
  { name: "Alkohol og stoffer – overdosis", category: "alle" },
  { name: "Åndenød", category: "alle" },
  { name: "Ankelskade", category: "alle" },
  { name: "Besvimelse", category: "alle" },
  { name: "Bevidstløshed", category: "alle" },
  { name: "Bidsår – mennesker og dyr", category: "alle" },
  { name: "Bleksem – rød numse", category: "barn" },
  { name: "Blod i afføringen", category: "alle" },
  { name: "Brandsår, ætsning og el-skader", category: "alle" },
  { name: "Brystbetændelse – og revner i brystvorterne", category: "voksen" },
  { name: "Brystsmerter", category: "alle" },
  { name: "Børnesygdomme – med udslæt", category: "barn" },
  { name: "Diabetes – sukkersyge – højt eller lavt blodsukker", category: "alle" },
  { name: "Diarré", category: "alle" },
  { name: "Feber – barn", category: "barn" },
  { name: "Feber – voksen", category: "voksen" },
  { name: "Forgiftning", category: "alle" },
  { name: "Forkølelse", category: "alle" },
  { name: "Forkølelsessår", category: "alle" },
  { name: "Forstoppelse – barn", category: "barn" },
  { name: "Forstoppelse – voksen", category: "voksen" },
  { name: "Fremmedlegeme i halsen", category: "alle" },
  { name: "Genoplivning – hjertestop – barn < 8 år", category: "barn" },
  { name: "Genoplivning – hjertestop – voksne og børn > 8 år", category: "alle" },
  { name: "Glemt P-pille og fortrydelsespiller", category: "voksen" },
  { name: "Graviditet – blødning og smerter", category: "voksen" },
  { name: "Graviditet og graviditetsgener", category: "voksen" },
  { name: "Grædende baby", category: "barn" },
  { name: "Halssmerter", category: "alle" },
  { name: "Hånd- eller fodskade", category: "alle" },
  { name: "Hjertebanken", category: "alle" },
  { name: "Hoste – barn", category: "barn" },
  { name: "Hoste – voksen", category: "voksen" },
  { name: "Hovedpine", category: "alle" },
  { name: "Hovedtraumer", category: "alle" },
  { name: "Hud", category: "alle" },
  { name: "Høfeber", category: "alle" },
  { name: "Influenzavaccination – almindelig sæsoninfluenza", category: "alle" },
  { name: "Insektstik, fjæsing og brandmand", category: "alle" },
  { name: "Knæskade", category: "alle" },
  { name: "Kramper", category: "alle" },
  { name: "Lammelser", category: "alle" },
  { name: "Luftvejsobstruktion", category: "alle" },
  { name: "Lus", category: "alle" },
  { name: "Mavesmerter, barn", category: "barn" },
  { name: "Mavesmerter, dyspepsi", category: "alle" },
  { name: "Mavesmerter, voksen", category: "voksen" },
  { name: "Næseblod – epistaxis", category: "alle" },
  { name: "Opkast/gylp baby", category: "barn" },
  { name: "Opkastninger", category: "alle" },
  { name: "Orm", category: "alle" },
  { name: "Psykiske symptomer", category: "alle" },
  { name: "Rygsmerter", category: "alle" },
  { name: "Rødt hævet ben – rosen eller dyb venetrombose", category: "alle" },
  { name: "Sår og stivkrampevaccination", category: "alle" },
  { name: "Selvmordstruende – suicidalfarlig", category: "alle" },
  { name: "Skovflåt", category: "alle" },
  { name: "Svimmelhed", category: "alle" },
  { name: "Søvnproblemer", category: "alle" },
  { name: "Udskydelse af menstruation", category: "voksen" },
  { name: "Underlivsgener – kvinder", category: "voksen" },
  { name: "Unormal opførsel", category: "alle" },
  { name: "Urinveje", category: "alle" },
  { name: "Øjne", category: "alle" },
  { name: "Øret", category: "alle" },
];

// ===== DOM Elements =====
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');
const fabSymptoms = document.getElementById('fabSymptoms');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const symptomList = document.getElementById('symptomList');
const navLinks = document.querySelectorAll('.nav-link');
const filterTabs = document.querySelectorAll('.filter-tab');
const contentTabs = document.querySelectorAll('.content-tab');
const sections = document.querySelectorAll('.section');
const tabContents = document.querySelectorAll('.tab-content');

let currentFilter = 'alle';

// ===== Menu Toggle =====
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mainNav.classList.toggle('open');
});

// ===== Sidebar Toggle =====
function openSidebar() {
  sidebar.classList.add('open');
  sidebarOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

fabSymptoms.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// ===== Navigation =====
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.dataset.section;

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    sections.forEach(s => s.classList.add('hidden'));
    const target = document.getElementById(sectionId);
    if (target) target.classList.remove('hidden');

    // Close mobile menu
    menuToggle.classList.remove('active');
    mainNav.classList.remove('open');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ===== Content Tabs =====
contentTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    contentTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    tabContents.forEach(tc => tc.classList.remove('active'));
    const target = document.getElementById(`tab-${tab.dataset.tab}`);
    if (target) target.classList.add('active');
  });
});

// ===== Filter Tabs =====
filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentFilter = tab.dataset.filter;
    renderSymptoms();
  });
});

// ===== Search =====
searchInput.addEventListener('input', () => {
  searchClear.classList.toggle('visible', searchInput.value.length > 0);
  renderSymptoms();
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchClear.classList.remove('visible');
  renderSymptoms();
  searchInput.focus();
});

// ===== Render Symptoms =====
function renderSymptoms() {
  const query = searchInput.value.toLowerCase().trim();

  let filtered = symptoms.filter(s => {
    if (currentFilter === 'barn') {
      return s.category === 'barn' || s.category === 'alle';
    }
    if (currentFilter === 'voksen') {
      return s.category === 'voksen' || s.category === 'alle';
    }
    return true;
  });

  if (query) {
    filtered = filtered.filter(s => s.name.toLowerCase().includes(query));
  }

  if (filtered.length === 0) {
    symptomList.innerHTML = '<li class="no-results">Ingen symptomer fundet</li>';
    return;
  }

  symptomList.innerHTML = filtered.map(s =>
    `<li data-name="${s.name}">${s.name}</li>`
  ).join('');

  // Add click handlers
  symptomList.querySelectorAll('li:not(.no-results)').forEach(li => {
    li.addEventListener('click', () => {
      symptomList.querySelectorAll('li').forEach(l => l.classList.remove('active'));
      li.classList.add('active');

      // On mobile, close sidebar
      if (window.innerWidth < 768) {
        closeSidebar();
      }
    });
  });
}

// ===== Handle Desktop Sidebar Visibility =====
function handleResize() {
  if (window.innerWidth >= 768) {
    sidebar.classList.add('open');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
  } else {
    sidebar.classList.remove('open');
  }
}

window.addEventListener('resize', handleResize);

// ===== Init =====
renderSymptoms();
handleResize();
