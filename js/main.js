function toggle(){
	var visible = document.getElementById("overlay");

	if (visible.className === "overlay") {
		visible.className += " visible";
	} else {
		visible.className = "overlay";
	}
}

if (!("ontouchstart" in document.documentElement)) {
document.documentElement.className += " no-touch";
}

$(document).ready(function(){
	var overlay = $('#overlay');

	$(document).keyup(function(e){
	  if (e.keyCode === 27) overlay.toggleClass('visible');
	});

    $("#overlay").click(function(){
        $(this).toggleClass("visible");
    });
});