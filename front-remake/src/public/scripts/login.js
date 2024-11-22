const form = document.querySelector('#login-form');
const apiUrl = 'http://localhost:3000/login';

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

		if (response.ok) {
			const result = await response.json();
			window.location.href = result.redirect;
		}
	} catch (err) {
		console.error(err);
	}
});

