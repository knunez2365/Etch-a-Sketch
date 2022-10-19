container = document.querySelector('.container');

const gridValue = document.querySelector('#numberRange');

const onInput = document.querySelector('input');

const allDivs = document.querySelectorAll('.boxes');

const specificDiv = document.querySelector('.boxes');

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
  document.querySelectorAll('.boxes').forEach(element => {
    element.addEventListener('mouseover', () => {
      console.log('iteration worked', element);
      element.style.background = document.querySelector('#favcolor').value;
    });
  });
  document.querySelector('.clear').addEventListener('click', resetGrid);
  document.querySelector('.rainbow').addEventListener('click', randomGridColor);
});

resetGrid = function () {
  document.querySelector('#numberRange').value = 0;
  document.querySelector('#rangeValue').textContent = 0;
  document.querySelectorAll(`.boxes`).forEach(boxes => {
    boxes.remove();
  });
};

randomGridColor = function () {
  document.querySelectorAll('.boxes').forEach(element => {
    element.addEventListener('mouseover', () => {
      const color = '#' + Math.round(0xffffff * Math.random()).toString(16);
      element.style.background = color;
    });
  });
};

// document.querySelectorAll('.boxes').forEach(element => {
//   element.style.background = 'lightgreen';
// });

// document.querySelectorAll('.boxes').addEventListener('click', function () {
//   specificDiv.style.background = 'lightgreen';
// });

// allDivs.forEach(element => {
//   element.addEventListener('click', () => {
//     console.log('iteration worked', element);
//     element.style.background = 'lightgreen';
//   });
// });

//Loop to change amount of grids

// for (let index = 1; index < 4096; index++) {
//   createDiv = document.createElement('div');
//   createDiv.classList.add('boxes');
//   container.appendChild(createDiv);
// }

//change CSS Grid

// for (let index = 1; index < 4096; index++) {
//   createDiv = document.createElement('div');
//   createDiv.classList.add('boxes');
//   container.appendChild(createDiv);
// }

// for (let index = 1; index < 4096; index++) {
//   createDiv = document.createElement('div');
//   createDiv.classList.add('boxes');
//   container.appendChild(createDiv);
// }

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//
