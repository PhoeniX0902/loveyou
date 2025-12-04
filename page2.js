const middle = document.getElementById("middleBox");
const popup = document.getElementById("popup");

middle.addEventListener("click", () => {
  // Put heart in center
  middle.textContent = "💗";
  middle.classList.add("heart");

  // Show popup
  popup.classList.remove("hidden");

  // Redirect after 1.5 seconds
  setTimeout(() => {
    window.location.href = "page3.html";
  }, 1500);
});
