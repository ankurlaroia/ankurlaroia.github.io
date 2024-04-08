document.addEventListener("DOMContentLoaded", function() {
    // Function to check and apply the navigation bar styling on scroll
    function checkNavBarScroll() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('nav-scrolled');
        } else {
            header.classList.remove('nav-scrolled');
        }
    }

    // Function to toggle navigation bar color based on the theme
    function toggleNavbarColorScheme() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const navbar = document.querySelector('.navbar');
        if (mediaQuery.matches) {
            // If the user has set their system to dark mode
            navbar.classList.remove('navbar-light');
            navbar.classList.add('navbar-dark');
        } else {
            // If the user has set their system to light mode or has no preference
            navbar.classList.remove('navbar-dark');
            navbar.classList.add('navbar-light');
        }
    }

    // Call the function on page load and when the color scheme preference changes
    toggleNavbarColorScheme();
    window.matchMedia('(prefers-color-scheme: dark)').addListener(toggleNavbarColorScheme);

    // Initial check in case the page is not at the top when refreshed or loaded
    checkNavBarScroll();

    // Smooth scrolling for nav links - Requires jQuery, make sure jQuery is included
    $('.navbar a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                var scrolledY = window.scrollY;
                if (history.pushState) {
                    history.pushState(null, null, hash);
                } else {
                    window.location.hash = hash;
                }
                window.scrollTo(0, scrolledY);
            });
        }
    });

    // Add the scroll event listener to the window for checking the navigation bar's style
    window.addEventListener('scroll', checkNavBarScroll);

    // Intersection Observer for animating section visibility
    const sections = document.querySelectorAll("section");
    const observerOptions = {
        rootMargin: '0px',
        threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-visible");
            } else {
                entry.target.classList.remove("section-visible");
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Handling form submission with Fetch API
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default submission

            const formData = new FormData(form);
            fetch('YOUR_ENDPOINT_HERE', { // Replace 'YOUR_ENDPOINT_HERE' with your form submission endpoint
                method: 'POST',
                headers: {
                    'Accept': 'application/json', // Ensure the server responds with JSON
                },
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .then(data => {
                console.log('Success:', data);
                alert('Form successfully submitted');
                form.reset(); // Reset form fields after submission
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred while submitting the form. Please try again.');
            });
        });
    }
});
