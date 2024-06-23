document.addEventListener("DOMContentLoaded", function() {
    const messages = [
"<strong>New tool!</strong> Use generative AI to learn all about Estedic. 👉🏼 Click on the 'chat with us' button on the top right.",
"🗓️ <strong>Stay tuned</strong> for our webinar in collaboration with data.world (final date t.b.d.). 👉🏼 <a href='https://www.data.world' target='blank'; style='color: white;'>More on data.world</a>.",
"🗓️ <strong>June 27:</strong> Estedic will attend the Snowflake Benelux Partner Connect 2024 in Amsterdam. 👉🏼 <a href='https://www.snowflake.com' target='blank'; style='color: white;'>More on Snowflake</a>.",
"🗓️ <strong>July 2nd:</strong> Estedic will attend the Databricks Benelux Partner Connect meet-up in Amsterdam. 👉🏼 <a href='https://www.databricks.com' target='blank'; style='color: white;'>More on Databricks</a>.",
"🗓️ <strong>July 11th:</strong> Estedic will host a data strategy workshop at the Amsterdam Data Event. 👉🏼 <a href='https://www.amsterdamdataacademy.com' target='blank'; style='color: white;'>More on Amsterdam Data Academy</a>.",
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
