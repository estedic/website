document.addEventListener("DOMContentLoaded", function() {
    const messages = [
"<strong>New tool!</strong> Use generative AI to learn all about Estedic. 👉🏼 Click on the 'chat with us' button on the top right.",
"🗓️ <strong>Stay tuned</strong> for our webinar in collaboration with data.world (final date t.b.d.). 👉🏼 <a href='https://www.data.world' target='blank'; style='color: white;'>More on data.world</a>.",
"🗓️ <strong>Meet us</strong> at the Data Expo on Sept 11th in Utrecht. 👉🏼 <a href='https://www.data-expo.nl/nl/' target='blank'; style='color: white;'>click here</a>.",
        // ... add more messages as needed
    ];

    function getRandomMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }

    function displayRandomMessage() {
        const message = getRandomMessage();
        document.getElementById("random-message").innerHTML = message;
    }

    // Call the function on page load
    displayRandomMessage();

    // Optional: To change the message every 5 seconds, uncomment the following line
    // setInterval(displayRandomMessage, 5000);
});
