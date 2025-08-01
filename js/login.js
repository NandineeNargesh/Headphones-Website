// When the page loads
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname;

  // ✅ REDIRECT BASED ON LOGIN STATUS
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (currentPage.includes("index.html") && !isLoggedIn) {
    window.location.href = "login.html";
  }

  if (currentPage.includes("login.html") && isLoggedIn) {
    window.location.href = "index.html";
  }

  // ✅ LOGIN BUTTON
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      // Simulate login
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "index.html";
    });
  }

  // ✅ LOGOUT BUTTON
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "login.html";
    });
  }
});
