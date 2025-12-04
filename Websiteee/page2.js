document.addEventListener("DOMContentLoaded", () => {

  const clickBox = document.getElementById("middleBox"); // FIXED
  const popup = document.getElementById("popup");

  clickBox.addEventListener("click", () => {

    // Fill the heart
    clickBox.innerHTML = "💗";
    clickBox.classList.remove("empty");

    // Show popup
    popup.classList.remove("hidden");

    // Fade → redirect to page3
    setTimeout(() => {
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = "page3.html";
      }, 450);

    }, 1200);

  });

});
