const historyDiv = document.querySelector(".history-div");
const calculatorDiv = document.querySelector(".calculator-div");

historyDiv.onclick = () => {
    const history = document.querySelector(".history");
    const calculator = document.querySelector(".calculator");
    calculatorDiv.classList.add("opacity");
    historyDiv.classList.remove("opacity");
    history.className = "col 12 history"
    calculator.className = "col 12 calculator hidden"
}

calculatorDiv.onclick = () => {
    const history = document.querySelector(".history");
    const calculator = document.querySelector(".calculator");
    historyDiv.classList.add("opacity");
    calculatorDiv.classList.remove("opacity");
    history.className = "col 12 history hidden";
    calculator.className = "col 12 calculator";
}