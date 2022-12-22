


var captcha;
function generate() {
 
    // Clear old input
    document.getElementById("submit").value = "";
 
    // Access the element to store
    // the generated captcha
    captcha = document.getElementById("image");
    var uniquechar = "";
 
    const randomchar =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
 
    // Generate captcha for length of
    // 5 with random character
    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
 
    // Store generated input
    captcha.innerHTML = uniquechar;
}
function checkEmpty() {
    if (!document.getElementById("submit").value)
{
    alert('Пустой вввод');
}
}
function printmsg() {
    var sh_h = document.getElementById('check-c');
    var firstCaptcha=document.getElementById('image');
    var firstCaptchainput=document.getElementById('user-input');
    var firstCaptchaBTN=document.getElementById('btn');
    var LoginBTN=document.getElementById('login-btn');


    const usr_input = document
        .getElementById("submit").value;
    if (!document.getElementById("submit").value)
    {
        alert('Пустой вввод');
    }
    // Check whether the input is equal
    // to generated captcha or not
while (true) {
    if (usr_input == captcha.innerHTML) {
        var s = document.getElementById("key")
            .innerHTML = "Вы не робот";
        generate();
    LoginBTN.style.opacity = "1";
    LoginBTN.style.cursor = "pointer";
        return false;
    }
    else if(usr_input != captcha.innerHTML){
        var s = document.getElementById("key")
        .innerHTML = "Раз уж вы робот, посчитайте сумму чисел";
        sh_h.classList.add('show-block');
        firstCaptcha.classList.add('remove-block')
        firstCaptchainput.classList.add('remove-block')
        firstCaptchaBTN.classList.add('remove-block')
        return false;
    }
    else {
        var s = document.getElementById("key")
            .innerHTML = "Вы робот";
        generate();
        return false;
    }
}

}


/*

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


*/





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


