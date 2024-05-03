document.addEventListener("DOMContentLoaded", function() {
    const messages = [
"<strong>New tool!</strong> Use generative AI to learn all about Estedic. 👉🏼 Click on the 'chat with us' button on the top right.",
"🗓️ <strong>End of May:</strong> Stay tuned for our webinar in collaboration with data.world. 👉🏼 <a href='https://www.data.world' target='blank'; style='color: white;'>More on data.world</a>.",
"🗓️ <strong>June 27:</strong> Estedic will attend the Snowflake Benelux Partner Connect 2024 in Amsterdam. 👉🏼 <a href='https://www.snowflake.com' target='blank'; style='color: white;'>More on Snowflake</a>.",
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
