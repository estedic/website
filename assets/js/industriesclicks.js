// Event listener for when a tab is shown (Bootstrap 5)
const tabItems = document.querySelectorAll('[data-bs-toggle="tab"]');
tabItems.forEach(item => {
item.addEventListener('shown.bs.tab', function (event) {
  const clickedTab = event.target; // Get the clicked tab item
  const content = clickedTab.textContent; // Get the text content of the clicked tab
  writeToOutputIndustries(content); // Call the function to update outputIndustriesDiv
});
});

// Function to write content to outputIndustriesDiv
function writeToOutputIndustries(content) {
const outputIndustriesDiv = document.getElementById('outputIndustriesDiv');
outputIndustriesDiv.textContent = content;
}