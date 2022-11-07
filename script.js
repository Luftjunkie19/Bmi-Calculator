const weightData = document.querySelector(`.input.weight`);
const heightData = document.querySelector(`.input.height`);
const finalBMIResult = document.querySelector(`.result`);
const messageContainer = document.querySelector(`.message-container`);
const messageHolder = document.querySelector(`.message`);
const errorMessage = document.querySelector(`.error`);
const loadingSpinner = document.querySelector(`.loading`);
const showResultBtn = document.querySelector(`.btn.show-result`);
const gifMessage = document.querySelector(`.gif`);

const countBMI = function () {
  let BMI = (+weightData.value / (+heightData.value / 100) ** 2).toFixed(2);
  return BMI;
};

const notifyUser = function (BMImsg, msg, className) {
  finalBMIResult.className = ``;
  finalBMIResult.innerText = BMImsg;
  messageHolder.textContent = msg;
  finalBMIResult.classList.add(className);
};

const getFinalResults = function () {
  if (isNaN(countBMI())) {
    notifyUser(
      `No data available`,
      `In some field you've written the text instead of Number.`,
      `avarage`
    );
    gifMessage.src = `./img/Wtf-hitler.gif`;
  } else {
    if (countBMI() >= 25) {
      notifyUser(
        `That's your BMI ${countBMI()}`,
        `YOU ARE TOO FAT, MOVE YOUR ASS AND DO SOME TRAINING!`,
        `bad`
      );
      gifMessage.src = `./img/hitler-gif-1.gif`;
    } else if (countBMI() < 25 && countBMI() >= 21) {
      notifyUser(
        `That's your BMI ${countBMI()}`,
        `You are alright, keep training and be yourself !`,
        `good`
      );
      gifMessage.src = `./img/Happy-hitler.gif`;
    } else {
      notifyUser(
        `That's your BMI ${countBMI()}`,
        `YOU ARE SKINNY GUY, TAKE SOME ANABOLIC AND EAT SOME PROTEIN !`,
        `bad`
      );
      gifMessage.src = `./img/hitler-gif-1.gif`;
    }
  }
  messageContainer.style.display = `flex`;
};

const showResult = function () {
  loadingSpinner.style.display = `block`;
  setTimeout(() => {
    loadingSpinner.style.display = "none";
    getFinalResults();
  }, 2000);
};

showResultBtn.addEventListener(`click`, showResult);
