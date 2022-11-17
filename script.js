var todaysDate = moment().format('LLLL');

$("#currentDay").html(todaysDate);


function background() {
    var currentTime = moment().hours();
    
    $(".time-block").each(function(){
        var timeSlot = parseInt($(this).attr("id"));
    //--Color will change according to current time--
        if (timeSlot < currentTime) {
        $(this).addClass("past");

        }else if (timeSlot === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    
        }else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        }

    })
}

background();

$(document).ready(function(){
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time,text);
    })
});







    
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

  