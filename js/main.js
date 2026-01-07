// FOOTER
function getYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

// HEADER & BURGER BUTTON
const header = document.getElementById("header");

function handleHeaderScroll() {
    if (document.documentElement.scrollTop > 90) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }
}
// EVENTS
window.addEventListener('load', getYear);
window.addEventListener('scroll', handleHeaderScroll);