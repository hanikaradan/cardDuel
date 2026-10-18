let playerHealth=10;
let opponentHealth=100;
let gameOver = false;
const attackBtn = document.getElementById("attackBtn");
const heavyAttackBtn =document.getElementById("heavyAttackBtn");
const oppHealthDisp = document.getElementById("opponentHealth");
const healBtn=document.getElementById("healBtn");
const playerHealthDisp = document.getElementById("playerHealth");
const result = document.getElementById("result");
const damageBtn =document.getElementById("damageBtn");

attackBtn.addEventListener("click",function(){
if(gameOver){
    return;
}
if(opponentHealth-10<=0){
    opponentHealth=0;
    console.log(opponentHealth);
   result.textContent= "You Win";
   gameOver=true;
}else{
    opponentHealth =opponentHealth-10;
}
oppHealthDisp.innerText = opponentHealth;
console.log(opponentHealth);
})


heavyAttackBtn.addEventListener("click",function(){
if(gameOver){
    return;
}
if(opponentHealth-20 <=0){
    opponentHealth=0;
   result.textContent= "You Win";
    gameOver=true;
 }else{
    opponentHealth =opponentHealth-20;
}
oppHealthDisp.innerText = opponentHealth;
console.log(opponentHealth);
})


healBtn.addEventListener("click",function(){ 
     if(gameOver){
    return;
}
if(playerHealth+15>100){
    playerHealth=100;
   
}else{
    playerHealth+=15;
 }  
 playerHealthDisp.innerText =playerHealth;
 console.log(playerHealth);
 
})


damageBtn.addEventListener("click",function(){
    if(gameOver){
    return;
}
 
    if(playerHealth-10<=0){
    playerHealth=0;
    result.textContent="you lost";
    gameOver=true;
}else{
    playerHealth-=10;
 }  
    
playerHealthDisp.textContent=playerHealth;
})