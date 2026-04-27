function getQuotes() {
  let count = document.getElementById("quoteCount").value;

  let output = "";

  for (let i = 0; i < count; i++) {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => {
        output += `
          <p>
            "${data.content}" <br>
            <strong>- ${data.author}</strong>
          </p>
        `;

        document.getElementById("results").innerHTML = output;
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }
}