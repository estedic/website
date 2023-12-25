// Function to handle clicks on accordion items and update outputServicesDiv
function handleClickAcc(event) {
  const click = event.target.closest('.accordion-item'); // Get the clicked accordion item
  if (click) {
    const itemId = click.id; // Get the ID of the clicked item

    switch (itemId) {
      case "architecture":
        writeToOutputDM("Strategic Data Architecture Planning");
        break;
      case "govcomp":
        writeToOutputDM("Data Governance & Compliance Framework");
        break;
      case "lifecycle":
        writeToOutputDM("End-to-End Data Lifecycle Management");
        break;
      case "integration":
        writeToOutputDM("Custom AI & Analytics Integration");
        break;
      case "cloud":
        writeToOutputDM("Cloud Infrastructure & Services Optimization");
        break;
      case "datasec":
        writeToOutputDM("Data Security & Risk Management Implementation");
        break;
      default:
        writeToOutputDM("");
    }
  }
}

// Function to write content to outputServicesDiv
function writeToOutputDM(content) {
  const outputDMDiv = document.getElementById('outputDMDiv');
  outputDMDiv.textContent = content;
}

// Add click event listeners to all the accordion items
const accordionItemsDM = document.querySelectorAll('.accordion-item');
accordionItemsDM.forEach(item => {
  item.addEventListener('click', handleClickAcc);
});
