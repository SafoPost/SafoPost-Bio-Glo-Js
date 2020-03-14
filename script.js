'use strict';

const popupOpenClose = () => {
  const popup = document.querySelectorAll('.popup');

  const popupCall = document.querySelector('.popup-call');
  const callBtn = document.querySelectorAll('.call-btn');

  const popupDiscount = document.querySelector('.popup-discount');
  const discountBtn = document.querySelectorAll('.discount-btn');

  const popupCheck = document.querySelector('.popup-check');
  const checkBtn = document.querySelector('.check-btn');

  const popupConsult = document.querySelector('.popup-consultation');
  const consultBtn = document.querySelector('.consultation-btn');


  callBtn.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      let target = event.target;

      if (target.closest('.construct-btn') || target.closest('.discount-btn')) {
        popupDiscount.style.display = 'block';
      } else if (target.closest('.call-btn')) {
        popupCall.style.display = 'block';
      }
    });
  });

  discountBtn.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      let target = event.target;

      if (target.closest('.discount-btn')) {
        popupDiscount.style.display = 'block';
      }
    });
  });

  checkBtn.addEventListener('click', () => {
    popupCheck.style.display = 'block'
  });

  consultBtn.addEventListener('click', () => {
    popupConsult.style.display = 'block'
  });

  // Закрываем все модальные акна
  popup.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      let target = event.target;
      if (target.closest('.popup-close') || !target.closest('.popup-content')) {
        popupCall.style.display = 'none';
        popupDiscount.style.display = 'none';
        popupCheck.style.display = 'none';
        popupConsult.style.display = 'none'
      }
    });
  });
};
popupOpenClose();




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
  });

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
};
getCalcSeptic();




const getAccordions = () => {
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





const promotions = () => {
  const addSentenceBtn = document.querySelector('.add-sentence-btn');
  const cardSentence = document.querySelectorAll('.col-md-4');

  addSentenceBtn.addEventListener('click', () => {
    addSentenceBtn.style.display = 'none';
    cardSentence.forEach((item) => {
      if (item.classList.contains('hidden')) {
        item.classList.remove('hidden');
      } else if (item.classList.contains('visible-sm-block')) {
        item.classList.remove('visible-sm-block');
      }
    });
  });

};
promotions();








const sendForm = () => {
  const errorMessage = 'Ошибка';
  const loadMessage = 'Идет отправка...';
  const successMessage = 'Отправлено!';
  const forms = document.querySelectorAll('form');
  // const form = document.querySelector('.main-form');

  const statusMessage = document.createElement('div');
  statusMessage.classList.add('status-message');
  statusMessage.style.cssText = `font-size: 16px;
    font-family: 'MuseoSansCyrl_bold',sans-serif;
    color: #333;`;
  // forms[0].appendChild(statusMessage);
  // statusMessage.textContent = loadMessage;


  // forms.forEach((item) => {
  //   let form = item;
  //   form.addEventListener('submit', (event) => {
  //     event.preventDefault();

  //     form.appendChild(statusMessage);
  //     statusMessage.textContent = loadMessage;

  //     const formData = new FormData(form);
  //     let body = {};
  //     formData.forEach((val, key) => {
  //       body[key] = val;
  //     });

  //     postData(body)
  //       .then((response) => {
  //         if (response.status !== 200) {
  //           throw new Error('Status network not 200');
  //         }
  //         statusMessage.textContent = successMessage;
  //       })
  //       .catch(() => {
  //         statusMessage.textContent = errorMessage;
  //       })
  //       .finally(() => {
  //         const formInput = document.querySelectorAll('input');
  //         for (let i = 0; i < formInput.length; i++) {
  //           let input = formInput[i];
  //           if (form.contains(input)) {
  //             input.value = '';
  //           }
  //         };
  //       })

  //   });

  // });

  document.body.addEventListener('submit', (event) => {
    event.preventDefault();
    let form;
    if (event.target.closest('form')) {
      forms.forEach((elem, index) => {
        if (elem === event.target) {
          form = forms[index];
        }
      });
    }
    form.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;

    const formData = new FormData(form);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });

    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Status network not 200');
        }
        statusMessage.textContent = successMessage;
      })
      .catch(() => {
        statusMessage.textContent = errorMessage;
      })
      .finally(() => {
        const formInput = document.querySelectorAll('input');
        for (let i = 0; i < formInput.length; i++) {
          let input = formInput[i];
          if (form.contains(input)) {
            input.value = '';
          }
        };
      })

  });

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      credentials: 'include'
    });
  };

};
sendForm();





const validInput = () => {
  document.body.addEventListener('input', (event) => {
    const patternPhone = /^\+?[0-9]*$/;
    const patternText = /^[А-Яа-яЁё ]*\??$/;
    if (event.target.placeholder === '+7(___)___-__-__') {
      if (!patternPhone.test(event.target.value)) {
        event.target.value = '';
      }
    }
    if (event.target.placeholder === 'Ваше имя' || event.target.placeholder === 'Введите свой вопрос') {
      if (!patternText.test(event.target.value)) {
        event.target.value = '';
      }
    }
  });
};

validInput();