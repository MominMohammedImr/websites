let displayText="";
let displaytag=document.getElementById("inputnum")
function btn1(){
    displaytag.innerText=displayText+1;
    displayText=displayText+1;
}
function btn2(){
    displaytag.innerText=displayText+2;
    displayText=displayText+2;
}
function btn3(){
    displaytag.innerText=displayText+3;
    displayText=displayText+3;
}
function btn4(){
    displaytag.innerText=displayText+4;
    displayText=displayText+4;
}
function btn5(){
    displaytag.innerText=displayText+5;
    displayText=displayText+5;
}
function btn6(){
    displaytag.innerText=displayText+6;
    displayText=displayText+6;
}
function btn7(){
    displaytag.innerText=displayText+7;
    displayText=displayText+7;
}
function btn8(){
    displaytag.innerText=displayText+8;
    displayText=displayText+8;
}
function btn9(){
    displaytag.innerText=displayText+9;
    displayText=displayText+9;
}
function btn0(){
    displaytag.innerText=displayText+0;
    displayText=displayText+0;
}
function btnc(){
    displayText="";
    displaytag.innerText=displayText;
}
function btnmod(){
    displaytag.innerText=displayText+"00";
    displayText=displayText+"00";
}
function btndel(){
    console.log(displayText.length)
    if(displayText.length==1){
        displayText=""
        displaytag.innerText=displayText;
    } if(displayText.length>1){
        displaytag.innerText=displayText.substring(0,displayText.length-1);
        displayText=displaytag.innerText;
    }
    
}
function btnplu(){
    displaytag.innerText=displayText+"+";
    displayText=displayText+"+";
}
function btnsub(){
    displaytag.innerText=displayText+"-";
    displayText=displayText+"-";
}
function btndiv(){
    displaytag.innerText=displayText+"/";
    displayText=displayText+"/";
}
function btnmul(){
    displaytag.innerText=displayText+"*";
    displayText=displayText+"*";
}
function btndot(){
    displaytag.innerText=displayText+".";
    displayText=displayText+".";
}
function btnequal(){
    displaytag.innerText=eval(displayText);
    displayText=displaytag.innerText;
}