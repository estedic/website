// Check if the current page is "services.html"
const isServicesPage = window.location.pathname.includes("services.html");

// Function to handle writing the text to the "outputServicesDiv"
function writeToOutputSer(text) {
  const outputSer = document.getElementById("outputServicesDiv");
  outputSer.textContent = text;
}

// Function to handle the logic based on the hash
function handleHashAcc() {
  const hash = window.location.hash.substring(1); // Remove the "#" from the hash

  switch (hash) {
    case "accordion-datastrategy":
      writeToOutputSer("Data Strategy & Management");
      break;
    case "accordion-ml":
      writeToOutputSer("Predicting What's Next");
      break;
    case "accordion-genai":
      writeToOutputSer("Generative AI");
      break;
    case "accordion-personalization":
      writeToOutputSer("Personalization");
      break;
    case "accordion-rpa":
      writeToOutputSer("AI Driven Process Automation");
      break;
    case "accordion-bi":
      writeToOutputSer("Enhanced Insights");
      break;
    case "accordion-dma":
      writeToOutputSer("Data Maturity Assessment");
      break;
    case "accordion-ucv":
      writeToOutputSer("Use Case Validation");
      break;   
    case "accordion-poc":
      writeToOutputSer("Proof of Concept");
      break;
    case "accordion-pm":
      writeToOutputSer("Project Management");
      break;
    default:
      writeToOutputSer("");
  }
}
    
// Check if the page is "services.html" on page load
if (isServicesPage) {
  handleHashAcc();
}
// Check if the page is "services.html" on hash change (if the user clicks a link)
window.addEventListener("hashchange", function () {
  if (isServicesPage) {
    handleHashAcc();
  }
});