const controls = document.querySelector("#controls");
const display = document.querySelector("#display");
const output = document.querySelector("#output");

let firstNum = "";
let secondNum = "";
let operator = "";
let justEqualed = false;
let displayHistory = "";

function updateDisplay() {
    if (operator === "") {
        output.textContent = firstNum || "0";
    } else {
        output.textContent = secondNum || "0";
    }
}

function updateHistory() {
    display.textContent = displayHistory;
}

function parse(a, b) {
    return [Number(a), Number(b)];
}

function operate(a, b, op) {
    const [numA, numB] = parse(a, b);
    let result;

    switch(op) {
        case "+": result = numA + numB; break;
        case "-": result = numA - numB; break;
        case "×": result = numA * numB; break;
        case "÷": 
            if (numB === 0) return null;
            result = numA / numB;
            break;
        default: return null;
    }

    return Math.round(result * 100000000) / 100000000;
}

controls.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("num")) {
        if (justEqualed && operator === "") {
            firstNum = target.textContent;
            displayHistory = target.textContent;
            justEqualed = false;
        } else if (operator === "") {
            firstNum += target.textContent;
            displayHistory += target.textContent;
        } else {
            secondNum += target.textContent;
            displayHistory += target.textContent;
        }
        updateDisplay();
        updateHistory();
    }

    else if (target.classList.contains("operator")) {
        if (firstNum === "") return;

        if (secondNum !== "" && operator !== "") {
            const result = operate(firstNum, secondNum, operator);
            if (result === null) {
                display.textContent = "Cannot divide by 0";
                return;
            }
            firstNum = result;
            secondNum = "";
            displayHistory = firstNum;
        }

        operator = target.textContent;
        displayHistory += operator;
        updateDisplay();
        updateHistory();
        justEqualed = false;
    }

    else if (target.id === "equal") {
        if (firstNum === "" || operator === "" || secondNum === "") return;

        const result = operate(firstNum, secondNum, operator);
        if (result === null) {
            display.textContent = "Cannot divide by 0";
            firstNum = "";
            secondNum = "";
            operator = "";
            return;
        }

        displayHistory += "=" + result;
        output.textContent = result;
        updateHistory();
        firstNum = result;
        secondNum = "";
        operator = "";
        justEqualed = true;
    }

    else if (target.id === "ac") {
        firstNum = "";
        secondNum = "";
        operator = "";
        displayHistory = "";
        justEqualed = false;
        output.textContent = "0";
        display.textContent = "";
    }

    else if (target.id === "del") {
        if (operator === "") {
            firstNum = firstNum.slice(0, -1);
            displayHistory = displayHistory.slice(0, -1);
        } else if (secondNum !== "") {
            secondNum = secondNum.slice(0, -1);
            displayHistory = displayHistory.slice(0, -1);
        } else {
            operator = "";
            displayHistory = displayHistory.slice(0, -1);
        }
        updateDisplay();
        updateHistory();
    }

    else if (target.id === "dec") {
        if (operator === "") {
            if (!firstNum.includes(".")) {
                firstNum += ".";
                displayHistory += ".";
            }
        } else {
            if (!secondNum.includes(".")) {
                secondNum += ".";
                displayHistory += ".";
            }
        }
        updateDisplay();
        updateHistory();
    }

    else if (target.id === "percent") {
        if (operator === "") {
            firstNum = (Number(firstNum) / 100).toString();
            displayHistory = firstNum;
        } else {
            secondNum = (Number(firstNum) * Number(secondNum) / 100).toString();
            displayHistory = firstNum + operator + secondNum;
        }
        updateDisplay();
        updateHistory();
    }
});

// Keyboard support
document.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") {
        const btn = Array.from(document.querySelectorAll('.num')).find(b => b.textContent === e.key);
        if (btn) btn.click();
    }
    else if (e.key === ".") document.querySelector("#dec").click();
    else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        document.querySelector("#equal").click();
    }
    else if (e.key === "Backspace") {
        e.preventDefault();
        document.querySelector("#del").click();
    }
    else if (e.key === "+") {
        e.preventDefault();
        document.querySelector("#add").click();
    }
    else if (e.key === "-") {
        e.preventDefault();
        document.querySelector("#subtract").click();
    }
    else if (e.key === "*") {
        e.preventDefault();
        document.querySelector("#multiply").click();
    }
    else if (e.key === "/") {
        e.preventDefault();
        document.querySelector("#divide").click();
    }
    else if (e.key === "%") {
        e.preventDefault();
        document.querySelector("#percent").click();
    }
});