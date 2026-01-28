// Task 3: JavaScript Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // 1. Connection Check
    console.log("JavaScript successfully connected!");

    // 2. Alert for Contact Form
    const form = document.querySelector('.contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            // Aapka screenshot wala alert message
            alert(`Thank you, Snehal Taphare! Your message has been sent successfully to Codveda.`);
            form.reset();
        });
    }

    // 3. Simple Animation Effect
    const cards = document.querySelectorAll('.project-card, .skill-pill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });
});
