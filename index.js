AOS.init({duration: 1000});

var splashScreen = document.getElementById("splashScreen");
var aboutOffset = document.getElementById("aboutOffset");

var bottom = $(splashScreen).position().top+$(splashScreen).outerHeight(false);
$(aboutOffset).css("height", window.innerHeight-bottom);

var arProject = document.getElementById("arProject");
var arPopup = document.getElementById("arPopup");
var rvccProject = document.getElementById("rvccProject");
var rvccPopup = document.getElementById("rvccPopup");

$(arProject).hover(
    function() {
    $(arPopup).show();
    $(arPopup).css("margin-bottom",-($(arPopup).height()));
}, function() {
    $(arPopup).hide();
});

$(rvccProject).hover(
    function() {
    $(rvccPopup).show();
    $(rvccPopup).css("margin-bottom",-($(rvccPopup).height()));
}, function() {
    $(rvccPopup).hide();
});