window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("main-header").style.paddingTop = "5px";
		document.getElementById("main-header").style.paddingBottom = "0px";
		document.getElementById("logo-img").style.height = "45px";
	} else {
		document.getElementById("main-header").style.paddingTop = "15px";
		document.getElementById("main-header").style.paddingBottom = "15px";
		document.getElementById("logo-img").style.height = "50px";
	}
}
