
let slider;
window.addEventListener("load", function() {
    'use strict';
    slider = document.body.querySelector("#font-slider");
    slider.addEventListener("change", function() {
        let fontSize = parseInt(slider.value, 10) / 10;
        document.body.querySelector("#font-size").innerHTML = fontSize;
        document.querySelector("*").style.fontSize = fontSize + "rem";
    });
});
