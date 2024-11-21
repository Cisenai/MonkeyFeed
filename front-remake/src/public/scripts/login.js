const form = document.querySelector('#login-form');
const apiUrl = 'http://localhost:3000/login';

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const email = event.target.email.value;
	const password = event.target.password.value;

	const data = {
		email: email,
		password: password,
	};

	fetch(apiUrl, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	})
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
});

