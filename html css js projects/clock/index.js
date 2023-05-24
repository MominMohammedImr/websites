
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
const hour_rotation=30*hour+minute/2;
const minute_rotation=6*minute;
const second_rotation=6*second
document.getElementById("clockhour").style.transform=`rotate(${hour_rotation}deg)`;
document.getElementById("clockminute").style.transform=`rotate(${minute_rotation}deg)`;
document.getElementById("clocksecond").style.transform=`rotate(${second_rotation}deg)`;
document.getElementById("date").innerText=date;
document.getElementById("month").innerText=month;
document.getElementById("year").innerText=year;
document.getElementById("minute").innerText=minute;
document.getElementById("hour").innerText=hour;
document.getElementById("seconds").innerText=second;

const timename={13:1,14:2,15:3,16:4,17:5,18:6,19:7,20:8,21:9,22:10,23:11,24:12}
for(let x in timename){
    if(x==hour){
        document.getElementById("hour").innerText=timename[x];
    }
}
if(hour<=11){
    document.getElementById("timezone").innerText="Am"
}else{
    document.getElementById("timezone").innerText="Pm"
}
let t = setTimeout(function(){ displaytime() }, 1000);
    }
displaytime()