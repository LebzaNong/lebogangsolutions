//Optional JS for mobile toggle 

const hamburger = document.querySelector('.hamburger');
let mobileMenu;

hamburger.addEventListener('click', () => {
    if(!mobileMenu) {
        mobileMenu = document.createElement('div');
        mobileMenu.classList.add('mobile-menu');
        mobileMenu.innerHTML = `
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#values">Values</a>
            <a href="#contact">Contact</a>
        `;
        document.body.appendChild(mobileMenu);
    } else {
        mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
    }
});

//JavaScript to trigger fade-in on scroll (before </body>)

document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');

    const appearOnScroll = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
