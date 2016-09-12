var toggleState0 = true;
var toggleState1 = true;

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
		document.getElementById("hbTapSide").style.display = "inline-block";
		document.getElementById("hamburger").style.color = "#bb882e";
	} else {
		document.getElementById("myhbSidenav").style.marginRight = "-80%";
		document.getElementById("hbTapSide").style.display = "none";
		document.getElementById("hamburger").style.color = "#eee";
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