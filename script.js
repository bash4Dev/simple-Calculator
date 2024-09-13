const userInput = document.getElementById('user-input');
const displayResult = document.getElementById('display-result');
const buttons = document.querySelectorAll(".btn");
const equalBtn = document.getElementById('equal-btn');

let currentInput = '';

const calcFunction = () => {
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.classList.contains('number') || btn.classList.contains('symbol')) {
                userInput.value += btn.innerText;
            } else if (btn.classList.contains('clear')) {
                userInput.value = '';
                displayResult.innerText = '';
            } else if (btn.classList.contains('delete')) {
                currentInput = userInput.value.slice(0, -1);
                userInput.value = currentInput;
            }
        });
    });
}

const evalFunction = () => {
    equalBtn.addEventListener('click', () => {
        try {
            currentInput = userInput.value;
            currentInput
                ? displayResult.innerText = eval(currentInput)
                : '';
        } catch {
            alert('Error');
        }
    });
}

const delBtn = document.querySelector('.delete');
const transformBtn = delBtn.textContent.toUpperCase();
delBtn.innerText = transformBtn;

calcFunction();
evalFunction();