const bulbOff = document.querySelector(".bulboff");
const bulbOn = document.querySelector(".bulbon");
const btn = document.querySelector(".btn");

let isOff = true;

btn.addEventListener('click', () => {
    if(isOff) {
        bulbOn.style.zIndex = 1
        bulbOff.style.zIndex = 0
        btn.innerHTML = "Turn OFF"
        btn.style.backgroundColor = " white"
        btn.style.color="black"
        isOff = false
    } else {
        bulbOn.style.zIndex = 0
        bulbOff.style.zIndex = 1
        btn.innerHTML = "Turn ON"
        btn.style.backgroundColor = " black"
        btn.style.color = "white"
        isOff = true
    }
})
