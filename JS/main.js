import string from "./css.js"

const player = {
    id: undefined,
    time: 20,
    n: 1,
    ui: {
        text: document.querySelector("#text"),
        style: document.querySelector("#style"),
    },
    events: {
        "#btnPause":"pause",
        "#btnPlay":"play",
        "#btnSlow":"slow",
        "#btnNormal":"normal",
        "#btnFast":"fast"
    },
    init() {
        player.id = setInterval(player.run, player.time)
        player.bindEvent()
    },
    bindEvent: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                let value = player.events[key]
                document.querySelector(key).onclick = player[value]
                console.log("hi")
            }
        }
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.text.innerText = string.substr(0, player.n)
        player.ui.style.innerHTML = string.substr(0, player.n)
        player.ui.text.scrollTop = player.ui.text.scrollHeight
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    play: () => {
        player.pause()
        player.id = setInterval(player.run, player.time)
    },
    slow: () => {
        player.time = 200
        player.play()
    },
    normal: () => {
        player.time = 20
        player.play()
    },
    fast: () => {
        player.time = 0
        player.play()
    }
}
player.init()