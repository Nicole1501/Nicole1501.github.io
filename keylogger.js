let keyCounts = {};

document.addEventListener("keydown", function(event) {
   let key = event.key;

   if (keyCounts[key]) {
      keyCounts[key]++;
   } else {
      keyCounts[key] = 1;
   }

   console.clear();
   for (let k in keyCounts) {
      console.log("Key [" + k + "]: " + keyCounts[k]);
   }
   
   if (key === " " && keyCounts[key] === 5) {
      document.body.style.backgroundColor = "lightblue";
   }
   
   if (key === "a" && keyCounts[key] === 10) {
      document.body.style.color = "red";
   }

   if (key === "Enter" && keyCounts[key] === 3) {
      alert("You pressed Enter 3 times!");
   }
});