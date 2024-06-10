// Function to handle clicks on accordion items and update outputServicesDiv
function handleClickAcc(event) {
  const click = event.target.closest('.accordion-item'); // Get the clicked accordion item
  if (click) {
    const itemId = click.id; // Get the ID of the clicked item

    switch (itemId) {
      case "framework":
        writeToOutputDG("Strategic Data Governance & Framework Development");
        break;
      case "standards":
        writeToOutputDG("Data Quality & Standards Management");
        break;
      case "compliance":
        writeToOutputDG("Comprehensive Data Compliance & Security");
        break;
      case "stakeholder":
        writeToOutputDG("Organizational Change & Stakeholder Management");
        break;
      case "oversight":
        writeToOutputDG("Data Governance Operational Oversight");
        break;
      case "capacity":
        writeToOutputDG("Data Education & Capability Building");
        break;
      default:
        writeToOutputDG("");
    }
  }
}

// Function to write content to outputServicesDiv
function writeToOutputDG(content) {
  const outputDGDiv = document.getElementById('outputDGDiv');
  outputDGDiv.textContent = content;
}

// Add click event listeners to all the accordion items
const accordionItemsDG = document.querySelectorAll('.accordion-item');
accordionItemsDG.forEach(item => {
  item.addEventListener('click', handleClickAcc);
});
