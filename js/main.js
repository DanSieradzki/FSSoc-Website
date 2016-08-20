var toggleState = true;
var underlined = false;

underlineHover();

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

//function underlineHover(ele) {
//	var ID =  ele.id.toLowerCase();
//	if (underlined == true) {
//		document.getElementById(ID + "Underline").style.marginBottom = "5px";
//	} else {
//		document.getElementById(ID + "Underline").style.marginBottom = "0px";
//	}
//	underlined = !underlined;	

$( ".topNavBtn" )
  .mouseover(underline1(void) {
    document.getElementById("homeUnderline").style.marginBottom = "5px";
    console.log("1");
  })
  .mouseout(underline2() {
    document.getElementById("homeUnderline").style.marginBottom = "0px";
    console.log("0");
  });

//for (var i = 0; i < 4; i++)	{
	//var accordion = document.getElementsByClassName("accordion");
	//accordion[i].onclick = function() {
	//	document.getElementById("1516").classList.toggle("show");
	//	console.log(i+1);
	//}
//}

var accordion = document.getElementsByClassName("accordion");
accordion[0].onclick = function() {
	document.getElementById("1516").classList.toggle("show");
	console.log("1");
}
accordion[1].onclick = function() {
	document.getElementById("1415").classList.toggle("show");
	console.log("2");
}
accordion[2].onclick = function() {
	document.getElementById("1314").classList.toggle("show");
	console.log("3");
}
accordion[3].onclick = function() {
	document.getElementById("1213").classList.toggle("show");
	//document.getElementById("mySidenav").style.width = "350px";
	console.log("4");
}
accordion[4].onclick = function() {
	document.getElementById("1112").classList.toggle("show");
	//document.getElementById("mySidenav").style.width = "350px";
	console.log("5");
}

//edit this to a for loop to go through all accordions