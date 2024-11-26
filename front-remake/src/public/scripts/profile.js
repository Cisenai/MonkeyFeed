const form = document.querySelector('.edit-info');
const apiUrl = 'http://localhost:3000/profile/update';

form.addEventListener('submit', async (event) => {
	event.preventDefault();

	const name = event.target.name.value;
	const email = event.target.email.value;
	const password = event.target.password.value;

	const data = {
		name: name,
		email: email,
		password: password,
	};

	await fetch(apiUrl, {
		methord: 'POST',
		headers: {
			'Accept': 'application/json', 
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}).catch((err) => console.log(err));
});

