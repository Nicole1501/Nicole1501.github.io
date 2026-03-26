let user = prompt("What is your name?");
console.log("Hello, " + user + "!");

function tennisGame() {
   let choice1;
   let choice2;

   console.log("Welcome to the tennis match, " + user + "!");

   choice1 = prompt("You are serving. Do you serve 'wide' or 'middle'?");

   if (choice1 === "wide") {
      choice2 = prompt("Good serve! Do you hit 'forehand' or 'backhand'?");

      if (choice2 === "forehand") {
         console.log("Great shot! You win the point. Ending 1");
      } else {
         console.log("Backhand into the net. You lose the point. Ending 2");
      }

   } else if (choice1 === "middle") {
      choice2 = prompt("Opponent attacks. Do you 'run' or 'stay'?");

      if (choice2 === "run") {
         console.log("Amazing defense! You win the rally. Ending 3");
      } else {
         console.log("You freeze and lose the point. Ending 4");
      }

   } else {
      console.log("Invalid choice. Game over.");
   }
}

tennisGame();

