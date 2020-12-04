var forgot = document
  .getElementById("forgot")
  .addEventListener("click", forgotPass);
var reg = document.getElementById("reg").addEventListener("click", regForm);
var reg = document
  .getElementById("regLogin")
  .addEventListener("click", function () {
    window.location.reload();
  });
function forgotPass() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("forgotForm").style.display = "block";
}
var url = "https://users-registration-form.herokuapp.com";
function auth() {
  var email = document.getElementById("frgtEmail").value;
  fetch(url + "/forgot", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert(data.message);
    })
    .then(() => {
      document.getElementById("forgotForm").style.display = "none";
      document.getElementById("loginForm").style.display = "block";
    });
}

function login() {
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPass").value;
  fetch(url + "/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("message").innerHTML = data.message;
    });
}

function regForm() {
  document.getElementById("login").style.display = "none";
  document.getElementById("register").style.display = "block";
}

function register() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("regEmail").value;
  var password = document.getElementById("regPass").value;
  fetch(url + "/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("message2").innerHTML = data.message;
    });
}
