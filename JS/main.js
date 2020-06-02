import string from "./css.js"
const text = document.querySelector("#text")
const style = document.querySelector("#style")
let n = 1
let id = setInterval(() => {
    n += 1
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    console.log(n)
    text.innerText =  string.substr(0,n)
    style.innerHTML = string.substr(0,n)
    text.scrollTop = text.scrollHeight
}, 0)
