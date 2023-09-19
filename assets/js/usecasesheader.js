// Check if the current page is "services.html"
const isUseCasesPage = window.location.pathname.includes("usecases.html");

// Function to handle writing the text to the "outputServicesDiv"
function writeToOutputUC(text) {
  const outputUC = document.getElementById("outputUseCasesDiv");
  outputUC.textContent = text;
}

// Function to handle the logic based on the hash
function handleHashAcc() {
  const hash = window.location.hash.substring(1); // Remove the "#" from the hash

  switch (hash) {
    case "accordion-datastrategy":
      writeToOutputUC("Data Strategy & Management");
      break;
    case "accordion-ml":
      writeToOutputUC("Predicting What's Next");
      break;
    case "accordion-genai":
      writeToOutputUC("Generative AI");
      break;
    case "accordion-personalization":
      writeToOutputUC("Personalization");
      break;
    case "accordion-rpa":
      writeToOutputUC("AI Driven Process Automation");
      break;
    case "accordion-bi":
      writeToOutputUC("Enhanced Insights");
      break;
    case "accordion-dma":
      writeToOutputUC("Data Maturity Assessment");
      break;
    case "accordion-ucv":
      writeToOutputUC("Use Case Validation");
      break;   
    case "accordion-poc":
      writeToOutputUC("Proof of Concept");
      break;
    case "accordion-pm":
      writeToOutputUC("Project Management");
      break;
    case "accordion-usecases":
      writeToOutputUC("Use Cases");
      break;
    default:
      writeToOutputUC("");
  }
}
    
// Check if the page is "services.html" on page load
if (isUseCasesPage) {
  handleHashAcc();
}
// Check if the page is "services.html" on hash change (if the user clicks a link)
window.addEventListener("hashchange", function () {
  if (isUseCasesPage) {
    handleHashAcc();
  }
});