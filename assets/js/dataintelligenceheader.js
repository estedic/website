// Check if the current page is "dataintelligence.html"
const isDIPage = window.location.pathname.includes("dataintelligence.html");

// Function to handle writing the text to the "outputServicesDiv"
function writeToOutputDI(text) {
  const outputDI = document.getElementById("outputDIDiv");
  outputDI.textContent = text;
}

// Function to handle the logic based on the hash
function handleHashAcc() {
  const hash = window.location.hash.substring(1); // Remove the "#" from the hash

  switch (hash) {
    case "accordion-datastrategy":
      writeToOutputDI("Data Strategy & Management");
      break;
    case "accordion-ml":
      writeToOutputDI("Predicting What's Next");
      break;
    case "accordion-genai":
      writeToOutputDI("Generative AI");
      break;
    case "accordion-personalization":
      writeToOutputDI("Personlization");
      break;
    case "accordion-rpa":
      writeToOutputDI("AI Driven Process Automation");
      break;
    case "accordion-bi":
      writeToOutputDI("Enhanced Insights");
      break;
    case "accordion-di":
      writeToOutputDI("Data Intelligence");
      break;
    default:
      writeToOutputDI("");
  }
}
    
// Check if the page is "dataintelligence.html" on page load
if (isDIPage) {
  handleHashAcc();
}
// Check if the page is "dataintelligence.html" on hash change (if the user clicks a link)
window.addEventListener("hashchange", function () {
  if (isDIPage) {
    handleHashAcc();
  }
});