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
];

for (let j = 1; j < arrOfQuestion[0].length; j++) {
  question.innerHTML = `Q. ${arrOfQuestion[0][0]}`;
  const li = document.createElement("li");
  const button = document.createElement("button");
  ul.appendChild(li);
  li.appendChild(button);
  button.innerHTML = arrOfQuestion[0][j];
}

let activeQues = 0;
nextBtn.addEventListener("click", () => {
    activeQues++;
    if(activeQues >= arrOfQuestion.length){
        console.log(activeQues);
        question.innerHTML = "Result";
        ul.innerHTML = "";
        nextBtn.remove();
        winnerMSg.style.display = "flex";
    }else{
        ul.innerHTML = "";
        console.log(activeQues);
        questionNum.innerHTML = `${activeQues + 1}/${arrOfQuestion.length}`;
        question.innerHTML = `Q. ${arrOfQuestion[activeQues][0]}`;
        for (let j = 1; j < arrOfQuestion[activeQues].length; j++) {
            const li = document.createElement("li");
            const button = document.createElement("button");
            ul.appendChild(li);
            li.appendChild(button);
            button.innerHTML = arrOfQuestion[activeQues][j];
        }
    }
});
