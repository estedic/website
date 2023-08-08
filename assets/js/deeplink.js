document.addEventListener("DOMContentLoaded", function() {
    // Function to handle deep linking to tabs and accordion items
    function activateTabOrAccordionFromHash() {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#tab-')) {
            // Handle tab activation
            const tabID = hash.substring(5); // Remove the '#tab-' prefix
            const tab = document.querySelector('.nav-tabs a[href="#' + tabID + '"]');
            if (tab) {
                var myTab = new bootstrap.Tab(tab);
                myTab.show();
            }
        } else if (hash && hash.startsWith('#accordion-')) {
            // Handle accordion item opening
            const accordionItemID = hash.substring(11); // Remove the '#accordion-' prefix
            const accordionButton = document.querySelector('.accordion-item#' + accordionItemID + ' .accordion-button');
            if (accordionButton) {
                // Close the default open accordion item first
                const defaultOpenItem = document.querySelector(".accordion-item .collapse.show");
                if (defaultOpenItem) {
                    var defaultOpenAccordion = new bootstrap.Collapse(defaultOpenItem);
                    defaultOpenAccordion.hide();
                }

                // Trigger click event to open the targeted accordion item
                accordionButton.click();

                // Scroll to the accordion item after a slight delay
                setTimeout(function() {
                //    var offset = accordionButton.offsetTop;
                //    var offsetAdjustment = -400; // Change this value as needed
                //    window.scrollTo(0, offset + offsetAdjustment);
                }, 100); // Adjust the delay (in milliseconds) as needed
            }
        }
    }

    // Activate the tab or open the accordion item on page load
    activateTabOrAccordionFromHash();

    // Listen for hash changes and activate the appropriate tab or open the accordion item
    window.addEventListener('hashchange', activateTabOrAccordionFromHash);
});