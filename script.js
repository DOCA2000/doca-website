const toggle = document.getElementById("toggleMode");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("night");
  toggle.innerText = document.body.classList.contains("night")
    ? "☀️ Day"
    : "🌙 Night";
});

console.log("DOCA Next-Level Website Loaded");
