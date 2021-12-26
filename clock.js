const clock = document.querySelector("#clock");
let today = new Date();   

let hours; // 시
let minutes;  // 분
let seconds;  // 초

const handleTime = () => {
    today = new Date();
    hours = today.getHours().toString().padStart(2, '0'); // 시
    minutes = today.getMinutes().toString().padStart(2, '0');  // 분
    seconds = today.getSeconds().toString().padStart(2, '0');  // 초

    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`

}

setInterval(handleTime, 1000);