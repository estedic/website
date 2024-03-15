document.addEventListener("DOMContentLoaded", function() {
    const messages = [
"<strong>New tool!</strong> Use generative AI to learn all about Estedic. 👉🏼 Click on the 'chat with us' button on the top right.",
"🗓️ <strong>April 24th:</strong> Discover the future of AI at the Dutch AI Congress. 👉🏼 <a href='https://www.estedic.nl/company.html#eventcalendar' style='color: white;'>Learn more</a>.",
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
