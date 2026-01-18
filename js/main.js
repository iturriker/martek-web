// FOOTER - Update year
function getYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// HEADER - Hide on scroll down
const header = document.getElementById("header");
let lastScroll = 0;

function handleHeaderScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove("hidden");
        return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }

    lastScroll = currentScroll;
}

// MOBILE MENU - Hamburger toggle
const menuToggle = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.header-nav');

function toggleMobileMenu() {
    menuToggle.classList.toggle('active');
    headerNav.classList.toggle('active');
    document.body.style.overflow = headerNav.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    menuToggle.classList.remove('active');
    headerNav.classList.remove('active');
    document.body.style.overflow = '';
}

if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking on a link
    const navLinks = headerNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && headerNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

// BACK TO TOP BUTTON
const backToTopButton = document.querySelector('.back-to-top');

function handleBackToTop() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

if (backToTopButton) {
    backToTopButton.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleBackToTop);
}

// ACTIVE PAGE HIGHLIGHT
function highlightActivePage() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    const currentHash = window.location.hash;
    const navLinks = document.querySelectorAll('.header-nav a');

    navLinks.forEach(link => {
        link.classList.remove('active');

        const linkHref = link.getAttribute('href');
        const linkPage = linkHref.split('#')[0] || 'index.html';
        const linkHash = linkHref.includes('#') ? '#' + linkHref.split('#')[1] : '';

        // Check if we're on index.html (or root)
        const isOnIndex = currentPage === 'index.html' || currentPage === '';

        // Priority 1: If there's a hash in URL, match it
        if (currentHash && linkHash && currentHash === linkHash) {
            link.classList.add('active');
        }
        // Priority 2: If on index without hash, highlight "Inicio" link
        else if (isOnIndex && !currentHash && linkPage === 'index.html' && !linkHash) {
            link.classList.add('active');
        }
        // Priority 3: Match regular pages (not index.html)
        else if (!isOnIndex && linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

// EVENTS
window.addEventListener('load', () => {
    getYear();
    highlightActivePage();
});
window.addEventListener('scroll', handleHeaderScroll);
window.addEventListener('hashchange', highlightActivePage);