document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('signupForm').classList.add('hidden');
});

document.getElementById('signupBtn').addEventListener('click', function() {
    document.getElementById('signupForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
});

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function isValidPassword(password) {
    // Password must be at least 6 characters long and contain at least one number
    const regex = /^(?=.*[0-9]).{6,}$/;
    return regex.test(password);
}


function displayThankYouMessage(message) {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'thank-you-message';
    messageContainer.innerText = message;
    document.body.appendChild(messageContainer);

    // Remove the message after 3 seconds
    setTimeout(() => {
        messageContainer.remove();
    }, 3000);
}


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!isValidPassword(password)) {
        alert('Password must be at least 6 characters long and contain at least one number.');
        return;
    }

    displayThankYouMessage(`Thanks for logging in, ${email.split('@')[0]}!`);
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    if (username.trim() === '') {
        alert('Username is required.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!isValidPassword(password)) {
        alert('Password must be at least 6 characters long and contain at least one number.');
        return;
    }

    displayThankYouMessage(`Thanks for signing up, ${username}!`);
});