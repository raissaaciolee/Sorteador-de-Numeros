let containerDrawnNumbers = [];
let drawNumber = 0;

const noRepeatButton = document.querySelector(".no-repeat-button");

// FUNÇÃO PARA SORTEAR OS NÚMEROS
const drawANumber = (min, max, amount) => {
  for (let i = 1; i <= amount; i++) {
    do {
      drawNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (
      noRepeatButton.checked &&
      containerDrawnNumbers.includes(drawNumber)
    );

    containerDrawnNumbers.push(drawNumber);
  }
};

export { drawANumber, containerDrawnNumbers, noRepeatButton };
