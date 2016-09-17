var toggleState0 = true;
var toggleState1 = true;
var toggleState2 = true;

//toggleNav js code - no need to un-comment it unless for Projects or possibly tutorials page

// function toggleNav() {
// 	if (toggleState0 == true) {
// 		document.getElementById("sideNavId").style.marginLeft = "-116px";
// 		document.getElementById("toggleSideNavId").style.backgroundColor = "#333";
// 		document.getElementById("toggleSideNavId").innerHTML = "&#10095";
// 	} else {
// 		document.getElementById("sideNavId").style.marginLeft = "0px";
// 		document.getElementById("toggleSideNavId").style.backgroundColor = "transparent";
// 		document.getElementById("toggleSideNavId").innerHTML = "&#10094";
// 	}
// 	toggleState0 = !toggleState0;
// }

function hbToggleNav() {
	if (toggleState1 == true) {
		document.getElementById("myhbSidenav").style.marginRight = "0";
        document.getElementById("myhbSidenav").style.boxShadow = "0 0 16px 0 black";
		document.getElementById("hbTapSide").style.display = "inline-block";
		document.getElementById("hamburger").style.color = "#bb882e";
        document.getElementById("container").style.marginLeft = "-80%";
        document.getElementById("container").style.transition = "0.6s";
	} else {
		document.getElementById("myhbSidenav").style.marginRight = "-80%";
        document.getElementById("myhbSidenav").style.boxShadow = "none";
		document.getElementById("hbTapSide").style.display = "none";
		document.getElementById("hamburger").style.color = "#eee";
        document.getElementById("container").style.marginLeft = "0";
        document.getElementById("container").style.transition = "0.4s";

	}
	toggleState1 = !toggleState1;
}


var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

var x;

function scrollRight()  {
    // x=-20%
    // console.log(x);
    document.getElementById("projectUl").scrollBy(20, 0);
}

function scrollLeft()  {
    // x=-20%
    // console.log(x);
    document.getElementById("projectUl").scrollBy(-20, 0);
}

var projectScroll = document.getElementsByClassName("projectScroll");

function toggleProjectNav() {
    if (toggleState1 == true) {        
        document.getElementById("projectNav").style.marginTop = "-120px";
        document.getElementById("toggleProjNavA").style.display = "none";
        document.getElementById("toggleProjNavB").style.display = "block";
        projectScroll[0].classList.add("hide");
        projectScroll[1].classList.add("hide");
        // projectScroll[0].classList.style.marginTop = "-120px";
    } else {
        document.getElementById("projectNav").style.marginTop = "0px";
        document.getElementById("toggleProjNavA").style.display = "block";
        document.getElementById("toggleProjNavB").style.display = "none";
        projectScroll[0].classList.remove("hide");
        projectScroll[1].classList.remove("hide");
    }
    toggleState1 = !toggleState1;
}