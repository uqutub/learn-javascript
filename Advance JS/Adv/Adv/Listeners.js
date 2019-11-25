document.body.addEventListener("mousemove", (ev) => {
    console.log("Event: mousemove ", ev);
});


document.body.addEventListener("click", (ev) => {
    console.log("Event: click ", ev);
});



window.tdiff = [];
fred = function (a, b) {
    return a - b;
};
window.document.onload = function (e) {
    console.log("document.onload", e, Date.now(), window.tdiff,
        (window.tdiff[0] = Date.now()) && window.tdiff.reduce(fred));
}
window.onload = function (e) {
    console.log("window.onload", e, Date.now(), window.tdiff,
        (window.tdiff[1] = Date.now()) && window.tdiff.reduce(fred));
}