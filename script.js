document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuButton = document.querySelector('.mobile-menu');
    const navigation = document.querySelector('nav ul');
    
    if (menuButton && navigation) {
      menuButton.addEventListener('click', function() {
        navigation.classList.toggle('show-menu');
        this.querySelector('i').classList.toggle('fa-times');
      });
    }
  
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        this.classList.toggle('active');
        const answer = this.nextElementSibling;
        answer.classList.toggle('show-answer');
      });
    });
  
    // Basic Form Validation
    const contactForm = document.getElementById('consultationForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        
        if (nameInput.value.trim() === '') {
          alert('Please enter your name');
          e.preventDefault();
          return;
        }
        
        if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
          alert('Please enter a valid email address');
          e.preventDefault();
          return;
        }
        
        // If validation passes, you can add form submission logic here
        alert('Thank you for your message! We will contact you soon.');
      });
    }
  });