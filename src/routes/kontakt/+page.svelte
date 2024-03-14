<script lang="ts">
    let name: string, email: string, message: string;

    async function handleSubmit() {

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

    <button type="submit">Skicka</button>
</form>

<style>
    form {
        margin: 5em;
    }

    input {
        display:block;
        background-color: #000;
        border: 2px solid #0f0;
        margin: 5px 0 5px 0;
        padding: 5px;
        color: #fff;
        font-size: x-large;
        width: 100%;
    }

    textarea {
        display:block;
        background-color: #000;
        border: 2px solid #0f0;
        margin: 5px 0 5px 0;
        padding: 5px;
        color: #fff;
        font-size: x-large;
        width: 100%;
        resize: vertical;
    }

    button {
        padding: 10px;
        margin-top: 10px;
        font-size: x-large;
    }
</style>