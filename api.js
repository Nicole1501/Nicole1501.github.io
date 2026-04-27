function getQuotes() {
  let number = document.getElementById("quoteCount").value;

  document.getElementById("results").innerHTML = "";

  const athleteQuotes = [
    "Rafael Nadal: 'The glory is being happy.'",
    "Serena Williams: 'I really think a champion is defined not by their wins but by how they recover when they fall.'",
    "Michael Jordan: 'I've failed over and over again in my life and that is why I succeed.'",
    "Cristiano Ronaldo: 'Your love makes me strong, your hate makes me unstoppable.'",
    "LeBron James: 'Don’t be afraid of failure. This is the way to succeed.'"
  ];

  let randomIndex = Math.floor(Math.random() * athleteQuotes.length);
  
  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
      document.getElementById("results").innerHTML =
        `<p>${athleteQuotes[randomIndex]}</p>`;
    })
    .catch(error => console.log(error));
}