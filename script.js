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
          }
        });
      }
    });

    const onOffSwitch = document.querySelector('.onoffswitch');
    const onOffSwitchInner = document.querySelector('.onoffswitch-inner');
    const onOffSwitchSwitch = document.querySelector('.onoffswitch-switch');
    const titleText = document.querySelectorAll('#collapseTwo>.panel-body>.title-text');
    const selectBox = document.querySelectorAll('#collapseTwo>.panel-body>.select-box');
    // console.log(onOffSwitchInner.style.marginLeft == 0)

    const toggleSwitch = () => {
      if (onOffSwitchInner.style.marginLeft == 0) {
        onOffSwitchSwitch.style.right = 'auto';
        onOffSwitchInner.style.marginLeft = '-100%';
        titleText[1].style.display = 'none';
        selectBox[2].style.display = 'none';
        selectBox[3].style.display = 'none';
      } else {
        onOffSwitchSwitch.style.right = '';
        onOffSwitchInner.style.marginLeft = '';
        titleText[1].style.display = 'inline-block';
        selectBox[2].style.display = 'inline-block';
        selectBox[3].style.display = 'inline-block';
      }
    };

    onOffSwitch.addEventListener('click', () => {
      let target = event.target;
      target = target.closest('.onoffswitch');
      if (target) {
        toggleSwitch();
      }
    });

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