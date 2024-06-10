// Function to handle clicks on accordion items and update outputServicesDiv
function handleClickAcc(event) {
  const click = event.target.closest('.accordion-item'); // Get the clicked accordion item
  if (click) {
    const itemId = click.id; // Get the ID of the clicked item

    switch (itemId) {
      case "datastrategy":
        writeToOutputDI("Data Strategy & Management");
        break;
      case "ml":
        writeToOutputDI("Predicting What's Next");
        break;
      case "genai":
        writeToOutputDI("Generative AI");
        break;
      case "personalization":
        writeToOutputDI("Personalization");
        break;
      case "rpa":
        writeToOutputDI("AI Driven Process Automation");
        break;
      case "bi":
        writeToOutputDI("Enhanced Insights");
        break;
      default:
        writeToOutputDI("");
    }
  }
}

// Function to write content to outputServicesDiv
function writeToOutputDI(content) {
  const outputDIDiv = document.getElementById('outputDIDiv');
  outputDIDiv.textContent = content;
}

// Add click event listeners to all the accordion items
const accordionItemsDI = document.querySelectorAll('.accordion-item');
accordionItemsDI.forEach(item => {
  item.addEventListener('click', handleClickAcc);
});
