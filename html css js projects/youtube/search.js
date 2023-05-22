
function homepagereturn(){
    location.href="index.html";
  }
  function myFunction(){
  document.querySelector(".leftsidedownmenu").classList.toggle('leftsidemenu') 
  }
    function disable_search_logo(){
        document.getElementById("inside-search-logo").style.display="none";
        document.querySelector(".search").style.marginLeft="-20px" 
  } 
  function searchpage(){
    let reload=JSON.parse(localStorage.getItem("search_key"))
    
        if(reload.length>1){
            location.href="search.html"
        }
    
}
function visiblesearchbtn(){
    document.querySelector(".search-touch-p").style.display="inline-block"
}function disablesearchbtn(){
    document.querySelector(".search-touch-p").style.display="none"
}
  let search_query=JSON.parse(localStorage.getItem("search_key"));
  document.getElementById("search").value=search_query;
  let search_term; 
  function inside_search_logo(){
      document.getElementById("inside-search-logo").style.display="flex";
      document.querySelector(".search").style.marginLeft="0px" 
      search_term=document.getElementById("search").value
      localStorage.setItem("search_key",JSON.stringify(search_term)); 
  }
  let api_key=JSON.parse(localStorage.getItem("apikey"));
  async function logJSONData(){
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=7&q=${search_query}&type=video&key=${api_key}`);
    const jsonData = await response.json();
    const elements= jsonData.items;
    console.log(elements)
    depolyeddata(elements);

  }
  logJSONData()
  let paste_data=""
  let videoarrayid2=[]
  function depolyeddata(el){
    for(let i=0;i<el.length;i++){
        paste_data+=`<div onclick="playvideo${i}()"class="rightsidebox${i}">
        <div class="left-side-image">
        <div class=left-side-image-box">
            <img id="left-side-image" src="${el[i].snippet.thumbnails.medium.url}">
          </div>
           
        </div>
        <div class="right-side-body">
            <div class="right-side-video-title">
                <h1 id="right-side-video-title">
                  ${el[i].snippet.title}
                </h1>
            </div>
            <div class="right-side-video-channel">
                <img id="right-side-video-img" src="${el[i].snippet.thumbnails.default.url}">
                <p id="right-side-video-p">
                    ${el[i].snippet.channelTitle}
                </p>
                
            </div>
            <div class="right-side-video-desc">
                <p id="right-side-video-desc-p">
                ${el[i].snippet.description};    
                </p>
                
            </div>

        </div>
          
    </div>`
    videoarrayid2.push(el[i].id.videoId)
    }
    localStorage.setItem("videoarray2",JSON.stringify(videoarrayid2))
    document.querySelector(".rightsidebody").innerHTML=paste_data;
  }

  function playvideo0(){
    document.querySelector(".rightsidebox0").style.backgroundColor="rgb(204, 202, 202)"
    let videoid=JSON.parse(localStorage.getItem("videoarray2"));
    
    localStorage.setItem("video_id",JSON.stringify(videoid[0]))
    location.href="playvideo.html";
  }
  function playvideo1(){
    document.querySelector(".rightsidebox1").style.backgroundColor="rgb(204, 202, 202)"
    document.querySelector(".rightsidebox1").style.backgroundColor="rgb(204, 202, 202)"
    let videoid=JSON.parse(localStorage.getItem("videoarray2"));
    localStorage.setItem("video_id",JSON.stringify(videoid[1]))
    location.href="playvideo.html";
  }
  function playvideo2(){
    document.querySelector(".rightsidebox2").style.backgroundColor="rgb(204, 202, 202)"
    let videoid=JSON.parse(localStorage.getItem("videoarray2"));
    localStorage.setItem("video_id",JSON.stringify(videoid[2]))
    location.href="playvideo.html";
  }
  function playvideo3(){
    document.querySelector(".rightsidebox3").style.backgroundColor="rgb(204, 202, 202)"
    let videoid=JSON.parse(localStorage.getItem("videoarray2"));
    localStorage.setItem("video_id",JSON.stringify(videoid[3]))
    location.href="playvideo.html";
  }function playvideo4(){
    document.querySelector(".rightsidebox4").style.backgroundColor="rgb(204, 202, 202)"
    let videoid=JSON.parse(localStorage.getItem("videoarray2"));
    localStorage.setItem("video_id",JSON.stringify(videoid[4]))
    location.href="playvideo.html";
  }  function playvideo5(){
    document.querySelector(".rightsidebox5").style.backgroundColor="rgb(204, 202, 202)"
    let videoid=JSON.parse(localStorage.getItem("videoarray2"));
    localStorage.setItem("video_id",JSON.stringify(videoid[5]))
    location.href="playvideo.html";
  }
  function playvideo6(){
    document.querySelector(".rightsidebox6").style.backgroundColor="rgb(204, 202, 202)"
    let videoid=JSON.parse(localStorage.getItem("videoarray2"));
    localStorage.setItem("video_id",JSON.stringify(videoid[6]))
    location.href="playvideo.html";
  }