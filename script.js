'use strict';

// Add interactivity for gym fitness website

// Function to toggle visibility of an element
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === 'none' || !element.style.display) {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Function to submit a contact form
function submitContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}. Your message has been received!`);
    // Further logic to handle the submission could go here
}

// Add event listeners to buttons
document.getElementById('contactButton').addEventListener('click', submitContactForm);

// Initial setup
window.onload = function() {
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', () => toggleVisibility('infoSection'));
};
