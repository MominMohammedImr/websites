function editname(){
    let name1=prompt("Enter player 1 name");
 let name2=prompt("Enter player 2 name ");

    document.getElementById("player1").innerText=name1;
    document.getElementById("player2").innerText=name2;
    if(name1==""&&name2==""){
        alert("Please enter player1 and player 2 name ")
        let name1=prompt("Enter player 1 name");
        let name2=prompt("Enter player 2 name ");
        document.getElementById("player1").innerText=name1;
        document.getElementById("player2").innerText=name2;
        
    }
    else if(name1==""){
        alert("Please enter player 1 name ")
        let name1=prompt("Enter player 1 name");
        document.getElementById("player1").innerText=name1;
    }else if(name2==""){
        alert("Please enter player 2 name ")
        let name2=prompt("Enter player 2 name");
        document.getElementById("player2").innerText=name2;

    }

}
function rolldice(){
    var dice1=Math.floor(Math.random()*6)+1;
    var dice2=Math.floor(Math.random()*6)+1;
    document.getElementById("playerimg1").src="../Dicegame/imgsources/"+dice1+".png";
    document.getElementById("playerimg2").src="../Dicegame/imgsources/"+dice2+".png";
    if(dice1>dice2){
        document.getElementById("winnerbox1").style.visibility="visible"
        document.getElementById("winnerp").innerHTML="Winner"+"<br>"+document.getElementById("player1").innerText;
        document.getElementById("displayimglogo").src="../Dicegame/imgsources/winner.png";
    }if(dice2>dice1){
        document.getElementById("winnerbox1").style.visibility="visible"
        document.getElementById("winnerp").innerHTML="Winner"+"<br>"+document.getElementById("player2").innerText;
        document.getElementById("displayimglogo").src="../Dicegame/imgsources/winner.png";
    }
    if(dice1==dice2){
        document.getElementById("winnerbox1").style.visibility="visible"
        document.getElementById("winnerp").innerHTML="Both"+"<br>"+"Winners";
        document.getElementById("displayimglogo").src="../Dicegame/imgsources/equal.png";
    }
}
