const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialchars = ["%", " /", "-", "+", "="];
let output = "";
let historyDisplay = document.querySelector(".history");

const calculate = (btnValue) => {
    display.focus;
    if (btnValue === "=" && output !== "") {
        historyDisplay.innerHTML = output;
        output = eval(output.replace("%", "/100")); //to solve the percentege problem
    } else if (btnValue === "AC") {
        output = "";
        historyDisplay.innerHTML = ""
    } else if (btnValue === "DEL") {
        //when delet button is clicked the last charaector gets removed from the output
        output = output.toString().slice(0, 1);
    } else {
        //when output is empty and button clicked is spectialchars it will retun
        if (output === "" && specialchars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};
//add an list to button abd call calculate 
for (let button of buttons) {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
}