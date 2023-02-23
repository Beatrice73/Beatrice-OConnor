const myform = document.getElementById('myform');

myform.addEventListener("submit", (e) => {
    e.preventDefault();

const request = new XMLHttpRequest();

request.open("post", "login.php");
request.onload = function() {
    console.log(request.responseText);
}
  request.send(new FormData(myform))
});

/*
<form class="pform">
    <div>
        <label for="">Username</label> <i class="fa fa-user"></i>
    <input type="text" name="" id="username" class="input">
    </div>
    <div>
        <label for="">Email</label> <i class="fa fa-envelope" aria-hidden="true"></i>
    <input type="email" name="" id="email" class="input">
 </div>
    <div>
        <label for="">password</label> <i class="fa fa-key"></i>
    <input type="password" name="" id="password" class="input">
    </div>
  <button type="button" class="btn1" onclick="getInfo()" style="margin-top:100px; color: rgb(231, 18, 18);"> Login </button>
 </form>
*/



//todolist container 
/* <div class="todocon">
<div id="myDIV" class="header">
   <h2 style="margin:5px">Users Todo List</h2>
   <input type="text" id="myInput" placeholder="Title...">
   <span onclick="newElement()" class="addBtn">Add</span>
 </div>
 
 <ul id="myUL">
   <li>Make Payment</li>
   <li class="checked">Bin Collected</li>
   <li>Make Enquiries</li>
   <li>Check for next Collection</li>
   <li>Weekly Earnings</li>
   <li>Number of new Team members</li>
 </ul>
</div> */

