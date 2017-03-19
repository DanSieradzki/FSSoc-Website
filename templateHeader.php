<!doctype html>
<html class="no-js" lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">        
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>FSSoc</title>

    <!-- <link rel="shortcut-icon" type="../img/logo.png" href="favicon.ico" />
    <link rel="apple-touch-icon" href="apple-touch-icon.png"> -->
    <link rel="stylesheet" href="../img/logo.png" type='img/logo.png'>
    <link rel="stylesheet" href="../css/normalize.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="../css/main.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="../css/style.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="../css/boilerplate.css?<?php echo time(); ?>">
    <link href="https://fonts.googleapis.com/css?family=Libre+Franklin" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="icon" href="img/favicon.png" type="image/x-icon" />
    <script src="../js/vendor/modernizr-2.8.3.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
</head>
<body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
            <![endif]-->

            <header>
                <a href="#" id="logo">
                    <img src="../img/favicon.png" alt="Logo">
                </a>
                <ul class="topNavClass">
                    <li class="topNavLi one">
                        <a href="index.php" id="Home" class="topNavBtn">Home</a>
                        <div class="dropdown">
                            <a href="#">Gallery</a>
                            <a href="#">News</a>
                            <a href="#">Committee</a>
                            <a href="#">Alumni</a>
                        </div>
                    </li><!-- 
                 --><li class="topNavLi two">
                        <a href="#" id="Projects" class="topNavBtn">Projects</a>
                        <div class="dropdown">
                            <a href="itFlies.php">It Flies</a>
                            <a href="#">Phoenix</a>
                        </div>
                    </li><!-- 
                 --><li class="topNavLi three">
                        <a href="calendar.php" id="Calendar" class="topNavBtn">Calendar</a>
                        <div class="dropdown">
                            <a href="#">Events</a>
                            <a href="#">Simulation room bookings</a>
                        </div>
                    </li><!-- 
                 --><li class="topNavLi four">
                        <a href="tutorials.php" id="Tutorials" class="topNavBtn">Tutorials</a>
                        <div class="dropdown">
                            <a href="#">Excalibur</a>
                            <a href="#">Flight model</a>
                            <a href="#">CAD</a>
                        </div>
                    </li><!-- 
                 --><li class="topNavLi five">
                        <a href="http://www.fssoc.co.uk/intranet.php" id="Intranet" class="topNavBtn">Intranet</a>
                    </li><!-- 
                 --><li class="topNavLi six">
                        <a href="contact.php" id="Contact" class="topNavBtn">Contact</a>
                        <div class="dropdown">
                            <a href="#">Sponsors</a>
                            <a href="#">Send us a message</a>
                        </div>
                    </li><!--
                    <!-- <li class="topNavLi seven">
                        <a class="login">Login</a>
                        <div class="dropdown">
                            <form action="action_page.php">First name:
                            <input type="text" name="username" value="Username">                
                            <input type="text" name="password" value="Password">                      
                            <input type="submit" value="Submit">
                        </form>
                        </div>
                    </li> -->
                    <hr id="headerHr">
                </ul>
            </header>

    <div id="myhbSidenav" class="hbsidenav">
        <a href="javascript:void(0)" class="hbclosebtn" onclick="hbToggleNav()">&#9776;</a>
        <span href="javascript:void(0)" id="hbTapSide" onclick="hbToggleNav()"></span>
        <a href="#" class="accordion">Home</a>
        <div class="panel" id="hbHome">           
            <div class="pplink">
                <a href="#">Gallery</a>
            </div>
            <div class="pplink">
                <a href="#">News</a>
            </div>
            <div class="pplink">
                <a href="#">Committee</a>
            </div>
            <div class="pplink">
                <a href="#">Alumni</a>
            </div>
        </div>
        <a href="#" class="accordion">Projects</a>
        <div class="panel" id="hbProjects">
            <div class="pplink">
                <a href="itFlies.php">It Flies</a>
            </div>
            <div class="pplink">
                <a href="#">Phoenix</a>
            </div>
        </div>
        <a href="#" class="accordion">Calendar</a>
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
        <a href="#" class="accordion">Intranet</a>
        <div class="panel" id="hbIntranet">
        </div>
        <a href="#" class="accordion">Contact</a>
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