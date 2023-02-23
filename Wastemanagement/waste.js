//login2
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

// nav

function myFunction() {
    var x = document.getElementById("mymnav");
    if (x.className === "mnav") {
      x.className += " responsive";
    } else {
      x.className = "mnav";
    }
  }

// endofnav



//login
var objpeople = [
    {
        username : "Beatriceoconnor",
        email : "oconnorbeatrice@gmail.com",
        password : "Beatrice9310"
    },
    {
        username : "O'Connor",
        email : "oconnorbeatrice73@gmail.com",
        password : "Beatrice9310"
    }
]
function getInfo() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    for(var i = 0; i< objpeople.length; i++) {
        if (username == objpeople[i].username, email == objpeople[i].email && password == objpeople[i].password){
            console.log(username + " is logged in !!!") 
            window.
            rturn
        }
    }
    console.log('incorrect username, invalid email or password')
}

//modal login form
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var login = document.getElementById('login');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == login) {
        login.style.display = "none";
    }
}

//showmodal
var btn = document.getElementById('show-popup');
var popup = mobiscroll.popup('#my-popup', {
    buttons: [
        'set',
        'cancel'
    ],
    display: 'anchored',
});

btn.addEventListener('click', function () {
    popup.setOptions({
        anchor: e.target
    });
    popup.open();
});

        //todo app


const taskInput = document.querySelector('.task-input input'),
filters = document.querySelectorAll('.filters span'),
clearAll = document.querySelector('.clear-btn'),
taskBox = document.querySelector('task-box');

let editId,
isEditTask = false;

todos = JSON.parse(localStorage.getItem('todo-list'));


filters.forEach(btn => {
    btn.addEventListener('click', () => {
       document.querySelector('span.active').classList.remove('active');
       btn.classList.add('active');
       showTodo(btn.id);
    })
})

function showTodo(filter) {
    let liTag = "";
    if (todos) {
        todos.forEach((todo, id) => {
            let completed = todo.status == 'completed' ? 'completed' : '';
            if (filter == todo.status || filter == 'all') {
                liTag += `
                <li class="task">
                    <label for="${id}">
                        <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
                        <p class="${completed}">${todo.name}</p>
                    </label>
                    <div class="settings">
                      <i onclick="showMenu(this)" class="fa fa-ellipsis-h"></i>
                      <ul class="task-menu">
                            <li onclick='editTask(${id}, "${todo.name}")'> <i class="fa fa-pencil"></i>Edit</li>
                            <li onclick='deleteTask(${id}, "${filter}")'> <i class="fa fa-trash"></i>Delete</li>
                       </ul>
                    </div>
                </li>
                `;
            }

        })
    }
    taskBox.innerHTML = liTag || `<span> You don't have any task here</span>`;
    let checkTask = taskBox.querySelectorAll('.task');
    !checkTask.length ? clearAll.classList.remove('active') : clearAll.classList.add('active');
    taskBox.offsetHeight >= 300 ? taskBox.classList.add('overflow') : taskBox.classList.remove('overflow');
}
showTodo('all');


function showMenu(selectedTask) {
    let menuDiv = selectedTask.parentElement.lastElementChild;
    menuDiv.classList.add('show');
    document.addEventListener('click', e => {
        if(e.target.tagName != "I" || e.target != selectedTask) {
            menuDiv.classList.remove('show');
        }

    })
}


function updateStatus(selectedTask) {
    let taskName = selectedTask.parentElement.lastElementChild;
    if (selectedTask.checked) {
        taskName.classList.add('checked');
        todos[selectedTask.id].status = 'completed';
    } else {
        taskName.classList.remove('checked');
        todos[selectedTask.id].status = 'pending';

    }
    localStorage.setItem('todo-list', JSON.stringify(todos));
}

function editTask(taskId, textName) {
    editId = taskId;
    isEditTask = true;
    taskInput.value = textName;
    taskInput.focus();
    taskInput.classList.add('active');

}

function deleteTask(deleteId, filter) {
    isEditTask = false;
    todos.splice(deleteId, 1);
    localStorage.setItem('todo-list', JSON.stringify(todos));
    showTodo(filter);
}

clearAll.addEventListener('click', () => {
    isEditTask = false;
    todos.splice(0, todos.length);
    localStorage.setItem('todo-list', JSON.stringify(todos));
    showTodo();
})


taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    if (e.key == "Enter" && userTask) {
        if(!isEditTask) {
            todos = !todos ? [] : todos;
            let taskInfo = {name: userTask, status: 'pending'};
            todos.push(taskInfo);
        } else {
            isEditTask = false;
            todos[editId].name = userTask;
        }
        taskInput.value = '';
        localStorage.setItem('todo-list', JSON.stringify(todos));
        showTodo(document.querySelector('span.active').id);

    }
});


//payment

var card = {
    "payment_method":{
      "credit_card":{
        "first_name": "Joe",
        "last_name": "Jones",
        "number":"5555555555554444",
        "verification_value": "423",
        "month":"3",
        "year":"2032",
        "email": "joey@example.com"
      },
      "data": {
        "my_payment_method_identifier": "448",
        "extra_stuff": {
          "some_other_things": "Can be anything really"
        }
      }
    }
  } 
  var url = "https://core.spreedly.com/v1/payment_methods.json?environment_key=C7cRfNJGODKh4Iu5Ox3PToKjniY";

  $.ajax({
    type: "POST",
    url: url,
    dataType: "json",
    data: card
  }).success(function(data) {
    console.log(data);
    alert(data.transaction.payment_method.token);
  }).error(function(request, status, error) {
    console.log(error);
    alert('error');
  });


  //time

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

// signup

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();


    const request = new XMLHttpRequest();

request.open("post", "login.php");
request.onload = function() {
    console.log(request.responseText);
}
  request.send(new FormData(form))
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')

  

}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }


    if(phoneValue === '') {
        setError(phone, 'Phone is required');
    } else if (phoneValue.length < 11 ) {
        setError(phone, 'Phone must be at least 8 character.')
    } else {
        setSuccess(phone);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};
