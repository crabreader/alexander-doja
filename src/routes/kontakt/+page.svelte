<script lang="ts">
    let name: string, email: string, message: string;

    async function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        const formData = { name, email, message };

        try {
            const response = await fetch('/api/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Meddelandet har skickats!');

                name = "";
                email = "";
                message = "";   
            } else {
                alert('Meddelandet kunde inte skickas.');
            }

        } catch (error) {
            console.error('Error sending email:', error);
            alert('Meddelandet kunde inte skickas.');
        }
    }
</script>

<h1>Kontakta mig</h1>

<form on:submit={handleSubmit}>
    <label for="name">Namn:</label>
    <input type="text" id="name" bind:value={name} required>

    <label for="email">Email:</label>
    <input type="text" id="email" bind:value={email} required>

    <label for="message">Meddelande:</label>
    <textarea id="message" bind:value={message} rows="3" required></textarea>

    <button class="button" type="submit">Skicka</button>
</form>

<style>
    button {
        padding: 10px;
        margin-top: 10px;
        font-size: x-large;
    }

    @media only screen and (max-width: 900px) {
        form {
            margin: 0.5em;
        }

        button {
            width: 100%;
        }
    }
</style>