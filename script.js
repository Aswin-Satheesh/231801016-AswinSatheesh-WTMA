document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let dob = document.getElementById('dob').value;
    let age = document.getElementById('age').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;

    if (!/^[A-Za-z]{4,}$/.test(firstName)) {
        alert('First name must contain only letters and be at least 4 characters long.');
        return;
    }
    if (!/^[A-Za-z]{1,}$/.test(lastName)) {
        alert('Last name must contain only letters and be at least 1 character long.');
        return;
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Enter a valid email address.');
        return;
    }
    if (!dob) {
        alert('Enter a valid date of birth.');
        return;
    }
    if (!/^[0-9]{2}$/.test(age)) {
        alert('Age must be a two-digit number.');
        return;
    }
    if (!gender) {
        alert('Select a gender.');
        return;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
        alert('Phone number must contain exactly 10 digits.');
        return;
    }
    if (address.trim() === '') {
        alert('Address cannot be empty.');
        return;
    }

    let userData = {
        firstName,
        lastName,
        email,
        dob,
        age,
        gender: gender.value,
        phone,
        address
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    window.location.href = 'success.html';
});