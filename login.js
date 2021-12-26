const loginForm = document.querySelector("#login-form");
const inputId = document.querySelector("#inputId");
const greeting = document.querySelector('#greeting');

function handleLogin(e){
    e.preventDefault();

    localStorage.setItem("id", inputId.value);

    greeting.innerHTML = `welcome ${localStorage.getItem("id")}`;
    loginForm.remove();

}

loginForm.addEventListener("submit", handleLogin);

if(localStorage.getItem("id")) {
    greeting.innerHTML = `welcome ${localStorage.getItem("id")}`;
    loginForm.remove();
}
