function startGame() {
   let user = prompt("What is your name?");
   console.log("Hello, " + user + "!");

   tennisGame(user);
}

function tennisGame(user) {
   let choice1;
   let choice2;
   let choice3;

   console.log("Welcome to the tennis match, " + user + "!");

   choice1 = prompt("You are serving. Do you serve 'wide' or 'middle'?");

   if (choice1 === "wide") {
      choice2 = prompt("Great serve! Opponent returns. Do you hit 'forehand' or 'backhand'?");

      if (choice2 === "forehand") {
         choice3 = prompt("You have control. Do you go to the 'net' or stay 'baseline'?");

         if (choice3 === "net") {
            console.log("Perfect volley! You win the point. Ending 1");
         } else {
            console.log("You stay back and hit a winner. Ending 2");
         }
      } else {
         choice3 = prompt("Backhand rally. Do you play 'safe' or go 'aggressive'?");

         if (choice3 === "safe") {
            console.log("Too passive. Opponent wins. Ending 3");
         } else {
            console.log("Risky shot pays off! You win. Ending 4");
         }
      }

   } else if (choice1 === "middle") {
      choice2 = prompt("Opponent attacks. Do you 'defend' or 'counter'?");

      if (choice2 === "defend") {
         choice3 = prompt("Long rally. Do you wait or go for a 'winner'?");

         if (choice3 === "winner") {
            console.log("Amazing shot! You win the rally. Ending 5");
         } else {
            console.log("You wait too long and lose. Ending 6");
         }
      } else {
         choice3 = prompt("You counterattack. Do you aim 'cross' or 'down'?");

         if (choice3 === "cross") {
            console.log("Great angle! You win. Ending 7");
         } else {
            console.log("Ball goes out. You lose. Ending 8");
         }
      }

   } else {
      console.log("Invalid choice. Game over.");
   }
}

