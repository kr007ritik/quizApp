const question = document.querySelector(".question");
const ul = document.querySelector("ul");
const nextBtn = document.querySelector(".nextBtn button");
const questionNum = document.querySelector(".questionNum");
const winnerMSg = document.querySelector(".winnerMSg");

const arrOfQuestion = [
  ["National animal of INDIA?", "Cat", "Lion", "Tiger", "Cow"],
  ["National flower of INDIA?", "Lotus", "Rose", "Sunflower", "Lily"],
  ["National bird of INDIA?", "Eagle", "Peacock", "Pigeon", "Crow"],
  ["Capital of INDIA?", "Goa", "Mumbai", "Delhi", "Patna"],
  ["Capital of Bihar?", "Gaya", "Patna", "Ranchi", "Kolkata"],
];
const answerKey = ["Tiger", "Lotus", "Peacock", "Delhi", "Patna"];

const NumOfQues = arrOfQuestion.length;
// Print questions
let activeQues = 0;

function printQues(activeQues) {
  ul.classList = "";
  ul.style.pointerEvents = "auto";
  if (activeQues == NumOfQues) {
    question.innerHTML = "Result";
    ul.innerHTML = "";
    nextBtn.remove();
    winnerMSg.style.display = "flex";
    winnerMSg.innerHTML = `${NumOfCorrectAns} points out of ${NumOfQues}`;
  } else {
    ul.innerHTML = "";
    let numOfOptions = arrOfQuestion[activeQues].length;
    question.innerHTML = `Q. ${arrOfQuestion[activeQues][0]}`;
    for (let i = 1; i < numOfOptions; i++) {
      const li = document.createElement("li");
      const button = document.createElement("button");
      ul.appendChild(li);
      li.appendChild(button);
      button.innerHTML = arrOfQuestion[activeQues][i];
      questionNum.innerHTML = `${activeQues + 1}/${NumOfQues}`;
    }
  }
}

printQues(activeQues);
questionNum.innerHTML = `${activeQues + 1}/${NumOfQues}`;

nextBtn.addEventListener(
  "click",
  function () {
    activeQues++;
    printQues(activeQues);
  },
  false
);

// Check Answer
let NumOfCorrectAns = 0;

function handleItemClick(event) {
  let userAns = event.target.textContent;
  if (userAns === answerKey[activeQues]) {
    event.target.className = "correct";
    NumOfCorrectAns++;
  } else {
    event.target.className = "wrong";
  }
  ul.style.pointerEvents = "none";
}

ul.addEventListener("click", handleItemClick);
