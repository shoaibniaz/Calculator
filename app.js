
function calculate(event) {
    event.preventDefault()
    const value1 = document.getElementById("value1").value
    const value2 = document.getElementById("value2").value
    const operator = document.getElementById("operator").value
    console.log("value1", value1);
    console.log("value2", value2);
    console.log("operator", operator);
    const resultDiv = document.getElementById("resultDiv")

    if (operator === "+") {
        resultDiv.innerHTML = `<h1> ${Number(value1) + Number(value2)}</h1>`

    }
    else if (operator === "-") {
        resultDiv.innerHTML = `<h1> ${Number(value1) - Number(value2)}</h1>`

    }
    else if (operator === "*") {
        resultDiv.innerHTML = `<h1> ${Number(value1) * Number(value2)}</h1>`

    }
    else if (operator === "/") {
        resultDiv.innerHTML = `<h1> ${Number(value1) / Number(value2)}</h1>`

    }

}