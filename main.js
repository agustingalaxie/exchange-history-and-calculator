const historyDiv = document.querySelector(".history-toggle");
const calculatorDiv = document.querySelector(".calculator-toggle");
const buttonCalc = document.querySelector(".button-calc");
const buttonHist = document.querySelector(".button-hist");
const intro = document.querySelector(".intro");
const greet = document.querySelector(".greet");
const formhist = document.formhist;
const formcalc = document.formcalc;
const displayHist = document.querySelector(".displayhist");
const displayCalc = document.querySelector(".displaycalc");
const historyList = document.querySelector(".historylist");
const containerResponse = document.querySelector(".response");
const displayResponse = document.querySelector(".displayresponse");

historyDiv.onclick = () => {
    const history = document.querySelector(".history");
    const calculator = document.querySelector(".calculator");
    intro.classList.add("hidden");
    greet.classList.add("hidden");
    calculatorDiv.classList.add("opacity");
    historyDiv.classList.remove("opacity");
    history.className = "col 12 history";
    calculator.className = "col 12 calculator hidden";
    displayResponse.className = ""
}

calculatorDiv.onclick = () => {
    const history = document.querySelector(".history");
    const calculator = document.querySelector(".calculator");
    intro.classList.add("hidden");
    greet.classList.add("hidden");
    historyDiv.classList.add("opacity");
    calculatorDiv.classList.remove("opacity");
    history.className = "col 12 history hidden";
    calculator.className = "col 12 calculator";
}

buttonCalc.onclick = () => {
    const quantity = formcalc.quantity.value;
    const ratesFromValue = formcalc.ratesFrom.value;
    const ratesToValue = formcalc.ratesTo.value;
    if(quantity===""){
        displayCalc.textContent = "Please insert a value";
        return
    } else {
        displayCalc.textContent = "";
        const url = "https://api.ratesapi.io/api/latest?base=" + ratesFromValue;
        fetch(url)
        .then(response => response.json())
        .then(responseJSON => {
            const currencyTo = responseJSON.rates[ratesToValue];
            const count = quantity * currencyTo;
            const countcleared = parseFloat(count).toFixed(2)
            displayCalc.innerText = `${quantity} ${ratesFromValue} are ${countcleared} in ${ratesToValue}`
            })
        .catch(error => console.error("falló", error))
    }
}

buttonHist.onclick = () => {
    const dateToCheck = formhist.dateToCheck.value; 
    const baseCurrency = formhist.base.value;
    if(dateToCheck === ""){
        displayHist.textContent = "Please select a date";
        return
    } else {
        displayHist.textContent = "";
        const dateUrl = "https://api.ratesapi.io/api/" + dateToCheck + "?base=" + baseCurrency;
        fetch(dateUrl)
        .then(response => response.json())
        .then(responseJSON => {
            console.log(responseJSON)
            Object.keys(responseJSON.rates).forEach(moneda => {
                const li = document.createElement("li")
                li.innerText = `${moneda}: ${responseJSON.rates[moneda]}`
                historyList.appendChild(li)
            }),
            displayResponse.textContent = `The currency rates for the date ${dateToCheck} are: `
            //const buttonReset
            })
        .catch(error => console.error("falló", error))
    }
    formhist.classList.add("hidden")
    containerResponse.classList.remove("hidden");
}