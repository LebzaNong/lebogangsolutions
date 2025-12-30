//Optional JS for mobile toggle 

const hamburger = document.querySelector('.hamburger');
let mobileMenu;

hamburger.addEventListener('click', () => {
    if(!mobileMenu) {
        mobileMenu = document.createElement('div');
        mobileMenu.classList.add('mobile-menu');
        mobileMenu.innerHTML = `
            <a href="#about">About</a>
            <a href="#about-bank">Bank</a>
            <a href="#letter">letter</a>
            <a href="#values">Values</a>
            <a href="#contact-info">Contact</a>
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

/************auto reply**emailjs**/

document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("PwQDrb5Rrkf4pgc00"); // Public Key

  const form = document.getElementById("contactForm");

  
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // 🤖 Honeypot check
  const honeypot = document.getElementById("website").value;
  if (honeypot !== "") {
    return; // bot detected – stop here
  }
    const userEmail = document.getElementById("email").value;
    const userMessage = document.getElementById("message").value;

    // 1️⃣ Send message to YOU
    emailjs.send(
      "service_nmk2x5a",
      "template_w8bw4nr", // admin template
      {
        from_email: userEmail,
        message: userMessage
      }
    )
    .then(() => {

      // 2️⃣ Auto-reply to USER
      return emailjs.send(
        "service_nmk2x5a",
        "template_nypwzrf", // 👈 replace this
        {
          to_email: userEmail,
          message: userMessage
        }
      );

    })
    .then(() => {
      document.getElementById("status").innerText =
        "✅ Message sent! We’ll get back to you shortly.";
      form.reset();
    })
    .catch(err => {
      document.getElementById("status").innerText =
        "❌ Failed to send message. Please try again.";
      console.error("EmailJS error:", err);
    });

  });

});

