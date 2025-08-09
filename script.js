// Hamburger menu toggle for all pages
function setupHamburgerMenu() {
  const hamburger = document.getElementById('navbar-hamburger');
  const navLinks = document.getElementById('navbar-links');
  if (!hamburger || !navLinks) return;
  // Remove previous listeners to avoid duplicates
  const newHamburger = hamburger.cloneNode(true);
  hamburger.parentNode.replaceChild(newHamburger, hamburger);
  newHamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });
}

// Language switcher with correct section mapping and translation
const translations = {
  en: {
    hey: 'hey.',
    welcome: "this is my portfolio where i pretend i know exactly what i’m doing just to show off a little.",
    about: "i'm rui gonçalves pereira, a passionate developer with a love for building modern web applications and exploring new technologies. i enjoy solving problems, learning new skills, and collaborating on creative projects. whether it's coding, designing, or tinkering with new tools, i'm always eager to grow and make an impact.",
    cv: 'cv',
    cvdesc: "this is my cv, where i present my best self and hope you don’t ask too many follow-ups.",
    opencv: 'open cv (pdf)',
    skills: 'skills',
    programming: 'programming languages',
    databases: 'databases',
    tools: 'web & dev tools',
    os: 'operating systems',
    hobbies: 'hobbies & interests',
    languages: 'languages',
    certifications: 'certifications',
    programmingList: ['☕ java','💻 javascript','🐍 python','🐘 php','#️⃣ c#'],
    databasesList: ['🗄️ mysql','🗃️ nosql','🍃 mongodb','🖥️ microsoft sql server (mssql)'],
    toolsList: ['🌐 html','🎨 css','🔧 git','📊 bpmn','🐳 docker','📋 jira','🗂️ bitbucket','📑 confluence','🗄️ basecamp','🛠️ telerik'],
    osList: ['🐧 linux','🪟 windows'],
    hobbylist: ['🏋️‍♂️ gym','🏃‍♂️ jogging','⚽ football','💻 programming','🎮 gaming','🧑‍🤝‍🧑 going out with friends','🎬 series & films','👨‍🍳 cooking','📚 reading'],
    langlist: ['🇵🇹 portuguese (native)','🇩🇪 german (native)','🇬🇧 english (advanced, fluent)','🇫🇷 french (conversational)','🇮🇹 italian (conversational)'],
    certlist: ['portuguese c1 (instituto camões)','english c1 (cambridge advanced english)','french b1 (delf)'],
    projects: 'projects',
    projectsHeading: 'projects',
    projectsDesc: 'a selection of my work and experiments:',
    posts: 'posts',
    postsHeading: 'posts',
    postsDesc: 'my thoughts, tutorials, and updates:',
    contact: 'contact',
    name: 'rui gonçalves pereira',
    footerPrivacy: "this site doesn’t collect, store, or share any personal data. no cookies, no trackers, no sneaky stuff.",
    copyright: 'all rights reserved',
    contactHeading: 'contact',
    contactDesc: 'get in touch with me:'
  },
  de: {
    hey: 'hallo.',
    welcome: "das ist mein portfolio, in dem ich so tue, als wüsste ich genau, was ich tue, nur um ein bisschen anzugeben.",
    about: "ich bin rui gonçalves pereira, schüler im 4. jahr an der ims basel und mache derzeit mein praktikum bei smartwork ag in basel. ich arbeite darauf hin, applikationsentwickler zu werden und die fähigkeiten zu erlernen, um nützliche, gut gemachte software zu entwickeln.",
    cv: 'lebenslauf',
    cvdesc: "das ist mein lebenslauf, in dem ich mich von meiner besten seite zeige und hoffe, dass du nicht zu viele rückfragen hast.",
    opencv: 'lebenslauf öffnen (pdf)',
    skills: 'fähigkeiten',
    programming: 'programmiersprachen',
    databases: 'datenbanken',
    tools: 'web- & dev-tools',
    os: 'betriebssysteme',
    hobbies: 'hobbys & interessen',
    languages: 'sprachen',
    certifications: 'zertifikate',
    programmingList: ['☕ java','💻 javascript','🐍 python','🐘 php','#️⃣ c#'],
    databasesList: ['🗄️ mysql','🗃️ nosql','🍃 mongodb','🖥️ microsoft sql server (mssql)'],
    toolsList: ['🌐 html','🎨 css','🔧 git','📊 bpmn','🐳 docker','📋 jira','🗂️ bitbucket','📑 confluence','🗄️ basecamp','🛠️ telerik'],
    osList: ['🐧 linux','🪟 windows'],
    hobbylist: ['🏋️‍♂️ fitnessstudio','🏃‍♂️ joggen','⚽ fussball','💻 programmieren','🎮 gaming','🧑‍🤝‍🧑 mit freunden ausgehen','🎬 serien & filme','👨‍🍳 kochen','📚 lesen'],
    langlist: ['🇵🇹 portugiesisch (muttersprache)','🇩🇪 deutsch (muttersprache)','🇬🇧 englisch (fortgeschritten, fliessend)','🇫🇷 französisch (konversationssicher)','🇮🇹 italienisch (konversationssicher)'],
    certlist: ['portugiesisch c1 (institut camões)','englisch c1 (cambridge advanced english)','französisch b1 (delf)'],
    projects: 'projekte',
    projectsHeading: 'projekte',
    projectsDesc: 'eine auswahl meiner arbeiten und experimente:',
    posts: 'beiträge',
    postsHeading: 'beiträge',
    postsDesc: 'meine gedanken, tutorials und neuigkeiten:',
    contact: 'kontakt',
    name: 'rui gonçalves pereira',
    footerPrivacy: "diese website sammelt, speichert oder teilt keine persönlichen daten. keine cookies, keine tracker, kein schnickschnack.",
    copyright: 'alle rechte vorbehalten',
    contactHeading: 'kontakt',
    contactDesc: 'nimm kontakt mit mir auf:'
  },
  pt: {
    hey: 'olá.',
    welcome: "este é o meu portefólio onde finjo saber exatamente o que estou a fazer só para impressionar um pouco.",
    about: "sou o rui gonçalves pereira, estudante do 4.º ano na ims basel e actualmente a realizar o meu estágio na smartwork ag em basileia. estou a preparar-me para me tornar programador de aplicações e desenvolver as competências para criar software útil e bem feito.",
    cv: 'currículo',
    cvdesc: "este é o meu currículo, onde apresento o meu melhor lado e espero que não faças muitas perguntas.",
    opencv: 'abrir currículo (pdf)',
    skills: 'competências',
    programming: 'linguagens de programação',
    databases: 'bases de dados',
    tools: 'ferramentas web & dev',
    os: 'sistemas operativos',
    hobbies: 'passatempos & interesses',
    languages: 'línguas',
    certifications: 'certificados',
    programmingList: ['☕ java','💻 javascript','🐍 python','🐘 php','#️⃣ c#'],
    databasesList: ['🗄️ mysql','🗃️ nosql','🍃 mongodb','🖥️ microsoft sql server (mssql)'],
    toolsList: ['🌐 html','🎨 css','🔧 git','📊 bpmn','🐳 docker','📋 jira','🗂️ bitbucket','📑 confluence','🗄️ basecamp','🛠️ telerik'],
    osList: ['🐧 linux','🪟 windows'],
    hobbylist: ['🏋️‍♂️ ginásio','🏃‍♂️ corrida','⚽ futebol','💻 programação','🎮 jogos','🧑‍🤝‍🧑 sair com amigos','🎬 séries & filmes','👨‍🍳 cozinhar','📚 ler'],
    langlist: ['🇵🇹 português (nativo)','🇩🇪 alemão (nativo)','🇬🇧 inglês (avançado, fluente)','🇫🇷 francês (conversação)','🇮🇹 italiano (conversação)'],
    certlist: ['português c1 (instituto camões)','inglês c1 (cambridge advanced english)','francês b1 (delf)'],
    projects: 'projetos',
    projectsHeading: 'projetos',
    projectsDesc: 'uma seleção do meu trabalho e experiências:',
    posts: 'publicações',
    postsHeading: 'publicações',
    postsDesc: 'os meus pensamentos, tutoriais e novidades:',
    contact: 'contacto',
    name: 'rui gonçalves pereira',
    footerPrivacy: "este site não recolhe, armazena ou partilha quaisquer dados pessoais. sem cookies, sem rastreadores, sem truques.",
    copyright: 'todos os direitos reservados',
    contactHeading: 'contacto',
    contactDesc: 'entra em contacto comigo:'
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  localStorage.setItem('selectedLang', lang);
  // Navbar
  const navLinks = document.querySelectorAll('.navbar-links a');
  if (navLinks.length === 3) {
    navLinks[0].textContent = t.projects || 'projects';
    navLinks[1].textContent = t.posts || 'posts';
    navLinks[2].textContent = t.contact || 'contact';
  }
  const navTitle = document.querySelector('.navbar-title');
  if (navTitle) navTitle.textContent = t.name || 'rui gonçalves pereira';
  // Detect page type and set correct heading/desc
  const contactLinks = document.querySelector('.contact-links');
  const mainText = document.querySelector('.main-text');
  const projectsHeader = document.querySelector('h2.projects-header');
  const postsHeader = document.querySelector('h2.posts-header');
  if (contactLinks) {
    // Contact page
    const contactHeader = document.querySelector('h2');
    const contactDesc = contactHeader && contactHeader.parentElement.querySelector('p');
    if (contactHeader) contactHeader.textContent = t.contactHeading;
    if (contactDesc) contactDesc.textContent = t.contactDesc;
  } else if (projectsHeader) {
    // Projects page
    projectsHeader.textContent = t.projectsHeading;
    const desc = projectsHeader.parentElement.querySelector('p');
    if (desc && (desc.textContent.trim() === 'here are some of my projects. add your own below!' || desc.textContent.trim() === t.projectsDesc)) desc.textContent = t.projectsDesc;
  } else if (postsHeader) {
    // Posts page
    postsHeader.textContent = t.postsHeading;
    const desc = postsHeader.parentElement.querySelector('p');
    if (desc && (desc.textContent.trim() === 'here are some of my posts. add your own below!' || desc.textContent.trim() === t.postsDesc)) desc.textContent = t.postsDesc;
  } else {
    // Main section, about, cv, etc. (only if present)
    if (mainText && mainText.querySelector('h1')) mainText.querySelector('h1').textContent = t.hey;
    if (mainText && mainText.querySelector('p')) mainText.querySelector('p').textContent = t.welcome;
    if (document.querySelector('.about-section p')) document.querySelector('.about-section p').textContent = t.about;
    if (document.querySelector('.cv-header-text h2')) document.querySelector('.cv-header-text h2').textContent = t.cv;
    if (document.querySelector('.cv-header-text p')) document.querySelector('.cv-header-text p').textContent = t.cvdesc;
    if (document.querySelector('.cv-download-btn')) document.querySelector('.cv-download-btn').textContent = t.opencv;
  }
  // Skills/collapsible
  if (document.querySelectorAll('.cv-section h2')[1]) document.querySelectorAll('.cv-section h2')[1].textContent = t.skills;
  if (document.querySelector('label[for="toggle-languages"]')) document.querySelector('label[for="toggle-languages"]').textContent = t.programming;
  if (document.querySelector('label[for="toggle-databases"]')) document.querySelector('label[for="toggle-databases"]').textContent = t.databases;
  if (document.querySelector('label[for="toggle-tools"]')) document.querySelector('label[for="toggle-tools"]').textContent = t.tools;
  if (document.querySelector('label[for="toggle-os"]')) document.querySelector('label[for="toggle-os"]').textContent = t.os;
  if (document.querySelectorAll('.cv-section h2')[2]) document.querySelectorAll('.cv-section h2')[2].textContent = t.hobbies;
  if (document.querySelectorAll('.cv-section h2')[3]) document.querySelectorAll('.cv-section h2')[3].textContent = t.languages;
  if (document.querySelectorAll('.cv-section h2')[4]) document.querySelectorAll('.cv-section h2')[4].textContent = t.certifications;
  // Programming Languages
  const progList = document.querySelector('ul.skills-list.skills-collapsible-content');
  if (progList) progList.innerHTML = t.programmingList.map(h => `<li>${h}</li>`).join('');
  // Databases
  const dbList = document.querySelectorAll('ul.skills-list.skills-collapsible-content')[1];
  if (dbList) dbList.innerHTML = t.databasesList.map(h => `<li>${h}</li>`).join('');
  // Tools
  const toolsList = document.querySelectorAll('ul.skills-list.skills-collapsible-content')[2];
  if (toolsList) toolsList.innerHTML = t.toolsList.map(h => `<li>${h}</li>`).join('');
  // OS
  const osList = document.querySelectorAll('ul.skills-list.skills-collapsible-content')[3];
  if (osList) osList.innerHTML = t.osList.map(h => `<li>${h}</li>`).join('');
  // Hobbies (find section by heading text)
  const hobbiesSection = Array.from(document.querySelectorAll('.cv-section')).find(sec =>
    sec.querySelector('.cv-header-text h2') && sec.querySelector('.cv-header-text h2').textContent.trim().toLowerCase() === t.hobbies.toLowerCase()
  );
  if (hobbiesSection) {
    const hobbyList = hobbiesSection.querySelector('ul.skills-list');
    if (hobbyList) hobbyList.innerHTML = t.hobbylist.map(h => `<li>${h}</li>`).join('');
  }
  // Languages (find section by heading text)
  const languagesSection = Array.from(document.querySelectorAll('.cv-section')).find(sec =>
    sec.querySelector('.cv-header-text h2') && sec.querySelector('.cv-header-text h2').textContent.trim().toLowerCase() === t.languages.toLowerCase()
  );
  if (languagesSection) {
    const langList = languagesSection.querySelector('ul.skills-list');
    if (langList) langList.innerHTML = t.langlist.map(h => `<li>${h}</li>`).join('');
  }
  // Certifications
  const certList = document.querySelector('.certifications-list');
  if (certList) certList.innerHTML = t.certlist.map(h => `<li>${h}</li>`).join('');
  // Footer privacy notice
  let footerPrivacy = document.querySelector('.footer-privacy');
  if (!footerPrivacy) {
    // If missing, add it to the footer
    const footer = document.querySelector('footer');
    if (footer) {
      footerPrivacy = document.createElement('div');
      footerPrivacy.className = 'footer-privacy';
      footer.insertBefore(footerPrivacy, footer.firstChild);
    }
  }
  if (footerPrivacy) footerPrivacy.textContent = t.footerPrivacy;
  // Copyright
  const footerCopyright = document.querySelector('footer');
  if (footerCopyright) {
    // Remove any existing copyright text nodes except .footer-privacy
    Array.from(footerCopyright.childNodes).forEach(node => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() && !node.previousSibling?.classList?.contains('footer-privacy')) {
        footerCopyright.removeChild(node);
      }
    });
    const copyright = `© rui gonçalves pereira 2025 — ${t.copyright}`;
    footerCopyright.appendChild(document.createTextNode(copyright));
  }
  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function setupLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      setLanguage(btn.dataset.lang);
    });
  });
  // Set default to saved or English
  const saved = localStorage.getItem('selectedLang') || 'en';
  setLanguage(saved);
}

// Run on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    setupHamburgerMenu();
    setupLanguageSwitcher();
    const saved = localStorage.getItem('selectedLang') || 'en';
    setLanguage(saved);
  });
} else {
  setupHamburgerMenu();
  setupLanguageSwitcher();
  const saved = localStorage.getItem('selectedLang') || 'en';
  setLanguage(saved);
}
