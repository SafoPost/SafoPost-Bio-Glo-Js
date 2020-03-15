const getCalcSeptic = () => {
  // Переключаем аккордеон по кнопке "Следующий шаг"
  const accordion = document.getElementById('accordion');
  const constructBtn = document.querySelectorAll('.construct-btn');
  const panelHeading = document.querySelectorAll('#accordion>.panel>.panel-heading');
  const panelCollapse = document.querySelectorAll('.panel-collapse');

  const getNextStep = (index) => {
    for (let i = 0; i < panelHeading.length - 1; i++) {
      if (index === i) {
        panelCollapse[i + 1].classList.add('in');
        panelCollapse[i].classList.remove('in');
      }
    }
  };

  accordion.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    target = target.closest('.construct-btn');
    if (target) {
      constructBtn.forEach((elem, index) => {
        if (elem === target) {
          getNextStep(index);
          // getCalc();
        }
      });
    }
  });

  accordion.addEventListener('input', () => {
    getCalc();
  })

  // Переключатель "Тип септика"
  const myonoffswitch = document.getElementById('myonoffswitch');
  const myonoffswitch1 = document.getElementById('myonoffswitch-1');

  // Переключатель "Наличие днища"
  const myonoffswitchTwo = document.getElementById('myonoffswitch-two');
  const myonoffswitch2 = document.getElementById('myonoffswitch-2');

  const titleText = document.querySelectorAll('#collapseTwo>.panel-body>.title-text');
  const selectBox = document.querySelectorAll('#collapseTwo>.panel-body>.select-box');
  titleText[1].style.display = 'none';
  selectBox[2].style.display = 'none';
  selectBox[3].style.display = 'none';

  const toggleSwitch = () => {
    myonoffswitch.toggleAttribute('checked');
    if (myonoffswitch.hasAttribute('checked')) {
      titleText[1].style.display = 'none';
      selectBox[2].style.display = 'none';
      selectBox[3].style.display = 'none';
    } else {
      titleText[1].style.display = 'inline-block';
      selectBox[2].style.display = 'inline-block';
      selectBox[3].style.display = 'inline-block';
    }
    getCalc();
  };

  myonoffswitch1.addEventListener('click', toggleSwitch);

  const toggleSwitchTwo = () => {
    myonoffswitchTwo.toggleAttribute('checked');
    getCalc();
  };

  myonoffswitch2.addEventListener('click', toggleSwitchTwo);

  // Рассчет стоимости
  const diamOne = document.getElementById('diam-one');
  const ringsOne = document.getElementById('rings-one');
  const diamTwo = document.getElementById('diam-two');
  const ringsTwo = document.getElementById('rings-two');

  const calcResult = document.getElementById('calc-result');

  const getCalc = () => {
    let result = 10000;

    if (myonoffswitch.hasAttribute('checked')) {
      result = 10000;

      if (diamOne.value === '2 метра') {
        result *= 1.2;
      }

      if (ringsOne.value === '2 штуки') {
        result *= 1.3;
      } else if (ringsOne.value === '3 штуки') {
        result *= 1.5;
      }

      // Наличие днища колодца
      if (myonoffswitchTwo.hasAttribute('checked')) {
        result += 1000;
      }

    } else {
      result = 15000;

      if (diamOne.value === '2 метра') {
        result *= 1.2;
      }

      if (ringsOne.value === '2 штуки') {
        result *= 1.3;
      } else if (ringsOne.value === '3 штуки') {
        result *= 1.5;
      }

      if (diamTwo.value === '2 метра') {
        result *= 1.2;
      }

      if (ringsTwo.value === '2 штуки') {
        result *= 1.3;
      } else if (ringsTwo.value === '3 штуки') {
        result *= 1.5;
      }

      // Наличие днища колодца
      if (myonoffswitchTwo.hasAttribute('checked')) {
        result += 2000;
      }
    }

    calcResult.value = result;
  };

};

export default getCalcSeptic;