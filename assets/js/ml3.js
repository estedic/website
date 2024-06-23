// Function to start the animation
function startAnimation() {
  // Wrap every letter in a span
  var textWrapper = document.querySelector('.ml3');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({ loop: false })
    .add({
      targets: '.ml3',
      opacity: 1, // Set opacity to 1
      duration: 1, // Instantly set opacity to 1 before starting the animation
    })
    .add({
      targets: '.ml3 .letter',
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 25 * (i + 1),
    });
}

// Callback function when the element enters the viewport
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.15) { // Only start animation when at least 1% of the element is visible
      startAnimation();
      observer.unobserve(entry.target); // Stop observing once animation starts
    }
  });
}

// Options for the Intersection Observer
const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.15, // Trigger the callback when at least 1% of the element is visible
};

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Observe the element with the 'ml3' class
const targetElement = document.querySelector('.ml3');
if (targetElement) {
  observer.observe(targetElement);
}
