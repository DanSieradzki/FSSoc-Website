var toggleState0 = false;
var toggleState1 = true;
var toggleState2 = true;

//toggleNav js code - no need to un-comment it unless for Projects or possibly tutorials page

function toggleTutorialNav() {
	if (toggleState0 == true) {
		document.getElementById("sideNavId").style.marginLeft = "-116px";
		document.getElementById("toggleSideNavId").style.backgroundColor = "#333";
		document.getElementById("toggleSideNavId").innerHTML = "&#10095";
	} else {
		document.getElementById("sideNavId").style.marginLeft = "0px";
		document.getElementById("toggleSideNavId").style.backgroundColor = "transparent";
		document.getElementById("toggleSideNavId").innerHTML = "&#10094";
	}
	toggleState0 = !toggleState0;
}

function hbToggleNav() {
	if (toggleState1 == true) {
		document.getElementById("myhbSidenav").style.marginRight = "0";
        document.getElementById("myhbSidenav").style.boxShadow = "0 0 16px 0 black";
		document.getElementById("hbTapSide").style.display = "inline-block";
		document.getElementById("hamburger").style.color = "#bb882e";
        document.getElementById("container").style.marginLeft = "-80%";
        document.getElementById("container").style.transition = "0.6s ease-in-out";
	} else {
		document.getElementById("myhbSidenav").style.marginRight = "-80%";
        document.getElementById("myhbSidenav").style.boxShadow = "none";
		document.getElementById("hbTapSide").style.display = "none";
		document.getElementById("hamburger").style.color = "#eee";
        document.getElementById("container").style.marginLeft = "0";
        document.getElementById("container").style.transition = "0.4s ease-in-out";

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

var scrollPerc;
// document.getElementsByClassName("enclosure").addEventListener ("click", scrollRight, false);





function scrollRight()  {  
    scrollPerc = scrollPerc - .2; 
    if (scrollPerc <= 0)  {
        scrollPerc = 0;
    }      
    document.getElementById("projectUl").style.marginLeft = scrollPerc;
    // document.getElementById("projectUl").window.scrollBy(20, 0);
}

function scrollLeft()  {
    scrollPerc = scrollPerc + .2;   
    if (scrollPerc >= 1)  {
        scrollPerc = 1;
    }      
    document.getElementById("projectUl").style.marginLeft = scrollPerc;
    // document.getElementById("projectUl").window.scrollBy(-20, 0);
}

var projectScroll = document.getElementsByClassName("projectScroll");

function toggleProjectNav() {
    if (toggleState1 == true) {        
        document.getElementById("projectNav").style.marginTop = "-120px";
        // document.getElementById("toggleProjNavA").style.display = "none";
        // document.getElementById("toggleProjNavB").style.display = "block";
        document.getElementById("toggleProjNav").innerHTML = "show";
        projectScroll[0].style.marginTop = "-120px";
        projectScroll[1].style.marginTop = "-120px";
    } else {
        document.getElementById("projectNav").style.marginTop = "0px";
        // document.getElementById("toggleProjNavA").style.display = "block";
        // document.getElementById("toggleProjNavB").style.display = "none";
        document.getElementById("toggleProjNav").innerHTML = "hide";
        projectScroll[0].style.marginTop = "0";
        projectScroll[1].style.marginTop = "0";
    }
    toggleState1 = !toggleState1;
}

toggleProjNav();

// var getImgList = document.getElementsByClassName("projectLiImg").src;

// for (var i = 0; i < getImgList.length; i++) {
//     getImgList[i].onclick = function() {
//         document.getElementById("wallpaper").src = this.getImgList[i];
//     }
// }



function tutorVid() {
    document.getElementById("wallpaper").style.width: "100%"";
}