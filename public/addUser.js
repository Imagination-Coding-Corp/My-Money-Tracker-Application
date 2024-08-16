const addUserHandler = async (event) => {
    event.preventDefault();


const username = document.getElementById('userNameInput').ariaValueMax.trim();
const password = document.getElementById('passwordInput').ariaValueMax.trim();
const submit = document.getElementById('submit-btn');

if(username && password) {
    const response = await fetch('/api/users', {
        method: JSON.stringify({ username , password}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if(response.ok) {
        document.location.replace('/');
    } else {
        console.log('Failed to create new user.');
    }
    }
};

document.getElementById('registration').addEventListener('submit', addUserHandler);