let clickedId;
const userChoice = document.querySelectorAll(".choice");
const compScore = ["rockChoice", "paperChoice", "scissorChoice"];

userChoice.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log(choice.id);
    clickedId = choice.id;
    let randomValue = genComRandom();
    compChoice(randomValue, clickedId);
  });
});

function genComRandom() {
  return Math.floor(Math.random() * 3);
}

let comGenValue;

function compChoice(randomValue, clickedId) {
  console.log(randomValue);
  comGenValue = compScore[randomValue];
  console.log(comGenValue);
  acceptValueForCompare(clickedId, comGenValue);
}

function draw() {
  console.log("draw game , try again ");
}

let userCount = 0;
let compCount = 0;

const compScorePara = document.querySelector("#compScore p");
const userScorePara = document.querySelector("#userScore p");
const msg = document.querySelector('.msg h1');

function acceptValueForCompare(clickedId, comGenValue) {
  console.log(`User choice: ${clickedId}, Computer choice: ${comGenValue}`);

  if (clickedId === comGenValue) {
    console.log(`It's a draw!`);
    draw();
  } else if (
    (clickedId === "rockChoice" && comGenValue === "scissorChoice") ||
    (clickedId === "paperChoice" && comGenValue === "rockChoice") ||
    (clickedId === "scissorChoice" && comGenValue === "paperChoice")
  ) {
    console.log("User wins!");


	msg.innerText = 'User wins!';


    userCount++;
    userScorePara.innerHTML = userCount;
    console.log();
  } else {
    console.log("Computer wins!");
    compCount++;
    compScorePara.innerHTML = compCount;
    console.log();


	msg.innerHTML = 'Computer wins!';

  }
}
