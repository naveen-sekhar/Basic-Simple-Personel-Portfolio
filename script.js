function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById("response-message").style.display = "block";
    document.getElementById("response-message").innerText = `Thank you, ${name}! I'll get back to you at ${email} soon.`;

    document.getElementById("contact-form").reset(); // Clear the form
}
