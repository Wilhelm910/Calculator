document.addEventListener("DOMContentLoaded", () => {


    document.getElementById("one").addEventListener("click", function() {
        appendNumber(1)
    })
    document.getElementById("two").addEventListener("click", function() {
        appendNumber(2)
    })
    document.getElementById("three").addEventListener("click", function() {
        appendNumber(3)
    })
    document.getElementById("four").addEventListener("click", function() {
        appendNumber(4)
    })
    document.getElementById("five").addEventListener("click", function() {
        appendNumber(5)
    })
    document.getElementById("six").addEventListener("click", function() {
        appendNumber(6)
    })
    document.getElementById("seven").addEventListener("click", function() {
        appendNumber(7)
    })
    document.getElementById("eight").addEventListener("click", function() {
        appendNumber(8)
    })
    document.getElementById("nine").addEventListener("click", function() {
        appendNumber(9)
    })
    document.getElementById("zero").addEventListener("click", function() {
        appendNumberZero(0)
    })
    document.getElementById("add").addEventListener("click", function() {
        appendOperator(" + ")
    })
    document.getElementById("subtract").addEventListener("click", function() {
        appendOperator(" - ")
    })
    document.getElementById("multiply").addEventListener("click", function() {
        appendOperator(" * ")
    })
    document.getElementById("divide").addEventListener("click", function() {
        appendOperator(" / ")
    })
    document.getElementById("equals").addEventListener("click", function() {
        resultOperation()
    })
    document.getElementById("comma").addEventListener("click", function() {
        appendOperator(".")
    })
    document.getElementById("allClear").addEventListener("click", function() {
        allClearOperation()
    })
    document.getElementById("delete").addEventListener("click", function() {
        deleteOperation()
    })
    


    function appendNumberZero(operation) {
        let display = document.getElementById("display")
        if (display.textContent.endsWith("0") == true && display.textContent.length == 1) {
            display.textContent += ""
        } //else if (display.textContent == "" ) {
           // display.textContent += "" } 
           else if (display.textContent == "Infinity") {
            display.textContent += ""
        } else if (display.textContent == "NaN") {
            display.textContent += ""
        } else {display.textContent += operation}
    }

    function appendNumber(operation) {
        let display = document.getElementById("display")
        if (display.textContent == "Infinity") {
            display.textContent += ""
        } else if (display.textContent == "NaN") {
            display.textContent += ""
        } else { display.textContent += operation}
    }

    function appendOperator(operation) {
        let display = document.getElementById("display");
        if (display.textContent.endsWith(" ")) {
            display.textContent += "";
        } else if (display.textContent == "NaN") {
            display.textContent += ""
        } else if (display.textContent == "Infinity") {
            display.textContent += ""
        } else { display.textContent += operation;
        }
    }

    function resultOperation() {
        let display = document.getElementById("display");
        //let result = eval(display.textContent);
        let result = Function ("return " + display.textContent)();
        //if (display.textContent.includes("+") == true) {}
        display.textContent = result;
    }
    
    function deleteOperation() {
        let display = document.getElementById("display");
        if (display.textContent == "Infinity") {
            display.textContent += ""
        } else if (display.textContent == "NaN") {
            display.textContent += ""
        } else if (display.textContent.endsWith(" ")) {
            display.textContent = display.textContent.slice(0, -3)
        } else { display.textContent = display.textContent.slice(0, -1)
        }
        
        
    }

    function allClearOperation() {
        let display = document.getElementById("display");
        display.textContent = ""
        
    }

})