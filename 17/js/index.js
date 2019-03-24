$(".day").on("click", function() {
  $('.day-number-clone, .day-popup-title span').html($(this).children(".day-number").html());
  var positionDayPopup = {
    bottom: "auto",
    right: "auto",
    top: $(this).position().top,
    left: $(this).position().left,
    width: $(this).outerWidth(),
    height: $(this).outerHeight(),
    background: $(this).css("background-color"),
  };
  var expandDayPopup = {
    top: "5%",
    left: "2%",
    right: "2%",
    bottom: "5%",
    width: "96%",
    height: "90%",
    background: "#fff",
    "border-top":"0"
  };
  $('.day-popup').removeAttr('style').css(positionDayPopup);
  setTimeout(function() {
    $('.day-popup').addClass("active shadow").css(expandDayPopup);
    $('.day-popup-cover, .day-popup-close').addClass('view');
  }, 1);

});


document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = evt.key == "Escape";
    } else {
        isEscape = evt.keyCode == 27;
    }
    if (isEscape) {
        closeDayPopup();
    }
};


$(".day-popup-close, .day-popup-cover").on("click", function() {
  closeDayPopup();
});

function closeDayPopup(){
  $('.day-popup').removeClass("active shadow").hide();
  $('.day-popup-cover, .day-popup-close').removeClass('view');
  
}