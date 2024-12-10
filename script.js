document.getElementById('registrationForm').addEventListener('submit', function (e) {
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Phone validation
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be 10 digits.");
        e.preventDefault();
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        e.preventDefault();
    }
});
