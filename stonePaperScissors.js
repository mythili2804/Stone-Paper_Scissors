let opt=confirm("Shall we play Stone,Paper & Scissors?");


if(opt){
    let choice=prompt("Choose Stone , Paper & Scissors");
if(choice){
    let plchoice =choice.trim().toLowerCase();
   
if(plchoice==="stone" || plchoice==="paper"|| plchoice==="scissors"){
    let computer=Math.floor(Math.random()*3+1);
    let computerchoice=
    computer===1?
    "stone":computer===2?"paper":"scissors";


let winner=computerchoice===plchoice?
"Tie Game!":plchoice === "stone" && computerchoice === "scissors" ? "You Win!" :
plchoice === "paper" && computerchoice === "stone" ? "You Win!" :
plchoice === "scissors" && computerchoice === "paper" ? "You Win!" :
"Computer Wins";
alert(winner);
let playAgain=confirm("play Again");
playAgain?location.reload():alert("Ok Thanks for playing.");

}
else{
    alert("You didn't enter Rock ,Paper & Scissors")
}
}
else{
    alert("I guess you changed your mind.May be next time.");

}
}
else{
alert("May be next time");
}