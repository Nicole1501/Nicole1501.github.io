function getQuotes() {
  let count = document.getElementById("quoteCount").value;

  document.getElementById("results").innerHTML = "";

  let output = "";

  for (let i = 0; i < count; i++) {
    fetch("https://api.adviceslip.com/advice?timestamp=" + new Date().getTime())
      .then(response => response.json())
      .then(data => {
        output += `<p>"${data.slip.advice}"</p>`;
        document.getElementById("results").innerHTML = output;
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }
}