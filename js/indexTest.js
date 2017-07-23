var disappearing = document.getElementsByClassName('disappearingClass1');
var projectBoxMinimised = document.getElementsByClassName('projectBoxes');
var textAligningLeft = document.getElementsByClassName('projectImgCaptionT');
var marginLefting = document.getElementsByClassName('projectImgCaptionT');

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
       marginLefting[i].style.marginLeft = "20vh";
    }
}

function expandAboutUs()    {
    expandBase();
    document.getElementById("aboutUsBox").style.width = "91%";
    // document.getElementById("crest").style.display = "inline-block";
    document.getElementById("projectImgCaptionAboutT").style.display = "block";
    document.getElementById("expandResetAboutUs").style.display = "inline-block";
    document.getElementById("aboutUsExpanded").style.display = "inline-block";
}

function expandItFlies()    {
    expandBase();
    document.getElementById("itFliesBox").style.width = "91%";   
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
    document.getElementById("aboutUsBox").style.width = "25%";
    document.getElementById("itFliesBox").style.width = "25%";
    document.getElementById("projectPhoenixBox").style.width = "25%";
    document.getElementById("aiaaBox").style.width = "25%";
    document.getElementById("crest").style.display = "none";

    document.getElementById("projectImgCaptionAboutT").style.display = "block";
    document.getElementById("projectImgCaptionItFliesT").style.display = "block";
    document.getElementById("projectImgCaptionPhoenixT").style.display = "block";
    document.getElementById("projectImgCaptionAIAAT").style.display = "block";

    document.getElementById("aboutUsExpanded").style.display = "none";
    document.getElementById("itFliesExpanded").style.display = "none";
    document.getElementById("projectPhoenixExpanded").style.display = "none";
    document.getElementById("AIAAExpanded").style.display = "none";

    document.getElementById("expandResetAboutUs").style.display = "none";
    document.getElementById("expandResetItFlies").style.display = "none";
    document.getElementById("expandResetProjectPhoenix").style.display = "none";
    document.getElementById("expandResetAIAA").style.display = "none";
}