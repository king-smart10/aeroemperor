// AeroEmperor Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Navigation dots interaction
  const navDots = document.querySelectorAll('.nav-dot');
  
  navDots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
      navDots.forEach(function(d) {
        d.classList.remove('active');
      });
      this.classList.add('active');
    });
  });

  // Header scroll effect
  var header = document.querySelector('.header');
  var lastScrollY = window.scrollY;

  window.addEventListener('scroll', function() {
    var currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      header.style.background = 'rgba(4, 4, 5, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
    } else {
      header.style.background = '';
      header.style.backdropFilter = '';
    }
    
    lastScrollY = currentScrollY;
  });

  // Button hover effects
  var buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(function(button) {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Intersection Observer for scroll animations
  var observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe sections for animation
  var sections = document.querySelectorAll('section');
  sections.forEach(function(section) {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Cards hover effect
  var cards = document.querySelectorAll('.card');
  
  cards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Footer links hover effect
  var footerLinks = document.querySelectorAll('.footer-link');
  
  footerLinks.forEach(function(link) {
    link.addEventListener('mouseenter', function() {
      this.style.paddingLeft = '8px';
      this.style.transition = 'padding-left 0.2s ease';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.paddingLeft = '0';
    });
  });

  // Mobile menu toggle
  // Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  nav.classList.toggle('active');
});


  

  // Parallax effect on scroll
  window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    var droneImage = document.querySelector('.drone-img');
    
    if (droneImage) {
      droneImage.style.transform = 'translateY(' + (scrollY * 0.1) + 'px)';
    }
  });

  console.log('AeroEmperor website loaded successfully!');
});

document.addEventListener('DOMContentLoaded', function() {
  const aboutSection = document.getElementById('about');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  const fadeElements = aboutSection.querySelectorAll('.fade-in');
  fadeElements.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', function() {
  const dronesSection = document.getElementById('drones');
  const filterButtons = dronesSection.querySelectorAll('.filter-btn');
  const droneCards = dronesSection.querySelectorAll('.drone-card');

  // Fade-in animation observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  const fadeElements = dronesSection.querySelectorAll('.fade-in');
  fadeElements.forEach((el) => observer.observe(el));

  // Filter functionality
  filterButtons.forEach((button) => {
  button.addEventListener('click', function() {
    const filter = this.dataset.filter;

    // Update active button
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    this.classList.add('active');

    // Filter cards
    droneCards.forEach((card) => {
      if (filter === 'All' || card.dataset.category === filter) {
        card.style.display = 'block';
        setTimeout(() => card.classList.add('visible'), 10);
      } else {
        card.style.display = 'none';
        card.classList.remove('visible');
      }
    });

    // Add category-specific class to section for CSS
    const dronesSection = document.getElementById('drones');
    dronesSection.classList.remove('all-category', 'professional-category', 'racing-category', 'compact-category', 'industrial-category');

    if (filter === 'All') dronesSection.classList.add('all-category');
    else dronesSection.classList.add(filter.toLowerCase() + '-category');
  });
});

  // Card selection
  droneCards.forEach((card) => {
    card.addEventListener('click', function() {
      droneCards.forEach((c) => c.classList.remove('selected'));
      this.classList.add('selected');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const missionsSection = document.getElementById('missions');
  const missionItems = missionsSection.querySelectorAll('.mission-item');
  const detailCard = missionsSection.querySelector('.detail-card');
  const paginationDots = missionsSection.querySelectorAll('.pagination-dot');

  const missionsData = [
    {
      title: 'Aerial Photography',
      description: 'Capture stunning aerial shots for films, real estate, and events with our high-resolution cameras.',
      features: ['8K Video', '48MP Photos', 'HDR Support', 'Live Streaming'],
      image: '/figmaAssets/photography drone.jpg',
      icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'
    },
    {
      title: 'Infrastructure Inspection',
      description: 'Conduct safe and efficient inspections of bridges, power lines, and buildings.',
      features: ['Thermal Imaging', '3D Mapping', 'Zoom Capabilities', 'AI Detection'],
      image: '/figmaAssets/image-1.png',
      icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'
    },
    {
      title: 'Agriculture Monitoring',
      description: 'Monitor crop health, optimize irrigation, and increase yields with precision agriculture.',
      features: ['NDVI Analysis', 'Crop Health Maps', 'Irrigation Planning', 'Pest Detection'],
      image: '/figmaAssets/agric drone.png',
      icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
    },
    {
      title: 'Search & Rescue',
      description: 'Save lives with rapid deployment drones equipped with thermal cameras and spotlights.',
      features: ['Thermal Vision', 'Night Operations', 'GPS Tracking', 'Speaker System'],
      image: '/figmaAssets/search and rescue.png',
      icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
    },
    {
      title: 'Delivery Services',
      description: 'Fast, efficient, and eco-friendly package delivery to remote and urban areas.',
      features: ['5kg Payload', '30km Range', 'Smart Navigation', 'Secure Drop'],
      image: 'figmaAssets/delivery drone.png',
      icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>'
    },
    {
      title: 'Surveying & Mapping',
      description: 'Create accurate topographic maps and 3D models for construction and urban planning.',
      features: ['RTK GPS', 'Photogrammetry', '3D Modeling', 'Point Clouds'],
      image: '/figmaAssets/subtract-2.png',
      icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>'
    }
  ];

  let currentMission = 0;
  let autoPlayInterval;

  // Fade-in animation observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  const fadeElements = missionsSection.querySelectorAll('.fade-in');
  fadeElements.forEach((el) => observer.observe(el));

  // Update detail card
  function updateMissionDetail(index) {
    const mission = missionsData[index];
    const detailIcon = detailCard.querySelector('.detail-icon');
    const detailTitle = detailCard.querySelector('.detail-title');
    const detailDesc = detailCard.querySelector('.detail-desc');
    const featuresList = detailCard.querySelector('.features-list');
    const exploreBtn = detailCard.querySelector('.explore-btn');
    const detailImage = detailCard.querySelector('.detail-image');

    detailIcon.innerHTML = mission.icon;
    detailTitle.textContent = mission.title;
    detailDesc.textContent = mission.description;
    exploreBtn.textContent = `Explore ${mission.title}`;
    detailImage.src = mission.image;
    detailImage.alt = mission.title;

    featuresList.innerHTML = mission.features
      .map((feature) => `<span class="feature-tag">${feature}</span>`)
      .join('');

    // Update pagination
    paginationDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  // Mission item click
  missionItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      missionItems.forEach((m) => m.classList.remove('active'));
      item.classList.add('active');
      currentMission = index;

      // Restart auto-play
      clearInterval(autoPlayInterval);
      startAutoPlay();
      updateMissionDetail(index);
    });
  });

  // Pagination dot click
  paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      missionItems[index].click();
    });
  });

  // Auto-play function
  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      currentMission = (currentMission + 1) % missionsData.length;
      missionItems[currentMission].click();
    }, 5000);
  }

  // Initialize
  startAutoPlay();
});
