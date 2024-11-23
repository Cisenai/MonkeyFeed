const form = document.querySelector('#register-form');
const apiUrl = 'http://localhost:3001/client';

const toggleEyes = document.querySelectorAll('.toggle-eye');

toggleEyes.forEach((toggleEye) => {
	const button = toggleEye.querySelector('.eye');
	const input = toggleEye.querySelector('input');

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
});

form.addEventListener('submit', async (event) => {
	event.preventDefault();

	const name = event.target.name.value;
	const email = event.target.email.value;
	const password = event.target.password.value;
	const confirmPassword = event.target.confirmePassword.value;

	try {
		if (password !== confirmPassword) {
			throw Error('password-not-equal');	
		}

		const data = {
			name: name,
			email: email,
			password: password,
		};

		const response = await fetch(apiUrl, {
			method: 'POST',
			headers: {
				'Accept': 'application/json', 
				"Content-Type": "application/json", 
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw Error('failed-to-create-account');
		}

		window.location.href = '/login';
	} catch (err) {
		let message = '';
		if (err.message === 'password-not-equal') {
			message = 'Confirme sua senha corretamente.'
		} else if (err.message === 'failed-to-create-account') {
			message = 'Esse email já está sendo utilizado.'
		}

		const errorMessage = document.createElement('div');
		errorMessage.classList.add('error-message');

		errorMessage.innerHTML = `
			<p>${message}</p>
		`;

		if (form.lastElementChild.className !== errorMessage.className) {
			form.append(errorMessage);
		}
	}
});

