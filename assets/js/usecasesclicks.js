// Function to handle clicks on accordion items and update outputServicesDiv
function handleClickAcc(event) {
  const click = event.target.closest('.accordion-item'); // Get the clicked accordion item
  if (click) {
    const itemId = click.id; // Get the ID of the clicked item

    switch (itemId) {
      case "datastrategy":
        writeToOutputUseCases("Data Strategy & Management");
        break;
      case "ml":
        writeToOutputUseCases("Predicting What's Next");
        break;
      case "genai":
        writeToOutputUseCases("Generative AI");
        break;
      case "personalization":
        writeToOutputUseCases("Personalization");
        break;
      case "rpa":
        writeToOutputUseCases("AI Driven Process Automation");
        break;
      case "bi":
        writeToOutputUseCases("Enhanced Insights");
        break;
      default:
        writeToOutputUseCases("");
    }
  }
}

// Function to write content to outputServicesDiv
function writeToOutputUseCases(content) {
  const outputUseCasesDiv = document.getElementById('outputUseCasesDiv');
  outputUseCasesDiv.textContent = content;
}

// Add click event listeners to all the accordion items
const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
  item.addEventListener('click', handleClickAcc);
});
