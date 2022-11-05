alert("Hi how are you")
//Load Jquery
var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";



script.onload = function () {

//load html
$('body').prepend(`<div>
<div style="background-color:gray;color:white"> MrCool YouTube Redesign </div>
</div>`)

//Load CSS
$('head').append(`<style>




</style>`)
    
};

document.head.appendChild(script);
