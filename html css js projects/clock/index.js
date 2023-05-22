
    function displaytime(){

    
    var some=new Date();
const date=some.getDate();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const month=monthNames[some.getMonth()];
const year=some.getFullYear()
const hour=some.getHours();
const minute=some.getMinutes();
const second=some.getSeconds();
document.getElementById("date").innerText=date;
document.getElementById("month").innerText=month;
document.getElementById("year").innerText=year;
document.getElementById("hour").innerText=hour;
document.getElementById("minute").innerText=minute;
document.getElementById("seconds").innerText=second;

if(hour>=20||hour<6){
   let nodeList = document.querySelectorAll(".getdates");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "white";
}
}if(hour>=0&&hour<6){
    document.getElementById("sun").src="imagessrc/night.png"
    document.querySelector("#clock").style.backgroundImage="url('imagessrc/nightbg.jpg')";
    document.querySelector("body").style.backgroundColor="#212A3E";
    
}
if(hour>=6&&hour<8){
    document.getElementById("sun").src="imagessrc/sun.png"
    document.querySelector("#clock").style.backgroundImage="url('imagessrc/6ambg.jpg')";
    document.querySelector("body").style.backgroundColor="#E86A33";
}if(hour<12&&hour>=8){
    document.getElementById("sun").src="imagessrc/sun.png"
    document.querySelector("#clock").style.backgroundImage="url('imagessrc/daybg.jpg')";
    document.querySelector("body").style.backgroundColor="#F7DB6A";


}if(hour>=0&&hour<12){
    document.getElementById("timezone").innerText="Am"   
}
if(hour==12){
    document.getElementById("hour").innerText=12;
    document.getElementById("timezone").innerText="Pm"
    document.querySelector("#clock").style.backgroundImage="url('imagessrc/12pmbg.jpg')";
    document.getElementById("sun").src="imagessrc/sun.png"
    document.querySelector("body").style.backgroundColor="#F7D060";
}
else if(hour==13){
    document.getElementById("hour").innerText=1;
    document.getElementById("timezone").innerText="Pm"
    document.getElementById("sun").src="imagessrc/sun.png"
    document.querySelector("#clock").style.backgroundImage="url('imagessrc/12pmbg.jpg')";
    document.querySelector("body").style.backgroundColor="#F7D060";
}
else if(hour==14){
    document.getElementById("hour").innerText=2;
    document.getElementById("timezone").innerText="Pm"
    document.getElementById("sun").src="imagessrc/sun.png"
    document.querySelector("#clock").style.backgroundImage="url('imagessrc/12pmbg.jpg')";
    document.querySelector("body").style.backgroundColor="#F7D060";
}
else if(hour==15){
    document.getElementById("hour").innerText=3;
    document.getElementById("timezone").innerText="Pm"
    document.getElementById("sun").src="imagessrc/sun.png"
    document.querySelector("#clock").style.backgroundImage="url('imagessrc/12pmbg.jpg')";
    document.querySelector("body").style.backgroundColor="#F7D060";
}
else if(hour==16){
    document.getElementById("hour").innerText=4;
    document.getElementById("timezone").innerText="Pm"
    document.getElementById("sun").src="imagessrc/sun.png"
    document.querySelector("#clock").style.backgroundImage="url('imagessrc/12pmbg.jpg')";
    document.querySelector("body").style.backgroundColor="#F7DB6A";
}
else if(hour==17){
    document.getElementById("hour").innerText=5;
    document.getElementById("timezone").innerText="Pm"
    document.getElementById("sun").src="imagessrc/sun.png"
    document.querySelector("#clock").style.backgroundImage="url('imagessrc/12pmbg.jpg')";
    document.querySelector("body").style.backgroundColor="#F7DB6A";  
}
else if(hour==18){
    document.getElementById("hour").innerText=6;
    document.getElementById("timezone").innerText="Pm"
    document.getElementById("sun").src="imagessrc/sun.png"
    document.querySelector("#clock").style.backgroundImage="url('imagessrc/eveningbg.jpg')";
    document.querySelector("body").style.backgroundColor="#E86A33";
 }
else if(hour==19){
    document.getElementById("hour").innerText=7;
    document.getElementById("timezone").innerText="Pm"
    document.getElementById("sun").src="imagessrc/night.png"
    document.querySelector("#clock").style.backgroundImage="url('imagessrc/nightbg.jpg')";
    document.querySelector("body").style.backgroundColor="#212A3E";
}
else if(hour==20){
    document.getElementById("hour").innerText=8;
    document.getElementById("timezone").innerText="Pm"
    document.getElementById("sun").src="imagessrc/night.png"
    document.querySelector("#clock").style.backgroundImage="url('imagessrc/nightbg.jpg')";
    document.querySelector("body").style.backgroundColor="#212A3E";
}
else if(hour==21){
    document.getElementById("hour").innerText=9;
    document.getElementById("timezone").innerText="Pm"
    document.getElementById("sun").src="imagessrc/night.png"
    document.querySelector("#clock").style.backgroundImage="url('imagessrc/nighstbg.jpg')";
    document.querySelector("body").style.backgroundColor="#212A3E";
    
}
else if(hour==22){
    document.getElementById("hour").innerText=10;
    document.getElementById("timezone").innerText="Pm"
    document.getElementById("sun").src="imagessrc/night.png"
    document.querySelector("#clock").style.backgroundImage="url('imagessrc/nightbg.jpg')";
    document.querySelector("body").style.backgroundColor="#212A3E";
    document.getElementById("sun").src="imagessrc/night.png"
    document.querySelector("#clock").style.backgroundImage="url('imagessrc/nightbg.jpg')";
    document.querySelector("body").style.backgroundColor="#212A3E";
}
else if(hour==23){
    document.getElementById("hour").innerText=11;
    document.getElementById("timezone").innerText="Pm"
    document.getElementById("sun").src="imagessrc/night.png"
    document.querySelector("#clock").style.backgroundImage="url('imagessrc/nightbg.jpg')";
    document.querySelector("body").style.backgroundColor="#212A3E";
}

console.log(hour)
let t = setTimeout(function(){ displaytime() }, 1000);
}
displaytime()
