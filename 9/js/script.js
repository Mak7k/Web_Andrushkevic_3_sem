
document.querySelector("#like_button").onclick = function() {
if (like_button.style.backgroundColor == 'white') {
like_button.style.backgroundColor = 'red';
like_button.style.color = 'white';

const heart = document.querySelector(".love");
heart.addEventListener("mousemove", (event) => {
const xPos = event.offsetX;
const yPos = event.offsetY;
const spanEl = document.createElement("span");
spanEl.style.left = xPos + "px";
spanEl.style.top = yPos + "px";
heart.appendChild(spanEl);

if (like_button.style.backgroundColor == 'red') {
spanEl.style.visibility = "visible";
} else {
spanEl.style.visibility = "hidden";
}
});

} else {
like_button.style.backgroundColor = 'white';
like_button.style.color = 'black';
}
};





/*
// задание 1
check = true;
while(check){
    let result = prompt("Желаете пройти регистрацию на сайте?");
    if (result == "Да"){
        alert("Круто");
        check = false;
    }
    else{
        alert("Попробуй еще раз")
    }
}
*/


/* задание 2
let result = prompt("Введите логин");
if (result == "Админ"){
    let password = prompt("Введите пароль");
    if (password == "Я главный"){
        alert("Здравствуйте");
    }  
    else if (password == null){
        alert("Отменено");
    }  
    else{
        alert("Неверный пароль");
    }
}
else if (result == null){
    alert("Отменено");
}
else{
    alert("Я вас не знаю");
}
*/


