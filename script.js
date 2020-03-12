window.addEventListener('DOMContentLoaded', () => {
  'use strict';


  // Вызов модального окна "Перезвоните мне"
  const callMeModal = () => {
    const popupCall = document.querySelector('.popup-call');
    const callBtn = document.querySelectorAll('.call-btn');

    callBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popupCall.style.display = 'block';

        popupCall.addEventListener('click', (event) => {
          let target = event.target;
          if (target.closest('.popup-close') || !target.closest('.popup-content')) {
            popupCall.style.display = 'none';
          }
        });
      });
    });
  };
  callMeModal();


  // Калькулятор в аккордеоне "Конструктор септика"
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
            getCalc();
          }
        });
      }
    });

    // Одно- двух-камерный переключатель
    const onOffSwitch = document.querySelectorAll('.onoffswitch');
    const onOffSwitchInner = document.querySelectorAll('.onoffswitch-inner');
    const onOffSwitchSwitch = document.querySelectorAll('.onoffswitch-switch');
    const titleText = document.querySelectorAll('#collapseTwo>.panel-body>.title-text');
    const selectBox = document.querySelectorAll('#collapseTwo>.panel-body>.select-box');
    titleText[1].style.display = 'none';
    selectBox[2].style.display = 'none';
    selectBox[3].style.display = 'none';

    const toggleSwitch = (index) => {
      for (let i = 0; i < panelHeading.length - 1; i++) {
        if (index === i) {
          if (onOffSwitchInner[i].style.marginLeft === '') {
            onOffSwitchSwitch[i].style.right = 'auto';
            onOffSwitchInner[i].style.marginLeft = '-100%';
            titleText[1].style.display = 'inline-block';
            selectBox[2].style.display = 'inline-block';
            selectBox[3].style.display = 'inline-block';
          } else {
            onOffSwitchSwitch[i].style.right = '';
            onOffSwitchInner[i].style.marginLeft = '';
            titleText[1].style.display = 'none';
            selectBox[2].style.display = 'none';
            selectBox[3].style.display = 'none';
          }
        }
      }
    };

    onOffSwitch.forEach((elem, index) => {
      elem.addEventListener('click', () => {
        let target = event.target;
        target = target.closest('.onoffswitch');
        if (elem === target) {
          toggleSwitch(index);
          getCalc();
        }
      });
    })


    // Рассчет стоимости
    const calcResult = document.getElementById('calc-result');
    const expand = document.querySelectorAll('.expand')

    // Тип, диаметр и количество колец
    const getCalc = () => {
      let result;
      let chamber;
      let diameter;
      let diameter2;
      let rings;
      let rings2;

      if (onOffSwitchInner[0].style.marginLeft === '') {
        chamber = 10000;
        for (let i = 0; i < expand.length - 2; i++) {
          if (expand[i].value === '1.4 метра') {
            diameter = 1;
          } else if (expand[i].value === '2 метра') {
            diameter = 1.2;
          }

          if (expand[i].value === '1 штука') {
            rings = 1;
          } else if (expand[i].value === '2 штуки') {
            rings = 1.3;
          } else if (expand[i].value === '3 штуки') {
            rings = 1.5;
          }
        }
        result = chamber * diameter * rings;

      } else {
        chamber = 15000;
        for (let i = 0; i < expand.length - 2; i++) {
          if (expand[i].value === '1.4 метра') {
            diameter = 1;
          } else if (expand[i].value === '2 метра') {
            diameter = 1.2;
          }

          if (expand[i].value === '1 штука') {
            rings = 1;
          } else if (expand[i].value === '2 штуки') {
            rings = 1.3;
          } else if (expand[i].value === '3 штуки') {
            rings = 1.5;
          }
        }
        for (let i = 2; i < expand.length; i++) {
          if (expand[i].value === '1.4 метра') {
            diameter2 = 1;
          } else if (expand[i].value === '2 метра') {
            diameter2 = 1.2;
          }

          if (expand[i].value === '1 штука') {
            rings2 = 1;
          } else if (expand[i].value === '2 штуки') {
            rings2 = 1.3;
          } else if (expand[i].value === '3 штуки') {
            rings2 = 1.5;
          }
        }
        result = chamber * diameter * rings * diameter2 * rings2;
      }

      // Наличие днища колодца
      if (onOffSwitchInner[1].style.marginLeft === '-100%') {
        result += 1000;
      } else {
        result += 2000;
      }

      calcResult.value = result;
    };
    // getCalc();
  };
  getCalcSeptic();

  // Аккордеоны "Конструктор септика" и "Вопросы"
  const getAccordions = () => {
    // const accordion = document.getElementById('accordion-two');
    const panelHeading = document.querySelectorAll('.panel-heading');
    const panelCollapse = document.querySelectorAll('.panel-collapse');

    const toggleAccordion = (index) => {
      for (let i = 0; i < panelCollapse.length; i++) {
        if (index === i) {
          panelCollapse[i].classList.add('in');
        } else {
          panelCollapse[i].classList.remove('in');
        }
      }
    };

    document.body.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;
      target = target.closest('.panel-heading');
      if (target) {
        panelHeading.forEach((elem, index) => {
          if (elem === target) {
            toggleAccordion(index);
          }
        });
      }
    });
  };
  getAccordions();

});