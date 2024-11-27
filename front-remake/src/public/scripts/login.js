const form = document.querySelector('#login-form');
const apiUrl = 'http://localhost:3000/login';

const toggleEye = document.querySelector('.toggle-eye');
const input = toggleEye.querySelector('input');
const button = toggleEye.querySelector('button');

let isEyeChecked = false;

button.addEventListener('click', (event) => {
	isEyeChecked = !isEyeChecked;
	const eye = event.target;

	if (isEyeChecked) {
		eye.src = '/assets/icons/visibility_off.svg';
		input.type = 'text';
	} else {
		eye.src = '/assets/icons/visibility.svg';
		input.type = 'password';
	}
});

form.addEventListener('submit', async (event) => {
	event.preventDefault();

	const email = event.target.email.value;
	const password = event.target.password.value;

	const data = {
		email: email,
		password: password,
	};

	try {
		const response = await fetch(apiUrl, {
			method: "POST",
			headers: { 
				'Accept': 'application/json', 
				"Content-Type": "application/json", 
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw Error(`HTTP Error: Status: ${response.status}`);
		}

		const result = await response.json();
		window.location.href = result.redirect;
	} catch (err) {
		const errorMessage = document.createElement('div');
		errorMessage.classList.add('error-message');

		errorMessage.innerHTML = `
			<p>Email ou senha incorretos!</p>
		`;

		if (form.lastElementChild.className !== errorMessage.className) {
			form.append(errorMessage);
		}
	}
});
