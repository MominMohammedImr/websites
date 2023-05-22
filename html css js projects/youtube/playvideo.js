//reload page 1
function homepagereturn(){
  location.href="index.html";
}function searchpage(){
  let reload=JSON.parse(localStorage.getItem("search_key"))
  
      if(reload.length>1){
          location.href="search.html"
      }
  
}
//ends reload page here
function myFunction(){
document.querySelector(".leftsidedownmenu").classList.toggle('leftsidemenu') 
}
  function disable_search_logo(){
      document.getElementById("inside-search-logo").style.display="none";
      document.querySelector(".search").style.marginLeft="-20px" 
} let search_term;
 function inside_search_logo(){
    document.getElementById("inside-search-logo").style.display="flex";
    document.querySelector(".search").style.marginLeft="0px"
    search_term=document.getElementById("search").value
    localStorage.setItem("search_key",JSON.stringify(search_term));  
} function visiblesearchbtn(){
  document.querySelector(".search-touch-p").style.display="inline-block"
}function disablesearchbtn(){
  document.querySelector(".search-touch-p").style.display="none"
}
let api_key=JSON.parse(localStorage.getItem("apikey"))
console.log(api_key)
let video_id=JSON.parse(localStorage.getItem("video_id"))
document.getElementById("play-video").src=`https://www.youtube-nocookie.com/embed/${video_id}?rel=1&modestbranding=1&autoplay=0&disablekb=0&loop=0&showinfo=0`;
async function logJSONData() {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId=${video_id}&type=video&key=${api_key}`);
    const jsonData = await response.json();
    const elements= jsonData.items;
    console.log(elements);
    displaycontent(elements)

  }
  logJSONData()
  let textss="";
  let videoid_array=[];
  function displaycontent(element){
    
      for(let i=0;i<element.length;i++){
        
        textss+=`<div onclick="playvideo${i}()"class="right-side-video">
                        <div class="right-side-img">
                            <img id="right-side-img"src="${element[i].snippet.thumbnails.medium.url}">
                        </div>
                   <div class="right-side-text">
                        <p id="right-side-title">${element[i].snippet.title}</p>
                        <p id="right-side-channelname">${element[i].snippet.channelTitle}</p>
                    </div>
                    </div>`
        
          videoid_array.push(element[i].id.videoId)
      }
      localStorage.setItem("videoarray1",JSON.stringify(videoid_array))
      document.querySelector(".right-suggest-video").innerHTML=textss

    
  }
  function playvideo0(){
    let videoid=JSON.parse(localStorage.getItem("videoarray1"));
    localStorage.setItem("video_id",JSON.stringify(videoid[0]))
    location.href="playvideo.html";
  }
  function playvideo1(){
    let videoid=JSON.parse(localStorage.getItem("videoarray1"));
    localStorage.setItem("video_id",JSON.stringify(videoid[1]))
    location.href="playvideo.html";
  }
  function playvideo2(){
    let videoid=JSON.parse(localStorage.getItem("videoarray1"));
    localStorage.setItem("video_id",JSON.stringify(videoid[2]))
    location.href="playvideo.html";
  }
  function playvideo3(){
    let videoid=JSON.parse(localStorage.getItem("videoarray1"));
    localStorage.setItem("video_id",JSON.stringify(videoid[3]))
    location.href="playvideo.html";
  }function playvideo4(){
    let videoid=JSON.parse(localStorage.getItem("videoarray1"));
    localStorage.setItem("video_id",JSON.stringify(videoid[4]))
    location.href="playvideo.html";
  }  function playvideo5(){
    let videoid=JSON.parse(localStorage.getItem("videoarray1"));
    localStorage.setItem("video_id",JSON.stringify(videoid[5]))
    location.href="playvideo.html";
  }
  function playvideo6(){
    let videoid=JSON.parse(localStorage.getItem("videoarray1"));
    localStorage.setItem("video_id",JSON.stringify(videoid[6]))
    location.href="playvideo.html";
  }
  function playvideo7(){
    let videoid=JSON.parse(localStorage.getItem("videoarray1"));
    localStorage.setItem("video_id",JSON.stringify(videoid[7]))
    location.href="playvideo.html";
  }
  function playvideo8(){
    let videoid=JSON.parse(localStorage.getItem("videoarray1"));
    localStorage.setItem("video_id",JSON.stringify(videoid[8]))
    location.href="playvideo.html";
  }function playvideo9(){
    let videoid=JSON.parse(localStorage.getItem("videoarray1"));
    localStorage.setItem("video_id",JSON.stringify(videoid[9]))
    location.href="playvideo.html";
  } 

async function logJSONData1() {
  const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video_id}&key=${api_key}`);
  const jsonData = await response.json();
  const elements= jsonData.items;
  console.log(elements)
  depolyeddata(elements);

}
logJSONData1()
function depolyeddata(el){
  document.getElementById("video-titlep").innerText=el[0].snippet.title;
  document.getElementById("channel-img").src=el[0].snippet.thumbnails.default.url;
  document.getElementById("channel-title").innerText=el[0].snippet.channelTitle;
  document.getElementById("videos-disc").innerText=el[0].snippet.description;
}
