document.addEventListener('DOMContentLoaded', function () {
    // Flag to track overall form validity
    let isValid = true;

    // Full Name validation
    let fname = document.getElementById('fname');
    if (fname) {
        fname.addEventListener('input', function () {
            if (this.value.length < 10) {
                this.classList.add('invalid');
                this.classList.remove('valid');
            } else {
                this.classList.add('valid');
                this.classList.remove('invalid');
            }
        });
    }

    // Email validation
    let email = document.getElementById('email');
    if (email) {
        email.addEventListener('input', function () {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(this.value)) {
                this.classList.add('invalid');
                this.classList.remove('valid');
            } else {
                this.classList.add('valid');
                this.classList.remove('invalid');
            }
        });
    }

    // Form submission validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            isValid = true; // Reset the flag for each submission

            // Validate Full Name
            if (fname && fname.value.length < 10) {
                fname.classList.add('invalid');
                fname.classList.remove('valid');
                alert("Full name must be at least 10 characters.");
                isValid = false;
            }

            // Validate Email
            if (email) {
                const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailPattern.test(email.value)) {
                    email.classList.add('invalid');
                    email.classList.remove('valid');
                    alert("Please enter a valid email address.");
                    isValid = false;
                }
            }

            // Prevent submission if form is invalid
            if (!isValid) {
                event.preventDefault();
            }
        });
    }
});
