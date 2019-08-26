// - you need a {} set after a fat arrow
// - pull out of a legend within same index, not a datastore. necessary for accessibility.

// global strftime, cuid
'use strict';

const index = (function () {

  //edit the below later; just added to save the code
  const addAccordianListeners = function () {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

  const renderHome = function() {}
  
  return {
    addAccordianListeners,
    renderHome
  }
})();

$(index.renderHome);