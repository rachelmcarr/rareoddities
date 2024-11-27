document.addEventListener("DOMContentLoaded", () => {
    const enterButton = document.getElementById("enter-button");
    const landingPage = document.getElementById("landing-page");
    const homePage = document.getElementById("home-page");
  
    enterButton.addEventListener("click", () => {
      // Add transition effects
      landingPage.classList.add("hidden"); // Fade out landing page
      setTimeout(() => {
        landingPage.style.display = "none"; // Hide landing page after transition
        homePage.classList.add("visible");  // Show home page
      }, 1000); // Timeout matches CSS transition duration (1 second)
    });
  });