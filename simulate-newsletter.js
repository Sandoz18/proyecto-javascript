document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    const emailInput = newsletterForm ? newsletterForm.querySelector('input[type="email"]') : null;
    const submitButton = newsletterForm ? newsletterForm.querySelector('button[type="submit"]') : null; // Selector preciso del botón

    if (newsletterForm && submitButton) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();

            if (emailInput && isValidEmail(emailInput.value)) {
                const buttonRect = submitButton.getBoundingClientRect();
                const offsetX = buttonRect.left;
                const offsetY = buttonRect.top - 80; // Ajusta este valor (ej: -70, -80)

                Toastify({
                    text: "¡Te has suscrito con éxito!",
                    duration: 3000,
                    gravity: "top",
                    position: "left",
                    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                    offset: {
                        x: offsetX,
                        y: offsetY
                    }
                }).showToast();
                emailInput.value = '';
            } else {
                const buttonRect = submitButton.getBoundingClientRect();
                Toastify({
                    text: "Por favor, ingresa una dirección de correo electrónico válida.",
                    duration: 5000,
                    gravity: "bottom", // Prueba con "bottom" para ver si se ve mejor
                    position: "left",
                    backgroundColor: "#dc3545",
                    offset: {
                        x: buttonRect.left,
                        y: buttonRect.bottom + 10 
                    }
                }).showToast();
            }
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});