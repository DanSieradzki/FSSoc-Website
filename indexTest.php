<?php require'templateHeader.php'; ?>
<link rel="stylesheet" href="css/home.css?version=1">
<link rel="stylesheet" href="css/homeTest.css?version=1">

<div id="container">
  <div class="parallax_layer wallpaper">
    <!-- <img class="wallpaperImg" src="../img/wallpaper1.jpg" alt="wallpaper"> -->
  </div>
  <div class="parallax_layer pageContent">
    <div class="wallpaperBar">
      <h1>Welcome to the University of Manchester's Flight Simulation Society</h1>
      <h2>Welcome to FSSoc</h2>
    </div><!-- 
     --><div class="projectBoxes" id="aboutUsBox" onclick="expandAboutUs()">
     <a href="javascript:void(0)" class="expandResetX disappearingClass1" id="expandResetAboutUs" onclick="expandReset">x</a>
        <div class="projectImgCaptionT disappearingClass1" id="projectImgCaptionAboutT">
          <img src="../img/crest.png" id="crest">
          <h1>About us</h1>
          <p class="disappearingClass1">Find out who we are</p>
          <div class="expandedBoxDescription disappearingClass1" id="aboutUsExpanded">
            <p>As the only undergraduate flight simulation society in the world, we offer the unique opportunity to develop and test complex aircraft designs. Moreover, the design, communication and leadership skills attained will prove extremely valuable in future studies and work in industry - there simply isn't any way to beat hands on experience.</P>
            <a>Learn more</a>
          </div>
        </div>        
      </div><!-- 
       --><div class="projectBoxes" id="itFliesBox" onclick="expandItFlies()">
       <a href="javascript:void(0)" class="expandResetX disappearingClass1" id="expandResetItFlies" onclick="expandReset">x</a>
          <div class="projectImgCaptionT disappearingClass1" id="projectImgCaptionItFliesT">
            <h1>It Flies</h1>
            <p class="disappearingClass1">See some of the concepts we've developed</p>
            <div class="expandedBoxDescription disappearingClass1" id="itFliesExpanded">
              <p>The Flight Simulation Society enters two teams every year to the IT FLIES UK and USA competitions. The competitions aim to give society members the opportunity to develop the key skills of design and presentations, as well as setting the foundation for future involvement within the society.</p>
             <a>Learn more</a>     
            </div>
        </div>
      </div><!-- 
       --><div class="projectBoxes" id="projectPhoenixBox" onclick="expandProjectPhoenix()">
       <a href="javascript:void(0)" class="expandResetX disappearingClass1" id="expandResetProjectPhoenix" onclick="expandReset">x</a>
          <div class="projectImgCaptionT disappearingClass1" id="projectImgCaptionPhoenixT">
            <h1>Project Phoenix</h1>
            <p class="disappearingClass1">Delve into our mission to build a simulator</p>
            <div class="expandedBoxDescription disappearingClass1" id="projectPhoenixExpanded">
            <p>Open only to the best senior society members, Project Phoenix gives these members the opportunity to build a custom state-of-the-art flight simulator. The simulator will be constructed from a HAWK Mark II facsimile and will incorporate a glass cockpit, heads up display and G-cueing motion. The simulation for the simulator will be student developed.</p>
            <a>Learn more</a>
          </div>
        </div>        
      </div><!-- 
       --><div class="projectBoxes" id="aiaaBox" onclick="expandAIAA()">
       <a href="javascript:void(0)" class="expandResetX disappearingClass1" id="expandResetAIAA" onclick="expandReset">x</a>
          <div class="projectImgCaptionT disappearingClass1" id="projectImgCaptionAIAAT">
            <h1>AIAA</h1>
            <p class="disappearingClass1">Explore our latest venture</p>
            <div class="expandedBoxDescription disappearingClass1" id="AIAAExpanded">
              <p>AIAA text</p>
              <a>Learn more</a>
            </div>
          </div>        
        </div><!-- 
     --></div>
     <script src="../js/indexTest.js"></script>
    <?php require'templateFooter.php'; ?>