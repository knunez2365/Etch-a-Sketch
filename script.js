const container = document.querySelector('.container');

const gridValue = document.querySelector('#numberRange');

function gridSelector(x) {
  container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
}

gridValue.addEventListener('input', function () {
  console.log((value = gridValue.value));
  console.log((container.style.gridTemplateColumns = `repeat(${value}, 1fr)`));
  valueSquared = value * value;
  document.querySelectorAll(`.boxes`).forEach(boxes => {
    boxes.remove();
  });

  for (let index = 0; index < valueSquared; index++) {
    createDiv = document.createElement(`div`);
    createDiv.classList.add(`boxes`);
    container.appendChild(createDiv);
    console.log;
  }

  simpleColor();
  document.querySelector('.clear').addEventListener('click', resetGrid);
  document.querySelector('.rainbow').addEventListener('click', randomGridColor);
  document.querySelector('.color').addEventListener('click', simpleColor);
});

const resetGrid = function () {
  document.querySelector('#numberRange').value = 0;
  document.querySelector('#rangeValue').textContent = 0;
  document.querySelectorAll(`.boxes`).forEach(boxes => {
    boxes.remove();
  });
};

const randomGridColor = function () {
  document.querySelectorAll('.boxes').forEach(element => {
    element.addEventListener('mouseover', () => {
      const color = '#' + Math.round(0xffffff * Math.random()).toString(16);
      element.style.background = color;
    });
  });
};

const simpleColor = function () {
  document.querySelectorAll('.boxes').forEach(element => {
    element.addEventListener('mouseover', () => {
      console.log('iteration worked', element);
      element.style.background = document.querySelector('#favcolor').value;
    });
  });
};
