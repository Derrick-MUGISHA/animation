// JavaScript for responsiveness and interactivity

document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const nameInput = document.getElementById("name");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("remember");
    const form = document.querySelector("form");
  
    // Responsive Adjustments
    const adjustWrapper = () => {
      const wrapper = document.querySelector(".wrapper");
      if (window.innerWidth < 500) {
        wrapper.style.width = "90%";
        wrapper.style.padding = "20px";
      } else {
        wrapper.style.width = "490px";
        wrapper.style.padding = "30px";
      }
    };
  
    window.addEventListener("resize", adjustWrapper);
    adjustWrapper(); // Initial call
  
    // Form Validation
    form.addEventListener("submit", (e) => {
      if (!nameInput.value || !passwordInput.value) {
        e.preventDefault();
        alert("Please fill out both fields before submitting.");
      }
    });
  
    // Remember Me Feature
    const saveRememberMe = () => {
      if (rememberCheckbox.checked) {
        localStorage.setItem("rememberName", nameInput.value);
      } else {
        localStorage.removeItem("rememberName");
      }
    };
  
    rememberCheckbox.addEventListener("change", saveRememberMe);
  
    // Load Remembered Name
    const rememberedName = localStorage.getItem("rememberName");
    if (rememberedName) {
      nameInput.value = rememberedName;
      rememberCheckbox.checked = true;
    }
  });
  