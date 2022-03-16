$(document).ready(function(){
    $(".left-section").mouseenter(function(){
    $(this).css("background-color", "red")
    });
    $(".left-section").mouseleave(function(){
    $(this).css("background-color", "")
    });
    $(".right-section").mouseenter(function(){
    $(this).css("background-color", "red")
    });
    $(".right-section").mouseleave(function(){
    $(this).css("background-color", "")
    });
});
