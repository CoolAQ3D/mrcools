alert("Hiiiiii")
//Load Jquery
var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";



script.onload = function () {

//load html main
$('body').prepend(`<div>
<div id="cooltools" style="background-color:black;color:white;position: fixed !important"> MrCool YouTube Redesign </div>
</div>`)

//Load CSS main
$('head').append(`<style>




</style>`)


//Load Javascript

url = window.location.href.slice(window.location.href.indexOf('?') + 1);

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

  video_id = youtube_parser()

$.get(`https://returnyoutubedislikeapi.com/votes?videoId=${video_id}`, function(data, status){

  dislikes = "Dislike: " + data.dislikes
  $("#cooltools").html(dislikes)
  
})
    
};

document.head.appendChild(script);
