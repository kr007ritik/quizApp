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
const answerKey = ["Tiger", "Lotus", "Peacock", "Delhi","Patna"];

const NumOfQues = arrOfQuestion.length;

// Print questions
for (let j = 1; j < arrOfQuestion[0].length; j++) {
  question.innerHTML = `Q. ${arrOfQuestion[0][0]}`;
  const li = document.createElement("li");
  const button = document.createElement("button");
  ul.appendChild(li);
  li.appendChild(button);
  button.innerHTML = arrOfQuestion[0][j];
}

let activeQues = 0;

questionNum.innerHTML = `${activeQues}/${NumOfQues}`;
nextBtn.addEventListener("click", () => {
  ul.style.pointerEvents = "auto";
  activeQues++;
  if (activeQues >= arrOfQuestion.length) {
    question.innerHTML = "Result";
    ul.innerHTML = "";
    nextBtn.remove();
    winnerMSg.style.display = "flex";
    winnerMSg.innerHTML= `${NumOfCorrectAns} points out of ${NumOfQues}`
  } else {
    ul.innerHTML = "";
    for (let j = 1; j < arrOfQuestion[activeQues].length; j++) {
      question.innerHTML = `Q. ${arrOfQuestion[activeQues][0]}`;
      const li = document.createElement("li");
      const button = document.createElement("button");
      ul.appendChild(li);
      li.appendChild(button);
      button.innerHTML = arrOfQuestion[activeQues][j];
    }
  }
});

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
