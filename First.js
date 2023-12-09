let buttons = document.querySelectorAll(".B1");
let reset = document.querySelector("#reset");
let cont = document.querySelector(".cont");
let Wintext = document.querySelector(".Win");
let newGame = document.querySelector(".newGame");

let turn = true; // if pleyar 0 palaying then it will store trun, athorwise it will store false

const patterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

buttons.forEach((B1) => {
  B1.addEventListener("click", () => {
    console.log("Box was Clicked");
    if (turn) {
      B1.innerText = "O";
      B1.style.color = "red"
      turn = false;
    }
    else {
      B1.innerText = "X"
      B1.style.color = "blue"
      turn = true;
    }
    B1.disabled = true;

    CheakWinner();
  })
})

const ShowWinner = (winner) => {
  Wintext.innerText = 'Congratulations';
  cont.classList.remove("hide");
}

const disablede = () =>{
    for(let butt of buttons){
      butt.disabled = true;
    }
}

const resett = () =>{
      turn = true;
      buttons.forEach((B1) => {
        B1.innerText = "";
      })   
      eanablede();
      Wintext.innerText = "Let's see who is the Winner"
}
const eanablede = () =>{
  for(let butt of buttons){
    butt.disabled = false;
    
  }
}


const CheakWinner = () => {
    for (let pattern of patterns) {
      let pott0 = buttons[pattern[0]].innerText;
      let pott1 = buttons[pattern[1]].innerText;
      let pott2 = buttons[pattern[2]].innerText;

      if (pott0 != "" && pott1 != "" && pott2 != "") {
        if (pott0 === pott1 && pott1 === pott2) {
          console.log("Winner", pott0);
          ShowWinner(pott0);
          disablede();
        }
      }
    }
  }

reset.addEventListener("click",resett);


