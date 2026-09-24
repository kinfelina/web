const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

contactForm?.addEventListener('submit', async (event) => {
	event.preventDefault();

	const submitButton = contactForm.querySelector('button[type="submit"]');
	const formData = new FormData(contactForm);

	submitButton.disabled = true;
	submitButton.textContent = 'Enviando...';
	formStatus.hidden = true;
	formStatus.classList.remove('error');

	try {
		const response = await fetch('/', {
			method: 'POST',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: new URLSearchParams(formData).toString()
		});

		if (!response.ok) {
			throw new Error('No se pudo enviar el formulario.');
		}

		contactForm.reset();
		contactForm.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach((field) => {
			field.value = '';
		});
		formStatus.textContent = 'Gracias por escribirnos. Hemos recibido tu mensaje y te responderemos lo antes posible.';
		formStatus.hidden = false;
		submitButton.textContent = 'Mensaje enviado';
	} catch (error) {
		formStatus.textContent = 'No hemos podido enviar el mensaje. Inténtalo de nuevo o escríbenos por email.';
		formStatus.classList.add('error');
		formStatus.hidden = false;
		submitButton.disabled = false;
		submitButton.textContent = 'Enviar mensaje';
	}
});
