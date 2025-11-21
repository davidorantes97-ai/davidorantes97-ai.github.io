// ================== SCROLL REVEAL ==================

document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".reveal");

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("visible");
      }
    });
  }, {threshold:0.2});

  els.forEach(el => io.observe(el));
});
