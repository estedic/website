
(function() {
    function checkAlert() {
        try {
            var alertBox = document.getElementById('customAlert');
            if (!alertBox) return;

            // Check if the alert has been dismissed already
            if (sessionStorage.getItem('alertDismissed') === 'true') {
                alertBox.style.display = 'none';
            } else {
                alertBox.addEventListener('close.bs.alert', function () {
                    sessionStorage.setItem('alertDismissed', 'true');
                });
            }
            clearInterval(intervalId); // Clear the interval once the alert is found and processed
        } catch (e) {
            console.error("Error accessing sessionStorage: ", e);
            // Optional: Fallback logic if sessionStorage isn't available
        }
    }

    // Check every 100 milliseconds until the element is found
    var intervalId = setInterval(checkAlert, 100);
})();