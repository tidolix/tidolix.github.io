let last = 0;
const threshold = 20;

function hoverout(e) {
    this.parentElement.parentElement.style.backgroundColor = "";
    this.parentElement.parentElement.style.color = "";
}

function hoverer(e) {
    this.parentElement.parentElement.style.backgroundColor = "hsl(192, 100%, 9%)";
    this.parentElement.parentElement.style.color = "white";
}

[...document.querySelectorAll("h2")].forEach(x=> {
    x.onmouseenter = hoverer
    x.onmouseleave = hoverout;
});

document.onscroll = function(e) {
    let time = Date.now();
    let delta = time - last;
    if (delta < threshold) return;
    last = time;

    let sc = window.scrollY;
    let viewport = document.documentElement.clientHeight;
    let items = [...document.querySelectorAll(".item, .ready")];
    items.forEach (item => {
        let rect = item.getBoundingClientRect();
        if (item.className.includes("ready")) {
            if (rect.top + rect.height/4 < viewport) {
                item.classList.add("readyin");
            }
        } else if (rect.top + rect.height/4 < viewport) {
            item.classList.add("in");
        }
    });
}