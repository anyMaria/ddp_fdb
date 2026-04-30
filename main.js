// --- DATA PROGRAMMATION ---
const programmationData = [
  {
    nom: "Balades en fûtreaux",
    jour: "04/07",
    heure: "À partir de 17h",
    lieu: "Embarcadère des Isles",
    description: "Embarquez pour une balade inoubliable au fil de l'eau à bord d'un fûtreau ! Laissez les Mariniers du Jean Bricau vous guider le temps d'une promenade apaisante, idéale pour vous détendre en famille ou entre amis et admirer la beauté de la nature des berges de Cher.",
    categorie: "Activités Nautiques & Nature",
    image: "/photos/futreau.jpg"
  },
  {
    nom: "Restauration - buvette",
    jour: "04/07",
    heure: "17h - 23h45",
    lieu: "Jardins des Isles",
    description: "Que vous ayez un petit creux ou une grande soif, c'est le lieu idéal pour vous régaler et partager un moment convivial en famille ou entre amis entre deux animations.",
    categorie: "Animations & Vie Locale",
    image: "/photos/restauration.jpg"
  },
  {
    nom: "Ener'Véretz",
    jour: "04/07",
    heure: "18h - 19h15",
    lieu: "Jardins des Isles",
    description: "Préparez-vous à rire et à être surpris par les Ener'Véretz, une troupe d'improvisation théâtrale débordante d'énergie et d'imagination !",
    categorie: "Spectacles & Théâtre",
    image: "/photos/ener-veretz.jpg"
  },
  {
    nom: "Station Kaameleon",
    jour: "04/07",
    heure: "19h30 - 21h",
    lieu: "Jardins des Isles",
    description: "L’énergie au service de la voix ! Venez faire la fête avec Station Kaameleon, un groupe plein d'énergie qui vous fera bouger sur tous les rythmes, de la pop douce à un rock puissant.",
    categorie: "Musique & Concerts",
    image: "/photos/station-kaameleon.jpg"
  },
  {
    nom: "DJ Axel",
    jour: "04/07",
    heure: "21h15 - 00h",
    lieu: "Jardins des Isles",
    description: "Des sons pour faire allumer et danser le public !",
    categorie: "Musique & Concerts",
    image: "/photos/dj-axel.jpg"
  },
  {
    nom: "Feux d'artifice musical",
    jour: "04/07",
    heure: "23h",
    lieu: "Jardins des Isles",
    description: "Finissez la journée en beauté avec un magnifique feu d'artifice musical qui illuminera le ciel de mille couleurs ! Laissez-vous porter par la musique et la magie de ce grand spectacle lumineux, un moment inoubliable qui fera briller les yeux de toute la famille.",
    categorie: "Spectacles & Théâtre",
    image: "/photos/feuartifice.JPG"
  },
  {
    nom: "Randonnée pédestre - Trotteur",
    jour: "05/07",
    heure: "10h - 12h",
    lieu: "Départ place du Girouet",
    description: "Randonnée pédestre \"Entre les deux ponts\" de 8 km. Avec l’ASV Les Trotteurs. Inscriptions sur place à partir de 9h45.",
    categorie: "Activités Nautiques & Nature",
    image: "/photos/rando.jpg"
  },
  {
    nom: "Course canoës",
    jour: "05/07",
    heure: "10h - 12h30",
    lieu: "Embarcadère des Isles",
    description: "Le Cher verra s'affronter les meilleurs rameurs lors d'une course de canoës ! Notre animateur déjanté fera de ce rendez-vous un moment de convivialité et d'euphorie. Et qui sait, peut-être apercevrez-vous le fameux Cher-Ness au détour d'un méandre… Enfilez votre plus beau déguisement sur le thème \"Préhistoire\" pour tenter de remporter le prix du meilleur costume !",
    categorie: "Activités Nautiques & Nature",
    image: "/photos/course-canoes.JPG"
  },
  {
    nom: "Initiation à la photo",
    jour: "05/07",
    heure: "10h30 - 11h30 // 14h30 - 15h30 // 16h30-17h30",
    lieu: "Jardins des Isles",
    description: "Le photo club Sels et Pixels propose une initiation prise de vue à l’occasion de la Fête des Berges. Jardins des Isles Rdv devant \"J’aime Le Cher\"<br> Inscription au préalable sur : <br> <a href=\"www.sels-pixels.fr\">www.sels-pixels.fr</a> <br> Gratuit - Toute sorte d’appareil photos",
    categorie: "Animations & Vie Locale",
    image: "/photos/initiation-photo.jpg"
  },
  {
    nom: "Marché des Berges",
    jour: "05/07",
    heure: "10h - 19h",
    lieu: "Quai Henri IV",
    description: "Le Marché des Berges accueille plus de 60 exposants, tous uniques de leur propre manière. Parmi eux on trouve des producteurs locaux, artisanat d'art, bijoux, créations textiles, plantes & fleurs, artistes plasticiens, décos et massages.",
    categorie: "Animations & Vie Locale",
    image: "./photos/marche.jpg"
  },
  {
    nom: "Baldaes en canoës et kayaks",
    jour: "05/07",
    heure: "12H30 - 18H",
    lieu: "Embarcadère des Isles",
    description: "Profitez d'une balade libre en canoë sur le Cher pour découvrir la faune et la flore locales à votre rythme. Avec la participation de Tours & Canoë.",
    categorie: "Activités Nautiques & Nature",
    image: "/photos/course-canoes.JPG"
  },
  {
    nom: "Balades en fûtreaux",
    jour: "05/07",
    heure: "12h30",
    lieu: "Embarcadère des Isles",
    description: "Envie de prendre le large sur les eaux du Cher ? Embarquez à bord de nos fûtreaux, à la découverte des paysages bucoliques qui bordent nos rives. Ouvrez l'œil : le Cher-Ness rôde peut-être dans les parages ! Avec la participation des Mariniers du Jean Bricau.",
    categorie: "Activités Nautiques & Nature",
    image: "/photos/Mariniers.jpg"
  },
  {
    nom: "Maquillage enfants",
    jour: "05/07",
    heure: "14h - 19h",
    lieu: "Jardins des Isles",
    description: "Faites briller les yeux de vos enfants en les emmenant au stand de maquillage pour une transformation magique et colorée !",
    categorie: "Animations & Vie Locale",
    image: "/photos/maquillage.jpg"
  },
  {
    nom: "Démonstration Toutous d'eau",
    jour: "05/07",
    heure: "14h30 - 15h // 16h - 16h30 // 17h30 - 18h30",
    lieu: "Embarcadère des Isles",
    description: "Ne manquez pas les impressionnantes démonstrations des adorables et courageux chiens sauveteurs de sauvetage aquatique, un spectacle fascinant et plein de tendresse qui émerveillera les petits comme les grands.",
    categorie: "Activités Nautiques & Nature",
    image: "/photos/toutous.jpg"
  },
  {
    nom: "Spectacle de La Salt’s Academy",
    jour: "05/07",
    heure: "15h - 15h45 // 18h - 18h45",
    lieu: "Jardins des Isles",
    description: "De pur bonheur, de rythmes endiablés et de chorégraphies qui claquent !",
    categorie: "Spectacles & Théâtre",
    image: "/photos/salts-academy.jpg"
  },
  {
    nom: "Spectacle \"L’Imperial Transkaïros\"",
    jour: "05/07",
    heure: "15h - 15h45 // 17h - 17h45",
    lieu: "Jardins des Isles",
    description: "Spectacle de rue en mouvement dans et autour d’un petit train routier. 12 passagers vont avoir la chance de monter à bord pour Chatanooga, le pays du bonheur éternel. Tandis qu’à l’intérieur les voyageurs vivent un safari sonore, à l’extérieur sont racontées aux spectateurs piétons des anecdotes sur les miracles accomplis lors de précédents voyages.",
    categorie: "Spectacles & Théâtre",
    image: "/photos/Trankairos.jpg"
  },
  {
    nom: "Ateliers natures",
    jour: "05/07",
    heure: "15h - 19h",
    lieu: "Jardins des Isles",
    description: "Partez à la découverte de la faune et de la flore locales au fil d'ateliers pédagogiques et d'expositions consacrées à la richesse de nos écosystèmes. Avec la participation de Couleurs Sauvages et L'Arbre Voyageur.",
    categorie: "Activités Nautiques & Nature",
    image: "/photos/brico-joueurs.jpg"
  },
  {
    nom: "Jeux géants, dessin, maquillage",
    jour: "05/07",
    heure: "14h - 19h",
    lieu: "Jardins des Isles",
    description: "En famille, entre amis, profitez des animations : jeux géants en bois, dessin à la craie, maquillage pour enfant… Avec la participation des Bricau Joueurs, de l’Association des assistantes maternelles de Véretz (ADAM), de Sandrine Le Moënner (maquillage)…",
    categorie: "Animations & Vie Locale",
    image: "/photos/ateliers-nature.jpg"
  },
  {
    nom: "Charcuterie musicale",
    jour: "05/07",
    heure: "16h - 18h // 19h - 22h",
    lieu: "Place Paul Louis Courier",
    description: "Quizz musical interactif déjanté à consommer sans modération !",
    categorie: "Musique & Concerts",
    image: "/photos/charcuterie-musicale.png"
  },
  {
    nom: "Déambulation Samba Alegria",
    jour: "05/07",
    heure: "16h - 16h45 // 18h - 18h45",
    lieu: "Quai Henri IV",
    description: "La batucada Alegria, avec ses chapeaux rouges à plume blanche, enflamme le pavé à chaque passage au rythme vibrant des percussions brésiliennes et des danseuses.",
    categorie: "Musique & Concerts",
    image: "/photos/samba-alegria.jpg"
  },
  {
    nom: "Diego & Joanes",
    jour: "05/07",
    heure: "19h - 20h",
    lieu: "Jardins des Isles",
    description: "Laissez-vous surprendre par Diego & Joanes, un duo d'artistes multi-talents qui va enflammer le festival avec son humour ravageur ! Préparez-vous pour un spectacle de rue hilarant et plein de surprises, où la comédie et la bonne humeur séduiront les petits comme les grands.",
    categorie: "Spectacles & Théâtre",
    image: "/photos/diego-joanes.jpg",
    position: "center top"
  }
];

// --- LOGIQUE D'AFFICHAGE ---
const progContainer = document.getElementById('prog-container');
const btnDays = document.querySelectorAll('.btn-day');
const filterItems = document.querySelectorAll('.filter-item');
const btnToggleFilters = document.getElementById('btn-toggle-filters');
const filtersList = document.getElementById('filters-list');

let currentDay = "04/07";
let activeCategories = new Set();

// Toggle visibility of filters list
if (btnToggleFilters) {
  btnToggleFilters.addEventListener('click', () => {
    filtersList.classList.toggle('open');
  });
}

function renderCards() {
  progContainer.innerHTML = '';
  
  const filteredData = programmationData.filter(item => {
    const matchDay = item.jour === currentDay;
    const matchCat = activeCategories.size === 0 || activeCategories.has(item.categorie);
    return matchDay && matchCat;
  });
  
  if (filteredData.length === 0) {
    progContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; font-size: 1.2rem; color: var(--color-dark-purple);">Aucun événement trouvé pour ces critères.</p>';
    return;
  }

  filteredData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'prog-card';
    
    // Use item.image if available, otherwise use default placeholder
    let eventImg = item.image ? item.image : '/assets/prog-card-default.png';
    // Use item.position if available, otherwise default to center
    let bgPos = item.position ? item.position : 'center';
    
    // Mapping icons for categories
    let iconSrc = '';
    if(item.categorie === 'Activités Nautiques & Nature') iconSrc = '/filters/activites-nautiques-nature.png';
    else if(item.categorie === 'Spectacles & Théâtre') iconSrc = '/filters/spectacles-theatre.png';
    else if(item.categorie === 'Musique & Concerts') iconSrc = '/filters/musique-concerts.png';
    else if(item.categorie === 'Animations & Vie Locale') iconSrc = '/filters/animation-vie-locale.png';
    
    // Formatting hours: replace // with line break
    const formattedHeure = item.heure.replace(/\s?\/\/\s?/g, '<br/>');
    
    card.innerHTML = `
      <div class="prog-img" style="background-image: url('${eventImg}'); background-position: ${bgPos};" data-name="${item.nom}">
        <div class="prog-tag">
          <img src="${iconSrc}" alt="${item.categorie}" />
        </div>
      </div>
      <div class="prog-info" data-name="${item.nom}">
        <h3 class="prog-title">${item.nom}</h3>
        <div class="prog-meta">
          <span class="prog-time">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            ${formattedHeure}
          </span>
          <span class="prog-location">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${item.lieu}
          </span>
        </div>
        <p class="prog-desc">${item.description}</p>
      </div>
    `;
    progContainer.appendChild(card);
  });
}

// Event listeners for day toggle
btnDays.forEach(btn => {
  btn.addEventListener('click', (e) => {
    btnDays.forEach(b => b.classList.remove('active'));
    e.currentTarget.classList.add('active');
    currentDay = e.currentTarget.getAttribute('data-day');
    renderCards();
  });
});

// Event listeners for categories
filterItems.forEach(item => {
  item.addEventListener('click', (e) => {
    const target = e.currentTarget;
    target.classList.toggle('active');
    const cat = target.getAttribute('data-category');
    
    if (activeCategories.has(cat)) {
      activeCategories.delete(cat);
    } else {
      activeCategories.add(cat);
    }
    renderCards();
  });
});

// Initial render
renderCards();

// --- ANIMATIONS & INTERACTIONS ---

// Parallax bubbles in Edito & Valeurs
const parallaxElements = document.querySelectorAll('.bubble, .val-img');
window.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  parallaxElements.forEach(el => {
    const px = parseFloat(el.getAttribute('data-px')) || 0.05;
    const py = parseFloat(el.getAttribute('data-py')) || 0.05;
    
    const offsetX = (x - 0.5) * 100 * px * 10;
    const offsetY = (y - 0.5) * 100 * py * 10;
    
    el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});

// Scroll progress bar logic
const scrollProgressBar = document.getElementById('scroll-progress-bar');
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  if (scrollProgressBar) {
    scrollProgressBar.style.width = scrolled + "%";
  }
});

// Back to top button
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }

  // Toggle color when overlapping with footer
  const footer = document.getElementById('contact');
  if (footer && backToTopBtn) {
    const footerTop = footer.getBoundingClientRect().top;
    const btnBottom = backToTopBtn.getBoundingClientRect().bottom;
    if (footerTop < btnBottom) {
      backToTopBtn.classList.add('alt-color');
    } else {
      backToTopBtn.classList.remove('alt-color');
    }
  }
});

// Accordion logic
const accordionItems = document.querySelectorAll('.accordion-item');

function openAccordion(id) {
  const item = document.getElementById(id);
  if (!item) return;
  
  // Close other items (except always-open)
  accordionItems.forEach(otherItem => {
    if (otherItem !== item && !otherItem.classList.contains('always-open')) {
      otherItem.classList.remove('active');
      otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
    }
  });
  
  // Open current item
  if (!item.classList.contains('always-open')) {
    item.classList.add('active');
    item.querySelector('.accordion-header').setAttribute('aria-expanded', 'true');
  }
}

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  
  header.addEventListener('click', () => {
    // If it's always open, don't do anything
    if (item.classList.contains('always-open')) return;
    
    const isOpen = item.classList.contains('active');
    
    // Close other items (except always-open)
    accordionItems.forEach(otherItem => {
      if (otherItem !== item && !otherItem.classList.contains('always-open')) {
        otherItem.classList.remove('active');
        otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
      }
    });
    
    // Toggle current item
    item.classList.toggle('active');
    header.setAttribute('aria-expanded', !isOpen);
  });
});

// Handle submenu links to accordions
document.querySelectorAll('.submenu a[href^="#accordion-"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href').substring(1);
    openAccordion(id);
  });
});

// Check for hash on load
window.addEventListener('load', () => {
  const hash = window.location.hash.substring(1);
  if (hash.startsWith('accordion-')) {
    openAccordion(hash);
  }
});

// --- SEARCH ENGINE ---
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

const sections = [
  { id: 'edito', title: 'Edito', category: 'Section', keywords: ['mot du maire', 'accueil', 'bienvenue', 'introduction'] },
  { id: 'edito-bubbles', title: 'Chiffres clés', category: 'Section', keywords: ['chiffre', 'numéro', 'données', 'statistiques', 'nombre', 'bubbles'] },
  { id: 'presentation', title: 'Présentation', category: 'Section', keywords: ['festival', 'berges', 'cher', 'histoire', 'concept'] },
  { id: 'mairie', title: 'La mairie de Véretz', category: 'Section', keywords: ['boilerplate', 'municipalité', 'ville', 'commune', 'élus'] },
  { id: 'programmation', title: 'Programmation', category: 'Section', keywords: ['agenda', 'planning', 'horaires', 'concerts', 'spectacles', 'activités'] },
  { id: 'infos', title: 'Infos pratiques', category: 'Section', keywords: ['carte', 'plan', 'accès', 'parking', 'pmr', 'contact', 'presse', 'images', 'drive'] }
];

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 2) {
      searchResults.classList.remove('active');
      searchResults.innerHTML = '';
      return;
    }

    const results = [];

    // Search in sections
    sections.forEach(s => {
      const matchesTitle = s.title.toLowerCase().includes(query);
      const matchesKeywords = s.keywords.some(k => k.toLowerCase().includes(query));
      if (matchesTitle || matchesKeywords) results.push(s);
    });

    // Search in programmation
    programmationData.forEach(p => {
      const matchesName = p.nom.toLowerCase().includes(query);
      const matchesDesc = p.description.toLowerCase().includes(query);
      if (matchesName || matchesDesc) {
        results.push({
          id: 'programmation',
          title: p.nom,
          category: p.categorie,
          snippet: p.description,
          jour: p.jour // Added jour to results
        });
      }
    });

    renderDropdownResults(results);
  });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      const container = document.querySelector('.nav-container');
      if (!e.target.closest('.search-container')) {
        searchResults.classList.remove('active');
        if (window.innerWidth <= 768) {
          container.classList.remove('search-mode');
        }
      }
    });

    // Mobile search button toggle
    const searchBarTrigger = document.getElementById('searchBar');
    const closeSearchBtn = document.getElementById('closeSearch');
    
    if (searchBarTrigger) {
      searchBarTrigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          const container = document.querySelector('.nav-container');
          if (!container.classList.contains('search-mode')) {
            container.classList.add('search-mode');
            searchInput.focus();
            e.stopPropagation();
          }
        }
      });
    }

    if (closeSearchBtn) {
      closeSearchBtn.addEventListener('click', (e) => {
        const container = document.querySelector('.nav-container');
        container.classList.remove('search-mode');
        searchResults.classList.remove('active');
        e.stopPropagation();
      });
    }
  }

function renderDropdownResults(results) {
  if (results.length === 0) {
    searchResults.innerHTML = '<div style="padding: 10px; font-size: 12px; color: #3C2468; opacity: 0.5;">Aucun résultat...</div>';
  } else {
    searchResults.innerHTML = results.slice(0, 8).map(r => `
      <div class="search-result-item" data-id="${r.id}" ${r.jour ? `data-day="${r.jour}"` : ''}>
        <div class="res-cat">${r.category}</div>
        <div class="res-title">${r.title}</div>
        ${r.snippet ? `<div class="res-snippet">${r.snippet}</div>` : ''}
      </div>
    `).join('');
  }
  
  searchResults.classList.add('active');

  document.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-id');
      const targetDay = item.getAttribute('data-day');
      
      searchResults.classList.remove('active');
      searchInput.value = '';

      // If it's a programming event, switch to the correct day
      if (targetId === 'programmation' && targetDay) {
        currentDay = targetDay;
        btnDays.forEach(btn => {
          if (btn.getAttribute('data-day') === targetDay) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
        renderCards();
      }

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        let finalTarget = targetElement;
        let offset = 100;

        // If it's a specific event, try to find its card
        if (targetId === 'programmation' && targetDay) {
          const eventTitle = item.querySelector('.res-title').textContent;
          const cards = progContainer.querySelectorAll('.prog-card');
          const eventCard = Array.from(cards).find(c => 
            c.querySelector('.prog-title').textContent === eventTitle
          );
          if (eventCard) {
            finalTarget = eventCard;
            offset = 150; // Slightly more offset for cards
          }
        }

        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = finalTarget.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// Ensure touch friendliness for flip cards
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
});
