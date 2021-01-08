AOS.init({duration: 1000});

var splashScreen = document.getElementById("splashScreen");
var aboutOffset = document.getElementById("aboutOffset");
var arGrapherImg = document.getElementById("arGrapherImg");
var arGrapherDesc = document.getElementById("arGrapherDesc");

var bottom = $(splashScreen).position().top+$(splashScreen).outerHeight(false);
$(aboutOffset).css("height", window.innerHeight-bottom);
