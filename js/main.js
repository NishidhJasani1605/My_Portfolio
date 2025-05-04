// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
} else {
    // Set default theme based on user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    body.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    icon.className = prefersDark ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', newTheme);
    
    // Add transition effect on theme change
    body.classList.add('theme-transition');
    setTimeout(() => {
        body.classList.remove('theme-transition');
    }, 1000);
});

// Project data
const projects = [
    {
        title: 'ClothLoop',
        description: 'A sustainable fashion web app built using competitive programming principles for efficient logic.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Vibe Coding'],
        github: 'https://github.com/NishidhJasani1605/ClothLoop'
    },
    {
        title: 'HRIMWellness',
        description: 'A wellness app focused on health management, developed with a competitive coding mindset.',
        tech: ['Python', 'Flask', 'HTML/CSS', 'Vibe Coding'],
        github: 'https://github.com/NishidhJasani1605/HRIMWellness'
    },
    {
        title: 'DataVizPro',
        description: 'Collaboration on a powerful data visualization tool, applying competitive coding techniques.',
        tech: ['React.js', 'Node.js', 'MongoDB', 'Vibe Coding'],
        github: 'https://github.com/aaditya-desai1/DataVizPro'
    },
    {
        title: 'My Portfolio Website',
        description: 'This portfolio website itself, showcasing my projects and skills, also built using vibe coding.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Vibe Coding'],
        github: 'https://github.com/NishidhJasani1605/My_Portfolio'
    },
    {
        title: 'DSA Learning Path',
        description: 'My journey through Data Structures & Algorithms, focusing on fundamental concepts (not vibe coding).',
        tech: ['C++', 'Java', 'DSA', 'Algorithms'],
        github: 'https://github.com/NishidhJasani1605/DSA'
    }
];

// Technical skills data
const technicalSkills = [
    { name: 'Competitive Coding', level: 85 },
    { name: 'Data Structures & Algorithms', level: 82 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'Python', level: 80 },
    { name: 'AI/ML Basics', level: 70 },
    { name: 'Responsive Design', level: 85 }
];

// Soft skills data
const softSkills = [
    'Problem Solving',
    'Creativity',
    'Communication',
    'Time Management',
    'Adaptability',
    'Teamwork',
    'Analytical Thinking'
];

// Populate projects
function populateProjects() {
    const projectGrid = document.querySelector('.project-grid');
    projectGrid.innerHTML = ''; // Clear existing content

    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-aos', 'fade-up');
        projectCard.setAttribute('data-aos-delay', `${index * 100}`);
        
        projectCard.innerHTML = `
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="btn secondary" target="_blank" rel="noopener">GitHub</a>
                </div>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
}

// Populate skills
function populateSkills() {
    const skillBars = document.querySelector('.skill-bars');
    const softSkillsContainer = document.querySelector('.soft-skills');

    // Technical skills
    skillBars.innerHTML = technicalSkills.map((skill, index) => `
        <div data-aos="fade-right" data-aos-delay="${index * 50}">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span>${skill.name}</span>
                <span>${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 0%"></div>
            </div>
        </div>
    `).join('');

    // Soft skills
    softSkillsContainer.innerHTML = softSkills.map((skill, index) => `
        <div class="soft-skill" data-aos="zoom-in" data-aos-delay="${index * 50}">
            <i class="fas fa-check-circle"></i>
            <h4>${skill}</h4>
        </div>
    `).join('');
}

// Typewriter effect for hero tagline
function typewriterEffect() {
    const tagline = document.querySelector('.hero .tagline');
    const text = tagline.textContent;
    tagline.textContent = '';
    tagline.style.visibility = 'visible';
    
    let i = 0;
    const speed = 50; // typing speed in milliseconds
    
    function type() {
        if (i < text.length) {
            tagline.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Add cursor animation after typing is complete
            tagline.classList.add('typing-complete');
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 800);
}

// Animate skill bars when in viewport
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.parentElement.previousElementSibling.lastElementChild.textContent.replace('%', '');
                entry.target.style.width = `${level}%`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

// Enhanced parallax effect for hero section
function setupParallax() {
    const hero = document.querySelector('.hero');
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        hero.style.backgroundPosition = `${x * 20}% ${y * 20}%`;
    });
}

// Enhanced scroll animations using Intersection Observer
function setupScrollAnimations() {
    // Select all elements with animation classes
    const elementsToAnimate = document.querySelectorAll('[data-aos]');
    
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const delay = el.getAttribute('data-aos-delay') || 0;
                
                setTimeout(() => {
                    el.classList.add('aos-animate');
                }, delay);
                
                // Unobserve after animation is added
                observer.unobserve(el);
            }
        });
    }, options);
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// Apply simple fade-in effect to section titles
function setupSectionTitleAnimations() {
    const sectionTitles = document.querySelectorAll('.section-title');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    sectionTitles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        observer.observe(title);
    });
}

// Initialize AOS animations for our custom observer implementation
function setupAOS() {
    // Add AOS CSS classes
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            [data-aos] {
                opacity: 0;
                transition-property: opacity, transform;
                transition-duration: 0.6s;
                transition-timing-function: ease-out;
            }
            
            [data-aos="fade-up"] {
                transform: translateY(20px);
            }
            
            [data-aos="fade-right"] {
                transform: translateX(-20px);
            }
            
            [data-aos="fade-in"] {
                opacity: 0;
            }
            
            [data-aos="zoom-in"] {
                transform: scale(0.95);
            }
            
            .aos-animate {
                opacity: 1;
                transform: translateY(0) translateX(0) scale(1);
            }
            
            /* Section title fade in */
            .section-title.fade-in {
                opacity: 1;
                transform: translateY(0);
                transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            }
            
            /* Simple typing effect */
            .typing-complete::after {
                content: '|';
                animation: blink 1s infinite;
                margin-left: 2px;
            }
            
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
            
            .theme-transition {
                transition: background-color 0.5s ease, 
                            color 0.5s ease;
            }
            
            .scroll-indicator {
                position: fixed;
                top: 0;
                left: 0;
                height: 3px;
                background: var(--accent-color);
                z-index: 1001;
                width: 0;
                transition: width 0.3s ease;
            }
        </style>
    `);
}

// Performance optimization
function debouncedScrollHandler() {
    let isScrolling;
    window.addEventListener('scroll', () => {
        // Clear previous timeout
        window.clearTimeout(isScrolling);
        
        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(() => {
            const scrollY = window.scrollY;
            
            // Add/remove sticky class to navbar
            const navbar = document.querySelector('.navbar');
            if (scrollY > 50) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
            
            // Update active navigation based on scroll position
            updateActiveNavOnScroll();
        }, 50);
    });
}

// Update active navigation item based on scroll position
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-items a');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSection}`) {
            item.classList.add('active');
        }
    });
}

// Form handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Create mailto URL with form data
    const subject = `Portfolio Contact: ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:nishidhjasani1605@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client with pre-filled information
    window.location.href = mailtoUrl;
    
    // Reset form after short delay (simulate sending)
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            contactForm.reset();
        }, 2000);
    }, 1500);
});

// Animated progress indicator for navigation
function setupScrollIndicator() {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.scrollHeight;
        const scrolled = window.scrollY;
        
        const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;
        scrollIndicator.style.width = `${percentScrolled}%`;
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Highlight active navigation item
            document.querySelectorAll('.nav-items a').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupAOS();
    populateProjects();
    populateSkills();
    setupScrollAnimations();
    animateSkillBars();
    typewriterEffect();
    debouncedScrollHandler();
    setupSectionTitleAnimations();
    setupParallax();
    setupScrollIndicator();
    updateActiveNavOnScroll();
    
    // Add animation attributes to static elements
    document.querySelector('.hero h1').setAttribute('data-aos', 'fade-up');
    document.querySelector('.hero h2').setAttribute('data-aos', 'fade-up');
    document.querySelector('.hero h2').setAttribute('data-aos-delay', '100');
}); 