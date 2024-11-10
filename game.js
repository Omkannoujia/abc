let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

let choices = ["Rock","Paper","Scissor"];
let random1 = Math.floor(Math.random()*3);
let random2 = Math.floor(Math.random()*3);
let random3 = Math.floor(Math.random()*3);
let computer1 = choices[random1];
let computer2 = choices[random2];
let computer3 = choices[random3];

let human_choice = document.getElementById("human");
let computer_choice = document.getElementById("computer");

let result_box = document.getElementById("result");

let human_score = 0;
let computer_score = 0;
rock.addEventListener("click",()=>{
    switch (computer1) {
        case "Rock":
            human_choice.innerText = "Human:Rock";
            computer_choice.innerText = "Computer:" + computer1;
            result_box.innerText = "Result:Draw"
            break;
    
        case "Scissor":
            human_choice.innerText = "Human:Rock";
            computer_choice.innerText = "Computer:" + computer1;
            result_box.innerText = "Result:Human win";
            human_score +=1;
            break;
        case "Paper":
            human_choice.innerText = "Human:Rock";
            computer_choice.innerText = "Computer:" + computer1;
            result_box.innerText = "Result:Computer win";
            computer_score +=1;
    }
    let score_box = document.getElementById("score-box");
    score_box.innerText = "Computer:" + computer_score  +"Human:" + human_score;
    
});
paper.addEventListener("click",()=>{
        switch (computer2) {
            case "Paper":
                human_choice.innerText = "Human:Paper";
                computer_choice.innerText = "Computer:" + computer2;
                result_box.innerText = "Result:Draw"
                break;
        
            case "Scissor":
                human_choice.innerText = "Human:Paper";
                computer_choice.innerText = "Computer:" + computer2;
                result_box.innerText = "Result:Computer win";
                computer_score +=1;
                break;
            case "Rock":
                human_choice.innerText = "Human:Paper";
                computer_choice.innerText = "Computer:" + computer2;
                result_box.innerText = "Result:Human win";
                human_score +=1;
        }
        let score_box = document.getElementById("score-box");
        score_box.innerText = "Computer:" + computer_score  +"Human:" + human_score;

});
scissor.addEventListener("click",()=>{
        switch (computer3) {
            case "Scissor":
                human_choice.innerText = "Human:Scissor";
                computer_choice.innerText = "Computer:" + computer3;
                result_box.innerText = "Result:Draw"
                break;
        
            case "Rock":
                human_choice.innerText = "Human:Scissor";
                computer_choice.innerText = "Computer:" + computer3;
                result_box.innerText = "Result:Computer win";
                computer_score +=1;
                break;
            case "Paper":
                human_choice.innerText = "Human:Scissor";
                computer_choice.innerText = "Computer:" + computer3;
                result_box.innerText = "Result:Human win";
                human_score +=1;
        }
        let score_box = document.getElementById("score-box");
        score_box.innerText = "Computer:" + computer_score  +"Human:" + human_score;
});

