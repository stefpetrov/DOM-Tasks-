function calculator() {
  let input;
  let input2;
  let input3;

  function init(selector1, selector2, selector3) {
    input = document.querySelector(selector1);
    input2 = document.querySelector(selector2);
    input3 = document.querySelector(selector3);
  }

  function add() {
    input3.value = Number(input.value) + Number(input2.value);
  }

  function subtract() {
    input3.value = Number(input.value) - Number(input2.value);
  }

  let obj = {
    init,
    add,
    subtract,
  };

  return obj
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
