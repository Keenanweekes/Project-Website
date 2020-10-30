window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("main-header").style.paddingTop = "0px";
		document.getElementById("main-header").style.paddingBottom = "0px";
	} else {
		document.getElementById("main-header").style.paddingTop = "15px";
		document.getElementById("main-header").style.paddingBottom = "15px";
	}
}