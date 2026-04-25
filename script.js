document.addEventListener('DOMContentLoaded', () => {
    
    /* -------------------------------------------
       1. HERO SECTION AUTO-SLIDER
       ------------------------------------------- */
    const heroSlider = document.getElementById('hero-slider');
    const heroBgText = document.getElementById('hero-bg-text');
    const heroImg = document.getElementById('hero-img');

    // Define the slides based on the video (Apple, Banana, Keylime)
    const slides = [
        {
            text: "APPLE",
            color: "#E66A53", // Orange/Red
            img: "https://images.unsplash.com/photo-1621236378699-8597faf6a176?auto=format&fit=crop&w=600&q=80"
        },
        {
            text: "BANANA",
            color: "#E8C8A0", // Light Brown
            img: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?auto=format&fit=crop&w=600&q=80"
        },
        {
            text: "KEYLIME",
            color: "#D8E0A0", // Lime Green
            img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80" // Placeholder for keylime
        }
    ];

    let currentSlide = 0;

    function changeSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Smooth transition effect
        heroBgText.style.opacity = 0;
        heroImg.style.opacity = 0.5;

        setTimeout(() => {
            heroBgText.innerText = slides[currentSlide].text;
            heroSlider.style.backgroundColor = slides[currentSlide].color;
            heroImg.src = slides[currentSlide].img;
            
            heroBgText.style.opacity = 1;
            heroImg.style.opacity = 1;
        }, 500);
    }

    // Change slide every 4 seconds
    setInterval(changeSlide, 4000);

    /* -------------------------------------------
       2. CATEGORY FILTER LOGIC
       ------------------------------------------- */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const filterItems = document.querySelectorAll('.filter-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Manage Active Class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Show/Hide items based on category
            filterItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    // Re-trigger animation
                    item.animate([
                        { opacity: 0, transform: 'scale(0.9)' },
                        { opacity: 1, transform: 'scale(1)' }
                    ], { duration: 400, fill: 'forwards', easing: 'ease-out' });
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});