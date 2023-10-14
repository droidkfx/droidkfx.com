function setTime() {
    const d = new Date();
    document.getElementById("time_span").innerHTML = d.toLocaleTimeString();
}

window.onload = function () {
    setTime();
    window.setInterval(setTime, 1000);
}
