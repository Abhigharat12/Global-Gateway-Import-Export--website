function openNavbar() {
	document.getElementById("sideNavigationBar")
		.style.width = "50%";
}
function closeNavbar() {
	document.getElementById("sideNavigationBar")
		.style.width = "0%";
}

function showMapsAlert(event) {
  event.preventDefault(); // Prevents the default action of the link
  var confirmed = confirm("Redirecting To Google Maps. Continue?");
  if (confirmed) {
      window.open(this.href, '_blank'); // Opens link in a new tab
  } else {
      // Do nothing, or handle cancellation as needed
  }
}

function showWebsiteAlert(event) {
  event.preventDefault(); // Prevents the default action of the link
  var confirmed = confirm("Redirecting To Creators Portfolio Website. Continue?");
  if (confirmed) {
      window.open(this.href, '_blank'); // Opens link in a new tab
  } else {
      // Do nothing, or handle cancellation as needed
  }
}

// Ensure that the elements exist before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
  var exploreButton = document.getElementById("explore_button");
  if (exploreButton) {
      exploreButton.addEventListener("click", showMapsAlert);
  } else {
      console.error("Explore button not found!");
  }

  var websiteLink = document.getElementById("website");
  if (websiteLink) {
      websiteLink.addEventListener("click", showWebsiteAlert);
  } else {
      console.error("Website link not found!");
  }
});

function myFunc(){
	// alert(`Welcome To Marsstrong`);
}

function form_submit(event) {
    event.preventDefault(); 
    var form = document.getElementById("myForm");
    if (form.checkValidity()) {
        window.location.href = 'success.html';
    } else {
        alert("Please fill out all required fields correctly.");
    }
    
    return false; 
}

var pageTitle = document.getElementById('documentTitle');
    var originalTitle = pageTitle.textContent;

    function handleVisibilityChange() {
      if (document.hidden) {
        // Change document title when the tab is hidden
        pageTitle.textContent = 'Please Come Back🫣!';
      } else {
        // Restore original document title when the tab is visible again
        pageTitle.textContent = originalTitle;
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

// Tejas Hande
// tejasamolhande@gmail.com
// 8600828734