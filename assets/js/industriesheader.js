// Check if the current page is "industries.html"
const isIndustriesPage = window.location.pathname.includes("industries.html");

// Function to handle writing the text to the "outputIndustriesDiv"
function writeToOutputInd(text) {
  const outputInd = document.getElementById("outputIndustriesDiv");
  outputInd.textContent = text;
}

// Function to handle the logic based on the hash
function handleHashTab() {
  const hash = window.location.hash.substring(1); // Remove the "#" from the hash

  switch (hash) {
    case "tab-bankinginsurance":
      writeToOutputInd("Banking & Insurance");
      break;
    case "tab-manufacturinglogistics":
      writeToOutputInd("Manufacturing & Logistics");
      break;
    case "tab-governmentngos":
      writeToOutputInd("Government & NGO's");
      break;
    case "tab-retailfmcg":
      writeToOutputInd("Retail & FMCG");
      break;
    case "tab-energy":
      writeToOutputInd("Energy");
      break;
    case "tab-telecom":
      writeToOutputInd("Telecom");
      break;
    case "tab-healthcare":
      writeToOutputInd("Healthcare");
      break;
    case "tab-sme":
      writeToOutputInd("SME's");
      break;
    default:
      writeToOutputInd("");
  }
}

// Check if the page is "industries.html" on page load
if (isIndustriesPage) {
  handleHashTab();
}

// Check if the page is "industries.html" on hash change (if the user clicks a link)
window.addEventListener("hashchange", function () {
  if (isIndustriesPage) {
    handleHashTab();
  }
});