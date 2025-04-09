document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const emailInput = document.getElementById('email');
            const email = emailInput.value.trim();
            
            if (!email) {
                alert('Please enter a valid email address');
                return;
            }
            
            try {
                // Here you would typically send the email to your backend
                // For now, we'll just show a success message
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            } catch (error) {
                alert('There was an error processing your subscription. Please try again later.');
                console.error('Subscription error:', error);
            }
        });
    }

    // Smooth scrolling for navigation links
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
}); 