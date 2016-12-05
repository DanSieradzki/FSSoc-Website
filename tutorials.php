<?php require'templateHeader.php'; ?>

<style>
  #headerHr {
    transform: translate(300%) perspective(100px) rotateX(45deg);
  }
</style>

    <div id="myhbSidenav" class="hbsidenav">
        <a href="javascript:void(0)" class="hbclosebtn" onclick="hbToggleNav()">&#9776;</a>
        <span href="javascript:void(0)" id="hbTapSide" onclick="hbToggleNav()"></span>
        <a href="home.html" class="accordion">Home</a>
        <div class="panel" id="hbHome">           
            <div class="pplink">
                <a href="#">Gallery</a>
            </div>
            <div class="pplink">
                <a href="#">News</a>
            </div>
            <div class="pplink">
                <a href="#">Team</a>
            </div>
        </div>
        <a href="#" class="accordion">Projects</a>
        <div class="panel" id="hbProjects">
            <div class="pplink">
                <a href="projects.html">It Flies</a>
            </div>
            <div class="pplink">
                <a href="#">Pheonix</a>
            </div>
        </div>
        <a href="calendar.html" class="accordion">Calendar</a>
        <div class="panel" id="hbCalendar">
            <div class="pplink">
                <a href="#">Events</a>
            </div>
            <div class="pplink">
                <a href="#">Simulation room bookings</a>
            </div>
        </div>
        <a href="#" class="accordion">Tutorials</a>
        <div class="panel" id="hbTutorials">
            <div class="pplink">
                <a href="#">Excalibur</a>
            </div>
            <div class="pplink">
                <a href="#">Flight model</a>
            </div>
            <div class="pplink">
                <a href="#">CAD</a>
            </div>
        </div>
        <a href="http://www.fssoc.co.uk/intranet.php" class="accordion">Intranet</a>
        <div class="panel" id="hbIntranet">
        </div>
        <a href="contact.html" class="accordion">Contact</a>
        <div class="panel" id="hbContact">
            <div class="pplink">
                <a href="#">Alumni</a>
            </div>
            <div class="pplink">
                <a href="#">Sponsors</a>
            </div>
            <div class="pplink">
                <a href="#">Send us a message</a>
            </div>
        </div>        
        
    </li>
</ul>
</div>

<div id="sideNavId" class="tutorialBrowser">
    <input type="text" class="searchBarClass" name="searchBar"  placeholder="Search...">
    <div>
        <a href="#" class="accordion">Flight model</a>
            <div class="panel" id="flightModel">           
                <div class="pplink" id="fmLesson0">
                    <a href='#'>Mass Breakdown</a>
                </div>
                <div class="pplink" id="fmLesson1">
                    <a href='#'>Constraints analysis pt. I</a>
                </div>
                <div class="pplink" id="fmLesson2">
                    <a href='#'>Constraints analysis pt. II</a>
                </div>
                <div class="pplink" id="fmLesson3">
                    <a href='#'>Propulsion</a>
                </div>
                <div class="pplink" id="fmLesson4">
                    <a href='#'>Centre of gravity</a>
                </div>
                <div class="pplink" id="fmLesson5">
                    <a href='#'>Wing layout</a>
                </div>
                <div class="pplink" id="fmLesson6">
                    <a href='#'>Undercarriage</a>
                </div>
                <div class="pplink" id="fmLesson6">
                    <a href='#'>Aerofoils</a>
                </div>
                <div class="pplink" id="fmLesson7">
                    <a href='#'>Sim concepts pt. I</a>
                </div>
                <div class="pplink" id="fmLesson8">
                    <a href='#'>Sim concepts pt. II</a>
                </div>
                <div class="pplink" id="fmLesson9">
                    <a href='#'>Sim concepts recap</a>
                </div>
                <div class="pplink" id="fmLesson10">
                    <a href='#'>Presentations</a>
                </div>
            </div>
            <a href="#" class="accordion">CAD model</a>
            <div class="panel" id="cadModel">           
                <div class="pplink" id="cadLesson0">
                    <a href='#'>Sourcing Dimensions</a>
                </div>
                <div class="pplink" id="cadLesson1">
                    <a href='#'>SW setup and importing references</a>
                </div>
                <div class="pplink" id="cadLesson2">
                    <a href='#'></a>
                </div>
                <div class="pplink" id="cadLesson3">
                    <a href='#'></a>
                </div>
                <div class="pplink" id="cadLesson4">
                    <a href='#'></a>
                </div>
                <div class="pplink" id="cadLesson5">
                    <a href='#'></a>
                </div>
                <div class="pplink" id="cadLesson6">
                    <a href='#'></a>
                </div>
                <div class="pplink" id="cadLesson7">
                    <a href='#'></a>
                </div>
                <div class="pplink" id="cadLesson8">
                    <a href='#'></a>
                </div>
                <div class="pplink" id="cadLesson9">
                    <a href='#'></a>
                </div>
                <div class="pplink" id="cadLesson10">
                    <a href='#'></a>
                </div>
                <div class="pplink" id="cadLesson11">
                    <a href='#'></a>
                </div>
            </div>
    </div>
    <a id="toggleTutorialNavId" class="toggleTutorialNav" onclick="toggleTutorialNav()">&#10094;</a>
</div>

<div id="container">
     <div class-"wallpaper" style="background-color: #000;">        
        <iframe id="wallpaper" onclick=tutorVid() width="50%" height="500" src="https://www.youtube.com/embed/Rj6SADPtb7w" frameborder="0" allowfullscreen></iframe>
        <div class="wallpaperBar">
            <h1>Flight Simulation Tutorials</h1>
            <h2>FSSoc Tutorials</h2>
        </div>
    </div>
    <div class="pageContent">

      <h1>To do list:</h1><br>
      <p>Build the fucking page</p><br>
      <p>Js to max width video when clicked</p><br>
      <p>tutorial main page</p><br>
    
  </div>
</div>

<?php require'templateFooter.php'; ?>
