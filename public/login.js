const loginHandler = async (event) => {
    event.preventDefault();

    const username = document.getElementById('userNameInputLogin').value.trim();
    const password = document.getElementById('passwordInputLogin').value.trim();
    const submit = document.getElementById('submit-btn');

    if(username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: {'Content-Type': 'application/json',
    } , 
  });
if (response.ok) {
    document.location.replace('/');
} else {
    console.log('Failed to create new user')
}
    }
};

document.getElementById('.login').addEventListener('submit', loginHandler);