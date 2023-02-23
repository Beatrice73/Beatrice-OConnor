<?php
session_start();
include("connect.php")
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Registration</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <style>
      .frmcont{
        width:40%;
        margin-left:400px
      }
    </style>

</head>
<body>
  <div class="navdiv">
    <img src="./images/Bee's Solid Waste Service.png" style="width: 100px; border-radius:50%;" alt="">
    <nav>
      <ul>
       <li><a href="index.html">Home</a></li>
       <li><a href="contact.html">Contact</a></li>
       <li><a href="about.html">About</a></li>
        <li><a href="service.html">Service</a>
          <ul class="drplist">
          <li><a href="">Man Service</a></li>
         <li><a href="">Tricycle Service</a></li> 
         <li><a hreef="">Truck Service</a></li> 
         <li> <a href="">Forniture Service</a></li>
          </ul>
        </li>
      </ul>
    </nav>
   
  </div>
    <div class="frmcont">
        <form id="form" action="connect.php" method="post">
            <h1>Registration</h1>
            <div class="input-control">
                <label for="username">Username</label>
                <input id="username" name="username" type="text" required>
              
            </div>
            <div class="input-control">
                <label for="email">Email</label>
                <input id="email" name="email" type="text" required>
                
            </div>

            <div class="input-control">
                <label for="phone">Phone</label>
                <input id="phone" name="phone" type="text" required>
                
            </div>

            <div class="input-control">
                <label for="password">Password</label>
                <input id="password"name="password" type="password"required>
      
            </div>
            <div class="input-control">
                <label for="password2">Password again</label>
                <input id="password2" name="password2" type="password" required>
            </div>
            <input type="submit">
        </form>
         <!-- modal login form -->
        <p style="color:black; font-size:20px; text-align:center;">Already have an account?</p>
         <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>
          
          <div id="id01" class="modal">
            
            <form class="modal-content animate" action="loginregister/login.php" method="post">
              <div class="imgcontainer">
                <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
                <img src="./images/avata.png" alt="Avatar" class="avatar">
              </div>
          
              <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required>
          
                <label for="email"><b>Email</b></label>
                <input type="email" placeholder="Enter Email" name="email" required>
          
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>
                  
                <a href="dashboard.html"><button type="submit">Login</button></a>
                <label>
                  <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
              </div>
          
              <div class="container" style="background-color:#f1f1f1">
                <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
              </div>
            </form>
          </div>
   
    </div>

<script src="waste.js"></script>
<footer>
  <div class="footercon">
   <h1>Bee's Solid Waste Service</h1>
   <div class="footcon">
    <a href="service.html">our Services</a>
    <a href="about.html">About us</a>
    <a href="contact.html">Contact us</a>
  </div>
  <hr>
  </div>
  <div class="footericon">
  <a href="https://www.facebook.com/benjina.oconnor.7"><i class="fa fa-facebook-official"></i></a>

  <a href=" https://wa.me/+23276546865"><i class="fa fa-whatsapp"></i></a>
</div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>


</body>
</html>
