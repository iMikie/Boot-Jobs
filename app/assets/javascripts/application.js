// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//$(document).on("page:change", function() {
//  githubFadeOut();
//});
//
//var githubFadeOut = function(){
//  $('#github-signin-button').on("click", function(event){
//    setTimeout(function(){ event }, 1000)
//    $('#github-signin-button').fadeOut();
//  });
//}


function reload_iframe(loc) {
    document.getElementById('embedded_page').src = loc;
//            document.getElementById('iframe_handle').style.top = pos;
//            document.getElementById('iframe_handle').style.backgroundColor = frameHandleColor;
}
function new_iframe(loc) {
    document.getElementById('embedded_page').src = loc;
}
