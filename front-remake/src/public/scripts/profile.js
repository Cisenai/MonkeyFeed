const formProfile = document.querySelector('.edit-info');
const cancelButton = document.querySelector('.red');

formProfile.addEventListener('submit', (event) => {
	event.preventDefault();
	const apiUrl = 'http://localhost:3000/profile/update';

	const name = event.target.name.value;
	const email = event.target.email.value;
	const password = event.target.password.value;

	const data = {
		name: name,
		email: email,
		password: password,
	};

	console.log(apiUrl);

	fetch(apiUrl, {
		method: 'PATCH',
		headers: {
			'Accept': 'application/json', 
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((res) => window.location.href = '/profile')
		.catch((err) => console.log(err));
});

cancelButton.addEventListener('click', (event) => {
	const inputs = document.querySelectorAll('input');
	inputs.forEach((input) => input.value = '');
});
