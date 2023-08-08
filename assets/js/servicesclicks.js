// Function to handle clicks on accordion items and update outputServicesDiv
function handleClickAcc(event) {
  const click = event.target.closest('.accordion-item'); // Get the clicked accordion item
  if (click) {
    const itemId = click.id; // Get the ID of the clicked item

    switch (itemId) {
      case "datastrategy":
        writeToOutputServices("Data Strategy & Management");
        break;
      case "ml":
        writeToOutputServices("Predicting What's Next");
        break;
      case "genai":
        writeToOutputServices("Generative AI");
        break;
      case "personalization":
        writeToOutputServices("Personalization");
        break;
      case "rpa":
        writeToOutputServices("AI Driven Process Automation");
        break;
      case "bi":
        writeToOutputServices("Enhanced Insights");
        break;
      default:
        writeToOutputServices("");
    }
  }
}

// Function to write content to outputServicesDiv
function writeToOutputServices(content) {
  const outputServicesDiv = document.getElementById('outputServicesDiv');
  outputServicesDiv.textContent = content;
}

// Add click event listeners to all the accordion items
const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
  item.addEventListener('click', handleClickAcc);
});
