// Function to create and show toast
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.left = "50%";
  toast.style.top = "20px";
  toast.style.transform = "translate(-50%, 0)";
  toast.style.backgroundColor = " rgb(60, 179, 1)"; // red shade
  toast.style.color = "white";
  toast.style.padding = "10px 20px";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 2px 10px rgba(0,0,0.2,0.2)";
  toast.style.fontSize = "16px";
  toast.style.zIndex = "9999";
  toast.style.opacity = "0.8";
  toast.style.transition = "opacity 0.2s ease";

  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.style.opacity = "1";
  });

  // Hide after 2.5 seconds
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Attach event listeners to all Add to Cart buttons
document.querySelectorAll(".see-more").forEach((btn) => {
  btn.addEventListener("click", () => {
    showToast("Added to cart ✅");
  });
});
