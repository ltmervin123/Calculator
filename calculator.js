const numbers = {
  num1: document.getElementById("num1"),
  num2: document.getElementById("num2"),
  num3: document.getElementById("num3"),
  num4: document.getElementById("num4"),
  num5: document.getElementById("num5"),
  num6: document.getElementById("num6"),
  num7: document.getElementById("num7"),
  num8: document.getElementById("num8"),
  num9: document.getElementById("num9"),
  num0: document.getElementById("num0"),
};

const operator = {
  period: document.getElementById("period"),
  minus: document.getElementById("minus"),
  plus: document.getElementById("plus"),
  divide: document.getElementById("divide"),
  multiply: document.getElementById("multiply"),
  clear: document.getElementById("clear"),
  equal: document.getElementById("equal"),
};

let totalNumber = "";

const inputField = document.getElementById("inputField");

const calculateResult = (totalNumber) => {
  clearText();
  const result = eval(totalNumber);
  inputField.value = result;
  totalNumber = result;
  console.log(result);
  console.log(totalNumber);
};

const displayNumToInputField = (number, operation) => {
  totalNumber = totalNumber.concat(operation);
  inputField.value = inputField.value + number;
  console.log(totalNumber);
};

const clearText = () => {
  inputField.value = "";
};

const resetTotalResult = () => {
  clearText();
  totalNumber = "";
  console.log(totalNumber);
};

const iMissYou = () => {
  clearText();
  inputField.value = "I miss you:<";
};

const balikKanPlease = () => {
  clearText();
  inputField.value = "Balik kana pls:(";
};

const kungAkoNalang = () => {
  clearText();
  inputField.value = "Kung ako nalang:(";
};

const handleEvent = () => {
  const inputValue = inputField.value;
  if (inputValue.includes("+")) {
    iMissYou();
  } else if (inputValue.includes("×")) {
    balikKanPlease();
  } else {
    kungAkoNalang();
  }
};

numbers.num1.addEventListener("click", () => displayNumToInputField("1", "1"));
numbers.num2.addEventListener("click", () => displayNumToInputField("2", "2"));
numbers.num3.addEventListener("click", () => displayNumToInputField("3", "3"));
numbers.num4.addEventListener("click", () => displayNumToInputField("4", "4"));
numbers.num5.addEventListener("click", () => displayNumToInputField("5", "5"));
numbers.num6.addEventListener("click", () => displayNumToInputField("6", "6"));
numbers.num7.addEventListener("click", () => displayNumToInputField("7", "7"));
numbers.num8.addEventListener("click", () => displayNumToInputField("8", "8"));
numbers.num9.addEventListener("click", () => displayNumToInputField("9", "9"));
numbers.num0.addEventListener("click", () => displayNumToInputField("0", "0"));
operator.clear.addEventListener("click", () => resetTotalResult());
operator.plus.addEventListener("click", () => displayNumToInputField("+", "+"));
operator.divide.addEventListener("click", () =>
  displayNumToInputField("÷", "/")
);
operator.minus.addEventListener("click", () =>
  displayNumToInputField("-", "-")
);
operator.multiply.addEventListener("click", () =>
  displayNumToInputField("×", "*")
);

//Calculate function
// operator.equal.addEventListener("click", () => calculateResult(totalNumber));

// Fake function comment it if you want the calculator function

