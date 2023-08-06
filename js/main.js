let counter = 1;

const player1Display = document.getElementById("ply1");
const player2Display = document.getElementById("ply2");
const displayWinner = document.getElementById("wins");
const overlay = document.getElementById("overlay0");
const overlay1 = document.getElementById("overlay1");
const result = document.getElementById("wins");
const finalTally = document.getElementById("wins1");
const turnDsiplay = document.getElementById("symbol");
const resetBTN = document.getElementsByClassName("resetbtn");

const displayp1Points = document.getElementById("p1");
const displayp2Points = document.getElementById("p2");
let p1Points = 0;
let p2Points = 0;

player1Display.classList.add("animate1");
turnDsiplay.innerHTML = "X";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let buttons = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9];

buttons.forEach(button => button.addEventListener('click',(e) => {
    const mark = e.target.id;
    let count = counter % 2;
    let counts = counter % 2;
    switch(counts){
        case 0:
            player1Display.classList.add("animate1");
            player2Display.classList.remove("animate2");
            break;
        default:
            player2Display.classList.add("animate2");
            player1Display.classList.remove("animate1");
            break;
    }
    switch(count){
        case 0:
            document.getElementById(mark).innerHTML="O";
            document.getElementById(mark).setAttribute("disabled","");
            turnDsiplay.innerHTML = "X";
            turnDsiplay.setAttribute("style","color:red");
            counter++;
            break;
        default:
            document.getElementById(mark).innerHTML="X";
            document.getElementById(mark).setAttribute("disabled","");
            turnDsiplay.innerHTML = "O";
            turnDsiplay.setAttribute("style","color:blue");
            counter++;
            break;
    }
    checkPattern();
}));

function checkPattern(){
    let btn1 = document.getElementById("btn1").innerHTML;
    let btn2 = document.getElementById("btn2").innerHTML;
    let btn3 = document.getElementById("btn3").innerHTML;
    let btn4 = document.getElementById("btn4").innerHTML;
    let btn5 = document.getElementById("btn5").innerHTML;
    let btn6 = document.getElementById("btn6").innerHTML;
    let btn7 = document.getElementById("btn7").innerHTML;
    let btn8 = document.getElementById("btn8").innerHTML;
    let btn9 = document.getElementById("btn9").innerHTML;
    buttons = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9];

    let case1 = btn1 + btn2 + btn3;
    let case2 = btn4 + btn5 + btn6;
    let case3 = btn7 + btn8 + btn9;
    let case4 = btn1 + btn4 + btn7;
    let case5 = btn2 + btn5 + btn8;
    let case6 = btn3 + btn6 + btn9;
    let case7 = btn1 + btn5 + btn9;
    let case8 = btn3 + btn5 + btn7;
    let patterns = [case1,case2,case3,case4,case5,case6,case7,case8];

    for (let i = 0; i < patterns.length; i++) {
            if (patterns[i] === "XXX") {
                displayWinner.innerHTML = "Player 1 Wins";
                overlay.setAttribute("style","display:block");
                result.setAttribute("style","color:#8bc34a");
                player2Display.classList.remove("animate2");
                p1Points++;
                break;
            } 
            else if(patterns[i] === "OOO"){
                displayWinner.innerHTML = "Player 2 Wins";
                result.setAttribute("style","color:#8bc34a");
                overlay.setAttribute("style","display:block");
                player1Display.classList.remove("animate1");
                p2Points++;
                break;
        }
        if(btn1 != "" && btn2 != "" && btn3 != ""  && btn4 != "" && btn5 != "" && btn6 != "" && btn7 != "" && btn8 != "" && btn9 != ""){
            for(let j = 0; j < patterns.length; j++){
                if(patterns[j] != "XXX" && patterns[j] != "OOO"){
                    displayWinner.innerHTML = "Draw";
                    overlay.setAttribute("style","display:block");
                    result.setAttribute("style","color:#03a9f4");
                    player1Display.classList.remove("animate1");
                    player2Display.classList.remove("animate2");
                }
            }
        }
    }
    displayp1Points.innerHTML = p1Points;
    displayp2Points.innerHTML = p2Points;
}

function reset(){
    const btns =  Array.from(document.querySelectorAll(".btn"));
    btns.forEach(box => {
        box.removeAttribute("disabled","");
        box.innerHTML = "";
    });
    overlay.removeAttribute("style","display:block");
    player1Display.classList.add("animate1");
    turnDsiplay.innerHTML = "X";
    turnDsiplay.setAttribute("style","color:red");
    counter = 1;
}

function tally(){
    if(p1Points > p2Points){
        overlay1.setAttribute("style","display:block");
        finalTally.innerHTML = "Player 1 Wins";
    }
    else if(p1Points < p2Points){
        overlay1.setAttribute("style","display:block");
        finalTally.innerHTML = "Player 1 Wins";
    }
    else{
        overlay1.setAttribute("style","display:block");
        finalTally.innerHTML = "Draw";
    }
}
