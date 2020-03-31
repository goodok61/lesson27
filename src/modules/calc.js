const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block"),
    calcType = document.querySelector(".calc-type"),
    calcSquare = document.querySelector(".calc-square"),
    calcCount = document.querySelector(".calc-count"),
    calcDay = document.querySelector(".calc-day"),
    totalValue = document.getElementById("total");

  const countSum = () => {
    let total = 0,
      countValue = 1,
      dayValue = 1;
    const typeValue = calcType.options[calcType.selectedIndex].value,
      squareValue = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }

    if (typeValue && squareValue) {
      total = price * typeValue * squareValue * countValue * dayValue;
    }

    totalValue.textContent = Math.ceil(total);
  };

  calcBlock.addEventListener("input", event => {
    const target = event.target;

    if (target.matches("select") || target.matches("input")) {
      countSum();
    }
  });

  calcBlock.addEventListener("input", e => {
    const target = e.target;
    if (
      target.closest(".calc-square") ||
      target.closest(".calc-count") ||
      target.closest(".calc-day")
    ) {
      target.value = target.value.replace(/\D/g, "");
    }
  });
};
export default calc;