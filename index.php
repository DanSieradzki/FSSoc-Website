<?php require'templateHeader.php'; ?>

<div id="container">
  <div class="parallax_layer wallpaper">
    <img class="wallpaperImg" src="../img/wallpaper1.jpg" alt="wallpaper">
  </div>
  <div class="parallax_layer pageContent">
    <div class="wallpaperBar">
      <h1>Welcome to the University of Manchester's Flight Simulation Society</h1>
      <h2>Welcome to FSSoc</h2>
    </div>
    <div id="first">
      <div class="divContent">
        <img src="../img/crest.png" id="crest">
        <h1>About us</h1>
        <p>As the only undergraduate flight simulation society in the world, we offer the unique opportunity to develop and test complex aircraft designs. Moreover, the design, communication and leadership skills attained will prove extremely valuable in future studies and work in industry - there simply isn't any way to beat hands on experience.</P>
      </div>
    </div>
    <div id="second">
      <div class="divContent">
        <img src="../img/index/mp500.jpg" id="mp500" class="projectImg" id="itFliesImg" alt="itFliesImg">
        <div class="projectImgCaption">
          <h1>It Flies</h1>
          <p>The Flight Simulation Society enters two teams every year to the IT FLIES UK and USA competitions. The competitions aim to give society members the opportunity to develop the key skills of design and presentations, as well as setting the foundation for future involvement within the society.</p>
          <a href="#">Learn more</a>        
        </div>
      </div>
    </div>
    <div id="third">
      <div class="divContent">
        <img src="../img/index/1.jpg" id="cockpit" class="projectImg" id="phoenixImg" alt="phoenixImg">
        <div class="projectImgCaption">
          <h1>Project Phoenix</h1>
          <p>Open only to the best senior society members, Project Phoenix gives these members the opportunity to build a custom state-of-the-art flight simulator. The simulator will be constructed from a HAWK Mark II facsimile and will incorporate a glass cockpit, heads up display and G-cueing motion. The simulation for the simulator will be student developed.</p>
          <a href="#">Learn more</a>
        </div>
      </div>
    </div>

      <!-- test -->

      <div class="iconBar">
        <div class="socialIcon zocial-facebook"></div>
        <div class="socialIcon zocial-twitter"></div>
        <div class="socialIcon zocial-instagram"></div>
      </div>

      <h1>To do list:</h1><br>
      <p>Add login button to far right</p><br>
      <p>Add social media icon links</p><br>
      <p>fix menu to top without hamburger disappearing for mobile; see #hamburger for details, currently closebtn is disabled</p><br>
      <p>Figure out why transitions don't work on the accordions</p><br>

    </div>
  </div>

  <?php require'templateFooter.php'; ?>
