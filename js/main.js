var toggleState = true;

function toggleNav() {
	if (toggleState == true) {
		document.getElementById("sideNavId").style.marginLeft = "-116px";
		document.getElementById("toggleSideNavId").style.backgroundColor = "#333";
		document.getElementById("toggleSideNavId").innerHTML = "&#10095";
	} else {
		document.getElementById("sideNavId").style.marginLeft = "0px";
		document.getElementById("toggleSideNavId").style.backgroundColor = "transparent";
		document.getElementById("toggleSideNavId").innerHTML = "&#10094";
	}
	toggleState = !toggleState;
}

function hbopenNav() {
    document.getElementById("myhbSidenav").style.width = "80%";
}

function hbcloseNav() {
    document.getElementById("myhbSidenav").style.width = "0";
}

var accordion = document.getElementsByClassName("accordion");
accordion[0].onclick = function() {
	document.getElementById("hbHome").classList.toggle("show");
}
var accordion = document.getElementsByClassName("accordion");
accordion[1].onclick = function() {
	document.getElementById("hbProjects").classList.toggle("show");
}
var accordion = document.getElementsByClassName("accordion");
accordion[2].onclick = function() {
	document.getElementById("hbCalendar").classList.toggle("show");
}
var accordion = document.getElementsByClassName("accordion");
accordion[3].onclick= function() {
	document.getElementById("hbTutorials").classList.toggle("show");
}
var accordion = document.getElementsByClassName("accordion");
accordion[4].onclick = function() {
	document.getElementById("hbIntranet").classList.toggle("show");
}
var accordion = document.getElementsByClassName("accordion");
accordion[5].onclick = function() {
	document.getElementById("hbContact").classList.toggle("show");
}

//for (var i = 0; i < 4; i++)	{
	//var accordion = document.getElementsByClassName("accordion");
	//accordion[i].onclick = function() {
	//	document.getElementById("1516").classList.toggle("show");
	//	console.log(i+1);
	//}
//}

var accordion = document.getElementsByClassName("accordion");
accordion[6].onclick = function() {
	document.getElementById("1516").classList.toggle("show");
	
}
accordion[7].onclick = function() {
	document.getElementById("1415").classList.toggle("show");
	
}
accordion[8].onclick = function() {
	document.getElementById("1314").classList.toggle("show");
	
}
accordion[9].onclick = function() {
	document.getElementById("1213").classList.toggle("show");
	//document.getElementById("mySidenav").style.width = "350px";
	
}
accordion[10].onclick = function() {
	document.getElementById("1112").classList.toggle("show");
	//document.getElementById("mySidenav").style.width = "350px";
	
}

//edit this to a for loop to go through all accordions