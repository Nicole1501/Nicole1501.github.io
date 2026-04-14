const buttons = document.querySelectorAll(".toggle");

for (let btn of buttons) {
   btn.addEventListener("click", function() {
      let section = btn.parentElement;

      section.classList.toggle("active");

      if (btn.textContent === "+") {
         btn.textContent = "-";
      } else {
         btn.textContent = "+";
      }
   });
}

