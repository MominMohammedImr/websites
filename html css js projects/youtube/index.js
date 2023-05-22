const fs=require("fs")

function sc1(){
    document.querySelector("#sidemenu1").style.backgroundColor="#eeeeee"
}function cs1(){
    document.querySelector("#sidemenu1").style.backgroundColor="#FFFFFF"
}
function sc2(){
    document.querySelector("#sidemenu2").style.backgroundColor="#eeeeee"
}function cs2(){
    document.querySelector("#sidemenu2").style.backgroundColor="#FFFFFF"
}function sc3(){
    document.querySelector("#sidemenu3").style.backgroundColor="#eeeeee"
}function cs3(){
    document.querySelector("#sidemenu3").style.backgroundColor="#FFFFFF"
}function sc4(){
    document.querySelector("#sidemenu4").style.backgroundColor="#eeeeee"
}function cs4(){
    document.querySelector("#sidemenu4").style.backgroundColor="#FFFFFF"
}

function myFunction(){
    document.getElementById("myDropdown").classList.toggle('show');
document.querySelector(".sidemenubro").classList.toggle('leftsidemenu') 
}
  function disable_search_logo(){
      document.getElementById("inside-search-logo").style.display="none";
      document.querySelector(".search").style.marginLeft="-20px" 
} 
let search_term;

 function inside_search_logo(){
    document.getElementById("inside-search-logo").style.display="flex";
    document.querySelector(".search").style.marginLeft="0px"
     search_term=document.getElementById("search").value
     localStorage.setItem("search_key",JSON.stringify(search_term));
    
} 
function visiblesearchbtn(){
    document.querySelector(".search-touch-p").style.display="inline-block"
}function disablesearchbtn(){
    document.querySelector(".search-touch-p").style.display="none"
}
function searchpage(){

    let reload=JSON.parse(localStorage.getItem("search_key"))
        if(reload.length>1){
            location.href="search.html"
        }
    
}
let api_key='AIzaSyAF9TVPNiakEbHwU4Vlma1asS5Kl9c49IE'
localStorage.setItem("apikey",JSON.stringify(api_key));

async function logJSONData() {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&key=${api_key}`);
    const jsonData = await response.json();
    const elements= jsonData.items;
            displaycontent(elements);     
  }
  logJSONData()
  let textsss="";
  let video_id=[];
  function displaycontent(element){
    
      for(let i=0;i<element.length;i++){
        textsss+=`<div onclick="playvideo${i}()"class="box-container${i}">
        <div class="box-image">
                <img id="video-img" src="${element[i].snippet.thumbnails.high.url}">
        </div>
        <div class="description-video">
        <div class="desc-channel-img">
        <img id="desc-video-img" src="${element[i].snippet.thumbnails.default.url}">
        
        </div>
            
            <div class="desc-video-p">
                <p id="desc-video-title">${element[i].snippet.title}</p>
               <p id="desc-video-channel-name">${element[i].snippet.channelTitle}</p>
            </div>
            
        </div>
        </div>`
        video_id.push(element[i].id.videoId);
      }
      console.log(element)
      localStorage.setItem("videoarray",JSON.stringify(video_id));
      document.querySelector(".sub").innerHTML=textsss;
     
  }
  function playvideo0(){
    let videoid=JSON.parse(localStorage.getItem("videoarray"));
    localStorage.setItem("video_id",JSON.stringify(videoid[0]))
    location.href="playvideo.html";
  }
  function playvideo1(){
    let videoid=JSON.parse(localStorage.getItem("videoarray"));
    localStorage.setItem("video_id",JSON.stringify(videoid[1]))
    location.href="playvideo.html";
  }
  function playvideo2(){
    let videoid=JSON.parse(localStorage.getItem("videoarray"));
    localStorage.setItem("video_id",JSON.stringify(videoid[2]))
    location.href="playvideo.html";
  }
  function playvideo3(){
    let videoid=JSON.parse(localStorage.getItem("videoarray"));
    localStorage.setItem("video_id",JSON.stringify(videoid[3]))
    location.href="playvideo.html";
  }function playvideo4(){
    let videoid=JSON.parse(localStorage.getItem("videoarray"));
    localStorage.setItem("video_id",JSON.stringify(videoid[4]))
    location.href="playvideo.html";
  }  function playvideo5(){
    let videoid=JSON.parse(localStorage.getItem("videoarray"));
    localStorage.setItem("video_id",JSON.stringify(videoid[5]))
    location.href="playvideo.html";
  }
  function playvideo6(){
    let videoid=JSON.parse(localStorage.getItem("videoarray"));
    localStorage.setItem("video_id",JSON.stringify(videoid[6]))
    location.href="playvideo.html";
  }
  function playvideo7(){
    let videoid=JSON.parse(localStorage.getItem("videoarray"));
    localStorage.setItem("video_id",JSON.stringify(videoid[7]))
    location.href="playvideo.html";
  }
  function playvideo8(){
    let videoid=JSON.parse(localStorage.getItem("videoarray"));
    localStorage.setItem("video_id",JSON.stringify(videoid[8]))
    location.href="playvideo.html";
  }function playvideo9(){
    let videoid=JSON.parse(localStorage.getItem("videoarray"));
    localStorage.setItem("video_id",JSON.stringify(videoid[9]))
    location.href="playvideo.html";
  }  function playvideo10(){
    let videoid=JSON.parse(localStorage.getItem("videoarray"));
    localStorage.setItem("video_id",JSON.stringify(videoid[10]))
    location.href="playvideo.html";
  }
  function playvideo11(){
    let videoid=JSON.parse(localStorage.getItem("videoarray"));
    localStorage.setItem("video_id",JSON.stringify(videoid[11]))
    location.href="playvideo.html";
  }
  function playvideo12(){
    let videoid=localStorage.getItem("videoarray");
    localStorage.setItem("video_id",videoid[12])
    location.href="playvideo.html";
  }
  function playvideo13(){
    let videoid=JSON.parse(localStorage.getItem("videoarray"));
    localStorage.setItem("video_id",JSON.stringify(videoid[13]))
    location.href="playvideo.html";
  }function playvideo14(){
    let videoid=JSON.parse(localStorage.getItem("videoarray"));
    localStorage.setItem("video_id",JSON.stringify(videoid[14]))
    location.href="playvideo.html";
  }