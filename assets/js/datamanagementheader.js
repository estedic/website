// Check if the current page is "services.html"
const isDMPage = window.location.pathname.includes("datamanagement.html");

// Function to handle writing the text to the "outputServicesDiv"
function writeToOutputDM(text) {
  const outputDM = document.getElementById("outputDMDiv");
  outputDM.textContent = text;
}

// Function to handle the logic based on the hash
function handleHashAcc() {
  const hash = window.location.hash.substring(1); // Remove the "#" from the hash

  switch (hash) {
    case "accordion-architecture":
      writeToOutputDM("Strategic Data Architecture Planning");
      break;
    case "accordion-govcomp":
      writeToOutputDM("Data Governance & Compliance Framework");
      break;
    case "accordion-lifecycle":
      writeToOutputDM("End-to-End Data Lifecycle Management");
      break;
    case "accordion-integration":
      writeToOutputDM("Custom AI & Analytics Solution Integration");
      break;
    case "accordion-cloud":
      writeToOutputDM("Cloud Infrastructure & Services Optimization");
      break;
    case "accordion-datasec":
      writeToOutputDM("Data Security & Risk Management Implementation");
      break;
    case "accordion-dm":
      writeToOutputDM("Data Management");
      break;
    default:
      writeToOutputDM("");
  }
}
    
// Check if the page is "services.html" on page load
if (isDMPage) {
  handleHashAcc();
}
// Check if the page is "services.html" on hash change (if the user clicks a link)
window.addEventListener("hashchange", function () {
  if (isDMPage) {
    handleHashAcc();
  }
});