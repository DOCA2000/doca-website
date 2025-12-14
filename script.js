document.querySelectorAll(".faq-btn").forEach(btn=>{
  btn.onclick = () => {
    const box = btn.nextElementSibling;
    box.style.display = box.style.display === "block" ? "none" : "block";
  };
});
