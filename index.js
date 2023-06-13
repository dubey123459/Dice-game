

let randomimgnum = Math.floor(Math.random() * 6) + 1;
let dice = "dice" + randomimgnum + ".png";
let imgsource = "images/" + dice;

document.querySelector(".img1").src = imgsource;




let randomimgnum1 = Math.floor(Math.random() * 6) + 1;
let dice1 = "dice" + randomimgnum1 + ".png";
let imgsource1 = "images/" + dice1;

document.querySelector(".img2").src = imgsource1;


if( randomimgnum > randomimgnum1){
    document.querySelector("#tittles").innerHTML = "🚩 Player 1 Wins!";
}else if(randomimgnum1 > randomimgnum){
    document.querySelector("#tittles").innerHTML = "🚩 Player 2 Wins!";
}else{
    document.querySelector("#tittles").innerHTML = "Draw" 
}

