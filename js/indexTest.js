var disappearing = document.getElementsByClassName('disappearingClass1');
var projectBoxMinimised = document.getElementsByClassName('projectBoxes');
var textAligningLeft = document.getElementsByClassName('projectImgCaptionT');
var marginLefting = document.getElementsByClassName('projectImgCaptionT');
var resetDisappearing = document.getElementsByClassName('resetDisappear');
var crestDisappearing = document.getElementsByClassName('crest');

function expandBase()   {
    for (i = 0; i < disappearing.length; i++) {
       disappearing[i].style.display = "none";
    }
    for (i = 0; i < projectBoxMinimised.length; i++) {
       projectBoxMinimised[i].style.width = "3%";
    }
    for (i = 0; i < textAligningLeft.length; i++) {
       textAligningLeft[i].style.textAlign = "left";
    }
    for (i = 0; i < marginLefting.length; i++) {
       marginLefting[i].style.marginLeft = "45vh";
    }
    for (i = 0; i < crestDisappearing.length; i++) {
       crestDisappearing[i].style.display = "none";
    }
}
function expandAboutUs()    {
    expandBase();
    document.getElementById("aboutUsBox").style.width = "91%";
    document.getElementById("crestFSSoc").style.display = "inline-block";
    document.getElementById("projectImgCaptionAboutT").style.display = "block";
    document.getElementById("expandResetAboutUs").style.display = "inline-block";
    document.getElementById("aboutUsExpanded").style.display = "inline-block";
}
function expandItFlies()    {
    expandBase();
    document.getElementById("itFliesBox").style.width = "91%";   
    document.getElementById("crestItFlies").style.display = "inline-block";
    document.getElementById("projectImgCaptionItFliesT").style.display = "block"; 
    document.getElementById("expandResetItFlies").style.display = "inline-block";
    document.getElementById("itFliesExpanded").style.display = "inline-block";
}
function expandProjectPhoenix()    {
    expandBase();
    document.getElementById("projectPhoenixBox").style.width = "91%";
    document.getElementById("projectImgCaptionPhoenixT").style.display = "block";
    document.getElementById("expandResetProjectPhoenix").style.display = "inline-block";
    document.getElementById("projectPhoenixExpanded").style.display = "inline-block";
}
function expandAIAA()    {
    expandBase();
    document.getElementById("aiaaBox").style.width = "91%";
    document.getElementById("projectImgCaptionAIAAT").style.display = "block";
    document.getElementById("expandResetAIAA").style.display = "inline-block";
    document.getElementById("AIAAExpanded").style.display = "inline-block";
}
function expandReset()    {
    for (i = 0; i < disappearing.length; i++) {
       disappearing[i].style.display = "inline-block";
    }
    for (i = 0; i < projectBoxMinimised.length; i++) {
       projectBoxMinimised[i].style.width = "25%";
    }
    for (i = 0; i < textAligningLeft.length; i++) {
       textAligningLeft[i].style.textAlign = "center";
    }
    for (i = 0; i < marginLefting.length; i++) {
       marginLefting[i].style.marginLeft = "0";
    }
    for (i = 0; i < resetDisappearing.length; i++) {
       resetDisappearing[i].style.display = "none";
    }    
    document.getElementById("crest").style.display = "none";
}