//Load Jquery
var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";



script.onload = function () {

//load html main
$('body').prepend(`<div>
<div style="background-color:gray;color:white"> MrCool YouTube Redesign </div>
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


$.get("https://returnyoutubedislikeapi.com/votes?videoId=7FEyjd2hNSk", function(data, status){
  dislikes = data.dislikes
  x = $('#segmented-like-button > ytd-toggle-button-renderer > yt-button-shape > button > div.cbox.yt-spec-button-shape-next--button-text-content > span').text()
  x = x + " | " + dislikes
  //alert(x)
  $("#segmented-like-button > ytd-toggle-button-renderer > yt-button-shape > button > div.cbox.yt-spec-button-shape-next--button-text-content > span").html(x)
})
    
};

document.head.appendChild(script);
