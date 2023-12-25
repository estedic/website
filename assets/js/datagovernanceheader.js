// Check if the current page is "services.html"
const isDGPage = window.location.pathname.includes("datagovernance.html");

// Function to handle writing the text to the "outputServicesDiv"
function writeToOutputDG(text) {
  const outputDG = document.getElementById("outputDGDiv");
  outputDG.textContent = text;
}

// Function to handle the logic based on the hash
function handleHashAcc() {
  const hash = window.location.hash.substring(1); // Remove the "#" from the hash

  switch (hash) {
    case "accordion-framework":
      writeToOutputDG("Strategic Data Governance & Framework Development");
      break;
    case "accordion-standards":
      writeToOutputDG("Data Quality and Standards Management");
      break;
    case "accordion-compliance":
      writeToOutputDG("Comprehensive Data Compliance & Security");
      break;
    case "accordion-stakeholder":
      writeToOutputDG("Organizational Change & Stakeholder Management");
      break;
    case "accordion-oversight":
      writeToOutputDG("Data Governance Operational Oversight");
      break;
    case "accordion-capacity":
      writeToOutputDG("Data Education & Capability Building");
      break;
    case "accordion-dg":
      writeToOutputDG("Data Governance");
      break;
    default:
      writeToOutputDG("");
  }
}
    
// Check if the page is "services.html" on page load
if (isDGPage) {
  handleHashAcc();
}
// Check if the page is "services.html" on hash change (if the user clicks a link)
window.addEventListener("hashchange", function () {
  if (isDGPage) {
    handleHashAcc();
  }
});