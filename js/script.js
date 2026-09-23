// Language and Theme Management
const translations = {
  tr: {
    'Ana Sayfa': 'Ana Sayfa',
    'Hakkımızda': 'Hakkımızda',
    'İletişim': 'İletişim',
    'Home': 'Ana Sayfa',
    'About': 'Hakkımızda',
    'Contact': 'İletişim',
    'Yapay Zeka Tabanlı Müşteri Hizmetlerinde Öncü': 'Yapay Zeka Tabanlı Müşteri Hizmetlerinde Öncü',
    'Target Tech olarak, yapay zeka destekli çözümlerimizle çağrı merkezi sektörüne yenilikçi bir bakış açısı getiriyoruz.': 'Target Tech olarak, yapay zeka destekli çözümlerimizle çağrı merkezi sektörüne yenilikçi bir bakış açısı getiriyoruz.',
    'Daha Fazla Bilgi': 'Daha Fazla Bilgi',
    'Learn More': 'Daha Fazla Bilgi',
    'Çözümlerimiz': 'Çözümlerimiz',
    'Our Solutions': 'Çözümlerimiz',
    'Yapay Zeka Asistanları': 'Yapay Zeka Asistanları',
    'AI Assistants': 'Yapay Zeka Asistanları',
    'Gelişmiş Analitik': 'Gelişmiş Analitik',
    'Advanced Analytics': 'Gelişmiş Analitik',
    'Kalite Kontrol': 'Kalite Kontrol',
    'Quality Control': 'Kalite Kontrol',
    'Target Tech Yazılım': 'Target Tech Yazılım',
    'Target Tech Software': 'Target Tech Yazılım',
    'Hızlı Erişim': 'Hızlı Erişim',
    'Quick Links': 'Hızlı Erişim',
    'Bültene Katıl': 'Bültene Katıl',
    'Join Newsletter': 'Bültene Katıl',
    'Abone Ol': 'Abone Ol',
    'Subscribe': 'Abone Ol',
    '&copy; 2025 Target Tech Yazılım. Tüm Hakları Saklıdır.': '&copy; 2025 Target Tech Yazılım. Tüm Hakları Saklıdır.',
    'Misyonumuz': 'Misyonumuz',
    'Vizyonumuz': 'Vizyonumuz',
    'Değerlerimiz': 'Değerlerimiz',
    'Tarihçemiz': 'Tarihçemiz',
    'Yönetim Ekibimiz': 'Yönetim Ekibimiz',
    'İletişim Bilgilerimiz': 'İletişim Bilgilerimiz',
    'Bize Ulaşın': 'Bize Ulaşın',
    'Konumumuz': 'Konumumuz',
    'Ad Soyad': 'Ad Soyad',
    'E-posta': 'E-posta',
    'Telefon': 'Telefon',
    'Mesajınız': 'Mesajınız',
    'Gönder': 'Gönder',
    'Şirket Adı': 'Şirket Adı',
    'Adres': 'Adres',
    'Target Tech Yazılım Sanayi Ve Ticaret Limited Şirketi': 'Target Tech Yazılım Sanayi Ve Ticaret Limited Şirketi',
    'Barış Mah. Koşu Yolu Cad. ARGE VE İNOVASYON Binası No 26 İç Kapı No:48 Gebze/Kocaeli': 'Barış Mah. Koşu Yolu Cad. ARGE VE İNOVASYON Binası No 26 İç Kapı No:48 Gebze/Kocaeli',
    'En son haberler ve güncellemeler için abone olun.': 'En son haberler ve güncellemeler için abone olun.',
    'İnovasyon': 'İnovasyon',
    'Veri Odaklılık': 'Veri Odaklılık',
    'Müşteri Odaklılık': 'Müşteri Odaklılık',
    'Güvenilirlik': 'Güvenilirlik',
    'Target İletişim\'in Kuruluşu': 'Target İletişim\'in Kuruluşu',
    'Sektörde Hızlı Büyüme': 'Sektörde Hızlı Büyüme',
    'Teknoloji Vizyonu': 'Teknoloji Vizyonu',
    'Target Tech\'in Kuruluşu': 'Target Tech\'in Kuruluşu',
    'İlk Prototip': 'İlk Prototip',
    'Yakında...': 'Yakında...',
    'Şirket Tanıtımı': 'Şirket Tanıtımı',
    'Target Tech\'in vizyonunu ve misyonunu öğrenin': 'Target Tech\'in vizyonunu ve misyonunu öğrenin',
    '*Lütfen yukarıdaki videoyu kendi kurumsal tanıtım videosu ile değiştiriniz': '*Lütfen yukarıdaki videoyu kendi kurumsal tanıtım videosu ile değiştiriniz',
  },
  en: {
    'Ana Sayfa': 'Home',
    'Hakkımızda': 'About',
    'İletişim': 'Contact',
    'Home': 'Home',
    'About': 'About',
    'Contact': 'Contact',
    'Yapay Zeka Tabanlı Müşteri Hizmetlerinde Öncü': 'AI-Powered Customer Service Leader',
    'Target Tech olarak, yapay zeka destekli çözümlerimizle çağrı merkezi sektörüne yenilikçi bir bakış açısı getiriyoruz.': 'As Target Tech, we bring innovative solutions to the call center industry with our AI-powered solutions.',
    'Daha Fazla Bilgi': 'Learn More',
    'Learn More': 'Learn More',
    'Çözümlerimiz': 'Our Solutions',
    'Our Solutions': 'Our Solutions',
    'Yapay Zeka Asistanları': 'AI Assistants',
    'AI Assistants': 'AI Assistants',
    'Gelişmiş Analitik': 'Advanced Analytics',
    'Advanced Analytics': 'Advanced Analytics',
    'Kalite Kontrol': 'Quality Control',
    'Quality Control': 'Quality Control',
    'Target Tech Yazılım': 'Target Tech Software',
    'Target Tech Software': 'Target Tech Software',
    'Hızlı Erişim': 'Quick Links',
    'Quick Links': 'Quick Links',
    'Bültene Katıl': 'Join Newsletter',
    'Join Newsletter': 'Join Newsletter',
    'Abone Ol': 'Subscribe',
    'Subscribe': 'Subscribe',
    '&copy; 2025 Target Tech Yazılım. Tüm Hakları Saklıdır.': '&copy; 2025 Target Tech Software. All Rights Reserved.',
    'Misyonumuz': 'Our Mission',
    'Vizyonumuz': 'Our Vision',
    'Değerlerimiz': 'Our Values',
    'Tarihçemiz': 'Our History',
    'Yönetim Ekibimiz': 'Our Management Team',
    'İletişim Bilgilerimiz': 'Our Contact Information',
    'Bize Ulaşın': 'Contact Us',
    'Konumumuz': 'Our Location',
    'Ad Soyad': 'Full Name',
    'E-posta': 'Email',
    'Telefon': 'Phone',
    'Mesajınız': 'Your Message',
    'Gönder': 'Send',
    'Şirket Adı': 'Company Name',
    'Adres': 'Address',
    'Target Tech Yazılım Sanayi Ve Ticaret Limited Şirketi': 'Target Tech Software Industry and Trade Limited Company',
    'Barış Mah. Koşu Yolu Cad. ARGE VE İNOVASYON Binası No 26 İç Kapı No:48 Gebze/Kocaeli': 'Barış Mah. Koşu Yolu Cad. R&D AND INNOVATION Building No 26 Interior Door No:48 Gebze/Kocaeli',
    'En son haberler ve güncellemeler için abone olun.': 'Subscribe for latest news and updates.',
    'İnovasyon': 'Innovation',
    'Veri Odaklılık': 'Data-Driven Approach',
    'Müşteri Odaklılık': 'Customer Focus',
    'Güvenilirlik': 'Reliability',
    'Target İletişim\'in Kuruluşu': 'Establishment of Target Communication',
    'Sektörde Hızlı Büyüme': 'Rapid Growth in the Sector',
    'Teknoloji Vizyonu': 'Technology Vision',
    'Target Tech\'in Kuruluşu': 'Establishment of Target Tech',
    'İlk Prototip': 'First Prototype',
    'Yakında...': 'Coming Soon...',
    'Şirket Tanıtımı': 'Company Introduction',
    'Target Tech\'in vizyonunu ve misyonunu öğrenin': 'Learn about Target Tech\'s vision and mission',
    '*Lütfen yukarıdaki videoyu kendi kurumsal tanıtım videosu ile değiştiriniz': '*Please replace the video above with your corporate introduction video',
  }
};

let currentLanguage = localStorage.getItem('language') || 'tr';
let isDarkMode = localStorage.getItem('darkMode') !== 'false'; // Default dark mode ON

// ========== Custom Cursor System ==========
const CustomCursor = {
  cursor: null,
  x: 0,
  y: 0,
  isHovering: false,
  isDesktop: true,
  animationFrameId: null,

  init() {
    // console.info('CustomCursor.init called');
    
    // Mobil cihazlarda custom cursor'u devre dışı bırak
    this.isDesktop = window.matchMedia('(min-width: 769px)').matches;
    console.log('isDesktop:', this.isDesktop);
    
    if (!this.isDesktop) {
      console.log('Mobile device detected, cursor disabled');
      return;
    }

    // Prevent duplicate initialization
    if (this.cursor) {
      console.log('CustomCursor already initialized');
      return;
    }

    // Custom cursor element oluştur
    this.cursor = document.createElement('div');
    this.cursor.className = 'custom-cursor';
    // Start hidden/offscreen to avoid appearing at top-left before first mousemove
    this.cursor.style.opacity = '0';
    this.cursor.style.left = '-9999px';
    this.cursor.style.top = '-9999px';
    document.body.appendChild(this.cursor);
    this.hasMoved = false;
    console.log('✓ Cursor element created and appended (hidden)');

    // Event listeners
    document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    document.addEventListener('mouseenter', () => this.show());
    document.addEventListener('mouseleave', () => this.hide());

    // Hover elemanları tespit et
    this.setupHoverDetection();
    console.log('✓ Hover detection setup done');

    // Responsive kontrol (debounced)
    this._debouncedCheck = debounce(() => this.checkResponsive(), 200);
    window.addEventListener('resize', this._debouncedCheck);
  },

  handleMouseMove(e) {
    this.x = e.clientX;
    this.y = e.clientY;

    // On first mouse movement, reveal cursor
    if (!this.hasMoved) {
      this.hasMoved = true;
      this.show();
    }

    if (!this.animationFrameId) {
      this.animationFrameId = requestAnimationFrame(() => {
        this.updatePosition();
        this.animationFrameId = null;
      });
    }
  },

  updatePosition() {
    if (!this.cursor) return;
    // Position using left/top so we don't overwrite CSS translate(-50%,-50%)
    this.cursor.style.left = `${this.x}px`;
    this.cursor.style.top = `${this.y}px`;
  },

  setupHoverDetection() {
    const hoverElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, ' +
      '.feature-box, .team-member, .value-item, .card, ' +
      '.btn, .toggle-btn, .burger, ' +
      '.nav-links a, .contact-form input, .contact-form textarea, .contact-form button, ' +
      '[class*="button"], [class*="link"], [class*="btn"], ' +
      'a[href], button:not([disabled])'
    );

    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', (e) => this.setHovering(true, e.currentTarget));
      el.addEventListener('mouseleave', (e) => this.setHovering(false, e.currentTarget));
    });
    
    // Dinamik olarak eklenen elementler için observer
    const observer = new MutationObserver(() => {
      // Her yeni element eklendiğinde hover detection'ı yenile
      const newElements = document.querySelectorAll(
        'a, button, input, [role="button"]'
      );
      newElements.forEach(el => {
        if (!el._cursorListenerAdded) {
          el.addEventListener('mouseenter', (e) => this.setHovering(true, e.currentTarget));
          el.addEventListener('mouseleave', (e) => this.setHovering(false, e.currentTarget));
          el._cursorListenerAdded = true;
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Note: headset icon will be used for all hover targets (handled in setHovering)
  },


  setHovering(isHovering, target = null) {
    if (!this.cursor) return;
    
    this.isHovering = isHovering;
    
    if (isHovering) {
      this.cursor.classList.add('hovering');
      this.cursor.classList.add('headset');
      // Determine accent color from hovered target (fallback to theme accent)
      let accentOuter = 'rgba(0, 212, 255, 0.7)';
      let accentInner = 'rgba(0, 212, 255, 0.4)';
      try {
        if (target) {
          const comp = getComputedStyle(target).color || '';
          if (comp.startsWith('rgb')) {
            const nums = comp.match(/\d+/g) || [0,212,255];
            accentOuter = `rgba(${nums[0]}, ${nums[1]}, ${nums[2]}, 0.8)`;
            accentInner = `rgba(${nums[0]}, ${nums[1]}, ${nums[2]}, 0.45)`;
          } else {
            const rootAccent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00d4ff';
            // simple hex -> rgba
            const hex = rootAccent.replace('#','');
            if (hex.length === 6) {
              const r = parseInt(hex.substring(0,2),16);
              const g = parseInt(hex.substring(2,4),16);
              const b = parseInt(hex.substring(4,6),16);
              accentOuter = `rgba(${r}, ${g}, ${b}, 0.8)`;
              accentInner = `rgba(${r}, ${g}, ${b}, 0.45)`;
            }
          }
        }
      } catch(e) {
        // ignore and use defaults
      }
      // apply color to cursor so SVG (currentColor) matches glow
      try {
        this.cursor.style.color = accentOuter;
      } catch(e) {}
      this.cursor.style.boxShadow = `0 0 25px 6px ${accentOuter}, inset 0 0 15px ${accentInner}`;
    } else {
      this.cursor.classList.remove('hovering');
      this.cursor.classList.remove('headset');
      this.cursor.style.boxShadow = '0 0 15px 3px rgba(0, 212, 255, 0.5)';
      // reset color
      try { this.cursor.style.color = ''; } catch(e) {}
    }
  },

  show() {
    if (this.cursor) {
      this.cursor.style.opacity = '1';
    }
  },

  hide() {
    if (this.cursor) {
      this.cursor.style.opacity = '0';
    }
  },

  checkResponsive() {
    const wasDesktop = this.isDesktop;
    this.isDesktop = window.matchMedia('(min-width: 769px)').matches;

    if (wasDesktop && !this.isDesktop) {
      // Desktop'tan mobile'a geçiş - cursor'u kaldır
      if (this.cursor) this.cursor.remove();
      this.cursor = null;
    } else if (!wasDesktop && this.isDesktop) {
      // Mobile'dan desktop'a geçiş - cursor'u yeniden oluştur
      this.init();
    }
  },

  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.cursor) {
      this.cursor.remove();
    }
  }
};

// Small utility: debounce to avoid excessive calls on resize/scroll
function debounce(fn, wait = 150) {
  let t = null;
  return function(...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

// Initialize theme and language
document.addEventListener('DOMContentLoaded', () => {
  // Initialize UI features
  // Ensure body has matching classes for both dark and light states
  document.body.classList.toggle('dark-mode', isDarkMode);
  document.body.classList.toggle('light-mode', !isDarkMode);
  
  // 2. Theme butonlarını setup et
  setupToggleButtons();
  
  // 3. UI butonlarını güncelle
  updateThemeButtons();
  updateLanguageButtons();
  updateLanguage(currentLanguage);
  
  // 4. Custom Cursor başlat - JavaScript ile headset cursor animasyonu
  try {
    CustomCursor.init();
  } catch (e) {
    console.warn('CustomCursor failed to initialize', e);
  }
  
  // 5. Diğer setup'lar
  setupMobileMenu();
  setupSmoothScroll();
  setupContactForm();
  // 6. Chat widget
  try { createChatWidget(); } catch(e) { console.warn('Chat widget init failed', e); }
  // Initialize AOS only if available
  if (window.AOS && typeof AOS.init === 'function') {
    AOS.init({ duration: 900, once: true, offset: 90 });
  }
});

// Simple chat widget (front-end only)
function createChatWidget() {
  // If user disabled chat permanently, ensure a small reopen button exists and exit
  if (localStorage.getItem('siteChatDisabled') === 'true') {
    ensureReopenButton();
    return;
  }
  if (document.querySelector('.chat-toggle-btn')) return; // already added

  // Toggle button
  const btn = document.createElement('button');
  btn.className = 'chat-toggle-btn';
  btn.setAttribute('aria-label', 'Chat');
  btn.innerHTML = '<i class="fas fa-headset"></i>';
  document.body.appendChild(btn);

  // Panel
  const panel = document.createElement('div');
  panel.className = 'chat-panel';
  panel.style.display = 'none';
  panel.innerHTML = `
    <div class="chat-header">Canlı Destek <button class="close-chat" title="Kapat" style="float:right;background:transparent;border:none;color:inherit;cursor:pointer;margin-left:8px;">✕</button><button class="clear-chat" title="Temizle" style="float:right;background:transparent;border:none;color:inherit;cursor:pointer;">Temizle</button></div>
    <div class="chat-messages"></div>
    <div class="chat-input">
      <input type="text" placeholder="Mesajınızı yazın..." />
      <button class="send">Gönder</button>
    </div>
  `;
  document.body.appendChild(panel);

  const messages = panel.querySelector('.chat-messages');
  const input = panel.querySelector('input');
  const sendBtn = panel.querySelector('button.send');

  function appendMessage(text, from='user'){
    const el = document.createElement('div');
    el.style.margin = '8px 0';
    el.style.padding = '8px 10px';
    el.style.borderRadius = '10px';
    el.style.maxWidth = '82%';
    if (from==='user'){
      el.style.background = 'linear-gradient(90deg,#00d4ff,#0099cc)';
      el.style.color = '#032129';
      el.style.marginLeft = 'auto';
    } else {
      el.style.background = 'rgba(255,255,255,0.04)';
      el.style.color = '#dff9ff';
      el.style.marginRight = 'auto';
    }
    el.textContent = text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
    // persist
    try { 
      const stored = JSON.parse(localStorage.getItem('siteChatMessages') || '[]');
      stored.push({text, from, t: Date.now()});
      localStorage.setItem('siteChatMessages', JSON.stringify(stored));
    } catch(e) {}
  }

  function renderStored() {
    try {
      const stored = JSON.parse(localStorage.getItem('siteChatMessages') || '[]');
      stored.forEach(m => appendMessage(m.text, m.from));
    } catch(e) {}
  }

  // clear history button
  const clearBtn = panel.querySelector('.clear-chat');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      localStorage.removeItem('siteChatMessages');
      messages.innerHTML = '';
    });
  }
  const closeBtn = panel.querySelector('.close-chat');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      try { localStorage.setItem('siteChatDisabled', 'true'); } catch(e) {}
      // remove panel and toggle button
      panel.remove();
      if (btn && btn.remove) btn.remove();
      ensureReopenButton();
    });
  }

  btn.addEventListener('click', () => {
    if (panel.style.display === 'none') {
      panel.style.display = 'flex';
      input.focus();
    } else {
      panel.style.display = 'none';
    }
  });

  sendBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) return;
    appendMessage(text, 'user');
    input.value = '';
    // canned bot reply
    setTimeout(() => appendMessage('Teşekkürler, en kısa sürede size döneceğiz. (Örnek cevap)', 'bot'), 700 + Math.random()*700);
  });

  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendBtn.click(); });

  // load stored
  renderStored();
}

// Ensure a small reopen button exists and is visible when chat is disabled
function ensureReopenButton(){
  if (document.querySelector('.chat-toggle-btn')) return; // widget active
  const existing = document.querySelector('.chat-reopen-btn');
  if (existing) { existing.style.display = 'flex'; return; }
  const reopen = document.createElement('button');
  reopen.className = 'chat-reopen-btn';
  reopen.title = 'Canlı Desteği Aç';
  reopen.innerHTML = '<i class="fas fa-headset"></i>';
  reopen.style.display = 'flex';
  document.body.appendChild(reopen);
  reopen.addEventListener('click', () => {
    try { localStorage.removeItem('siteChatDisabled'); } catch(e) {}
    reopen.remove();
    createChatWidget();
  });
}

// Theme Toggle
function initializeTheme() {
  document.body.classList.toggle('dark-mode', isDarkMode);
  document.body.classList.toggle('light-mode', !isDarkMode);
  updateThemeButtons();
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  document.body.classList.toggle('light-mode', !isDarkMode);
  localStorage.setItem('darkMode', isDarkMode);
  updateThemeButtons();
}

function updateThemeButton() {
  updateThemeButtons();
}

// Language Toggle
function initializeLanguage() {
  updateLanguage(currentLanguage);
  updateLanguageButtons();
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'tr' ? 'en' : 'tr';
  localStorage.setItem('language', currentLanguage);
  updateLanguage(currentLanguage);
  updateLanguageButtons();
}

function updateLanguage(lang) {
  document.querySelectorAll('[data-tr][data-en]').forEach(element => {
    const key = lang === 'tr' ? 'data-tr' : 'data-en';
    const text = element.getAttribute(key);
    if (text) {
      if (element.innerHTML && element.querySelector('i')) {
        const icon = element.querySelector('i');
        const iconHTML = icon.outerHTML;
        element.innerHTML = iconHTML + text;
      } else if (element.innerHTML && element.querySelector('img')) {
        const img = element.querySelector('img');
        const imgHTML = img.outerHTML;
        element.innerHTML = imgHTML + text;
      } else {
        element.textContent = text;
      }
    }
  });

  // Update document language
  document.documentElement.lang = lang;
}

function updateLanguageButton() {
  updateLanguageButtons();
}

// Setup Toggle Buttons
function setupToggleButtons() {
  // Theme toggle - basit ve direkt
  const themeLightBtn = document.getElementById('themeLightBtn');
  const themeDarkBtn = document.getElementById('themeDarkBtn');
  const langTrBtn = document.getElementById('langTrBtn');
  const langEnBtn = document.getElementById('langEnBtn');

  if (themeLightBtn) {
    themeLightBtn.addEventListener('click', () => {
      isDarkMode = false;
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('darkMode', 'false');
      updateThemeButtons();
      console.log('🌞 Light mode ON', isDarkMode);
    });
  }
  if (themeDarkBtn) {
    themeDarkBtn.addEventListener('click', () => {
      isDarkMode = true;
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      localStorage.setItem('darkMode', 'true');
      updateThemeButtons();
      console.log('🌙 Dark mode ON', isDarkMode);
    });
  }
  if (langTrBtn) {
    langTrBtn.addEventListener('click', () => {
      currentLanguage = 'tr';
      localStorage.setItem('language', 'tr');
      updateLanguage('tr');
      updateLanguageButtons();
      console.log('🇹🇷 Turkish', currentLanguage);
    });
  }
  if (langEnBtn) {
    langEnBtn.addEventListener('click', () => {
      currentLanguage = 'en';
      localStorage.setItem('language', 'en');
      updateLanguage('en');
      updateLanguageButtons();
      console.log('🇬🇧 English', currentLanguage);
    });
  }
}

// Update theme button states
function updateThemeButtons() {
  const themeLightBtn = document.getElementById('themeLightBtn');
  const themeDarkBtn = document.getElementById('themeDarkBtn');
  
  if (themeLightBtn && themeDarkBtn) {
    if (isDarkMode) {
      themeDarkBtn.classList.add('active');
      themeLightBtn.classList.remove('active');
    } else {
      themeLightBtn.classList.add('active');
      themeDarkBtn.classList.remove('active');
    }
  }
}

// Update language button states
function updateLanguageButtons() {
  const langTrBtn = document.getElementById('langTrBtn');
  const langEnBtn = document.getElementById('langEnBtn');
  
  if (langTrBtn && langEnBtn) {
    if (currentLanguage === 'tr') {
      langTrBtn.classList.add('active');
      langEnBtn.classList.remove('active');
    } else {
      langEnBtn.classList.add('active');
      langTrBtn.classList.remove('active');
    }
  }
}

// Mobile Menu Setup
function setupMobileMenu() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  if (burger) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
      });
    });
  }
}

// Smooth Scroll
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Scroll animations for elements
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.feature-box, .team-member, .value-item, .philosophy-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });
}

// Call observer after page load
window.addEventListener('load', observeElements);

function autoplayVideoOnScroll() {
  const videoContainer = document.querySelector('.video-poster-link');
  const videoFrame = videoContainer?.querySelector('iframe');

  if (!videoContainer || !videoFrame) return;

  const videoSrc = videoContainer.dataset.videoSrc;
  if (!videoSrc) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      if (!videoFrame.src) {
        const origin = window.location.origin || 'http://localhost';
        const autoplayUrl = `${videoSrc}&origin=${encodeURIComponent(origin)}`;
        videoFrame.src = autoplayUrl;
        videoFrame.muted = true;
      }

      videoContainer.classList.add('is-loaded');
      observer.unobserve(videoContainer);
    });
  }, {
    threshold: 0.4
  });

  observer.observe(videoContainer);
}

window.addEventListener('load', autoplayVideoOnScroll);

// Typing effect for hero title
function typeEffect() {
  const title = document.querySelector('.hero-content h2');
  if (!title) return;
  
  const text = title.textContent;
  title.textContent = '';
  let index = 0;

  function type() {
    if (index < text.length) {
      title.textContent += text.charAt(index);
      index++;
      setTimeout(type, 50);
    }
  }

  type();
}

window.addEventListener('load', typeEffect);

function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const submitBtn = form.querySelector('button[type="submit"]');
  
  // Real-time validation
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) {
        validateField(input);
      }
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validate all fields
    let isValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    if (!isValid) {
      alert('Lütfen tüm alanları doğru bir şekilde doldurunuz.');
      return;
    }

    const payload = {
      name: form.name?.value.trim() || '',
      email: form.email?.value.trim() || '',
      phone: form.phone?.value.trim() || '',
      message: form.message?.value.trim() || ''
    };

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
    }

    try {
      const res = await fetch('/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || 'İstek başarısız');
      }

      // Success notification
      showNotification('✓ Mesajınız başarıyla gönderildi. Teşekkürler!', 'success');
      form.reset();
      inputs.forEach(input => input.classList.remove('error'));
    } catch (err) {
      showNotification('❌ ' + (err.message || 'Gönderim sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.'), 'error');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Gönder';
      }
    }
  });
}

function validateField(field) {
  const value = field.value.trim();
  const errorDiv = field.parentElement.querySelector('.form-error');
  
  if (!value) {
    showFieldError(field, 'Bu alan boş bırakılamaz.');
    return false;
  }

  if (field.type === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showFieldError(field, 'Geçerli bir e-posta adresi giriniz.');
      return false;
    }
  }

  if (field.name === 'phone' && value) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (value.length < 10 || !phoneRegex.test(value)) {
      showFieldError(field, 'Geçerli bir telefon numarası giriniz.');
      return false;
    }
  }

  if (field.name === 'message' && value.length < 10) {
    showFieldError(field, 'Mesaj en az 10 karakter olmalıdır.');
    return false;
  }

  clearFieldError(field);
  return true;
}

function showFieldError(field, message) {
  field.classList.add('error');
  const errorDiv = field.parentElement.querySelector('.form-error');
  if (errorDiv) {
    errorDiv.textContent = message;
  }
}

function clearFieldError(field) {
  field.classList.remove('error');
  const errorDiv = field.parentElement.querySelector('.form-error');
  if (errorDiv) {
    errorDiv.textContent = '';
  }
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#4CAF50' : '#f44336'};
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 10001;
    animation: slideInRight 0.4s ease-out;
    font-weight: 500;
    max-width: 400px;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.4s ease-out';
    setTimeout(() => notification.remove(), 400);
  }, 3000);
}
