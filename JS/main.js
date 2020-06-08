import string from "./css.js"

const text = document.querySelector("#text")
const style = document.querySelector("#style")
const pause = document.querySelector("#btnPause")
const play = document.querySelector("#btnPlay")
const slow = document.querySelector("#btnSlow")
const normal = document.querySelector("#btnNormal")
const fast = document.querySelector("#btnFast")

let n = 1
let time = 20
let run = ()=>{
    n += 1
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    text.innerText =  string.substr(0,n)
    style.innerHTML = string.substr(0,n)
    text.scrollTop = text.scrollHeight
}
let id = setInterval(run, time)

pause.onclick = ()=>{
    window.clearInterval(id)
}
play.onclick = ()=>{
    id = setInterval(run, time)
}
slow.onclick = ()=>{
    window.clearInterval(id)
    time = 200
    id = setInterval(run, time)
}
normal.onclick = ()=>{
    window.clearInterval(id)
    time = 20
    id = setInterval(run, time)
}
fast.onclick = ()=>{
    window.clearInterval(id)
    time = 0
    id = setInterval(run, time)
}