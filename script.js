const userInput = document.getElementById('user-input');
const displayResult = document.getElementById('display-result');
const buttons = document.querySelectorAll(".btn");

const calcFunction = () => {
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            userInput.value += btn.innerText;
        });
    });
}

const evalFunction = () => {
    let currentInput = '';
    // const evalUserInput = (userInput) => {
    //     return eval(userInput);
    // }
    document.getElementById('equal-btn').addEventListener('click', () => {
        currentInput = userInput.value;
        displayResult.innerText = eval(currentInput);
    });
}
calcFunction();
evalFunction();

// const clearFunction = () => {
//     displayResult.innerText = '';
// }

// document.getElementById('click', clearFunction)