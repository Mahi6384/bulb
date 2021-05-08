const bulbOff = document.querySelector(".bulboff");
const bulbOn = document.querySelector(".bulbon");
const btn = document.querySelector(".btn");

let isOff = true;

btn.addEventListener('click', () => {
    if(isOff) {
        bulbOn.style.opacity = 1
        bulbOff.style.opacity = 0
        btn.innerHTML = "Turn OFF"
        btn.style.backgroundColor = "black"
        btn.style.color="white"
        isOff = false
    } else {
        bulbOn.style.opacity = 0
        bulbOff.style.opacity = 1
        btn.innerHTML = "Turn ON"
        btn.style.backgroundColor = "var(--clr-neon)"
        btn.style.color = "black"
        isOff = true
    }
})
