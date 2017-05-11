/*jshint esversion: 6 */

/**
 * core
 */
let operand = null;
let operator = null;

let operators = {
    "+": function (o1,o2) {
        'use strict';
        return o1+o2;
    },
    "-": function (o1,o2) {
        'use strict';
        return o1-o2;
    },
    "*": function (o1,o2) {
        'use strict';
        return o1*o2;
    },
    "/": function (o1,o2) {
        'use strict';
        if(o2 !== 0){
           return o1/o2;
    }else{
            return "Invalid Calculation";
        }
    }
};

/**
 * UI
 */
let evaluateButton = {
    "number": function (b,i,o) {
        'use strict';
        if(operand === null) {
            o.value = "";
        }
        i.value += b.value;
        return;
    },
    "operator": function (b,i,o) {
        'use strict';
        if(operator === null) {
            operand = Number(i.value);
            i.value = "";
        }
        operator = b.value;
        o.value = operand + " " + operator;
        return;
    },
    "command": function (b,i,o) {
        'use strict';
        if(b.id == "key-=" && operator !== null){
            o.value = "";
            let result = operators[operator](operand, Number(i.value));

            if(!isNaN(Number(result))) {
                i.value = result;
            }
            else{
                i.value = "";
                o.value = result;
            }
        }
        else if(b.id == "key-c"){
            i.value = "";
            o.value = "";
        }
        operand = null;
        operator = null;
        return;
    }
};

const readButton = function readButton(e){
    'use strict';
    let b = e.target;
    let i = document.querySelector("#input");
    let o = document.querySelector("#output");
    evaluateButton[b.className](b,i,o);
};

window.addEventListener('load', function () {
    'use strict';
    document.querySelector("#output").value = "Welcome";
    let buttons = document.body.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", readButton);
    }
});